import * as U from "react";
import ht, { useState as Be, useEffect as Ve, useCallback as xe, useRef as He, createElement as yi, useMemo as je, useContext as vi, createContext as wi, forwardRef as $n, useImperativeHandle as Si, useReducer as _i, memo as Vc, useId as xr } from "react";
import { createPortal as Yc } from "react-dom";
function Zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lr = { exports: {} }, Pn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function Jc() {
  if (so) return Pn;
  so = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, s, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      o = {};
      for (var i in s)
        i !== "key" && (o[i] = s[i]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: a,
      key: l,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return Pn.Fragment = t, Pn.jsx = n, Pn.jsxs = n, Pn;
}
var Fn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function qc() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === w ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case g:
          return "Fragment";
        case I:
          return "Profiler";
        case m:
          return "StrictMode";
        case x:
          return "Suspense";
        case S:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case y:
            return "Portal";
          case L:
            return (R.displayName || "Context") + ".Provider";
          case N:
            return (R._context.displayName || "Context") + ".Consumer";
          case D:
            var ee = R.render;
            return R = R.displayName, R || (R = ee.displayName || ee.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case C:
            return ee = R.displayName || null, ee !== null ? ee : e(R.type) || "Memo";
          case _:
            ee = R._payload, R = R._init;
            try {
              return e(R(ee));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function n(R) {
      try {
        t(R);
        var ee = !1;
      } catch {
        ee = !0;
      }
      if (ee) {
        ee = console;
        var Y = ee.error, K = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return Y.call(
          ee,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(R);
      }
    }
    function a(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === _)
        return "<...>";
      try {
        var ee = e(R);
        return ee ? "<" + ee + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var R = k.A;
      return R === null ? null : R.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function l(R) {
      if (M.call(R, "key")) {
        var ee = Object.getOwnPropertyDescriptor(R, "key").get;
        if (ee && ee.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, ee) {
      function Y() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ee
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: Y,
        configurable: !0
      });
    }
    function c() {
      var R = e(this.type);
      return $[R] || ($[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, ee, Y, K, J, X, pe, ne) {
      return Y = X.ref, R = {
        $$typeof: p,
        type: R,
        key: ee,
        props: X,
        _owner: J
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: c
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
        value: pe
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function u(R, ee, Y, K, J, X, pe, ne) {
      var re = ee.children;
      if (re !== void 0)
        if (K)
          if (F(re)) {
            for (K = 0; K < re.length; K++)
              f(re[K]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(re);
      if (M.call(ee, "key")) {
        re = e(R);
        var Q = Object.keys(ee).filter(function(ce) {
          return ce !== "key";
        });
        K = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", V[re + K] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          re,
          Q,
          re
        ), V[re + K] = !0);
      }
      if (re = null, Y !== void 0 && (n(Y), re = "" + Y), l(ee) && (n(ee.key), re = "" + ee.key), "key" in ee) {
        Y = {};
        for (var te in ee)
          te !== "key" && (Y[te] = ee[te]);
      } else Y = ee;
      return re && i(
        Y,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        re,
        X,
        J,
        s(),
        Y,
        pe,
        ne
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === p && R._store && (R._store.validated = 1);
    }
    var h = ht, p = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), L = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, F = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var A, $ = {}, B = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), se = E(a(o)), V = {};
    Fn.Fragment = g, Fn.jsx = function(R, ee, Y, K, J) {
      var X = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        R,
        ee,
        Y,
        !1,
        K,
        J,
        X ? Error("react-stack-top-frame") : B,
        X ? E(a(R)) : se
      );
    }, Fn.jsxs = function(R, ee, Y, K, J) {
      var X = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        R,
        ee,
        Y,
        !0,
        K,
        J,
        X ? Error("react-stack-top-frame") : B,
        X ? E(a(R)) : se
      );
    };
  })()), Fn;
}
var io;
function Xc() {
  return io || (io = 1, process.env.NODE_ENV === "production" ? lr.exports = Jc() : lr.exports = qc()), lr.exports;
}
var r = Xc(), Na = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var lo;
function Qc() {
  return lo || (lo = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", l = 0; l < arguments.length; l++) {
          var i = arguments[l];
          i && (o = s(o, a(i)));
        }
        return o;
      }
      function a(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var l = "";
        for (var i in o)
          t.call(o, i) && o[i] && (l = s(l, i));
        return l;
      }
      function s(o, l) {
        return l ? o ? o + " " + l : o + l : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(Na)), Na.exports;
}
var Kc = Qc();
const be = /* @__PURE__ */ Zc(Kc), ly = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...s
}) => {
  const o = be(
    "nhsuk-action-link__link",
    a
  );
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ r.jsxs(
    "a",
    {
      className: o,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...s,
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
}, ki = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: n,
  variant: a = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const s = (o) => {
    const l = o.icon ? /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": o.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ r.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, i = o.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      l,
      i
    ] });
    return o.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: o.href,
        children: c
      }
    ) : o.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ r.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: c })
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: c });
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: be(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        n
      ),
      "aria-label": e,
      children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-account__list", children: t.map(
        (o, l) => o && /* @__PURE__ */ r.jsx(
          "li",
          {
            className: be(
              "nhsuk-account__item nhsuk-header__account-item",
              o.className
            ),
            children: s(o)
          },
          l
        )
      ) })
    }
  );
};
var Ci = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Ci || {}), Ni = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Ni || {});
function ed(e) {
  const t = e.variant || "primary", n = e.size || "default", a = !!e.fullWidth, s = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    n !== "default" ? `nhs-aria-button--${n}` : "",
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
const { forwardRef: td, useCallback: Xt, useState: ja } = U;
function nd(e, t) {
  const {
    children: n,
    variant: a = Ci.Primary,
    size: s = Ni.Default,
    fullWidth: o = !1,
    className: l = "",
    preventDoubleClick: i = !1,
    ...c
  } = e, [d, u] = ja(!1), [f, h] = ja(!1), [p, y] = ja(!1), g = ed({
    variant: a,
    size: s,
    fullWidth: o,
    className: l,
    preventDoubleClick: i,
    href: "href" in c ? c.href : void 0
  }), m = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", I = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...m && { "data-disabled": "true" }
  }, N = Xt(
    () => !m && u(!0),
    [m]
  ), L = Xt(() => u(!1), []), D = Xt(
    () => !m && h(!0),
    [m]
  ), x = Xt(() => {
    h(!1), u(!1);
  }, []), S = Xt(() => y(!0), []), C = Xt(() => y(!1), []), _ = Xt(
    (re) => {
      re.key === " " && ("href" in c || re.currentTarget.getAttribute("role") === "button") && (re.preventDefault(), re.currentTarget.click());
    },
    [c]
  ), b = Xt(
    (re) => {
      if (i) {
        const Q = re.currentTarget;
        if (Q.getAttribute("data-processing") === "true") {
          re.preventDefault();
          return;
        }
        Q.setAttribute("data-processing", "true"), setTimeout(() => {
          Q.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [i]
  );
  if ("href" in c && c.href) {
    const {
      id: re,
      style: Q,
      title: te,
      ["aria-label"]: ce,
      ["aria-describedby"]: W,
      ["aria-labelledby"]: ie,
      tabIndex: ae,
      ...he
    } = c, oe = c;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: oe.href,
        target: oe.target,
        rel: oe.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...I,
        ...i && { "data-prevent-double-click": "true" },
        ...he,
        onKeyDown: (fe) => {
          oe.onKeyDown?.(fe), _(fe);
        },
        onClick: (fe) => {
          oe.onClick?.(fe), b(fe);
        },
        onMouseDown: (fe) => {
          oe.onMouseDown?.(fe), N();
        },
        onMouseUp: (fe) => {
          oe.onMouseUp?.(fe), L();
        },
        onMouseEnter: (fe) => {
          oe.onMouseEnter?.(fe), D();
        },
        onMouseLeave: (fe) => {
          oe.onMouseLeave?.(fe), x();
        },
        onFocus: (fe) => {
          oe.onFocus?.(fe), S();
        },
        onBlur: (fe) => {
          oe.onBlur?.(fe), C();
        },
        "aria-disabled": oe["aria-disabled"],
        ...oe["aria-disabled"] === "true" && { tabIndex: -1 },
        id: re,
        style: Q,
        title: te,
        "aria-label": ce,
        "aria-describedby": W,
        "aria-labelledby": ie,
        tabIndex: ae,
        children: n
      }
    );
  }
  const {
    id: w,
    style: k,
    title: M,
    ["aria-label"]: F,
    ["aria-describedby"]: E,
    ["aria-labelledby"]: A,
    tabIndex: $,
    name: B,
    value: se,
    form: V,
    formAction: R,
    formEncType: ee,
    formMethod: Y,
    formNoValidate: K,
    formTarget: J,
    autoFocus: X,
    ...pe
  } = c, ne = c;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ne.type || "button",
      disabled: ne.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...I,
      ...i && { "data-prevent-double-click": "true" },
      ...ne.disabled && { "aria-disabled": "true" },
      ...pe,
      onKeyDown: (re) => {
        ne.onKeyDown?.(re), _(re);
      },
      onClick: (re) => {
        ne.onClick?.(re), b(re);
      },
      onMouseDown: (re) => {
        ne.onMouseDown?.(re), N();
      },
      onMouseUp: (re) => {
        ne.onMouseUp?.(re), L();
      },
      onMouseEnter: (re) => {
        ne.onMouseEnter?.(re), D();
      },
      onMouseLeave: (re) => {
        ne.onMouseLeave?.(re), x();
      },
      onFocus: (re) => {
        ne.onFocus?.(re), S();
      },
      onBlur: (re) => {
        ne.onBlur?.(re), C();
      },
      id: w,
      style: k,
      title: M,
      "aria-label": F,
      "aria-describedby": E,
      "aria-labelledby": A,
      tabIndex: $,
      name: B,
      value: se,
      form: V,
      formAction: R,
      formEncType: ee,
      formMethod: Y,
      formNoValidate: K,
      formTarget: J,
      autoFocus: X,
      children: n
    }
  );
}
const ut = td(nd);
ut.displayName = "Button";
const Ls = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...l
}) => {
  const i = be(
    "nhsuk-back-link",
    a
  ), c = be(
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
  return /* @__PURE__ */ r.jsx("div", { className: i, children: s === "button" ? /* @__PURE__ */ r.jsx(
    "button",
    {
      className: c,
      onClick: o,
      type: "button",
      ...l,
      children: d()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: c,
      href: n,
      ...l,
      children: d()
    }
  ) });
};
function rd(e) {
  const { color: t = "default", noBorder: n, closable: a, disabled: s, className: o } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    n ? "nhsuk-tag--no-border" : "",
    a ? "nhsuk-tag--closable" : "",
    s ? "nhsuk-tag--disabled" : "",
    o || ""
  ].filter(Boolean).join(" "), showClose: !!a, disabled: !!s };
}
const Ze = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: l,
  disabled: i = !1,
  className: c,
  ...d
}) => {
  const u = rd({ color: a, noBorder: s, closable: o, disabled: i, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !i && l && l();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: u.classes, ...d, children: [
    n || (t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: f,
        disabled: i,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, ad = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: l,
  errorMessage: i,
  className: c,
  children: d,
  onChange: u,
  onBlur: f,
  onFocus: h,
  attributes: p,
  ...y
}) => {
  const [g, m] = Be(a), I = n !== void 0, N = I ? n : g;
  Ve(() => {
    I || m(a);
  }, [a, I]);
  const L = (_) => {
    const b = _.target.checked;
    I || m(b), u?.(b, _);
  }, D = l ? `${e}-hint` : void 0, x = i ? `${e}-error` : void 0, S = [D, x].filter(Boolean).join(" ") || void 0, C = be(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!i
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: C, ...y, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: N,
        disabled: s,
        onChange: L,
        onBlur: f,
        onFocus: h,
        "aria-describedby": S,
        ...p
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    l && /* @__PURE__ */ r.jsx("div", { id: D, className: "nhsuk-checkboxes__hint", children: l }),
    i && /* @__PURE__ */ r.jsxs("div", { id: x, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      i
    ] })
  ] }) }) });
};
ad.displayName = "Checkbox";
function ji(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const $s = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: l = !1,
  readOnly: i = !1,
  required: c = !1,
  hasError: d = !1,
  describedBy: u,
  className: f,
  width: h = "full",
  inputMode: p,
  autoComplete: y,
  maxLength: g,
  minLength: m,
  pattern: I,
  step: N,
  min: L,
  max: D,
  showValueLabels: x = !1,
  showCurrentValue: S = !1,
  valueLabels: C,
  onChange: _,
  onBlur: b,
  onFocus: w,
  onKeyDown: k,
  ...M
}) => {
  const [F, E] = Be(a || s || (n === "range" ? L || "0" : ""));
  Ve(() => {
    a !== void 0 && E(a);
  }, [a]);
  const A = (J) => {
    const X = J.target;
    E(X.value), ("type" in J && J.nativeEvent || J.type === "keydown") && _?.(J);
  }, { classes: $, isRange: B } = ji({ type: n, hasError: d, width: h, className: f }), se = a !== void 0, V = {
    id: e,
    name: t,
    type: n,
    placeholder: o,
    disabled: l,
    readOnly: i,
    required: c,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: y,
    maxLength: g,
    minLength: m,
    pattern: I,
    step: N,
    min: L,
    max: D,
    onChange: A,
    onBlur: b,
    onFocus: w,
    onKeyDown: (J) => {
      if (B && /[0-9]/.test(J.key)) {
        const X = (F?.toString() || "") + J.key;
        J.target.value = X, A(J);
      }
      k?.(J);
    },
    ...M
  }, R = !se && s !== void 0 ? { defaultValue: s } : {}, ee = se ? { value: a } : {}, Y = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: $,
      ...ee,
      ...R,
      "data-current-value": F,
      ...V
    }
  ), K = B ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    x && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: C?.min || L || "0" }),
      Y(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: C?.max || D || "100" })
    ] }),
    !x && Y(),
    S && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      C?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: F })
    ] }) })
  ] }) : null;
  return B ? K : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: $,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: o,
      disabled: l,
      readOnly: i,
      required: c,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: y,
      maxLength: g,
      minLength: m,
      pattern: I,
      step: N,
      min: L,
      max: D,
      onChange: _,
      onBlur: b,
      onFocus: w,
      onKeyDown: k,
      ...M
    }
  );
};
function sd(e) {
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
const As = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const l = sd({ size: a, isPageHeading: n, className: t, htmlFor: e }), i = l.tag;
  return /* @__PURE__ */ r.jsx(i, { className: l.classes, htmlFor: l.htmlFor, ...o, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function od(e) {
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
const Es = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...s
}) => {
  const o = od({
    className: n,
    describedBy: a,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), l = () => {
    const i = t?.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return o.legendIsPageHeading ? /* @__PURE__ */ r.jsx("h1", { className: "nhsuk-fieldset__heading", children: i }) : i;
  };
  return /* @__PURE__ */ r.jsxs(
    "fieldset",
    {
      className: o.fieldsetClasses,
      "aria-describedby": o.describedBy,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ r.jsx("legend", { className: o.legendClasses, children: l() }),
        e
      ]
    }
  );
};
function id(e) {
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
const ld = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: l,
  errorMessage: i,
  className: c = "",
  small: d = !1,
  onChange: u,
  fieldsetAttributes: f,
  attributes: h,
  ...p
}) => {
  const [y, g] = Be(
    e.filter((_) => _.checked).map((_) => _.value)
  ), m = n || t, I = l ? `${m}-hint` : void 0, N = i ? `${m}-error` : void 0, L = [I, N].filter(Boolean).join(" ") || void 0, D = (_, b) => {
    let w;
    b ? w = [...y, _] : w = y.filter((k) => k !== _), g(w), u?.(w);
  }, x = () => e.map((_, b) => {
    const w = `${m}-${b + 1}`, k = `${w}-conditional`, M = y.includes(_.value), F = _.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: w,
          name: t,
          type: "checkbox",
          value: _.value,
          checked: M,
          disabled: F,
          onChange: (E) => D(_.value, E.target.checked),
          "aria-describedby": _.hint ? `${w}-hint` : L,
          ..._.conditional && {
            "aria-controls": k,
            "aria-expanded": M ? "true" : "false"
          },
          ..._.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: w, children: _.text }),
      _.hint && /* @__PURE__ */ r.jsx("div", { id: `${w}-hint`, className: "nhsuk-checkboxes__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: be("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !M
          }),
          id: k,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ r.jsx(As, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ r.jsx($s, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }), { classes: S, formGroupClasses: C } = id({ small: d, className: c, hasError: !!i });
  return /* @__PURE__ */ r.jsx("div", { className: C, ...h, ...p, children: /* @__PURE__ */ r.jsxs(
    Es,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: L,
      ...f,
      children: [
        l && /* @__PURE__ */ r.jsx("div", { id: I, className: "nhsuk-hint", children: l }),
        i && /* @__PURE__ */ r.jsxs("div", { id: N, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          i
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: S, children: x() })
      ]
    }
  ) });
};
ld.displayName = "Checkboxes";
function cd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const dd = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: l = !1,
  required: i = !1,
  hasError: c = !1,
  describedBy: d,
  className: u,
  rows: f = 5,
  cols: h,
  maxLength: p,
  minLength: y,
  wrap: g = "soft",
  resize: m = "vertical",
  autoComplete: I,
  spellCheck: N,
  onChange: L,
  onBlur: D,
  onFocus: x,
  onKeyDown: S,
  ...C
}) => {
  const { classes: _, describedBy: b } = cd({ hasError: c, resize: m, className: u, describedBy: d });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: _,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: l,
      required: i,
      "aria-describedby": b,
      rows: f,
      cols: h,
      maxLength: p,
      minLength: y,
      wrap: g,
      autoComplete: I,
      spellCheck: N,
      onChange: L,
      onBlur: D,
      onFocus: x,
      onKeyDown: S,
      ...C
    }
  );
};
function ud(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Mi = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = ud({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: s.classes, id: s.id, ...a, children: n });
}, cy = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: s,
  value: o,
  defaultValue: l,
  rows: i,
  className: c,
  countMessage: d,
  onCountChange: u,
  onChange: f,
  ...h
}) => {
  const p = o ?? l ?? "", [y, g] = Be(p), [m, I] = Be(0), [N, L] = Be(!1), [D, x] = Be(!1), S = xe((M) => n ? M.trim() === "" ? 0 : M.trim().split(/\s+/).length : M.length, [n]);
  Ve(() => {
    const M = S(y), F = t || n || 0, E = F - M, A = Math.floor(F * (a / 100));
    I(E), L(M > F), x(M >= A || M > F), u && u(M, E);
  }, [y, t, n, a, S, u]);
  const C = (M) => {
    const F = M.target.value;
    g(F), f && f(M);
  }, _ = () => {
    const M = t || n || 0, F = n ? "word" : "character", E = n ? "words" : "characters";
    if (!D)
      return `You can enter up to ${M} ${M === 1 ? F : E}`;
    if (N) {
      const A = Math.abs(m);
      return `You have ${A} ${A === 1 ? F : E} too many`;
    } else
      return `You have ${m} ${m === 1 ? F : E} remaining`;
  }, b = be(
    "nhsuk-character-count",
    c
  ), w = be(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !D,
      "nhsuk-error-message": N
    },
    d?.classes
  ), k = be(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": N
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: b,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          dd,
          {
            id: e,
            name: s,
            value: o !== void 0 ? y : void 0,
            defaultValue: o === void 0 ? l ?? y : void 0,
            rows: i,
            className: k,
            onChange: C,
            "aria-describedby": `${e}-info`,
            "aria-invalid": N || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Mi,
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
function fd(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const pd = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
}) => {
  const l = be(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ r.jsx(
    "option",
    {
      className: l,
      value: e,
      disabled: t,
      ...o,
      children: s
    }
  );
}, hd = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: s,
  disabled: o = !1,
  required: l = !1,
  hasError: i = !1,
  describedBy: c,
  className: d,
  multiple: u = !1,
  size: f,
  autoComplete: h,
  options: p,
  children: y,
  onChange: g,
  onBlur: m,
  onFocus: I,
  ...N
}) => {
  const { classes: L } = fd({ hasError: i, className: d }), D = () => p ? p.map((S, C) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: S.value,
      disabled: S.disabled,
      "data-initial-selected": S.selected || void 0,
      children: S.text
    },
    `${S.value}-${C}`
  )) : null, x = s === void 0 && a === void 0 && p ? p.find((S) => S.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: L,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: s !== void 0 ? s : x,
      disabled: o,
      required: l,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: h,
      onChange: g,
      onBlur: m,
      onFocus: I,
      ...N,
      children: y || D()
    }
  );
}, br = hd;
br.Option = pd;
function md(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Ii(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
  handleFocus: l,
  handleKeyDown: i,
  itemsRef: c,
  InputComponent: d
}) {
  const {
    onChange: u,
    onBlur: f,
    onFocus: h,
    ...p
  } = e, {
    name: y,
    hasError: g = !1,
    describedBy: m,
    className: I,
    size: N = "normal",
    inline: L = !1,
    options: D,
    ...x
  } = p, { classes: S, describedBy: C } = md({ hasError: g, size: N, inline: L, className: I, describedBy: m });
  return /* @__PURE__ */ r.jsx(Es, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: S,
      ...x,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: D.map((_, b) => {
        const w = `${y}-${b}`, k = _.conditional ? `${w}-conditional` : void 0, M = n === _.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: w,
              name: y,
              type: "radio",
              value: _.value,
              disabled: _.disabled,
              ...t === "client" ? {
                checked: M,
                onChange: s,
                onBlur: o,
                onFocus: l,
                onKeyDown: i,
                ref: (F) => {
                  F && c && (c.current[b] = F);
                }
              } : {
                defaultChecked: M,
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
              className: be("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !M
              }),
              id: k,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                _.conditional.label && /* @__PURE__ */ r.jsx(
                  As,
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
const dy = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o }) => {
  const [l, i] = Be(e || t || ""), c = He([]), d = He(l), u = (p) => {
    const y = p.target.value;
    y !== d.current && (d.current = y, i(y), n?.(p));
  }, f = (p) => {
    s?.(p);
  }, h = xe((p) => {
    const { key: y } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(y)) return;
    p.preventDefault();
    const g = c.current.filter((L) => L && !L.disabled), m = g.indexOf(p.currentTarget);
    if (m === -1) return;
    let I = m;
    ["ArrowDown", "ArrowRight"].includes(y) ? I = (m + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(y) && (I = (m - 1 + g.length) % g.length);
    const N = g[I];
    N && (N.focus(), N.checked || N.click());
  }, []);
  return Ii(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o },
    {
      variant: "client",
      selectedValue: l,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: h,
      itemsRef: c,
      InputComponent: $s
    }
  );
};
function gd(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: s,
    defaultValue: o,
    placeholder: l,
    disabled: i = !1,
    readOnly: c = !1,
    required: d = !1,
    hasError: u = !1,
    describedBy: f,
    className: h,
    width: p = "full",
    inputMode: y,
    autoComplete: g,
    maxLength: m,
    minLength: I,
    pattern: N,
    step: L,
    min: D,
    max: x,
    showValueLabels: S = !1,
    showCurrentValue: C = !1,
    valueLabels: _,
    // Strip interactive handlers in server variant
    onChange: b,
    onBlur: w,
    onFocus: k,
    onKeyDown: M,
    ...F
  } = e, { classes: E, isRange: A } = ji({
    type: a,
    hasError: u,
    width: p,
    className: h
  }), $ = {
    id: t,
    name: n,
    type: a,
    placeholder: l,
    disabled: i,
    readOnly: c,
    required: d,
    "aria-describedby": f,
    inputMode: y,
    autoComplete: g,
    maxLength: m,
    minLength: I,
    pattern: N,
    step: L,
    min: D,
    max: x,
    ...F
  };
  if (A) {
    const B = s ?? o ?? (typeof D < "u" ? String(D) : "0"), se = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: E,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
        "data-current-value": B,
        ...$
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      S ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: _?.min || D || "0" }),
        se,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: _?.max || x || "100" })
      ] }) : se,
      C && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        _?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: B })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: E,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ...$
    }
  );
}
const uy = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Ii(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: gd
    }
  );
};
var fn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(fn || {}), xd = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(xd || {}), bd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(bd || {}), yd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(yd || {});
const Di = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const l = be(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), i = a ? { maxWidth: a, ...s || {} } : s;
  return /* @__PURE__ */ r.jsx("div", { className: l, style: i, ...o, children: e });
}, Kt = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: s,
  ...o
}) => {
  const l = be(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    a ? `nhsuk-grid-row-align-${a}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: l, style: n, ...o, children: e });
}, Wn = ({
  children: e,
  width: t = fn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: l,
  forceWidth: i = !1,
  style: c,
  align: d,
  ...u
}) => {
  const f = be(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !i,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: i,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: !!n,
      [`nhsuk-u-${a}-tablet`]: !!a,
      [`nhsuk-u-${s}-desktop`]: !!s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    l
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...u, children: e });
}, Ga = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...s
}) => {
  const o = ht.Children.toArray(e), l = o[0], i = ht.isValidElement(l) && (l.type === Kt || typeof l.props == "object" && l.props && "className" in l.props && typeof l.props.className == "string" && l.props.className.includes("nhsuk-grid-row")), c = typeof a == "number" ? `${a}px` : a;
  let d = e;
  if (i)
    d = o.map((u, f) => {
      if (!ht.isValidElement(u)) return u;
      const h = u, p = h.props || {}, y = typeof p.className == "string" ? p.className : "";
      if (!(h.type === Kt || y.includes("nhsuk-grid-row"))) return u;
      const m = p.rowGap, I = m !== void 0 ? typeof m == "number" ? `${m}px` : m : c, N = f === 0 ? void 0 : I;
      if (!N) return u;
      const L = { ...p.style || {}, marginTop: N };
      return ht.cloneElement(h, { style: L });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ r.jsx(Kt, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(Di, { className: t, style: n, ...s, children: d });
}, vd = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: l,
  ...i
}) => {
  const c = l || (t === "number" ? "ol" : "ul"), d = be(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": a,
      [`nhsuk-list--${n}`]: n !== "medium"
    },
    s
  );
  return /* @__PURE__ */ r.jsx(c, { className: d, role: o, ...i, children: e });
}, wd = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = be("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Sd = vd;
Sd.Item = wd;
const fy = ({
  debug: e = !1,
  className: t,
  children: n,
  ...a
}) => {
  if (!n)
    return null;
  const s = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: s, ...a, children: n });
}, py = {
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
}, hy = ({
  debug: e = !1,
  className: t,
  children: n,
  ...a
}) => {
  if (!n)
    return null;
  const s = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: s, ...a, children: n });
}, my = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, gy = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ti = ({
  as: e = "main",
  size: t = "default",
  className: n,
  children: a,
  ...s
}) => {
  const o = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(e, { className: o, ...s, children: a });
};
function _d(e) {
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
function kd(e) {
  const t = e.level ?? _d(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Wt = ({ level: e, className: t, text: n, html: a, children: s, size: o, marginBottom: l, ...i }) => {
  const c = kd({ level: e, size: o, className: t, marginBottom: l }), d = s || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return yi(c.tag, { className: c.classes, style: c.style, ...i }, d);
};
function Cd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const co = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...s }) => {
  const o = Cd({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, xy = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: l,
  ...i
}) => {
  const c = He(null);
  Ve(() => {
    c.current && c.current.focus();
  }, []);
  const d = be(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (p) => {
    const y = p.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
    return p.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: p.href,
        ...p.attributes,
        children: y
      }
    ) : y;
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
      ...i,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          l && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: l }),
          !l && (n || a) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((p, y) => /* @__PURE__ */ r.jsx("li", { children: h(p) }, y)) })
        ] })
      ]
    }
  );
}, by = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: l,
  errorMessage: i,
  onChange: c,
  ...d
}) => {
  const [u, f] = Be(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [h, p] = Be({}), y = (A) => A % 4 === 0 && A % 100 !== 0 || A % 400 === 0, g = (A, $) => {
    const B = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return A === 2 && y($) ? 29 : B[A - 1];
  }, m = (A, $, B) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Day must be a number";
    const se = parseInt(A, 10);
    if (se < 1 || se > 31) return "Day must be between 1 and 31";
    if ($ && B) {
      const V = parseInt($, 10), R = parseInt(B, 10);
      if (!isNaN(V) && !isNaN(R) && V >= 1 && V <= 12) {
        const ee = g(V, R);
        if (se > ee)
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
          ][V - 1]} ${R} only has ${ee} days`;
      }
    }
  }, I = (A) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Month must be a number";
    const $ = parseInt(A, 10);
    if ($ < 1 || $ > 12) return "Month must be between 1 and 12";
  }, N = (A) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Year must be a number";
    const $ = parseInt(A, 10), B = (/* @__PURE__ */ new Date()).getFullYear();
    if ($ < 1900 || $ > B + 10)
      return `Year must be between 1900 and ${B + 10}`;
  }, L = (A, $, B) => {
    if (!A || !$ || !B) return;
    const se = parseInt(A, 10), V = parseInt($, 10), R = parseInt(B, 10);
    if (isNaN(se) || isNaN(V) || isNaN(R) || V < 1 || V > 12 || R < 1900) return;
    const ee = g(V, R);
    se < 1 || se > ee;
  }, D = xe((A, $) => {
    const B = {
      ...u,
      [A]: $
    };
    f(B), c && c(B);
  }, [u, c]), x = xe((A) => {
    const $ = u[A];
    let B;
    if (A === "day")
      B = m($, u.month, u.year);
    else if (A === "month") {
      if (B = I($), !B && u.day) {
        const se = m(u.day, $, u.year);
        p((V) => ({
          ...V,
          day: se
        }));
      }
    } else if (A === "year" && (B = N($), !B && u.day && u.month)) {
      const se = m(u.day, u.month, $);
      p((V) => ({
        ...V,
        day: se
      }));
    }
    if (p((se) => ({
      ...se,
      [A]: B
    })), u.day && u.month && u.year) {
      const se = L(
        A === "day" ? $ : u.day,
        A === "month" ? $ : u.month,
        A === "year" ? $ : u.year
      );
      se && p((V) => ({
        ...V,
        day: se
      }));
    }
  }, [u, m, I, N, L]), S = je(() => [
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
  ], []), C = n || S;
  let _ = o?.describedBy || "";
  const b = l ? `${e}-hint` : "", w = i ? `${e}-error` : "";
  b && (_ = _ ? `${_} ${b}` : b), w && (_ = _ ? `${_} ${w}` : w);
  const k = Object.values(h).some((A) => A), M = be(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": i || k
    }
  ), F = be(
    "nhsuk-date-input",
    t
  ), E = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    l && /* @__PURE__ */ r.jsx(
      Mi,
      {
        id: b,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    i && /* @__PURE__ */ r.jsx(
      co,
      {
        id: w,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    Object.entries(h).map(
      ([A, $]) => $ ? /* @__PURE__ */ r.jsxs(
        co,
        {
          id: `${e}-${A}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            $
          ]
        },
        `${A}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: F, id: e, "data-testid": "date-input", ...d, children: C.map((A) => {
      const $ = A.id || `${e}-${A.name}`, B = a ? `${a}[${A.name}]` : A.name, se = A.label || A.name.charAt(0).toUpperCase() + A.name.slice(1), V = h[A.name], R = u[A.name] || "";
      let ee = _;
      if (V) {
        const Y = `${e}-${A.name}-error`;
        ee = ee ? `${ee} ${Y}` : Y;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          As,
          {
            htmlFor: $,
            className: "nhsuk-date-input__label",
            children: se
          }
        ),
        /* @__PURE__ */ r.jsx(
          $s,
          {
            id: $,
            name: B,
            value: R,
            className: be("nhsuk-date-input__input", A.classes, {
              "nhsuk-input--error": V
            }),
            inputMode: A.inputmode,
            autoComplete: A.autocomplete,
            pattern: A.pattern,
            "aria-describedby": ee || void 0,
            hasError: !!V,
            onChange: (Y) => D(A.name, Y.target.value),
            onBlur: () => x(A.name)
          }
        )
      ] }, A.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: M, children: o ? /* @__PURE__ */ r.jsx(
    Es,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: _ || void 0,
      children: E()
    }
  ) : E() });
}, Li = {
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
}, $i = wi(Li), Nd = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Li, ...t };
  return /* @__PURE__ */ r.jsx($i.Provider, { value: n, children: e });
}, yy = () => {
  const e = vi($i);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function jd() {
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
function Md() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = jd(), document.head.appendChild(e);
}
const vy = ({ children: e, theme: t }) => (Ve(() => {
  Md();
}, []), /* @__PURE__ */ r.jsx(Nd, { theme: t, children: e })), Id = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", Dd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Td = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Ld = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", $d = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", Ad = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Ed = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var Ai = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(Ai || {}), Ei = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Ei || {});
const Pd = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Id,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: $d,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Ld,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: Dd,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Td,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: Ad,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Ed,
      ariaLabel: "FDP"
    }
  }
};
function Fd(e, t = "full") {
  return Pd[e]?.[t];
}
function Rd(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: s = !1,
  visibleItems: o,
  dropdownVisible: l,
  toggleMenu: i,
  navContainerRef: c,
  navListRef: d,
  searchNode: u,
  brand: f
}) {
  const {
    className: h,
    logo: p = {},
    service: y = {},
    serviceName: g,
    organisation: m,
    search: I,
    account: N,
    navigation: L,
    containerClasses: D,
    variant: x = "default",
    attributes: S = {},
    maxVisibleItems: C,
    // deprecated (ignored)
    responsiveNavigation: _ = !0,
    logoVariant: b = Ei.Full,
    ...w
  } = e, k = {
    ...y,
    text: y?.text ?? g
  };
  "maxVisibleItems" in w && delete w.maxVisibleItems;
  const M = k.href && !p.href || k.href && k.href === p.href, F = M ? k.href : p.href, E = be(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": x === "organisation" || m,
      "nhsuk-header--white": x === "white"
    },
    h
  ), A = be(
    "nhsuk-header__container",
    D
  ), $ = be(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": L?.white,
      "nhsuk-header__navigation--justified": L?.justified
    },
    L?.className
  ), se = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), V = () => /* @__PURE__ */ r.jsxs(
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
  ), R = () => {
    if (p.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: p.src,
          width: "280",
          alt: p.ariaLabel || (se === "fdp" ? "FDP" : "NHS")
        }
      );
    if (se === "fdp") {
      const X = Fd(Ai.FDP, b);
      if (X?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: X.src,
            "data-logo-variant": b,
            width: "280",
            alt: X.ariaLabel || "FDP"
          }
        );
    }
    return V();
  }, ee = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, Y = (X, pe) => X ? pe ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: pe, children: X }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: X }) : null, K = (X) => X.active || X.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: X.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: X.html } }) : X.text }) : X.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: X.html } }) : X.text, J = () => /* @__PURE__ */ r.jsx(
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
  return L?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: E,
      role: "banner",
      "data-module": "nhsuk-header",
      ...S,
      ...w,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: A, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            F ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: F, children: [
              R(),
              ee(),
              M && Y(k.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              R(),
              ee(),
              M && Y(k.text)
            ] }),
            k.text && !M && Y(k.text, k.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            ki,
            {
              ...N,
              variant: x === "white" ? "white" : "default"
            }
          )
        ] }),
        L && L.items && L.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: $,
            "aria-label": L.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: be(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  D
                ),
                ref: c,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      (L?.items || []).map((X, pe) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: be(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": X.active || X.current,
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && pe >= (o ?? 0)
                            },
                            X.className
                          ),
                          ...X.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: X.href,
                              ...X.active || X.current ? { "aria-current": X.current ? "page" : "true" } : {},
                              children: K(X)
                            }
                          )
                        },
                        pe
                      )),
                      s && o !== void 0 && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs(
                        "button",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          type: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": a ? "true" : "false",
                          "aria-controls": "nhsuk-header-more-menu",
                          onClick: i,
                          children: [
                            /* @__PURE__ */ r.jsx("span", { children: "More" }),
                            J()
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
        n && L && L.items && L.items.length > 0 && a && l && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !l,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: L.items.slice(o ?? 0).map((X, pe) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: be("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": X.active || X.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: X.href,
                    ...X.active || X.current ? { "aria-current": X.current ? "page" : "true" } : {},
                    onClick: () => {
                      i?.();
                    },
                    children: K(X)
                  }
                )
              },
              `overflow-${(o ?? 0) + pe}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const Va = wi(void 0);
function wy({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, s] = Be(e);
  Ve(() => {
    s(e);
  }, [e]), Ve(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const o = je(() => ({ brand: a, setBrand: s }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(Va.Provider, { value: o, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(Va.Provider, { value: o, children: n });
}
function Bd() {
  const e = vi(Va);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Hd = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: l = "Search the NHS website",
  visuallyHiddenButton: i = "Search",
  className: c,
  disabled: d = !1,
  callbacks: u = {},
  isLoading: f = !1,
  showResults: h = !1,
  results: p = [],
  formAttributes: y = {},
  inputAttributes: g = {},
  buttonAttributes: m = {},
  preventDefaultSubmit: I = !1,
  debounceMs: N = 300,
  minQueryLength: L = 1
}) => {
  const [D, x] = Be(""), [S, C] = Be(!1), _ = He(void 0), b = He(null), w = He(null), k = e === "controlled" && s !== void 0, M = k ? s : D, F = xe(
    (K) => {
      _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        u.onChange && K.length >= L && u.onChange(K);
      }, N);
    },
    [u.onChange, N, L]
  ), E = xe(
    (K) => {
      const J = K.target.value;
      k || x(J), e !== "form" && F(J);
    },
    [k, e, F]
  ), A = xe(
    (K) => {
      const J = M.trim(), X = {
        query: J,
        timestamp: Date.now(),
        formData: new FormData(K.currentTarget)
      };
      e === "controlled" || e === "hybrid" && I ? (K.preventDefault(), u.onSearch && J.length >= L && u.onSearch(X)) : e === "hybrid" && u.onSearch && J.length >= L && u.onSearch(X);
    },
    [
      e,
      M,
      u.onSearch,
      I,
      L
    ]
  ), $ = xe(() => {
    C(!0), u.onFocus?.();
  }, [u.onFocus]), B = xe(() => {
    C(!1), u.onBlur?.();
  }, [u.onBlur]), se = xe(() => {
    k || x(""), u.onClear?.(), w.current?.focus();
  }, [k, u.onClear]);
  Ve(() => () => {
    _.current && clearTimeout(_.current);
  }, []);
  const V = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: be("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), R = () => /* @__PURE__ */ r.jsx(
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
  ), ee = () => !M || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: se,
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
  ), Y = () => !h || !p.length || !S ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((K) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: K.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: K.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: K.title }),
            K.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: K.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: K.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: K.title }),
            K.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: K.description })
          ]
        }
      )
    },
    K.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: be("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": S,
        "nhsuk-header__search--has-results": h && p.length > 0
      }),
      children: [
        /* @__PURE__ */ r.jsxs(
          "form",
          {
            ref: b,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? n : void 0,
            role: "search",
            onSubmit: A,
            ...y,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: l }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: w,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: o,
                    autoComplete: "off",
                    value: M,
                    onChange: E,
                    onFocus: $,
                    onBlur: B,
                    disabled: d || f,
                    ...h && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...g
                  }
                ),
                ee()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && M.length < L,
                  ...m,
                  children: [
                    f ? R() : V(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : i })
                  ]
                }
              )
            ]
          }
        ),
        Y()
      ]
    }
  );
}, Pi = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: s,
  account: o,
  navigation: l,
  containerClasses: i,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, h] = Be(!1), [p, y] = Be(!1), [g, m] = Be(l?.items?.length || 0), [I, N] = Be(!1), [L, D] = Be(!1), x = He(null), S = He(null), C = He(!1);
  Ve(() => {
    typeof window > "u" || D(!0);
  }, []), Ve(() => {
    if (typeof document > "u") return;
    const M = (F) => {
      F.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [f]);
  const _ = He(null), b = xe(() => {
    if (!L || !l?.items || l.items.length === 0 || C.current) return;
    const M = x.current, F = S.current;
    if (!M || !F) return;
    C.current = !0, M.classList.add("nhsuk-header__navigation-container--measuring");
    const E = M.clientWidth, A = Array.from(F.children);
    if (!A.length) {
      M.classList.remove("nhsuk-header__navigation-container--measuring"), C.current = !1;
      return;
    }
    if (_.current == null) {
      const X = document.createElement("button");
      X.type = "button", X.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", X.style.position = "absolute", X.style.visibility = "hidden", X.style.pointerEvents = "none", X.innerHTML = "<span>More</span>", M.appendChild(X), _.current = X.getBoundingClientRect().width || 104, M.removeChild(X);
    }
    const $ = _.current + 16;
    let B = 0, se = 0;
    const V = window.getComputedStyle(M), R = parseFloat(V.paddingLeft) || 0, ee = parseFloat(V.paddingRight) || 0;
    let Y = R + ee;
    for (const X of A) {
      const pe = X.getBoundingClientRect().width;
      if (B + pe + $ + Y > E) break;
      B += pe, se += 1;
    }
    const K = se < l.items.length, J = K ? se : l.items.length;
    y((X) => X === K ? X : K), m((X) => X === J ? X : J), M.classList.remove("nhsuk-header__navigation-container--measuring"), C.current = !1;
  }, [L, l?.items]);
  Ve(() => {
    if (!L) return;
    const M = x.current;
    if (!M) return;
    let F = null;
    const E = () => {
      F == null && (F = window.requestAnimationFrame(() => {
        F = null, b();
      }));
    };
    b();
    const A = new ResizeObserver(() => E());
    return A.observe(M), S.current && A.observe(S.current), () => {
      F != null && window.cancelAnimationFrame(F), A.disconnect();
    };
  }, [L, b]), Ve(() => {
    L && b();
  }, [l?.items?.length, L, b]);
  const w = (M) => {
    M && (M.preventDefault(), M.stopPropagation());
    const F = !f;
    h(F), N(F);
  }, k = (() => {
    try {
      return Bd();
    } catch {
      return;
    }
  })();
  return Rd(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: s,
      account: o,
      navigation: l,
      containerClasses: i,
      variant: c,
      attributes: d,
      ...u
    },
    {
      variant: "client",
      isClient: L,
      menuOpen: f,
      showMoreButton: p,
      visibleItems: g,
      dropdownVisible: I,
      toggleMenu: w,
      navContainerRef: x,
      navListRef: S,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ r.jsx(Hd, { ...s }) : null,
      brand: k?.brand
    }
  );
};
function zd(e, { variant: t, isClient: n }) {
  const {
    className: a,
    logo: s = {},
    service: o = {},
    serviceName: l,
    organisation: i,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: c,
    navigation: d,
    containerClasses: u,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: p,
    // deprecated (ignored)
    responsiveNavigation: y = !0,
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const m = {
    ...o,
    text: o?.text ?? l
  }, I = m.href && !s.href || m.href && m.href === s.href, N = I ? m.href : s.href, L = be(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || i,
      "nhsuk-header--white": f === "white"
    },
    a
  ), D = be("nhsuk-header__container", u), x = be(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), S = () => /* @__PURE__ */ r.jsxs(
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
        /* @__PURE__ */ r.jsx("title", { children: s.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), C = () => s.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: s.src,
      width: "280",
      alt: s.ariaLabel || "NHS"
    }
  ) : S(), _ = () => i ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      i.name,
      i.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        i.split
      ] })
    ] }),
    i.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: i.descriptor })
  ] }) : null, b = (E, A) => E ? A ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: A, children: E }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: E }) : null, w = (E) => E.active || E.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: E.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: E.html } }) : E.text }) : E.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: E.html } }) : E.text, k = d?.items && !y, M = k ? [] : d?.items, F = k ? d.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: L, role: "banner", "data-module": "nhsuk-header", ...h, ...g, children: [
    /* @__PURE__ */ r.jsxs("div", { className: D, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        N ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: N, children: [
          C(),
          _(),
          I && b(m.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          C(),
          _(),
          I && b(m.text)
        ] }),
        m.text && !I && b(m.text, m.href)
      ] }),
      /* @__PURE__ */ r.jsx(ki, { ...c, variant: f === "white" ? "white" : "default" })
    ] }),
    d && d.items && d.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: x, "aria-label": d.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: be(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          u
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (M || []).map((E, A) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: be("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": E.active || E.current
            }, E.className),
            ...E.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: E.href,
                ...E.active || E.current ? { "aria-current": E.current ? "page" : "true" } : {},
                children: w(E)
              }
            )
          },
          A
        )) })
      }
    ) }),
    k && F.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: F.map((E, A) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: be("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": E.active || E.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: E.href,
            ...E.active || E.current ? { "aria-current": E.current ? "page" : "true" } : {},
            children: w(E)
          }
        )
      },
      `overflow-server-${A}`
    )) }) })
  ] });
}
const Sy = (e) => zd(e, {
  variant: "server",
  isClient: !1
}), Od = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: l = "",
  classes: i = "",
  children: c,
  ...d
}) => {
  const u = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    i
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    l,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    n,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = c || e || a || s, y = () => {
    if (!e) return null;
    const g = { className: h };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...g, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...g, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...g, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...g, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...g, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...g, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...g, children: e });
    }
  };
  return /* @__PURE__ */ r.jsxs(
    "section",
    {
      className: u,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        o && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          y(),
          c || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          y(),
          c || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Od.displayName = "Hero";
const Fi = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: l,
  attributes: i = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const f = (p, y = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: be("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": y
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
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...i, style: { ...i?.style, ...c }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: be("nhsuk-width-container", l),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: be("nhsuk-footer", e), style: d, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((p) => f(p)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((p) => f(p)) }),
              s && s.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (n || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0)),
              (s || []).map((p) => f(p, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function hr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ud(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ps(e) {
  let t, n, a;
  e.length !== 2 ? (t = hr, n = (i, c) => hr(e(i), c), a = (i, c) => e(i) - c) : (t = e === hr || e === Ud ? e : Wd, n = e, a = e);
  function s(i, c, d = 0, u = i.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(i[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function o(i, c, d = 0, u = i.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(i[f], c) <= 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function l(i, c, d = 0, u = i.length) {
    const f = s(i, c, d, u - 1);
    return f > d && a(i[f - 1], c) > -a(i[f], c) ? f - 1 : f;
  }
  return { left: s, center: l, right: o };
}
function Wd() {
  return 0;
}
function Gd(e) {
  return e === null ? NaN : +e;
}
const Vd = Ps(hr), Yd = Vd.right;
Ps(Gd).center;
function Ri(e, t) {
  let n, a;
  if (t === void 0)
    for (const s of e)
      s != null && (n === void 0 ? s >= s && (n = a = s) : (n > s && (n = s), a < s && (a = s)));
  else {
    let s = -1;
    for (let o of e)
      (o = t(o, ++s, e)) != null && (n === void 0 ? o >= o && (n = a = o) : (n > o && (n = o), a < o && (a = o)));
  }
  return [n, a];
}
class uo extends Map {
  constructor(t, n = qd) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(fo(this, t));
  }
  has(t) {
    return super.has(fo(this, t));
  }
  set(t, n) {
    return super.set(Zd(this, t), n);
  }
  delete(t) {
    return super.delete(Jd(this, t));
  }
}
function fo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Zd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Jd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function qd(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Xd = Math.sqrt(50), Qd = Math.sqrt(10), Kd = Math.sqrt(2);
function yr(e, t, n) {
  const a = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), l = o >= Xd ? 10 : o >= Qd ? 5 : o >= Kd ? 2 : 1;
  let i, c, d;
  return s < 0 ? (d = Math.pow(10, -s) / l, i = Math.round(e * d), c = Math.round(t * d), i / d < e && ++i, c / d > t && --c, d = -d) : (d = Math.pow(10, s) * l, i = Math.round(e / d), c = Math.round(t / d), i * d < e && ++i, c * d > t && --c), c < i && 0.5 <= n && n < 2 ? yr(e, t, n * 2) : [i, c, d];
}
function eu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, l] = a ? yr(t, e, n) : yr(e, t, n);
  if (!(o >= s)) return [];
  const i = o - s + 1, c = new Array(i);
  if (a)
    if (l < 0) for (let d = 0; d < i; ++d) c[d] = (o - d) / -l;
    else for (let d = 0; d < i; ++d) c[d] = (o - d) * l;
  else if (l < 0) for (let d = 0; d < i; ++d) c[d] = (s + d) / -l;
  else for (let d = 0; d < i; ++d) c[d] = (s + d) * l;
  return c;
}
function Ya(e, t, n) {
  return t = +t, e = +e, n = +n, yr(e, t, n)[2];
}
function Za(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, s = a ? Ya(t, e, n) : Ya(e, t, n);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function tu(e, t, n) {
  e = +e, t = +t, n = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +n;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * n;
  return o;
}
function ua(e, t) {
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
const po = Symbol("implicit");
function Bi() {
  var e = new uo(), t = [], n = [], a = po;
  function s(o) {
    let l = e.get(o);
    if (l === void 0) {
      if (a !== po) return a;
      e.set(o, l = t.push(o) - 1);
    }
    return n[l % n.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new uo();
    for (const l of o)
      e.has(l) || e.set(l, t.push(l) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (n = Array.from(o), s) : n.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return Bi(t, n).unknown(a);
  }, ua.apply(s, arguments), s;
}
function Hi() {
  var e = Bi().unknown(void 0), t = e.domain, n = e.range, a = 0, s = 1, o, l, i = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = s < a, y = p ? s : a, g = p ? a : s;
    o = (g - y) / Math.max(1, h - c + d * 2), i && (o = Math.floor(o)), y += (g - y - o * (h - c)) * u, l = o * (1 - c), i && (y = Math.round(y), l = Math.round(l));
    var m = tu(h).map(function(I) {
      return y + o * I;
    });
    return n(p ? m.reverse() : m);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([a, s] = h, a = +a, s = +s, f()) : [a, s];
  }, e.rangeRound = function(h) {
    return [a, s] = h, a = +a, s = +s, i = !0, f();
  }, e.bandwidth = function() {
    return l;
  }, e.step = function() {
    return o;
  }, e.round = function(h) {
    return arguments.length ? (i = !!h, f()) : i;
  }, e.padding = function(h) {
    return arguments.length ? (c = Math.min(1, d = +h), f()) : c;
  }, e.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (d = +h, f()) : d;
  }, e.align = function(h) {
    return arguments.length ? (u = Math.max(0, Math.min(1, h)), f()) : u;
  }, e.copy = function() {
    return Hi(t(), [a, s]).round(i).paddingInner(c).paddingOuter(d).align(u);
  }, ua.apply(f(), arguments);
}
function Fs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function zi(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function er() {
}
var Gn = 0.7, vr = 1 / Gn, kn = "\\s*([+-]?\\d+)\\s*", Vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", nu = /^#([0-9a-f]{3,8})$/, ru = new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`), au = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`), su = new RegExp(`^rgba\\(${kn},${kn},${kn},${Vn}\\)$`), ou = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Vn}\\)$`), iu = new RegExp(`^hsl\\(${Vn},${Mt},${Mt}\\)$`), lu = new RegExp(`^hsla\\(${Vn},${Mt},${Mt},${Vn}\\)$`), ho = {
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
Fs(er, Yn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: mo,
  // Deprecated! Use color.formatHex.
  formatHex: mo,
  formatHex8: cu,
  formatHsl: du,
  formatRgb: go,
  toString: go
});
function mo() {
  return this.rgb().formatHex();
}
function cu() {
  return this.rgb().formatHex8();
}
function du() {
  return Oi(this).formatHsl();
}
function go() {
  return this.rgb().formatRgb();
}
function Yn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = nu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? xo(t) : n === 3 ? new bt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? cr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? cr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ru.exec(e)) ? new bt(t[1], t[2], t[3], 1) : (t = au.exec(e)) ? new bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = su.exec(e)) ? cr(t[1], t[2], t[3], t[4]) : (t = ou.exec(e)) ? cr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = iu.exec(e)) ? vo(t[1], t[2] / 100, t[3] / 100, 1) : (t = lu.exec(e)) ? vo(t[1], t[2] / 100, t[3] / 100, t[4]) : ho.hasOwnProperty(e) ? xo(ho[e]) : e === "transparent" ? new bt(NaN, NaN, NaN, 0) : null;
}
function xo(e) {
  return new bt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function cr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new bt(e, t, n, a);
}
function uu(e) {
  return e instanceof er || (e = Yn(e)), e ? (e = e.rgb(), new bt(e.r, e.g, e.b, e.opacity)) : new bt();
}
function Ja(e, t, n, a) {
  return arguments.length === 1 ? uu(e) : new bt(e, t, n, a ?? 1);
}
function bt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Fs(bt, Ja, zi(er, {
  brighter(e) {
    return e = e == null ? vr : Math.pow(vr, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Gn : Math.pow(Gn, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new bt(ln(this.r), ln(this.g), ln(this.b), wr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: bo,
  // Deprecated! Use color.formatHex.
  formatHex: bo,
  formatHex8: fu,
  formatRgb: yo,
  toString: yo
}));
function bo() {
  return `#${on(this.r)}${on(this.g)}${on(this.b)}`;
}
function fu() {
  return `#${on(this.r)}${on(this.g)}${on(this.b)}${on((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yo() {
  const e = wr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ln(this.r)}, ${ln(this.g)}, ${ln(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function wr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ln(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function on(e) {
  return e = ln(e), (e < 16 ? "0" : "") + e.toString(16);
}
function vo(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new St(e, t, n, a);
}
function Oi(e) {
  if (e instanceof St) return new St(e.h, e.s, e.l, e.opacity);
  if (e instanceof er || (e = Yn(e)), !e) return new St();
  if (e instanceof St) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, s = Math.min(t, n, a), o = Math.max(t, n, a), l = NaN, i = o - s, c = (o + s) / 2;
  return i ? (t === o ? l = (n - a) / i + (n < a) * 6 : n === o ? l = (a - t) / i + 2 : l = (t - n) / i + 4, i /= c < 0.5 ? o + s : 2 - o - s, l *= 60) : i = c > 0 && c < 1 ? 0 : l, new St(l, i, c, e.opacity);
}
function pu(e, t, n, a) {
  return arguments.length === 1 ? Oi(e) : new St(e, t, n, a ?? 1);
}
function St(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Fs(St, pu, zi(er, {
  brighter(e) {
    return e = e == null ? vr : Math.pow(vr, e), new St(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Gn : Math.pow(Gn, e), new St(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - a;
    return new bt(
      Ma(e >= 240 ? e - 240 : e + 120, s, a),
      Ma(e, s, a),
      Ma(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new St(wo(this.h), dr(this.s), dr(this.l), wr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = wr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${wo(this.h)}, ${dr(this.s) * 100}%, ${dr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function wo(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function dr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ma(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Rs = (e) => () => e;
function hu(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function mu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function gu(e) {
  return (e = +e) == 1 ? Ui : function(t, n) {
    return n - t ? mu(t, n, e) : Rs(isNaN(t) ? n : t);
  };
}
function Ui(e, t) {
  var n = t - e;
  return n ? hu(e, n) : Rs(isNaN(e) ? t : e);
}
const So = (function e(t) {
  var n = gu(t);
  function a(s, o) {
    var l = n((s = Ja(s)).r, (o = Ja(o)).r), i = n(s.g, o.g), c = n(s.b, o.b), d = Ui(s.opacity, o.opacity);
    return function(u) {
      return s.r = l(u), s.g = i(u), s.b = c(u), s.opacity = d(u), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function xu(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function bu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function yu(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, s = new Array(a), o = new Array(n), l;
  for (l = 0; l < a; ++l) s[l] = Bs(e[l], t[l]);
  for (; l < n; ++l) o[l] = t[l];
  return function(i) {
    for (l = 0; l < a; ++l) o[l] = s[l](i);
    return o;
  };
}
function vu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Sr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function wu(e, t) {
  var n = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = Bs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in n) a[s] = n[s](o);
    return a;
  };
}
var qa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ia = new RegExp(qa.source, "g");
function Su(e) {
  return function() {
    return e;
  };
}
function _u(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ku(e, t) {
  var n = qa.lastIndex = Ia.lastIndex = 0, a, s, o, l = -1, i = [], c = [];
  for (e = e + "", t = t + ""; (a = qa.exec(e)) && (s = Ia.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), i[l] ? i[l] += o : i[++l] = o), (a = a[0]) === (s = s[0]) ? i[l] ? i[l] += s : i[++l] = s : (i[++l] = null, c.push({ i: l, x: Sr(a, s) })), n = Ia.lastIndex;
  return n < t.length && (o = t.slice(n), i[l] ? i[l] += o : i[++l] = o), i.length < 2 ? c[0] ? _u(c[0].x) : Su(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) i[(f = c[u]).i] = f.x(d);
    return i.join("");
  });
}
function Bs(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Rs(t) : (n === "number" ? Sr : n === "string" ? (a = Yn(t)) ? (t = a, So) : ku : t instanceof Yn ? So : t instanceof Date ? vu : bu(t) ? xu : Array.isArray(t) ? yu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? wu : Sr)(e, t);
}
function Cu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Nu(e) {
  return function() {
    return e;
  };
}
function ju(e) {
  return +e;
}
var _o = [0, 1];
function vn(e) {
  return e;
}
function Xa(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Nu(isNaN(t) ? NaN : 0.5);
}
function Mu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Iu(e, t, n) {
  var a = e[0], s = e[1], o = t[0], l = t[1];
  return s < a ? (a = Xa(s, a), o = n(l, o)) : (a = Xa(a, s), o = n(o, l)), function(i) {
    return o(a(i));
  };
}
function Du(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), l = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++l < a; )
    s[l] = Xa(e[l], e[l + 1]), o[l] = n(t[l], t[l + 1]);
  return function(i) {
    var c = Yd(e, i, 1, a) - 1;
    return o[c](s[c](i));
  };
}
function Wi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Tu() {
  var e = _o, t = _o, n = Bs, a, s, o, l = vn, i, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return l !== vn && (l = Mu(e[0], e[h - 1])), i = h > 2 ? Du : Iu, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = i(e.map(a), t, n)))(a(l(h)));
  }
  return f.invert = function(h) {
    return l(s((d || (d = i(t, e.map(a), Sr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, ju), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Cu, u();
  }, f.clamp = function(h) {
    return arguments.length ? (l = h ? !0 : vn, u()) : l !== vn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, p) {
    return a = h, s = p, u();
  };
}
function Gi() {
  return Tu()(vn, vn);
}
function Lu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function _r(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function In(e) {
  return e = _r(Math.abs(e)), e ? e[1] : NaN;
}
function $u(e, t) {
  return function(n, a) {
    for (var s = n.length, o = [], l = 0, i = e[0], c = 0; s > 0 && i > 0 && (c + i + 1 > a && (i = Math.max(1, a - c)), o.push(n.substring(s -= i, s + i)), !((c += i + 1) > a)); )
      i = e[l = (l + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Au(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Eu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function kr(e) {
  if (!(t = Eu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Hs({
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
kr.prototype = Hs.prototype;
function Hs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Hs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Pu(e) {
  e: for (var t = e.length, n = 1, a = -1, s; n < t; ++n)
    switch (e[n]) {
      case ".":
        a = s = n;
        break;
      case "0":
        a === 0 && (a = n), s = n;
        break;
      default:
        if (!+e[n]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(s + 1) : e;
}
var Vi;
function Fu(e, t) {
  var n = _r(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1], o = s - (Vi = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, l = a.length;
  return o === l ? a : o > l ? a + new Array(o - l + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + _r(e, Math.max(0, t + o - 1))[0];
}
function ko(e, t) {
  var n = _r(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const Co = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Lu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ko(e * 100, t),
  r: ko,
  s: Fu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function No(e) {
  return e;
}
var jo = Array.prototype.map, Mo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ru(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? No : $u(jo.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? No : Au(jo.call(e.numerals, String)), l = e.percent === void 0 ? "%" : e.percent + "", i = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = kr(f);
    var h = f.fill, p = f.align, y = f.sign, g = f.symbol, m = f.zero, I = f.width, N = f.comma, L = f.precision, D = f.trim, x = f.type;
    x === "n" ? (N = !0, x = "g") : Co[x] || (L === void 0 && (L = 12), D = !0, x = "g"), (m || h === "0" && p === "=") && (m = !0, h = "0", p = "=");
    var S = g === "$" ? n : g === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", C = g === "$" ? a : /[%p]/.test(x) ? l : "", _ = Co[x], b = /[defgprs%]/.test(x);
    L = L === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, L)) : Math.max(0, Math.min(20, L));
    function w(k) {
      var M = S, F = C, E, A, $;
      if (x === "c")
        F = _(k) + F, k = "";
      else {
        k = +k;
        var B = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? c : _(Math.abs(k), L), D && (k = Pu(k)), B && +k == 0 && y !== "+" && (B = !1), M = (B ? y === "(" ? y : i : y === "-" || y === "(" ? "" : y) + M, F = (x === "s" ? Mo[8 + Vi / 3] : "") + F + (B && y === "(" ? ")" : ""), b) {
          for (E = -1, A = k.length; ++E < A; )
            if ($ = k.charCodeAt(E), 48 > $ || $ > 57) {
              F = ($ === 46 ? s + k.slice(E + 1) : k.slice(E)) + F, k = k.slice(0, E);
              break;
            }
        }
      }
      N && !m && (k = t(k, 1 / 0));
      var se = M.length + k.length + F.length, V = se < I ? new Array(I - se + 1).join(h) : "";
      switch (N && m && (k = t(V + k, V.length ? I - F.length : 1 / 0), V = ""), p) {
        case "<":
          k = M + k + F + V;
          break;
        case "=":
          k = M + V + k + F;
          break;
        case "^":
          k = V.slice(0, se = V.length >> 1) + M + k + F + V.slice(se);
          break;
        default:
          k = V + M + k + F;
          break;
      }
      return o(k);
    }
    return w.toString = function() {
      return f + "";
    }, w;
  }
  function u(f, h) {
    var p = d((f = kr(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(In(h) / 3))) * 3, g = Math.pow(10, -y), m = Mo[8 + y / 3];
    return function(I) {
      return p(g * I) + m;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var ur, Yi, Zi;
Bu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Bu(e) {
  return ur = Ru(e), Yi = ur.format, Zi = ur.formatPrefix, ur;
}
function Hu(e) {
  return Math.max(0, -In(Math.abs(e)));
}
function zu(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(In(t) / 3))) * 3 - In(Math.abs(e)));
}
function Ou(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, In(t) - In(e)) + 1;
}
function Uu(e, t, n, a) {
  var s = Za(e, t, n), o;
  switch (a = kr(a ?? ",f"), a.type) {
    case "s": {
      var l = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = zu(s, l)) && (a.precision = o), Zi(a, l);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = Ou(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = Hu(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return Yi(a);
}
function Wu(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return eu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var s = t();
    return Uu(s[0], s[s.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), s = 0, o = a.length - 1, l = a[s], i = a[o], c, d, u = 10;
    for (i < l && (d = l, l = i, i = d, d = s, s = o, o = d); u-- > 0; ) {
      if (d = Ya(l, i, n), d === c)
        return a[s] = l, a[o] = i, t(a);
      if (d > 0)
        l = Math.floor(l / d) * d, i = Math.ceil(i / d) * d;
      else if (d < 0)
        l = Math.ceil(l * d) / d, i = Math.floor(i * d) / d;
      else
        break;
      c = d;
    }
    return e;
  }, e;
}
function Cr() {
  var e = Gi();
  return e.copy = function() {
    return Wi(e, Cr());
  }, ua.apply(e, arguments), Wu(e);
}
function Gu(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, s = e[n], o = e[a], l;
  return o < s && (l = n, n = a, a = l, l = s, s = o, o = l), e[n] = t.floor(s), e[a] = t.ceil(o), e;
}
const Da = /* @__PURE__ */ new Date(), Ta = /* @__PURE__ */ new Date();
function it(e, t, n, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const l = s(o), i = s.ceil(o);
    return o - l < i - o ? l : i;
  }, s.offset = (o, l) => (t(o = /* @__PURE__ */ new Date(+o), l == null ? 1 : Math.floor(l)), o), s.range = (o, l, i) => {
    const c = [];
    if (o = s.ceil(o), i = i == null ? 1 : Math.floor(i), !(o < l) || !(i > 0)) return c;
    let d;
    do
      c.push(d = /* @__PURE__ */ new Date(+o)), t(o, i), e(o);
    while (d < o && o < l);
    return c;
  }, s.filter = (o) => it((l) => {
    if (l >= l) for (; e(l), !o(l); ) l.setTime(l - 1);
  }, (l, i) => {
    if (l >= l)
      if (i < 0) for (; ++i <= 0; )
        for (; t(l, -1), !o(l); )
          ;
      else for (; --i >= 0; )
        for (; t(l, 1), !o(l); )
          ;
  }), n && (s.count = (o, l) => (Da.setTime(+o), Ta.setTime(+l), e(Da), e(Ta), Math.floor(n(Da, Ta))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (l) => a(l) % o === 0 : (l) => s.count(0, l) % o === 0) : s)), s;
}
const Nr = it(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Nr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? it((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Nr);
Nr.range;
const Ot = 1e3, wt = Ot * 60, Ut = wt * 60, Gt = Ut * 24, zs = Gt * 7, Io = Gt * 30, La = Gt * 365, wn = it((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ot);
}, (e, t) => (t - e) / Ot, (e) => e.getUTCSeconds());
wn.range;
const Os = it((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ot);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => (t - e) / wt, (e) => e.getMinutes());
Os.range;
const Vu = it((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => (t - e) / wt, (e) => e.getUTCMinutes());
Vu.range;
const Us = it((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ot - e.getMinutes() * wt);
}, (e, t) => {
  e.setTime(+e + t * Ut);
}, (e, t) => (t - e) / Ut, (e) => e.getHours());
Us.range;
const Yu = it((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ut);
}, (e, t) => (t - e) / Ut, (e) => e.getUTCHours());
Yu.range;
const tr = it(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * wt) / Gt,
  (e) => e.getDate() - 1
);
tr.range;
const Ws = it((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Gt, (e) => e.getUTCDate() - 1);
Ws.range;
const Zu = it((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Gt, (e) => Math.floor(e / Gt));
Zu.range;
function mn(e) {
  return it((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * wt) / zs);
}
const fa = mn(0), jr = mn(1), Ju = mn(2), qu = mn(3), Dn = mn(4), Xu = mn(5), Qu = mn(6);
fa.range;
jr.range;
Ju.range;
qu.range;
Dn.range;
Xu.range;
Qu.range;
function gn(e) {
  return it((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / zs);
}
const Ji = gn(0), Mr = gn(1), Ku = gn(2), ef = gn(3), Tn = gn(4), tf = gn(5), nf = gn(6);
Ji.range;
Mr.range;
Ku.range;
ef.range;
Tn.range;
tf.range;
nf.range;
const Zn = it((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Zn.range;
const rf = it((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
rf.range;
const Vt = it((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Vt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : it((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Vt.range;
const pn = it((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
pn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : it((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
pn.range;
function af(e, t, n, a, s, o) {
  const l = [
    [wn, 1, Ot],
    [wn, 5, 5 * Ot],
    [wn, 15, 15 * Ot],
    [wn, 30, 30 * Ot],
    [o, 1, wt],
    [o, 5, 5 * wt],
    [o, 15, 15 * wt],
    [o, 30, 30 * wt],
    [s, 1, Ut],
    [s, 3, 3 * Ut],
    [s, 6, 6 * Ut],
    [s, 12, 12 * Ut],
    [a, 1, Gt],
    [a, 2, 2 * Gt],
    [n, 1, zs],
    [t, 1, Io],
    [t, 3, 3 * Io],
    [e, 1, La]
  ];
  function i(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), y = p ? p.range(d, +u + 1) : [];
    return h ? y.reverse() : y;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = Ps(([, , m]) => m).right(l, h);
    if (p === l.length) return e.every(Za(d / La, u / La, f));
    if (p === 0) return Nr.every(Math.max(Za(d, u, f), 1));
    const [y, g] = l[h / l[p - 1][2] < l[p][2] / h ? p - 1 : p];
    return y.every(g);
  }
  return [i, c];
}
const [sf, of] = af(Vt, Zn, fa, tr, Us, Os);
function $a(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Aa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Rn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function lf(e) {
  var t = e.dateTime, n = e.date, a = e.time, s = e.periods, o = e.days, l = e.shortDays, i = e.months, c = e.shortMonths, d = Bn(s), u = Hn(s), f = Bn(o), h = Hn(o), p = Bn(l), y = Hn(l), g = Bn(i), m = Hn(i), I = Bn(c), N = Hn(c), L = {
    a: B,
    A: se,
    b: V,
    B: R,
    c: null,
    d: Eo,
    e: Eo,
    f: Tf,
    g: zf,
    G: Uf,
    H: Mf,
    I: If,
    j: Df,
    L: qi,
    m: Lf,
    M: $f,
    p: ee,
    q: Y,
    Q: Ro,
    s: Bo,
    S: Af,
    u: Ef,
    U: Pf,
    V: Ff,
    w: Rf,
    W: Bf,
    x: null,
    X: null,
    y: Hf,
    Y: Of,
    Z: Wf,
    "%": Fo
  }, D = {
    a: K,
    A: J,
    b: X,
    B: pe,
    c: null,
    d: Po,
    e: Po,
    f: Zf,
    g: ap,
    G: op,
    H: Gf,
    I: Vf,
    j: Yf,
    L: Qi,
    m: Jf,
    M: qf,
    p: ne,
    q: re,
    Q: Ro,
    s: Bo,
    S: Xf,
    u: Qf,
    U: Kf,
    V: ep,
    w: tp,
    W: np,
    x: null,
    X: null,
    y: rp,
    Y: sp,
    Z: ip,
    "%": Fo
  }, x = {
    a: w,
    A: k,
    b: M,
    B: F,
    c: E,
    d: $o,
    e: $o,
    f: kf,
    g: Lo,
    G: To,
    H: Ao,
    I: Ao,
    j: vf,
    L: _f,
    m: yf,
    M: wf,
    p: b,
    q: bf,
    Q: Nf,
    s: jf,
    S: Sf,
    u: pf,
    U: hf,
    V: mf,
    w: ff,
    W: gf,
    x: A,
    X: $,
    y: Lo,
    Y: To,
    Z: xf,
    "%": Cf
  };
  L.x = S(n, L), L.X = S(a, L), L.c = S(t, L), D.x = S(n, D), D.X = S(a, D), D.c = S(t, D);
  function S(Q, te) {
    return function(ce) {
      var W = [], ie = -1, ae = 0, he = Q.length, oe, fe, De;
      for (ce instanceof Date || (ce = /* @__PURE__ */ new Date(+ce)); ++ie < he; )
        Q.charCodeAt(ie) === 37 && (W.push(Q.slice(ae, ie)), (fe = Do[oe = Q.charAt(++ie)]) != null ? oe = Q.charAt(++ie) : fe = oe === "e" ? " " : "0", (De = te[oe]) && (oe = De(ce, fe)), W.push(oe), ae = ie + 1);
      return W.push(Q.slice(ae, ie)), W.join("");
    };
  }
  function C(Q, te) {
    return function(ce) {
      var W = Rn(1900, void 0, 1), ie = _(W, Q, ce += "", 0), ae, he;
      if (ie != ce.length) return null;
      if ("Q" in W) return new Date(W.Q);
      if ("s" in W) return new Date(W.s * 1e3 + ("L" in W ? W.L : 0));
      if (te && !("Z" in W) && (W.Z = 0), "p" in W && (W.H = W.H % 12 + W.p * 12), W.m === void 0 && (W.m = "q" in W ? W.q : 0), "V" in W) {
        if (W.V < 1 || W.V > 53) return null;
        "w" in W || (W.w = 1), "Z" in W ? (ae = Aa(Rn(W.y, 0, 1)), he = ae.getUTCDay(), ae = he > 4 || he === 0 ? Mr.ceil(ae) : Mr(ae), ae = Ws.offset(ae, (W.V - 1) * 7), W.y = ae.getUTCFullYear(), W.m = ae.getUTCMonth(), W.d = ae.getUTCDate() + (W.w + 6) % 7) : (ae = $a(Rn(W.y, 0, 1)), he = ae.getDay(), ae = he > 4 || he === 0 ? jr.ceil(ae) : jr(ae), ae = tr.offset(ae, (W.V - 1) * 7), W.y = ae.getFullYear(), W.m = ae.getMonth(), W.d = ae.getDate() + (W.w + 6) % 7);
      } else ("W" in W || "U" in W) && ("w" in W || (W.w = "u" in W ? W.u % 7 : "W" in W ? 1 : 0), he = "Z" in W ? Aa(Rn(W.y, 0, 1)).getUTCDay() : $a(Rn(W.y, 0, 1)).getDay(), W.m = 0, W.d = "W" in W ? (W.w + 6) % 7 + W.W * 7 - (he + 5) % 7 : W.w + W.U * 7 - (he + 6) % 7);
      return "Z" in W ? (W.H += W.Z / 100 | 0, W.M += W.Z % 100, Aa(W)) : $a(W);
    };
  }
  function _(Q, te, ce, W) {
    for (var ie = 0, ae = te.length, he = ce.length, oe, fe; ie < ae; ) {
      if (W >= he) return -1;
      if (oe = te.charCodeAt(ie++), oe === 37) {
        if (oe = te.charAt(ie++), fe = x[oe in Do ? te.charAt(ie++) : oe], !fe || (W = fe(Q, ce, W)) < 0) return -1;
      } else if (oe != ce.charCodeAt(W++))
        return -1;
    }
    return W;
  }
  function b(Q, te, ce) {
    var W = d.exec(te.slice(ce));
    return W ? (Q.p = u.get(W[0].toLowerCase()), ce + W[0].length) : -1;
  }
  function w(Q, te, ce) {
    var W = p.exec(te.slice(ce));
    return W ? (Q.w = y.get(W[0].toLowerCase()), ce + W[0].length) : -1;
  }
  function k(Q, te, ce) {
    var W = f.exec(te.slice(ce));
    return W ? (Q.w = h.get(W[0].toLowerCase()), ce + W[0].length) : -1;
  }
  function M(Q, te, ce) {
    var W = I.exec(te.slice(ce));
    return W ? (Q.m = N.get(W[0].toLowerCase()), ce + W[0].length) : -1;
  }
  function F(Q, te, ce) {
    var W = g.exec(te.slice(ce));
    return W ? (Q.m = m.get(W[0].toLowerCase()), ce + W[0].length) : -1;
  }
  function E(Q, te, ce) {
    return _(Q, t, te, ce);
  }
  function A(Q, te, ce) {
    return _(Q, n, te, ce);
  }
  function $(Q, te, ce) {
    return _(Q, a, te, ce);
  }
  function B(Q) {
    return l[Q.getDay()];
  }
  function se(Q) {
    return o[Q.getDay()];
  }
  function V(Q) {
    return c[Q.getMonth()];
  }
  function R(Q) {
    return i[Q.getMonth()];
  }
  function ee(Q) {
    return s[+(Q.getHours() >= 12)];
  }
  function Y(Q) {
    return 1 + ~~(Q.getMonth() / 3);
  }
  function K(Q) {
    return l[Q.getUTCDay()];
  }
  function J(Q) {
    return o[Q.getUTCDay()];
  }
  function X(Q) {
    return c[Q.getUTCMonth()];
  }
  function pe(Q) {
    return i[Q.getUTCMonth()];
  }
  function ne(Q) {
    return s[+(Q.getUTCHours() >= 12)];
  }
  function re(Q) {
    return 1 + ~~(Q.getUTCMonth() / 3);
  }
  return {
    format: function(Q) {
      var te = S(Q += "", L);
      return te.toString = function() {
        return Q;
      }, te;
    },
    parse: function(Q) {
      var te = C(Q += "", !1);
      return te.toString = function() {
        return Q;
      }, te;
    },
    utcFormat: function(Q) {
      var te = S(Q += "", D);
      return te.toString = function() {
        return Q;
      }, te;
    },
    utcParse: function(Q) {
      var te = C(Q += "", !0);
      return te.toString = function() {
        return Q;
      }, te;
    }
  };
}
var Do = { "-": "", _: " ", 0: "0" }, ct = /^\s*\d+/, cf = /^%/, df = /[\\^$*+?|[\]().{}]/g;
function Ue(e, t, n) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function uf(e) {
  return e.replace(df, "\\$&");
}
function Bn(e) {
  return new RegExp("^(?:" + e.map(uf).join("|") + ")", "i");
}
function Hn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function ff(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function pf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function hf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function mf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function gf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function To(e, t, n) {
  var a = ct.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Lo(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function xf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function bf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function yf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function $o(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function vf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Ao(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function wf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Sf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function _f(e, t, n) {
  var a = ct.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function kf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Cf(e, t, n) {
  var a = cf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Nf(e, t, n) {
  var a = ct.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function jf(e, t, n) {
  var a = ct.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Eo(e, t) {
  return Ue(e.getDate(), t, 2);
}
function Mf(e, t) {
  return Ue(e.getHours(), t, 2);
}
function If(e, t) {
  return Ue(e.getHours() % 12 || 12, t, 2);
}
function Df(e, t) {
  return Ue(1 + tr.count(Vt(e), e), t, 3);
}
function qi(e, t) {
  return Ue(e.getMilliseconds(), t, 3);
}
function Tf(e, t) {
  return qi(e, t) + "000";
}
function Lf(e, t) {
  return Ue(e.getMonth() + 1, t, 2);
}
function $f(e, t) {
  return Ue(e.getMinutes(), t, 2);
}
function Af(e, t) {
  return Ue(e.getSeconds(), t, 2);
}
function Ef(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Pf(e, t) {
  return Ue(fa.count(Vt(e) - 1, e), t, 2);
}
function Xi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Dn(e) : Dn.ceil(e);
}
function Ff(e, t) {
  return e = Xi(e), Ue(Dn.count(Vt(e), e) + (Vt(e).getDay() === 4), t, 2);
}
function Rf(e) {
  return e.getDay();
}
function Bf(e, t) {
  return Ue(jr.count(Vt(e) - 1, e), t, 2);
}
function Hf(e, t) {
  return Ue(e.getFullYear() % 100, t, 2);
}
function zf(e, t) {
  return e = Xi(e), Ue(e.getFullYear() % 100, t, 2);
}
function Of(e, t) {
  return Ue(e.getFullYear() % 1e4, t, 4);
}
function Uf(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Dn(e) : Dn.ceil(e), Ue(e.getFullYear() % 1e4, t, 4);
}
function Wf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ue(t / 60 | 0, "0", 2) + Ue(t % 60, "0", 2);
}
function Po(e, t) {
  return Ue(e.getUTCDate(), t, 2);
}
function Gf(e, t) {
  return Ue(e.getUTCHours(), t, 2);
}
function Vf(e, t) {
  return Ue(e.getUTCHours() % 12 || 12, t, 2);
}
function Yf(e, t) {
  return Ue(1 + Ws.count(pn(e), e), t, 3);
}
function Qi(e, t) {
  return Ue(e.getUTCMilliseconds(), t, 3);
}
function Zf(e, t) {
  return Qi(e, t) + "000";
}
function Jf(e, t) {
  return Ue(e.getUTCMonth() + 1, t, 2);
}
function qf(e, t) {
  return Ue(e.getUTCMinutes(), t, 2);
}
function Xf(e, t) {
  return Ue(e.getUTCSeconds(), t, 2);
}
function Qf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Kf(e, t) {
  return Ue(Ji.count(pn(e) - 1, e), t, 2);
}
function Ki(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Tn(e) : Tn.ceil(e);
}
function ep(e, t) {
  return e = Ki(e), Ue(Tn.count(pn(e), e) + (pn(e).getUTCDay() === 4), t, 2);
}
function tp(e) {
  return e.getUTCDay();
}
function np(e, t) {
  return Ue(Mr.count(pn(e) - 1, e), t, 2);
}
function rp(e, t) {
  return Ue(e.getUTCFullYear() % 100, t, 2);
}
function ap(e, t) {
  return e = Ki(e), Ue(e.getUTCFullYear() % 100, t, 2);
}
function sp(e, t) {
  return Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function op(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Tn(e) : Tn.ceil(e), Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function ip() {
  return "+0000";
}
function Fo() {
  return "%";
}
function Ro(e) {
  return +e;
}
function Bo(e) {
  return Math.floor(+e / 1e3);
}
var bn, el;
lp({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function lp(e) {
  return bn = lf(e), el = bn.format, bn.parse, bn.utcFormat, bn.utcParse, bn;
}
function cp(e) {
  return new Date(e);
}
function dp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function tl(e, t, n, a, s, o, l, i, c, d) {
  var u = Gi(), f = u.invert, h = u.domain, p = d(".%L"), y = d(":%S"), g = d("%I:%M"), m = d("%I %p"), I = d("%a %d"), N = d("%b %d"), L = d("%B"), D = d("%Y");
  function x(S) {
    return (c(S) < S ? p : i(S) < S ? y : l(S) < S ? g : o(S) < S ? m : a(S) < S ? s(S) < S ? I : N : n(S) < S ? L : D)(S);
  }
  return u.invert = function(S) {
    return new Date(f(S));
  }, u.domain = function(S) {
    return arguments.length ? h(Array.from(S, dp)) : h().map(cp);
  }, u.ticks = function(S) {
    var C = h();
    return e(C[0], C[C.length - 1], S ?? 10);
  }, u.tickFormat = function(S, C) {
    return C == null ? x : d(C);
  }, u.nice = function(S) {
    var C = h();
    return (!S || typeof S.range != "function") && (S = t(C[0], C[C.length - 1], S ?? 10)), S ? h(Gu(C, S)) : u;
  }, u.copy = function() {
    return Wi(u, tl(e, t, n, a, s, o, l, i, c, d));
  }, u;
}
function Gs() {
  return ua.apply(tl(sf, of, Vt, Zn, fa, tr, Us, Os, wn, el).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function up({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: l = -1,
  onFocus: i,
  "aria-label": c
}) {
  const d = He(null), [u, f] = Be(!1), [h, p] = Be(!1), y = t(e.start), g = t(e.end), m = Math.max(g - y, 20), I = () => {
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
  }, N = e.progress ? m * e.progress / 100 : 0, L = () => {
    n?.(e);
  }, D = () => {
    a?.(e);
  }, x = (M) => {
    M.key === "Enter" ? (M.preventDefault(), L()) : M.key === " " && (M.preventDefault(), D());
  }, S = () => {
    f(!0);
  }, C = () => {
    f(!1);
  }, _ = () => {
    p(!0), i?.();
  }, b = () => {
    p(!1);
  }, w = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${y}px`,
    "--task-width": `${m}px`,
    "--task-color": I(),
    left: `${y}px`,
    width: `${m}px`,
    backgroundColor: I()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: l,
      ref: d,
      "data-task-index": o,
      className: w,
      style: k,
      onClick: L,
      onDoubleClick: D,
      onKeyDown: x,
      onMouseDown: S,
      onMouseUp: C,
      onFocus: _,
      onBlur: b,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${N}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function fp({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [l, i] = Be(-1), c = He(null), d = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const y = Math.max(0, l === -1 ? 0 : l - 1);
      i(y), h(y);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const y = Math.min(a.length - 1, l === -1 ? 0 : l + 1);
      i(y), h(y);
    } else if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (p.key === "Home")
      p.preventDefault(), i(0), h(0);
    else if (p.key === "End") {
      p.preventDefault();
      const y = a.length - 1;
      i(y), h(y);
    }
  }, u = (p) => {
    if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (p.key === "ArrowRight") {
      p.preventDefault();
      const y = c.current;
      y && y.focus();
    }
  }, f = () => {
    l === -1 && (i(0), setTimeout(() => h(0), 0));
  }, h = (p) => {
    const y = c.current?.querySelector(`[data-date-index="${p}"]`);
    y && y.focus();
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
            children: a.map((p, y) => {
              const g = p.getTime() === o.getTime(), m = l === y;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": y,
                  className: `date-column ${g ? "today" : ""} ${m ? "focused" : ""}`,
                  tabIndex: m ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => i(y),
                  onKeyDown: d,
                  children: p.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                y
              );
            })
          }
        )
      ]
    }
  );
}
function pp({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: l }) {
  const [i, c] = Be(!1), [d, u] = Be(-1), f = He(null);
  Ve(() => {
    i && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [i, d, t.length]);
  const h = (g) => {
    if (g.key === "ArrowLeft" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (g.key === "ArrowRight" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!i) {
      switch (g.key) {
        case "ArrowUp":
          g.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowLeft":
          g.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (g.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const m = Math.max(0, d - 1);
        u(m), f.current?.querySelector(`[data-task-index="${m}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const N = Math.min(t.length - 1, d + 1);
        u(N), f.current?.querySelector(`[data-task-index="${N}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        g.preventDefault(), d >= 0 && s?.(t[d]);
        break;
      case "Escape":
        g.preventDefault(), c(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault(), f.current?.focus();
        break;
    }
  }, y = (g) => {
    i && u(g);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": o + 2,
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
            className: `timeline-container ${i ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": l,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: h,
            onFocus: () => {
              i || u(-1);
            },
            children: t.map((g, m) => /* @__PURE__ */ r.jsx(
              up,
              {
                task: g,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: i && d === m,
                taskIndex: m,
                tabIndex: i && d === m ? 0 : -1,
                onFocus: () => y(m)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function _y({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const l = He(null), [i, c] = Be(800), d = je(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const g = new Date(n);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [n]), u = je(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = je(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  Ve(() => {
    if (!l.current || typeof window > "u") return;
    const g = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!g) return;
    const m = new g((I) => {
      const N = I[0];
      N && c(Math.max(N.contentRect.width - 220, 400));
    });
    return m.observe(l.current), () => m.disconnect();
  }, []);
  const h = je(
    () => Gs().domain([d, u]).range([0, i]),
    [d, u, i]
  ), p = je(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((m) => {
      const I = g.get(m.resourceId) || [];
      I.push(m), g.set(m.resourceId, I);
    }), g;
  }, [t]), y = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault(), typeof document < "u" && l.current?.querySelector(".gantt-row .resource-label")?.focus();
          break;
        case "Home":
          g.preventDefault(), typeof document < "u" && l.current?.querySelector(".header-resource")?.focus();
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
      onKeyDown: y,
      children: [
        /* @__PURE__ */ r.jsx(fp, { viewStart: d, viewEnd: u, dateCount: f }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: l,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (g) => {
              g.key === "ArrowLeft" && g.altKey ? (g.preventDefault(), l.current?.scrollBy({ left: -50, behavior: "smooth" })) : g.key === "ArrowRight" && g.altKey ? (g.preventDefault(), l.current?.scrollBy({ left: 50, behavior: "smooth" })) : g.key === "ArrowUp" && g.altKey ? (g.preventDefault(), l.current?.scrollBy({ top: -50, behavior: "smooth" })) : g.key === "ArrowDown" && g.altKey && (g.preventDefault(), l.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((g, m) => /* @__PURE__ */ r.jsx(
              pp,
              {
                resource: g,
                tasks: p.get(g.id) || [],
                scale: h,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: m,
                dateCount: f
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
const Ir = ({
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
) }), hp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: l = !1,
  attributes: i = {}
}) => {
  const c = () => t ? ht.Children.toArray(t).filter(
    (m) => ht.isValidElement(m) && (m.type === Ir || m.type?.displayName === "BreadcrumbItem")
  ).map((m) => ({
    text: typeof m.props.children == "string" ? m.props.children : String(m.props.children),
    href: m.props.href,
    active: m.props.active,
    attributes: m.props.attributes
  })) : [], d = () => t ? c() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const g = d();
    if (g && g.length > 0) {
      const m = g.slice().reverse().find((I) => I.href && !I.active);
      if (m)
        return { href: m.href, text: m.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), p = be(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": l
    },
    n
  ), y = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: p,
      "aria-label": y,
      role: "navigation",
      ...i,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          ht.Children.map(t, (g, m) => ht.isValidElement(g) && (g.type === Ir || g.type?.displayName === "BreadcrumbItem") ? ht.cloneElement(g, { key: m }) : null)
        ) : (
          // Render from items array
          f?.filter((g) => g.active || !!g.href).map((g, m) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...g.attributes || {},
              children: g.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: g.href,
              role: "link",
              ...g.attributes || {},
              children: g.text
            }
          ) }, m))
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
}, mp = hp;
mp.Item = Ir;
Ir.displayName = "BreadcrumbItem";
const nl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [s, o] = Be(!1);
  Ve(() => {
    o(!0);
  }, []), Ve(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const i = (c) => {
      const d = c.target, u = d.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(u) : null;
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const h = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          d.__nhsSkipLinkTimeout = h;
        }
      }
    };
    try {
      const c = document.querySelectorAll(".nhsuk-skip-link");
      return c.forEach((d) => {
        d.addEventListener("click", i);
      }), () => {
        try {
          c.forEach((d) => {
            d.removeEventListener("click", i);
            const u = d.__nhsSkipLinkTimeout;
            u && window.clearTimeout && window.clearTimeout(u);
          });
        } catch (d) {
          console.warn("SkipLink cleanup error:", d);
        }
      };
    } catch (c) {
      return console.warn("SkipLink initialization error:", c), () => {
      };
    }
  }, [s]);
  const l = be("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      className: l,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": s ? "true" : "false",
      ...a,
      children: e
    }
  );
}, ky = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const l = be("nhsuk-pagination", s);
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: l,
      role: "navigation",
      "aria-label": "Pagination",
      ...o,
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
}, Cy = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = be("nhsuk-contents-list", t), o = (l, i) => l.current ? /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...l.attributes || {},
      children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-contents-list__current", children: l.text })
    },
    i
  ) : /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      children: /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "nhsuk-contents-list__link",
          href: l.href,
          ...l.attributes || {},
          children: l.text
        }
      )
    },
    i
  );
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: s,
      role: "navigation",
      "aria-label": n,
      ...a,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((l, i) => o(l, i)) })
      ]
    }
  );
}, rl = ht.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
  descriptionHtml: l,
  href: i,
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
  ].filter(Boolean).join(" "), y = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const N = () => i && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: i, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Wt,
      {
        level: a,
        className: y,
        children: N()
      }
    );
  }, m = () => u.children ? u.children : l ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: l } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: o }) : null, I = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
          g(),
          m(),
          I()
        ] })
      ]
    }
  );
});
rl.displayName = "Card";
const Ny = ({
  className: e,
  children: t,
  "data-testid": n,
  id: a
}) => {
  const s = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "ul",
    {
      className: s,
      "data-testid": n,
      id: a,
      children: t
    }
  );
}, jy = ({
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
}, My = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: l,
  className: i,
  children: c,
  "data-testid": d,
  id: u,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": p
}) => {
  const y = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    i
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const N = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        N,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Wt,
      {
        level: a,
        className: g,
        children: L
      }
    );
  }, I = () => c || (l ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: l } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          m(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: I() })
      ]
    }
  );
}, gp = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: l,
  children: i,
  ...c
}) => {
  const d = be(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !i ? null : a ? /* @__PURE__ */ r.jsx(
    Wt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Wt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      text: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, f = () => i ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: i }) : l ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: l }
    }
  ) : o ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ r.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ r.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, Iy = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...s
}) => {
  const o = be("nhsuk-inset-text", a), l = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: o, ...s, children: l() });
}, Dy = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const s = be(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), o = (i) => i.children ? i.children : i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text ? i.text : null, l = (i) => !i || !i.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: i.items.map((c, d) => /* @__PURE__ */ r.jsx(
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
            o(c),
            c.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    d
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: s, ...a, children: e.map((i, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: o(i.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: o(i.value) }),
    l(i.actions)
  ] }, c)) }) });
}, zn = { current: null }, xp = () => {
  if (zn.current) return zn.current;
  try {
    zn.current = require("prismjs");
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
    zn.current = null;
  }
  return zn.current;
}, bp = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let n = e;
  return t.forEach((a) => {
    n = n.replace(a.regex, (s) => `<span class="nhsuk-code-${a.cls}">${s}</span>`);
  }), n;
}, Dr = (e, t, n) => {
  if (n || !t) return e;
  const a = xp();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return bp(e);
}, yp = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: l,
  headingLevel: i = 3,
  panel: c = !1,
  panelClasses: d,
  tableClasses: u,
  classes: f,
  attributes: h,
  "data-testid": p,
  columns: y,
  data: g,
  visuallyHiddenCaption: m = !1
}) => {
  const I = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), N = be(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), L = be(f), D = (b, w) => {
    const k = be(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${b.format}`]: b.format
      },
      b.classes
    ), M = {
      scope: "col",
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...o && { role: "columnheader" },
      ...b.attributes
    };
    let F;
    if (b.node != null)
      F = /* @__PURE__ */ r.jsx(r.Fragment, { children: b.node });
    else if (b.html)
      F = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const E = Array.isArray(b.code), A = E ? b.code.join(`
`) : b.code, $ = E || A.includes(`
`), B = {
        className: be("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": $,
          "nhsuk-table__code--inline": !$
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, se = Dr(A, b.codeLanguage);
      F = $ ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...B,
          dangerouslySetInnerHTML: { __html: se }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...B,
          dangerouslySetInnerHTML: { __html: se }
        }
      );
    } else
      F = b.text;
    return /* @__PURE__ */ r.jsx("th", { className: k, ...M, children: F }, w);
  }, x = (b, w, k) => {
    const M = s && k || b.rowHeader, F = be(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${b.format}`]: b.format
      },
      b.classes
    ), E = {
      ...M && { scope: "row" },
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...o && {
        role: M ? "rowheader" : "cell",
        ...b.header && { "data-label": b.header }
      },
      ...b.attributes
    };
    let A;
    if (b.node != null)
      A = /* @__PURE__ */ r.jsx(r.Fragment, { children: b.node });
    else if (b.html)
      A = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const se = Array.isArray(b.code), V = se ? b.code.join(`
`) : b.code, R = se || V.includes(`
`), ee = {
        className: be("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, Y = Dr(
        V,
        b.codeLanguage,
        b.disableHighlight
      );
      A = R ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...ee,
          dangerouslySetInnerHTML: { __html: Y }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...ee,
          dangerouslySetInnerHTML: { __html: Y }
        }
      );
    } else
      A = b.text;
    const $ = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && b.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        b.header,
        " "
      ] }),
      A
    ] }), B = M ? "th" : "td";
    return /* @__PURE__ */ r.jsx(B, { className: F, ...E, children: $ }, w);
  };
  let S = t, C = e;
  !S && y && y.length && (S = y.map((b) => ({
    text: b.title,
    format: b.format,
    classes: b.headerClasses,
    attributes: b.headerAttributes
  }))), !C && y && g && g.length && (C = g.map((b, w) => y.map((k) => {
    const M = k.accessor ? k.accessor(b, w) : b[k.key];
    let F = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (F.rowHeader = !0), k.render) {
      const E = k.render(M, b, w, k);
      return E == null || typeof E == "boolean" ? { ...F, text: "" } : typeof E == "string" || typeof E == "number" ? { ...F, text: String(E) } : { ...F, ...E };
    }
    return { ...F, text: M != null ? String(M) : "" };
  })));
  const _ = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: N,
      ...o && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: be(I, m && "nhsuk-u-visually-hidden"), children: n }),
        S && S.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...o && { role: "row" }, children: S.map(
              (b, w) => D(b, w)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: C && C.map((b, w) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: b.map(
              (k, M) => x(k, M, M === 0)
            )
          },
          w
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(gp, { className: d, children: [
    l && /* @__PURE__ */ r.jsx(Wt, { level: i, className: "nhsuk-table__heading-tab", children: l }),
    _()
  ] }) : L ? /* @__PURE__ */ r.jsx("div", { className: L, children: _() }) : _();
}, vp = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = be(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, al = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...s, ...a, children: n });
}, sl = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: l,
  format: i,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  as: p = "th"
}) => {
  const y = be(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${i}`]: i },
    c
  ), g = {
    scope: "col",
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...h && { role: "columnheader" },
    ...f
  };
  let m;
  if (n != null) m = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) m = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const N = Array.isArray(a), L = N ? a.join(`
`) : a, D = N || L.includes(`
`), x = {
      className: be("nhsuk-table__code", o, {
        "nhsuk-table__code--block": D,
        "nhsuk-table__code--inline": !D
      }),
      ...s ? { "data-language": s } : {}
    }, S = Dr(
      L,
      s,
      l
    );
    m = D ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...x,
        dangerouslySetInnerHTML: { __html: S }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...x, dangerouslySetInnerHTML: { __html: S } });
  } else m = e;
  const I = p;
  return /* @__PURE__ */ r.jsx(I, { className: y, ...g, children: m });
}, wp = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: l,
  format: i,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  rowHeader: p
}) => {
  const y = !!p, g = y ? "th" : "td", m = be(
    y ? "nhsuk-table__header" : "nhsuk-table__cell",
    i && `nhsuk-table__${y ? "header" : "cell"}--${i}`,
    c
  ), I = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...y && { scope: "row" },
    ...h && { role: y ? "rowheader" : "cell" },
    ...f
  };
  let N;
  if (n != null) N = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) N = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const L = Array.isArray(a), D = L ? a.join(`
`) : a, x = L || D.includes(`
`), S = {
      className: be("nhsuk-table__code", o, {
        "nhsuk-table__code--block": x,
        "nhsuk-table__code--inline": !x
      }),
      ...s ? { "data-language": s } : {}
    }, C = Dr(D, s, l);
    N = x ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...S, dangerouslySetInnerHTML: { __html: C } }) }) : /* @__PURE__ */ r.jsx("code", { ...S, dangerouslySetInnerHTML: { __html: C } });
  } else N = e;
  return /* @__PURE__ */ r.jsx(g, { className: m, ...I, children: N });
}, Yt = yp;
Yt.Caption = vp;
Yt.BodyRow = al;
Yt.HeaderCell = sl;
Yt.Cell = wp;
let Ho = !1, zo = !1;
Object.defineProperty(Yt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Ho && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Ho = !0), al;
  }
});
Object.defineProperty(Yt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !zo && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), zo = !0), sl;
  }
});
const Ty = $n(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: l,
  autoActivate: i = !0,
  className: c,
  id: d,
  "data-testid": u,
  ...f
}, h) => {
  const p = n !== void 0, [y, g] = Be(() => t || e[0]?.id || ""), m = p ? n : y, I = He(null), N = He(/* @__PURE__ */ new Map()), L = xe((w) => {
    p || g(w), a?.(w);
  }, [p, a]), D = xe((w) => {
    s?.(w), i && L(w);
  }, [s, i, L]), x = xe((w, k) => {
    const M = e.filter((A) => !A.disabled).map((A) => A.id), F = M.indexOf(k);
    let E = null;
    switch (w.key) {
      case "ArrowLeft":
        E = F > 0 ? F - 1 : M.length - 1;
        break;
      case "ArrowRight":
        E = F < M.length - 1 ? F + 1 : 0;
        break;
      case "Home":
        E = 0;
        break;
      case "End":
        E = M.length - 1;
        break;
      case "Escape":
        w.preventDefault(), l?.();
        return;
      default:
        return;
    }
    if (E !== null) {
      w.preventDefault();
      const A = M[E], $ = N.current.get(A);
      $ && ($.focus(), D(A));
    }
  }, [e, D, l]), S = xe((w, k) => {
    k ? N.current.set(w, k) : N.current.delete(w);
  }, []), C = xe((w) => {
    const k = N.current.get(w);
    k && k.focus();
  }, []);
  Si(h, () => ({
    focusTab: C,
    getActiveTab: () => m,
    getTabListElement: () => I.current
  }), [C, m]);
  const _ = xe((w) => {
    const k = w.relatedTarget;
    I.current?.contains(k) || o?.();
  }, [o]), b = be("nhsuk-tabs", c);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: b,
      id: d,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: I,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: _,
                children: e.map((w) => {
                  const k = w.id === m, M = w.disabled, F = be("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": M
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: F, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (E) => S(w.id, E),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${w.id}-panel`,
                      id: `${w.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: M,
                      onClick: () => !M && L(w.id),
                      onKeyDown: (E) => !M && x(E, w.id),
                      onFocus: () => !M && D(w.id),
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
          const k = w.id === m;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${w.id}-tab`,
              id: `${w.id}-panel`,
              hidden: !k,
              children: w.content
            },
            w.id
          );
        })
      ]
    }
  );
}), Sp = $n(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: s = !1,
    className: o = "",
    id: l,
    children: i,
    ...c
  }, d) => {
    const u = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let h;
    return i ? h = i : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: l,
        className: u,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Sp.displayName = "Details";
const _p = $n(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...l
  }, i) => {
    const c = ["nhsuk-do-dont-list"];
    o && c.push(o);
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
      Wt,
      {
        level: s,
        className: "nhsuk-do-dont-list__label",
        text: e
      }
    );
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: i,
        className: c.join(" "),
        ...l,
        children: [
          h(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: d.join(" "), role: "list", children: n.map((p, y) => /* @__PURE__ */ r.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, y)) }) })
        ]
      }
    );
  }
);
_p.displayName = "DoDontList";
const kp = $n(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: s = !1,
    className: o = "",
    id: l,
    children: i,
    ...c
  }, d) => {
    const u = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let h;
    return i ? h = i : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: l,
        className: u,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
kp.displayName = "Expander";
const Cp = $n(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), l = (i, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, h = !!i.href, p = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        i.classes
      ].filter(Boolean).join(" "), y = [
        i.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Np,
        {
          item: i,
          itemClasses: p,
          hasLink: h,
          hintId: u,
          statusId: f,
          ariaDescribedBy: y
        },
        c
      );
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: s,
        className: o,
        ...a,
        children: e.map(l)
      }
    );
  }
), Np = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
}) => {
  const l = () => {
    const d = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": o,
        children: d
      }
    ) : /* @__PURE__ */ r.jsx("div", { className: e.title.classes || "", children: d });
  }, i = () => e.hint ? e.hint.html ? /* @__PURE__ */ r.jsx(
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
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(Ze, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: d, id: s, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      l(),
      i()
    ] }),
    c()
  ] });
};
Cp.displayName = "TaskList";
const Ly = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: s,
  className: o,
  ...l
}) => {
  const i = /important/i.test(e), c = () => s || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), d = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: d,
      ...l,
      children: [
        yi(
          u,
          { className: "nhsuk-warning-callout__label" },
          i ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
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
}, $y = ({
  src: e,
  alt: t,
  caption: n,
  sizes: a,
  srcset: s,
  className: o,
  ...l
}) => {
  const i = [
    "nhsuk-image",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      className: i,
      ...l,
      children: [
        /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-image__img",
            src: e,
            alt: t,
            ...a && s ? { sizes: a, srcSet: s } : {}
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
}, jp = ({
  dateRange: e,
  onPrev: t,
  onNext: n,
  onToday: a,
  density: s,
  onDensityChange: o,
  a11yMode: l,
  onA11yModeChange: i
}) => /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx(ut, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(ut, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(ut, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      br,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: s,
        onChange: (c) => o?.(c.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      br,
      {
        id: "slot-matrix-mode-select",
        name: "slot-matrix-mode",
        ariaLabel: "Change accessibility mode",
        value: l,
        onChange: (c) => i?.(c.target.value),
        options: [
          { value: "grid", text: "Grid" },
          { value: "list", text: "List" }
        ]
      }
    )
  ] })
] }), Mp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Ze, { color: Ip(n.status), text: n.label }) }, n.status)) });
function Ip(e) {
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
const Ay = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: s,
  selectionMode: o = "single",
  a11yMode: l,
  className: i,
  style: c,
  getSlotAriaLabel: d,
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: p = !0,
  legendPlacement: y = "bottom",
  onA11yModeChange: g
}) => {
  const [m, I] = Be("grid"), N = l || m, [L, D] = Be(a || []), x = n ?? L, S = je(() => {
    const E = /* @__PURE__ */ new Set();
    return e.forEach((A) => E.add(new Date(A.start).getTime())), Array.from(E).sort((A, $) => A - $);
  }, [e]), C = je(() => {
    const E = {};
    return e.forEach((A) => {
      const $ = new Date(A.start).getTime();
      E[$] || (E[$] = {});
      const B = A.capacity - A.booked - (A.held || 0);
      E[$][A.sessionId] = { slot: A, remaining: B };
    }), E;
  }, [e]), _ = xe((E) => {
    if (o === "single") {
      const A = [E.id];
      n || D(A), s?.(A, { lastAction: "select" });
    } else {
      const A = x.includes(E.id), $ = A ? x.filter((B) => B !== E.id) : [...x, E.id];
      n || D($), s?.($, { lastAction: A ? "deselect" : "select" });
    }
  }, [o, x, n, s]), b = je(() => h || (p ? Array.from(new Set(e.map((A) => A.status))).map((A) => ({
    status: A,
    label: A.charAt(0).toUpperCase() + A.slice(1)
  })) : void 0), [h, p, e]), w = b ? /* @__PURE__ */ r.jsx(
    Mp,
    {
      items: b,
      orientation: y === "left" || y === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (E) => {
    l || I(E), g?.(E);
  }, M = u || (f ? /* @__PURE__ */ r.jsx(
    jp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: N,
      onA11yModeChange: k
    }
  ) : null), F = /* @__PURE__ */ r.jsx("div", { style: c, className: be(i), children: /* @__PURE__ */ r.jsx(Ga, { className: be("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Kt, { children: /* @__PURE__ */ r.jsx(Wn, { width: fn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    y === "top" && w,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((E) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => _(E), "aria-pressed": x.includes(E.id), children: [
      On(new Date(E.start)),
      " – ",
      On(new Date(E.end)),
      " (",
      E.status,
      ")"
    ] }) }, E.id)) }),
    y === "bottom" && w
  ] }) }) }) }) });
  return N === "list" ? F : /* @__PURE__ */ r.jsx("div", { style: c, className: be(i), children: /* @__PURE__ */ r.jsx(Ga, { className: be("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Kt, { children: /* @__PURE__ */ r.jsx(Wn, { width: fn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    y === "top" && w,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": S.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((E) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${E.specialty}`, className: "nhs-slot-matrix__session-header", children: E.specialty }, E.id))
      ] }),
      S.map((E) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": On(new Date(E)), children: On(new Date(E)) }),
        t.map((A) => {
          const $ = C[E]?.[A.id];
          if (!$)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, A.id);
          const { slot: B, remaining: se } = $, V = x.includes(B.id), R = d ? d(B) : `Slot ${On(new Date(B.start))} ${B.status}${se === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": B.status,
              className: be("nhs-slot-matrix__cell", V && "nhs-slot-matrix__cell--selected"),
              "aria-label": R,
              "aria-selected": V || void 0,
              onClick: () => _(B),
              children: se > 0 ? `${se} left` : "Full"
            },
            B.id
          );
        })
      ] }, E))
    ] }),
    y === "bottom" && w
  ] }) }) }) }) });
};
function Oo(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function On(e) {
  return `${Oo(e.getHours())}:${Oo(e.getMinutes())}`;
}
const Dp = ({
  title: e,
  value: t,
  subtitle: n,
  variant: a = "default",
  href: s,
  className: o = "",
  ariaLabel: l,
  ...i
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    o
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Wt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return s ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: s,
      "aria-label": l || `${e}: ${t}`,
      ...i,
      children: d
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: c,
      "aria-label": l,
      ...i,
      children: d
    }
  );
}, Ey = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Ga, { children: /* @__PURE__ */ r.jsx(Kt, { children: e.map((s, o) => /* @__PURE__ */ r.jsx(
    Wn,
    {
      width: fn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ r.jsx(Dp, { ...s })
    },
    o
  )) }) }) });
}, Tp = ht.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: l,
    testId: i,
    ariaLabel: c,
    ariaLabelledby: d,
    ariaDescribedby: u,
    className: f,
    tableClassName: h,
    bordered: p = !1,
    striped: y = !1,
    responsive: g = !1,
    tableType: m = "default"
  }, I) => {
    const N = He(null), L = He(null), D = He(null);
    ht.useImperativeHandle(I, () => N.current, []);
    const [x, S] = Be(0), [C, _] = Be(0), [b, w] = Be("headers"), [k, M] = Be("browse"), F = t.length, E = e.length, A = je(() => !n || n.length === 0 ? e : [...e].sort((Y, K) => {
      for (const { key: J, direction: X } of n) {
        const pe = Y[J], ne = K[J];
        if (pe == null && ne == null) continue;
        if (pe == null) return 1;
        if (ne == null) return -1;
        let re = 0;
        if (typeof pe == "number" && typeof ne == "number" ? re = pe - ne : re = String(pe).localeCompare(String(ne)), re !== 0)
          return X === "asc" ? re : -re;
      }
      return 0;
    }), [e, n]), $ = xe((Y, K) => {
      setTimeout(() => {
        const J = N.current?.querySelector(
          `tbody tr:nth-child(${Y + 1}) td:nth-child(${K + 1})`
        );
        J && (J.focus(), typeof J.scrollIntoView == "function" && J.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), B = xe((Y) => {
      setTimeout(() => {
        const K = N.current?.querySelector(`th:nth-child(${Y + 1})`);
        K && (K.focus(), typeof K.scrollIntoView == "function" && K.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), se = xe((Y) => {
      a?.(Y);
    }, [a]), V = xe((Y) => {
      o?.(Y);
    }, [o]), R = xe((Y) => {
      const { key: K } = Y;
      switch (K) {
        case "Enter":
          if (Y.preventDefault(), b === "headers" && k === "browse")
            M("navigate"), B(C);
          else if (b === "headers" && k === "navigate") {
            const J = t[C];
            J && se(J.key);
          } else b === "cells" && k === "browse" ? (M("navigate"), $(x, C)) : b === "cells" && k === "navigate" && V(x);
          break;
        case "Escape":
          Y.preventDefault(), (b === "headers" && k === "navigate" || b === "cells" && k === "navigate") && M("browse");
          break;
        case "ArrowLeft":
          if (Y.preventDefault(), k === "navigate" || k === "browse" && b === "headers") {
            if (b === "headers") {
              const J = Math.max(0, C - 1);
              _(J), B(J);
            } else if (b === "cells") {
              const J = Math.max(0, C - 1);
              _(J), $(x, J);
            }
          }
          break;
        case "ArrowRight":
          if (Y.preventDefault(), k === "navigate" || k === "browse" && b === "headers") {
            if (b === "headers") {
              const J = Math.min(F - 1, C + 1);
              _(J), B(J);
            } else if (b === "cells") {
              const J = Math.min(F - 1, C + 1);
              _(J), $(x, J);
            }
          }
          break;
        case "ArrowUp":
          if (Y.preventDefault(), b === "cells") {
            if (k === "browse") {
              const J = Math.max(0, x - 1);
              S(J), $(J, 0), _(0);
            } else if (k === "navigate")
              if (x > 0) {
                const J = x - 1;
                S(J), $(J, C);
              } else
                w("headers"), M("browse"), B(C);
          }
          break;
        case "ArrowDown":
          if (Y.preventDefault(), b === "headers" && k === "browse")
            w("cells"), S(0), _(0), $(0, 0);
          else if (b === "cells") {
            const J = E - 1;
            if (k === "browse") {
              const X = Math.min(J, x + 1);
              S(X), $(X, 0), _(0);
            } else if (k === "navigate" && x < J) {
              const X = x + 1;
              S(X), $(X, C);
            }
          }
          break;
        case "Home":
          Y.preventDefault(), b === "headers" ? (_(0), B(0)) : b === "cells" && (Y.ctrlKey ? (S(0), _(0), $(0, 0)) : (_(0), $(x, 0)));
          break;
        case "End":
          if (Y.preventDefault(), b === "headers") {
            const J = F - 1;
            _(J), B(J);
          } else if (b === "cells")
            if (Y.ctrlKey) {
              const J = E - 1, X = F - 1;
              S(J), _(X), $(J, X);
            } else {
              const J = F - 1;
              _(J), $(x, J);
            }
          break;
        case " ":
          if (Y.preventDefault(), b === "headers" && k === "navigate") {
            const J = t[C];
            J && se(J.key);
          } else b === "cells" && k === "navigate" && V(x);
          break;
      }
    }, [
      b,
      k,
      C,
      x,
      F,
      E,
      t,
      $,
      B,
      se,
      V
    ]);
    Ve(() => {
      const Y = N.current;
      if (Y)
        return Y.addEventListener("keydown", R), () => Y.removeEventListener("keydown", R);
    }, [R]);
    const ee = be(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": p,
        "nhsuk-table--striped": y,
        "nhsuk-table--compact": m === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: N,
        className: ee,
        id: l,
        "data-testid": i,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": d,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: L, role: "row", children: t.map((Y, K) => {
            const J = n?.find((ne) => ne.key === Y.key), X = !!J, pe = b === "headers" && C === K;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: be("sortable-header", {
                  "sortable-header--focused": pe
                }),
                role: "columnheader",
                tabIndex: pe ? 0 : -1,
                onClick: () => se(Y.key),
                onKeyDown: (ne) => {
                  (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), se(Y.key));
                },
                "aria-sort": X ? J?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: Y.label }),
                  X && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ne) => ne.key === Y.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: J?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              Y.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: D, className: "nhsuk-table__body", role: "rowgroup", children: A.map((Y, K) => {
            const J = s === K, X = b === "cells" && x === K;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: be("data-row", {
                  "data-row--selected": J,
                  "data-row--focused": X
                }),
                "aria-selected": J,
                children: t.map((pe, ne) => {
                  const re = pe.tableRenderer ? pe.tableRenderer(Y) : pe.render ? pe.render(Y) : Y[pe.key], Q = b === "cells" && x === K && C === ne, te = () => typeof re == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: re ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: re ? "Yes" : "No" })
                  ] }) : String(re ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: be("data-cell", {
                        "data-cell--focused": Q
                      }),
                      tabIndex: Q ? 0 : -1,
                      onClick: () => V(K),
                      children: te()
                    },
                    pe.key
                  );
                })
              },
              K
            );
          }) })
        ]
      }
    );
  }
);
Tp.displayName = "AriaDataGrid";
const ol = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: l = !0,
  showHelp: i = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = He(null), h = He(null), p = He(null), y = xe((b, w) => {
    c || (h.current = w, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", w));
  }, [c]), g = xe((b, w) => {
    c || h.current === w || (b.preventDefault(), b.dataTransfer.dropEffect = "move", p.current = w);
  }, [c]), m = xe((b, w) => {
    if (c) return;
    b.preventDefault();
    const k = h.current;
    if (!k || k === w) return;
    const M = e.findIndex((E) => E.key === k), F = e.findIndex((E) => E.key === w);
    if (M !== -1 && F !== -1) {
      const E = [...e], [A] = E.splice(M, 1);
      E.splice(F, 0, A), n(E);
    }
    h.current = null, p.current = null;
  }, [c, e, n]), I = xe(() => {
    h.current = null, p.current = null;
  }, []), N = xe((b) => {
    const w = t.find((k) => k.key === b);
    return w ? w.label : b;
  }, [t]), L = xe((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), D = xe((b) => {
    if (c) return;
    const w = e.map(
      (k) => k.key === b ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    n(w);
  }, [e, n, c]), x = xe((b) => {
    if (c) return;
    const w = e.filter((k) => k.key !== b);
    n(w);
  }, [e, n, c]), S = xe(() => {
    c || n([]);
  }, [n, c]), C = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const b = e.map((w, k) => {
      const M = w.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${N(w.key)} (${M})`;
    });
    if (b.length === 1)
      return `Sorted by: ${b[0]}`;
    if (b.length === 2)
      return `Sorted by: ${b.join(" and ")}`;
    {
      const w = b.pop();
      return `Sorted by: ${b.join(", ")}, and ${w}`;
    }
  }, _ = je(() => {
    const b = ["sort-description"];
    return i && b.push("sort-help"), u && b.push(u), b.join(" ");
  }, [i, u]);
  return e.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: s
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
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
          children: e.map((b, w) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (k) => y(k, b.key),
              onDragOver: (k) => g(k, b.key),
              onDrop: (k) => m(k, b.key),
              onDragEnd: I,
              onClick: () => D(b.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ r.jsx(
                Ze,
                {
                  color: L(w),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(b.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${w + 1}`, children: w + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: N(b.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), D(b.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${N(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${b.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${b.direction}`,
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
            b.key
          ))
        }
      ),
      l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        ut,
        {
          variant: "secondary",
          onClick: S,
          disabled: c,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function Lp(e, t) {
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
      const s = [...e.selectedRows];
      return s[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: s };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: o } = t.payload, l = new Array(o).fill(!1), i = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, o); d++)
        l[d] = e.tabLoadingStates[d], i[d] = e.tabErrors[d], c[d] = e.selectedRows[d];
      return {
        ...e,
        tabLoadingStates: l,
        tabErrors: i,
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
const Qa = $n(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: s,
    selectedIndex: o,
    onTabChange: l,
    onGlobalRowSelectionChange: i,
    ariaLabel: c,
    ariaDescription: d,
    className: u = "",
    disabled: f = !1,
    orientation: h = "horizontal",
    id: p,
    isLoading: y = !1,
    loadingComponent: g,
    error: m = null,
    errorComponent: I,
    "data-testid": N,
    actions: L,
    actionsMinGap: D = 16,
    forceActionsAbove: x = !1
  } = t, C = He(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, _ = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), b = `${C}-description`, w = `${C}-navigation-help`, {
    dataComparator: k = (j, P) => JSON.stringify(j) === JSON.stringify(P),
    filterFunction: M = (j) => j,
    booleanRenderer: F = (j) => j ? "✓" : "✗"
  } = a || {}, E = o !== void 0, A = o ?? 0, [$, B] = Be({
    focusArea: "tabs",
    focusedTabIndex: A,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), se = je(() => ({
    selectedIndex: A,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [A]), [V, R] = _i(Lp, se);
  Ve(() => {
    const j = V.tabLoadingStates.length, P = s.length;
    j !== P && R({ type: "ADJUST_ARRAYS", payload: { newLength: P } });
  }, [s.length]), Ve(() => {
    E && R({ type: "SET_SELECTED_INDEX", payload: A });
  }, [A, E]), Ve(() => {
    B((j) => ({
      ...j,
      focusArea: "tabs",
      focusedTabIndex: V.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [V.selectedIndex]), Ve(() => {
    i && i(V.globalSelectedRowData);
  }, [V.globalSelectedRowData, i]);
  const ee = xe(
    (j, P) => k(j, P),
    [k]
  ), Y = xe(
    (j) => {
      j >= 0 && j < s.length && !s[j].disabled && (R({ type: "SET_SELECTED_INDEX", payload: j }), B((P) => ({
        ...P,
        focusedTabIndex: j,
        focusArea: "tabs"
      })), l?.(j));
    },
    [s, l]
  ), K = He(!1), J = xe(
    (j, P) => {
      if (!P?.force && !K.current && j === 0) {
        K.current = !0;
        return;
      }
      K.current = !0, setTimeout(() => {
        const z = X.current[j], G = z?.parentElement;
        if (z && G) {
          const Z = z.offsetLeft, q = z.offsetWidth, de = G.clientWidth, le = Z - de / 2 + q / 2;
          try {
            G.scrollTo({
              left: Math.max(0, le),
              behavior: "smooth"
            });
          } catch {
            z.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!z,
          tabListElementExists: !!G
        });
      }, 50);
    },
    []
  ), X = He([]), pe = He([]), ne = xe(
    (j, P) => {
      const z = V.sortConfig || [], G = z.find(
        (de) => de.key === P
      );
      let Z;
      G ? G.direction === "asc" ? Z = z.map(
        (de) => de.key === P ? { ...de, direction: "desc" } : de
      ) : Z = z.filter(
        (de) => de.key !== P
      ) : Z = [...z, { key: P, direction: "asc" }], R({
        type: "SET_SORT",
        payload: Z
      }), s[j].onSort?.(P);
    },
    [V.sortConfig, s]
  ), re = xe(
    (j) => {
      setTimeout(() => {
        const P = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] th:nth-child(${j + 1})`
        );
        P && P.focus();
      }, 0);
    },
    [V.selectedIndex]
  ), Q = xe(
    (j) => F(j),
    [F]
  ), te = xe(
    (j, P) => {
      setTimeout(() => {
        const z = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] tbody tr:nth-child(${j + 1}) td:nth-child(${P + 1})`
        );
        z && z.focus();
      }, 0);
    },
    [V.selectedIndex]
  );
  Ve(() => {
    $.isGridActive && ($.focusArea === "headers" ? setTimeout(() => {
      re($.focusedHeaderIndex);
    }, 0) : $.focusArea === "cells" && setTimeout(() => {
      te(
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
    re,
    te
  ]), Ve(() => {
    J(V.selectedIndex);
  }, [V.selectedIndex, J]);
  const ce = xe(
    (j, P) => {
      const { key: z } = j, G = s[V.selectedIndex], Z = G?.columns.length || 0;
      switch (z) {
        case "ArrowLeft":
          j.preventDefault();
          const q = Math.max(0, P - 1);
          B((ye) => ({
            ...ye,
            focusedHeaderIndex: q
          })), re(q);
          break;
        case "ArrowRight":
          j.preventDefault();
          const de = Math.min(Z - 1, P + 1);
          B((ye) => ({
            ...ye,
            focusedHeaderIndex: de
          })), re(de);
          break;
        case "ArrowUp":
          j.preventDefault(), B((ye) => ({
            ...ye,
            focusArea: "tabs",
            focusedTabIndex: V.selectedIndex
          })), J(V.selectedIndex), X.current[V.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          j.preventDefault(), B((ye) => ({
            ...ye,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: P,
            isGridActive: !0
          }));
          break;
        case "Home":
          j.preventDefault(), B((ye) => ({ ...ye, focusedHeaderIndex: 0 })), re(0);
          break;
        case "End":
          j.preventDefault();
          const le = Z - 1;
          B((ye) => ({
            ...ye,
            focusedHeaderIndex: le
          })), re(le);
          break;
        case "Enter":
        case " ":
          j.preventDefault();
          const ue = G?.columns[P]?.key;
          ue && ne(V.selectedIndex, ue);
          break;
      }
    },
    [
      s,
      V.selectedIndex,
      ne,
      B,
      re,
      te,
      X
    ]
  ), W = xe(
    (j, P, z) => {
      const { key: G } = j, Z = s[V.selectedIndex], q = Z?.data.length || 0, de = Z?.columns.length || 0;
      switch (G) {
        case "ArrowUp":
          if (j.preventDefault(), P === 0)
            B((ge) => ({
              ...ge,
              focusArea: "headers",
              focusedHeaderIndex: z,
              isGridActive: !1
            })), re(z);
          else {
            const ge = P - 1;
            B((Le) => ({
              ...Le,
              focusedRowIndex: ge
            })), te(ge, z);
          }
          break;
        case "ArrowDown":
          j.preventDefault();
          const le = Math.min(q - 1, P + 1);
          B((ge) => ({
            ...ge,
            focusedRowIndex: le
          })), te(le, z);
          break;
        case "ArrowLeft":
          j.preventDefault();
          const ue = Math.max(0, z - 1);
          B((ge) => ({
            ...ge,
            focusedColumnIndex: ue
          })), te(P, ue);
          break;
        case "ArrowRight":
          j.preventDefault();
          const ye = Math.min(de - 1, z + 1);
          B((ge) => ({
            ...ge,
            focusedColumnIndex: ye
          })), te(P, ye);
          break;
        case "Home":
          j.preventDefault(), j.ctrlKey ? (B((ge) => ({
            ...ge,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), te(0, 0)) : (B((ge) => ({ ...ge, focusedColumnIndex: 0 })), te(P, 0));
          break;
        case "End":
          if (j.preventDefault(), j.ctrlKey) {
            const ge = q - 1, Le = de - 1;
            B((Me) => ({
              ...Me,
              focusedRowIndex: ge,
              focusedColumnIndex: Le
            })), te(ge, Le);
          } else {
            const ge = de - 1;
            B((Le) => ({
              ...Le,
              focusedColumnIndex: ge
            })), te(P, ge);
          }
          break;
        case "Enter":
        case " ":
          if (j.preventDefault(), Z && Z.data[P]) {
            const ge = Z.data.some(
              (We) => "ews_data" in We
            ) ? M(Z.data, V.filters) : Z.data, Le = V.sortConfig;
            let Me = ge;
            if (Le && Le.length > 0 && (Me = [...ge].sort((We, Qe) => {
              for (const { key: at, direction: qe } of Le) {
                let Ye = We[at], Ge = Qe[at];
                const mt = Z.columns.find(
                  (Jt) => Jt.key === at
                );
                if (mt?.tableRenderer ? (Ye = mt.tableRenderer(We), Ge = mt.tableRenderer(Qe)) : mt?.render && (Ye = mt.render(We), Ge = mt.render(Qe)), Ye == null && Ge == null) continue;
                if (Ye == null) return qe === "asc" ? -1 : 1;
                if (Ge == null) return qe === "asc" ? 1 : -1;
                let yt = 0;
                if (typeof Ye == "number" && typeof Ge == "number" ? yt = Ye - Ge : yt = String(Ye).localeCompare(
                  String(Ge),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), yt !== 0)
                  return qe === "asc" ? yt : -yt;
              }
              return 0;
            })), Me[P]) {
              const We = Me[P], at = V.globalSelectedRowData && ee(V.globalSelectedRowData, We) ? null : We;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: at
              });
            }
          }
          break;
      }
    },
    [
      s,
      V.selectedIndex,
      V.filters,
      V.sortConfig,
      M,
      ee,
      R,
      B,
      re,
      te
    ]
  ), ie = xe(
    (j, P) => M(j, P),
    [M]
  );
  if (Si(
    n,
    () => ({
      selectTab: (j) => {
        j >= 0 && j < s.length && (R({ type: "SET_SELECTED_INDEX", payload: j }), l?.(j));
      },
      refreshData: (j) => {
        console.log("Refreshing data for tab:", j ?? "all");
      },
      exportData: (j) => {
        const P = j ?? V.selectedIndex, z = s[P];
        return z ? z.data : [];
      },
      getSelectedRows: (j) => V.globalSelectedRowData ? [] : [],
      clearSelection: (j) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (j) => {
        R({ type: "SET_FILTERS", payload: j });
      }
    }),
    [V.selectedIndex, V.selectedRows, s, l]
  ), y)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": N,
        children: g || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
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
  if (m)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": N,
        children: I || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: m })
        ] })
      }
    );
  const ae = He(null), he = He(null), oe = He(null), [fe, De] = Be(!0);
  Ve(() => {
    if (!L) {
      De(!1);
      return;
    }
    if (x) {
      De(!1);
      return;
    }
    function j() {
      if (!ae.current || !he.current || !oe.current) return;
      const G = ae.current.clientWidth, Z = Array.from(
        he.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), q = Z.reduce((ye, ge) => ye + ge.offsetWidth, 0), de = oe.current.offsetWidth, le = Math.max(8 * (Z.length - 1), 0), ue = q + le + de + D <= G;
      De(ue);
    }
    const P = requestAnimationFrame(() => j()), z = new ResizeObserver(() => j());
    return ae.current && z.observe(ae.current), he.current && z.observe(he.current), () => {
      cancelAnimationFrame(P), z.disconnect();
    };
  }, [L, D, x, s.length]);
  const Pe = oe, _e = xe(() => Pe.current ? Array.from(
    Pe.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((j) => !j.hasAttribute("disabled")) : [], []), H = xe(
    (j) => {
      const P = _e();
      if (!P.length) return;
      const z = Math.max(0, Math.min(j, P.length - 1));
      P[z].focus(), B((G) => ({ ...G, focusArea: "actions", focusedActionIndex: z }));
    },
    [_e]
  ), v = xe(() => H(0), [H]), T = xe(
    (j, P) => {
      const { key: z } = j, G = s.length - 1;
      switch (z) {
        case "ArrowUp": {
          L && !fe && (j.preventDefault(), v());
          break;
        }
        case "ArrowLeft": {
          j.preventDefault();
          const Z = P > 0 ? P - 1 : G;
          Y(Z), J(Z), X.current[Z]?.focus();
          break;
        }
        case "ArrowRight": {
          if (j.preventDefault(), P === G && L && fe) {
            v();
            return;
          }
          const Z = P < G ? P + 1 : 0;
          Y(Z), J(Z), X.current[Z]?.focus();
          break;
        }
        case "ArrowDown": {
          j.preventDefault(), B((Z) => ({
            ...Z,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          j.preventDefault(), Y(0), J(0), X.current[0]?.focus();
          break;
        }
        case "End": {
          j.preventDefault(), Y(G), J(G), X.current[G]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          j.preventDefault(), Y(P);
          break;
        }
        case "Tab": {
          !j.shiftKey && P === G && L && fe && v();
          break;
        }
      }
    },
    [s.length, Y, J, L, fe, v]
  ), O = xe((j) => {
    const { key: P } = j, z = _e();
    if (!z.length) return;
    const G = z.findIndex((Z) => Z === document.activeElement);
    switch (P) {
      case "ArrowLeft": {
        if (fe)
          if (G > 0)
            j.preventDefault(), H(G - 1);
          else {
            j.preventDefault();
            const Z = s.length - 1;
            Y(Z), J(Z), X.current[Z]?.focus(), B((q) => ({ ...q, focusArea: "tabs", focusedTabIndex: Z }));
          }
        break;
      }
      case "ArrowRight": {
        fe && (G < z.length - 1 ? (j.preventDefault(), H(G + 1)) : (j.preventDefault(), Y(0), J(0), X.current[0]?.focus(), B((Z) => ({ ...Z, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (fe)
          j.preventDefault(), B((Z) => ({ ...Z, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          j.preventDefault();
          const Z = V.selectedIndex;
          X.current[Z]?.focus(), B((q) => ({ ...q, focusArea: "tabs", focusedTabIndex: Z }));
        }
        break;
      }
    }
  }, [_e, fe, H, s.length, Y, J, V.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": N,
      ref: ae,
      children: [
        d && !_ && /* @__PURE__ */ r.jsx("div", { id: b, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: w,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          ol,
          {
            sortConfig: V.sortConfig || [],
            columns: s.flatMap(
              (j) => j.columns.map((P) => ({ key: P.key, label: P.label }))
            ).filter(
              (j, P, z) => z.findIndex((G) => G.key === j.key) === P
              // Remove duplicates
            ),
            onSortChange: (j) => {
              R({ type: "SET_SORT", payload: j });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        L && !fe && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: oe,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: O,
            children: L
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${fe ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? _ ? d : b : w,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: he,
              children: s.map((j, P) => {
                const z = P === V.selectedIndex, G = j.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${j.id}`,
                    "aria-controls": `panel-${j.id}`,
                    "aria-selected": z,
                    "aria-disabled": G,
                    tabIndex: z ? 0 : -1,
                    ref: (Z) => {
                      X.current[P] = Z;
                    },
                    onClick: () => Y(P),
                    onKeyDown: (Z) => T(Z, P),
                    disabled: G,
                    className: [
                      "aria-tabs-datagrid__tab",
                      z ? "aria-tabs-datagrid__tab--selected" : "",
                      G ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: j.label }),
                      V.tabLoadingStates[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      V.tabErrors[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  j.id
                );
              })
            }
          ),
          L && fe && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: oe,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: O,
              children: L
            }
          )
        ] }),
        s.map((j, P) => {
          const z = P === V.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${j.id}`,
              "aria-labelledby": `tab-${j.id}`,
              tabIndex: 0,
              hidden: !z,
              ref: (G) => {
                pe.current[P] = G;
              },
              className: `aria-tabs-datagrid__panel ${j.className || ""}`,
              "data-tab-panel": P,
              children: z && (() => {
                const G = j.data.some(
                  (q) => "ews_data" in q
                ) ? ie(j.data, V.filters) : j.data, Z = je(() => {
                  const q = V.sortConfig;
                  return !q || q.length === 0 ? G : [...G].sort((de, le) => {
                    for (const { key: ue, direction: ye } of q) {
                      let ge = de[ue], Le = le[ue];
                      const Me = j.columns.find(
                        (Qe) => Qe.key === ue
                      );
                      if (Me?.tableRenderer ? (ge = Me.tableRenderer(de), Le = Me.tableRenderer(le)) : Me?.render && (ge = Me.render(de), Le = Me.render(le)), ge == null && Le == null) continue;
                      if (ge == null) return 1;
                      if (Le == null) return -1;
                      let We = 0;
                      if (typeof ge == "number" && typeof Le == "number" ? We = ge - Le : typeof ge == "boolean" && typeof Le == "boolean" ? We = ge === Le ? 0 : ge ? 1 : -1 : We = String(ge).localeCompare(
                        String(Le),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), We !== 0)
                        return ye === "asc" ? We : -We;
                    }
                    return 0;
                  });
                }, [G, V.sortConfig, j.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": j.ariaLabel,
                    "aria-describedby": j.ariaDescription ? `panel-${j.id}-description` : void 0,
                    children: [
                      j.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${j.id}-description`,
                          children: j.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: j.columns.map((q, de) => {
                        const le = V.sortConfig?.find(
                          (ge) => ge.key === q.key
                        ), ue = !!le, ye = $.focusArea === "headers" && $.focusedHeaderIndex === de;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${ye ? "sortable-header--focused" : ""} ${ue ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: ye ? 0 : -1,
                            onClick: () => ne(P, q.key),
                            onKeyDown: (ge) => ce(ge, de),
                            "aria-sort": ue ? le?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: q.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ue ? `sort-indicator--${le?.direction}` : ""}`,
                                  children: [
                                    V.sortConfig && V.sortConfig.length > 0 && V.sortConfig.findIndex(
                                      (ge) => ge.key === q.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${V.sortConfig.findIndex((ge) => ge.key === q.key) + 1}`,
                                        "data-priority": V.sortConfig.findIndex(
                                          (ge) => ge.key === q.key
                                        ) + 1,
                                        title: `Sort priority: ${V.sortConfig.findIndex((ge) => ge.key === q.key) + 1}`,
                                        children: V.sortConfig.findIndex(
                                          (ge) => ge.key === q.key
                                        ) + 1
                                      }
                                    ),
                                    ue && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${le?.direction}`,
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
                          q.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: Z.map((q, de) => {
                        const le = V.globalSelectedRowData && ee(V.globalSelectedRowData, q), ue = $.focusArea === "cells" && $.focusedRowIndex === de;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${le ? "data-row--selected" : ""} ${ue ? "data-row--focused" : ""}`,
                            "aria-selected": le,
                            children: j.columns.map((ye, ge) => {
                              const Le = q[ye.key];
                              let Me;
                              ye.tableRenderer ? Me = ye.tableRenderer(q) : ye.render ? Me = ye.render(q) : Me = Le;
                              const We = $.focusArea === "cells" && $.focusedRowIndex === de && $.focusedColumnIndex === ge, Qe = () => {
                                if (ye.customRenderer) {
                                  const at = ye.customRenderer(
                                    Le,
                                    q
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: at
                                    }
                                  );
                                }
                                return typeof Le == "boolean" && Me === Le ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  Q(Le),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Le ? "Yes" : "No" })
                                ] }) : ht.isValidElement(Me) || typeof Me != "object" ? Me ?? "" : Me;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${We ? "data-cell--focused" : ""}`,
                                  tabIndex: We ? 0 : -1,
                                  onClick: () => {
                                    const qe = V.globalSelectedRowData && ee(
                                      V.globalSelectedRowData,
                                      q
                                    ) ? null : q;
                                    R({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: qe
                                    });
                                  },
                                  onKeyDown: (at) => W(at, de, ge),
                                  children: Qe()
                                },
                                ye.key
                              );
                            })
                          },
                          de
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            j.id
          );
        })
      ]
    }
  );
}), fr = {
  asc: "↑",
  desc: "↓"
}, $p = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Ea(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Ap(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Ep(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Pp(e, t) {
  const n = t.find((s) => s.id === e), a = Ap(t);
  return n ? n.priority < a : !1;
}
const Py = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: l = !0,
  disabled: i = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = je(() => $p(e), [e]), f = xe((N) => {
    if (i) return;
    const L = e.map(
      (D) => D.id === N ? { ...D, direction: D.direction === "asc" ? "desc" : "asc" } : D
    );
    t(L);
  }, [e, t, i]), h = xe((N) => {
    if (i) return;
    const L = e.findIndex((x) => x.id === N);
    if (L <= 0) return;
    const D = [...e];
    [D[L], D[L - 1]] = [D[L - 1], D[L]], t(Ea(D));
  }, [e, t, i]), p = xe((N) => {
    if (i) return;
    const L = e.findIndex((x) => x.id === N);
    if (L >= e.length - 1 || L === -1) return;
    const D = [...e];
    [D[L], D[L + 1]] = [D[L + 1], D[L]], t(Ea(D));
  }, [e, t, i]), y = xe((N) => {
    if (i) return;
    const L = e.filter((D) => D.id !== N);
    t(Ea(L));
  }, [e, t, i]), g = xe(() => {
    i || t([]);
  }, [t, i]), m = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const N = u.map((L, D) => {
      const x = L.direction === "asc" ? "ascending" : "descending";
      return `${D + 1}. ${L.label} (${x})`;
    });
    if (N.length === 1)
      return `Sorted by: ${N[0]}`;
    if (N.length === 2)
      return `Sorted by: ${N.join(" and ")}`;
    {
      const L = N.pop();
      return `Sorted by: ${N.join(", ")}, and ${L}`;
    }
  }, I = je(() => {
    const N = ["sort-description"];
    return l && N.push("sort-help"), d && N.push(d), N.join(" ");
  }, [l, d]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: m()
    }
  ) }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: m()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": I,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((N) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                Ze,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => y(N.id),
                  disabled: i,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: N.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: N.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(N.id),
                        disabled: i,
                        "aria-label": `Toggle sort direction for ${N.label}. Currently ${N.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: N.direction === "asc" ? fr.asc : fr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(N.id),
                          disabled: i || !Ep(N.id, e),
                          "aria-label": `Move ${N.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(N.id),
                          disabled: i || !Pp(N.id, e),
                          "aria-label": `Move ${N.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            N.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      ut,
      {
        variant: "secondary",
        onClick: g,
        disabled: i,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsxs("small", { children: [
      "Click ",
      fr.asc,
      "/",
      fr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Vs = (e, t) => t.map((n) => ({
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
})), Ka = [
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
], Fp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Rp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Bp = (e) => {
  if (typeof e == "boolean") {
    const n = Ka.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = Ka.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Hp = (e) => `${e.name}-${e.bed_name}`, zp = () => ({
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
}), Fy = (e) => {
  const t = zp();
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
}, Op = {
  dataComparator: Fp,
  filterFunction: Rp,
  booleanRenderer: Bp,
  getDataId: Hp
};
function Uo(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: l = [],
    getPriority: i,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((L) => L.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => s.filter((D) => !l.includes(D) && e[D]).slice(0, 3).map((D) => {
    const x = t.find((b) => b.key === D), S = e[D], C = d[D] ? d[D](S, e) : x?.cardRenderer ? x.cardRenderer(e) : x?.render ? x.render(e) : S;
    return `${x?.label || D}: ${C}`;
  }).join(" • "), y = () => o.length === 0 ? null : o.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const D = e[L.fieldKey], x = L.render ? L.render(D, e) : D;
    return `<span class="nhsuk-tag ${Up(L, D)}">${x}</span>`;
  }).join(""), g = () => c ? c(e) : i?.(e) === "high" ? "primary" : "default", m = y(), I = p(), N = m ? `${I}${m ? `<div class="adaptive-card__badges">${m}</div>` : ""}` : I;
  return {
    variant: g(),
    heading: String(h),
    descriptionHtml: N,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${h}`
  };
}
function Up(e, t) {
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
const Wp = {
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
}, il = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const l = e.name, i = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${l}, Age ${i}, Ward ${c}, Bed ${d}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: l }),
            /* @__PURE__ */ r.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__value", children: i })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: u !== void 0 && /* @__PURE__ */ r.jsxs(
            Ze,
            {
              color: Vp(ul(u)),
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
            ut,
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
            ut,
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
            ut,
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
}, ll = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Ze,
        {
          color: Yp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        Ze,
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
      ut,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      ut,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), cl = ({
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
        Ze,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        Ze,
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
      ut,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      ut,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), dl = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, l = e.ews_data?.respiratory_rate_bpm, i = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${s}, EWS Score ${o}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: s }),
            o !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Gp(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            Ze,
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
          l !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Respiratory Rate" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              l,
              " bpm"
            ] })
          ] }),
          i !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "SpO2" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              i,
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
            ut,
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
            ut,
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
function ul(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Gp(e) {
  return ul(e);
}
function Vp(e) {
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
function Yp(e) {
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
const Zp = [
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
], fl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Jp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, qp = (e) => fl(e) === "high" || e.status === "urgent" ? "primary" : "default", Xp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Qp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Zp,
  hiddenFields: [],
  getPriority: fl,
  getStatus: Jp,
  getVariant: qp,
  fieldRenderers: Xp,
  classPrefix: "adaptive-card--healthcare"
}, Kp = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", s = n.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ r.jsx(
      il,
      {
        data: e,
        columns: t,
        priority: a,
        status: o,
        onSelect: (l) => console.log("Patient selected:", l),
        onAction: (l, i) => console.log("Patient action:", l, i)
      }
    );
  },
  appointment: (e, t, n) => {
    const a = n.getStatus?.(e) || "pending", s = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ r.jsx(
      ll,
      {
        data: e,
        columns: t,
        status: s,
        onSelect: (o) => console.log("Appointment selected:", o),
        onAction: (o, l) => console.log("Appointment action:", o, l)
      }
    );
  },
  medication: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      cl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Medication selected:", s),
        onAction: (s, o) => console.log("Medication action:", s, o)
      }
    );
  },
  vitals: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      dl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, eh = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Wo = {
  name: "healthcare",
  defaultCardConfig: Qp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Kp,
  fieldTypes: eh
};
function Go(e) {
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
function Vo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function th(e, t) {
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
      const s = [...e.selectedRows];
      return s[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: s };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: o } = t.payload, l = new Array(o).fill(!1), i = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, o); d++)
        l[d] = e.tabLoadingStates[d], i[d] = e.tabErrors[d], c[d] = e.selectedRows[d];
      return {
        ...e,
        tabLoadingStates: l,
        tabErrors: i,
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
function nh(e, t) {
  const [n, a] = Be("cards");
  return Ve(() => {
    if (t) {
      a(t);
      return;
    }
    const s = () => {
      const o = window.innerWidth;
      o < e.mobile ? a("cards") : o < e.desktop ? a("hybrid") : a("table");
    };
    return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, [e, t]), n;
}
function rh(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function ah(e, t, n, a) {
  const s = a ? { ...a.defaultCardConfig, ...n } : { ...Wp, ...n };
  if (a && a.cardTemplates) {
    const o = rh(e);
    if (o && a.cardTemplates[o]) {
      const l = a.cardTemplates[o](e, t, s);
      if (l)
        return {
          variant: "default",
          children: l
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), Uo(e, t, s);
}
const Ry = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: s = !1,
  topActions: o,
  bottomActions: l,
  gridActions: i,
  forceGridActionsAbove: c,
  // Standard AriaTabsDataGrid props
  tabPanels: d,
  dataConfig: u,
  selectedIndex: f,
  onTabChange: h,
  ariaLabel: p = "Data grid",
  ariaDescription: y,
  orientation: g = "horizontal",
  id: m,
  disabled: I = !1,
  className: N,
  ...L
}) => {
  const D = nh(e, t), x = f !== void 0, S = f ?? 0, C = je(() => {
    if (d.some(
      (v) => v.data && v.data.length > 0 && Vo(v.data)
    )) {
      const v = Go(n);
      return {
        ...Wo.defaultCardConfig,
        ...v
      };
    } else
      return Go(n);
  }, [n, d]), _ = je(() => d.some(
    (v) => v.data && v.data.length > 0 && Vo(v.data)
  ) ? Wo : void 0, [d]), b = je(() => ({
    selectedIndex: S,
    tabLoadingStates: new Array(d.length).fill(!1),
    tabErrors: new Array(d.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(d.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [S, d.length]), [w, k] = _i(th, b), M = He([]), F = He([]), E = He([]), A = He(null), [$, B] = Be({
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
  }), se = xe((H) => {
    if (!H.current)
      return { columns: 1, rows: 0 };
    const v = H.current, T = v.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (T.length === 0)
      return { columns: 1, rows: 0 };
    const O = v.offsetWidth, P = T[0].offsetWidth, z = Math.floor(O / P) || 1, G = Math.ceil(T.length / z);
    return { columns: z, rows: G };
  }, []), V = xe((H, v) => ({
    row: Math.floor(H / v),
    col: H % v
  }), []), R = xe((H, v, T) => H * T + v, []), ee = xe((H, v, T, O) => {
    const { row: j, col: P } = V(H, O);
    let z = j, G = P;
    switch (v) {
      case "up":
        z = Math.max(0, j - 1);
        break;
      case "down":
        z = Math.min(Math.floor((T - 1) / O), j + 1);
        break;
      case "left":
        G = Math.max(0, P - 1);
        break;
      case "right":
        G = Math.min(O - 1, P + 1);
        break;
    }
    const Z = R(z, G, O);
    return Math.min(Z, T - 1);
  }, [V, R]);
  Ve(() => {
    $.isCardNavigationActive && $.focusedCardElementIndex >= 0 && $.cardElements.length > 0 && setTimeout(() => {
      const H = $.cardElements[$.focusedCardElementIndex];
      H && (H.element.focus(), H.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [$.isCardNavigationActive, $.focusedCardElementIndex, $.cardElements.length]), Ve(() => {
    const H = () => {
      if (D === "cards" && A.current) {
        const { columns: O, rows: j } = se(A);
        B((P) => ({
          ...P,
          gridColumns: O,
          gridRows: j
        }));
      }
    }, v = setTimeout(H, 200), T = () => {
      setTimeout(H, 100);
    };
    return window.addEventListener("resize", T), () => {
      clearTimeout(v), window.removeEventListener("resize", T);
    };
  }, [D, d, se]), Ve(() => {
    const H = w.tabLoadingStates.length, v = d.length;
    H !== v && k({ type: "ADJUST_ARRAYS", payload: { newLength: v } });
  }, [d.length, w.tabLoadingStates.length]), Ve(() => {
    x && f !== w.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: f });
  }, [x, f, w.selectedIndex]);
  const Y = xe((H) => {
    H >= 0 && H < d.length && !d[H].disabled && (k({ type: "SET_SELECTED_INDEX", payload: H }), h?.(H));
  }, [d, h]), K = xe((H) => {
    console.log("Card selected:", H), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: H
    });
  }, []), J = xe((H) => {
    const v = F.current[H];
    v && (v.focus(), v.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), X = xe((H) => {
    const v = F.current[H];
    if (!v) return [];
    const T = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), O = v.querySelectorAll(T);
    return Array.from(O).map((j, P) => ({
      id: j.id || `card-${H}-element-${P}`,
      element: j,
      label: j.getAttribute("aria-label") || j.textContent?.trim() || j.getAttribute("title") || `Element ${P + 1}`,
      type: j.tagName.toLowerCase() === "button" ? "button" : j.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(j.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), pe = He(null), ne = xe((H) => {
    const v = pe.current;
    if (!v) return;
    const T = document.createElement("div");
    T.setAttribute("aria-live", "polite"), T.setAttribute("aria-atomic", "true"), T.className = "sr-only", T.textContent = H, v.appendChild(T), setTimeout(() => {
      v.contains(T) && v.removeChild(T);
    }, 1e3);
  }, []), re = xe((H) => {
    const v = H.filter((O) => O.sortable !== !1), T = [
      { value: "", label: "Sort by..." }
    ];
    return v.forEach((O) => {
      const j = O.label || O.key;
      O.key === "name" ? T.push(
        { value: `${O.key}-asc`, label: `${j} (A-Z)` },
        { value: `${O.key}-desc`, label: `${j} (Z-A)` }
      ) : O.key === "ews_score" || O.key.includes("score") ? T.push(
        { value: `${O.key}-desc`, label: `${j} (High-Low)` },
        { value: `${O.key}-asc`, label: `${j} (Low-High)` }
      ) : O.key === "age" || O.key.includes("date") || O.key.includes("time") ? T.push(
        { value: `${O.key}-desc`, label: `${j} (Oldest-Youngest)` },
        { value: `${O.key}-asc`, label: `${j} (Youngest-Oldest)` }
      ) : T.push(
        { value: `${O.key}-asc`, label: `${j} (A-Z)` },
        { value: `${O.key}-desc`, label: `${j} (Z-A)` }
      );
    }), T;
  }, []), Q = xe((H, v) => v ? [...H].sort((T, O) => {
    const j = T[v.key], P = O[v.key];
    if (j == null && P == null) return 0;
    if (j == null) return 1;
    if (P == null) return -1;
    const z = Number(j), G = Number(P);
    if (!isNaN(z) && !isNaN(G))
      return v.direction === "asc" ? z - G : G - z;
    const Z = String(j).toLowerCase(), q = String(P).toLowerCase(), de = Z.localeCompare(q);
    return v.direction === "asc" ? de : -de;
  }) : H, []), te = xe((H) => {
    if (!H) {
      B((Z) => ({ ...Z, cardSortConfig: null })), ne("Card sorting cleared");
      return;
    }
    const [v, T] = H.split("-"), O = { key: v, direction: T };
    B((Z) => ({ ...Z, cardSortConfig: O }));
    const z = d[w.selectedIndex]?.columns.find((Z) => Z.key === v)?.label || v;
    ne(`Cards sorted by ${z} in ${T === "asc" ? "ascending" : "descending"} order`);
  }, [d, w.selectedIndex, ne]), ce = xe((H) => {
    const O = d[w.selectedIndex]?.columns.find((P) => P.key === H.key)?.label || H.key, j = H.direction === "asc" ? "ascending" : "descending";
    return `${O} (${j})`;
  }, [d, w.selectedIndex]), W = xe((H) => {
    const v = d[w.selectedIndex];
    if (s) {
      const T = w.sortConfig;
      return !T || T.length === 0 ? H : [...H].sort((O, j) => {
        for (const { key: P, direction: z } of T) {
          let G = O[P], Z = j[P];
          const q = v?.columns.find((Le) => Le.key === P);
          if (q?.cardRenderer ? (G = q.cardRenderer(O), Z = q.cardRenderer(j)) : q?.render && (G = q.render(O), Z = q.render(j)), G == null && Z == null) continue;
          if (G == null) return z === "asc" ? -1 : 1;
          if (Z == null) return z === "asc" ? 1 : -1;
          const de = Number(G), le = Number(Z);
          if (!isNaN(de) && !isNaN(le)) {
            const Le = de - le;
            if (Le !== 0) return z === "asc" ? Le : -Le;
            continue;
          }
          const ue = String(G).toLowerCase(), ye = String(Z).toLowerCase(), ge = ue.localeCompare(ye);
          if (ge !== 0) return z === "asc" ? ge : -ge;
        }
        return 0;
      });
    } else
      return Q(H, $.cardSortConfig);
  }, [s, w.sortConfig, $.cardSortConfig, Q, d, w.selectedIndex]), ie = xe((H, v) => {
    const T = X(H), O = T[v];
    if (O) {
      O.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const j = `Focused on ${O.label}, ${O.type} ${v + 1} of ${T.length} within card`;
      ne(j);
    }
  }, [X, ne]), ae = xe((H) => {
    M.current[H]?.focus();
  }, []), he = xe(() => {
    const H = E.current[0];
    if (!H) return [];
    const v = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), T = H.querySelectorAll(v);
    return Array.from(T);
  }, []), oe = xe((H) => {
    if (H === 0) {
      const v = E.current[0], T = v?.querySelector(".sort-controls-row");
      if (T) {
        T.setAttribute("tabindex", "-1"), T.focus();
        const j = `Sort controls group with ${he().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ne(j);
      } else v && v.focus();
    } else {
      const v = he(), T = H - 1, O = v[T];
      if (O) {
        O.focus();
        const j = O.tagName.toLowerCase() === "select", P = O.tagName.toLowerCase() === "button", z = j ? "dropdown" : P ? "button" : "control", G = j ? ". Use Space key to open dropdown" : "", Z = `${z} ${T + 1} of ${v.length}${G}`;
        ne(Z);
      }
    }
  }, [he, ne]), fe = xe((H, v) => {
    const { key: T } = H, O = d[w.selectedIndex], j = O?.data.length || 0;
    if (T === "ArrowLeft" && H.shiftKey) {
      H.preventDefault(), H.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (T === "ArrowRight" && H.shiftKey) {
      H.preventDefault(), H.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!$.isCardNavigationActive) {
      switch (T) {
        case "ArrowUp":
          if (H.preventDefault(), v === 0)
            B((Z) => ({ ...Z, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), oe(0);
          else {
            const Z = ee(v, "up", j, $.gridColumns);
            Z !== v && (B((q) => ({ ...q, focusedCardIndex: Z })), J(Z), ne(`Moved to card ${Z + 1} of ${j}`));
          }
          break;
        case "ArrowDown":
          H.preventDefault();
          const P = ee(v, "down", j, $.gridColumns);
          P !== v && (B((Z) => ({ ...Z, focusedCardIndex: P })), J(P), ne(`Moved to card ${P + 1} of ${j}`));
          break;
        case "ArrowLeft":
          H.preventDefault();
          const z = ee(v, "left", j, $.gridColumns);
          z !== v ? (B((Z) => ({ ...Z, focusedCardIndex: z })), J(z), ne(`Moved to card ${z + 1} of ${j}`)) : w.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: w.selectedIndex - 1 }), B((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => ae(w.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          H.preventDefault();
          const G = ee(v, "right", j, $.gridColumns);
          G !== v ? (B((Z) => ({ ...Z, focusedCardIndex: G })), J(G), ne(`Moved to card ${G + 1} of ${j}`)) : w.selectedIndex < d.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: w.selectedIndex + 1 }), B((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => ae(w.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (O?.data[v]) {
            H.preventDefault(), B((q) => ({
              ...q,
              selectedCardIndex: v
            }));
            const Z = X(v);
            Z.length > 0 ? (B((q) => ({
              ...q,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Z,
              selectedCardIndex: v
              // Ensure selection is maintained
            })), ne(`Card ${v + 1} selected and navigation activated. ${Z.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ne(`Card ${v + 1} selected.`);
          }
          break;
        case " ":
          if (O?.data[v]) {
            H.preventDefault(), B((q) => ({
              ...q,
              selectedCardIndex: q.selectedCardIndex === v ? -1 : v
            }));
            const Z = $.selectedCardIndex === v;
            ne(`Card ${v + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (T) {
      case "ArrowUp":
      case "ArrowLeft":
        H.preventDefault();
        const P = Math.max(0, $.focusedCardElementIndex - 1);
        B((q) => ({ ...q, focusedCardElementIndex: P })), ie(v, P);
        break;
      case "ArrowDown":
      case "ArrowRight":
        H.preventDefault();
        const z = Math.min($.cardElements.length - 1, $.focusedCardElementIndex + 1);
        B((q) => ({ ...q, focusedCardElementIndex: z })), ie(v, z);
        break;
      case "Enter":
        H.preventDefault();
        const G = $.cardElements[$.focusedCardElementIndex];
        G && (G.element.click(), ne(`Activated ${G.label}`));
        break;
      case " ":
        H.preventDefault();
        const Z = $.cardElements[$.focusedCardElementIndex];
        if (Z) {
          const q = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(q), ne(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        H.preventDefault(), B((q) => ({
          ...q,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => J(v), 0), ne("Exited card navigation, returned to card level");
        break;
      case "Home":
        H.preventDefault(), $.cardElements.length > 0 && (B((q) => ({ ...q, focusedCardElementIndex: 0 })), ie(v, 0));
        break;
      case "End":
        if (H.preventDefault(), $.cardElements.length > 0) {
          const q = $.cardElements.length - 1;
          B((de) => ({ ...de, focusedCardElementIndex: q })), ie(v, q);
        }
        break;
    }
  }, [$, w.selectedIndex, d, K, J, ae, B, X, ie, ne]), De = xe((H) => {
    const v = M.current[H], T = v?.parentElement;
    if (!v || !T) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const O = v.getBoundingClientRect(), j = T.getBoundingClientRect();
    O.left >= j.left && O.right <= j.right || (console.log("Tab not visible, scrolling into view (mobile)"), v.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Pe = xe((H, v) => {
    if (D !== "cards")
      return;
    const { key: T } = H;
    switch (T) {
      case "ArrowLeft":
        H.preventDefault();
        const O = v > 0 ? v - 1 : d.length - 1;
        Y(O), B((G) => ({ ...G, focusedTabIndex: O })), M.current[O]?.focus(), De(O);
        break;
      case "ArrowRight":
        H.preventDefault();
        const j = v < d.length - 1 ? v + 1 : 0;
        Y(j), B((G) => ({ ...G, focusedTabIndex: j })), M.current[j]?.focus(), De(j);
        break;
      case "ArrowDown":
        H.preventDefault();
        const P = d[w.selectedIndex];
        P && P.columns && P.columns.length > 0 ? (B((G) => ({
          ...G,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), oe(0)) : (B((G) => ({
          ...G,
          focusArea: "cards",
          focusedCardIndex: 0
        })), J(0));
        break;
      case "Home":
        H.preventDefault(), Y(0), B((G) => ({ ...G, focusedTabIndex: 0 })), M.current[0]?.focus(), De(0);
        break;
      case "End":
        H.preventDefault();
        const z = d.length - 1;
        Y(z), B((G) => ({ ...G, focusedTabIndex: z })), M.current[z]?.focus(), De(z);
        break;
      case "Enter":
      case " ":
        H.preventDefault(), Y(v);
        break;
    }
  }, [d.length, Y, D, J, B, De]), _e = xe((H, v) => {
    if (D !== "cards")
      return;
    const { key: T } = H, O = d[w.selectedIndex];
    if (v === 0 && !$.isSortControlsActive) {
      switch (T) {
        case "ArrowUp":
          H.preventDefault(), B((P) => ({
            ...P,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), ae(w.selectedIndex);
          break;
        case "ArrowDown":
          H.preventDefault(), O?.data && O.data.length > 0 && (B((P) => ({
            ...P,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), J(0));
          break;
        case "Enter":
        case " ":
          H.preventDefault();
          const j = he();
          if (j.length > 0) {
            B((z) => ({
              ...z,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), oe(1);
            const P = `Entered sort controls navigation mode. ${j.length} controls available. Use arrow keys to navigate between controls.`;
            ne(P);
          }
          break;
        case "Escape":
          H.preventDefault(), B((P) => ({
            ...P,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), ae(w.selectedIndex);
          break;
      }
      return;
    }
    if ($.isSortControlsActive) {
      const P = he().length;
      switch (T) {
        case "ArrowLeft":
          H.preventDefault();
          const z = $.focusedSortControlIndex > 1 ? $.focusedSortControlIndex - 1 : P;
          B((Z) => ({ ...Z, focusedSortControlIndex: z })), oe(z);
          break;
        case "ArrowRight":
          H.preventDefault();
          const G = $.focusedSortControlIndex < P ? $.focusedSortControlIndex + 1 : 1;
          B((Z) => ({ ...Z, focusedSortControlIndex: G })), oe(G);
          break;
        case "ArrowDown":
          if (H.preventDefault(), $.isSortControlsActive) {
            const Z = $.focusedSortControlIndex < P ? $.focusedSortControlIndex + 1 : 1;
            B((q) => ({ ...q, focusedSortControlIndex: Z })), oe(Z);
          } else
            O?.data && O.data.length > 0 && (B((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), J(0));
          break;
        case "ArrowUp":
          H.preventDefault(), B((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), oe(0);
          break;
        case "Escape":
          H.preventDefault(), B((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), oe(0);
          break;
      }
    }
  }, [D, d, w.selectedIndex, $.isSortControlsActive, $.focusedSortControlIndex, oe, ae, J, B, ne]);
  if (D === "cards") {
    const H = d[w.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${N || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": p,
            "aria-describedby": `${y || ""} ${m ? `${m}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: d.map((v, T) => {
              const O = T === w.selectedIndex, j = v.disabled || I;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${v.id}`,
                  "aria-controls": `panel-${v.id}`,
                  "aria-selected": O,
                  "aria-disabled": j,
                  tabIndex: O ? 0 : -1,
                  ref: (P) => {
                    M.current[T] = P;
                  },
                  onClick: () => Y(T),
                  onKeyDown: (P) => Pe(P, T),
                  disabled: j,
                  className: [
                    "aria-tabs-datagrid__tab",
                    O ? "aria-tabs-datagrid__tab--selected" : "",
                    j ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: v.label }),
                    w.tabLoadingStates[T] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    w.tabErrors[T] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                v.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      H && H.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          ol,
          {
            sortConfig: w.sortConfig || [],
            columns: H.columns.map((v) => ({ key: v.key, label: v.label })),
            onSortChange: (v) => {
              k({ type: "SET_SORT", payload: v });
            },
            ariaLabel: "Card view sort configuration",
            className: "aria-tabs-datagrid-adaptive__advanced-sort-controls"
          }
        )
      ) : (
        /* Simple card sorting */
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid-adaptive__sort-controls",
            role: "region",
            "aria-label": "Sort controls",
            tabIndex: $.focusArea === "sort-controls" ? 0 : -1,
            ref: (v) => {
              E.current[0] = v;
            },
            onKeyDown: (v) => _e(v, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${H.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  br,
                  {
                    id: `card-sort-${H.id}`,
                    name: `card-sort-${H.id}`,
                    value: $.cardSortConfig ? `${$.cardSortConfig.key}-${$.cardSortConfig.direction}` : "",
                    onChange: (v) => te(v.target.value),
                    className: "sort-select",
                    children: re(H.columns).map((v) => /* @__PURE__ */ r.jsx("option", { value: v.value, children: v.label }, v.value))
                  }
                )
              ] }),
              $.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ce($.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  ut,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => te(""),
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
          ref: A,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${H?.label || "Data"} cards in ${$.gridRows} rows and ${$.gridColumns} columns`,
          "aria-rowcount": $.gridRows,
          "aria-colcount": $.gridColumns,
          id: `panel-${H?.id}`,
          "aria-labelledby": `tab-${H?.id}`,
          children: W(H?.data || []).map((v, T) => {
            const O = $.selectedCardIndex === T, j = $.focusedCardIndex === T && $.focusArea === "cards", P = $.focusedCardIndex === T && $.focusArea === "card" && $.isCardNavigationActive, z = T === 0 && $.focusArea !== "cards", G = j || z, Z = V(T, $.gridColumns);
            if (n.cardTemplate) {
              const le = n.cardTemplate(v, H.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": Z.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (ue) => {
                        F.current[T] = ue;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        O ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        j ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        P ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": Z.col + 1,
                      "aria-selected": O,
                      "aria-expanded": P,
                      "aria-description": P ? `Card navigation active. ${$.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: G ? 0 : -1,
                      onClick: () => {
                        B((ue) => ({
                          ...ue,
                          selectedCardIndex: ue.selectedCardIndex === T ? -1 : T
                        })), K(v);
                      },
                      onKeyDown: (ue) => fe(ue, T),
                      onFocus: () => {
                        B((ue) => ue.isCardNavigationActive ? ue : ue.focusedCardIndex !== T || ue.focusArea !== "cards" ? {
                          ...ue,
                          focusedCardIndex: T,
                          focusArea: "cards"
                        } : ue);
                      },
                      children: le
                    }
                  )
                },
                `card-${T}`
              );
            }
            const q = ah(v, H.columns, C, _), de = [
              q.className || "",
              O ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              j ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              P ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": Z.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      O ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      j ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      P ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": Z.col + 1,
                    "aria-selected": O,
                    "aria-expanded": P,
                    onKeyDown: (le) => {
                      le.key === "Enter" && (le.preventDefault(), B((ue) => ({
                        ...ue,
                        selectedCardIndex: T
                      }))), fe(le, T);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      rl,
                      {
                        ...q,
                        ref: (le) => {
                          F.current[T] = le;
                        },
                        className: de,
                        "aria-label": `${q["aria-label"] || q.heading}. ${P ? `Card navigation active with ${$.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: G ? 0 : -1,
                        onClick: () => {
                          B((le) => ({
                            ...le,
                            selectedCardIndex: le.selectedCardIndex === T ? -1 : T
                          })), K(v);
                        },
                        onKeyDown: (le) => fe(le, T),
                        onFocus: () => {
                          $.isCardNavigationActive || B((le) => le.focusedCardIndex !== T || le.focusArea !== "cards" ? {
                            ...le,
                            focusedCardIndex: T,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : le);
                        }
                      }
                    )
                  }
                )
              },
              `card-${T}`
            );
          })
        }
      ),
      l && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: l }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: pe,
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
  return D === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${N || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      Qa,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: y,
        orientation: g,
        id: m,
        disabled: I,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: i,
        forceActionsAbove: c,
        ...L
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: l })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${N || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      Qa,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: y,
        orientation: g,
        id: m,
        disabled: I,
        selectedIndex: f,
        onTabChange: h,
        actions: i,
        forceActionsAbove: c,
        ...L
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: l })
  ] });
}, pl = (e) => {
  const t = Ka.find((n) => n.value === e);
  return t ? t.icon : null;
}, sh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = n.discountedPrice || n.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => pl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, oh = (e) => Vs(e, [
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
]), ih = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.dateRange) {
      const [a, s] = t.dateRange;
      if (n.date < a || n.date > s) return !1;
    }
    if (t.amountRange) {
      const [a, s] = t.amountRange;
      if (Math.abs(n.amount) < a || Math.abs(n.amount) > s) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(n.type) || t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.pending !== void 0 && n.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => pl(e),
  getDataId: (e) => `financial-${e.id}`
}, lh = (e) => Vs(e, [
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
]), ch = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: sh,
    createTabs: oh
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: ih,
    createTabs: lh
  }
}, Yo = (e, t) => {
  const n = ch[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, hl = [
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
], dh = [
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
], uh = [
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
], fh = [
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
], Zo = [
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
], Jo = [
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
], qo = [
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
], ph = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, hh = () => [
  {
    id: "patients",
    label: "Patients",
    data: hl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      il,
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
    data: dh,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ll,
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
    data: uh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      cl,
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
    data: fh,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      dl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], mh = () => {
  const [e, t] = Be("healthcare"), n = je(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Op,
      tabPanels: hh(),
      data: hl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Yo("ecommerce", Zo),
      data: Zo
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Yo("financial", Jo),
      data: Jo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: ph,
      tabPanels: Vs(qo, [
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
      data: qo
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
      }, children: Object.keys(n).map((s) => /* @__PURE__ */ r.jsx(
        ut,
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
      Qa,
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
}, By = mh, ml = (e) => /* @__PURE__ */ r.jsx(Di, { ...e }), Hy = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = fn.TwoThirds,
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: l,
  footerProps: i,
  service: c,
  navigation: d,
  search: u,
  account: f,
  organisation: h,
  logo: p,
  className: y,
  ...g
}) => {
  const m = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: h,
    logo: p,
    ...l
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(nl, { ...o }),
    /* @__PURE__ */ r.jsx(Pi, { ...m }),
    /* @__PURE__ */ r.jsx(ml, { className: y, ...g, children: /* @__PURE__ */ r.jsx(Ti, { size: s, children: /* @__PURE__ */ r.jsx(Kt, { children: /* @__PURE__ */ r.jsxs(Wn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Wt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Fi, { ...i })
  ] });
}, zy = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = fn.TwoThirds,
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: l,
  footerProps: i,
  backLinkProps: c,
  serviceName: d,
  serviceHref: u,
  logo: f,
  className: h,
  ...p
}) => {
  const y = {
    service: {
      text: d,
      href: u
    },
    logo: f,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...l
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(nl, { ...o }),
    /* @__PURE__ */ r.jsx(Pi, { ...y }),
    /* @__PURE__ */ r.jsxs(ml, { className: h, ...p, children: [
      c && /* @__PURE__ */ r.jsx(Ls, { ...c }),
      /* @__PURE__ */ r.jsx(Ti, { size: s, children: /* @__PURE__ */ r.jsx(Kt, { children: /* @__PURE__ */ r.jsxs(Wn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Wt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Fi, { ...i })
  ] });
};
function gh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = U.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [l, i] = U.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return U.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    s ? c.set(n, String(s)) : c.delete(n), c.set(a, l ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [s, l, t, n, a]), { selectedId: s, setSelectedId: o, drilledIn: l, setDrilledIn: i };
}
const xh = ({
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
), bh = ({
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
), gl = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...l
}) => {
  const i = be("nhsuk-back-link", a), c = be("nhsuk-back-link__link"), d = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: i, children: s === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: o, ...l, children: d() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...l, children: d() }) });
};
gl.displayName = "ForwardLink";
const yh = ({
  show: e,
  label: t,
  contentHeaderLevel: n,
  detailActive: a,
  headerContext: s,
  backLabel: o,
  nextLabel: l,
  onBack: i,
  onForward: c,
  renderContentHeader: d,
  item: u,
  contentSubheader: f,
  tertiaryInlineActive: h
}) => {
  if (!e || !u) return null;
  const p = `h${n}`, y = t ? U.createElement(
    p,
    {
      style: {
        marginLeft: a ? 32 : 0,
        marginRight: a ? 32 : 0
      }
    },
    t
  ) : null, g = a ? /* @__PURE__ */ r.jsx(
    Ls,
    {
      element: "button",
      text: o,
      style: { marginRight: 16 },
      onClick: i
    }
  ) : void 0, m = h ? void 0 : /* @__PURE__ */ r.jsx(gl, { element: "button", text: l, onClick: c });
  if (d)
    return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: d({
      item: u,
      detailActive: a,
      context: s,
      backLink: g,
      defaultHeading: y
    }) });
  const I = u && f ? typeof f == "function" ? f(u) : f : null;
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
          g,
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
                y,
                I && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: I })
              ]
            }
          )
        ]
      }
    ),
    m && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: m })
  ] }) });
};
function vh({
  layout: e,
  items: t,
  getId: n,
  selectedId: a,
  isLoading: s,
  emptyState: o,
  renderItemContent: l,
  onSelect: i,
  orientation: c,
  initialFocus: d,
  onFocusChange: u,
  justSelectedId: f,
  listRef: h,
  onKeyDownList: p,
  navigationInstructions: y,
  controlledFocusedIndex: g
}) {
  const [m, I] = U.useState(
    () => d === "first" ? 0 : -1
  ), N = U.useRef(0);
  U.useEffect(() => {
    if (typeof g == "number" || m < 0 || !h?.current) return;
    const C = Array.from(
      h.current.querySelectorAll("[data-nav-item]")
    )[m];
    if (C) {
      document.activeElement !== C && C.focus(), N.current = m;
      const _ = t[m];
      u?.(_ ? n(_) : void 0, _, m);
    }
  }, [g, m, t, u, n, h]);
  const L = (S) => {
    if (p) return p(S);
    const C = c === "vertical" ? "ArrowDown" : "ArrowRight", _ = c === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (S.key === C)
      S.preventDefault(), I((b) => Math.min(t.length - 1, b + 1));
    else if (S.key === _)
      S.preventDefault(), I((b) => Math.max(0, b - 1));
    else if (S.key === "Home")
      S.preventDefault(), I(0);
    else if (S.key === "End")
      S.preventDefault(), I(t.length - 1);
    else if (S.key === "Enter" || S.key === " ") {
      S.preventDefault();
      const b = t[m];
      b && !b.disabled && i(n(b), b, m);
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
          t.map((S, C) => {
            const _ = n(S), b = _ === a;
            return /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": b,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    id: String(_),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": b || void 0,
                    "data-disabled": S.disabled || void 0,
                    disabled: S.disabled,
                    onClick: () => !S.disabled && i(_, S, C),
                    children: [
                      S.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: S.icon }),
                      /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: S.label }),
                      S.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: S.description }),
                      l?.(S),
                      S.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: S.badge })
                    ]
                  }
                )
              },
              String(_)
            );
          }),
          t.length === 0 && !s && /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__card-item",
              "aria-disabled": "true",
              children: o || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    );
  const D = "nsv-nav-instructions", x = U.useMemo(() => U.memo(
    ({
      item: S,
      idx: C,
      selected: _,
      focused: b
    }) => {
      const w = n(S), k = S.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: b ? 0 : -1,
        onClick: () => {
          N.current = C, i(w, S, C);
        },
        onKeyDown: (M) => {
          (M.key === "Enter" || M.key === " ") && (M.preventDefault(), N.current = C, i(w, S, C));
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
          "data-disabled": S.disabled || void 0,
          ...k,
          children: [
            S.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: S.icon }),
            /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: S.label }),
              S.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: S.description }),
              l?.(S)
            ] }),
            S.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: S.badge })
          ]
        }
      );
    }
  ), [n, i, l]);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "ul",
      {
        ref: h,
        className: "nhs-navigation-split-view__list",
        onKeyDown: L,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": D,
        "aria-activedescendant": a ? String(a) : void 0,
        children: [
          t.map((S, C) => /* @__PURE__ */ r.jsx(
            x,
            {
              item: S,
              idx: C,
              selected: n(S) === a,
              focused: /* @__PURE__ */ (() => {
                const _ = typeof g == "number" ? g : m;
                return C === _ || _ === -1 && C === 0 && d === "first";
              })(),
              "data-just-selected": n(S) === f ? "true" : void 0
            },
            String(n(S))
          )),
          t.length === 0 && !s && /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__list-item",
              "aria-disabled": "true",
              children: o || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: D,
        style: {
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)"
        },
        children: y || "Use arrow keys to navigate, Enter to open."
      }
    )
  ] });
}
const yn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Xo() {
  return typeof window > "u" ? yn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ys() {
  const [e, t] = U.useState(Xo());
  U.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(Xo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const n = U.useCallback((o) => e >= yn[o], [e]), a = U.useCallback((o) => e < yn[o], [e]), s = U.useCallback((o, l) => e >= yn[o] && e < yn[l], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: s,
    /** Raw numeric values */
    values: yn
  };
}
function Oy(e) {
  const { width: t, values: n } = Ys();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const l = n[o];
    t >= l && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function wh(e, t, n) {
  const { up: a } = Ys(), [s, o] = U.useState(!1);
  U.useEffect(() => o(!0), []);
  const l = s && a("medium"), i = s && a("xlarge");
  let c;
  return e ? c = e : l ? c = "two-column" : c = "list", !e && t && n && i && (c = "three-column"), { effectiveLayout: c, hydrated: s, isAtLeastMedium: l, isAtLeastXlarge: i };
}
function Sh(e) {
  const {
    enabled: t,
    isAtLeastMedium: n,
    initiallyCollapsed: a,
    persist: s,
    storageKey: o,
    urlParam: l,
    onChange: i
  } = e, c = U.useMemo(() => {
    if (s && (s === "url" || s === "both") && typeof window < "u") {
      const p = new URLSearchParams(window.location.search).get(l);
      if (p === "1") return !0;
      if (p === "0") return !1;
    }
    if (s && (s === "localStorage" || s === "both") && typeof window < "u")
      try {
        const h = window.localStorage.getItem(o);
        if (h === "1") return !0;
        if (h === "0") return !1;
      } catch {
      }
    return a;
  }, [s, a, o, l]), [d, u] = U.useState(c);
  U.useEffect(() => {
    i?.(d);
  }, [d, i]);
  const f = U.useCallback(() => {
    t && n && u((h) => !h);
  }, [t, n]);
  return U.useEffect(() => {
    if (!(!s || typeof window > "u")) {
      if (s === "localStorage" || s === "both")
        try {
          window.localStorage.setItem(o, d ? "1" : "0");
        } catch {
        }
      if (s === "url" || s === "both") {
        const h = new URLSearchParams(window.location.search);
        h.set(l, d ? "1" : "0");
        const p = `${window.location.pathname}?${h.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", p);
      }
    }
  }, [d, s, o, l]), { collapsed: d, toggle: f };
}
function _h(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: s,
    renderItemContent: o,
    renderContent: l,
    renderSecondaryContent: i,
    forceLayout: c,
    animated: d = !0,
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: p,
    a11y: y,
    className: g,
    getId: m = (me) => me.id,
    orientation: I = "vertical",
    autoEnableThirdColumn: N = !0,
    onDrillChange: L,
    navigationInstructions: D = "Use arrow keys to navigate, Enter to open.",
    initialFocus: x = "first",
    skipFocusOnSelect: S = !1,
    skipAnnouncements: C = !1,
    onFocusChange: _,
    syncUrl: b = !1,
    urlParamSelected: w = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: M = 0,
    lazySecondary: F = !1,
    navFooter: E,
    collapsibleNav: A = !1,
    navInitiallyCollapsed: $ = !1,
    onNavCollapseChange: B,
    collapseToggleLabelShow: se = "Show navigation",
    collapseToggleLabelHide: V = "Hide navigation",
    collapseToggleIconShow: R,
    collapseToggleIconHide: ee,
    persistNavCollapsed: Y,
    navCollapsedStorageKey: K = "nsvCollapsed",
    navCollapsedUrlParam: J = "nsvCollapsed",
    autoContentHeader: X,
    contentHeaderLevel: pe = 2,
    renderContentHeader: ne,
    contentSubheader: re,
    secondarySubheader: Q
  } = e, { effectiveLayout: te, hydrated: ce, isAtLeastMedium: W } = wh(
    c,
    N,
    !!i
  ), ie = gh({
    enabled: b,
    paramSelected: w,
    paramDrill: k
  }), [ae, he] = U.useState(
    () => ie.selectedId !== void 0 ? ie.selectedId : a
  ), oe = n !== void 0 ? n : ae, fe = t.find((me) => m(me) === oe), [De, Pe] = U.useState(
    void 0
  );
  U.useEffect(() => {
    if (oe === void 0) return;
    Pe(oe);
    const me = setTimeout(() => Pe(void 0), 220);
    return () => clearTimeout(me);
  }, [oe]);
  const _e = U.useRef(null), H = U.useRef(null), v = U.useRef(null), T = U.useRef(null), [O, j] = U.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [P, z] = U.useState(() => "nav"), [G, Z] = U.useState(0), q = () => [
    T.current,
    H.current,
    v.current
  ].filter(Boolean), de = (me) => {
    const ke = q(), $e = Math.max(0, Math.min(me, ke.length - 1));
    ue(ke[$e]), Z($e);
  }, le = U.useCallback(
    (me) => me ? Array.from(me.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      ($e) => !$e.hasAttribute("disabled") && $e.tabIndex !== -1
    ) : [],
    []
  ), ue = U.useCallback((me) => {
    if (me)
      try {
        me.focus({ preventScroll: !0 });
      } catch {
        me.focus();
      }
  }, []), ye = U.useCallback(
    (me) => {
      const ke = le(H.current);
      if (!ke.length) {
        ue(H.current);
        return;
      }
      const $e = Math.max(0, Math.min(me, ke.length - 1)), Oe = ke[$e];
      Oe.focus(), setTimeout(() => {
        document.activeElement !== Oe && (Oe.focus(), setTimeout(() => {
          document.activeElement !== Oe && Oe.click();
        }, 10));
      }, 10), j((Ke) => ({ ...Ke, contentIndex: $e }));
      const pt = (Ke) => {
        Ke.key === "Escape" && (Ke.preventDefault(), Ke.stopPropagation(), ue(H.current), Oe.removeEventListener("keydown", pt));
      };
      ke.forEach((Ke) => {
        const tt = Ke._escapeHandler;
        tt && Ke.removeEventListener("keydown", tt);
      }), Oe._escapeHandler = pt, Oe.addEventListener("keydown", pt);
    },
    [le]
  ), ge = U.useCallback(
    (me) => {
      const ke = le(v.current);
      if (!ke.length) {
        ue(v.current);
        return;
      }
      const $e = Math.max(0, Math.min(me, ke.length - 1)), Oe = ke[$e];
      Oe.focus(), setTimeout(() => {
        document.activeElement !== Oe && (Oe.focus(), setTimeout(() => {
          document.activeElement !== Oe && Oe.click();
        }, 10));
      }, 10), j((Ke) => ({ ...Ke, secondaryIndex: $e }));
      const pt = (Ke) => {
        Ke.key === "Escape" && (Ke.preventDefault(), Ke.stopPropagation(), ue(v.current), Oe.removeEventListener("keydown", pt));
      };
      ke.forEach((Ke) => {
        const tt = Ke._escapeHandler;
        tt && Ke.removeEventListener("keydown", tt);
      }), Oe._escapeHandler = pt, Oe.addEventListener("keydown", pt);
    },
    [le]
  ), Le = (me) => {
    if (me.defaultPrevented) return;
    const ke = me.key, $e = me.target, Oe = !!ve.current && ve.current.contains($e), pt = !!H.current && H.current.contains($e), Ke = !!v.current && v.current.contains($e), tt = !!v.current, or = $e === T.current || $e === H.current || $e === v.current, _a = Me && (te === "list" || te === "cards"), ir = pt && !!$e.closest(".nhs-navigation-split-view__header");
    if (P === "containers" && or) {
      if (ke === "ArrowRight") {
        me.preventDefault();
        const Re = q(), et = Math.min(Re.length - 1, G + 1);
        de(et);
        return;
      }
      if (ke === "ArrowLeft") {
        me.preventDefault();
        const Re = Math.max(0, G - 1);
        de(Re);
        return;
      }
      if (ke === "Home") {
        me.preventDefault(), de(0);
        return;
      }
      if (ke === "End") {
        me.preventDefault(), de(q().length - 1);
        return;
      }
      if (ke === "Enter" || ke === " ") {
        if (me.preventDefault(), $e === T.current) {
          if (z("nav"), ve.current) {
            const Re = Array.from(
              ve.current.querySelectorAll("[data-nav-item]")
            );
            (Re[ze >= 0 ? ze : 0] || Re[0])?.focus();
          }
        } else $e === H.current ? (z("content"), ye(O.contentIndex)) : $e === v.current && (z("secondary"), ge(O.secondaryIndex));
        return;
      }
      return;
    }
    if (ke === "Escape") {
      if (P === "content" || P === "secondary") {
        if (pt || Ke) {
          if (me.preventDefault(), z("nav"), ve.current) {
            const et = Array.from(
              ve.current.querySelectorAll("[data-nav-item]")
            )[ze >= 0 ? ze : 0];
            setTimeout(() => et?.focus(), 10);
          }
        } else if (($e === H.current || $e === v.current) && (me.preventDefault(), z("nav"), ve.current)) {
          const et = Array.from(
            ve.current.querySelectorAll("[data-nav-item]")
          )[ze >= 0 ? ze : 0];
          setTimeout(() => et?.focus(), 10);
        }
      }
      return;
    }
    if (ke === "Enter" || ke === " ") {
      if ($e.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if ($e === H.current && P === "content") {
        me.preventDefault(), me.stopPropagation(), le(H.current).length > 0 && setTimeout(() => {
          ye(O.contentIndex);
        }, 50);
        return;
      }
      if ($e === v.current && P === "secondary") {
        me.preventDefault(), me.stopPropagation(), le(
          v.current
        ).length > 0 && setTimeout(() => {
          ge(O.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (_a && ir && !or && (ke === "ArrowRight" || ke === "ArrowLeft")) {
      const Re = le(H.current).filter(
        (et) => et.closest(".nhs-navigation-split-view__header")
      );
      if (Re.length > 1) {
        const et = Re.indexOf($e);
        if (et >= 0) {
          const ro = (et + (ke === "ArrowRight" ? 1 : -1) + Re.length) % Re.length;
          me.preventDefault(), Re[ro].focus();
          return;
        }
      }
    }
    if (ke === "ArrowRight") {
      if (Oe || P === "nav") {
        me.preventDefault(), z("content"), setTimeout(() => ue(H.current), 10);
        return;
      }
      if (pt || P === "content") {
        tt && (me.preventDefault(), z("secondary"), setTimeout(() => ue(v.current), 10));
        return;
      }
    }
    if (ke === "ArrowLeft") {
      if (Ke || P === "secondary") {
        me.preventDefault(), z("content"), setTimeout(() => ue(H.current), 10);
        return;
      }
      if (pt || P === "content") {
        if (me.preventDefault(), z("nav"), ve.current) {
          const et = Array.from(
            ve.current.querySelectorAll("[data-nav-item]")
          )[ze >= 0 ? ze : 0];
          setTimeout(() => ue(et), 10);
        }
        return;
      }
    }
    if (ke === "Home" && !Oe && (me.preventDefault(), z("nav"), ve.current)) {
      const Re = Array.from(
        ve.current.querySelectorAll("[data-nav-item]")
      ), et = Re[ze >= 0 ? ze : 0] || Re[0];
      setTimeout(() => ue(et), 10);
    }
    if (ke === "End") {
      const Re = tt ? v.current : H.current;
      Re && !Re.contains($e) && (me.preventDefault(), tt ? (z("secondary"), setTimeout(() => ue(v.current), 10)) : (z("content"), setTimeout(() => ue(H.current), 10)));
    }
    if (ke === "ArrowDown" || ke === "ArrowUp") {
      if ($e === H.current && ke === "ArrowDown") {
        me.preventDefault(), le(H.current).length > 0 && ye(0);
        return;
      }
      if ($e === v.current && ke === "ArrowDown") {
        me.preventDefault(), le(
          v.current
        ).length > 0 && ge(0);
        return;
      }
      if (pt) {
        const Re = le(H.current);
        if (Re.length) {
          me.preventDefault();
          const et = ke === "ArrowDown" ? 1 : -1, Ct = (O.contentIndex + et + Re.length) % Re.length;
          ye(Ct);
        }
      } else if (Ke) {
        const Re = le(v.current);
        if (Re.length) {
          me.preventDefault();
          const et = ke === "ArrowDown" ? 1 : -1, Ct = (O.secondaryIndex + et + Re.length) % Re.length;
          ge(Ct);
        }
      }
    }
  }, Me = !!fe && (te === "list" || te === "cards"), We = U.useMemo(() => X === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : X === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : X === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: X.mobile !== void 0 ? X.mobile : !0,
    tablet: X.tablet || !1,
    desktop: X.desktop || !1
  }, [X]), Qe = ce && W && te !== "three-column", at = ce && te === "three-column", qe = !!i, Ye = te === "three-column", [Ge, mt] = U.useState(!1);
  U.useEffect(() => {
    Ye && Ge && mt(!1);
  }, [Ye, Ge]), U.useEffect(() => {
    Ge && !Ye && (z("secondary"), Z(2), setTimeout(() => {
      ue(v.current);
    }, 50));
  }, [Ge, Ye]), U.useEffect(() => {
    !Ge && !Ye && P === "secondary" && (z("content"), Z(1), setTimeout(() => {
      ue(H.current);
    }, 50));
  }, [Ge, Ye, P]);
  const Jt = !!fe && (Me && We.mobile || !Me && Qe && We.tablet || !Me && at && We.desktop) || qe && !Ye, An = Me ? "mobile" : Qe ? "tablet" : "desktop";
  U.useEffect(() => {
    if (!b) return;
    const me = te === "three-column";
    let ke = !1;
    const $e = () => {
      ke || (ie.selectedId !== oe && ie.setSelectedId(oe), ie.drilledIn !== me && ie.setDrilledIn(me));
    };
    if (M && M > 0) {
      const Oe = setTimeout($e, M);
      return () => {
        ke = !0, clearTimeout(Oe);
      };
    } else
      $e();
  }, [b, ie, oe, te, M]), U.useEffect(() => {
    if (!b) return;
    const me = () => {
      const ke = new URLSearchParams(window.location.search), $e = ke.get(w);
      ke.get(k), he($e === null ? void 0 : $e);
    };
    return window.addEventListener("popstate", me), () => window.removeEventListener("popstate", me);
  }, [
    b,
    w,
    k,
    c,
    i
  ]);
  const rn = U.useRef(0), Ce = U.useRef(
    null
  ), Fe = U.useCallback(
    (me, ke) => {
      me !== oe && (n === void 0 && he(me), s?.(me, ke));
    },
    [n, s, oe]
  );
  U.useEffect(() => {
    if (!S && Me && H.current) {
      const me = setTimeout(() => ue(H.current), 30);
      return () => clearTimeout(me);
    }
  }, [Me, oe, S]);
  const ve = U.useRef(null), [ze, st] = U.useState(
    () => x === "first" ? 0 : -1
  );
  U.useEffect(() => {
    if (ze < 0 || !ve.current) return;
    const ke = Array.from(
      ve.current.querySelectorAll("[data-nav-item]")
    )[ze];
    if (ke) {
      document.activeElement !== ke && ue(ke), rn.current = ze;
      const $e = t[ze];
      _?.(
        $e ? m($e) : void 0,
        $e,
        ze
      );
    }
  }, [ze, t, _, m]);
  const Dt = (me) => {
    const ke = I === "vertical" ? "ArrowDown" : "ArrowRight", $e = I === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (me.key === "ArrowRight" && I === "vertical") {
      me.preventDefault(), Ge ? (z("secondary"), setTimeout(() => {
        ue(v.current);
      }, 10)) : (z("content"), setTimeout(() => {
        ue(H.current);
      }, 10));
      return;
    }
    if (me.key === ke)
      me.preventDefault(), st((Oe) => Math.min(t.length - 1, Oe + 1));
    else if (me.key === $e)
      me.preventDefault(), st((Oe) => Math.max(0, Oe - 1));
    else if (me.key === "Home")
      me.preventDefault(), st(0);
    else if (me.key === "End")
      me.preventDefault(), st(t.length - 1);
    else if (me.key === "Enter" || me.key === " ") {
      me.preventDefault();
      const Oe = t[ze];
      Oe && !Oe.disabled && Fe(m(Oe), Oe);
    } else if (me.key.length === 1 && /[a-z0-9]/i.test(me.key)) {
      Ce.current || (Ce.current = { buffer: "", last: 0 });
      const Oe = Date.now(), pt = 700, Ke = me.key.toLowerCase();
      Oe - Ce.current.last > pt ? Ce.current.buffer = Ke : Ce.current.buffer += Ke, Ce.current.last = Oe;
      let tt = Ce.current.buffer;
      const or = tt.split("").every((Ct) => Ct === tt[0]), _a = t.map(
        (Ct) => String(Ct.label || "").toLowerCase()
      );
      let ir = 0;
      ze >= 0 && (ir = (ze + 1) % t.length);
      let Re;
      const et = (Ct, ro) => {
        const ao = t.length;
        for (let ka = 0; ka < ao; ka++) {
          const Ca = (ir + ka) % ao;
          if (!t[Ca].disabled && _a[Ca].startsWith(Ct))
            return Ca;
        }
      };
      or && tt.length > 1 ? Re = et(tt[0]) : (Re = et(tt), Re === void 0 && tt.length > 1 && (Re = et(tt[tt.length - 1]), Re !== void 0 && Ce.current && (Ce.current.buffer = tt[tt.length - 1]))), Re !== void 0 && st(Re);
    }
  }, { collapsed: Ee, toggle: kt } = Sh({
    enabled: A,
    isAtLeastMedium: W,
    initiallyCollapsed: $,
    persist: Y,
    storageKey: K,
    urlParam: J,
    onChange: B
  }), En = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    Me ? "nhs-navigation-split-view--detail-active" : "",
    te === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    A && W && Ee ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), wa = U.useRef(null);
  U.useEffect(() => {
    if (!C && wa.current) {
      const me = fe ? `Selected ${fe.label}` : "Selection cleared";
      wa.current.textContent = me;
    }
  }, [fe, C]), U.useEffect(() => {
    if (!Me && oe == null && ve.current) {
      const ke = ve.current.querySelectorAll("[data-nav-item]")[rn.current];
      ue(ke);
    }
  }, [Me, oe]);
  const qt = te === "three-column", [Sa, Gc] = U.useState(!1);
  U.useEffect(() => {
    qt && !Sa && Gc(!0);
  }, [qt, Sa]);
  const no = U.useRef(qt);
  return U.useEffect(() => {
    no.current !== qt && (L?.(qt), no.current = qt);
  }, [qt, L]), /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: _e,
      className: En,
      "aria-label": y?.rootLabel,
      "data-layout": te,
      onKeyDown: Le,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Me || void 0,
            style: { transform: Me ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: T,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": y?.navigationLabel || "Items",
                  "data-collapsed": Ee || void 0,
                  tabIndex: 0,
                  children: [
                    A && W && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: kt,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Ee ? se : V,
                        title: Ee ? se : V,
                        children: Ee ? R || /* @__PURE__ */ r.jsx(bh, {}) : ee || /* @__PURE__ */ r.jsx(xh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ r.jsx(
                      vh,
                      {
                        layout: te === "cards" ? "cards" : "list",
                        items: t,
                        getId: m,
                        selectedId: oe,
                        isLoading: h,
                        emptyState: p,
                        renderItemContent: o,
                        onSelect: (me, ke, $e) => {
                          rn.current = $e, Fe(me, ke);
                        },
                        orientation: I,
                        initialFocus: x,
                        onFocusChange: _,
                        justSelectedId: De,
                        listRef: ve,
                        onKeyDownList: Dt,
                        navigationInstructions: D,
                        controlledFocusedIndex: ze
                      }
                    ) }),
                    E && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: E
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: H,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": y?.contentLabel || "Content",
                  "data-has-selection": !!fe || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ge && !Ye ? "none" : void 0
                  },
                  children: [
                    Jt && /* @__PURE__ */ r.jsx(
                      yh,
                      {
                        show: Jt,
                        label: fe ? fe.label : void 0,
                        contentHeaderLevel: pe,
                        detailActive: Me,
                        headerContext: An,
                        backLabel: u,
                        nextLabel: f,
                        onBack: () => Fe(void 0, void 0),
                        onForward: () => mt(!0),
                        renderContentHeader: ne,
                        item: fe,
                        contentSubheader: re,
                        tertiaryInlineActive: Ge
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: l(fe)
                      }
                    )
                  ]
                }
              ),
              te === "three-column" && (!F || Sa) || Ge && !Ye ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: v,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": y?.secondaryContentLabel || "Secondary",
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
                        Ge && !Ye && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                    Ls,
                                    {
                                      element: "button",
                                      text: u,
                                      style: { marginRight: 16 },
                                      onClick: () => mt(!1)
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
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: fe && typeof fe == "object" && "label" in fe ? fe.label : String(fe) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        fe && Q && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof Q == "function" ? Q(fe) : Q
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: i?.(fe) })
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
            ref: wa,
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
            children: qt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
_h.displayName = "NavigationSplitView";
function kh({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderLabel: a,
  ariaLabel: s = "Breadcrumbs",
  className: o
}) {
  return /* @__PURE__ */ r.jsx("nav", { "aria-label": s, className: o, children: /* @__PURE__ */ r.jsx("ol", { className: "nhsfdp-breadcrumbs", role: "list", children: e.map((l, i) => {
    const c = i === t, d = a ? a(l, i) : l.label ?? `Step ${i + 1}`;
    return /* @__PURE__ */ r.jsx("li", { className: c ? "is-current" : void 0, children: c ? /* @__PURE__ */ r.jsx("span", { "aria-current": "page", children: d }) : /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: "nhsfdp-breadcrumb",
        onClick: () => n?.(i),
        children: d
      }
    ) }, i);
  }) }) });
}
function Ch({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderCard: a,
  className: s,
  ariaLabel: o = "Steps"
}) {
  const l = U.useRef(null);
  return U.useEffect(() => {
    const i = l.current;
    if (!i) return;
    i.children[t]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }, [t]), /* @__PURE__ */ r.jsx("div", { className: s, "aria-label": o, role: "region", children: /* @__PURE__ */ r.jsx("div", { ref: l, className: "nhsfdp-cards-scroller", tabIndex: 0, children: e.map((i, c) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsfdp-card" + (c === t ? " is-current" : ""),
      role: "group",
      "aria-roledescription": "step",
      "aria-label": (i.label ?? `Step ${c + 1}`).toString(),
      onClick: () => n?.(c),
      children: a(i, c, c === t)
    },
    c
  )) }) });
}
function Nh(e) {
  const { up: t } = Ys(), [n, a] = U.useState(!1);
  U.useEffect(() => a(!0), []);
  const s = n && t("medium") && !t("xlarge"), o = n && t("xlarge"), l = o ? "desktop" : s ? "tablet" : "mobile", i = U.useMemo(() => {
    if (!e.step || !e.layoutForStep)
      return l === "mobile" ? { panes: 1, showPrimaryNav: !1, showSecondaryNav: !1 } : l === "tablet" ? { panes: 2, showPrimaryNav: !0, showSecondaryNav: !1 } : { panes: 3, showPrimaryNav: !0, showSecondaryNav: !0 };
    try {
      return e.layoutForStep({
        step: e.step,
        index: e.index,
        breakpoint: l
      }) || {};
    } catch {
      return {};
    }
  }, [e.step, e.index, e.layoutForStep, l]);
  return { hydrated: n, breakpoint: l, isTablet: s, isDesktop: o, paneConfig: i };
}
function Uy(e) {
  const {
    steps: t,
    currentStepId: n,
    defaultStepId: a,
    onStepChange: s,
    layoutForStep: o,
    renderStepCard: l,
    renderStepContent: i,
    renderSecondaryContent: c,
    renderSecondaryNav: d,
    renderBreadcrumbs: u,
    className: f,
    getId: h = (w) => w.id
  } = e, [p, y] = Be(
    a ?? (t[0] ? h(t[0]) : void 0)
  ), g = n ?? p, m = t.findIndex((w) => h(w) === g), I = m >= 0 ? t[m] : t[0], N = (w) => {
    n === void 0 && y(w);
    const k = t.find((M) => h(M) === w);
    k && s && s(w, k);
  }, { hydrated: L, breakpoint: D, paneConfig: x } = Nh({
    step: I,
    index: m,
    layoutForStep: o
  }), S = u ? u({ steps: t, current: I, onNavigate: N }) : /* @__PURE__ */ r.jsx(
    kh,
    {
      steps: t,
      currentIndex: Math.max(0, m),
      onNavigate: (w) => N(h(t[w]))
    }
  ), C = () => /* @__PURE__ */ r.jsx("ul", { className: "nhsfdp-primary-nav", role: "list", children: t.map((w, k) => {
    const M = h(w), F = k === m;
    return /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: "nhsfdp-primary-nav__item" + (F ? " is-current" : ""),
        "aria-current": F ? "step" : void 0,
        onClick: () => N(M),
        children: w.label
      }
    ) }, String(M));
  }) }), _ = () => /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
    S,
    /* @__PURE__ */ r.jsx(
      Ch,
      {
        steps: t,
        currentIndex: Math.max(0, m),
        onNavigate: (w) => N(h(t[w])),
        renderCard: (w) => l ? l(w) : i(w)
      }
    )
  ] }), b = (w) => /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-grid panes-" + (w.panes ?? 2), children: [
    S,
    /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-body", children: [
      w.showPrimaryNav && /* @__PURE__ */ r.jsx("aside", { className: "nhsfdp-pane primary-nav", "aria-label": "Primary navigation", children: /* @__PURE__ */ r.jsx(C, {}) }),
      /* @__PURE__ */ r.jsx("main", { className: "nhsfdp-pane content", "aria-live": "polite", children: i(I) }),
      w.showSecondaryNav && (d || c) && /* @__PURE__ */ r.jsxs("aside", { className: "nhsfdp-pane secondary-nav", "aria-label": "Secondary navigation", children: [
        d?.(I),
        c?.(I)
      ] })
    ] })
  ] });
  return L ? D === "mobile" || (x.panes ?? 1) === 1 ? /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: _() }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: b(x) }) : /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow " + (f ?? ""), children: [
    S,
    /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ r.jsx("main", { className: "nhsfdp-pane content", children: I ? i(I) : null }) })
  ] });
}
const jh = typeof window < "u" && window.document ? U.useLayoutEffect : U.useEffect, Qo = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Mh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: l } = e, i = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, p = (g) => {
    h && (g.preventDefault(), a?.(e));
  }, y = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: p,
    onKeyDown: (g) => {
      (g.key === "Enter" || g.key === " ") && p(g), g.key === "Escape" && s && p(g);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: be("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: i, width: c, top: d, "--item-height": t },
      role: "gridcell",
      "aria-label": l,
      "aria-colindex": u,
      "aria-colspan": f,
      ...y,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: be("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Ih = Vc(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: s,
  ariaLabel: o = "Product roadmap",
  enableDrilldown: l = !1,
  onToggleItem: i,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = Be(() => /* @__PURE__ */ new Set()), [h, p] = Be(() => /* @__PURE__ */ new Set()), y = He(/* @__PURE__ */ new Set()), g = xe((M) => u.has(M), [u]), m = xe((M) => {
    f((F) => {
      const E = new Set(F);
      return E.has(M.id) ? (E.delete(M.id), p((A) => {
        const $ = new Set(A);
        return $.add(M.id), $;
      }), setTimeout(() => p((A) => {
        const $ = new Set(A);
        return $.delete(M.id), $;
      }), 240), i?.(M.id, !1)) : (E.add(M.id), i?.(M.id, !0)), E;
    });
  }, [i]);
  jh(() => {
    if (c !== "inline" || !l || typeof document > "u") return;
    const M = [];
    if (u.forEach(($) => {
      y.current.has($) || M.push($);
    }), y.current = new Set(u), !M.length) return;
    const F = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, E = M.map(($) => `.nhsuk-product-roadmap__inline-children[data-parent="${$}"] .nhsuk-product-roadmap__inline-child`).join(","), A = Array.from(document.querySelectorAll(E));
    if (A.length) {
      if (F) {
        A.forEach(($) => {
          $.style.opacity = "1", $.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then(($) => {
        ($.gsap || $.default || $).to(A, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        A.forEach(($) => {
          $.style.opacity = "1", $.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, l]);
  const I = xe(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), N = be("nhsuk-product-roadmap", s), L = Qo(n, 120, 1200, 400), D = Qo(a, 1, 6, 2), x = je(() => e.map((M) => /* @__PURE__ */ new Date(M + " 01")), [e]), S = je(() => {
    if (x.length === 0) {
      const E = /* @__PURE__ */ new Date();
      return [E, E];
    }
    const M = new Date(x[0]), F = Zn.offset(new Date(x[x.length - 1]), 1);
    return [M, F];
  }, [x]), C = je(() => Gs().domain(S).range([0, x.length * L]), [S, x.length, L]), _ = xe((M) => {
    if (M.startDate) {
      const V = new Date(M.startDate), R = new Date(M.endDate ?? M.startDate);
      R < V && R.setTime(V.getTime());
      const ee = C(V), Y = Zn.offset(new Date(R), 1);
      let K = C(Y);
      Number.isFinite(K) || (K = ee + L);
      const J = Math.max(L * 0.25, K - ee), X = ee / L, pe = J / L;
      return { ...M, _pxLeft: ee, _pxWidth: J, _startFraction: X, _spanColumns: pe };
    }
    const F = M.date ?? 1, E = M.dateOffset ?? 0, A = M.length ?? 1, $ = M.partialLength ?? 1, B = F - 1 + E, se = A - 1 + $;
    return { ...M, _pxLeft: B * L, _pxWidth: se * L, _startFraction: B, _spanColumns: se };
  }, [C, L]), b = je(() => t.map((M) => {
    const E = M.roadmapItems.map(($) => {
      const B = !$.childItems && $.children ? { ...$, childItems: $.children } : { ...$ };
      return _(B);
    }).sort(($, B) => $._pxLeft !== B._pxLeft ? $._pxLeft - B._pxLeft : B._pxWidth - $._pxWidth), A = [];
    return E.forEach(($) => {
      const B = $._pxLeft, se = $._pxLeft + $._pxWidth;
      let V = A.findIndex((R) => R <= B);
      V === -1 && (V = A.length, A.push(0)), A[V] = se, $.verticalPosition = V + 1;
    }), { ...M, roadmapItems: E, _laneCount: A.length };
  }), [t, _]), w = je(() => b.map((M) => M._laneCount || 1), [b]), k = je(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: N,
      style: { "--column-width": `${L}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": b.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((M, F) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": F + 2, children: M }, `${M}-${F}`))
        ] }),
        b.map((M, F) => {
          const E = F + 2, A = w[F];
          let $, B = 0, se = [];
          l && c === "inline" && (se = M.roadmapItems.filter((Y) => g(Y.id) && Y.childItems && Y.childItems.length).map((Y) => ({ id: Y.id, lane: Y.verticalPosition || 1, count: Y.childItems.length })).sort((Y, K) => Y.lane - K.lane), B = se.reduce((Y, K) => Y + K.count, 0));
          const V = A + B;
          $ = `calc((${V} * var(--roadmap-item-block-height)) + (max(0, ${V} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let ee = 0;
          return se.forEach((Y) => {
            ee += Y.count, R[Y.lane + 1] = ee;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": E, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: M.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: $ }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: M.roadmapItems.map((Y, K) => {
              const J = (Y.verticalPosition || 1) - 1, X = se.filter((Q) => Q.lane - 1 < J).reduce((Q, te) => Q + te.count, 0), pe = J + X, ne = g(Y.id), re = h.has(Y.id);
              return /* @__PURE__ */ r.jsxs(ht.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Mh, { item: Y, maxLines: D, enableDrilldown: l, onExpand: m, isActive: ne, topLaneIndex: pe, laneOffset: X }),
                l && c === "inline" && (ne || re) && Y.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": Y.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${Y.title} child tasks`, children: Y.childItems.map((Q, te) => {
                  const ce = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let W = Y._pxLeft, ie = Y._pxWidth;
                  if (Q.startDate) {
                    const oe = new Date(Q.startDate);
                    let fe = Q.endDate ? new Date(Q.endDate) : new Date(oe);
                    fe < oe && (fe = new Date(oe));
                    const De = new Date(fe);
                    De.setDate(De.getDate() + 1);
                    const Pe = C(oe);
                    let _e = C(De);
                    (!Number.isFinite(_e) || _e <= Pe) && (_e = Pe + 6), W = Pe, ie = Math.max(6, _e - Pe);
                  }
                  const he = pe + 1 + te;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: be("nhsuk-product-roadmap__inline-child", Q.status && `nhsuk-product-roadmap__inline-child--status-${Q.status}`, !ne && re && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${W}px`, width: `${ie}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${he})`, height: ce, opacity: ne ? 0 : void 0, transform: ne ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Q.title })
                      ]
                    },
                    Q.id ?? te
                  );
                }) })
              ] }, Y.id ?? K);
            }) }) })
          ] }, `${M.heading}-${F}`);
        }),
        l && c === "overlay" && u.size === 1 && (() => {
          const M = Array.from(u)[0], F = t.flatMap((E) => E.roadmapItems).find((E) => E.id === M);
          return !F || !F.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${F.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: F.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: I, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((E, A) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: E.title }),
                E.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: E.content })
              ] }, E.id ?? A)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: I, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Ih.displayName = "ProductRoadmap";
function xl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = xl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Tr() {
  for (var e, t, n = 0, a = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = xl(e)) && (a && (a += " "), a += t);
  return a;
}
function lt(e) {
  return function() {
    return e;
  };
}
const es = Math.PI, ts = 2 * es, an = 1e-6, Dh = ts - an;
function bl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Th(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return bl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * n) / n + a[s];
  };
}
class Lh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? bl : Th(t);
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
  quadraticCurveTo(t, n, a, s) {
    this._append`Q${+t},${+n},${this._x1 = +a},${this._y1 = +s}`;
  }
  bezierCurveTo(t, n, a, s, o, l) {
    this._append`C${+t},${+n},${+a},${+s},${this._x1 = +o},${this._y1 = +l}`;
  }
  arcTo(t, n, a, s, o) {
    if (t = +t, n = +n, a = +a, s = +s, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let l = this._x1, i = this._y1, c = a - t, d = s - n, u = l - t, f = i - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > an) if (!(Math.abs(f * c - d * u) > an) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = a - l, y = s - i, g = c * c + d * d, m = p * p + y * y, I = Math.sqrt(g), N = Math.sqrt(h), L = o * Math.tan((es - Math.acos((g + h - m) / (2 * I * N))) / 2), D = L / N, x = L / I;
      Math.abs(D - 1) > an && this._append`L${t + D * u},${n + D * f}`, this._append`A${o},${o},0,0,${+(f * p > u * y)},${this._x1 = t + x * c},${this._y1 = n + x * d}`;
    }
  }
  arc(t, n, a, s, o, l) {
    if (t = +t, n = +n, a = +a, l = !!l, a < 0) throw new Error(`negative radius: ${a}`);
    let i = a * Math.cos(s), c = a * Math.sin(s), d = t + i, u = n + c, f = 1 ^ l, h = l ? s - o : o - s;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > an || Math.abs(this._y1 - u) > an) && this._append`L${d},${u}`, a && (h < 0 && (h = h % ts + ts), h > Dh ? this._append`A${a},${a},0,1,${f},${t - i},${n - c}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > an && this._append`A${a},${a},0,${+(h >= es)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
  }
  rect(t, n, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function yl(e) {
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
  }, () => new Lh(t);
}
function vl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wl(e) {
  this._context = e;
}
wl.prototype = {
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
function Sl(e) {
  return new wl(e);
}
function _l(e) {
  return e[0];
}
function kl(e) {
  return e[1];
}
function Cl(e, t) {
  var n = lt(!0), a = null, s = Sl, o = null, l = yl(i);
  e = typeof e == "function" ? e : e === void 0 ? _l : lt(e), t = typeof t == "function" ? t : t === void 0 ? kl : lt(t);
  function i(c) {
    var d, u = (c = vl(c)).length, f, h = !1, p;
    for (a == null && (o = s(p = l())), d = 0; d <= u; ++d)
      !(d < u && n(f = c[d], d, c)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+e(f, d, c), +t(f, d, c));
    if (p) return o = null, p + "" || null;
  }
  return i.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : lt(+c), i) : e;
  }, i.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : lt(+c), i) : t;
  }, i.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : lt(!!c), i) : n;
  }, i.curve = function(c) {
    return arguments.length ? (s = c, a != null && (o = s(a)), i) : s;
  }, i.context = function(c) {
    return arguments.length ? (c == null ? a = o = null : o = s(a = c), i) : a;
  }, i;
}
function ns(e, t, n) {
  var a = null, s = lt(!0), o = null, l = Sl, i = null, c = yl(d);
  e = typeof e == "function" ? e : e === void 0 ? _l : lt(+e), t = typeof t == "function" ? t : lt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? kl : lt(+n);
  function d(f) {
    var h, p, y, g = (f = vl(f)).length, m, I = !1, N, L = new Array(g), D = new Array(g);
    for (o == null && (i = l(N = c())), h = 0; h <= g; ++h) {
      if (!(h < g && s(m = f[h], h, f)) === I)
        if (I = !I)
          p = h, i.areaStart(), i.lineStart();
        else {
          for (i.lineEnd(), i.lineStart(), y = h - 1; y >= p; --y)
            i.point(L[y], D[y]);
          i.lineEnd(), i.areaEnd();
        }
      I && (L[h] = +e(m, h, f), D[h] = +t(m, h, f), i.point(a ? +a(m, h, f) : L[h], n ? +n(m, h, f) : D[h]));
    }
    if (N) return i = null, N + "" || null;
  }
  function u() {
    return Cl().defined(s).curve(l).context(o);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : lt(+f), a = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : lt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : lt(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : lt(+f), n = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : lt(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : lt(+f), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(n);
  }, d.lineX1 = function() {
    return u().x(a).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : lt(!!f), d) : s;
  }, d.curve = function(f) {
    return arguments.length ? (l = f, o != null && (i = l(o)), d) : l;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? o = i = null : i = l(o = f), d) : o;
  }, d;
}
function Ko(e) {
  return e < 0 ? -1 : 1;
}
function ei(e, t, n) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), l = (n - e._y1) / (s || a < 0 && -0), i = (o * s + l * a) / (a + s);
  return (Ko(o) + Ko(l)) * Math.min(Math.abs(o), Math.abs(l), 0.5 * Math.abs(i)) || 0;
}
function ti(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Pa(e, t, n) {
  var a = e._x0, s = e._y0, o = e._x1, l = e._y1, i = (o - a) / 3;
  e._context.bezierCurveTo(a + i, s + i * t, o - i, l - i * n, o, l);
}
function Lr(e) {
  this._context = e;
}
Lr.prototype = {
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
        Pa(this, this._t0, ti(this, this._t0));
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
          this._point = 3, Pa(this, ti(this, n = ei(this, e, t)), n);
          break;
        default:
          Pa(this, this._t0, n = ei(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Lr.prototype).point = function(e, t) {
  Lr.prototype.point.call(this, t, e);
};
function $r(e) {
  return new Lr(e);
}
function $h(e, t, n) {
  const a = Ri(e, t);
  return Gs().domain(a).range(n);
}
function ni(e, t, n) {
  const [a, s] = Ri(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return Cr().domain([0, 0]).range(n);
  let l;
  if (a <= 0)
    l = Math.min(0, a);
  else {
    const c = s - a, d = (c > 0 ? c : a) * 0.1;
    l = Math.max(0, a - d), l === a && (l = Math.max(0, a * 0.9));
  }
  const i = s ?? 0;
  return Cr().domain([l, i]).nice().range(n);
}
function rs(e, t, n, a) {
  const s = Cl().x(t).y(n);
  return a?.smooth !== !1 && s.curve($r), s(e) ?? "";
}
function Ah(e = {}) {
  const t = U.useRef(null), n = U.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = U.useState({ width: 0, height: 0 });
  U.useLayoutEffect(() => {
    if (!t.current) return;
    const i = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        s({ width: u, height: f });
      }
    });
    return i.observe(t.current), () => i.disconnect();
  }, []);
  const o = Math.max(0, a.width - n.left - n.right), l = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: l, margin: n, ref: t };
}
const Nl = U.createContext(null);
function nn() {
  return U.useContext(Nl);
}
const Eh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: l
}) => {
  const i = Ah(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: i.ref, className: a, style: c, role: o, "aria-label": l, children: /* @__PURE__ */ r.jsx(Nl.Provider, { value: i, children: s }) });
}, Zs = U.createContext(null), xn = () => U.useContext(Zs), Ph = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: l = 5,
  yDomain: i,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = nn(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, y = U.useMemo(() => e.flatMap((x) => x.data), [e]), g = U.useCallback(
    (x) => {
      if (a) return a(x);
      const S = x.x;
      return S instanceof Date ? S : new Date(S);
    },
    [a]
  ), m = c ?? 6, I = d ?? 6, N = U.useMemo(
    () => $h(y, g, [
      m,
      Math.max(0, h - m)
    ]),
    [y, g, h, m]
  ), L = U.useMemo(() => {
    const x = Math.max(0, u ?? 0), S = Math.max(0, p - (I + x));
    if (i) {
      const C = ni([], (_) => _.y, [
        S,
        I
      ]);
      return C.domain(i), C;
    }
    return ni(y, (C) => C.y, [S, I]);
  }, [y, p, i, I, u]), D = U.useMemo(
    () => ({
      xScale: N,
      yScale: L,
      getXTicks: (x = o) => N.ticks(x),
      getYTicks: (x = l) => L.ticks(x)
    }),
    [N, L, o, l]
  );
  return /* @__PURE__ */ r.jsx(Zs.Provider, { value: D, children: s });
}, mr = 16, gr = 6, Fh = 16, Rh = 4, Bh = 6, Hh = 3, zh = void 0, ri = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: s,
  label: o,
  offset: l,
  className: i,
  minLabelSpacing: c,
  maxTickLabelLength: d,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: p,
  yZeroBreak: y
}) => {
  const g = xn(), m = nn(), I = t || (e === "x" ? g?.xScale : g?.yScale), N = n ?? (e === "x" ? 6 : 5), L = typeof s == "function", D = U.useMemo(() => {
    if (L || !p) return;
    const C = (_) => new Intl.DateTimeFormat(void 0, _);
    switch (p) {
      case "dayShortMonth":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${b.getDate()}
${C({ month: "short" }).format(b)}`;
        };
      case "dayShortMonthYear":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${b.getDate()}
${C({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "shortMonth":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return C({ month: "short" }).format(b);
        };
      case "shortMonthYear":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${C({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "hourMinute":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return C({ hour: "2-digit", minute: "2-digit" }).format(b);
        };
      default:
        return;
    }
  }, [L, p]);
  let x = L ? s : D || ((C) => String(C));
  const S = U.useMemo(() => a && Array.isArray(a) ? a : I ? typeof I.ticks == "function" ? I.ticks(N) : I.domain ? I.domain() : [] : [], [I, N, a]);
  if (e === "x" && !L && !p && S.length && S.every((C) => C instanceof Date)) {
    const C = S[0], _ = S[S.length - 1], b = _.getTime() - C.getTime(), w = 24 * 3600 * 1e3, k = 365 * w, M = C.getFullYear() === _.getFullYear(), F = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (b < 2 * w) {
      const E = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      x = (A) => E.format(A);
    } else if (b < 32 * w)
      x = (E) => {
        const A = E;
        return `${A.getDate()} ${F.format(A)}`;
      };
    else if (b < k && M)
      x = (E) => F.format(E);
    else if (b < 2 * k) {
      const E = /* @__PURE__ */ new Set();
      x = (A) => {
        const $ = A, B = $.getMonth();
        return E.has(B) || E.add(B), `${F.format($)} ${$.getFullYear()}`;
      };
    } else
      x = (E) => String(E.getFullYear());
  }
  if (!I || !m) return null;
  if (e === "x") {
    const C = l ?? m.innerHeight, _ = typeof I.bandwidth == "function", b = _ ? I.bandwidth() : 0, w = (F) => {
      const E = I(F);
      return _ ? E + b / 2 : E;
    };
    let k = c ?? 0;
    if (u && c == null) {
      const F = S.map(
        (A) => x(A).replace(/\n.*/g, "")
      ), E = F.length ? F.reduce((A, $) => A + $.length, 0) / F.length : 0;
      k = Math.max(12, Math.round(E * 6 + 4));
    }
    const M = U.useMemo(() => {
      if (a && Array.isArray(a) || k <= 0) return S;
      const F = [];
      let E = -1 / 0;
      for (const A of S) {
        const $ = w(A);
        $ - E >= k && (F.push(A), E = $);
      }
      return F;
    }, [
      S,
      I,
      k,
      a,
      _,
      b
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", i].filter(Boolean).join(" "),
        transform: `translate(0,${C})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          M.map((F, E) => {
            const A = x(F), $ = d && A.length > d ? A.slice(0, Math.max(1, d - 1)) + "…" : A, B = h ? $.split(/\n/) : [$.replace(/\n/g, " ")], se = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${w(F)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: se,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        B.map((V, R) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: R === 0 ? 0 : "1.1em", children: V }, R)),
                        $ !== A && /* @__PURE__ */ r.jsx("title", { children: A })
                      ]
                    }
                  )
                ]
              },
              F?.toString?.() || E
            );
          })
        ]
      }
    );
  }
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: ["fdp-axis", "fdp-axis--y", i].filter(Boolean).join(" "),
      fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
      children: [
        (() => {
          const C = !!y?.enabled, _ = Math.max(gr, y?.gapPx ?? mr);
          if (!C)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: m.innerHeight, stroke: "currentColor" });
          const b = Math.max(0, m.innerHeight - _);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: b, stroke: "currentColor" });
        })(),
        S.map((C, _) => {
          const b = x(C), w = d && b.length > d ? b.slice(0, Math.max(1, d - 1)) + "…" : b, k = h ? w.split(/\n/) : [w.replace(/\n/g, " ")];
          if (!!y?.enabled) {
            const F = Math.max(gr, y?.gapPx ?? mr), E = Math.max(0, m.innerHeight - F);
            if (I(C) > E - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${I(C)})`,
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
                      k.map((F, E) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: E === 0 ? 0 : "1.1em", children: F }, E)),
                      w !== b && /* @__PURE__ */ r.jsx("title", { children: b })
                    ]
                  }
                )
              ]
            },
            C?.toString?.() || _
          );
        }),
        !!y?.enabled && (() => {
          const C = Math.max(gr, y?.gapPx ?? mr), _ = m.innerHeight, w = Math.max(0, _ - C), k = w, F = Math.max(4, _ - k), E = Rh, A = Bh, $ = Math.max(1, Math.round(y?.zigZag?.amplitudePx ?? E)), B = Math.max(1, Math.round(y?.zigZag?.stepXPx ?? Hh)), se = y?.zigZag?.heightPx ?? zh, V = Math.max(4, Math.round(se ?? 0));
          let R, ee;
          if (y?.zigZag?.heightPx && y.zigZag.heightPx > 0) {
            const re = Math.max(4, Math.min(F - 2, V));
            R = Math.max(1, Math.floor(re / (2 * $))), ee = Math.max(0, Math.min(re, R * 2 * $));
          } else typeof y?.zigZag?.cycles == "number" && y?.zigZag?.cycles > 0 ? (R = Math.max(1, Math.round(y.zigZag.cycles)), ee = R * 2 * $, ee = Math.min(ee, F - 2), R = Math.max(1, Math.floor(ee / (2 * $)))) : (R = A, ee = Math.min(F - 2, R * 2 * $), R = Math.max(1, Math.floor(ee / (2 * $))));
          const Y = k + (F - ee) / 2, K = Y + ee;
          let J = "M0,0";
          const X = ee > 0 ? Math.max(0, Math.floor((ee - $) / (2 * $))) : 0, pe = Math.max(0, (ee - X * 2 * $) / 2), ne = $ > 0 ? B * (pe / $) : 0;
          pe > 0 && (J += ` l${ne},${pe}`);
          for (let re = 0; re < X; re++)
            J += ` l-${B},${$} l${B},${$}`;
          return pe > 0 && (J += ` l-${ne},${pe}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: w, y2: Y, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${Y})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: J, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: K, y2: _, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${_})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        o && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -m.innerHeight / 2,
            y: -m.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: o
          }
        )
      ]
    }
  );
}, Oh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = xn(), l = nn();
  if (!o || !l) return null;
  const i = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && i.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: l.innerWidth,
        y1: o.yScale(c),
        y2: o.yScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    )),
    e === "x" && i.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        y1: 0,
        y2: l.innerHeight,
        x1: o.xScale(c),
        x2: o.xScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    ))
  ] });
}, Uh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, nr = {
  color: Uh
}, Wh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, pa = {
  color: Wh
}, Gh = [
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
let Fa = null, Ra = null, Ba = null, jl = "optimized";
function Vh() {
  const e = { color: { ...pa.color, ...nr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((i, c) => i ? i[c] : void 0, e);
    if (!o) return;
    const l = o.$value || o.value;
    if (typeof l == "string" && /^\{.+\}$/.test(l))
      return t(l.slice(1, -1), s);
    if (typeof l == "string") return l;
  }, n = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const s = `color.data-viz.categorical.${a}`, o = t(s);
      if (!o) throw new Error(`Missing token ${s}`);
      n.push(o);
    }
    return n;
  } catch {
    return Gh;
  }
}
function Yh() {
  return Fa || (Fa = Vh()), Fa;
}
function Zh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Ha(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Jh(e, t, n) {
  const a = Ha(e), s = Ha(t), o = Ha(n), l = a * 0.4124 + s * 0.3576 + o * 0.1805, i = a * 0.2126 + s * 0.7152 + o * 0.0722, c = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: l * 100, y: i * 100, z: c * 100 };
}
function qh(e, t, n) {
  let l = e / 95.047, i = t / 100, c = n / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return l = d(l), i = d(i), c = d(c), { L: 116 * i - 16, a: 500 * (l - i), b: 200 * (i - c) };
}
function Ml(e) {
  const t = Zh(e);
  if (!t) return null;
  const n = Jh(t.r, t.g, t.b);
  return qh(n.x, n.y, n.z);
}
function ai(e, t) {
  const n = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(n * n + a * a + s * s);
}
function Xh() {
  const e = Yh();
  if (e.length <= 2) return e.slice();
  const t = e.map((l) => Ml(l));
  let n = 0, a = -1;
  for (let l = 0; l < e.length; l++) {
    const i = t[l];
    if (!i) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) l !== f && t[f] && (c += ai(i, t[f]), d++);
    const u = c / Math.max(1, d);
    u > a && (a = u, n = l);
  }
  const s = new Set(e.map((l, i) => i)), o = [];
  for (o.push(n), s.delete(n); s.size; ) {
    let l = Array.from(s)[0], i = -1;
    for (const c of s) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of o) {
        const h = t[f];
        if (h) {
          const p = ai(d, h);
          p < u && (u = p);
        }
      }
      u > i && (i = u, l = c);
    }
    o.push(l), s.delete(l);
  }
  return o.map((l) => e[l]);
}
function Qh() {
  return Ra || (Ra = Xh()), Ra;
}
function Kh(e, t, n) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - n / 200, l = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, i = l(s) * 95.047, c = l(a) * 100, d = l(o) * 108.883;
  return { X: i, Y: c, Z: d };
}
function em(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, s = e * -0.9689 + t * 1.8758 + n * 0.0415, o = e * 0.0557 + t * -0.204 + n * 1.057;
  const l = (i) => i <= 31308e-7 ? 12.92 * i : 1.055 * Math.pow(i, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, l(a))), s = Math.min(1, Math.max(0, l(s))), o = Math.min(1, Math.max(0, l(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function tm(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function nm(e, t) {
  const n = Ml(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: s, Y: o, Z: l } = Kh(a, n.a, n.b), i = em(s, o, l);
  return tm(i.r, i.g, i.b);
}
function rm() {
  const e = Qh(), n = [12, -12, 24, -24].map((s) => e.map((o) => nm(o, s))), a = [...e];
  return n.forEach((s) => a.push(...s)), a;
}
function am() {
  return (!Ba || sm()) && (Ba = rm(), Il = jl), Ba;
}
let Il = null;
function sm() {
  return Il !== jl;
}
function It(e) {
  const t = am();
  return t[e % t.length];
}
let Cn = null, Jn = null, qn = null, Xn = null;
function om() {
  const e = nr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Cn = [];
    for (let o = 1; o <= 12; o++) {
      const l = t[String(o)]?.$value || t[String(o)]?.value;
      Cn.push(typeof l == "string" ? l : "#212b32");
    }
    const n = e.region || {};
    Jn = {}, Object.keys(n).forEach((o) => {
      const l = n[o]?.$value || n[o]?.value;
      typeof l == "string" && (Jn[o] = l);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    Xn = {}, Object.keys(s).forEach((o) => {
      const l = s[o]?.$value || s[o]?.value;
      typeof l == "string" && (Xn[o] = l);
    }), qn = {}, Object.keys(a).forEach((o) => {
      const l = a[o]?.$value || a[o]?.value;
      typeof l == "string" && (qn[o] = l);
    });
  }
}
function ha() {
  (!Cn || !Jn || !qn || !Xn) && om();
}
function hn(e) {
  return ha(), Cn ? Cn[e % Cn.length] : "#212b32";
}
function im(e) {
  return ha(), Jn ? Jn[e] : void 0;
}
function Ar(e, t) {
  return im(e) || hn(t);
}
const as = ["low", "moderate", "high", "critical"];
let za = null;
function lm() {
  const e = { color: { ...pa.color, ...nr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((i, c) => i ? i[c] : void 0, e);
    if (!o) return;
    const l = o.$value || o.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {};
  return as.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (n[a] = s);
  }), n;
}
function Dl() {
  return za || (za = lm()), za;
}
function cm(e) {
  return Dl()[e.toLowerCase()];
}
function dm(e, t) {
  return cm(e) || Dl()[as[t % as.length]] || It(t);
}
function um(e) {
  return ha(), qn ? qn[e] : void 0;
}
function fm(e, t) {
  return um(e) || hn(t);
}
const ss = ["trust", "ambulance", "icb", "region"];
let Oa = null;
function pm() {
  const e = { color: { ...pa.color, ...nr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((i, c) => i ? i[c] : void 0, e);
    if (!o) return;
    const l = o.$value || o.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {};
  return ss.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (n[a] = s);
  }), n;
}
function Tl() {
  return Oa || (Oa = pm()), Oa;
}
function hm(e) {
  return Tl()[e.toLowerCase()];
}
function mm(e, t) {
  return hm(e) || Tl()[ss[t % ss.length]] || It(t);
}
function gm(e) {
  return ha(), Xn ? Xn[e] : void 0;
}
function xm(e, t) {
  return gm(e) || hn(t);
}
let Ua = null;
const bm = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function ym(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function vm() {
  const e = { color: { ...pa.color, ...nr.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const l = s.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!l) return;
    const i = l.$value || l.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {}, a = [];
  return bm.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? n[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function wm() {
  return Ua || (Ua = vm()), Ua;
}
function Sm(e) {
  return wm()[ym(e)];
}
function Nn(e, t) {
  return Sm(e) || It(t);
}
const Ll = U.createContext(null), rr = () => U.useContext(Ll), Wy = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [s, o] = U.useState(() => new Set(e)), l = n !== void 0, i = U.useMemo(() => l ? new Set(n) : s, [l, n, s]), c = U.useCallback((u) => {
    l || o(new Set(u)), a?.(Array.from(u));
  }, [l, a]), d = U.useMemo(() => ({
    hiddenIds: i,
    isHidden: (u) => i.has(u),
    toggle: (u) => {
      const f = new Set(i);
      f.has(u) ? f.delete(u) : f.add(u), c(f);
    },
    showOnly: (u) => {
      c(/* @__PURE__ */ new Set());
    },
    showAll: () => c(/* @__PURE__ */ new Set()),
    setHidden: (u) => c(new Set(Array.isArray(u) ? u : Array.from(u)))
  }), [i, c]);
  return /* @__PURE__ */ r.jsx(Ll.Provider, { value: d, children: t });
}, $l = U.createContext(null), Zt = () => U.useContext($l), _m = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = xn(), s = rr(), [o, l] = U.useState(null), i = U.useRef(/* @__PURE__ */ new Map()), [c, d] = U.useState([]), u = U.useCallback(
    (C, _) => {
      i.current.set(C, _);
    },
    []
  ), f = U.useCallback((C) => {
    i.current.delete(C);
  }, []), h = U.useCallback(
    (C, _) => {
      if (!a) return;
      const { xScale: b, yScale: w } = a;
      let k = null, M = 1 / 0;
      i.current.forEach((F, E) => {
        F.forEach((A, $) => {
          const B = b(A.x), se = w(A.y), V = B - C, R = se - _, ee = Math.sqrt(V * V + R * R);
          ee < M && (M = ee, k = {
            seriesId: E,
            index: $,
            x: A.x,
            y: A.y,
            clientX: B,
            clientY: se
          });
        });
      }), k && M <= t ? l(k) : l(null);
    },
    [a, t]
  ), p = U.useCallback(() => l(null), []);
  U.useEffect(() => {
    if (!o) {
      d([]);
      return;
    }
    if (!a) return;
    const { xScale: C, yScale: _ } = a, b = [];
    i.current.forEach((w, k) => {
      w.forEach((M, F) => {
        (o.x instanceof Date && M.x instanceof Date ? M.x.getTime() === o.x.getTime() : M.x === o.x) && b.push({
          seriesId: k,
          index: F,
          x: M.x,
          y: M.y,
          clientX: C(M.x),
          clientY: _(M.y)
        });
      });
    }), b.sort((w, k) => w.seriesId.localeCompare(k.seriesId)), d(b);
  }, [o, a]);
  const y = U.useCallback(
    (C) => {
      if (!o) return;
      const _ = i.current.get(o.seriesId);
      if (!_) return;
      let b = o.index + C;
      if (b < 0 || b >= _.length) {
        if (!n) return;
        b = (b + _.length) % _.length;
      }
      const w = _[b];
      if (!a) return;
      const { xScale: k, yScale: M } = a;
      l({
        seriesId: o.seriesId,
        index: b,
        x: w.x,
        y: w.y,
        clientX: k(w.x),
        clientY: M(w.y)
      });
    },
    [o, a, n]
  ), g = U.useCallback(
    (C) => {
      let _ = Array.from(i.current.keys());
      if (s && (_ = _.filter((B) => !s.isHidden(B))), _.length === 0) return;
      if (!o) {
        const B = _[0], se = i.current.get(B);
        if (!se || !a) return;
        const { xScale: V, yScale: R } = a, ee = se[0];
        l({
          seriesId: B,
          index: 0,
          x: ee.x,
          y: ee.y,
          clientX: V(ee.x),
          clientY: R(ee.y)
        });
        return;
      }
      const b = _.indexOf(o.seriesId);
      if (b === -1) return;
      let w = b + C;
      if (w < 0 || w >= _.length) {
        if (!n) return;
        w = (w + _.length) % _.length;
      }
      const k = _[w], M = i.current.get(k);
      if (!M || !a) return;
      const F = Math.min(o.index, M.length - 1), E = M[F], { xScale: A, yScale: $ } = a;
      l({
        seriesId: k,
        index: F,
        x: E.x,
        y: E.y,
        clientX: A(E.x),
        clientY: $(E.y)
      });
    },
    [o, a, n, s]
  ), m = U.useCallback(() => {
    let C = Array.from(i.current.keys());
    if (s && (C = C.filter((F) => !s.isHidden(F))), C.length === 0) return;
    const _ = o ? o.seriesId : C[0], b = i.current.get(_);
    if (!b || b.length === 0 || !a) return;
    const w = b[0], { xScale: k, yScale: M } = a;
    l({
      seriesId: _,
      index: 0,
      x: w.x,
      y: w.y,
      clientX: k(w.x),
      clientY: M(w.y)
    });
  }, [o, a, s]), I = U.useCallback(() => {
    let C = Array.from(i.current.keys());
    if (s && (C = C.filter((E) => !s.isHidden(E))), C.length === 0) return;
    const _ = o ? o.seriesId : C[0], b = i.current.get(_);
    if (!b || b.length === 0 || !a) return;
    const w = b.length - 1, k = b[w], { xScale: M, yScale: F } = a;
    l({
      seriesId: _,
      index: w,
      x: k.x,
      y: k.y,
      clientX: M(k.x),
      clientY: F(k.y)
    });
  }, [o, a, s]), N = U.useCallback(
    () => y(1),
    [y]
  ), L = U.useCallback(
    () => y(-1),
    [y]
  ), D = U.useCallback(
    () => g(1),
    [g]
  ), x = U.useCallback(
    () => g(-1),
    [g]
  ), S = U.useMemo(
    () => ({
      focused: o,
      setFocused: l,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: N,
      focusPrevPoint: L,
      focusNextSeries: D,
      focusPrevSeries: x,
      focusFirstPoint: m,
      focusLastPoint: I
    }),
    [
      o,
      c,
      h,
      p,
      u,
      f,
      N,
      L,
      D,
      x,
      m,
      I
    ]
  );
  return /* @__PURE__ */ r.jsx($l.Provider, { value: S, children: e });
}, km = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: s,
  focusIndex: o,
  parseX: l,
  visibilityMode: i = "remove",
  strokeWidth: c = 1,
  smooth: d = !0,
  gradientFillId: u,
  colors: f
}) => {
  const h = xn();
  if (!h) return null;
  const { xScale: p, yScale: y } = h, m = rr()?.isHidden(e.id) ?? !1, I = m && i === "fade";
  if (m && i === "remove")
    return null;
  const N = Zt();
  U.useEffect(() => {
    if (!N) return;
    const _ = e.data.map((b) => ({ x: l(b), y: b.y }));
    return N.registerSeries(e.id, _), () => N.unregisterSeries(e.id);
  }, [N, e.id, e.data, l]);
  const L = U.useMemo(
    () => rs(
      e.data,
      (_) => p(l(_)),
      (_) => y(_.y),
      { smooth: d }
    ),
    [e.data, p, y, l, d]
  ), D = U.useMemo(() => {
    if (!e.data.length) return "";
    const [_] = y.domain(), b = ns().x((w) => p(l(w))).y0(() => y(_)).y1((w) => y(w.y));
    return d && b.curve($r), b(e.data) || "";
  }, [e.data, p, y, l, d]), x = f && f[t], S = e.color || x || (n === "region" ? Nn(e.id, t) : It(t)), C = n === "region" ? Ar(e.id, t) : hn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: I ? 0.25 : 1,
      "aria-hidden": I ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: D,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: L,
            fill: "none",
            stroke: S,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        a && e.data.map((_, b) => {
          const w = p(l(_)), k = y(_.y), M = s ? 0 : -1, F = !I && (s && b === o || N?.focused?.seriesId === e.id && N.focused.index === b), E = () => {
            N && !I && N.setFocused({
              seriesId: e.id,
              index: b,
              x: l(_),
              y: _.y,
              clientX: w,
              clientY: k
            });
          }, A = () => {
            N && N.focused?.seriesId === e.id && N.focused.index === b && N.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: w,
              cy: k,
              r: F ? 5 : 3.5,
              stroke: F ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : C,
              strokeWidth: F ? 2 : 1,
              fill: F ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : S,
              className: "fdp-line-point",
              tabIndex: I ? -1 : M,
              "aria-label": `${e.label || e.id} ${l(_).toDateString()} value ${_.y}`,
              "data-series": e.id,
              "data-index": b,
              onMouseEnter: E,
              onFocus: E,
              onMouseLeave: A,
              onBlur: A
            },
            b
          );
        })
      ]
    }
  );
}, Cm = ({ polite: e = !0, format: t }) => {
  const n = Zt(), [a, s] = U.useState(""), o = U.useRef("");
  return U.useEffect(() => {
    if (!n?.focused) return;
    const { focused: l, aggregated: i } = n;
    let c;
    if (i && i.length > 1) {
      const d = i.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${l.x instanceof Date ? l.x.toDateString() : String(l.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: l.seriesId, x: l.x, y: l.y, index: l.index }) : Nm(l.seriesId, l.x, l.y, l.index);
    if (c !== o.current) {
      o.current = c, s("");
      const d = setTimeout(() => s(c), 10);
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
function Nm(e, t, n, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${n}`;
}
const Gy = () => {
  const e = Zt(), t = nn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, l = Math.min(Math.max(n.clientX, 0), s), i = Math.min(Math.max(n.clientY, 0), o), c = l + 8, d = i - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), y = p ? parseInt(p[0], 10) - 1 : 0, g = It(y >= 0 ? y : 0) || "#005eb8", m = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: l, cy: i, r: 7, fill: "none", stroke: m, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: l, cy: i, r: 5, fill: "#000", stroke: m, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: l, cy: i, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const N = a.map((C) => `${C.seriesId}: ${C.y}`), L = [h, ...N], D = L.reduce((C, _) => Math.max(C, _.length), 0), x = Math.max(90, D * 6.2 + 16), S = 16 * L.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: d - S, rx: 4, ry: 4, width: x, height: S, fill: "#212b32", opacity: 0.92 }),
        L.map((C, _) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - S + 6 + 16 * (_ + 0.7), fill: "#fff", fontSize: 12, children: C }, _))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, Vy = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: o,
  defaultHiddenIds: l = [],
  onVisibilityChange: i,
  formatAnnouncement: c
}) => {
  const d = rr(), u = !!(d && !a && !i && o === void 0), f = a || u, h = e || [], p = o !== void 0, [y, g] = U.useState(new Set(l)), m = p ? new Set(o) : y, [I, N] = U.useState(""), L = (D) => {
    if (u && d) {
      const M = d.isHidden(D);
      d.toggle(D);
      const E = h.find(($) => $.id === D)?.label || D, A = c ? c(D, M, E) : `${E} ${M ? "shown" : "hidden"}`;
      N(A);
      return;
    }
    if (!f) return;
    const x = new Set(m), S = x.has(D);
    S ? x.delete(D) : x.add(D), p || g(x);
    const C = h.filter((M) => !x.has(M.id)).map((M) => M.id), _ = Array.from(x);
    i?.(C, _);
    const w = h.find((M) => M.id === D)?.label || D, k = c ? c(D, S, w) : `${w} ${S ? "shown" : "hidden"}`;
    N(k);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((D, x) => {
      const S = D.palette || t, C = D.color || (S === "region" ? Nn(D.id, x) : S === "severity" ? dm(D.id, x) : S === "org-level" ? mm(D.id, x) : It(x));
      let _ = D.stroke || (S === "region" ? Ar(D.id, x) : S === "severity" ? fm(D.id, x) : S === "org-level" ? xm(D.id, x) : hn(x));
      if (s && _) {
        const k = _.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (_ = "#212b32");
      }
      const b = u && d ? d.isHidden(D.id) : m.has(D.id), w = f ? {
        "aria-pressed": !b,
        "aria-label": `${D.label} (${b ? "show" : "hide"})`,
        onClick: () => L(D.id)
      } : { "aria-label": D.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${b ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: C,
              backgroundImage: D.patternDataUrl ? `url(${D.patternDataUrl})` : void 0,
              backgroundSize: D.patternDataUrl ? "auto" : void 0,
              borderColor: _
            },
            ...w
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: D.label })
      ] }, D.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: I })
  ] });
}, Yy = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: s = !1,
  visibilityMode: o = "remove",
  baselineY: l = 0,
  smooth: i = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = xn();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, g = rr()?.isHidden(e.id) ?? !1, m = g && o === "fade";
  if (g && o === "remove") return null;
  const I = Zt();
  U.useEffect(() => {
    if (!I) return;
    const C = e.data.map((_) => ({ x: a(_), y: _.y }));
    return I.registerSeries(e.id, C), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, a]);
  const N = u && u[t], L = e.color || N || (n === "region" ? Nn(e.id, t) : It(t)), D = U.useMemo(() => c && c.length === e.data.length ? rs(
    e.data,
    (C) => h(a(C)),
    (C) => {
      const _ = e.data.indexOf(C);
      return p(c[_].y1);
    },
    { smooth: i }
  ) : rs(
    e.data,
    (C) => h(a(C)),
    (C) => p(C.y),
    { smooth: i }
  ), [e.data, c, h, p, a, i]), x = U.useMemo(() => {
    if (c && c.length === e.data.length) {
      const k = ns().x((M) => h(a(M))).y0((M, F) => p(c[F].y0)).y1((M, F) => p(c[F].y1));
      return i && k.curve($r), k(e.data) || "";
    }
    const [C, _] = p.domain();
    let b = l;
    b < C ? b = C : b > _ && (b = _);
    const w = ns().x((k) => h(a(k))).y0(() => p(b)).y1((k) => p(k.y));
    return i && w.curve($r), w(e.data) || "";
  }, [e.data, c, h, p, a, l, i]), S = U.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: m ? 0.25 : 1,
      "aria-hidden": m ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: S, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: L, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: L, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: x,
            fill: d ? `url(#${S})` : L,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ r.jsx("path", { d: D, fill: "none", stroke: L, strokeWidth: 1 })
      ]
    }
  );
}, Zy = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: s,
  focusable: o = !0,
  widthFactor: l = 0.8,
  groupGap: i = 2,
  barWidth: c,
  adaptive: d = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: p,
  stacked: y,
  gapRatio: g = 0.15,
  minBarWidth: m,
  gradientFill: I = !0,
  gradientStrokeMatch: N = !0,
  opacity: L = 1,
  fadedOpacity: D = 0.25,
  flatFillOpacity: x = 1,
  colors: S
}) => {
  const C = Math.max(0, g), _ = xn(), b = nn();
  if (!_ || !b) return null;
  const { xScale: w, yScale: k } = _, F = rr()?.isHidden(e.id) ?? !1, E = F && f === "fade";
  if (F && f === "remove") return null;
  const A = Zt();
  U.useEffect(() => {
    if (!A) return;
    const Q = e.data.map((te) => ({ x: s(te), y: te.y }));
    return A.registerSeries(e.id, Q), () => A.unregisterSeries(e.id);
  }, [A, e.id, e.data, s]);
  const $ = typeof w.bandwidth == "function", B = $ ? w.bandwidth() : void 0, se = U.useMemo(() => {
    if (B != null) return B;
    const Q = p && p.length ? p : [e], te = [];
    Q.forEach((ae) => {
      ae.data.forEach((he) => {
        const oe = w(s(he));
        Number.isFinite(oe) && te.push(oe);
      });
    });
    const ce = te.sort((ae, he) => ae - he);
    if (ce.length <= 1) return 40;
    const W = [];
    for (let ae = 1; ae < ce.length; ae++)
      W.push(ce[ae] - ce[ae - 1]);
    return W.sort((ae, he) => ae - he), (W[Math.floor(W.length / 2)] || 40) * l;
  }, [e.data, p, w, s, l, B]), { basePerBar: V } = U.useMemo(() => {
    if ($) {
      const ce = se, W = Math.max(
        1,
        (ce - i * (n - 1)) / n
      ), ie = e.barWidth ?? c;
      let ae = ie ? Math.min(ie, ce) : W;
      if (d) {
        const he = ce * Math.min(1, Math.max(0.05, u)), oe = Math.max(
          1,
          (he - i * (n - 1)) / n
        );
        ae = ie ? Math.min(ae, oe) : oe;
      }
      return { basePerBar: ae };
    }
    const Q = e.barWidth ?? c, te = Math.max(
      1,
      (se - i * (n - 1)) / n
    );
    if (d) {
      const ce = p && p.length ? p : [e], W = [];
      ce.forEach(
        (De) => De.data.forEach((Pe) => {
          const _e = w(s(Pe));
          Number.isFinite(_e) && W.push(_e);
        })
      ), W.sort((De, Pe) => De - Pe);
      const ie = [];
      for (let De = 1; De < W.length; De++)
        ie.push(W[De] - W[De - 1]);
      ie.sort((De, Pe) => De - Pe);
      const he = (ie[Math.floor(ie.length / 2)] || se) * Math.min(1, Math.max(0.05, u)), oe = Math.max(
        1,
        (he - i * (n - 1)) / n
      );
      return { basePerBar: Q ? Math.min(Q, oe) : oe };
    }
    return Q ? { basePerBar: Math.min(Q, te) } : { basePerBar: te };
  }, [
    $,
    se,
    i,
    n,
    c,
    e.barWidth,
    d,
    u,
    p,
    w,
    s
  ]), R = U.useMemo(() => {
    if ($) return [];
    const Q = [];
    return (p && p.length ? p : [e]).forEach(
      (ce) => ce.data.forEach((W) => {
        const ie = w(s(W));
        Number.isFinite(ie) && Q.push(ie);
      })
    ), Q.sort((ce, W) => ce - W), Array.from(new Set(Q));
  }, [$, p, e, w, s]), ee = U.useMemo(() => {
    if ($)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: b.innerWidth }
      ];
    const Q = [];
    for (let te = 0; te < R.length; te++) {
      const ce = R[te], W = te === 0 ? 0 : (R[te - 1] + ce) / 2, ie = te === R.length - 1 ? b.innerWidth : (ce + R[te + 1]) / 2;
      Q.push({
        center: ce,
        left: Math.max(0, W),
        right: Math.min(b.innerWidth, ie)
      });
    }
    return Q;
  }, [$, R, b.innerWidth]), Y = U.useMemo(() => {
    if ($ || !ee.length)
      return;
    const Q = Math.min(1, Math.max(0.05, l)), te = ee.map((he) => Math.max(2, he.right - he.left)), ce = te.map(
      (he) => Math.max(2, Math.min(he - 1, he * Q))
    );
    let W = Math.min(...ce);
    if (m)
      if (n <= 1) {
        const he = Math.min(...te.map((oe) => oe - 1));
        he >= m && W < m && (W = Math.min(he, m));
      } else {
        const he = Math.min(...te.map((fe) => fe - 1)), oe = m * n + (n - 1) * (m * C);
        oe <= he && W < oe && (W = oe);
      }
    if (n <= 1)
      return m && W < m && te.every((oe) => oe >= m) ? { groupWidth: m, barWidth: m } : { groupWidth: W, barWidth: W };
    let ie = W / (n + (n - 1) * C);
    return ie < 1 && (ie = 1), m && ie < m && m * n + (n - 1) * (m * C) <= W && (ie = m), { groupWidth: ie * n + (n - 1) * (ie * C), barWidth: ie };
  }, [
    $,
    ee,
    l,
    n,
    C,
    m
  ]), K = S && S[t] ? S[t] : void 0, J = e.color || K || (a === "region" ? Nn(e.id, t) : It(t)), X = a === "region" ? Ar(e.id, t) : hn(t), pe = N && (e.color || K) ? J : X, ne = Number.isFinite(k(0)) ? k(0) : k.range()[0], re = U.useId();
  return y && y.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: E ? D : L,
      "aria-hidden": E ? !0 : void 0,
      children: [
        I && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: re,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: J, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: J,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: J,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((Q, te) => {
          const ce = s(Q), W = w($ ? Q.x : ce);
          let ie, ae;
          if ($)
            ie = se, ae = W;
          else {
            const T = ee.find(
              (O) => Math.abs(O.center - W) < 0.5
            );
            if (!T || !Y)
              ie = V, ae = W - V / 2;
            else {
              const { groupWidth: O } = Y;
              ie = O;
              let j = W - O / 2;
              j < T.left && (j = T.left), j + O > T.right && (j = Math.max(T.left, T.right - O)), ae = j;
            }
          }
          const he = y[te], oe = k(he.y0), fe = k(he.y1), De = Math.min(oe, fe), Pe = Math.abs(fe - oe) || 1;
          if (!$ && m && ie < m) {
            const T = ee.find(
              (O) => Math.abs(O.center - W) < 0.5
            );
            if (T) {
              const O = Math.max(2, T.right - T.left - 1), j = Math.min(O, m);
              j > ie && (ie = j, ae = Math.max(
                T.left,
                Math.min(T.right - ie, W - ie / 2)
              ));
            }
          }
          const _e = !E && A?.focused?.seriesId === e.id && A.focused.index === te, H = () => {
            !A || E || A.setFocused({
              seriesId: e.id,
              index: te,
              x: ce,
              y: he.y1 - he.y0,
              clientX: ae + ie / 2,
              clientY: De
            });
          }, v = () => {
            A?.focused?.seriesId === e.id && A.focused.index === te && A.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ae,
              y: De,
              width: ie,
              height: Pe,
              fill: I ? `url(#${re})` : J,
              ...I ? {} : { fillOpacity: x },
              stroke: _e ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : I && N ? J : void 0,
              strokeWidth: _e ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: E || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ce instanceof Date ? ce.toDateString() : ce} value ${he.y1 - he.y0}`,
              onMouseEnter: H,
              onFocus: H,
              onMouseLeave: v,
              onBlur: v
            },
            te
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: E ? D : L,
      "aria-hidden": E ? !0 : void 0,
      children: [
        I && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: re,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: J, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: J,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: J,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((Q, te) => {
            const W = S && S[te] || (a === "region" ? Nn(String(Q.x), te) : It(te)), ie = `${re}-${te}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: ie,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: W, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: W, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: W, stopOpacity: 0.06 })
                ]
              },
              ie
            );
          })
        ] }),
        e.data.map((Q, te) => {
          const ce = s(Q), W = w($ ? Q.x : ce);
          let ie, ae;
          if ($) {
            const z = se;
            if (n <= 1)
              ae = z, ie = W;
            else {
              ae = Math.max(
                1,
                z / (n + (n - 1) * C)
              );
              const G = ae * C, Z = ae * n + G * (n - 1);
              ie = W + (z - Z) / 2 + t * (ae + G);
            }
          } else {
            const z = ee.find((G) => G.center === W);
            if (!z || !Y)
              ae = V, ie = W - V / 2, m && ae < m && (ae = m, ie = W - ae / 2);
            else {
              const { barWidth: G } = Y;
              ae = G;
              const Z = n > 1 ? G * C : 0, q = ae * n + Z * (n - 1);
              let de = W - q / 2;
              de < z.left && (de = z.left), de + q > z.right && (de = Math.max(z.left, z.right - q)), ie = de + t * (ae + Z);
            }
            if (m && ae < m) {
              const G = ee.find(
                (Z) => Math.abs(Z.center - W) < 0.5
              );
              if (G) {
                const Z = Math.max(2, G.right - G.left - 1), q = Math.min(Z, m);
                if (q > ae)
                  if (n <= 1)
                    ae = q, ie = Math.max(
                      G.left,
                      Math.min(G.right - ae, W - ae / 2)
                    );
                  else {
                    const de = q * C, le = q * n + de * (n - 1);
                    if (le <= G.right - G.left - 1) {
                      ae = q;
                      const ue = le;
                      let ye = W - ue / 2;
                      ye < G.left && (ye = G.left), ye + ue > G.right && (ye = Math.max(
                        G.left,
                        G.right - ue
                      )), ie = ye + t * (ae + de);
                    }
                  }
              }
            }
          }
          const he = ie + ae / 2, oe = k(Q.y), fe = Math.min(ne, oe), De = Math.abs(ne - oe), Pe = !E && A?.focused?.seriesId === e.id && A.focused.index === te, _e = () => {
            !A || E || A.setFocused({
              seriesId: e.id,
              index: te,
              x: ce,
              y: Q.y,
              clientX: he,
              clientY: oe
            });
          }, H = () => {
            A?.focused?.seriesId === e.id && A.focused.index === te && A.clear();
          }, v = h === "category" && S ? S[te] : void 0, T = h === "category" ? v || (a === "region" ? Nn(String(Q.x), te) : It(te)) : J, O = h === "category" ? `${re}-${te}` : re, j = I && N ? T : h === "category" ? a === "region" ? Ar(String(Q.x), te) : hn(te) : pe, P = Pe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : j || T;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ie,
              y: fe,
              width: ae,
              height: De || 1,
              fill: I ? `url(#${O})` : T,
              ...I ? {} : { fillOpacity: x },
              stroke: P,
              strokeWidth: Pe ? 2 : 1,
              className: "fdp-bar",
              tabIndex: E || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ce instanceof Date ? ce.toDateString() : ce} value ${Q.y}`,
              onMouseEnter: _e,
              onFocus: _e,
              onMouseLeave: H,
              onBlur: H
            },
            te
          );
        })
      ]
    }
  );
}, Jy = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: l = 5
}) => {
  const i = nn(), c = t ?? i?.innerWidth ?? 0, d = n ?? i?.innerHeight ?? 0, u = U.useMemo(() => e.flatMap((m) => m.data), [e]), f = U.useMemo(() => {
    const m = /* @__PURE__ */ new Set();
    return u.forEach((I) => m.add(I.x)), Array.from(m);
  }, [u]), h = U.useMemo(
    () => Math.max(0, ...u.map((m) => m.y)),
    [u]
  ), p = U.useMemo(
    () => Hi().domain(f).range([0, c]).paddingInner(a).paddingOuter(s),
    [f, c, a, s]
  ), y = U.useMemo(
    () => Cr().domain([0, h]).nice().range([d, 0]),
    [h, d]
  ), g = U.useMemo(
    () => ({
      xScale: p,
      yScale: y,
      getXTicks: () => f,
      getYTicks: (m = l) => y.ticks(m)
    }),
    [p, y, f, l]
  );
  return /* @__PURE__ */ r.jsx(Zs.Provider, { value: g, children: o });
}, qy = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: s,
  id: o,
  message: l = "Interactive chart loading…",
  forceFallback: i = !1
}) => {
  const c = U.useId(), d = o || c, u = t ? `${d}-desc` : void 0, f = n ? `${d}-src` : void 0, h = typeof window < "u" && !i;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: d,
      className: Tr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Tr(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: l }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(Yt, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(Yt, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, Xy = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const s = U.useRef(null);
  return U.useEffect(() => {
    const o = s.current;
    if (!o) return;
    const l = () => {
      const i = Array.from(o.querySelectorAll(e));
      if (i.length === 0) return;
      const c = [];
      i.forEach((d) => {
        d.classList.contains("fdp-chart--enhanced") || (d.classList.add("fdp-chart--enhanced"), c.push(d));
      }), c.length && t && t(c);
    };
    if (n > 0) {
      if (typeof window > "u") return;
      const i = window.setTimeout(l, n);
      return () => window.clearTimeout(i);
    }
    l();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: s, children: a });
}, jm = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: s = "neutral",
  variant: o = "default",
  subtitle: l,
  metadata: i,
  trendData: c,
  loading: d = !1,
  error: u,
  valueFormatter: f,
  className: h,
  style: p,
  id: y,
  announceDelta: g = !0,
  visual: m
}) => {
  const I = U.useId(), N = y || I, L = `${N}-label`, D = `${N}-value`, x = `${N}-delta`, S = typeof t == "number" && !Number.isNaN(t), C = d ? "—" : u ? "" : S ? f ? f(t) : t.toLocaleString() : t;
  let _, b = "", w = "";
  if (a && !d && !u) {
    _ = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const k = Math.abs(a.value), M = _ === "up" ? `+${k}` : _ === "down" ? `-${k}` : "0", F = a.isPercent ? "%" : "";
    if (b = `${M}${F}`, a.ariaLabel)
      w = a.ariaLabel;
    else {
      const E = a.invert ? _ === "down" : _ === "up";
      w = `${_ === "neutral" ? "no change" : _ === "up" ? "up" : "down"} ${k}${F}${_ === "neutral" ? "" : E ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Tr(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        d && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        h
      ),
      style: p,
      role: "group",
      "aria-labelledby": L,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: L, className: "fdp-metric-card__label", children: e }),
          i && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: i })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: D, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: C }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            l && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: l })
          ] }),
          a && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: x,
              "aria-label": w,
              className: Tr(
                "fdp-metric-card__delta",
                _ && `fdp-metric-card__delta--${_}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: b }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          c && c.length > 0 && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        m && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: m }),
        g && a && !a.ariaLabel && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: w })
      ] })
    }
  );
};
var nt = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(nt || {}), Al = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Al || {}), en = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(en || {}), Te = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Te || {});
const Js = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
Js.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const Mm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Im = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, El = Js.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: Mm[t],
    category: Im[t],
    participatesInRanking: !0
  }, e),
  {}
);
Js.map(
  (e) => El[e]
);
var Qn = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(Qn || {}), tn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(tn || {}), Pl = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Pl || {});
const jn = {
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
function ma(e) {
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
function ga(e) {
  switch (e) {
    case Te.Improvement:
      return "Improvement signal";
    case Te.Concern:
      return "Concern signal";
    case Te.Neither:
      return "Common cause variation";
    case Te.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Fl(e) {
  switch (e) {
    case tn.Pass:
      return "Target met";
    case tn.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Dm(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const _t = {
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
function Rl(e) {
  return e ? _t[e]?.token ?? _t.neither.token : _t.neither.token;
}
function Tm(e) {
  return e ? _t[e]?.hex ?? _t.neither.hex : _t.neither.hex;
}
var cn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(cn || {});
const Lm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, $m = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var rt = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(rt || {}), Ie = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Ie || {}), xt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(xt || {}), Se = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Se || {});
const Am = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [n, a, s].map(
    (i) => i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, xa = {
  special_cause_deteriorating: {
    hex: _t.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: _t.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: _t.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: _t.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(xa).forEach((e) => {
  e.text || (e.text = Am(e.hex));
});
const Bl = (e) => xa[e], qs = (e) => xa[e].judgement || "none", si = {
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
function Em(e, t) {
  let n;
  return e === "common_cause" ? n = si.common : n = si.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
let os = null;
try {
  os = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const ft = (e, t) => {
  if (!os) return t;
  const n = e.split(".");
  let a = os;
  for (const o of n) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, ba = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: ft("gradient.stop.start-opacity", "0.12"),
  mid: ft("gradient.stop.mid-opacity", "0.03"),
  end: ft("gradient.stop.end-opacity", "0"),
  triStart: ft(
    "gradient.stop.triangle-start-opacity",
    ft("gradient.stop.start-opacity", "0.12")
  ),
  triMid: ft(
    "gradient.stop.triangle-mid-opacity",
    ft("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: ft(
    "gradient.stop.triangle-end-opacity",
    ft("gradient.stop.end-opacity", "0")
  )
}), ya = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, va = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, Hl = () => ft(ya.improvement, va.improvement), zl = () => ft(ya.concern, va.concern), Pm = () => ft(ya.noJudgement, va.noJudgement), sn = () => ft(ya.common, va.common);
function pr(e) {
  switch (e) {
    case Te.Improvement:
      return Hl();
    case Te.Concern:
      return zl();
    case Te.Neither:
    case Te.Suppressed:
    default:
      return sn();
  }
}
function Ol(e) {
  switch (e) {
    case Se.SpecialCauseImproving:
      return Hl();
    case Se.SpecialCauseDeteriorating:
      return zl();
    case Se.SpecialCauseNoJudgement:
      return Pm();
    case Se.CommonCause:
    default:
      return sn();
  }
}
var vt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(vt || {}), Ae = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ae || {}), we = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(we || {}), Xe = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(Xe || {}), dn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(dn || {}), Nt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Nt || {}), Mn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Mn || {}), Sn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Sn || {}), dt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(dt || {}), Tt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Tt || {}), jt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(jt || {}), Er = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Er || {}), Pr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Pr || {});
const Qt = {
  [Xe.SinglePoint]: 1,
  [Xe.TwoSigma]: 2,
  [Xe.Shift]: 3,
  [Xe.Trend]: 4
}, oi = 3.267, Fm = 2.66, ii = 0.2777;
function Ne(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function _n(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function li(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!(t[s] || !Ne(o))) {
      if (a !== null) {
        const l = e[a];
        Ne(l) && (n[s] = Math.abs(o - l));
      }
      a = s;
    }
  }
  return n;
}
function ci(e, t) {
  const n = e.filter(Ne);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const o = _n(a), l = oi * o;
    a = a.filter((i) => i <= l);
  }
  const s = _n(a);
  return { mrMean: s, mrUcl: oi * s };
}
function di(e, t) {
  if (!Ne(e) || !Ne(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Fm * t, a = 2 / 3 * n, s = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + s,
    lowerOneSigma: e - s
  };
}
function Rm(e, t, n, a) {
  if (e === vt.T) {
    const f = t.map((_) => Ne(_) && _ > 0 ? Math.pow(_, ii) : null), h = li(f, n), p = ci(h, a), y = f.filter((_, b) => !n[b] && Ne(_)), g = y.length ? _n(y) : NaN, m = di(g, p.mrMean), I = (_) => Ne(_) && _ > 0 ? Math.pow(_, 1 / ii) : null, N = Ne(m.upperProcessLimit) ? I(m.upperProcessLimit) : null, L = Ne(m.lowerProcessLimit) && m.lowerProcessLimit > 0 ? I(m.lowerProcessLimit) : null, D = Ne(m.upperTwoSigma) ? I(m.upperTwoSigma) : null, x = Ne(m.lowerTwoSigma) && m.lowerTwoSigma > 0 ? I(m.lowerTwoSigma) : null, S = Ne(m.upperOneSigma) ? I(m.upperOneSigma) : null, C = Ne(m.lowerOneSigma) && m.lowerOneSigma > 0 ? I(m.lowerOneSigma) : null;
    return {
      mean: Ne(g) && g > 0 ? I(g) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: N,
      lowerProcessLimit: L,
      upperTwoSigma: D,
      lowerTwoSigma: x,
      upperOneSigma: S,
      lowerOneSigma: C
    };
  }
  if (e === vt.G) {
    const f = t.filter((k, M) => !n[M] && Ne(k)), h = f.length ? _n(f) : NaN, p = Ne(h) ? 1 / (h + 1) : NaN, y = (k) => {
      if (!Ne(p) || p <= 0 || p >= 1) return NaN;
      const M = Math.ceil(Math.log(1 - k) / Math.log(1 - p)) - 1;
      return Math.max(0, M);
    }, g = 135e-5, m = 1 - 135e-5, I = 0.02275, N = 1 - 0.02275, L = 0.158655, D = 1 - 0.158655, x = y(m), S = y(g), C = y(N), _ = y(I), b = y(D), w = y(L);
    return {
      mean: Ne(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Ne(x) ? x : null,
      lowerProcessLimit: Ne(S) ? S : null,
      upperTwoSigma: Ne(C) ? C : null,
      lowerTwoSigma: Ne(_) ? _ : null,
      upperOneSigma: Ne(b) ? b : null,
      lowerOneSigma: Ne(w) ? w : null
    };
  }
  if (e !== vt.XmR)
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
  const s = li(t, n), o = s.filter(Ne), l = o.length ? _n(o) : NaN, i = Ne(l) ? 3.267 * l : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, y) => {
      if (n[y] || !Ne(p)) return h;
      if (!a)
        return h.push(p), h;
      const g = s[y];
      return (g === null || !Ne(i) || Ne(g) && g <= i) && h.push(p), h;
    }, []);
    c = f.length ? _n(f) : NaN;
  }
  const d = ci(s, a), u = di(c, d.mrMean);
  return {
    mean: c,
    mr: s,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function Bm(e, t) {
  const n = e.map((c, d) => d).filter((c) => !e[c].ghost && Ne(e[c].value)), a = (c) => e[c], s = t.shiftPoints, o = t.trendPoints;
  let l = [], i = [];
  for (const c of n) {
    const d = a(c);
    if (!Ne(d.mean) || !Ne(d.value) ? (l = [], i = []) : d.value > d.mean ? (l.push(c), i = []) : d.value < d.mean ? (i.push(c), l = []) : (l = [], i = []), l.length >= s)
      for (const u of l) a(u).shiftUp = !0;
    if (i.length >= s)
      for (const u of i) a(u).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const u = n.slice(c, c + 3).map(a);
    if (!u.every((D) => Ne(D.value) && Ne(D.mean)))
      continue;
    const f = u[0].mean, h = u.every((D) => D.value > f), p = u.every((D) => D.value < f);
    if (!h && !p)
      continue;
    const y = u[0].upperTwoSigma ?? 1 / 0, g = u[0].lowerTwoSigma ?? -1 / 0, m = u[0].upperProcessLimit ?? 1 / 0, I = u[0].lowerProcessLimit ?? -1 / 0, N = u.filter((D) => t.twoSigmaIncludeAboveThree ? D.value > y : D.value > y && D.value <= m), L = u.filter((D) => t.twoSigmaIncludeAboveThree ? D.value < g : D.value < g && D.value >= I);
    h && N.length >= 2 && N.forEach((D) => D.twoSigmaUp = !0), p && L.length >= 2 && L.forEach((D) => D.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const u = n.slice(c, c + 5).map(a);
      if (!u.every((N) => Ne(N.value) && Ne(N.mean)))
        continue;
      const f = u[0].mean, h = u.every((N) => N.value > f), p = u.every((N) => N.value < f);
      if (!h && !p)
        continue;
      const y = u[0].upperOneSigma ?? 1 / 0, g = u[0].lowerOneSigma ?? -1 / 0, m = u.filter((N) => N.value > y), I = u.filter((N) => N.value < g);
      h && m.length >= 4 && m.forEach((N) => N.fourOfFiveUp = !0), p && I.length >= 4 && I.forEach((N) => N.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - o; c++) {
    const d = n.slice(c, c + o), u = d.map(a);
    if (!u.every((p) => Ne(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => a(p).trendUp = !0), h && d.forEach((p) => a(p).trendDown = !0);
  }
}
function Ul(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: Xe.SinglePoint,
    rank: Qt[Xe.SinglePoint]
  }), e.singlePointDown && n.push({
    id: Xe.SinglePoint,
    rank: Qt[Xe.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: Xe.TwoSigma,
    rank: Qt[Xe.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: Xe.TwoSigma,
    rank: Qt[Xe.TwoSigma]
  }), e.shiftUp && t.push({ id: Xe.Shift, rank: Qt[Xe.Shift] }), e.shiftDown && n.push({ id: Xe.Shift, rank: Qt[Xe.Shift] }), e.trendUp && t.push({ id: Xe.Trend, rank: Qt[Xe.Trend] }), e.trendDown && n.push({ id: Xe.Trend, rank: Qt[Xe.Trend] });
  const a = t.reduce((l, i) => Math.max(l, i.rank), 0), s = n.reduce((l, i) => Math.max(l, i.rank), 0), o = a > s ? dn.Upwards : s > a ? dn.Downwards : dn.Same;
  return { up: t, dn: n, upMax: a, dnMax: s, primeDirection: o };
}
function ui(e, t) {
  const n = t === Ae.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Ae.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Ae.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Ae.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function fi(e, t, n, a = !1, s, o, l = !1) {
  const { up: i, dn: c, upMax: d, dnMax: u, primeDirection: f } = Ul(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Hm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: l, primeDirection: f, conflictStrategy: s, ruleHierarchy: o }), t === Ae.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? we.ImprovementHigh : e.specialCauseConcernValue !== null ? we.ConcernLow : we.CommonCause : t === Ae.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? we.ImprovementLow : e.specialCauseConcernValue !== null ? we.ConcernHigh : we.CommonCause : e.variationIcon = we.CommonCause;
  const y = e.specialCauseImprovementValue !== null ? Nt.Up : e.specialCauseConcernValue !== null ? Nt.Down : void 0, g = y === Nt.Up ? d : y === Nt.Down ? u : Math.max(d, u);
  e.primeRank = g || void 0;
  const m = y === Nt.Up ? i.find((I) => I.rank === g) : y === Nt.Down ? c.find((I) => I.rank === g) : void 0;
  return e.primeRuleId = m?.id, { originalImprovement: h, originalConcern: p };
}
function Hm(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: s,
    preferTrendWhenConflict: o,
    primeDirection: l = t.primeDirection ?? dn.Same,
    conflictStrategy: i,
    ruleHierarchy: c
  } = e;
  if (o && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (n === Ae.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Ae.Down) {
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
  const d = s ? Sn.PreferImprovement : i ?? Sn.SqlPrimeThenRule;
  if (d === Sn.PreferImprovement) {
    n === Ae.Up ? t.specialCauseConcernValue = null : n === Ae.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === Sn.RuleHierarchy) {
    const u = c ?? [Xe.Trend, Xe.Shift, Xe.TwoSigma, Xe.SinglePoint], { up: f, dn: h } = Ul(t);
    for (const p of u) {
      const y = f.some((m) => m.id === p), g = h.some((m) => m.id === p);
      if (y && !g) {
        n === Ae.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (g && !y) {
        n === Ae.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (y && g) {
        (n === Ae.Up || n === Ae.Down) && (a === Mn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  l === dn.Upwards ? n === Ae.Up ? t.specialCauseConcernValue = null : n === Ae.Down && (t.specialCauseImprovementValue = null) : l === dn.Downwards ? n === Ae.Up ? t.specialCauseImprovementValue = null : n === Ae.Down && (t.specialCauseConcernValue = null) : a === Mn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var is = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(is || {});
function zm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Om(e) {
  const t = zm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function pi(e) {
  const t = [], n = (l, i, c) => ({
    segStart: l,
    segSide: i,
    minV: c,
    maxV: c,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), a = (l, i, c, d, u) => ({
    minV: Math.min(c, l),
    maxV: Math.max(d, l),
    maxAbsDelta: Math.max(u, i)
  }), s = (l, i, c, d, u, f, h, p) => {
    l.push({
      trendDirection: p,
      start: i,
      end: c,
      side: d,
      minValue: u,
      maxValue: f,
      maxAbsDeltaFromMean: h
    });
  };
  let o = 0;
  for (; o < e.length; ) {
    const l = e[o];
    if (!l || l.value == null || l.ghost || !l.trendUp && !l.trendDown) {
      o++;
      continue;
    }
    const i = l.trendUp ? "Up" : l.trendDown ? "Down" : void 0;
    let c = o, d = o;
    for (; d < e.length; d++) {
      const I = e[d];
      if (!I || I.value == null || I.ghost || !(i === "Up" ? I.trendUp : I.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, y = 1 / 0, g = -1 / 0, m = 0;
    for (let I = c; I <= u; I++) {
      const N = e[I];
      if (N.value == null) continue;
      const L = N.value - (N.mean ?? 0), D = Om(L);
      if (!D) {
        h !== void 0 && (s(f, h, I - 1, p, y, g, m, i), h = void 0, p = void 0, y = 1 / 0, g = -1 / 0, m = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: y, maxV: g, maxAbsDelta: m } = (() => {
          const x = n(I, D, N.value);
          return {
            segStart: x.segStart,
            segSide: x.segSide,
            minV: x.minV,
            maxV: x.maxV,
            maxAbsDelta: Math.abs(L)
          };
        })());
      else if (D !== p)
        s(f, h, I - 1, p, y, g, m, i), { segStart: h, segSide: p, minV: y, maxV: g, maxAbsDelta: m } = (() => {
          const x = n(I, D, N.value);
          return {
            segStart: x.segStart,
            segSide: x.segSide,
            minV: x.minV,
            maxV: x.maxV,
            maxAbsDelta: Math.abs(L)
          };
        })();
      else {
        const x = a(N.value, Math.abs(L), y, g, m);
        y = x.minV, g = x.maxV, m = x.maxAbsDelta;
      }
    }
    h !== void 0 && s(f, h, u, p, y, g, m, i), t.push({ trendDirection: i, start: c, end: u, segments: f }), o = u + 1;
  }
  return t;
}
function Um(e) {
  if (e === Ae.Up) return "Above";
  if (e === Ae.Down) return "Below";
}
function Wm(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function hi(e, t) {
  const n = t.strategy ?? dt.CrossingAfterFavourable, a = Um(t.metricImprovement), s = Wm(a), o = [];
  for (const l of e) {
    if (!a) {
      if (n === dt.ExtremeFavourable || n === dt.CrossingAfterFavourable) {
        const i = l.segments;
        if (i.length === 0) continue;
        let c = i[0];
        for (const d of i)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        o.push(c);
      }
      continue;
    }
    if (n === dt.FavourableSide) {
      o.push(...l.segments.filter((i) => i.side === a));
      continue;
    }
    if (n === dt.UnfavourableSide) {
      o.push(...l.segments.filter((i) => i.side === s));
      continue;
    }
    if (n === dt.CrossingAfterFavourable) {
      const i = l.segments;
      let c;
      for (let d = 0; d < i.length; d++) {
        const u = i[d];
        if (u.side === a && d > 0 && i[d - 1].side !== a) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = i.filter((u) => u.side === a);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && o.push(c);
      continue;
    }
    if (n === dt.CrossingAfterUnfavourable) {
      const i = l.segments;
      let c;
      for (let d = 0; d < i.length; d++) {
        const u = i[d];
        if (u.side === s && d > 0 && i[d - 1].side !== s) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = i.filter((u) => u.side === s);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && o.push(c);
      continue;
    }
    if (n === dt.ExtremeFavourable) {
      const i = l.segments.filter((d) => d.side === a);
      if (i.length === 0) continue;
      const c = i.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      o.push(c);
      continue;
    }
    if (n === dt.ExtremeUnfavourable) {
      const i = l.segments.filter((d) => d.side === s);
      if (i.length === 0) continue;
      const c = i.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      o.push(c);
      continue;
    }
    if (n === dt.FirstFavourable) {
      const i = l.segments.find((c) => c.side === a);
      i && o.push(i);
      continue;
    }
    if (n === dt.FirstUnfavourable) {
      const i = l.segments.find((c) => c.side === s);
      i && o.push(i);
      continue;
    }
    if (n === dt.LongestFavourable) {
      const i = l.segments.filter((d) => d.side === a);
      if (i.length === 0) continue;
      const c = i.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      o.push(c);
      continue;
    }
    if (n === dt.LongestUnfavourable) {
      const i = l.segments.filter((d) => d.side === s);
      if (i.length === 0) continue;
      const c = i.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      o.push(c);
      continue;
    }
    if (n === dt.LastFavourable) {
      const i = l.segments.filter((c) => c.side === a);
      if (i.length === 0) continue;
      o.push(i[i.length - 1]);
      continue;
    }
    if (n === dt.LastUnfavourable) {
      const i = l.segments.filter((c) => c.side === s);
      if (i.length === 0) continue;
      o.push(i[i.length - 1]);
      continue;
    }
  }
  return o;
}
var Je = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(Je || {}), Ln = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Ln || {});
function Gm(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function ar(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", s = t.enableNeutralNoJudgement ?? !0;
  return e.map((o) => {
    if (!o || o.value == null || o.ghost) return "Common";
    const { upAny: l, downAny: i } = Gm(o);
    if (l && i) return "Improvement";
    switch (o.variationIcon) {
      case we.ImprovementHigh:
      case we.ImprovementLow:
        return "Improvement";
      case we.ConcernHigh:
      case we.ConcernLow:
        return "Concern";
      case we.NeitherHigh:
      case we.NeitherLow: {
        if (a === "Ungated" && n !== Ae.Neither) {
          if (l && !i)
            return n === Ae.Up ? "Improvement" : "Concern";
          if (i && !l)
            return n === Ae.Down ? "Improvement" : "Concern";
        }
        return s ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function Vm(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let s = ar(e, {
    metricImprovement: t,
    trendVisualMode: Ln.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Ae.Neither) return s;
  const o = Math.max(0, n?.preWindow ?? 2), l = Math.max(0, n?.postWindow ?? 3), i = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= s.length) return;
    const p = s[f];
    (p === Je.Common || p === Je.NoJudgement) && (s[f] = h);
  }, d = (f) => {
    if (f == null) return null;
    const h = e.reduce((y, g) => (g.partitionId === f && typeof g.value == "number" && !g.ghost && y.push(g.value), y), []);
    return h.length ? h.reduce((y, g) => y + g, 0) / h.length : null;
  }, u = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, p) => {
    if (p === 0) return f;
    const y = e[p - 1];
    return y && h && h.partitionId !== y.partitionId && f.push(p), f;
  }, []);
  for (const f of u) {
    const h = e[f - 1], p = e[f];
    if (!h || !p)
      continue;
    let y = f - 1;
    for (; y - 1 >= 0 && e[y - 1] && e[y - 1].partitionId === h.partitionId; )
      y--;
    let g = f;
    for (; g + 1 < e.length && e[g + 1] && e[g + 1].partitionId === p.partitionId; )
      g++;
    let m = null;
    for (let S = f - 1; S >= 0; S--) {
      const C = e[S];
      if (C.partitionId !== h.partitionId) break;
      if (typeof C.mean == "number") {
        m = C.mean;
        break;
      }
    }
    let I = null;
    for (let S = f; S < e.length; S++) {
      const C = e[S];
      if (C.partitionId !== p.partitionId) break;
      if (typeof C.mean == "number") {
        I = C.mean;
        break;
      }
    }
    if (m == null && (m = d(h.partitionId ?? null)), I == null && (I = d(p.partitionId ?? null)), m == null || I == null)
      continue;
    const N = I - m, L = t === Ae.Up ? N > 0 : N < 0, D = L ? Je.Improvement : Je.Concern, x = i === "Same" ? D : L ? Je.Concern : Je.Improvement;
    for (let S = 1; S <= o; S++) {
      const C = f - S;
      if (C < y) break;
      c(C, x);
    }
    for (let S = 0; S < l; S++) {
      const C = f + S;
      if (C > g) break;
      c(C, D);
    }
  }
  return s;
}
function Wl(e) {
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
function sr(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, s = Wl(e.settings), o = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Mn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Sn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Tt.Off,
    trendSegmentationStrategy: dt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...s
  }, l = s?.trendSegmentationMode || (s?.trendFavourableSegmentation === !0 ? Tt.Always : s?.trendFavourableSegmentation === !1 ? Tt.Off : o.trendSegmentationMode), i = a.map((g, m) => ({
    rowId: m + 1,
    x: g.x,
    value: Ne(g.value) ? g.value : null,
    ghost: !!g.ghost,
    baseline: !!g.baseline,
    target: Ne(g.target) ? g.target : null
  })), c = [];
  let d = [];
  for (const g of i)
    g.baseline && d.length && (c.push(d), d = []), d.push(g);
  d.length && c.push(d);
  const u = [], f = (o.trendFavourableSegmentation || l !== Tt.Off) && !o.preferImprovementWhenConflict, h = i.filter((g) => !g.ghost && Ne(g.value)).length, p = !!o.chartLevelEligibility && h >= o.minimumPoints;
  let y = 0;
  for (const g of c) {
    y++;
    const m = g.map((x) => x.value), I = g.map((x) => x.ghost), N = Rm(
      t,
      m,
      I,
      !!o.excludeMovingRangeOutliers
    ), L = g.map((x, S) => {
      const C = !x.ghost && Ne(x.value) ? m.slice(0, S + 1).filter((b, w) => !I[w] && Ne(b)).length : 0, _ = p ? !0 : C >= o.minimumPoints;
      return {
        rowId: x.rowId,
        x: x.x,
        value: Ne(x.value) ? x.value : null,
        ghost: x.ghost,
        partitionId: y,
        pointRank: C,
        mean: (_ || p) && Ne(N.mean) ? N.mean : null,
        upperProcessLimit: _ || p ? N.upperProcessLimit : null,
        lowerProcessLimit: _ || p ? N.lowerProcessLimit : null,
        upperTwoSigma: _ || p ? N.upperTwoSigma : null,
        lowerTwoSigma: _ || p ? N.lowerTwoSigma : null,
        upperOneSigma: _ || p ? N.upperOneSigma : null,
        lowerOneSigma: _ || p ? N.lowerOneSigma : null,
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
        variationIcon: we.CommonCause
      };
    });
    for (const x of L)
      x.ghost || !Ne(x.value) || x.mean === null || (Ne(x.upperProcessLimit) && x.value > x.upperProcessLimit && (x.singlePointUp = !0), Ne(x.lowerProcessLimit) && x.value < x.lowerProcessLimit && (x.singlePointDown = !0));
    Bm(L, {
      shiftPoints: o.shiftPoints,
      trendPoints: o.trendPoints,
      twoSigmaIncludeAboveThree: !!o.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!o.enableFourOfFiveRule
    }), f && ((x) => {
      const S = x.some(
        (k) => (k.singlePointUp || k.twoSigmaUp || k.shiftUp || k.trendUp) && (k.singlePointDown || k.twoSigmaDown || k.shiftDown || k.trendDown)
      );
      if (l === Tt.Off || l === Tt.AutoWhenConflict && !S)
        return;
      const C = pi(x), _ = hi(C, {
        metricImprovement: n,
        strategy: o.trendSegmentationStrategy
      }), b = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
      for (const k of _)
        for (let M = k.start; M <= k.end; M++)
          k.trendDirection === is.Up ? b.add(M) : w.add(M);
      x.forEach((k, M) => {
        k.trendUp = b.has(M) ? k.trendUp : !1, k.trendDown = w.has(M) ? k.trendDown : !1, o.trendDominatesHighlightedWindow && (b.has(M) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : w.has(M) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
      });
    })(L);
    for (const x of L) {
      if (x.ghost || !Ne(x.value) || x.mean === null) {
        u.push(x);
        continue;
      }
      const { aligned: S, opposite: C } = ui(
        x,
        n
      );
      if (x.specialCauseImprovementValue = S ? x.value : null, x.specialCauseConcernValue = C ? x.value : null, n === Ae.Neither) {
        const _ = x.singlePointUp || x.twoSigmaUp || x.shiftUp || x.trendUp, b = x.singlePointDown || x.twoSigmaDown || x.shiftDown || x.trendDown;
        x.variationIcon = _ ? we.NeitherHigh : b ? we.NeitherLow : we.CommonCause;
      } else
        fi(x, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
      u.push(x);
    }
  }
  if (o.trendAcrossPartitions) {
    const g = u.map((m, I) => ({ idx: I, r: m })).filter(({ r: m }) => !m.ghost && Ne(m.value));
    if (g.length >= o.trendPoints)
      for (let m = 0; m <= g.length - o.trendPoints; m++) {
        const I = g.slice(m, m + o.trendPoints).map((x) => x.idx), N = I.map((x) => u[x]);
        if (!N.every((x) => Ne(x.value))) continue;
        let L = !0, D = !0;
        for (let x = 1; x < N.length && (N[x].value > N[x - 1].value || (L = !1), N[x].value < N[x - 1].value || (D = !1), !(!L && !D)); x++)
          ;
        L && I.forEach((x) => u[x].trendUp = !0), D && I.forEach((x) => u[x].trendDown = !0);
      }
  }
  if (o.trendAcrossPartitions) {
    if (f) {
      const g = u.some(
        (m) => (m.singlePointUp || m.twoSigmaUp || m.shiftUp || m.trendUp) && (m.singlePointDown || m.twoSigmaDown || m.shiftDown || m.trendDown)
      );
      if (l === Tt.Always || l === Tt.AutoWhenConflict && g) {
        const m = pi(u), I = hi(m, { metricImprovement: n, strategy: o.trendSegmentationStrategy }), N = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        for (const D of I)
          for (let x = D.start; x <= D.end; x++)
            D.trendDirection === is.Up ? N.add(x) : L.add(x);
        u.forEach((D, x) => {
          D.trendUp = N.has(x) ? D.trendUp : !1, D.trendDown = L.has(x) ? D.trendDown : !1, o.trendDominatesHighlightedWindow && (N.has(x) ? (D.singlePointDown = !1, D.twoSigmaDown = !1, D.shiftDown = !1) : L.has(x) && (D.singlePointUp = !1, D.twoSigmaUp = !1, D.shiftUp = !1));
        });
      }
    }
    for (const g of u) {
      if (g.ghost || !Ne(g.value) || g.mean === null || n === Ae.Neither) continue;
      const { aligned: m, opposite: I } = ui(g, n);
      g.specialCauseImprovementValue = m ? g.value : null, g.specialCauseConcernValue = I ? g.value : null, fi(g, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function Xs(e, t) {
  const n = sr(e), a = ar(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Ln.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), s = t?.boundaryWindows;
  if (!s || s.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const o = s.directionOverride ?? e.metricImprovement, l = Vm(n.rows, o, s), i = a.map((c, d) => {
    const u = l[d];
    if (c === Je.Common || c === Je.NoJudgement) {
      if (u === Je.Improvement) return Je.Improvement;
      if (u === Je.Concern) return Je.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: i };
}
var Gl = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(Gl || {});
function Ym(e, t, n) {
  const a = n?.trendVisualMode ?? Ln.Ungated, s = n?.enableNeutralNoJudgement ?? !0, o = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
  let l;
  switch (t) {
    case "recalc-crossing-shift": {
      l = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        boundaryIndices: o
      };
      break;
    }
    case "recalc-crossing-trend": {
      l = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 5,
        prePolarity: "Same",
        boundaryIndices: o
      };
      break;
    }
    case "recalc-crossing-two-sigma": {
      l = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 1,
        prePolarity: "Same",
        boundaryIndices: o
      };
      break;
    }
    case "baselines-recalculated":
      l = {
        mode: "RecalcCrossing",
        preWindow: 0,
        postWindow: 0,
        prePolarity: "Same",
        directionOverride: e.metricImprovement,
        boundaryIndices: o
      };
      break;
    case "recalculations-recalculated":
    case "none":
    default:
      l = void 0;
  }
  const { rows: i, visuals: c } = Xs(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: s,
    boundaryWindows: l
  });
  let d = c.slice(), u = o.length ? o[0] : -1;
  if (u < 0) {
    for (let f = 1; f < i.length; f++)
      if (i[f].partitionId !== i[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = Je.Common), { rows: i, visuals: d };
}
const Vl = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: Mn.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Zm(e) {
  return { ...Vl, ...e ?? {} };
}
var ot = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ot || {}), un = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(un || {}), Kn = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(Kn || {});
const ls = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const l = e;
    let i;
    l.improvementDirection !== void 0 ? i = l.improvementDirection === Ae.Up ? rt.HigherIsBetter : l.improvementDirection === Ae.Down ? rt.LowerIsBetter : rt.ContextDependent : l.polarity && (i = l.polarity);
    let c;
    const d = l.variationIcon;
    if (d === Te.Improvement || d === Te.Concern || d === Te.Neither || d === Te.Suppressed)
      d === Te.Improvement ? c = Se.SpecialCauseImproving : d === Te.Concern ? c = Se.SpecialCauseDeteriorating : d === Te.Neither ? c = Se.CommonCause : c = Se.SpecialCauseNoJudgement;
    else
      switch (l.variationIcon) {
        case we.ImprovementHigh:
        case we.ImprovementLow:
          c = Se.SpecialCauseImproving;
          break;
        case we.ConcernHigh:
        case we.ConcernLow:
          c = Se.SpecialCauseDeteriorating;
          break;
        case we.NeitherHigh:
        case we.NeitherLow:
          c = l.specialCauseNeutral ? Se.SpecialCauseNoJudgement : Se.CommonCause;
          break;
        case we.CommonCause:
          c = Se.CommonCause;
          break;
        default:
          c = Se.SpecialCauseNoJudgement;
          break;
      }
    let u = l.trend;
    return u || (c === Se.SpecialCauseImproving ? u = i === rt.LowerIsBetter ? Ie.Lower : Ie.Higher : c === Se.SpecialCauseDeteriorating ? u = i === rt.LowerIsBetter ? Ie.Higher : Ie.Lower : c === Se.SpecialCauseNoJudgement ? l.highSideSignal && !l.lowSideSignal ? u = Ie.Higher : l.lowSideSignal && !l.highSideSignal ? u = Ie.Lower : u = Ie.Higher : u = Ie.Higher), { state: c, direction: u, polarity: i ?? rt.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const l = e;
    let i = l.trend;
    return !i && (l.state === Se.SpecialCauseImproving || l.state === Se.SpecialCauseDeteriorating) && l.polarity && (l.state === Se.SpecialCauseImproving ? i = l.polarity === rt.LowerIsBetter ? Ie.Lower : Ie.Higher : i = l.polarity === rt.LowerIsBetter ? Ie.Higher : Ie.Lower), i || (l.state === Se.SpecialCauseImproving ? i = Ie.Higher : l.state === Se.SpecialCauseDeteriorating ? i = Ie.Lower : i = Ie.Higher), {
      state: l.state,
      direction: i,
      polarity: l.polarity ?? rt.ContextDependent
    };
  }
  const n = e;
  t();
  const s = {
    [xt.Improving]: Se.SpecialCauseImproving,
    [xt.Deteriorating]: Se.SpecialCauseDeteriorating,
    [xt.No_Judgement]: Se.SpecialCauseNoJudgement,
    [xt.None]: Se.CommonCause
  }[n.judgement];
  let o;
  return n.judgement === xt.Improving ? o = n.polarity === rt.LowerIsBetter ? Ie.Lower : Ie.Higher : n.judgement === xt.Deteriorating ? o = n.polarity === rt.LowerIsBetter ? Ie.Higher : Ie.Lower : o = n.trend ?? Ie.Higher, { state: s, direction: o, polarity: n.polarity };
};
function Yl(e, t) {
  const { state: n, direction: a, polarity: s } = ls(e), o = qs(n), l = a === Ie.Higher ? "above" : "below", i = a === Ie.Higher ? "upwards" : "downwards", c = (() => {
    switch (s) {
      case rt.HigherIsBetter:
        return "For this measure, higher values are better.";
      case rt.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (o) {
        case xt.Improving:
          return `Special cause improvement: recent data show a sustained run ${l} the mean (unlikely due to random variation).`;
        case xt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${l} the mean (unlikely due to random variation).`;
        case xt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${i}.`;
        case xt.None:
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
const Wa = (e, t, n, a, s, o) => /* @__PURE__ */ r.jsxs("defs", { children: [
  a && /* @__PURE__ */ r.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  s && /* @__PURE__ */ r.jsx("linearGradient", { id: n, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: o.map((l) => /* @__PURE__ */ r.jsx(
    "stop",
    {
      offset: l.offset,
      stopColor: e,
      stopOpacity: parseFloat(l.opacity)
    },
    l.offset
  )) })
] }), Qs = ({
  data: e,
  precomputed: t,
  improvementDirection: n,
  size: a = 44,
  ariaLabel: s,
  showLetter: o = !0,
  dropShadow: l = !0,
  gradientWash: i = !1,
  variant: c = un.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = Kn.Polarity,
  letterOverride: f,
  ...h
}) => {
  const p = xr(), y = xr(), {
    start: g,
    mid: m,
    end: I,
    triStart: N,
    triMid: L,
    triEnd: D
  } = ba(), { state: x, direction: S, polarity: C, ariaInput: _ } = je(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const J = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: n ?? Ae.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Se.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: X, direction: pe, polarity: ne } = ls(J);
      return { state: X, direction: pe, polarity: ne, ariaInput: J };
    }
    const { state: ee, direction: Y, polarity: K } = ls(e);
    return { state: ee, direction: Y, polarity: K, ariaInput: e };
  }, [e, t, n]), b = je(() => Bl(x), [x]), w = je(() => qs(x), [x]), k = w === xt.Improving || w === xt.Deteriorating;
  let M = "";
  o && k && (u === Kn.Polarity ? C === rt.HigherIsBetter ? M = "H" : C === rt.LowerIsBetter ? M = "L" : M = "" : M = S === Ie.Higher ? "H" : "L"), f !== void 0 && (M = f);
  const F = x !== Se.CommonCause, E = x === Se.SpecialCauseNoJudgement, A = ft("common-cause", "#A6A6A6"), $ = F ? b.hex : A, B = je(
    () => Em(x, S),
    [x, S]
  ), se = s || `${b.label}${M ? S === Ie.Higher ? " – Higher" : " – Lower" : ""}`, V = Yl(_);
  if (c === un.TriangleWithRun) {
    const J = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], X = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let pe = null;
    x === Se.SpecialCauseImproving || x === Se.SpecialCauseDeteriorating ? pe = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (S === Ie.Higher ? J : X).map((oe) => oe.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 6,
        transform: S === Ie.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : x === Se.SpecialCauseNoJudgement && (pe = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: S === Ie.Higher ? J.map((oe) => oe.join(",")).join(" ") : X.map((oe) => oe.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 6,
        transform: S === Ie.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const ne = Math.max(0, Math.min(5, Math.floor(d || 0))), re = x === Se.CommonCause ? 160 : S === Ie.Higher ? 220 : 70, Q = 10, te = 26, ce = 150 - 2 * te, W = x === Se.CommonCause ? A : Ol(x), ie = Array.from({ length: 5 }).map((oe, fe) => {
      const Pe = (x === Se.SpecialCauseImproving || x === Se.SpecialCauseDeteriorating) && fe >= 5 - ne ? W : A;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: ce + fe * te,
          cy: re,
          r: Q,
          fill: Pe,
          stroke: Pe,
          strokeWidth: 1
        },
        fe
      );
    }), ae = Wa(
      b.hex,
      p,
      y,
      l,
      i,
      [
        { offset: "0%", opacity: N },
        { offset: "75%", opacity: L },
        { offset: "100%", opacity: D }
      ]
    ), he = x === Se.CommonCause || S === Ie.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": se,
        "aria-description": V,
        ...h,
        children: [
          ae,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: i ? `url(#${y})` : "#ffffff",
              ...l ? { filter: `url(#${p})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: b.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: he, children: [
            pe,
            M && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: S === Ie.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: M
              }
            ),
            ie
          ] })
        ]
      }
    );
  }
  if (c === un.Triangle) {
    const J = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], X = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], pe = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let ne = null;
    x === Se.SpecialCauseImproving || x === Se.SpecialCauseDeteriorating ? ne = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (S === Ie.Higher ? J : X).map((Q) => Q.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 8,
        transform: S === Ie.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : x === Se.SpecialCauseNoJudgement ? ne = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: S === Ie.Higher ? J.map((Q) => Q.join(",")).join(" ") : X.map((Q) => Q.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 8,
        transform: S === Ie.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : x === Se.CommonCause && (ne = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: pe[0][0],
        y1: pe[0][1],
        x2: pe[1][0],
        y2: pe[1][1],
        stroke: b.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const re = Wa(
      b.hex,
      p,
      y,
      l,
      i,
      [
        { offset: "0%", opacity: N },
        { offset: "65%", opacity: L },
        { offset: "100%", opacity: D }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": se,
        "aria-description": V,
        ...h,
        children: [
          re,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: i ? `url(#${y})` : "#ffffff",
              ...l ? { filter: `url(#${p})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: b.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          ne,
          M && (x === Se.SpecialCauseImproving || x === Se.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: S === Ie.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: M
            }
          )
        ]
      }
    );
  }
  const R = Wa(
    b.hex,
    p,
    y,
    l,
    i,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: m },
      { offset: "100%", opacity: I }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: a,
      height: a,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": se,
      "aria-description": V,
      ...h,
      children: [
        R,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: i ? `url(#${y})` : "#ffffff",
            ...l ? { filter: `url(#${p})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: b.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        M && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: b.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: S === Ie.Lower ? "340" : "155", children: M })
          }
        ),
        E ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: b.hex,
            ...S === Ie.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          B.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: A,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${B.map((ee) => `${ee.cx} ${ee.cy}`).join(" L ")}`
            }
          ),
          B.map((ee, Y) => {
            const J = Y >= B.length - 2 && F ? $ : A, X = J;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: X,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: J,
                cx: ee.cx,
                cy: ee.cy,
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
Qs.displayName = "SPCVariationIcon";
const Jm = {
  [nt.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [nt.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [nt.Md]: { height: 44, pointR: 4, stroke: 1 },
  [nt.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [nt.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [nt.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function qm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function Xm(e) {
  const t = e.filter((l) => typeof l.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((l, i) => l + i.value, 0) / t.length, a = [...e].reverse().findIndex((l) => l.value != null), s = a >= 0 ? e.length - 1 - a : null, o = s != null ? e[s].value : null;
  return { mean: n, latestValue: o, latestIndex: s };
}
const Qm = (e) => Ol(e), Zl = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: s = !0,
  showLimitBand: o = !0,
  showInnerBands: l = !1,
  showLatestMarker: i = !0,
  showStateGlyph: c = !0,
  variationState: d,
  metricImprovement: u,
  gradientWash: f = !1,
  size: h = nt.Sm,
  ariaLabel: p,
  className: y,
  onPointClick: g,
  maxPoints: m,
  thinningStrategy: I = "stride",
  colorPointsBySignal: N = !0,
  centerLine: L,
  controlLimits: D,
  sigmaBands: x,
  pointSignals: S,
  pointNeutralSpecialCause: C,
  visualCategories: _
}) => {
  const b = u, w = je(
    () => qm(e, t),
    [e, t]
  ), k = je(() => Xm(w), [w]), M = (() => {
    if (typeof h == "string")
      switch (h) {
        case "xs":
          return nt.Xs;
        case "sm":
          return nt.Sm;
        case "md":
          return nt.Md;
        case "lg":
          return nt.Lg;
        case "xl":
          return nt.Xl;
        case "full":
          return nt.Full;
        default:
          return nt.Sm;
      }
    return h ?? nt.Sm;
  })(), F = Jm[M], E = Math.max(w.length * 6, 60), A = E, $ = M === nt.Full ? "100%" : E, B = F.height, se = je(() => {
    if (M === nt.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${A} / ${B}`,
        display: "block"
      };
  }, [M, A, B]), V = Math.max(6, F.pointR + 3), R = Math.max(4, F.pointR + 3), ee = je(() => (e?.length ?? 0) - (w?.length ?? 0), [e?.length, w?.length]), Y = L ?? k.mean ?? null, K = je(() => {
    if (!s) return null;
    if (D) return D;
    const H = w.filter((j) => typeof j.value == "number");
    if (!H.length || Y == null) return null;
    const v = H.map((j) => j.value), T = Math.min(...v), O = Math.max(...v);
    return { lower: T, upper: O };
  }, [s, D?.lower, D?.upper, w, Y]), X = je(() => ({
    state: d ?? Se.CommonCause,
    firedRules: [],
    mean: Y ?? null,
    stdDev: null,
    side: k.latestValue != null && Y != null ? k.latestValue > Y ? "above" : "below" : void 0
  }), [d, Y, k.latestValue]).state, pe = Qm(X), ne = (H) => {
    const v = w.filter((P) => P.value != null);
    if (!v.length) return B / 2;
    const T = v.map((P) => P.value);
    K && (K.lower != null && T.push(K.lower), K.upper != null && T.push(K.upper));
    const O = Math.min(...T), j = Math.max(...T);
    return O === j ? B / 2 : B - (H - O) / (j - O) * (B - R * 2) - R;
  }, re = je(() => {
    if (!m || w.length <= m)
      return w.map((z, G) => G);
    if (I === "stride") {
      const z = Math.max(2, m), G = (w.length - 1) / (z - 1), Z = /* @__PURE__ */ new Set();
      for (let q = 0; q < z; q++) Z.add(Math.round(q * G));
      return Z.add(w.length - 1), Array.from(Z).sort((q, de) => q - de);
    }
    const H = w.map((z, G) => ({ i: G, v: z.value }));
    function v(z, G, Z) {
      const q = z.i, de = z.v ?? 0, le = G.i, ue = G.v ?? 0, ye = Z.i, ge = Z.v ?? 0, Le = Math.abs((ge - ue) * q - (ye - le) * de + ye * ue - ge * le), Me = Math.hypot(ge - ue, ye - le);
      return Me === 0 ? 0 : Le / Me;
    }
    function T(z, G) {
      if (z.length <= 2) return z;
      let Z = -1, q = -1;
      for (let de = 1; de < z.length - 1; de++) {
        const le = v(z[de], z[0], z[z.length - 1]);
        le > Z && (Z = le, q = de);
      }
      if (Z > G) {
        const de = T(z.slice(0, q + 1), G), le = T(z.slice(q), G);
        return [...de.slice(0, -1), ...le];
      }
      return [z[0], z[z.length - 1]];
    }
    let O = 0.1, j = H;
    for (let z = 0; z < 8 && (j = T(H, O), !(j.length <= m)); z++)
      O *= 1.6;
    const P = new Set(j.map((z) => z.i));
    return P.add(0), P.add(w.length - 1), Array.from(P).sort((z, G) => z - G);
  }, [w, m, I]), Q = je(
    () => re.map((H) => w[H]),
    [re, w]
  ), te = je(() => Math.max(1, A - V * 2), [A, V]), ce = je(() => {
    const H = Math.max(1, Q.length - 1);
    return (v) => v / H * te + V;
  }, [Q.length, te, V]), W = je(() => {
    let H = "";
    return Q.forEach((v, T) => {
      if (v.value == null) return;
      const O = ne(v.value), j = ce(T);
      H += H ? ` L ${j} ${O}` : `M ${j} ${O}`;
    }), H;
  }, [Q, ce]), ie = k.latestIndex ?? -1, ae = K, he = ba(), oe = je(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [w.length, f]
  ), fe = w.length >= (n || 0), De = p || "SPC sparkline", Pe = (() => {
    if (!X) return;
    const H = b === Ae.Up ? rt.HigherIsBetter : b === Ae.Down ? rt.LowerIsBetter : rt.ContextDependent, v = {
      variationIcon: X === Se.SpecialCauseImproving ? Te.Improvement : X === Se.SpecialCauseDeteriorating ? Te.Concern : X === Se.SpecialCauseNoJudgement ? Te.Suppressed : Te.Neither,
      trend: b === Ae.Up ? Ie.Higher : Ie.Lower,
      polarity: H
    };
    try {
      return Yl(v);
    } catch {
      return;
    }
  })(), _e = je(() => {
    if (!fe) return 10;
    const H = [...w].reverse().filter((T) => T.value != null).slice(0, 6).map((T) => ne(T.value));
    return H.length && H.reduce((T, O) => T + O, 0) / H.length < B / 2 ? B : 10;
  }, [w, fe, B]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": De,
      "aria-description": Pe,
      width: M === nt.Full ? void 0 : $,
      height: M === nt.Full ? void 0 : B,
      style: se,
      className: y,
      viewBox: `0 0 ${A} ${B}`,
      children: [
        f && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: oe, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: pe,
                stopOpacity: Number(he.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: pe,
                stopOpacity: Number(he.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: pe,
                stopOpacity: Number(he.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: A,
              height: B,
              fill: `url(#${oe})`
            }
          )
        ] }),
        ae && ae.lower != null && ae.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          o && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                ne(ae.upper),
                ne(ae.lower)
              ),
              width: A,
              height: Math.abs(
                ne(ae.upper) - ne(ae.lower)
              ),
              fill: pe,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: A,
              y1: ne(ae.lower),
              y2: ne(ae.lower),
              stroke: pe,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: A,
              y1: ne(ae.upper),
              y2: ne(ae.upper),
              stroke: pe,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          x && l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            x.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: A,
                y1: ne(x.lowerTwo),
                y2: ne(x.lowerTwo),
                stroke: pe,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: A,
                y1: ne(x.lowerOne),
                y2: ne(x.lowerOne),
                stroke: pe,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: A,
                y1: ne(x.upperOne),
                y2: ne(x.upperOne),
                stroke: pe,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: A,
                y1: ne(x.upperTwo),
                y2: ne(x.upperTwo),
                stroke: pe,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && Y != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: A,
            y1: ne(Y),
            y2: ne(Y),
            stroke: sn(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: W,
            fill: "none",
            stroke: sn(),
            strokeWidth: F.stroke,
            strokeLinecap: "round"
          }
        ),
        re.map((H, v) => {
          const T = w[H];
          if (!T || T.value == null) return null;
          const O = ne(T.value), j = ce(v), z = (H === ie && i ? F.pointR + 1 : F.pointR) - 0.5;
          let G = sn();
          if (N) {
            const Z = _?.[ee + H];
            if (Z != null)
              Z === Je.Improvement ? G = pr(Te.Improvement) : Z === Je.Concern ? G = pr(Te.Concern) : Z === Je.NoJudgement ? G = ft("no-judgement", "#490092") : G = sn();
            else {
              const q = S?.[ee + H];
              q === Te.Improvement || q === Te.Concern ? G = pr(q) : G = C?.[ee + H] ? ft("no-judgement", "#490092") : sn();
            }
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: j,
              cy: O,
              r: z,
              fill: G,
              stroke: "none",
              strokeWidth: 0,
              onClick: g ? () => g(H, T) : void 0,
              style: g ? { cursor: "pointer" } : void 0,
              "data-index": H,
              "data-signal-colour": N ? G : void 0
            },
            H
          );
        }),
        c && fe && X && X !== Se.CommonCause && b && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: A - 4,
            y: _e,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: pe,
            "data-glyph-pos": _e < B / 2 ? "top" : "bottom",
            children: b === Ae.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Zl.displayName = "SPCSpark";
function Fr(e) {
  switch (e) {
    case we.ImprovementHigh:
    case we.ImprovementLow:
      return Se.SpecialCauseImproving;
    case we.ConcernHigh:
    case we.ConcernLow:
      return Se.SpecialCauseDeteriorating;
    case we.NeitherHigh:
    case we.NeitherLow:
      return Se.SpecialCauseNoJudgement;
    case we.CommonCause:
      return Se.CommonCause;
    default:
      return null;
  }
}
function Jl(e) {
  return e === we.ImprovementHigh || e === we.ImprovementLow || e === we.ConcernHigh || e === we.ConcernLow || e === we.NeitherHigh || e === we.NeitherLow;
}
function Km({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [s, o] = U.useState(""), l = U.useRef("");
  return U.useEffect(() => {
    if (!t) {
      l.current !== "" && (l.current = "", o(""));
      return;
    }
    const i = e.length;
    if (!i) {
      const f = "Diagnostics: no warnings.";
      f !== l.current && (l.current = f, o(f));
      return;
    }
    const c = {
      error: e.filter((f) => f.severity === jt.Error).length,
      warning: e.filter((f) => f.severity === jt.Warning).length,
      info: e.filter((f) => f.severity === jt.Info).length
    }, d = [];
    c.error && d.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && d.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && d.push(`${c.info} info`);
    const u = `Diagnostics updated: ${i} warning${i === 1 ? "" : "s"} (${d.join(", ")}).`;
    u !== l.current && (l.current = u, o(u));
  }, [t, e]), t ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    s && /* @__PURE__ */ r.jsx(
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
        children: s
      }
    ),
    e.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warnings", role: "region", "aria-label": "SPC diagnostics", children: [
      /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
      /* @__PURE__ */ r.jsx(
        Yt,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((i) => {
            let c = "grey";
            return i.severity === jt.Error ? c = "red" : i.severity === jt.Warning ? c = "orange" : i.severity === jt.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(Ze, { color: c, text: (i.severity ? String(i.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: i.category ? /* @__PURE__ */ r.jsx(Ze, { color: "purple", text: n(i.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(Ze, { color: "grey", text: a(i.code) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
              },
              {
                node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                  /* @__PURE__ */ r.jsx("span", { children: i.message }),
                  i.context && Object.keys(i.context).length > 0 && /* @__PURE__ */ r.jsxs("details", { className: "fdp-spc-chart__warning-context", style: { marginTop: 4 }, children: [
                    /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                    /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(i.context, null, 2) })
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
function eg({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const Ks = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: s,
  gradientWash: o = !1,
  letterOverride: l,
  showTrendLines: i = !0,
  ...c
}) => {
  const d = xr(), u = xr(), { start: f, mid: h, end: p } = ba(), y = s || Lm[e], g = (l || $m[e]).slice(0, 2), m = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": m,
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
          o && /* @__PURE__ */ r.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: y, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: y, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(p) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${u})` : "#ffffff",
            ...a ? { filter: `url(#${d})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: y,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: g })
          }
        ),
        i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === cn.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: y,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === cn.Uncertain ? /* @__PURE__ */ r.jsx(
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
              stroke: y,
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
              stroke: y,
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
Ks.displayName = "SPCAssuranceIcon";
const tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: cn,
  Direction: Ie,
  MetricPolarity: rt,
  SPCAssuranceIcon: Ks,
  SPCVariationIcon: Qs,
  VariationJudgement: xt,
  VariationState: Se,
  getVariationColour: Bl,
  getVariationTrend: qs
}, Symbol.toStringTag, { value: "Module" }));
function ng(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: s, variant: o, runLength: l } = e;
  if (!t || !n?.length) return null;
  const i = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (i.filter(
    (x) => !x.data.ghost && x.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let x = i.length - 1; x >= 0; x--) {
    const S = i[x];
    if (S && S.data.value != null && !S.data.ghost) {
      u = x;
      break;
    }
  }
  if (u === -1) return null;
  const f = i[u], h = f.classification?.variation, p = f.classification?.assurance, y = h === Te.Neither && !!f.classification?.neutralSpecialCauseValue, g = p === tn.Pass ? cn.Pass : p === tn.Fail ? cn.Fail : cn.Uncertain;
  let m;
  if (h === Te.Suppressed) {
    const x = !!f.rules.singlePoint.up, S = !!f.rules.singlePoint.down;
    s === en.Up ? x ? m = Ie.Higher : S && (m = Ie.Lower) : s === en.Down ? S ? m = Ie.Lower : x && (m = Ie.Higher) : m = Ie.Higher;
  } else if (h === Te.Neither && y) {
    const x = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, S = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    x && !S ? m = Ie.Higher : S && !x ? m = Ie.Lower : m = Ie.Higher;
  }
  const I = 80, N = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, L = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let D = we.CommonCause;
  return h === Te.Improvement ? D = we.ImprovementHigh : h === Te.Concern ? D = we.ConcernHigh : h === Te.Neither && (y ? m === Ie.Lower || L && !N ? D = we.NeitherLow : D = we.NeitherHigh : D = we.CommonCause), /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(h),
            "data-trend": m ? String(m) : "none",
            style: { width: I, height: I },
            children: /* @__PURE__ */ r.jsx(
              Qs,
              {
                dropShadow: !1,
                data: {
                  variationIcon: D,
                  improvementDirection: s,
                  specialCauseNeutral: y,
                  highSideSignal: N,
                  lowSideSignal: L,
                  ...m ? { trend: m } : {}
                },
                letterMode: s === en.Neither ? Kn.Direction : Kn.Polarity,
                size: I,
                variant: o,
                runLength: o === un.TriangleWithRun ? l : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(p),
            style: { width: I, height: I },
            children: /* @__PURE__ */ r.jsx(
              Ks,
              {
                status: g,
                size: I,
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
const ql = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: l = !0,
  showTrendGatingExplanation: i = !0
}) => {
  const c = Zt(), d = nn(), [u, f] = U.useState(null), [h, p] = U.useState(!1), y = U.useRef(null);
  U.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), y.current && (cancelAnimationFrame(y.current), y.current = null)), !c.focused && !h) {
        const _e = requestAnimationFrame(() => {
          f(null), y.current = null;
        });
        y.current = _e;
      }
      return () => {
        y.current && (cancelAnimationFrame(y.current), y.current = null);
      };
    }
  }, [c, c?.focused, h]);
  const g = c && (c.focused || (h ? u : null) || u), [m, I] = U.useState(!1);
  U.useEffect(() => {
    const _e = requestAnimationFrame(() => I(!0));
    return () => cancelAnimationFrame(_e);
  }, [g?.index]);
  const N = d?.innerWidth ?? 0, L = d?.innerHeight ?? 0, D = g ? Math.min(Math.max(g.clientX, 0), N) : 0, x = g ? Math.min(Math.max(g.clientY, 0), L) : 0, S = d?.ref?.current || void 0;
  if (!g)
    return null;
  const C = e?.[g.index], b = ma(
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
  ).map((_e) => ({ id: _e, label: jn[_e].tooltip })), w = g.x instanceof Date ? g.x : new Date(g.x), k = o ? o(w) : w.toDateString(), M = s ? `${s}` : "", F = a || M ? `${g.y}${M ? "" + M : " "}${a ? " " + a : ""}` : `${g.y}`, E = ga(C?.classification?.variation), A = Fl(C?.classification?.assurance), $ = Dm(
    t.mean ?? null,
    t.sigma,
    g.y
  ), B = n ? n(g.index, { x: g.x, y: g.y }) : void 0, se = E || A || $, V = C?.rules.trend.up || C?.rules.trend.down, R = C?.classification?.variation === Te.Neither && V, ee = i && R ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, Y = b.length > 0, K = C && "primeDirection" in C ? C.primeDirection : void 0, J = C && "primeRuleId" in C ? C.primeRuleId : void 0, X = l && C?.classification?.variation === Te.Neither && Y, pe = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ne = Rl(C?.classification?.variation), re = 6.2, te = [
    B || "",
    `${k} • ${F}`
  ].filter(Boolean).reduce(
    (_e, H) => Math.max(_e, H.length * re + 32),
    0
  ), ce = 200, W = 440, ie = Math.min(W, Math.max(ce, te));
  let ae = D + 12, oe = (d.margin?.top ?? 0) + x + 16;
  ae + ie > N && (ae = D - -60 - ie), ae < 0 && (ae = Math.max(0, N - ie));
  const fe = g ? `spc-tooltip-${g.index}` : "spc-tooltip", De = typeof g.index == "number" ? g.index : NaN, Pe = S ? Yc(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: fe,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (m ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ae,
          top: oe,
          width: ie,
          maxWidth: W,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": m ? "false" : "true",
        "data-floating": !0,
        "data-placement": ae + ie + 12 > N ? "left" : "right",
        onPointerEnter: () => {
          p(!0), y.current && (cancelAnimationFrame(y.current), y.current = null);
        },
        onPointerLeave: () => {
          if (p(!1), !c?.focused) {
            const _e = requestAnimationFrame(() => {
              f(null), y.current = null;
            });
            y.current = _e;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              De
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: k })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: F })
          ] }),
          se && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: E?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : E?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : X ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : E ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          A && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const _e = A.toLowerCase(), v = !(_e.includes("not met") || _e.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(_e);
              return /* @__PURE__ */ r.jsx(
                Ze,
                {
                  text: A,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${v ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${A}`
                }
              );
            })() })
          ] }),
          $ && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: (() => {
                  const _e = $.toLowerCase();
                  return _e.startsWith("within 1") ? "≤1σ" : _e.startsWith("1–2") ? "1–2σ" : _e.startsWith("2–3") ? "2–3σ" : _e.startsWith(">3") ? ">3σ" : $;
                })(),
                color: $.includes(">3") ? "orange" : $.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${$}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          ee && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: ee })
          ] }),
          Y && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: b.map(({ id: _e, label: H }) => {
                  const v = String(_e), O = v === Qn.TrendIncreasing || v === Qn.TrendDecreasing ? "fdp-spc-tag--trend" : X ? "fdp-spc-tag--no-judgement" : E ? E.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : E.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Ze,
                    {
                      text: H,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${O}`,
                      "data-rule-id": v
                    },
                    v
                  );
                })
              }
            ),
            K && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const _e = X ? "fdp-spc-tag--no-judgement" : E ? E.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : E.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", H = `${K}${J ? ` (${J})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Ze,
                  {
                    text: H,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${_e}`,
                    "aria-label": `Prime direction ${K}${J ? ` via ${J}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    S
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
            cx: D,
            cy: x,
            r: 7,
            fill: "none",
            stroke: pe,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: D,
            cy: x,
            r: 5,
            fill: "#000",
            stroke: pe,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: D,
            cy: x,
            r: 2.5,
            fill: ne,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Pe
      ]
    }
  );
}, rg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const s = Zt(), o = s?.focused ?? null, l = o?.index ?? null, i = typeof l == "number" && e ? e[l] : null, c = U.useMemo(
    () => i ? ma({
      specialCauseSinglePointUp: !!i.rules.singlePoint.up,
      specialCauseSinglePointDown: !!i.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!i.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!i.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!i.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!i.rules.fourOfFive.down,
      specialCauseShiftUp: !!i.rules.shift.up,
      specialCauseShiftDown: !!i.rules.shift.down,
      specialCauseTrendUp: !!i.rules.trend.up,
      specialCauseTrendDown: !!i.rules.trend.down
    }) : [],
    [i]
  ), d = U.useMemo(
    () => Array.from(
      new Set(c.map((g) => jn[g]?.narration).filter(Boolean))
    ),
    [c]
  ), u = i ? ga(i.classification?.variation) : null, f = i ? Fl(i.classification?.assurance) : null, h = c.length > 0, p = i ? i.classification?.variation === Te.Neither && h : !1, y = U.useRef(null);
  return U.useEffect(() => {
    if (!a || !o || i == null) return;
    const g = `${o.seriesId}:${o.index}`;
    if (y.current !== g) {
      y.current = g;
      try {
        a({
          index: o.index,
          x: o.x,
          y: o.y,
          row: i,
          rules: c
        });
      } catch {
      }
    }
  }, [o?.seriesId, o?.index, o?.x, o?.y, i, c, a]), /* @__PURE__ */ r.jsxs(
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
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !s, children: s && /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ r.jsx(
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
                /* @__PURE__ */ r.jsx(
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
        !i || !o ? /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ r.jsxs("span", { children: [
                  /* @__PURE__ */ r.jsx("strong", { children: "Point:" }),
                  " ",
                  o.index + 1
                ] }),
                /* @__PURE__ */ r.jsxs("span", { children: [
                  /* @__PURE__ */ r.jsx("strong", { children: "Value:" }),
                  " ",
                  o.y,
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
                      Ze,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const g = f.toLowerCase(), I = !(g.includes("not met") || g.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(g);
                      return /* @__PURE__ */ r.jsx(
                        Ze,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${I ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                children: c.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : c.map((g) => {
                  const m = String(g), N = m === Qn.TrendIncreasing || m === Qn.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", L = jn[g]?.tooltip || m;
                  return /* @__PURE__ */ r.jsx(
                    Ze,
                    {
                      text: L,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${N}`,
                      "data-rule-id": m,
                      title: jn[g]?.tooltip
                    },
                    m
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
function ag(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let o = 1; o < n.length - 1; o++)
      n[o] === ot.Common && n[o - 1] === n[o + 1] && n[o - 1] !== ot.Common && (n[o] = n[o - 1]);
    let s = 0;
    for (; s < n.length; ) {
      const o = n[s];
      let l = s + 1;
      for (; l < n.length && n[l] === o; ) l++;
      l - s === 1 && o !== ot.Common && (n[s] = ot.Common), s = l;
    }
  }
  const a = [];
  if (n.length) {
    let s = 0;
    for (let o = 1; o <= n.length; o++)
      if (o === n.length || n[o] !== n[s]) {
        const l = n[s], i = o - 1, c = i - s + 1;
        (l === ot.Common || c >= 2) && a.push({ start: s, end: i, category: l }), s = o;
      }
  }
  return a;
}
var Un = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Un || {}), Xl = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(Xl || {});
function sg(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: s,
    a11y: o,
    visualsEngine: l,
    meta: i,
    data: c,
    ariaLabel: d,
    height: u,
    showZones: f,
    showPoints: h,
    announceFocus: p,
    className: y,
    unit: g,
    targets: m,
    baselines: I,
    ghosts: N,
    settings: L,
    chartType: D,
    metricImprovement: x,
    gradientSequences: S,
    sequenceTransition: C,
    processLineWidth: _,
    showPartitionMarkers: b,
    showWarningsPanel: w,
    warningsFilter: k,
    enableNeutralNoJudgement: M,
    showTrendGatingExplanation: F,
    trendVisualMode: E,
    alwaysShowZeroY: A,
    alwaysShowHundredY: $,
    percentScale: B,
    showTrendStartMarkers: se,
    showFirstFavourableCrossMarkers: V,
    showTrendBridgeOverlay: R,
    showSignalsInspector: ee,
    onSignalFocus: Y,
    showIcons: K,
    showEmbeddedIcon: J,
    embeddedIconVariant: X,
    embeddedIconRunLength: pe,
    showFocusIndicator: ne,
    visualsScenario: re,
    visualsEngineSettings: Q,
    source: te,
    narrationContext: ce,
    highlightOutOfControl: W,
    precomputed: ie
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (m !== void 0 || I !== void 0 || N !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && L !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !s && (u !== void 0 || y !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !o && (d !== void 0 || p !== void 0 || ce !== void 0 || g !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !l && (re !== void 0 || Q !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && W !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !i && te !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const ae = n?.data ?? c ?? [], he = n?.targets ?? m, oe = n?.baselines ?? I, fe = n?.ghosts ?? N, De = a?.chartType ?? D ?? Al.XmR, Pe = a?.metricImprovement ?? x ?? en.Neither, _e = a?.settings ?? L, H = a?.autoRecalc, v = t?.axes?.alwaysShowZeroY ?? A ?? !1, T = t?.axes?.alwaysShowHundredY ?? $ ?? !1, O = t?.axes?.percentScale ?? B ?? !1, j = t?.visuals?.gradientSequences ?? S ?? !0, P = t?.visuals?.sequenceTransition ?? C ?? "slope", z = t?.visuals?.processLineWidth ?? _ ?? 2, G = t?.visuals?.trend?.visualMode ?? E ?? "ungated", Z = t?.visuals?.trend?.showGatingExplanation ?? F ?? !0, q = t?.visuals?.rules?.enableNeutralNoJudgement ?? M ?? !0, de = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, le = t?.visuals?.showZones, ue = t?.visuals?.showPoints, ye = t?.visuals?.rules?.highlightOutOfControl, ge = s?.height, Le = s?.className, Me = o?.label, We = o?.unit, Qe = o?.narrationContext, at = l?.scenario, qe = l?.settings, Ye = i?.source, Ge = t?.overlays?.partitionMarkers ?? b ?? !1, mt = t?.overlays?.trendStartMarkers ?? se ?? !1, yt = t?.overlays?.firstFavourableCrossMarkers ?? V ?? !1, Jt = t?.overlays?.trendBridge ?? R ?? !1, An = t?.inspector?.show ?? ee ?? !1, rn = t?.inspector?.onFocus ?? Y, Ce = t?.warnings?.show ?? w ?? !1, Fe = t?.warnings?.filter ?? k, ve = t?.icons?.show ?? K ?? !1, ze = t?.icons?.embedded?.show ?? J ?? !0, st = t?.icons?.embedded?.variant ?? X ?? un.Classic, Dt = t?.icons?.embedded?.runLength ?? pe, Ee = t?.overlays?.focusIndicator ?? ne ?? !0;
  return {
    effData: ae,
    effTargets: he,
    effBaselines: oe,
    effGhosts: fe,
    effChartTypeCore: De,
    effMetricImprovementCore: Pe,
    effEngineSettings: _e,
    effEngineAutoRecalc: H,
    effHeight: ge,
    effClassName: Le,
    effAriaLabel: Me,
    effUnit: We,
    effNarrationContext: Qe,
    effShowZones: le,
    effShowPoints: ue,
    effHighlightOutOfControl: ye,
    effVisualsScenario: at,
    effVisualsEngineSettings: qe,
    effPrecomputedVisuals: ie,
    effSource: Ye,
    effAlwaysShowZeroY: v,
    effAlwaysShowHundredY: T,
    effPercentScale: O,
    effGradientSequences: j,
    effSequenceTransition: P,
    effProcessLineWidth: z,
    effTrendVisualMode: G,
    effShowTrendGatingExplanation: Z,
    effEnableNeutralNoJudgement: q,
    effEnableRules: de,
    effShowPartitionMarkers: Ge,
    effShowTrendStartMarkers: mt,
    effShowFirstFavourableCrossMarkers: yt,
    effShowTrendBridgeOverlay: Jt,
    effShowSignalsInspector: An,
    effOnSignalFocus: rn,
    effShowWarningsPanel: Ce,
    effWarningsFilter: Fe,
    effShowIcons: ve,
    effShowEmbeddedIcon: ze,
    effEmbeddedIconVariant: st,
    effEmbeddedIconRunLength: Dt,
    effShowFocusIndicator: Ee
  };
}
let og = 0;
const ig = ({ data: e, targets: t, visuals: n, a11y: a, axis: s, compute: o }) => {
  const {
    series: l,
    engineRows: i,
    visualCategories: c,
    partitionMarkers: d
  } = e, { limits: u, uniformTarget: f } = t, {
    showPoints: h,
    showZones: p,
    highlightOutOfControl: y,
    gradientSequences: g,
    sequenceTransition: m,
    processLineWidth: I,
    showFocusIndicator: N = !1,
    enableRules: L,
    enableNeutralNoJudgement: D = !0,
    showTrendStartMarkers: x = !1,
    showFirstFavourableCrossMarkers: S = !1,
    showTrendBridgeOverlay: C = !1
  } = n, {
    announceFocus: _,
    ariaLabel: b,
    narrationContext: w,
    showSignalsInspector: k = !1,
    onSignalFocus: M,
    showTrendGatingExplanation: F = !0
  } = a, { zeroBreakSlotGapPx: E } = s, { metricImprovement: A, effectiveUnit: $ } = o, B = xn(), se = nn();
  if (!B) return null;
  const { xScale: V, yScale: R } = B, ee = U.useRef(
    "spc-seq-" + ++og
  ), Y = Zt(), K = l[0]?.data || [], J = U.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const v = /* @__PURE__ */ new Set();
    return K.forEach((T, O) => {
      typeof u.ucl == "number" && T.y > u.ucl && v.add(O), typeof u.lcl == "number" && T.y < u.lcl && v.add(O);
    }), v;
  }, [u.ucl, u.lcl, K]), X = U.useMemo(() => {
    if (!i || !i.length) return null;
    const v = [];
    return i.forEach((T, O) => {
      const j = T.classification.variation === Te.Concern || T.classification.variation === Te.Improvement || !!T.classification.neutralSpecialCauseValue, P = !!T.rules.singlePoint.up || !!T.rules.twoOfThree.up || !!T.rules.fourOfFive.up || !!T.rules.shift.up || !!T.rules.trend.up, z = !!T.rules.singlePoint.down || !!T.rules.twoOfThree.down || !!T.rules.fourOfFive.down || !!T.rules.shift.down || !!T.rules.trend.down;
      v[O] = {
        variation: T.classification.variation,
        assurance: T.classification.assurance,
        special: j,
        concern: T.classification.variation === Te.Concern,
        improvement: T.classification.variation === Te.Improvement,
        trendUp: !!T.rules.trend.up,
        trendDown: !!T.rules.trend.down,
        upAny: P,
        downAny: z,
        neutralSpecial: !!T.classification.neutralSpecialCauseValue,
        shiftUp: !!T.rules.shift.up,
        shiftDown: !!T.rules.shift.down,
        twoOfThreeUp: !!T.rules.twoOfThree.up,
        twoOfThreeDown: !!T.rules.twoOfThree.down,
        fourOfFiveUp: !!T.rules.fourOfFive.up,
        fourOfFiveDown: !!T.rules.fourOfFive.down,
        partitionId: T.partition.id ?? null
      };
    }), v;
  }, [i]), pe = U.useMemo(() => (c || []).map((v) => v === Je.Improvement ? ot.Improvement : v === Je.Concern ? ot.Concern : v === Je.NoJudgement ? ot.NoJudgement : ot.Common), [c]), ne = U.useMemo(() => !g || !pe.length ? [] : ag(pe, !0), [g, pe, b]), re = U.useMemo(
    () => K.map((v) => V(v.x instanceof Date ? v.x : new Date(v.x))),
    [K, V]
  ), Q = V.range()[1], te = V.range()[0], ce = U.useMemo(() => {
    if (!i || !i.length)
      return null;
    let v = Number.POSITIVE_INFINITY, T = Number.POSITIVE_INFINITY;
    if (i.forEach((q, de) => {
      q.rules.trend.up && (v = Math.min(v, de)), q.rules.trend.down && (T = Math.min(T, de));
    }), !Number.isFinite(v) && !Number.isFinite(T))
      return null;
    const O = v <= T, j = O ? Nt.Up : Nt.Down, P = O ? v : T, z = (q) => A == null || A === en.Neither || q == null || typeof q.data.value != "number" || typeof q.limits.mean != "number" ? !1 : j === Nt.Up ? A === en.Up ? q.data.value > q.limits.mean : q.data.value < q.limits.mean : A === en.Down ? q.data.value < q.limits.mean : q.data.value > q.limits.mean;
    let G = null;
    for (let q = P; q < i.length; q++) {
      const de = i[q];
      if (!(O ? !!de.rules.trend.up : !!de.rules.trend.down)) break;
      if (z(de)) {
        G = q;
        break;
      }
    }
    let Z = !1;
    if (G != null) {
      let q = 0;
      for (let de = G; de < i.length; de++) {
        const le = i[de];
        if (!(O ? !!le.rules.trend.up : !!le.rules.trend.down)) break;
        z(le) && q++;
      }
      Z = q >= 2;
    }
    return {
      direction: j,
      detectedAt: P,
      firstFavourableCrossAt: G,
      persistedAcrossMean: Z
    };
  }, [i, A]), W = U.useMemo(() => {
    if (!i || !i.length) return null;
    const v = (T) => {
      const O = [];
      let j = null, P = null;
      for (let z = 0; z < i.length; z++) {
        const G = i[z], Z = T(G), q = typeof Z == "number" && !isNaN(Z) ? Z : null;
        if (q == null) {
          j !== null && P != null && (O.push({
            x1: re[j],
            x2: re[z - 1],
            y: R(P)
          }), j = null, P = null);
          continue;
        }
        if (j === null) {
          j = z, P = q;
          continue;
        }
        P != null && Math.abs(q - P) <= 1e-9 || (P != null && O.push({
          x1: re[j],
          x2: re[z - 1],
          y: R(P)
        }), j = z, P = q);
      }
      return j !== null && P != null && O.push({
        x1: re[j],
        x2: re[i.length - 1],
        y: R(P)
      }), O;
    };
    return {
      mean: v((T) => T.limits.mean ?? null),
      ucl: v((T) => T.limits.ucl ?? null),
      lcl: v((T) => T.limits.lcl ?? null),
      onePos: v((T) => T.limits.oneSigma.upper ?? null),
      oneNeg: v((T) => T.limits.oneSigma.lower ?? null),
      twoPos: v((T) => T.limits.twoSigma.upper ?? null),
      twoNeg: v((T) => T.limits.twoSigma.lower ?? null)
    };
  }, [i, re, R]), ie = U.useMemo(() => ne.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${ee.current}-grad-common`,
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
    ne.map((v, T) => {
      const O = `${ee.current}-grad-${T}`;
      let j, P = 0.28, z = 0.12, G = 0.045;
      switch (v.category) {
        case ot.Concern:
          j = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", P = 0.28, z = 0.12, G = 0.045;
          break;
        case ot.Improvement:
          j = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", P = 0.26, z = 0.11, G = 0.045;
          break;
        case ot.NoJudgement:
          j = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", P = 0.26, z = 0.11, G = 0.045;
          break;
        default:
          j = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: O, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: j, stopOpacity: P }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: j, stopOpacity: z }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: j, stopOpacity: G })
      ] }, O);
    })
  ] }) : null, [ne]), ae = U.useMemo(() => {
    if (!ne.length) return null;
    const [v] = R.domain(), T = R(v), O = ne.map((j, P) => {
      const { start: z, end: G, category: Z } = j;
      if (z < 0 || G >= re.length || z > G)
        return null;
      const q = re[z], de = re[G];
      let le = "";
      if (Z === ot.Common) {
        const ue = P > 0 ? ne[P - 1] : null, ye = P < ne.length - 1 ? ne[P + 1] : null, ge = ue ? re[ue.end] : te, Le = ue ? R(K[ue.end].y) : T, Me = ye ? re[ye.start] : Q, We = ye ? R(K[ye.start].y) : T;
        le = `M ${ge} ${T}`, le += ` L ${ge} ${Le}`;
        for (let Qe = z; Qe <= G; Qe++)
          le += ` L ${re[Qe]} ${R(K[Qe].y)}`;
        le += ` L ${Me} ${We}`, le += ` L ${Me} ${T} Z`;
      } else {
        const ue = P > 0 ? ne[P - 1] : null, ye = P < ne.length - 1 ? ne[P + 1] : null, ge = ue && ue.category !== ot.Common, Le = ye && ye.category !== ot.Common, Me = R(K[z].y), We = R(K[G].y);
        let Qe = q, at = de;
        if (ge) {
          const qe = re[ue.end], Ye = R(K[ue.end].y), Ge = K[z].y - K[ue.end].y;
          m === Un.Slope && Ge > 0 ? (le = `M ${qe} ${Ye} L ${q} ${Me}`, Qe = qe) : (le = `M ${q} ${T} L ${q} ${Me}`, Qe = q);
        } else
          le = `M ${q} ${T} L ${q} ${Me}`;
        for (let qe = z + 1; qe <= G; qe++)
          le += ` L ${re[qe]} ${R(K[qe].y)}`;
        if (le += ` L ${de} ${We}`, Le) {
          const qe = re[ye.start], Ye = R(K[ye.start].y), Ge = K[ye.start].y - K[G].y;
          (m === Un.Slope && Ge <= 0 || m === Un.Extend) && (le += ` L ${qe} ${Ye}`, at = qe);
        }
        if (le += ` L ${at} ${T}`, le += ` L ${Qe} ${T} Z`, m === Un.Neutral && ge) {
          const qe = re[ue.end], Ye = R(K[ue.end].y), Ge = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${qe} ${T} L ${qe} ${Ye} L ${q} ${Me} L ${q} ${T} Z`,
              fill: `url(#${ee.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${P}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            Ge,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: le,
                fill: `url(#${ee.current}-grad-${P})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${P}`
            )
          ] }, `seq-group-${P}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: le,
          fill: `url(#${ee.current}-grad-${P})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${P}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: O });
  }, [ne, re, Q, R, K, m]), he = U.useMemo(() => {
    if (!w?.timeframe && K.length >= 2) {
      const v = K.map((G) => G.x instanceof Date ? G.x : new Date(G.x)), T = new Date(Math.min(...v.map((G) => G.getTime()))), O = new Date(Math.max(...v.map((G) => G.getTime()))), j = Math.round((O.getTime() - T.getTime()) / 864e5) || 0;
      if (j < 14)
        return `The chart shows a timeframe of ${j + 1} days`;
      const P = Math.round(j / 7);
      return P < 20 ? `The chart shows a timeframe of ${P} weeks` : `The chart shows a timeframe of ${(O.getFullYear() - T.getFullYear()) * 12 + (O.getMonth() - T.getMonth()) + 1} months`;
    }
    if (w?.timeframe)
      return `The chart shows a timeframe of ${w.timeframe}`;
  }, [w?.timeframe, K]), oe = (v) => {
    const T = v % 10, O = v % 100;
    return T === 1 && O !== 11 ? `${v}st` : T === 2 && O !== 12 ? `${v}nd` : T === 3 && O !== 13 ? `${v}rd` : `${v}th`;
  }, fe = (v) => `${oe(v.getDate())} ${v.toLocaleString("en-GB", { month: "long" })}, ${v.getFullYear()}`, De = (v) => ({
    specialCauseSinglePointUp: !!v?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!v?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!v?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!v?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!v?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!v?.rules.fourOfFive.down,
    specialCauseShiftUp: !!v?.rules.shift.up,
    specialCauseShiftDown: !!v?.rules.shift.down,
    specialCauseTrendUp: !!v?.rules.trend.up,
    specialCauseTrendDown: !!v?.rules.trend.down
  }), Pe = U.useCallback(
    ({
      index: v,
      x: T,
      y: O
    }) => {
      const j = i?.[v], P = T instanceof Date ? T : new Date(T), z = fe(P), G = w?.measureUnit ? ` ${w.measureUnit}` : "", Z = w?.measureName ? ` ${w.measureName}` : "";
      if (!j)
        return `General summary is: ${he ? he + ". " : ""}Point ${v + 1}, ${z}, ${O}${G}${Z}`;
      const q = ga(j.classification?.variation) || "Variation", de = ma(De(j)), le = de.length ? ` Rules: ${[...new Set(de.map((ye) => jn[ye].narration))].join("; ")}.` : " No special cause rules.", ue = [];
      return w?.measureName && ue.push(`Measure: ${w.measureName}.`), w?.datasetContext && ue.push(`${w.datasetContext}.`), w?.organisation && ue.push(`Organisation: ${w.organisation}.`), w?.additionalNote && ue.push(w.additionalNote), [
        "General summary is:",
        ...ue,
        `Point ${v + 1} recorded on `,
        z + ",",
        `with a value of ${O} ${G}${Z}`,
        q + ".",
        le
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, w, he]
  ), _e = U.useCallback(
    (v, T) => i?.[v] ? Pe({
      index: v,
      seriesId: "process",
      x: T.x instanceof Date ? T.x : new Date(T.x),
      y: T.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, Pe]
  ), H = U.useMemo(() => {
    try {
      const v = typeof R?.domain == "function" ? R.domain() : void 0;
      if (!v || !Array.isArray(v) || v.length < 2) return !1;
      const T = Math.min(v[0], v[1]), O = Math.max(v[0], v[1]);
      return !(0 >= T && 0 <= O);
    } catch {
      return !1;
    }
  }, [R]);
  return /* @__PURE__ */ r.jsx(_m, { children: /* @__PURE__ */ r.jsxs(
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
            width: B.xScale.range()[1] + 56 + 16,
            height: (se?.innerHeight ?? B.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(ri, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                ri,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: H,
                    gapPx: E,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(Oh, { axis: "y" }),
              ie,
              ae,
              d.map((v, T) => {
                const O = K[v];
                if (!O) return null;
                const j = V(O.x instanceof Date ? O.x : new Date(O.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: j,
                    x2: j,
                    y1: 0,
                    y2: R.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${T}`
                );
              }),
              W?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                W.mean.map((v, T) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y
                  },
                  `mean-${T}`
                )),
                W.mean.map((v, T) => {
                  if (T === W.mean.length - 1) return null;
                  const O = W.mean[T + 1];
                  if (!O || v.y === O.y) return null;
                  const P = Math.max(4, O.x1 - v.x2 || 0) * 0.5, z = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${O.x1 - P},${O.y} ${O.x1},${O.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: z,
                      fill: "none"
                    },
                    `mean-join-${T}`
                  );
                })
              ] }) : null,
              f != null && /* @__PURE__ */ r.jsx(r.Fragment, {}),
              W?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    W.ucl.map((v, T) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: v.x1,
                        x2: v.x2,
                        y1: v.y,
                        y2: v.y,
                        strokeWidth: 2
                      },
                      `ucl-${T}`
                    )),
                    W.ucl.map((v, T) => {
                      if (T === W.ucl.length - 1) return null;
                      const O = W.ucl[T + 1];
                      if (!O || v.y === O.y) return null;
                      const P = Math.max(4, O.x1 - v.x2 || 0) * 0.5, z = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${O.x1 - P},${O.y} ${O.x1},${O.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: z,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${T}`
                      );
                    })
                  ]
                }
              ) : null,
              W?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    W.lcl.map((v, T) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: v.x1,
                        x2: v.x2,
                        y1: v.y,
                        y2: v.y,
                        strokeWidth: 2
                      },
                      `lcl-${T}`
                    )),
                    W.lcl.map((v, T) => {
                      if (T === W.lcl.length - 1) return null;
                      const O = W.lcl[T + 1];
                      if (!O || v.y === O.y) return null;
                      const P = Math.max(4, O.x1 - v.x2 || 0) * 0.5, z = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${O.x1 - P},${O.y} ${O.x1},${O.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: z,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${T}`
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
                    x2: V.range()[1],
                    y1: R(f),
                    y2: R(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: V.range()[0] - 7,
                    y: R(f) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      f,
                      " ",
                      $ || w?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && W && W.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                W.onePos.map((v, T) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${T}`
                )),
                W.oneNeg.map((v, T) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${T}`
                )),
                W.twoPos.map((v, T) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${T}`
                )),
                W.twoNeg.map((v, T) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${T}`
                ))
              ] }),
              ce && (x || S || C) && (() => {
                const v = ce.detectedAt, T = ce.firstFavourableCrossAt, O = K[v] ? V(
                  K[v].x instanceof Date ? K[v].x : new Date(K[v].x)
                ) : null, j = K[v] ? R(K[v].y) : null, P = T != null && K[T] ? V(
                  K[T].x instanceof Date ? K[T].x : new Date(K[T].x)
                ) : null, z = T != null && K[T] ? R(K[T].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  C && O != null && j != null && P != null && z != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: O,
                      y1: j,
                      x2: P,
                      y2: z,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  x && O != null && j != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: O,
                      cy: j,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  S && P != null && z != null && /* @__PURE__ */ r.jsx("circle", { cx: P, cy: z, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                km,
                {
                  series: l[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (v) => v.x instanceof Date ? v.x : new Date(v.x),
                  smooth: !1,
                  strokeWidth: I
                }
              ),
              h && K.map((v, T) => {
                const O = V(v.x instanceof Date ? v.x : new Date(v.x)), j = R(v.y), P = J.has(T), z = X?.[T], G = pe[T], Z = G === ot.Improvement, q = G === ot.Concern, de = G === ot.NoJudgement, le = [
                  "fdp-spc__point",
                  P && y ? "fdp-spc__point--ooc" : null,
                  L && q ? "fdp-spc__point--sc-concern" : null,
                  L && Z ? "fdp-spc__point--sc-improvement" : null,
                  L && D && de ? "fdp-spc__point--sc-no-judgement" : null,
                  z?.assurance === tn.Pass ? "fdp-spc__point--assurance-pass" : null,
                  z?.assurance === tn.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ue = Y?.focused?.index === T;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: O,
                    cy: j,
                    r: 5,
                    className: le,
                    "data-variation": z?.variation,
                    "data-assurance": z?.assurance,
                    "aria-label": b,
                    ...ue ? { "aria-describedby": `spc-tooltip-${T}` } : {}
                  },
                  T
                );
              }),
              N && k && Y?.focused && (() => {
                const v = Y.focused, T = typeof v.index == "number" ? v.index : -1;
                if (T < 0 || !K[T]) return null;
                const O = V(
                  K[T].x instanceof Date ? K[T].x : new Date(K[T].x)
                ), j = R(K[T].y), P = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: O,
                      cy: j,
                      r: 7,
                      fill: "none",
                      stroke: P,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: O,
                      cy: j,
                      r: 5,
                      fill: "#000",
                      stroke: P,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: O,
                      cy: j,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              se && /* @__PURE__ */ r.jsx(
                lg,
                {
                  width: V.range()[1],
                  height: R.range()[0]
                }
              ),
              !k && /* @__PURE__ */ r.jsx(
                ql,
                {
                  engineRows: i,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: _e,
                  measureName: w?.measureName,
                  measureUnit: w?.measureUnit,
                  dateFormatter: (v) => fe(v),
                  enableNeutralNoJudgement: D,
                  showTrendGatingExplanation: F
                }
              )
            ] })
          }
        ),
        k && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          rg,
          {
            engineRows: i,
            measureName: w?.measureName,
            measureUnit: $ || w?.measureUnit,
            onSignalFocus: M
          }
        ) }),
        _ && /* @__PURE__ */ r.jsx(
          Cm,
          {
            format: (v) => Pe({ ...v, x: v.x instanceof Date ? v.x : new Date(v.x) })
          }
        )
      ]
    }
  ) });
}, lg = ({
  width: e,
  height: t
}) => {
  const n = Zt();
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
        const o = a.currentTarget.getBoundingClientRect(), l = a.clientX - o.left, i = a.clientY - o.top;
        n.focusNearest(l, i);
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
function mi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function cg(e, t, n) {
  const a = new Array(e), s = new Date(t);
  for (let o = 0; o < e; o++)
    switch (a[o] = new Date(s), n) {
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
function dg(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++)
    a.push(n[c].getTime() - n[c - 1].getTime());
  const s = a.sort((c, d) => c - d), o = s[Math.floor(s.length / 2)], l = 3600 * 1e3, i = 24 * l;
  return o <= 2 * l ? "hourly" : o <= 2 * i ? "daily" : o <= 10 * i ? "weekly" : o <= 45 * i ? "monthly" : o <= 120 * i ? "quarterly" : "annually";
}
function gi(e, t) {
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
function ug(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const s = e.filter((i) => i != null);
  if (!s.length) return;
  const o = Math.min(...s), l = Math.max(...s);
  if (a === "0-1") {
    if (o >= 0 && l <= 1 && l > 0) return "%";
  } else if (o >= 0 && l <= 100 && l > 0) return "%";
}
function fg(e, t, n = 1) {
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
function Ql(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: s,
    providedUnit: o,
    defaultUnit: l,
    autoValue: i = !0,
    autoDelta: c = !0,
    autoMetadata: d = !0,
    deltaConfig: u
  } = e, f = t.map(
    (b) => typeof b == "number" ? b : b == null ? null : Number(b)
  );
  let h = -1;
  for (let b = f.length - 1; b >= 0; b--)
    if (f[b] != null) {
      h = b;
      break;
    }
  let p = (n || []).map(mi);
  if (!p.some(Boolean)) {
    const b = mi(s);
    b && a ? p = cg(f.length, b, a) : p = new Array(f.length).fill(void 0);
  }
  const g = dg(p, a), m = ug(
    f,
    o,
    l,
    e.percentHeuristic
  ), I = i && h >= 0 && f[h] != null ? f[h] : void 0, N = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function L() {
    if (h < 0) return -1;
    if (N.strategy === "previous" || N.strategy === "n-points") {
      let F = h - (N.strategy === "previous" ? 1 : Math.max(1, N.n || 1));
      if (!N.skipNulls) return F;
      for (let E = F; E >= 0; E--) if (f[E] != null) return E;
      return -1;
    }
    const b = p[h];
    if (!b) return -1;
    const w = new Date(b);
    w.setFullYear(w.getFullYear() - 1);
    let k = -1, M = 1 / 0;
    for (let F = 0; F < p.length; F++) {
      const E = p[F];
      if (!E || f[F] == null) continue;
      const A = Math.abs(E.getTime() - w.getTime());
      A < M && (M = A, k = F);
    }
    return k;
  }
  const D = L(), x = D >= 0 ? f[D] : null;
  let S;
  if (c && I != null && x != null) {
    const b = I - x, w = N.absolute !== !1, k = w ? b : x === 0 ? 0 : b / Math.abs(x) * 100;
    S = {
      value: Number.isFinite(k) ? Number(k.toFixed(2)) : 0,
      isPercent: w ? m === "%" : !0,
      period: `vs ${fg(g, a, N.strategy === "n-points" ? Math.max(1, N.n || 1) : 1)}`
    };
  }
  const C = h >= 0 ? p[h] : void 0, _ = d && gi(C, g) ? `Latest: ${gi(C, g)}` : void 0;
  return { value: I, unit: m, delta: S, metadata: _, latestDate: C, frequency: g };
}
function pg(e) {
  const { rows: t } = sr(e), n = Xs(e);
  return { rows: t, visuals: n.visuals };
}
const eo = 13;
function to(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case Je.Improvement:
          return Te.Improvement;
        case Je.Concern:
          return Te.Concern;
        case Je.NoJudgement:
          return Te.Neither;
        default:
          return null;
      }
    });
}
function Kl(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === Je.NoJudgement);
}
function xi(e, t) {
  const n = e === vt.G ? vt.G : e === vt.T ? vt.T : vt.XmR, a = t === Ae.Up ? Ae.Up : t === Ae.Down ? Ae.Down : Ae.Neither;
  return { chartType: n, metricImprovement: a };
}
function bi(e, t, n) {
  const a = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : eo, s = { minimumPoints: a };
  return t.filter(
    (l) => !l.ghost && typeof l.value == "number"
  ).length >= a && (s.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (s.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(s, n), Object.keys(s).length ? s : void 0;
}
function hg(e, t, n) {
  const a = U.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const l = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
    return !(0 >= l && 0 <= i);
  }, [e]), { slotPx: s, totalReservedPx: o } = U.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const i = (t ?? 260) - 60, c = mr, u = c + Fh, f = n?.maxFraction, h = Math.max(
      gr,
      Math.floor(i * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: s, totalReservedPx: o };
}
function mg(e, t, n, a) {
  if (n.percentScale) {
    const c = e.map((f) => f.y), d = Math.max(100, ...c), u = Math.min(0, ...c);
    return [u < 0 ? u : 0, d > 100 ? d : 100];
  }
  const s = e.map((c) => c.y), o = (c) => {
    c != null && s.push(c);
  };
  if (o(t.mean), o(t.ucl), o(t.lcl), o(t.onePos), o(t.oneNeg), o(t.twoPos), o(t.twoNeg), a && a.length)
    for (const c of a)
      typeof c == "number" && !isNaN(c) && s.push(c);
  if (!s.length) return;
  let l = Math.min(...s), i = Math.max(...s);
  return n.alwaysShowZeroY && (l = Math.min(0, l)), n.alwaysShowHundredY && (i = Math.max(100, i)), [l, i];
}
function cs(e, t) {
  if (!e?.length || t.chartType !== vt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let p = 0; p < e.length; p++) {
    const y = e[p], g = y.value;
    y?.ghost || typeof g == "number" && Number.isFinite(g) && a.push({ idx: p, value: g });
  }
  if (a.length < n * 2) return null;
  let s = 0, o = 0;
  for (let p = 1; p < a.length; p++)
    s += Math.abs(a[p].value - a[p - 1].value), o++;
  if (o === 0) return null;
  const i = s / o * (2.66 / 3);
  if (!Number.isFinite(i) || i <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Ae.Up, u = t.metricImprovement === Ae.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, y) {
    let g = 0, m = 0;
    for (let I = p; I < y; I++)
      g += a[I].value, m++;
    return m ? g / m : NaN;
  }
  for (let p = n; p <= a.length - n; p++) {
    const y = h(p - n, p), g = h(p, p + n);
    if (!Number.isFinite(y) || !Number.isFinite(g)) continue;
    const m = g - y, I = m / i;
    let N = !1, L = !1;
    if (d ? (N = I >= c, L = !0) : u ? (N = -I >= c, L = !1) : (N = Math.abs(I) >= c, L = m > 0), !N) continue;
    const D = (C) => L ? C > y : C < y;
    let x = !0;
    for (let C = p; C < p + n; C++)
      if (!D(a[C].value)) {
        x = !1;
        break;
      }
    if (!x) continue;
    const S = a[p].idx;
    if (!(t.minGap && f >= 0 && S - f < t.minGap))
      return S;
  }
  return null;
}
function gg(e, t) {
  const n = cs(e, t);
  return n == null ? e.slice() : e.map((a, s) => s === n ? { ...a, baseline: !0 } : a);
}
function xg(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return gg(e, t);
  let a = e.slice(), s = 0;
  const o = Math.max(1, t.minGap ?? 0);
  for (; s < n; ) {
    const l = cs(a, { ...t, minGap: o });
    if (l == null) break;
    if (a[l]?.baseline) {
      const i = cs(a, { ...t, minGap: o + 1 });
      if (i == null || i === l) break;
      a = a.map((c, d) => d === i ? { ...c, baseline: !0 } : c), s++;
      continue;
    }
    a = a.map((i, c) => c === l ? { ...i, baseline: !0 } : i), s++;
  }
  return a;
}
const bg = (e) => {
  const t = U.useCallback(
    (Ce) => String(Ce).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((ve) => ve.length ? ve[0].toUpperCase() + ve.slice(1) : ve).join(" "),
    []
  ), n = U.useCallback(
    (Ce) => String(Ce).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Fe) => Fe.length ? Fe[0].toUpperCase() + Fe.slice(1) : Fe).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && e.disableTrendSideGating !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: a,
    effTargets: s,
    effBaselines: o,
    effGhosts: l,
    effChartTypeCore: i,
    effMetricImprovementCore: c,
    effEngineSettings: d,
    effAlwaysShowZeroY: u,
    effAlwaysShowHundredY: f,
    effPercentScale: h,
    effGradientSequences: p,
    effSequenceTransition: y,
    effProcessLineWidth: g,
    effTrendVisualMode: m,
    effShowTrendGatingExplanation: I,
    effEnableNeutralNoJudgement: N,
    effEnableRules: L,
    effShowPartitionMarkers: D,
    effShowTrendStartMarkers: x,
    effShowFirstFavourableCrossMarkers: S,
    effShowTrendBridgeOverlay: C,
    effShowSignalsInspector: _,
    effOnSignalFocus: b,
    effShowWarningsPanel: w,
    effWarningsFilter: k,
    effShowEmbeddedIcon: M,
    effEmbeddedIconVariant: F,
    effEmbeddedIconRunLength: E,
    effShowFocusIndicator: A,
    effHeight: $,
    effClassName: B,
    effAriaLabel: se,
    effUnit: V,
    effNarrationContext: R,
    effShowZones: ee,
    effShowPoints: Y,
    effHighlightOutOfControl: K,
    effVisualsScenario: J,
    effVisualsEngineSettings: X,
    effSource: pe,
    effPrecomputedVisuals: ne,
    effEngineAutoRecalc: re
  } = sg(e), Q = se ?? e.ariaLabel, te = $ ?? e.height ?? 260, ce = B ?? e.className, W = V ?? e.unit, ie = R ?? e.narrationContext, ae = ee ?? e.showZones, he = Y ?? e.showPoints, oe = K ?? e.highlightOutOfControl, fe = J ?? e.visualsScenario ?? Gl.None, De = X ?? e.visualsEngineSettings, Pe = pe ?? e.source, _e = e.a11y?.announceFocus ?? e.announceFocus ?? !1, H = U.useMemo(() => a.map((Ce, Fe) => ({
    x: Ce.x,
    value: Ce.y,
    target: s?.[Fe] ?? void 0,
    baseline: o?.[Fe] ?? void 0,
    ghost: l?.[Fe] ?? void 0
  })), [a, s, o, l]), v = U.useMemo(() => {
    try {
      const Ce = re;
      return Ce?.enabled ? xg(H, {
        chartType: i,
        metricImprovement: c,
        shiftLength: Ce.shiftLength,
        deltaSigma: Ce.deltaSigma,
        minGap: Ce.minGap,
        maxInsertions: Ce.maxInsertions
      }) : H;
    } catch {
      return H;
    }
  }, [H, re, i, c]), T = U.useMemo(() => {
    if (ne?.visuals) return ne.visuals;
    try {
      const Ce = bi(
        d,
        v,
        De
      ), { chartType: Fe, metricImprovement: ve } = xi(
        i,
        c
      ), ze = {
        chartType: Fe,
        metricImprovement: ve,
        data: v,
        settings: Ce
      }, { visuals: st } = Ym(ze, fe, {
        trendVisualMode: m === Xl.Ungated ? Ln.Ungated : Ln.Gated,
        enableNeutralNoJudgement: N
      });
      return st || [];
    } catch {
      return [];
    }
  }, [
    ne?.visuals?.length,
    v,
    i,
    c,
    m,
    N,
    d,
    fe,
    De
  ]), j = U.useMemo(() => {
    if (ne?.rows)
      try {
        const Ce = ne.rows, Fe = (ve) => {
          switch (ve) {
            case we.ImprovementHigh:
            case we.ImprovementLow:
              return Te.Improvement;
            case we.ConcernHigh:
            case we.ConcernLow:
              return Te.Concern;
            case we.NeitherHigh:
            case we.NeitherLow:
              return Te.Neither;
            case we.CommonCause:
            default:
              return Te.Neither;
          }
        };
        return Ce.map(
          (ve, ze) => ({
            data: {
              value: ve.value,
              ghost: !!ve.ghost
            },
            partition: { id: ve.partitionId },
            limits: {
              mean: ve.mean,
              ucl: ve.upperProcessLimit,
              lcl: ve.lowerProcessLimit,
              oneSigma: { upper: ve.upperOneSigma, lower: ve.lowerOneSigma },
              twoSigma: { upper: ve.upperTwoSigma, lower: ve.lowerTwoSigma }
            },
            rules: {
              singlePoint: { up: !!ve.singlePointUp, down: !!ve.singlePointDown },
              twoOfThree: { up: !!ve.twoSigmaUp, down: !!ve.twoSigmaDown },
              fourOfFive: { up: !!ve.fourOfFiveUp, down: !!ve.fourOfFiveDown },
              shift: { up: !!ve.shiftUp, down: !!ve.shiftDown },
              trend: { up: !!ve.trendUp, down: !!ve.trendDown }
            },
            classification: {
              variation: Fe(ve.variationIcon),
              neutralSpecialCauseValue: ve.variationIcon === we.NeitherHigh || ve.variationIcon === we.NeitherLow ? ve.specialCauseImprovementValue ?? ve.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: v[ze]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Ce = bi(
        d,
        v,
        De
      ), { chartType: Fe, metricImprovement: ve } = xi(
        i,
        c
      ), ze = {
        chartType: Fe,
        metricImprovement: ve,
        data: v,
        settings: Ce
      }, { rows: st } = pg(ze), Dt = (Ee) => {
        switch (Ee) {
          case we.ImprovementHigh:
          case we.ImprovementLow:
            return Te.Improvement;
          case we.ConcernHigh:
          case we.ConcernLow:
            return Te.Concern;
          case we.NeitherHigh:
          case we.NeitherLow:
            return Te.Neither;
          case we.CommonCause:
          default:
            return Te.Neither;
        }
      };
      return st.map(
        (Ee, kt) => ({
          data: {
            value: Ee.value,
            ghost: !!Ee.ghost
          },
          partition: { id: Ee.partitionId },
          limits: {
            mean: Ee.mean,
            ucl: Ee.upperProcessLimit,
            lcl: Ee.lowerProcessLimit,
            oneSigma: { upper: Ee.upperOneSigma, lower: Ee.lowerOneSigma },
            twoSigma: { upper: Ee.upperTwoSigma, lower: Ee.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!Ee.singlePointUp, down: !!Ee.singlePointDown },
            twoOfThree: { up: !!Ee.twoSigmaUp, down: !!Ee.twoSigmaDown },
            fourOfFive: { up: !!Ee.fourOfFiveUp, down: !!Ee.fourOfFiveDown },
            shift: { up: !!Ee.shiftUp, down: !!Ee.shiftDown },
            trend: { up: !!Ee.trendUp, down: !!Ee.trendDown }
          },
          classification: {
            variation: Dt(Ee.variationIcon),
            neutralSpecialCauseValue: Ee.variationIcon === we.NeitherHigh || Ee.variationIcon === we.NeitherLow ? Ee.specialCauseImprovementValue ?? Ee.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: v[kt]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    ne?.rows?.length,
    v,
    i,
    c,
    d,
    De
  ]) || null, P = (j || []).slice().reverse().find((Ce) => Ce.limits.mean != null), z = P?.limits.mean ?? null, G = U.useMemo(() => {
    const Ce = [];
    try {
      const Fe = j, ve = d?.minimumPoints ?? 13, ze = d?.minimumPoints ?? 12;
      if (Fe && Fe.length) {
        const st = Fe.filter(
          (Ee) => !Ee.data.ghost && Ee.data.value != null
        ).length;
        st < ve && Ce.push({
          code: Pr.InsufficientPointsGlobal,
          severity: jt.Warning,
          category: Er.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: st, minimumPoints: ve }
        });
        const Dt = /* @__PURE__ */ new Map();
        for (const Ee of Fe) {
          const kt = Ee.partition.id ?? 0, En = Dt.get(kt) || { size: 0, nonGhost: 0 };
          En.size += 1, !Ee.data.ghost && Ee.data.value != null && (En.nonGhost += 1), Dt.set(kt, En);
        }
        for (const [Ee, kt] of Dt)
          kt.nonGhost > 0 && kt.nonGhost < ze && Ce.push({
            code: Pr.InsufficientPointsPartition,
            severity: jt.Warning,
            category: Er.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: Ee,
              nonGhostCount: kt.nonGhost,
              minimumPointsPartition: ze
            }
          });
      }
    } catch {
    }
    return Ce;
  }, [j, d?.minimumPoints]), Z = U.useMemo(() => G.length ? k ? G.filter((Ce) => !(k.severities && Ce.severity && !k.severities.includes(Ce.severity) || k.categories && Ce.category && !k.categories.includes(Ce.category) || k.codes && !k.codes.includes(Ce.code))) : G : [], [G, k]), q = P?.limits.ucl ?? null, de = P?.limits.lcl ?? null, le = P?.limits.oneSigma.upper ?? null, ue = P?.limits.oneSigma.lower ?? null, ye = P?.limits.twoSigma.upper ?? null, ge = P?.limits.twoSigma.lower ?? null, Le = z != null && le != null ? Math.abs(le - z) : 0, Me = U.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), We = U.useMemo(
    () => mg(
      a,
      { mean: z, ucl: q, lcl: de, onePos: le, oneNeg: ue, twoPos: ye, twoNeg: ge },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      s ?? null
    ),
    [
      a,
      z,
      q,
      de,
      le,
      ue,
      ye,
      ge,
      s,
      u,
      f,
      h
    ]
  ), Qe = U.useMemo(() => {
    const Ce = (Fe) => {
      const ve = Fe.filter(
        (st) => typeof st == "number" && !isNaN(st)
      );
      if (!ve.length) return null;
      const ze = ve[0];
      return ve.every((st) => st === ze) ? ze : null;
    };
    if (j && j.length) {
      const Fe = Ce(j.map((ve) => ve.target));
      if (Fe != null) return Fe;
    }
    return s && s.length ? Ce(s) : null;
  }, [j, s]), { show: at, slotPx: qe, totalReservedPx: Ye } = hg(
    We,
    te,
    { maxFraction: 0.35 }
  ), Ge = at ? Ye : 0, mt = U.useMemo(() => {
    const Ce = a.map((Fe) => Fe.x);
    return Ql({
      values: a.map((Fe) => Fe.y),
      dates: Ce,
      providedUnit: W || ie?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, W, ie?.measureUnit]), yt = W ?? ie?.measureUnit ?? mt.unit, Jt = U.useMemo(() => yt ? { ...ie || {}, measureUnit: yt } : ie, [ie, yt]), An = U.useMemo(() => {
    if (!j) return [];
    const Ce = [];
    for (let Fe = 1; Fe < j.length; Fe++)
      j[Fe].partition.id !== j[Fe - 1].partition.id && Ce.push(Fe);
    return Ce;
  }, [j]), rn = U.useMemo(
    () => ng({
      show: !!M,
      rowsForUi: j,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: F,
      runLength: E
    }),
    [
      M,
      j,
      d?.minimumPoints,
      c,
      F,
      E
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ce ? `fdp-spc-chart-wrapper ${ce}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          eg,
          {
            show: !!M,
            variationNode: rn,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          Eh,
          {
            height: te,
            ariaLabel: Q,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ r.jsx(Ph, { series: Me, yDomain: We, yBottomGapPx: Ge, children: (() => {
              const Ce = {
                data: {
                  series: Me,
                  engineRows: j,
                  visualCategories: T,
                  partitionMarkers: D ? An : []
                },
                targets: {
                  limits: { mean: z, ucl: q, lcl: de, sigma: Le, onePos: le, oneNeg: ue, twoPos: ye, twoNeg: ge },
                  uniformTarget: Qe
                },
                visuals: {
                  showPoints: he,
                  showZones: ae,
                  highlightOutOfControl: oe,
                  gradientSequences: p,
                  sequenceTransition: y,
                  processLineWidth: g,
                  showFocusIndicator: A,
                  enableRules: L,
                  enableNeutralNoJudgement: N,
                  showTrendStartMarkers: x,
                  showFirstFavourableCrossMarkers: S,
                  showTrendBridgeOverlay: C
                },
                a11y: {
                  announceFocus: _e,
                  ariaLabel: Q,
                  narrationContext: Jt,
                  showSignalsInspector: _,
                  onSignalFocus: b,
                  showTrendGatingExplanation: I
                },
                axis: { zeroBreakSlotGapPx: qe },
                compute: { effectiveUnit: yt, metricImprovement: c }
              };
              return /* @__PURE__ */ r.jsx(ig, { ...Ce });
            })() })
          }
        ),
        Pe && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Pe == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          Pe
        ] }) : Pe }),
        /* @__PURE__ */ r.jsx(
          Km,
          {
            show: !!w,
            warnings: Z,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function yg(e, t) {
  const {
    chartType: n = vt.XmR,
    metricImprovement: a,
    minimumPoints: s = eo,
    enableNeutralNoJudgement: o = !0,
    includeSignalFallbacks: l = !0
  } = t, i = e.map((L) => ({ x: L.x, value: L.value ?? L.y ?? null }));
  let c = null;
  try {
    const L = i.filter(
      (x) => typeof x.value == "number"
    ).length, D = { minimumPoints: s };
    L >= s && (D.chartLevelEligibility = !0), c = sr({ chartType: n, metricImprovement: a, data: i, settings: D });
  } catch {
    c = null;
  }
  const d = c?.rows ?? [];
  let u = d[d.length - 1] ?? null;
  for (let L = d.length - 1; L >= 0; L--) {
    const D = d[L];
    if (D && D.value != null && !D.ghost) {
      u = D;
      break;
    }
  }
  let f = [];
  try {
    f = ar(d, {
      metricImprovement: a,
      enableNeutralNoJudgement: o
    });
  } catch {
    f = [];
  }
  const h = Fr(
    u?.variationIcon
  ), p = u?.variationIcon ?? null, y = u?.mean ?? null, g = u ? {
    lower: u?.lowerProcessLimit ?? null,
    upper: u?.upperProcessLimit ?? null
  } : null, m = u ? {
    upperOne: u?.upperOneSigma ?? null,
    upperTwo: u?.upperTwoSigma ?? null,
    lowerOne: u?.lowerOneSigma ?? null,
    lowerTwo: u?.lowerTwoSigma ?? null
  } : null;
  let I, N;
  return l && (I = to(f), N = Kl(f)), {
    rows: d,
    visuals: f,
    latestState: h,
    lastVariationIcon: p,
    centerLine: y,
    controlLimits: g,
    sigmaBands: m,
    pointSignals: I,
    pointNeutralSpecialCause: N
  };
}
const Qy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: tn,
  BaselineSuggestionReason: Pl,
  ChartType: vt,
  DEFAULT_MIN_POINTS: eo,
  Icons: tg,
  ImprovementDirection: Ae,
  PARITY_V26: Vl,
  RULE_METADATA: El,
  SPCChart: bg,
  SPCTooltipOverlay: ql,
  SpcEmbeddedIconVariant: un,
  SpcVisualCategory: Je,
  SpcWarningCategory: Er,
  SpcWarningCode: Pr,
  SpcWarningSeverity: jt,
  VARIATION_COLOR_TOKENS: _t,
  VariationIcon: we,
  buildSpcV26a: sr,
  buildSpcV26aWithVisuals: Xs,
  computeSpcPrecomputed: yg,
  computeSpcVisualCategories: ar,
  extractRuleIds: ma,
  getVariationColorHex: Tm,
  getVariationColorToken: Rl,
  isSpecialCauseIcon: Jl,
  mapIconToVariation: Fr,
  normaliseSpcSettingsV2: Wl,
  ruleGlossary: jn,
  variationLabel: ga,
  visualsToNeutralFlags: Kl,
  visualsToPointSignals: to,
  withParityV26: Zm
}, Symbol.toStringTag, { value: "Module" }));
function vg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function wg(e) {
  const {
    values: t,
    x: n,
    chartType: a = vt.XmR,
    metricImprovement: s = Ae.Neither,
    showLimits: o = !0,
    showLimitBand: l = !1,
    showInnerBands: i = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = U.useMemo(() => {
    const x = [];
    for (let S = 0; S < t.length; S++)
      x.push({ x: n?.[S], value: t[S] });
    return x;
  }, [t, n]), u = U.useMemo(() => {
    try {
      const x = d.map((b, w) => ({ x: b.x ?? w, value: b.value })), S = 13, C = x.filter((b) => typeof b.value == "number").length, _ = { minimumPoints: S };
      return C >= S && (_.chartLevelEligibility = !0), sr({ chartType: a, metricImprovement: s, data: x, settings: _ });
    } catch {
      return null;
    }
  }, [d, a, s]), f = U.useMemo(() => {
    const x = u?.rows;
    if (!x || x.length === 0) return null;
    for (let S = x.length - 1; S >= 0; S--) {
      const C = x[S];
      if (C && C.value != null && !C.ghost) return C;
    }
    return x[x.length - 1] ?? null;
  }, [u]), h = U.useMemo(() => {
    const x = u?.rows;
    if (!x || x.length === 0) return null;
    let S = x[x.length - 1];
    for (let C = x.length - 1; C >= 0; C--) {
      const _ = x[C];
      if (_ && _.value != null && !_.ghost) {
        S = _;
        break;
      }
    }
    return Fr(S?.variationIcon);
  }, [u]), p = U.useMemo(() => f?.mean ?? null, [f]), y = U.useMemo(() => {
    if (!f) return null;
    const x = f?.lowerProcessLimit ?? null, S = f?.upperProcessLimit ?? null;
    return x == null && S == null ? null : { lower: x, upper: S };
  }, [f]), g = U.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), m = U.useMemo(() => {
    const x = u?.rows;
    if (!(!x || x.length === 0))
      try {
        return ar(x, {
          metricImprovement: s,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, s]), I = U.useMemo(() => to(m), [m?.length]), N = U.useMemo(() => {
    if (!(!m || m.length === 0))
      return m.map((x) => x === Je.NoJudgement);
  }, [m?.length]), L = U.useMemo(() => {
    let x = null;
    if (f && f.value != null && !f.ghost) {
      const F = f.variationIcon;
      h === Se.SpecialCauseNoJudgement ? x = Jl(F) ? Se.SpecialCauseNoJudgement : Se.CommonCause : x = Fr(F) ?? Se.CommonCause;
    }
    const S = x ?? Se.CommonCause, C = xa[S].hex, [_, b, w] = vg(C), k = ba();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${_}, ${b}, ${w}, ${k.start}) 0%, rgba(${_}, ${b}, ${w}, ${k.mid}) 50%, rgba(${_}, ${b}, ${w}, ${k.end}) 100%)`,
      "--fdp-metric-card-accent": C
    };
  }, [f, h]);
  return { sparkProps: U.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: o,
    showLimitBand: l,
    showInnerBands: i,
    metricImprovement: s,
    centerLine: p,
    controlLimits: y,
    sigmaBands: g,
    pointSignals: I,
    pointNeutralSpecialCause: N,
    visualCategories: m,
    variationState: h ?? void 0
  }), [
    d,
    c,
    o,
    l,
    i,
    s,
    h,
    p,
    y?.lower,
    y?.upper,
    g?.upperTwo,
    g?.lowerOne,
    g?.lowerTwo,
    I?.length,
    N?.length,
    m?.length
  ]), metricCardStyle: L, latestState: h };
}
const Ky = ({
  sparkData: e,
  direction: t = Ae.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: s = !1,
  showInnerBands: o = !1,
  maxPoints: l,
  autoValue: i = !0,
  autoDelta: c = !0,
  autoMetadata: d = !0,
  defaultUnit: u,
  intervalHint: f,
  startDate: h,
  deltaConfig: p,
  ...y
}) => {
  const g = wg({
    values: e.map((S) => S.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: s,
    showInnerBands: o,
    showMean: n
  }), m = /* @__PURE__ */ r.jsx(Zl, { ...g.sparkProps, maxPoints: l }), I = U.useMemo(() => Ql({
    values: e.map((S) => typeof S.value == "number" ? S.value : null),
    dates: e.map((S) => S.date),
    intervalHint: f,
    startDate: h,
    providedUnit: y.unit,
    defaultUnit: u,
    autoValue: i,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, y.unit, u, i, c, d, p]), N = i && I.value != null ? I.value : y.value, L = c && I.delta ? I.delta : y.delta, D = I.unit || y.unit, x = d && I.metadata ? I.metadata : y.metadata;
  return /* @__PURE__ */ r.jsx(
    jm,
    {
      ...y,
      value: N,
      unit: D,
      delta: L,
      metadata: x,
      visual: m,
      style: g.metricCardStyle
    }
  );
}, Sg = "150ms", _g = "300ms", kg = "500ms", Cg = "cubic-bezier(0.4, 0, 1, 1)", Ng = "cubic-bezier(0, 0, 0.2, 1)", jg = "cubic-bezier(0.4, 0, 0.2, 1)", Mg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Ig = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Dg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Tg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Lg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", $g = "1px", Ag = "2px", Eg = "4px", Pg = "4px", Fg = "4px", Rg = "2px", Bg = "1px", Hg = "0px", zg = "4px", Og = "8px", Ug = "12px", ec = "#d8dde0", tc = "#4c6272", nc = "#d8dde0", rc = "#aeb7bd", ac = "#d5281b", sc = "#005eb8", oc = "#ffffff", ic = "#212b32", lc = "#007f3b", cc = "#330072", dc = "#7c2855", uc = "#d5281b", fc = "#ffeb3b", pc = "#fff9c4", hc = "#ffb81c", mc = "#ed8b00", gc = "#00a499", xc = "#ae2573", bc = "#4c6272", yc = "#768692", vc = "#aeb7bd", wc = "#d8dde0", Sc = "#f0f4f5", Wg = "#212b32", Gg = "#4c6272", Vg = "#ffffff", Yg = "#212b32", Zg = "#005eb8", Jg = "#7c2855", qg = "#003087", Xg = "#330072", Qg = "#ffeb3b", Kg = "#212b32", e0 = "#d8dde0", t0 = "#ffffff33", n0 = "#d5281b", r0 = "#4c6272", a0 = "#ffffff", s0 = "#007f3b", o0 = "#ffffff", i0 = "#006530", l0 = "#004021", c0 = "#004021", d0 = "#00000000", u0 = "#ffffff", f0 = "#005eb8", p0 = "#005eb8", h0 = "#d9e5f2", m0 = "#c7daf0", g0 = "#005eb8", x0 = "#ffffff", b0 = "#212b32", y0 = "#d9dde0", v0 = "#b3bcc2", w0 = "#b3bcc2", S0 = "#d5281b", _0 = "#aa2016", k0 = "#6a140e", C0 = "#6a140e", N0 = "#005eb8", j0 = "#004b93", M0 = "#002f5c", I0 = "#002f5c", D0 = "8px", T0 = "16px", L0 = "12px", $0 = "16px", A0 = "4px", E0 = "40px", P0 = "4px", F0 = "40px", R0 = "12px", B0 = "16px", H0 = "32px", z0 = "16px", O0 = "20px", U0 = "28px", W0 = "9px", G0 = "2px", V0 = "16px", Y0 = "24px", Z0 = "8px", J0 = "24px", q0 = "16px", X0 = "4px", Q0 = "4px", K0 = "4px", ex = "8px", tx = "4px", nx = "16px", rx = "#007f3b", ax = "#006530", sx = "#004021", ox = "#d8dde0", ix = "#ffffff", lx = "#768692", cx = "#00000000", dx = "#ffeb3b", ux = "#00000000", fx = "#ffffff", px = "#d9e5f2", hx = "#c7daf0", mx = "#005eb8", gx = "#005eb8", _c = "8px", kc = "16px", Cc = "12px", Nc = "16px", xx = "2px", bx = "4px", yx = "4px", vx = "600", wx = "#ffffff", Sx = "#d8dde0", _x = "#aeb7bd", kx = "#f0f4f5", Cx = "#212b32", Nx = "#212b32", jx = "#005eb8", jc = "16px", Mc = "32px", Ic = "16px", Mx = "1px", Ix = "4px", Dx = "none", Tx = "0 2px 4px rgba(0, 0, 0, 0.1)", Lx = "#ffffff", $x = "#ffffff", Ax = "#d8dde0", Ex = "#ffffff", Px = "#4c6272", Fx = "#ffeb3b", Rx = "#d5281b", Bx = "#aeb7bd", Hx = "#212b32", zx = "#4c6272", Ox = "#768692", Ux = "#212b32", Wx = "#ffffff", Gx = "600", Vx = "#d5281b", Yx = "600", Zx = "#4c6272", Dc = "4px", Tc = "40px", Lc = "40px", $c = "12px", Jx = "2px", qx = "4px", Xx = "0px", Qx = "16px", Kx = "18px", eb = "24px", tb = "32px", nb = "34px", rb = "32px", ab = "40px", sb = "48px", ob = "5.4ex", ib = "7.2ex", lb = "9ex", cb = "10.8ex", db = "20ex", ub = "38ex", fb = "56ex", pb = "44px", hb = "40px", mb = "1020px", gb = "100%", xb = "50%", bb = "33.333%", yb = "25%", vb = "20%", wb = "320px", Sb = "641px", _b = "1025px", kb = "1280px", Cb = "960px", Nb = "32px", jb = "16px", Mb = "#d5281b", Ib = "#d5281b", Db = "#ffffff", Tb = "#007f3b", Lb = "#007f3b", $b = "#ffffff", Ab = "#ffeb3b", Eb = "#ffeb3b", Pb = "#212b32", Fb = "#005eb8", Rb = "#005eb8", Bb = "#ffffff", Hb = "#d8dde0", zb = "#aeb7bd", Ob = "#768692", Ub = "0 4px 0 #004021", Wb = "0 4px 0 #005eb8", Gb = "0 4px 0 #6a140e", Vb = "0 4px 0 #ffeb3b", Yb = "none", Zb = "0 2px 4px rgba(0, 0, 0, 0.1)", Jb = "4px", qb = "0px", Xb = "solid", Qb = "0 0 0 3px #ffeb3b", Kb = "0 0 0 3px #ffeb3b", ey = "none", ty = "0 1px 3px rgba(0, 0, 0, 0.12)", ny = "0 2px 6px rgba(0, 0, 0, 0.16)", ry = "0 4px 12px rgba(0, 0, 0, 0.20)", Ac = "0", Ec = "4px", Pc = "8px", Fc = "16px", Rc = "24px", Bc = "32px", Hc = "40px", zc = "48px", Oc = "56px", Uc = "64px", ds = "0", us = "0", fs = "4px", ps = "4px", hs = "8px", ms = "8px", gs = "8px", xs = "16px", bs = "16px", ys = "24px", vs = "24px", ws = "32px", Ss = "32px", _s = "40px", ks = "40px", Cs = "48px", Ns = "48px", js = "56px", Ms = "56px", Is = "64px", Rr = "Frutiger W01", Br = "Arial, Helvetica, sans-serif", Hr = "sans-serif", zr = "400", Or = "600", Ur = "400", Wr = "12px", Gr = "14px", Vr = "12pt", Yr = "14px", Zr = "16px", Jr = "12pt", qr = "16px", Xr = "19px", Qr = "13pt", Kr = "19px", ea = "22px", ta = "15pt", na = "22px", ra = "26px", aa = "17pt", sa = "27px", oa = "36px", ia = "20pt", la = "33px", ca = "48px", da = "24pt", Ds = "16px", Ts = "24px", Lt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, $t = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, At = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Et = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Rt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, ay = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Sg,
  AnimationDurationNormal: _g,
  AnimationDurationSlow: kg,
  AnimationEasingBounce: Mg,
  AnimationEasingEaseIn: Cg,
  AnimationEasingEaseInOut: jg,
  AnimationEasingEaseOut: Ng,
  BorderColorCard: nc,
  BorderColorCardHover: rc,
  BorderColorDefault: ec,
  BorderColorError: ac,
  BorderColorForm: tc,
  BorderRadiusLarge: Ug,
  BorderRadiusMedium: Og,
  BorderRadiusNone: Hg,
  BorderRadiusSmall: zg,
  BorderWidthCardBottom: Pg,
  BorderWidthDefault: $g,
  BorderWidthFormElement: Ag,
  BorderWidthFormElementError: Eg,
  BorderWidthPanel: Fg,
  BorderWidthTableCell: Bg,
  BorderWidthTableHeader: Rg,
  BreakpointDesktop: _b,
  BreakpointLargeDesktop: kb,
  BreakpointMobile: wb,
  BreakpointTablet: Sb,
  ButtonBorderRadius: bx,
  ButtonBorderWidth: xx,
  ButtonPrimaryBackgroundActive: sx,
  ButtonPrimaryBackgroundDefault: rx,
  ButtonPrimaryBackgroundDisabled: ox,
  ButtonPrimaryBackgroundHover: ax,
  ButtonPrimaryBorderDefault: cx,
  ButtonPrimaryBorderFocus: dx,
  ButtonPrimaryTextDefault: ix,
  ButtonPrimaryTextDisabled: lx,
  ButtonSecondaryBackgroundActive: hx,
  ButtonSecondaryBackgroundDefault: ux,
  ButtonSecondaryBackgroundHover: px,
  ButtonSecondaryBackgroundSolid: fx,
  ButtonSecondaryBorderDefault: gx,
  ButtonSecondaryTextDefault: mx,
  ButtonShadowSize: yx,
  ButtonSpacingPaddingHorizontalDesktop: Nc,
  ButtonSpacingPaddingHorizontalMobile: kc,
  ButtonSpacingPaddingVerticalDesktop: Cc,
  ButtonSpacingPaddingVerticalMobile: _c,
  ButtonTypographyWeight: vx,
  CardBackgroundDefault: wx,
  CardBorderBottom: kx,
  CardBorderDefault: Sx,
  CardBorderHover: _x,
  CardBorderWidthBottom: Ix,
  CardBorderWidthDefault: Mx,
  CardShadowDefault: Dx,
  CardShadowHover: Tx,
  CardSpacingHeadingMargin: Ic,
  CardSpacingPaddingDesktop: Mc,
  CardSpacingPaddingMobile: jc,
  CardTextDescription: Nx,
  CardTextHeading: Cx,
  CardTextLink: jx,
  ColorBorderDefault: e0,
  ColorBorderSecondary: t0,
  ColorButtonLoginActive: M0,
  ColorButtonLoginBackground: N0,
  ColorButtonLoginHover: j0,
  ColorButtonLoginShadow: I0,
  ColorButtonPrimaryActive: l0,
  ColorButtonPrimaryBackground: s0,
  ColorButtonPrimaryHover: i0,
  ColorButtonPrimaryShadow: c0,
  ColorButtonPrimaryText: o0,
  ColorButtonReverseActive: v0,
  ColorButtonReverseBackground: x0,
  ColorButtonReverseHover: y0,
  ColorButtonReverseShadow: w0,
  ColorButtonReverseText: b0,
  ColorButtonSecondaryActive: m0,
  ColorButtonSecondaryBackground: d0,
  ColorButtonSecondaryBackgroundSolid: u0,
  ColorButtonSecondaryBorder: f0,
  ColorButtonSecondaryHover: h0,
  ColorButtonSecondaryShadow: g0,
  ColorButtonSecondaryText: p0,
  ColorButtonWarningActive: k0,
  ColorButtonWarningBackground: S0,
  ColorButtonWarningHover: _0,
  ColorButtonWarningShadow: C0,
  ColorError: n0,
  ColorFocusBackground: Qg,
  ColorFocusText: Kg,
  ColorFormBackground: a0,
  ColorFormBorder: r0,
  ColorGrey1: bc,
  ColorGrey2: yc,
  ColorGrey3: vc,
  ColorGrey4: wc,
  ColorGrey5: Sc,
  ColorLinkActive: qg,
  ColorLinkDefault: Zg,
  ColorLinkHover: Jg,
  ColorLinkVisited: Xg,
  ColorPrimaryBlack: ic,
  ColorPrimaryBlue: sc,
  ColorPrimaryDarkPink: dc,
  ColorPrimaryGreen: lc,
  ColorPrimaryPurple: cc,
  ColorPrimaryRed: uc,
  ColorPrimaryWhite: oc,
  ColorPrimaryYellow: fc,
  ColorSecondaryAquaGreen: gc,
  ColorSecondaryOrange: mc,
  ColorSecondaryPaleYellow: pc,
  ColorSecondaryPink: xc,
  ColorSecondaryWarmYellow: hc,
  ColorTextPrimary: Wg,
  ColorTextPrint: Yg,
  ColorTextReverse: Vg,
  ColorTextSecondary: Gg,
  ComponentBlur: Q0,
  ComponentBreadcrumbChevronMarginLeft: W0,
  ComponentBreadcrumbChevronMarginRight: G0,
  ComponentBreadcrumbPaddingTopDesktop: Y0,
  ComponentBreadcrumbPaddingTopMobile: V0,
  ComponentButtonPaddingDesktopHorizontal: $0,
  ComponentButtonPaddingDesktopVertical: L0,
  ComponentButtonPaddingMobileHorizontal: T0,
  ComponentButtonPaddingMobileVertical: D0,
  ComponentButtonShadowSize: A0,
  ComponentCardHeadingMargin: z0,
  ComponentCardPaddingDesktop: H0,
  ComponentCardPaddingMobile: B0,
  ComponentDetails: ex,
  ComponentExpander: tx,
  ComponentFormCheckboxLabelPadding: R0,
  ComponentFormCheckboxSize: F0,
  ComponentFormInputMinHeight: E0,
  ComponentFormInputPadding: P0,
  ComponentLink: K0,
  ComponentPagination: nx,
  ComponentPanelPaddingDesktop: U0,
  ComponentPanelPaddingMobile: O0,
  ComponentSpread: X0,
  ComponentSummaryListCellPaddingHorizontal: J0,
  ComponentSummaryListCellPaddingVertical: Z0,
  ComponentSummaryListRowMargin: q0,
  ElevationHigh: ry,
  ElevationLow: ty,
  ElevationMedium: ny,
  ElevationNone: ey,
  FocusOutlineOffset: qb,
  FocusOutlineStyle: Xb,
  FocusOutlineWidth: Jb,
  FocusShadowButton: Kb,
  FocusShadowInput: Qb,
  FontFamilyBase: Rr,
  FontFamilyFallback: Br,
  FontFamilyPrint: Hr,
  FontLineHeightBase: Ts,
  FontSize14Mobile: Wr,
  FontSize14Print: Vr,
  FontSize14Tablet: Gr,
  FontSize16Mobile: Yr,
  FontSize16Print: Jr,
  FontSize16Tablet: Zr,
  FontSize19Mobile: qr,
  FontSize19Print: Qr,
  FontSize19Tablet: Xr,
  FontSize22Mobile: Kr,
  FontSize22Print: ta,
  FontSize22Tablet: ea,
  FontSize26Mobile: na,
  FontSize26Print: aa,
  FontSize26Tablet: ra,
  FontSize36Mobile: sa,
  FontSize36Print: ia,
  FontSize36Tablet: oa,
  FontSize48Mobile: la,
  FontSize48Print: da,
  FontSize48Tablet: ca,
  FontSizeBase: Ds,
  FontWeightBold: Or,
  FontWeightLight: Ur,
  FontWeightNormal: zr,
  FormBorderRadius: Xx,
  FormBorderWidthDefault: Jx,
  FormBorderWidthError: qx,
  FormErrorTextDefault: Vx,
  FormErrorTypographyWeight: Yx,
  FormHintTextDefault: Zx,
  FormInputBackgroundDefault: Lx,
  FormInputBackgroundDisabled: Ax,
  FormInputBackgroundError: Ex,
  FormInputBackgroundFocus: $x,
  FormInputBorderDefault: Px,
  FormInputBorderDisabled: Bx,
  FormInputBorderError: Rx,
  FormInputBorderFocus: Fx,
  FormInputTextDefault: Hx,
  FormInputTextDisabled: Ox,
  FormInputTextPlaceholder: zx,
  FormLabelTextDefault: Ux,
  FormLabelTextRequired: Wx,
  FormLabelTypographyWeight: Gx,
  FormSpacingCheckboxLabelPadding: $c,
  FormSpacingCheckboxSize: Lc,
  FormSpacingInputMinHeight: Tc,
  FormSpacingInputPadding: Dc,
  GridGutter: Nb,
  GridGutterHalf: jb,
  GridPageWidth: Cb,
  HeadingsNhsukHeadingL: $t,
  HeadingsNhsukHeadingM: At,
  HeadingsNhsukHeadingS: Et,
  HeadingsNhsukHeadingXl: Lt,
  HeadingsNhsukHeadingXs: Pt,
  LayoutColumnActions: vb,
  LayoutColumnFull: gb,
  LayoutColumnHalf: xb,
  LayoutColumnQuarter: yb,
  LayoutColumnThird: bb,
  LayoutContainerMaxWidth: mb,
  ParagraphsBody: Ft,
  ParagraphsBodyLarge: Rt,
  ParagraphsBodySmall: Bt,
  ParagraphsLedeText: Ht,
  ParagraphsLedeTextSmall: zt,
  ShadowButtonDefault: Ub,
  ShadowButtonFocus: Vb,
  ShadowButtonSecondary: Wb,
  ShadowButtonWarning: Gb,
  ShadowCardDefault: Yb,
  ShadowCardHover: Zb,
  SizeButtonMinHeightDesktop: hb,
  SizeButtonMinHeightMobile: pb,
  SizeFormControlLarge: sb,
  SizeFormControlMedium: ab,
  SizeFormControlSmall: rb,
  SizeFormInputWidth2xl: ub,
  SizeFormInputWidth3xl: fb,
  SizeFormInputWidthLg: cb,
  SizeFormInputWidthMd: lb,
  SizeFormInputWidthSm: ib,
  SizeFormInputWidthXl: db,
  SizeFormInputWidthXs: ob,
  SizeIconExtraLarge: tb,
  SizeIconLarge: eb,
  SizeIconMedium: Kx,
  SizeIconNhsDefault: nb,
  SizeIconSmall: Qx,
  Spacing0: Ac,
  Spacing1: Ec,
  Spacing2: Pc,
  Spacing3: Fc,
  Spacing4: Rc,
  Spacing5: Bc,
  Spacing6: Hc,
  Spacing7: zc,
  Spacing8: Oc,
  Spacing9: Uc,
  SpacingResponsive0Mobile: ds,
  SpacingResponsive0Tablet: us,
  SpacingResponsive1Mobile: fs,
  SpacingResponsive1Tablet: ps,
  SpacingResponsive2Mobile: hs,
  SpacingResponsive2Tablet: ms,
  SpacingResponsive3Mobile: gs,
  SpacingResponsive3Tablet: xs,
  SpacingResponsive4Mobile: bs,
  SpacingResponsive4Tablet: ys,
  SpacingResponsive5Mobile: vs,
  SpacingResponsive5Tablet: ws,
  SpacingResponsive6Mobile: Ss,
  SpacingResponsive6Tablet: _s,
  SpacingResponsive7Mobile: ks,
  SpacingResponsive7Tablet: Cs,
  SpacingResponsive8Mobile: Ns,
  SpacingResponsive8Tablet: js,
  SpacingResponsive9Mobile: Ms,
  SpacingResponsive9Tablet: Is,
  StateDisabledBackground: Hb,
  StateDisabledBorder: zb,
  StateDisabledText: Ob,
  StateErrorBackground: Mb,
  StateErrorBorder: Ib,
  StateErrorText: Db,
  StateInfoBackground: Fb,
  StateInfoBorder: Rb,
  StateInfoText: Bb,
  StateSuccessBackground: Tb,
  StateSuccessBorder: Lb,
  StateSuccessText: $b,
  StateWarningBackground: Ab,
  StateWarningBorder: Eb,
  StateWarningText: Pb,
  TransitionButtonDefault: Ig,
  TransitionButtonShadow: Dg,
  TransitionCardHover: Lg,
  TransitionInputFocus: Tg
}, Symbol.toStringTag, { value: "Module" })), ev = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), tv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Lt.fontFamily,
      fontWeight: Lt.fontWeight,
      fontSize: Lt.fontSize.mobile,
      lineHeight: Lt.lineHeight,
      marginTop: Lt.marginTop,
      marginBottom: Lt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), nv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: $t.fontFamily,
      fontWeight: $t.fontWeight,
      fontSize: $t.fontSize.mobile,
      lineHeight: $t.lineHeight,
      marginTop: $t.marginTop,
      marginBottom: $t.marginBottom.mobile,
      ...n
    },
    children: e
  }
), rv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: At.fontFamily,
      fontWeight: At.fontWeight,
      fontSize: At.fontSize.mobile,
      lineHeight: At.lineHeight,
      marginTop: At.marginTop,
      marginBottom: At.marginBottom.mobile,
      ...n
    },
    children: e
  }
), av = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Et.fontFamily,
      fontWeight: Et.fontWeight,
      fontSize: Et.fontSize.mobile,
      lineHeight: Et.lineHeight,
      marginTop: Et.marginTop,
      marginBottom: Et.marginBottom.mobile,
      ...n
    },
    children: e
  }
), sv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Pt.fontFamily,
      fontWeight: Pt.fontWeight,
      fontSize: Pt.fontSize.mobile,
      lineHeight: Pt.lineHeight,
      marginTop: Pt.marginTop,
      marginBottom: Pt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), ov = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), iv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Rt.fontFamily,
      fontWeight: Rt.fontWeight,
      fontSize: Rt.fontSize.mobile,
      lineHeight: Rt.lineHeight,
      marginTop: Rt.marginTop,
      marginBottom: Rt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), lv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Bt.fontFamily,
      fontWeight: Bt.fontWeight,
      fontSize: Bt.fontSize.mobile,
      lineHeight: Bt.lineHeight,
      marginTop: Bt.marginTop,
      marginBottom: Bt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), cv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ht.fontFamily,
      fontWeight: Ht.fontWeight,
      fontSize: Ht.fontSize.mobile,
      lineHeight: Ht.lineHeight,
      marginTop: Ht.marginTop,
      marginBottom: Ht.marginBottom.mobile,
      ...n
    },
    children: e
  }
), dv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: zt.fontFamily,
      fontWeight: zt.fontWeight,
      fontSize: zt.fontSize.mobile,
      lineHeight: zt.lineHeight,
      marginTop: zt.marginTop,
      marginBottom: zt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), uv = () => je(() => ay, []), fv = () => je(() => ({
  // Border colors
  BorderColorDefault: ec,
  BorderColorForm: tc,
  BorderColorCard: nc,
  BorderColorCardHover: rc,
  BorderColorError: ac,
  // Primary colors
  ColorPrimaryBlue: sc,
  ColorPrimaryWhite: oc,
  ColorPrimaryBlack: ic,
  ColorPrimaryGreen: lc,
  ColorPrimaryPurple: cc,
  ColorPrimaryDarkPink: dc,
  ColorPrimaryRed: uc,
  ColorPrimaryYellow: fc,
  // Secondary colors
  ColorSecondaryPaleYellow: pc,
  ColorSecondaryWarmYellow: hc,
  ColorSecondaryOrange: mc,
  ColorSecondaryAquaGreen: gc,
  ColorSecondaryPink: xc,
  // Grey scale
  ColorGrey1: bc,
  ColorGrey2: yc,
  ColorGrey3: vc,
  ColorGrey4: wc,
  ColorGrey5: Sc
}), []), pv = () => je(() => ({
  Spacing0: Ac,
  Spacing1: Ec,
  Spacing2: Pc,
  Spacing3: Fc,
  Spacing4: Rc,
  Spacing5: Bc,
  Spacing6: Hc,
  Spacing7: zc,
  Spacing8: Oc,
  Spacing9: Uc
}), []), hv = () => je(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Wr,
    Size16: Yr,
    Size19: qr,
    Size22: Kr,
    Size26: na,
    Size36: sa,
    Size48: la
  },
  Tablet: {
    Size14: Gr,
    Size16: Zr,
    Size19: Xr,
    Size22: ea,
    Size26: ra,
    Size36: oa,
    Size48: ca
  },
  Print: {
    Size14: Vr,
    Size16: Jr,
    Size19: Qr,
    Size22: ta,
    Size26: aa,
    Size36: ia,
    Size48: da
  },
  Family: {
    Base: Rr,
    Fallback: Br,
    Print: Hr
  },
  Weight: {
    Normal: zr,
    Bold: Or,
    Light: Ur
  },
  Base: {
    Size: Ds,
    LineHeight: Ts
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Rr,
  FontFamilyFallback: Br,
  FontFamilyPrint: Hr,
  FontWeightNormal: zr,
  FontWeightBold: Or,
  FontWeightLight: Ur,
  FontSize14Mobile: Wr,
  FontSize14Tablet: Gr,
  FontSize14Print: Vr,
  FontSize16Mobile: Yr,
  FontSize16Tablet: Zr,
  FontSize16Print: Jr,
  FontSize19Mobile: qr,
  FontSize19Tablet: Xr,
  FontSize19Print: Qr,
  FontSize22Mobile: Kr,
  FontSize22Tablet: ea,
  FontSize22Print: ta,
  FontSize26Mobile: na,
  FontSize26Tablet: ra,
  FontSize26Print: aa,
  FontSize36Mobile: sa,
  FontSize36Tablet: oa,
  FontSize36Print: ia,
  FontSize48Mobile: la,
  FontSize48Tablet: ca,
  FontSize48Print: da,
  FontSizeBase: Ds,
  FontLineHeightBase: Ts
}), []), mv = () => je(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ds,
    Size1: fs,
    Size2: hs,
    Size3: gs,
    Size4: bs,
    Size5: vs,
    Size6: Ss,
    Size7: ks,
    Size8: Ns,
    Size9: Ms
  },
  Tablet: {
    Size0: us,
    Size1: ps,
    Size2: ms,
    Size3: xs,
    Size4: ys,
    Size5: ws,
    Size6: _s,
    Size7: Cs,
    Size8: js,
    Size9: Is
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: ds,
  SpacingResponsive0Tablet: us,
  SpacingResponsive1Mobile: fs,
  SpacingResponsive1Tablet: ps,
  SpacingResponsive2Mobile: hs,
  SpacingResponsive2Tablet: ms,
  SpacingResponsive3Mobile: gs,
  SpacingResponsive3Tablet: xs,
  SpacingResponsive4Mobile: bs,
  SpacingResponsive4Tablet: ys,
  SpacingResponsive5Mobile: vs,
  SpacingResponsive5Tablet: ws,
  SpacingResponsive6Mobile: Ss,
  SpacingResponsive6Tablet: _s,
  SpacingResponsive7Mobile: ks,
  SpacingResponsive7Tablet: Cs,
  SpacingResponsive8Mobile: Ns,
  SpacingResponsive8Tablet: js,
  SpacingResponsive9Mobile: Ms,
  SpacingResponsive9Tablet: Is
}), []), gv = () => je(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: _c,
  ButtonSpacingPaddingHorizontalMobile: kc,
  ButtonSpacingPaddingVerticalDesktop: Cc,
  ButtonSpacingPaddingHorizontalDesktop: Nc,
  // Card spacing	
  CardSpacingPaddingMobile: jc,
  CardSpacingPaddingDesktop: Mc,
  CardSpacingHeadingMargin: Ic,
  // Form spacing
  FormSpacingInputPadding: Dc,
  FormSpacingInputMinHeight: Tc,
  FormSpacingCheckboxSize: Lc,
  FormSpacingCheckboxLabelPadding: $c
}), []), xv = () => je(() => ({
  xl: Lt,
  l: $t,
  m: At,
  s: Et,
  xs: Pt
}), []), bv = () => je(() => ({
  body: Ft,
  bodyLarge: Rt,
  bodySmall: Bt,
  ledeText: Ht,
  ledeTextSmall: zt
}), []), yv = () => je(() => ({
  headings: {
    xl: Lt,
    l: $t,
    m: At,
    s: Et,
    xs: Pt
  },
  paragraphs: {
    body: Ft,
    bodyLarge: Rt,
    bodySmall: Bt,
    ledeText: Ht,
    ledeTextSmall: zt
  },
  fonts: {
    family: {
      base: Rr,
      fallback: Br,
      print: Hr
    },
    weight: {
      normal: zr,
      bold: Or,
      light: Ur
    },
    sizes: {
      mobile: {
        size14: Wr,
        size16: Yr,
        size19: qr,
        size22: Kr,
        size26: na,
        size36: sa,
        size48: la
      },
      tablet: {
        size14: Gr,
        size16: Zr,
        size19: Xr,
        size22: ea,
        size26: ra,
        size36: oa,
        size48: ca
      },
      print: {
        size14: Vr,
        size16: Jr,
        size19: Qr,
        size22: ta,
        size26: aa,
        size36: ia,
        size48: da
      }
    }
  }
}), []);
function vv(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, s] = U.useState(t), o = U.useCallback(() => s("three-column"), []), l = U.useCallback(() => s((c) => c === "three-column" ? n : c), [n]), i = U.useCallback(() => s((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: l,
    toggle: i,
    isDrilledIn: a === "three-column"
  };
}
const Wc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, gt = {
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
function wv(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Wc, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${gt.normal.eot}?#iefix") format("eot"),
       url("${t}${gt.normal.woff2}") format("woff2"),
       url("${t}${gt.normal.woff}") format("woff"),
       url("${t}${gt.normal.ttf}") format("truetype");
  src: url("${t}${gt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${gt.bold.eot}?#iefix") format("eot"),
       url("${t}${gt.bold.woff2}") format("woff2"),
       url("${t}${gt.bold.woff}") format("woff"),
       url("${t}${gt.bold.ttf}") format("truetype");
  src: url("${t}${gt.bold.eot}");
}`), a.join(`
`);
}
function Sv(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Wc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${gt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${gt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${gt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${gt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const _v = '"Frutiger W01", Arial, Helvetica, sans-serif', kv = "Arial, Helvetica, sans-serif";
async function Cv() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Fh as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  mr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  gr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Rh as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  Bh as AXIS_ZIGZAG_DEFAULT_CYCLES,
  zh as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  Hh as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  ki as Account,
  ly as ActionLink,
  Ry as AdaptiveDataGrid,
  Sg as AnimationDurationFast,
  _g as AnimationDurationNormal,
  kg as AnimationDurationSlow,
  Mg as AnimationEasingBounce,
  Cg as AnimationEasingEaseIn,
  jg as AnimationEasingEaseInOut,
  Ng as AnimationEasingEaseOut,
  ll as AppointmentCard,
  Yy as AreaSeriesPrimitive,
  Tp as AriaDataGrid,
  Qa as AriaTabsDataGrid,
  Ry as AriaTabsDataGridAdaptive,
  ri as Axis,
  Ls as BackLink,
  Jy as BandScalesProvider,
  Zy as BarSeriesPrimitive,
  nc as BorderColorCard,
  rc as BorderColorCardHover,
  ec as BorderColorDefault,
  ac as BorderColorError,
  tc as BorderColorForm,
  Ug as BorderRadiusLarge,
  Og as BorderRadiusMedium,
  Hg as BorderRadiusNone,
  zg as BorderRadiusSmall,
  Pg as BorderWidthCardBottom,
  $g as BorderWidthDefault,
  Ag as BorderWidthFormElement,
  Eg as BorderWidthFormElementError,
  Fg as BorderWidthPanel,
  Bg as BorderWidthTableCell,
  Rg as BorderWidthTableHeader,
  wy as BrandThemeProvider,
  mp as Breadcrumb,
  xd as Breakpoint,
  _b as BreakpointDesktop,
  kb as BreakpointLargeDesktop,
  wb as BreakpointMobile,
  Sb as BreakpointTablet,
  ut as Button,
  bx as ButtonBorderRadius,
  xx as ButtonBorderWidth,
  sx as ButtonPrimaryBackgroundActive,
  rx as ButtonPrimaryBackgroundDefault,
  ox as ButtonPrimaryBackgroundDisabled,
  ax as ButtonPrimaryBackgroundHover,
  cx as ButtonPrimaryBorderDefault,
  dx as ButtonPrimaryBorderFocus,
  ix as ButtonPrimaryTextDefault,
  lx as ButtonPrimaryTextDisabled,
  hx as ButtonSecondaryBackgroundActive,
  ux as ButtonSecondaryBackgroundDefault,
  px as ButtonSecondaryBackgroundHover,
  fx as ButtonSecondaryBackgroundSolid,
  gx as ButtonSecondaryBorderDefault,
  mx as ButtonSecondaryTextDefault,
  yx as ButtonShadowSize,
  Ni as ButtonSize,
  Nc as ButtonSpacingPaddingHorizontalDesktop,
  kc as ButtonSpacingPaddingHorizontalMobile,
  Cc as ButtonSpacingPaddingVerticalDesktop,
  _c as ButtonSpacingPaddingVerticalMobile,
  vx as ButtonTypographyWeight,
  Ci as ButtonVariant,
  rl as Card,
  wx as CardBackgroundDefault,
  kx as CardBorderBottom,
  Sx as CardBorderDefault,
  _x as CardBorderHover,
  Ix as CardBorderWidthBottom,
  Mx as CardBorderWidthDefault,
  Ny as CardGroup,
  jy as CardGroupItem,
  Dx as CardShadowDefault,
  Tx as CardShadowHover,
  Ic as CardSpacingHeadingMargin,
  Mc as CardSpacingPaddingDesktop,
  jc as CardSpacingPaddingMobile,
  Nx as CardTextDescription,
  Cx as CardTextHeading,
  jx as CardTextLink,
  My as CareCard,
  cy as CharacterCount,
  Xy as ChartEnhancer,
  qy as ChartNoScript,
  Eh as ChartRoot,
  ad as Checkbox,
  ld as Checkboxes,
  e0 as ColorBorderDefault,
  t0 as ColorBorderSecondary,
  M0 as ColorButtonLoginActive,
  N0 as ColorButtonLoginBackground,
  j0 as ColorButtonLoginHover,
  I0 as ColorButtonLoginShadow,
  l0 as ColorButtonPrimaryActive,
  s0 as ColorButtonPrimaryBackground,
  i0 as ColorButtonPrimaryHover,
  c0 as ColorButtonPrimaryShadow,
  o0 as ColorButtonPrimaryText,
  v0 as ColorButtonReverseActive,
  x0 as ColorButtonReverseBackground,
  y0 as ColorButtonReverseHover,
  w0 as ColorButtonReverseShadow,
  b0 as ColorButtonReverseText,
  m0 as ColorButtonSecondaryActive,
  d0 as ColorButtonSecondaryBackground,
  u0 as ColorButtonSecondaryBackgroundSolid,
  f0 as ColorButtonSecondaryBorder,
  h0 as ColorButtonSecondaryHover,
  g0 as ColorButtonSecondaryShadow,
  p0 as ColorButtonSecondaryText,
  k0 as ColorButtonWarningActive,
  S0 as ColorButtonWarningBackground,
  _0 as ColorButtonWarningHover,
  C0 as ColorButtonWarningShadow,
  n0 as ColorError,
  Qg as ColorFocusBackground,
  Kg as ColorFocusText,
  a0 as ColorFormBackground,
  r0 as ColorFormBorder,
  bc as ColorGrey1,
  yc as ColorGrey2,
  vc as ColorGrey3,
  wc as ColorGrey4,
  Sc as ColorGrey5,
  qg as ColorLinkActive,
  Zg as ColorLinkDefault,
  Jg as ColorLinkHover,
  Xg as ColorLinkVisited,
  ic as ColorPrimaryBlack,
  sc as ColorPrimaryBlue,
  dc as ColorPrimaryDarkPink,
  lc as ColorPrimaryGreen,
  cc as ColorPrimaryPurple,
  uc as ColorPrimaryRed,
  oc as ColorPrimaryWhite,
  fc as ColorPrimaryYellow,
  gc as ColorSecondaryAquaGreen,
  mc as ColorSecondaryOrange,
  pc as ColorSecondaryPaleYellow,
  xc as ColorSecondaryPink,
  hc as ColorSecondaryWarmYellow,
  Wg as ColorTextPrimary,
  Yg as ColorTextPrint,
  Vg as ColorTextReverse,
  Gg as ColorTextSecondary,
  Wn as Column,
  yd as ColumnAlign,
  Q0 as ComponentBlur,
  W0 as ComponentBreadcrumbChevronMarginLeft,
  G0 as ComponentBreadcrumbChevronMarginRight,
  Y0 as ComponentBreadcrumbPaddingTopDesktop,
  V0 as ComponentBreadcrumbPaddingTopMobile,
  $0 as ComponentButtonPaddingDesktopHorizontal,
  L0 as ComponentButtonPaddingDesktopVertical,
  T0 as ComponentButtonPaddingMobileHorizontal,
  D0 as ComponentButtonPaddingMobileVertical,
  A0 as ComponentButtonShadowSize,
  z0 as ComponentCardHeadingMargin,
  H0 as ComponentCardPaddingDesktop,
  B0 as ComponentCardPaddingMobile,
  ex as ComponentDetails,
  tx as ComponentExpander,
  R0 as ComponentFormCheckboxLabelPadding,
  F0 as ComponentFormCheckboxSize,
  E0 as ComponentFormInputMinHeight,
  P0 as ComponentFormInputPadding,
  K0 as ComponentLink,
  nx as ComponentPagination,
  U0 as ComponentPanelPaddingDesktop,
  O0 as ComponentPanelPaddingMobile,
  X0 as ComponentSpread,
  J0 as ComponentSummaryListCellPaddingHorizontal,
  Z0 as ComponentSummaryListCellPaddingVertical,
  q0 as ComponentSummaryListRowMargin,
  Di as Container,
  Cy as ContentsList,
  Wc as DEFAULT_FONT_CONFIG,
  Ey as DashboardSummaryGrid,
  by as DateInput,
  Sp as Details,
  _p as DoDontList,
  ry as ElevationHigh,
  ty as ElevationLow,
  ny as ElevationMedium,
  ey as ElevationNone,
  co as ErrorMessage,
  xy as ErrorSummary,
  kp as Expander,
  gt as FRUTIGER_FONT_FILES,
  Es as Fieldset,
  bd as Float,
  qb as FocusOutlineOffset,
  Xb as FocusOutlineStyle,
  Jb as FocusOutlineWidth,
  Kb as FocusShadowButton,
  Qb as FocusShadowInput,
  Rr as FontFamilyBase,
  Br as FontFamilyFallback,
  Hr as FontFamilyPrint,
  Ts as FontLineHeightBase,
  Wr as FontSize14Mobile,
  Vr as FontSize14Print,
  Gr as FontSize14Tablet,
  Yr as FontSize16Mobile,
  Jr as FontSize16Print,
  Zr as FontSize16Tablet,
  qr as FontSize19Mobile,
  Qr as FontSize19Print,
  Xr as FontSize19Tablet,
  Kr as FontSize22Mobile,
  ta as FontSize22Print,
  ea as FontSize22Tablet,
  na as FontSize26Mobile,
  aa as FontSize26Print,
  ra as FontSize26Tablet,
  sa as FontSize36Mobile,
  ia as FontSize36Print,
  oa as FontSize36Tablet,
  la as FontSize48Mobile,
  da as FontSize48Print,
  ca as FontSize48Tablet,
  Ds as FontSizeBase,
  Or as FontWeightBold,
  Ur as FontWeightLight,
  zr as FontWeightNormal,
  Fi as Footer,
  Xx as FormBorderRadius,
  Jx as FormBorderWidthDefault,
  qx as FormBorderWidthError,
  Vx as FormErrorTextDefault,
  Yx as FormErrorTypographyWeight,
  Zx as FormHintTextDefault,
  Lx as FormInputBackgroundDefault,
  Ax as FormInputBackgroundDisabled,
  Ex as FormInputBackgroundError,
  $x as FormInputBackgroundFocus,
  Px as FormInputBorderDefault,
  Bx as FormInputBorderDisabled,
  Rx as FormInputBorderError,
  Fx as FormInputBorderFocus,
  Hx as FormInputTextDefault,
  Ox as FormInputTextDisabled,
  zx as FormInputTextPlaceholder,
  Ux as FormLabelTextDefault,
  Wx as FormLabelTextRequired,
  Gx as FormLabelTypographyWeight,
  $c as FormSpacingCheckboxLabelPadding,
  Lc as FormSpacingCheckboxSize,
  Tc as FormSpacingInputMinHeight,
  Dc as FormSpacingInputPadding,
  _y as GanttChart,
  Ga as Grid,
  Nb as GridGutter,
  jb as GridGutterHalf,
  Oh as GridLines,
  Cb as GridPageWidth,
  fn as GridWidth,
  Pi as Header,
  Sy as HeaderSSR,
  Hd as HeaderSearch,
  Pi as HeaderStatic,
  Wt as Heading,
  $t as HeadingsNhsukHeadingL,
  At as HeadingsNhsukHeadingM,
  Et as HeadingsNhsukHeadingS,
  Lt as HeadingsNhsukHeadingXl,
  Pt as HeadingsNhsukHeadingXs,
  Od as Hero,
  Mi as Hint,
  $y as Images,
  $s as Input,
  Iy as InsetText,
  As as Label,
  vb as LayoutColumnActions,
  gb as LayoutColumnFull,
  xb as LayoutColumnHalf,
  yb as LayoutColumnQuarter,
  bb as LayoutColumnThird,
  mb as LayoutContainerMaxWidth,
  Vy as Legend,
  Ph as LineScalesProvider,
  km as LineSeriesPrimitive,
  Sd as List,
  Ti as MainWrapper,
  cl as MedicationCard,
  jm as MetricCard,
  ov as NHSBodyText,
  iv as NHSBodyTextLarge,
  lv as NHSBodyTextSmall,
  tv as NHSHeading1,
  nv as NHSHeading2,
  rv as NHSHeading3,
  av as NHSHeading4,
  sv as NHSHeading5,
  cv as NHSLedeText,
  dv as NHSLedeTextSmall,
  vy as NHSThemeProvider,
  kv as NHS_FALLBACK_FONT_STACK,
  _v as NHS_FONT_STACK,
  _h as NavigationSplitView,
  Hy as PageTemplate,
  ky as Pagination,
  gp as Panel,
  Ft as ParagraphsBody,
  Rt as ParagraphsBodyLarge,
  Bt as ParagraphsBodySmall,
  Ht as ParagraphsLedeText,
  zt as ParagraphsLedeTextSmall,
  il as PatientCard,
  Ih as ProductRoadmap,
  dy as Radios,
  uy as RadiosServer,
  Ry as ResponsiveDataGrid,
  By as ResponsiveDataGridDemo,
  Kt as Row,
  Qy as SPC,
  bg as SPCChart,
  Ky as SPCMetricCard,
  br as Select,
  pd as SelectOption,
  Ub as ShadowButtonDefault,
  Vb as ShadowButtonFocus,
  Wb as ShadowButtonSecondary,
  Gb as ShadowButtonWarning,
  Yb as ShadowCardDefault,
  Zb as ShadowCardHover,
  hb as SizeButtonMinHeightDesktop,
  pb as SizeButtonMinHeightMobile,
  sb as SizeFormControlLarge,
  ab as SizeFormControlMedium,
  rb as SizeFormControlSmall,
  ub as SizeFormInputWidth2xl,
  fb as SizeFormInputWidth3xl,
  cb as SizeFormInputWidthLg,
  lb as SizeFormInputWidthMd,
  ib as SizeFormInputWidthSm,
  db as SizeFormInputWidthXl,
  ob as SizeFormInputWidthXs,
  tb as SizeIconExtraLarge,
  eb as SizeIconLarge,
  Kx as SizeIconMedium,
  nb as SizeIconNhsDefault,
  Qx as SizeIconSmall,
  nl as SkipLink,
  Ay as SlotMatrix,
  Py as SortStatusControl,
  Ac as Spacing0,
  Ec as Spacing1,
  Pc as Spacing2,
  Fc as Spacing3,
  Rc as Spacing4,
  Bc as Spacing5,
  Hc as Spacing6,
  zc as Spacing7,
  Oc as Spacing8,
  Uc as Spacing9,
  ds as SpacingResponsive0Mobile,
  us as SpacingResponsive0Tablet,
  fs as SpacingResponsive1Mobile,
  ps as SpacingResponsive1Tablet,
  hs as SpacingResponsive2Mobile,
  ms as SpacingResponsive2Tablet,
  gs as SpacingResponsive3Mobile,
  xs as SpacingResponsive3Tablet,
  bs as SpacingResponsive4Mobile,
  ys as SpacingResponsive4Tablet,
  vs as SpacingResponsive5Mobile,
  ws as SpacingResponsive5Tablet,
  Ss as SpacingResponsive6Mobile,
  _s as SpacingResponsive6Tablet,
  ks as SpacingResponsive7Mobile,
  Cs as SpacingResponsive7Tablet,
  Ns as SpacingResponsive8Mobile,
  js as SpacingResponsive8Tablet,
  Ms as SpacingResponsive9Mobile,
  Is as SpacingResponsive9Tablet,
  fy as SpacingUtilities,
  Hb as StateDisabledBackground,
  zb as StateDisabledBorder,
  Ob as StateDisabledText,
  Mb as StateErrorBackground,
  Ib as StateErrorBorder,
  Db as StateErrorText,
  Fb as StateInfoBackground,
  Rb as StateInfoBorder,
  Bb as StateInfoText,
  Tb as StateSuccessBackground,
  Lb as StateSuccessBorder,
  $b as StateSuccessText,
  Ab as StateWarningBackground,
  Eb as StateWarningBorder,
  Pb as StateWarningText,
  Dp as SummaryCard,
  Dy as SummaryList,
  Yt as Table,
  Ty as Tabs,
  Ze as Tag,
  Cp as TaskList,
  dd as Textarea,
  Gy as TooltipOverlay,
  _m as TooltipProvider,
  zy as TransactionalPageTemplate,
  Ig as TransitionButtonDefault,
  Dg as TransitionButtonShadow,
  Lg as TransitionCardHover,
  Tg as TransitionInputFocus,
  Wy as VisibilityProvider,
  dl as VitalsCard,
  gy as WIDTH_FRACTIONS,
  Ly as WarningCallout,
  ml as WidthContainer,
  hy as WidthUtilities,
  Uy as WorkflowSplitView,
  Cv as checkFrutigerLoaded,
  Vs as createGenericTabsConfig,
  Fy as createTCHTabsConfig,
  wv as generateFrutigerFontFace,
  ev as getResponsiveStyles,
  py as getSpacingClass,
  my as getWidthClass,
  Sv as preloadFrutigerFonts,
  Op as tchDataConfig,
  Bd as useBrand,
  fv as useColors,
  gv as useComponentSpacing,
  xv as useNHSHeadings,
  bv as useNHSParagraphs,
  yy as useNHSTheme,
  yv as useNHSTypographySystem,
  vv as useNavigationSplitDrill,
  gh as useNavigationSplitUrlSync,
  Ys as useNhsFdpBreakpoints,
  mv as useResponsiveSpacing,
  Oy as useResponsiveValue,
  pv as useSpacing,
  wg as useSpc,
  uv as useTokens,
  hv as useTypography
};
//# sourceMappingURL=index.esm.js.map
