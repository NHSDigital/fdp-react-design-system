import * as V from "react";
import nt, { useState as Ve, useEffect as rt, useCallback as _e, useRef as qe, createElement as Pi, useMemo as ze, useContext as Fi, createContext as Ri, forwardRef as zn, useImperativeHandle as Bi, useId as Qn, useReducer as Hi, memo as id } from "react";
import { createPortal as ld } from "react-dom";
function cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var br = { exports: {} }, On = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function dd() {
  if (va) return On;
  va = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, s, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      a = {};
      for (var l in s)
        l !== "key" && (a[l] = s[l]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: o,
      key: i,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return On.Fragment = t, On.jsx = r, On.jsxs = r, On;
}
var Un = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function ud() {
  return wa || (wa = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === w ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case m:
          return "Fragment";
        case _:
          return "Profiler";
        case g:
          return "StrictMode";
        case y:
          return "Suspense";
        case S:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case x:
            return "Portal";
          case T:
            return (B.displayName || "Context") + ".Provider";
          case M:
            return (B._context.displayName || "Context") + ".Consumer";
          case k:
            var K = B.render;
            return B = B.displayName, B || (B = K.displayName || K.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case j:
            return K = B.displayName || null, K !== null ? K : e(B.type) || "Memo";
          case v:
            K = B._payload, B = B._init;
            try {
              return e(B(K));
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
        var K = !1;
      } catch {
        K = !0;
      }
      if (K) {
        K = console;
        var A = K.error, L = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return A.call(
          K,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(B);
      }
    }
    function o(B) {
      if (B === m) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === v)
        return "<...>";
      try {
        var K = e(B);
        return K ? "<" + K + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var B = $.A;
      return B === null ? null : B.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (I.call(B, "key")) {
        var K = Object.getOwnPropertyDescriptor(B, "key").get;
        if (K && K.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, K) {
      function A() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          K
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: A,
        configurable: !0
      });
    }
    function c() {
      var B = e(this.type);
      return D[B] || (D[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function d(B, K, A, L, G, U, P, Z) {
      return A = U.ref, B = {
        $$typeof: h,
        type: B,
        key: K,
        props: U,
        _owner: G
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(B, "ref", {
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
        value: P
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function u(B, K, A, L, G, U, P, Z) {
      var X = K.children;
      if (X !== void 0)
        if (L)
          if (E(X)) {
            for (L = 0; L < X.length; L++)
              f(X[L]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(X);
      if (I.call(K, "key")) {
        X = e(B);
        var q = Object.keys(K).filter(function(ue) {
          return ue !== "key";
        });
        L = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", ee[X + L] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          X,
          q,
          X
        ), ee[X + L] = !0);
      }
      if (X = null, A !== void 0 && (r(A), X = "" + A), i(K) && (r(K.key), X = "" + K.key), "key" in K) {
        A = {};
        for (var ne in K)
          ne !== "key" && (A[ne] = K[ne]);
      } else A = K;
      return X && l(
        A,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), d(
        B,
        X,
        U,
        G,
        s(),
        A,
        P,
        Z
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === h && B._store && (B._store.validated = 1);
    }
    var p = nt, h = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), T = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), $ = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, E = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var C, D = {}, H = p.react_stack_bottom_frame.bind(
      p,
      a
    )(), J = N(o(a)), ee = {};
    Un.Fragment = m, Un.jsx = function(B, K, A, L, G) {
      var U = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        B,
        K,
        A,
        !1,
        L,
        G,
        U ? Error("react-stack-top-frame") : H,
        U ? N(o(B)) : J
      );
    }, Un.jsxs = function(B, K, A, L, G) {
      var U = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        B,
        K,
        A,
        !0,
        L,
        G,
        U ? Error("react-stack-top-frame") : H,
        U ? N(o(B)) : J
      );
    };
  })()), Un;
}
var Sa;
function fd() {
  return Sa || (Sa = 1, process.env.NODE_ENV === "production" ? br.exports = dd() : br.exports = ud()), br.exports;
}
var n = fd(), Ro = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var _a;
function hd() {
  return _a || (_a = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          l && (a = s(a, o(l)));
        }
        return a;
      }
      function o(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var i = "";
        for (var l in a)
          t.call(a, l) && a[l] && (i = s(i, l));
        return i;
      }
      function s(a, i) {
        return i ? a ? a + " " + i : a + i : a;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(Ro)), Ro.exports;
}
var pd = hd();
const De = /* @__PURE__ */ cd(pd), Ab = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: o,
  ...s
}) => {
  const a = De(
    "nhsuk-action-link__link",
    o
  );
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ n.jsxs(
    "a",
    {
      className: a,
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
}, zi = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: r,
  variant: o = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const s = (a) => {
    const i = a.icon ? /* @__PURE__ */ n.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": a.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ n.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = a.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a.html } }) : a.text, c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return a.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: a.href,
        children: c
      }
    ) : a.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: a.action,
        method: a.method || "post",
        children: /* @__PURE__ */ n.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: c })
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: c });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: De(
        "nhsuk-account",
        {
          "nhsuk-account--white": o === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map(
        (a, i) => a && /* @__PURE__ */ n.jsx(
          "li",
          {
            className: De(
              "nhsuk-account__item nhsuk-header__account-item",
              a.className
            ),
            children: s(a)
          },
          i
        )
      ) })
    }
  );
};
var Oi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Oi || {}), Ui = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Ui || {});
function md(e) {
  const t = e.variant || "primary", r = e.size || "default", o = !!e.fullWidth, s = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    r !== "default" ? `nhs-aria-button--${r}` : "",
    o ? "nhs-aria-button--full-width" : "",
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
const { forwardRef: gd, useCallback: rn, useState: Bo } = V;
function xd(e, t) {
  const {
    children: r,
    variant: o = Oi.Primary,
    size: s = Ui.Default,
    fullWidth: a = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Bo(!1), [f, p] = Bo(!1), [h, x] = Bo(!1), m = md({
    variant: o,
    size: s,
    fullWidth: a,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), g = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", _ = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...h && { "data-focused": "true" },
    ...g && { "data-disabled": "true" }
  }, M = rn(
    () => !g && u(!0),
    [g]
  ), T = rn(() => u(!1), []), k = rn(
    () => !g && p(!0),
    [g]
  ), y = rn(() => {
    p(!1), u(!1);
  }, []), S = rn(() => x(!0), []), j = rn(() => x(!1), []), v = rn(
    (X) => {
      X.key === " " && ("href" in c || X.currentTarget.getAttribute("role") === "button") && (X.preventDefault(), X.currentTarget.click());
    },
    [c]
  ), b = rn(
    (X) => {
      if (l) {
        const q = X.currentTarget;
        if (q.getAttribute("data-processing") === "true") {
          X.preventDefault();
          return;
        }
        q.setAttribute("data-processing", "true"), setTimeout(() => {
          q.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in c && c.href) {
    const {
      id: X,
      style: q,
      title: ne,
      ["aria-label"]: ue,
      ["aria-describedby"]: W,
      ["aria-labelledby"]: se,
      tabIndex: ce,
      ...ye
    } = c, he = c;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: he.href,
        target: he.target,
        rel: he.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ..._,
        ...l && { "data-prevent-double-click": "true" },
        ...ye,
        onKeyDown: (Me) => {
          he.onKeyDown?.(Me), v(Me);
        },
        onClick: (Me) => {
          he.onClick?.(Me), b(Me);
        },
        onMouseDown: (Me) => {
          he.onMouseDown?.(Me), M();
        },
        onMouseUp: (Me) => {
          he.onMouseUp?.(Me), T();
        },
        onMouseEnter: (Me) => {
          he.onMouseEnter?.(Me), k();
        },
        onMouseLeave: (Me) => {
          he.onMouseLeave?.(Me), y();
        },
        onFocus: (Me) => {
          he.onFocus?.(Me), S();
        },
        onBlur: (Me) => {
          he.onBlur?.(Me), j();
        },
        "aria-disabled": he["aria-disabled"],
        ...he["aria-disabled"] === "true" && { tabIndex: -1 },
        id: X,
        style: q,
        title: ne,
        "aria-label": ue,
        "aria-describedby": W,
        "aria-labelledby": se,
        tabIndex: ce,
        children: r
      }
    );
  }
  const {
    id: w,
    style: $,
    title: I,
    ["aria-label"]: E,
    ["aria-describedby"]: N,
    ["aria-labelledby"]: C,
    tabIndex: D,
    name: H,
    value: J,
    form: ee,
    formAction: B,
    formEncType: K,
    formMethod: A,
    formNoValidate: L,
    formTarget: G,
    autoFocus: U,
    ...P
  } = c, Z = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: Z.type || "button",
      disabled: Z.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ..._,
      ...l && { "data-prevent-double-click": "true" },
      ...Z.disabled && { "aria-disabled": "true" },
      ...P,
      onKeyDown: (X) => {
        Z.onKeyDown?.(X), v(X);
      },
      onClick: (X) => {
        Z.onClick?.(X), b(X);
      },
      onMouseDown: (X) => {
        Z.onMouseDown?.(X), M();
      },
      onMouseUp: (X) => {
        Z.onMouseUp?.(X), T();
      },
      onMouseEnter: (X) => {
        Z.onMouseEnter?.(X), k();
      },
      onMouseLeave: (X) => {
        Z.onMouseLeave?.(X), y();
      },
      onFocus: (X) => {
        Z.onFocus?.(X), S();
      },
      onBlur: (X) => {
        Z.onBlur?.(X), j();
      },
      id: w,
      style: $,
      title: I,
      "aria-label": E,
      "aria-describedby": N,
      "aria-labelledby": C,
      tabIndex: D,
      name: H,
      value: J,
      form: ee,
      formAction: B,
      formEncType: K,
      formMethod: A,
      formNoValidate: L,
      formTarget: G,
      autoFocus: U,
      children: r
    }
  );
}
const wt = gd(xd);
wt.displayName = "Button";
const er = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: o,
  element: s = "a",
  onClick: a,
  ...i
}) => {
  const l = De(
    "nhsuk-back-link",
    o
  ), c = De(
    "nhsuk-back-link__link"
  ), d = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
      onClick: a,
      type: "button",
      ...i,
      children: d()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: c,
      href: r,
      ...i,
      children: d()
    }
  ) });
};
function yd(e) {
  const { color: t = "default", noBorder: r, closable: o, disabled: s, className: a } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    r ? "nhsuk-tag--no-border" : "",
    o ? "nhsuk-tag--closable" : "",
    s ? "nhsuk-tag--disabled" : "",
    a || ""
  ].filter(Boolean).join(" "), showClose: !!o, disabled: !!s };
}
const at = ({
  text: e,
  html: t,
  children: r,
  color: o = "default",
  noBorder: s = !1,
  closable: a = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...d
}) => {
  const u = yd({ color: o, noBorder: s, closable: a, disabled: l, className: c }), f = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u.classes, ...d, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    a && /* @__PURE__ */ n.jsx(
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
}, bd = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: o = !1,
  disabled: s = !1,
  value: a = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: d,
  onChange: u,
  onBlur: f,
  onFocus: p,
  attributes: h,
  ...x
}) => {
  const [m, g] = Ve(o), _ = r !== void 0, M = _ ? r : m;
  rt(() => {
    _ || g(o);
  }, [o, _]);
  const T = (v) => {
    const b = v.target.checked;
    _ || g(b), u?.(b, v);
  }, k = i ? `${e}-hint` : void 0, y = l ? `${e}-error` : void 0, S = [k, y].filter(Boolean).join(" ") || void 0, j = De(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: j, ...x, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: a,
        checked: M,
        disabled: s,
        onChange: T,
        onBlur: f,
        onFocus: p,
        "aria-describedby": S,
        ...h
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ n.jsx("div", { id: k, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: y, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
bd.displayName = "Checkbox";
function Wi(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const Ys = ({
  id: e,
  name: t,
  type: r = "text",
  value: o,
  defaultValue: s,
  placeholder: a,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: d = !1,
  describedBy: u,
  className: f,
  width: p = "full",
  inputMode: h,
  autoComplete: x,
  maxLength: m,
  minLength: g,
  pattern: _,
  step: M,
  min: T,
  max: k,
  showValueLabels: y = !1,
  showCurrentValue: S = !1,
  valueLabels: j,
  onChange: v,
  onBlur: b,
  onFocus: w,
  onKeyDown: $,
  ...I
}) => {
  const [E, N] = Ve(o || s || (r === "range" ? T || "0" : ""));
  rt(() => {
    o !== void 0 && N(o);
  }, [o]);
  const C = (G) => {
    const U = G.target;
    N(U.value), ("type" in G && G.nativeEvent || G.type === "keydown") && v?.(G);
  }, { classes: D, isRange: H } = Wi({ type: r, hasError: d, width: p, className: f }), J = o !== void 0, ee = {
    id: e,
    name: t,
    type: r,
    placeholder: a,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": u,
    inputMode: h,
    autoComplete: x,
    maxLength: m,
    minLength: g,
    pattern: _,
    step: M,
    min: T,
    max: k,
    onChange: C,
    onBlur: b,
    onFocus: w,
    onKeyDown: (G) => {
      if (H && /[0-9]/.test(G.key)) {
        const U = (E?.toString() || "") + G.key;
        G.target.value = U, C(G);
      }
      $?.(G);
    },
    ...I
  }, B = !J && s !== void 0 ? { defaultValue: s } : {}, K = J ? { value: o } : {}, A = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: D,
      ...K,
      ...B,
      "data-current-value": E,
      ...ee
    }
  ), L = H ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    y && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: j?.min || T || "0" }),
      A(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: j?.max || k || "100" })
    ] }),
    !y && A(),
    S && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      j?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: E })
    ] }) })
  ] }) : null;
  return H ? L : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: D,
      id: e,
      name: t,
      type: r,
      value: o,
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: a,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: h,
      autoComplete: x,
      maxLength: m,
      minLength: g,
      pattern: _,
      step: M,
      min: T,
      max: k,
      onChange: v,
      onBlur: b,
      onFocus: w,
      onKeyDown: $,
      ...I
    }
  );
};
function vd(e) {
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
const Vs = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: o = "m",
  children: s,
  ...a
}) => {
  const i = vd({ size: o, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...a, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function wd(e) {
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
const Zs = ({
  children: e,
  legend: t,
  className: r,
  describedBy: o,
  ...s
}) => {
  const a = wd({
    className: r,
    describedBy: o,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
    const l = t?.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return a.legendIsPageHeading ? /* @__PURE__ */ n.jsx("h1", { className: "nhsuk-fieldset__heading", children: l }) : l;
  };
  return /* @__PURE__ */ n.jsxs(
    "fieldset",
    {
      className: a.fieldsetClasses,
      "aria-describedby": a.describedBy,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: a.legendClasses, children: i() }),
        e
      ]
    }
  );
};
function Sd(e) {
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
const _d = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: o,
  isPageHeading: s = !1,
  legendSize: a = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: d = !1,
  onChange: u,
  fieldsetAttributes: f,
  attributes: p,
  ...h
}) => {
  const [x, m] = Ve(
    e.filter((v) => v.checked).map((v) => v.value)
  ), g = r || t, _ = i ? `${g}-hint` : void 0, M = l ? `${g}-error` : void 0, T = [_, M].filter(Boolean).join(" ") || void 0, k = (v, b) => {
    let w;
    b ? w = [...x, v] : w = x.filter(($) => $ !== v), m(w), u?.(w);
  }, y = () => e.map((v, b) => {
    const w = `${g}-${b + 1}`, $ = `${w}-conditional`, I = x.includes(v.value), E = v.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: w,
          name: t,
          type: "checkbox",
          value: v.value,
          checked: I,
          disabled: E,
          onChange: (N) => k(v.value, N.target.checked),
          "aria-describedby": v.hint ? `${w}-hint` : T,
          ...v.conditional && {
            "aria-controls": $,
            "aria-expanded": I ? "true" : "false"
          },
          ...v.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: w, children: v.text }),
      v.hint && /* @__PURE__ */ n.jsx("div", { id: `${w}-hint`, className: "nhsuk-checkboxes__hint", children: v.hint }),
      v.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: De("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !I
          }),
          id: $,
          children: typeof v.conditional == "object" && v.conditional !== null && "label" in v.conditional && "id" in v.conditional && "name" in v.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            v.conditional.label && /* @__PURE__ */ n.jsx(Vs, { htmlFor: v.conditional.id, children: v.conditional.label }),
            /* @__PURE__ */ n.jsx(Ys, { ...v.conditional })
          ] }) : v.conditional
        }
      )
    ] }, v.value);
  }), { classes: S, formGroupClasses: j } = Sd({ small: d, className: c, hasError: !!l });
  return /* @__PURE__ */ n.jsx("div", { className: j, ...p, ...h, children: /* @__PURE__ */ n.jsxs(
    Zs,
    {
      legend: o ? {
        text: o,
        isPageHeading: s,
        size: a
      } : void 0,
      describedBy: T,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: _, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: M, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: S, children: y() })
      ]
    }
  ) });
};
_d.displayName = "Checkboxes";
function kd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const Cd = ({
  id: e,
  name: t,
  value: r,
  defaultValue: o,
  placeholder: s,
  disabled: a = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: d,
  className: u,
  rows: f = 5,
  cols: p,
  maxLength: h,
  minLength: x,
  wrap: m = "soft",
  resize: g = "vertical",
  autoComplete: _,
  spellCheck: M,
  onChange: T,
  onBlur: k,
  onFocus: y,
  onKeyDown: S,
  ...j
}) => {
  const { classes: v, describedBy: b } = kd({ hasError: c, resize: g, className: u, describedBy: d });
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: v,
      id: e,
      name: t,
      value: r,
      defaultValue: o,
      placeholder: s,
      disabled: a,
      readOnly: i,
      required: l,
      "aria-describedby": b,
      rows: f,
      cols: p,
      maxLength: h,
      minLength: x,
      wrap: m,
      autoComplete: _,
      spellCheck: M,
      onChange: T,
      onBlur: k,
      onFocus: y,
      onKeyDown: S,
      ...j
    }
  );
};
function Nd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Gi = ({
  id: e,
  className: t,
  children: r,
  ...o
}) => {
  const s = Nd({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: s.classes, id: s.id, ...o, children: r });
}, Eb = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: o = 75,
  name: s,
  value: a,
  defaultValue: i,
  rows: l,
  className: c,
  countMessage: d,
  onCountChange: u,
  onChange: f,
  ...p
}) => {
  const h = a ?? i ?? "", [x, m] = Ve(h), [g, _] = Ve(0), [M, T] = Ve(!1), [k, y] = Ve(!1), S = _e((I) => r ? I.trim() === "" ? 0 : I.trim().split(/\s+/).length : I.length, [r]);
  rt(() => {
    const I = S(x), E = t || r || 0, N = E - I, C = Math.floor(E * (o / 100));
    _(N), T(I > E), y(I >= C || I > E), u && u(I, N);
  }, [x, t, r, o, S, u]);
  const j = (I) => {
    const E = I.target.value;
    m(E), f && f(I);
  }, v = () => {
    const I = t || r || 0, E = r ? "word" : "character", N = r ? "words" : "characters";
    if (!k)
      return `You can enter up to ${I} ${I === 1 ? E : N}`;
    if (M) {
      const C = Math.abs(g);
      return `You have ${C} ${C === 1 ? E : N} too many`;
    } else
      return `You have ${g} ${g === 1 ? E : N} remaining`;
  }, b = De(
    "nhsuk-character-count",
    c
  ), w = De(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !k,
      "nhsuk-error-message": M
    },
    d?.classes
  ), $ = De(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": M
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: b,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": o,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          Cd,
          {
            id: e,
            name: s,
            value: a !== void 0 ? x : void 0,
            defaultValue: a === void 0 ? i ?? x : void 0,
            rows: l,
            className: $,
            onChange: j,
            "aria-describedby": `${e}-info`,
            "aria-invalid": M || void 0,
            ...p
          }
        ),
        /* @__PURE__ */ n.jsx(
          Gi,
          {
            id: `${e}-info`,
            className: w,
            role: "status",
            "aria-live": "polite",
            children: v()
          }
        )
      ]
    }
  );
};
function jd(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Md = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: o,
  children: s,
  ...a
}) => {
  const i = De(
    "nhsuk-select__option",
    o
  );
  return /* @__PURE__ */ n.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...a,
      children: s
    }
  );
}, Id = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: o,
  defaultValue: s,
  disabled: a = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: c,
  className: d,
  multiple: u = !1,
  size: f,
  autoComplete: p,
  options: h,
  children: x,
  onChange: m,
  onBlur: g,
  onFocus: _,
  ...M
}) => {
  const { classes: T } = jd({ hasError: l, className: d }), k = () => h ? h.map((S, j) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: S.value,
      disabled: S.disabled,
      "data-initial-selected": S.selected || void 0,
      children: S.text
    },
    `${S.value}-${j}`
  )) : null, y = s === void 0 && o === void 0 && h ? h.find((S) => S.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: T,
      id: e,
      name: t,
      "aria-label": r,
      value: o,
      defaultValue: s !== void 0 ? s : y,
      disabled: a,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: p,
      onChange: m,
      onBlur: g,
      onFocus: _,
      ...M,
      children: x || k()
    }
  );
}, Dr = Id;
Dr.Option = Md;
function Dd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Yi(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: o,
  handleChange: s,
  handleBlur: a,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: c,
  InputComponent: d
}) {
  const {
    onChange: u,
    onBlur: f,
    onFocus: p,
    ...h
  } = e, {
    name: x,
    hasError: m = !1,
    describedBy: g,
    className: _,
    size: M = "normal",
    inline: T = !1,
    options: k,
    ...y
  } = h, { classes: S, describedBy: j } = Dd({ hasError: m, size: M, inline: T, className: _, describedBy: g });
  return /* @__PURE__ */ n.jsx(Zs, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: S,
      ...y,
      ...o ? { "data-nhs-behaviour": "radios" } : {},
      children: k.map((v, b) => {
        const w = `${x}-${b}`, $ = v.conditional ? `${w}-conditional` : void 0, I = r === v.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: w,
              name: x,
              type: "radio",
              value: v.value,
              disabled: v.disabled,
              ...t === "client" ? {
                checked: I,
                onChange: s,
                onBlur: a,
                onFocus: i,
                onKeyDown: l,
                ref: (E) => {
                  E && c && (c.current[b] = E);
                }
              } : {
                defaultChecked: I,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": j
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: w, children: v.text }),
          v.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: v.hint }),
          v.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: De("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !I
              }),
              id: $,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof v.conditional == "object" && v.conditional !== null && "label" in v.conditional && "id" in v.conditional && "name" in v.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                v.conditional.label && /* @__PURE__ */ n.jsx(
                  Vs,
                  {
                    htmlFor: v.conditional.id,
                    children: v.conditional.label
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  d,
                  {
                    ...v.conditional
                  }
                )
              ] }) : v.conditional
            }
          )
        ] }, v.value);
      })
    }
  ) });
}
const Pb = ({ value: e, defaultValue: t, onChange: r, onBlur: o, onFocus: s, ...a }) => {
  const [i, l] = Ve(e || t || ""), c = qe([]), d = qe(i), u = (h) => {
    const x = h.target.value;
    x !== d.current && (d.current = x, l(x), r?.(h));
  }, f = (h) => {
    s?.(h);
  }, p = _e((h) => {
    const { key: x } = h;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(x)) return;
    h.preventDefault();
    const m = c.current.filter((T) => T && !T.disabled), g = m.indexOf(h.currentTarget);
    if (g === -1) return;
    let _ = g;
    ["ArrowDown", "ArrowRight"].includes(x) ? _ = (g + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(x) && (_ = (g - 1 + m.length) % m.length);
    const M = m[_];
    M && (M.focus(), M.checked || M.click());
  }, []);
  return Yi(
    { value: e, defaultValue: t, onChange: r, onBlur: o, onFocus: s, ...a },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: o,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: p,
      itemsRef: c,
      InputComponent: Ys
    }
  );
};
function Td(e) {
  const {
    id: t,
    name: r,
    type: o = "text",
    value: s,
    defaultValue: a,
    placeholder: i,
    disabled: l = !1,
    readOnly: c = !1,
    required: d = !1,
    hasError: u = !1,
    describedBy: f,
    className: p,
    width: h = "full",
    inputMode: x,
    autoComplete: m,
    maxLength: g,
    minLength: _,
    pattern: M,
    step: T,
    min: k,
    max: y,
    showValueLabels: S = !1,
    showCurrentValue: j = !1,
    valueLabels: v,
    // Strip interactive handlers in server variant
    onChange: b,
    onBlur: w,
    onFocus: $,
    onKeyDown: I,
    ...E
  } = e, { classes: N, isRange: C } = Wi({
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
    readOnly: c,
    required: d,
    "aria-describedby": f,
    inputMode: x,
    autoComplete: m,
    maxLength: g,
    minLength: _,
    pattern: M,
    step: T,
    min: k,
    max: y,
    ...E
  };
  if (C) {
    const H = s ?? a ?? (typeof k < "u" ? String(k) : "0"), J = /* @__PURE__ */ n.jsx(
      "input",
      {
        className: N,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && a !== void 0 ? { defaultValue: a } : {},
        "data-current-value": H,
        ...D
      }
    );
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      S ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: v?.min || k || "0" }),
        J,
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: v?.max || y || "100" })
      ] }) : J,
      j && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        v?.current || "Current value:",
        " ",
        /* @__PURE__ */ n.jsx("strong", { children: H })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ n.jsx(
    "input",
    {
      className: N,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && a !== void 0 ? { defaultValue: a } : {},
      ...D
    }
  );
}
const Fb = ({ value: e, defaultValue: t, ...r }) => {
  const o = e || t || "";
  return Yi(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: o,
      enableBehaviourAttr: !0,
      InputComponent: Td
    }
  );
};
var yn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(yn || {}), Ld = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Ld || {}), $d = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))($d || {}), Ad = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Ad || {});
const Vi = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: o,
  style: s,
  ...a
}) => {
  const i = De(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = o ? { maxWidth: o, ...s || {} } : s;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...a, children: e });
}, an = ({
  children: e,
  className: t,
  style: r,
  align: o,
  rowGap: s,
  ...a
}) => {
  const i = De(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    o ? `nhsuk-grid-row-align-${o}` : void 0,
    t
  );
  return /* @__PURE__ */ n.jsx("div", { className: i, style: r, ...a, children: e });
}, tr = ({
  children: e,
  width: t = yn.Full,
  mobileWidth: r,
  tabletWidth: o,
  desktopWidth: s,
  start: a,
  className: i,
  forceWidth: l = !1,
  style: c,
  align: d,
  ...u
}) => {
  const f = De(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${r}-mobile`]: !!r,
      [`nhsuk-u-${o}-tablet`]: !!o,
      [`nhsuk-u-${s}-desktop`]: !!s,
      // Grid positioning
      [`nhsuk-grid-column-start-${a}`]: a && a >= 1 && a <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: f, style: c, ...u, children: e });
}, os = ({
  children: e,
  className: t,
  style: r,
  rowGap: o = 8,
  ...s
}) => {
  const a = nt.Children.toArray(e), i = a[0], l = nt.isValidElement(i) && (i.type === an || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof o == "number" ? `${o}px` : o;
  let d = e;
  if (l)
    d = a.map((u, f) => {
      if (!nt.isValidElement(u)) return u;
      const p = u, h = p.props || {}, x = typeof h.className == "string" ? h.className : "";
      if (!(p.type === an || x.includes("nhsuk-grid-row"))) return u;
      const g = h.rowGap, _ = g !== void 0 ? typeof g == "number" ? `${g}px` : g : c, M = f === 0 ? void 0 : _;
      if (!M) return u;
      const T = { ...h.style || {}, marginTop: M };
      return nt.cloneElement(p, { style: T });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ n.jsx(an, { style: u, children: e });
  }
  return /* @__PURE__ */ n.jsx(Vi, { className: t, style: r, ...s, children: d });
}, Ed = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: o = !1,
  className: s,
  role: a,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = De(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": o,
      [`nhsuk-list--${r}`]: r !== "medium"
    },
    s
  );
  return /* @__PURE__ */ n.jsx(c, { className: d, role: a, ...l, children: e });
}, Pd = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = De("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: o, ...r, children: e });
}, Fd = Ed;
Fd.Item = Pd;
const Rb = ({
  debug: e = !1,
  className: t,
  children: r,
  ...o
}) => {
  if (!r)
    return null;
  const s = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: r });
}, Bb = {
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
}, Hb = ({
  debug: e = !1,
  className: t,
  children: r,
  ...o
}) => {
  if (!r)
    return null;
  const s = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: r });
}, zb = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Ob = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Zi = ({
  as: e = "main",
  size: t = "default",
  className: r,
  children: o,
  ...s
}) => {
  const a = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(e, { className: a, ...s, children: o });
};
function Rd(e) {
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
function Bd(e) {
  const t = e.level ?? Rd(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), o = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: o };
}
const Bt = ({
  level: e,
  className: t,
  text: r,
  html: o,
  children: s,
  size: a,
  marginBottom: i,
  ...l
}) => {
  const c = Bd({ level: e, size: a, className: t, marginBottom: i }), d = s || (o ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o } }) : r);
  return Pi(
    c.tag,
    { className: c.classes, style: c.style, ...l },
    d
  );
};
function Hd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const ka = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: o, ...s }) => {
  const a = Hd({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: a.classes, id: a.id, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      a.visuallyHiddenText,
      " "
    ] }),
    o
  ] });
}, Ub = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: o,
  errorList: s,
  className: a,
  children: i,
  ...l
}) => {
  const c = qe(null);
  rt(() => {
    c.current && c.current.focus();
  }, []);
  const d = De(
    "nhsuk-error-summary",
    a
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => o ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o } }) : r, p = (h) => {
    const x = h.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
    return h.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: h.href,
        ...h.attributes,
        children: x
      }
    ) : x;
  };
  return /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || o) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((h, x) => /* @__PURE__ */ n.jsx("li", { children: p(h) }, x)) })
        ] })
      ]
    }
  );
}, Wb = ({
  id: e,
  className: t,
  items: r,
  namePrefix: o,
  values: s = {},
  fieldset: a,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...d
}) => {
  const [u, f] = Ve(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [p, h] = Ve({}), x = (C) => C % 4 === 0 && C % 100 !== 0 || C % 400 === 0, m = (C, D) => {
    const H = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return C === 2 && x(D) ? 29 : H[C - 1];
  }, g = (C, D, H) => {
    if (!C) return;
    if (!/^\d+$/.test(C)) return "Day must be a number";
    const J = parseInt(C, 10);
    if (J < 1 || J > 31) return "Day must be between 1 and 31";
    if (D && H) {
      const ee = parseInt(D, 10), B = parseInt(H, 10);
      if (!isNaN(ee) && !isNaN(B) && ee >= 1 && ee <= 12) {
        const K = m(ee, B);
        if (J > K)
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
          ][ee - 1]} ${B} only has ${K} days`;
      }
    }
  }, _ = (C) => {
    if (!C) return;
    if (!/^\d+$/.test(C)) return "Month must be a number";
    const D = parseInt(C, 10);
    if (D < 1 || D > 12) return "Month must be between 1 and 12";
  }, M = (C) => {
    if (!C) return;
    if (!/^\d+$/.test(C)) return "Year must be a number";
    const D = parseInt(C, 10), H = (/* @__PURE__ */ new Date()).getFullYear();
    if (D < 1900 || D > H + 10)
      return `Year must be between 1900 and ${H + 10}`;
  }, T = (C, D, H) => {
    if (!C || !D || !H) return;
    const J = parseInt(C, 10), ee = parseInt(D, 10), B = parseInt(H, 10);
    if (isNaN(J) || isNaN(ee) || isNaN(B) || ee < 1 || ee > 12 || B < 1900) return;
    const K = m(ee, B);
    J < 1 || J > K;
  }, k = _e(
    (C, D) => {
      const H = {
        ...u,
        [C]: D
      };
      f(H), c && c(H);
    },
    [u, c]
  ), y = _e(
    (C) => {
      const D = u[C];
      let H;
      if (C === "day")
        H = g(
          D,
          u.month,
          u.year
        );
      else if (C === "month") {
        if (H = _(D), !H && u.day) {
          const J = g(
            u.day,
            D,
            u.year
          );
          h((ee) => ({
            ...ee,
            day: J
          }));
        }
      } else if (C === "year" && (H = M(D), !H && u.day && u.month)) {
        const J = g(
          u.day,
          u.month,
          D
        );
        h((ee) => ({
          ...ee,
          day: J
        }));
      }
      if (h((J) => ({
        ...J,
        [C]: H
      })), u.day && u.month && u.year) {
        const J = T(
          C === "day" ? D : u.day,
          C === "month" ? D : u.month,
          C === "year" ? D : u.year
        );
        J && h((ee) => ({
          ...ee,
          day: J
        }));
      }
    },
    [u, g, _, M, T]
  ), S = ze(
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
  ), j = r || S;
  let v = a?.describedBy || "";
  const b = i ? `${e}-hint` : "", w = l ? `${e}-error` : "";
  b && (v = v ? `${v} ${b}` : b), w && (v = v ? `${v} ${w}` : w);
  const $ = Object.values(p).some((C) => C), I = De("nhsuk-form-group", {
    "nhsuk-form-group--error": l || $
  }), E = De("nhsuk-date-input", t), N = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(Gi, { id: b, className: i.classes, children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text }),
    l && /* @__PURE__ */ n.jsx(ka, { id: w, className: l.classes, children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text }),
    Object.entries(p).map(
      ([C, D]) => D ? /* @__PURE__ */ n.jsxs(
        ka,
        {
          id: `${e}-${C}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            D
          ]
        },
        `${C}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: E,
        id: e,
        "data-testid": "date-input",
        ...d,
        children: j.map((C) => {
          const D = C.id || `${e}-${C.name}`, H = o ? `${o}[${C.name}]` : C.name, J = C.label || C.name.charAt(0).toUpperCase() + C.name.slice(1), ee = p[C.name], B = u[C.name] || "";
          let K = v;
          if (ee) {
            const A = `${e}-${C.name}-error`;
            K = K ? `${K} ${A}` : A;
          }
          return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
            /* @__PURE__ */ n.jsx(Vs, { htmlFor: D, className: "nhsuk-date-input__label", children: J }),
            /* @__PURE__ */ n.jsx(
              Ys,
              {
                id: D,
                name: H,
                value: B,
                className: De("nhsuk-date-input__input", C.classes, {
                  "nhsuk-input--error": ee
                }),
                inputMode: C.inputmode,
                autoComplete: C.autocomplete,
                pattern: C.pattern,
                "aria-describedby": K || void 0,
                hasError: !!ee,
                onChange: (A) => k(C.name, A.target.value),
                onBlur: () => y(C.name)
              }
            )
          ] }, C.name);
        })
      }
    )
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: I, children: a ? /* @__PURE__ */ n.jsx(
    Zs,
    {
      className: a.classes,
      legend: a.legend ? { text: a.legend } : void 0,
      describedBy: v || void 0,
      children: N()
    }
  ) : N() });
}, qi = {
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
}, Ji = Ri(qi), zd = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...qi, ...t };
  return /* @__PURE__ */ n.jsx(Ji.Provider, { value: r, children: e });
}, Gb = () => {
  const e = Fi(Ji);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Od() {
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
function Ud() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Od(), document.head.appendChild(e);
}
const Yb = ({ children: e, theme: t }) => (rt(() => {
  Ud();
}, []), /* @__PURE__ */ n.jsx(zd, { theme: t, children: e })), Wd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", Gd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Yd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Vd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Zd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", qd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Jd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var qs = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(qs || {}), Js = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Js || {});
const Xd = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Wd,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Zd,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Vd,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: Gd,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Yd,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: qd,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Jd,
      ariaLabel: "FDP"
    }
  }
};
function Xi(e, t = "full") {
  return Xd[e]?.[t];
}
function Kd(e, {
  variant: t,
  isClient: r,
  menuOpen: o = !1,
  showMoreButton: s = !1,
  visibleItems: a,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: c,
  navListRef: d,
  searchNode: u,
  brand: f
}) {
  const {
    className: p,
    logo: h = {},
    service: x = {},
    serviceName: m,
    organisation: g,
    search: _,
    account: M,
    navigation: T,
    containerClasses: k,
    variant: y = "default",
    attributes: S = {},
    maxVisibleItems: j,
    // deprecated (ignored)
    responsiveNavigation: v = !0,
    logoVariant: b = Js.Full,
    // Prevent leaking to DOM when ...rest is spread
    logoVariant: w,
    ...$
  } = e, I = {
    ...x,
    text: x?.text ?? m
  };
  "maxVisibleItems" in $ && delete $.maxVisibleItems;
  const E = I.href && !h.href || I.href && I.href === h.href, N = E ? I.href : h.href, C = De(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": y === "organisation" || g,
      "nhsuk-header--white": y === "white"
    },
    p
  ), D = De(
    "nhsuk-header__container",
    k
  ), H = De(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": T?.white,
      "nhsuk-header__navigation--justified": T?.justified
    },
    T?.className
  ), ee = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), B = () => /* @__PURE__ */ n.jsxs(
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
  ), K = () => {
    if (h.src)
      return /* @__PURE__ */ n.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: h.src,
          width: "280",
          alt: h.ariaLabel || (ee === "fdp" ? "FDP" : "NHS")
        }
      );
    if (ee === "fdp") {
      const P = Xi(qs.FDP, b);
      if (P?.src)
        return /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: P.src,
            "data-logo-variant": b,
            width: "280",
            alt: P.ariaLabel || "FDP"
          }
        );
    }
    return B();
  }, A = () => g ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, L = (P, Z) => P ? Z ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: Z, children: P }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: P }) : null, G = (P) => P.active || P.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: P.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: P.html } }) : P.text }) : P.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: P.html } }) : P.text, U = () => /* @__PURE__ */ n.jsx(
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
  return T?.items, /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: C,
      role: "banner",
      "data-module": "nhsuk-header",
      ...S,
      ...$,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: D, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            N ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: N, children: [
              K(),
              A(),
              E && L(I.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              K(),
              A(),
              E && L(I.text)
            ] }),
            I.text && !E && L(I.text, I.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ n.jsx(
            zi,
            {
              ...M,
              variant: y === "white" ? "white" : "default"
            }
          )
        ] }),
        T && T.items && T.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: H,
            "aria-label": T.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: De(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  k
                ),
                ref: c,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      (T?.items || []).map((P, Z) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: De(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": P.active || P.current,
                              "nhsuk-header__navigation-item--hidden": s && a !== void 0 && Z >= (a ?? 0)
                            },
                            P.className
                          ),
                          ...P.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: P.href,
                              ...P.active || P.current ? { "aria-current": P.current ? "page" : "true" } : {},
                              children: G(P)
                            }
                          )
                        },
                        Z
                      )),
                      s && a !== void 0 && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs(
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
                            U()
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
        r && T && T.items && T.items.length > 0 && o && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: T.items.slice(a ?? 0).map((P, Z) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: De("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": P.active || P.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: P.href,
                    ...P.active || P.current ? { "aria-current": P.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: G(P)
                  }
                )
              },
              `overflow-${(a ?? 0) + Z}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const ss = Ri(void 0);
function Vb({ brand: e = "nhs", scope: t = "document", children: r }) {
  const [o, s] = Ve(e);
  rt(() => {
    s(e);
  }, [e]), rt(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", o), () => {
      };
  }, [o, t]);
  const a = ze(() => ({ brand: o, setBrand: s }), [o]);
  return t === "local" ? /* @__PURE__ */ n.jsx(ss.Provider, { value: a, children: /* @__PURE__ */ n.jsx("div", { "data-brand": o, children: r }) }) : /* @__PURE__ */ n.jsx(ss.Provider, { value: a, children: r });
}
function Qd() {
  const e = Fi(ss);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const eu = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: o = "q",
  value: s,
  placeholder: a = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: d = !1,
  callbacks: u = {},
  isLoading: f = !1,
  showResults: p = !1,
  results: h = [],
  formAttributes: x = {},
  inputAttributes: m = {},
  buttonAttributes: g = {},
  preventDefaultSubmit: _ = !1,
  debounceMs: M = 300,
  minQueryLength: T = 1
}) => {
  const [k, y] = Ve(""), [S, j] = Ve(!1), v = qe(void 0), b = qe(null), w = qe(null), $ = e === "controlled" && s !== void 0, I = $ ? s : k, E = _e(
    (L) => {
      v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        u.onChange && L.length >= T && u.onChange(L);
      }, M);
    },
    [u.onChange, M, T]
  ), N = _e(
    (L) => {
      const G = L.target.value;
      $ || y(G), e !== "form" && E(G);
    },
    [$, e, E]
  ), C = _e(
    (L) => {
      const G = I.trim(), U = {
        query: G,
        timestamp: Date.now(),
        formData: new FormData(L.currentTarget)
      };
      e === "controlled" || e === "hybrid" && _ ? (L.preventDefault(), u.onSearch && G.length >= T && u.onSearch(U)) : e === "hybrid" && u.onSearch && G.length >= T && u.onSearch(U);
    },
    [
      e,
      I,
      u.onSearch,
      _,
      T
    ]
  ), D = _e(() => {
    j(!0), u.onFocus?.();
  }, [u.onFocus]), H = _e(() => {
    j(!1), u.onBlur?.();
  }, [u.onBlur]), J = _e(() => {
    $ || y(""), u.onClear?.(), w.current?.focus();
  }, [$, u.onClear]);
  rt(() => () => {
    v.current && clearTimeout(v.current);
  }, []);
  const ee = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: De("nhsuk-icon nhsuk-icon__search", {
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
  ), K = () => !I || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: J,
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
  ), A = () => !p || !h.length || !S ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: h.map((L) => /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: L.href ? /* @__PURE__ */ n.jsxs(
        "a",
        {
          href: L.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: L.title }),
            L.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: L.description })
          ]
        }
      ) : /* @__PURE__ */ n.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: L.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: L.title }),
            L.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: L.description })
          ]
        }
      )
    },
    L.id
  )) });
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: De("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": S,
        "nhsuk-header__search--has-results": p && h.length > 0
      }),
      children: [
        /* @__PURE__ */ n.jsxs(
          "form",
          {
            ref: b,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? r : void 0,
            role: "search",
            onSubmit: C,
            ...x,
            children: [
              /* @__PURE__ */ n.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ n.jsx(
                  "input",
                  {
                    ref: w,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? o : void 0,
                    type: "search",
                    placeholder: a,
                    autoComplete: "off",
                    value: I,
                    onChange: N,
                    onFocus: D,
                    onBlur: H,
                    disabled: d || f,
                    ...p && h.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...m
                  }
                ),
                K()
              ] }),
              /* @__PURE__ */ n.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && I.length < T,
                  ...g,
                  children: [
                    f ? B() : ee(),
                    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        A()
      ]
    }
  );
}, Ki = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: o,
  search: s,
  account: a,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, p] = Ve(!1), [h, x] = Ve(!1), [m, g] = Ve(i?.items?.length || 0), [_, M] = Ve(!1), [T, k] = Ve(!1), y = qe(null), S = qe(null), j = qe(!1);
  rt(() => {
    typeof window > "u" || k(!0);
  }, []), rt(() => {
    if (typeof document > "u") return;
    const I = (E) => {
      E.key === "Escape" && f && p(!1);
    };
    if (f)
      return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [f]);
  const v = qe(null), b = _e(() => {
    if (!T || !i?.items || i.items.length === 0 || j.current) return;
    const I = y.current, E = S.current;
    if (!I || !E) return;
    j.current = !0, I.classList.add("nhsuk-header__navigation-container--measuring");
    const N = I.clientWidth, C = Array.from(E.children);
    if (!C.length) {
      I.classList.remove("nhsuk-header__navigation-container--measuring"), j.current = !1;
      return;
    }
    if (v.current == null) {
      const U = document.createElement("button");
      U.type = "button", U.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", U.style.position = "absolute", U.style.visibility = "hidden", U.style.pointerEvents = "none", U.innerHTML = "<span>More</span>", I.appendChild(U), v.current = U.getBoundingClientRect().width || 104, I.removeChild(U);
    }
    const D = v.current + 16;
    let H = 0, J = 0;
    const ee = window.getComputedStyle(I), B = parseFloat(ee.paddingLeft) || 0, K = parseFloat(ee.paddingRight) || 0;
    let A = B + K;
    for (const U of C) {
      const P = U.getBoundingClientRect().width;
      if (H + P + D + A > N) break;
      H += P, J += 1;
    }
    const L = J < i.items.length, G = L ? J : i.items.length;
    x((U) => U === L ? U : L), g((U) => U === G ? U : G), I.classList.remove("nhsuk-header__navigation-container--measuring"), j.current = !1;
  }, [T, i?.items]);
  rt(() => {
    if (!T) return;
    const I = y.current;
    if (!I) return;
    let E = null;
    const N = () => {
      E == null && (E = window.requestAnimationFrame(() => {
        E = null, b();
      }));
    };
    b();
    const C = new ResizeObserver(() => N());
    return C.observe(I), S.current && C.observe(S.current), () => {
      E != null && window.cancelAnimationFrame(E), C.disconnect();
    };
  }, [T, b]), rt(() => {
    T && b();
  }, [i?.items?.length, T, b]);
  const w = (I) => {
    I && (I.preventDefault(), I.stopPropagation());
    const E = !f;
    p(E), M(E);
  }, $ = (() => {
    try {
      return Qd();
    } catch {
      return;
    }
  })();
  return Kd(
    {
      className: e,
      logo: t,
      service: r,
      organisation: o,
      search: s,
      account: a,
      navigation: i,
      containerClasses: l,
      variant: c,
      attributes: d,
      ...u
    },
    {
      variant: "client",
      isClient: T,
      menuOpen: f,
      showMoreButton: h,
      visibleItems: m,
      dropdownVisible: _,
      toggleMenu: w,
      navContainerRef: y,
      navListRef: S,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ n.jsx(eu, { ...s }) : null,
      brand: $?.brand
    }
  );
};
function tu(e, { isClient: t, brand: r }) {
  const {
    className: o,
    logo: s = {},
    service: a = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: c,
    navigation: d,
    containerClasses: u,
    variant: f = "default",
    attributes: p = {},
    maxVisibleItems: h,
    // deprecated (ignored)
    responsiveNavigation: x = !0,
    // Consume logoVariant for server-side logo selection while preventing DOM leakage via ...rest
    logoVariant: m = Js.Full,
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const _ = {
    ...a,
    text: a?.text ?? i
  }, M = _.href && !s.href || _.href && _.href === s.href, T = M ? _.href : s.href, k = De(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    o
  ), y = De(
    "nhsuk-header__container",
    u
  ), S = De(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), j = r === "fdp" ? "fdp" : "nhs", v = () => /* @__PURE__ */ n.jsxs(
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
  ), b = () => {
    if (s.src)
      return /* @__PURE__ */ n.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: s.src,
          width: "280",
          alt: s.ariaLabel || (j === "fdp" ? "FDP" : "NHS")
        }
      );
    if (j === "fdp") {
      const N = Xi(qs.FDP, m);
      if (N?.src)
        return /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: N.src,
            "data-logo-variant": m,
            width: "280",
            alt: N.ariaLabel || "FDP"
          }
        );
    }
    return v();
  }, w = () => l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, $ = (N, C) => N ? C ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: C, children: N }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: N }) : null, I = (N) => N.active || N.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: N.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text }) : N.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text;
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: k,
      role: "banner",
      "data-module": "nhsuk-header",
      ...p,
      ...g,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: y, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            T ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: T, children: [
              b(),
              w(),
              M && $(_.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              b(),
              w(),
              M && $(_.text)
            ] }),
            _.text && !M && $(_.text, _.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            zi,
            {
              ...c,
              variant: f === "white" ? "white" : "default"
            }
          )
        ] }),
        d && d.items && d.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: S,
            "aria-label": d.ariaLabel || "Menu",
            "data-ssr-hydrating": "true",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: De(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--ssr": !t
                  },
                  u
                ),
                children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-list", children: d.items.map((N, C) => /* @__PURE__ */ n.jsx(
                  "li",
                  {
                    className: De(
                      "nhsuk-header__navigation-item",
                      {
                        "nhsuk-header__navigation-item--current": N.active || N.current
                      },
                      N.className
                    ),
                    ...N.attributes || {},
                    children: /* @__PURE__ */ n.jsx(
                      "a",
                      {
                        className: "nhsuk-header__navigation-link",
                        href: N.href,
                        ...N.active || N.current ? { "aria-current": N.current ? "page" : "true" } : {},
                        children: I(N)
                      }
                    )
                  },
                  C
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
const Zb = (e) => {
  const t = e.attributes?.["data-brand"];
  return tu(e, {
    isClient: !1,
    brand: t === "fdp" || t === "nhs" ? t : void 0
  });
}, nu = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: o,
  html: s,
  imageURL: a,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...d
}) => {
  const u = [
    "nhsuk-hero",
    a && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    a && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    a ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    r,
    !c && !o && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), h = c || e || o || s, x = () => {
    if (!e) return null;
    const m = { className: p };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...m, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...m, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...m, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...m, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...m, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...m, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...m, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: u,
      style: a ? { backgroundImage: `url('${a}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        a && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: h && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          x(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: o }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !a && h && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          x(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: o }) : null)
        ] }) }) }) })
      ]
    }
  );
};
nu.displayName = "Hero";
const Qi = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: o,
  metaLinks: s,
  copyright: a = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const f = (h, x = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: De("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": x
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
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: De("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: De("nhsuk-footer", e), style: d, children: p ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((h) => f(h)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((h) => f(h)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: o.map((h) => f(h)) }),
              s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((h) => f(h)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((h) => f(h, !0)),
              (r || []).map((h) => f(h, !0)),
              (o || []).map((h) => f(h, !0)),
              (s || []).map((h) => f(h, !0))
            ] })
          ) }),
          !p && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: a }) })
        ]
      }
    ),
    p && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: a }) }) })
  ] }) });
};
function Nr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ru(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Xs(e) {
  let t, r, o;
  e.length !== 2 ? (t = Nr, r = (l, c) => Nr(e(l), c), o = (l, c) => e(l) - c) : (t = e === Nr || e === ru ? e : ou, r = e, o = e);
  function s(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        r(l[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function a(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        r(l[f], c) <= 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function i(l, c, d = 0, u = l.length) {
    const f = s(l, c, d, u - 1);
    return f > d && o(l[f - 1], c) > -o(l[f], c) ? f - 1 : f;
  }
  return { left: s, center: i, right: a };
}
function ou() {
  return 0;
}
function su(e) {
  return e === null ? NaN : +e;
}
const au = Xs(Nr), iu = au.right;
Xs(su).center;
function el(e, t) {
  let r, o;
  if (t === void 0)
    for (const s of e)
      s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  else {
    let s = -1;
    for (let a of e)
      (a = t(a, ++s, e)) != null && (r === void 0 ? a >= a && (r = o = a) : (r > a && (r = a), o < a && (o = a)));
  }
  return [r, o];
}
class Ca extends Map {
  constructor(t, r = du) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [o, s] of t) this.set(o, s);
  }
  get(t) {
    return super.get(Na(this, t));
  }
  has(t) {
    return super.has(Na(this, t));
  }
  set(t, r) {
    return super.set(lu(this, t), r);
  }
  delete(t) {
    return super.delete(cu(this, t));
  }
}
function Na({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) ? e.get(o) : r;
}
function lu({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) ? e.get(o) : (e.set(o, r), r);
}
function cu({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) && (r = e.get(o), e.delete(o)), r;
}
function du(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const uu = Math.sqrt(50), fu = Math.sqrt(10), hu = Math.sqrt(2);
function Tr(e, t, r) {
  const o = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(o)), a = o / Math.pow(10, s), i = a >= uu ? 10 : a >= fu ? 5 : a >= hu ? 2 : 1;
  let l, c, d;
  return s < 0 ? (d = Math.pow(10, -s) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, s) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= r && r < 2 ? Tr(e, t, r * 2) : [l, c, d];
}
function pu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const o = t < e, [s, a, i] = o ? Tr(t, e, r) : Tr(e, t, r);
  if (!(a >= s)) return [];
  const l = a - s + 1, c = new Array(l);
  if (o)
    if (i < 0) for (let d = 0; d < l; ++d) c[d] = (a - d) / -i;
    else for (let d = 0; d < l; ++d) c[d] = (a - d) * i;
  else if (i < 0) for (let d = 0; d < l; ++d) c[d] = (s + d) / -i;
  else for (let d = 0; d < l; ++d) c[d] = (s + d) * i;
  return c;
}
function as(e, t, r) {
  return t = +t, e = +e, r = +r, Tr(e, t, r)[2];
}
function is(e, t, r) {
  t = +t, e = +e, r = +r;
  const o = t < e, s = o ? as(t, e, r) : as(e, t, r);
  return (o ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function mu(e, t, r) {
  e = +e, t = +t, r = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +r;
  for (var o = -1, s = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(s); ++o < s; )
    a[o] = e + o * r;
  return a;
}
function ko(e, t) {
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
const ja = Symbol("implicit");
function tl() {
  var e = new Ca(), t = [], r = [], o = ja;
  function s(a) {
    let i = e.get(a);
    if (i === void 0) {
      if (o !== ja) return o;
      e.set(a, i = t.push(a) - 1);
    }
    return r[i % r.length];
  }
  return s.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ca();
    for (const i of a)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(a) {
    return arguments.length ? (r = Array.from(a), s) : r.slice();
  }, s.unknown = function(a) {
    return arguments.length ? (o = a, s) : o;
  }, s.copy = function() {
    return tl(t, r).unknown(o);
  }, ko.apply(s, arguments), s;
}
function nl() {
  var e = tl().unknown(void 0), t = e.domain, r = e.range, o = 0, s = 1, a, i, l = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = s < o, x = h ? s : o, m = h ? o : s;
    a = (m - x) / Math.max(1, p - c + d * 2), l && (a = Math.floor(a)), x += (m - x - a * (p - c)) * u, i = a * (1 - c), l && (x = Math.round(x), i = Math.round(i));
    var g = mu(p).map(function(_) {
      return x + a * _;
    });
    return r(h ? g.reverse() : g);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), f()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([o, s] = p, o = +o, s = +s, f()) : [o, s];
  }, e.rangeRound = function(p) {
    return [o, s] = p, o = +o, s = +s, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return a;
  }, e.round = function(p) {
    return arguments.length ? (l = !!p, f()) : l;
  }, e.padding = function(p) {
    return arguments.length ? (c = Math.min(1, d = +p), f()) : c;
  }, e.paddingInner = function(p) {
    return arguments.length ? (c = Math.min(1, p), f()) : c;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (d = +p, f()) : d;
  }, e.align = function(p) {
    return arguments.length ? (u = Math.max(0, Math.min(1, p)), f()) : u;
  }, e.copy = function() {
    return nl(t(), [o, s]).round(l).paddingInner(c).paddingOuter(d).align(u);
  }, ko.apply(f(), arguments);
}
function Ks(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function rl(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function ur() {
}
var nr = 0.7, Lr = 1 / nr, Tn = "\\s*([+-]?\\d+)\\s*", rr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gu = /^#([0-9a-f]{3,8})$/, xu = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), yu = new RegExp(`^rgb\\(${Ft},${Ft},${Ft}\\)$`), bu = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${rr}\\)$`), vu = new RegExp(`^rgba\\(${Ft},${Ft},${Ft},${rr}\\)$`), wu = new RegExp(`^hsl\\(${rr},${Ft},${Ft}\\)$`), Su = new RegExp(`^hsla\\(${rr},${Ft},${Ft},${rr}\\)$`), Ma = {
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
Ks(ur, or, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ia,
  // Deprecated! Use color.formatHex.
  formatHex: Ia,
  formatHex8: _u,
  formatHsl: ku,
  formatRgb: Da,
  toString: Da
});
function Ia() {
  return this.rgb().formatHex();
}
function _u() {
  return this.rgb().formatHex8();
}
function ku() {
  return ol(this).formatHsl();
}
function Da() {
  return this.rgb().formatRgb();
}
function or(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = gu.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ta(t) : r === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? vr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? vr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = xu.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = yu.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = bu.exec(e)) ? vr(t[1], t[2], t[3], t[4]) : (t = vu.exec(e)) ? vr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = wu.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, 1) : (t = Su.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ma.hasOwnProperty(e) ? Ta(Ma[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function Ta(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vr(e, t, r, o) {
  return o <= 0 && (e = t = r = NaN), new Nt(e, t, r, o);
}
function Cu(e) {
  return e instanceof ur || (e = or(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function ls(e, t, r, o) {
  return arguments.length === 1 ? Cu(e) : new Nt(e, t, r, o ?? 1);
}
function Nt(e, t, r, o) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +o;
}
Ks(Nt, ls, rl(ur, {
  brighter(e) {
    return e = e == null ? Lr : Math.pow(Lr, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nr : Math.pow(nr, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(pn(this.r), pn(this.g), pn(this.b), $r(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: La,
  // Deprecated! Use color.formatHex.
  formatHex: La,
  formatHex8: Nu,
  formatRgb: $a,
  toString: $a
}));
function La() {
  return `#${hn(this.r)}${hn(this.g)}${hn(this.b)}`;
}
function Nu() {
  return `#${hn(this.r)}${hn(this.g)}${hn(this.b)}${hn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $a() {
  const e = $r(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${pn(this.r)}, ${pn(this.g)}, ${pn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $r(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function pn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function hn(e) {
  return e = pn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Aa(e, t, r, o) {
  return o <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, r, o);
}
function ol(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ur || (e = or(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, o = e.b / 255, s = Math.min(t, r, o), a = Math.max(t, r, o), i = NaN, l = a - s, c = (a + s) / 2;
  return l ? (t === a ? i = (r - o) / l + (r < o) * 6 : r === a ? i = (o - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? a + s : 2 - a - s, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Dt(i, l, c, e.opacity);
}
function ju(e, t, r, o) {
  return arguments.length === 1 ? ol(e) : new Dt(e, t, r, o ?? 1);
}
function Dt(e, t, r, o) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +o;
}
Ks(Dt, ju, rl(ur, {
  brighter(e) {
    return e = e == null ? Lr : Math.pow(Lr, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nr : Math.pow(nr, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - o;
    return new Nt(
      Ho(e >= 240 ? e - 240 : e + 120, s, o),
      Ho(e, s, o),
      Ho(e < 120 ? e + 240 : e - 120, s, o),
      this.opacity
    );
  },
  clamp() {
    return new Dt(Ea(this.h), wr(this.s), wr(this.l), $r(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $r(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ea(this.h)}, ${wr(this.s) * 100}%, ${wr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ea(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ho(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Qs = (e) => () => e;
function Mu(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Iu(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(o) {
    return Math.pow(e + o * t, r);
  };
}
function Du(e) {
  return (e = +e) == 1 ? sl : function(t, r) {
    return r - t ? Iu(t, r, e) : Qs(isNaN(t) ? r : t);
  };
}
function sl(e, t) {
  var r = t - e;
  return r ? Mu(e, r) : Qs(isNaN(e) ? t : e);
}
const Pa = (function e(t) {
  var r = Du(t);
  function o(s, a) {
    var i = r((s = ls(s)).r, (a = ls(a)).r), l = r(s.g, a.g), c = r(s.b, a.b), d = sl(s.opacity, a.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = c(u), s.opacity = d(u), s + "";
    };
  }
  return o.gamma = e, o;
})(1);
function Tu(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, o = t.slice(), s;
  return function(a) {
    for (s = 0; s < r; ++s) o[s] = e[s] * (1 - a) + t[s] * a;
    return o;
  };
}
function Lu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function $u(e, t) {
  var r = t ? t.length : 0, o = e ? Math.min(r, e.length) : 0, s = new Array(o), a = new Array(r), i;
  for (i = 0; i < o; ++i) s[i] = ea(e[i], t[i]);
  for (; i < r; ++i) a[i] = t[i];
  return function(l) {
    for (i = 0; i < o; ++i) a[i] = s[i](l);
    return a;
  };
}
function Au(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return r.setTime(e * (1 - o) + t * o), r;
  };
}
function Ar(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Eu(e, t) {
  var r = {}, o = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = ea(e[s], t[s]) : o[s] = t[s];
  return function(a) {
    for (s in r) o[s] = r[s](a);
    return o;
  };
}
var cs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, zo = new RegExp(cs.source, "g");
function Pu(e) {
  return function() {
    return e;
  };
}
function Fu(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ru(e, t) {
  var r = cs.lastIndex = zo.lastIndex = 0, o, s, a, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (o = cs.exec(e)) && (s = zo.exec(t)); )
    (a = s.index) > r && (a = t.slice(r, a), l[i] ? l[i] += a : l[++i] = a), (o = o[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, c.push({ i, x: Ar(o, s) })), r = zo.lastIndex;
  return r < t.length && (a = t.slice(r), l[i] ? l[i] += a : l[++i] = a), l.length < 2 ? c[0] ? Fu(c[0].x) : Pu(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function ea(e, t) {
  var r = typeof t, o;
  return t == null || r === "boolean" ? Qs(t) : (r === "number" ? Ar : r === "string" ? (o = or(t)) ? (t = o, Pa) : Ru : t instanceof or ? Pa : t instanceof Date ? Au : Lu(t) ? Tu : Array.isArray(t) ? $u : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Eu : Ar)(e, t);
}
function Bu(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Hu(e) {
  return function() {
    return e;
  };
}
function zu(e) {
  return +e;
}
var Fa = [0, 1];
function jn(e) {
  return e;
}
function ds(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Hu(isNaN(t) ? NaN : 0.5);
}
function Ou(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(o) {
    return Math.max(e, Math.min(t, o));
  };
}
function Uu(e, t, r) {
  var o = e[0], s = e[1], a = t[0], i = t[1];
  return s < o ? (o = ds(s, o), a = r(i, a)) : (o = ds(o, s), a = r(a, i)), function(l) {
    return a(o(l));
  };
}
function Wu(e, t, r) {
  var o = Math.min(e.length, t.length) - 1, s = new Array(o), a = new Array(o), i = -1;
  for (e[o] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < o; )
    s[i] = ds(e[i], e[i + 1]), a[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = iu(e, l, 1, o) - 1;
    return a[c](s[c](l));
  };
}
function al(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Gu() {
  var e = Fa, t = Fa, r = ea, o, s, a, i = jn, l, c, d;
  function u() {
    var p = Math.min(e.length, t.length);
    return i !== jn && (i = Ou(e[0], e[p - 1])), l = p > 2 ? Wu : Uu, c = d = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? a : (c || (c = l(e.map(o), t, r)))(o(i(p)));
  }
  return f.invert = function(p) {
    return i(s((d || (d = l(t, e.map(o), Ar)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, zu), u()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), u()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), r = Bu, u();
  }, f.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : jn, u()) : i !== jn;
  }, f.interpolate = function(p) {
    return arguments.length ? (r = p, u()) : r;
  }, f.unknown = function(p) {
    return arguments.length ? (a = p, f) : a;
  }, function(p, h) {
    return o = p, s = h, u();
  };
}
function il() {
  return Gu()(jn, jn);
}
function Yu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Er(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, o = e.slice(0, r);
  return [
    o.length > 1 ? o[0] + o.slice(2) : o,
    +e.slice(r + 1)
  ];
}
function Pn(e) {
  return e = Er(Math.abs(e)), e ? e[1] : NaN;
}
function Vu(e, t) {
  return function(r, o) {
    for (var s = r.length, a = [], i = 0, l = e[0], c = 0; s > 0 && l > 0 && (c + l + 1 > o && (l = Math.max(1, o - c)), a.push(r.substring(s -= l, s + l)), !((c += l + 1) > o)); )
      l = e[i = (i + 1) % e.length];
    return a.reverse().join(t);
  };
}
function Zu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var qu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Pr(e) {
  if (!(t = qu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ta({
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
Pr.prototype = ta.prototype;
function ta(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ta.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ju(e) {
  e: for (var t = e.length, r = 1, o = -1, s; r < t; ++r)
    switch (e[r]) {
      case ".":
        o = s = r;
        break;
      case "0":
        o === 0 && (o = r), s = r;
        break;
      default:
        if (!+e[r]) break e;
        o > 0 && (o = 0);
        break;
    }
  return o > 0 ? e.slice(0, o) + e.slice(s + 1) : e;
}
var ll;
function Xu(e, t) {
  var r = Er(e, t);
  if (!r) return e + "";
  var o = r[0], s = r[1], a = s - (ll = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = o.length;
  return a === i ? o : a > i ? o + new Array(a - i + 1).join("0") : a > 0 ? o.slice(0, a) + "." + o.slice(a) : "0." + new Array(1 - a).join("0") + Er(e, Math.max(0, t + a - 1))[0];
}
function Ra(e, t) {
  var r = Er(e, t);
  if (!r) return e + "";
  var o = r[0], s = r[1];
  return s < 0 ? "0." + new Array(-s).join("0") + o : o.length > s + 1 ? o.slice(0, s + 1) + "." + o.slice(s + 1) : o + new Array(s - o.length + 2).join("0");
}
const Ba = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Yu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ra(e * 100, t),
  r: Ra,
  s: Xu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ha(e) {
  return e;
}
var za = Array.prototype.map, Oa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ku(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ha : Vu(za.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", o = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ha : Zu(za.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = Pr(f);
    var p = f.fill, h = f.align, x = f.sign, m = f.symbol, g = f.zero, _ = f.width, M = f.comma, T = f.precision, k = f.trim, y = f.type;
    y === "n" ? (M = !0, y = "g") : Ba[y] || (T === void 0 && (T = 12), k = !0, y = "g"), (g || p === "0" && h === "=") && (g = !0, p = "0", h = "=");
    var S = m === "$" ? r : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", j = m === "$" ? o : /[%p]/.test(y) ? i : "", v = Ba[y], b = /[defgprs%]/.test(y);
    T = T === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function w($) {
      var I = S, E = j, N, C, D;
      if (y === "c")
        E = v($) + E, $ = "";
      else {
        $ = +$;
        var H = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? c : v(Math.abs($), T), k && ($ = Ju($)), H && +$ == 0 && x !== "+" && (H = !1), I = (H ? x === "(" ? x : l : x === "-" || x === "(" ? "" : x) + I, E = (y === "s" ? Oa[8 + ll / 3] : "") + E + (H && x === "(" ? ")" : ""), b) {
          for (N = -1, C = $.length; ++N < C; )
            if (D = $.charCodeAt(N), 48 > D || D > 57) {
              E = (D === 46 ? s + $.slice(N + 1) : $.slice(N)) + E, $ = $.slice(0, N);
              break;
            }
        }
      }
      M && !g && ($ = t($, 1 / 0));
      var J = I.length + $.length + E.length, ee = J < _ ? new Array(_ - J + 1).join(p) : "";
      switch (M && g && ($ = t(ee + $, ee.length ? _ - E.length : 1 / 0), ee = ""), h) {
        case "<":
          $ = I + $ + E + ee;
          break;
        case "=":
          $ = I + ee + $ + E;
          break;
        case "^":
          $ = ee.slice(0, J = ee.length >> 1) + I + $ + E + ee.slice(J);
          break;
        default:
          $ = ee + I + $ + E;
          break;
      }
      return a($);
    }
    return w.toString = function() {
      return f + "";
    }, w;
  }
  function u(f, p) {
    var h = d((f = Pr(f), f.type = "f", f)), x = Math.max(-8, Math.min(8, Math.floor(Pn(p) / 3))) * 3, m = Math.pow(10, -x), g = Oa[8 + x / 3];
    return function(_) {
      return h(m * _) + g;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var Sr, cl, dl;
Qu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Qu(e) {
  return Sr = Ku(e), cl = Sr.format, dl = Sr.formatPrefix, Sr;
}
function ef(e) {
  return Math.max(0, -Pn(Math.abs(e)));
}
function tf(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Pn(t) / 3))) * 3 - Pn(Math.abs(e)));
}
function nf(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Pn(t) - Pn(e)) + 1;
}
function rf(e, t, r, o) {
  var s = is(e, t, r), a;
  switch (o = Pr(o ?? ",f"), o.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return o.precision == null && !isNaN(a = tf(s, i)) && (o.precision = a), dl(o, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(a = nf(s, Math.max(Math.abs(e), Math.abs(t)))) && (o.precision = a - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(a = ef(s)) && (o.precision = a - (o.type === "%") * 2);
      break;
    }
  }
  return cl(o);
}
function of(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var o = t();
    return pu(o[0], o[o.length - 1], r ?? 10);
  }, e.tickFormat = function(r, o) {
    var s = t();
    return rf(s[0], s[s.length - 1], r ?? 10, o);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var o = t(), s = 0, a = o.length - 1, i = o[s], l = o[a], c, d, u = 10;
    for (l < i && (d = i, i = l, l = d, d = s, s = a, a = d); u-- > 0; ) {
      if (d = as(i, l, r), d === c)
        return o[s] = i, o[a] = l, t(o);
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
function Fr() {
  var e = il();
  return e.copy = function() {
    return al(e, Fr());
  }, ko.apply(e, arguments), of(e);
}
function sf(e, t) {
  e = e.slice();
  var r = 0, o = e.length - 1, s = e[r], a = e[o], i;
  return a < s && (i = r, r = o, o = i, i = s, s = a, a = i), e[r] = t.floor(s), e[o] = t.ceil(a), e;
}
const Oo = /* @__PURE__ */ new Date(), Uo = /* @__PURE__ */ new Date();
function xt(e, t, r, o) {
  function s(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return s.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), s.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), s.round = (a) => {
    const i = s(a), l = s.ceil(a);
    return a - i < l - a ? i : l;
  }, s.offset = (a, i) => (t(a = /* @__PURE__ */ new Date(+a), i == null ? 1 : Math.floor(i)), a), s.range = (a, i, l) => {
    const c = [];
    if (a = s.ceil(a), l = l == null ? 1 : Math.floor(l), !(a < i) || !(l > 0)) return c;
    let d;
    do
      c.push(d = /* @__PURE__ */ new Date(+a)), t(a, l), e(a);
    while (d < a && a < i);
    return c;
  }, s.filter = (a) => xt((i) => {
    if (i >= i) for (; e(i), !a(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !a(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !a(i); )
          ;
  }), r && (s.count = (a, i) => (Oo.setTime(+a), Uo.setTime(+i), e(Oo), e(Uo), Math.floor(r(Oo, Uo))), s.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? s.filter(o ? (i) => o(i) % a === 0 : (i) => s.count(0, i) % a === 0) : s)), s;
}
const Rr = xt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Rr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? xt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Rr);
Rr.range;
const Xt = 1e3, Mt = Xt * 60, Kt = Mt * 60, Qt = Kt * 24, na = Qt * 7, Ua = Qt * 30, Wo = Qt * 365, Mn = xt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Xt);
}, (e, t) => (t - e) / Xt, (e) => e.getUTCSeconds());
Mn.range;
const ra = xt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Xt);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getMinutes());
ra.range;
const af = xt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getUTCMinutes());
af.range;
const oa = xt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Xt - e.getMinutes() * Mt);
}, (e, t) => {
  e.setTime(+e + t * Kt);
}, (e, t) => (t - e) / Kt, (e) => e.getHours());
oa.range;
const lf = xt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Kt);
}, (e, t) => (t - e) / Kt, (e) => e.getUTCHours());
lf.range;
const fr = xt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Mt) / Qt,
  (e) => e.getDate() - 1
);
fr.range;
const sa = xt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Qt, (e) => e.getUTCDate() - 1);
sa.range;
const cf = xt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Qt, (e) => Math.floor(e / Qt));
cf.range;
function wn(e) {
  return xt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Mt) / na);
}
const Co = wn(0), Br = wn(1), df = wn(2), uf = wn(3), Fn = wn(4), ff = wn(5), hf = wn(6);
Co.range;
Br.range;
df.range;
uf.range;
Fn.range;
ff.range;
hf.range;
function Sn(e) {
  return xt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / na);
}
const ul = Sn(0), Hr = Sn(1), pf = Sn(2), mf = Sn(3), Rn = Sn(4), gf = Sn(5), xf = Sn(6);
ul.range;
Hr.range;
pf.range;
mf.range;
Rn.range;
gf.range;
xf.range;
const sr = xt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
sr.range;
const yf = xt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
yf.range;
const en = xt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
en.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : xt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
en.range;
const bn = xt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
bn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : xt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
bn.range;
function bf(e, t, r, o, s, a) {
  const i = [
    [Mn, 1, Xt],
    [Mn, 5, 5 * Xt],
    [Mn, 15, 15 * Xt],
    [Mn, 30, 30 * Xt],
    [a, 1, Mt],
    [a, 5, 5 * Mt],
    [a, 15, 15 * Mt],
    [a, 30, 30 * Mt],
    [s, 1, Kt],
    [s, 3, 3 * Kt],
    [s, 6, 6 * Kt],
    [s, 12, 12 * Kt],
    [o, 1, Qt],
    [o, 2, 2 * Qt],
    [r, 1, na],
    [t, 1, Ua],
    [t, 3, 3 * Ua],
    [e, 1, Wo]
  ];
  function l(d, u, f) {
    const p = u < d;
    p && ([d, u] = [u, d]);
    const h = f && typeof f.range == "function" ? f : c(d, u, f), x = h ? h.range(d, +u + 1) : [];
    return p ? x.reverse() : x;
  }
  function c(d, u, f) {
    const p = Math.abs(u - d) / f, h = Xs(([, , g]) => g).right(i, p);
    if (h === i.length) return e.every(is(d / Wo, u / Wo, f));
    if (h === 0) return Rr.every(Math.max(is(d, u, f), 1));
    const [x, m] = i[p / i[h - 1][2] < i[h][2] / p ? h - 1 : h];
    return x.every(m);
  }
  return [l, c];
}
const [vf, wf] = bf(en, sr, Co, fr, oa, ra);
function Go(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Yo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Wn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Sf(e) {
  var t = e.dateTime, r = e.date, o = e.time, s = e.periods, a = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Gn(s), u = Yn(s), f = Gn(a), p = Yn(a), h = Gn(i), x = Yn(i), m = Gn(l), g = Yn(l), _ = Gn(c), M = Yn(c), T = {
    a: H,
    A: J,
    b: ee,
    B,
    c: null,
    d: qa,
    e: qa,
    f: Gf,
    g: th,
    G: rh,
    H: Of,
    I: Uf,
    j: Wf,
    L: fl,
    m: Yf,
    M: Vf,
    p: K,
    q: A,
    Q: Ka,
    s: Qa,
    S: Zf,
    u: qf,
    U: Jf,
    V: Xf,
    w: Kf,
    W: Qf,
    x: null,
    X: null,
    y: eh,
    Y: nh,
    Z: oh,
    "%": Xa
  }, k = {
    a: L,
    A: G,
    b: U,
    B: P,
    c: null,
    d: Ja,
    e: Ja,
    f: lh,
    g: yh,
    G: vh,
    H: sh,
    I: ah,
    j: ih,
    L: pl,
    m: ch,
    M: dh,
    p: Z,
    q: X,
    Q: Ka,
    s: Qa,
    S: uh,
    u: fh,
    U: hh,
    V: ph,
    w: mh,
    W: gh,
    x: null,
    X: null,
    y: xh,
    Y: bh,
    Z: wh,
    "%": Xa
  }, y = {
    a: w,
    A: $,
    b: I,
    B: E,
    c: N,
    d: Va,
    e: Va,
    f: Rf,
    g: Ya,
    G: Ga,
    H: Za,
    I: Za,
    j: Af,
    L: Ff,
    m: $f,
    M: Ef,
    p: b,
    q: Lf,
    Q: Hf,
    s: zf,
    S: Pf,
    u: jf,
    U: Mf,
    V: If,
    w: Nf,
    W: Df,
    x: C,
    X: D,
    y: Ya,
    Y: Ga,
    Z: Tf,
    "%": Bf
  };
  T.x = S(r, T), T.X = S(o, T), T.c = S(t, T), k.x = S(r, k), k.X = S(o, k), k.c = S(t, k);
  function S(q, ne) {
    return function(ue) {
      var W = [], se = -1, ce = 0, ye = q.length, he, Me, Ge;
      for (ue instanceof Date || (ue = /* @__PURE__ */ new Date(+ue)); ++se < ye; )
        q.charCodeAt(se) === 37 && (W.push(q.slice(ce, se)), (Me = Wa[he = q.charAt(++se)]) != null ? he = q.charAt(++se) : Me = he === "e" ? " " : "0", (Ge = ne[he]) && (he = Ge(ue, Me)), W.push(he), ce = se + 1);
      return W.push(q.slice(ce, se)), W.join("");
    };
  }
  function j(q, ne) {
    return function(ue) {
      var W = Wn(1900, void 0, 1), se = v(W, q, ue += "", 0), ce, ye;
      if (se != ue.length) return null;
      if ("Q" in W) return new Date(W.Q);
      if ("s" in W) return new Date(W.s * 1e3 + ("L" in W ? W.L : 0));
      if (ne && !("Z" in W) && (W.Z = 0), "p" in W && (W.H = W.H % 12 + W.p * 12), W.m === void 0 && (W.m = "q" in W ? W.q : 0), "V" in W) {
        if (W.V < 1 || W.V > 53) return null;
        "w" in W || (W.w = 1), "Z" in W ? (ce = Yo(Wn(W.y, 0, 1)), ye = ce.getUTCDay(), ce = ye > 4 || ye === 0 ? Hr.ceil(ce) : Hr(ce), ce = sa.offset(ce, (W.V - 1) * 7), W.y = ce.getUTCFullYear(), W.m = ce.getUTCMonth(), W.d = ce.getUTCDate() + (W.w + 6) % 7) : (ce = Go(Wn(W.y, 0, 1)), ye = ce.getDay(), ce = ye > 4 || ye === 0 ? Br.ceil(ce) : Br(ce), ce = fr.offset(ce, (W.V - 1) * 7), W.y = ce.getFullYear(), W.m = ce.getMonth(), W.d = ce.getDate() + (W.w + 6) % 7);
      } else ("W" in W || "U" in W) && ("w" in W || (W.w = "u" in W ? W.u % 7 : "W" in W ? 1 : 0), ye = "Z" in W ? Yo(Wn(W.y, 0, 1)).getUTCDay() : Go(Wn(W.y, 0, 1)).getDay(), W.m = 0, W.d = "W" in W ? (W.w + 6) % 7 + W.W * 7 - (ye + 5) % 7 : W.w + W.U * 7 - (ye + 6) % 7);
      return "Z" in W ? (W.H += W.Z / 100 | 0, W.M += W.Z % 100, Yo(W)) : Go(W);
    };
  }
  function v(q, ne, ue, W) {
    for (var se = 0, ce = ne.length, ye = ue.length, he, Me; se < ce; ) {
      if (W >= ye) return -1;
      if (he = ne.charCodeAt(se++), he === 37) {
        if (he = ne.charAt(se++), Me = y[he in Wa ? ne.charAt(se++) : he], !Me || (W = Me(q, ue, W)) < 0) return -1;
      } else if (he != ue.charCodeAt(W++))
        return -1;
    }
    return W;
  }
  function b(q, ne, ue) {
    var W = d.exec(ne.slice(ue));
    return W ? (q.p = u.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function w(q, ne, ue) {
    var W = h.exec(ne.slice(ue));
    return W ? (q.w = x.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function $(q, ne, ue) {
    var W = f.exec(ne.slice(ue));
    return W ? (q.w = p.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function I(q, ne, ue) {
    var W = _.exec(ne.slice(ue));
    return W ? (q.m = M.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function E(q, ne, ue) {
    var W = m.exec(ne.slice(ue));
    return W ? (q.m = g.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function N(q, ne, ue) {
    return v(q, t, ne, ue);
  }
  function C(q, ne, ue) {
    return v(q, r, ne, ue);
  }
  function D(q, ne, ue) {
    return v(q, o, ne, ue);
  }
  function H(q) {
    return i[q.getDay()];
  }
  function J(q) {
    return a[q.getDay()];
  }
  function ee(q) {
    return c[q.getMonth()];
  }
  function B(q) {
    return l[q.getMonth()];
  }
  function K(q) {
    return s[+(q.getHours() >= 12)];
  }
  function A(q) {
    return 1 + ~~(q.getMonth() / 3);
  }
  function L(q) {
    return i[q.getUTCDay()];
  }
  function G(q) {
    return a[q.getUTCDay()];
  }
  function U(q) {
    return c[q.getUTCMonth()];
  }
  function P(q) {
    return l[q.getUTCMonth()];
  }
  function Z(q) {
    return s[+(q.getUTCHours() >= 12)];
  }
  function X(q) {
    return 1 + ~~(q.getUTCMonth() / 3);
  }
  return {
    format: function(q) {
      var ne = S(q += "", T);
      return ne.toString = function() {
        return q;
      }, ne;
    },
    parse: function(q) {
      var ne = j(q += "", !1);
      return ne.toString = function() {
        return q;
      }, ne;
    },
    utcFormat: function(q) {
      var ne = S(q += "", k);
      return ne.toString = function() {
        return q;
      }, ne;
    },
    utcParse: function(q) {
      var ne = j(q += "", !0);
      return ne.toString = function() {
        return q;
      }, ne;
    }
  };
}
var Wa = { "-": "", _: " ", 0: "0" }, bt = /^\s*\d+/, _f = /^%/, kf = /[\\^$*+?|[\]().{}]/g;
function ot(e, t, r) {
  var o = e < 0 ? "-" : "", s = (o ? -e : e) + "", a = s.length;
  return o + (a < r ? new Array(r - a + 1).join(t) + s : s);
}
function Cf(e) {
  return e.replace(kf, "\\$&");
}
function Gn(e) {
  return new RegExp("^(?:" + e.map(Cf).join("|") + ")", "i");
}
function Yn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Nf(e, t, r) {
  var o = bt.exec(t.slice(r, r + 1));
  return o ? (e.w = +o[0], r + o[0].length) : -1;
}
function jf(e, t, r) {
  var o = bt.exec(t.slice(r, r + 1));
  return o ? (e.u = +o[0], r + o[0].length) : -1;
}
function Mf(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.U = +o[0], r + o[0].length) : -1;
}
function If(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.V = +o[0], r + o[0].length) : -1;
}
function Df(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.W = +o[0], r + o[0].length) : -1;
}
function Ga(e, t, r) {
  var o = bt.exec(t.slice(r, r + 4));
  return o ? (e.y = +o[0], r + o[0].length) : -1;
}
function Ya(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), r + o[0].length) : -1;
}
function Tf(e, t, r) {
  var o = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return o ? (e.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), r + o[0].length) : -1;
}
function Lf(e, t, r) {
  var o = bt.exec(t.slice(r, r + 1));
  return o ? (e.q = o[0] * 3 - 3, r + o[0].length) : -1;
}
function $f(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.m = o[0] - 1, r + o[0].length) : -1;
}
function Va(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.d = +o[0], r + o[0].length) : -1;
}
function Af(e, t, r) {
  var o = bt.exec(t.slice(r, r + 3));
  return o ? (e.m = 0, e.d = +o[0], r + o[0].length) : -1;
}
function Za(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.H = +o[0], r + o[0].length) : -1;
}
function Ef(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.M = +o[0], r + o[0].length) : -1;
}
function Pf(e, t, r) {
  var o = bt.exec(t.slice(r, r + 2));
  return o ? (e.S = +o[0], r + o[0].length) : -1;
}
function Ff(e, t, r) {
  var o = bt.exec(t.slice(r, r + 3));
  return o ? (e.L = +o[0], r + o[0].length) : -1;
}
function Rf(e, t, r) {
  var o = bt.exec(t.slice(r, r + 6));
  return o ? (e.L = Math.floor(o[0] / 1e3), r + o[0].length) : -1;
}
function Bf(e, t, r) {
  var o = _f.exec(t.slice(r, r + 1));
  return o ? r + o[0].length : -1;
}
function Hf(e, t, r) {
  var o = bt.exec(t.slice(r));
  return o ? (e.Q = +o[0], r + o[0].length) : -1;
}
function zf(e, t, r) {
  var o = bt.exec(t.slice(r));
  return o ? (e.s = +o[0], r + o[0].length) : -1;
}
function qa(e, t) {
  return ot(e.getDate(), t, 2);
}
function Of(e, t) {
  return ot(e.getHours(), t, 2);
}
function Uf(e, t) {
  return ot(e.getHours() % 12 || 12, t, 2);
}
function Wf(e, t) {
  return ot(1 + fr.count(en(e), e), t, 3);
}
function fl(e, t) {
  return ot(e.getMilliseconds(), t, 3);
}
function Gf(e, t) {
  return fl(e, t) + "000";
}
function Yf(e, t) {
  return ot(e.getMonth() + 1, t, 2);
}
function Vf(e, t) {
  return ot(e.getMinutes(), t, 2);
}
function Zf(e, t) {
  return ot(e.getSeconds(), t, 2);
}
function qf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Jf(e, t) {
  return ot(Co.count(en(e) - 1, e), t, 2);
}
function hl(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Fn(e) : Fn.ceil(e);
}
function Xf(e, t) {
  return e = hl(e), ot(Fn.count(en(e), e) + (en(e).getDay() === 4), t, 2);
}
function Kf(e) {
  return e.getDay();
}
function Qf(e, t) {
  return ot(Br.count(en(e) - 1, e), t, 2);
}
function eh(e, t) {
  return ot(e.getFullYear() % 100, t, 2);
}
function th(e, t) {
  return e = hl(e), ot(e.getFullYear() % 100, t, 2);
}
function nh(e, t) {
  return ot(e.getFullYear() % 1e4, t, 4);
}
function rh(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Fn(e) : Fn.ceil(e), ot(e.getFullYear() % 1e4, t, 4);
}
function oh(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ot(t / 60 | 0, "0", 2) + ot(t % 60, "0", 2);
}
function Ja(e, t) {
  return ot(e.getUTCDate(), t, 2);
}
function sh(e, t) {
  return ot(e.getUTCHours(), t, 2);
}
function ah(e, t) {
  return ot(e.getUTCHours() % 12 || 12, t, 2);
}
function ih(e, t) {
  return ot(1 + sa.count(bn(e), e), t, 3);
}
function pl(e, t) {
  return ot(e.getUTCMilliseconds(), t, 3);
}
function lh(e, t) {
  return pl(e, t) + "000";
}
function ch(e, t) {
  return ot(e.getUTCMonth() + 1, t, 2);
}
function dh(e, t) {
  return ot(e.getUTCMinutes(), t, 2);
}
function uh(e, t) {
  return ot(e.getUTCSeconds(), t, 2);
}
function fh(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function hh(e, t) {
  return ot(ul.count(bn(e) - 1, e), t, 2);
}
function ml(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function ph(e, t) {
  return e = ml(e), ot(Rn.count(bn(e), e) + (bn(e).getUTCDay() === 4), t, 2);
}
function mh(e) {
  return e.getUTCDay();
}
function gh(e, t) {
  return ot(Hr.count(bn(e) - 1, e), t, 2);
}
function xh(e, t) {
  return ot(e.getUTCFullYear() % 100, t, 2);
}
function yh(e, t) {
  return e = ml(e), ot(e.getUTCFullYear() % 100, t, 2);
}
function bh(e, t) {
  return ot(e.getUTCFullYear() % 1e4, t, 4);
}
function vh(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Rn(e) : Rn.ceil(e), ot(e.getUTCFullYear() % 1e4, t, 4);
}
function wh() {
  return "+0000";
}
function Xa() {
  return "%";
}
function Ka(e) {
  return +e;
}
function Qa(e) {
  return Math.floor(+e / 1e3);
}
var kn, gl;
Sh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Sh(e) {
  return kn = Sf(e), gl = kn.format, kn.parse, kn.utcFormat, kn.utcParse, kn;
}
function _h(e) {
  return new Date(e);
}
function kh(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function xl(e, t, r, o, s, a, i, l, c, d) {
  var u = il(), f = u.invert, p = u.domain, h = d(".%L"), x = d(":%S"), m = d("%I:%M"), g = d("%I %p"), _ = d("%a %d"), M = d("%b %d"), T = d("%B"), k = d("%Y");
  function y(S) {
    return (c(S) < S ? h : l(S) < S ? x : i(S) < S ? m : a(S) < S ? g : o(S) < S ? s(S) < S ? _ : M : r(S) < S ? T : k)(S);
  }
  return u.invert = function(S) {
    return new Date(f(S));
  }, u.domain = function(S) {
    return arguments.length ? p(Array.from(S, kh)) : p().map(_h);
  }, u.ticks = function(S) {
    var j = p();
    return e(j[0], j[j.length - 1], S ?? 10);
  }, u.tickFormat = function(S, j) {
    return j == null ? y : d(j);
  }, u.nice = function(S) {
    var j = p();
    return (!S || typeof S.range != "function") && (S = t(j[0], j[j.length - 1], S ?? 10)), S ? p(sf(j, S)) : u;
  }, u.copy = function() {
    return al(u, xl(e, t, r, o, s, a, i, l, c, d));
  }, u;
}
function aa() {
  return ko.apply(xl(vf, wf, en, sr, Co, fr, oa, ra, Mn, gl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Ch({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: o,
  isSelected: s = !1,
  taskIndex: a,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const d = qe(null), [u, f] = Ve(!1), [p, h] = Ve(!1), x = t(e.start), m = t(e.end), g = Math.max(m - x, 20), _ = () => {
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
  }, M = e.progress ? g * e.progress / 100 : 0, T = () => {
    r?.(e);
  }, k = () => {
    o?.(e);
  }, y = (I) => {
    I.key === "Enter" ? (I.preventDefault(), T()) : I.key === " " && (I.preventDefault(), k());
  }, S = () => {
    f(!0);
  }, j = () => {
    f(!1);
  }, v = () => {
    h(!0), l?.();
  }, b = () => {
    h(!1);
  }, w = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (p || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), $ = {
    "--task-left": `${x}px`,
    "--task-width": `${g}px`,
    "--task-color": _(),
    left: `${x}px`,
    width: `${g}px`,
    backgroundColor: _()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": a,
      className: w,
      style: $,
      onClick: T,
      onDoubleClick: k,
      onKeyDown: y,
      onMouseDown: S,
      onMouseUp: j,
      onFocus: v,
      onBlur: b,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${M}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Nh({ viewStart: e, viewEnd: t, dateCount: r }) {
  const o = [];
  for (let h = e.getTime(); h <= t.getTime(); h += 864e5)
    o.push(new Date(h));
  const a = /* @__PURE__ */ new Date();
  a.setHours(0, 0, 0, 0);
  const [i, l] = Ve(-1), c = qe(null), d = (h) => {
    if (h.key === "ArrowLeft") {
      h.preventDefault();
      const x = Math.max(0, i === -1 ? 0 : i - 1);
      l(x), p(x);
    } else if (h.key === "ArrowRight") {
      h.preventDefault();
      const x = Math.min(o.length - 1, i === -1 ? 0 : i + 1);
      l(x), p(x);
    } else if (h.key === "ArrowDown")
      h.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (h.key === "Home")
      h.preventDefault(), l(0), p(0);
    else if (h.key === "End") {
      h.preventDefault();
      const x = o.length - 1;
      l(x), p(x);
    }
  }, u = (h) => {
    if (h.key === "ArrowDown")
      h.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (h.key === "ArrowRight") {
      h.preventDefault();
      const x = c.current;
      x && x.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (h) => {
    const x = c.current?.querySelector(`[data-date-index="${h}"]`);
    x && x.focus();
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
            ref: c,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: d,
            onFocus: f,
            children: o.map((h, x) => {
              const m = h.getTime() === a.getTime(), g = i === x;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": x,
                  className: `date-column ${m ? "today" : ""} ${g ? "focused" : ""}`,
                  tabIndex: g ? 0 : -1,
                  role: "button",
                  "aria-label": `${h.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(x),
                  onKeyDown: d,
                  children: h.toLocaleDateString("en-GB", {
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
function jh({ resource: e, tasks: t, scale: r, onTaskClick: o, onTaskDoubleClick: s, rowIndex: a, dateCount: i }) {
  const [l, c] = Ve(!1), [d, u] = Ve(-1), f = qe(null);
  rt(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
  const p = (m) => {
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
          m.preventDefault(), a === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${a + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${a + 3}"] .timeline-container`) : null)?.focus();
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
        const M = Math.min(t.length - 1, d + 1);
        u(M), f.current?.querySelector(`[data-task-index="${M}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case " ":
        m.preventDefault(), d >= 0 && s?.(t[d]);
        break;
      case "Escape":
        m.preventDefault(), c(!1), u(-1), f.current?.focus();
        break;
    }
  }, h = (m) => {
    switch (m.key) {
      case "ArrowUp":
        m.preventDefault(), a === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${a + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${a + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault(), f.current?.focus();
        break;
    }
  }, x = (m) => {
    l && u(m);
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": a + 2,
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
            children: t.map((m, g) => /* @__PURE__ */ n.jsx(
              Ch,
              {
                task: m,
                scale: r,
                onTaskClick: o,
                onTaskDoubleClick: s,
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
function qb({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: o,
  onTaskClick: s,
  onTaskDoubleClick: a
}) {
  const i = qe(null), [l, c] = Ve(800), d = ze(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const m = new Date(r);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [r]), u = ze(() => {
    if (o instanceof Date)
      return isNaN(o.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : o;
    const m = new Date(o);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [o]), f = ze(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  rt(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const g = new m((_) => {
      const M = _[0];
      M && c(Math.max(M.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const p = ze(
    () => aa().domain([d, u]).range([0, l]),
    [d, u, l]
  ), h = ze(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((g) => {
      const _ = m.get(g.resourceId) || [];
      _.push(g), m.set(g.resourceId, _);
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
      onKeyDown: x,
      children: [
        /* @__PURE__ */ n.jsx(Nh, { viewStart: d, viewEnd: u, dateCount: f }),
        /* @__PURE__ */ n.jsx(
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
            children: e.map((m, g) => /* @__PURE__ */ n.jsx(
              jh,
              {
                resource: m,
                tasks: h.get(m.id) || [],
                scale: p,
                onTaskClick: s,
                onTaskDoubleClick: a,
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
const zr = ({
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
) }), Mh = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: o = "Breadcrumb",
  href: s,
  text: a,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? nt.Children.toArray(t).filter(
    (g) => nt.isValidElement(g) && (g.type === zr || g.type?.displayName === "BreadcrumbItem")
  ).map((g) => ({
    text: typeof g.props.children == "string" ? g.props.children : String(g.props.children),
    href: g.props.href,
    active: g.props.active,
    attributes: g.props.attributes
  })) : [], d = () => t ? c() : s && a ? [{ href: s, text: a }] : e, u = () => {
    const m = d();
    if (m && m.length > 0) {
      const g = m.slice().reverse().find((_) => _.href && !_.active);
      if (g)
        return { href: g.href, text: g.text };
    }
    return { text: "Home" };
  }, f = d(), p = u(), h = De(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), x = o;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: h,
      "aria-label": x,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          nt.Children.map(t, (m, g) => nt.isValidElement(m) && (m.type === zr || m.type?.displayName === "BreadcrumbItem") ? nt.cloneElement(m, { key: g }) : null)
        ) : (
          // Render from items array
          f?.filter((m) => m.active || !!m.href).map((m, g) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: m.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...m.attributes || {},
              children: m.text
            }
          ) : /* @__PURE__ */ n.jsx(
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
}, yl = Mh;
yl.Item = zr;
zr.displayName = "BreadcrumbItem";
const bl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: o = {}
}) => {
  const s = De("nhsuk-skip-link", r);
  return /* @__PURE__ */ n.jsx(
    "a",
    {
      className: s,
      href: t,
      "data-module": "nhsuk-skip-link",
      ...o,
      children: e
    }
  );
}, Jb = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: o,
  classes: s,
  attributes: a = {}
}) => {
  const i = De("nhsuk-pagination", s);
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...a,
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
}, Xb = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: o = {}
}) => {
  const s = De("nhsuk-contents-list", t), a = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
      ...o,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => a(i, l)) })
      ]
    }
  );
}, vl = nt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: o = 2,
  headingClasses: s,
  description: a,
  descriptionHtml: i,
  href: l,
  imgURL: c,
  imgAlt: d,
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
  ].filter(Boolean).join(" "), x = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), m = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const M = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Bt,
      {
        level: o,
        className: x,
        children: M()
      }
    );
  }, g = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: a }) : null, _ = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: d || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: h, children: [
          m(),
          g(),
          _()
        ] })
      ]
    }
  );
});
vl.displayName = "Card";
const Kb = ({
  className: e,
  children: t,
  "data-testid": r,
  id: o
}) => {
  const s = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: s,
      "data-testid": r,
      id: o,
      children: t
    }
  );
}, Qb = ({
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
}, e1 = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: o = 3,
  headingClasses: s,
  description: a,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": d,
  id: u,
  "aria-label": f,
  "aria-labelledby": p,
  "aria-describedby": h
}) => {
  const x = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), g = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const M = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], T = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        M,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Bt,
      {
        level: o,
        className: m,
        children: T
      }
    );
  }, _ = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: a }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: x,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": p,
      "aria-describedby": h,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          g(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: _() })
      ]
    }
  );
}, Ih = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: o,
  headingLevel: s = 2,
  bodyText: a,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const d = De(
    "nhsuk-panel",
    t
  ), u = () => !r && !o && !l ? null : o ? /* @__PURE__ */ n.jsx(
    Bt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: o,
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
  ) : a ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: a }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, t1 = ({
  text: e,
  html: t,
  children: r,
  className: o,
  ...s
}) => {
  const a = De("nhsuk-inset-text", o), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...s, children: i() });
}, n1 = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...o
}) => {
  const s = De(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), a = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, d) => /* @__PURE__ */ n.jsx(
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
            a(c),
            c.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    d
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: s, ...o, children: e.map((l, c) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: a(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: a(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Vn = { current: null }, Dh = () => {
  if (Vn.current) return Vn.current;
  try {
    Vn.current = require("prismjs");
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
    Vn.current = null;
  }
  return Vn.current;
}, Th = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let r = e;
  return t.forEach((o) => {
    r = r.replace(o.regex, (s) => `<span class="nhsuk-code-${o.cls}">${s}</span>`);
  }), r;
}, Or = (e, t, r) => {
  if (r || !t) return e;
  const o = Dh();
  if (o && o.languages) {
    const s = o.languages[t] ? t : o.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : o.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return o.highlight(e, o.languages[s], s);
      } catch {
      }
  }
  return Th(e);
}, Lh = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: o,
  firstCellIsHeader: s = !1,
  responsive: a = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: d,
  tableClasses: u,
  classes: f,
  attributes: p,
  "data-testid": h,
  columns: x,
  data: m,
  visuallyHiddenCaption: g = !1
}) => {
  const _ = `nhsuk-table__caption ${o ? `nhsuk-table__caption--${o}` : ""}`.trim(), M = De(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": a
    },
    u
  ), T = De(f), k = (b, w) => {
    const $ = De(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${b.format}`]: b.format
      },
      b.classes
    ), I = {
      scope: "col",
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...a && { role: "columnheader" },
      ...b.attributes
    };
    let E;
    if (b.node != null)
      E = /* @__PURE__ */ n.jsx(n.Fragment, { children: b.node });
    else if (b.html)
      E = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const N = Array.isArray(b.code), C = N ? b.code.join(`
`) : b.code, D = N || C.includes(`
`), H = {
        className: De("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": D,
          "nhsuk-table__code--inline": !D
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, J = Or(C, b.codeLanguage);
      E = D ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: J }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: J }
        }
      );
    } else
      E = b.text;
    return /* @__PURE__ */ n.jsx("th", { className: $, ...I, children: E }, w);
  }, y = (b, w, $) => {
    const I = s && $ || b.rowHeader, E = De(
      I ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${I ? "header" : "cell"}--${b.format}`]: b.format
      },
      b.classes
    ), N = {
      ...I && { scope: "row" },
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...a && {
        role: I ? "rowheader" : "cell",
        ...b.header && { "data-label": b.header }
      },
      ...b.attributes
    };
    let C;
    if (b.node != null)
      C = /* @__PURE__ */ n.jsx(n.Fragment, { children: b.node });
    else if (b.html)
      C = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const J = Array.isArray(b.code), ee = J ? b.code.join(`
`) : b.code, B = J || ee.includes(`
`), K = {
        className: De("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, A = Or(
        ee,
        b.codeLanguage,
        b.disableHighlight
      );
      C = B ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...K,
          dangerouslySetInnerHTML: { __html: A }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...K,
          dangerouslySetInnerHTML: { __html: A }
        }
      );
    } else
      C = b.text;
    const D = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      a && b.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        b.header,
        " "
      ] }),
      C
    ] }), H = I ? "th" : "td";
    return /* @__PURE__ */ n.jsx(H, { className: E, ...N, children: D }, w);
  };
  let S = t, j = e;
  !S && x && x.length && (S = x.map((b) => ({
    text: b.title,
    format: b.format,
    classes: b.headerClasses,
    attributes: b.headerAttributes
  }))), !j && x && m && m.length && (j = m.map((b, w) => x.map(($) => {
    const I = $.accessor ? $.accessor(b, w) : b[$.key];
    let E = { format: $.format, classes: $.cellClasses, attributes: $.cellAttributes };
    if ($.rowHeader && (E.rowHeader = !0), $.render) {
      const N = $.render(I, b, w, $);
      return N == null || typeof N == "boolean" ? { ...E, text: "" } : typeof N == "string" || typeof N == "number" ? { ...E, text: String(N) } : { ...E, ...N };
    }
    return { ...E, text: I != null ? String(I) : "" };
  })));
  const v = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: M,
      ...a && { role: "table" },
      ...p,
      ...h && { "data-testid": h },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: De(_, g && "nhsuk-u-visually-hidden"), children: r }),
        S && S.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...a && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...a && { role: "row" }, children: S.map(
              (b, w) => k(b, w)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: j && j.map((b, w) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...a && { role: "row" },
            children: b.map(
              ($, I) => y($, I, I === 0)
            )
          },
          w
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Ih, { className: d, children: [
    i && /* @__PURE__ */ n.jsx(Bt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    v()
  ] }) : T ? /* @__PURE__ */ n.jsx("div", { className: T, children: v() }) : v();
}, $h = ({
  children: e,
  size: t,
  className: r
}) => {
  const o = De(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    r
  );
  return /* @__PURE__ */ n.jsx("caption", { className: o, children: e });
}, wl = ({
  responsive: e,
  className: t,
  children: r,
  ...o
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...s, ...o, children: r });
}, Sl = ({
  text: e,
  html: t,
  node: r,
  code: o,
  codeLanguage: s,
  codeClassName: a,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: p,
  as: h = "th"
}) => {
  const x = De(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    c
  ), m = {
    scope: "col",
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...p && { role: "columnheader" },
    ...f
  };
  let g;
  if (r != null) g = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) g = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (o != null) {
    const M = Array.isArray(o), T = M ? o.join(`
`) : o, k = M || T.includes(`
`), y = {
      className: De("nhsuk-table__code", a, {
        "nhsuk-table__code--block": k,
        "nhsuk-table__code--inline": !k
      }),
      ...s ? { "data-language": s } : {}
    }, S = Or(
      T,
      s,
      i
    );
    g = k ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...y,
        dangerouslySetInnerHTML: { __html: S }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...y, dangerouslySetInnerHTML: { __html: S } });
  } else g = e;
  const _ = h;
  return /* @__PURE__ */ n.jsx(_, { className: x, ...m, children: g });
}, Ah = ({
  text: e,
  html: t,
  node: r,
  code: o,
  codeLanguage: s,
  codeClassName: a,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: p,
  rowHeader: h
}) => {
  const x = !!h, m = x ? "th" : "td", g = De(
    x ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${x ? "header" : "cell"}--${l}`,
    c
  ), _ = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...x && { scope: "row" },
    ...p && { role: x ? "rowheader" : "cell" },
    ...f
  };
  let M;
  if (r != null) M = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) M = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (o != null) {
    const T = Array.isArray(o), k = T ? o.join(`
`) : o, y = T || k.includes(`
`), S = {
      className: De("nhsuk-table__code", a, {
        "nhsuk-table__code--block": y,
        "nhsuk-table__code--inline": !y
      }),
      ...s ? { "data-language": s } : {}
    }, j = Or(k, s, i);
    M = y ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...S, dangerouslySetInnerHTML: { __html: j } }) }) : /* @__PURE__ */ n.jsx("code", { ...S, dangerouslySetInnerHTML: { __html: j } });
  } else M = e;
  return /* @__PURE__ */ n.jsx(m, { className: g, ..._, children: M });
}, tn = Lh;
tn.Caption = $h;
tn.BodyRow = wl;
tn.HeaderCell = Sl;
tn.Cell = Ah;
let ei = !1, ti = !1;
Object.defineProperty(tn, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ei && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), ei = !0), wl;
  }
});
Object.defineProperty(tn, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ti && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), ti = !0), Sl;
  }
});
const r1 = zn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: o,
  onTabFocus: s,
  onTabListBlur: a,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: d,
  "data-testid": u,
  ...f
}, p) => {
  const h = r !== void 0, [x, m] = Ve(() => t || e[0]?.id || ""), g = h ? r : x, _ = qe(null), M = qe(/* @__PURE__ */ new Map()), T = _e((w) => {
    h || m(w), o?.(w);
  }, [h, o]), k = _e((w) => {
    s?.(w), l && T(w);
  }, [s, l, T]), y = _e((w, $) => {
    const I = e.filter((C) => !C.disabled).map((C) => C.id), E = I.indexOf($);
    let N = null;
    switch (w.key) {
      case "ArrowLeft":
        N = E > 0 ? E - 1 : I.length - 1;
        break;
      case "ArrowRight":
        N = E < I.length - 1 ? E + 1 : 0;
        break;
      case "Home":
        N = 0;
        break;
      case "End":
        N = I.length - 1;
        break;
      case "Escape":
        w.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (N !== null) {
      w.preventDefault();
      const C = I[N], D = M.current.get(C);
      D && (D.focus(), k(C));
    }
  }, [e, k, i]), S = _e((w, $) => {
    $ ? M.current.set(w, $) : M.current.delete(w);
  }, []), j = _e((w) => {
    const $ = M.current.get(w);
    $ && $.focus();
  }, []);
  Bi(p, () => ({
    focusTab: j,
    getActiveTab: () => g,
    getTabListElement: () => _.current
  }), [j, g]);
  const v = _e((w) => {
    const $ = w.relatedTarget;
    _.current?.contains($) || a?.();
  }, [a]), b = De("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: b,
      id: d,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: _,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: v,
                children: e.map((w) => {
                  const $ = w.id === g, I = w.disabled, E = De("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": $,
                    "nhsuk-tabs__list-item--disabled": I
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: E, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (N) => S(w.id, N),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": $,
                      "aria-controls": `${w.id}-panel`,
                      id: `${w.id}-tab`,
                      tabIndex: $ ? 0 : -1,
                      disabled: I,
                      onClick: () => !I && T(w.id),
                      onKeyDown: (N) => !I && y(N, w.id),
                      onFocus: () => !I && k(w.id),
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
          const $ = w.id === g;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${w.id}-tab`,
              id: `${w.id}-panel`,
              hidden: !$,
              children: w.content
            },
            w.id
          );
        })
      ]
    }
  );
}), Eh = zn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: o,
    open: s = !1,
    className: a = "",
    id: i,
    children: l,
    ...c
  }, d) => {
    const u = [
      "nhsuk-details",
      a
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
        ref: d,
        id: i,
        className: u,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
Eh.displayName = "Details";
const Ph = zn(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: o = !1,
    headingLevel: s = 3,
    className: a,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    a && c.push(a);
    const d = [
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
        className: c.join(" "),
        ...i,
        children: [
          p(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: d.join(" "), role: "list", children: r.map((h, x) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(h.item)
          ] }, x)) }) })
        ]
      }
    );
  }
);
Ph.displayName = "DoDontList";
const Fh = zn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: o,
    open: s = !1,
    className: a = "",
    id: i,
    children: l,
    ...c
  }, d) => {
    const u = [
      "nhsuk-expander",
      a
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
        ref: d,
        id: i,
        className: u,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
Fh.displayName = "Expander";
const Rh = zn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...o }, s) => {
    const a = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, p = !!l.href, h = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), x = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Bh,
        {
          item: l,
          itemClasses: h,
          hasLink: p,
          hintId: u,
          statusId: f,
          ariaDescribedBy: x
        },
        c
      );
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: s,
        className: a,
        ...o,
        children: e.map(i)
      }
    );
  }
), Bh = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: o,
  statusId: s,
  ariaDescribedBy: a
}) => {
  const i = () => {
    const d = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": a,
        children: d
      }
    ) : /* @__PURE__ */ n.jsx("div", { className: e.title.classes || "", children: d });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ n.jsx(
    "div",
    {
      id: o,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ n.jsx("div", { id: o, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const d = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(at, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: d, id: s, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Rh.displayName = "TaskList";
const o1 = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: o,
  children: s,
  className: a,
  ...i
}) => {
  const l = /important/i.test(e), c = () => s || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), d = [
    "nhsuk-warning-callout",
    a
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: d,
      ...i,
      children: [
        Pi(
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
        c()
      ]
    }
  );
}, s1 = ({
  src: e,
  alt: t,
  caption: r,
  sizes: o,
  srcset: s,
  className: a,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    a
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
            ...o && s ? { sizes: o, srcSet: s } : {}
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
}, Hh = ({
  dateRange: e,
  onPrev: t,
  onNext: r,
  onToday: o,
  density: s,
  onDensityChange: a,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx(wt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(wt, { variant: "secondary", size: "small", onClick: o, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(wt, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      Dr,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: s,
        onChange: (c) => a?.(c.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      Dr,
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
] }), zh = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(at, { color: Oh(r.status), text: r.label }) }, r.status)) });
function Oh(e) {
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
const a1 = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
  defaultValue: o,
  onChange: s,
  selectionMode: a = "single",
  a11yMode: i,
  className: l,
  style: c,
  getSlotAriaLabel: d,
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: p,
  enableDefaultLegend: h = !0,
  legendPlacement: x = "bottom",
  onA11yModeChange: m
}) => {
  const [g, _] = Ve("grid"), M = i || g, [T, k] = Ve(o || []), y = r ?? T, S = ze(() => {
    const N = /* @__PURE__ */ new Set();
    return e.forEach((C) => N.add(new Date(C.start).getTime())), Array.from(N).sort((C, D) => C - D);
  }, [e]), j = ze(() => {
    const N = {};
    return e.forEach((C) => {
      const D = new Date(C.start).getTime();
      N[D] || (N[D] = {});
      const H = C.capacity - C.booked - (C.held || 0);
      N[D][C.sessionId] = { slot: C, remaining: H };
    }), N;
  }, [e]), v = _e((N) => {
    if (a === "single") {
      const C = [N.id];
      r || k(C), s?.(C, { lastAction: "select" });
    } else {
      const C = y.includes(N.id), D = C ? y.filter((H) => H !== N.id) : [...y, N.id];
      r || k(D), s?.(D, { lastAction: C ? "deselect" : "select" });
    }
  }, [a, y, r, s]), b = ze(() => p || (h ? Array.from(new Set(e.map((C) => C.status))).map((C) => ({
    status: C,
    label: C.charAt(0).toUpperCase() + C.slice(1)
  })) : void 0), [p, h, e]), w = b ? /* @__PURE__ */ n.jsx(
    zh,
    {
      items: b,
      orientation: x === "left" || x === "right" ? "vertical" : "horizontal"
    }
  ) : null, $ = (N) => {
    i || _(N), m?.(N);
  }, I = u || (f ? /* @__PURE__ */ n.jsx(
    Hh,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: M,
      onA11yModeChange: $
    }
  ) : null), E = /* @__PURE__ */ n.jsx("div", { style: c, className: De(l), children: /* @__PURE__ */ n.jsx(os, { className: De("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(an, { children: /* @__PURE__ */ n.jsx(tr, { width: yn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    I,
    x === "top" && w,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((N) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => v(N), "aria-pressed": y.includes(N.id), children: [
      Zn(new Date(N.start)),
      " – ",
      Zn(new Date(N.end)),
      " (",
      N.status,
      ")"
    ] }) }, N.id)) }),
    x === "bottom" && w
  ] }) }) }) }) });
  return M === "list" ? E : /* @__PURE__ */ n.jsx("div", { style: c, className: De(l), children: /* @__PURE__ */ n.jsx(os, { className: De("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(an, { children: /* @__PURE__ */ n.jsx(tr, { width: yn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    I,
    x === "top" && w,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": S.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((N) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${N.specialty}`, className: "nhs-slot-matrix__session-header", children: N.specialty }, N.id))
      ] }),
      S.map((N) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Zn(new Date(N)), children: Zn(new Date(N)) }),
        t.map((C) => {
          const D = j[N]?.[C.id];
          if (!D)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, C.id);
          const { slot: H, remaining: J } = D, ee = y.includes(H.id), B = d ? d(H) : `Slot ${Zn(new Date(H.start))} ${H.status}${J === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": H.status,
              className: De("nhs-slot-matrix__cell", ee && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": ee || void 0,
              onClick: () => v(H),
              children: J > 0 ? `${J} left` : "Full"
            },
            H.id
          );
        })
      ] }, N))
    ] }),
    x === "bottom" && w
  ] }) }) }) }) });
};
function ni(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Zn(e) {
  return `${ni(e.getHours())}:${ni(e.getMinutes())}`;
}
function _l(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = _l(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Pt() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = _l(e)) && (o && (o += " "), o += t);
  return o;
}
const Uh = ({ level: e, children: t, className: r }) => {
  const o = `h${e}`;
  return nt.createElement(o, { className: r }, t);
}, Wh = ({ href: e, children: t, className: r, ...o }) => /* @__PURE__ */ n.jsx("a", { href: e, className: r, ...o, children: t });
function _r(e, t) {
  return /* @__PURE__ */ n.jsx("span", { className: Pt("nhs-step-nav__title", { "nhs-step-nav__title--current": t }), children: e.title });
}
const i1 = ({
  id: e,
  className: t,
  ariaLabel: r = "Step by step",
  heading: o,
  summary: s,
  headingLevel: a = 3,
  variant: i = "full-width",
  items: l,
  numbered: c = !0,
  currentStepId: d,
  renderLink: u,
  collapsible: f = !0,
  singleOpen: p = !1,
  defaultExpandedIds: h,
  expandedIds: x,
  onToggle: m,
  showAllControls: g = !1,
  autoFocusExpanded: _ = !1
}) => {
  const M = u ?? Wh, T = i === "sidebar" ? { as: "aside", className: "nhs-step-nav nhs-step-nav--sidebar" } : { as: "nav", className: "nhs-step-nav nhs-step-nav--full" }, k = T.as === "aside" ? "aside" : "nav", y = x === void 0, [S, j] = Ve(
    () => new Set(h ?? [])
  ), v = ze(() => y ? S : new Set(x), [y, S, x]), b = ze(
    () => l.some((N) => N.description || N.items && N.items.length > 0),
    [l]
  ), w = _e((N) => v.has(N), [v]), $ = _e((N, C) => {
    y && j((D) => {
      if (p)
        return C ? /* @__PURE__ */ new Set([N]) : /* @__PURE__ */ new Set();
      const H = new Set(D);
      return C ? H.add(N) : H.delete(N), H;
    }), m?.(N, C);
  }, [y, m, p]), I = _e((N) => {
    const C = l.filter((D) => D.description || D.items && D.items.length > 0).map((D) => D.id);
    y && j(() => N ? p ? new Set(C.slice(0, 1)) : new Set(C) : /* @__PURE__ */ new Set()), C.forEach((D) => m?.(D, N));
  }, [l, y, m, p]), E = _e((N, C) => {
    const D = !w(N.id);
    if ($(N.id, D), D && _) {
      const H = document.getElementById(`sbs-${N.id}-panel`);
      H && H.querySelector(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )?.focus();
    } else
      C?.focus();
  }, [_, w, $]);
  return nt.createElement(
    k,
    { id: e, "aria-label": r, className: Pt(T.className, t) },
    /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i === "full-width" && (o || s) && /* @__PURE__ */ n.jsxs("div", { className: "nhs-step-nav__intro", children: [
        o && /* @__PURE__ */ n.jsx(Uh, { level: a, className: "nhs-step-nav__heading", children: o }),
        s && /* @__PURE__ */ n.jsx("p", { className: "nhs-step-nav__summary", children: s }),
        f && !p && g && b && /* @__PURE__ */ n.jsxs("div", { className: "nhs-step-nav__controls", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => I(!0), children: "Show all" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => I(!1), children: "Hide all" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("ol", { className: Pt("nhs-step-nav__list", { "nhs-step-nav__list--numbered": c }), children: l.map((N, C) => {
        const D = d === N.id, H = Pt(
          "nhs-step-nav__item",
          D && "nhs-step-nav__item--current",
          N.status && `nhs-step-nav__item--${N.status}`
        ), J = N.href ? /* @__PURE__ */ n.jsx(M, { href: N.href, className: "nhs-step-nav__link", "aria-current": D ? "step" : void 0, children: _r(N, D) }) : _r(N, D), ee = !!(N.description || N.items && N.items.length > 0), B = f && ee ? w(N.id) : !0, K = `sbs-${N.id}-header`, A = `sbs-${N.id}-panel`;
        return /* @__PURE__ */ n.jsxs("li", { className: H, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhs-step-nav__header", children: [
            J,
            (N.optional || N.duration || N.meta) && /* @__PURE__ */ n.jsxs("div", { className: "nhs-step-nav__meta", children: [
              N.optional && /* @__PURE__ */ n.jsx("span", { className: "nhs-step-nav__optional", "aria-label": "Optional", children: "Optional" }),
              N.duration && /* @__PURE__ */ n.jsx("span", { className: "nhs-step-nav__duration", children: N.duration }),
              N.meta
            ] }),
            f && ee && /* @__PURE__ */ n.jsx(
              "button",
              {
                id: K,
                type: "button",
                className: "nhs-step-nav__toggle",
                "aria-expanded": B,
                "aria-controls": A,
                onClick: (L) => E(N, L.currentTarget),
                "aria-label": (B ? "Hide" : "Show") + ` details for ${typeof N.title == "string" ? N.title : "this step"}`,
                children: /* @__PURE__ */ n.jsx("span", { className: "nhs-step-nav__toggle-icon", "aria-hidden": "true" })
              }
            )
          ] }),
          ee && (!f || B) && /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: A,
              role: "region",
              "aria-labelledby": f ? K : void 0,
              className: Pt("nhs-step-nav__content"),
              children: [
                N.description && /* @__PURE__ */ n.jsx("p", { className: "nhs-step-nav__description", children: N.description }),
                N.items && N.items.length > 0 && /* @__PURE__ */ n.jsx("ol", { className: "nhs-step-nav__sublist", children: N.items.map((L) => {
                  const G = d === L.id, U = L.href ? /* @__PURE__ */ n.jsx(M, { href: L.href, className: "nhs-step-nav__sublink", "aria-current": G ? "step" : void 0, children: _r(L, G) }) : _r(L, G);
                  return /* @__PURE__ */ n.jsx("li", { className: Pt("nhs-step-nav__subitem", L.status && `nhs-step-nav__subitem--${L.status}`), children: U }, L.id);
                }) })
              ]
            }
          )
        ] }, N.id || C);
      }) })
    ] })
  );
}, Gh = ({
  title: e,
  value: t,
  subtitle: r,
  variant: o = "default",
  href: s,
  className: a = "",
  ariaLabel: i,
  ...l
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${o}`,
    a
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Bt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
      children: d
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: d
    }
  );
}, l1 = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const o = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: o, ...r, children: /* @__PURE__ */ n.jsx(os, { children: /* @__PURE__ */ n.jsx(an, { children: e.map((s, a) => /* @__PURE__ */ n.jsx(
    tr,
    {
      width: yn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": a,
      children: /* @__PURE__ */ n.jsx(Gh, { ...s })
    },
    a
  )) }) }) });
};
var jr = /* @__PURE__ */ ((e) => (e.String = "string", e.Number = "number", e.Boolean = "boolean", e.Date = "date", e.Custom = "custom", e))(jr || {}), Bn = /* @__PURE__ */ ((e) => (e.First = "first", e.Last = "last", e))(Bn || {}), Jn = /* @__PURE__ */ ((e) => (e.TrueFirst = "trueFirst", e.FalseFirst = "falseFirst", e))(Jn || {});
function ri(e) {
  if (e == null) return null;
  const r = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isNaN(r) ? null : r;
}
const Yh = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function Vh(e, t) {
  return Yh.compare(String(e), String(t));
}
function oi(e, t) {
  if (t.sortAccessor) return t.sortAccessor(e);
  if (t.useRendererForSort) {
    if (t.tableRenderer) return t.tableRenderer(e);
    if (t.render) return t.render(e);
  }
  return e[t.key];
}
function Zh(e, t, r, o) {
  if (r?.sortComparator)
    return r.sortComparator(e, t);
  const s = r?.sortType;
  if (s === jr.Number) {
    const a = Number(e), i = Number(t), l = Number.isNaN(a), c = Number.isNaN(i);
    return l && c ? 0 : l ? 1 : c ? -1 : a - i;
  }
  if (s === jr.Boolean) {
    const a = !!e, i = !!t, l = r?.booleanOrder ?? o?.booleanOrder ?? Jn.FalseFirst;
    return a === i ? 0 : l === Jn.TrueFirst ? a ? -1 : 1 : a ? 1 : -1;
  }
  if (s === jr.Date) {
    const a = ri(e), i = ri(t);
    return a == null && i == null ? 0 : a == null ? 1 : i == null ? -1 : a - i;
  }
  if (typeof e == "number" && typeof t == "number") {
    const a = Number.isNaN(e), i = Number.isNaN(t);
    return a && i ? 0 : a ? 1 : i ? -1 : e - t;
  }
  if (typeof e == "boolean" && typeof t == "boolean") {
    const a = r?.booleanOrder ?? o?.booleanOrder ?? Jn.FalseFirst;
    return e === t ? 0 : a === Jn.TrueFirst ? e ? -1 : 1 : e ? 1 : -1;
  }
  return Vh(e, t);
}
function us(e, t, r = Bn.Last, o) {
  const s = new Map(e.map((i) => [i.key, i])), a = t ?? [];
  return (i, l) => {
    if (!a.length) return 0;
    for (const { key: c, direction: d } of a) {
      const u = s.get(c), f = u ? oi(i, u) : i[c], p = u ? oi(l, u) : l[c], h = f == null, x = p == null;
      if (h || x) {
        if (h && x) continue;
        return (u?.nullsPosition ?? o?.nullsPosition ?? r) === Bn.First ? h ? -1 : 1 : h ? 1 : -1;
      }
      let m = Zh(f, p, u, o);
      if (m !== 0) return d === "asc" ? m : -m;
    }
    if (o?.stable) {
      const c = i.__originalIndex__ ?? i.originalIndex ?? void 0, d = l.__originalIndex__ ?? l.originalIndex ?? void 0;
      if (typeof c == "number" && typeof d == "number")
        return c - d;
    }
    return 0;
  };
}
const qh = nt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: o,
    sortingOptions: s,
    selectedRowIndex: a,
    onRowSelect: i,
    id: l,
    testId: c,
    ariaLabel: d,
    ariaLabelledby: u,
    ariaDescribedby: f,
    className: p,
    tableClassName: h,
    bordered: x = !1,
    striped: m = !1,
    responsive: g = !1,
    tableType: _ = "default"
  }, M) => {
    const T = qe(null), k = qe(null), y = qe(null);
    nt.useImperativeHandle(M, () => T.current, []);
    const [S, j] = Ve(0), [v, b] = Ve(0), [w, $] = Ve("headers"), [I, E] = Ve("browse"), N = t.length, C = e.length, D = ze(() => {
      if (!r || r.length === 0) return e;
      const L = us(
        t,
        r,
        Bn.Last,
        s
      );
      return [...e].sort(L);
    }, [e, r, t, s]), H = _e((L, G) => {
      setTimeout(() => {
        const U = T.current?.querySelector(
          `tbody tr:nth-child(${L + 1}) td:nth-child(${G + 1})`
        );
        U && (U.focus(), typeof U.scrollIntoView == "function" && U.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), J = _e((L) => {
      setTimeout(() => {
        const G = T.current?.querySelector(
          `th:nth-child(${L + 1})`
        );
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ee = _e(
      (L) => {
        o?.(L);
      },
      [o]
    ), B = _e(
      (L) => {
        i?.(L);
      },
      [i]
    ), K = _e(
      (L) => {
        const { key: G } = L;
        switch (G) {
          case "Enter":
            if (L.preventDefault(), w === "headers" && I === "browse")
              E("navigate"), J(v);
            else if (w === "headers" && I === "navigate") {
              const U = t[v];
              U && ee(U.key);
            } else w === "cells" && I === "browse" ? (E("navigate"), H(S, v)) : w === "cells" && I === "navigate" && B(S);
            break;
          case "Escape":
            L.preventDefault(), (w === "headers" && I === "navigate" || w === "cells" && I === "navigate") && E("browse");
            break;
          case "ArrowLeft":
            if (L.preventDefault(), I === "navigate" || I === "browse" && w === "headers") {
              if (w === "headers") {
                const U = Math.max(0, v - 1);
                b(U), J(U);
              } else if (w === "cells") {
                const U = Math.max(0, v - 1);
                b(U), H(S, U);
              }
            }
            break;
          case "ArrowRight":
            if (L.preventDefault(), I === "navigate" || I === "browse" && w === "headers") {
              if (w === "headers") {
                const U = Math.min(
                  N - 1,
                  v + 1
                );
                b(U), J(U);
              } else if (w === "cells") {
                const U = Math.min(
                  N - 1,
                  v + 1
                );
                b(U), H(S, U);
              }
            }
            break;
          case "ArrowUp":
            if (L.preventDefault(), w === "cells") {
              if (I === "browse") {
                const U = Math.max(0, S - 1);
                j(U), H(U, 0), b(0);
              } else if (I === "navigate")
                if (S > 0) {
                  const U = S - 1;
                  j(U), H(U, v);
                } else
                  $("headers"), E("browse"), J(v);
            }
            break;
          case "ArrowDown":
            if (L.preventDefault(), w === "headers" && I === "browse")
              $("cells"), j(0), b(0), H(0, 0);
            else if (w === "cells") {
              const U = C - 1;
              if (I === "browse") {
                const P = Math.min(U, S + 1);
                j(P), H(P, 0), b(0);
              } else if (I === "navigate" && S < U) {
                const P = S + 1;
                j(P), H(P, v);
              }
            }
            break;
          case "Home":
            L.preventDefault(), w === "headers" ? (b(0), J(0)) : w === "cells" && (L.ctrlKey ? (j(0), b(0), H(0, 0)) : (b(0), H(S, 0)));
            break;
          case "End":
            if (L.preventDefault(), w === "headers") {
              const U = N - 1;
              b(U), J(U);
            } else if (w === "cells")
              if (L.ctrlKey) {
                const U = C - 1, P = N - 1;
                j(U), b(P), H(U, P);
              } else {
                const U = N - 1;
                b(U), H(S, U);
              }
            break;
          case " ":
            if (L.preventDefault(), w === "headers" && I === "navigate") {
              const U = t[v];
              U && ee(U.key);
            } else w === "cells" && I === "navigate" && B(S);
            break;
        }
      },
      [
        w,
        I,
        v,
        S,
        N,
        C,
        t,
        H,
        J,
        ee,
        B
      ]
    );
    rt(() => {
      const L = T.current;
      if (L)
        return L.addEventListener("keydown", K), () => L.removeEventListener("keydown", K);
    }, [K]);
    const A = De(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": m,
        "nhsuk-table--compact": _ === "compact"
      },
      p
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: T,
        className: A,
        id: l,
        "data-testid": c,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": u,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: k, role: "row", children: t.map((L, G) => {
            const U = r?.find(
              (X) => X.key === L.key
            ), P = !!U, Z = w === "headers" && v === G;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: De("sortable-header", {
                  "sortable-header--focused": Z
                }),
                role: "columnheader",
                tabIndex: Z ? 0 : -1,
                onClick: () => {
                  $("headers"), b(G), E("navigate"), J(G), ee(L.key);
                },
                onKeyDown: (X) => {
                  (X.key === "Enter" || X.key === " ") && (X.preventDefault(), ee(L.key));
                },
                "aria-sort": P ? U?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: L.label }),
                  P && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex(
                      (X) => X.key === L.key
                    ) + 1 }),
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
              L.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: y, className: "nhsuk-table__body", role: "rowgroup", children: D.map((L, G) => {
            const U = a === G, P = w === "cells" && S === G;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: De("data-row", {
                  "data-row--selected": U,
                  "data-row--focused": P
                }),
                "aria-selected": U,
                children: t.map((Z, X) => {
                  const q = Z.tableRenderer ? Z.tableRenderer(L) : Z.render ? Z.render(L) : L[Z.key], ne = w === "cells" && S === G && v === X, ue = () => typeof q == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: q ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: q ? "Yes" : "No" })
                  ] }) : String(q ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: De("data-cell", {
                        "data-cell--focused": ne
                      }),
                      tabIndex: ne ? 0 : -1,
                      onClick: () => {
                        $("cells"), j(G), b(X), E("navigate"), H(G, X), B(G);
                      },
                      children: ue()
                    },
                    Z.key
                  );
                })
              },
              G
            );
          }) })
        ]
      }
    );
  }
);
qh.displayName = "AriaDataGrid";
const Kn = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: o = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: a,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = qe(null), p = qe(null), h = qe(null), x = _e((b, w) => {
    c || (p.current = w, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", w));
  }, [c]), m = _e((b, w) => {
    c || p.current === w || (b.preventDefault(), b.dataTransfer.dropEffect = "move", h.current = w);
  }, [c]), g = _e((b, w) => {
    if (c) return;
    b.preventDefault();
    const $ = p.current;
    if (!$ || $ === w) return;
    const I = e.findIndex((N) => N.key === $), E = e.findIndex((N) => N.key === w);
    if (I !== -1 && E !== -1) {
      const N = [...e], [C] = N.splice(I, 1);
      N.splice(E, 0, C), r(N);
    }
    p.current = null, h.current = null;
  }, [c, e, r]), _ = _e(() => {
    p.current = null, h.current = null;
  }, []), M = _e((b) => {
    const w = t.find(($) => $.key === b);
    return w ? w.label : b;
  }, [t]), T = _e((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), k = _e((b) => {
    if (c) return;
    const w = e.map(
      ($) => $.key === b ? { ...$, direction: $.direction === "asc" ? "desc" : "asc" } : $
    );
    r(w);
  }, [e, r, c]), y = _e((b) => {
    if (c) return;
    const w = e.filter(($) => $.key !== b);
    r(w);
  }, [e, r, c]), S = _e(() => {
    c || r([]);
  }, [r, c]), j = () => {
    if (e.length === 0)
      return s;
    if (a)
      return a;
    const b = e.map((w, $) => {
      const I = w.direction === "asc" ? "ascending" : "descending";
      return `${$ + 1}. ${M(w.key)} (${I})`;
    });
    if (b.length === 1)
      return `Sorted by: ${b[0]}`;
    if (b.length === 2)
      return `Sorted by: ${b.join(" and ")}`;
    {
      const w = b.pop();
      return `Sorted by: ${b.join(", ")}, and ${w}`;
    }
  }, v = ze(() => {
    const b = ["sort-description"];
    return l && b.push("sort-help"), u && b.push(u), b.join(" ");
  }, [l, u]);
  return e.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${o}`, children: [
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
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${o}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: j()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": d,
          "aria-describedby": v,
          children: e.map((b, w) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: ($) => x($, b.key),
              onDragOver: ($) => m($, b.key),
              onDrop: ($) => g($, b.key),
              onDragEnd: _,
              onClick: () => k(b.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ n.jsx(
                at,
                {
                  color: T(w),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => y(b.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${w + 1}`, children: w + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: M(b.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: ($) => {
                          $.stopPropagation(), k(b.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${M(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
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
        wt,
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
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function Jh(e, t) {
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
      const s = [...e.selectedRows];
      return s[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: s };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: a } = t.payload, i = new Array(a).fill(!1), l = new Array(a).fill(null), c = new Array(a).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, a); d++)
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
const fs = zn(function(t, r) {
  const {
    dataConfig: o = {},
    tabPanels: s,
    selectedIndex: a,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: c,
    ariaDescription: d,
    className: u = "",
    disabled: f = !1,
    orientation: p = "horizontal",
    id: h,
    isLoading: x = !1,
    loadingComponent: m,
    error: g = null,
    errorComponent: _,
    "data-testid": M,
    actions: T,
    actionsMinGap: k = 16,
    forceActionsAbove: y = !1,
    hideTabsIfSingle: S = !1,
    minColumnWidth: j,
    enableColumnCollapse: v = !1,
    minVisibleColumns: b = 2,
    showCollapsedColumnsIndicator: w = !0,
    sortStatusPlacement: $ = "header"
  } = t, I = S && s.length === 1, E = Qn(), N = h ?? `aria-tabs-datagrid-${E}`, C = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), D = `${N}-description`, H = `${N}-navigation-help`, {
    dataComparator: J = (z, te) => JSON.stringify(z) === JSON.stringify(te),
    filterFunction: ee = (z) => z,
    booleanRenderer: B = (z) => z ? "✓" : "✗"
  } = o || {}, K = a !== void 0, A = a ?? 0, [L, G] = Ve({
    focusArea: I ? "headers" : "tabs",
    focusedTabIndex: A,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), U = ze(() => ({
    selectedIndex: A,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [A]), [P, Z] = Hi(Jh, U);
  rt(() => {
    const z = P.tabLoadingStates.length, te = s.length;
    z !== te && Z({ type: "ADJUST_ARRAYS", payload: { newLength: te } });
  }, [s.length]), rt(() => {
    K && Z({ type: "SET_SELECTED_INDEX", payload: A });
  }, [A, K]), rt(() => {
    G((z) => ({
      ...z,
      focusArea: I ? "headers" : "tabs",
      focusedTabIndex: P.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [P.selectedIndex, I]);
  const X = qe(null), q = _e((z) => {
    z.shiftKey && (z.key === "ArrowLeft" ? (z.preventDefault(), X.current?.scrollBy({ left: -64, behavior: "smooth" })) : z.key === "ArrowRight" && (z.preventDefault(), X.current?.scrollBy({ left: 64, behavior: "smooth" })));
  }, []), [ne, ue] = Ve({}), [W, se] = Ve(!1), ce = qe(null), ye = qe(null), he = _e((z) => {
    const te = s[z];
    if (!te) return [];
    const ge = ne[z] || /* @__PURE__ */ new Set();
    return te.columns.filter((me) => !ge.has(me.key));
  }, [s, ne]), Me = _e((z) => {
    const te = s[z];
    if (!te) return /* @__PURE__ */ new Set();
    if (!v) return /* @__PURE__ */ new Set();
    const ge = X.current?.parentElement;
    if (!ge) return /* @__PURE__ */ new Set();
    const me = typeof j == "number" ? `${j}px` : j || "160px", xe = te.columns.map((Pe, Oe) => ({
      key: Pe.key,
      min: Pe.minWidth !== void 0 ? typeof Pe.minWidth == "number" ? `${Pe.minWidth}px` : String(Pe.minWidth) : me,
      priority: Pe.collapsePriority ?? Oe,
      lock: !!Pe.alwaysVisible,
      group: Pe.collapseGroup,
      groupPriority: Pe.collapseGroupPriority ?? 0
    })), Se = (Pe) => {
      if (Pe.endsWith("px")) return parseFloat(Pe);
      const Oe = document.createElement("div");
      Oe.style.width = Pe, ge.appendChild(Oe);
      const Lt = Oe.getBoundingClientRect().width;
      return Oe.remove(), Lt || 0;
    }, Re = xe.reduce((Pe, Oe) => Pe + Se(Oe.min), 0), Ce = ge.clientWidth;
    if (Re <= Ce || xe.length <= b) return /* @__PURE__ */ new Set();
    const je = xe.map((Pe, Oe) => ({ ...Pe, idx: Oe })), ve = /* @__PURE__ */ new Map();
    for (const Pe of je)
      if (Pe.group) {
        const Oe = ve.get(Pe.group) || { keys: [], width: 0, groupPriority: Pe.groupPriority, lock: !1, indices: [] };
        Oe.keys.push(Pe.key), Oe.width += Se(Pe.min), Oe.groupPriority = Math.max(Oe.groupPriority, Pe.groupPriority), Oe.lock = Oe.lock || Pe.lock, Oe.indices.push(Pe.idx), ve.set(Pe.group, Oe);
      }
    const Ne = [];
    for (const [Pe, Oe] of ve)
      Oe.lock || Ne.push({ type: "group", keys: Oe.keys, width: Oe.width, priority: Oe.groupPriority, rightmostIndex: Math.max(...Oe.indices) });
    for (const Pe of je)
      !Pe.group && !Pe.lock && Ne.push({ type: "column", keys: [Pe.key], width: Se(Pe.min), priority: Pe.priority, rightmostIndex: Pe.idx });
    Ne.sort((Pe, Oe) => Pe.priority !== Oe.priority ? Oe.priority - Pe.priority : Oe.rightmostIndex - Pe.rightmostIndex);
    let Ke = /* @__PURE__ */ new Set(), st = Re;
    const $e = xe.length;
    for (const Pe of Ne) {
      if ($e - Ke.size <= b) break;
      if (st - Pe.width >= Ce) {
        for (const Oe of Pe.keys) Ke.add(Oe);
        st -= Pe.width;
      } else
        continue;
    }
    return Ke;
  }, [s, v, j, b]);
  rt(() => {
    if (!v) return;
    const z = () => {
      const ge = Me(P.selectedIndex);
      if (ue((me) => ({ ...me, [P.selectedIndex]: ge })), w && ye.current) {
        const me = ge.size;
        ye.current.textContent = me > 0 ? `${me} column${me === 1 ? "" : "s"} collapsed` : "All columns visible";
      }
    };
    z();
    const te = new ResizeObserver(z);
    return re.current && te.observe(re.current), () => {
      te.disconnect();
    };
  }, [P.selectedIndex, s, v, Me, w]), rt(() => {
    l && l(P.globalSelectedRowData);
  }, [P.globalSelectedRowData, l]);
  const Ge = _e(
    (z, te) => J(z, te),
    [J]
  ), Te = _e(
    (z) => {
      z >= 0 && z < s.length && !s[z].disabled && (Z({ type: "SET_SELECTED_INDEX", payload: z }), G((te) => ({
        ...te,
        focusedTabIndex: z,
        focusArea: "tabs"
      })), i?.(z));
    },
    [s, i]
  ), Le = qe(!1), we = _e(
    (z, te) => {
      if (!te?.force && !Le.current && z === 0) {
        Le.current = !0;
        return;
      }
      Le.current = !0, setTimeout(() => {
        const ge = F.current[z], me = ge?.parentElement;
        if (ge && me) {
          const xe = ge.offsetLeft, Se = ge.offsetWidth, Re = me.clientWidth, Ce = xe - Re / 2 + Se / 2;
          try {
            me.scrollTo({
              left: Math.max(0, Ce),
              behavior: "smooth"
            });
          } catch {
            ge.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!ge,
          tabListElementExists: !!me
        });
      }, 50);
    },
    []
  ), F = qe([]), Y = qe([]), ae = _e(
    (z, te) => {
      const ge = P.sortConfig || [], me = ge.find(
        (Re) => Re.key === te
      );
      let xe;
      me ? me.direction === "asc" ? xe = ge.map(
        (Re) => Re.key === te ? { ...Re, direction: "desc" } : Re
      ) : xe = ge.filter(
        (Re) => Re.key !== te
      ) : xe = [...ge, { key: te, direction: "asc" }], Z({
        type: "SET_SORT",
        payload: xe
      }), s[z].onSort?.(te);
    },
    [P.sortConfig, s]
  ), fe = _e(
    (z) => {
      setTimeout(() => {
        const te = document.querySelector(
          `[data-tab-panel="${P.selectedIndex}"] th:nth-child(${z + 1})`
        );
        te && te.focus();
      }, 0);
    },
    [P.selectedIndex]
  ), pe = _e(
    (z) => B(z),
    [B]
  ), R = _e(
    (z, te) => {
      setTimeout(() => {
        const ge = document.querySelector(
          `[data-tab-panel="${P.selectedIndex}"] tbody tr:nth-child(${z + 1}) td:nth-child(${te + 1})`
        );
        ge && ge.focus();
      }, 0);
    },
    [P.selectedIndex]
  );
  rt(() => {
    L.isGridActive && (L.focusArea === "headers" ? setTimeout(() => {
      fe(L.focusedHeaderIndex);
    }, 0) : L.focusArea === "cells" && setTimeout(() => {
      R(
        L.focusedRowIndex,
        L.focusedColumnIndex
      );
    }, 0));
  }, [
    L.focusArea,
    L.isGridActive,
    L.focusedHeaderIndex,
    L.focusedRowIndex,
    L.focusedColumnIndex,
    fe,
    R
  ]), rt(() => {
    I || we(P.selectedIndex);
  }, [P.selectedIndex, we, I]);
  const O = _e(
    (z, te) => {
      const { key: ge } = z, me = he(P.selectedIndex).length || 0;
      switch (ge) {
        case "ArrowLeft":
          z.preventDefault();
          const xe = Math.max(0, te - 1);
          G((je) => ({
            ...je,
            focusedHeaderIndex: xe
          })), fe(xe);
          break;
        case "ArrowRight":
          z.preventDefault();
          const Se = Math.min(me - 1, te + 1);
          G((je) => ({
            ...je,
            focusedHeaderIndex: Se
          })), fe(Se);
          break;
        case "ArrowUp":
          z.preventDefault(), I ? T && setTimeout(() => {
            const je = de.current;
            if (!je) return;
            je.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )?.focus();
          }, 0) : (G((je) => ({
            ...je,
            focusArea: "tabs",
            focusedTabIndex: P.selectedIndex
          })), we(P.selectedIndex), F.current[P.selectedIndex]?.focus());
          break;
        case "ArrowDown":
          z.preventDefault(), G((je) => ({
            ...je,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: te,
            isGridActive: !0
          }));
          break;
        case "Home":
          z.preventDefault(), G((je) => ({ ...je, focusedHeaderIndex: 0 })), fe(0);
          break;
        case "End":
          z.preventDefault();
          const Re = me - 1;
          G((je) => ({
            ...je,
            focusedHeaderIndex: Re
          })), fe(Re);
          break;
        case "Enter":
        case " ":
          z.preventDefault();
          const Ce = he(P.selectedIndex)[te]?.key;
          Ce && ae(P.selectedIndex, Ce);
          break;
      }
    },
    [
      s,
      P.selectedIndex,
      ae,
      G,
      fe,
      R,
      F,
      he
    ]
  ), oe = _e(
    (z, te, ge) => {
      const { key: me } = z, xe = s[P.selectedIndex], Se = xe?.data.length || 0, Re = he(P.selectedIndex).length || 0;
      switch (me) {
        case "ArrowUp":
          if (z.preventDefault(), te === 0)
            G((Ne) => ({
              ...Ne,
              focusArea: "headers",
              focusedHeaderIndex: ge,
              isGridActive: !1
            })), fe(ge);
          else {
            const Ne = te - 1;
            G((Ke) => ({
              ...Ke,
              focusedRowIndex: Ne
            })), R(Ne, ge);
          }
          break;
        case "ArrowDown":
          z.preventDefault();
          const Ce = Math.min(Se - 1, te + 1);
          G((Ne) => ({
            ...Ne,
            focusedRowIndex: Ce
          })), R(Ce, ge);
          break;
        case "ArrowLeft":
          z.preventDefault();
          const je = Math.max(0, ge - 1);
          G((Ne) => ({
            ...Ne,
            focusedColumnIndex: je
          })), R(te, je);
          break;
        case "ArrowRight":
          z.preventDefault();
          const ve = Math.min(Re - 1, ge + 1);
          G((Ne) => ({
            ...Ne,
            focusedColumnIndex: ve
          })), R(te, ve);
          break;
        case "Home":
          z.preventDefault(), z.ctrlKey ? (G((Ne) => ({
            ...Ne,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), R(0, 0)) : (G((Ne) => ({ ...Ne, focusedColumnIndex: 0 })), R(te, 0));
          break;
        case "End":
          if (z.preventDefault(), z.ctrlKey) {
            const Ne = Se - 1, Ke = Re - 1;
            G((st) => ({
              ...st,
              focusedRowIndex: Ne,
              focusedColumnIndex: Ke
            })), R(Ne, Ke);
          } else {
            const Ne = Re - 1;
            G((Ke) => ({
              ...Ke,
              focusedColumnIndex: Ne
            })), R(te, Ne);
          }
          break;
        case "Enter":
        case " ":
          if (z.preventDefault(), xe && xe.data[te]) {
            const Ne = xe.data.some(
              ($e) => "ews_data" in $e
            ) ? ee(xe.data, P.filters) : xe.data, Ke = P.sortConfig;
            let st = Ne;
            if (Ke && Ke.length > 0) {
              const $e = us(xe.columns, Ke, Bn.Last, o?.sortingOptions);
              st = [...Ne].sort($e);
            }
            if (st[te]) {
              const $e = st[te], Oe = P.globalSelectedRowData && Ge(P.globalSelectedRowData, $e) ? null : $e;
              Z({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Oe
              });
            }
          }
          break;
      }
    },
    [
      s,
      P.selectedIndex,
      P.filters,
      P.sortConfig,
      ee,
      Ge,
      Z,
      G,
      fe,
      R,
      he
    ]
  ), Q = _e(
    (z, te) => ee(z, te),
    [ee]
  );
  if (Bi(
    r,
    () => ({
      selectTab: (z) => {
        z >= 0 && z < s.length && (Z({ type: "SET_SELECTED_INDEX", payload: z }), i?.(z));
      },
      refreshData: (z) => {
        console.log("Refreshing data for tab:", z ?? "all");
      },
      exportData: (z) => {
        const te = z ?? P.selectedIndex, ge = s[te];
        return ge ? ge.data : [];
      },
      getSelectedRows: (z) => P.globalSelectedRowData ? [] : [],
      clearSelection: (z) => {
        Z({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (z) => {
        Z({ type: "SET_FILTERS", payload: z });
      }
    }),
    [P.selectedIndex, P.selectedRows, s, i]
  ), x)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": M,
        children: m || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
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
        "data-testid": M,
        children: _ || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: g })
        ] })
      }
    );
  const re = qe(null), le = qe(null), de = qe(null), [be, ke] = Ve(!0);
  rt(() => {
    if (!T) {
      ke(!1);
      return;
    }
    if (I || y) {
      ke(!1);
      return;
    }
    function z() {
      if (!re.current || !le.current || !de.current) return;
      const me = re.current.clientWidth, xe = Array.from(
        le.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), Se = xe.reduce((ve, Ne) => ve + Ne.offsetWidth, 0), Re = de.current.offsetWidth, Ce = Math.max(8 * (xe.length - 1), 0), je = Se + Ce + Re + k <= me;
      ke(je);
    }
    const te = requestAnimationFrame(() => z()), ge = new ResizeObserver(() => z());
    return re.current && ge.observe(re.current), le.current && ge.observe(le.current), () => {
      cancelAnimationFrame(te), ge.disconnect();
    };
  }, [T, k, y, s.length, I]);
  const Be = de, Ye = _e(() => Be.current ? Array.from(
    Be.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((z) => !z.hasAttribute("disabled")) : [], []), lt = _e(
    (z) => {
      const te = Ye();
      if (!te.length) return;
      const ge = Math.max(0, Math.min(z, te.length - 1));
      te[ge].focus(), G((me) => ({ ...me, focusArea: "actions", focusedActionIndex: ge }));
    },
    [Ye]
  ), Qe = _e(() => lt(0), [lt]), ie = _e(
    (z, te) => {
      const { key: ge } = z, me = s.length - 1;
      switch (ge) {
        case "ArrowUp": {
          T && !be && (z.preventDefault(), Qe());
          break;
        }
        case "ArrowLeft": {
          z.preventDefault();
          const xe = te > 0 ? te - 1 : me;
          Te(xe), we(xe), F.current[xe]?.focus();
          break;
        }
        case "ArrowRight": {
          if (z.preventDefault(), te === me && T && be) {
            Qe();
            return;
          }
          const xe = te < me ? te + 1 : 0;
          Te(xe), we(xe), F.current[xe]?.focus();
          break;
        }
        case "ArrowDown": {
          z.preventDefault(), G((xe) => ({
            ...xe,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          z.preventDefault(), Te(0), we(0), F.current[0]?.focus();
          break;
        }
        case "End": {
          z.preventDefault(), Te(me), we(me), F.current[me]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          z.preventDefault(), Te(te);
          break;
        }
        case "Tab": {
          !z.shiftKey && te === me && T && be && Qe();
          break;
        }
      }
    },
    [s.length, Te, we, T, be, Qe]
  ), Ae = _e((z) => {
    const { key: te } = z, ge = Ye();
    if (!ge.length) return;
    const me = ge.findIndex((xe) => xe === document.activeElement);
    switch (te) {
      case "ArrowLeft": {
        if (be)
          if (me > 0)
            z.preventDefault(), lt(me - 1);
          else {
            z.preventDefault();
            const xe = s.length - 1;
            Te(xe), we(xe), F.current[xe]?.focus(), G((Se) => ({ ...Se, focusArea: "tabs", focusedTabIndex: xe }));
          }
        break;
      }
      case "ArrowRight": {
        be && (me < ge.length - 1 ? (z.preventDefault(), lt(me + 1)) : (z.preventDefault(), Te(0), we(0), F.current[0]?.focus(), G((xe) => ({ ...xe, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (be)
          z.preventDefault(), G((xe) => ({ ...xe, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          z.preventDefault();
          const xe = P.selectedIndex;
          F.current[xe]?.focus(), G((Se) => ({ ...Se, focusArea: "tabs", focusedTabIndex: xe }));
        }
        break;
      }
    }
  }, [Ye, be, lt, s.length, Te, we, P.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${u}`,
      id: h,
      "data-testid": M,
      ref: re,
      children: [
        d && !C && /* @__PURE__ */ n.jsx("div", { id: D, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: H,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        $ === "header" && /* @__PURE__ */ n.jsx(
          Kn,
          {
            sortConfig: P.sortConfig || [],
            columns: s.flatMap((z) => z.columns.map((te) => ({ key: te.key, label: te.label }))).filter((z, te, ge) => ge.findIndex((me) => me.key === z.key) === te),
            onSortChange: (z) => {
              Z({ type: "SET_SORT", payload: z });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        T && (!be || I) && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: de,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Ae,
            children: T
          }
        ),
        !I && /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${be ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? C ? d : D : H,
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              ref: le,
              children: s.map((z, te) => {
                const ge = te === P.selectedIndex, me = z.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${z.id}`,
                    "aria-controls": `panel-${z.id}`,
                    "aria-selected": ge,
                    "aria-disabled": me,
                    tabIndex: ge ? 0 : -1,
                    ref: (xe) => {
                      F.current[te] = xe;
                    },
                    onClick: () => Te(te),
                    onKeyDown: (xe) => ie(xe, te),
                    disabled: me,
                    className: [
                      "aria-tabs-datagrid__tab",
                      ge ? "aria-tabs-datagrid__tab--selected" : "",
                      me ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: z.label }),
                      P.tabLoadingStates[te] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      P.tabErrors[te] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  z.id
                );
              })
            }
          ),
          T && be && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: de,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Ae,
              children: T
            }
          )
        ] }),
        v && w && (() => {
          const z = I ? 0 : P.selectedIndex, te = ne[z] || /* @__PURE__ */ new Set();
          if (te.size === 0) return null;
          const ge = s[z], me = ge ? ge.columns.filter((xe) => te.has(xe.key)).map((xe) => xe.label) : [];
          return /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__collapsed-indicator", children: [
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "nhsuk-u-visually-hidden",
                "aria-live": "polite",
                ref: ye
              }
            ),
            /* @__PURE__ */ n.jsxs("div", { className: "collapsed-chip-wrapper", children: [
              /* @__PURE__ */ n.jsxs(
                "button",
                {
                  ref: ce,
                  type: "button",
                  className: "collapsed-chip",
                  title: `Collapsed columns: ${me.join(", ")}`,
                  onClick: () => se((xe) => !xe),
                  children: [
                    te.size,
                    " hidden column",
                    te.size === 1 ? "" : "s"
                  ]
                }
              ),
              W && /* @__PURE__ */ n.jsx("div", { className: "collapsed-popover", role: "dialog", "aria-label": "Collapsed columns", children: /* @__PURE__ */ n.jsx("ul", { children: me.map((xe, Se) => /* @__PURE__ */ n.jsx("li", { children: xe }, Se)) }) })
            ] })
          ] });
        })(),
        $ === "above" && /* @__PURE__ */ n.jsx(
          Kn,
          {
            sortConfig: P.sortConfig || [],
            columns: s.flatMap((z) => z.columns.map((te) => ({ key: te.key, label: te.label }))).filter((z, te, ge) => ge.findIndex((me) => me.key === z.key) === te),
            onSortChange: (z) => {
              Z({ type: "SET_SORT", payload: z });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        s.map((z, te) => {
          const ge = I ? te === 0 : te === P.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: I ? void 0 : "tabpanel",
              id: I ? void 0 : `panel-${z.id}`,
              "aria-labelledby": I ? void 0 : `tab-${z.id}`,
              tabIndex: 0,
              hidden: !ge,
              ref: (me) => {
                Y.current[te] = me;
              },
              className: `aria-tabs-datagrid__panel ${z.className || ""}`,
              "data-tab-panel": te,
              children: ge && (() => {
                const me = z.data.some(
                  (Se) => "ews_data" in Se
                ) ? Q(z.data, P.filters) : z.data, xe = ze(() => {
                  const Se = P.sortConfig;
                  if (!Se || Se.length === 0) return me;
                  const Re = us(z.columns, Se, Bn.Last, o?.sortingOptions);
                  return [...me].sort(Re);
                }, [me, P.sortConfig, z.columns, o?.sortingOptions]);
                return /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: "aria-tabs-datagrid__scroll",
                    ref: X,
                    onKeyDown: q,
                    style: {
                      // Expose CSS var to SCSS; inline for SSR safety
                      "--atd-min-col-w": typeof j == "number" ? `${j}px` : j || void 0
                    },
                    children: /* @__PURE__ */ n.jsxs(
                      "table",
                      {
                        className: "nhsuk-table aria-tabs-datagrid__grid",
                        role: "grid",
                        "aria-label": z.ariaLabel,
                        "aria-describedby": z.ariaDescription ? `panel-${z.id}-description` : void 0,
                        children: [
                          z.ariaDescription && /* @__PURE__ */ n.jsx(
                            "caption",
                            {
                              className: "nhsuk-u-visually-hidden",
                              id: `panel-${z.id}-description`,
                              children: z.ariaDescription
                            }
                          ),
                          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: he(te).map((Se, Re) => {
                            const Ce = P.sortConfig?.find(
                              (Ne) => Ne.key === Se.key
                            ), je = !!Ce, ve = L.focusArea === "headers" && L.focusedHeaderIndex === Re;
                            return /* @__PURE__ */ n.jsx(
                              "th",
                              {
                                className: `sortable-header ${ve ? "sortable-header--focused" : ""} ${je ? "sortable-header--sorted" : ""}`,
                                role: "columnheader",
                                tabIndex: ve ? 0 : -1,
                                onClick: () => ae(te, Se.key),
                                onKeyDown: (Ne) => O(Ne, Re),
                                "aria-sort": je ? Ce?.direction === "asc" ? "ascending" : "descending" : "none",
                                style: { minWidth: Se.minWidth !== void 0 ? typeof Se.minWidth == "number" ? `${Se.minWidth}px` : Se.minWidth : typeof j == "number" ? `${j}px` : j || void 0 },
                                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: Se.label }),
                                  /* @__PURE__ */ n.jsxs(
                                    "div",
                                    {
                                      className: `sort-indicator-container ${je ? `sort-indicator--${Ce?.direction}` : ""}`,
                                      children: [
                                        P.sortConfig && P.sortConfig.length > 0 && P.sortConfig.findIndex(
                                          (Ne) => Ne.key === Se.key
                                        ) !== -1 && /* @__PURE__ */ n.jsx(
                                          "span",
                                          {
                                            className: `sort-priority sort-priority--priority-${P.sortConfig.findIndex((Ne) => Ne.key === Se.key) + 1}`,
                                            "data-priority": P.sortConfig.findIndex(
                                              (Ne) => Ne.key === Se.key
                                            ) + 1,
                                            title: `Sort priority: ${P.sortConfig.findIndex((Ne) => Ne.key === Se.key) + 1}`,
                                            children: P.sortConfig.findIndex(
                                              (Ne) => Ne.key === Se.key
                                            ) + 1
                                          }
                                        ),
                                        je && /* @__PURE__ */ n.jsx(
                                          "svg",
                                          {
                                            className: `nhsuk-icon sort-arrow sort-arrow--${Ce?.direction}`,
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
                              Se.key
                            );
                          }) }) }),
                          /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: xe.map((Se, Re) => {
                            const Ce = P.globalSelectedRowData && Ge(P.globalSelectedRowData, Se), je = L.focusArea === "cells" && L.focusedRowIndex === Re;
                            return /* @__PURE__ */ n.jsx(
                              "tr",
                              {
                                role: "row",
                                className: `data-row ${Ce ? "data-row--selected" : ""} ${je ? "data-row--focused" : ""}`,
                                "aria-selected": Ce,
                                children: he(te).map((ve, Ne) => {
                                  const Ke = Se[ve.key];
                                  let st;
                                  ve.tableRenderer ? st = ve.tableRenderer(Se) : ve.render ? st = ve.render(Se) : st = Ke;
                                  const $e = L.focusArea === "cells" && L.focusedRowIndex === Re && L.focusedColumnIndex === Ne, Pe = () => {
                                    if (ve.customRenderer) {
                                      const Oe = ve.customRenderer(
                                        Ke,
                                        Se
                                      );
                                      return /* @__PURE__ */ n.jsx(
                                        "span",
                                        {
                                          className: "data-cell__custom",
                                          "data-custom-rendered": "true",
                                          children: Oe
                                        }
                                      );
                                    }
                                    return typeof Ke == "boolean" && st === Ke ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                      pe(Ke),
                                      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ke ? "Yes" : "No" })
                                    ] }) : nt.isValidElement(st) || typeof st != "object" ? st ?? "" : st;
                                  };
                                  return /* @__PURE__ */ n.jsx(
                                    "td",
                                    {
                                      role: "gridcell",
                                      className: `data-cell ${$e ? "data-cell--focused" : ""}`,
                                      tabIndex: $e ? 0 : -1,
                                      style: { minWidth: ve.minWidth !== void 0 ? typeof ve.minWidth == "number" ? `${ve.minWidth}px` : ve.minWidth : typeof j == "number" ? `${j}px` : j || void 0 },
                                      onClick: () => {
                                        const Lt = P.globalSelectedRowData && Ge(
                                          P.globalSelectedRowData,
                                          Se
                                        ) ? null : Se;
                                        Z({
                                          type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                          payload: Lt
                                        });
                                      },
                                      onKeyDown: (Oe) => oe(Oe, Re, Ne),
                                      children: Pe()
                                    },
                                    ve.key
                                  );
                                })
                              },
                              Re
                            );
                          }) })
                        ]
                      }
                    )
                  }
                );
              })()
            },
            z.id
          );
        }),
        $ === "below" && /* @__PURE__ */ n.jsx(
          Kn,
          {
            sortConfig: P.sortConfig || [],
            columns: s.flatMap((z) => z.columns.map((te) => ({ key: te.key, label: te.label }))).filter((z, te, ge) => ge.findIndex((me) => me.key === z.key) === te),
            onSortChange: (z) => {
              Z({ type: "SET_SORT", payload: z });
            },
            ariaLabel: "Data grid sort configuration"
          }
        )
      ]
    }
  );
}), kr = {
  asc: "↑",
  desc: "↓"
}, Xh = (e) => [...e].sort((t, r) => t.priority - r.priority);
function Vo(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Kh(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Qh(e, t) {
  const r = t.find((o) => o.id === e);
  return r ? r.priority > 0 : !1;
}
function ep(e, t) {
  const r = t.find((s) => s.id === e), o = Kh(t);
  return r ? r.priority < o : !1;
}
const c1 = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: a = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = ze(() => Xh(e), [e]), f = _e(
    (M) => {
      if (l) return;
      const T = e.map(
        (k) => k.id === M ? {
          ...k,
          direction: k.direction === "asc" ? "desc" : "asc"
        } : k
      );
      t(T);
    },
    [e, t, l]
  ), p = _e(
    (M) => {
      if (l) return;
      const T = e.findIndex((y) => y.id === M);
      if (T <= 0) return;
      const k = [...e];
      [k[T], k[T - 1]] = [
        k[T - 1],
        k[T]
      ], t(Vo(k));
    },
    [e, t, l]
  ), h = _e(
    (M) => {
      if (l) return;
      const T = e.findIndex((y) => y.id === M);
      if (T >= e.length - 1 || T === -1) return;
      const k = [...e];
      [k[T], k[T + 1]] = [
        k[T + 1],
        k[T]
      ], t(Vo(k));
    },
    [e, t, l]
  ), x = _e(
    (M) => {
      if (l) return;
      const T = e.filter(
        (k) => k.id !== M
      );
      t(Vo(T));
    },
    [e, t, l]
  ), m = _e(() => {
    l || t([]);
  }, [t, l]), g = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const M = u.map((T, k) => {
      const y = T.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${T.label} (${y})`;
    });
    if (M.length === 1)
      return `Sorted by: ${M[0]}`;
    if (M.length === 2)
      return `Sorted by: ${M.join(" and ")}`;
    {
      const T = M.pop();
      return `Sorted by: ${M.join(", ")}, and ${T}`;
    }
  }, _ = ze(() => {
    const M = ["sort-description"];
    return i && M.push("sort-help"), d && M.push(d), M.join(" ");
  }, [i, d]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: `sort-status-control sort-status-control--empty ${r}`,
      children: /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "sort-status-control__description",
          id: "sort-description",
          "aria-live": "polite",
          children: g()
        }
      )
    }
  ) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
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
        "aria-label": c,
        "aria-describedby": _,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((M) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                at,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(M.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: M.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: M.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(M.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${M.label}. Currently ${M.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: M.direction === "asc" ? kr.asc : kr.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(M.id),
                          disabled: l || !Qh(M.id, e),
                          "aria-label": `Move ${M.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(M.id),
                          disabled: l || !ep(M.id, e),
                          "aria-label": `Move ${M.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            M.id
          ))
        ]
      }
    ),
    a && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      wt,
      {
        variant: "secondary",
        onClick: m,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      kr.asc,
      "/",
      kr.desc,
      " ",
      "to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ia = (e, t) => t.map((r) => ({
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
})), hs = [
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
], tp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), np = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [o, s] = t.ewsScoreRange;
    if (r.ews_score < o || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, rp = (e) => {
  if (typeof e == "boolean") {
    const r = hs.find((o) => o.value === e);
    return r ? r.icon : null;
  }
  const t = hs.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, op = (e) => `${e.name}-${e.bed_name}`, sp = () => ({
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
}), d1 = (e) => {
  const t = sp();
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
}, ap = {
  dataComparator: tp,
  filterFunction: np,
  booleanRenderer: rp,
  getDataId: op
};
function si(e, t, r) {
  const {
    primaryField: o,
    secondaryFields: s = [],
    badges: a = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = r, f = t.find((T) => T.key === o), p = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[o || "name"] || "Untitled", h = () => s.filter((k) => !i.includes(k) && e[k]).slice(0, 3).map((k) => {
    const y = t.find((b) => b.key === k), S = e[k], j = d[k] ? d[k](S, e) : y?.cardRenderer ? y.cardRenderer(e) : y?.render ? y.render(e) : S;
    return `${y?.label || k}: ${j}`;
  }).join(" • "), x = () => a.length === 0 ? null : a.filter((T) => e[T.fieldKey] !== void 0).map((T) => {
    const k = e[T.fieldKey], y = T.render ? T.render(k, e) : k;
    return `<span class="nhsuk-tag ${ip(T, k)}">${y}</span>`;
  }).join(""), m = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", g = x(), _ = h(), M = g ? `${_}${g ? `<div class="adaptive-card__badges">${g}</div>` : ""}` : _;
  return {
    variant: m(),
    heading: String(p),
    descriptionHtml: M,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${p}`
  };
}
function ip(e, t) {
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
const lp = {
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
}, kl = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: o,
  priority: s = "medium",
  status: a = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, p = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${a}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${c}, Bed ${d}`,
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
            at,
            {
              color: dp(Ml(u)),
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
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ n.jsx("dd", { children: d })
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
            wt,
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
            wt,
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
            wt,
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
}, Cl = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        at,
        {
          color: up(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        at,
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
      wt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      wt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Nl = ({
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
        at,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        at,
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
      wt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      wt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), jl = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: o = "medium"
}) => {
  const s = e.name, a = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${o}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${s}, EWS Score ${a}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: s }),
            a !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${cp(a)}`, children: [
              "EWS: ",
              a
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
            at,
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
          c !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              c,
              "°C"
            ] })
          ] }),
          d !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: d })
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
            wt,
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
            wt,
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
function Ml(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function cp(e) {
  return Ml(e);
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
function up(e) {
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
const fp = [
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
], Il = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", hp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, pp = (e) => Il(e) === "high" || e.status === "urgent" ? "primary" : "default", mp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, gp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: fp,
  hiddenFields: [],
  getPriority: Il,
  getStatus: hp,
  getVariant: pp,
  fieldRenderers: mp,
  classPrefix: "adaptive-card--healthcare"
}, xp = {
  patient: (e, t, r) => {
    const o = r.getPriority?.(e) || "medium", s = r.getStatus?.(e) || "active", a = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ n.jsx(
      kl,
      {
        data: e,
        columns: t,
        priority: o,
        status: a,
        onSelect: (i) => console.log("Patient selected:", i),
        onAction: (i, l) => console.log("Patient action:", i, l)
      }
    );
  },
  appointment: (e, t, r) => {
    const o = r.getStatus?.(e) || "pending", s = o === "urgent" ? "pending" : o;
    return /* @__PURE__ */ n.jsx(
      Cl,
      {
        data: e,
        columns: t,
        status: s,
        onSelect: (a) => console.log("Appointment selected:", a),
        onAction: (a, i) => console.log("Appointment action:", a, i)
      }
    );
  },
  medication: (e, t, r) => {
    const o = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      Nl,
      {
        data: e,
        columns: t,
        priority: o,
        onSelect: (s) => console.log("Medication selected:", s),
        onAction: (s, a) => console.log("Medication action:", s, a)
      }
    );
  },
  vitals: (e, t, r) => {
    const o = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      jl,
      {
        data: e,
        columns: t,
        priority: o,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, a) => console.log("Vitals action:", s, a)
      }
    );
  }
}, yp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ai = {
  name: "healthcare",
  defaultCardConfig: gp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: xp,
  fieldTypes: yp
};
function ii(e) {
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
function li(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function bp(e, t) {
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
      const s = [...e.selectedRows];
      return s[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: s };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: a } = t.payload, i = new Array(a).fill(!1), l = new Array(a).fill(null), c = new Array(a).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, a); d++)
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
function vp(e, t) {
  const [r, o] = Ve("cards");
  return rt(() => {
    if (t) {
      o(t);
      return;
    }
    const s = () => {
      const a = window.innerWidth;
      a < e.mobile ? o("cards") : a < e.desktop ? o("hybrid") : o("table");
    };
    return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, [e, t]), r;
}
function wp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Sp(e, t, r, o) {
  const s = o ? { ...o.defaultCardConfig, ...r } : { ...lp, ...r };
  if (o && o.cardTemplates) {
    const a = wp(e);
    if (a && o.cardTemplates[a]) {
      const i = o.cardTemplates[a](
        e,
        t,
        s
      );
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(
    e,
    t,
    s
  ), si(e, t, s);
}
const u1 = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: o = {},
  enableAdvancedSorting: s = !1,
  topActions: a,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: c,
  hideTabsIfSingle: d,
  // Overflow/collapse props (typed from ResponsiveDataGridProps)
  minColumnWidth: u,
  enableColumnCollapse: f,
  minVisibleColumns: p,
  showCollapsedColumnsIndicator: h,
  // Additional grid options
  sortStatusPlacement: x,
  // Standard AriaTabsDataGrid props
  tabPanels: m,
  dataConfig: g,
  selectedIndex: _,
  onTabChange: M,
  ariaLabel: T = "Data grid",
  ariaDescription: k,
  orientation: y = "horizontal",
  id: S,
  disabled: j = !1,
  className: v,
  ...b
}) => {
  const w = vp(e, t), $ = _ !== void 0, I = _ ?? 0, E = ze(() => {
    if (m.some(
      (O) => O.data && O.data.length > 0 && li(O.data)
    )) {
      const O = ii(r);
      return {
        ...ai.defaultCardConfig,
        ...O
      };
    } else
      return ii(r);
  }, [r, m]), N = ze(() => m.some(
    (O) => O.data && O.data.length > 0 && li(O.data)
  ) ? ai : void 0, [m]), C = ze(() => ({
    selectedIndex: I,
    tabLoadingStates: new Array(m.length).fill(!1),
    tabErrors: new Array(m.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(m.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [I, m.length]), [D, H] = Hi(bp, C), J = qe([]), ee = qe([]), B = qe([]), K = qe(null), [A, L] = Ve({
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
  }), G = _e(
    (R) => {
      if (!R.current)
        return { columns: 1, rows: 0 };
      const O = R.current, oe = O.querySelectorAll(
        ".aria-tabs-datagrid-adaptive__card-wrapper"
      );
      if (oe.length === 0)
        return { columns: 1, rows: 0 };
      const Q = O.offsetWidth, le = oe[0].offsetWidth, de = Math.floor(Q / le) || 1, be = Math.ceil(oe.length / de);
      return { columns: de, rows: be };
    },
    []
  ), U = _e((R, O) => ({
    row: Math.floor(R / O),
    col: R % O
  }), []), P = _e(
    (R, O, oe) => R * oe + O,
    []
  ), Z = _e(
    (R, O, oe, Q) => {
      const { row: re, col: le } = U(R, Q);
      let de = re, be = le;
      switch (O) {
        case "up":
          de = Math.max(0, re - 1);
          break;
        case "down":
          de = Math.min(Math.floor((oe - 1) / Q), re + 1);
          break;
        case "left":
          be = Math.max(0, le - 1);
          break;
        case "right":
          be = Math.min(Q - 1, le + 1);
          break;
      }
      const ke = P(de, be, Q);
      return Math.min(ke, oe - 1);
    },
    [U, P]
  );
  rt(() => {
    A.isCardNavigationActive && A.focusedCardElementIndex >= 0 && A.cardElements.length > 0 && setTimeout(() => {
      const R = A.cardElements[A.focusedCardElementIndex];
      R && (R.element.focus(), R.element.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      }));
    }, 0);
  }, [
    A.isCardNavigationActive,
    A.focusedCardElementIndex,
    A.cardElements.length
  ]), rt(() => {
    const R = () => {
      if (w === "cards" && K.current) {
        const { columns: Q, rows: re } = G(K);
        L((le) => ({
          ...le,
          gridColumns: Q,
          gridRows: re
        }));
      }
    }, O = setTimeout(R, 200), oe = () => {
      setTimeout(R, 100);
    };
    return window.addEventListener("resize", oe), () => {
      clearTimeout(O), window.removeEventListener("resize", oe);
    };
  }, [w, m, G]), rt(() => {
    const R = D.tabLoadingStates.length, O = m.length;
    R !== O && H({ type: "ADJUST_ARRAYS", payload: { newLength: O } });
  }, [m.length, D.tabLoadingStates.length]), rt(() => {
    $ && _ !== D.selectedIndex && H({ type: "SET_SELECTED_INDEX", payload: _ });
  }, [$, _, D.selectedIndex]);
  const X = _e(
    (R) => {
      R >= 0 && R < m.length && !m[R].disabled && (H({ type: "SET_SELECTED_INDEX", payload: R }), M?.(R));
    },
    [m, M]
  ), q = _e((R) => {
    console.log("Card selected:", R), H({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: R
    });
  }, []), ne = _e((R) => {
    const O = ee.current[R];
    O && (O.focus(), O.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ue = _e((R) => {
    const O = ee.current[R];
    if (!O) return [];
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
    ].join(", "), Q = O.querySelectorAll(
      oe
    );
    return Array.from(Q).map((re, le) => ({
      id: re.id || `card-${R}-element-${le}`,
      element: re,
      label: re.getAttribute("aria-label") || re.textContent?.trim() || re.getAttribute("title") || `Element ${le + 1}`,
      type: re.tagName.toLowerCase() === "button" ? "button" : re.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(
        re.tagName.toLowerCase()
      ) ? "input" : "generic"
    }));
  }, []), W = qe(null), se = _e((R) => {
    const O = W.current;
    if (!O) return;
    const oe = document.createElement("div");
    oe.setAttribute("aria-live", "polite"), oe.setAttribute("aria-atomic", "true"), oe.className = "sr-only", oe.textContent = R, O.appendChild(oe), setTimeout(() => {
      O.contains(oe) && O.removeChild(oe);
    }, 1e3);
  }, []), ce = _e((R) => {
    const O = R.filter((Q) => Q.sortable !== !1), oe = [
      { value: "", label: "Sort by..." }
    ];
    return O.forEach((Q) => {
      const re = Q.label || Q.key;
      Q.key === "name" ? oe.push(
        { value: `${Q.key}-asc`, label: `${re} (A-Z)` },
        { value: `${Q.key}-desc`, label: `${re} (Z-A)` }
      ) : Q.key === "ews_score" || Q.key.includes("score") ? oe.push(
        { value: `${Q.key}-desc`, label: `${re} (High-Low)` },
        { value: `${Q.key}-asc`, label: `${re} (Low-High)` }
      ) : Q.key === "age" || Q.key.includes("date") || Q.key.includes("time") ? oe.push(
        {
          value: `${Q.key}-desc`,
          label: `${re} (Oldest-Youngest)`
        },
        {
          value: `${Q.key}-asc`,
          label: `${re} (Youngest-Oldest)`
        }
      ) : oe.push(
        { value: `${Q.key}-asc`, label: `${re} (A-Z)` },
        { value: `${Q.key}-desc`, label: `${re} (Z-A)` }
      );
    }), oe;
  }, []), ye = _e(
    (R, O) => O ? [...R].sort((oe, Q) => {
      const re = oe[O.key], le = Q[O.key];
      if (re == null && le == null) return 0;
      if (re == null) return 1;
      if (le == null) return -1;
      const de = Number(re), be = Number(le);
      if (!isNaN(de) && !isNaN(be))
        return O.direction === "asc" ? de - be : be - de;
      const ke = String(re).toLowerCase(), Be = String(le).toLowerCase(), Ye = ke.localeCompare(Be);
      return O.direction === "asc" ? Ye : -Ye;
    }) : R,
    []
  ), he = _e(
    (R) => {
      if (!R) {
        L((ke) => ({ ...ke, cardSortConfig: null })), se("Card sorting cleared");
        return;
      }
      const [O, oe] = R.split("-"), Q = { key: O, direction: oe };
      L((ke) => ({ ...ke, cardSortConfig: Q }));
      const de = m[D.selectedIndex]?.columns.find((ke) => ke.key === O)?.label || O;
      se(
        `Cards sorted by ${de} in ${oe === "asc" ? "ascending" : "descending"} order`
      );
    },
    [m, D.selectedIndex, se]
  ), Me = _e(
    (R) => {
      const Q = m[D.selectedIndex]?.columns.find(
        (le) => le.key === R.key
      )?.label || R.key, re = R.direction === "asc" ? "ascending" : "descending";
      return `${Q} (${re})`;
    },
    [m, D.selectedIndex]
  ), Ge = _e(
    (R) => {
      const O = m[D.selectedIndex];
      if (s) {
        const oe = D.sortConfig;
        return !oe || oe.length === 0 ? R : [...R].sort((Q, re) => {
          for (const { key: le, direction: de } of oe) {
            let be = Q[le], ke = re[le];
            const Be = O?.columns.find(
              (z) => z.key === le
            );
            if (Be?.cardRenderer ? (be = Be.cardRenderer(Q), ke = Be.cardRenderer(re)) : Be?.render && (be = Be.render(Q), ke = Be.render(re)), be == null && ke == null) continue;
            if (be == null) return de === "asc" ? -1 : 1;
            if (ke == null) return de === "asc" ? 1 : -1;
            const Ye = Number(be), lt = Number(ke);
            if (!isNaN(Ye) && !isNaN(lt)) {
              const z = Ye - lt;
              if (z !== 0) return de === "asc" ? z : -z;
              continue;
            }
            const Qe = String(be).toLowerCase(), ie = String(ke).toLowerCase(), Ae = Qe.localeCompare(ie);
            if (Ae !== 0) return de === "asc" ? Ae : -Ae;
          }
          return 0;
        });
      } else
        return ye(R, A.cardSortConfig);
    },
    [
      s,
      D.sortConfig,
      A.cardSortConfig,
      ye,
      m,
      D.selectedIndex
    ]
  ), Te = _e(
    (R, O) => {
      const oe = ue(R), Q = oe[O];
      if (Q) {
        Q.element.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
        const re = `Focused on ${Q.label}, ${Q.type} ${O + 1} of ${oe.length} within card`;
        se(re);
      }
    },
    [ue, se]
  ), Le = _e((R) => {
    J.current[R]?.focus();
  }, []), we = _e(() => {
    const R = B.current[0];
    if (!R) return [];
    const O = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), oe = R.querySelectorAll(
      O
    );
    return Array.from(oe);
  }, []), F = _e(
    (R) => {
      if (R === 0) {
        const O = B.current[0], oe = O?.querySelector(
          ".sort-controls-row"
        );
        if (oe) {
          oe.setAttribute("tabindex", "-1"), oe.focus();
          const re = `Sort controls group with ${we().length} interactive elements. Press Enter or Space to begin navigating controls.`;
          se(re);
        } else O && O.focus();
      } else {
        const O = we(), oe = R - 1, Q = O[oe];
        if (Q) {
          Q.focus();
          const re = Q.tagName.toLowerCase() === "select", le = Q.tagName.toLowerCase() === "button", de = re ? "dropdown" : le ? "button" : "control", be = re ? ". Use Space key to open dropdown" : "", ke = `${de} ${oe + 1} of ${O.length}${be}`;
          se(ke);
        }
      }
    },
    [we, se]
  ), Y = _e(
    (R, O) => {
      const { key: oe } = R, Q = m[D.selectedIndex], re = Q?.data.length || 0;
      if (oe === "ArrowLeft" && R.shiftKey) {
        R.preventDefault(), R.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
        return;
      } else if (oe === "ArrowRight" && R.shiftKey) {
        R.preventDefault(), R.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
        return;
      }
      if (!A.isCardNavigationActive) {
        switch (oe) {
          case "ArrowUp":
            if (R.preventDefault(), O === 0)
              L((ke) => ({
                ...ke,
                focusArea: "sort-controls",
                focusedSortControlIndex: 0,
                isSortControlsActive: !1
              })), F(0);
            else {
              const ke = Z(
                O,
                "up",
                re,
                A.gridColumns
              );
              ke !== O && (L((Be) => ({
                ...Be,
                focusedCardIndex: ke
              })), ne(ke), se(
                `Moved to card ${ke + 1} of ${re}`
              ));
            }
            break;
          case "ArrowDown":
            R.preventDefault();
            const le = Z(
              O,
              "down",
              re,
              A.gridColumns
            );
            le !== O && (L((ke) => ({
              ...ke,
              focusedCardIndex: le
            })), ne(le), se(
              `Moved to card ${le + 1} of ${re}`
            ));
            break;
          case "ArrowLeft":
            R.preventDefault();
            const de = Z(
              O,
              "left",
              re,
              A.gridColumns
            );
            de !== O ? (L((ke) => ({
              ...ke,
              focusedCardIndex: de
            })), ne(de), se(
              `Moved to card ${de + 1} of ${re}`
            )) : D.selectedIndex > 0 && (H({
              type: "SET_SELECTED_INDEX",
              payload: D.selectedIndex - 1
            }), L((ke) => ({ ...ke, focusArea: "tabs" })), setTimeout(() => Le(D.selectedIndex - 1), 0));
            break;
          case "ArrowRight":
            R.preventDefault();
            const be = Z(
              O,
              "right",
              re,
              A.gridColumns
            );
            be !== O ? (L((ke) => ({
              ...ke,
              focusedCardIndex: be
            })), ne(be), se(
              `Moved to card ${be + 1} of ${re}`
            )) : D.selectedIndex < m.length - 1 && (H({
              type: "SET_SELECTED_INDEX",
              payload: D.selectedIndex + 1
            }), L((ke) => ({ ...ke, focusArea: "tabs" })), setTimeout(() => Le(D.selectedIndex + 1), 0));
            break;
          case "Enter":
            if (Q?.data[O]) {
              R.preventDefault(), L((Be) => ({
                ...Be,
                selectedCardIndex: O
              }));
              const ke = ue(O);
              ke.length > 0 ? (L((Be) => ({
                ...Be,
                focusArea: "card",
                isCardNavigationActive: !0,
                focusedCardElementIndex: 0,
                cardElements: ke,
                selectedCardIndex: O
                // Ensure selection is maintained
              })), se(
                `Card ${O + 1} selected and navigation activated. ${ke.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`
              )) : se(`Card ${O + 1} selected.`);
            }
            break;
          case " ":
            if (Q?.data[O]) {
              R.preventDefault(), L((Be) => ({
                ...Be,
                selectedCardIndex: Be.selectedCardIndex === O ? -1 : O
              }));
              const ke = A.selectedCardIndex === O;
              se(
                `Card ${O + 1} ${ke ? "deselected" : "selected"}.`
              );
            }
            break;
        }
        return;
      }
      switch (oe) {
        case "ArrowUp":
        case "ArrowLeft":
          R.preventDefault();
          const le = Math.max(
            0,
            A.focusedCardElementIndex - 1
          );
          L((Be) => ({
            ...Be,
            focusedCardElementIndex: le
          })), Te(O, le);
          break;
        case "ArrowDown":
        case "ArrowRight":
          R.preventDefault();
          const de = Math.min(
            A.cardElements.length - 1,
            A.focusedCardElementIndex + 1
          );
          L((Be) => ({
            ...Be,
            focusedCardElementIndex: de
          })), Te(O, de);
          break;
        case "Enter":
          R.preventDefault();
          const be = A.cardElements[A.focusedCardElementIndex];
          be && (be.element.click(), se(`Activated ${be.label}`));
          break;
        case " ":
          R.preventDefault();
          const ke = A.cardElements[A.focusedCardElementIndex];
          if (ke) {
            const Be = new MouseEvent("dblclick", { bubbles: !0 });
            ke.element.dispatchEvent(Be), se(
              `Double-clicked ${ke.label}`
            );
          }
          break;
        case "Escape":
          R.preventDefault(), L((Be) => ({
            ...Be,
            focusArea: "cards",
            isCardNavigationActive: !1,
            focusedCardElementIndex: 0,
            cardElements: []
          })), setTimeout(() => ne(O), 0), se(
            "Exited card navigation, returned to card level"
          );
          break;
        case "Home":
          R.preventDefault(), A.cardElements.length > 0 && (L((Be) => ({
            ...Be,
            focusedCardElementIndex: 0
          })), Te(O, 0));
          break;
        case "End":
          if (R.preventDefault(), A.cardElements.length > 0) {
            const Be = A.cardElements.length - 1;
            L((Ye) => ({
              ...Ye,
              focusedCardElementIndex: Be
            })), Te(O, Be);
          }
          break;
      }
    },
    [
      A,
      D.selectedIndex,
      m,
      q,
      ne,
      Le,
      L,
      ue,
      Te,
      se
    ]
  ), ae = _e((R) => {
    const O = J.current[R], oe = O?.parentElement;
    if (!O || !oe) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const Q = O.getBoundingClientRect(), re = oe.getBoundingClientRect();
    Q.left >= re.left && Q.right <= re.right || (console.log("Tab not visible, scrolling into view (mobile)"), O.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), fe = _e(
    (R, O) => {
      if (w !== "cards")
        return;
      const { key: oe } = R;
      switch (oe) {
        case "ArrowLeft":
          R.preventDefault();
          const Q = O > 0 ? O - 1 : m.length - 1;
          X(Q), L((be) => ({ ...be, focusedTabIndex: Q })), J.current[Q]?.focus(), ae(Q);
          break;
        case "ArrowRight":
          R.preventDefault();
          const re = O < m.length - 1 ? O + 1 : 0;
          X(re), L((be) => ({ ...be, focusedTabIndex: re })), J.current[re]?.focus(), ae(re);
          break;
        case "ArrowDown":
          R.preventDefault();
          const le = m[D.selectedIndex];
          le && le.columns && le.columns.length > 0 ? (L((be) => ({
            ...be,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), F(0)) : (L((be) => ({
            ...be,
            focusArea: "cards",
            focusedCardIndex: 0
          })), ne(0));
          break;
        case "Home":
          R.preventDefault(), X(0), L((be) => ({ ...be, focusedTabIndex: 0 })), J.current[0]?.focus(), ae(0);
          break;
        case "End":
          R.preventDefault();
          const de = m.length - 1;
          X(de), L((be) => ({ ...be, focusedTabIndex: de })), J.current[de]?.focus(), ae(de);
          break;
        case "Enter":
        case " ":
          R.preventDefault(), X(O);
          break;
      }
    },
    [
      m.length,
      X,
      w,
      ne,
      L,
      ae
    ]
  ), pe = _e(
    (R, O) => {
      if (w !== "cards")
        return;
      const { key: oe } = R, Q = m[D.selectedIndex];
      if (O === 0 && !A.isSortControlsActive) {
        switch (oe) {
          case "ArrowUp":
            R.preventDefault(), L((le) => ({
              ...le,
              focusArea: "tabs",
              isSortControlsActive: !1
            })), Le(D.selectedIndex);
            break;
          case "ArrowDown":
            R.preventDefault(), Q?.data && Q.data.length > 0 && (L((le) => ({
              ...le,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), ne(0));
            break;
          case "Enter":
          case " ":
            R.preventDefault();
            const re = we();
            if (re.length > 0) {
              L((de) => ({
                ...de,
                isSortControlsActive: !0,
                focusedSortControlIndex: 1
                // Start with the first actual control (skip container)
              })), F(1);
              const le = `Entered sort controls navigation mode. ${re.length} controls available. Use arrow keys to navigate between controls.`;
              se(le);
            }
            break;
          case "Escape":
            R.preventDefault(), L((le) => ({
              ...le,
              isSortControlsActive: !1,
              focusArea: "tabs"
            })), Le(D.selectedIndex);
            break;
        }
        return;
      }
      if (A.isSortControlsActive) {
        const le = we().length;
        switch (oe) {
          case "ArrowLeft":
            R.preventDefault();
            const de = A.focusedSortControlIndex > 1 ? A.focusedSortControlIndex - 1 : le;
            L((ke) => ({
              ...ke,
              focusedSortControlIndex: de
            })), F(de);
            break;
          case "ArrowRight":
            R.preventDefault();
            const be = A.focusedSortControlIndex < le ? A.focusedSortControlIndex + 1 : 1;
            L((ke) => ({
              ...ke,
              focusedSortControlIndex: be
            })), F(be);
            break;
          case "ArrowDown":
            if (R.preventDefault(), A.isSortControlsActive) {
              const ke = A.focusedSortControlIndex < le ? A.focusedSortControlIndex + 1 : 1;
              L((Be) => ({
                ...Be,
                focusedSortControlIndex: ke
              })), F(ke);
            } else
              Q?.data && Q.data.length > 0 && (L((ke) => ({
                ...ke,
                focusArea: "cards",
                focusedCardIndex: 0,
                isSortControlsActive: !1
              })), ne(0));
            break;
          case "ArrowUp":
            R.preventDefault(), L((ke) => ({
              ...ke,
              isSortControlsActive: !1,
              focusArea: "sort-controls"
            })), F(0);
            break;
          case "Escape":
            R.preventDefault(), L((ke) => ({
              ...ke,
              isSortControlsActive: !1,
              focusArea: "sort-controls",
              focusedSortControlIndex: 0
            })), F(0);
            break;
        }
      }
    },
    [
      w,
      m,
      D.selectedIndex,
      A.isSortControlsActive,
      A.focusedSortControlIndex,
      F,
      Le,
      ne,
      L,
      se
    ]
  );
  if (w === "cards") {
    const R = !!d && m.length === 1, O = R ? m[0] : m[D.selectedIndex];
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${v || ""}`,
        children: [
          /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
            !R && /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tablist",
                "aria-label": T,
                "aria-describedby": `${k || ""} ${S ? `${S}-navigation-help` : ""}`.trim(),
                "aria-orientation": y,
                className: "aria-tabs-datagrid__tabs",
                children: m.map((oe, Q) => {
                  const re = Q === D.selectedIndex, le = oe.disabled || j;
                  return /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      role: "tab",
                      id: `tab-${oe.id}`,
                      "aria-controls": `panel-${oe.id}`,
                      "aria-selected": re,
                      "aria-disabled": le,
                      tabIndex: re ? 0 : -1,
                      ref: (de) => {
                        J.current[Q] = de;
                      },
                      onClick: () => X(Q),
                      onKeyDown: (de) => fe(de, Q),
                      disabled: le,
                      className: [
                        "aria-tabs-datagrid__tab",
                        re ? "aria-tabs-datagrid__tab--selected" : "",
                        le ? "aria-tabs-datagrid__tab--disabled" : ""
                      ].filter(Boolean).join(" "),
                      children: [
                        /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: oe.label }),
                        D.tabLoadingStates[Q] && /* @__PURE__ */ n.jsx(
                          "span",
                          {
                            className: "aria-tabs-datagrid__tab-loading",
                            "aria-hidden": "true",
                            children: "⏳"
                          }
                        ),
                        D.tabErrors[Q] && /* @__PURE__ */ n.jsx(
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
            a && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: a })
          ] }),
          O && O.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: s ? (
            /* Advanced sorting with SortStatusControl: place above cards for 'header'/'above' (default), hide when 'none' */
            /* @__PURE__ */ n.jsx(n.Fragment, { children: (!x || x === "header" || x === "above") && /* @__PURE__ */ n.jsx(
              Kn,
              {
                sortConfig: D.sortConfig || [],
                columns: O.columns.map((oe) => ({ key: oe.key, label: oe.label })),
                onSortChange: (oe) => {
                  H({ type: "SET_SORT", payload: oe });
                },
                ariaLabel: "Card view sort configuration",
                className: "aria-tabs-datagrid-adaptive__advanced-sort-controls"
              }
            ) })
          ) : (
            /* Simple card sorting (unaffected by sortStatusPlacement) */
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "aria-tabs-datagrid-adaptive__sort-controls",
                role: "region",
                "aria-label": "Sort controls",
                tabIndex: A.focusArea === "sort-controls" ? 0 : -1,
                ref: (oe) => {
                  B.current[0] = oe;
                },
                onKeyDown: (oe) => pe(oe, 0),
                children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
                  /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                    /* @__PURE__ */ n.jsx(
                      "label",
                      {
                        htmlFor: `card-sort-${O.id}`,
                        className: "sort-label",
                        children: "Sort cards by"
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      Dr,
                      {
                        id: `card-sort-${O.id}`,
                        name: `card-sort-${O.id}`,
                        value: A.cardSortConfig ? `${A.cardSortConfig.key}-${A.cardSortConfig.direction}` : "",
                        onChange: (oe) => he(oe.target.value),
                        className: "sort-select",
                        children: ce(O.columns).map((oe) => /* @__PURE__ */ n.jsx("option", { value: oe.value, children: oe.label }, oe.value))
                      }
                    )
                  ] }),
                  A.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                    /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                      "Sorted by ",
                      Me(A.cardSortConfig)
                    ] }),
                    /* @__PURE__ */ n.jsx(
                      wt,
                      {
                        variant: "secondary",
                        size: "small",
                        onClick: () => he(""),
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
              ref: K,
              className: "aria-tabs-datagrid-adaptive__cards",
              role: "grid",
              "aria-label": `${O?.label || "Data"} cards in ${A.gridRows} rows and ${A.gridColumns} columns`,
              "aria-rowcount": A.gridRows,
              "aria-colcount": A.gridColumns,
              id: `panel-${O?.id}`,
              "aria-labelledby": `tab-${O?.id}`,
              children: Ge(O?.data || []).map((oe, Q) => {
                const re = A.selectedCardIndex === Q, le = A.focusedCardIndex === Q && A.focusArea === "cards", de = A.focusedCardIndex === Q && A.focusArea === "card" && A.isCardNavigationActive, be = Q === 0 && A.focusArea !== "cards", ke = le || be, Be = U(Q, A.gridColumns);
                if (r.cardTemplate) {
                  const Qe = r.cardTemplate(
                    oe,
                    O.columns
                  );
                  return /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      role: "row",
                      "aria-rowindex": Be.row + 1,
                      className: "aria-tabs-datagrid-adaptive__row",
                      children: /* @__PURE__ */ n.jsx(
                        "div",
                        {
                          ref: (ie) => {
                            ee.current[Q] = ie;
                          },
                          className: [
                            "aria-tabs-datagrid-adaptive__card-wrapper",
                            re ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                            le ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                            de ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                          ].filter(Boolean).join(" "),
                          role: "gridcell",
                          "aria-colindex": Be.col + 1,
                          "aria-selected": re,
                          "aria-expanded": de,
                          "aria-description": de ? `Card navigation active. ${A.cardElements.length} interactive elements available.` : void 0,
                          tabIndex: ke ? 0 : -1,
                          onClick: () => {
                            L((ie) => ({
                              ...ie,
                              selectedCardIndex: ie.selectedCardIndex === Q ? -1 : Q
                            })), q(oe);
                          },
                          onKeyDown: (ie) => Y(ie, Q),
                          onFocus: () => {
                            L((ie) => ie.isCardNavigationActive ? ie : ie.focusedCardIndex !== Q || ie.focusArea !== "cards" ? {
                              ...ie,
                              focusedCardIndex: Q,
                              focusArea: "cards"
                            } : ie);
                          },
                          children: Qe
                        }
                      )
                    },
                    `card-${Q}`
                  );
                }
                const Ye = Sp(
                  oe,
                  O.columns,
                  E,
                  N
                ), lt = [
                  Ye.className || "",
                  re ? "aria-tabs-datagrid-adaptive__card--selected" : "",
                  le ? "aria-tabs-datagrid-adaptive__card--focused" : "",
                  de ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
                ].filter(Boolean).join(" ");
                return /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    role: "row",
                    "aria-rowindex": Be.row + 1,
                    className: "aria-tabs-datagrid-adaptive__row",
                    children: /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: [
                          "aria-tabs-datagrid-adaptive__card-wrapper",
                          re ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                          le ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                          de ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                        ].filter(Boolean).join(" "),
                        role: "gridcell",
                        "aria-colindex": Be.col + 1,
                        "aria-selected": re,
                        "aria-expanded": de,
                        onKeyDown: (Qe) => {
                          Qe.key === "Enter" && (Qe.preventDefault(), L((ie) => ({
                            ...ie,
                            selectedCardIndex: Q
                          }))), Y(Qe, Q);
                        },
                        children: /* @__PURE__ */ n.jsx(
                          vl,
                          {
                            ...Ye,
                            ref: (Qe) => {
                              ee.current[Q] = Qe;
                            },
                            className: lt,
                            "aria-label": `${Ye["aria-label"] || Ye.heading}. ${de ? `Card navigation active with ${A.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                            tabIndex: ke ? 0 : -1,
                            onClick: () => {
                              L((Qe) => ({
                                ...Qe,
                                selectedCardIndex: Qe.selectedCardIndex === Q ? -1 : Q
                              })), q(oe);
                            },
                            onKeyDown: (Qe) => Y(Qe, Q),
                            onFocus: () => {
                              A.isCardNavigationActive || L((Qe) => Qe.focusedCardIndex !== Q || Qe.focusArea !== "cards" ? {
                                ...Qe,
                                focusedCardIndex: Q,
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
                  `card-${Q}`
                );
              })
            }
          ),
          s && x === "below" && O && O.columns && /* @__PURE__ */ n.jsx(
            Kn,
            {
              sortConfig: D.sortConfig || [],
              columns: O.columns.map((oe) => ({ key: oe.key, label: oe.label })),
              onSortChange: (oe) => {
                H({ type: "SET_SORT", payload: oe });
              },
              ariaLabel: "Card view sort configuration",
              className: "aria-tabs-datagrid-adaptive__advanced-sort-controls aria-tabs-datagrid-adaptive__advanced-sort-controls--below"
            }
          ),
          i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              ref: W,
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
  return w === "hybrid" ? /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${v || ""}`,
      children: [
        a && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: a }),
        /* @__PURE__ */ n.jsx(
          fs,
          {
            tabPanels: m,
            dataConfig: g,
            ariaLabel: T,
            ariaDescription: k,
            orientation: y,
            id: S,
            disabled: j,
            selectedIndex: _,
            onTabChange: M,
            className: "aria-tabs-datagrid-adaptive__table--hybrid",
            actions: l,
            forceActionsAbove: c,
            hideTabsIfSingle: d,
            minColumnWidth: u,
            enableColumnCollapse: f,
            minVisibleColumns: p,
            showCollapsedColumnsIndicator: h,
            sortStatusPlacement: x,
            ...b
          }
        ),
        i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${v || ""}`,
      children: [
        a && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: a }),
        /* @__PURE__ */ n.jsx(
          fs,
          {
            tabPanels: m,
            dataConfig: g,
            ariaLabel: T,
            ariaDescription: k,
            orientation: y,
            id: S,
            disabled: j,
            selectedIndex: _,
            onTabChange: M,
            actions: l,
            forceActionsAbove: c,
            hideTabsIfSingle: d,
            minColumnWidth: u,
            enableColumnCollapse: f,
            minVisibleColumns: p,
            showCollapsedColumnsIndicator: h,
            sortStatusPlacement: x,
            ...b
          }
        ),
        i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
      ]
    }
  );
}, Dl = (e) => {
  const t = hs.find((r) => r.value === e);
  return t ? t.icon : null;
}, _p = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [o, s] = t.priceRange, a = r.discountedPrice || r.price;
      if (a < o || a > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((o) => r.tags.includes(o)));
  }) : e,
  booleanRenderer: (e) => Dl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, kp = (e) => ia(e, [
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
]), Cp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.dateRange) {
      const [o, s] = t.dateRange;
      if (r.date < o || r.date > s) return !1;
    }
    if (t.amountRange) {
      const [o, s] = t.amountRange;
      if (Math.abs(r.amount) < o || Math.abs(r.amount) > s) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(r.type) || t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.pending !== void 0 && r.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => Dl(e),
  getDataId: (e) => `financial-${e.id}`
}, Np = (e) => ia(e, [
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
]), jp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: _p,
    createTabs: kp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Cp,
    createTabs: Np
  }
}, ci = (e, t) => {
  const r = jp[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Tl = [
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
], Mp = [
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
], Ip = [
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
], Dp = [
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
], di = [
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
], ui = [
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
], fi = [
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
], Tp = {
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
    data: Tl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      kl,
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
    data: Mp,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Cl,
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
    data: Ip,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Nl,
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
    data: Dp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      jl,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, o) => console.log("Vitals action:", r, o),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], $p = () => {
  const [e, t] = Ve("healthcare"), r = ze(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: ap,
      tabPanels: Lp(),
      data: Tl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...ci("ecommerce", di),
      data: di
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ci("financial", ui),
      data: ui
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Tp,
      tabPanels: ia(fi, [
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
          filter: (s) => s.filter((a) => a.isHotLead),
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
            (a) => ["contacted", "qualified"].includes(a.status)
          ),
          ariaLabel: "Active Pipeline Grid",
          ariaDescription: "Leads currently in the sales pipeline"
        }
      ]),
      data: fi
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
      }, children: Object.keys(r).map((s) => /* @__PURE__ */ n.jsx(
        wt,
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
      fs,
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
}, f1 = $p, Ll = (e) => /* @__PURE__ */ n.jsx(Vi, { ...e }), h1 = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: o = yn.TwoThirds,
  mainWrapperSize: s,
  skipLinkProps: a,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: d,
  search: u,
  account: f,
  organisation: p,
  logo: h,
  className: x,
  ...m
}) => {
  const g = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: p,
    logo: h,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(bl, { ...a }),
    /* @__PURE__ */ n.jsx(Ki, { ...g }),
    /* @__PURE__ */ n.jsx(Ll, { className: x, ...m, children: /* @__PURE__ */ n.jsx(Zi, { size: s, children: /* @__PURE__ */ n.jsx(an, { children: /* @__PURE__ */ n.jsxs(tr, { width: o, children: [
      t && /* @__PURE__ */ n.jsx(Bt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Qi, { ...l })
  ] });
}, p1 = ({
  children: e,
  title: t,
  pageHeadingProps: r,
  columnWidth: o = yn.TwoThirds,
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: a,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: d,
  serviceHref: u,
  logo: f,
  className: p,
  ...h
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
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(bl, { ...a }),
    /* @__PURE__ */ n.jsx(Ki, { ...x }),
    /* @__PURE__ */ n.jsxs(Ll, { className: p, ...h, children: [
      c && /* @__PURE__ */ n.jsx(er, { ...c }),
      /* @__PURE__ */ n.jsx(Zi, { size: s, children: /* @__PURE__ */ n.jsx(an, { children: /* @__PURE__ */ n.jsxs(tr, { width: o, children: [
        t && /* @__PURE__ */ n.jsx(Bt, { style: { marginTop: "3rem" }, size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Qi, { ...l })
  ] });
};
function Ap(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: o = "nsvDrill" } = e, [s, a] = V.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = V.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(o) === "1");
  return V.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    s ? c.set(r, String(s)) : c.delete(r), c.set(o, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [s, i, t, r, o]), { selectedId: s, setSelectedId: a, drilledIn: i, setDrilledIn: l };
}
const Ep = ({
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
), Pp = ({
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
), Ur = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: o,
  element: s = "a",
  onClick: a,
  ...i
}) => {
  const l = De("nhsuk-back-link", o), c = De("nhsuk-back-link__link"), d = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ n.jsx("button", { className: c, type: "button", onClick: a, ...i, children: d() }) : /* @__PURE__ */ n.jsx("a", { className: c, href: r, ...i, children: d() }) });
};
Ur.displayName = "ForwardLink";
const Fp = ({
  show: e,
  label: t,
  contentHeaderLevel: r,
  detailActive: o,
  headerContext: s,
  backLabel: a,
  nextLabel: i,
  onBack: l,
  onForward: c,
  renderContentHeader: d,
  item: u,
  contentSubheader: f,
  tertiaryInlineActive: p
}) => {
  if (!e || !u) return null;
  const h = `h${r}`, x = t ? V.createElement(
    h,
    {
      style: {
        marginLeft: o ? 32 : 0,
        marginRight: o ? 32 : 0
      }
    },
    t
  ) : null, m = o ? /* @__PURE__ */ n.jsx(
    er,
    {
      element: "button",
      text: a,
      style: { marginRight: 16 },
      onClick: l
    }
  ) : void 0, g = p ? void 0 : /* @__PURE__ */ n.jsx(Ur, { element: "button", text: i, onClick: c });
  if (d)
    return /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: d({
      item: u,
      detailActive: o,
      context: s,
      backLink: m,
      defaultHeading: x
    }) });
  const _ = u && f ? typeof f == "function" ? f(u) : f : null;
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
          m,
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
                x,
                _ && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: _ })
              ]
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: g })
  ] }) });
};
function Rp({
  layout: e,
  items: t,
  getId: r,
  selectedId: o,
  isLoading: s,
  emptyState: a,
  renderItemContent: i,
  onSelect: l,
  orientation: c,
  initialFocus: d,
  onFocusChange: u,
  justSelectedId: f,
  listRef: p,
  onKeyDownList: h,
  navigationInstructions: x,
  controlledFocusedIndex: m
}) {
  const [g, _] = V.useState(
    () => d === "first" ? 0 : -1
  ), M = V.useRef(0);
  V.useEffect(() => {
    if (typeof m == "number" || g < 0 || !p?.current) return;
    const j = Array.from(
      p.current.querySelectorAll("[data-nav-item]")
    )[g];
    if (j) {
      document.activeElement !== j && j.focus(), M.current = g;
      const v = t[g];
      u?.(v ? r(v) : void 0, v, g);
    }
  }, [m, g, t, u, r, p]);
  const T = (S) => {
    if (h) return h(S);
    const j = c === "vertical" ? "ArrowDown" : "ArrowRight", v = c === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (S.key === j)
      S.preventDefault(), _((b) => Math.min(t.length - 1, b + 1));
    else if (S.key === v)
      S.preventDefault(), _((b) => Math.max(0, b - 1));
    else if (S.key === "Home")
      S.preventDefault(), _(0);
    else if (S.key === "End")
      S.preventDefault(), _(t.length - 1);
    else if (S.key === "Enter" || S.key === " ") {
      S.preventDefault();
      const b = t[g];
      b && !b.disabled && l(r(b), b, g);
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
          t.map((S, j) => {
            const v = r(S), b = v === o;
            return /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": b,
                children: /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    id: String(v),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": b || void 0,
                    "data-disabled": S.disabled || void 0,
                    disabled: S.disabled,
                    onClick: () => !S.disabled && l(v, S, j),
                    children: [
                      S.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: S.icon }),
                      /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: S.label }),
                      S.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: S.description }),
                      i?.(S),
                      S.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: S.badge })
                    ]
                  }
                )
              },
              String(v)
            );
          }),
          t.length === 0 && !s && /* @__PURE__ */ n.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__card-item",
              "aria-disabled": "true",
              children: a || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    );
  const k = "nsv-nav-instructions", y = V.useMemo(() => V.memo(
    ({
      item: S,
      idx: j,
      selected: v,
      focused: b
    }) => {
      const w = r(S), $ = S.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: b ? 0 : -1,
        onClick: () => {
          M.current = j, l(w, S, j);
        },
        onKeyDown: (I) => {
          (I.key === "Enter" || I.key === " ") && (I.preventDefault(), M.current = j, l(w, S, j));
        }
      };
      return /* @__PURE__ */ n.jsxs(
        "li",
        {
          id: String(w),
          "data-nav-item": !0,
          className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
          role: "option",
          "aria-selected": v,
          "aria-current": v ? "true" : void 0,
          "data-selected": v || void 0,
          "data-disabled": S.disabled || void 0,
          ...$,
          children: [
            S.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: S.icon }),
            /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: S.label }),
              S.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: S.description }),
              i?.(S)
            ] }),
            S.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: S.badge })
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
        onKeyDown: T,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": k,
        "aria-activedescendant": o ? String(o) : void 0,
        children: [
          t.map((S, j) => /* @__PURE__ */ n.jsx(
            y,
            {
              item: S,
              idx: j,
              selected: r(S) === o,
              focused: /* @__PURE__ */ (() => {
                const v = typeof m == "number" ? m : g;
                return j === v || v === -1 && j === 0 && d === "first";
              })(),
              "data-just-selected": r(S) === f ? "true" : void 0
            },
            String(r(S))
          )),
          t.length === 0 && !s && /* @__PURE__ */ n.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__list-item",
              "aria-disabled": "true",
              children: a || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n.jsx(
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
function hi() {
  return typeof window > "u" ? Cn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function la() {
  const [e, t] = V.useState(hi());
  V.useEffect(() => {
    if (typeof window > "u") return;
    const a = () => t(hi());
    return window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []);
  const r = V.useCallback((a) => e >= Cn[a], [e]), o = V.useCallback((a) => e < Cn[a], [e]), s = V.useCallback((a, i) => e >= Cn[a] && e < Cn[i], [e]);
  return {
    width: e,
    up: r,
    down: o,
    between: s,
    /** Raw numeric values */
    values: Cn
  };
}
function m1(e) {
  const { width: t, values: r } = la();
  let o = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const a of s) {
    const i = r[a];
    t >= i && e[a] !== void 0 && (o = e[a]);
  }
  return o;
}
function Bp(e, t, r) {
  const { up: o } = la(), [s, a] = V.useState(!1);
  V.useEffect(() => a(!0), []);
  const i = s && o("medium"), l = s && o("xlarge");
  let c;
  return e ? c = e : i ? c = "two-column" : c = "list", !e && t && r && l && (c = "three-column"), { effectiveLayout: c, hydrated: s, isAtLeastMedium: i, isAtLeastXlarge: l };
}
function Hp(e) {
  const {
    enabled: t,
    isAtLeastMedium: r,
    initiallyCollapsed: o,
    persist: s,
    storageKey: a,
    urlParam: i,
    onChange: l
  } = e, c = V.useMemo(() => {
    if (s && (s === "url" || s === "both") && typeof window < "u") {
      const h = new URLSearchParams(window.location.search).get(i);
      if (h === "1") return !0;
      if (h === "0") return !1;
    }
    if (s && (s === "localStorage" || s === "both") && typeof window < "u")
      try {
        const p = window.localStorage.getItem(a);
        if (p === "1") return !0;
        if (p === "0") return !1;
      } catch {
      }
    return o;
  }, [s, o, a, i]), [d, u] = V.useState(c);
  V.useEffect(() => {
    l?.(d);
  }, [d, l]);
  const f = V.useCallback(() => {
    t && r && u((p) => !p);
  }, [t, r]);
  return V.useEffect(() => {
    if (!(!s || typeof window > "u")) {
      if (s === "localStorage" || s === "both")
        try {
          window.localStorage.setItem(a, d ? "1" : "0");
        } catch {
        }
      if (s === "url" || s === "both") {
        const p = new URLSearchParams(window.location.search);
        p.set(i, d ? "1" : "0");
        const h = `${window.location.pathname}?${p.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", h);
      }
    }
  }, [d, s, a, i]), { collapsed: d, toggle: f };
}
function zp(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: o,
    onSelectionChange: s,
    renderItemContent: a,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: d = !0,
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: p = !1,
    emptyState: h,
    a11y: x,
    className: m,
    getId: g = (Ie) => Ie.id,
    orientation: _ = "vertical",
    autoEnableThirdColumn: M = !0,
    onDrillChange: T,
    navigationInstructions: k = "Use arrow keys to navigate, Enter to open.",
    initialFocus: y = "first",
    skipFocusOnSelect: S = !1,
    skipAnnouncements: j = !1,
    onFocusChange: v,
    syncUrl: b = !1,
    urlParamSelected: w = "nsv",
    urlParamDrill: $ = "nsvDrill",
    urlSyncDebounceMs: I = 0,
    lazySecondary: E = !1,
    navFooter: N,
    collapsibleNav: C = !1,
    navInitiallyCollapsed: D = !1,
    onNavCollapseChange: H,
    collapseToggleLabelShow: J = "Show navigation",
    collapseToggleLabelHide: ee = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: K,
    persistNavCollapsed: A,
    navCollapsedStorageKey: L = "nsvCollapsed",
    navCollapsedUrlParam: G = "nsvCollapsed",
    autoContentHeader: U,
    contentHeaderLevel: P = 2,
    renderContentHeader: Z,
    contentSubheader: X,
    secondarySubheader: q
  } = e, { effectiveLayout: ne, hydrated: ue, isAtLeastMedium: W } = Bp(
    c,
    M,
    !!l
  ), se = Ap({
    enabled: b,
    paramSelected: w,
    paramDrill: $
  }), [ce, ye] = V.useState(
    () => se.selectedId !== void 0 ? se.selectedId : o
  ), he = r !== void 0 ? r : ce, Me = t.find((Ie) => g(Ie) === he), [Ge, Te] = V.useState(
    void 0
  );
  V.useEffect(() => {
    if (he === void 0) return;
    Te(he);
    const Ie = setTimeout(() => Te(void 0), 220);
    return () => clearTimeout(Ie);
  }, [he]);
  const Le = V.useRef(null), we = V.useRef(null), F = V.useRef(null), Y = V.useRef(null), [ae, fe] = V.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [pe, R] = V.useState(() => "nav"), [O, oe] = V.useState(0), Q = () => [
    Y.current,
    we.current,
    F.current
  ].filter(Boolean), re = (Ie) => {
    const He = Q(), Je = Math.max(0, Math.min(Ie, He.length - 1));
    de(He[Je]), oe(Je);
  }, le = V.useCallback(
    (Ie) => Ie ? Array.from(Ie.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (Je) => !Je.hasAttribute("disabled") && Je.tabIndex !== -1
    ) : [],
    []
  ), de = V.useCallback((Ie) => {
    if (Ie)
      try {
        Ie.focus({ preventScroll: !0 });
      } catch {
        Ie.focus();
      }
  }, []), be = V.useCallback(
    (Ie) => {
      const He = le(we.current);
      if (!He.length) {
        de(we.current);
        return;
      }
      const Je = Math.max(0, Math.min(Ie, He.length - 1)), tt = He[Je];
      tt.focus(), setTimeout(() => {
        document.activeElement !== tt && (tt.focus(), setTimeout(() => {
          document.activeElement !== tt && tt.click();
        }, 10));
      }, 10), fe((dt) => ({ ...dt, contentIndex: Je }));
      const _t = (dt) => {
        dt.key === "Escape" && (dt.preventDefault(), dt.stopPropagation(), de(we.current), tt.removeEventListener("keydown", _t));
      };
      He.forEach((dt) => {
        const ht = dt._escapeHandler;
        ht && dt.removeEventListener("keydown", ht);
      }), tt._escapeHandler = _t, tt.addEventListener("keydown", _t);
    },
    [le]
  ), ke = V.useCallback(
    (Ie) => {
      const He = le(F.current);
      if (!He.length) {
        de(F.current);
        return;
      }
      const Je = Math.max(0, Math.min(Ie, He.length - 1)), tt = He[Je];
      tt.focus(), setTimeout(() => {
        document.activeElement !== tt && (tt.focus(), setTimeout(() => {
          document.activeElement !== tt && tt.click();
        }, 10));
      }, 10), fe((dt) => ({ ...dt, secondaryIndex: Je }));
      const _t = (dt) => {
        dt.key === "Escape" && (dt.preventDefault(), dt.stopPropagation(), de(F.current), tt.removeEventListener("keydown", _t));
      };
      He.forEach((dt) => {
        const ht = dt._escapeHandler;
        ht && dt.removeEventListener("keydown", ht);
      }), tt._escapeHandler = _t, tt.addEventListener("keydown", _t);
    },
    [le]
  ), Be = (Ie) => {
    if (Ie.defaultPrevented) return;
    const He = Ie.key, Je = Ie.target, tt = !!ve.current && ve.current.contains(Je), _t = !!we.current && we.current.contains(Je), dt = !!F.current && F.current.contains(Je), ht = !!F.current, xr = Je === Y.current || Je === we.current || Je === F.current, Eo = Ye && (ne === "list" || ne === "cards"), yr = _t && !!Je.closest(".nhs-navigation-split-view__header");
    if (pe === "containers" && xr) {
      if (He === "ArrowRight") {
        Ie.preventDefault();
        const et = Q(), ut = Math.min(et.length - 1, O + 1);
        re(ut);
        return;
      }
      if (He === "ArrowLeft") {
        Ie.preventDefault();
        const et = Math.max(0, O - 1);
        re(et);
        return;
      }
      if (He === "Home") {
        Ie.preventDefault(), re(0);
        return;
      }
      if (He === "End") {
        Ie.preventDefault(), re(Q().length - 1);
        return;
      }
      if (He === "Enter" || He === " ") {
        if (Ie.preventDefault(), Je === Y.current) {
          if (R("nav"), ve.current) {
            const et = Array.from(
              ve.current.querySelectorAll("[data-nav-item]")
            );
            (et[Ne >= 0 ? Ne : 0] || et[0])?.focus();
          }
        } else Je === we.current ? (R("content"), be(ae.contentIndex)) : Je === F.current && (R("secondary"), ke(ae.secondaryIndex));
        return;
      }
      return;
    }
    if (He === "Escape") {
      if (pe === "content" || pe === "secondary") {
        if (_t || dt) {
          if (Ie.preventDefault(), R("nav"), ve.current) {
            const ut = Array.from(
              ve.current.querySelectorAll("[data-nav-item]")
            )[Ne >= 0 ? Ne : 0];
            setTimeout(() => ut?.focus(), 10);
          }
        } else if ((Je === we.current || Je === F.current) && (Ie.preventDefault(), R("nav"), ve.current)) {
          const ut = Array.from(
            ve.current.querySelectorAll("[data-nav-item]")
          )[Ne >= 0 ? Ne : 0];
          setTimeout(() => ut?.focus(), 10);
        }
      }
      return;
    }
    if (He === "Enter" || He === " ") {
      if (Je.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (Je === we.current && pe === "content") {
        Ie.preventDefault(), Ie.stopPropagation(), le(we.current).length > 0 && setTimeout(() => {
          be(ae.contentIndex);
        }, 50);
        return;
      }
      if (Je === F.current && pe === "secondary") {
        Ie.preventDefault(), Ie.stopPropagation(), le(
          F.current
        ).length > 0 && setTimeout(() => {
          ke(ae.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Eo && yr && !xr && (He === "ArrowRight" || He === "ArrowLeft")) {
      const et = le(we.current).filter(
        (ut) => ut.closest(".nhs-navigation-split-view__header")
      );
      if (et.length > 1) {
        const ut = et.indexOf(Je);
        if (ut >= 0) {
          const ya = (ut + (He === "ArrowRight" ? 1 : -1) + et.length) % et.length;
          Ie.preventDefault(), et[ya].focus();
          return;
        }
      }
    }
    if (He === "ArrowRight") {
      if (tt || pe === "nav") {
        Ie.preventDefault(), R("content"), setTimeout(() => de(we.current), 10);
        return;
      }
      if (_t || pe === "content") {
        ht && (Ie.preventDefault(), R("secondary"), setTimeout(() => de(F.current), 10));
        return;
      }
    }
    if (He === "ArrowLeft") {
      if (dt || pe === "secondary") {
        Ie.preventDefault(), R("content"), setTimeout(() => de(we.current), 10);
        return;
      }
      if (_t || pe === "content") {
        if (Ie.preventDefault(), R("nav"), ve.current) {
          const ut = Array.from(
            ve.current.querySelectorAll("[data-nav-item]")
          )[Ne >= 0 ? Ne : 0];
          setTimeout(() => de(ut), 10);
        }
        return;
      }
    }
    if (He === "Home" && !tt && (Ie.preventDefault(), R("nav"), ve.current)) {
      const et = Array.from(
        ve.current.querySelectorAll("[data-nav-item]")
      ), ut = et[Ne >= 0 ? Ne : 0] || et[0];
      setTimeout(() => de(ut), 10);
    }
    if (He === "End") {
      const et = ht ? F.current : we.current;
      et && !et.contains(Je) && (Ie.preventDefault(), ht ? (R("secondary"), setTimeout(() => de(F.current), 10)) : (R("content"), setTimeout(() => de(we.current), 10)));
    }
    if (He === "ArrowDown" || He === "ArrowUp") {
      if (Je === we.current && He === "ArrowDown") {
        Ie.preventDefault(), le(we.current).length > 0 && be(0);
        return;
      }
      if (Je === F.current && He === "ArrowDown") {
        Ie.preventDefault(), le(
          F.current
        ).length > 0 && ke(0);
        return;
      }
      if (_t) {
        const et = le(we.current);
        if (et.length) {
          Ie.preventDefault();
          const ut = He === "ArrowDown" ? 1 : -1, $t = (ae.contentIndex + ut + et.length) % et.length;
          be($t);
        }
      } else if (dt) {
        const et = le(F.current);
        if (et.length) {
          Ie.preventDefault();
          const ut = He === "ArrowDown" ? 1 : -1, $t = (ae.secondaryIndex + ut + et.length) % et.length;
          ke($t);
        }
      }
    }
  }, Ye = !!Me && (ne === "list" || ne === "cards"), lt = V.useMemo(() => U === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : U === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : U === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: U.mobile !== void 0 ? U.mobile : !0,
    tablet: U.tablet || !1,
    desktop: U.desktop || !1
  }, [U]), Qe = ue && W && ne !== "three-column", ie = ue && ne === "three-column", Ae = !!l, z = ne === "three-column", [te, ge] = V.useState(!1);
  V.useEffect(() => {
    z && te && ge(!1);
  }, [z, te]), V.useEffect(() => {
    te && !z && (R("secondary"), oe(2), setTimeout(() => {
      de(F.current);
    }, 50));
  }, [te, z]), V.useEffect(() => {
    !te && !z && pe === "secondary" && (R("content"), oe(1), setTimeout(() => {
      de(we.current);
    }, 50));
  }, [te, z, pe]);
  const xe = !!Me && (Ye && lt.mobile || !Ye && Qe && lt.tablet || !Ye && ie && lt.desktop) || Ae && !z, Se = Ye ? "mobile" : Qe ? "tablet" : "desktop";
  V.useEffect(() => {
    if (!b) return;
    const Ie = ne === "three-column";
    let He = !1;
    const Je = () => {
      He || (se.selectedId !== he && se.setSelectedId(he), se.drilledIn !== Ie && se.setDrilledIn(Ie));
    };
    if (I && I > 0) {
      const tt = setTimeout(Je, I);
      return () => {
        He = !0, clearTimeout(tt);
      };
    } else
      Je();
  }, [b, se, he, ne, I]), V.useEffect(() => {
    if (!b) return;
    const Ie = () => {
      const He = new URLSearchParams(window.location.search), Je = He.get(w);
      He.get($), ye(Je === null ? void 0 : Je);
    };
    return window.addEventListener("popstate", Ie), () => window.removeEventListener("popstate", Ie);
  }, [
    b,
    w,
    $,
    c,
    l
  ]);
  const Re = V.useRef(0), Ce = V.useRef(
    null
  ), je = V.useCallback(
    (Ie, He) => {
      Ie !== he && (r === void 0 && ye(Ie), s?.(Ie, He));
    },
    [r, s, he]
  );
  V.useEffect(() => {
    if (!S && Ye && we.current) {
      const Ie = setTimeout(() => de(we.current), 30);
      return () => clearTimeout(Ie);
    }
  }, [Ye, he, S]);
  const ve = V.useRef(null), [Ne, Ke] = V.useState(
    () => y === "first" ? 0 : -1
  );
  V.useEffect(() => {
    if (Ne < 0 || !ve.current) return;
    const He = Array.from(
      ve.current.querySelectorAll("[data-nav-item]")
    )[Ne];
    if (He) {
      document.activeElement !== He && de(He), Re.current = Ne;
      const Je = t[Ne];
      v?.(
        Je ? g(Je) : void 0,
        Je,
        Ne
      );
    }
  }, [Ne, t, v, g]);
  const st = (Ie) => {
    const He = _ === "vertical" ? "ArrowDown" : "ArrowRight", Je = _ === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (Ie.key === "ArrowRight" && _ === "vertical") {
      Ie.preventDefault(), te ? (R("secondary"), setTimeout(() => {
        de(F.current);
      }, 10)) : (R("content"), setTimeout(() => {
        de(we.current);
      }, 10));
      return;
    }
    if (Ie.key === He)
      Ie.preventDefault(), Ke((tt) => Math.min(t.length - 1, tt + 1));
    else if (Ie.key === Je)
      Ie.preventDefault(), Ke((tt) => Math.max(0, tt - 1));
    else if (Ie.key === "Home")
      Ie.preventDefault(), Ke(0);
    else if (Ie.key === "End")
      Ie.preventDefault(), Ke(t.length - 1);
    else if (Ie.key === "Enter" || Ie.key === " ") {
      Ie.preventDefault();
      const tt = t[Ne];
      tt && !tt.disabled && je(g(tt), tt);
    } else if (Ie.key.length === 1 && /[a-z0-9]/i.test(Ie.key)) {
      Ce.current || (Ce.current = { buffer: "", last: 0 });
      const tt = Date.now(), _t = 700, dt = Ie.key.toLowerCase();
      tt - Ce.current.last > _t ? Ce.current.buffer = dt : Ce.current.buffer += dt, Ce.current.last = tt;
      let ht = Ce.current.buffer;
      const xr = ht.split("").every(($t) => $t === ht[0]), Eo = t.map(
        ($t) => String($t.label || "").toLowerCase()
      );
      let yr = 0;
      Ne >= 0 && (yr = (Ne + 1) % t.length);
      let et;
      const ut = ($t, ya) => {
        const ba = t.length;
        for (let Po = 0; Po < ba; Po++) {
          const Fo = (yr + Po) % ba;
          if (!t[Fo].disabled && Eo[Fo].startsWith($t))
            return Fo;
        }
      };
      xr && ht.length > 1 ? et = ut(ht[0]) : (et = ut(ht), et === void 0 && ht.length > 1 && (et = ut(ht[ht.length - 1]), et !== void 0 && Ce.current && (Ce.current.buffer = ht[ht.length - 1]))), et !== void 0 && Ke(et);
    }
  }, { collapsed: $e, toggle: Pe } = Hp({
    enabled: C,
    isAtLeastMedium: W,
    initiallyCollapsed: D,
    persist: A,
    storageKey: L,
    urlParam: G,
    onChange: H
  }), Oe = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    Ye ? "nhs-navigation-split-view--detail-active" : "",
    ne === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    C && W && $e ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), Lt = V.useRef(null);
  V.useEffect(() => {
    if (!j && Lt.current) {
      const Ie = Me ? `Selected ${Me.label}` : "Selection cleared";
      Lt.current.textContent = Ie;
    }
  }, [Me, j]), V.useEffect(() => {
    if (!Ye && he == null && ve.current) {
      const He = ve.current.querySelectorAll("[data-nav-item]")[Re.current];
      de(He);
    }
  }, [Ye, he]);
  const It = ne === "three-column", [Ao, ad] = V.useState(!1);
  V.useEffect(() => {
    It && !Ao && ad(!0);
  }, [It, Ao]);
  const xa = V.useRef(It);
  return V.useEffect(() => {
    xa.current !== It && (T?.(It), xa.current = It);
  }, [It, T]), /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: Le,
      className: Oe,
      "aria-label": x?.rootLabel,
      "data-layout": ne,
      onKeyDown: Be,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ye || void 0,
            style: { transform: Ye ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: Y,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": x?.navigationLabel || "Items",
                  "data-collapsed": $e || void 0,
                  tabIndex: 0,
                  children: [
                    C && W && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Pe,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": $e ? J : ee,
                        title: $e ? J : ee,
                        children: $e ? B || /* @__PURE__ */ n.jsx(Pp, {}) : K || /* @__PURE__ */ n.jsx(Ep, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ n.jsx(
                      Rp,
                      {
                        layout: ne === "cards" ? "cards" : "list",
                        items: t,
                        getId: g,
                        selectedId: he,
                        isLoading: p,
                        emptyState: h,
                        renderItemContent: a,
                        onSelect: (Ie, He, Je) => {
                          Re.current = Je, je(Ie, He);
                        },
                        orientation: _,
                        initialFocus: y,
                        onFocusChange: v,
                        justSelectedId: Ge,
                        listRef: ve,
                        onKeyDownList: st,
                        navigationInstructions: k,
                        controlledFocusedIndex: Ne
                      }
                    ) }),
                    N && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: N
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: we,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": x?.contentLabel || "Content",
                  "data-has-selection": !!Me || void 0,
                  tabIndex: 0,
                  style: {
                    display: te && !z ? "none" : void 0
                  },
                  children: [
                    xe && /* @__PURE__ */ n.jsx(
                      Fp,
                      {
                        show: xe,
                        label: Me ? Me.label : void 0,
                        contentHeaderLevel: P,
                        detailActive: Ye,
                        headerContext: Se,
                        backLabel: u,
                        nextLabel: f,
                        onBack: () => je(void 0, void 0),
                        onForward: () => ge(!0),
                        renderContentHeader: Z,
                        item: Me,
                        contentSubheader: X,
                        tertiaryInlineActive: te
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Me)
                      }
                    )
                  ]
                }
              ),
              ne === "three-column" && (!E || Ao) || te && !z ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: F,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": x?.secondaryContentLabel || "Secondary",
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
                        te && !z && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                                    er,
                                    {
                                      element: "button",
                                      text: u,
                                      style: { marginRight: 16 },
                                      onClick: () => ge(!1)
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
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Me && typeof Me == "object" && "label" in Me ? Me.label : String(Me) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Me && q && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof q == "function" ? q(Me) : q
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Me) })
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
            ref: Lt,
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
zp.displayName = "NavigationSplitView";
function Op({
  steps: e,
  currentIndex: t,
  onNavigate: r,
  renderCard: o,
  className: s,
  ariaLabel: a = "Steps"
}) {
  const i = V.useRef(null), l = (c) => {
    if (e?.length)
      if (c.key === "ArrowLeft" || c.key === "ArrowUp") {
        c.preventDefault();
        const d = Math.max(0, t - 1);
        d !== t && r?.(d);
      } else if (c.key === "ArrowRight" || c.key === "ArrowDown") {
        c.preventDefault();
        const d = Math.min(e.length - 1, t + 1);
        d !== t && r?.(d);
      } else c.key === "Home" ? (c.preventDefault(), r?.(0)) : c.key === "End" && (c.preventDefault(), r?.(e.length - 1));
  };
  return /* @__PURE__ */ n.jsx("div", { className: s, "aria-label": a, role: "region", children: /* @__PURE__ */ n.jsx(
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
          children: e.map((c, d) => {
            const u = d === t;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "nhsfdp-pane mobile-pane" + (u ? " is-current" : ""),
                role: "group",
                "aria-roledescription": "step",
                "aria-label": (c.label ?? `Step ${d + 1}`).toString(),
                "aria-hidden": !u,
                onClick: (f) => {
                  if (f.defaultPrevented) return;
                  const p = f.target;
                  p && p.closest(
                    'button, a, input, select, textarea, [role="button"], [role="link"], [contenteditable="true"], [data-prevent-card-click]'
                  ) || r?.(d);
                },
                children: o(c, d, u)
              },
              d
            );
          })
        }
      )
    }
  ) });
}
function Up({
  steps: e,
  currentIndex: t,
  onNavigate: r,
  renderLabel: o,
  ariaLabel: s = "Breadcrumbs",
  className: a,
  style: i
}) {
  const l = e.map((d, u) => {
    const f = u === t, p = u < t, h = o ? o(d, u) : d.label ?? `Step ${u + 1}`;
    return {
      text: String(h),
      href: p ? "#" : void 0,
      active: f,
      attributes: p ? { "data-index": String(u) } : void 0
    };
  }), c = (d) => {
    const f = d.target.closest("a.nhsuk-breadcrumb__link, a.nhsuk-breadcrumb__backlink");
    if (!f) return;
    if (f.classList.contains("nhsuk-breadcrumb__backlink")) {
      d.preventDefault();
      const h = Math.max(0, t - 1);
      h !== t && r?.(h);
      return;
    }
    const p = f.getAttribute("data-index");
    if (p != null) {
      d.preventDefault();
      const h = parseInt(p, 10);
      Number.isNaN(h) || r?.(h);
    }
  };
  return /* @__PURE__ */ n.jsx("div", { style: i, onClick: c, children: /* @__PURE__ */ n.jsx(yl, { labelText: s, classes: a, items: l }) });
}
function Wp(e) {
  const { up: t } = la(), [r, o] = V.useState(!1);
  V.useEffect(() => o(!0), []);
  const s = r && t("medium") && !t("xlarge"), a = r && t("xlarge"), i = a ? "desktop" : s ? "tablet" : "mobile", l = V.useMemo(() => {
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
  return { hydrated: r, breakpoint: i, isTablet: s, isDesktop: a, paneConfig: l };
}
function g1(e) {
  const {
    steps: t,
    currentStepId: r,
    defaultStepId: o,
    onStepChange: s,
    layoutForStep: a,
    renderStepCard: i,
    renderStepContent: l,
    renderSecondaryContent: c,
    renderSecondaryNav: d,
    renderBreadcrumbs: u,
    className: f,
    getId: p = (ie) => ie.id,
    enableTabletGrid: h = !1,
    isStepComplete: x,
    showMobileControls: m,
    currentSectionId: g,
    defaultSectionIdForStep: _,
    onSectionChange: M
  } = e, T = typeof window < "u" && !!window.__WSV_DEBUG_FOCUS || !1, k = (...ie) => {
    T && console.log("[WorkflowSplitView]", ...ie);
  }, y = () => {
    if (typeof document > "u") return {};
    const ie = document.activeElement, Ae = ie?.getAttribute?.("role");
    return {
      activeTag: ie?.tagName,
      activeId: ie?.id,
      activeRole: Ae,
      activeClasses: ie?.className
    };
  }, [S, j] = Ve(
    o ?? (t[0] ? p(t[0]) : void 0)
  ), v = r ?? S, b = t.findIndex((ie) => p(ie) === v), w = b >= 0 ? t[b] : t[0], [$, I] = Ve({}), E = (ie) => ie ? String(p(ie)) : "", N = _e((ie) => {
    if (!ie) return;
    try {
      const z = _?.(ie);
      if (z !== void 0) return z;
    } catch {
    }
    const Ae = ie.sections && ie.sections[0];
    return Ae ? Ae.id : void 0;
  }, [_]), C = g ?? $[E(w)] ?? N(w), D = w && w.sections ? w.sections : void 0, H = D?.find((ie) => ie.id === C), J = (ie) => {
    if (w) {
      const Ae = E(w);
      g === void 0 && I((z) => ({ ...z, [Ae]: ie })), M?.(ie, D?.find((z) => z.id === ie), w);
    }
  }, ee = (ie) => {
    k("navigateTo", String(ie)), r === void 0 && j(ie);
    const Ae = t.find((z) => p(z) === ie);
    Ae && s && s(ie, Ae);
  }, B = u ? u({ steps: t, current: w, onNavigate: ee }) : /* @__PURE__ */ n.jsx(
    Up,
    {
      steps: t,
      currentIndex: Math.max(0, b),
      onNavigate: (ie) => {
        const Ae = t[ie];
        Ae && ee(p(Ae));
      }
    }
  ), { hydrated: K, breakpoint: A, paneConfig: L } = Wp({
    step: w,
    index: b,
    layoutForStep: a
  }), G = r !== void 0 || o !== void 0 && t.length > 0 && t[0] && o !== p(t[0]), U = qe(null), P = qe(null), Z = qe(null), X = qe(null), q = qe(null), ne = qe(0), ue = qe(!1), W = qe(!1), se = qe(null), [ce, ye] = Ve("nav"), he = qe("nav");
  rt(() => {
    he.current = ce, ce !== "nav" && F(!1), ce !== "content" && ae(!1), ce !== "secondary" && pe(!1);
  }, [ce]);
  const [Me, Ge] = Ve(0), [Te, Le] = Ve(
    () => Math.max(0, b)
  ), [we, F] = Ve(!1), [Y, ae] = Ve(!1), [fe, pe] = Ve(!1), R = _e((ie) => {
    if (ie) {
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
        ie.focus();
      }
      k("focusEl", { to: ie.tagName, id: ie.id, class: ie.className });
    }
  }, []), O = _e(() => {
    const ie = () => Z.current;
    let Ae = 0;
    const z = () => {
      const te = ie();
      te && document.activeElement !== te && R(te), Ae += 1, Ae < 6 && document.activeElement !== ie() && setTimeout(z, 0);
    };
    k("focusContentSoon:start", { attempts: Ae }), z(), typeof queueMicrotask == "function" && queueMicrotask(z), requestAnimationFrame(z);
  }, [R]), oe = _e((ie) => ie ? Array.from(ie.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
    (z) => !z.hasAttribute("disabled") && z.tabIndex !== -1
  ) : [], []), Q = () => [
    P.current,
    Z.current,
    X.current
  ].filter(Boolean), re = (ie, Ae) => {
    if (!ie) return;
    const z = typeof document < "u" ? document.activeElement : null;
    if (z && ie.contains(z))
      try {
        z.blur(), k("blurActiveIfInside", { label: Ae, root: ie.getAttribute("aria-label") || ie.tagName });
      } catch {
      }
  }, le = () => {
    const ie = typeof document < "u" ? document.activeElement : null;
    if (ie && P.current && P.current.contains(ie))
      try {
        ie.blur(), k("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
  }, de = (ie) => {
    const Ae = Q(), z = Math.max(0, Math.min(ie, Ae.length - 1));
    k("focusContainerByIndex", { idx: ie, clamped: z }), R(Ae[z]), Ge(z);
  }, be = _e(
    (ie) => {
      let Ae = 0;
      const z = ie ?? Te, te = () => {
        const me = q.current;
        if (!me) return null;
        const xe = Array.from(me.querySelectorAll("[data-nav-item]"));
        return xe[z] || xe[0] || null;
      }, ge = () => {
        if (he.current !== "nav") {
          k("focusNavItemSoon: abort (mode changed)", { mode: he.current });
          return;
        }
        const me = te();
        me && document.activeElement !== me && R(me), Ae += 1, Ae < 6 && document.activeElement !== me && setTimeout(ge, 0);
      };
      k("focusNavItemSoon:start", { index: z, ...y() }), ge(), typeof queueMicrotask == "function" && queueMicrotask(ge), requestAnimationFrame(ge);
    },
    [R, Te]
  );
  rt(() => {
    if (!K) return;
    A === "desktop" || h && A === "tablet" ? G ? (ye("nav"), Ge(0), k("init: grid preselected → mode=nav", { containerIndex: 0 })) : (ye("containers"), Ge(0), k("init: grid default → mode=containers", { containerIndex: 0 })) : (ye("nav"), k("init: non-grid → mode=nav"));
  }, [K, A, G, h]), rt(() => () => {
    se.current != null && (clearTimeout(se.current), se.current = null, k("cleanup: cleared nav bootstrap timeout"));
  }, []), rt(() => {
    const ie = Math.max(0, b);
    Le(ie), k("sync navFocusedIndex with currentIndex", { currentIndex: b, navFocusedIndex: ie });
  }, [b]), rt(() => {
    k("paneFocusMode →", ce, y());
  }, [ce]);
  const ke = (ie) => {
    if (!(K && (A === "desktop" || h && A === "tablet"))) return;
    const z = ie.key, te = ie.target, ge = te.tagName.toLowerCase(), me = ge === "input" || ge === "textarea" || ge === "select", xe = te.getAttribute("role"), Se = xe === "textbox" || xe === "searchbox" || xe === "combobox", Re = te.getAttribute("contenteditable"), Ce = me || Se || Re && Re !== "false";
    if (k("onRootKeyDown", { key: z, tag: ge, role: xe, isEditable: Ce, paneFocusMode: ce, containerIndex: Me, ...y() }), Ce && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(z))
      return;
    const je = !!q.current && q.current.contains(te), ve = !!Z.current && Z.current.contains(te), Ne = !!X.current && X.current.contains(te), Ke = te === P.current || te === Z.current || te === X.current, st = !!X.current;
    if (Ke) {
      if (z === "ArrowLeft" && te === Z.current) {
        ie.preventDefault(), k("container: ArrowLeft on content container → nav item"), ye("nav"), re(Z.current, "from-content"), ne.current = Te, be(Te);
        return;
      }
      if (z === "ArrowRight" && te === Z.current && st) {
        ie.preventDefault(), k("container: ArrowRight on content container → secondary"), ye("secondary"), re(Z.current, "from-content"), ae(!1), setTimeout(() => R(X.current), 10);
        return;
      }
      if (z === "ArrowRight" && te === P.current) {
        ie.preventDefault(), k("container: ArrowRight on nav container → content"), ye("content"), re(P.current, "from-nav"), F(!1), O();
        return;
      }
      if (z === "ArrowLeft" && te === X.current) {
        ie.preventDefault(), k("container: ArrowLeft on secondary container → content"), ye("content"), re(X.current, "from-secondary"), pe(!1), O();
        return;
      }
      if (z === "ArrowRight") {
        ie.preventDefault(), k("container: ArrowRight → next container"), re(te, "container-roving"), te === P.current && F(!1), te === Z.current && ae(!1), te === X.current && pe(!1), de(Me + 1);
        return;
      }
      if (z === "ArrowLeft") {
        ie.preventDefault(), k("container: ArrowLeft → prev container"), re(te, "container-roving"), te === P.current && F(!1), te === Z.current && ae(!1), te === X.current && pe(!1), de(Me - 1);
        return;
      }
      if (z === "Home") {
        ie.preventDefault(), k("container: Home → first container"), re(te, "container-roving"), te === P.current && F(!1), te === Z.current && ae(!1), te === X.current && pe(!1), de(0);
        return;
      }
      if (z === "End") {
        ie.preventDefault(), k("container: End → last container"), re(te, "container-roving"), te === P.current && F(!1), te === Z.current && ae(!1), te === X.current && pe(!1), de(Q().length - 1);
        return;
      }
      if (z === "Enter" || z === " ") {
        if (ie.preventDefault(), te === P.current)
          ye("nav"), k("container: Enter/Space on nav → focus nav item", { navFocusedIndex: Te }), ne.current = Te, W.current = !0, be(Te);
        else if (te === Z.current) {
          ye("content"), re(Z.current, "descend-content"), ae(!1);
          const $e = oe(Z.current);
          k("container: Enter/Space on content → focus first focusable", { count: $e.length }), ($e[0] || Z.current)?.focus();
        } else if (te === X.current) {
          ye("secondary"), re(X.current, "descend-secondary"), pe(!1);
          const $e = oe(X.current);
          k("container: Enter/Space on secondary → focus first focusable", { count: $e.length }), ($e[0] || X.current)?.focus();
        }
        return;
      }
    }
    if (z === "Escape") {
      if (ve || Ne) {
        ie.preventDefault(), ye("containers"), k("Escape: from", ve ? "content" : "secondary", "→ containers (focus container)"), ve && re(Z.current, "escape-ascend"), Ne && re(X.current, "escape-ascend"), ve && setTimeout(() => R(Z.current), 10), Ne && setTimeout(() => R(X.current), 10);
        return;
      }
      if (je) {
        ie.preventDefault(), ye("containers"), k("Escape: from nav → containers (focus nav container)"), le(), R(P.current);
        return;
      }
      if (Ke) {
        ie.preventDefault(), ye("containers"), k("Escape: on container (stay in containers)");
        return;
      }
    }
    if (z === "Enter" || z === " ") {
      if (te === Z.current && ce === "content") {
        ie.preventDefault(), re(Z.current, "descend-content");
        const $e = oe(Z.current);
        k("Enter/Space on content container in content mode"), ($e[0] || Z.current)?.focus();
        return;
      }
      if (te === X.current && ce === "secondary") {
        ie.preventDefault(), re(X.current, "descend-secondary");
        const $e = oe(X.current);
        k("Enter/Space on secondary container in secondary mode"), ($e[0] || X.current)?.focus();
        return;
      }
    }
    if (z === "ArrowRight") {
      if (je || ce === "nav") {
        ie.preventDefault(), ye("content"), k("ArrowRight: from nav → content (focus content)"), re(P.current, "from-nav"), F(!1), O();
        return;
      }
      if (ve || ce === "content") {
        st && (ie.preventDefault(), ye("secondary"), k("ArrowRight: from content → secondary (focus secondary)"), re(Z.current, "from-content"), ae(!1), setTimeout(() => R(X.current), 10));
        return;
      }
    }
    if (z === "ArrowLeft") {
      if (Ne || ce === "secondary") {
        ie.preventDefault(), k("ArrowLeft: from secondary → content (focus content)"), re(X.current, "from-secondary"), pe(!1), O();
        return;
      }
      if (ve || ce === "content") {
        ie.preventDefault(), ye("nav"), k("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex: Te }), ne.current = Te, re(Z.current, "from-content"), ae(!1), be(Te);
        return;
      }
    }
    if ((z === "Enter" || z === " ") && (je || ce === "nav")) {
      ie.preventDefault();
      const $e = q.current, Pe = $e ? Array.from($e.querySelectorAll("[data-nav-item]")) : [];
      let Oe = ne.current ?? Te;
      if (Pe.length) {
        const Lt = document.activeElement, It = Lt ? Pe.indexOf(Lt) : -1;
        It >= 0 && (Oe = It);
      }
      Oe = Math.max(0, Math.min(Oe, Pe.length - 1)), Le(Oe), ne.current = Oe, k("Root: Enter/Space activate from nav context", { idx: Oe }), ee(p(t[Oe])), ye("content"), he.current = "content", ue.current = !0, le(), O();
      return;
    }
  }, Be = () => {
    const ie = () => {
      ue.current = !1, W.current = !1;
    }, Ae = (me) => {
      if (!q.current) return;
      const xe = Array.from(q.current.querySelectorAll("[data-nav-item]"));
      if (xe.length) {
        if (me.key === "ArrowDown") {
          me.preventDefault(), me.stopPropagation(), W.current = !1, ye("nav");
          const Se = ne.current ?? Te, Re = Math.min(xe.length - 1, Se + 1);
          Le(Re), ne.current = Re, be(Re), k("PrimaryNav: ArrowDown", { from: Se, to: Re });
        } else if (me.key === "ArrowUp") {
          me.preventDefault(), me.stopPropagation(), W.current = !1, ye("nav");
          const Se = ne.current ?? Te, Re = Math.max(0, Se - 1);
          Le(Re), ne.current = Re, be(Re), k("PrimaryNav: ArrowUp", { from: Se, to: Re });
        } else if (me.key === "Home") {
          me.preventDefault(), me.stopPropagation(), W.current = !1;
          const Se = 0;
          Le(Se), ne.current = Se, be(Se), k("PrimaryNav: Home", { to: Se });
        } else if (me.key === "End") {
          me.preventDefault(), me.stopPropagation(), W.current = !1;
          const Se = xe.length - 1;
          Le(Se), ne.current = Se, be(Se), k("PrimaryNav: End", { to: Se });
        }
      }
    }, z = (me) => {
    }, te = (me) => {
      if (me.key !== "Enter" && me.key !== " " || !q.current) return;
      const xe = Array.from(q.current.querySelectorAll("[data-nav-item]"));
      if (!xe.length) return;
      me.preventDefault();
      let Se = -1;
      const Ce = me.target?.closest?.("[data-nav-item]");
      Ce && (Se = xe.indexOf(Ce)), Se < 0 && (Se = ne.current ?? Te), Se = Math.max(0, Math.min(Se, xe.length - 1)), Le(Se), ne.current = Se, k("PrimaryNav: Enter/Space activate (capture)", { idx: Se }), ee(p(t[Se])), ye("content"), he.current = "content", ue.current = !0, se.current != null && (clearTimeout(se.current), se.current = null), le(), O();
    }, ge = (me) => {
      if (me.defaultPrevented) return;
      ue.current = !1;
      const xe = me.target;
      if (!xe) return;
      const Se = xe.closest("[data-nav-item]");
      if (!Se || !q.current || !q.current.contains(Se)) return;
      const Ce = Array.from(q.current.querySelectorAll("[data-nav-item]")).indexOf(Se);
      Ce < 0 || (Le(Ce), ne.current = Ce, k("PrimaryNav: click delegate activate", { idx: Ce }), ee(p(t[Ce])), ye("content"), le(), se.current != null && (clearTimeout(se.current), se.current = null), O());
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: q,
        className: "nhsfdp-primary-nav",
        role: "listbox",
        "aria-activedescendant": String(p(t[Math.max(0, Te)])),
        onKeyDownCapture: te,
        onKeyDown: Ae,
        onKeyUp: z,
        onPointerDown: ie,
        onMouseDown: ie,
        onClick: ge,
        children: t.map((me, xe) => {
          const Se = p(me), Re = xe === b, Ce = ce === "nav" && xe === Te;
          return /* @__PURE__ */ n.jsx("li", { id: String(Se), role: "option", "aria-selected": Re, children: /* @__PURE__ */ n.jsx(
            "button",
            {
              "data-nav-item": !0,
              tabIndex: Ce ? 0 : -1,
              type: "button",
              className: "nhsfdp-primary-nav__item" + (Re ? " is-current" : "") + (Ce ? " is-focused" : ""),
              "aria-current": Re ? "step" : void 0,
              onPointerDown: ie,
              onMouseDown: ie,
              onKeyDown: (je) => {
                if (je.key === "Enter" || je.key === " ") {
                  if (je.preventDefault(), W.current) {
                    W.current = !1;
                    return;
                  }
                  ne.current = xe, ue.current = !0, k("NavItem: onKeyDown activate", { i: xe, id: String(p(t[xe])) }), ee(p(t[xe])), ye("content"), he.current = "content", se.current != null && (clearTimeout(se.current), se.current = null), le(), O();
                }
              },
              onKeyUp: (je) => {
                if (je.key === "Enter" || je.key === " ") {
                  if (W.current) {
                    W.current = !1;
                    return;
                  }
                  ne.current = xe, k("NavItem: onKeyUp activate (fallback)", { i: xe, id: String(p(t[xe])) }), ee(p(t[xe])), ye("content"), he.current = "content", se.current != null && (clearTimeout(se.current), se.current = null), le(), O();
                }
              },
              onClick: (je) => {
                if (ue.current) {
                  ue.current = !1, je.preventDefault(), je.stopPropagation(), k("NavItem: ignored synthetic click after keyboard activation", { i: xe });
                  return;
                }
                Le(xe), ne.current = xe, k("NavItem: onClick select", { i: xe, id: String(Se) }), ee(Se), ye("content"), he.current = "content", se.current != null && (clearTimeout(se.current), se.current = null), le(), O();
              },
              children: me.label
            }
          ) }, String(Se));
        })
      }
    );
  }, Ye = () => {
    const ie = Math.max(0, b), Ae = ie > 0, z = ie < t.length - 1, te = m ? m(w) : x ? x(w) : !0;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
      A === "tablet" ? B : null,
      te && /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        Ae ? /* @__PURE__ */ n.jsx(
          er,
          {
            element: "button",
            text: "Back",
            onClick: () => {
              const ge = t[ie - 1];
              ge && ee(p(ge));
            }
          }
        ) : (
          // Keep space to avoid layout shift when back is not available
          /* @__PURE__ */ n.jsx(er, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        z ? /* @__PURE__ */ n.jsx(
          Ur,
          {
            element: "button",
            text: "Next",
            onClick: () => {
              const ge = t[ie + 1];
              ge && ee(p(ge));
            }
          }
        ) : (
          // Keep space to avoid layout shift when next is not available
          /* @__PURE__ */ n.jsx(Ur, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        Op,
        {
          steps: t,
          currentIndex: ie,
          onNavigate: (ge) => {
            const me = t[ge];
            me && ee(p(me));
          },
          renderCard: (ge, me, xe) => i ? i(ge) : l(ge)
        }
      )
    ] });
  }, lt = (ie) => /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsfdp-workflow-grid panes-" + (ie.panes ?? 2),
      onKeyDown: ke,
      ref: U,
      role: "grid",
      "aria-rowcount": 1,
      "aria-colcount": (ie.showPrimaryNav ? 1 : 0) + 1 + (ie.showSecondaryNav ? 1 : 0),
      "aria-label": "Workflow layout",
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-workflow-body", role: "row", children: [
        ie.showPrimaryNav && /* @__PURE__ */ n.jsx(
          "aside",
          {
            ref: P,
            className: "nhsfdp-pane primary-nav" + (we ? " is-active-pane" : ""),
            "aria-label": "Primary navigation",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (Ae) => {
              Ae.target === P.current && F(!0);
            },
            onBlur: (Ae) => {
              Ae.target === P.current && F(!1);
            },
            children: /* @__PURE__ */ n.jsx("section", { role: "complementary", "aria-label": "Primary navigation", children: /* @__PURE__ */ n.jsx(Be, {}) })
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "main",
          {
            ref: Z,
            className: "nhsfdp-pane content" + (Y ? " is-active-pane" : ""),
            "aria-live": "polite",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (Ae) => {
              Ae.target === Z.current && ae(!0);
            },
            onBlur: (Ae) => {
              Ae.target === Z.current && ae(!1);
            },
            children: [
              B,
              /* @__PURE__ */ n.jsx("div", { role: "main", children: l(w, H) })
            ]
          }
        ),
        (() => {
          const Ae = d ? d(w, D, H, (ge) => J(ge)) : D && D.length > 0 ? /* @__PURE__ */ n.jsx("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: D.map((ge) => {
            const me = C === ge.id;
            return /* @__PURE__ */ n.jsx("li", { role: "option", "aria-selected": me, children: /* @__PURE__ */ n.jsx(
              "button",
              {
                type: "button",
                className: "nhsfdp-secondary-nav__item" + (me ? " is-current" : ""),
                "data-sec-item": !0,
                onClick: () => J(ge.id),
                children: ge.label
              }
            ) }, String(ge.id));
          }) }) : void 0, z = c?.(w, H);
          return ie.showSecondaryNav && (Ae || z) ? /* @__PURE__ */ n.jsx(
            "aside",
            {
              ref: X,
              className: "nhsfdp-pane secondary-nav" + (fe ? " is-active-pane" : ""),
              "aria-label": "Secondary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (ge) => {
                ge.target === X.current && pe(!0);
              },
              onBlur: (ge) => {
                ge.target === X.current && pe(!1);
              },
              children: /* @__PURE__ */ n.jsxs("section", { role: "complementary", "aria-label": "Secondary navigation", children: [
                Ae,
                z
              ] })
            }
          ) : null;
        })()
      ] })
    }
  );
  return K ? A === "mobile" || !h && A === "tablet" || (L.panes ?? 1) === 1 ? /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: Ye() }) : /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: lt(L) }) : /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ n.jsxs("main", { className: "nhsfdp-pane content", children: [
    u ? u({ steps: t, current: w, onNavigate: ee }) : null,
    w ? l(w, w?.sections?.find((ie) => ie.id === (_?.(w) ?? w?.sections?.[0]?.id))) : null
  ] }) }) });
}
const Gp = typeof window < "u" && window.document ? V.useLayoutEffect : V.useEffect, pi = (e, t, r, o) => e == null || Number.isNaN(e) ? o : Math.min(r, Math.max(t, e)), Yp = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: o, isActive: s, topLaneIndex: a }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${a})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), p = r && e.childItems && e.childItems.length > 0, h = (m) => {
    p && (m.preventDefault(), o?.(e));
  }, x = p ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: h,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && h(m), m.key === "Escape" && s && h(m);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: De("nhsuk-product-roadmap__item", p && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: c, top: d, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...x,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          p && /* @__PURE__ */ n.jsx("span", { className: De("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Vp = id(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: o = 2,
  className: s,
  ariaLabel: a = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = Ve(() => /* @__PURE__ */ new Set()), [p, h] = Ve(() => /* @__PURE__ */ new Set()), x = qe(/* @__PURE__ */ new Set()), m = _e((I) => u.has(I), [u]), g = _e((I) => {
    f((E) => {
      const N = new Set(E);
      return N.has(I.id) ? (N.delete(I.id), h((C) => {
        const D = new Set(C);
        return D.add(I.id), D;
      }), setTimeout(() => h((C) => {
        const D = new Set(C);
        return D.delete(I.id), D;
      }), 240), l?.(I.id, !1)) : (N.add(I.id), l?.(I.id, !0)), N;
    });
  }, [l]);
  Gp(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const I = [];
    if (u.forEach((D) => {
      x.current.has(D) || I.push(D);
    }), x.current = new Set(u), !I.length) return;
    const E = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, N = I.map((D) => `.nhsuk-product-roadmap__inline-children[data-parent="${D}"] .nhsuk-product-roadmap__inline-child`).join(","), C = Array.from(document.querySelectorAll(N));
    if (C.length) {
      if (E) {
        C.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((D) => {
        (D.gsap || D.default || D).to(C, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        C.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, i]);
  const _ = _e(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), M = De("nhsuk-product-roadmap", s), T = pi(r, 120, 1200, 400), k = pi(o, 1, 6, 2), y = ze(() => e.map((I) => /* @__PURE__ */ new Date(I + " 01")), [e]), S = ze(() => {
    if (y.length === 0) {
      const N = /* @__PURE__ */ new Date();
      return [N, N];
    }
    const I = new Date(y[0]), E = sr.offset(new Date(y[y.length - 1]), 1);
    return [I, E];
  }, [y]), j = ze(() => aa().domain(S).range([0, y.length * T]), [S, y.length, T]), v = _e((I) => {
    if (I.startDate) {
      const ee = new Date(I.startDate), B = new Date(I.endDate ?? I.startDate);
      B < ee && B.setTime(ee.getTime());
      const K = j(ee), A = sr.offset(new Date(B), 1);
      let L = j(A);
      Number.isFinite(L) || (L = K + T);
      const G = Math.max(T * 0.25, L - K), U = K / T, P = G / T;
      return { ...I, _pxLeft: K, _pxWidth: G, _startFraction: U, _spanColumns: P };
    }
    const E = I.date ?? 1, N = I.dateOffset ?? 0, C = I.length ?? 1, D = I.partialLength ?? 1, H = E - 1 + N, J = C - 1 + D;
    return { ...I, _pxLeft: H * T, _pxWidth: J * T, _startFraction: H, _spanColumns: J };
  }, [j, T]), b = ze(() => t.map((I) => {
    const N = I.roadmapItems.map((D) => {
      const H = !D.childItems && D.children ? { ...D, childItems: D.children } : { ...D };
      return v(H);
    }).sort((D, H) => D._pxLeft !== H._pxLeft ? D._pxLeft - H._pxLeft : H._pxWidth - D._pxWidth), C = [];
    return N.forEach((D) => {
      const H = D._pxLeft, J = D._pxLeft + D._pxWidth;
      let ee = C.findIndex((B) => B <= H);
      ee === -1 && (ee = C.length, C.push(0)), C[ee] = J, D.verticalPosition = ee + 1;
    }), { ...I, roadmapItems: N, _laneCount: C.length };
  }), [t, v]), w = ze(() => b.map((I) => I._laneCount || 1), [b]), $ = ze(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: M,
      style: { "--column-width": `${T}px`, gridTemplateColumns: $ },
      role: "grid",
      "aria-label": a,
      "aria-colcount": e.length + 1,
      "aria-rowcount": b.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((I, E) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": E + 2, children: I }, `${I}-${E}`))
        ] }),
        b.map((I, E) => {
          const N = E + 2, C = w[E];
          let D, H = 0, J = [];
          i && c === "inline" && (J = I.roadmapItems.filter((A) => m(A.id) && A.childItems && A.childItems.length).map((A) => ({ id: A.id, lane: A.verticalPosition || 1, count: A.childItems.length })).sort((A, L) => A.lane - L.lane), H = J.reduce((A, L) => A + L.count, 0));
          const ee = C + H;
          D = `calc((${ee} * var(--roadmap-item-block-height)) + (max(0, ${ee} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let K = 0;
          return J.forEach((A) => {
            K += A.count, B[A.lane + 1] = K;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": N, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: I.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: D }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: I.roadmapItems.map((A, L) => {
              const G = (A.verticalPosition || 1) - 1, U = J.filter((q) => q.lane - 1 < G).reduce((q, ne) => q + ne.count, 0), P = G + U, Z = m(A.id), X = p.has(A.id);
              return /* @__PURE__ */ n.jsxs(nt.Fragment, { children: [
                /* @__PURE__ */ n.jsx(Yp, { item: A, maxLines: k, enableDrilldown: i, onExpand: g, isActive: Z, topLaneIndex: P, laneOffset: U }),
                i && c === "inline" && (Z || X) && A.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": A.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${A.title} child tasks`, children: A.childItems.map((q, ne) => {
                  const ue = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let W = A._pxLeft, se = A._pxWidth;
                  if (q.startDate) {
                    const he = new Date(q.startDate);
                    let Me = q.endDate ? new Date(q.endDate) : new Date(he);
                    Me < he && (Me = new Date(he));
                    const Ge = new Date(Me);
                    Ge.setDate(Ge.getDate() + 1);
                    const Te = j(he);
                    let Le = j(Ge);
                    (!Number.isFinite(Le) || Le <= Te) && (Le = Te + 6), W = Te, se = Math.max(6, Le - Te);
                  }
                  const ye = P + 1 + ne;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: De("nhsuk-product-roadmap__inline-child", q.status && `nhsuk-product-roadmap__inline-child--status-${q.status}`, !Z && X && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${W}px`, width: `${se}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${ye})`, height: ue, opacity: Z ? 0 : void 0, transform: Z ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: q.title })
                      ]
                    },
                    q.id ?? ne
                  );
                }) })
              ] }, A.id ?? L);
            }) }) })
          ] }, `${I.heading}-${E}`);
        }),
        i && c === "overlay" && u.size === 1 && (() => {
          const I = Array.from(u)[0], E = t.flatMap((N) => N.roadmapItems).find((N) => N.id === I);
          return !E || !E.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${E.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: E.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: _, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: E.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: E.childItems.map((N, C) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: N.title }),
                N.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: N.content })
              ] }, N.id ?? C)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: _, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Vp.displayName = "ProductRoadmap";
function yt(e) {
  return function() {
    return e;
  };
}
const ps = Math.PI, ms = 2 * ps, un = 1e-6, Zp = ms - un;
function $l(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function qp(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return $l;
  const r = 10 ** t;
  return function(o) {
    this._ += o[0];
    for (let s = 1, a = o.length; s < a; ++s)
      this._ += Math.round(arguments[s] * r) / r + o[s];
  };
}
class Jp {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? $l : qp(t);
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
  quadraticCurveTo(t, r, o, s) {
    this._append`Q${+t},${+r},${this._x1 = +o},${this._y1 = +s}`;
  }
  bezierCurveTo(t, r, o, s, a, i) {
    this._append`C${+t},${+r},${+o},${+s},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, r, o, s, a) {
    if (t = +t, r = +r, o = +o, s = +s, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, l = this._y1, c = o - t, d = s - r, u = i - t, f = l - r, p = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > un) if (!(Math.abs(f * c - d * u) > un) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = o - i, x = s - l, m = c * c + d * d, g = h * h + x * x, _ = Math.sqrt(m), M = Math.sqrt(p), T = a * Math.tan((ps - Math.acos((m + p - g) / (2 * _ * M))) / 2), k = T / M, y = T / _;
      Math.abs(k - 1) > un && this._append`L${t + k * u},${r + k * f}`, this._append`A${a},${a},0,0,${+(f * h > u * x)},${this._x1 = t + y * c},${this._y1 = r + y * d}`;
    }
  }
  arc(t, r, o, s, a, i) {
    if (t = +t, r = +r, o = +o, i = !!i, o < 0) throw new Error(`negative radius: ${o}`);
    let l = o * Math.cos(s), c = o * Math.sin(s), d = t + l, u = r + c, f = 1 ^ i, p = i ? s - a : a - s;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > un || Math.abs(this._y1 - u) > un) && this._append`L${d},${u}`, o && (p < 0 && (p = p % ms + ms), p > Zp ? this._append`A${o},${o},0,1,${f},${t - l},${r - c}A${o},${o},0,1,${f},${this._x1 = d},${this._y1 = u}` : p > un && this._append`A${o},${o},0,${+(p >= ps)},${f},${this._x1 = t + o * Math.cos(a)},${this._y1 = r + o * Math.sin(a)}`);
  }
  rect(t, r, o, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${o = +o}v${+s}h${-o}Z`;
  }
  toString() {
    return this._;
  }
}
function Al(e) {
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
  }, () => new Jp(t);
}
function El(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Pl(e) {
  this._context = e;
}
Pl.prototype = {
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
function Fl(e) {
  return new Pl(e);
}
function Rl(e) {
  return e[0];
}
function Bl(e) {
  return e[1];
}
function Hl(e, t) {
  var r = yt(!0), o = null, s = Fl, a = null, i = Al(l);
  e = typeof e == "function" ? e : e === void 0 ? Rl : yt(e), t = typeof t == "function" ? t : t === void 0 ? Bl : yt(t);
  function l(c) {
    var d, u = (c = El(c)).length, f, p = !1, h;
    for (o == null && (a = s(h = i())), d = 0; d <= u; ++d)
      !(d < u && r(f = c[d], d, c)) === p && ((p = !p) ? a.lineStart() : a.lineEnd()), p && a.point(+e(f, d, c), +t(f, d, c));
    if (h) return a = null, h + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : yt(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : yt(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : yt(!!c), l) : r;
  }, l.curve = function(c) {
    return arguments.length ? (s = c, o != null && (a = s(o)), l) : s;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? o = a = null : a = s(o = c), l) : o;
  }, l;
}
function gs(e, t, r) {
  var o = null, s = yt(!0), a = null, i = Fl, l = null, c = Al(d);
  e = typeof e == "function" ? e : e === void 0 ? Rl : yt(+e), t = typeof t == "function" ? t : yt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Bl : yt(+r);
  function d(f) {
    var p, h, x, m = (f = El(f)).length, g, _ = !1, M, T = new Array(m), k = new Array(m);
    for (a == null && (l = i(M = c())), p = 0; p <= m; ++p) {
      if (!(p < m && s(g = f[p], p, f)) === _)
        if (_ = !_)
          h = p, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), x = p - 1; x >= h; --x)
            l.point(T[x], k[x]);
          l.lineEnd(), l.areaEnd();
        }
      _ && (T[p] = +e(g, p, f), k[p] = +t(g, p, f), l.point(o ? +o(g, p, f) : T[p], r ? +r(g, p, f) : k[p]));
    }
    if (M) return l = null, M + "" || null;
  }
  function u() {
    return Hl().defined(s).curve(i).context(a);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : yt(+f), o = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : yt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (o = f == null ? null : typeof f == "function" ? f : yt(+f), d) : o;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : yt(+f), r = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : yt(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : yt(+f), d) : r;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(r);
  }, d.lineX1 = function() {
    return u().x(o).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : yt(!!f), d) : s;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, a != null && (l = i(a)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? a = l = null : l = i(a = f), d) : a;
  }, d;
}
function mi(e) {
  return e < 0 ? -1 : 1;
}
function gi(e, t, r) {
  var o = e._x1 - e._x0, s = t - e._x1, a = (e._y1 - e._y0) / (o || s < 0 && -0), i = (r - e._y1) / (s || o < 0 && -0), l = (a * s + i * o) / (o + s);
  return (mi(a) + mi(i)) * Math.min(Math.abs(a), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function xi(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Zo(e, t, r) {
  var o = e._x0, s = e._y0, a = e._x1, i = e._y1, l = (a - o) / 3;
  e._context.bezierCurveTo(o + l, s + l * t, a - l, i - l * r, a, i);
}
function Wr(e) {
  this._context = e;
}
Wr.prototype = {
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
        Zo(this, this._t0, xi(this, this._t0));
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
          this._point = 3, Zo(this, xi(this, r = gi(this, e, t)), r);
          break;
        default:
          Zo(this, this._t0, r = gi(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(Wr.prototype).point = function(e, t) {
  Wr.prototype.point.call(this, t, e);
};
function Gr(e) {
  return new Wr(e);
}
function Xp(e, t, r) {
  const o = el(e, t);
  return aa().domain(o).range(r);
}
function yi(e, t, r) {
  const [o, s] = el(e, t);
  if (!(Number.isFinite(o) && Number.isFinite(s)))
    return Fr().domain([0, 0]).range(r);
  let i;
  if (o <= 0)
    i = Math.min(0, o);
  else {
    const c = s - o, d = (c > 0 ? c : o) * 0.1;
    i = Math.max(0, o - d), i === o && (i = Math.max(0, o * 0.9));
  }
  const l = s ?? 0;
  return Fr().domain([i, l]).nice().range(r);
}
function xs(e, t, r, o) {
  const s = Hl().x(t).y(r);
  return o?.smooth !== !1 && s.curve(Gr), s(e) ?? "";
}
function Kp(e = {}) {
  const t = V.useRef(null), r = V.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [o, s] = V.useState({ width: 0, height: 0 });
  V.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        s({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const a = Math.max(0, o.width - r.left - r.right), i = Math.max(0, o.height - r.top - r.bottom);
  return { width: o.width, height: o.height, innerWidth: a, innerHeight: i, margin: r, ref: t };
}
const zl = V.createContext(null);
function dn() {
  return V.useContext(zl);
}
const Qp = ({
  height: e = 240,
  margin: t,
  width: r,
  className: o = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: a = "group",
  ariaLabel: i
}) => {
  const l = Kp(t), c = { height: e, position: "relative" };
  return r !== void 0 && (c.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: o, style: c, role: a, "aria-label": i, children: /* @__PURE__ */ n.jsx(zl.Provider, { value: l, children: s }) });
}, ca = V.createContext(null), _n = () => V.useContext(ca), em = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: o,
  children: s,
  xTickCount: a = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = dn(), p = t ?? f?.innerWidth ?? 0, h = r ?? f?.innerHeight ?? 0, x = V.useMemo(() => e.flatMap((y) => y.data), [e]), m = V.useCallback(
    (y) => {
      if (o) return o(y);
      const S = y.x;
      return S instanceof Date ? S : new Date(S);
    },
    [o]
  ), g = c ?? 6, _ = d ?? 6, M = V.useMemo(
    () => Xp(x, m, [
      g,
      Math.max(0, p - g)
    ]),
    [x, m, p, g]
  ), T = V.useMemo(() => {
    const y = Math.max(0, u ?? 0), S = Math.max(0, h - (_ + y));
    if (l) {
      const j = yi([], (v) => v.y, [
        S,
        _
      ]);
      return j.domain(l), j;
    }
    return yi(x, (j) => j.y, [S, _]);
  }, [x, h, l, _, u]), k = V.useMemo(
    () => ({
      xScale: M,
      yScale: T,
      getXTicks: (y = a) => M.ticks(y),
      getYTicks: (y = i) => T.ticks(y)
    }),
    [M, T, a, i]
  );
  return /* @__PURE__ */ n.jsx(ca.Provider, { value: k, children: s });
}, Mr = 16, Ir = 6, tm = 16, nm = 4, rm = 6, om = 3, sm = void 0, bi = ({
  type: e,
  scale: t,
  tickCount: r,
  tickValues: o,
  formatTick: s,
  label: a,
  offset: i,
  className: l,
  minLabelSpacing: c,
  maxTickLabelLength: d,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: p = !0,
  tickFormatPreset: h,
  yZeroBreak: x
}) => {
  const m = _n(), g = dn(), _ = t || (e === "x" ? m?.xScale : m?.yScale), M = r ?? (e === "x" ? 6 : 5), T = typeof s == "function", k = V.useMemo(() => {
    if (T || !h) return;
    const j = (v) => new Intl.DateTimeFormat(void 0, v);
    switch (h) {
      case "dayShortMonth":
        return (v) => {
          const b = v instanceof Date ? v : new Date(v);
          return `${b.getDate()}
${j({ month: "short" }).format(b)}`;
        };
      case "dayShortMonthYear":
        return (v) => {
          const b = v instanceof Date ? v : new Date(v);
          return `${b.getDate()}
${j({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "shortMonth":
        return (v) => {
          const b = v instanceof Date ? v : new Date(v);
          return j({ month: "short" }).format(b);
        };
      case "shortMonthYear":
        return (v) => {
          const b = v instanceof Date ? v : new Date(v);
          return `${j({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "hourMinute":
        return (v) => {
          const b = v instanceof Date ? v : new Date(v);
          return j({ hour: "2-digit", minute: "2-digit" }).format(b);
        };
      default:
        return;
    }
  }, [T, h]);
  let y = T ? s : k || ((j) => String(j));
  const S = V.useMemo(() => o && Array.isArray(o) ? o : _ ? typeof _.ticks == "function" ? _.ticks(M) : _.domain ? _.domain() : [] : [], [_, M, o]);
  if (e === "x" && !T && !h && S.length && S.every((j) => j instanceof Date)) {
    const j = S[0], v = S[S.length - 1], b = v.getTime() - j.getTime(), w = 24 * 3600 * 1e3, $ = 365 * w, I = j.getFullYear() === v.getFullYear(), E = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (b < 2 * w) {
      const N = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      y = (C) => N.format(C);
    } else if (b < 32 * w)
      y = (N) => {
        const C = N;
        return `${C.getDate()} ${E.format(C)}`;
      };
    else if (b < $ && I)
      y = (N) => E.format(N);
    else if (b < 2 * $) {
      const N = /* @__PURE__ */ new Set();
      y = (C) => {
        const D = C, H = D.getMonth();
        return N.has(H) || N.add(H), `${E.format(D)} ${D.getFullYear()}`;
      };
    } else
      y = (N) => String(N.getFullYear());
  }
  if (!_ || !g) return null;
  if (e === "x") {
    const j = i ?? g.innerHeight, v = typeof _.bandwidth == "function", b = v ? _.bandwidth() : 0, w = (E) => {
      const N = _(E);
      return v ? N + b / 2 : N;
    };
    let $ = c ?? 0;
    if (u && c == null) {
      const E = S.map(
        (C) => y(C).replace(/\n.*/g, "")
      ), N = E.length ? E.reduce((C, D) => C + D.length, 0) / E.length : 0;
      $ = Math.max(12, Math.round(N * 6 + 4));
    }
    const I = V.useMemo(() => {
      if (o && Array.isArray(o) || $ <= 0) return S;
      const E = [];
      let N = -1 / 0;
      for (const C of S) {
        const D = w(C);
        D - N >= $ && (E.push(C), N = D);
      }
      return E;
    }, [
      S,
      _,
      $,
      o,
      v,
      b
    ]);
    return /* @__PURE__ */ n.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${j})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ n.jsx("line", { x1: 0, x2: g.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          I.map((E, N) => {
            const C = y(E), D = d && C.length > d ? C.slice(0, Math.max(1, d - 1)) + "…" : C, H = p ? D.split(/\n/) : [D.replace(/\n/g, " ")], J = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ n.jsxs(
              "g",
              {
                transform: `translate(${w(E)},0)`,
                children: [
                  /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ n.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: J,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        H.map((ee, B) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: B === 0 ? 0 : "1.1em", children: ee }, B)),
                        D !== C && /* @__PURE__ */ n.jsx("title", { children: C })
                      ]
                    }
                  )
                ]
              },
              E?.toString?.() || N
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
          const j = !!x?.enabled, v = Math.max(Ir, x?.gapPx ?? Mr);
          if (!j)
            return /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: 0, y2: g.innerHeight, stroke: "currentColor" });
          const b = Math.max(0, g.innerHeight - v);
          return /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: 0, y2: b, stroke: "currentColor" });
        })(),
        S.map((j, v) => {
          const b = y(j), w = d && b.length > d ? b.slice(0, Math.max(1, d - 1)) + "…" : b, $ = p ? w.split(/\n/) : [w.replace(/\n/g, " ")];
          if (!!x?.enabled) {
            const E = Math.max(Ir, x?.gapPx ?? Mr), N = Math.max(0, g.innerHeight - E);
            if (_(j) > N - 1) return null;
          }
          return /* @__PURE__ */ n.jsxs(
            "g",
            {
              transform: `translate(0,${_(j)})`,
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
                      $.map((E, N) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: N === 0 ? 0 : "1.1em", children: E }, N)),
                      w !== b && /* @__PURE__ */ n.jsx("title", { children: b })
                    ]
                  }
                )
              ]
            },
            j?.toString?.() || v
          );
        }),
        !!x?.enabled && (() => {
          const j = Math.max(Ir, x?.gapPx ?? Mr), v = g.innerHeight, w = Math.max(0, v - j), $ = w, E = Math.max(4, v - $), N = nm, C = rm, D = Math.max(1, Math.round(x?.zigZag?.amplitudePx ?? N)), H = Math.max(1, Math.round(x?.zigZag?.stepXPx ?? om)), J = x?.zigZag?.heightPx ?? sm, ee = Math.max(4, Math.round(J ?? 0));
          let B, K;
          if (x?.zigZag?.heightPx && x.zigZag.heightPx > 0) {
            const X = Math.max(4, Math.min(E - 2, ee));
            B = Math.max(1, Math.floor(X / (2 * D))), K = Math.max(0, Math.min(X, B * 2 * D));
          } else typeof x?.zigZag?.cycles == "number" && x?.zigZag?.cycles > 0 ? (B = Math.max(1, Math.round(x.zigZag.cycles)), K = B * 2 * D, K = Math.min(K, E - 2), B = Math.max(1, Math.floor(K / (2 * D)))) : (B = C, K = Math.min(E - 2, B * 2 * D), B = Math.max(1, Math.floor(K / (2 * D))));
          const A = $ + (E - K) / 2, L = A + K;
          let G = "M0,0";
          const U = K > 0 ? Math.max(0, Math.floor((K - D) / (2 * D))) : 0, P = Math.max(0, (K - U * 2 * D) / 2), Z = D > 0 ? H * (P / D) : 0;
          P > 0 && (G += ` l${Z},${P}`);
          for (let X = 0; X < U; X++)
            G += ` l-${H},${D} l${H},${D}`;
          return P > 0 && (G += ` l-${Z},${P}`), /* @__PURE__ */ n.jsxs("g", { children: [
            /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: w, y2: A, stroke: "currentColor" }),
            /* @__PURE__ */ n.jsx("g", { transform: `translate(0,${A})`, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("path", { d: G, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: L, y2: v, stroke: "currentColor" }),
            /* @__PURE__ */ n.jsx("g", { transform: `translate(0,${v})`, children: /* @__PURE__ */ n.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        a && /* @__PURE__ */ n.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -g.innerHeight / 2,
            y: -g.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: a
          }
        )
      ]
    }
  );
}, am = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: o = "2 4",
  className: s
}) => {
  const a = _n(), i = dn();
  if (!a || !i) return null;
  const l = e === "y" ? a.getYTicks(t) : a.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, d) => /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: a.yScale(c),
        y2: a.yScale(c),
        stroke: r,
        strokeDasharray: o
      },
      d
    )),
    e === "x" && l.map((c, d) => /* @__PURE__ */ n.jsx(
      "line",
      {
        y1: 0,
        y2: i.innerHeight,
        x1: a.xScale(c),
        x2: a.xScale(c),
        stroke: r,
        strokeDasharray: o
      },
      d
    ))
  ] });
}, im = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, hr = {
  color: im
}, lm = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, No = {
  color: lm
}, cm = [
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
let qo = null, Jo = null, Xo = null, Ol = "optimized";
function dm() {
  const e = { color: { ...No.color, ...hr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const a = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!a) return;
    const i = a.$value || a.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), s);
    if (typeof i == "string") return i;
  }, r = [];
  try {
    for (let o = 1; o <= 12; o++) {
      const s = `color.data-viz.categorical.${o}`, a = t(s);
      if (!a) throw new Error(`Missing token ${s}`);
      r.push(a);
    }
    return r;
  } catch {
    return cm;
  }
}
function um() {
  return qo || (qo = dm()), qo;
}
function fm(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Ko(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function hm(e, t, r) {
  const o = Ko(e), s = Ko(t), a = Ko(r), i = o * 0.4124 + s * 0.3576 + a * 0.1805, l = o * 0.2126 + s * 0.7152 + a * 0.0722, c = o * 0.0193 + s * 0.1192 + a * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function pm(e, t, r) {
  let i = e / 95.047, l = t / 100, c = r / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = d(i), l = d(l), c = d(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function Ul(e) {
  const t = fm(e);
  if (!t) return null;
  const r = hm(t.r, t.g, t.b);
  return pm(r.x, r.y, r.z);
}
function vi(e, t) {
  const r = e.L - t.L, o = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(r * r + o * o + s * s);
}
function mm() {
  const e = um();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Ul(i));
  let r = 0, o = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += vi(l, t[f]), d++);
    const u = c / Math.max(1, d);
    u > o && (o = u, r = i);
  }
  const s = new Set(e.map((i, l) => l)), a = [];
  for (a.push(r), s.delete(r); s.size; ) {
    let i = Array.from(s)[0], l = -1;
    for (const c of s) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of a) {
        const p = t[f];
        if (p) {
          const h = vi(d, p);
          h < u && (u = h);
        }
      }
      u > l && (l = u, i = c);
    }
    a.push(i), s.delete(i);
  }
  return a.map((i) => e[i]);
}
function gm() {
  return Jo || (Jo = mm()), Jo;
}
function xm(e, t, r) {
  const o = (e + 16) / 116, s = t / 500 + o, a = o - r / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, c = i(o) * 100, d = i(a) * 108.883;
  return { X: l, Y: c, Z: d };
}
function ym(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let o = e * 3.2406 + t * -1.5372 + r * -0.4986, s = e * -0.9689 + t * 1.8758 + r * 0.0415, a = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), a = Math.min(1, Math.max(0, i(a))), { r: Math.round(o * 255), g: Math.round(s * 255), b: Math.round(a * 255) };
}
function bm(e, t, r) {
  return `#${[e, t, r].map((o) => o.toString(16).padStart(2, "0")).join("")}`;
}
function vm(e, t) {
  const r = Ul(e);
  if (!r) return e;
  const o = Math.min(100, Math.max(0, r.L + t)), { X: s, Y: a, Z: i } = xm(o, r.a, r.b), l = ym(s, a, i);
  return bm(l.r, l.g, l.b);
}
function wm() {
  const e = gm(), r = [12, -12, 24, -24].map((s) => e.map((a) => vm(a, s))), o = [...e];
  return r.forEach((s) => o.push(...s)), o;
}
function Sm() {
  return (!Xo || _m()) && (Xo = wm(), Wl = Ol), Xo;
}
let Wl = null;
function _m() {
  return Wl !== Ol;
}
function Rt(e) {
  const t = Sm();
  return t[e % t.length];
}
let Ln = null, ar = null, ir = null, lr = null;
function km() {
  const e = hr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Ln = [];
    for (let a = 1; a <= 12; a++) {
      const i = t[String(a)]?.$value || t[String(a)]?.value;
      Ln.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    ar = {}, Object.keys(r).forEach((a) => {
      const i = r[a]?.$value || r[a]?.value;
      typeof i == "string" && (ar[a] = i);
    });
    const o = e.severity || {}, s = e["org-level"] || {};
    lr = {}, Object.keys(s).forEach((a) => {
      const i = s[a]?.$value || s[a]?.value;
      typeof i == "string" && (lr[a] = i);
    }), ir = {}, Object.keys(o).forEach((a) => {
      const i = o[a]?.$value || o[a]?.value;
      typeof i == "string" && (ir[a] = i);
    });
  }
}
function jo() {
  (!Ln || !ar || !ir || !lr) && km();
}
function vn(e) {
  return jo(), Ln ? Ln[e % Ln.length] : "#212b32";
}
function Cm(e) {
  return jo(), ar ? ar[e] : void 0;
}
function Yr(e, t) {
  return Cm(e) || vn(t);
}
const ys = ["low", "moderate", "high", "critical"];
let Qo = null;
function Nm() {
  const e = { color: { ...No.color, ...hr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const a = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!a) return;
    const i = a.$value || a.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return ys.forEach((o) => {
    const s = t(`color.data-viz.severity.${o}`);
    s && (r[o] = s);
  }), r;
}
function Gl() {
  return Qo || (Qo = Nm()), Qo;
}
function jm(e) {
  return Gl()[e.toLowerCase()];
}
function Mm(e, t) {
  return jm(e) || Gl()[ys[t % ys.length]] || Rt(t);
}
function Im(e) {
  return jo(), ir ? ir[e] : void 0;
}
function Dm(e, t) {
  return Im(e) || vn(t);
}
const bs = ["trust", "ambulance", "icb", "region"];
let es = null;
function Tm() {
  const e = { color: { ...No.color, ...hr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const a = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!a) return;
    const i = a.$value || a.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return bs.forEach((o) => {
    const s = t(`color.data-viz.org-level.${o}`);
    s && (r[o] = s);
  }), r;
}
function Yl() {
  return es || (es = Tm()), es;
}
function Lm(e) {
  return Yl()[e.toLowerCase()];
}
function $m(e, t) {
  return Lm(e) || Yl()[bs[t % bs.length]] || Rt(t);
}
function Am(e) {
  return jo(), lr ? lr[e] : void 0;
}
function Em(e, t) {
  return Am(e) || vn(t);
}
let ts = null;
const Pm = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Fm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Rm() {
  const e = { color: { ...No.color, ...hr.color } }, t = (s, a = /* @__PURE__ */ new Set()) => {
    if (a.has(s)) return;
    a.add(s);
    const i = s.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), a) : typeof l == "string" ? l : void 0;
  }, r = {}, o = [];
  return Pm.forEach((s) => {
    const a = t(`color.data-viz.region.${s}`);
    a ? r[s] = a : o.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : o.length && console.warn(`[DataViz] Missing region colour tokens: ${o.join(", ")}.`)), r;
}
function Bm() {
  return ts || (ts = Rm()), ts;
}
function Hm(e) {
  return Bm()[Fm(e)];
}
function $n(e, t) {
  return Hm(e) || Rt(t);
}
const Vl = V.createContext(null), pr = () => V.useContext(Vl), x1 = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: o
}) => {
  const [s, a] = V.useState(() => new Set(e)), i = r !== void 0, l = V.useMemo(() => i ? new Set(r) : s, [i, r, s]), c = V.useCallback((u) => {
    i || a(new Set(u)), o?.(Array.from(u));
  }, [i, o]), d = V.useMemo(() => ({
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
  return /* @__PURE__ */ n.jsx(Vl.Provider, { value: d, children: t });
}, Zl = V.createContext(null), nn = () => V.useContext(Zl), zm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const o = _n(), s = pr(), [a, i] = V.useState(null), l = V.useRef(/* @__PURE__ */ new Map()), [c, d] = V.useState([]), u = V.useCallback(
    (j, v) => {
      l.current.set(j, v);
    },
    []
  ), f = V.useCallback((j) => {
    l.current.delete(j);
  }, []), p = V.useCallback(
    (j, v) => {
      if (!o) return;
      const { xScale: b, yScale: w } = o;
      let $ = null, I = 1 / 0;
      l.current.forEach((E, N) => {
        E.forEach((C, D) => {
          const H = b(C.x), J = w(C.y), ee = H - j, B = J - v, K = Math.sqrt(ee * ee + B * B);
          K < I && (I = K, $ = {
            seriesId: N,
            index: D,
            x: C.x,
            y: C.y,
            clientX: H,
            clientY: J
          });
        });
      }), $ && I <= t ? i($) : i(null);
    },
    [o, t]
  ), h = V.useCallback(() => i(null), []);
  V.useEffect(() => {
    if (!a) {
      d([]);
      return;
    }
    if (!o) return;
    const { xScale: j, yScale: v } = o, b = [];
    l.current.forEach((w, $) => {
      w.forEach((I, E) => {
        (a.x instanceof Date && I.x instanceof Date ? I.x.getTime() === a.x.getTime() : I.x === a.x) && b.push({
          seriesId: $,
          index: E,
          x: I.x,
          y: I.y,
          clientX: j(I.x),
          clientY: v(I.y)
        });
      });
    }), b.sort((w, $) => w.seriesId.localeCompare($.seriesId)), d(b);
  }, [a, o]);
  const x = V.useCallback(
    (j) => {
      if (!a) return;
      const v = l.current.get(a.seriesId);
      if (!v) return;
      let b = a.index + j;
      if (b < 0 || b >= v.length) {
        if (!r) return;
        b = (b + v.length) % v.length;
      }
      const w = v[b];
      if (!o) return;
      const { xScale: $, yScale: I } = o;
      i({
        seriesId: a.seriesId,
        index: b,
        x: w.x,
        y: w.y,
        clientX: $(w.x),
        clientY: I(w.y)
      });
    },
    [a, o, r]
  ), m = V.useCallback(
    (j) => {
      let v = Array.from(l.current.keys());
      if (s && (v = v.filter((H) => !s.isHidden(H))), v.length === 0) return;
      if (!a) {
        const H = v[0], J = l.current.get(H);
        if (!J || !o) return;
        const { xScale: ee, yScale: B } = o, K = J[0];
        i({
          seriesId: H,
          index: 0,
          x: K.x,
          y: K.y,
          clientX: ee(K.x),
          clientY: B(K.y)
        });
        return;
      }
      const b = v.indexOf(a.seriesId);
      if (b === -1) return;
      let w = b + j;
      if (w < 0 || w >= v.length) {
        if (!r) return;
        w = (w + v.length) % v.length;
      }
      const $ = v[w], I = l.current.get($);
      if (!I || !o) return;
      const E = Math.min(a.index, I.length - 1), N = I[E], { xScale: C, yScale: D } = o;
      i({
        seriesId: $,
        index: E,
        x: N.x,
        y: N.y,
        clientX: C(N.x),
        clientY: D(N.y)
      });
    },
    [a, o, r, s]
  ), g = V.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (s && (j = j.filter((E) => !s.isHidden(E))), j.length === 0) return;
    const v = a ? a.seriesId : j[0], b = l.current.get(v);
    if (!b || b.length === 0 || !o) return;
    const w = b[0], { xScale: $, yScale: I } = o;
    i({
      seriesId: v,
      index: 0,
      x: w.x,
      y: w.y,
      clientX: $(w.x),
      clientY: I(w.y)
    });
  }, [a, o, s]), _ = V.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (s && (j = j.filter((N) => !s.isHidden(N))), j.length === 0) return;
    const v = a ? a.seriesId : j[0], b = l.current.get(v);
    if (!b || b.length === 0 || !o) return;
    const w = b.length - 1, $ = b[w], { xScale: I, yScale: E } = o;
    i({
      seriesId: v,
      index: w,
      x: $.x,
      y: $.y,
      clientX: I($.x),
      clientY: E($.y)
    });
  }, [a, o, s]), M = V.useCallback(
    () => x(1),
    [x]
  ), T = V.useCallback(
    () => x(-1),
    [x]
  ), k = V.useCallback(
    () => m(1),
    [m]
  ), y = V.useCallback(
    () => m(-1),
    [m]
  ), S = V.useMemo(
    () => ({
      focused: a,
      setFocused: i,
      aggregated: c,
      focusNearest: p,
      clear: h,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: M,
      focusPrevPoint: T,
      focusNextSeries: k,
      focusPrevSeries: y,
      focusFirstPoint: g,
      focusLastPoint: _
    }),
    [
      a,
      c,
      p,
      h,
      u,
      f,
      M,
      T,
      k,
      y,
      g,
      _
    ]
  );
  return /* @__PURE__ */ n.jsx(Zl.Provider, { value: S, children: e });
}, Om = ({
  series: e,
  seriesIndex: t,
  palette: r,
  showPoints: o,
  focusablePoints: s,
  focusIndex: a,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: c = 1,
  smooth: d = !0,
  gradientFillId: u,
  colors: f
}) => {
  const p = _n();
  if (!p) return null;
  const { xScale: h, yScale: x } = p, g = pr()?.isHidden(e.id) ?? !1, _ = g && l === "fade";
  if (g && l === "remove")
    return null;
  const M = nn();
  V.useEffect(() => {
    if (!M) return;
    const v = e.data.map((b) => ({ x: i(b), y: b.y }));
    return M.registerSeries(e.id, v), () => M.unregisterSeries(e.id);
  }, [M, e.id, e.data, i]);
  const T = V.useMemo(
    () => xs(
      e.data,
      (v) => h(i(v)),
      (v) => x(v.y),
      { smooth: d }
    ),
    [e.data, h, x, i, d]
  ), k = V.useMemo(() => {
    if (!e.data.length) return "";
    const [v] = x.domain(), b = gs().x((w) => h(i(w))).y0(() => x(v)).y1((w) => x(w.y));
    return d && b.curve(Gr), b(e.data) || "";
  }, [e.data, h, x, i, d]), y = f && f[t], S = e.color || y || (r === "region" ? $n(e.id, t) : Rt(t)), j = r === "region" ? Yr(e.id, t) : vn(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: _ ? 0.25 : 1,
      "aria-hidden": _ ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: k,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: T,
            fill: "none",
            stroke: S,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        o && e.data.map((v, b) => {
          const w = h(i(v)), $ = x(v.y), I = s ? 0 : -1, E = !_ && (s && b === a || M?.focused?.seriesId === e.id && M.focused.index === b), N = () => {
            M && !_ && M.setFocused({
              seriesId: e.id,
              index: b,
              x: i(v),
              y: v.y,
              clientX: w,
              clientY: $
            });
          }, C = () => {
            M && M.focused?.seriesId === e.id && M.focused.index === b && M.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: w,
              cy: $,
              r: E ? 5 : 3.5,
              stroke: E ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : j,
              strokeWidth: E ? 2 : 1,
              fill: E ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : S,
              className: "fdp-line-point",
              tabIndex: _ ? -1 : I,
              "aria-label": `${e.label || e.id} ${i(v).toDateString()} value ${v.y}`,
              "data-series": e.id,
              "data-index": b,
              onMouseEnter: N,
              onFocus: N,
              onMouseLeave: C,
              onBlur: C
            },
            b
          );
        })
      ]
    }
  );
}, Um = ({ polite: e = !0, format: t }) => {
  const r = nn(), [o, s] = V.useState(""), a = V.useRef("");
  return V.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let c;
    if (l && l.length > 1) {
      const d = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Wm(i.seriesId, i.x, i.y, i.index);
    if (c !== a.current) {
      a.current = c, s("");
      const d = setTimeout(() => s(c), 10);
      return () => clearTimeout(d);
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
function Wm(e, t, r, o) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${o + 1}, ${s}, value ${r}`;
}
const y1 = () => {
  const e = nn(), t = dn();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: o } = e, { innerWidth: s, innerHeight: a } = t, i = Math.min(Math.max(r.clientX, 0), s), l = Math.min(Math.max(r.clientY, 0), a), c = i + 8, d = l - 8, u = o.length > 1, f = r.x instanceof Date ? r.x.toDateString() : String(r.x), p = u ? f : `${f} • ${r.y}`, h = /\d+$/.exec(r.seriesId || ""), x = h ? parseInt(h[0], 10) - 1 : 0, m = Rt(x >= 0 ? x : 0) || "#005eb8", g = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: g, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: g, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const M = o.map((j) => `${j.seriesId}: ${j.y}`), T = [p, ...M], k = T.reduce((j, v) => Math.max(j, v.length), 0), y = Math.max(90, k * 6.2 + 16), S = 16 * T.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: c, y: d - S, rx: 4, ry: 4, width: y, height: S, fill: "#212b32", opacity: 0.92 }),
        T.map((j, v) => /* @__PURE__ */ n.jsx("text", { x: c + 8, y: d - S + 6 + 16 * (v + 0.7), fill: "#fff", fontSize: 12, children: j }, v))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, p.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: p })
    ] })
  ] });
}, b1 = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: o = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: a,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: c
}) => {
  const d = pr(), u = !!(d && !o && !l && a === void 0), f = o || u, p = e || [], h = a !== void 0, [x, m] = V.useState(new Set(i)), g = h ? new Set(a) : x, [_, M] = V.useState(""), T = (k) => {
    if (u && d) {
      const I = d.isHidden(k);
      d.toggle(k);
      const N = p.find((D) => D.id === k)?.label || k, C = c ? c(k, I, N) : `${N} ${I ? "shown" : "hidden"}`;
      M(C);
      return;
    }
    if (!f) return;
    const y = new Set(g), S = y.has(k);
    S ? y.delete(k) : y.add(k), h || m(y);
    const j = p.filter((I) => !y.has(I.id)).map((I) => I.id), v = Array.from(y);
    l?.(j, v);
    const w = p.find((I) => I.id === k)?.label || k, $ = c ? c(k, S, w) : `${w} ${S ? "shown" : "hidden"}`;
    M($);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: p.map((k, y) => {
      const S = k.palette || t, j = k.color || (S === "region" ? $n(k.id, y) : S === "severity" ? Mm(k.id, y) : S === "org-level" ? $m(k.id, y) : Rt(y));
      let v = k.stroke || (S === "region" ? Yr(k.id, y) : S === "severity" ? Dm(k.id, y) : S === "org-level" ? Em(k.id, y) : vn(y));
      if (s && v) {
        const $ = v.trim().toLowerCase();
        ($ === "#fff" || $ === "#ffffff" || $ === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test($)) && (v = "#212b32");
      }
      const b = u && d ? d.isHidden(k.id) : g.has(k.id), w = f ? {
        "aria-pressed": !b,
        "aria-label": `${k.label} (${b ? "show" : "hide"})`,
        onClick: () => T(k.id)
      } : { "aria-label": k.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${b ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: j,
              backgroundImage: k.patternDataUrl ? `url(${k.patternDataUrl})` : void 0,
              backgroundSize: k.patternDataUrl ? "auto" : void 0,
              borderColor: v
            },
            ...w
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: k.label })
      ] }, k.id);
    }) }),
    f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: _ })
  ] });
}, v1 = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: o,
  areaOnly: s = !1,
  visibilityMode: a = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = _n();
  if (!f) return null;
  const { xScale: p, yScale: h } = f, m = pr()?.isHidden(e.id) ?? !1, g = m && a === "fade";
  if (m && a === "remove") return null;
  const _ = nn();
  V.useEffect(() => {
    if (!_) return;
    const j = e.data.map((v) => ({ x: o(v), y: v.y }));
    return _.registerSeries(e.id, j), () => _.unregisterSeries(e.id);
  }, [_, e.id, e.data, o]);
  const M = u && u[t], T = e.color || M || (r === "region" ? $n(e.id, t) : Rt(t)), k = V.useMemo(() => c && c.length === e.data.length ? xs(
    e.data,
    (j) => p(o(j)),
    (j) => {
      const v = e.data.indexOf(j);
      return h(c[v].y1);
    },
    { smooth: l }
  ) : xs(
    e.data,
    (j) => p(o(j)),
    (j) => h(j.y),
    { smooth: l }
  ), [e.data, c, p, h, o, l]), y = V.useMemo(() => {
    if (c && c.length === e.data.length) {
      const $ = gs().x((I) => p(o(I))).y0((I, E) => h(c[E].y0)).y1((I, E) => h(c[E].y1));
      return l && $.curve(Gr), $(e.data) || "";
    }
    const [j, v] = h.domain();
    let b = i;
    b < j ? b = j : b > v && (b = v);
    const w = gs().x(($) => p(o($))).y0(() => h(b)).y1(($) => h($.y));
    return l && w.curve(Gr), w(e.data) || "";
  }, [e.data, c, p, h, o, i, l]), S = V.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: S, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: T, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: T, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: y,
            fill: d ? `url(#${S})` : T,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ n.jsx("path", { d: k, fill: "none", stroke: T, strokeWidth: 1 })
      ]
    }
  );
}, w1 = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
  palette: o,
  parseX: s,
  focusable: a = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: c,
  adaptive: d = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: f = "remove",
  colorMode: p = "series",
  allSeries: h,
  stacked: x,
  gapRatio: m = 0.15,
  minBarWidth: g,
  gradientFill: _ = !1,
  gradientStrokeMatch: M = !0,
  opacity: T = 1,
  fadedOpacity: k = 0.25,
  flatFillOpacity: y = 1,
  colors: S
}) => {
  const j = Math.max(0, m), v = _n(), b = dn();
  if (!v || !b) return null;
  const { xScale: w, yScale: $ } = v, E = pr()?.isHidden(e.id) ?? !1, N = E && f === "fade";
  if (E && f === "remove") return null;
  const C = nn();
  V.useEffect(() => {
    if (!C) return;
    const q = e.data.map((ne) => ({ x: s(ne), y: ne.y }));
    return C.registerSeries(e.id, q), () => C.unregisterSeries(e.id);
  }, [C, e.id, e.data, s]);
  const D = typeof w.bandwidth == "function", H = D ? w.bandwidth() : void 0, J = V.useMemo(() => {
    if (H != null) return H;
    const q = h && h.length ? h : [e], ne = [];
    q.forEach((ce) => {
      ce.data.forEach((ye) => {
        const he = w(s(ye));
        Number.isFinite(he) && ne.push(he);
      });
    });
    const ue = ne.sort((ce, ye) => ce - ye);
    if (ue.length <= 1) return 40;
    const W = [];
    for (let ce = 1; ce < ue.length; ce++)
      W.push(ue[ce] - ue[ce - 1]);
    return W.sort((ce, ye) => ce - ye), (W[Math.floor(W.length / 2)] || 40) * i;
  }, [e.data, h, w, s, i, H]), { basePerBar: ee } = V.useMemo(() => {
    if (D) {
      const ue = J, W = Math.max(
        1,
        (ue - l * (r - 1)) / r
      ), se = e.barWidth ?? c;
      let ce = se ? Math.min(se, ue) : W;
      if (d) {
        const ye = ue * Math.min(1, Math.max(0.05, u)), he = Math.max(
          1,
          (ye - l * (r - 1)) / r
        );
        ce = se ? Math.min(ce, he) : he;
      }
      return { basePerBar: ce };
    }
    const q = e.barWidth ?? c, ne = Math.max(
      1,
      (J - l * (r - 1)) / r
    );
    if (d) {
      const ue = h && h.length ? h : [e], W = [];
      ue.forEach(
        (Ge) => Ge.data.forEach((Te) => {
          const Le = w(s(Te));
          Number.isFinite(Le) && W.push(Le);
        })
      ), W.sort((Ge, Te) => Ge - Te);
      const se = [];
      for (let Ge = 1; Ge < W.length; Ge++)
        se.push(W[Ge] - W[Ge - 1]);
      se.sort((Ge, Te) => Ge - Te);
      const ye = (se[Math.floor(se.length / 2)] || J) * Math.min(1, Math.max(0.05, u)), he = Math.max(
        1,
        (ye - l * (r - 1)) / r
      );
      return { basePerBar: q ? Math.min(q, he) : he };
    }
    return q ? { basePerBar: Math.min(q, ne) } : { basePerBar: ne };
  }, [
    D,
    J,
    l,
    r,
    c,
    e.barWidth,
    d,
    u,
    h,
    w,
    s
  ]), B = V.useMemo(() => {
    if (D) return [];
    const q = [];
    return (h && h.length ? h : [e]).forEach(
      (ue) => ue.data.forEach((W) => {
        const se = w(s(W));
        Number.isFinite(se) && q.push(se);
      })
    ), q.sort((ue, W) => ue - W), Array.from(new Set(q));
  }, [D, h, e, w, s]), K = V.useMemo(() => {
    if (D)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: b.innerWidth }
      ];
    const q = [];
    for (let ne = 0; ne < B.length; ne++) {
      const ue = B[ne], W = ne === 0 ? 0 : (B[ne - 1] + ue) / 2, se = ne === B.length - 1 ? b.innerWidth : (ue + B[ne + 1]) / 2;
      q.push({
        center: ue,
        left: Math.max(0, W),
        right: Math.min(b.innerWidth, se)
      });
    }
    return q;
  }, [D, B, b.innerWidth]), A = V.useMemo(() => {
    if (D || !K.length)
      return;
    const q = Math.min(1, Math.max(0.05, i)), ne = K.map((ye) => Math.max(2, ye.right - ye.left)), ue = ne.map(
      (ye) => Math.max(2, Math.min(ye - 1, ye * q))
    );
    let W = Math.min(...ue);
    if (g)
      if (r <= 1) {
        const ye = Math.min(...ne.map((he) => he - 1));
        ye >= g && W < g && (W = Math.min(ye, g));
      } else {
        const ye = Math.min(...ne.map((Me) => Me - 1)), he = g * r + (r - 1) * (g * j);
        he <= ye && W < he && (W = he);
      }
    if (r <= 1)
      return g && W < g && ne.every((he) => he >= g) ? { groupWidth: g, barWidth: g } : { groupWidth: W, barWidth: W };
    let se = W / (r + (r - 1) * j);
    return se < 1 && (se = 1), g && se < g && g * r + (r - 1) * (g * j) <= W && (se = g), { groupWidth: se * r + (r - 1) * (se * j), barWidth: se };
  }, [
    D,
    K,
    i,
    r,
    j,
    g
  ]), L = S && S[t] ? S[t] : void 0, G = e.color || L || (o === "region" ? $n(e.id, t) : Rt(t)), U = o === "region" ? Yr(e.id, t) : vn(t), P = M && (e.color || L) ? G : U, Z = Number.isFinite($(0)) ? $(0) : $.range()[0], X = V.useId();
  return x && x.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: N ? k : T,
      "aria-hidden": N ? !0 : void 0,
      children: [
        _ && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: X,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: G, stopOpacity: 0.3 }),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: G,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: G,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((q, ne) => {
          const ue = s(q), W = w(D ? q.x : ue);
          let se, ce;
          if (D)
            se = J, ce = W;
          else {
            const Y = K.find(
              (ae) => Math.abs(ae.center - W) < 0.5
            );
            if (!Y || !A)
              se = ee, ce = W - ee / 2;
            else {
              const { groupWidth: ae } = A;
              se = ae;
              let fe = W - ae / 2;
              fe < Y.left && (fe = Y.left), fe + ae > Y.right && (fe = Math.max(Y.left, Y.right - ae)), ce = fe;
            }
          }
          const ye = x[ne], he = $(ye.y0), Me = $(ye.y1), Ge = Math.min(he, Me), Te = Math.abs(Me - he) || 1;
          if (!D && g && se < g) {
            const Y = K.find(
              (ae) => Math.abs(ae.center - W) < 0.5
            );
            if (Y) {
              const ae = Math.max(2, Y.right - Y.left - 1), fe = Math.min(ae, g);
              fe > se && (se = fe, ce = Math.max(
                Y.left,
                Math.min(Y.right - se, W - se / 2)
              ));
            }
          }
          const Le = !N && C?.focused?.seriesId === e.id && C.focused.index === ne, we = () => {
            !C || N || C.setFocused({
              seriesId: e.id,
              index: ne,
              x: ue,
              y: ye.y1 - ye.y0,
              clientX: ce + se / 2,
              clientY: Ge
            });
          }, F = () => {
            C?.focused?.seriesId === e.id && C.focused.index === ne && C.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: ce,
              y: Ge,
              width: se,
              height: Te,
              fill: _ ? `url(#${X})` : G,
              ..._ ? {} : { fillOpacity: y },
              stroke: Le ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : _ && M ? G : void 0,
              strokeWidth: Le ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: N || !a ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${ye.y1 - ye.y0}`,
              onMouseEnter: we,
              onFocus: we,
              onMouseLeave: F,
              onBlur: F
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
      opacity: N ? k : T,
      "aria-hidden": N ? !0 : void 0,
      children: [
        _ && /* @__PURE__ */ n.jsxs("defs", { children: [
          p === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: X,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: G, stopOpacity: 0.3 }),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: G,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: G,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          p === "category" && e.data.map((q, ne) => {
            const W = S && S[ne] || (o === "region" ? $n(String(q.x), ne) : Rt(ne)), se = `${X}-${ne}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: se,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: W, stopOpacity: 0.3 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "60%", stopColor: W, stopOpacity: 0.14 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: W, stopOpacity: 0.06 })
                ]
              },
              se
            );
          })
        ] }),
        e.data.map((q, ne) => {
          const ue = s(q), W = w(D ? q.x : ue);
          let se, ce;
          if (D) {
            const R = J;
            if (r <= 1)
              ce = R, se = W;
            else {
              ce = Math.max(
                1,
                R / (r + (r - 1) * j)
              );
              const O = ce * j, oe = ce * r + O * (r - 1);
              se = W + (R - oe) / 2 + t * (ce + O);
            }
          } else {
            const R = K.find((O) => O.center === W);
            if (!R || !A)
              ce = ee, se = W - ee / 2, g && ce < g && (ce = g, se = W - ce / 2);
            else {
              const { barWidth: O } = A;
              ce = O;
              const oe = r > 1 ? O * j : 0, Q = ce * r + oe * (r - 1);
              let re = W - Q / 2;
              re < R.left && (re = R.left), re + Q > R.right && (re = Math.max(R.left, R.right - Q)), se = re + t * (ce + oe);
            }
            if (g && ce < g) {
              const O = K.find(
                (oe) => Math.abs(oe.center - W) < 0.5
              );
              if (O) {
                const oe = Math.max(2, O.right - O.left - 1), Q = Math.min(oe, g);
                if (Q > ce)
                  if (r <= 1)
                    ce = Q, se = Math.max(
                      O.left,
                      Math.min(O.right - ce, W - ce / 2)
                    );
                  else {
                    const re = Q * j, le = Q * r + re * (r - 1);
                    if (le <= O.right - O.left - 1) {
                      ce = Q;
                      const de = le;
                      let be = W - de / 2;
                      be < O.left && (be = O.left), be + de > O.right && (be = Math.max(
                        O.left,
                        O.right - de
                      )), se = be + t * (ce + re);
                    }
                  }
              }
            }
          }
          const ye = se + ce / 2, he = $(q.y), Me = Math.min(Z, he), Ge = Math.abs(Z - he), Te = !N && C?.focused?.seriesId === e.id && C.focused.index === ne, Le = () => {
            !C || N || C.setFocused({
              seriesId: e.id,
              index: ne,
              x: ue,
              y: q.y,
              clientX: ye,
              clientY: he
            });
          }, we = () => {
            C?.focused?.seriesId === e.id && C.focused.index === ne && C.clear();
          }, F = p === "category" && S ? S[ne] : void 0, Y = p === "category" ? F || (o === "region" ? $n(String(q.x), ne) : Rt(ne)) : G, ae = p === "category" ? `${X}-${ne}` : X, fe = _ && M ? Y : p === "category" ? o === "region" ? Yr(String(q.x), ne) : vn(ne) : P, pe = Te ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : fe || Y;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: se,
              y: Me,
              width: ce,
              height: Ge || 1,
              fill: _ ? `url(#${ae})` : Y,
              ..._ ? {} : { fillOpacity: y },
              stroke: pe,
              strokeWidth: Te ? 2 : 1,
              className: "fdp-bar",
              tabIndex: N || !a ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${q.y}`,
              onMouseEnter: Le,
              onFocus: Le,
              onMouseLeave: we,
              onBlur: we
            },
            ne
          );
        })
      ]
    }
  );
}, S1 = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: o = 0.1,
  paddingOuter: s = 0.05,
  children: a,
  yTickCount: i = 5
}) => {
  const l = dn(), c = t ?? l?.innerWidth ?? 0, d = r ?? l?.innerHeight ?? 0, u = V.useMemo(() => e.flatMap((g) => g.data), [e]), f = V.useMemo(() => {
    const g = /* @__PURE__ */ new Set();
    return u.forEach((_) => g.add(_.x)), Array.from(g);
  }, [u]), p = V.useMemo(
    () => Math.max(0, ...u.map((g) => g.y)),
    [u]
  ), h = V.useMemo(
    () => nl().domain(f).range([0, c]).paddingInner(o).paddingOuter(s),
    [f, c, o, s]
  ), x = V.useMemo(
    () => Fr().domain([0, p]).nice().range([d, 0]),
    [p, d]
  ), m = V.useMemo(
    () => ({
      xScale: h,
      yScale: x,
      getXTicks: () => f,
      getYTicks: (g = i) => x.ticks(g)
    }),
    [h, x, f, i]
  );
  return /* @__PURE__ */ n.jsx(ca.Provider, { value: m, children: a });
}, _1 = ({
  title: e,
  description: t,
  source: r,
  table: o,
  className: s,
  id: a,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = V.useId(), d = a || c, u = t ? `${d}-desc` : void 0, f = r ? `${d}-src` : void 0, p = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: d,
      className: Pt("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Pt(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !p && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(tn, { ...o }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(tn, { ...o }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, k1 = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: o }) => {
  const s = V.useRef(null);
  return V.useEffect(() => {
    const a = s.current;
    if (!a) return;
    const i = () => {
      const l = Array.from(a.querySelectorAll(e));
      if (l.length === 0) return;
      const c = [];
      l.forEach((d) => {
        d.classList.contains("fdp-chart--enhanced") || (d.classList.add("fdp-chart--enhanced"), c.push(d));
      }), c.length && t && t(c);
    };
    if (r > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, r);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: s, children: o });
}, Gm = ({
  label: e,
  value: t,
  unit: r,
  delta: o,
  status: s = "neutral",
  variant: a = "default",
  subtitle: i,
  metadata: l,
  trendData: c,
  loading: d = !1,
  error: u,
  valueFormatter: f,
  className: p,
  style: h,
  id: x,
  announceDelta: m = !0,
  visual: g
}) => {
  const _ = V.useId(), M = x || _, T = `${M}-label`, k = `${M}-value`, y = `${M}-delta`, S = typeof t == "number" && !Number.isNaN(t), j = d ? "—" : u ? "" : S ? f ? f(t) : t.toLocaleString() : t;
  let v, b = "", w = "";
  if (o && !d && !u) {
    v = o.direction || (o.value > 0 ? "up" : o.value < 0 ? "down" : "neutral");
    const $ = Math.abs(o.value), I = v === "up" ? `+${$}` : v === "down" ? `-${$}` : "0", E = o.isPercent ? "%" : "";
    if (b = `${I}${E}`, o.ariaLabel)
      w = o.ariaLabel;
    else {
      const N = o.invert ? v === "down" : v === "up";
      w = `${v === "neutral" ? "no change" : v === "up" ? "up" : "down"} ${$}${E}${v === "neutral" ? "" : N ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: Pt(
        "fdp-metric-card",
        a && `fdp-metric-card--${a}`,
        s && `fdp-metric-card--status-${s}`,
        d && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        p
      ),
      style: h,
      role: "group",
      "aria-labelledby": T,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: T, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: k, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: j }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !d && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          o && !d && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: y,
              "aria-label": w,
              className: Pt(
                "fdp-metric-card__delta",
                v && `fdp-metric-card__delta--${v}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: b }),
                o.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: o.period })
              ]
            }
          ) }),
          c && c.length > 0 && !d && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        g && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: g }),
        m && o && !o.ariaLabel && !d && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: w })
      ] })
    }
  );
};
var pt = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(pt || {}), ql = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(ql || {}), ln = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(ln || {}), Ze = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Ze || {});
const da = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
da.reduce(
  (e, t, r) => (e[t] = r + 1, e),
  {}
);
const Ym = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Vm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Jl = da.reduce(
  (e, t, r) => (e[t] = {
    id: t,
    rank: r + 1,
    label: Ym[t],
    category: Vm[t],
    participatesInRanking: !0
  }, e),
  {}
);
da.map(
  (e) => Jl[e]
);
var cr = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(cr || {}), cn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(cn || {}), Xl = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Xl || {});
const An = {
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
function Mo(e) {
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
function Io(e) {
  switch (e) {
    case Ze.Improvement:
      return "Improvement signal";
    case Ze.Concern:
      return "Concern signal";
    case Ze.Neither:
      return "Common cause variation";
    case Ze.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Kl(e) {
  switch (e) {
    case cn.Pass:
      return "Target met";
    case cn.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Zm(e, t, r) {
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
function Ql(e) {
  return e ? Tt[e]?.token ?? Tt.neither.token : Tt.neither.token;
}
function qm(e) {
  return e ? Tt[e]?.hex ?? Tt.neither.hex : Tt.neither.hex;
}
var mn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(mn || {});
const Jm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Xm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var mt = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(mt || {}), We = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(We || {}), Ct = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Ct || {}), Fe = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Fe || {});
const Km = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, o = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, a = [r, o, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2] < 0.55 ? "#ffffff" : "#212b32";
}, Do = {
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
Object.values(Do).forEach((e) => {
  e.text || (e.text = Km(e.hex));
});
const ec = (e) => Do[e], ua = (e) => Do[e].judgement || "none", wi = {
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
function Qm(e, t) {
  let r;
  return e === "common_cause" ? r = wi.common : r = wi.special[t === "lower" ? "lower" : "higher"], r.map((o) => ({ ...o }));
}
let vs = null;
try {
  vs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const St = (e, t) => {
  if (!vs) return t;
  const r = e.split(".");
  let o = vs;
  for (const a of r) {
    if (o == null) break;
    o = o[a];
  }
  const s = o;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, To = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: St("gradient.stop.start-opacity", "0.12"),
  mid: St("gradient.stop.mid-opacity", "0.03"),
  end: St("gradient.stop.end-opacity", "0"),
  triStart: St(
    "gradient.stop.triangle-start-opacity",
    St("gradient.stop.start-opacity", "0.12")
  ),
  triMid: St(
    "gradient.stop.triangle-mid-opacity",
    St("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: St(
    "gradient.stop.triangle-end-opacity",
    St("gradient.stop.end-opacity", "0")
  )
}), Lo = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, $o = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, tc = () => St(Lo.improvement, $o.improvement), nc = () => St(Lo.concern, $o.concern), eg = () => St(Lo.noJudgement, $o.noJudgement), fn = () => St(Lo.common, $o.common);
function Cr(e) {
  switch (e) {
    case Ze.Improvement:
      return tc();
    case Ze.Concern:
      return nc();
    case Ze.Neither:
    case Ze.Suppressed:
    default:
      return fn();
  }
}
function rc(e) {
  switch (e) {
    case Fe.SpecialCauseImproving:
      return tc();
    case Fe.SpecialCauseDeteriorating:
      return nc();
    case Fe.SpecialCauseNoJudgement:
      return eg();
    case Fe.CommonCause:
    default:
      return fn();
  }
}
var jt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(jt || {}), Xe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Xe || {}), Ee = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Ee || {}), ct = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(ct || {}), gn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(gn || {}), At = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(At || {}), En = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(En || {}), In = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(In || {}), vt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(vt || {}), Ht = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Ht || {}), Et = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Et || {}), Vr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Vr || {}), Zr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Zr || {});
const on = {
  [ct.SinglePoint]: 1,
  [ct.TwoSigma]: 2,
  [ct.Shift]: 3,
  [ct.Trend]: 4
}, Si = 3.267, tg = 2.66, _i = 0.2777;
function Ue(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Dn(e) {
  return e.reduce((t, r) => t + r, 0) / (e.length || 1);
}
function ki(e, t) {
  const r = new Array(e.length).fill(null);
  let o = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!(t[s] || !Ue(a))) {
      if (o !== null) {
        const i = e[o];
        Ue(i) && (r[s] = Math.abs(a - i));
      }
      o = s;
    }
  }
  return r;
}
function Ci(e, t) {
  const r = e.filter(Ue);
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let o = r.slice();
  if (t) {
    const a = Dn(o), i = Si * a;
    o = o.filter((l) => l <= i);
  }
  const s = Dn(o);
  return { mrMean: s, mrUcl: Si * s };
}
function Ni(e, t) {
  if (!Ue(e) || !Ue(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const r = tg * t, o = 2 / 3 * r, s = 1 / 3 * r;
  return {
    upperProcessLimit: e + r,
    lowerProcessLimit: e - r,
    upperTwoSigma: e + o,
    lowerTwoSigma: e - o,
    upperOneSigma: e + s,
    lowerOneSigma: e - s
  };
}
function ng(e, t, r, o) {
  if (e === jt.T) {
    const f = t.map((v) => Ue(v) && v > 0 ? Math.pow(v, _i) : null), p = ki(f, r), h = Ci(p, o), x = f.filter((v, b) => !r[b] && Ue(v)), m = x.length ? Dn(x) : NaN, g = Ni(m, h.mrMean), _ = (v) => Ue(v) && v > 0 ? Math.pow(v, 1 / _i) : null, M = Ue(g.upperProcessLimit) ? _(g.upperProcessLimit) : null, T = Ue(g.lowerProcessLimit) && g.lowerProcessLimit > 0 ? _(g.lowerProcessLimit) : null, k = Ue(g.upperTwoSigma) ? _(g.upperTwoSigma) : null, y = Ue(g.lowerTwoSigma) && g.lowerTwoSigma > 0 ? _(g.lowerTwoSigma) : null, S = Ue(g.upperOneSigma) ? _(g.upperOneSigma) : null, j = Ue(g.lowerOneSigma) && g.lowerOneSigma > 0 ? _(g.lowerOneSigma) : null;
    return {
      mean: Ue(m) && m > 0 ? _(m) : null,
      mr: p,
      mrMean: h.mrMean,
      mrUcl: h.mrUcl,
      upperProcessLimit: M,
      lowerProcessLimit: T,
      upperTwoSigma: k,
      lowerTwoSigma: y,
      upperOneSigma: S,
      lowerOneSigma: j
    };
  }
  if (e === jt.G) {
    const f = t.filter(($, I) => !r[I] && Ue($)), p = f.length ? Dn(f) : NaN, h = Ue(p) ? 1 / (p + 1) : NaN, x = ($) => {
      if (!Ue(h) || h <= 0 || h >= 1) return NaN;
      const I = Math.ceil(Math.log(1 - $) / Math.log(1 - h)) - 1;
      return Math.max(0, I);
    }, m = 135e-5, g = 1 - 135e-5, _ = 0.02275, M = 1 - 0.02275, T = 0.158655, k = 1 - 0.158655, y = x(g), S = x(m), j = x(M), v = x(_), b = x(k), w = x(T);
    return {
      mean: Ue(p) ? p : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Ue(y) ? y : null,
      lowerProcessLimit: Ue(S) ? S : null,
      upperTwoSigma: Ue(j) ? j : null,
      lowerTwoSigma: Ue(v) ? v : null,
      upperOneSigma: Ue(b) ? b : null,
      lowerOneSigma: Ue(w) ? w : null
    };
  }
  if (e !== jt.XmR)
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
  const s = ki(t, r), a = s.filter(Ue), i = a.length ? Dn(a) : NaN, l = Ue(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((p, h, x) => {
      if (r[x] || !Ue(h)) return p;
      if (!o)
        return p.push(h), p;
      const m = s[x];
      return (m === null || !Ue(l) || Ue(m) && m <= l) && p.push(h), p;
    }, []);
    c = f.length ? Dn(f) : NaN;
  }
  const d = Ci(s, o), u = Ni(c, d.mrMean);
  return {
    mean: c,
    mr: s,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function rg(e, t) {
  const r = e.map((c, d) => d).filter((c) => !e[c].ghost && Ue(e[c].value)), o = (c) => e[c], s = t.shiftPoints, a = t.trendPoints;
  let i = [], l = [];
  for (const c of r) {
    const d = o(c);
    if (!Ue(d.mean) || !Ue(d.value) ? (i = [], l = []) : d.value > d.mean ? (i.push(c), l = []) : d.value < d.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= s)
      for (const u of i) o(u).shiftUp = !0;
    if (l.length >= s)
      for (const u of l) o(u).shiftDown = !0;
  }
  for (let c = 0; c <= r.length - 3; c++) {
    const u = r.slice(c, c + 3).map(o);
    if (!u.every((k) => Ue(k.value) && Ue(k.mean)))
      continue;
    const f = u[0].mean, p = u.every((k) => k.value > f), h = u.every((k) => k.value < f);
    if (!p && !h)
      continue;
    const x = u[0].upperTwoSigma ?? 1 / 0, m = u[0].lowerTwoSigma ?? -1 / 0, g = u[0].upperProcessLimit ?? 1 / 0, _ = u[0].lowerProcessLimit ?? -1 / 0, M = u.filter((k) => t.twoSigmaIncludeAboveThree ? k.value > x : k.value > x && k.value <= g), T = u.filter((k) => t.twoSigmaIncludeAboveThree ? k.value < m : k.value < m && k.value >= _);
    p && M.length >= 2 && M.forEach((k) => k.twoSigmaUp = !0), h && T.length >= 2 && T.forEach((k) => k.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= r.length - 5; c++) {
      const u = r.slice(c, c + 5).map(o);
      if (!u.every((M) => Ue(M.value) && Ue(M.mean)))
        continue;
      const f = u[0].mean, p = u.every((M) => M.value > f), h = u.every((M) => M.value < f);
      if (!p && !h)
        continue;
      const x = u[0].upperOneSigma ?? 1 / 0, m = u[0].lowerOneSigma ?? -1 / 0, g = u.filter((M) => M.value > x), _ = u.filter((M) => M.value < m);
      p && g.length >= 4 && g.forEach((M) => M.fourOfFiveUp = !0), h && _.length >= 4 && _.forEach((M) => M.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= r.length - a; c++) {
    const d = r.slice(c, c + a), u = d.map(o);
    if (!u.every((h) => Ue(h.value)))
      continue;
    let f = !0, p = !0;
    for (let h = 1; h < u.length && (u[h].value > u[h - 1].value || (f = !1), u[h].value < u[h - 1].value || (p = !1), !(!f && !p)); h++)
      ;
    f && d.forEach((h) => o(h).trendUp = !0), p && d.forEach((h) => o(h).trendDown = !0);
  }
}
function oc(e) {
  const t = [], r = [];
  e.singlePointUp && t.push({
    id: ct.SinglePoint,
    rank: on[ct.SinglePoint]
  }), e.singlePointDown && r.push({
    id: ct.SinglePoint,
    rank: on[ct.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: ct.TwoSigma,
    rank: on[ct.TwoSigma]
  }), e.twoSigmaDown && r.push({
    id: ct.TwoSigma,
    rank: on[ct.TwoSigma]
  }), e.shiftUp && t.push({ id: ct.Shift, rank: on[ct.Shift] }), e.shiftDown && r.push({ id: ct.Shift, rank: on[ct.Shift] }), e.trendUp && t.push({ id: ct.Trend, rank: on[ct.Trend] }), e.trendDown && r.push({ id: ct.Trend, rank: on[ct.Trend] });
  const o = t.reduce((i, l) => Math.max(i, l.rank), 0), s = r.reduce((i, l) => Math.max(i, l.rank), 0), a = o > s ? gn.Upwards : s > o ? gn.Downwards : gn.Same;
  return { up: t, dn: r, upMax: o, dnMax: s, primeDirection: a };
}
function ji(e, t) {
  const r = t === Xe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Xe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, o = t === Xe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Xe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: r, opposite: o };
}
function Mi(e, t, r, o = !1, s, a, i = !1) {
  const { up: l, dn: c, upMax: d, dnMax: u, primeDirection: f } = oc(e);
  e.primeDirection = f;
  const p = e.specialCauseImprovementValue, h = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && og({ row: e, metric: t, metricConflictRule: r, preferImprovementWhenConflict: o, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: s, ruleHierarchy: a }), t === Xe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementHigh : e.specialCauseConcernValue !== null ? Ee.ConcernLow : Ee.CommonCause : t === Xe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementLow : e.specialCauseConcernValue !== null ? Ee.ConcernHigh : Ee.CommonCause : e.variationIcon = Ee.CommonCause;
  const x = e.specialCauseImprovementValue !== null ? At.Up : e.specialCauseConcernValue !== null ? At.Down : void 0, m = x === At.Up ? d : x === At.Down ? u : Math.max(d, u);
  e.primeRank = m || void 0;
  const g = x === At.Up ? l.find((_) => _.rank === m) : x === At.Down ? c.find((_) => _.rank === m) : void 0;
  return e.primeRuleId = g?.id, { originalImprovement: p, originalConcern: h };
}
function og(e) {
  const {
    row: t,
    metric: r,
    metricConflictRule: o,
    preferImprovementWhenConflict: s,
    preferTrendWhenConflict: a,
    primeDirection: i = t.primeDirection ?? gn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (a && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (r === Xe.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (r === Xe.Down) {
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
  const d = s ? In.PreferImprovement : l ?? In.SqlPrimeThenRule;
  if (d === In.PreferImprovement) {
    r === Xe.Up ? t.specialCauseConcernValue = null : r === Xe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === In.RuleHierarchy) {
    const u = c ?? [ct.Trend, ct.Shift, ct.TwoSigma, ct.SinglePoint], { up: f, dn: p } = oc(t);
    for (const h of u) {
      const x = f.some((g) => g.id === h), m = p.some((g) => g.id === h);
      if (x && !m) {
        r === Xe.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !x) {
        r === Xe.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (x && m) {
        (r === Xe.Up || r === Xe.Down) && (o === En.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === gn.Upwards ? r === Xe.Up ? t.specialCauseConcernValue = null : r === Xe.Down && (t.specialCauseImprovementValue = null) : i === gn.Downwards ? r === Xe.Up ? t.specialCauseImprovementValue = null : r === Xe.Down && (t.specialCauseConcernValue = null) : o === En.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var ws = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(ws || {});
function sg(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function ag(e) {
  const t = sg(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function Ii(e) {
  const t = [], r = (i, l, c) => ({
    segStart: i,
    segSide: l,
    minV: c,
    maxV: c,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), o = (i, l, c, d, u) => ({
    minV: Math.min(c, i),
    maxV: Math.max(d, i),
    maxAbsDelta: Math.max(u, l)
  }), s = (i, l, c, d, u, f, p, h) => {
    i.push({
      trendDirection: h,
      start: l,
      end: c,
      side: d,
      minValue: u,
      maxValue: f,
      maxAbsDeltaFromMean: p
    });
  };
  let a = 0;
  for (; a < e.length; ) {
    const i = e[a];
    if (!i || i.value == null || i.ghost || !i.trendUp && !i.trendDown) {
      a++;
      continue;
    }
    const l = i.trendUp ? "Up" : i.trendDown ? "Down" : void 0;
    let c = a, d = a;
    for (; d < e.length; d++) {
      const _ = e[d];
      if (!_ || _.value == null || _.ghost || !(l === "Up" ? _.trendUp : _.trendDown)) break;
    }
    const u = d - 1, f = [];
    let p, h, x = 1 / 0, m = -1 / 0, g = 0;
    for (let _ = c; _ <= u; _++) {
      const M = e[_];
      if (M.value == null) continue;
      const T = M.value - (M.mean ?? 0), k = ag(T);
      if (!k) {
        p !== void 0 && (s(f, p, _ - 1, h, x, m, g, l), p = void 0, h = void 0, x = 1 / 0, m = -1 / 0, g = 0);
        continue;
      }
      if (p === void 0)
        ({ segStart: p, segSide: h, minV: x, maxV: m, maxAbsDelta: g } = (() => {
          const y = r(_, k, M.value);
          return {
            segStart: y.segStart,
            segSide: y.segSide,
            minV: y.minV,
            maxV: y.maxV,
            maxAbsDelta: Math.abs(T)
          };
        })());
      else if (k !== h)
        s(f, p, _ - 1, h, x, m, g, l), { segStart: p, segSide: h, minV: x, maxV: m, maxAbsDelta: g } = (() => {
          const y = r(_, k, M.value);
          return {
            segStart: y.segStart,
            segSide: y.segSide,
            minV: y.minV,
            maxV: y.maxV,
            maxAbsDelta: Math.abs(T)
          };
        })();
      else {
        const y = o(M.value, Math.abs(T), x, m, g);
        x = y.minV, m = y.maxV, g = y.maxAbsDelta;
      }
    }
    p !== void 0 && s(f, p, u, h, x, m, g, l), t.push({ trendDirection: l, start: c, end: u, segments: f }), a = u + 1;
  }
  return t;
}
function ig(e) {
  if (e === Xe.Up) return "Above";
  if (e === Xe.Down) return "Below";
}
function lg(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function Di(e, t) {
  const r = t.strategy ?? vt.CrossingAfterFavourable, o = ig(t.metricImprovement), s = lg(o), a = [];
  for (const i of e) {
    if (!o) {
      if (r === vt.ExtremeFavourable || r === vt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const d of l)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        a.push(c);
      }
      continue;
    }
    if (r === vt.FavourableSide) {
      a.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (r === vt.UnfavourableSide) {
      a.push(...i.segments.filter((l) => l.side === s));
      continue;
    }
    if (r === vt.CrossingAfterFavourable) {
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
      c && a.push(c);
      continue;
    }
    if (r === vt.CrossingAfterUnfavourable) {
      const l = i.segments;
      let c;
      for (let d = 0; d < l.length; d++) {
        const u = l[d];
        if (u.side === s && d > 0 && l[d - 1].side !== s) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = l.filter((u) => u.side === s);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && a.push(c);
      continue;
    }
    if (r === vt.ExtremeFavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      a.push(c);
      continue;
    }
    if (r === vt.ExtremeUnfavourable) {
      const l = i.segments.filter((d) => d.side === s);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      a.push(c);
      continue;
    }
    if (r === vt.FirstFavourable) {
      const l = i.segments.find((c) => c.side === o);
      l && a.push(l);
      continue;
    }
    if (r === vt.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === s);
      l && a.push(l);
      continue;
    }
    if (r === vt.LongestFavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      a.push(c);
      continue;
    }
    if (r === vt.LongestUnfavourable) {
      const l = i.segments.filter((d) => d.side === s);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      a.push(c);
      continue;
    }
    if (r === vt.LastFavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      a.push(l[l.length - 1]);
      continue;
    }
    if (r === vt.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      a.push(l[l.length - 1]);
      continue;
    }
  }
  return a;
}
var it = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(it || {}), Hn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Hn || {});
function cg(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), r = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: r };
}
function mr(e, t) {
  const r = t.metricImprovement, o = t.trendVisualMode ?? "Ungated", s = t.enableNeutralNoJudgement ?? !0;
  return e.map((a) => {
    if (!a || a.value == null || a.ghost) return "Common";
    const { upAny: i, downAny: l } = cg(a);
    if (i && l) return "Improvement";
    switch (a.variationIcon) {
      case Ee.ImprovementHigh:
      case Ee.ImprovementLow:
        return "Improvement";
      case Ee.ConcernHigh:
      case Ee.ConcernLow:
        return "Concern";
      case Ee.NeitherHigh:
      case Ee.NeitherLow: {
        if (o === "Ungated" && r !== Xe.Neither) {
          if (i && !l)
            return r === Xe.Up ? "Improvement" : "Concern";
          if (l && !i)
            return r === Xe.Down ? "Improvement" : "Concern";
        }
        return s ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function dg(e, t, r) {
  const o = r?.mode ?? "Disabled";
  if (!e.length) return [];
  let s = mr(e, {
    metricImprovement: t,
    trendVisualMode: Hn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (o !== "RecalcCrossing" || t === Xe.Neither) return s;
  const a = Math.max(0, r?.preWindow ?? 2), i = Math.max(0, r?.postWindow ?? 3), l = r?.prePolarity ?? "Opposite", c = (f, p) => {
    if (f < 0 || f >= s.length) return;
    const h = s[f];
    (h === it.Common || h === it.NoJudgement) && (s[f] = p);
  }, d = (f) => {
    if (f == null) return null;
    const p = e.reduce((x, m) => (m.partitionId === f && typeof m.value == "number" && !m.ghost && x.push(m.value), x), []);
    return p.length ? p.reduce((x, m) => x + m, 0) / p.length : null;
  }, u = Array.isArray(r?.boundaryIndices) && r.boundaryIndices.length ? r.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, p, h) => {
    if (h === 0) return f;
    const x = e[h - 1];
    return x && p && p.partitionId !== x.partitionId && f.push(h), f;
  }, []);
  for (const f of u) {
    const p = e[f - 1], h = e[f];
    if (!p || !h)
      continue;
    let x = f - 1;
    for (; x - 1 >= 0 && e[x - 1] && e[x - 1].partitionId === p.partitionId; )
      x--;
    let m = f;
    for (; m + 1 < e.length && e[m + 1] && e[m + 1].partitionId === h.partitionId; )
      m++;
    let g = null;
    for (let S = f - 1; S >= 0; S--) {
      const j = e[S];
      if (j.partitionId !== p.partitionId) break;
      if (typeof j.mean == "number") {
        g = j.mean;
        break;
      }
    }
    let _ = null;
    for (let S = f; S < e.length; S++) {
      const j = e[S];
      if (j.partitionId !== h.partitionId) break;
      if (typeof j.mean == "number") {
        _ = j.mean;
        break;
      }
    }
    if (g == null && (g = d(p.partitionId ?? null)), _ == null && (_ = d(h.partitionId ?? null)), g == null || _ == null)
      continue;
    const M = _ - g, T = t === Xe.Up ? M > 0 : M < 0, k = T ? it.Improvement : it.Concern, y = l === "Same" ? k : T ? it.Concern : it.Improvement;
    for (let S = 1; S <= a; S++) {
      const j = f - S;
      if (j < x) break;
      c(j, y);
    }
    for (let S = 0; S < i; S++) {
      const j = f + S;
      if (j > m) break;
      c(j, k);
    }
  }
  return s;
}
function sc(e) {
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
function gr(e) {
  const { chartType: t, metricImprovement: r, data: o } = e, s = sc(e.settings), a = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: En.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: In.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Ht.Off,
    trendSegmentationStrategy: vt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...s
  }, i = s?.trendSegmentationMode || (s?.trendFavourableSegmentation === !0 ? Ht.Always : s?.trendFavourableSegmentation === !1 ? Ht.Off : a.trendSegmentationMode), l = o.map((m, g) => ({
    rowId: g + 1,
    x: m.x,
    value: Ue(m.value) ? m.value : null,
    ghost: !!m.ghost,
    baseline: !!m.baseline,
    target: Ue(m.target) ? m.target : null
  })), c = [];
  let d = [];
  for (const m of l)
    m.baseline && d.length && (c.push(d), d = []), d.push(m);
  d.length && c.push(d);
  const u = [], f = (a.trendFavourableSegmentation || i !== Ht.Off) && !a.preferImprovementWhenConflict, p = l.filter((m) => !m.ghost && Ue(m.value)).length, h = !!a.chartLevelEligibility && p >= a.minimumPoints;
  let x = 0;
  for (const m of c) {
    x++;
    const g = m.map((y) => y.value), _ = m.map((y) => y.ghost), M = ng(
      t,
      g,
      _,
      !!a.excludeMovingRangeOutliers
    ), T = m.map((y, S) => {
      const j = !y.ghost && Ue(y.value) ? g.slice(0, S + 1).filter((b, w) => !_[w] && Ue(b)).length : 0, v = h ? !0 : j >= a.minimumPoints;
      return {
        rowId: y.rowId,
        x: y.x,
        value: Ue(y.value) ? y.value : null,
        ghost: y.ghost,
        partitionId: x,
        pointRank: j,
        mean: (v || h) && Ue(M.mean) ? M.mean : null,
        upperProcessLimit: v || h ? M.upperProcessLimit : null,
        lowerProcessLimit: v || h ? M.lowerProcessLimit : null,
        upperTwoSigma: v || h ? M.upperTwoSigma : null,
        lowerTwoSigma: v || h ? M.lowerTwoSigma : null,
        upperOneSigma: v || h ? M.upperOneSigma : null,
        lowerOneSigma: v || h ? M.lowerOneSigma : null,
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
    for (const y of T)
      y.ghost || !Ue(y.value) || y.mean === null || (Ue(y.upperProcessLimit) && y.value > y.upperProcessLimit && (y.singlePointUp = !0), Ue(y.lowerProcessLimit) && y.value < y.lowerProcessLimit && (y.singlePointDown = !0));
    rg(T, {
      shiftPoints: a.shiftPoints,
      trendPoints: a.trendPoints,
      twoSigmaIncludeAboveThree: !!a.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!a.enableFourOfFiveRule
    }), f && ((y) => {
      const S = y.some(
        ($) => ($.singlePointUp || $.twoSigmaUp || $.shiftUp || $.trendUp) && ($.singlePointDown || $.twoSigmaDown || $.shiftDown || $.trendDown)
      );
      if (i === Ht.Off || i === Ht.AutoWhenConflict && !S)
        return;
      const j = Ii(y), v = Di(j, {
        metricImprovement: r,
        strategy: a.trendSegmentationStrategy
      }), b = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
      for (const $ of v)
        for (let I = $.start; I <= $.end; I++)
          $.trendDirection === ws.Up ? b.add(I) : w.add(I);
      y.forEach(($, I) => {
        $.trendUp = b.has(I) ? $.trendUp : !1, $.trendDown = w.has(I) ? $.trendDown : !1, a.trendDominatesHighlightedWindow && (b.has(I) ? ($.singlePointDown = !1, $.twoSigmaDown = !1, $.shiftDown = !1) : w.has(I) && ($.singlePointUp = !1, $.twoSigmaUp = !1, $.shiftUp = !1));
      });
    })(T);
    for (const y of T) {
      if (y.ghost || !Ue(y.value) || y.mean === null) {
        u.push(y);
        continue;
      }
      const { aligned: S, opposite: j } = ji(
        y,
        r
      );
      if (y.specialCauseImprovementValue = S ? y.value : null, y.specialCauseConcernValue = j ? y.value : null, r === Xe.Neither) {
        const v = y.singlePointUp || y.twoSigmaUp || y.shiftUp || y.trendUp, b = y.singlePointDown || y.twoSigmaDown || y.shiftDown || y.trendDown;
        y.variationIcon = v ? Ee.NeitherHigh : b ? Ee.NeitherLow : Ee.CommonCause;
      } else
        Mi(y, r, a.metricConflictRule, a.preferImprovementWhenConflict === !0, a.conflictStrategy, a.ruleHierarchy, a.preferTrendWhenConflict === !0);
      u.push(y);
    }
  }
  if (a.trendAcrossPartitions) {
    const m = u.map((g, _) => ({ idx: _, r: g })).filter(({ r: g }) => !g.ghost && Ue(g.value));
    if (m.length >= a.trendPoints)
      for (let g = 0; g <= m.length - a.trendPoints; g++) {
        const _ = m.slice(g, g + a.trendPoints).map((y) => y.idx), M = _.map((y) => u[y]);
        if (!M.every((y) => Ue(y.value))) continue;
        let T = !0, k = !0;
        for (let y = 1; y < M.length && (M[y].value > M[y - 1].value || (T = !1), M[y].value < M[y - 1].value || (k = !1), !(!T && !k)); y++)
          ;
        T && _.forEach((y) => u[y].trendUp = !0), k && _.forEach((y) => u[y].trendDown = !0);
      }
  }
  if (a.trendAcrossPartitions) {
    if (f) {
      const m = u.some(
        (g) => (g.singlePointUp || g.twoSigmaUp || g.shiftUp || g.trendUp) && (g.singlePointDown || g.twoSigmaDown || g.shiftDown || g.trendDown)
      );
      if (i === Ht.Always || i === Ht.AutoWhenConflict && m) {
        const g = Ii(u), _ = Di(g, { metricImprovement: r, strategy: a.trendSegmentationStrategy }), M = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
        for (const k of _)
          for (let y = k.start; y <= k.end; y++)
            k.trendDirection === ws.Up ? M.add(y) : T.add(y);
        u.forEach((k, y) => {
          k.trendUp = M.has(y) ? k.trendUp : !1, k.trendDown = T.has(y) ? k.trendDown : !1, a.trendDominatesHighlightedWindow && (M.has(y) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : T.has(y) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
        });
      }
    }
    for (const m of u) {
      if (m.ghost || !Ue(m.value) || m.mean === null || r === Xe.Neither) continue;
      const { aligned: g, opposite: _ } = ji(m, r);
      m.specialCauseImprovementValue = g ? m.value : null, m.specialCauseConcernValue = _ ? m.value : null, Mi(m, r, a.metricConflictRule, a.preferImprovementWhenConflict === !0, a.conflictStrategy, a.ruleHierarchy, a.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function fa(e, t) {
  const r = gr(e), o = mr(r.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Hn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), s = t?.boundaryWindows;
  if (!s || s.mode !== "RecalcCrossing") return { rows: r.rows, visuals: o };
  const a = s.directionOverride ?? e.metricImprovement, i = dg(r.rows, a, s), l = o.map((c, d) => {
    const u = i[d];
    if (c === it.Common || c === it.NoJudgement) {
      if (u === it.Improvement) return it.Improvement;
      if (u === it.Concern) return it.Concern;
    }
    return c;
  });
  return { rows: r.rows, visuals: l };
}
var ac = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(ac || {});
function ug(e, t, r) {
  const o = r?.trendVisualMode ?? Hn.Ungated, s = r?.enableNeutralNoJudgement ?? !0, a = Array.isArray(e.data) ? e.data.map((f, p) => f?.baseline ? p : -1).filter((f) => f >= 0) : [];
  let i;
  switch (t) {
    case "recalc-crossing-shift": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        boundaryIndices: a
      };
      break;
    }
    case "recalc-crossing-trend": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 5,
        prePolarity: "Same",
        boundaryIndices: a
      };
      break;
    }
    case "recalc-crossing-two-sigma": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 1,
        prePolarity: "Same",
        boundaryIndices: a
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
        boundaryIndices: a
      };
      break;
    case "recalculations-recalculated":
    case "none":
    default:
      i = void 0;
  }
  const { rows: l, visuals: c } = fa(e, {
    trendVisualMode: o,
    enableNeutralNoJudgement: s,
    boundaryWindows: i
  });
  let d = c.slice(), u = a.length ? a[0] : -1;
  if (u < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = it.Common), { rows: l, visuals: d };
}
const ic = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: En.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function fg(e) {
  return { ...ic, ...e ?? {} };
}
var gt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(gt || {}), xn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(xn || {}), dr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(dr || {});
const Ss = (e) => {
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
    if (d === Ze.Improvement || d === Ze.Concern || d === Ze.Neither || d === Ze.Suppressed)
      d === Ze.Improvement ? c = Fe.SpecialCauseImproving : d === Ze.Concern ? c = Fe.SpecialCauseDeteriorating : d === Ze.Neither ? c = Fe.CommonCause : c = Fe.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case Ee.ImprovementHigh:
        case Ee.ImprovementLow:
          c = Fe.SpecialCauseImproving;
          break;
        case Ee.ConcernHigh:
        case Ee.ConcernLow:
          c = Fe.SpecialCauseDeteriorating;
          break;
        case Ee.NeitherHigh:
        case Ee.NeitherLow:
          c = i.specialCauseNeutral ? Fe.SpecialCauseNoJudgement : Fe.CommonCause;
          break;
        case Ee.CommonCause:
          c = Fe.CommonCause;
          break;
        default:
          c = Fe.SpecialCauseNoJudgement;
          break;
      }
    let u = i.trend;
    return u || (c === Fe.SpecialCauseImproving ? u = l === mt.LowerIsBetter ? We.Lower : We.Higher : c === Fe.SpecialCauseDeteriorating ? u = l === mt.LowerIsBetter ? We.Higher : We.Lower : c === Fe.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? u = We.Higher : i.lowSideSignal && !i.highSideSignal ? u = We.Lower : u = We.Higher : u = We.Higher), { state: c, direction: u, polarity: l ?? mt.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Fe.SpecialCauseImproving || i.state === Fe.SpecialCauseDeteriorating) && i.polarity && (i.state === Fe.SpecialCauseImproving ? l = i.polarity === mt.LowerIsBetter ? We.Lower : We.Higher : l = i.polarity === mt.LowerIsBetter ? We.Higher : We.Lower), l || (i.state === Fe.SpecialCauseImproving ? l = We.Higher : i.state === Fe.SpecialCauseDeteriorating ? l = We.Lower : l = We.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? mt.ContextDependent
    };
  }
  const r = e;
  t();
  const s = {
    [Ct.Improving]: Fe.SpecialCauseImproving,
    [Ct.Deteriorating]: Fe.SpecialCauseDeteriorating,
    [Ct.No_Judgement]: Fe.SpecialCauseNoJudgement,
    [Ct.None]: Fe.CommonCause
  }[r.judgement];
  let a;
  return r.judgement === Ct.Improving ? a = r.polarity === mt.LowerIsBetter ? We.Lower : We.Higher : r.judgement === Ct.Deteriorating ? a = r.polarity === mt.LowerIsBetter ? We.Higher : We.Lower : a = r.trend ?? We.Higher, { state: s, direction: a, polarity: r.polarity };
};
function lc(e, t) {
  const { state: r, direction: o, polarity: s } = Ss(e), a = ua(r), i = o === We.Higher ? "above" : "below", l = o === We.Higher ? "upwards" : "downwards", c = (() => {
    switch (s) {
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
      switch (a) {
        case Ct.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Ct.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Ct.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case Ct.None:
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
const ns = (e, t, r, o, s, a) => /* @__PURE__ */ n.jsxs("defs", { children: [
  o && /* @__PURE__ */ n.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ n.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  s && /* @__PURE__ */ n.jsx("linearGradient", { id: r, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: a.map((i) => /* @__PURE__ */ n.jsx(
    "stop",
    {
      offset: i.offset,
      stopColor: e,
      stopOpacity: parseFloat(i.opacity)
    },
    i.offset
  )) })
] }), ha = ({
  data: e,
  precomputed: t,
  improvementDirection: r,
  size: o = 44,
  ariaLabel: s,
  showLetter: a = !0,
  dropShadow: i = !0,
  gradientWash: l = !1,
  variant: c = xn.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = dr.Polarity,
  letterOverride: f,
  ...p
}) => {
  const h = Qn(), x = Qn(), {
    start: m,
    mid: g,
    end: _,
    triStart: M,
    triMid: T,
    triEnd: k
  } = To(), { state: y, direction: S, polarity: j, ariaInput: v } = ze(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const G = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: r ?? Xe.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Fe.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: U, direction: P, polarity: Z } = Ss(G);
      return { state: U, direction: P, polarity: Z, ariaInput: G };
    }
    const { state: K, direction: A, polarity: L } = Ss(e);
    return { state: K, direction: A, polarity: L, ariaInput: e };
  }, [e, t, r]), b = ze(() => ec(y), [y]), w = ze(() => ua(y), [y]), $ = w === Ct.Improving || w === Ct.Deteriorating;
  let I = "";
  a && $ && (u === dr.Polarity ? j === mt.HigherIsBetter ? I = "H" : j === mt.LowerIsBetter ? I = "L" : I = "" : I = S === We.Higher ? "H" : "L"), f !== void 0 && (I = f);
  const E = y !== Fe.CommonCause, N = y === Fe.SpecialCauseNoJudgement, C = St("common-cause", "#A6A6A6"), D = E ? b.hex : C, H = ze(
    () => Qm(y, S),
    [y, S]
  ), J = s || `${b.label}${I ? S === We.Higher ? " – Higher" : " – Lower" : ""}`, ee = lc(v);
  if (c === xn.TriangleWithRun) {
    const G = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], U = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let P = null;
    y === Fe.SpecialCauseImproving || y === Fe.SpecialCauseDeteriorating ? P = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (S === We.Higher ? G : U).map((he) => he.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 6,
        transform: S === We.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : y === Fe.SpecialCauseNoJudgement && (P = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: S === We.Higher ? G.map((he) => he.join(",")).join(" ") : U.map((he) => he.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 6,
        transform: S === We.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const Z = Math.max(0, Math.min(5, Math.floor(d || 0))), X = y === Fe.CommonCause ? 160 : S === We.Higher ? 220 : 70, q = 10, ne = 26, ue = 150 - 2 * ne, W = y === Fe.CommonCause ? C : rc(y), se = Array.from({ length: 5 }).map((he, Me) => {
      const Te = (y === Fe.SpecialCauseImproving || y === Fe.SpecialCauseDeteriorating) && Me >= 5 - Z ? W : C;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: ue + Me * ne,
          cy: X,
          r: q,
          fill: Te,
          stroke: Te,
          strokeWidth: 1
        },
        Me
      );
    }), ce = ns(
      b.hex,
      h,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: M },
        { offset: "75%", opacity: T },
        { offset: "100%", opacity: k }
      ]
    ), ye = y === Fe.CommonCause || S === We.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: o,
        height: o,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": J,
        "aria-description": ee,
        ...p,
        children: [
          ce,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${x})` : "#ffffff",
              ...i ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsxs("g", { transform: ye, children: [
            P,
            I && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: S === We.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: I
              }
            ),
            se
          ] })
        ]
      }
    );
  }
  if (c === xn.Triangle) {
    const G = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], U = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], P = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let Z = null;
    y === Fe.SpecialCauseImproving || y === Fe.SpecialCauseDeteriorating ? Z = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (S === We.Higher ? G : U).map((q) => q.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 8,
        transform: S === We.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : y === Fe.SpecialCauseNoJudgement ? Z = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: S === We.Higher ? G.map((q) => q.join(",")).join(" ") : U.map((q) => q.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 8,
        transform: S === We.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : y === Fe.CommonCause && (Z = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: P[0][0],
        y1: P[0][1],
        x2: P[1][0],
        y2: P[1][1],
        stroke: b.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const X = ns(
      b.hex,
      h,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: M },
        { offset: "65%", opacity: T },
        { offset: "100%", opacity: k }
      ]
    );
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: o,
        height: o,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": J,
        "aria-description": ee,
        ...p,
        children: [
          X,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${x})` : "#ffffff",
              ...i ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
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
          Z,
          I && (y === Fe.SpecialCauseImproving || y === Fe.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: S === We.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: I
            }
          )
        ]
      }
    );
  }
  const B = ns(
    b.hex,
    h,
    x,
    i,
    l,
    [
      { offset: "0%", opacity: m },
      { offset: "65%", opacity: g },
      { offset: "100%", opacity: _ }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: o,
      height: o,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": J,
      "aria-description": ee,
      ...p,
      children: [
        B,
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: l ? `url(#${x})` : "#ffffff",
            ...i ? { filter: `url(#${h})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
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
        I && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: b.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: S === We.Lower ? "340" : "155", children: I })
          }
        ),
        N ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: b.hex,
            ...S === We.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          H.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: C,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${H.map((K) => `${K.cx} ${K.cy}`).join(" L ")}`
            }
          ),
          H.map((K, A) => {
            const G = A >= H.length - 2 && E ? D : C, U = G;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: U,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: G,
                cx: K.cx,
                cy: K.cy,
                r: 16
              },
              A
            );
          })
        ] })
      ]
    }
  );
};
ha.displayName = "SPCVariationIcon";
const hg = {
  [pt.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [pt.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [pt.Md]: { height: 44, pointR: 4, stroke: 1 },
  [pt.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [pt.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [pt.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function pg(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function mg(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const r = t.reduce((i, l) => i + l.value, 0) / t.length, o = [...e].reverse().findIndex((i) => i.value != null), s = o >= 0 ? e.length - 1 - o : null, a = s != null ? e[s].value : null;
  return { mean: r, latestValue: a, latestIndex: s };
}
const gg = (e) => rc(e), cc = ({
  data: e,
  windowSize: t,
  minPointsForSignals: r = 13,
  showMean: o = !0,
  showLimits: s = !0,
  showLimitBand: a = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: c = !0,
  variationState: d,
  metricImprovement: u,
  gradientWash: f = !1,
  size: p = pt.Sm,
  ariaLabel: h,
  className: x,
  onPointClick: m,
  maxPoints: g,
  thinningStrategy: _ = "stride",
  colorPointsBySignal: M = !0,
  centerLine: T,
  controlLimits: k,
  sigmaBands: y,
  pointSignals: S,
  pointNeutralSpecialCause: j,
  visualCategories: v
}) => {
  const b = u, w = ze(
    () => pg(e, t),
    [e, t]
  ), $ = ze(() => mg(w), [w]), I = (() => {
    if (typeof p == "string")
      switch (p) {
        case "xs":
          return pt.Xs;
        case "sm":
          return pt.Sm;
        case "md":
          return pt.Md;
        case "lg":
          return pt.Lg;
        case "xl":
          return pt.Xl;
        case "full":
          return pt.Full;
        default:
          return pt.Sm;
      }
    return p ?? pt.Sm;
  })(), E = hg[I], N = Math.max(w.length * 6, 60), C = N, D = I === pt.Full ? "100%" : N, H = E.height, J = ze(() => {
    if (I === pt.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${C} / ${H}`,
        display: "block"
      };
  }, [I, C, H]), ee = Math.max(6, E.pointR + 3), B = Math.max(4, E.pointR + 3), K = ze(() => (e?.length ?? 0) - (w?.length ?? 0), [e?.length, w?.length]), A = T ?? $.mean ?? null, L = ze(() => {
    if (!s) return null;
    if (k) return k;
    const we = w.filter((fe) => typeof fe.value == "number");
    if (!we.length || A == null) return null;
    const F = we.map((fe) => fe.value), Y = Math.min(...F), ae = Math.max(...F);
    return { lower: Y, upper: ae };
  }, [s, k?.lower, k?.upper, w, A]), U = ze(() => ({
    state: d ?? Fe.CommonCause,
    firedRules: [],
    mean: A ?? null,
    stdDev: null,
    side: $.latestValue != null && A != null ? $.latestValue > A ? "above" : "below" : void 0
  }), [d, A, $.latestValue]).state, P = gg(U), Z = (we) => {
    const F = w.filter((pe) => pe.value != null);
    if (!F.length) return H / 2;
    const Y = F.map((pe) => pe.value);
    L && (L.lower != null && Y.push(L.lower), L.upper != null && Y.push(L.upper));
    const ae = Math.min(...Y), fe = Math.max(...Y);
    return ae === fe ? H / 2 : H - (we - ae) / (fe - ae) * (H - B * 2) - B;
  }, X = ze(() => {
    if (!g || w.length <= g)
      return w.map((R, O) => O);
    if (_ === "stride") {
      const R = Math.max(2, g), O = (w.length - 1) / (R - 1), oe = /* @__PURE__ */ new Set();
      for (let Q = 0; Q < R; Q++) oe.add(Math.round(Q * O));
      return oe.add(w.length - 1), Array.from(oe).sort((Q, re) => Q - re);
    }
    const we = w.map((R, O) => ({ i: O, v: R.value }));
    function F(R, O, oe) {
      const Q = R.i, re = R.v ?? 0, le = O.i, de = O.v ?? 0, be = oe.i, ke = oe.v ?? 0, Be = Math.abs((ke - de) * Q - (be - le) * re + be * de - ke * le), Ye = Math.hypot(ke - de, be - le);
      return Ye === 0 ? 0 : Be / Ye;
    }
    function Y(R, O) {
      if (R.length <= 2) return R;
      let oe = -1, Q = -1;
      for (let re = 1; re < R.length - 1; re++) {
        const le = F(R[re], R[0], R[R.length - 1]);
        le > oe && (oe = le, Q = re);
      }
      if (oe > O) {
        const re = Y(R.slice(0, Q + 1), O), le = Y(R.slice(Q), O);
        return [...re.slice(0, -1), ...le];
      }
      return [R[0], R[R.length - 1]];
    }
    let ae = 0.1, fe = we;
    for (let R = 0; R < 8 && (fe = Y(we, ae), !(fe.length <= g)); R++)
      ae *= 1.6;
    const pe = new Set(fe.map((R) => R.i));
    return pe.add(0), pe.add(w.length - 1), Array.from(pe).sort((R, O) => R - O);
  }, [w, g, _]), q = ze(
    () => X.map((we) => w[we]),
    [X, w]
  ), ne = ze(() => Math.max(1, C - ee * 2), [C, ee]), ue = ze(() => {
    const we = Math.max(1, q.length - 1);
    return (F) => F / we * ne + ee;
  }, [q.length, ne, ee]), W = ze(() => {
    let we = "";
    return q.forEach((F, Y) => {
      if (F.value == null) return;
      const ae = Z(F.value), fe = ue(Y);
      we += we ? ` L ${fe} ${ae}` : `M ${fe} ${ae}`;
    }), we;
  }, [q, ue]), se = $.latestIndex ?? -1, ce = L, ye = To(), he = ze(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [w.length, f]
  ), Me = w.length >= (r || 0), Ge = h || "SPC sparkline", Te = (() => {
    if (!U) return;
    const we = b === Xe.Up ? mt.HigherIsBetter : b === Xe.Down ? mt.LowerIsBetter : mt.ContextDependent, F = {
      variationIcon: U === Fe.SpecialCauseImproving ? Ze.Improvement : U === Fe.SpecialCauseDeteriorating ? Ze.Concern : U === Fe.SpecialCauseNoJudgement ? Ze.Suppressed : Ze.Neither,
      trend: b === Xe.Up ? We.Higher : We.Lower,
      polarity: we
    };
    try {
      return lc(F);
    } catch {
      return;
    }
  })(), Le = ze(() => {
    if (!Me) return 10;
    const we = [...w].reverse().filter((Y) => Y.value != null).slice(0, 6).map((Y) => Z(Y.value));
    return we.length && we.reduce((Y, ae) => Y + ae, 0) / we.length < H / 2 ? H : 10;
  }, [w, Me, H]);
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": Ge,
      "aria-description": Te,
      width: I === pt.Full ? void 0 : D,
      height: I === pt.Full ? void 0 : H,
      style: J,
      className: x,
      viewBox: `0 0 ${C} ${H}`,
      children: [
        f && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: he, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: P,
                stopOpacity: Number(ye.start)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: P,
                stopOpacity: Number(ye.mid)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: P,
                stopOpacity: Number(ye.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: C,
              height: H,
              fill: `url(#${he})`
            }
          )
        ] }),
        ce && ce.lower != null && ce.upper != null && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          a && /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                Z(ce.upper),
                Z(ce.lower)
              ),
              width: C,
              height: Math.abs(
                Z(ce.upper) - Z(ce.lower)
              ),
              fill: P,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: C,
              y1: Z(ce.lower),
              y2: Z(ce.lower),
              stroke: P,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: C,
              y1: Z(ce.upper),
              y2: Z(ce.upper),
              stroke: P,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          y && i && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            y.lowerTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: C,
                y1: Z(y.lowerTwo),
                y2: Z(y.lowerTwo),
                stroke: P,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            y.lowerOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: C,
                y1: Z(y.lowerOne),
                y2: Z(y.lowerOne),
                stroke: P,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            y.upperOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: C,
                y1: Z(y.upperOne),
                y2: Z(y.upperOne),
                stroke: P,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            y.upperTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: C,
                y1: Z(y.upperTwo),
                y2: Z(y.upperTwo),
                stroke: P,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        o && A != null && /* @__PURE__ */ n.jsx(
          "line",
          {
            x1: 0,
            x2: C,
            y1: Z(A),
            y2: Z(A),
            stroke: fn(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: W,
            fill: "none",
            stroke: fn(),
            strokeWidth: E.stroke,
            strokeLinecap: "round"
          }
        ),
        X.map((we, F) => {
          const Y = w[we];
          if (!Y || Y.value == null) return null;
          const ae = Z(Y.value), fe = ue(F), R = (we === se && l ? E.pointR + 1 : E.pointR) - 0.5;
          let O = fn();
          if (M) {
            const oe = v?.[K + we];
            if (oe != null)
              oe === it.Improvement ? O = Cr(Ze.Improvement) : oe === it.Concern ? O = Cr(Ze.Concern) : oe === it.NoJudgement ? O = St("no-judgement", "#490092") : O = fn();
            else {
              const Q = S?.[K + we];
              Q === Ze.Improvement || Q === Ze.Concern ? O = Cr(Q) : O = j?.[K + we] ? St("no-judgement", "#490092") : fn();
            }
          }
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: fe,
              cy: ae,
              r: R,
              fill: O,
              stroke: "none",
              strokeWidth: 0,
              onClick: m ? () => m(we, Y) : void 0,
              style: m ? { cursor: "pointer" } : void 0,
              "data-index": we,
              "data-signal-colour": M ? O : void 0
            },
            we
          );
        }),
        c && Me && U && U !== Fe.CommonCause && b && /* @__PURE__ */ n.jsx(
          "text",
          {
            x: C - 4,
            y: Le,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: P,
            "data-glyph-pos": Le < H / 2 ? "top" : "bottom",
            children: b === Xe.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
cc.displayName = "SPCSpark";
function qr(e) {
  switch (e) {
    case Ee.ImprovementHigh:
    case Ee.ImprovementLow:
      return Fe.SpecialCauseImproving;
    case Ee.ConcernHigh:
    case Ee.ConcernLow:
      return Fe.SpecialCauseDeteriorating;
    case Ee.NeitherHigh:
    case Ee.NeitherLow:
      return Fe.SpecialCauseNoJudgement;
    case Ee.CommonCause:
      return Fe.CommonCause;
    default:
      return null;
  }
}
function dc(e) {
  return e === Ee.ImprovementHigh || e === Ee.ImprovementLow || e === Ee.ConcernHigh || e === Ee.ConcernLow || e === Ee.NeitherHigh || e === Ee.NeitherLow;
}
function xg({
  warnings: e,
  show: t,
  formatWarningCategory: r,
  formatWarningCode: o
}) {
  const [s, a] = V.useState(""), i = V.useRef("");
  return V.useEffect(() => {
    if (!t) {
      i.current !== "" && (i.current = "", a(""));
      return;
    }
    const l = e.length;
    if (!l) {
      const f = "Diagnostics: no warnings.";
      f !== i.current && (i.current = f, a(f));
      return;
    }
    const c = {
      error: e.filter((f) => f.severity === Et.Error).length,
      warning: e.filter((f) => f.severity === Et.Warning).length,
      info: e.filter((f) => f.severity === Et.Info).length
    }, d = [];
    c.error && d.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && d.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && d.push(`${c.info} info`);
    const u = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${d.join(", ")}).`;
    u !== i.current && (i.current = u, a(u));
  }, [t, e]), t ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    s && /* @__PURE__ */ n.jsx(
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
    e.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warnings", role: "region", "aria-label": "SPC diagnostics", children: [
      /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
      /* @__PURE__ */ n.jsx(
        tn,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let c = "grey";
            return l.severity === Et.Error ? c = "red" : l.severity === Et.Warning ? c = "orange" : l.severity === Et.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ n.jsx(at, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ n.jsx(at, { color: "purple", text: r(l.category) }) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ n.jsx(at, { color: "grey", text: o(l.code) }),
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
function yg({
  variationNode: e,
  assuranceNode: t,
  show: r
}) {
  return r ? /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const pa = ({
  status: e,
  size: t = 44,
  ariaLabel: r,
  dropShadow: o = !0,
  colourOverride: s,
  gradientWash: a = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...c
}) => {
  const d = Qn(), u = Qn(), { start: f, mid: p, end: h } = To(), x = s || Jm[e], m = (i || Xm[e]).slice(0, 2), g = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": g,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("defs", { children: [
          o && /* @__PURE__ */ n.jsxs("filter", { id: d, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ n.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          a && /* @__PURE__ */ n.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: x, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: x, stopOpacity: parseFloat(p) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(h) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: a ? `url(#${u})` : "#ffffff",
            ...o ? { filter: `url(#${d})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
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
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: m })
          }
        ),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          e === mn.Fail ? /* @__PURE__ */ n.jsx(
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
          ) : e === mn.Uncertain ? /* @__PURE__ */ n.jsx(
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
              stroke: x,
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
pa.displayName = "SPCAssuranceIcon";
const bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: mn,
  Direction: We,
  MetricPolarity: mt,
  SPCAssuranceIcon: pa,
  SPCVariationIcon: ha,
  VariationJudgement: Ct,
  VariationState: Fe,
  getVariationColour: ec,
  getVariationTrend: ua
}, Symbol.toStringTag, { value: "Module" }));
function vg(e) {
  const { show: t, rowsForUi: r, minPoints: o, metricImprovement: s, variant: a, runLength: i } = e;
  if (!t || !r?.length) return null;
  const l = r, c = typeof o == "number" && !isNaN(o) ? o : 13;
  if (l.filter(
    (y) => !y.data.ghost && y.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let y = l.length - 1; y >= 0; y--) {
    const S = l[y];
    if (S && S.data.value != null && !S.data.ghost) {
      u = y;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], p = f.classification?.variation, h = f.classification?.assurance, x = p === Ze.Neither && !!f.classification?.neutralSpecialCauseValue, m = h === cn.Pass ? mn.Pass : h === cn.Fail ? mn.Fail : mn.Uncertain;
  let g;
  if (p === Ze.Suppressed) {
    const y = !!f.rules.singlePoint.up, S = !!f.rules.singlePoint.down;
    s === ln.Up ? y ? g = We.Higher : S && (g = We.Lower) : s === ln.Down ? S ? g = We.Lower : y && (g = We.Higher) : g = We.Higher;
  } else if (p === Ze.Neither && x) {
    const y = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, S = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    y && !S ? g = We.Higher : S && !y ? g = We.Lower : g = We.Higher;
  }
  const _ = 80, M = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, T = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let k = Ee.CommonCause;
  return p === Ze.Improvement ? k = Ee.ImprovementHigh : p === Ze.Concern ? k = Ee.ConcernHigh : p === Ze.Neither && (x ? g === We.Lower || T && !M ? k = Ee.NeitherLow : k = Ee.NeitherHigh : k = Ee.CommonCause), /* @__PURE__ */ n.jsxs(
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
            style: { width: _, height: _ },
            children: /* @__PURE__ */ n.jsx(
              ha,
              {
                dropShadow: !1,
                data: {
                  variationIcon: k,
                  improvementDirection: s,
                  specialCauseNeutral: x,
                  highSideSignal: M,
                  lowSideSignal: T,
                  ...g ? { trend: g } : {}
                },
                letterMode: s === ln.Neither ? dr.Direction : dr.Polarity,
                size: _,
                variant: a,
                runLength: a === xn.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(h),
            style: { width: _, height: _ },
            children: /* @__PURE__ */ n.jsx(
              pa,
              {
                status: m,
                size: _,
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
const uc = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: o,
  measureUnit: s,
  dateFormatter: a,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = nn(), d = dn(), [u, f] = V.useState(null), [p, h] = V.useState(!1), x = V.useRef(null);
  V.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), x.current && (cancelAnimationFrame(x.current), x.current = null)), !c.focused && !p) {
        const Le = requestAnimationFrame(() => {
          f(null), x.current = null;
        });
        x.current = Le;
      }
      return () => {
        x.current && (cancelAnimationFrame(x.current), x.current = null);
      };
    }
  }, [c, c?.focused, p]);
  const m = c && (c.focused || (p ? u : null) || u), [g, _] = V.useState(!1);
  V.useEffect(() => {
    const Le = requestAnimationFrame(() => _(!0));
    return () => cancelAnimationFrame(Le);
  }, [m?.index]);
  const M = d?.innerWidth ?? 0, T = d?.innerHeight ?? 0, k = m ? Math.min(Math.max(m.clientX, 0), M) : 0, y = m ? Math.min(Math.max(m.clientY, 0), T) : 0, S = d?.ref?.current || void 0;
  if (!m)
    return null;
  const j = e?.[m.index], b = Mo(
    j ? {
      specialCauseSinglePointUp: !!j.rules.singlePoint.up,
      specialCauseSinglePointDown: !!j.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!j.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!j.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!j.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!j.rules.fourOfFive.down,
      specialCauseShiftUp: !!j.rules.shift.up,
      specialCauseShiftDown: !!j.rules.shift.down,
      specialCauseTrendUp: !!j.rules.trend.up,
      specialCauseTrendDown: !!j.rules.trend.down
    } : null
  ).map((Le) => ({ id: Le, label: An[Le].tooltip })), w = m.x instanceof Date ? m.x : new Date(m.x), $ = a ? a(w) : w.toDateString(), I = s ? `${s}` : "", E = o || I ? `${m.y}${I ? "" + I : " "}${o ? " " + o : ""}` : `${m.y}`, N = Io(j?.classification?.variation), C = Kl(j?.classification?.assurance), D = Zm(
    t.mean ?? null,
    t.sigma,
    m.y
  ), H = r ? r(m.index, { x: m.x, y: m.y }) : void 0, J = N || C || D, ee = j?.rules.trend.up || j?.rules.trend.down, B = j?.classification?.variation === Ze.Neither && ee, K = l && B ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, A = b.length > 0, L = j && "primeDirection" in j ? j.primeDirection : void 0, G = j && "primeRuleId" in j ? j.primeRuleId : void 0, U = i && j?.classification?.variation === Ze.Neither && A, P = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", Z = Ql(j?.classification?.variation), X = 6.2, ne = [
    H || "",
    `${$} • ${E}`
  ].filter(Boolean).reduce(
    (Le, we) => Math.max(Le, we.length * X + 32),
    0
  ), ue = 200, W = 440, se = Math.min(W, Math.max(ue, ne));
  let ce = k + 12, he = (d.margin?.top ?? 0) + y + 16;
  ce + se > M && (ce = k - -60 - se), ce < 0 && (ce = Math.max(0, M - se));
  const Me = m ? `spc-tooltip-${m.index}` : "spc-tooltip", Ge = typeof m.index == "number" ? m.index : NaN, Te = S ? ld(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: Me,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (g ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ce,
          top: he,
          width: se,
          maxWidth: W,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": g ? "false" : "true",
        "data-floating": !0,
        "data-placement": ce + se + 12 > M ? "left" : "right",
        onPointerEnter: () => {
          h(!0), x.current && (cancelAnimationFrame(x.current), x.current = null);
        },
        onPointerLeave: () => {
          if (h(!1), !c?.focused) {
            const Le = requestAnimationFrame(() => {
              f(null), x.current = null;
            });
            x.current = Le;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              Ge
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: $ })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: E })
          ] }),
          J && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: N?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              at,
              {
                text: N,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : N?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              at,
              {
                text: N,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : U ? /* @__PURE__ */ n.jsx(
              at,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : N ? /* @__PURE__ */ n.jsx(
              at,
              {
                text: N,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          C && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Le = C.toLowerCase(), F = !(Le.includes("not met") || Le.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Le);
              return /* @__PURE__ */ n.jsx(
                at,
                {
                  text: C,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${F ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${C}`
                }
              );
            })() })
          ] }),
          D && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              at,
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
          K && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: K })
          ] }),
          A && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: b.map(({ id: Le, label: we }) => {
                  const F = String(Le), ae = F === cr.TrendIncreasing || F === cr.TrendDecreasing ? "fdp-spc-tag--trend" : U ? "fdp-spc-tag--no-judgement" : N ? N.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : N.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    at,
                    {
                      text: we,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${ae}`,
                      "data-rule-id": F
                    },
                    F
                  );
                })
              }
            ),
            L && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ n.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Le = U ? "fdp-spc-tag--no-judgement" : N ? N.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : N.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", we = `${L}${G ? ` (${G})` : ""}`;
                return /* @__PURE__ */ n.jsx(
                  at,
                  {
                    text: we,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${Le}`,
                    "aria-label": `Prime direction ${L}${G ? ` via ${G}` : ""}`
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
            cx: k,
            cy: y,
            r: 7,
            fill: "none",
            stroke: P,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: k,
            cy: y,
            r: 5,
            fill: "#000",
            stroke: P,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: k,
            cy: y,
            r: 2.5,
            fill: Z,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Te
      ]
    }
  );
}, wg = ({
  engineRows: e,
  measureName: t,
  measureUnit: r,
  onSignalFocus: o
}) => {
  const s = nn(), a = s?.focused ?? null, i = a?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = V.useMemo(
    () => l ? Mo({
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
  ), d = V.useMemo(
    () => Array.from(
      new Set(c.map((m) => An[m]?.narration).filter(Boolean))
    ),
    [c]
  ), u = l ? Io(l.classification?.variation) : null, f = l ? Kl(l.classification?.assurance) : null, p = c.length > 0, h = l ? l.classification?.variation === Ze.Neither && p : !1, x = V.useRef(null);
  return V.useEffect(() => {
    if (!o || !a || l == null) return;
    const m = `${a.seriesId}:${a.index}`;
    if (x.current !== m) {
      x.current = m;
      try {
        o({
          index: a.index,
          x: a.x,
          y: a.y,
          row: l,
          rules: c
        });
      } catch {
      }
    }
  }, [a?.seriesId, a?.index, a?.x, a?.y, l, c, o]), /* @__PURE__ */ n.jsxs(
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
        !l || !a ? /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ n.jsxs("span", { children: [
                  /* @__PURE__ */ n.jsx("strong", { children: "Point:" }),
                  " ",
                  a.index + 1
                ] }),
                /* @__PURE__ */ n.jsxs("span", { children: [
                  /* @__PURE__ */ n.jsx("strong", { children: "Value:" }),
                  " ",
                  a.y,
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
                      at,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
                      at,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : h ? /* @__PURE__ */ n.jsx(
                      at,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ n.jsx(
                      at,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), _ = !(m.includes("not met") || m.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(m);
                      return /* @__PURE__ */ n.jsx(
                        at,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${_ ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                children: c.length === 0 ? /* @__PURE__ */ n.jsx("span", { children: " None" }) : c.map((m) => {
                  const g = String(m), M = g === cr.TrendIncreasing || g === cr.TrendDecreasing ? "fdp-spc-tag--trend" : h ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", T = An[m]?.tooltip || g;
                  return /* @__PURE__ */ n.jsx(
                    at,
                    {
                      text: T,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${M}`,
                      "data-rule-id": g,
                      title: An[m]?.tooltip
                    },
                    g
                  );
                })
              }
            )
          ] }),
          d.length > 0 && /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ n.jsx("strong", { children: "Summary:" }),
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
function Sg(e, t = !0) {
  if (!e?.length) return [];
  const r = [...e];
  if (t) {
    for (let a = 1; a < r.length - 1; a++)
      r[a] === gt.Common && r[a - 1] === r[a + 1] && r[a - 1] !== gt.Common && (r[a] = r[a - 1]);
    let s = 0;
    for (; s < r.length; ) {
      const a = r[s];
      let i = s + 1;
      for (; i < r.length && r[i] === a; ) i++;
      i - s === 1 && a !== gt.Common && (r[s] = gt.Common), s = i;
    }
  }
  const o = [];
  if (r.length) {
    let s = 0;
    for (let a = 1; a <= r.length; a++)
      if (a === r.length || r[a] !== r[s]) {
        const i = r[s], l = a - 1, c = l - s + 1;
        (i === gt.Common || c >= 2) && o.push({ start: s, end: l, category: i }), s = a;
      }
  }
  return o;
}
var Xn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Xn || {}), fc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(fc || {});
function _g(e) {
  const {
    ui: t,
    input: r,
    engine: o,
    container: s,
    a11y: a,
    visualsEngine: i,
    meta: l,
    data: c,
    ariaLabel: d,
    height: u,
    showZones: f,
    showPoints: p,
    announceFocus: h,
    className: x,
    unit: m,
    targets: g,
    baselines: _,
    ghosts: M,
    settings: T,
    chartType: k,
    metricImprovement: y,
    gradientSequences: S,
    sequenceTransition: j,
    processLineWidth: v,
    showPartitionMarkers: b,
    showWarningsPanel: w,
    warningsFilter: $,
    enableNeutralNoJudgement: I,
    showTrendGatingExplanation: E,
    trendVisualMode: N,
    alwaysShowZeroY: C,
    alwaysShowHundredY: D,
    percentScale: H,
    showTrendStartMarkers: J,
    showFirstFavourableCrossMarkers: ee,
    showTrendBridgeOverlay: B,
    showSignalsInspector: K,
    onSignalFocus: A,
    showIcons: L,
    showEmbeddedIcon: G,
    embeddedIconVariant: U,
    embeddedIconRunLength: P,
    showFocusIndicator: Z,
    visualsScenario: X,
    visualsEngineSettings: q,
    source: ne,
    narrationContext: ue,
    highlightOutOfControl: W,
    precomputed: se
  } = e;
  process.env.NODE_ENV !== "production" && (!r && (g !== void 0 || _ !== void 0 || M !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !o && T !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !s && (u !== void 0 || x !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !a && (d !== void 0 || h !== void 0 || ue !== void 0 || m !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (X !== void 0 || q !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || p !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && W !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && ne !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const ce = r?.data ?? c ?? [], ye = r?.targets ?? g, he = r?.baselines ?? _, Me = r?.ghosts ?? M, Ge = o?.chartType ?? k ?? ql.XmR, Te = o?.metricImprovement ?? y ?? ln.Neither, Le = o?.settings ?? T, we = o?.autoRecalc, F = t?.axes?.alwaysShowZeroY ?? C ?? !1, Y = t?.axes?.alwaysShowHundredY ?? D ?? !1, ae = t?.axes?.percentScale ?? H ?? !1, fe = t?.visuals?.gradientSequences ?? S ?? !0, pe = t?.visuals?.sequenceTransition ?? j ?? "slope", R = t?.visuals?.processLineWidth ?? v ?? 2, O = t?.visuals?.trend?.visualMode ?? N ?? "ungated", oe = t?.visuals?.trend?.showGatingExplanation ?? E ?? !0, Q = t?.visuals?.rules?.enableNeutralNoJudgement ?? I ?? !0, re = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, le = t?.visuals?.showZones, de = t?.visuals?.showPoints, be = t?.visuals?.rules?.highlightOutOfControl, ke = s?.height, Be = s?.className, Ye = a?.label, lt = a?.unit, Qe = a?.narrationContext, ie = i?.scenario, Ae = i?.settings, z = l?.source, te = t?.overlays?.partitionMarkers ?? b ?? !1, ge = t?.overlays?.trendStartMarkers ?? J ?? !1, me = t?.overlays?.firstFavourableCrossMarkers ?? ee ?? !1, xe = t?.overlays?.trendBridge ?? B ?? !1, Se = t?.inspector?.show ?? K ?? !1, Re = t?.inspector?.onFocus ?? A, Ce = t?.warnings?.show ?? w ?? !1, je = t?.warnings?.filter ?? $, ve = t?.icons?.show ?? L ?? !1, Ne = t?.icons?.embedded?.show ?? G ?? !0, Ke = t?.icons?.embedded?.variant ?? U ?? xn.Classic, st = t?.icons?.embedded?.runLength ?? P, $e = t?.overlays?.focusIndicator ?? Z ?? !0;
  return {
    effData: ce,
    effTargets: ye,
    effBaselines: he,
    effGhosts: Me,
    effChartTypeCore: Ge,
    effMetricImprovementCore: Te,
    effEngineSettings: Le,
    effEngineAutoRecalc: we,
    effHeight: ke,
    effClassName: Be,
    effAriaLabel: Ye,
    effUnit: lt,
    effNarrationContext: Qe,
    effShowZones: le,
    effShowPoints: de,
    effHighlightOutOfControl: be,
    effVisualsScenario: ie,
    effVisualsEngineSettings: Ae,
    effPrecomputedVisuals: se,
    effSource: z,
    effAlwaysShowZeroY: F,
    effAlwaysShowHundredY: Y,
    effPercentScale: ae,
    effGradientSequences: fe,
    effSequenceTransition: pe,
    effProcessLineWidth: R,
    effTrendVisualMode: O,
    effShowTrendGatingExplanation: oe,
    effEnableNeutralNoJudgement: Q,
    effEnableRules: re,
    effShowPartitionMarkers: te,
    effShowTrendStartMarkers: ge,
    effShowFirstFavourableCrossMarkers: me,
    effShowTrendBridgeOverlay: xe,
    effShowSignalsInspector: Se,
    effOnSignalFocus: Re,
    effShowWarningsPanel: Ce,
    effWarningsFilter: je,
    effShowIcons: ve,
    effShowEmbeddedIcon: Ne,
    effEmbeddedIconVariant: Ke,
    effEmbeddedIconRunLength: st,
    effShowFocusIndicator: $e
  };
}
let kg = 0;
const Cg = ({ data: e, targets: t, visuals: r, a11y: o, axis: s, compute: a }) => {
  const {
    series: i,
    engineRows: l,
    visualCategories: c,
    partitionMarkers: d
  } = e, { limits: u, uniformTarget: f } = t, {
    showPoints: p,
    showZones: h,
    highlightOutOfControl: x,
    gradientSequences: m,
    sequenceTransition: g,
    processLineWidth: _,
    showFocusIndicator: M = !1,
    enableRules: T,
    enableNeutralNoJudgement: k = !0,
    showTrendStartMarkers: y = !1,
    showFirstFavourableCrossMarkers: S = !1,
    showTrendBridgeOverlay: j = !1
  } = r, {
    announceFocus: v,
    ariaLabel: b,
    narrationContext: w,
    showSignalsInspector: $ = !1,
    onSignalFocus: I,
    showTrendGatingExplanation: E = !0
  } = o, { zeroBreakSlotGapPx: N } = s, { metricImprovement: C, effectiveUnit: D } = a, H = _n(), J = dn();
  if (!H) return null;
  const { xScale: ee, yScale: B } = H, K = V.useRef(
    "spc-seq-" + ++kg
  ), A = nn(), L = i[0]?.data || [], G = V.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const F = /* @__PURE__ */ new Set();
    return L.forEach((Y, ae) => {
      typeof u.ucl == "number" && Y.y > u.ucl && F.add(ae), typeof u.lcl == "number" && Y.y < u.lcl && F.add(ae);
    }), F;
  }, [u.ucl, u.lcl, L]), U = V.useMemo(() => {
    if (!l || !l.length) return null;
    const F = [];
    return l.forEach((Y, ae) => {
      const fe = Y.classification.variation === Ze.Concern || Y.classification.variation === Ze.Improvement || !!Y.classification.neutralSpecialCauseValue, pe = !!Y.rules.singlePoint.up || !!Y.rules.twoOfThree.up || !!Y.rules.fourOfFive.up || !!Y.rules.shift.up || !!Y.rules.trend.up, R = !!Y.rules.singlePoint.down || !!Y.rules.twoOfThree.down || !!Y.rules.fourOfFive.down || !!Y.rules.shift.down || !!Y.rules.trend.down;
      F[ae] = {
        variation: Y.classification.variation,
        assurance: Y.classification.assurance,
        special: fe,
        concern: Y.classification.variation === Ze.Concern,
        improvement: Y.classification.variation === Ze.Improvement,
        trendUp: !!Y.rules.trend.up,
        trendDown: !!Y.rules.trend.down,
        upAny: pe,
        downAny: R,
        neutralSpecial: !!Y.classification.neutralSpecialCauseValue,
        shiftUp: !!Y.rules.shift.up,
        shiftDown: !!Y.rules.shift.down,
        twoOfThreeUp: !!Y.rules.twoOfThree.up,
        twoOfThreeDown: !!Y.rules.twoOfThree.down,
        fourOfFiveUp: !!Y.rules.fourOfFive.up,
        fourOfFiveDown: !!Y.rules.fourOfFive.down,
        partitionId: Y.partition.id ?? null
      };
    }), F;
  }, [l]), P = V.useMemo(() => (c || []).map((F) => F === it.Improvement ? gt.Improvement : F === it.Concern ? gt.Concern : F === it.NoJudgement ? gt.NoJudgement : gt.Common), [c]), Z = V.useMemo(() => !m || !P.length ? [] : Sg(P, !0), [m, P, b]), X = V.useMemo(
    () => L.map((F) => ee(F.x instanceof Date ? F.x : new Date(F.x))),
    [L, ee]
  ), q = ee.range()[1], ne = ee.range()[0], ue = V.useMemo(() => {
    if (!l || !l.length)
      return null;
    let F = Number.POSITIVE_INFINITY, Y = Number.POSITIVE_INFINITY;
    if (l.forEach((Q, re) => {
      Q.rules.trend.up && (F = Math.min(F, re)), Q.rules.trend.down && (Y = Math.min(Y, re));
    }), !Number.isFinite(F) && !Number.isFinite(Y))
      return null;
    const ae = F <= Y, fe = ae ? At.Up : At.Down, pe = ae ? F : Y, R = (Q) => C == null || C === ln.Neither || Q == null || typeof Q.data.value != "number" || typeof Q.limits.mean != "number" ? !1 : fe === At.Up ? C === ln.Up ? Q.data.value > Q.limits.mean : Q.data.value < Q.limits.mean : C === ln.Down ? Q.data.value < Q.limits.mean : Q.data.value > Q.limits.mean;
    let O = null;
    for (let Q = pe; Q < l.length; Q++) {
      const re = l[Q];
      if (!(ae ? !!re.rules.trend.up : !!re.rules.trend.down)) break;
      if (R(re)) {
        O = Q;
        break;
      }
    }
    let oe = !1;
    if (O != null) {
      let Q = 0;
      for (let re = O; re < l.length; re++) {
        const le = l[re];
        if (!(ae ? !!le.rules.trend.up : !!le.rules.trend.down)) break;
        R(le) && Q++;
      }
      oe = Q >= 2;
    }
    return {
      direction: fe,
      detectedAt: pe,
      firstFavourableCrossAt: O,
      persistedAcrossMean: oe
    };
  }, [l, C]), W = V.useMemo(() => {
    if (!l || !l.length) return null;
    const F = (Y) => {
      const ae = [];
      let fe = null, pe = null;
      for (let R = 0; R < l.length; R++) {
        const O = l[R], oe = Y(O), Q = typeof oe == "number" && !isNaN(oe) ? oe : null;
        if (Q == null) {
          fe !== null && pe != null && (ae.push({
            x1: X[fe],
            x2: X[R - 1],
            y: B(pe)
          }), fe = null, pe = null);
          continue;
        }
        if (fe === null) {
          fe = R, pe = Q;
          continue;
        }
        pe != null && Math.abs(Q - pe) <= 1e-9 || (pe != null && ae.push({
          x1: X[fe],
          x2: X[R - 1],
          y: B(pe)
        }), fe = R, pe = Q);
      }
      return fe !== null && pe != null && ae.push({
        x1: X[fe],
        x2: X[l.length - 1],
        y: B(pe)
      }), ae;
    };
    return {
      mean: F((Y) => Y.limits.mean ?? null),
      ucl: F((Y) => Y.limits.ucl ?? null),
      lcl: F((Y) => Y.limits.lcl ?? null),
      onePos: F((Y) => Y.limits.oneSigma.upper ?? null),
      oneNeg: F((Y) => Y.limits.oneSigma.lower ?? null),
      twoPos: F((Y) => Y.limits.twoSigma.upper ?? null),
      twoNeg: F((Y) => Y.limits.twoSigma.lower ?? null)
    };
  }, [l, X, B]), se = V.useMemo(() => Z.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs(
      "linearGradient",
      {
        id: `${K.current}-grad-common`,
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
    Z.map((F, Y) => {
      const ae = `${K.current}-grad-${Y}`;
      let fe, pe = 0.28, R = 0.12, O = 0.045;
      switch (F.category) {
        case gt.Concern:
          fe = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", pe = 0.28, R = 0.12, O = 0.045;
          break;
        case gt.Improvement:
          fe = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", pe = 0.26, R = 0.11, O = 0.045;
          break;
        case gt.NoJudgement:
          fe = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", pe = 0.26, R = 0.11, O = 0.045;
          break;
        default:
          fe = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: ae, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: fe, stopOpacity: pe }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: fe, stopOpacity: R }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: fe, stopOpacity: O })
      ] }, ae);
    })
  ] }) : null, [Z]), ce = V.useMemo(() => {
    if (!Z.length) return null;
    const [F] = B.domain(), Y = B(F), ae = Z.map((fe, pe) => {
      const { start: R, end: O, category: oe } = fe;
      if (R < 0 || O >= X.length || R > O)
        return null;
      const Q = X[R], re = X[O];
      let le = "";
      if (oe === gt.Common) {
        const de = pe > 0 ? Z[pe - 1] : null, be = pe < Z.length - 1 ? Z[pe + 1] : null, ke = de ? X[de.end] : ne, Be = de ? B(L[de.end].y) : Y, Ye = be ? X[be.start] : q, lt = be ? B(L[be.start].y) : Y;
        le = `M ${ke} ${Y}`, le += ` L ${ke} ${Be}`;
        for (let Qe = R; Qe <= O; Qe++)
          le += ` L ${X[Qe]} ${B(L[Qe].y)}`;
        le += ` L ${Ye} ${lt}`, le += ` L ${Ye} ${Y} Z`;
      } else {
        const de = pe > 0 ? Z[pe - 1] : null, be = pe < Z.length - 1 ? Z[pe + 1] : null, ke = de && de.category !== gt.Common, Be = be && be.category !== gt.Common, Ye = B(L[R].y), lt = B(L[O].y);
        let Qe = Q, ie = re;
        if (ke) {
          const Ae = X[de.end], z = B(L[de.end].y), te = L[R].y - L[de.end].y;
          g === Xn.Slope && te > 0 ? (le = `M ${Ae} ${z} L ${Q} ${Ye}`, Qe = Ae) : (le = `M ${Q} ${Y} L ${Q} ${Ye}`, Qe = Q);
        } else
          le = `M ${Q} ${Y} L ${Q} ${Ye}`;
        for (let Ae = R + 1; Ae <= O; Ae++)
          le += ` L ${X[Ae]} ${B(L[Ae].y)}`;
        if (le += ` L ${re} ${lt}`, Be) {
          const Ae = X[be.start], z = B(L[be.start].y), te = L[be.start].y - L[O].y;
          (g === Xn.Slope && te <= 0 || g === Xn.Extend) && (le += ` L ${Ae} ${z}`, ie = Ae);
        }
        if (le += ` L ${ie} ${Y}`, le += ` L ${Qe} ${Y} Z`, g === Xn.Neutral && ke) {
          const Ae = X[de.end], z = B(L[de.end].y), te = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${Ae} ${Y} L ${Ae} ${z} L ${Q} ${Ye} L ${Q} ${Y} Z`,
              fill: `url(#${K.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${pe}`
          );
          return /* @__PURE__ */ n.jsxs("g", { children: [
            te,
            /* @__PURE__ */ n.jsx(
              "path",
              {
                d: le,
                fill: `url(#${K.current}-grad-${pe})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${pe}`
            )
          ] }, `seq-group-${pe}`);
        }
      }
      return /* @__PURE__ */ n.jsx(
        "path",
        {
          d: le,
          fill: `url(#${K.current}-grad-${pe})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${pe}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: ae });
  }, [Z, X, q, B, L, g]), ye = V.useMemo(() => {
    if (!w?.timeframe && L.length >= 2) {
      const F = L.map((O) => O.x instanceof Date ? O.x : new Date(O.x)), Y = new Date(Math.min(...F.map((O) => O.getTime()))), ae = new Date(Math.max(...F.map((O) => O.getTime()))), fe = Math.round((ae.getTime() - Y.getTime()) / 864e5) || 0;
      if (fe < 14)
        return `The chart shows a timeframe of ${fe + 1} days`;
      const pe = Math.round(fe / 7);
      return pe < 20 ? `The chart shows a timeframe of ${pe} weeks` : `The chart shows a timeframe of ${(ae.getFullYear() - Y.getFullYear()) * 12 + (ae.getMonth() - Y.getMonth()) + 1} months`;
    }
    if (w?.timeframe)
      return `The chart shows a timeframe of ${w.timeframe}`;
  }, [w?.timeframe, L]), he = (F) => {
    const Y = F % 10, ae = F % 100;
    return Y === 1 && ae !== 11 ? `${F}st` : Y === 2 && ae !== 12 ? `${F}nd` : Y === 3 && ae !== 13 ? `${F}rd` : `${F}th`;
  }, Me = (F) => `${he(F.getDate())} ${F.toLocaleString("en-GB", { month: "long" })}, ${F.getFullYear()}`, Ge = (F) => ({
    specialCauseSinglePointUp: !!F?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!F?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!F?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!F?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!F?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!F?.rules.fourOfFive.down,
    specialCauseShiftUp: !!F?.rules.shift.up,
    specialCauseShiftDown: !!F?.rules.shift.down,
    specialCauseTrendUp: !!F?.rules.trend.up,
    specialCauseTrendDown: !!F?.rules.trend.down
  }), Te = V.useCallback(
    ({
      index: F,
      x: Y,
      y: ae
    }) => {
      const fe = l?.[F], pe = Y instanceof Date ? Y : new Date(Y), R = Me(pe), O = w?.measureUnit ? ` ${w.measureUnit}` : "", oe = w?.measureName ? ` ${w.measureName}` : "";
      if (!fe)
        return `General summary is: ${ye ? ye + ". " : ""}Point ${F + 1}, ${R}, ${ae}${O}${oe}`;
      const Q = Io(fe.classification?.variation) || "Variation", re = Mo(Ge(fe)), le = re.length ? ` Rules: ${[...new Set(re.map((be) => An[be].narration))].join("; ")}.` : " No special cause rules.", de = [];
      return w?.measureName && de.push(`Measure: ${w.measureName}.`), w?.datasetContext && de.push(`${w.datasetContext}.`), w?.organisation && de.push(`Organisation: ${w.organisation}.`), w?.additionalNote && de.push(w.additionalNote), [
        "General summary is:",
        ...de,
        `Point ${F + 1} recorded on `,
        R + ",",
        `with a value of ${ae} ${O}${oe}`,
        Q + ".",
        le
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, w, ye]
  ), Le = V.useCallback(
    (F, Y) => l?.[F] ? Te({
      index: F,
      seriesId: "process",
      x: Y.x instanceof Date ? Y.x : new Date(Y.x),
      y: Y.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, Te]
  ), we = V.useMemo(() => {
    try {
      const F = typeof B?.domain == "function" ? B.domain() : void 0;
      if (!F || !Array.isArray(F) || F.length < 2) return !1;
      const Y = Math.min(F[0], F[1]), ae = Math.max(F[0], F[1]);
      return !(0 >= Y && 0 <= ae);
    } catch {
      return !1;
    }
  }, [B]);
  return /* @__PURE__ */ n.jsx(zm, { children: /* @__PURE__ */ n.jsxs(
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
            width: H.xScale.range()[1] + 56 + 16,
            height: (J?.innerHeight ?? H.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(bi, { type: "x" }),
              /* @__PURE__ */ n.jsx(
                bi,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: we,
                    gapPx: N,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ n.jsx(am, { axis: "y" }),
              se,
              ce,
              d.map((F, Y) => {
                const ae = L[F];
                if (!ae) return null;
                const fe = ee(ae.x instanceof Date ? ae.x : new Date(ae.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: fe,
                    x2: fe,
                    y1: 0,
                    y2: B.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${Y}`
                );
              }),
              W?.mean.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                W.mean.map((F, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: F.x1,
                    x2: F.x2,
                    y1: F.y,
                    y2: F.y
                  },
                  `mean-${Y}`
                )),
                W.mean.map((F, Y) => {
                  if (Y === W.mean.length - 1) return null;
                  const ae = W.mean[Y + 1];
                  if (!ae || F.y === ae.y) return null;
                  const pe = Math.max(4, ae.x1 - F.x2 || 0) * 0.5, R = `M ${F.x2},${F.y} C ${F.x2 + pe},${F.y} ${ae.x1 - pe},${ae.y} ${ae.x1},${ae.y}`;
                  return /* @__PURE__ */ n.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: R,
                      fill: "none"
                    },
                    `mean-join-${Y}`
                  );
                })
              ] }) : null,
              f != null && /* @__PURE__ */ n.jsx(n.Fragment, {}),
              W?.ucl.length ? /* @__PURE__ */ n.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    W.ucl.map((F, Y) => /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: F.x1,
                        x2: F.x2,
                        y1: F.y,
                        y2: F.y,
                        strokeWidth: 2
                      },
                      `ucl-${Y}`
                    )),
                    W.ucl.map((F, Y) => {
                      if (Y === W.ucl.length - 1) return null;
                      const ae = W.ucl[Y + 1];
                      if (!ae || F.y === ae.y) return null;
                      const pe = Math.max(4, ae.x1 - F.x2 || 0) * 0.5, R = `M ${F.x2},${F.y} C ${F.x2 + pe},${F.y} ${ae.x1 - pe},${ae.y} ${ae.x1},${ae.y}`;
                      return /* @__PURE__ */ n.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: R,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${Y}`
                      );
                    })
                  ]
                }
              ) : null,
              W?.lcl.length ? /* @__PURE__ */ n.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    W.lcl.map((F, Y) => /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: F.x1,
                        x2: F.x2,
                        y1: F.y,
                        y2: F.y,
                        strokeWidth: 2
                      },
                      `lcl-${Y}`
                    )),
                    W.lcl.map((F, Y) => {
                      if (Y === W.lcl.length - 1) return null;
                      const ae = W.lcl[Y + 1];
                      if (!ae || F.y === ae.y) return null;
                      const pe = Math.max(4, ae.x1 - F.x2 || 0) * 0.5, R = `M ${F.x2},${F.y} C ${F.x2 + pe},${F.y} ${ae.x1 - pe},${ae.y} ${ae.x1},${ae.y}`;
                      return /* @__PURE__ */ n.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: R,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${Y}`
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
                    x2: ee.range()[1],
                    y1: B(f),
                    y2: B(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: ee.range()[0] - 7,
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
              h && W && W.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                W.onePos.map((F, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: F.x1,
                    x2: F.x2,
                    y1: F.y,
                    y2: F.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${Y}`
                )),
                W.oneNeg.map((F, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: F.x1,
                    x2: F.x2,
                    y1: F.y,
                    y2: F.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${Y}`
                )),
                W.twoPos.map((F, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: F.x1,
                    x2: F.x2,
                    y1: F.y,
                    y2: F.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${Y}`
                )),
                W.twoNeg.map((F, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: F.x1,
                    x2: F.x2,
                    y1: F.y,
                    y2: F.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${Y}`
                ))
              ] }),
              ue && (y || S || j) && (() => {
                const F = ue.detectedAt, Y = ue.firstFavourableCrossAt, ae = L[F] ? ee(
                  L[F].x instanceof Date ? L[F].x : new Date(L[F].x)
                ) : null, fe = L[F] ? B(L[F].y) : null, pe = Y != null && L[Y] ? ee(
                  L[Y].x instanceof Date ? L[Y].x : new Date(L[Y].x)
                ) : null, R = Y != null && L[Y] ? B(L[Y].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  j && ae != null && fe != null && pe != null && R != null && /* @__PURE__ */ n.jsx(
                    "line",
                    {
                      x1: ae,
                      y1: fe,
                      x2: pe,
                      y2: R,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  y && ae != null && fe != null && /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: ae,
                      cy: fe,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ n.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  S && pe != null && R != null && /* @__PURE__ */ n.jsx("circle", { cx: pe, cy: R, r: 5, fill: "#555", children: /* @__PURE__ */ n.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ n.jsx(
                Om,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (F) => F.x instanceof Date ? F.x : new Date(F.x),
                  smooth: !1,
                  strokeWidth: _
                }
              ),
              p && L.map((F, Y) => {
                const ae = ee(F.x instanceof Date ? F.x : new Date(F.x)), fe = B(F.y), pe = G.has(Y), R = U?.[Y], O = P[Y], oe = O === gt.Improvement, Q = O === gt.Concern, re = O === gt.NoJudgement, le = [
                  "fdp-spc__point",
                  pe && x ? "fdp-spc__point--ooc" : null,
                  T && Q ? "fdp-spc__point--sc-concern" : null,
                  T && oe ? "fdp-spc__point--sc-improvement" : null,
                  T && k && re ? "fdp-spc__point--sc-no-judgement" : null,
                  R?.assurance === cn.Pass ? "fdp-spc__point--assurance-pass" : null,
                  R?.assurance === cn.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), de = A?.focused?.index === Y;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: ae,
                    cy: fe,
                    r: 5,
                    className: le,
                    "data-variation": R?.variation,
                    "data-assurance": R?.assurance,
                    "aria-label": b,
                    ...de ? { "aria-describedby": `spc-tooltip-${Y}` } : {}
                  },
                  Y
                );
              }),
              M && $ && A?.focused && (() => {
                const F = A.focused, Y = typeof F.index == "number" ? F.index : -1;
                if (Y < 0 || !L[Y]) return null;
                const ae = ee(
                  L[Y].x instanceof Date ? L[Y].x : new Date(L[Y].x)
                ), fe = B(L[Y].y), pe = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ n.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: ae,
                      cy: fe,
                      r: 7,
                      fill: "none",
                      stroke: pe,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: ae,
                      cy: fe,
                      r: 5,
                      fill: "#000",
                      stroke: pe,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: ae,
                      cy: fe,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              J && /* @__PURE__ */ n.jsx(
                Ng,
                {
                  width: ee.range()[1],
                  height: B.range()[0]
                }
              ),
              !$ && /* @__PURE__ */ n.jsx(
                uc,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: Le,
                  measureName: w?.measureName,
                  measureUnit: w?.measureUnit,
                  dateFormatter: (F) => Me(F),
                  enableNeutralNoJudgement: k,
                  showTrendGatingExplanation: E
                }
              )
            ] })
          }
        ),
        $ && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          wg,
          {
            engineRows: l,
            measureName: w?.measureName,
            measureUnit: D || w?.measureUnit,
            onSignalFocus: I
          }
        ) }),
        v && /* @__PURE__ */ n.jsx(
          Um,
          {
            format: (F) => Te({ ...F, x: F.x instanceof Date ? F.x : new Date(F.x) })
          }
        )
      ]
    }
  ) });
}, Ng = ({
  width: e,
  height: t
}) => {
  const r = nn();
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
        const a = o.currentTarget.getBoundingClientRect(), i = o.clientX - a.left, l = o.clientY - a.top;
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
function Ti(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function jg(e, t, r) {
  const o = new Array(e), s = new Date(t);
  for (let a = 0; a < e; a++)
    switch (o[a] = new Date(s), r) {
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
  return o;
}
function Mg(e, t) {
  const r = e.filter(Boolean);
  if (r.length < 2) return t;
  const o = [];
  for (let c = 1; c < r.length; c++)
    o.push(r[c].getTime() - r[c - 1].getTime());
  const s = o.sort((c, d) => c - d), a = s[Math.floor(s.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return a <= 2 * i ? "hourly" : a <= 2 * l ? "daily" : a <= 10 * l ? "weekly" : a <= 45 * l ? "monthly" : a <= 120 * l ? "quarterly" : "annually";
}
function Li(e, t) {
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
function Ig(e, t, r, o = "0-100") {
  if (t) return t;
  if (r) return r;
  const s = e.filter((l) => l != null);
  if (!s.length) return;
  const a = Math.min(...s), i = Math.max(...s);
  if (o === "0-1") {
    if (a >= 0 && i <= 1 && i > 0) return "%";
  } else if (a >= 0 && i <= 100 && i > 0) return "%";
}
function Dg(e, t, r = 1) {
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
function hc(e) {
  const {
    values: t,
    dates: r,
    intervalHint: o,
    startDate: s,
    providedUnit: a,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: c = !0,
    autoMetadata: d = !0,
    deltaConfig: u
  } = e, f = t.map(
    (b) => typeof b == "number" ? b : b == null ? null : Number(b)
  );
  let p = -1;
  for (let b = f.length - 1; b >= 0; b--)
    if (f[b] != null) {
      p = b;
      break;
    }
  let h = (r || []).map(Ti);
  if (!h.some(Boolean)) {
    const b = Ti(s);
    b && o ? h = jg(f.length, b, o) : h = new Array(f.length).fill(void 0);
  }
  const m = Mg(h, o), g = Ig(
    f,
    a,
    i,
    e.percentHeuristic
  ), _ = l && p >= 0 && f[p] != null ? f[p] : void 0, M = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function T() {
    if (p < 0) return -1;
    if (M.strategy === "previous" || M.strategy === "n-points") {
      let E = p - (M.strategy === "previous" ? 1 : Math.max(1, M.n || 1));
      if (!M.skipNulls) return E;
      for (let N = E; N >= 0; N--) if (f[N] != null) return N;
      return -1;
    }
    const b = h[p];
    if (!b) return -1;
    const w = new Date(b);
    w.setFullYear(w.getFullYear() - 1);
    let $ = -1, I = 1 / 0;
    for (let E = 0; E < h.length; E++) {
      const N = h[E];
      if (!N || f[E] == null) continue;
      const C = Math.abs(N.getTime() - w.getTime());
      C < I && (I = C, $ = E);
    }
    return $;
  }
  const k = T(), y = k >= 0 ? f[k] : null;
  let S;
  if (c && _ != null && y != null) {
    const b = _ - y, w = M.absolute !== !1, $ = w ? b : y === 0 ? 0 : b / Math.abs(y) * 100;
    S = {
      value: Number.isFinite($) ? Number($.toFixed(2)) : 0,
      isPercent: w ? g === "%" : !0,
      period: `vs ${Dg(m, o, M.strategy === "n-points" ? Math.max(1, M.n || 1) : 1)}`
    };
  }
  const j = p >= 0 ? h[p] : void 0, v = d && Li(j, m) ? `Latest: ${Li(j, m)}` : void 0;
  return { value: _, unit: g, delta: S, metadata: v, latestDate: j, frequency: m };
}
function Tg(e) {
  const { rows: t } = gr(e), r = fa(e);
  return { rows: t, visuals: r.visuals };
}
const ma = 13;
function ga(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case it.Improvement:
          return Ze.Improvement;
        case it.Concern:
          return Ze.Concern;
        case it.NoJudgement:
          return Ze.Neither;
        default:
          return null;
      }
    });
}
function pc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === it.NoJudgement);
}
function $i(e, t) {
  const r = e === jt.G ? jt.G : e === jt.T ? jt.T : jt.XmR, o = t === Xe.Up ? Xe.Up : t === Xe.Down ? Xe.Down : Xe.Neither;
  return { chartType: r, metricImprovement: o };
}
function Ai(e, t, r) {
  const o = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : ma, s = { minimumPoints: o };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= o && (s.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (s.enableFourOfFiveRule = !!e.enableFourOfFiveRule), r && Object.assign(s, r), Object.keys(s).length ? s : void 0;
}
function Lg(e, t, r) {
  const o = V.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: s, totalReservedPx: a } = V.useMemo(() => {
    if (!o) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = Mr, u = c + tm, f = r?.maxFraction, p = Math.max(
      Ir,
      Math.floor(l * f)
    ), h = Math.min(u, p);
    return { slotPx: Math.min(c, h), totalReservedPx: h };
  }, [o, t, r?.maxFraction]);
  return { show: o, slotPx: s, totalReservedPx: a };
}
function $g(e, t, r, o) {
  if (r.percentScale) {
    const c = e.map((f) => f.y), d = Math.max(100, ...c), u = Math.min(0, ...c);
    return [u < 0 ? u : 0, d > 100 ? d : 100];
  }
  const s = e.map((c) => c.y), a = (c) => {
    c != null && s.push(c);
  };
  if (a(t.mean), a(t.ucl), a(t.lcl), a(t.onePos), a(t.oneNeg), a(t.twoPos), a(t.twoNeg), o && o.length)
    for (const c of o)
      typeof c == "number" && !isNaN(c) && s.push(c);
  if (!s.length) return;
  let i = Math.min(...s), l = Math.max(...s);
  return r.alwaysShowZeroY && (i = Math.min(0, i)), r.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function _s(e, t) {
  if (!e?.length || t.chartType !== jt.XmR) return null;
  const r = Math.max(2, Math.floor(t.shiftLength ?? 6)), o = [];
  for (let h = 0; h < e.length; h++) {
    const x = e[h], m = x.value;
    x?.ghost || typeof m == "number" && Number.isFinite(m) && o.push({ idx: h, value: m });
  }
  if (o.length < r * 2) return null;
  let s = 0, a = 0;
  for (let h = 1; h < o.length; h++)
    s += Math.abs(o[h].value - o[h - 1].value), a++;
  if (a === 0) return null;
  const l = s / a * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Xe.Up, u = t.metricImprovement === Xe.Down, f = (() => {
    for (let h = e.length - 1; h >= 0; h--) if (e[h]?.baseline) return h;
    return -1;
  })();
  function p(h, x) {
    let m = 0, g = 0;
    for (let _ = h; _ < x; _++)
      m += o[_].value, g++;
    return g ? m / g : NaN;
  }
  for (let h = r; h <= o.length - r; h++) {
    const x = p(h - r, h), m = p(h, h + r);
    if (!Number.isFinite(x) || !Number.isFinite(m)) continue;
    const g = m - x, _ = g / l;
    let M = !1, T = !1;
    if (d ? (M = _ >= c, T = !0) : u ? (M = -_ >= c, T = !1) : (M = Math.abs(_) >= c, T = g > 0), !M) continue;
    const k = (j) => T ? j > x : j < x;
    let y = !0;
    for (let j = h; j < h + r; j++)
      if (!k(o[j].value)) {
        y = !1;
        break;
      }
    if (!y) continue;
    const S = o[h].idx;
    if (!(t.minGap && f >= 0 && S - f < t.minGap))
      return S;
  }
  return null;
}
function Ag(e, t) {
  const r = _s(e, t);
  return r == null ? e.slice() : e.map((o, s) => s === r ? { ...o, baseline: !0 } : o);
}
function Eg(e, t) {
  const r = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (r <= 1) return Ag(e, t);
  let o = e.slice(), s = 0;
  const a = Math.max(1, t.minGap ?? 0);
  for (; s < r; ) {
    const i = _s(o, { ...t, minGap: a });
    if (i == null) break;
    if (o[i]?.baseline) {
      const l = _s(o, { ...t, minGap: a + 1 });
      if (l == null || l === i) break;
      o = o.map((c, d) => d === l ? { ...c, baseline: !0 } : c), s++;
      continue;
    }
    o = o.map((l, c) => c === i ? { ...l, baseline: !0 } : l), s++;
  }
  return o;
}
const Pg = (e) => {
  const t = V.useCallback(
    (Ce) => String(Ce).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((ve) => ve.length ? ve[0].toUpperCase() + ve.slice(1) : ve).join(" "),
    []
  ), r = V.useCallback(
    (Ce) => String(Ce).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((je) => je.length ? je[0].toUpperCase() + je.slice(1) : je).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && e.disableTrendSideGating !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: o,
    effTargets: s,
    effBaselines: a,
    effGhosts: i,
    effChartTypeCore: l,
    effMetricImprovementCore: c,
    effEngineSettings: d,
    effAlwaysShowZeroY: u,
    effAlwaysShowHundredY: f,
    effPercentScale: p,
    effGradientSequences: h,
    effSequenceTransition: x,
    effProcessLineWidth: m,
    effTrendVisualMode: g,
    effShowTrendGatingExplanation: _,
    effEnableNeutralNoJudgement: M,
    effEnableRules: T,
    effShowPartitionMarkers: k,
    effShowTrendStartMarkers: y,
    effShowFirstFavourableCrossMarkers: S,
    effShowTrendBridgeOverlay: j,
    effShowSignalsInspector: v,
    effOnSignalFocus: b,
    effShowWarningsPanel: w,
    effWarningsFilter: $,
    effShowEmbeddedIcon: I,
    effEmbeddedIconVariant: E,
    effEmbeddedIconRunLength: N,
    effShowFocusIndicator: C,
    effHeight: D,
    effClassName: H,
    effAriaLabel: J,
    effUnit: ee,
    effNarrationContext: B,
    effShowZones: K,
    effShowPoints: A,
    effHighlightOutOfControl: L,
    effVisualsScenario: G,
    effVisualsEngineSettings: U,
    effSource: P,
    effPrecomputedVisuals: Z,
    effEngineAutoRecalc: X
  } = _g(e), q = J ?? e.ariaLabel, ne = D ?? e.height ?? 260, ue = H ?? e.className, W = ee ?? e.unit, se = B ?? e.narrationContext, ce = K ?? e.showZones, ye = A ?? e.showPoints, he = L ?? e.highlightOutOfControl, Me = G ?? e.visualsScenario ?? ac.None, Ge = U ?? e.visualsEngineSettings, Te = P ?? e.source, Le = e.a11y?.announceFocus ?? e.announceFocus ?? !1, we = V.useMemo(() => o.map((Ce, je) => ({
    x: Ce.x,
    value: Ce.y,
    target: s?.[je] ?? void 0,
    baseline: a?.[je] ?? void 0,
    ghost: i?.[je] ?? void 0
  })), [o, s, a, i]), F = V.useMemo(() => {
    try {
      const Ce = X;
      return Ce?.enabled ? Eg(we, {
        chartType: l,
        metricImprovement: c,
        shiftLength: Ce.shiftLength,
        deltaSigma: Ce.deltaSigma,
        minGap: Ce.minGap,
        maxInsertions: Ce.maxInsertions
      }) : we;
    } catch {
      return we;
    }
  }, [we, X, l, c]), Y = V.useMemo(() => {
    if (Z?.visuals) return Z.visuals;
    try {
      const Ce = Ai(
        d,
        F,
        Ge
      ), { chartType: je, metricImprovement: ve } = $i(
        l,
        c
      ), Ne = {
        chartType: je,
        metricImprovement: ve,
        data: F,
        settings: Ce
      }, { visuals: Ke } = ug(Ne, Me, {
        trendVisualMode: g === fc.Ungated ? Hn.Ungated : Hn.Gated,
        enableNeutralNoJudgement: M
      });
      return Ke || [];
    } catch {
      return [];
    }
  }, [
    Z?.visuals?.length,
    F,
    l,
    c,
    g,
    M,
    d,
    Me,
    Ge
  ]), fe = V.useMemo(() => {
    if (Z?.rows)
      try {
        const Ce = Z.rows, je = (ve) => {
          switch (ve) {
            case Ee.ImprovementHigh:
            case Ee.ImprovementLow:
              return Ze.Improvement;
            case Ee.ConcernHigh:
            case Ee.ConcernLow:
              return Ze.Concern;
            case Ee.NeitherHigh:
            case Ee.NeitherLow:
              return Ze.Neither;
            case Ee.CommonCause:
            default:
              return Ze.Neither;
          }
        };
        return Ce.map(
          (ve, Ne) => ({
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
              variation: je(ve.variationIcon),
              neutralSpecialCauseValue: ve.variationIcon === Ee.NeitherHigh || ve.variationIcon === Ee.NeitherLow ? ve.specialCauseImprovementValue ?? ve.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: F[Ne]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Ce = Ai(
        d,
        F,
        Ge
      ), { chartType: je, metricImprovement: ve } = $i(
        l,
        c
      ), Ne = {
        chartType: je,
        metricImprovement: ve,
        data: F,
        settings: Ce
      }, { rows: Ke } = Tg(Ne), st = ($e) => {
        switch ($e) {
          case Ee.ImprovementHigh:
          case Ee.ImprovementLow:
            return Ze.Improvement;
          case Ee.ConcernHigh:
          case Ee.ConcernLow:
            return Ze.Concern;
          case Ee.NeitherHigh:
          case Ee.NeitherLow:
            return Ze.Neither;
          case Ee.CommonCause:
          default:
            return Ze.Neither;
        }
      };
      return Ke.map(
        ($e, Pe) => ({
          data: {
            value: $e.value,
            ghost: !!$e.ghost
          },
          partition: { id: $e.partitionId },
          limits: {
            mean: $e.mean,
            ucl: $e.upperProcessLimit,
            lcl: $e.lowerProcessLimit,
            oneSigma: { upper: $e.upperOneSigma, lower: $e.lowerOneSigma },
            twoSigma: { upper: $e.upperTwoSigma, lower: $e.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!$e.singlePointUp, down: !!$e.singlePointDown },
            twoOfThree: { up: !!$e.twoSigmaUp, down: !!$e.twoSigmaDown },
            fourOfFive: { up: !!$e.fourOfFiveUp, down: !!$e.fourOfFiveDown },
            shift: { up: !!$e.shiftUp, down: !!$e.shiftDown },
            trend: { up: !!$e.trendUp, down: !!$e.trendDown }
          },
          classification: {
            variation: st($e.variationIcon),
            neutralSpecialCauseValue: $e.variationIcon === Ee.NeitherHigh || $e.variationIcon === Ee.NeitherLow ? $e.specialCauseImprovementValue ?? $e.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: F[Pe]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    Z?.rows?.length,
    F,
    l,
    c,
    d,
    Ge
  ]) || null, pe = (fe || []).slice().reverse().find((Ce) => Ce.limits.mean != null), R = pe?.limits.mean ?? null, O = V.useMemo(() => {
    const Ce = [];
    try {
      const je = fe, ve = d?.minimumPoints ?? 13, Ne = d?.minimumPoints ?? 12;
      if (je && je.length) {
        const Ke = je.filter(
          ($e) => !$e.data.ghost && $e.data.value != null
        ).length;
        Ke < ve && Ce.push({
          code: Zr.InsufficientPointsGlobal,
          severity: Et.Warning,
          category: Vr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: Ke, minimumPoints: ve }
        });
        const st = /* @__PURE__ */ new Map();
        for (const $e of je) {
          const Pe = $e.partition.id ?? 0, Oe = st.get(Pe) || { size: 0, nonGhost: 0 };
          Oe.size += 1, !$e.data.ghost && $e.data.value != null && (Oe.nonGhost += 1), st.set(Pe, Oe);
        }
        for (const [$e, Pe] of st)
          Pe.nonGhost > 0 && Pe.nonGhost < Ne && Ce.push({
            code: Zr.InsufficientPointsPartition,
            severity: Et.Warning,
            category: Vr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: $e,
              nonGhostCount: Pe.nonGhost,
              minimumPointsPartition: Ne
            }
          });
      }
    } catch {
    }
    return Ce;
  }, [fe, d?.minimumPoints]), oe = V.useMemo(() => O.length ? $ ? O.filter((Ce) => !($.severities && Ce.severity && !$.severities.includes(Ce.severity) || $.categories && Ce.category && !$.categories.includes(Ce.category) || $.codes && !$.codes.includes(Ce.code))) : O : [], [O, $]), Q = pe?.limits.ucl ?? null, re = pe?.limits.lcl ?? null, le = pe?.limits.oneSigma.upper ?? null, de = pe?.limits.oneSigma.lower ?? null, be = pe?.limits.twoSigma.upper ?? null, ke = pe?.limits.twoSigma.lower ?? null, Be = R != null && le != null ? Math.abs(le - R) : 0, Ye = V.useMemo(
    () => [{ id: "process", data: o, color: "#A6A6A6" }],
    [o]
  ), lt = V.useMemo(
    () => $g(
      o,
      { mean: R, ucl: Q, lcl: re, onePos: le, oneNeg: de, twoPos: be, twoNeg: ke },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!p
      },
      s ?? null
    ),
    [
      o,
      R,
      Q,
      re,
      le,
      de,
      be,
      ke,
      s,
      u,
      f,
      p
    ]
  ), Qe = V.useMemo(() => {
    const Ce = (je) => {
      const ve = je.filter(
        (Ke) => typeof Ke == "number" && !isNaN(Ke)
      );
      if (!ve.length) return null;
      const Ne = ve[0];
      return ve.every((Ke) => Ke === Ne) ? Ne : null;
    };
    if (fe && fe.length) {
      const je = Ce(fe.map((ve) => ve.target));
      if (je != null) return je;
    }
    return s && s.length ? Ce(s) : null;
  }, [fe, s]), { show: ie, slotPx: Ae, totalReservedPx: z } = Lg(
    lt,
    ne,
    { maxFraction: 0.35 }
  ), te = ie ? z : 0, ge = V.useMemo(() => {
    const Ce = o.map((je) => je.x);
    return hc({
      values: o.map((je) => je.y),
      dates: Ce,
      providedUnit: W || se?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [o, W, se?.measureUnit]), me = W ?? se?.measureUnit ?? ge.unit, xe = V.useMemo(() => me ? { ...se || {}, measureUnit: me } : se, [se, me]), Se = V.useMemo(() => {
    if (!fe) return [];
    const Ce = [];
    for (let je = 1; je < fe.length; je++)
      fe[je].partition.id !== fe[je - 1].partition.id && Ce.push(je);
    return Ce;
  }, [fe]), Re = V.useMemo(
    () => vg({
      show: !!I,
      rowsForUi: fe,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: E,
      runLength: N
    }),
    [
      I,
      fe,
      d?.minimumPoints,
      c,
      E,
      N
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: ue ? `fdp-spc-chart-wrapper ${ue}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ n.jsx(
          yg,
          {
            show: !!I,
            variationNode: Re,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ n.jsx(
          Qp,
          {
            height: ne,
            ariaLabel: q,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ n.jsx(em, { series: Ye, yDomain: lt, yBottomGapPx: te, children: (() => {
              const Ce = {
                data: {
                  series: Ye,
                  engineRows: fe,
                  visualCategories: Y,
                  partitionMarkers: k ? Se : []
                },
                targets: {
                  limits: { mean: R, ucl: Q, lcl: re, sigma: Be, onePos: le, oneNeg: de, twoPos: be, twoNeg: ke },
                  uniformTarget: Qe
                },
                visuals: {
                  showPoints: ye,
                  showZones: ce,
                  highlightOutOfControl: he,
                  gradientSequences: h,
                  sequenceTransition: x,
                  processLineWidth: m,
                  showFocusIndicator: C,
                  enableRules: T,
                  enableNeutralNoJudgement: M,
                  showTrendStartMarkers: y,
                  showFirstFavourableCrossMarkers: S,
                  showTrendBridgeOverlay: j
                },
                a11y: {
                  announceFocus: Le,
                  ariaLabel: q,
                  narrationContext: xe,
                  showSignalsInspector: v,
                  onSignalFocus: b,
                  showTrendGatingExplanation: _
                },
                axis: { zeroBreakSlotGapPx: Ae },
                compute: { effectiveUnit: me, metricImprovement: c }
              };
              return /* @__PURE__ */ n.jsx(Cg, { ...Ce });
            })() })
          }
        ),
        Te && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Te == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          Te
        ] }) : Te }),
        /* @__PURE__ */ n.jsx(
          xg,
          {
            show: !!w,
            warnings: oe,
            formatWarningCategory: r,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function Fg(e, t) {
  const {
    chartType: r = jt.XmR,
    metricImprovement: o,
    minimumPoints: s = ma,
    enableNeutralNoJudgement: a = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map((T) => ({ x: T.x, value: T.value ?? T.y ?? null }));
  let c = null;
  try {
    const T = l.filter(
      (y) => typeof y.value == "number"
    ).length, k = { minimumPoints: s };
    T >= s && (k.chartLevelEligibility = !0), c = gr({ chartType: r, metricImprovement: o, data: l, settings: k });
  } catch {
    c = null;
  }
  const d = c?.rows ?? [];
  let u = d[d.length - 1] ?? null;
  for (let T = d.length - 1; T >= 0; T--) {
    const k = d[T];
    if (k && k.value != null && !k.ghost) {
      u = k;
      break;
    }
  }
  let f = [];
  try {
    f = mr(d, {
      metricImprovement: o,
      enableNeutralNoJudgement: a
    });
  } catch {
    f = [];
  }
  const p = qr(
    u?.variationIcon
  ), h = u?.variationIcon ?? null, x = u?.mean ?? null, m = u ? {
    lower: u?.lowerProcessLimit ?? null,
    upper: u?.upperProcessLimit ?? null
  } : null, g = u ? {
    upperOne: u?.upperOneSigma ?? null,
    upperTwo: u?.upperTwoSigma ?? null,
    lowerOne: u?.lowerOneSigma ?? null,
    lowerTwo: u?.lowerTwoSigma ?? null
  } : null;
  let _, M;
  return i && (_ = ga(f), M = pc(f)), {
    rows: d,
    visuals: f,
    latestState: p,
    lastVariationIcon: h,
    centerLine: x,
    controlLimits: m,
    sigmaBands: g,
    pointSignals: _,
    pointNeutralSpecialCause: M
  };
}
const C1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: cn,
  BaselineSuggestionReason: Xl,
  ChartType: jt,
  DEFAULT_MIN_POINTS: ma,
  Icons: bg,
  ImprovementDirection: Xe,
  PARITY_V26: ic,
  RULE_METADATA: Jl,
  SPCChart: Pg,
  SPCTooltipOverlay: uc,
  SpcEmbeddedIconVariant: xn,
  SpcVisualCategory: it,
  SpcWarningCategory: Vr,
  SpcWarningCode: Zr,
  SpcWarningSeverity: Et,
  VARIATION_COLOR_TOKENS: Tt,
  VariationIcon: Ee,
  buildSpcV26a: gr,
  buildSpcV26aWithVisuals: fa,
  computeSpcPrecomputed: Fg,
  computeSpcVisualCategories: mr,
  extractRuleIds: Mo,
  getVariationColorHex: qm,
  getVariationColorToken: Ql,
  isSpecialCauseIcon: dc,
  mapIconToVariation: qr,
  normaliseSpcSettingsV2: sc,
  ruleGlossary: An,
  variationLabel: Io,
  visualsToNeutralFlags: pc,
  visualsToPointSignals: ga,
  withParityV26: fg
}, Symbol.toStringTag, { value: "Module" }));
function Rg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Bg(e) {
  const {
    values: t,
    x: r,
    chartType: o = jt.XmR,
    metricImprovement: s = Xe.Neither,
    showLimits: a = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = V.useMemo(() => {
    const y = [];
    for (let S = 0; S < t.length; S++)
      y.push({ x: r?.[S], value: t[S] });
    return y;
  }, [t, r]), u = V.useMemo(() => {
    try {
      const y = d.map((b, w) => ({ x: b.x ?? w, value: b.value })), S = 13, j = y.filter((b) => typeof b.value == "number").length, v = { minimumPoints: S };
      return j >= S && (v.chartLevelEligibility = !0), gr({ chartType: o, metricImprovement: s, data: y, settings: v });
    } catch {
      return null;
    }
  }, [d, o, s]), f = V.useMemo(() => {
    const y = u?.rows;
    if (!y || y.length === 0) return null;
    for (let S = y.length - 1; S >= 0; S--) {
      const j = y[S];
      if (j && j.value != null && !j.ghost) return j;
    }
    return y[y.length - 1] ?? null;
  }, [u]), p = V.useMemo(() => {
    const y = u?.rows;
    if (!y || y.length === 0) return null;
    let S = y[y.length - 1];
    for (let j = y.length - 1; j >= 0; j--) {
      const v = y[j];
      if (v && v.value != null && !v.ghost) {
        S = v;
        break;
      }
    }
    return qr(S?.variationIcon);
  }, [u]), h = V.useMemo(() => f?.mean ?? null, [f]), x = V.useMemo(() => {
    if (!f) return null;
    const y = f?.lowerProcessLimit ?? null, S = f?.upperProcessLimit ?? null;
    return y == null && S == null ? null : { lower: y, upper: S };
  }, [f]), m = V.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), g = V.useMemo(() => {
    const y = u?.rows;
    if (!(!y || y.length === 0))
      try {
        return mr(y, {
          metricImprovement: s,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, s]), _ = V.useMemo(() => ga(g), [g?.length]), M = V.useMemo(() => {
    if (!(!g || g.length === 0))
      return g.map((y) => y === it.NoJudgement);
  }, [g?.length]), T = V.useMemo(() => {
    let y = null;
    if (f && f.value != null && !f.ghost) {
      const E = f.variationIcon;
      p === Fe.SpecialCauseNoJudgement ? y = dc(E) ? Fe.SpecialCauseNoJudgement : Fe.CommonCause : y = qr(E) ?? Fe.CommonCause;
    }
    const S = y ?? Fe.CommonCause, j = Do[S].hex, [v, b, w] = Rg(j), $ = To();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${v}, ${b}, ${w}, ${$.start}) 0%, rgba(${v}, ${b}, ${w}, ${$.mid}) 50%, rgba(${v}, ${b}, ${w}, ${$.end}) 100%)`,
      "--fdp-metric-card-accent": j
    };
  }, [f, p]);
  return { sparkProps: V.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: a,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: s,
    centerLine: h,
    controlLimits: x,
    sigmaBands: m,
    pointSignals: _,
    pointNeutralSpecialCause: M,
    visualCategories: g,
    variationState: p ?? void 0
  }), [
    d,
    c,
    a,
    i,
    l,
    s,
    p,
    h,
    x?.lower,
    x?.upper,
    m?.upperTwo,
    m?.lowerOne,
    m?.lowerTwo,
    _?.length,
    M?.length,
    g?.length
  ]), metricCardStyle: T, latestState: p };
}
const N1 = ({
  sparkData: e,
  direction: t = Xe.Neither,
  showMean: r = !1,
  showLimits: o = !0,
  showLimitBand: s = !1,
  showInnerBands: a = !1,
  maxPoints: i,
  autoValue: l = !0,
  autoDelta: c = !0,
  autoMetadata: d = !0,
  defaultUnit: u,
  intervalHint: f,
  startDate: p,
  deltaConfig: h,
  ...x
}) => {
  const m = Bg({
    values: e.map((S) => S.value ?? null),
    metricImprovement: t,
    showLimits: o,
    showLimitBand: s,
    showInnerBands: a,
    showMean: r
  }), g = /* @__PURE__ */ n.jsx(cc, { ...m.sparkProps, maxPoints: i }), _ = V.useMemo(() => hc({
    values: e.map((S) => typeof S.value == "number" ? S.value : null),
    dates: e.map((S) => S.date),
    intervalHint: f,
    startDate: p,
    providedUnit: x.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: h
  }), [e, f, p, x.unit, u, l, c, d, h]), M = l && _.value != null ? _.value : x.value, T = c && _.delta ? _.delta : x.delta, k = _.unit || x.unit, y = d && _.metadata ? _.metadata : x.metadata;
  return /* @__PURE__ */ n.jsx(
    Gm,
    {
      ...x,
      value: M,
      unit: k,
      delta: T,
      metadata: y,
      visual: g,
      style: m.metricCardStyle
    }
  );
};
function Hg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function zg(e = "auto") {
  const [t, r] = nt.useState(
    !1
  );
  return nt.useEffect(() => {
    if (e !== "auto" || typeof window > "u" || !window.matchMedia) return;
    const o = window.matchMedia("(prefers-reduced-motion: reduce)"), s = () => r(o.matches);
    return s(), o.addEventListener?.("change", s), () => o.removeEventListener?.("change", s);
  }, [e]), e === "off" ? !1 : t;
}
function Ei(e, t) {
  return t[Math.floor(e() * t.length)];
}
function sn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Og(e, t) {
  const r = e.seed ?? 1, o = Hg(r), s = Math.max(6, Math.min(48, Math.round(e.density ?? 18))), a = ["circle", "hexagon", "rect"], i = [], l = e.gradients && e.gradients.length > 0 ? e.gradients : [
    "nhs-fdp-gradient-blue",
    "nhs-fdp-gradient-aqua",
    "nhs-fdp-gradient-green"
  ], d = (typeof e.callout.width == "number" ? e.callout.width : void 0) ?? Math.min(520, t * 0.7), u = (t - d) / 2, f = u + d, p = {
    left: u / t * 100,
    right: f / t * 100,
    top: 20,
    bottom: 80
  }, h = (m, g) => !(m > p.left - 6 && m < p.right + 6 && g > p.top - 10 && g < p.bottom + 10);
  let x = 0;
  for (; i.length < s && x < s * 50; ) {
    x++;
    const m = Ei(o, a), g = sn(o() * 1, 0.15, 0.95), _ = 24 + o() * 72, M = o() * 100, T = o() * 100;
    if (!h(M, T)) continue;
    const k = Ei(o, l);
    if (m === "rect") {
      const y = 0.6 + o() * 0.8;
      i.push({
        kind: m,
        width: _ * y,
        height: _,
        x: M,
        y: T,
        depth: g,
        fillToken: k,
        shadow: "soft"
      });
    } else
      i.push({
        kind: m,
        size: _,
        x: M,
        y: T,
        depth: g,
        fillToken: k,
        shadow: "soft"
      });
  }
  return i;
}
const j1 = (e) => {
  const {
    seed: t = 1,
    mode: r = "scroll",
    axis: o = "xy",
    height: s = 520,
    strength: a = 120,
    scrub: i = 0.3,
    scrollStart: l = "top bottom",
    scrollEnd: c = "bottom top",
    debugMarkers: d = !1,
    pin: u = !1,
    pinSpacing: f = !0,
    reducedMotion: p = "auto",
    callout: h,
    className: x,
    style: m
  } = e, g = nt.useRef(null), [_, M] = nt.useState({
    w: 1e3,
    h: 520
  }), T = zg(p), k = e.direction ?? "se", y = nt.useMemo(() => {
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
  nt.useLayoutEffect(() => {
    if (!g.current) return;
    const E = new ResizeObserver((N) => {
      for (const C of N) {
        const D = C.contentRect;
        M({ w: D.width, h: D.height });
      }
    });
    return E.observe(g.current), () => E.disconnect();
  }, []);
  const S = nt.useMemo(() => e.shapes && e.shapes.length ? e.shapes : Og(e, _.w), [t, _.w, _.h]), [j, v] = nt.useState(0), [b, w] = nt.useState(null);
  nt.useEffect(() => {
    if (r !== "scroll" || T) return;
    let E;
    return (async () => {
      if (typeof window > "u") return;
      const N = g.current;
      if (N)
        try {
          const C = await import("./index-C_MjGuuK.js"), D = await import("./ScrollTrigger-7ivQEezo.js"), H = C.default ?? C.gsap ?? C, J = D.ScrollTrigger ?? D.default ?? D;
          H.registerPlugin(J);
          const ee = J.create({
            trigger: N,
            start: l,
            end: c,
            markers: d,
            pin: u,
            pinSpacing: f,
            scrub: i,
            invalidateOnRefresh: !0,
            onUpdate: (B) => v(B.progress)
          });
          w((B) => B === null ? ee.progress ?? 0.5 : B), d && window && (window.__parallaxRefresh = () => {
            try {
              J.refresh();
            } catch {
            }
          }), E = () => {
            try {
              ee.kill();
            } catch {
            }
          };
        } catch {
          const D = () => {
            const H = N.getBoundingClientRect(), J = window.innerHeight || document.documentElement.clientHeight, ee = H.height + J, B = J - H.top, K = sn(B / ee, 0, 1);
            w((A) => A === null ? K : A), v(K);
          };
          D(), window.addEventListener("scroll", D, { passive: !0 }), window.addEventListener("resize", D), E = () => {
            window.removeEventListener("scroll", D), window.removeEventListener("resize", D);
          };
        }
    })(), () => {
      E && E();
    };
  }, [r, T, l, c, d, u, f, i]), nt.useEffect(() => {
    if (r !== "timed" || T) return;
    let E = 0, N = performance.now();
    const C = 8e3, D = (H) => {
      const ee = (H - N) % C / C;
      v(ee), E = requestAnimationFrame(D);
    };
    return E = requestAnimationFrame(D), () => cancelAnimationFrame(E);
  }, [r, T]);
  const $ = (E) => 0.15 + (E ?? 0.5) * 0.6, I = {
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
      className: ["nhs-parallax-scene", x].filter(Boolean).join(" "),
      style: {
        position: "relative",
        height: typeof s == "number" ? `${s}px` : s,
        overflow: "hidden",
        ...m
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
              /* @__PURE__ */ n.jsx("g", { className: "nhs-parallax-connectors", children: S.map((E, N) => {
                const C = E.x, D = E.y, H = (E.width ?? E.size ?? 40) / _.w * 100 * 1, J = (E.height ?? E.size ?? 40) / _.h * 100 * 1, ee = E.kind === "circle" ? [
                  [C, D - J / 2],
                  [C + H / 2, D],
                  [C, D + J / 2],
                  [C - H / 2, D]
                ] : E.kind === "rect" || E.kind === "svg" ? [
                  [C - H / 2, D - J / 2],
                  [C + H / 2, D - J / 2],
                  [C + H / 2, D + J / 2],
                  [C - H / 2, D + J / 2]
                ] : (
                  // hexagon approx points
                  [
                    [C - H / 2, D],
                    [C - H / 4, D - J / 2],
                    [C + H / 4, D - J / 2],
                    [C + H / 2, D],
                    [C + H / 4, D + J / 2],
                    [C - H / 4, D + J / 2]
                  ]
                ), B = $(E.depth), L = (u ? j : j - (b ?? 0.5)) * a * B, G = o === "x" ? L : o === "xy" ? L * y.x : 0, U = o === "y" ? L : o === "xy" ? L * y.y : 0;
                return ee.map((P, Z) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: sn(P[0] + G, 0, 100),
                    y1: sn(P[1] + U, 0, 100),
                    x2: sn(50 + G * 0.2, 0, 100),
                    y2: sn(50 + U * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${N}-${Z}`
                ));
              }) }),
              /* @__PURE__ */ n.jsx("g", { className: "nhs-parallax-shapes", children: S.map((E, N) => {
                const C = $(E.depth), J = (u ? j : j - (b ?? 0.5)) * a * C, ee = o === "x" ? J : o === "xy" ? J * y.x : 0, B = o === "y" ? J : o === "xy" ? J * y.y : 0, K = sn(E.x + ee, 0, 100), A = sn(E.y + B, 0, 100), L = E.rotate ?? 0, G = [
                  "nhs-parallax-shape",
                  E.fillToken,
                  E.shadow && `nhs-parallax-shadow--${E.shadow}`
                ].filter(Boolean).join(" ");
                if (E.kind === "circle") {
                  const X = (E.size ?? 40) / _.w * 100 * 0.5;
                  return /* @__PURE__ */ n.jsx("circle", { cx: K, cy: A, r: X, className: G }, N);
                }
                if (E.kind === "rect") {
                  const X = (E.width ?? 48) / _.w * 100, q = (E.height ?? 36) / _.h * 100;
                  return /* @__PURE__ */ n.jsx(
                    "rect",
                    {
                      x: K - X / 2,
                      y: A - q / 2,
                      width: X,
                      height: q,
                      transform: `rotate(${L} ${K} ${A})`,
                      className: G
                    },
                    N
                  );
                }
                if (E.kind === "svg" && E.src) {
                  const X = (E.width ?? 48) / _.w * 100, q = (E.height ?? 48) / _.h * 100;
                  return /* @__PURE__ */ n.jsx(
                    "image",
                    {
                      href: E.src,
                      x: K - X / 2,
                      y: A - q / 2,
                      width: X,
                      height: q,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${L} ${K} ${A})`,
                      className: G
                    },
                    N
                  );
                }
                const U = (E.size ?? 40) / _.w * 100, P = U * 0.866, Z = [
                  [K - U / 2, A],
                  [K - U / 4, A - P / 2],
                  [K + U / 4, A - P / 2],
                  [K + U / 2, A],
                  [K + U / 4, A + P / 2],
                  [K - U / 4, A + P / 2]
                ].map((X) => X.join(",")).join(" ");
                return /* @__PURE__ */ n.jsx("polygon", { points: Z, className: G }, N);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhs-parallax-callout",
            style: I,
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
function Ug(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function ft(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Wg(e, t, r, o, s, a, i, l, c, d, u, f) {
  const p = Ug(e), h = [], x = [], m = ["rect", "hex", "circle"], g = { x: 50, y: 50 }, _ = o, M = 1200, T = 400, k = 1.2, y = {
    left: g.x - _.w / 2,
    right: g.x + _.w / 2,
    top: g.y - _.h / 2,
    bottom: g.y + _.h / 2
  }, S = !c && !!u && u.r > 0, j = !c && !!f && (f.rx > 0 || f.ry > 0), v = (D, H) => {
    if (!S) return !1;
    const J = D - g.x, ee = H - g.y;
    return J * J + ee * ee <= u.r * u.r;
  }, b = (D, H) => {
    if (!j) return !1;
    const J = Math.max(1e-6, f.rx || 0), ee = Math.max(1e-6, f.ry || 0), B = (D - g.x) / J, K = (H - g.y) / ee;
    return B * B + K * K <= 1;
  }, w = (D, H) => !(D.right < H.left || D.left > H.right || D.bottom < H.top || D.top > H.bottom), $ = (D) => D.left >= 0 && D.top >= 0 && D.right <= 100 && D.bottom <= 100, I = (D, H, J, ee, B, K) => {
    let A = 0, L = 0;
    if (D === "rect") {
      const G = ee ?? 48, U = B ?? 36;
      A = G / M * 100, L = U / T * 100;
    } else if (D === "circle") {
      const G = K ?? 40;
      A = G / M * 100, L = G / T * 100;
    } else {
      const G = K ?? 40;
      A = G / M * 100, L = G * a / T * 100;
    }
    return {
      left: H - A / 2 - k,
      right: H + A / 2 + k,
      top: J - L / 2 - k,
      bottom: J + L / 2 + k
    };
  };
  let E = 0;
  const N = ft(Math.round(t), 4, 48);
  let C = null;
  if (d) {
    const D = Math.ceil(Math.sqrt(N)), H = Math.ceil(N / D);
    C = [];
    for (let J = 0; J < H; J++)
      for (let ee = 0; ee < D && !(C.length >= N); ee++) {
        const B = (ee + 0.5) / D * 100, K = (J + 0.5) / H * 100;
        C.push({ x: B, y: K });
      }
  }
  for (; h.length < N && E < N * 120; ) {
    E++;
    const D = m[Math.floor(p() * m.length)];
    let H, J;
    if (d && C && C.length) {
      const A = h.length % C.length;
      H = C[A].x, J = C[A].y;
    } else {
      const A = ft(s ?? 0, 0, 1), L = () => p() * 100, G = () => {
        const P = Math.max(p(), 1e-6), Z = Math.max(p(), 1e-6), X = Math.sqrt(-2 * Math.log(P)), q = 2 * Math.PI * Z;
        return 50 + X * Math.cos(q) * 12.5;
      }, U = (P, Z, X) => P * (1 - X) + Z * X;
      H = ft(U(L(), G(), A), 0, 100), J = ft(U(L(), G(), A), 0, 100);
    }
    const ee = I(D, H, J, 32, 24, 28);
    if (!$(ee)) continue;
    const B = ft(p(), 0.15, 0.95), K = 0;
    if (D === "rect") {
      const A = 40 + p() * 80, L = 28 + p() * 64, G = I(D, H, J, A, L);
      if (!c && (w(G, y) || v(H, J) || b(H, J)))
        continue;
      if (!i) {
        let P = !1;
        for (let Z = 0; Z < x.length; Z++)
          if (w(G, x[Z])) {
            P = !0;
            break;
          }
        if (P) continue;
      }
      let U;
      if (i) {
        const P = /* @__PURE__ */ new Set();
        for (let X = 0; X < x.length; X++)
          if (w(G, x[X])) {
            const q = h[X].fill;
            q && P.add(q);
          }
        const Z = r.filter((X) => !P.has(X));
        if (Z.length === 0) {
          if (l === "skip") continue;
          U = r[Math.floor(p() * r.length)];
        } else
          U = Z[Math.floor(p() * Z.length)];
      } else
        U = r[Math.floor(p() * r.length)];
      x.push(G), h.push({ kind: D, x: H, y: J, width: A, height: L, rotate: K, depth: B, fill: U, shadow: "soft" });
    } else if (D === "circle") {
      const A = 24 + p() * 80, L = I(D, H, J, void 0, void 0, A);
      if (!c && (w(L, y) || v(H, J) || b(H, J)))
        continue;
      if (!i) {
        let U = !1;
        for (let P = 0; P < x.length; P++)
          if (w(L, x[P])) {
            U = !0;
            break;
          }
        if (U) continue;
      }
      let G;
      if (i) {
        const U = /* @__PURE__ */ new Set();
        for (let Z = 0; Z < x.length; Z++)
          if (w(L, x[Z])) {
            const X = h[Z].fill;
            X && U.add(X);
          }
        const P = r.filter((Z) => !U.has(Z));
        if (P.length === 0) {
          if (l === "skip") continue;
          G = r[Math.floor(p() * r.length)];
        } else
          G = P[Math.floor(p() * P.length)];
      } else
        G = r[Math.floor(p() * r.length)];
      x.push(L), h.push({ kind: D, x: H, y: J, size: A, rotate: K, depth: B, fill: G, shadow: "soft" });
    } else {
      const A = 28 + p() * 72, L = I(D, H, J, void 0, void 0, A);
      if (!c && (w(L, y) || v(H, J) || b(H, J)))
        continue;
      if (!i) {
        let U = !1;
        for (let P = 0; P < x.length; P++)
          if (w(L, x[P])) {
            U = !0;
            break;
          }
        if (U) continue;
      }
      let G;
      if (i) {
        const U = /* @__PURE__ */ new Set();
        for (let Z = 0; Z < x.length; Z++)
          if (w(L, x[Z])) {
            const X = h[Z].fill;
            X && U.add(X);
          }
        const P = r.filter((Z) => !U.has(Z));
        if (P.length === 0) {
          if (l === "skip") continue;
          G = r[Math.floor(p() * r.length)];
        } else
          G = P[Math.floor(p() * P.length)];
      } else
        G = r[Math.floor(p() * r.length)];
      x.push(L), h.push({ kind: D, x: H, y: J, size: A, rotate: K, depth: B, fill: G, shadow: "soft" });
    }
  }
  return h;
}
const M1 = ({
  seed: e = 1,
  width: t = "100%",
  height: r = 400,
  density: o = 16,
  centrality: s = 0,
  gradients: a = [
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
  allowOverlaps: p = !1,
  overlapColorPolicy: h = "recolor",
  feature: x,
  featureWidth: m = "min(640px, 80%)",
  featureLayer: g = "over",
  excludeBoxPct: _ = { w: 50, h: 36 },
  excludeCirclePct: M,
  excludeEllipsePct: T,
  uniformDistribution: k = !1,
  className: y,
  style: S
}) => {
  const j = nt.useRef(null), [v, b] = nt.useState({ w: 1200, h: 400 });
  nt.useLayoutEffect(() => {
    if (!j.current) return;
    const C = new ResizeObserver((D) => {
      for (const H of D) {
        const J = H.contentRect;
        b({ w: J.width, h: J.height });
      }
    });
    return C.observe(j.current), () => C.disconnect();
  }, []);
  const w = nt.useMemo(() => i?.length ? i : Wg(
    e,
    o,
    a,
    _,
    s,
    f,
    p,
    h,
    g === "over" || k,
    k,
    M,
    T
  ), [
    e,
    o,
    a.join(","),
    _.w,
    _.h,
    s,
    f,
    p,
    h,
    g,
    k,
    M?.r,
    T?.rx,
    T?.ry,
    i
  ]), $ = 100, I = 100, E = Math.sqrt(3) / 2, N = (C, D, H) => {
    const J = (H ?? 40) / 2, ee = C / 100 * v.w, B = D / 100 * v.h, K = f / E;
    return [Math.PI, 2 * Math.PI / 3, Math.PI / 3, 0, -Math.PI / 3, -(2 * Math.PI) / 3].map((L) => {
      const G = ee + J * Math.cos(L), U = B + J * Math.sin(L) * K;
      return [ft(G / v.w * 100, 0, 100), ft(U / v.h * 100, 0, 100)];
    });
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: j,
      className: [
        "nhs-pattern-banner",
        g === "under" ? "nhs-pattern-banner--feature-under" : "nhs-pattern-banner--feature-over",
        y
      ].filter(Boolean).join(" "),
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        height: typeof r == "number" ? `${r}px` : r,
        ...S
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ n.jsxs(
          "svg",
          {
            className: "nhs-pattern-banner__svg",
            viewBox: `0 0 ${$} ${I}`,
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
                const C = (A) => A / v.w * 100, D = (A) => A / v.h * 100, H = w.map((A) => {
                  const L = ft(A.x, 0, 100), G = ft(A.y, 0, 100);
                  if (A.kind === "circle") return [[L, G]];
                  if (A.kind === "rect") {
                    const U = C(A.width ?? 48), P = D(A.height ?? 36);
                    return [
                      [L - U / 2, G - P / 2],
                      [L + U / 2, G - P / 2],
                      [L + U / 2, G + P / 2],
                      [L - U / 2, G + P / 2]
                    ];
                  }
                  if (A.kind === "svg") {
                    const U = C(A.width ?? 48), P = D(A.height ?? 48);
                    return [
                      [L - U / 2, G - P / 2],
                      [L + U / 2, G - P / 2],
                      [L + U / 2, G + P / 2],
                      [L - U / 2, G + P / 2]
                    ];
                  }
                  return N(L, G, A.size ?? 40);
                }), J = Math.max(1, Math.floor(l ?? 1)), ee = /* @__PURE__ */ new Set(), B = [];
                for (let A = 0; A < w.length; A++) {
                  const L = [];
                  for (let U = 0; U < w.length; U++) {
                    if (A === U) continue;
                    const P = w[A].x - w[U].x, Z = w[A].y - w[U].y;
                    L.push({ j: U, d2: P * P + Z * Z });
                  }
                  L.sort((U, P) => U.d2 - P.d2);
                  const G = Math.min(J, L.length);
                  for (let U = 0; U < G; U++) {
                    const P = L[U].j, Z = Math.min(A, P), X = Math.max(A, P), q = `${Z}-${X}`;
                    ee.has(q) || (ee.add(q), B.push([Z, X]));
                  }
                }
                const K = [];
                for (const [A, L] of B) {
                  const G = H[A], U = H[L];
                  let P = null;
                  for (const Z of G)
                    for (const X of U) {
                      const q = Z[0] - X[0], ne = Z[1] - X[1], ue = q * q + ne * ne;
                      (!P || ue < P.d2) && (P = { p: Z, q: X, d2: ue });
                    }
                  P && K.push(
                    /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        x1: ft(P.p[0], 0, 100),
                        y1: ft(P.p[1], 0, 100),
                        x2: ft(P.q[0], 0, 100),
                        y2: ft(P.q[1], 0, 100),
                        className: "nhs-pattern-banner-connector",
                        style: {
                          stroke: c,
                          strokeWidth: d,
                          strokeDasharray: u
                        }
                      },
                      `nn-line-${A}-${L}`
                    )
                  );
                }
                return K;
              })() }),
              /* @__PURE__ */ n.jsx("g", { children: w.map((C, D) => {
                const H = ["nhs-pattern-banner-shape", C.fill].filter(Boolean).join(" ");
                if (C.kind === "circle") {
                  const A = (C.size ?? 40) / v.w * 100 * 0.5, L = v.w / v.h, G = A * L;
                  return /* @__PURE__ */ n.jsx(
                    "ellipse",
                    {
                      cx: ft(C.x, 0, 100),
                      cy: ft(C.y, 0, 100),
                      rx: A,
                      ry: G,
                      className: H
                    },
                    D
                  );
                }
                if (C.kind === "rect") {
                  const A = (C.width ?? 48) / v.w * 100, L = (C.height ?? 36) / v.h * 100, G = ft(C.x - A / 2, 0, 100), U = ft(C.y - L / 2, 0, 100);
                  return /* @__PURE__ */ n.jsx(
                    "rect",
                    {
                      x: G,
                      y: U,
                      width: A,
                      height: L,
                      className: H
                    },
                    D
                  );
                }
                if (C.kind === "svg" && C.src) {
                  const A = (C.width ?? 48) / v.w * 100, L = (C.height ?? 48) / v.h * 100, G = ft(C.x - A / 2, 0, 100), U = ft(C.y - L / 2, 0, 100);
                  return /* @__PURE__ */ n.jsx(
                    "image",
                    {
                      href: C.src,
                      x: G,
                      y: U,
                      width: A,
                      height: L,
                      preserveAspectRatio: "xMidYMid meet",
                      className: H
                    },
                    D
                  );
                }
                const J = ft(C.x, 0, 100), ee = ft(C.y, 0, 100), K = N(J, ee, C.size ?? 40).map((A) => A.join(",")).join(" ");
                return /* @__PURE__ */ n.jsx("polygon", { points: K, className: H }, D);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
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
var Nn = /* @__PURE__ */ ((e) => (e.AquaGreen = "aqua-green", e.Purple = "purple", e.Blue = "blue", e.Grey = "grey", e.Azure = "azure", e))(Nn || {});
function Gg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const qn = [
  Nn.AquaGreen,
  Nn.Purple,
  Nn.Blue,
  Nn.Grey,
  Nn.Azure
];
function rs(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Yg(e, t, r = 4) {
  const o = Gg(e), s = [], a = ["rect", "hex", "circle"], i = qn.indexOf(t), l = [
    t,
    qn[(i + 2) % qn.length],
    qn[(i + 3) % qn.length]
  ], c = [], d = 1200, u = 400, f = 1.2, p = (_, M) => !(_.right < M.left || _.left > M.right || _.bottom < M.top || _.top > M.bottom), h = (_) => _.left >= 0 && _.top >= 0 && _.right <= 100 && _.bottom <= 100, x = (_, M, T, k, y, S) => {
    let j = 0, v = 0;
    if (_ === "rect") {
      const b = k ?? 48, w = y ?? 36;
      j = b / d * 100, v = w / u * 100;
    } else if (_ === "circle") {
      const b = S ?? 40;
      j = b / d * 100, v = b / u * 100;
    } else {
      const b = S ?? 40;
      j = b / d * 100, v = b * (Math.sqrt(3) / 2) / u * 100;
    }
    return {
      left: M - j / 2 - f,
      right: M + j / 2 + f,
      top: T - v / 2 - f,
      bottom: T + v / 2 + f
    };
  };
  let m = 0;
  const g = rs(Math.round(r), 4, 12);
  for (; s.length < g && m < g * 120; ) {
    m++;
    const _ = a[Math.floor(o() * a.length)], M = rs(20 + o() * 60, 10, 90), T = rs(20 + o() * 60, 10, 90), k = l[Math.floor(o() * l.length)], y = s.length < 2 ? "soft" : "none";
    if (_ === "rect") {
      const S = 40 + o() * 80, j = 28 + o() * 64, v = x(_, M, T, S, j);
      if (!h(v)) continue;
      let b = !1;
      for (let w = 0; w < c.length; w++)
        if (p(v, c[w])) {
          b = !0;
          break;
        }
      if (b) continue;
      c.push(v), s.push({ kind: _, x: M, y: T, width: S, height: j, gradient: k, rotate: 0, shadow: y });
    } else if (_ === "circle") {
      const S = 24 + o() * 80, j = x(_, M, T, void 0, void 0, S);
      if (!h(j)) continue;
      let v = !1;
      for (let b = 0; b < c.length; b++)
        if (p(j, c[b])) {
          v = !0;
          break;
        }
      if (v) continue;
      c.push(j), s.push({ kind: _, x: M, y: T, size: S, gradient: k, rotate: 0, shadow: y });
    } else {
      const S = 28 + o() * 72, j = o() * 360, v = x(_, M, T, void 0, void 0, S);
      if (!h(v)) continue;
      let b = !1;
      for (let w = 0; w < c.length; w++)
        if (p(v, c[w])) {
          b = !0;
          break;
        }
      if (b) continue;
      c.push(v), s.push({ kind: _, x: M, y: T, size: S, gradient: k, rotate: j, shadow: y });
    }
  }
  return s;
}
const Vg = ({ shapes: e, aspectRatio: t }) => {
  const o = 600 * t, s = 600, a = (i, l, c) => {
    const d = c / 2;
    return [0, 60, 120, 180, 240, 300].map((f) => {
      const p = f * Math.PI / 180, h = i + d * Math.cos(p), x = l + d * Math.sin(p);
      return `${h},${x}`;
    }).join(" ");
  };
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      className: "nhs-product-card__graphic",
      viewBox: `0 0 ${o} ${s}`,
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ n.jsxs("defs", { children: [
          /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: "pc-grad-aqua-green",
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
              id: "pc-grad-purple",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(176, 161, 201)" }),
                /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "rgb(198, 189, 216)" })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: "pc-grad-blue",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(0, 94, 184)" }),
                /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "rgb(65, 131, 196)" })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: "pc-grad-grey",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(76, 98, 114)" }),
                /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "rgb(174, 184, 192)" })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: "pc-grad-azure",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0", stopColor: "rgb(0, 122, 204)" }),
                /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "rgb(103, 192, 229)" })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "filter",
            {
              id: "pc-shadow-soft",
              x: "-50%",
              y: "-50%",
              width: "200%",
              height: "200%",
              children: [
                /* @__PURE__ */ n.jsx("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "2" }),
                /* @__PURE__ */ n.jsx("feOffset", { dx: "0", dy: "2", result: "offsetblur" }),
                /* @__PURE__ */ n.jsx("feComponentTransfer", { children: /* @__PURE__ */ n.jsx("feFuncA", { type: "linear", slope: "0.2" }) }),
                /* @__PURE__ */ n.jsxs("feMerge", { children: [
                  /* @__PURE__ */ n.jsx("feMergeNode", {}),
                  /* @__PURE__ */ n.jsx("feMergeNode", { in: "SourceGraphic" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "filter",
            {
              id: "pc-shadow-strong",
              x: "-50%",
              y: "-50%",
              width: "200%",
              height: "200%",
              children: [
                /* @__PURE__ */ n.jsx("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "4" }),
                /* @__PURE__ */ n.jsx("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                /* @__PURE__ */ n.jsx("feComponentTransfer", { children: /* @__PURE__ */ n.jsx("feFuncA", { type: "linear", slope: "0.3" }) }),
                /* @__PURE__ */ n.jsxs("feMerge", { children: [
                  /* @__PURE__ */ n.jsx("feMergeNode", {}),
                  /* @__PURE__ */ n.jsx("feMergeNode", { in: "SourceGraphic" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("g", { style: { mixBlendMode: "multiply" }, children: (() => {
          if (e.length < 2) return null;
          const i = e.map((u) => {
            const f = u.x / 100 * o, p = u.y / 100 * s;
            if (u.kind === "circle") {
              const h = (u.size ?? 40) / 2;
              return [0, 45, 90, 135, 180, 225, 270, 315].map((m) => {
                const g = m * Math.PI / 180;
                return [f + h * Math.cos(g), p + h * Math.sin(g)];
              });
            } else if (u.kind === "rect") {
              const h = u.width ?? 60, x = u.height ?? 40;
              return [
                [f - h / 2, p - x / 2],
                [f + h / 2, p - x / 2],
                [f + h / 2, p + x / 2],
                [f - h / 2, p + x / 2]
              ];
            } else {
              const x = (u.size ?? 40) / 2;
              return [0, 60, 120, 180, 240, 300].map((g) => {
                const _ = g * Math.PI / 180;
                return [f + x * Math.cos(_), p + x * Math.sin(_)];
              });
            }
          }), l = 1, c = /* @__PURE__ */ new Set(), d = [];
          for (let u = 0; u < e.length; u++) {
            const f = [];
            for (let h = 0; h < e.length; h++) {
              if (u === h) continue;
              const x = e[u].x - e[h].x, m = e[u].y - e[h].y;
              f.push({ j: h, d2: x * x + m * m });
            }
            f.sort((h, x) => h.d2 - x.d2);
            const p = Math.min(l, f.length);
            for (let h = 0; h < p; h++) {
              const x = f[h].j, m = Math.min(u, x), g = Math.max(u, x), _ = `${m}-${g}`;
              c.has(_) || (c.add(_), d.push([m, g]));
            }
          }
          return d.map(([u, f]) => {
            const p = i[u], h = i[f];
            let x = null;
            for (const m of p)
              for (const g of h) {
                const _ = m[0] - g[0], M = m[1] - g[1], T = _ * _ + M * M;
                (!x || T < x.d2) && (x = { p: m, q: g, d2: T });
              }
            return x ? /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: x.p[0],
                y1: x.p[1],
                x2: x.q[0],
                y2: x.q[1],
                stroke: "rgb(158, 171, 181)",
                strokeWidth: "0.5",
                strokeMiterlimit: "0.5"
              },
              `connector-${u}-${f}`
            ) : null;
          });
        })() }),
        e.map((i, l) => {
          const c = `pc-grad-${i.gradient}`, d = i.shadow === "soft" ? "url(#pc-shadow-soft)" : i.shadow === "strong" ? "url(#pc-shadow-strong)" : void 0, u = i.x / 100 * o, f = i.y / 100 * s;
          if (i.kind === "rect") {
            const p = i.width || 60, h = i.height || 40;
            return /* @__PURE__ */ n.jsx(
              "rect",
              {
                className: c,
                x: u - p / 2,
                y: f - h / 2,
                width: p,
                height: h,
                transform: `rotate(${i.rotate || 0} ${u} ${f})`,
                filter: d
              },
              l
            );
          } else if (i.kind === "circle") {
            const p = (i.size || 40) / 2;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                className: c,
                cx: u,
                cy: f,
                r: p,
                filter: d
              },
              l
            );
          } else if (i.kind === "hex") {
            const p = i.size || 40;
            return /* @__PURE__ */ n.jsx(
              "polygon",
              {
                className: c,
                points: a(u, f, p),
                transform: `rotate(${i.rotate || 0} ${u} ${f})`,
                filter: d
              },
              l
            );
          }
          return null;
        })
      ]
    }
  );
}, I1 = ({
  title: e,
  description: t,
  image: r,
  layout: o = "vertical",
  buttons: s = [],
  badge: a,
  theme: i = "blue",
  className: l,
  style: c,
  onClick: d,
  href: u,
  headingLevel: f = 3,
  footer: p,
  elevated: h = !0,
  imageAspectRatio: x = 1.5
}) => {
  const m = nt.useMemo(() => {
    if (r?.type === "graphic") {
      if (r.shapes) return r.shapes;
      const y = r.seed ?? 0, S = r.theme ?? i;
      return Yg(y, S);
    }
    return [];
  }, [r, i]), g = [
    "nhs-product-card",
    `nhs-product-card--${o}`,
    `nhs-product-card--theme-${i}`,
    h && "nhs-product-card--elevated",
    (d || u) && "nhs-product-card--clickable",
    l
  ].filter(Boolean).join(" "), _ = (y) => {
    d ? d(y) : u && !y.defaultPrevented && (window.location.href = u);
  }, M = (y) => {
    (d || u) && (y.key === "Enter" || y.key === " ") && (y.preventDefault(), d ? d(y) : u && (window.location.href = u));
  }, T = () => {
    if (!r) return null;
    const y = [
      "nhs-product-card__image",
      r.type === "graphic" && "nhs-product-card__image--graphic"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: y,
        style: { aspectRatio: x.toString() },
        children: r.type === "photo" && r.src ? /* @__PURE__ */ n.jsx("img", { src: r.src, alt: r.alt || "" }) : r.type === "graphic" ? /* @__PURE__ */ n.jsx(Vg, { shapes: m, aspectRatio: x }) : null
      }
    );
  }, k = () => s.length ? /* @__PURE__ */ n.jsx("div", { className: "nhs-product-card__actions", children: s.map((y, S) => {
    const j = [
      "nhs-product-card__button",
      `nhs-product-card__button--${y.variant || "primary"}`,
      y.disabled && "nhs-product-card__button--disabled"
    ].filter(Boolean).join(" ");
    return y.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: y.href,
        className: j,
        "aria-label": y.ariaLabel,
        onClick: (v) => {
          if (y.disabled) {
            v.preventDefault();
            return;
          }
          y.onClick && (v.stopPropagation(), y.onClick(v));
        },
        children: y.label
      },
      S
    ) : /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: j,
        disabled: y.disabled,
        "aria-label": y.ariaLabel,
        onClick: (v) => {
          y.onClick && (v.stopPropagation(), y.onClick(v));
        },
        children: y.label
      },
      S
    );
  }) }) : null;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: g,
      style: c,
      onClick: d || u ? _ : void 0,
      onKeyDown: d || u ? M : void 0,
      role: d || u ? "button" : void 0,
      tabIndex: d || u ? 0 : void 0,
      children: [
        a && /* @__PURE__ */ n.jsx("div", { className: "nhs-product-card__badge", children: a }),
        T(),
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-product-card__content", children: [
          /* @__PURE__ */ n.jsx(Bt, { level: f, className: "nhs-product-card__title", children: e }),
          /* @__PURE__ */ n.jsx("p", { className: "nhs-product-card__description", children: t }),
          k(),
          p && /* @__PURE__ */ n.jsx("div", { className: "nhs-product-card__footer", children: p })
        ] })
      ]
    }
  );
}, Zg = "150ms", qg = "300ms", Jg = "500ms", Xg = "cubic-bezier(0.4, 0, 1, 1)", Kg = "cubic-bezier(0, 0, 0.2, 1)", Qg = "cubic-bezier(0.4, 0, 0.2, 1)", e0 = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", t0 = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", n0 = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", r0 = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", o0 = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", s0 = "1px", a0 = "2px", i0 = "4px", l0 = "4px", c0 = "4px", d0 = "2px", u0 = "1px", f0 = "0px", h0 = "4px", p0 = "8px", m0 = "12px", mc = "#d8dde0", gc = "#4c6272", xc = "#d8dde0", yc = "#aeb7bd", bc = "#d5281b", vc = "#005eb8", wc = "#ffffff", Sc = "#212b32", _c = "#007f3b", kc = "#330072", Cc = "#7c2855", Nc = "#d5281b", jc = "#ffeb3b", Mc = "#fff9c4", Ic = "#ffb81c", Dc = "#ed8b00", Tc = "#00a499", Lc = "#ae2573", $c = "#4c6272", Ac = "#768692", Ec = "#aeb7bd", Pc = "#d8dde0", Fc = "#f0f4f5", g0 = "#212b32", x0 = "#4c6272", y0 = "#ffffff", b0 = "#212b32", v0 = "#005eb8", w0 = "#7c2855", S0 = "#003087", _0 = "#330072", k0 = "#ffeb3b", C0 = "#212b32", N0 = "#d8dde0", j0 = "#ffffff33", M0 = "#d5281b", I0 = "#4c6272", D0 = "#ffffff", T0 = "#007f3b", L0 = "#ffffff", $0 = "#006530", A0 = "#004021", E0 = "#004021", P0 = "#00000000", F0 = "#ffffff", R0 = "#005eb8", B0 = "#005eb8", H0 = "#d9e5f2", z0 = "#c7daf0", O0 = "#005eb8", U0 = "#ffffff", W0 = "#212b32", G0 = "#d9dde0", Y0 = "#b3bcc2", V0 = "#b3bcc2", Z0 = "#d5281b", q0 = "#aa2016", J0 = "#6a140e", X0 = "#6a140e", K0 = "#005eb8", Q0 = "#004b93", ex = "#002f5c", tx = "#002f5c", nx = "8px", rx = "16px", ox = "12px", sx = "16px", ax = "4px", ix = "40px", lx = "4px", cx = "40px", dx = "12px", ux = "16px", fx = "32px", hx = "16px", px = "20px", mx = "28px", gx = "9px", xx = "2px", yx = "16px", bx = "24px", vx = "8px", wx = "24px", Sx = "16px", _x = "4px", kx = "4px", Cx = "4px", Nx = "8px", jx = "4px", Mx = "16px", Ix = "#007f3b", Dx = "#006530", Tx = "#004021", Lx = "#d8dde0", $x = "#ffffff", Ax = "#768692", Ex = "#00000000", Px = "#ffeb3b", Fx = "#00000000", Rx = "#ffffff", Bx = "#d9e5f2", Hx = "#c7daf0", zx = "#005eb8", Ox = "#005eb8", Rc = "8px", Bc = "16px", Hc = "12px", zc = "16px", Ux = "2px", Wx = "4px", Gx = "4px", Yx = "600", Vx = "#ffffff", Zx = "#d8dde0", qx = "#aeb7bd", Jx = "#f0f4f5", Xx = "#212b32", Kx = "#212b32", Qx = "#005eb8", Oc = "16px", Uc = "32px", Wc = "16px", ey = "1px", ty = "4px", ny = "none", ry = "0 2px 4px rgba(0, 0, 0, 0.1)", oy = "#ffffff", sy = "#ffffff", ay = "#d8dde0", iy = "#ffffff", ly = "#4c6272", cy = "#ffeb3b", dy = "#d5281b", uy = "#aeb7bd", fy = "#212b32", hy = "#4c6272", py = "#768692", my = "#212b32", gy = "#ffffff", xy = "600", yy = "#d5281b", by = "600", vy = "#4c6272", Gc = "4px", Yc = "40px", Vc = "40px", Zc = "12px", wy = "2px", Sy = "4px", _y = "0px", ky = "16px", Cy = "18px", Ny = "24px", jy = "32px", My = "34px", Iy = "32px", Dy = "40px", Ty = "48px", Ly = "5.4ex", $y = "7.2ex", Ay = "9ex", Ey = "10.8ex", Py = "20ex", Fy = "38ex", Ry = "56ex", By = "44px", Hy = "40px", zy = "1020px", Oy = "100%", Uy = "50%", Wy = "33.333%", Gy = "25%", Yy = "20%", Vy = "320px", Zy = "641px", qy = "1025px", Jy = "1280px", Xy = "960px", Ky = "32px", Qy = "16px", eb = "#d5281b", tb = "#d5281b", nb = "#ffffff", rb = "#007f3b", ob = "#007f3b", sb = "#ffffff", ab = "#ffeb3b", ib = "#ffeb3b", lb = "#212b32", cb = "#005eb8", db = "#005eb8", ub = "#ffffff", fb = "#d8dde0", hb = "#aeb7bd", pb = "#768692", mb = "0 4px 0 #004021", gb = "0 4px 0 #005eb8", xb = "0 4px 0 #6a140e", yb = "0 4px 0 #ffeb3b", bb = "none", vb = "0 2px 4px rgba(0, 0, 0, 0.1)", wb = "4px", Sb = "0px", _b = "solid", kb = "0 0 0 3px #ffeb3b", Cb = "0 0 0 3px #ffeb3b", Nb = "none", jb = "0 1px 3px rgba(0, 0, 0, 0.12)", Mb = "0 2px 6px rgba(0, 0, 0, 0.16)", Ib = "0 4px 12px rgba(0, 0, 0, 0.20)", qc = "0", Jc = "4px", Xc = "8px", Kc = "16px", Qc = "24px", ed = "32px", td = "40px", nd = "48px", rd = "56px", od = "64px", ks = "0", Cs = "0", Ns = "4px", js = "4px", Ms = "8px", Is = "8px", Ds = "8px", Ts = "16px", Ls = "16px", $s = "24px", As = "24px", Es = "32px", Ps = "32px", Fs = "40px", Rs = "40px", Bs = "48px", Hs = "48px", zs = "56px", Os = "56px", Us = "64px", Jr = "Frutiger W01", Xr = "Arial, Helvetica, sans-serif", Kr = "sans-serif", Qr = "400", eo = "600", to = "400", no = "12px", ro = "14px", oo = "12pt", so = "14px", ao = "16px", io = "12pt", lo = "16px", co = "19px", uo = "13pt", fo = "19px", ho = "22px", po = "15pt", mo = "22px", go = "26px", xo = "17pt", yo = "27px", bo = "36px", vo = "20pt", wo = "33px", So = "48px", _o = "24pt", Ws = "16px", Gs = "24px", zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Gt = {
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
}, Vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, qt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Zg,
  AnimationDurationNormal: qg,
  AnimationDurationSlow: Jg,
  AnimationEasingBounce: e0,
  AnimationEasingEaseIn: Xg,
  AnimationEasingEaseInOut: Qg,
  AnimationEasingEaseOut: Kg,
  BorderColorCard: xc,
  BorderColorCardHover: yc,
  BorderColorDefault: mc,
  BorderColorError: bc,
  BorderColorForm: gc,
  BorderRadiusLarge: m0,
  BorderRadiusMedium: p0,
  BorderRadiusNone: f0,
  BorderRadiusSmall: h0,
  BorderWidthCardBottom: l0,
  BorderWidthDefault: s0,
  BorderWidthFormElement: a0,
  BorderWidthFormElementError: i0,
  BorderWidthPanel: c0,
  BorderWidthTableCell: u0,
  BorderWidthTableHeader: d0,
  BreakpointDesktop: qy,
  BreakpointLargeDesktop: Jy,
  BreakpointMobile: Vy,
  BreakpointTablet: Zy,
  ButtonBorderRadius: Wx,
  ButtonBorderWidth: Ux,
  ButtonPrimaryBackgroundActive: Tx,
  ButtonPrimaryBackgroundDefault: Ix,
  ButtonPrimaryBackgroundDisabled: Lx,
  ButtonPrimaryBackgroundHover: Dx,
  ButtonPrimaryBorderDefault: Ex,
  ButtonPrimaryBorderFocus: Px,
  ButtonPrimaryTextDefault: $x,
  ButtonPrimaryTextDisabled: Ax,
  ButtonSecondaryBackgroundActive: Hx,
  ButtonSecondaryBackgroundDefault: Fx,
  ButtonSecondaryBackgroundHover: Bx,
  ButtonSecondaryBackgroundSolid: Rx,
  ButtonSecondaryBorderDefault: Ox,
  ButtonSecondaryTextDefault: zx,
  ButtonShadowSize: Gx,
  ButtonSpacingPaddingHorizontalDesktop: zc,
  ButtonSpacingPaddingHorizontalMobile: Bc,
  ButtonSpacingPaddingVerticalDesktop: Hc,
  ButtonSpacingPaddingVerticalMobile: Rc,
  ButtonTypographyWeight: Yx,
  CardBackgroundDefault: Vx,
  CardBorderBottom: Jx,
  CardBorderDefault: Zx,
  CardBorderHover: qx,
  CardBorderWidthBottom: ty,
  CardBorderWidthDefault: ey,
  CardShadowDefault: ny,
  CardShadowHover: ry,
  CardSpacingHeadingMargin: Wc,
  CardSpacingPaddingDesktop: Uc,
  CardSpacingPaddingMobile: Oc,
  CardTextDescription: Kx,
  CardTextHeading: Xx,
  CardTextLink: Qx,
  ColorBorderDefault: N0,
  ColorBorderSecondary: j0,
  ColorButtonLoginActive: ex,
  ColorButtonLoginBackground: K0,
  ColorButtonLoginHover: Q0,
  ColorButtonLoginShadow: tx,
  ColorButtonPrimaryActive: A0,
  ColorButtonPrimaryBackground: T0,
  ColorButtonPrimaryHover: $0,
  ColorButtonPrimaryShadow: E0,
  ColorButtonPrimaryText: L0,
  ColorButtonReverseActive: Y0,
  ColorButtonReverseBackground: U0,
  ColorButtonReverseHover: G0,
  ColorButtonReverseShadow: V0,
  ColorButtonReverseText: W0,
  ColorButtonSecondaryActive: z0,
  ColorButtonSecondaryBackground: P0,
  ColorButtonSecondaryBackgroundSolid: F0,
  ColorButtonSecondaryBorder: R0,
  ColorButtonSecondaryHover: H0,
  ColorButtonSecondaryShadow: O0,
  ColorButtonSecondaryText: B0,
  ColorButtonWarningActive: J0,
  ColorButtonWarningBackground: Z0,
  ColorButtonWarningHover: q0,
  ColorButtonWarningShadow: X0,
  ColorError: M0,
  ColorFocusBackground: k0,
  ColorFocusText: C0,
  ColorFormBackground: D0,
  ColorFormBorder: I0,
  ColorGrey1: $c,
  ColorGrey2: Ac,
  ColorGrey3: Ec,
  ColorGrey4: Pc,
  ColorGrey5: Fc,
  ColorLinkActive: S0,
  ColorLinkDefault: v0,
  ColorLinkHover: w0,
  ColorLinkVisited: _0,
  ColorPrimaryBlack: Sc,
  ColorPrimaryBlue: vc,
  ColorPrimaryDarkPink: Cc,
  ColorPrimaryGreen: _c,
  ColorPrimaryPurple: kc,
  ColorPrimaryRed: Nc,
  ColorPrimaryWhite: wc,
  ColorPrimaryYellow: jc,
  ColorSecondaryAquaGreen: Tc,
  ColorSecondaryOrange: Dc,
  ColorSecondaryPaleYellow: Mc,
  ColorSecondaryPink: Lc,
  ColorSecondaryWarmYellow: Ic,
  ColorTextPrimary: g0,
  ColorTextPrint: b0,
  ColorTextReverse: y0,
  ColorTextSecondary: x0,
  ComponentBlur: kx,
  ComponentBreadcrumbChevronMarginLeft: gx,
  ComponentBreadcrumbChevronMarginRight: xx,
  ComponentBreadcrumbPaddingTopDesktop: bx,
  ComponentBreadcrumbPaddingTopMobile: yx,
  ComponentButtonPaddingDesktopHorizontal: sx,
  ComponentButtonPaddingDesktopVertical: ox,
  ComponentButtonPaddingMobileHorizontal: rx,
  ComponentButtonPaddingMobileVertical: nx,
  ComponentButtonShadowSize: ax,
  ComponentCardHeadingMargin: hx,
  ComponentCardPaddingDesktop: fx,
  ComponentCardPaddingMobile: ux,
  ComponentDetails: Nx,
  ComponentExpander: jx,
  ComponentFormCheckboxLabelPadding: dx,
  ComponentFormCheckboxSize: cx,
  ComponentFormInputMinHeight: ix,
  ComponentFormInputPadding: lx,
  ComponentLink: Cx,
  ComponentPagination: Mx,
  ComponentPanelPaddingDesktop: mx,
  ComponentPanelPaddingMobile: px,
  ComponentSpread: _x,
  ComponentSummaryListCellPaddingHorizontal: wx,
  ComponentSummaryListCellPaddingVertical: vx,
  ComponentSummaryListRowMargin: Sx,
  ElevationHigh: Ib,
  ElevationLow: jb,
  ElevationMedium: Mb,
  ElevationNone: Nb,
  FocusOutlineOffset: Sb,
  FocusOutlineStyle: _b,
  FocusOutlineWidth: wb,
  FocusShadowButton: Cb,
  FocusShadowInput: kb,
  FontFamilyBase: Jr,
  FontFamilyFallback: Xr,
  FontFamilyPrint: Kr,
  FontLineHeightBase: Gs,
  FontSize14Mobile: no,
  FontSize14Print: oo,
  FontSize14Tablet: ro,
  FontSize16Mobile: so,
  FontSize16Print: io,
  FontSize16Tablet: ao,
  FontSize19Mobile: lo,
  FontSize19Print: uo,
  FontSize19Tablet: co,
  FontSize22Mobile: fo,
  FontSize22Print: po,
  FontSize22Tablet: ho,
  FontSize26Mobile: mo,
  FontSize26Print: xo,
  FontSize26Tablet: go,
  FontSize36Mobile: yo,
  FontSize36Print: vo,
  FontSize36Tablet: bo,
  FontSize48Mobile: wo,
  FontSize48Print: _o,
  FontSize48Tablet: So,
  FontSizeBase: Ws,
  FontWeightBold: eo,
  FontWeightLight: to,
  FontWeightNormal: Qr,
  FormBorderRadius: _y,
  FormBorderWidthDefault: wy,
  FormBorderWidthError: Sy,
  FormErrorTextDefault: yy,
  FormErrorTypographyWeight: by,
  FormHintTextDefault: vy,
  FormInputBackgroundDefault: oy,
  FormInputBackgroundDisabled: ay,
  FormInputBackgroundError: iy,
  FormInputBackgroundFocus: sy,
  FormInputBorderDefault: ly,
  FormInputBorderDisabled: uy,
  FormInputBorderError: dy,
  FormInputBorderFocus: cy,
  FormInputTextDefault: fy,
  FormInputTextDisabled: py,
  FormInputTextPlaceholder: hy,
  FormLabelTextDefault: my,
  FormLabelTextRequired: gy,
  FormLabelTypographyWeight: xy,
  FormSpacingCheckboxLabelPadding: Zc,
  FormSpacingCheckboxSize: Vc,
  FormSpacingInputMinHeight: Yc,
  FormSpacingInputPadding: Gc,
  GridGutter: Ky,
  GridGutterHalf: Qy,
  GridPageWidth: Xy,
  HeadingsNhsukHeadingL: Ot,
  HeadingsNhsukHeadingM: Ut,
  HeadingsNhsukHeadingS: Wt,
  HeadingsNhsukHeadingXl: zt,
  HeadingsNhsukHeadingXs: Gt,
  LayoutColumnActions: Yy,
  LayoutColumnFull: Oy,
  LayoutColumnHalf: Uy,
  LayoutColumnQuarter: Gy,
  LayoutColumnThird: Wy,
  LayoutContainerMaxWidth: zy,
  ParagraphsBody: Yt,
  ParagraphsBodyLarge: Vt,
  ParagraphsBodySmall: Zt,
  ParagraphsLedeText: qt,
  ParagraphsLedeTextSmall: Jt,
  ShadowButtonDefault: mb,
  ShadowButtonFocus: yb,
  ShadowButtonSecondary: gb,
  ShadowButtonWarning: xb,
  ShadowCardDefault: bb,
  ShadowCardHover: vb,
  SizeButtonMinHeightDesktop: Hy,
  SizeButtonMinHeightMobile: By,
  SizeFormControlLarge: Ty,
  SizeFormControlMedium: Dy,
  SizeFormControlSmall: Iy,
  SizeFormInputWidth2xl: Fy,
  SizeFormInputWidth3xl: Ry,
  SizeFormInputWidthLg: Ey,
  SizeFormInputWidthMd: Ay,
  SizeFormInputWidthSm: $y,
  SizeFormInputWidthXl: Py,
  SizeFormInputWidthXs: Ly,
  SizeIconExtraLarge: jy,
  SizeIconLarge: Ny,
  SizeIconMedium: Cy,
  SizeIconNhsDefault: My,
  SizeIconSmall: ky,
  Spacing0: qc,
  Spacing1: Jc,
  Spacing2: Xc,
  Spacing3: Kc,
  Spacing4: Qc,
  Spacing5: ed,
  Spacing6: td,
  Spacing7: nd,
  Spacing8: rd,
  Spacing9: od,
  SpacingResponsive0Mobile: ks,
  SpacingResponsive0Tablet: Cs,
  SpacingResponsive1Mobile: Ns,
  SpacingResponsive1Tablet: js,
  SpacingResponsive2Mobile: Ms,
  SpacingResponsive2Tablet: Is,
  SpacingResponsive3Mobile: Ds,
  SpacingResponsive3Tablet: Ts,
  SpacingResponsive4Mobile: Ls,
  SpacingResponsive4Tablet: $s,
  SpacingResponsive5Mobile: As,
  SpacingResponsive5Tablet: Es,
  SpacingResponsive6Mobile: Ps,
  SpacingResponsive6Tablet: Fs,
  SpacingResponsive7Mobile: Rs,
  SpacingResponsive7Tablet: Bs,
  SpacingResponsive8Mobile: Hs,
  SpacingResponsive8Tablet: zs,
  SpacingResponsive9Mobile: Os,
  SpacingResponsive9Tablet: Us,
  StateDisabledBackground: fb,
  StateDisabledBorder: hb,
  StateDisabledText: pb,
  StateErrorBackground: eb,
  StateErrorBorder: tb,
  StateErrorText: nb,
  StateInfoBackground: cb,
  StateInfoBorder: db,
  StateInfoText: ub,
  StateSuccessBackground: rb,
  StateSuccessBorder: ob,
  StateSuccessText: sb,
  StateWarningBackground: ab,
  StateWarningBorder: ib,
  StateWarningText: lb,
  TransitionButtonDefault: t0,
  TransitionButtonShadow: n0,
  TransitionCardHover: o0,
  TransitionInputFocus: r0
}, Symbol.toStringTag, { value: "Module" })), D1 = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), T1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), L1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), $1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), A1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), E1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), P1 = ({
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
), F1 = ({
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
), R1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), B1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), H1 = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), z1 = () => ze(() => Db, []), O1 = () => ze(() => ({
  // Border colors
  BorderColorDefault: mc,
  BorderColorForm: gc,
  BorderColorCard: xc,
  BorderColorCardHover: yc,
  BorderColorError: bc,
  // Primary colors
  ColorPrimaryBlue: vc,
  ColorPrimaryWhite: wc,
  ColorPrimaryBlack: Sc,
  ColorPrimaryGreen: _c,
  ColorPrimaryPurple: kc,
  ColorPrimaryDarkPink: Cc,
  ColorPrimaryRed: Nc,
  ColorPrimaryYellow: jc,
  // Secondary colors
  ColorSecondaryPaleYellow: Mc,
  ColorSecondaryWarmYellow: Ic,
  ColorSecondaryOrange: Dc,
  ColorSecondaryAquaGreen: Tc,
  ColorSecondaryPink: Lc,
  // Grey scale
  ColorGrey1: $c,
  ColorGrey2: Ac,
  ColorGrey3: Ec,
  ColorGrey4: Pc,
  ColorGrey5: Fc
}), []), U1 = () => ze(() => ({
  Spacing0: qc,
  Spacing1: Jc,
  Spacing2: Xc,
  Spacing3: Kc,
  Spacing4: Qc,
  Spacing5: ed,
  Spacing6: td,
  Spacing7: nd,
  Spacing8: rd,
  Spacing9: od
}), []), W1 = () => ze(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: no,
    Size16: so,
    Size19: lo,
    Size22: fo,
    Size26: mo,
    Size36: yo,
    Size48: wo
  },
  Tablet: {
    Size14: ro,
    Size16: ao,
    Size19: co,
    Size22: ho,
    Size26: go,
    Size36: bo,
    Size48: So
  },
  Print: {
    Size14: oo,
    Size16: io,
    Size19: uo,
    Size22: po,
    Size26: xo,
    Size36: vo,
    Size48: _o
  },
  Family: {
    Base: Jr,
    Fallback: Xr,
    Print: Kr
  },
  Weight: {
    Normal: Qr,
    Bold: eo,
    Light: to
  },
  Base: {
    Size: Ws,
    LineHeight: Gs
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Jr,
  FontFamilyFallback: Xr,
  FontFamilyPrint: Kr,
  FontWeightNormal: Qr,
  FontWeightBold: eo,
  FontWeightLight: to,
  FontSize14Mobile: no,
  FontSize14Tablet: ro,
  FontSize14Print: oo,
  FontSize16Mobile: so,
  FontSize16Tablet: ao,
  FontSize16Print: io,
  FontSize19Mobile: lo,
  FontSize19Tablet: co,
  FontSize19Print: uo,
  FontSize22Mobile: fo,
  FontSize22Tablet: ho,
  FontSize22Print: po,
  FontSize26Mobile: mo,
  FontSize26Tablet: go,
  FontSize26Print: xo,
  FontSize36Mobile: yo,
  FontSize36Tablet: bo,
  FontSize36Print: vo,
  FontSize48Mobile: wo,
  FontSize48Tablet: So,
  FontSize48Print: _o,
  FontSizeBase: Ws,
  FontLineHeightBase: Gs
}), []), G1 = () => ze(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ks,
    Size1: Ns,
    Size2: Ms,
    Size3: Ds,
    Size4: Ls,
    Size5: As,
    Size6: Ps,
    Size7: Rs,
    Size8: Hs,
    Size9: Os
  },
  Tablet: {
    Size0: Cs,
    Size1: js,
    Size2: Is,
    Size3: Ts,
    Size4: $s,
    Size5: Es,
    Size6: Fs,
    Size7: Bs,
    Size8: zs,
    Size9: Us
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: ks,
  SpacingResponsive0Tablet: Cs,
  SpacingResponsive1Mobile: Ns,
  SpacingResponsive1Tablet: js,
  SpacingResponsive2Mobile: Ms,
  SpacingResponsive2Tablet: Is,
  SpacingResponsive3Mobile: Ds,
  SpacingResponsive3Tablet: Ts,
  SpacingResponsive4Mobile: Ls,
  SpacingResponsive4Tablet: $s,
  SpacingResponsive5Mobile: As,
  SpacingResponsive5Tablet: Es,
  SpacingResponsive6Mobile: Ps,
  SpacingResponsive6Tablet: Fs,
  SpacingResponsive7Mobile: Rs,
  SpacingResponsive7Tablet: Bs,
  SpacingResponsive8Mobile: Hs,
  SpacingResponsive8Tablet: zs,
  SpacingResponsive9Mobile: Os,
  SpacingResponsive9Tablet: Us
}), []), Y1 = () => ze(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Rc,
  ButtonSpacingPaddingHorizontalMobile: Bc,
  ButtonSpacingPaddingVerticalDesktop: Hc,
  ButtonSpacingPaddingHorizontalDesktop: zc,
  // Card spacing	
  CardSpacingPaddingMobile: Oc,
  CardSpacingPaddingDesktop: Uc,
  CardSpacingHeadingMargin: Wc,
  // Form spacing
  FormSpacingInputPadding: Gc,
  FormSpacingInputMinHeight: Yc,
  FormSpacingCheckboxSize: Vc,
  FormSpacingCheckboxLabelPadding: Zc
}), []), V1 = () => ze(() => ({
  xl: zt,
  l: Ot,
  m: Ut,
  s: Wt,
  xs: Gt
}), []), Z1 = () => ze(() => ({
  body: Yt,
  bodyLarge: Vt,
  bodySmall: Zt,
  ledeText: qt,
  ledeTextSmall: Jt
}), []), q1 = () => ze(() => ({
  headings: {
    xl: zt,
    l: Ot,
    m: Ut,
    s: Wt,
    xs: Gt
  },
  paragraphs: {
    body: Yt,
    bodyLarge: Vt,
    bodySmall: Zt,
    ledeText: qt,
    ledeTextSmall: Jt
  },
  fonts: {
    family: {
      base: Jr,
      fallback: Xr,
      print: Kr
    },
    weight: {
      normal: Qr,
      bold: eo,
      light: to
    },
    sizes: {
      mobile: {
        size14: no,
        size16: so,
        size19: lo,
        size22: fo,
        size26: mo,
        size36: yo,
        size48: wo
      },
      tablet: {
        size14: ro,
        size16: ao,
        size19: co,
        size22: ho,
        size26: go,
        size36: bo,
        size48: So
      },
      print: {
        size14: oo,
        size16: io,
        size19: uo,
        size22: po,
        size26: xo,
        size36: vo,
        size48: _o
      }
    }
  }
}), []);
function J1(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [o, s] = V.useState(t), a = V.useCallback(() => s("three-column"), []), i = V.useCallback(() => s((c) => c === "three-column" ? r : c), [r]), l = V.useCallback(() => s((c) => c === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: o,
    setLayout: s,
    drillIn: a,
    drillOut: i,
    toggle: l,
    isDrilledIn: o === "three-column"
  };
}
const sd = {
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
function X1(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...sd, ...e }, o = [];
  return r?.includes(400) && o.push(`
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
}`), r?.includes(600) && o.push(`
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
}`), o.join(`
`);
}
function K1(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...sd, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${kt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${kt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${kt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${kt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const a = document.createElement("link");
    a.rel = "preload", a.href = s.href, a.as = s.as, a.type = s.type, a.crossOrigin = "anonymous", document.head.appendChild(a);
  });
}
const Q1 = '"Frutiger W01", Arial, Helvetica, sans-serif', ev = "Arial, Helvetica, sans-serif";
async function tv() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  tm as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  Mr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  Ir as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  nm as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  rm as AXIS_ZIGZAG_DEFAULT_CYCLES,
  sm as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  om as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  zi as Account,
  Ab as ActionLink,
  u1 as AdaptiveDataGrid,
  Zg as AnimationDurationFast,
  qg as AnimationDurationNormal,
  Jg as AnimationDurationSlow,
  e0 as AnimationEasingBounce,
  Xg as AnimationEasingEaseIn,
  Qg as AnimationEasingEaseInOut,
  Kg as AnimationEasingEaseOut,
  Cl as AppointmentCard,
  v1 as AreaSeriesPrimitive,
  qh as AriaDataGrid,
  fs as AriaTabsDataGrid,
  u1 as AriaTabsDataGridAdaptive,
  bi as Axis,
  er as BackLink,
  S1 as BandScalesProvider,
  w1 as BarSeriesPrimitive,
  xc as BorderColorCard,
  yc as BorderColorCardHover,
  mc as BorderColorDefault,
  bc as BorderColorError,
  gc as BorderColorForm,
  m0 as BorderRadiusLarge,
  p0 as BorderRadiusMedium,
  f0 as BorderRadiusNone,
  h0 as BorderRadiusSmall,
  l0 as BorderWidthCardBottom,
  s0 as BorderWidthDefault,
  a0 as BorderWidthFormElement,
  i0 as BorderWidthFormElementError,
  c0 as BorderWidthPanel,
  u0 as BorderWidthTableCell,
  d0 as BorderWidthTableHeader,
  qs as BrandKey,
  Vb as BrandThemeProvider,
  yl as Breadcrumb,
  Ld as Breakpoint,
  qy as BreakpointDesktop,
  Jy as BreakpointLargeDesktop,
  Vy as BreakpointMobile,
  Zy as BreakpointTablet,
  wt as Button,
  Wx as ButtonBorderRadius,
  Ux as ButtonBorderWidth,
  Tx as ButtonPrimaryBackgroundActive,
  Ix as ButtonPrimaryBackgroundDefault,
  Lx as ButtonPrimaryBackgroundDisabled,
  Dx as ButtonPrimaryBackgroundHover,
  Ex as ButtonPrimaryBorderDefault,
  Px as ButtonPrimaryBorderFocus,
  $x as ButtonPrimaryTextDefault,
  Ax as ButtonPrimaryTextDisabled,
  Hx as ButtonSecondaryBackgroundActive,
  Fx as ButtonSecondaryBackgroundDefault,
  Bx as ButtonSecondaryBackgroundHover,
  Rx as ButtonSecondaryBackgroundSolid,
  Ox as ButtonSecondaryBorderDefault,
  zx as ButtonSecondaryTextDefault,
  Gx as ButtonShadowSize,
  Ui as ButtonSize,
  zc as ButtonSpacingPaddingHorizontalDesktop,
  Bc as ButtonSpacingPaddingHorizontalMobile,
  Hc as ButtonSpacingPaddingVerticalDesktop,
  Rc as ButtonSpacingPaddingVerticalMobile,
  Yx as ButtonTypographyWeight,
  Oi as ButtonVariant,
  vl as Card,
  Vx as CardBackgroundDefault,
  Jx as CardBorderBottom,
  Zx as CardBorderDefault,
  qx as CardBorderHover,
  ty as CardBorderWidthBottom,
  ey as CardBorderWidthDefault,
  Kb as CardGroup,
  Qb as CardGroupItem,
  ny as CardShadowDefault,
  ry as CardShadowHover,
  Wc as CardSpacingHeadingMargin,
  Uc as CardSpacingPaddingDesktop,
  Oc as CardSpacingPaddingMobile,
  Kx as CardTextDescription,
  Xx as CardTextHeading,
  Qx as CardTextLink,
  e1 as CareCard,
  Eb as CharacterCount,
  k1 as ChartEnhancer,
  _1 as ChartNoScript,
  Qp as ChartRoot,
  bd as Checkbox,
  _d as Checkboxes,
  N0 as ColorBorderDefault,
  j0 as ColorBorderSecondary,
  ex as ColorButtonLoginActive,
  K0 as ColorButtonLoginBackground,
  Q0 as ColorButtonLoginHover,
  tx as ColorButtonLoginShadow,
  A0 as ColorButtonPrimaryActive,
  T0 as ColorButtonPrimaryBackground,
  $0 as ColorButtonPrimaryHover,
  E0 as ColorButtonPrimaryShadow,
  L0 as ColorButtonPrimaryText,
  Y0 as ColorButtonReverseActive,
  U0 as ColorButtonReverseBackground,
  G0 as ColorButtonReverseHover,
  V0 as ColorButtonReverseShadow,
  W0 as ColorButtonReverseText,
  z0 as ColorButtonSecondaryActive,
  P0 as ColorButtonSecondaryBackground,
  F0 as ColorButtonSecondaryBackgroundSolid,
  R0 as ColorButtonSecondaryBorder,
  H0 as ColorButtonSecondaryHover,
  O0 as ColorButtonSecondaryShadow,
  B0 as ColorButtonSecondaryText,
  J0 as ColorButtonWarningActive,
  Z0 as ColorButtonWarningBackground,
  q0 as ColorButtonWarningHover,
  X0 as ColorButtonWarningShadow,
  M0 as ColorError,
  k0 as ColorFocusBackground,
  C0 as ColorFocusText,
  D0 as ColorFormBackground,
  I0 as ColorFormBorder,
  $c as ColorGrey1,
  Ac as ColorGrey2,
  Ec as ColorGrey3,
  Pc as ColorGrey4,
  Fc as ColorGrey5,
  S0 as ColorLinkActive,
  v0 as ColorLinkDefault,
  w0 as ColorLinkHover,
  _0 as ColorLinkVisited,
  Sc as ColorPrimaryBlack,
  vc as ColorPrimaryBlue,
  Cc as ColorPrimaryDarkPink,
  _c as ColorPrimaryGreen,
  kc as ColorPrimaryPurple,
  Nc as ColorPrimaryRed,
  wc as ColorPrimaryWhite,
  jc as ColorPrimaryYellow,
  Tc as ColorSecondaryAquaGreen,
  Dc as ColorSecondaryOrange,
  Mc as ColorSecondaryPaleYellow,
  Lc as ColorSecondaryPink,
  Ic as ColorSecondaryWarmYellow,
  g0 as ColorTextPrimary,
  b0 as ColorTextPrint,
  y0 as ColorTextReverse,
  x0 as ColorTextSecondary,
  tr as Column,
  Ad as ColumnAlign,
  kx as ComponentBlur,
  gx as ComponentBreadcrumbChevronMarginLeft,
  xx as ComponentBreadcrumbChevronMarginRight,
  bx as ComponentBreadcrumbPaddingTopDesktop,
  yx as ComponentBreadcrumbPaddingTopMobile,
  sx as ComponentButtonPaddingDesktopHorizontal,
  ox as ComponentButtonPaddingDesktopVertical,
  rx as ComponentButtonPaddingMobileHorizontal,
  nx as ComponentButtonPaddingMobileVertical,
  ax as ComponentButtonShadowSize,
  hx as ComponentCardHeadingMargin,
  fx as ComponentCardPaddingDesktop,
  ux as ComponentCardPaddingMobile,
  Nx as ComponentDetails,
  jx as ComponentExpander,
  dx as ComponentFormCheckboxLabelPadding,
  cx as ComponentFormCheckboxSize,
  ix as ComponentFormInputMinHeight,
  lx as ComponentFormInputPadding,
  Cx as ComponentLink,
  Mx as ComponentPagination,
  mx as ComponentPanelPaddingDesktop,
  px as ComponentPanelPaddingMobile,
  _x as ComponentSpread,
  wx as ComponentSummaryListCellPaddingHorizontal,
  vx as ComponentSummaryListCellPaddingVertical,
  Sx as ComponentSummaryListRowMargin,
  Vi as Container,
  Xb as ContentsList,
  sd as DEFAULT_FONT_CONFIG,
  l1 as DashboardSummaryGrid,
  Wb as DateInput,
  Eh as Details,
  Ph as DoDontList,
  Ib as ElevationHigh,
  jb as ElevationLow,
  Mb as ElevationMedium,
  Nb as ElevationNone,
  ka as ErrorMessage,
  Ub as ErrorSummary,
  Fh as Expander,
  kt as FRUTIGER_FONT_FILES,
  Zs as Fieldset,
  $d as Float,
  Sb as FocusOutlineOffset,
  _b as FocusOutlineStyle,
  wb as FocusOutlineWidth,
  Cb as FocusShadowButton,
  kb as FocusShadowInput,
  Jr as FontFamilyBase,
  Xr as FontFamilyFallback,
  Kr as FontFamilyPrint,
  Gs as FontLineHeightBase,
  no as FontSize14Mobile,
  oo as FontSize14Print,
  ro as FontSize14Tablet,
  so as FontSize16Mobile,
  io as FontSize16Print,
  ao as FontSize16Tablet,
  lo as FontSize19Mobile,
  uo as FontSize19Print,
  co as FontSize19Tablet,
  fo as FontSize22Mobile,
  po as FontSize22Print,
  ho as FontSize22Tablet,
  mo as FontSize26Mobile,
  xo as FontSize26Print,
  go as FontSize26Tablet,
  yo as FontSize36Mobile,
  vo as FontSize36Print,
  bo as FontSize36Tablet,
  wo as FontSize48Mobile,
  _o as FontSize48Print,
  So as FontSize48Tablet,
  Ws as FontSizeBase,
  eo as FontWeightBold,
  to as FontWeightLight,
  Qr as FontWeightNormal,
  Qi as Footer,
  _y as FormBorderRadius,
  wy as FormBorderWidthDefault,
  Sy as FormBorderWidthError,
  yy as FormErrorTextDefault,
  by as FormErrorTypographyWeight,
  vy as FormHintTextDefault,
  oy as FormInputBackgroundDefault,
  ay as FormInputBackgroundDisabled,
  iy as FormInputBackgroundError,
  sy as FormInputBackgroundFocus,
  ly as FormInputBorderDefault,
  uy as FormInputBorderDisabled,
  dy as FormInputBorderError,
  cy as FormInputBorderFocus,
  fy as FormInputTextDefault,
  py as FormInputTextDisabled,
  hy as FormInputTextPlaceholder,
  my as FormLabelTextDefault,
  gy as FormLabelTextRequired,
  xy as FormLabelTypographyWeight,
  Zc as FormSpacingCheckboxLabelPadding,
  Vc as FormSpacingCheckboxSize,
  Yc as FormSpacingInputMinHeight,
  Gc as FormSpacingInputPadding,
  qb as GanttChart,
  os as Grid,
  Ky as GridGutter,
  Qy as GridGutterHalf,
  am as GridLines,
  Xy as GridPageWidth,
  yn as GridWidth,
  Ki as Header,
  Zb as HeaderSSR,
  eu as HeaderSearch,
  Ki as HeaderStatic,
  Bt as Heading,
  Ot as HeadingsNhsukHeadingL,
  Ut as HeadingsNhsukHeadingM,
  Wt as HeadingsNhsukHeadingS,
  zt as HeadingsNhsukHeadingXl,
  Gt as HeadingsNhsukHeadingXs,
  nu as Hero,
  Gi as Hint,
  s1 as Images,
  Ys as Input,
  t1 as InsetText,
  Vs as Label,
  Yy as LayoutColumnActions,
  Oy as LayoutColumnFull,
  Uy as LayoutColumnHalf,
  Gy as LayoutColumnQuarter,
  Wy as LayoutColumnThird,
  zy as LayoutContainerMaxWidth,
  b1 as Legend,
  em as LineScalesProvider,
  Om as LineSeriesPrimitive,
  Fd as List,
  Js as LogoVariant,
  Zi as MainWrapper,
  Nl as MedicationCard,
  Gm as MetricCard,
  P1 as NHSBodyText,
  F1 as NHSBodyTextLarge,
  R1 as NHSBodyTextSmall,
  T1 as NHSHeading1,
  L1 as NHSHeading2,
  $1 as NHSHeading3,
  A1 as NHSHeading4,
  E1 as NHSHeading5,
  B1 as NHSLedeText,
  H1 as NHSLedeTextSmall,
  Yb as NHSThemeProvider,
  ev as NHS_FALLBACK_FONT_STACK,
  Q1 as NHS_FONT_STACK,
  zp as NavigationSplitView,
  h1 as PageTemplate,
  Jb as Pagination,
  Ih as Panel,
  Yt as ParagraphsBody,
  Vt as ParagraphsBodyLarge,
  Zt as ParagraphsBodySmall,
  qt as ParagraphsLedeText,
  Jt as ParagraphsLedeTextSmall,
  j1 as ParallaxScene,
  kl as PatientCard,
  M1 as PatternBanner,
  I1 as ProductCard,
  Nn as ProductCardThemeEnum,
  Vp as ProductRoadmap,
  Pb as Radios,
  Fb as RadiosServer,
  u1 as ResponsiveDataGrid,
  f1 as ResponsiveDataGridDemo,
  an as Row,
  C1 as SPC,
  Pg as SPCChart,
  N1 as SPCMetricCard,
  Dr as Select,
  Md as SelectOption,
  mb as ShadowButtonDefault,
  yb as ShadowButtonFocus,
  gb as ShadowButtonSecondary,
  xb as ShadowButtonWarning,
  bb as ShadowCardDefault,
  vb as ShadowCardHover,
  Hy as SizeButtonMinHeightDesktop,
  By as SizeButtonMinHeightMobile,
  Ty as SizeFormControlLarge,
  Dy as SizeFormControlMedium,
  Iy as SizeFormControlSmall,
  Fy as SizeFormInputWidth2xl,
  Ry as SizeFormInputWidth3xl,
  Ey as SizeFormInputWidthLg,
  Ay as SizeFormInputWidthMd,
  $y as SizeFormInputWidthSm,
  Py as SizeFormInputWidthXl,
  Ly as SizeFormInputWidthXs,
  jy as SizeIconExtraLarge,
  Ny as SizeIconLarge,
  Cy as SizeIconMedium,
  My as SizeIconNhsDefault,
  ky as SizeIconSmall,
  bl as SkipLink,
  a1 as SlotMatrix,
  c1 as SortStatusControl,
  qc as Spacing0,
  Jc as Spacing1,
  Xc as Spacing2,
  Kc as Spacing3,
  Qc as Spacing4,
  ed as Spacing5,
  td as Spacing6,
  nd as Spacing7,
  rd as Spacing8,
  od as Spacing9,
  ks as SpacingResponsive0Mobile,
  Cs as SpacingResponsive0Tablet,
  Ns as SpacingResponsive1Mobile,
  js as SpacingResponsive1Tablet,
  Ms as SpacingResponsive2Mobile,
  Is as SpacingResponsive2Tablet,
  Ds as SpacingResponsive3Mobile,
  Ts as SpacingResponsive3Tablet,
  Ls as SpacingResponsive4Mobile,
  $s as SpacingResponsive4Tablet,
  As as SpacingResponsive5Mobile,
  Es as SpacingResponsive5Tablet,
  Ps as SpacingResponsive6Mobile,
  Fs as SpacingResponsive6Tablet,
  Rs as SpacingResponsive7Mobile,
  Bs as SpacingResponsive7Tablet,
  Hs as SpacingResponsive8Mobile,
  zs as SpacingResponsive8Tablet,
  Os as SpacingResponsive9Mobile,
  Us as SpacingResponsive9Tablet,
  Rb as SpacingUtilities,
  fb as StateDisabledBackground,
  hb as StateDisabledBorder,
  pb as StateDisabledText,
  eb as StateErrorBackground,
  tb as StateErrorBorder,
  nb as StateErrorText,
  cb as StateInfoBackground,
  db as StateInfoBorder,
  ub as StateInfoText,
  rb as StateSuccessBackground,
  ob as StateSuccessBorder,
  sb as StateSuccessText,
  ab as StateWarningBackground,
  ib as StateWarningBorder,
  lb as StateWarningText,
  i1 as StepByStepNavigation,
  Gh as SummaryCard,
  n1 as SummaryList,
  tn as Table,
  r1 as Tabs,
  at as Tag,
  Rh as TaskList,
  Cd as Textarea,
  y1 as TooltipOverlay,
  zm as TooltipProvider,
  p1 as TransactionalPageTemplate,
  t0 as TransitionButtonDefault,
  n0 as TransitionButtonShadow,
  o0 as TransitionCardHover,
  r0 as TransitionInputFocus,
  x1 as VisibilityProvider,
  jl as VitalsCard,
  Ob as WIDTH_FRACTIONS,
  o1 as WarningCallout,
  Ll as WidthContainer,
  Hb as WidthUtilities,
  g1 as WorkflowSplitView,
  Xd as brandLogos,
  tv as checkFrutigerLoaded,
  ia as createGenericTabsConfig,
  d1 as createTCHTabsConfig,
  X1 as generateFrutigerFontFace,
  Xi as getBrandLogo,
  D1 as getResponsiveStyles,
  Bb as getSpacingClass,
  zb as getWidthClass,
  K1 as preloadFrutigerFonts,
  ap as tchDataConfig,
  Qd as useBrand,
  O1 as useColors,
  Y1 as useComponentSpacing,
  V1 as useNHSHeadings,
  Z1 as useNHSParagraphs,
  Gb as useNHSTheme,
  q1 as useNHSTypographySystem,
  J1 as useNavigationSplitDrill,
  Ap as useNavigationSplitUrlSync,
  la as useNhsFdpBreakpoints,
  G1 as useResponsiveSpacing,
  m1 as useResponsiveValue,
  U1 as useSpacing,
  Bg as useSpc,
  z1 as useTokens,
  W1 as useTypography
};
//# sourceMappingURL=index.esm.js.map
