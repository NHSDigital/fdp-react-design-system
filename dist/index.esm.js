import * as Z from "react";
import Xe, { useState as Be, useEffect as Ke, useCallback as ge, useRef as Ue, createElement as Di, useMemo as $e, useContext as Ti, createContext as Li, forwardRef as Hn, useImperativeHandle as $i, useReducer as Ai, memo as rd, useId as Nr } from "react";
import { createPortal as ad } from "react-dom";
function od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr = { exports: {} }, zn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function sd() {
  if (ps) return zn;
  ps = 1;
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
  return zn.Fragment = t, zn.jsx = n, zn.jsxs = n, zn;
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
var ms;
function id() {
  return ms || (ms = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === v ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case g:
          return "Fragment";
        case I:
          return "Profiler";
        case m:
          return "StrictMode";
        case b:
          return "Suspense";
        case C:
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
          case L:
            return (B.displayName || "Context") + ".Provider";
          case D:
            return (B._context.displayName || "Context") + ".Consumer";
          case N:
            var K = B.render;
            return B = B.displayName, B || (B = K.displayName || K.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case T:
            return K = B.displayName || null, K !== null ? K : e(B.type) || "Memo";
          case _:
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
    function n(B) {
      try {
        t(B);
        var K = !1;
      } catch {
        K = !0;
      }
      if (K) {
        K = console;
        var O = K.error, H = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return O.call(
          K,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(B);
      }
    }
    function a(B) {
      if (B === g) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === _)
        return "<...>";
      try {
        var K = e(B);
        return K ? "<" + K + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var B = $.A;
      return B === null ? null : B.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (M.call(B, "key")) {
        var K = Object.getOwnPropertyDescriptor(B, "key").get;
        if (K && K.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, K) {
      function O() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          K
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: O,
        configurable: !0
      });
    }
    function c() {
      var B = e(this.type);
      return w[B] || (w[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function d(B, K, O, H, J, R, re, q) {
      return O = R.ref, B = {
        $$typeof: p,
        type: B,
        key: K,
        props: R,
        _owner: J
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(B, "ref", {
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
        value: re
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function u(B, K, O, H, J, R, re, q) {
      var ee = K.children;
      if (ee !== void 0)
        if (H)
          if (F(ee)) {
            for (H = 0; H < ee.length; H++)
              f(ee[H]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ee);
      if (M.call(K, "key")) {
        ee = e(B);
        var Q = Object.keys(K).filter(function(de) {
          return de !== "key";
        });
        H = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", U[ee + H] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          ee,
          Q,
          ee
        ), U[ee + H] = !0);
      }
      if (ee = null, O !== void 0 && (n(O), ee = "" + O), i(K) && (n(K.key), ee = "" + K.key), "key" in K) {
        O = {};
        for (var ae in K)
          ae !== "key" && (O[ae] = K[ae]);
      } else O = K;
      return ee && l(
        O,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), d(
        B,
        ee,
        R,
        J,
        o(),
        O,
        re,
        q
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === p && B._store && (B._store.validated = 1);
    }
    var h = Xe, p = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), L = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), $ = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, F = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var k, w = {}, E = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), te = j(a(s)), U = {};
    On.Fragment = g, On.jsx = function(B, K, O, H, J) {
      var R = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        B,
        K,
        O,
        !1,
        H,
        J,
        R ? Error("react-stack-top-frame") : E,
        R ? j(a(B)) : te
      );
    }, On.jsxs = function(B, K, O, H, J) {
      var R = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        B,
        K,
        O,
        !0,
        H,
        J,
        R ? Error("react-stack-top-frame") : E,
        R ? j(a(B)) : te
      );
    };
  })()), On;
}
var gs;
function ld() {
  return gs || (gs = 1, process.env.NODE_ENV === "production" ? mr.exports = sd() : mr.exports = id()), mr.exports;
}
var r = ld(), Aa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var xs;
function cd() {
  return xs || (xs = 1, (function(e) {
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
  })(Aa)), Aa.exports;
}
var dd = cd();
const ye = /* @__PURE__ */ od(dd), My = ({
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
}, Ei = ({
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
      className: ye(
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
            className: ye(
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
var Pi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Pi || {}), Fi = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Fi || {});
function ud(e) {
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
const { forwardRef: fd, useCallback: nn, useState: Ea } = Z;
function hd(e, t) {
  const {
    children: n,
    variant: a = Pi.Primary,
    size: o = Fi.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Ea(!1), [f, h] = Ea(!1), [p, x] = Ea(!1), g = ud({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), m = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", I = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...m && { "data-disabled": "true" }
  }, D = nn(
    () => !m && u(!0),
    [m]
  ), L = nn(() => u(!1), []), N = nn(
    () => !m && h(!0),
    [m]
  ), b = nn(() => {
    h(!1), u(!1);
  }, []), C = nn(() => x(!0), []), T = nn(() => x(!1), []), _ = nn(
    (ee) => {
      ee.key === " " && ("href" in c || ee.currentTarget.getAttribute("role") === "button") && (ee.preventDefault(), ee.currentTarget.click());
    },
    [c]
  ), y = nn(
    (ee) => {
      if (l) {
        const Q = ee.currentTarget;
        if (Q.getAttribute("data-processing") === "true") {
          ee.preventDefault();
          return;
        }
        Q.setAttribute("data-processing", "true"), setTimeout(() => {
          Q.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in c && c.href) {
    const {
      id: ee,
      style: Q,
      title: ae,
      ["aria-label"]: de,
      ["aria-describedby"]: V,
      ["aria-labelledby"]: ie,
      tabIndex: se,
      ...fe
    } = c, ce = c;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: ce.href,
        target: ce.target,
        rel: ce.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...I,
        ...l && { "data-prevent-double-click": "true" },
        ...fe,
        onKeyDown: (pe) => {
          ce.onKeyDown?.(pe), _(pe);
        },
        onClick: (pe) => {
          ce.onClick?.(pe), y(pe);
        },
        onMouseDown: (pe) => {
          ce.onMouseDown?.(pe), D();
        },
        onMouseUp: (pe) => {
          ce.onMouseUp?.(pe), L();
        },
        onMouseEnter: (pe) => {
          ce.onMouseEnter?.(pe), N();
        },
        onMouseLeave: (pe) => {
          ce.onMouseLeave?.(pe), b();
        },
        onFocus: (pe) => {
          ce.onFocus?.(pe), C();
        },
        onBlur: (pe) => {
          ce.onBlur?.(pe), T();
        },
        "aria-disabled": ce["aria-disabled"],
        ...ce["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ee,
        style: Q,
        title: ae,
        "aria-label": de,
        "aria-describedby": V,
        "aria-labelledby": ie,
        tabIndex: se,
        children: n
      }
    );
  }
  const {
    id: v,
    style: $,
    title: M,
    ["aria-label"]: F,
    ["aria-describedby"]: j,
    ["aria-labelledby"]: k,
    tabIndex: w,
    name: E,
    value: te,
    form: U,
    formAction: B,
    formEncType: K,
    formMethod: O,
    formNoValidate: H,
    formTarget: J,
    autoFocus: R,
    ...re
  } = c, q = c;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: q.type || "button",
      disabled: q.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...I,
      ...l && { "data-prevent-double-click": "true" },
      ...q.disabled && { "aria-disabled": "true" },
      ...re,
      onKeyDown: (ee) => {
        q.onKeyDown?.(ee), _(ee);
      },
      onClick: (ee) => {
        q.onClick?.(ee), y(ee);
      },
      onMouseDown: (ee) => {
        q.onMouseDown?.(ee), D();
      },
      onMouseUp: (ee) => {
        q.onMouseUp?.(ee), L();
      },
      onMouseEnter: (ee) => {
        q.onMouseEnter?.(ee), N();
      },
      onMouseLeave: (ee) => {
        q.onMouseLeave?.(ee), b();
      },
      onFocus: (ee) => {
        q.onFocus?.(ee), C();
      },
      onBlur: (ee) => {
        q.onBlur?.(ee), T();
      },
      id: v,
      style: $,
      title: M,
      "aria-label": F,
      "aria-describedby": j,
      "aria-labelledby": k,
      tabIndex: w,
      name: E,
      value: te,
      form: U,
      formAction: B,
      formEncType: K,
      formMethod: O,
      formNoValidate: H,
      formTarget: J,
      autoFocus: R,
      children: n
    }
  );
}
const bt = fd(hd);
bt.displayName = "Button";
const Jn = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ye(
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
function pd(e) {
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
const et = ({
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
  const u = pd({ color: a, noBorder: o, closable: s, disabled: l, className: c }), f = (h) => {
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
}, md = ({
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
  const [g, m] = Be(a), I = n !== void 0, D = I ? n : g;
  Ke(() => {
    I || m(a);
  }, [a, I]);
  const L = (_) => {
    const y = _.target.checked;
    I || m(y), u?.(y, _);
  }, N = i ? `${e}-hint` : void 0, b = l ? `${e}-error` : void 0, C = [N, b].filter(Boolean).join(" ") || void 0, T = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: T, ...x, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: D,
        disabled: o,
        onChange: L,
        onBlur: f,
        onFocus: h,
        "aria-describedby": C,
        ...p
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ r.jsx("div", { id: N, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: b, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
md.displayName = "Checkbox";
function Ri(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Oo = ({
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
  maxLength: g,
  minLength: m,
  pattern: I,
  step: D,
  min: L,
  max: N,
  showValueLabels: b = !1,
  showCurrentValue: C = !1,
  valueLabels: T,
  onChange: _,
  onBlur: y,
  onFocus: v,
  onKeyDown: $,
  ...M
}) => {
  const [F, j] = Be(a || o || (n === "range" ? L || "0" : ""));
  Ke(() => {
    a !== void 0 && j(a);
  }, [a]);
  const k = (J) => {
    const R = J.target;
    j(R.value), ("type" in J && J.nativeEvent || J.type === "keydown") && _?.(J);
  }, { classes: w, isRange: E } = Ri({ type: n, hasError: d, width: h, className: f }), te = a !== void 0, U = {
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
    maxLength: g,
    minLength: m,
    pattern: I,
    step: D,
    min: L,
    max: N,
    onChange: k,
    onBlur: y,
    onFocus: v,
    onKeyDown: (J) => {
      if (E && /[0-9]/.test(J.key)) {
        const R = (F?.toString() || "") + J.key;
        J.target.value = R, k(J);
      }
      $?.(J);
    },
    ...M
  }, B = !te && o !== void 0 ? { defaultValue: o } : {}, K = te ? { value: a } : {}, O = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: w,
      ...K,
      ...B,
      "data-current-value": F,
      ...U
    }
  ), H = E ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    b && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: T?.min || L || "0" }),
      O(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: T?.max || N || "100" })
    ] }),
    !b && O(),
    C && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      T?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: F })
    ] }) })
  ] }) : null;
  return E ? H : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: w,
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
      maxLength: g,
      minLength: m,
      pattern: I,
      step: D,
      min: L,
      max: N,
      onChange: _,
      onBlur: y,
      onFocus: v,
      onKeyDown: $,
      ...M
    }
  );
};
function gd(e) {
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
const Uo = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = gd({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function xd(e) {
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
const Wo = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = xd({
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
function bd(e) {
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
const yd = ({
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
  const [x, g] = Be(
    e.filter((_) => _.checked).map((_) => _.value)
  ), m = n || t, I = i ? `${m}-hint` : void 0, D = l ? `${m}-error` : void 0, L = [I, D].filter(Boolean).join(" ") || void 0, N = (_, y) => {
    let v;
    y ? v = [...x, _] : v = x.filter(($) => $ !== _), g(v), u?.(v);
  }, b = () => e.map((_, y) => {
    const v = `${m}-${y + 1}`, $ = `${v}-conditional`, M = x.includes(_.value), F = _.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: t,
          type: "checkbox",
          value: _.value,
          checked: M,
          disabled: F,
          onChange: (j) => N(_.value, j.target.checked),
          "aria-describedby": _.hint ? `${v}-hint` : L,
          ..._.conditional && {
            "aria-controls": $,
            "aria-expanded": M ? "true" : "false"
          },
          ..._.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: v, children: _.text }),
      _.hint && /* @__PURE__ */ r.jsx("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ye("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !M
          }),
          id: $,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ r.jsx(Uo, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ r.jsx(Oo, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }), { classes: C, formGroupClasses: T } = bd({ small: d, className: c, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: T, ...h, ...p, children: /* @__PURE__ */ r.jsxs(
    Wo,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: L,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: I, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: D, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: C, children: b() })
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
  wrap: g = "soft",
  resize: m = "vertical",
  autoComplete: I,
  spellCheck: D,
  onChange: L,
  onBlur: N,
  onFocus: b,
  onKeyDown: C,
  ...T
}) => {
  const { classes: _, describedBy: y } = vd({ hasError: c, resize: m, className: u, describedBy: d });
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
      wrap: g,
      autoComplete: I,
      spellCheck: D,
      onChange: L,
      onBlur: N,
      onFocus: b,
      onKeyDown: C,
      ...T
    }
  );
};
function Sd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Bi = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = Sd({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, Iy = ({
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
  const p = s ?? i ?? "", [x, g] = Be(p), [m, I] = Be(0), [D, L] = Be(!1), [N, b] = Be(!1), C = ge((M) => n ? M.trim() === "" ? 0 : M.trim().split(/\s+/).length : M.length, [n]);
  Ke(() => {
    const M = C(x), F = t || n || 0, j = F - M, k = Math.floor(F * (a / 100));
    I(j), L(M > F), b(M >= k || M > F), u && u(M, j);
  }, [x, t, n, a, C, u]);
  const T = (M) => {
    const F = M.target.value;
    g(F), f && f(M);
  }, _ = () => {
    const M = t || n || 0, F = n ? "word" : "character", j = n ? "words" : "characters";
    if (!N)
      return `You can enter up to ${M} ${M === 1 ? F : j}`;
    if (D) {
      const k = Math.abs(m);
      return `You have ${k} ${k === 1 ? F : j} too many`;
    } else
      return `You have ${m} ${m === 1 ? F : j} remaining`;
  }, y = ye(
    "nhsuk-character-count",
    c
  ), v = ye(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !N,
      "nhsuk-error-message": D
    },
    d?.classes
  ), $ = ye(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": D
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
          wd,
          {
            id: e,
            name: o,
            value: s !== void 0 ? x : void 0,
            defaultValue: s === void 0 ? i ?? x : void 0,
            rows: l,
            className: $,
            onChange: T,
            "aria-describedby": `${e}-info`,
            "aria-invalid": D || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Bi,
          {
            id: `${e}-info`,
            className: v,
            role: "status",
            "aria-live": "polite",
            children: _()
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
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = ye(
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
}, Cd = ({
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
  onChange: g,
  onBlur: m,
  onFocus: I,
  ...D
}) => {
  const { classes: L } = _d({ hasError: l, className: d }), N = () => p ? p.map((C, T) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: C.value,
      disabled: C.disabled,
      "data-initial-selected": C.selected || void 0,
      children: C.text
    },
    `${C.value}-${T}`
  )) : null, b = o === void 0 && a === void 0 && p ? p.find((C) => C.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: L,
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
      onChange: g,
      onBlur: m,
      onFocus: I,
      ...D,
      children: x || N()
    }
  );
}, jr = Cd;
jr.Option = kd;
function Nd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Hi(e, {
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
    hasError: g = !1,
    describedBy: m,
    className: I,
    size: D = "normal",
    inline: L = !1,
    options: N,
    ...b
  } = p, { classes: C, describedBy: T } = Nd({ hasError: g, size: D, inline: L, className: I, describedBy: m });
  return /* @__PURE__ */ r.jsx(Wo, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: C,
      ...b,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: N.map((_, y) => {
        const v = `${x}-${y}`, $ = _.conditional ? `${v}-conditional` : void 0, M = n === _.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: v,
              name: x,
              type: "radio",
              value: _.value,
              disabled: _.disabled,
              ...t === "client" ? {
                checked: M,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (F) => {
                  F && c && (c.current[y] = F);
                }
              } : {
                defaultChecked: M,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": T
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: v, children: _.text }),
          _.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: _.hint }),
          _.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ye("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !M
              }),
              id: $,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                _.conditional.label && /* @__PURE__ */ r.jsx(
                  Uo,
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
const Dy = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Be(e || t || ""), c = Ue([]), d = Ue(i), u = (p) => {
    const x = p.target.value;
    x !== d.current && (d.current = x, l(x), n?.(p));
  }, f = (p) => {
    o?.(p);
  }, h = ge((p) => {
    const { key: x } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(x)) return;
    p.preventDefault();
    const g = c.current.filter((L) => L && !L.disabled), m = g.indexOf(p.currentTarget);
    if (m === -1) return;
    let I = m;
    ["ArrowDown", "ArrowRight"].includes(x) ? I = (m + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(x) && (I = (m - 1 + g.length) % g.length);
    const D = g[I];
    D && (D.focus(), D.checked || D.click());
  }, []);
  return Hi(
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
      InputComponent: Oo
    }
  );
};
function jd(e) {
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
    autoComplete: g,
    maxLength: m,
    minLength: I,
    pattern: D,
    step: L,
    min: N,
    max: b,
    showValueLabels: C = !1,
    showCurrentValue: T = !1,
    valueLabels: _,
    // Strip interactive handlers in server variant
    onChange: y,
    onBlur: v,
    onFocus: $,
    onKeyDown: M,
    ...F
  } = e, { classes: j, isRange: k } = Ri({
    type: a,
    hasError: u,
    width: p,
    className: h
  }), w = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: c,
    required: d,
    "aria-describedby": f,
    inputMode: x,
    autoComplete: g,
    maxLength: m,
    minLength: I,
    pattern: D,
    step: L,
    min: N,
    max: b,
    ...F
  };
  if (k) {
    const E = o ?? s ?? (typeof N < "u" ? String(N) : "0"), te = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: j,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": E,
        ...w
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      C ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: _?.min || N || "0" }),
        te,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: _?.max || b || "100" })
      ] }) : te,
      T && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        _?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: E })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: j,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...w
    }
  );
}
const Ty = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Hi(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: jd
    }
  );
};
var xn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(xn || {}), Md = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Md || {}), Id = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Id || {}), Dd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Dd || {});
const zi = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = ye(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, on = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: o,
  ...s
}) => {
  const i = ye(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    a ? `nhsuk-grid-row-align-${a}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: i, style: n, ...s, children: e });
}, Xn = ({
  children: e,
  width: t = xn.Full,
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
  const f = ye(
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
}, Qa = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...o
}) => {
  const s = Xe.Children.toArray(e), i = s[0], l = Xe.isValidElement(i) && (i.type === on || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof a == "number" ? `${a}px` : a;
  let d = e;
  if (l)
    d = s.map((u, f) => {
      if (!Xe.isValidElement(u)) return u;
      const h = u, p = h.props || {}, x = typeof p.className == "string" ? p.className : "";
      if (!(h.type === on || x.includes("nhsuk-grid-row"))) return u;
      const m = p.rowGap, I = m !== void 0 ? typeof m == "number" ? `${m}px` : m : c, D = f === 0 ? void 0 : I;
      if (!D) return u;
      const L = { ...p.style || {}, marginTop: D };
      return Xe.cloneElement(h, { style: L });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ r.jsx(on, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(zi, { className: t, style: n, ...o, children: d });
}, Td = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = ye(
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
}, Ld = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ye("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, $d = Td;
$d.Item = Ld;
const Ly = ({
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
], Oi = ({
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
  const t = e.level ?? Ad(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Xt = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const c = Ed({ level: e, size: s, className: t, marginBottom: i }), d = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return Di(c.tag, { className: c.classes, style: c.style, ...l }, d);
};
function Pd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const bs = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = Pd({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Fy = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const c = Ue(null);
  Ke(() => {
    c.current && c.current.focus();
  }, []);
  const d = ye(
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
}, Ry = ({
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
  const [u, f] = Be(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, p] = Be({}), x = (k) => k % 4 === 0 && k % 100 !== 0 || k % 400 === 0, g = (k, w) => {
    const E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return k === 2 && x(w) ? 29 : E[k - 1];
  }, m = (k, w, E) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Day must be a number";
    const te = parseInt(k, 10);
    if (te < 1 || te > 31) return "Day must be between 1 and 31";
    if (w && E) {
      const U = parseInt(w, 10), B = parseInt(E, 10);
      if (!isNaN(U) && !isNaN(B) && U >= 1 && U <= 12) {
        const K = g(U, B);
        if (te > K)
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
          ][U - 1]} ${B} only has ${K} days`;
      }
    }
  }, I = (k) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Month must be a number";
    const w = parseInt(k, 10);
    if (w < 1 || w > 12) return "Month must be between 1 and 12";
  }, D = (k) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Year must be a number";
    const w = parseInt(k, 10), E = (/* @__PURE__ */ new Date()).getFullYear();
    if (w < 1900 || w > E + 10)
      return `Year must be between 1900 and ${E + 10}`;
  }, L = (k, w, E) => {
    if (!k || !w || !E) return;
    const te = parseInt(k, 10), U = parseInt(w, 10), B = parseInt(E, 10);
    if (isNaN(te) || isNaN(U) || isNaN(B) || U < 1 || U > 12 || B < 1900) return;
    const K = g(U, B);
    te < 1 || te > K;
  }, N = ge(
    (k, w) => {
      const E = {
        ...u,
        [k]: w
      };
      f(E), c && c(E);
    },
    [u, c]
  ), b = ge(
    (k) => {
      const w = u[k];
      let E;
      if (k === "day")
        E = m(
          w,
          u.month,
          u.year
        );
      else if (k === "month") {
        if (E = I(w), !E && u.day) {
          const te = m(
            u.day,
            w,
            u.year
          );
          p((U) => ({
            ...U,
            day: te
          }));
        }
      } else if (k === "year" && (E = D(w), !E && u.day && u.month)) {
        const te = m(
          u.day,
          u.month,
          w
        );
        p((U) => ({
          ...U,
          day: te
        }));
      }
      if (p((te) => ({
        ...te,
        [k]: E
      })), u.day && u.month && u.year) {
        const te = L(
          k === "day" ? w : u.day,
          k === "month" ? w : u.month,
          k === "year" ? w : u.year
        );
        te && p((U) => ({
          ...U,
          day: te
        }));
      }
    },
    [u, m, I, D, L]
  ), C = $e(
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
  ), T = n || C;
  let _ = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", v = l ? `${e}-error` : "";
  y && (_ = _ ? `${_} ${y}` : y), v && (_ = _ ? `${_} ${v}` : v);
  const $ = Object.values(h).some((k) => k), M = ye("nhsuk-form-group", {
    "nhsuk-form-group--error": l || $
  }), F = ye("nhsuk-date-input", t), j = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(Bi, { id: y, className: i.classes, children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text }),
    l && /* @__PURE__ */ r.jsx(bs, { id: v, className: l.classes, children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text }),
    Object.entries(h).map(
      ([k, w]) => w ? /* @__PURE__ */ r.jsxs(
        bs,
        {
          id: `${e}-${k}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            w
          ]
        },
        `${k}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: F,
        id: e,
        "data-testid": "date-input",
        ...d,
        children: T.map((k) => {
          const w = k.id || `${e}-${k.name}`, E = a ? `${a}[${k.name}]` : k.name, te = k.label || k.name.charAt(0).toUpperCase() + k.name.slice(1), U = h[k.name], B = u[k.name] || "";
          let K = _;
          if (U) {
            const O = `${e}-${k.name}-error`;
            K = K ? `${K} ${O}` : O;
          }
          return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
            /* @__PURE__ */ r.jsx(Uo, { htmlFor: w, className: "nhsuk-date-input__label", children: te }),
            /* @__PURE__ */ r.jsx(
              Oo,
              {
                id: w,
                name: E,
                value: B,
                className: ye("nhsuk-date-input__input", k.classes, {
                  "nhsuk-input--error": U
                }),
                inputMode: k.inputmode,
                autoComplete: k.autocomplete,
                pattern: k.pattern,
                "aria-describedby": K || void 0,
                hasError: !!U,
                onChange: (O) => N(k.name, O.target.value),
                onBlur: () => b(k.name)
              }
            )
          ] }, k.name);
        })
      }
    )
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: M, children: s ? /* @__PURE__ */ r.jsx(
    Wo,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: _ || void 0,
      children: j()
    }
  ) : j() });
}, Ui = {
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
}, Wi = Li(Ui), Fd = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Ui, ...t };
  return /* @__PURE__ */ r.jsx(Wi.Provider, { value: n, children: e });
}, By = () => {
  const e = Ti(Wi);
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
const Hy = ({ children: e, theme: t }) => (Ke(() => {
  Bd();
}, []), /* @__PURE__ */ r.jsx(Fd, { theme: t, children: e })), Hd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", zd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Od = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Ud = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Wd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", Gd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Yd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var Gi = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(Gi || {}), Yi = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Yi || {});
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
    serviceName: g,
    organisation: m,
    search: I,
    account: D,
    navigation: L,
    containerClasses: N,
    variant: b = "default",
    attributes: C = {},
    maxVisibleItems: T,
    // deprecated (ignored)
    responsiveNavigation: _ = !0,
    logoVariant: y = Yi.Full,
    ...v
  } = e, $ = {
    ...x,
    text: x?.text ?? g
  };
  "maxVisibleItems" in v && delete v.maxVisibleItems;
  const M = $.href && !p.href || $.href && $.href === p.href, F = M ? $.href : p.href, j = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": b === "organisation" || m,
      "nhsuk-header--white": b === "white"
    },
    h
  ), k = ye(
    "nhsuk-header__container",
    N
  ), w = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": L?.white,
      "nhsuk-header__navigation--justified": L?.justified
    },
    L?.className
  ), te = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), U = () => /* @__PURE__ */ r.jsxs(
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
  ), B = () => {
    if (p.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: p.src,
          width: "280",
          alt: p.ariaLabel || (te === "fdp" ? "FDP" : "NHS")
        }
      );
    if (te === "fdp") {
      const R = Zd(Gi.FDP, y);
      if (R?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: R.src,
            "data-logo-variant": y,
            width: "280",
            alt: R.ariaLabel || "FDP"
          }
        );
    }
    return U();
  }, K = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, O = (R, re) => R ? re ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: re, children: R }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: R }) : null, H = (R) => R.active || R.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: R.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: R.html } }) : R.text }) : R.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: R.html } }) : R.text, J = () => /* @__PURE__ */ r.jsx(
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
      className: j,
      role: "banner",
      "data-module": "nhsuk-header",
      ...C,
      ...v,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: k, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            F ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: F, children: [
              B(),
              K(),
              M && O($.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              B(),
              K(),
              M && O($.text)
            ] }),
            $.text && !M && O($.text, $.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            Ei,
            {
              ...D,
              variant: b === "white" ? "white" : "default"
            }
          )
        ] }),
        L && L.items && L.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: w,
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
                  N
                ),
                ref: c,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      (L?.items || []).map((R, re) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ye(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": R.active || R.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && re >= (s ?? 0)
                            },
                            R.className
                          ),
                          ...R.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: R.href,
                              ...R.active || R.current ? { "aria-current": R.current ? "page" : "true" } : {},
                              children: H(R)
                            }
                          )
                        },
                        re
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
        n && L && L.items && L.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: L.items.slice(s ?? 0).map((R, re) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ye("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": R.active || R.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: R.href,
                    ...R.active || R.current ? { "aria-current": R.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: H(R)
                  }
                )
              },
              `overflow-${(s ?? 0) + re}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const eo = Li(void 0);
function zy({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, o] = Be(e);
  Ke(() => {
    o(e);
  }, [e]), Ke(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const s = $e(() => ({ brand: a, setBrand: o }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(eo.Provider, { value: s, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(eo.Provider, { value: s, children: n });
}
function Jd() {
  const e = Ti(eo);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Xd = ({
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
  inputAttributes: g = {},
  buttonAttributes: m = {},
  preventDefaultSubmit: I = !1,
  debounceMs: D = 300,
  minQueryLength: L = 1
}) => {
  const [N, b] = Be(""), [C, T] = Be(!1), _ = Ue(void 0), y = Ue(null), v = Ue(null), $ = e === "controlled" && o !== void 0, M = $ ? o : N, F = ge(
    (H) => {
      _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        u.onChange && H.length >= L && u.onChange(H);
      }, D);
    },
    [u.onChange, D, L]
  ), j = ge(
    (H) => {
      const J = H.target.value;
      $ || b(J), e !== "form" && F(J);
    },
    [$, e, F]
  ), k = ge(
    (H) => {
      const J = M.trim(), R = {
        query: J,
        timestamp: Date.now(),
        formData: new FormData(H.currentTarget)
      };
      e === "controlled" || e === "hybrid" && I ? (H.preventDefault(), u.onSearch && J.length >= L && u.onSearch(R)) : e === "hybrid" && u.onSearch && J.length >= L && u.onSearch(R);
    },
    [
      e,
      M,
      u.onSearch,
      I,
      L
    ]
  ), w = ge(() => {
    T(!0), u.onFocus?.();
  }, [u.onFocus]), E = ge(() => {
    T(!1), u.onBlur?.();
  }, [u.onBlur]), te = ge(() => {
    $ || b(""), u.onClear?.(), v.current?.focus();
  }, [$, u.onClear]);
  Ke(() => () => {
    _.current && clearTimeout(_.current);
  }, []);
  const U = () => /* @__PURE__ */ r.jsx(
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
  ), K = () => !M || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: te,
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
  ), O = () => !h || !p.length || !C ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((H) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: H.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: H.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: H.title }),
            H.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: H.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: H.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: H.title }),
            H.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: H.description })
          ]
        }
      )
    },
    H.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ye("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": C,
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
            onSubmit: k,
            ...x,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: v,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: M,
                    onChange: j,
                    onFocus: w,
                    onBlur: E,
                    disabled: d || f,
                    ...h && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...g
                  }
                ),
                K()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && M.length < L,
                  ...m,
                  children: [
                    f ? B() : U(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        O()
      ]
    }
  );
}, Vi = ({
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
  const [f, h] = Be(!1), [p, x] = Be(!1), [g, m] = Be(i?.items?.length || 0), [I, D] = Be(!1), [L, N] = Be(!1), b = Ue(null), C = Ue(null), T = Ue(!1);
  Ke(() => {
    typeof window > "u" || N(!0);
  }, []), Ke(() => {
    if (typeof document > "u") return;
    const M = (F) => {
      F.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [f]);
  const _ = Ue(null), y = ge(() => {
    if (!L || !i?.items || i.items.length === 0 || T.current) return;
    const M = b.current, F = C.current;
    if (!M || !F) return;
    T.current = !0, M.classList.add("nhsuk-header__navigation-container--measuring");
    const j = M.clientWidth, k = Array.from(F.children);
    if (!k.length) {
      M.classList.remove("nhsuk-header__navigation-container--measuring"), T.current = !1;
      return;
    }
    if (_.current == null) {
      const R = document.createElement("button");
      R.type = "button", R.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", R.style.position = "absolute", R.style.visibility = "hidden", R.style.pointerEvents = "none", R.innerHTML = "<span>More</span>", M.appendChild(R), _.current = R.getBoundingClientRect().width || 104, M.removeChild(R);
    }
    const w = _.current + 16;
    let E = 0, te = 0;
    const U = window.getComputedStyle(M), B = parseFloat(U.paddingLeft) || 0, K = parseFloat(U.paddingRight) || 0;
    let O = B + K;
    for (const R of k) {
      const re = R.getBoundingClientRect().width;
      if (E + re + w + O > j) break;
      E += re, te += 1;
    }
    const H = te < i.items.length, J = H ? te : i.items.length;
    x((R) => R === H ? R : H), m((R) => R === J ? R : J), M.classList.remove("nhsuk-header__navigation-container--measuring"), T.current = !1;
  }, [L, i?.items]);
  Ke(() => {
    if (!L) return;
    const M = b.current;
    if (!M) return;
    let F = null;
    const j = () => {
      F == null && (F = window.requestAnimationFrame(() => {
        F = null, y();
      }));
    };
    y();
    const k = new ResizeObserver(() => j());
    return k.observe(M), C.current && k.observe(C.current), () => {
      F != null && window.cancelAnimationFrame(F), k.disconnect();
    };
  }, [L, y]), Ke(() => {
    L && y();
  }, [i?.items?.length, L, y]);
  const v = (M) => {
    M && (M.preventDefault(), M.stopPropagation());
    const F = !f;
    h(F), D(F);
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
      isClient: L,
      menuOpen: f,
      showMoreButton: p,
      visibleItems: g,
      dropdownVisible: I,
      toggleMenu: v,
      navContainerRef: b,
      navListRef: C,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(Xd, { ...o }) : null,
      brand: $?.brand
    }
  );
};
function Kd(e, { variant: t, isClient: n }) {
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
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const m = {
    ...s,
    text: s?.text ?? i
  }, I = m.href && !o.href || m.href && m.href === o.href, D = I ? m.href : o.href, L = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), N = ye("nhsuk-header__container", u), b = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), C = () => /* @__PURE__ */ r.jsxs(
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
  ), T = () => o.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: o.src,
      width: "280",
      alt: o.ariaLabel || "NHS"
    }
  ) : C(), _ = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, y = (j, k) => j ? k ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: k, children: j }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: j }) : null, v = (j) => j.active || j.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: j.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text }) : j.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text, $ = d?.items && !x, M = $ ? [] : d?.items, F = $ ? d.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: L, role: "banner", "data-module": "nhsuk-header", ...h, ...g, children: [
    /* @__PURE__ */ r.jsxs("div", { className: N, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        D ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: D, children: [
          T(),
          _(),
          I && y(m.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          T(),
          _(),
          I && y(m.text)
        ] }),
        m.text && !I && y(m.text, m.href)
      ] }),
      /* @__PURE__ */ r.jsx(Ei, { ...c, variant: f === "white" ? "white" : "default" })
    ] }),
    d && d.items && d.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: b, "aria-label": d.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
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
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (M || []).map((j, k) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ye("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": j.active || j.current
            }, j.className),
            ...j.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: j.href,
                ...j.active || j.current ? { "aria-current": j.current ? "page" : "true" } : {},
                children: v(j)
              }
            )
          },
          k
        )) })
      }
    ) }),
    $ && F.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: F.map((j, k) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: ye("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": j.active || j.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: j.href,
            ...j.active || j.current ? { "aria-current": j.current ? "page" : "true" } : {},
            children: v(j)
          }
        )
      },
      `overflow-server-${k}`
    )) }) })
  ] });
}
const Oy = (e) => Kd(e, {
  variant: "server",
  isClient: !1
}), Qd = ({
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
Qd.displayName = "Hero";
const Zi = ({
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
      className: ye("nhsuk-footer__list-item", {
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
        className: ye("nhsuk-width-container", i),
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
function Sr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function eu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Go(e) {
  let t, n, a;
  e.length !== 2 ? (t = Sr, n = (l, c) => Sr(e(l), c), a = (l, c) => e(l) - c) : (t = e === Sr || e === eu ? e : tu, n = e, a = e);
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
function tu() {
  return 0;
}
function nu(e) {
  return e === null ? NaN : +e;
}
const ru = Go(Sr), au = ru.right;
Go(nu).center;
function qi(e, t) {
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
class ys extends Map {
  constructor(t, n = iu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(vs(this, t));
  }
  has(t) {
    return super.has(vs(this, t));
  }
  set(t, n) {
    return super.set(ou(this, t), n);
  }
  delete(t) {
    return super.delete(su(this, t));
  }
}
function vs({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function ou({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function su({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function iu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const lu = Math.sqrt(50), cu = Math.sqrt(10), du = Math.sqrt(2);
function Mr(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= lu ? 10 : s >= cu ? 5 : s >= du ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= n && n < 2 ? Mr(e, t, n * 2) : [l, c, d];
}
function uu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? Mr(t, e, n) : Mr(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, c = new Array(l);
  if (a)
    if (i < 0) for (let d = 0; d < l; ++d) c[d] = (s - d) / -i;
    else for (let d = 0; d < l; ++d) c[d] = (s - d) * i;
  else if (i < 0) for (let d = 0; d < l; ++d) c[d] = (o + d) / -i;
  else for (let d = 0; d < l; ++d) c[d] = (o + d) * i;
  return c;
}
function to(e, t, n) {
  return t = +t, e = +e, n = +n, Mr(e, t, n)[2];
}
function no(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? to(t, e, n) : to(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function fu(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function va(e, t) {
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
const ws = Symbol("implicit");
function Ji() {
  var e = new ys(), t = [], n = [], a = ws;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== ws) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new ys();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Ji(t, n).unknown(a);
  }, va.apply(o, arguments), o;
}
function Xi() {
  var e = Ji().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = o < a, x = p ? o : a, g = p ? a : o;
    s = (g - x) / Math.max(1, h - c + d * 2), l && (s = Math.floor(s)), x += (g - x - s * (h - c)) * u, i = s * (1 - c), l && (x = Math.round(x), i = Math.round(i));
    var m = fu(h).map(function(I) {
      return x + s * I;
    });
    return n(p ? m.reverse() : m);
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
    return Xi(t(), [a, o]).round(l).paddingInner(c).paddingOuter(d).align(u);
  }, va.apply(f(), arguments);
}
function Yo(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ki(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function ir() {
}
var Kn = 0.7, Ir = 1 / Kn, Dn = "\\s*([+-]?\\d+)\\s*", Qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hu = /^#([0-9a-f]{3,8})$/, pu = new RegExp(`^rgb\\(${Dn},${Dn},${Dn}\\)$`), mu = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), gu = new RegExp(`^rgba\\(${Dn},${Dn},${Dn},${Qn}\\)$`), xu = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${Qn}\\)$`), bu = new RegExp(`^hsl\\(${Qn},${Pt},${Pt}\\)$`), yu = new RegExp(`^hsla\\(${Qn},${Pt},${Pt},${Qn}\\)$`), Ss = {
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
Yo(ir, er, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _s,
  // Deprecated! Use color.formatHex.
  formatHex: _s,
  formatHex8: vu,
  formatHsl: wu,
  formatRgb: ks,
  toString: ks
});
function _s() {
  return this.rgb().formatHex();
}
function vu() {
  return this.rgb().formatHex8();
}
function wu() {
  return Qi(this).formatHsl();
}
function ks() {
  return this.rgb().formatRgb();
}
function er(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = hu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Cs(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = pu.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = mu.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = gu.exec(e)) ? gr(t[1], t[2], t[3], t[4]) : (t = xu.exec(e)) ? gr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = bu.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, 1) : (t = yu.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, t[4]) : Ss.hasOwnProperty(e) ? Cs(Ss[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Cs(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new kt(e, t, n, a);
}
function Su(e) {
  return e instanceof ir || (e = er(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function ro(e, t, n, a) {
  return arguments.length === 1 ? Su(e) : new kt(e, t, n, a ?? 1);
}
function kt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Yo(kt, ro, Ki(ir, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Kn : Math.pow(Kn, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(hn(this.r), hn(this.g), hn(this.b), Dr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ns,
  // Deprecated! Use color.formatHex.
  formatHex: Ns,
  formatHex8: _u,
  formatRgb: js,
  toString: js
}));
function Ns() {
  return `#${fn(this.r)}${fn(this.g)}${fn(this.b)}`;
}
function _u() {
  return `#${fn(this.r)}${fn(this.g)}${fn(this.b)}${fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function js() {
  const e = Dr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${hn(this.r)}, ${hn(this.g)}, ${hn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Dr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function hn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function fn(e) {
  return e = hn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ms(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, n, a);
}
function Qi(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ir || (e = er(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Dt(i, l, c, e.opacity);
}
function ku(e, t, n, a) {
  return arguments.length === 1 ? Qi(e) : new Dt(e, t, n, a ?? 1);
}
function Dt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Yo(Dt, ku, Ki(ir, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Kn : Math.pow(Kn, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new kt(
      Pa(e >= 240 ? e - 240 : e + 120, o, a),
      Pa(e, o, a),
      Pa(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Dt(Is(this.h), xr(this.s), xr(this.l), Dr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Dr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Is(this.h)}, ${xr(this.s) * 100}%, ${xr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Is(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function xr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Pa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Vo = (e) => () => e;
function Cu(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Nu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function ju(e) {
  return (e = +e) == 1 ? el : function(t, n) {
    return n - t ? Nu(t, n, e) : Vo(isNaN(t) ? n : t);
  };
}
function el(e, t) {
  var n = t - e;
  return n ? Cu(e, n) : Vo(isNaN(e) ? t : e);
}
const Ds = (function e(t) {
  var n = ju(t);
  function a(o, s) {
    var i = n((o = ro(o)).r, (s = ro(s)).r), l = n(o.g, s.g), c = n(o.b, s.b), d = el(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Mu(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Iu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Du(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = Zo(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Tu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Tr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Lu(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Zo(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var ao = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fa = new RegExp(ao.source, "g");
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
  var n = ao.lastIndex = Fa.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = ao.exec(e)) && (o = Fa.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Tr(a, o) })), n = Fa.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? Au(c[0].x) : $u(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function Zo(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Vo(t) : (n === "number" ? Tr : n === "string" ? (a = er(t)) ? (t = a, Ds) : Eu : t instanceof er ? Ds : t instanceof Date ? Tu : Iu(t) ? Mu : Array.isArray(t) ? Du : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Lu : Tr)(e, t);
}
function Pu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
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
var Ts = [0, 1];
function Nn(e) {
  return e;
}
function oo(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Fu(isNaN(t) ? NaN : 0.5);
}
function Bu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Hu(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = oo(o, a), s = n(i, s)) : (a = oo(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function zu(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = oo(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var c = au(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function tl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ou() {
  var e = Ts, t = Ts, n = Zo, a, o, s, i = Nn, l, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return i !== Nn && (i = Bu(e[0], e[h - 1])), l = h > 2 ? zu : Hu, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((d || (d = l(t, e.map(a), Tr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Ru), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Pu, u();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Nn, u()) : i !== Nn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return a = h, o = p, u();
  };
}
function nl() {
  return Ou()(Nn, Nn);
}
function Uu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Lr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function En(e) {
  return e = Lr(Math.abs(e)), e ? e[1] : NaN;
}
function Wu(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], c = 0; o > 0 && l > 0 && (c + l + 1 > a && (l = Math.max(1, a - c)), s.push(n.substring(o -= l, o + l)), !((c += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Gu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Yu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $r(e) {
  if (!(t = Yu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new qo({
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
$r.prototype = qo.prototype;
function qo(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
qo.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vu(e) {
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
var rl;
function Zu(e, t) {
  var n = Lr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (rl = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Lr(e, Math.max(0, t + s - 1))[0];
}
function Ls(e, t) {
  var n = Lr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const $s = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Uu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ls(e * 100, t),
  r: Ls,
  s: Zu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function As(e) {
  return e;
}
var Es = Array.prototype.map, Ps = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? As : Wu(Es.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? As : Gu(Es.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = $r(f);
    var h = f.fill, p = f.align, x = f.sign, g = f.symbol, m = f.zero, I = f.width, D = f.comma, L = f.precision, N = f.trim, b = f.type;
    b === "n" ? (D = !0, b = "g") : $s[b] || (L === void 0 && (L = 12), N = !0, b = "g"), (m || h === "0" && p === "=") && (m = !0, h = "0", p = "=");
    var C = g === "$" ? n : g === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", T = g === "$" ? a : /[%p]/.test(b) ? i : "", _ = $s[b], y = /[defgprs%]/.test(b);
    L = L === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, L)) : Math.max(0, Math.min(20, L));
    function v($) {
      var M = C, F = T, j, k, w;
      if (b === "c")
        F = _($) + F, $ = "";
      else {
        $ = +$;
        var E = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? c : _(Math.abs($), L), N && ($ = Vu($)), E && +$ == 0 && x !== "+" && (E = !1), M = (E ? x === "(" ? x : l : x === "-" || x === "(" ? "" : x) + M, F = (b === "s" ? Ps[8 + rl / 3] : "") + F + (E && x === "(" ? ")" : ""), y) {
          for (j = -1, k = $.length; ++j < k; )
            if (w = $.charCodeAt(j), 48 > w || w > 57) {
              F = (w === 46 ? o + $.slice(j + 1) : $.slice(j)) + F, $ = $.slice(0, j);
              break;
            }
        }
      }
      D && !m && ($ = t($, 1 / 0));
      var te = M.length + $.length + F.length, U = te < I ? new Array(I - te + 1).join(h) : "";
      switch (D && m && ($ = t(U + $, U.length ? I - F.length : 1 / 0), U = ""), p) {
        case "<":
          $ = M + $ + F + U;
          break;
        case "=":
          $ = M + U + $ + F;
          break;
        case "^":
          $ = U.slice(0, te = U.length >> 1) + M + $ + F + U.slice(te);
          break;
        default:
          $ = U + M + $ + F;
          break;
      }
      return s($);
    }
    return v.toString = function() {
      return f + "";
    }, v;
  }
  function u(f, h) {
    var p = d((f = $r(f), f.type = "f", f)), x = Math.max(-8, Math.min(8, Math.floor(En(h) / 3))) * 3, g = Math.pow(10, -x), m = Ps[8 + x / 3];
    return function(I) {
      return p(g * I) + m;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var br, al, ol;
Ju({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ju(e) {
  return br = qu(e), al = br.format, ol = br.formatPrefix, br;
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
function ef(e, t, n, a) {
  var o = no(e, t, n), s;
  switch (a = $r(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = Ku(o, i)) && (a.precision = s), ol(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = Qu(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = Xu(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return al(a);
}
function tf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return uu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return ef(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], c, d, u = 10;
    for (l < i && (d = i, i = l, l = d, d = o, o = s, s = d); u-- > 0; ) {
      if (d = to(i, l, n), d === c)
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
function Ar() {
  var e = nl();
  return e.copy = function() {
    return tl(e, Ar());
  }, va.apply(e, arguments), tf(e);
}
function nf(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Ra = /* @__PURE__ */ new Date(), Ba = /* @__PURE__ */ new Date();
function pt(e, t, n, a) {
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
  }, o.filter = (s) => pt((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), n && (o.count = (s, i) => (Ra.setTime(+s), Ba.setTime(+i), e(Ra), e(Ba), Math.floor(n(Ra, Ba))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Er = pt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Er.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? pt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Er);
Er.range;
const qt = 1e3, Mt = qt * 60, Jt = Mt * 60, Kt = Jt * 24, Jo = Kt * 7, Fs = Kt * 30, Ha = Kt * 365, jn = pt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * qt);
}, (e, t) => (t - e) / qt, (e) => e.getUTCSeconds());
jn.range;
const Xo = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * qt);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getMinutes());
Xo.range;
const rf = pt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getUTCMinutes());
rf.range;
const Ko = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * qt - e.getMinutes() * Mt);
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getHours());
Ko.range;
const af = pt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getUTCHours());
af.range;
const lr = pt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Mt) / Kt,
  (e) => e.getDate() - 1
);
lr.range;
const Qo = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Kt, (e) => e.getUTCDate() - 1);
Qo.range;
const of = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Kt, (e) => Math.floor(e / Kt));
of.range;
function vn(e) {
  return pt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Mt) / Jo);
}
const wa = vn(0), Pr = vn(1), sf = vn(2), lf = vn(3), Pn = vn(4), cf = vn(5), df = vn(6);
wa.range;
Pr.range;
sf.range;
lf.range;
Pn.range;
cf.range;
df.range;
function wn(e) {
  return pt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Jo);
}
const sl = wn(0), Fr = wn(1), uf = wn(2), ff = wn(3), Fn = wn(4), hf = wn(5), pf = wn(6);
sl.range;
Fr.range;
uf.range;
ff.range;
Fn.range;
hf.range;
pf.range;
const tr = pt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
tr.range;
const mf = pt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
mf.range;
const Qt = pt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Qt.range;
const bn = pt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
bn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
bn.range;
function gf(e, t, n, a, o, s) {
  const i = [
    [jn, 1, qt],
    [jn, 5, 5 * qt],
    [jn, 15, 15 * qt],
    [jn, 30, 30 * qt],
    [s, 1, Mt],
    [s, 5, 5 * Mt],
    [s, 15, 15 * Mt],
    [s, 30, 30 * Mt],
    [o, 1, Jt],
    [o, 3, 3 * Jt],
    [o, 6, 6 * Jt],
    [o, 12, 12 * Jt],
    [a, 1, Kt],
    [a, 2, 2 * Kt],
    [n, 1, Jo],
    [t, 1, Fs],
    [t, 3, 3 * Fs],
    [e, 1, Ha]
  ];
  function l(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), x = p ? p.range(d, +u + 1) : [];
    return h ? x.reverse() : x;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = Go(([, , m]) => m).right(i, h);
    if (p === i.length) return e.every(no(d / Ha, u / Ha, f));
    if (p === 0) return Er.every(Math.max(no(d, u, f), 1));
    const [x, g] = i[h / i[p - 1][2] < i[p][2] / h ? p - 1 : p];
    return x.every(g);
  }
  return [l, c];
}
const [xf, bf] = gf(Qt, tr, wa, lr, Ko, Xo);
function za(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Oa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Un(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function yf(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Wn(o), u = Gn(o), f = Wn(s), h = Gn(s), p = Wn(i), x = Gn(i), g = Wn(l), m = Gn(l), I = Wn(c), D = Gn(c), L = {
    a: E,
    A: te,
    b: U,
    B,
    c: null,
    d: Us,
    e: Us,
    f: Of,
    g: Kf,
    G: eh,
    H: Bf,
    I: Hf,
    j: zf,
    L: il,
    m: Uf,
    M: Wf,
    p: K,
    q: O,
    Q: Ys,
    s: Vs,
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
    "%": Gs
  }, N = {
    a: H,
    A: J,
    b: R,
    B: re,
    c: null,
    d: Ws,
    e: Ws,
    f: oh,
    g: mh,
    G: xh,
    H: nh,
    I: rh,
    j: ah,
    L: cl,
    m: sh,
    M: ih,
    p: q,
    q: ee,
    Q: Ys,
    s: Vs,
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
    "%": Gs
  }, b = {
    a: v,
    A: $,
    b: M,
    B: F,
    c: j,
    d: zs,
    e: zs,
    f: Ef,
    g: Hs,
    G: Bs,
    H: Os,
    I: Os,
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
    x: k,
    X: w,
    y: Hs,
    Y: Bs,
    Z: Mf,
    "%": Pf
  };
  L.x = C(n, L), L.X = C(a, L), L.c = C(t, L), N.x = C(n, N), N.X = C(a, N), N.c = C(t, N);
  function C(Q, ae) {
    return function(de) {
      var V = [], ie = -1, se = 0, fe = Q.length, ce, pe, Ae;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++ie < fe; )
        Q.charCodeAt(ie) === 37 && (V.push(Q.slice(se, ie)), (pe = Rs[ce = Q.charAt(++ie)]) != null ? ce = Q.charAt(++ie) : pe = ce === "e" ? " " : "0", (Ae = ae[ce]) && (ce = Ae(de, pe)), V.push(ce), se = ie + 1);
      return V.push(Q.slice(se, ie)), V.join("");
    };
  }
  function T(Q, ae) {
    return function(de) {
      var V = Un(1900, void 0, 1), ie = _(V, Q, de += "", 0), se, fe;
      if (ie != de.length) return null;
      if ("Q" in V) return new Date(V.Q);
      if ("s" in V) return new Date(V.s * 1e3 + ("L" in V ? V.L : 0));
      if (ae && !("Z" in V) && (V.Z = 0), "p" in V && (V.H = V.H % 12 + V.p * 12), V.m === void 0 && (V.m = "q" in V ? V.q : 0), "V" in V) {
        if (V.V < 1 || V.V > 53) return null;
        "w" in V || (V.w = 1), "Z" in V ? (se = Oa(Un(V.y, 0, 1)), fe = se.getUTCDay(), se = fe > 4 || fe === 0 ? Fr.ceil(se) : Fr(se), se = Qo.offset(se, (V.V - 1) * 7), V.y = se.getUTCFullYear(), V.m = se.getUTCMonth(), V.d = se.getUTCDate() + (V.w + 6) % 7) : (se = za(Un(V.y, 0, 1)), fe = se.getDay(), se = fe > 4 || fe === 0 ? Pr.ceil(se) : Pr(se), se = lr.offset(se, (V.V - 1) * 7), V.y = se.getFullYear(), V.m = se.getMonth(), V.d = se.getDate() + (V.w + 6) % 7);
      } else ("W" in V || "U" in V) && ("w" in V || (V.w = "u" in V ? V.u % 7 : "W" in V ? 1 : 0), fe = "Z" in V ? Oa(Un(V.y, 0, 1)).getUTCDay() : za(Un(V.y, 0, 1)).getDay(), V.m = 0, V.d = "W" in V ? (V.w + 6) % 7 + V.W * 7 - (fe + 5) % 7 : V.w + V.U * 7 - (fe + 6) % 7);
      return "Z" in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, Oa(V)) : za(V);
    };
  }
  function _(Q, ae, de, V) {
    for (var ie = 0, se = ae.length, fe = de.length, ce, pe; ie < se; ) {
      if (V >= fe) return -1;
      if (ce = ae.charCodeAt(ie++), ce === 37) {
        if (ce = ae.charAt(ie++), pe = b[ce in Rs ? ae.charAt(ie++) : ce], !pe || (V = pe(Q, de, V)) < 0) return -1;
      } else if (ce != de.charCodeAt(V++))
        return -1;
    }
    return V;
  }
  function y(Q, ae, de) {
    var V = d.exec(ae.slice(de));
    return V ? (Q.p = u.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function v(Q, ae, de) {
    var V = p.exec(ae.slice(de));
    return V ? (Q.w = x.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function $(Q, ae, de) {
    var V = f.exec(ae.slice(de));
    return V ? (Q.w = h.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function M(Q, ae, de) {
    var V = I.exec(ae.slice(de));
    return V ? (Q.m = D.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function F(Q, ae, de) {
    var V = g.exec(ae.slice(de));
    return V ? (Q.m = m.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function j(Q, ae, de) {
    return _(Q, t, ae, de);
  }
  function k(Q, ae, de) {
    return _(Q, n, ae, de);
  }
  function w(Q, ae, de) {
    return _(Q, a, ae, de);
  }
  function E(Q) {
    return i[Q.getDay()];
  }
  function te(Q) {
    return s[Q.getDay()];
  }
  function U(Q) {
    return c[Q.getMonth()];
  }
  function B(Q) {
    return l[Q.getMonth()];
  }
  function K(Q) {
    return o[+(Q.getHours() >= 12)];
  }
  function O(Q) {
    return 1 + ~~(Q.getMonth() / 3);
  }
  function H(Q) {
    return i[Q.getUTCDay()];
  }
  function J(Q) {
    return s[Q.getUTCDay()];
  }
  function R(Q) {
    return c[Q.getUTCMonth()];
  }
  function re(Q) {
    return l[Q.getUTCMonth()];
  }
  function q(Q) {
    return o[+(Q.getUTCHours() >= 12)];
  }
  function ee(Q) {
    return 1 + ~~(Q.getUTCMonth() / 3);
  }
  return {
    format: function(Q) {
      var ae = C(Q += "", L);
      return ae.toString = function() {
        return Q;
      }, ae;
    },
    parse: function(Q) {
      var ae = T(Q += "", !1);
      return ae.toString = function() {
        return Q;
      }, ae;
    },
    utcFormat: function(Q) {
      var ae = C(Q += "", N);
      return ae.toString = function() {
        return Q;
      }, ae;
    },
    utcParse: function(Q) {
      var ae = T(Q += "", !0);
      return ae.toString = function() {
        return Q;
      }, ae;
    }
  };
}
var Rs = { "-": "", _: " ", 0: "0" }, gt = /^\s*\d+/, vf = /^%/, wf = /[\\^$*+?|[\]().{}]/g;
function Qe(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function Sf(e) {
  return e.replace(wf, "\\$&");
}
function Wn(e) {
  return new RegExp("^(?:" + e.map(Sf).join("|") + ")", "i");
}
function Gn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function _f(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function kf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Cf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Nf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function jf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Bs(e, t, n) {
  var a = gt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Hs(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Mf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function If(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Df(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function zs(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Tf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Os(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Lf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function $f(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Af(e, t, n) {
  var a = gt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Ef(e, t, n) {
  var a = gt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Pf(e, t, n) {
  var a = vf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Ff(e, t, n) {
  var a = gt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Rf(e, t, n) {
  var a = gt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Us(e, t) {
  return Qe(e.getDate(), t, 2);
}
function Bf(e, t) {
  return Qe(e.getHours(), t, 2);
}
function Hf(e, t) {
  return Qe(e.getHours() % 12 || 12, t, 2);
}
function zf(e, t) {
  return Qe(1 + lr.count(Qt(e), e), t, 3);
}
function il(e, t) {
  return Qe(e.getMilliseconds(), t, 3);
}
function Of(e, t) {
  return il(e, t) + "000";
}
function Uf(e, t) {
  return Qe(e.getMonth() + 1, t, 2);
}
function Wf(e, t) {
  return Qe(e.getMinutes(), t, 2);
}
function Gf(e, t) {
  return Qe(e.getSeconds(), t, 2);
}
function Yf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Vf(e, t) {
  return Qe(wa.count(Qt(e) - 1, e), t, 2);
}
function ll(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Pn(e) : Pn.ceil(e);
}
function Zf(e, t) {
  return e = ll(e), Qe(Pn.count(Qt(e), e) + (Qt(e).getDay() === 4), t, 2);
}
function qf(e) {
  return e.getDay();
}
function Jf(e, t) {
  return Qe(Pr.count(Qt(e) - 1, e), t, 2);
}
function Xf(e, t) {
  return Qe(e.getFullYear() % 100, t, 2);
}
function Kf(e, t) {
  return e = ll(e), Qe(e.getFullYear() % 100, t, 2);
}
function Qf(e, t) {
  return Qe(e.getFullYear() % 1e4, t, 4);
}
function eh(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Pn(e) : Pn.ceil(e), Qe(e.getFullYear() % 1e4, t, 4);
}
function th(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Qe(t / 60 | 0, "0", 2) + Qe(t % 60, "0", 2);
}
function Ws(e, t) {
  return Qe(e.getUTCDate(), t, 2);
}
function nh(e, t) {
  return Qe(e.getUTCHours(), t, 2);
}
function rh(e, t) {
  return Qe(e.getUTCHours() % 12 || 12, t, 2);
}
function ah(e, t) {
  return Qe(1 + Qo.count(bn(e), e), t, 3);
}
function cl(e, t) {
  return Qe(e.getUTCMilliseconds(), t, 3);
}
function oh(e, t) {
  return cl(e, t) + "000";
}
function sh(e, t) {
  return Qe(e.getUTCMonth() + 1, t, 2);
}
function ih(e, t) {
  return Qe(e.getUTCMinutes(), t, 2);
}
function lh(e, t) {
  return Qe(e.getUTCSeconds(), t, 2);
}
function ch(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function dh(e, t) {
  return Qe(sl.count(bn(e) - 1, e), t, 2);
}
function dl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Fn(e) : Fn.ceil(e);
}
function uh(e, t) {
  return e = dl(e), Qe(Fn.count(bn(e), e) + (bn(e).getUTCDay() === 4), t, 2);
}
function fh(e) {
  return e.getUTCDay();
}
function hh(e, t) {
  return Qe(Fr.count(bn(e) - 1, e), t, 2);
}
function ph(e, t) {
  return Qe(e.getUTCFullYear() % 100, t, 2);
}
function mh(e, t) {
  return e = dl(e), Qe(e.getUTCFullYear() % 100, t, 2);
}
function gh(e, t) {
  return Qe(e.getUTCFullYear() % 1e4, t, 4);
}
function xh(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Fn(e) : Fn.ceil(e), Qe(e.getUTCFullYear() % 1e4, t, 4);
}
function bh() {
  return "+0000";
}
function Gs() {
  return "%";
}
function Ys(e) {
  return +e;
}
function Vs(e) {
  return Math.floor(+e / 1e3);
}
var kn, ul;
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
  return kn = yf(e), ul = kn.format, kn.parse, kn.utcFormat, kn.utcParse, kn;
}
function vh(e) {
  return new Date(e);
}
function wh(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function fl(e, t, n, a, o, s, i, l, c, d) {
  var u = nl(), f = u.invert, h = u.domain, p = d(".%L"), x = d(":%S"), g = d("%I:%M"), m = d("%I %p"), I = d("%a %d"), D = d("%b %d"), L = d("%B"), N = d("%Y");
  function b(C) {
    return (c(C) < C ? p : l(C) < C ? x : i(C) < C ? g : s(C) < C ? m : a(C) < C ? o(C) < C ? I : D : n(C) < C ? L : N)(C);
  }
  return u.invert = function(C) {
    return new Date(f(C));
  }, u.domain = function(C) {
    return arguments.length ? h(Array.from(C, wh)) : h().map(vh);
  }, u.ticks = function(C) {
    var T = h();
    return e(T[0], T[T.length - 1], C ?? 10);
  }, u.tickFormat = function(C, T) {
    return T == null ? b : d(T);
  }, u.nice = function(C) {
    var T = h();
    return (!C || typeof C.range != "function") && (C = t(T[0], T[T.length - 1], C ?? 10)), C ? h(nf(T, C)) : u;
  }, u.copy = function() {
    return tl(u, fl(e, t, n, a, o, s, i, l, c, d));
  }, u;
}
function es() {
  return va.apply(fl(xf, bf, Qt, tr, wa, lr, Ko, Xo, jn, ul).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Sh({
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
  const d = Ue(null), [u, f] = Be(!1), [h, p] = Be(!1), x = t(e.start), g = t(e.end), m = Math.max(g - x, 20), I = () => {
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
  }, D = e.progress ? m * e.progress / 100 : 0, L = () => {
    n?.(e);
  }, N = () => {
    a?.(e);
  }, b = (M) => {
    M.key === "Enter" ? (M.preventDefault(), L()) : M.key === " " && (M.preventDefault(), N());
  }, C = () => {
    f(!0);
  }, T = () => {
    f(!1);
  }, _ = () => {
    p(!0), l?.();
  }, y = () => {
    p(!1);
  }, v = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), $ = {
    "--task-left": `${x}px`,
    "--task-width": `${m}px`,
    "--task-color": I(),
    left: `${x}px`,
    width: `${m}px`,
    backgroundColor: I()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: v,
      style: $,
      onClick: L,
      onDoubleClick: N,
      onKeyDown: b,
      onMouseDown: C,
      onMouseUp: T,
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
            style: { width: `${D}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function _h({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Be(-1), c = Ue(null), d = (p) => {
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
              const g = p.getTime() === s.getTime(), m = i === x;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": x,
                  className: `date-column ${g ? "today" : ""} ${m ? "focused" : ""}`,
                  tabIndex: m ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
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
function kh({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = Be(!1), [d, u] = Be(-1), f = Ue(null);
  Ke(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
  const h = (g) => {
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
        const D = Math.min(t.length - 1, d + 1);
        u(D), f.current?.querySelector(`[data-task-index="${D}"]`)?.focus();
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
  }, x = (g) => {
    l && u(g);
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
            children: t.map((g, m) => /* @__PURE__ */ r.jsx(
              Sh,
              {
                task: g,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === m,
                taskIndex: m,
                tabIndex: l && d === m ? 0 : -1,
                onFocus: () => x(m)
              },
              g.id
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
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ue(null), [l, c] = Be(800), d = $e(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const g = new Date(n);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [n]), u = $e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = $e(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  Ke(() => {
    if (!i.current || typeof window > "u") return;
    const g = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!g) return;
    const m = new g((I) => {
      const D = I[0];
      D && c(Math.max(D.contentRect.width - 220, 400));
    });
    return m.observe(i.current), () => m.disconnect();
  }, []);
  const h = $e(
    () => es().domain([d, u]).range([0, l]),
    [d, u, l]
  ), p = $e(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((m) => {
      const I = g.get(m.resourceId) || [];
      I.push(m), g.set(m.resourceId, I);
    }), g;
  }, [t]), x = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault(), typeof document < "u" && i.current?.querySelector(".gantt-row .resource-label")?.focus();
          break;
        case "Home":
          g.preventDefault(), typeof document < "u" && i.current?.querySelector(".header-resource")?.focus();
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
        /* @__PURE__ */ r.jsx(_h, { viewStart: d, viewEnd: u, dateCount: f }),
        /* @__PURE__ */ r.jsx(
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
            children: e.map((g, m) => /* @__PURE__ */ r.jsx(
              kh,
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
const Rr = ({
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
) }), Ch = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Xe.Children.toArray(t).filter(
    (m) => Xe.isValidElement(m) && (m.type === Rr || m.type?.displayName === "BreadcrumbItem")
  ).map((m) => ({
    text: typeof m.props.children == "string" ? m.props.children : String(m.props.children),
    href: m.props.href,
    active: m.props.active,
    attributes: m.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const g = d();
    if (g && g.length > 0) {
      const m = g.slice().reverse().find((I) => I.href && !I.active);
      if (m)
        return { href: m.href, text: m.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), p = ye(
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
          Xe.Children.map(t, (g, m) => Xe.isValidElement(g) && (g.type === Rr || g.type?.displayName === "BreadcrumbItem") ? Xe.cloneElement(g, { key: m }) : null)
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
}, hl = Ch;
hl.Item = Rr;
Rr.displayName = "BreadcrumbItem";
const pl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const o = ye("nhsuk-skip-link", n);
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
}, Wy = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = ye("nhsuk-pagination", o);
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
}, Gy = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ye("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, ml = Xe.forwardRef(({
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
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const D = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Xt,
      {
        level: a,
        className: x,
        children: D()
      }
    );
  }, m = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, I = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
ml.displayName = "Card";
const Yy = ({
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
}, Vy = ({
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
}, Zy = ({
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
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const D = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        D,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Xt,
      {
        level: a,
        className: g,
        children: L
      }
    );
  }, I = () => c || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
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
          m(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: I() })
      ]
    }
  );
}, Nh = ({
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
  const d = ye(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Xt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Xt,
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
}, qy = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = ye("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, Jy = ({
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
  let n = e;
  return t.forEach((a) => {
    n = n.replace(a.regex, (o) => `<span class="nhsuk-code-${a.cls}">${o}</span>`);
  }), n;
}, Br = (e, t, n) => {
  if (n || !t) return e;
  const a = jh();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return Mh(e);
}, Ih = ({
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
  data: g,
  visuallyHiddenCaption: m = !1
}) => {
  const I = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), D = ye(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), L = ye(f), N = (y, v) => {
    const $ = ye(
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
    let F;
    if (y.node != null)
      F = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      F = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const j = Array.isArray(y.code), k = j ? y.code.join(`
`) : y.code, w = j || k.includes(`
`), E = {
        className: ye("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": w,
          "nhsuk-table__code--inline": !w
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, te = Br(k, y.codeLanguage);
      F = w ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...E,
          dangerouslySetInnerHTML: { __html: te }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...E,
          dangerouslySetInnerHTML: { __html: te }
        }
      );
    } else
      F = y.text;
    return /* @__PURE__ */ r.jsx("th", { className: $, ...M, children: F }, v);
  }, b = (y, v, $) => {
    const M = o && $ || y.rowHeader, F = ye(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), j = {
      ...M && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...y.header && { "data-label": y.header }
      },
      ...y.attributes
    };
    let k;
    if (y.node != null)
      k = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      k = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const te = Array.isArray(y.code), U = te ? y.code.join(`
`) : y.code, B = te || U.includes(`
`), K = {
        className: ye("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, O = Br(
        U,
        y.codeLanguage,
        y.disableHighlight
      );
      k = B ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...K,
          dangerouslySetInnerHTML: { __html: O }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...K,
          dangerouslySetInnerHTML: { __html: O }
        }
      );
    } else
      k = y.text;
    const w = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && y.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      k
    ] }), E = M ? "th" : "td";
    return /* @__PURE__ */ r.jsx(E, { className: F, ...j, children: w }, v);
  };
  let C = t, T = e;
  !C && x && x.length && (C = x.map((y) => ({
    text: y.title,
    format: y.format,
    classes: y.headerClasses,
    attributes: y.headerAttributes
  }))), !T && x && g && g.length && (T = g.map((y, v) => x.map(($) => {
    const M = $.accessor ? $.accessor(y, v) : y[$.key];
    let F = { format: $.format, classes: $.cellClasses, attributes: $.cellAttributes };
    if ($.rowHeader && (F.rowHeader = !0), $.render) {
      const j = $.render(M, y, v, $);
      return j == null || typeof j == "boolean" ? { ...F, text: "" } : typeof j == "string" || typeof j == "number" ? { ...F, text: String(j) } : { ...F, ...j };
    }
    return { ...F, text: M != null ? String(M) : "" };
  })));
  const _ = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: D,
      ...s && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ye(I, m && "nhsuk-u-visually-hidden"), children: n }),
        C && C.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: C.map(
              (y, v) => N(y, v)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: T && T.map((y, v) => /* @__PURE__ */ r.jsx(
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
  return c ? /* @__PURE__ */ r.jsxs(Nh, { className: d, children: [
    i && /* @__PURE__ */ r.jsx(Xt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    _()
  ] }) : L ? /* @__PURE__ */ r.jsx("div", { className: L, children: _() }) : _();
}, Dh = ({
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
}, gl = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, xl = ({
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
  const x = ye(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
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
    const D = Array.isArray(a), L = D ? a.join(`
`) : a, N = D || L.includes(`
`), b = {
      className: ye("nhsuk-table__code", s, {
        "nhsuk-table__code--block": N,
        "nhsuk-table__code--inline": !N
      }),
      ...o ? { "data-language": o } : {}
    }, C = Br(
      L,
      o,
      i
    );
    m = N ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...b,
        dangerouslySetInnerHTML: { __html: C }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: C } });
  } else m = e;
  const I = p;
  return /* @__PURE__ */ r.jsx(I, { className: x, ...g, children: m });
}, Th = ({
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
  const x = !!p, g = x ? "th" : "td", m = ye(
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
  if (n != null) D = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) D = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const L = Array.isArray(a), N = L ? a.join(`
`) : a, b = L || N.includes(`
`), C = {
      className: ye("nhsuk-table__code", s, {
        "nhsuk-table__code--block": b,
        "nhsuk-table__code--inline": !b
      }),
      ...o ? { "data-language": o } : {}
    }, T = Br(N, o, i);
    D = b ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...C, dangerouslySetInnerHTML: { __html: T } }) }) : /* @__PURE__ */ r.jsx("code", { ...C, dangerouslySetInnerHTML: { __html: T } });
  } else D = e;
  return /* @__PURE__ */ r.jsx(g, { className: m, ...I, children: D });
}, en = Ih;
en.Caption = Dh;
en.BodyRow = gl;
en.HeaderCell = xl;
en.Cell = Th;
let Zs = !1, qs = !1;
Object.defineProperty(en, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Zs && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Zs = !0), gl;
  }
});
Object.defineProperty(en, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !qs && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), qs = !0), xl;
  }
});
const Xy = Hn(({
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
  const p = n !== void 0, [x, g] = Be(() => t || e[0]?.id || ""), m = p ? n : x, I = Ue(null), D = Ue(/* @__PURE__ */ new Map()), L = ge((v) => {
    p || g(v), a?.(v);
  }, [p, a]), N = ge((v) => {
    o?.(v), l && L(v);
  }, [o, l, L]), b = ge((v, $) => {
    const M = e.filter((k) => !k.disabled).map((k) => k.id), F = M.indexOf($);
    let j = null;
    switch (v.key) {
      case "ArrowLeft":
        j = F > 0 ? F - 1 : M.length - 1;
        break;
      case "ArrowRight":
        j = F < M.length - 1 ? F + 1 : 0;
        break;
      case "Home":
        j = 0;
        break;
      case "End":
        j = M.length - 1;
        break;
      case "Escape":
        v.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (j !== null) {
      v.preventDefault();
      const k = M[j], w = D.current.get(k);
      w && (w.focus(), N(k));
    }
  }, [e, N, i]), C = ge((v, $) => {
    $ ? D.current.set(v, $) : D.current.delete(v);
  }, []), T = ge((v) => {
    const $ = D.current.get(v);
    $ && $.focus();
  }, []);
  $i(h, () => ({
    focusTab: T,
    getActiveTab: () => m,
    getTabListElement: () => I.current
  }), [T, m]);
  const _ = ge((v) => {
    const $ = v.relatedTarget;
    I.current?.contains($) || s?.();
  }, [s]), y = ye("nhsuk-tabs", c);
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
            ref: I,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: _,
                children: e.map((v) => {
                  const $ = v.id === m, M = v.disabled, F = ye("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": $,
                    "nhsuk-tabs__list-item--disabled": M
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: F, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (j) => C(v.id, j),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": $,
                      "aria-controls": `${v.id}-panel`,
                      id: `${v.id}-tab`,
                      tabIndex: $ ? 0 : -1,
                      disabled: M,
                      onClick: () => !M && L(v.id),
                      onKeyDown: (j) => !M && b(j, v.id),
                      onFocus: () => !M && N(v.id),
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
          const $ = v.id === m;
          return /* @__PURE__ */ r.jsx(
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
Lh.displayName = "Details";
const $h = Hn(
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
      Xt,
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
$h.displayName = "DoDontList";
const Ah = Hn(
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
Ah.displayName = "Expander";
const Eh = Hn(
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
), Ph = ({
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
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(et, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
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
        Di(
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
}, Qy = ({
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
}, Fh = ({
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
    /* @__PURE__ */ r.jsx(bt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(bt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(bt, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      jr,
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
      jr,
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
] }), Rh = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(et, { color: Bh(n.status), text: n.label }) }, n.status)) });
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
const e1 = ({
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
  onA11yModeChange: g
}) => {
  const [m, I] = Be("grid"), D = i || m, [L, N] = Be(a || []), b = n ?? L, C = $e(() => {
    const j = /* @__PURE__ */ new Set();
    return e.forEach((k) => j.add(new Date(k.start).getTime())), Array.from(j).sort((k, w) => k - w);
  }, [e]), T = $e(() => {
    const j = {};
    return e.forEach((k) => {
      const w = new Date(k.start).getTime();
      j[w] || (j[w] = {});
      const E = k.capacity - k.booked - (k.held || 0);
      j[w][k.sessionId] = { slot: k, remaining: E };
    }), j;
  }, [e]), _ = ge((j) => {
    if (s === "single") {
      const k = [j.id];
      n || N(k), o?.(k, { lastAction: "select" });
    } else {
      const k = b.includes(j.id), w = k ? b.filter((E) => E !== j.id) : [...b, j.id];
      n || N(w), o?.(w, { lastAction: k ? "deselect" : "select" });
    }
  }, [s, b, n, o]), y = $e(() => h || (p ? Array.from(new Set(e.map((k) => k.status))).map((k) => ({
    status: k,
    label: k.charAt(0).toUpperCase() + k.slice(1)
  })) : void 0), [h, p, e]), v = y ? /* @__PURE__ */ r.jsx(
    Rh,
    {
      items: y,
      orientation: x === "left" || x === "right" ? "vertical" : "horizontal"
    }
  ) : null, $ = (j) => {
    i || I(j), g?.(j);
  }, M = u || (f ? /* @__PURE__ */ r.jsx(
    Fh,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: D,
      onA11yModeChange: $
    }
  ) : null), F = /* @__PURE__ */ r.jsx("div", { style: c, className: ye(l), children: /* @__PURE__ */ r.jsx(Qa, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsx(Xn, { width: xn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    x === "top" && v,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((j) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => _(j), "aria-pressed": b.includes(j.id), children: [
      Vn(new Date(j.start)),
      " – ",
      Vn(new Date(j.end)),
      " (",
      j.status,
      ")"
    ] }) }, j.id)) }),
    x === "bottom" && v
  ] }) }) }) }) });
  return D === "list" ? F : /* @__PURE__ */ r.jsx("div", { style: c, className: ye(l), children: /* @__PURE__ */ r.jsx(Qa, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsx(Xn, { width: xn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    x === "top" && v,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": C.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((j) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${j.specialty}`, className: "nhs-slot-matrix__session-header", children: j.specialty }, j.id))
      ] }),
      C.map((j) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Vn(new Date(j)), children: Vn(new Date(j)) }),
        t.map((k) => {
          const w = T[j]?.[k.id];
          if (!w)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, k.id);
          const { slot: E, remaining: te } = w, U = b.includes(E.id), B = d ? d(E) : `Slot ${Vn(new Date(E.start))} ${E.status}${te === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": E.status,
              className: ye("nhs-slot-matrix__cell", U && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": U || void 0,
              onClick: () => _(E),
              children: te > 0 ? `${te} left` : "Full"
            },
            E.id
          );
        })
      ] }, j))
    ] }),
    x === "bottom" && v
  ] }) }) }) }) });
};
function Js(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Vn(e) {
  return `${Js(e.getHours())}:${Js(e.getMinutes())}`;
}
function bl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = bl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Et() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = bl(e)) && (a && (a += " "), a += t);
  return a;
}
const Hh = ({ level: e, children: t, className: n }) => {
  const a = `h${e}`;
  return Xe.createElement(a, { className: n }, t);
}, zh = ({ href: e, children: t, className: n, ...a }) => /* @__PURE__ */ r.jsx("a", { href: e, className: n, ...a, children: t });
function yr(e, t) {
  return /* @__PURE__ */ r.jsx("span", { className: Et("nhs-step-nav__title", { "nhs-step-nav__title--current": t }), children: e.title });
}
const t1 = ({
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
  onToggle: g,
  showAllControls: m = !1,
  autoFocusExpanded: I = !1
}) => {
  const D = u ?? zh, L = i === "sidebar" ? { as: "aside", className: "nhs-step-nav nhs-step-nav--sidebar" } : { as: "nav", className: "nhs-step-nav nhs-step-nav--full" }, N = L.as === "aside" ? "aside" : "nav", b = x === void 0, [C, T] = Be(
    () => new Set(p ?? [])
  ), _ = $e(() => b ? C : new Set(x), [b, C, x]), y = $e(
    () => l.some((j) => j.description || j.items && j.items.length > 0),
    [l]
  ), v = ge((j) => _.has(j), [_]), $ = ge((j, k) => {
    b && T((w) => {
      if (h)
        return k ? /* @__PURE__ */ new Set([j]) : /* @__PURE__ */ new Set();
      const E = new Set(w);
      return k ? E.add(j) : E.delete(j), E;
    }), g?.(j, k);
  }, [b, g, h]), M = ge((j) => {
    const k = l.filter((w) => w.description || w.items && w.items.length > 0).map((w) => w.id);
    b && T(() => j ? h ? new Set(k.slice(0, 1)) : new Set(k) : /* @__PURE__ */ new Set()), k.forEach((w) => g?.(w, j));
  }, [l, b, g, h]), F = ge((j, k) => {
    const w = !v(j.id);
    if ($(j.id, w), w && I) {
      const E = document.getElementById(`sbs-${j.id}-panel`);
      E && E.querySelector(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )?.focus();
    } else
      k?.focus();
  }, [I, v, $]);
  return Xe.createElement(
    N,
    { id: e, "aria-label": n, className: Et(L.className, t) },
    /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i === "full-width" && (a || o) && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__intro", children: [
        a && /* @__PURE__ */ r.jsx(Hh, { level: s, className: "nhs-step-nav__heading", children: a }),
        o && /* @__PURE__ */ r.jsx("p", { className: "nhs-step-nav__summary", children: o }),
        f && !h && m && y && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__controls", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => M(!0), children: "Show all" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => M(!1), children: "Hide all" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("ol", { className: Et("nhs-step-nav__list", { "nhs-step-nav__list--numbered": c }), children: l.map((j, k) => {
        const w = d === j.id, E = Et(
          "nhs-step-nav__item",
          w && "nhs-step-nav__item--current",
          j.status && `nhs-step-nav__item--${j.status}`
        ), te = j.href ? /* @__PURE__ */ r.jsx(D, { href: j.href, className: "nhs-step-nav__link", "aria-current": w ? "step" : void 0, children: yr(j, w) }) : yr(j, w), U = !!(j.description || j.items && j.items.length > 0), B = f && U ? v(j.id) : !0, K = `sbs-${j.id}-header`, O = `sbs-${j.id}-panel`;
        return /* @__PURE__ */ r.jsxs("li", { className: E, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__header", children: [
            te,
            (j.optional || j.duration || j.meta) && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__meta", children: [
              j.optional && /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__optional", "aria-label": "Optional", children: "Optional" }),
              j.duration && /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__duration", children: j.duration }),
              j.meta
            ] }),
            f && U && /* @__PURE__ */ r.jsx(
              "button",
              {
                id: K,
                type: "button",
                className: "nhs-step-nav__toggle",
                "aria-expanded": B,
                "aria-controls": O,
                onClick: (H) => F(j, H.currentTarget),
                "aria-label": (B ? "Hide" : "Show") + ` details for ${typeof j.title == "string" ? j.title : "this step"}`,
                children: /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__toggle-icon", "aria-hidden": "true" })
              }
            )
          ] }),
          U && (!f || B) && /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: O,
              role: "region",
              "aria-labelledby": f ? K : void 0,
              className: Et("nhs-step-nav__content"),
              children: [
                j.description && /* @__PURE__ */ r.jsx("p", { className: "nhs-step-nav__description", children: j.description }),
                j.items && j.items.length > 0 && /* @__PURE__ */ r.jsx("ol", { className: "nhs-step-nav__sublist", children: j.items.map((H) => {
                  const J = d === H.id, R = H.href ? /* @__PURE__ */ r.jsx(D, { href: H.href, className: "nhs-step-nav__sublink", "aria-current": J ? "step" : void 0, children: yr(H, J) }) : yr(H, J);
                  return /* @__PURE__ */ r.jsx("li", { className: Et("nhs-step-nav__subitem", H.status && `nhs-step-nav__subitem--${H.status}`), children: R }, H.id);
                }) })
              ]
            }
          )
        ] }, j.id || k);
      }) })
    ] })
  );
}, Oh = ({
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
    /* @__PURE__ */ r.jsx(Xt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, n1 = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Qa, { children: /* @__PURE__ */ r.jsx(on, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    Xn,
    {
      width: xn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(Oh, { ...o })
    },
    s
  )) }) }) });
};
var _r = /* @__PURE__ */ ((e) => (e.String = "string", e.Number = "number", e.Boolean = "boolean", e.Date = "date", e.Custom = "custom", e))(_r || {}), Rn = /* @__PURE__ */ ((e) => (e.First = "first", e.Last = "last", e))(Rn || {}), Zn = /* @__PURE__ */ ((e) => (e.TrueFirst = "trueFirst", e.FalseFirst = "falseFirst", e))(Zn || {});
function Xs(e) {
  if (e == null) return null;
  const n = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isNaN(n) ? null : n;
}
const Uh = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function Wh(e, t) {
  return Uh.compare(String(e), String(t));
}
function Ks(e, t) {
  if (t.sortAccessor) return t.sortAccessor(e);
  if (t.useRendererForSort) {
    if (t.tableRenderer) return t.tableRenderer(e);
    if (t.render) return t.render(e);
  }
  return e[t.key];
}
function Gh(e, t, n, a) {
  if (n?.sortComparator)
    return n.sortComparator(e, t);
  const o = n?.sortType;
  if (o === _r.Number) {
    const s = Number(e), i = Number(t), l = Number.isNaN(s), c = Number.isNaN(i);
    return l && c ? 0 : l ? 1 : c ? -1 : s - i;
  }
  if (o === _r.Boolean) {
    const s = !!e, i = !!t, l = n?.booleanOrder ?? a?.booleanOrder ?? Zn.FalseFirst;
    return s === i ? 0 : l === Zn.TrueFirst ? s ? -1 : 1 : s ? 1 : -1;
  }
  if (o === _r.Date) {
    const s = Xs(e), i = Xs(t);
    return s == null && i == null ? 0 : s == null ? 1 : i == null ? -1 : s - i;
  }
  if (typeof e == "number" && typeof t == "number") {
    const s = Number.isNaN(e), i = Number.isNaN(t);
    return s && i ? 0 : s ? 1 : i ? -1 : e - t;
  }
  if (typeof e == "boolean" && typeof t == "boolean") {
    const s = n?.booleanOrder ?? a?.booleanOrder ?? Zn.FalseFirst;
    return e === t ? 0 : s === Zn.TrueFirst ? e ? -1 : 1 : e ? 1 : -1;
  }
  return Wh(e, t);
}
function so(e, t, n = Rn.Last, a) {
  const o = new Map(e.map((i) => [i.key, i])), s = t ?? [];
  return (i, l) => {
    if (!s.length) return 0;
    for (const { key: c, direction: d } of s) {
      const u = o.get(c), f = u ? Ks(i, u) : i[c], h = u ? Ks(l, u) : l[c], p = f == null, x = h == null;
      if (p || x) {
        if (p && x) continue;
        return (u?.nullsPosition ?? a?.nullsPosition ?? n) === Rn.First ? p ? -1 : 1 : p ? 1 : -1;
      }
      let g = Gh(f, h, u, a);
      if (g !== 0) return d === "asc" ? g : -g;
    }
    if (a?.stable) {
      const c = i.__originalIndex__ ?? i.originalIndex ?? void 0, d = l.__originalIndex__ ?? l.originalIndex ?? void 0;
      if (typeof c == "number" && typeof d == "number")
        return c - d;
    }
    return 0;
  };
}
const Yh = Xe.forwardRef(
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
    striped: g = !1,
    responsive: m = !1,
    tableType: I = "default"
  }, D) => {
    const L = Ue(null), N = Ue(null), b = Ue(null);
    Xe.useImperativeHandle(D, () => L.current, []);
    const [C, T] = Be(0), [_, y] = Be(0), [v, $] = Be("headers"), [M, F] = Be("browse"), j = t.length, k = e.length, w = $e(() => {
      if (!n || n.length === 0) return e;
      const H = so(t, n, Rn.Last, o);
      return [...e].sort(H);
    }, [e, n, t, o]), E = ge((H, J) => {
      setTimeout(() => {
        const R = L.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${J + 1})`
        );
        R && (R.focus(), typeof R.scrollIntoView == "function" && R.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = ge((H) => {
      setTimeout(() => {
        const J = L.current?.querySelector(`th:nth-child(${H + 1})`);
        J && (J.focus(), typeof J.scrollIntoView == "function" && J.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), U = ge((H) => {
      a?.(H);
    }, [a]), B = ge((H) => {
      i?.(H);
    }, [i]), K = ge((H) => {
      const { key: J } = H;
      switch (J) {
        case "Enter":
          if (H.preventDefault(), v === "headers" && M === "browse")
            F("navigate"), te(_);
          else if (v === "headers" && M === "navigate") {
            const R = t[_];
            R && U(R.key);
          } else v === "cells" && M === "browse" ? (F("navigate"), E(C, _)) : v === "cells" && M === "navigate" && B(C);
          break;
        case "Escape":
          H.preventDefault(), (v === "headers" && M === "navigate" || v === "cells" && M === "navigate") && F("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), M === "navigate" || M === "browse" && v === "headers") {
            if (v === "headers") {
              const R = Math.max(0, _ - 1);
              y(R), te(R);
            } else if (v === "cells") {
              const R = Math.max(0, _ - 1);
              y(R), E(C, R);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), M === "navigate" || M === "browse" && v === "headers") {
            if (v === "headers") {
              const R = Math.min(j - 1, _ + 1);
              y(R), te(R);
            } else if (v === "cells") {
              const R = Math.min(j - 1, _ + 1);
              y(R), E(C, R);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), v === "cells") {
            if (M === "browse") {
              const R = Math.max(0, C - 1);
              T(R), E(R, 0), y(0);
            } else if (M === "navigate")
              if (C > 0) {
                const R = C - 1;
                T(R), E(R, _);
              } else
                $("headers"), F("browse"), te(_);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), v === "headers" && M === "browse")
            $("cells"), T(0), y(0), E(0, 0);
          else if (v === "cells") {
            const R = k - 1;
            if (M === "browse") {
              const re = Math.min(R, C + 1);
              T(re), E(re, 0), y(0);
            } else if (M === "navigate" && C < R) {
              const re = C + 1;
              T(re), E(re, _);
            }
          }
          break;
        case "Home":
          H.preventDefault(), v === "headers" ? (y(0), te(0)) : v === "cells" && (H.ctrlKey ? (T(0), y(0), E(0, 0)) : (y(0), E(C, 0)));
          break;
        case "End":
          if (H.preventDefault(), v === "headers") {
            const R = j - 1;
            y(R), te(R);
          } else if (v === "cells")
            if (H.ctrlKey) {
              const R = k - 1, re = j - 1;
              T(R), y(re), E(R, re);
            } else {
              const R = j - 1;
              y(R), E(C, R);
            }
          break;
        case " ":
          if (H.preventDefault(), v === "headers" && M === "navigate") {
            const R = t[_];
            R && U(R.key);
          } else v === "cells" && M === "navigate" && B(C);
          break;
      }
    }, [
      v,
      M,
      _,
      C,
      j,
      k,
      t,
      E,
      te,
      U,
      B
    ]);
    Ke(() => {
      const H = L.current;
      if (H)
        return H.addEventListener("keydown", K), () => H.removeEventListener("keydown", K);
    }, [K]);
    const O = ye(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": g,
        "nhsuk-table--compact": I === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: L,
        className: O,
        id: l,
        "data-testid": c,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": u,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: N, role: "row", children: t.map((H, J) => {
            const R = n?.find((ee) => ee.key === H.key), re = !!R, q = v === "headers" && _ === J;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ye("sortable-header", {
                  "sortable-header--focused": q
                }),
                role: "columnheader",
                tabIndex: q ? 0 : -1,
                onClick: () => U(H.key),
                onKeyDown: (ee) => {
                  (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), U(H.key));
                },
                "aria-sort": re ? R?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: H.label }),
                  re && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ee) => ee.key === H.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: R?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              H.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: b, className: "nhsuk-table__body", role: "rowgroup", children: w.map((H, J) => {
            const R = s === J, re = v === "cells" && C === J;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ye("data-row", {
                  "data-row--selected": R,
                  "data-row--focused": re
                }),
                "aria-selected": R,
                children: t.map((q, ee) => {
                  const Q = q.tableRenderer ? q.tableRenderer(H) : q.render ? q.render(H) : H[q.key], ae = v === "cells" && C === J && _ === ee, de = () => typeof Q == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: Q ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: Q ? "Yes" : "No" })
                  ] }) : String(Q ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ye("data-cell", {
                        "data-cell--focused": ae
                      }),
                      tabIndex: ae ? 0 : -1,
                      onClick: () => B(J),
                      children: de()
                    },
                    q.key
                  );
                })
              },
              J
            );
          }) })
        ]
      }
    );
  }
);
Yh.displayName = "AriaDataGrid";
const yl = ({
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
  const f = Ue(null), h = Ue(null), p = Ue(null), x = ge((y, v) => {
    c || (h.current = v, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", v));
  }, [c]), g = ge((y, v) => {
    c || h.current === v || (y.preventDefault(), y.dataTransfer.dropEffect = "move", p.current = v);
  }, [c]), m = ge((y, v) => {
    if (c) return;
    y.preventDefault();
    const $ = h.current;
    if (!$ || $ === v) return;
    const M = e.findIndex((j) => j.key === $), F = e.findIndex((j) => j.key === v);
    if (M !== -1 && F !== -1) {
      const j = [...e], [k] = j.splice(M, 1);
      j.splice(F, 0, k), n(j);
    }
    h.current = null, p.current = null;
  }, [c, e, n]), I = ge(() => {
    h.current = null, p.current = null;
  }, []), D = ge((y) => {
    const v = t.find(($) => $.key === y);
    return v ? v.label : y;
  }, [t]), L = ge((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), N = ge((y) => {
    if (c) return;
    const v = e.map(
      ($) => $.key === y ? { ...$, direction: $.direction === "asc" ? "desc" : "asc" } : $
    );
    n(v);
  }, [e, n, c]), b = ge((y) => {
    if (c) return;
    const v = e.filter(($) => $.key !== y);
    n(v);
  }, [e, n, c]), C = ge(() => {
    c || n([]);
  }, [n, c]), T = () => {
    if (e.length === 0)
      return o;
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
  }, _ = $e(() => {
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
        children: T()
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
          children: e.map((y, v) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: ($) => x($, y.key),
              onDragOver: ($) => g($, y.key),
              onDrop: ($) => m($, y.key),
              onDragEnd: I,
              onClick: () => N(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ r.jsx(
                et,
                {
                  color: L(v),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => b(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${v + 1}`, children: v + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: D(y.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: ($) => {
                          $.stopPropagation(), N(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${D(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
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
        bt,
        {
          variant: "secondary",
          onClick: C,
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
function Vh(e, t) {
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
const io = Hn(function(t, n) {
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
    loadingComponent: g,
    error: m = null,
    errorComponent: I,
    "data-testid": D,
    actions: L,
    actionsMinGap: N = 16,
    forceActionsAbove: b = !1
  } = t, T = Ue(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, _ = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), y = `${T}-description`, v = `${T}-navigation-help`, {
    dataComparator: $ = (A, z) => JSON.stringify(A) === JSON.stringify(z),
    filterFunction: M = (A) => A,
    booleanRenderer: F = (A) => A ? "✓" : "✗"
  } = a || {}, j = s !== void 0, k = s ?? 0, [w, E] = Be({
    focusArea: "tabs",
    focusedTabIndex: k,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), te = $e(() => ({
    selectedIndex: k,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [k]), [U, B] = Ai(Vh, te);
  Ke(() => {
    const A = U.tabLoadingStates.length, z = o.length;
    A !== z && B({ type: "ADJUST_ARRAYS", payload: { newLength: z } });
  }, [o.length]), Ke(() => {
    j && B({ type: "SET_SELECTED_INDEX", payload: k });
  }, [k, j]), Ke(() => {
    E((A) => ({
      ...A,
      focusArea: "tabs",
      focusedTabIndex: U.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [U.selectedIndex]), Ke(() => {
    l && l(U.globalSelectedRowData);
  }, [U.globalSelectedRowData, l]);
  const K = ge(
    (A, z) => $(A, z),
    [$]
  ), O = ge(
    (A) => {
      A >= 0 && A < o.length && !o[A].disabled && (B({ type: "SET_SELECTED_INDEX", payload: A }), E((z) => ({
        ...z,
        focusedTabIndex: A,
        focusArea: "tabs"
      })), i?.(A));
    },
    [o, i]
  ), H = Ue(!1), J = ge(
    (A, z) => {
      if (!z?.force && !H.current && A === 0) {
        H.current = !0;
        return;
      }
      H.current = !0, setTimeout(() => {
        const W = R.current[A], X = W?.parentElement;
        if (W && X) {
          const ne = W.offsetLeft, oe = W.offsetWidth, ue = X.clientWidth, he = ne - ue / 2 + oe / 2;
          try {
            X.scrollTo({
              left: Math.max(0, he),
              behavior: "smooth"
            });
          } catch {
            W.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!W,
          tabListElementExists: !!X
        });
      }, 50);
    },
    []
  ), R = Ue([]), re = Ue([]), q = ge(
    (A, z) => {
      const W = U.sortConfig || [], X = W.find(
        (ue) => ue.key === z
      );
      let ne;
      X ? X.direction === "asc" ? ne = W.map(
        (ue) => ue.key === z ? { ...ue, direction: "desc" } : ue
      ) : ne = W.filter(
        (ue) => ue.key !== z
      ) : ne = [...W, { key: z, direction: "asc" }], B({
        type: "SET_SORT",
        payload: ne
      }), o[A].onSort?.(z);
    },
    [U.sortConfig, o]
  ), ee = ge(
    (A) => {
      setTimeout(() => {
        const z = document.querySelector(
          `[data-tab-panel="${U.selectedIndex}"] th:nth-child(${A + 1})`
        );
        z && z.focus();
      }, 0);
    },
    [U.selectedIndex]
  ), Q = ge(
    (A) => F(A),
    [F]
  ), ae = ge(
    (A, z) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${U.selectedIndex}"] tbody tr:nth-child(${A + 1}) td:nth-child(${z + 1})`
        );
        W && W.focus();
      }, 0);
    },
    [U.selectedIndex]
  );
  Ke(() => {
    w.isGridActive && (w.focusArea === "headers" ? setTimeout(() => {
      ee(w.focusedHeaderIndex);
    }, 0) : w.focusArea === "cells" && setTimeout(() => {
      ae(
        w.focusedRowIndex,
        w.focusedColumnIndex
      );
    }, 0));
  }, [
    w.focusArea,
    w.isGridActive,
    w.focusedHeaderIndex,
    w.focusedRowIndex,
    w.focusedColumnIndex,
    ee,
    ae
  ]), Ke(() => {
    J(U.selectedIndex);
  }, [U.selectedIndex, J]);
  const de = ge(
    (A, z) => {
      const { key: W } = A, X = o[U.selectedIndex], ne = X?.columns.length || 0;
      switch (W) {
        case "ArrowLeft":
          A.preventDefault();
          const oe = Math.max(0, z - 1);
          E((ve) => ({
            ...ve,
            focusedHeaderIndex: oe
          })), ee(oe);
          break;
        case "ArrowRight":
          A.preventDefault();
          const ue = Math.min(ne - 1, z + 1);
          E((ve) => ({
            ...ve,
            focusedHeaderIndex: ue
          })), ee(ue);
          break;
        case "ArrowUp":
          A.preventDefault(), E((ve) => ({
            ...ve,
            focusArea: "tabs",
            focusedTabIndex: U.selectedIndex
          })), J(U.selectedIndex), R.current[U.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          A.preventDefault(), E((ve) => ({
            ...ve,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: z,
            isGridActive: !0
          }));
          break;
        case "Home":
          A.preventDefault(), E((ve) => ({ ...ve, focusedHeaderIndex: 0 })), ee(0);
          break;
        case "End":
          A.preventDefault();
          const he = ne - 1;
          E((ve) => ({
            ...ve,
            focusedHeaderIndex: he
          })), ee(he);
          break;
        case "Enter":
        case " ":
          A.preventDefault();
          const me = X?.columns[z]?.key;
          me && q(U.selectedIndex, me);
          break;
      }
    },
    [
      o,
      U.selectedIndex,
      q,
      E,
      ee,
      ae,
      R
    ]
  ), V = ge(
    (A, z, W) => {
      const { key: X } = A, ne = o[U.selectedIndex], oe = ne?.data.length || 0, ue = ne?.columns.length || 0;
      switch (X) {
        case "ArrowUp":
          if (A.preventDefault(), z === 0)
            E((Se) => ({
              ...Se,
              focusArea: "headers",
              focusedHeaderIndex: W,
              isGridActive: !1
            })), ee(W);
          else {
            const Se = z - 1;
            E((qe) => ({
              ...qe,
              focusedRowIndex: Se
            })), ae(Se, W);
          }
          break;
        case "ArrowDown":
          A.preventDefault();
          const he = Math.min(oe - 1, z + 1);
          E((Se) => ({
            ...Se,
            focusedRowIndex: he
          })), ae(he, W);
          break;
        case "ArrowLeft":
          A.preventDefault();
          const me = Math.max(0, W - 1);
          E((Se) => ({
            ...Se,
            focusedColumnIndex: me
          })), ae(z, me);
          break;
        case "ArrowRight":
          A.preventDefault();
          const ve = Math.min(ue - 1, W + 1);
          E((Se) => ({
            ...Se,
            focusedColumnIndex: ve
          })), ae(z, ve);
          break;
        case "Home":
          A.preventDefault(), A.ctrlKey ? (E((Se) => ({
            ...Se,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ae(0, 0)) : (E((Se) => ({ ...Se, focusedColumnIndex: 0 })), ae(z, 0));
          break;
        case "End":
          if (A.preventDefault(), A.ctrlKey) {
            const Se = oe - 1, qe = ue - 1;
            E((He) => ({
              ...He,
              focusedRowIndex: Se,
              focusedColumnIndex: qe
            })), ae(Se, qe);
          } else {
            const Se = ue - 1;
            E((qe) => ({
              ...qe,
              focusedColumnIndex: Se
            })), ae(z, Se);
          }
          break;
        case "Enter":
        case " ":
          if (A.preventDefault(), ne && ne.data[z]) {
            const Se = ne.data.some(
              (at) => "ews_data" in at
            ) ? M(ne.data, U.filters) : ne.data, qe = U.sortConfig;
            let He = Se;
            if (qe && qe.length > 0) {
              const at = so(ne.columns, qe, Rn.Last, a?.sortingOptions);
              He = [...Se].sort(at);
            }
            if (He[z]) {
              const at = He[z], le = U.globalSelectedRowData && K(U.globalSelectedRowData, at) ? null : at;
              B({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: le
              });
            }
          }
          break;
      }
    },
    [
      o,
      U.selectedIndex,
      U.filters,
      U.sortConfig,
      M,
      K,
      B,
      E,
      ee,
      ae
    ]
  ), ie = ge(
    (A, z) => M(A, z),
    [M]
  );
  if ($i(
    n,
    () => ({
      selectTab: (A) => {
        A >= 0 && A < o.length && (B({ type: "SET_SELECTED_INDEX", payload: A }), i?.(A));
      },
      refreshData: (A) => {
        console.log("Refreshing data for tab:", A ?? "all");
      },
      exportData: (A) => {
        const z = A ?? U.selectedIndex, W = o[z];
        return W ? W.data : [];
      },
      getSelectedRows: (A) => U.globalSelectedRowData ? [] : [],
      clearSelection: (A) => {
        B({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (A) => {
        B({ type: "SET_FILTERS", payload: A });
      }
    }),
    [U.selectedIndex, U.selectedRows, o, i]
  ), x)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": D,
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
        "data-testid": D,
        children: I || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: m })
        ] })
      }
    );
  const se = Ue(null), fe = Ue(null), ce = Ue(null), [pe, Ae] = Be(!0);
  Ke(() => {
    if (!L) {
      Ae(!1);
      return;
    }
    if (b) {
      Ae(!1);
      return;
    }
    function A() {
      if (!se.current || !fe.current || !ce.current) return;
      const X = se.current.clientWidth, ne = Array.from(
        fe.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), oe = ne.reduce((ve, Se) => ve + Se.offsetWidth, 0), ue = ce.current.offsetWidth, he = Math.max(8 * (ne.length - 1), 0), me = oe + he + ue + N <= X;
      Ae(me);
    }
    const z = requestAnimationFrame(() => A()), W = new ResizeObserver(() => A());
    return se.current && W.observe(se.current), fe.current && W.observe(fe.current), () => {
      cancelAnimationFrame(z), W.disconnect();
    };
  }, [L, N, b, o.length]);
  const Ie = ce, Ce = ge(() => Ie.current ? Array.from(
    Ie.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((A) => !A.hasAttribute("disabled")) : [], []), Y = ge(
    (A) => {
      const z = Ce();
      if (!z.length) return;
      const W = Math.max(0, Math.min(A, z.length - 1));
      z[W].focus(), E((X) => ({ ...X, focusArea: "actions", focusedActionIndex: W }));
    },
    [Ce]
  ), S = ge(() => Y(0), [Y]), P = ge(
    (A, z) => {
      const { key: W } = A, X = o.length - 1;
      switch (W) {
        case "ArrowUp": {
          L && !pe && (A.preventDefault(), S());
          break;
        }
        case "ArrowLeft": {
          A.preventDefault();
          const ne = z > 0 ? z - 1 : X;
          O(ne), J(ne), R.current[ne]?.focus();
          break;
        }
        case "ArrowRight": {
          if (A.preventDefault(), z === X && L && pe) {
            S();
            return;
          }
          const ne = z < X ? z + 1 : 0;
          O(ne), J(ne), R.current[ne]?.focus();
          break;
        }
        case "ArrowDown": {
          A.preventDefault(), E((ne) => ({
            ...ne,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          A.preventDefault(), O(0), J(0), R.current[0]?.focus();
          break;
        }
        case "End": {
          A.preventDefault(), O(X), J(X), R.current[X]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          A.preventDefault(), O(z);
          break;
        }
        case "Tab": {
          !A.shiftKey && z === X && L && pe && S();
          break;
        }
      }
    },
    [o.length, O, J, L, pe, S]
  ), G = ge((A) => {
    const { key: z } = A, W = Ce();
    if (!W.length) return;
    const X = W.findIndex((ne) => ne === document.activeElement);
    switch (z) {
      case "ArrowLeft": {
        if (pe)
          if (X > 0)
            A.preventDefault(), Y(X - 1);
          else {
            A.preventDefault();
            const ne = o.length - 1;
            O(ne), J(ne), R.current[ne]?.focus(), E((oe) => ({ ...oe, focusArea: "tabs", focusedTabIndex: ne }));
          }
        break;
      }
      case "ArrowRight": {
        pe && (X < W.length - 1 ? (A.preventDefault(), Y(X + 1)) : (A.preventDefault(), O(0), J(0), R.current[0]?.focus(), E((ne) => ({ ...ne, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (pe)
          A.preventDefault(), E((ne) => ({ ...ne, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          A.preventDefault();
          const ne = U.selectedIndex;
          R.current[ne]?.focus(), E((oe) => ({ ...oe, focusArea: "tabs", focusedTabIndex: ne }));
        }
        break;
      }
    }
  }, [Ce, pe, Y, o.length, O, J, U.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": D,
      ref: se,
      children: [
        d && !_ && /* @__PURE__ */ r.jsx("div", { id: y, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: v,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          yl,
          {
            sortConfig: U.sortConfig || [],
            columns: o.flatMap(
              (A) => A.columns.map((z) => ({ key: z.key, label: z.label }))
            ).filter(
              (A, z, W) => W.findIndex((X) => X.key === A.key) === z
              // Remove duplicates
            ),
            onSortChange: (A) => {
              B({ type: "SET_SORT", payload: A });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        L && !pe && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: ce,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: G,
            children: L
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${pe ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? _ ? d : y : v,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: fe,
              children: o.map((A, z) => {
                const W = z === U.selectedIndex, X = A.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${A.id}`,
                    "aria-controls": `panel-${A.id}`,
                    "aria-selected": W,
                    "aria-disabled": X,
                    tabIndex: W ? 0 : -1,
                    ref: (ne) => {
                      R.current[z] = ne;
                    },
                    onClick: () => O(z),
                    onKeyDown: (ne) => P(ne, z),
                    disabled: X,
                    className: [
                      "aria-tabs-datagrid__tab",
                      W ? "aria-tabs-datagrid__tab--selected" : "",
                      X ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: A.label }),
                      U.tabLoadingStates[z] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      U.tabErrors[z] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  A.id
                );
              })
            }
          ),
          L && pe && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: ce,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: G,
              children: L
            }
          )
        ] }),
        o.map((A, z) => {
          const W = z === U.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${A.id}`,
              "aria-labelledby": `tab-${A.id}`,
              tabIndex: 0,
              hidden: !W,
              ref: (X) => {
                re.current[z] = X;
              },
              className: `aria-tabs-datagrid__panel ${A.className || ""}`,
              "data-tab-panel": z,
              children: W && (() => {
                const X = A.data.some(
                  (oe) => "ews_data" in oe
                ) ? ie(A.data, U.filters) : A.data, ne = $e(() => {
                  const oe = U.sortConfig;
                  if (!oe || oe.length === 0) return X;
                  const ue = so(A.columns, oe, Rn.Last, a?.sortingOptions);
                  return [...X].sort(ue);
                }, [X, U.sortConfig, A.columns, a?.sortingOptions]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": A.ariaLabel,
                    "aria-describedby": A.ariaDescription ? `panel-${A.id}-description` : void 0,
                    children: [
                      A.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${A.id}-description`,
                          children: A.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: A.columns.map((oe, ue) => {
                        const he = U.sortConfig?.find(
                          (Se) => Se.key === oe.key
                        ), me = !!he, ve = w.focusArea === "headers" && w.focusedHeaderIndex === ue;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${ve ? "sortable-header--focused" : ""} ${me ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: ve ? 0 : -1,
                            onClick: () => q(z, oe.key),
                            onKeyDown: (Se) => de(Se, ue),
                            "aria-sort": me ? he?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: oe.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${me ? `sort-indicator--${he?.direction}` : ""}`,
                                  children: [
                                    U.sortConfig && U.sortConfig.length > 0 && U.sortConfig.findIndex(
                                      (Se) => Se.key === oe.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${U.sortConfig.findIndex((Se) => Se.key === oe.key) + 1}`,
                                        "data-priority": U.sortConfig.findIndex(
                                          (Se) => Se.key === oe.key
                                        ) + 1,
                                        title: `Sort priority: ${U.sortConfig.findIndex((Se) => Se.key === oe.key) + 1}`,
                                        children: U.sortConfig.findIndex(
                                          (Se) => Se.key === oe.key
                                        ) + 1
                                      }
                                    ),
                                    me && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${he?.direction}`,
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
                          oe.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: ne.map((oe, ue) => {
                        const he = U.globalSelectedRowData && K(U.globalSelectedRowData, oe), me = w.focusArea === "cells" && w.focusedRowIndex === ue;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${he ? "data-row--selected" : ""} ${me ? "data-row--focused" : ""}`,
                            "aria-selected": he,
                            children: A.columns.map((ve, Se) => {
                              const qe = oe[ve.key];
                              let He;
                              ve.tableRenderer ? He = ve.tableRenderer(oe) : ve.render ? He = ve.render(oe) : He = qe;
                              const at = w.focusArea === "cells" && w.focusedRowIndex === ue && w.focusedColumnIndex === Se, ft = () => {
                                if (ve.customRenderer) {
                                  const le = ve.customRenderer(
                                    qe,
                                    oe
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: le
                                    }
                                  );
                                }
                                return typeof qe == "boolean" && He === qe ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  Q(qe),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: qe ? "Yes" : "No" })
                                ] }) : Xe.isValidElement(He) || typeof He != "object" ? He ?? "" : He;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${at ? "data-cell--focused" : ""}`,
                                  tabIndex: at ? 0 : -1,
                                  onClick: () => {
                                    const Ne = U.globalSelectedRowData && K(
                                      U.globalSelectedRowData,
                                      oe
                                    ) ? null : oe;
                                    B({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Ne
                                    });
                                  },
                                  onKeyDown: (le) => V(le, ue, Se),
                                  children: ft()
                                },
                                ve.key
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
            A.id
          );
        })
      ]
    }
  );
}), vr = {
  asc: "↑",
  desc: "↓"
}, Zh = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Ua(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function qh(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Jh(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Xh(e, t) {
  const n = t.find((o) => o.id === e), a = qh(t);
  return n ? n.priority < a : !1;
}
const r1 = ({
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
  const u = $e(() => Zh(e), [e]), f = ge((D) => {
    if (l) return;
    const L = e.map(
      (N) => N.id === D ? { ...N, direction: N.direction === "asc" ? "desc" : "asc" } : N
    );
    t(L);
  }, [e, t, l]), h = ge((D) => {
    if (l) return;
    const L = e.findIndex((b) => b.id === D);
    if (L <= 0) return;
    const N = [...e];
    [N[L], N[L - 1]] = [N[L - 1], N[L]], t(Ua(N));
  }, [e, t, l]), p = ge((D) => {
    if (l) return;
    const L = e.findIndex((b) => b.id === D);
    if (L >= e.length - 1 || L === -1) return;
    const N = [...e];
    [N[L], N[L + 1]] = [N[L + 1], N[L]], t(Ua(N));
  }, [e, t, l]), x = ge((D) => {
    if (l) return;
    const L = e.filter((N) => N.id !== D);
    t(Ua(L));
  }, [e, t, l]), g = ge(() => {
    l || t([]);
  }, [t, l]), m = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const D = u.map((L, N) => {
      const b = L.direction === "asc" ? "ascending" : "descending";
      return `${N + 1}. ${L.label} (${b})`;
    });
    if (D.length === 1)
      return `Sorted by: ${D[0]}`;
    if (D.length === 2)
      return `Sorted by: ${D.join(" and ")}`;
    {
      const L = D.pop();
      return `Sorted by: ${D.join(", ")}, and ${L}`;
    }
  }, I = $e(() => {
    const D = ["sort-description"];
    return i && D.push("sort-help"), d && D.push(d), D.join(" ");
  }, [i, d]);
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
          u.map((D) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                et,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(D.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: D.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: D.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(D.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${D.label}. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: D.direction === "asc" ? vr.asc : vr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
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
                      /* @__PURE__ */ r.jsx(
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
    s && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      bt,
      {
        variant: "secondary",
        onClick: g,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsxs("small", { children: [
      "Click ",
      vr.asc,
      "/",
      vr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ts = (e, t) => t.map((n) => ({
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
})), lo = [
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
], Kh = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Qh = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, ep = (e) => {
  if (typeof e == "boolean") {
    const n = lo.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = lo.find((n) => n.value === e);
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
}), a1 = (e) => {
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
}, rp = {
  dataComparator: Kh,
  filterFunction: Qh,
  booleanRenderer: ep,
  getDataId: tp
};
function Qs(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((L) => L.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => o.filter((N) => !i.includes(N) && e[N]).slice(0, 3).map((N) => {
    const b = t.find((y) => y.key === N), C = e[N], T = d[N] ? d[N](C, e) : b?.cardRenderer ? b.cardRenderer(e) : b?.render ? b.render(e) : C;
    return `${b?.label || N}: ${T}`;
  }).join(" • "), x = () => s.length === 0 ? null : s.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const N = e[L.fieldKey], b = L.render ? L.render(N, e) : N;
    return `<span class="nhsuk-tag ${ap(L, N)}">${b}</span>`;
  }).join(""), g = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", m = x(), I = p(), D = m ? `${I}${m ? `<div class="adaptive-card__badges">${m}</div>` : ""}` : I;
  return {
    variant: g(),
    heading: String(h),
    descriptionHtml: D,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${h}`
  };
}
function ap(e, t) {
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
const op = {
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
            et,
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
            bt,
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
            bt,
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
            bt,
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
}, wl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        et,
        {
          color: lp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        et,
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
      bt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      bt,
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
        et,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        et,
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
      bt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      bt,
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${sp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            et,
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
            bt,
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
            bt,
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
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
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
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      vl,
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
      wl,
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
      Sl,
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
      _l,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, mp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ei = {
  name: "healthcare",
  defaultCardConfig: hp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: pp,
  fieldTypes: mp
};
function ti(e) {
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
function ni(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function gp(e, t) {
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
function xp(e, t) {
  const [n, a] = Be("cards");
  return Ke(() => {
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
function bp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function yp(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...op, ...n };
  if (a && a.cardTemplates) {
    const s = bp(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Qs(e, t, o);
}
const o1 = ({
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
  // Standard AriaTabsDataGrid props
  tabPanels: d,
  dataConfig: u,
  selectedIndex: f,
  onTabChange: h,
  ariaLabel: p = "Data grid",
  ariaDescription: x,
  orientation: g = "horizontal",
  id: m,
  disabled: I = !1,
  className: D,
  ...L
}) => {
  const N = xp(e, t), b = f !== void 0, C = f ?? 0, T = $e(() => {
    if (d.some(
      (S) => S.data && S.data.length > 0 && ni(S.data)
    )) {
      const S = ti(n);
      return {
        ...ei.defaultCardConfig,
        ...S
      };
    } else
      return ti(n);
  }, [n, d]), _ = $e(() => d.some(
    (S) => S.data && S.data.length > 0 && ni(S.data)
  ) ? ei : void 0, [d]), y = $e(() => ({
    selectedIndex: C,
    tabLoadingStates: new Array(d.length).fill(!1),
    tabErrors: new Array(d.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(d.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [C, d.length]), [v, $] = Ai(gp, y), M = Ue([]), F = Ue([]), j = Ue([]), k = Ue(null), [w, E] = Be({
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
  }), te = ge((Y) => {
    if (!Y.current)
      return { columns: 1, rows: 0 };
    const S = Y.current, P = S.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (P.length === 0)
      return { columns: 1, rows: 0 };
    const G = S.offsetWidth, z = P[0].offsetWidth, W = Math.floor(G / z) || 1, X = Math.ceil(P.length / W);
    return { columns: W, rows: X };
  }, []), U = ge((Y, S) => ({
    row: Math.floor(Y / S),
    col: Y % S
  }), []), B = ge((Y, S, P) => Y * P + S, []), K = ge((Y, S, P, G) => {
    const { row: A, col: z } = U(Y, G);
    let W = A, X = z;
    switch (S) {
      case "up":
        W = Math.max(0, A - 1);
        break;
      case "down":
        W = Math.min(Math.floor((P - 1) / G), A + 1);
        break;
      case "left":
        X = Math.max(0, z - 1);
        break;
      case "right":
        X = Math.min(G - 1, z + 1);
        break;
    }
    const ne = B(W, X, G);
    return Math.min(ne, P - 1);
  }, [U, B]);
  Ke(() => {
    w.isCardNavigationActive && w.focusedCardElementIndex >= 0 && w.cardElements.length > 0 && setTimeout(() => {
      const Y = w.cardElements[w.focusedCardElementIndex];
      Y && (Y.element.focus(), Y.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [w.isCardNavigationActive, w.focusedCardElementIndex, w.cardElements.length]), Ke(() => {
    const Y = () => {
      if (N === "cards" && k.current) {
        const { columns: G, rows: A } = te(k);
        E((z) => ({
          ...z,
          gridColumns: G,
          gridRows: A
        }));
      }
    }, S = setTimeout(Y, 200), P = () => {
      setTimeout(Y, 100);
    };
    return window.addEventListener("resize", P), () => {
      clearTimeout(S), window.removeEventListener("resize", P);
    };
  }, [N, d, te]), Ke(() => {
    const Y = v.tabLoadingStates.length, S = d.length;
    Y !== S && $({ type: "ADJUST_ARRAYS", payload: { newLength: S } });
  }, [d.length, v.tabLoadingStates.length]), Ke(() => {
    b && f !== v.selectedIndex && $({ type: "SET_SELECTED_INDEX", payload: f });
  }, [b, f, v.selectedIndex]);
  const O = ge((Y) => {
    Y >= 0 && Y < d.length && !d[Y].disabled && ($({ type: "SET_SELECTED_INDEX", payload: Y }), h?.(Y));
  }, [d, h]), H = ge((Y) => {
    console.log("Card selected:", Y), $({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: Y
    });
  }, []), J = ge((Y) => {
    const S = F.current[Y];
    S && (S.focus(), S.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), R = ge((Y) => {
    const S = F.current[Y];
    if (!S) return [];
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
    ].join(", "), G = S.querySelectorAll(P);
    return Array.from(G).map((A, z) => ({
      id: A.id || `card-${Y}-element-${z}`,
      element: A,
      label: A.getAttribute("aria-label") || A.textContent?.trim() || A.getAttribute("title") || `Element ${z + 1}`,
      type: A.tagName.toLowerCase() === "button" ? "button" : A.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(A.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), re = Ue(null), q = ge((Y) => {
    const S = re.current;
    if (!S) return;
    const P = document.createElement("div");
    P.setAttribute("aria-live", "polite"), P.setAttribute("aria-atomic", "true"), P.className = "sr-only", P.textContent = Y, S.appendChild(P), setTimeout(() => {
      S.contains(P) && S.removeChild(P);
    }, 1e3);
  }, []), ee = ge((Y) => {
    const S = Y.filter((G) => G.sortable !== !1), P = [
      { value: "", label: "Sort by..." }
    ];
    return S.forEach((G) => {
      const A = G.label || G.key;
      G.key === "name" ? P.push(
        { value: `${G.key}-asc`, label: `${A} (A-Z)` },
        { value: `${G.key}-desc`, label: `${A} (Z-A)` }
      ) : G.key === "ews_score" || G.key.includes("score") ? P.push(
        { value: `${G.key}-desc`, label: `${A} (High-Low)` },
        { value: `${G.key}-asc`, label: `${A} (Low-High)` }
      ) : G.key === "age" || G.key.includes("date") || G.key.includes("time") ? P.push(
        { value: `${G.key}-desc`, label: `${A} (Oldest-Youngest)` },
        { value: `${G.key}-asc`, label: `${A} (Youngest-Oldest)` }
      ) : P.push(
        { value: `${G.key}-asc`, label: `${A} (A-Z)` },
        { value: `${G.key}-desc`, label: `${A} (Z-A)` }
      );
    }), P;
  }, []), Q = ge((Y, S) => S ? [...Y].sort((P, G) => {
    const A = P[S.key], z = G[S.key];
    if (A == null && z == null) return 0;
    if (A == null) return 1;
    if (z == null) return -1;
    const W = Number(A), X = Number(z);
    if (!isNaN(W) && !isNaN(X))
      return S.direction === "asc" ? W - X : X - W;
    const ne = String(A).toLowerCase(), oe = String(z).toLowerCase(), ue = ne.localeCompare(oe);
    return S.direction === "asc" ? ue : -ue;
  }) : Y, []), ae = ge((Y) => {
    if (!Y) {
      E((ne) => ({ ...ne, cardSortConfig: null })), q("Card sorting cleared");
      return;
    }
    const [S, P] = Y.split("-"), G = { key: S, direction: P };
    E((ne) => ({ ...ne, cardSortConfig: G }));
    const W = d[v.selectedIndex]?.columns.find((ne) => ne.key === S)?.label || S;
    q(`Cards sorted by ${W} in ${P === "asc" ? "ascending" : "descending"} order`);
  }, [d, v.selectedIndex, q]), de = ge((Y) => {
    const G = d[v.selectedIndex]?.columns.find((z) => z.key === Y.key)?.label || Y.key, A = Y.direction === "asc" ? "ascending" : "descending";
    return `${G} (${A})`;
  }, [d, v.selectedIndex]), V = ge((Y) => {
    const S = d[v.selectedIndex];
    if (o) {
      const P = v.sortConfig;
      return !P || P.length === 0 ? Y : [...Y].sort((G, A) => {
        for (const { key: z, direction: W } of P) {
          let X = G[z], ne = A[z];
          const oe = S?.columns.find((qe) => qe.key === z);
          if (oe?.cardRenderer ? (X = oe.cardRenderer(G), ne = oe.cardRenderer(A)) : oe?.render && (X = oe.render(G), ne = oe.render(A)), X == null && ne == null) continue;
          if (X == null) return W === "asc" ? -1 : 1;
          if (ne == null) return W === "asc" ? 1 : -1;
          const ue = Number(X), he = Number(ne);
          if (!isNaN(ue) && !isNaN(he)) {
            const qe = ue - he;
            if (qe !== 0) return W === "asc" ? qe : -qe;
            continue;
          }
          const me = String(X).toLowerCase(), ve = String(ne).toLowerCase(), Se = me.localeCompare(ve);
          if (Se !== 0) return W === "asc" ? Se : -Se;
        }
        return 0;
      });
    } else
      return Q(Y, w.cardSortConfig);
  }, [o, v.sortConfig, w.cardSortConfig, Q, d, v.selectedIndex]), ie = ge((Y, S) => {
    const P = R(Y), G = P[S];
    if (G) {
      G.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const A = `Focused on ${G.label}, ${G.type} ${S + 1} of ${P.length} within card`;
      q(A);
    }
  }, [R, q]), se = ge((Y) => {
    M.current[Y]?.focus();
  }, []), fe = ge(() => {
    const Y = j.current[0];
    if (!Y) return [];
    const S = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), P = Y.querySelectorAll(S);
    return Array.from(P);
  }, []), ce = ge((Y) => {
    if (Y === 0) {
      const S = j.current[0], P = S?.querySelector(".sort-controls-row");
      if (P) {
        P.setAttribute("tabindex", "-1"), P.focus();
        const A = `Sort controls group with ${fe().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        q(A);
      } else S && S.focus();
    } else {
      const S = fe(), P = Y - 1, G = S[P];
      if (G) {
        G.focus();
        const A = G.tagName.toLowerCase() === "select", z = G.tagName.toLowerCase() === "button", W = A ? "dropdown" : z ? "button" : "control", X = A ? ". Use Space key to open dropdown" : "", ne = `${W} ${P + 1} of ${S.length}${X}`;
        q(ne);
      }
    }
  }, [fe, q]), pe = ge((Y, S) => {
    const { key: P } = Y, G = d[v.selectedIndex], A = G?.data.length || 0;
    if (P === "ArrowLeft" && Y.shiftKey) {
      Y.preventDefault(), Y.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (P === "ArrowRight" && Y.shiftKey) {
      Y.preventDefault(), Y.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!w.isCardNavigationActive) {
      switch (P) {
        case "ArrowUp":
          if (Y.preventDefault(), S === 0)
            E((ne) => ({ ...ne, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), ce(0);
          else {
            const ne = K(S, "up", A, w.gridColumns);
            ne !== S && (E((oe) => ({ ...oe, focusedCardIndex: ne })), J(ne), q(`Moved to card ${ne + 1} of ${A}`));
          }
          break;
        case "ArrowDown":
          Y.preventDefault();
          const z = K(S, "down", A, w.gridColumns);
          z !== S && (E((ne) => ({ ...ne, focusedCardIndex: z })), J(z), q(`Moved to card ${z + 1} of ${A}`));
          break;
        case "ArrowLeft":
          Y.preventDefault();
          const W = K(S, "left", A, w.gridColumns);
          W !== S ? (E((ne) => ({ ...ne, focusedCardIndex: W })), J(W), q(`Moved to card ${W + 1} of ${A}`)) : v.selectedIndex > 0 && ($({ type: "SET_SELECTED_INDEX", payload: v.selectedIndex - 1 }), E((ne) => ({ ...ne, focusArea: "tabs" })), setTimeout(() => se(v.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          Y.preventDefault();
          const X = K(S, "right", A, w.gridColumns);
          X !== S ? (E((ne) => ({ ...ne, focusedCardIndex: X })), J(X), q(`Moved to card ${X + 1} of ${A}`)) : v.selectedIndex < d.length - 1 && ($({ type: "SET_SELECTED_INDEX", payload: v.selectedIndex + 1 }), E((ne) => ({ ...ne, focusArea: "tabs" })), setTimeout(() => se(v.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (G?.data[S]) {
            Y.preventDefault(), E((oe) => ({
              ...oe,
              selectedCardIndex: S
            }));
            const ne = R(S);
            ne.length > 0 ? (E((oe) => ({
              ...oe,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: ne,
              selectedCardIndex: S
              // Ensure selection is maintained
            })), q(`Card ${S + 1} selected and navigation activated. ${ne.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : q(`Card ${S + 1} selected.`);
          }
          break;
        case " ":
          if (G?.data[S]) {
            Y.preventDefault(), E((oe) => ({
              ...oe,
              selectedCardIndex: oe.selectedCardIndex === S ? -1 : S
            }));
            const ne = w.selectedCardIndex === S;
            q(`Card ${S + 1} ${ne ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (P) {
      case "ArrowUp":
      case "ArrowLeft":
        Y.preventDefault();
        const z = Math.max(0, w.focusedCardElementIndex - 1);
        E((oe) => ({ ...oe, focusedCardElementIndex: z })), ie(S, z);
        break;
      case "ArrowDown":
      case "ArrowRight":
        Y.preventDefault();
        const W = Math.min(w.cardElements.length - 1, w.focusedCardElementIndex + 1);
        E((oe) => ({ ...oe, focusedCardElementIndex: W })), ie(S, W);
        break;
      case "Enter":
        Y.preventDefault();
        const X = w.cardElements[w.focusedCardElementIndex];
        X && (X.element.click(), q(`Activated ${X.label}`));
        break;
      case " ":
        Y.preventDefault();
        const ne = w.cardElements[w.focusedCardElementIndex];
        if (ne) {
          const oe = new MouseEvent("dblclick", { bubbles: !0 });
          ne.element.dispatchEvent(oe), q(`Double-clicked ${ne.label}`);
        }
        break;
      case "Escape":
        Y.preventDefault(), E((oe) => ({
          ...oe,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => J(S), 0), q("Exited card navigation, returned to card level");
        break;
      case "Home":
        Y.preventDefault(), w.cardElements.length > 0 && (E((oe) => ({ ...oe, focusedCardElementIndex: 0 })), ie(S, 0));
        break;
      case "End":
        if (Y.preventDefault(), w.cardElements.length > 0) {
          const oe = w.cardElements.length - 1;
          E((ue) => ({ ...ue, focusedCardElementIndex: oe })), ie(S, oe);
        }
        break;
    }
  }, [w, v.selectedIndex, d, H, J, se, E, R, ie, q]), Ae = ge((Y) => {
    const S = M.current[Y], P = S?.parentElement;
    if (!S || !P) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const G = S.getBoundingClientRect(), A = P.getBoundingClientRect();
    G.left >= A.left && G.right <= A.right || (console.log("Tab not visible, scrolling into view (mobile)"), S.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Ie = ge((Y, S) => {
    if (N !== "cards")
      return;
    const { key: P } = Y;
    switch (P) {
      case "ArrowLeft":
        Y.preventDefault();
        const G = S > 0 ? S - 1 : d.length - 1;
        O(G), E((X) => ({ ...X, focusedTabIndex: G })), M.current[G]?.focus(), Ae(G);
        break;
      case "ArrowRight":
        Y.preventDefault();
        const A = S < d.length - 1 ? S + 1 : 0;
        O(A), E((X) => ({ ...X, focusedTabIndex: A })), M.current[A]?.focus(), Ae(A);
        break;
      case "ArrowDown":
        Y.preventDefault();
        const z = d[v.selectedIndex];
        z && z.columns && z.columns.length > 0 ? (E((X) => ({
          ...X,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), ce(0)) : (E((X) => ({
          ...X,
          focusArea: "cards",
          focusedCardIndex: 0
        })), J(0));
        break;
      case "Home":
        Y.preventDefault(), O(0), E((X) => ({ ...X, focusedTabIndex: 0 })), M.current[0]?.focus(), Ae(0);
        break;
      case "End":
        Y.preventDefault();
        const W = d.length - 1;
        O(W), E((X) => ({ ...X, focusedTabIndex: W })), M.current[W]?.focus(), Ae(W);
        break;
      case "Enter":
      case " ":
        Y.preventDefault(), O(S);
        break;
    }
  }, [d.length, O, N, J, E, Ae]), Ce = ge((Y, S) => {
    if (N !== "cards")
      return;
    const { key: P } = Y, G = d[v.selectedIndex];
    if (S === 0 && !w.isSortControlsActive) {
      switch (P) {
        case "ArrowUp":
          Y.preventDefault(), E((z) => ({
            ...z,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), se(v.selectedIndex);
          break;
        case "ArrowDown":
          Y.preventDefault(), G?.data && G.data.length > 0 && (E((z) => ({
            ...z,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), J(0));
          break;
        case "Enter":
        case " ":
          Y.preventDefault();
          const A = fe();
          if (A.length > 0) {
            E((W) => ({
              ...W,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), ce(1);
            const z = `Entered sort controls navigation mode. ${A.length} controls available. Use arrow keys to navigate between controls.`;
            q(z);
          }
          break;
        case "Escape":
          Y.preventDefault(), E((z) => ({
            ...z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), se(v.selectedIndex);
          break;
      }
      return;
    }
    if (w.isSortControlsActive) {
      const z = fe().length;
      switch (P) {
        case "ArrowLeft":
          Y.preventDefault();
          const W = w.focusedSortControlIndex > 1 ? w.focusedSortControlIndex - 1 : z;
          E((ne) => ({ ...ne, focusedSortControlIndex: W })), ce(W);
          break;
        case "ArrowRight":
          Y.preventDefault();
          const X = w.focusedSortControlIndex < z ? w.focusedSortControlIndex + 1 : 1;
          E((ne) => ({ ...ne, focusedSortControlIndex: X })), ce(X);
          break;
        case "ArrowDown":
          if (Y.preventDefault(), w.isSortControlsActive) {
            const ne = w.focusedSortControlIndex < z ? w.focusedSortControlIndex + 1 : 1;
            E((oe) => ({ ...oe, focusedSortControlIndex: ne })), ce(ne);
          } else
            G?.data && G.data.length > 0 && (E((ne) => ({
              ...ne,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), J(0));
          break;
        case "ArrowUp":
          Y.preventDefault(), E((ne) => ({
            ...ne,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), ce(0);
          break;
        case "Escape":
          Y.preventDefault(), E((ne) => ({
            ...ne,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), ce(0);
          break;
      }
    }
  }, [N, d, v.selectedIndex, w.isSortControlsActive, w.focusedSortControlIndex, ce, se, J, E, q]);
  if (N === "cards") {
    const Y = d[v.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${D || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": p,
            "aria-describedby": `${x || ""} ${m ? `${m}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: d.map((S, P) => {
              const G = P === v.selectedIndex, A = S.disabled || I;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${S.id}`,
                  "aria-controls": `panel-${S.id}`,
                  "aria-selected": G,
                  "aria-disabled": A,
                  tabIndex: G ? 0 : -1,
                  ref: (z) => {
                    M.current[P] = z;
                  },
                  onClick: () => O(P),
                  onKeyDown: (z) => Ie(z, P),
                  disabled: A,
                  className: [
                    "aria-tabs-datagrid__tab",
                    G ? "aria-tabs-datagrid__tab--selected" : "",
                    A ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: S.label }),
                    v.tabLoadingStates[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    v.tabErrors[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                S.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      Y && Y.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          yl,
          {
            sortConfig: v.sortConfig || [],
            columns: Y.columns.map((S) => ({ key: S.key, label: S.label })),
            onSortChange: (S) => {
              $({ type: "SET_SORT", payload: S });
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
            tabIndex: w.focusArea === "sort-controls" ? 0 : -1,
            ref: (S) => {
              j.current[0] = S;
            },
            onKeyDown: (S) => Ce(S, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${Y.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  jr,
                  {
                    id: `card-sort-${Y.id}`,
                    name: `card-sort-${Y.id}`,
                    value: w.cardSortConfig ? `${w.cardSortConfig.key}-${w.cardSortConfig.direction}` : "",
                    onChange: (S) => ae(S.target.value),
                    className: "sort-select",
                    children: ee(Y.columns).map((S) => /* @__PURE__ */ r.jsx("option", { value: S.value, children: S.label }, S.value))
                  }
                )
              ] }),
              w.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  de(w.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  bt,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => ae(""),
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
          ref: k,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${Y?.label || "Data"} cards in ${w.gridRows} rows and ${w.gridColumns} columns`,
          "aria-rowcount": w.gridRows,
          "aria-colcount": w.gridColumns,
          id: `panel-${Y?.id}`,
          "aria-labelledby": `tab-${Y?.id}`,
          children: V(Y?.data || []).map((S, P) => {
            const G = w.selectedCardIndex === P, A = w.focusedCardIndex === P && w.focusArea === "cards", z = w.focusedCardIndex === P && w.focusArea === "card" && w.isCardNavigationActive, W = P === 0 && w.focusArea !== "cards", X = A || W, ne = U(P, w.gridColumns);
            if (n.cardTemplate) {
              const he = n.cardTemplate(S, Y.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": ne.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (me) => {
                        F.current[P] = me;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        G ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": ne.col + 1,
                      "aria-selected": G,
                      "aria-expanded": z,
                      "aria-description": z ? `Card navigation active. ${w.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: X ? 0 : -1,
                      onClick: () => {
                        E((me) => ({
                          ...me,
                          selectedCardIndex: me.selectedCardIndex === P ? -1 : P
                        })), H(S);
                      },
                      onKeyDown: (me) => pe(me, P),
                      onFocus: () => {
                        E((me) => me.isCardNavigationActive ? me : me.focusedCardIndex !== P || me.focusArea !== "cards" ? {
                          ...me,
                          focusedCardIndex: P,
                          focusArea: "cards"
                        } : me);
                      },
                      children: he
                    }
                  )
                },
                `card-${P}`
              );
            }
            const oe = yp(S, Y.columns, T, _), ue = [
              oe.className || "",
              G ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              A ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              z ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": ne.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      G ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": ne.col + 1,
                    "aria-selected": G,
                    "aria-expanded": z,
                    onKeyDown: (he) => {
                      he.key === "Enter" && (he.preventDefault(), E((me) => ({
                        ...me,
                        selectedCardIndex: P
                      }))), pe(he, P);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      ml,
                      {
                        ...oe,
                        ref: (he) => {
                          F.current[P] = he;
                        },
                        className: ue,
                        "aria-label": `${oe["aria-label"] || oe.heading}. ${z ? `Card navigation active with ${w.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: X ? 0 : -1,
                        onClick: () => {
                          E((he) => ({
                            ...he,
                            selectedCardIndex: he.selectedCardIndex === P ? -1 : P
                          })), H(S);
                        },
                        onKeyDown: (he) => pe(he, P),
                        onFocus: () => {
                          w.isCardNavigationActive || E((he) => he.focusedCardIndex !== P || he.focusArea !== "cards" ? {
                            ...he,
                            focusedCardIndex: P,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : he);
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
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: re,
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
  return N === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${D || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      io,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: x,
        orientation: g,
        id: m,
        disabled: I,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: c,
        ...L
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${D || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      io,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: x,
        orientation: g,
        id: m,
        disabled: I,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: c,
        ...L
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, Nl = (e) => {
  const t = lo.find((n) => n.value === e);
  return t ? t.icon : null;
}, vp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Nl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, wp = (e) => ts(e, [
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
]), Sp = {
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
  booleanRenderer: (e) => Nl(e),
  getDataId: (e) => `financial-${e.id}`
}, _p = (e) => ts(e, [
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
}, ri = (e, t) => {
  const n = kp[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
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
], oi = [
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
], si = [
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
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
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
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      vl,
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
    data: Cp,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      wl,
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
    data: Np,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Sl,
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
    data: jp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      _l,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Dp = () => {
  const [e, t] = Be("healthcare"), n = $e(() => ({
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
      ...ri("ecommerce", ai),
      data: ai
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ri("financial", oi),
      data: oi
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Mp,
      tabPanels: ts(si, [
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
      data: si
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
        bt,
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
      io,
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
}, s1 = Dp, Ml = (e) => /* @__PURE__ */ r.jsx(zi, { ...e }), i1 = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = xn.TwoThirds,
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
  ...g
}) => {
  const m = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: h,
    logo: p,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(pl, { ...s }),
    /* @__PURE__ */ r.jsx(Vi, { ...m }),
    /* @__PURE__ */ r.jsx(Ml, { className: x, ...g, children: /* @__PURE__ */ r.jsx(Oi, { size: o, children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsxs(Xn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Xt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Zi, { ...l })
  ] });
}, l1 = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = xn.TwoThirds,
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
    /* @__PURE__ */ r.jsx(pl, { ...s }),
    /* @__PURE__ */ r.jsx(Vi, { ...x }),
    /* @__PURE__ */ r.jsxs(Ml, { className: h, ...p, children: [
      c && /* @__PURE__ */ r.jsx(Jn, { ...c }),
      /* @__PURE__ */ r.jsx(Oi, { size: o, children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsxs(Xn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Xt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Zi, { ...l })
  ] });
};
function Tp(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = Z.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = Z.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return Z.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(n, String(o)) : c.delete(n), c.set(a, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Lp = ({
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
), $p = ({
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
), Hr = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ye("nhsuk-back-link", a), c = ye("nhsuk-back-link__link"), d = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
Hr.displayName = "ForwardLink";
const Ap = ({
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
  const p = `h${n}`, x = t ? Z.createElement(
    p,
    {
      style: {
        marginLeft: a ? 32 : 0,
        marginRight: a ? 32 : 0
      }
    },
    t
  ) : null, g = a ? /* @__PURE__ */ r.jsx(
    Jn,
    {
      element: "button",
      text: s,
      style: { marginRight: 16 },
      onClick: l
    }
  ) : void 0, m = h ? void 0 : /* @__PURE__ */ r.jsx(Hr, { element: "button", text: i, onClick: c });
  if (d)
    return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: d({
      item: u,
      detailActive: a,
      context: o,
      backLink: g,
      defaultHeading: x
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
                x,
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
function Ep({
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
  controlledFocusedIndex: g
}) {
  const [m, I] = Z.useState(
    () => d === "first" ? 0 : -1
  ), D = Z.useRef(0);
  Z.useEffect(() => {
    if (typeof g == "number" || m < 0 || !h?.current) return;
    const T = Array.from(
      h.current.querySelectorAll("[data-nav-item]")
    )[m];
    if (T) {
      document.activeElement !== T && T.focus(), D.current = m;
      const _ = t[m];
      u?.(_ ? n(_) : void 0, _, m);
    }
  }, [g, m, t, u, n, h]);
  const L = (C) => {
    if (p) return p(C);
    const T = c === "vertical" ? "ArrowDown" : "ArrowRight", _ = c === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (C.key === T)
      C.preventDefault(), I((y) => Math.min(t.length - 1, y + 1));
    else if (C.key === _)
      C.preventDefault(), I((y) => Math.max(0, y - 1));
    else if (C.key === "Home")
      C.preventDefault(), I(0);
    else if (C.key === "End")
      C.preventDefault(), I(t.length - 1);
    else if (C.key === "Enter" || C.key === " ") {
      C.preventDefault();
      const y = t[m];
      y && !y.disabled && l(n(y), y, m);
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
          t.map((C, T) => {
            const _ = n(C), y = _ === a;
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
                    "data-disabled": C.disabled || void 0,
                    disabled: C.disabled,
                    onClick: () => !C.disabled && l(_, C, T),
                    children: [
                      C.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: C.icon }),
                      /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: C.label }),
                      C.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: C.description }),
                      i?.(C),
                      C.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: C.badge })
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
  const N = "nsv-nav-instructions", b = Z.useMemo(() => Z.memo(
    ({
      item: C,
      idx: T,
      selected: _,
      focused: y
    }) => {
      const v = n(C), $ = C.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: y ? 0 : -1,
        onClick: () => {
          D.current = T, l(v, C, T);
        },
        onKeyDown: (M) => {
          (M.key === "Enter" || M.key === " ") && (M.preventDefault(), D.current = T, l(v, C, T));
        }
      };
      return /* @__PURE__ */ r.jsxs(
        "li",
        {
          id: String(v),
          "data-nav-item": !0,
          className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
          role: "option",
          "aria-selected": _,
          "aria-current": _ ? "true" : void 0,
          "data-selected": _ || void 0,
          "data-disabled": C.disabled || void 0,
          ...$,
          children: [
            C.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: C.icon }),
            /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: C.label }),
              C.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: C.description }),
              i?.(C)
            ] }),
            C.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: C.badge })
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
        onKeyDown: L,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": N,
        "aria-activedescendant": a ? String(a) : void 0,
        children: [
          t.map((C, T) => /* @__PURE__ */ r.jsx(
            b,
            {
              item: C,
              idx: T,
              selected: n(C) === a,
              focused: /* @__PURE__ */ (() => {
                const _ = typeof g == "number" ? g : m;
                return T === _ || _ === -1 && T === 0 && d === "first";
              })(),
              "data-just-selected": n(C) === f ? "true" : void 0
            },
            String(n(C))
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
        id: N,
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
function ii() {
  return typeof window > "u" ? Cn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function ns() {
  const [e, t] = Z.useState(ii());
  Z.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ii());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = Z.useCallback((s) => e >= Cn[s], [e]), a = Z.useCallback((s) => e < Cn[s], [e]), o = Z.useCallback((s, i) => e >= Cn[s] && e < Cn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Cn
  };
}
function c1(e) {
  const { width: t, values: n } = ns();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Pp(e, t, n) {
  const { up: a } = ns(), [o, s] = Z.useState(!1);
  Z.useEffect(() => s(!0), []);
  const i = o && a("medium"), l = o && a("xlarge");
  let c;
  return e ? c = e : i ? c = "two-column" : c = "list", !e && t && n && l && (c = "three-column"), { effectiveLayout: c, hydrated: o, isAtLeastMedium: i, isAtLeastXlarge: l };
}
function Fp(e) {
  const {
    enabled: t,
    isAtLeastMedium: n,
    initiallyCollapsed: a,
    persist: o,
    storageKey: s,
    urlParam: i,
    onChange: l
  } = e, c = Z.useMemo(() => {
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
  }, [o, a, s, i]), [d, u] = Z.useState(c);
  Z.useEffect(() => {
    l?.(d);
  }, [d, l]);
  const f = Z.useCallback(() => {
    t && n && u((h) => !h);
  }, [t, n]);
  return Z.useEffect(() => {
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
function Rp(e) {
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
    className: g,
    getId: m = (xe) => xe.id,
    orientation: I = "vertical",
    autoEnableThirdColumn: D = !0,
    onDrillChange: L,
    navigationInstructions: N = "Use arrow keys to navigate, Enter to open.",
    initialFocus: b = "first",
    skipFocusOnSelect: C = !1,
    skipAnnouncements: T = !1,
    onFocusChange: _,
    syncUrl: y = !1,
    urlParamSelected: v = "nsv",
    urlParamDrill: $ = "nsvDrill",
    urlSyncDebounceMs: M = 0,
    lazySecondary: F = !1,
    navFooter: j,
    collapsibleNav: k = !1,
    navInitiallyCollapsed: w = !1,
    onNavCollapseChange: E,
    collapseToggleLabelShow: te = "Show navigation",
    collapseToggleLabelHide: U = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: K,
    persistNavCollapsed: O,
    navCollapsedStorageKey: H = "nsvCollapsed",
    navCollapsedUrlParam: J = "nsvCollapsed",
    autoContentHeader: R,
    contentHeaderLevel: re = 2,
    renderContentHeader: q,
    contentSubheader: ee,
    secondarySubheader: Q
  } = e, { effectiveLayout: ae, hydrated: de, isAtLeastMedium: V } = Pp(
    c,
    D,
    !!l
  ), ie = Tp({
    enabled: y,
    paramSelected: v,
    paramDrill: $
  }), [se, fe] = Z.useState(
    () => ie.selectedId !== void 0 ? ie.selectedId : a
  ), ce = n !== void 0 ? n : se, pe = t.find((xe) => m(xe) === ce), [Ae, Ie] = Z.useState(
    void 0
  );
  Z.useEffect(() => {
    if (ce === void 0) return;
    Ie(ce);
    const xe = setTimeout(() => Ie(void 0), 220);
    return () => clearTimeout(xe);
  }, [ce]);
  const Ce = Z.useRef(null), Y = Z.useRef(null), S = Z.useRef(null), P = Z.useRef(null), [G, A] = Z.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [z, W] = Z.useState(() => "nav"), [X, ne] = Z.useState(0), oe = () => [
    P.current,
    Y.current,
    S.current
  ].filter(Boolean), ue = (xe) => {
    const Le = oe(), ze = Math.max(0, Math.min(xe, Le.length - 1));
    me(Le[ze]), ne(ze);
  }, he = Z.useCallback(
    (xe) => xe ? Array.from(xe.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ze) => !ze.hasAttribute("disabled") && ze.tabIndex !== -1
    ) : [],
    []
  ), me = Z.useCallback((xe) => {
    if (xe)
      try {
        xe.focus({ preventScroll: !0 });
      } catch {
        xe.focus();
      }
  }, []), ve = Z.useCallback(
    (xe) => {
      const Le = he(Y.current);
      if (!Le.length) {
        me(Y.current);
        return;
      }
      const ze = Math.max(0, Math.min(xe, Le.length - 1)), Je = Le[ze];
      Je.focus(), setTimeout(() => {
        document.activeElement !== Je && (Je.focus(), setTimeout(() => {
          document.activeElement !== Je && Je.click();
        }, 10));
      }, 10), A((ot) => ({ ...ot, contentIndex: ze }));
      const vt = (ot) => {
        ot.key === "Escape" && (ot.preventDefault(), ot.stopPropagation(), me(Y.current), Je.removeEventListener("keydown", vt));
      };
      Le.forEach((ot) => {
        const ct = ot._escapeHandler;
        ct && ot.removeEventListener("keydown", ct);
      }), Je._escapeHandler = vt, Je.addEventListener("keydown", vt);
    },
    [he]
  ), Se = Z.useCallback(
    (xe) => {
      const Le = he(S.current);
      if (!Le.length) {
        me(S.current);
        return;
      }
      const ze = Math.max(0, Math.min(xe, Le.length - 1)), Je = Le[ze];
      Je.focus(), setTimeout(() => {
        document.activeElement !== Je && (Je.focus(), setTimeout(() => {
          document.activeElement !== Je && Je.click();
        }, 10));
      }, 10), A((ot) => ({ ...ot, secondaryIndex: ze }));
      const vt = (ot) => {
        ot.key === "Escape" && (ot.preventDefault(), ot.stopPropagation(), me(S.current), Je.removeEventListener("keydown", vt));
      };
      Le.forEach((ot) => {
        const ct = ot._escapeHandler;
        ct && ot.removeEventListener("keydown", ct);
      }), Je._escapeHandler = vt, Je.addEventListener("keydown", vt);
    },
    [he]
  ), qe = (xe) => {
    if (xe.defaultPrevented) return;
    const Le = xe.key, ze = xe.target, Je = !!we.current && we.current.contains(ze), vt = !!Y.current && Y.current.contains(ze), ot = !!S.current && S.current.contains(ze), ct = !!S.current, hr = ze === P.current || ze === Y.current || ze === S.current, Ta = He && (ae === "list" || ae === "cards"), pr = vt && !!ze.closest(".nhs-navigation-split-view__header");
    if (z === "containers" && hr) {
      if (Le === "ArrowRight") {
        xe.preventDefault();
        const Ve = oe(), st = Math.min(Ve.length - 1, X + 1);
        ue(st);
        return;
      }
      if (Le === "ArrowLeft") {
        xe.preventDefault();
        const Ve = Math.max(0, X - 1);
        ue(Ve);
        return;
      }
      if (Le === "Home") {
        xe.preventDefault(), ue(0);
        return;
      }
      if (Le === "End") {
        xe.preventDefault(), ue(oe().length - 1);
        return;
      }
      if (Le === "Enter" || Le === " ") {
        if (xe.preventDefault(), ze === P.current) {
          if (W("nav"), we.current) {
            const Ve = Array.from(
              we.current.querySelectorAll("[data-nav-item]")
            );
            (Ve[Ze >= 0 ? Ze : 0] || Ve[0])?.focus();
          }
        } else ze === Y.current ? (W("content"), ve(G.contentIndex)) : ze === S.current && (W("secondary"), Se(G.secondaryIndex));
        return;
      }
      return;
    }
    if (Le === "Escape") {
      if (z === "content" || z === "secondary") {
        if (vt || ot) {
          if (xe.preventDefault(), W("nav"), we.current) {
            const st = Array.from(
              we.current.querySelectorAll("[data-nav-item]")
            )[Ze >= 0 ? Ze : 0];
            setTimeout(() => st?.focus(), 10);
          }
        } else if ((ze === Y.current || ze === S.current) && (xe.preventDefault(), W("nav"), we.current)) {
          const st = Array.from(
            we.current.querySelectorAll("[data-nav-item]")
          )[Ze >= 0 ? Ze : 0];
          setTimeout(() => st?.focus(), 10);
        }
      }
      return;
    }
    if (Le === "Enter" || Le === " ") {
      if (ze.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ze === Y.current && z === "content") {
        xe.preventDefault(), xe.stopPropagation(), he(Y.current).length > 0 && setTimeout(() => {
          ve(G.contentIndex);
        }, 50);
        return;
      }
      if (ze === S.current && z === "secondary") {
        xe.preventDefault(), xe.stopPropagation(), he(
          S.current
        ).length > 0 && setTimeout(() => {
          Se(G.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Ta && pr && !hr && (Le === "ArrowRight" || Le === "ArrowLeft")) {
      const Ve = he(Y.current).filter(
        (st) => st.closest(".nhs-navigation-split-view__header")
      );
      if (Ve.length > 1) {
        const st = Ve.indexOf(ze);
        if (st >= 0) {
          const fs = (st + (Le === "ArrowRight" ? 1 : -1) + Ve.length) % Ve.length;
          xe.preventDefault(), Ve[fs].focus();
          return;
        }
      }
    }
    if (Le === "ArrowRight") {
      if (Je || z === "nav") {
        xe.preventDefault(), W("content"), setTimeout(() => me(Y.current), 10);
        return;
      }
      if (vt || z === "content") {
        ct && (xe.preventDefault(), W("secondary"), setTimeout(() => me(S.current), 10));
        return;
      }
    }
    if (Le === "ArrowLeft") {
      if (ot || z === "secondary") {
        xe.preventDefault(), W("content"), setTimeout(() => me(Y.current), 10);
        return;
      }
      if (vt || z === "content") {
        if (xe.preventDefault(), W("nav"), we.current) {
          const st = Array.from(
            we.current.querySelectorAll("[data-nav-item]")
          )[Ze >= 0 ? Ze : 0];
          setTimeout(() => me(st), 10);
        }
        return;
      }
    }
    if (Le === "Home" && !Je && (xe.preventDefault(), W("nav"), we.current)) {
      const Ve = Array.from(
        we.current.querySelectorAll("[data-nav-item]")
      ), st = Ve[Ze >= 0 ? Ze : 0] || Ve[0];
      setTimeout(() => me(st), 10);
    }
    if (Le === "End") {
      const Ve = ct ? S.current : Y.current;
      Ve && !Ve.contains(ze) && (xe.preventDefault(), ct ? (W("secondary"), setTimeout(() => me(S.current), 10)) : (W("content"), setTimeout(() => me(Y.current), 10)));
    }
    if (Le === "ArrowDown" || Le === "ArrowUp") {
      if (ze === Y.current && Le === "ArrowDown") {
        xe.preventDefault(), he(Y.current).length > 0 && ve(0);
        return;
      }
      if (ze === S.current && Le === "ArrowDown") {
        xe.preventDefault(), he(
          S.current
        ).length > 0 && Se(0);
        return;
      }
      if (vt) {
        const Ve = he(Y.current);
        if (Ve.length) {
          xe.preventDefault();
          const st = Le === "ArrowDown" ? 1 : -1, Lt = (G.contentIndex + st + Ve.length) % Ve.length;
          ve(Lt);
        }
      } else if (ot) {
        const Ve = he(S.current);
        if (Ve.length) {
          xe.preventDefault();
          const st = Le === "ArrowDown" ? 1 : -1, Lt = (G.secondaryIndex + st + Ve.length) % Ve.length;
          Se(Lt);
        }
      }
    }
  }, He = !!pe && (ae === "list" || ae === "cards"), at = Z.useMemo(() => R === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : R === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : R === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: R.mobile !== void 0 ? R.mobile : !0,
    tablet: R.tablet || !1,
    desktop: R.desktop || !1
  }, [R]), ft = de && V && ae !== "three-column", le = de && ae === "three-column", Ne = !!l, be = ae === "three-column", [_e, Ge] = Z.useState(!1);
  Z.useEffect(() => {
    be && _e && Ge(!1);
  }, [be, _e]), Z.useEffect(() => {
    _e && !be && (W("secondary"), ne(2), setTimeout(() => {
      me(S.current);
    }, 50));
  }, [_e, be]), Z.useEffect(() => {
    !_e && !be && z === "secondary" && (W("content"), ne(1), setTimeout(() => {
      me(Y.current);
    }, 50));
  }, [_e, be, z]);
  const Ye = !!pe && (He && at.mobile || !He && ft && at.tablet || !He && le && at.desktop) || Ne && !be, We = He ? "mobile" : ft ? "tablet" : "desktop";
  Z.useEffect(() => {
    if (!y) return;
    const xe = ae === "three-column";
    let Le = !1;
    const ze = () => {
      Le || (ie.selectedId !== ce && ie.setSelectedId(ce), ie.drilledIn !== xe && ie.setDrilledIn(xe));
    };
    if (M && M > 0) {
      const Je = setTimeout(ze, M);
      return () => {
        Le = !0, clearTimeout(Je);
      };
    } else
      ze();
  }, [y, ie, ce, ae, M]), Z.useEffect(() => {
    if (!y) return;
    const xe = () => {
      const Le = new URLSearchParams(window.location.search), ze = Le.get(v);
      Le.get($), fe(ze === null ? void 0 : ze);
    };
    return window.addEventListener("popstate", xe), () => window.removeEventListener("popstate", xe);
  }, [
    y,
    v,
    $,
    c,
    l
  ]);
  const tt = Z.useRef(0), ke = Z.useRef(
    null
  ), Te = Z.useCallback(
    (xe, Le) => {
      xe !== ce && (n === void 0 && fe(xe), o?.(xe, Le));
    },
    [n, o, ce]
  );
  Z.useEffect(() => {
    if (!C && He && Y.current) {
      const xe = setTimeout(() => me(Y.current), 30);
      return () => clearTimeout(xe);
    }
  }, [He, ce, C]);
  const we = Z.useRef(null), [Ze, it] = Z.useState(
    () => b === "first" ? 0 : -1
  );
  Z.useEffect(() => {
    if (Ze < 0 || !we.current) return;
    const Le = Array.from(
      we.current.querySelectorAll("[data-nav-item]")
    )[Ze];
    if (Le) {
      document.activeElement !== Le && me(Le), tt.current = Ze;
      const ze = t[Ze];
      _?.(
        ze ? m(ze) : void 0,
        ze,
        Ze
      );
    }
  }, [Ze, t, _, m]);
  const jt = (xe) => {
    const Le = I === "vertical" ? "ArrowDown" : "ArrowRight", ze = I === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (xe.key === "ArrowRight" && I === "vertical") {
      xe.preventDefault(), _e ? (W("secondary"), setTimeout(() => {
        me(S.current);
      }, 10)) : (W("content"), setTimeout(() => {
        me(Y.current);
      }, 10));
      return;
    }
    if (xe.key === Le)
      xe.preventDefault(), it((Je) => Math.min(t.length - 1, Je + 1));
    else if (xe.key === ze)
      xe.preventDefault(), it((Je) => Math.max(0, Je - 1));
    else if (xe.key === "Home")
      xe.preventDefault(), it(0);
    else if (xe.key === "End")
      xe.preventDefault(), it(t.length - 1);
    else if (xe.key === "Enter" || xe.key === " ") {
      xe.preventDefault();
      const Je = t[Ze];
      Je && !Je.disabled && Te(m(Je), Je);
    } else if (xe.key.length === 1 && /[a-z0-9]/i.test(xe.key)) {
      ke.current || (ke.current = { buffer: "", last: 0 });
      const Je = Date.now(), vt = 700, ot = xe.key.toLowerCase();
      Je - ke.current.last > vt ? ke.current.buffer = ot : ke.current.buffer += ot, ke.current.last = Je;
      let ct = ke.current.buffer;
      const hr = ct.split("").every((Lt) => Lt === ct[0]), Ta = t.map(
        (Lt) => String(Lt.label || "").toLowerCase()
      );
      let pr = 0;
      Ze >= 0 && (pr = (Ze + 1) % t.length);
      let Ve;
      const st = (Lt, fs) => {
        const hs = t.length;
        for (let La = 0; La < hs; La++) {
          const $a = (pr + La) % hs;
          if (!t[$a].disabled && Ta[$a].startsWith(Lt))
            return $a;
        }
      };
      hr && ct.length > 1 ? Ve = st(ct[0]) : (Ve = st(ct), Ve === void 0 && ct.length > 1 && (Ve = st(ct[ct.length - 1]), Ve !== void 0 && ke.current && (ke.current.buffer = ct[ct.length - 1]))), Ve !== void 0 && it(Ve);
    }
  }, { collapsed: De, toggle: wt } = Fp({
    enabled: k,
    isAtLeastMedium: V,
    initiallyCollapsed: w,
    persist: O,
    storageKey: H,
    urlParam: J,
    onChange: E
  }), Ct = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    He ? "nhs-navigation-split-view--detail-active" : "",
    ae === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    k && V && De ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), _n = Z.useRef(null);
  Z.useEffect(() => {
    if (!T && _n.current) {
      const xe = pe ? `Selected ${pe.label}` : "Selection cleared";
      _n.current.textContent = xe;
    }
  }, [pe, T]), Z.useEffect(() => {
    if (!He && ce == null && we.current) {
      const Le = we.current.querySelectorAll("[data-nav-item]")[tt.current];
      me(Le);
    }
  }, [He, ce]);
  const It = ae === "three-column", [Da, nd] = Z.useState(!1);
  Z.useEffect(() => {
    It && !Da && nd(!0);
  }, [It, Da]);
  const us = Z.useRef(It);
  return Z.useEffect(() => {
    us.current !== It && (L?.(It), us.current = It);
  }, [It, L]), /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Ce,
      className: Ct,
      "aria-label": x?.rootLabel,
      "data-layout": ae,
      onKeyDown: qe,
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
                  "aria-label": x?.navigationLabel || "Items",
                  "data-collapsed": De || void 0,
                  tabIndex: 0,
                  children: [
                    k && V && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: wt,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": De ? te : U,
                        title: De ? te : U,
                        children: De ? B || /* @__PURE__ */ r.jsx($p, {}) : K || /* @__PURE__ */ r.jsx(Lp, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ r.jsx(
                      Ep,
                      {
                        layout: ae === "cards" ? "cards" : "list",
                        items: t,
                        getId: m,
                        selectedId: ce,
                        isLoading: h,
                        emptyState: p,
                        renderItemContent: s,
                        onSelect: (xe, Le, ze) => {
                          tt.current = ze, Te(xe, Le);
                        },
                        orientation: I,
                        initialFocus: b,
                        onFocusChange: _,
                        justSelectedId: Ae,
                        listRef: we,
                        onKeyDownList: jt,
                        navigationInstructions: N,
                        controlledFocusedIndex: Ze
                      }
                    ) }),
                    j && /* @__PURE__ */ r.jsx(
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
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: Y,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": x?.contentLabel || "Content",
                  "data-has-selection": !!pe || void 0,
                  tabIndex: 0,
                  style: {
                    display: _e && !be ? "none" : void 0
                  },
                  children: [
                    Ye && /* @__PURE__ */ r.jsx(
                      Ap,
                      {
                        show: Ye,
                        label: pe ? pe.label : void 0,
                        contentHeaderLevel: re,
                        detailActive: He,
                        headerContext: We,
                        backLabel: u,
                        nextLabel: f,
                        onBack: () => Te(void 0, void 0),
                        onForward: () => Ge(!0),
                        renderContentHeader: q,
                        item: pe,
                        contentSubheader: ee,
                        tertiaryInlineActive: _e
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
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
              ae === "three-column" && (!F || Da) || _e && !be ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: S,
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
                        _e && !be && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                    Jn,
                                    {
                                      element: "button",
                                      text: u,
                                      style: { marginRight: 16 },
                                      onClick: () => Ge(!1)
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
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: pe && typeof pe == "object" && "label" in pe ? pe.label : String(pe) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        pe && Q && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof Q == "function" ? Q(pe) : Q
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(pe) })
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
            ref: _n,
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
  onNavigate: n,
  renderCard: a,
  className: o,
  ariaLabel: s = "Steps"
}) {
  const i = Z.useRef(null), l = (c) => {
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
function Hp({
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
  return /* @__PURE__ */ r.jsx("div", { style: i, onClick: c, children: /* @__PURE__ */ r.jsx(hl, { labelText: o, classes: s, items: l }) });
}
function zp(e) {
  const { up: t } = ns(), [n, a] = Z.useState(!1);
  Z.useEffect(() => a(!0), []);
  const o = n && t("medium") && !t("xlarge"), s = n && t("xlarge"), i = s ? "desktop" : o ? "tablet" : "mobile", l = Z.useMemo(() => {
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
function d1(e) {
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
    getId: h = (le) => le.id,
    enableTabletGrid: p = !1,
    isStepComplete: x,
    showMobileControls: g,
    currentSectionId: m,
    defaultSectionIdForStep: I,
    onSectionChange: D
  } = e, L = typeof window < "u" && !!window.__WSV_DEBUG_FOCUS || !1, N = (...le) => {
    L && console.log("[WorkflowSplitView]", ...le);
  }, b = () => {
    if (typeof document > "u") return {};
    const le = document.activeElement, Ne = le?.getAttribute?.("role");
    return {
      activeTag: le?.tagName,
      activeId: le?.id,
      activeRole: Ne,
      activeClasses: le?.className
    };
  }, [C, T] = Be(
    a ?? (t[0] ? h(t[0]) : void 0)
  ), _ = n ?? C, y = t.findIndex((le) => h(le) === _), v = y >= 0 ? t[y] : t[0], [$, M] = Be({}), F = (le) => le ? String(h(le)) : "", j = ge((le) => {
    if (!le) return;
    try {
      const be = I?.(le);
      if (be !== void 0) return be;
    } catch {
    }
    const Ne = le.sections && le.sections[0];
    return Ne ? Ne.id : void 0;
  }, [I]), k = m ?? $[F(v)] ?? j(v), w = v && v.sections ? v.sections : void 0, E = w?.find((le) => le.id === k), te = (le) => {
    if (v) {
      const Ne = F(v);
      m === void 0 && M((be) => ({ ...be, [Ne]: le })), D?.(le, w?.find((be) => be.id === le), v);
    }
  }, U = (le) => {
    N("navigateTo", String(le)), n === void 0 && T(le);
    const Ne = t.find((be) => h(be) === le);
    Ne && o && o(le, Ne);
  }, B = u ? u({ steps: t, current: v, onNavigate: U }) : /* @__PURE__ */ r.jsx(
    Hp,
    {
      steps: t,
      currentIndex: Math.max(0, y),
      onNavigate: (le) => {
        const Ne = t[le];
        Ne && U(h(Ne));
      }
    }
  ), { hydrated: K, breakpoint: O, paneConfig: H } = zp({
    step: v,
    index: y,
    layoutForStep: s
  }), J = n !== void 0 || a !== void 0 && t.length > 0 && t[0] && a !== h(t[0]), R = Ue(null), re = Ue(null), q = Ue(null), ee = Ue(null), Q = Ue(null), ae = Ue(0), de = Ue(!1), V = Ue(!1), ie = Ue(null), [se, fe] = Be("nav"), ce = Ue("nav");
  Ke(() => {
    ce.current = se, se !== "nav" && S(!1), se !== "content" && G(!1), se !== "secondary" && z(!1);
  }, [se]);
  const [pe, Ae] = Be(0), [Ie, Ce] = Be(
    () => Math.max(0, y)
  ), [Y, S] = Be(!1), [P, G] = Be(!1), [A, z] = Be(!1), W = ge((le) => {
    if (le) {
      try {
        le.focus({ preventScroll: !0 });
      } catch {
        le.focus();
      }
      N("focusEl", { to: le.tagName, id: le.id, class: le.className });
    }
  }, []), X = ge(() => {
    const le = () => q.current;
    let Ne = 0;
    const be = () => {
      const _e = le();
      _e && document.activeElement !== _e && W(_e), Ne += 1, Ne < 6 && document.activeElement !== le() && setTimeout(be, 0);
    };
    N("focusContentSoon:start", { attempts: Ne }), be(), typeof queueMicrotask == "function" && queueMicrotask(be), requestAnimationFrame(be);
  }, [W]), ne = ge((le) => le ? Array.from(le.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
    (be) => !be.hasAttribute("disabled") && be.tabIndex !== -1
  ) : [], []), oe = () => [
    re.current,
    q.current,
    ee.current
  ].filter(Boolean), ue = (le, Ne) => {
    if (!le) return;
    const be = typeof document < "u" ? document.activeElement : null;
    if (be && le.contains(be))
      try {
        be.blur(), N("blurActiveIfInside", { label: Ne, root: le.getAttribute("aria-label") || le.tagName });
      } catch {
      }
  }, he = () => {
    const le = typeof document < "u" ? document.activeElement : null;
    if (le && re.current && re.current.contains(le))
      try {
        le.blur(), N("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
  }, me = (le) => {
    const Ne = oe(), be = Math.max(0, Math.min(le, Ne.length - 1));
    N("focusContainerByIndex", { idx: le, clamped: be }), W(Ne[be]), Ae(be);
  }, ve = ge(
    (le) => {
      let Ne = 0;
      const be = le ?? Ie, _e = () => {
        const Fe = Q.current;
        if (!Fe) return null;
        const Ye = Array.from(Fe.querySelectorAll("[data-nav-item]"));
        return Ye[be] || Ye[0] || null;
      }, Ge = () => {
        if (ce.current !== "nav") {
          N("focusNavItemSoon: abort (mode changed)", { mode: ce.current });
          return;
        }
        const Fe = _e();
        Fe && document.activeElement !== Fe && W(Fe), Ne += 1, Ne < 6 && document.activeElement !== Fe && setTimeout(Ge, 0);
      };
      N("focusNavItemSoon:start", { index: be, ...b() }), Ge(), typeof queueMicrotask == "function" && queueMicrotask(Ge), requestAnimationFrame(Ge);
    },
    [W, Ie]
  );
  Ke(() => {
    if (!K) return;
    O === "desktop" || p && O === "tablet" ? J ? (fe("nav"), Ae(0), N("init: grid preselected → mode=nav", { containerIndex: 0 })) : (fe("containers"), Ae(0), N("init: grid default → mode=containers", { containerIndex: 0 })) : (fe("nav"), N("init: non-grid → mode=nav"));
  }, [K, O, J, p]), Ke(() => () => {
    ie.current != null && (clearTimeout(ie.current), ie.current = null, N("cleanup: cleared nav bootstrap timeout"));
  }, []), Ke(() => {
    const le = Math.max(0, y);
    Ce(le), N("sync navFocusedIndex with currentIndex", { currentIndex: y, navFocusedIndex: le });
  }, [y]), Ke(() => {
    N("paneFocusMode →", se, b());
  }, [se]);
  const Se = (le) => {
    if (!(K && (O === "desktop" || p && O === "tablet"))) return;
    const be = le.key, _e = le.target, Ge = _e.tagName.toLowerCase(), Fe = Ge === "input" || Ge === "textarea" || Ge === "select", Ye = _e.getAttribute("role"), We = Ye === "textbox" || Ye === "searchbox" || Ye === "combobox", tt = _e.getAttribute("contenteditable"), ke = Fe || We || tt && tt !== "false";
    if (N("onRootKeyDown", { key: be, tag: Ge, role: Ye, isEditable: ke, paneFocusMode: se, containerIndex: pe, ...b() }), ke && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(be))
      return;
    const Te = !!Q.current && Q.current.contains(_e), we = !!q.current && q.current.contains(_e), Ze = !!ee.current && ee.current.contains(_e), it = _e === re.current || _e === q.current || _e === ee.current, jt = !!ee.current;
    if (it) {
      if (be === "ArrowLeft" && _e === q.current) {
        le.preventDefault(), N("container: ArrowLeft on content container → nav item"), fe("nav"), ue(q.current, "from-content"), ae.current = Ie, ve(Ie);
        return;
      }
      if (be === "ArrowRight" && _e === q.current && jt) {
        le.preventDefault(), N("container: ArrowRight on content container → secondary"), fe("secondary"), ue(q.current, "from-content"), G(!1), setTimeout(() => W(ee.current), 10);
        return;
      }
      if (be === "ArrowRight" && _e === re.current) {
        le.preventDefault(), N("container: ArrowRight on nav container → content"), fe("content"), ue(re.current, "from-nav"), S(!1), X();
        return;
      }
      if (be === "ArrowLeft" && _e === ee.current) {
        le.preventDefault(), N("container: ArrowLeft on secondary container → content"), fe("content"), ue(ee.current, "from-secondary"), z(!1), X();
        return;
      }
      if (be === "ArrowRight") {
        le.preventDefault(), N("container: ArrowRight → next container"), ue(_e, "container-roving"), _e === re.current && S(!1), _e === q.current && G(!1), _e === ee.current && z(!1), me(pe + 1);
        return;
      }
      if (be === "ArrowLeft") {
        le.preventDefault(), N("container: ArrowLeft → prev container"), ue(_e, "container-roving"), _e === re.current && S(!1), _e === q.current && G(!1), _e === ee.current && z(!1), me(pe - 1);
        return;
      }
      if (be === "Home") {
        le.preventDefault(), N("container: Home → first container"), ue(_e, "container-roving"), _e === re.current && S(!1), _e === q.current && G(!1), _e === ee.current && z(!1), me(0);
        return;
      }
      if (be === "End") {
        le.preventDefault(), N("container: End → last container"), ue(_e, "container-roving"), _e === re.current && S(!1), _e === q.current && G(!1), _e === ee.current && z(!1), me(oe().length - 1);
        return;
      }
      if (be === "Enter" || be === " ") {
        if (le.preventDefault(), _e === re.current)
          fe("nav"), N("container: Enter/Space on nav → focus nav item", { navFocusedIndex: Ie }), ae.current = Ie, V.current = !0, ve(Ie);
        else if (_e === q.current) {
          fe("content"), ue(q.current, "descend-content"), G(!1);
          const De = ne(q.current);
          N("container: Enter/Space on content → focus first focusable", { count: De.length }), (De[0] || q.current)?.focus();
        } else if (_e === ee.current) {
          fe("secondary"), ue(ee.current, "descend-secondary"), z(!1);
          const De = ne(ee.current);
          N("container: Enter/Space on secondary → focus first focusable", { count: De.length }), (De[0] || ee.current)?.focus();
        }
        return;
      }
    }
    if (be === "Escape") {
      if (we || Ze) {
        le.preventDefault(), fe("containers"), N("Escape: from", we ? "content" : "secondary", "→ containers (focus container)"), we && ue(q.current, "escape-ascend"), Ze && ue(ee.current, "escape-ascend"), we && setTimeout(() => W(q.current), 10), Ze && setTimeout(() => W(ee.current), 10);
        return;
      }
      if (Te) {
        le.preventDefault(), fe("containers"), N("Escape: from nav → containers (focus nav container)"), he(), W(re.current);
        return;
      }
      if (it) {
        le.preventDefault(), fe("containers"), N("Escape: on container (stay in containers)");
        return;
      }
    }
    if (be === "Enter" || be === " ") {
      if (_e === q.current && se === "content") {
        le.preventDefault(), ue(q.current, "descend-content");
        const De = ne(q.current);
        N("Enter/Space on content container in content mode"), (De[0] || q.current)?.focus();
        return;
      }
      if (_e === ee.current && se === "secondary") {
        le.preventDefault(), ue(ee.current, "descend-secondary");
        const De = ne(ee.current);
        N("Enter/Space on secondary container in secondary mode"), (De[0] || ee.current)?.focus();
        return;
      }
    }
    if (be === "ArrowRight") {
      if (Te || se === "nav") {
        le.preventDefault(), fe("content"), N("ArrowRight: from nav → content (focus content)"), ue(re.current, "from-nav"), S(!1), X();
        return;
      }
      if (we || se === "content") {
        jt && (le.preventDefault(), fe("secondary"), N("ArrowRight: from content → secondary (focus secondary)"), ue(q.current, "from-content"), G(!1), setTimeout(() => W(ee.current), 10));
        return;
      }
    }
    if (be === "ArrowLeft") {
      if (Ze || se === "secondary") {
        le.preventDefault(), N("ArrowLeft: from secondary → content (focus content)"), ue(ee.current, "from-secondary"), z(!1), X();
        return;
      }
      if (we || se === "content") {
        le.preventDefault(), fe("nav"), N("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex: Ie }), ae.current = Ie, ue(q.current, "from-content"), G(!1), ve(Ie);
        return;
      }
    }
    if ((be === "Enter" || be === " ") && (Te || se === "nav")) {
      le.preventDefault();
      const De = Q.current, wt = De ? Array.from(De.querySelectorAll("[data-nav-item]")) : [];
      let Ct = ae.current ?? Ie;
      if (wt.length) {
        const _n = document.activeElement, It = _n ? wt.indexOf(_n) : -1;
        It >= 0 && (Ct = It);
      }
      Ct = Math.max(0, Math.min(Ct, wt.length - 1)), Ce(Ct), ae.current = Ct, N("Root: Enter/Space activate from nav context", { idx: Ct }), U(h(t[Ct])), fe("content"), ce.current = "content", de.current = !0, he(), X();
      return;
    }
  }, qe = () => {
    const le = () => {
      de.current = !1, V.current = !1;
    }, Ne = (Fe) => {
      if (!Q.current) return;
      const Ye = Array.from(Q.current.querySelectorAll("[data-nav-item]"));
      if (Ye.length) {
        if (Fe.key === "ArrowDown") {
          Fe.preventDefault(), Fe.stopPropagation(), V.current = !1, fe("nav");
          const We = ae.current ?? Ie, tt = Math.min(Ye.length - 1, We + 1);
          Ce(tt), ae.current = tt, ve(tt), N("PrimaryNav: ArrowDown", { from: We, to: tt });
        } else if (Fe.key === "ArrowUp") {
          Fe.preventDefault(), Fe.stopPropagation(), V.current = !1, fe("nav");
          const We = ae.current ?? Ie, tt = Math.max(0, We - 1);
          Ce(tt), ae.current = tt, ve(tt), N("PrimaryNav: ArrowUp", { from: We, to: tt });
        } else if (Fe.key === "Home") {
          Fe.preventDefault(), Fe.stopPropagation(), V.current = !1;
          const We = 0;
          Ce(We), ae.current = We, ve(We), N("PrimaryNav: Home", { to: We });
        } else if (Fe.key === "End") {
          Fe.preventDefault(), Fe.stopPropagation(), V.current = !1;
          const We = Ye.length - 1;
          Ce(We), ae.current = We, ve(We), N("PrimaryNav: End", { to: We });
        }
      }
    }, be = (Fe) => {
    }, _e = (Fe) => {
      if (Fe.key !== "Enter" && Fe.key !== " " || !Q.current) return;
      const Ye = Array.from(Q.current.querySelectorAll("[data-nav-item]"));
      if (!Ye.length) return;
      Fe.preventDefault();
      let We = -1;
      const ke = Fe.target?.closest?.("[data-nav-item]");
      ke && (We = Ye.indexOf(ke)), We < 0 && (We = ae.current ?? Ie), We = Math.max(0, Math.min(We, Ye.length - 1)), Ce(We), ae.current = We, N("PrimaryNav: Enter/Space activate (capture)", { idx: We }), U(h(t[We])), fe("content"), ce.current = "content", de.current = !0, ie.current != null && (clearTimeout(ie.current), ie.current = null), he(), X();
    }, Ge = (Fe) => {
      if (Fe.defaultPrevented) return;
      de.current = !1;
      const Ye = Fe.target;
      if (!Ye) return;
      const We = Ye.closest("[data-nav-item]");
      if (!We || !Q.current || !Q.current.contains(We)) return;
      const ke = Array.from(Q.current.querySelectorAll("[data-nav-item]")).indexOf(We);
      ke < 0 || (Ce(ke), ae.current = ke, N("PrimaryNav: click delegate activate", { idx: ke }), U(h(t[ke])), fe("content"), he(), ie.current != null && (clearTimeout(ie.current), ie.current = null), X());
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: Q,
        className: "nhsfdp-primary-nav",
        role: "listbox",
        "aria-activedescendant": String(h(t[Math.max(0, Ie)])),
        onKeyDownCapture: _e,
        onKeyDown: Ne,
        onKeyUp: be,
        onPointerDown: le,
        onMouseDown: le,
        onClick: Ge,
        children: t.map((Fe, Ye) => {
          const We = h(Fe), tt = Ye === y, ke = se === "nav" && Ye === Ie;
          return /* @__PURE__ */ r.jsx("li", { id: String(We), role: "option", "aria-selected": tt, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              "data-nav-item": !0,
              tabIndex: ke ? 0 : -1,
              type: "button",
              className: "nhsfdp-primary-nav__item" + (tt ? " is-current" : "") + (ke ? " is-focused" : ""),
              "aria-current": tt ? "step" : void 0,
              onPointerDown: le,
              onMouseDown: le,
              onKeyDown: (Te) => {
                if (Te.key === "Enter" || Te.key === " ") {
                  if (Te.preventDefault(), V.current) {
                    V.current = !1;
                    return;
                  }
                  ae.current = Ye, de.current = !0, N("NavItem: onKeyDown activate", { i: Ye, id: String(h(t[Ye])) }), U(h(t[Ye])), fe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), he(), X();
                }
              },
              onKeyUp: (Te) => {
                if (Te.key === "Enter" || Te.key === " ") {
                  if (V.current) {
                    V.current = !1;
                    return;
                  }
                  ae.current = Ye, N("NavItem: onKeyUp activate (fallback)", { i: Ye, id: String(h(t[Ye])) }), U(h(t[Ye])), fe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), he(), X();
                }
              },
              onClick: (Te) => {
                if (de.current) {
                  de.current = !1, Te.preventDefault(), Te.stopPropagation(), N("NavItem: ignored synthetic click after keyboard activation", { i: Ye });
                  return;
                }
                Ce(Ye), ae.current = Ye, N("NavItem: onClick select", { i: Ye, id: String(We) }), U(We), fe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), he(), X();
              },
              children: Fe.label
            }
          ) }, String(We));
        })
      }
    );
  }, He = () => {
    const le = Math.max(0, y), Ne = le > 0, be = le < t.length - 1, _e = g ? g(v) : x ? x(v) : !0;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
      O === "tablet" ? B : null,
      _e && /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        Ne ? /* @__PURE__ */ r.jsx(
          Jn,
          {
            element: "button",
            text: "Back",
            onClick: () => {
              const Ge = t[le - 1];
              Ge && U(h(Ge));
            }
          }
        ) : (
          // Keep space to avoid layout shift when back is not available
          /* @__PURE__ */ r.jsx(Jn, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        be ? /* @__PURE__ */ r.jsx(
          Hr,
          {
            element: "button",
            text: "Next",
            onClick: () => {
              const Ge = t[le + 1];
              Ge && U(h(Ge));
            }
          }
        ) : (
          // Keep space to avoid layout shift when next is not available
          /* @__PURE__ */ r.jsx(Hr, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ r.jsx(
        Bp,
        {
          steps: t,
          currentIndex: le,
          onNavigate: (Ge) => {
            const Fe = t[Ge];
            Fe && U(h(Fe));
          },
          renderCard: (Ge, Fe, Ye) => i ? i(Ge) : l(Ge)
        }
      )
    ] });
  }, at = (le) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsfdp-workflow-grid panes-" + (le.panes ?? 2),
      onKeyDown: Se,
      ref: R,
      role: "grid",
      "aria-rowcount": 1,
      "aria-colcount": (le.showPrimaryNav ? 1 : 0) + 1 + (le.showSecondaryNav ? 1 : 0),
      "aria-label": "Workflow layout",
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-body", role: "row", children: [
        le.showPrimaryNav && /* @__PURE__ */ r.jsx(
          "aside",
          {
            ref: re,
            className: "nhsfdp-pane primary-nav" + (Y ? " is-active-pane" : ""),
            "aria-label": "Primary navigation",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (Ne) => {
              Ne.target === re.current && S(!0);
            },
            onBlur: (Ne) => {
              Ne.target === re.current && S(!1);
            },
            children: /* @__PURE__ */ r.jsx("section", { role: "complementary", "aria-label": "Primary navigation", children: /* @__PURE__ */ r.jsx(qe, {}) })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "main",
          {
            ref: q,
            className: "nhsfdp-pane content" + (P ? " is-active-pane" : ""),
            "aria-live": "polite",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (Ne) => {
              Ne.target === q.current && G(!0);
            },
            onBlur: (Ne) => {
              Ne.target === q.current && G(!1);
            },
            children: [
              B,
              /* @__PURE__ */ r.jsx("div", { role: "main", children: l(v, E) })
            ]
          }
        ),
        (() => {
          const Ne = d ? d(v, w, E, (Ge) => te(Ge)) : w && w.length > 0 ? /* @__PURE__ */ r.jsx("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: w.map((Ge) => {
            const Fe = k === Ge.id;
            return /* @__PURE__ */ r.jsx("li", { role: "option", "aria-selected": Fe, children: /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                className: "nhsfdp-secondary-nav__item" + (Fe ? " is-current" : ""),
                "data-sec-item": !0,
                onClick: () => te(Ge.id),
                children: Ge.label
              }
            ) }, String(Ge.id));
          }) }) : void 0, be = c?.(v, E);
          return le.showSecondaryNav && (Ne || be) ? /* @__PURE__ */ r.jsx(
            "aside",
            {
              ref: ee,
              className: "nhsfdp-pane secondary-nav" + (A ? " is-active-pane" : ""),
              "aria-label": "Secondary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (Ge) => {
                Ge.target === ee.current && z(!0);
              },
              onBlur: (Ge) => {
                Ge.target === ee.current && z(!1);
              },
              children: /* @__PURE__ */ r.jsxs("section", { role: "complementary", "aria-label": "Secondary navigation", children: [
                Ne,
                be
              ] })
            }
          ) : null;
        })()
      ] })
    }
  );
  return K ? O === "mobile" || !p && O === "tablet" || (H.panes ?? 1) === 1 ? /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: He() }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: at(H) }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ r.jsxs("main", { className: "nhsfdp-pane content", children: [
    u ? u({ steps: t, current: v, onNavigate: U }) : null,
    v ? l(v, v?.sections?.find((le) => le.id === (I?.(v) ?? v?.sections?.[0]?.id))) : null
  ] }) }) });
}
const Op = typeof window < "u" && window.document ? Z.useLayoutEffect : Z.useEffect, li = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Up = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, p = (g) => {
    h && (g.preventDefault(), a?.(e));
  }, x = h ? {
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
          h && /* @__PURE__ */ r.jsx("span", { className: ye("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Wp = rd(({
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
  const [u, f] = Be(() => /* @__PURE__ */ new Set()), [h, p] = Be(() => /* @__PURE__ */ new Set()), x = Ue(/* @__PURE__ */ new Set()), g = ge((M) => u.has(M), [u]), m = ge((M) => {
    f((F) => {
      const j = new Set(F);
      return j.has(M.id) ? (j.delete(M.id), p((k) => {
        const w = new Set(k);
        return w.add(M.id), w;
      }), setTimeout(() => p((k) => {
        const w = new Set(k);
        return w.delete(M.id), w;
      }), 240), l?.(M.id, !1)) : (j.add(M.id), l?.(M.id, !0)), j;
    });
  }, [l]);
  Op(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const M = [];
    if (u.forEach((w) => {
      x.current.has(w) || M.push(w);
    }), x.current = new Set(u), !M.length) return;
    const F = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, j = M.map((w) => `.nhsuk-product-roadmap__inline-children[data-parent="${w}"] .nhsuk-product-roadmap__inline-child`).join(","), k = Array.from(document.querySelectorAll(j));
    if (k.length) {
      if (F) {
        k.forEach((w) => {
          w.style.opacity = "1", w.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((w) => {
        (w.gsap || w.default || w).to(k, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        k.forEach((w) => {
          w.style.opacity = "1", w.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, i]);
  const I = ge(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), D = ye("nhsuk-product-roadmap", o), L = li(n, 120, 1200, 400), N = li(a, 1, 6, 2), b = $e(() => e.map((M) => /* @__PURE__ */ new Date(M + " 01")), [e]), C = $e(() => {
    if (b.length === 0) {
      const j = /* @__PURE__ */ new Date();
      return [j, j];
    }
    const M = new Date(b[0]), F = tr.offset(new Date(b[b.length - 1]), 1);
    return [M, F];
  }, [b]), T = $e(() => es().domain(C).range([0, b.length * L]), [C, b.length, L]), _ = ge((M) => {
    if (M.startDate) {
      const U = new Date(M.startDate), B = new Date(M.endDate ?? M.startDate);
      B < U && B.setTime(U.getTime());
      const K = T(U), O = tr.offset(new Date(B), 1);
      let H = T(O);
      Number.isFinite(H) || (H = K + L);
      const J = Math.max(L * 0.25, H - K), R = K / L, re = J / L;
      return { ...M, _pxLeft: K, _pxWidth: J, _startFraction: R, _spanColumns: re };
    }
    const F = M.date ?? 1, j = M.dateOffset ?? 0, k = M.length ?? 1, w = M.partialLength ?? 1, E = F - 1 + j, te = k - 1 + w;
    return { ...M, _pxLeft: E * L, _pxWidth: te * L, _startFraction: E, _spanColumns: te };
  }, [T, L]), y = $e(() => t.map((M) => {
    const j = M.roadmapItems.map((w) => {
      const E = !w.childItems && w.children ? { ...w, childItems: w.children } : { ...w };
      return _(E);
    }).sort((w, E) => w._pxLeft !== E._pxLeft ? w._pxLeft - E._pxLeft : E._pxWidth - w._pxWidth), k = [];
    return j.forEach((w) => {
      const E = w._pxLeft, te = w._pxLeft + w._pxWidth;
      let U = k.findIndex((B) => B <= E);
      U === -1 && (U = k.length, k.push(0)), k[U] = te, w.verticalPosition = U + 1;
    }), { ...M, roadmapItems: j, _laneCount: k.length };
  }), [t, _]), v = $e(() => y.map((M) => M._laneCount || 1), [y]), $ = $e(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: D,
      style: { "--column-width": `${L}px`, gridTemplateColumns: $ },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": y.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((M, F) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": F + 2, children: M }, `${M}-${F}`))
        ] }),
        y.map((M, F) => {
          const j = F + 2, k = v[F];
          let w, E = 0, te = [];
          i && c === "inline" && (te = M.roadmapItems.filter((O) => g(O.id) && O.childItems && O.childItems.length).map((O) => ({ id: O.id, lane: O.verticalPosition || 1, count: O.childItems.length })).sort((O, H) => O.lane - H.lane), E = te.reduce((O, H) => O + H.count, 0));
          const U = k + E;
          w = `calc((${U} * var(--roadmap-item-block-height)) + (max(0, ${U} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let K = 0;
          return te.forEach((O) => {
            K += O.count, B[O.lane + 1] = K;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": j, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: M.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: w }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: M.roadmapItems.map((O, H) => {
              const J = (O.verticalPosition || 1) - 1, R = te.filter((Q) => Q.lane - 1 < J).reduce((Q, ae) => Q + ae.count, 0), re = J + R, q = g(O.id), ee = h.has(O.id);
              return /* @__PURE__ */ r.jsxs(Xe.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Up, { item: O, maxLines: N, enableDrilldown: i, onExpand: m, isActive: q, topLaneIndex: re, laneOffset: R }),
                i && c === "inline" && (q || ee) && O.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": O.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${O.title} child tasks`, children: O.childItems.map((Q, ae) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let V = O._pxLeft, ie = O._pxWidth;
                  if (Q.startDate) {
                    const ce = new Date(Q.startDate);
                    let pe = Q.endDate ? new Date(Q.endDate) : new Date(ce);
                    pe < ce && (pe = new Date(ce));
                    const Ae = new Date(pe);
                    Ae.setDate(Ae.getDate() + 1);
                    const Ie = T(ce);
                    let Ce = T(Ae);
                    (!Number.isFinite(Ce) || Ce <= Ie) && (Ce = Ie + 6), V = Ie, ie = Math.max(6, Ce - Ie);
                  }
                  const fe = re + 1 + ae;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ye("nhsuk-product-roadmap__inline-child", Q.status && `nhsuk-product-roadmap__inline-child--status-${Q.status}`, !q && ee && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${V}px`, width: `${ie}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${fe})`, height: de, opacity: q ? 0 : void 0, transform: q ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Q.title })
                      ]
                    },
                    Q.id ?? ae
                  );
                }) })
              ] }, O.id ?? H);
            }) }) })
          ] }, `${M.heading}-${F}`);
        }),
        i && c === "overlay" && u.size === 1 && (() => {
          const M = Array.from(u)[0], F = t.flatMap((j) => j.roadmapItems).find((j) => j.id === M);
          return !F || !F.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${F.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: F.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: I, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((j, k) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: j.title }),
                j.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: j.content })
              ] }, j.id ?? k)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: I, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Wp.displayName = "ProductRoadmap";
function mt(e) {
  return function() {
    return e;
  };
}
const co = Math.PI, uo = 2 * co, dn = 1e-6, Gp = uo - dn;
function Il(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Yp(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Il;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class Vp {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Il : Yp(t);
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
    else if (h > dn) if (!(Math.abs(f * c - d * u) > dn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = a - i, x = o - l, g = c * c + d * d, m = p * p + x * x, I = Math.sqrt(g), D = Math.sqrt(h), L = s * Math.tan((co - Math.acos((g + h - m) / (2 * I * D))) / 2), N = L / D, b = L / I;
      Math.abs(N - 1) > dn && this._append`L${t + N * u},${n + N * f}`, this._append`A${s},${s},0,0,${+(f * p > u * x)},${this._x1 = t + b * c},${this._y1 = n + b * d}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), c = a * Math.sin(o), d = t + l, u = n + c, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > dn || Math.abs(this._y1 - u) > dn) && this._append`L${d},${u}`, a && (h < 0 && (h = h % uo + uo), h > Gp ? this._append`A${a},${a},0,1,${f},${t - l},${n - c}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > dn && this._append`A${a},${a},0,${+(h >= co)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Dl(e) {
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
  var n = mt(!0), a = null, o = $l, s = null, i = Dl(l);
  e = typeof e == "function" ? e : e === void 0 ? Al : mt(e), t = typeof t == "function" ? t : t === void 0 ? El : mt(t);
  function l(c) {
    var d, u = (c = Tl(c)).length, f, h = !1, p;
    for (a == null && (s = o(p = i())), d = 0; d <= u; ++d)
      !(d < u && n(f = c[d], d, c)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, d, c), +t(f, d, c));
    if (p) return s = null, p + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : mt(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : mt(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : mt(!!c), l) : n;
  }, l.curve = function(c) {
    return arguments.length ? (o = c, a != null && (s = o(a)), l) : o;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? a = s = null : s = o(a = c), l) : a;
  }, l;
}
function fo(e, t, n) {
  var a = null, o = mt(!0), s = null, i = $l, l = null, c = Dl(d);
  e = typeof e == "function" ? e : e === void 0 ? Al : mt(+e), t = typeof t == "function" ? t : mt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? El : mt(+n);
  function d(f) {
    var h, p, x, g = (f = Tl(f)).length, m, I = !1, D, L = new Array(g), N = new Array(g);
    for (s == null && (l = i(D = c())), h = 0; h <= g; ++h) {
      if (!(h < g && o(m = f[h], h, f)) === I)
        if (I = !I)
          p = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), x = h - 1; x >= p; --x)
            l.point(L[x], N[x]);
          l.lineEnd(), l.areaEnd();
        }
      I && (L[h] = +e(m, h, f), N[h] = +t(m, h, f), l.point(a ? +a(m, h, f) : L[h], n ? +n(m, h, f) : N[h]));
    }
    if (D) return l = null, D + "" || null;
  }
  function u() {
    return Pl().defined(o).curve(i).context(s);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : mt(+f), a = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : mt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : mt(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : mt(+f), n = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : mt(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : mt(+f), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(n);
  }, d.lineX1 = function() {
    return u().x(a).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : mt(!!f), d) : o;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), d) : s;
  }, d;
}
function ci(e) {
  return e < 0 ? -1 : 1;
}
function di(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (ci(s) + ci(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function ui(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Wa(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * n, s, i);
}
function zr(e) {
  this._context = e;
}
zr.prototype = {
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
        Wa(this, this._t0, ui(this, this._t0));
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
          this._point = 3, Wa(this, ui(this, n = di(this, e, t)), n);
          break;
        default:
          Wa(this, this._t0, n = di(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(zr.prototype).point = function(e, t) {
  zr.prototype.point.call(this, t, e);
};
function Or(e) {
  return new zr(e);
}
function Zp(e, t, n) {
  const a = qi(e, t);
  return es().domain(a).range(n);
}
function fi(e, t, n) {
  const [a, o] = qi(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Ar().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const c = o - a, d = (c > 0 ? c : a) * 0.1;
    i = Math.max(0, a - d), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Ar().domain([i, l]).nice().range(n);
}
function ho(e, t, n, a) {
  const o = Pl().x(t).y(n);
  return a?.smooth !== !1 && o.curve(Or), o(e) ?? "";
}
function qp(e = {}) {
  const t = Z.useRef(null), n = Z.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = Z.useState({ width: 0, height: 0 });
  Z.useLayoutEffect(() => {
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
const Fl = Z.createContext(null);
function cn() {
  return Z.useContext(Fl);
}
const Jp = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = qp(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: c, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(Fl.Provider, { value: l, children: o }) });
}, rs = Z.createContext(null), Sn = () => Z.useContext(rs), Xp = ({
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
  const f = cn(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, x = Z.useMemo(() => e.flatMap((b) => b.data), [e]), g = Z.useCallback(
    (b) => {
      if (a) return a(b);
      const C = b.x;
      return C instanceof Date ? C : new Date(C);
    },
    [a]
  ), m = c ?? 6, I = d ?? 6, D = Z.useMemo(
    () => Zp(x, g, [
      m,
      Math.max(0, h - m)
    ]),
    [x, g, h, m]
  ), L = Z.useMemo(() => {
    const b = Math.max(0, u ?? 0), C = Math.max(0, p - (I + b));
    if (l) {
      const T = fi([], (_) => _.y, [
        C,
        I
      ]);
      return T.domain(l), T;
    }
    return fi(x, (T) => T.y, [C, I]);
  }, [x, p, l, I, u]), N = Z.useMemo(
    () => ({
      xScale: D,
      yScale: L,
      getXTicks: (b = s) => D.ticks(b),
      getYTicks: (b = i) => L.ticks(b)
    }),
    [D, L, s, i]
  );
  return /* @__PURE__ */ r.jsx(rs.Provider, { value: N, children: o });
}, kr = 16, Cr = 6, Kp = 16, Qp = 4, em = 6, tm = 3, nm = void 0, hi = ({
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
  const g = Sn(), m = cn(), I = t || (e === "x" ? g?.xScale : g?.yScale), D = n ?? (e === "x" ? 6 : 5), L = typeof o == "function", N = Z.useMemo(() => {
    if (L || !p) return;
    const T = (_) => new Intl.DateTimeFormat(void 0, _);
    switch (p) {
      case "dayShortMonth":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return `${y.getDate()}
${T({ month: "short" }).format(y)}`;
        };
      case "dayShortMonthYear":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return `${y.getDate()}
${T({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "shortMonth":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return T({ month: "short" }).format(y);
        };
      case "shortMonthYear":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return `${T({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "hourMinute":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return T({ hour: "2-digit", minute: "2-digit" }).format(y);
        };
      default:
        return;
    }
  }, [L, p]);
  let b = L ? o : N || ((T) => String(T));
  const C = Z.useMemo(() => a && Array.isArray(a) ? a : I ? typeof I.ticks == "function" ? I.ticks(D) : I.domain ? I.domain() : [] : [], [I, D, a]);
  if (e === "x" && !L && !p && C.length && C.every((T) => T instanceof Date)) {
    const T = C[0], _ = C[C.length - 1], y = _.getTime() - T.getTime(), v = 24 * 3600 * 1e3, $ = 365 * v, M = T.getFullYear() === _.getFullYear(), F = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (y < 2 * v) {
      const j = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      b = (k) => j.format(k);
    } else if (y < 32 * v)
      b = (j) => {
        const k = j;
        return `${k.getDate()} ${F.format(k)}`;
      };
    else if (y < $ && M)
      b = (j) => F.format(j);
    else if (y < 2 * $) {
      const j = /* @__PURE__ */ new Set();
      b = (k) => {
        const w = k, E = w.getMonth();
        return j.has(E) || j.add(E), `${F.format(w)} ${w.getFullYear()}`;
      };
    } else
      b = (j) => String(j.getFullYear());
  }
  if (!I || !m) return null;
  if (e === "x") {
    const T = i ?? m.innerHeight, _ = typeof I.bandwidth == "function", y = _ ? I.bandwidth() : 0, v = (F) => {
      const j = I(F);
      return _ ? j + y / 2 : j;
    };
    let $ = c ?? 0;
    if (u && c == null) {
      const F = C.map(
        (k) => b(k).replace(/\n.*/g, "")
      ), j = F.length ? F.reduce((k, w) => k + w.length, 0) / F.length : 0;
      $ = Math.max(12, Math.round(j * 6 + 4));
    }
    const M = Z.useMemo(() => {
      if (a && Array.isArray(a) || $ <= 0) return C;
      const F = [];
      let j = -1 / 0;
      for (const k of C) {
        const w = v(k);
        w - j >= $ && (F.push(k), j = w);
      }
      return F;
    }, [
      C,
      I,
      $,
      a,
      _,
      y
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${T})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          M.map((F, j) => {
            const k = b(F), w = d && k.length > d ? k.slice(0, Math.max(1, d - 1)) + "…" : k, E = h ? w.split(/\n/) : [w.replace(/\n/g, " ")], te = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${v(F)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: te,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        E.map((U, B) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: B === 0 ? 0 : "1.1em", children: U }, B)),
                        w !== k && /* @__PURE__ */ r.jsx("title", { children: k })
                      ]
                    }
                  )
                ]
              },
              F?.toString?.() || j
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
          const T = !!x?.enabled, _ = Math.max(Cr, x?.gapPx ?? kr);
          if (!T)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: m.innerHeight, stroke: "currentColor" });
          const y = Math.max(0, m.innerHeight - _);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: y, stroke: "currentColor" });
        })(),
        C.map((T, _) => {
          const y = b(T), v = d && y.length > d ? y.slice(0, Math.max(1, d - 1)) + "…" : y, $ = h ? v.split(/\n/) : [v.replace(/\n/g, " ")];
          if (!!x?.enabled) {
            const F = Math.max(Cr, x?.gapPx ?? kr), j = Math.max(0, m.innerHeight - F);
            if (I(T) > j - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${I(T)})`,
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
                      $.map((F, j) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: j === 0 ? 0 : "1.1em", children: F }, j)),
                      v !== y && /* @__PURE__ */ r.jsx("title", { children: y })
                    ]
                  }
                )
              ]
            },
            T?.toString?.() || _
          );
        }),
        !!x?.enabled && (() => {
          const T = Math.max(Cr, x?.gapPx ?? kr), _ = m.innerHeight, v = Math.max(0, _ - T), $ = v, F = Math.max(4, _ - $), j = Qp, k = em, w = Math.max(1, Math.round(x?.zigZag?.amplitudePx ?? j)), E = Math.max(1, Math.round(x?.zigZag?.stepXPx ?? tm)), te = x?.zigZag?.heightPx ?? nm, U = Math.max(4, Math.round(te ?? 0));
          let B, K;
          if (x?.zigZag?.heightPx && x.zigZag.heightPx > 0) {
            const ee = Math.max(4, Math.min(F - 2, U));
            B = Math.max(1, Math.floor(ee / (2 * w))), K = Math.max(0, Math.min(ee, B * 2 * w));
          } else typeof x?.zigZag?.cycles == "number" && x?.zigZag?.cycles > 0 ? (B = Math.max(1, Math.round(x.zigZag.cycles)), K = B * 2 * w, K = Math.min(K, F - 2), B = Math.max(1, Math.floor(K / (2 * w)))) : (B = k, K = Math.min(F - 2, B * 2 * w), B = Math.max(1, Math.floor(K / (2 * w))));
          const O = $ + (F - K) / 2, H = O + K;
          let J = "M0,0";
          const R = K > 0 ? Math.max(0, Math.floor((K - w) / (2 * w))) : 0, re = Math.max(0, (K - R * 2 * w) / 2), q = w > 0 ? E * (re / w) : 0;
          re > 0 && (J += ` l${q},${re}`);
          for (let ee = 0; ee < R; ee++)
            J += ` l-${E},${w} l${E},${w}`;
          return re > 0 && (J += ` l-${q},${re}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: v, y2: O, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${O})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: J, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: H, y2: _, stroke: "currentColor" }),
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
}, rm = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Sn(), i = cn();
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
}, am = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, cr = {
  color: am
}, om = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Sa = {
  color: om
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
let Ga = null, Ya = null, Va = null, Rl = "optimized";
function im() {
  const e = { color: { ...Sa.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
    return sm;
  }
}
function lm() {
  return Ga || (Ga = im()), Ga;
}
function cm(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Za(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function dm(e, t, n) {
  const a = Za(e), o = Za(t), s = Za(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, c = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function um(e, t, n) {
  let i = e / 95.047, l = t / 100, c = n / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = d(i), l = d(l), c = d(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function Bl(e) {
  const t = cm(e);
  if (!t) return null;
  const n = dm(t.r, t.g, t.b);
  return um(n.x, n.y, n.z);
}
function pi(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function fm() {
  const e = lm();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Bl(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += pi(l, t[f]), d++);
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
          const p = pi(d, h);
          p < u && (u = p);
        }
      }
      u > l && (l = u, i = c);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function hm() {
  return Ya || (Ya = fm()), Ya;
}
function pm(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, c = i(a) * 100, d = i(s) * 108.883;
  return { X: l, Y: c, Z: d };
}
function mm(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function gm(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function xm(e, t) {
  const n = Bl(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = pm(a, n.a, n.b), l = mm(o, s, i);
  return gm(l.r, l.g, l.b);
}
function bm() {
  const e = hm(), n = [12, -12, 24, -24].map((o) => e.map((s) => xm(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function ym() {
  return (!Va || vm()) && (Va = bm(), Hl = Rl), Va;
}
let Hl = null;
function vm() {
  return Hl !== Rl;
}
function Ft(e) {
  const t = ym();
  return t[e % t.length];
}
let Tn = null, nr = null, rr = null, ar = null;
function wm() {
  const e = cr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Tn = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      Tn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    nr = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (nr[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    ar = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (ar[s] = i);
    }), rr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (rr[s] = i);
    });
  }
}
function _a() {
  (!Tn || !nr || !rr || !ar) && wm();
}
function yn(e) {
  return _a(), Tn ? Tn[e % Tn.length] : "#212b32";
}
function Sm(e) {
  return _a(), nr ? nr[e] : void 0;
}
function Ur(e, t) {
  return Sm(e) || yn(t);
}
const po = ["low", "moderate", "high", "critical"];
let qa = null;
function _m() {
  const e = { color: { ...Sa.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return po.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function zl() {
  return qa || (qa = _m()), qa;
}
function km(e) {
  return zl()[e.toLowerCase()];
}
function Cm(e, t) {
  return km(e) || zl()[po[t % po.length]] || Ft(t);
}
function Nm(e) {
  return _a(), rr ? rr[e] : void 0;
}
function jm(e, t) {
  return Nm(e) || yn(t);
}
const mo = ["trust", "ambulance", "icb", "region"];
let Ja = null;
function Mm() {
  const e = { color: { ...Sa.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return mo.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function Ol() {
  return Ja || (Ja = Mm()), Ja;
}
function Im(e) {
  return Ol()[e.toLowerCase()];
}
function Dm(e, t) {
  return Im(e) || Ol()[mo[t % mo.length]] || Ft(t);
}
function Tm(e) {
  return _a(), ar ? ar[e] : void 0;
}
function Lm(e, t) {
  return Tm(e) || yn(t);
}
let Xa = null;
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
  const e = { color: { ...Sa.color, ...cr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return $m.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function Pm() {
  return Xa || (Xa = Em()), Xa;
}
function Fm(e) {
  return Pm()[Am(e)];
}
function Ln(e, t) {
  return Fm(e) || Ft(t);
}
const Ul = Z.createContext(null), dr = () => Z.useContext(Ul), u1 = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = Z.useState(() => new Set(e)), i = n !== void 0, l = Z.useMemo(() => i ? new Set(n) : o, [i, n, o]), c = Z.useCallback((u) => {
    i || s(new Set(u)), a?.(Array.from(u));
  }, [i, a]), d = Z.useMemo(() => ({
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
  return /* @__PURE__ */ r.jsx(Ul.Provider, { value: d, children: t });
}, Wl = Z.createContext(null), tn = () => Z.useContext(Wl), Rm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Sn(), o = dr(), [s, i] = Z.useState(null), l = Z.useRef(/* @__PURE__ */ new Map()), [c, d] = Z.useState([]), u = Z.useCallback(
    (T, _) => {
      l.current.set(T, _);
    },
    []
  ), f = Z.useCallback((T) => {
    l.current.delete(T);
  }, []), h = Z.useCallback(
    (T, _) => {
      if (!a) return;
      const { xScale: y, yScale: v } = a;
      let $ = null, M = 1 / 0;
      l.current.forEach((F, j) => {
        F.forEach((k, w) => {
          const E = y(k.x), te = v(k.y), U = E - T, B = te - _, K = Math.sqrt(U * U + B * B);
          K < M && (M = K, $ = {
            seriesId: j,
            index: w,
            x: k.x,
            y: k.y,
            clientX: E,
            clientY: te
          });
        });
      }), $ && M <= t ? i($) : i(null);
    },
    [a, t]
  ), p = Z.useCallback(() => i(null), []);
  Z.useEffect(() => {
    if (!s) {
      d([]);
      return;
    }
    if (!a) return;
    const { xScale: T, yScale: _ } = a, y = [];
    l.current.forEach((v, $) => {
      v.forEach((M, F) => {
        (s.x instanceof Date && M.x instanceof Date ? M.x.getTime() === s.x.getTime() : M.x === s.x) && y.push({
          seriesId: $,
          index: F,
          x: M.x,
          y: M.y,
          clientX: T(M.x),
          clientY: _(M.y)
        });
      });
    }), y.sort((v, $) => v.seriesId.localeCompare($.seriesId)), d(y);
  }, [s, a]);
  const x = Z.useCallback(
    (T) => {
      if (!s) return;
      const _ = l.current.get(s.seriesId);
      if (!_) return;
      let y = s.index + T;
      if (y < 0 || y >= _.length) {
        if (!n) return;
        y = (y + _.length) % _.length;
      }
      const v = _[y];
      if (!a) return;
      const { xScale: $, yScale: M } = a;
      i({
        seriesId: s.seriesId,
        index: y,
        x: v.x,
        y: v.y,
        clientX: $(v.x),
        clientY: M(v.y)
      });
    },
    [s, a, n]
  ), g = Z.useCallback(
    (T) => {
      let _ = Array.from(l.current.keys());
      if (o && (_ = _.filter((E) => !o.isHidden(E))), _.length === 0) return;
      if (!s) {
        const E = _[0], te = l.current.get(E);
        if (!te || !a) return;
        const { xScale: U, yScale: B } = a, K = te[0];
        i({
          seriesId: E,
          index: 0,
          x: K.x,
          y: K.y,
          clientX: U(K.x),
          clientY: B(K.y)
        });
        return;
      }
      const y = _.indexOf(s.seriesId);
      if (y === -1) return;
      let v = y + T;
      if (v < 0 || v >= _.length) {
        if (!n) return;
        v = (v + _.length) % _.length;
      }
      const $ = _[v], M = l.current.get($);
      if (!M || !a) return;
      const F = Math.min(s.index, M.length - 1), j = M[F], { xScale: k, yScale: w } = a;
      i({
        seriesId: $,
        index: F,
        x: j.x,
        y: j.y,
        clientX: k(j.x),
        clientY: w(j.y)
      });
    },
    [s, a, n, o]
  ), m = Z.useCallback(() => {
    let T = Array.from(l.current.keys());
    if (o && (T = T.filter((F) => !o.isHidden(F))), T.length === 0) return;
    const _ = s ? s.seriesId : T[0], y = l.current.get(_);
    if (!y || y.length === 0 || !a) return;
    const v = y[0], { xScale: $, yScale: M } = a;
    i({
      seriesId: _,
      index: 0,
      x: v.x,
      y: v.y,
      clientX: $(v.x),
      clientY: M(v.y)
    });
  }, [s, a, o]), I = Z.useCallback(() => {
    let T = Array.from(l.current.keys());
    if (o && (T = T.filter((j) => !o.isHidden(j))), T.length === 0) return;
    const _ = s ? s.seriesId : T[0], y = l.current.get(_);
    if (!y || y.length === 0 || !a) return;
    const v = y.length - 1, $ = y[v], { xScale: M, yScale: F } = a;
    i({
      seriesId: _,
      index: v,
      x: $.x,
      y: $.y,
      clientX: M($.x),
      clientY: F($.y)
    });
  }, [s, a, o]), D = Z.useCallback(
    () => x(1),
    [x]
  ), L = Z.useCallback(
    () => x(-1),
    [x]
  ), N = Z.useCallback(
    () => g(1),
    [g]
  ), b = Z.useCallback(
    () => g(-1),
    [g]
  ), C = Z.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: D,
      focusPrevPoint: L,
      focusNextSeries: N,
      focusPrevSeries: b,
      focusFirstPoint: m,
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
      L,
      N,
      b,
      m,
      I
    ]
  );
  return /* @__PURE__ */ r.jsx(Wl.Provider, { value: C, children: e });
}, Bm = ({
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
  const h = Sn();
  if (!h) return null;
  const { xScale: p, yScale: x } = h, m = dr()?.isHidden(e.id) ?? !1, I = m && l === "fade";
  if (m && l === "remove")
    return null;
  const D = tn();
  Z.useEffect(() => {
    if (!D) return;
    const _ = e.data.map((y) => ({ x: i(y), y: y.y }));
    return D.registerSeries(e.id, _), () => D.unregisterSeries(e.id);
  }, [D, e.id, e.data, i]);
  const L = Z.useMemo(
    () => ho(
      e.data,
      (_) => p(i(_)),
      (_) => x(_.y),
      { smooth: d }
    ),
    [e.data, p, x, i, d]
  ), N = Z.useMemo(() => {
    if (!e.data.length) return "";
    const [_] = x.domain(), y = fo().x((v) => p(i(v))).y0(() => x(_)).y1((v) => x(v.y));
    return d && y.curve(Or), y(e.data) || "";
  }, [e.data, p, x, i, d]), b = f && f[t], C = e.color || b || (n === "region" ? Ln(e.id, t) : Ft(t)), T = n === "region" ? Ur(e.id, t) : yn(t);
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
            d: N,
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
            stroke: C,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        a && e.data.map((_, y) => {
          const v = p(i(_)), $ = x(_.y), M = o ? 0 : -1, F = !I && (o && y === s || D?.focused?.seriesId === e.id && D.focused.index === y), j = () => {
            D && !I && D.setFocused({
              seriesId: e.id,
              index: y,
              x: i(_),
              y: _.y,
              clientX: v,
              clientY: $
            });
          }, k = () => {
            D && D.focused?.seriesId === e.id && D.focused.index === y && D.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: v,
              cy: $,
              r: F ? 5 : 3.5,
              stroke: F ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : T,
              strokeWidth: F ? 2 : 1,
              fill: F ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : C,
              className: "fdp-line-point",
              tabIndex: I ? -1 : M,
              "aria-label": `${e.label || e.id} ${i(_).toDateString()} value ${_.y}`,
              "data-series": e.id,
              "data-index": y,
              onMouseEnter: j,
              onFocus: j,
              onMouseLeave: k,
              onBlur: k
            },
            y
          );
        })
      ]
    }
  );
}, Hm = ({ polite: e = !0, format: t }) => {
  const n = tn(), [a, o] = Z.useState(""), s = Z.useRef("");
  return Z.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let c;
    if (l && l.length > 1) {
      const d = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : zm(i.seriesId, i.x, i.y, i.index);
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
function zm(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const f1 = () => {
  const e = tn(), t = cn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), c = i + 8, d = l - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), x = p ? parseInt(p[0], 10) - 1 : 0, g = Ft(x >= 0 ? x : 0) || "#005eb8", m = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: m, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: m, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const D = a.map((T) => `${T.seriesId}: ${T.y}`), L = [h, ...D], N = L.reduce((T, _) => Math.max(T, _.length), 0), b = Math.max(90, N * 6.2 + 16), C = 16 * L.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: d - C, rx: 4, ry: 4, width: b, height: C, fill: "#212b32", opacity: 0.92 }),
        L.map((T, _) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - C + 6 + 16 * (_ + 0.7), fill: "#fff", fontSize: 12, children: T }, _))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, h1 = ({
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
  const d = dr(), u = !!(d && !a && !l && s === void 0), f = a || u, h = e || [], p = s !== void 0, [x, g] = Z.useState(new Set(i)), m = p ? new Set(s) : x, [I, D] = Z.useState(""), L = (N) => {
    if (u && d) {
      const M = d.isHidden(N);
      d.toggle(N);
      const j = h.find((w) => w.id === N)?.label || N, k = c ? c(N, M, j) : `${j} ${M ? "shown" : "hidden"}`;
      D(k);
      return;
    }
    if (!f) return;
    const b = new Set(m), C = b.has(N);
    C ? b.delete(N) : b.add(N), p || g(b);
    const T = h.filter((M) => !b.has(M.id)).map((M) => M.id), _ = Array.from(b);
    l?.(T, _);
    const v = h.find((M) => M.id === N)?.label || N, $ = c ? c(N, C, v) : `${v} ${C ? "shown" : "hidden"}`;
    D($);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((N, b) => {
      const C = N.palette || t, T = N.color || (C === "region" ? Ln(N.id, b) : C === "severity" ? Cm(N.id, b) : C === "org-level" ? Dm(N.id, b) : Ft(b));
      let _ = N.stroke || (C === "region" ? Ur(N.id, b) : C === "severity" ? jm(N.id, b) : C === "org-level" ? Lm(N.id, b) : yn(b));
      if (o && _) {
        const $ = _.trim().toLowerCase();
        ($ === "#fff" || $ === "#ffffff" || $ === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test($)) && (_ = "#212b32");
      }
      const y = u && d ? d.isHidden(N.id) : m.has(N.id), v = f ? {
        "aria-pressed": !y,
        "aria-label": `${N.label} (${y ? "show" : "hide"})`,
        onClick: () => L(N.id)
      } : { "aria-label": N.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${y ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: T,
              backgroundImage: N.patternDataUrl ? `url(${N.patternDataUrl})` : void 0,
              backgroundSize: N.patternDataUrl ? "auto" : void 0,
              borderColor: _
            },
            ...v
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: N.label })
      ] }, N.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: I })
  ] });
}, p1 = ({
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
  const f = Sn();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, g = dr()?.isHidden(e.id) ?? !1, m = g && s === "fade";
  if (g && s === "remove") return null;
  const I = tn();
  Z.useEffect(() => {
    if (!I) return;
    const T = e.data.map((_) => ({ x: a(_), y: _.y }));
    return I.registerSeries(e.id, T), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, a]);
  const D = u && u[t], L = e.color || D || (n === "region" ? Ln(e.id, t) : Ft(t)), N = Z.useMemo(() => c && c.length === e.data.length ? ho(
    e.data,
    (T) => h(a(T)),
    (T) => {
      const _ = e.data.indexOf(T);
      return p(c[_].y1);
    },
    { smooth: l }
  ) : ho(
    e.data,
    (T) => h(a(T)),
    (T) => p(T.y),
    { smooth: l }
  ), [e.data, c, h, p, a, l]), b = Z.useMemo(() => {
    if (c && c.length === e.data.length) {
      const $ = fo().x((M) => h(a(M))).y0((M, F) => p(c[F].y0)).y1((M, F) => p(c[F].y1));
      return l && $.curve(Or), $(e.data) || "";
    }
    const [T, _] = p.domain();
    let y = i;
    y < T ? y = T : y > _ && (y = _);
    const v = fo().x(($) => h(a($))).y0(() => p(y)).y1(($) => p($.y));
    return l && v.curve(Or), v(e.data) || "";
  }, [e.data, c, h, p, a, i, l]), C = Z.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: m ? 0.25 : 1,
      "aria-hidden": m ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: C, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: L, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: L, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: b,
            fill: d ? `url(#${C})` : L,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: N, fill: "none", stroke: L, strokeWidth: 1 })
      ]
    }
  );
}, m1 = ({
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
  gapRatio: g = 0.15,
  minBarWidth: m,
  gradientFill: I = !0,
  gradientStrokeMatch: D = !0,
  opacity: L = 1,
  fadedOpacity: N = 0.25,
  flatFillOpacity: b = 1,
  colors: C
}) => {
  const T = Math.max(0, g), _ = Sn(), y = cn();
  if (!_ || !y) return null;
  const { xScale: v, yScale: $ } = _, F = dr()?.isHidden(e.id) ?? !1, j = F && f === "fade";
  if (F && f === "remove") return null;
  const k = tn();
  Z.useEffect(() => {
    if (!k) return;
    const Q = e.data.map((ae) => ({ x: o(ae), y: ae.y }));
    return k.registerSeries(e.id, Q), () => k.unregisterSeries(e.id);
  }, [k, e.id, e.data, o]);
  const w = typeof v.bandwidth == "function", E = w ? v.bandwidth() : void 0, te = Z.useMemo(() => {
    if (E != null) return E;
    const Q = p && p.length ? p : [e], ae = [];
    Q.forEach((se) => {
      se.data.forEach((fe) => {
        const ce = v(o(fe));
        Number.isFinite(ce) && ae.push(ce);
      });
    });
    const de = ae.sort((se, fe) => se - fe);
    if (de.length <= 1) return 40;
    const V = [];
    for (let se = 1; se < de.length; se++)
      V.push(de[se] - de[se - 1]);
    return V.sort((se, fe) => se - fe), (V[Math.floor(V.length / 2)] || 40) * i;
  }, [e.data, p, v, o, i, E]), { basePerBar: U } = Z.useMemo(() => {
    if (w) {
      const de = te, V = Math.max(
        1,
        (de - l * (n - 1)) / n
      ), ie = e.barWidth ?? c;
      let se = ie ? Math.min(ie, de) : V;
      if (d) {
        const fe = de * Math.min(1, Math.max(0.05, u)), ce = Math.max(
          1,
          (fe - l * (n - 1)) / n
        );
        se = ie ? Math.min(se, ce) : ce;
      }
      return { basePerBar: se };
    }
    const Q = e.barWidth ?? c, ae = Math.max(
      1,
      (te - l * (n - 1)) / n
    );
    if (d) {
      const de = p && p.length ? p : [e], V = [];
      de.forEach(
        (Ae) => Ae.data.forEach((Ie) => {
          const Ce = v(o(Ie));
          Number.isFinite(Ce) && V.push(Ce);
        })
      ), V.sort((Ae, Ie) => Ae - Ie);
      const ie = [];
      for (let Ae = 1; Ae < V.length; Ae++)
        ie.push(V[Ae] - V[Ae - 1]);
      ie.sort((Ae, Ie) => Ae - Ie);
      const fe = (ie[Math.floor(ie.length / 2)] || te) * Math.min(1, Math.max(0.05, u)), ce = Math.max(
        1,
        (fe - l * (n - 1)) / n
      );
      return { basePerBar: Q ? Math.min(Q, ce) : ce };
    }
    return Q ? { basePerBar: Math.min(Q, ae) } : { basePerBar: ae };
  }, [
    w,
    te,
    l,
    n,
    c,
    e.barWidth,
    d,
    u,
    p,
    v,
    o
  ]), B = Z.useMemo(() => {
    if (w) return [];
    const Q = [];
    return (p && p.length ? p : [e]).forEach(
      (de) => de.data.forEach((V) => {
        const ie = v(o(V));
        Number.isFinite(ie) && Q.push(ie);
      })
    ), Q.sort((de, V) => de - V), Array.from(new Set(Q));
  }, [w, p, e, v, o]), K = Z.useMemo(() => {
    if (w)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: y.innerWidth }
      ];
    const Q = [];
    for (let ae = 0; ae < B.length; ae++) {
      const de = B[ae], V = ae === 0 ? 0 : (B[ae - 1] + de) / 2, ie = ae === B.length - 1 ? y.innerWidth : (de + B[ae + 1]) / 2;
      Q.push({
        center: de,
        left: Math.max(0, V),
        right: Math.min(y.innerWidth, ie)
      });
    }
    return Q;
  }, [w, B, y.innerWidth]), O = Z.useMemo(() => {
    if (w || !K.length)
      return;
    const Q = Math.min(1, Math.max(0.05, i)), ae = K.map((fe) => Math.max(2, fe.right - fe.left)), de = ae.map(
      (fe) => Math.max(2, Math.min(fe - 1, fe * Q))
    );
    let V = Math.min(...de);
    if (m)
      if (n <= 1) {
        const fe = Math.min(...ae.map((ce) => ce - 1));
        fe >= m && V < m && (V = Math.min(fe, m));
      } else {
        const fe = Math.min(...ae.map((pe) => pe - 1)), ce = m * n + (n - 1) * (m * T);
        ce <= fe && V < ce && (V = ce);
      }
    if (n <= 1)
      return m && V < m && ae.every((ce) => ce >= m) ? { groupWidth: m, barWidth: m } : { groupWidth: V, barWidth: V };
    let ie = V / (n + (n - 1) * T);
    return ie < 1 && (ie = 1), m && ie < m && m * n + (n - 1) * (m * T) <= V && (ie = m), { groupWidth: ie * n + (n - 1) * (ie * T), barWidth: ie };
  }, [
    w,
    K,
    i,
    n,
    T,
    m
  ]), H = C && C[t] ? C[t] : void 0, J = e.color || H || (a === "region" ? Ln(e.id, t) : Ft(t)), R = a === "region" ? Ur(e.id, t) : yn(t), re = D && (e.color || H) ? J : R, q = Number.isFinite($(0)) ? $(0) : $.range()[0], ee = Z.useId();
  return x && x.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: j ? N : L,
      "aria-hidden": j ? !0 : void 0,
      children: [
        I && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: ee,
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
        e.data.map((Q, ae) => {
          const de = o(Q), V = v(w ? Q.x : de);
          let ie, se;
          if (w)
            ie = te, se = V;
          else {
            const P = K.find(
              (G) => Math.abs(G.center - V) < 0.5
            );
            if (!P || !O)
              ie = U, se = V - U / 2;
            else {
              const { groupWidth: G } = O;
              ie = G;
              let A = V - G / 2;
              A < P.left && (A = P.left), A + G > P.right && (A = Math.max(P.left, P.right - G)), se = A;
            }
          }
          const fe = x[ae], ce = $(fe.y0), pe = $(fe.y1), Ae = Math.min(ce, pe), Ie = Math.abs(pe - ce) || 1;
          if (!w && m && ie < m) {
            const P = K.find(
              (G) => Math.abs(G.center - V) < 0.5
            );
            if (P) {
              const G = Math.max(2, P.right - P.left - 1), A = Math.min(G, m);
              A > ie && (ie = A, se = Math.max(
                P.left,
                Math.min(P.right - ie, V - ie / 2)
              ));
            }
          }
          const Ce = !j && k?.focused?.seriesId === e.id && k.focused.index === ae, Y = () => {
            !k || j || k.setFocused({
              seriesId: e.id,
              index: ae,
              x: de,
              y: fe.y1 - fe.y0,
              clientX: se + ie / 2,
              clientY: Ae
            });
          }, S = () => {
            k?.focused?.seriesId === e.id && k.focused.index === ae && k.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: se,
              y: Ae,
              width: ie,
              height: Ie,
              fill: I ? `url(#${ee})` : J,
              ...I ? {} : { fillOpacity: b },
              stroke: Ce ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : I && D ? J : void 0,
              strokeWidth: Ce ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: j || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${fe.y1 - fe.y0}`,
              onMouseEnter: Y,
              onFocus: Y,
              onMouseLeave: S,
              onBlur: S
            },
            ae
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: j ? N : L,
      "aria-hidden": j ? !0 : void 0,
      children: [
        I && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: ee,
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
          h === "category" && e.data.map((Q, ae) => {
            const V = C && C[ae] || (a === "region" ? Ln(String(Q.x), ae) : Ft(ae)), ie = `${ee}-${ae}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: ie,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: V, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: V, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: V, stopOpacity: 0.06 })
                ]
              },
              ie
            );
          })
        ] }),
        e.data.map((Q, ae) => {
          const de = o(Q), V = v(w ? Q.x : de);
          let ie, se;
          if (w) {
            const W = te;
            if (n <= 1)
              se = W, ie = V;
            else {
              se = Math.max(
                1,
                W / (n + (n - 1) * T)
              );
              const X = se * T, ne = se * n + X * (n - 1);
              ie = V + (W - ne) / 2 + t * (se + X);
            }
          } else {
            const W = K.find((X) => X.center === V);
            if (!W || !O)
              se = U, ie = V - U / 2, m && se < m && (se = m, ie = V - se / 2);
            else {
              const { barWidth: X } = O;
              se = X;
              const ne = n > 1 ? X * T : 0, oe = se * n + ne * (n - 1);
              let ue = V - oe / 2;
              ue < W.left && (ue = W.left), ue + oe > W.right && (ue = Math.max(W.left, W.right - oe)), ie = ue + t * (se + ne);
            }
            if (m && se < m) {
              const X = K.find(
                (ne) => Math.abs(ne.center - V) < 0.5
              );
              if (X) {
                const ne = Math.max(2, X.right - X.left - 1), oe = Math.min(ne, m);
                if (oe > se)
                  if (n <= 1)
                    se = oe, ie = Math.max(
                      X.left,
                      Math.min(X.right - se, V - se / 2)
                    );
                  else {
                    const ue = oe * T, he = oe * n + ue * (n - 1);
                    if (he <= X.right - X.left - 1) {
                      se = oe;
                      const me = he;
                      let ve = V - me / 2;
                      ve < X.left && (ve = X.left), ve + me > X.right && (ve = Math.max(
                        X.left,
                        X.right - me
                      )), ie = ve + t * (se + ue);
                    }
                  }
              }
            }
          }
          const fe = ie + se / 2, ce = $(Q.y), pe = Math.min(q, ce), Ae = Math.abs(q - ce), Ie = !j && k?.focused?.seriesId === e.id && k.focused.index === ae, Ce = () => {
            !k || j || k.setFocused({
              seriesId: e.id,
              index: ae,
              x: de,
              y: Q.y,
              clientX: fe,
              clientY: ce
            });
          }, Y = () => {
            k?.focused?.seriesId === e.id && k.focused.index === ae && k.clear();
          }, S = h === "category" && C ? C[ae] : void 0, P = h === "category" ? S || (a === "region" ? Ln(String(Q.x), ae) : Ft(ae)) : J, G = h === "category" ? `${ee}-${ae}` : ee, A = I && D ? P : h === "category" ? a === "region" ? Ur(String(Q.x), ae) : yn(ae) : re, z = Ie ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : A || P;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ie,
              y: pe,
              width: se,
              height: Ae || 1,
              fill: I ? `url(#${G})` : P,
              ...I ? {} : { fillOpacity: b },
              stroke: z,
              strokeWidth: Ie ? 2 : 1,
              className: "fdp-bar",
              tabIndex: j || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${Q.y}`,
              onMouseEnter: Ce,
              onFocus: Ce,
              onMouseLeave: Y,
              onBlur: Y
            },
            ae
          );
        })
      ]
    }
  );
}, g1 = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = cn(), c = t ?? l?.innerWidth ?? 0, d = n ?? l?.innerHeight ?? 0, u = Z.useMemo(() => e.flatMap((m) => m.data), [e]), f = Z.useMemo(() => {
    const m = /* @__PURE__ */ new Set();
    return u.forEach((I) => m.add(I.x)), Array.from(m);
  }, [u]), h = Z.useMemo(
    () => Math.max(0, ...u.map((m) => m.y)),
    [u]
  ), p = Z.useMemo(
    () => Xi().domain(f).range([0, c]).paddingInner(a).paddingOuter(o),
    [f, c, a, o]
  ), x = Z.useMemo(
    () => Ar().domain([0, h]).nice().range([d, 0]),
    [h, d]
  ), g = Z.useMemo(
    () => ({
      xScale: p,
      yScale: x,
      getXTicks: () => f,
      getYTicks: (m = i) => x.ticks(m)
    }),
    [p, x, f, i]
  );
  return /* @__PURE__ */ r.jsx(rs.Provider, { value: g, children: s });
}, x1 = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = Z.useId(), d = s || c, u = t ? `${d}-desc` : void 0, f = n ? `${d}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: d,
      className: Et("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Et(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(en, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(en, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, b1 = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = Z.useRef(null);
  return Z.useEffect(() => {
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
}, Om = ({
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
  announceDelta: g = !0,
  visual: m
}) => {
  const I = Z.useId(), D = x || I, L = `${D}-label`, N = `${D}-value`, b = `${D}-delta`, C = typeof t == "number" && !Number.isNaN(t), T = d ? "—" : u ? "" : C ? f ? f(t) : t.toLocaleString() : t;
  let _, y = "", v = "";
  if (a && !d && !u) {
    _ = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const $ = Math.abs(a.value), M = _ === "up" ? `+${$}` : _ === "down" ? `-${$}` : "0", F = a.isPercent ? "%" : "";
    if (y = `${M}${F}`, a.ariaLabel)
      v = a.ariaLabel;
    else {
      const j = a.invert ? _ === "down" : _ === "up";
      v = `${_ === "neutral" ? "no change" : _ === "up" ? "up" : "down"} ${$}${F}${_ === "neutral" ? "" : j ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Et(
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
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: N, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: T }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: b,
              "aria-label": v,
              className: Et(
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
        m && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: m }),
        g && a && !a.ariaLabel && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: v })
      ] })
    }
  );
};
var dt = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(dt || {}), Gl = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Gl || {}), sn = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(sn || {}), Re = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Re || {});
const as = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
as.reduce(
  (e, t, n) => (e[t] = n + 1, e),
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
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: Um[t],
    category: Wm[t],
    participatesInRanking: !0
  }, e),
  {}
);
as.map(
  (e) => Yl[e]
);
var or = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(or || {}), ln = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(ln || {}), Vl = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Vl || {});
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
function ka(e) {
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
function Ca(e) {
  switch (e) {
    case Re.Improvement:
      return "Improvement signal";
    case Re.Concern:
      return "Concern signal";
    case Re.Neither:
      return "Common cause variation";
    case Re.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Zl(e) {
  switch (e) {
    case ln.Pass:
      return "Target met";
    case ln.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Gm(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
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
var pn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(pn || {});
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
var ut = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ut || {}), Pe = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Pe || {}), _t = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(_t || {}), Me = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Me || {});
const qm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, Na = {
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
Object.values(Na).forEach((e) => {
  e.text || (e.text = qm(e.hex));
});
const Jl = (e) => Na[e], os = (e) => Na[e].judgement || "none", mi = {
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
  let n;
  return e === "common_cause" ? n = mi.common : n = mi.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
let go = null;
try {
  go = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const yt = (e, t) => {
  if (!go) return t;
  const n = e.split(".");
  let a = go;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, ja = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: yt("gradient.stop.start-opacity", "0.12"),
  mid: yt("gradient.stop.mid-opacity", "0.03"),
  end: yt("gradient.stop.end-opacity", "0"),
  triStart: yt(
    "gradient.stop.triangle-start-opacity",
    yt("gradient.stop.start-opacity", "0.12")
  ),
  triMid: yt(
    "gradient.stop.triangle-mid-opacity",
    yt("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: yt(
    "gradient.stop.triangle-end-opacity",
    yt("gradient.stop.end-opacity", "0")
  )
}), Ma = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, Ia = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, Xl = () => yt(Ma.improvement, Ia.improvement), Kl = () => yt(Ma.concern, Ia.concern), Xm = () => yt(Ma.noJudgement, Ia.noJudgement), un = () => yt(Ma.common, Ia.common);
function wr(e) {
  switch (e) {
    case Re.Improvement:
      return Xl();
    case Re.Concern:
      return Kl();
    case Re.Neither:
    case Re.Suppressed:
    default:
      return un();
  }
}
function Ql(e) {
  switch (e) {
    case Me.SpecialCauseImproving:
      return Xl();
    case Me.SpecialCauseDeteriorating:
      return Kl();
    case Me.SpecialCauseNoJudgement:
      return Xm();
    case Me.CommonCause:
    default:
      return un();
  }
}
var Nt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Nt || {}), Oe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Oe || {}), je = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(je || {}), rt = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(rt || {}), mn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(mn || {}), $t = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))($t || {}), An = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(An || {}), Mn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Mn || {}), xt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(xt || {}), Rt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Rt || {}), At = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(At || {}), Wr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Wr || {}), Gr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Gr || {});
const rn = {
  [rt.SinglePoint]: 1,
  [rt.TwoSigma]: 2,
  [rt.Shift]: 3,
  [rt.Trend]: 4
}, gi = 3.267, Km = 2.66, xi = 0.2777;
function Ee(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function In(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function bi(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!(t[o] || !Ee(s))) {
      if (a !== null) {
        const i = e[a];
        Ee(i) && (n[o] = Math.abs(s - i));
      }
      a = o;
    }
  }
  return n;
}
function yi(e, t) {
  const n = e.filter(Ee);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = In(a), i = gi * s;
    a = a.filter((l) => l <= i);
  }
  const o = In(a);
  return { mrMean: o, mrUcl: gi * o };
}
function vi(e, t) {
  if (!Ee(e) || !Ee(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Km * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function Qm(e, t, n, a) {
  if (e === Nt.T) {
    const f = t.map((_) => Ee(_) && _ > 0 ? Math.pow(_, xi) : null), h = bi(f, n), p = yi(h, a), x = f.filter((_, y) => !n[y] && Ee(_)), g = x.length ? In(x) : NaN, m = vi(g, p.mrMean), I = (_) => Ee(_) && _ > 0 ? Math.pow(_, 1 / xi) : null, D = Ee(m.upperProcessLimit) ? I(m.upperProcessLimit) : null, L = Ee(m.lowerProcessLimit) && m.lowerProcessLimit > 0 ? I(m.lowerProcessLimit) : null, N = Ee(m.upperTwoSigma) ? I(m.upperTwoSigma) : null, b = Ee(m.lowerTwoSigma) && m.lowerTwoSigma > 0 ? I(m.lowerTwoSigma) : null, C = Ee(m.upperOneSigma) ? I(m.upperOneSigma) : null, T = Ee(m.lowerOneSigma) && m.lowerOneSigma > 0 ? I(m.lowerOneSigma) : null;
    return {
      mean: Ee(g) && g > 0 ? I(g) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: D,
      lowerProcessLimit: L,
      upperTwoSigma: N,
      lowerTwoSigma: b,
      upperOneSigma: C,
      lowerOneSigma: T
    };
  }
  if (e === Nt.G) {
    const f = t.filter(($, M) => !n[M] && Ee($)), h = f.length ? In(f) : NaN, p = Ee(h) ? 1 / (h + 1) : NaN, x = ($) => {
      if (!Ee(p) || p <= 0 || p >= 1) return NaN;
      const M = Math.ceil(Math.log(1 - $) / Math.log(1 - p)) - 1;
      return Math.max(0, M);
    }, g = 135e-5, m = 1 - 135e-5, I = 0.02275, D = 1 - 0.02275, L = 0.158655, N = 1 - 0.158655, b = x(m), C = x(g), T = x(D), _ = x(I), y = x(N), v = x(L);
    return {
      mean: Ee(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Ee(b) ? b : null,
      lowerProcessLimit: Ee(C) ? C : null,
      upperTwoSigma: Ee(T) ? T : null,
      lowerTwoSigma: Ee(_) ? _ : null,
      upperOneSigma: Ee(y) ? y : null,
      lowerOneSigma: Ee(v) ? v : null
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
  const o = bi(t, n), s = o.filter(Ee), i = s.length ? In(s) : NaN, l = Ee(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, x) => {
      if (n[x] || !Ee(p)) return h;
      if (!a)
        return h.push(p), h;
      const g = o[x];
      return (g === null || !Ee(l) || Ee(g) && g <= l) && h.push(p), h;
    }, []);
    c = f.length ? In(f) : NaN;
  }
  const d = yi(o, a), u = vi(c, d.mrMean);
  return {
    mean: c,
    mr: o,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function eg(e, t) {
  const n = e.map((c, d) => d).filter((c) => !e[c].ghost && Ee(e[c].value)), a = (c) => e[c], o = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const c of n) {
    const d = a(c);
    if (!Ee(d.mean) || !Ee(d.value) ? (i = [], l = []) : d.value > d.mean ? (i.push(c), l = []) : d.value < d.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= o)
      for (const u of i) a(u).shiftUp = !0;
    if (l.length >= o)
      for (const u of l) a(u).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const u = n.slice(c, c + 3).map(a);
    if (!u.every((N) => Ee(N.value) && Ee(N.mean)))
      continue;
    const f = u[0].mean, h = u.every((N) => N.value > f), p = u.every((N) => N.value < f);
    if (!h && !p)
      continue;
    const x = u[0].upperTwoSigma ?? 1 / 0, g = u[0].lowerTwoSigma ?? -1 / 0, m = u[0].upperProcessLimit ?? 1 / 0, I = u[0].lowerProcessLimit ?? -1 / 0, D = u.filter((N) => t.twoSigmaIncludeAboveThree ? N.value > x : N.value > x && N.value <= m), L = u.filter((N) => t.twoSigmaIncludeAboveThree ? N.value < g : N.value < g && N.value >= I);
    h && D.length >= 2 && D.forEach((N) => N.twoSigmaUp = !0), p && L.length >= 2 && L.forEach((N) => N.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const u = n.slice(c, c + 5).map(a);
      if (!u.every((D) => Ee(D.value) && Ee(D.mean)))
        continue;
      const f = u[0].mean, h = u.every((D) => D.value > f), p = u.every((D) => D.value < f);
      if (!h && !p)
        continue;
      const x = u[0].upperOneSigma ?? 1 / 0, g = u[0].lowerOneSigma ?? -1 / 0, m = u.filter((D) => D.value > x), I = u.filter((D) => D.value < g);
      h && m.length >= 4 && m.forEach((D) => D.fourOfFiveUp = !0), p && I.length >= 4 && I.forEach((D) => D.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - s; c++) {
    const d = n.slice(c, c + s), u = d.map(a);
    if (!u.every((p) => Ee(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => a(p).trendUp = !0), h && d.forEach((p) => a(p).trendDown = !0);
  }
}
function ec(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: rt.SinglePoint,
    rank: rn[rt.SinglePoint]
  }), e.singlePointDown && n.push({
    id: rt.SinglePoint,
    rank: rn[rt.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: rt.TwoSigma,
    rank: rn[rt.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: rt.TwoSigma,
    rank: rn[rt.TwoSigma]
  }), e.shiftUp && t.push({ id: rt.Shift, rank: rn[rt.Shift] }), e.shiftDown && n.push({ id: rt.Shift, rank: rn[rt.Shift] }), e.trendUp && t.push({ id: rt.Trend, rank: rn[rt.Trend] }), e.trendDown && n.push({ id: rt.Trend, rank: rn[rt.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), o = n.reduce((i, l) => Math.max(i, l.rank), 0), s = a > o ? mn.Upwards : o > a ? mn.Downwards : mn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function wi(e, t) {
  const n = t === Oe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Oe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Oe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Oe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function Si(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: c, upMax: d, dnMax: u, primeDirection: f } = ec(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && tg({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === Oe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? je.ImprovementHigh : e.specialCauseConcernValue !== null ? je.ConcernLow : je.CommonCause : t === Oe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? je.ImprovementLow : e.specialCauseConcernValue !== null ? je.ConcernHigh : je.CommonCause : e.variationIcon = je.CommonCause;
  const x = e.specialCauseImprovementValue !== null ? $t.Up : e.specialCauseConcernValue !== null ? $t.Down : void 0, g = x === $t.Up ? d : x === $t.Down ? u : Math.max(d, u);
  e.primeRank = g || void 0;
  const m = x === $t.Up ? l.find((I) => I.rank === g) : x === $t.Down ? c.find((I) => I.rank === g) : void 0;
  return e.primeRuleId = m?.id, { originalImprovement: h, originalConcern: p };
}
function tg(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? mn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (n === Oe.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Oe.Down) {
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
  const d = o ? Mn.PreferImprovement : l ?? Mn.SqlPrimeThenRule;
  if (d === Mn.PreferImprovement) {
    n === Oe.Up ? t.specialCauseConcernValue = null : n === Oe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === Mn.RuleHierarchy) {
    const u = c ?? [rt.Trend, rt.Shift, rt.TwoSigma, rt.SinglePoint], { up: f, dn: h } = ec(t);
    for (const p of u) {
      const x = f.some((m) => m.id === p), g = h.some((m) => m.id === p);
      if (x && !g) {
        n === Oe.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (g && !x) {
        n === Oe.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (x && g) {
        (n === Oe.Up || n === Oe.Down) && (a === An.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === mn.Upwards ? n === Oe.Up ? t.specialCauseConcernValue = null : n === Oe.Down && (t.specialCauseImprovementValue = null) : i === mn.Downwards ? n === Oe.Up ? t.specialCauseImprovementValue = null : n === Oe.Down && (t.specialCauseConcernValue = null) : a === An.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var xo = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(xo || {});
function ng(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function rg(e) {
  const t = ng(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function _i(e) {
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
      const I = e[d];
      if (!I || I.value == null || I.ghost || !(l === "Up" ? I.trendUp : I.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, x = 1 / 0, g = -1 / 0, m = 0;
    for (let I = c; I <= u; I++) {
      const D = e[I];
      if (D.value == null) continue;
      const L = D.value - (D.mean ?? 0), N = rg(L);
      if (!N) {
        h !== void 0 && (o(f, h, I - 1, p, x, g, m, l), h = void 0, p = void 0, x = 1 / 0, g = -1 / 0, m = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: x, maxV: g, maxAbsDelta: m } = (() => {
          const b = n(I, N, D.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(L)
          };
        })());
      else if (N !== p)
        o(f, h, I - 1, p, x, g, m, l), { segStart: h, segSide: p, minV: x, maxV: g, maxAbsDelta: m } = (() => {
          const b = n(I, N, D.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(L)
          };
        })();
      else {
        const b = a(D.value, Math.abs(L), x, g, m);
        x = b.minV, g = b.maxV, m = b.maxAbsDelta;
      }
    }
    h !== void 0 && o(f, h, u, p, x, g, m, l), t.push({ trendDirection: l, start: c, end: u, segments: f }), s = u + 1;
  }
  return t;
}
function ag(e) {
  if (e === Oe.Up) return "Above";
  if (e === Oe.Down) return "Below";
}
function og(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function ki(e, t) {
  const n = t.strategy ?? xt.CrossingAfterFavourable, a = ag(t.metricImprovement), o = og(a), s = [];
  for (const i of e) {
    if (!a) {
      if (n === xt.ExtremeFavourable || n === xt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const d of l)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        s.push(c);
      }
      continue;
    }
    if (n === xt.FavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === xt.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (n === xt.CrossingAfterFavourable) {
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
    if (n === xt.CrossingAfterUnfavourable) {
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
    if (n === xt.ExtremeFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === xt.ExtremeUnfavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      s.push(c);
      continue;
    }
    if (n === xt.FirstFavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && s.push(l);
      continue;
    }
    if (n === xt.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === o);
      l && s.push(l);
      continue;
    }
    if (n === xt.LongestFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === xt.LongestUnfavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      s.push(c);
      continue;
    }
    if (n === xt.LastFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === xt.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var nt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(nt || {}), Bn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Bn || {});
function sg(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function ur(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = sg(s);
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
        if (a === "Ungated" && n !== Oe.Neither) {
          if (i && !l)
            return n === Oe.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Oe.Down ? "Improvement" : "Concern";
        }
        return o ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function ig(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = ur(e, {
    metricImprovement: t,
    trendVisualMode: Bn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Oe.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const p = o[f];
    (p === nt.Common || p === nt.NoJudgement) && (o[f] = h);
  }, d = (f) => {
    if (f == null) return null;
    const h = e.reduce((x, g) => (g.partitionId === f && typeof g.value == "number" && !g.ghost && x.push(g.value), x), []);
    return h.length ? h.reduce((x, g) => x + g, 0) / h.length : null;
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
    let g = f;
    for (; g + 1 < e.length && e[g + 1] && e[g + 1].partitionId === p.partitionId; )
      g++;
    let m = null;
    for (let C = f - 1; C >= 0; C--) {
      const T = e[C];
      if (T.partitionId !== h.partitionId) break;
      if (typeof T.mean == "number") {
        m = T.mean;
        break;
      }
    }
    let I = null;
    for (let C = f; C < e.length; C++) {
      const T = e[C];
      if (T.partitionId !== p.partitionId) break;
      if (typeof T.mean == "number") {
        I = T.mean;
        break;
      }
    }
    if (m == null && (m = d(h.partitionId ?? null)), I == null && (I = d(p.partitionId ?? null)), m == null || I == null)
      continue;
    const D = I - m, L = t === Oe.Up ? D > 0 : D < 0, N = L ? nt.Improvement : nt.Concern, b = l === "Same" ? N : L ? nt.Concern : nt.Improvement;
    for (let C = 1; C <= s; C++) {
      const T = f - C;
      if (T < x) break;
      c(T, b);
    }
    for (let C = 0; C < i; C++) {
      const T = f + C;
      if (T > g) break;
      c(T, N);
    }
  }
  return o;
}
function tc(e) {
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
  const { chartType: t, metricImprovement: n, data: a } = e, o = tc(e.settings), s = {
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
    trendSegmentationMode: Rt.Off,
    trendSegmentationStrategy: xt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? Rt.Always : o?.trendFavourableSegmentation === !1 ? Rt.Off : s.trendSegmentationMode), l = a.map((g, m) => ({
    rowId: m + 1,
    x: g.x,
    value: Ee(g.value) ? g.value : null,
    ghost: !!g.ghost,
    baseline: !!g.baseline,
    target: Ee(g.target) ? g.target : null
  })), c = [];
  let d = [];
  for (const g of l)
    g.baseline && d.length && (c.push(d), d = []), d.push(g);
  d.length && c.push(d);
  const u = [], f = (s.trendFavourableSegmentation || i !== Rt.Off) && !s.preferImprovementWhenConflict, h = l.filter((g) => !g.ghost && Ee(g.value)).length, p = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let x = 0;
  for (const g of c) {
    x++;
    const m = g.map((b) => b.value), I = g.map((b) => b.ghost), D = Qm(
      t,
      m,
      I,
      !!s.excludeMovingRangeOutliers
    ), L = g.map((b, C) => {
      const T = !b.ghost && Ee(b.value) ? m.slice(0, C + 1).filter((y, v) => !I[v] && Ee(y)).length : 0, _ = p ? !0 : T >= s.minimumPoints;
      return {
        rowId: b.rowId,
        x: b.x,
        value: Ee(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: x,
        pointRank: T,
        mean: (_ || p) && Ee(D.mean) ? D.mean : null,
        upperProcessLimit: _ || p ? D.upperProcessLimit : null,
        lowerProcessLimit: _ || p ? D.lowerProcessLimit : null,
        upperTwoSigma: _ || p ? D.upperTwoSigma : null,
        lowerTwoSigma: _ || p ? D.lowerTwoSigma : null,
        upperOneSigma: _ || p ? D.upperOneSigma : null,
        lowerOneSigma: _ || p ? D.lowerOneSigma : null,
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
    for (const b of L)
      b.ghost || !Ee(b.value) || b.mean === null || (Ee(b.upperProcessLimit) && b.value > b.upperProcessLimit && (b.singlePointUp = !0), Ee(b.lowerProcessLimit) && b.value < b.lowerProcessLimit && (b.singlePointDown = !0));
    eg(L, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((b) => {
      const C = b.some(
        ($) => ($.singlePointUp || $.twoSigmaUp || $.shiftUp || $.trendUp) && ($.singlePointDown || $.twoSigmaDown || $.shiftDown || $.trendDown)
      );
      if (i === Rt.Off || i === Rt.AutoWhenConflict && !C)
        return;
      const T = _i(b), _ = ki(T, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
      for (const $ of _)
        for (let M = $.start; M <= $.end; M++)
          $.trendDirection === xo.Up ? y.add(M) : v.add(M);
      b.forEach(($, M) => {
        $.trendUp = y.has(M) ? $.trendUp : !1, $.trendDown = v.has(M) ? $.trendDown : !1, s.trendDominatesHighlightedWindow && (y.has(M) ? ($.singlePointDown = !1, $.twoSigmaDown = !1, $.shiftDown = !1) : v.has(M) && ($.singlePointUp = !1, $.twoSigmaUp = !1, $.shiftUp = !1));
      });
    })(L);
    for (const b of L) {
      if (b.ghost || !Ee(b.value) || b.mean === null) {
        u.push(b);
        continue;
      }
      const { aligned: C, opposite: T } = wi(
        b,
        n
      );
      if (b.specialCauseImprovementValue = C ? b.value : null, b.specialCauseConcernValue = T ? b.value : null, n === Oe.Neither) {
        const _ = b.singlePointUp || b.twoSigmaUp || b.shiftUp || b.trendUp, y = b.singlePointDown || b.twoSigmaDown || b.shiftDown || b.trendDown;
        b.variationIcon = _ ? je.NeitherHigh : y ? je.NeitherLow : je.CommonCause;
      } else
        Si(b, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      u.push(b);
    }
  }
  if (s.trendAcrossPartitions) {
    const g = u.map((m, I) => ({ idx: I, r: m })).filter(({ r: m }) => !m.ghost && Ee(m.value));
    if (g.length >= s.trendPoints)
      for (let m = 0; m <= g.length - s.trendPoints; m++) {
        const I = g.slice(m, m + s.trendPoints).map((b) => b.idx), D = I.map((b) => u[b]);
        if (!D.every((b) => Ee(b.value))) continue;
        let L = !0, N = !0;
        for (let b = 1; b < D.length && (D[b].value > D[b - 1].value || (L = !1), D[b].value < D[b - 1].value || (N = !1), !(!L && !N)); b++)
          ;
        L && I.forEach((b) => u[b].trendUp = !0), N && I.forEach((b) => u[b].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const g = u.some(
        (m) => (m.singlePointUp || m.twoSigmaUp || m.shiftUp || m.trendUp) && (m.singlePointDown || m.twoSigmaDown || m.shiftDown || m.trendDown)
      );
      if (i === Rt.Always || i === Rt.AutoWhenConflict && g) {
        const m = _i(u), I = ki(m, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), D = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        for (const N of I)
          for (let b = N.start; b <= N.end; b++)
            N.trendDirection === xo.Up ? D.add(b) : L.add(b);
        u.forEach((N, b) => {
          N.trendUp = D.has(b) ? N.trendUp : !1, N.trendDown = L.has(b) ? N.trendDown : !1, s.trendDominatesHighlightedWindow && (D.has(b) ? (N.singlePointDown = !1, N.twoSigmaDown = !1, N.shiftDown = !1) : L.has(b) && (N.singlePointUp = !1, N.twoSigmaUp = !1, N.shiftUp = !1));
        });
      }
    }
    for (const g of u) {
      if (g.ghost || !Ee(g.value) || g.mean === null || n === Oe.Neither) continue;
      const { aligned: m, opposite: I } = wi(g, n);
      g.specialCauseImprovementValue = m ? g.value : null, g.specialCauseConcernValue = I ? g.value : null, Si(g, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function ss(e, t) {
  const n = fr(e), a = ur(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Bn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = ig(n.rows, s, o), l = a.map((c, d) => {
    const u = i[d];
    if (c === nt.Common || c === nt.NoJudgement) {
      if (u === nt.Improvement) return nt.Improvement;
      if (u === nt.Concern) return nt.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: l };
}
var nc = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(nc || {});
function lg(e, t, n) {
  const a = n?.trendVisualMode ?? Bn.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: c } = ss(e, {
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
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = nt.Common), { rows: l, visuals: d };
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
var ht = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ht || {}), gn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(gn || {}), sr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(sr || {});
const bo = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Oe.Up ? ut.HigherIsBetter : i.improvementDirection === Oe.Down ? ut.LowerIsBetter : ut.ContextDependent : i.polarity && (l = i.polarity);
    let c;
    const d = i.variationIcon;
    if (d === Re.Improvement || d === Re.Concern || d === Re.Neither || d === Re.Suppressed)
      d === Re.Improvement ? c = Me.SpecialCauseImproving : d === Re.Concern ? c = Me.SpecialCauseDeteriorating : d === Re.Neither ? c = Me.CommonCause : c = Me.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case je.ImprovementHigh:
        case je.ImprovementLow:
          c = Me.SpecialCauseImproving;
          break;
        case je.ConcernHigh:
        case je.ConcernLow:
          c = Me.SpecialCauseDeteriorating;
          break;
        case je.NeitherHigh:
        case je.NeitherLow:
          c = i.specialCauseNeutral ? Me.SpecialCauseNoJudgement : Me.CommonCause;
          break;
        case je.CommonCause:
          c = Me.CommonCause;
          break;
        default:
          c = Me.SpecialCauseNoJudgement;
          break;
      }
    let u = i.trend;
    return u || (c === Me.SpecialCauseImproving ? u = l === ut.LowerIsBetter ? Pe.Lower : Pe.Higher : c === Me.SpecialCauseDeteriorating ? u = l === ut.LowerIsBetter ? Pe.Higher : Pe.Lower : c === Me.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? u = Pe.Higher : i.lowSideSignal && !i.highSideSignal ? u = Pe.Lower : u = Pe.Higher : u = Pe.Higher), { state: c, direction: u, polarity: l ?? ut.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Me.SpecialCauseImproving || i.state === Me.SpecialCauseDeteriorating) && i.polarity && (i.state === Me.SpecialCauseImproving ? l = i.polarity === ut.LowerIsBetter ? Pe.Lower : Pe.Higher : l = i.polarity === ut.LowerIsBetter ? Pe.Higher : Pe.Lower), l || (i.state === Me.SpecialCauseImproving ? l = Pe.Higher : i.state === Me.SpecialCauseDeteriorating ? l = Pe.Lower : l = Pe.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? ut.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [_t.Improving]: Me.SpecialCauseImproving,
    [_t.Deteriorating]: Me.SpecialCauseDeteriorating,
    [_t.No_Judgement]: Me.SpecialCauseNoJudgement,
    [_t.None]: Me.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === _t.Improving ? s = n.polarity === ut.LowerIsBetter ? Pe.Lower : Pe.Higher : n.judgement === _t.Deteriorating ? s = n.polarity === ut.LowerIsBetter ? Pe.Higher : Pe.Lower : s = n.trend ?? Pe.Higher, { state: o, direction: s, polarity: n.polarity };
};
function ac(e, t) {
  const { state: n, direction: a, polarity: o } = bo(e), s = os(n), i = a === Pe.Higher ? "above" : "below", l = a === Pe.Higher ? "upwards" : "downwards", c = (() => {
    switch (o) {
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
    c,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const Ka = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), is = ({
  data: e,
  precomputed: t,
  improvementDirection: n,
  size: a = 44,
  ariaLabel: o,
  showLetter: s = !0,
  dropShadow: i = !0,
  gradientWash: l = !1,
  variant: c = gn.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = sr.Polarity,
  letterOverride: f,
  ...h
}) => {
  const p = Nr(), x = Nr(), {
    start: g,
    mid: m,
    end: I,
    triStart: D,
    triMid: L,
    triEnd: N
  } = ja(), { state: b, direction: C, polarity: T, ariaInput: _ } = $e(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const J = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: n ?? Oe.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Me.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: R, direction: re, polarity: q } = bo(J);
      return { state: R, direction: re, polarity: q, ariaInput: J };
    }
    const { state: K, direction: O, polarity: H } = bo(e);
    return { state: K, direction: O, polarity: H, ariaInput: e };
  }, [e, t, n]), y = $e(() => Jl(b), [b]), v = $e(() => os(b), [b]), $ = v === _t.Improving || v === _t.Deteriorating;
  let M = "";
  s && $ && (u === sr.Polarity ? T === ut.HigherIsBetter ? M = "H" : T === ut.LowerIsBetter ? M = "L" : M = "" : M = C === Pe.Higher ? "H" : "L"), f !== void 0 && (M = f);
  const F = b !== Me.CommonCause, j = b === Me.SpecialCauseNoJudgement, k = yt("common-cause", "#A6A6A6"), w = F ? y.hex : k, E = $e(
    () => Jm(b, C),
    [b, C]
  ), te = o || `${y.label}${M ? C === Pe.Higher ? " – Higher" : " – Lower" : ""}`, U = ac(_);
  if (c === gn.TriangleWithRun) {
    const J = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], R = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let re = null;
    b === Me.SpecialCauseImproving || b === Me.SpecialCauseDeteriorating ? re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (C === Pe.Higher ? J : R).map((ce) => ce.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: C === Pe.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : b === Me.SpecialCauseNoJudgement && (re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: C === Pe.Higher ? J.map((ce) => ce.join(",")).join(" ") : R.map((ce) => ce.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: C === Pe.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const q = Math.max(0, Math.min(5, Math.floor(d || 0))), ee = b === Me.CommonCause ? 160 : C === Pe.Higher ? 220 : 70, Q = 10, ae = 26, de = 150 - 2 * ae, V = b === Me.CommonCause ? k : Ql(b), ie = Array.from({ length: 5 }).map((ce, pe) => {
      const Ie = (b === Me.SpecialCauseImproving || b === Me.SpecialCauseDeteriorating) && pe >= 5 - q ? V : k;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: de + pe * ae,
          cy: ee,
          r: Q,
          fill: Ie,
          stroke: Ie,
          strokeWidth: 1
        },
        pe
      );
    }), se = Ka(
      y.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: D },
        { offset: "75%", opacity: L },
        { offset: "100%", opacity: N }
      ]
    ), fe = b === Me.CommonCause || C === Pe.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": te,
        "aria-description": U,
        ...h,
        children: [
          se,
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
          /* @__PURE__ */ r.jsxs("g", { transform: fe, children: [
            re,
            M && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: C === Pe.Higher ? 155 : 145,
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
  if (c === gn.Triangle) {
    const J = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], R = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], re = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let q = null;
    b === Me.SpecialCauseImproving || b === Me.SpecialCauseDeteriorating ? q = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (C === Pe.Higher ? J : R).map((Q) => Q.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: C === Pe.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : b === Me.SpecialCauseNoJudgement ? q = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: C === Pe.Higher ? J.map((Q) => Q.join(",")).join(" ") : R.map((Q) => Q.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: C === Pe.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : b === Me.CommonCause && (q = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: re[0][0],
        y1: re[0][1],
        x2: re[1][0],
        y2: re[1][1],
        stroke: y.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const ee = Ka(
      y.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: D },
        { offset: "65%", opacity: L },
        { offset: "100%", opacity: N }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": te,
        "aria-description": U,
        ...h,
        children: [
          ee,
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
          q,
          M && (b === Me.SpecialCauseImproving || b === Me.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: C === Pe.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: M
            }
          )
        ]
      }
    );
  }
  const B = Ka(
    y.hex,
    p,
    x,
    i,
    l,
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
      "aria-label": te,
      "aria-description": U,
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
        M && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: y.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: C === Pe.Lower ? "340" : "155", children: M })
          }
        ),
        j ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: y.hex,
            ...C === Pe.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          E.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: k,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${E.map((K) => `${K.cx} ${K.cy}`).join(" L ")}`
            }
          ),
          E.map((K, O) => {
            const J = O >= E.length - 2 && F ? w : k, R = J;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: R,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: J,
                cx: K.cx,
                cy: K.cy,
                r: 16
              },
              O
            );
          })
        ] })
      ]
    }
  );
};
is.displayName = "SPCVariationIcon";
const dg = {
  [dt.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [dt.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [dt.Md]: { height: 44, pointR: 4, stroke: 1 },
  [dt.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [dt.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [dt.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function ug(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function fg(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
const hg = (e) => Ql(e), oc = ({
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
  size: h = dt.Sm,
  ariaLabel: p,
  className: x,
  onPointClick: g,
  maxPoints: m,
  thinningStrategy: I = "stride",
  colorPointsBySignal: D = !0,
  centerLine: L,
  controlLimits: N,
  sigmaBands: b,
  pointSignals: C,
  pointNeutralSpecialCause: T,
  visualCategories: _
}) => {
  const y = u, v = $e(
    () => ug(e, t),
    [e, t]
  ), $ = $e(() => fg(v), [v]), M = (() => {
    if (typeof h == "string")
      switch (h) {
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
    return h ?? dt.Sm;
  })(), F = dg[M], j = Math.max(v.length * 6, 60), k = j, w = M === dt.Full ? "100%" : j, E = F.height, te = $e(() => {
    if (M === dt.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${k} / ${E}`,
        display: "block"
      };
  }, [M, k, E]), U = Math.max(6, F.pointR + 3), B = Math.max(4, F.pointR + 3), K = $e(() => (e?.length ?? 0) - (v?.length ?? 0), [e?.length, v?.length]), O = L ?? $.mean ?? null, H = $e(() => {
    if (!o) return null;
    if (N) return N;
    const Y = v.filter((A) => typeof A.value == "number");
    if (!Y.length || O == null) return null;
    const S = Y.map((A) => A.value), P = Math.min(...S), G = Math.max(...S);
    return { lower: P, upper: G };
  }, [o, N?.lower, N?.upper, v, O]), R = $e(() => ({
    state: d ?? Me.CommonCause,
    firedRules: [],
    mean: O ?? null,
    stdDev: null,
    side: $.latestValue != null && O != null ? $.latestValue > O ? "above" : "below" : void 0
  }), [d, O, $.latestValue]).state, re = hg(R), q = (Y) => {
    const S = v.filter((z) => z.value != null);
    if (!S.length) return E / 2;
    const P = S.map((z) => z.value);
    H && (H.lower != null && P.push(H.lower), H.upper != null && P.push(H.upper));
    const G = Math.min(...P), A = Math.max(...P);
    return G === A ? E / 2 : E - (Y - G) / (A - G) * (E - B * 2) - B;
  }, ee = $e(() => {
    if (!m || v.length <= m)
      return v.map((W, X) => X);
    if (I === "stride") {
      const W = Math.max(2, m), X = (v.length - 1) / (W - 1), ne = /* @__PURE__ */ new Set();
      for (let oe = 0; oe < W; oe++) ne.add(Math.round(oe * X));
      return ne.add(v.length - 1), Array.from(ne).sort((oe, ue) => oe - ue);
    }
    const Y = v.map((W, X) => ({ i: X, v: W.value }));
    function S(W, X, ne) {
      const oe = W.i, ue = W.v ?? 0, he = X.i, me = X.v ?? 0, ve = ne.i, Se = ne.v ?? 0, qe = Math.abs((Se - me) * oe - (ve - he) * ue + ve * me - Se * he), He = Math.hypot(Se - me, ve - he);
      return He === 0 ? 0 : qe / He;
    }
    function P(W, X) {
      if (W.length <= 2) return W;
      let ne = -1, oe = -1;
      for (let ue = 1; ue < W.length - 1; ue++) {
        const he = S(W[ue], W[0], W[W.length - 1]);
        he > ne && (ne = he, oe = ue);
      }
      if (ne > X) {
        const ue = P(W.slice(0, oe + 1), X), he = P(W.slice(oe), X);
        return [...ue.slice(0, -1), ...he];
      }
      return [W[0], W[W.length - 1]];
    }
    let G = 0.1, A = Y;
    for (let W = 0; W < 8 && (A = P(Y, G), !(A.length <= m)); W++)
      G *= 1.6;
    const z = new Set(A.map((W) => W.i));
    return z.add(0), z.add(v.length - 1), Array.from(z).sort((W, X) => W - X);
  }, [v, m, I]), Q = $e(
    () => ee.map((Y) => v[Y]),
    [ee, v]
  ), ae = $e(() => Math.max(1, k - U * 2), [k, U]), de = $e(() => {
    const Y = Math.max(1, Q.length - 1);
    return (S) => S / Y * ae + U;
  }, [Q.length, ae, U]), V = $e(() => {
    let Y = "";
    return Q.forEach((S, P) => {
      if (S.value == null) return;
      const G = q(S.value), A = de(P);
      Y += Y ? ` L ${A} ${G}` : `M ${A} ${G}`;
    }), Y;
  }, [Q, de]), ie = $.latestIndex ?? -1, se = H, fe = ja(), ce = $e(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [v.length, f]
  ), pe = v.length >= (n || 0), Ae = p || "SPC sparkline", Ie = (() => {
    if (!R) return;
    const Y = y === Oe.Up ? ut.HigherIsBetter : y === Oe.Down ? ut.LowerIsBetter : ut.ContextDependent, S = {
      variationIcon: R === Me.SpecialCauseImproving ? Re.Improvement : R === Me.SpecialCauseDeteriorating ? Re.Concern : R === Me.SpecialCauseNoJudgement ? Re.Suppressed : Re.Neither,
      trend: y === Oe.Up ? Pe.Higher : Pe.Lower,
      polarity: Y
    };
    try {
      return ac(S);
    } catch {
      return;
    }
  })(), Ce = $e(() => {
    if (!pe) return 10;
    const Y = [...v].reverse().filter((P) => P.value != null).slice(0, 6).map((P) => q(P.value));
    return Y.length && Y.reduce((P, G) => P + G, 0) / Y.length < E / 2 ? E : 10;
  }, [v, pe, E]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": Ae,
      "aria-description": Ie,
      width: M === dt.Full ? void 0 : w,
      height: M === dt.Full ? void 0 : E,
      style: te,
      className: x,
      viewBox: `0 0 ${k} ${E}`,
      children: [
        f && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: ce, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: re,
                stopOpacity: Number(fe.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: re,
                stopOpacity: Number(fe.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: re,
                stopOpacity: Number(fe.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: k,
              height: E,
              fill: `url(#${ce})`
            }
          )
        ] }),
        se && se.lower != null && se.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                q(se.upper),
                q(se.lower)
              ),
              width: k,
              height: Math.abs(
                q(se.upper) - q(se.lower)
              ),
              fill: re,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: k,
              y1: q(se.lower),
              y2: q(se.lower),
              stroke: re,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: k,
              y1: q(se.upper),
              y2: q(se.upper),
              stroke: re,
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
                x2: k,
                y1: q(b.lowerTwo),
                y2: q(b.lowerTwo),
                stroke: re,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: k,
                y1: q(b.lowerOne),
                y2: q(b.lowerOne),
                stroke: re,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: k,
                y1: q(b.upperOne),
                y2: q(b.upperOne),
                stroke: re,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: k,
                y1: q(b.upperTwo),
                y2: q(b.upperTwo),
                stroke: re,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && O != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: k,
            y1: q(O),
            y2: q(O),
            stroke: un(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: V,
            fill: "none",
            stroke: un(),
            strokeWidth: F.stroke,
            strokeLinecap: "round"
          }
        ),
        ee.map((Y, S) => {
          const P = v[Y];
          if (!P || P.value == null) return null;
          const G = q(P.value), A = de(S), W = (Y === ie && l ? F.pointR + 1 : F.pointR) - 0.5;
          let X = un();
          if (D) {
            const ne = _?.[K + Y];
            if (ne != null)
              ne === nt.Improvement ? X = wr(Re.Improvement) : ne === nt.Concern ? X = wr(Re.Concern) : ne === nt.NoJudgement ? X = yt("no-judgement", "#490092") : X = un();
            else {
              const oe = C?.[K + Y];
              oe === Re.Improvement || oe === Re.Concern ? X = wr(oe) : X = T?.[K + Y] ? yt("no-judgement", "#490092") : un();
            }
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: A,
              cy: G,
              r: W,
              fill: X,
              stroke: "none",
              strokeWidth: 0,
              onClick: g ? () => g(Y, P) : void 0,
              style: g ? { cursor: "pointer" } : void 0,
              "data-index": Y,
              "data-signal-colour": D ? X : void 0
            },
            Y
          );
        }),
        c && pe && R && R !== Me.CommonCause && y && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: k - 4,
            y: Ce,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: re,
            "data-glyph-pos": Ce < E / 2 ? "top" : "bottom",
            children: y === Oe.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
oc.displayName = "SPCSpark";
function Yr(e) {
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
function sc(e) {
  return e === je.ImprovementHigh || e === je.ImprovementLow || e === je.ConcernHigh || e === je.ConcernLow || e === je.NeitherHigh || e === je.NeitherLow;
}
function pg({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [o, s] = Z.useState(""), i = Z.useRef("");
  return Z.useEffect(() => {
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
      error: e.filter((f) => f.severity === At.Error).length,
      warning: e.filter((f) => f.severity === At.Warning).length,
      info: e.filter((f) => f.severity === At.Info).length
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
        en,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let c = "grey";
            return l.severity === At.Error ? c = "red" : l.severity === At.Warning ? c = "orange" : l.severity === At.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(et, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ r.jsx(et, { color: "purple", text: n(l.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(et, { color: "grey", text: a(l.code) }),
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
function mg({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const ls = ({
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
  const d = Nr(), u = Nr(), { start: f, mid: h, end: p } = ja(), x = o || Vm[e], g = (i || Zm[e]).slice(0, 2), m = n || `Assurance ${e}`;
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
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: g })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === pn.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === pn.Uncertain ? /* @__PURE__ */ r.jsx(
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
ls.displayName = "SPCAssuranceIcon";
const gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: pn,
  Direction: Pe,
  MetricPolarity: ut,
  SPCAssuranceIcon: ls,
  SPCVariationIcon: is,
  VariationJudgement: _t,
  VariationState: Me,
  getVariationColour: Jl,
  getVariationTrend: os
}, Symbol.toStringTag, { value: "Module" }));
function xg(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: o, variant: s, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (l.filter(
    (b) => !b.data.ghost && b.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let b = l.length - 1; b >= 0; b--) {
    const C = l[b];
    if (C && C.data.value != null && !C.data.ghost) {
      u = b;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], h = f.classification?.variation, p = f.classification?.assurance, x = h === Re.Neither && !!f.classification?.neutralSpecialCauseValue, g = p === ln.Pass ? pn.Pass : p === ln.Fail ? pn.Fail : pn.Uncertain;
  let m;
  if (h === Re.Suppressed) {
    const b = !!f.rules.singlePoint.up, C = !!f.rules.singlePoint.down;
    o === sn.Up ? b ? m = Pe.Higher : C && (m = Pe.Lower) : o === sn.Down ? C ? m = Pe.Lower : b && (m = Pe.Higher) : m = Pe.Higher;
  } else if (h === Re.Neither && x) {
    const b = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, C = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    b && !C ? m = Pe.Higher : C && !b ? m = Pe.Lower : m = Pe.Higher;
  }
  const I = 80, D = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, L = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let N = je.CommonCause;
  return h === Re.Improvement ? N = je.ImprovementHigh : h === Re.Concern ? N = je.ConcernHigh : h === Re.Neither && (x ? m === Pe.Lower || L && !D ? N = je.NeitherLow : N = je.NeitherHigh : N = je.CommonCause), /* @__PURE__ */ r.jsxs(
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
              is,
              {
                dropShadow: !1,
                data: {
                  variationIcon: N,
                  improvementDirection: o,
                  specialCauseNeutral: x,
                  highSideSignal: D,
                  lowSideSignal: L,
                  ...m ? { trend: m } : {}
                },
                letterMode: o === sn.Neither ? sr.Direction : sr.Polarity,
                size: I,
                variant: s,
                runLength: s === gn.TriangleWithRun ? i : void 0
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
              ls,
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
const ic = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = tn(), d = cn(), [u, f] = Z.useState(null), [h, p] = Z.useState(!1), x = Z.useRef(null);
  Z.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), x.current && (cancelAnimationFrame(x.current), x.current = null)), !c.focused && !h) {
        const Ce = requestAnimationFrame(() => {
          f(null), x.current = null;
        });
        x.current = Ce;
      }
      return () => {
        x.current && (cancelAnimationFrame(x.current), x.current = null);
      };
    }
  }, [c, c?.focused, h]);
  const g = c && (c.focused || (h ? u : null) || u), [m, I] = Z.useState(!1);
  Z.useEffect(() => {
    const Ce = requestAnimationFrame(() => I(!0));
    return () => cancelAnimationFrame(Ce);
  }, [g?.index]);
  const D = d?.innerWidth ?? 0, L = d?.innerHeight ?? 0, N = g ? Math.min(Math.max(g.clientX, 0), D) : 0, b = g ? Math.min(Math.max(g.clientY, 0), L) : 0, C = d?.ref?.current || void 0;
  if (!g)
    return null;
  const T = e?.[g.index], y = ka(
    T ? {
      specialCauseSinglePointUp: !!T.rules.singlePoint.up,
      specialCauseSinglePointDown: !!T.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!T.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!T.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!T.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!T.rules.fourOfFive.down,
      specialCauseShiftUp: !!T.rules.shift.up,
      specialCauseShiftDown: !!T.rules.shift.down,
      specialCauseTrendUp: !!T.rules.trend.up,
      specialCauseTrendDown: !!T.rules.trend.down
    } : null
  ).map((Ce) => ({ id: Ce, label: $n[Ce].tooltip })), v = g.x instanceof Date ? g.x : new Date(g.x), $ = s ? s(v) : v.toDateString(), M = o ? `${o}` : "", F = a || M ? `${g.y}${M ? "" + M : " "}${a ? " " + a : ""}` : `${g.y}`, j = Ca(T?.classification?.variation), k = Zl(T?.classification?.assurance), w = Gm(
    t.mean ?? null,
    t.sigma,
    g.y
  ), E = n ? n(g.index, { x: g.x, y: g.y }) : void 0, te = j || k || w, U = T?.rules.trend.up || T?.rules.trend.down, B = T?.classification?.variation === Re.Neither && U, K = l && B ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, O = y.length > 0, H = T && "primeDirection" in T ? T.primeDirection : void 0, J = T && "primeRuleId" in T ? T.primeRuleId : void 0, R = i && T?.classification?.variation === Re.Neither && O, re = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", q = ql(T?.classification?.variation), ee = 6.2, ae = [
    E || "",
    `${$} • ${F}`
  ].filter(Boolean).reduce(
    (Ce, Y) => Math.max(Ce, Y.length * ee + 32),
    0
  ), de = 200, V = 440, ie = Math.min(V, Math.max(de, ae));
  let se = N + 12, ce = (d.margin?.top ?? 0) + b + 16;
  se + ie > D && (se = N - -60 - ie), se < 0 && (se = Math.max(0, D - ie));
  const pe = g ? `spc-tooltip-${g.index}` : "spc-tooltip", Ae = typeof g.index == "number" ? g.index : NaN, Ie = C ? ad(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: pe,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (m ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: se,
          top: ce,
          width: ie,
          maxWidth: V,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": m ? "false" : "true",
        "data-floating": !0,
        "data-placement": se + ie + 12 > D ? "left" : "right",
        onPointerEnter: () => {
          p(!0), x.current && (cancelAnimationFrame(x.current), x.current = null);
        },
        onPointerLeave: () => {
          if (p(!1), !c?.focused) {
            const Ce = requestAnimationFrame(() => {
              f(null), x.current = null;
            });
            x.current = Ce;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              Ae
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: $ })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: F })
          ] }),
          te && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: j?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: j,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : j?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: j,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : R ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : j ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: j,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          k && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Ce = k.toLowerCase(), S = !(Ce.includes("not met") || Ce.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Ce);
              return /* @__PURE__ */ r.jsx(
                et,
                {
                  text: k,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${S ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${k}`
                }
              );
            })() })
          ] }),
          w && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              et,
              {
                text: (() => {
                  const Ce = w.toLowerCase();
                  return Ce.startsWith("within 1") ? "≤1σ" : Ce.startsWith("1–2") ? "1–2σ" : Ce.startsWith("2–3") ? "2–3σ" : Ce.startsWith(">3") ? ">3σ" : w;
                })(),
                color: w.includes(">3") ? "orange" : w.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${w}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          K && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: K })
          ] }),
          O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: y.map(({ id: Ce, label: Y }) => {
                  const S = String(Ce), G = S === or.TrendIncreasing || S === or.TrendDecreasing ? "fdp-spc-tag--trend" : R ? "fdp-spc-tag--no-judgement" : j ? j.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : j.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    et,
                    {
                      text: Y,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${G}`,
                      "data-rule-id": S
                    },
                    S
                  );
                })
              }
            ),
            H && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Ce = R ? "fdp-spc-tag--no-judgement" : j ? j.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : j.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", Y = `${H}${J ? ` (${J})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  et,
                  {
                    text: Y,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${Ce}`,
                    "aria-label": `Prime direction ${H}${J ? ` via ${J}` : ""}`
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
            cx: N,
            cy: b,
            r: 7,
            fill: "none",
            stroke: re,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: N,
            cy: b,
            r: 5,
            fill: "#000",
            stroke: re,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: N,
            cy: b,
            r: 2.5,
            fill: q,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Ie
      ]
    }
  );
}, bg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = tn(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = Z.useMemo(
    () => l ? ka({
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
  ), d = Z.useMemo(
    () => Array.from(
      new Set(c.map((g) => $n[g]?.narration).filter(Boolean))
    ),
    [c]
  ), u = l ? Ca(l.classification?.variation) : null, f = l ? Zl(l.classification?.assurance) : null, h = c.length > 0, p = l ? l.classification?.variation === Re.Neither && h : !1, x = Z.useRef(null);
  return Z.useEffect(() => {
    if (!a || !s || l == null) return;
    const g = `${s.seriesId}:${s.index}`;
    if (x.current !== g) {
      x.current = g;
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
                      et,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      et,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ r.jsx(
                      et,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ r.jsx(
                      et,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const g = f.toLowerCase(), I = !(g.includes("not met") || g.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(g);
                      return /* @__PURE__ */ r.jsx(
                        et,
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
                  const m = String(g), D = m === or.TrendIncreasing || m === or.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", L = $n[g]?.tooltip || m;
                  return /* @__PURE__ */ r.jsx(
                    et,
                    {
                      text: L,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${D}`,
                      "data-rule-id": m,
                      title: $n[g]?.tooltip
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
function yg(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === ht.Common && n[s - 1] === n[s + 1] && n[s - 1] !== ht.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let i = o + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - o === 1 && s !== ht.Common && (n[o] = ht.Common), o = i;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const i = n[o], l = s - 1, c = l - o + 1;
        (i === ht.Common || c >= 2) && a.push({ start: o, end: l, category: i }), o = s;
      }
  }
  return a;
}
var qn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(qn || {}), lc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(lc || {});
function vg(e) {
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
    unit: g,
    targets: m,
    baselines: I,
    ghosts: D,
    settings: L,
    chartType: N,
    metricImprovement: b,
    gradientSequences: C,
    sequenceTransition: T,
    processLineWidth: _,
    showPartitionMarkers: y,
    showWarningsPanel: v,
    warningsFilter: $,
    enableNeutralNoJudgement: M,
    showTrendGatingExplanation: F,
    trendVisualMode: j,
    alwaysShowZeroY: k,
    alwaysShowHundredY: w,
    percentScale: E,
    showTrendStartMarkers: te,
    showFirstFavourableCrossMarkers: U,
    showTrendBridgeOverlay: B,
    showSignalsInspector: K,
    onSignalFocus: O,
    showIcons: H,
    showEmbeddedIcon: J,
    embeddedIconVariant: R,
    embeddedIconRunLength: re,
    showFocusIndicator: q,
    visualsScenario: ee,
    visualsEngineSettings: Q,
    source: ae,
    narrationContext: de,
    highlightOutOfControl: V,
    precomputed: ie
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (m !== void 0 || I !== void 0 || D !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && L !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (u !== void 0 || x !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (d !== void 0 || p !== void 0 || de !== void 0 || g !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (ee !== void 0 || Q !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && V !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && ae !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const se = n?.data ?? c ?? [], fe = n?.targets ?? m, ce = n?.baselines ?? I, pe = n?.ghosts ?? D, Ae = a?.chartType ?? N ?? Gl.XmR, Ie = a?.metricImprovement ?? b ?? sn.Neither, Ce = a?.settings ?? L, Y = a?.autoRecalc, S = t?.axes?.alwaysShowZeroY ?? k ?? !1, P = t?.axes?.alwaysShowHundredY ?? w ?? !1, G = t?.axes?.percentScale ?? E ?? !1, A = t?.visuals?.gradientSequences ?? C ?? !0, z = t?.visuals?.sequenceTransition ?? T ?? "slope", W = t?.visuals?.processLineWidth ?? _ ?? 2, X = t?.visuals?.trend?.visualMode ?? j ?? "ungated", ne = t?.visuals?.trend?.showGatingExplanation ?? F ?? !0, oe = t?.visuals?.rules?.enableNeutralNoJudgement ?? M ?? !0, ue = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, he = t?.visuals?.showZones, me = t?.visuals?.showPoints, ve = t?.visuals?.rules?.highlightOutOfControl, Se = o?.height, qe = o?.className, He = s?.label, at = s?.unit, ft = s?.narrationContext, le = i?.scenario, Ne = i?.settings, be = l?.source, _e = t?.overlays?.partitionMarkers ?? y ?? !1, Ge = t?.overlays?.trendStartMarkers ?? te ?? !1, Fe = t?.overlays?.firstFavourableCrossMarkers ?? U ?? !1, Ye = t?.overlays?.trendBridge ?? B ?? !1, We = t?.inspector?.show ?? K ?? !1, tt = t?.inspector?.onFocus ?? O, ke = t?.warnings?.show ?? v ?? !1, Te = t?.warnings?.filter ?? $, we = t?.icons?.show ?? H ?? !1, Ze = t?.icons?.embedded?.show ?? J ?? !0, it = t?.icons?.embedded?.variant ?? R ?? gn.Classic, jt = t?.icons?.embedded?.runLength ?? re, De = t?.overlays?.focusIndicator ?? q ?? !0;
  return {
    effData: se,
    effTargets: fe,
    effBaselines: ce,
    effGhosts: pe,
    effChartTypeCore: Ae,
    effMetricImprovementCore: Ie,
    effEngineSettings: Ce,
    effEngineAutoRecalc: Y,
    effHeight: Se,
    effClassName: qe,
    effAriaLabel: He,
    effUnit: at,
    effNarrationContext: ft,
    effShowZones: he,
    effShowPoints: me,
    effHighlightOutOfControl: ve,
    effVisualsScenario: le,
    effVisualsEngineSettings: Ne,
    effPrecomputedVisuals: ie,
    effSource: be,
    effAlwaysShowZeroY: S,
    effAlwaysShowHundredY: P,
    effPercentScale: G,
    effGradientSequences: A,
    effSequenceTransition: z,
    effProcessLineWidth: W,
    effTrendVisualMode: X,
    effShowTrendGatingExplanation: ne,
    effEnableNeutralNoJudgement: oe,
    effEnableRules: ue,
    effShowPartitionMarkers: _e,
    effShowTrendStartMarkers: Ge,
    effShowFirstFavourableCrossMarkers: Fe,
    effShowTrendBridgeOverlay: Ye,
    effShowSignalsInspector: We,
    effOnSignalFocus: tt,
    effShowWarningsPanel: ke,
    effWarningsFilter: Te,
    effShowIcons: we,
    effShowEmbeddedIcon: Ze,
    effEmbeddedIconVariant: it,
    effEmbeddedIconRunLength: jt,
    effShowFocusIndicator: De
  };
}
let wg = 0;
const Sg = ({ data: e, targets: t, visuals: n, a11y: a, axis: o, compute: s }) => {
  const {
    series: i,
    engineRows: l,
    visualCategories: c,
    partitionMarkers: d
  } = e, { limits: u, uniformTarget: f } = t, {
    showPoints: h,
    showZones: p,
    highlightOutOfControl: x,
    gradientSequences: g,
    sequenceTransition: m,
    processLineWidth: I,
    showFocusIndicator: D = !1,
    enableRules: L,
    enableNeutralNoJudgement: N = !0,
    showTrendStartMarkers: b = !1,
    showFirstFavourableCrossMarkers: C = !1,
    showTrendBridgeOverlay: T = !1
  } = n, {
    announceFocus: _,
    ariaLabel: y,
    narrationContext: v,
    showSignalsInspector: $ = !1,
    onSignalFocus: M,
    showTrendGatingExplanation: F = !0
  } = a, { zeroBreakSlotGapPx: j } = o, { metricImprovement: k, effectiveUnit: w } = s, E = Sn(), te = cn();
  if (!E) return null;
  const { xScale: U, yScale: B } = E, K = Z.useRef(
    "spc-seq-" + ++wg
  ), O = tn(), H = i[0]?.data || [], J = Z.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const S = /* @__PURE__ */ new Set();
    return H.forEach((P, G) => {
      typeof u.ucl == "number" && P.y > u.ucl && S.add(G), typeof u.lcl == "number" && P.y < u.lcl && S.add(G);
    }), S;
  }, [u.ucl, u.lcl, H]), R = Z.useMemo(() => {
    if (!l || !l.length) return null;
    const S = [];
    return l.forEach((P, G) => {
      const A = P.classification.variation === Re.Concern || P.classification.variation === Re.Improvement || !!P.classification.neutralSpecialCauseValue, z = !!P.rules.singlePoint.up || !!P.rules.twoOfThree.up || !!P.rules.fourOfFive.up || !!P.rules.shift.up || !!P.rules.trend.up, W = !!P.rules.singlePoint.down || !!P.rules.twoOfThree.down || !!P.rules.fourOfFive.down || !!P.rules.shift.down || !!P.rules.trend.down;
      S[G] = {
        variation: P.classification.variation,
        assurance: P.classification.assurance,
        special: A,
        concern: P.classification.variation === Re.Concern,
        improvement: P.classification.variation === Re.Improvement,
        trendUp: !!P.rules.trend.up,
        trendDown: !!P.rules.trend.down,
        upAny: z,
        downAny: W,
        neutralSpecial: !!P.classification.neutralSpecialCauseValue,
        shiftUp: !!P.rules.shift.up,
        shiftDown: !!P.rules.shift.down,
        twoOfThreeUp: !!P.rules.twoOfThree.up,
        twoOfThreeDown: !!P.rules.twoOfThree.down,
        fourOfFiveUp: !!P.rules.fourOfFive.up,
        fourOfFiveDown: !!P.rules.fourOfFive.down,
        partitionId: P.partition.id ?? null
      };
    }), S;
  }, [l]), re = Z.useMemo(() => (c || []).map((S) => S === nt.Improvement ? ht.Improvement : S === nt.Concern ? ht.Concern : S === nt.NoJudgement ? ht.NoJudgement : ht.Common), [c]), q = Z.useMemo(() => !g || !re.length ? [] : yg(re, !0), [g, re, y]), ee = Z.useMemo(
    () => H.map((S) => U(S.x instanceof Date ? S.x : new Date(S.x))),
    [H, U]
  ), Q = U.range()[1], ae = U.range()[0], de = Z.useMemo(() => {
    if (!l || !l.length)
      return null;
    let S = Number.POSITIVE_INFINITY, P = Number.POSITIVE_INFINITY;
    if (l.forEach((oe, ue) => {
      oe.rules.trend.up && (S = Math.min(S, ue)), oe.rules.trend.down && (P = Math.min(P, ue));
    }), !Number.isFinite(S) && !Number.isFinite(P))
      return null;
    const G = S <= P, A = G ? $t.Up : $t.Down, z = G ? S : P, W = (oe) => k == null || k === sn.Neither || oe == null || typeof oe.data.value != "number" || typeof oe.limits.mean != "number" ? !1 : A === $t.Up ? k === sn.Up ? oe.data.value > oe.limits.mean : oe.data.value < oe.limits.mean : k === sn.Down ? oe.data.value < oe.limits.mean : oe.data.value > oe.limits.mean;
    let X = null;
    for (let oe = z; oe < l.length; oe++) {
      const ue = l[oe];
      if (!(G ? !!ue.rules.trend.up : !!ue.rules.trend.down)) break;
      if (W(ue)) {
        X = oe;
        break;
      }
    }
    let ne = !1;
    if (X != null) {
      let oe = 0;
      for (let ue = X; ue < l.length; ue++) {
        const he = l[ue];
        if (!(G ? !!he.rules.trend.up : !!he.rules.trend.down)) break;
        W(he) && oe++;
      }
      ne = oe >= 2;
    }
    return {
      direction: A,
      detectedAt: z,
      firstFavourableCrossAt: X,
      persistedAcrossMean: ne
    };
  }, [l, k]), V = Z.useMemo(() => {
    if (!l || !l.length) return null;
    const S = (P) => {
      const G = [];
      let A = null, z = null;
      for (let W = 0; W < l.length; W++) {
        const X = l[W], ne = P(X), oe = typeof ne == "number" && !isNaN(ne) ? ne : null;
        if (oe == null) {
          A !== null && z != null && (G.push({
            x1: ee[A],
            x2: ee[W - 1],
            y: B(z)
          }), A = null, z = null);
          continue;
        }
        if (A === null) {
          A = W, z = oe;
          continue;
        }
        z != null && Math.abs(oe - z) <= 1e-9 || (z != null && G.push({
          x1: ee[A],
          x2: ee[W - 1],
          y: B(z)
        }), A = W, z = oe);
      }
      return A !== null && z != null && G.push({
        x1: ee[A],
        x2: ee[l.length - 1],
        y: B(z)
      }), G;
    };
    return {
      mean: S((P) => P.limits.mean ?? null),
      ucl: S((P) => P.limits.ucl ?? null),
      lcl: S((P) => P.limits.lcl ?? null),
      onePos: S((P) => P.limits.oneSigma.upper ?? null),
      oneNeg: S((P) => P.limits.oneSigma.lower ?? null),
      twoPos: S((P) => P.limits.twoSigma.upper ?? null),
      twoNeg: S((P) => P.limits.twoSigma.lower ?? null)
    };
  }, [l, ee, B]), ie = Z.useMemo(() => q.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${K.current}-grad-common`,
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
    q.map((S, P) => {
      const G = `${K.current}-grad-${P}`;
      let A, z = 0.28, W = 0.12, X = 0.045;
      switch (S.category) {
        case ht.Concern:
          A = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", z = 0.28, W = 0.12, X = 0.045;
          break;
        case ht.Improvement:
          A = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", z = 0.26, W = 0.11, X = 0.045;
          break;
        case ht.NoJudgement:
          A = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", z = 0.26, W = 0.11, X = 0.045;
          break;
        default:
          A = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: G, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: A, stopOpacity: z }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: A, stopOpacity: W }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: A, stopOpacity: X })
      ] }, G);
    })
  ] }) : null, [q]), se = Z.useMemo(() => {
    if (!q.length) return null;
    const [S] = B.domain(), P = B(S), G = q.map((A, z) => {
      const { start: W, end: X, category: ne } = A;
      if (W < 0 || X >= ee.length || W > X)
        return null;
      const oe = ee[W], ue = ee[X];
      let he = "";
      if (ne === ht.Common) {
        const me = z > 0 ? q[z - 1] : null, ve = z < q.length - 1 ? q[z + 1] : null, Se = me ? ee[me.end] : ae, qe = me ? B(H[me.end].y) : P, He = ve ? ee[ve.start] : Q, at = ve ? B(H[ve.start].y) : P;
        he = `M ${Se} ${P}`, he += ` L ${Se} ${qe}`;
        for (let ft = W; ft <= X; ft++)
          he += ` L ${ee[ft]} ${B(H[ft].y)}`;
        he += ` L ${He} ${at}`, he += ` L ${He} ${P} Z`;
      } else {
        const me = z > 0 ? q[z - 1] : null, ve = z < q.length - 1 ? q[z + 1] : null, Se = me && me.category !== ht.Common, qe = ve && ve.category !== ht.Common, He = B(H[W].y), at = B(H[X].y);
        let ft = oe, le = ue;
        if (Se) {
          const Ne = ee[me.end], be = B(H[me.end].y), _e = H[W].y - H[me.end].y;
          m === qn.Slope && _e > 0 ? (he = `M ${Ne} ${be} L ${oe} ${He}`, ft = Ne) : (he = `M ${oe} ${P} L ${oe} ${He}`, ft = oe);
        } else
          he = `M ${oe} ${P} L ${oe} ${He}`;
        for (let Ne = W + 1; Ne <= X; Ne++)
          he += ` L ${ee[Ne]} ${B(H[Ne].y)}`;
        if (he += ` L ${ue} ${at}`, qe) {
          const Ne = ee[ve.start], be = B(H[ve.start].y), _e = H[ve.start].y - H[X].y;
          (m === qn.Slope && _e <= 0 || m === qn.Extend) && (he += ` L ${Ne} ${be}`, le = Ne);
        }
        if (he += ` L ${le} ${P}`, he += ` L ${ft} ${P} Z`, m === qn.Neutral && Se) {
          const Ne = ee[me.end], be = B(H[me.end].y), _e = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${Ne} ${P} L ${Ne} ${be} L ${oe} ${He} L ${oe} ${P} Z`,
              fill: `url(#${K.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${z}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            _e,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: he,
                fill: `url(#${K.current}-grad-${z})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${z}`
            )
          ] }, `seq-group-${z}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: he,
          fill: `url(#${K.current}-grad-${z})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${z}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: G });
  }, [q, ee, Q, B, H, m]), fe = Z.useMemo(() => {
    if (!v?.timeframe && H.length >= 2) {
      const S = H.map((X) => X.x instanceof Date ? X.x : new Date(X.x)), P = new Date(Math.min(...S.map((X) => X.getTime()))), G = new Date(Math.max(...S.map((X) => X.getTime()))), A = Math.round((G.getTime() - P.getTime()) / 864e5) || 0;
      if (A < 14)
        return `The chart shows a timeframe of ${A + 1} days`;
      const z = Math.round(A / 7);
      return z < 20 ? `The chart shows a timeframe of ${z} weeks` : `The chart shows a timeframe of ${(G.getFullYear() - P.getFullYear()) * 12 + (G.getMonth() - P.getMonth()) + 1} months`;
    }
    if (v?.timeframe)
      return `The chart shows a timeframe of ${v.timeframe}`;
  }, [v?.timeframe, H]), ce = (S) => {
    const P = S % 10, G = S % 100;
    return P === 1 && G !== 11 ? `${S}st` : P === 2 && G !== 12 ? `${S}nd` : P === 3 && G !== 13 ? `${S}rd` : `${S}th`;
  }, pe = (S) => `${ce(S.getDate())} ${S.toLocaleString("en-GB", { month: "long" })}, ${S.getFullYear()}`, Ae = (S) => ({
    specialCauseSinglePointUp: !!S?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!S?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!S?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!S?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!S?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!S?.rules.fourOfFive.down,
    specialCauseShiftUp: !!S?.rules.shift.up,
    specialCauseShiftDown: !!S?.rules.shift.down,
    specialCauseTrendUp: !!S?.rules.trend.up,
    specialCauseTrendDown: !!S?.rules.trend.down
  }), Ie = Z.useCallback(
    ({
      index: S,
      x: P,
      y: G
    }) => {
      const A = l?.[S], z = P instanceof Date ? P : new Date(P), W = pe(z), X = v?.measureUnit ? ` ${v.measureUnit}` : "", ne = v?.measureName ? ` ${v.measureName}` : "";
      if (!A)
        return `General summary is: ${fe ? fe + ". " : ""}Point ${S + 1}, ${W}, ${G}${X}${ne}`;
      const oe = Ca(A.classification?.variation) || "Variation", ue = ka(Ae(A)), he = ue.length ? ` Rules: ${[...new Set(ue.map((ve) => $n[ve].narration))].join("; ")}.` : " No special cause rules.", me = [];
      return v?.measureName && me.push(`Measure: ${v.measureName}.`), v?.datasetContext && me.push(`${v.datasetContext}.`), v?.organisation && me.push(`Organisation: ${v.organisation}.`), v?.additionalNote && me.push(v.additionalNote), [
        "General summary is:",
        ...me,
        `Point ${S + 1} recorded on `,
        W + ",",
        `with a value of ${G} ${X}${ne}`,
        oe + ".",
        he
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, v, fe]
  ), Ce = Z.useCallback(
    (S, P) => l?.[S] ? Ie({
      index: S,
      seriesId: "process",
      x: P.x instanceof Date ? P.x : new Date(P.x),
      y: P.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, Ie]
  ), Y = Z.useMemo(() => {
    try {
      const S = typeof B?.domain == "function" ? B.domain() : void 0;
      if (!S || !Array.isArray(S) || S.length < 2) return !1;
      const P = Math.min(S[0], S[1]), G = Math.max(S[0], S[1]);
      return !(0 >= P && 0 <= G);
    } catch {
      return !1;
    }
  }, [B]);
  return /* @__PURE__ */ r.jsx(Rm, { children: /* @__PURE__ */ r.jsxs(
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
            width: E.xScale.range()[1] + 56 + 16,
            height: (te?.innerHeight ?? E.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(hi, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                hi,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: Y,
                    gapPx: j,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(rm, { axis: "y" }),
              ie,
              se,
              d.map((S, P) => {
                const G = H[S];
                if (!G) return null;
                const A = U(G.x instanceof Date ? G.x : new Date(G.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: A,
                    x2: A,
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
              V?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                V.mean.map((S, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: S.x1,
                    x2: S.x2,
                    y1: S.y,
                    y2: S.y
                  },
                  `mean-${P}`
                )),
                V.mean.map((S, P) => {
                  if (P === V.mean.length - 1) return null;
                  const G = V.mean[P + 1];
                  if (!G || S.y === G.y) return null;
                  const z = Math.max(4, G.x1 - S.x2 || 0) * 0.5, W = `M ${S.x2},${S.y} C ${S.x2 + z},${S.y} ${G.x1 - z},${G.y} ${G.x1},${G.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: W,
                      fill: "none"
                    },
                    `mean-join-${P}`
                  );
                })
              ] }) : null,
              f != null && /* @__PURE__ */ r.jsx(r.Fragment, {}),
              V?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    V.ucl.map((S, P) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: S.x1,
                        x2: S.x2,
                        y1: S.y,
                        y2: S.y,
                        strokeWidth: 2
                      },
                      `ucl-${P}`
                    )),
                    V.ucl.map((S, P) => {
                      if (P === V.ucl.length - 1) return null;
                      const G = V.ucl[P + 1];
                      if (!G || S.y === G.y) return null;
                      const z = Math.max(4, G.x1 - S.x2 || 0) * 0.5, W = `M ${S.x2},${S.y} C ${S.x2 + z},${S.y} ${G.x1 - z},${G.y} ${G.x1},${G.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: W,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${P}`
                      );
                    })
                  ]
                }
              ) : null,
              V?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    V.lcl.map((S, P) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: S.x1,
                        x2: S.x2,
                        y1: S.y,
                        y2: S.y,
                        strokeWidth: 2
                      },
                      `lcl-${P}`
                    )),
                    V.lcl.map((S, P) => {
                      if (P === V.lcl.length - 1) return null;
                      const G = V.lcl[P + 1];
                      if (!G || S.y === G.y) return null;
                      const z = Math.max(4, G.x1 - S.x2 || 0) * 0.5, W = `M ${S.x2},${S.y} C ${S.x2 + z},${S.y} ${G.x1 - z},${G.y} ${G.x1},${G.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: W,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${P}`
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
                    x2: U.range()[1],
                    y1: B(f),
                    y2: B(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: U.range()[0] - 7,
                    y: B(f) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      f,
                      " ",
                      w || v?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && V && V.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                V.onePos.map((S, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: S.x1,
                    x2: S.x2,
                    y1: S.y,
                    y2: S.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${P}`
                )),
                V.oneNeg.map((S, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: S.x1,
                    x2: S.x2,
                    y1: S.y,
                    y2: S.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${P}`
                )),
                V.twoPos.map((S, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: S.x1,
                    x2: S.x2,
                    y1: S.y,
                    y2: S.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${P}`
                )),
                V.twoNeg.map((S, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: S.x1,
                    x2: S.x2,
                    y1: S.y,
                    y2: S.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${P}`
                ))
              ] }),
              de && (b || C || T) && (() => {
                const S = de.detectedAt, P = de.firstFavourableCrossAt, G = H[S] ? U(
                  H[S].x instanceof Date ? H[S].x : new Date(H[S].x)
                ) : null, A = H[S] ? B(H[S].y) : null, z = P != null && H[P] ? U(
                  H[P].x instanceof Date ? H[P].x : new Date(H[P].x)
                ) : null, W = P != null && H[P] ? B(H[P].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  T && G != null && A != null && z != null && W != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: G,
                      y1: A,
                      x2: z,
                      y2: W,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  b && G != null && A != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: A,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  C && z != null && W != null && /* @__PURE__ */ r.jsx("circle", { cx: z, cy: W, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Bm,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (S) => S.x instanceof Date ? S.x : new Date(S.x),
                  smooth: !1,
                  strokeWidth: I
                }
              ),
              h && H.map((S, P) => {
                const G = U(S.x instanceof Date ? S.x : new Date(S.x)), A = B(S.y), z = J.has(P), W = R?.[P], X = re[P], ne = X === ht.Improvement, oe = X === ht.Concern, ue = X === ht.NoJudgement, he = [
                  "fdp-spc__point",
                  z && x ? "fdp-spc__point--ooc" : null,
                  L && oe ? "fdp-spc__point--sc-concern" : null,
                  L && ne ? "fdp-spc__point--sc-improvement" : null,
                  L && N && ue ? "fdp-spc__point--sc-no-judgement" : null,
                  W?.assurance === ln.Pass ? "fdp-spc__point--assurance-pass" : null,
                  W?.assurance === ln.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), me = O?.focused?.index === P;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: G,
                    cy: A,
                    r: 5,
                    className: he,
                    "data-variation": W?.variation,
                    "data-assurance": W?.assurance,
                    "aria-label": y,
                    ...me ? { "aria-describedby": `spc-tooltip-${P}` } : {}
                  },
                  P
                );
              }),
              D && $ && O?.focused && (() => {
                const S = O.focused, P = typeof S.index == "number" ? S.index : -1;
                if (P < 0 || !H[P]) return null;
                const G = U(
                  H[P].x instanceof Date ? H[P].x : new Date(H[P].x)
                ), A = B(H[P].y), z = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: A,
                      r: 7,
                      fill: "none",
                      stroke: z,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: A,
                      r: 5,
                      fill: "#000",
                      stroke: z,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: A,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              te && /* @__PURE__ */ r.jsx(
                _g,
                {
                  width: U.range()[1],
                  height: B.range()[0]
                }
              ),
              !$ && /* @__PURE__ */ r.jsx(
                ic,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: Ce,
                  measureName: v?.measureName,
                  measureUnit: v?.measureUnit,
                  dateFormatter: (S) => pe(S),
                  enableNeutralNoJudgement: N,
                  showTrendGatingExplanation: F
                }
              )
            ] })
          }
        ),
        $ && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          bg,
          {
            engineRows: l,
            measureName: v?.measureName,
            measureUnit: w || v?.measureUnit,
            onSignalFocus: M
          }
        ) }),
        _ && /* @__PURE__ */ r.jsx(
          Hm,
          {
            format: (S) => Ie({ ...S, x: S.x instanceof Date ? S.x : new Date(S.x) })
          }
        )
      ]
    }
  ) });
}, _g = ({
  width: e,
  height: t
}) => {
  const n = tn();
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
function Ci(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function kg(e, t, n) {
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
function Cg(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++)
    a.push(n[c].getTime() - n[c - 1].getTime());
  const o = a.sort((c, d) => c - d), s = o[Math.floor(o.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function Ni(e, t) {
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
function Ng(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function jg(e, t, n = 1) {
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
function cc(e) {
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
  let p = (n || []).map(Ci);
  if (!p.some(Boolean)) {
    const y = Ci(o);
    y && a ? p = kg(f.length, y, a) : p = new Array(f.length).fill(void 0);
  }
  const g = Cg(p, a), m = Ng(
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
  function L() {
    if (h < 0) return -1;
    if (D.strategy === "previous" || D.strategy === "n-points") {
      let F = h - (D.strategy === "previous" ? 1 : Math.max(1, D.n || 1));
      if (!D.skipNulls) return F;
      for (let j = F; j >= 0; j--) if (f[j] != null) return j;
      return -1;
    }
    const y = p[h];
    if (!y) return -1;
    const v = new Date(y);
    v.setFullYear(v.getFullYear() - 1);
    let $ = -1, M = 1 / 0;
    for (let F = 0; F < p.length; F++) {
      const j = p[F];
      if (!j || f[F] == null) continue;
      const k = Math.abs(j.getTime() - v.getTime());
      k < M && (M = k, $ = F);
    }
    return $;
  }
  const N = L(), b = N >= 0 ? f[N] : null;
  let C;
  if (c && I != null && b != null) {
    const y = I - b, v = D.absolute !== !1, $ = v ? y : b === 0 ? 0 : y / Math.abs(b) * 100;
    C = {
      value: Number.isFinite($) ? Number($.toFixed(2)) : 0,
      isPercent: v ? m === "%" : !0,
      period: `vs ${jg(g, a, D.strategy === "n-points" ? Math.max(1, D.n || 1) : 1)}`
    };
  }
  const T = h >= 0 ? p[h] : void 0, _ = d && Ni(T, g) ? `Latest: ${Ni(T, g)}` : void 0;
  return { value: I, unit: m, delta: C, metadata: _, latestDate: T, frequency: g };
}
function Mg(e) {
  const { rows: t } = fr(e), n = ss(e);
  return { rows: t, visuals: n.visuals };
}
const cs = 13;
function ds(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case nt.Improvement:
          return Re.Improvement;
        case nt.Concern:
          return Re.Concern;
        case nt.NoJudgement:
          return Re.Neither;
        default:
          return null;
      }
    });
}
function dc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === nt.NoJudgement);
}
function ji(e, t) {
  const n = e === Nt.G ? Nt.G : e === Nt.T ? Nt.T : Nt.XmR, a = t === Oe.Up ? Oe.Up : t === Oe.Down ? Oe.Down : Oe.Neither;
  return { chartType: n, metricImprovement: a };
}
function Mi(e, t, n) {
  const a = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : cs, o = { minimumPoints: a };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= a && (o.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (o.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(o, n), Object.keys(o).length ? o : void 0;
}
function Ig(e, t, n) {
  const a = Z.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: o, totalReservedPx: s } = Z.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = kr, u = c + Kp, f = n?.maxFraction, h = Math.max(
      Cr,
      Math.floor(l * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: o, totalReservedPx: s };
}
function Dg(e, t, n, a) {
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
function yo(e, t) {
  if (!e?.length || t.chartType !== Nt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let p = 0; p < e.length; p++) {
    const x = e[p], g = x.value;
    x?.ghost || typeof g == "number" && Number.isFinite(g) && a.push({ idx: p, value: g });
  }
  if (a.length < n * 2) return null;
  let o = 0, s = 0;
  for (let p = 1; p < a.length; p++)
    o += Math.abs(a[p].value - a[p - 1].value), s++;
  if (s === 0) return null;
  const l = o / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Oe.Up, u = t.metricImprovement === Oe.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, x) {
    let g = 0, m = 0;
    for (let I = p; I < x; I++)
      g += a[I].value, m++;
    return m ? g / m : NaN;
  }
  for (let p = n; p <= a.length - n; p++) {
    const x = h(p - n, p), g = h(p, p + n);
    if (!Number.isFinite(x) || !Number.isFinite(g)) continue;
    const m = g - x, I = m / l;
    let D = !1, L = !1;
    if (d ? (D = I >= c, L = !0) : u ? (D = -I >= c, L = !1) : (D = Math.abs(I) >= c, L = m > 0), !D) continue;
    const N = (T) => L ? T > x : T < x;
    let b = !0;
    for (let T = p; T < p + n; T++)
      if (!N(a[T].value)) {
        b = !1;
        break;
      }
    if (!b) continue;
    const C = a[p].idx;
    if (!(t.minGap && f >= 0 && C - f < t.minGap))
      return C;
  }
  return null;
}
function Tg(e, t) {
  const n = yo(e, t);
  return n == null ? e.slice() : e.map((a, o) => o === n ? { ...a, baseline: !0 } : a);
}
function Lg(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return Tg(e, t);
  let a = e.slice(), o = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; o < n; ) {
    const i = yo(a, { ...t, minGap: s });
    if (i == null) break;
    if (a[i]?.baseline) {
      const l = yo(a, { ...t, minGap: s + 1 });
      if (l == null || l === i) break;
      a = a.map((c, d) => d === l ? { ...c, baseline: !0 } : c), o++;
      continue;
    }
    a = a.map((l, c) => c === i ? { ...l, baseline: !0 } : l), o++;
  }
  return a;
}
const $g = (e) => {
  const t = Z.useCallback(
    (ke) => String(ke).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((we) => we.length ? we[0].toUpperCase() + we.slice(1) : we).join(" "),
    []
  ), n = Z.useCallback(
    (ke) => String(ke).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Te) => Te.length ? Te[0].toUpperCase() + Te.slice(1) : Te).join(" "),
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
    effProcessLineWidth: g,
    effTrendVisualMode: m,
    effShowTrendGatingExplanation: I,
    effEnableNeutralNoJudgement: D,
    effEnableRules: L,
    effShowPartitionMarkers: N,
    effShowTrendStartMarkers: b,
    effShowFirstFavourableCrossMarkers: C,
    effShowTrendBridgeOverlay: T,
    effShowSignalsInspector: _,
    effOnSignalFocus: y,
    effShowWarningsPanel: v,
    effWarningsFilter: $,
    effShowEmbeddedIcon: M,
    effEmbeddedIconVariant: F,
    effEmbeddedIconRunLength: j,
    effShowFocusIndicator: k,
    effHeight: w,
    effClassName: E,
    effAriaLabel: te,
    effUnit: U,
    effNarrationContext: B,
    effShowZones: K,
    effShowPoints: O,
    effHighlightOutOfControl: H,
    effVisualsScenario: J,
    effVisualsEngineSettings: R,
    effSource: re,
    effPrecomputedVisuals: q,
    effEngineAutoRecalc: ee
  } = vg(e), Q = te ?? e.ariaLabel, ae = w ?? e.height ?? 260, de = E ?? e.className, V = U ?? e.unit, ie = B ?? e.narrationContext, se = K ?? e.showZones, fe = O ?? e.showPoints, ce = H ?? e.highlightOutOfControl, pe = J ?? e.visualsScenario ?? nc.None, Ae = R ?? e.visualsEngineSettings, Ie = re ?? e.source, Ce = e.a11y?.announceFocus ?? e.announceFocus ?? !1, Y = Z.useMemo(() => a.map((ke, Te) => ({
    x: ke.x,
    value: ke.y,
    target: o?.[Te] ?? void 0,
    baseline: s?.[Te] ?? void 0,
    ghost: i?.[Te] ?? void 0
  })), [a, o, s, i]), S = Z.useMemo(() => {
    try {
      const ke = ee;
      return ke?.enabled ? Lg(Y, {
        chartType: l,
        metricImprovement: c,
        shiftLength: ke.shiftLength,
        deltaSigma: ke.deltaSigma,
        minGap: ke.minGap,
        maxInsertions: ke.maxInsertions
      }) : Y;
    } catch {
      return Y;
    }
  }, [Y, ee, l, c]), P = Z.useMemo(() => {
    if (q?.visuals) return q.visuals;
    try {
      const ke = Mi(
        d,
        S,
        Ae
      ), { chartType: Te, metricImprovement: we } = ji(
        l,
        c
      ), Ze = {
        chartType: Te,
        metricImprovement: we,
        data: S,
        settings: ke
      }, { visuals: it } = lg(Ze, pe, {
        trendVisualMode: m === lc.Ungated ? Bn.Ungated : Bn.Gated,
        enableNeutralNoJudgement: D
      });
      return it || [];
    } catch {
      return [];
    }
  }, [
    q?.visuals?.length,
    S,
    l,
    c,
    m,
    D,
    d,
    pe,
    Ae
  ]), A = Z.useMemo(() => {
    if (q?.rows)
      try {
        const ke = q.rows, Te = (we) => {
          switch (we) {
            case je.ImprovementHigh:
            case je.ImprovementLow:
              return Re.Improvement;
            case je.ConcernHigh:
            case je.ConcernLow:
              return Re.Concern;
            case je.NeitherHigh:
            case je.NeitherLow:
              return Re.Neither;
            case je.CommonCause:
            default:
              return Re.Neither;
          }
        };
        return ke.map(
          (we, Ze) => ({
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
              variation: Te(we.variationIcon),
              neutralSpecialCauseValue: we.variationIcon === je.NeitherHigh || we.variationIcon === je.NeitherLow ? we.specialCauseImprovementValue ?? we.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: S[Ze]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const ke = Mi(
        d,
        S,
        Ae
      ), { chartType: Te, metricImprovement: we } = ji(
        l,
        c
      ), Ze = {
        chartType: Te,
        metricImprovement: we,
        data: S,
        settings: ke
      }, { rows: it } = Mg(Ze), jt = (De) => {
        switch (De) {
          case je.ImprovementHigh:
          case je.ImprovementLow:
            return Re.Improvement;
          case je.ConcernHigh:
          case je.ConcernLow:
            return Re.Concern;
          case je.NeitherHigh:
          case je.NeitherLow:
            return Re.Neither;
          case je.CommonCause:
          default:
            return Re.Neither;
        }
      };
      return it.map(
        (De, wt) => ({
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
          target: S[wt]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    q?.rows?.length,
    S,
    l,
    c,
    d,
    Ae
  ]) || null, z = (A || []).slice().reverse().find((ke) => ke.limits.mean != null), W = z?.limits.mean ?? null, X = Z.useMemo(() => {
    const ke = [];
    try {
      const Te = A, we = d?.minimumPoints ?? 13, Ze = d?.minimumPoints ?? 12;
      if (Te && Te.length) {
        const it = Te.filter(
          (De) => !De.data.ghost && De.data.value != null
        ).length;
        it < we && ke.push({
          code: Gr.InsufficientPointsGlobal,
          severity: At.Warning,
          category: Wr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: it, minimumPoints: we }
        });
        const jt = /* @__PURE__ */ new Map();
        for (const De of Te) {
          const wt = De.partition.id ?? 0, Ct = jt.get(wt) || { size: 0, nonGhost: 0 };
          Ct.size += 1, !De.data.ghost && De.data.value != null && (Ct.nonGhost += 1), jt.set(wt, Ct);
        }
        for (const [De, wt] of jt)
          wt.nonGhost > 0 && wt.nonGhost < Ze && ke.push({
            code: Gr.InsufficientPointsPartition,
            severity: At.Warning,
            category: Wr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: De,
              nonGhostCount: wt.nonGhost,
              minimumPointsPartition: Ze
            }
          });
      }
    } catch {
    }
    return ke;
  }, [A, d?.minimumPoints]), ne = Z.useMemo(() => X.length ? $ ? X.filter((ke) => !($.severities && ke.severity && !$.severities.includes(ke.severity) || $.categories && ke.category && !$.categories.includes(ke.category) || $.codes && !$.codes.includes(ke.code))) : X : [], [X, $]), oe = z?.limits.ucl ?? null, ue = z?.limits.lcl ?? null, he = z?.limits.oneSigma.upper ?? null, me = z?.limits.oneSigma.lower ?? null, ve = z?.limits.twoSigma.upper ?? null, Se = z?.limits.twoSigma.lower ?? null, qe = W != null && he != null ? Math.abs(he - W) : 0, He = Z.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), at = Z.useMemo(
    () => Dg(
      a,
      { mean: W, ucl: oe, lcl: ue, onePos: he, oneNeg: me, twoPos: ve, twoNeg: Se },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      o ?? null
    ),
    [
      a,
      W,
      oe,
      ue,
      he,
      me,
      ve,
      Se,
      o,
      u,
      f,
      h
    ]
  ), ft = Z.useMemo(() => {
    const ke = (Te) => {
      const we = Te.filter(
        (it) => typeof it == "number" && !isNaN(it)
      );
      if (!we.length) return null;
      const Ze = we[0];
      return we.every((it) => it === Ze) ? Ze : null;
    };
    if (A && A.length) {
      const Te = ke(A.map((we) => we.target));
      if (Te != null) return Te;
    }
    return o && o.length ? ke(o) : null;
  }, [A, o]), { show: le, slotPx: Ne, totalReservedPx: be } = Ig(
    at,
    ae,
    { maxFraction: 0.35 }
  ), _e = le ? be : 0, Ge = Z.useMemo(() => {
    const ke = a.map((Te) => Te.x);
    return cc({
      values: a.map((Te) => Te.y),
      dates: ke,
      providedUnit: V || ie?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, V, ie?.measureUnit]), Fe = V ?? ie?.measureUnit ?? Ge.unit, Ye = Z.useMemo(() => Fe ? { ...ie || {}, measureUnit: Fe } : ie, [ie, Fe]), We = Z.useMemo(() => {
    if (!A) return [];
    const ke = [];
    for (let Te = 1; Te < A.length; Te++)
      A[Te].partition.id !== A[Te - 1].partition.id && ke.push(Te);
    return ke;
  }, [A]), tt = Z.useMemo(
    () => xg({
      show: !!M,
      rowsForUi: A,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: F,
      runLength: j
    }),
    [
      M,
      A,
      d?.minimumPoints,
      c,
      F,
      j
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: de ? `fdp-spc-chart-wrapper ${de}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          mg,
          {
            show: !!M,
            variationNode: tt,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          Jp,
          {
            height: ae,
            ariaLabel: Q,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ r.jsx(Xp, { series: He, yDomain: at, yBottomGapPx: _e, children: (() => {
              const ke = {
                data: {
                  series: He,
                  engineRows: A,
                  visualCategories: P,
                  partitionMarkers: N ? We : []
                },
                targets: {
                  limits: { mean: W, ucl: oe, lcl: ue, sigma: qe, onePos: he, oneNeg: me, twoPos: ve, twoNeg: Se },
                  uniformTarget: ft
                },
                visuals: {
                  showPoints: fe,
                  showZones: se,
                  highlightOutOfControl: ce,
                  gradientSequences: p,
                  sequenceTransition: x,
                  processLineWidth: g,
                  showFocusIndicator: k,
                  enableRules: L,
                  enableNeutralNoJudgement: D,
                  showTrendStartMarkers: b,
                  showFirstFavourableCrossMarkers: C,
                  showTrendBridgeOverlay: T
                },
                a11y: {
                  announceFocus: Ce,
                  ariaLabel: Q,
                  narrationContext: Ye,
                  showSignalsInspector: _,
                  onSignalFocus: y,
                  showTrendGatingExplanation: I
                },
                axis: { zeroBreakSlotGapPx: Ne },
                compute: { effectiveUnit: Fe, metricImprovement: c }
              };
              return /* @__PURE__ */ r.jsx(Sg, { ...ke });
            })() })
          }
        ),
        Ie && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Ie == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          Ie
        ] }) : Ie }),
        /* @__PURE__ */ r.jsx(
          pg,
          {
            show: !!v,
            warnings: ne,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function Ag(e, t) {
  const {
    chartType: n = Nt.XmR,
    metricImprovement: a,
    minimumPoints: o = cs,
    enableNeutralNoJudgement: s = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map((L) => ({ x: L.x, value: L.value ?? L.y ?? null }));
  let c = null;
  try {
    const L = l.filter(
      (b) => typeof b.value == "number"
    ).length, N = { minimumPoints: o };
    L >= o && (N.chartLevelEligibility = !0), c = fr({ chartType: n, metricImprovement: a, data: l, settings: N });
  } catch {
    c = null;
  }
  const d = c?.rows ?? [];
  let u = d[d.length - 1] ?? null;
  for (let L = d.length - 1; L >= 0; L--) {
    const N = d[L];
    if (N && N.value != null && !N.ghost) {
      u = N;
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
  const h = Yr(
    u?.variationIcon
  ), p = u?.variationIcon ?? null, x = u?.mean ?? null, g = u ? {
    lower: u?.lowerProcessLimit ?? null,
    upper: u?.upperProcessLimit ?? null
  } : null, m = u ? {
    upperOne: u?.upperOneSigma ?? null,
    upperTwo: u?.upperTwoSigma ?? null,
    lowerOne: u?.lowerOneSigma ?? null,
    lowerTwo: u?.lowerTwoSigma ?? null
  } : null;
  let I, D;
  return i && (I = ds(f), D = dc(f)), {
    rows: d,
    visuals: f,
    latestState: h,
    lastVariationIcon: p,
    centerLine: x,
    controlLimits: g,
    sigmaBands: m,
    pointSignals: I,
    pointNeutralSpecialCause: D
  };
}
const y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: ln,
  BaselineSuggestionReason: Vl,
  ChartType: Nt,
  DEFAULT_MIN_POINTS: cs,
  Icons: gg,
  ImprovementDirection: Oe,
  PARITY_V26: rc,
  RULE_METADATA: Yl,
  SPCChart: $g,
  SPCTooltipOverlay: ic,
  SpcEmbeddedIconVariant: gn,
  SpcVisualCategory: nt,
  SpcWarningCategory: Wr,
  SpcWarningCode: Gr,
  SpcWarningSeverity: At,
  VARIATION_COLOR_TOKENS: Tt,
  VariationIcon: je,
  buildSpcV26a: fr,
  buildSpcV26aWithVisuals: ss,
  computeSpcPrecomputed: Ag,
  computeSpcVisualCategories: ur,
  extractRuleIds: ka,
  getVariationColorHex: Ym,
  getVariationColorToken: ql,
  isSpecialCauseIcon: sc,
  mapIconToVariation: Yr,
  normaliseSpcSettingsV2: tc,
  ruleGlossary: $n,
  variationLabel: Ca,
  visualsToNeutralFlags: dc,
  visualsToPointSignals: ds,
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
    x: n,
    chartType: a = Nt.XmR,
    metricImprovement: o = Oe.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = Z.useMemo(() => {
    const b = [];
    for (let C = 0; C < t.length; C++)
      b.push({ x: n?.[C], value: t[C] });
    return b;
  }, [t, n]), u = Z.useMemo(() => {
    try {
      const b = d.map((y, v) => ({ x: y.x ?? v, value: y.value })), C = 13, T = b.filter((y) => typeof y.value == "number").length, _ = { minimumPoints: C };
      return T >= C && (_.chartLevelEligibility = !0), fr({ chartType: a, metricImprovement: o, data: b, settings: _ });
    } catch {
      return null;
    }
  }, [d, a, o]), f = Z.useMemo(() => {
    const b = u?.rows;
    if (!b || b.length === 0) return null;
    for (let C = b.length - 1; C >= 0; C--) {
      const T = b[C];
      if (T && T.value != null && !T.ghost) return T;
    }
    return b[b.length - 1] ?? null;
  }, [u]), h = Z.useMemo(() => {
    const b = u?.rows;
    if (!b || b.length === 0) return null;
    let C = b[b.length - 1];
    for (let T = b.length - 1; T >= 0; T--) {
      const _ = b[T];
      if (_ && _.value != null && !_.ghost) {
        C = _;
        break;
      }
    }
    return Yr(C?.variationIcon);
  }, [u]), p = Z.useMemo(() => f?.mean ?? null, [f]), x = Z.useMemo(() => {
    if (!f) return null;
    const b = f?.lowerProcessLimit ?? null, C = f?.upperProcessLimit ?? null;
    return b == null && C == null ? null : { lower: b, upper: C };
  }, [f]), g = Z.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), m = Z.useMemo(() => {
    const b = u?.rows;
    if (!(!b || b.length === 0))
      try {
        return ur(b, {
          metricImprovement: o,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, o]), I = Z.useMemo(() => ds(m), [m?.length]), D = Z.useMemo(() => {
    if (!(!m || m.length === 0))
      return m.map((b) => b === nt.NoJudgement);
  }, [m?.length]), L = Z.useMemo(() => {
    let b = null;
    if (f && f.value != null && !f.ghost) {
      const F = f.variationIcon;
      h === Me.SpecialCauseNoJudgement ? b = sc(F) ? Me.SpecialCauseNoJudgement : Me.CommonCause : b = Yr(F) ?? Me.CommonCause;
    }
    const C = b ?? Me.CommonCause, T = Na[C].hex, [_, y, v] = Eg(T), $ = ja();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${_}, ${y}, ${v}, ${$.start}) 0%, rgba(${_}, ${y}, ${v}, ${$.mid}) 50%, rgba(${_}, ${y}, ${v}, ${$.end}) 100%)`,
      "--fdp-metric-card-accent": T
    };
  }, [f, h]);
  return { sparkProps: Z.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: p,
    controlLimits: x,
    sigmaBands: g,
    pointSignals: I,
    pointNeutralSpecialCause: D,
    visualCategories: m,
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
    g?.upperTwo,
    g?.lowerOne,
    g?.lowerTwo,
    I?.length,
    D?.length,
    m?.length
  ]), metricCardStyle: L, latestState: h };
}
const v1 = ({
  sparkData: e,
  direction: t = Oe.Neither,
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
  const g = Pg({
    values: e.map((C) => C.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n
  }), m = /* @__PURE__ */ r.jsx(oc, { ...g.sparkProps, maxPoints: i }), I = Z.useMemo(() => cc({
    values: e.map((C) => typeof C.value == "number" ? C.value : null),
    dates: e.map((C) => C.date),
    intervalHint: f,
    startDate: h,
    providedUnit: x.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, x.unit, u, l, c, d, p]), D = l && I.value != null ? I.value : x.value, L = c && I.delta ? I.delta : x.delta, N = I.unit || x.unit, b = d && I.metadata ? I.metadata : x.metadata;
  return /* @__PURE__ */ r.jsx(
    Om,
    {
      ...x,
      value: D,
      unit: N,
      delta: L,
      metadata: b,
      visual: m,
      style: g.metricCardStyle
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
  const [t, n] = Xe.useState(
    !1
  );
  return Xe.useEffect(() => {
    if (e !== "auto" || typeof window > "u" || !window.matchMedia) return;
    const a = window.matchMedia("(prefers-reduced-motion: reduce)"), o = () => n(a.matches);
    return o(), a.addEventListener?.("change", o), () => a.removeEventListener?.("change", o);
  }, [e]), e === "off" ? !1 : t;
}
function Ii(e, t) {
  return t[Math.floor(e() * t.length)];
}
function an(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Bg(e, t) {
  const n = e.seed ?? 1, a = Fg(n), o = Math.max(6, Math.min(48, Math.round(e.density ?? 18))), s = ["circle", "hexagon", "rect"], i = [], l = e.gradients && e.gradients.length > 0 ? e.gradients : [
    "nhs-fdp-gradient-blue",
    "nhs-fdp-gradient-aqua",
    "nhs-fdp-gradient-green"
  ], d = (typeof e.callout.width == "number" ? e.callout.width : void 0) ?? Math.min(520, t * 0.7), u = (t - d) / 2, f = u + d, h = {
    left: u / t * 100,
    right: f / t * 100,
    top: 20,
    bottom: 80
  }, p = (g, m) => !(g > h.left - 6 && g < h.right + 6 && m > h.top - 10 && m < h.bottom + 10);
  let x = 0;
  for (; i.length < o && x < o * 50; ) {
    x++;
    const g = Ii(a, s), m = an(a() * 1, 0.15, 0.95), I = 24 + a() * 72, D = a() * 100, L = a() * 100;
    if (!p(D, L)) continue;
    const N = Ii(a, l);
    if (g === "rect") {
      const b = 0.6 + a() * 0.8;
      i.push({
        kind: g,
        width: I * b,
        height: I,
        x: D,
        y: L,
        depth: m,
        fillToken: N,
        shadow: "soft"
      });
    } else
      i.push({
        kind: g,
        size: I,
        x: D,
        y: L,
        depth: m,
        fillToken: N,
        shadow: "soft"
      });
  }
  return i;
}
const w1 = (e) => {
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
    style: g
  } = e, m = Xe.useRef(null), [I, D] = Xe.useState({
    w: 1e3,
    h: 520
  }), L = Rg(h), N = e.direction ?? "se", b = Xe.useMemo(() => {
    switch (N) {
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
  }, [N]);
  Xe.useLayoutEffect(() => {
    if (!m.current) return;
    const F = new ResizeObserver((j) => {
      for (const k of j) {
        const w = k.contentRect;
        D({ w: w.width, h: w.height });
      }
    });
    return F.observe(m.current), () => F.disconnect();
  }, []);
  const C = Xe.useMemo(() => e.shapes && e.shapes.length ? e.shapes : Bg(e, I.w), [t, I.w, I.h]), [T, _] = Xe.useState(0), [y, v] = Xe.useState(null);
  Xe.useEffect(() => {
    if (n !== "scroll" || L) return;
    let F;
    return (async () => {
      if (typeof window > "u") return;
      const j = m.current;
      if (j)
        try {
          const k = await import("./index-C_MjGuuK.js"), w = await import("./ScrollTrigger-7ivQEezo.js"), E = k.default ?? k.gsap ?? k, te = w.ScrollTrigger ?? w.default ?? w;
          E.registerPlugin(te);
          const U = te.create({
            trigger: j,
            start: l,
            end: c,
            markers: d,
            pin: u,
            pinSpacing: f,
            scrub: i,
            invalidateOnRefresh: !0,
            onUpdate: (B) => _(B.progress)
          });
          v((B) => B === null ? U.progress ?? 0.5 : B), d && window && (window.__parallaxRefresh = () => {
            try {
              te.refresh();
            } catch {
            }
          }), F = () => {
            try {
              U.kill();
            } catch {
            }
          };
        } catch {
          const w = () => {
            const E = j.getBoundingClientRect(), te = window.innerHeight || document.documentElement.clientHeight, U = E.height + te, B = te - E.top, K = an(B / U, 0, 1);
            v((O) => O === null ? K : O), _(K);
          };
          w(), window.addEventListener("scroll", w, { passive: !0 }), window.addEventListener("resize", w), F = () => {
            window.removeEventListener("scroll", w), window.removeEventListener("resize", w);
          };
        }
    })(), () => {
      F && F();
    };
  }, [n, L, l, c, d, u, f, i]), Xe.useEffect(() => {
    if (n !== "timed" || L) return;
    let F = 0, j = performance.now();
    const k = 8e3, w = (E) => {
      const U = (E - j) % k / k;
      _(U), F = requestAnimationFrame(w);
    };
    return F = requestAnimationFrame(w), () => cancelAnimationFrame(F);
  }, [n, L]);
  const $ = (F) => 0.15 + (F ?? 0.5) * 0.6, M = {
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
      ref: m,
      className: ["nhs-parallax-scene", x].filter(Boolean).join(" "),
      style: {
        position: "relative",
        height: typeof o == "number" ? `${o}px` : o,
        overflow: "hidden",
        ...g
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
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-connectors", children: C.map((F, j) => {
                const k = F.x, w = F.y, E = (F.width ?? F.size ?? 40) / I.w * 100 * 1, te = (F.height ?? F.size ?? 40) / I.h * 100 * 1, U = F.kind === "circle" ? [
                  [k, w - te / 2],
                  [k + E / 2, w],
                  [k, w + te / 2],
                  [k - E / 2, w]
                ] : F.kind === "rect" || F.kind === "svg" ? [
                  [k - E / 2, w - te / 2],
                  [k + E / 2, w - te / 2],
                  [k + E / 2, w + te / 2],
                  [k - E / 2, w + te / 2]
                ] : (
                  // hexagon approx points
                  [
                    [k - E / 2, w],
                    [k - E / 4, w - te / 2],
                    [k + E / 4, w - te / 2],
                    [k + E / 2, w],
                    [k + E / 4, w + te / 2],
                    [k - E / 4, w + te / 2]
                  ]
                ), B = $(F.depth), H = (u ? T : T - (y ?? 0.5)) * s * B, J = a === "x" ? H : a === "xy" ? H * b.x : 0, R = a === "y" ? H : a === "xy" ? H * b.y : 0;
                return U.map((re, q) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: an(re[0] + J, 0, 100),
                    y1: an(re[1] + R, 0, 100),
                    x2: an(50 + J * 0.2, 0, 100),
                    y2: an(50 + R * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${j}-${q}`
                ));
              }) }),
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-shapes", children: C.map((F, j) => {
                const k = $(F.depth), te = (u ? T : T - (y ?? 0.5)) * s * k, U = a === "x" ? te : a === "xy" ? te * b.x : 0, B = a === "y" ? te : a === "xy" ? te * b.y : 0, K = an(F.x + U, 0, 100), O = an(F.y + B, 0, 100), H = F.rotate ?? 0, J = [
                  "nhs-parallax-shape",
                  F.fillToken,
                  F.shadow && `nhs-parallax-shadow--${F.shadow}`
                ].filter(Boolean).join(" ");
                if (F.kind === "circle") {
                  const ee = (F.size ?? 40) / I.w * 100 * 0.5;
                  return /* @__PURE__ */ r.jsx("circle", { cx: K, cy: O, r: ee, className: J }, j);
                }
                if (F.kind === "rect") {
                  const ee = (F.width ?? 48) / I.w * 100, Q = (F.height ?? 36) / I.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: K - ee / 2,
                      y: O - Q / 2,
                      width: ee,
                      height: Q,
                      transform: `rotate(${H} ${K} ${O})`,
                      className: J
                    },
                    j
                  );
                }
                if (F.kind === "svg" && F.src) {
                  const ee = (F.width ?? 48) / I.w * 100, Q = (F.height ?? 48) / I.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: F.src,
                      x: K - ee / 2,
                      y: O - Q / 2,
                      width: ee,
                      height: Q,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${H} ${K} ${O})`,
                      className: J
                    },
                    j
                  );
                }
                const R = (F.size ?? 40) / I.w * 100, re = R * 0.866, q = [
                  [K - R / 2, O],
                  [K - R / 4, O - re / 2],
                  [K + R / 4, O - re / 2],
                  [K + R / 2, O],
                  [K + R / 4, O + re / 2],
                  [K - R / 4, O + re / 2]
                ].map((ee) => ee.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: q, className: J }, j);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-parallax-callout",
            style: M,
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
function Hg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function lt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zg(e, t, n, a, o, s, i, l, c, d, u, f) {
  const h = Hg(e), p = [], x = [], g = ["rect", "hex", "circle"], m = { x: 50, y: 50 }, I = a, D = 1200, L = 400, N = 1.2, b = {
    left: m.x - I.w / 2,
    right: m.x + I.w / 2,
    top: m.y - I.h / 2,
    bottom: m.y + I.h / 2
  }, C = !c && !!u && u.r > 0, T = !c && !!f && (f.rx > 0 || f.ry > 0), _ = (w, E) => {
    if (!C) return !1;
    const te = w - m.x, U = E - m.y;
    return te * te + U * U <= u.r * u.r;
  }, y = (w, E) => {
    if (!T) return !1;
    const te = Math.max(1e-6, f.rx || 0), U = Math.max(1e-6, f.ry || 0), B = (w - m.x) / te, K = (E - m.y) / U;
    return B * B + K * K <= 1;
  }, v = (w, E) => !(w.right < E.left || w.left > E.right || w.bottom < E.top || w.top > E.bottom), $ = (w) => w.left >= 0 && w.top >= 0 && w.right <= 100 && w.bottom <= 100, M = (w, E, te, U, B, K) => {
    let O = 0, H = 0;
    if (w === "rect") {
      const J = U ?? 48, R = B ?? 36;
      O = J / D * 100, H = R / L * 100;
    } else if (w === "circle") {
      const J = K ?? 40;
      O = J / D * 100, H = J / L * 100;
    } else {
      const J = K ?? 40;
      O = J / D * 100, H = J * s / L * 100;
    }
    return {
      left: E - O / 2 - N,
      right: E + O / 2 + N,
      top: te - H / 2 - N,
      bottom: te + H / 2 + N
    };
  };
  let F = 0;
  const j = lt(Math.round(t), 4, 48);
  let k = null;
  if (d) {
    const w = Math.ceil(Math.sqrt(j)), E = Math.ceil(j / w);
    k = [];
    for (let te = 0; te < E; te++)
      for (let U = 0; U < w && !(k.length >= j); U++) {
        const B = (U + 0.5) / w * 100, K = (te + 0.5) / E * 100;
        k.push({ x: B, y: K });
      }
  }
  for (; p.length < j && F < j * 120; ) {
    F++;
    const w = g[Math.floor(h() * g.length)];
    let E, te;
    if (d && k && k.length) {
      const O = p.length % k.length;
      E = k[O].x, te = k[O].y;
    } else {
      const O = lt(o ?? 0, 0, 1), H = () => h() * 100, J = () => {
        const re = Math.max(h(), 1e-6), q = Math.max(h(), 1e-6), ee = Math.sqrt(-2 * Math.log(re)), Q = 2 * Math.PI * q;
        return 50 + ee * Math.cos(Q) * 12.5;
      }, R = (re, q, ee) => re * (1 - ee) + q * ee;
      E = lt(R(H(), J(), O), 0, 100), te = lt(R(H(), J(), O), 0, 100);
    }
    const U = M(w, E, te, 32, 24, 28);
    if (!$(U)) continue;
    const B = lt(h(), 0.15, 0.95), K = 0;
    if (w === "rect") {
      const O = 40 + h() * 80, H = 28 + h() * 64, J = M(w, E, te, O, H);
      if (!c && (v(J, b) || _(E, te) || y(E, te)))
        continue;
      if (!i) {
        let re = !1;
        for (let q = 0; q < x.length; q++)
          if (v(J, x[q])) {
            re = !0;
            break;
          }
        if (re) continue;
      }
      let R;
      if (i) {
        const re = /* @__PURE__ */ new Set();
        for (let ee = 0; ee < x.length; ee++)
          if (v(J, x[ee])) {
            const Q = p[ee].fill;
            Q && re.add(Q);
          }
        const q = n.filter((ee) => !re.has(ee));
        if (q.length === 0) {
          if (l === "skip") continue;
          R = n[Math.floor(h() * n.length)];
        } else
          R = q[Math.floor(h() * q.length)];
      } else
        R = n[Math.floor(h() * n.length)];
      x.push(J), p.push({ kind: w, x: E, y: te, width: O, height: H, rotate: K, depth: B, fill: R, shadow: "soft" });
    } else if (w === "circle") {
      const O = 24 + h() * 80, H = M(w, E, te, void 0, void 0, O);
      if (!c && (v(H, b) || _(E, te) || y(E, te)))
        continue;
      if (!i) {
        let R = !1;
        for (let re = 0; re < x.length; re++)
          if (v(H, x[re])) {
            R = !0;
            break;
          }
        if (R) continue;
      }
      let J;
      if (i) {
        const R = /* @__PURE__ */ new Set();
        for (let q = 0; q < x.length; q++)
          if (v(H, x[q])) {
            const ee = p[q].fill;
            ee && R.add(ee);
          }
        const re = n.filter((q) => !R.has(q));
        if (re.length === 0) {
          if (l === "skip") continue;
          J = n[Math.floor(h() * n.length)];
        } else
          J = re[Math.floor(h() * re.length)];
      } else
        J = n[Math.floor(h() * n.length)];
      x.push(H), p.push({ kind: w, x: E, y: te, size: O, rotate: K, depth: B, fill: J, shadow: "soft" });
    } else {
      const O = 28 + h() * 72, H = M(w, E, te, void 0, void 0, O);
      if (!c && (v(H, b) || _(E, te) || y(E, te)))
        continue;
      if (!i) {
        let R = !1;
        for (let re = 0; re < x.length; re++)
          if (v(H, x[re])) {
            R = !0;
            break;
          }
        if (R) continue;
      }
      let J;
      if (i) {
        const R = /* @__PURE__ */ new Set();
        for (let q = 0; q < x.length; q++)
          if (v(H, x[q])) {
            const ee = p[q].fill;
            ee && R.add(ee);
          }
        const re = n.filter((q) => !R.has(q));
        if (re.length === 0) {
          if (l === "skip") continue;
          J = n[Math.floor(h() * n.length)];
        } else
          J = re[Math.floor(h() * re.length)];
      } else
        J = n[Math.floor(h() * n.length)];
      x.push(H), p.push({ kind: w, x: E, y: te, size: O, rotate: K, depth: B, fill: J, shadow: "soft" });
    }
  }
  return p;
}
const S1 = ({
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
  featureWidth: g = "min(640px, 80%)",
  featureLayer: m = "over",
  excludeBoxPct: I = { w: 50, h: 36 },
  excludeCirclePct: D,
  excludeEllipsePct: L,
  uniformDistribution: N = !1,
  className: b,
  style: C
}) => {
  const T = Xe.useRef(null), [_, y] = Xe.useState({ w: 1200, h: 400 });
  Xe.useLayoutEffect(() => {
    if (!T.current) return;
    const k = new ResizeObserver((w) => {
      for (const E of w) {
        const te = E.contentRect;
        y({ w: te.width, h: te.height });
      }
    });
    return k.observe(T.current), () => k.disconnect();
  }, []);
  const v = Xe.useMemo(() => i?.length ? i : zg(
    e,
    a,
    s,
    I,
    o,
    f,
    h,
    p,
    m === "over" || N,
    N,
    D,
    L
  ), [
    e,
    a,
    s.join(","),
    I.w,
    I.h,
    o,
    f,
    h,
    p,
    m,
    N,
    D?.r,
    L?.rx,
    L?.ry,
    i
  ]), $ = 100, M = 100, F = Math.sqrt(3) / 2, j = (k, w, E) => {
    const te = (E ?? 40) / 2, U = k / 100 * _.w, B = w / 100 * _.h, K = f / F;
    return [Math.PI, 2 * Math.PI / 3, Math.PI / 3, 0, -Math.PI / 3, -(2 * Math.PI) / 3].map((H) => {
      const J = U + te * Math.cos(H), R = B + te * Math.sin(H) * K;
      return [lt(J / _.w * 100, 0, 100), lt(R / _.h * 100, 0, 100)];
    });
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: T,
      className: [
        "nhs-pattern-banner",
        m === "under" ? "nhs-pattern-banner--feature-under" : "nhs-pattern-banner--feature-over",
        b
      ].filter(Boolean).join(" "),
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        height: typeof n == "number" ? `${n}px` : n,
        ...C
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhs-pattern-banner__svg",
            viewBox: `0 0 ${$} ${M}`,
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
                const k = (O) => O / _.w * 100, w = (O) => O / _.h * 100, E = v.map((O) => {
                  const H = lt(O.x, 0, 100), J = lt(O.y, 0, 100);
                  if (O.kind === "circle") return [[H, J]];
                  if (O.kind === "rect") {
                    const R = k(O.width ?? 48), re = w(O.height ?? 36);
                    return [
                      [H - R / 2, J - re / 2],
                      [H + R / 2, J - re / 2],
                      [H + R / 2, J + re / 2],
                      [H - R / 2, J + re / 2]
                    ];
                  }
                  if (O.kind === "svg") {
                    const R = k(O.width ?? 48), re = w(O.height ?? 48);
                    return [
                      [H - R / 2, J - re / 2],
                      [H + R / 2, J - re / 2],
                      [H + R / 2, J + re / 2],
                      [H - R / 2, J + re / 2]
                    ];
                  }
                  return j(H, J, O.size ?? 40);
                }), te = Math.max(1, Math.floor(l ?? 1)), U = /* @__PURE__ */ new Set(), B = [];
                for (let O = 0; O < v.length; O++) {
                  const H = [];
                  for (let R = 0; R < v.length; R++) {
                    if (O === R) continue;
                    const re = v[O].x - v[R].x, q = v[O].y - v[R].y;
                    H.push({ j: R, d2: re * re + q * q });
                  }
                  H.sort((R, re) => R.d2 - re.d2);
                  const J = Math.min(te, H.length);
                  for (let R = 0; R < J; R++) {
                    const re = H[R].j, q = Math.min(O, re), ee = Math.max(O, re), Q = `${q}-${ee}`;
                    U.has(Q) || (U.add(Q), B.push([q, ee]));
                  }
                }
                const K = [];
                for (const [O, H] of B) {
                  const J = E[O], R = E[H];
                  let re = null;
                  for (const q of J)
                    for (const ee of R) {
                      const Q = q[0] - ee[0], ae = q[1] - ee[1], de = Q * Q + ae * ae;
                      (!re || de < re.d2) && (re = { p: q, q: ee, d2: de });
                    }
                  re && K.push(
                    /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        x1: lt(re.p[0], 0, 100),
                        y1: lt(re.p[1], 0, 100),
                        x2: lt(re.q[0], 0, 100),
                        y2: lt(re.q[1], 0, 100),
                        className: "nhs-pattern-banner-connector",
                        style: {
                          stroke: c,
                          strokeWidth: d,
                          strokeDasharray: u
                        }
                      },
                      `nn-line-${O}-${H}`
                    )
                  );
                }
                return K;
              })() }),
              /* @__PURE__ */ r.jsx("g", { children: v.map((k, w) => {
                const E = ["nhs-pattern-banner-shape", k.fill].filter(Boolean).join(" ");
                if (k.kind === "circle") {
                  const O = (k.size ?? 40) / _.w * 100 * 0.5, H = _.w / _.h, J = O * H;
                  return /* @__PURE__ */ r.jsx(
                    "ellipse",
                    {
                      cx: lt(k.x, 0, 100),
                      cy: lt(k.y, 0, 100),
                      rx: O,
                      ry: J,
                      className: E
                    },
                    w
                  );
                }
                if (k.kind === "rect") {
                  const O = (k.width ?? 48) / _.w * 100, H = (k.height ?? 36) / _.h * 100, J = lt(k.x - O / 2, 0, 100), R = lt(k.y - H / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: J,
                      y: R,
                      width: O,
                      height: H,
                      className: E
                    },
                    w
                  );
                }
                if (k.kind === "svg" && k.src) {
                  const O = (k.width ?? 48) / _.w * 100, H = (k.height ?? 48) / _.h * 100, J = lt(k.x - O / 2, 0, 100), R = lt(k.y - H / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: k.src,
                      x: J,
                      y: R,
                      width: O,
                      height: H,
                      preserveAspectRatio: "xMidYMid meet",
                      className: E
                    },
                    w
                  );
                }
                const te = lt(k.x, 0, 100), U = lt(k.y, 0, 100), K = j(te, U, k.size ?? 40).map((O) => O.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: K, className: E }, w);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-pattern-banner__feature",
            style: {
              width: typeof g == "number" ? `${g}px` : g
            },
            children: x
          }
        )
      ]
    }
  );
}, Og = "150ms", Ug = "300ms", Wg = "500ms", Gg = "cubic-bezier(0.4, 0, 1, 1)", Yg = "cubic-bezier(0, 0, 0.2, 1)", Vg = "cubic-bezier(0.4, 0, 0.2, 1)", Zg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", qg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Jg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Xg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Kg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Qg = "1px", e0 = "2px", t0 = "4px", n0 = "4px", r0 = "4px", a0 = "2px", o0 = "1px", s0 = "0px", i0 = "4px", l0 = "8px", c0 = "12px", uc = "#d8dde0", fc = "#4c6272", hc = "#d8dde0", pc = "#aeb7bd", mc = "#d5281b", gc = "#005eb8", xc = "#ffffff", bc = "#212b32", yc = "#007f3b", vc = "#330072", wc = "#7c2855", Sc = "#d5281b", _c = "#ffeb3b", kc = "#fff9c4", Cc = "#ffb81c", Nc = "#ed8b00", jc = "#00a499", Mc = "#ae2573", Ic = "#4c6272", Dc = "#768692", Tc = "#aeb7bd", Lc = "#d8dde0", $c = "#f0f4f5", d0 = "#212b32", u0 = "#4c6272", f0 = "#ffffff", h0 = "#212b32", p0 = "#005eb8", m0 = "#7c2855", g0 = "#003087", x0 = "#330072", b0 = "#ffeb3b", y0 = "#212b32", v0 = "#d8dde0", w0 = "#ffffff33", S0 = "#d5281b", _0 = "#4c6272", k0 = "#ffffff", C0 = "#007f3b", N0 = "#ffffff", j0 = "#006530", M0 = "#004021", I0 = "#004021", D0 = "#00000000", T0 = "#ffffff", L0 = "#005eb8", $0 = "#005eb8", A0 = "#d9e5f2", E0 = "#c7daf0", P0 = "#005eb8", F0 = "#ffffff", R0 = "#212b32", B0 = "#d9dde0", H0 = "#b3bcc2", z0 = "#b3bcc2", O0 = "#d5281b", U0 = "#aa2016", W0 = "#6a140e", G0 = "#6a140e", Y0 = "#005eb8", V0 = "#004b93", Z0 = "#002f5c", q0 = "#002f5c", J0 = "8px", X0 = "16px", K0 = "12px", Q0 = "16px", ex = "4px", tx = "40px", nx = "4px", rx = "40px", ax = "12px", ox = "16px", sx = "32px", ix = "16px", lx = "20px", cx = "28px", dx = "9px", ux = "2px", fx = "16px", hx = "24px", px = "8px", mx = "24px", gx = "16px", xx = "4px", bx = "4px", yx = "4px", vx = "8px", wx = "4px", Sx = "16px", _x = "#007f3b", kx = "#006530", Cx = "#004021", Nx = "#d8dde0", jx = "#ffffff", Mx = "#768692", Ix = "#00000000", Dx = "#ffeb3b", Tx = "#00000000", Lx = "#ffffff", $x = "#d9e5f2", Ax = "#c7daf0", Ex = "#005eb8", Px = "#005eb8", Ac = "8px", Ec = "16px", Pc = "12px", Fc = "16px", Fx = "2px", Rx = "4px", Bx = "4px", Hx = "600", zx = "#ffffff", Ox = "#d8dde0", Ux = "#aeb7bd", Wx = "#f0f4f5", Gx = "#212b32", Yx = "#212b32", Vx = "#005eb8", Rc = "16px", Bc = "32px", Hc = "16px", Zx = "1px", qx = "4px", Jx = "none", Xx = "0 2px 4px rgba(0, 0, 0, 0.1)", Kx = "#ffffff", Qx = "#ffffff", eb = "#d8dde0", tb = "#ffffff", nb = "#4c6272", rb = "#ffeb3b", ab = "#d5281b", ob = "#aeb7bd", sb = "#212b32", ib = "#4c6272", lb = "#768692", cb = "#212b32", db = "#ffffff", ub = "600", fb = "#d5281b", hb = "600", pb = "#4c6272", zc = "4px", Oc = "40px", Uc = "40px", Wc = "12px", mb = "2px", gb = "4px", xb = "0px", bb = "16px", yb = "18px", vb = "24px", wb = "32px", Sb = "34px", _b = "32px", kb = "40px", Cb = "48px", Nb = "5.4ex", jb = "7.2ex", Mb = "9ex", Ib = "10.8ex", Db = "20ex", Tb = "38ex", Lb = "56ex", $b = "44px", Ab = "40px", Eb = "1020px", Pb = "100%", Fb = "50%", Rb = "33.333%", Bb = "25%", Hb = "20%", zb = "320px", Ob = "641px", Ub = "1025px", Wb = "1280px", Gb = "960px", Yb = "32px", Vb = "16px", Zb = "#d5281b", qb = "#d5281b", Jb = "#ffffff", Xb = "#007f3b", Kb = "#007f3b", Qb = "#ffffff", ey = "#ffeb3b", ty = "#ffeb3b", ny = "#212b32", ry = "#005eb8", ay = "#005eb8", oy = "#ffffff", sy = "#d8dde0", iy = "#aeb7bd", ly = "#768692", cy = "0 4px 0 #004021", dy = "0 4px 0 #005eb8", uy = "0 4px 0 #6a140e", fy = "0 4px 0 #ffeb3b", hy = "none", py = "0 2px 4px rgba(0, 0, 0, 0.1)", my = "4px", gy = "0px", xy = "solid", by = "0 0 0 3px #ffeb3b", yy = "0 0 0 3px #ffeb3b", vy = "none", wy = "0 1px 3px rgba(0, 0, 0, 0.12)", Sy = "0 2px 6px rgba(0, 0, 0, 0.16)", _y = "0 4px 12px rgba(0, 0, 0, 0.20)", Gc = "0", Yc = "4px", Vc = "8px", Zc = "16px", qc = "24px", Jc = "32px", Xc = "40px", Kc = "48px", Qc = "56px", ed = "64px", vo = "0", wo = "0", So = "4px", _o = "4px", ko = "8px", Co = "8px", No = "8px", jo = "16px", Mo = "16px", Io = "24px", Do = "24px", To = "32px", Lo = "32px", $o = "40px", Ao = "40px", Eo = "48px", Po = "48px", Fo = "56px", Ro = "56px", Bo = "64px", Vr = "Frutiger W01", Zr = "Arial, Helvetica, sans-serif", qr = "sans-serif", Jr = "400", Xr = "600", Kr = "400", Qr = "12px", ea = "14px", ta = "12pt", na = "14px", ra = "16px", aa = "12pt", oa = "16px", sa = "19px", ia = "13pt", la = "19px", ca = "22px", da = "15pt", ua = "22px", fa = "26px", ha = "17pt", pa = "27px", ma = "36px", ga = "20pt", xa = "33px", ba = "48px", ya = "24pt", Ho = "16px", zo = "24px", Bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Yt = {
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
}, Zt = {
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
  BorderWidthTableCell: o0,
  BorderWidthTableHeader: a0,
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
  ComponentCardPaddingMobile: ox,
  ComponentDetails: vx,
  ComponentExpander: wx,
  ComponentFormCheckboxLabelPadding: ax,
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
  FontFamilyBase: Vr,
  FontFamilyFallback: Zr,
  FontFamilyPrint: qr,
  FontLineHeightBase: zo,
  FontSize14Mobile: Qr,
  FontSize14Print: ta,
  FontSize14Tablet: ea,
  FontSize16Mobile: na,
  FontSize16Print: aa,
  FontSize16Tablet: ra,
  FontSize19Mobile: oa,
  FontSize19Print: ia,
  FontSize19Tablet: sa,
  FontSize22Mobile: la,
  FontSize22Print: da,
  FontSize22Tablet: ca,
  FontSize26Mobile: ua,
  FontSize26Print: ha,
  FontSize26Tablet: fa,
  FontSize36Mobile: pa,
  FontSize36Print: ga,
  FontSize36Tablet: ma,
  FontSize48Mobile: xa,
  FontSize48Print: ya,
  FontSize48Tablet: ba,
  FontSizeBase: Ho,
  FontWeightBold: Xr,
  FontWeightLight: Kr,
  FontWeightNormal: Jr,
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
  FormInputBorderDisabled: ob,
  FormInputBorderError: ab,
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
  HeadingsNhsukHeadingL: Ht,
  HeadingsNhsukHeadingM: zt,
  HeadingsNhsukHeadingS: Ot,
  HeadingsNhsukHeadingXl: Bt,
  HeadingsNhsukHeadingXs: Ut,
  LayoutColumnActions: Hb,
  LayoutColumnFull: Pb,
  LayoutColumnHalf: Fb,
  LayoutColumnQuarter: Bb,
  LayoutColumnThird: Rb,
  LayoutContainerMaxWidth: Eb,
  ParagraphsBody: Wt,
  ParagraphsBodyLarge: Gt,
  ParagraphsBodySmall: Yt,
  ParagraphsLedeText: Vt,
  ParagraphsLedeTextSmall: Zt,
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
  SpacingResponsive0Mobile: vo,
  SpacingResponsive0Tablet: wo,
  SpacingResponsive1Mobile: So,
  SpacingResponsive1Tablet: _o,
  SpacingResponsive2Mobile: ko,
  SpacingResponsive2Tablet: Co,
  SpacingResponsive3Mobile: No,
  SpacingResponsive3Tablet: jo,
  SpacingResponsive4Mobile: Mo,
  SpacingResponsive4Tablet: Io,
  SpacingResponsive5Mobile: Do,
  SpacingResponsive5Tablet: To,
  SpacingResponsive6Mobile: Lo,
  SpacingResponsive6Tablet: $o,
  SpacingResponsive7Mobile: Ao,
  SpacingResponsive7Tablet: Eo,
  SpacingResponsive8Mobile: Po,
  SpacingResponsive8Tablet: Fo,
  SpacingResponsive9Mobile: Ro,
  SpacingResponsive9Tablet: Bo,
  StateDisabledBackground: sy,
  StateDisabledBorder: iy,
  StateDisabledText: ly,
  StateErrorBackground: Zb,
  StateErrorBorder: qb,
  StateErrorText: Jb,
  StateInfoBackground: ry,
  StateInfoBorder: ay,
  StateInfoText: oy,
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
}, Symbol.toStringTag, { value: "Module" })), _1 = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), k1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
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
), C1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
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
), N1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
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
), j1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
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
), M1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
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
), I1 = ({
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
), D1 = ({
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
), T1 = ({
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
), L1 = ({
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
), $1 = ({
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
), A1 = () => $e(() => ky, []), E1 = () => $e(() => ({
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
}), []), P1 = () => $e(() => ({
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
}), []), F1 = () => $e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Qr,
    Size16: na,
    Size19: oa,
    Size22: la,
    Size26: ua,
    Size36: pa,
    Size48: xa
  },
  Tablet: {
    Size14: ea,
    Size16: ra,
    Size19: sa,
    Size22: ca,
    Size26: fa,
    Size36: ma,
    Size48: ba
  },
  Print: {
    Size14: ta,
    Size16: aa,
    Size19: ia,
    Size22: da,
    Size26: ha,
    Size36: ga,
    Size48: ya
  },
  Family: {
    Base: Vr,
    Fallback: Zr,
    Print: qr
  },
  Weight: {
    Normal: Jr,
    Bold: Xr,
    Light: Kr
  },
  Base: {
    Size: Ho,
    LineHeight: zo
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Vr,
  FontFamilyFallback: Zr,
  FontFamilyPrint: qr,
  FontWeightNormal: Jr,
  FontWeightBold: Xr,
  FontWeightLight: Kr,
  FontSize14Mobile: Qr,
  FontSize14Tablet: ea,
  FontSize14Print: ta,
  FontSize16Mobile: na,
  FontSize16Tablet: ra,
  FontSize16Print: aa,
  FontSize19Mobile: oa,
  FontSize19Tablet: sa,
  FontSize19Print: ia,
  FontSize22Mobile: la,
  FontSize22Tablet: ca,
  FontSize22Print: da,
  FontSize26Mobile: ua,
  FontSize26Tablet: fa,
  FontSize26Print: ha,
  FontSize36Mobile: pa,
  FontSize36Tablet: ma,
  FontSize36Print: ga,
  FontSize48Mobile: xa,
  FontSize48Tablet: ba,
  FontSize48Print: ya,
  FontSizeBase: Ho,
  FontLineHeightBase: zo
}), []), R1 = () => $e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: vo,
    Size1: So,
    Size2: ko,
    Size3: No,
    Size4: Mo,
    Size5: Do,
    Size6: Lo,
    Size7: Ao,
    Size8: Po,
    Size9: Ro
  },
  Tablet: {
    Size0: wo,
    Size1: _o,
    Size2: Co,
    Size3: jo,
    Size4: Io,
    Size5: To,
    Size6: $o,
    Size7: Eo,
    Size8: Fo,
    Size9: Bo
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: vo,
  SpacingResponsive0Tablet: wo,
  SpacingResponsive1Mobile: So,
  SpacingResponsive1Tablet: _o,
  SpacingResponsive2Mobile: ko,
  SpacingResponsive2Tablet: Co,
  SpacingResponsive3Mobile: No,
  SpacingResponsive3Tablet: jo,
  SpacingResponsive4Mobile: Mo,
  SpacingResponsive4Tablet: Io,
  SpacingResponsive5Mobile: Do,
  SpacingResponsive5Tablet: To,
  SpacingResponsive6Mobile: Lo,
  SpacingResponsive6Tablet: $o,
  SpacingResponsive7Mobile: Ao,
  SpacingResponsive7Tablet: Eo,
  SpacingResponsive8Mobile: Po,
  SpacingResponsive8Tablet: Fo,
  SpacingResponsive9Mobile: Ro,
  SpacingResponsive9Tablet: Bo
}), []), B1 = () => $e(() => ({
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
}), []), H1 = () => $e(() => ({
  xl: Bt,
  l: Ht,
  m: zt,
  s: Ot,
  xs: Ut
}), []), z1 = () => $e(() => ({
  body: Wt,
  bodyLarge: Gt,
  bodySmall: Yt,
  ledeText: Vt,
  ledeTextSmall: Zt
}), []), O1 = () => $e(() => ({
  headings: {
    xl: Bt,
    l: Ht,
    m: zt,
    s: Ot,
    xs: Ut
  },
  paragraphs: {
    body: Wt,
    bodyLarge: Gt,
    bodySmall: Yt,
    ledeText: Vt,
    ledeTextSmall: Zt
  },
  fonts: {
    family: {
      base: Vr,
      fallback: Zr,
      print: qr
    },
    weight: {
      normal: Jr,
      bold: Xr,
      light: Kr
    },
    sizes: {
      mobile: {
        size14: Qr,
        size16: na,
        size19: oa,
        size22: la,
        size26: ua,
        size36: pa,
        size48: xa
      },
      tablet: {
        size14: ea,
        size16: ra,
        size19: sa,
        size22: ca,
        size26: fa,
        size36: ma,
        size48: ba
      },
      print: {
        size14: ta,
        size16: aa,
        size19: ia,
        size22: da,
        size26: ha,
        size36: ga,
        size48: ya
      }
    }
  }
}), []);
function U1(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = Z.useState(t), s = Z.useCallback(() => o("three-column"), []), i = Z.useCallback(() => o((c) => c === "three-column" ? n : c), [n]), l = Z.useCallback(() => o((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const td = {
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
function W1(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...td, ...e }, a = [];
  return n?.includes(400) && a.push(`
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
}`), n?.includes(600) && a.push(`
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
}`), a.join(`
`);
}
function G1(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...td, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${St.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${St.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${St.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${St.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Y1 = '"Frutiger W01", Arial, Helvetica, sans-serif', V1 = "Arial, Helvetica, sans-serif";
async function Z1() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Kp as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  kr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  Cr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Qp as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  em as AXIS_ZIGZAG_DEFAULT_CYCLES,
  nm as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  tm as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Ei as Account,
  My as ActionLink,
  o1 as AdaptiveDataGrid,
  Og as AnimationDurationFast,
  Ug as AnimationDurationNormal,
  Wg as AnimationDurationSlow,
  Zg as AnimationEasingBounce,
  Gg as AnimationEasingEaseIn,
  Vg as AnimationEasingEaseInOut,
  Yg as AnimationEasingEaseOut,
  wl as AppointmentCard,
  p1 as AreaSeriesPrimitive,
  Yh as AriaDataGrid,
  io as AriaTabsDataGrid,
  o1 as AriaTabsDataGridAdaptive,
  hi as Axis,
  Jn as BackLink,
  g1 as BandScalesProvider,
  m1 as BarSeriesPrimitive,
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
  o0 as BorderWidthTableCell,
  a0 as BorderWidthTableHeader,
  zy as BrandThemeProvider,
  hl as Breadcrumb,
  Md as Breakpoint,
  Ub as BreakpointDesktop,
  Wb as BreakpointLargeDesktop,
  zb as BreakpointMobile,
  Ob as BreakpointTablet,
  bt as Button,
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
  Fi as ButtonSize,
  Fc as ButtonSpacingPaddingHorizontalDesktop,
  Ec as ButtonSpacingPaddingHorizontalMobile,
  Pc as ButtonSpacingPaddingVerticalDesktop,
  Ac as ButtonSpacingPaddingVerticalMobile,
  Hx as ButtonTypographyWeight,
  Pi as ButtonVariant,
  ml as Card,
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
  b1 as ChartEnhancer,
  x1 as ChartNoScript,
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
  Xn as Column,
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
  ox as ComponentCardPaddingMobile,
  vx as ComponentDetails,
  wx as ComponentExpander,
  ax as ComponentFormCheckboxLabelPadding,
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
  zi as Container,
  Gy as ContentsList,
  td as DEFAULT_FONT_CONFIG,
  n1 as DashboardSummaryGrid,
  Ry as DateInput,
  Lh as Details,
  $h as DoDontList,
  _y as ElevationHigh,
  wy as ElevationLow,
  Sy as ElevationMedium,
  vy as ElevationNone,
  bs as ErrorMessage,
  Fy as ErrorSummary,
  Ah as Expander,
  St as FRUTIGER_FONT_FILES,
  Wo as Fieldset,
  Id as Float,
  gy as FocusOutlineOffset,
  xy as FocusOutlineStyle,
  my as FocusOutlineWidth,
  yy as FocusShadowButton,
  by as FocusShadowInput,
  Vr as FontFamilyBase,
  Zr as FontFamilyFallback,
  qr as FontFamilyPrint,
  zo as FontLineHeightBase,
  Qr as FontSize14Mobile,
  ta as FontSize14Print,
  ea as FontSize14Tablet,
  na as FontSize16Mobile,
  aa as FontSize16Print,
  ra as FontSize16Tablet,
  oa as FontSize19Mobile,
  ia as FontSize19Print,
  sa as FontSize19Tablet,
  la as FontSize22Mobile,
  da as FontSize22Print,
  ca as FontSize22Tablet,
  ua as FontSize26Mobile,
  ha as FontSize26Print,
  fa as FontSize26Tablet,
  pa as FontSize36Mobile,
  ga as FontSize36Print,
  ma as FontSize36Tablet,
  xa as FontSize48Mobile,
  ya as FontSize48Print,
  ba as FontSize48Tablet,
  Ho as FontSizeBase,
  Xr as FontWeightBold,
  Kr as FontWeightLight,
  Jr as FontWeightNormal,
  Zi as Footer,
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
  ob as FormInputBorderDisabled,
  ab as FormInputBorderError,
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
  Qa as Grid,
  Yb as GridGutter,
  Vb as GridGutterHalf,
  rm as GridLines,
  Gb as GridPageWidth,
  xn as GridWidth,
  Vi as Header,
  Oy as HeaderSSR,
  Xd as HeaderSearch,
  Vi as HeaderStatic,
  Xt as Heading,
  Ht as HeadingsNhsukHeadingL,
  zt as HeadingsNhsukHeadingM,
  Ot as HeadingsNhsukHeadingS,
  Bt as HeadingsNhsukHeadingXl,
  Ut as HeadingsNhsukHeadingXs,
  Qd as Hero,
  Bi as Hint,
  Qy as Images,
  Oo as Input,
  qy as InsetText,
  Uo as Label,
  Hb as LayoutColumnActions,
  Pb as LayoutColumnFull,
  Fb as LayoutColumnHalf,
  Bb as LayoutColumnQuarter,
  Rb as LayoutColumnThird,
  Eb as LayoutContainerMaxWidth,
  h1 as Legend,
  Xp as LineScalesProvider,
  Bm as LineSeriesPrimitive,
  $d as List,
  Oi as MainWrapper,
  Sl as MedicationCard,
  Om as MetricCard,
  I1 as NHSBodyText,
  D1 as NHSBodyTextLarge,
  T1 as NHSBodyTextSmall,
  k1 as NHSHeading1,
  C1 as NHSHeading2,
  N1 as NHSHeading3,
  j1 as NHSHeading4,
  M1 as NHSHeading5,
  L1 as NHSLedeText,
  $1 as NHSLedeTextSmall,
  Hy as NHSThemeProvider,
  V1 as NHS_FALLBACK_FONT_STACK,
  Y1 as NHS_FONT_STACK,
  Rp as NavigationSplitView,
  i1 as PageTemplate,
  Wy as Pagination,
  Nh as Panel,
  Wt as ParagraphsBody,
  Gt as ParagraphsBodyLarge,
  Yt as ParagraphsBodySmall,
  Vt as ParagraphsLedeText,
  Zt as ParagraphsLedeTextSmall,
  w1 as ParallaxScene,
  vl as PatientCard,
  S1 as PatternBanner,
  Wp as ProductRoadmap,
  Dy as Radios,
  Ty as RadiosServer,
  o1 as ResponsiveDataGrid,
  s1 as ResponsiveDataGridDemo,
  on as Row,
  y1 as SPC,
  $g as SPCChart,
  v1 as SPCMetricCard,
  jr as Select,
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
  pl as SkipLink,
  e1 as SlotMatrix,
  r1 as SortStatusControl,
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
  vo as SpacingResponsive0Mobile,
  wo as SpacingResponsive0Tablet,
  So as SpacingResponsive1Mobile,
  _o as SpacingResponsive1Tablet,
  ko as SpacingResponsive2Mobile,
  Co as SpacingResponsive2Tablet,
  No as SpacingResponsive3Mobile,
  jo as SpacingResponsive3Tablet,
  Mo as SpacingResponsive4Mobile,
  Io as SpacingResponsive4Tablet,
  Do as SpacingResponsive5Mobile,
  To as SpacingResponsive5Tablet,
  Lo as SpacingResponsive6Mobile,
  $o as SpacingResponsive6Tablet,
  Ao as SpacingResponsive7Mobile,
  Eo as SpacingResponsive7Tablet,
  Po as SpacingResponsive8Mobile,
  Fo as SpacingResponsive8Tablet,
  Ro as SpacingResponsive9Mobile,
  Bo as SpacingResponsive9Tablet,
  Ly as SpacingUtilities,
  sy as StateDisabledBackground,
  iy as StateDisabledBorder,
  ly as StateDisabledText,
  Zb as StateErrorBackground,
  qb as StateErrorBorder,
  Jb as StateErrorText,
  ry as StateInfoBackground,
  ay as StateInfoBorder,
  oy as StateInfoText,
  Xb as StateSuccessBackground,
  Kb as StateSuccessBorder,
  Qb as StateSuccessText,
  ey as StateWarningBackground,
  ty as StateWarningBorder,
  ny as StateWarningText,
  t1 as StepByStepNavigation,
  Oh as SummaryCard,
  Jy as SummaryList,
  en as Table,
  Xy as Tabs,
  et as Tag,
  Eh as TaskList,
  wd as Textarea,
  f1 as TooltipOverlay,
  Rm as TooltipProvider,
  l1 as TransactionalPageTemplate,
  qg as TransitionButtonDefault,
  Jg as TransitionButtonShadow,
  Kg as TransitionCardHover,
  Xg as TransitionInputFocus,
  u1 as VisibilityProvider,
  _l as VitalsCard,
  Py as WIDTH_FRACTIONS,
  Ky as WarningCallout,
  Ml as WidthContainer,
  Ay as WidthUtilities,
  d1 as WorkflowSplitView,
  Z1 as checkFrutigerLoaded,
  ts as createGenericTabsConfig,
  a1 as createTCHTabsConfig,
  W1 as generateFrutigerFontFace,
  _1 as getResponsiveStyles,
  $y as getSpacingClass,
  Ey as getWidthClass,
  G1 as preloadFrutigerFonts,
  rp as tchDataConfig,
  Jd as useBrand,
  E1 as useColors,
  B1 as useComponentSpacing,
  H1 as useNHSHeadings,
  z1 as useNHSParagraphs,
  By as useNHSTheme,
  O1 as useNHSTypographySystem,
  U1 as useNavigationSplitDrill,
  Tp as useNavigationSplitUrlSync,
  ns as useNhsFdpBreakpoints,
  R1 as useResponsiveSpacing,
  c1 as useResponsiveValue,
  P1 as useSpacing,
  Pg as useSpc,
  A1 as useTokens,
  F1 as useTypography
};
//# sourceMappingURL=index.esm.js.map
