import * as O from "react";
import bt, { useState as ze, useEffect as Ge, useCallback as me, useRef as Oe, createElement as ki, useMemo as je, useContext as Ci, createContext as Ni, forwardRef as zn, useImperativeHandle as ji, useReducer as Mi, memo as ad, useId as kr } from "react";
import { createPortal as od } from "react-dom";
function sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr = { exports: {} }, Un = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function id() {
  if (us) return Un;
  us = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, o, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      s = {};
      for (var i in o)
        i !== "key" && (s[i] = o[i]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: a,
      key: l,
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
var fs;
function ld() {
  return fs || (fs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === w ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case g:
          return "Fragment";
        case A:
          return "Profiler";
        case m:
          return "StrictMode";
        case x:
          return "Suspense";
        case N:
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
          case C:
            return (R._context.displayName || "Context") + ".Consumer";
          case D:
            var ee = R.render;
            return R = R.displayName, R || (R = ee.displayName || ee.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case M:
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
        var W = ee.error, X = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return W.call(
          ee,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
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
    function o() {
      var R = k.A;
      return R === null ? null : R.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(R) {
      if (j.call(R, "key")) {
        var ee = Object.getOwnPropertyDescriptor(R, "key").get;
        if (ee && ee.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, ee) {
      function W() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ee
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: W,
        configurable: !0
      });
    }
    function c() {
      var R = e(this.type);
      return I[R] || (I[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, ee, W, X, q, Q, fe, ne) {
      return W = Q.ref, R = {
        $$typeof: p,
        type: R,
        key: ee,
        props: Q,
        _owner: q
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(R, "ref", {
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
        value: fe
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function u(R, ee, W, X, q, Q, fe, ne) {
      var re = ee.children;
      if (re !== void 0)
        if (X)
          if (F(re)) {
            for (X = 0; X < re.length; X++)
              f(re[X]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(re);
      if (j.call(ee, "key")) {
        re = e(R);
        var K = Object.keys(ee).filter(function(ie) {
          return ie !== "key";
        });
        X = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", Y[re + X] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          re,
          K,
          re
        ), Y[re + X] = !0);
      }
      if (re = null, W !== void 0 && (n(W), re = "" + W), l(ee) && (n(ee.key), re = "" + ee.key), "key" in ee) {
        W = {};
        for (var te in ee)
          te !== "key" && (W[te] = ee[te]);
      } else W = ee;
      return re && i(
        W,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        re,
        Q,
        q,
        o(),
        W,
        fe,
        ne
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === p && R._store && (R._store.validated = 1);
    }
    var h = bt, p = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), L = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, F = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var $, I = {}, H = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), oe = E(a(s)), Y = {};
    Wn.Fragment = g, Wn.jsx = function(R, ee, W, X, q) {
      var Q = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        R,
        ee,
        W,
        !1,
        X,
        q,
        Q ? Error("react-stack-top-frame") : H,
        Q ? E(a(R)) : oe
      );
    }, Wn.jsxs = function(R, ee, W, X, q) {
      var Q = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        R,
        ee,
        W,
        !0,
        X,
        q,
        Q ? Error("react-stack-top-frame") : H,
        Q ? E(a(R)) : oe
      );
    };
  })()), Wn;
}
var ps;
function cd() {
  return ps || (ps = 1, process.env.NODE_ENV === "production" ? mr.exports = id() : mr.exports = ld()), mr.exports;
}
var r = cd(), La = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var hs;
function dd() {
  return hs || (hs = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var s = "", l = 0; l < arguments.length; l++) {
          var i = arguments[l];
          i && (s = o(s, a(i)));
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
        var l = "";
        for (var i in s)
          t.call(s, i) && s[i] && (l = o(l, i));
        return l;
      }
      function o(s, l) {
        return l ? s ? s + " " + l : s + l : s;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(La)), La.exports;
}
var ud = dd();
const ye = /* @__PURE__ */ sd(ud), py = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = ye(
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
}, Ii = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: n,
  variant: a = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const o = (s) => {
    const l = s.icon ? /* @__PURE__ */ r.jsx(
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
    ) : null, i = s.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      l,
      i
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
      className: ye(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        n
      ),
      "aria-label": e,
      children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-account__list", children: t.map(
        (s, l) => s && /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ye(
              "nhsuk-account__item nhsuk-header__account-item",
              s.className
            ),
            children: o(s)
          },
          l
        )
      ) })
    }
  );
};
var Di = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Di || {}), Ti = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Ti || {});
function fd(e) {
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
const { forwardRef: pd, useCallback: nn, useState: $a } = O;
function hd(e, t) {
  const {
    children: n,
    variant: a = Di.Primary,
    size: o = Ti.Default,
    fullWidth: s = !1,
    className: l = "",
    preventDoubleClick: i = !1,
    ...c
  } = e, [d, u] = $a(!1), [f, h] = $a(!1), [p, y] = $a(!1), g = fd({
    variant: a,
    size: o,
    fullWidth: s,
    className: l,
    preventDoubleClick: i,
    href: "href" in c ? c.href : void 0
  }), m = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", A = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...m && { "data-disabled": "true" }
  }, C = nn(
    () => !m && u(!0),
    [m]
  ), L = nn(() => u(!1), []), D = nn(
    () => !m && h(!0),
    [m]
  ), x = nn(() => {
    h(!1), u(!1);
  }, []), N = nn(() => y(!0), []), M = nn(() => y(!1), []), _ = nn(
    (re) => {
      re.key === " " && ("href" in c || re.currentTarget.getAttribute("role") === "button") && (re.preventDefault(), re.currentTarget.click());
    },
    [c]
  ), b = nn(
    (re) => {
      if (i) {
        const K = re.currentTarget;
        if (K.getAttribute("data-processing") === "true") {
          re.preventDefault();
          return;
        }
        K.setAttribute("data-processing", "true"), setTimeout(() => {
          K.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [i]
  );
  if ("href" in c && c.href) {
    const {
      id: re,
      style: K,
      title: te,
      ["aria-label"]: ie,
      ["aria-describedby"]: U,
      ["aria-labelledby"]: se,
      tabIndex: ae,
      ...ce
    } = c, le = c;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: le.href,
        target: le.target,
        rel: le.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...A,
        ...i && { "data-prevent-double-click": "true" },
        ...ce,
        onKeyDown: (ve) => {
          le.onKeyDown?.(ve), _(ve);
        },
        onClick: (ve) => {
          le.onClick?.(ve), b(ve);
        },
        onMouseDown: (ve) => {
          le.onMouseDown?.(ve), C();
        },
        onMouseUp: (ve) => {
          le.onMouseUp?.(ve), L();
        },
        onMouseEnter: (ve) => {
          le.onMouseEnter?.(ve), D();
        },
        onMouseLeave: (ve) => {
          le.onMouseLeave?.(ve), x();
        },
        onFocus: (ve) => {
          le.onFocus?.(ve), N();
        },
        onBlur: (ve) => {
          le.onBlur?.(ve), M();
        },
        "aria-disabled": le["aria-disabled"],
        ...le["aria-disabled"] === "true" && { tabIndex: -1 },
        id: re,
        style: K,
        title: te,
        "aria-label": ie,
        "aria-describedby": U,
        "aria-labelledby": se,
        tabIndex: ae,
        children: n
      }
    );
  }
  const {
    id: w,
    style: k,
    title: j,
    ["aria-label"]: F,
    ["aria-describedby"]: E,
    ["aria-labelledby"]: $,
    tabIndex: I,
    name: H,
    value: oe,
    form: Y,
    formAction: R,
    formEncType: ee,
    formMethod: W,
    formNoValidate: X,
    formTarget: q,
    autoFocus: Q,
    ...fe
  } = c, ne = c;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ne.type || "button",
      disabled: ne.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...A,
      ...i && { "data-prevent-double-click": "true" },
      ...ne.disabled && { "aria-disabled": "true" },
      ...fe,
      onKeyDown: (re) => {
        ne.onKeyDown?.(re), _(re);
      },
      onClick: (re) => {
        ne.onClick?.(re), b(re);
      },
      onMouseDown: (re) => {
        ne.onMouseDown?.(re), C();
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
        ne.onFocus?.(re), N();
      },
      onBlur: (re) => {
        ne.onBlur?.(re), M();
      },
      id: w,
      style: k,
      title: j,
      "aria-label": F,
      "aria-describedby": E,
      "aria-labelledby": $,
      tabIndex: I,
      name: H,
      value: oe,
      form: Y,
      formAction: R,
      formEncType: ee,
      formMethod: W,
      formNoValidate: X,
      formTarget: q,
      autoFocus: Q,
      children: n
    }
  );
}
const mt = pd(hd);
mt.displayName = "Button";
const Xa = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...l
}) => {
  const i = ye(
    "nhsuk-back-link",
    a
  ), c = ye(
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
  return /* @__PURE__ */ r.jsx("div", { className: i, children: o === "button" ? /* @__PURE__ */ r.jsx(
    "button",
    {
      className: c,
      onClick: s,
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
function md(e) {
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
const Ve = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: l,
  disabled: i = !1,
  className: c,
  ...d
}) => {
  const u = md({ color: a, noBorder: o, closable: s, disabled: i, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !i && l && l();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: u.classes, ...d, children: [
    n || (t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ r.jsx(
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
}, gd = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
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
  const [g, m] = ze(a), A = n !== void 0, C = A ? n : g;
  Ge(() => {
    A || m(a);
  }, [a, A]);
  const L = (_) => {
    const b = _.target.checked;
    A || m(b), u?.(b, _);
  }, D = l ? `${e}-hint` : void 0, x = i ? `${e}-error` : void 0, N = [D, x].filter(Boolean).join(" ") || void 0, M = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!i
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: M, ...y, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: C,
        disabled: o,
        onChange: L,
        onBlur: f,
        onFocus: h,
        "aria-describedby": N,
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
gd.displayName = "Checkbox";
function Li(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Ho = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
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
  pattern: A,
  step: C,
  min: L,
  max: D,
  showValueLabels: x = !1,
  showCurrentValue: N = !1,
  valueLabels: M,
  onChange: _,
  onBlur: b,
  onFocus: w,
  onKeyDown: k,
  ...j
}) => {
  const [F, E] = ze(a || o || (n === "range" ? L || "0" : ""));
  Ge(() => {
    a !== void 0 && E(a);
  }, [a]);
  const $ = (q) => {
    const Q = q.target;
    E(Q.value), ("type" in q && q.nativeEvent || q.type === "keydown") && _?.(q);
  }, { classes: I, isRange: H } = Li({ type: n, hasError: d, width: h, className: f }), oe = a !== void 0, Y = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: l,
    readOnly: i,
    required: c,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: y,
    maxLength: g,
    minLength: m,
    pattern: A,
    step: C,
    min: L,
    max: D,
    onChange: $,
    onBlur: b,
    onFocus: w,
    onKeyDown: (q) => {
      if (H && /[0-9]/.test(q.key)) {
        const Q = (F?.toString() || "") + q.key;
        q.target.value = Q, $(q);
      }
      k?.(q);
    },
    ...j
  }, R = !oe && o !== void 0 ? { defaultValue: o } : {}, ee = oe ? { value: a } : {}, W = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: I,
      ...ee,
      ...R,
      "data-current-value": F,
      ...Y
    }
  ), X = H ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    x && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || L || "0" }),
      W(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || D || "100" })
    ] }),
    !x && W(),
    N && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: F })
    ] }) })
  ] }) : null;
  return H ? X : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: I,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: l,
      readOnly: i,
      required: c,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: y,
      maxLength: g,
      minLength: m,
      pattern: A,
      step: C,
      min: L,
      max: D,
      onChange: _,
      onBlur: b,
      onFocus: w,
      onKeyDown: k,
      ...j
    }
  );
};
function xd(e) {
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
const zo = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const l = xd({ size: a, isPageHeading: n, className: t, htmlFor: e }), i = l.tag;
  return /* @__PURE__ */ r.jsx(i, { className: l.classes, htmlFor: l.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function bd(e) {
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
const Oo = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = bd({
    className: n,
    describedBy: a,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), l = () => {
    const i = t?.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return s.legendIsPageHeading ? /* @__PURE__ */ r.jsx("h1", { className: "nhsuk-fieldset__heading", children: i }) : i;
  };
  return /* @__PURE__ */ r.jsxs(
    "fieldset",
    {
      className: s.fieldsetClasses,
      "aria-describedby": s.describedBy,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ r.jsx("legend", { className: s.legendClasses, children: l() }),
        e
      ]
    }
  );
};
function yd(e) {
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
const vd = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: l,
  errorMessage: i,
  className: c = "",
  small: d = !1,
  onChange: u,
  fieldsetAttributes: f,
  attributes: h,
  ...p
}) => {
  const [y, g] = ze(
    e.filter((_) => _.checked).map((_) => _.value)
  ), m = n || t, A = l ? `${m}-hint` : void 0, C = i ? `${m}-error` : void 0, L = [A, C].filter(Boolean).join(" ") || void 0, D = (_, b) => {
    let w;
    b ? w = [...y, _] : w = y.filter((k) => k !== _), g(w), u?.(w);
  }, x = () => e.map((_, b) => {
    const w = `${m}-${b + 1}`, k = `${w}-conditional`, j = y.includes(_.value), F = _.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: w,
          name: t,
          type: "checkbox",
          value: _.value,
          checked: j,
          disabled: F,
          onChange: (E) => D(_.value, E.target.checked),
          "aria-describedby": _.hint ? `${w}-hint` : L,
          ..._.conditional && {
            "aria-controls": k,
            "aria-expanded": j ? "true" : "false"
          },
          ..._.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: w, children: _.text }),
      _.hint && /* @__PURE__ */ r.jsx("div", { id: `${w}-hint`, className: "nhsuk-checkboxes__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ye("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !j
          }),
          id: k,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ r.jsx(zo, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ r.jsx(Ho, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }), { classes: N, formGroupClasses: M } = yd({ small: d, className: c, hasError: !!i });
  return /* @__PURE__ */ r.jsx("div", { className: M, ...h, ...p, children: /* @__PURE__ */ r.jsxs(
    Oo,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: L,
      ...f,
      children: [
        l && /* @__PURE__ */ r.jsx("div", { id: A, className: "nhsuk-hint", children: l }),
        i && /* @__PURE__ */ r.jsxs("div", { id: C, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          i
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: N, children: x() })
      ]
    }
  ) });
};
vd.displayName = "Checkboxes";
function wd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const Sd = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
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
  autoComplete: A,
  spellCheck: C,
  onChange: L,
  onBlur: D,
  onFocus: x,
  onKeyDown: N,
  ...M
}) => {
  const { classes: _, describedBy: b } = wd({ hasError: c, resize: m, className: u, describedBy: d });
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
      readOnly: l,
      required: i,
      "aria-describedby": b,
      rows: f,
      cols: h,
      maxLength: p,
      minLength: y,
      wrap: g,
      autoComplete: A,
      spellCheck: C,
      onChange: L,
      onBlur: D,
      onFocus: x,
      onKeyDown: N,
      ...M
    }
  );
};
function _d(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const $i = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = _d({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, hy = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: l,
  rows: i,
  className: c,
  countMessage: d,
  onCountChange: u,
  onChange: f,
  ...h
}) => {
  const p = s ?? l ?? "", [y, g] = ze(p), [m, A] = ze(0), [C, L] = ze(!1), [D, x] = ze(!1), N = me((j) => n ? j.trim() === "" ? 0 : j.trim().split(/\s+/).length : j.length, [n]);
  Ge(() => {
    const j = N(y), F = t || n || 0, E = F - j, $ = Math.floor(F * (a / 100));
    A(E), L(j > F), x(j >= $ || j > F), u && u(j, E);
  }, [y, t, n, a, N, u]);
  const M = (j) => {
    const F = j.target.value;
    g(F), f && f(j);
  }, _ = () => {
    const j = t || n || 0, F = n ? "word" : "character", E = n ? "words" : "characters";
    if (!D)
      return `You can enter up to ${j} ${j === 1 ? F : E}`;
    if (C) {
      const $ = Math.abs(m);
      return `You have ${$} ${$ === 1 ? F : E} too many`;
    } else
      return `You have ${m} ${m === 1 ? F : E} remaining`;
  }, b = ye(
    "nhsuk-character-count",
    c
  ), w = ye(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !D,
      "nhsuk-error-message": C
    },
    d?.classes
  ), k = ye(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": C
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
          Sd,
          {
            id: e,
            name: o,
            value: s !== void 0 ? y : void 0,
            defaultValue: s === void 0 ? l ?? y : void 0,
            rows: i,
            className: k,
            onChange: M,
            "aria-describedby": `${e}-info`,
            "aria-invalid": C || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          $i,
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
function kd(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Cd = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const l = ye(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ r.jsx(
    "option",
    {
      className: l,
      value: e,
      disabled: t,
      ...s,
      children: o
    }
  );
}, Nd = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: o,
  disabled: s = !1,
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
  onFocus: A,
  ...C
}) => {
  const { classes: L } = kd({ hasError: i, className: d }), D = () => p ? p.map((N, M) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: N.value,
      disabled: N.disabled,
      "data-initial-selected": N.selected || void 0,
      children: N.text
    },
    `${N.value}-${M}`
  )) : null, x = o === void 0 && a === void 0 && p ? p.find((N) => N.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: L,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : x,
      disabled: s,
      required: l,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: h,
      onChange: g,
      onBlur: m,
      onFocus: A,
      ...C,
      children: y || D()
    }
  );
}, Cr = Nd;
Cr.Option = Cd;
function jd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Ai(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
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
    className: A,
    size: C = "normal",
    inline: L = !1,
    options: D,
    ...x
  } = p, { classes: N, describedBy: M } = jd({ hasError: g, size: C, inline: L, className: A, describedBy: m });
  return /* @__PURE__ */ r.jsx(Oo, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: N,
      ...x,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: D.map((_, b) => {
        const w = `${y}-${b}`, k = _.conditional ? `${w}-conditional` : void 0, j = n === _.value;
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
                checked: j,
                onChange: o,
                onBlur: s,
                onFocus: l,
                onKeyDown: i,
                ref: (F) => {
                  F && c && (c.current[b] = F);
                }
              } : {
                defaultChecked: j,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": M
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: w, children: _.text }),
          _.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: _.hint }),
          _.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ye("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !j
              }),
              id: k,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                _.conditional.label && /* @__PURE__ */ r.jsx(
                  zo,
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
const my = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [l, i] = ze(e || t || ""), c = Oe([]), d = Oe(l), u = (p) => {
    const y = p.target.value;
    y !== d.current && (d.current = y, i(y), n?.(p));
  }, f = (p) => {
    o?.(p);
  }, h = me((p) => {
    const { key: y } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(y)) return;
    p.preventDefault();
    const g = c.current.filter((L) => L && !L.disabled), m = g.indexOf(p.currentTarget);
    if (m === -1) return;
    let A = m;
    ["ArrowDown", "ArrowRight"].includes(y) ? A = (m + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(y) && (A = (m - 1 + g.length) % g.length);
    const C = g[A];
    C && (C.focus(), C.checked || C.click());
  }, []);
  return Ai(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s },
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
      InputComponent: Ho
    }
  );
};
function Md(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: o,
    defaultValue: s,
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
    minLength: A,
    pattern: C,
    step: L,
    min: D,
    max: x,
    showValueLabels: N = !1,
    showCurrentValue: M = !1,
    valueLabels: _,
    // Strip interactive handlers in server variant
    onChange: b,
    onBlur: w,
    onFocus: k,
    onKeyDown: j,
    ...F
  } = e, { classes: E, isRange: $ } = Li({
    type: a,
    hasError: u,
    width: p,
    className: h
  }), I = {
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
    minLength: A,
    pattern: C,
    step: L,
    min: D,
    max: x,
    ...F
  };
  if ($) {
    const H = o ?? s ?? (typeof D < "u" ? String(D) : "0"), oe = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: E,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": H,
        ...I
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      N ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: _?.min || D || "0" }),
        oe,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: _?.max || x || "100" })
      ] }) : oe,
      M && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        _?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: H })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: E,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...I
    }
  );
}
const gy = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Ai(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: Md
    }
  );
};
var bn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(bn || {}), Id = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Id || {}), Dd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Dd || {}), Td = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Td || {});
const Ei = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const l = ye(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), i = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: l, style: i, ...s, children: e });
}, an = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: o,
  ...s
}) => {
  const l = ye(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    a ? `nhsuk-grid-row-align-${a}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: l, style: n, ...s, children: e });
}, Xn = ({
  children: e,
  width: t = bn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: l,
  forceWidth: i = !1,
  style: c,
  align: d,
  ...u
}) => {
  const f = ye(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !i,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: i,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: !!n,
      [`nhsuk-u-${a}-tablet`]: !!a,
      [`nhsuk-u-${o}-desktop`]: !!o,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    l
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...u, children: e });
}, Qa = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...o
}) => {
  const s = bt.Children.toArray(e), l = s[0], i = bt.isValidElement(l) && (l.type === an || typeof l.props == "object" && l.props && "className" in l.props && typeof l.props.className == "string" && l.props.className.includes("nhsuk-grid-row")), c = typeof a == "number" ? `${a}px` : a;
  let d = e;
  if (i)
    d = s.map((u, f) => {
      if (!bt.isValidElement(u)) return u;
      const h = u, p = h.props || {}, y = typeof p.className == "string" ? p.className : "";
      if (!(h.type === an || y.includes("nhsuk-grid-row"))) return u;
      const m = p.rowGap, A = m !== void 0 ? typeof m == "number" ? `${m}px` : m : c, C = f === 0 ? void 0 : A;
      if (!C) return u;
      const L = { ...p.style || {}, marginTop: C };
      return bt.cloneElement(h, { style: L });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ r.jsx(an, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(Ei, { className: t, style: n, ...o, children: d });
}, Ld = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: l,
  ...i
}) => {
  const c = l || (t === "number" ? "ol" : "ul"), d = ye(
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
  return /* @__PURE__ */ r.jsx(c, { className: d, role: s, ...i, children: e });
}, $d = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ye("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Ad = Ld;
Ad.Item = $d;
const xy = ({
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
}, by = {
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
}, yy = ({
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
}, vy = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, wy = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Pi = ({
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
function Ed(e) {
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
function Pd(e) {
  const t = e.level ?? Ed(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Jt = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: l, ...i }) => {
  const c = Pd({ level: e, size: s, className: t, marginBottom: l }), d = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return ki(c.tag, { className: c.classes, style: c.style, ...i }, d);
};
function Fd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const ms = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = Fd({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Sy = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: l,
  ...i
}) => {
  const c = Oe(null);
  Ge(() => {
    c.current && c.current.focus();
  }, []);
  const d = ye(
    "nhsuk-error-summary",
    s
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((p, y) => /* @__PURE__ */ r.jsx("li", { children: h(p) }, y)) })
        ] })
      ]
    }
  );
}, _y = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: l,
  errorMessage: i,
  onChange: c,
  ...d
}) => {
  const [u, f] = ze(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, p] = ze({}), y = ($) => $ % 4 === 0 && $ % 100 !== 0 || $ % 400 === 0, g = ($, I) => {
    const H = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return $ === 2 && y(I) ? 29 : H[$ - 1];
  }, m = ($, I, H) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Day must be a number";
    const oe = parseInt($, 10);
    if (oe < 1 || oe > 31) return "Day must be between 1 and 31";
    if (I && H) {
      const Y = parseInt(I, 10), R = parseInt(H, 10);
      if (!isNaN(Y) && !isNaN(R) && Y >= 1 && Y <= 12) {
        const ee = g(Y, R);
        if (oe > ee)
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
          ][Y - 1]} ${R} only has ${ee} days`;
      }
    }
  }, A = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Month must be a number";
    const I = parseInt($, 10);
    if (I < 1 || I > 12) return "Month must be between 1 and 12";
  }, C = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Year must be a number";
    const I = parseInt($, 10), H = (/* @__PURE__ */ new Date()).getFullYear();
    if (I < 1900 || I > H + 10)
      return `Year must be between 1900 and ${H + 10}`;
  }, L = ($, I, H) => {
    if (!$ || !I || !H) return;
    const oe = parseInt($, 10), Y = parseInt(I, 10), R = parseInt(H, 10);
    if (isNaN(oe) || isNaN(Y) || isNaN(R) || Y < 1 || Y > 12 || R < 1900) return;
    const ee = g(Y, R);
    oe < 1 || oe > ee;
  }, D = me(($, I) => {
    const H = {
      ...u,
      [$]: I
    };
    f(H), c && c(H);
  }, [u, c]), x = me(($) => {
    const I = u[$];
    let H;
    if ($ === "day")
      H = m(I, u.month, u.year);
    else if ($ === "month") {
      if (H = A(I), !H && u.day) {
        const oe = m(u.day, I, u.year);
        p((Y) => ({
          ...Y,
          day: oe
        }));
      }
    } else if ($ === "year" && (H = C(I), !H && u.day && u.month)) {
      const oe = m(u.day, u.month, I);
      p((Y) => ({
        ...Y,
        day: oe
      }));
    }
    if (p((oe) => ({
      ...oe,
      [$]: H
    })), u.day && u.month && u.year) {
      const oe = L(
        $ === "day" ? I : u.day,
        $ === "month" ? I : u.month,
        $ === "year" ? I : u.year
      );
      oe && p((Y) => ({
        ...Y,
        day: oe
      }));
    }
  }, [u, m, A, C, L]), N = je(() => [
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
  ], []), M = n || N;
  let _ = s?.describedBy || "";
  const b = l ? `${e}-hint` : "", w = i ? `${e}-error` : "";
  b && (_ = _ ? `${_} ${b}` : b), w && (_ = _ ? `${_} ${w}` : w);
  const k = Object.values(h).some(($) => $), j = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": i || k
    }
  ), F = ye(
    "nhsuk-date-input",
    t
  ), E = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    l && /* @__PURE__ */ r.jsx(
      $i,
      {
        id: b,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    i && /* @__PURE__ */ r.jsx(
      ms,
      {
        id: w,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    Object.entries(h).map(
      ([$, I]) => I ? /* @__PURE__ */ r.jsxs(
        ms,
        {
          id: `${e}-${$}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            I
          ]
        },
        `${$}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: F, id: e, "data-testid": "date-input", ...d, children: M.map(($) => {
      const I = $.id || `${e}-${$.name}`, H = a ? `${a}[${$.name}]` : $.name, oe = $.label || $.name.charAt(0).toUpperCase() + $.name.slice(1), Y = h[$.name], R = u[$.name] || "";
      let ee = _;
      if (Y) {
        const W = `${e}-${$.name}-error`;
        ee = ee ? `${ee} ${W}` : W;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          zo,
          {
            htmlFor: I,
            className: "nhsuk-date-input__label",
            children: oe
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ho,
          {
            id: I,
            name: H,
            value: R,
            className: ye("nhsuk-date-input__input", $.classes, {
              "nhsuk-input--error": Y
            }),
            inputMode: $.inputmode,
            autoComplete: $.autocomplete,
            pattern: $.pattern,
            "aria-describedby": ee || void 0,
            hasError: !!Y,
            onChange: (W) => D($.name, W.target.value),
            onBlur: () => x($.name)
          }
        )
      ] }, $.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: j, children: s ? /* @__PURE__ */ r.jsx(
    Oo,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: _ || void 0,
      children: E()
    }
  ) : E() });
}, Fi = {
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
}, Ri = Ni(Fi), Rd = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Fi, ...t };
  return /* @__PURE__ */ r.jsx(Ri.Provider, { value: n, children: e });
}, ky = () => {
  const e = Ci(Ri);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Bd() {
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
function Hd() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Bd(), document.head.appendChild(e);
}
const Cy = ({ children: e, theme: t }) => (Ge(() => {
  Hd();
}, []), /* @__PURE__ */ r.jsx(Rd, { theme: t, children: e })), zd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", Od = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Ud = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Wd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Gd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", Vd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Yd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var Bi = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(Bi || {}), Hi = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Hi || {});
const Zd = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: zd,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Gd,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Wd,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: Od,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Ud,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: Vd,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Yd,
      ariaLabel: "FDP"
    }
  }
};
function Jd(e, t = "full") {
  return Zd[e]?.[t];
}
function qd(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
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
    search: A,
    account: C,
    navigation: L,
    containerClasses: D,
    variant: x = "default",
    attributes: N = {},
    maxVisibleItems: M,
    // deprecated (ignored)
    responsiveNavigation: _ = !0,
    logoVariant: b = Hi.Full,
    ...w
  } = e, k = {
    ...y,
    text: y?.text ?? g
  };
  "maxVisibleItems" in w && delete w.maxVisibleItems;
  const j = k.href && !p.href || k.href && k.href === p.href, F = j ? k.href : p.href, E = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": x === "organisation" || m,
      "nhsuk-header--white": x === "white"
    },
    h
  ), $ = ye(
    "nhsuk-header__container",
    D
  ), I = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": L?.white,
      "nhsuk-header__navigation--justified": L?.justified
    },
    L?.className
  ), oe = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), Y = () => /* @__PURE__ */ r.jsxs(
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
          alt: p.ariaLabel || (oe === "fdp" ? "FDP" : "NHS")
        }
      );
    if (oe === "fdp") {
      const Q = Jd(Bi.FDP, b);
      if (Q?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: Q.src,
            "data-logo-variant": b,
            width: "280",
            alt: Q.ariaLabel || "FDP"
          }
        );
    }
    return Y();
  }, ee = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, W = (Q, fe) => Q ? fe ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: fe, children: Q }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: Q }) : null, X = (Q) => Q.active || Q.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: Q.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: Q.html } }) : Q.text }) : Q.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: Q.html } }) : Q.text, q = () => /* @__PURE__ */ r.jsx(
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
      ...N,
      ...w,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: $, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            F ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: F, children: [
              R(),
              ee(),
              j && W(k.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              R(),
              ee(),
              j && W(k.text)
            ] }),
            k.text && !j && W(k.text, k.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            Ii,
            {
              ...C,
              variant: x === "white" ? "white" : "default"
            }
          )
        ] }),
        L && L.items && L.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: I,
            "aria-label": L.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ye(
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
                      (L?.items || []).map((Q, fe) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ye(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": Q.active || Q.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && fe >= (s ?? 0)
                            },
                            Q.className
                          ),
                          ...Q.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: Q.href,
                              ...Q.active || Q.current ? { "aria-current": Q.current ? "page" : "true" } : {},
                              children: X(Q)
                            }
                          )
                        },
                        fe
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
                          onClick: i,
                          children: [
                            /* @__PURE__ */ r.jsx("span", { children: "More" }),
                            q()
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
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: L.items.slice(s ?? 0).map((Q, fe) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ye("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": Q.active || Q.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: Q.href,
                    ...Q.active || Q.current ? { "aria-current": Q.current ? "page" : "true" } : {},
                    onClick: () => {
                      i?.();
                    },
                    children: X(Q)
                  }
                )
              },
              `overflow-${(s ?? 0) + fe}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const Ka = Ni(void 0);
function Ny({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, o] = ze(e);
  Ge(() => {
    o(e);
  }, [e]), Ge(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const s = je(() => ({ brand: a, setBrand: o }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(Ka.Provider, { value: s, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(Ka.Provider, { value: s, children: n });
}
function Xd() {
  const e = Ci(Ka);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Qd = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
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
  preventDefaultSubmit: A = !1,
  debounceMs: C = 300,
  minQueryLength: L = 1
}) => {
  const [D, x] = ze(""), [N, M] = ze(!1), _ = Oe(void 0), b = Oe(null), w = Oe(null), k = e === "controlled" && o !== void 0, j = k ? o : D, F = me(
    (X) => {
      _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        u.onChange && X.length >= L && u.onChange(X);
      }, C);
    },
    [u.onChange, C, L]
  ), E = me(
    (X) => {
      const q = X.target.value;
      k || x(q), e !== "form" && F(q);
    },
    [k, e, F]
  ), $ = me(
    (X) => {
      const q = j.trim(), Q = {
        query: q,
        timestamp: Date.now(),
        formData: new FormData(X.currentTarget)
      };
      e === "controlled" || e === "hybrid" && A ? (X.preventDefault(), u.onSearch && q.length >= L && u.onSearch(Q)) : e === "hybrid" && u.onSearch && q.length >= L && u.onSearch(Q);
    },
    [
      e,
      j,
      u.onSearch,
      A,
      L
    ]
  ), I = me(() => {
    M(!0), u.onFocus?.();
  }, [u.onFocus]), H = me(() => {
    M(!1), u.onBlur?.();
  }, [u.onBlur]), oe = me(() => {
    k || x(""), u.onClear?.(), w.current?.focus();
  }, [k, u.onClear]);
  Ge(() => () => {
    _.current && clearTimeout(_.current);
  }, []);
  const Y = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: ye("nhsuk-icon nhsuk-icon__search", {
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
  ), ee = () => !j || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: oe,
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
  ), W = () => !h || !p.length || !N ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((X) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: X.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: X.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: X.title }),
            X.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: X.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: X.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: X.title }),
            X.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: X.description })
          ]
        }
      )
    },
    X.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ye("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": N,
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
            onSubmit: $,
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
                    placeholder: s,
                    autoComplete: "off",
                    value: j,
                    onChange: E,
                    onFocus: I,
                    onBlur: H,
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
                  disabled: d || f || e !== "form" && j.length < L,
                  ...m,
                  children: [
                    f ? R() : Y(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : i })
                  ]
                }
              )
            ]
          }
        ),
        W()
      ]
    }
  );
}, zi = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: o,
  account: s,
  navigation: l,
  containerClasses: i,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, h] = ze(!1), [p, y] = ze(!1), [g, m] = ze(l?.items?.length || 0), [A, C] = ze(!1), [L, D] = ze(!1), x = Oe(null), N = Oe(null), M = Oe(!1);
  Ge(() => {
    typeof window > "u" || D(!0);
  }, []), Ge(() => {
    if (typeof document > "u") return;
    const j = (F) => {
      F.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [f]);
  const _ = Oe(null), b = me(() => {
    if (!L || !l?.items || l.items.length === 0 || M.current) return;
    const j = x.current, F = N.current;
    if (!j || !F) return;
    M.current = !0, j.classList.add("nhsuk-header__navigation-container--measuring");
    const E = j.clientWidth, $ = Array.from(F.children);
    if (!$.length) {
      j.classList.remove("nhsuk-header__navigation-container--measuring"), M.current = !1;
      return;
    }
    if (_.current == null) {
      const Q = document.createElement("button");
      Q.type = "button", Q.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", Q.style.position = "absolute", Q.style.visibility = "hidden", Q.style.pointerEvents = "none", Q.innerHTML = "<span>More</span>", j.appendChild(Q), _.current = Q.getBoundingClientRect().width || 104, j.removeChild(Q);
    }
    const I = _.current + 16;
    let H = 0, oe = 0;
    const Y = window.getComputedStyle(j), R = parseFloat(Y.paddingLeft) || 0, ee = parseFloat(Y.paddingRight) || 0;
    let W = R + ee;
    for (const Q of $) {
      const fe = Q.getBoundingClientRect().width;
      if (H + fe + I + W > E) break;
      H += fe, oe += 1;
    }
    const X = oe < l.items.length, q = X ? oe : l.items.length;
    y((Q) => Q === X ? Q : X), m((Q) => Q === q ? Q : q), j.classList.remove("nhsuk-header__navigation-container--measuring"), M.current = !1;
  }, [L, l?.items]);
  Ge(() => {
    if (!L) return;
    const j = x.current;
    if (!j) return;
    let F = null;
    const E = () => {
      F == null && (F = window.requestAnimationFrame(() => {
        F = null, b();
      }));
    };
    b();
    const $ = new ResizeObserver(() => E());
    return $.observe(j), N.current && $.observe(N.current), () => {
      F != null && window.cancelAnimationFrame(F), $.disconnect();
    };
  }, [L, b]), Ge(() => {
    L && b();
  }, [l?.items?.length, L, b]);
  const w = (j) => {
    j && (j.preventDefault(), j.stopPropagation());
    const F = !f;
    h(F), C(F);
  }, k = (() => {
    try {
      return Xd();
    } catch {
      return;
    }
  })();
  return qd(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: o,
      account: s,
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
      dropdownVisible: A,
      toggleMenu: w,
      navContainerRef: x,
      navListRef: N,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(Qd, { ...o }) : null,
      brand: k?.brand
    }
  );
};
function Kd(e, { variant: t, isClient: n }) {
  const {
    className: a,
    logo: o = {},
    service: s = {},
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
    ...s,
    text: s?.text ?? l
  }, A = m.href && !o.href || m.href && m.href === o.href, C = A ? m.href : o.href, L = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || i,
      "nhsuk-header--white": f === "white"
    },
    a
  ), D = ye("nhsuk-header__container", u), x = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), N = () => /* @__PURE__ */ r.jsxs(
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
  ), M = () => o.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: o.src,
      width: "280",
      alt: o.ariaLabel || "NHS"
    }
  ) : N(), _ = () => i ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      i.name,
      i.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        i.split
      ] })
    ] }),
    i.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: i.descriptor })
  ] }) : null, b = (E, $) => E ? $ ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: $, children: E }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: E }) : null, w = (E) => E.active || E.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: E.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: E.html } }) : E.text }) : E.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: E.html } }) : E.text, k = d?.items && !y, j = k ? [] : d?.items, F = k ? d.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: L, role: "banner", "data-module": "nhsuk-header", ...h, ...g, children: [
    /* @__PURE__ */ r.jsxs("div", { className: D, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        C ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: C, children: [
          M(),
          _(),
          A && b(m.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          M(),
          _(),
          A && b(m.text)
        ] }),
        m.text && !A && b(m.text, m.href)
      ] }),
      /* @__PURE__ */ r.jsx(Ii, { ...c, variant: f === "white" ? "white" : "default" })
    ] }),
    d && d.items && d.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: x, "aria-label": d.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: ye(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          u
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (j || []).map((E, $) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ye("nhsuk-header__navigation-item", {
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
          $
        )) })
      }
    ) }),
    k && F.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: F.map((E, $) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: ye("nhsuk-header__dropdown-item", {
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
      `overflow-server-${$}`
    )) }) })
  ] });
}
const jy = (e) => Kd(e, {
  variant: "server",
  isClient: !1
}), eu = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: l = "",
  classes: i = "",
  children: c,
  ...d
}) => {
  const u = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    i
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    l,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    n,
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = c || e || a || o, y = () => {
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
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          y(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          y(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
eu.displayName = "Hero";
const Oi = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: l,
  attributes: i = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const f = (p, y = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ye("nhsuk-footer__list-item", {
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
        className: ye("nhsuk-width-container", l),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ye("nhsuk-footer", e), style: d, children: h ? (
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
function wr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Uo(e) {
  let t, n, a;
  e.length !== 2 ? (t = wr, n = (i, c) => wr(e(i), c), a = (i, c) => e(i) - c) : (t = e === wr || e === tu ? e : nu, n = e, a = e);
  function o(i, c, d = 0, u = i.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(i[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function s(i, c, d = 0, u = i.length) {
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
    const f = o(i, c, d, u - 1);
    return f > d && a(i[f - 1], c) > -a(i[f], c) ? f - 1 : f;
  }
  return { left: o, center: l, right: s };
}
function nu() {
  return 0;
}
function ru(e) {
  return e === null ? NaN : +e;
}
const au = Uo(wr), ou = au.right;
Uo(ru).center;
function Ui(e, t) {
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
class gs extends Map {
  constructor(t, n = lu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(xs(this, t));
  }
  has(t) {
    return super.has(xs(this, t));
  }
  set(t, n) {
    return super.set(su(this, t), n);
  }
  delete(t) {
    return super.delete(iu(this, t));
  }
}
function xs({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function su({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function iu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function lu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const cu = Math.sqrt(50), du = Math.sqrt(10), uu = Math.sqrt(2);
function Nr(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), l = s >= cu ? 10 : s >= du ? 5 : s >= uu ? 2 : 1;
  let i, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / l, i = Math.round(e * d), c = Math.round(t * d), i / d < e && ++i, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * l, i = Math.round(e / d), c = Math.round(t / d), i * d < e && ++i, c * d > t && --c), c < i && 0.5 <= n && n < 2 ? Nr(e, t, n * 2) : [i, c, d];
}
function fu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, l] = a ? Nr(t, e, n) : Nr(e, t, n);
  if (!(s >= o)) return [];
  const i = s - o + 1, c = new Array(i);
  if (a)
    if (l < 0) for (let d = 0; d < i; ++d) c[d] = (s - d) / -l;
    else for (let d = 0; d < i; ++d) c[d] = (s - d) * l;
  else if (l < 0) for (let d = 0; d < i; ++d) c[d] = (o + d) / -l;
  else for (let d = 0; d < i; ++d) c[d] = (o + d) * l;
  return c;
}
function eo(e, t, n) {
  return t = +t, e = +e, n = +n, Nr(e, t, n)[2];
}
function to(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? eo(t, e, n) : eo(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function pu(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function ba(e, t) {
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
const bs = Symbol("implicit");
function Wi() {
  var e = new gs(), t = [], n = [], a = bs;
  function o(s) {
    let l = e.get(s);
    if (l === void 0) {
      if (a !== bs) return a;
      e.set(s, l = t.push(s) - 1);
    }
    return n[l % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new gs();
    for (const l of s)
      e.has(l) || e.set(l, t.push(l) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Wi(t, n).unknown(a);
  }, ba.apply(o, arguments), o;
}
function Gi() {
  var e = Wi().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, l, i = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = o < a, y = p ? o : a, g = p ? a : o;
    s = (g - y) / Math.max(1, h - c + d * 2), i && (s = Math.floor(s)), y += (g - y - s * (h - c)) * u, l = s * (1 - c), i && (y = Math.round(y), l = Math.round(l));
    var m = pu(h).map(function(A) {
      return y + s * A;
    });
    return n(p ? m.reverse() : m);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([a, o] = h, a = +a, o = +o, f()) : [a, o];
  }, e.rangeRound = function(h) {
    return [a, o] = h, a = +a, o = +o, i = !0, f();
  }, e.bandwidth = function() {
    return l;
  }, e.step = function() {
    return s;
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
    return Gi(t(), [a, o]).round(i).paddingInner(c).paddingOuter(d).align(u);
  }, ba.apply(f(), arguments);
}
function Wo(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Vi(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function ir() {
}
var Qn = 0.7, jr = 1 / Qn, Ln = "\\s*([+-]?\\d+)\\s*", Kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hu = /^#([0-9a-f]{3,8})$/, mu = new RegExp(`^rgb\\(${Ln},${Ln},${Ln}\\)$`), gu = new RegExp(`^rgb\\(${Lt},${Lt},${Lt}\\)$`), xu = new RegExp(`^rgba\\(${Ln},${Ln},${Ln},${Kn}\\)$`), bu = new RegExp(`^rgba\\(${Lt},${Lt},${Lt},${Kn}\\)$`), yu = new RegExp(`^hsl\\(${Kn},${Lt},${Lt}\\)$`), vu = new RegExp(`^hsla\\(${Kn},${Lt},${Lt},${Kn}\\)$`), ys = {
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
Wo(ir, er, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vs,
  // Deprecated! Use color.formatHex.
  formatHex: vs,
  formatHex8: wu,
  formatHsl: Su,
  formatRgb: ws,
  toString: ws
});
function vs() {
  return this.rgb().formatHex();
}
function wu() {
  return this.rgb().formatHex8();
}
function Su() {
  return Yi(this).formatHsl();
}
function ws() {
  return this.rgb().formatRgb();
}
function er(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = hu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ss(t) : n === 3 ? new wt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = mu.exec(e)) ? new wt(t[1], t[2], t[3], 1) : (t = gu.exec(e)) ? new wt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = xu.exec(e)) ? gr(t[1], t[2], t[3], t[4]) : (t = bu.exec(e)) ? gr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = yu.exec(e)) ? Cs(t[1], t[2] / 100, t[3] / 100, 1) : (t = vu.exec(e)) ? Cs(t[1], t[2] / 100, t[3] / 100, t[4]) : ys.hasOwnProperty(e) ? Ss(ys[e]) : e === "transparent" ? new wt(NaN, NaN, NaN, 0) : null;
}
function Ss(e) {
  return new wt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new wt(e, t, n, a);
}
function _u(e) {
  return e instanceof ir || (e = er(e)), e ? (e = e.rgb(), new wt(e.r, e.g, e.b, e.opacity)) : new wt();
}
function no(e, t, n, a) {
  return arguments.length === 1 ? _u(e) : new wt(e, t, n, a ?? 1);
}
function wt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Wo(wt, no, Vi(ir, {
  brighter(e) {
    return e = e == null ? jr : Math.pow(jr, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qn : Math.pow(Qn, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new wt(hn(this.r), hn(this.g), hn(this.b), Mr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _s,
  // Deprecated! Use color.formatHex.
  formatHex: _s,
  formatHex8: ku,
  formatRgb: ks,
  toString: ks
}));
function _s() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}`;
}
function ku() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}${pn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ks() {
  const e = Mr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${hn(this.r)}, ${hn(this.g)}, ${hn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Mr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function hn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function pn(e) {
  return e = hn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Cs(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ct(e, t, n, a);
}
function Yi(e) {
  if (e instanceof Ct) return new Ct(e.h, e.s, e.l, e.opacity);
  if (e instanceof ir || (e = er(e)), !e) return new Ct();
  if (e instanceof Ct) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), l = NaN, i = s - o, c = (s + o) / 2;
  return i ? (t === s ? l = (n - a) / i + (n < a) * 6 : n === s ? l = (a - t) / i + 2 : l = (t - n) / i + 4, i /= c < 0.5 ? s + o : 2 - s - o, l *= 60) : i = c > 0 && c < 1 ? 0 : l, new Ct(l, i, c, e.opacity);
}
function Cu(e, t, n, a) {
  return arguments.length === 1 ? Yi(e) : new Ct(e, t, n, a ?? 1);
}
function Ct(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Wo(Ct, Cu, Vi(ir, {
  brighter(e) {
    return e = e == null ? jr : Math.pow(jr, e), new Ct(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qn : Math.pow(Qn, e), new Ct(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new wt(
      Aa(e >= 240 ? e - 240 : e + 120, o, a),
      Aa(e, o, a),
      Aa(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Ct(Ns(this.h), xr(this.s), xr(this.l), Mr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Mr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ns(this.h)}, ${xr(this.s) * 100}%, ${xr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ns(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function xr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Aa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Go = (e) => () => e;
function Nu(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ju(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Mu(e) {
  return (e = +e) == 1 ? Zi : function(t, n) {
    return n - t ? ju(t, n, e) : Go(isNaN(t) ? n : t);
  };
}
function Zi(e, t) {
  var n = t - e;
  return n ? Nu(e, n) : Go(isNaN(e) ? t : e);
}
const js = (function e(t) {
  var n = Mu(t);
  function a(o, s) {
    var l = n((o = no(o)).r, (s = no(s)).r), i = n(o.g, s.g), c = n(o.b, s.b), d = Zi(o.opacity, s.opacity);
    return function(u) {
      return o.r = l(u), o.g = i(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Iu(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Du(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Tu(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), l;
  for (l = 0; l < a; ++l) o[l] = Vo(e[l], t[l]);
  for (; l < n; ++l) s[l] = t[l];
  return function(i) {
    for (l = 0; l < a; ++l) s[l] = o[l](i);
    return s;
  };
}
function Lu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Ir(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function $u(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Vo(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var ro = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ea = new RegExp(ro.source, "g");
function Au(e) {
  return function() {
    return e;
  };
}
function Eu(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Pu(e, t) {
  var n = ro.lastIndex = Ea.lastIndex = 0, a, o, s, l = -1, i = [], c = [];
  for (e = e + "", t = t + ""; (a = ro.exec(e)) && (o = Ea.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), i[l] ? i[l] += s : i[++l] = s), (a = a[0]) === (o = o[0]) ? i[l] ? i[l] += o : i[++l] = o : (i[++l] = null, c.push({ i: l, x: Ir(a, o) })), n = Ea.lastIndex;
  return n < t.length && (s = t.slice(n), i[l] ? i[l] += s : i[++l] = s), i.length < 2 ? c[0] ? Eu(c[0].x) : Au(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) i[(f = c[u]).i] = f.x(d);
    return i.join("");
  });
}
function Vo(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Go(t) : (n === "number" ? Ir : n === "string" ? (a = er(t)) ? (t = a, js) : Pu : t instanceof er ? js : t instanceof Date ? Lu : Du(t) ? Iu : Array.isArray(t) ? Tu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? $u : Ir)(e, t);
}
function Fu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Ru(e) {
  return function() {
    return e;
  };
}
function Bu(e) {
  return +e;
}
var Ms = [0, 1];
function Mn(e) {
  return e;
}
function ao(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Ru(isNaN(t) ? NaN : 0.5);
}
function Hu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function zu(e, t, n) {
  var a = e[0], o = e[1], s = t[0], l = t[1];
  return o < a ? (a = ao(o, a), s = n(l, s)) : (a = ao(a, o), s = n(s, l)), function(i) {
    return s(a(i));
  };
}
function Ou(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), l = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++l < a; )
    o[l] = ao(e[l], e[l + 1]), s[l] = n(t[l], t[l + 1]);
  return function(i) {
    var c = ou(e, i, 1, a) - 1;
    return s[c](o[c](i));
  };
}
function Ji(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Uu() {
  var e = Ms, t = Ms, n = Vo, a, o, s, l = Mn, i, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return l !== Mn && (l = Hu(e[0], e[h - 1])), i = h > 2 ? Ou : zu, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = i(e.map(a), t, n)))(a(l(h)));
  }
  return f.invert = function(h) {
    return l(o((d || (d = i(t, e.map(a), Ir)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Bu), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Fu, u();
  }, f.clamp = function(h) {
    return arguments.length ? (l = h ? !0 : Mn, u()) : l !== Mn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return a = h, o = p, u();
  };
}
function qi() {
  return Uu()(Mn, Mn);
}
function Wu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Dr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Fn(e) {
  return e = Dr(Math.abs(e)), e ? e[1] : NaN;
}
function Gu(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], l = 0, i = e[0], c = 0; o > 0 && i > 0 && (c + i + 1 > a && (i = Math.max(1, a - c)), s.push(n.substring(o -= i, o + i)), !((c += i + 1) > a)); )
      i = e[l = (l + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Vu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Yu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Tr(e) {
  if (!(t = Yu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Yo({
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
Tr.prototype = Yo.prototype;
function Yo(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Yo.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Zu(e) {
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
var Xi;
function Ju(e, t) {
  var n = Dr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (Xi = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, l = a.length;
  return s === l ? a : s > l ? a + new Array(s - l + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Dr(e, Math.max(0, t + s - 1))[0];
}
function Is(e, t) {
  var n = Dr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Ds = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Wu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Is(e * 100, t),
  r: Is,
  s: Ju,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ts(e) {
  return e;
}
var Ls = Array.prototype.map, $s = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ts : Gu(Ls.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Ts : Vu(Ls.call(e.numerals, String)), l = e.percent === void 0 ? "%" : e.percent + "", i = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = Tr(f);
    var h = f.fill, p = f.align, y = f.sign, g = f.symbol, m = f.zero, A = f.width, C = f.comma, L = f.precision, D = f.trim, x = f.type;
    x === "n" ? (C = !0, x = "g") : Ds[x] || (L === void 0 && (L = 12), D = !0, x = "g"), (m || h === "0" && p === "=") && (m = !0, h = "0", p = "=");
    var N = g === "$" ? n : g === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", M = g === "$" ? a : /[%p]/.test(x) ? l : "", _ = Ds[x], b = /[defgprs%]/.test(x);
    L = L === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, L)) : Math.max(0, Math.min(20, L));
    function w(k) {
      var j = N, F = M, E, $, I;
      if (x === "c")
        F = _(k) + F, k = "";
      else {
        k = +k;
        var H = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? c : _(Math.abs(k), L), D && (k = Zu(k)), H && +k == 0 && y !== "+" && (H = !1), j = (H ? y === "(" ? y : i : y === "-" || y === "(" ? "" : y) + j, F = (x === "s" ? $s[8 + Xi / 3] : "") + F + (H && y === "(" ? ")" : ""), b) {
          for (E = -1, $ = k.length; ++E < $; )
            if (I = k.charCodeAt(E), 48 > I || I > 57) {
              F = (I === 46 ? o + k.slice(E + 1) : k.slice(E)) + F, k = k.slice(0, E);
              break;
            }
        }
      }
      C && !m && (k = t(k, 1 / 0));
      var oe = j.length + k.length + F.length, Y = oe < A ? new Array(A - oe + 1).join(h) : "";
      switch (C && m && (k = t(Y + k, Y.length ? A - F.length : 1 / 0), Y = ""), p) {
        case "<":
          k = j + k + F + Y;
          break;
        case "=":
          k = j + Y + k + F;
          break;
        case "^":
          k = Y.slice(0, oe = Y.length >> 1) + j + k + F + Y.slice(oe);
          break;
        default:
          k = Y + j + k + F;
          break;
      }
      return s(k);
    }
    return w.toString = function() {
      return f + "";
    }, w;
  }
  function u(f, h) {
    var p = d((f = Tr(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Fn(h) / 3))) * 3, g = Math.pow(10, -y), m = $s[8 + y / 3];
    return function(A) {
      return p(g * A) + m;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var br, Qi, Ki;
Xu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Xu(e) {
  return br = qu(e), Qi = br.format, Ki = br.formatPrefix, br;
}
function Qu(e) {
  return Math.max(0, -Fn(Math.abs(e)));
}
function Ku(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Fn(t) / 3))) * 3 - Fn(Math.abs(e)));
}
function ef(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Fn(t) - Fn(e)) + 1;
}
function tf(e, t, n, a) {
  var o = to(e, t, n), s;
  switch (a = Tr(a ?? ",f"), a.type) {
    case "s": {
      var l = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = Ku(o, l)) && (a.precision = s), Ki(a, l);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = ef(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = Qu(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return Qi(a);
}
function nf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return fu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return tf(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, l = a[o], i = a[s], c, d, u = 10;
    for (i < l && (d = l, l = i, i = d, d = o, o = s, s = d); u-- > 0; ) {
      if (d = eo(l, i, n), d === c)
        return a[o] = l, a[s] = i, t(a);
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
function Lr() {
  var e = qi();
  return e.copy = function() {
    return Ji(e, Lr());
  }, ba.apply(e, arguments), nf(e);
}
function rf(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], l;
  return s < o && (l = n, n = a, a = l, l = o, o = s, s = l), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Pa = /* @__PURE__ */ new Date(), Fa = /* @__PURE__ */ new Date();
function ct(e, t, n, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const l = o(s), i = o.ceil(s);
    return s - l < i - s ? l : i;
  }, o.offset = (s, l) => (t(s = /* @__PURE__ */ new Date(+s), l == null ? 1 : Math.floor(l)), s), o.range = (s, l, i) => {
    const c = [];
    if (s = o.ceil(s), i = i == null ? 1 : Math.floor(i), !(s < l) || !(i > 0)) return c;
    let d;
    do
      c.push(d = /* @__PURE__ */ new Date(+s)), t(s, i), e(s);
    while (d < s && s < l);
    return c;
  }, o.filter = (s) => ct((l) => {
    if (l >= l) for (; e(l), !s(l); ) l.setTime(l - 1);
  }, (l, i) => {
    if (l >= l)
      if (i < 0) for (; ++i <= 0; )
        for (; t(l, -1), !s(l); )
          ;
      else for (; --i >= 0; )
        for (; t(l, 1), !s(l); )
          ;
  }), n && (o.count = (s, l) => (Pa.setTime(+s), Fa.setTime(+l), e(Pa), e(Fa), Math.floor(n(Pa, Fa))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (l) => a(l) % s === 0 : (l) => o.count(0, l) % s === 0) : o)), o;
}
const $r = ct(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
$r.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ct((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : $r);
$r.range;
const Yt = 1e3, _t = Yt * 60, Zt = _t * 60, qt = Zt * 24, Zo = qt * 7, As = qt * 30, Ra = qt * 365, In = ct((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Yt);
}, (e, t) => (t - e) / Yt, (e) => e.getUTCSeconds());
In.range;
const Jo = ct((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Yt);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getMinutes());
Jo.range;
const af = ct((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getUTCMinutes());
af.range;
const qo = ct((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Yt - e.getMinutes() * _t);
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getHours());
qo.range;
const of = ct((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getUTCHours());
of.range;
const lr = ct(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * _t) / qt,
  (e) => e.getDate() - 1
);
lr.range;
const Xo = ct((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / qt, (e) => e.getUTCDate() - 1);
Xo.range;
const sf = ct((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / qt, (e) => Math.floor(e / qt));
sf.range;
function wn(e) {
  return ct((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * _t) / Zo);
}
const ya = wn(0), Ar = wn(1), lf = wn(2), cf = wn(3), Rn = wn(4), df = wn(5), uf = wn(6);
ya.range;
Ar.range;
lf.range;
cf.range;
Rn.range;
df.range;
uf.range;
function Sn(e) {
  return ct((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Zo);
}
const el = Sn(0), Er = Sn(1), ff = Sn(2), pf = Sn(3), Bn = Sn(4), hf = Sn(5), mf = Sn(6);
el.range;
Er.range;
ff.range;
pf.range;
Bn.range;
hf.range;
mf.range;
const tr = ct((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
tr.range;
const gf = ct((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
gf.range;
const Xt = ct((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Xt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ct((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Xt.range;
const yn = ct((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
yn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ct((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
yn.range;
function xf(e, t, n, a, o, s) {
  const l = [
    [In, 1, Yt],
    [In, 5, 5 * Yt],
    [In, 15, 15 * Yt],
    [In, 30, 30 * Yt],
    [s, 1, _t],
    [s, 5, 5 * _t],
    [s, 15, 15 * _t],
    [s, 30, 30 * _t],
    [o, 1, Zt],
    [o, 3, 3 * Zt],
    [o, 6, 6 * Zt],
    [o, 12, 12 * Zt],
    [a, 1, qt],
    [a, 2, 2 * qt],
    [n, 1, Zo],
    [t, 1, As],
    [t, 3, 3 * As],
    [e, 1, Ra]
  ];
  function i(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), y = p ? p.range(d, +u + 1) : [];
    return h ? y.reverse() : y;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = Uo(([, , m]) => m).right(l, h);
    if (p === l.length) return e.every(to(d / Ra, u / Ra, f));
    if (p === 0) return $r.every(Math.max(to(d, u, f), 1));
    const [y, g] = l[h / l[p - 1][2] < l[p][2] / h ? p - 1 : p];
    return y.every(g);
  }
  return [i, c];
}
const [bf, yf] = xf(Xt, tr, ya, lr, qo, Jo);
function Ba(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ha(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Gn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function vf(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, l = e.shortDays, i = e.months, c = e.shortMonths, d = Vn(o), u = Yn(o), f = Vn(s), h = Yn(s), p = Vn(l), y = Yn(l), g = Vn(i), m = Yn(i), A = Vn(c), C = Yn(c), L = {
    a: H,
    A: oe,
    b: Y,
    B: R,
    c: null,
    d: Hs,
    e: Hs,
    f: Uf,
    g: Kf,
    G: tp,
    H: Hf,
    I: zf,
    j: Of,
    L: tl,
    m: Wf,
    M: Gf,
    p: ee,
    q: W,
    Q: Us,
    s: Ws,
    S: Vf,
    u: Yf,
    U: Zf,
    V: Jf,
    w: qf,
    W: Xf,
    x: null,
    X: null,
    y: Qf,
    Y: ep,
    Z: np,
    "%": Os
  }, D = {
    a: X,
    A: q,
    b: Q,
    B: fe,
    c: null,
    d: zs,
    e: zs,
    f: sp,
    g: gp,
    G: bp,
    H: rp,
    I: ap,
    j: op,
    L: rl,
    m: ip,
    M: lp,
    p: ne,
    q: re,
    Q: Us,
    s: Ws,
    S: cp,
    u: dp,
    U: up,
    V: fp,
    w: pp,
    W: hp,
    x: null,
    X: null,
    y: mp,
    Y: xp,
    Z: yp,
    "%": Os
  }, x = {
    a: w,
    A: k,
    b: j,
    B: F,
    c: E,
    d: Rs,
    e: Rs,
    f: Pf,
    g: Fs,
    G: Ps,
    H: Bs,
    I: Bs,
    j: Lf,
    L: Ef,
    m: Tf,
    M: $f,
    p: b,
    q: Df,
    Q: Rf,
    s: Bf,
    S: Af,
    u: Cf,
    U: Nf,
    V: jf,
    w: kf,
    W: Mf,
    x: $,
    X: I,
    y: Fs,
    Y: Ps,
    Z: If,
    "%": Ff
  };
  L.x = N(n, L), L.X = N(a, L), L.c = N(t, L), D.x = N(n, D), D.X = N(a, D), D.c = N(t, D);
  function N(K, te) {
    return function(ie) {
      var U = [], se = -1, ae = 0, ce = K.length, le, ve, De;
      for (ie instanceof Date || (ie = /* @__PURE__ */ new Date(+ie)); ++se < ce; )
        K.charCodeAt(se) === 37 && (U.push(K.slice(ae, se)), (ve = Es[le = K.charAt(++se)]) != null ? le = K.charAt(++se) : ve = le === "e" ? " " : "0", (De = te[le]) && (le = De(ie, ve)), U.push(le), ae = se + 1);
      return U.push(K.slice(ae, se)), U.join("");
    };
  }
  function M(K, te) {
    return function(ie) {
      var U = Gn(1900, void 0, 1), se = _(U, K, ie += "", 0), ae, ce;
      if (se != ie.length) return null;
      if ("Q" in U) return new Date(U.Q);
      if ("s" in U) return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (te && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53) return null;
        "w" in U || (U.w = 1), "Z" in U ? (ae = Ha(Gn(U.y, 0, 1)), ce = ae.getUTCDay(), ae = ce > 4 || ce === 0 ? Er.ceil(ae) : Er(ae), ae = Xo.offset(ae, (U.V - 1) * 7), U.y = ae.getUTCFullYear(), U.m = ae.getUTCMonth(), U.d = ae.getUTCDate() + (U.w + 6) % 7) : (ae = Ba(Gn(U.y, 0, 1)), ce = ae.getDay(), ae = ce > 4 || ce === 0 ? Ar.ceil(ae) : Ar(ae), ae = lr.offset(ae, (U.V - 1) * 7), U.y = ae.getFullYear(), U.m = ae.getMonth(), U.d = ae.getDate() + (U.w + 6) % 7);
      } else ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), ce = "Z" in U ? Ha(Gn(U.y, 0, 1)).getUTCDay() : Ba(Gn(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (ce + 5) % 7 : U.w + U.U * 7 - (ce + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Ha(U)) : Ba(U);
    };
  }
  function _(K, te, ie, U) {
    for (var se = 0, ae = te.length, ce = ie.length, le, ve; se < ae; ) {
      if (U >= ce) return -1;
      if (le = te.charCodeAt(se++), le === 37) {
        if (le = te.charAt(se++), ve = x[le in Es ? te.charAt(se++) : le], !ve || (U = ve(K, ie, U)) < 0) return -1;
      } else if (le != ie.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function b(K, te, ie) {
    var U = d.exec(te.slice(ie));
    return U ? (K.p = u.get(U[0].toLowerCase()), ie + U[0].length) : -1;
  }
  function w(K, te, ie) {
    var U = p.exec(te.slice(ie));
    return U ? (K.w = y.get(U[0].toLowerCase()), ie + U[0].length) : -1;
  }
  function k(K, te, ie) {
    var U = f.exec(te.slice(ie));
    return U ? (K.w = h.get(U[0].toLowerCase()), ie + U[0].length) : -1;
  }
  function j(K, te, ie) {
    var U = A.exec(te.slice(ie));
    return U ? (K.m = C.get(U[0].toLowerCase()), ie + U[0].length) : -1;
  }
  function F(K, te, ie) {
    var U = g.exec(te.slice(ie));
    return U ? (K.m = m.get(U[0].toLowerCase()), ie + U[0].length) : -1;
  }
  function E(K, te, ie) {
    return _(K, t, te, ie);
  }
  function $(K, te, ie) {
    return _(K, n, te, ie);
  }
  function I(K, te, ie) {
    return _(K, a, te, ie);
  }
  function H(K) {
    return l[K.getDay()];
  }
  function oe(K) {
    return s[K.getDay()];
  }
  function Y(K) {
    return c[K.getMonth()];
  }
  function R(K) {
    return i[K.getMonth()];
  }
  function ee(K) {
    return o[+(K.getHours() >= 12)];
  }
  function W(K) {
    return 1 + ~~(K.getMonth() / 3);
  }
  function X(K) {
    return l[K.getUTCDay()];
  }
  function q(K) {
    return s[K.getUTCDay()];
  }
  function Q(K) {
    return c[K.getUTCMonth()];
  }
  function fe(K) {
    return i[K.getUTCMonth()];
  }
  function ne(K) {
    return o[+(K.getUTCHours() >= 12)];
  }
  function re(K) {
    return 1 + ~~(K.getUTCMonth() / 3);
  }
  return {
    format: function(K) {
      var te = N(K += "", L);
      return te.toString = function() {
        return K;
      }, te;
    },
    parse: function(K) {
      var te = M(K += "", !1);
      return te.toString = function() {
        return K;
      }, te;
    },
    utcFormat: function(K) {
      var te = N(K += "", D);
      return te.toString = function() {
        return K;
      }, te;
    },
    utcParse: function(K) {
      var te = M(K += "", !0);
      return te.toString = function() {
        return K;
      }, te;
    }
  };
}
var Es = { "-": "", _: " ", 0: "0" }, ut = /^\s*\d+/, wf = /^%/, Sf = /[\\^$*+?|[\]().{}]/g;
function Ue(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function _f(e) {
  return e.replace(Sf, "\\$&");
}
function Vn(e) {
  return new RegExp("^(?:" + e.map(_f).join("|") + ")", "i");
}
function Yn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function kf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Cf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Nf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function jf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Mf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Ps(e, t, n) {
  var a = ut.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Fs(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function If(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Df(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Tf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Rs(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Lf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Bs(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function $f(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Af(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Ef(e, t, n) {
  var a = ut.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Pf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Ff(e, t, n) {
  var a = wf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Rf(e, t, n) {
  var a = ut.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Bf(e, t, n) {
  var a = ut.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Hs(e, t) {
  return Ue(e.getDate(), t, 2);
}
function Hf(e, t) {
  return Ue(e.getHours(), t, 2);
}
function zf(e, t) {
  return Ue(e.getHours() % 12 || 12, t, 2);
}
function Of(e, t) {
  return Ue(1 + lr.count(Xt(e), e), t, 3);
}
function tl(e, t) {
  return Ue(e.getMilliseconds(), t, 3);
}
function Uf(e, t) {
  return tl(e, t) + "000";
}
function Wf(e, t) {
  return Ue(e.getMonth() + 1, t, 2);
}
function Gf(e, t) {
  return Ue(e.getMinutes(), t, 2);
}
function Vf(e, t) {
  return Ue(e.getSeconds(), t, 2);
}
function Yf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Zf(e, t) {
  return Ue(ya.count(Xt(e) - 1, e), t, 2);
}
function nl(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function Jf(e, t) {
  return e = nl(e), Ue(Rn.count(Xt(e), e) + (Xt(e).getDay() === 4), t, 2);
}
function qf(e) {
  return e.getDay();
}
function Xf(e, t) {
  return Ue(Ar.count(Xt(e) - 1, e), t, 2);
}
function Qf(e, t) {
  return Ue(e.getFullYear() % 100, t, 2);
}
function Kf(e, t) {
  return e = nl(e), Ue(e.getFullYear() % 100, t, 2);
}
function ep(e, t) {
  return Ue(e.getFullYear() % 1e4, t, 4);
}
function tp(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Rn(e) : Rn.ceil(e), Ue(e.getFullYear() % 1e4, t, 4);
}
function np(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ue(t / 60 | 0, "0", 2) + Ue(t % 60, "0", 2);
}
function zs(e, t) {
  return Ue(e.getUTCDate(), t, 2);
}
function rp(e, t) {
  return Ue(e.getUTCHours(), t, 2);
}
function ap(e, t) {
  return Ue(e.getUTCHours() % 12 || 12, t, 2);
}
function op(e, t) {
  return Ue(1 + Xo.count(yn(e), e), t, 3);
}
function rl(e, t) {
  return Ue(e.getUTCMilliseconds(), t, 3);
}
function sp(e, t) {
  return rl(e, t) + "000";
}
function ip(e, t) {
  return Ue(e.getUTCMonth() + 1, t, 2);
}
function lp(e, t) {
  return Ue(e.getUTCMinutes(), t, 2);
}
function cp(e, t) {
  return Ue(e.getUTCSeconds(), t, 2);
}
function dp(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function up(e, t) {
  return Ue(el.count(yn(e) - 1, e), t, 2);
}
function al(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Bn(e) : Bn.ceil(e);
}
function fp(e, t) {
  return e = al(e), Ue(Bn.count(yn(e), e) + (yn(e).getUTCDay() === 4), t, 2);
}
function pp(e) {
  return e.getUTCDay();
}
function hp(e, t) {
  return Ue(Er.count(yn(e) - 1, e), t, 2);
}
function mp(e, t) {
  return Ue(e.getUTCFullYear() % 100, t, 2);
}
function gp(e, t) {
  return e = al(e), Ue(e.getUTCFullYear() % 100, t, 2);
}
function xp(e, t) {
  return Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function bp(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Bn(e) : Bn.ceil(e), Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function yp() {
  return "+0000";
}
function Os() {
  return "%";
}
function Us(e) {
  return +e;
}
function Ws(e) {
  return Math.floor(+e / 1e3);
}
var Nn, ol;
vp({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function vp(e) {
  return Nn = vf(e), ol = Nn.format, Nn.parse, Nn.utcFormat, Nn.utcParse, Nn;
}
function wp(e) {
  return new Date(e);
}
function Sp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function sl(e, t, n, a, o, s, l, i, c, d) {
  var u = qi(), f = u.invert, h = u.domain, p = d(".%L"), y = d(":%S"), g = d("%I:%M"), m = d("%I %p"), A = d("%a %d"), C = d("%b %d"), L = d("%B"), D = d("%Y");
  function x(N) {
    return (c(N) < N ? p : i(N) < N ? y : l(N) < N ? g : s(N) < N ? m : a(N) < N ? o(N) < N ? A : C : n(N) < N ? L : D)(N);
  }
  return u.invert = function(N) {
    return new Date(f(N));
  }, u.domain = function(N) {
    return arguments.length ? h(Array.from(N, Sp)) : h().map(wp);
  }, u.ticks = function(N) {
    var M = h();
    return e(M[0], M[M.length - 1], N ?? 10);
  }, u.tickFormat = function(N, M) {
    return M == null ? x : d(M);
  }, u.nice = function(N) {
    var M = h();
    return (!N || typeof N.range != "function") && (N = t(M[0], M[M.length - 1], N ?? 10)), N ? h(rf(M, N)) : u;
  }, u.copy = function() {
    return Ji(u, sl(e, t, n, a, o, s, l, i, c, d));
  }, u;
}
function Qo() {
  return ba.apply(sl(bf, yf, Xt, tr, ya, lr, qo, Jo, In, ol).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function _p({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: l = -1,
  onFocus: i,
  "aria-label": c
}) {
  const d = Oe(null), [u, f] = ze(!1), [h, p] = ze(!1), y = t(e.start), g = t(e.end), m = Math.max(g - y, 20), A = () => {
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
  }, C = e.progress ? m * e.progress / 100 : 0, L = () => {
    n?.(e);
  }, D = () => {
    a?.(e);
  }, x = (j) => {
    j.key === "Enter" ? (j.preventDefault(), L()) : j.key === " " && (j.preventDefault(), D());
  }, N = () => {
    f(!0);
  }, M = () => {
    f(!1);
  }, _ = () => {
    p(!0), i?.();
  }, b = () => {
    p(!1);
  }, w = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${y}px`,
    "--task-width": `${m}px`,
    "--task-color": A(),
    left: `${y}px`,
    width: `${m}px`,
    backgroundColor: A()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: l,
      ref: d,
      "data-task-index": s,
      className: w,
      style: k,
      onClick: L,
      onDoubleClick: D,
      onKeyDown: x,
      onMouseDown: N,
      onMouseUp: M,
      onFocus: _,
      onBlur: b,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${C}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function kp({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [l, i] = ze(-1), c = Oe(null), d = (p) => {
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
              const g = p.getTime() === s.getTime(), m = l === y;
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
function Cp({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: l }) {
  const [i, c] = ze(!1), [d, u] = ze(-1), f = Oe(null);
  Ge(() => {
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
          g.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`) : null)?.focus();
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
        const C = Math.min(t.length - 1, d + 1);
        u(C), f.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        g.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case "Escape":
        g.preventDefault(), c(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`) : null)?.focus();
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
              _p,
              {
                task: g,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
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
function My({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const l = Oe(null), [i, c] = ze(800), d = je(() => {
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
  Ge(() => {
    if (!l.current || typeof window > "u") return;
    const g = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!g) return;
    const m = new g((A) => {
      const C = A[0];
      C && c(Math.max(C.contentRect.width - 220, 400));
    });
    return m.observe(l.current), () => m.disconnect();
  }, []);
  const h = je(
    () => Qo().domain([d, u]).range([0, i]),
    [d, u, i]
  ), p = je(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((m) => {
      const A = g.get(m.resourceId) || [];
      A.push(m), g.set(m.resourceId, A);
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
        /* @__PURE__ */ r.jsx(kp, { viewStart: d, viewEnd: u, dateCount: f }),
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
              Cp,
              {
                resource: g,
                tasks: p.get(g.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
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
const Pr = ({
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
) }), Np = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: l = !1,
  attributes: i = {}
}) => {
  const c = () => t ? bt.Children.toArray(t).filter(
    (m) => bt.isValidElement(m) && (m.type === Pr || m.type?.displayName === "BreadcrumbItem")
  ).map((m) => ({
    text: typeof m.props.children == "string" ? m.props.children : String(m.props.children),
    href: m.props.href,
    active: m.props.active,
    attributes: m.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const g = d();
    if (g && g.length > 0) {
      const m = g.slice().reverse().find((A) => A.href && !A.active);
      if (m)
        return { href: m.href, text: m.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), p = ye(
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
          bt.Children.map(t, (g, m) => bt.isValidElement(g) && (g.type === Pr || g.type?.displayName === "BreadcrumbItem") ? bt.cloneElement(g, { key: m }) : null)
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
}, jp = Np;
jp.Item = Pr;
Pr.displayName = "BreadcrumbItem";
const il = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = ze(!1);
  Ge(() => {
    s(!0);
  }, []), Ge(() => {
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
  }, [o]);
  const l = ye("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      className: l,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": o ? "true" : "false",
      ...a,
      children: e
    }
  );
}, Iy = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const l = ye("nhsuk-pagination", o);
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: l,
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
}, Dy = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ye("nhsuk-contents-list", t), s = (l, i) => l.current ? /* @__PURE__ */ r.jsx(
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
      className: o,
      role: "navigation",
      "aria-label": n,
      ...a,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((l, i) => s(l, i)) })
      ]
    }
  );
}, ll = bt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
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
    o
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const C = () => i && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: i, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Jt,
      {
        level: a,
        className: y,
        children: C()
      }
    );
  }, m = () => u.children ? u.children : l ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: l } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, A = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
          A()
        ] })
      ]
    }
  );
});
ll.displayName = "Card";
const Ty = ({
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
}, Ly = ({
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
}, $y = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
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
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const C = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        C,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Jt,
      {
        level: a,
        className: g,
        children: L
      }
    );
  }, A = () => c || (l ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: l } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
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
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: A() })
      ]
    }
  );
}, Mp = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: l,
  children: i,
  ...c
}) => {
  const d = ye(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !i ? null : a ? /* @__PURE__ */ r.jsx(
    Jt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Jt,
    {
      level: o,
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
  ) : s ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ r.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ r.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, Ay = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = ye("nhsuk-inset-text", a), l = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: l() });
}, Ey = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = ye(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (i) => i.children ? i.children : i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text ? i.text : null, l = (i) => !i || !i.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: i.items.map((c, d) => /* @__PURE__ */ r.jsx(
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
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: o, ...a, children: e.map((i, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(i.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(i.value) }),
    l(i.actions)
  ] }, c)) }) });
}, Zn = { current: null }, Ip = () => {
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
}, Dp = (e) => {
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
}, Fr = (e, t, n) => {
  if (n || !t) return e;
  const a = Ip();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return Dp(e);
}, Tp = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
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
  const A = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), C = ye(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), L = ye(f), D = (b, w) => {
    const k = ye(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${b.format}`]: b.format
      },
      b.classes
    ), j = {
      scope: "col",
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...s && { role: "columnheader" },
      ...b.attributes
    };
    let F;
    if (b.node != null)
      F = /* @__PURE__ */ r.jsx(r.Fragment, { children: b.node });
    else if (b.html)
      F = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const E = Array.isArray(b.code), $ = E ? b.code.join(`
`) : b.code, I = E || $.includes(`
`), H = {
        className: ye("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": I,
          "nhsuk-table__code--inline": !I
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, oe = Fr($, b.codeLanguage);
      F = I ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: oe }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: oe }
        }
      );
    } else
      F = b.text;
    return /* @__PURE__ */ r.jsx("th", { className: k, ...j, children: F }, w);
  }, x = (b, w, k) => {
    const j = o && k || b.rowHeader, F = ye(
      j ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${j ? "header" : "cell"}--${b.format}`]: b.format
      },
      b.classes
    ), E = {
      ...j && { scope: "row" },
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...s && {
        role: j ? "rowheader" : "cell",
        ...b.header && { "data-label": b.header }
      },
      ...b.attributes
    };
    let $;
    if (b.node != null)
      $ = /* @__PURE__ */ r.jsx(r.Fragment, { children: b.node });
    else if (b.html)
      $ = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const oe = Array.isArray(b.code), Y = oe ? b.code.join(`
`) : b.code, R = oe || Y.includes(`
`), ee = {
        className: ye("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, W = Fr(
        Y,
        b.codeLanguage,
        b.disableHighlight
      );
      $ = R ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...ee,
          dangerouslySetInnerHTML: { __html: W }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...ee,
          dangerouslySetInnerHTML: { __html: W }
        }
      );
    } else
      $ = b.text;
    const I = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && b.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        b.header,
        " "
      ] }),
      $
    ] }), H = j ? "th" : "td";
    return /* @__PURE__ */ r.jsx(H, { className: F, ...E, children: I }, w);
  };
  let N = t, M = e;
  !N && y && y.length && (N = y.map((b) => ({
    text: b.title,
    format: b.format,
    classes: b.headerClasses,
    attributes: b.headerAttributes
  }))), !M && y && g && g.length && (M = g.map((b, w) => y.map((k) => {
    const j = k.accessor ? k.accessor(b, w) : b[k.key];
    let F = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (F.rowHeader = !0), k.render) {
      const E = k.render(j, b, w, k);
      return E == null || typeof E == "boolean" ? { ...F, text: "" } : typeof E == "string" || typeof E == "number" ? { ...F, text: String(E) } : { ...F, ...E };
    }
    return { ...F, text: j != null ? String(j) : "" };
  })));
  const _ = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: C,
      ...s && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ye(A, m && "nhsuk-u-visually-hidden"), children: n }),
        N && N.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: N.map(
              (b, w) => D(b, w)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: M && M.map((b, w) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: b.map(
              (k, j) => x(k, j, j === 0)
            )
          },
          w
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(Mp, { className: d, children: [
    l && /* @__PURE__ */ r.jsx(Jt, { level: i, className: "nhsuk-table__heading-tab", children: l }),
    _()
  ] }) : L ? /* @__PURE__ */ r.jsx("div", { className: L, children: _() }) : _();
}, Lp = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = ye(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, cl = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, dl = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: l,
  format: i,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  as: p = "th"
}) => {
  const y = ye(
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
    const C = Array.isArray(a), L = C ? a.join(`
`) : a, D = C || L.includes(`
`), x = {
      className: ye("nhsuk-table__code", s, {
        "nhsuk-table__code--block": D,
        "nhsuk-table__code--inline": !D
      }),
      ...o ? { "data-language": o } : {}
    }, N = Fr(
      L,
      o,
      l
    );
    m = D ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...x,
        dangerouslySetInnerHTML: { __html: N }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...x, dangerouslySetInnerHTML: { __html: N } });
  } else m = e;
  const A = p;
  return /* @__PURE__ */ r.jsx(A, { className: y, ...g, children: m });
}, $p = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: l,
  format: i,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  rowHeader: p
}) => {
  const y = !!p, g = y ? "th" : "td", m = ye(
    y ? "nhsuk-table__header" : "nhsuk-table__cell",
    i && `nhsuk-table__${y ? "header" : "cell"}--${i}`,
    c
  ), A = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...y && { scope: "row" },
    ...h && { role: y ? "rowheader" : "cell" },
    ...f
  };
  let C;
  if (n != null) C = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) C = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const L = Array.isArray(a), D = L ? a.join(`
`) : a, x = L || D.includes(`
`), N = {
      className: ye("nhsuk-table__code", s, {
        "nhsuk-table__code--block": x,
        "nhsuk-table__code--inline": !x
      }),
      ...o ? { "data-language": o } : {}
    }, M = Fr(D, o, l);
    C = x ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...N, dangerouslySetInnerHTML: { __html: M } }) }) : /* @__PURE__ */ r.jsx("code", { ...N, dangerouslySetInnerHTML: { __html: M } });
  } else C = e;
  return /* @__PURE__ */ r.jsx(g, { className: m, ...A, children: C });
}, Qt = Tp;
Qt.Caption = Lp;
Qt.BodyRow = cl;
Qt.HeaderCell = dl;
Qt.Cell = $p;
let Gs = !1, Vs = !1;
Object.defineProperty(Qt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Gs && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Gs = !0), cl;
  }
});
Object.defineProperty(Qt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Vs && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Vs = !0), dl;
  }
});
const Py = zn(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: l,
  autoActivate: i = !0,
  className: c,
  id: d,
  "data-testid": u,
  ...f
}, h) => {
  const p = n !== void 0, [y, g] = ze(() => t || e[0]?.id || ""), m = p ? n : y, A = Oe(null), C = Oe(/* @__PURE__ */ new Map()), L = me((w) => {
    p || g(w), a?.(w);
  }, [p, a]), D = me((w) => {
    o?.(w), i && L(w);
  }, [o, i, L]), x = me((w, k) => {
    const j = e.filter(($) => !$.disabled).map(($) => $.id), F = j.indexOf(k);
    let E = null;
    switch (w.key) {
      case "ArrowLeft":
        E = F > 0 ? F - 1 : j.length - 1;
        break;
      case "ArrowRight":
        E = F < j.length - 1 ? F + 1 : 0;
        break;
      case "Home":
        E = 0;
        break;
      case "End":
        E = j.length - 1;
        break;
      case "Escape":
        w.preventDefault(), l?.();
        return;
      default:
        return;
    }
    if (E !== null) {
      w.preventDefault();
      const $ = j[E], I = C.current.get($);
      I && (I.focus(), D($));
    }
  }, [e, D, l]), N = me((w, k) => {
    k ? C.current.set(w, k) : C.current.delete(w);
  }, []), M = me((w) => {
    const k = C.current.get(w);
    k && k.focus();
  }, []);
  ji(h, () => ({
    focusTab: M,
    getActiveTab: () => m,
    getTabListElement: () => A.current
  }), [M, m]);
  const _ = me((w) => {
    const k = w.relatedTarget;
    A.current?.contains(k) || s?.();
  }, [s]), b = ye("nhsuk-tabs", c);
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
            ref: A,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: _,
                children: e.map((w) => {
                  const k = w.id === m, j = w.disabled, F = ye("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": j
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: F, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (E) => N(w.id, E),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${w.id}-panel`,
                      id: `${w.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: j,
                      onClick: () => !j && L(w.id),
                      onKeyDown: (E) => !j && x(E, w.id),
                      onFocus: () => !j && D(w.id),
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
}), Ap = zn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: l,
    children: i,
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
    return i ? h = i : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: l,
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
Ap.displayName = "Details";
const Ep = zn(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...l
  }, i) => {
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
      Jt,
      {
        level: o,
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
Ep.displayName = "DoDontList";
const Pp = zn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: l,
    children: i,
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
    return i ? h = i : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: l,
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
Pp.displayName = "Expander";
const Fp = zn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
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
        Rp,
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
        ref: o,
        className: s,
        ...a,
        children: e.map(l)
      }
    );
  }
), Rp = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
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
        "aria-describedby": s,
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
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(Ve, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      l(),
      i()
    ] }),
    c()
  ] });
};
Fp.displayName = "TaskList";
const Fy = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: o,
  className: s,
  ...l
}) => {
  const i = /important/i.test(e), c = () => o || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), d = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: d,
      ...l,
      children: [
        ki(
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
}, Ry = ({
  src: e,
  alt: t,
  caption: n,
  sizes: a,
  srcset: o,
  className: s,
  ...l
}) => {
  const i = [
    "nhsuk-image",
    s
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
}, Bp = ({
  dateRange: e,
  onPrev: t,
  onNext: n,
  onToday: a,
  density: o,
  onDensityChange: s,
  a11yMode: l,
  onA11yModeChange: i
}) => /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx(mt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(mt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(mt, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      Cr,
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
      Cr,
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
] }), Hp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Ve, { color: zp(n.status), text: n.label }) }, n.status)) });
function zp(e) {
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
const By = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: o,
  selectionMode: s = "single",
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
  const [m, A] = ze("grid"), C = l || m, [L, D] = ze(a || []), x = n ?? L, N = je(() => {
    const E = /* @__PURE__ */ new Set();
    return e.forEach(($) => E.add(new Date($.start).getTime())), Array.from(E).sort(($, I) => $ - I);
  }, [e]), M = je(() => {
    const E = {};
    return e.forEach(($) => {
      const I = new Date($.start).getTime();
      E[I] || (E[I] = {});
      const H = $.capacity - $.booked - ($.held || 0);
      E[I][$.sessionId] = { slot: $, remaining: H };
    }), E;
  }, [e]), _ = me((E) => {
    if (s === "single") {
      const $ = [E.id];
      n || D($), o?.($, { lastAction: "select" });
    } else {
      const $ = x.includes(E.id), I = $ ? x.filter((H) => H !== E.id) : [...x, E.id];
      n || D(I), o?.(I, { lastAction: $ ? "deselect" : "select" });
    }
  }, [s, x, n, o]), b = je(() => h || (p ? Array.from(new Set(e.map(($) => $.status))).map(($) => ({
    status: $,
    label: $.charAt(0).toUpperCase() + $.slice(1)
  })) : void 0), [h, p, e]), w = b ? /* @__PURE__ */ r.jsx(
    Hp,
    {
      items: b,
      orientation: y === "left" || y === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (E) => {
    l || A(E), g?.(E);
  }, j = u || (f ? /* @__PURE__ */ r.jsx(
    Bp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: C,
      onA11yModeChange: k
    }
  ) : null), F = /* @__PURE__ */ r.jsx("div", { style: c, className: ye(i), children: /* @__PURE__ */ r.jsx(Qa, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(an, { children: /* @__PURE__ */ r.jsx(Xn, { width: bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    j,
    y === "top" && w,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((E) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => _(E), "aria-pressed": x.includes(E.id), children: [
      Jn(new Date(E.start)),
      " – ",
      Jn(new Date(E.end)),
      " (",
      E.status,
      ")"
    ] }) }, E.id)) }),
    y === "bottom" && w
  ] }) }) }) }) });
  return C === "list" ? F : /* @__PURE__ */ r.jsx("div", { style: c, className: ye(i), children: /* @__PURE__ */ r.jsx(Qa, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(an, { children: /* @__PURE__ */ r.jsx(Xn, { width: bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    j,
    y === "top" && w,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": N.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((E) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${E.specialty}`, className: "nhs-slot-matrix__session-header", children: E.specialty }, E.id))
      ] }),
      N.map((E) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Jn(new Date(E)), children: Jn(new Date(E)) }),
        t.map(($) => {
          const I = M[E]?.[$.id];
          if (!I)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, $.id);
          const { slot: H, remaining: oe } = I, Y = x.includes(H.id), R = d ? d(H) : `Slot ${Jn(new Date(H.start))} ${H.status}${oe === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": H.status,
              className: ye("nhs-slot-matrix__cell", Y && "nhs-slot-matrix__cell--selected"),
              "aria-label": R,
              "aria-selected": Y || void 0,
              onClick: () => _(H),
              children: oe > 0 ? `${oe} left` : "Full"
            },
            H.id
          );
        })
      ] }, E))
    ] }),
    y === "bottom" && w
  ] }) }) }) }) });
};
function Ys(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Jn(e) {
  return `${Ys(e.getHours())}:${Ys(e.getMinutes())}`;
}
const Op = ({
  title: e,
  value: t,
  subtitle: n,
  variant: a = "default",
  href: o,
  className: s = "",
  ariaLabel: l,
  ...i
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    s
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Jt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return o ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: o,
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
}, Hy = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Qa, { children: /* @__PURE__ */ r.jsx(an, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    Xn,
    {
      width: bn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(Op, { ...o })
    },
    s
  )) }) }) });
}, Up = bt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
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
  }, A) => {
    const C = Oe(null), L = Oe(null), D = Oe(null);
    bt.useImperativeHandle(A, () => C.current, []);
    const [x, N] = ze(0), [M, _] = ze(0), [b, w] = ze("headers"), [k, j] = ze("browse"), F = t.length, E = e.length, $ = je(() => !n || n.length === 0 ? e : [...e].sort((W, X) => {
      for (const { key: q, direction: Q } of n) {
        const fe = W[q], ne = X[q];
        if (fe == null && ne == null) continue;
        if (fe == null) return 1;
        if (ne == null) return -1;
        let re = 0;
        if (typeof fe == "number" && typeof ne == "number" ? re = fe - ne : re = String(fe).localeCompare(String(ne)), re !== 0)
          return Q === "asc" ? re : -re;
      }
      return 0;
    }), [e, n]), I = me((W, X) => {
      setTimeout(() => {
        const q = C.current?.querySelector(
          `tbody tr:nth-child(${W + 1}) td:nth-child(${X + 1})`
        );
        q && (q.focus(), typeof q.scrollIntoView == "function" && q.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), H = me((W) => {
      setTimeout(() => {
        const X = C.current?.querySelector(`th:nth-child(${W + 1})`);
        X && (X.focus(), typeof X.scrollIntoView == "function" && X.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), oe = me((W) => {
      a?.(W);
    }, [a]), Y = me((W) => {
      s?.(W);
    }, [s]), R = me((W) => {
      const { key: X } = W;
      switch (X) {
        case "Enter":
          if (W.preventDefault(), b === "headers" && k === "browse")
            j("navigate"), H(M);
          else if (b === "headers" && k === "navigate") {
            const q = t[M];
            q && oe(q.key);
          } else b === "cells" && k === "browse" ? (j("navigate"), I(x, M)) : b === "cells" && k === "navigate" && Y(x);
          break;
        case "Escape":
          W.preventDefault(), (b === "headers" && k === "navigate" || b === "cells" && k === "navigate") && j("browse");
          break;
        case "ArrowLeft":
          if (W.preventDefault(), k === "navigate" || k === "browse" && b === "headers") {
            if (b === "headers") {
              const q = Math.max(0, M - 1);
              _(q), H(q);
            } else if (b === "cells") {
              const q = Math.max(0, M - 1);
              _(q), I(x, q);
            }
          }
          break;
        case "ArrowRight":
          if (W.preventDefault(), k === "navigate" || k === "browse" && b === "headers") {
            if (b === "headers") {
              const q = Math.min(F - 1, M + 1);
              _(q), H(q);
            } else if (b === "cells") {
              const q = Math.min(F - 1, M + 1);
              _(q), I(x, q);
            }
          }
          break;
        case "ArrowUp":
          if (W.preventDefault(), b === "cells") {
            if (k === "browse") {
              const q = Math.max(0, x - 1);
              N(q), I(q, 0), _(0);
            } else if (k === "navigate")
              if (x > 0) {
                const q = x - 1;
                N(q), I(q, M);
              } else
                w("headers"), j("browse"), H(M);
          }
          break;
        case "ArrowDown":
          if (W.preventDefault(), b === "headers" && k === "browse")
            w("cells"), N(0), _(0), I(0, 0);
          else if (b === "cells") {
            const q = E - 1;
            if (k === "browse") {
              const Q = Math.min(q, x + 1);
              N(Q), I(Q, 0), _(0);
            } else if (k === "navigate" && x < q) {
              const Q = x + 1;
              N(Q), I(Q, M);
            }
          }
          break;
        case "Home":
          W.preventDefault(), b === "headers" ? (_(0), H(0)) : b === "cells" && (W.ctrlKey ? (N(0), _(0), I(0, 0)) : (_(0), I(x, 0)));
          break;
        case "End":
          if (W.preventDefault(), b === "headers") {
            const q = F - 1;
            _(q), H(q);
          } else if (b === "cells")
            if (W.ctrlKey) {
              const q = E - 1, Q = F - 1;
              N(q), _(Q), I(q, Q);
            } else {
              const q = F - 1;
              _(q), I(x, q);
            }
          break;
        case " ":
          if (W.preventDefault(), b === "headers" && k === "navigate") {
            const q = t[M];
            q && oe(q.key);
          } else b === "cells" && k === "navigate" && Y(x);
          break;
      }
    }, [
      b,
      k,
      M,
      x,
      F,
      E,
      t,
      I,
      H,
      oe,
      Y
    ]);
    Ge(() => {
      const W = C.current;
      if (W)
        return W.addEventListener("keydown", R), () => W.removeEventListener("keydown", R);
    }, [R]);
    const ee = ye(
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
        ref: C,
        className: ee,
        id: l,
        "data-testid": i,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": d,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: L, role: "row", children: t.map((W, X) => {
            const q = n?.find((ne) => ne.key === W.key), Q = !!q, fe = b === "headers" && M === X;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ye("sortable-header", {
                  "sortable-header--focused": fe
                }),
                role: "columnheader",
                tabIndex: fe ? 0 : -1,
                onClick: () => oe(W.key),
                onKeyDown: (ne) => {
                  (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), oe(W.key));
                },
                "aria-sort": Q ? q?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: W.label }),
                  Q && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ne) => ne.key === W.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: q?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              W.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: D, className: "nhsuk-table__body", role: "rowgroup", children: $.map((W, X) => {
            const q = o === X, Q = b === "cells" && x === X;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ye("data-row", {
                  "data-row--selected": q,
                  "data-row--focused": Q
                }),
                "aria-selected": q,
                children: t.map((fe, ne) => {
                  const re = fe.tableRenderer ? fe.tableRenderer(W) : fe.render ? fe.render(W) : W[fe.key], K = b === "cells" && x === X && M === ne, te = () => typeof re == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: re ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: re ? "Yes" : "No" })
                  ] }) : String(re ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ye("data-cell", {
                        "data-cell--focused": K
                      }),
                      tabIndex: K ? 0 : -1,
                      onClick: () => Y(X),
                      children: te()
                    },
                    fe.key
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
Up.displayName = "AriaDataGrid";
const ul = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: l = !0,
  showHelp: i = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = Oe(null), h = Oe(null), p = Oe(null), y = me((b, w) => {
    c || (h.current = w, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", w));
  }, [c]), g = me((b, w) => {
    c || h.current === w || (b.preventDefault(), b.dataTransfer.dropEffect = "move", p.current = w);
  }, [c]), m = me((b, w) => {
    if (c) return;
    b.preventDefault();
    const k = h.current;
    if (!k || k === w) return;
    const j = e.findIndex((E) => E.key === k), F = e.findIndex((E) => E.key === w);
    if (j !== -1 && F !== -1) {
      const E = [...e], [$] = E.splice(j, 1);
      E.splice(F, 0, $), n(E);
    }
    h.current = null, p.current = null;
  }, [c, e, n]), A = me(() => {
    h.current = null, p.current = null;
  }, []), C = me((b) => {
    const w = t.find((k) => k.key === b);
    return w ? w.label : b;
  }, [t]), L = me((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), D = me((b) => {
    if (c) return;
    const w = e.map(
      (k) => k.key === b ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    n(w);
  }, [e, n, c]), x = me((b) => {
    if (c) return;
    const w = e.filter((k) => k.key !== b);
    n(w);
  }, [e, n, c]), N = me(() => {
    c || n([]);
  }, [n, c]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const b = e.map((w, k) => {
      const j = w.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${C(w.key)} (${j})`;
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
        children: o
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
        children: M()
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
              onDragEnd: A,
              onClick: () => D(b.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ r.jsx(
                Ve,
                {
                  color: L(w),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(b.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${w + 1}`, children: w + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: C(b.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), D(b.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${C(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
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
        mt,
        {
          variant: "secondary",
          onClick: N,
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
function Wp(e, t) {
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
      const { newLength: s } = t.payload, l = new Array(s).fill(!1), i = new Array(s).fill(null), c = new Array(s).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, s); d++)
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
const oo = zn(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
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
    errorComponent: A,
    "data-testid": C,
    actions: L,
    actionsMinGap: D = 16,
    forceActionsAbove: x = !1
  } = t, M = Oe(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, _ = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), b = `${M}-description`, w = `${M}-navigation-help`, {
    dataComparator: k = (S, P) => JSON.stringify(S) === JSON.stringify(P),
    filterFunction: j = (S) => S,
    booleanRenderer: F = (S) => S ? "✓" : "✗"
  } = a || {}, E = s !== void 0, $ = s ?? 0, [I, H] = ze({
    focusArea: "tabs",
    focusedTabIndex: $,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), oe = je(() => ({
    selectedIndex: $,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [$]), [Y, R] = Mi(Wp, oe);
  Ge(() => {
    const S = Y.tabLoadingStates.length, P = o.length;
    S !== P && R({ type: "ADJUST_ARRAYS", payload: { newLength: P } });
  }, [o.length]), Ge(() => {
    E && R({ type: "SET_SELECTED_INDEX", payload: $ });
  }, [$, E]), Ge(() => {
    H((S) => ({
      ...S,
      focusArea: "tabs",
      focusedTabIndex: Y.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [Y.selectedIndex]), Ge(() => {
    i && i(Y.globalSelectedRowData);
  }, [Y.globalSelectedRowData, i]);
  const ee = me(
    (S, P) => k(S, P),
    [k]
  ), W = me(
    (S) => {
      S >= 0 && S < o.length && !o[S].disabled && (R({ type: "SET_SELECTED_INDEX", payload: S }), H((P) => ({
        ...P,
        focusedTabIndex: S,
        focusArea: "tabs"
      })), l?.(S));
    },
    [o, l]
  ), X = Oe(!1), q = me(
    (S, P) => {
      if (!P?.force && !X.current && S === 0) {
        X.current = !0;
        return;
      }
      X.current = !0, setTimeout(() => {
        const z = Q.current[S], V = z?.parentElement;
        if (z && V) {
          const Z = z.offsetLeft, J = z.offsetWidth, ue = V.clientWidth, de = Z - ue / 2 + J / 2;
          try {
            V.scrollTo({
              left: Math.max(0, de),
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
          tabListElementExists: !!V
        });
      }, 50);
    },
    []
  ), Q = Oe([]), fe = Oe([]), ne = me(
    (S, P) => {
      const z = Y.sortConfig || [], V = z.find(
        (ue) => ue.key === P
      );
      let Z;
      V ? V.direction === "asc" ? Z = z.map(
        (ue) => ue.key === P ? { ...ue, direction: "desc" } : ue
      ) : Z = z.filter(
        (ue) => ue.key !== P
      ) : Z = [...z, { key: P, direction: "asc" }], R({
        type: "SET_SORT",
        payload: Z
      }), o[S].onSort?.(P);
    },
    [Y.sortConfig, o]
  ), re = me(
    (S) => {
      setTimeout(() => {
        const P = document.querySelector(
          `[data-tab-panel="${Y.selectedIndex}"] th:nth-child(${S + 1})`
        );
        P && P.focus();
      }, 0);
    },
    [Y.selectedIndex]
  ), K = me(
    (S) => F(S),
    [F]
  ), te = me(
    (S, P) => {
      setTimeout(() => {
        const z = document.querySelector(
          `[data-tab-panel="${Y.selectedIndex}"] tbody tr:nth-child(${S + 1}) td:nth-child(${P + 1})`
        );
        z && z.focus();
      }, 0);
    },
    [Y.selectedIndex]
  );
  Ge(() => {
    I.isGridActive && (I.focusArea === "headers" ? setTimeout(() => {
      re(I.focusedHeaderIndex);
    }, 0) : I.focusArea === "cells" && setTimeout(() => {
      te(
        I.focusedRowIndex,
        I.focusedColumnIndex
      );
    }, 0));
  }, [
    I.focusArea,
    I.isGridActive,
    I.focusedHeaderIndex,
    I.focusedRowIndex,
    I.focusedColumnIndex,
    re,
    te
  ]), Ge(() => {
    q(Y.selectedIndex);
  }, [Y.selectedIndex, q]);
  const ie = me(
    (S, P) => {
      const { key: z } = S, V = o[Y.selectedIndex], Z = V?.columns.length || 0;
      switch (z) {
        case "ArrowLeft":
          S.preventDefault();
          const J = Math.max(0, P - 1);
          H((we) => ({
            ...we,
            focusedHeaderIndex: J
          })), re(J);
          break;
        case "ArrowRight":
          S.preventDefault();
          const ue = Math.min(Z - 1, P + 1);
          H((we) => ({
            ...we,
            focusedHeaderIndex: ue
          })), re(ue);
          break;
        case "ArrowUp":
          S.preventDefault(), H((we) => ({
            ...we,
            focusArea: "tabs",
            focusedTabIndex: Y.selectedIndex
          })), q(Y.selectedIndex), Q.current[Y.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          S.preventDefault(), H((we) => ({
            ...we,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: P,
            isGridActive: !0
          }));
          break;
        case "Home":
          S.preventDefault(), H((we) => ({ ...we, focusedHeaderIndex: 0 })), re(0);
          break;
        case "End":
          S.preventDefault();
          const de = Z - 1;
          H((we) => ({
            ...we,
            focusedHeaderIndex: de
          })), re(de);
          break;
        case "Enter":
        case " ":
          S.preventDefault();
          const xe = V?.columns[P]?.key;
          xe && ne(Y.selectedIndex, xe);
          break;
      }
    },
    [
      o,
      Y.selectedIndex,
      ne,
      H,
      re,
      te,
      Q
    ]
  ), U = me(
    (S, P, z) => {
      const { key: V } = S, Z = o[Y.selectedIndex], J = Z?.data.length || 0, ue = Z?.columns.length || 0;
      switch (V) {
        case "ArrowUp":
          if (S.preventDefault(), P === 0)
            H((he) => ({
              ...he,
              focusArea: "headers",
              focusedHeaderIndex: z,
              isGridActive: !1
            })), re(z);
          else {
            const he = P - 1;
            H((Te) => ({
              ...Te,
              focusedRowIndex: he
            })), te(he, z);
          }
          break;
        case "ArrowDown":
          S.preventDefault();
          const de = Math.min(J - 1, P + 1);
          H((he) => ({
            ...he,
            focusedRowIndex: de
          })), te(de, z);
          break;
        case "ArrowLeft":
          S.preventDefault();
          const xe = Math.max(0, z - 1);
          H((he) => ({
            ...he,
            focusedColumnIndex: xe
          })), te(P, xe);
          break;
        case "ArrowRight":
          S.preventDefault();
          const we = Math.min(ue - 1, z + 1);
          H((he) => ({
            ...he,
            focusedColumnIndex: we
          })), te(P, we);
          break;
        case "Home":
          S.preventDefault(), S.ctrlKey ? (H((he) => ({
            ...he,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), te(0, 0)) : (H((he) => ({ ...he, focusedColumnIndex: 0 })), te(P, 0));
          break;
        case "End":
          if (S.preventDefault(), S.ctrlKey) {
            const he = J - 1, Te = ue - 1;
            H((Pe) => ({
              ...Pe,
              focusedRowIndex: he,
              focusedColumnIndex: Te
            })), te(he, Te);
          } else {
            const he = ue - 1;
            H((Te) => ({
              ...Te,
              focusedColumnIndex: he
            })), te(P, he);
          }
          break;
        case "Enter":
        case " ":
          if (S.preventDefault(), Z && Z.data[P]) {
            const he = Z.data.some(
              (We) => "ews_data" in We
            ) ? j(Z.data, Y.filters) : Z.data, Te = Y.sortConfig;
            let Pe = he;
            if (Te && Te.length > 0 && (Pe = [...he].sort((We, He) => {
              for (const { key: tt, direction: Ye } of Te) {
                let it = We[tt], at = He[tt];
                const et = Z.columns.find(
                  (At) => At.key === tt
                );
                if (et?.tableRenderer ? (it = et.tableRenderer(We), at = et.tableRenderer(He)) : et?.render && (it = et.render(We), at = et.render(He)), it == null && at == null) continue;
                if (it == null) return Ye === "asc" ? -1 : 1;
                if (at == null) return Ye === "asc" ? 1 : -1;
                let qe = 0;
                if (typeof it == "number" && typeof at == "number" ? qe = it - at : qe = String(it).localeCompare(
                  String(at),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), qe !== 0)
                  return Ye === "asc" ? qe : -qe;
              }
              return 0;
            })), Pe[P]) {
              const We = Pe[P], tt = Y.globalSelectedRowData && ee(Y.globalSelectedRowData, We) ? null : We;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: tt
              });
            }
          }
          break;
      }
    },
    [
      o,
      Y.selectedIndex,
      Y.filters,
      Y.sortConfig,
      j,
      ee,
      R,
      H,
      re,
      te
    ]
  ), se = me(
    (S, P) => j(S, P),
    [j]
  );
  if (ji(
    n,
    () => ({
      selectTab: (S) => {
        S >= 0 && S < o.length && (R({ type: "SET_SELECTED_INDEX", payload: S }), l?.(S));
      },
      refreshData: (S) => {
        console.log("Refreshing data for tab:", S ?? "all");
      },
      exportData: (S) => {
        const P = S ?? Y.selectedIndex, z = o[P];
        return z ? z.data : [];
      },
      getSelectedRows: (S) => Y.globalSelectedRowData ? [] : [],
      clearSelection: (S) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (S) => {
        R({ type: "SET_FILTERS", payload: S });
      }
    }),
    [Y.selectedIndex, Y.selectedRows, o, l]
  ), y)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": C,
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
        "data-testid": C,
        children: A || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: m })
        ] })
      }
    );
  const ae = Oe(null), ce = Oe(null), le = Oe(null), [ve, De] = ze(!0);
  Ge(() => {
    if (!L) {
      De(!1);
      return;
    }
    if (x) {
      De(!1);
      return;
    }
    function S() {
      if (!ae.current || !ce.current || !le.current) return;
      const V = ae.current.clientWidth, Z = Array.from(
        ce.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), J = Z.reduce((we, he) => we + he.offsetWidth, 0), ue = le.current.offsetWidth, de = Math.max(8 * (Z.length - 1), 0), xe = J + de + ue + D <= V;
      De(xe);
    }
    const P = requestAnimationFrame(() => S()), z = new ResizeObserver(() => S());
    return ae.current && z.observe(ae.current), ce.current && z.observe(ce.current), () => {
      cancelAnimationFrame(P), z.disconnect();
    };
  }, [L, D, x, o.length]);
  const Ce = le, ge = me(() => Ce.current ? Array.from(
    Ce.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((S) => !S.hasAttribute("disabled")) : [], []), G = me(
    (S) => {
      const P = ge();
      if (!P.length) return;
      const z = Math.max(0, Math.min(S, P.length - 1));
      P[z].focus(), H((V) => ({ ...V, focusArea: "actions", focusedActionIndex: z }));
    },
    [ge]
  ), v = me(() => G(0), [G]), T = me(
    (S, P) => {
      const { key: z } = S, V = o.length - 1;
      switch (z) {
        case "ArrowUp": {
          L && !ve && (S.preventDefault(), v());
          break;
        }
        case "ArrowLeft": {
          S.preventDefault();
          const Z = P > 0 ? P - 1 : V;
          W(Z), q(Z), Q.current[Z]?.focus();
          break;
        }
        case "ArrowRight": {
          if (S.preventDefault(), P === V && L && ve) {
            v();
            return;
          }
          const Z = P < V ? P + 1 : 0;
          W(Z), q(Z), Q.current[Z]?.focus();
          break;
        }
        case "ArrowDown": {
          S.preventDefault(), H((Z) => ({
            ...Z,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          S.preventDefault(), W(0), q(0), Q.current[0]?.focus();
          break;
        }
        case "End": {
          S.preventDefault(), W(V), q(V), Q.current[V]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          S.preventDefault(), W(P);
          break;
        }
        case "Tab": {
          !S.shiftKey && P === V && L && ve && v();
          break;
        }
      }
    },
    [o.length, W, q, L, ve, v]
  ), B = me((S) => {
    const { key: P } = S, z = ge();
    if (!z.length) return;
    const V = z.findIndex((Z) => Z === document.activeElement);
    switch (P) {
      case "ArrowLeft": {
        if (ve)
          if (V > 0)
            S.preventDefault(), G(V - 1);
          else {
            S.preventDefault();
            const Z = o.length - 1;
            W(Z), q(Z), Q.current[Z]?.focus(), H((J) => ({ ...J, focusArea: "tabs", focusedTabIndex: Z }));
          }
        break;
      }
      case "ArrowRight": {
        ve && (V < z.length - 1 ? (S.preventDefault(), G(V + 1)) : (S.preventDefault(), W(0), q(0), Q.current[0]?.focus(), H((Z) => ({ ...Z, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ve)
          S.preventDefault(), H((Z) => ({ ...Z, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          S.preventDefault();
          const Z = Y.selectedIndex;
          Q.current[Z]?.focus(), H((J) => ({ ...J, focusArea: "tabs", focusedTabIndex: Z }));
        }
        break;
      }
    }
  }, [ge, ve, G, o.length, W, q, Y.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": C,
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
          ul,
          {
            sortConfig: Y.sortConfig || [],
            columns: o.flatMap(
              (S) => S.columns.map((P) => ({ key: P.key, label: P.label }))
            ).filter(
              (S, P, z) => z.findIndex((V) => V.key === S.key) === P
              // Remove duplicates
            ),
            onSortChange: (S) => {
              R({ type: "SET_SORT", payload: S });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        L && !ve && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: le,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: B,
            children: L
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ve ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? _ ? d : b : w,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: ce,
              children: o.map((S, P) => {
                const z = P === Y.selectedIndex, V = S.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${S.id}`,
                    "aria-controls": `panel-${S.id}`,
                    "aria-selected": z,
                    "aria-disabled": V,
                    tabIndex: z ? 0 : -1,
                    ref: (Z) => {
                      Q.current[P] = Z;
                    },
                    onClick: () => W(P),
                    onKeyDown: (Z) => T(Z, P),
                    disabled: V,
                    className: [
                      "aria-tabs-datagrid__tab",
                      z ? "aria-tabs-datagrid__tab--selected" : "",
                      V ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: S.label }),
                      Y.tabLoadingStates[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      Y.tabErrors[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  S.id
                );
              })
            }
          ),
          L && ve && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: le,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: B,
              children: L
            }
          )
        ] }),
        o.map((S, P) => {
          const z = P === Y.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${S.id}`,
              "aria-labelledby": `tab-${S.id}`,
              tabIndex: 0,
              hidden: !z,
              ref: (V) => {
                fe.current[P] = V;
              },
              className: `aria-tabs-datagrid__panel ${S.className || ""}`,
              "data-tab-panel": P,
              children: z && (() => {
                const V = S.data.some(
                  (J) => "ews_data" in J
                ) ? se(S.data, Y.filters) : S.data, Z = je(() => {
                  const J = Y.sortConfig;
                  return !J || J.length === 0 ? V : [...V].sort((ue, de) => {
                    for (const { key: xe, direction: we } of J) {
                      let he = ue[xe], Te = de[xe];
                      const Pe = S.columns.find(
                        (He) => He.key === xe
                      );
                      if (Pe?.tableRenderer ? (he = Pe.tableRenderer(ue), Te = Pe.tableRenderer(de)) : Pe?.render && (he = Pe.render(ue), Te = Pe.render(de)), he == null && Te == null) continue;
                      if (he == null) return 1;
                      if (Te == null) return -1;
                      let We = 0;
                      if (typeof he == "number" && typeof Te == "number" ? We = he - Te : typeof he == "boolean" && typeof Te == "boolean" ? We = he === Te ? 0 : he ? 1 : -1 : We = String(he).localeCompare(
                        String(Te),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), We !== 0)
                        return we === "asc" ? We : -We;
                    }
                    return 0;
                  });
                }, [V, Y.sortConfig, S.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": S.ariaLabel,
                    "aria-describedby": S.ariaDescription ? `panel-${S.id}-description` : void 0,
                    children: [
                      S.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${S.id}-description`,
                          children: S.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: S.columns.map((J, ue) => {
                        const de = Y.sortConfig?.find(
                          (he) => he.key === J.key
                        ), xe = !!de, we = I.focusArea === "headers" && I.focusedHeaderIndex === ue;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${we ? "sortable-header--focused" : ""} ${xe ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: we ? 0 : -1,
                            onClick: () => ne(P, J.key),
                            onKeyDown: (he) => ie(he, ue),
                            "aria-sort": xe ? de?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: J.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${xe ? `sort-indicator--${de?.direction}` : ""}`,
                                  children: [
                                    Y.sortConfig && Y.sortConfig.length > 0 && Y.sortConfig.findIndex(
                                      (he) => he.key === J.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${Y.sortConfig.findIndex((he) => he.key === J.key) + 1}`,
                                        "data-priority": Y.sortConfig.findIndex(
                                          (he) => he.key === J.key
                                        ) + 1,
                                        title: `Sort priority: ${Y.sortConfig.findIndex((he) => he.key === J.key) + 1}`,
                                        children: Y.sortConfig.findIndex(
                                          (he) => he.key === J.key
                                        ) + 1
                                      }
                                    ),
                                    xe && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${de?.direction}`,
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
                          J.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: Z.map((J, ue) => {
                        const de = Y.globalSelectedRowData && ee(Y.globalSelectedRowData, J), xe = I.focusArea === "cells" && I.focusedRowIndex === ue;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${de ? "data-row--selected" : ""} ${xe ? "data-row--focused" : ""}`,
                            "aria-selected": de,
                            children: S.columns.map((we, he) => {
                              const Te = J[we.key];
                              let Pe;
                              we.tableRenderer ? Pe = we.tableRenderer(J) : we.render ? Pe = we.render(J) : Pe = Te;
                              const We = I.focusArea === "cells" && I.focusedRowIndex === ue && I.focusedColumnIndex === he, He = () => {
                                if (we.customRenderer) {
                                  const tt = we.customRenderer(
                                    Te,
                                    J
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: tt
                                    }
                                  );
                                }
                                return typeof Te == "boolean" && Pe === Te ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  K(Te),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Te ? "Yes" : "No" })
                                ] }) : bt.isValidElement(Pe) || typeof Pe != "object" ? Pe ?? "" : Pe;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${We ? "data-cell--focused" : ""}`,
                                  tabIndex: We ? 0 : -1,
                                  onClick: () => {
                                    const Ye = Y.globalSelectedRowData && ee(
                                      Y.globalSelectedRowData,
                                      J
                                    ) ? null : J;
                                    R({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Ye
                                    });
                                  },
                                  onKeyDown: (tt) => U(tt, ue, he),
                                  children: He()
                                },
                                we.key
                              );
                            })
                          },
                          ue
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            S.id
          );
        })
      ]
    }
  );
}), yr = {
  asc: "↑",
  desc: "↓"
}, Gp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function za(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Vp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Yp(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Zp(e, t) {
  const n = t.find((o) => o.id === e), a = Vp(t);
  return n ? n.priority < a : !1;
}
const zy = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: l = !0,
  disabled: i = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = je(() => Gp(e), [e]), f = me((C) => {
    if (i) return;
    const L = e.map(
      (D) => D.id === C ? { ...D, direction: D.direction === "asc" ? "desc" : "asc" } : D
    );
    t(L);
  }, [e, t, i]), h = me((C) => {
    if (i) return;
    const L = e.findIndex((x) => x.id === C);
    if (L <= 0) return;
    const D = [...e];
    [D[L], D[L - 1]] = [D[L - 1], D[L]], t(za(D));
  }, [e, t, i]), p = me((C) => {
    if (i) return;
    const L = e.findIndex((x) => x.id === C);
    if (L >= e.length - 1 || L === -1) return;
    const D = [...e];
    [D[L], D[L + 1]] = [D[L + 1], D[L]], t(za(D));
  }, [e, t, i]), y = me((C) => {
    if (i) return;
    const L = e.filter((D) => D.id !== C);
    t(za(L));
  }, [e, t, i]), g = me(() => {
    i || t([]);
  }, [t, i]), m = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const C = u.map((L, D) => {
      const x = L.direction === "asc" ? "ascending" : "descending";
      return `${D + 1}. ${L.label} (${x})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const L = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${L}`;
    }
  }, A = je(() => {
    const C = ["sort-description"];
    return l && C.push("sort-help"), d && C.push(d), C.join(" ");
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
        "aria-describedby": A,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((C) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                Ve,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => y(C.id),
                  disabled: i,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: C.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: C.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(C.id),
                        disabled: i,
                        "aria-label": `Toggle sort direction for ${C.label}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: C.direction === "asc" ? yr.asc : yr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(C.id),
                          disabled: i || !Yp(C.id, e),
                          "aria-label": `Move ${C.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(C.id),
                          disabled: i || !Zp(C.id, e),
                          "aria-label": `Move ${C.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            C.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      mt,
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
      yr.asc,
      "/",
      yr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Ko = (e, t) => t.map((n) => ({
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
})), so = [
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
], Jp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), qp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Xp = (e) => {
  if (typeof e == "boolean") {
    const n = so.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = so.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Qp = (e) => `${e.name}-${e.bed_name}`, Kp = () => ({
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
}), Oy = (e) => {
  const t = Kp();
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
}, eh = {
  dataComparator: Jp,
  filterFunction: qp,
  booleanRenderer: Xp,
  getDataId: Qp
};
function Zs(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: l = [],
    getPriority: i,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((L) => L.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => o.filter((D) => !l.includes(D) && e[D]).slice(0, 3).map((D) => {
    const x = t.find((b) => b.key === D), N = e[D], M = d[D] ? d[D](N, e) : x?.cardRenderer ? x.cardRenderer(e) : x?.render ? x.render(e) : N;
    return `${x?.label || D}: ${M}`;
  }).join(" • "), y = () => s.length === 0 ? null : s.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const D = e[L.fieldKey], x = L.render ? L.render(D, e) : D;
    return `<span class="nhsuk-tag ${th(L, D)}">${x}</span>`;
  }).join(""), g = () => c ? c(e) : i?.(e) === "high" ? "primary" : "default", m = y(), A = p(), C = m ? `${A}${m ? `<div class="adaptive-card__badges">${m}</div>` : ""}` : A;
  return {
    variant: g(),
    heading: String(h),
    descriptionHtml: C,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${h}`
  };
}
function th(e, t) {
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
const nh = {
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
}, fl = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const l = e.name, i = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
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
            Ve,
            {
              color: ah(gl(u)),
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
            mt,
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
            mt,
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
            mt,
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
}, pl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Ve,
        {
          color: oh(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        Ve,
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
      mt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      mt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), hl = ({
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
        Ve,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        Ve,
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
      mt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      mt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), ml = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, l = e.ews_data?.respiratory_rate_bpm, i = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${rh(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            Ve,
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
            mt,
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
            mt,
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
function gl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function rh(e) {
  return gl(e);
}
function ah(e) {
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
function oh(e) {
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
const sh = [
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
], xl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", ih = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, lh = (e) => xl(e) === "high" || e.status === "urgent" ? "primary" : "default", ch = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, dh = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: sh,
  hiddenFields: [],
  getPriority: xl,
  getStatus: ih,
  getVariant: lh,
  fieldRenderers: ch,
  classPrefix: "adaptive-card--healthcare"
}, uh = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      fl,
      {
        data: e,
        columns: t,
        priority: a,
        status: s,
        onSelect: (l) => console.log("Patient selected:", l),
        onAction: (l, i) => console.log("Patient action:", l, i)
      }
    );
  },
  appointment: (e, t, n) => {
    const a = n.getStatus?.(e) || "pending", o = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ r.jsx(
      pl,
      {
        data: e,
        columns: t,
        status: o,
        onSelect: (s) => console.log("Appointment selected:", s),
        onAction: (s, l) => console.log("Appointment action:", s, l)
      }
    );
  },
  medication: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      hl,
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
      ml,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, fh = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Js = {
  name: "healthcare",
  defaultCardConfig: dh,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: uh,
  fieldTypes: fh
};
function qs(e) {
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
function Xs(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function ph(e, t) {
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
      const { newLength: s } = t.payload, l = new Array(s).fill(!1), i = new Array(s).fill(null), c = new Array(s).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, s); d++)
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
function hh(e, t) {
  const [n, a] = ze("cards");
  return Ge(() => {
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
function mh(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function gh(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...nh, ...n };
  if (a && a.cardTemplates) {
    const s = mh(e);
    if (s && a.cardTemplates[s]) {
      const l = a.cardTemplates[s](e, t, o);
      if (l)
        return {
          variant: "default",
          children: l
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Zs(e, t, o);
}
const Uy = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  topActions: s,
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
  disabled: A = !1,
  className: C,
  ...L
}) => {
  const D = hh(e, t), x = f !== void 0, N = f ?? 0, M = je(() => {
    if (d.some(
      (v) => v.data && v.data.length > 0 && Xs(v.data)
    )) {
      const v = qs(n);
      return {
        ...Js.defaultCardConfig,
        ...v
      };
    } else
      return qs(n);
  }, [n, d]), _ = je(() => d.some(
    (v) => v.data && v.data.length > 0 && Xs(v.data)
  ) ? Js : void 0, [d]), b = je(() => ({
    selectedIndex: N,
    tabLoadingStates: new Array(d.length).fill(!1),
    tabErrors: new Array(d.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(d.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [N, d.length]), [w, k] = Mi(ph, b), j = Oe([]), F = Oe([]), E = Oe([]), $ = Oe(null), [I, H] = ze({
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
  }), oe = me((G) => {
    if (!G.current)
      return { columns: 1, rows: 0 };
    const v = G.current, T = v.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (T.length === 0)
      return { columns: 1, rows: 0 };
    const B = v.offsetWidth, P = T[0].offsetWidth, z = Math.floor(B / P) || 1, V = Math.ceil(T.length / z);
    return { columns: z, rows: V };
  }, []), Y = me((G, v) => ({
    row: Math.floor(G / v),
    col: G % v
  }), []), R = me((G, v, T) => G * T + v, []), ee = me((G, v, T, B) => {
    const { row: S, col: P } = Y(G, B);
    let z = S, V = P;
    switch (v) {
      case "up":
        z = Math.max(0, S - 1);
        break;
      case "down":
        z = Math.min(Math.floor((T - 1) / B), S + 1);
        break;
      case "left":
        V = Math.max(0, P - 1);
        break;
      case "right":
        V = Math.min(B - 1, P + 1);
        break;
    }
    const Z = R(z, V, B);
    return Math.min(Z, T - 1);
  }, [Y, R]);
  Ge(() => {
    I.isCardNavigationActive && I.focusedCardElementIndex >= 0 && I.cardElements.length > 0 && setTimeout(() => {
      const G = I.cardElements[I.focusedCardElementIndex];
      G && (G.element.focus(), G.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [I.isCardNavigationActive, I.focusedCardElementIndex, I.cardElements.length]), Ge(() => {
    const G = () => {
      if (D === "cards" && $.current) {
        const { columns: B, rows: S } = oe($);
        H((P) => ({
          ...P,
          gridColumns: B,
          gridRows: S
        }));
      }
    }, v = setTimeout(G, 200), T = () => {
      setTimeout(G, 100);
    };
    return window.addEventListener("resize", T), () => {
      clearTimeout(v), window.removeEventListener("resize", T);
    };
  }, [D, d, oe]), Ge(() => {
    const G = w.tabLoadingStates.length, v = d.length;
    G !== v && k({ type: "ADJUST_ARRAYS", payload: { newLength: v } });
  }, [d.length, w.tabLoadingStates.length]), Ge(() => {
    x && f !== w.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: f });
  }, [x, f, w.selectedIndex]);
  const W = me((G) => {
    G >= 0 && G < d.length && !d[G].disabled && (k({ type: "SET_SELECTED_INDEX", payload: G }), h?.(G));
  }, [d, h]), X = me((G) => {
    console.log("Card selected:", G), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: G
    });
  }, []), q = me((G) => {
    const v = F.current[G];
    v && (v.focus(), v.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), Q = me((G) => {
    const v = F.current[G];
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
    ].join(", "), B = v.querySelectorAll(T);
    return Array.from(B).map((S, P) => ({
      id: S.id || `card-${G}-element-${P}`,
      element: S,
      label: S.getAttribute("aria-label") || S.textContent?.trim() || S.getAttribute("title") || `Element ${P + 1}`,
      type: S.tagName.toLowerCase() === "button" ? "button" : S.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(S.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), fe = Oe(null), ne = me((G) => {
    const v = fe.current;
    if (!v) return;
    const T = document.createElement("div");
    T.setAttribute("aria-live", "polite"), T.setAttribute("aria-atomic", "true"), T.className = "sr-only", T.textContent = G, v.appendChild(T), setTimeout(() => {
      v.contains(T) && v.removeChild(T);
    }, 1e3);
  }, []), re = me((G) => {
    const v = G.filter((B) => B.sortable !== !1), T = [
      { value: "", label: "Sort by..." }
    ];
    return v.forEach((B) => {
      const S = B.label || B.key;
      B.key === "name" ? T.push(
        { value: `${B.key}-asc`, label: `${S} (A-Z)` },
        { value: `${B.key}-desc`, label: `${S} (Z-A)` }
      ) : B.key === "ews_score" || B.key.includes("score") ? T.push(
        { value: `${B.key}-desc`, label: `${S} (High-Low)` },
        { value: `${B.key}-asc`, label: `${S} (Low-High)` }
      ) : B.key === "age" || B.key.includes("date") || B.key.includes("time") ? T.push(
        { value: `${B.key}-desc`, label: `${S} (Oldest-Youngest)` },
        { value: `${B.key}-asc`, label: `${S} (Youngest-Oldest)` }
      ) : T.push(
        { value: `${B.key}-asc`, label: `${S} (A-Z)` },
        { value: `${B.key}-desc`, label: `${S} (Z-A)` }
      );
    }), T;
  }, []), K = me((G, v) => v ? [...G].sort((T, B) => {
    const S = T[v.key], P = B[v.key];
    if (S == null && P == null) return 0;
    if (S == null) return 1;
    if (P == null) return -1;
    const z = Number(S), V = Number(P);
    if (!isNaN(z) && !isNaN(V))
      return v.direction === "asc" ? z - V : V - z;
    const Z = String(S).toLowerCase(), J = String(P).toLowerCase(), ue = Z.localeCompare(J);
    return v.direction === "asc" ? ue : -ue;
  }) : G, []), te = me((G) => {
    if (!G) {
      H((Z) => ({ ...Z, cardSortConfig: null })), ne("Card sorting cleared");
      return;
    }
    const [v, T] = G.split("-"), B = { key: v, direction: T };
    H((Z) => ({ ...Z, cardSortConfig: B }));
    const z = d[w.selectedIndex]?.columns.find((Z) => Z.key === v)?.label || v;
    ne(`Cards sorted by ${z} in ${T === "asc" ? "ascending" : "descending"} order`);
  }, [d, w.selectedIndex, ne]), ie = me((G) => {
    const B = d[w.selectedIndex]?.columns.find((P) => P.key === G.key)?.label || G.key, S = G.direction === "asc" ? "ascending" : "descending";
    return `${B} (${S})`;
  }, [d, w.selectedIndex]), U = me((G) => {
    const v = d[w.selectedIndex];
    if (o) {
      const T = w.sortConfig;
      return !T || T.length === 0 ? G : [...G].sort((B, S) => {
        for (const { key: P, direction: z } of T) {
          let V = B[P], Z = S[P];
          const J = v?.columns.find((Te) => Te.key === P);
          if (J?.cardRenderer ? (V = J.cardRenderer(B), Z = J.cardRenderer(S)) : J?.render && (V = J.render(B), Z = J.render(S)), V == null && Z == null) continue;
          if (V == null) return z === "asc" ? -1 : 1;
          if (Z == null) return z === "asc" ? 1 : -1;
          const ue = Number(V), de = Number(Z);
          if (!isNaN(ue) && !isNaN(de)) {
            const Te = ue - de;
            if (Te !== 0) return z === "asc" ? Te : -Te;
            continue;
          }
          const xe = String(V).toLowerCase(), we = String(Z).toLowerCase(), he = xe.localeCompare(we);
          if (he !== 0) return z === "asc" ? he : -he;
        }
        return 0;
      });
    } else
      return K(G, I.cardSortConfig);
  }, [o, w.sortConfig, I.cardSortConfig, K, d, w.selectedIndex]), se = me((G, v) => {
    const T = Q(G), B = T[v];
    if (B) {
      B.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const S = `Focused on ${B.label}, ${B.type} ${v + 1} of ${T.length} within card`;
      ne(S);
    }
  }, [Q, ne]), ae = me((G) => {
    j.current[G]?.focus();
  }, []), ce = me(() => {
    const G = E.current[0];
    if (!G) return [];
    const v = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), T = G.querySelectorAll(v);
    return Array.from(T);
  }, []), le = me((G) => {
    if (G === 0) {
      const v = E.current[0], T = v?.querySelector(".sort-controls-row");
      if (T) {
        T.setAttribute("tabindex", "-1"), T.focus();
        const S = `Sort controls group with ${ce().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ne(S);
      } else v && v.focus();
    } else {
      const v = ce(), T = G - 1, B = v[T];
      if (B) {
        B.focus();
        const S = B.tagName.toLowerCase() === "select", P = B.tagName.toLowerCase() === "button", z = S ? "dropdown" : P ? "button" : "control", V = S ? ". Use Space key to open dropdown" : "", Z = `${z} ${T + 1} of ${v.length}${V}`;
        ne(Z);
      }
    }
  }, [ce, ne]), ve = me((G, v) => {
    const { key: T } = G, B = d[w.selectedIndex], S = B?.data.length || 0;
    if (T === "ArrowLeft" && G.shiftKey) {
      G.preventDefault(), G.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (T === "ArrowRight" && G.shiftKey) {
      G.preventDefault(), G.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!I.isCardNavigationActive) {
      switch (T) {
        case "ArrowUp":
          if (G.preventDefault(), v === 0)
            H((Z) => ({ ...Z, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), le(0);
          else {
            const Z = ee(v, "up", S, I.gridColumns);
            Z !== v && (H((J) => ({ ...J, focusedCardIndex: Z })), q(Z), ne(`Moved to card ${Z + 1} of ${S}`));
          }
          break;
        case "ArrowDown":
          G.preventDefault();
          const P = ee(v, "down", S, I.gridColumns);
          P !== v && (H((Z) => ({ ...Z, focusedCardIndex: P })), q(P), ne(`Moved to card ${P + 1} of ${S}`));
          break;
        case "ArrowLeft":
          G.preventDefault();
          const z = ee(v, "left", S, I.gridColumns);
          z !== v ? (H((Z) => ({ ...Z, focusedCardIndex: z })), q(z), ne(`Moved to card ${z + 1} of ${S}`)) : w.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: w.selectedIndex - 1 }), H((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => ae(w.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          G.preventDefault();
          const V = ee(v, "right", S, I.gridColumns);
          V !== v ? (H((Z) => ({ ...Z, focusedCardIndex: V })), q(V), ne(`Moved to card ${V + 1} of ${S}`)) : w.selectedIndex < d.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: w.selectedIndex + 1 }), H((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => ae(w.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (B?.data[v]) {
            G.preventDefault(), H((J) => ({
              ...J,
              selectedCardIndex: v
            }));
            const Z = Q(v);
            Z.length > 0 ? (H((J) => ({
              ...J,
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
          if (B?.data[v]) {
            G.preventDefault(), H((J) => ({
              ...J,
              selectedCardIndex: J.selectedCardIndex === v ? -1 : v
            }));
            const Z = I.selectedCardIndex === v;
            ne(`Card ${v + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (T) {
      case "ArrowUp":
      case "ArrowLeft":
        G.preventDefault();
        const P = Math.max(0, I.focusedCardElementIndex - 1);
        H((J) => ({ ...J, focusedCardElementIndex: P })), se(v, P);
        break;
      case "ArrowDown":
      case "ArrowRight":
        G.preventDefault();
        const z = Math.min(I.cardElements.length - 1, I.focusedCardElementIndex + 1);
        H((J) => ({ ...J, focusedCardElementIndex: z })), se(v, z);
        break;
      case "Enter":
        G.preventDefault();
        const V = I.cardElements[I.focusedCardElementIndex];
        V && (V.element.click(), ne(`Activated ${V.label}`));
        break;
      case " ":
        G.preventDefault();
        const Z = I.cardElements[I.focusedCardElementIndex];
        if (Z) {
          const J = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(J), ne(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        G.preventDefault(), H((J) => ({
          ...J,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => q(v), 0), ne("Exited card navigation, returned to card level");
        break;
      case "Home":
        G.preventDefault(), I.cardElements.length > 0 && (H((J) => ({ ...J, focusedCardElementIndex: 0 })), se(v, 0));
        break;
      case "End":
        if (G.preventDefault(), I.cardElements.length > 0) {
          const J = I.cardElements.length - 1;
          H((ue) => ({ ...ue, focusedCardElementIndex: J })), se(v, J);
        }
        break;
    }
  }, [I, w.selectedIndex, d, X, q, ae, H, Q, se, ne]), De = me((G) => {
    const v = j.current[G], T = v?.parentElement;
    if (!v || !T) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const B = v.getBoundingClientRect(), S = T.getBoundingClientRect();
    B.left >= S.left && B.right <= S.right || (console.log("Tab not visible, scrolling into view (mobile)"), v.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Ce = me((G, v) => {
    if (D !== "cards")
      return;
    const { key: T } = G;
    switch (T) {
      case "ArrowLeft":
        G.preventDefault();
        const B = v > 0 ? v - 1 : d.length - 1;
        W(B), H((V) => ({ ...V, focusedTabIndex: B })), j.current[B]?.focus(), De(B);
        break;
      case "ArrowRight":
        G.preventDefault();
        const S = v < d.length - 1 ? v + 1 : 0;
        W(S), H((V) => ({ ...V, focusedTabIndex: S })), j.current[S]?.focus(), De(S);
        break;
      case "ArrowDown":
        G.preventDefault();
        const P = d[w.selectedIndex];
        P && P.columns && P.columns.length > 0 ? (H((V) => ({
          ...V,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), le(0)) : (H((V) => ({
          ...V,
          focusArea: "cards",
          focusedCardIndex: 0
        })), q(0));
        break;
      case "Home":
        G.preventDefault(), W(0), H((V) => ({ ...V, focusedTabIndex: 0 })), j.current[0]?.focus(), De(0);
        break;
      case "End":
        G.preventDefault();
        const z = d.length - 1;
        W(z), H((V) => ({ ...V, focusedTabIndex: z })), j.current[z]?.focus(), De(z);
        break;
      case "Enter":
      case " ":
        G.preventDefault(), W(v);
        break;
    }
  }, [d.length, W, D, q, H, De]), ge = me((G, v) => {
    if (D !== "cards")
      return;
    const { key: T } = G, B = d[w.selectedIndex];
    if (v === 0 && !I.isSortControlsActive) {
      switch (T) {
        case "ArrowUp":
          G.preventDefault(), H((P) => ({
            ...P,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), ae(w.selectedIndex);
          break;
        case "ArrowDown":
          G.preventDefault(), B?.data && B.data.length > 0 && (H((P) => ({
            ...P,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), q(0));
          break;
        case "Enter":
        case " ":
          G.preventDefault();
          const S = ce();
          if (S.length > 0) {
            H((z) => ({
              ...z,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), le(1);
            const P = `Entered sort controls navigation mode. ${S.length} controls available. Use arrow keys to navigate between controls.`;
            ne(P);
          }
          break;
        case "Escape":
          G.preventDefault(), H((P) => ({
            ...P,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), ae(w.selectedIndex);
          break;
      }
      return;
    }
    if (I.isSortControlsActive) {
      const P = ce().length;
      switch (T) {
        case "ArrowLeft":
          G.preventDefault();
          const z = I.focusedSortControlIndex > 1 ? I.focusedSortControlIndex - 1 : P;
          H((Z) => ({ ...Z, focusedSortControlIndex: z })), le(z);
          break;
        case "ArrowRight":
          G.preventDefault();
          const V = I.focusedSortControlIndex < P ? I.focusedSortControlIndex + 1 : 1;
          H((Z) => ({ ...Z, focusedSortControlIndex: V })), le(V);
          break;
        case "ArrowDown":
          if (G.preventDefault(), I.isSortControlsActive) {
            const Z = I.focusedSortControlIndex < P ? I.focusedSortControlIndex + 1 : 1;
            H((J) => ({ ...J, focusedSortControlIndex: Z })), le(Z);
          } else
            B?.data && B.data.length > 0 && (H((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), q(0));
          break;
        case "ArrowUp":
          G.preventDefault(), H((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), le(0);
          break;
        case "Escape":
          G.preventDefault(), H((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), le(0);
          break;
      }
    }
  }, [D, d, w.selectedIndex, I.isSortControlsActive, I.focusedSortControlIndex, le, ae, q, H, ne]);
  if (D === "cards") {
    const G = d[w.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${C || ""}`, children: [
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
              const B = T === w.selectedIndex, S = v.disabled || A;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${v.id}`,
                  "aria-controls": `panel-${v.id}`,
                  "aria-selected": B,
                  "aria-disabled": S,
                  tabIndex: B ? 0 : -1,
                  ref: (P) => {
                    j.current[T] = P;
                  },
                  onClick: () => W(T),
                  onKeyDown: (P) => Ce(P, T),
                  disabled: S,
                  className: [
                    "aria-tabs-datagrid__tab",
                    B ? "aria-tabs-datagrid__tab--selected" : "",
                    S ? "aria-tabs-datagrid__tab--disabled" : ""
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
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      G && G.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          ul,
          {
            sortConfig: w.sortConfig || [],
            columns: G.columns.map((v) => ({ key: v.key, label: v.label })),
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
            tabIndex: I.focusArea === "sort-controls" ? 0 : -1,
            ref: (v) => {
              E.current[0] = v;
            },
            onKeyDown: (v) => ge(v, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${G.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  Cr,
                  {
                    id: `card-sort-${G.id}`,
                    name: `card-sort-${G.id}`,
                    value: I.cardSortConfig ? `${I.cardSortConfig.key}-${I.cardSortConfig.direction}` : "",
                    onChange: (v) => te(v.target.value),
                    className: "sort-select",
                    children: re(G.columns).map((v) => /* @__PURE__ */ r.jsx("option", { value: v.value, children: v.label }, v.value))
                  }
                )
              ] }),
              I.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ie(I.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  mt,
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
          ref: $,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${G?.label || "Data"} cards in ${I.gridRows} rows and ${I.gridColumns} columns`,
          "aria-rowcount": I.gridRows,
          "aria-colcount": I.gridColumns,
          id: `panel-${G?.id}`,
          "aria-labelledby": `tab-${G?.id}`,
          children: U(G?.data || []).map((v, T) => {
            const B = I.selectedCardIndex === T, S = I.focusedCardIndex === T && I.focusArea === "cards", P = I.focusedCardIndex === T && I.focusArea === "card" && I.isCardNavigationActive, z = T === 0 && I.focusArea !== "cards", V = S || z, Z = Y(T, I.gridColumns);
            if (n.cardTemplate) {
              const de = n.cardTemplate(v, G.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": Z.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (xe) => {
                        F.current[T] = xe;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        B ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        S ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        P ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": Z.col + 1,
                      "aria-selected": B,
                      "aria-expanded": P,
                      "aria-description": P ? `Card navigation active. ${I.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: V ? 0 : -1,
                      onClick: () => {
                        H((xe) => ({
                          ...xe,
                          selectedCardIndex: xe.selectedCardIndex === T ? -1 : T
                        })), X(v);
                      },
                      onKeyDown: (xe) => ve(xe, T),
                      onFocus: () => {
                        H((xe) => xe.isCardNavigationActive ? xe : xe.focusedCardIndex !== T || xe.focusArea !== "cards" ? {
                          ...xe,
                          focusedCardIndex: T,
                          focusArea: "cards"
                        } : xe);
                      },
                      children: de
                    }
                  )
                },
                `card-${T}`
              );
            }
            const J = gh(v, G.columns, M, _), ue = [
              J.className || "",
              B ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              S ? "aria-tabs-datagrid-adaptive__card--focused" : "",
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
                      B ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      S ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      P ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": Z.col + 1,
                    "aria-selected": B,
                    "aria-expanded": P,
                    onKeyDown: (de) => {
                      de.key === "Enter" && (de.preventDefault(), H((xe) => ({
                        ...xe,
                        selectedCardIndex: T
                      }))), ve(de, T);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      ll,
                      {
                        ...J,
                        ref: (de) => {
                          F.current[T] = de;
                        },
                        className: ue,
                        "aria-label": `${J["aria-label"] || J.heading}. ${P ? `Card navigation active with ${I.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: V ? 0 : -1,
                        onClick: () => {
                          H((de) => ({
                            ...de,
                            selectedCardIndex: de.selectedCardIndex === T ? -1 : T
                          })), X(v);
                        },
                        onKeyDown: (de) => ve(de, T),
                        onFocus: () => {
                          I.isCardNavigationActive || H((de) => de.focusedCardIndex !== T || de.focusArea !== "cards" ? {
                            ...de,
                            focusedCardIndex: T,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : de);
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
          ref: fe,
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
  return D === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${C || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      oo,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: y,
        orientation: g,
        id: m,
        disabled: A,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: i,
        forceActionsAbove: c,
        ...L
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: l })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${C || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      oo,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: y,
        orientation: g,
        id: m,
        disabled: A,
        selectedIndex: f,
        onTabChange: h,
        actions: i,
        forceActionsAbove: c,
        ...L
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: l })
  ] });
}, bl = (e) => {
  const t = so.find((n) => n.value === e);
  return t ? t.icon : null;
}, xh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => bl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, bh = (e) => Ko(e, [
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
]), yh = {
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
  booleanRenderer: (e) => bl(e),
  getDataId: (e) => `financial-${e.id}`
}, vh = (e) => Ko(e, [
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
]), wh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: xh,
    createTabs: bh
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: yh,
    createTabs: vh
  }
}, Qs = (e, t) => {
  const n = wh[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, yl = [
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
], Sh = [
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
], _h = [
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
], kh = [
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
], Ks = [
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
], ei = [
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
], ti = [
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
], Ch = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Nh = () => [
  {
    id: "patients",
    label: "Patients",
    data: yl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      fl,
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
    data: Sh,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      pl,
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
    data: _h,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      hl,
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
    data: kh,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ml,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], jh = () => {
  const [e, t] = ze("healthcare"), n = je(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: eh,
      tabPanels: Nh(),
      data: yl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Qs("ecommerce", Ks),
      data: Ks
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Qs("financial", ei),
      data: ei
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Ch,
      tabPanels: Ko(ti, [
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
      data: ti
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
        mt,
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
      oo,
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
}, Wy = jh, vl = (e) => /* @__PURE__ */ r.jsx(Ei, { ...e }), Gy = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = bn.TwoThirds,
  mainWrapperSize: o,
  skipLinkProps: s,
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
    /* @__PURE__ */ r.jsx(il, { ...s }),
    /* @__PURE__ */ r.jsx(zi, { ...m }),
    /* @__PURE__ */ r.jsx(vl, { className: y, ...g, children: /* @__PURE__ */ r.jsx(Pi, { size: o, children: /* @__PURE__ */ r.jsx(an, { children: /* @__PURE__ */ r.jsxs(Xn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Jt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Oi, { ...i })
  ] });
}, Vy = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = bn.TwoThirds,
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
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
    /* @__PURE__ */ r.jsx(il, { ...s }),
    /* @__PURE__ */ r.jsx(zi, { ...y }),
    /* @__PURE__ */ r.jsxs(vl, { className: h, ...p, children: [
      c && /* @__PURE__ */ r.jsx(Xa, { ...c }),
      /* @__PURE__ */ r.jsx(Pi, { size: o, children: /* @__PURE__ */ r.jsx(an, { children: /* @__PURE__ */ r.jsxs(Xn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Jt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Oi, { ...i })
  ] });
}, wl = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...l
}) => {
  const i = ye("nhsuk-back-link", a), c = ye("nhsuk-back-link__link"), d = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: i, children: o === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: s, ...l, children: d() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...l, children: d() }) });
};
wl.displayName = "ForwardLink";
const jn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ni() {
  return typeof window > "u" ? jn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Sl() {
  const [e, t] = O.useState(ni());
  O.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ni());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = O.useCallback((s) => e >= jn[s], [e]), a = O.useCallback((s) => e < jn[s], [e]), o = O.useCallback((s, l) => e >= jn[s] && e < jn[l], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: jn
  };
}
function Yy(e) {
  const { width: t, values: n } = Sl();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const l = n[s];
    t >= l && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Mh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = O.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [l, i] = O.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return O.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(n, String(o)) : c.delete(n), c.set(a, l ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [o, l, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: l, setDrilledIn: i };
}
const Ih = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), Dh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
);
function Th(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
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
    getId: m = (pe) => pe.id,
    orientation: A = "vertical",
    autoEnableThirdColumn: C = !0,
    onDrillChange: L,
    navigationInstructions: D = "Use arrow keys to navigate, Enter to open.",
    initialFocus: x = "first",
    skipFocusOnSelect: N = !1,
    skipAnnouncements: M = !1,
    onFocusChange: _,
    syncUrl: b = !1,
    urlParamSelected: w = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: j = 0,
    lazySecondary: F = !1,
    navFooter: E,
    collapsibleNav: $ = !1,
    navInitiallyCollapsed: I = !1,
    onNavCollapseChange: H,
    collapseToggleLabelShow: oe = "Show navigation",
    collapseToggleLabelHide: Y = "Hide navigation",
    collapseToggleIconShow: R,
    collapseToggleIconHide: ee,
    persistNavCollapsed: W,
    navCollapsedStorageKey: X = "nsvCollapsed",
    navCollapsedUrlParam: q = "nsvCollapsed",
    autoContentHeader: Q,
    contentHeaderLevel: fe = 2,
    renderContentHeader: ne,
    contentSubheader: re,
    secondarySubheader: K
  } = e, { up: te } = Sl(), [ie, U] = O.useState(!1);
  O.useEffect(() => {
    U(!0);
  }, []);
  const se = ie && te("medium"), ae = ie && te("xlarge");
  let ce;
  c ? ce = c : se ? ce = "two-column" : ce = "list", !c && C && i && ae && (ce = "three-column");
  const le = Mh({
    enabled: b,
    paramSelected: w,
    paramDrill: k
  }), [ve, De] = O.useState(
    () => le.selectedId !== void 0 ? le.selectedId : a
  ), Ce = n !== void 0 ? n : ve, ge = t.find((pe) => m(pe) === Ce), [G, v] = O.useState(
    void 0
  );
  O.useEffect(() => {
    if (Ce === void 0) return;
    v(Ce);
    const pe = setTimeout(() => v(void 0), 220);
    return () => clearTimeout(pe);
  }, [Ce]);
  const T = O.useRef(null), B = O.useRef(null), S = O.useRef(null), P = O.useRef(null), [z, V] = O.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [Z, J] = O.useState(() => "nav"), [ue, de] = O.useState(0), xe = () => [
    P.current,
    B.current,
    S.current
  ].filter(Boolean), we = (pe) => {
    const ke = xe(), be = Math.max(0, Math.min(pe, ke.length - 1));
    ke[be]?.focus(), de(be);
  }, he = O.useCallback(
    (pe) => pe ? Array.from(pe.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (be) => !be.hasAttribute("disabled") && be.tabIndex !== -1
    ) : [],
    []
  ), Te = O.useCallback(
    (pe) => {
      const ke = he(B.current);
      if (!ke.length) {
        B.current?.focus();
        return;
      }
      const be = Math.max(0, Math.min(pe, ke.length - 1)), $e = ke[be];
      $e.focus(), setTimeout(() => {
        document.activeElement !== $e && ($e.focus(), setTimeout(() => {
          document.activeElement !== $e && $e.click();
        }, 10));
      }, 10), V((Ze) => ({ ...Ze, contentIndex: be }));
      const nt = (Ze) => {
        Ze.key === "Escape" && (Ze.preventDefault(), Ze.stopPropagation(), B.current?.focus(), $e.removeEventListener("keydown", nt));
      };
      ke.forEach((Ze) => {
        const Qe = Ze._escapeHandler;
        Qe && Ze.removeEventListener("keydown", Qe);
      }), $e._escapeHandler = nt, $e.addEventListener("keydown", nt);
    },
    [he]
  ), Pe = O.useCallback(
    (pe) => {
      const ke = he(S.current);
      if (!ke.length) {
        S.current?.focus();
        return;
      }
      const be = Math.max(0, Math.min(pe, ke.length - 1)), $e = ke[be];
      $e.focus(), setTimeout(() => {
        document.activeElement !== $e && ($e.focus(), setTimeout(() => {
          document.activeElement !== $e && $e.click();
        }, 10));
      }, 10), V((Ze) => ({ ...Ze, secondaryIndex: be }));
      const nt = (Ze) => {
        Ze.key === "Escape" && (Ze.preventDefault(), Ze.stopPropagation(), S.current?.focus(), $e.removeEventListener("keydown", nt));
      };
      ke.forEach((Ze) => {
        const Qe = Ze._escapeHandler;
        Qe && Ze.removeEventListener("keydown", Qe);
      }), $e._escapeHandler = nt, $e.addEventListener("keydown", nt);
    },
    [he]
  ), We = (pe) => {
    if (pe.defaultPrevented) return;
    const ke = pe.key, be = pe.target, $e = !!pt.current && pt.current.contains(be), nt = !!B.current && B.current.contains(be), Ze = !!S.current && S.current.contains(be), Qe = !!S.current, Cn = be === P.current || be === B.current || be === S.current, dn = He && (ce === "list" || ce === "cards"), hr = nt && !!be.closest(".nhs-navigation-split-view__header");
    if (Z === "containers" && Cn) {
      if (ke === "ArrowRight") {
        pe.preventDefault();
        const Be = xe(), Ke = Math.min(Be.length - 1, ue + 1);
        we(Ke);
        return;
      }
      if (ke === "ArrowLeft") {
        pe.preventDefault();
        const Be = Math.max(0, ue - 1);
        we(Be);
        return;
      }
      if (ke === "Home") {
        pe.preventDefault(), we(0);
        return;
      }
      if (ke === "End") {
        pe.preventDefault(), we(xe().length - 1);
        return;
      }
      if (ke === "Enter" || ke === " ") {
        if (pe.preventDefault(), be === P.current) {
          if (J("nav"), pt.current) {
            const Be = Array.from(
              pt.current.querySelectorAll("[data-nav-item]")
            );
            (Be[rt >= 0 ? rt : 0] || Be[0])?.focus();
          }
        } else be === B.current ? (J("content"), Te(z.contentIndex)) : be === S.current && (J("secondary"), Pe(z.secondaryIndex));
        return;
      }
      return;
    }
    if (ke === "Escape") {
      if (Z === "content" || Z === "secondary") {
        if (nt || Ze) {
          if (pe.preventDefault(), J("nav"), pt.current) {
            const Ke = Array.from(
              pt.current.querySelectorAll("[data-nav-item]")
            )[rt >= 0 ? rt : 0];
            setTimeout(() => Ke?.focus(), 10);
          }
        } else if ((be === B.current || be === S.current) && (pe.preventDefault(), J("nav"), pt.current)) {
          const Ke = Array.from(
            pt.current.querySelectorAll("[data-nav-item]")
          )[rt >= 0 ? rt : 0];
          setTimeout(() => Ke?.focus(), 10);
        }
      }
      return;
    }
    if (ke === "Enter" || ke === " ") {
      if (be.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (be === B.current && Z === "content") {
        pe.preventDefault(), pe.stopPropagation(), he(B.current).length > 0 && setTimeout(() => {
          Te(z.contentIndex);
        }, 50);
        return;
      }
      if (be === S.current && Z === "secondary") {
        pe.preventDefault(), pe.stopPropagation(), he(
          S.current
        ).length > 0 && setTimeout(() => {
          Pe(z.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (dn && hr && !Cn && (ke === "ArrowRight" || ke === "ArrowLeft")) {
      const Be = he(B.current).filter(
        (Ke) => Ke.closest(".nhs-navigation-split-view__header")
      );
      if (Be.length > 1) {
        const Ke = Be.indexOf(be);
        if (Ke >= 0) {
          const cs = (Ke + (ke === "ArrowRight" ? 1 : -1) + Be.length) % Be.length;
          pe.preventDefault(), Be[cs].focus();
          return;
        }
      }
    }
    if (ke === "ArrowRight") {
      if ($e || Z === "nav") {
        pe.preventDefault(), J("content"), setTimeout(() => B.current?.focus(), 10);
        return;
      }
      if (nt || Z === "content") {
        Qe && (pe.preventDefault(), J("secondary"), setTimeout(() => S.current?.focus(), 10));
        return;
      }
    }
    if (ke === "ArrowLeft") {
      if (Ze || Z === "secondary") {
        pe.preventDefault(), J("content"), setTimeout(() => B.current?.focus(), 10);
        return;
      }
      if (nt || Z === "content") {
        if (pe.preventDefault(), J("nav"), pt.current) {
          const Ke = Array.from(
            pt.current.querySelectorAll("[data-nav-item]")
          )[rt >= 0 ? rt : 0];
          setTimeout(() => Ke?.focus(), 10);
        }
        return;
      }
    }
    if (ke === "Home" && !$e && (pe.preventDefault(), J("nav"), pt.current)) {
      const Be = Array.from(
        pt.current.querySelectorAll("[data-nav-item]")
      ), Ke = Be[rt >= 0 ? rt : 0] || Be[0];
      setTimeout(() => Ke?.focus(), 10);
    }
    if (ke === "End") {
      const Be = Qe ? S.current : B.current;
      Be && !Be.contains(be) && (pe.preventDefault(), Qe ? (J("secondary"), setTimeout(() => S.current?.focus(), 10)) : (J("content"), setTimeout(() => B.current?.focus(), 10)));
    }
    if (ke === "ArrowDown" || ke === "ArrowUp") {
      if (be === B.current && ke === "ArrowDown") {
        pe.preventDefault(), he(B.current).length > 0 && Te(0);
        return;
      }
      if (be === S.current && ke === "ArrowDown") {
        pe.preventDefault(), he(
          S.current
        ).length > 0 && Pe(0);
        return;
      }
      if (nt) {
        const Be = he(B.current);
        if (Be.length) {
          pe.preventDefault();
          const Ke = ke === "ArrowDown" ? 1 : -1, It = (z.contentIndex + Ke + Be.length) % Be.length;
          Te(It);
        }
      } else if (Ze) {
        const Be = he(S.current);
        if (Be.length) {
          pe.preventDefault();
          const Ke = ke === "ArrowDown" ? 1 : -1, It = (z.secondaryIndex + Ke + Be.length) % Be.length;
          Pe(It);
        }
      }
    }
  }, He = !!ge && (ce === "list" || ce === "cards"), tt = O.useMemo(() => Q === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : Q === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : Q === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: Q.mobile !== void 0 ? Q.mobile : !0,
    tablet: Q.tablet || !1,
    desktop: Q.desktop || !1
  }, [Q]), Ye = ie && te("medium") && !te("xlarge"), it = ie && te("xlarge"), at = !!i, et = ce === "three-column", [qe, At] = O.useState(!1);
  O.useEffect(() => {
    et && qe && At(!1);
  }, [et, qe]), O.useEffect(() => {
    qe && !et && (J("secondary"), de(2), setTimeout(() => {
      S.current?.focus();
    }, 50));
  }, [qe, et]), O.useEffect(() => {
    !qe && !et && Z === "secondary" && (J("content"), de(1), setTimeout(() => {
      B.current?.focus();
    }, 50));
  }, [qe, et, Z]);
  const cn = !!ge && (He && tt.mobile || !He && Ye && tt.tablet || !He && it && tt.desktop) || at && !et, Ee = `h${fe}`, Re = ge ? O.createElement(
    Ee,
    {
      style: {
        marginLeft: He ? 32 : 0,
        marginRight: He ? 32 : 0
      }
    },
    ge.label
  ) : null, Ie = He ? "mobile" : Ye ? "tablet" : "desktop", xt = at && !et && !qe, ft = He && tt.mobile ? /* @__PURE__ */ r.jsx(
    Xa,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => kn(void 0, void 0)
    }
  ) : void 0, kt = xt ? /* @__PURE__ */ r.jsx(
    wl,
    {
      element: "button",
      text: f,
      onClick: () => {
        At(!0);
      }
    }
  ) : void 0, Fe = !et && qe ? /* @__PURE__ */ r.jsx(
    Xa,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => At(!1)
    }
  ) : void 0, jt = O.useMemo(() => {
    if (!cn || !ge) return null;
    if (ne)
      return ne({
        item: ge,
        detailActive: He,
        context: Ie,
        backLink: ft,
        defaultHeading: Re
      });
    const pe = ge && re ? typeof re == "function" ? re(ge) : re : null;
    return /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
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
            Fe || ft,
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
                  Re,
                  pe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: pe })
                ]
              }
            )
          ]
        }
      ),
      kt && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: kt })
    ] });
  }, [
    cn,
    ge,
    ne,
    He,
    Ie,
    ft,
    Fe,
    Re,
    kt,
    re
  ]);
  O.useEffect(() => {
    if (!b) return;
    const pe = ce === "three-column";
    let ke = !1;
    const be = () => {
      ke || (le.selectedId !== Ce && le.setSelectedId(Ce), le.drilledIn !== pe && le.setDrilledIn(pe));
    };
    if (j && j > 0) {
      const $e = setTimeout(be, j);
      return () => {
        ke = !0, clearTimeout($e);
      };
    } else
      be();
  }, [b, le, Ce, ce, j]), O.useEffect(() => {
    if (!b) return;
    const pe = () => {
      const ke = new URLSearchParams(window.location.search), be = ke.get(w);
      ke.get(k), De(be === null ? void 0 : be);
    };
    return window.addEventListener("popstate", pe), () => window.removeEventListener("popstate", pe);
  }, [
    b,
    w,
    k,
    c,
    i
  ]);
  const en = O.useRef(0), Et = O.useRef(
    null
  ), kn = O.useCallback(
    (pe, ke) => {
      pe !== Ce && (n === void 0 && De(pe), o?.(pe, ke));
    },
    [n, o, Ce]
  );
  O.useEffect(() => {
    if (!N && He && B.current) {
      const pe = setTimeout(() => B.current?.focus(), 30);
      return () => clearTimeout(pe);
    }
  }, [He, Ce, N]);
  const pt = O.useRef(null), [rt, On] = O.useState(
    () => x === "first" ? 0 : -1
  );
  O.useEffect(() => {
    if (rt < 0 || !pt.current) return;
    const ke = Array.from(
      pt.current.querySelectorAll("[data-nav-item]")
    )[rt];
    if (ke) {
      document.activeElement !== ke && ke.focus(), en.current = rt;
      const be = t[rt];
      _?.(
        be ? m(be) : void 0,
        be,
        rt
      );
    }
  }, [rt, t, _, m]);
  const Xc = (pe) => {
    const ke = A === "vertical" ? "ArrowDown" : "ArrowRight", be = A === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (pe.key === "ArrowRight" && A === "vertical") {
      pe.preventDefault(), qe ? (J("secondary"), setTimeout(() => {
        S.current?.focus();
      }, 10)) : (J("content"), setTimeout(() => {
        B.current?.focus();
      }, 10));
      return;
    }
    if (pe.key === ke)
      pe.preventDefault(), On(($e) => Math.min(t.length - 1, $e + 1));
    else if (pe.key === be)
      pe.preventDefault(), On(($e) => Math.max(0, $e - 1));
    else if (pe.key === "Home")
      pe.preventDefault(), On(0);
    else if (pe.key === "End")
      pe.preventDefault(), On(t.length - 1);
    else if (pe.key === "Enter" || pe.key === " ") {
      pe.preventDefault();
      const $e = t[rt];
      $e && !$e.disabled && kn(m($e), $e);
    } else if (pe.key.length === 1 && /[a-z0-9]/i.test(pe.key)) {
      Et.current || (Et.current = { buffer: "", last: 0 });
      const $e = Date.now(), nt = 700, Ze = pe.key.toLowerCase();
      $e - Et.current.last > nt ? Et.current.buffer = Ze : Et.current.buffer += Ze, Et.current.last = $e;
      let Qe = Et.current.buffer;
      const Cn = Qe.split("").every((It) => It === Qe[0]), dn = t.map(
        (It) => String(It.label || "").toLowerCase()
      );
      let hr = 0;
      rt >= 0 && (hr = (rt + 1) % t.length);
      let Be;
      const Ke = (It, cs) => {
        const ds = t.length;
        for (let Da = 0; Da < ds; Da++) {
          const Ta = (hr + Da) % ds;
          if (!t[Ta].disabled && dn[Ta].startsWith(It))
            return Ta;
        }
      };
      Cn && Qe.length > 1 ? Be = Ke(Qe[0]) : (Be = Ke(Qe), Be === void 0 && Qe.length > 1 && (Be = Ke(Qe[Qe.length - 1]), Be !== void 0 && Et.current && (Et.current.buffer = Qe[Qe.length - 1]))), Be !== void 0 && On(Be);
    }
  }, Qc = O.useMemo(() => {
    if (W && (W === "url" || W === "both") && typeof window < "u") {
      const ke = new URLSearchParams(window.location.search).get(q);
      if (ke === "1") return !0;
      if (ke === "0") return !1;
    }
    if (W && (W === "localStorage" || W === "both") && typeof window < "u")
      try {
        const pe = window.localStorage.getItem(X);
        if (pe === "1") return !0;
        if (pe === "0") return !1;
      } catch {
      }
    return I;
  }, [
    W,
    I,
    X,
    q
  ]), [Mt, Kc] = O.useState(Qc);
  O.useEffect(() => {
    H?.(Mt);
  }, [Mt, H]);
  const ed = O.useCallback(() => {
    se && $ && Kc((pe) => !pe);
  }, [se, $]);
  O.useEffect(() => {
    if (W && !(typeof window > "u")) {
      if (W === "localStorage" || W === "both")
        try {
          window.localStorage.setItem(
            X,
            Mt ? "1" : "0"
          );
        } catch {
        }
      if (W === "url" || W === "both") {
        const pe = new URLSearchParams(window.location.search);
        pe.set(q, Mt ? "1" : "0");
        const ke = `${window.location.pathname}?${pe.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ke);
      }
    }
  }, [
    Mt,
    W,
    X,
    q
  ]);
  const td = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    He ? "nhs-navigation-split-view--detail-active" : "",
    ce === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    $ && se && Mt ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), Ma = O.useRef(null);
  O.useEffect(() => {
    if (!M && Ma.current) {
      const pe = ge ? `Selected ${ge.label}` : "Selection cleared";
      Ma.current.textContent = pe;
    }
  }, [ge, M]), O.useEffect(() => {
    !He && Ce == null && pt.current && pt.current.querySelectorAll("[data-nav-item]")[en.current]?.focus();
  }, [He, Ce]);
  const tn = ce === "three-column", [Ia, nd] = O.useState(!1);
  O.useEffect(() => {
    tn && !Ia && nd(!0);
  }, [tn, Ia]);
  const ls = O.useRef(tn);
  O.useEffect(() => {
    ls.current !== tn && (L?.(tn), ls.current = tn);
  }, [tn, L]);
  const rd = () => {
    if (ce === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Ce ? String(Ce) : void 0,
          children: [
            t.map((be) => {
              const $e = m(be), nt = $e === Ce;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": nt,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String($e),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": nt || void 0,
                      "data-disabled": be.disabled || void 0,
                      disabled: be.disabled,
                      onClick: () => !be.disabled && kn($e, be),
                      children: [
                        be.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: be.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: be.label }),
                        be.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: be.description }),
                        s?.(be),
                        be.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: be.badge })
                      ]
                    }
                  )
                },
                $e
              );
            }),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: p || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const pe = "nsv-nav-instructions", ke = O.useMemo(() => O.memo(
      ({
        item: be,
        idx: $e,
        selected: nt,
        focused: Ze
      }) => {
        const Qe = m(be), Cn = be.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ze ? 0 : -1,
          onClick: () => {
            en.current = $e, kn(Qe, be);
          },
          onKeyDown: (dn) => {
            (dn.key === "Enter" || dn.key === " ") && (dn.preventDefault(), en.current = $e, kn(Qe, be));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Qe),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": nt,
            "aria-current": nt ? "true" : void 0,
            "data-selected": nt || void 0,
            "data-disabled": be.disabled || void 0,
            ...Cn,
            children: [
              be.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: be.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: be.label }),
                be.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: be.description }),
                s?.(be)
              ] }),
              be.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: be.badge })
            ]
          }
        );
      }
    ), [m, kn, s]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: pt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Xc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": pe,
          "aria-activedescendant": Ce ? String(Ce) : void 0,
          children: [
            t.map((be, $e) => /* @__PURE__ */ r.jsx(
              ke,
              {
                item: be,
                idx: $e,
                selected: m(be) === Ce,
                focused: $e === rt || rt === -1 && $e === 0 && x === "first",
                "data-just-selected": m(be) === G ? "true" : void 0
              },
              m(be)
            )),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: p || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
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
          children: D
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: T,
      className: td,
      "aria-label": y?.rootLabel,
      "data-layout": ce,
      onKeyDown: We,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": He || void 0,
            style: { transform: He ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: P,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": y?.navigationLabel || "Items",
                  "data-collapsed": Mt || void 0,
                  tabIndex: 0,
                  children: [
                    $ && se && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: ed,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Mt ? oe : Y,
                        title: Mt ? oe : Y,
                        children: Mt ? R || /* @__PURE__ */ r.jsx(Dh, {}) : ee || /* @__PURE__ */ r.jsx(Ih, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: rd() }),
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
                  ref: B,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": y?.contentLabel || "Content",
                  "data-has-selection": !!ge || void 0,
                  tabIndex: 0,
                  style: {
                    display: qe && !et ? "none" : void 0
                  },
                  children: [
                    cn && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: jt }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: l(ge)
                      }
                    )
                  ]
                }
              ),
              ce === "three-column" && (!F || Ia) || qe && !et ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: S,
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
                        qe && !et && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  Fe,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: ge && typeof ge == "object" && "label" in ge ? ge.label : String(ge) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        ge && K && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof K == "function" ? K(ge) : K
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: i?.(ge) })
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
            ref: Ma,
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
            children: tn ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Th.displayName = "NavigationSplitView";
const Lh = typeof window < "u" && window.document ? O.useLayoutEffect : O.useEffect, ri = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), $h = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: l } = e, i = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, p = (g) => {
    h && (g.preventDefault(), a?.(e));
  }, y = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: p,
    onKeyDown: (g) => {
      (g.key === "Enter" || g.key === " ") && p(g), g.key === "Escape" && o && p(g);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ye("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
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
          h && /* @__PURE__ */ r.jsx("span", { className: ye("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Ah = ad(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: l = !1,
  onToggleItem: i,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = ze(() => /* @__PURE__ */ new Set()), [h, p] = ze(() => /* @__PURE__ */ new Set()), y = Oe(/* @__PURE__ */ new Set()), g = me((j) => u.has(j), [u]), m = me((j) => {
    f((F) => {
      const E = new Set(F);
      return E.has(j.id) ? (E.delete(j.id), p(($) => {
        const I = new Set($);
        return I.add(j.id), I;
      }), setTimeout(() => p(($) => {
        const I = new Set($);
        return I.delete(j.id), I;
      }), 240), i?.(j.id, !1)) : (E.add(j.id), i?.(j.id, !0)), E;
    });
  }, [i]);
  Lh(() => {
    if (c !== "inline" || !l || typeof document > "u") return;
    const j = [];
    if (u.forEach((I) => {
      y.current.has(I) || j.push(I);
    }), y.current = new Set(u), !j.length) return;
    const F = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, E = j.map((I) => `.nhsuk-product-roadmap__inline-children[data-parent="${I}"] .nhsuk-product-roadmap__inline-child`).join(","), $ = Array.from(document.querySelectorAll(E));
    if ($.length) {
      if (F) {
        $.forEach((I) => {
          I.style.opacity = "1", I.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((I) => {
        (I.gsap || I.default || I).to($, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        $.forEach((I) => {
          I.style.opacity = "1", I.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, l]);
  const A = me(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), C = ye("nhsuk-product-roadmap", o), L = ri(n, 120, 1200, 400), D = ri(a, 1, 6, 2), x = je(() => e.map((j) => /* @__PURE__ */ new Date(j + " 01")), [e]), N = je(() => {
    if (x.length === 0) {
      const E = /* @__PURE__ */ new Date();
      return [E, E];
    }
    const j = new Date(x[0]), F = tr.offset(new Date(x[x.length - 1]), 1);
    return [j, F];
  }, [x]), M = je(() => Qo().domain(N).range([0, x.length * L]), [N, x.length, L]), _ = me((j) => {
    if (j.startDate) {
      const Y = new Date(j.startDate), R = new Date(j.endDate ?? j.startDate);
      R < Y && R.setTime(Y.getTime());
      const ee = M(Y), W = tr.offset(new Date(R), 1);
      let X = M(W);
      Number.isFinite(X) || (X = ee + L);
      const q = Math.max(L * 0.25, X - ee), Q = ee / L, fe = q / L;
      return { ...j, _pxLeft: ee, _pxWidth: q, _startFraction: Q, _spanColumns: fe };
    }
    const F = j.date ?? 1, E = j.dateOffset ?? 0, $ = j.length ?? 1, I = j.partialLength ?? 1, H = F - 1 + E, oe = $ - 1 + I;
    return { ...j, _pxLeft: H * L, _pxWidth: oe * L, _startFraction: H, _spanColumns: oe };
  }, [M, L]), b = je(() => t.map((j) => {
    const E = j.roadmapItems.map((I) => {
      const H = !I.childItems && I.children ? { ...I, childItems: I.children } : { ...I };
      return _(H);
    }).sort((I, H) => I._pxLeft !== H._pxLeft ? I._pxLeft - H._pxLeft : H._pxWidth - I._pxWidth), $ = [];
    return E.forEach((I) => {
      const H = I._pxLeft, oe = I._pxLeft + I._pxWidth;
      let Y = $.findIndex((R) => R <= H);
      Y === -1 && (Y = $.length, $.push(0)), $[Y] = oe, I.verticalPosition = Y + 1;
    }), { ...j, roadmapItems: E, _laneCount: $.length };
  }), [t, _]), w = je(() => b.map((j) => j._laneCount || 1), [b]), k = je(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C,
      style: { "--column-width": `${L}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": b.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((j, F) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": F + 2, children: j }, `${j}-${F}`))
        ] }),
        b.map((j, F) => {
          const E = F + 2, $ = w[F];
          let I, H = 0, oe = [];
          l && c === "inline" && (oe = j.roadmapItems.filter((W) => g(W.id) && W.childItems && W.childItems.length).map((W) => ({ id: W.id, lane: W.verticalPosition || 1, count: W.childItems.length })).sort((W, X) => W.lane - X.lane), H = oe.reduce((W, X) => W + X.count, 0));
          const Y = $ + H;
          I = `calc((${Y} * var(--roadmap-item-block-height)) + (max(0, ${Y} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let ee = 0;
          return oe.forEach((W) => {
            ee += W.count, R[W.lane + 1] = ee;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": E, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: j.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: I }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: j.roadmapItems.map((W, X) => {
              const q = (W.verticalPosition || 1) - 1, Q = oe.filter((K) => K.lane - 1 < q).reduce((K, te) => K + te.count, 0), fe = q + Q, ne = g(W.id), re = h.has(W.id);
              return /* @__PURE__ */ r.jsxs(bt.Fragment, { children: [
                /* @__PURE__ */ r.jsx($h, { item: W, maxLines: D, enableDrilldown: l, onExpand: m, isActive: ne, topLaneIndex: fe, laneOffset: Q }),
                l && c === "inline" && (ne || re) && W.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": W.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${W.title} child tasks`, children: W.childItems.map((K, te) => {
                  const ie = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let U = W._pxLeft, se = W._pxWidth;
                  if (K.startDate) {
                    const le = new Date(K.startDate);
                    let ve = K.endDate ? new Date(K.endDate) : new Date(le);
                    ve < le && (ve = new Date(le));
                    const De = new Date(ve);
                    De.setDate(De.getDate() + 1);
                    const Ce = M(le);
                    let ge = M(De);
                    (!Number.isFinite(ge) || ge <= Ce) && (ge = Ce + 6), U = Ce, se = Math.max(6, ge - Ce);
                  }
                  const ce = fe + 1 + te;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ye("nhsuk-product-roadmap__inline-child", K.status && `nhsuk-product-roadmap__inline-child--status-${K.status}`, !ne && re && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${U}px`, width: `${se}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${ce})`, height: ie, opacity: ne ? 0 : void 0, transform: ne ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: K.title })
                      ]
                    },
                    K.id ?? te
                  );
                }) })
              ] }, W.id ?? X);
            }) }) })
          ] }, `${j.heading}-${F}`);
        }),
        l && c === "overlay" && u.size === 1 && (() => {
          const j = Array.from(u)[0], F = t.flatMap((E) => E.roadmapItems).find((E) => E.id === j);
          return !F || !F.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${F.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: F.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: A, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((E, $) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: E.title }),
                E.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: E.content })
              ] }, E.id ?? $)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: A, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Ah.displayName = "ProductRoadmap";
function _l(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = _l(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Rr() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = _l(e)) && (a && (a += " "), a += t);
  return a;
}
function dt(e) {
  return function() {
    return e;
  };
}
const io = Math.PI, lo = 2 * io, un = 1e-6, Eh = lo - un;
function kl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Ph(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return kl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class Fh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? kl : Ph(t);
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
  bezierCurveTo(t, n, a, o, s, l) {
    this._append`C${+t},${+n},${+a},${+o},${this._x1 = +s},${this._y1 = +l}`;
  }
  arcTo(t, n, a, o, s) {
    if (t = +t, n = +n, a = +a, o = +o, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let l = this._x1, i = this._y1, c = a - t, d = o - n, u = l - t, f = i - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > un) if (!(Math.abs(f * c - d * u) > un) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = a - l, y = o - i, g = c * c + d * d, m = p * p + y * y, A = Math.sqrt(g), C = Math.sqrt(h), L = s * Math.tan((io - Math.acos((g + h - m) / (2 * A * C))) / 2), D = L / C, x = L / A;
      Math.abs(D - 1) > un && this._append`L${t + D * u},${n + D * f}`, this._append`A${s},${s},0,0,${+(f * p > u * y)},${this._x1 = t + x * c},${this._y1 = n + x * d}`;
    }
  }
  arc(t, n, a, o, s, l) {
    if (t = +t, n = +n, a = +a, l = !!l, a < 0) throw new Error(`negative radius: ${a}`);
    let i = a * Math.cos(o), c = a * Math.sin(o), d = t + i, u = n + c, f = 1 ^ l, h = l ? o - s : s - o;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > un || Math.abs(this._y1 - u) > un) && this._append`L${d},${u}`, a && (h < 0 && (h = h % lo + lo), h > Eh ? this._append`A${a},${a},0,1,${f},${t - i},${n - c}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > un && this._append`A${a},${a},0,${+(h >= io)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Cl(e) {
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
  }, () => new Fh(t);
}
function Nl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function jl(e) {
  this._context = e;
}
jl.prototype = {
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
function Ml(e) {
  return new jl(e);
}
function Il(e) {
  return e[0];
}
function Dl(e) {
  return e[1];
}
function Tl(e, t) {
  var n = dt(!0), a = null, o = Ml, s = null, l = Cl(i);
  e = typeof e == "function" ? e : e === void 0 ? Il : dt(e), t = typeof t == "function" ? t : t === void 0 ? Dl : dt(t);
  function i(c) {
    var d, u = (c = Nl(c)).length, f, h = !1, p;
    for (a == null && (s = o(p = l())), d = 0; d <= u; ++d)
      !(d < u && n(f = c[d], d, c)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, d, c), +t(f, d, c));
    if (p) return s = null, p + "" || null;
  }
  return i.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : dt(+c), i) : e;
  }, i.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : dt(+c), i) : t;
  }, i.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : dt(!!c), i) : n;
  }, i.curve = function(c) {
    return arguments.length ? (o = c, a != null && (s = o(a)), i) : o;
  }, i.context = function(c) {
    return arguments.length ? (c == null ? a = s = null : s = o(a = c), i) : a;
  }, i;
}
function co(e, t, n) {
  var a = null, o = dt(!0), s = null, l = Ml, i = null, c = Cl(d);
  e = typeof e == "function" ? e : e === void 0 ? Il : dt(+e), t = typeof t == "function" ? t : dt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Dl : dt(+n);
  function d(f) {
    var h, p, y, g = (f = Nl(f)).length, m, A = !1, C, L = new Array(g), D = new Array(g);
    for (s == null && (i = l(C = c())), h = 0; h <= g; ++h) {
      if (!(h < g && o(m = f[h], h, f)) === A)
        if (A = !A)
          p = h, i.areaStart(), i.lineStart();
        else {
          for (i.lineEnd(), i.lineStart(), y = h - 1; y >= p; --y)
            i.point(L[y], D[y]);
          i.lineEnd(), i.areaEnd();
        }
      A && (L[h] = +e(m, h, f), D[h] = +t(m, h, f), i.point(a ? +a(m, h, f) : L[h], n ? +n(m, h, f) : D[h]));
    }
    if (C) return i = null, C + "" || null;
  }
  function u() {
    return Tl().defined(o).curve(l).context(s);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : dt(+f), a = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : dt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : dt(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : dt(+f), n = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : dt(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : dt(+f), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(n);
  }, d.lineX1 = function() {
    return u().x(a).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : dt(!!f), d) : o;
  }, d.curve = function(f) {
    return arguments.length ? (l = f, s != null && (i = l(s)), d) : l;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? s = i = null : i = l(s = f), d) : s;
  }, d;
}
function ai(e) {
  return e < 0 ? -1 : 1;
}
function oi(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), l = (n - e._y1) / (o || a < 0 && -0), i = (s * o + l * a) / (a + o);
  return (ai(s) + ai(l)) * Math.min(Math.abs(s), Math.abs(l), 0.5 * Math.abs(i)) || 0;
}
function si(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Oa(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, l = e._y1, i = (s - a) / 3;
  e._context.bezierCurveTo(a + i, o + i * t, s - i, l - i * n, s, l);
}
function Br(e) {
  this._context = e;
}
Br.prototype = {
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
        Oa(this, this._t0, si(this, this._t0));
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
          this._point = 3, Oa(this, si(this, n = oi(this, e, t)), n);
          break;
        default:
          Oa(this, this._t0, n = oi(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Br.prototype).point = function(e, t) {
  Br.prototype.point.call(this, t, e);
};
function Hr(e) {
  return new Br(e);
}
function Rh(e, t, n) {
  const a = Ui(e, t);
  return Qo().domain(a).range(n);
}
function ii(e, t, n) {
  const [a, o] = Ui(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Lr().domain([0, 0]).range(n);
  let l;
  if (a <= 0)
    l = Math.min(0, a);
  else {
    const c = o - a, d = (c > 0 ? c : a) * 0.1;
    l = Math.max(0, a - d), l === a && (l = Math.max(0, a * 0.9));
  }
  const i = o ?? 0;
  return Lr().domain([l, i]).nice().range(n);
}
function uo(e, t, n, a) {
  const o = Tl().x(t).y(n);
  return a?.smooth !== !1 && o.curve(Hr), o(e) ?? "";
}
function Bh(e = {}) {
  const t = O.useRef(null), n = O.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = O.useState({ width: 0, height: 0 });
  O.useLayoutEffect(() => {
    if (!t.current) return;
    const i = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        o({ width: u, height: f });
      }
    });
    return i.observe(t.current), () => i.disconnect();
  }, []);
  const s = Math.max(0, a.width - n.left - n.right), l = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: l, margin: n, ref: t };
}
const Ll = O.createContext(null);
function ln() {
  return O.useContext(Ll);
}
const Hh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: l
}) => {
  const i = Bh(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: i.ref, className: a, style: c, role: s, "aria-label": l, children: /* @__PURE__ */ r.jsx(Ll.Provider, { value: i, children: o }) });
}, es = O.createContext(null), _n = () => O.useContext(es), zh = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: l = 5,
  yDomain: i,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = ln(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, y = O.useMemo(() => e.flatMap((x) => x.data), [e]), g = O.useCallback(
    (x) => {
      if (a) return a(x);
      const N = x.x;
      return N instanceof Date ? N : new Date(N);
    },
    [a]
  ), m = c ?? 6, A = d ?? 6, C = O.useMemo(
    () => Rh(y, g, [
      m,
      Math.max(0, h - m)
    ]),
    [y, g, h, m]
  ), L = O.useMemo(() => {
    const x = Math.max(0, u ?? 0), N = Math.max(0, p - (A + x));
    if (i) {
      const M = ii([], (_) => _.y, [
        N,
        A
      ]);
      return M.domain(i), M;
    }
    return ii(y, (M) => M.y, [N, A]);
  }, [y, p, i, A, u]), D = O.useMemo(
    () => ({
      xScale: C,
      yScale: L,
      getXTicks: (x = s) => C.ticks(x),
      getYTicks: (x = l) => L.ticks(x)
    }),
    [C, L, s, l]
  );
  return /* @__PURE__ */ r.jsx(es.Provider, { value: D, children: o });
}, Sr = 16, _r = 6, Oh = 16, Uh = 4, Wh = 6, Gh = 3, Vh = void 0, li = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: o,
  label: s,
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
  const g = _n(), m = ln(), A = t || (e === "x" ? g?.xScale : g?.yScale), C = n ?? (e === "x" ? 6 : 5), L = typeof o == "function", D = O.useMemo(() => {
    if (L || !p) return;
    const M = (_) => new Intl.DateTimeFormat(void 0, _);
    switch (p) {
      case "dayShortMonth":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${b.getDate()}
${M({ month: "short" }).format(b)}`;
        };
      case "dayShortMonthYear":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${b.getDate()}
${M({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "shortMonth":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return M({ month: "short" }).format(b);
        };
      case "shortMonthYear":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${M({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "hourMinute":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return M({ hour: "2-digit", minute: "2-digit" }).format(b);
        };
      default:
        return;
    }
  }, [L, p]);
  let x = L ? o : D || ((M) => String(M));
  const N = O.useMemo(() => a && Array.isArray(a) ? a : A ? typeof A.ticks == "function" ? A.ticks(C) : A.domain ? A.domain() : [] : [], [A, C, a]);
  if (e === "x" && !L && !p && N.length && N.every((M) => M instanceof Date)) {
    const M = N[0], _ = N[N.length - 1], b = _.getTime() - M.getTime(), w = 24 * 3600 * 1e3, k = 365 * w, j = M.getFullYear() === _.getFullYear(), F = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (b < 2 * w) {
      const E = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      x = ($) => E.format($);
    } else if (b < 32 * w)
      x = (E) => {
        const $ = E;
        return `${$.getDate()} ${F.format($)}`;
      };
    else if (b < k && j)
      x = (E) => F.format(E);
    else if (b < 2 * k) {
      const E = /* @__PURE__ */ new Set();
      x = ($) => {
        const I = $, H = I.getMonth();
        return E.has(H) || E.add(H), `${F.format(I)} ${I.getFullYear()}`;
      };
    } else
      x = (E) => String(E.getFullYear());
  }
  if (!A || !m) return null;
  if (e === "x") {
    const M = l ?? m.innerHeight, _ = typeof A.bandwidth == "function", b = _ ? A.bandwidth() : 0, w = (F) => {
      const E = A(F);
      return _ ? E + b / 2 : E;
    };
    let k = c ?? 0;
    if (u && c == null) {
      const F = N.map(
        ($) => x($).replace(/\n.*/g, "")
      ), E = F.length ? F.reduce(($, I) => $ + I.length, 0) / F.length : 0;
      k = Math.max(12, Math.round(E * 6 + 4));
    }
    const j = O.useMemo(() => {
      if (a && Array.isArray(a) || k <= 0) return N;
      const F = [];
      let E = -1 / 0;
      for (const $ of N) {
        const I = w($);
        I - E >= k && (F.push($), E = I);
      }
      return F;
    }, [
      N,
      A,
      k,
      a,
      _,
      b
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", i].filter(Boolean).join(" "),
        transform: `translate(0,${M})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          j.map((F, E) => {
            const $ = x(F), I = d && $.length > d ? $.slice(0, Math.max(1, d - 1)) + "…" : $, H = h ? I.split(/\n/) : [I.replace(/\n/g, " ")], oe = f < 0 ? "end" : f > 0 ? "start" : "middle";
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
                      textAnchor: oe,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        H.map((Y, R) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: R === 0 ? 0 : "1.1em", children: Y }, R)),
                        I !== $ && /* @__PURE__ */ r.jsx("title", { children: $ })
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
          const M = !!y?.enabled, _ = Math.max(_r, y?.gapPx ?? Sr);
          if (!M)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: m.innerHeight, stroke: "currentColor" });
          const b = Math.max(0, m.innerHeight - _);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: b, stroke: "currentColor" });
        })(),
        N.map((M, _) => {
          const b = x(M), w = d && b.length > d ? b.slice(0, Math.max(1, d - 1)) + "…" : b, k = h ? w.split(/\n/) : [w.replace(/\n/g, " ")];
          if (!!y?.enabled) {
            const F = Math.max(_r, y?.gapPx ?? Sr), E = Math.max(0, m.innerHeight - F);
            if (A(M) > E - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${A(M)})`,
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
            M?.toString?.() || _
          );
        }),
        !!y?.enabled && (() => {
          const M = Math.max(_r, y?.gapPx ?? Sr), _ = m.innerHeight, w = Math.max(0, _ - M), k = w, F = Math.max(4, _ - k), E = Uh, $ = Wh, I = Math.max(1, Math.round(y?.zigZag?.amplitudePx ?? E)), H = Math.max(1, Math.round(y?.zigZag?.stepXPx ?? Gh)), oe = y?.zigZag?.heightPx ?? Vh, Y = Math.max(4, Math.round(oe ?? 0));
          let R, ee;
          if (y?.zigZag?.heightPx && y.zigZag.heightPx > 0) {
            const re = Math.max(4, Math.min(F - 2, Y));
            R = Math.max(1, Math.floor(re / (2 * I))), ee = Math.max(0, Math.min(re, R * 2 * I));
          } else typeof y?.zigZag?.cycles == "number" && y?.zigZag?.cycles > 0 ? (R = Math.max(1, Math.round(y.zigZag.cycles)), ee = R * 2 * I, ee = Math.min(ee, F - 2), R = Math.max(1, Math.floor(ee / (2 * I)))) : (R = $, ee = Math.min(F - 2, R * 2 * I), R = Math.max(1, Math.floor(ee / (2 * I))));
          const W = k + (F - ee) / 2, X = W + ee;
          let q = "M0,0";
          const Q = ee > 0 ? Math.max(0, Math.floor((ee - I) / (2 * I))) : 0, fe = Math.max(0, (ee - Q * 2 * I) / 2), ne = I > 0 ? H * (fe / I) : 0;
          fe > 0 && (q += ` l${ne},${fe}`);
          for (let re = 0; re < Q; re++)
            q += ` l-${H},${I} l${H},${I}`;
          return fe > 0 && (q += ` l-${ne},${fe}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: w, y2: W, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${W})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: q, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: X, y2: _, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${_})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        s && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -m.innerHeight / 2,
            y: -m.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: s
          }
        )
      ]
    }
  );
}, Yh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = _n(), l = ln();
  if (!s || !l) return null;
  const i = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && i.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: l.innerWidth,
        y1: s.yScale(c),
        y2: s.yScale(c),
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
        x1: s.xScale(c),
        x2: s.xScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    ))
  ] });
}, Zh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, cr = {
  color: Zh
}, Jh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, va = {
  color: Jh
}, qh = [
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
let Ua = null, Wa = null, Ga = null, $l = "optimized";
function Xh() {
  const e = { color: { ...va.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((i, c) => i ? i[c] : void 0, e);
    if (!s) return;
    const l = s.$value || s.value;
    if (typeof l == "string" && /^\{.+\}$/.test(l))
      return t(l.slice(1, -1), o);
    if (typeof l == "string") return l;
  }, n = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const o = `color.data-viz.categorical.${a}`, s = t(o);
      if (!s) throw new Error(`Missing token ${o}`);
      n.push(s);
    }
    return n;
  } catch {
    return qh;
  }
}
function Qh() {
  return Ua || (Ua = Xh()), Ua;
}
function Kh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Va(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function em(e, t, n) {
  const a = Va(e), o = Va(t), s = Va(n), l = a * 0.4124 + o * 0.3576 + s * 0.1805, i = a * 0.2126 + o * 0.7152 + s * 0.0722, c = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: l * 100, y: i * 100, z: c * 100 };
}
function tm(e, t, n) {
  let l = e / 95.047, i = t / 100, c = n / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return l = d(l), i = d(i), c = d(c), { L: 116 * i - 16, a: 500 * (l - i), b: 200 * (i - c) };
}
function Al(e) {
  const t = Kh(e);
  if (!t) return null;
  const n = em(t.r, t.g, t.b);
  return tm(n.x, n.y, n.z);
}
function ci(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function nm() {
  const e = Qh();
  if (e.length <= 2) return e.slice();
  const t = e.map((l) => Al(l));
  let n = 0, a = -1;
  for (let l = 0; l < e.length; l++) {
    const i = t[l];
    if (!i) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) l !== f && t[f] && (c += ci(i, t[f]), d++);
    const u = c / Math.max(1, d);
    u > a && (a = u, n = l);
  }
  const o = new Set(e.map((l, i) => i)), s = [];
  for (s.push(n), o.delete(n); o.size; ) {
    let l = Array.from(o)[0], i = -1;
    for (const c of o) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const p = ci(d, h);
          p < u && (u = p);
        }
      }
      u > i && (i = u, l = c);
    }
    s.push(l), o.delete(l);
  }
  return s.map((l) => e[l]);
}
function rm() {
  return Wa || (Wa = nm()), Wa;
}
function am(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, l = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, i = l(o) * 95.047, c = l(a) * 100, d = l(s) * 108.883;
  return { X: i, Y: c, Z: d };
}
function om(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const l = (i) => i <= 31308e-7 ? 12.92 * i : 1.055 * Math.pow(i, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, l(a))), o = Math.min(1, Math.max(0, l(o))), s = Math.min(1, Math.max(0, l(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function sm(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function im(e, t) {
  const n = Al(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: l } = am(a, n.a, n.b), i = om(o, s, l);
  return sm(i.r, i.g, i.b);
}
function lm() {
  const e = rm(), n = [12, -12, 24, -24].map((o) => e.map((s) => im(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function cm() {
  return (!Ga || dm()) && (Ga = lm(), El = $l), Ga;
}
let El = null;
function dm() {
  return El !== $l;
}
function $t(e) {
  const t = cm();
  return t[e % t.length];
}
let $n = null, nr = null, rr = null, ar = null;
function um() {
  const e = cr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    $n = [];
    for (let s = 1; s <= 12; s++) {
      const l = t[String(s)]?.$value || t[String(s)]?.value;
      $n.push(typeof l == "string" ? l : "#212b32");
    }
    const n = e.region || {};
    nr = {}, Object.keys(n).forEach((s) => {
      const l = n[s]?.$value || n[s]?.value;
      typeof l == "string" && (nr[s] = l);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    ar = {}, Object.keys(o).forEach((s) => {
      const l = o[s]?.$value || o[s]?.value;
      typeof l == "string" && (ar[s] = l);
    }), rr = {}, Object.keys(a).forEach((s) => {
      const l = a[s]?.$value || a[s]?.value;
      typeof l == "string" && (rr[s] = l);
    });
  }
}
function wa() {
  (!$n || !nr || !rr || !ar) && um();
}
function vn(e) {
  return wa(), $n ? $n[e % $n.length] : "#212b32";
}
function fm(e) {
  return wa(), nr ? nr[e] : void 0;
}
function zr(e, t) {
  return fm(e) || vn(t);
}
const fo = ["low", "moderate", "high", "critical"];
let Ya = null;
function pm() {
  const e = { color: { ...va.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((i, c) => i ? i[c] : void 0, e);
    if (!s) return;
    const l = s.$value || s.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, n = {};
  return fo.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function Pl() {
  return Ya || (Ya = pm()), Ya;
}
function hm(e) {
  return Pl()[e.toLowerCase()];
}
function mm(e, t) {
  return hm(e) || Pl()[fo[t % fo.length]] || $t(t);
}
function gm(e) {
  return wa(), rr ? rr[e] : void 0;
}
function xm(e, t) {
  return gm(e) || vn(t);
}
const po = ["trust", "ambulance", "icb", "region"];
let Za = null;
function bm() {
  const e = { color: { ...va.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((i, c) => i ? i[c] : void 0, e);
    if (!s) return;
    const l = s.$value || s.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, n = {};
  return po.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function Fl() {
  return Za || (Za = bm()), Za;
}
function ym(e) {
  return Fl()[e.toLowerCase()];
}
function vm(e, t) {
  return ym(e) || Fl()[po[t % po.length]] || $t(t);
}
function wm(e) {
  return wa(), ar ? ar[e] : void 0;
}
function Sm(e, t) {
  return wm(e) || vn(t);
}
let Ja = null;
const _m = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function km(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Cm() {
  const e = { color: { ...va.color, ...cr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const l = o.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!l) return;
    const i = l.$value || l.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {}, a = [];
  return _m.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function Nm() {
  return Ja || (Ja = Cm()), Ja;
}
function jm(e) {
  return Nm()[km(e)];
}
function An(e, t) {
  return jm(e) || $t(t);
}
const Rl = O.createContext(null), dr = () => O.useContext(Rl), Zy = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = O.useState(() => new Set(e)), l = n !== void 0, i = O.useMemo(() => l ? new Set(n) : o, [l, n, o]), c = O.useCallback((u) => {
    l || s(new Set(u)), a?.(Array.from(u));
  }, [l, a]), d = O.useMemo(() => ({
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
  return /* @__PURE__ */ r.jsx(Rl.Provider, { value: d, children: t });
}, Bl = O.createContext(null), Kt = () => O.useContext(Bl), Mm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = _n(), o = dr(), [s, l] = O.useState(null), i = O.useRef(/* @__PURE__ */ new Map()), [c, d] = O.useState([]), u = O.useCallback(
    (M, _) => {
      i.current.set(M, _);
    },
    []
  ), f = O.useCallback((M) => {
    i.current.delete(M);
  }, []), h = O.useCallback(
    (M, _) => {
      if (!a) return;
      const { xScale: b, yScale: w } = a;
      let k = null, j = 1 / 0;
      i.current.forEach((F, E) => {
        F.forEach(($, I) => {
          const H = b($.x), oe = w($.y), Y = H - M, R = oe - _, ee = Math.sqrt(Y * Y + R * R);
          ee < j && (j = ee, k = {
            seriesId: E,
            index: I,
            x: $.x,
            y: $.y,
            clientX: H,
            clientY: oe
          });
        });
      }), k && j <= t ? l(k) : l(null);
    },
    [a, t]
  ), p = O.useCallback(() => l(null), []);
  O.useEffect(() => {
    if (!s) {
      d([]);
      return;
    }
    if (!a) return;
    const { xScale: M, yScale: _ } = a, b = [];
    i.current.forEach((w, k) => {
      w.forEach((j, F) => {
        (s.x instanceof Date && j.x instanceof Date ? j.x.getTime() === s.x.getTime() : j.x === s.x) && b.push({
          seriesId: k,
          index: F,
          x: j.x,
          y: j.y,
          clientX: M(j.x),
          clientY: _(j.y)
        });
      });
    }), b.sort((w, k) => w.seriesId.localeCompare(k.seriesId)), d(b);
  }, [s, a]);
  const y = O.useCallback(
    (M) => {
      if (!s) return;
      const _ = i.current.get(s.seriesId);
      if (!_) return;
      let b = s.index + M;
      if (b < 0 || b >= _.length) {
        if (!n) return;
        b = (b + _.length) % _.length;
      }
      const w = _[b];
      if (!a) return;
      const { xScale: k, yScale: j } = a;
      l({
        seriesId: s.seriesId,
        index: b,
        x: w.x,
        y: w.y,
        clientX: k(w.x),
        clientY: j(w.y)
      });
    },
    [s, a, n]
  ), g = O.useCallback(
    (M) => {
      let _ = Array.from(i.current.keys());
      if (o && (_ = _.filter((H) => !o.isHidden(H))), _.length === 0) return;
      if (!s) {
        const H = _[0], oe = i.current.get(H);
        if (!oe || !a) return;
        const { xScale: Y, yScale: R } = a, ee = oe[0];
        l({
          seriesId: H,
          index: 0,
          x: ee.x,
          y: ee.y,
          clientX: Y(ee.x),
          clientY: R(ee.y)
        });
        return;
      }
      const b = _.indexOf(s.seriesId);
      if (b === -1) return;
      let w = b + M;
      if (w < 0 || w >= _.length) {
        if (!n) return;
        w = (w + _.length) % _.length;
      }
      const k = _[w], j = i.current.get(k);
      if (!j || !a) return;
      const F = Math.min(s.index, j.length - 1), E = j[F], { xScale: $, yScale: I } = a;
      l({
        seriesId: k,
        index: F,
        x: E.x,
        y: E.y,
        clientX: $(E.x),
        clientY: I(E.y)
      });
    },
    [s, a, n, o]
  ), m = O.useCallback(() => {
    let M = Array.from(i.current.keys());
    if (o && (M = M.filter((F) => !o.isHidden(F))), M.length === 0) return;
    const _ = s ? s.seriesId : M[0], b = i.current.get(_);
    if (!b || b.length === 0 || !a) return;
    const w = b[0], { xScale: k, yScale: j } = a;
    l({
      seriesId: _,
      index: 0,
      x: w.x,
      y: w.y,
      clientX: k(w.x),
      clientY: j(w.y)
    });
  }, [s, a, o]), A = O.useCallback(() => {
    let M = Array.from(i.current.keys());
    if (o && (M = M.filter((E) => !o.isHidden(E))), M.length === 0) return;
    const _ = s ? s.seriesId : M[0], b = i.current.get(_);
    if (!b || b.length === 0 || !a) return;
    const w = b.length - 1, k = b[w], { xScale: j, yScale: F } = a;
    l({
      seriesId: _,
      index: w,
      x: k.x,
      y: k.y,
      clientX: j(k.x),
      clientY: F(k.y)
    });
  }, [s, a, o]), C = O.useCallback(
    () => y(1),
    [y]
  ), L = O.useCallback(
    () => y(-1),
    [y]
  ), D = O.useCallback(
    () => g(1),
    [g]
  ), x = O.useCallback(
    () => g(-1),
    [g]
  ), N = O.useMemo(
    () => ({
      focused: s,
      setFocused: l,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: C,
      focusPrevPoint: L,
      focusNextSeries: D,
      focusPrevSeries: x,
      focusFirstPoint: m,
      focusLastPoint: A
    }),
    [
      s,
      c,
      h,
      p,
      u,
      f,
      C,
      L,
      D,
      x,
      m,
      A
    ]
  );
  return /* @__PURE__ */ r.jsx(Bl.Provider, { value: N, children: e });
}, Im = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: l,
  visibilityMode: i = "remove",
  strokeWidth: c = 1,
  smooth: d = !0,
  gradientFillId: u,
  colors: f
}) => {
  const h = _n();
  if (!h) return null;
  const { xScale: p, yScale: y } = h, m = dr()?.isHidden(e.id) ?? !1, A = m && i === "fade";
  if (m && i === "remove")
    return null;
  const C = Kt();
  O.useEffect(() => {
    if (!C) return;
    const _ = e.data.map((b) => ({ x: l(b), y: b.y }));
    return C.registerSeries(e.id, _), () => C.unregisterSeries(e.id);
  }, [C, e.id, e.data, l]);
  const L = O.useMemo(
    () => uo(
      e.data,
      (_) => p(l(_)),
      (_) => y(_.y),
      { smooth: d }
    ),
    [e.data, p, y, l, d]
  ), D = O.useMemo(() => {
    if (!e.data.length) return "";
    const [_] = y.domain(), b = co().x((w) => p(l(w))).y0(() => y(_)).y1((w) => y(w.y));
    return d && b.curve(Hr), b(e.data) || "";
  }, [e.data, p, y, l, d]), x = f && f[t], N = e.color || x || (n === "region" ? An(e.id, t) : $t(t)), M = n === "region" ? zr(e.id, t) : vn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: A ? 0.25 : 1,
      "aria-hidden": A ? !0 : void 0,
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
            stroke: N,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        a && e.data.map((_, b) => {
          const w = p(l(_)), k = y(_.y), j = o ? 0 : -1, F = !A && (o && b === s || C?.focused?.seriesId === e.id && C.focused.index === b), E = () => {
            C && !A && C.setFocused({
              seriesId: e.id,
              index: b,
              x: l(_),
              y: _.y,
              clientX: w,
              clientY: k
            });
          }, $ = () => {
            C && C.focused?.seriesId === e.id && C.focused.index === b && C.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: w,
              cy: k,
              r: F ? 5 : 3.5,
              stroke: F ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : M,
              strokeWidth: F ? 2 : 1,
              fill: F ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : N,
              className: "fdp-line-point",
              tabIndex: A ? -1 : j,
              "aria-label": `${e.label || e.id} ${l(_).toDateString()} value ${_.y}`,
              "data-series": e.id,
              "data-index": b,
              onMouseEnter: E,
              onFocus: E,
              onMouseLeave: $,
              onBlur: $
            },
            b
          );
        })
      ]
    }
  );
}, Dm = ({ polite: e = !0, format: t }) => {
  const n = Kt(), [a, o] = O.useState(""), s = O.useRef("");
  return O.useEffect(() => {
    if (!n?.focused) return;
    const { focused: l, aggregated: i } = n;
    let c;
    if (i && i.length > 1) {
      const d = i.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${l.x instanceof Date ? l.x.toDateString() : String(l.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: l.seriesId, x: l.x, y: l.y, index: l.index }) : Tm(l.seriesId, l.x, l.y, l.index);
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
function Tm(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const Jy = () => {
  const e = Kt(), t = ln();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, l = Math.min(Math.max(n.clientX, 0), o), i = Math.min(Math.max(n.clientY, 0), s), c = l + 8, d = i - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), y = p ? parseInt(p[0], 10) - 1 : 0, g = $t(y >= 0 ? y : 0) || "#005eb8", m = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: l, cy: i, r: 7, fill: "none", stroke: m, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: l, cy: i, r: 5, fill: "#000", stroke: m, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: l, cy: i, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const C = a.map((M) => `${M.seriesId}: ${M.y}`), L = [h, ...C], D = L.reduce((M, _) => Math.max(M, _.length), 0), x = Math.max(90, D * 6.2 + 16), N = 16 * L.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: d - N, rx: 4, ry: 4, width: x, height: N, fill: "#212b32", opacity: 0.92 }),
        L.map((M, _) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - N + 6 + 16 * (_ + 0.7), fill: "#fff", fontSize: 12, children: M }, _))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, qy = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: l = [],
  onVisibilityChange: i,
  formatAnnouncement: c
}) => {
  const d = dr(), u = !!(d && !a && !i && s === void 0), f = a || u, h = e || [], p = s !== void 0, [y, g] = O.useState(new Set(l)), m = p ? new Set(s) : y, [A, C] = O.useState(""), L = (D) => {
    if (u && d) {
      const j = d.isHidden(D);
      d.toggle(D);
      const E = h.find((I) => I.id === D)?.label || D, $ = c ? c(D, j, E) : `${E} ${j ? "shown" : "hidden"}`;
      C($);
      return;
    }
    if (!f) return;
    const x = new Set(m), N = x.has(D);
    N ? x.delete(D) : x.add(D), p || g(x);
    const M = h.filter((j) => !x.has(j.id)).map((j) => j.id), _ = Array.from(x);
    i?.(M, _);
    const w = h.find((j) => j.id === D)?.label || D, k = c ? c(D, N, w) : `${w} ${N ? "shown" : "hidden"}`;
    C(k);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((D, x) => {
      const N = D.palette || t, M = D.color || (N === "region" ? An(D.id, x) : N === "severity" ? mm(D.id, x) : N === "org-level" ? vm(D.id, x) : $t(x));
      let _ = D.stroke || (N === "region" ? zr(D.id, x) : N === "severity" ? xm(D.id, x) : N === "org-level" ? Sm(D.id, x) : vn(x));
      if (o && _) {
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
              backgroundColor: M,
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
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: A })
  ] });
}, Xy = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: l = 0,
  smooth: i = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = _n();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, g = dr()?.isHidden(e.id) ?? !1, m = g && s === "fade";
  if (g && s === "remove") return null;
  const A = Kt();
  O.useEffect(() => {
    if (!A) return;
    const M = e.data.map((_) => ({ x: a(_), y: _.y }));
    return A.registerSeries(e.id, M), () => A.unregisterSeries(e.id);
  }, [A, e.id, e.data, a]);
  const C = u && u[t], L = e.color || C || (n === "region" ? An(e.id, t) : $t(t)), D = O.useMemo(() => c && c.length === e.data.length ? uo(
    e.data,
    (M) => h(a(M)),
    (M) => {
      const _ = e.data.indexOf(M);
      return p(c[_].y1);
    },
    { smooth: i }
  ) : uo(
    e.data,
    (M) => h(a(M)),
    (M) => p(M.y),
    { smooth: i }
  ), [e.data, c, h, p, a, i]), x = O.useMemo(() => {
    if (c && c.length === e.data.length) {
      const k = co().x((j) => h(a(j))).y0((j, F) => p(c[F].y0)).y1((j, F) => p(c[F].y1));
      return i && k.curve(Hr), k(e.data) || "";
    }
    const [M, _] = p.domain();
    let b = l;
    b < M ? b = M : b > _ && (b = _);
    const w = co().x((k) => h(a(k))).y0(() => p(b)).y1((k) => p(k.y));
    return i && w.curve(Hr), w(e.data) || "";
  }, [e.data, c, h, p, a, l, i]), N = O.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: m ? 0.25 : 1,
      "aria-hidden": m ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: N, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: L, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: L, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: x,
            fill: d ? `url(#${N})` : L,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: D, fill: "none", stroke: L, strokeWidth: 1 })
      ]
    }
  );
}, Qy = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: o,
  focusable: s = !0,
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
  gradientFill: A = !0,
  gradientStrokeMatch: C = !0,
  opacity: L = 1,
  fadedOpacity: D = 0.25,
  flatFillOpacity: x = 1,
  colors: N
}) => {
  const M = Math.max(0, g), _ = _n(), b = ln();
  if (!_ || !b) return null;
  const { xScale: w, yScale: k } = _, F = dr()?.isHidden(e.id) ?? !1, E = F && f === "fade";
  if (F && f === "remove") return null;
  const $ = Kt();
  O.useEffect(() => {
    if (!$) return;
    const K = e.data.map((te) => ({ x: o(te), y: te.y }));
    return $.registerSeries(e.id, K), () => $.unregisterSeries(e.id);
  }, [$, e.id, e.data, o]);
  const I = typeof w.bandwidth == "function", H = I ? w.bandwidth() : void 0, oe = O.useMemo(() => {
    if (H != null) return H;
    const K = p && p.length ? p : [e], te = [];
    K.forEach((ae) => {
      ae.data.forEach((ce) => {
        const le = w(o(ce));
        Number.isFinite(le) && te.push(le);
      });
    });
    const ie = te.sort((ae, ce) => ae - ce);
    if (ie.length <= 1) return 40;
    const U = [];
    for (let ae = 1; ae < ie.length; ae++)
      U.push(ie[ae] - ie[ae - 1]);
    return U.sort((ae, ce) => ae - ce), (U[Math.floor(U.length / 2)] || 40) * l;
  }, [e.data, p, w, o, l, H]), { basePerBar: Y } = O.useMemo(() => {
    if (I) {
      const ie = oe, U = Math.max(
        1,
        (ie - i * (n - 1)) / n
      ), se = e.barWidth ?? c;
      let ae = se ? Math.min(se, ie) : U;
      if (d) {
        const ce = ie * Math.min(1, Math.max(0.05, u)), le = Math.max(
          1,
          (ce - i * (n - 1)) / n
        );
        ae = se ? Math.min(ae, le) : le;
      }
      return { basePerBar: ae };
    }
    const K = e.barWidth ?? c, te = Math.max(
      1,
      (oe - i * (n - 1)) / n
    );
    if (d) {
      const ie = p && p.length ? p : [e], U = [];
      ie.forEach(
        (De) => De.data.forEach((Ce) => {
          const ge = w(o(Ce));
          Number.isFinite(ge) && U.push(ge);
        })
      ), U.sort((De, Ce) => De - Ce);
      const se = [];
      for (let De = 1; De < U.length; De++)
        se.push(U[De] - U[De - 1]);
      se.sort((De, Ce) => De - Ce);
      const ce = (se[Math.floor(se.length / 2)] || oe) * Math.min(1, Math.max(0.05, u)), le = Math.max(
        1,
        (ce - i * (n - 1)) / n
      );
      return { basePerBar: K ? Math.min(K, le) : le };
    }
    return K ? { basePerBar: Math.min(K, te) } : { basePerBar: te };
  }, [
    I,
    oe,
    i,
    n,
    c,
    e.barWidth,
    d,
    u,
    p,
    w,
    o
  ]), R = O.useMemo(() => {
    if (I) return [];
    const K = [];
    return (p && p.length ? p : [e]).forEach(
      (ie) => ie.data.forEach((U) => {
        const se = w(o(U));
        Number.isFinite(se) && K.push(se);
      })
    ), K.sort((ie, U) => ie - U), Array.from(new Set(K));
  }, [I, p, e, w, o]), ee = O.useMemo(() => {
    if (I)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: b.innerWidth }
      ];
    const K = [];
    for (let te = 0; te < R.length; te++) {
      const ie = R[te], U = te === 0 ? 0 : (R[te - 1] + ie) / 2, se = te === R.length - 1 ? b.innerWidth : (ie + R[te + 1]) / 2;
      K.push({
        center: ie,
        left: Math.max(0, U),
        right: Math.min(b.innerWidth, se)
      });
    }
    return K;
  }, [I, R, b.innerWidth]), W = O.useMemo(() => {
    if (I || !ee.length)
      return;
    const K = Math.min(1, Math.max(0.05, l)), te = ee.map((ce) => Math.max(2, ce.right - ce.left)), ie = te.map(
      (ce) => Math.max(2, Math.min(ce - 1, ce * K))
    );
    let U = Math.min(...ie);
    if (m)
      if (n <= 1) {
        const ce = Math.min(...te.map((le) => le - 1));
        ce >= m && U < m && (U = Math.min(ce, m));
      } else {
        const ce = Math.min(...te.map((ve) => ve - 1)), le = m * n + (n - 1) * (m * M);
        le <= ce && U < le && (U = le);
      }
    if (n <= 1)
      return m && U < m && te.every((le) => le >= m) ? { groupWidth: m, barWidth: m } : { groupWidth: U, barWidth: U };
    let se = U / (n + (n - 1) * M);
    return se < 1 && (se = 1), m && se < m && m * n + (n - 1) * (m * M) <= U && (se = m), { groupWidth: se * n + (n - 1) * (se * M), barWidth: se };
  }, [
    I,
    ee,
    l,
    n,
    M,
    m
  ]), X = N && N[t] ? N[t] : void 0, q = e.color || X || (a === "region" ? An(e.id, t) : $t(t)), Q = a === "region" ? zr(e.id, t) : vn(t), fe = C && (e.color || X) ? q : Q, ne = Number.isFinite(k(0)) ? k(0) : k.range()[0], re = O.useId();
  return y && y.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: E ? D : L,
      "aria-hidden": E ? !0 : void 0,
      children: [
        A && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: re,
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
        e.data.map((K, te) => {
          const ie = o(K), U = w(I ? K.x : ie);
          let se, ae;
          if (I)
            se = oe, ae = U;
          else {
            const T = ee.find(
              (B) => Math.abs(B.center - U) < 0.5
            );
            if (!T || !W)
              se = Y, ae = U - Y / 2;
            else {
              const { groupWidth: B } = W;
              se = B;
              let S = U - B / 2;
              S < T.left && (S = T.left), S + B > T.right && (S = Math.max(T.left, T.right - B)), ae = S;
            }
          }
          const ce = y[te], le = k(ce.y0), ve = k(ce.y1), De = Math.min(le, ve), Ce = Math.abs(ve - le) || 1;
          if (!I && m && se < m) {
            const T = ee.find(
              (B) => Math.abs(B.center - U) < 0.5
            );
            if (T) {
              const B = Math.max(2, T.right - T.left - 1), S = Math.min(B, m);
              S > se && (se = S, ae = Math.max(
                T.left,
                Math.min(T.right - se, U - se / 2)
              ));
            }
          }
          const ge = !E && $?.focused?.seriesId === e.id && $.focused.index === te, G = () => {
            !$ || E || $.setFocused({
              seriesId: e.id,
              index: te,
              x: ie,
              y: ce.y1 - ce.y0,
              clientX: ae + se / 2,
              clientY: De
            });
          }, v = () => {
            $?.focused?.seriesId === e.id && $.focused.index === te && $.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ae,
              y: De,
              width: se,
              height: Ce,
              fill: A ? `url(#${re})` : q,
              ...A ? {} : { fillOpacity: x },
              stroke: ge ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : A && C ? q : void 0,
              strokeWidth: ge ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: E || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ie instanceof Date ? ie.toDateString() : ie} value ${ce.y1 - ce.y0}`,
              onMouseEnter: G,
              onFocus: G,
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
        A && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: re,
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
          h === "category" && e.data.map((K, te) => {
            const U = N && N[te] || (a === "region" ? An(String(K.x), te) : $t(te)), se = `${re}-${te}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: se,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: U, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: U, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: U, stopOpacity: 0.06 })
                ]
              },
              se
            );
          })
        ] }),
        e.data.map((K, te) => {
          const ie = o(K), U = w(I ? K.x : ie);
          let se, ae;
          if (I) {
            const z = oe;
            if (n <= 1)
              ae = z, se = U;
            else {
              ae = Math.max(
                1,
                z / (n + (n - 1) * M)
              );
              const V = ae * M, Z = ae * n + V * (n - 1);
              se = U + (z - Z) / 2 + t * (ae + V);
            }
          } else {
            const z = ee.find((V) => V.center === U);
            if (!z || !W)
              ae = Y, se = U - Y / 2, m && ae < m && (ae = m, se = U - ae / 2);
            else {
              const { barWidth: V } = W;
              ae = V;
              const Z = n > 1 ? V * M : 0, J = ae * n + Z * (n - 1);
              let ue = U - J / 2;
              ue < z.left && (ue = z.left), ue + J > z.right && (ue = Math.max(z.left, z.right - J)), se = ue + t * (ae + Z);
            }
            if (m && ae < m) {
              const V = ee.find(
                (Z) => Math.abs(Z.center - U) < 0.5
              );
              if (V) {
                const Z = Math.max(2, V.right - V.left - 1), J = Math.min(Z, m);
                if (J > ae)
                  if (n <= 1)
                    ae = J, se = Math.max(
                      V.left,
                      Math.min(V.right - ae, U - ae / 2)
                    );
                  else {
                    const ue = J * M, de = J * n + ue * (n - 1);
                    if (de <= V.right - V.left - 1) {
                      ae = J;
                      const xe = de;
                      let we = U - xe / 2;
                      we < V.left && (we = V.left), we + xe > V.right && (we = Math.max(
                        V.left,
                        V.right - xe
                      )), se = we + t * (ae + ue);
                    }
                  }
              }
            }
          }
          const ce = se + ae / 2, le = k(K.y), ve = Math.min(ne, le), De = Math.abs(ne - le), Ce = !E && $?.focused?.seriesId === e.id && $.focused.index === te, ge = () => {
            !$ || E || $.setFocused({
              seriesId: e.id,
              index: te,
              x: ie,
              y: K.y,
              clientX: ce,
              clientY: le
            });
          }, G = () => {
            $?.focused?.seriesId === e.id && $.focused.index === te && $.clear();
          }, v = h === "category" && N ? N[te] : void 0, T = h === "category" ? v || (a === "region" ? An(String(K.x), te) : $t(te)) : q, B = h === "category" ? `${re}-${te}` : re, S = A && C ? T : h === "category" ? a === "region" ? zr(String(K.x), te) : vn(te) : fe, P = Ce ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : S || T;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: se,
              y: ve,
              width: ae,
              height: De || 1,
              fill: A ? `url(#${B})` : T,
              ...A ? {} : { fillOpacity: x },
              stroke: P,
              strokeWidth: Ce ? 2 : 1,
              className: "fdp-bar",
              tabIndex: E || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ie instanceof Date ? ie.toDateString() : ie} value ${K.y}`,
              onMouseEnter: ge,
              onFocus: ge,
              onMouseLeave: G,
              onBlur: G
            },
            te
          );
        })
      ]
    }
  );
}, Ky = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: l = 5
}) => {
  const i = ln(), c = t ?? i?.innerWidth ?? 0, d = n ?? i?.innerHeight ?? 0, u = O.useMemo(() => e.flatMap((m) => m.data), [e]), f = O.useMemo(() => {
    const m = /* @__PURE__ */ new Set();
    return u.forEach((A) => m.add(A.x)), Array.from(m);
  }, [u]), h = O.useMemo(
    () => Math.max(0, ...u.map((m) => m.y)),
    [u]
  ), p = O.useMemo(
    () => Gi().domain(f).range([0, c]).paddingInner(a).paddingOuter(o),
    [f, c, a, o]
  ), y = O.useMemo(
    () => Lr().domain([0, h]).nice().range([d, 0]),
    [h, d]
  ), g = O.useMemo(
    () => ({
      xScale: p,
      yScale: y,
      getXTicks: () => f,
      getYTicks: (m = l) => y.ticks(m)
    }),
    [p, y, f, l]
  );
  return /* @__PURE__ */ r.jsx(es.Provider, { value: g, children: s });
}, e1 = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: l = "Interactive chart loading…",
  forceFallback: i = !1
}) => {
  const c = O.useId(), d = s || c, u = t ? `${d}-desc` : void 0, f = n ? `${d}-src` : void 0, h = typeof window < "u" && !i;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: d,
      className: Rr("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Rr(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: l }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(Qt, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(Qt, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, t1 = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = O.useRef(null);
  return O.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const l = () => {
      const i = Array.from(s.querySelectorAll(e));
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
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: o, children: a });
}, Lm = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
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
  const A = O.useId(), C = y || A, L = `${C}-label`, D = `${C}-value`, x = `${C}-delta`, N = typeof t == "number" && !Number.isNaN(t), M = d ? "—" : u ? "" : N ? f ? f(t) : t.toLocaleString() : t;
  let _, b = "", w = "";
  if (a && !d && !u) {
    _ = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const k = Math.abs(a.value), j = _ === "up" ? `+${k}` : _ === "down" ? `-${k}` : "0", F = a.isPercent ? "%" : "";
    if (b = `${j}${F}`, a.ariaLabel)
      w = a.ariaLabel;
    else {
      const E = a.invert ? _ === "down" : _ === "up";
      w = `${_ === "neutral" ? "no change" : _ === "up" ? "up" : "down"} ${k}${F}${_ === "neutral" ? "" : E ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Rr(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
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
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: M }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            l && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: l })
          ] }),
          a && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: x,
              "aria-label": w,
              className: Rr(
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
var ot = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(ot || {}), Hl = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Hl || {}), on = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(on || {}), Le = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Le || {});
const ts = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
ts.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const $m = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Am = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, zl = ts.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: $m[t],
    category: Am[t],
    participatesInRanking: !0
  }, e),
  {}
);
ts.map(
  (e) => zl[e]
);
var or = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(or || {}), sn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(sn || {}), Ol = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Ol || {});
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
function Sa(e) {
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
function _a(e) {
  switch (e) {
    case Le.Improvement:
      return "Improvement signal";
    case Le.Concern:
      return "Concern signal";
    case Le.Neither:
      return "Common cause variation";
    case Le.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Ul(e) {
  switch (e) {
    case sn.Pass:
      return "Target met";
    case sn.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Em(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Nt = {
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
function Wl(e) {
  return e ? Nt[e]?.token ?? Nt.neither.token : Nt.neither.token;
}
function Pm(e) {
  return e ? Nt[e]?.hex ?? Nt.neither.hex : Nt.neither.hex;
}
var mn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(mn || {});
const Fm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Rm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var st = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(st || {}), Me = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Me || {}), vt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(vt || {}), _e = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(_e || {});
const Bm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (i) => i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, ka = {
  special_cause_deteriorating: {
    hex: Nt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Nt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Nt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Nt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(ka).forEach((e) => {
  e.text || (e.text = Bm(e.hex));
});
const Gl = (e) => ka[e], ns = (e) => ka[e].judgement || "none", di = {
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
function Hm(e, t) {
  let n;
  return e === "common_cause" ? n = di.common : n = di.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
let ho = null;
try {
  ho = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const gt = (e, t) => {
  if (!ho) return t;
  const n = e.split(".");
  let a = ho;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Ca = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: gt("gradient.stop.start-opacity", "0.12"),
  mid: gt("gradient.stop.mid-opacity", "0.03"),
  end: gt("gradient.stop.end-opacity", "0"),
  triStart: gt(
    "gradient.stop.triangle-start-opacity",
    gt("gradient.stop.start-opacity", "0.12")
  ),
  triMid: gt(
    "gradient.stop.triangle-mid-opacity",
    gt("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: gt(
    "gradient.stop.triangle-end-opacity",
    gt("gradient.stop.end-opacity", "0")
  )
}), Na = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, ja = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, Vl = () => gt(Na.improvement, ja.improvement), Yl = () => gt(Na.concern, ja.concern), zm = () => gt(Na.noJudgement, ja.noJudgement), fn = () => gt(Na.common, ja.common);
function vr(e) {
  switch (e) {
    case Le.Improvement:
      return Vl();
    case Le.Concern:
      return Yl();
    case Le.Neither:
    case Le.Suppressed:
    default:
      return fn();
  }
}
function Zl(e) {
  switch (e) {
    case _e.SpecialCauseImproving:
      return Vl();
    case _e.SpecialCauseDeteriorating:
      return Yl();
    case _e.SpecialCauseNoJudgement:
      return zm();
    case _e.CommonCause:
    default:
      return fn();
  }
}
var St = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(St || {}), Ae = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ae || {}), Se = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Se || {}), Xe = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(Xe || {}), gn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(gn || {}), Dt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Dt || {}), Pn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Pn || {}), Dn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Dn || {}), ht = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(ht || {}), Pt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Pt || {}), Tt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Tt || {}), Or = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Or || {}), Ur = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Ur || {});
const rn = {
  [Xe.SinglePoint]: 1,
  [Xe.TwoSigma]: 2,
  [Xe.Shift]: 3,
  [Xe.Trend]: 4
}, ui = 3.267, Om = 2.66, fi = 0.2777;
function Ne(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Tn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function pi(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!(t[o] || !Ne(s))) {
      if (a !== null) {
        const l = e[a];
        Ne(l) && (n[o] = Math.abs(s - l));
      }
      a = o;
    }
  }
  return n;
}
function hi(e, t) {
  const n = e.filter(Ne);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = Tn(a), l = ui * s;
    a = a.filter((i) => i <= l);
  }
  const o = Tn(a);
  return { mrMean: o, mrUcl: ui * o };
}
function mi(e, t) {
  if (!Ne(e) || !Ne(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Om * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function Um(e, t, n, a) {
  if (e === St.T) {
    const f = t.map((_) => Ne(_) && _ > 0 ? Math.pow(_, fi) : null), h = pi(f, n), p = hi(h, a), y = f.filter((_, b) => !n[b] && Ne(_)), g = y.length ? Tn(y) : NaN, m = mi(g, p.mrMean), A = (_) => Ne(_) && _ > 0 ? Math.pow(_, 1 / fi) : null, C = Ne(m.upperProcessLimit) ? A(m.upperProcessLimit) : null, L = Ne(m.lowerProcessLimit) && m.lowerProcessLimit > 0 ? A(m.lowerProcessLimit) : null, D = Ne(m.upperTwoSigma) ? A(m.upperTwoSigma) : null, x = Ne(m.lowerTwoSigma) && m.lowerTwoSigma > 0 ? A(m.lowerTwoSigma) : null, N = Ne(m.upperOneSigma) ? A(m.upperOneSigma) : null, M = Ne(m.lowerOneSigma) && m.lowerOneSigma > 0 ? A(m.lowerOneSigma) : null;
    return {
      mean: Ne(g) && g > 0 ? A(g) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: C,
      lowerProcessLimit: L,
      upperTwoSigma: D,
      lowerTwoSigma: x,
      upperOneSigma: N,
      lowerOneSigma: M
    };
  }
  if (e === St.G) {
    const f = t.filter((k, j) => !n[j] && Ne(k)), h = f.length ? Tn(f) : NaN, p = Ne(h) ? 1 / (h + 1) : NaN, y = (k) => {
      if (!Ne(p) || p <= 0 || p >= 1) return NaN;
      const j = Math.ceil(Math.log(1 - k) / Math.log(1 - p)) - 1;
      return Math.max(0, j);
    }, g = 135e-5, m = 1 - 135e-5, A = 0.02275, C = 1 - 0.02275, L = 0.158655, D = 1 - 0.158655, x = y(m), N = y(g), M = y(C), _ = y(A), b = y(D), w = y(L);
    return {
      mean: Ne(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Ne(x) ? x : null,
      lowerProcessLimit: Ne(N) ? N : null,
      upperTwoSigma: Ne(M) ? M : null,
      lowerTwoSigma: Ne(_) ? _ : null,
      upperOneSigma: Ne(b) ? b : null,
      lowerOneSigma: Ne(w) ? w : null
    };
  }
  if (e !== St.XmR)
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
  const o = pi(t, n), s = o.filter(Ne), l = s.length ? Tn(s) : NaN, i = Ne(l) ? 3.267 * l : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, y) => {
      if (n[y] || !Ne(p)) return h;
      if (!a)
        return h.push(p), h;
      const g = o[y];
      return (g === null || !Ne(i) || Ne(g) && g <= i) && h.push(p), h;
    }, []);
    c = f.length ? Tn(f) : NaN;
  }
  const d = hi(o, a), u = mi(c, d.mrMean);
  return {
    mean: c,
    mr: o,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function Wm(e, t) {
  const n = e.map((c, d) => d).filter((c) => !e[c].ghost && Ne(e[c].value)), a = (c) => e[c], o = t.shiftPoints, s = t.trendPoints;
  let l = [], i = [];
  for (const c of n) {
    const d = a(c);
    if (!Ne(d.mean) || !Ne(d.value) ? (l = [], i = []) : d.value > d.mean ? (l.push(c), i = []) : d.value < d.mean ? (i.push(c), l = []) : (l = [], i = []), l.length >= o)
      for (const u of l) a(u).shiftUp = !0;
    if (i.length >= o)
      for (const u of i) a(u).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const u = n.slice(c, c + 3).map(a);
    if (!u.every((D) => Ne(D.value) && Ne(D.mean)))
      continue;
    const f = u[0].mean, h = u.every((D) => D.value > f), p = u.every((D) => D.value < f);
    if (!h && !p)
      continue;
    const y = u[0].upperTwoSigma ?? 1 / 0, g = u[0].lowerTwoSigma ?? -1 / 0, m = u[0].upperProcessLimit ?? 1 / 0, A = u[0].lowerProcessLimit ?? -1 / 0, C = u.filter((D) => t.twoSigmaIncludeAboveThree ? D.value > y : D.value > y && D.value <= m), L = u.filter((D) => t.twoSigmaIncludeAboveThree ? D.value < g : D.value < g && D.value >= A);
    h && C.length >= 2 && C.forEach((D) => D.twoSigmaUp = !0), p && L.length >= 2 && L.forEach((D) => D.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const u = n.slice(c, c + 5).map(a);
      if (!u.every((C) => Ne(C.value) && Ne(C.mean)))
        continue;
      const f = u[0].mean, h = u.every((C) => C.value > f), p = u.every((C) => C.value < f);
      if (!h && !p)
        continue;
      const y = u[0].upperOneSigma ?? 1 / 0, g = u[0].lowerOneSigma ?? -1 / 0, m = u.filter((C) => C.value > y), A = u.filter((C) => C.value < g);
      h && m.length >= 4 && m.forEach((C) => C.fourOfFiveUp = !0), p && A.length >= 4 && A.forEach((C) => C.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - s; c++) {
    const d = n.slice(c, c + s), u = d.map(a);
    if (!u.every((p) => Ne(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => a(p).trendUp = !0), h && d.forEach((p) => a(p).trendDown = !0);
  }
}
function Jl(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: Xe.SinglePoint,
    rank: rn[Xe.SinglePoint]
  }), e.singlePointDown && n.push({
    id: Xe.SinglePoint,
    rank: rn[Xe.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: Xe.TwoSigma,
    rank: rn[Xe.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: Xe.TwoSigma,
    rank: rn[Xe.TwoSigma]
  }), e.shiftUp && t.push({ id: Xe.Shift, rank: rn[Xe.Shift] }), e.shiftDown && n.push({ id: Xe.Shift, rank: rn[Xe.Shift] }), e.trendUp && t.push({ id: Xe.Trend, rank: rn[Xe.Trend] }), e.trendDown && n.push({ id: Xe.Trend, rank: rn[Xe.Trend] });
  const a = t.reduce((l, i) => Math.max(l, i.rank), 0), o = n.reduce((l, i) => Math.max(l, i.rank), 0), s = a > o ? gn.Upwards : o > a ? gn.Downwards : gn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function gi(e, t) {
  const n = t === Ae.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Ae.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Ae.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Ae.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function xi(e, t, n, a = !1, o, s, l = !1) {
  const { up: i, dn: c, upMax: d, dnMax: u, primeDirection: f } = Jl(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Gm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: l, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === Ae.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Se.ImprovementHigh : e.specialCauseConcernValue !== null ? Se.ConcernLow : Se.CommonCause : t === Ae.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Se.ImprovementLow : e.specialCauseConcernValue !== null ? Se.ConcernHigh : Se.CommonCause : e.variationIcon = Se.CommonCause;
  const y = e.specialCauseImprovementValue !== null ? Dt.Up : e.specialCauseConcernValue !== null ? Dt.Down : void 0, g = y === Dt.Up ? d : y === Dt.Down ? u : Math.max(d, u);
  e.primeRank = g || void 0;
  const m = y === Dt.Up ? i.find((A) => A.rank === g) : y === Dt.Down ? c.find((A) => A.rank === g) : void 0;
  return e.primeRuleId = m?.id, { originalImprovement: h, originalConcern: p };
}
function Gm(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: l = t.primeDirection ?? gn.Same,
    conflictStrategy: i,
    ruleHierarchy: c
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
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
  const d = o ? Dn.PreferImprovement : i ?? Dn.SqlPrimeThenRule;
  if (d === Dn.PreferImprovement) {
    n === Ae.Up ? t.specialCauseConcernValue = null : n === Ae.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === Dn.RuleHierarchy) {
    const u = c ?? [Xe.Trend, Xe.Shift, Xe.TwoSigma, Xe.SinglePoint], { up: f, dn: h } = Jl(t);
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
        (n === Ae.Up || n === Ae.Down) && (a === Pn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  l === gn.Upwards ? n === Ae.Up ? t.specialCauseConcernValue = null : n === Ae.Down && (t.specialCauseImprovementValue = null) : l === gn.Downwards ? n === Ae.Up ? t.specialCauseImprovementValue = null : n === Ae.Down && (t.specialCauseConcernValue = null) : a === Pn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var mo = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(mo || {});
function Vm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Ym(e) {
  const t = Vm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function bi(e) {
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
  }), o = (l, i, c, d, u, f, h, p) => {
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
  let s = 0;
  for (; s < e.length; ) {
    const l = e[s];
    if (!l || l.value == null || l.ghost || !l.trendUp && !l.trendDown) {
      s++;
      continue;
    }
    const i = l.trendUp ? "Up" : l.trendDown ? "Down" : void 0;
    let c = s, d = s;
    for (; d < e.length; d++) {
      const A = e[d];
      if (!A || A.value == null || A.ghost || !(i === "Up" ? A.trendUp : A.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, y = 1 / 0, g = -1 / 0, m = 0;
    for (let A = c; A <= u; A++) {
      const C = e[A];
      if (C.value == null) continue;
      const L = C.value - (C.mean ?? 0), D = Ym(L);
      if (!D) {
        h !== void 0 && (o(f, h, A - 1, p, y, g, m, i), h = void 0, p = void 0, y = 1 / 0, g = -1 / 0, m = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: y, maxV: g, maxAbsDelta: m } = (() => {
          const x = n(A, D, C.value);
          return {
            segStart: x.segStart,
            segSide: x.segSide,
            minV: x.minV,
            maxV: x.maxV,
            maxAbsDelta: Math.abs(L)
          };
        })());
      else if (D !== p)
        o(f, h, A - 1, p, y, g, m, i), { segStart: h, segSide: p, minV: y, maxV: g, maxAbsDelta: m } = (() => {
          const x = n(A, D, C.value);
          return {
            segStart: x.segStart,
            segSide: x.segSide,
            minV: x.minV,
            maxV: x.maxV,
            maxAbsDelta: Math.abs(L)
          };
        })();
      else {
        const x = a(C.value, Math.abs(L), y, g, m);
        y = x.minV, g = x.maxV, m = x.maxAbsDelta;
      }
    }
    h !== void 0 && o(f, h, u, p, y, g, m, i), t.push({ trendDirection: i, start: c, end: u, segments: f }), s = u + 1;
  }
  return t;
}
function Zm(e) {
  if (e === Ae.Up) return "Above";
  if (e === Ae.Down) return "Below";
}
function Jm(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function yi(e, t) {
  const n = t.strategy ?? ht.CrossingAfterFavourable, a = Zm(t.metricImprovement), o = Jm(a), s = [];
  for (const l of e) {
    if (!a) {
      if (n === ht.ExtremeFavourable || n === ht.CrossingAfterFavourable) {
        const i = l.segments;
        if (i.length === 0) continue;
        let c = i[0];
        for (const d of i)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        s.push(c);
      }
      continue;
    }
    if (n === ht.FavourableSide) {
      s.push(...l.segments.filter((i) => i.side === a));
      continue;
    }
    if (n === ht.UnfavourableSide) {
      s.push(...l.segments.filter((i) => i.side === o));
      continue;
    }
    if (n === ht.CrossingAfterFavourable) {
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
      c && s.push(c);
      continue;
    }
    if (n === ht.CrossingAfterUnfavourable) {
      const i = l.segments;
      let c;
      for (let d = 0; d < i.length; d++) {
        const u = i[d];
        if (u.side === o && d > 0 && i[d - 1].side !== o) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = i.filter((u) => u.side === o);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === ht.ExtremeFavourable) {
      const i = l.segments.filter((d) => d.side === a);
      if (i.length === 0) continue;
      const c = i.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === ht.ExtremeUnfavourable) {
      const i = l.segments.filter((d) => d.side === o);
      if (i.length === 0) continue;
      const c = i.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      s.push(c);
      continue;
    }
    if (n === ht.FirstFavourable) {
      const i = l.segments.find((c) => c.side === a);
      i && s.push(i);
      continue;
    }
    if (n === ht.FirstUnfavourable) {
      const i = l.segments.find((c) => c.side === o);
      i && s.push(i);
      continue;
    }
    if (n === ht.LongestFavourable) {
      const i = l.segments.filter((d) => d.side === a);
      if (i.length === 0) continue;
      const c = i.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === ht.LongestUnfavourable) {
      const i = l.segments.filter((d) => d.side === o);
      if (i.length === 0) continue;
      const c = i.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      s.push(c);
      continue;
    }
    if (n === ht.LastFavourable) {
      const i = l.segments.filter((c) => c.side === a);
      if (i.length === 0) continue;
      s.push(i[i.length - 1]);
      continue;
    }
    if (n === ht.LastUnfavourable) {
      const i = l.segments.filter((c) => c.side === o);
      if (i.length === 0) continue;
      s.push(i[i.length - 1]);
      continue;
    }
  }
  return s;
}
var Je = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(Je || {}), Hn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Hn || {});
function qm(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function ur(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: l, downAny: i } = qm(s);
    if (l && i) return "Improvement";
    switch (s.variationIcon) {
      case Se.ImprovementHigh:
      case Se.ImprovementLow:
        return "Improvement";
      case Se.ConcernHigh:
      case Se.ConcernLow:
        return "Concern";
      case Se.NeitherHigh:
      case Se.NeitherLow: {
        if (a === "Ungated" && n !== Ae.Neither) {
          if (l && !i)
            return n === Ae.Up ? "Improvement" : "Concern";
          if (i && !l)
            return n === Ae.Down ? "Improvement" : "Concern";
        }
        return o ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function Xm(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = ur(e, {
    metricImprovement: t,
    trendVisualMode: Hn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Ae.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), l = Math.max(0, n?.postWindow ?? 3), i = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const p = o[f];
    (p === Je.Common || p === Je.NoJudgement) && (o[f] = h);
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
    for (let N = f - 1; N >= 0; N--) {
      const M = e[N];
      if (M.partitionId !== h.partitionId) break;
      if (typeof M.mean == "number") {
        m = M.mean;
        break;
      }
    }
    let A = null;
    for (let N = f; N < e.length; N++) {
      const M = e[N];
      if (M.partitionId !== p.partitionId) break;
      if (typeof M.mean == "number") {
        A = M.mean;
        break;
      }
    }
    if (m == null && (m = d(h.partitionId ?? null)), A == null && (A = d(p.partitionId ?? null)), m == null || A == null)
      continue;
    const C = A - m, L = t === Ae.Up ? C > 0 : C < 0, D = L ? Je.Improvement : Je.Concern, x = i === "Same" ? D : L ? Je.Concern : Je.Improvement;
    for (let N = 1; N <= s; N++) {
      const M = f - N;
      if (M < y) break;
      c(M, x);
    }
    for (let N = 0; N < l; N++) {
      const M = f + N;
      if (M > g) break;
      c(M, D);
    }
  }
  return o;
}
function ql(e) {
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
function fr(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, o = ql(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Pn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Dn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Pt.Off,
    trendSegmentationStrategy: ht.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, l = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? Pt.Always : o?.trendFavourableSegmentation === !1 ? Pt.Off : s.trendSegmentationMode), i = a.map((g, m) => ({
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
  const u = [], f = (s.trendFavourableSegmentation || l !== Pt.Off) && !s.preferImprovementWhenConflict, h = i.filter((g) => !g.ghost && Ne(g.value)).length, p = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let y = 0;
  for (const g of c) {
    y++;
    const m = g.map((x) => x.value), A = g.map((x) => x.ghost), C = Um(
      t,
      m,
      A,
      !!s.excludeMovingRangeOutliers
    ), L = g.map((x, N) => {
      const M = !x.ghost && Ne(x.value) ? m.slice(0, N + 1).filter((b, w) => !A[w] && Ne(b)).length : 0, _ = p ? !0 : M >= s.minimumPoints;
      return {
        rowId: x.rowId,
        x: x.x,
        value: Ne(x.value) ? x.value : null,
        ghost: x.ghost,
        partitionId: y,
        pointRank: M,
        mean: (_ || p) && Ne(C.mean) ? C.mean : null,
        upperProcessLimit: _ || p ? C.upperProcessLimit : null,
        lowerProcessLimit: _ || p ? C.lowerProcessLimit : null,
        upperTwoSigma: _ || p ? C.upperTwoSigma : null,
        lowerTwoSigma: _ || p ? C.lowerTwoSigma : null,
        upperOneSigma: _ || p ? C.upperOneSigma : null,
        lowerOneSigma: _ || p ? C.lowerOneSigma : null,
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
        variationIcon: Se.CommonCause
      };
    });
    for (const x of L)
      x.ghost || !Ne(x.value) || x.mean === null || (Ne(x.upperProcessLimit) && x.value > x.upperProcessLimit && (x.singlePointUp = !0), Ne(x.lowerProcessLimit) && x.value < x.lowerProcessLimit && (x.singlePointDown = !0));
    Wm(L, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((x) => {
      const N = x.some(
        (k) => (k.singlePointUp || k.twoSigmaUp || k.shiftUp || k.trendUp) && (k.singlePointDown || k.twoSigmaDown || k.shiftDown || k.trendDown)
      );
      if (l === Pt.Off || l === Pt.AutoWhenConflict && !N)
        return;
      const M = bi(x), _ = yi(M, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), b = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
      for (const k of _)
        for (let j = k.start; j <= k.end; j++)
          k.trendDirection === mo.Up ? b.add(j) : w.add(j);
      x.forEach((k, j) => {
        k.trendUp = b.has(j) ? k.trendUp : !1, k.trendDown = w.has(j) ? k.trendDown : !1, s.trendDominatesHighlightedWindow && (b.has(j) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : w.has(j) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
      });
    })(L);
    for (const x of L) {
      if (x.ghost || !Ne(x.value) || x.mean === null) {
        u.push(x);
        continue;
      }
      const { aligned: N, opposite: M } = gi(
        x,
        n
      );
      if (x.specialCauseImprovementValue = N ? x.value : null, x.specialCauseConcernValue = M ? x.value : null, n === Ae.Neither) {
        const _ = x.singlePointUp || x.twoSigmaUp || x.shiftUp || x.trendUp, b = x.singlePointDown || x.twoSigmaDown || x.shiftDown || x.trendDown;
        x.variationIcon = _ ? Se.NeitherHigh : b ? Se.NeitherLow : Se.CommonCause;
      } else
        xi(x, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      u.push(x);
    }
  }
  if (s.trendAcrossPartitions) {
    const g = u.map((m, A) => ({ idx: A, r: m })).filter(({ r: m }) => !m.ghost && Ne(m.value));
    if (g.length >= s.trendPoints)
      for (let m = 0; m <= g.length - s.trendPoints; m++) {
        const A = g.slice(m, m + s.trendPoints).map((x) => x.idx), C = A.map((x) => u[x]);
        if (!C.every((x) => Ne(x.value))) continue;
        let L = !0, D = !0;
        for (let x = 1; x < C.length && (C[x].value > C[x - 1].value || (L = !1), C[x].value < C[x - 1].value || (D = !1), !(!L && !D)); x++)
          ;
        L && A.forEach((x) => u[x].trendUp = !0), D && A.forEach((x) => u[x].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const g = u.some(
        (m) => (m.singlePointUp || m.twoSigmaUp || m.shiftUp || m.trendUp) && (m.singlePointDown || m.twoSigmaDown || m.shiftDown || m.trendDown)
      );
      if (l === Pt.Always || l === Pt.AutoWhenConflict && g) {
        const m = bi(u), A = yi(m, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), C = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        for (const D of A)
          for (let x = D.start; x <= D.end; x++)
            D.trendDirection === mo.Up ? C.add(x) : L.add(x);
        u.forEach((D, x) => {
          D.trendUp = C.has(x) ? D.trendUp : !1, D.trendDown = L.has(x) ? D.trendDown : !1, s.trendDominatesHighlightedWindow && (C.has(x) ? (D.singlePointDown = !1, D.twoSigmaDown = !1, D.shiftDown = !1) : L.has(x) && (D.singlePointUp = !1, D.twoSigmaUp = !1, D.shiftUp = !1));
        });
      }
    }
    for (const g of u) {
      if (g.ghost || !Ne(g.value) || g.mean === null || n === Ae.Neither) continue;
      const { aligned: m, opposite: A } = gi(g, n);
      g.specialCauseImprovementValue = m ? g.value : null, g.specialCauseConcernValue = A ? g.value : null, xi(g, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function rs(e, t) {
  const n = fr(e), a = ur(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Hn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, l = Xm(n.rows, s, o), i = a.map((c, d) => {
    const u = l[d];
    if (c === Je.Common || c === Je.NoJudgement) {
      if (u === Je.Improvement) return Je.Improvement;
      if (u === Je.Concern) return Je.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: i };
}
var Xl = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(Xl || {});
function Qm(e, t, n) {
  const a = n?.trendVisualMode ?? Hn.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
  let l;
  switch (t) {
    case "recalc-crossing-shift": {
      l = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        boundaryIndices: s
      };
      break;
    }
    case "recalc-crossing-trend": {
      l = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 5,
        prePolarity: "Same",
        boundaryIndices: s
      };
      break;
    }
    case "recalc-crossing-two-sigma": {
      l = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 1,
        prePolarity: "Same",
        boundaryIndices: s
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
        boundaryIndices: s
      };
      break;
    case "recalculations-recalculated":
    case "none":
    default:
      l = void 0;
  }
  const { rows: i, visuals: c } = rs(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: o,
    boundaryWindows: l
  });
  let d = c.slice(), u = s.length ? s[0] : -1;
  if (u < 0) {
    for (let f = 1; f < i.length; f++)
      if (i[f].partitionId !== i[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = Je.Common), { rows: i, visuals: d };
}
const Ql = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: Pn.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Km(e) {
  return { ...Ql, ...e ?? {} };
}
var lt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(lt || {}), xn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(xn || {}), sr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(sr || {});
const go = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const l = e;
    let i;
    l.improvementDirection !== void 0 ? i = l.improvementDirection === Ae.Up ? st.HigherIsBetter : l.improvementDirection === Ae.Down ? st.LowerIsBetter : st.ContextDependent : l.polarity && (i = l.polarity);
    let c;
    const d = l.variationIcon;
    if (d === Le.Improvement || d === Le.Concern || d === Le.Neither || d === Le.Suppressed)
      d === Le.Improvement ? c = _e.SpecialCauseImproving : d === Le.Concern ? c = _e.SpecialCauseDeteriorating : d === Le.Neither ? c = _e.CommonCause : c = _e.SpecialCauseNoJudgement;
    else
      switch (l.variationIcon) {
        case Se.ImprovementHigh:
        case Se.ImprovementLow:
          c = _e.SpecialCauseImproving;
          break;
        case Se.ConcernHigh:
        case Se.ConcernLow:
          c = _e.SpecialCauseDeteriorating;
          break;
        case Se.NeitherHigh:
        case Se.NeitherLow:
          c = l.specialCauseNeutral ? _e.SpecialCauseNoJudgement : _e.CommonCause;
          break;
        case Se.CommonCause:
          c = _e.CommonCause;
          break;
        default:
          c = _e.SpecialCauseNoJudgement;
          break;
      }
    let u = l.trend;
    return u || (c === _e.SpecialCauseImproving ? u = i === st.LowerIsBetter ? Me.Lower : Me.Higher : c === _e.SpecialCauseDeteriorating ? u = i === st.LowerIsBetter ? Me.Higher : Me.Lower : c === _e.SpecialCauseNoJudgement ? l.highSideSignal && !l.lowSideSignal ? u = Me.Higher : l.lowSideSignal && !l.highSideSignal ? u = Me.Lower : u = Me.Higher : u = Me.Higher), { state: c, direction: u, polarity: i ?? st.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const l = e;
    let i = l.trend;
    return !i && (l.state === _e.SpecialCauseImproving || l.state === _e.SpecialCauseDeteriorating) && l.polarity && (l.state === _e.SpecialCauseImproving ? i = l.polarity === st.LowerIsBetter ? Me.Lower : Me.Higher : i = l.polarity === st.LowerIsBetter ? Me.Higher : Me.Lower), i || (l.state === _e.SpecialCauseImproving ? i = Me.Higher : l.state === _e.SpecialCauseDeteriorating ? i = Me.Lower : i = Me.Higher), {
      state: l.state,
      direction: i,
      polarity: l.polarity ?? st.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [vt.Improving]: _e.SpecialCauseImproving,
    [vt.Deteriorating]: _e.SpecialCauseDeteriorating,
    [vt.No_Judgement]: _e.SpecialCauseNoJudgement,
    [vt.None]: _e.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === vt.Improving ? s = n.polarity === st.LowerIsBetter ? Me.Lower : Me.Higher : n.judgement === vt.Deteriorating ? s = n.polarity === st.LowerIsBetter ? Me.Higher : Me.Lower : s = n.trend ?? Me.Higher, { state: o, direction: s, polarity: n.polarity };
};
function Kl(e, t) {
  const { state: n, direction: a, polarity: o } = go(e), s = ns(n), l = a === Me.Higher ? "above" : "below", i = a === Me.Higher ? "upwards" : "downwards", c = (() => {
    switch (o) {
      case st.HigherIsBetter:
        return "For this measure, higher values are better.";
      case st.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case vt.Improving:
          return `Special cause improvement: recent data show a sustained run ${l} the mean (unlikely due to random variation).`;
        case vt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${l} the mean (unlikely due to random variation).`;
        case vt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${i}.`;
        case vt.None:
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
const qa = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
  a && /* @__PURE__ */ r.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  o && /* @__PURE__ */ r.jsx("linearGradient", { id: n, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: s.map((l) => /* @__PURE__ */ r.jsx(
    "stop",
    {
      offset: l.offset,
      stopColor: e,
      stopOpacity: parseFloat(l.opacity)
    },
    l.offset
  )) })
] }), as = ({
  data: e,
  precomputed: t,
  improvementDirection: n,
  size: a = 44,
  ariaLabel: o,
  showLetter: s = !0,
  dropShadow: l = !0,
  gradientWash: i = !1,
  variant: c = xn.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = sr.Polarity,
  letterOverride: f,
  ...h
}) => {
  const p = kr(), y = kr(), {
    start: g,
    mid: m,
    end: A,
    triStart: C,
    triMid: L,
    triEnd: D
  } = Ca(), { state: x, direction: N, polarity: M, ariaInput: _ } = je(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const q = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: n ?? Ae.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === _e.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: Q, direction: fe, polarity: ne } = go(q);
      return { state: Q, direction: fe, polarity: ne, ariaInput: q };
    }
    const { state: ee, direction: W, polarity: X } = go(e);
    return { state: ee, direction: W, polarity: X, ariaInput: e };
  }, [e, t, n]), b = je(() => Gl(x), [x]), w = je(() => ns(x), [x]), k = w === vt.Improving || w === vt.Deteriorating;
  let j = "";
  s && k && (u === sr.Polarity ? M === st.HigherIsBetter ? j = "H" : M === st.LowerIsBetter ? j = "L" : j = "" : j = N === Me.Higher ? "H" : "L"), f !== void 0 && (j = f);
  const F = x !== _e.CommonCause, E = x === _e.SpecialCauseNoJudgement, $ = gt("common-cause", "#A6A6A6"), I = F ? b.hex : $, H = je(
    () => Hm(x, N),
    [x, N]
  ), oe = o || `${b.label}${j ? N === Me.Higher ? " – Higher" : " – Lower" : ""}`, Y = Kl(_);
  if (c === xn.TriangleWithRun) {
    const q = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], Q = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let fe = null;
    x === _e.SpecialCauseImproving || x === _e.SpecialCauseDeteriorating ? fe = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (N === Me.Higher ? q : Q).map((le) => le.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 6,
        transform: N === Me.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : x === _e.SpecialCauseNoJudgement && (fe = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: N === Me.Higher ? q.map((le) => le.join(",")).join(" ") : Q.map((le) => le.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 6,
        transform: N === Me.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const ne = Math.max(0, Math.min(5, Math.floor(d || 0))), re = x === _e.CommonCause ? 160 : N === Me.Higher ? 220 : 70, K = 10, te = 26, ie = 150 - 2 * te, U = x === _e.CommonCause ? $ : Zl(x), se = Array.from({ length: 5 }).map((le, ve) => {
      const Ce = (x === _e.SpecialCauseImproving || x === _e.SpecialCauseDeteriorating) && ve >= 5 - ne ? U : $;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: ie + ve * te,
          cy: re,
          r: K,
          fill: Ce,
          stroke: Ce,
          strokeWidth: 1
        },
        ve
      );
    }), ae = qa(
      b.hex,
      p,
      y,
      l,
      i,
      [
        { offset: "0%", opacity: C },
        { offset: "75%", opacity: L },
        { offset: "100%", opacity: D }
      ]
    ), ce = x === _e.CommonCause || N === Me.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": oe,
        "aria-description": Y,
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
          /* @__PURE__ */ r.jsxs("g", { transform: ce, children: [
            fe,
            j && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: N === Me.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: j
              }
            ),
            se
          ] })
        ]
      }
    );
  }
  if (c === xn.Triangle) {
    const q = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], Q = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], fe = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let ne = null;
    x === _e.SpecialCauseImproving || x === _e.SpecialCauseDeteriorating ? ne = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (N === Me.Higher ? q : Q).map((K) => K.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 8,
        transform: N === Me.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : x === _e.SpecialCauseNoJudgement ? ne = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: N === Me.Higher ? q.map((K) => K.join(",")).join(" ") : Q.map((K) => K.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 8,
        transform: N === Me.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : x === _e.CommonCause && (ne = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: fe[0][0],
        y1: fe[0][1],
        x2: fe[1][0],
        y2: fe[1][1],
        stroke: b.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const re = qa(
      b.hex,
      p,
      y,
      l,
      i,
      [
        { offset: "0%", opacity: C },
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
        "aria-label": oe,
        "aria-description": Y,
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
          j && (x === _e.SpecialCauseImproving || x === _e.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: N === Me.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: j
            }
          )
        ]
      }
    );
  }
  const R = qa(
    b.hex,
    p,
    y,
    l,
    i,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: m },
      { offset: "100%", opacity: A }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: a,
      height: a,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": oe,
      "aria-description": Y,
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
        j && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: b.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: N === Me.Lower ? "340" : "155", children: j })
          }
        ),
        E ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: b.hex,
            ...N === Me.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          H.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: $,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${H.map((ee) => `${ee.cx} ${ee.cy}`).join(" L ")}`
            }
          ),
          H.map((ee, W) => {
            const q = W >= H.length - 2 && F ? I : $, Q = q;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: Q,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: q,
                cx: ee.cx,
                cy: ee.cy,
                r: 16
              },
              W
            );
          })
        ] })
      ]
    }
  );
};
as.displayName = "SPCVariationIcon";
const eg = {
  [ot.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [ot.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [ot.Md]: { height: 44, pointR: 4, stroke: 1 },
  [ot.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [ot.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [ot.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function tg(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function ng(e) {
  const t = e.filter((l) => typeof l.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((l, i) => l + i.value, 0) / t.length, a = [...e].reverse().findIndex((l) => l.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
const rg = (e) => Zl(e), ec = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: o = !0,
  showLimitBand: s = !0,
  showInnerBands: l = !1,
  showLatestMarker: i = !0,
  showStateGlyph: c = !0,
  variationState: d,
  metricImprovement: u,
  gradientWash: f = !1,
  size: h = ot.Sm,
  ariaLabel: p,
  className: y,
  onPointClick: g,
  maxPoints: m,
  thinningStrategy: A = "stride",
  colorPointsBySignal: C = !0,
  centerLine: L,
  controlLimits: D,
  sigmaBands: x,
  pointSignals: N,
  pointNeutralSpecialCause: M,
  visualCategories: _
}) => {
  const b = u, w = je(
    () => tg(e, t),
    [e, t]
  ), k = je(() => ng(w), [w]), j = (() => {
    if (typeof h == "string")
      switch (h) {
        case "xs":
          return ot.Xs;
        case "sm":
          return ot.Sm;
        case "md":
          return ot.Md;
        case "lg":
          return ot.Lg;
        case "xl":
          return ot.Xl;
        case "full":
          return ot.Full;
        default:
          return ot.Sm;
      }
    return h ?? ot.Sm;
  })(), F = eg[j], E = Math.max(w.length * 6, 60), $ = E, I = j === ot.Full ? "100%" : E, H = F.height, oe = je(() => {
    if (j === ot.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${$} / ${H}`,
        display: "block"
      };
  }, [j, $, H]), Y = Math.max(6, F.pointR + 3), R = Math.max(4, F.pointR + 3), ee = je(() => (e?.length ?? 0) - (w?.length ?? 0), [e?.length, w?.length]), W = L ?? k.mean ?? null, X = je(() => {
    if (!o) return null;
    if (D) return D;
    const G = w.filter((S) => typeof S.value == "number");
    if (!G.length || W == null) return null;
    const v = G.map((S) => S.value), T = Math.min(...v), B = Math.max(...v);
    return { lower: T, upper: B };
  }, [o, D?.lower, D?.upper, w, W]), Q = je(() => ({
    state: d ?? _e.CommonCause,
    firedRules: [],
    mean: W ?? null,
    stdDev: null,
    side: k.latestValue != null && W != null ? k.latestValue > W ? "above" : "below" : void 0
  }), [d, W, k.latestValue]).state, fe = rg(Q), ne = (G) => {
    const v = w.filter((P) => P.value != null);
    if (!v.length) return H / 2;
    const T = v.map((P) => P.value);
    X && (X.lower != null && T.push(X.lower), X.upper != null && T.push(X.upper));
    const B = Math.min(...T), S = Math.max(...T);
    return B === S ? H / 2 : H - (G - B) / (S - B) * (H - R * 2) - R;
  }, re = je(() => {
    if (!m || w.length <= m)
      return w.map((z, V) => V);
    if (A === "stride") {
      const z = Math.max(2, m), V = (w.length - 1) / (z - 1), Z = /* @__PURE__ */ new Set();
      for (let J = 0; J < z; J++) Z.add(Math.round(J * V));
      return Z.add(w.length - 1), Array.from(Z).sort((J, ue) => J - ue);
    }
    const G = w.map((z, V) => ({ i: V, v: z.value }));
    function v(z, V, Z) {
      const J = z.i, ue = z.v ?? 0, de = V.i, xe = V.v ?? 0, we = Z.i, he = Z.v ?? 0, Te = Math.abs((he - xe) * J - (we - de) * ue + we * xe - he * de), Pe = Math.hypot(he - xe, we - de);
      return Pe === 0 ? 0 : Te / Pe;
    }
    function T(z, V) {
      if (z.length <= 2) return z;
      let Z = -1, J = -1;
      for (let ue = 1; ue < z.length - 1; ue++) {
        const de = v(z[ue], z[0], z[z.length - 1]);
        de > Z && (Z = de, J = ue);
      }
      if (Z > V) {
        const ue = T(z.slice(0, J + 1), V), de = T(z.slice(J), V);
        return [...ue.slice(0, -1), ...de];
      }
      return [z[0], z[z.length - 1]];
    }
    let B = 0.1, S = G;
    for (let z = 0; z < 8 && (S = T(G, B), !(S.length <= m)); z++)
      B *= 1.6;
    const P = new Set(S.map((z) => z.i));
    return P.add(0), P.add(w.length - 1), Array.from(P).sort((z, V) => z - V);
  }, [w, m, A]), K = je(
    () => re.map((G) => w[G]),
    [re, w]
  ), te = je(() => Math.max(1, $ - Y * 2), [$, Y]), ie = je(() => {
    const G = Math.max(1, K.length - 1);
    return (v) => v / G * te + Y;
  }, [K.length, te, Y]), U = je(() => {
    let G = "";
    return K.forEach((v, T) => {
      if (v.value == null) return;
      const B = ne(v.value), S = ie(T);
      G += G ? ` L ${S} ${B}` : `M ${S} ${B}`;
    }), G;
  }, [K, ie]), se = k.latestIndex ?? -1, ae = X, ce = Ca(), le = je(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [w.length, f]
  ), ve = w.length >= (n || 0), De = p || "SPC sparkline", Ce = (() => {
    if (!Q) return;
    const G = b === Ae.Up ? st.HigherIsBetter : b === Ae.Down ? st.LowerIsBetter : st.ContextDependent, v = {
      variationIcon: Q === _e.SpecialCauseImproving ? Le.Improvement : Q === _e.SpecialCauseDeteriorating ? Le.Concern : Q === _e.SpecialCauseNoJudgement ? Le.Suppressed : Le.Neither,
      trend: b === Ae.Up ? Me.Higher : Me.Lower,
      polarity: G
    };
    try {
      return Kl(v);
    } catch {
      return;
    }
  })(), ge = je(() => {
    if (!ve) return 10;
    const G = [...w].reverse().filter((T) => T.value != null).slice(0, 6).map((T) => ne(T.value));
    return G.length && G.reduce((T, B) => T + B, 0) / G.length < H / 2 ? H : 10;
  }, [w, ve, H]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": De,
      "aria-description": Ce,
      width: j === ot.Full ? void 0 : I,
      height: j === ot.Full ? void 0 : H,
      style: oe,
      className: y,
      viewBox: `0 0 ${$} ${H}`,
      children: [
        f && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: le, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: fe,
                stopOpacity: Number(ce.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: fe,
                stopOpacity: Number(ce.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: fe,
                stopOpacity: Number(ce.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: $,
              height: H,
              fill: `url(#${le})`
            }
          )
        ] }),
        ae && ae.lower != null && ae.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                ne(ae.upper),
                ne(ae.lower)
              ),
              width: $,
              height: Math.abs(
                ne(ae.upper) - ne(ae.lower)
              ),
              fill: fe,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: $,
              y1: ne(ae.lower),
              y2: ne(ae.lower),
              stroke: fe,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: $,
              y1: ne(ae.upper),
              y2: ne(ae.upper),
              stroke: fe,
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
                x2: $,
                y1: ne(x.lowerTwo),
                y2: ne(x.lowerTwo),
                stroke: fe,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: $,
                y1: ne(x.lowerOne),
                y2: ne(x.lowerOne),
                stroke: fe,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: $,
                y1: ne(x.upperOne),
                y2: ne(x.upperOne),
                stroke: fe,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: $,
                y1: ne(x.upperTwo),
                y2: ne(x.upperTwo),
                stroke: fe,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && W != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: $,
            y1: ne(W),
            y2: ne(W),
            stroke: fn(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: U,
            fill: "none",
            stroke: fn(),
            strokeWidth: F.stroke,
            strokeLinecap: "round"
          }
        ),
        re.map((G, v) => {
          const T = w[G];
          if (!T || T.value == null) return null;
          const B = ne(T.value), S = ie(v), z = (G === se && i ? F.pointR + 1 : F.pointR) - 0.5;
          let V = fn();
          if (C) {
            const Z = _?.[ee + G];
            if (Z != null)
              Z === Je.Improvement ? V = vr(Le.Improvement) : Z === Je.Concern ? V = vr(Le.Concern) : Z === Je.NoJudgement ? V = gt("no-judgement", "#490092") : V = fn();
            else {
              const J = N?.[ee + G];
              J === Le.Improvement || J === Le.Concern ? V = vr(J) : V = M?.[ee + G] ? gt("no-judgement", "#490092") : fn();
            }
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: S,
              cy: B,
              r: z,
              fill: V,
              stroke: "none",
              strokeWidth: 0,
              onClick: g ? () => g(G, T) : void 0,
              style: g ? { cursor: "pointer" } : void 0,
              "data-index": G,
              "data-signal-colour": C ? V : void 0
            },
            G
          );
        }),
        c && ve && Q && Q !== _e.CommonCause && b && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: $ - 4,
            y: ge,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: fe,
            "data-glyph-pos": ge < H / 2 ? "top" : "bottom",
            children: b === Ae.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
ec.displayName = "SPCSpark";
function Wr(e) {
  switch (e) {
    case Se.ImprovementHigh:
    case Se.ImprovementLow:
      return _e.SpecialCauseImproving;
    case Se.ConcernHigh:
    case Se.ConcernLow:
      return _e.SpecialCauseDeteriorating;
    case Se.NeitherHigh:
    case Se.NeitherLow:
      return _e.SpecialCauseNoJudgement;
    case Se.CommonCause:
      return _e.CommonCause;
    default:
      return null;
  }
}
function tc(e) {
  return e === Se.ImprovementHigh || e === Se.ImprovementLow || e === Se.ConcernHigh || e === Se.ConcernLow || e === Se.NeitherHigh || e === Se.NeitherLow;
}
function ag({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [o, s] = O.useState(""), l = O.useRef("");
  return O.useEffect(() => {
    if (!t) {
      l.current !== "" && (l.current = "", s(""));
      return;
    }
    const i = e.length;
    if (!i) {
      const f = "Diagnostics: no warnings.";
      f !== l.current && (l.current = f, s(f));
      return;
    }
    const c = {
      error: e.filter((f) => f.severity === Tt.Error).length,
      warning: e.filter((f) => f.severity === Tt.Warning).length,
      info: e.filter((f) => f.severity === Tt.Info).length
    }, d = [];
    c.error && d.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && d.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && d.push(`${c.info} info`);
    const u = `Diagnostics updated: ${i} warning${i === 1 ? "" : "s"} (${d.join(", ")}).`;
    u !== l.current && (l.current = u, s(u));
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
        Qt,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((i) => {
            let c = "grey";
            return i.severity === Tt.Error ? c = "red" : i.severity === Tt.Warning ? c = "orange" : i.severity === Tt.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(Ve, { color: c, text: (i.severity ? String(i.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: i.category ? /* @__PURE__ */ r.jsx(Ve, { color: "purple", text: n(i.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(Ve, { color: "grey", text: a(i.code) }),
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
function og({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const os = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: l,
  showTrendLines: i = !0,
  ...c
}) => {
  const d = kr(), u = kr(), { start: f, mid: h, end: p } = Ca(), y = o || Fm[e], g = (l || Rm[e]).slice(0, 2), m = n || `Assurance ${e}`;
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
          s && /* @__PURE__ */ r.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: y, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: y, stopOpacity: parseFloat(h) }),
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
          e === mn.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === mn.Uncertain ? /* @__PURE__ */ r.jsx(
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
os.displayName = "SPCAssuranceIcon";
const sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: mn,
  Direction: Me,
  MetricPolarity: st,
  SPCAssuranceIcon: os,
  SPCVariationIcon: as,
  VariationJudgement: vt,
  VariationState: _e,
  getVariationColour: Gl,
  getVariationTrend: ns
}, Symbol.toStringTag, { value: "Module" }));
function ig(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: o, variant: s, runLength: l } = e;
  if (!t || !n?.length) return null;
  const i = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (i.filter(
    (x) => !x.data.ghost && x.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let x = i.length - 1; x >= 0; x--) {
    const N = i[x];
    if (N && N.data.value != null && !N.data.ghost) {
      u = x;
      break;
    }
  }
  if (u === -1) return null;
  const f = i[u], h = f.classification?.variation, p = f.classification?.assurance, y = h === Le.Neither && !!f.classification?.neutralSpecialCauseValue, g = p === sn.Pass ? mn.Pass : p === sn.Fail ? mn.Fail : mn.Uncertain;
  let m;
  if (h === Le.Suppressed) {
    const x = !!f.rules.singlePoint.up, N = !!f.rules.singlePoint.down;
    o === on.Up ? x ? m = Me.Higher : N && (m = Me.Lower) : o === on.Down ? N ? m = Me.Lower : x && (m = Me.Higher) : m = Me.Higher;
  } else if (h === Le.Neither && y) {
    const x = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, N = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    x && !N ? m = Me.Higher : N && !x ? m = Me.Lower : m = Me.Higher;
  }
  const A = 80, C = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, L = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let D = Se.CommonCause;
  return h === Le.Improvement ? D = Se.ImprovementHigh : h === Le.Concern ? D = Se.ConcernHigh : h === Le.Neither && (y ? m === Me.Lower || L && !C ? D = Se.NeitherLow : D = Se.NeitherHigh : D = Se.CommonCause), /* @__PURE__ */ r.jsxs(
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
            style: { width: A, height: A },
            children: /* @__PURE__ */ r.jsx(
              as,
              {
                dropShadow: !1,
                data: {
                  variationIcon: D,
                  improvementDirection: o,
                  specialCauseNeutral: y,
                  highSideSignal: C,
                  lowSideSignal: L,
                  ...m ? { trend: m } : {}
                },
                letterMode: o === on.Neither ? sr.Direction : sr.Polarity,
                size: A,
                variant: s,
                runLength: s === xn.TriangleWithRun ? l : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(p),
            style: { width: A, height: A },
            children: /* @__PURE__ */ r.jsx(
              os,
              {
                status: g,
                size: A,
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
const nc = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: l = !0,
  showTrendGatingExplanation: i = !0
}) => {
  const c = Kt(), d = ln(), [u, f] = O.useState(null), [h, p] = O.useState(!1), y = O.useRef(null);
  O.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), y.current && (cancelAnimationFrame(y.current), y.current = null)), !c.focused && !h) {
        const ge = requestAnimationFrame(() => {
          f(null), y.current = null;
        });
        y.current = ge;
      }
      return () => {
        y.current && (cancelAnimationFrame(y.current), y.current = null);
      };
    }
  }, [c, c?.focused, h]);
  const g = c && (c.focused || (h ? u : null) || u), [m, A] = O.useState(!1);
  O.useEffect(() => {
    const ge = requestAnimationFrame(() => A(!0));
    return () => cancelAnimationFrame(ge);
  }, [g?.index]);
  const C = d?.innerWidth ?? 0, L = d?.innerHeight ?? 0, D = g ? Math.min(Math.max(g.clientX, 0), C) : 0, x = g ? Math.min(Math.max(g.clientY, 0), L) : 0, N = d?.ref?.current || void 0;
  if (!g)
    return null;
  const M = e?.[g.index], b = Sa(
    M ? {
      specialCauseSinglePointUp: !!M.rules.singlePoint.up,
      specialCauseSinglePointDown: !!M.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!M.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!M.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!M.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!M.rules.fourOfFive.down,
      specialCauseShiftUp: !!M.rules.shift.up,
      specialCauseShiftDown: !!M.rules.shift.down,
      specialCauseTrendUp: !!M.rules.trend.up,
      specialCauseTrendDown: !!M.rules.trend.down
    } : null
  ).map((ge) => ({ id: ge, label: En[ge].tooltip })), w = g.x instanceof Date ? g.x : new Date(g.x), k = s ? s(w) : w.toDateString(), j = o ? `${o}` : "", F = a || j ? `${g.y}${j ? "" + j : " "}${a ? " " + a : ""}` : `${g.y}`, E = _a(M?.classification?.variation), $ = Ul(M?.classification?.assurance), I = Em(
    t.mean ?? null,
    t.sigma,
    g.y
  ), H = n ? n(g.index, { x: g.x, y: g.y }) : void 0, oe = E || $ || I, Y = M?.rules.trend.up || M?.rules.trend.down, R = M?.classification?.variation === Le.Neither && Y, ee = i && R ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, W = b.length > 0, X = M && "primeDirection" in M ? M.primeDirection : void 0, q = M && "primeRuleId" in M ? M.primeRuleId : void 0, Q = l && M?.classification?.variation === Le.Neither && W, fe = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ne = Wl(M?.classification?.variation), re = 6.2, te = [
    H || "",
    `${k} • ${F}`
  ].filter(Boolean).reduce(
    (ge, G) => Math.max(ge, G.length * re + 32),
    0
  ), ie = 200, U = 440, se = Math.min(U, Math.max(ie, te));
  let ae = D + 12, le = (d.margin?.top ?? 0) + x + 16;
  ae + se > C && (ae = D - -60 - se), ae < 0 && (ae = Math.max(0, C - se));
  const ve = g ? `spc-tooltip-${g.index}` : "spc-tooltip", De = typeof g.index == "number" ? g.index : NaN, Ce = N ? od(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: ve,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (m ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ae,
          top: le,
          width: se,
          maxWidth: U,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": m ? "false" : "true",
        "data-floating": !0,
        "data-placement": ae + se + 12 > C ? "left" : "right",
        onPointerEnter: () => {
          p(!0), y.current && (cancelAnimationFrame(y.current), y.current = null);
        },
        onPointerLeave: () => {
          if (p(!1), !c?.focused) {
            const ge = requestAnimationFrame(() => {
              f(null), y.current = null;
            });
            y.current = ge;
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
          oe && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: E?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Ve,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : E?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Ve,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : Q ? /* @__PURE__ */ r.jsx(
              Ve,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : E ? /* @__PURE__ */ r.jsx(
              Ve,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          $ && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const ge = $.toLowerCase(), v = !(ge.includes("not met") || ge.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ge);
              return /* @__PURE__ */ r.jsx(
                Ve,
                {
                  text: $,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${v ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${$}`
                }
              );
            })() })
          ] }),
          I && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Ve,
              {
                text: (() => {
                  const ge = I.toLowerCase();
                  return ge.startsWith("within 1") ? "≤1σ" : ge.startsWith("1–2") ? "1–2σ" : ge.startsWith("2–3") ? "2–3σ" : ge.startsWith(">3") ? ">3σ" : I;
                })(),
                color: I.includes(">3") ? "orange" : I.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${I}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          ee && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: ee })
          ] }),
          W && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: b.map(({ id: ge, label: G }) => {
                  const v = String(ge), B = v === or.TrendIncreasing || v === or.TrendDecreasing ? "fdp-spc-tag--trend" : Q ? "fdp-spc-tag--no-judgement" : E ? E.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : E.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Ve,
                    {
                      text: G,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${B}`,
                      "data-rule-id": v
                    },
                    v
                  );
                })
              }
            ),
            X && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const ge = Q ? "fdp-spc-tag--no-judgement" : E ? E.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : E.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", G = `${X}${q ? ` (${q})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Ve,
                  {
                    text: G,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${ge}`,
                    "aria-label": `Prime direction ${X}${q ? ` via ${q}` : ""}`
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
            stroke: fe,
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
            stroke: fe,
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
        Ce
      ]
    }
  );
}, lg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = Kt(), s = o?.focused ?? null, l = s?.index ?? null, i = typeof l == "number" && e ? e[l] : null, c = O.useMemo(
    () => i ? Sa({
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
  ), d = O.useMemo(
    () => Array.from(
      new Set(c.map((g) => En[g]?.narration).filter(Boolean))
    ),
    [c]
  ), u = i ? _a(i.classification?.variation) : null, f = i ? Ul(i.classification?.assurance) : null, h = c.length > 0, p = i ? i.classification?.variation === Le.Neither && h : !1, y = O.useRef(null);
  return O.useEffect(() => {
    if (!a || !s || i == null) return;
    const g = `${s.seriesId}:${s.index}`;
    if (y.current !== g) {
      y.current = g;
      try {
        a({
          index: s.index,
          x: s.x,
          y: s.y,
          row: i,
          rules: c
        });
      } catch {
      }
    }
  }, [s?.seriesId, s?.index, s?.x, s?.y, i, c, a]), /* @__PURE__ */ r.jsxs(
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
        !i || !s ? /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-inspector__body", children: [
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
                      Ve,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      Ve,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ r.jsx(
                      Ve,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ r.jsx(
                      Ve,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const g = f.toLowerCase(), A = !(g.includes("not met") || g.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(g);
                      return /* @__PURE__ */ r.jsx(
                        Ve,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${A ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                  const m = String(g), C = m === or.TrendIncreasing || m === or.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", L = En[g]?.tooltip || m;
                  return /* @__PURE__ */ r.jsx(
                    Ve,
                    {
                      text: L,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${C}`,
                      "data-rule-id": m,
                      title: En[g]?.tooltip
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
function cg(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === lt.Common && n[s - 1] === n[s + 1] && n[s - 1] !== lt.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let l = o + 1;
      for (; l < n.length && n[l] === s; ) l++;
      l - o === 1 && s !== lt.Common && (n[o] = lt.Common), o = l;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const l = n[o], i = s - 1, c = i - o + 1;
        (l === lt.Common || c >= 2) && a.push({ start: o, end: i, category: l }), o = s;
      }
  }
  return a;
}
var qn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(qn || {}), rc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(rc || {});
function dg(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: o,
    a11y: s,
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
    baselines: A,
    ghosts: C,
    settings: L,
    chartType: D,
    metricImprovement: x,
    gradientSequences: N,
    sequenceTransition: M,
    processLineWidth: _,
    showPartitionMarkers: b,
    showWarningsPanel: w,
    warningsFilter: k,
    enableNeutralNoJudgement: j,
    showTrendGatingExplanation: F,
    trendVisualMode: E,
    alwaysShowZeroY: $,
    alwaysShowHundredY: I,
    percentScale: H,
    showTrendStartMarkers: oe,
    showFirstFavourableCrossMarkers: Y,
    showTrendBridgeOverlay: R,
    showSignalsInspector: ee,
    onSignalFocus: W,
    showIcons: X,
    showEmbeddedIcon: q,
    embeddedIconVariant: Q,
    embeddedIconRunLength: fe,
    showFocusIndicator: ne,
    visualsScenario: re,
    visualsEngineSettings: K,
    source: te,
    narrationContext: ie,
    highlightOutOfControl: U,
    precomputed: se
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (m !== void 0 || A !== void 0 || C !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && L !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (u !== void 0 || y !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (d !== void 0 || p !== void 0 || ie !== void 0 || g !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !l && (re !== void 0 || K !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && U !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !i && te !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const ae = n?.data ?? c ?? [], ce = n?.targets ?? m, le = n?.baselines ?? A, ve = n?.ghosts ?? C, De = a?.chartType ?? D ?? Hl.XmR, Ce = a?.metricImprovement ?? x ?? on.Neither, ge = a?.settings ?? L, G = a?.autoRecalc, v = t?.axes?.alwaysShowZeroY ?? $ ?? !1, T = t?.axes?.alwaysShowHundredY ?? I ?? !1, B = t?.axes?.percentScale ?? H ?? !1, S = t?.visuals?.gradientSequences ?? N ?? !0, P = t?.visuals?.sequenceTransition ?? M ?? "slope", z = t?.visuals?.processLineWidth ?? _ ?? 2, V = t?.visuals?.trend?.visualMode ?? E ?? "ungated", Z = t?.visuals?.trend?.showGatingExplanation ?? F ?? !0, J = t?.visuals?.rules?.enableNeutralNoJudgement ?? j ?? !0, ue = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, de = t?.visuals?.showZones, xe = t?.visuals?.showPoints, we = t?.visuals?.rules?.highlightOutOfControl, he = o?.height, Te = o?.className, Pe = s?.label, We = s?.unit, He = s?.narrationContext, tt = l?.scenario, Ye = l?.settings, it = i?.source, at = t?.overlays?.partitionMarkers ?? b ?? !1, et = t?.overlays?.trendStartMarkers ?? oe ?? !1, qe = t?.overlays?.firstFavourableCrossMarkers ?? Y ?? !1, At = t?.overlays?.trendBridge ?? R ?? !1, pr = t?.inspector?.show ?? ee ?? !1, cn = t?.inspector?.onFocus ?? W, Ee = t?.warnings?.show ?? w ?? !1, Re = t?.warnings?.filter ?? k, Ie = t?.icons?.show ?? X ?? !1, xt = t?.icons?.embedded?.show ?? q ?? !0, ft = t?.icons?.embedded?.variant ?? Q ?? xn.Classic, kt = t?.icons?.embedded?.runLength ?? fe, Fe = t?.overlays?.focusIndicator ?? ne ?? !0;
  return {
    effData: ae,
    effTargets: ce,
    effBaselines: le,
    effGhosts: ve,
    effChartTypeCore: De,
    effMetricImprovementCore: Ce,
    effEngineSettings: ge,
    effEngineAutoRecalc: G,
    effHeight: he,
    effClassName: Te,
    effAriaLabel: Pe,
    effUnit: We,
    effNarrationContext: He,
    effShowZones: de,
    effShowPoints: xe,
    effHighlightOutOfControl: we,
    effVisualsScenario: tt,
    effVisualsEngineSettings: Ye,
    effPrecomputedVisuals: se,
    effSource: it,
    effAlwaysShowZeroY: v,
    effAlwaysShowHundredY: T,
    effPercentScale: B,
    effGradientSequences: S,
    effSequenceTransition: P,
    effProcessLineWidth: z,
    effTrendVisualMode: V,
    effShowTrendGatingExplanation: Z,
    effEnableNeutralNoJudgement: J,
    effEnableRules: ue,
    effShowPartitionMarkers: at,
    effShowTrendStartMarkers: et,
    effShowFirstFavourableCrossMarkers: qe,
    effShowTrendBridgeOverlay: At,
    effShowSignalsInspector: pr,
    effOnSignalFocus: cn,
    effShowWarningsPanel: Ee,
    effWarningsFilter: Re,
    effShowIcons: Ie,
    effShowEmbeddedIcon: xt,
    effEmbeddedIconVariant: ft,
    effEmbeddedIconRunLength: kt,
    effShowFocusIndicator: Fe
  };
}
let ug = 0;
const fg = ({ data: e, targets: t, visuals: n, a11y: a, axis: o, compute: s }) => {
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
    processLineWidth: A,
    showFocusIndicator: C = !1,
    enableRules: L,
    enableNeutralNoJudgement: D = !0,
    showTrendStartMarkers: x = !1,
    showFirstFavourableCrossMarkers: N = !1,
    showTrendBridgeOverlay: M = !1
  } = n, {
    announceFocus: _,
    ariaLabel: b,
    narrationContext: w,
    showSignalsInspector: k = !1,
    onSignalFocus: j,
    showTrendGatingExplanation: F = !0
  } = a, { zeroBreakSlotGapPx: E } = o, { metricImprovement: $, effectiveUnit: I } = s, H = _n(), oe = ln();
  if (!H) return null;
  const { xScale: Y, yScale: R } = H, ee = O.useRef(
    "spc-seq-" + ++ug
  ), W = Kt(), X = l[0]?.data || [], q = O.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const v = /* @__PURE__ */ new Set();
    return X.forEach((T, B) => {
      typeof u.ucl == "number" && T.y > u.ucl && v.add(B), typeof u.lcl == "number" && T.y < u.lcl && v.add(B);
    }), v;
  }, [u.ucl, u.lcl, X]), Q = O.useMemo(() => {
    if (!i || !i.length) return null;
    const v = [];
    return i.forEach((T, B) => {
      const S = T.classification.variation === Le.Concern || T.classification.variation === Le.Improvement || !!T.classification.neutralSpecialCauseValue, P = !!T.rules.singlePoint.up || !!T.rules.twoOfThree.up || !!T.rules.fourOfFive.up || !!T.rules.shift.up || !!T.rules.trend.up, z = !!T.rules.singlePoint.down || !!T.rules.twoOfThree.down || !!T.rules.fourOfFive.down || !!T.rules.shift.down || !!T.rules.trend.down;
      v[B] = {
        variation: T.classification.variation,
        assurance: T.classification.assurance,
        special: S,
        concern: T.classification.variation === Le.Concern,
        improvement: T.classification.variation === Le.Improvement,
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
  }, [i]), fe = O.useMemo(() => (c || []).map((v) => v === Je.Improvement ? lt.Improvement : v === Je.Concern ? lt.Concern : v === Je.NoJudgement ? lt.NoJudgement : lt.Common), [c]), ne = O.useMemo(() => !g || !fe.length ? [] : cg(fe, !0), [g, fe, b]), re = O.useMemo(
    () => X.map((v) => Y(v.x instanceof Date ? v.x : new Date(v.x))),
    [X, Y]
  ), K = Y.range()[1], te = Y.range()[0], ie = O.useMemo(() => {
    if (!i || !i.length)
      return null;
    let v = Number.POSITIVE_INFINITY, T = Number.POSITIVE_INFINITY;
    if (i.forEach((J, ue) => {
      J.rules.trend.up && (v = Math.min(v, ue)), J.rules.trend.down && (T = Math.min(T, ue));
    }), !Number.isFinite(v) && !Number.isFinite(T))
      return null;
    const B = v <= T, S = B ? Dt.Up : Dt.Down, P = B ? v : T, z = (J) => $ == null || $ === on.Neither || J == null || typeof J.data.value != "number" || typeof J.limits.mean != "number" ? !1 : S === Dt.Up ? $ === on.Up ? J.data.value > J.limits.mean : J.data.value < J.limits.mean : $ === on.Down ? J.data.value < J.limits.mean : J.data.value > J.limits.mean;
    let V = null;
    for (let J = P; J < i.length; J++) {
      const ue = i[J];
      if (!(B ? !!ue.rules.trend.up : !!ue.rules.trend.down)) break;
      if (z(ue)) {
        V = J;
        break;
      }
    }
    let Z = !1;
    if (V != null) {
      let J = 0;
      for (let ue = V; ue < i.length; ue++) {
        const de = i[ue];
        if (!(B ? !!de.rules.trend.up : !!de.rules.trend.down)) break;
        z(de) && J++;
      }
      Z = J >= 2;
    }
    return {
      direction: S,
      detectedAt: P,
      firstFavourableCrossAt: V,
      persistedAcrossMean: Z
    };
  }, [i, $]), U = O.useMemo(() => {
    if (!i || !i.length) return null;
    const v = (T) => {
      const B = [];
      let S = null, P = null;
      for (let z = 0; z < i.length; z++) {
        const V = i[z], Z = T(V), J = typeof Z == "number" && !isNaN(Z) ? Z : null;
        if (J == null) {
          S !== null && P != null && (B.push({
            x1: re[S],
            x2: re[z - 1],
            y: R(P)
          }), S = null, P = null);
          continue;
        }
        if (S === null) {
          S = z, P = J;
          continue;
        }
        P != null && Math.abs(J - P) <= 1e-9 || (P != null && B.push({
          x1: re[S],
          x2: re[z - 1],
          y: R(P)
        }), S = z, P = J);
      }
      return S !== null && P != null && B.push({
        x1: re[S],
        x2: re[i.length - 1],
        y: R(P)
      }), B;
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
  }, [i, re, R]), se = O.useMemo(() => ne.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
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
      const B = `${ee.current}-grad-${T}`;
      let S, P = 0.28, z = 0.12, V = 0.045;
      switch (v.category) {
        case lt.Concern:
          S = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", P = 0.28, z = 0.12, V = 0.045;
          break;
        case lt.Improvement:
          S = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", P = 0.26, z = 0.11, V = 0.045;
          break;
        case lt.NoJudgement:
          S = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", P = 0.26, z = 0.11, V = 0.045;
          break;
        default:
          S = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: B, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: S, stopOpacity: P }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: S, stopOpacity: z }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: S, stopOpacity: V })
      ] }, B);
    })
  ] }) : null, [ne]), ae = O.useMemo(() => {
    if (!ne.length) return null;
    const [v] = R.domain(), T = R(v), B = ne.map((S, P) => {
      const { start: z, end: V, category: Z } = S;
      if (z < 0 || V >= re.length || z > V)
        return null;
      const J = re[z], ue = re[V];
      let de = "";
      if (Z === lt.Common) {
        const xe = P > 0 ? ne[P - 1] : null, we = P < ne.length - 1 ? ne[P + 1] : null, he = xe ? re[xe.end] : te, Te = xe ? R(X[xe.end].y) : T, Pe = we ? re[we.start] : K, We = we ? R(X[we.start].y) : T;
        de = `M ${he} ${T}`, de += ` L ${he} ${Te}`;
        for (let He = z; He <= V; He++)
          de += ` L ${re[He]} ${R(X[He].y)}`;
        de += ` L ${Pe} ${We}`, de += ` L ${Pe} ${T} Z`;
      } else {
        const xe = P > 0 ? ne[P - 1] : null, we = P < ne.length - 1 ? ne[P + 1] : null, he = xe && xe.category !== lt.Common, Te = we && we.category !== lt.Common, Pe = R(X[z].y), We = R(X[V].y);
        let He = J, tt = ue;
        if (he) {
          const Ye = re[xe.end], it = R(X[xe.end].y), at = X[z].y - X[xe.end].y;
          m === qn.Slope && at > 0 ? (de = `M ${Ye} ${it} L ${J} ${Pe}`, He = Ye) : (de = `M ${J} ${T} L ${J} ${Pe}`, He = J);
        } else
          de = `M ${J} ${T} L ${J} ${Pe}`;
        for (let Ye = z + 1; Ye <= V; Ye++)
          de += ` L ${re[Ye]} ${R(X[Ye].y)}`;
        if (de += ` L ${ue} ${We}`, Te) {
          const Ye = re[we.start], it = R(X[we.start].y), at = X[we.start].y - X[V].y;
          (m === qn.Slope && at <= 0 || m === qn.Extend) && (de += ` L ${Ye} ${it}`, tt = Ye);
        }
        if (de += ` L ${tt} ${T}`, de += ` L ${He} ${T} Z`, m === qn.Neutral && he) {
          const Ye = re[xe.end], it = R(X[xe.end].y), at = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${Ye} ${T} L ${Ye} ${it} L ${J} ${Pe} L ${J} ${T} Z`,
              fill: `url(#${ee.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${P}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            at,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: de,
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
          d: de,
          fill: `url(#${ee.current}-grad-${P})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${P}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: B });
  }, [ne, re, K, R, X, m]), ce = O.useMemo(() => {
    if (!w?.timeframe && X.length >= 2) {
      const v = X.map((V) => V.x instanceof Date ? V.x : new Date(V.x)), T = new Date(Math.min(...v.map((V) => V.getTime()))), B = new Date(Math.max(...v.map((V) => V.getTime()))), S = Math.round((B.getTime() - T.getTime()) / 864e5) || 0;
      if (S < 14)
        return `The chart shows a timeframe of ${S + 1} days`;
      const P = Math.round(S / 7);
      return P < 20 ? `The chart shows a timeframe of ${P} weeks` : `The chart shows a timeframe of ${(B.getFullYear() - T.getFullYear()) * 12 + (B.getMonth() - T.getMonth()) + 1} months`;
    }
    if (w?.timeframe)
      return `The chart shows a timeframe of ${w.timeframe}`;
  }, [w?.timeframe, X]), le = (v) => {
    const T = v % 10, B = v % 100;
    return T === 1 && B !== 11 ? `${v}st` : T === 2 && B !== 12 ? `${v}nd` : T === 3 && B !== 13 ? `${v}rd` : `${v}th`;
  }, ve = (v) => `${le(v.getDate())} ${v.toLocaleString("en-GB", { month: "long" })}, ${v.getFullYear()}`, De = (v) => ({
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
  }), Ce = O.useCallback(
    ({
      index: v,
      x: T,
      y: B
    }) => {
      const S = i?.[v], P = T instanceof Date ? T : new Date(T), z = ve(P), V = w?.measureUnit ? ` ${w.measureUnit}` : "", Z = w?.measureName ? ` ${w.measureName}` : "";
      if (!S)
        return `General summary is: ${ce ? ce + ". " : ""}Point ${v + 1}, ${z}, ${B}${V}${Z}`;
      const J = _a(S.classification?.variation) || "Variation", ue = Sa(De(S)), de = ue.length ? ` Rules: ${[...new Set(ue.map((we) => En[we].narration))].join("; ")}.` : " No special cause rules.", xe = [];
      return w?.measureName && xe.push(`Measure: ${w.measureName}.`), w?.datasetContext && xe.push(`${w.datasetContext}.`), w?.organisation && xe.push(`Organisation: ${w.organisation}.`), w?.additionalNote && xe.push(w.additionalNote), [
        "General summary is:",
        ...xe,
        `Point ${v + 1} recorded on `,
        z + ",",
        `with a value of ${B} ${V}${Z}`,
        J + ".",
        de
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, w, ce]
  ), ge = O.useCallback(
    (v, T) => i?.[v] ? Ce({
      index: v,
      seriesId: "process",
      x: T.x instanceof Date ? T.x : new Date(T.x),
      y: T.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, Ce]
  ), G = O.useMemo(() => {
    try {
      const v = typeof R?.domain == "function" ? R.domain() : void 0;
      if (!v || !Array.isArray(v) || v.length < 2) return !1;
      const T = Math.min(v[0], v[1]), B = Math.max(v[0], v[1]);
      return !(0 >= T && 0 <= B);
    } catch {
      return !1;
    }
  }, [R]);
  return /* @__PURE__ */ r.jsx(Mm, { children: /* @__PURE__ */ r.jsxs(
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
            width: H.xScale.range()[1] + 56 + 16,
            height: (oe?.innerHeight ?? H.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(li, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                li,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: G,
                    gapPx: E,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(Yh, { axis: "y" }),
              se,
              ae,
              d.map((v, T) => {
                const B = X[v];
                if (!B) return null;
                const S = Y(B.x instanceof Date ? B.x : new Date(B.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: S,
                    x2: S,
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
              U?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                U.mean.map((v, T) => /* @__PURE__ */ r.jsx(
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
                U.mean.map((v, T) => {
                  if (T === U.mean.length - 1) return null;
                  const B = U.mean[T + 1];
                  if (!B || v.y === B.y) return null;
                  const P = Math.max(4, B.x1 - v.x2 || 0) * 0.5, z = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${B.x1 - P},${B.y} ${B.x1},${B.y}`;
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
              U?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    U.ucl.map((v, T) => /* @__PURE__ */ r.jsx(
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
                    U.ucl.map((v, T) => {
                      if (T === U.ucl.length - 1) return null;
                      const B = U.ucl[T + 1];
                      if (!B || v.y === B.y) return null;
                      const P = Math.max(4, B.x1 - v.x2 || 0) * 0.5, z = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${B.x1 - P},${B.y} ${B.x1},${B.y}`;
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
              U?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    U.lcl.map((v, T) => /* @__PURE__ */ r.jsx(
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
                    U.lcl.map((v, T) => {
                      if (T === U.lcl.length - 1) return null;
                      const B = U.lcl[T + 1];
                      if (!B || v.y === B.y) return null;
                      const P = Math.max(4, B.x1 - v.x2 || 0) * 0.5, z = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${B.x1 - P},${B.y} ${B.x1},${B.y}`;
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
                    x2: Y.range()[1],
                    y1: R(f),
                    y2: R(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: Y.range()[0] - 7,
                    y: R(f) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      f,
                      " ",
                      I || w?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && U && U.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                U.onePos.map((v, T) => /* @__PURE__ */ r.jsx(
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
                U.oneNeg.map((v, T) => /* @__PURE__ */ r.jsx(
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
                U.twoPos.map((v, T) => /* @__PURE__ */ r.jsx(
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
                U.twoNeg.map((v, T) => /* @__PURE__ */ r.jsx(
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
              ie && (x || N || M) && (() => {
                const v = ie.detectedAt, T = ie.firstFavourableCrossAt, B = X[v] ? Y(
                  X[v].x instanceof Date ? X[v].x : new Date(X[v].x)
                ) : null, S = X[v] ? R(X[v].y) : null, P = T != null && X[T] ? Y(
                  X[T].x instanceof Date ? X[T].x : new Date(X[T].x)
                ) : null, z = T != null && X[T] ? R(X[T].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  M && B != null && S != null && P != null && z != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: B,
                      y1: S,
                      x2: P,
                      y2: z,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  x && B != null && S != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: B,
                      cy: S,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  N && P != null && z != null && /* @__PURE__ */ r.jsx("circle", { cx: P, cy: z, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Im,
                {
                  series: l[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (v) => v.x instanceof Date ? v.x : new Date(v.x),
                  smooth: !1,
                  strokeWidth: A
                }
              ),
              h && X.map((v, T) => {
                const B = Y(v.x instanceof Date ? v.x : new Date(v.x)), S = R(v.y), P = q.has(T), z = Q?.[T], V = fe[T], Z = V === lt.Improvement, J = V === lt.Concern, ue = V === lt.NoJudgement, de = [
                  "fdp-spc__point",
                  P && y ? "fdp-spc__point--ooc" : null,
                  L && J ? "fdp-spc__point--sc-concern" : null,
                  L && Z ? "fdp-spc__point--sc-improvement" : null,
                  L && D && ue ? "fdp-spc__point--sc-no-judgement" : null,
                  z?.assurance === sn.Pass ? "fdp-spc__point--assurance-pass" : null,
                  z?.assurance === sn.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), xe = W?.focused?.index === T;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: B,
                    cy: S,
                    r: 5,
                    className: de,
                    "data-variation": z?.variation,
                    "data-assurance": z?.assurance,
                    "aria-label": b,
                    ...xe ? { "aria-describedby": `spc-tooltip-${T}` } : {}
                  },
                  T
                );
              }),
              C && k && W?.focused && (() => {
                const v = W.focused, T = typeof v.index == "number" ? v.index : -1;
                if (T < 0 || !X[T]) return null;
                const B = Y(
                  X[T].x instanceof Date ? X[T].x : new Date(X[T].x)
                ), S = R(X[T].y), P = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: B,
                      cy: S,
                      r: 7,
                      fill: "none",
                      stroke: P,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: B,
                      cy: S,
                      r: 5,
                      fill: "#000",
                      stroke: P,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: B,
                      cy: S,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              oe && /* @__PURE__ */ r.jsx(
                pg,
                {
                  width: Y.range()[1],
                  height: R.range()[0]
                }
              ),
              !k && /* @__PURE__ */ r.jsx(
                nc,
                {
                  engineRows: i,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: ge,
                  measureName: w?.measureName,
                  measureUnit: w?.measureUnit,
                  dateFormatter: (v) => ve(v),
                  enableNeutralNoJudgement: D,
                  showTrendGatingExplanation: F
                }
              )
            ] })
          }
        ),
        k && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          lg,
          {
            engineRows: i,
            measureName: w?.measureName,
            measureUnit: I || w?.measureUnit,
            onSignalFocus: j
          }
        ) }),
        _ && /* @__PURE__ */ r.jsx(
          Dm,
          {
            format: (v) => Ce({ ...v, x: v.x instanceof Date ? v.x : new Date(v.x) })
          }
        )
      ]
    }
  ) });
}, pg = ({
  width: e,
  height: t
}) => {
  const n = Kt();
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
        const s = a.currentTarget.getBoundingClientRect(), l = a.clientX - s.left, i = a.clientY - s.top;
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
function vi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function hg(e, t, n) {
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
function mg(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++)
    a.push(n[c].getTime() - n[c - 1].getTime());
  const o = a.sort((c, d) => c - d), s = o[Math.floor(o.length / 2)], l = 3600 * 1e3, i = 24 * l;
  return s <= 2 * l ? "hourly" : s <= 2 * i ? "daily" : s <= 10 * i ? "weekly" : s <= 45 * i ? "monthly" : s <= 120 * i ? "quarterly" : "annually";
}
function wi(e, t) {
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
function gg(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((i) => i != null);
  if (!o.length) return;
  const s = Math.min(...o), l = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && l <= 1 && l > 0) return "%";
  } else if (s >= 0 && l <= 100 && l > 0) return "%";
}
function xg(e, t, n = 1) {
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
function ac(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: o,
    providedUnit: s,
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
  let p = (n || []).map(vi);
  if (!p.some(Boolean)) {
    const b = vi(o);
    b && a ? p = hg(f.length, b, a) : p = new Array(f.length).fill(void 0);
  }
  const g = mg(p, a), m = gg(
    f,
    s,
    l,
    e.percentHeuristic
  ), A = i && h >= 0 && f[h] != null ? f[h] : void 0, C = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function L() {
    if (h < 0) return -1;
    if (C.strategy === "previous" || C.strategy === "n-points") {
      let F = h - (C.strategy === "previous" ? 1 : Math.max(1, C.n || 1));
      if (!C.skipNulls) return F;
      for (let E = F; E >= 0; E--) if (f[E] != null) return E;
      return -1;
    }
    const b = p[h];
    if (!b) return -1;
    const w = new Date(b);
    w.setFullYear(w.getFullYear() - 1);
    let k = -1, j = 1 / 0;
    for (let F = 0; F < p.length; F++) {
      const E = p[F];
      if (!E || f[F] == null) continue;
      const $ = Math.abs(E.getTime() - w.getTime());
      $ < j && (j = $, k = F);
    }
    return k;
  }
  const D = L(), x = D >= 0 ? f[D] : null;
  let N;
  if (c && A != null && x != null) {
    const b = A - x, w = C.absolute !== !1, k = w ? b : x === 0 ? 0 : b / Math.abs(x) * 100;
    N = {
      value: Number.isFinite(k) ? Number(k.toFixed(2)) : 0,
      isPercent: w ? m === "%" : !0,
      period: `vs ${xg(g, a, C.strategy === "n-points" ? Math.max(1, C.n || 1) : 1)}`
    };
  }
  const M = h >= 0 ? p[h] : void 0, _ = d && wi(M, g) ? `Latest: ${wi(M, g)}` : void 0;
  return { value: A, unit: m, delta: N, metadata: _, latestDate: M, frequency: g };
}
function bg(e) {
  const { rows: t } = fr(e), n = rs(e);
  return { rows: t, visuals: n.visuals };
}
const ss = 13;
function is(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case Je.Improvement:
          return Le.Improvement;
        case Je.Concern:
          return Le.Concern;
        case Je.NoJudgement:
          return Le.Neither;
        default:
          return null;
      }
    });
}
function oc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === Je.NoJudgement);
}
function Si(e, t) {
  const n = e === St.G ? St.G : e === St.T ? St.T : St.XmR, a = t === Ae.Up ? Ae.Up : t === Ae.Down ? Ae.Down : Ae.Neither;
  return { chartType: n, metricImprovement: a };
}
function _i(e, t, n) {
  const a = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : ss, o = { minimumPoints: a };
  return t.filter(
    (l) => !l.ghost && typeof l.value == "number"
  ).length >= a && (o.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (o.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(o, n), Object.keys(o).length ? o : void 0;
}
function yg(e, t, n) {
  const a = O.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const l = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
    return !(0 >= l && 0 <= i);
  }, [e]), { slotPx: o, totalReservedPx: s } = O.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const i = (t ?? 260) - 60, c = Sr, u = c + Oh, f = n?.maxFraction, h = Math.max(
      _r,
      Math.floor(i * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: o, totalReservedPx: s };
}
function vg(e, t, n, a) {
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
  let l = Math.min(...o), i = Math.max(...o);
  return n.alwaysShowZeroY && (l = Math.min(0, l)), n.alwaysShowHundredY && (i = Math.max(100, i)), [l, i];
}
function xo(e, t) {
  if (!e?.length || t.chartType !== St.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let p = 0; p < e.length; p++) {
    const y = e[p], g = y.value;
    y?.ghost || typeof g == "number" && Number.isFinite(g) && a.push({ idx: p, value: g });
  }
  if (a.length < n * 2) return null;
  let o = 0, s = 0;
  for (let p = 1; p < a.length; p++)
    o += Math.abs(a[p].value - a[p - 1].value), s++;
  if (s === 0) return null;
  const i = o / s * (2.66 / 3);
  if (!Number.isFinite(i) || i <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Ae.Up, u = t.metricImprovement === Ae.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, y) {
    let g = 0, m = 0;
    for (let A = p; A < y; A++)
      g += a[A].value, m++;
    return m ? g / m : NaN;
  }
  for (let p = n; p <= a.length - n; p++) {
    const y = h(p - n, p), g = h(p, p + n);
    if (!Number.isFinite(y) || !Number.isFinite(g)) continue;
    const m = g - y, A = m / i;
    let C = !1, L = !1;
    if (d ? (C = A >= c, L = !0) : u ? (C = -A >= c, L = !1) : (C = Math.abs(A) >= c, L = m > 0), !C) continue;
    const D = (M) => L ? M > y : M < y;
    let x = !0;
    for (let M = p; M < p + n; M++)
      if (!D(a[M].value)) {
        x = !1;
        break;
      }
    if (!x) continue;
    const N = a[p].idx;
    if (!(t.minGap && f >= 0 && N - f < t.minGap))
      return N;
  }
  return null;
}
function wg(e, t) {
  const n = xo(e, t);
  return n == null ? e.slice() : e.map((a, o) => o === n ? { ...a, baseline: !0 } : a);
}
function Sg(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return wg(e, t);
  let a = e.slice(), o = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; o < n; ) {
    const l = xo(a, { ...t, minGap: s });
    if (l == null) break;
    if (a[l]?.baseline) {
      const i = xo(a, { ...t, minGap: s + 1 });
      if (i == null || i === l) break;
      a = a.map((c, d) => d === i ? { ...c, baseline: !0 } : c), o++;
      continue;
    }
    a = a.map((i, c) => c === l ? { ...i, baseline: !0 } : i), o++;
  }
  return a;
}
const _g = (e) => {
  const t = O.useCallback(
    (Ee) => String(Ee).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Ie) => Ie.length ? Ie[0].toUpperCase() + Ie.slice(1) : Ie).join(" "),
    []
  ), n = O.useCallback(
    (Ee) => String(Ee).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Re) => Re.length ? Re[0].toUpperCase() + Re.slice(1) : Re).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && e.disableTrendSideGating !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: a,
    effTargets: o,
    effBaselines: s,
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
    effShowTrendGatingExplanation: A,
    effEnableNeutralNoJudgement: C,
    effEnableRules: L,
    effShowPartitionMarkers: D,
    effShowTrendStartMarkers: x,
    effShowFirstFavourableCrossMarkers: N,
    effShowTrendBridgeOverlay: M,
    effShowSignalsInspector: _,
    effOnSignalFocus: b,
    effShowWarningsPanel: w,
    effWarningsFilter: k,
    effShowEmbeddedIcon: j,
    effEmbeddedIconVariant: F,
    effEmbeddedIconRunLength: E,
    effShowFocusIndicator: $,
    effHeight: I,
    effClassName: H,
    effAriaLabel: oe,
    effUnit: Y,
    effNarrationContext: R,
    effShowZones: ee,
    effShowPoints: W,
    effHighlightOutOfControl: X,
    effVisualsScenario: q,
    effVisualsEngineSettings: Q,
    effSource: fe,
    effPrecomputedVisuals: ne,
    effEngineAutoRecalc: re
  } = dg(e), K = oe ?? e.ariaLabel, te = I ?? e.height ?? 260, ie = H ?? e.className, U = Y ?? e.unit, se = R ?? e.narrationContext, ae = ee ?? e.showZones, ce = W ?? e.showPoints, le = X ?? e.highlightOutOfControl, ve = q ?? e.visualsScenario ?? Xl.None, De = Q ?? e.visualsEngineSettings, Ce = fe ?? e.source, ge = e.a11y?.announceFocus ?? e.announceFocus ?? !1, G = O.useMemo(() => a.map((Ee, Re) => ({
    x: Ee.x,
    value: Ee.y,
    target: o?.[Re] ?? void 0,
    baseline: s?.[Re] ?? void 0,
    ghost: l?.[Re] ?? void 0
  })), [a, o, s, l]), v = O.useMemo(() => {
    try {
      const Ee = re;
      return Ee?.enabled ? Sg(G, {
        chartType: i,
        metricImprovement: c,
        shiftLength: Ee.shiftLength,
        deltaSigma: Ee.deltaSigma,
        minGap: Ee.minGap,
        maxInsertions: Ee.maxInsertions
      }) : G;
    } catch {
      return G;
    }
  }, [G, re, i, c]), T = O.useMemo(() => {
    if (ne?.visuals) return ne.visuals;
    try {
      const Ee = _i(
        d,
        v,
        De
      ), { chartType: Re, metricImprovement: Ie } = Si(
        i,
        c
      ), xt = {
        chartType: Re,
        metricImprovement: Ie,
        data: v,
        settings: Ee
      }, { visuals: ft } = Qm(xt, ve, {
        trendVisualMode: m === rc.Ungated ? Hn.Ungated : Hn.Gated,
        enableNeutralNoJudgement: C
      });
      return ft || [];
    } catch {
      return [];
    }
  }, [
    ne?.visuals?.length,
    v,
    i,
    c,
    m,
    C,
    d,
    ve,
    De
  ]), S = O.useMemo(() => {
    if (ne?.rows)
      try {
        const Ee = ne.rows, Re = (Ie) => {
          switch (Ie) {
            case Se.ImprovementHigh:
            case Se.ImprovementLow:
              return Le.Improvement;
            case Se.ConcernHigh:
            case Se.ConcernLow:
              return Le.Concern;
            case Se.NeitherHigh:
            case Se.NeitherLow:
              return Le.Neither;
            case Se.CommonCause:
            default:
              return Le.Neither;
          }
        };
        return Ee.map(
          (Ie, xt) => ({
            data: {
              value: Ie.value,
              ghost: !!Ie.ghost
            },
            partition: { id: Ie.partitionId },
            limits: {
              mean: Ie.mean,
              ucl: Ie.upperProcessLimit,
              lcl: Ie.lowerProcessLimit,
              oneSigma: { upper: Ie.upperOneSigma, lower: Ie.lowerOneSigma },
              twoSigma: { upper: Ie.upperTwoSigma, lower: Ie.lowerTwoSigma }
            },
            rules: {
              singlePoint: { up: !!Ie.singlePointUp, down: !!Ie.singlePointDown },
              twoOfThree: { up: !!Ie.twoSigmaUp, down: !!Ie.twoSigmaDown },
              fourOfFive: { up: !!Ie.fourOfFiveUp, down: !!Ie.fourOfFiveDown },
              shift: { up: !!Ie.shiftUp, down: !!Ie.shiftDown },
              trend: { up: !!Ie.trendUp, down: !!Ie.trendDown }
            },
            classification: {
              variation: Re(Ie.variationIcon),
              neutralSpecialCauseValue: Ie.variationIcon === Se.NeitherHigh || Ie.variationIcon === Se.NeitherLow ? Ie.specialCauseImprovementValue ?? Ie.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: v[xt]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Ee = _i(
        d,
        v,
        De
      ), { chartType: Re, metricImprovement: Ie } = Si(
        i,
        c
      ), xt = {
        chartType: Re,
        metricImprovement: Ie,
        data: v,
        settings: Ee
      }, { rows: ft } = bg(xt), kt = (Fe) => {
        switch (Fe) {
          case Se.ImprovementHigh:
          case Se.ImprovementLow:
            return Le.Improvement;
          case Se.ConcernHigh:
          case Se.ConcernLow:
            return Le.Concern;
          case Se.NeitherHigh:
          case Se.NeitherLow:
            return Le.Neither;
          case Se.CommonCause:
          default:
            return Le.Neither;
        }
      };
      return ft.map(
        (Fe, jt) => ({
          data: {
            value: Fe.value,
            ghost: !!Fe.ghost
          },
          partition: { id: Fe.partitionId },
          limits: {
            mean: Fe.mean,
            ucl: Fe.upperProcessLimit,
            lcl: Fe.lowerProcessLimit,
            oneSigma: { upper: Fe.upperOneSigma, lower: Fe.lowerOneSigma },
            twoSigma: { upper: Fe.upperTwoSigma, lower: Fe.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!Fe.singlePointUp, down: !!Fe.singlePointDown },
            twoOfThree: { up: !!Fe.twoSigmaUp, down: !!Fe.twoSigmaDown },
            fourOfFive: { up: !!Fe.fourOfFiveUp, down: !!Fe.fourOfFiveDown },
            shift: { up: !!Fe.shiftUp, down: !!Fe.shiftDown },
            trend: { up: !!Fe.trendUp, down: !!Fe.trendDown }
          },
          classification: {
            variation: kt(Fe.variationIcon),
            neutralSpecialCauseValue: Fe.variationIcon === Se.NeitherHigh || Fe.variationIcon === Se.NeitherLow ? Fe.specialCauseImprovementValue ?? Fe.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: v[jt]?.target ?? null
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
  ]) || null, P = (S || []).slice().reverse().find((Ee) => Ee.limits.mean != null), z = P?.limits.mean ?? null, V = O.useMemo(() => {
    const Ee = [];
    try {
      const Re = S, Ie = d?.minimumPoints ?? 13, xt = d?.minimumPoints ?? 12;
      if (Re && Re.length) {
        const ft = Re.filter(
          (Fe) => !Fe.data.ghost && Fe.data.value != null
        ).length;
        ft < Ie && Ee.push({
          code: Ur.InsufficientPointsGlobal,
          severity: Tt.Warning,
          category: Or.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: ft, minimumPoints: Ie }
        });
        const kt = /* @__PURE__ */ new Map();
        for (const Fe of Re) {
          const jt = Fe.partition.id ?? 0, en = kt.get(jt) || { size: 0, nonGhost: 0 };
          en.size += 1, !Fe.data.ghost && Fe.data.value != null && (en.nonGhost += 1), kt.set(jt, en);
        }
        for (const [Fe, jt] of kt)
          jt.nonGhost > 0 && jt.nonGhost < xt && Ee.push({
            code: Ur.InsufficientPointsPartition,
            severity: Tt.Warning,
            category: Or.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: Fe,
              nonGhostCount: jt.nonGhost,
              minimumPointsPartition: xt
            }
          });
      }
    } catch {
    }
    return Ee;
  }, [S, d?.minimumPoints]), Z = O.useMemo(() => V.length ? k ? V.filter((Ee) => !(k.severities && Ee.severity && !k.severities.includes(Ee.severity) || k.categories && Ee.category && !k.categories.includes(Ee.category) || k.codes && !k.codes.includes(Ee.code))) : V : [], [V, k]), J = P?.limits.ucl ?? null, ue = P?.limits.lcl ?? null, de = P?.limits.oneSigma.upper ?? null, xe = P?.limits.oneSigma.lower ?? null, we = P?.limits.twoSigma.upper ?? null, he = P?.limits.twoSigma.lower ?? null, Te = z != null && de != null ? Math.abs(de - z) : 0, Pe = O.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), We = O.useMemo(
    () => vg(
      a,
      { mean: z, ucl: J, lcl: ue, onePos: de, oneNeg: xe, twoPos: we, twoNeg: he },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      o ?? null
    ),
    [
      a,
      z,
      J,
      ue,
      de,
      xe,
      we,
      he,
      o,
      u,
      f,
      h
    ]
  ), He = O.useMemo(() => {
    const Ee = (Re) => {
      const Ie = Re.filter(
        (ft) => typeof ft == "number" && !isNaN(ft)
      );
      if (!Ie.length) return null;
      const xt = Ie[0];
      return Ie.every((ft) => ft === xt) ? xt : null;
    };
    if (S && S.length) {
      const Re = Ee(S.map((Ie) => Ie.target));
      if (Re != null) return Re;
    }
    return o && o.length ? Ee(o) : null;
  }, [S, o]), { show: tt, slotPx: Ye, totalReservedPx: it } = yg(
    We,
    te,
    { maxFraction: 0.35 }
  ), at = tt ? it : 0, et = O.useMemo(() => {
    const Ee = a.map((Re) => Re.x);
    return ac({
      values: a.map((Re) => Re.y),
      dates: Ee,
      providedUnit: U || se?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, U, se?.measureUnit]), qe = U ?? se?.measureUnit ?? et.unit, At = O.useMemo(() => qe ? { ...se || {}, measureUnit: qe } : se, [se, qe]), pr = O.useMemo(() => {
    if (!S) return [];
    const Ee = [];
    for (let Re = 1; Re < S.length; Re++)
      S[Re].partition.id !== S[Re - 1].partition.id && Ee.push(Re);
    return Ee;
  }, [S]), cn = O.useMemo(
    () => ig({
      show: !!j,
      rowsForUi: S,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: F,
      runLength: E
    }),
    [
      j,
      S,
      d?.minimumPoints,
      c,
      F,
      E
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ie ? `fdp-spc-chart-wrapper ${ie}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          og,
          {
            show: !!j,
            variationNode: cn,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          Hh,
          {
            height: te,
            ariaLabel: K,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ r.jsx(zh, { series: Pe, yDomain: We, yBottomGapPx: at, children: (() => {
              const Ee = {
                data: {
                  series: Pe,
                  engineRows: S,
                  visualCategories: T,
                  partitionMarkers: D ? pr : []
                },
                targets: {
                  limits: { mean: z, ucl: J, lcl: ue, sigma: Te, onePos: de, oneNeg: xe, twoPos: we, twoNeg: he },
                  uniformTarget: He
                },
                visuals: {
                  showPoints: ce,
                  showZones: ae,
                  highlightOutOfControl: le,
                  gradientSequences: p,
                  sequenceTransition: y,
                  processLineWidth: g,
                  showFocusIndicator: $,
                  enableRules: L,
                  enableNeutralNoJudgement: C,
                  showTrendStartMarkers: x,
                  showFirstFavourableCrossMarkers: N,
                  showTrendBridgeOverlay: M
                },
                a11y: {
                  announceFocus: ge,
                  ariaLabel: K,
                  narrationContext: At,
                  showSignalsInspector: _,
                  onSignalFocus: b,
                  showTrendGatingExplanation: A
                },
                axis: { zeroBreakSlotGapPx: Ye },
                compute: { effectiveUnit: qe, metricImprovement: c }
              };
              return /* @__PURE__ */ r.jsx(fg, { ...Ee });
            })() })
          }
        ),
        Ce && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Ce == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          Ce
        ] }) : Ce }),
        /* @__PURE__ */ r.jsx(
          ag,
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
function kg(e, t) {
  const {
    chartType: n = St.XmR,
    metricImprovement: a,
    minimumPoints: o = ss,
    enableNeutralNoJudgement: s = !0,
    includeSignalFallbacks: l = !0
  } = t, i = e.map((L) => ({ x: L.x, value: L.value ?? L.y ?? null }));
  let c = null;
  try {
    const L = i.filter(
      (x) => typeof x.value == "number"
    ).length, D = { minimumPoints: o };
    L >= o && (D.chartLevelEligibility = !0), c = fr({ chartType: n, metricImprovement: a, data: i, settings: D });
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
    f = ur(d, {
      metricImprovement: a,
      enableNeutralNoJudgement: s
    });
  } catch {
    f = [];
  }
  const h = Wr(
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
  let A, C;
  return l && (A = is(f), C = oc(f)), {
    rows: d,
    visuals: f,
    latestState: h,
    lastVariationIcon: p,
    centerLine: y,
    controlLimits: g,
    sigmaBands: m,
    pointSignals: A,
    pointNeutralSpecialCause: C
  };
}
const n1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: sn,
  BaselineSuggestionReason: Ol,
  ChartType: St,
  DEFAULT_MIN_POINTS: ss,
  Icons: sg,
  ImprovementDirection: Ae,
  PARITY_V26: Ql,
  RULE_METADATA: zl,
  SPCChart: _g,
  SPCTooltipOverlay: nc,
  SpcEmbeddedIconVariant: xn,
  SpcVisualCategory: Je,
  SpcWarningCategory: Or,
  SpcWarningCode: Ur,
  SpcWarningSeverity: Tt,
  VARIATION_COLOR_TOKENS: Nt,
  VariationIcon: Se,
  buildSpcV26a: fr,
  buildSpcV26aWithVisuals: rs,
  computeSpcPrecomputed: kg,
  computeSpcVisualCategories: ur,
  extractRuleIds: Sa,
  getVariationColorHex: Pm,
  getVariationColorToken: Wl,
  isSpecialCauseIcon: tc,
  mapIconToVariation: Wr,
  normaliseSpcSettingsV2: ql,
  ruleGlossary: En,
  variationLabel: _a,
  visualsToNeutralFlags: oc,
  visualsToPointSignals: is,
  withParityV26: Km
}, Symbol.toStringTag, { value: "Module" }));
function Cg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Ng(e) {
  const {
    values: t,
    x: n,
    chartType: a = St.XmR,
    metricImprovement: o = Ae.Neither,
    showLimits: s = !0,
    showLimitBand: l = !1,
    showInnerBands: i = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = O.useMemo(() => {
    const x = [];
    for (let N = 0; N < t.length; N++)
      x.push({ x: n?.[N], value: t[N] });
    return x;
  }, [t, n]), u = O.useMemo(() => {
    try {
      const x = d.map((b, w) => ({ x: b.x ?? w, value: b.value })), N = 13, M = x.filter((b) => typeof b.value == "number").length, _ = { minimumPoints: N };
      return M >= N && (_.chartLevelEligibility = !0), fr({ chartType: a, metricImprovement: o, data: x, settings: _ });
    } catch {
      return null;
    }
  }, [d, a, o]), f = O.useMemo(() => {
    const x = u?.rows;
    if (!x || x.length === 0) return null;
    for (let N = x.length - 1; N >= 0; N--) {
      const M = x[N];
      if (M && M.value != null && !M.ghost) return M;
    }
    return x[x.length - 1] ?? null;
  }, [u]), h = O.useMemo(() => {
    const x = u?.rows;
    if (!x || x.length === 0) return null;
    let N = x[x.length - 1];
    for (let M = x.length - 1; M >= 0; M--) {
      const _ = x[M];
      if (_ && _.value != null && !_.ghost) {
        N = _;
        break;
      }
    }
    return Wr(N?.variationIcon);
  }, [u]), p = O.useMemo(() => f?.mean ?? null, [f]), y = O.useMemo(() => {
    if (!f) return null;
    const x = f?.lowerProcessLimit ?? null, N = f?.upperProcessLimit ?? null;
    return x == null && N == null ? null : { lower: x, upper: N };
  }, [f]), g = O.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), m = O.useMemo(() => {
    const x = u?.rows;
    if (!(!x || x.length === 0))
      try {
        return ur(x, {
          metricImprovement: o,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, o]), A = O.useMemo(() => is(m), [m?.length]), C = O.useMemo(() => {
    if (!(!m || m.length === 0))
      return m.map((x) => x === Je.NoJudgement);
  }, [m?.length]), L = O.useMemo(() => {
    let x = null;
    if (f && f.value != null && !f.ghost) {
      const F = f.variationIcon;
      h === _e.SpecialCauseNoJudgement ? x = tc(F) ? _e.SpecialCauseNoJudgement : _e.CommonCause : x = Wr(F) ?? _e.CommonCause;
    }
    const N = x ?? _e.CommonCause, M = ka[N].hex, [_, b, w] = Cg(M), k = Ca();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${_}, ${b}, ${w}, ${k.start}) 0%, rgba(${_}, ${b}, ${w}, ${k.mid}) 50%, rgba(${_}, ${b}, ${w}, ${k.end}) 100%)`,
      "--fdp-metric-card-accent": M
    };
  }, [f, h]);
  return { sparkProps: O.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: s,
    showLimitBand: l,
    showInnerBands: i,
    metricImprovement: o,
    centerLine: p,
    controlLimits: y,
    sigmaBands: g,
    pointSignals: A,
    pointNeutralSpecialCause: C,
    visualCategories: m,
    variationState: h ?? void 0
  }), [
    d,
    c,
    s,
    l,
    i,
    o,
    h,
    p,
    y?.lower,
    y?.upper,
    g?.upperTwo,
    g?.lowerOne,
    g?.lowerTwo,
    A?.length,
    C?.length,
    m?.length
  ]), metricCardStyle: L, latestState: h };
}
const r1 = ({
  sparkData: e,
  direction: t = Ae.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: o = !1,
  showInnerBands: s = !1,
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
  const g = Ng({
    values: e.map((N) => N.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n
  }), m = /* @__PURE__ */ r.jsx(ec, { ...g.sparkProps, maxPoints: l }), A = O.useMemo(() => ac({
    values: e.map((N) => typeof N.value == "number" ? N.value : null),
    dates: e.map((N) => N.date),
    intervalHint: f,
    startDate: h,
    providedUnit: y.unit,
    defaultUnit: u,
    autoValue: i,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, y.unit, u, i, c, d, p]), C = i && A.value != null ? A.value : y.value, L = c && A.delta ? A.delta : y.delta, D = A.unit || y.unit, x = d && A.metadata ? A.metadata : y.metadata;
  return /* @__PURE__ */ r.jsx(
    Lm,
    {
      ...y,
      value: C,
      unit: D,
      delta: L,
      metadata: x,
      visual: m,
      style: g.metricCardStyle
    }
  );
}, jg = "150ms", Mg = "300ms", Ig = "500ms", Dg = "cubic-bezier(0.4, 0, 1, 1)", Tg = "cubic-bezier(0, 0, 0.2, 1)", Lg = "cubic-bezier(0.4, 0, 0.2, 1)", $g = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Ag = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Eg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Pg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Fg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Rg = "1px", Bg = "2px", Hg = "4px", zg = "4px", Og = "4px", Ug = "2px", Wg = "1px", Gg = "0px", Vg = "4px", Yg = "8px", Zg = "12px", sc = "#d8dde0", ic = "#4c6272", lc = "#d8dde0", cc = "#aeb7bd", dc = "#d5281b", uc = "#005eb8", fc = "#ffffff", pc = "#212b32", hc = "#007f3b", mc = "#330072", gc = "#7c2855", xc = "#d5281b", bc = "#ffeb3b", yc = "#fff9c4", vc = "#ffb81c", wc = "#ed8b00", Sc = "#00a499", _c = "#ae2573", kc = "#4c6272", Cc = "#768692", Nc = "#aeb7bd", jc = "#d8dde0", Mc = "#f0f4f5", Jg = "#212b32", qg = "#4c6272", Xg = "#ffffff", Qg = "#212b32", Kg = "#005eb8", e0 = "#7c2855", t0 = "#003087", n0 = "#330072", r0 = "#ffeb3b", a0 = "#212b32", o0 = "#d8dde0", s0 = "#ffffff33", i0 = "#d5281b", l0 = "#4c6272", c0 = "#ffffff", d0 = "#007f3b", u0 = "#ffffff", f0 = "#006530", p0 = "#004021", h0 = "#004021", m0 = "#00000000", g0 = "#ffffff", x0 = "#005eb8", b0 = "#005eb8", y0 = "#d9e5f2", v0 = "#c7daf0", w0 = "#005eb8", S0 = "#ffffff", _0 = "#212b32", k0 = "#d9dde0", C0 = "#b3bcc2", N0 = "#b3bcc2", j0 = "#d5281b", M0 = "#aa2016", I0 = "#6a140e", D0 = "#6a140e", T0 = "#005eb8", L0 = "#004b93", $0 = "#002f5c", A0 = "#002f5c", E0 = "8px", P0 = "16px", F0 = "12px", R0 = "16px", B0 = "4px", H0 = "40px", z0 = "4px", O0 = "40px", U0 = "12px", W0 = "16px", G0 = "32px", V0 = "16px", Y0 = "20px", Z0 = "28px", J0 = "9px", q0 = "2px", X0 = "16px", Q0 = "24px", K0 = "8px", ex = "24px", tx = "16px", nx = "4px", rx = "4px", ax = "4px", ox = "8px", sx = "4px", ix = "16px", lx = "#007f3b", cx = "#006530", dx = "#004021", ux = "#d8dde0", fx = "#ffffff", px = "#768692", hx = "#00000000", mx = "#ffeb3b", gx = "#00000000", xx = "#ffffff", bx = "#d9e5f2", yx = "#c7daf0", vx = "#005eb8", wx = "#005eb8", Ic = "8px", Dc = "16px", Tc = "12px", Lc = "16px", Sx = "2px", _x = "4px", kx = "4px", Cx = "600", Nx = "#ffffff", jx = "#d8dde0", Mx = "#aeb7bd", Ix = "#f0f4f5", Dx = "#212b32", Tx = "#212b32", Lx = "#005eb8", $c = "16px", Ac = "32px", Ec = "16px", $x = "1px", Ax = "4px", Ex = "none", Px = "0 2px 4px rgba(0, 0, 0, 0.1)", Fx = "#ffffff", Rx = "#ffffff", Bx = "#d8dde0", Hx = "#ffffff", zx = "#4c6272", Ox = "#ffeb3b", Ux = "#d5281b", Wx = "#aeb7bd", Gx = "#212b32", Vx = "#4c6272", Yx = "#768692", Zx = "#212b32", Jx = "#ffffff", qx = "600", Xx = "#d5281b", Qx = "600", Kx = "#4c6272", Pc = "4px", Fc = "40px", Rc = "40px", Bc = "12px", eb = "2px", tb = "4px", nb = "0px", rb = "16px", ab = "18px", ob = "24px", sb = "32px", ib = "34px", lb = "32px", cb = "40px", db = "48px", ub = "5.4ex", fb = "7.2ex", pb = "9ex", hb = "10.8ex", mb = "20ex", gb = "38ex", xb = "56ex", bb = "44px", yb = "40px", vb = "1020px", wb = "100%", Sb = "50%", _b = "33.333%", kb = "25%", Cb = "20%", Nb = "320px", jb = "641px", Mb = "1025px", Ib = "1280px", Db = "960px", Tb = "32px", Lb = "16px", $b = "#d5281b", Ab = "#d5281b", Eb = "#ffffff", Pb = "#007f3b", Fb = "#007f3b", Rb = "#ffffff", Bb = "#ffeb3b", Hb = "#ffeb3b", zb = "#212b32", Ob = "#005eb8", Ub = "#005eb8", Wb = "#ffffff", Gb = "#d8dde0", Vb = "#aeb7bd", Yb = "#768692", Zb = "0 4px 0 #004021", Jb = "0 4px 0 #005eb8", qb = "0 4px 0 #6a140e", Xb = "0 4px 0 #ffeb3b", Qb = "none", Kb = "0 2px 4px rgba(0, 0, 0, 0.1)", ey = "4px", ty = "0px", ny = "solid", ry = "0 0 0 3px #ffeb3b", ay = "0 0 0 3px #ffeb3b", oy = "none", sy = "0 1px 3px rgba(0, 0, 0, 0.12)", iy = "0 2px 6px rgba(0, 0, 0, 0.16)", ly = "0 4px 12px rgba(0, 0, 0, 0.20)", Hc = "0", zc = "4px", Oc = "8px", Uc = "16px", Wc = "24px", Gc = "32px", Vc = "40px", Yc = "48px", Zc = "56px", Jc = "64px", bo = "0", yo = "0", vo = "4px", wo = "4px", So = "8px", _o = "8px", ko = "8px", Co = "16px", No = "16px", jo = "24px", Mo = "24px", Io = "32px", Do = "32px", To = "40px", Lo = "40px", $o = "48px", Ao = "48px", Eo = "56px", Po = "56px", Fo = "64px", Gr = "Frutiger W01", Vr = "Arial, Helvetica, sans-serif", Yr = "sans-serif", Zr = "400", Jr = "600", qr = "400", Xr = "12px", Qr = "14px", Kr = "12pt", ea = "14px", ta = "16px", na = "12pt", ra = "16px", aa = "19px", oa = "13pt", sa = "19px", ia = "22px", la = "15pt", ca = "22px", da = "26px", ua = "17pt", fa = "27px", pa = "36px", ha = "20pt", ma = "33px", ga = "48px", xa = "24pt", Ro = "16px", Bo = "24px", Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Rt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, cy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: jg,
  AnimationDurationNormal: Mg,
  AnimationDurationSlow: Ig,
  AnimationEasingBounce: $g,
  AnimationEasingEaseIn: Dg,
  AnimationEasingEaseInOut: Lg,
  AnimationEasingEaseOut: Tg,
  BorderColorCard: lc,
  BorderColorCardHover: cc,
  BorderColorDefault: sc,
  BorderColorError: dc,
  BorderColorForm: ic,
  BorderRadiusLarge: Zg,
  BorderRadiusMedium: Yg,
  BorderRadiusNone: Gg,
  BorderRadiusSmall: Vg,
  BorderWidthCardBottom: zg,
  BorderWidthDefault: Rg,
  BorderWidthFormElement: Bg,
  BorderWidthFormElementError: Hg,
  BorderWidthPanel: Og,
  BorderWidthTableCell: Wg,
  BorderWidthTableHeader: Ug,
  BreakpointDesktop: Mb,
  BreakpointLargeDesktop: Ib,
  BreakpointMobile: Nb,
  BreakpointTablet: jb,
  ButtonBorderRadius: _x,
  ButtonBorderWidth: Sx,
  ButtonPrimaryBackgroundActive: dx,
  ButtonPrimaryBackgroundDefault: lx,
  ButtonPrimaryBackgroundDisabled: ux,
  ButtonPrimaryBackgroundHover: cx,
  ButtonPrimaryBorderDefault: hx,
  ButtonPrimaryBorderFocus: mx,
  ButtonPrimaryTextDefault: fx,
  ButtonPrimaryTextDisabled: px,
  ButtonSecondaryBackgroundActive: yx,
  ButtonSecondaryBackgroundDefault: gx,
  ButtonSecondaryBackgroundHover: bx,
  ButtonSecondaryBackgroundSolid: xx,
  ButtonSecondaryBorderDefault: wx,
  ButtonSecondaryTextDefault: vx,
  ButtonShadowSize: kx,
  ButtonSpacingPaddingHorizontalDesktop: Lc,
  ButtonSpacingPaddingHorizontalMobile: Dc,
  ButtonSpacingPaddingVerticalDesktop: Tc,
  ButtonSpacingPaddingVerticalMobile: Ic,
  ButtonTypographyWeight: Cx,
  CardBackgroundDefault: Nx,
  CardBorderBottom: Ix,
  CardBorderDefault: jx,
  CardBorderHover: Mx,
  CardBorderWidthBottom: Ax,
  CardBorderWidthDefault: $x,
  CardShadowDefault: Ex,
  CardShadowHover: Px,
  CardSpacingHeadingMargin: Ec,
  CardSpacingPaddingDesktop: Ac,
  CardSpacingPaddingMobile: $c,
  CardTextDescription: Tx,
  CardTextHeading: Dx,
  CardTextLink: Lx,
  ColorBorderDefault: o0,
  ColorBorderSecondary: s0,
  ColorButtonLoginActive: $0,
  ColorButtonLoginBackground: T0,
  ColorButtonLoginHover: L0,
  ColorButtonLoginShadow: A0,
  ColorButtonPrimaryActive: p0,
  ColorButtonPrimaryBackground: d0,
  ColorButtonPrimaryHover: f0,
  ColorButtonPrimaryShadow: h0,
  ColorButtonPrimaryText: u0,
  ColorButtonReverseActive: C0,
  ColorButtonReverseBackground: S0,
  ColorButtonReverseHover: k0,
  ColorButtonReverseShadow: N0,
  ColorButtonReverseText: _0,
  ColorButtonSecondaryActive: v0,
  ColorButtonSecondaryBackground: m0,
  ColorButtonSecondaryBackgroundSolid: g0,
  ColorButtonSecondaryBorder: x0,
  ColorButtonSecondaryHover: y0,
  ColorButtonSecondaryShadow: w0,
  ColorButtonSecondaryText: b0,
  ColorButtonWarningActive: I0,
  ColorButtonWarningBackground: j0,
  ColorButtonWarningHover: M0,
  ColorButtonWarningShadow: D0,
  ColorError: i0,
  ColorFocusBackground: r0,
  ColorFocusText: a0,
  ColorFormBackground: c0,
  ColorFormBorder: l0,
  ColorGrey1: kc,
  ColorGrey2: Cc,
  ColorGrey3: Nc,
  ColorGrey4: jc,
  ColorGrey5: Mc,
  ColorLinkActive: t0,
  ColorLinkDefault: Kg,
  ColorLinkHover: e0,
  ColorLinkVisited: n0,
  ColorPrimaryBlack: pc,
  ColorPrimaryBlue: uc,
  ColorPrimaryDarkPink: gc,
  ColorPrimaryGreen: hc,
  ColorPrimaryPurple: mc,
  ColorPrimaryRed: xc,
  ColorPrimaryWhite: fc,
  ColorPrimaryYellow: bc,
  ColorSecondaryAquaGreen: Sc,
  ColorSecondaryOrange: wc,
  ColorSecondaryPaleYellow: yc,
  ColorSecondaryPink: _c,
  ColorSecondaryWarmYellow: vc,
  ColorTextPrimary: Jg,
  ColorTextPrint: Qg,
  ColorTextReverse: Xg,
  ColorTextSecondary: qg,
  ComponentBlur: rx,
  ComponentBreadcrumbChevronMarginLeft: J0,
  ComponentBreadcrumbChevronMarginRight: q0,
  ComponentBreadcrumbPaddingTopDesktop: Q0,
  ComponentBreadcrumbPaddingTopMobile: X0,
  ComponentButtonPaddingDesktopHorizontal: R0,
  ComponentButtonPaddingDesktopVertical: F0,
  ComponentButtonPaddingMobileHorizontal: P0,
  ComponentButtonPaddingMobileVertical: E0,
  ComponentButtonShadowSize: B0,
  ComponentCardHeadingMargin: V0,
  ComponentCardPaddingDesktop: G0,
  ComponentCardPaddingMobile: W0,
  ComponentDetails: ox,
  ComponentExpander: sx,
  ComponentFormCheckboxLabelPadding: U0,
  ComponentFormCheckboxSize: O0,
  ComponentFormInputMinHeight: H0,
  ComponentFormInputPadding: z0,
  ComponentLink: ax,
  ComponentPagination: ix,
  ComponentPanelPaddingDesktop: Z0,
  ComponentPanelPaddingMobile: Y0,
  ComponentSpread: nx,
  ComponentSummaryListCellPaddingHorizontal: ex,
  ComponentSummaryListCellPaddingVertical: K0,
  ComponentSummaryListRowMargin: tx,
  ElevationHigh: ly,
  ElevationLow: sy,
  ElevationMedium: iy,
  ElevationNone: oy,
  FocusOutlineOffset: ty,
  FocusOutlineStyle: ny,
  FocusOutlineWidth: ey,
  FocusShadowButton: ay,
  FocusShadowInput: ry,
  FontFamilyBase: Gr,
  FontFamilyFallback: Vr,
  FontFamilyPrint: Yr,
  FontLineHeightBase: Bo,
  FontSize14Mobile: Xr,
  FontSize14Print: Kr,
  FontSize14Tablet: Qr,
  FontSize16Mobile: ea,
  FontSize16Print: na,
  FontSize16Tablet: ta,
  FontSize19Mobile: ra,
  FontSize19Print: oa,
  FontSize19Tablet: aa,
  FontSize22Mobile: sa,
  FontSize22Print: la,
  FontSize22Tablet: ia,
  FontSize26Mobile: ca,
  FontSize26Print: ua,
  FontSize26Tablet: da,
  FontSize36Mobile: fa,
  FontSize36Print: ha,
  FontSize36Tablet: pa,
  FontSize48Mobile: ma,
  FontSize48Print: xa,
  FontSize48Tablet: ga,
  FontSizeBase: Ro,
  FontWeightBold: Jr,
  FontWeightLight: qr,
  FontWeightNormal: Zr,
  FormBorderRadius: nb,
  FormBorderWidthDefault: eb,
  FormBorderWidthError: tb,
  FormErrorTextDefault: Xx,
  FormErrorTypographyWeight: Qx,
  FormHintTextDefault: Kx,
  FormInputBackgroundDefault: Fx,
  FormInputBackgroundDisabled: Bx,
  FormInputBackgroundError: Hx,
  FormInputBackgroundFocus: Rx,
  FormInputBorderDefault: zx,
  FormInputBorderDisabled: Wx,
  FormInputBorderError: Ux,
  FormInputBorderFocus: Ox,
  FormInputTextDefault: Gx,
  FormInputTextDisabled: Yx,
  FormInputTextPlaceholder: Vx,
  FormLabelTextDefault: Zx,
  FormLabelTextRequired: Jx,
  FormLabelTypographyWeight: qx,
  FormSpacingCheckboxLabelPadding: Bc,
  FormSpacingCheckboxSize: Rc,
  FormSpacingInputMinHeight: Fc,
  FormSpacingInputPadding: Pc,
  GridGutter: Tb,
  GridGutterHalf: Lb,
  GridPageWidth: Db,
  HeadingsNhsukHeadingL: Rt,
  HeadingsNhsukHeadingM: Bt,
  HeadingsNhsukHeadingS: Ht,
  HeadingsNhsukHeadingXl: Ft,
  HeadingsNhsukHeadingXs: zt,
  LayoutColumnActions: Cb,
  LayoutColumnFull: wb,
  LayoutColumnHalf: Sb,
  LayoutColumnQuarter: kb,
  LayoutColumnThird: _b,
  LayoutContainerMaxWidth: vb,
  ParagraphsBody: Ot,
  ParagraphsBodyLarge: Ut,
  ParagraphsBodySmall: Wt,
  ParagraphsLedeText: Gt,
  ParagraphsLedeTextSmall: Vt,
  ShadowButtonDefault: Zb,
  ShadowButtonFocus: Xb,
  ShadowButtonSecondary: Jb,
  ShadowButtonWarning: qb,
  ShadowCardDefault: Qb,
  ShadowCardHover: Kb,
  SizeButtonMinHeightDesktop: yb,
  SizeButtonMinHeightMobile: bb,
  SizeFormControlLarge: db,
  SizeFormControlMedium: cb,
  SizeFormControlSmall: lb,
  SizeFormInputWidth2xl: gb,
  SizeFormInputWidth3xl: xb,
  SizeFormInputWidthLg: hb,
  SizeFormInputWidthMd: pb,
  SizeFormInputWidthSm: fb,
  SizeFormInputWidthXl: mb,
  SizeFormInputWidthXs: ub,
  SizeIconExtraLarge: sb,
  SizeIconLarge: ob,
  SizeIconMedium: ab,
  SizeIconNhsDefault: ib,
  SizeIconSmall: rb,
  Spacing0: Hc,
  Spacing1: zc,
  Spacing2: Oc,
  Spacing3: Uc,
  Spacing4: Wc,
  Spacing5: Gc,
  Spacing6: Vc,
  Spacing7: Yc,
  Spacing8: Zc,
  Spacing9: Jc,
  SpacingResponsive0Mobile: bo,
  SpacingResponsive0Tablet: yo,
  SpacingResponsive1Mobile: vo,
  SpacingResponsive1Tablet: wo,
  SpacingResponsive2Mobile: So,
  SpacingResponsive2Tablet: _o,
  SpacingResponsive3Mobile: ko,
  SpacingResponsive3Tablet: Co,
  SpacingResponsive4Mobile: No,
  SpacingResponsive4Tablet: jo,
  SpacingResponsive5Mobile: Mo,
  SpacingResponsive5Tablet: Io,
  SpacingResponsive6Mobile: Do,
  SpacingResponsive6Tablet: To,
  SpacingResponsive7Mobile: Lo,
  SpacingResponsive7Tablet: $o,
  SpacingResponsive8Mobile: Ao,
  SpacingResponsive8Tablet: Eo,
  SpacingResponsive9Mobile: Po,
  SpacingResponsive9Tablet: Fo,
  StateDisabledBackground: Gb,
  StateDisabledBorder: Vb,
  StateDisabledText: Yb,
  StateErrorBackground: $b,
  StateErrorBorder: Ab,
  StateErrorText: Eb,
  StateInfoBackground: Ob,
  StateInfoBorder: Ub,
  StateInfoText: Wb,
  StateSuccessBackground: Pb,
  StateSuccessBorder: Fb,
  StateSuccessText: Rb,
  StateWarningBackground: Bb,
  StateWarningBorder: Hb,
  StateWarningText: zb,
  TransitionButtonDefault: Ag,
  TransitionButtonShadow: Eg,
  TransitionCardHover: Fg,
  TransitionInputFocus: Pg
}, Symbol.toStringTag, { value: "Module" })), a1 = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), o1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
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
), s1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
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
), i1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
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
), l1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
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
), c1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
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
), d1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), u1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), f1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), p1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), h1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), m1 = () => je(() => cy, []), g1 = () => je(() => ({
  // Border colors
  BorderColorDefault: sc,
  BorderColorForm: ic,
  BorderColorCard: lc,
  BorderColorCardHover: cc,
  BorderColorError: dc,
  // Primary colors
  ColorPrimaryBlue: uc,
  ColorPrimaryWhite: fc,
  ColorPrimaryBlack: pc,
  ColorPrimaryGreen: hc,
  ColorPrimaryPurple: mc,
  ColorPrimaryDarkPink: gc,
  ColorPrimaryRed: xc,
  ColorPrimaryYellow: bc,
  // Secondary colors
  ColorSecondaryPaleYellow: yc,
  ColorSecondaryWarmYellow: vc,
  ColorSecondaryOrange: wc,
  ColorSecondaryAquaGreen: Sc,
  ColorSecondaryPink: _c,
  // Grey scale
  ColorGrey1: kc,
  ColorGrey2: Cc,
  ColorGrey3: Nc,
  ColorGrey4: jc,
  ColorGrey5: Mc
}), []), x1 = () => je(() => ({
  Spacing0: Hc,
  Spacing1: zc,
  Spacing2: Oc,
  Spacing3: Uc,
  Spacing4: Wc,
  Spacing5: Gc,
  Spacing6: Vc,
  Spacing7: Yc,
  Spacing8: Zc,
  Spacing9: Jc
}), []), b1 = () => je(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Xr,
    Size16: ea,
    Size19: ra,
    Size22: sa,
    Size26: ca,
    Size36: fa,
    Size48: ma
  },
  Tablet: {
    Size14: Qr,
    Size16: ta,
    Size19: aa,
    Size22: ia,
    Size26: da,
    Size36: pa,
    Size48: ga
  },
  Print: {
    Size14: Kr,
    Size16: na,
    Size19: oa,
    Size22: la,
    Size26: ua,
    Size36: ha,
    Size48: xa
  },
  Family: {
    Base: Gr,
    Fallback: Vr,
    Print: Yr
  },
  Weight: {
    Normal: Zr,
    Bold: Jr,
    Light: qr
  },
  Base: {
    Size: Ro,
    LineHeight: Bo
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Gr,
  FontFamilyFallback: Vr,
  FontFamilyPrint: Yr,
  FontWeightNormal: Zr,
  FontWeightBold: Jr,
  FontWeightLight: qr,
  FontSize14Mobile: Xr,
  FontSize14Tablet: Qr,
  FontSize14Print: Kr,
  FontSize16Mobile: ea,
  FontSize16Tablet: ta,
  FontSize16Print: na,
  FontSize19Mobile: ra,
  FontSize19Tablet: aa,
  FontSize19Print: oa,
  FontSize22Mobile: sa,
  FontSize22Tablet: ia,
  FontSize22Print: la,
  FontSize26Mobile: ca,
  FontSize26Tablet: da,
  FontSize26Print: ua,
  FontSize36Mobile: fa,
  FontSize36Tablet: pa,
  FontSize36Print: ha,
  FontSize48Mobile: ma,
  FontSize48Tablet: ga,
  FontSize48Print: xa,
  FontSizeBase: Ro,
  FontLineHeightBase: Bo
}), []), y1 = () => je(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: bo,
    Size1: vo,
    Size2: So,
    Size3: ko,
    Size4: No,
    Size5: Mo,
    Size6: Do,
    Size7: Lo,
    Size8: Ao,
    Size9: Po
  },
  Tablet: {
    Size0: yo,
    Size1: wo,
    Size2: _o,
    Size3: Co,
    Size4: jo,
    Size5: Io,
    Size6: To,
    Size7: $o,
    Size8: Eo,
    Size9: Fo
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: bo,
  SpacingResponsive0Tablet: yo,
  SpacingResponsive1Mobile: vo,
  SpacingResponsive1Tablet: wo,
  SpacingResponsive2Mobile: So,
  SpacingResponsive2Tablet: _o,
  SpacingResponsive3Mobile: ko,
  SpacingResponsive3Tablet: Co,
  SpacingResponsive4Mobile: No,
  SpacingResponsive4Tablet: jo,
  SpacingResponsive5Mobile: Mo,
  SpacingResponsive5Tablet: Io,
  SpacingResponsive6Mobile: Do,
  SpacingResponsive6Tablet: To,
  SpacingResponsive7Mobile: Lo,
  SpacingResponsive7Tablet: $o,
  SpacingResponsive8Mobile: Ao,
  SpacingResponsive8Tablet: Eo,
  SpacingResponsive9Mobile: Po,
  SpacingResponsive9Tablet: Fo
}), []), v1 = () => je(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ic,
  ButtonSpacingPaddingHorizontalMobile: Dc,
  ButtonSpacingPaddingVerticalDesktop: Tc,
  ButtonSpacingPaddingHorizontalDesktop: Lc,
  // Card spacing	
  CardSpacingPaddingMobile: $c,
  CardSpacingPaddingDesktop: Ac,
  CardSpacingHeadingMargin: Ec,
  // Form spacing
  FormSpacingInputPadding: Pc,
  FormSpacingInputMinHeight: Fc,
  FormSpacingCheckboxSize: Rc,
  FormSpacingCheckboxLabelPadding: Bc
}), []), w1 = () => je(() => ({
  xl: Ft,
  l: Rt,
  m: Bt,
  s: Ht,
  xs: zt
}), []), S1 = () => je(() => ({
  body: Ot,
  bodyLarge: Ut,
  bodySmall: Wt,
  ledeText: Gt,
  ledeTextSmall: Vt
}), []), _1 = () => je(() => ({
  headings: {
    xl: Ft,
    l: Rt,
    m: Bt,
    s: Ht,
    xs: zt
  },
  paragraphs: {
    body: Ot,
    bodyLarge: Ut,
    bodySmall: Wt,
    ledeText: Gt,
    ledeTextSmall: Vt
  },
  fonts: {
    family: {
      base: Gr,
      fallback: Vr,
      print: Yr
    },
    weight: {
      normal: Zr,
      bold: Jr,
      light: qr
    },
    sizes: {
      mobile: {
        size14: Xr,
        size16: ea,
        size19: ra,
        size22: sa,
        size26: ca,
        size36: fa,
        size48: ma
      },
      tablet: {
        size14: Qr,
        size16: ta,
        size19: aa,
        size22: ia,
        size26: da,
        size36: pa,
        size48: ga
      },
      print: {
        size14: Kr,
        size16: na,
        size19: oa,
        size22: la,
        size26: ua,
        size36: ha,
        size48: xa
      }
    }
  }
}), []);
function k1(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = O.useState(t), s = O.useCallback(() => o("three-column"), []), l = O.useCallback(() => o((c) => c === "three-column" ? n : c), [n]), i = O.useCallback(() => o((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: l,
    toggle: i,
    isDrilledIn: a === "three-column"
  };
}
const qc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, yt = {
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
function C1(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...qc, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${yt.normal.eot}?#iefix") format("eot"),
       url("${t}${yt.normal.woff2}") format("woff2"),
       url("${t}${yt.normal.woff}") format("woff"),
       url("${t}${yt.normal.ttf}") format("truetype");
  src: url("${t}${yt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${yt.bold.eot}?#iefix") format("eot"),
       url("${t}${yt.bold.woff2}") format("woff2"),
       url("${t}${yt.bold.woff}") format("woff"),
       url("${t}${yt.bold.ttf}") format("truetype");
  src: url("${t}${yt.bold.eot}");
}`), a.join(`
`);
}
function N1(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...qc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${yt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${yt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${yt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${yt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const j1 = '"Frutiger W01", Arial, Helvetica, sans-serif', M1 = "Arial, Helvetica, sans-serif";
async function I1() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Oh as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  Sr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  _r as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Uh as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  Wh as AXIS_ZIGZAG_DEFAULT_CYCLES,
  Vh as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  Gh as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Ii as Account,
  py as ActionLink,
  Uy as AdaptiveDataGrid,
  jg as AnimationDurationFast,
  Mg as AnimationDurationNormal,
  Ig as AnimationDurationSlow,
  $g as AnimationEasingBounce,
  Dg as AnimationEasingEaseIn,
  Lg as AnimationEasingEaseInOut,
  Tg as AnimationEasingEaseOut,
  pl as AppointmentCard,
  Xy as AreaSeriesPrimitive,
  Up as AriaDataGrid,
  oo as AriaTabsDataGrid,
  Uy as AriaTabsDataGridAdaptive,
  li as Axis,
  Xa as BackLink,
  Ky as BandScalesProvider,
  Qy as BarSeriesPrimitive,
  lc as BorderColorCard,
  cc as BorderColorCardHover,
  sc as BorderColorDefault,
  dc as BorderColorError,
  ic as BorderColorForm,
  Zg as BorderRadiusLarge,
  Yg as BorderRadiusMedium,
  Gg as BorderRadiusNone,
  Vg as BorderRadiusSmall,
  zg as BorderWidthCardBottom,
  Rg as BorderWidthDefault,
  Bg as BorderWidthFormElement,
  Hg as BorderWidthFormElementError,
  Og as BorderWidthPanel,
  Wg as BorderWidthTableCell,
  Ug as BorderWidthTableHeader,
  Ny as BrandThemeProvider,
  jp as Breadcrumb,
  Id as Breakpoint,
  Mb as BreakpointDesktop,
  Ib as BreakpointLargeDesktop,
  Nb as BreakpointMobile,
  jb as BreakpointTablet,
  mt as Button,
  _x as ButtonBorderRadius,
  Sx as ButtonBorderWidth,
  dx as ButtonPrimaryBackgroundActive,
  lx as ButtonPrimaryBackgroundDefault,
  ux as ButtonPrimaryBackgroundDisabled,
  cx as ButtonPrimaryBackgroundHover,
  hx as ButtonPrimaryBorderDefault,
  mx as ButtonPrimaryBorderFocus,
  fx as ButtonPrimaryTextDefault,
  px as ButtonPrimaryTextDisabled,
  yx as ButtonSecondaryBackgroundActive,
  gx as ButtonSecondaryBackgroundDefault,
  bx as ButtonSecondaryBackgroundHover,
  xx as ButtonSecondaryBackgroundSolid,
  wx as ButtonSecondaryBorderDefault,
  vx as ButtonSecondaryTextDefault,
  kx as ButtonShadowSize,
  Ti as ButtonSize,
  Lc as ButtonSpacingPaddingHorizontalDesktop,
  Dc as ButtonSpacingPaddingHorizontalMobile,
  Tc as ButtonSpacingPaddingVerticalDesktop,
  Ic as ButtonSpacingPaddingVerticalMobile,
  Cx as ButtonTypographyWeight,
  Di as ButtonVariant,
  ll as Card,
  Nx as CardBackgroundDefault,
  Ix as CardBorderBottom,
  jx as CardBorderDefault,
  Mx as CardBorderHover,
  Ax as CardBorderWidthBottom,
  $x as CardBorderWidthDefault,
  Ty as CardGroup,
  Ly as CardGroupItem,
  Ex as CardShadowDefault,
  Px as CardShadowHover,
  Ec as CardSpacingHeadingMargin,
  Ac as CardSpacingPaddingDesktop,
  $c as CardSpacingPaddingMobile,
  Tx as CardTextDescription,
  Dx as CardTextHeading,
  Lx as CardTextLink,
  $y as CareCard,
  hy as CharacterCount,
  t1 as ChartEnhancer,
  e1 as ChartNoScript,
  Hh as ChartRoot,
  gd as Checkbox,
  vd as Checkboxes,
  o0 as ColorBorderDefault,
  s0 as ColorBorderSecondary,
  $0 as ColorButtonLoginActive,
  T0 as ColorButtonLoginBackground,
  L0 as ColorButtonLoginHover,
  A0 as ColorButtonLoginShadow,
  p0 as ColorButtonPrimaryActive,
  d0 as ColorButtonPrimaryBackground,
  f0 as ColorButtonPrimaryHover,
  h0 as ColorButtonPrimaryShadow,
  u0 as ColorButtonPrimaryText,
  C0 as ColorButtonReverseActive,
  S0 as ColorButtonReverseBackground,
  k0 as ColorButtonReverseHover,
  N0 as ColorButtonReverseShadow,
  _0 as ColorButtonReverseText,
  v0 as ColorButtonSecondaryActive,
  m0 as ColorButtonSecondaryBackground,
  g0 as ColorButtonSecondaryBackgroundSolid,
  x0 as ColorButtonSecondaryBorder,
  y0 as ColorButtonSecondaryHover,
  w0 as ColorButtonSecondaryShadow,
  b0 as ColorButtonSecondaryText,
  I0 as ColorButtonWarningActive,
  j0 as ColorButtonWarningBackground,
  M0 as ColorButtonWarningHover,
  D0 as ColorButtonWarningShadow,
  i0 as ColorError,
  r0 as ColorFocusBackground,
  a0 as ColorFocusText,
  c0 as ColorFormBackground,
  l0 as ColorFormBorder,
  kc as ColorGrey1,
  Cc as ColorGrey2,
  Nc as ColorGrey3,
  jc as ColorGrey4,
  Mc as ColorGrey5,
  t0 as ColorLinkActive,
  Kg as ColorLinkDefault,
  e0 as ColorLinkHover,
  n0 as ColorLinkVisited,
  pc as ColorPrimaryBlack,
  uc as ColorPrimaryBlue,
  gc as ColorPrimaryDarkPink,
  hc as ColorPrimaryGreen,
  mc as ColorPrimaryPurple,
  xc as ColorPrimaryRed,
  fc as ColorPrimaryWhite,
  bc as ColorPrimaryYellow,
  Sc as ColorSecondaryAquaGreen,
  wc as ColorSecondaryOrange,
  yc as ColorSecondaryPaleYellow,
  _c as ColorSecondaryPink,
  vc as ColorSecondaryWarmYellow,
  Jg as ColorTextPrimary,
  Qg as ColorTextPrint,
  Xg as ColorTextReverse,
  qg as ColorTextSecondary,
  Xn as Column,
  Td as ColumnAlign,
  rx as ComponentBlur,
  J0 as ComponentBreadcrumbChevronMarginLeft,
  q0 as ComponentBreadcrumbChevronMarginRight,
  Q0 as ComponentBreadcrumbPaddingTopDesktop,
  X0 as ComponentBreadcrumbPaddingTopMobile,
  R0 as ComponentButtonPaddingDesktopHorizontal,
  F0 as ComponentButtonPaddingDesktopVertical,
  P0 as ComponentButtonPaddingMobileHorizontal,
  E0 as ComponentButtonPaddingMobileVertical,
  B0 as ComponentButtonShadowSize,
  V0 as ComponentCardHeadingMargin,
  G0 as ComponentCardPaddingDesktop,
  W0 as ComponentCardPaddingMobile,
  ox as ComponentDetails,
  sx as ComponentExpander,
  U0 as ComponentFormCheckboxLabelPadding,
  O0 as ComponentFormCheckboxSize,
  H0 as ComponentFormInputMinHeight,
  z0 as ComponentFormInputPadding,
  ax as ComponentLink,
  ix as ComponentPagination,
  Z0 as ComponentPanelPaddingDesktop,
  Y0 as ComponentPanelPaddingMobile,
  nx as ComponentSpread,
  ex as ComponentSummaryListCellPaddingHorizontal,
  K0 as ComponentSummaryListCellPaddingVertical,
  tx as ComponentSummaryListRowMargin,
  Ei as Container,
  Dy as ContentsList,
  qc as DEFAULT_FONT_CONFIG,
  Hy as DashboardSummaryGrid,
  _y as DateInput,
  Ap as Details,
  Ep as DoDontList,
  ly as ElevationHigh,
  sy as ElevationLow,
  iy as ElevationMedium,
  oy as ElevationNone,
  ms as ErrorMessage,
  Sy as ErrorSummary,
  Pp as Expander,
  yt as FRUTIGER_FONT_FILES,
  Oo as Fieldset,
  Dd as Float,
  ty as FocusOutlineOffset,
  ny as FocusOutlineStyle,
  ey as FocusOutlineWidth,
  ay as FocusShadowButton,
  ry as FocusShadowInput,
  Gr as FontFamilyBase,
  Vr as FontFamilyFallback,
  Yr as FontFamilyPrint,
  Bo as FontLineHeightBase,
  Xr as FontSize14Mobile,
  Kr as FontSize14Print,
  Qr as FontSize14Tablet,
  ea as FontSize16Mobile,
  na as FontSize16Print,
  ta as FontSize16Tablet,
  ra as FontSize19Mobile,
  oa as FontSize19Print,
  aa as FontSize19Tablet,
  sa as FontSize22Mobile,
  la as FontSize22Print,
  ia as FontSize22Tablet,
  ca as FontSize26Mobile,
  ua as FontSize26Print,
  da as FontSize26Tablet,
  fa as FontSize36Mobile,
  ha as FontSize36Print,
  pa as FontSize36Tablet,
  ma as FontSize48Mobile,
  xa as FontSize48Print,
  ga as FontSize48Tablet,
  Ro as FontSizeBase,
  Jr as FontWeightBold,
  qr as FontWeightLight,
  Zr as FontWeightNormal,
  Oi as Footer,
  nb as FormBorderRadius,
  eb as FormBorderWidthDefault,
  tb as FormBorderWidthError,
  Xx as FormErrorTextDefault,
  Qx as FormErrorTypographyWeight,
  Kx as FormHintTextDefault,
  Fx as FormInputBackgroundDefault,
  Bx as FormInputBackgroundDisabled,
  Hx as FormInputBackgroundError,
  Rx as FormInputBackgroundFocus,
  zx as FormInputBorderDefault,
  Wx as FormInputBorderDisabled,
  Ux as FormInputBorderError,
  Ox as FormInputBorderFocus,
  Gx as FormInputTextDefault,
  Yx as FormInputTextDisabled,
  Vx as FormInputTextPlaceholder,
  Zx as FormLabelTextDefault,
  Jx as FormLabelTextRequired,
  qx as FormLabelTypographyWeight,
  Bc as FormSpacingCheckboxLabelPadding,
  Rc as FormSpacingCheckboxSize,
  Fc as FormSpacingInputMinHeight,
  Pc as FormSpacingInputPadding,
  My as GanttChart,
  Qa as Grid,
  Tb as GridGutter,
  Lb as GridGutterHalf,
  Yh as GridLines,
  Db as GridPageWidth,
  bn as GridWidth,
  zi as Header,
  jy as HeaderSSR,
  Qd as HeaderSearch,
  zi as HeaderStatic,
  Jt as Heading,
  Rt as HeadingsNhsukHeadingL,
  Bt as HeadingsNhsukHeadingM,
  Ht as HeadingsNhsukHeadingS,
  Ft as HeadingsNhsukHeadingXl,
  zt as HeadingsNhsukHeadingXs,
  eu as Hero,
  $i as Hint,
  Ry as Images,
  Ho as Input,
  Ay as InsetText,
  zo as Label,
  Cb as LayoutColumnActions,
  wb as LayoutColumnFull,
  Sb as LayoutColumnHalf,
  kb as LayoutColumnQuarter,
  _b as LayoutColumnThird,
  vb as LayoutContainerMaxWidth,
  qy as Legend,
  zh as LineScalesProvider,
  Im as LineSeriesPrimitive,
  Ad as List,
  Pi as MainWrapper,
  hl as MedicationCard,
  Lm as MetricCard,
  d1 as NHSBodyText,
  u1 as NHSBodyTextLarge,
  f1 as NHSBodyTextSmall,
  o1 as NHSHeading1,
  s1 as NHSHeading2,
  i1 as NHSHeading3,
  l1 as NHSHeading4,
  c1 as NHSHeading5,
  p1 as NHSLedeText,
  h1 as NHSLedeTextSmall,
  Cy as NHSThemeProvider,
  M1 as NHS_FALLBACK_FONT_STACK,
  j1 as NHS_FONT_STACK,
  Th as NavigationSplitView,
  Gy as PageTemplate,
  Iy as Pagination,
  Mp as Panel,
  Ot as ParagraphsBody,
  Ut as ParagraphsBodyLarge,
  Wt as ParagraphsBodySmall,
  Gt as ParagraphsLedeText,
  Vt as ParagraphsLedeTextSmall,
  fl as PatientCard,
  Ah as ProductRoadmap,
  my as Radios,
  gy as RadiosServer,
  Uy as ResponsiveDataGrid,
  Wy as ResponsiveDataGridDemo,
  an as Row,
  n1 as SPC,
  _g as SPCChart,
  r1 as SPCMetricCard,
  Cr as Select,
  Cd as SelectOption,
  Zb as ShadowButtonDefault,
  Xb as ShadowButtonFocus,
  Jb as ShadowButtonSecondary,
  qb as ShadowButtonWarning,
  Qb as ShadowCardDefault,
  Kb as ShadowCardHover,
  yb as SizeButtonMinHeightDesktop,
  bb as SizeButtonMinHeightMobile,
  db as SizeFormControlLarge,
  cb as SizeFormControlMedium,
  lb as SizeFormControlSmall,
  gb as SizeFormInputWidth2xl,
  xb as SizeFormInputWidth3xl,
  hb as SizeFormInputWidthLg,
  pb as SizeFormInputWidthMd,
  fb as SizeFormInputWidthSm,
  mb as SizeFormInputWidthXl,
  ub as SizeFormInputWidthXs,
  sb as SizeIconExtraLarge,
  ob as SizeIconLarge,
  ab as SizeIconMedium,
  ib as SizeIconNhsDefault,
  rb as SizeIconSmall,
  il as SkipLink,
  By as SlotMatrix,
  zy as SortStatusControl,
  Hc as Spacing0,
  zc as Spacing1,
  Oc as Spacing2,
  Uc as Spacing3,
  Wc as Spacing4,
  Gc as Spacing5,
  Vc as Spacing6,
  Yc as Spacing7,
  Zc as Spacing8,
  Jc as Spacing9,
  bo as SpacingResponsive0Mobile,
  yo as SpacingResponsive0Tablet,
  vo as SpacingResponsive1Mobile,
  wo as SpacingResponsive1Tablet,
  So as SpacingResponsive2Mobile,
  _o as SpacingResponsive2Tablet,
  ko as SpacingResponsive3Mobile,
  Co as SpacingResponsive3Tablet,
  No as SpacingResponsive4Mobile,
  jo as SpacingResponsive4Tablet,
  Mo as SpacingResponsive5Mobile,
  Io as SpacingResponsive5Tablet,
  Do as SpacingResponsive6Mobile,
  To as SpacingResponsive6Tablet,
  Lo as SpacingResponsive7Mobile,
  $o as SpacingResponsive7Tablet,
  Ao as SpacingResponsive8Mobile,
  Eo as SpacingResponsive8Tablet,
  Po as SpacingResponsive9Mobile,
  Fo as SpacingResponsive9Tablet,
  xy as SpacingUtilities,
  Gb as StateDisabledBackground,
  Vb as StateDisabledBorder,
  Yb as StateDisabledText,
  $b as StateErrorBackground,
  Ab as StateErrorBorder,
  Eb as StateErrorText,
  Ob as StateInfoBackground,
  Ub as StateInfoBorder,
  Wb as StateInfoText,
  Pb as StateSuccessBackground,
  Fb as StateSuccessBorder,
  Rb as StateSuccessText,
  Bb as StateWarningBackground,
  Hb as StateWarningBorder,
  zb as StateWarningText,
  Op as SummaryCard,
  Ey as SummaryList,
  Qt as Table,
  Py as Tabs,
  Ve as Tag,
  Fp as TaskList,
  Sd as Textarea,
  Jy as TooltipOverlay,
  Mm as TooltipProvider,
  Vy as TransactionalPageTemplate,
  Ag as TransitionButtonDefault,
  Eg as TransitionButtonShadow,
  Fg as TransitionCardHover,
  Pg as TransitionInputFocus,
  Zy as VisibilityProvider,
  ml as VitalsCard,
  wy as WIDTH_FRACTIONS,
  Fy as WarningCallout,
  vl as WidthContainer,
  yy as WidthUtilities,
  I1 as checkFrutigerLoaded,
  Ko as createGenericTabsConfig,
  Oy as createTCHTabsConfig,
  C1 as generateFrutigerFontFace,
  a1 as getResponsiveStyles,
  by as getSpacingClass,
  vy as getWidthClass,
  N1 as preloadFrutigerFonts,
  eh as tchDataConfig,
  Xd as useBrand,
  g1 as useColors,
  v1 as useComponentSpacing,
  w1 as useNHSHeadings,
  S1 as useNHSParagraphs,
  ky as useNHSTheme,
  _1 as useNHSTypographySystem,
  k1 as useNavigationSplitDrill,
  Mh as useNavigationSplitUrlSync,
  Sl as useNhsFdpBreakpoints,
  y1 as useResponsiveSpacing,
  Yy as useResponsiveValue,
  x1 as useSpacing,
  Ng as useSpc,
  m1 as useTokens,
  b1 as useTypography
};
//# sourceMappingURL=index.esm.js.map
