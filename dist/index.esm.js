import * as V from "react";
import et, { useState as Oe, useEffect as Xe, useCallback as xe, useRef as Ge, createElement as _i, useMemo as Fe, useContext as ki, createContext as Ci, forwardRef as Rn, useImperativeHandle as Ni, useReducer as ji, memo as Jc, useId as wr } from "react";
import { createPortal as Xc } from "react-dom";
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fr = { exports: {} }, Bn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function Qc() {
  if (cs) return Bn;
  cs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var l in a)
        l !== "key" && (s[l] = a[l]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: o,
      key: i,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return Bn.Fragment = t, Bn.jsx = r, Bn.jsxs = r, Bn;
}
var Hn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ds;
function ed() {
  return ds || (ds = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === y ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case x:
          return "Fragment";
        case j:
          return "Profiler";
        case g:
          return "StrictMode";
        case b:
          return "Suspense";
        case C:
          return "SuspenseList";
        case m:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case v:
            return "Portal";
          case I:
            return (B.displayName || "Context") + ".Provider";
          case T:
            return (B._context.displayName || "Context") + ".Consumer";
          case S:
            var Q = B.render;
            return B = B.displayName, B || (B = Q.displayName || Q.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case N:
            return Q = B.displayName || null, Q !== null ? Q : e(B.type) || "Memo";
          case w:
            Q = B._payload, B = B._init;
            try {
              return e(B(Q));
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
        var Q = !1;
      } catch {
        Q = !0;
      }
      if (Q) {
        Q = console;
        var W = Q.error, K = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return W.call(
          Q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(B);
      }
    }
    function o(B) {
      if (B === x) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === w)
        return "<...>";
      try {
        var Q = e(B);
        return Q ? "<" + Q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var B = k.A;
      return B === null ? null : B.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (M.call(B, "key")) {
        var Q = Object.getOwnPropertyDescriptor(B, "key").get;
        if (Q && Q.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, Q) {
      function W() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Q
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: W,
        configurable: !0
      });
    }
    function d() {
      var B = e(this.type);
      return D[B] || (D[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function c(B, Q, W, K, q, J, le, ee) {
      return W = J.ref, B = {
        $$typeof: h,
        type: B,
        key: Q,
        props: J,
        _owner: q
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(B, "ref", {
        enumerable: !1,
        get: d
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
        value: le
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function u(B, Q, W, K, q, J, le, ee) {
      var te = Q.children;
      if (te !== void 0)
        if (K)
          if (A(te)) {
            for (K = 0; K < te.length; K++)
              f(te[K]);
            Object.freeze && Object.freeze(te);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(te);
      if (M.call(Q, "key")) {
        te = e(B);
        var Z = Object.keys(Q).filter(function(fe) {
          return fe !== "key";
        });
        K = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", G[te + K] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          te,
          Z,
          te
        ), G[te + K] = !0);
      }
      if (te = null, W !== void 0 && (r(W), te = "" + W), i(Q) && (r(Q.key), te = "" + Q.key), "key" in Q) {
        W = {};
        for (var ne in Q)
          ne !== "key" && (W[ne] = Q[ne]);
      } else W = Q;
      return te && l(
        W,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), c(
        B,
        te,
        J,
        q,
        a(),
        W,
        le,
        ee
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === h && B._store && (B._store.validated = 1);
    }
    var p = et, h = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), I = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), y = Symbol.for("react.client.reference"), k = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, A = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var L, D = {}, R = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), oe = E(o(s)), G = {};
    Hn.Fragment = x, Hn.jsx = function(B, Q, W, K, q) {
      var J = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        B,
        Q,
        W,
        !1,
        K,
        q,
        J ? Error("react-stack-top-frame") : R,
        J ? E(o(B)) : oe
      );
    }, Hn.jsxs = function(B, Q, W, K, q) {
      var J = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        B,
        Q,
        W,
        !0,
        K,
        q,
        J ? Error("react-stack-top-frame") : R,
        J ? E(o(B)) : oe
      );
    };
  })()), Hn;
}
var us;
function td() {
  return us || (us = 1, process.env.NODE_ENV === "production" ? fr.exports = Qc() : fr.exports = ed()), fr.exports;
}
var n = td(), To = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var fs;
function nd() {
  return fs || (fs = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          l && (s = a(s, o(l)));
        }
        return s;
      }
      function o(s) {
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
          t.call(s, l) && s[l] && (i = a(i, l));
        return i;
      }
      function a(s, i) {
        return i ? s ? s + " " + i : s + i : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(To)), To.exports;
}
var rd = nd();
const Se = /* @__PURE__ */ Kc(rd), gy = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: o,
  ...a
}) => {
  const s = Se(
    "nhsuk-action-link__link",
    o
  );
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ n.jsxs(
    "a",
    {
      className: s,
      href: t,
      target: r ? "_blank" : void 0,
      rel: r ? "noopener noreferrer" : void 0,
      ...a,
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
}, Mi = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: r,
  variant: o = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const a = (s) => {
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
    return s.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: s.href,
        children: d
      }
    ) : s.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ n.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: d })
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: d });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: Se(
        "nhsuk-account",
        {
          "nhsuk-account--white": o === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map(
        (s, i) => s && /* @__PURE__ */ n.jsx(
          "li",
          {
            className: Se(
              "nhsuk-account__item nhsuk-header__account-item",
              s.className
            ),
            children: a(s)
          },
          i
        )
      ) })
    }
  );
};
var Ii = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Ii || {}), Di = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Di || {});
function od(e) {
  const t = e.variant || "primary", r = e.size || "default", o = !!e.fullWidth, a = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    r !== "default" ? `nhs-aria-button--${r}` : "",
    o ? "nhs-aria-button--full-width" : "",
    e.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: e.href ? "a" : "button",
    classes: a,
    data: { module: "nhs-button" },
    attrs: e.href ? { href: e.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!e.preventDoubleClick
  };
}
const { forwardRef: ad, useCallback: tn, useState: Lo } = V;
function sd(e, t) {
  const {
    children: r,
    variant: o = Ii.Primary,
    size: a = Di.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = Lo(!1), [f, p] = Lo(!1), [h, v] = Lo(!1), x = od({
    variant: o,
    size: a,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), g = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", j = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...h && { "data-focused": "true" },
    ...g && { "data-disabled": "true" }
  }, T = tn(
    () => !g && u(!0),
    [g]
  ), I = tn(() => u(!1), []), S = tn(
    () => !g && p(!0),
    [g]
  ), b = tn(() => {
    p(!1), u(!1);
  }, []), C = tn(() => v(!0), []), N = tn(() => v(!1), []), w = tn(
    (te) => {
      te.key === " " && ("href" in d || te.currentTarget.getAttribute("role") === "button") && (te.preventDefault(), te.currentTarget.click());
    },
    [d]
  ), m = tn(
    (te) => {
      if (l) {
        const Z = te.currentTarget;
        if (Z.getAttribute("data-processing") === "true") {
          te.preventDefault();
          return;
        }
        Z.setAttribute("data-processing", "true"), setTimeout(() => {
          Z.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: te,
      style: Z,
      title: ne,
      ["aria-label"]: fe,
      ["aria-describedby"]: U,
      ["aria-labelledby"]: ie,
      tabIndex: ae,
      ...pe
    } = d, ce = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: ce.href,
        target: ce.target,
        rel: ce.rel,
        className: x.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...j,
        ...l && { "data-prevent-double-click": "true" },
        ...pe,
        onKeyDown: (me) => {
          ce.onKeyDown?.(me), w(me);
        },
        onClick: (me) => {
          ce.onClick?.(me), m(me);
        },
        onMouseDown: (me) => {
          ce.onMouseDown?.(me), T();
        },
        onMouseUp: (me) => {
          ce.onMouseUp?.(me), I();
        },
        onMouseEnter: (me) => {
          ce.onMouseEnter?.(me), S();
        },
        onMouseLeave: (me) => {
          ce.onMouseLeave?.(me), b();
        },
        onFocus: (me) => {
          ce.onFocus?.(me), C();
        },
        onBlur: (me) => {
          ce.onBlur?.(me), N();
        },
        "aria-disabled": ce["aria-disabled"],
        ...ce["aria-disabled"] === "true" && { tabIndex: -1 },
        id: te,
        style: Z,
        title: ne,
        "aria-label": fe,
        "aria-describedby": U,
        "aria-labelledby": ie,
        tabIndex: ae,
        children: r
      }
    );
  }
  const {
    id: y,
    style: k,
    title: M,
    ["aria-label"]: A,
    ["aria-describedby"]: E,
    ["aria-labelledby"]: L,
    tabIndex: D,
    name: R,
    value: oe,
    form: G,
    formAction: B,
    formEncType: Q,
    formMethod: W,
    formNoValidate: K,
    formTarget: q,
    autoFocus: J,
    ...le
  } = d, ee = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: ee.type || "button",
      disabled: ee.disabled,
      className: x.classes,
      "data-module": "nhs-button",
      ...j,
      ...l && { "data-prevent-double-click": "true" },
      ...ee.disabled && { "aria-disabled": "true" },
      ...le,
      onKeyDown: (te) => {
        ee.onKeyDown?.(te), w(te);
      },
      onClick: (te) => {
        ee.onClick?.(te), m(te);
      },
      onMouseDown: (te) => {
        ee.onMouseDown?.(te), T();
      },
      onMouseUp: (te) => {
        ee.onMouseUp?.(te), I();
      },
      onMouseEnter: (te) => {
        ee.onMouseEnter?.(te), S();
      },
      onMouseLeave: (te) => {
        ee.onMouseLeave?.(te), b();
      },
      onFocus: (te) => {
        ee.onFocus?.(te), C();
      },
      onBlur: (te) => {
        ee.onBlur?.(te), N();
      },
      id: y,
      style: k,
      title: M,
      "aria-label": A,
      "aria-describedby": E,
      "aria-labelledby": L,
      tabIndex: D,
      name: R,
      value: oe,
      form: G,
      formAction: B,
      formEncType: Q,
      formMethod: W,
      formNoValidate: K,
      formTarget: q,
      autoFocus: J,
      children: r
    }
  );
}
const xt = ad(sd);
xt.displayName = "Button";
const Yn = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: o,
  element: a = "a",
  onClick: s,
  ...i
}) => {
  const l = Se(
    "nhsuk-back-link",
    o
  ), d = Se(
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: a === "button" ? /* @__PURE__ */ n.jsx(
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
function id(e) {
  const { color: t = "default", noBorder: r, closable: o, disabled: a, className: s } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    r ? "nhsuk-tag--no-border" : "",
    o ? "nhsuk-tag--closable" : "",
    a ? "nhsuk-tag--disabled" : "",
    s || ""
  ].filter(Boolean).join(" "), showClose: !!o, disabled: !!a };
}
const tt = ({
  text: e,
  html: t,
  children: r,
  color: o = "default",
  noBorder: a = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: d,
  ...c
}) => {
  const u = id({ color: o, noBorder: a, closable: s, disabled: l, className: d }), f = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u.classes, ...c, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ n.jsx(
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
}, ld = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: o = !1,
  disabled: a = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: d,
  children: c,
  onChange: u,
  onBlur: f,
  onFocus: p,
  attributes: h,
  ...v
}) => {
  const [x, g] = Oe(o), j = r !== void 0, T = j ? r : x;
  Xe(() => {
    j || g(o);
  }, [o, j]);
  const I = (w) => {
    const m = w.target.checked;
    j || g(m), u?.(m, w);
  }, S = i ? `${e}-hint` : void 0, b = l ? `${e}-error` : void 0, C = [S, b].filter(Boolean).join(" ") || void 0, N = Se(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: N, ...v, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: T,
        disabled: a,
        onChange: I,
        onBlur: f,
        onFocus: p,
        "aria-describedby": C,
        ...h
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: S, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: b, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
ld.displayName = "Checkbox";
function Ti(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const Fa = ({
  id: e,
  name: t,
  type: r = "text",
  value: o,
  defaultValue: a,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: d = !1,
  hasError: c = !1,
  describedBy: u,
  className: f,
  width: p = "full",
  inputMode: h,
  autoComplete: v,
  maxLength: x,
  minLength: g,
  pattern: j,
  step: T,
  min: I,
  max: S,
  showValueLabels: b = !1,
  showCurrentValue: C = !1,
  valueLabels: N,
  onChange: w,
  onBlur: m,
  onFocus: y,
  onKeyDown: k,
  ...M
}) => {
  const [A, E] = Oe(o || a || (r === "range" ? I || "0" : ""));
  Xe(() => {
    o !== void 0 && E(o);
  }, [o]);
  const L = (q) => {
    const J = q.target;
    E(J.value), ("type" in q && q.nativeEvent || q.type === "keydown") && w?.(q);
  }, { classes: D, isRange: R } = Ti({ type: r, hasError: c, width: p, className: f }), oe = o !== void 0, G = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: h,
    autoComplete: v,
    maxLength: x,
    minLength: g,
    pattern: j,
    step: T,
    min: I,
    max: S,
    onChange: L,
    onBlur: m,
    onFocus: y,
    onKeyDown: (q) => {
      if (R && /[0-9]/.test(q.key)) {
        const J = (A?.toString() || "") + q.key;
        q.target.value = J, L(q);
      }
      k?.(q);
    },
    ...M
  }, B = !oe && a !== void 0 ? { defaultValue: a } : {}, Q = oe ? { value: o } : {}, W = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: D,
      ...Q,
      ...B,
      "data-current-value": A,
      ...G
    }
  ), K = R ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    b && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: N?.min || I || "0" }),
      W(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: N?.max || S || "100" })
    ] }),
    !b && W(),
    C && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      N?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: A })
    ] }) })
  ] }) : null;
  return R ? K : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: D,
      id: e,
      name: t,
      type: r,
      value: o,
      ...o === void 0 && a !== void 0 ? { defaultValue: a } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": u,
      inputMode: h,
      autoComplete: v,
      maxLength: x,
      minLength: g,
      pattern: j,
      step: T,
      min: I,
      max: S,
      onChange: w,
      onBlur: m,
      onFocus: y,
      onKeyDown: k,
      ...M
    }
  );
};
function cd(e) {
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
const Ra = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: o = "m",
  children: a,
  ...s
}) => {
  const i = cd({ size: o, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: a }) : a });
};
function dd(e) {
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
const Ba = ({
  children: e,
  legend: t,
  className: r,
  describedBy: o,
  ...a
}) => {
  const s = dd({
    className: r,
    describedBy: o,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
    const l = t?.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return s.legendIsPageHeading ? /* @__PURE__ */ n.jsx("h1", { className: "nhsuk-fieldset__heading", children: l }) : l;
  };
  return /* @__PURE__ */ n.jsxs(
    "fieldset",
    {
      className: s.fieldsetClasses,
      "aria-describedby": s.describedBy,
      ...a,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: s.legendClasses, children: i() }),
        e
      ]
    }
  );
};
function ud(e) {
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
const fd = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: o,
  isPageHeading: a = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: d = "",
  small: c = !1,
  onChange: u,
  fieldsetAttributes: f,
  attributes: p,
  ...h
}) => {
  const [v, x] = Oe(
    e.filter((w) => w.checked).map((w) => w.value)
  ), g = r || t, j = i ? `${g}-hint` : void 0, T = l ? `${g}-error` : void 0, I = [j, T].filter(Boolean).join(" ") || void 0, S = (w, m) => {
    let y;
    m ? y = [...v, w] : y = v.filter((k) => k !== w), x(y), u?.(y);
  }, b = () => e.map((w, m) => {
    const y = `${g}-${m + 1}`, k = `${y}-conditional`, M = v.includes(w.value), A = w.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: y,
          name: t,
          type: "checkbox",
          value: w.value,
          checked: M,
          disabled: A,
          onChange: (E) => S(w.value, E.target.checked),
          "aria-describedby": w.hint ? `${y}-hint` : I,
          ...w.conditional && {
            "aria-controls": k,
            "aria-expanded": M ? "true" : "false"
          },
          ...w.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: y, children: w.text }),
      w.hint && /* @__PURE__ */ n.jsx("div", { id: `${y}-hint`, className: "nhsuk-checkboxes__hint", children: w.hint }),
      w.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: Se("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !M
          }),
          id: k,
          children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            w.conditional.label && /* @__PURE__ */ n.jsx(Ra, { htmlFor: w.conditional.id, children: w.conditional.label }),
            /* @__PURE__ */ n.jsx(Fa, { ...w.conditional })
          ] }) : w.conditional
        }
      )
    ] }, w.value);
  }), { classes: C, formGroupClasses: N } = ud({ small: c, className: d, hasError: !!l });
  return /* @__PURE__ */ n.jsx("div", { className: N, ...p, ...h, children: /* @__PURE__ */ n.jsxs(
    Ba,
    {
      legend: o ? {
        text: o,
        isPageHeading: a,
        size: s
      } : void 0,
      describedBy: I,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: j, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: T, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: C, children: b() })
      ]
    }
  ) });
};
fd.displayName = "Checkboxes";
function pd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const hd = ({
  id: e,
  name: t,
  value: r,
  defaultValue: o,
  placeholder: a,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: d = !1,
  describedBy: c,
  className: u,
  rows: f = 5,
  cols: p,
  maxLength: h,
  minLength: v,
  wrap: x = "soft",
  resize: g = "vertical",
  autoComplete: j,
  spellCheck: T,
  onChange: I,
  onBlur: S,
  onFocus: b,
  onKeyDown: C,
  ...N
}) => {
  const { classes: w, describedBy: m } = pd({ hasError: d, resize: g, className: u, describedBy: c });
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: w,
      id: e,
      name: t,
      value: r,
      defaultValue: o,
      placeholder: a,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": m,
      rows: f,
      cols: p,
      maxLength: h,
      minLength: v,
      wrap: x,
      autoComplete: j,
      spellCheck: T,
      onChange: I,
      onBlur: S,
      onFocus: b,
      onKeyDown: C,
      ...N
    }
  );
};
function md(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Li = ({
  id: e,
  className: t,
  children: r,
  ...o
}) => {
  const a = md({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: a.classes, id: a.id, ...o, children: r });
}, xy = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: o = 75,
  name: a,
  value: s,
  defaultValue: i,
  rows: l,
  className: d,
  countMessage: c,
  onCountChange: u,
  onChange: f,
  ...p
}) => {
  const h = s ?? i ?? "", [v, x] = Oe(h), [g, j] = Oe(0), [T, I] = Oe(!1), [S, b] = Oe(!1), C = xe((M) => r ? M.trim() === "" ? 0 : M.trim().split(/\s+/).length : M.length, [r]);
  Xe(() => {
    const M = C(v), A = t || r || 0, E = A - M, L = Math.floor(A * (o / 100));
    j(E), I(M > A), b(M >= L || M > A), u && u(M, E);
  }, [v, t, r, o, C, u]);
  const N = (M) => {
    const A = M.target.value;
    x(A), f && f(M);
  }, w = () => {
    const M = t || r || 0, A = r ? "word" : "character", E = r ? "words" : "characters";
    if (!S)
      return `You can enter up to ${M} ${M === 1 ? A : E}`;
    if (T) {
      const L = Math.abs(g);
      return `You have ${L} ${L === 1 ? A : E} too many`;
    } else
      return `You have ${g} ${g === 1 ? A : E} remaining`;
  }, m = Se(
    "nhsuk-character-count",
    d
  ), y = Se(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !S,
      "nhsuk-error-message": T
    },
    c?.classes
  ), k = Se(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": T
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: m,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": o,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          hd,
          {
            id: e,
            name: a,
            value: s !== void 0 ? v : void 0,
            defaultValue: s === void 0 ? i ?? v : void 0,
            rows: l,
            className: k,
            onChange: N,
            "aria-describedby": `${e}-info`,
            "aria-invalid": T || void 0,
            ...p
          }
        ),
        /* @__PURE__ */ n.jsx(
          Li,
          {
            id: `${e}-info`,
            className: y,
            role: "status",
            "aria-live": "polite",
            children: w()
          }
        )
      ]
    }
  );
};
function gd(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const xd = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: o,
  children: a,
  ...s
}) => {
  const i = Se(
    "nhsuk-select__option",
    o
  );
  return /* @__PURE__ */ n.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...s,
      children: a
    }
  );
}, bd = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: o,
  defaultValue: a,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: d,
  className: c,
  multiple: u = !1,
  size: f,
  autoComplete: p,
  options: h,
  children: v,
  onChange: x,
  onBlur: g,
  onFocus: j,
  ...T
}) => {
  const { classes: I } = gd({ hasError: l, className: c }), S = () => h ? h.map((C, N) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: C.value,
      disabled: C.disabled,
      "data-initial-selected": C.selected || void 0,
      children: C.text
    },
    `${C.value}-${N}`
  )) : null, b = a === void 0 && o === void 0 && h ? h.find((C) => C.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: I,
      id: e,
      name: t,
      "aria-label": r,
      value: o,
      defaultValue: a !== void 0 ? a : b,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: f,
      autoComplete: p,
      onChange: x,
      onBlur: g,
      onFocus: j,
      ...T,
      children: v || S()
    }
  );
}, Sr = bd;
Sr.Option = xd;
function yd(e) {
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
  selectedValue: r,
  enableBehaviourAttr: o,
  handleChange: a,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d,
  InputComponent: c
}) {
  const {
    onChange: u,
    onBlur: f,
    onFocus: p,
    ...h
  } = e, {
    name: v,
    hasError: x = !1,
    describedBy: g,
    className: j,
    size: T = "normal",
    inline: I = !1,
    options: S,
    ...b
  } = h, { classes: C, describedBy: N } = yd({ hasError: x, size: T, inline: I, className: j, describedBy: g });
  return /* @__PURE__ */ n.jsx(Ba, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: C,
      ...b,
      ...o ? { "data-nhs-behaviour": "radios" } : {},
      children: S.map((w, m) => {
        const y = `${v}-${m}`, k = w.conditional ? `${y}-conditional` : void 0, M = r === w.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: y,
              name: v,
              type: "radio",
              value: w.value,
              disabled: w.disabled,
              ...t === "client" ? {
                checked: M,
                onChange: a,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (A) => {
                  A && d && (d.current[m] = A);
                }
              } : {
                defaultChecked: M,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": N
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: y, children: w.text }),
          w.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: w.hint }),
          w.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: Se("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !M
              }),
              id: k,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                w.conditional.label && /* @__PURE__ */ n.jsx(
                  Ra,
                  {
                    htmlFor: w.conditional.id,
                    children: w.conditional.label
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  c,
                  {
                    ...w.conditional
                  }
                )
              ] }) : w.conditional
            }
          )
        ] }, w.value);
      })
    }
  ) });
}
const by = ({ value: e, defaultValue: t, onChange: r, onBlur: o, onFocus: a, ...s }) => {
  const [i, l] = Oe(e || t || ""), d = Ge([]), c = Ge(i), u = (h) => {
    const v = h.target.value;
    v !== c.current && (c.current = v, l(v), r?.(h));
  }, f = (h) => {
    a?.(h);
  }, p = xe((h) => {
    const { key: v } = h;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(v)) return;
    h.preventDefault();
    const x = d.current.filter((I) => I && !I.disabled), g = x.indexOf(h.currentTarget);
    if (g === -1) return;
    let j = g;
    ["ArrowDown", "ArrowRight"].includes(v) ? j = (g + 1) % x.length : ["ArrowUp", "ArrowLeft"].includes(v) && (j = (g - 1 + x.length) % x.length);
    const T = x[j];
    T && (T.focus(), T.checked || T.click());
  }, []);
  return Ai(
    { value: e, defaultValue: t, onChange: r, onBlur: o, onFocus: a, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: o,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: p,
      itemsRef: d,
      InputComponent: Fa
    }
  );
};
function vd(e) {
  const {
    id: t,
    name: r,
    type: o = "text",
    value: a,
    defaultValue: s,
    placeholder: i,
    disabled: l = !1,
    readOnly: d = !1,
    required: c = !1,
    hasError: u = !1,
    describedBy: f,
    className: p,
    width: h = "full",
    inputMode: v,
    autoComplete: x,
    maxLength: g,
    minLength: j,
    pattern: T,
    step: I,
    min: S,
    max: b,
    showValueLabels: C = !1,
    showCurrentValue: N = !1,
    valueLabels: w,
    // Strip interactive handlers in server variant
    onChange: m,
    onBlur: y,
    onFocus: k,
    onKeyDown: M,
    ...A
  } = e, { classes: E, isRange: L } = Ti({
    type: o,
    hasError: u,
    width: h,
    className: p
  }), D = {
    id: t,
    name: r,
    type: o,
    placeholder: i,
    disabled: l,
    readOnly: d,
    required: c,
    "aria-describedby": f,
    inputMode: v,
    autoComplete: x,
    maxLength: g,
    minLength: j,
    pattern: T,
    step: I,
    min: S,
    max: b,
    ...A
  };
  if (L) {
    const R = a ?? s ?? (typeof S < "u" ? String(S) : "0"), oe = /* @__PURE__ */ n.jsx(
      "input",
      {
        className: E,
        ...a !== void 0 ? { value: a } : {},
        ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": R,
        ...D
      }
    );
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      C ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: w?.min || S || "0" }),
        oe,
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: w?.max || b || "100" })
      ] }) : oe,
      N && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        w?.current || "Current value:",
        " ",
        /* @__PURE__ */ n.jsx("strong", { children: R })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ n.jsx(
    "input",
    {
      className: E,
      ...a !== void 0 ? { value: a } : {},
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...D
    }
  );
}
const yy = ({ value: e, defaultValue: t, ...r }) => {
  const o = e || t || "";
  return Ai(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: o,
      enableBehaviourAttr: !0,
      InputComponent: vd
    }
  );
};
var gn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(gn || {}), wd = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(wd || {}), Sd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Sd || {}), _d = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(_d || {});
const $i = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: o,
  style: a,
  ...s
}) => {
  const i = Se(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = o ? { maxWidth: o, ...a || {} } : a;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...s, children: e });
}, on = ({
  children: e,
  className: t,
  style: r,
  align: o,
  rowGap: a,
  ...s
}) => {
  const i = Se(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    o ? `nhsuk-grid-row-align-${o}` : void 0,
    t
  );
  return /* @__PURE__ */ n.jsx("div", { className: i, style: r, ...s, children: e });
}, Zn = ({
  children: e,
  width: t = gn.Full,
  mobileWidth: r,
  tabletWidth: o,
  desktopWidth: a,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: d,
  align: c,
  ...u
}) => {
  const f = Se(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${r}-mobile`]: !!r,
      [`nhsuk-u-${o}-tablet`]: !!o,
      [`nhsuk-u-${a}-desktop`]: !!a,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...c ? { [`nhsuk-grid-align-${c}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: f, style: d, ...u, children: e });
}, Jo = ({
  children: e,
  className: t,
  style: r,
  rowGap: o = 8,
  ...a
}) => {
  const s = et.Children.toArray(e), i = s[0], l = et.isValidElement(i) && (i.type === on || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), d = typeof o == "number" ? `${o}px` : o;
  let c = e;
  if (l)
    c = s.map((u, f) => {
      if (!et.isValidElement(u)) return u;
      const p = u, h = p.props || {}, v = typeof h.className == "string" ? h.className : "";
      if (!(p.type === on || v.includes("nhsuk-grid-row"))) return u;
      const g = h.rowGap, j = g !== void 0 ? typeof g == "number" ? `${g}px` : g : d, T = f === 0 ? void 0 : j;
      if (!T) return u;
      const I = { ...h.style || {}, marginTop: T };
      return et.cloneElement(p, { style: I });
    });
  else {
    const u = { marginTop: void 0 };
    c = /* @__PURE__ */ n.jsx(on, { style: u, children: e });
  }
  return /* @__PURE__ */ n.jsx($i, { className: t, style: r, ...a, children: c });
}, kd = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: o = !1,
  className: a,
  role: s,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = Se(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": o,
      [`nhsuk-list--${r}`]: r !== "medium"
    },
    a
  );
  return /* @__PURE__ */ n.jsx(d, { className: c, role: s, ...l, children: e });
}, Cd = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = Se("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: o, ...r, children: e });
}, Nd = kd;
Nd.Item = Cd;
const vy = ({
  debug: e = !1,
  className: t,
  children: r,
  ...o
}) => {
  if (!r)
    return null;
  const a = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...o, children: r });
}, wy = {
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
}, Sy = ({
  debug: e = !1,
  className: t,
  children: r,
  ...o
}) => {
  if (!r)
    return null;
  const a = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...o, children: r });
}, _y = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, ky = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ei = ({
  as: e = "main",
  size: t = "default",
  className: r,
  children: o,
  ...a
}) => {
  const s = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(e, { className: s, ...a, children: o });
};
function jd(e) {
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
function Md(e) {
  const t = e.level ?? jd(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), o = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: o };
}
const Jt = ({ level: e, className: t, text: r, html: o, children: a, size: s, marginBottom: i, ...l }) => {
  const d = Md({ level: e, size: s, className: t, marginBottom: i }), c = a || (o ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o } }) : r);
  return _i(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function Id(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const ps = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: o, ...a }) => {
  const s = Id({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: s.classes, id: s.id, ...a, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    o
  ] });
}, Cy = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: o,
  errorList: a,
  className: s,
  children: i,
  ...l
}) => {
  const d = Ge(null);
  Xe(() => {
    d.current && d.current.focus();
  }, []);
  const c = Se(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => o ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o } }) : r, p = (h) => {
    const v = h.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
    return h.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: h.href,
        ...h.attributes,
        children: v
      }
    ) : v;
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || o) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: a.map((h, v) => /* @__PURE__ */ n.jsx("li", { children: p(h) }, v)) })
        ] })
      ]
    }
  );
}, Ny = ({
  id: e,
  className: t,
  items: r,
  namePrefix: o,
  values: a = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: d,
  ...c
}) => {
  const [u, f] = Oe(() => ({
    day: a.day || "",
    month: a.month || "",
    year: a.year || ""
  })), [p, h] = Oe({}), v = (L) => L % 4 === 0 && L % 100 !== 0 || L % 400 === 0, x = (L, D) => {
    const R = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return L === 2 && v(D) ? 29 : R[L - 1];
  }, g = (L, D, R) => {
    if (!L) return;
    if (!/^\d+$/.test(L)) return "Day must be a number";
    const oe = parseInt(L, 10);
    if (oe < 1 || oe > 31) return "Day must be between 1 and 31";
    if (D && R) {
      const G = parseInt(D, 10), B = parseInt(R, 10);
      if (!isNaN(G) && !isNaN(B) && G >= 1 && G <= 12) {
        const Q = x(G, B);
        if (oe > Q)
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
          ][G - 1]} ${B} only has ${Q} days`;
      }
    }
  }, j = (L) => {
    if (!L) return;
    if (!/^\d+$/.test(L)) return "Month must be a number";
    const D = parseInt(L, 10);
    if (D < 1 || D > 12) return "Month must be between 1 and 12";
  }, T = (L) => {
    if (!L) return;
    if (!/^\d+$/.test(L)) return "Year must be a number";
    const D = parseInt(L, 10), R = (/* @__PURE__ */ new Date()).getFullYear();
    if (D < 1900 || D > R + 10)
      return `Year must be between 1900 and ${R + 10}`;
  }, I = (L, D, R) => {
    if (!L || !D || !R) return;
    const oe = parseInt(L, 10), G = parseInt(D, 10), B = parseInt(R, 10);
    if (isNaN(oe) || isNaN(G) || isNaN(B) || G < 1 || G > 12 || B < 1900) return;
    const Q = x(G, B);
    oe < 1 || oe > Q;
  }, S = xe(
    (L, D) => {
      const R = {
        ...u,
        [L]: D
      };
      f(R), d && d(R);
    },
    [u, d]
  ), b = xe(
    (L) => {
      const D = u[L];
      let R;
      if (L === "day")
        R = g(
          D,
          u.month,
          u.year
        );
      else if (L === "month") {
        if (R = j(D), !R && u.day) {
          const oe = g(
            u.day,
            D,
            u.year
          );
          h((G) => ({
            ...G,
            day: oe
          }));
        }
      } else if (L === "year" && (R = T(D), !R && u.day && u.month)) {
        const oe = g(
          u.day,
          u.month,
          D
        );
        h((G) => ({
          ...G,
          day: oe
        }));
      }
      if (h((oe) => ({
        ...oe,
        [L]: R
      })), u.day && u.month && u.year) {
        const oe = I(
          L === "day" ? D : u.day,
          L === "month" ? D : u.month,
          L === "year" ? D : u.year
        );
        oe && h((G) => ({
          ...G,
          day: oe
        }));
      }
    },
    [u, g, j, T, I]
  ), C = Fe(
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
  ), N = r || C;
  let w = s?.describedBy || "";
  const m = i ? `${e}-hint` : "", y = l ? `${e}-error` : "";
  m && (w = w ? `${w} ${m}` : m), y && (w = w ? `${w} ${y}` : y);
  const k = Object.values(p).some((L) => L), M = Se("nhsuk-form-group", {
    "nhsuk-form-group--error": l || k
  }), A = Se("nhsuk-date-input", t), E = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(Li, { id: m, className: i.classes, children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text }),
    l && /* @__PURE__ */ n.jsx(ps, { id: y, className: l.classes, children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text }),
    Object.entries(p).map(
      ([L, D]) => D ? /* @__PURE__ */ n.jsxs(
        ps,
        {
          id: `${e}-${L}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            D
          ]
        },
        `${L}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: A,
        id: e,
        "data-testid": "date-input",
        ...c,
        children: N.map((L) => {
          const D = L.id || `${e}-${L.name}`, R = o ? `${o}[${L.name}]` : L.name, oe = L.label || L.name.charAt(0).toUpperCase() + L.name.slice(1), G = p[L.name], B = u[L.name] || "";
          let Q = w;
          if (G) {
            const W = `${e}-${L.name}-error`;
            Q = Q ? `${Q} ${W}` : W;
          }
          return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
            /* @__PURE__ */ n.jsx(Ra, { htmlFor: D, className: "nhsuk-date-input__label", children: oe }),
            /* @__PURE__ */ n.jsx(
              Fa,
              {
                id: D,
                name: R,
                value: B,
                className: Se("nhsuk-date-input__input", L.classes, {
                  "nhsuk-input--error": G
                }),
                inputMode: L.inputmode,
                autoComplete: L.autocomplete,
                pattern: L.pattern,
                "aria-describedby": Q || void 0,
                hasError: !!G,
                onChange: (W) => S(L.name, W.target.value),
                onBlur: () => b(L.name)
              }
            )
          ] }, L.name);
        })
      }
    )
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: M, children: s ? /* @__PURE__ */ n.jsx(
    Ba,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: w || void 0,
      children: E()
    }
  ) : E() });
}, Pi = {
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
}, Fi = Ci(Pi), Dd = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Pi, ...t };
  return /* @__PURE__ */ n.jsx(Fi.Provider, { value: r, children: e });
}, jy = () => {
  const e = ki(Fi);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Td() {
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
function Ld() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Td(), document.head.appendChild(e);
}
const My = ({ children: e, theme: t }) => (Xe(() => {
  Ld();
}, []), /* @__PURE__ */ n.jsx(Dd, { theme: t, children: e })), Ad = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", $d = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Ed = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Pd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Fd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", Rd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Bd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var Ri = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(Ri || {}), Bi = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Bi || {});
const Hd = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Ad,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Fd,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Pd,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: $d,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Ed,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: Rd,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Bd,
      ariaLabel: "FDP"
    }
  }
};
function zd(e, t = "full") {
  return Hd[e]?.[t];
}
function Od(e, {
  variant: t,
  isClient: r,
  menuOpen: o = !1,
  showMoreButton: a = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: d,
  navListRef: c,
  searchNode: u,
  brand: f
}) {
  const {
    className: p,
    logo: h = {},
    service: v = {},
    serviceName: x,
    organisation: g,
    search: j,
    account: T,
    navigation: I,
    containerClasses: S,
    variant: b = "default",
    attributes: C = {},
    maxVisibleItems: N,
    // deprecated (ignored)
    responsiveNavigation: w = !0,
    logoVariant: m = Bi.Full,
    ...y
  } = e, k = {
    ...v,
    text: v?.text ?? x
  };
  "maxVisibleItems" in y && delete y.maxVisibleItems;
  const M = k.href && !h.href || k.href && k.href === h.href, A = M ? k.href : h.href, E = Se(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": b === "organisation" || g,
      "nhsuk-header--white": b === "white"
    },
    p
  ), L = Se(
    "nhsuk-header__container",
    S
  ), D = Se(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": I?.white,
      "nhsuk-header__navigation--justified": I?.justified
    },
    I?.className
  ), oe = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), G = () => /* @__PURE__ */ n.jsxs(
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
  ), B = () => {
    if (h.src)
      return /* @__PURE__ */ n.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: h.src,
          width: "280",
          alt: h.ariaLabel || (oe === "fdp" ? "FDP" : "NHS")
        }
      );
    if (oe === "fdp") {
      const J = zd(Ri.FDP, m);
      if (J?.src)
        return /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: J.src,
            "data-logo-variant": m,
            width: "280",
            alt: J.ariaLabel || "FDP"
          }
        );
    }
    return G();
  }, Q = () => g ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, W = (J, le) => J ? le ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: le, children: J }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: J }) : null, K = (J) => J.active || J.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: J.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: J.html } }) : J.text }) : J.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: J.html } }) : J.text, q = () => /* @__PURE__ */ n.jsx(
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
      className: E,
      role: "banner",
      "data-module": "nhsuk-header",
      ...C,
      ...y,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: L, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            A ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: A, children: [
              B(),
              Q(),
              M && W(k.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              B(),
              Q(),
              M && W(k.text)
            ] }),
            k.text && !M && W(k.text, k.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ n.jsx(
            Mi,
            {
              ...T,
              variant: b === "white" ? "white" : "default"
            }
          )
        ] }),
        I && I.items && I.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: D,
            "aria-label": I.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: Se(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  S
                ),
                ref: d,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (I?.items || []).map((J, le) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: Se(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": J.active || J.current,
                              "nhsuk-header__navigation-item--hidden": a && s !== void 0 && le >= (s ?? 0)
                            },
                            J.className
                          ),
                          ...J.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: J.href,
                              ...J.active || J.current ? { "aria-current": J.current ? "page" : "true" } : {},
                              children: K(J)
                            }
                          )
                        },
                        le
                      )),
                      a && s !== void 0 && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs(
                        "button",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          type: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": o ? "true" : "false",
                          "aria-controls": "nhsuk-header-more-menu",
                          onClick: l,
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
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
        r && I && I.items && I.items.length > 0 && o && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: I.items.slice(s ?? 0).map((J, le) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: Se("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": J.active || J.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: J.href,
                    ...J.active || J.current ? { "aria-current": J.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: K(J)
                  }
                )
              },
              `overflow-${(s ?? 0) + le}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const Xo = Ci(void 0);
function Iy({ brand: e = "nhs", scope: t = "document", children: r }) {
  const [o, a] = Oe(e);
  Xe(() => {
    a(e);
  }, [e]), Xe(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", o), () => {
      };
  }, [o, t]);
  const s = Fe(() => ({ brand: o, setBrand: a }), [o]);
  return t === "local" ? /* @__PURE__ */ n.jsx(Xo.Provider, { value: s, children: /* @__PURE__ */ n.jsx("div", { "data-brand": o, children: r }) }) : /* @__PURE__ */ n.jsx(Xo.Provider, { value: s, children: r });
}
function Ud() {
  const e = ki(Xo);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Wd = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: o = "q",
  value: a,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: d,
  disabled: c = !1,
  callbacks: u = {},
  isLoading: f = !1,
  showResults: p = !1,
  results: h = [],
  formAttributes: v = {},
  inputAttributes: x = {},
  buttonAttributes: g = {},
  preventDefaultSubmit: j = !1,
  debounceMs: T = 300,
  minQueryLength: I = 1
}) => {
  const [S, b] = Oe(""), [C, N] = Oe(!1), w = Ge(void 0), m = Ge(null), y = Ge(null), k = e === "controlled" && a !== void 0, M = k ? a : S, A = xe(
    (K) => {
      w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        u.onChange && K.length >= I && u.onChange(K);
      }, T);
    },
    [u.onChange, T, I]
  ), E = xe(
    (K) => {
      const q = K.target.value;
      k || b(q), e !== "form" && A(q);
    },
    [k, e, A]
  ), L = xe(
    (K) => {
      const q = M.trim(), J = {
        query: q,
        timestamp: Date.now(),
        formData: new FormData(K.currentTarget)
      };
      e === "controlled" || e === "hybrid" && j ? (K.preventDefault(), u.onSearch && q.length >= I && u.onSearch(J)) : e === "hybrid" && u.onSearch && q.length >= I && u.onSearch(J);
    },
    [
      e,
      M,
      u.onSearch,
      j,
      I
    ]
  ), D = xe(() => {
    N(!0), u.onFocus?.();
  }, [u.onFocus]), R = xe(() => {
    N(!1), u.onBlur?.();
  }, [u.onBlur]), oe = xe(() => {
    k || b(""), u.onClear?.(), y.current?.focus();
  }, [k, u.onClear]);
  Xe(() => () => {
    w.current && clearTimeout(w.current);
  }, []);
  const G = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: Se("nhsuk-icon nhsuk-icon__search", {
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
  ), Q = () => !M || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: oe,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx(
        "svg",
        {
          className: "nhsuk-icon nhsuk-icon__close",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" })
        }
      )
    }
  ), W = () => !p || !h.length || !C ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: h.map((K) => /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: K.href ? /* @__PURE__ */ n.jsxs(
        "a",
        {
          href: K.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: K.title }),
            K.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: K.description })
          ]
        }
      ) : /* @__PURE__ */ n.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: K.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: K.title }),
            K.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: K.description })
          ]
        }
      )
    },
    K.id
  )) });
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: Se("nhsuk-header__search", d, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": C,
        "nhsuk-header__search--has-results": p && h.length > 0
      }),
      children: [
        /* @__PURE__ */ n.jsxs(
          "form",
          {
            ref: m,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? r : void 0,
            role: "search",
            onSubmit: L,
            ...v,
            children: [
              /* @__PURE__ */ n.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ n.jsx(
                  "input",
                  {
                    ref: y,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? o : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: M,
                    onChange: E,
                    onFocus: D,
                    onBlur: R,
                    disabled: c || f,
                    ...p && h.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...x
                  }
                ),
                Q()
              ] }),
              /* @__PURE__ */ n.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: c || f || e !== "form" && M.length < I,
                  ...g,
                  children: [
                    f ? B() : G(),
                    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
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
}, Hi = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: o,
  search: a,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: c = {},
  ...u
}) => {
  const [f, p] = Oe(!1), [h, v] = Oe(!1), [x, g] = Oe(i?.items?.length || 0), [j, T] = Oe(!1), [I, S] = Oe(!1), b = Ge(null), C = Ge(null), N = Ge(!1);
  Xe(() => {
    typeof window > "u" || S(!0);
  }, []), Xe(() => {
    if (typeof document > "u") return;
    const M = (A) => {
      A.key === "Escape" && f && p(!1);
    };
    if (f)
      return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [f]);
  const w = Ge(null), m = xe(() => {
    if (!I || !i?.items || i.items.length === 0 || N.current) return;
    const M = b.current, A = C.current;
    if (!M || !A) return;
    N.current = !0, M.classList.add("nhsuk-header__navigation-container--measuring");
    const E = M.clientWidth, L = Array.from(A.children);
    if (!L.length) {
      M.classList.remove("nhsuk-header__navigation-container--measuring"), N.current = !1;
      return;
    }
    if (w.current == null) {
      const J = document.createElement("button");
      J.type = "button", J.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", J.style.position = "absolute", J.style.visibility = "hidden", J.style.pointerEvents = "none", J.innerHTML = "<span>More</span>", M.appendChild(J), w.current = J.getBoundingClientRect().width || 104, M.removeChild(J);
    }
    const D = w.current + 16;
    let R = 0, oe = 0;
    const G = window.getComputedStyle(M), B = parseFloat(G.paddingLeft) || 0, Q = parseFloat(G.paddingRight) || 0;
    let W = B + Q;
    for (const J of L) {
      const le = J.getBoundingClientRect().width;
      if (R + le + D + W > E) break;
      R += le, oe += 1;
    }
    const K = oe < i.items.length, q = K ? oe : i.items.length;
    v((J) => J === K ? J : K), g((J) => J === q ? J : q), M.classList.remove("nhsuk-header__navigation-container--measuring"), N.current = !1;
  }, [I, i?.items]);
  Xe(() => {
    if (!I) return;
    const M = b.current;
    if (!M) return;
    let A = null;
    const E = () => {
      A == null && (A = window.requestAnimationFrame(() => {
        A = null, m();
      }));
    };
    m();
    const L = new ResizeObserver(() => E());
    return L.observe(M), C.current && L.observe(C.current), () => {
      A != null && window.cancelAnimationFrame(A), L.disconnect();
    };
  }, [I, m]), Xe(() => {
    I && m();
  }, [i?.items?.length, I, m]);
  const y = (M) => {
    M && (M.preventDefault(), M.stopPropagation());
    const A = !f;
    p(A), T(A);
  }, k = (() => {
    try {
      return Ud();
    } catch {
      return;
    }
  })();
  return Od(
    {
      className: e,
      logo: t,
      service: r,
      organisation: o,
      search: a,
      account: s,
      navigation: i,
      containerClasses: l,
      variant: d,
      attributes: c,
      ...u
    },
    {
      variant: "client",
      isClient: I,
      menuOpen: f,
      showMoreButton: h,
      visibleItems: x,
      dropdownVisible: j,
      toggleMenu: y,
      navContainerRef: b,
      navListRef: C,
      // Provide interactive search node for client build only
      searchNode: a ? /* @__PURE__ */ n.jsx(Wd, { ...a }) : null,
      brand: k?.brand
    }
  );
};
function Gd(e, { variant: t, isClient: r }) {
  const {
    className: o,
    logo: a = {},
    service: s = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: d,
    navigation: c,
    containerClasses: u,
    variant: f = "default",
    attributes: p = {},
    maxVisibleItems: h,
    // deprecated (ignored)
    responsiveNavigation: v = !0,
    ...x
  } = e;
  "maxVisibleItems" in x && delete x.maxVisibleItems;
  const g = {
    ...s,
    text: s?.text ?? i
  }, j = g.href && !a.href || g.href && g.href === a.href, T = j ? g.href : a.href, I = Se(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    o
  ), S = Se("nhsuk-header__container", u), b = Se(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
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
      "aria-label": a.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: a.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), N = () => a.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: a.src,
      width: "280",
      alt: a.ariaLabel || "NHS"
    }
  ) : C(), w = () => l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, m = (E, L) => E ? L ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: L, children: E }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: E }) : null, y = (E) => E.active || E.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: E.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: E.html } }) : E.text }) : E.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: E.html } }) : E.text, k = c?.items && !v, M = k ? [] : c?.items, A = k ? c.items : [];
  return /* @__PURE__ */ n.jsxs("header", { className: I, role: "banner", "data-module": "nhsuk-header", ...p, ...x, children: [
    /* @__PURE__ */ n.jsxs("div", { className: S, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
        T ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: T, children: [
          N(),
          w(),
          j && m(g.text)
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          N(),
          w(),
          j && m(g.text)
        ] }),
        g.text && !j && m(g.text, g.href)
      ] }),
      /* @__PURE__ */ n.jsx(Mi, { ...d, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ n.jsx("nav", { className: b, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ n.jsx(
      "div",
      {
        className: Se(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !r
          },
          u
        ),
        children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-list", children: (M || []).map((E, L) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: Se("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": E.active || E.current
            }, E.className),
            ...E.attributes || {},
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: E.href,
                ...E.active || E.current ? { "aria-current": E.current ? "page" : "true" } : {},
                children: y(E)
              }
            )
          },
          L
        )) })
      }
    ) }),
    k && A.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: A.map((E, L) => /* @__PURE__ */ n.jsx(
      "li",
      {
        className: Se("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": E.active || E.current
        }),
        children: /* @__PURE__ */ n.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: E.href,
            ...E.active || E.current ? { "aria-current": E.current ? "page" : "true" } : {},
            children: y(E)
          }
        )
      },
      `overflow-server-${L}`
    )) }) })
  ] });
}
const Dy = (e) => Gd(e, {
  variant: "server",
  isClient: !1
}), Vd = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: o,
  html: a,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: d,
  ...c
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
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    r,
    !d && !o && !a ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), h = d || e || o || a, v = () => {
    if (!e) return null;
    const x = { className: p };
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
      className: u,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: h && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          v(),
          d || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: o }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && h && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          v(),
          d || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: o }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Vd.displayName = "Hero";
const zi = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: o,
  metaLinks: a,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: d,
  footerStyle: c,
  containerStyle: u
}) => {
  const f = (h, v = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: Se("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": v
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: h.URL,
          target: h.newWindow ? "_blank" : void 0,
          rel: h.newWindow ? "noopener noreferrer" : void 0,
          children: h.label
        }
      )
    },
    `${h.URL}-${h.label}`
  ), p = !!(r || o);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: Se("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: Se("nhsuk-footer", e), style: c, children: p ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((h) => f(h)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((h) => f(h)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: o.map((h) => f(h)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: a.map((h) => f(h)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((h) => f(h, !0)),
              (r || []).map((h) => f(h, !0)),
              (o || []).map((h) => f(h, !0)),
              (a || []).map((h) => f(h, !0))
            ] })
          ) }),
          !p && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    p && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function br(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yd(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ha(e) {
  let t, r, o;
  e.length !== 2 ? (t = br, r = (l, d) => br(e(l), d), o = (l, d) => e(l) - d) : (t = e === br || e === Yd ? e : Zd, r = e, o = e);
  function a(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], d) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function s(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], d) <= 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function i(l, d, c = 0, u = l.length) {
    const f = a(l, d, c, u - 1);
    return f > c && o(l[f - 1], d) > -o(l[f], d) ? f - 1 : f;
  }
  return { left: a, center: i, right: s };
}
function Zd() {
  return 0;
}
function qd(e) {
  return e === null ? NaN : +e;
}
const Jd = Ha(br), Xd = Jd.right;
Ha(qd).center;
function Oi(e, t) {
  let r, o;
  if (t === void 0)
    for (const a of e)
      a != null && (r === void 0 ? a >= a && (r = o = a) : (r > a && (r = a), o < a && (o = a)));
  else {
    let a = -1;
    for (let s of e)
      (s = t(s, ++a, e)) != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }
  return [r, o];
}
class hs extends Map {
  constructor(t, r = eu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [o, a] of t) this.set(o, a);
  }
  get(t) {
    return super.get(ms(this, t));
  }
  has(t) {
    return super.has(ms(this, t));
  }
  set(t, r) {
    return super.set(Kd(this, t), r);
  }
  delete(t) {
    return super.delete(Qd(this, t));
  }
}
function ms({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) ? e.get(o) : r;
}
function Kd({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) ? e.get(o) : (e.set(o, r), r);
}
function Qd({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) && (r = e.get(o), e.delete(o)), r;
}
function eu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const tu = Math.sqrt(50), nu = Math.sqrt(10), ru = Math.sqrt(2);
function _r(e, t, r) {
  const o = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(o)), s = o / Math.pow(10, a), i = s >= tu ? 10 : s >= nu ? 5 : s >= ru ? 2 : 1;
  let l, d, c;
  return a < 0 ? (c = Math.pow(10, -a) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, a) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? _r(e, t, r * 2) : [l, d, c];
}
function ou(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const o = t < e, [a, s, i] = o ? _r(t, e, r) : _r(e, t, r);
  if (!(s >= a)) return [];
  const l = s - a + 1, d = new Array(l);
  if (o)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (a + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (a + c) * i;
  return d;
}
function Ko(e, t, r) {
  return t = +t, e = +e, r = +r, _r(e, t, r)[2];
}
function Qo(e, t, r) {
  t = +t, e = +e, r = +r;
  const o = t < e, a = o ? Ko(t, e, r) : Ko(e, t, r);
  return (o ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function au(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var o = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, s = new Array(a); ++o < a; )
    s[o] = e + o * r;
  return s;
}
function xo(e, t) {
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
const gs = Symbol("implicit");
function Ui() {
  var e = new hs(), t = [], r = [], o = gs;
  function a(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (o !== gs) return o;
      e.set(s, i = t.push(s) - 1);
    }
    return r[i % r.length];
  }
  return a.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new hs();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return a;
  }, a.range = function(s) {
    return arguments.length ? (r = Array.from(s), a) : r.slice();
  }, a.unknown = function(s) {
    return arguments.length ? (o = s, a) : o;
  }, a.copy = function() {
    return Ui(t, r).unknown(o);
  }, xo.apply(a, arguments), a;
}
function Wi() {
  var e = Ui().unknown(void 0), t = e.domain, r = e.range, o = 0, a = 1, s, i, l = !1, d = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = a < o, v = h ? a : o, x = h ? o : a;
    s = (x - v) / Math.max(1, p - d + c * 2), l && (s = Math.floor(s)), v += (x - v - s * (p - d)) * u, i = s * (1 - d), l && (v = Math.round(v), i = Math.round(i));
    var g = au(p).map(function(j) {
      return v + s * j;
    });
    return r(h ? g.reverse() : g);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), f()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([o, a] = p, o = +o, a = +a, f()) : [o, a];
  }, e.rangeRound = function(p) {
    return [o, a] = p, o = +o, a = +a, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return s;
  }, e.round = function(p) {
    return arguments.length ? (l = !!p, f()) : l;
  }, e.padding = function(p) {
    return arguments.length ? (d = Math.min(1, c = +p), f()) : d;
  }, e.paddingInner = function(p) {
    return arguments.length ? (d = Math.min(1, p), f()) : d;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (c = +p, f()) : c;
  }, e.align = function(p) {
    return arguments.length ? (u = Math.max(0, Math.min(1, p)), f()) : u;
  }, e.copy = function() {
    return Wi(t(), [o, a]).round(l).paddingInner(d).paddingOuter(c).align(u);
  }, xo.apply(f(), arguments);
}
function za(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Gi(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function or() {
}
var qn = 0.7, kr = 1 / qn, In = "\\s*([+-]?\\d+)\\s*", Jn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", su = /^#([0-9a-f]{3,8})$/, iu = new RegExp(`^rgb\\(${In},${In},${In}\\)$`), lu = new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`), cu = new RegExp(`^rgba\\(${In},${In},${In},${Jn}\\)$`), du = new RegExp(`^rgba\\(${Et},${Et},${Et},${Jn}\\)$`), uu = new RegExp(`^hsl\\(${Jn},${Et},${Et}\\)$`), fu = new RegExp(`^hsla\\(${Jn},${Et},${Et},${Jn}\\)$`), xs = {
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
za(or, Xn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: bs,
  // Deprecated! Use color.formatHex.
  formatHex: bs,
  formatHex8: pu,
  formatHsl: hu,
  formatRgb: ys,
  toString: ys
});
function bs() {
  return this.rgb().formatHex();
}
function pu() {
  return this.rgb().formatHex8();
}
function hu() {
  return Vi(this).formatHsl();
}
function ys() {
  return this.rgb().formatRgb();
}
function Xn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = su.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? vs(t) : r === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? pr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? pr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = iu.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = lu.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = cu.exec(e)) ? pr(t[1], t[2], t[3], t[4]) : (t = du.exec(e)) ? pr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = uu.exec(e)) ? _s(t[1], t[2] / 100, t[3] / 100, 1) : (t = fu.exec(e)) ? _s(t[1], t[2] / 100, t[3] / 100, t[4]) : xs.hasOwnProperty(e) ? vs(xs[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function vs(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pr(e, t, r, o) {
  return o <= 0 && (e = t = r = NaN), new kt(e, t, r, o);
}
function mu(e) {
  return e instanceof or || (e = Xn(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function ea(e, t, r, o) {
  return arguments.length === 1 ? mu(e) : new kt(e, t, r, o ?? 1);
}
function kt(e, t, r, o) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +o;
}
za(kt, ea, Gi(or, {
  brighter(e) {
    return e = e == null ? kr : Math.pow(kr, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qn : Math.pow(qn, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(fn(this.r), fn(this.g), fn(this.b), Cr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ws,
  // Deprecated! Use color.formatHex.
  formatHex: ws,
  formatHex8: gu,
  formatRgb: Ss,
  toString: Ss
}));
function ws() {
  return `#${un(this.r)}${un(this.g)}${un(this.b)}`;
}
function gu() {
  return `#${un(this.r)}${un(this.g)}${un(this.b)}${un((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ss() {
  const e = Cr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fn(this.r)}, ${fn(this.g)}, ${fn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Cr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function un(e) {
  return e = fn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function _s(e, t, r, o) {
  return o <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, r, o);
}
function Vi(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof or || (e = Xn(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, o = e.b / 255, a = Math.min(t, r, o), s = Math.max(t, r, o), i = NaN, l = s - a, d = (s + a) / 2;
  return l ? (t === s ? i = (r - o) / l + (r < o) * 6 : r === s ? i = (o - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? s + a : 2 - s - a, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new Dt(i, l, d, e.opacity);
}
function xu(e, t, r, o) {
  return arguments.length === 1 ? Vi(e) : new Dt(e, t, r, o ?? 1);
}
function Dt(e, t, r, o) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +o;
}
za(Dt, xu, Gi(or, {
  brighter(e) {
    return e = e == null ? kr : Math.pow(kr, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qn : Math.pow(qn, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - o;
    return new kt(
      Ao(e >= 240 ? e - 240 : e + 120, a, o),
      Ao(e, a, o),
      Ao(e < 120 ? e + 240 : e - 120, a, o),
      this.opacity
    );
  },
  clamp() {
    return new Dt(ks(this.h), hr(this.s), hr(this.l), Cr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Cr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ks(this.h)}, ${hr(this.s) * 100}%, ${hr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ks(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function hr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ao(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Oa = (e) => () => e;
function bu(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function yu(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(o) {
    return Math.pow(e + o * t, r);
  };
}
function vu(e) {
  return (e = +e) == 1 ? Yi : function(t, r) {
    return r - t ? yu(t, r, e) : Oa(isNaN(t) ? r : t);
  };
}
function Yi(e, t) {
  var r = t - e;
  return r ? bu(e, r) : Oa(isNaN(e) ? t : e);
}
const Cs = (function e(t) {
  var r = vu(t);
  function o(a, s) {
    var i = r((a = ea(a)).r, (s = ea(s)).r), l = r(a.g, s.g), d = r(a.b, s.b), c = Yi(a.opacity, s.opacity);
    return function(u) {
      return a.r = i(u), a.g = l(u), a.b = d(u), a.opacity = c(u), a + "";
    };
  }
  return o.gamma = e, o;
})(1);
function wu(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, o = t.slice(), a;
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = e[a] * (1 - s) + t[a] * s;
    return o;
  };
}
function Su(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _u(e, t) {
  var r = t ? t.length : 0, o = e ? Math.min(r, e.length) : 0, a = new Array(o), s = new Array(r), i;
  for (i = 0; i < o; ++i) a[i] = Ua(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < o; ++i) s[i] = a[i](l);
    return s;
  };
}
function ku(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return r.setTime(e * (1 - o) + t * o), r;
  };
}
function Nr(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Cu(e, t) {
  var r = {}, o = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = Ua(e[a], t[a]) : o[a] = t[a];
  return function(s) {
    for (a in r) o[a] = r[a](s);
    return o;
  };
}
var ta = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $o = new RegExp(ta.source, "g");
function Nu(e) {
  return function() {
    return e;
  };
}
function ju(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Mu(e, t) {
  var r = ta.lastIndex = $o.lastIndex = 0, o, a, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (o = ta.exec(e)) && (a = $o.exec(t)); )
    (s = a.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (o = o[0]) === (a = a[0]) ? l[i] ? l[i] += a : l[++i] = a : (l[++i] = null, d.push({ i, x: Nr(o, a) })), r = $o.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? ju(d[0].x) : Nu(t) : (t = d.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function Ua(e, t) {
  var r = typeof t, o;
  return t == null || r === "boolean" ? Oa(t) : (r === "number" ? Nr : r === "string" ? (o = Xn(t)) ? (t = o, Cs) : Mu : t instanceof Xn ? Cs : t instanceof Date ? ku : Su(t) ? wu : Array.isArray(t) ? _u : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Cu : Nr)(e, t);
}
function Iu(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Du(e) {
  return function() {
    return e;
  };
}
function Tu(e) {
  return +e;
}
var Ns = [0, 1];
function Cn(e) {
  return e;
}
function na(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Du(isNaN(t) ? NaN : 0.5);
}
function Lu(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(o) {
    return Math.max(e, Math.min(t, o));
  };
}
function Au(e, t, r) {
  var o = e[0], a = e[1], s = t[0], i = t[1];
  return a < o ? (o = na(a, o), s = r(i, s)) : (o = na(o, a), s = r(s, i)), function(l) {
    return s(o(l));
  };
}
function $u(e, t, r) {
  var o = Math.min(e.length, t.length) - 1, a = new Array(o), s = new Array(o), i = -1;
  for (e[o] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < o; )
    a[i] = na(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = Xd(e, l, 1, o) - 1;
    return s[d](a[d](l));
  };
}
function Zi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Eu() {
  var e = Ns, t = Ns, r = Ua, o, a, s, i = Cn, l, d, c;
  function u() {
    var p = Math.min(e.length, t.length);
    return i !== Cn && (i = Lu(e[0], e[p - 1])), l = p > 2 ? $u : Au, d = c = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? s : (d || (d = l(e.map(o), t, r)))(o(i(p)));
  }
  return f.invert = function(p) {
    return i(a((c || (c = l(t, e.map(o), Nr)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Tu), u()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), u()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), r = Iu, u();
  }, f.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : Cn, u()) : i !== Cn;
  }, f.interpolate = function(p) {
    return arguments.length ? (r = p, u()) : r;
  }, f.unknown = function(p) {
    return arguments.length ? (s = p, f) : s;
  }, function(p, h) {
    return o = p, a = h, u();
  };
}
function qi() {
  return Eu()(Cn, Cn);
}
function Pu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function jr(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, o = e.slice(0, r);
  return [
    o.length > 1 ? o[0] + o.slice(2) : o,
    +e.slice(r + 1)
  ];
}
function $n(e) {
  return e = jr(Math.abs(e)), e ? e[1] : NaN;
}
function Fu(e, t) {
  return function(r, o) {
    for (var a = r.length, s = [], i = 0, l = e[0], d = 0; a > 0 && l > 0 && (d + l + 1 > o && (l = Math.max(1, o - d)), s.push(r.substring(a -= l, a + l)), !((d += l + 1) > o)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Ru(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Bu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mr(e) {
  if (!(t = Bu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Wa({
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
Mr.prototype = Wa.prototype;
function Wa(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Wa.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Hu(e) {
  e: for (var t = e.length, r = 1, o = -1, a; r < t; ++r)
    switch (e[r]) {
      case ".":
        o = a = r;
        break;
      case "0":
        o === 0 && (o = r), a = r;
        break;
      default:
        if (!+e[r]) break e;
        o > 0 && (o = 0);
        break;
    }
  return o > 0 ? e.slice(0, o) + e.slice(a + 1) : e;
}
var Ji;
function zu(e, t) {
  var r = jr(e, t);
  if (!r) return e + "";
  var o = r[0], a = r[1], s = a - (Ji = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, i = o.length;
  return s === i ? o : s > i ? o + new Array(s - i + 1).join("0") : s > 0 ? o.slice(0, s) + "." + o.slice(s) : "0." + new Array(1 - s).join("0") + jr(e, Math.max(0, t + s - 1))[0];
}
function js(e, t) {
  var r = jr(e, t);
  if (!r) return e + "";
  var o = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + o : o.length > a + 1 ? o.slice(0, a + 1) + "." + o.slice(a + 1) : o + new Array(a - o.length + 2).join("0");
}
const Ms = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Pu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => js(e * 100, t),
  r: js,
  s: zu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Is(e) {
  return e;
}
var Ds = Array.prototype.map, Ts = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ou(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Is : Fu(Ds.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", o = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Is : Ru(Ds.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Mr(f);
    var p = f.fill, h = f.align, v = f.sign, x = f.symbol, g = f.zero, j = f.width, T = f.comma, I = f.precision, S = f.trim, b = f.type;
    b === "n" ? (T = !0, b = "g") : Ms[b] || (I === void 0 && (I = 12), S = !0, b = "g"), (g || p === "0" && h === "=") && (g = !0, p = "0", h = "=");
    var C = x === "$" ? r : x === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", N = x === "$" ? o : /[%p]/.test(b) ? i : "", w = Ms[b], m = /[defgprs%]/.test(b);
    I = I === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function y(k) {
      var M = C, A = N, E, L, D;
      if (b === "c")
        A = w(k) + A, k = "";
      else {
        k = +k;
        var R = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? d : w(Math.abs(k), I), S && (k = Hu(k)), R && +k == 0 && v !== "+" && (R = !1), M = (R ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + M, A = (b === "s" ? Ts[8 + Ji / 3] : "") + A + (R && v === "(" ? ")" : ""), m) {
          for (E = -1, L = k.length; ++E < L; )
            if (D = k.charCodeAt(E), 48 > D || D > 57) {
              A = (D === 46 ? a + k.slice(E + 1) : k.slice(E)) + A, k = k.slice(0, E);
              break;
            }
        }
      }
      T && !g && (k = t(k, 1 / 0));
      var oe = M.length + k.length + A.length, G = oe < j ? new Array(j - oe + 1).join(p) : "";
      switch (T && g && (k = t(G + k, G.length ? j - A.length : 1 / 0), G = ""), h) {
        case "<":
          k = M + k + A + G;
          break;
        case "=":
          k = M + G + k + A;
          break;
        case "^":
          k = G.slice(0, oe = G.length >> 1) + M + k + A + G.slice(oe);
          break;
        default:
          k = G + M + k + A;
          break;
      }
      return s(k);
    }
    return y.toString = function() {
      return f + "";
    }, y;
  }
  function u(f, p) {
    var h = c((f = Mr(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor($n(p) / 3))) * 3, x = Math.pow(10, -v), g = Ts[8 + v / 3];
    return function(j) {
      return h(x * j) + g;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var mr, Xi, Ki;
Uu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Uu(e) {
  return mr = Ou(e), Xi = mr.format, Ki = mr.formatPrefix, mr;
}
function Wu(e) {
  return Math.max(0, -$n(Math.abs(e)));
}
function Gu(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor($n(t) / 3))) * 3 - $n(Math.abs(e)));
}
function Vu(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, $n(t) - $n(e)) + 1;
}
function Yu(e, t, r, o) {
  var a = Qo(e, t, r), s;
  switch (o = Mr(o ?? ",f"), o.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return o.precision == null && !isNaN(s = Gu(a, i)) && (o.precision = s), Ki(o, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(s = Vu(a, Math.max(Math.abs(e), Math.abs(t)))) && (o.precision = s - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(s = Wu(a)) && (o.precision = s - (o.type === "%") * 2);
      break;
    }
  }
  return Xi(o);
}
function Zu(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var o = t();
    return ou(o[0], o[o.length - 1], r ?? 10);
  }, e.tickFormat = function(r, o) {
    var a = t();
    return Yu(a[0], a[a.length - 1], r ?? 10, o);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var o = t(), a = 0, s = o.length - 1, i = o[a], l = o[s], d, c, u = 10;
    for (l < i && (c = i, i = l, l = c, c = a, a = s, s = c); u-- > 0; ) {
      if (c = Ko(i, l, r), c === d)
        return o[a] = i, o[s] = l, t(o);
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
function Ir() {
  var e = qi();
  return e.copy = function() {
    return Zi(e, Ir());
  }, xo.apply(e, arguments), Zu(e);
}
function qu(e, t) {
  e = e.slice();
  var r = 0, o = e.length - 1, a = e[r], s = e[o], i;
  return s < a && (i = r, r = o, o = i, i = a, a = s, s = i), e[r] = t.floor(a), e[o] = t.ceil(s), e;
}
const Eo = /* @__PURE__ */ new Date(), Po = /* @__PURE__ */ new Date();
function pt(e, t, r, o) {
  function a(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return a.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), a.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), a.round = (s) => {
    const i = a(s), l = a.ceil(s);
    return s - i < l - s ? i : l;
  }, a.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), a.range = (s, i, l) => {
    const d = [];
    if (s = a.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return d;
    let c;
    do
      d.push(c = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (c < s && s < i);
    return d;
  }, a.filter = (s) => pt((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (a.count = (s, i) => (Eo.setTime(+s), Po.setTime(+i), e(Eo), e(Po), Math.floor(r(Eo, Po))), a.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? a.filter(o ? (i) => o(i) % s === 0 : (i) => a.count(0, i) % s === 0) : a)), a;
}
const Dr = pt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Dr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? pt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Dr);
Dr.range;
const Zt = 1e3, Mt = Zt * 60, qt = Mt * 60, Xt = qt * 24, Ga = Xt * 7, Ls = Xt * 30, Fo = Xt * 365, Nn = pt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getUTCSeconds());
Nn.range;
const Va = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Zt);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getMinutes());
Va.range;
const Ju = pt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getUTCMinutes());
Ju.range;
const Ya = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Zt - e.getMinutes() * Mt);
}, (e, t) => {
  e.setTime(+e + t * qt);
}, (e, t) => (t - e) / qt, (e) => e.getHours());
Ya.range;
const Xu = pt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * qt);
}, (e, t) => (t - e) / qt, (e) => e.getUTCHours());
Xu.range;
const ar = pt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Mt) / Xt,
  (e) => e.getDate() - 1
);
ar.range;
const Za = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Xt, (e) => e.getUTCDate() - 1);
Za.range;
const Ku = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Xt, (e) => Math.floor(e / Xt));
Ku.range;
function yn(e) {
  return pt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Mt) / Ga);
}
const bo = yn(0), Tr = yn(1), Qu = yn(2), ef = yn(3), En = yn(4), tf = yn(5), nf = yn(6);
bo.range;
Tr.range;
Qu.range;
ef.range;
En.range;
tf.range;
nf.range;
function vn(e) {
  return pt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Ga);
}
const Qi = vn(0), Lr = vn(1), rf = vn(2), of = vn(3), Pn = vn(4), af = vn(5), sf = vn(6);
Qi.range;
Lr.range;
rf.range;
of.range;
Pn.range;
af.range;
sf.range;
const Kn = pt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Kn.range;
const lf = pt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
lf.range;
const Kt = pt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Kt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Kt.range;
const xn = pt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
xn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
xn.range;
function cf(e, t, r, o, a, s) {
  const i = [
    [Nn, 1, Zt],
    [Nn, 5, 5 * Zt],
    [Nn, 15, 15 * Zt],
    [Nn, 30, 30 * Zt],
    [s, 1, Mt],
    [s, 5, 5 * Mt],
    [s, 15, 15 * Mt],
    [s, 30, 30 * Mt],
    [a, 1, qt],
    [a, 3, 3 * qt],
    [a, 6, 6 * qt],
    [a, 12, 12 * qt],
    [o, 1, Xt],
    [o, 2, 2 * Xt],
    [r, 1, Ga],
    [t, 1, Ls],
    [t, 3, 3 * Ls],
    [e, 1, Fo]
  ];
  function l(c, u, f) {
    const p = u < c;
    p && ([c, u] = [u, c]);
    const h = f && typeof f.range == "function" ? f : d(c, u, f), v = h ? h.range(c, +u + 1) : [];
    return p ? v.reverse() : v;
  }
  function d(c, u, f) {
    const p = Math.abs(u - c) / f, h = Ha(([, , g]) => g).right(i, p);
    if (h === i.length) return e.every(Qo(c / Fo, u / Fo, f));
    if (h === 0) return Dr.every(Math.max(Qo(c, u, f), 1));
    const [v, x] = i[p / i[h - 1][2] < i[h][2] / p ? h - 1 : h];
    return v.every(x);
  }
  return [l, d];
}
const [df, uf] = cf(Kt, Kn, bo, ar, Ya, Va);
function Ro(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Bo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function zn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function ff(e) {
  var t = e.dateTime, r = e.date, o = e.time, a = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = On(a), u = Un(a), f = On(s), p = Un(s), h = On(i), v = Un(i), x = On(l), g = Un(l), j = On(d), T = Un(d), I = {
    a: R,
    A: oe,
    b: G,
    B,
    c: null,
    d: Rs,
    e: Rs,
    f: Ef,
    g: Gf,
    G: Yf,
    H: Lf,
    I: Af,
    j: $f,
    L: el,
    m: Pf,
    M: Ff,
    p: Q,
    q: W,
    Q: zs,
    s: Os,
    S: Rf,
    u: Bf,
    U: Hf,
    V: zf,
    w: Of,
    W: Uf,
    x: null,
    X: null,
    y: Wf,
    Y: Vf,
    Z: Zf,
    "%": Hs
  }, S = {
    a: K,
    A: q,
    b: J,
    B: le,
    c: null,
    d: Bs,
    e: Bs,
    f: Kf,
    g: lp,
    G: dp,
    H: qf,
    I: Jf,
    j: Xf,
    L: nl,
    m: Qf,
    M: ep,
    p: ee,
    q: te,
    Q: zs,
    s: Os,
    S: tp,
    u: np,
    U: rp,
    V: op,
    w: ap,
    W: sp,
    x: null,
    X: null,
    y: ip,
    Y: cp,
    Z: up,
    "%": Hs
  }, b = {
    a: y,
    A: k,
    b: M,
    B: A,
    c: E,
    d: Ps,
    e: Ps,
    f: Mf,
    g: Es,
    G: $s,
    H: Fs,
    I: Fs,
    j: kf,
    L: jf,
    m: _f,
    M: Cf,
    p: m,
    q: Sf,
    Q: Df,
    s: Tf,
    S: Nf,
    u: xf,
    U: bf,
    V: yf,
    w: gf,
    W: vf,
    x: L,
    X: D,
    y: Es,
    Y: $s,
    Z: wf,
    "%": If
  };
  I.x = C(r, I), I.X = C(o, I), I.c = C(t, I), S.x = C(r, S), S.X = C(o, S), S.c = C(t, S);
  function C(Z, ne) {
    return function(fe) {
      var U = [], ie = -1, ae = 0, pe = Z.length, ce, me, Ee;
      for (fe instanceof Date || (fe = /* @__PURE__ */ new Date(+fe)); ++ie < pe; )
        Z.charCodeAt(ie) === 37 && (U.push(Z.slice(ae, ie)), (me = As[ce = Z.charAt(++ie)]) != null ? ce = Z.charAt(++ie) : me = ce === "e" ? " " : "0", (Ee = ne[ce]) && (ce = Ee(fe, me)), U.push(ce), ae = ie + 1);
      return U.push(Z.slice(ae, ie)), U.join("");
    };
  }
  function N(Z, ne) {
    return function(fe) {
      var U = zn(1900, void 0, 1), ie = w(U, Z, fe += "", 0), ae, pe;
      if (ie != fe.length) return null;
      if ("Q" in U) return new Date(U.Q);
      if ("s" in U) return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (ne && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53) return null;
        "w" in U || (U.w = 1), "Z" in U ? (ae = Bo(zn(U.y, 0, 1)), pe = ae.getUTCDay(), ae = pe > 4 || pe === 0 ? Lr.ceil(ae) : Lr(ae), ae = Za.offset(ae, (U.V - 1) * 7), U.y = ae.getUTCFullYear(), U.m = ae.getUTCMonth(), U.d = ae.getUTCDate() + (U.w + 6) % 7) : (ae = Ro(zn(U.y, 0, 1)), pe = ae.getDay(), ae = pe > 4 || pe === 0 ? Tr.ceil(ae) : Tr(ae), ae = ar.offset(ae, (U.V - 1) * 7), U.y = ae.getFullYear(), U.m = ae.getMonth(), U.d = ae.getDate() + (U.w + 6) % 7);
      } else ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), pe = "Z" in U ? Bo(zn(U.y, 0, 1)).getUTCDay() : Ro(zn(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (pe + 5) % 7 : U.w + U.U * 7 - (pe + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Bo(U)) : Ro(U);
    };
  }
  function w(Z, ne, fe, U) {
    for (var ie = 0, ae = ne.length, pe = fe.length, ce, me; ie < ae; ) {
      if (U >= pe) return -1;
      if (ce = ne.charCodeAt(ie++), ce === 37) {
        if (ce = ne.charAt(ie++), me = b[ce in As ? ne.charAt(ie++) : ce], !me || (U = me(Z, fe, U)) < 0) return -1;
      } else if (ce != fe.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function m(Z, ne, fe) {
    var U = c.exec(ne.slice(fe));
    return U ? (Z.p = u.get(U[0].toLowerCase()), fe + U[0].length) : -1;
  }
  function y(Z, ne, fe) {
    var U = h.exec(ne.slice(fe));
    return U ? (Z.w = v.get(U[0].toLowerCase()), fe + U[0].length) : -1;
  }
  function k(Z, ne, fe) {
    var U = f.exec(ne.slice(fe));
    return U ? (Z.w = p.get(U[0].toLowerCase()), fe + U[0].length) : -1;
  }
  function M(Z, ne, fe) {
    var U = j.exec(ne.slice(fe));
    return U ? (Z.m = T.get(U[0].toLowerCase()), fe + U[0].length) : -1;
  }
  function A(Z, ne, fe) {
    var U = x.exec(ne.slice(fe));
    return U ? (Z.m = g.get(U[0].toLowerCase()), fe + U[0].length) : -1;
  }
  function E(Z, ne, fe) {
    return w(Z, t, ne, fe);
  }
  function L(Z, ne, fe) {
    return w(Z, r, ne, fe);
  }
  function D(Z, ne, fe) {
    return w(Z, o, ne, fe);
  }
  function R(Z) {
    return i[Z.getDay()];
  }
  function oe(Z) {
    return s[Z.getDay()];
  }
  function G(Z) {
    return d[Z.getMonth()];
  }
  function B(Z) {
    return l[Z.getMonth()];
  }
  function Q(Z) {
    return a[+(Z.getHours() >= 12)];
  }
  function W(Z) {
    return 1 + ~~(Z.getMonth() / 3);
  }
  function K(Z) {
    return i[Z.getUTCDay()];
  }
  function q(Z) {
    return s[Z.getUTCDay()];
  }
  function J(Z) {
    return d[Z.getUTCMonth()];
  }
  function le(Z) {
    return l[Z.getUTCMonth()];
  }
  function ee(Z) {
    return a[+(Z.getUTCHours() >= 12)];
  }
  function te(Z) {
    return 1 + ~~(Z.getUTCMonth() / 3);
  }
  return {
    format: function(Z) {
      var ne = C(Z += "", I);
      return ne.toString = function() {
        return Z;
      }, ne;
    },
    parse: function(Z) {
      var ne = N(Z += "", !1);
      return ne.toString = function() {
        return Z;
      }, ne;
    },
    utcFormat: function(Z) {
      var ne = C(Z += "", S);
      return ne.toString = function() {
        return Z;
      }, ne;
    },
    utcParse: function(Z) {
      var ne = N(Z += "", !0);
      return ne.toString = function() {
        return Z;
      }, ne;
    }
  };
}
var As = { "-": "", _: " ", 0: "0" }, mt = /^\s*\d+/, pf = /^%/, hf = /[\\^$*+?|[\]().{}]/g;
function Qe(e, t, r) {
  var o = e < 0 ? "-" : "", a = (o ? -e : e) + "", s = a.length;
  return o + (s < r ? new Array(r - s + 1).join(t) + a : a);
}
function mf(e) {
  return e.replace(hf, "\\$&");
}
function On(e) {
  return new RegExp("^(?:" + e.map(mf).join("|") + ")", "i");
}
function Un(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function gf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 1));
  return o ? (e.w = +o[0], r + o[0].length) : -1;
}
function xf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 1));
  return o ? (e.u = +o[0], r + o[0].length) : -1;
}
function bf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.U = +o[0], r + o[0].length) : -1;
}
function yf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.V = +o[0], r + o[0].length) : -1;
}
function vf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.W = +o[0], r + o[0].length) : -1;
}
function $s(e, t, r) {
  var o = mt.exec(t.slice(r, r + 4));
  return o ? (e.y = +o[0], r + o[0].length) : -1;
}
function Es(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), r + o[0].length) : -1;
}
function wf(e, t, r) {
  var o = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return o ? (e.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), r + o[0].length) : -1;
}
function Sf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 1));
  return o ? (e.q = o[0] * 3 - 3, r + o[0].length) : -1;
}
function _f(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.m = o[0] - 1, r + o[0].length) : -1;
}
function Ps(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.d = +o[0], r + o[0].length) : -1;
}
function kf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 3));
  return o ? (e.m = 0, e.d = +o[0], r + o[0].length) : -1;
}
function Fs(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.H = +o[0], r + o[0].length) : -1;
}
function Cf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.M = +o[0], r + o[0].length) : -1;
}
function Nf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 2));
  return o ? (e.S = +o[0], r + o[0].length) : -1;
}
function jf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 3));
  return o ? (e.L = +o[0], r + o[0].length) : -1;
}
function Mf(e, t, r) {
  var o = mt.exec(t.slice(r, r + 6));
  return o ? (e.L = Math.floor(o[0] / 1e3), r + o[0].length) : -1;
}
function If(e, t, r) {
  var o = pf.exec(t.slice(r, r + 1));
  return o ? r + o[0].length : -1;
}
function Df(e, t, r) {
  var o = mt.exec(t.slice(r));
  return o ? (e.Q = +o[0], r + o[0].length) : -1;
}
function Tf(e, t, r) {
  var o = mt.exec(t.slice(r));
  return o ? (e.s = +o[0], r + o[0].length) : -1;
}
function Rs(e, t) {
  return Qe(e.getDate(), t, 2);
}
function Lf(e, t) {
  return Qe(e.getHours(), t, 2);
}
function Af(e, t) {
  return Qe(e.getHours() % 12 || 12, t, 2);
}
function $f(e, t) {
  return Qe(1 + ar.count(Kt(e), e), t, 3);
}
function el(e, t) {
  return Qe(e.getMilliseconds(), t, 3);
}
function Ef(e, t) {
  return el(e, t) + "000";
}
function Pf(e, t) {
  return Qe(e.getMonth() + 1, t, 2);
}
function Ff(e, t) {
  return Qe(e.getMinutes(), t, 2);
}
function Rf(e, t) {
  return Qe(e.getSeconds(), t, 2);
}
function Bf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Hf(e, t) {
  return Qe(bo.count(Kt(e) - 1, e), t, 2);
}
function tl(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? En(e) : En.ceil(e);
}
function zf(e, t) {
  return e = tl(e), Qe(En.count(Kt(e), e) + (Kt(e).getDay() === 4), t, 2);
}
function Of(e) {
  return e.getDay();
}
function Uf(e, t) {
  return Qe(Tr.count(Kt(e) - 1, e), t, 2);
}
function Wf(e, t) {
  return Qe(e.getFullYear() % 100, t, 2);
}
function Gf(e, t) {
  return e = tl(e), Qe(e.getFullYear() % 100, t, 2);
}
function Vf(e, t) {
  return Qe(e.getFullYear() % 1e4, t, 4);
}
function Yf(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? En(e) : En.ceil(e), Qe(e.getFullYear() % 1e4, t, 4);
}
function Zf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Qe(t / 60 | 0, "0", 2) + Qe(t % 60, "0", 2);
}
function Bs(e, t) {
  return Qe(e.getUTCDate(), t, 2);
}
function qf(e, t) {
  return Qe(e.getUTCHours(), t, 2);
}
function Jf(e, t) {
  return Qe(e.getUTCHours() % 12 || 12, t, 2);
}
function Xf(e, t) {
  return Qe(1 + Za.count(xn(e), e), t, 3);
}
function nl(e, t) {
  return Qe(e.getUTCMilliseconds(), t, 3);
}
function Kf(e, t) {
  return nl(e, t) + "000";
}
function Qf(e, t) {
  return Qe(e.getUTCMonth() + 1, t, 2);
}
function ep(e, t) {
  return Qe(e.getUTCMinutes(), t, 2);
}
function tp(e, t) {
  return Qe(e.getUTCSeconds(), t, 2);
}
function np(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function rp(e, t) {
  return Qe(Qi.count(xn(e) - 1, e), t, 2);
}
function rl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Pn(e) : Pn.ceil(e);
}
function op(e, t) {
  return e = rl(e), Qe(Pn.count(xn(e), e) + (xn(e).getUTCDay() === 4), t, 2);
}
function ap(e) {
  return e.getUTCDay();
}
function sp(e, t) {
  return Qe(Lr.count(xn(e) - 1, e), t, 2);
}
function ip(e, t) {
  return Qe(e.getUTCFullYear() % 100, t, 2);
}
function lp(e, t) {
  return e = rl(e), Qe(e.getUTCFullYear() % 100, t, 2);
}
function cp(e, t) {
  return Qe(e.getUTCFullYear() % 1e4, t, 4);
}
function dp(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Pn(e) : Pn.ceil(e), Qe(e.getUTCFullYear() % 1e4, t, 4);
}
function up() {
  return "+0000";
}
function Hs() {
  return "%";
}
function zs(e) {
  return +e;
}
function Os(e) {
  return Math.floor(+e / 1e3);
}
var _n, ol;
fp({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function fp(e) {
  return _n = ff(e), ol = _n.format, _n.parse, _n.utcFormat, _n.utcParse, _n;
}
function pp(e) {
  return new Date(e);
}
function hp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function al(e, t, r, o, a, s, i, l, d, c) {
  var u = qi(), f = u.invert, p = u.domain, h = c(".%L"), v = c(":%S"), x = c("%I:%M"), g = c("%I %p"), j = c("%a %d"), T = c("%b %d"), I = c("%B"), S = c("%Y");
  function b(C) {
    return (d(C) < C ? h : l(C) < C ? v : i(C) < C ? x : s(C) < C ? g : o(C) < C ? a(C) < C ? j : T : r(C) < C ? I : S)(C);
  }
  return u.invert = function(C) {
    return new Date(f(C));
  }, u.domain = function(C) {
    return arguments.length ? p(Array.from(C, hp)) : p().map(pp);
  }, u.ticks = function(C) {
    var N = p();
    return e(N[0], N[N.length - 1], C ?? 10);
  }, u.tickFormat = function(C, N) {
    return N == null ? b : c(N);
  }, u.nice = function(C) {
    var N = p();
    return (!C || typeof C.range != "function") && (C = t(N[0], N[N.length - 1], C ?? 10)), C ? p(qu(N, C)) : u;
  }, u.copy = function() {
    return Zi(u, al(e, t, r, o, a, s, i, l, d, c));
  }, u;
}
function qa() {
  return xo.apply(al(df, uf, Kt, Kn, bo, ar, Ya, Va, Nn, ol).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function mp({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: o,
  isSelected: a = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": d
}) {
  const c = Ge(null), [u, f] = Oe(!1), [p, h] = Oe(!1), v = t(e.start), x = t(e.end), g = Math.max(x - v, 20), j = () => {
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
  }, T = e.progress ? g * e.progress / 100 : 0, I = () => {
    r?.(e);
  }, S = () => {
    o?.(e);
  }, b = (M) => {
    M.key === "Enter" ? (M.preventDefault(), I()) : M.key === " " && (M.preventDefault(), S());
  }, C = () => {
    f(!0);
  }, N = () => {
    f(!1);
  }, w = () => {
    h(!0), l?.();
  }, m = () => {
    h(!1);
  }, y = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (p || a) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    a && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${v}px`,
    "--task-width": `${g}px`,
    "--task-color": j(),
    left: `${v}px`,
    width: `${g}px`,
    backgroundColor: j()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: y,
      style: k,
      onClick: I,
      onDoubleClick: S,
      onKeyDown: b,
      onMouseDown: C,
      onMouseUp: N,
      onFocus: w,
      onBlur: m,
      "aria-label": d || `${a ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${T}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function gp({ viewStart: e, viewEnd: t, dateCount: r }) {
  const o = [];
  for (let h = e.getTime(); h <= t.getTime(); h += 864e5)
    o.push(new Date(h));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Oe(-1), d = Ge(null), c = (h) => {
    if (h.key === "ArrowLeft") {
      h.preventDefault();
      const v = Math.max(0, i === -1 ? 0 : i - 1);
      l(v), p(v);
    } else if (h.key === "ArrowRight") {
      h.preventDefault();
      const v = Math.min(o.length - 1, i === -1 ? 0 : i + 1);
      l(v), p(v);
    } else if (h.key === "ArrowDown")
      h.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (h.key === "Home")
      h.preventDefault(), l(0), p(0);
    else if (h.key === "End") {
      h.preventDefault();
      const v = o.length - 1;
      l(v), p(v);
    }
  }, u = (h) => {
    if (h.key === "ArrowDown")
      h.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (h.key === "ArrowRight") {
      h.preventDefault();
      const v = d.current;
      v && v.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (h) => {
    const v = d.current?.querySelector(`[data-date-index="${h}"]`);
    v && v.focus();
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
            onKeyDown: u,
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
            onFocus: f,
            children: o.map((h, v) => {
              const x = h.getTime() === s.getTime(), g = i === v;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": v,
                  className: `date-column ${x ? "today" : ""} ${g ? "focused" : ""}`,
                  tabIndex: g ? 0 : -1,
                  role: "button",
                  "aria-label": `${h.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${x ? " (Today)" : ""}`,
                  onFocus: () => l(v),
                  onKeyDown: c,
                  children: h.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                v
              );
            })
          }
        )
      ]
    }
  );
}
function xp({ resource: e, tasks: t, scale: r, onTaskClick: o, onTaskDoubleClick: a, rowIndex: s, dateCount: i }) {
  const [l, d] = Oe(!1), [c, u] = Oe(-1), f = Ge(null);
  Xe(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const p = (x) => {
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
          x.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          x.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowLeft":
          x.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (x.preventDefault(), d(!0), u(0));
          break;
      }
      return;
    }
    switch (x.key) {
      case "ArrowLeft":
        x.preventDefault();
        const g = Math.max(0, c - 1);
        u(g), f.current?.querySelector(`[data-task-index="${g}"]`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault();
        const T = Math.min(t.length - 1, c + 1);
        u(T), f.current?.querySelector(`[data-task-index="${T}"]`)?.focus();
        break;
      case "Enter":
        x.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case " ":
        x.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case "Escape":
        x.preventDefault(), d(!1), u(-1), f.current?.focus();
        break;
    }
  }, h = (x) => {
    switch (x.key) {
      case "ArrowUp":
        x.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        x.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault(), f.current?.focus();
        break;
    }
  }, v = (x) => {
    l && u(x);
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
            onKeyDown: h,
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
            onKeyDown: p,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((x, g) => /* @__PURE__ */ n.jsx(
              mp,
              {
                task: x,
                scale: r,
                onTaskClick: o,
                onTaskDoubleClick: a,
                isSelected: l && c === g,
                taskIndex: g,
                tabIndex: l && c === g ? 0 : -1,
                onFocus: () => v(g)
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
function Ty({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: o,
  onTaskClick: a,
  onTaskDoubleClick: s
}) {
  const i = Ge(null), [l, d] = Oe(800), c = Fe(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const x = new Date(r);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [r]), u = Fe(() => {
    if (o instanceof Date)
      return isNaN(o.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : o;
    const x = new Date(o);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [o]), f = Fe(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  Xe(() => {
    if (!i.current || typeof window > "u") return;
    const x = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!x) return;
    const g = new x((j) => {
      const T = j[0];
      T && d(Math.max(T.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const p = Fe(
    () => qa().domain([c, u]).range([0, l]),
    [c, u, l]
  ), h = Fe(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((g) => {
      const j = x.get(g.resourceId) || [];
      j.push(g), x.set(g.resourceId, j);
    }), x;
  }, [t]), v = (x) => {
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
      onKeyDown: v,
      children: [
        /* @__PURE__ */ n.jsx(gp, { viewStart: c, viewEnd: u, dateCount: f }),
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
            children: e.map((x, g) => /* @__PURE__ */ n.jsx(
              xp,
              {
                resource: x,
                tasks: h.get(x.id) || [],
                scale: p,
                onTaskClick: a,
                onTaskDoubleClick: s,
                rowIndex: g,
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
const Ar = ({
  children: e,
  href: t,
  active: r = !1,
  attributes: o = {}
}) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", children: r ? /* @__PURE__ */ n.jsx(
  "span",
  {
    className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
    "aria-current": "page",
    ...o,
    children: e
  }
) : /* @__PURE__ */ n.jsx(
  "a",
  {
    className: "nhsuk-breadcrumb__link",
    href: t,
    ...o,
    children: e
  }
) }), bp = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: o = "Breadcrumb",
  href: a,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? et.Children.toArray(t).filter(
    (g) => et.isValidElement(g) && (g.type === Ar || g.type?.displayName === "BreadcrumbItem")
  ).map((g) => ({
    text: typeof g.props.children == "string" ? g.props.children : String(g.props.children),
    href: g.props.href,
    active: g.props.active,
    attributes: g.props.attributes
  })) : [], c = () => t ? d() : a && s ? [{ href: a, text: s }] : e, u = () => {
    const x = c();
    if (x && x.length > 0) {
      const g = x.slice().reverse().find((j) => j.href && !j.active);
      if (g)
        return { href: g.href, text: g.text };
    }
    return { text: "Home" };
  }, f = c(), p = u(), h = Se(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), v = o;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: h,
      "aria-label": v,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          et.Children.map(t, (x, g) => et.isValidElement(x) && (x.type === Ar || x.type?.displayName === "BreadcrumbItem") ? et.cloneElement(x, { key: g }) : null)
        ) : (
          // Render from items array
          f?.filter((x) => x.active || !!x.href).map((x, g) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: x.active ? /* @__PURE__ */ n.jsx(
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
          ) }, g))
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
}, sl = bp;
sl.Item = Ar;
Ar.displayName = "BreadcrumbItem";
const il = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: o = {}
}) => {
  const [a, s] = Oe(!1);
  Xe(() => {
    s(!0);
  }, []), Xe(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, u = c.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(u) : null;
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const p = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = p;
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
            const u = c.__nhsSkipLinkTimeout;
            u && window.clearTimeout && window.clearTimeout(u);
          });
        } catch (c) {
          console.warn("SkipLink cleanup error:", c);
        }
      };
    } catch (d) {
      return console.warn("SkipLink initialization error:", d), () => {
      };
    }
  }, [a]);
  const i = Se("nhsuk-skip-link", r);
  return /* @__PURE__ */ n.jsx(
    "a",
    {
      className: i,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": a ? "true" : "false",
      ...o,
      children: e
    }
  );
}, Ly = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: o,
  classes: a,
  attributes: s = {}
}) => {
  const i = Se("nhsuk-pagination", a);
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
        r && o && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-pagination-item--next", children: /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: r, children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-pagination__title", children: "Next" }),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-pagination__page", children: o }),
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
}, Ay = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: o = {}
}) => {
  const a = Se("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
      className: a,
      role: "navigation",
      "aria-label": r,
      ...o,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => s(i, l)) })
      ]
    }
  );
}, ll = et.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: o = 2,
  headingClasses: a,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: d,
  imgAlt: c,
  ...u
}, f) => {
  const p = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), h = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    a
  ].filter(Boolean).join(" "), x = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const T = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Jt,
      {
        level: o,
        className: v,
        children: T()
      }
    );
  }, g = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, j = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ...u,
      className: p,
      ref: f,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: h, children: [
          x(),
          g(),
          j()
        ] })
      ]
    }
  );
});
ll.displayName = "Card";
const $y = ({
  className: e,
  children: t,
  "data-testid": r,
  id: o
}) => {
  const a = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: a,
      "data-testid": r,
      id: o,
      children: t
    }
  );
}, Ey = ({
  className: e,
  children: t,
  "data-testid": r
}) => {
  const o = ["nhsuk-card-group__item", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "li",
    {
      className: o,
      "data-testid": r,
      children: t
    }
  );
}, Py = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: o = 3,
  headingClasses: a,
  description: s,
  descriptionHtml: i,
  className: l,
  children: d,
  "data-testid": c,
  id: u,
  "aria-label": f,
  "aria-labelledby": p,
  "aria-describedby": h
}) => {
  const v = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), x = [
    "nhsuk-care-card__heading",
    a
  ].filter(Boolean).join(" "), g = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const T = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], I = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        T,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Jt,
      {
        level: o,
        className: x,
        children: I
      }
    );
  }, j = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: v,
      "data-testid": c,
      id: u,
      "aria-label": f,
      "aria-labelledby": p,
      "aria-describedby": h,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          g(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: j() })
      ]
    }
  );
}, yp = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: o,
  headingLevel: a = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...d
}) => {
  const c = Se(
    "nhsuk-panel",
    t
  ), u = () => !r && !o && !l ? null : o ? /* @__PURE__ */ n.jsx(
    Jt,
    {
      level: a,
      className: "nhsuk-panel__heading",
      html: o,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Jt,
    {
      level: a,
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
  ) : s ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...d, children: [
    u(),
    f()
  ] });
}, Fy = ({
  text: e,
  html: t,
  children: r,
  className: o,
  ...a
}) => {
  const s = Se("nhsuk-inset-text", o), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...a, children: i() });
}, Ry = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...o
}) => {
  const a = Se(
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
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: a, ...o, children: e.map((l, d) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, d)) }) });
}, Wn = { current: null }, vp = () => {
  if (Wn.current) return Wn.current;
  try {
    Wn.current = require("prismjs");
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
    Wn.current = null;
  }
  return Wn.current;
}, wp = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let r = e;
  return t.forEach((o) => {
    r = r.replace(o.regex, (a) => `<span class="nhsuk-code-${o.cls}">${a}</span>`);
  }), r;
}, $r = (e, t, r) => {
  if (r || !t) return e;
  const o = vp();
  if (o && o.languages) {
    const a = o.languages[t] ? t : o.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : o.languages.json && t === "json" ? "json" : void 0;
    if (a)
      try {
        return o.highlight(e, o.languages[a], a);
      } catch {
      }
  }
  return wp(e);
}, Sp = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: o,
  firstCellIsHeader: a = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: d = !1,
  panelClasses: c,
  tableClasses: u,
  classes: f,
  attributes: p,
  "data-testid": h,
  columns: v,
  data: x,
  visuallyHiddenCaption: g = !1
}) => {
  const j = `nhsuk-table__caption ${o ? `nhsuk-table__caption--${o}` : ""}`.trim(), T = Se(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), I = Se(f), S = (m, y) => {
    const k = Se(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${m.format}`]: m.format
      },
      m.classes
    ), M = {
      scope: "col",
      ...m.colspan && { colSpan: m.colspan },
      ...m.rowspan && { rowSpan: m.rowspan },
      ...s && { role: "columnheader" },
      ...m.attributes
    };
    let A;
    if (m.node != null)
      A = /* @__PURE__ */ n.jsx(n.Fragment, { children: m.node });
    else if (m.html)
      A = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } });
    else if (m.code != null) {
      const E = Array.isArray(m.code), L = E ? m.code.join(`
`) : m.code, D = E || L.includes(`
`), R = {
        className: Se("nhsuk-table__code", m.codeClassName, {
          "nhsuk-table__code--block": D,
          "nhsuk-table__code--inline": !D
        }),
        ...m.codeLanguage ? { "data-language": m.codeLanguage } : {}
      }, oe = $r(L, m.codeLanguage);
      A = D ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...R,
          dangerouslySetInnerHTML: { __html: oe }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...R,
          dangerouslySetInnerHTML: { __html: oe }
        }
      );
    } else
      A = m.text;
    return /* @__PURE__ */ n.jsx("th", { className: k, ...M, children: A }, y);
  }, b = (m, y, k) => {
    const M = a && k || m.rowHeader, A = Se(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${m.format}`]: m.format
      },
      m.classes
    ), E = {
      ...M && { scope: "row" },
      ...m.colspan && { colSpan: m.colspan },
      ...m.rowspan && { rowSpan: m.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...m.header && { "data-label": m.header }
      },
      ...m.attributes
    };
    let L;
    if (m.node != null)
      L = /* @__PURE__ */ n.jsx(n.Fragment, { children: m.node });
    else if (m.html)
      L = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } });
    else if (m.code != null) {
      const oe = Array.isArray(m.code), G = oe ? m.code.join(`
`) : m.code, B = oe || G.includes(`
`), Q = {
        className: Se("nhsuk-table__code", m.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...m.codeLanguage ? { "data-language": m.codeLanguage } : {}
      }, W = $r(
        G,
        m.codeLanguage,
        m.disableHighlight
      );
      L = B ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...Q,
          dangerouslySetInnerHTML: { __html: W }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...Q,
          dangerouslySetInnerHTML: { __html: W }
        }
      );
    } else
      L = m.text;
    const D = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && m.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        m.header,
        " "
      ] }),
      L
    ] }), R = M ? "th" : "td";
    return /* @__PURE__ */ n.jsx(R, { className: A, ...E, children: D }, y);
  };
  let C = t, N = e;
  !C && v && v.length && (C = v.map((m) => ({
    text: m.title,
    format: m.format,
    classes: m.headerClasses,
    attributes: m.headerAttributes
  }))), !N && v && x && x.length && (N = x.map((m, y) => v.map((k) => {
    const M = k.accessor ? k.accessor(m, y) : m[k.key];
    let A = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (A.rowHeader = !0), k.render) {
      const E = k.render(M, m, y, k);
      return E == null || typeof E == "boolean" ? { ...A, text: "" } : typeof E == "string" || typeof E == "number" ? { ...A, text: String(E) } : { ...A, ...E };
    }
    return { ...A, text: M != null ? String(M) : "" };
  })));
  const w = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: T,
      ...s && { role: "table" },
      ...p,
      ...h && { "data-testid": h },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: Se(j, g && "nhsuk-u-visually-hidden"), children: r }),
        C && C.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: C.map(
              (m, y) => S(m, y)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: N && N.map((m, y) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: m.map(
              (k, M) => b(k, M, M === 0)
            )
          },
          y
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(yp, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(Jt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    w()
  ] }) : I ? /* @__PURE__ */ n.jsx("div", { className: I, children: w() }) : w();
}, _p = ({
  children: e,
  size: t,
  className: r
}) => {
  const o = Se(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    r
  );
  return /* @__PURE__ */ n.jsx("caption", { className: o, children: e });
}, cl = ({
  responsive: e,
  className: t,
  children: r,
  ...o
}) => {
  const a = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...a, ...o, children: r });
}, dl = ({
  text: e,
  html: t,
  node: r,
  code: o,
  codeLanguage: a,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: d,
  colspan: c,
  rowspan: u,
  attributes: f,
  responsive: p,
  as: h = "th"
}) => {
  const v = Se(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    d
  ), x = {
    scope: "col",
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...p && { role: "columnheader" },
    ...f
  };
  let g;
  if (r != null) g = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) g = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (o != null) {
    const T = Array.isArray(o), I = T ? o.join(`
`) : o, S = T || I.includes(`
`), b = {
      className: Se("nhsuk-table__code", s, {
        "nhsuk-table__code--block": S,
        "nhsuk-table__code--inline": !S
      }),
      ...a ? { "data-language": a } : {}
    }, C = $r(
      I,
      a,
      i
    );
    g = S ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...b,
        dangerouslySetInnerHTML: { __html: C }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: C } });
  } else g = e;
  const j = h;
  return /* @__PURE__ */ n.jsx(j, { className: v, ...x, children: g });
}, kp = ({
  text: e,
  html: t,
  node: r,
  code: o,
  codeLanguage: a,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: d,
  colspan: c,
  rowspan: u,
  attributes: f,
  responsive: p,
  rowHeader: h
}) => {
  const v = !!h, x = v ? "th" : "td", g = Se(
    v ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${v ? "header" : "cell"}--${l}`,
    d
  ), j = {
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...v && { scope: "row" },
    ...p && { role: v ? "rowheader" : "cell" },
    ...f
  };
  let T;
  if (r != null) T = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) T = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (o != null) {
    const I = Array.isArray(o), S = I ? o.join(`
`) : o, b = I || S.includes(`
`), C = {
      className: Se("nhsuk-table__code", s, {
        "nhsuk-table__code--block": b,
        "nhsuk-table__code--inline": !b
      }),
      ...a ? { "data-language": a } : {}
    }, N = $r(S, a, i);
    T = b ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...C, dangerouslySetInnerHTML: { __html: N } }) }) : /* @__PURE__ */ n.jsx("code", { ...C, dangerouslySetInnerHTML: { __html: N } });
  } else T = e;
  return /* @__PURE__ */ n.jsx(x, { className: g, ...j, children: T });
}, Qt = Sp;
Qt.Caption = _p;
Qt.BodyRow = cl;
Qt.HeaderCell = dl;
Qt.Cell = kp;
let Us = !1, Ws = !1;
Object.defineProperty(Qt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Us && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Us = !0), cl;
  }
});
Object.defineProperty(Qt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Ws && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Ws = !0), dl;
  }
});
const By = Rn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: o,
  onTabFocus: a,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: d,
  id: c,
  "data-testid": u,
  ...f
}, p) => {
  const h = r !== void 0, [v, x] = Oe(() => t || e[0]?.id || ""), g = h ? r : v, j = Ge(null), T = Ge(/* @__PURE__ */ new Map()), I = xe((y) => {
    h || x(y), o?.(y);
  }, [h, o]), S = xe((y) => {
    a?.(y), l && I(y);
  }, [a, l, I]), b = xe((y, k) => {
    const M = e.filter((L) => !L.disabled).map((L) => L.id), A = M.indexOf(k);
    let E = null;
    switch (y.key) {
      case "ArrowLeft":
        E = A > 0 ? A - 1 : M.length - 1;
        break;
      case "ArrowRight":
        E = A < M.length - 1 ? A + 1 : 0;
        break;
      case "Home":
        E = 0;
        break;
      case "End":
        E = M.length - 1;
        break;
      case "Escape":
        y.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (E !== null) {
      y.preventDefault();
      const L = M[E], D = T.current.get(L);
      D && (D.focus(), S(L));
    }
  }, [e, S, i]), C = xe((y, k) => {
    k ? T.current.set(y, k) : T.current.delete(y);
  }, []), N = xe((y) => {
    const k = T.current.get(y);
    k && k.focus();
  }, []);
  Ni(p, () => ({
    focusTab: N,
    getActiveTab: () => g,
    getTabListElement: () => j.current
  }), [N, g]);
  const w = xe((y) => {
    const k = y.relatedTarget;
    j.current?.contains(k) || s?.();
  }, [s]), m = Se("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: m,
      id: c,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: j,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: w,
                children: e.map((y) => {
                  const k = y.id === g, M = y.disabled, A = Se("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": M
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: A, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (E) => C(y.id, E),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${y.id}-panel`,
                      id: `${y.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: M,
                      onClick: () => !M && I(y.id),
                      onKeyDown: (E) => !M && b(E, y.id),
                      onFocus: () => !M && S(y.id),
                      ...y.attributes,
                      children: y.label
                    }
                  ) }, y.id);
                })
              }
            )
          }
        ),
        e.map((y) => {
          const k = y.id === g;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${y.id}-tab`,
              id: `${y.id}-panel`,
              hidden: !k,
              children: y.content
            },
            y.id
          );
        })
      ]
    }
  );
}), Cp = Rn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: o,
    open: a = !1,
    className: s = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const u = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let p;
    return l ? p = l : o ? p = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r && (p = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: a,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
Cp.displayName = "Details";
const Np = Rn(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: o = !1,
    headingLevel: a = 3,
    className: s,
    ...i
  }, l) => {
    const d = ["nhsuk-do-dont-list"];
    s && d.push(s);
    const c = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], u = () => t === "cross" ? /* @__PURE__ */ n.jsxs(
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
    ), f = (h) => t === "cross" && !o ? `do not ${h}` : h, p = () => /* @__PURE__ */ n.jsx(
      Jt,
      {
        level: a,
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
          p(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((h, v) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(h.item)
          ] }, v)) }) })
        ]
      }
    );
  }
);
Np.displayName = "DoDontList";
const jp = Rn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: o,
    open: a = !1,
    className: s = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const u = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let p;
    return l ? p = l : o ? p = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r && (p = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: a,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
jp.displayName = "Expander";
const Mp = Rn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...o }, a) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, f = `${t}-${c}-status`, p = !!l.href, h = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), v = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Ip,
        {
          item: l,
          itemClasses: h,
          hasLink: p,
          hintId: u,
          statusId: f,
          ariaDescribedBy: v
        },
        d
      );
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: a,
        className: s,
        ...o,
        children: e.map(i)
      }
    );
  }
), Ip = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: o,
  statusId: a,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": s,
        children: c
      }
    ) : /* @__PURE__ */ n.jsx("div", { className: e.title.classes || "", children: c });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ n.jsx(
    "div",
    {
      id: o,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ n.jsx("div", { id: o, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, d = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(tt, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: a, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
Mp.displayName = "TaskList";
const Hy = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: o,
  children: a,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), d = () => a || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), c = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        _i(
          u,
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
}, zy = ({
  src: e,
  alt: t,
  caption: r,
  sizes: o,
  srcset: a,
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
            ...o && a ? { sizes: o, srcSet: a } : {}
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
}, Dp = ({
  dateRange: e,
  onPrev: t,
  onNext: r,
  onToday: o,
  density: a,
  onDensityChange: s,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx(xt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(xt, { variant: "secondary", size: "small", onClick: o, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(xt, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      Sr,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: a,
        onChange: (d) => s?.(d.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      Sr,
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
] }), Tp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(tt, { color: Lp(r.status), text: r.label }) }, r.status)) });
function Lp(e) {
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
const Oy = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
  defaultValue: o,
  onChange: a,
  selectionMode: s = "single",
  a11yMode: i,
  className: l,
  style: d,
  getSlotAriaLabel: c,
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: p,
  enableDefaultLegend: h = !0,
  legendPlacement: v = "bottom",
  onA11yModeChange: x
}) => {
  const [g, j] = Oe("grid"), T = i || g, [I, S] = Oe(o || []), b = r ?? I, C = Fe(() => {
    const E = /* @__PURE__ */ new Set();
    return e.forEach((L) => E.add(new Date(L.start).getTime())), Array.from(E).sort((L, D) => L - D);
  }, [e]), N = Fe(() => {
    const E = {};
    return e.forEach((L) => {
      const D = new Date(L.start).getTime();
      E[D] || (E[D] = {});
      const R = L.capacity - L.booked - (L.held || 0);
      E[D][L.sessionId] = { slot: L, remaining: R };
    }), E;
  }, [e]), w = xe((E) => {
    if (s === "single") {
      const L = [E.id];
      r || S(L), a?.(L, { lastAction: "select" });
    } else {
      const L = b.includes(E.id), D = L ? b.filter((R) => R !== E.id) : [...b, E.id];
      r || S(D), a?.(D, { lastAction: L ? "deselect" : "select" });
    }
  }, [s, b, r, a]), m = Fe(() => p || (h ? Array.from(new Set(e.map((L) => L.status))).map((L) => ({
    status: L,
    label: L.charAt(0).toUpperCase() + L.slice(1)
  })) : void 0), [p, h, e]), y = m ? /* @__PURE__ */ n.jsx(
    Tp,
    {
      items: m,
      orientation: v === "left" || v === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (E) => {
    i || j(E), x?.(E);
  }, M = u || (f ? /* @__PURE__ */ n.jsx(
    Dp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: T,
      onA11yModeChange: k
    }
  ) : null), A = /* @__PURE__ */ n.jsx("div", { style: d, className: Se(l), children: /* @__PURE__ */ n.jsx(Jo, { className: Se("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(on, { children: /* @__PURE__ */ n.jsx(Zn, { width: gn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    v === "top" && y,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((E) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => w(E), "aria-pressed": b.includes(E.id), children: [
      Gn(new Date(E.start)),
      " – ",
      Gn(new Date(E.end)),
      " (",
      E.status,
      ")"
    ] }) }, E.id)) }),
    v === "bottom" && y
  ] }) }) }) }) });
  return T === "list" ? A : /* @__PURE__ */ n.jsx("div", { style: d, className: Se(l), children: /* @__PURE__ */ n.jsx(Jo, { className: Se("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(on, { children: /* @__PURE__ */ n.jsx(Zn, { width: gn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    v === "top" && y,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": C.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((E) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${E.specialty}`, className: "nhs-slot-matrix__session-header", children: E.specialty }, E.id))
      ] }),
      C.map((E) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Gn(new Date(E)), children: Gn(new Date(E)) }),
        t.map((L) => {
          const D = N[E]?.[L.id];
          if (!D)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, L.id);
          const { slot: R, remaining: oe } = D, G = b.includes(R.id), B = c ? c(R) : `Slot ${Gn(new Date(R.start))} ${R.status}${oe === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": R.status,
              className: Se("nhs-slot-matrix__cell", G && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": G || void 0,
              onClick: () => w(R),
              children: oe > 0 ? `${oe} left` : "Full"
            },
            R.id
          );
        })
      ] }, E))
    ] }),
    v === "bottom" && y
  ] }) }) }) }) });
};
function Gs(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Gn(e) {
  return `${Gs(e.getHours())}:${Gs(e.getMinutes())}`;
}
const Ap = ({
  title: e,
  value: t,
  subtitle: r,
  variant: o = "default",
  href: a,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const d = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${o}`,
    s
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Jt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return a ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: a,
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
}, Uy = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const o = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: o, ...r, children: /* @__PURE__ */ n.jsx(Jo, { children: /* @__PURE__ */ n.jsx(on, { children: e.map((a, s) => /* @__PURE__ */ n.jsx(
    Zn,
    {
      width: gn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(Ap, { ...a })
    },
    s
  )) }) }) });
}, $p = et.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: o,
    selectedRowIndex: a,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: d,
    ariaLabelledby: c,
    ariaDescribedby: u,
    className: f,
    tableClassName: p,
    bordered: h = !1,
    striped: v = !1,
    responsive: x = !1,
    tableType: g = "default"
  }, j) => {
    const T = Ge(null), I = Ge(null), S = Ge(null);
    et.useImperativeHandle(j, () => T.current, []);
    const [b, C] = Oe(0), [N, w] = Oe(0), [m, y] = Oe("headers"), [k, M] = Oe("browse"), A = t.length, E = e.length, L = Fe(() => !r || r.length === 0 ? e : [...e].sort((W, K) => {
      for (const { key: q, direction: J } of r) {
        const le = W[q], ee = K[q];
        if (le == null && ee == null) continue;
        if (le == null) return 1;
        if (ee == null) return -1;
        let te = 0;
        if (typeof le == "number" && typeof ee == "number" ? te = le - ee : te = String(le).localeCompare(String(ee)), te !== 0)
          return J === "asc" ? te : -te;
      }
      return 0;
    }), [e, r]), D = xe((W, K) => {
      setTimeout(() => {
        const q = T.current?.querySelector(
          `tbody tr:nth-child(${W + 1}) td:nth-child(${K + 1})`
        );
        q && (q.focus(), typeof q.scrollIntoView == "function" && q.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), R = xe((W) => {
      setTimeout(() => {
        const K = T.current?.querySelector(`th:nth-child(${W + 1})`);
        K && (K.focus(), typeof K.scrollIntoView == "function" && K.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), oe = xe((W) => {
      o?.(W);
    }, [o]), G = xe((W) => {
      s?.(W);
    }, [s]), B = xe((W) => {
      const { key: K } = W;
      switch (K) {
        case "Enter":
          if (W.preventDefault(), m === "headers" && k === "browse")
            M("navigate"), R(N);
          else if (m === "headers" && k === "navigate") {
            const q = t[N];
            q && oe(q.key);
          } else m === "cells" && k === "browse" ? (M("navigate"), D(b, N)) : m === "cells" && k === "navigate" && G(b);
          break;
        case "Escape":
          W.preventDefault(), (m === "headers" && k === "navigate" || m === "cells" && k === "navigate") && M("browse");
          break;
        case "ArrowLeft":
          if (W.preventDefault(), k === "navigate" || k === "browse" && m === "headers") {
            if (m === "headers") {
              const q = Math.max(0, N - 1);
              w(q), R(q);
            } else if (m === "cells") {
              const q = Math.max(0, N - 1);
              w(q), D(b, q);
            }
          }
          break;
        case "ArrowRight":
          if (W.preventDefault(), k === "navigate" || k === "browse" && m === "headers") {
            if (m === "headers") {
              const q = Math.min(A - 1, N + 1);
              w(q), R(q);
            } else if (m === "cells") {
              const q = Math.min(A - 1, N + 1);
              w(q), D(b, q);
            }
          }
          break;
        case "ArrowUp":
          if (W.preventDefault(), m === "cells") {
            if (k === "browse") {
              const q = Math.max(0, b - 1);
              C(q), D(q, 0), w(0);
            } else if (k === "navigate")
              if (b > 0) {
                const q = b - 1;
                C(q), D(q, N);
              } else
                y("headers"), M("browse"), R(N);
          }
          break;
        case "ArrowDown":
          if (W.preventDefault(), m === "headers" && k === "browse")
            y("cells"), C(0), w(0), D(0, 0);
          else if (m === "cells") {
            const q = E - 1;
            if (k === "browse") {
              const J = Math.min(q, b + 1);
              C(J), D(J, 0), w(0);
            } else if (k === "navigate" && b < q) {
              const J = b + 1;
              C(J), D(J, N);
            }
          }
          break;
        case "Home":
          W.preventDefault(), m === "headers" ? (w(0), R(0)) : m === "cells" && (W.ctrlKey ? (C(0), w(0), D(0, 0)) : (w(0), D(b, 0)));
          break;
        case "End":
          if (W.preventDefault(), m === "headers") {
            const q = A - 1;
            w(q), R(q);
          } else if (m === "cells")
            if (W.ctrlKey) {
              const q = E - 1, J = A - 1;
              C(q), w(J), D(q, J);
            } else {
              const q = A - 1;
              w(q), D(b, q);
            }
          break;
        case " ":
          if (W.preventDefault(), m === "headers" && k === "navigate") {
            const q = t[N];
            q && oe(q.key);
          } else m === "cells" && k === "navigate" && G(b);
          break;
      }
    }, [
      m,
      k,
      N,
      b,
      A,
      E,
      t,
      D,
      R,
      oe,
      G
    ]);
    Xe(() => {
      const W = T.current;
      if (W)
        return W.addEventListener("keydown", B), () => W.removeEventListener("keydown", B);
    }, [B]);
    const Q = Se(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": h,
        "nhsuk-table--striped": v,
        "nhsuk-table--compact": g === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: T,
        className: Q,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: I, role: "row", children: t.map((W, K) => {
            const q = r?.find((ee) => ee.key === W.key), J = !!q, le = m === "headers" && N === K;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: Se("sortable-header", {
                  "sortable-header--focused": le
                }),
                role: "columnheader",
                tabIndex: le ? 0 : -1,
                onClick: () => oe(W.key),
                onKeyDown: (ee) => {
                  (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), oe(W.key));
                },
                "aria-sort": J ? q?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: W.label }),
                  J && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((ee) => ee.key === W.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: q?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              W.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: L.map((W, K) => {
            const q = a === K, J = m === "cells" && b === K;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: Se("data-row", {
                  "data-row--selected": q,
                  "data-row--focused": J
                }),
                "aria-selected": q,
                children: t.map((le, ee) => {
                  const te = le.tableRenderer ? le.tableRenderer(W) : le.render ? le.render(W) : W[le.key], Z = m === "cells" && b === K && N === ee, ne = () => typeof te == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: te ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: te ? "Yes" : "No" })
                  ] }) : String(te ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: Se("data-cell", {
                        "data-cell--focused": Z
                      }),
                      tabIndex: Z ? 0 : -1,
                      onClick: () => G(K),
                      children: ne()
                    },
                    le.key
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
$p.displayName = "AriaDataGrid";
const ul = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: o = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: d = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = Ge(null), p = Ge(null), h = Ge(null), v = xe((m, y) => {
    d || (p.current = y, m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("text/plain", y));
  }, [d]), x = xe((m, y) => {
    d || p.current === y || (m.preventDefault(), m.dataTransfer.dropEffect = "move", h.current = y);
  }, [d]), g = xe((m, y) => {
    if (d) return;
    m.preventDefault();
    const k = p.current;
    if (!k || k === y) return;
    const M = e.findIndex((E) => E.key === k), A = e.findIndex((E) => E.key === y);
    if (M !== -1 && A !== -1) {
      const E = [...e], [L] = E.splice(M, 1);
      E.splice(A, 0, L), r(E);
    }
    p.current = null, h.current = null;
  }, [d, e, r]), j = xe(() => {
    p.current = null, h.current = null;
  }, []), T = xe((m) => {
    const y = t.find((k) => k.key === m);
    return y ? y.label : m;
  }, [t]), I = xe((m) => ["red", "orange", "blue", "aqua-green", "grey"][m] || "grey", []), S = xe((m) => {
    if (d) return;
    const y = e.map(
      (k) => k.key === m ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    r(y);
  }, [e, r, d]), b = xe((m) => {
    if (d) return;
    const y = e.filter((k) => k.key !== m);
    r(y);
  }, [e, r, d]), C = xe(() => {
    d || r([]);
  }, [r, d]), N = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const m = e.map((y, k) => {
      const M = y.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${T(y.key)} (${M})`;
    });
    if (m.length === 1)
      return `Sorted by: ${m[0]}`;
    if (m.length === 2)
      return `Sorted by: ${m.join(" and ")}`;
    {
      const y = m.pop();
      return `Sorted by: ${m.join(", ")}, and ${y}`;
    }
  }, w = Fe(() => {
    const m = ["sort-description"];
    return l && m.push("sort-help"), u && m.push(u), m.join(" ");
  }, [l, u]);
  return e.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${o}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: a
      }
    ),
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${o}`, children: [
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
          "aria-describedby": w,
          children: e.map((m, y) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (k) => v(k, m.key),
              onDragOver: (k) => x(k, m.key),
              onDrop: (k) => g(k, m.key),
              onDragEnd: j,
              onClick: () => S(m.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${m.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": m.key,
              children: /* @__PURE__ */ n.jsx(
                tt,
                {
                  color: I(y),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => b(m.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${y + 1}`, children: y + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: T(m.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), S(m.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${T(m.key)}. Currently ${m.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${m.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${m.direction}`,
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
            m.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        xt,
        {
          variant: "secondary",
          onClick: C,
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
function Ep(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const r = [...e.tabLoadingStates];
      return r[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: r };
    case "SET_TAB_ERROR":
      const o = [...e.tabErrors];
      return o[t.payload.tabIndex] = t.payload.error, { ...e, tabErrors: o };
    case "SET_SORT":
      return { ...e, sortConfig: t.payload };
    case "SET_SELECTED_ROWS":
      const a = [...e.selectedRows];
      return a[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: a };
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
const ra = Rn(function(t, r) {
  const {
    dataConfig: o = {},
    tabPanels: a,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: d,
    ariaDescription: c,
    className: u = "",
    disabled: f = !1,
    orientation: p = "horizontal",
    id: h,
    isLoading: v = !1,
    loadingComponent: x,
    error: g = null,
    errorComponent: j,
    "data-testid": T,
    actions: I,
    actionsMinGap: S = 16,
    forceActionsAbove: b = !1
  } = t, N = Ge(
    h || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, w = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), m = `${N}-description`, y = `${N}-navigation-help`, {
    dataComparator: k = ($, F) => JSON.stringify($) === JSON.stringify(F),
    filterFunction: M = ($) => $,
    booleanRenderer: A = ($) => $ ? "✓" : "✗"
  } = o || {}, E = s !== void 0, L = s ?? 0, [D, R] = Oe({
    focusArea: "tabs",
    focusedTabIndex: L,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), oe = Fe(() => ({
    selectedIndex: L,
    tabLoadingStates: new Array(a.length).fill(!1),
    tabErrors: new Array(a.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(a.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [L]), [G, B] = ji(Ep, oe);
  Xe(() => {
    const $ = G.tabLoadingStates.length, F = a.length;
    $ !== F && B({ type: "ADJUST_ARRAYS", payload: { newLength: F } });
  }, [a.length]), Xe(() => {
    E && B({ type: "SET_SELECTED_INDEX", payload: L });
  }, [L, E]), Xe(() => {
    R(($) => ({
      ...$,
      focusArea: "tabs",
      focusedTabIndex: G.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [G.selectedIndex]), Xe(() => {
    l && l(G.globalSelectedRowData);
  }, [G.globalSelectedRowData, l]);
  const Q = xe(
    ($, F) => k($, F),
    [k]
  ), W = xe(
    ($) => {
      $ >= 0 && $ < a.length && !a[$].disabled && (B({ type: "SET_SELECTED_INDEX", payload: $ }), R((F) => ({
        ...F,
        focusedTabIndex: $,
        focusArea: "tabs"
      })), i?.($));
    },
    [a, i]
  ), K = Ge(!1), q = xe(
    ($, F) => {
      if (!F?.force && !K.current && $ === 0) {
        K.current = !0;
        return;
      }
      K.current = !0, setTimeout(() => {
        const H = J.current[$], Y = H?.parentElement;
        if (H && Y) {
          const X = H.offsetLeft, re = H.offsetWidth, de = Y.clientWidth, ue = X - de / 2 + re / 2;
          try {
            Y.scrollTo({
              left: Math.max(0, ue),
              behavior: "smooth"
            });
          } catch {
            H.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!H,
          tabListElementExists: !!Y
        });
      }, 50);
    },
    []
  ), J = Ge([]), le = Ge([]), ee = xe(
    ($, F) => {
      const H = G.sortConfig || [], Y = H.find(
        (de) => de.key === F
      );
      let X;
      Y ? Y.direction === "asc" ? X = H.map(
        (de) => de.key === F ? { ...de, direction: "desc" } : de
      ) : X = H.filter(
        (de) => de.key !== F
      ) : X = [...H, { key: F, direction: "asc" }], B({
        type: "SET_SORT",
        payload: X
      }), a[$].onSort?.(F);
    },
    [G.sortConfig, a]
  ), te = xe(
    ($) => {
      setTimeout(() => {
        const F = document.querySelector(
          `[data-tab-panel="${G.selectedIndex}"] th:nth-child(${$ + 1})`
        );
        F && F.focus();
      }, 0);
    },
    [G.selectedIndex]
  ), Z = xe(
    ($) => A($),
    [A]
  ), ne = xe(
    ($, F) => {
      setTimeout(() => {
        const H = document.querySelector(
          `[data-tab-panel="${G.selectedIndex}"] tbody tr:nth-child(${$ + 1}) td:nth-child(${F + 1})`
        );
        H && H.focus();
      }, 0);
    },
    [G.selectedIndex]
  );
  Xe(() => {
    D.isGridActive && (D.focusArea === "headers" ? setTimeout(() => {
      te(D.focusedHeaderIndex);
    }, 0) : D.focusArea === "cells" && setTimeout(() => {
      ne(
        D.focusedRowIndex,
        D.focusedColumnIndex
      );
    }, 0));
  }, [
    D.focusArea,
    D.isGridActive,
    D.focusedHeaderIndex,
    D.focusedRowIndex,
    D.focusedColumnIndex,
    te,
    ne
  ]), Xe(() => {
    q(G.selectedIndex);
  }, [G.selectedIndex, q]);
  const fe = xe(
    ($, F) => {
      const { key: H } = $, Y = a[G.selectedIndex], X = Y?.columns.length || 0;
      switch (H) {
        case "ArrowLeft":
          $.preventDefault();
          const re = Math.max(0, F - 1);
          R((we) => ({
            ...we,
            focusedHeaderIndex: re
          })), te(re);
          break;
        case "ArrowRight":
          $.preventDefault();
          const de = Math.min(X - 1, F + 1);
          R((we) => ({
            ...we,
            focusedHeaderIndex: de
          })), te(de);
          break;
        case "ArrowUp":
          $.preventDefault(), R((we) => ({
            ...we,
            focusArea: "tabs",
            focusedTabIndex: G.selectedIndex
          })), q(G.selectedIndex), J.current[G.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          $.preventDefault(), R((we) => ({
            ...we,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: F,
            isGridActive: !0
          }));
          break;
        case "Home":
          $.preventDefault(), R((we) => ({ ...we, focusedHeaderIndex: 0 })), te(0);
          break;
        case "End":
          $.preventDefault();
          const ue = X - 1;
          R((we) => ({
            ...we,
            focusedHeaderIndex: ue
          })), te(ue);
          break;
        case "Enter":
        case " ":
          $.preventDefault();
          const he = Y?.columns[F]?.key;
          he && ee(G.selectedIndex, he);
          break;
      }
    },
    [
      a,
      G.selectedIndex,
      ee,
      R,
      te,
      ne,
      J
    ]
  ), U = xe(
    ($, F, H) => {
      const { key: Y } = $, X = a[G.selectedIndex], re = X?.data.length || 0, de = X?.columns.length || 0;
      switch (Y) {
        case "ArrowUp":
          if ($.preventDefault(), F === 0)
            R((be) => ({
              ...be,
              focusArea: "headers",
              focusedHeaderIndex: H,
              isGridActive: !1
            })), te(H);
          else {
            const be = F - 1;
            R((ze) => ({
              ...ze,
              focusedRowIndex: be
            })), ne(be, H);
          }
          break;
        case "ArrowDown":
          $.preventDefault();
          const ue = Math.min(re - 1, F + 1);
          R((be) => ({
            ...be,
            focusedRowIndex: ue
          })), ne(ue, H);
          break;
        case "ArrowLeft":
          $.preventDefault();
          const he = Math.max(0, H - 1);
          R((be) => ({
            ...be,
            focusedColumnIndex: he
          })), ne(F, he);
          break;
        case "ArrowRight":
          $.preventDefault();
          const we = Math.min(de - 1, H + 1);
          R((be) => ({
            ...be,
            focusedColumnIndex: we
          })), ne(F, we);
          break;
        case "Home":
          $.preventDefault(), $.ctrlKey ? (R((be) => ({
            ...be,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ne(0, 0)) : (R((be) => ({ ...be, focusedColumnIndex: 0 })), ne(F, 0));
          break;
        case "End":
          if ($.preventDefault(), $.ctrlKey) {
            const be = re - 1, ze = de - 1;
            R(($e) => ({
              ...$e,
              focusedRowIndex: be,
              focusedColumnIndex: ze
            })), ne(be, ze);
          } else {
            const be = de - 1;
            R((ze) => ({
              ...ze,
              focusedColumnIndex: be
            })), ne(F, be);
          }
          break;
        case "Enter":
        case " ":
          if ($.preventDefault(), X && X.data[F]) {
            const be = X.data.some(
              (Ke) => "ews_data" in Ke
            ) ? M(X.data, G.filters) : X.data, ze = G.sortConfig;
            let $e = be;
            if (ze && ze.length > 0 && ($e = [...be].sort((Ke, ot) => {
              for (const { key: se, direction: ke } of ze) {
                let ge = Ke[se], ve = ot[se];
                const Be = X.columns.find(
                  (Ve) => Ve.key === se
                );
                if (Be?.tableRenderer ? (ge = Be.tableRenderer(Ke), ve = Be.tableRenderer(ot)) : Be?.render && (ge = Be.render(Ke), ve = Be.render(ot)), ge == null && ve == null) continue;
                if (ge == null) return ke === "asc" ? -1 : 1;
                if (ve == null) return ke === "asc" ? 1 : -1;
                let Te = 0;
                if (typeof ge == "number" && typeof ve == "number" ? Te = ge - ve : Te = String(ge).localeCompare(
                  String(ve),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Te !== 0)
                  return ke === "asc" ? Te : -Te;
              }
              return 0;
            })), $e[F]) {
              const Ke = $e[F], se = G.globalSelectedRowData && Q(G.globalSelectedRowData, Ke) ? null : Ke;
              B({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: se
              });
            }
          }
          break;
      }
    },
    [
      a,
      G.selectedIndex,
      G.filters,
      G.sortConfig,
      M,
      Q,
      B,
      R,
      te,
      ne
    ]
  ), ie = xe(
    ($, F) => M($, F),
    [M]
  );
  if (Ni(
    r,
    () => ({
      selectTab: ($) => {
        $ >= 0 && $ < a.length && (B({ type: "SET_SELECTED_INDEX", payload: $ }), i?.($));
      },
      refreshData: ($) => {
        console.log("Refreshing data for tab:", $ ?? "all");
      },
      exportData: ($) => {
        const F = $ ?? G.selectedIndex, H = a[F];
        return H ? H.data : [];
      },
      getSelectedRows: ($) => G.globalSelectedRowData ? [] : [],
      clearSelection: ($) => {
        B({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: ($) => {
        B({ type: "SET_FILTERS", payload: $ });
      }
    }),
    [G.selectedIndex, G.selectedRows, a, i]
  ), v)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": T,
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
  if (g)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": T,
        children: j || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: g })
        ] })
      }
    );
  const ae = Ge(null), pe = Ge(null), ce = Ge(null), [me, Ee] = Oe(!0);
  Xe(() => {
    if (!I) {
      Ee(!1);
      return;
    }
    if (b) {
      Ee(!1);
      return;
    }
    function $() {
      if (!ae.current || !pe.current || !ce.current) return;
      const Y = ae.current.clientWidth, X = Array.from(
        pe.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), re = X.reduce((we, be) => we + be.offsetWidth, 0), de = ce.current.offsetWidth, ue = Math.max(8 * (X.length - 1), 0), he = re + ue + de + S <= Y;
      Ee(he);
    }
    const F = requestAnimationFrame(() => $()), H = new ResizeObserver(() => $());
    return ae.current && H.observe(ae.current), pe.current && H.observe(pe.current), () => {
      cancelAnimationFrame(F), H.disconnect();
    };
  }, [I, S, b, a.length]);
  const Ie = ce, Ne = xe(() => Ie.current ? Array.from(
    Ie.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(($) => !$.hasAttribute("disabled")) : [], []), O = xe(
    ($) => {
      const F = Ne();
      if (!F.length) return;
      const H = Math.max(0, Math.min($, F.length - 1));
      F[H].focus(), R((Y) => ({ ...Y, focusArea: "actions", focusedActionIndex: H }));
    },
    [Ne]
  ), _ = xe(() => O(0), [O]), P = xe(
    ($, F) => {
      const { key: H } = $, Y = a.length - 1;
      switch (H) {
        case "ArrowUp": {
          I && !me && ($.preventDefault(), _());
          break;
        }
        case "ArrowLeft": {
          $.preventDefault();
          const X = F > 0 ? F - 1 : Y;
          W(X), q(X), J.current[X]?.focus();
          break;
        }
        case "ArrowRight": {
          if ($.preventDefault(), F === Y && I && me) {
            _();
            return;
          }
          const X = F < Y ? F + 1 : 0;
          W(X), q(X), J.current[X]?.focus();
          break;
        }
        case "ArrowDown": {
          $.preventDefault(), R((X) => ({
            ...X,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          $.preventDefault(), W(0), q(0), J.current[0]?.focus();
          break;
        }
        case "End": {
          $.preventDefault(), W(Y), q(Y), J.current[Y]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          $.preventDefault(), W(F);
          break;
        }
        case "Tab": {
          !$.shiftKey && F === Y && I && me && _();
          break;
        }
      }
    },
    [a.length, W, q, I, me, _]
  ), z = xe(($) => {
    const { key: F } = $, H = Ne();
    if (!H.length) return;
    const Y = H.findIndex((X) => X === document.activeElement);
    switch (F) {
      case "ArrowLeft": {
        if (me)
          if (Y > 0)
            $.preventDefault(), O(Y - 1);
          else {
            $.preventDefault();
            const X = a.length - 1;
            W(X), q(X), J.current[X]?.focus(), R((re) => ({ ...re, focusArea: "tabs", focusedTabIndex: X }));
          }
        break;
      }
      case "ArrowRight": {
        me && (Y < H.length - 1 ? ($.preventDefault(), O(Y + 1)) : ($.preventDefault(), W(0), q(0), J.current[0]?.focus(), R((X) => ({ ...X, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (me)
          $.preventDefault(), R((X) => ({ ...X, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          $.preventDefault();
          const X = G.selectedIndex;
          J.current[X]?.focus(), R((re) => ({ ...re, focusArea: "tabs", focusedTabIndex: X }));
        }
        break;
      }
    }
  }, [Ne, me, O, a.length, W, q, G.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${u}`,
      id: h,
      "data-testid": T,
      ref: ae,
      children: [
        c && !w && /* @__PURE__ */ n.jsx("div", { id: m, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: y,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          ul,
          {
            sortConfig: G.sortConfig || [],
            columns: a.flatMap(
              ($) => $.columns.map((F) => ({ key: F.key, label: F.label }))
            ).filter(
              ($, F, H) => H.findIndex((Y) => Y.key === $.key) === F
              // Remove duplicates
            ),
            onSortChange: ($) => {
              B({ type: "SET_SORT", payload: $ });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        I && !me && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: ce,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: z,
            children: I
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${me ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? w ? c : m : y,
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              ref: pe,
              children: a.map(($, F) => {
                const H = F === G.selectedIndex, Y = $.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${$.id}`,
                    "aria-controls": `panel-${$.id}`,
                    "aria-selected": H,
                    "aria-disabled": Y,
                    tabIndex: H ? 0 : -1,
                    ref: (X) => {
                      J.current[F] = X;
                    },
                    onClick: () => W(F),
                    onKeyDown: (X) => P(X, F),
                    disabled: Y,
                    className: [
                      "aria-tabs-datagrid__tab",
                      H ? "aria-tabs-datagrid__tab--selected" : "",
                      Y ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: $.label }),
                      G.tabLoadingStates[F] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      G.tabErrors[F] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  $.id
                );
              })
            }
          ),
          I && me && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: ce,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: z,
              children: I
            }
          )
        ] }),
        a.map(($, F) => {
          const H = F === G.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${$.id}`,
              "aria-labelledby": `tab-${$.id}`,
              tabIndex: 0,
              hidden: !H,
              ref: (Y) => {
                le.current[F] = Y;
              },
              className: `aria-tabs-datagrid__panel ${$.className || ""}`,
              "data-tab-panel": F,
              children: H && (() => {
                const Y = $.data.some(
                  (re) => "ews_data" in re
                ) ? ie($.data, G.filters) : $.data, X = Fe(() => {
                  const re = G.sortConfig;
                  return !re || re.length === 0 ? Y : [...Y].sort((de, ue) => {
                    for (const { key: he, direction: we } of re) {
                      let be = de[he], ze = ue[he];
                      const $e = $.columns.find(
                        (ot) => ot.key === he
                      );
                      if ($e?.tableRenderer ? (be = $e.tableRenderer(de), ze = $e.tableRenderer(ue)) : $e?.render && (be = $e.render(de), ze = $e.render(ue)), be == null && ze == null) continue;
                      if (be == null) return 1;
                      if (ze == null) return -1;
                      let Ke = 0;
                      if (typeof be == "number" && typeof ze == "number" ? Ke = be - ze : typeof be == "boolean" && typeof ze == "boolean" ? Ke = be === ze ? 0 : be ? 1 : -1 : Ke = String(be).localeCompare(
                        String(ze),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Ke !== 0)
                        return we === "asc" ? Ke : -Ke;
                    }
                    return 0;
                  });
                }, [Y, G.sortConfig, $.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": $.ariaLabel,
                    "aria-describedby": $.ariaDescription ? `panel-${$.id}-description` : void 0,
                    children: [
                      $.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${$.id}-description`,
                          children: $.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: $.columns.map((re, de) => {
                        const ue = G.sortConfig?.find(
                          (be) => be.key === re.key
                        ), he = !!ue, we = D.focusArea === "headers" && D.focusedHeaderIndex === de;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${we ? "sortable-header--focused" : ""} ${he ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: we ? 0 : -1,
                            onClick: () => ee(F, re.key),
                            onKeyDown: (be) => fe(be, de),
                            "aria-sort": he ? ue?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: re.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${he ? `sort-indicator--${ue?.direction}` : ""}`,
                                  children: [
                                    G.sortConfig && G.sortConfig.length > 0 && G.sortConfig.findIndex(
                                      (be) => be.key === re.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${G.sortConfig.findIndex((be) => be.key === re.key) + 1}`,
                                        "data-priority": G.sortConfig.findIndex(
                                          (be) => be.key === re.key
                                        ) + 1,
                                        title: `Sort priority: ${G.sortConfig.findIndex((be) => be.key === re.key) + 1}`,
                                        children: G.sortConfig.findIndex(
                                          (be) => be.key === re.key
                                        ) + 1
                                      }
                                    ),
                                    he && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ue?.direction}`,
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
                          re.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: X.map((re, de) => {
                        const ue = G.globalSelectedRowData && Q(G.globalSelectedRowData, re), he = D.focusArea === "cells" && D.focusedRowIndex === de;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ue ? "data-row--selected" : ""} ${he ? "data-row--focused" : ""}`,
                            "aria-selected": ue,
                            children: $.columns.map((we, be) => {
                              const ze = re[we.key];
                              let $e;
                              we.tableRenderer ? $e = we.tableRenderer(re) : we.render ? $e = we.render(re) : $e = ze;
                              const Ke = D.focusArea === "cells" && D.focusedRowIndex === de && D.focusedColumnIndex === be, ot = () => {
                                if (we.customRenderer) {
                                  const se = we.customRenderer(
                                    ze,
                                    re
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: se
                                    }
                                  );
                                }
                                return typeof ze == "boolean" && $e === ze ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  Z(ze),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ze ? "Yes" : "No" })
                                ] }) : et.isValidElement($e) || typeof $e != "object" ? $e ?? "" : $e;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ke ? "data-cell--focused" : ""}`,
                                  tabIndex: Ke ? 0 : -1,
                                  onClick: () => {
                                    const ke = G.globalSelectedRowData && Q(
                                      G.globalSelectedRowData,
                                      re
                                    ) ? null : re;
                                    B({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: ke
                                    });
                                  },
                                  onKeyDown: (se) => U(se, de, be),
                                  children: ot()
                                },
                                we.key
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
            $.id
          );
        })
      ]
    }
  );
}), gr = {
  asc: "↑",
  desc: "↓"
}, Pp = (e) => [...e].sort((t, r) => t.priority - r.priority);
function Ho(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Fp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Rp(e, t) {
  const r = t.find((o) => o.id === e);
  return r ? r.priority > 0 : !1;
}
function Bp(e, t) {
  const r = t.find((a) => a.id === e), o = Fp(t);
  return r ? r.priority < o : !1;
}
const Wy = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: a,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const u = Fe(() => Pp(e), [e]), f = xe((T) => {
    if (l) return;
    const I = e.map(
      (S) => S.id === T ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(I);
  }, [e, t, l]), p = xe((T) => {
    if (l) return;
    const I = e.findIndex((b) => b.id === T);
    if (I <= 0) return;
    const S = [...e];
    [S[I], S[I - 1]] = [S[I - 1], S[I]], t(Ho(S));
  }, [e, t, l]), h = xe((T) => {
    if (l) return;
    const I = e.findIndex((b) => b.id === T);
    if (I >= e.length - 1 || I === -1) return;
    const S = [...e];
    [S[I], S[I + 1]] = [S[I + 1], S[I]], t(Ho(S));
  }, [e, t, l]), v = xe((T) => {
    if (l) return;
    const I = e.filter((S) => S.id !== T);
    t(Ho(I));
  }, [e, t, l]), x = xe(() => {
    l || t([]);
  }, [t, l]), g = () => {
    if (e.length === 0)
      return o;
    if (a)
      return a;
    const T = u.map((I, S) => {
      const b = I.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${I.label} (${b})`;
    });
    if (T.length === 1)
      return `Sorted by: ${T[0]}`;
    if (T.length === 2)
      return `Sorted by: ${T.join(" and ")}`;
    {
      const I = T.pop();
      return `Sorted by: ${T.join(", ")}, and ${I}`;
    }
  }, j = Fe(() => {
    const T = ["sort-description"];
    return i && T.push("sort-help"), c && T.push(c), T.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: g()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: g()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": j,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((T) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                tt,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(T.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: T.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: T.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(T.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${T.label}. Currently ${T.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: T.direction === "asc" ? gr.asc : gr.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(T.id),
                          disabled: l || !Rp(T.id, e),
                          "aria-label": `Move ${T.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(T.id),
                          disabled: l || !Bp(T.id, e),
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
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      xt,
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
      gr.asc,
      "/",
      gr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Ja = (e, t) => t.map((r) => ({
  id: r.id,
  label: r.label,
  data: r.filter ? r.filter(e) : e,
  columns: r.columns.map((o) => ({
    key: o.key,
    label: o.label,
    render: o.render,
    customRenderer: o.customRenderer
  })),
  sortConfig: r.sortConfig,
  ariaLabel: r.ariaLabel || `${r.label} Data Grid`,
  ariaDescription: r.ariaDescription || `Data grid showing ${r.label.toLowerCase()}`,
  className: r.className,
  disabled: r.disabled
})), oa = [
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
], Hp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), zp = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [o, a] = t.ewsScoreRange;
    if (r.ews_score < o || r.ews_score > a) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Op = (e) => {
  if (typeof e == "boolean") {
    const r = oa.find((o) => o.value === e);
    return r ? r.icon : null;
  }
  const t = oa.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Up = (e) => `${e.name}-${e.bed_name}`, Wp = () => ({
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
}), Gy = (e) => {
  const t = Wp();
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
}, Gp = {
  dataComparator: Hp,
  filterFunction: zp,
  booleanRenderer: Op,
  getDataId: Up
};
function Vs(e, t, r) {
  const {
    primaryField: o,
    secondaryFields: a = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = r, f = t.find((I) => I.key === o), p = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[o || "name"] || "Untitled", h = () => a.filter((S) => !i.includes(S) && e[S]).slice(0, 3).map((S) => {
    const b = t.find((m) => m.key === S), C = e[S], N = c[S] ? c[S](C, e) : b?.cardRenderer ? b.cardRenderer(e) : b?.render ? b.render(e) : C;
    return `${b?.label || S}: ${N}`;
  }).join(" • "), v = () => s.length === 0 ? null : s.filter((I) => e[I.fieldKey] !== void 0).map((I) => {
    const S = e[I.fieldKey], b = I.render ? I.render(S, e) : S;
    return `<span class="nhsuk-tag ${Vp(I, S)}">${b}</span>`;
  }).join(""), x = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", g = v(), j = h(), T = g ? `${j}${g ? `<div class="adaptive-card__badges">${g}</div>` : ""}` : j;
  return {
    variant: x(),
    heading: String(p),
    descriptionHtml: T,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${p}`
  };
}
function Vp(e, t) {
  const r = e.className || "adaptive-card__badge";
  if (e.fieldKey === "ews_score" || e.fieldKey.includes("score")) {
    const o = Number(t);
    return o >= 7 ? `${r} nhsuk-tag--red` : o >= 3 ? `${r} nhsuk-tag--yellow` : `${r} nhsuk-tag--green`;
  }
  if (e.fieldKey === "priority") {
    const o = String(t).toLowerCase();
    if (o === "high") return `${r} nhsuk-tag--red`;
    if (o === "medium") return `${r} nhsuk-tag--yellow`;
    if (o === "low") return `${r} nhsuk-tag--green`;
  }
  if (e.fieldKey === "status") {
    const o = String(t).toLowerCase();
    if (o === "urgent" || o === "critical") return `${r} nhsuk-tag--red`;
    if (o === "pending" || o === "warning") return `${r} nhsuk-tag--yellow`;
    if (o === "completed" || o === "success") return `${r} nhsuk-tag--green`;
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
const Yp = {
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
  onSelect: r,
  onAction: o,
  priority: a = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, f = e.speciality, p = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${a} healthcare-card--${s}`,
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
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: u !== void 0 && /* @__PURE__ */ n.jsxs(
            tt,
            {
              color: qp(gl(u)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                u
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
            /* @__PURE__ */ n.jsx("dd", { children: f })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: p })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            xt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (h) => {
                h.stopPropagation(), o?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            xt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (h) => {
                h.stopPropagation(), o?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            xt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (h) => {
                h.stopPropagation(), o?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, pl = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        tt,
        {
          color: Jp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        tt,
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
      xt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      xt,
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
        tt,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        tt,
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
      xt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      xt,
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
  onAction: r,
  priority: o = "medium"
}) => {
  const a = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${o}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${a}, EWS Score ${s}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: a }),
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Zp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
            tt,
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
          u !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              u,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            xt,
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
            xt,
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
function gl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Zp(e) {
  return gl(e);
}
function qp(e) {
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
function Jp(e) {
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
const Xp = [
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
], xl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Kp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Qp = (e) => xl(e) === "high" || e.status === "urgent" ? "primary" : "default", eh = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, th = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Xp,
  hiddenFields: [],
  getPriority: xl,
  getStatus: Kp,
  getVariant: Qp,
  fieldRenderers: eh,
  classPrefix: "adaptive-card--healthcare"
}, nh = {
  patient: (e, t, r) => {
    const o = r.getPriority?.(e) || "medium", a = r.getStatus?.(e) || "active", s = a === "urgent" ? "active" : a;
    return /* @__PURE__ */ n.jsx(
      fl,
      {
        data: e,
        columns: t,
        priority: o,
        status: s,
        onSelect: (i) => console.log("Patient selected:", i),
        onAction: (i, l) => console.log("Patient action:", i, l)
      }
    );
  },
  appointment: (e, t, r) => {
    const o = r.getStatus?.(e) || "pending", a = o === "urgent" ? "pending" : o;
    return /* @__PURE__ */ n.jsx(
      pl,
      {
        data: e,
        columns: t,
        status: a,
        onSelect: (s) => console.log("Appointment selected:", s),
        onAction: (s, i) => console.log("Appointment action:", s, i)
      }
    );
  },
  medication: (e, t, r) => {
    const o = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      hl,
      {
        data: e,
        columns: t,
        priority: o,
        onSelect: (a) => console.log("Medication selected:", a),
        onAction: (a, s) => console.log("Medication action:", a, s)
      }
    );
  },
  vitals: (e, t, r) => {
    const o = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      ml,
      {
        data: e,
        columns: t,
        priority: o,
        onSelect: (a) => console.log("Vitals selected:", a),
        onAction: (a, s) => console.log("Vitals action:", a, s)
      }
    );
  }
}, rh = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Ys = {
  name: "healthcare",
  defaultCardConfig: th,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: nh,
  fieldTypes: rh
};
function Zs(e) {
  return {
    primaryField: e?.primaryField || "name",
    secondaryFields: e?.secondaryFields || [],
    badges: e?.badgeFields?.map((t) => ({
      fieldKey: t,
      className: "adaptive-card__badge"
    })) || [],
    hiddenFields: e?.hiddenFields || [],
    cardTemplate: e?.cardTemplate ? (t, r, o) => e.cardTemplate(t, r) : void 0,
    classPrefix: "adaptive-card--generic"
  };
}
function qs(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function oh(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const r = [...e.tabLoadingStates];
      return r[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: r };
    case "SET_TAB_ERROR":
      const o = [...e.tabErrors];
      return o[t.payload.tabIndex] = t.payload.error, { ...e, tabErrors: o };
    case "SET_SORT":
      return { ...e, sortConfig: t.payload };
    case "SET_SELECTED_ROWS":
      const a = [...e.selectedRows];
      return a[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: a };
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
function ah(e, t) {
  const [r, o] = Oe("cards");
  return Xe(() => {
    if (t) {
      o(t);
      return;
    }
    const a = () => {
      const s = window.innerWidth;
      s < e.mobile ? o("cards") : s < e.desktop ? o("hybrid") : o("table");
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [e, t]), r;
}
function sh(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function ih(e, t, r, o) {
  const a = o ? { ...o.defaultCardConfig, ...r } : { ...Yp, ...r };
  if (o && o.cardTemplates) {
    const s = sh(e);
    if (s && o.cardTemplates[s]) {
      const i = o.cardTemplates[s](e, t, a);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return a.cardTemplate && a.cardTemplate(e, t, a), Vs(e, t, a);
}
const Vy = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: o = {},
  enableAdvancedSorting: a = !1,
  topActions: s,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: d,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: u,
  selectedIndex: f,
  onTabChange: p,
  ariaLabel: h = "Data grid",
  ariaDescription: v,
  orientation: x = "horizontal",
  id: g,
  disabled: j = !1,
  className: T,
  ...I
}) => {
  const S = ah(e, t), b = f !== void 0, C = f ?? 0, N = Fe(() => {
    if (c.some(
      (_) => _.data && _.data.length > 0 && qs(_.data)
    )) {
      const _ = Zs(r);
      return {
        ...Ys.defaultCardConfig,
        ..._
      };
    } else
      return Zs(r);
  }, [r, c]), w = Fe(() => c.some(
    (_) => _.data && _.data.length > 0 && qs(_.data)
  ) ? Ys : void 0, [c]), m = Fe(() => ({
    selectedIndex: C,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [C, c.length]), [y, k] = ji(oh, m), M = Ge([]), A = Ge([]), E = Ge([]), L = Ge(null), [D, R] = Oe({
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
  }), oe = xe((O) => {
    if (!O.current)
      return { columns: 1, rows: 0 };
    const _ = O.current, P = _.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (P.length === 0)
      return { columns: 1, rows: 0 };
    const z = _.offsetWidth, F = P[0].offsetWidth, H = Math.floor(z / F) || 1, Y = Math.ceil(P.length / H);
    return { columns: H, rows: Y };
  }, []), G = xe((O, _) => ({
    row: Math.floor(O / _),
    col: O % _
  }), []), B = xe((O, _, P) => O * P + _, []), Q = xe((O, _, P, z) => {
    const { row: $, col: F } = G(O, z);
    let H = $, Y = F;
    switch (_) {
      case "up":
        H = Math.max(0, $ - 1);
        break;
      case "down":
        H = Math.min(Math.floor((P - 1) / z), $ + 1);
        break;
      case "left":
        Y = Math.max(0, F - 1);
        break;
      case "right":
        Y = Math.min(z - 1, F + 1);
        break;
    }
    const X = B(H, Y, z);
    return Math.min(X, P - 1);
  }, [G, B]);
  Xe(() => {
    D.isCardNavigationActive && D.focusedCardElementIndex >= 0 && D.cardElements.length > 0 && setTimeout(() => {
      const O = D.cardElements[D.focusedCardElementIndex];
      O && (O.element.focus(), O.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [D.isCardNavigationActive, D.focusedCardElementIndex, D.cardElements.length]), Xe(() => {
    const O = () => {
      if (S === "cards" && L.current) {
        const { columns: z, rows: $ } = oe(L);
        R((F) => ({
          ...F,
          gridColumns: z,
          gridRows: $
        }));
      }
    }, _ = setTimeout(O, 200), P = () => {
      setTimeout(O, 100);
    };
    return window.addEventListener("resize", P), () => {
      clearTimeout(_), window.removeEventListener("resize", P);
    };
  }, [S, c, oe]), Xe(() => {
    const O = y.tabLoadingStates.length, _ = c.length;
    O !== _ && k({ type: "ADJUST_ARRAYS", payload: { newLength: _ } });
  }, [c.length, y.tabLoadingStates.length]), Xe(() => {
    b && f !== y.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: f });
  }, [b, f, y.selectedIndex]);
  const W = xe((O) => {
    O >= 0 && O < c.length && !c[O].disabled && (k({ type: "SET_SELECTED_INDEX", payload: O }), p?.(O));
  }, [c, p]), K = xe((O) => {
    console.log("Card selected:", O), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: O
    });
  }, []), q = xe((O) => {
    const _ = A.current[O];
    _ && (_.focus(), _.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), J = xe((O) => {
    const _ = A.current[O];
    if (!_) return [];
    const P = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), z = _.querySelectorAll(P);
    return Array.from(z).map(($, F) => ({
      id: $.id || `card-${O}-element-${F}`,
      element: $,
      label: $.getAttribute("aria-label") || $.textContent?.trim() || $.getAttribute("title") || `Element ${F + 1}`,
      type: $.tagName.toLowerCase() === "button" ? "button" : $.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes($.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), le = Ge(null), ee = xe((O) => {
    const _ = le.current;
    if (!_) return;
    const P = document.createElement("div");
    P.setAttribute("aria-live", "polite"), P.setAttribute("aria-atomic", "true"), P.className = "sr-only", P.textContent = O, _.appendChild(P), setTimeout(() => {
      _.contains(P) && _.removeChild(P);
    }, 1e3);
  }, []), te = xe((O) => {
    const _ = O.filter((z) => z.sortable !== !1), P = [
      { value: "", label: "Sort by..." }
    ];
    return _.forEach((z) => {
      const $ = z.label || z.key;
      z.key === "name" ? P.push(
        { value: `${z.key}-asc`, label: `${$} (A-Z)` },
        { value: `${z.key}-desc`, label: `${$} (Z-A)` }
      ) : z.key === "ews_score" || z.key.includes("score") ? P.push(
        { value: `${z.key}-desc`, label: `${$} (High-Low)` },
        { value: `${z.key}-asc`, label: `${$} (Low-High)` }
      ) : z.key === "age" || z.key.includes("date") || z.key.includes("time") ? P.push(
        { value: `${z.key}-desc`, label: `${$} (Oldest-Youngest)` },
        { value: `${z.key}-asc`, label: `${$} (Youngest-Oldest)` }
      ) : P.push(
        { value: `${z.key}-asc`, label: `${$} (A-Z)` },
        { value: `${z.key}-desc`, label: `${$} (Z-A)` }
      );
    }), P;
  }, []), Z = xe((O, _) => _ ? [...O].sort((P, z) => {
    const $ = P[_.key], F = z[_.key];
    if ($ == null && F == null) return 0;
    if ($ == null) return 1;
    if (F == null) return -1;
    const H = Number($), Y = Number(F);
    if (!isNaN(H) && !isNaN(Y))
      return _.direction === "asc" ? H - Y : Y - H;
    const X = String($).toLowerCase(), re = String(F).toLowerCase(), de = X.localeCompare(re);
    return _.direction === "asc" ? de : -de;
  }) : O, []), ne = xe((O) => {
    if (!O) {
      R((X) => ({ ...X, cardSortConfig: null })), ee("Card sorting cleared");
      return;
    }
    const [_, P] = O.split("-"), z = { key: _, direction: P };
    R((X) => ({ ...X, cardSortConfig: z }));
    const H = c[y.selectedIndex]?.columns.find((X) => X.key === _)?.label || _;
    ee(`Cards sorted by ${H} in ${P === "asc" ? "ascending" : "descending"} order`);
  }, [c, y.selectedIndex, ee]), fe = xe((O) => {
    const z = c[y.selectedIndex]?.columns.find((F) => F.key === O.key)?.label || O.key, $ = O.direction === "asc" ? "ascending" : "descending";
    return `${z} (${$})`;
  }, [c, y.selectedIndex]), U = xe((O) => {
    const _ = c[y.selectedIndex];
    if (a) {
      const P = y.sortConfig;
      return !P || P.length === 0 ? O : [...O].sort((z, $) => {
        for (const { key: F, direction: H } of P) {
          let Y = z[F], X = $[F];
          const re = _?.columns.find((ze) => ze.key === F);
          if (re?.cardRenderer ? (Y = re.cardRenderer(z), X = re.cardRenderer($)) : re?.render && (Y = re.render(z), X = re.render($)), Y == null && X == null) continue;
          if (Y == null) return H === "asc" ? -1 : 1;
          if (X == null) return H === "asc" ? 1 : -1;
          const de = Number(Y), ue = Number(X);
          if (!isNaN(de) && !isNaN(ue)) {
            const ze = de - ue;
            if (ze !== 0) return H === "asc" ? ze : -ze;
            continue;
          }
          const he = String(Y).toLowerCase(), we = String(X).toLowerCase(), be = he.localeCompare(we);
          if (be !== 0) return H === "asc" ? be : -be;
        }
        return 0;
      });
    } else
      return Z(O, D.cardSortConfig);
  }, [a, y.sortConfig, D.cardSortConfig, Z, c, y.selectedIndex]), ie = xe((O, _) => {
    const P = J(O), z = P[_];
    if (z) {
      z.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const $ = `Focused on ${z.label}, ${z.type} ${_ + 1} of ${P.length} within card`;
      ee($);
    }
  }, [J, ee]), ae = xe((O) => {
    M.current[O]?.focus();
  }, []), pe = xe(() => {
    const O = E.current[0];
    if (!O) return [];
    const _ = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), P = O.querySelectorAll(_);
    return Array.from(P);
  }, []), ce = xe((O) => {
    if (O === 0) {
      const _ = E.current[0], P = _?.querySelector(".sort-controls-row");
      if (P) {
        P.setAttribute("tabindex", "-1"), P.focus();
        const $ = `Sort controls group with ${pe().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ee($);
      } else _ && _.focus();
    } else {
      const _ = pe(), P = O - 1, z = _[P];
      if (z) {
        z.focus();
        const $ = z.tagName.toLowerCase() === "select", F = z.tagName.toLowerCase() === "button", H = $ ? "dropdown" : F ? "button" : "control", Y = $ ? ". Use Space key to open dropdown" : "", X = `${H} ${P + 1} of ${_.length}${Y}`;
        ee(X);
      }
    }
  }, [pe, ee]), me = xe((O, _) => {
    const { key: P } = O, z = c[y.selectedIndex], $ = z?.data.length || 0;
    if (P === "ArrowLeft" && O.shiftKey) {
      O.preventDefault(), O.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (P === "ArrowRight" && O.shiftKey) {
      O.preventDefault(), O.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!D.isCardNavigationActive) {
      switch (P) {
        case "ArrowUp":
          if (O.preventDefault(), _ === 0)
            R((X) => ({ ...X, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), ce(0);
          else {
            const X = Q(_, "up", $, D.gridColumns);
            X !== _ && (R((re) => ({ ...re, focusedCardIndex: X })), q(X), ee(`Moved to card ${X + 1} of ${$}`));
          }
          break;
        case "ArrowDown":
          O.preventDefault();
          const F = Q(_, "down", $, D.gridColumns);
          F !== _ && (R((X) => ({ ...X, focusedCardIndex: F })), q(F), ee(`Moved to card ${F + 1} of ${$}`));
          break;
        case "ArrowLeft":
          O.preventDefault();
          const H = Q(_, "left", $, D.gridColumns);
          H !== _ ? (R((X) => ({ ...X, focusedCardIndex: H })), q(H), ee(`Moved to card ${H + 1} of ${$}`)) : y.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: y.selectedIndex - 1 }), R((X) => ({ ...X, focusArea: "tabs" })), setTimeout(() => ae(y.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          O.preventDefault();
          const Y = Q(_, "right", $, D.gridColumns);
          Y !== _ ? (R((X) => ({ ...X, focusedCardIndex: Y })), q(Y), ee(`Moved to card ${Y + 1} of ${$}`)) : y.selectedIndex < c.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: y.selectedIndex + 1 }), R((X) => ({ ...X, focusArea: "tabs" })), setTimeout(() => ae(y.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (z?.data[_]) {
            O.preventDefault(), R((re) => ({
              ...re,
              selectedCardIndex: _
            }));
            const X = J(_);
            X.length > 0 ? (R((re) => ({
              ...re,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: X,
              selectedCardIndex: _
              // Ensure selection is maintained
            })), ee(`Card ${_ + 1} selected and navigation activated. ${X.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ee(`Card ${_ + 1} selected.`);
          }
          break;
        case " ":
          if (z?.data[_]) {
            O.preventDefault(), R((re) => ({
              ...re,
              selectedCardIndex: re.selectedCardIndex === _ ? -1 : _
            }));
            const X = D.selectedCardIndex === _;
            ee(`Card ${_ + 1} ${X ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (P) {
      case "ArrowUp":
      case "ArrowLeft":
        O.preventDefault();
        const F = Math.max(0, D.focusedCardElementIndex - 1);
        R((re) => ({ ...re, focusedCardElementIndex: F })), ie(_, F);
        break;
      case "ArrowDown":
      case "ArrowRight":
        O.preventDefault();
        const H = Math.min(D.cardElements.length - 1, D.focusedCardElementIndex + 1);
        R((re) => ({ ...re, focusedCardElementIndex: H })), ie(_, H);
        break;
      case "Enter":
        O.preventDefault();
        const Y = D.cardElements[D.focusedCardElementIndex];
        Y && (Y.element.click(), ee(`Activated ${Y.label}`));
        break;
      case " ":
        O.preventDefault();
        const X = D.cardElements[D.focusedCardElementIndex];
        if (X) {
          const re = new MouseEvent("dblclick", { bubbles: !0 });
          X.element.dispatchEvent(re), ee(`Double-clicked ${X.label}`);
        }
        break;
      case "Escape":
        O.preventDefault(), R((re) => ({
          ...re,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => q(_), 0), ee("Exited card navigation, returned to card level");
        break;
      case "Home":
        O.preventDefault(), D.cardElements.length > 0 && (R((re) => ({ ...re, focusedCardElementIndex: 0 })), ie(_, 0));
        break;
      case "End":
        if (O.preventDefault(), D.cardElements.length > 0) {
          const re = D.cardElements.length - 1;
          R((de) => ({ ...de, focusedCardElementIndex: re })), ie(_, re);
        }
        break;
    }
  }, [D, y.selectedIndex, c, K, q, ae, R, J, ie, ee]), Ee = xe((O) => {
    const _ = M.current[O], P = _?.parentElement;
    if (!_ || !P) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const z = _.getBoundingClientRect(), $ = P.getBoundingClientRect();
    z.left >= $.left && z.right <= $.right || (console.log("Tab not visible, scrolling into view (mobile)"), _.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Ie = xe((O, _) => {
    if (S !== "cards")
      return;
    const { key: P } = O;
    switch (P) {
      case "ArrowLeft":
        O.preventDefault();
        const z = _ > 0 ? _ - 1 : c.length - 1;
        W(z), R((Y) => ({ ...Y, focusedTabIndex: z })), M.current[z]?.focus(), Ee(z);
        break;
      case "ArrowRight":
        O.preventDefault();
        const $ = _ < c.length - 1 ? _ + 1 : 0;
        W($), R((Y) => ({ ...Y, focusedTabIndex: $ })), M.current[$]?.focus(), Ee($);
        break;
      case "ArrowDown":
        O.preventDefault();
        const F = c[y.selectedIndex];
        F && F.columns && F.columns.length > 0 ? (R((Y) => ({
          ...Y,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), ce(0)) : (R((Y) => ({
          ...Y,
          focusArea: "cards",
          focusedCardIndex: 0
        })), q(0));
        break;
      case "Home":
        O.preventDefault(), W(0), R((Y) => ({ ...Y, focusedTabIndex: 0 })), M.current[0]?.focus(), Ee(0);
        break;
      case "End":
        O.preventDefault();
        const H = c.length - 1;
        W(H), R((Y) => ({ ...Y, focusedTabIndex: H })), M.current[H]?.focus(), Ee(H);
        break;
      case "Enter":
      case " ":
        O.preventDefault(), W(_);
        break;
    }
  }, [c.length, W, S, q, R, Ee]), Ne = xe((O, _) => {
    if (S !== "cards")
      return;
    const { key: P } = O, z = c[y.selectedIndex];
    if (_ === 0 && !D.isSortControlsActive) {
      switch (P) {
        case "ArrowUp":
          O.preventDefault(), R((F) => ({
            ...F,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), ae(y.selectedIndex);
          break;
        case "ArrowDown":
          O.preventDefault(), z?.data && z.data.length > 0 && (R((F) => ({
            ...F,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), q(0));
          break;
        case "Enter":
        case " ":
          O.preventDefault();
          const $ = pe();
          if ($.length > 0) {
            R((H) => ({
              ...H,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), ce(1);
            const F = `Entered sort controls navigation mode. ${$.length} controls available. Use arrow keys to navigate between controls.`;
            ee(F);
          }
          break;
        case "Escape":
          O.preventDefault(), R((F) => ({
            ...F,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), ae(y.selectedIndex);
          break;
      }
      return;
    }
    if (D.isSortControlsActive) {
      const F = pe().length;
      switch (P) {
        case "ArrowLeft":
          O.preventDefault();
          const H = D.focusedSortControlIndex > 1 ? D.focusedSortControlIndex - 1 : F;
          R((X) => ({ ...X, focusedSortControlIndex: H })), ce(H);
          break;
        case "ArrowRight":
          O.preventDefault();
          const Y = D.focusedSortControlIndex < F ? D.focusedSortControlIndex + 1 : 1;
          R((X) => ({ ...X, focusedSortControlIndex: Y })), ce(Y);
          break;
        case "ArrowDown":
          if (O.preventDefault(), D.isSortControlsActive) {
            const X = D.focusedSortControlIndex < F ? D.focusedSortControlIndex + 1 : 1;
            R((re) => ({ ...re, focusedSortControlIndex: X })), ce(X);
          } else
            z?.data && z.data.length > 0 && (R((X) => ({
              ...X,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), q(0));
          break;
        case "ArrowUp":
          O.preventDefault(), R((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), ce(0);
          break;
        case "Escape":
          O.preventDefault(), R((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), ce(0);
          break;
      }
    }
  }, [S, c, y.selectedIndex, D.isSortControlsActive, D.focusedSortControlIndex, ce, ae, q, R, ee]);
  if (S === "cards") {
    const O = c[y.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${T || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": h,
            "aria-describedby": `${v || ""} ${g ? `${g}-navigation-help` : ""}`.trim(),
            "aria-orientation": x,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((_, P) => {
              const z = P === y.selectedIndex, $ = _.disabled || j;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${_.id}`,
                  "aria-controls": `panel-${_.id}`,
                  "aria-selected": z,
                  "aria-disabled": $,
                  tabIndex: z ? 0 : -1,
                  ref: (F) => {
                    M.current[P] = F;
                  },
                  onClick: () => W(P),
                  onKeyDown: (F) => Ie(F, P),
                  disabled: $,
                  className: [
                    "aria-tabs-datagrid__tab",
                    z ? "aria-tabs-datagrid__tab--selected" : "",
                    $ ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: _.label }),
                    y.tabLoadingStates[P] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    y.tabErrors[P] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                _.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      O && O.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: a ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          ul,
          {
            sortConfig: y.sortConfig || [],
            columns: O.columns.map((_) => ({ key: _.key, label: _.label })),
            onSortChange: (_) => {
              k({ type: "SET_SORT", payload: _ });
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
            tabIndex: D.focusArea === "sort-controls" ? 0 : -1,
            ref: (_) => {
              E.current[0] = _;
            },
            onKeyDown: (_) => Ne(_, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${O.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  Sr,
                  {
                    id: `card-sort-${O.id}`,
                    name: `card-sort-${O.id}`,
                    value: D.cardSortConfig ? `${D.cardSortConfig.key}-${D.cardSortConfig.direction}` : "",
                    onChange: (_) => ne(_.target.value),
                    className: "sort-select",
                    children: te(O.columns).map((_) => /* @__PURE__ */ n.jsx("option", { value: _.value, children: _.label }, _.value))
                  }
                )
              ] }),
              D.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  fe(D.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  xt,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => ne(""),
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
          ref: L,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${O?.label || "Data"} cards in ${D.gridRows} rows and ${D.gridColumns} columns`,
          "aria-rowcount": D.gridRows,
          "aria-colcount": D.gridColumns,
          id: `panel-${O?.id}`,
          "aria-labelledby": `tab-${O?.id}`,
          children: U(O?.data || []).map((_, P) => {
            const z = D.selectedCardIndex === P, $ = D.focusedCardIndex === P && D.focusArea === "cards", F = D.focusedCardIndex === P && D.focusArea === "card" && D.isCardNavigationActive, H = P === 0 && D.focusArea !== "cards", Y = $ || H, X = G(P, D.gridColumns);
            if (r.cardTemplate) {
              const ue = r.cardTemplate(_, O.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": X.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (he) => {
                        A.current[P] = he;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        $ ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        F ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": X.col + 1,
                      "aria-selected": z,
                      "aria-expanded": F,
                      "aria-description": F ? `Card navigation active. ${D.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: Y ? 0 : -1,
                      onClick: () => {
                        R((he) => ({
                          ...he,
                          selectedCardIndex: he.selectedCardIndex === P ? -1 : P
                        })), K(_);
                      },
                      onKeyDown: (he) => me(he, P),
                      onFocus: () => {
                        R((he) => he.isCardNavigationActive ? he : he.focusedCardIndex !== P || he.focusArea !== "cards" ? {
                          ...he,
                          focusedCardIndex: P,
                          focusArea: "cards"
                        } : he);
                      },
                      children: ue
                    }
                  )
                },
                `card-${P}`
              );
            }
            const re = ih(_, O.columns, N, w), de = [
              re.className || "",
              z ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              $ ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              F ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": X.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      $ ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      F ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": X.col + 1,
                    "aria-selected": z,
                    "aria-expanded": F,
                    onKeyDown: (ue) => {
                      ue.key === "Enter" && (ue.preventDefault(), R((he) => ({
                        ...he,
                        selectedCardIndex: P
                      }))), me(ue, P);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      ll,
                      {
                        ...re,
                        ref: (ue) => {
                          A.current[P] = ue;
                        },
                        className: de,
                        "aria-label": `${re["aria-label"] || re.heading}. ${F ? `Card navigation active with ${D.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: Y ? 0 : -1,
                        onClick: () => {
                          R((ue) => ({
                            ...ue,
                            selectedCardIndex: ue.selectedCardIndex === P ? -1 : P
                          })), K(_);
                        },
                        onKeyDown: (ue) => me(ue, P),
                        onFocus: () => {
                          D.isCardNavigationActive || R((ue) => ue.focusedCardIndex !== P || ue.focusArea !== "cards" ? {
                            ...ue,
                            focusedCardIndex: P,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ue);
                        }
                      }
                    )
                  }
                )
              },
              `card-${P}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: le,
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
  return S === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${T || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      ra,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: h,
        ariaDescription: v,
        orientation: x,
        id: g,
        disabled: j,
        selectedIndex: f,
        onTabChange: p,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${T || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      ra,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: h,
        ariaDescription: v,
        orientation: x,
        id: g,
        disabled: j,
        selectedIndex: f,
        onTabChange: p,
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, bl = (e) => {
  const t = oa.find((r) => r.value === e);
  return t ? t.icon : null;
}, lh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [o, a] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < o || s > a) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((o) => r.tags.includes(o)));
  }) : e,
  booleanRenderer: (e) => bl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, ch = (e) => Ja(e, [
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
    filter: (r) => r.filter((o) => o.discountedPrice !== void 0),
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
    filter: (r) => r.filter((o) => o.rating >= 4),
    sortConfig: [{ key: "rating", direction: "desc" }],
    ariaLabel: "Top Rated Products Grid",
    ariaDescription: "Highest rated products with 4+ star ratings"
  }
]), dh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.dateRange) {
      const [o, a] = t.dateRange;
      if (r.date < o || r.date > a) return !1;
    }
    if (t.amountRange) {
      const [o, a] = t.amountRange;
      if (Math.abs(r.amount) < o || Math.abs(r.amount) > a) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(r.type) || t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.pending !== void 0 && r.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => bl(e),
  getDataId: (e) => `financial-${e.id}`
}, uh = (e) => Ja(e, [
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
    filter: (r) => r.filter((o) => o.type === "credit"),
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
    filter: (r) => r.filter((o) => o.type === "debit"),
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
    filter: (r) => r.filter((o) => o.pending),
    ariaLabel: "Pending Transactions Grid",
    ariaDescription: "Transactions awaiting processing"
  }
]), fh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: lh,
    createTabs: ch
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: dh,
    createTabs: uh
  }
}, Js = (e, t) => {
  const r = fh[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
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
], ph = [
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
], hh = [
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
], mh = [
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
], Xs = [
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
], Ks = [
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
], Qs = [
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
], gh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, xh = () => [
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
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      fl,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected patient:", r),
        onAction: (r, o) => console.log("Patient action:", r, o),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  },
  {
    id: "appointments",
    label: "Appointments",
    data: ph,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      pl,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected appointment:", r),
        onAction: (r, o) => console.log("Appointment action:", r, o),
        status: e.status
      }
    )
  },
  {
    id: "medications",
    label: "Medications",
    data: hh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      hl,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected medication:", r),
        onAction: (r, o) => console.log("Medication action:", r, o),
        priority: e.priority
      }
    )
  },
  {
    id: "vitals",
    label: "Vital Signs",
    data: mh,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ml,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, o) => console.log("Vitals action:", r, o),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], bh = () => {
  const [e, t] = Oe("healthcare"), r = Fe(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Gp,
      tabPanels: xh(),
      data: yl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Js("ecommerce", Xs),
      data: Xs
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Js("financial", Ks),
      data: Ks
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: gh,
      tabPanels: Ja(Qs, [
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
              render: (a) => `$${a.value.toLocaleString()}`
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
              render: (a) => `$${a.value.toLocaleString()}`
            },
            {
              key: "lastContact",
              label: "Last Contact",
              render: (a) => a.lastContact.toLocaleDateString()
            }
          ],
          filter: (a) => a.filter((s) => s.isHotLead),
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
              render: (a) => `$${a.value.toLocaleString()}`
            },
            { key: "source", label: "Source" }
          ],
          filter: (a) => a.filter(
            (s) => ["contacted", "qualified"].includes(s.status)
          ),
          ariaLabel: "Active Pipeline Grid",
          ariaDescription: "Leads currently in the sales pipeline"
        }
      ]),
      data: Qs
    }
  }), []), o = r[e];
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
      }, children: Object.keys(r).map((a) => /* @__PURE__ */ n.jsx(
        xt,
        {
          variant: e === a ? "primary" : "secondary",
          onClick: () => t(a),
          style: {
            textTransform: "capitalize"
          },
          children: a
        },
        a
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
        }, children: o.title }),
        /* @__PURE__ */ n.jsx("p", { style: {
          color: "#64748b",
          marginBottom: "1rem"
        }, children: o.description }),
        /* @__PURE__ */ n.jsxs("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          fontSize: "0.9rem"
        }, children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "Data Records:" }),
            " ",
            o.data.length
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "Tab Panels:" }),
            " ",
            o.tabPanels.length
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
      ra,
      {
        dataConfig: o.dataConfig,
        tabPanels: o.tabPanels,
        ariaLabel: `${o.title} Data Grid`,
        ariaDescription: `Interactive data grid for ${o.description.toLowerCase()}`
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
}, Yy = bh, vl = (e) => /* @__PURE__ */ n.jsx($i, { ...e }), Zy = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: o = gn.TwoThirds,
  mainWrapperSize: a,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: d,
  navigation: c,
  search: u,
  account: f,
  organisation: p,
  logo: h,
  className: v,
  ...x
}) => {
  const g = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: p,
    logo: h,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(il, { ...s }),
    /* @__PURE__ */ n.jsx(Hi, { ...g }),
    /* @__PURE__ */ n.jsx(vl, { className: v, ...x, children: /* @__PURE__ */ n.jsx(Ei, { size: a, children: /* @__PURE__ */ n.jsx(on, { children: /* @__PURE__ */ n.jsxs(Zn, { width: o, children: [
      t && /* @__PURE__ */ n.jsx(Jt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(zi, { ...l })
  ] });
}, qy = ({
  children: e,
  title: t,
  pageHeadingProps: r,
  columnWidth: o = gn.TwoThirds,
  mainWrapperSize: a = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: d,
  serviceName: c,
  serviceHref: u,
  logo: f,
  className: p,
  ...h
}) => {
  const v = {
    service: {
      text: c,
      href: u
    },
    logo: f,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(il, { ...s }),
    /* @__PURE__ */ n.jsx(Hi, { ...v }),
    /* @__PURE__ */ n.jsxs(vl, { className: p, ...h, children: [
      d && /* @__PURE__ */ n.jsx(Yn, { ...d }),
      /* @__PURE__ */ n.jsx(Ei, { size: a, children: /* @__PURE__ */ n.jsx(on, { children: /* @__PURE__ */ n.jsxs(Zn, { width: o, children: [
        t && /* @__PURE__ */ n.jsx(Jt, { style: { marginTop: "3rem" }, size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(zi, { ...l })
  ] });
};
function yh(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: o = "nsvDrill" } = e, [a, s] = V.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = V.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(o) === "1");
  return V.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    a ? d.set(r, String(a)) : d.delete(r), d.set(o, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [a, i, t, r, o]), { selectedId: a, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const vh = ({
  className: e
}) => /* @__PURE__ */ n.jsx(
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
), wh = ({
  className: e
}) => /* @__PURE__ */ n.jsx(
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
), Er = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: o,
  element: a = "a",
  onClick: s,
  ...i
}) => {
  const l = Se("nhsuk-back-link", o), d = Se("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: a === "button" ? /* @__PURE__ */ n.jsx("button", { className: d, type: "button", onClick: s, ...i, children: c() }) : /* @__PURE__ */ n.jsx("a", { className: d, href: r, ...i, children: c() }) });
};
Er.displayName = "ForwardLink";
const Sh = ({
  show: e,
  label: t,
  contentHeaderLevel: r,
  detailActive: o,
  headerContext: a,
  backLabel: s,
  nextLabel: i,
  onBack: l,
  onForward: d,
  renderContentHeader: c,
  item: u,
  contentSubheader: f,
  tertiaryInlineActive: p
}) => {
  if (!e || !u) return null;
  const h = `h${r}`, v = t ? V.createElement(
    h,
    {
      style: {
        marginLeft: o ? 32 : 0,
        marginRight: o ? 32 : 0
      }
    },
    t
  ) : null, x = o ? /* @__PURE__ */ n.jsx(
    Yn,
    {
      element: "button",
      text: s,
      style: { marginRight: 16 },
      onClick: l
    }
  ) : void 0, g = p ? void 0 : /* @__PURE__ */ n.jsx(Er, { element: "button", text: i, onClick: d });
  if (c)
    return /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: c({
      item: u,
      detailActive: o,
      context: a,
      backLink: x,
      defaultHeading: v
    }) });
  const j = u && f ? typeof f == "function" ? f(u) : f : null;
  return /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
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
          x,
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
                v,
                j && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: j })
              ]
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: g })
  ] }) });
};
function _h({
  layout: e,
  items: t,
  getId: r,
  selectedId: o,
  isLoading: a,
  emptyState: s,
  renderItemContent: i,
  onSelect: l,
  orientation: d,
  initialFocus: c,
  onFocusChange: u,
  justSelectedId: f,
  listRef: p,
  onKeyDownList: h,
  navigationInstructions: v,
  controlledFocusedIndex: x
}) {
  const [g, j] = V.useState(
    () => c === "first" ? 0 : -1
  ), T = V.useRef(0);
  V.useEffect(() => {
    if (typeof x == "number" || g < 0 || !p?.current) return;
    const N = Array.from(
      p.current.querySelectorAll("[data-nav-item]")
    )[g];
    if (N) {
      document.activeElement !== N && N.focus(), T.current = g;
      const w = t[g];
      u?.(w ? r(w) : void 0, w, g);
    }
  }, [x, g, t, u, r, p]);
  const I = (C) => {
    if (h) return h(C);
    const N = d === "vertical" ? "ArrowDown" : "ArrowRight", w = d === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (C.key === N)
      C.preventDefault(), j((m) => Math.min(t.length - 1, m + 1));
    else if (C.key === w)
      C.preventDefault(), j((m) => Math.max(0, m - 1));
    else if (C.key === "Home")
      C.preventDefault(), j(0);
    else if (C.key === "End")
      C.preventDefault(), j(t.length - 1);
    else if (C.key === "Enter" || C.key === " ") {
      C.preventDefault();
      const m = t[g];
      m && !m.disabled && l(r(m), m, g);
    }
  };
  if (e === "cards")
    return /* @__PURE__ */ n.jsxs(
      "ul",
      {
        className: "nhs-navigation-split-view__cards",
        role: "listbox",
        "aria-activedescendant": o ? String(o) : void 0,
        children: [
          t.map((C, N) => {
            const w = r(C), m = w === o;
            return /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": m,
                children: /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    id: String(w),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": m || void 0,
                    "data-disabled": C.disabled || void 0,
                    disabled: C.disabled,
                    onClick: () => !C.disabled && l(w, C, N),
                    children: [
                      C.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: C.icon }),
                      /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: C.label }),
                      C.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: C.description }),
                      i?.(C),
                      C.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: C.badge })
                    ]
                  }
                )
              },
              String(w)
            );
          }),
          t.length === 0 && !a && /* @__PURE__ */ n.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__card-item",
              "aria-disabled": "true",
              children: s || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    );
  const S = "nsv-nav-instructions", b = V.useMemo(() => V.memo(
    ({
      item: C,
      idx: N,
      selected: w,
      focused: m
    }) => {
      const y = r(C), k = C.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: m ? 0 : -1,
        onClick: () => {
          T.current = N, l(y, C, N);
        },
        onKeyDown: (M) => {
          (M.key === "Enter" || M.key === " ") && (M.preventDefault(), T.current = N, l(y, C, N));
        }
      };
      return /* @__PURE__ */ n.jsxs(
        "li",
        {
          id: String(y),
          "data-nav-item": !0,
          className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
          role: "option",
          "aria-selected": w,
          "aria-current": w ? "true" : void 0,
          "data-selected": w || void 0,
          "data-disabled": C.disabled || void 0,
          ...k,
          children: [
            C.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: C.icon }),
            /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: C.label }),
              C.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: C.description }),
              i?.(C)
            ] }),
            C.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: C.badge })
          ]
        }
      );
    }
  ), [r, l, i]);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(
      "ul",
      {
        ref: p,
        className: "nhs-navigation-split-view__list",
        onKeyDown: I,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": S,
        "aria-activedescendant": o ? String(o) : void 0,
        children: [
          t.map((C, N) => /* @__PURE__ */ n.jsx(
            b,
            {
              item: C,
              idx: N,
              selected: r(C) === o,
              focused: /* @__PURE__ */ (() => {
                const w = typeof x == "number" ? x : g;
                return N === w || w === -1 && N === 0 && c === "first";
              })(),
              "data-just-selected": r(C) === f ? "true" : void 0
            },
            String(r(C))
          )),
          t.length === 0 && !a && /* @__PURE__ */ n.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__list-item",
              "aria-disabled": "true",
              children: s || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: S,
        style: {
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)"
        },
        children: v || "Use arrow keys to navigate, Enter to open."
      }
    )
  ] });
}
const kn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ei() {
  return typeof window > "u" ? kn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Xa() {
  const [e, t] = V.useState(ei());
  V.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ei());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = V.useCallback((s) => e >= kn[s], [e]), o = V.useCallback((s) => e < kn[s], [e]), a = V.useCallback((s, i) => e >= kn[s] && e < kn[i], [e]);
  return {
    width: e,
    up: r,
    down: o,
    between: a,
    /** Raw numeric values */
    values: kn
  };
}
function Jy(e) {
  const { width: t, values: r } = Xa();
  let o = e.base;
  const a = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of a) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (o = e[s]);
  }
  return o;
}
function kh(e, t, r) {
  const { up: o } = Xa(), [a, s] = V.useState(!1);
  V.useEffect(() => s(!0), []);
  const i = a && o("medium"), l = a && o("xlarge");
  let d;
  return e ? d = e : i ? d = "two-column" : d = "list", !e && t && r && l && (d = "three-column"), { effectiveLayout: d, hydrated: a, isAtLeastMedium: i, isAtLeastXlarge: l };
}
function Ch(e) {
  const {
    enabled: t,
    isAtLeastMedium: r,
    initiallyCollapsed: o,
    persist: a,
    storageKey: s,
    urlParam: i,
    onChange: l
  } = e, d = V.useMemo(() => {
    if (a && (a === "url" || a === "both") && typeof window < "u") {
      const h = new URLSearchParams(window.location.search).get(i);
      if (h === "1") return !0;
      if (h === "0") return !1;
    }
    if (a && (a === "localStorage" || a === "both") && typeof window < "u")
      try {
        const p = window.localStorage.getItem(s);
        if (p === "1") return !0;
        if (p === "0") return !1;
      } catch {
      }
    return o;
  }, [a, o, s, i]), [c, u] = V.useState(d);
  V.useEffect(() => {
    l?.(c);
  }, [c, l]);
  const f = V.useCallback(() => {
    t && r && u((p) => !p);
  }, [t, r]);
  return V.useEffect(() => {
    if (!(!a || typeof window > "u")) {
      if (a === "localStorage" || a === "both")
        try {
          window.localStorage.setItem(s, c ? "1" : "0");
        } catch {
        }
      if (a === "url" || a === "both") {
        const p = new URLSearchParams(window.location.search);
        p.set(i, c ? "1" : "0");
        const h = `${window.location.pathname}?${p.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", h);
      }
    }
  }, [c, a, s, i]), { collapsed: c, toggle: f };
}
function Nh(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: o,
    onSelectionChange: a,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: d,
    animated: c = !0,
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: p = !1,
    emptyState: h,
    a11y: v,
    className: x,
    getId: g = (ye) => ye.id,
    orientation: j = "vertical",
    autoEnableThirdColumn: T = !0,
    onDrillChange: I,
    navigationInstructions: S = "Use arrow keys to navigate, Enter to open.",
    initialFocus: b = "first",
    skipFocusOnSelect: C = !1,
    skipAnnouncements: N = !1,
    onFocusChange: w,
    syncUrl: m = !1,
    urlParamSelected: y = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: M = 0,
    lazySecondary: A = !1,
    navFooter: E,
    collapsibleNav: L = !1,
    navInitiallyCollapsed: D = !1,
    onNavCollapseChange: R,
    collapseToggleLabelShow: oe = "Show navigation",
    collapseToggleLabelHide: G = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: Q,
    persistNavCollapsed: W,
    navCollapsedStorageKey: K = "nsvCollapsed",
    navCollapsedUrlParam: q = "nsvCollapsed",
    autoContentHeader: J,
    contentHeaderLevel: le = 2,
    renderContentHeader: ee,
    contentSubheader: te,
    secondarySubheader: Z
  } = e, { effectiveLayout: ne, hydrated: fe, isAtLeastMedium: U } = kh(
    d,
    T,
    !!l
  ), ie = yh({
    enabled: m,
    paramSelected: y,
    paramDrill: k
  }), [ae, pe] = V.useState(
    () => ie.selectedId !== void 0 ? ie.selectedId : o
  ), ce = r !== void 0 ? r : ae, me = t.find((ye) => g(ye) === ce), [Ee, Ie] = V.useState(
    void 0
  );
  V.useEffect(() => {
    if (ce === void 0) return;
    Ie(ce);
    const ye = setTimeout(() => Ie(void 0), 220);
    return () => clearTimeout(ye);
  }, [ce]);
  const Ne = V.useRef(null), O = V.useRef(null), _ = V.useRef(null), P = V.useRef(null), [z, $] = V.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [F, H] = V.useState(() => "nav"), [Y, X] = V.useState(0), re = () => [
    P.current,
    O.current,
    _.current
  ].filter(Boolean), de = (ye) => {
    const Ae = re(), Ue = Math.max(0, Math.min(ye, Ae.length - 1));
    he(Ae[Ue]), X(Ue);
  }, ue = V.useCallback(
    (ye) => ye ? Array.from(ye.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (Ue) => !Ue.hasAttribute("disabled") && Ue.tabIndex !== -1
    ) : [],
    []
  ), he = V.useCallback((ye) => {
    if (ye)
      try {
        ye.focus({ preventScroll: !0 });
      } catch {
        ye.focus();
      }
  }, []), we = V.useCallback(
    (ye) => {
      const Ae = ue(O.current);
      if (!Ae.length) {
        he(O.current);
        return;
      }
      const Ue = Math.max(0, Math.min(ye, Ae.length - 1)), Je = Ae[Ue];
      Je.focus(), setTimeout(() => {
        document.activeElement !== Je && (Je.focus(), setTimeout(() => {
          document.activeElement !== Je && Je.click();
        }, 10));
      }, 10), $((st) => ({ ...st, contentIndex: Ue }));
      const yt = (st) => {
        st.key === "Escape" && (st.preventDefault(), st.stopPropagation(), he(O.current), Je.removeEventListener("keydown", yt));
      };
      Ae.forEach((st) => {
        const ct = st._escapeHandler;
        ct && st.removeEventListener("keydown", ct);
      }), Je._escapeHandler = yt, Je.addEventListener("keydown", yt);
    },
    [ue]
  ), be = V.useCallback(
    (ye) => {
      const Ae = ue(_.current);
      if (!Ae.length) {
        he(_.current);
        return;
      }
      const Ue = Math.max(0, Math.min(ye, Ae.length - 1)), Je = Ae[Ue];
      Je.focus(), setTimeout(() => {
        document.activeElement !== Je && (Je.focus(), setTimeout(() => {
          document.activeElement !== Je && Je.click();
        }, 10));
      }, 10), $((st) => ({ ...st, secondaryIndex: Ue }));
      const yt = (st) => {
        st.key === "Escape" && (st.preventDefault(), st.stopPropagation(), he(_.current), Je.removeEventListener("keydown", yt));
      };
      Ae.forEach((st) => {
        const ct = st._escapeHandler;
        ct && st.removeEventListener("keydown", ct);
      }), Je._escapeHandler = yt, Je.addEventListener("keydown", yt);
    },
    [ue]
  ), ze = (ye) => {
    if (ye.defaultPrevented) return;
    const Ae = ye.key, Ue = ye.target, Je = !!_e.current && _e.current.contains(Ue), yt = !!O.current && O.current.contains(Ue), st = !!_.current && _.current.contains(Ue), ct = !!_.current, dr = Ue === P.current || Ue === O.current || Ue === _.current, Mo = $e && (ne === "list" || ne === "cards"), ur = yt && !!Ue.closest(".nhs-navigation-split-view__header");
    if (F === "containers" && dr) {
      if (Ae === "ArrowRight") {
        ye.preventDefault();
        const Ze = re(), it = Math.min(Ze.length - 1, Y + 1);
        de(it);
        return;
      }
      if (Ae === "ArrowLeft") {
        ye.preventDefault();
        const Ze = Math.max(0, Y - 1);
        de(Ze);
        return;
      }
      if (Ae === "Home") {
        ye.preventDefault(), de(0);
        return;
      }
      if (Ae === "End") {
        ye.preventDefault(), de(re().length - 1);
        return;
      }
      if (Ae === "Enter" || Ae === " ") {
        if (ye.preventDefault(), Ue === P.current) {
          if (H("nav"), _e.current) {
            const Ze = Array.from(
              _e.current.querySelectorAll("[data-nav-item]")
            );
            (Ze[qe >= 0 ? qe : 0] || Ze[0])?.focus();
          }
        } else Ue === O.current ? (H("content"), we(z.contentIndex)) : Ue === _.current && (H("secondary"), be(z.secondaryIndex));
        return;
      }
      return;
    }
    if (Ae === "Escape") {
      if (F === "content" || F === "secondary") {
        if (yt || st) {
          if (ye.preventDefault(), H("nav"), _e.current) {
            const it = Array.from(
              _e.current.querySelectorAll("[data-nav-item]")
            )[qe >= 0 ? qe : 0];
            setTimeout(() => it?.focus(), 10);
          }
        } else if ((Ue === O.current || Ue === _.current) && (ye.preventDefault(), H("nav"), _e.current)) {
          const it = Array.from(
            _e.current.querySelectorAll("[data-nav-item]")
          )[qe >= 0 ? qe : 0];
          setTimeout(() => it?.focus(), 10);
        }
      }
      return;
    }
    if (Ae === "Enter" || Ae === " ") {
      if (Ue.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (Ue === O.current && F === "content") {
        ye.preventDefault(), ye.stopPropagation(), ue(O.current).length > 0 && setTimeout(() => {
          we(z.contentIndex);
        }, 50);
        return;
      }
      if (Ue === _.current && F === "secondary") {
        ye.preventDefault(), ye.stopPropagation(), ue(
          _.current
        ).length > 0 && setTimeout(() => {
          be(z.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Mo && ur && !dr && (Ae === "ArrowRight" || Ae === "ArrowLeft")) {
      const Ze = ue(O.current).filter(
        (it) => it.closest(".nhs-navigation-split-view__header")
      );
      if (Ze.length > 1) {
        const it = Ze.indexOf(Ue);
        if (it >= 0) {
          const is = (it + (Ae === "ArrowRight" ? 1 : -1) + Ze.length) % Ze.length;
          ye.preventDefault(), Ze[is].focus();
          return;
        }
      }
    }
    if (Ae === "ArrowRight") {
      if (Je || F === "nav") {
        ye.preventDefault(), H("content"), setTimeout(() => he(O.current), 10);
        return;
      }
      if (yt || F === "content") {
        ct && (ye.preventDefault(), H("secondary"), setTimeout(() => he(_.current), 10));
        return;
      }
    }
    if (Ae === "ArrowLeft") {
      if (st || F === "secondary") {
        ye.preventDefault(), H("content"), setTimeout(() => he(O.current), 10);
        return;
      }
      if (yt || F === "content") {
        if (ye.preventDefault(), H("nav"), _e.current) {
          const it = Array.from(
            _e.current.querySelectorAll("[data-nav-item]")
          )[qe >= 0 ? qe : 0];
          setTimeout(() => he(it), 10);
        }
        return;
      }
    }
    if (Ae === "Home" && !Je && (ye.preventDefault(), H("nav"), _e.current)) {
      const Ze = Array.from(
        _e.current.querySelectorAll("[data-nav-item]")
      ), it = Ze[qe >= 0 ? qe : 0] || Ze[0];
      setTimeout(() => he(it), 10);
    }
    if (Ae === "End") {
      const Ze = ct ? _.current : O.current;
      Ze && !Ze.contains(Ue) && (ye.preventDefault(), ct ? (H("secondary"), setTimeout(() => he(_.current), 10)) : (H("content"), setTimeout(() => he(O.current), 10)));
    }
    if (Ae === "ArrowDown" || Ae === "ArrowUp") {
      if (Ue === O.current && Ae === "ArrowDown") {
        ye.preventDefault(), ue(O.current).length > 0 && we(0);
        return;
      }
      if (Ue === _.current && Ae === "ArrowDown") {
        ye.preventDefault(), ue(
          _.current
        ).length > 0 && be(0);
        return;
      }
      if (yt) {
        const Ze = ue(O.current);
        if (Ze.length) {
          ye.preventDefault();
          const it = Ae === "ArrowDown" ? 1 : -1, Lt = (z.contentIndex + it + Ze.length) % Ze.length;
          we(Lt);
        }
      } else if (st) {
        const Ze = ue(_.current);
        if (Ze.length) {
          ye.preventDefault();
          const it = Ae === "ArrowDown" ? 1 : -1, Lt = (z.secondaryIndex + it + Ze.length) % Ze.length;
          be(Lt);
        }
      }
    }
  }, $e = !!me && (ne === "list" || ne === "cards"), Ke = V.useMemo(() => J === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : J === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : J === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: J.mobile !== void 0 ? J.mobile : !0,
    tablet: J.tablet || !1,
    desktop: J.desktop || !1
  }, [J]), ot = fe && U && ne !== "three-column", se = fe && ne === "three-column", ke = !!l, ge = ne === "three-column", [ve, Be] = V.useState(!1);
  V.useEffect(() => {
    ge && ve && Be(!1);
  }, [ge, ve]), V.useEffect(() => {
    ve && !ge && (H("secondary"), X(2), setTimeout(() => {
      he(_.current);
    }, 50));
  }, [ve, ge]), V.useEffect(() => {
    !ve && !ge && F === "secondary" && (H("content"), X(1), setTimeout(() => {
      he(O.current);
    }, 50));
  }, [ve, ge, F]);
  const Ve = !!me && ($e && Ke.mobile || !$e && ot && Ke.tablet || !$e && se && Ke.desktop) || ke && !ge, Ye = $e ? "mobile" : ot ? "tablet" : "desktop";
  V.useEffect(() => {
    if (!m) return;
    const ye = ne === "three-column";
    let Ae = !1;
    const Ue = () => {
      Ae || (ie.selectedId !== ce && ie.setSelectedId(ce), ie.drilledIn !== ye && ie.setDrilledIn(ye));
    };
    if (M && M > 0) {
      const Je = setTimeout(Ue, M);
      return () => {
        Ae = !0, clearTimeout(Je);
      };
    } else
      Ue();
  }, [m, ie, ce, ne, M]), V.useEffect(() => {
    if (!m) return;
    const ye = () => {
      const Ae = new URLSearchParams(window.location.search), Ue = Ae.get(y);
      Ae.get(k), pe(Ue === null ? void 0 : Ue);
    };
    return window.addEventListener("popstate", ye), () => window.removeEventListener("popstate", ye);
  }, [
    m,
    y,
    k,
    d,
    l
  ]);
  const nt = V.useRef(0), Ce = V.useRef(
    null
  ), Le = V.useCallback(
    (ye, Ae) => {
      ye !== ce && (r === void 0 && pe(ye), a?.(ye, Ae));
    },
    [r, a, ce]
  );
  V.useEffect(() => {
    if (!C && $e && O.current) {
      const ye = setTimeout(() => he(O.current), 30);
      return () => clearTimeout(ye);
    }
  }, [$e, ce, C]);
  const _e = V.useRef(null), [qe, lt] = V.useState(
    () => b === "first" ? 0 : -1
  );
  V.useEffect(() => {
    if (qe < 0 || !_e.current) return;
    const Ae = Array.from(
      _e.current.querySelectorAll("[data-nav-item]")
    )[qe];
    if (Ae) {
      document.activeElement !== Ae && he(Ae), nt.current = qe;
      const Ue = t[qe];
      w?.(
        Ue ? g(Ue) : void 0,
        Ue,
        qe
      );
    }
  }, [qe, t, w, g]);
  const jt = (ye) => {
    const Ae = j === "vertical" ? "ArrowDown" : "ArrowRight", Ue = j === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ye.key === "ArrowRight" && j === "vertical") {
      ye.preventDefault(), ve ? (H("secondary"), setTimeout(() => {
        he(_.current);
      }, 10)) : (H("content"), setTimeout(() => {
        he(O.current);
      }, 10));
      return;
    }
    if (ye.key === Ae)
      ye.preventDefault(), lt((Je) => Math.min(t.length - 1, Je + 1));
    else if (ye.key === Ue)
      ye.preventDefault(), lt((Je) => Math.max(0, Je - 1));
    else if (ye.key === "Home")
      ye.preventDefault(), lt(0);
    else if (ye.key === "End")
      ye.preventDefault(), lt(t.length - 1);
    else if (ye.key === "Enter" || ye.key === " ") {
      ye.preventDefault();
      const Je = t[qe];
      Je && !Je.disabled && Le(g(Je), Je);
    } else if (ye.key.length === 1 && /[a-z0-9]/i.test(ye.key)) {
      Ce.current || (Ce.current = { buffer: "", last: 0 });
      const Je = Date.now(), yt = 700, st = ye.key.toLowerCase();
      Je - Ce.current.last > yt ? Ce.current.buffer = st : Ce.current.buffer += st, Ce.current.last = Je;
      let ct = Ce.current.buffer;
      const dr = ct.split("").every((Lt) => Lt === ct[0]), Mo = t.map(
        (Lt) => String(Lt.label || "").toLowerCase()
      );
      let ur = 0;
      qe >= 0 && (ur = (qe + 1) % t.length);
      let Ze;
      const it = (Lt, is) => {
        const ls = t.length;
        for (let Io = 0; Io < ls; Io++) {
          const Do = (ur + Io) % ls;
          if (!t[Do].disabled && Mo[Do].startsWith(Lt))
            return Do;
        }
      };
      dr && ct.length > 1 ? Ze = it(ct[0]) : (Ze = it(ct), Ze === void 0 && ct.length > 1 && (Ze = it(ct[ct.length - 1]), Ze !== void 0 && Ce.current && (Ce.current.buffer = ct[ct.length - 1]))), Ze !== void 0 && lt(Ze);
    }
  }, { collapsed: De, toggle: vt } = Ch({
    enabled: L,
    isAtLeastMedium: U,
    initiallyCollapsed: D,
    persist: W,
    storageKey: K,
    urlParam: q,
    onChange: R
  }), Ct = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    $e ? "nhs-navigation-split-view--detail-active" : "",
    ne === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    L && U && De ? "nhs-navigation-split-view--nav-collapsed" : "",
    x
  ].filter(Boolean).join(" "), Sn = V.useRef(null);
  V.useEffect(() => {
    if (!N && Sn.current) {
      const ye = me ? `Selected ${me.label}` : "Selection cleared";
      Sn.current.textContent = ye;
    }
  }, [me, N]), V.useEffect(() => {
    if (!$e && ce == null && _e.current) {
      const Ae = _e.current.querySelectorAll("[data-nav-item]")[nt.current];
      he(Ae);
    }
  }, [$e, ce]);
  const It = ne === "three-column", [jo, qc] = V.useState(!1);
  V.useEffect(() => {
    It && !jo && qc(!0);
  }, [It, jo]);
  const ss = V.useRef(It);
  return V.useEffect(() => {
    ss.current !== It && (I?.(It), ss.current = It);
  }, [It, I]), /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: Ne,
      className: Ct,
      "aria-label": v?.rootLabel,
      "data-layout": ne,
      onKeyDown: ze,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": $e || void 0,
            style: { transform: $e ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: P,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": v?.navigationLabel || "Items",
                  "data-collapsed": De || void 0,
                  tabIndex: 0,
                  children: [
                    L && U && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: vt,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": De ? oe : G,
                        title: De ? oe : G,
                        children: De ? B || /* @__PURE__ */ n.jsx(wh, {}) : Q || /* @__PURE__ */ n.jsx(vh, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ n.jsx(
                      _h,
                      {
                        layout: ne === "cards" ? "cards" : "list",
                        items: t,
                        getId: g,
                        selectedId: ce,
                        isLoading: p,
                        emptyState: h,
                        renderItemContent: s,
                        onSelect: (ye, Ae, Ue) => {
                          nt.current = Ue, Le(ye, Ae);
                        },
                        orientation: j,
                        initialFocus: b,
                        onFocusChange: w,
                        justSelectedId: Ee,
                        listRef: _e,
                        onKeyDownList: jt,
                        navigationInstructions: S,
                        controlledFocusedIndex: qe
                      }
                    ) }),
                    E && /* @__PURE__ */ n.jsx(
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
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: O,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": v?.contentLabel || "Content",
                  "data-has-selection": !!me || void 0,
                  tabIndex: 0,
                  style: {
                    display: ve && !ge ? "none" : void 0
                  },
                  children: [
                    Ve && /* @__PURE__ */ n.jsx(
                      Sh,
                      {
                        show: Ve,
                        label: me ? me.label : void 0,
                        contentHeaderLevel: le,
                        detailActive: $e,
                        headerContext: Ye,
                        backLabel: u,
                        nextLabel: f,
                        onBack: () => Le(void 0, void 0),
                        onForward: () => Be(!0),
                        renderContentHeader: ee,
                        item: me,
                        contentSubheader: te,
                        tertiaryInlineActive: ve
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(me)
                      }
                    )
                  ]
                }
              ),
              ne === "three-column" && (!A || jo) || ve && !ge ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: _,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": v?.secondaryContentLabel || "Secondary",
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
                        ve && !ge && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                                  /* @__PURE__ */ n.jsx(
                                    Yn,
                                    {
                                      element: "button",
                                      text: u,
                                      style: { marginRight: 16 },
                                      onClick: () => Be(!1)
                                    }
                                  ),
                                  /* @__PURE__ */ n.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: me && typeof me == "object" && "label" in me ? me.label : String(me) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        me && Z && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof Z == "function" ? Z(me) : Z
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(me) })
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
            ref: Sn,
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
            children: It ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Nh.displayName = "NavigationSplitView";
function jh({
  steps: e,
  currentIndex: t,
  onNavigate: r,
  renderCard: o,
  className: a,
  ariaLabel: s = "Steps"
}) {
  const i = V.useRef(null), l = (d) => {
    if (e?.length)
      if (d.key === "ArrowLeft" || d.key === "ArrowUp") {
        d.preventDefault();
        const c = Math.max(0, t - 1);
        c !== t && r?.(c);
      } else if (d.key === "ArrowRight" || d.key === "ArrowDown") {
        d.preventDefault();
        const c = Math.min(e.length - 1, t + 1);
        c !== t && r?.(c);
      } else d.key === "Home" ? (d.preventDefault(), r?.(0)) : d.key === "End" && (d.preventDefault(), r?.(e.length - 1));
  };
  return /* @__PURE__ */ n.jsx("div", { className: a, "aria-label": s, role: "region", children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsfdp-cards-viewport",
      role: "group",
      "aria-roledescription": "steps",
      tabIndex: 0,
      onKeyDown: l,
      children: /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: i,
          className: "nhsfdp-cards-track",
          style: { transform: `translate3d(-${Math.max(0, t) * 100}%, 0, 0)` },
          children: e.map((d, c) => {
            const u = c === t;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "nhsfdp-pane mobile-pane" + (u ? " is-current" : ""),
                role: "group",
                "aria-roledescription": "step",
                "aria-label": (d.label ?? `Step ${c + 1}`).toString(),
                "aria-hidden": !u,
                onClick: (f) => {
                  if (f.defaultPrevented) return;
                  const p = f.target;
                  p && p.closest(
                    'button, a, input, select, textarea, [role="button"], [role="link"], [contenteditable="true"], [data-prevent-card-click]'
                  ) || r?.(c);
                },
                children: o(d, c, u)
              },
              c
            );
          })
        }
      )
    }
  ) });
}
function Mh({
  steps: e,
  currentIndex: t,
  onNavigate: r,
  renderLabel: o,
  ariaLabel: a = "Breadcrumbs",
  className: s,
  style: i
}) {
  const l = e.map((c, u) => {
    const f = u === t, p = u < t, h = o ? o(c, u) : c.label ?? `Step ${u + 1}`;
    return {
      text: String(h),
      href: p ? "#" : void 0,
      active: f,
      attributes: p ? { "data-index": String(u) } : void 0
    };
  }), d = (c) => {
    const f = c.target.closest("a.nhsuk-breadcrumb__link, a.nhsuk-breadcrumb__backlink");
    if (!f) return;
    if (f.classList.contains("nhsuk-breadcrumb__backlink")) {
      c.preventDefault();
      const h = Math.max(0, t - 1);
      h !== t && r?.(h);
      return;
    }
    const p = f.getAttribute("data-index");
    if (p != null) {
      c.preventDefault();
      const h = parseInt(p, 10);
      Number.isNaN(h) || r?.(h);
    }
  };
  return /* @__PURE__ */ n.jsx("div", { style: i, onClick: d, children: /* @__PURE__ */ n.jsx(sl, { labelText: a, classes: s, items: l }) });
}
function Ih(e) {
  const { up: t } = Xa(), [r, o] = V.useState(!1);
  V.useEffect(() => o(!0), []);
  const a = r && t("medium") && !t("xlarge"), s = r && t("xlarge"), i = s ? "desktop" : a ? "tablet" : "mobile", l = V.useMemo(() => {
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
  return { hydrated: r, breakpoint: i, isTablet: a, isDesktop: s, paneConfig: l };
}
function Xy(e) {
  const {
    steps: t,
    currentStepId: r,
    defaultStepId: o,
    onStepChange: a,
    layoutForStep: s,
    renderStepCard: i,
    renderStepContent: l,
    renderSecondaryContent: d,
    renderSecondaryNav: c,
    renderBreadcrumbs: u,
    className: f,
    getId: p = (se) => se.id,
    enableTabletGrid: h = !1,
    isStepComplete: v,
    showMobileControls: x,
    currentSectionId: g,
    defaultSectionIdForStep: j,
    onSectionChange: T
  } = e, I = typeof window < "u" && !!window.__WSV_DEBUG_FOCUS || !1, S = (...se) => {
    I && console.log("[WorkflowSplitView]", ...se);
  }, b = () => {
    if (typeof document > "u") return {};
    const se = document.activeElement, ke = se?.getAttribute?.("role");
    return {
      activeTag: se?.tagName,
      activeId: se?.id,
      activeRole: ke,
      activeClasses: se?.className
    };
  }, [C, N] = Oe(
    o ?? (t[0] ? p(t[0]) : void 0)
  ), w = r ?? C, m = t.findIndex((se) => p(se) === w), y = m >= 0 ? t[m] : t[0], [k, M] = Oe({}), A = (se) => se ? String(p(se)) : "", E = xe((se) => {
    if (!se) return;
    try {
      const ge = j?.(se);
      if (ge !== void 0) return ge;
    } catch {
    }
    const ke = se.sections && se.sections[0];
    return ke ? ke.id : void 0;
  }, [j]), L = g ?? k[A(y)] ?? E(y), D = y && y.sections ? y.sections : void 0, R = D?.find((se) => se.id === L), oe = (se) => {
    if (y) {
      const ke = A(y);
      g === void 0 && M((ge) => ({ ...ge, [ke]: se })), T?.(se, D?.find((ge) => ge.id === se), y);
    }
  }, G = (se) => {
    S("navigateTo", String(se)), r === void 0 && N(se);
    const ke = t.find((ge) => p(ge) === se);
    ke && a && a(se, ke);
  }, B = u ? u({ steps: t, current: y, onNavigate: G }) : /* @__PURE__ */ n.jsx(
    Mh,
    {
      steps: t,
      currentIndex: Math.max(0, m),
      onNavigate: (se) => {
        const ke = t[se];
        ke && G(p(ke));
      }
    }
  ), { hydrated: Q, breakpoint: W, paneConfig: K } = Ih({
    step: y,
    index: m,
    layoutForStep: s
  }), q = r !== void 0 || o !== void 0 && t.length > 0 && t[0] && o !== p(t[0]), J = Ge(null), le = Ge(null), ee = Ge(null), te = Ge(null), Z = Ge(null), ne = Ge(0), fe = Ge(!1), U = Ge(!1), ie = Ge(null), [ae, pe] = Oe("nav"), ce = Ge("nav");
  Xe(() => {
    ce.current = ae, ae !== "nav" && _(!1), ae !== "content" && z(!1), ae !== "secondary" && F(!1);
  }, [ae]);
  const [me, Ee] = Oe(0), [Ie, Ne] = Oe(
    () => Math.max(0, m)
  ), [O, _] = Oe(!1), [P, z] = Oe(!1), [$, F] = Oe(!1), H = xe((se) => {
    if (se) {
      try {
        se.focus({ preventScroll: !0 });
      } catch {
        se.focus();
      }
      S("focusEl", { to: se.tagName, id: se.id, class: se.className });
    }
  }, []), Y = xe(() => {
    const se = () => ee.current;
    let ke = 0;
    const ge = () => {
      const ve = se();
      ve && document.activeElement !== ve && H(ve), ke += 1, ke < 6 && document.activeElement !== se() && setTimeout(ge, 0);
    };
    S("focusContentSoon:start", { attempts: ke }), ge(), typeof queueMicrotask == "function" && queueMicrotask(ge), requestAnimationFrame(ge);
  }, [H]), X = xe((se) => se ? Array.from(se.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
    (ge) => !ge.hasAttribute("disabled") && ge.tabIndex !== -1
  ) : [], []), re = () => [
    le.current,
    ee.current,
    te.current
  ].filter(Boolean), de = (se, ke) => {
    if (!se) return;
    const ge = typeof document < "u" ? document.activeElement : null;
    if (ge && se.contains(ge))
      try {
        ge.blur(), S("blurActiveIfInside", { label: ke, root: se.getAttribute("aria-label") || se.tagName });
      } catch {
      }
  }, ue = () => {
    const se = typeof document < "u" ? document.activeElement : null;
    if (se && le.current && le.current.contains(se))
      try {
        se.blur(), S("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
  }, he = (se) => {
    const ke = re(), ge = Math.max(0, Math.min(se, ke.length - 1));
    S("focusContainerByIndex", { idx: se, clamped: ge }), H(ke[ge]), Ee(ge);
  }, we = xe(
    (se) => {
      let ke = 0;
      const ge = se ?? Ie, ve = () => {
        const Te = Z.current;
        if (!Te) return null;
        const Ve = Array.from(Te.querySelectorAll("[data-nav-item]"));
        return Ve[ge] || Ve[0] || null;
      }, Be = () => {
        if (ce.current !== "nav") {
          S("focusNavItemSoon: abort (mode changed)", { mode: ce.current });
          return;
        }
        const Te = ve();
        Te && document.activeElement !== Te && H(Te), ke += 1, ke < 6 && document.activeElement !== Te && setTimeout(Be, 0);
      };
      S("focusNavItemSoon:start", { index: ge, ...b() }), Be(), typeof queueMicrotask == "function" && queueMicrotask(Be), requestAnimationFrame(Be);
    },
    [H, Ie]
  );
  Xe(() => {
    if (!Q) return;
    W === "desktop" || h && W === "tablet" ? q ? (pe("nav"), Ee(0), S("init: grid preselected → mode=nav", { containerIndex: 0 })) : (pe("containers"), Ee(0), S("init: grid default → mode=containers", { containerIndex: 0 })) : (pe("nav"), S("init: non-grid → mode=nav"));
  }, [Q, W, q, h]), Xe(() => () => {
    ie.current != null && (clearTimeout(ie.current), ie.current = null, S("cleanup: cleared nav bootstrap timeout"));
  }, []), Xe(() => {
    const se = Math.max(0, m);
    Ne(se), S("sync navFocusedIndex with currentIndex", { currentIndex: m, navFocusedIndex: se });
  }, [m]), Xe(() => {
    S("paneFocusMode →", ae, b());
  }, [ae]);
  const be = (se) => {
    if (!(Q && (W === "desktop" || h && W === "tablet"))) return;
    const ge = se.key, ve = se.target, Be = ve.tagName.toLowerCase(), Te = Be === "input" || Be === "textarea" || Be === "select", Ve = ve.getAttribute("role"), Ye = Ve === "textbox" || Ve === "searchbox" || Ve === "combobox", nt = ve.getAttribute("contenteditable"), Ce = Te || Ye || nt && nt !== "false";
    if (S("onRootKeyDown", { key: ge, tag: Be, role: Ve, isEditable: Ce, paneFocusMode: ae, containerIndex: me, ...b() }), Ce && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(ge))
      return;
    const Le = !!Z.current && Z.current.contains(ve), _e = !!ee.current && ee.current.contains(ve), qe = !!te.current && te.current.contains(ve), lt = ve === le.current || ve === ee.current || ve === te.current, jt = !!te.current;
    if (lt) {
      if (ge === "ArrowLeft" && ve === ee.current) {
        se.preventDefault(), S("container: ArrowLeft on content container → nav item"), pe("nav"), de(ee.current, "from-content"), ne.current = Ie, we(Ie);
        return;
      }
      if (ge === "ArrowRight" && ve === ee.current && jt) {
        se.preventDefault(), S("container: ArrowRight on content container → secondary"), pe("secondary"), de(ee.current, "from-content"), z(!1), setTimeout(() => H(te.current), 10);
        return;
      }
      if (ge === "ArrowRight" && ve === le.current) {
        se.preventDefault(), S("container: ArrowRight on nav container → content"), pe("content"), de(le.current, "from-nav"), _(!1), Y();
        return;
      }
      if (ge === "ArrowLeft" && ve === te.current) {
        se.preventDefault(), S("container: ArrowLeft on secondary container → content"), pe("content"), de(te.current, "from-secondary"), F(!1), Y();
        return;
      }
      if (ge === "ArrowRight") {
        se.preventDefault(), S("container: ArrowRight → next container"), de(ve, "container-roving"), ve === le.current && _(!1), ve === ee.current && z(!1), ve === te.current && F(!1), he(me + 1);
        return;
      }
      if (ge === "ArrowLeft") {
        se.preventDefault(), S("container: ArrowLeft → prev container"), de(ve, "container-roving"), ve === le.current && _(!1), ve === ee.current && z(!1), ve === te.current && F(!1), he(me - 1);
        return;
      }
      if (ge === "Home") {
        se.preventDefault(), S("container: Home → first container"), de(ve, "container-roving"), ve === le.current && _(!1), ve === ee.current && z(!1), ve === te.current && F(!1), he(0);
        return;
      }
      if (ge === "End") {
        se.preventDefault(), S("container: End → last container"), de(ve, "container-roving"), ve === le.current && _(!1), ve === ee.current && z(!1), ve === te.current && F(!1), he(re().length - 1);
        return;
      }
      if (ge === "Enter" || ge === " ") {
        if (se.preventDefault(), ve === le.current)
          pe("nav"), S("container: Enter/Space on nav → focus nav item", { navFocusedIndex: Ie }), ne.current = Ie, U.current = !0, we(Ie);
        else if (ve === ee.current) {
          pe("content"), de(ee.current, "descend-content"), z(!1);
          const De = X(ee.current);
          S("container: Enter/Space on content → focus first focusable", { count: De.length }), (De[0] || ee.current)?.focus();
        } else if (ve === te.current) {
          pe("secondary"), de(te.current, "descend-secondary"), F(!1);
          const De = X(te.current);
          S("container: Enter/Space on secondary → focus first focusable", { count: De.length }), (De[0] || te.current)?.focus();
        }
        return;
      }
    }
    if (ge === "Escape") {
      if (_e || qe) {
        se.preventDefault(), pe("containers"), S("Escape: from", _e ? "content" : "secondary", "→ containers (focus container)"), _e && de(ee.current, "escape-ascend"), qe && de(te.current, "escape-ascend"), _e && setTimeout(() => H(ee.current), 10), qe && setTimeout(() => H(te.current), 10);
        return;
      }
      if (Le) {
        se.preventDefault(), pe("containers"), S("Escape: from nav → containers (focus nav container)"), ue(), H(le.current);
        return;
      }
      if (lt) {
        se.preventDefault(), pe("containers"), S("Escape: on container (stay in containers)");
        return;
      }
    }
    if (ge === "Enter" || ge === " ") {
      if (ve === ee.current && ae === "content") {
        se.preventDefault(), de(ee.current, "descend-content");
        const De = X(ee.current);
        S("Enter/Space on content container in content mode"), (De[0] || ee.current)?.focus();
        return;
      }
      if (ve === te.current && ae === "secondary") {
        se.preventDefault(), de(te.current, "descend-secondary");
        const De = X(te.current);
        S("Enter/Space on secondary container in secondary mode"), (De[0] || te.current)?.focus();
        return;
      }
    }
    if (ge === "ArrowRight") {
      if (Le || ae === "nav") {
        se.preventDefault(), pe("content"), S("ArrowRight: from nav → content (focus content)"), de(le.current, "from-nav"), _(!1), Y();
        return;
      }
      if (_e || ae === "content") {
        jt && (se.preventDefault(), pe("secondary"), S("ArrowRight: from content → secondary (focus secondary)"), de(ee.current, "from-content"), z(!1), setTimeout(() => H(te.current), 10));
        return;
      }
    }
    if (ge === "ArrowLeft") {
      if (qe || ae === "secondary") {
        se.preventDefault(), S("ArrowLeft: from secondary → content (focus content)"), de(te.current, "from-secondary"), F(!1), Y();
        return;
      }
      if (_e || ae === "content") {
        se.preventDefault(), pe("nav"), S("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex: Ie }), ne.current = Ie, de(ee.current, "from-content"), z(!1), we(Ie);
        return;
      }
    }
    if ((ge === "Enter" || ge === " ") && (Le || ae === "nav")) {
      se.preventDefault();
      const De = Z.current, vt = De ? Array.from(De.querySelectorAll("[data-nav-item]")) : [];
      let Ct = ne.current ?? Ie;
      if (vt.length) {
        const Sn = document.activeElement, It = Sn ? vt.indexOf(Sn) : -1;
        It >= 0 && (Ct = It);
      }
      Ct = Math.max(0, Math.min(Ct, vt.length - 1)), Ne(Ct), ne.current = Ct, S("Root: Enter/Space activate from nav context", { idx: Ct }), G(p(t[Ct])), pe("content"), ce.current = "content", fe.current = !0, ue(), Y();
      return;
    }
  }, ze = () => {
    const se = () => {
      fe.current = !1, U.current = !1;
    }, ke = (Te) => {
      if (!Z.current) return;
      const Ve = Array.from(Z.current.querySelectorAll("[data-nav-item]"));
      if (Ve.length) {
        if (Te.key === "ArrowDown") {
          Te.preventDefault(), Te.stopPropagation(), U.current = !1, pe("nav");
          const Ye = ne.current ?? Ie, nt = Math.min(Ve.length - 1, Ye + 1);
          Ne(nt), ne.current = nt, we(nt), S("PrimaryNav: ArrowDown", { from: Ye, to: nt });
        } else if (Te.key === "ArrowUp") {
          Te.preventDefault(), Te.stopPropagation(), U.current = !1, pe("nav");
          const Ye = ne.current ?? Ie, nt = Math.max(0, Ye - 1);
          Ne(nt), ne.current = nt, we(nt), S("PrimaryNav: ArrowUp", { from: Ye, to: nt });
        } else if (Te.key === "Home") {
          Te.preventDefault(), Te.stopPropagation(), U.current = !1;
          const Ye = 0;
          Ne(Ye), ne.current = Ye, we(Ye), S("PrimaryNav: Home", { to: Ye });
        } else if (Te.key === "End") {
          Te.preventDefault(), Te.stopPropagation(), U.current = !1;
          const Ye = Ve.length - 1;
          Ne(Ye), ne.current = Ye, we(Ye), S("PrimaryNav: End", { to: Ye });
        }
      }
    }, ge = (Te) => {
    }, ve = (Te) => {
      if (Te.key !== "Enter" && Te.key !== " " || !Z.current) return;
      const Ve = Array.from(Z.current.querySelectorAll("[data-nav-item]"));
      if (!Ve.length) return;
      Te.preventDefault();
      let Ye = -1;
      const Ce = Te.target?.closest?.("[data-nav-item]");
      Ce && (Ye = Ve.indexOf(Ce)), Ye < 0 && (Ye = ne.current ?? Ie), Ye = Math.max(0, Math.min(Ye, Ve.length - 1)), Ne(Ye), ne.current = Ye, S("PrimaryNav: Enter/Space activate (capture)", { idx: Ye }), G(p(t[Ye])), pe("content"), ce.current = "content", fe.current = !0, ie.current != null && (clearTimeout(ie.current), ie.current = null), ue(), Y();
    }, Be = (Te) => {
      if (Te.defaultPrevented) return;
      fe.current = !1;
      const Ve = Te.target;
      if (!Ve) return;
      const Ye = Ve.closest("[data-nav-item]");
      if (!Ye || !Z.current || !Z.current.contains(Ye)) return;
      const Ce = Array.from(Z.current.querySelectorAll("[data-nav-item]")).indexOf(Ye);
      Ce < 0 || (Ne(Ce), ne.current = Ce, S("PrimaryNav: click delegate activate", { idx: Ce }), G(p(t[Ce])), pe("content"), ue(), ie.current != null && (clearTimeout(ie.current), ie.current = null), Y());
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: Z,
        className: "nhsfdp-primary-nav",
        role: "listbox",
        "aria-activedescendant": String(p(t[Math.max(0, Ie)])),
        onKeyDownCapture: ve,
        onKeyDown: ke,
        onKeyUp: ge,
        onPointerDown: se,
        onMouseDown: se,
        onClick: Be,
        children: t.map((Te, Ve) => {
          const Ye = p(Te), nt = Ve === m, Ce = ae === "nav" && Ve === Ie;
          return /* @__PURE__ */ n.jsx("li", { id: String(Ye), role: "option", "aria-selected": nt, children: /* @__PURE__ */ n.jsx(
            "button",
            {
              "data-nav-item": !0,
              tabIndex: Ce ? 0 : -1,
              type: "button",
              className: "nhsfdp-primary-nav__item" + (nt ? " is-current" : "") + (Ce ? " is-focused" : ""),
              "aria-current": nt ? "step" : void 0,
              onPointerDown: se,
              onMouseDown: se,
              onKeyDown: (Le) => {
                if (Le.key === "Enter" || Le.key === " ") {
                  if (Le.preventDefault(), U.current) {
                    U.current = !1;
                    return;
                  }
                  ne.current = Ve, fe.current = !0, S("NavItem: onKeyDown activate", { i: Ve, id: String(p(t[Ve])) }), G(p(t[Ve])), pe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), ue(), Y();
                }
              },
              onKeyUp: (Le) => {
                if (Le.key === "Enter" || Le.key === " ") {
                  if (U.current) {
                    U.current = !1;
                    return;
                  }
                  ne.current = Ve, S("NavItem: onKeyUp activate (fallback)", { i: Ve, id: String(p(t[Ve])) }), G(p(t[Ve])), pe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), ue(), Y();
                }
              },
              onClick: (Le) => {
                if (fe.current) {
                  fe.current = !1, Le.preventDefault(), Le.stopPropagation(), S("NavItem: ignored synthetic click after keyboard activation", { i: Ve });
                  return;
                }
                Ne(Ve), ne.current = Ve, S("NavItem: onClick select", { i: Ve, id: String(Ye) }), G(Ye), pe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), ue(), Y();
              },
              children: Te.label
            }
          ) }, String(Ye));
        })
      }
    );
  }, $e = () => {
    const se = Math.max(0, m), ke = se > 0, ge = se < t.length - 1, ve = x ? x(y) : v ? v(y) : !0;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
      W === "tablet" ? B : null,
      ve && /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        ke ? /* @__PURE__ */ n.jsx(
          Yn,
          {
            element: "button",
            text: "Back",
            onClick: () => {
              const Be = t[se - 1];
              Be && G(p(Be));
            }
          }
        ) : (
          // Keep space to avoid layout shift when back is not available
          /* @__PURE__ */ n.jsx(Yn, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        ge ? /* @__PURE__ */ n.jsx(
          Er,
          {
            element: "button",
            text: "Next",
            onClick: () => {
              const Be = t[se + 1];
              Be && G(p(Be));
            }
          }
        ) : (
          // Keep space to avoid layout shift when next is not available
          /* @__PURE__ */ n.jsx(Er, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        jh,
        {
          steps: t,
          currentIndex: se,
          onNavigate: (Be) => {
            const Te = t[Be];
            Te && G(p(Te));
          },
          renderCard: (Be, Te, Ve) => i ? i(Be) : l(Be)
        }
      )
    ] });
  }, Ke = (se) => /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsfdp-workflow-grid panes-" + (se.panes ?? 2),
      onKeyDown: be,
      ref: J,
      role: "grid",
      "aria-rowcount": 1,
      "aria-colcount": (se.showPrimaryNav ? 1 : 0) + 1 + (se.showSecondaryNav ? 1 : 0),
      "aria-label": "Workflow layout",
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-workflow-body", role: "row", children: [
        se.showPrimaryNav && /* @__PURE__ */ n.jsx(
          "aside",
          {
            ref: le,
            className: "nhsfdp-pane primary-nav" + (O ? " is-active-pane" : ""),
            "aria-label": "Primary navigation",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (ke) => {
              ke.target === le.current && _(!0);
            },
            onBlur: (ke) => {
              ke.target === le.current && _(!1);
            },
            children: /* @__PURE__ */ n.jsx("section", { role: "complementary", "aria-label": "Primary navigation", children: /* @__PURE__ */ n.jsx(ze, {}) })
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "main",
          {
            ref: ee,
            className: "nhsfdp-pane content" + (P ? " is-active-pane" : ""),
            "aria-live": "polite",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (ke) => {
              ke.target === ee.current && z(!0);
            },
            onBlur: (ke) => {
              ke.target === ee.current && z(!1);
            },
            children: [
              B,
              /* @__PURE__ */ n.jsx("div", { role: "main", children: l(y, R) })
            ]
          }
        ),
        (() => {
          const ke = c ? c(y, D, R, (Be) => oe(Be)) : D && D.length > 0 ? /* @__PURE__ */ n.jsx("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: D.map((Be) => {
            const Te = L === Be.id;
            return /* @__PURE__ */ n.jsx("li", { role: "option", "aria-selected": Te, children: /* @__PURE__ */ n.jsx(
              "button",
              {
                type: "button",
                className: "nhsfdp-secondary-nav__item" + (Te ? " is-current" : ""),
                "data-sec-item": !0,
                onClick: () => oe(Be.id),
                children: Be.label
              }
            ) }, String(Be.id));
          }) }) : void 0, ge = d?.(y, R);
          return se.showSecondaryNav && (ke || ge) ? /* @__PURE__ */ n.jsx(
            "aside",
            {
              ref: te,
              className: "nhsfdp-pane secondary-nav" + ($ ? " is-active-pane" : ""),
              "aria-label": "Secondary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (Be) => {
                Be.target === te.current && F(!0);
              },
              onBlur: (Be) => {
                Be.target === te.current && F(!1);
              },
              children: /* @__PURE__ */ n.jsxs("section", { role: "complementary", "aria-label": "Secondary navigation", children: [
                ke,
                ge
              ] })
            }
          ) : null;
        })()
      ] })
    }
  );
  return Q ? W === "mobile" || !h && W === "tablet" || (K.panes ?? 1) === 1 ? /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: $e() }) : /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: Ke(K) }) : /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ n.jsxs("main", { className: "nhsfdp-pane content", children: [
    u ? u({ steps: t, current: y, onNavigate: G }) : null,
    y ? l(y, y?.sections?.find((se) => se.id === (j?.(y) ?? y?.sections?.[0]?.id))) : null
  ] }) }) });
}
const Dh = typeof window < "u" && window.document ? V.useLayoutEffect : V.useEffect, ti = (e, t, r, o) => e == null || Number.isNaN(e) ? o : Math.min(r, Math.max(t, e)), Th = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: o, isActive: a, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), p = r && e.childItems && e.childItems.length > 0, h = (x) => {
    p && (x.preventDefault(), o?.(e));
  }, v = p ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": a || !1,
    onClick: h,
    onKeyDown: (x) => {
      (x.key === "Enter" || x.key === " ") && h(x), x.key === "Escape" && a && h(x);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: Se("nhsuk-product-roadmap__item", p && "nhsuk-product-roadmap__item--expandable", a && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...v,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          p && /* @__PURE__ */ n.jsx("span", { className: Se("nhsuk-product-roadmap__item-expander", a && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Lh = Jc(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: o = 2,
  className: a,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: d = "overlay",
  ...c
}) => {
  const [u, f] = Oe(() => /* @__PURE__ */ new Set()), [p, h] = Oe(() => /* @__PURE__ */ new Set()), v = Ge(/* @__PURE__ */ new Set()), x = xe((M) => u.has(M), [u]), g = xe((M) => {
    f((A) => {
      const E = new Set(A);
      return E.has(M.id) ? (E.delete(M.id), h((L) => {
        const D = new Set(L);
        return D.add(M.id), D;
      }), setTimeout(() => h((L) => {
        const D = new Set(L);
        return D.delete(M.id), D;
      }), 240), l?.(M.id, !1)) : (E.add(M.id), l?.(M.id, !0)), E;
    });
  }, [l]);
  Dh(() => {
    if (d !== "inline" || !i || typeof document > "u") return;
    const M = [];
    if (u.forEach((D) => {
      v.current.has(D) || M.push(D);
    }), v.current = new Set(u), !M.length) return;
    const A = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, E = M.map((D) => `.nhsuk-product-roadmap__inline-children[data-parent="${D}"] .nhsuk-product-roadmap__inline-child`).join(","), L = Array.from(document.querySelectorAll(E));
    if (L.length) {
      if (A) {
        L.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((D) => {
        (D.gsap || D.default || D).to(L, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        L.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, d, i]);
  const j = xe(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), T = Se("nhsuk-product-roadmap", a), I = ti(r, 120, 1200, 400), S = ti(o, 1, 6, 2), b = Fe(() => e.map((M) => /* @__PURE__ */ new Date(M + " 01")), [e]), C = Fe(() => {
    if (b.length === 0) {
      const E = /* @__PURE__ */ new Date();
      return [E, E];
    }
    const M = new Date(b[0]), A = Kn.offset(new Date(b[b.length - 1]), 1);
    return [M, A];
  }, [b]), N = Fe(() => qa().domain(C).range([0, b.length * I]), [C, b.length, I]), w = xe((M) => {
    if (M.startDate) {
      const G = new Date(M.startDate), B = new Date(M.endDate ?? M.startDate);
      B < G && B.setTime(G.getTime());
      const Q = N(G), W = Kn.offset(new Date(B), 1);
      let K = N(W);
      Number.isFinite(K) || (K = Q + I);
      const q = Math.max(I * 0.25, K - Q), J = Q / I, le = q / I;
      return { ...M, _pxLeft: Q, _pxWidth: q, _startFraction: J, _spanColumns: le };
    }
    const A = M.date ?? 1, E = M.dateOffset ?? 0, L = M.length ?? 1, D = M.partialLength ?? 1, R = A - 1 + E, oe = L - 1 + D;
    return { ...M, _pxLeft: R * I, _pxWidth: oe * I, _startFraction: R, _spanColumns: oe };
  }, [N, I]), m = Fe(() => t.map((M) => {
    const E = M.roadmapItems.map((D) => {
      const R = !D.childItems && D.children ? { ...D, childItems: D.children } : { ...D };
      return w(R);
    }).sort((D, R) => D._pxLeft !== R._pxLeft ? D._pxLeft - R._pxLeft : R._pxWidth - D._pxWidth), L = [];
    return E.forEach((D) => {
      const R = D._pxLeft, oe = D._pxLeft + D._pxWidth;
      let G = L.findIndex((B) => B <= R);
      G === -1 && (G = L.length, L.push(0)), L[G] = oe, D.verticalPosition = G + 1;
    }), { ...M, roadmapItems: E, _laneCount: L.length };
  }), [t, w]), y = Fe(() => m.map((M) => M._laneCount || 1), [m]), k = Fe(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: T,
      style: { "--column-width": `${I}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": m.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((M, A) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": A + 2, children: M }, `${M}-${A}`))
        ] }),
        m.map((M, A) => {
          const E = A + 2, L = y[A];
          let D, R = 0, oe = [];
          i && d === "inline" && (oe = M.roadmapItems.filter((W) => x(W.id) && W.childItems && W.childItems.length).map((W) => ({ id: W.id, lane: W.verticalPosition || 1, count: W.childItems.length })).sort((W, K) => W.lane - K.lane), R = oe.reduce((W, K) => W + K.count, 0));
          const G = L + R;
          D = `calc((${G} * var(--roadmap-item-block-height)) + (max(0, ${G} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let Q = 0;
          return oe.forEach((W) => {
            Q += W.count, B[W.lane + 1] = Q;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": E, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: M.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: D }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: M.roadmapItems.map((W, K) => {
              const q = (W.verticalPosition || 1) - 1, J = oe.filter((Z) => Z.lane - 1 < q).reduce((Z, ne) => Z + ne.count, 0), le = q + J, ee = x(W.id), te = p.has(W.id);
              return /* @__PURE__ */ n.jsxs(et.Fragment, { children: [
                /* @__PURE__ */ n.jsx(Th, { item: W, maxLines: S, enableDrilldown: i, onExpand: g, isActive: ee, topLaneIndex: le, laneOffset: J }),
                i && d === "inline" && (ee || te) && W.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": W.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${W.title} child tasks`, children: W.childItems.map((Z, ne) => {
                  const fe = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let U = W._pxLeft, ie = W._pxWidth;
                  if (Z.startDate) {
                    const ce = new Date(Z.startDate);
                    let me = Z.endDate ? new Date(Z.endDate) : new Date(ce);
                    me < ce && (me = new Date(ce));
                    const Ee = new Date(me);
                    Ee.setDate(Ee.getDate() + 1);
                    const Ie = N(ce);
                    let Ne = N(Ee);
                    (!Number.isFinite(Ne) || Ne <= Ie) && (Ne = Ie + 6), U = Ie, ie = Math.max(6, Ne - Ie);
                  }
                  const pe = le + 1 + ne;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: Se("nhsuk-product-roadmap__inline-child", Z.status && `nhsuk-product-roadmap__inline-child--status-${Z.status}`, !ee && te && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${U}px`, width: `${ie}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${pe})`, height: fe, opacity: ee ? 0 : void 0, transform: ee ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Z.title })
                      ]
                    },
                    Z.id ?? ne
                  );
                }) })
              ] }, W.id ?? K);
            }) }) })
          ] }, `${M.heading}-${A}`);
        }),
        i && d === "overlay" && u.size === 1 && (() => {
          const M = Array.from(u)[0], A = t.flatMap((E) => E.roadmapItems).find((E) => E.id === M);
          return !A || !A.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${A.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: A.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: j, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: A.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: A.childItems.map((E, L) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: E.title }),
                E.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: E.content })
              ] }, E.id ?? L)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: j, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Lh.displayName = "ProductRoadmap";
function wl(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = wl(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Pr() {
  for (var e, t, r = 0, o = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = wl(e)) && (o && (o += " "), o += t);
  return o;
}
function ht(e) {
  return function() {
    return e;
  };
}
const aa = Math.PI, sa = 2 * aa, cn = 1e-6, Ah = sa - cn;
function Sl(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function $h(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Sl;
  const r = 10 ** t;
  return function(o) {
    this._ += o[0];
    for (let a = 1, s = o.length; a < s; ++a)
      this._ += Math.round(arguments[a] * r) / r + o[a];
  };
}
class Eh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Sl : $h(t);
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
  quadraticCurveTo(t, r, o, a) {
    this._append`Q${+t},${+r},${this._x1 = +o},${this._y1 = +a}`;
  }
  bezierCurveTo(t, r, o, a, s, i) {
    this._append`C${+t},${+r},${+o},${+a},${this._x1 = +s},${this._y1 = +i}`;
  }
  arcTo(t, r, o, a, s) {
    if (t = +t, r = +r, o = +o, a = +a, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let i = this._x1, l = this._y1, d = o - t, c = a - r, u = i - t, f = l - r, p = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > cn) if (!(Math.abs(f * d - c * u) > cn) || !s)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = o - i, v = a - l, x = d * d + c * c, g = h * h + v * v, j = Math.sqrt(x), T = Math.sqrt(p), I = s * Math.tan((aa - Math.acos((x + p - g) / (2 * j * T))) / 2), S = I / T, b = I / j;
      Math.abs(S - 1) > cn && this._append`L${t + S * u},${r + S * f}`, this._append`A${s},${s},0,0,${+(f * h > u * v)},${this._x1 = t + b * d},${this._y1 = r + b * c}`;
    }
  }
  arc(t, r, o, a, s, i) {
    if (t = +t, r = +r, o = +o, i = !!i, o < 0) throw new Error(`negative radius: ${o}`);
    let l = o * Math.cos(a), d = o * Math.sin(a), c = t + l, u = r + d, f = 1 ^ i, p = i ? a - s : s - a;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > cn || Math.abs(this._y1 - u) > cn) && this._append`L${c},${u}`, o && (p < 0 && (p = p % sa + sa), p > Ah ? this._append`A${o},${o},0,1,${f},${t - l},${r - d}A${o},${o},0,1,${f},${this._x1 = c},${this._y1 = u}` : p > cn && this._append`A${o},${o},0,${+(p >= aa)},${f},${this._x1 = t + o * Math.cos(s)},${this._y1 = r + o * Math.sin(s)}`);
  }
  rect(t, r, o, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${o = +o}v${+a}h${-o}Z`;
  }
  toString() {
    return this._;
  }
}
function _l(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const o = Math.floor(r);
      if (!(o >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = o;
    }
    return e;
  }, () => new Eh(t);
}
function kl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Cl(e) {
  this._context = e;
}
Cl.prototype = {
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
function Nl(e) {
  return new Cl(e);
}
function jl(e) {
  return e[0];
}
function Ml(e) {
  return e[1];
}
function Il(e, t) {
  var r = ht(!0), o = null, a = Nl, s = null, i = _l(l);
  e = typeof e == "function" ? e : e === void 0 ? jl : ht(e), t = typeof t == "function" ? t : t === void 0 ? Ml : ht(t);
  function l(d) {
    var c, u = (d = kl(d)).length, f, p = !1, h;
    for (o == null && (s = a(h = i())), c = 0; c <= u; ++c)
      !(c < u && r(f = d[c], c, d)) === p && ((p = !p) ? s.lineStart() : s.lineEnd()), p && s.point(+e(f, c, d), +t(f, c, d));
    if (h) return s = null, h + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : ht(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : ht(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : ht(!!d), l) : r;
  }, l.curve = function(d) {
    return arguments.length ? (a = d, o != null && (s = a(o)), l) : a;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? o = s = null : s = a(o = d), l) : o;
  }, l;
}
function ia(e, t, r) {
  var o = null, a = ht(!0), s = null, i = Nl, l = null, d = _l(c);
  e = typeof e == "function" ? e : e === void 0 ? jl : ht(+e), t = typeof t == "function" ? t : ht(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Ml : ht(+r);
  function c(f) {
    var p, h, v, x = (f = kl(f)).length, g, j = !1, T, I = new Array(x), S = new Array(x);
    for (s == null && (l = i(T = d())), p = 0; p <= x; ++p) {
      if (!(p < x && a(g = f[p], p, f)) === j)
        if (j = !j)
          h = p, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), v = p - 1; v >= h; --v)
            l.point(I[v], S[v]);
          l.lineEnd(), l.areaEnd();
        }
      j && (I[p] = +e(g, p, f), S[p] = +t(g, p, f), l.point(o ? +o(g, p, f) : I[p], r ? +r(g, p, f) : S[p]));
    }
    if (T) return l = null, T + "" || null;
  }
  function u() {
    return Il().defined(a).curve(i).context(s);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ht(+f), o = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ht(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (o = f == null ? null : typeof f == "function" ? f : ht(+f), c) : o;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ht(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ht(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : ht(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(r);
  }, c.lineX1 = function() {
    return u().x(o).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : ht(!!f), c) : a;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), c) : s;
  }, c;
}
function ni(e) {
  return e < 0 ? -1 : 1;
}
function ri(e, t, r) {
  var o = e._x1 - e._x0, a = t - e._x1, s = (e._y1 - e._y0) / (o || a < 0 && -0), i = (r - e._y1) / (a || o < 0 && -0), l = (s * a + i * o) / (o + a);
  return (ni(s) + ni(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function oi(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function zo(e, t, r) {
  var o = e._x0, a = e._y0, s = e._x1, i = e._y1, l = (s - o) / 3;
  e._context.bezierCurveTo(o + l, a + l * t, s - l, i - l * r, s, i);
}
function Fr(e) {
  this._context = e;
}
Fr.prototype = {
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
        zo(this, this._t0, oi(this, this._t0));
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
          this._point = 3, zo(this, oi(this, r = ri(this, e, t)), r);
          break;
        default:
          zo(this, this._t0, r = ri(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(Fr.prototype).point = function(e, t) {
  Fr.prototype.point.call(this, t, e);
};
function Rr(e) {
  return new Fr(e);
}
function Ph(e, t, r) {
  const o = Oi(e, t);
  return qa().domain(o).range(r);
}
function ai(e, t, r) {
  const [o, a] = Oi(e, t);
  if (!(Number.isFinite(o) && Number.isFinite(a)))
    return Ir().domain([0, 0]).range(r);
  let i;
  if (o <= 0)
    i = Math.min(0, o);
  else {
    const d = a - o, c = (d > 0 ? d : o) * 0.1;
    i = Math.max(0, o - c), i === o && (i = Math.max(0, o * 0.9));
  }
  const l = a ?? 0;
  return Ir().domain([i, l]).nice().range(r);
}
function la(e, t, r, o) {
  const a = Il().x(t).y(r);
  return o?.smooth !== !1 && a.curve(Rr), a(e) ?? "";
}
function Fh(e = {}) {
  const t = V.useRef(null), r = V.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [o, a] = V.useState({ width: 0, height: 0 });
  V.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: u, height: f } = c.contentRect;
        a({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, o.width - r.left - r.right), i = Math.max(0, o.height - r.top - r.bottom);
  return { width: o.width, height: o.height, innerWidth: s, innerHeight: i, margin: r, ref: t };
}
const Dl = V.createContext(null);
function ln() {
  return V.useContext(Dl);
}
const Rh = ({
  height: e = 240,
  margin: t,
  width: r,
  className: o = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: a,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Fh(t), d = { height: e, position: "relative" };
  return r !== void 0 && (d.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: o, style: d, role: s, "aria-label": i, children: /* @__PURE__ */ n.jsx(Dl.Provider, { value: l, children: a }) });
}, Ka = V.createContext(null), wn = () => V.useContext(Ka), Bh = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: o,
  children: a,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: d,
  yPadding: c,
  yBottomGapPx: u
}) => {
  const f = ln(), p = t ?? f?.innerWidth ?? 0, h = r ?? f?.innerHeight ?? 0, v = V.useMemo(() => e.flatMap((b) => b.data), [e]), x = V.useCallback(
    (b) => {
      if (o) return o(b);
      const C = b.x;
      return C instanceof Date ? C : new Date(C);
    },
    [o]
  ), g = d ?? 6, j = c ?? 6, T = V.useMemo(
    () => Ph(v, x, [
      g,
      Math.max(0, p - g)
    ]),
    [v, x, p, g]
  ), I = V.useMemo(() => {
    const b = Math.max(0, u ?? 0), C = Math.max(0, h - (j + b));
    if (l) {
      const N = ai([], (w) => w.y, [
        C,
        j
      ]);
      return N.domain(l), N;
    }
    return ai(v, (N) => N.y, [C, j]);
  }, [v, h, l, j, u]), S = V.useMemo(
    () => ({
      xScale: T,
      yScale: I,
      getXTicks: (b = s) => T.ticks(b),
      getYTicks: (b = i) => I.ticks(b)
    }),
    [T, I, s, i]
  );
  return /* @__PURE__ */ n.jsx(Ka.Provider, { value: S, children: a });
}, yr = 16, vr = 6, Hh = 16, zh = 4, Oh = 6, Uh = 3, Wh = void 0, si = ({
  type: e,
  scale: t,
  tickCount: r,
  tickValues: o,
  formatTick: a,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: d,
  maxTickLabelLength: c,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: p = !0,
  tickFormatPreset: h,
  yZeroBreak: v
}) => {
  const x = wn(), g = ln(), j = t || (e === "x" ? x?.xScale : x?.yScale), T = r ?? (e === "x" ? 6 : 5), I = typeof a == "function", S = V.useMemo(() => {
    if (I || !h) return;
    const N = (w) => new Intl.DateTimeFormat(void 0, w);
    switch (h) {
      case "dayShortMonth":
        return (w) => {
          const m = w instanceof Date ? w : new Date(w);
          return `${m.getDate()}
${N({ month: "short" }).format(m)}`;
        };
      case "dayShortMonthYear":
        return (w) => {
          const m = w instanceof Date ? w : new Date(w);
          return `${m.getDate()}
${N({ month: "short" }).format(m)} ${m.getFullYear()}`;
        };
      case "shortMonth":
        return (w) => {
          const m = w instanceof Date ? w : new Date(w);
          return N({ month: "short" }).format(m);
        };
      case "shortMonthYear":
        return (w) => {
          const m = w instanceof Date ? w : new Date(w);
          return `${N({ month: "short" }).format(m)} ${m.getFullYear()}`;
        };
      case "hourMinute":
        return (w) => {
          const m = w instanceof Date ? w : new Date(w);
          return N({ hour: "2-digit", minute: "2-digit" }).format(m);
        };
      default:
        return;
    }
  }, [I, h]);
  let b = I ? a : S || ((N) => String(N));
  const C = V.useMemo(() => o && Array.isArray(o) ? o : j ? typeof j.ticks == "function" ? j.ticks(T) : j.domain ? j.domain() : [] : [], [j, T, o]);
  if (e === "x" && !I && !h && C.length && C.every((N) => N instanceof Date)) {
    const N = C[0], w = C[C.length - 1], m = w.getTime() - N.getTime(), y = 24 * 3600 * 1e3, k = 365 * y, M = N.getFullYear() === w.getFullYear(), A = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (m < 2 * y) {
      const E = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      b = (L) => E.format(L);
    } else if (m < 32 * y)
      b = (E) => {
        const L = E;
        return `${L.getDate()} ${A.format(L)}`;
      };
    else if (m < k && M)
      b = (E) => A.format(E);
    else if (m < 2 * k) {
      const E = /* @__PURE__ */ new Set();
      b = (L) => {
        const D = L, R = D.getMonth();
        return E.has(R) || E.add(R), `${A.format(D)} ${D.getFullYear()}`;
      };
    } else
      b = (E) => String(E.getFullYear());
  }
  if (!j || !g) return null;
  if (e === "x") {
    const N = i ?? g.innerHeight, w = typeof j.bandwidth == "function", m = w ? j.bandwidth() : 0, y = (A) => {
      const E = j(A);
      return w ? E + m / 2 : E;
    };
    let k = d ?? 0;
    if (u && d == null) {
      const A = C.map(
        (L) => b(L).replace(/\n.*/g, "")
      ), E = A.length ? A.reduce((L, D) => L + D.length, 0) / A.length : 0;
      k = Math.max(12, Math.round(E * 6 + 4));
    }
    const M = V.useMemo(() => {
      if (o && Array.isArray(o) || k <= 0) return C;
      const A = [];
      let E = -1 / 0;
      for (const L of C) {
        const D = y(L);
        D - E >= k && (A.push(L), E = D);
      }
      return A;
    }, [
      C,
      j,
      k,
      o,
      w,
      m
    ]);
    return /* @__PURE__ */ n.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${N})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ n.jsx("line", { x1: 0, x2: g.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          M.map((A, E) => {
            const L = b(A), D = c && L.length > c ? L.slice(0, Math.max(1, c - 1)) + "…" : L, R = p ? D.split(/\n/) : [D.replace(/\n/g, " ")], oe = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ n.jsxs(
              "g",
              {
                transform: `translate(${y(A)},0)`,
                children: [
                  /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ n.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: oe,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        R.map((G, B) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: B === 0 ? 0 : "1.1em", children: G }, B)),
                        D !== L && /* @__PURE__ */ n.jsx("title", { children: L })
                      ]
                    }
                  )
                ]
              },
              A?.toString?.() || E
            );
          })
        ]
      }
    );
  }
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "),
      fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
      children: [
        (() => {
          const N = !!v?.enabled, w = Math.max(vr, v?.gapPx ?? yr);
          if (!N)
            return /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: 0, y2: g.innerHeight, stroke: "currentColor" });
          const m = Math.max(0, g.innerHeight - w);
          return /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: 0, y2: m, stroke: "currentColor" });
        })(),
        C.map((N, w) => {
          const m = b(N), y = c && m.length > c ? m.slice(0, Math.max(1, c - 1)) + "…" : m, k = p ? y.split(/\n/) : [y.replace(/\n/g, " ")];
          if (!!v?.enabled) {
            const A = Math.max(vr, v?.gapPx ?? yr), E = Math.max(0, g.innerHeight - A);
            if (j(N) > E - 1) return null;
          }
          return /* @__PURE__ */ n.jsxs(
            "g",
            {
              transform: `translate(0,${j(N)})`,
              children: [
                /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    x: -9,
                    dy: "0.32em",
                    textAnchor: "end",
                    className: "fdp-axis__tick",
                    fontFamily: "inherit",
                    children: [
                      k.map((A, E) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: E === 0 ? 0 : "1.1em", children: A }, E)),
                      y !== m && /* @__PURE__ */ n.jsx("title", { children: m })
                    ]
                  }
                )
              ]
            },
            N?.toString?.() || w
          );
        }),
        !!v?.enabled && (() => {
          const N = Math.max(vr, v?.gapPx ?? yr), w = g.innerHeight, y = Math.max(0, w - N), k = y, A = Math.max(4, w - k), E = zh, L = Oh, D = Math.max(1, Math.round(v?.zigZag?.amplitudePx ?? E)), R = Math.max(1, Math.round(v?.zigZag?.stepXPx ?? Uh)), oe = v?.zigZag?.heightPx ?? Wh, G = Math.max(4, Math.round(oe ?? 0));
          let B, Q;
          if (v?.zigZag?.heightPx && v.zigZag.heightPx > 0) {
            const te = Math.max(4, Math.min(A - 2, G));
            B = Math.max(1, Math.floor(te / (2 * D))), Q = Math.max(0, Math.min(te, B * 2 * D));
          } else typeof v?.zigZag?.cycles == "number" && v?.zigZag?.cycles > 0 ? (B = Math.max(1, Math.round(v.zigZag.cycles)), Q = B * 2 * D, Q = Math.min(Q, A - 2), B = Math.max(1, Math.floor(Q / (2 * D)))) : (B = L, Q = Math.min(A - 2, B * 2 * D), B = Math.max(1, Math.floor(Q / (2 * D))));
          const W = k + (A - Q) / 2, K = W + Q;
          let q = "M0,0";
          const J = Q > 0 ? Math.max(0, Math.floor((Q - D) / (2 * D))) : 0, le = Math.max(0, (Q - J * 2 * D) / 2), ee = D > 0 ? R * (le / D) : 0;
          le > 0 && (q += ` l${ee},${le}`);
          for (let te = 0; te < J; te++)
            q += ` l-${R},${D} l${R},${D}`;
          return le > 0 && (q += ` l-${ee},${le}`), /* @__PURE__ */ n.jsxs("g", { children: [
            /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: y, y2: W, stroke: "currentColor" }),
            /* @__PURE__ */ n.jsx("g", { transform: `translate(0,${W})`, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("path", { d: q, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: K, y2: w, stroke: "currentColor" }),
            /* @__PURE__ */ n.jsx("g", { transform: `translate(0,${w})`, children: /* @__PURE__ */ n.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        s && /* @__PURE__ */ n.jsx(
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
}, Gh = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: o = "2 4",
  className: a
}) => {
  const s = wn(), i = ln();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", a].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: s.yScale(d),
        y2: s.yScale(d),
        stroke: r,
        strokeDasharray: o
      },
      c
    )),
    e === "x" && l.map((d, c) => /* @__PURE__ */ n.jsx(
      "line",
      {
        y1: 0,
        y2: i.innerHeight,
        x1: s.xScale(d),
        x2: s.xScale(d),
        stroke: r,
        strokeDasharray: o
      },
      c
    ))
  ] });
}, Vh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, sr = {
  color: Vh
}, Yh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, yo = {
  color: Yh
}, Zh = [
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
let Oo = null, Uo = null, Wo = null, Tl = "optimized";
function qh() {
  const e = { color: { ...yo.color, ...sr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), a);
    if (typeof i == "string") return i;
  }, r = [];
  try {
    for (let o = 1; o <= 12; o++) {
      const a = `color.data-viz.categorical.${o}`, s = t(a);
      if (!s) throw new Error(`Missing token ${a}`);
      r.push(s);
    }
    return r;
  } catch {
    return Zh;
  }
}
function Jh() {
  return Oo || (Oo = qh()), Oo;
}
function Xh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Go(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Kh(e, t, r) {
  const o = Go(e), a = Go(t), s = Go(r), i = o * 0.4124 + a * 0.3576 + s * 0.1805, l = o * 0.2126 + a * 0.7152 + s * 0.0722, d = o * 0.0193 + a * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function Qh(e, t, r) {
  let i = e / 95.047, l = t / 100, d = r / 108.883;
  const c = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function Ll(e) {
  const t = Xh(e);
  if (!t) return null;
  const r = Kh(t.r, t.g, t.b);
  return Qh(r.x, r.y, r.z);
}
function ii(e, t) {
  const r = e.L - t.L, o = e.a - t.a, a = e.b - t.b;
  return Math.sqrt(r * r + o * o + a * a);
}
function em() {
  const e = Jh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Ll(i));
  let r = 0, o = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (d += ii(l, t[f]), c++);
    const u = d / Math.max(1, c);
    u > o && (o = u, r = i);
  }
  const a = new Set(e.map((i, l) => l)), s = [];
  for (s.push(r), a.delete(r); a.size; ) {
    let i = Array.from(a)[0], l = -1;
    for (const d of a) {
      const c = t[d];
      if (!c) continue;
      let u = 1 / 0;
      for (const f of s) {
        const p = t[f];
        if (p) {
          const h = ii(c, p);
          h < u && (u = h);
        }
      }
      u > l && (l = u, i = d);
    }
    s.push(i), a.delete(i);
  }
  return s.map((i) => e[i]);
}
function tm() {
  return Uo || (Uo = em()), Uo;
}
function nm(e, t, r) {
  const o = (e + 16) / 116, a = t / 500 + o, s = o - r / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(a) * 95.047, d = i(o) * 100, c = i(s) * 108.883;
  return { X: l, Y: d, Z: c };
}
function rm(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let o = e * 3.2406 + t * -1.5372 + r * -0.4986, a = e * -0.9689 + t * 1.8758 + r * 0.0415, s = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return o = Math.min(1, Math.max(0, i(o))), a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(o * 255), g: Math.round(a * 255), b: Math.round(s * 255) };
}
function om(e, t, r) {
  return `#${[e, t, r].map((o) => o.toString(16).padStart(2, "0")).join("")}`;
}
function am(e, t) {
  const r = Ll(e);
  if (!r) return e;
  const o = Math.min(100, Math.max(0, r.L + t)), { X: a, Y: s, Z: i } = nm(o, r.a, r.b), l = rm(a, s, i);
  return om(l.r, l.g, l.b);
}
function sm() {
  const e = tm(), r = [12, -12, 24, -24].map((a) => e.map((s) => am(s, a))), o = [...e];
  return r.forEach((a) => o.push(...a)), o;
}
function im() {
  return (!Wo || lm()) && (Wo = sm(), Al = Tl), Wo;
}
let Al = null;
function lm() {
  return Al !== Tl;
}
function Pt(e) {
  const t = im();
  return t[e % t.length];
}
let Dn = null, Qn = null, er = null, tr = null;
function cm() {
  const e = sr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Dn = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      Dn.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    Qn = {}, Object.keys(r).forEach((s) => {
      const i = r[s]?.$value || r[s]?.value;
      typeof i == "string" && (Qn[s] = i);
    });
    const o = e.severity || {}, a = e["org-level"] || {};
    tr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (tr[s] = i);
    }), er = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (er[s] = i);
    });
  }
}
function vo() {
  (!Dn || !Qn || !er || !tr) && cm();
}
function bn(e) {
  return vo(), Dn ? Dn[e % Dn.length] : "#212b32";
}
function dm(e) {
  return vo(), Qn ? Qn[e] : void 0;
}
function Br(e, t) {
  return dm(e) || bn(t);
}
const ca = ["low", "moderate", "high", "critical"];
let Vo = null;
function um() {
  const e = { color: { ...yo.color, ...sr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), a) : typeof i == "string" ? i : void 0;
  }, r = {};
  return ca.forEach((o) => {
    const a = t(`color.data-viz.severity.${o}`);
    a && (r[o] = a);
  }), r;
}
function $l() {
  return Vo || (Vo = um()), Vo;
}
function fm(e) {
  return $l()[e.toLowerCase()];
}
function pm(e, t) {
  return fm(e) || $l()[ca[t % ca.length]] || Pt(t);
}
function hm(e) {
  return vo(), er ? er[e] : void 0;
}
function mm(e, t) {
  return hm(e) || bn(t);
}
const da = ["trust", "ambulance", "icb", "region"];
let Yo = null;
function gm() {
  const e = { color: { ...yo.color, ...sr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), a) : typeof i == "string" ? i : void 0;
  }, r = {};
  return da.forEach((o) => {
    const a = t(`color.data-viz.org-level.${o}`);
    a && (r[o] = a);
  }), r;
}
function El() {
  return Yo || (Yo = gm()), Yo;
}
function xm(e) {
  return El()[e.toLowerCase()];
}
function bm(e, t) {
  return xm(e) || El()[da[t % da.length]] || Pt(t);
}
function ym(e) {
  return vo(), tr ? tr[e] : void 0;
}
function vm(e, t) {
  return ym(e) || bn(t);
}
let Zo = null;
const wm = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Sm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function _m() {
  const e = { color: { ...yo.color, ...sr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const i = a.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, r = {}, o = [];
  return wm.forEach((a) => {
    const s = t(`color.data-viz.region.${a}`);
    s ? r[a] = s : o.push(a);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : o.length && console.warn(`[DataViz] Missing region colour tokens: ${o.join(", ")}.`)), r;
}
function km() {
  return Zo || (Zo = _m()), Zo;
}
function Cm(e) {
  return km()[Sm(e)];
}
function Tn(e, t) {
  return Cm(e) || Pt(t);
}
const Pl = V.createContext(null), ir = () => V.useContext(Pl), Ky = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: o
}) => {
  const [a, s] = V.useState(() => new Set(e)), i = r !== void 0, l = V.useMemo(() => i ? new Set(r) : a, [i, r, a]), d = V.useCallback((u) => {
    i || s(new Set(u)), o?.(Array.from(u));
  }, [i, o]), c = V.useMemo(() => ({
    hiddenIds: l,
    isHidden: (u) => l.has(u),
    toggle: (u) => {
      const f = new Set(l);
      f.has(u) ? f.delete(u) : f.add(u), d(f);
    },
    showOnly: (u) => {
      d(/* @__PURE__ */ new Set());
    },
    showAll: () => d(/* @__PURE__ */ new Set()),
    setHidden: (u) => d(new Set(Array.isArray(u) ? u : Array.from(u)))
  }), [l, d]);
  return /* @__PURE__ */ n.jsx(Pl.Provider, { value: c, children: t });
}, Fl = V.createContext(null), en = () => V.useContext(Fl), Nm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const o = wn(), a = ir(), [s, i] = V.useState(null), l = V.useRef(/* @__PURE__ */ new Map()), [d, c] = V.useState([]), u = V.useCallback(
    (N, w) => {
      l.current.set(N, w);
    },
    []
  ), f = V.useCallback((N) => {
    l.current.delete(N);
  }, []), p = V.useCallback(
    (N, w) => {
      if (!o) return;
      const { xScale: m, yScale: y } = o;
      let k = null, M = 1 / 0;
      l.current.forEach((A, E) => {
        A.forEach((L, D) => {
          const R = m(L.x), oe = y(L.y), G = R - N, B = oe - w, Q = Math.sqrt(G * G + B * B);
          Q < M && (M = Q, k = {
            seriesId: E,
            index: D,
            x: L.x,
            y: L.y,
            clientX: R,
            clientY: oe
          });
        });
      }), k && M <= t ? i(k) : i(null);
    },
    [o, t]
  ), h = V.useCallback(() => i(null), []);
  V.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!o) return;
    const { xScale: N, yScale: w } = o, m = [];
    l.current.forEach((y, k) => {
      y.forEach((M, A) => {
        (s.x instanceof Date && M.x instanceof Date ? M.x.getTime() === s.x.getTime() : M.x === s.x) && m.push({
          seriesId: k,
          index: A,
          x: M.x,
          y: M.y,
          clientX: N(M.x),
          clientY: w(M.y)
        });
      });
    }), m.sort((y, k) => y.seriesId.localeCompare(k.seriesId)), c(m);
  }, [s, o]);
  const v = V.useCallback(
    (N) => {
      if (!s) return;
      const w = l.current.get(s.seriesId);
      if (!w) return;
      let m = s.index + N;
      if (m < 0 || m >= w.length) {
        if (!r) return;
        m = (m + w.length) % w.length;
      }
      const y = w[m];
      if (!o) return;
      const { xScale: k, yScale: M } = o;
      i({
        seriesId: s.seriesId,
        index: m,
        x: y.x,
        y: y.y,
        clientX: k(y.x),
        clientY: M(y.y)
      });
    },
    [s, o, r]
  ), x = V.useCallback(
    (N) => {
      let w = Array.from(l.current.keys());
      if (a && (w = w.filter((R) => !a.isHidden(R))), w.length === 0) return;
      if (!s) {
        const R = w[0], oe = l.current.get(R);
        if (!oe || !o) return;
        const { xScale: G, yScale: B } = o, Q = oe[0];
        i({
          seriesId: R,
          index: 0,
          x: Q.x,
          y: Q.y,
          clientX: G(Q.x),
          clientY: B(Q.y)
        });
        return;
      }
      const m = w.indexOf(s.seriesId);
      if (m === -1) return;
      let y = m + N;
      if (y < 0 || y >= w.length) {
        if (!r) return;
        y = (y + w.length) % w.length;
      }
      const k = w[y], M = l.current.get(k);
      if (!M || !o) return;
      const A = Math.min(s.index, M.length - 1), E = M[A], { xScale: L, yScale: D } = o;
      i({
        seriesId: k,
        index: A,
        x: E.x,
        y: E.y,
        clientX: L(E.x),
        clientY: D(E.y)
      });
    },
    [s, o, r, a]
  ), g = V.useCallback(() => {
    let N = Array.from(l.current.keys());
    if (a && (N = N.filter((A) => !a.isHidden(A))), N.length === 0) return;
    const w = s ? s.seriesId : N[0], m = l.current.get(w);
    if (!m || m.length === 0 || !o) return;
    const y = m[0], { xScale: k, yScale: M } = o;
    i({
      seriesId: w,
      index: 0,
      x: y.x,
      y: y.y,
      clientX: k(y.x),
      clientY: M(y.y)
    });
  }, [s, o, a]), j = V.useCallback(() => {
    let N = Array.from(l.current.keys());
    if (a && (N = N.filter((E) => !a.isHidden(E))), N.length === 0) return;
    const w = s ? s.seriesId : N[0], m = l.current.get(w);
    if (!m || m.length === 0 || !o) return;
    const y = m.length - 1, k = m[y], { xScale: M, yScale: A } = o;
    i({
      seriesId: w,
      index: y,
      x: k.x,
      y: k.y,
      clientX: M(k.x),
      clientY: A(k.y)
    });
  }, [s, o, a]), T = V.useCallback(
    () => v(1),
    [v]
  ), I = V.useCallback(
    () => v(-1),
    [v]
  ), S = V.useCallback(
    () => x(1),
    [x]
  ), b = V.useCallback(
    () => x(-1),
    [x]
  ), C = V.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: d,
      focusNearest: p,
      clear: h,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: T,
      focusPrevPoint: I,
      focusNextSeries: S,
      focusPrevSeries: b,
      focusFirstPoint: g,
      focusLastPoint: j
    }),
    [
      s,
      d,
      p,
      h,
      u,
      f,
      T,
      I,
      S,
      b,
      g,
      j
    ]
  );
  return /* @__PURE__ */ n.jsx(Fl.Provider, { value: C, children: e });
}, jm = ({
  series: e,
  seriesIndex: t,
  palette: r,
  showPoints: o,
  focusablePoints: a,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: d = 1,
  smooth: c = !0,
  gradientFillId: u,
  colors: f
}) => {
  const p = wn();
  if (!p) return null;
  const { xScale: h, yScale: v } = p, g = ir()?.isHidden(e.id) ?? !1, j = g && l === "fade";
  if (g && l === "remove")
    return null;
  const T = en();
  V.useEffect(() => {
    if (!T) return;
    const w = e.data.map((m) => ({ x: i(m), y: m.y }));
    return T.registerSeries(e.id, w), () => T.unregisterSeries(e.id);
  }, [T, e.id, e.data, i]);
  const I = V.useMemo(
    () => la(
      e.data,
      (w) => h(i(w)),
      (w) => v(w.y),
      { smooth: c }
    ),
    [e.data, h, v, i, c]
  ), S = V.useMemo(() => {
    if (!e.data.length) return "";
    const [w] = v.domain(), m = ia().x((y) => h(i(y))).y0(() => v(w)).y1((y) => v(y.y));
    return c && m.curve(Rr), m(e.data) || "";
  }, [e.data, h, v, i, c]), b = f && f[t], C = e.color || b || (r === "region" ? Tn(e.id, t) : Pt(t)), N = r === "region" ? Br(e.id, t) : bn(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: j ? 0.25 : 1,
      "aria-hidden": j ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: S,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: I,
            fill: "none",
            stroke: C,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        o && e.data.map((w, m) => {
          const y = h(i(w)), k = v(w.y), M = a ? 0 : -1, A = !j && (a && m === s || T?.focused?.seriesId === e.id && T.focused.index === m), E = () => {
            T && !j && T.setFocused({
              seriesId: e.id,
              index: m,
              x: i(w),
              y: w.y,
              clientX: y,
              clientY: k
            });
          }, L = () => {
            T && T.focused?.seriesId === e.id && T.focused.index === m && T.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: y,
              cy: k,
              r: A ? 5 : 3.5,
              stroke: A ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : N,
              strokeWidth: A ? 2 : 1,
              fill: A ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : C,
              className: "fdp-line-point",
              tabIndex: j ? -1 : M,
              "aria-label": `${e.label || e.id} ${i(w).toDateString()} value ${w.y}`,
              "data-series": e.id,
              "data-index": m,
              onMouseEnter: E,
              onFocus: E,
              onMouseLeave: L,
              onBlur: L
            },
            m
          );
        })
      ]
    }
  );
}, Mm = ({ polite: e = !0, format: t }) => {
  const r = en(), [o, a] = V.useState(""), s = V.useRef("");
  return V.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let d;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Im(i.seriesId, i.x, i.y, i.index);
    if (d !== s.current) {
      s.current = d, a("");
      const c = setTimeout(() => a(d), 10);
      return () => clearTimeout(c);
    }
  }, [r?.focused, t]), /* @__PURE__ */ n.jsx(
    "div",
    {
      "aria-live": e ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 },
      children: o
    }
  );
};
function Im(e, t, r, o) {
  const a = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${o + 1}, ${a}, value ${r}`;
}
const Qy = () => {
  const e = en(), t = ln();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: o } = e, { innerWidth: a, innerHeight: s } = t, i = Math.min(Math.max(r.clientX, 0), a), l = Math.min(Math.max(r.clientY, 0), s), d = i + 8, c = l - 8, u = o.length > 1, f = r.x instanceof Date ? r.x.toDateString() : String(r.x), p = u ? f : `${f} • ${r.y}`, h = /\d+$/.exec(r.seriesId || ""), v = h ? parseInt(h[0], 10) - 1 : 0, x = Pt(v >= 0 ? v : 0) || "#005eb8", g = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: g, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: g, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: x, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const T = o.map((N) => `${N.seriesId}: ${N.y}`), I = [p, ...T], S = I.reduce((N, w) => Math.max(N, w.length), 0), b = Math.max(90, S * 6.2 + 16), C = 16 * I.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: d, y: c - C, rx: 4, ry: 4, width: b, height: C, fill: "#212b32", opacity: 0.92 }),
        I.map((N, w) => /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - C + 6 + 16 * (w + 0.7), fill: "#fff", fontSize: 12, children: N }, w))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, p.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: p })
    ] })
  ] });
}, e1 = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: o = !1,
  adjustStrokeForWhiteBackground: a = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: d
}) => {
  const c = ir(), u = !!(c && !o && !l && s === void 0), f = o || u, p = e || [], h = s !== void 0, [v, x] = V.useState(new Set(i)), g = h ? new Set(s) : v, [j, T] = V.useState(""), I = (S) => {
    if (u && c) {
      const M = c.isHidden(S);
      c.toggle(S);
      const E = p.find((D) => D.id === S)?.label || S, L = d ? d(S, M, E) : `${E} ${M ? "shown" : "hidden"}`;
      T(L);
      return;
    }
    if (!f) return;
    const b = new Set(g), C = b.has(S);
    C ? b.delete(S) : b.add(S), h || x(b);
    const N = p.filter((M) => !b.has(M.id)).map((M) => M.id), w = Array.from(b);
    l?.(N, w);
    const y = p.find((M) => M.id === S)?.label || S, k = d ? d(S, C, y) : `${y} ${C ? "shown" : "hidden"}`;
    T(k);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: p.map((S, b) => {
      const C = S.palette || t, N = S.color || (C === "region" ? Tn(S.id, b) : C === "severity" ? pm(S.id, b) : C === "org-level" ? bm(S.id, b) : Pt(b));
      let w = S.stroke || (C === "region" ? Br(S.id, b) : C === "severity" ? mm(S.id, b) : C === "org-level" ? vm(S.id, b) : bn(b));
      if (a && w) {
        const k = w.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (w = "#212b32");
      }
      const m = u && c ? c.isHidden(S.id) : g.has(S.id), y = f ? {
        "aria-pressed": !m,
        "aria-label": `${S.label} (${m ? "show" : "hide"})`,
        onClick: () => I(S.id)
      } : { "aria-label": S.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${m ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: N,
              backgroundImage: S.patternDataUrl ? `url(${S.patternDataUrl})` : void 0,
              backgroundSize: S.patternDataUrl ? "auto" : void 0,
              borderColor: w
            },
            ...y
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: S.label })
      ] }, S.id);
    }) }),
    f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: j })
  ] });
}, t1 = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: o,
  areaOnly: a = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: d,
  gradientFill: c = !0,
  colors: u
}) => {
  const f = wn();
  if (!f) return null;
  const { xScale: p, yScale: h } = f, x = ir()?.isHidden(e.id) ?? !1, g = x && s === "fade";
  if (x && s === "remove") return null;
  const j = en();
  V.useEffect(() => {
    if (!j) return;
    const N = e.data.map((w) => ({ x: o(w), y: w.y }));
    return j.registerSeries(e.id, N), () => j.unregisterSeries(e.id);
  }, [j, e.id, e.data, o]);
  const T = u && u[t], I = e.color || T || (r === "region" ? Tn(e.id, t) : Pt(t)), S = V.useMemo(() => d && d.length === e.data.length ? la(
    e.data,
    (N) => p(o(N)),
    (N) => {
      const w = e.data.indexOf(N);
      return h(d[w].y1);
    },
    { smooth: l }
  ) : la(
    e.data,
    (N) => p(o(N)),
    (N) => h(N.y),
    { smooth: l }
  ), [e.data, d, p, h, o, l]), b = V.useMemo(() => {
    if (d && d.length === e.data.length) {
      const k = ia().x((M) => p(o(M))).y0((M, A) => h(d[A].y0)).y1((M, A) => h(d[A].y1));
      return l && k.curve(Rr), k(e.data) || "";
    }
    const [N, w] = h.domain();
    let m = i;
    m < N ? m = N : m > w && (m = w);
    const y = ia().x((k) => p(o(k))).y0(() => h(m)).y1((k) => h(k.y));
    return l && y.curve(Rr), y(e.data) || "";
  }, [e.data, d, p, h, o, i, l]), C = V.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: C, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: I, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: I, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: b,
            fill: c ? `url(#${C})` : I,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !a && /* @__PURE__ */ n.jsx("path", { d: S, fill: "none", stroke: I, strokeWidth: 1 })
      ]
    }
  );
}, n1 = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
  palette: o,
  parseX: a,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: d,
  adaptive: c = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: f = "remove",
  colorMode: p = "series",
  allSeries: h,
  stacked: v,
  gapRatio: x = 0.15,
  minBarWidth: g,
  gradientFill: j = !0,
  gradientStrokeMatch: T = !0,
  opacity: I = 1,
  fadedOpacity: S = 0.25,
  flatFillOpacity: b = 1,
  colors: C
}) => {
  const N = Math.max(0, x), w = wn(), m = ln();
  if (!w || !m) return null;
  const { xScale: y, yScale: k } = w, A = ir()?.isHidden(e.id) ?? !1, E = A && f === "fade";
  if (A && f === "remove") return null;
  const L = en();
  V.useEffect(() => {
    if (!L) return;
    const Z = e.data.map((ne) => ({ x: a(ne), y: ne.y }));
    return L.registerSeries(e.id, Z), () => L.unregisterSeries(e.id);
  }, [L, e.id, e.data, a]);
  const D = typeof y.bandwidth == "function", R = D ? y.bandwidth() : void 0, oe = V.useMemo(() => {
    if (R != null) return R;
    const Z = h && h.length ? h : [e], ne = [];
    Z.forEach((ae) => {
      ae.data.forEach((pe) => {
        const ce = y(a(pe));
        Number.isFinite(ce) && ne.push(ce);
      });
    });
    const fe = ne.sort((ae, pe) => ae - pe);
    if (fe.length <= 1) return 40;
    const U = [];
    for (let ae = 1; ae < fe.length; ae++)
      U.push(fe[ae] - fe[ae - 1]);
    return U.sort((ae, pe) => ae - pe), (U[Math.floor(U.length / 2)] || 40) * i;
  }, [e.data, h, y, a, i, R]), { basePerBar: G } = V.useMemo(() => {
    if (D) {
      const fe = oe, U = Math.max(
        1,
        (fe - l * (r - 1)) / r
      ), ie = e.barWidth ?? d;
      let ae = ie ? Math.min(ie, fe) : U;
      if (c) {
        const pe = fe * Math.min(1, Math.max(0.05, u)), ce = Math.max(
          1,
          (pe - l * (r - 1)) / r
        );
        ae = ie ? Math.min(ae, ce) : ce;
      }
      return { basePerBar: ae };
    }
    const Z = e.barWidth ?? d, ne = Math.max(
      1,
      (oe - l * (r - 1)) / r
    );
    if (c) {
      const fe = h && h.length ? h : [e], U = [];
      fe.forEach(
        (Ee) => Ee.data.forEach((Ie) => {
          const Ne = y(a(Ie));
          Number.isFinite(Ne) && U.push(Ne);
        })
      ), U.sort((Ee, Ie) => Ee - Ie);
      const ie = [];
      for (let Ee = 1; Ee < U.length; Ee++)
        ie.push(U[Ee] - U[Ee - 1]);
      ie.sort((Ee, Ie) => Ee - Ie);
      const pe = (ie[Math.floor(ie.length / 2)] || oe) * Math.min(1, Math.max(0.05, u)), ce = Math.max(
        1,
        (pe - l * (r - 1)) / r
      );
      return { basePerBar: Z ? Math.min(Z, ce) : ce };
    }
    return Z ? { basePerBar: Math.min(Z, ne) } : { basePerBar: ne };
  }, [
    D,
    oe,
    l,
    r,
    d,
    e.barWidth,
    c,
    u,
    h,
    y,
    a
  ]), B = V.useMemo(() => {
    if (D) return [];
    const Z = [];
    return (h && h.length ? h : [e]).forEach(
      (fe) => fe.data.forEach((U) => {
        const ie = y(a(U));
        Number.isFinite(ie) && Z.push(ie);
      })
    ), Z.sort((fe, U) => fe - U), Array.from(new Set(Z));
  }, [D, h, e, y, a]), Q = V.useMemo(() => {
    if (D)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: m.innerWidth }
      ];
    const Z = [];
    for (let ne = 0; ne < B.length; ne++) {
      const fe = B[ne], U = ne === 0 ? 0 : (B[ne - 1] + fe) / 2, ie = ne === B.length - 1 ? m.innerWidth : (fe + B[ne + 1]) / 2;
      Z.push({
        center: fe,
        left: Math.max(0, U),
        right: Math.min(m.innerWidth, ie)
      });
    }
    return Z;
  }, [D, B, m.innerWidth]), W = V.useMemo(() => {
    if (D || !Q.length)
      return;
    const Z = Math.min(1, Math.max(0.05, i)), ne = Q.map((pe) => Math.max(2, pe.right - pe.left)), fe = ne.map(
      (pe) => Math.max(2, Math.min(pe - 1, pe * Z))
    );
    let U = Math.min(...fe);
    if (g)
      if (r <= 1) {
        const pe = Math.min(...ne.map((ce) => ce - 1));
        pe >= g && U < g && (U = Math.min(pe, g));
      } else {
        const pe = Math.min(...ne.map((me) => me - 1)), ce = g * r + (r - 1) * (g * N);
        ce <= pe && U < ce && (U = ce);
      }
    if (r <= 1)
      return g && U < g && ne.every((ce) => ce >= g) ? { groupWidth: g, barWidth: g } : { groupWidth: U, barWidth: U };
    let ie = U / (r + (r - 1) * N);
    return ie < 1 && (ie = 1), g && ie < g && g * r + (r - 1) * (g * N) <= U && (ie = g), { groupWidth: ie * r + (r - 1) * (ie * N), barWidth: ie };
  }, [
    D,
    Q,
    i,
    r,
    N,
    g
  ]), K = C && C[t] ? C[t] : void 0, q = e.color || K || (o === "region" ? Tn(e.id, t) : Pt(t)), J = o === "region" ? Br(e.id, t) : bn(t), le = T && (e.color || K) ? q : J, ee = Number.isFinite(k(0)) ? k(0) : k.range()[0], te = V.useId();
  return v && v.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: E ? S : I,
      "aria-hidden": E ? !0 : void 0,
      children: [
        j && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: te,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: q, stopOpacity: 0.3 }),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: q,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ n.jsx(
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
        e.data.map((Z, ne) => {
          const fe = a(Z), U = y(D ? Z.x : fe);
          let ie, ae;
          if (D)
            ie = oe, ae = U;
          else {
            const P = Q.find(
              (z) => Math.abs(z.center - U) < 0.5
            );
            if (!P || !W)
              ie = G, ae = U - G / 2;
            else {
              const { groupWidth: z } = W;
              ie = z;
              let $ = U - z / 2;
              $ < P.left && ($ = P.left), $ + z > P.right && ($ = Math.max(P.left, P.right - z)), ae = $;
            }
          }
          const pe = v[ne], ce = k(pe.y0), me = k(pe.y1), Ee = Math.min(ce, me), Ie = Math.abs(me - ce) || 1;
          if (!D && g && ie < g) {
            const P = Q.find(
              (z) => Math.abs(z.center - U) < 0.5
            );
            if (P) {
              const z = Math.max(2, P.right - P.left - 1), $ = Math.min(z, g);
              $ > ie && (ie = $, ae = Math.max(
                P.left,
                Math.min(P.right - ie, U - ie / 2)
              ));
            }
          }
          const Ne = !E && L?.focused?.seriesId === e.id && L.focused.index === ne, O = () => {
            !L || E || L.setFocused({
              seriesId: e.id,
              index: ne,
              x: fe,
              y: pe.y1 - pe.y0,
              clientX: ae + ie / 2,
              clientY: Ee
            });
          }, _ = () => {
            L?.focused?.seriesId === e.id && L.focused.index === ne && L.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: ae,
              y: Ee,
              width: ie,
              height: Ie,
              fill: j ? `url(#${te})` : q,
              ...j ? {} : { fillOpacity: b },
              stroke: Ne ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : j && T ? q : void 0,
              strokeWidth: Ne ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: E || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${fe instanceof Date ? fe.toDateString() : fe} value ${pe.y1 - pe.y0}`,
              onMouseEnter: O,
              onFocus: O,
              onMouseLeave: _,
              onBlur: _
            },
            ne
          );
        })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: E ? S : I,
      "aria-hidden": E ? !0 : void 0,
      children: [
        j && /* @__PURE__ */ n.jsxs("defs", { children: [
          p === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: te,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: q, stopOpacity: 0.3 }),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: q,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ n.jsx(
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
          p === "category" && e.data.map((Z, ne) => {
            const U = C && C[ne] || (o === "region" ? Tn(String(Z.x), ne) : Pt(ne)), ie = `${te}-${ne}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: ie,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: U, stopOpacity: 0.3 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "60%", stopColor: U, stopOpacity: 0.14 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: U, stopOpacity: 0.06 })
                ]
              },
              ie
            );
          })
        ] }),
        e.data.map((Z, ne) => {
          const fe = a(Z), U = y(D ? Z.x : fe);
          let ie, ae;
          if (D) {
            const H = oe;
            if (r <= 1)
              ae = H, ie = U;
            else {
              ae = Math.max(
                1,
                H / (r + (r - 1) * N)
              );
              const Y = ae * N, X = ae * r + Y * (r - 1);
              ie = U + (H - X) / 2 + t * (ae + Y);
            }
          } else {
            const H = Q.find((Y) => Y.center === U);
            if (!H || !W)
              ae = G, ie = U - G / 2, g && ae < g && (ae = g, ie = U - ae / 2);
            else {
              const { barWidth: Y } = W;
              ae = Y;
              const X = r > 1 ? Y * N : 0, re = ae * r + X * (r - 1);
              let de = U - re / 2;
              de < H.left && (de = H.left), de + re > H.right && (de = Math.max(H.left, H.right - re)), ie = de + t * (ae + X);
            }
            if (g && ae < g) {
              const Y = Q.find(
                (X) => Math.abs(X.center - U) < 0.5
              );
              if (Y) {
                const X = Math.max(2, Y.right - Y.left - 1), re = Math.min(X, g);
                if (re > ae)
                  if (r <= 1)
                    ae = re, ie = Math.max(
                      Y.left,
                      Math.min(Y.right - ae, U - ae / 2)
                    );
                  else {
                    const de = re * N, ue = re * r + de * (r - 1);
                    if (ue <= Y.right - Y.left - 1) {
                      ae = re;
                      const he = ue;
                      let we = U - he / 2;
                      we < Y.left && (we = Y.left), we + he > Y.right && (we = Math.max(
                        Y.left,
                        Y.right - he
                      )), ie = we + t * (ae + de);
                    }
                  }
              }
            }
          }
          const pe = ie + ae / 2, ce = k(Z.y), me = Math.min(ee, ce), Ee = Math.abs(ee - ce), Ie = !E && L?.focused?.seriesId === e.id && L.focused.index === ne, Ne = () => {
            !L || E || L.setFocused({
              seriesId: e.id,
              index: ne,
              x: fe,
              y: Z.y,
              clientX: pe,
              clientY: ce
            });
          }, O = () => {
            L?.focused?.seriesId === e.id && L.focused.index === ne && L.clear();
          }, _ = p === "category" && C ? C[ne] : void 0, P = p === "category" ? _ || (o === "region" ? Tn(String(Z.x), ne) : Pt(ne)) : q, z = p === "category" ? `${te}-${ne}` : te, $ = j && T ? P : p === "category" ? o === "region" ? Br(String(Z.x), ne) : bn(ne) : le, F = Ie ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : $ || P;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: ie,
              y: me,
              width: ae,
              height: Ee || 1,
              fill: j ? `url(#${z})` : P,
              ...j ? {} : { fillOpacity: b },
              stroke: F,
              strokeWidth: Ie ? 2 : 1,
              className: "fdp-bar",
              tabIndex: E || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${fe instanceof Date ? fe.toDateString() : fe} value ${Z.y}`,
              onMouseEnter: Ne,
              onFocus: Ne,
              onMouseLeave: O,
              onBlur: O
            },
            ne
          );
        })
      ]
    }
  );
}, r1 = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: o = 0.1,
  paddingOuter: a = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = ln(), d = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, u = V.useMemo(() => e.flatMap((g) => g.data), [e]), f = V.useMemo(() => {
    const g = /* @__PURE__ */ new Set();
    return u.forEach((j) => g.add(j.x)), Array.from(g);
  }, [u]), p = V.useMemo(
    () => Math.max(0, ...u.map((g) => g.y)),
    [u]
  ), h = V.useMemo(
    () => Wi().domain(f).range([0, d]).paddingInner(o).paddingOuter(a),
    [f, d, o, a]
  ), v = V.useMemo(
    () => Ir().domain([0, p]).nice().range([c, 0]),
    [p, c]
  ), x = V.useMemo(
    () => ({
      xScale: h,
      yScale: v,
      getXTicks: () => f,
      getYTicks: (g = i) => v.ticks(g)
    }),
    [h, v, f, i]
  );
  return /* @__PURE__ */ n.jsx(Ka.Provider, { value: x, children: s });
}, o1 = ({
  title: e,
  description: t,
  source: r,
  table: o,
  className: a,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = V.useId(), c = s || d, u = t ? `${c}-desc` : void 0, f = r ? `${c}-src` : void 0, p = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: c,
      className: Pr("fdp-chart fdp-chart--noscript", a),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": Pr(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !p && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(Qt, { ...o }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(Qt, { ...o }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, a1 = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: o }) => {
  const a = V.useRef(null);
  return V.useEffect(() => {
    const s = a.current;
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
      if (typeof window > "u") return;
      const l = window.setTimeout(i, r);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: a, children: o });
}, Dm = ({
  label: e,
  value: t,
  unit: r,
  delta: o,
  status: a = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: d,
  loading: c = !1,
  error: u,
  valueFormatter: f,
  className: p,
  style: h,
  id: v,
  announceDelta: x = !0,
  visual: g
}) => {
  const j = V.useId(), T = v || j, I = `${T}-label`, S = `${T}-value`, b = `${T}-delta`, C = typeof t == "number" && !Number.isNaN(t), N = c ? "—" : u ? "" : C ? f ? f(t) : t.toLocaleString() : t;
  let w, m = "", y = "";
  if (o && !c && !u) {
    w = o.direction || (o.value > 0 ? "up" : o.value < 0 ? "down" : "neutral");
    const k = Math.abs(o.value), M = w === "up" ? `+${k}` : w === "down" ? `-${k}` : "0", A = o.isPercent ? "%" : "";
    if (m = `${M}${A}`, o.ariaLabel)
      y = o.ariaLabel;
    else {
      const E = o.invert ? w === "down" : w === "up";
      y = `${w === "neutral" ? "no change" : w === "up" ? "up" : "down"} ${k}${A}${w === "neutral" ? "" : E ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: Pr(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        a && `fdp-metric-card--status-${a}`,
        c && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        p
      ),
      style: h,
      role: "group",
      "aria-labelledby": I,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: I, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: S, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: N }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          o && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: b,
              "aria-label": y,
              className: Pr(
                "fdp-metric-card__delta",
                w && `fdp-metric-card__delta--${w}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: m }),
                o.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: o.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        g && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: g }),
        x && o && !o.ariaLabel && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: y })
      ] })
    }
  );
};
var dt = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(dt || {}), Rl = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Rl || {}), an = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(an || {}), He = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(He || {});
const Qa = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
Qa.reduce(
  (e, t, r) => (e[t] = r + 1, e),
  {}
);
const Tm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Lm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Bl = Qa.reduce(
  (e, t, r) => (e[t] = {
    id: t,
    rank: r + 1,
    label: Tm[t],
    category: Lm[t],
    participatesInRanking: !0
  }, e),
  {}
);
Qa.map(
  (e) => Bl[e]
);
var nr = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(nr || {}), sn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(sn || {}), Hl = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Hl || {});
const Ln = {
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
function wo(e) {
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
function So(e) {
  switch (e) {
    case He.Improvement:
      return "Improvement signal";
    case He.Concern:
      return "Concern signal";
    case He.Neither:
      return "Common cause variation";
    case He.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function zl(e) {
  switch (e) {
    case sn.Pass:
      return "Target met";
    case sn.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Am(e, t, r) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const o = Math.abs((r - e) / t);
  return o < 1 ? "Within 1σ" : o < 2 ? "Between 1–2σ" : o < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Tt = {
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
function Ol(e) {
  return e ? Tt[e]?.token ?? Tt.neither.token : Tt.neither.token;
}
function $m(e) {
  return e ? Tt[e]?.hex ?? Tt.neither.hex : Tt.neither.hex;
}
var pn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(pn || {});
const Em = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Pm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var ut = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ut || {}), Re = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Re || {}), _t = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(_t || {}), Me = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Me || {});
const Fm = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, o = parseInt(t.slice(2, 4), 16) / 255, a = parseInt(t.slice(4, 6), 16) / 255, s = [r, o, a].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, _o = {
  special_cause_deteriorating: {
    hex: Tt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Tt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Tt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Tt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(_o).forEach((e) => {
  e.text || (e.text = Fm(e.hex));
});
const Ul = (e) => _o[e], es = (e) => _o[e].judgement || "none", li = {
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
function Rm(e, t) {
  let r;
  return e === "common_cause" ? r = li.common : r = li.special[t === "lower" ? "lower" : "higher"], r.map((o) => ({ ...o }));
}
let ua = null;
try {
  ua = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const bt = (e, t) => {
  if (!ua) return t;
  const r = e.split(".");
  let o = ua;
  for (const s of r) {
    if (o == null) break;
    o = o[s];
  }
  const a = o;
  return a == null ? t : typeof a == "string" || typeof a == "number" ? String(a) : a.$value != null ? String(a.$value) : a.value != null ? String(a.value) : t;
}, ko = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: bt("gradient.stop.start-opacity", "0.12"),
  mid: bt("gradient.stop.mid-opacity", "0.03"),
  end: bt("gradient.stop.end-opacity", "0"),
  triStart: bt(
    "gradient.stop.triangle-start-opacity",
    bt("gradient.stop.start-opacity", "0.12")
  ),
  triMid: bt(
    "gradient.stop.triangle-mid-opacity",
    bt("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: bt(
    "gradient.stop.triangle-end-opacity",
    bt("gradient.stop.end-opacity", "0")
  )
}), Co = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, No = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, Wl = () => bt(Co.improvement, No.improvement), Gl = () => bt(Co.concern, No.concern), Bm = () => bt(Co.noJudgement, No.noJudgement), dn = () => bt(Co.common, No.common);
function xr(e) {
  switch (e) {
    case He.Improvement:
      return Wl();
    case He.Concern:
      return Gl();
    case He.Neither:
    case He.Suppressed:
    default:
      return dn();
  }
}
function Vl(e) {
  switch (e) {
    case Me.SpecialCauseImproving:
      return Wl();
    case Me.SpecialCauseDeteriorating:
      return Gl();
    case Me.SpecialCauseNoJudgement:
      return Bm();
    case Me.CommonCause:
    default:
      return dn();
  }
}
var Nt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Nt || {}), We = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(We || {}), je = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(je || {}), at = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(at || {}), hn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(hn || {}), At = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(At || {}), An = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(An || {}), jn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(jn || {}), gt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(gt || {}), Ft = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Ft || {}), $t = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))($t || {}), Hr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Hr || {}), zr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(zr || {});
const nn = {
  [at.SinglePoint]: 1,
  [at.TwoSigma]: 2,
  [at.Shift]: 3,
  [at.Trend]: 4
}, ci = 3.267, Hm = 2.66, di = 0.2777;
function Pe(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Mn(e) {
  return e.reduce((t, r) => t + r, 0) / (e.length || 1);
}
function ui(e, t) {
  const r = new Array(e.length).fill(null);
  let o = null;
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    if (!(t[a] || !Pe(s))) {
      if (o !== null) {
        const i = e[o];
        Pe(i) && (r[a] = Math.abs(s - i));
      }
      o = a;
    }
  }
  return r;
}
function fi(e, t) {
  const r = e.filter(Pe);
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let o = r.slice();
  if (t) {
    const s = Mn(o), i = ci * s;
    o = o.filter((l) => l <= i);
  }
  const a = Mn(o);
  return { mrMean: a, mrUcl: ci * a };
}
function pi(e, t) {
  if (!Pe(e) || !Pe(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const r = Hm * t, o = 2 / 3 * r, a = 1 / 3 * r;
  return {
    upperProcessLimit: e + r,
    lowerProcessLimit: e - r,
    upperTwoSigma: e + o,
    lowerTwoSigma: e - o,
    upperOneSigma: e + a,
    lowerOneSigma: e - a
  };
}
function zm(e, t, r, o) {
  if (e === Nt.T) {
    const f = t.map((w) => Pe(w) && w > 0 ? Math.pow(w, di) : null), p = ui(f, r), h = fi(p, o), v = f.filter((w, m) => !r[m] && Pe(w)), x = v.length ? Mn(v) : NaN, g = pi(x, h.mrMean), j = (w) => Pe(w) && w > 0 ? Math.pow(w, 1 / di) : null, T = Pe(g.upperProcessLimit) ? j(g.upperProcessLimit) : null, I = Pe(g.lowerProcessLimit) && g.lowerProcessLimit > 0 ? j(g.lowerProcessLimit) : null, S = Pe(g.upperTwoSigma) ? j(g.upperTwoSigma) : null, b = Pe(g.lowerTwoSigma) && g.lowerTwoSigma > 0 ? j(g.lowerTwoSigma) : null, C = Pe(g.upperOneSigma) ? j(g.upperOneSigma) : null, N = Pe(g.lowerOneSigma) && g.lowerOneSigma > 0 ? j(g.lowerOneSigma) : null;
    return {
      mean: Pe(x) && x > 0 ? j(x) : null,
      mr: p,
      mrMean: h.mrMean,
      mrUcl: h.mrUcl,
      upperProcessLimit: T,
      lowerProcessLimit: I,
      upperTwoSigma: S,
      lowerTwoSigma: b,
      upperOneSigma: C,
      lowerOneSigma: N
    };
  }
  if (e === Nt.G) {
    const f = t.filter((k, M) => !r[M] && Pe(k)), p = f.length ? Mn(f) : NaN, h = Pe(p) ? 1 / (p + 1) : NaN, v = (k) => {
      if (!Pe(h) || h <= 0 || h >= 1) return NaN;
      const M = Math.ceil(Math.log(1 - k) / Math.log(1 - h)) - 1;
      return Math.max(0, M);
    }, x = 135e-5, g = 1 - 135e-5, j = 0.02275, T = 1 - 0.02275, I = 0.158655, S = 1 - 0.158655, b = v(g), C = v(x), N = v(T), w = v(j), m = v(S), y = v(I);
    return {
      mean: Pe(p) ? p : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Pe(b) ? b : null,
      lowerProcessLimit: Pe(C) ? C : null,
      upperTwoSigma: Pe(N) ? N : null,
      lowerTwoSigma: Pe(w) ? w : null,
      upperOneSigma: Pe(m) ? m : null,
      lowerOneSigma: Pe(y) ? y : null
    };
  }
  if (e !== Nt.XmR)
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
  const a = ui(t, r), s = a.filter(Pe), i = s.length ? Mn(s) : NaN, l = Pe(i) ? 3.267 * i : NaN;
  let d = NaN;
  {
    const f = t.reduce((p, h, v) => {
      if (r[v] || !Pe(h)) return p;
      if (!o)
        return p.push(h), p;
      const x = a[v];
      return (x === null || !Pe(l) || Pe(x) && x <= l) && p.push(h), p;
    }, []);
    d = f.length ? Mn(f) : NaN;
  }
  const c = fi(a, o), u = pi(d, c.mrMean);
  return {
    mean: d,
    mr: a,
    mrMean: c.mrMean,
    mrUcl: c.mrUcl,
    ...u
  };
}
function Om(e, t) {
  const r = e.map((d, c) => c).filter((d) => !e[d].ghost && Pe(e[d].value)), o = (d) => e[d], a = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const d of r) {
    const c = o(d);
    if (!Pe(c.mean) || !Pe(c.value) ? (i = [], l = []) : c.value > c.mean ? (i.push(d), l = []) : c.value < c.mean ? (l.push(d), i = []) : (i = [], l = []), i.length >= a)
      for (const u of i) o(u).shiftUp = !0;
    if (l.length >= a)
      for (const u of l) o(u).shiftDown = !0;
  }
  for (let d = 0; d <= r.length - 3; d++) {
    const u = r.slice(d, d + 3).map(o);
    if (!u.every((S) => Pe(S.value) && Pe(S.mean)))
      continue;
    const f = u[0].mean, p = u.every((S) => S.value > f), h = u.every((S) => S.value < f);
    if (!p && !h)
      continue;
    const v = u[0].upperTwoSigma ?? 1 / 0, x = u[0].lowerTwoSigma ?? -1 / 0, g = u[0].upperProcessLimit ?? 1 / 0, j = u[0].lowerProcessLimit ?? -1 / 0, T = u.filter((S) => t.twoSigmaIncludeAboveThree ? S.value > v : S.value > v && S.value <= g), I = u.filter((S) => t.twoSigmaIncludeAboveThree ? S.value < x : S.value < x && S.value >= j);
    p && T.length >= 2 && T.forEach((S) => S.twoSigmaUp = !0), h && I.length >= 2 && I.forEach((S) => S.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let d = 0; d <= r.length - 5; d++) {
      const u = r.slice(d, d + 5).map(o);
      if (!u.every((T) => Pe(T.value) && Pe(T.mean)))
        continue;
      const f = u[0].mean, p = u.every((T) => T.value > f), h = u.every((T) => T.value < f);
      if (!p && !h)
        continue;
      const v = u[0].upperOneSigma ?? 1 / 0, x = u[0].lowerOneSigma ?? -1 / 0, g = u.filter((T) => T.value > v), j = u.filter((T) => T.value < x);
      p && g.length >= 4 && g.forEach((T) => T.fourOfFiveUp = !0), h && j.length >= 4 && j.forEach((T) => T.fourOfFiveDown = !0);
    }
  for (let d = 0; d <= r.length - s; d++) {
    const c = r.slice(d, d + s), u = c.map(o);
    if (!u.every((h) => Pe(h.value)))
      continue;
    let f = !0, p = !0;
    for (let h = 1; h < u.length && (u[h].value > u[h - 1].value || (f = !1), u[h].value < u[h - 1].value || (p = !1), !(!f && !p)); h++)
      ;
    f && c.forEach((h) => o(h).trendUp = !0), p && c.forEach((h) => o(h).trendDown = !0);
  }
}
function Yl(e) {
  const t = [], r = [];
  e.singlePointUp && t.push({
    id: at.SinglePoint,
    rank: nn[at.SinglePoint]
  }), e.singlePointDown && r.push({
    id: at.SinglePoint,
    rank: nn[at.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: at.TwoSigma,
    rank: nn[at.TwoSigma]
  }), e.twoSigmaDown && r.push({
    id: at.TwoSigma,
    rank: nn[at.TwoSigma]
  }), e.shiftUp && t.push({ id: at.Shift, rank: nn[at.Shift] }), e.shiftDown && r.push({ id: at.Shift, rank: nn[at.Shift] }), e.trendUp && t.push({ id: at.Trend, rank: nn[at.Trend] }), e.trendDown && r.push({ id: at.Trend, rank: nn[at.Trend] });
  const o = t.reduce((i, l) => Math.max(i, l.rank), 0), a = r.reduce((i, l) => Math.max(i, l.rank), 0), s = o > a ? hn.Upwards : a > o ? hn.Downwards : hn.Same;
  return { up: t, dn: r, upMax: o, dnMax: a, primeDirection: s };
}
function hi(e, t) {
  const r = t === We.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === We.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, o = t === We.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === We.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: r, opposite: o };
}
function mi(e, t, r, o = !1, a, s, i = !1) {
  const { up: l, dn: d, upMax: c, dnMax: u, primeDirection: f } = Yl(e);
  e.primeDirection = f;
  const p = e.specialCauseImprovementValue, h = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Um({ row: e, metric: t, metricConflictRule: r, preferImprovementWhenConflict: o, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: a, ruleHierarchy: s }), t === We.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? je.ImprovementHigh : e.specialCauseConcernValue !== null ? je.ConcernLow : je.CommonCause : t === We.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? je.ImprovementLow : e.specialCauseConcernValue !== null ? je.ConcernHigh : je.CommonCause : e.variationIcon = je.CommonCause;
  const v = e.specialCauseImprovementValue !== null ? At.Up : e.specialCauseConcernValue !== null ? At.Down : void 0, x = v === At.Up ? c : v === At.Down ? u : Math.max(c, u);
  e.primeRank = x || void 0;
  const g = v === At.Up ? l.find((j) => j.rank === x) : v === At.Down ? d.find((j) => j.rank === x) : void 0;
  return e.primeRuleId = g?.id, { originalImprovement: p, originalConcern: h };
}
function Um(e) {
  const {
    row: t,
    metric: r,
    metricConflictRule: o,
    preferImprovementWhenConflict: a,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? hn.Same,
    conflictStrategy: l,
    ruleHierarchy: d
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (r === We.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (r === We.Down) {
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
  const c = a ? jn.PreferImprovement : l ?? jn.SqlPrimeThenRule;
  if (c === jn.PreferImprovement) {
    r === We.Up ? t.specialCauseConcernValue = null : r === We.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (c === jn.RuleHierarchy) {
    const u = d ?? [at.Trend, at.Shift, at.TwoSigma, at.SinglePoint], { up: f, dn: p } = Yl(t);
    for (const h of u) {
      const v = f.some((g) => g.id === h), x = p.some((g) => g.id === h);
      if (v && !x) {
        r === We.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (x && !v) {
        r === We.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (v && x) {
        (r === We.Up || r === We.Down) && (o === An.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === hn.Upwards ? r === We.Up ? t.specialCauseConcernValue = null : r === We.Down && (t.specialCauseImprovementValue = null) : i === hn.Downwards ? r === We.Up ? t.specialCauseImprovementValue = null : r === We.Down && (t.specialCauseConcernValue = null) : o === An.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var fa = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(fa || {});
function Wm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Gm(e) {
  const t = Wm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function gi(e) {
  const t = [], r = (i, l, d) => ({
    segStart: i,
    segSide: l,
    minV: d,
    maxV: d,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), o = (i, l, d, c, u) => ({
    minV: Math.min(d, i),
    maxV: Math.max(c, i),
    maxAbsDelta: Math.max(u, l)
  }), a = (i, l, d, c, u, f, p, h) => {
    i.push({
      trendDirection: h,
      start: l,
      end: d,
      side: c,
      minValue: u,
      maxValue: f,
      maxAbsDeltaFromMean: p
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
    let d = s, c = s;
    for (; c < e.length; c++) {
      const j = e[c];
      if (!j || j.value == null || j.ghost || !(l === "Up" ? j.trendUp : j.trendDown)) break;
    }
    const u = c - 1, f = [];
    let p, h, v = 1 / 0, x = -1 / 0, g = 0;
    for (let j = d; j <= u; j++) {
      const T = e[j];
      if (T.value == null) continue;
      const I = T.value - (T.mean ?? 0), S = Gm(I);
      if (!S) {
        p !== void 0 && (a(f, p, j - 1, h, v, x, g, l), p = void 0, h = void 0, v = 1 / 0, x = -1 / 0, g = 0);
        continue;
      }
      if (p === void 0)
        ({ segStart: p, segSide: h, minV: v, maxV: x, maxAbsDelta: g } = (() => {
          const b = r(j, S, T.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(I)
          };
        })());
      else if (S !== h)
        a(f, p, j - 1, h, v, x, g, l), { segStart: p, segSide: h, minV: v, maxV: x, maxAbsDelta: g } = (() => {
          const b = r(j, S, T.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(I)
          };
        })();
      else {
        const b = o(T.value, Math.abs(I), v, x, g);
        v = b.minV, x = b.maxV, g = b.maxAbsDelta;
      }
    }
    p !== void 0 && a(f, p, u, h, v, x, g, l), t.push({ trendDirection: l, start: d, end: u, segments: f }), s = u + 1;
  }
  return t;
}
function Vm(e) {
  if (e === We.Up) return "Above";
  if (e === We.Down) return "Below";
}
function Ym(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function xi(e, t) {
  const r = t.strategy ?? gt.CrossingAfterFavourable, o = Vm(t.metricImprovement), a = Ym(o), s = [];
  for (const i of e) {
    if (!o) {
      if (r === gt.ExtremeFavourable || r === gt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let d = l[0];
        for (const c of l)
          c.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean && (d = c);
        s.push(d);
      }
      continue;
    }
    if (r === gt.FavourableSide) {
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (r === gt.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (r === gt.CrossingAfterFavourable) {
      const l = i.segments;
      let d;
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        if (u.side === o && c > 0 && l[c - 1].side !== o) {
          d = u;
          break;
        }
      }
      if (!d) {
        const c = l.filter((u) => u.side === o);
        c.length > 0 && (d = c.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          c[0]
        ));
      }
      d && s.push(d);
      continue;
    }
    if (r === gt.CrossingAfterUnfavourable) {
      const l = i.segments;
      let d;
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        if (u.side === a && c > 0 && l[c - 1].side !== a) {
          d = u;
          break;
        }
      }
      if (!d) {
        const c = l.filter((u) => u.side === a);
        c.length > 0 && (d = c.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          c[0]
        ));
      }
      d && s.push(d);
      continue;
    }
    if (r === gt.ExtremeFavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      const d = l.reduce(
        (c, u) => u.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? u : c
      );
      s.push(d);
      continue;
    }
    if (r === gt.ExtremeUnfavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const d = l.reduce((c, u) => u.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? u : c);
      s.push(d);
      continue;
    }
    if (r === gt.FirstFavourable) {
      const l = i.segments.find((d) => d.side === o);
      l && s.push(l);
      continue;
    }
    if (r === gt.FirstUnfavourable) {
      const l = i.segments.find((d) => d.side === a);
      l && s.push(l);
      continue;
    }
    if (r === gt.LongestFavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      const d = l.reduce(
        (c, u) => u.end - u.start > c.end - c.start ? u : c
      );
      s.push(d);
      continue;
    }
    if (r === gt.LongestUnfavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const d = l.reduce((c, u) => u.end - u.start > c.end - c.start ? u : c);
      s.push(d);
      continue;
    }
    if (r === gt.LastFavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (r === gt.LastUnfavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var rt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(rt || {}), Fn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Fn || {});
function Zm(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), r = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: r };
}
function lr(e, t) {
  const r = t.metricImprovement, o = t.trendVisualMode ?? "Ungated", a = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = Zm(s);
    if (i && l) return "Improvement";
    switch (s.variationIcon) {
      case je.ImprovementHigh:
      case je.ImprovementLow:
        return "Improvement";
      case je.ConcernHigh:
      case je.ConcernLow:
        return "Concern";
      case je.NeitherHigh:
      case je.NeitherLow: {
        if (o === "Ungated" && r !== We.Neither) {
          if (i && !l)
            return r === We.Up ? "Improvement" : "Concern";
          if (l && !i)
            return r === We.Down ? "Improvement" : "Concern";
        }
        return a ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function qm(e, t, r) {
  const o = r?.mode ?? "Disabled";
  if (!e.length) return [];
  let a = lr(e, {
    metricImprovement: t,
    trendVisualMode: Fn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (o !== "RecalcCrossing" || t === We.Neither) return a;
  const s = Math.max(0, r?.preWindow ?? 2), i = Math.max(0, r?.postWindow ?? 3), l = r?.prePolarity ?? "Opposite", d = (f, p) => {
    if (f < 0 || f >= a.length) return;
    const h = a[f];
    (h === rt.Common || h === rt.NoJudgement) && (a[f] = p);
  }, c = (f) => {
    if (f == null) return null;
    const p = e.reduce((v, x) => (x.partitionId === f && typeof x.value == "number" && !x.ghost && v.push(x.value), v), []);
    return p.length ? p.reduce((v, x) => v + x, 0) / p.length : null;
  }, u = Array.isArray(r?.boundaryIndices) && r.boundaryIndices.length ? r.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, p, h) => {
    if (h === 0) return f;
    const v = e[h - 1];
    return v && p && p.partitionId !== v.partitionId && f.push(h), f;
  }, []);
  for (const f of u) {
    const p = e[f - 1], h = e[f];
    if (!p || !h)
      continue;
    let v = f - 1;
    for (; v - 1 >= 0 && e[v - 1] && e[v - 1].partitionId === p.partitionId; )
      v--;
    let x = f;
    for (; x + 1 < e.length && e[x + 1] && e[x + 1].partitionId === h.partitionId; )
      x++;
    let g = null;
    for (let C = f - 1; C >= 0; C--) {
      const N = e[C];
      if (N.partitionId !== p.partitionId) break;
      if (typeof N.mean == "number") {
        g = N.mean;
        break;
      }
    }
    let j = null;
    for (let C = f; C < e.length; C++) {
      const N = e[C];
      if (N.partitionId !== h.partitionId) break;
      if (typeof N.mean == "number") {
        j = N.mean;
        break;
      }
    }
    if (g == null && (g = c(p.partitionId ?? null)), j == null && (j = c(h.partitionId ?? null)), g == null || j == null)
      continue;
    const T = j - g, I = t === We.Up ? T > 0 : T < 0, S = I ? rt.Improvement : rt.Concern, b = l === "Same" ? S : I ? rt.Concern : rt.Improvement;
    for (let C = 1; C <= s; C++) {
      const N = f - C;
      if (N < v) break;
      d(N, b);
    }
    for (let C = 0; C < i; C++) {
      const N = f + C;
      if (N > x) break;
      d(N, S);
    }
  }
  return a;
}
function Zl(e) {
  if (!e) return {};
  if (typeof e == "object" && ("minimumPoints" in e || "shiftPoints" in e || "trendPoints" in e))
    return e;
  const t = e, r = {};
  if (t.thresholds) {
    const o = t.thresholds;
    o.minimumPoints != null && (r.minimumPoints = o.minimumPoints), o.shiftPoints != null && (r.shiftPoints = o.shiftPoints), o.trendPoints != null && (r.trendPoints = o.trendPoints), o.excludeMovingRangeOutliers != null && (r.excludeMovingRangeOutliers = o.excludeMovingRangeOutliers);
  }
  if (t.eligibility && t.eligibility.chartLevel != null && (r.chartLevelEligibility = t.eligibility.chartLevel), t.parity && (t.parity.trendAcrossPartitions != null && (r.trendAcrossPartitions = t.parity.trendAcrossPartitions), t.parity.twoSigmaIncludeAboveThree != null && (r.twoSigmaIncludeAboveThree = t.parity.twoSigmaIncludeAboveThree), t.parity.enableFourOfFiveRule != null && (r.enableFourOfFiveRule = t.parity.enableFourOfFiveRule)), t.conflict && (t.conflict.preferImprovementWhenConflict != null && (r.preferImprovementWhenConflict = t.conflict.preferImprovementWhenConflict), t.conflict.preferTrendWhenConflict != null && (r.preferTrendWhenConflict = t.conflict.preferTrendWhenConflict), t.conflict.strategy != null && (r.conflictStrategy = t.conflict.strategy), t.conflict.ruleHierarchy != null && (r.ruleHierarchy = t.conflict.ruleHierarchy), t.conflict.metricRuleOnTie != null && (r.metricConflictRule = t.conflict.metricRuleOnTie)), t.trend?.segmentation) {
    const o = t.trend.segmentation;
    o.mode != null && (r.trendSegmentationMode = o.mode), o.favourableSegmentation != null && (r.trendFavourableSegmentation = o.favourableSegmentation), o.strategy != null && (r.trendSegmentationStrategy = o.strategy), o.dominatesHighlightedWindow != null && (r.trendDominatesHighlightedWindow = o.dominatesHighlightedWindow);
  }
  return r;
}
function cr(e) {
  const { chartType: t, metricImprovement: r, data: o } = e, a = Zl(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: An.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: jn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Ft.Off,
    trendSegmentationStrategy: gt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...a
  }, i = a?.trendSegmentationMode || (a?.trendFavourableSegmentation === !0 ? Ft.Always : a?.trendFavourableSegmentation === !1 ? Ft.Off : s.trendSegmentationMode), l = o.map((x, g) => ({
    rowId: g + 1,
    x: x.x,
    value: Pe(x.value) ? x.value : null,
    ghost: !!x.ghost,
    baseline: !!x.baseline,
    target: Pe(x.target) ? x.target : null
  })), d = [];
  let c = [];
  for (const x of l)
    x.baseline && c.length && (d.push(c), c = []), c.push(x);
  c.length && d.push(c);
  const u = [], f = (s.trendFavourableSegmentation || i !== Ft.Off) && !s.preferImprovementWhenConflict, p = l.filter((x) => !x.ghost && Pe(x.value)).length, h = !!s.chartLevelEligibility && p >= s.minimumPoints;
  let v = 0;
  for (const x of d) {
    v++;
    const g = x.map((b) => b.value), j = x.map((b) => b.ghost), T = zm(
      t,
      g,
      j,
      !!s.excludeMovingRangeOutliers
    ), I = x.map((b, C) => {
      const N = !b.ghost && Pe(b.value) ? g.slice(0, C + 1).filter((m, y) => !j[y] && Pe(m)).length : 0, w = h ? !0 : N >= s.minimumPoints;
      return {
        rowId: b.rowId,
        x: b.x,
        value: Pe(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: v,
        pointRank: N,
        mean: (w || h) && Pe(T.mean) ? T.mean : null,
        upperProcessLimit: w || h ? T.upperProcessLimit : null,
        lowerProcessLimit: w || h ? T.lowerProcessLimit : null,
        upperTwoSigma: w || h ? T.upperTwoSigma : null,
        lowerTwoSigma: w || h ? T.lowerTwoSigma : null,
        upperOneSigma: w || h ? T.upperOneSigma : null,
        lowerOneSigma: w || h ? T.lowerOneSigma : null,
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
        variationIcon: je.CommonCause
      };
    });
    for (const b of I)
      b.ghost || !Pe(b.value) || b.mean === null || (Pe(b.upperProcessLimit) && b.value > b.upperProcessLimit && (b.singlePointUp = !0), Pe(b.lowerProcessLimit) && b.value < b.lowerProcessLimit && (b.singlePointDown = !0));
    Om(I, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((b) => {
      const C = b.some(
        (k) => (k.singlePointUp || k.twoSigmaUp || k.shiftUp || k.trendUp) && (k.singlePointDown || k.twoSigmaDown || k.shiftDown || k.trendDown)
      );
      if (i === Ft.Off || i === Ft.AutoWhenConflict && !C)
        return;
      const N = gi(b), w = xi(N, {
        metricImprovement: r,
        strategy: s.trendSegmentationStrategy
      }), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
      for (const k of w)
        for (let M = k.start; M <= k.end; M++)
          k.trendDirection === fa.Up ? m.add(M) : y.add(M);
      b.forEach((k, M) => {
        k.trendUp = m.has(M) ? k.trendUp : !1, k.trendDown = y.has(M) ? k.trendDown : !1, s.trendDominatesHighlightedWindow && (m.has(M) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : y.has(M) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
      });
    })(I);
    for (const b of I) {
      if (b.ghost || !Pe(b.value) || b.mean === null) {
        u.push(b);
        continue;
      }
      const { aligned: C, opposite: N } = hi(
        b,
        r
      );
      if (b.specialCauseImprovementValue = C ? b.value : null, b.specialCauseConcernValue = N ? b.value : null, r === We.Neither) {
        const w = b.singlePointUp || b.twoSigmaUp || b.shiftUp || b.trendUp, m = b.singlePointDown || b.twoSigmaDown || b.shiftDown || b.trendDown;
        b.variationIcon = w ? je.NeitherHigh : m ? je.NeitherLow : je.CommonCause;
      } else
        mi(b, r, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      u.push(b);
    }
  }
  if (s.trendAcrossPartitions) {
    const x = u.map((g, j) => ({ idx: j, r: g })).filter(({ r: g }) => !g.ghost && Pe(g.value));
    if (x.length >= s.trendPoints)
      for (let g = 0; g <= x.length - s.trendPoints; g++) {
        const j = x.slice(g, g + s.trendPoints).map((b) => b.idx), T = j.map((b) => u[b]);
        if (!T.every((b) => Pe(b.value))) continue;
        let I = !0, S = !0;
        for (let b = 1; b < T.length && (T[b].value > T[b - 1].value || (I = !1), T[b].value < T[b - 1].value || (S = !1), !(!I && !S)); b++)
          ;
        I && j.forEach((b) => u[b].trendUp = !0), S && j.forEach((b) => u[b].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const x = u.some(
        (g) => (g.singlePointUp || g.twoSigmaUp || g.shiftUp || g.trendUp) && (g.singlePointDown || g.twoSigmaDown || g.shiftDown || g.trendDown)
      );
      if (i === Ft.Always || i === Ft.AutoWhenConflict && x) {
        const g = gi(u), j = xi(g, { metricImprovement: r, strategy: s.trendSegmentationStrategy }), T = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
        for (const S of j)
          for (let b = S.start; b <= S.end; b++)
            S.trendDirection === fa.Up ? T.add(b) : I.add(b);
        u.forEach((S, b) => {
          S.trendUp = T.has(b) ? S.trendUp : !1, S.trendDown = I.has(b) ? S.trendDown : !1, s.trendDominatesHighlightedWindow && (T.has(b) ? (S.singlePointDown = !1, S.twoSigmaDown = !1, S.shiftDown = !1) : I.has(b) && (S.singlePointUp = !1, S.twoSigmaUp = !1, S.shiftUp = !1));
        });
      }
    }
    for (const x of u) {
      if (x.ghost || !Pe(x.value) || x.mean === null || r === We.Neither) continue;
      const { aligned: g, opposite: j } = hi(x, r);
      x.specialCauseImprovementValue = g ? x.value : null, x.specialCauseConcernValue = j ? x.value : null, mi(x, r, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function ts(e, t) {
  const r = cr(e), o = lr(r.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Fn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), a = t?.boundaryWindows;
  if (!a || a.mode !== "RecalcCrossing") return { rows: r.rows, visuals: o };
  const s = a.directionOverride ?? e.metricImprovement, i = qm(r.rows, s, a), l = o.map((d, c) => {
    const u = i[c];
    if (d === rt.Common || d === rt.NoJudgement) {
      if (u === rt.Improvement) return rt.Improvement;
      if (u === rt.Concern) return rt.Concern;
    }
    return d;
  });
  return { rows: r.rows, visuals: l };
}
var ql = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(ql || {});
function Jm(e, t, r) {
  const o = r?.trendVisualMode ?? Fn.Ungated, a = r?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, p) => f?.baseline ? p : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: d } = ts(e, {
    trendVisualMode: o,
    enableNeutralNoJudgement: a,
    boundaryWindows: i
  });
  let c = d.slice(), u = s.length ? s[0] : -1;
  if (u < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (c[u - 1] = rt.Common), { rows: l, visuals: c };
}
const Jl = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: An.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Xm(e) {
  return { ...Jl, ...e ?? {} };
}
var ft = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ft || {}), mn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(mn || {}), rr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(rr || {});
const pa = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === We.Up ? ut.HigherIsBetter : i.improvementDirection === We.Down ? ut.LowerIsBetter : ut.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    const c = i.variationIcon;
    if (c === He.Improvement || c === He.Concern || c === He.Neither || c === He.Suppressed)
      c === He.Improvement ? d = Me.SpecialCauseImproving : c === He.Concern ? d = Me.SpecialCauseDeteriorating : c === He.Neither ? d = Me.CommonCause : d = Me.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case je.ImprovementHigh:
        case je.ImprovementLow:
          d = Me.SpecialCauseImproving;
          break;
        case je.ConcernHigh:
        case je.ConcernLow:
          d = Me.SpecialCauseDeteriorating;
          break;
        case je.NeitherHigh:
        case je.NeitherLow:
          d = i.specialCauseNeutral ? Me.SpecialCauseNoJudgement : Me.CommonCause;
          break;
        case je.CommonCause:
          d = Me.CommonCause;
          break;
        default:
          d = Me.SpecialCauseNoJudgement;
          break;
      }
    let u = i.trend;
    return u || (d === Me.SpecialCauseImproving ? u = l === ut.LowerIsBetter ? Re.Lower : Re.Higher : d === Me.SpecialCauseDeteriorating ? u = l === ut.LowerIsBetter ? Re.Higher : Re.Lower : d === Me.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? u = Re.Higher : i.lowSideSignal && !i.highSideSignal ? u = Re.Lower : u = Re.Higher : u = Re.Higher), { state: d, direction: u, polarity: l ?? ut.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Me.SpecialCauseImproving || i.state === Me.SpecialCauseDeteriorating) && i.polarity && (i.state === Me.SpecialCauseImproving ? l = i.polarity === ut.LowerIsBetter ? Re.Lower : Re.Higher : l = i.polarity === ut.LowerIsBetter ? Re.Higher : Re.Lower), l || (i.state === Me.SpecialCauseImproving ? l = Re.Higher : i.state === Me.SpecialCauseDeteriorating ? l = Re.Lower : l = Re.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? ut.ContextDependent
    };
  }
  const r = e;
  t();
  const a = {
    [_t.Improving]: Me.SpecialCauseImproving,
    [_t.Deteriorating]: Me.SpecialCauseDeteriorating,
    [_t.No_Judgement]: Me.SpecialCauseNoJudgement,
    [_t.None]: Me.CommonCause
  }[r.judgement];
  let s;
  return r.judgement === _t.Improving ? s = r.polarity === ut.LowerIsBetter ? Re.Lower : Re.Higher : r.judgement === _t.Deteriorating ? s = r.polarity === ut.LowerIsBetter ? Re.Higher : Re.Lower : s = r.trend ?? Re.Higher, { state: a, direction: s, polarity: r.polarity };
};
function Xl(e, t) {
  const { state: r, direction: o, polarity: a } = pa(e), s = es(r), i = o === Re.Higher ? "above" : "below", l = o === Re.Higher ? "upwards" : "downwards", d = (() => {
    switch (a) {
      case ut.HigherIsBetter:
        return "For this measure, higher values are better.";
      case ut.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case _t.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case _t.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case _t.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case _t.None:
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
const qo = (e, t, r, o, a, s) => /* @__PURE__ */ n.jsxs("defs", { children: [
  o && /* @__PURE__ */ n.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ n.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  a && /* @__PURE__ */ n.jsx("linearGradient", { id: r, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: s.map((i) => /* @__PURE__ */ n.jsx(
    "stop",
    {
      offset: i.offset,
      stopColor: e,
      stopOpacity: parseFloat(i.opacity)
    },
    i.offset
  )) })
] }), ns = ({
  data: e,
  precomputed: t,
  improvementDirection: r,
  size: o = 44,
  ariaLabel: a,
  showLetter: s = !0,
  dropShadow: i = !0,
  gradientWash: l = !1,
  variant: d = mn.Classic,
  runLength: c = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = rr.Polarity,
  letterOverride: f,
  ...p
}) => {
  const h = wr(), v = wr(), {
    start: x,
    mid: g,
    end: j,
    triStart: T,
    triMid: I,
    triEnd: S
  } = ko(), { state: b, direction: C, polarity: N, ariaInput: w } = Fe(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const q = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: r ?? We.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Me.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: J, direction: le, polarity: ee } = pa(q);
      return { state: J, direction: le, polarity: ee, ariaInput: q };
    }
    const { state: Q, direction: W, polarity: K } = pa(e);
    return { state: Q, direction: W, polarity: K, ariaInput: e };
  }, [e, t, r]), m = Fe(() => Ul(b), [b]), y = Fe(() => es(b), [b]), k = y === _t.Improving || y === _t.Deteriorating;
  let M = "";
  s && k && (u === rr.Polarity ? N === ut.HigherIsBetter ? M = "H" : N === ut.LowerIsBetter ? M = "L" : M = "" : M = C === Re.Higher ? "H" : "L"), f !== void 0 && (M = f);
  const A = b !== Me.CommonCause, E = b === Me.SpecialCauseNoJudgement, L = bt("common-cause", "#A6A6A6"), D = A ? m.hex : L, R = Fe(
    () => Rm(b, C),
    [b, C]
  ), oe = a || `${m.label}${M ? C === Re.Higher ? " – Higher" : " – Lower" : ""}`, G = Xl(w);
  if (d === mn.TriangleWithRun) {
    const q = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], J = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let le = null;
    b === Me.SpecialCauseImproving || b === Me.SpecialCauseDeteriorating ? le = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (C === Re.Higher ? q : J).map((ce) => ce.join(",")).join(" "),
        fill: m.hex,
        stroke: m.hex,
        strokeWidth: 6,
        transform: C === Re.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : b === Me.SpecialCauseNoJudgement && (le = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: C === Re.Higher ? q.map((ce) => ce.join(",")).join(" ") : J.map((ce) => ce.join(",")).join(" "),
        fill: m.hex,
        stroke: m.hex,
        strokeWidth: 6,
        transform: C === Re.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const ee = Math.max(0, Math.min(5, Math.floor(c || 0))), te = b === Me.CommonCause ? 160 : C === Re.Higher ? 220 : 70, Z = 10, ne = 26, fe = 150 - 2 * ne, U = b === Me.CommonCause ? L : Vl(b), ie = Array.from({ length: 5 }).map((ce, me) => {
      const Ie = (b === Me.SpecialCauseImproving || b === Me.SpecialCauseDeteriorating) && me >= 5 - ee ? U : L;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: fe + me * ne,
          cy: te,
          r: Z,
          fill: Ie,
          stroke: Ie,
          strokeWidth: 1
        },
        me
      );
    }), ae = qo(
      m.hex,
      h,
      v,
      i,
      l,
      [
        { offset: "0%", opacity: T },
        { offset: "75%", opacity: I },
        { offset: "100%", opacity: S }
      ]
    ), pe = b === Me.CommonCause || C === Re.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: o,
        height: o,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": oe,
        "aria-description": G,
        ...p,
        children: [
          ae,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${v})` : "#ffffff",
              ...i ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: m.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsxs("g", { transform: pe, children: [
            le,
            M && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: C === Re.Higher ? 155 : 145,
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
  if (d === mn.Triangle) {
    const q = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], J = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], le = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let ee = null;
    b === Me.SpecialCauseImproving || b === Me.SpecialCauseDeteriorating ? ee = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (C === Re.Higher ? q : J).map((Z) => Z.join(",")).join(" "),
        fill: m.hex,
        stroke: m.hex,
        strokeWidth: 8,
        transform: C === Re.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : b === Me.SpecialCauseNoJudgement ? ee = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: C === Re.Higher ? q.map((Z) => Z.join(",")).join(" ") : J.map((Z) => Z.join(",")).join(" "),
        fill: m.hex,
        stroke: m.hex,
        strokeWidth: 8,
        transform: C === Re.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : b === Me.CommonCause && (ee = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: le[0][0],
        y1: le[0][1],
        x2: le[1][0],
        y2: le[1][1],
        stroke: m.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const te = qo(
      m.hex,
      h,
      v,
      i,
      l,
      [
        { offset: "0%", opacity: T },
        { offset: "65%", opacity: I },
        { offset: "100%", opacity: S }
      ]
    );
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: o,
        height: o,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": oe,
        "aria-description": G,
        ...p,
        children: [
          te,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${v})` : "#ffffff",
              ...i ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: m.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          ee,
          M && (b === Me.SpecialCauseImproving || b === Me.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: C === Re.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: M
            }
          )
        ]
      }
    );
  }
  const B = qo(
    m.hex,
    h,
    v,
    i,
    l,
    [
      { offset: "0%", opacity: x },
      { offset: "65%", opacity: g },
      { offset: "100%", opacity: j }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: o,
      height: o,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": oe,
      "aria-description": G,
      ...p,
      children: [
        B,
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: l ? `url(#${v})` : "#ffffff",
            ...i ? { filter: `url(#${h})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: m.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        M && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: m.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: C === Re.Lower ? "340" : "155", children: M })
          }
        ),
        E ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: m.hex,
            ...C === Re.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          R.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: L,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${R.map((Q) => `${Q.cx} ${Q.cy}`).join(" L ")}`
            }
          ),
          R.map((Q, W) => {
            const q = W >= R.length - 2 && A ? D : L, J = q;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: J,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: q,
                cx: Q.cx,
                cy: Q.cy,
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
ns.displayName = "SPCVariationIcon";
const Km = {
  [dt.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [dt.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [dt.Md]: { height: 44, pointR: 4, stroke: 1 },
  [dt.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [dt.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [dt.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function Qm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function eg(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const r = t.reduce((i, l) => i + l.value, 0) / t.length, o = [...e].reverse().findIndex((i) => i.value != null), a = o >= 0 ? e.length - 1 - o : null, s = a != null ? e[a].value : null;
  return { mean: r, latestValue: s, latestIndex: a };
}
const tg = (e) => Vl(e), Kl = ({
  data: e,
  windowSize: t,
  minPointsForSignals: r = 13,
  showMean: o = !0,
  showLimits: a = !0,
  showLimitBand: s = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: d = !0,
  variationState: c,
  metricImprovement: u,
  gradientWash: f = !1,
  size: p = dt.Sm,
  ariaLabel: h,
  className: v,
  onPointClick: x,
  maxPoints: g,
  thinningStrategy: j = "stride",
  colorPointsBySignal: T = !0,
  centerLine: I,
  controlLimits: S,
  sigmaBands: b,
  pointSignals: C,
  pointNeutralSpecialCause: N,
  visualCategories: w
}) => {
  const m = u, y = Fe(
    () => Qm(e, t),
    [e, t]
  ), k = Fe(() => eg(y), [y]), M = (() => {
    if (typeof p == "string")
      switch (p) {
        case "xs":
          return dt.Xs;
        case "sm":
          return dt.Sm;
        case "md":
          return dt.Md;
        case "lg":
          return dt.Lg;
        case "xl":
          return dt.Xl;
        case "full":
          return dt.Full;
        default:
          return dt.Sm;
      }
    return p ?? dt.Sm;
  })(), A = Km[M], E = Math.max(y.length * 6, 60), L = E, D = M === dt.Full ? "100%" : E, R = A.height, oe = Fe(() => {
    if (M === dt.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${L} / ${R}`,
        display: "block"
      };
  }, [M, L, R]), G = Math.max(6, A.pointR + 3), B = Math.max(4, A.pointR + 3), Q = Fe(() => (e?.length ?? 0) - (y?.length ?? 0), [e?.length, y?.length]), W = I ?? k.mean ?? null, K = Fe(() => {
    if (!a) return null;
    if (S) return S;
    const O = y.filter(($) => typeof $.value == "number");
    if (!O.length || W == null) return null;
    const _ = O.map(($) => $.value), P = Math.min(..._), z = Math.max(..._);
    return { lower: P, upper: z };
  }, [a, S?.lower, S?.upper, y, W]), J = Fe(() => ({
    state: c ?? Me.CommonCause,
    firedRules: [],
    mean: W ?? null,
    stdDev: null,
    side: k.latestValue != null && W != null ? k.latestValue > W ? "above" : "below" : void 0
  }), [c, W, k.latestValue]).state, le = tg(J), ee = (O) => {
    const _ = y.filter((F) => F.value != null);
    if (!_.length) return R / 2;
    const P = _.map((F) => F.value);
    K && (K.lower != null && P.push(K.lower), K.upper != null && P.push(K.upper));
    const z = Math.min(...P), $ = Math.max(...P);
    return z === $ ? R / 2 : R - (O - z) / ($ - z) * (R - B * 2) - B;
  }, te = Fe(() => {
    if (!g || y.length <= g)
      return y.map((H, Y) => Y);
    if (j === "stride") {
      const H = Math.max(2, g), Y = (y.length - 1) / (H - 1), X = /* @__PURE__ */ new Set();
      for (let re = 0; re < H; re++) X.add(Math.round(re * Y));
      return X.add(y.length - 1), Array.from(X).sort((re, de) => re - de);
    }
    const O = y.map((H, Y) => ({ i: Y, v: H.value }));
    function _(H, Y, X) {
      const re = H.i, de = H.v ?? 0, ue = Y.i, he = Y.v ?? 0, we = X.i, be = X.v ?? 0, ze = Math.abs((be - he) * re - (we - ue) * de + we * he - be * ue), $e = Math.hypot(be - he, we - ue);
      return $e === 0 ? 0 : ze / $e;
    }
    function P(H, Y) {
      if (H.length <= 2) return H;
      let X = -1, re = -1;
      for (let de = 1; de < H.length - 1; de++) {
        const ue = _(H[de], H[0], H[H.length - 1]);
        ue > X && (X = ue, re = de);
      }
      if (X > Y) {
        const de = P(H.slice(0, re + 1), Y), ue = P(H.slice(re), Y);
        return [...de.slice(0, -1), ...ue];
      }
      return [H[0], H[H.length - 1]];
    }
    let z = 0.1, $ = O;
    for (let H = 0; H < 8 && ($ = P(O, z), !($.length <= g)); H++)
      z *= 1.6;
    const F = new Set($.map((H) => H.i));
    return F.add(0), F.add(y.length - 1), Array.from(F).sort((H, Y) => H - Y);
  }, [y, g, j]), Z = Fe(
    () => te.map((O) => y[O]),
    [te, y]
  ), ne = Fe(() => Math.max(1, L - G * 2), [L, G]), fe = Fe(() => {
    const O = Math.max(1, Z.length - 1);
    return (_) => _ / O * ne + G;
  }, [Z.length, ne, G]), U = Fe(() => {
    let O = "";
    return Z.forEach((_, P) => {
      if (_.value == null) return;
      const z = ee(_.value), $ = fe(P);
      O += O ? ` L ${$} ${z}` : `M ${$} ${z}`;
    }), O;
  }, [Z, fe]), ie = k.latestIndex ?? -1, ae = K, pe = ko(), ce = Fe(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [y.length, f]
  ), me = y.length >= (r || 0), Ee = h || "SPC sparkline", Ie = (() => {
    if (!J) return;
    const O = m === We.Up ? ut.HigherIsBetter : m === We.Down ? ut.LowerIsBetter : ut.ContextDependent, _ = {
      variationIcon: J === Me.SpecialCauseImproving ? He.Improvement : J === Me.SpecialCauseDeteriorating ? He.Concern : J === Me.SpecialCauseNoJudgement ? He.Suppressed : He.Neither,
      trend: m === We.Up ? Re.Higher : Re.Lower,
      polarity: O
    };
    try {
      return Xl(_);
    } catch {
      return;
    }
  })(), Ne = Fe(() => {
    if (!me) return 10;
    const O = [...y].reverse().filter((P) => P.value != null).slice(0, 6).map((P) => ee(P.value));
    return O.length && O.reduce((P, z) => P + z, 0) / O.length < R / 2 ? R : 10;
  }, [y, me, R]);
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": Ee,
      "aria-description": Ie,
      width: M === dt.Full ? void 0 : D,
      height: M === dt.Full ? void 0 : R,
      style: oe,
      className: v,
      viewBox: `0 0 ${L} ${R}`,
      children: [
        f && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: ce, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: le,
                stopOpacity: Number(pe.start)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: le,
                stopOpacity: Number(pe.mid)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: le,
                stopOpacity: Number(pe.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: L,
              height: R,
              fill: `url(#${ce})`
            }
          )
        ] }),
        ae && ae.lower != null && ae.upper != null && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          s && /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                ee(ae.upper),
                ee(ae.lower)
              ),
              width: L,
              height: Math.abs(
                ee(ae.upper) - ee(ae.lower)
              ),
              fill: le,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: L,
              y1: ee(ae.lower),
              y2: ee(ae.lower),
              stroke: le,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: L,
              y1: ee(ae.upper),
              y2: ee(ae.upper),
              stroke: le,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          b && i && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            b.lowerTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: L,
                y1: ee(b.lowerTwo),
                y2: ee(b.lowerTwo),
                stroke: le,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.lowerOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: L,
                y1: ee(b.lowerOne),
                y2: ee(b.lowerOne),
                stroke: le,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: L,
                y1: ee(b.upperOne),
                y2: ee(b.upperOne),
                stroke: le,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: L,
                y1: ee(b.upperTwo),
                y2: ee(b.upperTwo),
                stroke: le,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        o && W != null && /* @__PURE__ */ n.jsx(
          "line",
          {
            x1: 0,
            x2: L,
            y1: ee(W),
            y2: ee(W),
            stroke: dn(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: U,
            fill: "none",
            stroke: dn(),
            strokeWidth: A.stroke,
            strokeLinecap: "round"
          }
        ),
        te.map((O, _) => {
          const P = y[O];
          if (!P || P.value == null) return null;
          const z = ee(P.value), $ = fe(_), H = (O === ie && l ? A.pointR + 1 : A.pointR) - 0.5;
          let Y = dn();
          if (T) {
            const X = w?.[Q + O];
            if (X != null)
              X === rt.Improvement ? Y = xr(He.Improvement) : X === rt.Concern ? Y = xr(He.Concern) : X === rt.NoJudgement ? Y = bt("no-judgement", "#490092") : Y = dn();
            else {
              const re = C?.[Q + O];
              re === He.Improvement || re === He.Concern ? Y = xr(re) : Y = N?.[Q + O] ? bt("no-judgement", "#490092") : dn();
            }
          }
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: $,
              cy: z,
              r: H,
              fill: Y,
              stroke: "none",
              strokeWidth: 0,
              onClick: x ? () => x(O, P) : void 0,
              style: x ? { cursor: "pointer" } : void 0,
              "data-index": O,
              "data-signal-colour": T ? Y : void 0
            },
            O
          );
        }),
        d && me && J && J !== Me.CommonCause && m && /* @__PURE__ */ n.jsx(
          "text",
          {
            x: L - 4,
            y: Ne,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: le,
            "data-glyph-pos": Ne < R / 2 ? "top" : "bottom",
            children: m === We.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Kl.displayName = "SPCSpark";
function Or(e) {
  switch (e) {
    case je.ImprovementHigh:
    case je.ImprovementLow:
      return Me.SpecialCauseImproving;
    case je.ConcernHigh:
    case je.ConcernLow:
      return Me.SpecialCauseDeteriorating;
    case je.NeitherHigh:
    case je.NeitherLow:
      return Me.SpecialCauseNoJudgement;
    case je.CommonCause:
      return Me.CommonCause;
    default:
      return null;
  }
}
function Ql(e) {
  return e === je.ImprovementHigh || e === je.ImprovementLow || e === je.ConcernHigh || e === je.ConcernLow || e === je.NeitherHigh || e === je.NeitherLow;
}
function ng({
  warnings: e,
  show: t,
  formatWarningCategory: r,
  formatWarningCode: o
}) {
  const [a, s] = V.useState(""), i = V.useRef("");
  return V.useEffect(() => {
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
    const d = {
      error: e.filter((f) => f.severity === $t.Error).length,
      warning: e.filter((f) => f.severity === $t.Warning).length,
      info: e.filter((f) => f.severity === $t.Info).length
    }, c = [];
    d.error && c.push(`${d.error} error${d.error === 1 ? "" : "s"}`), d.warning && c.push(`${d.warning} warning${d.warning === 1 ? "" : "s"}`), d.info && c.push(`${d.info} info`);
    const u = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${c.join(", ")}).`;
    u !== i.current && (i.current = u, s(u));
  }, [t, e]), t ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    a && /* @__PURE__ */ n.jsx(
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
        children: a
      }
    ),
    e.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warnings", role: "region", "aria-label": "SPC diagnostics", children: [
      /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
      /* @__PURE__ */ n.jsx(
        Qt,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let d = "grey";
            return l.severity === $t.Error ? d = "red" : l.severity === $t.Warning ? d = "orange" : l.severity === $t.Info && (d = "blue"), [
              {
                node: /* @__PURE__ */ n.jsx(tt, { color: d, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (c) => c.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ n.jsx(tt, { color: "purple", text: r(l.category) }) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ n.jsx(tt, { color: "grey", text: o(l.code) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
              },
              {
                node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                  /* @__PURE__ */ n.jsx("span", { children: l.message }),
                  l.context && Object.keys(l.context).length > 0 && /* @__PURE__ */ n.jsxs("details", { className: "fdp-spc-chart__warning-context", style: { marginTop: 4 }, children: [
                    /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                    /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(l.context, null, 2) })
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
function rg({
  variationNode: e,
  assuranceNode: t,
  show: r
}) {
  return r ? /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const rs = ({
  status: e,
  size: t = 44,
  ariaLabel: r,
  dropShadow: o = !0,
  colourOverride: a,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...d
}) => {
  const c = wr(), u = wr(), { start: f, mid: p, end: h } = ko(), v = a || Em[e], x = (i || Pm[e]).slice(0, 2), g = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": g,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("defs", { children: [
          o && /* @__PURE__ */ n.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ n.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ n.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: v, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: v, stopOpacity: parseFloat(p) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(h) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${u})` : "#ffffff",
            ...o ? { filter: `url(#${c})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: v,
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
          e === pn.Fail ? /* @__PURE__ */ n.jsx(
            "path",
            {
              id: "fail-line",
              stroke: v,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === pn.Uncertain ? /* @__PURE__ */ n.jsx(
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
              stroke: v,
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
              stroke: v,
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
rs.displayName = "SPCAssuranceIcon";
const og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: pn,
  Direction: Re,
  MetricPolarity: ut,
  SPCAssuranceIcon: rs,
  SPCVariationIcon: ns,
  VariationJudgement: _t,
  VariationState: Me,
  getVariationColour: Ul,
  getVariationTrend: es
}, Symbol.toStringTag, { value: "Module" }));
function ag(e) {
  const { show: t, rowsForUi: r, minPoints: o, metricImprovement: a, variant: s, runLength: i } = e;
  if (!t || !r?.length) return null;
  const l = r, d = typeof o == "number" && !isNaN(o) ? o : 13;
  if (l.filter(
    (b) => !b.data.ghost && b.data.value != null
  ).length < d) return null;
  let u = -1;
  for (let b = l.length - 1; b >= 0; b--) {
    const C = l[b];
    if (C && C.data.value != null && !C.data.ghost) {
      u = b;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], p = f.classification?.variation, h = f.classification?.assurance, v = p === He.Neither && !!f.classification?.neutralSpecialCauseValue, x = h === sn.Pass ? pn.Pass : h === sn.Fail ? pn.Fail : pn.Uncertain;
  let g;
  if (p === He.Suppressed) {
    const b = !!f.rules.singlePoint.up, C = !!f.rules.singlePoint.down;
    a === an.Up ? b ? g = Re.Higher : C && (g = Re.Lower) : a === an.Down ? C ? g = Re.Lower : b && (g = Re.Higher) : g = Re.Higher;
  } else if (p === He.Neither && v) {
    const b = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, C = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    b && !C ? g = Re.Higher : C && !b ? g = Re.Lower : g = Re.Higher;
  }
  const j = 80, T = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, I = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let S = je.CommonCause;
  return p === He.Improvement ? S = je.ImprovementHigh : p === He.Concern ? S = je.ConcernHigh : p === He.Neither && (v ? g === Re.Lower || I && !T ? S = je.NeitherLow : S = je.NeitherHigh : S = je.CommonCause), /* @__PURE__ */ n.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(p),
            "data-trend": g ? String(g) : "none",
            style: { width: j, height: j },
            children: /* @__PURE__ */ n.jsx(
              ns,
              {
                dropShadow: !1,
                data: {
                  variationIcon: S,
                  improvementDirection: a,
                  specialCauseNeutral: v,
                  highSideSignal: T,
                  lowSideSignal: I,
                  ...g ? { trend: g } : {}
                },
                letterMode: a === an.Neither ? rr.Direction : rr.Polarity,
                size: j,
                variant: s,
                runLength: s === mn.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(h),
            style: { width: j, height: j },
            children: /* @__PURE__ */ n.jsx(
              rs,
              {
                status: x,
                size: j,
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
const ec = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: o,
  measureUnit: a,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const d = en(), c = ln(), [u, f] = V.useState(null), [p, h] = V.useState(!1), v = V.useRef(null);
  V.useEffect(() => {
    if (d) {
      if (d.focused && (f(d.focused), v.current && (cancelAnimationFrame(v.current), v.current = null)), !d.focused && !p) {
        const Ne = requestAnimationFrame(() => {
          f(null), v.current = null;
        });
        v.current = Ne;
      }
      return () => {
        v.current && (cancelAnimationFrame(v.current), v.current = null);
      };
    }
  }, [d, d?.focused, p]);
  const x = d && (d.focused || (p ? u : null) || u), [g, j] = V.useState(!1);
  V.useEffect(() => {
    const Ne = requestAnimationFrame(() => j(!0));
    return () => cancelAnimationFrame(Ne);
  }, [x?.index]);
  const T = c?.innerWidth ?? 0, I = c?.innerHeight ?? 0, S = x ? Math.min(Math.max(x.clientX, 0), T) : 0, b = x ? Math.min(Math.max(x.clientY, 0), I) : 0, C = c?.ref?.current || void 0;
  if (!x)
    return null;
  const N = e?.[x.index], m = wo(
    N ? {
      specialCauseSinglePointUp: !!N.rules.singlePoint.up,
      specialCauseSinglePointDown: !!N.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!N.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!N.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!N.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!N.rules.fourOfFive.down,
      specialCauseShiftUp: !!N.rules.shift.up,
      specialCauseShiftDown: !!N.rules.shift.down,
      specialCauseTrendUp: !!N.rules.trend.up,
      specialCauseTrendDown: !!N.rules.trend.down
    } : null
  ).map((Ne) => ({ id: Ne, label: Ln[Ne].tooltip })), y = x.x instanceof Date ? x.x : new Date(x.x), k = s ? s(y) : y.toDateString(), M = a ? `${a}` : "", A = o || M ? `${x.y}${M ? "" + M : " "}${o ? " " + o : ""}` : `${x.y}`, E = So(N?.classification?.variation), L = zl(N?.classification?.assurance), D = Am(
    t.mean ?? null,
    t.sigma,
    x.y
  ), R = r ? r(x.index, { x: x.x, y: x.y }) : void 0, oe = E || L || D, G = N?.rules.trend.up || N?.rules.trend.down, B = N?.classification?.variation === He.Neither && G, Q = l && B ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, W = m.length > 0, K = N && "primeDirection" in N ? N.primeDirection : void 0, q = N && "primeRuleId" in N ? N.primeRuleId : void 0, J = i && N?.classification?.variation === He.Neither && W, le = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ee = Ol(N?.classification?.variation), te = 6.2, ne = [
    R || "",
    `${k} • ${A}`
  ].filter(Boolean).reduce(
    (Ne, O) => Math.max(Ne, O.length * te + 32),
    0
  ), fe = 200, U = 440, ie = Math.min(U, Math.max(fe, ne));
  let ae = S + 12, ce = (c.margin?.top ?? 0) + b + 16;
  ae + ie > T && (ae = S - -60 - ie), ae < 0 && (ae = Math.max(0, T - ie));
  const me = x ? `spc-tooltip-${x.index}` : "spc-tooltip", Ee = typeof x.index == "number" ? x.index : NaN, Ie = C ? Xc(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: me,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (g ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ae,
          top: ce,
          width: ie,
          maxWidth: U,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": g ? "false" : "true",
        "data-floating": !0,
        "data-placement": ae + ie + 12 > T ? "left" : "right",
        onPointerEnter: () => {
          h(!0), v.current && (cancelAnimationFrame(v.current), v.current = null);
        },
        onPointerLeave: () => {
          if (h(!1), !d?.focused) {
            const Ne = requestAnimationFrame(() => {
              f(null), v.current = null;
            });
            v.current = Ne;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              Ee
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: k })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: A })
          ] }),
          oe && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: E?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              tt,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : E?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              tt,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : J ? /* @__PURE__ */ n.jsx(
              tt,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : E ? /* @__PURE__ */ n.jsx(
              tt,
              {
                text: E,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          L && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Ne = L.toLowerCase(), _ = !(Ne.includes("not met") || Ne.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Ne);
              return /* @__PURE__ */ n.jsx(
                tt,
                {
                  text: L,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${_ ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${L}`
                }
              );
            })() })
          ] }),
          D && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              tt,
              {
                text: (() => {
                  const Ne = D.toLowerCase();
                  return Ne.startsWith("within 1") ? "≤1σ" : Ne.startsWith("1–2") ? "1–2σ" : Ne.startsWith("2–3") ? "2–3σ" : Ne.startsWith(">3") ? ">3σ" : D;
                })(),
                color: D.includes(">3") ? "orange" : D.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${D}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          Q && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: Q })
          ] }),
          W && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: m.map(({ id: Ne, label: O }) => {
                  const _ = String(Ne), z = _ === nr.TrendIncreasing || _ === nr.TrendDecreasing ? "fdp-spc-tag--trend" : J ? "fdp-spc-tag--no-judgement" : E ? E.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : E.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    tt,
                    {
                      text: O,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${z}`,
                      "data-rule-id": _
                    },
                    _
                  );
                })
              }
            ),
            K && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ n.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Ne = J ? "fdp-spc-tag--no-judgement" : E ? E.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : E.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", O = `${K}${q ? ` (${q})` : ""}`;
                return /* @__PURE__ */ n.jsx(
                  tt,
                  {
                    text: O,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${Ne}`,
                    "aria-label": `Prime direction ${K}${q ? ` via ${q}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    C
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
            cy: b,
            r: 7,
            fill: "none",
            stroke: le,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: S,
            cy: b,
            r: 5,
            fill: "#000",
            stroke: le,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: S,
            cy: b,
            r: 2.5,
            fill: ee,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Ie
      ]
    }
  );
}, sg = ({
  engineRows: e,
  measureName: t,
  measureUnit: r,
  onSignalFocus: o
}) => {
  const a = en(), s = a?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, d = V.useMemo(
    () => l ? wo({
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
  ), c = V.useMemo(
    () => Array.from(
      new Set(d.map((x) => Ln[x]?.narration).filter(Boolean))
    ),
    [d]
  ), u = l ? So(l.classification?.variation) : null, f = l ? zl(l.classification?.assurance) : null, p = d.length > 0, h = l ? l.classification?.variation === He.Neither && p : !1, v = V.useRef(null);
  return V.useEffect(() => {
    if (!o || !s || l == null) return;
    const x = `${s.seriesId}:${s.index}`;
    if (v.current !== x) {
      v.current = x;
      try {
        o({
          index: s.index,
          x: s.x,
          y: s.y,
          row: l,
          rules: d
        });
      } catch {
      }
    }
  }, [s?.seriesId, s?.index, s?.x, s?.y, l, d, o]), /* @__PURE__ */ n.jsxs(
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
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !a, children: a && /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      a.focused ? a.focusPrevPoint() : a.focusFirstPoint();
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
                      a.focused ? a.focusNextPoint() : a.focusFirstPoint();
                    },
                    "aria-label": "Next point",
                    children: "▶"
                  }
                )
              ] }) })
            ]
          }
        ),
        !l || !s ? /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ n.jsxs("span", { children: [
                  /* @__PURE__ */ n.jsx("strong", { children: "Point:" }),
                  " ",
                  s.index + 1
                ] }),
                /* @__PURE__ */ n.jsxs("span", { children: [
                  /* @__PURE__ */ n.jsx("strong", { children: "Value:" }),
                  " ",
                  s.y,
                  r ? ` ${r}` : "",
                  t ? ` ${t}` : ""
                ] })
              ]
            }
          ),
          (u || h || f) && /* @__PURE__ */ n.jsx(
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
                    u?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
                      tt,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
                      tt,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : h ? /* @__PURE__ */ n.jsx(
                      tt,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ n.jsx(
                      tt,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const x = f.toLowerCase(), j = !(x.includes("not met") || x.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(x);
                      return /* @__PURE__ */ n.jsx(
                        tt,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${j ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                children: d.length === 0 ? /* @__PURE__ */ n.jsx("span", { children: " None" }) : d.map((x) => {
                  const g = String(x), T = g === nr.TrendIncreasing || g === nr.TrendDecreasing ? "fdp-spc-tag--trend" : h ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", I = Ln[x]?.tooltip || g;
                  return /* @__PURE__ */ n.jsx(
                    tt,
                    {
                      text: I,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${T}`,
                      "data-rule-id": g,
                      title: Ln[x]?.tooltip
                    },
                    g
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
function ig(e, t = !0) {
  if (!e?.length) return [];
  const r = [...e];
  if (t) {
    for (let s = 1; s < r.length - 1; s++)
      r[s] === ft.Common && r[s - 1] === r[s + 1] && r[s - 1] !== ft.Common && (r[s] = r[s - 1]);
    let a = 0;
    for (; a < r.length; ) {
      const s = r[a];
      let i = a + 1;
      for (; i < r.length && r[i] === s; ) i++;
      i - a === 1 && s !== ft.Common && (r[a] = ft.Common), a = i;
    }
  }
  const o = [];
  if (r.length) {
    let a = 0;
    for (let s = 1; s <= r.length; s++)
      if (s === r.length || r[s] !== r[a]) {
        const i = r[a], l = s - 1, d = l - a + 1;
        (i === ft.Common || d >= 2) && o.push({ start: a, end: l, category: i }), a = s;
      }
  }
  return o;
}
var Vn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Vn || {}), tc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(tc || {});
function lg(e) {
  const {
    ui: t,
    input: r,
    engine: o,
    container: a,
    a11y: s,
    visualsEngine: i,
    meta: l,
    data: d,
    ariaLabel: c,
    height: u,
    showZones: f,
    showPoints: p,
    announceFocus: h,
    className: v,
    unit: x,
    targets: g,
    baselines: j,
    ghosts: T,
    settings: I,
    chartType: S,
    metricImprovement: b,
    gradientSequences: C,
    sequenceTransition: N,
    processLineWidth: w,
    showPartitionMarkers: m,
    showWarningsPanel: y,
    warningsFilter: k,
    enableNeutralNoJudgement: M,
    showTrendGatingExplanation: A,
    trendVisualMode: E,
    alwaysShowZeroY: L,
    alwaysShowHundredY: D,
    percentScale: R,
    showTrendStartMarkers: oe,
    showFirstFavourableCrossMarkers: G,
    showTrendBridgeOverlay: B,
    showSignalsInspector: Q,
    onSignalFocus: W,
    showIcons: K,
    showEmbeddedIcon: q,
    embeddedIconVariant: J,
    embeddedIconRunLength: le,
    showFocusIndicator: ee,
    visualsScenario: te,
    visualsEngineSettings: Z,
    source: ne,
    narrationContext: fe,
    highlightOutOfControl: U,
    precomputed: ie
  } = e;
  process.env.NODE_ENV !== "production" && (!r && (g !== void 0 || j !== void 0 || T !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !o && I !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !a && (u !== void 0 || v !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (c !== void 0 || h !== void 0 || fe !== void 0 || x !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (te !== void 0 || Z !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || p !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && U !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && ne !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const ae = r?.data ?? d ?? [], pe = r?.targets ?? g, ce = r?.baselines ?? j, me = r?.ghosts ?? T, Ee = o?.chartType ?? S ?? Rl.XmR, Ie = o?.metricImprovement ?? b ?? an.Neither, Ne = o?.settings ?? I, O = o?.autoRecalc, _ = t?.axes?.alwaysShowZeroY ?? L ?? !1, P = t?.axes?.alwaysShowHundredY ?? D ?? !1, z = t?.axes?.percentScale ?? R ?? !1, $ = t?.visuals?.gradientSequences ?? C ?? !0, F = t?.visuals?.sequenceTransition ?? N ?? "slope", H = t?.visuals?.processLineWidth ?? w ?? 2, Y = t?.visuals?.trend?.visualMode ?? E ?? "ungated", X = t?.visuals?.trend?.showGatingExplanation ?? A ?? !0, re = t?.visuals?.rules?.enableNeutralNoJudgement ?? M ?? !0, de = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, ue = t?.visuals?.showZones, he = t?.visuals?.showPoints, we = t?.visuals?.rules?.highlightOutOfControl, be = a?.height, ze = a?.className, $e = s?.label, Ke = s?.unit, ot = s?.narrationContext, se = i?.scenario, ke = i?.settings, ge = l?.source, ve = t?.overlays?.partitionMarkers ?? m ?? !1, Be = t?.overlays?.trendStartMarkers ?? oe ?? !1, Te = t?.overlays?.firstFavourableCrossMarkers ?? G ?? !1, Ve = t?.overlays?.trendBridge ?? B ?? !1, Ye = t?.inspector?.show ?? Q ?? !1, nt = t?.inspector?.onFocus ?? W, Ce = t?.warnings?.show ?? y ?? !1, Le = t?.warnings?.filter ?? k, _e = t?.icons?.show ?? K ?? !1, qe = t?.icons?.embedded?.show ?? q ?? !0, lt = t?.icons?.embedded?.variant ?? J ?? mn.Classic, jt = t?.icons?.embedded?.runLength ?? le, De = t?.overlays?.focusIndicator ?? ee ?? !0;
  return {
    effData: ae,
    effTargets: pe,
    effBaselines: ce,
    effGhosts: me,
    effChartTypeCore: Ee,
    effMetricImprovementCore: Ie,
    effEngineSettings: Ne,
    effEngineAutoRecalc: O,
    effHeight: be,
    effClassName: ze,
    effAriaLabel: $e,
    effUnit: Ke,
    effNarrationContext: ot,
    effShowZones: ue,
    effShowPoints: he,
    effHighlightOutOfControl: we,
    effVisualsScenario: se,
    effVisualsEngineSettings: ke,
    effPrecomputedVisuals: ie,
    effSource: ge,
    effAlwaysShowZeroY: _,
    effAlwaysShowHundredY: P,
    effPercentScale: z,
    effGradientSequences: $,
    effSequenceTransition: F,
    effProcessLineWidth: H,
    effTrendVisualMode: Y,
    effShowTrendGatingExplanation: X,
    effEnableNeutralNoJudgement: re,
    effEnableRules: de,
    effShowPartitionMarkers: ve,
    effShowTrendStartMarkers: Be,
    effShowFirstFavourableCrossMarkers: Te,
    effShowTrendBridgeOverlay: Ve,
    effShowSignalsInspector: Ye,
    effOnSignalFocus: nt,
    effShowWarningsPanel: Ce,
    effWarningsFilter: Le,
    effShowIcons: _e,
    effShowEmbeddedIcon: qe,
    effEmbeddedIconVariant: lt,
    effEmbeddedIconRunLength: jt,
    effShowFocusIndicator: De
  };
}
let cg = 0;
const dg = ({ data: e, targets: t, visuals: r, a11y: o, axis: a, compute: s }) => {
  const {
    series: i,
    engineRows: l,
    visualCategories: d,
    partitionMarkers: c
  } = e, { limits: u, uniformTarget: f } = t, {
    showPoints: p,
    showZones: h,
    highlightOutOfControl: v,
    gradientSequences: x,
    sequenceTransition: g,
    processLineWidth: j,
    showFocusIndicator: T = !1,
    enableRules: I,
    enableNeutralNoJudgement: S = !0,
    showTrendStartMarkers: b = !1,
    showFirstFavourableCrossMarkers: C = !1,
    showTrendBridgeOverlay: N = !1
  } = r, {
    announceFocus: w,
    ariaLabel: m,
    narrationContext: y,
    showSignalsInspector: k = !1,
    onSignalFocus: M,
    showTrendGatingExplanation: A = !0
  } = o, { zeroBreakSlotGapPx: E } = a, { metricImprovement: L, effectiveUnit: D } = s, R = wn(), oe = ln();
  if (!R) return null;
  const { xScale: G, yScale: B } = R, Q = V.useRef(
    "spc-seq-" + ++cg
  ), W = en(), K = i[0]?.data || [], q = V.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const _ = /* @__PURE__ */ new Set();
    return K.forEach((P, z) => {
      typeof u.ucl == "number" && P.y > u.ucl && _.add(z), typeof u.lcl == "number" && P.y < u.lcl && _.add(z);
    }), _;
  }, [u.ucl, u.lcl, K]), J = V.useMemo(() => {
    if (!l || !l.length) return null;
    const _ = [];
    return l.forEach((P, z) => {
      const $ = P.classification.variation === He.Concern || P.classification.variation === He.Improvement || !!P.classification.neutralSpecialCauseValue, F = !!P.rules.singlePoint.up || !!P.rules.twoOfThree.up || !!P.rules.fourOfFive.up || !!P.rules.shift.up || !!P.rules.trend.up, H = !!P.rules.singlePoint.down || !!P.rules.twoOfThree.down || !!P.rules.fourOfFive.down || !!P.rules.shift.down || !!P.rules.trend.down;
      _[z] = {
        variation: P.classification.variation,
        assurance: P.classification.assurance,
        special: $,
        concern: P.classification.variation === He.Concern,
        improvement: P.classification.variation === He.Improvement,
        trendUp: !!P.rules.trend.up,
        trendDown: !!P.rules.trend.down,
        upAny: F,
        downAny: H,
        neutralSpecial: !!P.classification.neutralSpecialCauseValue,
        shiftUp: !!P.rules.shift.up,
        shiftDown: !!P.rules.shift.down,
        twoOfThreeUp: !!P.rules.twoOfThree.up,
        twoOfThreeDown: !!P.rules.twoOfThree.down,
        fourOfFiveUp: !!P.rules.fourOfFive.up,
        fourOfFiveDown: !!P.rules.fourOfFive.down,
        partitionId: P.partition.id ?? null
      };
    }), _;
  }, [l]), le = V.useMemo(() => (d || []).map((_) => _ === rt.Improvement ? ft.Improvement : _ === rt.Concern ? ft.Concern : _ === rt.NoJudgement ? ft.NoJudgement : ft.Common), [d]), ee = V.useMemo(() => !x || !le.length ? [] : ig(le, !0), [x, le, m]), te = V.useMemo(
    () => K.map((_) => G(_.x instanceof Date ? _.x : new Date(_.x))),
    [K, G]
  ), Z = G.range()[1], ne = G.range()[0], fe = V.useMemo(() => {
    if (!l || !l.length)
      return null;
    let _ = Number.POSITIVE_INFINITY, P = Number.POSITIVE_INFINITY;
    if (l.forEach((re, de) => {
      re.rules.trend.up && (_ = Math.min(_, de)), re.rules.trend.down && (P = Math.min(P, de));
    }), !Number.isFinite(_) && !Number.isFinite(P))
      return null;
    const z = _ <= P, $ = z ? At.Up : At.Down, F = z ? _ : P, H = (re) => L == null || L === an.Neither || re == null || typeof re.data.value != "number" || typeof re.limits.mean != "number" ? !1 : $ === At.Up ? L === an.Up ? re.data.value > re.limits.mean : re.data.value < re.limits.mean : L === an.Down ? re.data.value < re.limits.mean : re.data.value > re.limits.mean;
    let Y = null;
    for (let re = F; re < l.length; re++) {
      const de = l[re];
      if (!(z ? !!de.rules.trend.up : !!de.rules.trend.down)) break;
      if (H(de)) {
        Y = re;
        break;
      }
    }
    let X = !1;
    if (Y != null) {
      let re = 0;
      for (let de = Y; de < l.length; de++) {
        const ue = l[de];
        if (!(z ? !!ue.rules.trend.up : !!ue.rules.trend.down)) break;
        H(ue) && re++;
      }
      X = re >= 2;
    }
    return {
      direction: $,
      detectedAt: F,
      firstFavourableCrossAt: Y,
      persistedAcrossMean: X
    };
  }, [l, L]), U = V.useMemo(() => {
    if (!l || !l.length) return null;
    const _ = (P) => {
      const z = [];
      let $ = null, F = null;
      for (let H = 0; H < l.length; H++) {
        const Y = l[H], X = P(Y), re = typeof X == "number" && !isNaN(X) ? X : null;
        if (re == null) {
          $ !== null && F != null && (z.push({
            x1: te[$],
            x2: te[H - 1],
            y: B(F)
          }), $ = null, F = null);
          continue;
        }
        if ($ === null) {
          $ = H, F = re;
          continue;
        }
        F != null && Math.abs(re - F) <= 1e-9 || (F != null && z.push({
          x1: te[$],
          x2: te[H - 1],
          y: B(F)
        }), $ = H, F = re);
      }
      return $ !== null && F != null && z.push({
        x1: te[$],
        x2: te[l.length - 1],
        y: B(F)
      }), z;
    };
    return {
      mean: _((P) => P.limits.mean ?? null),
      ucl: _((P) => P.limits.ucl ?? null),
      lcl: _((P) => P.limits.lcl ?? null),
      onePos: _((P) => P.limits.oneSigma.upper ?? null),
      oneNeg: _((P) => P.limits.oneSigma.lower ?? null),
      twoPos: _((P) => P.limits.twoSigma.upper ?? null),
      twoNeg: _((P) => P.limits.twoSigma.lower ?? null)
    };
  }, [l, te, B]), ie = V.useMemo(() => ee.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs(
      "linearGradient",
      {
        id: `${Q.current}-grad-common`,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        children: [
          /* @__PURE__ */ n.jsx(
            "stop",
            {
              offset: "0%",
              stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
              stopOpacity: 0.28
            }
          ),
          /* @__PURE__ */ n.jsx(
            "stop",
            {
              offset: "70%",
              stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
              stopOpacity: 0.12
            }
          ),
          /* @__PURE__ */ n.jsx(
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
    ee.map((_, P) => {
      const z = `${Q.current}-grad-${P}`;
      let $, F = 0.28, H = 0.12, Y = 0.045;
      switch (_.category) {
        case ft.Concern:
          $ = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", F = 0.28, H = 0.12, Y = 0.045;
          break;
        case ft.Improvement:
          $ = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", F = 0.26, H = 0.11, Y = 0.045;
          break;
        case ft.NoJudgement:
          $ = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", F = 0.26, H = 0.11, Y = 0.045;
          break;
        default:
          $ = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: z, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: $, stopOpacity: F }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: $, stopOpacity: H }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: $, stopOpacity: Y })
      ] }, z);
    })
  ] }) : null, [ee]), ae = V.useMemo(() => {
    if (!ee.length) return null;
    const [_] = B.domain(), P = B(_), z = ee.map(($, F) => {
      const { start: H, end: Y, category: X } = $;
      if (H < 0 || Y >= te.length || H > Y)
        return null;
      const re = te[H], de = te[Y];
      let ue = "";
      if (X === ft.Common) {
        const he = F > 0 ? ee[F - 1] : null, we = F < ee.length - 1 ? ee[F + 1] : null, be = he ? te[he.end] : ne, ze = he ? B(K[he.end].y) : P, $e = we ? te[we.start] : Z, Ke = we ? B(K[we.start].y) : P;
        ue = `M ${be} ${P}`, ue += ` L ${be} ${ze}`;
        for (let ot = H; ot <= Y; ot++)
          ue += ` L ${te[ot]} ${B(K[ot].y)}`;
        ue += ` L ${$e} ${Ke}`, ue += ` L ${$e} ${P} Z`;
      } else {
        const he = F > 0 ? ee[F - 1] : null, we = F < ee.length - 1 ? ee[F + 1] : null, be = he && he.category !== ft.Common, ze = we && we.category !== ft.Common, $e = B(K[H].y), Ke = B(K[Y].y);
        let ot = re, se = de;
        if (be) {
          const ke = te[he.end], ge = B(K[he.end].y), ve = K[H].y - K[he.end].y;
          g === Vn.Slope && ve > 0 ? (ue = `M ${ke} ${ge} L ${re} ${$e}`, ot = ke) : (ue = `M ${re} ${P} L ${re} ${$e}`, ot = re);
        } else
          ue = `M ${re} ${P} L ${re} ${$e}`;
        for (let ke = H + 1; ke <= Y; ke++)
          ue += ` L ${te[ke]} ${B(K[ke].y)}`;
        if (ue += ` L ${de} ${Ke}`, ze) {
          const ke = te[we.start], ge = B(K[we.start].y), ve = K[we.start].y - K[Y].y;
          (g === Vn.Slope && ve <= 0 || g === Vn.Extend) && (ue += ` L ${ke} ${ge}`, se = ke);
        }
        if (ue += ` L ${se} ${P}`, ue += ` L ${ot} ${P} Z`, g === Vn.Neutral && be) {
          const ke = te[he.end], ge = B(K[he.end].y), ve = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${ke} ${P} L ${ke} ${ge} L ${re} ${$e} L ${re} ${P} Z`,
              fill: `url(#${Q.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${F}`
          );
          return /* @__PURE__ */ n.jsxs("g", { children: [
            ve,
            /* @__PURE__ */ n.jsx(
              "path",
              {
                d: ue,
                fill: `url(#${Q.current}-grad-${F})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${F}`
            )
          ] }, `seq-group-${F}`);
        }
      }
      return /* @__PURE__ */ n.jsx(
        "path",
        {
          d: ue,
          fill: `url(#${Q.current}-grad-${F})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${F}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: z });
  }, [ee, te, Z, B, K, g]), pe = V.useMemo(() => {
    if (!y?.timeframe && K.length >= 2) {
      const _ = K.map((Y) => Y.x instanceof Date ? Y.x : new Date(Y.x)), P = new Date(Math.min(..._.map((Y) => Y.getTime()))), z = new Date(Math.max(..._.map((Y) => Y.getTime()))), $ = Math.round((z.getTime() - P.getTime()) / 864e5) || 0;
      if ($ < 14)
        return `The chart shows a timeframe of ${$ + 1} days`;
      const F = Math.round($ / 7);
      return F < 20 ? `The chart shows a timeframe of ${F} weeks` : `The chart shows a timeframe of ${(z.getFullYear() - P.getFullYear()) * 12 + (z.getMonth() - P.getMonth()) + 1} months`;
    }
    if (y?.timeframe)
      return `The chart shows a timeframe of ${y.timeframe}`;
  }, [y?.timeframe, K]), ce = (_) => {
    const P = _ % 10, z = _ % 100;
    return P === 1 && z !== 11 ? `${_}st` : P === 2 && z !== 12 ? `${_}nd` : P === 3 && z !== 13 ? `${_}rd` : `${_}th`;
  }, me = (_) => `${ce(_.getDate())} ${_.toLocaleString("en-GB", { month: "long" })}, ${_.getFullYear()}`, Ee = (_) => ({
    specialCauseSinglePointUp: !!_?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!_?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!_?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!_?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!_?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!_?.rules.fourOfFive.down,
    specialCauseShiftUp: !!_?.rules.shift.up,
    specialCauseShiftDown: !!_?.rules.shift.down,
    specialCauseTrendUp: !!_?.rules.trend.up,
    specialCauseTrendDown: !!_?.rules.trend.down
  }), Ie = V.useCallback(
    ({
      index: _,
      x: P,
      y: z
    }) => {
      const $ = l?.[_], F = P instanceof Date ? P : new Date(P), H = me(F), Y = y?.measureUnit ? ` ${y.measureUnit}` : "", X = y?.measureName ? ` ${y.measureName}` : "";
      if (!$)
        return `General summary is: ${pe ? pe + ". " : ""}Point ${_ + 1}, ${H}, ${z}${Y}${X}`;
      const re = So($.classification?.variation) || "Variation", de = wo(Ee($)), ue = de.length ? ` Rules: ${[...new Set(de.map((we) => Ln[we].narration))].join("; ")}.` : " No special cause rules.", he = [];
      return y?.measureName && he.push(`Measure: ${y.measureName}.`), y?.datasetContext && he.push(`${y.datasetContext}.`), y?.organisation && he.push(`Organisation: ${y.organisation}.`), y?.additionalNote && he.push(y.additionalNote), [
        "General summary is:",
        ...he,
        `Point ${_ + 1} recorded on `,
        H + ",",
        `with a value of ${z} ${Y}${X}`,
        re + ".",
        ue
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, y, pe]
  ), Ne = V.useCallback(
    (_, P) => l?.[_] ? Ie({
      index: _,
      seriesId: "process",
      x: P.x instanceof Date ? P.x : new Date(P.x),
      y: P.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, Ie]
  ), O = V.useMemo(() => {
    try {
      const _ = typeof B?.domain == "function" ? B.domain() : void 0;
      if (!_ || !Array.isArray(_) || _.length < 2) return !1;
      const P = Math.min(_[0], _[1]), z = Math.max(_[0], _[1]);
      return !(0 >= P && 0 <= z);
    } catch {
      return !1;
    }
  }, [B]);
  return /* @__PURE__ */ n.jsx(Nm, { children: /* @__PURE__ */ n.jsxs(
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
            width: R.xScale.range()[1] + 56 + 16,
            height: (oe?.innerHeight ?? R.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(si, { type: "x" }),
              /* @__PURE__ */ n.jsx(
                si,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: O,
                    gapPx: E,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ n.jsx(Gh, { axis: "y" }),
              ie,
              ae,
              c.map((_, P) => {
                const z = K[_];
                if (!z) return null;
                const $ = G(z.x instanceof Date ? z.x : new Date(z.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: $,
                    x2: $,
                    y1: 0,
                    y2: B.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${P}`
                );
              }),
              U?.mean.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                U.mean.map((_, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: _.x1,
                    x2: _.x2,
                    y1: _.y,
                    y2: _.y
                  },
                  `mean-${P}`
                )),
                U.mean.map((_, P) => {
                  if (P === U.mean.length - 1) return null;
                  const z = U.mean[P + 1];
                  if (!z || _.y === z.y) return null;
                  const F = Math.max(4, z.x1 - _.x2 || 0) * 0.5, H = `M ${_.x2},${_.y} C ${_.x2 + F},${_.y} ${z.x1 - F},${z.y} ${z.x1},${z.y}`;
                  return /* @__PURE__ */ n.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: H,
                      fill: "none"
                    },
                    `mean-join-${P}`
                  );
                })
              ] }) : null,
              f != null && /* @__PURE__ */ n.jsx(n.Fragment, {}),
              U?.ucl.length ? /* @__PURE__ */ n.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    U.ucl.map((_, P) => /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: _.x1,
                        x2: _.x2,
                        y1: _.y,
                        y2: _.y,
                        strokeWidth: 2
                      },
                      `ucl-${P}`
                    )),
                    U.ucl.map((_, P) => {
                      if (P === U.ucl.length - 1) return null;
                      const z = U.ucl[P + 1];
                      if (!z || _.y === z.y) return null;
                      const F = Math.max(4, z.x1 - _.x2 || 0) * 0.5, H = `M ${_.x2},${_.y} C ${_.x2 + F},${_.y} ${z.x1 - F},${z.y} ${z.x1},${z.y}`;
                      return /* @__PURE__ */ n.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: H,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${P}`
                      );
                    })
                  ]
                }
              ) : null,
              U?.lcl.length ? /* @__PURE__ */ n.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    U.lcl.map((_, P) => /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: _.x1,
                        x2: _.x2,
                        y1: _.y,
                        y2: _.y,
                        strokeWidth: 2
                      },
                      `lcl-${P}`
                    )),
                    U.lcl.map((_, P) => {
                      if (P === U.lcl.length - 1) return null;
                      const z = U.lcl[P + 1];
                      if (!z || _.y === z.y) return null;
                      const F = Math.max(4, z.x1 - _.x2 || 0) * 0.5, H = `M ${_.x2},${_.y} C ${_.x2 + F},${_.y} ${z.x1 - F},${z.y} ${z.x1},${z.y}`;
                      return /* @__PURE__ */ n.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: H,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${P}`
                      );
                    })
                  ]
                }
              ) : null,
              f != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: G.range()[1],
                    y1: B(f),
                    y2: B(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: G.range()[0] - 7,
                    y: B(f) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      f,
                      " ",
                      D || y?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              h && U && U.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                U.onePos.map((_, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: _.x1,
                    x2: _.x2,
                    y1: _.y,
                    y2: _.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${P}`
                )),
                U.oneNeg.map((_, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: _.x1,
                    x2: _.x2,
                    y1: _.y,
                    y2: _.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${P}`
                )),
                U.twoPos.map((_, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: _.x1,
                    x2: _.x2,
                    y1: _.y,
                    y2: _.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${P}`
                )),
                U.twoNeg.map((_, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: _.x1,
                    x2: _.x2,
                    y1: _.y,
                    y2: _.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${P}`
                ))
              ] }),
              fe && (b || C || N) && (() => {
                const _ = fe.detectedAt, P = fe.firstFavourableCrossAt, z = K[_] ? G(
                  K[_].x instanceof Date ? K[_].x : new Date(K[_].x)
                ) : null, $ = K[_] ? B(K[_].y) : null, F = P != null && K[P] ? G(
                  K[P].x instanceof Date ? K[P].x : new Date(K[P].x)
                ) : null, H = P != null && K[P] ? B(K[P].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  N && z != null && $ != null && F != null && H != null && /* @__PURE__ */ n.jsx(
                    "line",
                    {
                      x1: z,
                      y1: $,
                      x2: F,
                      y2: H,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  b && z != null && $ != null && /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: z,
                      cy: $,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ n.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  C && F != null && H != null && /* @__PURE__ */ n.jsx("circle", { cx: F, cy: H, r: 5, fill: "#555", children: /* @__PURE__ */ n.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ n.jsx(
                jm,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (_) => _.x instanceof Date ? _.x : new Date(_.x),
                  smooth: !1,
                  strokeWidth: j
                }
              ),
              p && K.map((_, P) => {
                const z = G(_.x instanceof Date ? _.x : new Date(_.x)), $ = B(_.y), F = q.has(P), H = J?.[P], Y = le[P], X = Y === ft.Improvement, re = Y === ft.Concern, de = Y === ft.NoJudgement, ue = [
                  "fdp-spc__point",
                  F && v ? "fdp-spc__point--ooc" : null,
                  I && re ? "fdp-spc__point--sc-concern" : null,
                  I && X ? "fdp-spc__point--sc-improvement" : null,
                  I && S && de ? "fdp-spc__point--sc-no-judgement" : null,
                  H?.assurance === sn.Pass ? "fdp-spc__point--assurance-pass" : null,
                  H?.assurance === sn.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), he = W?.focused?.index === P;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: z,
                    cy: $,
                    r: 5,
                    className: ue,
                    "data-variation": H?.variation,
                    "data-assurance": H?.assurance,
                    "aria-label": m,
                    ...he ? { "aria-describedby": `spc-tooltip-${P}` } : {}
                  },
                  P
                );
              }),
              T && k && W?.focused && (() => {
                const _ = W.focused, P = typeof _.index == "number" ? _.index : -1;
                if (P < 0 || !K[P]) return null;
                const z = G(
                  K[P].x instanceof Date ? K[P].x : new Date(K[P].x)
                ), $ = B(K[P].y), F = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ n.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: z,
                      cy: $,
                      r: 7,
                      fill: "none",
                      stroke: F,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: z,
                      cy: $,
                      r: 5,
                      fill: "#000",
                      stroke: F,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: z,
                      cy: $,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              oe && /* @__PURE__ */ n.jsx(
                ug,
                {
                  width: G.range()[1],
                  height: B.range()[0]
                }
              ),
              !k && /* @__PURE__ */ n.jsx(
                ec,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: Ne,
                  measureName: y?.measureName,
                  measureUnit: y?.measureUnit,
                  dateFormatter: (_) => me(_),
                  enableNeutralNoJudgement: S,
                  showTrendGatingExplanation: A
                }
              )
            ] })
          }
        ),
        k && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          sg,
          {
            engineRows: l,
            measureName: y?.measureName,
            measureUnit: D || y?.measureUnit,
            onSignalFocus: M
          }
        ) }),
        w && /* @__PURE__ */ n.jsx(
          Mm,
          {
            format: (_) => Ie({ ..._, x: _.x instanceof Date ? _.x : new Date(_.x) })
          }
        )
      ]
    }
  ) });
}, ug = ({
  width: e,
  height: t
}) => {
  const r = en();
  return r ? /* @__PURE__ */ n.jsx(
    "rect",
    {
      className: "fdp-spc__interaction-layer",
      width: e,
      height: t,
      fill: "transparent",
      tabIndex: 0,
      "aria-label": "Interactive chart area. Use arrow keys to move between points.",
      onMouseMove: (o) => {
        const s = o.currentTarget.getBoundingClientRect(), i = o.clientX - s.left, l = o.clientY - s.top;
        r.focusNearest(i, l);
      },
      onMouseLeave: () => r.clear(),
      onKeyDown: (o) => {
        switch (o.key) {
          case "ArrowRight":
            r.focusNextPoint(), o.preventDefault();
            break;
          case "ArrowLeft":
            r.focusPrevPoint(), o.preventDefault();
            break;
          case "ArrowDown":
            r.focusNextSeries(), o.preventDefault();
            break;
          case "ArrowUp":
            r.focusPrevSeries(), o.preventDefault();
            break;
          case "Home":
            r.focusFirstPoint(), o.preventDefault();
            break;
          case "End":
            r.focusLastPoint(), o.preventDefault();
            break;
        }
      },
      style: { cursor: "crosshair" }
    }
  ) : null;
};
function bi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function fg(e, t, r) {
  const o = new Array(e), a = new Date(t);
  for (let s = 0; s < e; s++)
    switch (o[s] = new Date(a), r) {
      case "hourly":
        a.setHours(a.getHours() + 1);
        break;
      case "daily":
        a.setDate(a.getDate() + 1);
        break;
      case "weekly":
        a.setDate(a.getDate() + 7);
        break;
      case "monthly":
        a.setMonth(a.getMonth() + 1);
        break;
      case "quarterly":
        a.setMonth(a.getMonth() + 3);
        break;
      case "annually":
        a.setFullYear(a.getFullYear() + 1);
        break;
    }
  return o;
}
function pg(e, t) {
  const r = e.filter(Boolean);
  if (r.length < 2) return t;
  const o = [];
  for (let d = 1; d < r.length; d++)
    o.push(r[d].getTime() - r[d - 1].getTime());
  const a = o.sort((d, c) => d - c), s = a[Math.floor(a.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function yi(e, t) {
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
function hg(e, t, r, o = "0-100") {
  if (t) return t;
  if (r) return r;
  const a = e.filter((l) => l != null);
  if (!a.length) return;
  const s = Math.min(...a), i = Math.max(...a);
  if (o === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function mg(e, t, r = 1) {
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
function nc(e) {
  const {
    values: t,
    dates: r,
    intervalHint: o,
    startDate: a,
    providedUnit: s,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: d = !0,
    autoMetadata: c = !0,
    deltaConfig: u
  } = e, f = t.map(
    (m) => typeof m == "number" ? m : m == null ? null : Number(m)
  );
  let p = -1;
  for (let m = f.length - 1; m >= 0; m--)
    if (f[m] != null) {
      p = m;
      break;
    }
  let h = (r || []).map(bi);
  if (!h.some(Boolean)) {
    const m = bi(a);
    m && o ? h = fg(f.length, m, o) : h = new Array(f.length).fill(void 0);
  }
  const x = pg(h, o), g = hg(
    f,
    s,
    i,
    e.percentHeuristic
  ), j = l && p >= 0 && f[p] != null ? f[p] : void 0, T = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function I() {
    if (p < 0) return -1;
    if (T.strategy === "previous" || T.strategy === "n-points") {
      let A = p - (T.strategy === "previous" ? 1 : Math.max(1, T.n || 1));
      if (!T.skipNulls) return A;
      for (let E = A; E >= 0; E--) if (f[E] != null) return E;
      return -1;
    }
    const m = h[p];
    if (!m) return -1;
    const y = new Date(m);
    y.setFullYear(y.getFullYear() - 1);
    let k = -1, M = 1 / 0;
    for (let A = 0; A < h.length; A++) {
      const E = h[A];
      if (!E || f[A] == null) continue;
      const L = Math.abs(E.getTime() - y.getTime());
      L < M && (M = L, k = A);
    }
    return k;
  }
  const S = I(), b = S >= 0 ? f[S] : null;
  let C;
  if (d && j != null && b != null) {
    const m = j - b, y = T.absolute !== !1, k = y ? m : b === 0 ? 0 : m / Math.abs(b) * 100;
    C = {
      value: Number.isFinite(k) ? Number(k.toFixed(2)) : 0,
      isPercent: y ? g === "%" : !0,
      period: `vs ${mg(x, o, T.strategy === "n-points" ? Math.max(1, T.n || 1) : 1)}`
    };
  }
  const N = p >= 0 ? h[p] : void 0, w = c && yi(N, x) ? `Latest: ${yi(N, x)}` : void 0;
  return { value: j, unit: g, delta: C, metadata: w, latestDate: N, frequency: x };
}
function gg(e) {
  const { rows: t } = cr(e), r = ts(e);
  return { rows: t, visuals: r.visuals };
}
const os = 13;
function as(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case rt.Improvement:
          return He.Improvement;
        case rt.Concern:
          return He.Concern;
        case rt.NoJudgement:
          return He.Neither;
        default:
          return null;
      }
    });
}
function rc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === rt.NoJudgement);
}
function vi(e, t) {
  const r = e === Nt.G ? Nt.G : e === Nt.T ? Nt.T : Nt.XmR, o = t === We.Up ? We.Up : t === We.Down ? We.Down : We.Neither;
  return { chartType: r, metricImprovement: o };
}
function wi(e, t, r) {
  const o = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : os, a = { minimumPoints: o };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= o && (a.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (a.enableFourOfFiveRule = !!e.enableFourOfFiveRule), r && Object.assign(a, r), Object.keys(a).length ? a : void 0;
}
function xg(e, t, r) {
  const o = V.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: a, totalReservedPx: s } = V.useMemo(() => {
    if (!o) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, d = yr, u = d + Hh, f = r?.maxFraction, p = Math.max(
      vr,
      Math.floor(l * f)
    ), h = Math.min(u, p);
    return { slotPx: Math.min(d, h), totalReservedPx: h };
  }, [o, t, r?.maxFraction]);
  return { show: o, slotPx: a, totalReservedPx: s };
}
function bg(e, t, r, o) {
  if (r.percentScale) {
    const d = e.map((f) => f.y), c = Math.max(100, ...d), u = Math.min(0, ...d);
    return [u < 0 ? u : 0, c > 100 ? c : 100];
  }
  const a = e.map((d) => d.y), s = (d) => {
    d != null && a.push(d);
  };
  if (s(t.mean), s(t.ucl), s(t.lcl), s(t.onePos), s(t.oneNeg), s(t.twoPos), s(t.twoNeg), o && o.length)
    for (const d of o)
      typeof d == "number" && !isNaN(d) && a.push(d);
  if (!a.length) return;
  let i = Math.min(...a), l = Math.max(...a);
  return r.alwaysShowZeroY && (i = Math.min(0, i)), r.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function ha(e, t) {
  if (!e?.length || t.chartType !== Nt.XmR) return null;
  const r = Math.max(2, Math.floor(t.shiftLength ?? 6)), o = [];
  for (let h = 0; h < e.length; h++) {
    const v = e[h], x = v.value;
    v?.ghost || typeof x == "number" && Number.isFinite(x) && o.push({ idx: h, value: x });
  }
  if (o.length < r * 2) return null;
  let a = 0, s = 0;
  for (let h = 1; h < o.length; h++)
    a += Math.abs(o[h].value - o[h - 1].value), s++;
  if (s === 0) return null;
  const l = a / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const d = Math.max(0, t.deltaSigma ?? 0.5), c = t.metricImprovement === We.Up, u = t.metricImprovement === We.Down, f = (() => {
    for (let h = e.length - 1; h >= 0; h--) if (e[h]?.baseline) return h;
    return -1;
  })();
  function p(h, v) {
    let x = 0, g = 0;
    for (let j = h; j < v; j++)
      x += o[j].value, g++;
    return g ? x / g : NaN;
  }
  for (let h = r; h <= o.length - r; h++) {
    const v = p(h - r, h), x = p(h, h + r);
    if (!Number.isFinite(v) || !Number.isFinite(x)) continue;
    const g = x - v, j = g / l;
    let T = !1, I = !1;
    if (c ? (T = j >= d, I = !0) : u ? (T = -j >= d, I = !1) : (T = Math.abs(j) >= d, I = g > 0), !T) continue;
    const S = (N) => I ? N > v : N < v;
    let b = !0;
    for (let N = h; N < h + r; N++)
      if (!S(o[N].value)) {
        b = !1;
        break;
      }
    if (!b) continue;
    const C = o[h].idx;
    if (!(t.minGap && f >= 0 && C - f < t.minGap))
      return C;
  }
  return null;
}
function yg(e, t) {
  const r = ha(e, t);
  return r == null ? e.slice() : e.map((o, a) => a === r ? { ...o, baseline: !0 } : o);
}
function vg(e, t) {
  const r = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (r <= 1) return yg(e, t);
  let o = e.slice(), a = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; a < r; ) {
    const i = ha(o, { ...t, minGap: s });
    if (i == null) break;
    if (o[i]?.baseline) {
      const l = ha(o, { ...t, minGap: s + 1 });
      if (l == null || l === i) break;
      o = o.map((d, c) => c === l ? { ...d, baseline: !0 } : d), a++;
      continue;
    }
    o = o.map((l, d) => d === i ? { ...l, baseline: !0 } : l), a++;
  }
  return o;
}
const wg = (e) => {
  const t = V.useCallback(
    (Ce) => String(Ce).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((_e) => _e.length ? _e[0].toUpperCase() + _e.slice(1) : _e).join(" "),
    []
  ), r = V.useCallback(
    (Ce) => String(Ce).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Le) => Le.length ? Le[0].toUpperCase() + Le.slice(1) : Le).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && e.disableTrendSideGating !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: o,
    effTargets: a,
    effBaselines: s,
    effGhosts: i,
    effChartTypeCore: l,
    effMetricImprovementCore: d,
    effEngineSettings: c,
    effAlwaysShowZeroY: u,
    effAlwaysShowHundredY: f,
    effPercentScale: p,
    effGradientSequences: h,
    effSequenceTransition: v,
    effProcessLineWidth: x,
    effTrendVisualMode: g,
    effShowTrendGatingExplanation: j,
    effEnableNeutralNoJudgement: T,
    effEnableRules: I,
    effShowPartitionMarkers: S,
    effShowTrendStartMarkers: b,
    effShowFirstFavourableCrossMarkers: C,
    effShowTrendBridgeOverlay: N,
    effShowSignalsInspector: w,
    effOnSignalFocus: m,
    effShowWarningsPanel: y,
    effWarningsFilter: k,
    effShowEmbeddedIcon: M,
    effEmbeddedIconVariant: A,
    effEmbeddedIconRunLength: E,
    effShowFocusIndicator: L,
    effHeight: D,
    effClassName: R,
    effAriaLabel: oe,
    effUnit: G,
    effNarrationContext: B,
    effShowZones: Q,
    effShowPoints: W,
    effHighlightOutOfControl: K,
    effVisualsScenario: q,
    effVisualsEngineSettings: J,
    effSource: le,
    effPrecomputedVisuals: ee,
    effEngineAutoRecalc: te
  } = lg(e), Z = oe ?? e.ariaLabel, ne = D ?? e.height ?? 260, fe = R ?? e.className, U = G ?? e.unit, ie = B ?? e.narrationContext, ae = Q ?? e.showZones, pe = W ?? e.showPoints, ce = K ?? e.highlightOutOfControl, me = q ?? e.visualsScenario ?? ql.None, Ee = J ?? e.visualsEngineSettings, Ie = le ?? e.source, Ne = e.a11y?.announceFocus ?? e.announceFocus ?? !1, O = V.useMemo(() => o.map((Ce, Le) => ({
    x: Ce.x,
    value: Ce.y,
    target: a?.[Le] ?? void 0,
    baseline: s?.[Le] ?? void 0,
    ghost: i?.[Le] ?? void 0
  })), [o, a, s, i]), _ = V.useMemo(() => {
    try {
      const Ce = te;
      return Ce?.enabled ? vg(O, {
        chartType: l,
        metricImprovement: d,
        shiftLength: Ce.shiftLength,
        deltaSigma: Ce.deltaSigma,
        minGap: Ce.minGap,
        maxInsertions: Ce.maxInsertions
      }) : O;
    } catch {
      return O;
    }
  }, [O, te, l, d]), P = V.useMemo(() => {
    if (ee?.visuals) return ee.visuals;
    try {
      const Ce = wi(
        c,
        _,
        Ee
      ), { chartType: Le, metricImprovement: _e } = vi(
        l,
        d
      ), qe = {
        chartType: Le,
        metricImprovement: _e,
        data: _,
        settings: Ce
      }, { visuals: lt } = Jm(qe, me, {
        trendVisualMode: g === tc.Ungated ? Fn.Ungated : Fn.Gated,
        enableNeutralNoJudgement: T
      });
      return lt || [];
    } catch {
      return [];
    }
  }, [
    ee?.visuals?.length,
    _,
    l,
    d,
    g,
    T,
    c,
    me,
    Ee
  ]), $ = V.useMemo(() => {
    if (ee?.rows)
      try {
        const Ce = ee.rows, Le = (_e) => {
          switch (_e) {
            case je.ImprovementHigh:
            case je.ImprovementLow:
              return He.Improvement;
            case je.ConcernHigh:
            case je.ConcernLow:
              return He.Concern;
            case je.NeitherHigh:
            case je.NeitherLow:
              return He.Neither;
            case je.CommonCause:
            default:
              return He.Neither;
          }
        };
        return Ce.map(
          (_e, qe) => ({
            data: {
              value: _e.value,
              ghost: !!_e.ghost
            },
            partition: { id: _e.partitionId },
            limits: {
              mean: _e.mean,
              ucl: _e.upperProcessLimit,
              lcl: _e.lowerProcessLimit,
              oneSigma: { upper: _e.upperOneSigma, lower: _e.lowerOneSigma },
              twoSigma: { upper: _e.upperTwoSigma, lower: _e.lowerTwoSigma }
            },
            rules: {
              singlePoint: { up: !!_e.singlePointUp, down: !!_e.singlePointDown },
              twoOfThree: { up: !!_e.twoSigmaUp, down: !!_e.twoSigmaDown },
              fourOfFive: { up: !!_e.fourOfFiveUp, down: !!_e.fourOfFiveDown },
              shift: { up: !!_e.shiftUp, down: !!_e.shiftDown },
              trend: { up: !!_e.trendUp, down: !!_e.trendDown }
            },
            classification: {
              variation: Le(_e.variationIcon),
              neutralSpecialCauseValue: _e.variationIcon === je.NeitherHigh || _e.variationIcon === je.NeitherLow ? _e.specialCauseImprovementValue ?? _e.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: _[qe]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Ce = wi(
        c,
        _,
        Ee
      ), { chartType: Le, metricImprovement: _e } = vi(
        l,
        d
      ), qe = {
        chartType: Le,
        metricImprovement: _e,
        data: _,
        settings: Ce
      }, { rows: lt } = gg(qe), jt = (De) => {
        switch (De) {
          case je.ImprovementHigh:
          case je.ImprovementLow:
            return He.Improvement;
          case je.ConcernHigh:
          case je.ConcernLow:
            return He.Concern;
          case je.NeitherHigh:
          case je.NeitherLow:
            return He.Neither;
          case je.CommonCause:
          default:
            return He.Neither;
        }
      };
      return lt.map(
        (De, vt) => ({
          data: {
            value: De.value,
            ghost: !!De.ghost
          },
          partition: { id: De.partitionId },
          limits: {
            mean: De.mean,
            ucl: De.upperProcessLimit,
            lcl: De.lowerProcessLimit,
            oneSigma: { upper: De.upperOneSigma, lower: De.lowerOneSigma },
            twoSigma: { upper: De.upperTwoSigma, lower: De.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!De.singlePointUp, down: !!De.singlePointDown },
            twoOfThree: { up: !!De.twoSigmaUp, down: !!De.twoSigmaDown },
            fourOfFive: { up: !!De.fourOfFiveUp, down: !!De.fourOfFiveDown },
            shift: { up: !!De.shiftUp, down: !!De.shiftDown },
            trend: { up: !!De.trendUp, down: !!De.trendDown }
          },
          classification: {
            variation: jt(De.variationIcon),
            neutralSpecialCauseValue: De.variationIcon === je.NeitherHigh || De.variationIcon === je.NeitherLow ? De.specialCauseImprovementValue ?? De.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: _[vt]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    ee?.rows?.length,
    _,
    l,
    d,
    c,
    Ee
  ]) || null, F = ($ || []).slice().reverse().find((Ce) => Ce.limits.mean != null), H = F?.limits.mean ?? null, Y = V.useMemo(() => {
    const Ce = [];
    try {
      const Le = $, _e = c?.minimumPoints ?? 13, qe = c?.minimumPoints ?? 12;
      if (Le && Le.length) {
        const lt = Le.filter(
          (De) => !De.data.ghost && De.data.value != null
        ).length;
        lt < _e && Ce.push({
          code: zr.InsufficientPointsGlobal,
          severity: $t.Warning,
          category: Hr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: lt, minimumPoints: _e }
        });
        const jt = /* @__PURE__ */ new Map();
        for (const De of Le) {
          const vt = De.partition.id ?? 0, Ct = jt.get(vt) || { size: 0, nonGhost: 0 };
          Ct.size += 1, !De.data.ghost && De.data.value != null && (Ct.nonGhost += 1), jt.set(vt, Ct);
        }
        for (const [De, vt] of jt)
          vt.nonGhost > 0 && vt.nonGhost < qe && Ce.push({
            code: zr.InsufficientPointsPartition,
            severity: $t.Warning,
            category: Hr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: De,
              nonGhostCount: vt.nonGhost,
              minimumPointsPartition: qe
            }
          });
      }
    } catch {
    }
    return Ce;
  }, [$, c?.minimumPoints]), X = V.useMemo(() => Y.length ? k ? Y.filter((Ce) => !(k.severities && Ce.severity && !k.severities.includes(Ce.severity) || k.categories && Ce.category && !k.categories.includes(Ce.category) || k.codes && !k.codes.includes(Ce.code))) : Y : [], [Y, k]), re = F?.limits.ucl ?? null, de = F?.limits.lcl ?? null, ue = F?.limits.oneSigma.upper ?? null, he = F?.limits.oneSigma.lower ?? null, we = F?.limits.twoSigma.upper ?? null, be = F?.limits.twoSigma.lower ?? null, ze = H != null && ue != null ? Math.abs(ue - H) : 0, $e = V.useMemo(
    () => [{ id: "process", data: o, color: "#A6A6A6" }],
    [o]
  ), Ke = V.useMemo(
    () => bg(
      o,
      { mean: H, ucl: re, lcl: de, onePos: ue, oneNeg: he, twoPos: we, twoNeg: be },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!p
      },
      a ?? null
    ),
    [
      o,
      H,
      re,
      de,
      ue,
      he,
      we,
      be,
      a,
      u,
      f,
      p
    ]
  ), ot = V.useMemo(() => {
    const Ce = (Le) => {
      const _e = Le.filter(
        (lt) => typeof lt == "number" && !isNaN(lt)
      );
      if (!_e.length) return null;
      const qe = _e[0];
      return _e.every((lt) => lt === qe) ? qe : null;
    };
    if ($ && $.length) {
      const Le = Ce($.map((_e) => _e.target));
      if (Le != null) return Le;
    }
    return a && a.length ? Ce(a) : null;
  }, [$, a]), { show: se, slotPx: ke, totalReservedPx: ge } = xg(
    Ke,
    ne,
    { maxFraction: 0.35 }
  ), ve = se ? ge : 0, Be = V.useMemo(() => {
    const Ce = o.map((Le) => Le.x);
    return nc({
      values: o.map((Le) => Le.y),
      dates: Ce,
      providedUnit: U || ie?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [o, U, ie?.measureUnit]), Te = U ?? ie?.measureUnit ?? Be.unit, Ve = V.useMemo(() => Te ? { ...ie || {}, measureUnit: Te } : ie, [ie, Te]), Ye = V.useMemo(() => {
    if (!$) return [];
    const Ce = [];
    for (let Le = 1; Le < $.length; Le++)
      $[Le].partition.id !== $[Le - 1].partition.id && Ce.push(Le);
    return Ce;
  }, [$]), nt = V.useMemo(
    () => ag({
      show: !!M,
      rowsForUi: $,
      minPoints: c?.minimumPoints ?? 13,
      metricImprovement: d,
      variant: A,
      runLength: E
    }),
    [
      M,
      $,
      c?.minimumPoints,
      d,
      A,
      E
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: fe ? `fdp-spc-chart-wrapper ${fe}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ n.jsx(
          rg,
          {
            show: !!M,
            variationNode: nt,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ n.jsx(
          Rh,
          {
            height: ne,
            ariaLabel: Z,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ n.jsx(Bh, { series: $e, yDomain: Ke, yBottomGapPx: ve, children: (() => {
              const Ce = {
                data: {
                  series: $e,
                  engineRows: $,
                  visualCategories: P,
                  partitionMarkers: S ? Ye : []
                },
                targets: {
                  limits: { mean: H, ucl: re, lcl: de, sigma: ze, onePos: ue, oneNeg: he, twoPos: we, twoNeg: be },
                  uniformTarget: ot
                },
                visuals: {
                  showPoints: pe,
                  showZones: ae,
                  highlightOutOfControl: ce,
                  gradientSequences: h,
                  sequenceTransition: v,
                  processLineWidth: x,
                  showFocusIndicator: L,
                  enableRules: I,
                  enableNeutralNoJudgement: T,
                  showTrendStartMarkers: b,
                  showFirstFavourableCrossMarkers: C,
                  showTrendBridgeOverlay: N
                },
                a11y: {
                  announceFocus: Ne,
                  ariaLabel: Z,
                  narrationContext: Ve,
                  showSignalsInspector: w,
                  onSignalFocus: m,
                  showTrendGatingExplanation: j
                },
                axis: { zeroBreakSlotGapPx: ke },
                compute: { effectiveUnit: Te, metricImprovement: d }
              };
              return /* @__PURE__ */ n.jsx(dg, { ...Ce });
            })() })
          }
        ),
        Ie && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Ie == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          Ie
        ] }) : Ie }),
        /* @__PURE__ */ n.jsx(
          ng,
          {
            show: !!y,
            warnings: X,
            formatWarningCategory: r,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function Sg(e, t) {
  const {
    chartType: r = Nt.XmR,
    metricImprovement: o,
    minimumPoints: a = os,
    enableNeutralNoJudgement: s = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map((I) => ({ x: I.x, value: I.value ?? I.y ?? null }));
  let d = null;
  try {
    const I = l.filter(
      (b) => typeof b.value == "number"
    ).length, S = { minimumPoints: a };
    I >= a && (S.chartLevelEligibility = !0), d = cr({ chartType: r, metricImprovement: o, data: l, settings: S });
  } catch {
    d = null;
  }
  const c = d?.rows ?? [];
  let u = c[c.length - 1] ?? null;
  for (let I = c.length - 1; I >= 0; I--) {
    const S = c[I];
    if (S && S.value != null && !S.ghost) {
      u = S;
      break;
    }
  }
  let f = [];
  try {
    f = lr(c, {
      metricImprovement: o,
      enableNeutralNoJudgement: s
    });
  } catch {
    f = [];
  }
  const p = Or(
    u?.variationIcon
  ), h = u?.variationIcon ?? null, v = u?.mean ?? null, x = u ? {
    lower: u?.lowerProcessLimit ?? null,
    upper: u?.upperProcessLimit ?? null
  } : null, g = u ? {
    upperOne: u?.upperOneSigma ?? null,
    upperTwo: u?.upperTwoSigma ?? null,
    lowerOne: u?.lowerOneSigma ?? null,
    lowerTwo: u?.lowerTwoSigma ?? null
  } : null;
  let j, T;
  return i && (j = as(f), T = rc(f)), {
    rows: c,
    visuals: f,
    latestState: p,
    lastVariationIcon: h,
    centerLine: v,
    controlLimits: x,
    sigmaBands: g,
    pointSignals: j,
    pointNeutralSpecialCause: T
  };
}
const s1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: sn,
  BaselineSuggestionReason: Hl,
  ChartType: Nt,
  DEFAULT_MIN_POINTS: os,
  Icons: og,
  ImprovementDirection: We,
  PARITY_V26: Jl,
  RULE_METADATA: Bl,
  SPCChart: wg,
  SPCTooltipOverlay: ec,
  SpcEmbeddedIconVariant: mn,
  SpcVisualCategory: rt,
  SpcWarningCategory: Hr,
  SpcWarningCode: zr,
  SpcWarningSeverity: $t,
  VARIATION_COLOR_TOKENS: Tt,
  VariationIcon: je,
  buildSpcV26a: cr,
  buildSpcV26aWithVisuals: ts,
  computeSpcPrecomputed: Sg,
  computeSpcVisualCategories: lr,
  extractRuleIds: wo,
  getVariationColorHex: $m,
  getVariationColorToken: Ol,
  isSpecialCauseIcon: Ql,
  mapIconToVariation: Or,
  normaliseSpcSettingsV2: Zl,
  ruleGlossary: Ln,
  variationLabel: So,
  visualsToNeutralFlags: rc,
  visualsToPointSignals: as,
  withParityV26: Xm
}, Symbol.toStringTag, { value: "Module" }));
function _g(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function kg(e) {
  const {
    values: t,
    x: r,
    chartType: o = Nt.XmR,
    metricImprovement: a = We.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: d = !1
    // autoClassify = true,
  } = e, c = V.useMemo(() => {
    const b = [];
    for (let C = 0; C < t.length; C++)
      b.push({ x: r?.[C], value: t[C] });
    return b;
  }, [t, r]), u = V.useMemo(() => {
    try {
      const b = c.map((m, y) => ({ x: m.x ?? y, value: m.value })), C = 13, N = b.filter((m) => typeof m.value == "number").length, w = { minimumPoints: C };
      return N >= C && (w.chartLevelEligibility = !0), cr({ chartType: o, metricImprovement: a, data: b, settings: w });
    } catch {
      return null;
    }
  }, [c, o, a]), f = V.useMemo(() => {
    const b = u?.rows;
    if (!b || b.length === 0) return null;
    for (let C = b.length - 1; C >= 0; C--) {
      const N = b[C];
      if (N && N.value != null && !N.ghost) return N;
    }
    return b[b.length - 1] ?? null;
  }, [u]), p = V.useMemo(() => {
    const b = u?.rows;
    if (!b || b.length === 0) return null;
    let C = b[b.length - 1];
    for (let N = b.length - 1; N >= 0; N--) {
      const w = b[N];
      if (w && w.value != null && !w.ghost) {
        C = w;
        break;
      }
    }
    return Or(C?.variationIcon);
  }, [u]), h = V.useMemo(() => f?.mean ?? null, [f]), v = V.useMemo(() => {
    if (!f) return null;
    const b = f?.lowerProcessLimit ?? null, C = f?.upperProcessLimit ?? null;
    return b == null && C == null ? null : { lower: b, upper: C };
  }, [f]), x = V.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), g = V.useMemo(() => {
    const b = u?.rows;
    if (!(!b || b.length === 0))
      try {
        return lr(b, {
          metricImprovement: a,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, a]), j = V.useMemo(() => as(g), [g?.length]), T = V.useMemo(() => {
    if (!(!g || g.length === 0))
      return g.map((b) => b === rt.NoJudgement);
  }, [g?.length]), I = V.useMemo(() => {
    let b = null;
    if (f && f.value != null && !f.ghost) {
      const A = f.variationIcon;
      p === Me.SpecialCauseNoJudgement ? b = Ql(A) ? Me.SpecialCauseNoJudgement : Me.CommonCause : b = Or(A) ?? Me.CommonCause;
    }
    const C = b ?? Me.CommonCause, N = _o[C].hex, [w, m, y] = _g(N), k = ko();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${w}, ${m}, ${y}, ${k.start}) 0%, rgba(${w}, ${m}, ${y}, ${k.mid}) 50%, rgba(${w}, ${m}, ${y}, ${k.end}) 100%)`,
      "--fdp-metric-card-accent": N
    };
  }, [f, p]);
  return { sparkProps: V.useMemo(() => ({
    data: c,
    showMean: d,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: a,
    centerLine: h,
    controlLimits: v,
    sigmaBands: x,
    pointSignals: j,
    pointNeutralSpecialCause: T,
    visualCategories: g,
    variationState: p ?? void 0
  }), [
    c,
    d,
    s,
    i,
    l,
    a,
    p,
    h,
    v?.lower,
    v?.upper,
    x?.upperTwo,
    x?.lowerOne,
    x?.lowerTwo,
    j?.length,
    T?.length,
    g?.length
  ]), metricCardStyle: I, latestState: p };
}
const i1 = ({
  sparkData: e,
  direction: t = We.Neither,
  showMean: r = !1,
  showLimits: o = !0,
  showLimitBand: a = !1,
  showInnerBands: s = !1,
  maxPoints: i,
  autoValue: l = !0,
  autoDelta: d = !0,
  autoMetadata: c = !0,
  defaultUnit: u,
  intervalHint: f,
  startDate: p,
  deltaConfig: h,
  ...v
}) => {
  const x = kg({
    values: e.map((C) => C.value ?? null),
    metricImprovement: t,
    showLimits: o,
    showLimitBand: a,
    showInnerBands: s,
    showMean: r
  }), g = /* @__PURE__ */ n.jsx(Kl, { ...x.sparkProps, maxPoints: i }), j = V.useMemo(() => nc({
    values: e.map((C) => typeof C.value == "number" ? C.value : null),
    dates: e.map((C) => C.date),
    intervalHint: f,
    startDate: p,
    providedUnit: v.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: d,
    autoMetadata: c,
    deltaConfig: h
  }), [e, f, p, v.unit, u, l, d, c, h]), T = l && j.value != null ? j.value : v.value, I = d && j.delta ? j.delta : v.delta, S = j.unit || v.unit, b = c && j.metadata ? j.metadata : v.metadata;
  return /* @__PURE__ */ n.jsx(
    Dm,
    {
      ...v,
      value: T,
      unit: S,
      delta: I,
      metadata: b,
      visual: g,
      style: x.metricCardStyle
    }
  );
};
function Cg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function Ng(e = "auto") {
  const [t, r] = et.useState(
    !1
  );
  return et.useEffect(() => {
    if (e !== "auto" || typeof window > "u" || !window.matchMedia) return;
    const o = window.matchMedia("(prefers-reduced-motion: reduce)"), a = () => r(o.matches);
    return a(), o.addEventListener?.("change", a), () => o.removeEventListener?.("change", a);
  }, [e]), e === "off" ? !1 : t;
}
function Si(e, t) {
  return t[Math.floor(e() * t.length)];
}
function rn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function jg(e, t) {
  const r = e.seed ?? 1, o = Cg(r), a = Math.max(6, Math.min(48, Math.round(e.density ?? 18))), s = ["circle", "hexagon", "rect"], i = [], l = e.gradients && e.gradients.length > 0 ? e.gradients : [
    "nhs-fdp-gradient-blue",
    "nhs-fdp-gradient-aqua",
    "nhs-fdp-gradient-green"
  ], c = (typeof e.callout.width == "number" ? e.callout.width : void 0) ?? Math.min(520, t * 0.7), u = (t - c) / 2, f = u + c, p = {
    left: u / t * 100,
    right: f / t * 100,
    top: 20,
    bottom: 80
  }, h = (x, g) => !(x > p.left - 6 && x < p.right + 6 && g > p.top - 10 && g < p.bottom + 10);
  let v = 0;
  for (; i.length < a && v < a * 50; ) {
    v++;
    const x = Si(o, s), g = rn(o() * 1, 0.15, 0.95), j = 24 + o() * 72, T = o() * 100, I = o() * 100;
    if (!h(T, I)) continue;
    const S = Si(o, l);
    if (x === "rect") {
      const b = 0.6 + o() * 0.8;
      i.push({
        kind: x,
        width: j * b,
        height: j,
        x: T,
        y: I,
        depth: g,
        fillToken: S,
        shadow: "soft"
      });
    } else
      i.push({
        kind: x,
        size: j,
        x: T,
        y: I,
        depth: g,
        fillToken: S,
        shadow: "soft"
      });
  }
  return i;
}
const l1 = (e) => {
  const {
    seed: t = 1,
    mode: r = "scroll",
    axis: o = "xy",
    height: a = 520,
    strength: s = 120,
    scrub: i = 0.3,
    scrollStart: l = "top bottom",
    scrollEnd: d = "bottom top",
    debugMarkers: c = !1,
    pin: u = !1,
    pinSpacing: f = !0,
    reducedMotion: p = "auto",
    callout: h,
    className: v,
    style: x
  } = e, g = et.useRef(null), [j, T] = et.useState({
    w: 1e3,
    h: 520
  }), I = Ng(p), S = e.direction ?? "se", b = et.useMemo(() => {
    switch (S) {
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
  }, [S]);
  et.useLayoutEffect(() => {
    if (!g.current) return;
    const A = new ResizeObserver((E) => {
      for (const L of E) {
        const D = L.contentRect;
        T({ w: D.width, h: D.height });
      }
    });
    return A.observe(g.current), () => A.disconnect();
  }, []);
  const C = et.useMemo(() => e.shapes && e.shapes.length ? e.shapes : jg(e, j.w), [t, j.w, j.h]), [N, w] = et.useState(0), [m, y] = et.useState(null);
  et.useEffect(() => {
    if (r !== "scroll" || I) return;
    let A;
    return (async () => {
      if (typeof window > "u") return;
      const E = g.current;
      if (E)
        try {
          const L = await import("./index-C_MjGuuK.js"), D = await import("./ScrollTrigger-7ivQEezo.js"), R = L.default ?? L.gsap ?? L, oe = D.ScrollTrigger ?? D.default ?? D;
          R.registerPlugin(oe);
          const G = oe.create({
            trigger: E,
            start: l,
            end: d,
            markers: c,
            pin: u,
            pinSpacing: f,
            scrub: i,
            invalidateOnRefresh: !0,
            onUpdate: (B) => w(B.progress)
          });
          y((B) => B === null ? G.progress ?? 0.5 : B), c && window && (window.__parallaxRefresh = () => {
            try {
              oe.refresh();
            } catch {
            }
          }), A = () => {
            try {
              G.kill();
            } catch {
            }
          };
        } catch {
          const D = () => {
            const R = E.getBoundingClientRect(), oe = window.innerHeight || document.documentElement.clientHeight, G = R.height + oe, B = oe - R.top, Q = rn(B / G, 0, 1);
            y((W) => W === null ? Q : W), w(Q);
          };
          D(), window.addEventListener("scroll", D, { passive: !0 }), window.addEventListener("resize", D), A = () => {
            window.removeEventListener("scroll", D), window.removeEventListener("resize", D);
          };
        }
    })(), () => {
      A && A();
    };
  }, [r, I, l, d, c, u, f, i]), et.useEffect(() => {
    if (r !== "timed" || I) return;
    let A = 0, E = performance.now();
    const L = 8e3, D = (R) => {
      const G = (R - E) % L / L;
      w(G), A = requestAnimationFrame(D);
    };
    return A = requestAnimationFrame(D), () => cancelAnimationFrame(A);
  }, [r, I]);
  const k = (A) => 0.15 + (A ?? 0.5) * 0.6, M = {
    position: "absolute",
    left: "50%",
    top: "50%",
    bottom: void 0,
    right: void 0,
    transform: "translate(-50%, -50%)",
    width: typeof h.width == "number" ? `${h.width}px` : h.width || "min(520px, 70%)"
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: g,
      className: ["nhs-parallax-scene", v].filter(Boolean).join(" "),
      style: {
        position: "relative",
        height: typeof a == "number" ? `${a}px` : a,
        overflow: "hidden",
        ...x
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ n.jsxs(
          "svg",
          {
            className: "nhs-parallax-canvas",
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ n.jsxs("defs", { children: [
                /* @__PURE__ */ n.jsxs("linearGradient", { id: "fdpgradient-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#2E61A5" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#1B3E73" })
                ] }),
                /* @__PURE__ */ n.jsxs("linearGradient", { id: "fdpgradient-aqua", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#1DC6D2" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#117E8A" })
                ] }),
                /* @__PURE__ */ n.jsxs("linearGradient", { id: "fdpgradient-green", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#2BC06A" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#1A874A" })
                ] }),
                /* @__PURE__ */ n.jsxs("linearGradient", { id: "fdpgradient-dark-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#003087" })
                ] }),
                /* @__PURE__ */ n.jsxs("linearGradient", { id: "fdpgradient-light-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#60b2e2" })
                ] }),
                /* @__PURE__ */ n.jsxs("linearGradient", { id: "fdpgradient-purple", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#ac98cb" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#d6cce3" })
                ] }),
                /* @__PURE__ */ n.jsxs("linearGradient", { id: "fdpgradient-green-palette", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#007f3b" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#63a691" })
                ] }),
                /* @__PURE__ */ n.jsxs("linearGradient", { id: "fdpgradient-grey", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#4c6272" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#768692" })
                ] })
              ] }),
              /* @__PURE__ */ n.jsx("g", { className: "nhs-parallax-connectors", children: C.map((A, E) => {
                const L = A.x, D = A.y, R = (A.width ?? A.size ?? 40) / j.w * 100 * 1, oe = (A.height ?? A.size ?? 40) / j.h * 100 * 1, G = A.kind === "circle" ? [
                  [L, D - oe / 2],
                  [L + R / 2, D],
                  [L, D + oe / 2],
                  [L - R / 2, D]
                ] : A.kind === "rect" || A.kind === "svg" ? [
                  [L - R / 2, D - oe / 2],
                  [L + R / 2, D - oe / 2],
                  [L + R / 2, D + oe / 2],
                  [L - R / 2, D + oe / 2]
                ] : (
                  // hexagon approx points
                  [
                    [L - R / 2, D],
                    [L - R / 4, D - oe / 2],
                    [L + R / 4, D - oe / 2],
                    [L + R / 2, D],
                    [L + R / 4, D + oe / 2],
                    [L - R / 4, D + oe / 2]
                  ]
                ), B = k(A.depth), K = (u ? N : N - (m ?? 0.5)) * s * B, q = o === "x" ? K : o === "xy" ? K * b.x : 0, J = o === "y" ? K : o === "xy" ? K * b.y : 0;
                return G.map((le, ee) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: rn(le[0] + q, 0, 100),
                    y1: rn(le[1] + J, 0, 100),
                    x2: rn(50 + q * 0.2, 0, 100),
                    y2: rn(50 + J * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${E}-${ee}`
                ));
              }) }),
              /* @__PURE__ */ n.jsx("g", { className: "nhs-parallax-shapes", children: C.map((A, E) => {
                const L = k(A.depth), oe = (u ? N : N - (m ?? 0.5)) * s * L, G = o === "x" ? oe : o === "xy" ? oe * b.x : 0, B = o === "y" ? oe : o === "xy" ? oe * b.y : 0, Q = rn(A.x + G, 0, 100), W = rn(A.y + B, 0, 100), K = A.rotate ?? 0, q = [
                  "nhs-parallax-shape",
                  A.fillToken,
                  A.shadow && `nhs-parallax-shadow--${A.shadow}`
                ].filter(Boolean).join(" ");
                if (A.kind === "circle") {
                  const te = (A.size ?? 40) / j.w * 100 * 0.5;
                  return /* @__PURE__ */ n.jsx("circle", { cx: Q, cy: W, r: te, className: q }, E);
                }
                if (A.kind === "rect") {
                  const te = (A.width ?? 48) / j.w * 100, Z = (A.height ?? 36) / j.h * 100;
                  return /* @__PURE__ */ n.jsx(
                    "rect",
                    {
                      x: Q - te / 2,
                      y: W - Z / 2,
                      width: te,
                      height: Z,
                      transform: `rotate(${K} ${Q} ${W})`,
                      className: q
                    },
                    E
                  );
                }
                if (A.kind === "svg" && A.src) {
                  const te = (A.width ?? 48) / j.w * 100, Z = (A.height ?? 48) / j.h * 100;
                  return /* @__PURE__ */ n.jsx(
                    "image",
                    {
                      href: A.src,
                      x: Q - te / 2,
                      y: W - Z / 2,
                      width: te,
                      height: Z,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${K} ${Q} ${W})`,
                      className: q
                    },
                    E
                  );
                }
                const J = (A.size ?? 40) / j.w * 100, le = J * 0.866, ee = [
                  [Q - J / 2, W],
                  [Q - J / 4, W - le / 2],
                  [Q + J / 4, W - le / 2],
                  [Q + J / 2, W],
                  [Q + J / 4, W + le / 2],
                  [Q - J / 4, W + le / 2]
                ].map((te) => te.join(",")).join(" ");
                return /* @__PURE__ */ n.jsx("polygon", { points: ee, className: q }, E);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhs-parallax-callout",
            style: M,
            "aria-hidden": !1,
            children: /* @__PURE__ */ n.jsxs(
              "div",
              {
                className: ["nhs-parallax-callout-inner", h.backgroundToken].filter(Boolean).join(" "),
                children: [
                  " ",
                  h.content,
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
function Mg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function wt(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Ig(e, t, r, o) {
  const a = Mg(e), s = [], i = [], l = ["rect", "hex", "circle"], d = { x: 50, y: 50 }, c = o, u = 1200, f = 400, p = 1.2, h = {
    left: d.x - c.w / 2,
    right: d.x + c.w / 2,
    top: d.y - c.h / 2,
    bottom: d.y + c.h / 2
  }, v = (I, S) => !(I.right < S.left || I.left > S.right || I.bottom < S.top || I.top > S.bottom), x = (I) => I.left >= 0 && I.top >= 0 && I.right <= 100 && I.bottom <= 100, g = (I, S, b, C, N, w) => {
    let m = 0, y = 0;
    if (I === "rect") {
      const k = C ?? 48, M = N ?? 36;
      m = k / u * 100, y = M / f * 100;
    } else if (I === "circle") {
      const k = w ?? 40;
      m = k / u * 100, y = k / f * 100;
    } else {
      const k = w ?? 40;
      m = k / u * 100, y = k * 0.866 / f * 100;
    }
    return {
      left: S - m / 2 - p,
      right: S + m / 2 + p,
      top: b - y / 2 - p,
      bottom: b + y / 2 + p
    };
  };
  let j = 0;
  const T = wt(Math.round(t), 4, 48);
  for (; s.length < T && j < T * 120; ) {
    j++;
    const I = l[Math.floor(a() * l.length)], S = a() * 100, b = a() * 100, C = g(I, S, b, 32, 24, 28);
    if (!x(C)) continue;
    const N = wt(a(), 0.15, 0.95), w = 0, m = r[Math.floor(a() * r.length)];
    if (I === "rect") {
      const y = 40 + a() * 80, k = 28 + a() * 64, M = g(I, S, b, y, k);
      if (v(M, h)) continue;
      let A = !1;
      for (let E = 0; E < i.length; E++)
        if (v(M, i[E])) {
          A = !0;
          break;
        }
      if (A) continue;
      i.push(M), s.push({ kind: I, x: S, y: b, width: y, height: k, rotate: w, depth: N, fill: m, shadow: "soft" });
    } else if (I === "circle") {
      const y = 24 + a() * 80, k = g(I, S, b, void 0, void 0, y);
      if (v(k, h)) continue;
      let M = !1;
      for (let A = 0; A < i.length; A++)
        if (v(k, i[A])) {
          M = !0;
          break;
        }
      if (M) continue;
      i.push(k), s.push({ kind: I, x: S, y: b, size: y, rotate: w, depth: N, fill: m, shadow: "soft" });
    } else {
      const y = 28 + a() * 72, k = g(I, S, b, void 0, void 0, y);
      if (v(k, h)) continue;
      let M = !1;
      for (let A = 0; A < i.length; A++)
        if (v(k, i[A])) {
          M = !0;
          break;
        }
      if (M) continue;
      i.push(k), s.push({ kind: I, x: S, y: b, size: y, rotate: w, depth: N, fill: m, shadow: "soft" });
    }
  }
  return s;
}
const c1 = ({
  seed: e = 1,
  width: t = "100%",
  height: r = 400,
  density: o = 16,
  gradients: a = [
    "pb-grad-aqua-green",
    "pb-grad-purple",
    "pb-grad-blue",
    "pb-grad-grey",
    "pb-grad-azure"
  ],
  shapes: s,
  feature: i,
  featureWidth: l = "min(640px, 80%)",
  excludeBoxPct: d = { w: 50, h: 36 },
  className: c,
  style: u
}) => {
  const f = et.useRef(null), [p, h] = et.useState({ w: 1200, h: 400 });
  et.useLayoutEffect(() => {
    if (!f.current) return;
    const j = new ResizeObserver((T) => {
      for (const I of T) {
        const S = I.contentRect;
        h({ w: S.width, h: S.height });
      }
    });
    return j.observe(f.current), () => j.disconnect();
  }, []);
  const v = et.useMemo(() => s?.length ? s : Ig(e, o, a, d), [
    e,
    o,
    a.join(","),
    d.w,
    d.h,
    s
  ]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: f,
      className: ["nhs-pattern-banner", c].filter(Boolean).join(" "),
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        height: typeof r == "number" ? `${r}px` : r,
        ...u
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ n.jsxs(
          "svg",
          {
            className: "nhs-pattern-banner__svg",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ n.jsxs("defs", { children: [
                /* @__PURE__ */ n.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-aqua-green",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
                      /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-purple",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "0",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(214, 203, 226)" }),
                      /* @__PURE__ */ n.jsx("stop", { offset: "0.72", stopColor: "rgb(192, 177, 213)" }),
                      /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "rgb(171, 151, 199)" })
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-blue",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(38, 58, 127)" }),
                      /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "rgb(34, 94, 171)" })
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-grey",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(66, 85, 101)" }),
                      /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "rgb(112, 132, 147)" })
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-azure",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(96, 178, 226)" }),
                      /* @__PURE__ */ n.jsx("stop", { offset: "0.51", stopColor: "rgb(34, 94, 172)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ n.jsx("g", { children: (() => {
                const j = (N) => N / p.w * 100, T = (N) => N / p.h * 100, I = v.map((N) => {
                  const w = N.x, m = N.y;
                  if (N.kind === "circle") {
                    const M = j(N.size ?? 40), A = T(N.size ?? 40);
                    return [
                      [w, m - A / 2],
                      [w + M / 2, m],
                      [w, m + A / 2],
                      [w - M / 2, m]
                    ];
                  }
                  if (N.kind === "rect") {
                    const M = j(N.width ?? 48), A = T(N.height ?? 36);
                    return [
                      [w - M / 2, m - A / 2],
                      [w + M / 2, m - A / 2],
                      [w + M / 2, m + A / 2],
                      [w - M / 2, m + A / 2]
                    ];
                  }
                  if (N.kind === "svg") {
                    const M = j(N.width ?? 48), A = T(N.height ?? 48);
                    return [
                      [w - M / 2, m - A / 2],
                      [w + M / 2, m - A / 2],
                      [w + M / 2, m + A / 2],
                      [w - M / 2, m + A / 2]
                    ];
                  }
                  const y = j(N.size ?? 40), k = y * 0.866 * (p.h / p.w);
                  return [
                    [w - y / 2, m],
                    [w - y / 4, m - k / 2],
                    [w + y / 4, m - k / 2],
                    [w + y / 2, m],
                    [w + y / 4, m + k / 2],
                    [w - y / 4, m + k / 2]
                  ];
                }), S = /* @__PURE__ */ new Set(), b = [];
                for (let N = 0; N < v.length; N++) {
                  let w = -1, m = 1 / 0;
                  for (let y = 0; y < v.length; y++) {
                    if (N === y) continue;
                    const k = v[N].x - v[y].x, M = v[N].y - v[y].y, A = k * k + M * M;
                    A < m && (m = A, w = y);
                  }
                  if (w >= 0) {
                    const y = Math.min(N, w), k = Math.max(N, w), M = `${y}-${k}`;
                    S.has(M) || (S.add(M), b.push([y, k]));
                  }
                }
                const C = [];
                for (const [N, w] of b) {
                  const m = I[N], y = I[w];
                  let k = null;
                  for (const M of m)
                    for (const A of y) {
                      const E = M[0] - A[0], L = M[1] - A[1], D = E * E + L * L;
                      (!k || D < k.d2) && (k = { p: M, q: A, d2: D });
                    }
                  k && C.push(
                    /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        x1: wt(k.p[0], 0, 100),
                        y1: wt(k.p[1], 0, 100),
                        x2: wt(k.q[0], 0, 100),
                        y2: wt(k.q[1], 0, 100),
                        className: "nhs-pattern-banner-connector"
                      },
                      `edge-${N}-${w}`
                    )
                  );
                }
                return C;
              })() }),
              /* @__PURE__ */ n.jsx("g", { children: v.map((j, T) => {
                const I = ["nhs-pattern-banner-shape", j.fill].filter(Boolean).join(" ");
                if (j.kind === "circle") {
                  const m = (j.size ?? 40) / p.w * 100 * 0.5, y = p.w / p.h, k = m * y;
                  return /* @__PURE__ */ n.jsx(
                    "ellipse",
                    {
                      cx: wt(j.x, 0, 100),
                      cy: wt(j.y, 0, 100),
                      rx: m,
                      ry: k,
                      className: I
                    },
                    T
                  );
                }
                if (j.kind === "rect") {
                  const m = (j.width ?? 48) / p.w * 100, y = (j.height ?? 36) / p.h * 100, k = wt(j.x - m / 2, 0, 100), M = wt(j.y - y / 2, 0, 100);
                  return /* @__PURE__ */ n.jsx(
                    "rect",
                    {
                      x: k,
                      y: M,
                      width: m,
                      height: y,
                      className: I
                    },
                    T
                  );
                }
                if (j.kind === "svg" && j.src) {
                  const m = (j.width ?? 48) / p.w * 100, y = (j.height ?? 48) / p.h * 100, k = wt(j.x - m / 2, 0, 100), M = wt(j.y - y / 2, 0, 100);
                  return /* @__PURE__ */ n.jsx(
                    "image",
                    {
                      href: j.src,
                      x: k,
                      y: M,
                      width: m,
                      height: y,
                      preserveAspectRatio: "xMidYMid meet",
                      className: I
                    },
                    T
                  );
                }
                const S = (j.size ?? 40) / p.w * 100, b = S * 0.866 * (p.h / p.w), C = wt(j.x, 0, 100), N = wt(j.y, 0, 100), w = [
                  [C - S / 2, N],
                  [C - S / 4, N - b / 2],
                  [C + S / 4, N - b / 2],
                  [C + S / 2, N],
                  [C + S / 4, N + b / 2],
                  [C - S / 4, N + b / 2]
                ].map((m) => m.join(",")).join(" ");
                return /* @__PURE__ */ n.jsx("polygon", { points: w, className: I }, T);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhs-pattern-banner__feature",
            style: {
              width: typeof l == "number" ? `${l}px` : l
            },
            children: i
          }
        )
      ]
    }
  );
}, Dg = "150ms", Tg = "300ms", Lg = "500ms", Ag = "cubic-bezier(0.4, 0, 1, 1)", $g = "cubic-bezier(0, 0, 0.2, 1)", Eg = "cubic-bezier(0.4, 0, 0.2, 1)", Pg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Fg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Rg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Bg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Hg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", zg = "1px", Og = "2px", Ug = "4px", Wg = "4px", Gg = "4px", Vg = "2px", Yg = "1px", Zg = "0px", qg = "4px", Jg = "8px", Xg = "12px", oc = "#d8dde0", ac = "#4c6272", sc = "#d8dde0", ic = "#aeb7bd", lc = "#d5281b", cc = "#005eb8", dc = "#ffffff", uc = "#212b32", fc = "#007f3b", pc = "#330072", hc = "#7c2855", mc = "#d5281b", gc = "#ffeb3b", xc = "#fff9c4", bc = "#ffb81c", yc = "#ed8b00", vc = "#00a499", wc = "#ae2573", Sc = "#4c6272", _c = "#768692", kc = "#aeb7bd", Cc = "#d8dde0", Nc = "#f0f4f5", Kg = "#212b32", Qg = "#4c6272", e0 = "#ffffff", t0 = "#212b32", n0 = "#005eb8", r0 = "#7c2855", o0 = "#003087", a0 = "#330072", s0 = "#ffeb3b", i0 = "#212b32", l0 = "#d8dde0", c0 = "#ffffff33", d0 = "#d5281b", u0 = "#4c6272", f0 = "#ffffff", p0 = "#007f3b", h0 = "#ffffff", m0 = "#006530", g0 = "#004021", x0 = "#004021", b0 = "#00000000", y0 = "#ffffff", v0 = "#005eb8", w0 = "#005eb8", S0 = "#d9e5f2", _0 = "#c7daf0", k0 = "#005eb8", C0 = "#ffffff", N0 = "#212b32", j0 = "#d9dde0", M0 = "#b3bcc2", I0 = "#b3bcc2", D0 = "#d5281b", T0 = "#aa2016", L0 = "#6a140e", A0 = "#6a140e", $0 = "#005eb8", E0 = "#004b93", P0 = "#002f5c", F0 = "#002f5c", R0 = "8px", B0 = "16px", H0 = "12px", z0 = "16px", O0 = "4px", U0 = "40px", W0 = "4px", G0 = "40px", V0 = "12px", Y0 = "16px", Z0 = "32px", q0 = "16px", J0 = "20px", X0 = "28px", K0 = "9px", Q0 = "2px", ex = "16px", tx = "24px", nx = "8px", rx = "24px", ox = "16px", ax = "4px", sx = "4px", ix = "4px", lx = "8px", cx = "4px", dx = "16px", ux = "#007f3b", fx = "#006530", px = "#004021", hx = "#d8dde0", mx = "#ffffff", gx = "#768692", xx = "#00000000", bx = "#ffeb3b", yx = "#00000000", vx = "#ffffff", wx = "#d9e5f2", Sx = "#c7daf0", _x = "#005eb8", kx = "#005eb8", jc = "8px", Mc = "16px", Ic = "12px", Dc = "16px", Cx = "2px", Nx = "4px", jx = "4px", Mx = "600", Ix = "#ffffff", Dx = "#d8dde0", Tx = "#aeb7bd", Lx = "#f0f4f5", Ax = "#212b32", $x = "#212b32", Ex = "#005eb8", Tc = "16px", Lc = "32px", Ac = "16px", Px = "1px", Fx = "4px", Rx = "none", Bx = "0 2px 4px rgba(0, 0, 0, 0.1)", Hx = "#ffffff", zx = "#ffffff", Ox = "#d8dde0", Ux = "#ffffff", Wx = "#4c6272", Gx = "#ffeb3b", Vx = "#d5281b", Yx = "#aeb7bd", Zx = "#212b32", qx = "#4c6272", Jx = "#768692", Xx = "#212b32", Kx = "#ffffff", Qx = "600", eb = "#d5281b", tb = "600", nb = "#4c6272", $c = "4px", Ec = "40px", Pc = "40px", Fc = "12px", rb = "2px", ob = "4px", ab = "0px", sb = "16px", ib = "18px", lb = "24px", cb = "32px", db = "34px", ub = "32px", fb = "40px", pb = "48px", hb = "5.4ex", mb = "7.2ex", gb = "9ex", xb = "10.8ex", bb = "20ex", yb = "38ex", vb = "56ex", wb = "44px", Sb = "40px", _b = "1020px", kb = "100%", Cb = "50%", Nb = "33.333%", jb = "25%", Mb = "20%", Ib = "320px", Db = "641px", Tb = "1025px", Lb = "1280px", Ab = "960px", $b = "32px", Eb = "16px", Pb = "#d5281b", Fb = "#d5281b", Rb = "#ffffff", Bb = "#007f3b", Hb = "#007f3b", zb = "#ffffff", Ob = "#ffeb3b", Ub = "#ffeb3b", Wb = "#212b32", Gb = "#005eb8", Vb = "#005eb8", Yb = "#ffffff", Zb = "#d8dde0", qb = "#aeb7bd", Jb = "#768692", Xb = "0 4px 0 #004021", Kb = "0 4px 0 #005eb8", Qb = "0 4px 0 #6a140e", ey = "0 4px 0 #ffeb3b", ty = "none", ny = "0 2px 4px rgba(0, 0, 0, 0.1)", ry = "4px", oy = "0px", ay = "solid", sy = "0 0 0 3px #ffeb3b", iy = "0 0 0 3px #ffeb3b", ly = "none", cy = "0 1px 3px rgba(0, 0, 0, 0.12)", dy = "0 2px 6px rgba(0, 0, 0, 0.16)", uy = "0 4px 12px rgba(0, 0, 0, 0.20)", Rc = "0", Bc = "4px", Hc = "8px", zc = "16px", Oc = "24px", Uc = "32px", Wc = "40px", Gc = "48px", Vc = "56px", Yc = "64px", ma = "0", ga = "0", xa = "4px", ba = "4px", ya = "8px", va = "8px", wa = "8px", Sa = "16px", _a = "16px", ka = "24px", Ca = "24px", Na = "32px", ja = "32px", Ma = "40px", Ia = "40px", Da = "48px", Ta = "48px", La = "56px", Aa = "56px", $a = "64px", Ur = "Frutiger W01", Wr = "Arial, Helvetica, sans-serif", Gr = "sans-serif", Vr = "400", Yr = "600", Zr = "400", qr = "12px", Jr = "14px", Xr = "12pt", Kr = "14px", Qr = "16px", eo = "12pt", to = "16px", no = "19px", ro = "13pt", oo = "19px", ao = "22px", so = "15pt", io = "22px", lo = "26px", co = "17pt", uo = "27px", fo = "36px", po = "20pt", ho = "33px", mo = "48px", go = "24pt", Ea = "16px", Pa = "24px", Rt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, fy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Dg,
  AnimationDurationNormal: Tg,
  AnimationDurationSlow: Lg,
  AnimationEasingBounce: Pg,
  AnimationEasingEaseIn: Ag,
  AnimationEasingEaseInOut: Eg,
  AnimationEasingEaseOut: $g,
  BorderColorCard: sc,
  BorderColorCardHover: ic,
  BorderColorDefault: oc,
  BorderColorError: lc,
  BorderColorForm: ac,
  BorderRadiusLarge: Xg,
  BorderRadiusMedium: Jg,
  BorderRadiusNone: Zg,
  BorderRadiusSmall: qg,
  BorderWidthCardBottom: Wg,
  BorderWidthDefault: zg,
  BorderWidthFormElement: Og,
  BorderWidthFormElementError: Ug,
  BorderWidthPanel: Gg,
  BorderWidthTableCell: Yg,
  BorderWidthTableHeader: Vg,
  BreakpointDesktop: Tb,
  BreakpointLargeDesktop: Lb,
  BreakpointMobile: Ib,
  BreakpointTablet: Db,
  ButtonBorderRadius: Nx,
  ButtonBorderWidth: Cx,
  ButtonPrimaryBackgroundActive: px,
  ButtonPrimaryBackgroundDefault: ux,
  ButtonPrimaryBackgroundDisabled: hx,
  ButtonPrimaryBackgroundHover: fx,
  ButtonPrimaryBorderDefault: xx,
  ButtonPrimaryBorderFocus: bx,
  ButtonPrimaryTextDefault: mx,
  ButtonPrimaryTextDisabled: gx,
  ButtonSecondaryBackgroundActive: Sx,
  ButtonSecondaryBackgroundDefault: yx,
  ButtonSecondaryBackgroundHover: wx,
  ButtonSecondaryBackgroundSolid: vx,
  ButtonSecondaryBorderDefault: kx,
  ButtonSecondaryTextDefault: _x,
  ButtonShadowSize: jx,
  ButtonSpacingPaddingHorizontalDesktop: Dc,
  ButtonSpacingPaddingHorizontalMobile: Mc,
  ButtonSpacingPaddingVerticalDesktop: Ic,
  ButtonSpacingPaddingVerticalMobile: jc,
  ButtonTypographyWeight: Mx,
  CardBackgroundDefault: Ix,
  CardBorderBottom: Lx,
  CardBorderDefault: Dx,
  CardBorderHover: Tx,
  CardBorderWidthBottom: Fx,
  CardBorderWidthDefault: Px,
  CardShadowDefault: Rx,
  CardShadowHover: Bx,
  CardSpacingHeadingMargin: Ac,
  CardSpacingPaddingDesktop: Lc,
  CardSpacingPaddingMobile: Tc,
  CardTextDescription: $x,
  CardTextHeading: Ax,
  CardTextLink: Ex,
  ColorBorderDefault: l0,
  ColorBorderSecondary: c0,
  ColorButtonLoginActive: P0,
  ColorButtonLoginBackground: $0,
  ColorButtonLoginHover: E0,
  ColorButtonLoginShadow: F0,
  ColorButtonPrimaryActive: g0,
  ColorButtonPrimaryBackground: p0,
  ColorButtonPrimaryHover: m0,
  ColorButtonPrimaryShadow: x0,
  ColorButtonPrimaryText: h0,
  ColorButtonReverseActive: M0,
  ColorButtonReverseBackground: C0,
  ColorButtonReverseHover: j0,
  ColorButtonReverseShadow: I0,
  ColorButtonReverseText: N0,
  ColorButtonSecondaryActive: _0,
  ColorButtonSecondaryBackground: b0,
  ColorButtonSecondaryBackgroundSolid: y0,
  ColorButtonSecondaryBorder: v0,
  ColorButtonSecondaryHover: S0,
  ColorButtonSecondaryShadow: k0,
  ColorButtonSecondaryText: w0,
  ColorButtonWarningActive: L0,
  ColorButtonWarningBackground: D0,
  ColorButtonWarningHover: T0,
  ColorButtonWarningShadow: A0,
  ColorError: d0,
  ColorFocusBackground: s0,
  ColorFocusText: i0,
  ColorFormBackground: f0,
  ColorFormBorder: u0,
  ColorGrey1: Sc,
  ColorGrey2: _c,
  ColorGrey3: kc,
  ColorGrey4: Cc,
  ColorGrey5: Nc,
  ColorLinkActive: o0,
  ColorLinkDefault: n0,
  ColorLinkHover: r0,
  ColorLinkVisited: a0,
  ColorPrimaryBlack: uc,
  ColorPrimaryBlue: cc,
  ColorPrimaryDarkPink: hc,
  ColorPrimaryGreen: fc,
  ColorPrimaryPurple: pc,
  ColorPrimaryRed: mc,
  ColorPrimaryWhite: dc,
  ColorPrimaryYellow: gc,
  ColorSecondaryAquaGreen: vc,
  ColorSecondaryOrange: yc,
  ColorSecondaryPaleYellow: xc,
  ColorSecondaryPink: wc,
  ColorSecondaryWarmYellow: bc,
  ColorTextPrimary: Kg,
  ColorTextPrint: t0,
  ColorTextReverse: e0,
  ColorTextSecondary: Qg,
  ComponentBlur: sx,
  ComponentBreadcrumbChevronMarginLeft: K0,
  ComponentBreadcrumbChevronMarginRight: Q0,
  ComponentBreadcrumbPaddingTopDesktop: tx,
  ComponentBreadcrumbPaddingTopMobile: ex,
  ComponentButtonPaddingDesktopHorizontal: z0,
  ComponentButtonPaddingDesktopVertical: H0,
  ComponentButtonPaddingMobileHorizontal: B0,
  ComponentButtonPaddingMobileVertical: R0,
  ComponentButtonShadowSize: O0,
  ComponentCardHeadingMargin: q0,
  ComponentCardPaddingDesktop: Z0,
  ComponentCardPaddingMobile: Y0,
  ComponentDetails: lx,
  ComponentExpander: cx,
  ComponentFormCheckboxLabelPadding: V0,
  ComponentFormCheckboxSize: G0,
  ComponentFormInputMinHeight: U0,
  ComponentFormInputPadding: W0,
  ComponentLink: ix,
  ComponentPagination: dx,
  ComponentPanelPaddingDesktop: X0,
  ComponentPanelPaddingMobile: J0,
  ComponentSpread: ax,
  ComponentSummaryListCellPaddingHorizontal: rx,
  ComponentSummaryListCellPaddingVertical: nx,
  ComponentSummaryListRowMargin: ox,
  ElevationHigh: uy,
  ElevationLow: cy,
  ElevationMedium: dy,
  ElevationNone: ly,
  FocusOutlineOffset: oy,
  FocusOutlineStyle: ay,
  FocusOutlineWidth: ry,
  FocusShadowButton: iy,
  FocusShadowInput: sy,
  FontFamilyBase: Ur,
  FontFamilyFallback: Wr,
  FontFamilyPrint: Gr,
  FontLineHeightBase: Pa,
  FontSize14Mobile: qr,
  FontSize14Print: Xr,
  FontSize14Tablet: Jr,
  FontSize16Mobile: Kr,
  FontSize16Print: eo,
  FontSize16Tablet: Qr,
  FontSize19Mobile: to,
  FontSize19Print: ro,
  FontSize19Tablet: no,
  FontSize22Mobile: oo,
  FontSize22Print: so,
  FontSize22Tablet: ao,
  FontSize26Mobile: io,
  FontSize26Print: co,
  FontSize26Tablet: lo,
  FontSize36Mobile: uo,
  FontSize36Print: po,
  FontSize36Tablet: fo,
  FontSize48Mobile: ho,
  FontSize48Print: go,
  FontSize48Tablet: mo,
  FontSizeBase: Ea,
  FontWeightBold: Yr,
  FontWeightLight: Zr,
  FontWeightNormal: Vr,
  FormBorderRadius: ab,
  FormBorderWidthDefault: rb,
  FormBorderWidthError: ob,
  FormErrorTextDefault: eb,
  FormErrorTypographyWeight: tb,
  FormHintTextDefault: nb,
  FormInputBackgroundDefault: Hx,
  FormInputBackgroundDisabled: Ox,
  FormInputBackgroundError: Ux,
  FormInputBackgroundFocus: zx,
  FormInputBorderDefault: Wx,
  FormInputBorderDisabled: Yx,
  FormInputBorderError: Vx,
  FormInputBorderFocus: Gx,
  FormInputTextDefault: Zx,
  FormInputTextDisabled: Jx,
  FormInputTextPlaceholder: qx,
  FormLabelTextDefault: Xx,
  FormLabelTextRequired: Kx,
  FormLabelTypographyWeight: Qx,
  FormSpacingCheckboxLabelPadding: Fc,
  FormSpacingCheckboxSize: Pc,
  FormSpacingInputMinHeight: Ec,
  FormSpacingInputPadding: $c,
  GridGutter: $b,
  GridGutterHalf: Eb,
  GridPageWidth: Ab,
  HeadingsNhsukHeadingL: Bt,
  HeadingsNhsukHeadingM: Ht,
  HeadingsNhsukHeadingS: zt,
  HeadingsNhsukHeadingXl: Rt,
  HeadingsNhsukHeadingXs: Ot,
  LayoutColumnActions: Mb,
  LayoutColumnFull: kb,
  LayoutColumnHalf: Cb,
  LayoutColumnQuarter: jb,
  LayoutColumnThird: Nb,
  LayoutContainerMaxWidth: _b,
  ParagraphsBody: Ut,
  ParagraphsBodyLarge: Wt,
  ParagraphsBodySmall: Gt,
  ParagraphsLedeText: Vt,
  ParagraphsLedeTextSmall: Yt,
  ShadowButtonDefault: Xb,
  ShadowButtonFocus: ey,
  ShadowButtonSecondary: Kb,
  ShadowButtonWarning: Qb,
  ShadowCardDefault: ty,
  ShadowCardHover: ny,
  SizeButtonMinHeightDesktop: Sb,
  SizeButtonMinHeightMobile: wb,
  SizeFormControlLarge: pb,
  SizeFormControlMedium: fb,
  SizeFormControlSmall: ub,
  SizeFormInputWidth2xl: yb,
  SizeFormInputWidth3xl: vb,
  SizeFormInputWidthLg: xb,
  SizeFormInputWidthMd: gb,
  SizeFormInputWidthSm: mb,
  SizeFormInputWidthXl: bb,
  SizeFormInputWidthXs: hb,
  SizeIconExtraLarge: cb,
  SizeIconLarge: lb,
  SizeIconMedium: ib,
  SizeIconNhsDefault: db,
  SizeIconSmall: sb,
  Spacing0: Rc,
  Spacing1: Bc,
  Spacing2: Hc,
  Spacing3: zc,
  Spacing4: Oc,
  Spacing5: Uc,
  Spacing6: Wc,
  Spacing7: Gc,
  Spacing8: Vc,
  Spacing9: Yc,
  SpacingResponsive0Mobile: ma,
  SpacingResponsive0Tablet: ga,
  SpacingResponsive1Mobile: xa,
  SpacingResponsive1Tablet: ba,
  SpacingResponsive2Mobile: ya,
  SpacingResponsive2Tablet: va,
  SpacingResponsive3Mobile: wa,
  SpacingResponsive3Tablet: Sa,
  SpacingResponsive4Mobile: _a,
  SpacingResponsive4Tablet: ka,
  SpacingResponsive5Mobile: Ca,
  SpacingResponsive5Tablet: Na,
  SpacingResponsive6Mobile: ja,
  SpacingResponsive6Tablet: Ma,
  SpacingResponsive7Mobile: Ia,
  SpacingResponsive7Tablet: Da,
  SpacingResponsive8Mobile: Ta,
  SpacingResponsive8Tablet: La,
  SpacingResponsive9Mobile: Aa,
  SpacingResponsive9Tablet: $a,
  StateDisabledBackground: Zb,
  StateDisabledBorder: qb,
  StateDisabledText: Jb,
  StateErrorBackground: Pb,
  StateErrorBorder: Fb,
  StateErrorText: Rb,
  StateInfoBackground: Gb,
  StateInfoBorder: Vb,
  StateInfoText: Yb,
  StateSuccessBackground: Bb,
  StateSuccessBorder: Hb,
  StateSuccessText: zb,
  StateWarningBackground: Ob,
  StateWarningBorder: Ub,
  StateWarningText: Wb,
  TransitionButtonDefault: Fg,
  TransitionButtonShadow: Rg,
  TransitionCardHover: Hg,
  TransitionInputFocus: Bg
}, Symbol.toStringTag, { value: "Module" })), d1 = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), u1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Rt.fontFamily,
      fontWeight: Rt.fontWeight,
      fontSize: Rt.fontSize.mobile,
      lineHeight: Rt.lineHeight,
      marginTop: Rt.marginTop,
      marginBottom: Rt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), f1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Bt.fontFamily,
      fontWeight: Bt.fontWeight,
      fontSize: Bt.fontSize.mobile,
      lineHeight: Bt.lineHeight,
      marginTop: Bt.marginTop,
      marginBottom: Bt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), p1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Ht.fontFamily,
      fontWeight: Ht.fontWeight,
      fontSize: Ht.fontSize.mobile,
      lineHeight: Ht.lineHeight,
      marginTop: Ht.marginTop,
      marginBottom: Ht.marginBottom.mobile,
      ...r
    },
    children: e
  }
), h1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: zt.fontFamily,
      fontWeight: zt.fontWeight,
      fontSize: zt.fontSize.mobile,
      lineHeight: zt.lineHeight,
      marginTop: zt.marginTop,
      marginBottom: zt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), m1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Ot.fontFamily,
      fontWeight: Ot.fontWeight,
      fontSize: Ot.fontSize.mobile,
      lineHeight: Ot.lineHeight,
      marginTop: Ot.marginTop,
      marginBottom: Ot.marginBottom.mobile,
      ...r
    },
    children: e
  }
), g1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), x1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), b1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), y1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), v1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), w1 = () => Fe(() => fy, []), S1 = () => Fe(() => ({
  // Border colors
  BorderColorDefault: oc,
  BorderColorForm: ac,
  BorderColorCard: sc,
  BorderColorCardHover: ic,
  BorderColorError: lc,
  // Primary colors
  ColorPrimaryBlue: cc,
  ColorPrimaryWhite: dc,
  ColorPrimaryBlack: uc,
  ColorPrimaryGreen: fc,
  ColorPrimaryPurple: pc,
  ColorPrimaryDarkPink: hc,
  ColorPrimaryRed: mc,
  ColorPrimaryYellow: gc,
  // Secondary colors
  ColorSecondaryPaleYellow: xc,
  ColorSecondaryWarmYellow: bc,
  ColorSecondaryOrange: yc,
  ColorSecondaryAquaGreen: vc,
  ColorSecondaryPink: wc,
  // Grey scale
  ColorGrey1: Sc,
  ColorGrey2: _c,
  ColorGrey3: kc,
  ColorGrey4: Cc,
  ColorGrey5: Nc
}), []), _1 = () => Fe(() => ({
  Spacing0: Rc,
  Spacing1: Bc,
  Spacing2: Hc,
  Spacing3: zc,
  Spacing4: Oc,
  Spacing5: Uc,
  Spacing6: Wc,
  Spacing7: Gc,
  Spacing8: Vc,
  Spacing9: Yc
}), []), k1 = () => Fe(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: qr,
    Size16: Kr,
    Size19: to,
    Size22: oo,
    Size26: io,
    Size36: uo,
    Size48: ho
  },
  Tablet: {
    Size14: Jr,
    Size16: Qr,
    Size19: no,
    Size22: ao,
    Size26: lo,
    Size36: fo,
    Size48: mo
  },
  Print: {
    Size14: Xr,
    Size16: eo,
    Size19: ro,
    Size22: so,
    Size26: co,
    Size36: po,
    Size48: go
  },
  Family: {
    Base: Ur,
    Fallback: Wr,
    Print: Gr
  },
  Weight: {
    Normal: Vr,
    Bold: Yr,
    Light: Zr
  },
  Base: {
    Size: Ea,
    LineHeight: Pa
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Ur,
  FontFamilyFallback: Wr,
  FontFamilyPrint: Gr,
  FontWeightNormal: Vr,
  FontWeightBold: Yr,
  FontWeightLight: Zr,
  FontSize14Mobile: qr,
  FontSize14Tablet: Jr,
  FontSize14Print: Xr,
  FontSize16Mobile: Kr,
  FontSize16Tablet: Qr,
  FontSize16Print: eo,
  FontSize19Mobile: to,
  FontSize19Tablet: no,
  FontSize19Print: ro,
  FontSize22Mobile: oo,
  FontSize22Tablet: ao,
  FontSize22Print: so,
  FontSize26Mobile: io,
  FontSize26Tablet: lo,
  FontSize26Print: co,
  FontSize36Mobile: uo,
  FontSize36Tablet: fo,
  FontSize36Print: po,
  FontSize48Mobile: ho,
  FontSize48Tablet: mo,
  FontSize48Print: go,
  FontSizeBase: Ea,
  FontLineHeightBase: Pa
}), []), C1 = () => Fe(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ma,
    Size1: xa,
    Size2: ya,
    Size3: wa,
    Size4: _a,
    Size5: Ca,
    Size6: ja,
    Size7: Ia,
    Size8: Ta,
    Size9: Aa
  },
  Tablet: {
    Size0: ga,
    Size1: ba,
    Size2: va,
    Size3: Sa,
    Size4: ka,
    Size5: Na,
    Size6: Ma,
    Size7: Da,
    Size8: La,
    Size9: $a
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: ma,
  SpacingResponsive0Tablet: ga,
  SpacingResponsive1Mobile: xa,
  SpacingResponsive1Tablet: ba,
  SpacingResponsive2Mobile: ya,
  SpacingResponsive2Tablet: va,
  SpacingResponsive3Mobile: wa,
  SpacingResponsive3Tablet: Sa,
  SpacingResponsive4Mobile: _a,
  SpacingResponsive4Tablet: ka,
  SpacingResponsive5Mobile: Ca,
  SpacingResponsive5Tablet: Na,
  SpacingResponsive6Mobile: ja,
  SpacingResponsive6Tablet: Ma,
  SpacingResponsive7Mobile: Ia,
  SpacingResponsive7Tablet: Da,
  SpacingResponsive8Mobile: Ta,
  SpacingResponsive8Tablet: La,
  SpacingResponsive9Mobile: Aa,
  SpacingResponsive9Tablet: $a
}), []), N1 = () => Fe(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: jc,
  ButtonSpacingPaddingHorizontalMobile: Mc,
  ButtonSpacingPaddingVerticalDesktop: Ic,
  ButtonSpacingPaddingHorizontalDesktop: Dc,
  // Card spacing	
  CardSpacingPaddingMobile: Tc,
  CardSpacingPaddingDesktop: Lc,
  CardSpacingHeadingMargin: Ac,
  // Form spacing
  FormSpacingInputPadding: $c,
  FormSpacingInputMinHeight: Ec,
  FormSpacingCheckboxSize: Pc,
  FormSpacingCheckboxLabelPadding: Fc
}), []), j1 = () => Fe(() => ({
  xl: Rt,
  l: Bt,
  m: Ht,
  s: zt,
  xs: Ot
}), []), M1 = () => Fe(() => ({
  body: Ut,
  bodyLarge: Wt,
  bodySmall: Gt,
  ledeText: Vt,
  ledeTextSmall: Yt
}), []), I1 = () => Fe(() => ({
  headings: {
    xl: Rt,
    l: Bt,
    m: Ht,
    s: zt,
    xs: Ot
  },
  paragraphs: {
    body: Ut,
    bodyLarge: Wt,
    bodySmall: Gt,
    ledeText: Vt,
    ledeTextSmall: Yt
  },
  fonts: {
    family: {
      base: Ur,
      fallback: Wr,
      print: Gr
    },
    weight: {
      normal: Vr,
      bold: Yr,
      light: Zr
    },
    sizes: {
      mobile: {
        size14: qr,
        size16: Kr,
        size19: to,
        size22: oo,
        size26: io,
        size36: uo,
        size48: ho
      },
      tablet: {
        size14: Jr,
        size16: Qr,
        size19: no,
        size22: ao,
        size26: lo,
        size36: fo,
        size48: mo
      },
      print: {
        size14: Xr,
        size16: eo,
        size19: ro,
        size22: so,
        size26: co,
        size36: po,
        size48: go
      }
    }
  }
}), []);
function D1(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [o, a] = V.useState(t), s = V.useCallback(() => a("three-column"), []), i = V.useCallback(() => a((d) => d === "three-column" ? r : d), [r]), l = V.useCallback(() => a((d) => d === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: o,
    setLayout: a,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: o === "three-column"
  };
}
const Zc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, St = {
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
function T1(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Zc, ...e }, o = [];
  return r?.includes(400) && o.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${St.normal.eot}?#iefix") format("eot"),
       url("${t}${St.normal.woff2}") format("woff2"),
       url("${t}${St.normal.woff}") format("woff"),
       url("${t}${St.normal.ttf}") format("truetype");
  src: url("${t}${St.normal.eot}");
}`), r?.includes(600) && o.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${St.bold.eot}?#iefix") format("eot"),
       url("${t}${St.bold.woff2}") format("woff2"),
       url("${t}${St.bold.woff}") format("woff"),
       url("${t}${St.bold.ttf}") format("truetype");
  src: url("${t}${St.bold.eot}");
}`), o.join(`
`);
}
function L1(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Zc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${St.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${St.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${St.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${St.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((a) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = a.href, s.as = a.as, s.type = a.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const A1 = '"Frutiger W01", Arial, Helvetica, sans-serif', $1 = "Arial, Helvetica, sans-serif";
async function E1() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Hh as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  yr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  vr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  zh as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  Oh as AXIS_ZIGZAG_DEFAULT_CYCLES,
  Wh as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  Uh as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Mi as Account,
  gy as ActionLink,
  Vy as AdaptiveDataGrid,
  Dg as AnimationDurationFast,
  Tg as AnimationDurationNormal,
  Lg as AnimationDurationSlow,
  Pg as AnimationEasingBounce,
  Ag as AnimationEasingEaseIn,
  Eg as AnimationEasingEaseInOut,
  $g as AnimationEasingEaseOut,
  pl as AppointmentCard,
  t1 as AreaSeriesPrimitive,
  $p as AriaDataGrid,
  ra as AriaTabsDataGrid,
  Vy as AriaTabsDataGridAdaptive,
  si as Axis,
  Yn as BackLink,
  r1 as BandScalesProvider,
  n1 as BarSeriesPrimitive,
  sc as BorderColorCard,
  ic as BorderColorCardHover,
  oc as BorderColorDefault,
  lc as BorderColorError,
  ac as BorderColorForm,
  Xg as BorderRadiusLarge,
  Jg as BorderRadiusMedium,
  Zg as BorderRadiusNone,
  qg as BorderRadiusSmall,
  Wg as BorderWidthCardBottom,
  zg as BorderWidthDefault,
  Og as BorderWidthFormElement,
  Ug as BorderWidthFormElementError,
  Gg as BorderWidthPanel,
  Yg as BorderWidthTableCell,
  Vg as BorderWidthTableHeader,
  Iy as BrandThemeProvider,
  sl as Breadcrumb,
  wd as Breakpoint,
  Tb as BreakpointDesktop,
  Lb as BreakpointLargeDesktop,
  Ib as BreakpointMobile,
  Db as BreakpointTablet,
  xt as Button,
  Nx as ButtonBorderRadius,
  Cx as ButtonBorderWidth,
  px as ButtonPrimaryBackgroundActive,
  ux as ButtonPrimaryBackgroundDefault,
  hx as ButtonPrimaryBackgroundDisabled,
  fx as ButtonPrimaryBackgroundHover,
  xx as ButtonPrimaryBorderDefault,
  bx as ButtonPrimaryBorderFocus,
  mx as ButtonPrimaryTextDefault,
  gx as ButtonPrimaryTextDisabled,
  Sx as ButtonSecondaryBackgroundActive,
  yx as ButtonSecondaryBackgroundDefault,
  wx as ButtonSecondaryBackgroundHover,
  vx as ButtonSecondaryBackgroundSolid,
  kx as ButtonSecondaryBorderDefault,
  _x as ButtonSecondaryTextDefault,
  jx as ButtonShadowSize,
  Di as ButtonSize,
  Dc as ButtonSpacingPaddingHorizontalDesktop,
  Mc as ButtonSpacingPaddingHorizontalMobile,
  Ic as ButtonSpacingPaddingVerticalDesktop,
  jc as ButtonSpacingPaddingVerticalMobile,
  Mx as ButtonTypographyWeight,
  Ii as ButtonVariant,
  ll as Card,
  Ix as CardBackgroundDefault,
  Lx as CardBorderBottom,
  Dx as CardBorderDefault,
  Tx as CardBorderHover,
  Fx as CardBorderWidthBottom,
  Px as CardBorderWidthDefault,
  $y as CardGroup,
  Ey as CardGroupItem,
  Rx as CardShadowDefault,
  Bx as CardShadowHover,
  Ac as CardSpacingHeadingMargin,
  Lc as CardSpacingPaddingDesktop,
  Tc as CardSpacingPaddingMobile,
  $x as CardTextDescription,
  Ax as CardTextHeading,
  Ex as CardTextLink,
  Py as CareCard,
  xy as CharacterCount,
  a1 as ChartEnhancer,
  o1 as ChartNoScript,
  Rh as ChartRoot,
  ld as Checkbox,
  fd as Checkboxes,
  l0 as ColorBorderDefault,
  c0 as ColorBorderSecondary,
  P0 as ColorButtonLoginActive,
  $0 as ColorButtonLoginBackground,
  E0 as ColorButtonLoginHover,
  F0 as ColorButtonLoginShadow,
  g0 as ColorButtonPrimaryActive,
  p0 as ColorButtonPrimaryBackground,
  m0 as ColorButtonPrimaryHover,
  x0 as ColorButtonPrimaryShadow,
  h0 as ColorButtonPrimaryText,
  M0 as ColorButtonReverseActive,
  C0 as ColorButtonReverseBackground,
  j0 as ColorButtonReverseHover,
  I0 as ColorButtonReverseShadow,
  N0 as ColorButtonReverseText,
  _0 as ColorButtonSecondaryActive,
  b0 as ColorButtonSecondaryBackground,
  y0 as ColorButtonSecondaryBackgroundSolid,
  v0 as ColorButtonSecondaryBorder,
  S0 as ColorButtonSecondaryHover,
  k0 as ColorButtonSecondaryShadow,
  w0 as ColorButtonSecondaryText,
  L0 as ColorButtonWarningActive,
  D0 as ColorButtonWarningBackground,
  T0 as ColorButtonWarningHover,
  A0 as ColorButtonWarningShadow,
  d0 as ColorError,
  s0 as ColorFocusBackground,
  i0 as ColorFocusText,
  f0 as ColorFormBackground,
  u0 as ColorFormBorder,
  Sc as ColorGrey1,
  _c as ColorGrey2,
  kc as ColorGrey3,
  Cc as ColorGrey4,
  Nc as ColorGrey5,
  o0 as ColorLinkActive,
  n0 as ColorLinkDefault,
  r0 as ColorLinkHover,
  a0 as ColorLinkVisited,
  uc as ColorPrimaryBlack,
  cc as ColorPrimaryBlue,
  hc as ColorPrimaryDarkPink,
  fc as ColorPrimaryGreen,
  pc as ColorPrimaryPurple,
  mc as ColorPrimaryRed,
  dc as ColorPrimaryWhite,
  gc as ColorPrimaryYellow,
  vc as ColorSecondaryAquaGreen,
  yc as ColorSecondaryOrange,
  xc as ColorSecondaryPaleYellow,
  wc as ColorSecondaryPink,
  bc as ColorSecondaryWarmYellow,
  Kg as ColorTextPrimary,
  t0 as ColorTextPrint,
  e0 as ColorTextReverse,
  Qg as ColorTextSecondary,
  Zn as Column,
  _d as ColumnAlign,
  sx as ComponentBlur,
  K0 as ComponentBreadcrumbChevronMarginLeft,
  Q0 as ComponentBreadcrumbChevronMarginRight,
  tx as ComponentBreadcrumbPaddingTopDesktop,
  ex as ComponentBreadcrumbPaddingTopMobile,
  z0 as ComponentButtonPaddingDesktopHorizontal,
  H0 as ComponentButtonPaddingDesktopVertical,
  B0 as ComponentButtonPaddingMobileHorizontal,
  R0 as ComponentButtonPaddingMobileVertical,
  O0 as ComponentButtonShadowSize,
  q0 as ComponentCardHeadingMargin,
  Z0 as ComponentCardPaddingDesktop,
  Y0 as ComponentCardPaddingMobile,
  lx as ComponentDetails,
  cx as ComponentExpander,
  V0 as ComponentFormCheckboxLabelPadding,
  G0 as ComponentFormCheckboxSize,
  U0 as ComponentFormInputMinHeight,
  W0 as ComponentFormInputPadding,
  ix as ComponentLink,
  dx as ComponentPagination,
  X0 as ComponentPanelPaddingDesktop,
  J0 as ComponentPanelPaddingMobile,
  ax as ComponentSpread,
  rx as ComponentSummaryListCellPaddingHorizontal,
  nx as ComponentSummaryListCellPaddingVertical,
  ox as ComponentSummaryListRowMargin,
  $i as Container,
  Ay as ContentsList,
  Zc as DEFAULT_FONT_CONFIG,
  Uy as DashboardSummaryGrid,
  Ny as DateInput,
  Cp as Details,
  Np as DoDontList,
  uy as ElevationHigh,
  cy as ElevationLow,
  dy as ElevationMedium,
  ly as ElevationNone,
  ps as ErrorMessage,
  Cy as ErrorSummary,
  jp as Expander,
  St as FRUTIGER_FONT_FILES,
  Ba as Fieldset,
  Sd as Float,
  oy as FocusOutlineOffset,
  ay as FocusOutlineStyle,
  ry as FocusOutlineWidth,
  iy as FocusShadowButton,
  sy as FocusShadowInput,
  Ur as FontFamilyBase,
  Wr as FontFamilyFallback,
  Gr as FontFamilyPrint,
  Pa as FontLineHeightBase,
  qr as FontSize14Mobile,
  Xr as FontSize14Print,
  Jr as FontSize14Tablet,
  Kr as FontSize16Mobile,
  eo as FontSize16Print,
  Qr as FontSize16Tablet,
  to as FontSize19Mobile,
  ro as FontSize19Print,
  no as FontSize19Tablet,
  oo as FontSize22Mobile,
  so as FontSize22Print,
  ao as FontSize22Tablet,
  io as FontSize26Mobile,
  co as FontSize26Print,
  lo as FontSize26Tablet,
  uo as FontSize36Mobile,
  po as FontSize36Print,
  fo as FontSize36Tablet,
  ho as FontSize48Mobile,
  go as FontSize48Print,
  mo as FontSize48Tablet,
  Ea as FontSizeBase,
  Yr as FontWeightBold,
  Zr as FontWeightLight,
  Vr as FontWeightNormal,
  zi as Footer,
  ab as FormBorderRadius,
  rb as FormBorderWidthDefault,
  ob as FormBorderWidthError,
  eb as FormErrorTextDefault,
  tb as FormErrorTypographyWeight,
  nb as FormHintTextDefault,
  Hx as FormInputBackgroundDefault,
  Ox as FormInputBackgroundDisabled,
  Ux as FormInputBackgroundError,
  zx as FormInputBackgroundFocus,
  Wx as FormInputBorderDefault,
  Yx as FormInputBorderDisabled,
  Vx as FormInputBorderError,
  Gx as FormInputBorderFocus,
  Zx as FormInputTextDefault,
  Jx as FormInputTextDisabled,
  qx as FormInputTextPlaceholder,
  Xx as FormLabelTextDefault,
  Kx as FormLabelTextRequired,
  Qx as FormLabelTypographyWeight,
  Fc as FormSpacingCheckboxLabelPadding,
  Pc as FormSpacingCheckboxSize,
  Ec as FormSpacingInputMinHeight,
  $c as FormSpacingInputPadding,
  Ty as GanttChart,
  Jo as Grid,
  $b as GridGutter,
  Eb as GridGutterHalf,
  Gh as GridLines,
  Ab as GridPageWidth,
  gn as GridWidth,
  Hi as Header,
  Dy as HeaderSSR,
  Wd as HeaderSearch,
  Hi as HeaderStatic,
  Jt as Heading,
  Bt as HeadingsNhsukHeadingL,
  Ht as HeadingsNhsukHeadingM,
  zt as HeadingsNhsukHeadingS,
  Rt as HeadingsNhsukHeadingXl,
  Ot as HeadingsNhsukHeadingXs,
  Vd as Hero,
  Li as Hint,
  zy as Images,
  Fa as Input,
  Fy as InsetText,
  Ra as Label,
  Mb as LayoutColumnActions,
  kb as LayoutColumnFull,
  Cb as LayoutColumnHalf,
  jb as LayoutColumnQuarter,
  Nb as LayoutColumnThird,
  _b as LayoutContainerMaxWidth,
  e1 as Legend,
  Bh as LineScalesProvider,
  jm as LineSeriesPrimitive,
  Nd as List,
  Ei as MainWrapper,
  hl as MedicationCard,
  Dm as MetricCard,
  g1 as NHSBodyText,
  x1 as NHSBodyTextLarge,
  b1 as NHSBodyTextSmall,
  u1 as NHSHeading1,
  f1 as NHSHeading2,
  p1 as NHSHeading3,
  h1 as NHSHeading4,
  m1 as NHSHeading5,
  y1 as NHSLedeText,
  v1 as NHSLedeTextSmall,
  My as NHSThemeProvider,
  $1 as NHS_FALLBACK_FONT_STACK,
  A1 as NHS_FONT_STACK,
  Nh as NavigationSplitView,
  Zy as PageTemplate,
  Ly as Pagination,
  yp as Panel,
  Ut as ParagraphsBody,
  Wt as ParagraphsBodyLarge,
  Gt as ParagraphsBodySmall,
  Vt as ParagraphsLedeText,
  Yt as ParagraphsLedeTextSmall,
  l1 as ParallaxScene,
  fl as PatientCard,
  c1 as PatternBanner,
  Lh as ProductRoadmap,
  by as Radios,
  yy as RadiosServer,
  Vy as ResponsiveDataGrid,
  Yy as ResponsiveDataGridDemo,
  on as Row,
  s1 as SPC,
  wg as SPCChart,
  i1 as SPCMetricCard,
  Sr as Select,
  xd as SelectOption,
  Xb as ShadowButtonDefault,
  ey as ShadowButtonFocus,
  Kb as ShadowButtonSecondary,
  Qb as ShadowButtonWarning,
  ty as ShadowCardDefault,
  ny as ShadowCardHover,
  Sb as SizeButtonMinHeightDesktop,
  wb as SizeButtonMinHeightMobile,
  pb as SizeFormControlLarge,
  fb as SizeFormControlMedium,
  ub as SizeFormControlSmall,
  yb as SizeFormInputWidth2xl,
  vb as SizeFormInputWidth3xl,
  xb as SizeFormInputWidthLg,
  gb as SizeFormInputWidthMd,
  mb as SizeFormInputWidthSm,
  bb as SizeFormInputWidthXl,
  hb as SizeFormInputWidthXs,
  cb as SizeIconExtraLarge,
  lb as SizeIconLarge,
  ib as SizeIconMedium,
  db as SizeIconNhsDefault,
  sb as SizeIconSmall,
  il as SkipLink,
  Oy as SlotMatrix,
  Wy as SortStatusControl,
  Rc as Spacing0,
  Bc as Spacing1,
  Hc as Spacing2,
  zc as Spacing3,
  Oc as Spacing4,
  Uc as Spacing5,
  Wc as Spacing6,
  Gc as Spacing7,
  Vc as Spacing8,
  Yc as Spacing9,
  ma as SpacingResponsive0Mobile,
  ga as SpacingResponsive0Tablet,
  xa as SpacingResponsive1Mobile,
  ba as SpacingResponsive1Tablet,
  ya as SpacingResponsive2Mobile,
  va as SpacingResponsive2Tablet,
  wa as SpacingResponsive3Mobile,
  Sa as SpacingResponsive3Tablet,
  _a as SpacingResponsive4Mobile,
  ka as SpacingResponsive4Tablet,
  Ca as SpacingResponsive5Mobile,
  Na as SpacingResponsive5Tablet,
  ja as SpacingResponsive6Mobile,
  Ma as SpacingResponsive6Tablet,
  Ia as SpacingResponsive7Mobile,
  Da as SpacingResponsive7Tablet,
  Ta as SpacingResponsive8Mobile,
  La as SpacingResponsive8Tablet,
  Aa as SpacingResponsive9Mobile,
  $a as SpacingResponsive9Tablet,
  vy as SpacingUtilities,
  Zb as StateDisabledBackground,
  qb as StateDisabledBorder,
  Jb as StateDisabledText,
  Pb as StateErrorBackground,
  Fb as StateErrorBorder,
  Rb as StateErrorText,
  Gb as StateInfoBackground,
  Vb as StateInfoBorder,
  Yb as StateInfoText,
  Bb as StateSuccessBackground,
  Hb as StateSuccessBorder,
  zb as StateSuccessText,
  Ob as StateWarningBackground,
  Ub as StateWarningBorder,
  Wb as StateWarningText,
  Ap as SummaryCard,
  Ry as SummaryList,
  Qt as Table,
  By as Tabs,
  tt as Tag,
  Mp as TaskList,
  hd as Textarea,
  Qy as TooltipOverlay,
  Nm as TooltipProvider,
  qy as TransactionalPageTemplate,
  Fg as TransitionButtonDefault,
  Rg as TransitionButtonShadow,
  Hg as TransitionCardHover,
  Bg as TransitionInputFocus,
  Ky as VisibilityProvider,
  ml as VitalsCard,
  ky as WIDTH_FRACTIONS,
  Hy as WarningCallout,
  vl as WidthContainer,
  Sy as WidthUtilities,
  Xy as WorkflowSplitView,
  E1 as checkFrutigerLoaded,
  Ja as createGenericTabsConfig,
  Gy as createTCHTabsConfig,
  T1 as generateFrutigerFontFace,
  d1 as getResponsiveStyles,
  wy as getSpacingClass,
  _y as getWidthClass,
  L1 as preloadFrutigerFonts,
  Gp as tchDataConfig,
  Ud as useBrand,
  S1 as useColors,
  N1 as useComponentSpacing,
  j1 as useNHSHeadings,
  M1 as useNHSParagraphs,
  jy as useNHSTheme,
  I1 as useNHSTypographySystem,
  D1 as useNavigationSplitDrill,
  yh as useNavigationSplitUrlSync,
  Xa as useNhsFdpBreakpoints,
  C1 as useResponsiveSpacing,
  Jy as useResponsiveValue,
  _1 as useSpacing,
  kg as useSpc,
  w1 as useTokens,
  k1 as useTypography
};
//# sourceMappingURL=index.esm.js.map
