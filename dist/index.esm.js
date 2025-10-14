import * as V from "react";
import rt, { useState as Ve, useEffect as nt, useCallback as _e, useRef as Ze, createElement as Ti, useMemo as ze, useContext as Li, createContext as $i, forwardRef as Hn, useImperativeHandle as Ai, useReducer as Ei, memo as rd, useId as jr } from "react";
import { createPortal as od } from "react-dom";
function ad(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gr = { exports: {} }, zn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function sd() {
  if (ms) return zn;
  ms = 1;
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
  return zn.Fragment = t, zn.jsx = r, zn.jsxs = r, zn;
}
var On = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function id() {
  return gs || (gs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === v ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case m:
          return "Fragment";
        case I:
          return "Profiler";
        case g:
          return "StrictMode";
        case b:
          return "Suspense";
        case S:
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
          case T:
            return (B.displayName || "Context") + ".Provider";
          case D:
            return (B._context.displayName || "Context") + ".Consumer";
          case C:
            var J = B.render;
            return B = B.displayName, B || (B = J.displayName || J.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case j:
            return J = B.displayName || null, J !== null ? J : e(B.type) || "Memo";
          case w:
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
    function r(B) {
      try {
        t(B);
        var J = !1;
      } catch {
        J = !0;
      }
      if (J) {
        J = console;
        var A = J.error, L = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return A.call(
          J,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(B);
      }
    }
    function o(B) {
      if (B === m) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === w)
        return "<...>";
      try {
        var J = e(B);
        return J ? "<" + J + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var B = $.A;
      return B === null ? null : B.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (M.call(B, "key")) {
        var J = Object.getOwnPropertyDescriptor(B, "key").get;
        if (J && J.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, J) {
      function A() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          J
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: A,
        configurable: !0
      });
    }
    function c() {
      var B = e(this.type);
      return N[B] || (N[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function d(B, J, A, L, G, F, O, X) {
      return A = F.ref, B = {
        $$typeof: p,
        type: B,
        key: J,
        props: F,
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
        value: O
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function u(B, J, A, L, G, F, O, X) {
      var K = J.children;
      if (K !== void 0)
        if (L)
          if (E(K)) {
            for (L = 0; L < K.length; L++)
              f(K[L]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(K);
      if (M.call(J, "key")) {
        K = e(B);
        var q = Object.keys(J).filter(function(ue) {
          return ue !== "key";
        });
        L = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", ee[K + L] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          K,
          q,
          K
        ), ee[K + L] = !0);
      }
      if (K = null, A !== void 0 && (r(A), K = "" + A), i(J) && (r(J.key), K = "" + J.key), "key" in J) {
        A = {};
        for (var ne in J)
          ne !== "key" && (A[ne] = J[ne]);
      } else A = J;
      return K && l(
        A,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), d(
        B,
        K,
        F,
        G,
        a(),
        A,
        O,
        X
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === p && B._store && (B._store.validated = 1);
    }
    var h = rt, p = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), T = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), $ = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, E = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var _, N = {}, H = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), Z = k(o(s)), ee = {};
    On.Fragment = m, On.jsx = function(B, J, A, L, G) {
      var F = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        B,
        J,
        A,
        !1,
        L,
        G,
        F ? Error("react-stack-top-frame") : H,
        F ? k(o(B)) : Z
      );
    }, On.jsxs = function(B, J, A, L, G) {
      var F = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        B,
        J,
        A,
        !0,
        L,
        G,
        F ? Error("react-stack-top-frame") : H,
        F ? k(o(B)) : Z
      );
    };
  })()), On;
}
var xs;
function ld() {
  return xs || (xs = 1, process.env.NODE_ENV === "production" ? gr.exports = sd() : gr.exports = id()), gr.exports;
}
var n = ld(), Po = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var bs;
function cd() {
  return bs || (bs = 1, (function(e) {
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
  })(Po)), Po.exports;
}
var dd = cd();
const De = /* @__PURE__ */ ad(dd), My = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: o,
  ...a
}) => {
  const s = De(
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
}, Pi = ({
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
    ) : null, l = s.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: s.href,
        children: c
      }
    ) : s.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
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
        (s, i) => s && /* @__PURE__ */ n.jsx(
          "li",
          {
            className: De(
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
var Fi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Fi || {}), Ri = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Ri || {});
function ud(e) {
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
const { forwardRef: fd, useCallback: rn, useState: Fo } = V;
function hd(e, t) {
  const {
    children: r,
    variant: o = Fi.Primary,
    size: a = Ri.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Fo(!1), [f, h] = Fo(!1), [p, x] = Fo(!1), m = ud({
    variant: o,
    size: a,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), g = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", I = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...g && { "data-disabled": "true" }
  }, D = rn(
    () => !g && u(!0),
    [g]
  ), T = rn(() => u(!1), []), C = rn(
    () => !g && h(!0),
    [g]
  ), b = rn(() => {
    h(!1), u(!1);
  }, []), S = rn(() => x(!0), []), j = rn(() => x(!1), []), w = rn(
    (K) => {
      K.key === " " && ("href" in c || K.currentTarget.getAttribute("role") === "button") && (K.preventDefault(), K.currentTarget.click());
    },
    [c]
  ), y = rn(
    (K) => {
      if (l) {
        const q = K.currentTarget;
        if (q.getAttribute("data-processing") === "true") {
          K.preventDefault();
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
      id: K,
      style: q,
      title: ne,
      ["aria-label"]: ue,
      ["aria-describedby"]: W,
      ["aria-labelledby"]: ae,
      tabIndex: ce,
      ...be
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
        ...I,
        ...l && { "data-prevent-double-click": "true" },
        ...be,
        onKeyDown: (Me) => {
          he.onKeyDown?.(Me), w(Me);
        },
        onClick: (Me) => {
          he.onClick?.(Me), y(Me);
        },
        onMouseDown: (Me) => {
          he.onMouseDown?.(Me), D();
        },
        onMouseUp: (Me) => {
          he.onMouseUp?.(Me), T();
        },
        onMouseEnter: (Me) => {
          he.onMouseEnter?.(Me), C();
        },
        onMouseLeave: (Me) => {
          he.onMouseLeave?.(Me), b();
        },
        onFocus: (Me) => {
          he.onFocus?.(Me), S();
        },
        onBlur: (Me) => {
          he.onBlur?.(Me), j();
        },
        "aria-disabled": he["aria-disabled"],
        ...he["aria-disabled"] === "true" && { tabIndex: -1 },
        id: K,
        style: q,
        title: ne,
        "aria-label": ue,
        "aria-describedby": W,
        "aria-labelledby": ae,
        tabIndex: ce,
        children: r
      }
    );
  }
  const {
    id: v,
    style: $,
    title: M,
    ["aria-label"]: E,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: _,
    tabIndex: N,
    name: H,
    value: Z,
    form: ee,
    formAction: B,
    formEncType: J,
    formMethod: A,
    formNoValidate: L,
    formTarget: G,
    autoFocus: F,
    ...O
  } = c, X = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: X.type || "button",
      disabled: X.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...I,
      ...l && { "data-prevent-double-click": "true" },
      ...X.disabled && { "aria-disabled": "true" },
      ...O,
      onKeyDown: (K) => {
        X.onKeyDown?.(K), w(K);
      },
      onClick: (K) => {
        X.onClick?.(K), y(K);
      },
      onMouseDown: (K) => {
        X.onMouseDown?.(K), D();
      },
      onMouseUp: (K) => {
        X.onMouseUp?.(K), T();
      },
      onMouseEnter: (K) => {
        X.onMouseEnter?.(K), C();
      },
      onMouseLeave: (K) => {
        X.onMouseLeave?.(K), b();
      },
      onFocus: (K) => {
        X.onFocus?.(K), S();
      },
      onBlur: (K) => {
        X.onBlur?.(K), j();
      },
      id: v,
      style: $,
      title: M,
      "aria-label": E,
      "aria-describedby": k,
      "aria-labelledby": _,
      tabIndex: N,
      name: H,
      value: Z,
      form: ee,
      formAction: B,
      formEncType: J,
      formMethod: A,
      formNoValidate: L,
      formTarget: G,
      autoFocus: F,
      children: r
    }
  );
}
const wt = fd(hd);
wt.displayName = "Button";
const Xn = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: o,
  element: a = "a",
  onClick: s,
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: a === "button" ? /* @__PURE__ */ n.jsx(
    "button",
    {
      className: c,
      onClick: s,
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
function pd(e) {
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
const st = ({
  text: e,
  html: t,
  children: r,
  color: o = "default",
  noBorder: a = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...d
}) => {
  const u = pd({ color: o, noBorder: a, closable: s, disabled: l, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u.classes, ...d, children: [
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
}, md = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: o = !1,
  disabled: a = !1,
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
  const [m, g] = Ve(o), I = r !== void 0, D = I ? r : m;
  nt(() => {
    I || g(o);
  }, [o, I]);
  const T = (w) => {
    const y = w.target.checked;
    I || g(y), u?.(y, w);
  }, C = i ? `${e}-hint` : void 0, b = l ? `${e}-error` : void 0, S = [C, b].filter(Boolean).join(" ") || void 0, j = De(
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
        value: s,
        checked: D,
        disabled: a,
        onChange: T,
        onBlur: f,
        onFocus: h,
        "aria-describedby": S,
        ...p
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ n.jsx("div", { id: C, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: b, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
md.displayName = "Checkbox";
function Bi(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const Ua = ({
  id: e,
  name: t,
  type: r = "text",
  value: o,
  defaultValue: a,
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
  pattern: I,
  step: D,
  min: T,
  max: C,
  showValueLabels: b = !1,
  showCurrentValue: S = !1,
  valueLabels: j,
  onChange: w,
  onBlur: y,
  onFocus: v,
  onKeyDown: $,
  ...M
}) => {
  const [E, k] = Ve(o || a || (r === "range" ? T || "0" : ""));
  nt(() => {
    o !== void 0 && k(o);
  }, [o]);
  const _ = (G) => {
    const F = G.target;
    k(F.value), ("type" in G && G.nativeEvent || G.type === "keydown") && w?.(G);
  }, { classes: N, isRange: H } = Bi({ type: r, hasError: d, width: h, className: f }), Z = o !== void 0, ee = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: x,
    maxLength: m,
    minLength: g,
    pattern: I,
    step: D,
    min: T,
    max: C,
    onChange: _,
    onBlur: y,
    onFocus: v,
    onKeyDown: (G) => {
      if (H && /[0-9]/.test(G.key)) {
        const F = (E?.toString() || "") + G.key;
        G.target.value = F, _(G);
      }
      $?.(G);
    },
    ...M
  }, B = !Z && a !== void 0 ? { defaultValue: a } : {}, J = Z ? { value: o } : {}, A = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: N,
      ...J,
      ...B,
      "data-current-value": E,
      ...ee
    }
  ), L = H ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    b && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: j?.min || T || "0" }),
      A(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: j?.max || C || "100" })
    ] }),
    !b && A(),
    S && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      j?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: E })
    ] }) })
  ] }) : null;
  return H ? L : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: N,
      id: e,
      name: t,
      type: r,
      value: o,
      ...o === void 0 && a !== void 0 ? { defaultValue: a } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: x,
      maxLength: m,
      minLength: g,
      pattern: I,
      step: D,
      min: T,
      max: C,
      onChange: w,
      onBlur: y,
      onFocus: v,
      onKeyDown: $,
      ...M
    }
  );
};
function gd(e) {
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
const Wa = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: o = "m",
  children: a,
  ...s
}) => {
  const i = gd({ size: o, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: a }) : a });
};
function xd(e) {
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
const Ga = ({
  children: e,
  legend: t,
  className: r,
  describedBy: o,
  ...a
}) => {
  const s = xd({
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
function bd(e) {
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
const yd = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: o,
  isPageHeading: a = !1,
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
  const [x, m] = Ve(
    e.filter((w) => w.checked).map((w) => w.value)
  ), g = r || t, I = i ? `${g}-hint` : void 0, D = l ? `${g}-error` : void 0, T = [I, D].filter(Boolean).join(" ") || void 0, C = (w, y) => {
    let v;
    y ? v = [...x, w] : v = x.filter(($) => $ !== w), m(v), u?.(v);
  }, b = () => e.map((w, y) => {
    const v = `${g}-${y + 1}`, $ = `${v}-conditional`, M = x.includes(w.value), E = w.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: t,
          type: "checkbox",
          value: w.value,
          checked: M,
          disabled: E,
          onChange: (k) => C(w.value, k.target.checked),
          "aria-describedby": w.hint ? `${v}-hint` : T,
          ...w.conditional && {
            "aria-controls": $,
            "aria-expanded": M ? "true" : "false"
          },
          ...w.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: v, children: w.text }),
      w.hint && /* @__PURE__ */ n.jsx("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint", children: w.hint }),
      w.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: De("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !M
          }),
          id: $,
          children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            w.conditional.label && /* @__PURE__ */ n.jsx(Wa, { htmlFor: w.conditional.id, children: w.conditional.label }),
            /* @__PURE__ */ n.jsx(Ua, { ...w.conditional })
          ] }) : w.conditional
        }
      )
    ] }, w.value);
  }), { classes: S, formGroupClasses: j } = bd({ small: d, className: c, hasError: !!l });
  return /* @__PURE__ */ n.jsx("div", { className: j, ...h, ...p, children: /* @__PURE__ */ n.jsxs(
    Ga,
    {
      legend: o ? {
        text: o,
        isPageHeading: a,
        size: s
      } : void 0,
      describedBy: T,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: I, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: D, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: S, children: b() })
      ]
    }
  ) });
};
yd.displayName = "Checkboxes";
function vd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const wd = ({
  id: e,
  name: t,
  value: r,
  defaultValue: o,
  placeholder: a,
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
  autoComplete: I,
  spellCheck: D,
  onChange: T,
  onBlur: C,
  onFocus: b,
  onKeyDown: S,
  ...j
}) => {
  const { classes: w, describedBy: y } = vd({ hasError: c, resize: g, className: u, describedBy: d });
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
      "aria-describedby": y,
      rows: f,
      cols: h,
      maxLength: p,
      minLength: x,
      wrap: m,
      autoComplete: I,
      spellCheck: D,
      onChange: T,
      onBlur: C,
      onFocus: b,
      onKeyDown: S,
      ...j
    }
  );
};
function Sd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Hi = ({
  id: e,
  className: t,
  children: r,
  ...o
}) => {
  const a = Sd({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: a.classes, id: a.id, ...o, children: r });
}, Iy = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: o = 75,
  name: a,
  value: s,
  defaultValue: i,
  rows: l,
  className: c,
  countMessage: d,
  onCountChange: u,
  onChange: f,
  ...h
}) => {
  const p = s ?? i ?? "", [x, m] = Ve(p), [g, I] = Ve(0), [D, T] = Ve(!1), [C, b] = Ve(!1), S = _e((M) => r ? M.trim() === "" ? 0 : M.trim().split(/\s+/).length : M.length, [r]);
  nt(() => {
    const M = S(x), E = t || r || 0, k = E - M, _ = Math.floor(E * (o / 100));
    I(k), T(M > E), b(M >= _ || M > E), u && u(M, k);
  }, [x, t, r, o, S, u]);
  const j = (M) => {
    const E = M.target.value;
    m(E), f && f(M);
  }, w = () => {
    const M = t || r || 0, E = r ? "word" : "character", k = r ? "words" : "characters";
    if (!C)
      return `You can enter up to ${M} ${M === 1 ? E : k}`;
    if (D) {
      const _ = Math.abs(g);
      return `You have ${_} ${_ === 1 ? E : k} too many`;
    } else
      return `You have ${g} ${g === 1 ? E : k} remaining`;
  }, y = De(
    "nhsuk-character-count",
    c
  ), v = De(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !C,
      "nhsuk-error-message": D
    },
    d?.classes
  ), $ = De(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": D
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: y,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": o,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          wd,
          {
            id: e,
            name: a,
            value: s !== void 0 ? x : void 0,
            defaultValue: s === void 0 ? i ?? x : void 0,
            rows: l,
            className: $,
            onChange: j,
            "aria-describedby": `${e}-info`,
            "aria-invalid": D || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ n.jsx(
          Hi,
          {
            id: `${e}-info`,
            className: v,
            role: "status",
            "aria-live": "polite",
            children: w()
          }
        )
      ]
    }
  );
};
function _d(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const kd = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: o,
  children: a,
  ...s
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
      ...s,
      children: a
    }
  );
}, Cd = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: o,
  defaultValue: a,
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
  onFocus: I,
  ...D
}) => {
  const { classes: T } = _d({ hasError: l, className: d }), C = () => p ? p.map((S, j) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: S.value,
      disabled: S.disabled,
      "data-initial-selected": S.selected || void 0,
      children: S.text
    },
    `${S.value}-${j}`
  )) : null, b = a === void 0 && o === void 0 && p ? p.find((S) => S.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: T,
      id: e,
      name: t,
      "aria-label": r,
      value: o,
      defaultValue: a !== void 0 ? a : b,
      disabled: s,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: h,
      onChange: m,
      onBlur: g,
      onFocus: I,
      ...D,
      children: x || C()
    }
  );
}, Mr = Cd;
Mr.Option = kd;
function Nd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function zi(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: o,
  handleChange: a,
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
    className: I,
    size: D = "normal",
    inline: T = !1,
    options: C,
    ...b
  } = p, { classes: S, describedBy: j } = Nd({ hasError: m, size: D, inline: T, className: I, describedBy: g });
  return /* @__PURE__ */ n.jsx(Ga, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: S,
      ...b,
      ...o ? { "data-nhs-behaviour": "radios" } : {},
      children: C.map((w, y) => {
        const v = `${x}-${y}`, $ = w.conditional ? `${v}-conditional` : void 0, M = r === w.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: v,
              name: x,
              type: "radio",
              value: w.value,
              disabled: w.disabled,
              ...t === "client" ? {
                checked: M,
                onChange: a,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (E) => {
                  E && c && (c.current[y] = E);
                }
              } : {
                defaultChecked: M,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": j
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: v, children: w.text }),
          w.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: w.hint }),
          w.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: De("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !M
              }),
              id: $,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                w.conditional.label && /* @__PURE__ */ n.jsx(
                  Wa,
                  {
                    htmlFor: w.conditional.id,
                    children: w.conditional.label
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  d,
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
const Dy = ({ value: e, defaultValue: t, onChange: r, onBlur: o, onFocus: a, ...s }) => {
  const [i, l] = Ve(e || t || ""), c = Ze([]), d = Ze(i), u = (p) => {
    const x = p.target.value;
    x !== d.current && (d.current = x, l(x), r?.(p));
  }, f = (p) => {
    a?.(p);
  }, h = _e((p) => {
    const { key: x } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(x)) return;
    p.preventDefault();
    const m = c.current.filter((T) => T && !T.disabled), g = m.indexOf(p.currentTarget);
    if (g === -1) return;
    let I = g;
    ["ArrowDown", "ArrowRight"].includes(x) ? I = (g + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(x) && (I = (g - 1 + m.length) % m.length);
    const D = m[I];
    D && (D.focus(), D.checked || D.click());
  }, []);
  return zi(
    { value: e, defaultValue: t, onChange: r, onBlur: o, onFocus: a, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: o,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: h,
      itemsRef: c,
      InputComponent: Ua
    }
  );
};
function jd(e) {
  const {
    id: t,
    name: r,
    type: o = "text",
    value: a,
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
    minLength: I,
    pattern: D,
    step: T,
    min: C,
    max: b,
    showValueLabels: S = !1,
    showCurrentValue: j = !1,
    valueLabels: w,
    // Strip interactive handlers in server variant
    onChange: y,
    onBlur: v,
    onFocus: $,
    onKeyDown: M,
    ...E
  } = e, { classes: k, isRange: _ } = Bi({
    type: o,
    hasError: u,
    width: p,
    className: h
  }), N = {
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
    minLength: I,
    pattern: D,
    step: T,
    min: C,
    max: b,
    ...E
  };
  if (_) {
    const H = a ?? s ?? (typeof C < "u" ? String(C) : "0"), Z = /* @__PURE__ */ n.jsx(
      "input",
      {
        className: k,
        ...a !== void 0 ? { value: a } : {},
        ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": H,
        ...N
      }
    );
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      S ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: w?.min || C || "0" }),
        Z,
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: w?.max || b || "100" })
      ] }) : Z,
      j && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        w?.current || "Current value:",
        " ",
        /* @__PURE__ */ n.jsx("strong", { children: H })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ n.jsx(
    "input",
    {
      className: k,
      ...a !== void 0 ? { value: a } : {},
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...N
    }
  );
}
const Ty = ({ value: e, defaultValue: t, ...r }) => {
  const o = e || t || "";
  return zi(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: o,
      enableBehaviourAttr: !0,
      InputComponent: jd
    }
  );
};
var bn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(bn || {}), Md = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Md || {}), Id = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Id || {}), Dd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Dd || {});
const Oi = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: o,
  style: a,
  ...s
}) => {
  const i = De(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = o ? { maxWidth: o, ...a || {} } : a;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...s, children: e });
}, sn = ({
  children: e,
  className: t,
  style: r,
  align: o,
  rowGap: a,
  ...s
}) => {
  const i = De(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    o ? `nhsuk-grid-row-align-${o}` : void 0,
    t
  );
  return /* @__PURE__ */ n.jsx("div", { className: i, style: r, ...s, children: e });
}, Kn = ({
  children: e,
  width: t = bn.Full,
  mobileWidth: r,
  tabletWidth: o,
  desktopWidth: a,
  start: s,
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
      [`nhsuk-u-${a}-desktop`]: !!a,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: f, style: c, ...u, children: e });
}, ta = ({
  children: e,
  className: t,
  style: r,
  rowGap: o = 8,
  ...a
}) => {
  const s = rt.Children.toArray(e), i = s[0], l = rt.isValidElement(i) && (i.type === sn || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof o == "number" ? `${o}px` : o;
  let d = e;
  if (l)
    d = s.map((u, f) => {
      if (!rt.isValidElement(u)) return u;
      const h = u, p = h.props || {}, x = typeof p.className == "string" ? p.className : "";
      if (!(h.type === sn || x.includes("nhsuk-grid-row"))) return u;
      const g = p.rowGap, I = g !== void 0 ? typeof g == "number" ? `${g}px` : g : c, D = f === 0 ? void 0 : I;
      if (!D) return u;
      const T = { ...p.style || {}, marginTop: D };
      return rt.cloneElement(h, { style: T });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ n.jsx(sn, { style: u, children: e });
  }
  return /* @__PURE__ */ n.jsx(Oi, { className: t, style: r, ...a, children: d });
}, Td = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: o = !1,
  className: a,
  role: s,
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
    a
  );
  return /* @__PURE__ */ n.jsx(c, { className: d, role: s, ...l, children: e });
}, Ld = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = De("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: o, ...r, children: e });
}, $d = Td;
$d.Item = Ld;
const Ly = ({
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
}, $y = {
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
}, Ay = ({
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
}, Ey = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Py = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ui = ({
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
function Ad(e) {
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
function Ed(e) {
  const t = e.level ?? Ad(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), o = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: o };
}
const Kt = ({ level: e, className: t, text: r, html: o, children: a, size: s, marginBottom: i, ...l }) => {
  const c = Ed({ level: e, size: s, className: t, marginBottom: i }), d = a || (o ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o } }) : r);
  return Ti(c.tag, { className: c.classes, style: c.style, ...l }, d);
};
function Pd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const ys = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: o, ...a }) => {
  const s = Pd({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: s.classes, id: s.id, ...a, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    o
  ] });
}, Fy = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: o,
  errorList: a,
  className: s,
  children: i,
  ...l
}) => {
  const c = Ze(null);
  nt(() => {
    c.current && c.current.focus();
  }, []);
  const d = De(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => o ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o } }) : r, h = (p) => {
    const x = p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
    return p.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: p.href,
        ...p.attributes,
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: a.map((p, x) => /* @__PURE__ */ n.jsx("li", { children: h(p) }, x)) })
        ] })
      ]
    }
  );
}, Ry = ({
  id: e,
  className: t,
  items: r,
  namePrefix: o,
  values: a = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...d
}) => {
  const [u, f] = Ve(() => ({
    day: a.day || "",
    month: a.month || "",
    year: a.year || ""
  })), [h, p] = Ve({}), x = (_) => _ % 4 === 0 && _ % 100 !== 0 || _ % 400 === 0, m = (_, N) => {
    const H = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return _ === 2 && x(N) ? 29 : H[_ - 1];
  }, g = (_, N, H) => {
    if (!_) return;
    if (!/^\d+$/.test(_)) return "Day must be a number";
    const Z = parseInt(_, 10);
    if (Z < 1 || Z > 31) return "Day must be between 1 and 31";
    if (N && H) {
      const ee = parseInt(N, 10), B = parseInt(H, 10);
      if (!isNaN(ee) && !isNaN(B) && ee >= 1 && ee <= 12) {
        const J = m(ee, B);
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
          ][ee - 1]} ${B} only has ${J} days`;
      }
    }
  }, I = (_) => {
    if (!_) return;
    if (!/^\d+$/.test(_)) return "Month must be a number";
    const N = parseInt(_, 10);
    if (N < 1 || N > 12) return "Month must be between 1 and 12";
  }, D = (_) => {
    if (!_) return;
    if (!/^\d+$/.test(_)) return "Year must be a number";
    const N = parseInt(_, 10), H = (/* @__PURE__ */ new Date()).getFullYear();
    if (N < 1900 || N > H + 10)
      return `Year must be between 1900 and ${H + 10}`;
  }, T = (_, N, H) => {
    if (!_ || !N || !H) return;
    const Z = parseInt(_, 10), ee = parseInt(N, 10), B = parseInt(H, 10);
    if (isNaN(Z) || isNaN(ee) || isNaN(B) || ee < 1 || ee > 12 || B < 1900) return;
    const J = m(ee, B);
    Z < 1 || Z > J;
  }, C = _e(
    (_, N) => {
      const H = {
        ...u,
        [_]: N
      };
      f(H), c && c(H);
    },
    [u, c]
  ), b = _e(
    (_) => {
      const N = u[_];
      let H;
      if (_ === "day")
        H = g(
          N,
          u.month,
          u.year
        );
      else if (_ === "month") {
        if (H = I(N), !H && u.day) {
          const Z = g(
            u.day,
            N,
            u.year
          );
          p((ee) => ({
            ...ee,
            day: Z
          }));
        }
      } else if (_ === "year" && (H = D(N), !H && u.day && u.month)) {
        const Z = g(
          u.day,
          u.month,
          N
        );
        p((ee) => ({
          ...ee,
          day: Z
        }));
      }
      if (p((Z) => ({
        ...Z,
        [_]: H
      })), u.day && u.month && u.year) {
        const Z = T(
          _ === "day" ? N : u.day,
          _ === "month" ? N : u.month,
          _ === "year" ? N : u.year
        );
        Z && p((ee) => ({
          ...ee,
          day: Z
        }));
      }
    },
    [u, g, I, D, T]
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
  let w = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", v = l ? `${e}-error` : "";
  y && (w = w ? `${w} ${y}` : y), v && (w = w ? `${w} ${v}` : v);
  const $ = Object.values(h).some((_) => _), M = De("nhsuk-form-group", {
    "nhsuk-form-group--error": l || $
  }), E = De("nhsuk-date-input", t), k = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(Hi, { id: y, className: i.classes, children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text }),
    l && /* @__PURE__ */ n.jsx(ys, { id: v, className: l.classes, children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text }),
    Object.entries(h).map(
      ([_, N]) => N ? /* @__PURE__ */ n.jsxs(
        ys,
        {
          id: `${e}-${_}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            N
          ]
        },
        `${_}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: E,
        id: e,
        "data-testid": "date-input",
        ...d,
        children: j.map((_) => {
          const N = _.id || `${e}-${_.name}`, H = o ? `${o}[${_.name}]` : _.name, Z = _.label || _.name.charAt(0).toUpperCase() + _.name.slice(1), ee = h[_.name], B = u[_.name] || "";
          let J = w;
          if (ee) {
            const A = `${e}-${_.name}-error`;
            J = J ? `${J} ${A}` : A;
          }
          return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
            /* @__PURE__ */ n.jsx(Wa, { htmlFor: N, className: "nhsuk-date-input__label", children: Z }),
            /* @__PURE__ */ n.jsx(
              Ua,
              {
                id: N,
                name: H,
                value: B,
                className: De("nhsuk-date-input__input", _.classes, {
                  "nhsuk-input--error": ee
                }),
                inputMode: _.inputmode,
                autoComplete: _.autocomplete,
                pattern: _.pattern,
                "aria-describedby": J || void 0,
                hasError: !!ee,
                onChange: (A) => C(_.name, A.target.value),
                onBlur: () => b(_.name)
              }
            )
          ] }, _.name);
        })
      }
    )
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: M, children: s ? /* @__PURE__ */ n.jsx(
    Ga,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: w || void 0,
      children: k()
    }
  ) : k() });
}, Wi = {
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
}, Gi = $i(Wi), Fd = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Wi, ...t };
  return /* @__PURE__ */ n.jsx(Gi.Provider, { value: r, children: e });
}, By = () => {
  const e = Li(Gi);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Rd() {
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
function Bd() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Rd(), document.head.appendChild(e);
}
const Hy = ({ children: e, theme: t }) => (nt(() => {
  Bd();
}, []), /* @__PURE__ */ n.jsx(Fd, { theme: t, children: e })), Hd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", zd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Od = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Ud = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Wd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", Gd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Yd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var Yi = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(Yi || {}), Vi = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Vi || {});
const Vd = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Hd,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Wd,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Ud,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: zd,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Od,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: Gd,
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
function Zd(e, t = "full") {
  return Vd[e]?.[t];
}
function qd(e, {
  variant: t,
  isClient: r,
  menuOpen: o = !1,
  showMoreButton: a = !1,
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
    search: I,
    account: D,
    navigation: T,
    containerClasses: C,
    variant: b = "default",
    attributes: S = {},
    maxVisibleItems: j,
    // deprecated (ignored)
    responsiveNavigation: w = !0,
    logoVariant: y = Vi.Full,
    ...v
  } = e, $ = {
    ...x,
    text: x?.text ?? m
  };
  "maxVisibleItems" in v && delete v.maxVisibleItems;
  const M = $.href && !p.href || $.href && $.href === p.href, E = M ? $.href : p.href, k = De(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": b === "organisation" || g,
      "nhsuk-header--white": b === "white"
    },
    h
  ), _ = De(
    "nhsuk-header__container",
    C
  ), N = De(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": T?.white,
      "nhsuk-header__navigation--justified": T?.justified
    },
    T?.className
  ), Z = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), ee = () => /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("title", { children: p.ariaLabel || "NHS" }),
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
    if (p.src)
      return /* @__PURE__ */ n.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: p.src,
          width: "280",
          alt: p.ariaLabel || (Z === "fdp" ? "FDP" : "NHS")
        }
      );
    if (Z === "fdp") {
      const F = Zd(Yi.FDP, y);
      if (F?.src)
        return /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: F.src,
            "data-logo-variant": y,
            width: "280",
            alt: F.ariaLabel || "FDP"
          }
        );
    }
    return ee();
  }, J = () => g ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, A = (F, O) => F ? O ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: O, children: F }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: F }) : null, L = (F) => F.active || F.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: F.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: F.html } }) : F.text }) : F.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: F.html } }) : F.text, G = () => /* @__PURE__ */ n.jsx(
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
      className: k,
      role: "banner",
      "data-module": "nhsuk-header",
      ...S,
      ...v,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: _, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            E ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: E, children: [
              B(),
              J(),
              M && A($.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              B(),
              J(),
              M && A($.text)
            ] }),
            $.text && !M && A($.text, $.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ n.jsx(
            Pi,
            {
              ...D,
              variant: b === "white" ? "white" : "default"
            }
          )
        ] }),
        T && T.items && T.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: N,
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
                  C
                ),
                ref: c,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      (T?.items || []).map((F, O) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: De(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": F.active || F.current,
                              "nhsuk-header__navigation-item--hidden": a && s !== void 0 && O >= (s ?? 0)
                            },
                            F.className
                          ),
                          ...F.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: F.href,
                              ...F.active || F.current ? { "aria-current": F.current ? "page" : "true" } : {},
                              children: L(F)
                            }
                          )
                        },
                        O
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
                            G()
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
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: T.items.slice(s ?? 0).map((F, O) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: De("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": F.active || F.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: F.href,
                    ...F.active || F.current ? { "aria-current": F.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: L(F)
                  }
                )
              },
              `overflow-${(s ?? 0) + O}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const na = $i(void 0);
function zy({ brand: e = "nhs", scope: t = "document", children: r }) {
  const [o, a] = Ve(e);
  nt(() => {
    a(e);
  }, [e]), nt(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", o), () => {
      };
  }, [o, t]);
  const s = ze(() => ({ brand: o, setBrand: a }), [o]);
  return t === "local" ? /* @__PURE__ */ n.jsx(na.Provider, { value: s, children: /* @__PURE__ */ n.jsx("div", { "data-brand": o, children: r }) }) : /* @__PURE__ */ n.jsx(na.Provider, { value: s, children: r });
}
function Jd() {
  const e = Li(na);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Xd = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: o = "q",
  value: a,
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
  preventDefaultSubmit: I = !1,
  debounceMs: D = 300,
  minQueryLength: T = 1
}) => {
  const [C, b] = Ve(""), [S, j] = Ve(!1), w = Ze(void 0), y = Ze(null), v = Ze(null), $ = e === "controlled" && a !== void 0, M = $ ? a : C, E = _e(
    (L) => {
      w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        u.onChange && L.length >= T && u.onChange(L);
      }, D);
    },
    [u.onChange, D, T]
  ), k = _e(
    (L) => {
      const G = L.target.value;
      $ || b(G), e !== "form" && E(G);
    },
    [$, e, E]
  ), _ = _e(
    (L) => {
      const G = M.trim(), F = {
        query: G,
        timestamp: Date.now(),
        formData: new FormData(L.currentTarget)
      };
      e === "controlled" || e === "hybrid" && I ? (L.preventDefault(), u.onSearch && G.length >= T && u.onSearch(F)) : e === "hybrid" && u.onSearch && G.length >= T && u.onSearch(F);
    },
    [
      e,
      M,
      u.onSearch,
      I,
      T
    ]
  ), N = _e(() => {
    j(!0), u.onFocus?.();
  }, [u.onFocus]), H = _e(() => {
    j(!1), u.onBlur?.();
  }, [u.onBlur]), Z = _e(() => {
    $ || b(""), u.onClear?.(), v.current?.focus();
  }, [$, u.onClear]);
  nt(() => () => {
    w.current && clearTimeout(w.current);
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
  ), J = () => !M || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Z,
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
  ), A = () => !h || !p.length || !S ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((L) => /* @__PURE__ */ n.jsx(
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
        "nhsuk-header__search--has-results": h && p.length > 0
      }),
      children: [
        /* @__PURE__ */ n.jsxs(
          "form",
          {
            ref: y,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? r : void 0,
            role: "search",
            onSubmit: _,
            ...x,
            children: [
              /* @__PURE__ */ n.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ n.jsx(
                  "input",
                  {
                    ref: v,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? o : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: M,
                    onChange: k,
                    onFocus: N,
                    onBlur: H,
                    disabled: d || f,
                    ...h && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...m
                  }
                ),
                J()
              ] }),
              /* @__PURE__ */ n.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && M.length < T,
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
}, Zi = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: o,
  search: a,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, h] = Ve(!1), [p, x] = Ve(!1), [m, g] = Ve(i?.items?.length || 0), [I, D] = Ve(!1), [T, C] = Ve(!1), b = Ze(null), S = Ze(null), j = Ze(!1);
  nt(() => {
    typeof window > "u" || C(!0);
  }, []), nt(() => {
    if (typeof document > "u") return;
    const M = (E) => {
      E.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [f]);
  const w = Ze(null), y = _e(() => {
    if (!T || !i?.items || i.items.length === 0 || j.current) return;
    const M = b.current, E = S.current;
    if (!M || !E) return;
    j.current = !0, M.classList.add("nhsuk-header__navigation-container--measuring");
    const k = M.clientWidth, _ = Array.from(E.children);
    if (!_.length) {
      M.classList.remove("nhsuk-header__navigation-container--measuring"), j.current = !1;
      return;
    }
    if (w.current == null) {
      const F = document.createElement("button");
      F.type = "button", F.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", F.style.position = "absolute", F.style.visibility = "hidden", F.style.pointerEvents = "none", F.innerHTML = "<span>More</span>", M.appendChild(F), w.current = F.getBoundingClientRect().width || 104, M.removeChild(F);
    }
    const N = w.current + 16;
    let H = 0, Z = 0;
    const ee = window.getComputedStyle(M), B = parseFloat(ee.paddingLeft) || 0, J = parseFloat(ee.paddingRight) || 0;
    let A = B + J;
    for (const F of _) {
      const O = F.getBoundingClientRect().width;
      if (H + O + N + A > k) break;
      H += O, Z += 1;
    }
    const L = Z < i.items.length, G = L ? Z : i.items.length;
    x((F) => F === L ? F : L), g((F) => F === G ? F : G), M.classList.remove("nhsuk-header__navigation-container--measuring"), j.current = !1;
  }, [T, i?.items]);
  nt(() => {
    if (!T) return;
    const M = b.current;
    if (!M) return;
    let E = null;
    const k = () => {
      E == null && (E = window.requestAnimationFrame(() => {
        E = null, y();
      }));
    };
    y();
    const _ = new ResizeObserver(() => k());
    return _.observe(M), S.current && _.observe(S.current), () => {
      E != null && window.cancelAnimationFrame(E), _.disconnect();
    };
  }, [T, y]), nt(() => {
    T && y();
  }, [i?.items?.length, T, y]);
  const v = (M) => {
    M && (M.preventDefault(), M.stopPropagation());
    const E = !f;
    h(E), D(E);
  }, $ = (() => {
    try {
      return Jd();
    } catch {
      return;
    }
  })();
  return qd(
    {
      className: e,
      logo: t,
      service: r,
      organisation: o,
      search: a,
      account: s,
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
      showMoreButton: p,
      visibleItems: m,
      dropdownVisible: I,
      toggleMenu: v,
      navContainerRef: b,
      navListRef: S,
      // Provide interactive search node for client build only
      searchNode: a ? /* @__PURE__ */ n.jsx(Xd, { ...a }) : null,
      brand: $?.brand
    }
  );
};
function Kd(e, { variant: t, isClient: r }) {
  const {
    className: o,
    logo: a = {},
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
    ...m
  } = e;
  "maxVisibleItems" in m && delete m.maxVisibleItems;
  const g = {
    ...s,
    text: s?.text ?? i
  }, I = g.href && !a.href || g.href && g.href === a.href, D = I ? g.href : a.href, T = De(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    o
  ), C = De("nhsuk-header__container", u), b = De(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), S = () => /* @__PURE__ */ n.jsxs(
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
  ), j = () => a.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: a.src,
      width: "280",
      alt: a.ariaLabel || "NHS"
    }
  ) : S(), w = () => l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, y = (k, _) => k ? _ ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: _, children: k }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, v = (k) => k.active || k.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text }) : k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text, $ = d?.items && !x, M = $ ? [] : d?.items, E = $ ? d.items : [];
  return /* @__PURE__ */ n.jsxs("header", { className: T, role: "banner", "data-module": "nhsuk-header", ...h, ...m, children: [
    /* @__PURE__ */ n.jsxs("div", { className: C, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
        D ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: D, children: [
          j(),
          w(),
          I && y(g.text)
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          j(),
          w(),
          I && y(g.text)
        ] }),
        g.text && !I && y(g.text, g.href)
      ] }),
      /* @__PURE__ */ n.jsx(Pi, { ...c, variant: f === "white" ? "white" : "default" })
    ] }),
    d && d.items && d.items.length > 0 && /* @__PURE__ */ n.jsx("nav", { className: b, "aria-label": d.ariaLabel || "Menu", children: /* @__PURE__ */ n.jsx(
      "div",
      {
        className: De(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !r
          },
          u
        ),
        children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-list", children: (M || []).map((k, _) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: De("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": k.active || k.current
            }, k.className),
            ...k.attributes || {},
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: k.href,
                ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {},
                children: v(k)
              }
            )
          },
          _
        )) })
      }
    ) }),
    $ && E.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: E.map((k, _) => /* @__PURE__ */ n.jsx(
      "li",
      {
        className: De("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": k.active || k.current
        }),
        children: /* @__PURE__ */ n.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: k.href,
            ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {},
            children: v(k)
          }
        )
      },
      `overflow-server-${_}`
    )) }) })
  ] });
}
const Oy = (e) => Kd(e, {
  variant: "server",
  isClient: !1
}), Qd = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: o,
  html: a,
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
    r,
    !c && !o && !a ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = c || e || o || a, x = () => {
    if (!e) return null;
    const m = { className: h };
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
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          x(),
          c || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: o }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && p && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          x(),
          c || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: o }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Qd.displayName = "Hero";
const qi = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: o,
  metaLinks: a,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const f = (p, x = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: De("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": x
      }),
      children: /* @__PURE__ */ n.jsx(
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
  ), h = !!(r || o);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: De("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: De("nhsuk-footer", e), style: d, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((p) => f(p)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((p) => f(p)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: o.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: a.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (r || []).map((p) => f(p, !0)),
              (o || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    h && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function _r(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function eu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ya(e) {
  let t, r, o;
  e.length !== 2 ? (t = _r, r = (l, c) => _r(e(l), c), o = (l, c) => e(l) - c) : (t = e === _r || e === eu ? e : tu, r = e, o = e);
  function a(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        r(l[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function s(l, c, d = 0, u = l.length) {
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
    const f = a(l, c, d, u - 1);
    return f > d && o(l[f - 1], c) > -o(l[f], c) ? f - 1 : f;
  }
  return { left: a, center: i, right: s };
}
function tu() {
  return 0;
}
function nu(e) {
  return e === null ? NaN : +e;
}
const ru = Ya(_r), ou = ru.right;
Ya(nu).center;
function Ji(e, t) {
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
class vs extends Map {
  constructor(t, r = iu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [o, a] of t) this.set(o, a);
  }
  get(t) {
    return super.get(ws(this, t));
  }
  has(t) {
    return super.has(ws(this, t));
  }
  set(t, r) {
    return super.set(au(this, t), r);
  }
  delete(t) {
    return super.delete(su(this, t));
  }
}
function ws({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) ? e.get(o) : r;
}
function au({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) ? e.get(o) : (e.set(o, r), r);
}
function su({ _intern: e, _key: t }, r) {
  const o = t(r);
  return e.has(o) && (r = e.get(o), e.delete(o)), r;
}
function iu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const lu = Math.sqrt(50), cu = Math.sqrt(10), du = Math.sqrt(2);
function Ir(e, t, r) {
  const o = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(o)), s = o / Math.pow(10, a), i = s >= lu ? 10 : s >= cu ? 5 : s >= du ? 2 : 1;
  let l, c, d;
  return a < 0 ? (d = Math.pow(10, -a) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, a) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= r && r < 2 ? Ir(e, t, r * 2) : [l, c, d];
}
function uu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const o = t < e, [a, s, i] = o ? Ir(t, e, r) : Ir(e, t, r);
  if (!(s >= a)) return [];
  const l = s - a + 1, c = new Array(l);
  if (o)
    if (i < 0) for (let d = 0; d < l; ++d) c[d] = (s - d) / -i;
    else for (let d = 0; d < l; ++d) c[d] = (s - d) * i;
  else if (i < 0) for (let d = 0; d < l; ++d) c[d] = (a + d) / -i;
  else for (let d = 0; d < l; ++d) c[d] = (a + d) * i;
  return c;
}
function ra(e, t, r) {
  return t = +t, e = +e, r = +r, Ir(e, t, r)[2];
}
function oa(e, t, r) {
  t = +t, e = +e, r = +r;
  const o = t < e, a = o ? ra(t, e, r) : ra(e, t, r);
  return (o ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function fu(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var o = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, s = new Array(a); ++o < a; )
    s[o] = e + o * r;
  return s;
}
function So(e, t) {
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
const Ss = Symbol("implicit");
function Xi() {
  var e = new vs(), t = [], r = [], o = Ss;
  function a(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (o !== Ss) return o;
      e.set(s, i = t.push(s) - 1);
    }
    return r[i % r.length];
  }
  return a.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new vs();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return a;
  }, a.range = function(s) {
    return arguments.length ? (r = Array.from(s), a) : r.slice();
  }, a.unknown = function(s) {
    return arguments.length ? (o = s, a) : o;
  }, a.copy = function() {
    return Xi(t, r).unknown(o);
  }, So.apply(a, arguments), a;
}
function Ki() {
  var e = Xi().unknown(void 0), t = e.domain, r = e.range, o = 0, a = 1, s, i, l = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = a < o, x = p ? a : o, m = p ? o : a;
    s = (m - x) / Math.max(1, h - c + d * 2), l && (s = Math.floor(s)), x += (m - x - s * (h - c)) * u, i = s * (1 - c), l && (x = Math.round(x), i = Math.round(i));
    var g = fu(h).map(function(I) {
      return x + s * I;
    });
    return r(p ? g.reverse() : g);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([o, a] = h, o = +o, a = +a, f()) : [o, a];
  }, e.rangeRound = function(h) {
    return [o, a] = h, o = +o, a = +a, l = !0, f();
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
    return Ki(t(), [o, a]).round(l).paddingInner(c).paddingOuter(d).align(u);
  }, So.apply(f(), arguments);
}
function Va(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Qi(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function lr() {
}
var Qn = 0.7, Dr = 1 / Qn, Dn = "\\s*([+-]?\\d+)\\s*", er = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hu = /^#([0-9a-f]{3,8})$/, pu = new RegExp(`^rgb\\(${Dn},${Dn},${Dn}\\)$`), mu = new RegExp(`^rgb\\(${Ft},${Ft},${Ft}\\)$`), gu = new RegExp(`^rgba\\(${Dn},${Dn},${Dn},${er}\\)$`), xu = new RegExp(`^rgba\\(${Ft},${Ft},${Ft},${er}\\)$`), bu = new RegExp(`^hsl\\(${er},${Ft},${Ft}\\)$`), yu = new RegExp(`^hsla\\(${er},${Ft},${Ft},${er}\\)$`), _s = {
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
Va(lr, tr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ks,
  // Deprecated! Use color.formatHex.
  formatHex: ks,
  formatHex8: vu,
  formatHsl: wu,
  formatRgb: Cs,
  toString: Cs
});
function ks() {
  return this.rgb().formatHex();
}
function vu() {
  return this.rgb().formatHex8();
}
function wu() {
  return el(this).formatHsl();
}
function Cs() {
  return this.rgb().formatRgb();
}
function tr(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = hu.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ns(t) : r === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? xr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? xr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = pu.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = mu.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = gu.exec(e)) ? xr(t[1], t[2], t[3], t[4]) : (t = xu.exec(e)) ? xr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = bu.exec(e)) ? Is(t[1], t[2] / 100, t[3] / 100, 1) : (t = yu.exec(e)) ? Is(t[1], t[2] / 100, t[3] / 100, t[4]) : _s.hasOwnProperty(e) ? Ns(_s[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function Ns(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function xr(e, t, r, o) {
  return o <= 0 && (e = t = r = NaN), new Nt(e, t, r, o);
}
function Su(e) {
  return e instanceof lr || (e = tr(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function aa(e, t, r, o) {
  return arguments.length === 1 ? Su(e) : new Nt(e, t, r, o ?? 1);
}
function Nt(e, t, r, o) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +o;
}
Va(Nt, aa, Qi(lr, {
  brighter(e) {
    return e = e == null ? Dr : Math.pow(Dr, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qn : Math.pow(Qn, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(pn(this.r), pn(this.g), pn(this.b), Tr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: js,
  // Deprecated! Use color.formatHex.
  formatHex: js,
  formatHex8: _u,
  formatRgb: Ms,
  toString: Ms
}));
function js() {
  return `#${hn(this.r)}${hn(this.g)}${hn(this.b)}`;
}
function _u() {
  return `#${hn(this.r)}${hn(this.g)}${hn(this.b)}${hn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ms() {
  const e = Tr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${pn(this.r)}, ${pn(this.g)}, ${pn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Tr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function pn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function hn(e) {
  return e = pn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Is(e, t, r, o) {
  return o <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, r, o);
}
function el(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof lr || (e = tr(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, o = e.b / 255, a = Math.min(t, r, o), s = Math.max(t, r, o), i = NaN, l = s - a, c = (s + a) / 2;
  return l ? (t === s ? i = (r - o) / l + (r < o) * 6 : r === s ? i = (o - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + a : 2 - s - a, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Dt(i, l, c, e.opacity);
}
function ku(e, t, r, o) {
  return arguments.length === 1 ? el(e) : new Dt(e, t, r, o ?? 1);
}
function Dt(e, t, r, o) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +o;
}
Va(Dt, ku, Qi(lr, {
  brighter(e) {
    return e = e == null ? Dr : Math.pow(Dr, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qn : Math.pow(Qn, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - o;
    return new Nt(
      Ro(e >= 240 ? e - 240 : e + 120, a, o),
      Ro(e, a, o),
      Ro(e < 120 ? e + 240 : e - 120, a, o),
      this.opacity
    );
  },
  clamp() {
    return new Dt(Ds(this.h), br(this.s), br(this.l), Tr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Tr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ds(this.h)}, ${br(this.s) * 100}%, ${br(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ds(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function br(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ro(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Za = (e) => () => e;
function Cu(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Nu(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(o) {
    return Math.pow(e + o * t, r);
  };
}
function ju(e) {
  return (e = +e) == 1 ? tl : function(t, r) {
    return r - t ? Nu(t, r, e) : Za(isNaN(t) ? r : t);
  };
}
function tl(e, t) {
  var r = t - e;
  return r ? Cu(e, r) : Za(isNaN(e) ? t : e);
}
const Ts = (function e(t) {
  var r = ju(t);
  function o(a, s) {
    var i = r((a = aa(a)).r, (s = aa(s)).r), l = r(a.g, s.g), c = r(a.b, s.b), d = tl(a.opacity, s.opacity);
    return function(u) {
      return a.r = i(u), a.g = l(u), a.b = c(u), a.opacity = d(u), a + "";
    };
  }
  return o.gamma = e, o;
})(1);
function Mu(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, o = t.slice(), a;
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = e[a] * (1 - s) + t[a] * s;
    return o;
  };
}
function Iu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Du(e, t) {
  var r = t ? t.length : 0, o = e ? Math.min(r, e.length) : 0, a = new Array(o), s = new Array(r), i;
  for (i = 0; i < o; ++i) a[i] = qa(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < o; ++i) s[i] = a[i](l);
    return s;
  };
}
function Tu(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return r.setTime(e * (1 - o) + t * o), r;
  };
}
function Lr(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Lu(e, t) {
  var r = {}, o = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = qa(e[a], t[a]) : o[a] = t[a];
  return function(s) {
    for (a in r) o[a] = r[a](s);
    return o;
  };
}
var sa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Bo = new RegExp(sa.source, "g");
function $u(e) {
  return function() {
    return e;
  };
}
function Au(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Eu(e, t) {
  var r = sa.lastIndex = Bo.lastIndex = 0, o, a, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (o = sa.exec(e)) && (a = Bo.exec(t)); )
    (s = a.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (o = o[0]) === (a = a[0]) ? l[i] ? l[i] += a : l[++i] = a : (l[++i] = null, c.push({ i, x: Lr(o, a) })), r = Bo.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? Au(c[0].x) : $u(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function qa(e, t) {
  var r = typeof t, o;
  return t == null || r === "boolean" ? Za(t) : (r === "number" ? Lr : r === "string" ? (o = tr(t)) ? (t = o, Ts) : Eu : t instanceof tr ? Ts : t instanceof Date ? Tu : Iu(t) ? Mu : Array.isArray(t) ? Du : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Lu : Lr)(e, t);
}
function Pu(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Fu(e) {
  return function() {
    return e;
  };
}
function Ru(e) {
  return +e;
}
var Ls = [0, 1];
function Nn(e) {
  return e;
}
function ia(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Fu(isNaN(t) ? NaN : 0.5);
}
function Bu(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(o) {
    return Math.max(e, Math.min(t, o));
  };
}
function Hu(e, t, r) {
  var o = e[0], a = e[1], s = t[0], i = t[1];
  return a < o ? (o = ia(a, o), s = r(i, s)) : (o = ia(o, a), s = r(s, i)), function(l) {
    return s(o(l));
  };
}
function zu(e, t, r) {
  var o = Math.min(e.length, t.length) - 1, a = new Array(o), s = new Array(o), i = -1;
  for (e[o] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < o; )
    a[i] = ia(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = ou(e, l, 1, o) - 1;
    return s[c](a[c](l));
  };
}
function nl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ou() {
  var e = Ls, t = Ls, r = qa, o, a, s, i = Nn, l, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return i !== Nn && (i = Bu(e[0], e[h - 1])), l = h > 2 ? zu : Hu, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = l(e.map(o), t, r)))(o(i(h)));
  }
  return f.invert = function(h) {
    return i(a((d || (d = l(t, e.map(o), Lr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Ru), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), r = Pu, u();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Nn, u()) : i !== Nn;
  }, f.interpolate = function(h) {
    return arguments.length ? (r = h, u()) : r;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return o = h, a = p, u();
  };
}
function rl() {
  return Ou()(Nn, Nn);
}
function Uu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function $r(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, o = e.slice(0, r);
  return [
    o.length > 1 ? o[0] + o.slice(2) : o,
    +e.slice(r + 1)
  ];
}
function En(e) {
  return e = $r(Math.abs(e)), e ? e[1] : NaN;
}
function Wu(e, t) {
  return function(r, o) {
    for (var a = r.length, s = [], i = 0, l = e[0], c = 0; a > 0 && l > 0 && (c + l + 1 > o && (l = Math.max(1, o - c)), s.push(r.substring(a -= l, a + l)), !((c += l + 1) > o)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Gu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Yu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ar(e) {
  if (!(t = Yu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Ja({
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
Ar.prototype = Ja.prototype;
function Ja(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ja.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vu(e) {
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
var ol;
function Zu(e, t) {
  var r = $r(e, t);
  if (!r) return e + "";
  var o = r[0], a = r[1], s = a - (ol = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, i = o.length;
  return s === i ? o : s > i ? o + new Array(s - i + 1).join("0") : s > 0 ? o.slice(0, s) + "." + o.slice(s) : "0." + new Array(1 - s).join("0") + $r(e, Math.max(0, t + s - 1))[0];
}
function $s(e, t) {
  var r = $r(e, t);
  if (!r) return e + "";
  var o = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + o : o.length > a + 1 ? o.slice(0, a + 1) + "." + o.slice(a + 1) : o + new Array(a - o.length + 2).join("0");
}
const As = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Uu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => $s(e * 100, t),
  r: $s,
  s: Zu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Es(e) {
  return e;
}
var Ps = Array.prototype.map, Fs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Es : Wu(Ps.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", o = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Es : Gu(Ps.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = Ar(f);
    var h = f.fill, p = f.align, x = f.sign, m = f.symbol, g = f.zero, I = f.width, D = f.comma, T = f.precision, C = f.trim, b = f.type;
    b === "n" ? (D = !0, b = "g") : As[b] || (T === void 0 && (T = 12), C = !0, b = "g"), (g || h === "0" && p === "=") && (g = !0, h = "0", p = "=");
    var S = m === "$" ? r : m === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", j = m === "$" ? o : /[%p]/.test(b) ? i : "", w = As[b], y = /[defgprs%]/.test(b);
    T = T === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function v($) {
      var M = S, E = j, k, _, N;
      if (b === "c")
        E = w($) + E, $ = "";
      else {
        $ = +$;
        var H = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? c : w(Math.abs($), T), C && ($ = Vu($)), H && +$ == 0 && x !== "+" && (H = !1), M = (H ? x === "(" ? x : l : x === "-" || x === "(" ? "" : x) + M, E = (b === "s" ? Fs[8 + ol / 3] : "") + E + (H && x === "(" ? ")" : ""), y) {
          for (k = -1, _ = $.length; ++k < _; )
            if (N = $.charCodeAt(k), 48 > N || N > 57) {
              E = (N === 46 ? a + $.slice(k + 1) : $.slice(k)) + E, $ = $.slice(0, k);
              break;
            }
        }
      }
      D && !g && ($ = t($, 1 / 0));
      var Z = M.length + $.length + E.length, ee = Z < I ? new Array(I - Z + 1).join(h) : "";
      switch (D && g && ($ = t(ee + $, ee.length ? I - E.length : 1 / 0), ee = ""), p) {
        case "<":
          $ = M + $ + E + ee;
          break;
        case "=":
          $ = M + ee + $ + E;
          break;
        case "^":
          $ = ee.slice(0, Z = ee.length >> 1) + M + $ + E + ee.slice(Z);
          break;
        default:
          $ = ee + M + $ + E;
          break;
      }
      return s($);
    }
    return v.toString = function() {
      return f + "";
    }, v;
  }
  function u(f, h) {
    var p = d((f = Ar(f), f.type = "f", f)), x = Math.max(-8, Math.min(8, Math.floor(En(h) / 3))) * 3, m = Math.pow(10, -x), g = Fs[8 + x / 3];
    return function(I) {
      return p(m * I) + g;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var yr, al, sl;
Ju({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ju(e) {
  return yr = qu(e), al = yr.format, sl = yr.formatPrefix, yr;
}
function Xu(e) {
  return Math.max(0, -En(Math.abs(e)));
}
function Ku(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(En(t) / 3))) * 3 - En(Math.abs(e)));
}
function Qu(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, En(t) - En(e)) + 1;
}
function ef(e, t, r, o) {
  var a = oa(e, t, r), s;
  switch (o = Ar(o ?? ",f"), o.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return o.precision == null && !isNaN(s = Ku(a, i)) && (o.precision = s), sl(o, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(s = Qu(a, Math.max(Math.abs(e), Math.abs(t)))) && (o.precision = s - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(s = Xu(a)) && (o.precision = s - (o.type === "%") * 2);
      break;
    }
  }
  return al(o);
}
function tf(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var o = t();
    return uu(o[0], o[o.length - 1], r ?? 10);
  }, e.tickFormat = function(r, o) {
    var a = t();
    return ef(a[0], a[a.length - 1], r ?? 10, o);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var o = t(), a = 0, s = o.length - 1, i = o[a], l = o[s], c, d, u = 10;
    for (l < i && (d = i, i = l, l = d, d = a, a = s, s = d); u-- > 0; ) {
      if (d = ra(i, l, r), d === c)
        return o[a] = i, o[s] = l, t(o);
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
function Er() {
  var e = rl();
  return e.copy = function() {
    return nl(e, Er());
  }, So.apply(e, arguments), tf(e);
}
function nf(e, t) {
  e = e.slice();
  var r = 0, o = e.length - 1, a = e[r], s = e[o], i;
  return s < a && (i = r, r = o, o = i, i = a, a = s, s = i), e[r] = t.floor(a), e[o] = t.ceil(s), e;
}
const Ho = /* @__PURE__ */ new Date(), zo = /* @__PURE__ */ new Date();
function xt(e, t, r, o) {
  function a(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return a.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), a.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), a.round = (s) => {
    const i = a(s), l = a.ceil(s);
    return s - i < l - s ? i : l;
  }, a.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), a.range = (s, i, l) => {
    const c = [];
    if (s = a.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return c;
    let d;
    do
      c.push(d = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (d < s && s < i);
    return c;
  }, a.filter = (s) => xt((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (a.count = (s, i) => (Ho.setTime(+s), zo.setTime(+i), e(Ho), e(zo), Math.floor(r(Ho, zo))), a.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? a.filter(o ? (i) => o(i) % s === 0 : (i) => a.count(0, i) % s === 0) : a)), a;
}
const Pr = xt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Pr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? xt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Pr);
Pr.range;
const Jt = 1e3, Mt = Jt * 60, Xt = Mt * 60, Qt = Xt * 24, Xa = Qt * 7, Rs = Qt * 30, Oo = Qt * 365, jn = xt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getUTCSeconds());
jn.range;
const Ka = xt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Jt);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getMinutes());
Ka.range;
const rf = xt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getUTCMinutes());
rf.range;
const Qa = xt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Jt - e.getMinutes() * Mt);
}, (e, t) => {
  e.setTime(+e + t * Xt);
}, (e, t) => (t - e) / Xt, (e) => e.getHours());
Qa.range;
const of = xt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Xt);
}, (e, t) => (t - e) / Xt, (e) => e.getUTCHours());
of.range;
const cr = xt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Mt) / Qt,
  (e) => e.getDate() - 1
);
cr.range;
const es = xt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Qt, (e) => e.getUTCDate() - 1);
es.range;
const af = xt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Qt, (e) => Math.floor(e / Qt));
af.range;
function wn(e) {
  return xt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Mt) / Xa);
}
const _o = wn(0), Fr = wn(1), sf = wn(2), lf = wn(3), Pn = wn(4), cf = wn(5), df = wn(6);
_o.range;
Fr.range;
sf.range;
lf.range;
Pn.range;
cf.range;
df.range;
function Sn(e) {
  return xt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Xa);
}
const il = Sn(0), Rr = Sn(1), uf = Sn(2), ff = Sn(3), Fn = Sn(4), hf = Sn(5), pf = Sn(6);
il.range;
Rr.range;
uf.range;
ff.range;
Fn.range;
hf.range;
pf.range;
const nr = xt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
nr.range;
const mf = xt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
mf.range;
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
const yn = xt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
yn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : xt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
yn.range;
function gf(e, t, r, o, a, s) {
  const i = [
    [jn, 1, Jt],
    [jn, 5, 5 * Jt],
    [jn, 15, 15 * Jt],
    [jn, 30, 30 * Jt],
    [s, 1, Mt],
    [s, 5, 5 * Mt],
    [s, 15, 15 * Mt],
    [s, 30, 30 * Mt],
    [a, 1, Xt],
    [a, 3, 3 * Xt],
    [a, 6, 6 * Xt],
    [a, 12, 12 * Xt],
    [o, 1, Qt],
    [o, 2, 2 * Qt],
    [r, 1, Xa],
    [t, 1, Rs],
    [t, 3, 3 * Rs],
    [e, 1, Oo]
  ];
  function l(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), x = p ? p.range(d, +u + 1) : [];
    return h ? x.reverse() : x;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = Ya(([, , g]) => g).right(i, h);
    if (p === i.length) return e.every(oa(d / Oo, u / Oo, f));
    if (p === 0) return Pr.every(Math.max(oa(d, u, f), 1));
    const [x, m] = i[h / i[p - 1][2] < i[p][2] / h ? p - 1 : p];
    return x.every(m);
  }
  return [l, c];
}
const [xf, bf] = gf(en, nr, _o, cr, Qa, Ka);
function Uo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Wo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Un(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function yf(e) {
  var t = e.dateTime, r = e.date, o = e.time, a = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Wn(a), u = Gn(a), f = Wn(s), h = Gn(s), p = Wn(i), x = Gn(i), m = Wn(l), g = Gn(l), I = Wn(c), D = Gn(c), T = {
    a: H,
    A: Z,
    b: ee,
    B,
    c: null,
    d: Ws,
    e: Ws,
    f: Of,
    g: Kf,
    G: eh,
    H: Bf,
    I: Hf,
    j: zf,
    L: ll,
    m: Uf,
    M: Wf,
    p: J,
    q: A,
    Q: Vs,
    s: Zs,
    S: Gf,
    u: Yf,
    U: Vf,
    V: Zf,
    w: qf,
    W: Jf,
    x: null,
    X: null,
    y: Xf,
    Y: Qf,
    Z: th,
    "%": Ys
  }, C = {
    a: L,
    A: G,
    b: F,
    B: O,
    c: null,
    d: Gs,
    e: Gs,
    f: ah,
    g: mh,
    G: xh,
    H: nh,
    I: rh,
    j: oh,
    L: dl,
    m: sh,
    M: ih,
    p: X,
    q: K,
    Q: Vs,
    s: Zs,
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
    Z: bh,
    "%": Ys
  }, b = {
    a: v,
    A: $,
    b: M,
    B: E,
    c: k,
    d: Os,
    e: Os,
    f: Ef,
    g: zs,
    G: Hs,
    H: Us,
    I: Us,
    j: Tf,
    L: Af,
    m: Df,
    M: Lf,
    p: y,
    q: If,
    Q: Ff,
    s: Rf,
    S: $f,
    u: kf,
    U: Cf,
    V: Nf,
    w: _f,
    W: jf,
    x: _,
    X: N,
    y: zs,
    Y: Hs,
    Z: Mf,
    "%": Pf
  };
  T.x = S(r, T), T.X = S(o, T), T.c = S(t, T), C.x = S(r, C), C.X = S(o, C), C.c = S(t, C);
  function S(q, ne) {
    return function(ue) {
      var W = [], ae = -1, ce = 0, be = q.length, he, Me, Ge;
      for (ue instanceof Date || (ue = /* @__PURE__ */ new Date(+ue)); ++ae < be; )
        q.charCodeAt(ae) === 37 && (W.push(q.slice(ce, ae)), (Me = Bs[he = q.charAt(++ae)]) != null ? he = q.charAt(++ae) : Me = he === "e" ? " " : "0", (Ge = ne[he]) && (he = Ge(ue, Me)), W.push(he), ce = ae + 1);
      return W.push(q.slice(ce, ae)), W.join("");
    };
  }
  function j(q, ne) {
    return function(ue) {
      var W = Un(1900, void 0, 1), ae = w(W, q, ue += "", 0), ce, be;
      if (ae != ue.length) return null;
      if ("Q" in W) return new Date(W.Q);
      if ("s" in W) return new Date(W.s * 1e3 + ("L" in W ? W.L : 0));
      if (ne && !("Z" in W) && (W.Z = 0), "p" in W && (W.H = W.H % 12 + W.p * 12), W.m === void 0 && (W.m = "q" in W ? W.q : 0), "V" in W) {
        if (W.V < 1 || W.V > 53) return null;
        "w" in W || (W.w = 1), "Z" in W ? (ce = Wo(Un(W.y, 0, 1)), be = ce.getUTCDay(), ce = be > 4 || be === 0 ? Rr.ceil(ce) : Rr(ce), ce = es.offset(ce, (W.V - 1) * 7), W.y = ce.getUTCFullYear(), W.m = ce.getUTCMonth(), W.d = ce.getUTCDate() + (W.w + 6) % 7) : (ce = Uo(Un(W.y, 0, 1)), be = ce.getDay(), ce = be > 4 || be === 0 ? Fr.ceil(ce) : Fr(ce), ce = cr.offset(ce, (W.V - 1) * 7), W.y = ce.getFullYear(), W.m = ce.getMonth(), W.d = ce.getDate() + (W.w + 6) % 7);
      } else ("W" in W || "U" in W) && ("w" in W || (W.w = "u" in W ? W.u % 7 : "W" in W ? 1 : 0), be = "Z" in W ? Wo(Un(W.y, 0, 1)).getUTCDay() : Uo(Un(W.y, 0, 1)).getDay(), W.m = 0, W.d = "W" in W ? (W.w + 6) % 7 + W.W * 7 - (be + 5) % 7 : W.w + W.U * 7 - (be + 6) % 7);
      return "Z" in W ? (W.H += W.Z / 100 | 0, W.M += W.Z % 100, Wo(W)) : Uo(W);
    };
  }
  function w(q, ne, ue, W) {
    for (var ae = 0, ce = ne.length, be = ue.length, he, Me; ae < ce; ) {
      if (W >= be) return -1;
      if (he = ne.charCodeAt(ae++), he === 37) {
        if (he = ne.charAt(ae++), Me = b[he in Bs ? ne.charAt(ae++) : he], !Me || (W = Me(q, ue, W)) < 0) return -1;
      } else if (he != ue.charCodeAt(W++))
        return -1;
    }
    return W;
  }
  function y(q, ne, ue) {
    var W = d.exec(ne.slice(ue));
    return W ? (q.p = u.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function v(q, ne, ue) {
    var W = p.exec(ne.slice(ue));
    return W ? (q.w = x.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function $(q, ne, ue) {
    var W = f.exec(ne.slice(ue));
    return W ? (q.w = h.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function M(q, ne, ue) {
    var W = I.exec(ne.slice(ue));
    return W ? (q.m = D.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function E(q, ne, ue) {
    var W = m.exec(ne.slice(ue));
    return W ? (q.m = g.get(W[0].toLowerCase()), ue + W[0].length) : -1;
  }
  function k(q, ne, ue) {
    return w(q, t, ne, ue);
  }
  function _(q, ne, ue) {
    return w(q, r, ne, ue);
  }
  function N(q, ne, ue) {
    return w(q, o, ne, ue);
  }
  function H(q) {
    return i[q.getDay()];
  }
  function Z(q) {
    return s[q.getDay()];
  }
  function ee(q) {
    return c[q.getMonth()];
  }
  function B(q) {
    return l[q.getMonth()];
  }
  function J(q) {
    return a[+(q.getHours() >= 12)];
  }
  function A(q) {
    return 1 + ~~(q.getMonth() / 3);
  }
  function L(q) {
    return i[q.getUTCDay()];
  }
  function G(q) {
    return s[q.getUTCDay()];
  }
  function F(q) {
    return c[q.getUTCMonth()];
  }
  function O(q) {
    return l[q.getUTCMonth()];
  }
  function X(q) {
    return a[+(q.getUTCHours() >= 12)];
  }
  function K(q) {
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
      var ne = S(q += "", C);
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
var Bs = { "-": "", _: " ", 0: "0" }, yt = /^\s*\d+/, vf = /^%/, wf = /[\\^$*+?|[\]().{}]/g;
function ot(e, t, r) {
  var o = e < 0 ? "-" : "", a = (o ? -e : e) + "", s = a.length;
  return o + (s < r ? new Array(r - s + 1).join(t) + a : a);
}
function Sf(e) {
  return e.replace(wf, "\\$&");
}
function Wn(e) {
  return new RegExp("^(?:" + e.map(Sf).join("|") + ")", "i");
}
function Gn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function _f(e, t, r) {
  var o = yt.exec(t.slice(r, r + 1));
  return o ? (e.w = +o[0], r + o[0].length) : -1;
}
function kf(e, t, r) {
  var o = yt.exec(t.slice(r, r + 1));
  return o ? (e.u = +o[0], r + o[0].length) : -1;
}
function Cf(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.U = +o[0], r + o[0].length) : -1;
}
function Nf(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.V = +o[0], r + o[0].length) : -1;
}
function jf(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.W = +o[0], r + o[0].length) : -1;
}
function Hs(e, t, r) {
  var o = yt.exec(t.slice(r, r + 4));
  return o ? (e.y = +o[0], r + o[0].length) : -1;
}
function zs(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), r + o[0].length) : -1;
}
function Mf(e, t, r) {
  var o = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return o ? (e.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), r + o[0].length) : -1;
}
function If(e, t, r) {
  var o = yt.exec(t.slice(r, r + 1));
  return o ? (e.q = o[0] * 3 - 3, r + o[0].length) : -1;
}
function Df(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.m = o[0] - 1, r + o[0].length) : -1;
}
function Os(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.d = +o[0], r + o[0].length) : -1;
}
function Tf(e, t, r) {
  var o = yt.exec(t.slice(r, r + 3));
  return o ? (e.m = 0, e.d = +o[0], r + o[0].length) : -1;
}
function Us(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.H = +o[0], r + o[0].length) : -1;
}
function Lf(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.M = +o[0], r + o[0].length) : -1;
}
function $f(e, t, r) {
  var o = yt.exec(t.slice(r, r + 2));
  return o ? (e.S = +o[0], r + o[0].length) : -1;
}
function Af(e, t, r) {
  var o = yt.exec(t.slice(r, r + 3));
  return o ? (e.L = +o[0], r + o[0].length) : -1;
}
function Ef(e, t, r) {
  var o = yt.exec(t.slice(r, r + 6));
  return o ? (e.L = Math.floor(o[0] / 1e3), r + o[0].length) : -1;
}
function Pf(e, t, r) {
  var o = vf.exec(t.slice(r, r + 1));
  return o ? r + o[0].length : -1;
}
function Ff(e, t, r) {
  var o = yt.exec(t.slice(r));
  return o ? (e.Q = +o[0], r + o[0].length) : -1;
}
function Rf(e, t, r) {
  var o = yt.exec(t.slice(r));
  return o ? (e.s = +o[0], r + o[0].length) : -1;
}
function Ws(e, t) {
  return ot(e.getDate(), t, 2);
}
function Bf(e, t) {
  return ot(e.getHours(), t, 2);
}
function Hf(e, t) {
  return ot(e.getHours() % 12 || 12, t, 2);
}
function zf(e, t) {
  return ot(1 + cr.count(en(e), e), t, 3);
}
function ll(e, t) {
  return ot(e.getMilliseconds(), t, 3);
}
function Of(e, t) {
  return ll(e, t) + "000";
}
function Uf(e, t) {
  return ot(e.getMonth() + 1, t, 2);
}
function Wf(e, t) {
  return ot(e.getMinutes(), t, 2);
}
function Gf(e, t) {
  return ot(e.getSeconds(), t, 2);
}
function Yf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Vf(e, t) {
  return ot(_o.count(en(e) - 1, e), t, 2);
}
function cl(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Pn(e) : Pn.ceil(e);
}
function Zf(e, t) {
  return e = cl(e), ot(Pn.count(en(e), e) + (en(e).getDay() === 4), t, 2);
}
function qf(e) {
  return e.getDay();
}
function Jf(e, t) {
  return ot(Fr.count(en(e) - 1, e), t, 2);
}
function Xf(e, t) {
  return ot(e.getFullYear() % 100, t, 2);
}
function Kf(e, t) {
  return e = cl(e), ot(e.getFullYear() % 100, t, 2);
}
function Qf(e, t) {
  return ot(e.getFullYear() % 1e4, t, 4);
}
function eh(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Pn(e) : Pn.ceil(e), ot(e.getFullYear() % 1e4, t, 4);
}
function th(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ot(t / 60 | 0, "0", 2) + ot(t % 60, "0", 2);
}
function Gs(e, t) {
  return ot(e.getUTCDate(), t, 2);
}
function nh(e, t) {
  return ot(e.getUTCHours(), t, 2);
}
function rh(e, t) {
  return ot(e.getUTCHours() % 12 || 12, t, 2);
}
function oh(e, t) {
  return ot(1 + es.count(yn(e), e), t, 3);
}
function dl(e, t) {
  return ot(e.getUTCMilliseconds(), t, 3);
}
function ah(e, t) {
  return dl(e, t) + "000";
}
function sh(e, t) {
  return ot(e.getUTCMonth() + 1, t, 2);
}
function ih(e, t) {
  return ot(e.getUTCMinutes(), t, 2);
}
function lh(e, t) {
  return ot(e.getUTCSeconds(), t, 2);
}
function ch(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function dh(e, t) {
  return ot(il.count(yn(e) - 1, e), t, 2);
}
function ul(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Fn(e) : Fn.ceil(e);
}
function uh(e, t) {
  return e = ul(e), ot(Fn.count(yn(e), e) + (yn(e).getUTCDay() === 4), t, 2);
}
function fh(e) {
  return e.getUTCDay();
}
function hh(e, t) {
  return ot(Rr.count(yn(e) - 1, e), t, 2);
}
function ph(e, t) {
  return ot(e.getUTCFullYear() % 100, t, 2);
}
function mh(e, t) {
  return e = ul(e), ot(e.getUTCFullYear() % 100, t, 2);
}
function gh(e, t) {
  return ot(e.getUTCFullYear() % 1e4, t, 4);
}
function xh(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Fn(e) : Fn.ceil(e), ot(e.getUTCFullYear() % 1e4, t, 4);
}
function bh() {
  return "+0000";
}
function Ys() {
  return "%";
}
function Vs(e) {
  return +e;
}
function Zs(e) {
  return Math.floor(+e / 1e3);
}
var kn, fl;
yh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function yh(e) {
  return kn = yf(e), fl = kn.format, kn.parse, kn.utcFormat, kn.utcParse, kn;
}
function vh(e) {
  return new Date(e);
}
function wh(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function hl(e, t, r, o, a, s, i, l, c, d) {
  var u = rl(), f = u.invert, h = u.domain, p = d(".%L"), x = d(":%S"), m = d("%I:%M"), g = d("%I %p"), I = d("%a %d"), D = d("%b %d"), T = d("%B"), C = d("%Y");
  function b(S) {
    return (c(S) < S ? p : l(S) < S ? x : i(S) < S ? m : s(S) < S ? g : o(S) < S ? a(S) < S ? I : D : r(S) < S ? T : C)(S);
  }
  return u.invert = function(S) {
    return new Date(f(S));
  }, u.domain = function(S) {
    return arguments.length ? h(Array.from(S, wh)) : h().map(vh);
  }, u.ticks = function(S) {
    var j = h();
    return e(j[0], j[j.length - 1], S ?? 10);
  }, u.tickFormat = function(S, j) {
    return j == null ? b : d(j);
  }, u.nice = function(S) {
    var j = h();
    return (!S || typeof S.range != "function") && (S = t(j[0], j[j.length - 1], S ?? 10)), S ? h(nf(j, S)) : u;
  }, u.copy = function() {
    return nl(u, hl(e, t, r, o, a, s, i, l, c, d));
  }, u;
}
function ts() {
  return So.apply(hl(xf, bf, en, nr, _o, cr, Qa, Ka, jn, fl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Sh({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: o,
  isSelected: a = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const d = Ze(null), [u, f] = Ve(!1), [h, p] = Ve(!1), x = t(e.start), m = t(e.end), g = Math.max(m - x, 20), I = () => {
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
  }, D = e.progress ? g * e.progress / 100 : 0, T = () => {
    r?.(e);
  }, C = () => {
    o?.(e);
  }, b = (M) => {
    M.key === "Enter" ? (M.preventDefault(), T()) : M.key === " " && (M.preventDefault(), C());
  }, S = () => {
    f(!0);
  }, j = () => {
    f(!1);
  }, w = () => {
    p(!0), l?.();
  }, y = () => {
    p(!1);
  }, v = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || a) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    a && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), $ = {
    "--task-left": `${x}px`,
    "--task-width": `${g}px`,
    "--task-color": I(),
    left: `${x}px`,
    width: `${g}px`,
    backgroundColor: I()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: v,
      style: $,
      onClick: T,
      onDoubleClick: C,
      onKeyDown: b,
      onMouseDown: S,
      onMouseUp: j,
      onFocus: w,
      onBlur: y,
      "aria-label": c || `${a ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${D}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function _h({ viewStart: e, viewEnd: t, dateCount: r }) {
  const o = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    o.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Ve(-1), c = Ze(null), d = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const x = Math.max(0, i === -1 ? 0 : i - 1);
      l(x), h(x);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const x = Math.min(o.length - 1, i === -1 ? 0 : i + 1);
      l(x), h(x);
    } else if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (p.key === "Home")
      p.preventDefault(), l(0), h(0);
    else if (p.key === "End") {
      p.preventDefault();
      const x = o.length - 1;
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
            children: o.map((p, x) => {
              const m = p.getTime() === s.getTime(), g = i === x;
              return /* @__PURE__ */ n.jsx(
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
function kh({ resource: e, tasks: t, scale: r, onTaskClick: o, onTaskDoubleClick: a, rowIndex: s, dateCount: i }) {
  const [l, c] = Ve(!1), [d, u] = Ve(-1), f = Ze(null);
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
        const D = Math.min(t.length - 1, d + 1);
        u(D), f.current?.querySelector(`[data-task-index="${D}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case " ":
        m.preventDefault(), d >= 0 && a?.(t[d]);
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
            onKeyDown: p,
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
            onKeyDown: h,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((m, g) => /* @__PURE__ */ n.jsx(
              Sh,
              {
                task: m,
                scale: r,
                onTaskClick: o,
                onTaskDoubleClick: a,
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
function Uy({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: o,
  onTaskClick: a,
  onTaskDoubleClick: s
}) {
  const i = Ze(null), [l, c] = Ve(800), d = ze(() => {
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
  nt(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const g = new m((I) => {
      const D = I[0];
      D && c(Math.max(D.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const h = ze(
    () => ts().domain([d, u]).range([0, l]),
    [d, u, l]
  ), p = ze(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((g) => {
      const I = m.get(g.resourceId) || [];
      I.push(g), m.set(g.resourceId, I);
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
        /* @__PURE__ */ n.jsx(_h, { viewStart: d, viewEnd: u, dateCount: f }),
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
              kh,
              {
                resource: m,
                tasks: p.get(m.id) || [],
                scale: h,
                onTaskClick: a,
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
const Br = ({
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
) }), Ch = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: o = "Breadcrumb",
  href: a,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? rt.Children.toArray(t).filter(
    (g) => rt.isValidElement(g) && (g.type === Br || g.type?.displayName === "BreadcrumbItem")
  ).map((g) => ({
    text: typeof g.props.children == "string" ? g.props.children : String(g.props.children),
    href: g.props.href,
    active: g.props.active,
    attributes: g.props.attributes
  })) : [], d = () => t ? c() : a && s ? [{ href: a, text: s }] : e, u = () => {
    const m = d();
    if (m && m.length > 0) {
      const g = m.slice().reverse().find((I) => I.href && !I.active);
      if (g)
        return { href: g.href, text: g.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), p = De(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), x = o;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: p,
      "aria-label": x,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          rt.Children.map(t, (m, g) => rt.isValidElement(m) && (m.type === Br || m.type?.displayName === "BreadcrumbItem") ? rt.cloneElement(m, { key: g }) : null)
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
        h.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: h.href,
            role: "link",
            "aria-label": `Back to ${h.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              h.text
            ]
          }
        ) })
      ]
    }
  );
}, pl = Ch;
pl.Item = Br;
Br.displayName = "BreadcrumbItem";
const ml = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: o = {}
}) => {
  const a = De("nhsuk-skip-link", r);
  return /* @__PURE__ */ n.jsx(
    "a",
    {
      className: a,
      href: t,
      "data-module": "nhsuk-skip-link",
      ...o,
      children: e
    }
  );
}, Wy = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: o,
  classes: a,
  attributes: s = {}
}) => {
  const i = De("nhsuk-pagination", a);
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
}, Gy = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: o = {}
}) => {
  const a = De("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, gl = rt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: o = 2,
  headingClasses: a,
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
    a
  ].filter(Boolean).join(" "), m = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const D = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Kt,
      {
        level: o,
        className: x,
        children: D()
      }
    );
  }, g = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, I = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: h,
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
        /* @__PURE__ */ n.jsxs("div", { className: p, children: [
          m(),
          g(),
          I()
        ] })
      ]
    }
  );
});
gl.displayName = "Card";
const Yy = ({
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
}, Vy = ({
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
}, Zy = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: o = 3,
  headingClasses: a,
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
    a
  ].filter(Boolean).join(" "), g = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const D = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], T = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        D,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Kt,
      {
        level: o,
        className: m,
        children: T
      }
    );
  }, I = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: x,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          g(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: I() })
      ]
    }
  );
}, Nh = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: o,
  headingLevel: a = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const d = De(
    "nhsuk-panel",
    t
  ), u = () => !r && !o && !l ? null : o ? /* @__PURE__ */ n.jsx(
    Kt,
    {
      level: a,
      className: "nhsuk-panel__heading",
      html: o,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Kt,
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
  return /* @__PURE__ */ n.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, qy = ({
  text: e,
  html: t,
  children: r,
  className: o,
  ...a
}) => {
  const s = De("nhsuk-inset-text", o), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...a, children: i() });
}, Jy = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...o
}) => {
  const a = De(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, d) => /* @__PURE__ */ n.jsx(
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
    d
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: a, ...o, children: e.map((l, c) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Yn = { current: null }, jh = () => {
  if (Yn.current) return Yn.current;
  try {
    Yn.current = require("prismjs");
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
    Yn.current = null;
  }
  return Yn.current;
}, Mh = (e) => {
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
}, Hr = (e, t, r) => {
  if (r || !t) return e;
  const o = jh();
  if (o && o.languages) {
    const a = o.languages[t] ? t : o.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : o.languages.json && t === "json" ? "json" : void 0;
    if (a)
      try {
        return o.highlight(e, o.languages[a], a);
      } catch {
      }
  }
  return Mh(e);
}, Ih = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: o,
  firstCellIsHeader: a = !1,
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
  const I = `nhsuk-table__caption ${o ? `nhsuk-table__caption--${o}` : ""}`.trim(), D = De(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), T = De(f), C = (y, v) => {
    const $ = De(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${y.format}`]: y.format
      },
      y.classes
    ), M = {
      scope: "col",
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && { role: "columnheader" },
      ...y.attributes
    };
    let E;
    if (y.node != null)
      E = /* @__PURE__ */ n.jsx(n.Fragment, { children: y.node });
    else if (y.html)
      E = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const k = Array.isArray(y.code), _ = k ? y.code.join(`
`) : y.code, N = k || _.includes(`
`), H = {
        className: De("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": N,
          "nhsuk-table__code--inline": !N
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, Z = Hr(_, y.codeLanguage);
      E = N ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: Z }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: Z }
        }
      );
    } else
      E = y.text;
    return /* @__PURE__ */ n.jsx("th", { className: $, ...M, children: E }, v);
  }, b = (y, v, $) => {
    const M = a && $ || y.rowHeader, E = De(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), k = {
      ...M && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...y.header && { "data-label": y.header }
      },
      ...y.attributes
    };
    let _;
    if (y.node != null)
      _ = /* @__PURE__ */ n.jsx(n.Fragment, { children: y.node });
    else if (y.html)
      _ = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const Z = Array.isArray(y.code), ee = Z ? y.code.join(`
`) : y.code, B = Z || ee.includes(`
`), J = {
        className: De("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, A = Hr(
        ee,
        y.codeLanguage,
        y.disableHighlight
      );
      _ = B ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...J,
          dangerouslySetInnerHTML: { __html: A }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...J,
          dangerouslySetInnerHTML: { __html: A }
        }
      );
    } else
      _ = y.text;
    const N = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && y.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      _
    ] }), H = M ? "th" : "td";
    return /* @__PURE__ */ n.jsx(H, { className: E, ...k, children: N }, v);
  };
  let S = t, j = e;
  !S && x && x.length && (S = x.map((y) => ({
    text: y.title,
    format: y.format,
    classes: y.headerClasses,
    attributes: y.headerAttributes
  }))), !j && x && m && m.length && (j = m.map((y, v) => x.map(($) => {
    const M = $.accessor ? $.accessor(y, v) : y[$.key];
    let E = { format: $.format, classes: $.cellClasses, attributes: $.cellAttributes };
    if ($.rowHeader && (E.rowHeader = !0), $.render) {
      const k = $.render(M, y, v, $);
      return k == null || typeof k == "boolean" ? { ...E, text: "" } : typeof k == "string" || typeof k == "number" ? { ...E, text: String(k) } : { ...E, ...k };
    }
    return { ...E, text: M != null ? String(M) : "" };
  })));
  const w = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: D,
      ...s && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: De(I, g && "nhsuk-u-visually-hidden"), children: r }),
        S && S.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: S.map(
              (y, v) => C(y, v)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: j && j.map((y, v) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: y.map(
              ($, M) => b($, M, M === 0)
            )
          },
          v
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Nh, { className: d, children: [
    i && /* @__PURE__ */ n.jsx(Kt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    w()
  ] }) : T ? /* @__PURE__ */ n.jsx("div", { className: T, children: w() }) : w();
}, Dh = ({
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
}, xl = ({
  responsive: e,
  className: t,
  children: r,
  ...o
}) => {
  const a = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...a, ...o, children: r });
}, bl = ({
  text: e,
  html: t,
  node: r,
  code: o,
  codeLanguage: a,
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
  const x = De(
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
  if (r != null) g = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) g = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (o != null) {
    const D = Array.isArray(o), T = D ? o.join(`
`) : o, C = D || T.includes(`
`), b = {
      className: De("nhsuk-table__code", s, {
        "nhsuk-table__code--block": C,
        "nhsuk-table__code--inline": !C
      }),
      ...a ? { "data-language": a } : {}
    }, S = Hr(
      T,
      a,
      i
    );
    g = C ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...b,
        dangerouslySetInnerHTML: { __html: S }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: S } });
  } else g = e;
  const I = p;
  return /* @__PURE__ */ n.jsx(I, { className: x, ...m, children: g });
}, Th = ({
  text: e,
  html: t,
  node: r,
  code: o,
  codeLanguage: a,
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
  const x = !!p, m = x ? "th" : "td", g = De(
    x ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${x ? "header" : "cell"}--${l}`,
    c
  ), I = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...x && { scope: "row" },
    ...h && { role: x ? "rowheader" : "cell" },
    ...f
  };
  let D;
  if (r != null) D = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) D = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (o != null) {
    const T = Array.isArray(o), C = T ? o.join(`
`) : o, b = T || C.includes(`
`), S = {
      className: De("nhsuk-table__code", s, {
        "nhsuk-table__code--block": b,
        "nhsuk-table__code--inline": !b
      }),
      ...a ? { "data-language": a } : {}
    }, j = Hr(C, a, i);
    D = b ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...S, dangerouslySetInnerHTML: { __html: j } }) }) : /* @__PURE__ */ n.jsx("code", { ...S, dangerouslySetInnerHTML: { __html: j } });
  } else D = e;
  return /* @__PURE__ */ n.jsx(m, { className: g, ...I, children: D });
}, tn = Ih;
tn.Caption = Dh;
tn.BodyRow = xl;
tn.HeaderCell = bl;
tn.Cell = Th;
let qs = !1, Js = !1;
Object.defineProperty(tn, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !qs && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), qs = !0), xl;
  }
});
Object.defineProperty(tn, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Js && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Js = !0), bl;
  }
});
const Xy = Hn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: o,
  onTabFocus: a,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: d,
  "data-testid": u,
  ...f
}, h) => {
  const p = r !== void 0, [x, m] = Ve(() => t || e[0]?.id || ""), g = p ? r : x, I = Ze(null), D = Ze(/* @__PURE__ */ new Map()), T = _e((v) => {
    p || m(v), o?.(v);
  }, [p, o]), C = _e((v) => {
    a?.(v), l && T(v);
  }, [a, l, T]), b = _e((v, $) => {
    const M = e.filter((_) => !_.disabled).map((_) => _.id), E = M.indexOf($);
    let k = null;
    switch (v.key) {
      case "ArrowLeft":
        k = E > 0 ? E - 1 : M.length - 1;
        break;
      case "ArrowRight":
        k = E < M.length - 1 ? E + 1 : 0;
        break;
      case "Home":
        k = 0;
        break;
      case "End":
        k = M.length - 1;
        break;
      case "Escape":
        v.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (k !== null) {
      v.preventDefault();
      const _ = M[k], N = D.current.get(_);
      N && (N.focus(), C(_));
    }
  }, [e, C, i]), S = _e((v, $) => {
    $ ? D.current.set(v, $) : D.current.delete(v);
  }, []), j = _e((v) => {
    const $ = D.current.get(v);
    $ && $.focus();
  }, []);
  Ai(h, () => ({
    focusTab: j,
    getActiveTab: () => g,
    getTabListElement: () => I.current
  }), [j, g]);
  const w = _e((v) => {
    const $ = v.relatedTarget;
    I.current?.contains($) || s?.();
  }, [s]), y = De("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: y,
      id: d,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: I,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: w,
                children: e.map((v) => {
                  const $ = v.id === g, M = v.disabled, E = De("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": $,
                    "nhsuk-tabs__list-item--disabled": M
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: E, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (k) => S(v.id, k),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": $,
                      "aria-controls": `${v.id}-panel`,
                      id: `${v.id}-tab`,
                      tabIndex: $ ? 0 : -1,
                      disabled: M,
                      onClick: () => !M && T(v.id),
                      onKeyDown: (k) => !M && b(k, v.id),
                      onFocus: () => !M && C(v.id),
                      ...v.attributes,
                      children: v.label
                    }
                  ) }, v.id);
                })
              }
            )
          }
        ),
        e.map((v) => {
          const $ = v.id === g;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${v.id}-tab`,
              id: `${v.id}-panel`,
              hidden: !$,
              children: v.content
            },
            v.id
          );
        })
      ]
    }
  );
}), Lh = Hn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: o,
    open: a = !1,
    className: s = "",
    id: i,
    children: l,
    ...c
  }, d) => {
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
    let h;
    return l ? h = l : o ? h = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r && (h = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: a,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Lh.displayName = "Details";
const $h = Hn(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: o = !1,
    headingLevel: a = 3,
    className: s,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    s && c.push(s);
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
    ), f = (p) => t === "cross" && !o ? `do not ${p}` : p, h = () => /* @__PURE__ */ n.jsx(
      Kt,
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
        className: c.join(" "),
        ...i,
        children: [
          h(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: d.join(" "), role: "list", children: r.map((p, x) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, x)) }) })
        ]
      }
    );
  }
);
$h.displayName = "DoDontList";
const Ah = Hn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: o,
    open: a = !1,
    className: s = "",
    id: i,
    children: l,
    ...c
  }, d) => {
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
    let h;
    return l ? h = l : o ? h = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r && (h = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: a,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Ah.displayName = "Expander";
const Eh = Hn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...o }, a) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, h = !!l.href, p = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), x = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Ph,
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
), Ph = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: o,
  statusId: a,
  ariaDescribedBy: s
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
        "aria-describedby": s,
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
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(st, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: d, id: a, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Eh.displayName = "TaskList";
const Ky = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: o,
  children: a,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => a || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), d = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: d,
      ...i,
      children: [
        Ti(
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
}, Qy = ({
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
}, Fh = ({
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
      Mr,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: a,
        onChange: (c) => s?.(c.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      Mr,
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
] }), Rh = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(st, { color: Bh(r.status), text: r.label }) }, r.status)) });
function Bh(e) {
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
const ev = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
  defaultValue: o,
  onChange: a,
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
  const [g, I] = Ve("grid"), D = i || g, [T, C] = Ve(o || []), b = r ?? T, S = ze(() => {
    const k = /* @__PURE__ */ new Set();
    return e.forEach((_) => k.add(new Date(_.start).getTime())), Array.from(k).sort((_, N) => _ - N);
  }, [e]), j = ze(() => {
    const k = {};
    return e.forEach((_) => {
      const N = new Date(_.start).getTime();
      k[N] || (k[N] = {});
      const H = _.capacity - _.booked - (_.held || 0);
      k[N][_.sessionId] = { slot: _, remaining: H };
    }), k;
  }, [e]), w = _e((k) => {
    if (s === "single") {
      const _ = [k.id];
      r || C(_), a?.(_, { lastAction: "select" });
    } else {
      const _ = b.includes(k.id), N = _ ? b.filter((H) => H !== k.id) : [...b, k.id];
      r || C(N), a?.(N, { lastAction: _ ? "deselect" : "select" });
    }
  }, [s, b, r, a]), y = ze(() => h || (p ? Array.from(new Set(e.map((_) => _.status))).map((_) => ({
    status: _,
    label: _.charAt(0).toUpperCase() + _.slice(1)
  })) : void 0), [h, p, e]), v = y ? /* @__PURE__ */ n.jsx(
    Rh,
    {
      items: y,
      orientation: x === "left" || x === "right" ? "vertical" : "horizontal"
    }
  ) : null, $ = (k) => {
    i || I(k), m?.(k);
  }, M = u || (f ? /* @__PURE__ */ n.jsx(
    Fh,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: D,
      onA11yModeChange: $
    }
  ) : null), E = /* @__PURE__ */ n.jsx("div", { style: c, className: De(l), children: /* @__PURE__ */ n.jsx(ta, { className: De("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(sn, { children: /* @__PURE__ */ n.jsx(Kn, { width: bn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    x === "top" && v,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((k) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => w(k), "aria-pressed": b.includes(k.id), children: [
      Vn(new Date(k.start)),
      " – ",
      Vn(new Date(k.end)),
      " (",
      k.status,
      ")"
    ] }) }, k.id)) }),
    x === "bottom" && v
  ] }) }) }) }) });
  return D === "list" ? E : /* @__PURE__ */ n.jsx("div", { style: c, className: De(l), children: /* @__PURE__ */ n.jsx(ta, { className: De("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(sn, { children: /* @__PURE__ */ n.jsx(Kn, { width: bn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    x === "top" && v,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": S.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((k) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${k.specialty}`, className: "nhs-slot-matrix__session-header", children: k.specialty }, k.id))
      ] }),
      S.map((k) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Vn(new Date(k)), children: Vn(new Date(k)) }),
        t.map((_) => {
          const N = j[k]?.[_.id];
          if (!N)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, _.id);
          const { slot: H, remaining: Z } = N, ee = b.includes(H.id), B = d ? d(H) : `Slot ${Vn(new Date(H.start))} ${H.status}${Z === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": H.status,
              className: De("nhs-slot-matrix__cell", ee && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": ee || void 0,
              onClick: () => w(H),
              children: Z > 0 ? `${Z} left` : "Full"
            },
            H.id
          );
        })
      ] }, k))
    ] }),
    x === "bottom" && v
  ] }) }) }) }) });
};
function Xs(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Vn(e) {
  return `${Xs(e.getHours())}:${Xs(e.getMinutes())}`;
}
function yl(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = yl(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Pt() {
  for (var e, t, r = 0, o = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = yl(e)) && (o && (o += " "), o += t);
  return o;
}
const Hh = ({ level: e, children: t, className: r }) => {
  const o = `h${e}`;
  return rt.createElement(o, { className: r }, t);
}, zh = ({ href: e, children: t, className: r, ...o }) => /* @__PURE__ */ n.jsx("a", { href: e, className: r, ...o, children: t });
function vr(e, t) {
  return /* @__PURE__ */ n.jsx("span", { className: Pt("nhs-step-nav__title", { "nhs-step-nav__title--current": t }), children: e.title });
}
const tv = ({
  id: e,
  className: t,
  ariaLabel: r = "Step by step",
  heading: o,
  summary: a,
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
  autoFocusExpanded: I = !1
}) => {
  const D = u ?? zh, T = i === "sidebar" ? { as: "aside", className: "nhs-step-nav nhs-step-nav--sidebar" } : { as: "nav", className: "nhs-step-nav nhs-step-nav--full" }, C = T.as === "aside" ? "aside" : "nav", b = x === void 0, [S, j] = Ve(
    () => new Set(p ?? [])
  ), w = ze(() => b ? S : new Set(x), [b, S, x]), y = ze(
    () => l.some((k) => k.description || k.items && k.items.length > 0),
    [l]
  ), v = _e((k) => w.has(k), [w]), $ = _e((k, _) => {
    b && j((N) => {
      if (h)
        return _ ? /* @__PURE__ */ new Set([k]) : /* @__PURE__ */ new Set();
      const H = new Set(N);
      return _ ? H.add(k) : H.delete(k), H;
    }), m?.(k, _);
  }, [b, m, h]), M = _e((k) => {
    const _ = l.filter((N) => N.description || N.items && N.items.length > 0).map((N) => N.id);
    b && j(() => k ? h ? new Set(_.slice(0, 1)) : new Set(_) : /* @__PURE__ */ new Set()), _.forEach((N) => m?.(N, k));
  }, [l, b, m, h]), E = _e((k, _) => {
    const N = !v(k.id);
    if ($(k.id, N), N && I) {
      const H = document.getElementById(`sbs-${k.id}-panel`);
      H && H.querySelector(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )?.focus();
    } else
      _?.focus();
  }, [I, v, $]);
  return rt.createElement(
    C,
    { id: e, "aria-label": r, className: Pt(T.className, t) },
    /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i === "full-width" && (o || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhs-step-nav__intro", children: [
        o && /* @__PURE__ */ n.jsx(Hh, { level: s, className: "nhs-step-nav__heading", children: o }),
        a && /* @__PURE__ */ n.jsx("p", { className: "nhs-step-nav__summary", children: a }),
        f && !h && g && y && /* @__PURE__ */ n.jsxs("div", { className: "nhs-step-nav__controls", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => M(!0), children: "Show all" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => M(!1), children: "Hide all" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("ol", { className: Pt("nhs-step-nav__list", { "nhs-step-nav__list--numbered": c }), children: l.map((k, _) => {
        const N = d === k.id, H = Pt(
          "nhs-step-nav__item",
          N && "nhs-step-nav__item--current",
          k.status && `nhs-step-nav__item--${k.status}`
        ), Z = k.href ? /* @__PURE__ */ n.jsx(D, { href: k.href, className: "nhs-step-nav__link", "aria-current": N ? "step" : void 0, children: vr(k, N) }) : vr(k, N), ee = !!(k.description || k.items && k.items.length > 0), B = f && ee ? v(k.id) : !0, J = `sbs-${k.id}-header`, A = `sbs-${k.id}-panel`;
        return /* @__PURE__ */ n.jsxs("li", { className: H, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhs-step-nav__header", children: [
            Z,
            (k.optional || k.duration || k.meta) && /* @__PURE__ */ n.jsxs("div", { className: "nhs-step-nav__meta", children: [
              k.optional && /* @__PURE__ */ n.jsx("span", { className: "nhs-step-nav__optional", "aria-label": "Optional", children: "Optional" }),
              k.duration && /* @__PURE__ */ n.jsx("span", { className: "nhs-step-nav__duration", children: k.duration }),
              k.meta
            ] }),
            f && ee && /* @__PURE__ */ n.jsx(
              "button",
              {
                id: J,
                type: "button",
                className: "nhs-step-nav__toggle",
                "aria-expanded": B,
                "aria-controls": A,
                onClick: (L) => E(k, L.currentTarget),
                "aria-label": (B ? "Hide" : "Show") + ` details for ${typeof k.title == "string" ? k.title : "this step"}`,
                children: /* @__PURE__ */ n.jsx("span", { className: "nhs-step-nav__toggle-icon", "aria-hidden": "true" })
              }
            )
          ] }),
          ee && (!f || B) && /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: A,
              role: "region",
              "aria-labelledby": f ? J : void 0,
              className: Pt("nhs-step-nav__content"),
              children: [
                k.description && /* @__PURE__ */ n.jsx("p", { className: "nhs-step-nav__description", children: k.description }),
                k.items && k.items.length > 0 && /* @__PURE__ */ n.jsx("ol", { className: "nhs-step-nav__sublist", children: k.items.map((L) => {
                  const G = d === L.id, F = L.href ? /* @__PURE__ */ n.jsx(D, { href: L.href, className: "nhs-step-nav__sublink", "aria-current": G ? "step" : void 0, children: vr(L, G) }) : vr(L, G);
                  return /* @__PURE__ */ n.jsx("li", { className: Pt("nhs-step-nav__subitem", L.status && `nhs-step-nav__subitem--${L.status}`), children: F }, L.id);
                }) })
              ]
            }
          )
        ] }, k.id || _);
      }) })
    ] })
  );
}, Oh = ({
  title: e,
  value: t,
  subtitle: r,
  variant: o = "default",
  href: a,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${o}`,
    s
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Kt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return a ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: a,
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
}, nv = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const o = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: o, ...r, children: /* @__PURE__ */ n.jsx(ta, { children: /* @__PURE__ */ n.jsx(sn, { children: e.map((a, s) => /* @__PURE__ */ n.jsx(
    Kn,
    {
      width: bn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(Oh, { ...a })
    },
    s
  )) }) }) });
};
var kr = /* @__PURE__ */ ((e) => (e.String = "string", e.Number = "number", e.Boolean = "boolean", e.Date = "date", e.Custom = "custom", e))(kr || {}), Rn = /* @__PURE__ */ ((e) => (e.First = "first", e.Last = "last", e))(Rn || {}), Zn = /* @__PURE__ */ ((e) => (e.TrueFirst = "trueFirst", e.FalseFirst = "falseFirst", e))(Zn || {});
function Ks(e) {
  if (e == null) return null;
  const r = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isNaN(r) ? null : r;
}
const Uh = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function Wh(e, t) {
  return Uh.compare(String(e), String(t));
}
function Qs(e, t) {
  if (t.sortAccessor) return t.sortAccessor(e);
  if (t.useRendererForSort) {
    if (t.tableRenderer) return t.tableRenderer(e);
    if (t.render) return t.render(e);
  }
  return e[t.key];
}
function Gh(e, t, r, o) {
  if (r?.sortComparator)
    return r.sortComparator(e, t);
  const a = r?.sortType;
  if (a === kr.Number) {
    const s = Number(e), i = Number(t), l = Number.isNaN(s), c = Number.isNaN(i);
    return l && c ? 0 : l ? 1 : c ? -1 : s - i;
  }
  if (a === kr.Boolean) {
    const s = !!e, i = !!t, l = r?.booleanOrder ?? o?.booleanOrder ?? Zn.FalseFirst;
    return s === i ? 0 : l === Zn.TrueFirst ? s ? -1 : 1 : s ? 1 : -1;
  }
  if (a === kr.Date) {
    const s = Ks(e), i = Ks(t);
    return s == null && i == null ? 0 : s == null ? 1 : i == null ? -1 : s - i;
  }
  if (typeof e == "number" && typeof t == "number") {
    const s = Number.isNaN(e), i = Number.isNaN(t);
    return s && i ? 0 : s ? 1 : i ? -1 : e - t;
  }
  if (typeof e == "boolean" && typeof t == "boolean") {
    const s = r?.booleanOrder ?? o?.booleanOrder ?? Zn.FalseFirst;
    return e === t ? 0 : s === Zn.TrueFirst ? e ? -1 : 1 : e ? 1 : -1;
  }
  return Wh(e, t);
}
function la(e, t, r = Rn.Last, o) {
  const a = new Map(e.map((i) => [i.key, i])), s = t ?? [];
  return (i, l) => {
    if (!s.length) return 0;
    for (const { key: c, direction: d } of s) {
      const u = a.get(c), f = u ? Qs(i, u) : i[c], h = u ? Qs(l, u) : l[c], p = f == null, x = h == null;
      if (p || x) {
        if (p && x) continue;
        return (u?.nullsPosition ?? o?.nullsPosition ?? r) === Rn.First ? p ? -1 : 1 : p ? 1 : -1;
      }
      let m = Gh(f, h, u, o);
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
const Yh = rt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: o,
    sortingOptions: a,
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
    tableType: I = "default"
  }, D) => {
    const T = Ze(null), C = Ze(null), b = Ze(null);
    rt.useImperativeHandle(D, () => T.current, []);
    const [S, j] = Ve(0), [w, y] = Ve(0), [v, $] = Ve("headers"), [M, E] = Ve("browse"), k = t.length, _ = e.length, N = ze(() => {
      if (!r || r.length === 0) return e;
      const L = la(t, r, Rn.Last, a);
      return [...e].sort(L);
    }, [e, r, t, a]), H = _e((L, G) => {
      setTimeout(() => {
        const F = T.current?.querySelector(
          `tbody tr:nth-child(${L + 1}) td:nth-child(${G + 1})`
        );
        F && (F.focus(), typeof F.scrollIntoView == "function" && F.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Z = _e((L) => {
      setTimeout(() => {
        const G = T.current?.querySelector(`th:nth-child(${L + 1})`);
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ee = _e((L) => {
      o?.(L);
    }, [o]), B = _e((L) => {
      i?.(L);
    }, [i]), J = _e((L) => {
      const { key: G } = L;
      switch (G) {
        case "Enter":
          if (L.preventDefault(), v === "headers" && M === "browse")
            E("navigate"), Z(w);
          else if (v === "headers" && M === "navigate") {
            const F = t[w];
            F && ee(F.key);
          } else v === "cells" && M === "browse" ? (E("navigate"), H(S, w)) : v === "cells" && M === "navigate" && B(S);
          break;
        case "Escape":
          L.preventDefault(), (v === "headers" && M === "navigate" || v === "cells" && M === "navigate") && E("browse");
          break;
        case "ArrowLeft":
          if (L.preventDefault(), M === "navigate" || M === "browse" && v === "headers") {
            if (v === "headers") {
              const F = Math.max(0, w - 1);
              y(F), Z(F);
            } else if (v === "cells") {
              const F = Math.max(0, w - 1);
              y(F), H(S, F);
            }
          }
          break;
        case "ArrowRight":
          if (L.preventDefault(), M === "navigate" || M === "browse" && v === "headers") {
            if (v === "headers") {
              const F = Math.min(k - 1, w + 1);
              y(F), Z(F);
            } else if (v === "cells") {
              const F = Math.min(k - 1, w + 1);
              y(F), H(S, F);
            }
          }
          break;
        case "ArrowUp":
          if (L.preventDefault(), v === "cells") {
            if (M === "browse") {
              const F = Math.max(0, S - 1);
              j(F), H(F, 0), y(0);
            } else if (M === "navigate")
              if (S > 0) {
                const F = S - 1;
                j(F), H(F, w);
              } else
                $("headers"), E("browse"), Z(w);
          }
          break;
        case "ArrowDown":
          if (L.preventDefault(), v === "headers" && M === "browse")
            $("cells"), j(0), y(0), H(0, 0);
          else if (v === "cells") {
            const F = _ - 1;
            if (M === "browse") {
              const O = Math.min(F, S + 1);
              j(O), H(O, 0), y(0);
            } else if (M === "navigate" && S < F) {
              const O = S + 1;
              j(O), H(O, w);
            }
          }
          break;
        case "Home":
          L.preventDefault(), v === "headers" ? (y(0), Z(0)) : v === "cells" && (L.ctrlKey ? (j(0), y(0), H(0, 0)) : (y(0), H(S, 0)));
          break;
        case "End":
          if (L.preventDefault(), v === "headers") {
            const F = k - 1;
            y(F), Z(F);
          } else if (v === "cells")
            if (L.ctrlKey) {
              const F = _ - 1, O = k - 1;
              j(F), y(O), H(F, O);
            } else {
              const F = k - 1;
              y(F), H(S, F);
            }
          break;
        case " ":
          if (L.preventDefault(), v === "headers" && M === "navigate") {
            const F = t[w];
            F && ee(F.key);
          } else v === "cells" && M === "navigate" && B(S);
          break;
      }
    }, [
      v,
      M,
      w,
      S,
      k,
      _,
      t,
      H,
      Z,
      ee,
      B
    ]);
    nt(() => {
      const L = T.current;
      if (L)
        return L.addEventListener("keydown", J), () => L.removeEventListener("keydown", J);
    }, [J]);
    const A = De(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": m,
        "nhsuk-table--compact": I === "compact"
      },
      h
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
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: C, role: "row", children: t.map((L, G) => {
            const F = r?.find((K) => K.key === L.key), O = !!F, X = v === "headers" && w === G;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: De("sortable-header", {
                  "sortable-header--focused": X
                }),
                role: "columnheader",
                tabIndex: X ? 0 : -1,
                onClick: () => ee(L.key),
                onKeyDown: (K) => {
                  (K.key === "Enter" || K.key === " ") && (K.preventDefault(), ee(L.key));
                },
                "aria-sort": O ? F?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: L.label }),
                  O && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((K) => K.key === L.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: F?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              L.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: b, className: "nhsuk-table__body", role: "rowgroup", children: N.map((L, G) => {
            const F = s === G, O = v === "cells" && S === G;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: De("data-row", {
                  "data-row--selected": F,
                  "data-row--focused": O
                }),
                "aria-selected": F,
                children: t.map((X, K) => {
                  const q = X.tableRenderer ? X.tableRenderer(L) : X.render ? X.render(L) : L[X.key], ne = v === "cells" && S === G && w === K, ue = () => typeof q == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
                      onClick: () => B(G),
                      children: ue()
                    },
                    X.key
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
Yh.displayName = "AriaDataGrid";
const Jn = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: o = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = Ze(null), h = Ze(null), p = Ze(null), x = _e((y, v) => {
    c || (h.current = v, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", v));
  }, [c]), m = _e((y, v) => {
    c || h.current === v || (y.preventDefault(), y.dataTransfer.dropEffect = "move", p.current = v);
  }, [c]), g = _e((y, v) => {
    if (c) return;
    y.preventDefault();
    const $ = h.current;
    if (!$ || $ === v) return;
    const M = e.findIndex((k) => k.key === $), E = e.findIndex((k) => k.key === v);
    if (M !== -1 && E !== -1) {
      const k = [...e], [_] = k.splice(M, 1);
      k.splice(E, 0, _), r(k);
    }
    h.current = null, p.current = null;
  }, [c, e, r]), I = _e(() => {
    h.current = null, p.current = null;
  }, []), D = _e((y) => {
    const v = t.find(($) => $.key === y);
    return v ? v.label : y;
  }, [t]), T = _e((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), C = _e((y) => {
    if (c) return;
    const v = e.map(
      ($) => $.key === y ? { ...$, direction: $.direction === "asc" ? "desc" : "asc" } : $
    );
    r(v);
  }, [e, r, c]), b = _e((y) => {
    if (c) return;
    const v = e.filter(($) => $.key !== y);
    r(v);
  }, [e, r, c]), S = _e(() => {
    c || r([]);
  }, [r, c]), j = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const y = e.map((v, $) => {
      const M = v.direction === "asc" ? "ascending" : "descending";
      return `${$ + 1}. ${D(v.key)} (${M})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const v = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${v}`;
    }
  }, w = ze(() => {
    const y = ["sort-description"];
    return l && y.push("sort-help"), u && y.push(u), y.join(" ");
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
          "aria-describedby": w,
          children: e.map((y, v) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: ($) => x($, y.key),
              onDragOver: ($) => m($, y.key),
              onDrop: ($) => g($, y.key),
              onDragEnd: I,
              onClick: () => C(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ n.jsx(
                st,
                {
                  color: T(v),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => b(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${v + 1}`, children: v + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: D(y.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: ($) => {
                          $.stopPropagation(), C(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${D(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${y.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${y.direction}`,
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
            y.key
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
function Vh(e, t) {
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
const ca = Hn(function(t, r) {
  const {
    dataConfig: o = {},
    tabPanels: a,
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
    errorComponent: I,
    "data-testid": D,
    actions: T,
    actionsMinGap: C = 16,
    forceActionsAbove: b = !1,
    hideTabsIfSingle: S = !1,
    minColumnWidth: j,
    enableColumnCollapse: w = !1,
    minVisibleColumns: y = 2,
    showCollapsedColumnsIndicator: v = !0,
    sortStatusPlacement: $ = "header"
  } = t, M = S && a.length === 1, k = Ze(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, _ = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), N = `${k}-description`, H = `${k}-navigation-help`, {
    dataComparator: Z = (z, te) => JSON.stringify(z) === JSON.stringify(te),
    filterFunction: ee = (z) => z,
    booleanRenderer: B = (z) => z ? "✓" : "✗"
  } = o || {}, J = s !== void 0, A = s ?? 0, [L, G] = Ve({
    focusArea: M ? "headers" : "tabs",
    focusedTabIndex: A,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), F = ze(() => ({
    selectedIndex: A,
    tabLoadingStates: new Array(a.length).fill(!1),
    tabErrors: new Array(a.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(a.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [A]), [O, X] = Ei(Vh, F);
  nt(() => {
    const z = O.tabLoadingStates.length, te = a.length;
    z !== te && X({ type: "ADJUST_ARRAYS", payload: { newLength: te } });
  }, [a.length]), nt(() => {
    J && X({ type: "SET_SELECTED_INDEX", payload: A });
  }, [A, J]), nt(() => {
    G((z) => ({
      ...z,
      focusArea: M ? "headers" : "tabs",
      focusedTabIndex: O.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [O.selectedIndex, M]);
  const K = Ze(null), q = _e((z) => {
    z.shiftKey && (z.key === "ArrowLeft" ? (z.preventDefault(), K.current?.scrollBy({ left: -64, behavior: "smooth" })) : z.key === "ArrowRight" && (z.preventDefault(), K.current?.scrollBy({ left: 64, behavior: "smooth" })));
  }, []), [ne, ue] = Ve({}), [W, ae] = Ve(!1), ce = Ze(null), be = Ze(null), he = _e((z) => {
    const te = a[z];
    if (!te) return [];
    const ge = ne[z] || /* @__PURE__ */ new Set();
    return te.columns.filter((me) => !ge.has(me.key));
  }, [a, ne]), Me = _e((z) => {
    const te = a[z];
    if (!te) return /* @__PURE__ */ new Set();
    if (!w) return /* @__PURE__ */ new Set();
    const ge = K.current?.parentElement;
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
    if (Re <= Ce || xe.length <= y) return /* @__PURE__ */ new Set();
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
    let Ke = /* @__PURE__ */ new Set(), at = Re;
    const $e = xe.length;
    for (const Pe of Ne) {
      if ($e - Ke.size <= y) break;
      if (at - Pe.width >= Ce) {
        for (const Oe of Pe.keys) Ke.add(Oe);
        at -= Pe.width;
      } else
        continue;
    }
    return Ke;
  }, [a, w, j, y]);
  nt(() => {
    if (!w) return;
    const z = () => {
      const ge = Me(O.selectedIndex);
      if (ue((me) => ({ ...me, [O.selectedIndex]: ge })), v && be.current) {
        const me = ge.size;
        be.current.textContent = me > 0 ? `${me} column${me === 1 ? "" : "s"} collapsed` : "All columns visible";
      }
    };
    z();
    const te = new ResizeObserver(z);
    return re.current && te.observe(re.current), () => {
      te.disconnect();
    };
  }, [O.selectedIndex, a, w, Me, v]), nt(() => {
    l && l(O.globalSelectedRowData);
  }, [O.globalSelectedRowData, l]);
  const Ge = _e(
    (z, te) => Z(z, te),
    [Z]
  ), Te = _e(
    (z) => {
      z >= 0 && z < a.length && !a[z].disabled && (X({ type: "SET_SELECTED_INDEX", payload: z }), G((te) => ({
        ...te,
        focusedTabIndex: z,
        focusArea: "tabs"
      })), i?.(z));
    },
    [a, i]
  ), Le = Ze(!1), we = _e(
    (z, te) => {
      if (!te?.force && !Le.current && z === 0) {
        Le.current = !0;
        return;
      }
      Le.current = !0, setTimeout(() => {
        const ge = P.current[z], me = ge?.parentElement;
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
  ), P = Ze([]), Y = Ze([]), se = _e(
    (z, te) => {
      const ge = O.sortConfig || [], me = ge.find(
        (Re) => Re.key === te
      );
      let xe;
      me ? me.direction === "asc" ? xe = ge.map(
        (Re) => Re.key === te ? { ...Re, direction: "desc" } : Re
      ) : xe = ge.filter(
        (Re) => Re.key !== te
      ) : xe = [...ge, { key: te, direction: "asc" }], X({
        type: "SET_SORT",
        payload: xe
      }), a[z].onSort?.(te);
    },
    [O.sortConfig, a]
  ), fe = _e(
    (z) => {
      setTimeout(() => {
        const te = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] th:nth-child(${z + 1})`
        );
        te && te.focus();
      }, 0);
    },
    [O.selectedIndex]
  ), pe = _e(
    (z) => B(z),
    [B]
  ), R = _e(
    (z, te) => {
      setTimeout(() => {
        const ge = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] tbody tr:nth-child(${z + 1}) td:nth-child(${te + 1})`
        );
        ge && ge.focus();
      }, 0);
    },
    [O.selectedIndex]
  );
  nt(() => {
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
  ]), nt(() => {
    M || we(O.selectedIndex);
  }, [O.selectedIndex, we, M]);
  const U = _e(
    (z, te) => {
      const { key: ge } = z, me = he(O.selectedIndex).length || 0;
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
          z.preventDefault(), M ? T && setTimeout(() => {
            const je = de.current;
            if (!je) return;
            je.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )?.focus();
          }, 0) : (G((je) => ({
            ...je,
            focusArea: "tabs",
            focusedTabIndex: O.selectedIndex
          })), we(O.selectedIndex), P.current[O.selectedIndex]?.focus());
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
          const Ce = he(O.selectedIndex)[te]?.key;
          Ce && se(O.selectedIndex, Ce);
          break;
      }
    },
    [
      a,
      O.selectedIndex,
      se,
      G,
      fe,
      R,
      P,
      he
    ]
  ), oe = _e(
    (z, te, ge) => {
      const { key: me } = z, xe = a[O.selectedIndex], Se = xe?.data.length || 0, Re = he(O.selectedIndex).length || 0;
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
            G((at) => ({
              ...at,
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
            ) ? ee(xe.data, O.filters) : xe.data, Ke = O.sortConfig;
            let at = Ne;
            if (Ke && Ke.length > 0) {
              const $e = la(xe.columns, Ke, Rn.Last, o?.sortingOptions);
              at = [...Ne].sort($e);
            }
            if (at[te]) {
              const $e = at[te], Oe = O.globalSelectedRowData && Ge(O.globalSelectedRowData, $e) ? null : $e;
              X({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Oe
              });
            }
          }
          break;
      }
    },
    [
      a,
      O.selectedIndex,
      O.filters,
      O.sortConfig,
      ee,
      Ge,
      X,
      G,
      fe,
      R,
      he
    ]
  ), Q = _e(
    (z, te) => ee(z, te),
    [ee]
  );
  if (Ai(
    r,
    () => ({
      selectTab: (z) => {
        z >= 0 && z < a.length && (X({ type: "SET_SELECTED_INDEX", payload: z }), i?.(z));
      },
      refreshData: (z) => {
        console.log("Refreshing data for tab:", z ?? "all");
      },
      exportData: (z) => {
        const te = z ?? O.selectedIndex, ge = a[te];
        return ge ? ge.data : [];
      },
      getSelectedRows: (z) => O.globalSelectedRowData ? [] : [],
      clearSelection: (z) => {
        X({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (z) => {
        X({ type: "SET_FILTERS", payload: z });
      }
    }),
    [O.selectedIndex, O.selectedRows, a, i]
  ), x)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": D,
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
        "data-testid": D,
        children: I || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: g })
        ] })
      }
    );
  const re = Ze(null), le = Ze(null), de = Ze(null), [ye, ke] = Ve(!0);
  nt(() => {
    if (!T) {
      ke(!1);
      return;
    }
    if (M || b) {
      ke(!1);
      return;
    }
    function z() {
      if (!re.current || !le.current || !de.current) return;
      const me = re.current.clientWidth, xe = Array.from(
        le.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), Se = xe.reduce((ve, Ne) => ve + Ne.offsetWidth, 0), Re = de.current.offsetWidth, Ce = Math.max(8 * (xe.length - 1), 0), je = Se + Ce + Re + C <= me;
      ke(je);
    }
    const te = requestAnimationFrame(() => z()), ge = new ResizeObserver(() => z());
    return re.current && ge.observe(re.current), le.current && ge.observe(le.current), () => {
      cancelAnimationFrame(te), ge.disconnect();
    };
  }, [T, C, b, a.length, M]);
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
      const { key: ge } = z, me = a.length - 1;
      switch (ge) {
        case "ArrowUp": {
          T && !ye && (z.preventDefault(), Qe());
          break;
        }
        case "ArrowLeft": {
          z.preventDefault();
          const xe = te > 0 ? te - 1 : me;
          Te(xe), we(xe), P.current[xe]?.focus();
          break;
        }
        case "ArrowRight": {
          if (z.preventDefault(), te === me && T && ye) {
            Qe();
            return;
          }
          const xe = te < me ? te + 1 : 0;
          Te(xe), we(xe), P.current[xe]?.focus();
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
          z.preventDefault(), Te(0), we(0), P.current[0]?.focus();
          break;
        }
        case "End": {
          z.preventDefault(), Te(me), we(me), P.current[me]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          z.preventDefault(), Te(te);
          break;
        }
        case "Tab": {
          !z.shiftKey && te === me && T && ye && Qe();
          break;
        }
      }
    },
    [a.length, Te, we, T, ye, Qe]
  ), Ae = _e((z) => {
    const { key: te } = z, ge = Ye();
    if (!ge.length) return;
    const me = ge.findIndex((xe) => xe === document.activeElement);
    switch (te) {
      case "ArrowLeft": {
        if (ye)
          if (me > 0)
            z.preventDefault(), lt(me - 1);
          else {
            z.preventDefault();
            const xe = a.length - 1;
            Te(xe), we(xe), P.current[xe]?.focus(), G((Se) => ({ ...Se, focusArea: "tabs", focusedTabIndex: xe }));
          }
        break;
      }
      case "ArrowRight": {
        ye && (me < ge.length - 1 ? (z.preventDefault(), lt(me + 1)) : (z.preventDefault(), Te(0), we(0), P.current[0]?.focus(), G((xe) => ({ ...xe, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ye)
          z.preventDefault(), G((xe) => ({ ...xe, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          z.preventDefault();
          const xe = O.selectedIndex;
          P.current[xe]?.focus(), G((Se) => ({ ...Se, focusArea: "tabs", focusedTabIndex: xe }));
        }
        break;
      }
    }
  }, [Ye, ye, lt, a.length, Te, we, O.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": D,
      ref: re,
      children: [
        d && !_ && /* @__PURE__ */ n.jsx("div", { id: N, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: H,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        $ === "header" && /* @__PURE__ */ n.jsx(
          Jn,
          {
            sortConfig: O.sortConfig || [],
            columns: a.flatMap((z) => z.columns.map((te) => ({ key: te.key, label: te.label }))).filter((z, te, ge) => ge.findIndex((me) => me.key === z.key) === te),
            onSortChange: (z) => {
              X({ type: "SET_SORT", payload: z });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        T && (!ye || M) && /* @__PURE__ */ n.jsx(
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
        !M && /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ye ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? _ ? d : N : H,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: le,
              children: a.map((z, te) => {
                const ge = te === O.selectedIndex, me = z.disabled || f;
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
                      P.current[te] = xe;
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
                      O.tabLoadingStates[te] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      O.tabErrors[te] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  z.id
                );
              })
            }
          ),
          T && ye && /* @__PURE__ */ n.jsx(
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
        w && v && (() => {
          const z = M ? 0 : O.selectedIndex, te = ne[z] || /* @__PURE__ */ new Set();
          if (te.size === 0) return null;
          const ge = a[z], me = ge ? ge.columns.filter((xe) => te.has(xe.key)).map((xe) => xe.label) : [];
          return /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__collapsed-indicator", children: [
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "nhsuk-u-visually-hidden",
                "aria-live": "polite",
                ref: be
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
                  onClick: () => ae((xe) => !xe),
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
          Jn,
          {
            sortConfig: O.sortConfig || [],
            columns: a.flatMap((z) => z.columns.map((te) => ({ key: te.key, label: te.label }))).filter((z, te, ge) => ge.findIndex((me) => me.key === z.key) === te),
            onSortChange: (z) => {
              X({ type: "SET_SORT", payload: z });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        a.map((z, te) => {
          const ge = M ? te === 0 : te === O.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: M ? void 0 : "tabpanel",
              id: M ? void 0 : `panel-${z.id}`,
              "aria-labelledby": M ? void 0 : `tab-${z.id}`,
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
                ) ? Q(z.data, O.filters) : z.data, xe = ze(() => {
                  const Se = O.sortConfig;
                  if (!Se || Se.length === 0) return me;
                  const Re = la(z.columns, Se, Rn.Last, o?.sortingOptions);
                  return [...me].sort(Re);
                }, [me, O.sortConfig, z.columns, o?.sortingOptions]);
                return /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: "aria-tabs-datagrid__scroll",
                    ref: K,
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
                            const Ce = O.sortConfig?.find(
                              (Ne) => Ne.key === Se.key
                            ), je = !!Ce, ve = L.focusArea === "headers" && L.focusedHeaderIndex === Re;
                            return /* @__PURE__ */ n.jsx(
                              "th",
                              {
                                className: `sortable-header ${ve ? "sortable-header--focused" : ""} ${je ? "sortable-header--sorted" : ""}`,
                                role: "columnheader",
                                tabIndex: ve ? 0 : -1,
                                onClick: () => se(te, Se.key),
                                onKeyDown: (Ne) => U(Ne, Re),
                                "aria-sort": je ? Ce?.direction === "asc" ? "ascending" : "descending" : "none",
                                style: { minWidth: Se.minWidth !== void 0 ? typeof Se.minWidth == "number" ? `${Se.minWidth}px` : Se.minWidth : typeof j == "number" ? `${j}px` : j || void 0 },
                                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: Se.label }),
                                  /* @__PURE__ */ n.jsxs(
                                    "div",
                                    {
                                      className: `sort-indicator-container ${je ? `sort-indicator--${Ce?.direction}` : ""}`,
                                      children: [
                                        O.sortConfig && O.sortConfig.length > 0 && O.sortConfig.findIndex(
                                          (Ne) => Ne.key === Se.key
                                        ) !== -1 && /* @__PURE__ */ n.jsx(
                                          "span",
                                          {
                                            className: `sort-priority sort-priority--priority-${O.sortConfig.findIndex((Ne) => Ne.key === Se.key) + 1}`,
                                            "data-priority": O.sortConfig.findIndex(
                                              (Ne) => Ne.key === Se.key
                                            ) + 1,
                                            title: `Sort priority: ${O.sortConfig.findIndex((Ne) => Ne.key === Se.key) + 1}`,
                                            children: O.sortConfig.findIndex(
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
                            const Ce = O.globalSelectedRowData && Ge(O.globalSelectedRowData, Se), je = L.focusArea === "cells" && L.focusedRowIndex === Re;
                            return /* @__PURE__ */ n.jsx(
                              "tr",
                              {
                                role: "row",
                                className: `data-row ${Ce ? "data-row--selected" : ""} ${je ? "data-row--focused" : ""}`,
                                "aria-selected": Ce,
                                children: he(te).map((ve, Ne) => {
                                  const Ke = Se[ve.key];
                                  let at;
                                  ve.tableRenderer ? at = ve.tableRenderer(Se) : ve.render ? at = ve.render(Se) : at = Ke;
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
                                    return typeof Ke == "boolean" && at === Ke ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                      pe(Ke),
                                      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ke ? "Yes" : "No" })
                                    ] }) : rt.isValidElement(at) || typeof at != "object" ? at ?? "" : at;
                                  };
                                  return /* @__PURE__ */ n.jsx(
                                    "td",
                                    {
                                      role: "gridcell",
                                      className: `data-cell ${$e ? "data-cell--focused" : ""}`,
                                      tabIndex: $e ? 0 : -1,
                                      style: { minWidth: ve.minWidth !== void 0 ? typeof ve.minWidth == "number" ? `${ve.minWidth}px` : ve.minWidth : typeof j == "number" ? `${j}px` : j || void 0 },
                                      onClick: () => {
                                        const Lt = O.globalSelectedRowData && Ge(
                                          O.globalSelectedRowData,
                                          Se
                                        ) ? null : Se;
                                        X({
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
          Jn,
          {
            sortConfig: O.sortConfig || [],
            columns: a.flatMap((z) => z.columns.map((te) => ({ key: te.key, label: te.label }))).filter((z, te, ge) => ge.findIndex((me) => me.key === z.key) === te),
            onSortChange: (z) => {
              X({ type: "SET_SORT", payload: z });
            },
            ariaLabel: "Data grid sort configuration"
          }
        )
      ]
    }
  );
}), wr = {
  asc: "↑",
  desc: "↓"
}, Zh = (e) => [...e].sort((t, r) => t.priority - r.priority);
function Go(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function qh(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Jh(e, t) {
  const r = t.find((o) => o.id === e);
  return r ? r.priority > 0 : !1;
}
function Xh(e, t) {
  const r = t.find((a) => a.id === e), o = qh(t);
  return r ? r.priority < o : !1;
}
const rv = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: a,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = ze(() => Zh(e), [e]), f = _e(
    (D) => {
      if (l) return;
      const T = e.map(
        (C) => C.id === D ? {
          ...C,
          direction: C.direction === "asc" ? "desc" : "asc"
        } : C
      );
      t(T);
    },
    [e, t, l]
  ), h = _e(
    (D) => {
      if (l) return;
      const T = e.findIndex((b) => b.id === D);
      if (T <= 0) return;
      const C = [...e];
      [C[T], C[T - 1]] = [
        C[T - 1],
        C[T]
      ], t(Go(C));
    },
    [e, t, l]
  ), p = _e(
    (D) => {
      if (l) return;
      const T = e.findIndex((b) => b.id === D);
      if (T >= e.length - 1 || T === -1) return;
      const C = [...e];
      [C[T], C[T + 1]] = [
        C[T + 1],
        C[T]
      ], t(Go(C));
    },
    [e, t, l]
  ), x = _e(
    (D) => {
      if (l) return;
      const T = e.filter(
        (C) => C.id !== D
      );
      t(Go(T));
    },
    [e, t, l]
  ), m = _e(() => {
    l || t([]);
  }, [t, l]), g = () => {
    if (e.length === 0)
      return o;
    if (a)
      return a;
    const D = u.map((T, C) => {
      const b = T.direction === "asc" ? "ascending" : "descending";
      return `${C + 1}. ${T.label} (${b})`;
    });
    if (D.length === 1)
      return `Sorted by: ${D[0]}`;
    if (D.length === 2)
      return `Sorted by: ${D.join(" and ")}`;
    {
      const T = D.pop();
      return `Sorted by: ${D.join(", ")}, and ${T}`;
    }
  }, I = ze(() => {
    const D = ["sort-description"];
    return i && D.push("sort-help"), d && D.push(d), D.join(" ");
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
        "aria-describedby": I,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((D) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                st,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(D.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: D.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: D.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(D.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${D.label}. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: D.direction === "asc" ? wr.asc : wr.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(D.id),
                          disabled: l || !Jh(D.id, e),
                          "aria-label": `Move ${D.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(D.id),
                          disabled: l || !Xh(D.id, e),
                          "aria-label": `Move ${D.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            D.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
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
      wr.asc,
      "/",
      wr.desc,
      " ",
      "to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ns = (e, t) => t.map((r) => ({
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
})), da = [
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
], Kh = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Qh = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [o, a] = t.ewsScoreRange;
    if (r.ews_score < o || r.ews_score > a) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, ep = (e) => {
  if (typeof e == "boolean") {
    const r = da.find((o) => o.value === e);
    return r ? r.icon : null;
  }
  const t = da.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, tp = (e) => `${e.name}-${e.bed_name}`, np = () => ({
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
}), ov = (e) => {
  const t = np();
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
}, rp = {
  dataComparator: Kh,
  filterFunction: Qh,
  booleanRenderer: ep,
  getDataId: tp
};
function ei(e, t, r) {
  const {
    primaryField: o,
    secondaryFields: a = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = r, f = t.find((T) => T.key === o), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[o || "name"] || "Untitled", p = () => a.filter((C) => !i.includes(C) && e[C]).slice(0, 3).map((C) => {
    const b = t.find((y) => y.key === C), S = e[C], j = d[C] ? d[C](S, e) : b?.cardRenderer ? b.cardRenderer(e) : b?.render ? b.render(e) : S;
    return `${b?.label || C}: ${j}`;
  }).join(" • "), x = () => s.length === 0 ? null : s.filter((T) => e[T.fieldKey] !== void 0).map((T) => {
    const C = e[T.fieldKey], b = T.render ? T.render(C, e) : C;
    return `<span class="nhsuk-tag ${op(T, C)}">${b}</span>`;
  }).join(""), m = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", g = x(), I = p(), D = g ? `${I}${g ? `<div class="adaptive-card__badges">${g}</div>` : ""}` : I;
  return {
    variant: m(),
    heading: String(h),
    descriptionHtml: D,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${h}`
  };
}
function op(e, t) {
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
const ap = {
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
}, vl = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: o,
  priority: a = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${a} healthcare-card--${s}`,
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
            st,
            {
              color: ip(kl(u)),
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
            /* @__PURE__ */ n.jsx("dd", { children: h })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            wt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), o?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            wt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), o?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            wt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (p) => {
                p.stopPropagation(), o?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, wl = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        st,
        {
          color: lp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
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
] }), Sl = ({
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
        st,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
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
] }), _l = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: o = "medium"
}) => {
  const a = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${sp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
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
              onClick: (h) => {
                h.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            wt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (h) => {
                h.stopPropagation(), r?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function kl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function sp(e) {
  return kl(e);
}
function ip(e) {
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
function lp(e) {
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
const cp = [
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
], Cl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", dp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, up = (e) => Cl(e) === "high" || e.status === "urgent" ? "primary" : "default", fp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, hp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: cp,
  hiddenFields: [],
  getPriority: Cl,
  getStatus: dp,
  getVariant: up,
  fieldRenderers: fp,
  classPrefix: "adaptive-card--healthcare"
}, pp = {
  patient: (e, t, r) => {
    const o = r.getPriority?.(e) || "medium", a = r.getStatus?.(e) || "active", s = a === "urgent" ? "active" : a;
    return /* @__PURE__ */ n.jsx(
      vl,
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
      wl,
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
      Sl,
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
      _l,
      {
        data: e,
        columns: t,
        priority: o,
        onSelect: (a) => console.log("Vitals selected:", a),
        onAction: (a, s) => console.log("Vitals action:", a, s)
      }
    );
  }
}, mp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ti = {
  name: "healthcare",
  defaultCardConfig: hp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: pp,
  fieldTypes: mp
};
function ni(e) {
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
function ri(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function gp(e, t) {
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
function xp(e, t) {
  const [r, o] = Ve("cards");
  return nt(() => {
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
function bp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function yp(e, t, r, o) {
  const a = o ? { ...o.defaultCardConfig, ...r } : { ...ap, ...r };
  if (o && o.cardTemplates) {
    const s = bp(e);
    if (s && o.cardTemplates[s]) {
      const i = o.cardTemplates[s](
        e,
        t,
        a
      );
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return a.cardTemplate && a.cardTemplate(
    e,
    t,
    a
  ), ei(e, t, a);
}
const av = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: o = {},
  enableAdvancedSorting: a = !1,
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
  selectedIndex: I,
  onTabChange: D,
  ariaLabel: T = "Data grid",
  ariaDescription: C,
  orientation: b = "horizontal",
  id: S,
  disabled: j = !1,
  className: w,
  ...y
}) => {
  const v = xp(e, t), $ = I !== void 0, M = I ?? 0, E = ze(() => {
    if (m.some(
      (U) => U.data && U.data.length > 0 && ri(U.data)
    )) {
      const U = ni(r);
      return {
        ...ti.defaultCardConfig,
        ...U
      };
    } else
      return ni(r);
  }, [r, m]), k = ze(() => m.some(
    (U) => U.data && U.data.length > 0 && ri(U.data)
  ) ? ti : void 0, [m]), _ = ze(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(m.length).fill(!1),
    tabErrors: new Array(m.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(m.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, m.length]), [N, H] = Ei(gp, _), Z = Ze([]), ee = Ze([]), B = Ze([]), J = Ze(null), [A, L] = Ve({
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
      const U = R.current, oe = U.querySelectorAll(
        ".aria-tabs-datagrid-adaptive__card-wrapper"
      );
      if (oe.length === 0)
        return { columns: 1, rows: 0 };
      const Q = U.offsetWidth, le = oe[0].offsetWidth, de = Math.floor(Q / le) || 1, ye = Math.ceil(oe.length / de);
      return { columns: de, rows: ye };
    },
    []
  ), F = _e((R, U) => ({
    row: Math.floor(R / U),
    col: R % U
  }), []), O = _e(
    (R, U, oe) => R * oe + U,
    []
  ), X = _e(
    (R, U, oe, Q) => {
      const { row: re, col: le } = F(R, Q);
      let de = re, ye = le;
      switch (U) {
        case "up":
          de = Math.max(0, re - 1);
          break;
        case "down":
          de = Math.min(Math.floor((oe - 1) / Q), re + 1);
          break;
        case "left":
          ye = Math.max(0, le - 1);
          break;
        case "right":
          ye = Math.min(Q - 1, le + 1);
          break;
      }
      const ke = O(de, ye, Q);
      return Math.min(ke, oe - 1);
    },
    [F, O]
  );
  nt(() => {
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
  ]), nt(() => {
    const R = () => {
      if (v === "cards" && J.current) {
        const { columns: Q, rows: re } = G(J);
        L((le) => ({
          ...le,
          gridColumns: Q,
          gridRows: re
        }));
      }
    }, U = setTimeout(R, 200), oe = () => {
      setTimeout(R, 100);
    };
    return window.addEventListener("resize", oe), () => {
      clearTimeout(U), window.removeEventListener("resize", oe);
    };
  }, [v, m, G]), nt(() => {
    const R = N.tabLoadingStates.length, U = m.length;
    R !== U && H({ type: "ADJUST_ARRAYS", payload: { newLength: U } });
  }, [m.length, N.tabLoadingStates.length]), nt(() => {
    $ && I !== N.selectedIndex && H({ type: "SET_SELECTED_INDEX", payload: I });
  }, [$, I, N.selectedIndex]);
  const K = _e(
    (R) => {
      R >= 0 && R < m.length && !m[R].disabled && (H({ type: "SET_SELECTED_INDEX", payload: R }), D?.(R));
    },
    [m, D]
  ), q = _e((R) => {
    console.log("Card selected:", R), H({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: R
    });
  }, []), ne = _e((R) => {
    const U = ee.current[R];
    U && (U.focus(), U.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ue = _e((R) => {
    const U = ee.current[R];
    if (!U) return [];
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
    ].join(", "), Q = U.querySelectorAll(
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
  }, []), W = Ze(null), ae = _e((R) => {
    const U = W.current;
    if (!U) return;
    const oe = document.createElement("div");
    oe.setAttribute("aria-live", "polite"), oe.setAttribute("aria-atomic", "true"), oe.className = "sr-only", oe.textContent = R, U.appendChild(oe), setTimeout(() => {
      U.contains(oe) && U.removeChild(oe);
    }, 1e3);
  }, []), ce = _e((R) => {
    const U = R.filter((Q) => Q.sortable !== !1), oe = [
      { value: "", label: "Sort by..." }
    ];
    return U.forEach((Q) => {
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
  }, []), be = _e(
    (R, U) => U ? [...R].sort((oe, Q) => {
      const re = oe[U.key], le = Q[U.key];
      if (re == null && le == null) return 0;
      if (re == null) return 1;
      if (le == null) return -1;
      const de = Number(re), ye = Number(le);
      if (!isNaN(de) && !isNaN(ye))
        return U.direction === "asc" ? de - ye : ye - de;
      const ke = String(re).toLowerCase(), Be = String(le).toLowerCase(), Ye = ke.localeCompare(Be);
      return U.direction === "asc" ? Ye : -Ye;
    }) : R,
    []
  ), he = _e(
    (R) => {
      if (!R) {
        L((ke) => ({ ...ke, cardSortConfig: null })), ae("Card sorting cleared");
        return;
      }
      const [U, oe] = R.split("-"), Q = { key: U, direction: oe };
      L((ke) => ({ ...ke, cardSortConfig: Q }));
      const de = m[N.selectedIndex]?.columns.find((ke) => ke.key === U)?.label || U;
      ae(
        `Cards sorted by ${de} in ${oe === "asc" ? "ascending" : "descending"} order`
      );
    },
    [m, N.selectedIndex, ae]
  ), Me = _e(
    (R) => {
      const Q = m[N.selectedIndex]?.columns.find(
        (le) => le.key === R.key
      )?.label || R.key, re = R.direction === "asc" ? "ascending" : "descending";
      return `${Q} (${re})`;
    },
    [m, N.selectedIndex]
  ), Ge = _e(
    (R) => {
      const U = m[N.selectedIndex];
      if (a) {
        const oe = N.sortConfig;
        return !oe || oe.length === 0 ? R : [...R].sort((Q, re) => {
          for (const { key: le, direction: de } of oe) {
            let ye = Q[le], ke = re[le];
            const Be = U?.columns.find(
              (z) => z.key === le
            );
            if (Be?.cardRenderer ? (ye = Be.cardRenderer(Q), ke = Be.cardRenderer(re)) : Be?.render && (ye = Be.render(Q), ke = Be.render(re)), ye == null && ke == null) continue;
            if (ye == null) return de === "asc" ? -1 : 1;
            if (ke == null) return de === "asc" ? 1 : -1;
            const Ye = Number(ye), lt = Number(ke);
            if (!isNaN(Ye) && !isNaN(lt)) {
              const z = Ye - lt;
              if (z !== 0) return de === "asc" ? z : -z;
              continue;
            }
            const Qe = String(ye).toLowerCase(), ie = String(ke).toLowerCase(), Ae = Qe.localeCompare(ie);
            if (Ae !== 0) return de === "asc" ? Ae : -Ae;
          }
          return 0;
        });
      } else
        return be(R, A.cardSortConfig);
    },
    [
      a,
      N.sortConfig,
      A.cardSortConfig,
      be,
      m,
      N.selectedIndex
    ]
  ), Te = _e(
    (R, U) => {
      const oe = ue(R), Q = oe[U];
      if (Q) {
        Q.element.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
        const re = `Focused on ${Q.label}, ${Q.type} ${U + 1} of ${oe.length} within card`;
        ae(re);
      }
    },
    [ue, ae]
  ), Le = _e((R) => {
    Z.current[R]?.focus();
  }, []), we = _e(() => {
    const R = B.current[0];
    if (!R) return [];
    const U = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), oe = R.querySelectorAll(
      U
    );
    return Array.from(oe);
  }, []), P = _e(
    (R) => {
      if (R === 0) {
        const U = B.current[0], oe = U?.querySelector(
          ".sort-controls-row"
        );
        if (oe) {
          oe.setAttribute("tabindex", "-1"), oe.focus();
          const re = `Sort controls group with ${we().length} interactive elements. Press Enter or Space to begin navigating controls.`;
          ae(re);
        } else U && U.focus();
      } else {
        const U = we(), oe = R - 1, Q = U[oe];
        if (Q) {
          Q.focus();
          const re = Q.tagName.toLowerCase() === "select", le = Q.tagName.toLowerCase() === "button", de = re ? "dropdown" : le ? "button" : "control", ye = re ? ". Use Space key to open dropdown" : "", ke = `${de} ${oe + 1} of ${U.length}${ye}`;
          ae(ke);
        }
      }
    },
    [we, ae]
  ), Y = _e(
    (R, U) => {
      const { key: oe } = R, Q = m[N.selectedIndex], re = Q?.data.length || 0;
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
            if (R.preventDefault(), U === 0)
              L((ke) => ({
                ...ke,
                focusArea: "sort-controls",
                focusedSortControlIndex: 0,
                isSortControlsActive: !1
              })), P(0);
            else {
              const ke = X(
                U,
                "up",
                re,
                A.gridColumns
              );
              ke !== U && (L((Be) => ({
                ...Be,
                focusedCardIndex: ke
              })), ne(ke), ae(
                `Moved to card ${ke + 1} of ${re}`
              ));
            }
            break;
          case "ArrowDown":
            R.preventDefault();
            const le = X(
              U,
              "down",
              re,
              A.gridColumns
            );
            le !== U && (L((ke) => ({
              ...ke,
              focusedCardIndex: le
            })), ne(le), ae(
              `Moved to card ${le + 1} of ${re}`
            ));
            break;
          case "ArrowLeft":
            R.preventDefault();
            const de = X(
              U,
              "left",
              re,
              A.gridColumns
            );
            de !== U ? (L((ke) => ({
              ...ke,
              focusedCardIndex: de
            })), ne(de), ae(
              `Moved to card ${de + 1} of ${re}`
            )) : N.selectedIndex > 0 && (H({
              type: "SET_SELECTED_INDEX",
              payload: N.selectedIndex - 1
            }), L((ke) => ({ ...ke, focusArea: "tabs" })), setTimeout(() => Le(N.selectedIndex - 1), 0));
            break;
          case "ArrowRight":
            R.preventDefault();
            const ye = X(
              U,
              "right",
              re,
              A.gridColumns
            );
            ye !== U ? (L((ke) => ({
              ...ke,
              focusedCardIndex: ye
            })), ne(ye), ae(
              `Moved to card ${ye + 1} of ${re}`
            )) : N.selectedIndex < m.length - 1 && (H({
              type: "SET_SELECTED_INDEX",
              payload: N.selectedIndex + 1
            }), L((ke) => ({ ...ke, focusArea: "tabs" })), setTimeout(() => Le(N.selectedIndex + 1), 0));
            break;
          case "Enter":
            if (Q?.data[U]) {
              R.preventDefault(), L((Be) => ({
                ...Be,
                selectedCardIndex: U
              }));
              const ke = ue(U);
              ke.length > 0 ? (L((Be) => ({
                ...Be,
                focusArea: "card",
                isCardNavigationActive: !0,
                focusedCardElementIndex: 0,
                cardElements: ke,
                selectedCardIndex: U
                // Ensure selection is maintained
              })), ae(
                `Card ${U + 1} selected and navigation activated. ${ke.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`
              )) : ae(`Card ${U + 1} selected.`);
            }
            break;
          case " ":
            if (Q?.data[U]) {
              R.preventDefault(), L((Be) => ({
                ...Be,
                selectedCardIndex: Be.selectedCardIndex === U ? -1 : U
              }));
              const ke = A.selectedCardIndex === U;
              ae(
                `Card ${U + 1} ${ke ? "deselected" : "selected"}.`
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
          })), Te(U, le);
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
          })), Te(U, de);
          break;
        case "Enter":
          R.preventDefault();
          const ye = A.cardElements[A.focusedCardElementIndex];
          ye && (ye.element.click(), ae(`Activated ${ye.label}`));
          break;
        case " ":
          R.preventDefault();
          const ke = A.cardElements[A.focusedCardElementIndex];
          if (ke) {
            const Be = new MouseEvent("dblclick", { bubbles: !0 });
            ke.element.dispatchEvent(Be), ae(
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
          })), setTimeout(() => ne(U), 0), ae(
            "Exited card navigation, returned to card level"
          );
          break;
        case "Home":
          R.preventDefault(), A.cardElements.length > 0 && (L((Be) => ({
            ...Be,
            focusedCardElementIndex: 0
          })), Te(U, 0));
          break;
        case "End":
          if (R.preventDefault(), A.cardElements.length > 0) {
            const Be = A.cardElements.length - 1;
            L((Ye) => ({
              ...Ye,
              focusedCardElementIndex: Be
            })), Te(U, Be);
          }
          break;
      }
    },
    [
      A,
      N.selectedIndex,
      m,
      q,
      ne,
      Le,
      L,
      ue,
      Te,
      ae
    ]
  ), se = _e((R) => {
    const U = Z.current[R], oe = U?.parentElement;
    if (!U || !oe) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const Q = U.getBoundingClientRect(), re = oe.getBoundingClientRect();
    Q.left >= re.left && Q.right <= re.right || (console.log("Tab not visible, scrolling into view (mobile)"), U.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), fe = _e(
    (R, U) => {
      if (v !== "cards")
        return;
      const { key: oe } = R;
      switch (oe) {
        case "ArrowLeft":
          R.preventDefault();
          const Q = U > 0 ? U - 1 : m.length - 1;
          K(Q), L((ye) => ({ ...ye, focusedTabIndex: Q })), Z.current[Q]?.focus(), se(Q);
          break;
        case "ArrowRight":
          R.preventDefault();
          const re = U < m.length - 1 ? U + 1 : 0;
          K(re), L((ye) => ({ ...ye, focusedTabIndex: re })), Z.current[re]?.focus(), se(re);
          break;
        case "ArrowDown":
          R.preventDefault();
          const le = m[N.selectedIndex];
          le && le.columns && le.columns.length > 0 ? (L((ye) => ({
            ...ye,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), P(0)) : (L((ye) => ({
            ...ye,
            focusArea: "cards",
            focusedCardIndex: 0
          })), ne(0));
          break;
        case "Home":
          R.preventDefault(), K(0), L((ye) => ({ ...ye, focusedTabIndex: 0 })), Z.current[0]?.focus(), se(0);
          break;
        case "End":
          R.preventDefault();
          const de = m.length - 1;
          K(de), L((ye) => ({ ...ye, focusedTabIndex: de })), Z.current[de]?.focus(), se(de);
          break;
        case "Enter":
        case " ":
          R.preventDefault(), K(U);
          break;
      }
    },
    [
      m.length,
      K,
      v,
      ne,
      L,
      se
    ]
  ), pe = _e(
    (R, U) => {
      if (v !== "cards")
        return;
      const { key: oe } = R, Q = m[N.selectedIndex];
      if (U === 0 && !A.isSortControlsActive) {
        switch (oe) {
          case "ArrowUp":
            R.preventDefault(), L((le) => ({
              ...le,
              focusArea: "tabs",
              isSortControlsActive: !1
            })), Le(N.selectedIndex);
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
              })), P(1);
              const le = `Entered sort controls navigation mode. ${re.length} controls available. Use arrow keys to navigate between controls.`;
              ae(le);
            }
            break;
          case "Escape":
            R.preventDefault(), L((le) => ({
              ...le,
              isSortControlsActive: !1,
              focusArea: "tabs"
            })), Le(N.selectedIndex);
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
            })), P(de);
            break;
          case "ArrowRight":
            R.preventDefault();
            const ye = A.focusedSortControlIndex < le ? A.focusedSortControlIndex + 1 : 1;
            L((ke) => ({
              ...ke,
              focusedSortControlIndex: ye
            })), P(ye);
            break;
          case "ArrowDown":
            if (R.preventDefault(), A.isSortControlsActive) {
              const ke = A.focusedSortControlIndex < le ? A.focusedSortControlIndex + 1 : 1;
              L((Be) => ({
                ...Be,
                focusedSortControlIndex: ke
              })), P(ke);
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
            })), P(0);
            break;
          case "Escape":
            R.preventDefault(), L((ke) => ({
              ...ke,
              isSortControlsActive: !1,
              focusArea: "sort-controls",
              focusedSortControlIndex: 0
            })), P(0);
            break;
        }
      }
    },
    [
      v,
      m,
      N.selectedIndex,
      A.isSortControlsActive,
      A.focusedSortControlIndex,
      P,
      Le,
      ne,
      L,
      ae
    ]
  );
  if (v === "cards") {
    const R = !!d && m.length === 1, U = R ? m[0] : m[N.selectedIndex];
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${w || ""}`,
        children: [
          /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
            !R && /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tablist",
                "aria-label": T,
                "aria-describedby": `${C || ""} ${S ? `${S}-navigation-help` : ""}`.trim(),
                "aria-orientation": b,
                className: "aria-tabs-datagrid__tabs",
                children: m.map((oe, Q) => {
                  const re = Q === N.selectedIndex, le = oe.disabled || j;
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
                        Z.current[Q] = de;
                      },
                      onClick: () => K(Q),
                      onKeyDown: (de) => fe(de, Q),
                      disabled: le,
                      className: [
                        "aria-tabs-datagrid__tab",
                        re ? "aria-tabs-datagrid__tab--selected" : "",
                        le ? "aria-tabs-datagrid__tab--disabled" : ""
                      ].filter(Boolean).join(" "),
                      children: [
                        /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: oe.label }),
                        N.tabLoadingStates[Q] && /* @__PURE__ */ n.jsx(
                          "span",
                          {
                            className: "aria-tabs-datagrid__tab-loading",
                            "aria-hidden": "true",
                            children: "⏳"
                          }
                        ),
                        N.tabErrors[Q] && /* @__PURE__ */ n.jsx(
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
            s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
          ] }),
          U && U.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: a ? (
            /* Advanced sorting with SortStatusControl: place above cards for 'header'/'above' (default), hide when 'none' */
            /* @__PURE__ */ n.jsx(n.Fragment, { children: (!x || x === "header" || x === "above") && /* @__PURE__ */ n.jsx(
              Jn,
              {
                sortConfig: N.sortConfig || [],
                columns: U.columns.map((oe) => ({ key: oe.key, label: oe.label })),
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
                        htmlFor: `card-sort-${U.id}`,
                        className: "sort-label",
                        children: "Sort cards by"
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      Mr,
                      {
                        id: `card-sort-${U.id}`,
                        name: `card-sort-${U.id}`,
                        value: A.cardSortConfig ? `${A.cardSortConfig.key}-${A.cardSortConfig.direction}` : "",
                        onChange: (oe) => he(oe.target.value),
                        className: "sort-select",
                        children: ce(U.columns).map((oe) => /* @__PURE__ */ n.jsx("option", { value: oe.value, children: oe.label }, oe.value))
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
              ref: J,
              className: "aria-tabs-datagrid-adaptive__cards",
              role: "grid",
              "aria-label": `${U?.label || "Data"} cards in ${A.gridRows} rows and ${A.gridColumns} columns`,
              "aria-rowcount": A.gridRows,
              "aria-colcount": A.gridColumns,
              id: `panel-${U?.id}`,
              "aria-labelledby": `tab-${U?.id}`,
              children: Ge(U?.data || []).map((oe, Q) => {
                const re = A.selectedCardIndex === Q, le = A.focusedCardIndex === Q && A.focusArea === "cards", de = A.focusedCardIndex === Q && A.focusArea === "card" && A.isCardNavigationActive, ye = Q === 0 && A.focusArea !== "cards", ke = le || ye, Be = F(Q, A.gridColumns);
                if (r.cardTemplate) {
                  const Qe = r.cardTemplate(
                    oe,
                    U.columns
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
                const Ye = yp(
                  oe,
                  U.columns,
                  E,
                  k
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
                          gl,
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
          a && x === "below" && U && U.columns && /* @__PURE__ */ n.jsx(
            Jn,
            {
              sortConfig: N.sortConfig || [],
              columns: U.columns.map((oe) => ({ key: oe.key, label: oe.label })),
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
  return v === "hybrid" ? /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${w || ""}`,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
        /* @__PURE__ */ n.jsx(
          ca,
          {
            tabPanels: m,
            dataConfig: g,
            ariaLabel: T,
            ariaDescription: C,
            orientation: b,
            id: S,
            disabled: j,
            selectedIndex: I,
            onTabChange: D,
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
        i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${w || ""}`,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
        /* @__PURE__ */ n.jsx(
          ca,
          {
            tabPanels: m,
            dataConfig: g,
            ariaLabel: T,
            ariaDescription: C,
            orientation: b,
            id: S,
            disabled: j,
            selectedIndex: I,
            onTabChange: D,
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
        i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
      ]
    }
  );
}, Nl = (e) => {
  const t = da.find((r) => r.value === e);
  return t ? t.icon : null;
}, vp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [o, a] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < o || s > a) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((o) => r.tags.includes(o)));
  }) : e,
  booleanRenderer: (e) => Nl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, wp = (e) => ns(e, [
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
]), Sp = {
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
  booleanRenderer: (e) => Nl(e),
  getDataId: (e) => `financial-${e.id}`
}, _p = (e) => ns(e, [
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
]), kp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: vp,
    createTabs: wp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Sp,
    createTabs: _p
  }
}, oi = (e, t) => {
  const r = kp[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, jl = [
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
], Cp = [
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
], Np = [
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
], jp = [
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
], ai = [
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
], si = [
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
], ii = [
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
}, Ip = () => [
  {
    id: "patients",
    label: "Patients",
    data: jl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      vl,
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
    data: Cp,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      wl,
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
    data: Np,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Sl,
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
    data: jp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      _l,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, o) => console.log("Vitals action:", r, o),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Dp = () => {
  const [e, t] = Ve("healthcare"), r = ze(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: rp,
      tabPanels: Ip(),
      data: jl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...oi("ecommerce", ai),
      data: ai
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...oi("financial", si),
      data: si
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Mp,
      tabPanels: ns(ii, [
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
      data: ii
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
        wt,
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
      ca,
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
}, sv = Dp, Ml = (e) => /* @__PURE__ */ n.jsx(Oi, { ...e }), iv = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: o = bn.TwoThirds,
  mainWrapperSize: a,
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
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ml, { ...s }),
    /* @__PURE__ */ n.jsx(Zi, { ...g }),
    /* @__PURE__ */ n.jsx(Ml, { className: x, ...m, children: /* @__PURE__ */ n.jsx(Ui, { size: a, children: /* @__PURE__ */ n.jsx(sn, { children: /* @__PURE__ */ n.jsxs(Kn, { width: o, children: [
      t && /* @__PURE__ */ n.jsx(Kt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(qi, { ...l })
  ] });
}, lv = ({
  children: e,
  title: t,
  pageHeadingProps: r,
  columnWidth: o = bn.TwoThirds,
  mainWrapperSize: a = "small",
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
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ml, { ...s }),
    /* @__PURE__ */ n.jsx(Zi, { ...x }),
    /* @__PURE__ */ n.jsxs(Ml, { className: h, ...p, children: [
      c && /* @__PURE__ */ n.jsx(Xn, { ...c }),
      /* @__PURE__ */ n.jsx(Ui, { size: a, children: /* @__PURE__ */ n.jsx(sn, { children: /* @__PURE__ */ n.jsxs(Kn, { width: o, children: [
        t && /* @__PURE__ */ n.jsx(Kt, { style: { marginTop: "3rem" }, size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(qi, { ...l })
  ] });
};
function Tp(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: o = "nsvDrill" } = e, [a, s] = V.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = V.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(o) === "1");
  return V.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    a ? c.set(r, String(a)) : c.delete(r), c.set(o, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [a, i, t, r, o]), { selectedId: a, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Lp = ({
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
), $p = ({
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
), zr = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: o,
  element: a = "a",
  onClick: s,
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: a === "button" ? /* @__PURE__ */ n.jsx("button", { className: c, type: "button", onClick: s, ...i, children: d() }) : /* @__PURE__ */ n.jsx("a", { className: c, href: r, ...i, children: d() }) });
};
zr.displayName = "ForwardLink";
const Ap = ({
  show: e,
  label: t,
  contentHeaderLevel: r,
  detailActive: o,
  headerContext: a,
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
  const p = `h${r}`, x = t ? V.createElement(
    p,
    {
      style: {
        marginLeft: o ? 32 : 0,
        marginRight: o ? 32 : 0
      }
    },
    t
  ) : null, m = o ? /* @__PURE__ */ n.jsx(
    Xn,
    {
      element: "button",
      text: s,
      style: { marginRight: 16 },
      onClick: l
    }
  ) : void 0, g = h ? void 0 : /* @__PURE__ */ n.jsx(zr, { element: "button", text: i, onClick: c });
  if (d)
    return /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: d({
      item: u,
      detailActive: o,
      context: a,
      backLink: m,
      defaultHeading: x
    }) });
  const I = u && f ? typeof f == "function" ? f(u) : f : null;
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
                I && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: I })
              ]
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: g })
  ] }) });
};
function Ep({
  layout: e,
  items: t,
  getId: r,
  selectedId: o,
  isLoading: a,
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
  const [g, I] = V.useState(
    () => d === "first" ? 0 : -1
  ), D = V.useRef(0);
  V.useEffect(() => {
    if (typeof m == "number" || g < 0 || !h?.current) return;
    const j = Array.from(
      h.current.querySelectorAll("[data-nav-item]")
    )[g];
    if (j) {
      document.activeElement !== j && j.focus(), D.current = g;
      const w = t[g];
      u?.(w ? r(w) : void 0, w, g);
    }
  }, [m, g, t, u, r, h]);
  const T = (S) => {
    if (p) return p(S);
    const j = c === "vertical" ? "ArrowDown" : "ArrowRight", w = c === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (S.key === j)
      S.preventDefault(), I((y) => Math.min(t.length - 1, y + 1));
    else if (S.key === w)
      S.preventDefault(), I((y) => Math.max(0, y - 1));
    else if (S.key === "Home")
      S.preventDefault(), I(0);
    else if (S.key === "End")
      S.preventDefault(), I(t.length - 1);
    else if (S.key === "Enter" || S.key === " ") {
      S.preventDefault();
      const y = t[g];
      y && !y.disabled && l(r(y), y, g);
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
            const w = r(S), y = w === o;
            return /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": y,
                children: /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    id: String(w),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": y || void 0,
                    "data-disabled": S.disabled || void 0,
                    disabled: S.disabled,
                    onClick: () => !S.disabled && l(w, S, j),
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
  const C = "nsv-nav-instructions", b = V.useMemo(() => V.memo(
    ({
      item: S,
      idx: j,
      selected: w,
      focused: y
    }) => {
      const v = r(S), $ = S.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: y ? 0 : -1,
        onClick: () => {
          D.current = j, l(v, S, j);
        },
        onKeyDown: (M) => {
          (M.key === "Enter" || M.key === " ") && (M.preventDefault(), D.current = j, l(v, S, j));
        }
      };
      return /* @__PURE__ */ n.jsxs(
        "li",
        {
          id: String(v),
          "data-nav-item": !0,
          className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
          role: "option",
          "aria-selected": w,
          "aria-current": w ? "true" : void 0,
          "data-selected": w || void 0,
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
        ref: h,
        className: "nhs-navigation-split-view__list",
        onKeyDown: T,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": C,
        "aria-activedescendant": o ? String(o) : void 0,
        children: [
          t.map((S, j) => /* @__PURE__ */ n.jsx(
            b,
            {
              item: S,
              idx: j,
              selected: r(S) === o,
              focused: /* @__PURE__ */ (() => {
                const w = typeof m == "number" ? m : g;
                return j === w || w === -1 && j === 0 && d === "first";
              })(),
              "data-just-selected": r(S) === f ? "true" : void 0
            },
            String(r(S))
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
        id: C,
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
function li() {
  return typeof window > "u" ? Cn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function rs() {
  const [e, t] = V.useState(li());
  V.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(li());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = V.useCallback((s) => e >= Cn[s], [e]), o = V.useCallback((s) => e < Cn[s], [e]), a = V.useCallback((s, i) => e >= Cn[s] && e < Cn[i], [e]);
  return {
    width: e,
    up: r,
    down: o,
    between: a,
    /** Raw numeric values */
    values: Cn
  };
}
function cv(e) {
  const { width: t, values: r } = rs();
  let o = e.base;
  const a = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of a) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (o = e[s]);
  }
  return o;
}
function Pp(e, t, r) {
  const { up: o } = rs(), [a, s] = V.useState(!1);
  V.useEffect(() => s(!0), []);
  const i = a && o("medium"), l = a && o("xlarge");
  let c;
  return e ? c = e : i ? c = "two-column" : c = "list", !e && t && r && l && (c = "three-column"), { effectiveLayout: c, hydrated: a, isAtLeastMedium: i, isAtLeastXlarge: l };
}
function Fp(e) {
  const {
    enabled: t,
    isAtLeastMedium: r,
    initiallyCollapsed: o,
    persist: a,
    storageKey: s,
    urlParam: i,
    onChange: l
  } = e, c = V.useMemo(() => {
    if (a && (a === "url" || a === "both") && typeof window < "u") {
      const p = new URLSearchParams(window.location.search).get(i);
      if (p === "1") return !0;
      if (p === "0") return !1;
    }
    if (a && (a === "localStorage" || a === "both") && typeof window < "u")
      try {
        const h = window.localStorage.getItem(s);
        if (h === "1") return !0;
        if (h === "0") return !1;
      } catch {
      }
    return o;
  }, [a, o, s, i]), [d, u] = V.useState(c);
  V.useEffect(() => {
    l?.(d);
  }, [d, l]);
  const f = V.useCallback(() => {
    t && r && u((h) => !h);
  }, [t, r]);
  return V.useEffect(() => {
    if (!(!a || typeof window > "u")) {
      if (a === "localStorage" || a === "both")
        try {
          window.localStorage.setItem(s, d ? "1" : "0");
        } catch {
        }
      if (a === "url" || a === "both") {
        const h = new URLSearchParams(window.location.search);
        h.set(i, d ? "1" : "0");
        const p = `${window.location.pathname}?${h.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", p);
      }
    }
  }, [d, a, s, i]), { collapsed: d, toggle: f };
}
function Rp(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: o,
    onSelectionChange: a,
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
    getId: g = (Ie) => Ie.id,
    orientation: I = "vertical",
    autoEnableThirdColumn: D = !0,
    onDrillChange: T,
    navigationInstructions: C = "Use arrow keys to navigate, Enter to open.",
    initialFocus: b = "first",
    skipFocusOnSelect: S = !1,
    skipAnnouncements: j = !1,
    onFocusChange: w,
    syncUrl: y = !1,
    urlParamSelected: v = "nsv",
    urlParamDrill: $ = "nsvDrill",
    urlSyncDebounceMs: M = 0,
    lazySecondary: E = !1,
    navFooter: k,
    collapsibleNav: _ = !1,
    navInitiallyCollapsed: N = !1,
    onNavCollapseChange: H,
    collapseToggleLabelShow: Z = "Show navigation",
    collapseToggleLabelHide: ee = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: J,
    persistNavCollapsed: A,
    navCollapsedStorageKey: L = "nsvCollapsed",
    navCollapsedUrlParam: G = "nsvCollapsed",
    autoContentHeader: F,
    contentHeaderLevel: O = 2,
    renderContentHeader: X,
    contentSubheader: K,
    secondarySubheader: q
  } = e, { effectiveLayout: ne, hydrated: ue, isAtLeastMedium: W } = Pp(
    c,
    D,
    !!l
  ), ae = Tp({
    enabled: y,
    paramSelected: v,
    paramDrill: $
  }), [ce, be] = V.useState(
    () => ae.selectedId !== void 0 ? ae.selectedId : o
  ), he = r !== void 0 ? r : ce, Me = t.find((Ie) => g(Ie) === he), [Ge, Te] = V.useState(
    void 0
  );
  V.useEffect(() => {
    if (he === void 0) return;
    Te(he);
    const Ie = setTimeout(() => Te(void 0), 220);
    return () => clearTimeout(Ie);
  }, [he]);
  const Le = V.useRef(null), we = V.useRef(null), P = V.useRef(null), Y = V.useRef(null), [se, fe] = V.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [pe, R] = V.useState(() => "nav"), [U, oe] = V.useState(0), Q = () => [
    Y.current,
    we.current,
    P.current
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
  }, []), ye = V.useCallback(
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
      const He = le(P.current);
      if (!He.length) {
        de(P.current);
        return;
      }
      const Je = Math.max(0, Math.min(Ie, He.length - 1)), tt = He[Je];
      tt.focus(), setTimeout(() => {
        document.activeElement !== tt && (tt.focus(), setTimeout(() => {
          document.activeElement !== tt && tt.click();
        }, 10));
      }, 10), fe((dt) => ({ ...dt, secondaryIndex: Je }));
      const _t = (dt) => {
        dt.key === "Escape" && (dt.preventDefault(), dt.stopPropagation(), de(P.current), tt.removeEventListener("keydown", _t));
      };
      He.forEach((dt) => {
        const ht = dt._escapeHandler;
        ht && dt.removeEventListener("keydown", ht);
      }), tt._escapeHandler = _t, tt.addEventListener("keydown", _t);
    },
    [le]
  ), Be = (Ie) => {
    if (Ie.defaultPrevented) return;
    const He = Ie.key, Je = Ie.target, tt = !!ve.current && ve.current.contains(Je), _t = !!we.current && we.current.contains(Je), dt = !!P.current && P.current.contains(Je), ht = !!P.current, pr = Je === Y.current || Je === we.current || Je === P.current, $o = Ye && (ne === "list" || ne === "cards"), mr = _t && !!Je.closest(".nhs-navigation-split-view__header");
    if (pe === "containers" && pr) {
      if (He === "ArrowRight") {
        Ie.preventDefault();
        const et = Q(), ut = Math.min(et.length - 1, U + 1);
        re(ut);
        return;
      }
      if (He === "ArrowLeft") {
        Ie.preventDefault();
        const et = Math.max(0, U - 1);
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
        } else Je === we.current ? (R("content"), ye(se.contentIndex)) : Je === P.current && (R("secondary"), ke(se.secondaryIndex));
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
        } else if ((Je === we.current || Je === P.current) && (Ie.preventDefault(), R("nav"), ve.current)) {
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
          ye(se.contentIndex);
        }, 50);
        return;
      }
      if (Je === P.current && pe === "secondary") {
        Ie.preventDefault(), Ie.stopPropagation(), le(
          P.current
        ).length > 0 && setTimeout(() => {
          ke(se.secondaryIndex);
        }, 50);
        return;
      }
    }
    if ($o && mr && !pr && (He === "ArrowRight" || He === "ArrowLeft")) {
      const et = le(we.current).filter(
        (ut) => ut.closest(".nhs-navigation-split-view__header")
      );
      if (et.length > 1) {
        const ut = et.indexOf(Je);
        if (ut >= 0) {
          const hs = (ut + (He === "ArrowRight" ? 1 : -1) + et.length) % et.length;
          Ie.preventDefault(), et[hs].focus();
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
        ht && (Ie.preventDefault(), R("secondary"), setTimeout(() => de(P.current), 10));
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
      const et = ht ? P.current : we.current;
      et && !et.contains(Je) && (Ie.preventDefault(), ht ? (R("secondary"), setTimeout(() => de(P.current), 10)) : (R("content"), setTimeout(() => de(we.current), 10)));
    }
    if (He === "ArrowDown" || He === "ArrowUp") {
      if (Je === we.current && He === "ArrowDown") {
        Ie.preventDefault(), le(we.current).length > 0 && ye(0);
        return;
      }
      if (Je === P.current && He === "ArrowDown") {
        Ie.preventDefault(), le(
          P.current
        ).length > 0 && ke(0);
        return;
      }
      if (_t) {
        const et = le(we.current);
        if (et.length) {
          Ie.preventDefault();
          const ut = He === "ArrowDown" ? 1 : -1, $t = (se.contentIndex + ut + et.length) % et.length;
          ye($t);
        }
      } else if (dt) {
        const et = le(P.current);
        if (et.length) {
          Ie.preventDefault();
          const ut = He === "ArrowDown" ? 1 : -1, $t = (se.secondaryIndex + ut + et.length) % et.length;
          ke($t);
        }
      }
    }
  }, Ye = !!Me && (ne === "list" || ne === "cards"), lt = V.useMemo(() => F === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : F === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : F === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: F.mobile !== void 0 ? F.mobile : !0,
    tablet: F.tablet || !1,
    desktop: F.desktop || !1
  }, [F]), Qe = ue && W && ne !== "three-column", ie = ue && ne === "three-column", Ae = !!l, z = ne === "three-column", [te, ge] = V.useState(!1);
  V.useEffect(() => {
    z && te && ge(!1);
  }, [z, te]), V.useEffect(() => {
    te && !z && (R("secondary"), oe(2), setTimeout(() => {
      de(P.current);
    }, 50));
  }, [te, z]), V.useEffect(() => {
    !te && !z && pe === "secondary" && (R("content"), oe(1), setTimeout(() => {
      de(we.current);
    }, 50));
  }, [te, z, pe]);
  const xe = !!Me && (Ye && lt.mobile || !Ye && Qe && lt.tablet || !Ye && ie && lt.desktop) || Ae && !z, Se = Ye ? "mobile" : Qe ? "tablet" : "desktop";
  V.useEffect(() => {
    if (!y) return;
    const Ie = ne === "three-column";
    let He = !1;
    const Je = () => {
      He || (ae.selectedId !== he && ae.setSelectedId(he), ae.drilledIn !== Ie && ae.setDrilledIn(Ie));
    };
    if (M && M > 0) {
      const tt = setTimeout(Je, M);
      return () => {
        He = !0, clearTimeout(tt);
      };
    } else
      Je();
  }, [y, ae, he, ne, M]), V.useEffect(() => {
    if (!y) return;
    const Ie = () => {
      const He = new URLSearchParams(window.location.search), Je = He.get(v);
      He.get($), be(Je === null ? void 0 : Je);
    };
    return window.addEventListener("popstate", Ie), () => window.removeEventListener("popstate", Ie);
  }, [
    y,
    v,
    $,
    c,
    l
  ]);
  const Re = V.useRef(0), Ce = V.useRef(
    null
  ), je = V.useCallback(
    (Ie, He) => {
      Ie !== he && (r === void 0 && be(Ie), a?.(Ie, He));
    },
    [r, a, he]
  );
  V.useEffect(() => {
    if (!S && Ye && we.current) {
      const Ie = setTimeout(() => de(we.current), 30);
      return () => clearTimeout(Ie);
    }
  }, [Ye, he, S]);
  const ve = V.useRef(null), [Ne, Ke] = V.useState(
    () => b === "first" ? 0 : -1
  );
  V.useEffect(() => {
    if (Ne < 0 || !ve.current) return;
    const He = Array.from(
      ve.current.querySelectorAll("[data-nav-item]")
    )[Ne];
    if (He) {
      document.activeElement !== He && de(He), Re.current = Ne;
      const Je = t[Ne];
      w?.(
        Je ? g(Je) : void 0,
        Je,
        Ne
      );
    }
  }, [Ne, t, w, g]);
  const at = (Ie) => {
    const He = I === "vertical" ? "ArrowDown" : "ArrowRight", Je = I === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (Ie.key === "ArrowRight" && I === "vertical") {
      Ie.preventDefault(), te ? (R("secondary"), setTimeout(() => {
        de(P.current);
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
      const pr = ht.split("").every(($t) => $t === ht[0]), $o = t.map(
        ($t) => String($t.label || "").toLowerCase()
      );
      let mr = 0;
      Ne >= 0 && (mr = (Ne + 1) % t.length);
      let et;
      const ut = ($t, hs) => {
        const ps = t.length;
        for (let Ao = 0; Ao < ps; Ao++) {
          const Eo = (mr + Ao) % ps;
          if (!t[Eo].disabled && $o[Eo].startsWith($t))
            return Eo;
        }
      };
      pr && ht.length > 1 ? et = ut(ht[0]) : (et = ut(ht), et === void 0 && ht.length > 1 && (et = ut(ht[ht.length - 1]), et !== void 0 && Ce.current && (Ce.current.buffer = ht[ht.length - 1]))), et !== void 0 && Ke(et);
    }
  }, { collapsed: $e, toggle: Pe } = Fp({
    enabled: _,
    isAtLeastMedium: W,
    initiallyCollapsed: N,
    persist: A,
    storageKey: L,
    urlParam: G,
    onChange: H
  }), Oe = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    Ye ? "nhs-navigation-split-view--detail-active" : "",
    ne === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    _ && W && $e ? "nhs-navigation-split-view--nav-collapsed" : "",
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
  const It = ne === "three-column", [Lo, nd] = V.useState(!1);
  V.useEffect(() => {
    It && !Lo && nd(!0);
  }, [It, Lo]);
  const fs = V.useRef(It);
  return V.useEffect(() => {
    fs.current !== It && (T?.(It), fs.current = It);
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
                    _ && W && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Pe,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": $e ? Z : ee,
                        title: $e ? Z : ee,
                        children: $e ? B || /* @__PURE__ */ n.jsx($p, {}) : J || /* @__PURE__ */ n.jsx(Lp, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ n.jsx(
                      Ep,
                      {
                        layout: ne === "cards" ? "cards" : "list",
                        items: t,
                        getId: g,
                        selectedId: he,
                        isLoading: h,
                        emptyState: p,
                        renderItemContent: s,
                        onSelect: (Ie, He, Je) => {
                          Re.current = Je, je(Ie, He);
                        },
                        orientation: I,
                        initialFocus: b,
                        onFocusChange: w,
                        justSelectedId: Ge,
                        listRef: ve,
                        onKeyDownList: at,
                        navigationInstructions: C,
                        controlledFocusedIndex: Ne
                      }
                    ) }),
                    k && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: k
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
                      Ap,
                      {
                        show: xe,
                        label: Me ? Me.label : void 0,
                        contentHeaderLevel: O,
                        detailActive: Ye,
                        headerContext: Se,
                        backLabel: u,
                        nextLabel: f,
                        onBack: () => je(void 0, void 0),
                        onForward: () => ge(!0),
                        renderContentHeader: X,
                        item: Me,
                        contentSubheader: K,
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
              ne === "three-column" && (!E || Lo) || te && !z ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: P,
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
                                    Xn,
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
Rp.displayName = "NavigationSplitView";
function Bp({
  steps: e,
  currentIndex: t,
  onNavigate: r,
  renderCard: o,
  className: a,
  ariaLabel: s = "Steps"
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
                  const h = f.target;
                  h && h.closest(
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
function Hp({
  steps: e,
  currentIndex: t,
  onNavigate: r,
  renderLabel: o,
  ariaLabel: a = "Breadcrumbs",
  className: s,
  style: i
}) {
  const l = e.map((d, u) => {
    const f = u === t, h = u < t, p = o ? o(d, u) : d.label ?? `Step ${u + 1}`;
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
      p !== t && r?.(p);
      return;
    }
    const h = f.getAttribute("data-index");
    if (h != null) {
      d.preventDefault();
      const p = parseInt(h, 10);
      Number.isNaN(p) || r?.(p);
    }
  };
  return /* @__PURE__ */ n.jsx("div", { style: i, onClick: c, children: /* @__PURE__ */ n.jsx(pl, { labelText: a, classes: s, items: l }) });
}
function zp(e) {
  const { up: t } = rs(), [r, o] = V.useState(!1);
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
function dv(e) {
  const {
    steps: t,
    currentStepId: r,
    defaultStepId: o,
    onStepChange: a,
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
    defaultSectionIdForStep: I,
    onSectionChange: D
  } = e, T = typeof window < "u" && !!window.__WSV_DEBUG_FOCUS || !1, C = (...ie) => {
    T && console.log("[WorkflowSplitView]", ...ie);
  }, b = () => {
    if (typeof document > "u") return {};
    const ie = document.activeElement, Ae = ie?.getAttribute?.("role");
    return {
      activeTag: ie?.tagName,
      activeId: ie?.id,
      activeRole: Ae,
      activeClasses: ie?.className
    };
  }, [S, j] = Ve(
    o ?? (t[0] ? h(t[0]) : void 0)
  ), w = r ?? S, y = t.findIndex((ie) => h(ie) === w), v = y >= 0 ? t[y] : t[0], [$, M] = Ve({}), E = (ie) => ie ? String(h(ie)) : "", k = _e((ie) => {
    if (!ie) return;
    try {
      const z = I?.(ie);
      if (z !== void 0) return z;
    } catch {
    }
    const Ae = ie.sections && ie.sections[0];
    return Ae ? Ae.id : void 0;
  }, [I]), _ = g ?? $[E(v)] ?? k(v), N = v && v.sections ? v.sections : void 0, H = N?.find((ie) => ie.id === _), Z = (ie) => {
    if (v) {
      const Ae = E(v);
      g === void 0 && M((z) => ({ ...z, [Ae]: ie })), D?.(ie, N?.find((z) => z.id === ie), v);
    }
  }, ee = (ie) => {
    C("navigateTo", String(ie)), r === void 0 && j(ie);
    const Ae = t.find((z) => h(z) === ie);
    Ae && a && a(ie, Ae);
  }, B = u ? u({ steps: t, current: v, onNavigate: ee }) : /* @__PURE__ */ n.jsx(
    Hp,
    {
      steps: t,
      currentIndex: Math.max(0, y),
      onNavigate: (ie) => {
        const Ae = t[ie];
        Ae && ee(h(Ae));
      }
    }
  ), { hydrated: J, breakpoint: A, paneConfig: L } = zp({
    step: v,
    index: y,
    layoutForStep: s
  }), G = r !== void 0 || o !== void 0 && t.length > 0 && t[0] && o !== h(t[0]), F = Ze(null), O = Ze(null), X = Ze(null), K = Ze(null), q = Ze(null), ne = Ze(0), ue = Ze(!1), W = Ze(!1), ae = Ze(null), [ce, be] = Ve("nav"), he = Ze("nav");
  nt(() => {
    he.current = ce, ce !== "nav" && P(!1), ce !== "content" && se(!1), ce !== "secondary" && pe(!1);
  }, [ce]);
  const [Me, Ge] = Ve(0), [Te, Le] = Ve(
    () => Math.max(0, y)
  ), [we, P] = Ve(!1), [Y, se] = Ve(!1), [fe, pe] = Ve(!1), R = _e((ie) => {
    if (ie) {
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
        ie.focus();
      }
      C("focusEl", { to: ie.tagName, id: ie.id, class: ie.className });
    }
  }, []), U = _e(() => {
    const ie = () => X.current;
    let Ae = 0;
    const z = () => {
      const te = ie();
      te && document.activeElement !== te && R(te), Ae += 1, Ae < 6 && document.activeElement !== ie() && setTimeout(z, 0);
    };
    C("focusContentSoon:start", { attempts: Ae }), z(), typeof queueMicrotask == "function" && queueMicrotask(z), requestAnimationFrame(z);
  }, [R]), oe = _e((ie) => ie ? Array.from(ie.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
    (z) => !z.hasAttribute("disabled") && z.tabIndex !== -1
  ) : [], []), Q = () => [
    O.current,
    X.current,
    K.current
  ].filter(Boolean), re = (ie, Ae) => {
    if (!ie) return;
    const z = typeof document < "u" ? document.activeElement : null;
    if (z && ie.contains(z))
      try {
        z.blur(), C("blurActiveIfInside", { label: Ae, root: ie.getAttribute("aria-label") || ie.tagName });
      } catch {
      }
  }, le = () => {
    const ie = typeof document < "u" ? document.activeElement : null;
    if (ie && O.current && O.current.contains(ie))
      try {
        ie.blur(), C("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
  }, de = (ie) => {
    const Ae = Q(), z = Math.max(0, Math.min(ie, Ae.length - 1));
    C("focusContainerByIndex", { idx: ie, clamped: z }), R(Ae[z]), Ge(z);
  }, ye = _e(
    (ie) => {
      let Ae = 0;
      const z = ie ?? Te, te = () => {
        const me = q.current;
        if (!me) return null;
        const xe = Array.from(me.querySelectorAll("[data-nav-item]"));
        return xe[z] || xe[0] || null;
      }, ge = () => {
        if (he.current !== "nav") {
          C("focusNavItemSoon: abort (mode changed)", { mode: he.current });
          return;
        }
        const me = te();
        me && document.activeElement !== me && R(me), Ae += 1, Ae < 6 && document.activeElement !== me && setTimeout(ge, 0);
      };
      C("focusNavItemSoon:start", { index: z, ...b() }), ge(), typeof queueMicrotask == "function" && queueMicrotask(ge), requestAnimationFrame(ge);
    },
    [R, Te]
  );
  nt(() => {
    if (!J) return;
    A === "desktop" || p && A === "tablet" ? G ? (be("nav"), Ge(0), C("init: grid preselected → mode=nav", { containerIndex: 0 })) : (be("containers"), Ge(0), C("init: grid default → mode=containers", { containerIndex: 0 })) : (be("nav"), C("init: non-grid → mode=nav"));
  }, [J, A, G, p]), nt(() => () => {
    ae.current != null && (clearTimeout(ae.current), ae.current = null, C("cleanup: cleared nav bootstrap timeout"));
  }, []), nt(() => {
    const ie = Math.max(0, y);
    Le(ie), C("sync navFocusedIndex with currentIndex", { currentIndex: y, navFocusedIndex: ie });
  }, [y]), nt(() => {
    C("paneFocusMode →", ce, b());
  }, [ce]);
  const ke = (ie) => {
    if (!(J && (A === "desktop" || p && A === "tablet"))) return;
    const z = ie.key, te = ie.target, ge = te.tagName.toLowerCase(), me = ge === "input" || ge === "textarea" || ge === "select", xe = te.getAttribute("role"), Se = xe === "textbox" || xe === "searchbox" || xe === "combobox", Re = te.getAttribute("contenteditable"), Ce = me || Se || Re && Re !== "false";
    if (C("onRootKeyDown", { key: z, tag: ge, role: xe, isEditable: Ce, paneFocusMode: ce, containerIndex: Me, ...b() }), Ce && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(z))
      return;
    const je = !!q.current && q.current.contains(te), ve = !!X.current && X.current.contains(te), Ne = !!K.current && K.current.contains(te), Ke = te === O.current || te === X.current || te === K.current, at = !!K.current;
    if (Ke) {
      if (z === "ArrowLeft" && te === X.current) {
        ie.preventDefault(), C("container: ArrowLeft on content container → nav item"), be("nav"), re(X.current, "from-content"), ne.current = Te, ye(Te);
        return;
      }
      if (z === "ArrowRight" && te === X.current && at) {
        ie.preventDefault(), C("container: ArrowRight on content container → secondary"), be("secondary"), re(X.current, "from-content"), se(!1), setTimeout(() => R(K.current), 10);
        return;
      }
      if (z === "ArrowRight" && te === O.current) {
        ie.preventDefault(), C("container: ArrowRight on nav container → content"), be("content"), re(O.current, "from-nav"), P(!1), U();
        return;
      }
      if (z === "ArrowLeft" && te === K.current) {
        ie.preventDefault(), C("container: ArrowLeft on secondary container → content"), be("content"), re(K.current, "from-secondary"), pe(!1), U();
        return;
      }
      if (z === "ArrowRight") {
        ie.preventDefault(), C("container: ArrowRight → next container"), re(te, "container-roving"), te === O.current && P(!1), te === X.current && se(!1), te === K.current && pe(!1), de(Me + 1);
        return;
      }
      if (z === "ArrowLeft") {
        ie.preventDefault(), C("container: ArrowLeft → prev container"), re(te, "container-roving"), te === O.current && P(!1), te === X.current && se(!1), te === K.current && pe(!1), de(Me - 1);
        return;
      }
      if (z === "Home") {
        ie.preventDefault(), C("container: Home → first container"), re(te, "container-roving"), te === O.current && P(!1), te === X.current && se(!1), te === K.current && pe(!1), de(0);
        return;
      }
      if (z === "End") {
        ie.preventDefault(), C("container: End → last container"), re(te, "container-roving"), te === O.current && P(!1), te === X.current && se(!1), te === K.current && pe(!1), de(Q().length - 1);
        return;
      }
      if (z === "Enter" || z === " ") {
        if (ie.preventDefault(), te === O.current)
          be("nav"), C("container: Enter/Space on nav → focus nav item", { navFocusedIndex: Te }), ne.current = Te, W.current = !0, ye(Te);
        else if (te === X.current) {
          be("content"), re(X.current, "descend-content"), se(!1);
          const $e = oe(X.current);
          C("container: Enter/Space on content → focus first focusable", { count: $e.length }), ($e[0] || X.current)?.focus();
        } else if (te === K.current) {
          be("secondary"), re(K.current, "descend-secondary"), pe(!1);
          const $e = oe(K.current);
          C("container: Enter/Space on secondary → focus first focusable", { count: $e.length }), ($e[0] || K.current)?.focus();
        }
        return;
      }
    }
    if (z === "Escape") {
      if (ve || Ne) {
        ie.preventDefault(), be("containers"), C("Escape: from", ve ? "content" : "secondary", "→ containers (focus container)"), ve && re(X.current, "escape-ascend"), Ne && re(K.current, "escape-ascend"), ve && setTimeout(() => R(X.current), 10), Ne && setTimeout(() => R(K.current), 10);
        return;
      }
      if (je) {
        ie.preventDefault(), be("containers"), C("Escape: from nav → containers (focus nav container)"), le(), R(O.current);
        return;
      }
      if (Ke) {
        ie.preventDefault(), be("containers"), C("Escape: on container (stay in containers)");
        return;
      }
    }
    if (z === "Enter" || z === " ") {
      if (te === X.current && ce === "content") {
        ie.preventDefault(), re(X.current, "descend-content");
        const $e = oe(X.current);
        C("Enter/Space on content container in content mode"), ($e[0] || X.current)?.focus();
        return;
      }
      if (te === K.current && ce === "secondary") {
        ie.preventDefault(), re(K.current, "descend-secondary");
        const $e = oe(K.current);
        C("Enter/Space on secondary container in secondary mode"), ($e[0] || K.current)?.focus();
        return;
      }
    }
    if (z === "ArrowRight") {
      if (je || ce === "nav") {
        ie.preventDefault(), be("content"), C("ArrowRight: from nav → content (focus content)"), re(O.current, "from-nav"), P(!1), U();
        return;
      }
      if (ve || ce === "content") {
        at && (ie.preventDefault(), be("secondary"), C("ArrowRight: from content → secondary (focus secondary)"), re(X.current, "from-content"), se(!1), setTimeout(() => R(K.current), 10));
        return;
      }
    }
    if (z === "ArrowLeft") {
      if (Ne || ce === "secondary") {
        ie.preventDefault(), C("ArrowLeft: from secondary → content (focus content)"), re(K.current, "from-secondary"), pe(!1), U();
        return;
      }
      if (ve || ce === "content") {
        ie.preventDefault(), be("nav"), C("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex: Te }), ne.current = Te, re(X.current, "from-content"), se(!1), ye(Te);
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
      Oe = Math.max(0, Math.min(Oe, Pe.length - 1)), Le(Oe), ne.current = Oe, C("Root: Enter/Space activate from nav context", { idx: Oe }), ee(h(t[Oe])), be("content"), he.current = "content", ue.current = !0, le(), U();
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
          me.preventDefault(), me.stopPropagation(), W.current = !1, be("nav");
          const Se = ne.current ?? Te, Re = Math.min(xe.length - 1, Se + 1);
          Le(Re), ne.current = Re, ye(Re), C("PrimaryNav: ArrowDown", { from: Se, to: Re });
        } else if (me.key === "ArrowUp") {
          me.preventDefault(), me.stopPropagation(), W.current = !1, be("nav");
          const Se = ne.current ?? Te, Re = Math.max(0, Se - 1);
          Le(Re), ne.current = Re, ye(Re), C("PrimaryNav: ArrowUp", { from: Se, to: Re });
        } else if (me.key === "Home") {
          me.preventDefault(), me.stopPropagation(), W.current = !1;
          const Se = 0;
          Le(Se), ne.current = Se, ye(Se), C("PrimaryNav: Home", { to: Se });
        } else if (me.key === "End") {
          me.preventDefault(), me.stopPropagation(), W.current = !1;
          const Se = xe.length - 1;
          Le(Se), ne.current = Se, ye(Se), C("PrimaryNav: End", { to: Se });
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
      Ce && (Se = xe.indexOf(Ce)), Se < 0 && (Se = ne.current ?? Te), Se = Math.max(0, Math.min(Se, xe.length - 1)), Le(Se), ne.current = Se, C("PrimaryNav: Enter/Space activate (capture)", { idx: Se }), ee(h(t[Se])), be("content"), he.current = "content", ue.current = !0, ae.current != null && (clearTimeout(ae.current), ae.current = null), le(), U();
    }, ge = (me) => {
      if (me.defaultPrevented) return;
      ue.current = !1;
      const xe = me.target;
      if (!xe) return;
      const Se = xe.closest("[data-nav-item]");
      if (!Se || !q.current || !q.current.contains(Se)) return;
      const Ce = Array.from(q.current.querySelectorAll("[data-nav-item]")).indexOf(Se);
      Ce < 0 || (Le(Ce), ne.current = Ce, C("PrimaryNav: click delegate activate", { idx: Ce }), ee(h(t[Ce])), be("content"), le(), ae.current != null && (clearTimeout(ae.current), ae.current = null), U());
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: q,
        className: "nhsfdp-primary-nav",
        role: "listbox",
        "aria-activedescendant": String(h(t[Math.max(0, Te)])),
        onKeyDownCapture: te,
        onKeyDown: Ae,
        onKeyUp: z,
        onPointerDown: ie,
        onMouseDown: ie,
        onClick: ge,
        children: t.map((me, xe) => {
          const Se = h(me), Re = xe === y, Ce = ce === "nav" && xe === Te;
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
                  ne.current = xe, ue.current = !0, C("NavItem: onKeyDown activate", { i: xe, id: String(h(t[xe])) }), ee(h(t[xe])), be("content"), he.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), le(), U();
                }
              },
              onKeyUp: (je) => {
                if (je.key === "Enter" || je.key === " ") {
                  if (W.current) {
                    W.current = !1;
                    return;
                  }
                  ne.current = xe, C("NavItem: onKeyUp activate (fallback)", { i: xe, id: String(h(t[xe])) }), ee(h(t[xe])), be("content"), he.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), le(), U();
                }
              },
              onClick: (je) => {
                if (ue.current) {
                  ue.current = !1, je.preventDefault(), je.stopPropagation(), C("NavItem: ignored synthetic click after keyboard activation", { i: xe });
                  return;
                }
                Le(xe), ne.current = xe, C("NavItem: onClick select", { i: xe, id: String(Se) }), ee(Se), be("content"), he.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), le(), U();
              },
              children: me.label
            }
          ) }, String(Se));
        })
      }
    );
  }, Ye = () => {
    const ie = Math.max(0, y), Ae = ie > 0, z = ie < t.length - 1, te = m ? m(v) : x ? x(v) : !0;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
      A === "tablet" ? B : null,
      te && /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        Ae ? /* @__PURE__ */ n.jsx(
          Xn,
          {
            element: "button",
            text: "Back",
            onClick: () => {
              const ge = t[ie - 1];
              ge && ee(h(ge));
            }
          }
        ) : (
          // Keep space to avoid layout shift when back is not available
          /* @__PURE__ */ n.jsx(Xn, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        z ? /* @__PURE__ */ n.jsx(
          zr,
          {
            element: "button",
            text: "Next",
            onClick: () => {
              const ge = t[ie + 1];
              ge && ee(h(ge));
            }
          }
        ) : (
          // Keep space to avoid layout shift when next is not available
          /* @__PURE__ */ n.jsx(zr, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        Bp,
        {
          steps: t,
          currentIndex: ie,
          onNavigate: (ge) => {
            const me = t[ge];
            me && ee(h(me));
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
      ref: F,
      role: "grid",
      "aria-rowcount": 1,
      "aria-colcount": (ie.showPrimaryNav ? 1 : 0) + 1 + (ie.showSecondaryNav ? 1 : 0),
      "aria-label": "Workflow layout",
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhsfdp-workflow-body", role: "row", children: [
        ie.showPrimaryNav && /* @__PURE__ */ n.jsx(
          "aside",
          {
            ref: O,
            className: "nhsfdp-pane primary-nav" + (we ? " is-active-pane" : ""),
            "aria-label": "Primary navigation",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (Ae) => {
              Ae.target === O.current && P(!0);
            },
            onBlur: (Ae) => {
              Ae.target === O.current && P(!1);
            },
            children: /* @__PURE__ */ n.jsx("section", { role: "complementary", "aria-label": "Primary navigation", children: /* @__PURE__ */ n.jsx(Be, {}) })
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "main",
          {
            ref: X,
            className: "nhsfdp-pane content" + (Y ? " is-active-pane" : ""),
            "aria-live": "polite",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (Ae) => {
              Ae.target === X.current && se(!0);
            },
            onBlur: (Ae) => {
              Ae.target === X.current && se(!1);
            },
            children: [
              B,
              /* @__PURE__ */ n.jsx("div", { role: "main", children: l(v, H) })
            ]
          }
        ),
        (() => {
          const Ae = d ? d(v, N, H, (ge) => Z(ge)) : N && N.length > 0 ? /* @__PURE__ */ n.jsx("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: N.map((ge) => {
            const me = _ === ge.id;
            return /* @__PURE__ */ n.jsx("li", { role: "option", "aria-selected": me, children: /* @__PURE__ */ n.jsx(
              "button",
              {
                type: "button",
                className: "nhsfdp-secondary-nav__item" + (me ? " is-current" : ""),
                "data-sec-item": !0,
                onClick: () => Z(ge.id),
                children: ge.label
              }
            ) }, String(ge.id));
          }) }) : void 0, z = c?.(v, H);
          return ie.showSecondaryNav && (Ae || z) ? /* @__PURE__ */ n.jsx(
            "aside",
            {
              ref: K,
              className: "nhsfdp-pane secondary-nav" + (fe ? " is-active-pane" : ""),
              "aria-label": "Secondary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (ge) => {
                ge.target === K.current && pe(!0);
              },
              onBlur: (ge) => {
                ge.target === K.current && pe(!1);
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
  return J ? A === "mobile" || !p && A === "tablet" || (L.panes ?? 1) === 1 ? /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: Ye() }) : /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: lt(L) }) : /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: /* @__PURE__ */ n.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ n.jsxs("main", { className: "nhsfdp-pane content", children: [
    u ? u({ steps: t, current: v, onNavigate: ee }) : null,
    v ? l(v, v?.sections?.find((ie) => ie.id === (I?.(v) ?? v?.sections?.[0]?.id))) : null
  ] }) }) });
}
const Op = typeof window < "u" && window.document ? V.useLayoutEffect : V.useEffect, ci = (e, t, r, o) => e == null || Number.isNaN(e) ? o : Math.min(r, Math.max(t, e)), Up = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: o, isActive: a, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = r && e.childItems && e.childItems.length > 0, p = (m) => {
    h && (m.preventDefault(), o?.(e));
  }, x = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": a || !1,
    onClick: p,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && p(m), m.key === "Escape" && a && p(m);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: De("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", a && "nhsuk-product-roadmap__item--active"),
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
          h && /* @__PURE__ */ n.jsx("span", { className: De("nhsuk-product-roadmap__item-expander", a && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Wp = rd(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: o = 2,
  className: a,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = Ve(() => /* @__PURE__ */ new Set()), [h, p] = Ve(() => /* @__PURE__ */ new Set()), x = Ze(/* @__PURE__ */ new Set()), m = _e((M) => u.has(M), [u]), g = _e((M) => {
    f((E) => {
      const k = new Set(E);
      return k.has(M.id) ? (k.delete(M.id), p((_) => {
        const N = new Set(_);
        return N.add(M.id), N;
      }), setTimeout(() => p((_) => {
        const N = new Set(_);
        return N.delete(M.id), N;
      }), 240), l?.(M.id, !1)) : (k.add(M.id), l?.(M.id, !0)), k;
    });
  }, [l]);
  Op(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const M = [];
    if (u.forEach((N) => {
      x.current.has(N) || M.push(N);
    }), x.current = new Set(u), !M.length) return;
    const E = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, k = M.map((N) => `.nhsuk-product-roadmap__inline-children[data-parent="${N}"] .nhsuk-product-roadmap__inline-child`).join(","), _ = Array.from(document.querySelectorAll(k));
    if (_.length) {
      if (E) {
        _.forEach((N) => {
          N.style.opacity = "1", N.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((N) => {
        (N.gsap || N.default || N).to(_, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        _.forEach((N) => {
          N.style.opacity = "1", N.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, i]);
  const I = _e(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), D = De("nhsuk-product-roadmap", a), T = ci(r, 120, 1200, 400), C = ci(o, 1, 6, 2), b = ze(() => e.map((M) => /* @__PURE__ */ new Date(M + " 01")), [e]), S = ze(() => {
    if (b.length === 0) {
      const k = /* @__PURE__ */ new Date();
      return [k, k];
    }
    const M = new Date(b[0]), E = nr.offset(new Date(b[b.length - 1]), 1);
    return [M, E];
  }, [b]), j = ze(() => ts().domain(S).range([0, b.length * T]), [S, b.length, T]), w = _e((M) => {
    if (M.startDate) {
      const ee = new Date(M.startDate), B = new Date(M.endDate ?? M.startDate);
      B < ee && B.setTime(ee.getTime());
      const J = j(ee), A = nr.offset(new Date(B), 1);
      let L = j(A);
      Number.isFinite(L) || (L = J + T);
      const G = Math.max(T * 0.25, L - J), F = J / T, O = G / T;
      return { ...M, _pxLeft: J, _pxWidth: G, _startFraction: F, _spanColumns: O };
    }
    const E = M.date ?? 1, k = M.dateOffset ?? 0, _ = M.length ?? 1, N = M.partialLength ?? 1, H = E - 1 + k, Z = _ - 1 + N;
    return { ...M, _pxLeft: H * T, _pxWidth: Z * T, _startFraction: H, _spanColumns: Z };
  }, [j, T]), y = ze(() => t.map((M) => {
    const k = M.roadmapItems.map((N) => {
      const H = !N.childItems && N.children ? { ...N, childItems: N.children } : { ...N };
      return w(H);
    }).sort((N, H) => N._pxLeft !== H._pxLeft ? N._pxLeft - H._pxLeft : H._pxWidth - N._pxWidth), _ = [];
    return k.forEach((N) => {
      const H = N._pxLeft, Z = N._pxLeft + N._pxWidth;
      let ee = _.findIndex((B) => B <= H);
      ee === -1 && (ee = _.length, _.push(0)), _[ee] = Z, N.verticalPosition = ee + 1;
    }), { ...M, roadmapItems: k, _laneCount: _.length };
  }), [t, w]), v = ze(() => y.map((M) => M._laneCount || 1), [y]), $ = ze(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: D,
      style: { "--column-width": `${T}px`, gridTemplateColumns: $ },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": y.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((M, E) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": E + 2, children: M }, `${M}-${E}`))
        ] }),
        y.map((M, E) => {
          const k = E + 2, _ = v[E];
          let N, H = 0, Z = [];
          i && c === "inline" && (Z = M.roadmapItems.filter((A) => m(A.id) && A.childItems && A.childItems.length).map((A) => ({ id: A.id, lane: A.verticalPosition || 1, count: A.childItems.length })).sort((A, L) => A.lane - L.lane), H = Z.reduce((A, L) => A + L.count, 0));
          const ee = _ + H;
          N = `calc((${ee} * var(--roadmap-item-block-height)) + (max(0, ${ee} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let J = 0;
          return Z.forEach((A) => {
            J += A.count, B[A.lane + 1] = J;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": k, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: M.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: N }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: M.roadmapItems.map((A, L) => {
              const G = (A.verticalPosition || 1) - 1, F = Z.filter((q) => q.lane - 1 < G).reduce((q, ne) => q + ne.count, 0), O = G + F, X = m(A.id), K = h.has(A.id);
              return /* @__PURE__ */ n.jsxs(rt.Fragment, { children: [
                /* @__PURE__ */ n.jsx(Up, { item: A, maxLines: C, enableDrilldown: i, onExpand: g, isActive: X, topLaneIndex: O, laneOffset: F }),
                i && c === "inline" && (X || K) && A.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": A.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${A.title} child tasks`, children: A.childItems.map((q, ne) => {
                  const ue = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let W = A._pxLeft, ae = A._pxWidth;
                  if (q.startDate) {
                    const he = new Date(q.startDate);
                    let Me = q.endDate ? new Date(q.endDate) : new Date(he);
                    Me < he && (Me = new Date(he));
                    const Ge = new Date(Me);
                    Ge.setDate(Ge.getDate() + 1);
                    const Te = j(he);
                    let Le = j(Ge);
                    (!Number.isFinite(Le) || Le <= Te) && (Le = Te + 6), W = Te, ae = Math.max(6, Le - Te);
                  }
                  const be = O + 1 + ne;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: De("nhsuk-product-roadmap__inline-child", q.status && `nhsuk-product-roadmap__inline-child--status-${q.status}`, !X && K && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${W}px`, width: `${ae}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${be})`, height: ue, opacity: X ? 0 : void 0, transform: X ? "translateY(-6px)" : void 0 },
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
          ] }, `${M.heading}-${E}`);
        }),
        i && c === "overlay" && u.size === 1 && (() => {
          const M = Array.from(u)[0], E = t.flatMap((k) => k.roadmapItems).find((k) => k.id === M);
          return !E || !E.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${E.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: E.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: I, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: E.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: E.childItems.map((k, _) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: k.title }),
                k.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: k.content })
              ] }, k.id ?? _)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: I, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Wp.displayName = "ProductRoadmap";
function bt(e) {
  return function() {
    return e;
  };
}
const ua = Math.PI, fa = 2 * ua, un = 1e-6, Gp = fa - un;
function Il(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Yp(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Il;
  const r = 10 ** t;
  return function(o) {
    this._ += o[0];
    for (let a = 1, s = o.length; a < s; ++a)
      this._ += Math.round(arguments[a] * r) / r + o[a];
  };
}
class Vp {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Il : Yp(t);
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
    let i = this._x1, l = this._y1, c = o - t, d = a - r, u = i - t, f = l - r, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (h > un) if (!(Math.abs(f * c - d * u) > un) || !s)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = o - i, x = a - l, m = c * c + d * d, g = p * p + x * x, I = Math.sqrt(m), D = Math.sqrt(h), T = s * Math.tan((ua - Math.acos((m + h - g) / (2 * I * D))) / 2), C = T / D, b = T / I;
      Math.abs(C - 1) > un && this._append`L${t + C * u},${r + C * f}`, this._append`A${s},${s},0,0,${+(f * p > u * x)},${this._x1 = t + b * c},${this._y1 = r + b * d}`;
    }
  }
  arc(t, r, o, a, s, i) {
    if (t = +t, r = +r, o = +o, i = !!i, o < 0) throw new Error(`negative radius: ${o}`);
    let l = o * Math.cos(a), c = o * Math.sin(a), d = t + l, u = r + c, f = 1 ^ i, h = i ? a - s : s - a;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > un || Math.abs(this._y1 - u) > un) && this._append`L${d},${u}`, o && (h < 0 && (h = h % fa + fa), h > Gp ? this._append`A${o},${o},0,1,${f},${t - l},${r - c}A${o},${o},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > un && this._append`A${o},${o},0,${+(h >= ua)},${f},${this._x1 = t + o * Math.cos(s)},${this._y1 = r + o * Math.sin(s)}`);
  }
  rect(t, r, o, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${o = +o}v${+a}h${-o}Z`;
  }
  toString() {
    return this._;
  }
}
function Dl(e) {
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
  }, () => new Vp(t);
}
function Tl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ll(e) {
  this._context = e;
}
Ll.prototype = {
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
function $l(e) {
  return new Ll(e);
}
function Al(e) {
  return e[0];
}
function El(e) {
  return e[1];
}
function Pl(e, t) {
  var r = bt(!0), o = null, a = $l, s = null, i = Dl(l);
  e = typeof e == "function" ? e : e === void 0 ? Al : bt(e), t = typeof t == "function" ? t : t === void 0 ? El : bt(t);
  function l(c) {
    var d, u = (c = Tl(c)).length, f, h = !1, p;
    for (o == null && (s = a(p = i())), d = 0; d <= u; ++d)
      !(d < u && r(f = c[d], d, c)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, d, c), +t(f, d, c));
    if (p) return s = null, p + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : bt(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : bt(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : bt(!!c), l) : r;
  }, l.curve = function(c) {
    return arguments.length ? (a = c, o != null && (s = a(o)), l) : a;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? o = s = null : s = a(o = c), l) : o;
  }, l;
}
function ha(e, t, r) {
  var o = null, a = bt(!0), s = null, i = $l, l = null, c = Dl(d);
  e = typeof e == "function" ? e : e === void 0 ? Al : bt(+e), t = typeof t == "function" ? t : bt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? El : bt(+r);
  function d(f) {
    var h, p, x, m = (f = Tl(f)).length, g, I = !1, D, T = new Array(m), C = new Array(m);
    for (s == null && (l = i(D = c())), h = 0; h <= m; ++h) {
      if (!(h < m && a(g = f[h], h, f)) === I)
        if (I = !I)
          p = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), x = h - 1; x >= p; --x)
            l.point(T[x], C[x]);
          l.lineEnd(), l.areaEnd();
        }
      I && (T[h] = +e(g, h, f), C[h] = +t(g, h, f), l.point(o ? +o(g, h, f) : T[h], r ? +r(g, h, f) : C[h]));
    }
    if (D) return l = null, D + "" || null;
  }
  function u() {
    return Pl().defined(a).curve(i).context(s);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : bt(+f), o = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : bt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (o = f == null ? null : typeof f == "function" ? f : bt(+f), d) : o;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : bt(+f), r = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : bt(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : bt(+f), d) : r;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(r);
  }, d.lineX1 = function() {
    return u().x(o).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : bt(!!f), d) : a;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), d) : s;
  }, d;
}
function di(e) {
  return e < 0 ? -1 : 1;
}
function ui(e, t, r) {
  var o = e._x1 - e._x0, a = t - e._x1, s = (e._y1 - e._y0) / (o || a < 0 && -0), i = (r - e._y1) / (a || o < 0 && -0), l = (s * a + i * o) / (o + a);
  return (di(s) + di(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function fi(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Yo(e, t, r) {
  var o = e._x0, a = e._y0, s = e._x1, i = e._y1, l = (s - o) / 3;
  e._context.bezierCurveTo(o + l, a + l * t, s - l, i - l * r, s, i);
}
function Or(e) {
  this._context = e;
}
Or.prototype = {
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
        Yo(this, this._t0, fi(this, this._t0));
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
          this._point = 3, Yo(this, fi(this, r = ui(this, e, t)), r);
          break;
        default:
          Yo(this, this._t0, r = ui(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(Or.prototype).point = function(e, t) {
  Or.prototype.point.call(this, t, e);
};
function Ur(e) {
  return new Or(e);
}
function Zp(e, t, r) {
  const o = Ji(e, t);
  return ts().domain(o).range(r);
}
function hi(e, t, r) {
  const [o, a] = Ji(e, t);
  if (!(Number.isFinite(o) && Number.isFinite(a)))
    return Er().domain([0, 0]).range(r);
  let i;
  if (o <= 0)
    i = Math.min(0, o);
  else {
    const c = a - o, d = (c > 0 ? c : o) * 0.1;
    i = Math.max(0, o - d), i === o && (i = Math.max(0, o * 0.9));
  }
  const l = a ?? 0;
  return Er().domain([i, l]).nice().range(r);
}
function pa(e, t, r, o) {
  const a = Pl().x(t).y(r);
  return o?.smooth !== !1 && a.curve(Ur), a(e) ?? "";
}
function qp(e = {}) {
  const t = V.useRef(null), r = V.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [o, a] = V.useState({ width: 0, height: 0 });
  V.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        a({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, o.width - r.left - r.right), i = Math.max(0, o.height - r.top - r.bottom);
  return { width: o.width, height: o.height, innerWidth: s, innerHeight: i, margin: r, ref: t };
}
const Fl = V.createContext(null);
function dn() {
  return V.useContext(Fl);
}
const Jp = ({
  height: e = 240,
  margin: t,
  width: r,
  className: o = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: a,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = qp(t), c = { height: e, position: "relative" };
  return r !== void 0 && (c.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: o, style: c, role: s, "aria-label": i, children: /* @__PURE__ */ n.jsx(Fl.Provider, { value: l, children: a }) });
}, os = V.createContext(null), _n = () => V.useContext(os), Xp = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: o,
  children: a,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = dn(), h = t ?? f?.innerWidth ?? 0, p = r ?? f?.innerHeight ?? 0, x = V.useMemo(() => e.flatMap((b) => b.data), [e]), m = V.useCallback(
    (b) => {
      if (o) return o(b);
      const S = b.x;
      return S instanceof Date ? S : new Date(S);
    },
    [o]
  ), g = c ?? 6, I = d ?? 6, D = V.useMemo(
    () => Zp(x, m, [
      g,
      Math.max(0, h - g)
    ]),
    [x, m, h, g]
  ), T = V.useMemo(() => {
    const b = Math.max(0, u ?? 0), S = Math.max(0, p - (I + b));
    if (l) {
      const j = hi([], (w) => w.y, [
        S,
        I
      ]);
      return j.domain(l), j;
    }
    return hi(x, (j) => j.y, [S, I]);
  }, [x, p, l, I, u]), C = V.useMemo(
    () => ({
      xScale: D,
      yScale: T,
      getXTicks: (b = s) => D.ticks(b),
      getYTicks: (b = i) => T.ticks(b)
    }),
    [D, T, s, i]
  );
  return /* @__PURE__ */ n.jsx(os.Provider, { value: C, children: a });
}, Cr = 16, Nr = 6, Kp = 16, Qp = 4, em = 6, tm = 3, nm = void 0, pi = ({
  type: e,
  scale: t,
  tickCount: r,
  tickValues: o,
  formatTick: a,
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
  const m = _n(), g = dn(), I = t || (e === "x" ? m?.xScale : m?.yScale), D = r ?? (e === "x" ? 6 : 5), T = typeof a == "function", C = V.useMemo(() => {
    if (T || !p) return;
    const j = (w) => new Intl.DateTimeFormat(void 0, w);
    switch (p) {
      case "dayShortMonth":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return `${y.getDate()}
${j({ month: "short" }).format(y)}`;
        };
      case "dayShortMonthYear":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return `${y.getDate()}
${j({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "shortMonth":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return j({ month: "short" }).format(y);
        };
      case "shortMonthYear":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return `${j({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "hourMinute":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return j({ hour: "2-digit", minute: "2-digit" }).format(y);
        };
      default:
        return;
    }
  }, [T, p]);
  let b = T ? a : C || ((j) => String(j));
  const S = V.useMemo(() => o && Array.isArray(o) ? o : I ? typeof I.ticks == "function" ? I.ticks(D) : I.domain ? I.domain() : [] : [], [I, D, o]);
  if (e === "x" && !T && !p && S.length && S.every((j) => j instanceof Date)) {
    const j = S[0], w = S[S.length - 1], y = w.getTime() - j.getTime(), v = 24 * 3600 * 1e3, $ = 365 * v, M = j.getFullYear() === w.getFullYear(), E = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (y < 2 * v) {
      const k = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      b = (_) => k.format(_);
    } else if (y < 32 * v)
      b = (k) => {
        const _ = k;
        return `${_.getDate()} ${E.format(_)}`;
      };
    else if (y < $ && M)
      b = (k) => E.format(k);
    else if (y < 2 * $) {
      const k = /* @__PURE__ */ new Set();
      b = (_) => {
        const N = _, H = N.getMonth();
        return k.has(H) || k.add(H), `${E.format(N)} ${N.getFullYear()}`;
      };
    } else
      b = (k) => String(k.getFullYear());
  }
  if (!I || !g) return null;
  if (e === "x") {
    const j = i ?? g.innerHeight, w = typeof I.bandwidth == "function", y = w ? I.bandwidth() : 0, v = (E) => {
      const k = I(E);
      return w ? k + y / 2 : k;
    };
    let $ = c ?? 0;
    if (u && c == null) {
      const E = S.map(
        (_) => b(_).replace(/\n.*/g, "")
      ), k = E.length ? E.reduce((_, N) => _ + N.length, 0) / E.length : 0;
      $ = Math.max(12, Math.round(k * 6 + 4));
    }
    const M = V.useMemo(() => {
      if (o && Array.isArray(o) || $ <= 0) return S;
      const E = [];
      let k = -1 / 0;
      for (const _ of S) {
        const N = v(_);
        N - k >= $ && (E.push(_), k = N);
      }
      return E;
    }, [
      S,
      I,
      $,
      o,
      w,
      y
    ]);
    return /* @__PURE__ */ n.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${j})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ n.jsx("line", { x1: 0, x2: g.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          M.map((E, k) => {
            const _ = b(E), N = d && _.length > d ? _.slice(0, Math.max(1, d - 1)) + "…" : _, H = h ? N.split(/\n/) : [N.replace(/\n/g, " ")], Z = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ n.jsxs(
              "g",
              {
                transform: `translate(${v(E)},0)`,
                children: [
                  /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ n.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: Z,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        H.map((ee, B) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: B === 0 ? 0 : "1.1em", children: ee }, B)),
                        N !== _ && /* @__PURE__ */ n.jsx("title", { children: _ })
                      ]
                    }
                  )
                ]
              },
              E?.toString?.() || k
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
          const j = !!x?.enabled, w = Math.max(Nr, x?.gapPx ?? Cr);
          if (!j)
            return /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: 0, y2: g.innerHeight, stroke: "currentColor" });
          const y = Math.max(0, g.innerHeight - w);
          return /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: 0, y2: y, stroke: "currentColor" });
        })(),
        S.map((j, w) => {
          const y = b(j), v = d && y.length > d ? y.slice(0, Math.max(1, d - 1)) + "…" : y, $ = h ? v.split(/\n/) : [v.replace(/\n/g, " ")];
          if (!!x?.enabled) {
            const E = Math.max(Nr, x?.gapPx ?? Cr), k = Math.max(0, g.innerHeight - E);
            if (I(j) > k - 1) return null;
          }
          return /* @__PURE__ */ n.jsxs(
            "g",
            {
              transform: `translate(0,${I(j)})`,
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
                      $.map((E, k) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: k === 0 ? 0 : "1.1em", children: E }, k)),
                      v !== y && /* @__PURE__ */ n.jsx("title", { children: y })
                    ]
                  }
                )
              ]
            },
            j?.toString?.() || w
          );
        }),
        !!x?.enabled && (() => {
          const j = Math.max(Nr, x?.gapPx ?? Cr), w = g.innerHeight, v = Math.max(0, w - j), $ = v, E = Math.max(4, w - $), k = Qp, _ = em, N = Math.max(1, Math.round(x?.zigZag?.amplitudePx ?? k)), H = Math.max(1, Math.round(x?.zigZag?.stepXPx ?? tm)), Z = x?.zigZag?.heightPx ?? nm, ee = Math.max(4, Math.round(Z ?? 0));
          let B, J;
          if (x?.zigZag?.heightPx && x.zigZag.heightPx > 0) {
            const K = Math.max(4, Math.min(E - 2, ee));
            B = Math.max(1, Math.floor(K / (2 * N))), J = Math.max(0, Math.min(K, B * 2 * N));
          } else typeof x?.zigZag?.cycles == "number" && x?.zigZag?.cycles > 0 ? (B = Math.max(1, Math.round(x.zigZag.cycles)), J = B * 2 * N, J = Math.min(J, E - 2), B = Math.max(1, Math.floor(J / (2 * N)))) : (B = _, J = Math.min(E - 2, B * 2 * N), B = Math.max(1, Math.floor(J / (2 * N))));
          const A = $ + (E - J) / 2, L = A + J;
          let G = "M0,0";
          const F = J > 0 ? Math.max(0, Math.floor((J - N) / (2 * N))) : 0, O = Math.max(0, (J - F * 2 * N) / 2), X = N > 0 ? H * (O / N) : 0;
          O > 0 && (G += ` l${X},${O}`);
          for (let K = 0; K < F; K++)
            G += ` l-${H},${N} l${H},${N}`;
          return O > 0 && (G += ` l-${X},${O}`), /* @__PURE__ */ n.jsxs("g", { children: [
            /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: v, y2: A, stroke: "currentColor" }),
            /* @__PURE__ */ n.jsx("g", { transform: `translate(0,${A})`, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("path", { d: G, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ n.jsx("line", { x1: 0, x2: 0, y1: L, y2: w, stroke: "currentColor" }),
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
}, rm = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: o = "2 4",
  className: a
}) => {
  const s = _n(), i = dn();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", a].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, d) => /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: s.yScale(c),
        y2: s.yScale(c),
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
        x1: s.xScale(c),
        x2: s.xScale(c),
        stroke: r,
        strokeDasharray: o
      },
      d
    ))
  ] });
}, om = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, dr = {
  color: om
}, am = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ko = {
  color: am
}, sm = [
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
let Vo = null, Zo = null, qo = null, Rl = "optimized";
function im() {
  const e = { color: { ...ko.color, ...dr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
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
    return sm;
  }
}
function lm() {
  return Vo || (Vo = im()), Vo;
}
function cm(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Jo(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function dm(e, t, r) {
  const o = Jo(e), a = Jo(t), s = Jo(r), i = o * 0.4124 + a * 0.3576 + s * 0.1805, l = o * 0.2126 + a * 0.7152 + s * 0.0722, c = o * 0.0193 + a * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function um(e, t, r) {
  let i = e / 95.047, l = t / 100, c = r / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = d(i), l = d(l), c = d(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function Bl(e) {
  const t = cm(e);
  if (!t) return null;
  const r = dm(t.r, t.g, t.b);
  return um(r.x, r.y, r.z);
}
function mi(e, t) {
  const r = e.L - t.L, o = e.a - t.a, a = e.b - t.b;
  return Math.sqrt(r * r + o * o + a * a);
}
function fm() {
  const e = lm();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Bl(i));
  let r = 0, o = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += mi(l, t[f]), d++);
    const u = c / Math.max(1, d);
    u > o && (o = u, r = i);
  }
  const a = new Set(e.map((i, l) => l)), s = [];
  for (s.push(r), a.delete(r); a.size; ) {
    let i = Array.from(a)[0], l = -1;
    for (const c of a) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const p = mi(d, h);
          p < u && (u = p);
        }
      }
      u > l && (l = u, i = c);
    }
    s.push(i), a.delete(i);
  }
  return s.map((i) => e[i]);
}
function hm() {
  return Zo || (Zo = fm()), Zo;
}
function pm(e, t, r) {
  const o = (e + 16) / 116, a = t / 500 + o, s = o - r / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(a) * 95.047, c = i(o) * 100, d = i(s) * 108.883;
  return { X: l, Y: c, Z: d };
}
function mm(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let o = e * 3.2406 + t * -1.5372 + r * -0.4986, a = e * -0.9689 + t * 1.8758 + r * 0.0415, s = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return o = Math.min(1, Math.max(0, i(o))), a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(o * 255), g: Math.round(a * 255), b: Math.round(s * 255) };
}
function gm(e, t, r) {
  return `#${[e, t, r].map((o) => o.toString(16).padStart(2, "0")).join("")}`;
}
function xm(e, t) {
  const r = Bl(e);
  if (!r) return e;
  const o = Math.min(100, Math.max(0, r.L + t)), { X: a, Y: s, Z: i } = pm(o, r.a, r.b), l = mm(a, s, i);
  return gm(l.r, l.g, l.b);
}
function bm() {
  const e = hm(), r = [12, -12, 24, -24].map((a) => e.map((s) => xm(s, a))), o = [...e];
  return r.forEach((a) => o.push(...a)), o;
}
function ym() {
  return (!qo || vm()) && (qo = bm(), Hl = Rl), qo;
}
let Hl = null;
function vm() {
  return Hl !== Rl;
}
function Rt(e) {
  const t = ym();
  return t[e % t.length];
}
let Tn = null, rr = null, or = null, ar = null;
function wm() {
  const e = dr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Tn = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      Tn.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    rr = {}, Object.keys(r).forEach((s) => {
      const i = r[s]?.$value || r[s]?.value;
      typeof i == "string" && (rr[s] = i);
    });
    const o = e.severity || {}, a = e["org-level"] || {};
    ar = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (ar[s] = i);
    }), or = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (or[s] = i);
    });
  }
}
function Co() {
  (!Tn || !rr || !or || !ar) && wm();
}
function vn(e) {
  return Co(), Tn ? Tn[e % Tn.length] : "#212b32";
}
function Sm(e) {
  return Co(), rr ? rr[e] : void 0;
}
function Wr(e, t) {
  return Sm(e) || vn(t);
}
const ma = ["low", "moderate", "high", "critical"];
let Xo = null;
function _m() {
  const e = { color: { ...ko.color, ...dr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), a) : typeof i == "string" ? i : void 0;
  }, r = {};
  return ma.forEach((o) => {
    const a = t(`color.data-viz.severity.${o}`);
    a && (r[o] = a);
  }), r;
}
function zl() {
  return Xo || (Xo = _m()), Xo;
}
function km(e) {
  return zl()[e.toLowerCase()];
}
function Cm(e, t) {
  return km(e) || zl()[ma[t % ma.length]] || Rt(t);
}
function Nm(e) {
  return Co(), or ? or[e] : void 0;
}
function jm(e, t) {
  return Nm(e) || vn(t);
}
const ga = ["trust", "ambulance", "icb", "region"];
let Ko = null;
function Mm() {
  const e = { color: { ...ko.color, ...dr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), a) : typeof i == "string" ? i : void 0;
  }, r = {};
  return ga.forEach((o) => {
    const a = t(`color.data-viz.org-level.${o}`);
    a && (r[o] = a);
  }), r;
}
function Ol() {
  return Ko || (Ko = Mm()), Ko;
}
function Im(e) {
  return Ol()[e.toLowerCase()];
}
function Dm(e, t) {
  return Im(e) || Ol()[ga[t % ga.length]] || Rt(t);
}
function Tm(e) {
  return Co(), ar ? ar[e] : void 0;
}
function Lm(e, t) {
  return Tm(e) || vn(t);
}
let Qo = null;
const $m = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Am(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Em() {
  const e = { color: { ...ko.color, ...dr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const i = a.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, r = {}, o = [];
  return $m.forEach((a) => {
    const s = t(`color.data-viz.region.${a}`);
    s ? r[a] = s : o.push(a);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : o.length && console.warn(`[DataViz] Missing region colour tokens: ${o.join(", ")}.`)), r;
}
function Pm() {
  return Qo || (Qo = Em()), Qo;
}
function Fm(e) {
  return Pm()[Am(e)];
}
function Ln(e, t) {
  return Fm(e) || Rt(t);
}
const Ul = V.createContext(null), ur = () => V.useContext(Ul), uv = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: o
}) => {
  const [a, s] = V.useState(() => new Set(e)), i = r !== void 0, l = V.useMemo(() => i ? new Set(r) : a, [i, r, a]), c = V.useCallback((u) => {
    i || s(new Set(u)), o?.(Array.from(u));
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
  return /* @__PURE__ */ n.jsx(Ul.Provider, { value: d, children: t });
}, Wl = V.createContext(null), nn = () => V.useContext(Wl), Rm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const o = _n(), a = ur(), [s, i] = V.useState(null), l = V.useRef(/* @__PURE__ */ new Map()), [c, d] = V.useState([]), u = V.useCallback(
    (j, w) => {
      l.current.set(j, w);
    },
    []
  ), f = V.useCallback((j) => {
    l.current.delete(j);
  }, []), h = V.useCallback(
    (j, w) => {
      if (!o) return;
      const { xScale: y, yScale: v } = o;
      let $ = null, M = 1 / 0;
      l.current.forEach((E, k) => {
        E.forEach((_, N) => {
          const H = y(_.x), Z = v(_.y), ee = H - j, B = Z - w, J = Math.sqrt(ee * ee + B * B);
          J < M && (M = J, $ = {
            seriesId: k,
            index: N,
            x: _.x,
            y: _.y,
            clientX: H,
            clientY: Z
          });
        });
      }), $ && M <= t ? i($) : i(null);
    },
    [o, t]
  ), p = V.useCallback(() => i(null), []);
  V.useEffect(() => {
    if (!s) {
      d([]);
      return;
    }
    if (!o) return;
    const { xScale: j, yScale: w } = o, y = [];
    l.current.forEach((v, $) => {
      v.forEach((M, E) => {
        (s.x instanceof Date && M.x instanceof Date ? M.x.getTime() === s.x.getTime() : M.x === s.x) && y.push({
          seriesId: $,
          index: E,
          x: M.x,
          y: M.y,
          clientX: j(M.x),
          clientY: w(M.y)
        });
      });
    }), y.sort((v, $) => v.seriesId.localeCompare($.seriesId)), d(y);
  }, [s, o]);
  const x = V.useCallback(
    (j) => {
      if (!s) return;
      const w = l.current.get(s.seriesId);
      if (!w) return;
      let y = s.index + j;
      if (y < 0 || y >= w.length) {
        if (!r) return;
        y = (y + w.length) % w.length;
      }
      const v = w[y];
      if (!o) return;
      const { xScale: $, yScale: M } = o;
      i({
        seriesId: s.seriesId,
        index: y,
        x: v.x,
        y: v.y,
        clientX: $(v.x),
        clientY: M(v.y)
      });
    },
    [s, o, r]
  ), m = V.useCallback(
    (j) => {
      let w = Array.from(l.current.keys());
      if (a && (w = w.filter((H) => !a.isHidden(H))), w.length === 0) return;
      if (!s) {
        const H = w[0], Z = l.current.get(H);
        if (!Z || !o) return;
        const { xScale: ee, yScale: B } = o, J = Z[0];
        i({
          seriesId: H,
          index: 0,
          x: J.x,
          y: J.y,
          clientX: ee(J.x),
          clientY: B(J.y)
        });
        return;
      }
      const y = w.indexOf(s.seriesId);
      if (y === -1) return;
      let v = y + j;
      if (v < 0 || v >= w.length) {
        if (!r) return;
        v = (v + w.length) % w.length;
      }
      const $ = w[v], M = l.current.get($);
      if (!M || !o) return;
      const E = Math.min(s.index, M.length - 1), k = M[E], { xScale: _, yScale: N } = o;
      i({
        seriesId: $,
        index: E,
        x: k.x,
        y: k.y,
        clientX: _(k.x),
        clientY: N(k.y)
      });
    },
    [s, o, r, a]
  ), g = V.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (a && (j = j.filter((E) => !a.isHidden(E))), j.length === 0) return;
    const w = s ? s.seriesId : j[0], y = l.current.get(w);
    if (!y || y.length === 0 || !o) return;
    const v = y[0], { xScale: $, yScale: M } = o;
    i({
      seriesId: w,
      index: 0,
      x: v.x,
      y: v.y,
      clientX: $(v.x),
      clientY: M(v.y)
    });
  }, [s, o, a]), I = V.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (a && (j = j.filter((k) => !a.isHidden(k))), j.length === 0) return;
    const w = s ? s.seriesId : j[0], y = l.current.get(w);
    if (!y || y.length === 0 || !o) return;
    const v = y.length - 1, $ = y[v], { xScale: M, yScale: E } = o;
    i({
      seriesId: w,
      index: v,
      x: $.x,
      y: $.y,
      clientX: M($.x),
      clientY: E($.y)
    });
  }, [s, o, a]), D = V.useCallback(
    () => x(1),
    [x]
  ), T = V.useCallback(
    () => x(-1),
    [x]
  ), C = V.useCallback(
    () => m(1),
    [m]
  ), b = V.useCallback(
    () => m(-1),
    [m]
  ), S = V.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: D,
      focusPrevPoint: T,
      focusNextSeries: C,
      focusPrevSeries: b,
      focusFirstPoint: g,
      focusLastPoint: I
    }),
    [
      s,
      c,
      h,
      p,
      u,
      f,
      D,
      T,
      C,
      b,
      g,
      I
    ]
  );
  return /* @__PURE__ */ n.jsx(Wl.Provider, { value: S, children: e });
}, Bm = ({
  series: e,
  seriesIndex: t,
  palette: r,
  showPoints: o,
  focusablePoints: a,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: c = 1,
  smooth: d = !0,
  gradientFillId: u,
  colors: f
}) => {
  const h = _n();
  if (!h) return null;
  const { xScale: p, yScale: x } = h, g = ur()?.isHidden(e.id) ?? !1, I = g && l === "fade";
  if (g && l === "remove")
    return null;
  const D = nn();
  V.useEffect(() => {
    if (!D) return;
    const w = e.data.map((y) => ({ x: i(y), y: y.y }));
    return D.registerSeries(e.id, w), () => D.unregisterSeries(e.id);
  }, [D, e.id, e.data, i]);
  const T = V.useMemo(
    () => pa(
      e.data,
      (w) => p(i(w)),
      (w) => x(w.y),
      { smooth: d }
    ),
    [e.data, p, x, i, d]
  ), C = V.useMemo(() => {
    if (!e.data.length) return "";
    const [w] = x.domain(), y = ha().x((v) => p(i(v))).y0(() => x(w)).y1((v) => x(v.y));
    return d && y.curve(Ur), y(e.data) || "";
  }, [e.data, p, x, i, d]), b = f && f[t], S = e.color || b || (r === "region" ? Ln(e.id, t) : Rt(t)), j = r === "region" ? Wr(e.id, t) : vn(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: I ? 0.25 : 1,
      "aria-hidden": I ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: C,
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
        o && e.data.map((w, y) => {
          const v = p(i(w)), $ = x(w.y), M = a ? 0 : -1, E = !I && (a && y === s || D?.focused?.seriesId === e.id && D.focused.index === y), k = () => {
            D && !I && D.setFocused({
              seriesId: e.id,
              index: y,
              x: i(w),
              y: w.y,
              clientX: v,
              clientY: $
            });
          }, _ = () => {
            D && D.focused?.seriesId === e.id && D.focused.index === y && D.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: v,
              cy: $,
              r: E ? 5 : 3.5,
              stroke: E ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : j,
              strokeWidth: E ? 2 : 1,
              fill: E ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : S,
              className: "fdp-line-point",
              tabIndex: I ? -1 : M,
              "aria-label": `${e.label || e.id} ${i(w).toDateString()} value ${w.y}`,
              "data-series": e.id,
              "data-index": y,
              onMouseEnter: k,
              onFocus: k,
              onMouseLeave: _,
              onBlur: _
            },
            y
          );
        })
      ]
    }
  );
}, Hm = ({ polite: e = !0, format: t }) => {
  const r = nn(), [o, a] = V.useState(""), s = V.useRef("");
  return V.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let c;
    if (l && l.length > 1) {
      const d = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : zm(i.seriesId, i.x, i.y, i.index);
    if (c !== s.current) {
      s.current = c, a("");
      const d = setTimeout(() => a(c), 10);
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
function zm(e, t, r, o) {
  const a = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${o + 1}, ${a}, value ${r}`;
}
const fv = () => {
  const e = nn(), t = dn();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: o } = e, { innerWidth: a, innerHeight: s } = t, i = Math.min(Math.max(r.clientX, 0), a), l = Math.min(Math.max(r.clientY, 0), s), c = i + 8, d = l - 8, u = o.length > 1, f = r.x instanceof Date ? r.x.toDateString() : String(r.x), h = u ? f : `${f} • ${r.y}`, p = /\d+$/.exec(r.seriesId || ""), x = p ? parseInt(p[0], 10) - 1 : 0, m = Rt(x >= 0 ? x : 0) || "#005eb8", g = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: g, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: g, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const D = o.map((j) => `${j.seriesId}: ${j.y}`), T = [h, ...D], C = T.reduce((j, w) => Math.max(j, w.length), 0), b = Math.max(90, C * 6.2 + 16), S = 16 * T.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: c, y: d - S, rx: 4, ry: 4, width: b, height: S, fill: "#212b32", opacity: 0.92 }),
        T.map((j, w) => /* @__PURE__ */ n.jsx("text", { x: c + 8, y: d - S + 6 + 16 * (w + 0.7), fill: "#fff", fontSize: 12, children: j }, w))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, hv = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: o = !1,
  adjustStrokeForWhiteBackground: a = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: c
}) => {
  const d = ur(), u = !!(d && !o && !l && s === void 0), f = o || u, h = e || [], p = s !== void 0, [x, m] = V.useState(new Set(i)), g = p ? new Set(s) : x, [I, D] = V.useState(""), T = (C) => {
    if (u && d) {
      const M = d.isHidden(C);
      d.toggle(C);
      const k = h.find((N) => N.id === C)?.label || C, _ = c ? c(C, M, k) : `${k} ${M ? "shown" : "hidden"}`;
      D(_);
      return;
    }
    if (!f) return;
    const b = new Set(g), S = b.has(C);
    S ? b.delete(C) : b.add(C), p || m(b);
    const j = h.filter((M) => !b.has(M.id)).map((M) => M.id), w = Array.from(b);
    l?.(j, w);
    const v = h.find((M) => M.id === C)?.label || C, $ = c ? c(C, S, v) : `${v} ${S ? "shown" : "hidden"}`;
    D($);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: h.map((C, b) => {
      const S = C.palette || t, j = C.color || (S === "region" ? Ln(C.id, b) : S === "severity" ? Cm(C.id, b) : S === "org-level" ? Dm(C.id, b) : Rt(b));
      let w = C.stroke || (S === "region" ? Wr(C.id, b) : S === "severity" ? jm(C.id, b) : S === "org-level" ? Lm(C.id, b) : vn(b));
      if (a && w) {
        const $ = w.trim().toLowerCase();
        ($ === "#fff" || $ === "#ffffff" || $ === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test($)) && (w = "#212b32");
      }
      const y = u && d ? d.isHidden(C.id) : g.has(C.id), v = f ? {
        "aria-pressed": !y,
        "aria-label": `${C.label} (${y ? "show" : "hide"})`,
        onClick: () => T(C.id)
      } : { "aria-label": C.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${y ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: j,
              backgroundImage: C.patternDataUrl ? `url(${C.patternDataUrl})` : void 0,
              backgroundSize: C.patternDataUrl ? "auto" : void 0,
              borderColor: w
            },
            ...v
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: C.label })
      ] }, C.id);
    }) }),
    f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: I })
  ] });
}, pv = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: o,
  areaOnly: a = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = _n();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, m = ur()?.isHidden(e.id) ?? !1, g = m && s === "fade";
  if (m && s === "remove") return null;
  const I = nn();
  V.useEffect(() => {
    if (!I) return;
    const j = e.data.map((w) => ({ x: o(w), y: w.y }));
    return I.registerSeries(e.id, j), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, o]);
  const D = u && u[t], T = e.color || D || (r === "region" ? Ln(e.id, t) : Rt(t)), C = V.useMemo(() => c && c.length === e.data.length ? pa(
    e.data,
    (j) => h(o(j)),
    (j) => {
      const w = e.data.indexOf(j);
      return p(c[w].y1);
    },
    { smooth: l }
  ) : pa(
    e.data,
    (j) => h(o(j)),
    (j) => p(j.y),
    { smooth: l }
  ), [e.data, c, h, p, o, l]), b = V.useMemo(() => {
    if (c && c.length === e.data.length) {
      const $ = ha().x((M) => h(o(M))).y0((M, E) => p(c[E].y0)).y1((M, E) => p(c[E].y1));
      return l && $.curve(Ur), $(e.data) || "";
    }
    const [j, w] = p.domain();
    let y = i;
    y < j ? y = j : y > w && (y = w);
    const v = ha().x(($) => h(o($))).y0(() => p(y)).y1(($) => p($.y));
    return l && v.curve(Ur), v(e.data) || "";
  }, [e.data, c, h, p, o, i, l]), S = V.useId();
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
            d: b,
            fill: d ? `url(#${S})` : T,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !a && /* @__PURE__ */ n.jsx("path", { d: C, fill: "none", stroke: T, strokeWidth: 1 })
      ]
    }
  );
}, mv = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
  palette: o,
  parseX: a,
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
  gradientFill: I = !1,
  gradientStrokeMatch: D = !0,
  opacity: T = 1,
  fadedOpacity: C = 0.25,
  flatFillOpacity: b = 1,
  colors: S
}) => {
  const j = Math.max(0, m), w = _n(), y = dn();
  if (!w || !y) return null;
  const { xScale: v, yScale: $ } = w, E = ur()?.isHidden(e.id) ?? !1, k = E && f === "fade";
  if (E && f === "remove") return null;
  const _ = nn();
  V.useEffect(() => {
    if (!_) return;
    const q = e.data.map((ne) => ({ x: a(ne), y: ne.y }));
    return _.registerSeries(e.id, q), () => _.unregisterSeries(e.id);
  }, [_, e.id, e.data, a]);
  const N = typeof v.bandwidth == "function", H = N ? v.bandwidth() : void 0, Z = V.useMemo(() => {
    if (H != null) return H;
    const q = p && p.length ? p : [e], ne = [];
    q.forEach((ce) => {
      ce.data.forEach((be) => {
        const he = v(a(be));
        Number.isFinite(he) && ne.push(he);
      });
    });
    const ue = ne.sort((ce, be) => ce - be);
    if (ue.length <= 1) return 40;
    const W = [];
    for (let ce = 1; ce < ue.length; ce++)
      W.push(ue[ce] - ue[ce - 1]);
    return W.sort((ce, be) => ce - be), (W[Math.floor(W.length / 2)] || 40) * i;
  }, [e.data, p, v, a, i, H]), { basePerBar: ee } = V.useMemo(() => {
    if (N) {
      const ue = Z, W = Math.max(
        1,
        (ue - l * (r - 1)) / r
      ), ae = e.barWidth ?? c;
      let ce = ae ? Math.min(ae, ue) : W;
      if (d) {
        const be = ue * Math.min(1, Math.max(0.05, u)), he = Math.max(
          1,
          (be - l * (r - 1)) / r
        );
        ce = ae ? Math.min(ce, he) : he;
      }
      return { basePerBar: ce };
    }
    const q = e.barWidth ?? c, ne = Math.max(
      1,
      (Z - l * (r - 1)) / r
    );
    if (d) {
      const ue = p && p.length ? p : [e], W = [];
      ue.forEach(
        (Ge) => Ge.data.forEach((Te) => {
          const Le = v(a(Te));
          Number.isFinite(Le) && W.push(Le);
        })
      ), W.sort((Ge, Te) => Ge - Te);
      const ae = [];
      for (let Ge = 1; Ge < W.length; Ge++)
        ae.push(W[Ge] - W[Ge - 1]);
      ae.sort((Ge, Te) => Ge - Te);
      const be = (ae[Math.floor(ae.length / 2)] || Z) * Math.min(1, Math.max(0.05, u)), he = Math.max(
        1,
        (be - l * (r - 1)) / r
      );
      return { basePerBar: q ? Math.min(q, he) : he };
    }
    return q ? { basePerBar: Math.min(q, ne) } : { basePerBar: ne };
  }, [
    N,
    Z,
    l,
    r,
    c,
    e.barWidth,
    d,
    u,
    p,
    v,
    a
  ]), B = V.useMemo(() => {
    if (N) return [];
    const q = [];
    return (p && p.length ? p : [e]).forEach(
      (ue) => ue.data.forEach((W) => {
        const ae = v(a(W));
        Number.isFinite(ae) && q.push(ae);
      })
    ), q.sort((ue, W) => ue - W), Array.from(new Set(q));
  }, [N, p, e, v, a]), J = V.useMemo(() => {
    if (N)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: y.innerWidth }
      ];
    const q = [];
    for (let ne = 0; ne < B.length; ne++) {
      const ue = B[ne], W = ne === 0 ? 0 : (B[ne - 1] + ue) / 2, ae = ne === B.length - 1 ? y.innerWidth : (ue + B[ne + 1]) / 2;
      q.push({
        center: ue,
        left: Math.max(0, W),
        right: Math.min(y.innerWidth, ae)
      });
    }
    return q;
  }, [N, B, y.innerWidth]), A = V.useMemo(() => {
    if (N || !J.length)
      return;
    const q = Math.min(1, Math.max(0.05, i)), ne = J.map((be) => Math.max(2, be.right - be.left)), ue = ne.map(
      (be) => Math.max(2, Math.min(be - 1, be * q))
    );
    let W = Math.min(...ue);
    if (g)
      if (r <= 1) {
        const be = Math.min(...ne.map((he) => he - 1));
        be >= g && W < g && (W = Math.min(be, g));
      } else {
        const be = Math.min(...ne.map((Me) => Me - 1)), he = g * r + (r - 1) * (g * j);
        he <= be && W < he && (W = he);
      }
    if (r <= 1)
      return g && W < g && ne.every((he) => he >= g) ? { groupWidth: g, barWidth: g } : { groupWidth: W, barWidth: W };
    let ae = W / (r + (r - 1) * j);
    return ae < 1 && (ae = 1), g && ae < g && g * r + (r - 1) * (g * j) <= W && (ae = g), { groupWidth: ae * r + (r - 1) * (ae * j), barWidth: ae };
  }, [
    N,
    J,
    i,
    r,
    j,
    g
  ]), L = S && S[t] ? S[t] : void 0, G = e.color || L || (o === "region" ? Ln(e.id, t) : Rt(t)), F = o === "region" ? Wr(e.id, t) : vn(t), O = D && (e.color || L) ? G : F, X = Number.isFinite($(0)) ? $(0) : $.range()[0], K = V.useId();
  return x && x.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: k ? C : T,
      "aria-hidden": k ? !0 : void 0,
      children: [
        I && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: K,
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
          const ue = a(q), W = v(N ? q.x : ue);
          let ae, ce;
          if (N)
            ae = Z, ce = W;
          else {
            const Y = J.find(
              (se) => Math.abs(se.center - W) < 0.5
            );
            if (!Y || !A)
              ae = ee, ce = W - ee / 2;
            else {
              const { groupWidth: se } = A;
              ae = se;
              let fe = W - se / 2;
              fe < Y.left && (fe = Y.left), fe + se > Y.right && (fe = Math.max(Y.left, Y.right - se)), ce = fe;
            }
          }
          const be = x[ne], he = $(be.y0), Me = $(be.y1), Ge = Math.min(he, Me), Te = Math.abs(Me - he) || 1;
          if (!N && g && ae < g) {
            const Y = J.find(
              (se) => Math.abs(se.center - W) < 0.5
            );
            if (Y) {
              const se = Math.max(2, Y.right - Y.left - 1), fe = Math.min(se, g);
              fe > ae && (ae = fe, ce = Math.max(
                Y.left,
                Math.min(Y.right - ae, W - ae / 2)
              ));
            }
          }
          const Le = !k && _?.focused?.seriesId === e.id && _.focused.index === ne, we = () => {
            !_ || k || _.setFocused({
              seriesId: e.id,
              index: ne,
              x: ue,
              y: be.y1 - be.y0,
              clientX: ce + ae / 2,
              clientY: Ge
            });
          }, P = () => {
            _?.focused?.seriesId === e.id && _.focused.index === ne && _.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: ce,
              y: Ge,
              width: ae,
              height: Te,
              fill: I ? `url(#${K})` : G,
              ...I ? {} : { fillOpacity: b },
              stroke: Le ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : I && D ? G : void 0,
              strokeWidth: Le ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: k || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${be.y1 - be.y0}`,
              onMouseEnter: we,
              onFocus: we,
              onMouseLeave: P,
              onBlur: P
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
      opacity: k ? C : T,
      "aria-hidden": k ? !0 : void 0,
      children: [
        I && /* @__PURE__ */ n.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: K,
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
          h === "category" && e.data.map((q, ne) => {
            const W = S && S[ne] || (o === "region" ? Ln(String(q.x), ne) : Rt(ne)), ae = `${K}-${ne}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: ae,
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
              ae
            );
          })
        ] }),
        e.data.map((q, ne) => {
          const ue = a(q), W = v(N ? q.x : ue);
          let ae, ce;
          if (N) {
            const R = Z;
            if (r <= 1)
              ce = R, ae = W;
            else {
              ce = Math.max(
                1,
                R / (r + (r - 1) * j)
              );
              const U = ce * j, oe = ce * r + U * (r - 1);
              ae = W + (R - oe) / 2 + t * (ce + U);
            }
          } else {
            const R = J.find((U) => U.center === W);
            if (!R || !A)
              ce = ee, ae = W - ee / 2, g && ce < g && (ce = g, ae = W - ce / 2);
            else {
              const { barWidth: U } = A;
              ce = U;
              const oe = r > 1 ? U * j : 0, Q = ce * r + oe * (r - 1);
              let re = W - Q / 2;
              re < R.left && (re = R.left), re + Q > R.right && (re = Math.max(R.left, R.right - Q)), ae = re + t * (ce + oe);
            }
            if (g && ce < g) {
              const U = J.find(
                (oe) => Math.abs(oe.center - W) < 0.5
              );
              if (U) {
                const oe = Math.max(2, U.right - U.left - 1), Q = Math.min(oe, g);
                if (Q > ce)
                  if (r <= 1)
                    ce = Q, ae = Math.max(
                      U.left,
                      Math.min(U.right - ce, W - ce / 2)
                    );
                  else {
                    const re = Q * j, le = Q * r + re * (r - 1);
                    if (le <= U.right - U.left - 1) {
                      ce = Q;
                      const de = le;
                      let ye = W - de / 2;
                      ye < U.left && (ye = U.left), ye + de > U.right && (ye = Math.max(
                        U.left,
                        U.right - de
                      )), ae = ye + t * (ce + re);
                    }
                  }
              }
            }
          }
          const be = ae + ce / 2, he = $(q.y), Me = Math.min(X, he), Ge = Math.abs(X - he), Te = !k && _?.focused?.seriesId === e.id && _.focused.index === ne, Le = () => {
            !_ || k || _.setFocused({
              seriesId: e.id,
              index: ne,
              x: ue,
              y: q.y,
              clientX: be,
              clientY: he
            });
          }, we = () => {
            _?.focused?.seriesId === e.id && _.focused.index === ne && _.clear();
          }, P = h === "category" && S ? S[ne] : void 0, Y = h === "category" ? P || (o === "region" ? Ln(String(q.x), ne) : Rt(ne)) : G, se = h === "category" ? `${K}-${ne}` : K, fe = I && D ? Y : h === "category" ? o === "region" ? Wr(String(q.x), ne) : vn(ne) : O, pe = Te ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : fe || Y;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: ae,
              y: Me,
              width: ce,
              height: Ge || 1,
              fill: I ? `url(#${se})` : Y,
              ...I ? {} : { fillOpacity: b },
              stroke: pe,
              strokeWidth: Te ? 2 : 1,
              className: "fdp-bar",
              tabIndex: k || !s ? -1 : 0,
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
}, gv = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: o = 0.1,
  paddingOuter: a = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = dn(), c = t ?? l?.innerWidth ?? 0, d = r ?? l?.innerHeight ?? 0, u = V.useMemo(() => e.flatMap((g) => g.data), [e]), f = V.useMemo(() => {
    const g = /* @__PURE__ */ new Set();
    return u.forEach((I) => g.add(I.x)), Array.from(g);
  }, [u]), h = V.useMemo(
    () => Math.max(0, ...u.map((g) => g.y)),
    [u]
  ), p = V.useMemo(
    () => Ki().domain(f).range([0, c]).paddingInner(o).paddingOuter(a),
    [f, c, o, a]
  ), x = V.useMemo(
    () => Er().domain([0, h]).nice().range([d, 0]),
    [h, d]
  ), m = V.useMemo(
    () => ({
      xScale: p,
      yScale: x,
      getXTicks: () => f,
      getYTicks: (g = i) => x.ticks(g)
    }),
    [p, x, f, i]
  );
  return /* @__PURE__ */ n.jsx(os.Provider, { value: m, children: s });
}, xv = ({
  title: e,
  description: t,
  source: r,
  table: o,
  className: a,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = V.useId(), d = s || c, u = t ? `${d}-desc` : void 0, f = r ? `${d}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: d,
      className: Pt("fdp-chart fdp-chart--noscript", a),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Pt(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
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
}, bv = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: o }) => {
  const a = V.useRef(null);
  return V.useEffect(() => {
    const s = a.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
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
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: a, children: o });
}, Om = ({
  label: e,
  value: t,
  unit: r,
  delta: o,
  status: a = "neutral",
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
  const I = V.useId(), D = x || I, T = `${D}-label`, C = `${D}-value`, b = `${D}-delta`, S = typeof t == "number" && !Number.isNaN(t), j = d ? "—" : u ? "" : S ? f ? f(t) : t.toLocaleString() : t;
  let w, y = "", v = "";
  if (o && !d && !u) {
    w = o.direction || (o.value > 0 ? "up" : o.value < 0 ? "down" : "neutral");
    const $ = Math.abs(o.value), M = w === "up" ? `+${$}` : w === "down" ? `-${$}` : "0", E = o.isPercent ? "%" : "";
    if (y = `${M}${E}`, o.ariaLabel)
      v = o.ariaLabel;
    else {
      const k = o.invert ? w === "down" : w === "up";
      v = `${w === "neutral" ? "no change" : w === "up" ? "up" : "down"} ${$}${E}${w === "neutral" ? "" : k ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: Pt(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        a && `fdp-metric-card--status-${a}`,
        d && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        h
      ),
      style: p,
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
            /* @__PURE__ */ n.jsx("div", { id: C, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: j }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !d && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          o && !d && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: b,
              "aria-label": v,
              className: Pt(
                "fdp-metric-card__delta",
                w && `fdp-metric-card__delta--${w}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: y }),
                o.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: o.period })
              ]
            }
          ) }),
          c && c.length > 0 && !d && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        g && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: g }),
        m && o && !o.ariaLabel && !d && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: v })
      ] })
    }
  );
};
var pt = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(pt || {}), Gl = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Gl || {}), ln = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(ln || {}), qe = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(qe || {});
const as = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
as.reduce(
  (e, t, r) => (e[t] = r + 1, e),
  {}
);
const Um = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Wm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Yl = as.reduce(
  (e, t, r) => (e[t] = {
    id: t,
    rank: r + 1,
    label: Um[t],
    category: Wm[t],
    participatesInRanking: !0
  }, e),
  {}
);
as.map(
  (e) => Yl[e]
);
var sr = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(sr || {}), cn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(cn || {}), Vl = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Vl || {});
const $n = {
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
function No(e) {
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
function jo(e) {
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
function Zl(e) {
  switch (e) {
    case cn.Pass:
      return "Target met";
    case cn.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Gm(e, t, r) {
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
function ql(e) {
  return e ? Tt[e]?.token ?? Tt.neither.token : Tt.neither.token;
}
function Ym(e) {
  return e ? Tt[e]?.hex ?? Tt.neither.hex : Tt.neither.hex;
}
var mn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(mn || {});
const Vm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Zm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var mt = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(mt || {}), We = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(We || {}), Ct = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Ct || {}), Fe = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Fe || {});
const qm = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, o = parseInt(t.slice(2, 4), 16) / 255, a = parseInt(t.slice(4, 6), 16) / 255, s = [r, o, a].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, Mo = {
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
Object.values(Mo).forEach((e) => {
  e.text || (e.text = qm(e.hex));
});
const Jl = (e) => Mo[e], ss = (e) => Mo[e].judgement || "none", gi = {
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
function Jm(e, t) {
  let r;
  return e === "common_cause" ? r = gi.common : r = gi.special[t === "lower" ? "lower" : "higher"], r.map((o) => ({ ...o }));
}
let xa = null;
try {
  xa = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const St = (e, t) => {
  if (!xa) return t;
  const r = e.split(".");
  let o = xa;
  for (const s of r) {
    if (o == null) break;
    o = o[s];
  }
  const a = o;
  return a == null ? t : typeof a == "string" || typeof a == "number" ? String(a) : a.$value != null ? String(a.$value) : a.value != null ? String(a.value) : t;
}, Io = () => ({
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
}), Do = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, To = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, Xl = () => St(Do.improvement, To.improvement), Kl = () => St(Do.concern, To.concern), Xm = () => St(Do.noJudgement, To.noJudgement), fn = () => St(Do.common, To.common);
function Sr(e) {
  switch (e) {
    case qe.Improvement:
      return Xl();
    case qe.Concern:
      return Kl();
    case qe.Neither:
    case qe.Suppressed:
    default:
      return fn();
  }
}
function Ql(e) {
  switch (e) {
    case Fe.SpecialCauseImproving:
      return Xl();
    case Fe.SpecialCauseDeteriorating:
      return Kl();
    case Fe.SpecialCauseNoJudgement:
      return Xm();
    case Fe.CommonCause:
    default:
      return fn();
  }
}
var jt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(jt || {}), Xe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Xe || {}), Ee = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Ee || {}), ct = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(ct || {}), gn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(gn || {}), At = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(At || {}), An = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(An || {}), Mn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Mn || {}), vt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(vt || {}), Bt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Bt || {}), Et = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Et || {}), Gr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Gr || {}), Yr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Yr || {});
const on = {
  [ct.SinglePoint]: 1,
  [ct.TwoSigma]: 2,
  [ct.Shift]: 3,
  [ct.Trend]: 4
}, xi = 3.267, Km = 2.66, bi = 0.2777;
function Ue(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function In(e) {
  return e.reduce((t, r) => t + r, 0) / (e.length || 1);
}
function yi(e, t) {
  const r = new Array(e.length).fill(null);
  let o = null;
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    if (!(t[a] || !Ue(s))) {
      if (o !== null) {
        const i = e[o];
        Ue(i) && (r[a] = Math.abs(s - i));
      }
      o = a;
    }
  }
  return r;
}
function vi(e, t) {
  const r = e.filter(Ue);
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let o = r.slice();
  if (t) {
    const s = In(o), i = xi * s;
    o = o.filter((l) => l <= i);
  }
  const a = In(o);
  return { mrMean: a, mrUcl: xi * a };
}
function wi(e, t) {
  if (!Ue(e) || !Ue(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const r = Km * t, o = 2 / 3 * r, a = 1 / 3 * r;
  return {
    upperProcessLimit: e + r,
    lowerProcessLimit: e - r,
    upperTwoSigma: e + o,
    lowerTwoSigma: e - o,
    upperOneSigma: e + a,
    lowerOneSigma: e - a
  };
}
function Qm(e, t, r, o) {
  if (e === jt.T) {
    const f = t.map((w) => Ue(w) && w > 0 ? Math.pow(w, bi) : null), h = yi(f, r), p = vi(h, o), x = f.filter((w, y) => !r[y] && Ue(w)), m = x.length ? In(x) : NaN, g = wi(m, p.mrMean), I = (w) => Ue(w) && w > 0 ? Math.pow(w, 1 / bi) : null, D = Ue(g.upperProcessLimit) ? I(g.upperProcessLimit) : null, T = Ue(g.lowerProcessLimit) && g.lowerProcessLimit > 0 ? I(g.lowerProcessLimit) : null, C = Ue(g.upperTwoSigma) ? I(g.upperTwoSigma) : null, b = Ue(g.lowerTwoSigma) && g.lowerTwoSigma > 0 ? I(g.lowerTwoSigma) : null, S = Ue(g.upperOneSigma) ? I(g.upperOneSigma) : null, j = Ue(g.lowerOneSigma) && g.lowerOneSigma > 0 ? I(g.lowerOneSigma) : null;
    return {
      mean: Ue(m) && m > 0 ? I(m) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: D,
      lowerProcessLimit: T,
      upperTwoSigma: C,
      lowerTwoSigma: b,
      upperOneSigma: S,
      lowerOneSigma: j
    };
  }
  if (e === jt.G) {
    const f = t.filter(($, M) => !r[M] && Ue($)), h = f.length ? In(f) : NaN, p = Ue(h) ? 1 / (h + 1) : NaN, x = ($) => {
      if (!Ue(p) || p <= 0 || p >= 1) return NaN;
      const M = Math.ceil(Math.log(1 - $) / Math.log(1 - p)) - 1;
      return Math.max(0, M);
    }, m = 135e-5, g = 1 - 135e-5, I = 0.02275, D = 1 - 0.02275, T = 0.158655, C = 1 - 0.158655, b = x(g), S = x(m), j = x(D), w = x(I), y = x(C), v = x(T);
    return {
      mean: Ue(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Ue(b) ? b : null,
      lowerProcessLimit: Ue(S) ? S : null,
      upperTwoSigma: Ue(j) ? j : null,
      lowerTwoSigma: Ue(w) ? w : null,
      upperOneSigma: Ue(y) ? y : null,
      lowerOneSigma: Ue(v) ? v : null
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
  const a = yi(t, r), s = a.filter(Ue), i = s.length ? In(s) : NaN, l = Ue(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, x) => {
      if (r[x] || !Ue(p)) return h;
      if (!o)
        return h.push(p), h;
      const m = a[x];
      return (m === null || !Ue(l) || Ue(m) && m <= l) && h.push(p), h;
    }, []);
    c = f.length ? In(f) : NaN;
  }
  const d = vi(a, o), u = wi(c, d.mrMean);
  return {
    mean: c,
    mr: a,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function eg(e, t) {
  const r = e.map((c, d) => d).filter((c) => !e[c].ghost && Ue(e[c].value)), o = (c) => e[c], a = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const c of r) {
    const d = o(c);
    if (!Ue(d.mean) || !Ue(d.value) ? (i = [], l = []) : d.value > d.mean ? (i.push(c), l = []) : d.value < d.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= a)
      for (const u of i) o(u).shiftUp = !0;
    if (l.length >= a)
      for (const u of l) o(u).shiftDown = !0;
  }
  for (let c = 0; c <= r.length - 3; c++) {
    const u = r.slice(c, c + 3).map(o);
    if (!u.every((C) => Ue(C.value) && Ue(C.mean)))
      continue;
    const f = u[0].mean, h = u.every((C) => C.value > f), p = u.every((C) => C.value < f);
    if (!h && !p)
      continue;
    const x = u[0].upperTwoSigma ?? 1 / 0, m = u[0].lowerTwoSigma ?? -1 / 0, g = u[0].upperProcessLimit ?? 1 / 0, I = u[0].lowerProcessLimit ?? -1 / 0, D = u.filter((C) => t.twoSigmaIncludeAboveThree ? C.value > x : C.value > x && C.value <= g), T = u.filter((C) => t.twoSigmaIncludeAboveThree ? C.value < m : C.value < m && C.value >= I);
    h && D.length >= 2 && D.forEach((C) => C.twoSigmaUp = !0), p && T.length >= 2 && T.forEach((C) => C.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= r.length - 5; c++) {
      const u = r.slice(c, c + 5).map(o);
      if (!u.every((D) => Ue(D.value) && Ue(D.mean)))
        continue;
      const f = u[0].mean, h = u.every((D) => D.value > f), p = u.every((D) => D.value < f);
      if (!h && !p)
        continue;
      const x = u[0].upperOneSigma ?? 1 / 0, m = u[0].lowerOneSigma ?? -1 / 0, g = u.filter((D) => D.value > x), I = u.filter((D) => D.value < m);
      h && g.length >= 4 && g.forEach((D) => D.fourOfFiveUp = !0), p && I.length >= 4 && I.forEach((D) => D.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= r.length - s; c++) {
    const d = r.slice(c, c + s), u = d.map(o);
    if (!u.every((p) => Ue(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => o(p).trendUp = !0), h && d.forEach((p) => o(p).trendDown = !0);
  }
}
function ec(e) {
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
  const o = t.reduce((i, l) => Math.max(i, l.rank), 0), a = r.reduce((i, l) => Math.max(i, l.rank), 0), s = o > a ? gn.Upwards : a > o ? gn.Downwards : gn.Same;
  return { up: t, dn: r, upMax: o, dnMax: a, primeDirection: s };
}
function Si(e, t) {
  const r = t === Xe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Xe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, o = t === Xe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Xe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: r, opposite: o };
}
function _i(e, t, r, o = !1, a, s, i = !1) {
  const { up: l, dn: c, upMax: d, dnMax: u, primeDirection: f } = ec(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && tg({ row: e, metric: t, metricConflictRule: r, preferImprovementWhenConflict: o, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: a, ruleHierarchy: s }), t === Xe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementHigh : e.specialCauseConcernValue !== null ? Ee.ConcernLow : Ee.CommonCause : t === Xe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementLow : e.specialCauseConcernValue !== null ? Ee.ConcernHigh : Ee.CommonCause : e.variationIcon = Ee.CommonCause;
  const x = e.specialCauseImprovementValue !== null ? At.Up : e.specialCauseConcernValue !== null ? At.Down : void 0, m = x === At.Up ? d : x === At.Down ? u : Math.max(d, u);
  e.primeRank = m || void 0;
  const g = x === At.Up ? l.find((I) => I.rank === m) : x === At.Down ? c.find((I) => I.rank === m) : void 0;
  return e.primeRuleId = g?.id, { originalImprovement: h, originalConcern: p };
}
function tg(e) {
  const {
    row: t,
    metric: r,
    metricConflictRule: o,
    preferImprovementWhenConflict: a,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? gn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
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
  const d = a ? Mn.PreferImprovement : l ?? Mn.SqlPrimeThenRule;
  if (d === Mn.PreferImprovement) {
    r === Xe.Up ? t.specialCauseConcernValue = null : r === Xe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === Mn.RuleHierarchy) {
    const u = c ?? [ct.Trend, ct.Shift, ct.TwoSigma, ct.SinglePoint], { up: f, dn: h } = ec(t);
    for (const p of u) {
      const x = f.some((g) => g.id === p), m = h.some((g) => g.id === p);
      if (x && !m) {
        r === Xe.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !x) {
        r === Xe.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (x && m) {
        (r === Xe.Up || r === Xe.Down) && (o === An.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === gn.Upwards ? r === Xe.Up ? t.specialCauseConcernValue = null : r === Xe.Down && (t.specialCauseImprovementValue = null) : i === gn.Downwards ? r === Xe.Up ? t.specialCauseImprovementValue = null : r === Xe.Down && (t.specialCauseConcernValue = null) : o === An.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var ba = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(ba || {});
function ng(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function rg(e) {
  const t = ng(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function ki(e) {
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
  }), a = (i, l, c, d, u, f, h, p) => {
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
      const I = e[d];
      if (!I || I.value == null || I.ghost || !(l === "Up" ? I.trendUp : I.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, x = 1 / 0, m = -1 / 0, g = 0;
    for (let I = c; I <= u; I++) {
      const D = e[I];
      if (D.value == null) continue;
      const T = D.value - (D.mean ?? 0), C = rg(T);
      if (!C) {
        h !== void 0 && (a(f, h, I - 1, p, x, m, g, l), h = void 0, p = void 0, x = 1 / 0, m = -1 / 0, g = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: x, maxV: m, maxAbsDelta: g } = (() => {
          const b = r(I, C, D.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(T)
          };
        })());
      else if (C !== p)
        a(f, h, I - 1, p, x, m, g, l), { segStart: h, segSide: p, minV: x, maxV: m, maxAbsDelta: g } = (() => {
          const b = r(I, C, D.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(T)
          };
        })();
      else {
        const b = o(D.value, Math.abs(T), x, m, g);
        x = b.minV, m = b.maxV, g = b.maxAbsDelta;
      }
    }
    h !== void 0 && a(f, h, u, p, x, m, g, l), t.push({ trendDirection: l, start: c, end: u, segments: f }), s = u + 1;
  }
  return t;
}
function og(e) {
  if (e === Xe.Up) return "Above";
  if (e === Xe.Down) return "Below";
}
function ag(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function Ci(e, t) {
  const r = t.strategy ?? vt.CrossingAfterFavourable, o = og(t.metricImprovement), a = ag(o), s = [];
  for (const i of e) {
    if (!o) {
      if (r === vt.ExtremeFavourable || r === vt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const d of l)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        s.push(c);
      }
      continue;
    }
    if (r === vt.FavourableSide) {
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (r === vt.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
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
      c && s.push(c);
      continue;
    }
    if (r === vt.CrossingAfterUnfavourable) {
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
    if (r === vt.ExtremeFavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      s.push(c);
      continue;
    }
    if (r === vt.ExtremeUnfavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      s.push(c);
      continue;
    }
    if (r === vt.FirstFavourable) {
      const l = i.segments.find((c) => c.side === o);
      l && s.push(l);
      continue;
    }
    if (r === vt.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && s.push(l);
      continue;
    }
    if (r === vt.LongestFavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      s.push(c);
      continue;
    }
    if (r === vt.LongestUnfavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      s.push(c);
      continue;
    }
    if (r === vt.LastFavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (r === vt.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var it = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(it || {}), Bn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Bn || {});
function sg(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), r = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: r };
}
function fr(e, t) {
  const r = t.metricImprovement, o = t.trendVisualMode ?? "Ungated", a = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = sg(s);
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
        if (o === "Ungated" && r !== Xe.Neither) {
          if (i && !l)
            return r === Xe.Up ? "Improvement" : "Concern";
          if (l && !i)
            return r === Xe.Down ? "Improvement" : "Concern";
        }
        return a ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function ig(e, t, r) {
  const o = r?.mode ?? "Disabled";
  if (!e.length) return [];
  let a = fr(e, {
    metricImprovement: t,
    trendVisualMode: Bn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (o !== "RecalcCrossing" || t === Xe.Neither) return a;
  const s = Math.max(0, r?.preWindow ?? 2), i = Math.max(0, r?.postWindow ?? 3), l = r?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= a.length) return;
    const p = a[f];
    (p === it.Common || p === it.NoJudgement) && (a[f] = h);
  }, d = (f) => {
    if (f == null) return null;
    const h = e.reduce((x, m) => (m.partitionId === f && typeof m.value == "number" && !m.ghost && x.push(m.value), x), []);
    return h.length ? h.reduce((x, m) => x + m, 0) / h.length : null;
  }, u = Array.isArray(r?.boundaryIndices) && r.boundaryIndices.length ? r.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, p) => {
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
    for (let S = f - 1; S >= 0; S--) {
      const j = e[S];
      if (j.partitionId !== h.partitionId) break;
      if (typeof j.mean == "number") {
        g = j.mean;
        break;
      }
    }
    let I = null;
    for (let S = f; S < e.length; S++) {
      const j = e[S];
      if (j.partitionId !== p.partitionId) break;
      if (typeof j.mean == "number") {
        I = j.mean;
        break;
      }
    }
    if (g == null && (g = d(h.partitionId ?? null)), I == null && (I = d(p.partitionId ?? null)), g == null || I == null)
      continue;
    const D = I - g, T = t === Xe.Up ? D > 0 : D < 0, C = T ? it.Improvement : it.Concern, b = l === "Same" ? C : T ? it.Concern : it.Improvement;
    for (let S = 1; S <= s; S++) {
      const j = f - S;
      if (j < x) break;
      c(j, b);
    }
    for (let S = 0; S < i; S++) {
      const j = f + S;
      if (j > m) break;
      c(j, C);
    }
  }
  return a;
}
function tc(e) {
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
function hr(e) {
  const { chartType: t, metricImprovement: r, data: o } = e, a = tc(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: An.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Mn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Bt.Off,
    trendSegmentationStrategy: vt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...a
  }, i = a?.trendSegmentationMode || (a?.trendFavourableSegmentation === !0 ? Bt.Always : a?.trendFavourableSegmentation === !1 ? Bt.Off : s.trendSegmentationMode), l = o.map((m, g) => ({
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
  const u = [], f = (s.trendFavourableSegmentation || i !== Bt.Off) && !s.preferImprovementWhenConflict, h = l.filter((m) => !m.ghost && Ue(m.value)).length, p = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let x = 0;
  for (const m of c) {
    x++;
    const g = m.map((b) => b.value), I = m.map((b) => b.ghost), D = Qm(
      t,
      g,
      I,
      !!s.excludeMovingRangeOutliers
    ), T = m.map((b, S) => {
      const j = !b.ghost && Ue(b.value) ? g.slice(0, S + 1).filter((y, v) => !I[v] && Ue(y)).length : 0, w = p ? !0 : j >= s.minimumPoints;
      return {
        rowId: b.rowId,
        x: b.x,
        value: Ue(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: x,
        pointRank: j,
        mean: (w || p) && Ue(D.mean) ? D.mean : null,
        upperProcessLimit: w || p ? D.upperProcessLimit : null,
        lowerProcessLimit: w || p ? D.lowerProcessLimit : null,
        upperTwoSigma: w || p ? D.upperTwoSigma : null,
        lowerTwoSigma: w || p ? D.lowerTwoSigma : null,
        upperOneSigma: w || p ? D.upperOneSigma : null,
        lowerOneSigma: w || p ? D.lowerOneSigma : null,
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
    for (const b of T)
      b.ghost || !Ue(b.value) || b.mean === null || (Ue(b.upperProcessLimit) && b.value > b.upperProcessLimit && (b.singlePointUp = !0), Ue(b.lowerProcessLimit) && b.value < b.lowerProcessLimit && (b.singlePointDown = !0));
    eg(T, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((b) => {
      const S = b.some(
        ($) => ($.singlePointUp || $.twoSigmaUp || $.shiftUp || $.trendUp) && ($.singlePointDown || $.twoSigmaDown || $.shiftDown || $.trendDown)
      );
      if (i === Bt.Off || i === Bt.AutoWhenConflict && !S)
        return;
      const j = ki(b), w = Ci(j, {
        metricImprovement: r,
        strategy: s.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
      for (const $ of w)
        for (let M = $.start; M <= $.end; M++)
          $.trendDirection === ba.Up ? y.add(M) : v.add(M);
      b.forEach(($, M) => {
        $.trendUp = y.has(M) ? $.trendUp : !1, $.trendDown = v.has(M) ? $.trendDown : !1, s.trendDominatesHighlightedWindow && (y.has(M) ? ($.singlePointDown = !1, $.twoSigmaDown = !1, $.shiftDown = !1) : v.has(M) && ($.singlePointUp = !1, $.twoSigmaUp = !1, $.shiftUp = !1));
      });
    })(T);
    for (const b of T) {
      if (b.ghost || !Ue(b.value) || b.mean === null) {
        u.push(b);
        continue;
      }
      const { aligned: S, opposite: j } = Si(
        b,
        r
      );
      if (b.specialCauseImprovementValue = S ? b.value : null, b.specialCauseConcernValue = j ? b.value : null, r === Xe.Neither) {
        const w = b.singlePointUp || b.twoSigmaUp || b.shiftUp || b.trendUp, y = b.singlePointDown || b.twoSigmaDown || b.shiftDown || b.trendDown;
        b.variationIcon = w ? Ee.NeitherHigh : y ? Ee.NeitherLow : Ee.CommonCause;
      } else
        _i(b, r, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      u.push(b);
    }
  }
  if (s.trendAcrossPartitions) {
    const m = u.map((g, I) => ({ idx: I, r: g })).filter(({ r: g }) => !g.ghost && Ue(g.value));
    if (m.length >= s.trendPoints)
      for (let g = 0; g <= m.length - s.trendPoints; g++) {
        const I = m.slice(g, g + s.trendPoints).map((b) => b.idx), D = I.map((b) => u[b]);
        if (!D.every((b) => Ue(b.value))) continue;
        let T = !0, C = !0;
        for (let b = 1; b < D.length && (D[b].value > D[b - 1].value || (T = !1), D[b].value < D[b - 1].value || (C = !1), !(!T && !C)); b++)
          ;
        T && I.forEach((b) => u[b].trendUp = !0), C && I.forEach((b) => u[b].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const m = u.some(
        (g) => (g.singlePointUp || g.twoSigmaUp || g.shiftUp || g.trendUp) && (g.singlePointDown || g.twoSigmaDown || g.shiftDown || g.trendDown)
      );
      if (i === Bt.Always || i === Bt.AutoWhenConflict && m) {
        const g = ki(u), I = Ci(g, { metricImprovement: r, strategy: s.trendSegmentationStrategy }), D = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
        for (const C of I)
          for (let b = C.start; b <= C.end; b++)
            C.trendDirection === ba.Up ? D.add(b) : T.add(b);
        u.forEach((C, b) => {
          C.trendUp = D.has(b) ? C.trendUp : !1, C.trendDown = T.has(b) ? C.trendDown : !1, s.trendDominatesHighlightedWindow && (D.has(b) ? (C.singlePointDown = !1, C.twoSigmaDown = !1, C.shiftDown = !1) : T.has(b) && (C.singlePointUp = !1, C.twoSigmaUp = !1, C.shiftUp = !1));
        });
      }
    }
    for (const m of u) {
      if (m.ghost || !Ue(m.value) || m.mean === null || r === Xe.Neither) continue;
      const { aligned: g, opposite: I } = Si(m, r);
      m.specialCauseImprovementValue = g ? m.value : null, m.specialCauseConcernValue = I ? m.value : null, _i(m, r, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function is(e, t) {
  const r = hr(e), o = fr(r.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Bn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), a = t?.boundaryWindows;
  if (!a || a.mode !== "RecalcCrossing") return { rows: r.rows, visuals: o };
  const s = a.directionOverride ?? e.metricImprovement, i = ig(r.rows, s, a), l = o.map((c, d) => {
    const u = i[d];
    if (c === it.Common || c === it.NoJudgement) {
      if (u === it.Improvement) return it.Improvement;
      if (u === it.Concern) return it.Concern;
    }
    return c;
  });
  return { rows: r.rows, visuals: l };
}
var nc = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(nc || {});
function lg(e, t, r) {
  const o = r?.trendVisualMode ?? Bn.Ungated, a = r?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: c } = is(e, {
    trendVisualMode: o,
    enableNeutralNoJudgement: a,
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
const rc = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: An.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function cg(e) {
  return { ...rc, ...e ?? {} };
}
var gt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(gt || {}), xn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(xn || {}), ir = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(ir || {});
const ya = (e) => {
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
      d === qe.Improvement ? c = Fe.SpecialCauseImproving : d === qe.Concern ? c = Fe.SpecialCauseDeteriorating : d === qe.Neither ? c = Fe.CommonCause : c = Fe.SpecialCauseNoJudgement;
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
  const a = {
    [Ct.Improving]: Fe.SpecialCauseImproving,
    [Ct.Deteriorating]: Fe.SpecialCauseDeteriorating,
    [Ct.No_Judgement]: Fe.SpecialCauseNoJudgement,
    [Ct.None]: Fe.CommonCause
  }[r.judgement];
  let s;
  return r.judgement === Ct.Improving ? s = r.polarity === mt.LowerIsBetter ? We.Lower : We.Higher : r.judgement === Ct.Deteriorating ? s = r.polarity === mt.LowerIsBetter ? We.Higher : We.Lower : s = r.trend ?? We.Higher, { state: a, direction: s, polarity: r.polarity };
};
function oc(e, t) {
  const { state: r, direction: o, polarity: a } = ya(e), s = ss(r), i = o === We.Higher ? "above" : "below", l = o === We.Higher ? "upwards" : "downwards", c = (() => {
    switch (a) {
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
const ea = (e, t, r, o, a, s) => /* @__PURE__ */ n.jsxs("defs", { children: [
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
] }), ls = ({
  data: e,
  precomputed: t,
  improvementDirection: r,
  size: o = 44,
  ariaLabel: a,
  showLetter: s = !0,
  dropShadow: i = !0,
  gradientWash: l = !1,
  variant: c = xn.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = ir.Polarity,
  letterOverride: f,
  ...h
}) => {
  const p = jr(), x = jr(), {
    start: m,
    mid: g,
    end: I,
    triStart: D,
    triMid: T,
    triEnd: C
  } = Io(), { state: b, direction: S, polarity: j, ariaInput: w } = ze(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const G = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: r ?? Xe.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Fe.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: F, direction: O, polarity: X } = ya(G);
      return { state: F, direction: O, polarity: X, ariaInput: G };
    }
    const { state: J, direction: A, polarity: L } = ya(e);
    return { state: J, direction: A, polarity: L, ariaInput: e };
  }, [e, t, r]), y = ze(() => Jl(b), [b]), v = ze(() => ss(b), [b]), $ = v === Ct.Improving || v === Ct.Deteriorating;
  let M = "";
  s && $ && (u === ir.Polarity ? j === mt.HigherIsBetter ? M = "H" : j === mt.LowerIsBetter ? M = "L" : M = "" : M = S === We.Higher ? "H" : "L"), f !== void 0 && (M = f);
  const E = b !== Fe.CommonCause, k = b === Fe.SpecialCauseNoJudgement, _ = St("common-cause", "#A6A6A6"), N = E ? y.hex : _, H = ze(
    () => Jm(b, S),
    [b, S]
  ), Z = a || `${y.label}${M ? S === We.Higher ? " – Higher" : " – Lower" : ""}`, ee = oc(w);
  if (c === xn.TriangleWithRun) {
    const G = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], F = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let O = null;
    b === Fe.SpecialCauseImproving || b === Fe.SpecialCauseDeteriorating ? O = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (S === We.Higher ? G : F).map((he) => he.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: S === We.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : b === Fe.SpecialCauseNoJudgement && (O = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: S === We.Higher ? G.map((he) => he.join(",")).join(" ") : F.map((he) => he.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: S === We.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const X = Math.max(0, Math.min(5, Math.floor(d || 0))), K = b === Fe.CommonCause ? 160 : S === We.Higher ? 220 : 70, q = 10, ne = 26, ue = 150 - 2 * ne, W = b === Fe.CommonCause ? _ : Ql(b), ae = Array.from({ length: 5 }).map((he, Me) => {
      const Te = (b === Fe.SpecialCauseImproving || b === Fe.SpecialCauseDeteriorating) && Me >= 5 - X ? W : _;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: ue + Me * ne,
          cy: K,
          r: q,
          fill: Te,
          stroke: Te,
          strokeWidth: 1
        },
        Me
      );
    }), ce = ea(
      y.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: D },
        { offset: "75%", opacity: T },
        { offset: "100%", opacity: C }
      ]
    ), be = b === Fe.CommonCause || S === We.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: o,
        height: o,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": Z,
        "aria-description": ee,
        ...h,
        children: [
          ce,
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsxs("g", { transform: be, children: [
            O,
            M && /* @__PURE__ */ n.jsx(
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
                children: M
              }
            ),
            ae
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
    ], F = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], O = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let X = null;
    b === Fe.SpecialCauseImproving || b === Fe.SpecialCauseDeteriorating ? X = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (S === We.Higher ? G : F).map((q) => q.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: S === We.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : b === Fe.SpecialCauseNoJudgement ? X = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: S === We.Higher ? G.map((q) => q.join(",")).join(" ") : F.map((q) => q.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: S === We.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : b === Fe.CommonCause && (X = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: O[0][0],
        y1: O[0][1],
        x2: O[1][0],
        y2: O[1][1],
        stroke: y.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const K = ea(
      y.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: D },
        { offset: "65%", opacity: T },
        { offset: "100%", opacity: C }
      ]
    );
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: o,
        height: o,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": Z,
        "aria-description": ee,
        ...h,
        children: [
          K,
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx(
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
          X,
          M && (b === Fe.SpecialCauseImproving || b === Fe.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
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
              children: M
            }
          )
        ]
      }
    );
  }
  const B = ea(
    y.hex,
    p,
    x,
    i,
    l,
    [
      { offset: "0%", opacity: m },
      { offset: "65%", opacity: g },
      { offset: "100%", opacity: I }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: o,
      height: o,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": Z,
      "aria-description": ee,
      ...h,
      children: [
        B,
        /* @__PURE__ */ n.jsx(
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
        /* @__PURE__ */ n.jsx(
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
        M && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: y.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: S === We.Lower ? "340" : "155", children: M })
          }
        ),
        k ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: y.hex,
            ...S === We.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          H.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: _,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${H.map((J) => `${J.cx} ${J.cy}`).join(" L ")}`
            }
          ),
          H.map((J, A) => {
            const G = A >= H.length - 2 && E ? N : _, F = G;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: F,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: G,
                cx: J.cx,
                cy: J.cy,
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
ls.displayName = "SPCVariationIcon";
const dg = {
  [pt.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [pt.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [pt.Md]: { height: 44, pointR: 4, stroke: 1 },
  [pt.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [pt.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [pt.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function ug(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function fg(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const r = t.reduce((i, l) => i + l.value, 0) / t.length, o = [...e].reverse().findIndex((i) => i.value != null), a = o >= 0 ? e.length - 1 - o : null, s = a != null ? e[a].value : null;
  return { mean: r, latestValue: s, latestIndex: a };
}
const hg = (e) => Ql(e), ac = ({
  data: e,
  windowSize: t,
  minPointsForSignals: r = 13,
  showMean: o = !0,
  showLimits: a = !0,
  showLimitBand: s = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: c = !0,
  variationState: d,
  metricImprovement: u,
  gradientWash: f = !1,
  size: h = pt.Sm,
  ariaLabel: p,
  className: x,
  onPointClick: m,
  maxPoints: g,
  thinningStrategy: I = "stride",
  colorPointsBySignal: D = !0,
  centerLine: T,
  controlLimits: C,
  sigmaBands: b,
  pointSignals: S,
  pointNeutralSpecialCause: j,
  visualCategories: w
}) => {
  const y = u, v = ze(
    () => ug(e, t),
    [e, t]
  ), $ = ze(() => fg(v), [v]), M = (() => {
    if (typeof h == "string")
      switch (h) {
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
    return h ?? pt.Sm;
  })(), E = dg[M], k = Math.max(v.length * 6, 60), _ = k, N = M === pt.Full ? "100%" : k, H = E.height, Z = ze(() => {
    if (M === pt.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${_} / ${H}`,
        display: "block"
      };
  }, [M, _, H]), ee = Math.max(6, E.pointR + 3), B = Math.max(4, E.pointR + 3), J = ze(() => (e?.length ?? 0) - (v?.length ?? 0), [e?.length, v?.length]), A = T ?? $.mean ?? null, L = ze(() => {
    if (!a) return null;
    if (C) return C;
    const we = v.filter((fe) => typeof fe.value == "number");
    if (!we.length || A == null) return null;
    const P = we.map((fe) => fe.value), Y = Math.min(...P), se = Math.max(...P);
    return { lower: Y, upper: se };
  }, [a, C?.lower, C?.upper, v, A]), F = ze(() => ({
    state: d ?? Fe.CommonCause,
    firedRules: [],
    mean: A ?? null,
    stdDev: null,
    side: $.latestValue != null && A != null ? $.latestValue > A ? "above" : "below" : void 0
  }), [d, A, $.latestValue]).state, O = hg(F), X = (we) => {
    const P = v.filter((pe) => pe.value != null);
    if (!P.length) return H / 2;
    const Y = P.map((pe) => pe.value);
    L && (L.lower != null && Y.push(L.lower), L.upper != null && Y.push(L.upper));
    const se = Math.min(...Y), fe = Math.max(...Y);
    return se === fe ? H / 2 : H - (we - se) / (fe - se) * (H - B * 2) - B;
  }, K = ze(() => {
    if (!g || v.length <= g)
      return v.map((R, U) => U);
    if (I === "stride") {
      const R = Math.max(2, g), U = (v.length - 1) / (R - 1), oe = /* @__PURE__ */ new Set();
      for (let Q = 0; Q < R; Q++) oe.add(Math.round(Q * U));
      return oe.add(v.length - 1), Array.from(oe).sort((Q, re) => Q - re);
    }
    const we = v.map((R, U) => ({ i: U, v: R.value }));
    function P(R, U, oe) {
      const Q = R.i, re = R.v ?? 0, le = U.i, de = U.v ?? 0, ye = oe.i, ke = oe.v ?? 0, Be = Math.abs((ke - de) * Q - (ye - le) * re + ye * de - ke * le), Ye = Math.hypot(ke - de, ye - le);
      return Ye === 0 ? 0 : Be / Ye;
    }
    function Y(R, U) {
      if (R.length <= 2) return R;
      let oe = -1, Q = -1;
      for (let re = 1; re < R.length - 1; re++) {
        const le = P(R[re], R[0], R[R.length - 1]);
        le > oe && (oe = le, Q = re);
      }
      if (oe > U) {
        const re = Y(R.slice(0, Q + 1), U), le = Y(R.slice(Q), U);
        return [...re.slice(0, -1), ...le];
      }
      return [R[0], R[R.length - 1]];
    }
    let se = 0.1, fe = we;
    for (let R = 0; R < 8 && (fe = Y(we, se), !(fe.length <= g)); R++)
      se *= 1.6;
    const pe = new Set(fe.map((R) => R.i));
    return pe.add(0), pe.add(v.length - 1), Array.from(pe).sort((R, U) => R - U);
  }, [v, g, I]), q = ze(
    () => K.map((we) => v[we]),
    [K, v]
  ), ne = ze(() => Math.max(1, _ - ee * 2), [_, ee]), ue = ze(() => {
    const we = Math.max(1, q.length - 1);
    return (P) => P / we * ne + ee;
  }, [q.length, ne, ee]), W = ze(() => {
    let we = "";
    return q.forEach((P, Y) => {
      if (P.value == null) return;
      const se = X(P.value), fe = ue(Y);
      we += we ? ` L ${fe} ${se}` : `M ${fe} ${se}`;
    }), we;
  }, [q, ue]), ae = $.latestIndex ?? -1, ce = L, be = Io(), he = ze(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [v.length, f]
  ), Me = v.length >= (r || 0), Ge = p || "SPC sparkline", Te = (() => {
    if (!F) return;
    const we = y === Xe.Up ? mt.HigherIsBetter : y === Xe.Down ? mt.LowerIsBetter : mt.ContextDependent, P = {
      variationIcon: F === Fe.SpecialCauseImproving ? qe.Improvement : F === Fe.SpecialCauseDeteriorating ? qe.Concern : F === Fe.SpecialCauseNoJudgement ? qe.Suppressed : qe.Neither,
      trend: y === Xe.Up ? We.Higher : We.Lower,
      polarity: we
    };
    try {
      return oc(P);
    } catch {
      return;
    }
  })(), Le = ze(() => {
    if (!Me) return 10;
    const we = [...v].reverse().filter((Y) => Y.value != null).slice(0, 6).map((Y) => X(Y.value));
    return we.length && we.reduce((Y, se) => Y + se, 0) / we.length < H / 2 ? H : 10;
  }, [v, Me, H]);
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": Ge,
      "aria-description": Te,
      width: M === pt.Full ? void 0 : N,
      height: M === pt.Full ? void 0 : H,
      style: Z,
      className: x,
      viewBox: `0 0 ${_} ${H}`,
      children: [
        f && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: he, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: O,
                stopOpacity: Number(be.start)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: O,
                stopOpacity: Number(be.mid)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: O,
                stopOpacity: Number(be.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: _,
              height: H,
              fill: `url(#${he})`
            }
          )
        ] }),
        ce && ce.lower != null && ce.upper != null && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          s && /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                X(ce.upper),
                X(ce.lower)
              ),
              width: _,
              height: Math.abs(
                X(ce.upper) - X(ce.lower)
              ),
              fill: O,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: _,
              y1: X(ce.lower),
              y2: X(ce.lower),
              stroke: O,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: _,
              y1: X(ce.upper),
              y2: X(ce.upper),
              stroke: O,
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
                x2: _,
                y1: X(b.lowerTwo),
                y2: X(b.lowerTwo),
                stroke: O,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.lowerOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: _,
                y1: X(b.lowerOne),
                y2: X(b.lowerOne),
                stroke: O,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: _,
                y1: X(b.upperOne),
                y2: X(b.upperOne),
                stroke: O,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: _,
                y1: X(b.upperTwo),
                y2: X(b.upperTwo),
                stroke: O,
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
            x2: _,
            y1: X(A),
            y2: X(A),
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
        K.map((we, P) => {
          const Y = v[we];
          if (!Y || Y.value == null) return null;
          const se = X(Y.value), fe = ue(P), R = (we === ae && l ? E.pointR + 1 : E.pointR) - 0.5;
          let U = fn();
          if (D) {
            const oe = w?.[J + we];
            if (oe != null)
              oe === it.Improvement ? U = Sr(qe.Improvement) : oe === it.Concern ? U = Sr(qe.Concern) : oe === it.NoJudgement ? U = St("no-judgement", "#490092") : U = fn();
            else {
              const Q = S?.[J + we];
              Q === qe.Improvement || Q === qe.Concern ? U = Sr(Q) : U = j?.[J + we] ? St("no-judgement", "#490092") : fn();
            }
          }
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: fe,
              cy: se,
              r: R,
              fill: U,
              stroke: "none",
              strokeWidth: 0,
              onClick: m ? () => m(we, Y) : void 0,
              style: m ? { cursor: "pointer" } : void 0,
              "data-index": we,
              "data-signal-colour": D ? U : void 0
            },
            we
          );
        }),
        c && Me && F && F !== Fe.CommonCause && y && /* @__PURE__ */ n.jsx(
          "text",
          {
            x: _ - 4,
            y: Le,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: O,
            "data-glyph-pos": Le < H / 2 ? "top" : "bottom",
            children: y === Xe.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
ac.displayName = "SPCSpark";
function Vr(e) {
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
function sc(e) {
  return e === Ee.ImprovementHigh || e === Ee.ImprovementLow || e === Ee.ConcernHigh || e === Ee.ConcernLow || e === Ee.NeitherHigh || e === Ee.NeitherLow;
}
function pg({
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
    const c = {
      error: e.filter((f) => f.severity === Et.Error).length,
      warning: e.filter((f) => f.severity === Et.Warning).length,
      info: e.filter((f) => f.severity === Et.Info).length
    }, d = [];
    c.error && d.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && d.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && d.push(`${c.info} info`);
    const u = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${d.join(", ")}).`;
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
                node: /* @__PURE__ */ n.jsx(st, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ n.jsx(st, { color: "purple", text: r(l.category) }) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ n.jsx(st, { color: "grey", text: o(l.code) }),
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
function mg({
  variationNode: e,
  assuranceNode: t,
  show: r
}) {
  return r ? /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const cs = ({
  status: e,
  size: t = 44,
  ariaLabel: r,
  dropShadow: o = !0,
  colourOverride: a,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...c
}) => {
  const d = jr(), u = jr(), { start: f, mid: h, end: p } = Io(), x = a || Vm[e], m = (i || Zm[e]).slice(0, 2), g = r || `Assurance ${e}`;
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
          s && /* @__PURE__ */ n.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: x, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: x, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(p) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${u})` : "#ffffff",
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
cs.displayName = "SPCAssuranceIcon";
const gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: mn,
  Direction: We,
  MetricPolarity: mt,
  SPCAssuranceIcon: cs,
  SPCVariationIcon: ls,
  VariationJudgement: Ct,
  VariationState: Fe,
  getVariationColour: Jl,
  getVariationTrend: ss
}, Symbol.toStringTag, { value: "Module" }));
function xg(e) {
  const { show: t, rowsForUi: r, minPoints: o, metricImprovement: a, variant: s, runLength: i } = e;
  if (!t || !r?.length) return null;
  const l = r, c = typeof o == "number" && !isNaN(o) ? o : 13;
  if (l.filter(
    (b) => !b.data.ghost && b.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let b = l.length - 1; b >= 0; b--) {
    const S = l[b];
    if (S && S.data.value != null && !S.data.ghost) {
      u = b;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], h = f.classification?.variation, p = f.classification?.assurance, x = h === qe.Neither && !!f.classification?.neutralSpecialCauseValue, m = p === cn.Pass ? mn.Pass : p === cn.Fail ? mn.Fail : mn.Uncertain;
  let g;
  if (h === qe.Suppressed) {
    const b = !!f.rules.singlePoint.up, S = !!f.rules.singlePoint.down;
    a === ln.Up ? b ? g = We.Higher : S && (g = We.Lower) : a === ln.Down ? S ? g = We.Lower : b && (g = We.Higher) : g = We.Higher;
  } else if (h === qe.Neither && x) {
    const b = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, S = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    b && !S ? g = We.Higher : S && !b ? g = We.Lower : g = We.Higher;
  }
  const I = 80, D = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, T = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let C = Ee.CommonCause;
  return h === qe.Improvement ? C = Ee.ImprovementHigh : h === qe.Concern ? C = Ee.ConcernHigh : h === qe.Neither && (x ? g === We.Lower || T && !D ? C = Ee.NeitherLow : C = Ee.NeitherHigh : C = Ee.CommonCause), /* @__PURE__ */ n.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(h),
            "data-trend": g ? String(g) : "none",
            style: { width: I, height: I },
            children: /* @__PURE__ */ n.jsx(
              ls,
              {
                dropShadow: !1,
                data: {
                  variationIcon: C,
                  improvementDirection: a,
                  specialCauseNeutral: x,
                  highSideSignal: D,
                  lowSideSignal: T,
                  ...g ? { trend: g } : {}
                },
                letterMode: a === ln.Neither ? ir.Direction : ir.Polarity,
                size: I,
                variant: s,
                runLength: s === xn.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(p),
            style: { width: I, height: I },
            children: /* @__PURE__ */ n.jsx(
              cs,
              {
                status: m,
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
const ic = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: o,
  measureUnit: a,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = nn(), d = dn(), [u, f] = V.useState(null), [h, p] = V.useState(!1), x = V.useRef(null);
  V.useEffect(() => {
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
  const m = c && (c.focused || (h ? u : null) || u), [g, I] = V.useState(!1);
  V.useEffect(() => {
    const Le = requestAnimationFrame(() => I(!0));
    return () => cancelAnimationFrame(Le);
  }, [m?.index]);
  const D = d?.innerWidth ?? 0, T = d?.innerHeight ?? 0, C = m ? Math.min(Math.max(m.clientX, 0), D) : 0, b = m ? Math.min(Math.max(m.clientY, 0), T) : 0, S = d?.ref?.current || void 0;
  if (!m)
    return null;
  const j = e?.[m.index], y = No(
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
  ).map((Le) => ({ id: Le, label: $n[Le].tooltip })), v = m.x instanceof Date ? m.x : new Date(m.x), $ = s ? s(v) : v.toDateString(), M = a ? `${a}` : "", E = o || M ? `${m.y}${M ? "" + M : " "}${o ? " " + o : ""}` : `${m.y}`, k = jo(j?.classification?.variation), _ = Zl(j?.classification?.assurance), N = Gm(
    t.mean ?? null,
    t.sigma,
    m.y
  ), H = r ? r(m.index, { x: m.x, y: m.y }) : void 0, Z = k || _ || N, ee = j?.rules.trend.up || j?.rules.trend.down, B = j?.classification?.variation === qe.Neither && ee, J = l && B ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, A = y.length > 0, L = j && "primeDirection" in j ? j.primeDirection : void 0, G = j && "primeRuleId" in j ? j.primeRuleId : void 0, F = i && j?.classification?.variation === qe.Neither && A, O = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", X = ql(j?.classification?.variation), K = 6.2, ne = [
    H || "",
    `${$} • ${E}`
  ].filter(Boolean).reduce(
    (Le, we) => Math.max(Le, we.length * K + 32),
    0
  ), ue = 200, W = 440, ae = Math.min(W, Math.max(ue, ne));
  let ce = C + 12, he = (d.margin?.top ?? 0) + b + 16;
  ce + ae > D && (ce = C - -60 - ae), ce < 0 && (ce = Math.max(0, D - ae));
  const Me = m ? `spc-tooltip-${m.index}` : "spc-tooltip", Ge = typeof m.index == "number" ? m.index : NaN, Te = S ? od(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: Me,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (g ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ce,
          top: he,
          width: ae,
          maxWidth: W,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": g ? "false" : "true",
        "data-floating": !0,
        "data-placement": ce + ae + 12 > D ? "left" : "right",
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
          Z && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: k?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              st,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : k?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              st,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : F ? /* @__PURE__ */ n.jsx(
              st,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : k ? /* @__PURE__ */ n.jsx(
              st,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          _ && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Le = _.toLowerCase(), P = !(Le.includes("not met") || Le.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Le);
              return /* @__PURE__ */ n.jsx(
                st,
                {
                  text: _,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${P ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${_}`
                }
              );
            })() })
          ] }),
          N && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              st,
              {
                text: (() => {
                  const Le = N.toLowerCase();
                  return Le.startsWith("within 1") ? "≤1σ" : Le.startsWith("1–2") ? "1–2σ" : Le.startsWith("2–3") ? "2–3σ" : Le.startsWith(">3") ? ">3σ" : N;
                })(),
                color: N.includes(">3") ? "orange" : N.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${N}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          J && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: J })
          ] }),
          A && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: y.map(({ id: Le, label: we }) => {
                  const P = String(Le), se = P === sr.TrendIncreasing || P === sr.TrendDecreasing ? "fdp-spc-tag--trend" : F ? "fdp-spc-tag--no-judgement" : k ? k.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : k.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    st,
                    {
                      text: we,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${se}`,
                      "data-rule-id": P
                    },
                    P
                  );
                })
              }
            ),
            L && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ n.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Le = F ? "fdp-spc-tag--no-judgement" : k ? k.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : k.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", we = `${L}${G ? ` (${G})` : ""}`;
                return /* @__PURE__ */ n.jsx(
                  st,
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
            cx: C,
            cy: b,
            r: 7,
            fill: "none",
            stroke: O,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: C,
            cy: b,
            r: 5,
            fill: "#000",
            stroke: O,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: C,
            cy: b,
            r: 2.5,
            fill: X,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Te
      ]
    }
  );
}, bg = ({
  engineRows: e,
  measureName: t,
  measureUnit: r,
  onSignalFocus: o
}) => {
  const a = nn(), s = a?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = V.useMemo(
    () => l ? No({
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
      new Set(c.map((m) => $n[m]?.narration).filter(Boolean))
    ),
    [c]
  ), u = l ? jo(l.classification?.variation) : null, f = l ? Zl(l.classification?.assurance) : null, h = c.length > 0, p = l ? l.classification?.variation === qe.Neither && h : !1, x = V.useRef(null);
  return V.useEffect(() => {
    if (!o || !s || l == null) return;
    const m = `${s.seriesId}:${s.index}`;
    if (x.current !== m) {
      x.current = m;
      try {
        o({
          index: s.index,
          x: s.x,
          y: s.y,
          row: l,
          rules: c
        });
      } catch {
      }
    }
  }, [s?.seriesId, s?.index, s?.x, s?.y, l, c, o]), /* @__PURE__ */ n.jsxs(
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
          (u || p || f) && /* @__PURE__ */ n.jsx(
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
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ n.jsx(
                      st,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ n.jsx(
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), I = !(m.includes("not met") || m.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(m);
                      return /* @__PURE__ */ n.jsx(
                        st,
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
                  const g = String(m), D = g === sr.TrendIncreasing || g === sr.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", T = $n[m]?.tooltip || g;
                  return /* @__PURE__ */ n.jsx(
                    st,
                    {
                      text: T,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${D}`,
                      "data-rule-id": g,
                      title: $n[m]?.tooltip
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
function yg(e, t = !0) {
  if (!e?.length) return [];
  const r = [...e];
  if (t) {
    for (let s = 1; s < r.length - 1; s++)
      r[s] === gt.Common && r[s - 1] === r[s + 1] && r[s - 1] !== gt.Common && (r[s] = r[s - 1]);
    let a = 0;
    for (; a < r.length; ) {
      const s = r[a];
      let i = a + 1;
      for (; i < r.length && r[i] === s; ) i++;
      i - a === 1 && s !== gt.Common && (r[a] = gt.Common), a = i;
    }
  }
  const o = [];
  if (r.length) {
    let a = 0;
    for (let s = 1; s <= r.length; s++)
      if (s === r.length || r[s] !== r[a]) {
        const i = r[a], l = s - 1, c = l - a + 1;
        (i === gt.Common || c >= 2) && o.push({ start: a, end: l, category: i }), a = s;
      }
  }
  return o;
}
var qn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(qn || {}), lc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(lc || {});
function vg(e) {
  const {
    ui: t,
    input: r,
    engine: o,
    container: a,
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
    baselines: I,
    ghosts: D,
    settings: T,
    chartType: C,
    metricImprovement: b,
    gradientSequences: S,
    sequenceTransition: j,
    processLineWidth: w,
    showPartitionMarkers: y,
    showWarningsPanel: v,
    warningsFilter: $,
    enableNeutralNoJudgement: M,
    showTrendGatingExplanation: E,
    trendVisualMode: k,
    alwaysShowZeroY: _,
    alwaysShowHundredY: N,
    percentScale: H,
    showTrendStartMarkers: Z,
    showFirstFavourableCrossMarkers: ee,
    showTrendBridgeOverlay: B,
    showSignalsInspector: J,
    onSignalFocus: A,
    showIcons: L,
    showEmbeddedIcon: G,
    embeddedIconVariant: F,
    embeddedIconRunLength: O,
    showFocusIndicator: X,
    visualsScenario: K,
    visualsEngineSettings: q,
    source: ne,
    narrationContext: ue,
    highlightOutOfControl: W,
    precomputed: ae
  } = e;
  process.env.NODE_ENV !== "production" && (!r && (g !== void 0 || I !== void 0 || D !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !o && T !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !a && (u !== void 0 || x !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (d !== void 0 || p !== void 0 || ue !== void 0 || m !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (K !== void 0 || q !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && W !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && ne !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const ce = r?.data ?? c ?? [], be = r?.targets ?? g, he = r?.baselines ?? I, Me = r?.ghosts ?? D, Ge = o?.chartType ?? C ?? Gl.XmR, Te = o?.metricImprovement ?? b ?? ln.Neither, Le = o?.settings ?? T, we = o?.autoRecalc, P = t?.axes?.alwaysShowZeroY ?? _ ?? !1, Y = t?.axes?.alwaysShowHundredY ?? N ?? !1, se = t?.axes?.percentScale ?? H ?? !1, fe = t?.visuals?.gradientSequences ?? S ?? !0, pe = t?.visuals?.sequenceTransition ?? j ?? "slope", R = t?.visuals?.processLineWidth ?? w ?? 2, U = t?.visuals?.trend?.visualMode ?? k ?? "ungated", oe = t?.visuals?.trend?.showGatingExplanation ?? E ?? !0, Q = t?.visuals?.rules?.enableNeutralNoJudgement ?? M ?? !0, re = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, le = t?.visuals?.showZones, de = t?.visuals?.showPoints, ye = t?.visuals?.rules?.highlightOutOfControl, ke = a?.height, Be = a?.className, Ye = s?.label, lt = s?.unit, Qe = s?.narrationContext, ie = i?.scenario, Ae = i?.settings, z = l?.source, te = t?.overlays?.partitionMarkers ?? y ?? !1, ge = t?.overlays?.trendStartMarkers ?? Z ?? !1, me = t?.overlays?.firstFavourableCrossMarkers ?? ee ?? !1, xe = t?.overlays?.trendBridge ?? B ?? !1, Se = t?.inspector?.show ?? J ?? !1, Re = t?.inspector?.onFocus ?? A, Ce = t?.warnings?.show ?? v ?? !1, je = t?.warnings?.filter ?? $, ve = t?.icons?.show ?? L ?? !1, Ne = t?.icons?.embedded?.show ?? G ?? !0, Ke = t?.icons?.embedded?.variant ?? F ?? xn.Classic, at = t?.icons?.embedded?.runLength ?? O, $e = t?.overlays?.focusIndicator ?? X ?? !0;
  return {
    effData: ce,
    effTargets: be,
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
    effHighlightOutOfControl: ye,
    effVisualsScenario: ie,
    effVisualsEngineSettings: Ae,
    effPrecomputedVisuals: ae,
    effSource: z,
    effAlwaysShowZeroY: P,
    effAlwaysShowHundredY: Y,
    effPercentScale: se,
    effGradientSequences: fe,
    effSequenceTransition: pe,
    effProcessLineWidth: R,
    effTrendVisualMode: U,
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
    effEmbeddedIconRunLength: at,
    effShowFocusIndicator: $e
  };
}
let wg = 0;
const Sg = ({ data: e, targets: t, visuals: r, a11y: o, axis: a, compute: s }) => {
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
    processLineWidth: I,
    showFocusIndicator: D = !1,
    enableRules: T,
    enableNeutralNoJudgement: C = !0,
    showTrendStartMarkers: b = !1,
    showFirstFavourableCrossMarkers: S = !1,
    showTrendBridgeOverlay: j = !1
  } = r, {
    announceFocus: w,
    ariaLabel: y,
    narrationContext: v,
    showSignalsInspector: $ = !1,
    onSignalFocus: M,
    showTrendGatingExplanation: E = !0
  } = o, { zeroBreakSlotGapPx: k } = a, { metricImprovement: _, effectiveUnit: N } = s, H = _n(), Z = dn();
  if (!H) return null;
  const { xScale: ee, yScale: B } = H, J = V.useRef(
    "spc-seq-" + ++wg
  ), A = nn(), L = i[0]?.data || [], G = V.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const P = /* @__PURE__ */ new Set();
    return L.forEach((Y, se) => {
      typeof u.ucl == "number" && Y.y > u.ucl && P.add(se), typeof u.lcl == "number" && Y.y < u.lcl && P.add(se);
    }), P;
  }, [u.ucl, u.lcl, L]), F = V.useMemo(() => {
    if (!l || !l.length) return null;
    const P = [];
    return l.forEach((Y, se) => {
      const fe = Y.classification.variation === qe.Concern || Y.classification.variation === qe.Improvement || !!Y.classification.neutralSpecialCauseValue, pe = !!Y.rules.singlePoint.up || !!Y.rules.twoOfThree.up || !!Y.rules.fourOfFive.up || !!Y.rules.shift.up || !!Y.rules.trend.up, R = !!Y.rules.singlePoint.down || !!Y.rules.twoOfThree.down || !!Y.rules.fourOfFive.down || !!Y.rules.shift.down || !!Y.rules.trend.down;
      P[se] = {
        variation: Y.classification.variation,
        assurance: Y.classification.assurance,
        special: fe,
        concern: Y.classification.variation === qe.Concern,
        improvement: Y.classification.variation === qe.Improvement,
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
    }), P;
  }, [l]), O = V.useMemo(() => (c || []).map((P) => P === it.Improvement ? gt.Improvement : P === it.Concern ? gt.Concern : P === it.NoJudgement ? gt.NoJudgement : gt.Common), [c]), X = V.useMemo(() => !m || !O.length ? [] : yg(O, !0), [m, O, y]), K = V.useMemo(
    () => L.map((P) => ee(P.x instanceof Date ? P.x : new Date(P.x))),
    [L, ee]
  ), q = ee.range()[1], ne = ee.range()[0], ue = V.useMemo(() => {
    if (!l || !l.length)
      return null;
    let P = Number.POSITIVE_INFINITY, Y = Number.POSITIVE_INFINITY;
    if (l.forEach((Q, re) => {
      Q.rules.trend.up && (P = Math.min(P, re)), Q.rules.trend.down && (Y = Math.min(Y, re));
    }), !Number.isFinite(P) && !Number.isFinite(Y))
      return null;
    const se = P <= Y, fe = se ? At.Up : At.Down, pe = se ? P : Y, R = (Q) => _ == null || _ === ln.Neither || Q == null || typeof Q.data.value != "number" || typeof Q.limits.mean != "number" ? !1 : fe === At.Up ? _ === ln.Up ? Q.data.value > Q.limits.mean : Q.data.value < Q.limits.mean : _ === ln.Down ? Q.data.value < Q.limits.mean : Q.data.value > Q.limits.mean;
    let U = null;
    for (let Q = pe; Q < l.length; Q++) {
      const re = l[Q];
      if (!(se ? !!re.rules.trend.up : !!re.rules.trend.down)) break;
      if (R(re)) {
        U = Q;
        break;
      }
    }
    let oe = !1;
    if (U != null) {
      let Q = 0;
      for (let re = U; re < l.length; re++) {
        const le = l[re];
        if (!(se ? !!le.rules.trend.up : !!le.rules.trend.down)) break;
        R(le) && Q++;
      }
      oe = Q >= 2;
    }
    return {
      direction: fe,
      detectedAt: pe,
      firstFavourableCrossAt: U,
      persistedAcrossMean: oe
    };
  }, [l, _]), W = V.useMemo(() => {
    if (!l || !l.length) return null;
    const P = (Y) => {
      const se = [];
      let fe = null, pe = null;
      for (let R = 0; R < l.length; R++) {
        const U = l[R], oe = Y(U), Q = typeof oe == "number" && !isNaN(oe) ? oe : null;
        if (Q == null) {
          fe !== null && pe != null && (se.push({
            x1: K[fe],
            x2: K[R - 1],
            y: B(pe)
          }), fe = null, pe = null);
          continue;
        }
        if (fe === null) {
          fe = R, pe = Q;
          continue;
        }
        pe != null && Math.abs(Q - pe) <= 1e-9 || (pe != null && se.push({
          x1: K[fe],
          x2: K[R - 1],
          y: B(pe)
        }), fe = R, pe = Q);
      }
      return fe !== null && pe != null && se.push({
        x1: K[fe],
        x2: K[l.length - 1],
        y: B(pe)
      }), se;
    };
    return {
      mean: P((Y) => Y.limits.mean ?? null),
      ucl: P((Y) => Y.limits.ucl ?? null),
      lcl: P((Y) => Y.limits.lcl ?? null),
      onePos: P((Y) => Y.limits.oneSigma.upper ?? null),
      oneNeg: P((Y) => Y.limits.oneSigma.lower ?? null),
      twoPos: P((Y) => Y.limits.twoSigma.upper ?? null),
      twoNeg: P((Y) => Y.limits.twoSigma.lower ?? null)
    };
  }, [l, K, B]), ae = V.useMemo(() => X.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs(
      "linearGradient",
      {
        id: `${J.current}-grad-common`,
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
    X.map((P, Y) => {
      const se = `${J.current}-grad-${Y}`;
      let fe, pe = 0.28, R = 0.12, U = 0.045;
      switch (P.category) {
        case gt.Concern:
          fe = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", pe = 0.28, R = 0.12, U = 0.045;
          break;
        case gt.Improvement:
          fe = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", pe = 0.26, R = 0.11, U = 0.045;
          break;
        case gt.NoJudgement:
          fe = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", pe = 0.26, R = 0.11, U = 0.045;
          break;
        default:
          fe = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: se, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: fe, stopOpacity: pe }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: fe, stopOpacity: R }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: fe, stopOpacity: U })
      ] }, se);
    })
  ] }) : null, [X]), ce = V.useMemo(() => {
    if (!X.length) return null;
    const [P] = B.domain(), Y = B(P), se = X.map((fe, pe) => {
      const { start: R, end: U, category: oe } = fe;
      if (R < 0 || U >= K.length || R > U)
        return null;
      const Q = K[R], re = K[U];
      let le = "";
      if (oe === gt.Common) {
        const de = pe > 0 ? X[pe - 1] : null, ye = pe < X.length - 1 ? X[pe + 1] : null, ke = de ? K[de.end] : ne, Be = de ? B(L[de.end].y) : Y, Ye = ye ? K[ye.start] : q, lt = ye ? B(L[ye.start].y) : Y;
        le = `M ${ke} ${Y}`, le += ` L ${ke} ${Be}`;
        for (let Qe = R; Qe <= U; Qe++)
          le += ` L ${K[Qe]} ${B(L[Qe].y)}`;
        le += ` L ${Ye} ${lt}`, le += ` L ${Ye} ${Y} Z`;
      } else {
        const de = pe > 0 ? X[pe - 1] : null, ye = pe < X.length - 1 ? X[pe + 1] : null, ke = de && de.category !== gt.Common, Be = ye && ye.category !== gt.Common, Ye = B(L[R].y), lt = B(L[U].y);
        let Qe = Q, ie = re;
        if (ke) {
          const Ae = K[de.end], z = B(L[de.end].y), te = L[R].y - L[de.end].y;
          g === qn.Slope && te > 0 ? (le = `M ${Ae} ${z} L ${Q} ${Ye}`, Qe = Ae) : (le = `M ${Q} ${Y} L ${Q} ${Ye}`, Qe = Q);
        } else
          le = `M ${Q} ${Y} L ${Q} ${Ye}`;
        for (let Ae = R + 1; Ae <= U; Ae++)
          le += ` L ${K[Ae]} ${B(L[Ae].y)}`;
        if (le += ` L ${re} ${lt}`, Be) {
          const Ae = K[ye.start], z = B(L[ye.start].y), te = L[ye.start].y - L[U].y;
          (g === qn.Slope && te <= 0 || g === qn.Extend) && (le += ` L ${Ae} ${z}`, ie = Ae);
        }
        if (le += ` L ${ie} ${Y}`, le += ` L ${Qe} ${Y} Z`, g === qn.Neutral && ke) {
          const Ae = K[de.end], z = B(L[de.end].y), te = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${Ae} ${Y} L ${Ae} ${z} L ${Q} ${Ye} L ${Q} ${Y} Z`,
              fill: `url(#${J.current}-grad-common)`,
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
                fill: `url(#${J.current}-grad-${pe})`,
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
          fill: `url(#${J.current}-grad-${pe})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${pe}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: se });
  }, [X, K, q, B, L, g]), be = V.useMemo(() => {
    if (!v?.timeframe && L.length >= 2) {
      const P = L.map((U) => U.x instanceof Date ? U.x : new Date(U.x)), Y = new Date(Math.min(...P.map((U) => U.getTime()))), se = new Date(Math.max(...P.map((U) => U.getTime()))), fe = Math.round((se.getTime() - Y.getTime()) / 864e5) || 0;
      if (fe < 14)
        return `The chart shows a timeframe of ${fe + 1} days`;
      const pe = Math.round(fe / 7);
      return pe < 20 ? `The chart shows a timeframe of ${pe} weeks` : `The chart shows a timeframe of ${(se.getFullYear() - Y.getFullYear()) * 12 + (se.getMonth() - Y.getMonth()) + 1} months`;
    }
    if (v?.timeframe)
      return `The chart shows a timeframe of ${v.timeframe}`;
  }, [v?.timeframe, L]), he = (P) => {
    const Y = P % 10, se = P % 100;
    return Y === 1 && se !== 11 ? `${P}st` : Y === 2 && se !== 12 ? `${P}nd` : Y === 3 && se !== 13 ? `${P}rd` : `${P}th`;
  }, Me = (P) => `${he(P.getDate())} ${P.toLocaleString("en-GB", { month: "long" })}, ${P.getFullYear()}`, Ge = (P) => ({
    specialCauseSinglePointUp: !!P?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!P?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!P?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!P?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!P?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!P?.rules.fourOfFive.down,
    specialCauseShiftUp: !!P?.rules.shift.up,
    specialCauseShiftDown: !!P?.rules.shift.down,
    specialCauseTrendUp: !!P?.rules.trend.up,
    specialCauseTrendDown: !!P?.rules.trend.down
  }), Te = V.useCallback(
    ({
      index: P,
      x: Y,
      y: se
    }) => {
      const fe = l?.[P], pe = Y instanceof Date ? Y : new Date(Y), R = Me(pe), U = v?.measureUnit ? ` ${v.measureUnit}` : "", oe = v?.measureName ? ` ${v.measureName}` : "";
      if (!fe)
        return `General summary is: ${be ? be + ". " : ""}Point ${P + 1}, ${R}, ${se}${U}${oe}`;
      const Q = jo(fe.classification?.variation) || "Variation", re = No(Ge(fe)), le = re.length ? ` Rules: ${[...new Set(re.map((ye) => $n[ye].narration))].join("; ")}.` : " No special cause rules.", de = [];
      return v?.measureName && de.push(`Measure: ${v.measureName}.`), v?.datasetContext && de.push(`${v.datasetContext}.`), v?.organisation && de.push(`Organisation: ${v.organisation}.`), v?.additionalNote && de.push(v.additionalNote), [
        "General summary is:",
        ...de,
        `Point ${P + 1} recorded on `,
        R + ",",
        `with a value of ${se} ${U}${oe}`,
        Q + ".",
        le
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, v, be]
  ), Le = V.useCallback(
    (P, Y) => l?.[P] ? Te({
      index: P,
      seriesId: "process",
      x: Y.x instanceof Date ? Y.x : new Date(Y.x),
      y: Y.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, Te]
  ), we = V.useMemo(() => {
    try {
      const P = typeof B?.domain == "function" ? B.domain() : void 0;
      if (!P || !Array.isArray(P) || P.length < 2) return !1;
      const Y = Math.min(P[0], P[1]), se = Math.max(P[0], P[1]);
      return !(0 >= Y && 0 <= se);
    } catch {
      return !1;
    }
  }, [B]);
  return /* @__PURE__ */ n.jsx(Rm, { children: /* @__PURE__ */ n.jsxs(
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
            height: (Z?.innerHeight ?? H.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(pi, { type: "x" }),
              /* @__PURE__ */ n.jsx(
                pi,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: we,
                    gapPx: k,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ n.jsx(rm, { axis: "y" }),
              ae,
              ce,
              d.map((P, Y) => {
                const se = L[P];
                if (!se) return null;
                const fe = ee(se.x instanceof Date ? se.x : new Date(se.x));
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
                W.mean.map((P, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: P.x1,
                    x2: P.x2,
                    y1: P.y,
                    y2: P.y
                  },
                  `mean-${Y}`
                )),
                W.mean.map((P, Y) => {
                  if (Y === W.mean.length - 1) return null;
                  const se = W.mean[Y + 1];
                  if (!se || P.y === se.y) return null;
                  const pe = Math.max(4, se.x1 - P.x2 || 0) * 0.5, R = `M ${P.x2},${P.y} C ${P.x2 + pe},${P.y} ${se.x1 - pe},${se.y} ${se.x1},${se.y}`;
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
                    W.ucl.map((P, Y) => /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: P.x1,
                        x2: P.x2,
                        y1: P.y,
                        y2: P.y,
                        strokeWidth: 2
                      },
                      `ucl-${Y}`
                    )),
                    W.ucl.map((P, Y) => {
                      if (Y === W.ucl.length - 1) return null;
                      const se = W.ucl[Y + 1];
                      if (!se || P.y === se.y) return null;
                      const pe = Math.max(4, se.x1 - P.x2 || 0) * 0.5, R = `M ${P.x2},${P.y} C ${P.x2 + pe},${P.y} ${se.x1 - pe},${se.y} ${se.x1},${se.y}`;
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
                    W.lcl.map((P, Y) => /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: P.x1,
                        x2: P.x2,
                        y1: P.y,
                        y2: P.y,
                        strokeWidth: 2
                      },
                      `lcl-${Y}`
                    )),
                    W.lcl.map((P, Y) => {
                      if (Y === W.lcl.length - 1) return null;
                      const se = W.lcl[Y + 1];
                      if (!se || P.y === se.y) return null;
                      const pe = Math.max(4, se.x1 - P.x2 || 0) * 0.5, R = `M ${P.x2},${P.y} C ${P.x2 + pe},${P.y} ${se.x1 - pe},${se.y} ${se.x1},${se.y}`;
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
                      N || v?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && W && W.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                W.onePos.map((P, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: P.x1,
                    x2: P.x2,
                    y1: P.y,
                    y2: P.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${Y}`
                )),
                W.oneNeg.map((P, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: P.x1,
                    x2: P.x2,
                    y1: P.y,
                    y2: P.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${Y}`
                )),
                W.twoPos.map((P, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: P.x1,
                    x2: P.x2,
                    y1: P.y,
                    y2: P.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${Y}`
                )),
                W.twoNeg.map((P, Y) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: P.x1,
                    x2: P.x2,
                    y1: P.y,
                    y2: P.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${Y}`
                ))
              ] }),
              ue && (b || S || j) && (() => {
                const P = ue.detectedAt, Y = ue.firstFavourableCrossAt, se = L[P] ? ee(
                  L[P].x instanceof Date ? L[P].x : new Date(L[P].x)
                ) : null, fe = L[P] ? B(L[P].y) : null, pe = Y != null && L[Y] ? ee(
                  L[Y].x instanceof Date ? L[Y].x : new Date(L[Y].x)
                ) : null, R = Y != null && L[Y] ? B(L[Y].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  j && se != null && fe != null && pe != null && R != null && /* @__PURE__ */ n.jsx(
                    "line",
                    {
                      x1: se,
                      y1: fe,
                      x2: pe,
                      y2: R,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  b && se != null && fe != null && /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: se,
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
                Bm,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (P) => P.x instanceof Date ? P.x : new Date(P.x),
                  smooth: !1,
                  strokeWidth: I
                }
              ),
              h && L.map((P, Y) => {
                const se = ee(P.x instanceof Date ? P.x : new Date(P.x)), fe = B(P.y), pe = G.has(Y), R = F?.[Y], U = O[Y], oe = U === gt.Improvement, Q = U === gt.Concern, re = U === gt.NoJudgement, le = [
                  "fdp-spc__point",
                  pe && x ? "fdp-spc__point--ooc" : null,
                  T && Q ? "fdp-spc__point--sc-concern" : null,
                  T && oe ? "fdp-spc__point--sc-improvement" : null,
                  T && C && re ? "fdp-spc__point--sc-no-judgement" : null,
                  R?.assurance === cn.Pass ? "fdp-spc__point--assurance-pass" : null,
                  R?.assurance === cn.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), de = A?.focused?.index === Y;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: se,
                    cy: fe,
                    r: 5,
                    className: le,
                    "data-variation": R?.variation,
                    "data-assurance": R?.assurance,
                    "aria-label": y,
                    ...de ? { "aria-describedby": `spc-tooltip-${Y}` } : {}
                  },
                  Y
                );
              }),
              D && $ && A?.focused && (() => {
                const P = A.focused, Y = typeof P.index == "number" ? P.index : -1;
                if (Y < 0 || !L[Y]) return null;
                const se = ee(
                  L[Y].x instanceof Date ? L[Y].x : new Date(L[Y].x)
                ), fe = B(L[Y].y), pe = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ n.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ n.jsx(
                    "circle",
                    {
                      cx: se,
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
                      cx: se,
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
                      cx: se,
                      cy: fe,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              Z && /* @__PURE__ */ n.jsx(
                _g,
                {
                  width: ee.range()[1],
                  height: B.range()[0]
                }
              ),
              !$ && /* @__PURE__ */ n.jsx(
                ic,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: Le,
                  measureName: v?.measureName,
                  measureUnit: v?.measureUnit,
                  dateFormatter: (P) => Me(P),
                  enableNeutralNoJudgement: C,
                  showTrendGatingExplanation: E
                }
              )
            ] })
          }
        ),
        $ && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          bg,
          {
            engineRows: l,
            measureName: v?.measureName,
            measureUnit: N || v?.measureUnit,
            onSignalFocus: M
          }
        ) }),
        w && /* @__PURE__ */ n.jsx(
          Hm,
          {
            format: (P) => Te({ ...P, x: P.x instanceof Date ? P.x : new Date(P.x) })
          }
        )
      ]
    }
  ) });
}, _g = ({
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
function Ni(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function kg(e, t, r) {
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
function Cg(e, t) {
  const r = e.filter(Boolean);
  if (r.length < 2) return t;
  const o = [];
  for (let c = 1; c < r.length; c++)
    o.push(r[c].getTime() - r[c - 1].getTime());
  const a = o.sort((c, d) => c - d), s = a[Math.floor(a.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function ji(e, t) {
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
function Ng(e, t, r, o = "0-100") {
  if (t) return t;
  if (r) return r;
  const a = e.filter((l) => l != null);
  if (!a.length) return;
  const s = Math.min(...a), i = Math.max(...a);
  if (o === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function jg(e, t, r = 1) {
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
function cc(e) {
  const {
    values: t,
    dates: r,
    intervalHint: o,
    startDate: a,
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
  let p = (r || []).map(Ni);
  if (!p.some(Boolean)) {
    const y = Ni(a);
    y && o ? p = kg(f.length, y, o) : p = new Array(f.length).fill(void 0);
  }
  const m = Cg(p, o), g = Ng(
    f,
    s,
    i,
    e.percentHeuristic
  ), I = l && h >= 0 && f[h] != null ? f[h] : void 0, D = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function T() {
    if (h < 0) return -1;
    if (D.strategy === "previous" || D.strategy === "n-points") {
      let E = h - (D.strategy === "previous" ? 1 : Math.max(1, D.n || 1));
      if (!D.skipNulls) return E;
      for (let k = E; k >= 0; k--) if (f[k] != null) return k;
      return -1;
    }
    const y = p[h];
    if (!y) return -1;
    const v = new Date(y);
    v.setFullYear(v.getFullYear() - 1);
    let $ = -1, M = 1 / 0;
    for (let E = 0; E < p.length; E++) {
      const k = p[E];
      if (!k || f[E] == null) continue;
      const _ = Math.abs(k.getTime() - v.getTime());
      _ < M && (M = _, $ = E);
    }
    return $;
  }
  const C = T(), b = C >= 0 ? f[C] : null;
  let S;
  if (c && I != null && b != null) {
    const y = I - b, v = D.absolute !== !1, $ = v ? y : b === 0 ? 0 : y / Math.abs(b) * 100;
    S = {
      value: Number.isFinite($) ? Number($.toFixed(2)) : 0,
      isPercent: v ? g === "%" : !0,
      period: `vs ${jg(m, o, D.strategy === "n-points" ? Math.max(1, D.n || 1) : 1)}`
    };
  }
  const j = h >= 0 ? p[h] : void 0, w = d && ji(j, m) ? `Latest: ${ji(j, m)}` : void 0;
  return { value: I, unit: g, delta: S, metadata: w, latestDate: j, frequency: m };
}
function Mg(e) {
  const { rows: t } = hr(e), r = is(e);
  return { rows: t, visuals: r.visuals };
}
const ds = 13;
function us(e) {
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
function dc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === it.NoJudgement);
}
function Mi(e, t) {
  const r = e === jt.G ? jt.G : e === jt.T ? jt.T : jt.XmR, o = t === Xe.Up ? Xe.Up : t === Xe.Down ? Xe.Down : Xe.Neither;
  return { chartType: r, metricImprovement: o };
}
function Ii(e, t, r) {
  const o = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : ds, a = { minimumPoints: o };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= o && (a.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (a.enableFourOfFiveRule = !!e.enableFourOfFiveRule), r && Object.assign(a, r), Object.keys(a).length ? a : void 0;
}
function Ig(e, t, r) {
  const o = V.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: a, totalReservedPx: s } = V.useMemo(() => {
    if (!o) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = Cr, u = c + Kp, f = r?.maxFraction, h = Math.max(
      Nr,
      Math.floor(l * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [o, t, r?.maxFraction]);
  return { show: o, slotPx: a, totalReservedPx: s };
}
function Dg(e, t, r, o) {
  if (r.percentScale) {
    const c = e.map((f) => f.y), d = Math.max(100, ...c), u = Math.min(0, ...c);
    return [u < 0 ? u : 0, d > 100 ? d : 100];
  }
  const a = e.map((c) => c.y), s = (c) => {
    c != null && a.push(c);
  };
  if (s(t.mean), s(t.ucl), s(t.lcl), s(t.onePos), s(t.oneNeg), s(t.twoPos), s(t.twoNeg), o && o.length)
    for (const c of o)
      typeof c == "number" && !isNaN(c) && a.push(c);
  if (!a.length) return;
  let i = Math.min(...a), l = Math.max(...a);
  return r.alwaysShowZeroY && (i = Math.min(0, i)), r.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function va(e, t) {
  if (!e?.length || t.chartType !== jt.XmR) return null;
  const r = Math.max(2, Math.floor(t.shiftLength ?? 6)), o = [];
  for (let p = 0; p < e.length; p++) {
    const x = e[p], m = x.value;
    x?.ghost || typeof m == "number" && Number.isFinite(m) && o.push({ idx: p, value: m });
  }
  if (o.length < r * 2) return null;
  let a = 0, s = 0;
  for (let p = 1; p < o.length; p++)
    a += Math.abs(o[p].value - o[p - 1].value), s++;
  if (s === 0) return null;
  const l = a / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Xe.Up, u = t.metricImprovement === Xe.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, x) {
    let m = 0, g = 0;
    for (let I = p; I < x; I++)
      m += o[I].value, g++;
    return g ? m / g : NaN;
  }
  for (let p = r; p <= o.length - r; p++) {
    const x = h(p - r, p), m = h(p, p + r);
    if (!Number.isFinite(x) || !Number.isFinite(m)) continue;
    const g = m - x, I = g / l;
    let D = !1, T = !1;
    if (d ? (D = I >= c, T = !0) : u ? (D = -I >= c, T = !1) : (D = Math.abs(I) >= c, T = g > 0), !D) continue;
    const C = (j) => T ? j > x : j < x;
    let b = !0;
    for (let j = p; j < p + r; j++)
      if (!C(o[j].value)) {
        b = !1;
        break;
      }
    if (!b) continue;
    const S = o[p].idx;
    if (!(t.minGap && f >= 0 && S - f < t.minGap))
      return S;
  }
  return null;
}
function Tg(e, t) {
  const r = va(e, t);
  return r == null ? e.slice() : e.map((o, a) => a === r ? { ...o, baseline: !0 } : o);
}
function Lg(e, t) {
  const r = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (r <= 1) return Tg(e, t);
  let o = e.slice(), a = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; a < r; ) {
    const i = va(o, { ...t, minGap: s });
    if (i == null) break;
    if (o[i]?.baseline) {
      const l = va(o, { ...t, minGap: s + 1 });
      if (l == null || l === i) break;
      o = o.map((c, d) => d === l ? { ...c, baseline: !0 } : c), a++;
      continue;
    }
    o = o.map((l, c) => c === i ? { ...l, baseline: !0 } : l), a++;
  }
  return o;
}
const $g = (e) => {
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
    effTargets: a,
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
    effShowTrendGatingExplanation: I,
    effEnableNeutralNoJudgement: D,
    effEnableRules: T,
    effShowPartitionMarkers: C,
    effShowTrendStartMarkers: b,
    effShowFirstFavourableCrossMarkers: S,
    effShowTrendBridgeOverlay: j,
    effShowSignalsInspector: w,
    effOnSignalFocus: y,
    effShowWarningsPanel: v,
    effWarningsFilter: $,
    effShowEmbeddedIcon: M,
    effEmbeddedIconVariant: E,
    effEmbeddedIconRunLength: k,
    effShowFocusIndicator: _,
    effHeight: N,
    effClassName: H,
    effAriaLabel: Z,
    effUnit: ee,
    effNarrationContext: B,
    effShowZones: J,
    effShowPoints: A,
    effHighlightOutOfControl: L,
    effVisualsScenario: G,
    effVisualsEngineSettings: F,
    effSource: O,
    effPrecomputedVisuals: X,
    effEngineAutoRecalc: K
  } = vg(e), q = Z ?? e.ariaLabel, ne = N ?? e.height ?? 260, ue = H ?? e.className, W = ee ?? e.unit, ae = B ?? e.narrationContext, ce = J ?? e.showZones, be = A ?? e.showPoints, he = L ?? e.highlightOutOfControl, Me = G ?? e.visualsScenario ?? nc.None, Ge = F ?? e.visualsEngineSettings, Te = O ?? e.source, Le = e.a11y?.announceFocus ?? e.announceFocus ?? !1, we = V.useMemo(() => o.map((Ce, je) => ({
    x: Ce.x,
    value: Ce.y,
    target: a?.[je] ?? void 0,
    baseline: s?.[je] ?? void 0,
    ghost: i?.[je] ?? void 0
  })), [o, a, s, i]), P = V.useMemo(() => {
    try {
      const Ce = K;
      return Ce?.enabled ? Lg(we, {
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
  }, [we, K, l, c]), Y = V.useMemo(() => {
    if (X?.visuals) return X.visuals;
    try {
      const Ce = Ii(
        d,
        P,
        Ge
      ), { chartType: je, metricImprovement: ve } = Mi(
        l,
        c
      ), Ne = {
        chartType: je,
        metricImprovement: ve,
        data: P,
        settings: Ce
      }, { visuals: Ke } = lg(Ne, Me, {
        trendVisualMode: g === lc.Ungated ? Bn.Ungated : Bn.Gated,
        enableNeutralNoJudgement: D
      });
      return Ke || [];
    } catch {
      return [];
    }
  }, [
    X?.visuals?.length,
    P,
    l,
    c,
    g,
    D,
    d,
    Me,
    Ge
  ]), fe = V.useMemo(() => {
    if (X?.rows)
      try {
        const Ce = X.rows, je = (ve) => {
          switch (ve) {
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
            target: P[Ne]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Ce = Ii(
        d,
        P,
        Ge
      ), { chartType: je, metricImprovement: ve } = Mi(
        l,
        c
      ), Ne = {
        chartType: je,
        metricImprovement: ve,
        data: P,
        settings: Ce
      }, { rows: Ke } = Mg(Ne), at = ($e) => {
        switch ($e) {
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
            variation: at($e.variationIcon),
            neutralSpecialCauseValue: $e.variationIcon === Ee.NeitherHigh || $e.variationIcon === Ee.NeitherLow ? $e.specialCauseImprovementValue ?? $e.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: P[Pe]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    X?.rows?.length,
    P,
    l,
    c,
    d,
    Ge
  ]) || null, pe = (fe || []).slice().reverse().find((Ce) => Ce.limits.mean != null), R = pe?.limits.mean ?? null, U = V.useMemo(() => {
    const Ce = [];
    try {
      const je = fe, ve = d?.minimumPoints ?? 13, Ne = d?.minimumPoints ?? 12;
      if (je && je.length) {
        const Ke = je.filter(
          ($e) => !$e.data.ghost && $e.data.value != null
        ).length;
        Ke < ve && Ce.push({
          code: Yr.InsufficientPointsGlobal,
          severity: Et.Warning,
          category: Gr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: Ke, minimumPoints: ve }
        });
        const at = /* @__PURE__ */ new Map();
        for (const $e of je) {
          const Pe = $e.partition.id ?? 0, Oe = at.get(Pe) || { size: 0, nonGhost: 0 };
          Oe.size += 1, !$e.data.ghost && $e.data.value != null && (Oe.nonGhost += 1), at.set(Pe, Oe);
        }
        for (const [$e, Pe] of at)
          Pe.nonGhost > 0 && Pe.nonGhost < Ne && Ce.push({
            code: Yr.InsufficientPointsPartition,
            severity: Et.Warning,
            category: Gr.Partition,
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
  }, [fe, d?.minimumPoints]), oe = V.useMemo(() => U.length ? $ ? U.filter((Ce) => !($.severities && Ce.severity && !$.severities.includes(Ce.severity) || $.categories && Ce.category && !$.categories.includes(Ce.category) || $.codes && !$.codes.includes(Ce.code))) : U : [], [U, $]), Q = pe?.limits.ucl ?? null, re = pe?.limits.lcl ?? null, le = pe?.limits.oneSigma.upper ?? null, de = pe?.limits.oneSigma.lower ?? null, ye = pe?.limits.twoSigma.upper ?? null, ke = pe?.limits.twoSigma.lower ?? null, Be = R != null && le != null ? Math.abs(le - R) : 0, Ye = V.useMemo(
    () => [{ id: "process", data: o, color: "#A6A6A6" }],
    [o]
  ), lt = V.useMemo(
    () => Dg(
      o,
      { mean: R, ucl: Q, lcl: re, onePos: le, oneNeg: de, twoPos: ye, twoNeg: ke },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      a ?? null
    ),
    [
      o,
      R,
      Q,
      re,
      le,
      de,
      ye,
      ke,
      a,
      u,
      f,
      h
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
    return a && a.length ? Ce(a) : null;
  }, [fe, a]), { show: ie, slotPx: Ae, totalReservedPx: z } = Ig(
    lt,
    ne,
    { maxFraction: 0.35 }
  ), te = ie ? z : 0, ge = V.useMemo(() => {
    const Ce = o.map((je) => je.x);
    return cc({
      values: o.map((je) => je.y),
      dates: Ce,
      providedUnit: W || ae?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [o, W, ae?.measureUnit]), me = W ?? ae?.measureUnit ?? ge.unit, xe = V.useMemo(() => me ? { ...ae || {}, measureUnit: me } : ae, [ae, me]), Se = V.useMemo(() => {
    if (!fe) return [];
    const Ce = [];
    for (let je = 1; je < fe.length; je++)
      fe[je].partition.id !== fe[je - 1].partition.id && Ce.push(je);
    return Ce;
  }, [fe]), Re = V.useMemo(
    () => xg({
      show: !!M,
      rowsForUi: fe,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: E,
      runLength: k
    }),
    [
      M,
      fe,
      d?.minimumPoints,
      c,
      E,
      k
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: ue ? `fdp-spc-chart-wrapper ${ue}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ n.jsx(
          mg,
          {
            show: !!M,
            variationNode: Re,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ n.jsx(
          Jp,
          {
            height: ne,
            ariaLabel: q,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ n.jsx(Xp, { series: Ye, yDomain: lt, yBottomGapPx: te, children: (() => {
              const Ce = {
                data: {
                  series: Ye,
                  engineRows: fe,
                  visualCategories: Y,
                  partitionMarkers: C ? Se : []
                },
                targets: {
                  limits: { mean: R, ucl: Q, lcl: re, sigma: Be, onePos: le, oneNeg: de, twoPos: ye, twoNeg: ke },
                  uniformTarget: Qe
                },
                visuals: {
                  showPoints: be,
                  showZones: ce,
                  highlightOutOfControl: he,
                  gradientSequences: p,
                  sequenceTransition: x,
                  processLineWidth: m,
                  showFocusIndicator: _,
                  enableRules: T,
                  enableNeutralNoJudgement: D,
                  showTrendStartMarkers: b,
                  showFirstFavourableCrossMarkers: S,
                  showTrendBridgeOverlay: j
                },
                a11y: {
                  announceFocus: Le,
                  ariaLabel: q,
                  narrationContext: xe,
                  showSignalsInspector: w,
                  onSignalFocus: y,
                  showTrendGatingExplanation: I
                },
                axis: { zeroBreakSlotGapPx: Ae },
                compute: { effectiveUnit: me, metricImprovement: c }
              };
              return /* @__PURE__ */ n.jsx(Sg, { ...Ce });
            })() })
          }
        ),
        Te && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Te == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          Te
        ] }) : Te }),
        /* @__PURE__ */ n.jsx(
          pg,
          {
            show: !!v,
            warnings: oe,
            formatWarningCategory: r,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function Ag(e, t) {
  const {
    chartType: r = jt.XmR,
    metricImprovement: o,
    minimumPoints: a = ds,
    enableNeutralNoJudgement: s = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map((T) => ({ x: T.x, value: T.value ?? T.y ?? null }));
  let c = null;
  try {
    const T = l.filter(
      (b) => typeof b.value == "number"
    ).length, C = { minimumPoints: a };
    T >= a && (C.chartLevelEligibility = !0), c = hr({ chartType: r, metricImprovement: o, data: l, settings: C });
  } catch {
    c = null;
  }
  const d = c?.rows ?? [];
  let u = d[d.length - 1] ?? null;
  for (let T = d.length - 1; T >= 0; T--) {
    const C = d[T];
    if (C && C.value != null && !C.ghost) {
      u = C;
      break;
    }
  }
  let f = [];
  try {
    f = fr(d, {
      metricImprovement: o,
      enableNeutralNoJudgement: s
    });
  } catch {
    f = [];
  }
  const h = Vr(
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
  let I, D;
  return i && (I = us(f), D = dc(f)), {
    rows: d,
    visuals: f,
    latestState: h,
    lastVariationIcon: p,
    centerLine: x,
    controlLimits: m,
    sigmaBands: g,
    pointSignals: I,
    pointNeutralSpecialCause: D
  };
}
const yv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: cn,
  BaselineSuggestionReason: Vl,
  ChartType: jt,
  DEFAULT_MIN_POINTS: ds,
  Icons: gg,
  ImprovementDirection: Xe,
  PARITY_V26: rc,
  RULE_METADATA: Yl,
  SPCChart: $g,
  SPCTooltipOverlay: ic,
  SpcEmbeddedIconVariant: xn,
  SpcVisualCategory: it,
  SpcWarningCategory: Gr,
  SpcWarningCode: Yr,
  SpcWarningSeverity: Et,
  VARIATION_COLOR_TOKENS: Tt,
  VariationIcon: Ee,
  buildSpcV26a: hr,
  buildSpcV26aWithVisuals: is,
  computeSpcPrecomputed: Ag,
  computeSpcVisualCategories: fr,
  extractRuleIds: No,
  getVariationColorHex: Ym,
  getVariationColorToken: ql,
  isSpecialCauseIcon: sc,
  mapIconToVariation: Vr,
  normaliseSpcSettingsV2: tc,
  ruleGlossary: $n,
  variationLabel: jo,
  visualsToNeutralFlags: dc,
  visualsToPointSignals: us,
  withParityV26: cg
}, Symbol.toStringTag, { value: "Module" }));
function Eg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Pg(e) {
  const {
    values: t,
    x: r,
    chartType: o = jt.XmR,
    metricImprovement: a = Xe.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = V.useMemo(() => {
    const b = [];
    for (let S = 0; S < t.length; S++)
      b.push({ x: r?.[S], value: t[S] });
    return b;
  }, [t, r]), u = V.useMemo(() => {
    try {
      const b = d.map((y, v) => ({ x: y.x ?? v, value: y.value })), S = 13, j = b.filter((y) => typeof y.value == "number").length, w = { minimumPoints: S };
      return j >= S && (w.chartLevelEligibility = !0), hr({ chartType: o, metricImprovement: a, data: b, settings: w });
    } catch {
      return null;
    }
  }, [d, o, a]), f = V.useMemo(() => {
    const b = u?.rows;
    if (!b || b.length === 0) return null;
    for (let S = b.length - 1; S >= 0; S--) {
      const j = b[S];
      if (j && j.value != null && !j.ghost) return j;
    }
    return b[b.length - 1] ?? null;
  }, [u]), h = V.useMemo(() => {
    const b = u?.rows;
    if (!b || b.length === 0) return null;
    let S = b[b.length - 1];
    for (let j = b.length - 1; j >= 0; j--) {
      const w = b[j];
      if (w && w.value != null && !w.ghost) {
        S = w;
        break;
      }
    }
    return Vr(S?.variationIcon);
  }, [u]), p = V.useMemo(() => f?.mean ?? null, [f]), x = V.useMemo(() => {
    if (!f) return null;
    const b = f?.lowerProcessLimit ?? null, S = f?.upperProcessLimit ?? null;
    return b == null && S == null ? null : { lower: b, upper: S };
  }, [f]), m = V.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), g = V.useMemo(() => {
    const b = u?.rows;
    if (!(!b || b.length === 0))
      try {
        return fr(b, {
          metricImprovement: a,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, a]), I = V.useMemo(() => us(g), [g?.length]), D = V.useMemo(() => {
    if (!(!g || g.length === 0))
      return g.map((b) => b === it.NoJudgement);
  }, [g?.length]), T = V.useMemo(() => {
    let b = null;
    if (f && f.value != null && !f.ghost) {
      const E = f.variationIcon;
      h === Fe.SpecialCauseNoJudgement ? b = sc(E) ? Fe.SpecialCauseNoJudgement : Fe.CommonCause : b = Vr(E) ?? Fe.CommonCause;
    }
    const S = b ?? Fe.CommonCause, j = Mo[S].hex, [w, y, v] = Eg(j), $ = Io();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${w}, ${y}, ${v}, ${$.start}) 0%, rgba(${w}, ${y}, ${v}, ${$.mid}) 50%, rgba(${w}, ${y}, ${v}, ${$.end}) 100%)`,
      "--fdp-metric-card-accent": j
    };
  }, [f, h]);
  return { sparkProps: V.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: a,
    centerLine: p,
    controlLimits: x,
    sigmaBands: m,
    pointSignals: I,
    pointNeutralSpecialCause: D,
    visualCategories: g,
    variationState: h ?? void 0
  }), [
    d,
    c,
    s,
    i,
    l,
    a,
    h,
    p,
    x?.lower,
    x?.upper,
    m?.upperTwo,
    m?.lowerOne,
    m?.lowerTwo,
    I?.length,
    D?.length,
    g?.length
  ]), metricCardStyle: T, latestState: h };
}
const vv = ({
  sparkData: e,
  direction: t = Xe.Neither,
  showMean: r = !1,
  showLimits: o = !0,
  showLimitBand: a = !1,
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
  const m = Pg({
    values: e.map((S) => S.value ?? null),
    metricImprovement: t,
    showLimits: o,
    showLimitBand: a,
    showInnerBands: s,
    showMean: r
  }), g = /* @__PURE__ */ n.jsx(ac, { ...m.sparkProps, maxPoints: i }), I = V.useMemo(() => cc({
    values: e.map((S) => typeof S.value == "number" ? S.value : null),
    dates: e.map((S) => S.date),
    intervalHint: f,
    startDate: h,
    providedUnit: x.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, x.unit, u, l, c, d, p]), D = l && I.value != null ? I.value : x.value, T = c && I.delta ? I.delta : x.delta, C = I.unit || x.unit, b = d && I.metadata ? I.metadata : x.metadata;
  return /* @__PURE__ */ n.jsx(
    Om,
    {
      ...x,
      value: D,
      unit: C,
      delta: T,
      metadata: b,
      visual: g,
      style: m.metricCardStyle
    }
  );
};
function Fg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function Rg(e = "auto") {
  const [t, r] = rt.useState(
    !1
  );
  return rt.useEffect(() => {
    if (e !== "auto" || typeof window > "u" || !window.matchMedia) return;
    const o = window.matchMedia("(prefers-reduced-motion: reduce)"), a = () => r(o.matches);
    return a(), o.addEventListener?.("change", a), () => o.removeEventListener?.("change", a);
  }, [e]), e === "off" ? !1 : t;
}
function Di(e, t) {
  return t[Math.floor(e() * t.length)];
}
function an(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Bg(e, t) {
  const r = e.seed ?? 1, o = Fg(r), a = Math.max(6, Math.min(48, Math.round(e.density ?? 18))), s = ["circle", "hexagon", "rect"], i = [], l = e.gradients && e.gradients.length > 0 ? e.gradients : [
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
  for (; i.length < a && x < a * 50; ) {
    x++;
    const m = Di(o, s), g = an(o() * 1, 0.15, 0.95), I = 24 + o() * 72, D = o() * 100, T = o() * 100;
    if (!p(D, T)) continue;
    const C = Di(o, l);
    if (m === "rect") {
      const b = 0.6 + o() * 0.8;
      i.push({
        kind: m,
        width: I * b,
        height: I,
        x: D,
        y: T,
        depth: g,
        fillToken: C,
        shadow: "soft"
      });
    } else
      i.push({
        kind: m,
        size: I,
        x: D,
        y: T,
        depth: g,
        fillToken: C,
        shadow: "soft"
      });
  }
  return i;
}
const wv = (e) => {
  const {
    seed: t = 1,
    mode: r = "scroll",
    axis: o = "xy",
    height: a = 520,
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
  } = e, g = rt.useRef(null), [I, D] = rt.useState({
    w: 1e3,
    h: 520
  }), T = Rg(h), C = e.direction ?? "se", b = rt.useMemo(() => {
    switch (C) {
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
  }, [C]);
  rt.useLayoutEffect(() => {
    if (!g.current) return;
    const E = new ResizeObserver((k) => {
      for (const _ of k) {
        const N = _.contentRect;
        D({ w: N.width, h: N.height });
      }
    });
    return E.observe(g.current), () => E.disconnect();
  }, []);
  const S = rt.useMemo(() => e.shapes && e.shapes.length ? e.shapes : Bg(e, I.w), [t, I.w, I.h]), [j, w] = rt.useState(0), [y, v] = rt.useState(null);
  rt.useEffect(() => {
    if (r !== "scroll" || T) return;
    let E;
    return (async () => {
      if (typeof window > "u") return;
      const k = g.current;
      if (k)
        try {
          const _ = await import("./index-C_MjGuuK.js"), N = await import("./ScrollTrigger-7ivQEezo.js"), H = _.default ?? _.gsap ?? _, Z = N.ScrollTrigger ?? N.default ?? N;
          H.registerPlugin(Z);
          const ee = Z.create({
            trigger: k,
            start: l,
            end: c,
            markers: d,
            pin: u,
            pinSpacing: f,
            scrub: i,
            invalidateOnRefresh: !0,
            onUpdate: (B) => w(B.progress)
          });
          v((B) => B === null ? ee.progress ?? 0.5 : B), d && window && (window.__parallaxRefresh = () => {
            try {
              Z.refresh();
            } catch {
            }
          }), E = () => {
            try {
              ee.kill();
            } catch {
            }
          };
        } catch {
          const N = () => {
            const H = k.getBoundingClientRect(), Z = window.innerHeight || document.documentElement.clientHeight, ee = H.height + Z, B = Z - H.top, J = an(B / ee, 0, 1);
            v((A) => A === null ? J : A), w(J);
          };
          N(), window.addEventListener("scroll", N, { passive: !0 }), window.addEventListener("resize", N), E = () => {
            window.removeEventListener("scroll", N), window.removeEventListener("resize", N);
          };
        }
    })(), () => {
      E && E();
    };
  }, [r, T, l, c, d, u, f, i]), rt.useEffect(() => {
    if (r !== "timed" || T) return;
    let E = 0, k = performance.now();
    const _ = 8e3, N = (H) => {
      const ee = (H - k) % _ / _;
      w(ee), E = requestAnimationFrame(N);
    };
    return E = requestAnimationFrame(N), () => cancelAnimationFrame(E);
  }, [r, T]);
  const $ = (E) => 0.15 + (E ?? 0.5) * 0.6, M = {
    position: "absolute",
    left: "50%",
    top: "50%",
    bottom: void 0,
    right: void 0,
    transform: "translate(-50%, -50%)",
    width: typeof p.width == "number" ? `${p.width}px` : p.width || "min(520px, 70%)"
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: g,
      className: ["nhs-parallax-scene", x].filter(Boolean).join(" "),
      style: {
        position: "relative",
        height: typeof a == "number" ? `${a}px` : a,
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
              /* @__PURE__ */ n.jsx("g", { className: "nhs-parallax-connectors", children: S.map((E, k) => {
                const _ = E.x, N = E.y, H = (E.width ?? E.size ?? 40) / I.w * 100 * 1, Z = (E.height ?? E.size ?? 40) / I.h * 100 * 1, ee = E.kind === "circle" ? [
                  [_, N - Z / 2],
                  [_ + H / 2, N],
                  [_, N + Z / 2],
                  [_ - H / 2, N]
                ] : E.kind === "rect" || E.kind === "svg" ? [
                  [_ - H / 2, N - Z / 2],
                  [_ + H / 2, N - Z / 2],
                  [_ + H / 2, N + Z / 2],
                  [_ - H / 2, N + Z / 2]
                ] : (
                  // hexagon approx points
                  [
                    [_ - H / 2, N],
                    [_ - H / 4, N - Z / 2],
                    [_ + H / 4, N - Z / 2],
                    [_ + H / 2, N],
                    [_ + H / 4, N + Z / 2],
                    [_ - H / 4, N + Z / 2]
                  ]
                ), B = $(E.depth), L = (u ? j : j - (y ?? 0.5)) * s * B, G = o === "x" ? L : o === "xy" ? L * b.x : 0, F = o === "y" ? L : o === "xy" ? L * b.y : 0;
                return ee.map((O, X) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: an(O[0] + G, 0, 100),
                    y1: an(O[1] + F, 0, 100),
                    x2: an(50 + G * 0.2, 0, 100),
                    y2: an(50 + F * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${k}-${X}`
                ));
              }) }),
              /* @__PURE__ */ n.jsx("g", { className: "nhs-parallax-shapes", children: S.map((E, k) => {
                const _ = $(E.depth), Z = (u ? j : j - (y ?? 0.5)) * s * _, ee = o === "x" ? Z : o === "xy" ? Z * b.x : 0, B = o === "y" ? Z : o === "xy" ? Z * b.y : 0, J = an(E.x + ee, 0, 100), A = an(E.y + B, 0, 100), L = E.rotate ?? 0, G = [
                  "nhs-parallax-shape",
                  E.fillToken,
                  E.shadow && `nhs-parallax-shadow--${E.shadow}`
                ].filter(Boolean).join(" ");
                if (E.kind === "circle") {
                  const K = (E.size ?? 40) / I.w * 100 * 0.5;
                  return /* @__PURE__ */ n.jsx("circle", { cx: J, cy: A, r: K, className: G }, k);
                }
                if (E.kind === "rect") {
                  const K = (E.width ?? 48) / I.w * 100, q = (E.height ?? 36) / I.h * 100;
                  return /* @__PURE__ */ n.jsx(
                    "rect",
                    {
                      x: J - K / 2,
                      y: A - q / 2,
                      width: K,
                      height: q,
                      transform: `rotate(${L} ${J} ${A})`,
                      className: G
                    },
                    k
                  );
                }
                if (E.kind === "svg" && E.src) {
                  const K = (E.width ?? 48) / I.w * 100, q = (E.height ?? 48) / I.h * 100;
                  return /* @__PURE__ */ n.jsx(
                    "image",
                    {
                      href: E.src,
                      x: J - K / 2,
                      y: A - q / 2,
                      width: K,
                      height: q,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${L} ${J} ${A})`,
                      className: G
                    },
                    k
                  );
                }
                const F = (E.size ?? 40) / I.w * 100, O = F * 0.866, X = [
                  [J - F / 2, A],
                  [J - F / 4, A - O / 2],
                  [J + F / 4, A - O / 2],
                  [J + F / 2, A],
                  [J + F / 4, A + O / 2],
                  [J - F / 4, A + O / 2]
                ].map((K) => K.join(",")).join(" ");
                return /* @__PURE__ */ n.jsx("polygon", { points: X, className: G }, k);
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
function Hg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function ft(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function zg(e, t, r, o, a, s, i, l, c, d, u, f) {
  const h = Hg(e), p = [], x = [], m = ["rect", "hex", "circle"], g = { x: 50, y: 50 }, I = o, D = 1200, T = 400, C = 1.2, b = {
    left: g.x - I.w / 2,
    right: g.x + I.w / 2,
    top: g.y - I.h / 2,
    bottom: g.y + I.h / 2
  }, S = !c && !!u && u.r > 0, j = !c && !!f && (f.rx > 0 || f.ry > 0), w = (N, H) => {
    if (!S) return !1;
    const Z = N - g.x, ee = H - g.y;
    return Z * Z + ee * ee <= u.r * u.r;
  }, y = (N, H) => {
    if (!j) return !1;
    const Z = Math.max(1e-6, f.rx || 0), ee = Math.max(1e-6, f.ry || 0), B = (N - g.x) / Z, J = (H - g.y) / ee;
    return B * B + J * J <= 1;
  }, v = (N, H) => !(N.right < H.left || N.left > H.right || N.bottom < H.top || N.top > H.bottom), $ = (N) => N.left >= 0 && N.top >= 0 && N.right <= 100 && N.bottom <= 100, M = (N, H, Z, ee, B, J) => {
    let A = 0, L = 0;
    if (N === "rect") {
      const G = ee ?? 48, F = B ?? 36;
      A = G / D * 100, L = F / T * 100;
    } else if (N === "circle") {
      const G = J ?? 40;
      A = G / D * 100, L = G / T * 100;
    } else {
      const G = J ?? 40;
      A = G / D * 100, L = G * s / T * 100;
    }
    return {
      left: H - A / 2 - C,
      right: H + A / 2 + C,
      top: Z - L / 2 - C,
      bottom: Z + L / 2 + C
    };
  };
  let E = 0;
  const k = ft(Math.round(t), 4, 48);
  let _ = null;
  if (d) {
    const N = Math.ceil(Math.sqrt(k)), H = Math.ceil(k / N);
    _ = [];
    for (let Z = 0; Z < H; Z++)
      for (let ee = 0; ee < N && !(_.length >= k); ee++) {
        const B = (ee + 0.5) / N * 100, J = (Z + 0.5) / H * 100;
        _.push({ x: B, y: J });
      }
  }
  for (; p.length < k && E < k * 120; ) {
    E++;
    const N = m[Math.floor(h() * m.length)];
    let H, Z;
    if (d && _ && _.length) {
      const A = p.length % _.length;
      H = _[A].x, Z = _[A].y;
    } else {
      const A = ft(a ?? 0, 0, 1), L = () => h() * 100, G = () => {
        const O = Math.max(h(), 1e-6), X = Math.max(h(), 1e-6), K = Math.sqrt(-2 * Math.log(O)), q = 2 * Math.PI * X;
        return 50 + K * Math.cos(q) * 12.5;
      }, F = (O, X, K) => O * (1 - K) + X * K;
      H = ft(F(L(), G(), A), 0, 100), Z = ft(F(L(), G(), A), 0, 100);
    }
    const ee = M(N, H, Z, 32, 24, 28);
    if (!$(ee)) continue;
    const B = ft(h(), 0.15, 0.95), J = 0;
    if (N === "rect") {
      const A = 40 + h() * 80, L = 28 + h() * 64, G = M(N, H, Z, A, L);
      if (!c && (v(G, b) || w(H, Z) || y(H, Z)))
        continue;
      if (!i) {
        let O = !1;
        for (let X = 0; X < x.length; X++)
          if (v(G, x[X])) {
            O = !0;
            break;
          }
        if (O) continue;
      }
      let F;
      if (i) {
        const O = /* @__PURE__ */ new Set();
        for (let K = 0; K < x.length; K++)
          if (v(G, x[K])) {
            const q = p[K].fill;
            q && O.add(q);
          }
        const X = r.filter((K) => !O.has(K));
        if (X.length === 0) {
          if (l === "skip") continue;
          F = r[Math.floor(h() * r.length)];
        } else
          F = X[Math.floor(h() * X.length)];
      } else
        F = r[Math.floor(h() * r.length)];
      x.push(G), p.push({ kind: N, x: H, y: Z, width: A, height: L, rotate: J, depth: B, fill: F, shadow: "soft" });
    } else if (N === "circle") {
      const A = 24 + h() * 80, L = M(N, H, Z, void 0, void 0, A);
      if (!c && (v(L, b) || w(H, Z) || y(H, Z)))
        continue;
      if (!i) {
        let F = !1;
        for (let O = 0; O < x.length; O++)
          if (v(L, x[O])) {
            F = !0;
            break;
          }
        if (F) continue;
      }
      let G;
      if (i) {
        const F = /* @__PURE__ */ new Set();
        for (let X = 0; X < x.length; X++)
          if (v(L, x[X])) {
            const K = p[X].fill;
            K && F.add(K);
          }
        const O = r.filter((X) => !F.has(X));
        if (O.length === 0) {
          if (l === "skip") continue;
          G = r[Math.floor(h() * r.length)];
        } else
          G = O[Math.floor(h() * O.length)];
      } else
        G = r[Math.floor(h() * r.length)];
      x.push(L), p.push({ kind: N, x: H, y: Z, size: A, rotate: J, depth: B, fill: G, shadow: "soft" });
    } else {
      const A = 28 + h() * 72, L = M(N, H, Z, void 0, void 0, A);
      if (!c && (v(L, b) || w(H, Z) || y(H, Z)))
        continue;
      if (!i) {
        let F = !1;
        for (let O = 0; O < x.length; O++)
          if (v(L, x[O])) {
            F = !0;
            break;
          }
        if (F) continue;
      }
      let G;
      if (i) {
        const F = /* @__PURE__ */ new Set();
        for (let X = 0; X < x.length; X++)
          if (v(L, x[X])) {
            const K = p[X].fill;
            K && F.add(K);
          }
        const O = r.filter((X) => !F.has(X));
        if (O.length === 0) {
          if (l === "skip") continue;
          G = r[Math.floor(h() * r.length)];
        } else
          G = O[Math.floor(h() * O.length)];
      } else
        G = r[Math.floor(h() * r.length)];
      x.push(L), p.push({ kind: N, x: H, y: Z, size: A, rotate: J, depth: B, fill: G, shadow: "soft" });
    }
  }
  return p;
}
const Sv = ({
  seed: e = 1,
  width: t = "100%",
  height: r = 400,
  density: o = 16,
  centrality: a = 0,
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
  excludeBoxPct: I = { w: 50, h: 36 },
  excludeCirclePct: D,
  excludeEllipsePct: T,
  uniformDistribution: C = !1,
  className: b,
  style: S
}) => {
  const j = rt.useRef(null), [w, y] = rt.useState({ w: 1200, h: 400 });
  rt.useLayoutEffect(() => {
    if (!j.current) return;
    const _ = new ResizeObserver((N) => {
      for (const H of N) {
        const Z = H.contentRect;
        y({ w: Z.width, h: Z.height });
      }
    });
    return _.observe(j.current), () => _.disconnect();
  }, []);
  const v = rt.useMemo(() => i?.length ? i : zg(
    e,
    o,
    s,
    I,
    a,
    f,
    h,
    p,
    g === "over" || C,
    C,
    D,
    T
  ), [
    e,
    o,
    s.join(","),
    I.w,
    I.h,
    a,
    f,
    h,
    p,
    g,
    C,
    D?.r,
    T?.rx,
    T?.ry,
    i
  ]), $ = 100, M = 100, E = Math.sqrt(3) / 2, k = (_, N, H) => {
    const Z = (H ?? 40) / 2, ee = _ / 100 * w.w, B = N / 100 * w.h, J = f / E;
    return [Math.PI, 2 * Math.PI / 3, Math.PI / 3, 0, -Math.PI / 3, -(2 * Math.PI) / 3].map((L) => {
      const G = ee + Z * Math.cos(L), F = B + Z * Math.sin(L) * J;
      return [ft(G / w.w * 100, 0, 100), ft(F / w.h * 100, 0, 100)];
    });
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: j,
      className: [
        "nhs-pattern-banner",
        g === "under" ? "nhs-pattern-banner--feature-under" : "nhs-pattern-banner--feature-over",
        b
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
            viewBox: `0 0 ${$} ${M}`,
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
                const _ = (A) => A / w.w * 100, N = (A) => A / w.h * 100, H = v.map((A) => {
                  const L = ft(A.x, 0, 100), G = ft(A.y, 0, 100);
                  if (A.kind === "circle") return [[L, G]];
                  if (A.kind === "rect") {
                    const F = _(A.width ?? 48), O = N(A.height ?? 36);
                    return [
                      [L - F / 2, G - O / 2],
                      [L + F / 2, G - O / 2],
                      [L + F / 2, G + O / 2],
                      [L - F / 2, G + O / 2]
                    ];
                  }
                  if (A.kind === "svg") {
                    const F = _(A.width ?? 48), O = N(A.height ?? 48);
                    return [
                      [L - F / 2, G - O / 2],
                      [L + F / 2, G - O / 2],
                      [L + F / 2, G + O / 2],
                      [L - F / 2, G + O / 2]
                    ];
                  }
                  return k(L, G, A.size ?? 40);
                }), Z = Math.max(1, Math.floor(l ?? 1)), ee = /* @__PURE__ */ new Set(), B = [];
                for (let A = 0; A < v.length; A++) {
                  const L = [];
                  for (let F = 0; F < v.length; F++) {
                    if (A === F) continue;
                    const O = v[A].x - v[F].x, X = v[A].y - v[F].y;
                    L.push({ j: F, d2: O * O + X * X });
                  }
                  L.sort((F, O) => F.d2 - O.d2);
                  const G = Math.min(Z, L.length);
                  for (let F = 0; F < G; F++) {
                    const O = L[F].j, X = Math.min(A, O), K = Math.max(A, O), q = `${X}-${K}`;
                    ee.has(q) || (ee.add(q), B.push([X, K]));
                  }
                }
                const J = [];
                for (const [A, L] of B) {
                  const G = H[A], F = H[L];
                  let O = null;
                  for (const X of G)
                    for (const K of F) {
                      const q = X[0] - K[0], ne = X[1] - K[1], ue = q * q + ne * ne;
                      (!O || ue < O.d2) && (O = { p: X, q: K, d2: ue });
                    }
                  O && J.push(
                    /* @__PURE__ */ n.jsx(
                      "line",
                      {
                        x1: ft(O.p[0], 0, 100),
                        y1: ft(O.p[1], 0, 100),
                        x2: ft(O.q[0], 0, 100),
                        y2: ft(O.q[1], 0, 100),
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
                return J;
              })() }),
              /* @__PURE__ */ n.jsx("g", { children: v.map((_, N) => {
                const H = ["nhs-pattern-banner-shape", _.fill].filter(Boolean).join(" ");
                if (_.kind === "circle") {
                  const A = (_.size ?? 40) / w.w * 100 * 0.5, L = w.w / w.h, G = A * L;
                  return /* @__PURE__ */ n.jsx(
                    "ellipse",
                    {
                      cx: ft(_.x, 0, 100),
                      cy: ft(_.y, 0, 100),
                      rx: A,
                      ry: G,
                      className: H
                    },
                    N
                  );
                }
                if (_.kind === "rect") {
                  const A = (_.width ?? 48) / w.w * 100, L = (_.height ?? 36) / w.h * 100, G = ft(_.x - A / 2, 0, 100), F = ft(_.y - L / 2, 0, 100);
                  return /* @__PURE__ */ n.jsx(
                    "rect",
                    {
                      x: G,
                      y: F,
                      width: A,
                      height: L,
                      className: H
                    },
                    N
                  );
                }
                if (_.kind === "svg" && _.src) {
                  const A = (_.width ?? 48) / w.w * 100, L = (_.height ?? 48) / w.h * 100, G = ft(_.x - A / 2, 0, 100), F = ft(_.y - L / 2, 0, 100);
                  return /* @__PURE__ */ n.jsx(
                    "image",
                    {
                      href: _.src,
                      x: G,
                      y: F,
                      width: A,
                      height: L,
                      preserveAspectRatio: "xMidYMid meet",
                      className: H
                    },
                    N
                  );
                }
                const Z = ft(_.x, 0, 100), ee = ft(_.y, 0, 100), J = k(Z, ee, _.size ?? 40).map((A) => A.join(",")).join(" ");
                return /* @__PURE__ */ n.jsx("polygon", { points: J, className: H }, N);
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
}, Og = "150ms", Ug = "300ms", Wg = "500ms", Gg = "cubic-bezier(0.4, 0, 1, 1)", Yg = "cubic-bezier(0, 0, 0.2, 1)", Vg = "cubic-bezier(0.4, 0, 0.2, 1)", Zg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", qg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Jg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Xg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Kg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Qg = "1px", e0 = "2px", t0 = "4px", n0 = "4px", r0 = "4px", o0 = "2px", a0 = "1px", s0 = "0px", i0 = "4px", l0 = "8px", c0 = "12px", uc = "#d8dde0", fc = "#4c6272", hc = "#d8dde0", pc = "#aeb7bd", mc = "#d5281b", gc = "#005eb8", xc = "#ffffff", bc = "#212b32", yc = "#007f3b", vc = "#330072", wc = "#7c2855", Sc = "#d5281b", _c = "#ffeb3b", kc = "#fff9c4", Cc = "#ffb81c", Nc = "#ed8b00", jc = "#00a499", Mc = "#ae2573", Ic = "#4c6272", Dc = "#768692", Tc = "#aeb7bd", Lc = "#d8dde0", $c = "#f0f4f5", d0 = "#212b32", u0 = "#4c6272", f0 = "#ffffff", h0 = "#212b32", p0 = "#005eb8", m0 = "#7c2855", g0 = "#003087", x0 = "#330072", b0 = "#ffeb3b", y0 = "#212b32", v0 = "#d8dde0", w0 = "#ffffff33", S0 = "#d5281b", _0 = "#4c6272", k0 = "#ffffff", C0 = "#007f3b", N0 = "#ffffff", j0 = "#006530", M0 = "#004021", I0 = "#004021", D0 = "#00000000", T0 = "#ffffff", L0 = "#005eb8", $0 = "#005eb8", A0 = "#d9e5f2", E0 = "#c7daf0", P0 = "#005eb8", F0 = "#ffffff", R0 = "#212b32", B0 = "#d9dde0", H0 = "#b3bcc2", z0 = "#b3bcc2", O0 = "#d5281b", U0 = "#aa2016", W0 = "#6a140e", G0 = "#6a140e", Y0 = "#005eb8", V0 = "#004b93", Z0 = "#002f5c", q0 = "#002f5c", J0 = "8px", X0 = "16px", K0 = "12px", Q0 = "16px", ex = "4px", tx = "40px", nx = "4px", rx = "40px", ox = "12px", ax = "16px", sx = "32px", ix = "16px", lx = "20px", cx = "28px", dx = "9px", ux = "2px", fx = "16px", hx = "24px", px = "8px", mx = "24px", gx = "16px", xx = "4px", bx = "4px", yx = "4px", vx = "8px", wx = "4px", Sx = "16px", _x = "#007f3b", kx = "#006530", Cx = "#004021", Nx = "#d8dde0", jx = "#ffffff", Mx = "#768692", Ix = "#00000000", Dx = "#ffeb3b", Tx = "#00000000", Lx = "#ffffff", $x = "#d9e5f2", Ax = "#c7daf0", Ex = "#005eb8", Px = "#005eb8", Ac = "8px", Ec = "16px", Pc = "12px", Fc = "16px", Fx = "2px", Rx = "4px", Bx = "4px", Hx = "600", zx = "#ffffff", Ox = "#d8dde0", Ux = "#aeb7bd", Wx = "#f0f4f5", Gx = "#212b32", Yx = "#212b32", Vx = "#005eb8", Rc = "16px", Bc = "32px", Hc = "16px", Zx = "1px", qx = "4px", Jx = "none", Xx = "0 2px 4px rgba(0, 0, 0, 0.1)", Kx = "#ffffff", Qx = "#ffffff", eb = "#d8dde0", tb = "#ffffff", nb = "#4c6272", rb = "#ffeb3b", ob = "#d5281b", ab = "#aeb7bd", sb = "#212b32", ib = "#4c6272", lb = "#768692", cb = "#212b32", db = "#ffffff", ub = "600", fb = "#d5281b", hb = "600", pb = "#4c6272", zc = "4px", Oc = "40px", Uc = "40px", Wc = "12px", mb = "2px", gb = "4px", xb = "0px", bb = "16px", yb = "18px", vb = "24px", wb = "32px", Sb = "34px", _b = "32px", kb = "40px", Cb = "48px", Nb = "5.4ex", jb = "7.2ex", Mb = "9ex", Ib = "10.8ex", Db = "20ex", Tb = "38ex", Lb = "56ex", $b = "44px", Ab = "40px", Eb = "1020px", Pb = "100%", Fb = "50%", Rb = "33.333%", Bb = "25%", Hb = "20%", zb = "320px", Ob = "641px", Ub = "1025px", Wb = "1280px", Gb = "960px", Yb = "32px", Vb = "16px", Zb = "#d5281b", qb = "#d5281b", Jb = "#ffffff", Xb = "#007f3b", Kb = "#007f3b", Qb = "#ffffff", ey = "#ffeb3b", ty = "#ffeb3b", ny = "#212b32", ry = "#005eb8", oy = "#005eb8", ay = "#ffffff", sy = "#d8dde0", iy = "#aeb7bd", ly = "#768692", cy = "0 4px 0 #004021", dy = "0 4px 0 #005eb8", uy = "0 4px 0 #6a140e", fy = "0 4px 0 #ffeb3b", hy = "none", py = "0 2px 4px rgba(0, 0, 0, 0.1)", my = "4px", gy = "0px", xy = "solid", by = "0 0 0 3px #ffeb3b", yy = "0 0 0 3px #ffeb3b", vy = "none", wy = "0 1px 3px rgba(0, 0, 0, 0.12)", Sy = "0 2px 6px rgba(0, 0, 0, 0.16)", _y = "0 4px 12px rgba(0, 0, 0, 0.20)", Gc = "0", Yc = "4px", Vc = "8px", Zc = "16px", qc = "24px", Jc = "32px", Xc = "40px", Kc = "48px", Qc = "56px", ed = "64px", wa = "0", Sa = "0", _a = "4px", ka = "4px", Ca = "8px", Na = "8px", ja = "8px", Ma = "16px", Ia = "16px", Da = "24px", Ta = "24px", La = "32px", $a = "32px", Aa = "40px", Ea = "40px", Pa = "48px", Fa = "48px", Ra = "56px", Ba = "56px", Ha = "64px", Zr = "Frutiger W01", qr = "Arial, Helvetica, sans-serif", Jr = "sans-serif", Xr = "400", Kr = "600", Qr = "400", eo = "12px", to = "14px", no = "12pt", ro = "14px", oo = "16px", ao = "12pt", so = "16px", io = "19px", lo = "13pt", co = "19px", uo = "22px", fo = "15pt", ho = "22px", po = "26px", mo = "17pt", go = "27px", xo = "36px", bo = "20pt", yo = "33px", vo = "48px", wo = "24pt", za = "16px", Oa = "24px", Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, qt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, ky = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Og,
  AnimationDurationNormal: Ug,
  AnimationDurationSlow: Wg,
  AnimationEasingBounce: Zg,
  AnimationEasingEaseIn: Gg,
  AnimationEasingEaseInOut: Vg,
  AnimationEasingEaseOut: Yg,
  BorderColorCard: hc,
  BorderColorCardHover: pc,
  BorderColorDefault: uc,
  BorderColorError: mc,
  BorderColorForm: fc,
  BorderRadiusLarge: c0,
  BorderRadiusMedium: l0,
  BorderRadiusNone: s0,
  BorderRadiusSmall: i0,
  BorderWidthCardBottom: n0,
  BorderWidthDefault: Qg,
  BorderWidthFormElement: e0,
  BorderWidthFormElementError: t0,
  BorderWidthPanel: r0,
  BorderWidthTableCell: a0,
  BorderWidthTableHeader: o0,
  BreakpointDesktop: Ub,
  BreakpointLargeDesktop: Wb,
  BreakpointMobile: zb,
  BreakpointTablet: Ob,
  ButtonBorderRadius: Rx,
  ButtonBorderWidth: Fx,
  ButtonPrimaryBackgroundActive: Cx,
  ButtonPrimaryBackgroundDefault: _x,
  ButtonPrimaryBackgroundDisabled: Nx,
  ButtonPrimaryBackgroundHover: kx,
  ButtonPrimaryBorderDefault: Ix,
  ButtonPrimaryBorderFocus: Dx,
  ButtonPrimaryTextDefault: jx,
  ButtonPrimaryTextDisabled: Mx,
  ButtonSecondaryBackgroundActive: Ax,
  ButtonSecondaryBackgroundDefault: Tx,
  ButtonSecondaryBackgroundHover: $x,
  ButtonSecondaryBackgroundSolid: Lx,
  ButtonSecondaryBorderDefault: Px,
  ButtonSecondaryTextDefault: Ex,
  ButtonShadowSize: Bx,
  ButtonSpacingPaddingHorizontalDesktop: Fc,
  ButtonSpacingPaddingHorizontalMobile: Ec,
  ButtonSpacingPaddingVerticalDesktop: Pc,
  ButtonSpacingPaddingVerticalMobile: Ac,
  ButtonTypographyWeight: Hx,
  CardBackgroundDefault: zx,
  CardBorderBottom: Wx,
  CardBorderDefault: Ox,
  CardBorderHover: Ux,
  CardBorderWidthBottom: qx,
  CardBorderWidthDefault: Zx,
  CardShadowDefault: Jx,
  CardShadowHover: Xx,
  CardSpacingHeadingMargin: Hc,
  CardSpacingPaddingDesktop: Bc,
  CardSpacingPaddingMobile: Rc,
  CardTextDescription: Yx,
  CardTextHeading: Gx,
  CardTextLink: Vx,
  ColorBorderDefault: v0,
  ColorBorderSecondary: w0,
  ColorButtonLoginActive: Z0,
  ColorButtonLoginBackground: Y0,
  ColorButtonLoginHover: V0,
  ColorButtonLoginShadow: q0,
  ColorButtonPrimaryActive: M0,
  ColorButtonPrimaryBackground: C0,
  ColorButtonPrimaryHover: j0,
  ColorButtonPrimaryShadow: I0,
  ColorButtonPrimaryText: N0,
  ColorButtonReverseActive: H0,
  ColorButtonReverseBackground: F0,
  ColorButtonReverseHover: B0,
  ColorButtonReverseShadow: z0,
  ColorButtonReverseText: R0,
  ColorButtonSecondaryActive: E0,
  ColorButtonSecondaryBackground: D0,
  ColorButtonSecondaryBackgroundSolid: T0,
  ColorButtonSecondaryBorder: L0,
  ColorButtonSecondaryHover: A0,
  ColorButtonSecondaryShadow: P0,
  ColorButtonSecondaryText: $0,
  ColorButtonWarningActive: W0,
  ColorButtonWarningBackground: O0,
  ColorButtonWarningHover: U0,
  ColorButtonWarningShadow: G0,
  ColorError: S0,
  ColorFocusBackground: b0,
  ColorFocusText: y0,
  ColorFormBackground: k0,
  ColorFormBorder: _0,
  ColorGrey1: Ic,
  ColorGrey2: Dc,
  ColorGrey3: Tc,
  ColorGrey4: Lc,
  ColorGrey5: $c,
  ColorLinkActive: g0,
  ColorLinkDefault: p0,
  ColorLinkHover: m0,
  ColorLinkVisited: x0,
  ColorPrimaryBlack: bc,
  ColorPrimaryBlue: gc,
  ColorPrimaryDarkPink: wc,
  ColorPrimaryGreen: yc,
  ColorPrimaryPurple: vc,
  ColorPrimaryRed: Sc,
  ColorPrimaryWhite: xc,
  ColorPrimaryYellow: _c,
  ColorSecondaryAquaGreen: jc,
  ColorSecondaryOrange: Nc,
  ColorSecondaryPaleYellow: kc,
  ColorSecondaryPink: Mc,
  ColorSecondaryWarmYellow: Cc,
  ColorTextPrimary: d0,
  ColorTextPrint: h0,
  ColorTextReverse: f0,
  ColorTextSecondary: u0,
  ComponentBlur: bx,
  ComponentBreadcrumbChevronMarginLeft: dx,
  ComponentBreadcrumbChevronMarginRight: ux,
  ComponentBreadcrumbPaddingTopDesktop: hx,
  ComponentBreadcrumbPaddingTopMobile: fx,
  ComponentButtonPaddingDesktopHorizontal: Q0,
  ComponentButtonPaddingDesktopVertical: K0,
  ComponentButtonPaddingMobileHorizontal: X0,
  ComponentButtonPaddingMobileVertical: J0,
  ComponentButtonShadowSize: ex,
  ComponentCardHeadingMargin: ix,
  ComponentCardPaddingDesktop: sx,
  ComponentCardPaddingMobile: ax,
  ComponentDetails: vx,
  ComponentExpander: wx,
  ComponentFormCheckboxLabelPadding: ox,
  ComponentFormCheckboxSize: rx,
  ComponentFormInputMinHeight: tx,
  ComponentFormInputPadding: nx,
  ComponentLink: yx,
  ComponentPagination: Sx,
  ComponentPanelPaddingDesktop: cx,
  ComponentPanelPaddingMobile: lx,
  ComponentSpread: xx,
  ComponentSummaryListCellPaddingHorizontal: mx,
  ComponentSummaryListCellPaddingVertical: px,
  ComponentSummaryListRowMargin: gx,
  ElevationHigh: _y,
  ElevationLow: wy,
  ElevationMedium: Sy,
  ElevationNone: vy,
  FocusOutlineOffset: gy,
  FocusOutlineStyle: xy,
  FocusOutlineWidth: my,
  FocusShadowButton: yy,
  FocusShadowInput: by,
  FontFamilyBase: Zr,
  FontFamilyFallback: qr,
  FontFamilyPrint: Jr,
  FontLineHeightBase: Oa,
  FontSize14Mobile: eo,
  FontSize14Print: no,
  FontSize14Tablet: to,
  FontSize16Mobile: ro,
  FontSize16Print: ao,
  FontSize16Tablet: oo,
  FontSize19Mobile: so,
  FontSize19Print: lo,
  FontSize19Tablet: io,
  FontSize22Mobile: co,
  FontSize22Print: fo,
  FontSize22Tablet: uo,
  FontSize26Mobile: ho,
  FontSize26Print: mo,
  FontSize26Tablet: po,
  FontSize36Mobile: go,
  FontSize36Print: bo,
  FontSize36Tablet: xo,
  FontSize48Mobile: yo,
  FontSize48Print: wo,
  FontSize48Tablet: vo,
  FontSizeBase: za,
  FontWeightBold: Kr,
  FontWeightLight: Qr,
  FontWeightNormal: Xr,
  FormBorderRadius: xb,
  FormBorderWidthDefault: mb,
  FormBorderWidthError: gb,
  FormErrorTextDefault: fb,
  FormErrorTypographyWeight: hb,
  FormHintTextDefault: pb,
  FormInputBackgroundDefault: Kx,
  FormInputBackgroundDisabled: eb,
  FormInputBackgroundError: tb,
  FormInputBackgroundFocus: Qx,
  FormInputBorderDefault: nb,
  FormInputBorderDisabled: ab,
  FormInputBorderError: ob,
  FormInputBorderFocus: rb,
  FormInputTextDefault: sb,
  FormInputTextDisabled: lb,
  FormInputTextPlaceholder: ib,
  FormLabelTextDefault: cb,
  FormLabelTextRequired: db,
  FormLabelTypographyWeight: ub,
  FormSpacingCheckboxLabelPadding: Wc,
  FormSpacingCheckboxSize: Uc,
  FormSpacingInputMinHeight: Oc,
  FormSpacingInputPadding: zc,
  GridGutter: Yb,
  GridGutterHalf: Vb,
  GridPageWidth: Gb,
  HeadingsNhsukHeadingL: zt,
  HeadingsNhsukHeadingM: Ot,
  HeadingsNhsukHeadingS: Ut,
  HeadingsNhsukHeadingXl: Ht,
  HeadingsNhsukHeadingXs: Wt,
  LayoutColumnActions: Hb,
  LayoutColumnFull: Pb,
  LayoutColumnHalf: Fb,
  LayoutColumnQuarter: Bb,
  LayoutColumnThird: Rb,
  LayoutContainerMaxWidth: Eb,
  ParagraphsBody: Gt,
  ParagraphsBodyLarge: Yt,
  ParagraphsBodySmall: Vt,
  ParagraphsLedeText: Zt,
  ParagraphsLedeTextSmall: qt,
  ShadowButtonDefault: cy,
  ShadowButtonFocus: fy,
  ShadowButtonSecondary: dy,
  ShadowButtonWarning: uy,
  ShadowCardDefault: hy,
  ShadowCardHover: py,
  SizeButtonMinHeightDesktop: Ab,
  SizeButtonMinHeightMobile: $b,
  SizeFormControlLarge: Cb,
  SizeFormControlMedium: kb,
  SizeFormControlSmall: _b,
  SizeFormInputWidth2xl: Tb,
  SizeFormInputWidth3xl: Lb,
  SizeFormInputWidthLg: Ib,
  SizeFormInputWidthMd: Mb,
  SizeFormInputWidthSm: jb,
  SizeFormInputWidthXl: Db,
  SizeFormInputWidthXs: Nb,
  SizeIconExtraLarge: wb,
  SizeIconLarge: vb,
  SizeIconMedium: yb,
  SizeIconNhsDefault: Sb,
  SizeIconSmall: bb,
  Spacing0: Gc,
  Spacing1: Yc,
  Spacing2: Vc,
  Spacing3: Zc,
  Spacing4: qc,
  Spacing5: Jc,
  Spacing6: Xc,
  Spacing7: Kc,
  Spacing8: Qc,
  Spacing9: ed,
  SpacingResponsive0Mobile: wa,
  SpacingResponsive0Tablet: Sa,
  SpacingResponsive1Mobile: _a,
  SpacingResponsive1Tablet: ka,
  SpacingResponsive2Mobile: Ca,
  SpacingResponsive2Tablet: Na,
  SpacingResponsive3Mobile: ja,
  SpacingResponsive3Tablet: Ma,
  SpacingResponsive4Mobile: Ia,
  SpacingResponsive4Tablet: Da,
  SpacingResponsive5Mobile: Ta,
  SpacingResponsive5Tablet: La,
  SpacingResponsive6Mobile: $a,
  SpacingResponsive6Tablet: Aa,
  SpacingResponsive7Mobile: Ea,
  SpacingResponsive7Tablet: Pa,
  SpacingResponsive8Mobile: Fa,
  SpacingResponsive8Tablet: Ra,
  SpacingResponsive9Mobile: Ba,
  SpacingResponsive9Tablet: Ha,
  StateDisabledBackground: sy,
  StateDisabledBorder: iy,
  StateDisabledText: ly,
  StateErrorBackground: Zb,
  StateErrorBorder: qb,
  StateErrorText: Jb,
  StateInfoBackground: ry,
  StateInfoBorder: oy,
  StateInfoText: ay,
  StateSuccessBackground: Xb,
  StateSuccessBorder: Kb,
  StateSuccessText: Qb,
  StateWarningBackground: ey,
  StateWarningBorder: ty,
  StateWarningText: ny,
  TransitionButtonDefault: qg,
  TransitionButtonShadow: Jg,
  TransitionCardHover: Kg,
  TransitionInputFocus: Xg
}, Symbol.toStringTag, { value: "Module" })), _v = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), kv = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), Cv = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), Nv = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), jv = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), Mv = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), Iv = ({
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
), Dv = ({
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
), Tv = ({
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
), Lv = ({
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
), $v = ({
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
), Av = () => ze(() => ky, []), Ev = () => ze(() => ({
  // Border colors
  BorderColorDefault: uc,
  BorderColorForm: fc,
  BorderColorCard: hc,
  BorderColorCardHover: pc,
  BorderColorError: mc,
  // Primary colors
  ColorPrimaryBlue: gc,
  ColorPrimaryWhite: xc,
  ColorPrimaryBlack: bc,
  ColorPrimaryGreen: yc,
  ColorPrimaryPurple: vc,
  ColorPrimaryDarkPink: wc,
  ColorPrimaryRed: Sc,
  ColorPrimaryYellow: _c,
  // Secondary colors
  ColorSecondaryPaleYellow: kc,
  ColorSecondaryWarmYellow: Cc,
  ColorSecondaryOrange: Nc,
  ColorSecondaryAquaGreen: jc,
  ColorSecondaryPink: Mc,
  // Grey scale
  ColorGrey1: Ic,
  ColorGrey2: Dc,
  ColorGrey3: Tc,
  ColorGrey4: Lc,
  ColorGrey5: $c
}), []), Pv = () => ze(() => ({
  Spacing0: Gc,
  Spacing1: Yc,
  Spacing2: Vc,
  Spacing3: Zc,
  Spacing4: qc,
  Spacing5: Jc,
  Spacing6: Xc,
  Spacing7: Kc,
  Spacing8: Qc,
  Spacing9: ed
}), []), Fv = () => ze(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: eo,
    Size16: ro,
    Size19: so,
    Size22: co,
    Size26: ho,
    Size36: go,
    Size48: yo
  },
  Tablet: {
    Size14: to,
    Size16: oo,
    Size19: io,
    Size22: uo,
    Size26: po,
    Size36: xo,
    Size48: vo
  },
  Print: {
    Size14: no,
    Size16: ao,
    Size19: lo,
    Size22: fo,
    Size26: mo,
    Size36: bo,
    Size48: wo
  },
  Family: {
    Base: Zr,
    Fallback: qr,
    Print: Jr
  },
  Weight: {
    Normal: Xr,
    Bold: Kr,
    Light: Qr
  },
  Base: {
    Size: za,
    LineHeight: Oa
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Zr,
  FontFamilyFallback: qr,
  FontFamilyPrint: Jr,
  FontWeightNormal: Xr,
  FontWeightBold: Kr,
  FontWeightLight: Qr,
  FontSize14Mobile: eo,
  FontSize14Tablet: to,
  FontSize14Print: no,
  FontSize16Mobile: ro,
  FontSize16Tablet: oo,
  FontSize16Print: ao,
  FontSize19Mobile: so,
  FontSize19Tablet: io,
  FontSize19Print: lo,
  FontSize22Mobile: co,
  FontSize22Tablet: uo,
  FontSize22Print: fo,
  FontSize26Mobile: ho,
  FontSize26Tablet: po,
  FontSize26Print: mo,
  FontSize36Mobile: go,
  FontSize36Tablet: xo,
  FontSize36Print: bo,
  FontSize48Mobile: yo,
  FontSize48Tablet: vo,
  FontSize48Print: wo,
  FontSizeBase: za,
  FontLineHeightBase: Oa
}), []), Rv = () => ze(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: wa,
    Size1: _a,
    Size2: Ca,
    Size3: ja,
    Size4: Ia,
    Size5: Ta,
    Size6: $a,
    Size7: Ea,
    Size8: Fa,
    Size9: Ba
  },
  Tablet: {
    Size0: Sa,
    Size1: ka,
    Size2: Na,
    Size3: Ma,
    Size4: Da,
    Size5: La,
    Size6: Aa,
    Size7: Pa,
    Size8: Ra,
    Size9: Ha
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: wa,
  SpacingResponsive0Tablet: Sa,
  SpacingResponsive1Mobile: _a,
  SpacingResponsive1Tablet: ka,
  SpacingResponsive2Mobile: Ca,
  SpacingResponsive2Tablet: Na,
  SpacingResponsive3Mobile: ja,
  SpacingResponsive3Tablet: Ma,
  SpacingResponsive4Mobile: Ia,
  SpacingResponsive4Tablet: Da,
  SpacingResponsive5Mobile: Ta,
  SpacingResponsive5Tablet: La,
  SpacingResponsive6Mobile: $a,
  SpacingResponsive6Tablet: Aa,
  SpacingResponsive7Mobile: Ea,
  SpacingResponsive7Tablet: Pa,
  SpacingResponsive8Mobile: Fa,
  SpacingResponsive8Tablet: Ra,
  SpacingResponsive9Mobile: Ba,
  SpacingResponsive9Tablet: Ha
}), []), Bv = () => ze(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ac,
  ButtonSpacingPaddingHorizontalMobile: Ec,
  ButtonSpacingPaddingVerticalDesktop: Pc,
  ButtonSpacingPaddingHorizontalDesktop: Fc,
  // Card spacing	
  CardSpacingPaddingMobile: Rc,
  CardSpacingPaddingDesktop: Bc,
  CardSpacingHeadingMargin: Hc,
  // Form spacing
  FormSpacingInputPadding: zc,
  FormSpacingInputMinHeight: Oc,
  FormSpacingCheckboxSize: Uc,
  FormSpacingCheckboxLabelPadding: Wc
}), []), Hv = () => ze(() => ({
  xl: Ht,
  l: zt,
  m: Ot,
  s: Ut,
  xs: Wt
}), []), zv = () => ze(() => ({
  body: Gt,
  bodyLarge: Yt,
  bodySmall: Vt,
  ledeText: Zt,
  ledeTextSmall: qt
}), []), Ov = () => ze(() => ({
  headings: {
    xl: Ht,
    l: zt,
    m: Ot,
    s: Ut,
    xs: Wt
  },
  paragraphs: {
    body: Gt,
    bodyLarge: Yt,
    bodySmall: Vt,
    ledeText: Zt,
    ledeTextSmall: qt
  },
  fonts: {
    family: {
      base: Zr,
      fallback: qr,
      print: Jr
    },
    weight: {
      normal: Xr,
      bold: Kr,
      light: Qr
    },
    sizes: {
      mobile: {
        size14: eo,
        size16: ro,
        size19: so,
        size22: co,
        size26: ho,
        size36: go,
        size48: yo
      },
      tablet: {
        size14: to,
        size16: oo,
        size19: io,
        size22: uo,
        size26: po,
        size36: xo,
        size48: vo
      },
      print: {
        size14: no,
        size16: ao,
        size19: lo,
        size22: fo,
        size26: mo,
        size36: bo,
        size48: wo
      }
    }
  }
}), []);
function Uv(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [o, a] = V.useState(t), s = V.useCallback(() => a("three-column"), []), i = V.useCallback(() => a((c) => c === "three-column" ? r : c), [r]), l = V.useCallback(() => a((c) => c === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: o,
    setLayout: a,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: o === "three-column"
  };
}
const td = {
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
function Wv(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...td, ...e }, o = [];
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
function Gv(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...td, ...e };
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
  ].forEach((a) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = a.href, s.as = a.as, s.type = a.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Yv = '"Frutiger W01", Arial, Helvetica, sans-serif', Vv = "Arial, Helvetica, sans-serif";
async function Zv() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Kp as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  Cr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  Nr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Qp as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  em as AXIS_ZIGZAG_DEFAULT_CYCLES,
  nm as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  tm as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Pi as Account,
  My as ActionLink,
  av as AdaptiveDataGrid,
  Og as AnimationDurationFast,
  Ug as AnimationDurationNormal,
  Wg as AnimationDurationSlow,
  Zg as AnimationEasingBounce,
  Gg as AnimationEasingEaseIn,
  Vg as AnimationEasingEaseInOut,
  Yg as AnimationEasingEaseOut,
  wl as AppointmentCard,
  pv as AreaSeriesPrimitive,
  Yh as AriaDataGrid,
  ca as AriaTabsDataGrid,
  av as AriaTabsDataGridAdaptive,
  pi as Axis,
  Xn as BackLink,
  gv as BandScalesProvider,
  mv as BarSeriesPrimitive,
  hc as BorderColorCard,
  pc as BorderColorCardHover,
  uc as BorderColorDefault,
  mc as BorderColorError,
  fc as BorderColorForm,
  c0 as BorderRadiusLarge,
  l0 as BorderRadiusMedium,
  s0 as BorderRadiusNone,
  i0 as BorderRadiusSmall,
  n0 as BorderWidthCardBottom,
  Qg as BorderWidthDefault,
  e0 as BorderWidthFormElement,
  t0 as BorderWidthFormElementError,
  r0 as BorderWidthPanel,
  a0 as BorderWidthTableCell,
  o0 as BorderWidthTableHeader,
  zy as BrandThemeProvider,
  pl as Breadcrumb,
  Md as Breakpoint,
  Ub as BreakpointDesktop,
  Wb as BreakpointLargeDesktop,
  zb as BreakpointMobile,
  Ob as BreakpointTablet,
  wt as Button,
  Rx as ButtonBorderRadius,
  Fx as ButtonBorderWidth,
  Cx as ButtonPrimaryBackgroundActive,
  _x as ButtonPrimaryBackgroundDefault,
  Nx as ButtonPrimaryBackgroundDisabled,
  kx as ButtonPrimaryBackgroundHover,
  Ix as ButtonPrimaryBorderDefault,
  Dx as ButtonPrimaryBorderFocus,
  jx as ButtonPrimaryTextDefault,
  Mx as ButtonPrimaryTextDisabled,
  Ax as ButtonSecondaryBackgroundActive,
  Tx as ButtonSecondaryBackgroundDefault,
  $x as ButtonSecondaryBackgroundHover,
  Lx as ButtonSecondaryBackgroundSolid,
  Px as ButtonSecondaryBorderDefault,
  Ex as ButtonSecondaryTextDefault,
  Bx as ButtonShadowSize,
  Ri as ButtonSize,
  Fc as ButtonSpacingPaddingHorizontalDesktop,
  Ec as ButtonSpacingPaddingHorizontalMobile,
  Pc as ButtonSpacingPaddingVerticalDesktop,
  Ac as ButtonSpacingPaddingVerticalMobile,
  Hx as ButtonTypographyWeight,
  Fi as ButtonVariant,
  gl as Card,
  zx as CardBackgroundDefault,
  Wx as CardBorderBottom,
  Ox as CardBorderDefault,
  Ux as CardBorderHover,
  qx as CardBorderWidthBottom,
  Zx as CardBorderWidthDefault,
  Yy as CardGroup,
  Vy as CardGroupItem,
  Jx as CardShadowDefault,
  Xx as CardShadowHover,
  Hc as CardSpacingHeadingMargin,
  Bc as CardSpacingPaddingDesktop,
  Rc as CardSpacingPaddingMobile,
  Yx as CardTextDescription,
  Gx as CardTextHeading,
  Vx as CardTextLink,
  Zy as CareCard,
  Iy as CharacterCount,
  bv as ChartEnhancer,
  xv as ChartNoScript,
  Jp as ChartRoot,
  md as Checkbox,
  yd as Checkboxes,
  v0 as ColorBorderDefault,
  w0 as ColorBorderSecondary,
  Z0 as ColorButtonLoginActive,
  Y0 as ColorButtonLoginBackground,
  V0 as ColorButtonLoginHover,
  q0 as ColorButtonLoginShadow,
  M0 as ColorButtonPrimaryActive,
  C0 as ColorButtonPrimaryBackground,
  j0 as ColorButtonPrimaryHover,
  I0 as ColorButtonPrimaryShadow,
  N0 as ColorButtonPrimaryText,
  H0 as ColorButtonReverseActive,
  F0 as ColorButtonReverseBackground,
  B0 as ColorButtonReverseHover,
  z0 as ColorButtonReverseShadow,
  R0 as ColorButtonReverseText,
  E0 as ColorButtonSecondaryActive,
  D0 as ColorButtonSecondaryBackground,
  T0 as ColorButtonSecondaryBackgroundSolid,
  L0 as ColorButtonSecondaryBorder,
  A0 as ColorButtonSecondaryHover,
  P0 as ColorButtonSecondaryShadow,
  $0 as ColorButtonSecondaryText,
  W0 as ColorButtonWarningActive,
  O0 as ColorButtonWarningBackground,
  U0 as ColorButtonWarningHover,
  G0 as ColorButtonWarningShadow,
  S0 as ColorError,
  b0 as ColorFocusBackground,
  y0 as ColorFocusText,
  k0 as ColorFormBackground,
  _0 as ColorFormBorder,
  Ic as ColorGrey1,
  Dc as ColorGrey2,
  Tc as ColorGrey3,
  Lc as ColorGrey4,
  $c as ColorGrey5,
  g0 as ColorLinkActive,
  p0 as ColorLinkDefault,
  m0 as ColorLinkHover,
  x0 as ColorLinkVisited,
  bc as ColorPrimaryBlack,
  gc as ColorPrimaryBlue,
  wc as ColorPrimaryDarkPink,
  yc as ColorPrimaryGreen,
  vc as ColorPrimaryPurple,
  Sc as ColorPrimaryRed,
  xc as ColorPrimaryWhite,
  _c as ColorPrimaryYellow,
  jc as ColorSecondaryAquaGreen,
  Nc as ColorSecondaryOrange,
  kc as ColorSecondaryPaleYellow,
  Mc as ColorSecondaryPink,
  Cc as ColorSecondaryWarmYellow,
  d0 as ColorTextPrimary,
  h0 as ColorTextPrint,
  f0 as ColorTextReverse,
  u0 as ColorTextSecondary,
  Kn as Column,
  Dd as ColumnAlign,
  bx as ComponentBlur,
  dx as ComponentBreadcrumbChevronMarginLeft,
  ux as ComponentBreadcrumbChevronMarginRight,
  hx as ComponentBreadcrumbPaddingTopDesktop,
  fx as ComponentBreadcrumbPaddingTopMobile,
  Q0 as ComponentButtonPaddingDesktopHorizontal,
  K0 as ComponentButtonPaddingDesktopVertical,
  X0 as ComponentButtonPaddingMobileHorizontal,
  J0 as ComponentButtonPaddingMobileVertical,
  ex as ComponentButtonShadowSize,
  ix as ComponentCardHeadingMargin,
  sx as ComponentCardPaddingDesktop,
  ax as ComponentCardPaddingMobile,
  vx as ComponentDetails,
  wx as ComponentExpander,
  ox as ComponentFormCheckboxLabelPadding,
  rx as ComponentFormCheckboxSize,
  tx as ComponentFormInputMinHeight,
  nx as ComponentFormInputPadding,
  yx as ComponentLink,
  Sx as ComponentPagination,
  cx as ComponentPanelPaddingDesktop,
  lx as ComponentPanelPaddingMobile,
  xx as ComponentSpread,
  mx as ComponentSummaryListCellPaddingHorizontal,
  px as ComponentSummaryListCellPaddingVertical,
  gx as ComponentSummaryListRowMargin,
  Oi as Container,
  Gy as ContentsList,
  td as DEFAULT_FONT_CONFIG,
  nv as DashboardSummaryGrid,
  Ry as DateInput,
  Lh as Details,
  $h as DoDontList,
  _y as ElevationHigh,
  wy as ElevationLow,
  Sy as ElevationMedium,
  vy as ElevationNone,
  ys as ErrorMessage,
  Fy as ErrorSummary,
  Ah as Expander,
  kt as FRUTIGER_FONT_FILES,
  Ga as Fieldset,
  Id as Float,
  gy as FocusOutlineOffset,
  xy as FocusOutlineStyle,
  my as FocusOutlineWidth,
  yy as FocusShadowButton,
  by as FocusShadowInput,
  Zr as FontFamilyBase,
  qr as FontFamilyFallback,
  Jr as FontFamilyPrint,
  Oa as FontLineHeightBase,
  eo as FontSize14Mobile,
  no as FontSize14Print,
  to as FontSize14Tablet,
  ro as FontSize16Mobile,
  ao as FontSize16Print,
  oo as FontSize16Tablet,
  so as FontSize19Mobile,
  lo as FontSize19Print,
  io as FontSize19Tablet,
  co as FontSize22Mobile,
  fo as FontSize22Print,
  uo as FontSize22Tablet,
  ho as FontSize26Mobile,
  mo as FontSize26Print,
  po as FontSize26Tablet,
  go as FontSize36Mobile,
  bo as FontSize36Print,
  xo as FontSize36Tablet,
  yo as FontSize48Mobile,
  wo as FontSize48Print,
  vo as FontSize48Tablet,
  za as FontSizeBase,
  Kr as FontWeightBold,
  Qr as FontWeightLight,
  Xr as FontWeightNormal,
  qi as Footer,
  xb as FormBorderRadius,
  mb as FormBorderWidthDefault,
  gb as FormBorderWidthError,
  fb as FormErrorTextDefault,
  hb as FormErrorTypographyWeight,
  pb as FormHintTextDefault,
  Kx as FormInputBackgroundDefault,
  eb as FormInputBackgroundDisabled,
  tb as FormInputBackgroundError,
  Qx as FormInputBackgroundFocus,
  nb as FormInputBorderDefault,
  ab as FormInputBorderDisabled,
  ob as FormInputBorderError,
  rb as FormInputBorderFocus,
  sb as FormInputTextDefault,
  lb as FormInputTextDisabled,
  ib as FormInputTextPlaceholder,
  cb as FormLabelTextDefault,
  db as FormLabelTextRequired,
  ub as FormLabelTypographyWeight,
  Wc as FormSpacingCheckboxLabelPadding,
  Uc as FormSpacingCheckboxSize,
  Oc as FormSpacingInputMinHeight,
  zc as FormSpacingInputPadding,
  Uy as GanttChart,
  ta as Grid,
  Yb as GridGutter,
  Vb as GridGutterHalf,
  rm as GridLines,
  Gb as GridPageWidth,
  bn as GridWidth,
  Zi as Header,
  Oy as HeaderSSR,
  Xd as HeaderSearch,
  Zi as HeaderStatic,
  Kt as Heading,
  zt as HeadingsNhsukHeadingL,
  Ot as HeadingsNhsukHeadingM,
  Ut as HeadingsNhsukHeadingS,
  Ht as HeadingsNhsukHeadingXl,
  Wt as HeadingsNhsukHeadingXs,
  Qd as Hero,
  Hi as Hint,
  Qy as Images,
  Ua as Input,
  qy as InsetText,
  Wa as Label,
  Hb as LayoutColumnActions,
  Pb as LayoutColumnFull,
  Fb as LayoutColumnHalf,
  Bb as LayoutColumnQuarter,
  Rb as LayoutColumnThird,
  Eb as LayoutContainerMaxWidth,
  hv as Legend,
  Xp as LineScalesProvider,
  Bm as LineSeriesPrimitive,
  $d as List,
  Ui as MainWrapper,
  Sl as MedicationCard,
  Om as MetricCard,
  Iv as NHSBodyText,
  Dv as NHSBodyTextLarge,
  Tv as NHSBodyTextSmall,
  kv as NHSHeading1,
  Cv as NHSHeading2,
  Nv as NHSHeading3,
  jv as NHSHeading4,
  Mv as NHSHeading5,
  Lv as NHSLedeText,
  $v as NHSLedeTextSmall,
  Hy as NHSThemeProvider,
  Vv as NHS_FALLBACK_FONT_STACK,
  Yv as NHS_FONT_STACK,
  Rp as NavigationSplitView,
  iv as PageTemplate,
  Wy as Pagination,
  Nh as Panel,
  Gt as ParagraphsBody,
  Yt as ParagraphsBodyLarge,
  Vt as ParagraphsBodySmall,
  Zt as ParagraphsLedeText,
  qt as ParagraphsLedeTextSmall,
  wv as ParallaxScene,
  vl as PatientCard,
  Sv as PatternBanner,
  Wp as ProductRoadmap,
  Dy as Radios,
  Ty as RadiosServer,
  av as ResponsiveDataGrid,
  sv as ResponsiveDataGridDemo,
  sn as Row,
  yv as SPC,
  $g as SPCChart,
  vv as SPCMetricCard,
  Mr as Select,
  kd as SelectOption,
  cy as ShadowButtonDefault,
  fy as ShadowButtonFocus,
  dy as ShadowButtonSecondary,
  uy as ShadowButtonWarning,
  hy as ShadowCardDefault,
  py as ShadowCardHover,
  Ab as SizeButtonMinHeightDesktop,
  $b as SizeButtonMinHeightMobile,
  Cb as SizeFormControlLarge,
  kb as SizeFormControlMedium,
  _b as SizeFormControlSmall,
  Tb as SizeFormInputWidth2xl,
  Lb as SizeFormInputWidth3xl,
  Ib as SizeFormInputWidthLg,
  Mb as SizeFormInputWidthMd,
  jb as SizeFormInputWidthSm,
  Db as SizeFormInputWidthXl,
  Nb as SizeFormInputWidthXs,
  wb as SizeIconExtraLarge,
  vb as SizeIconLarge,
  yb as SizeIconMedium,
  Sb as SizeIconNhsDefault,
  bb as SizeIconSmall,
  ml as SkipLink,
  ev as SlotMatrix,
  rv as SortStatusControl,
  Gc as Spacing0,
  Yc as Spacing1,
  Vc as Spacing2,
  Zc as Spacing3,
  qc as Spacing4,
  Jc as Spacing5,
  Xc as Spacing6,
  Kc as Spacing7,
  Qc as Spacing8,
  ed as Spacing9,
  wa as SpacingResponsive0Mobile,
  Sa as SpacingResponsive0Tablet,
  _a as SpacingResponsive1Mobile,
  ka as SpacingResponsive1Tablet,
  Ca as SpacingResponsive2Mobile,
  Na as SpacingResponsive2Tablet,
  ja as SpacingResponsive3Mobile,
  Ma as SpacingResponsive3Tablet,
  Ia as SpacingResponsive4Mobile,
  Da as SpacingResponsive4Tablet,
  Ta as SpacingResponsive5Mobile,
  La as SpacingResponsive5Tablet,
  $a as SpacingResponsive6Mobile,
  Aa as SpacingResponsive6Tablet,
  Ea as SpacingResponsive7Mobile,
  Pa as SpacingResponsive7Tablet,
  Fa as SpacingResponsive8Mobile,
  Ra as SpacingResponsive8Tablet,
  Ba as SpacingResponsive9Mobile,
  Ha as SpacingResponsive9Tablet,
  Ly as SpacingUtilities,
  sy as StateDisabledBackground,
  iy as StateDisabledBorder,
  ly as StateDisabledText,
  Zb as StateErrorBackground,
  qb as StateErrorBorder,
  Jb as StateErrorText,
  ry as StateInfoBackground,
  oy as StateInfoBorder,
  ay as StateInfoText,
  Xb as StateSuccessBackground,
  Kb as StateSuccessBorder,
  Qb as StateSuccessText,
  ey as StateWarningBackground,
  ty as StateWarningBorder,
  ny as StateWarningText,
  tv as StepByStepNavigation,
  Oh as SummaryCard,
  Jy as SummaryList,
  tn as Table,
  Xy as Tabs,
  st as Tag,
  Eh as TaskList,
  wd as Textarea,
  fv as TooltipOverlay,
  Rm as TooltipProvider,
  lv as TransactionalPageTemplate,
  qg as TransitionButtonDefault,
  Jg as TransitionButtonShadow,
  Kg as TransitionCardHover,
  Xg as TransitionInputFocus,
  uv as VisibilityProvider,
  _l as VitalsCard,
  Py as WIDTH_FRACTIONS,
  Ky as WarningCallout,
  Ml as WidthContainer,
  Ay as WidthUtilities,
  dv as WorkflowSplitView,
  Zv as checkFrutigerLoaded,
  ns as createGenericTabsConfig,
  ov as createTCHTabsConfig,
  Wv as generateFrutigerFontFace,
  _v as getResponsiveStyles,
  $y as getSpacingClass,
  Ey as getWidthClass,
  Gv as preloadFrutigerFonts,
  rp as tchDataConfig,
  Jd as useBrand,
  Ev as useColors,
  Bv as useComponentSpacing,
  Hv as useNHSHeadings,
  zv as useNHSParagraphs,
  By as useNHSTheme,
  Ov as useNHSTypographySystem,
  Uv as useNavigationSplitDrill,
  Tp as useNavigationSplitUrlSync,
  rs as useNhsFdpBreakpoints,
  Rv as useResponsiveSpacing,
  cv as useResponsiveValue,
  Pv as useSpacing,
  Pg as useSpc,
  Av as useTokens,
  Fv as useTypography
};
//# sourceMappingURL=index.esm.js.map
