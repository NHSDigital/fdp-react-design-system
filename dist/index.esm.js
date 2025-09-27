import * as Z from "react";
import Qe, { useState as He, useEffect as Xe, useCallback as ge, useRef as Ue, createElement as Ii, useMemo as Ee, useContext as Di, createContext as Ti, forwardRef as Bn, useImperativeHandle as Li, useReducer as $i, memo as nd, useId as kr } from "react";
import { createPortal as rd } from "react-dom";
function od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pr = { exports: {} }, Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs;
function ad() {
  if (hs) return Hn;
  hs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, a, s) {
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
  return Hn.Fragment = t, Hn.jsx = n, Hn.jsxs = n, Hn;
}
var zn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function sd() {
  return ps || (ps = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === y ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case g:
          return "Fragment";
        case M:
          return "Profiler";
        case m:
          return "StrictMode";
        case v:
          return "Suspense";
        case k:
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
          case I:
            return (B._context.displayName || "Context") + ".Consumer";
          case C:
            var Q = B.render;
            return B = B.displayName, B || (B = Q.displayName || Q.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case D:
            return Q = B.displayName || null, Q !== null ? Q : e(B.type) || "Memo";
          case S:
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
    function n(B) {
      try {
        t(B);
        var Q = !1;
      } catch {
        Q = !0;
      }
      if (Q) {
        Q = console;
        var O = Q.error, z = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return O.call(
          Q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(B);
      }
    }
    function o(B) {
      if (B === g) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === S)
        return "<...>";
      try {
        var Q = e(B);
        return Q ? "<" + Q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var B = A.A;
      return B === null ? null : B.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (j.call(B, "key")) {
        var Q = Object.getOwnPropertyDescriptor(B, "key").get;
        if (Q && Q.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, Q) {
      function O() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Q
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: O,
        configurable: !0
      });
    }
    function c() {
      var B = e(this.type);
      return _[B] || (_[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function d(B, Q, O, z, X, R, re, q) {
      return O = R.ref, B = {
        $$typeof: p,
        type: B,
        key: Q,
        props: R,
        _owner: X
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
    function u(B, Q, O, z, X, R, re, q) {
      var ee = Q.children;
      if (ee !== void 0)
        if (z)
          if (F(ee)) {
            for (z = 0; z < ee.length; z++)
              f(ee[z]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ee);
      if (j.call(Q, "key")) {
        ee = e(B);
        var K = Object.keys(Q).filter(function(de) {
          return de !== "key";
        });
        z = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", U[ee + z] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          ee,
          K,
          ee
        ), U[ee + z] = !0);
      }
      if (ee = null, O !== void 0 && (n(O), ee = "" + O), i(Q) && (n(Q.key), ee = "" + Q.key), "key" in Q) {
        O = {};
        for (var oe in Q)
          oe !== "key" && (O[oe] = Q[oe]);
      } else O = Q;
      return ee && l(
        O,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), d(
        B,
        ee,
        R,
        X,
        a(),
        O,
        re,
        q
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === p && B._store && (B._store.validated = 1);
    }
    var h = Qe, p = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), T = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), y = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, F = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var N, _ = {}, E = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), te = L(o(s)), U = {};
    zn.Fragment = g, zn.jsx = function(B, Q, O, z, X) {
      var R = 1e4 > A.recentlyCreatedOwnerStacks++;
      return u(
        B,
        Q,
        O,
        !1,
        z,
        X,
        R ? Error("react-stack-top-frame") : E,
        R ? L(o(B)) : te
      );
    }, zn.jsxs = function(B, Q, O, z, X) {
      var R = 1e4 > A.recentlyCreatedOwnerStacks++;
      return u(
        B,
        Q,
        O,
        !0,
        z,
        X,
        R ? Error("react-stack-top-frame") : E,
        R ? L(o(B)) : te
      );
    };
  })()), zn;
}
var ms;
function id() {
  return ms || (ms = 1, process.env.NODE_ENV === "production" ? pr.exports = ad() : pr.exports = sd()), pr.exports;
}
var r = id(), Ao = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var gs;
function ld() {
  return gs || (gs = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
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
          return n.apply(null, s);
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
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(Ao)), Ao.exports;
}
var cd = ld();
const ye = /* @__PURE__ */ od(cd), Cy = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: o,
  ...a
}) => {
  const s = ye(
    "nhsuk-action-link__link",
    o
  );
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ r.jsxs(
    "a",
    {
      className: s,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...a,
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
}, Ai = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: n,
  variant: o = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const a = (s) => {
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
          "nhsuk-account--white": o === "white"
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
            children: a(s)
          },
          i
        )
      ) })
    }
  );
};
var Ei = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Ei || {}), Pi = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Pi || {});
function dd(e) {
  const t = e.variant || "primary", n = e.size || "default", o = !!e.fullWidth, a = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    n !== "default" ? `nhs-aria-button--${n}` : "",
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
const { forwardRef: ud, useCallback: tn, useState: Eo } = Z;
function fd(e, t) {
  const {
    children: n,
    variant: o = Ei.Primary,
    size: a = Pi.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Eo(!1), [f, h] = Eo(!1), [p, x] = Eo(!1), g = dd({
    variant: o,
    size: a,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), m = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", M = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...m && { "data-disabled": "true" }
  }, I = tn(
    () => !m && u(!0),
    [m]
  ), T = tn(() => u(!1), []), C = tn(
    () => !m && h(!0),
    [m]
  ), v = tn(() => {
    h(!1), u(!1);
  }, []), k = tn(() => x(!0), []), D = tn(() => x(!1), []), S = tn(
    (ee) => {
      ee.key === " " && ("href" in c || ee.currentTarget.getAttribute("role") === "button") && (ee.preventDefault(), ee.currentTarget.click());
    },
    [c]
  ), b = tn(
    (ee) => {
      if (l) {
        const K = ee.currentTarget;
        if (K.getAttribute("data-processing") === "true") {
          ee.preventDefault();
          return;
        }
        K.setAttribute("data-processing", "true"), setTimeout(() => {
          K.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in c && c.href) {
    const {
      id: ee,
      style: K,
      title: oe,
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
        ...M,
        ...l && { "data-prevent-double-click": "true" },
        ...fe,
        onKeyDown: (pe) => {
          ce.onKeyDown?.(pe), S(pe);
        },
        onClick: (pe) => {
          ce.onClick?.(pe), b(pe);
        },
        onMouseDown: (pe) => {
          ce.onMouseDown?.(pe), I();
        },
        onMouseUp: (pe) => {
          ce.onMouseUp?.(pe), T();
        },
        onMouseEnter: (pe) => {
          ce.onMouseEnter?.(pe), C();
        },
        onMouseLeave: (pe) => {
          ce.onMouseLeave?.(pe), v();
        },
        onFocus: (pe) => {
          ce.onFocus?.(pe), k();
        },
        onBlur: (pe) => {
          ce.onBlur?.(pe), D();
        },
        "aria-disabled": ce["aria-disabled"],
        ...ce["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ee,
        style: K,
        title: oe,
        "aria-label": de,
        "aria-describedby": V,
        "aria-labelledby": ie,
        tabIndex: se,
        children: n
      }
    );
  }
  const {
    id: y,
    style: A,
    title: j,
    ["aria-label"]: F,
    ["aria-describedby"]: L,
    ["aria-labelledby"]: N,
    tabIndex: _,
    name: E,
    value: te,
    form: U,
    formAction: B,
    formEncType: Q,
    formMethod: O,
    formNoValidate: z,
    formTarget: X,
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
      ...M,
      ...l && { "data-prevent-double-click": "true" },
      ...q.disabled && { "aria-disabled": "true" },
      ...re,
      onKeyDown: (ee) => {
        q.onKeyDown?.(ee), S(ee);
      },
      onClick: (ee) => {
        q.onClick?.(ee), b(ee);
      },
      onMouseDown: (ee) => {
        q.onMouseDown?.(ee), I();
      },
      onMouseUp: (ee) => {
        q.onMouseUp?.(ee), T();
      },
      onMouseEnter: (ee) => {
        q.onMouseEnter?.(ee), C();
      },
      onMouseLeave: (ee) => {
        q.onMouseLeave?.(ee), v();
      },
      onFocus: (ee) => {
        q.onFocus?.(ee), k();
      },
      onBlur: (ee) => {
        q.onBlur?.(ee), D();
      },
      id: y,
      style: A,
      title: j,
      "aria-label": F,
      "aria-describedby": L,
      "aria-labelledby": N,
      tabIndex: _,
      name: E,
      value: te,
      form: U,
      formAction: B,
      formEncType: Q,
      formMethod: O,
      formNoValidate: z,
      formTarget: X,
      autoFocus: R,
      children: n
    }
  );
}
const bt = ud(fd);
bt.displayName = "Button";
const qn = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: o,
  element: a = "a",
  onClick: s,
  ...i
}) => {
  const l = ye(
    "nhsuk-back-link",
    o
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: a === "button" ? /* @__PURE__ */ r.jsx(
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
function hd(e) {
  const { color: t = "default", noBorder: n, closable: o, disabled: a, className: s } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    n ? "nhsuk-tag--no-border" : "",
    o ? "nhsuk-tag--closable" : "",
    a ? "nhsuk-tag--disabled" : "",
    s || ""
  ].filter(Boolean).join(" "), showClose: !!o, disabled: !!a };
}
const et = ({
  text: e,
  html: t,
  children: n,
  color: o = "default",
  noBorder: a = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...d
}) => {
  const u = hd({ color: o, noBorder: a, closable: s, disabled: l, className: c }), f = (h) => {
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
}, pd = ({
  id: e,
  name: t,
  checked: n,
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
  const [g, m] = He(o), M = n !== void 0, I = M ? n : g;
  Xe(() => {
    M || m(o);
  }, [o, M]);
  const T = (S) => {
    const b = S.target.checked;
    M || m(b), u?.(b, S);
  }, C = i ? `${e}-hint` : void 0, v = l ? `${e}-error` : void 0, k = [C, v].filter(Boolean).join(" ") || void 0, D = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: D, ...x, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: I,
        disabled: a,
        onChange: T,
        onBlur: f,
        onFocus: h,
        "aria-describedby": k,
        ...p
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ r.jsx("div", { id: C, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: v, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
pd.displayName = "Checkbox";
function Fi(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const za = ({
  id: e,
  name: t,
  type: n = "text",
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
  maxLength: g,
  minLength: m,
  pattern: M,
  step: I,
  min: T,
  max: C,
  showValueLabels: v = !1,
  showCurrentValue: k = !1,
  valueLabels: D,
  onChange: S,
  onBlur: b,
  onFocus: y,
  onKeyDown: A,
  ...j
}) => {
  const [F, L] = He(o || a || (n === "range" ? T || "0" : ""));
  Xe(() => {
    o !== void 0 && L(o);
  }, [o]);
  const N = (X) => {
    const R = X.target;
    L(R.value), ("type" in X && X.nativeEvent || X.type === "keydown") && S?.(X);
  }, { classes: _, isRange: E } = Fi({ type: n, hasError: d, width: h, className: f }), te = o !== void 0, U = {
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
    pattern: M,
    step: I,
    min: T,
    max: C,
    onChange: N,
    onBlur: b,
    onFocus: y,
    onKeyDown: (X) => {
      if (E && /[0-9]/.test(X.key)) {
        const R = (F?.toString() || "") + X.key;
        X.target.value = R, N(X);
      }
      A?.(X);
    },
    ...j
  }, B = !te && a !== void 0 ? { defaultValue: a } : {}, Q = te ? { value: o } : {}, O = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: _,
      ...Q,
      ...B,
      "data-current-value": F,
      ...U
    }
  ), z = E ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    v && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: D?.min || T || "0" }),
      O(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: D?.max || C || "100" })
    ] }),
    !v && O(),
    k && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      D?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: F })
    ] }) })
  ] }) : null;
  return E ? z : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: _,
      id: e,
      name: t,
      type: n,
      value: o,
      ...o === void 0 && a !== void 0 ? { defaultValue: a } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: x,
      maxLength: g,
      minLength: m,
      pattern: M,
      step: I,
      min: T,
      max: C,
      onChange: S,
      onBlur: b,
      onFocus: y,
      onKeyDown: A,
      ...j
    }
  );
};
function md(e) {
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
const Oa = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: o = "m",
  children: a,
  ...s
}) => {
  const i = md({ size: o, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: a }) : a });
};
function gd(e) {
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
const Ua = ({
  children: e,
  legend: t,
  className: n,
  describedBy: o,
  ...a
}) => {
  const s = gd({
    className: n,
    describedBy: o,
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
      ...a,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ r.jsx("legend", { className: s.legendClasses, children: i() }),
        e
      ]
    }
  );
};
function xd(e) {
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
const bd = ({
  items: e,
  name: t,
  idPrefix: n,
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
  const [x, g] = He(
    e.filter((S) => S.checked).map((S) => S.value)
  ), m = n || t, M = i ? `${m}-hint` : void 0, I = l ? `${m}-error` : void 0, T = [M, I].filter(Boolean).join(" ") || void 0, C = (S, b) => {
    let y;
    b ? y = [...x, S] : y = x.filter((A) => A !== S), g(y), u?.(y);
  }, v = () => e.map((S, b) => {
    const y = `${m}-${b + 1}`, A = `${y}-conditional`, j = x.includes(S.value), F = S.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: y,
          name: t,
          type: "checkbox",
          value: S.value,
          checked: j,
          disabled: F,
          onChange: (L) => C(S.value, L.target.checked),
          "aria-describedby": S.hint ? `${y}-hint` : T,
          ...S.conditional && {
            "aria-controls": A,
            "aria-expanded": j ? "true" : "false"
          },
          ...S.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: y, children: S.text }),
      S.hint && /* @__PURE__ */ r.jsx("div", { id: `${y}-hint`, className: "nhsuk-checkboxes__hint", children: S.hint }),
      S.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ye("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !j
          }),
          id: A,
          children: typeof S.conditional == "object" && S.conditional !== null && "label" in S.conditional && "id" in S.conditional && "name" in S.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            S.conditional.label && /* @__PURE__ */ r.jsx(Oa, { htmlFor: S.conditional.id, children: S.conditional.label }),
            /* @__PURE__ */ r.jsx(za, { ...S.conditional })
          ] }) : S.conditional
        }
      )
    ] }, S.value);
  }), { classes: k, formGroupClasses: D } = xd({ small: d, className: c, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: D, ...h, ...p, children: /* @__PURE__ */ r.jsxs(
    Ua,
    {
      legend: o ? {
        text: o,
        isPageHeading: a,
        size: s
      } : void 0,
      describedBy: T,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: M, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: I, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: k, children: v() })
      ]
    }
  ) });
};
bd.displayName = "Checkboxes";
function yd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const vd = ({
  id: e,
  name: t,
  value: n,
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
  wrap: g = "soft",
  resize: m = "vertical",
  autoComplete: M,
  spellCheck: I,
  onChange: T,
  onBlur: C,
  onFocus: v,
  onKeyDown: k,
  ...D
}) => {
  const { classes: S, describedBy: b } = yd({ hasError: c, resize: m, className: u, describedBy: d });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: S,
      id: e,
      name: t,
      value: n,
      defaultValue: o,
      placeholder: a,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": b,
      rows: f,
      cols: h,
      maxLength: p,
      minLength: x,
      wrap: g,
      autoComplete: M,
      spellCheck: I,
      onChange: T,
      onBlur: C,
      onFocus: v,
      onKeyDown: k,
      ...D
    }
  );
};
function wd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Ri = ({
  id: e,
  className: t,
  children: n,
  ...o
}) => {
  const a = wd({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: a.classes, id: a.id, ...o, children: n });
}, Ny = ({
  id: e,
  maxLength: t,
  maxWords: n,
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
  const p = s ?? i ?? "", [x, g] = He(p), [m, M] = He(0), [I, T] = He(!1), [C, v] = He(!1), k = ge((j) => n ? j.trim() === "" ? 0 : j.trim().split(/\s+/).length : j.length, [n]);
  Xe(() => {
    const j = k(x), F = t || n || 0, L = F - j, N = Math.floor(F * (o / 100));
    M(L), T(j > F), v(j >= N || j > F), u && u(j, L);
  }, [x, t, n, o, k, u]);
  const D = (j) => {
    const F = j.target.value;
    g(F), f && f(j);
  }, S = () => {
    const j = t || n || 0, F = n ? "word" : "character", L = n ? "words" : "characters";
    if (!C)
      return `You can enter up to ${j} ${j === 1 ? F : L}`;
    if (I) {
      const N = Math.abs(m);
      return `You have ${N} ${N === 1 ? F : L} too many`;
    } else
      return `You have ${m} ${m === 1 ? F : L} remaining`;
  }, b = ye(
    "nhsuk-character-count",
    c
  ), y = ye(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !C,
      "nhsuk-error-message": I
    },
    d?.classes
  ), A = ye(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": I
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: b,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": o,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          vd,
          {
            id: e,
            name: a,
            value: s !== void 0 ? x : void 0,
            defaultValue: s === void 0 ? i ?? x : void 0,
            rows: l,
            className: A,
            onChange: D,
            "aria-describedby": `${e}-info`,
            "aria-invalid": I || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ri,
          {
            id: `${e}-info`,
            className: y,
            role: "status",
            "aria-live": "polite",
            children: S()
          }
        )
      ]
    }
  );
};
function Sd(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const _d = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: o,
  children: a,
  ...s
}) => {
  const i = ye(
    "nhsuk-select__option",
    o
  );
  return /* @__PURE__ */ r.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...s,
      children: a
    }
  );
}, kd = ({
  id: e,
  name: t,
  ariaLabel: n,
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
  onChange: g,
  onBlur: m,
  onFocus: M,
  ...I
}) => {
  const { classes: T } = Sd({ hasError: l, className: d }), C = () => p ? p.map((k, D) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: k.value,
      disabled: k.disabled,
      "data-initial-selected": k.selected || void 0,
      children: k.text
    },
    `${k.value}-${D}`
  )) : null, v = a === void 0 && o === void 0 && p ? p.find((k) => k.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: T,
      id: e,
      name: t,
      "aria-label": n,
      value: o,
      defaultValue: a !== void 0 ? a : v,
      disabled: s,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: h,
      onChange: g,
      onBlur: m,
      onFocus: M,
      ...I,
      children: x || C()
    }
  );
}, Cr = kd;
Cr.Option = _d;
function Cd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Bi(e, {
  variant: t,
  selectedValue: n,
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
    hasError: g = !1,
    describedBy: m,
    className: M,
    size: I = "normal",
    inline: T = !1,
    options: C,
    ...v
  } = p, { classes: k, describedBy: D } = Cd({ hasError: g, size: I, inline: T, className: M, describedBy: m });
  return /* @__PURE__ */ r.jsx(Ua, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: k,
      ...v,
      ...o ? { "data-nhs-behaviour": "radios" } : {},
      children: C.map((S, b) => {
        const y = `${x}-${b}`, A = S.conditional ? `${y}-conditional` : void 0, j = n === S.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: y,
              name: x,
              type: "radio",
              value: S.value,
              disabled: S.disabled,
              ...t === "client" ? {
                checked: j,
                onChange: a,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (F) => {
                  F && c && (c.current[b] = F);
                }
              } : {
                defaultChecked: j,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": D
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: y, children: S.text }),
          S.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: S.hint }),
          S.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ye("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !j
              }),
              id: A,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof S.conditional == "object" && S.conditional !== null && "label" in S.conditional && "id" in S.conditional && "name" in S.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                S.conditional.label && /* @__PURE__ */ r.jsx(
                  Oa,
                  {
                    htmlFor: S.conditional.id,
                    children: S.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  d,
                  {
                    ...S.conditional
                  }
                )
              ] }) : S.conditional
            }
          )
        ] }, S.value);
      })
    }
  ) });
}
const jy = ({ value: e, defaultValue: t, onChange: n, onBlur: o, onFocus: a, ...s }) => {
  const [i, l] = He(e || t || ""), c = Ue([]), d = Ue(i), u = (p) => {
    const x = p.target.value;
    x !== d.current && (d.current = x, l(x), n?.(p));
  }, f = (p) => {
    a?.(p);
  }, h = ge((p) => {
    const { key: x } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(x)) return;
    p.preventDefault();
    const g = c.current.filter((T) => T && !T.disabled), m = g.indexOf(p.currentTarget);
    if (m === -1) return;
    let M = m;
    ["ArrowDown", "ArrowRight"].includes(x) ? M = (m + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(x) && (M = (m - 1 + g.length) % g.length);
    const I = g[M];
    I && (I.focus(), I.checked || I.click());
  }, []);
  return Bi(
    { value: e, defaultValue: t, onChange: n, onBlur: o, onFocus: a, ...s },
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
      InputComponent: za
    }
  );
};
function Nd(e) {
  const {
    id: t,
    name: n,
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
    autoComplete: g,
    maxLength: m,
    minLength: M,
    pattern: I,
    step: T,
    min: C,
    max: v,
    showValueLabels: k = !1,
    showCurrentValue: D = !1,
    valueLabels: S,
    // Strip interactive handlers in server variant
    onChange: b,
    onBlur: y,
    onFocus: A,
    onKeyDown: j,
    ...F
  } = e, { classes: L, isRange: N } = Fi({
    type: o,
    hasError: u,
    width: p,
    className: h
  }), _ = {
    id: t,
    name: n,
    type: o,
    placeholder: i,
    disabled: l,
    readOnly: c,
    required: d,
    "aria-describedby": f,
    inputMode: x,
    autoComplete: g,
    maxLength: m,
    minLength: M,
    pattern: I,
    step: T,
    min: C,
    max: v,
    ...F
  };
  if (N) {
    const E = a ?? s ?? (typeof C < "u" ? String(C) : "0"), te = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: L,
        ...a !== void 0 ? { value: a } : {},
        ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": E,
        ..._
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      k ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: S?.min || C || "0" }),
        te,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: S?.max || v || "100" })
      ] }) : te,
      D && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        S?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: E })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: L,
      ...a !== void 0 ? { value: a } : {},
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ..._
    }
  );
}
const My = ({ value: e, defaultValue: t, ...n }) => {
  const o = e || t || "";
  return Bi(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: o,
      enableBehaviourAttr: !0,
      InputComponent: Nd
    }
  );
};
var gn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(gn || {}), jd = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(jd || {}), Md = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Md || {}), Id = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Id || {});
const Hi = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: o,
  style: a,
  ...s
}) => {
  const i = ye(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = o ? { maxWidth: o, ...a || {} } : a;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, on = ({
  children: e,
  className: t,
  style: n,
  align: o,
  rowGap: a,
  ...s
}) => {
  const i = ye(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    o ? `nhsuk-grid-row-align-${o}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: i, style: n, ...s, children: e });
}, Jn = ({
  children: e,
  width: t = gn.Full,
  mobileWidth: n,
  tabletWidth: o,
  desktopWidth: a,
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
      [`nhsuk-u-${o}-tablet`]: !!o,
      [`nhsuk-u-${a}-desktop`]: !!a,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...u, children: e });
}, Qo = ({
  children: e,
  className: t,
  style: n,
  rowGap: o = 8,
  ...a
}) => {
  const s = Qe.Children.toArray(e), i = s[0], l = Qe.isValidElement(i) && (i.type === on || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof o == "number" ? `${o}px` : o;
  let d = e;
  if (l)
    d = s.map((u, f) => {
      if (!Qe.isValidElement(u)) return u;
      const h = u, p = h.props || {}, x = typeof p.className == "string" ? p.className : "";
      if (!(h.type === on || x.includes("nhsuk-grid-row"))) return u;
      const m = p.rowGap, M = m !== void 0 ? typeof m == "number" ? `${m}px` : m : c, I = f === 0 ? void 0 : M;
      if (!I) return u;
      const T = { ...p.style || {}, marginTop: I };
      return Qe.cloneElement(h, { style: T });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ r.jsx(on, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(Hi, { className: t, style: n, ...a, children: d });
}, Dd = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: o = !1,
  className: a,
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
      "nhsuk-list--border": o,
      [`nhsuk-list--${n}`]: n !== "medium"
    },
    a
  );
  return /* @__PURE__ */ r.jsx(c, { className: d, role: s, ...l, children: e });
}, Td = ({
  children: e,
  className: t,
  ...n
}) => {
  const o = ye("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: o, ...n, children: e });
}, Ld = Dd;
Ld.Item = Td;
const Iy = ({
  debug: e = !1,
  className: t,
  children: n,
  ...o
}) => {
  if (!n)
    return null;
  const a = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...o, children: n });
}, Dy = {
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
}, Ty = ({
  debug: e = !1,
  className: t,
  children: n,
  ...o
}) => {
  if (!n)
    return null;
  const a = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...o, children: n });
}, Ly = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, $y = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], zi = ({
  as: e = "main",
  size: t = "default",
  className: n,
  children: o,
  ...a
}) => {
  const s = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(e, { className: s, ...a, children: o });
};
function $d(e) {
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
function Ad(e) {
  const t = e.level ?? $d(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), o = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: o };
}
const Jt = ({ level: e, className: t, text: n, html: o, children: a, size: s, marginBottom: i, ...l }) => {
  const c = Ad({ level: e, size: s, className: t, marginBottom: i }), d = a || (o ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: o } }) : n);
  return Ii(c.tag, { className: c.classes, style: c.style, ...l }, d);
};
function Ed(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const xs = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: o, ...a }) => {
  const s = Ed({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...a, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    o
  ] });
}, Ay = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: o,
  errorList: a,
  className: s,
  children: i,
  ...l
}) => {
  const c = Ue(null);
  Xe(() => {
    c.current && c.current.focus();
  }, []);
  const d = ye(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => o ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: o } }) : n, h = (p) => {
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
          !i && (n || o) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: a.map((p, x) => /* @__PURE__ */ r.jsx("li", { children: h(p) }, x)) })
        ] })
      ]
    }
  );
}, Ey = ({
  id: e,
  className: t,
  items: n,
  namePrefix: o,
  values: a = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...d
}) => {
  const [u, f] = He(() => ({
    day: a.day || "",
    month: a.month || "",
    year: a.year || ""
  })), [h, p] = He({}), x = (N) => N % 4 === 0 && N % 100 !== 0 || N % 400 === 0, g = (N, _) => {
    const E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return N === 2 && x(_) ? 29 : E[N - 1];
  }, m = (N, _, E) => {
    if (!N) return;
    if (!/^\d+$/.test(N)) return "Day must be a number";
    const te = parseInt(N, 10);
    if (te < 1 || te > 31) return "Day must be between 1 and 31";
    if (_ && E) {
      const U = parseInt(_, 10), B = parseInt(E, 10);
      if (!isNaN(U) && !isNaN(B) && U >= 1 && U <= 12) {
        const Q = g(U, B);
        if (te > Q)
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
          ][U - 1]} ${B} only has ${Q} days`;
      }
    }
  }, M = (N) => {
    if (!N) return;
    if (!/^\d+$/.test(N)) return "Month must be a number";
    const _ = parseInt(N, 10);
    if (_ < 1 || _ > 12) return "Month must be between 1 and 12";
  }, I = (N) => {
    if (!N) return;
    if (!/^\d+$/.test(N)) return "Year must be a number";
    const _ = parseInt(N, 10), E = (/* @__PURE__ */ new Date()).getFullYear();
    if (_ < 1900 || _ > E + 10)
      return `Year must be between 1900 and ${E + 10}`;
  }, T = (N, _, E) => {
    if (!N || !_ || !E) return;
    const te = parseInt(N, 10), U = parseInt(_, 10), B = parseInt(E, 10);
    if (isNaN(te) || isNaN(U) || isNaN(B) || U < 1 || U > 12 || B < 1900) return;
    const Q = g(U, B);
    te < 1 || te > Q;
  }, C = ge(
    (N, _) => {
      const E = {
        ...u,
        [N]: _
      };
      f(E), c && c(E);
    },
    [u, c]
  ), v = ge(
    (N) => {
      const _ = u[N];
      let E;
      if (N === "day")
        E = m(
          _,
          u.month,
          u.year
        );
      else if (N === "month") {
        if (E = M(_), !E && u.day) {
          const te = m(
            u.day,
            _,
            u.year
          );
          p((U) => ({
            ...U,
            day: te
          }));
        }
      } else if (N === "year" && (E = I(_), !E && u.day && u.month)) {
        const te = m(
          u.day,
          u.month,
          _
        );
        p((U) => ({
          ...U,
          day: te
        }));
      }
      if (p((te) => ({
        ...te,
        [N]: E
      })), u.day && u.month && u.year) {
        const te = T(
          N === "day" ? _ : u.day,
          N === "month" ? _ : u.month,
          N === "year" ? _ : u.year
        );
        te && p((U) => ({
          ...U,
          day: te
        }));
      }
    },
    [u, m, M, I, T]
  ), k = Ee(
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
  ), D = n || k;
  let S = s?.describedBy || "";
  const b = i ? `${e}-hint` : "", y = l ? `${e}-error` : "";
  b && (S = S ? `${S} ${b}` : b), y && (S = S ? `${S} ${y}` : y);
  const A = Object.values(h).some((N) => N), j = ye("nhsuk-form-group", {
    "nhsuk-form-group--error": l || A
  }), F = ye("nhsuk-date-input", t), L = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(Ri, { id: b, className: i.classes, children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text }),
    l && /* @__PURE__ */ r.jsx(xs, { id: y, className: l.classes, children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text }),
    Object.entries(h).map(
      ([N, _]) => _ ? /* @__PURE__ */ r.jsxs(
        xs,
        {
          id: `${e}-${N}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            _
          ]
        },
        `${N}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: F,
        id: e,
        "data-testid": "date-input",
        ...d,
        children: D.map((N) => {
          const _ = N.id || `${e}-${N.name}`, E = o ? `${o}[${N.name}]` : N.name, te = N.label || N.name.charAt(0).toUpperCase() + N.name.slice(1), U = h[N.name], B = u[N.name] || "";
          let Q = S;
          if (U) {
            const O = `${e}-${N.name}-error`;
            Q = Q ? `${Q} ${O}` : O;
          }
          return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
            /* @__PURE__ */ r.jsx(Oa, { htmlFor: _, className: "nhsuk-date-input__label", children: te }),
            /* @__PURE__ */ r.jsx(
              za,
              {
                id: _,
                name: E,
                value: B,
                className: ye("nhsuk-date-input__input", N.classes, {
                  "nhsuk-input--error": U
                }),
                inputMode: N.inputmode,
                autoComplete: N.autocomplete,
                pattern: N.pattern,
                "aria-describedby": Q || void 0,
                hasError: !!U,
                onChange: (O) => C(N.name, O.target.value),
                onBlur: () => v(N.name)
              }
            )
          ] }, N.name);
        })
      }
    )
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: j, children: s ? /* @__PURE__ */ r.jsx(
    Ua,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: S || void 0,
      children: L()
    }
  ) : L() });
}, Oi = {
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
}, Ui = Ti(Oi), Pd = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Oi, ...t };
  return /* @__PURE__ */ r.jsx(Ui.Provider, { value: n, children: e });
}, Py = () => {
  const e = Di(Ui);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Fd() {
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
function Rd() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Fd(), document.head.appendChild(e);
}
const Fy = ({ children: e, theme: t }) => (Xe(() => {
  Rd();
}, []), /* @__PURE__ */ r.jsx(Pd, { theme: t, children: e })), Bd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", Hd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", zd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Od = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Ud = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", Wd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Gd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var Wi = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(Wi || {}), Gi = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Gi || {});
const Yd = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Bd,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Ud,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Od,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: Hd,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: zd,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: Wd,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Gd,
      ariaLabel: "FDP"
    }
  }
};
function Vd(e, t = "full") {
  return Yd[e]?.[t];
}
function Zd(e, {
  variant: t,
  isClient: n,
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
    serviceName: g,
    organisation: m,
    search: M,
    account: I,
    navigation: T,
    containerClasses: C,
    variant: v = "default",
    attributes: k = {},
    maxVisibleItems: D,
    // deprecated (ignored)
    responsiveNavigation: S = !0,
    logoVariant: b = Gi.Full,
    ...y
  } = e, A = {
    ...x,
    text: x?.text ?? g
  };
  "maxVisibleItems" in y && delete y.maxVisibleItems;
  const j = A.href && !p.href || A.href && A.href === p.href, F = j ? A.href : p.href, L = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": v === "organisation" || m,
      "nhsuk-header--white": v === "white"
    },
    h
  ), N = ye(
    "nhsuk-header__container",
    C
  ), _ = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": T?.white,
      "nhsuk-header__navigation--justified": T?.justified
    },
    T?.className
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
      const R = Vd(Wi.FDP, b);
      if (R?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: R.src,
            "data-logo-variant": b,
            width: "280",
            alt: R.ariaLabel || "FDP"
          }
        );
    }
    return U();
  }, Q = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, O = (R, re) => R ? re ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: re, children: R }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: R }) : null, z = (R) => R.active || R.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: R.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: R.html } }) : R.text }) : R.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: R.html } }) : R.text, X = () => /* @__PURE__ */ r.jsx(
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
  return T?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: L,
      role: "banner",
      "data-module": "nhsuk-header",
      ...k,
      ...y,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: N, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            F ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: F, children: [
              B(),
              Q(),
              j && O(A.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              B(),
              Q(),
              j && O(A.text)
            ] }),
            A.text && !j && O(A.text, A.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            Ai,
            {
              ...I,
              variant: v === "white" ? "white" : "default"
            }
          )
        ] }),
        T && T.items && T.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: _,
            "aria-label": T.ariaLabel || "Menu",
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
                  C
                ),
                ref: c,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      (T?.items || []).map((R, re) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ye(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": R.active || R.current,
                              "nhsuk-header__navigation-item--hidden": a && s !== void 0 && re >= (s ?? 0)
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
                              children: z(R)
                            }
                          )
                        },
                        re
                      )),
                      a && s !== void 0 && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs(
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
                            /* @__PURE__ */ r.jsx("span", { children: "More" }),
                            X()
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
        n && T && T.items && T.items.length > 0 && o && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: T.items.slice(s ?? 0).map((R, re) => /* @__PURE__ */ r.jsx(
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
                    children: z(R)
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
const ea = Ti(void 0);
function Ry({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [o, a] = He(e);
  Xe(() => {
    a(e);
  }, [e]), Xe(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", o), () => {
      };
  }, [o, t]);
  const s = Ee(() => ({ brand: o, setBrand: a }), [o]);
  return t === "local" ? /* @__PURE__ */ r.jsx(ea.Provider, { value: s, children: /* @__PURE__ */ r.jsx("div", { "data-brand": o, children: n }) }) : /* @__PURE__ */ r.jsx(ea.Provider, { value: s, children: n });
}
function qd() {
  const e = Di(ea);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Jd = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
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
  inputAttributes: g = {},
  buttonAttributes: m = {},
  preventDefaultSubmit: M = !1,
  debounceMs: I = 300,
  minQueryLength: T = 1
}) => {
  const [C, v] = He(""), [k, D] = He(!1), S = Ue(void 0), b = Ue(null), y = Ue(null), A = e === "controlled" && a !== void 0, j = A ? a : C, F = ge(
    (z) => {
      S.current && clearTimeout(S.current), S.current = setTimeout(() => {
        u.onChange && z.length >= T && u.onChange(z);
      }, I);
    },
    [u.onChange, I, T]
  ), L = ge(
    (z) => {
      const X = z.target.value;
      A || v(X), e !== "form" && F(X);
    },
    [A, e, F]
  ), N = ge(
    (z) => {
      const X = j.trim(), R = {
        query: X,
        timestamp: Date.now(),
        formData: new FormData(z.currentTarget)
      };
      e === "controlled" || e === "hybrid" && M ? (z.preventDefault(), u.onSearch && X.length >= T && u.onSearch(R)) : e === "hybrid" && u.onSearch && X.length >= T && u.onSearch(R);
    },
    [
      e,
      j,
      u.onSearch,
      M,
      T
    ]
  ), _ = ge(() => {
    D(!0), u.onFocus?.();
  }, [u.onFocus]), E = ge(() => {
    D(!1), u.onBlur?.();
  }, [u.onBlur]), te = ge(() => {
    A || v(""), u.onClear?.(), y.current?.focus();
  }, [A, u.onClear]);
  Xe(() => () => {
    S.current && clearTimeout(S.current);
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
  ), Q = () => !j || e === "form" ? null : /* @__PURE__ */ r.jsx(
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
  ), O = () => !h || !p.length || !k ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((z) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: z.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: z.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: z.title }),
            z.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: z.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: z.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: z.title }),
            z.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: z.description })
          ]
        }
      )
    },
    z.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ye("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": k,
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
            onSubmit: N,
            ...x,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: y,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? o : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: j,
                    onChange: L,
                    onFocus: _,
                    onBlur: E,
                    disabled: d || f,
                    ...h && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...g
                  }
                ),
                Q()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && j.length < T,
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
}, Yi = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: o,
  search: a,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, h] = He(!1), [p, x] = He(!1), [g, m] = He(i?.items?.length || 0), [M, I] = He(!1), [T, C] = He(!1), v = Ue(null), k = Ue(null), D = Ue(!1);
  Xe(() => {
    typeof window > "u" || C(!0);
  }, []), Xe(() => {
    if (typeof document > "u") return;
    const j = (F) => {
      F.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [f]);
  const S = Ue(null), b = ge(() => {
    if (!T || !i?.items || i.items.length === 0 || D.current) return;
    const j = v.current, F = k.current;
    if (!j || !F) return;
    D.current = !0, j.classList.add("nhsuk-header__navigation-container--measuring");
    const L = j.clientWidth, N = Array.from(F.children);
    if (!N.length) {
      j.classList.remove("nhsuk-header__navigation-container--measuring"), D.current = !1;
      return;
    }
    if (S.current == null) {
      const R = document.createElement("button");
      R.type = "button", R.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", R.style.position = "absolute", R.style.visibility = "hidden", R.style.pointerEvents = "none", R.innerHTML = "<span>More</span>", j.appendChild(R), S.current = R.getBoundingClientRect().width || 104, j.removeChild(R);
    }
    const _ = S.current + 16;
    let E = 0, te = 0;
    const U = window.getComputedStyle(j), B = parseFloat(U.paddingLeft) || 0, Q = parseFloat(U.paddingRight) || 0;
    let O = B + Q;
    for (const R of N) {
      const re = R.getBoundingClientRect().width;
      if (E + re + _ + O > L) break;
      E += re, te += 1;
    }
    const z = te < i.items.length, X = z ? te : i.items.length;
    x((R) => R === z ? R : z), m((R) => R === X ? R : X), j.classList.remove("nhsuk-header__navigation-container--measuring"), D.current = !1;
  }, [T, i?.items]);
  Xe(() => {
    if (!T) return;
    const j = v.current;
    if (!j) return;
    let F = null;
    const L = () => {
      F == null && (F = window.requestAnimationFrame(() => {
        F = null, b();
      }));
    };
    b();
    const N = new ResizeObserver(() => L());
    return N.observe(j), k.current && N.observe(k.current), () => {
      F != null && window.cancelAnimationFrame(F), N.disconnect();
    };
  }, [T, b]), Xe(() => {
    T && b();
  }, [i?.items?.length, T, b]);
  const y = (j) => {
    j && (j.preventDefault(), j.stopPropagation());
    const F = !f;
    h(F), I(F);
  }, A = (() => {
    try {
      return qd();
    } catch {
      return;
    }
  })();
  return Zd(
    {
      className: e,
      logo: t,
      service: n,
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
      visibleItems: g,
      dropdownVisible: M,
      toggleMenu: y,
      navContainerRef: v,
      navListRef: k,
      // Provide interactive search node for client build only
      searchNode: a ? /* @__PURE__ */ r.jsx(Jd, { ...a }) : null,
      brand: A?.brand
    }
  );
};
function Xd(e, { variant: t, isClient: n }) {
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
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const m = {
    ...s,
    text: s?.text ?? i
  }, M = m.href && !a.href || m.href && m.href === a.href, I = M ? m.href : a.href, T = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    o
  ), C = ye("nhsuk-header__container", u), v = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), k = () => /* @__PURE__ */ r.jsxs(
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
        /* @__PURE__ */ r.jsx("title", { children: a.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), D = () => a.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: a.src,
      width: "280",
      alt: a.ariaLabel || "NHS"
    }
  ) : k(), S = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, b = (L, N) => L ? N ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: N, children: L }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: L }) : null, y = (L) => L.active || L.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: L.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: L.html } }) : L.text }) : L.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: L.html } }) : L.text, A = d?.items && !x, j = A ? [] : d?.items, F = A ? d.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: T, role: "banner", "data-module": "nhsuk-header", ...h, ...g, children: [
    /* @__PURE__ */ r.jsxs("div", { className: C, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        I ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: I, children: [
          D(),
          S(),
          M && b(m.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          D(),
          S(),
          M && b(m.text)
        ] }),
        m.text && !M && b(m.text, m.href)
      ] }),
      /* @__PURE__ */ r.jsx(Ai, { ...c, variant: f === "white" ? "white" : "default" })
    ] }),
    d && d.items && d.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: v, "aria-label": d.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
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
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (j || []).map((L, N) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ye("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": L.active || L.current
            }, L.className),
            ...L.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: L.href,
                ...L.active || L.current ? { "aria-current": L.current ? "page" : "true" } : {},
                children: y(L)
              }
            )
          },
          N
        )) })
      }
    ) }),
    A && F.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: F.map((L, N) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: ye("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": L.active || L.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: L.href,
            ...L.active || L.current ? { "aria-current": L.current ? "page" : "true" } : {},
            children: y(L)
          }
        )
      },
      `overflow-server-${N}`
    )) }) })
  ] });
}
const By = (e) => Xd(e, {
  variant: "server",
  isClient: !1
}), Kd = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
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
    n,
    !c && !o && !a ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = c || e || o || a, x = () => {
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
          c || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: o }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          x(),
          c || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: o }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Kd.displayName = "Hero";
const Vi = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: o,
  metaLinks: a,
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
  ), h = !!(n || o);
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
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: o.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: a.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (n || []).map((p) => f(p, !0)),
              (o || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function vr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Qd(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wa(e) {
  let t, n, o;
  e.length !== 2 ? (t = vr, n = (l, c) => vr(e(l), c), o = (l, c) => e(l) - c) : (t = e === vr || e === Qd ? e : eu, n = e, o = e);
  function a(l, c, d = 0, u = l.length) {
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
    const f = a(l, c, d, u - 1);
    return f > d && o(l[f - 1], c) > -o(l[f], c) ? f - 1 : f;
  }
  return { left: a, center: i, right: s };
}
function eu() {
  return 0;
}
function tu(e) {
  return e === null ? NaN : +e;
}
const nu = Wa(vr), ru = nu.right;
Wa(tu).center;
function Zi(e, t) {
  let n, o;
  if (t === void 0)
    for (const a of e)
      a != null && (n === void 0 ? a >= a && (n = o = a) : (n > a && (n = a), o < a && (o = a)));
  else {
    let a = -1;
    for (let s of e)
      (s = t(s, ++a, e)) != null && (n === void 0 ? s >= s && (n = o = s) : (n > s && (n = s), o < s && (o = s)));
  }
  return [n, o];
}
class bs extends Map {
  constructor(t, n = su) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [o, a] of t) this.set(o, a);
  }
  get(t) {
    return super.get(ys(this, t));
  }
  has(t) {
    return super.has(ys(this, t));
  }
  set(t, n) {
    return super.set(ou(this, t), n);
  }
  delete(t) {
    return super.delete(au(this, t));
  }
}
function ys({ _intern: e, _key: t }, n) {
  const o = t(n);
  return e.has(o) ? e.get(o) : n;
}
function ou({ _intern: e, _key: t }, n) {
  const o = t(n);
  return e.has(o) ? e.get(o) : (e.set(o, n), n);
}
function au({ _intern: e, _key: t }, n) {
  const o = t(n);
  return e.has(o) && (n = e.get(o), e.delete(o)), n;
}
function su(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const iu = Math.sqrt(50), lu = Math.sqrt(10), cu = Math.sqrt(2);
function Nr(e, t, n) {
  const o = (t - e) / Math.max(0, n), a = Math.floor(Math.log10(o)), s = o / Math.pow(10, a), i = s >= iu ? 10 : s >= lu ? 5 : s >= cu ? 2 : 1;
  let l, c, d;
  return a < 0 ? (d = Math.pow(10, -a) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, a) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= n && n < 2 ? Nr(e, t, n * 2) : [l, c, d];
}
function du(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const o = t < e, [a, s, i] = o ? Nr(t, e, n) : Nr(e, t, n);
  if (!(s >= a)) return [];
  const l = s - a + 1, c = new Array(l);
  if (o)
    if (i < 0) for (let d = 0; d < l; ++d) c[d] = (s - d) / -i;
    else for (let d = 0; d < l; ++d) c[d] = (s - d) * i;
  else if (i < 0) for (let d = 0; d < l; ++d) c[d] = (a + d) / -i;
  else for (let d = 0; d < l; ++d) c[d] = (a + d) * i;
  return c;
}
function ta(e, t, n) {
  return t = +t, e = +e, n = +n, Nr(e, t, n)[2];
}
function na(e, t, n) {
  t = +t, e = +e, n = +n;
  const o = t < e, a = o ? ta(t, e, n) : ta(e, t, n);
  return (o ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function uu(e, t, n) {
  e = +e, t = +t, n = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +n;
  for (var o = -1, a = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(a); ++o < a; )
    s[o] = e + o * n;
  return s;
}
function vo(e, t) {
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
const vs = Symbol("implicit");
function qi() {
  var e = new bs(), t = [], n = [], o = vs;
  function a(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (o !== vs) return o;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return a.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new bs();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return a;
  }, a.range = function(s) {
    return arguments.length ? (n = Array.from(s), a) : n.slice();
  }, a.unknown = function(s) {
    return arguments.length ? (o = s, a) : o;
  }, a.copy = function() {
    return qi(t, n).unknown(o);
  }, vo.apply(a, arguments), a;
}
function Ji() {
  var e = qi().unknown(void 0), t = e.domain, n = e.range, o = 0, a = 1, s, i, l = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = a < o, x = p ? a : o, g = p ? o : a;
    s = (g - x) / Math.max(1, h - c + d * 2), l && (s = Math.floor(s)), x += (g - x - s * (h - c)) * u, i = s * (1 - c), l && (x = Math.round(x), i = Math.round(i));
    var m = uu(h).map(function(M) {
      return x + s * M;
    });
    return n(p ? m.reverse() : m);
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
    return Ji(t(), [o, a]).round(l).paddingInner(c).paddingOuter(d).align(u);
  }, vo.apply(f(), arguments);
}
function Ga(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Xi(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function sr() {
}
var Xn = 0.7, jr = 1 / Xn, In = "\\s*([+-]?\\d+)\\s*", Kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", fu = /^#([0-9a-f]{3,8})$/, hu = new RegExp(`^rgb\\(${In},${In},${In}\\)$`), pu = new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`), mu = new RegExp(`^rgba\\(${In},${In},${In},${Kn}\\)$`), gu = new RegExp(`^rgba\\(${Et},${Et},${Et},${Kn}\\)$`), xu = new RegExp(`^hsl\\(${Kn},${Et},${Et}\\)$`), bu = new RegExp(`^hsla\\(${Kn},${Et},${Et},${Kn}\\)$`), ws = {
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
Ga(sr, Qn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ss,
  // Deprecated! Use color.formatHex.
  formatHex: Ss,
  formatHex8: yu,
  formatHsl: vu,
  formatRgb: _s,
  toString: _s
});
function Ss() {
  return this.rgb().formatHex();
}
function yu() {
  return this.rgb().formatHex8();
}
function vu() {
  return Ki(this).formatHsl();
}
function _s() {
  return this.rgb().formatRgb();
}
function Qn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = fu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ks(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? mr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? mr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = hu.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = pu.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = mu.exec(e)) ? mr(t[1], t[2], t[3], t[4]) : (t = gu.exec(e)) ? mr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = xu.exec(e)) ? js(t[1], t[2] / 100, t[3] / 100, 1) : (t = bu.exec(e)) ? js(t[1], t[2] / 100, t[3] / 100, t[4]) : ws.hasOwnProperty(e) ? ks(ws[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function ks(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function mr(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new kt(e, t, n, o);
}
function wu(e) {
  return e instanceof sr || (e = Qn(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function ra(e, t, n, o) {
  return arguments.length === 1 ? wu(e) : new kt(e, t, n, o ?? 1);
}
function kt(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
Ga(kt, ra, Xi(sr, {
  brighter(e) {
    return e = e == null ? jr : Math.pow(jr, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(fn(this.r), fn(this.g), fn(this.b), Mr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Cs,
  // Deprecated! Use color.formatHex.
  formatHex: Cs,
  formatHex8: Su,
  formatRgb: Ns,
  toString: Ns
}));
function Cs() {
  return `#${un(this.r)}${un(this.g)}${un(this.b)}`;
}
function Su() {
  return `#${un(this.r)}${un(this.g)}${un(this.b)}${un((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ns() {
  const e = Mr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fn(this.r)}, ${fn(this.g)}, ${fn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Mr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function un(e) {
  return e = fn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function js(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, n, o);
}
function Ki(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof sr || (e = Qn(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, a = Math.min(t, n, o), s = Math.max(t, n, o), i = NaN, l = s - a, c = (s + a) / 2;
  return l ? (t === s ? i = (n - o) / l + (n < o) * 6 : n === s ? i = (o - t) / l + 2 : i = (t - n) / l + 4, l /= c < 0.5 ? s + a : 2 - s - a, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Dt(i, l, c, e.opacity);
}
function _u(e, t, n, o) {
  return arguments.length === 1 ? Ki(e) : new Dt(e, t, n, o ?? 1);
}
function Dt(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
Ga(Dt, _u, Xi(sr, {
  brighter(e) {
    return e = e == null ? jr : Math.pow(jr, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, a = 2 * n - o;
    return new kt(
      Po(e >= 240 ? e - 240 : e + 120, a, o),
      Po(e, a, o),
      Po(e < 120 ? e + 240 : e - 120, a, o),
      this.opacity
    );
  },
  clamp() {
    return new Dt(Ms(this.h), gr(this.s), gr(this.l), Mr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Mr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ms(this.h)}, ${gr(this.s) * 100}%, ${gr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ms(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Po(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ya = (e) => () => e;
function ku(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Cu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function Nu(e) {
  return (e = +e) == 1 ? Qi : function(t, n) {
    return n - t ? Cu(t, n, e) : Ya(isNaN(t) ? n : t);
  };
}
function Qi(e, t) {
  var n = t - e;
  return n ? ku(e, n) : Ya(isNaN(e) ? t : e);
}
const Is = (function e(t) {
  var n = Nu(t);
  function o(a, s) {
    var i = n((a = ra(a)).r, (s = ra(s)).r), l = n(a.g, s.g), c = n(a.b, s.b), d = Qi(a.opacity, s.opacity);
    return function(u) {
      return a.r = i(u), a.g = l(u), a.b = c(u), a.opacity = d(u), a + "";
    };
  }
  return o.gamma = e, o;
})(1);
function ju(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), a;
  return function(s) {
    for (a = 0; a < n; ++a) o[a] = e[a] * (1 - s) + t[a] * s;
    return o;
  };
}
function Mu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Iu(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, a = new Array(o), s = new Array(n), i;
  for (i = 0; i < o; ++i) a[i] = Va(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < o; ++i) s[i] = a[i](l);
    return s;
  };
}
function Du(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return n.setTime(e * (1 - o) + t * o), n;
  };
}
function Ir(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Tu(e, t) {
  var n = {}, o = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? n[a] = Va(e[a], t[a]) : o[a] = t[a];
  return function(s) {
    for (a in n) o[a] = n[a](s);
    return o;
  };
}
var oa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fo = new RegExp(oa.source, "g");
function Lu(e) {
  return function() {
    return e;
  };
}
function $u(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Au(e, t) {
  var n = oa.lastIndex = Fo.lastIndex = 0, o, a, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (o = oa.exec(e)) && (a = Fo.exec(t)); )
    (s = a.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (o = o[0]) === (a = a[0]) ? l[i] ? l[i] += a : l[++i] = a : (l[++i] = null, c.push({ i, x: Ir(o, a) })), n = Fo.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? $u(c[0].x) : Lu(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function Va(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? Ya(t) : (n === "number" ? Ir : n === "string" ? (o = Qn(t)) ? (t = o, Is) : Au : t instanceof Qn ? Is : t instanceof Date ? Du : Mu(t) ? ju : Array.isArray(t) ? Iu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Tu : Ir)(e, t);
}
function Eu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Pu(e) {
  return function() {
    return e;
  };
}
function Fu(e) {
  return +e;
}
var Ds = [0, 1];
function Cn(e) {
  return e;
}
function aa(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Pu(isNaN(t) ? NaN : 0.5);
}
function Ru(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(o) {
    return Math.max(e, Math.min(t, o));
  };
}
function Bu(e, t, n) {
  var o = e[0], a = e[1], s = t[0], i = t[1];
  return a < o ? (o = aa(a, o), s = n(i, s)) : (o = aa(o, a), s = n(s, i)), function(l) {
    return s(o(l));
  };
}
function Hu(e, t, n) {
  var o = Math.min(e.length, t.length) - 1, a = new Array(o), s = new Array(o), i = -1;
  for (e[o] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < o; )
    a[i] = aa(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var c = ru(e, l, 1, o) - 1;
    return s[c](a[c](l));
  };
}
function el(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function zu() {
  var e = Ds, t = Ds, n = Va, o, a, s, i = Cn, l, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return i !== Cn && (i = Ru(e[0], e[h - 1])), l = h > 2 ? Hu : Bu, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = l(e.map(o), t, n)))(o(i(h)));
  }
  return f.invert = function(h) {
    return i(a((d || (d = l(t, e.map(o), Ir)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Fu), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Eu, u();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Cn, u()) : i !== Cn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return o = h, a = p, u();
  };
}
function tl() {
  return zu()(Cn, Cn);
}
function Ou(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Dr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, o = e.slice(0, n);
  return [
    o.length > 1 ? o[0] + o.slice(2) : o,
    +e.slice(n + 1)
  ];
}
function An(e) {
  return e = Dr(Math.abs(e)), e ? e[1] : NaN;
}
function Uu(e, t) {
  return function(n, o) {
    for (var a = n.length, s = [], i = 0, l = e[0], c = 0; a > 0 && l > 0 && (c + l + 1 > o && (l = Math.max(1, o - c)), s.push(n.substring(a -= l, a + l)), !((c += l + 1) > o)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Wu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Gu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Tr(e) {
  if (!(t = Gu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Za({
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
Tr.prototype = Za.prototype;
function Za(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Za.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Yu(e) {
  e: for (var t = e.length, n = 1, o = -1, a; n < t; ++n)
    switch (e[n]) {
      case ".":
        o = a = n;
        break;
      case "0":
        o === 0 && (o = n), a = n;
        break;
      default:
        if (!+e[n]) break e;
        o > 0 && (o = 0);
        break;
    }
  return o > 0 ? e.slice(0, o) + e.slice(a + 1) : e;
}
var nl;
function Vu(e, t) {
  var n = Dr(e, t);
  if (!n) return e + "";
  var o = n[0], a = n[1], s = a - (nl = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, i = o.length;
  return s === i ? o : s > i ? o + new Array(s - i + 1).join("0") : s > 0 ? o.slice(0, s) + "." + o.slice(s) : "0." + new Array(1 - s).join("0") + Dr(e, Math.max(0, t + s - 1))[0];
}
function Ts(e, t) {
  var n = Dr(e, t);
  if (!n) return e + "";
  var o = n[0], a = n[1];
  return a < 0 ? "0." + new Array(-a).join("0") + o : o.length > a + 1 ? o.slice(0, a + 1) + "." + o.slice(a + 1) : o + new Array(a - o.length + 2).join("0");
}
const Ls = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Ou,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ts(e * 100, t),
  r: Ts,
  s: Vu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function $s(e) {
  return e;
}
var As = Array.prototype.map, Es = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? $s : Uu(As.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", o = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? $s : Wu(As.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = Tr(f);
    var h = f.fill, p = f.align, x = f.sign, g = f.symbol, m = f.zero, M = f.width, I = f.comma, T = f.precision, C = f.trim, v = f.type;
    v === "n" ? (I = !0, v = "g") : Ls[v] || (T === void 0 && (T = 12), C = !0, v = "g"), (m || h === "0" && p === "=") && (m = !0, h = "0", p = "=");
    var k = g === "$" ? n : g === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", D = g === "$" ? o : /[%p]/.test(v) ? i : "", S = Ls[v], b = /[defgprs%]/.test(v);
    T = T === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function y(A) {
      var j = k, F = D, L, N, _;
      if (v === "c")
        F = S(A) + F, A = "";
      else {
        A = +A;
        var E = A < 0 || 1 / A < 0;
        if (A = isNaN(A) ? c : S(Math.abs(A), T), C && (A = Yu(A)), E && +A == 0 && x !== "+" && (E = !1), j = (E ? x === "(" ? x : l : x === "-" || x === "(" ? "" : x) + j, F = (v === "s" ? Es[8 + nl / 3] : "") + F + (E && x === "(" ? ")" : ""), b) {
          for (L = -1, N = A.length; ++L < N; )
            if (_ = A.charCodeAt(L), 48 > _ || _ > 57) {
              F = (_ === 46 ? a + A.slice(L + 1) : A.slice(L)) + F, A = A.slice(0, L);
              break;
            }
        }
      }
      I && !m && (A = t(A, 1 / 0));
      var te = j.length + A.length + F.length, U = te < M ? new Array(M - te + 1).join(h) : "";
      switch (I && m && (A = t(U + A, U.length ? M - F.length : 1 / 0), U = ""), p) {
        case "<":
          A = j + A + F + U;
          break;
        case "=":
          A = j + U + A + F;
          break;
        case "^":
          A = U.slice(0, te = U.length >> 1) + j + A + F + U.slice(te);
          break;
        default:
          A = U + j + A + F;
          break;
      }
      return s(A);
    }
    return y.toString = function() {
      return f + "";
    }, y;
  }
  function u(f, h) {
    var p = d((f = Tr(f), f.type = "f", f)), x = Math.max(-8, Math.min(8, Math.floor(An(h) / 3))) * 3, g = Math.pow(10, -x), m = Es[8 + x / 3];
    return function(M) {
      return p(g * M) + m;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var xr, rl, ol;
qu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function qu(e) {
  return xr = Zu(e), rl = xr.format, ol = xr.formatPrefix, xr;
}
function Ju(e) {
  return Math.max(0, -An(Math.abs(e)));
}
function Xu(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(An(t) / 3))) * 3 - An(Math.abs(e)));
}
function Ku(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, An(t) - An(e)) + 1;
}
function Qu(e, t, n, o) {
  var a = na(e, t, n), s;
  switch (o = Tr(o ?? ",f"), o.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return o.precision == null && !isNaN(s = Xu(a, i)) && (o.precision = s), ol(o, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(s = Ku(a, Math.max(Math.abs(e), Math.abs(t)))) && (o.precision = s - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(s = Ju(a)) && (o.precision = s - (o.type === "%") * 2);
      break;
    }
  }
  return rl(o);
}
function ef(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var o = t();
    return du(o[0], o[o.length - 1], n ?? 10);
  }, e.tickFormat = function(n, o) {
    var a = t();
    return Qu(a[0], a[a.length - 1], n ?? 10, o);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var o = t(), a = 0, s = o.length - 1, i = o[a], l = o[s], c, d, u = 10;
    for (l < i && (d = i, i = l, l = d, d = a, a = s, s = d); u-- > 0; ) {
      if (d = ta(i, l, n), d === c)
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
function Lr() {
  var e = tl();
  return e.copy = function() {
    return el(e, Lr());
  }, vo.apply(e, arguments), ef(e);
}
function tf(e, t) {
  e = e.slice();
  var n = 0, o = e.length - 1, a = e[n], s = e[o], i;
  return s < a && (i = n, n = o, o = i, i = a, a = s, s = i), e[n] = t.floor(a), e[o] = t.ceil(s), e;
}
const Ro = /* @__PURE__ */ new Date(), Bo = /* @__PURE__ */ new Date();
function pt(e, t, n, o) {
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
  }), n && (a.count = (s, i) => (Ro.setTime(+s), Bo.setTime(+i), e(Ro), e(Bo), Math.floor(n(Ro, Bo))), a.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? a.filter(o ? (i) => o(i) % s === 0 : (i) => a.count(0, i) % s === 0) : a)), a;
}
const $r = pt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
$r.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? pt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : $r);
$r.range;
const Zt = 1e3, Mt = Zt * 60, qt = Mt * 60, Xt = qt * 24, qa = Xt * 7, Ps = Xt * 30, Ho = Xt * 365, Nn = pt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getUTCSeconds());
Nn.range;
const Ja = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Zt);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getMinutes());
Ja.range;
const nf = pt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getUTCMinutes());
nf.range;
const Xa = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Zt - e.getMinutes() * Mt);
}, (e, t) => {
  e.setTime(+e + t * qt);
}, (e, t) => (t - e) / qt, (e) => e.getHours());
Xa.range;
const rf = pt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * qt);
}, (e, t) => (t - e) / qt, (e) => e.getUTCHours());
rf.range;
const ir = pt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Mt) / Xt,
  (e) => e.getDate() - 1
);
ir.range;
const Ka = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Xt, (e) => e.getUTCDate() - 1);
Ka.range;
const of = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Xt, (e) => Math.floor(e / Xt));
of.range;
function yn(e) {
  return pt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Mt) / qa);
}
const wo = yn(0), Ar = yn(1), af = yn(2), sf = yn(3), En = yn(4), lf = yn(5), cf = yn(6);
wo.range;
Ar.range;
af.range;
sf.range;
En.range;
lf.range;
cf.range;
function vn(e) {
  return pt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / qa);
}
const al = vn(0), Er = vn(1), df = vn(2), uf = vn(3), Pn = vn(4), ff = vn(5), hf = vn(6);
al.range;
Er.range;
df.range;
uf.range;
Pn.range;
ff.range;
hf.range;
const er = pt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
er.range;
const pf = pt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
pf.range;
const Kt = pt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Kt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Kt.range;
const xn = pt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
xn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
xn.range;
function mf(e, t, n, o, a, s) {
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
    [n, 1, qa],
    [t, 1, Ps],
    [t, 3, 3 * Ps],
    [e, 1, Ho]
  ];
  function l(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), x = p ? p.range(d, +u + 1) : [];
    return h ? x.reverse() : x;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = Wa(([, , m]) => m).right(i, h);
    if (p === i.length) return e.every(na(d / Ho, u / Ho, f));
    if (p === 0) return $r.every(Math.max(na(d, u, f), 1));
    const [x, g] = i[h / i[p - 1][2] < i[p][2] / h ? p - 1 : p];
    return x.every(g);
  }
  return [l, c];
}
const [gf, xf] = mf(Kt, er, wo, ir, Xa, Ja);
function zo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Oo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function On(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function bf(e) {
  var t = e.dateTime, n = e.date, o = e.time, a = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Un(a), u = Wn(a), f = Un(s), h = Wn(s), p = Un(i), x = Wn(i), g = Un(l), m = Wn(l), M = Un(c), I = Wn(c), T = {
    a: E,
    A: te,
    b: U,
    B,
    c: null,
    d: Os,
    e: Os,
    f: zf,
    g: Xf,
    G: Qf,
    H: Rf,
    I: Bf,
    j: Hf,
    L: sl,
    m: Of,
    M: Uf,
    p: Q,
    q: O,
    Q: Gs,
    s: Ys,
    S: Wf,
    u: Gf,
    U: Yf,
    V: Vf,
    w: Zf,
    W: qf,
    x: null,
    X: null,
    y: Jf,
    Y: Kf,
    Z: eh,
    "%": Ws
  }, C = {
    a: z,
    A: X,
    b: R,
    B: re,
    c: null,
    d: Us,
    e: Us,
    f: oh,
    g: ph,
    G: gh,
    H: th,
    I: nh,
    j: rh,
    L: ll,
    m: ah,
    M: sh,
    p: q,
    q: ee,
    Q: Gs,
    s: Ys,
    S: ih,
    u: lh,
    U: ch,
    V: dh,
    w: uh,
    W: fh,
    x: null,
    X: null,
    y: hh,
    Y: mh,
    Z: xh,
    "%": Ws
  }, v = {
    a: y,
    A,
    b: j,
    B: F,
    c: L,
    d: Hs,
    e: Hs,
    f: Af,
    g: Bs,
    G: Rs,
    H: zs,
    I: zs,
    j: Df,
    L: $f,
    m: If,
    M: Tf,
    p: b,
    q: Mf,
    Q: Pf,
    s: Ff,
    S: Lf,
    u: _f,
    U: kf,
    V: Cf,
    w: Sf,
    W: Nf,
    x: N,
    X: _,
    y: Bs,
    Y: Rs,
    Z: jf,
    "%": Ef
  };
  T.x = k(n, T), T.X = k(o, T), T.c = k(t, T), C.x = k(n, C), C.X = k(o, C), C.c = k(t, C);
  function k(K, oe) {
    return function(de) {
      var V = [], ie = -1, se = 0, fe = K.length, ce, pe, $e;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++ie < fe; )
        K.charCodeAt(ie) === 37 && (V.push(K.slice(se, ie)), (pe = Fs[ce = K.charAt(++ie)]) != null ? ce = K.charAt(++ie) : pe = ce === "e" ? " " : "0", ($e = oe[ce]) && (ce = $e(de, pe)), V.push(ce), se = ie + 1);
      return V.push(K.slice(se, ie)), V.join("");
    };
  }
  function D(K, oe) {
    return function(de) {
      var V = On(1900, void 0, 1), ie = S(V, K, de += "", 0), se, fe;
      if (ie != de.length) return null;
      if ("Q" in V) return new Date(V.Q);
      if ("s" in V) return new Date(V.s * 1e3 + ("L" in V ? V.L : 0));
      if (oe && !("Z" in V) && (V.Z = 0), "p" in V && (V.H = V.H % 12 + V.p * 12), V.m === void 0 && (V.m = "q" in V ? V.q : 0), "V" in V) {
        if (V.V < 1 || V.V > 53) return null;
        "w" in V || (V.w = 1), "Z" in V ? (se = Oo(On(V.y, 0, 1)), fe = se.getUTCDay(), se = fe > 4 || fe === 0 ? Er.ceil(se) : Er(se), se = Ka.offset(se, (V.V - 1) * 7), V.y = se.getUTCFullYear(), V.m = se.getUTCMonth(), V.d = se.getUTCDate() + (V.w + 6) % 7) : (se = zo(On(V.y, 0, 1)), fe = se.getDay(), se = fe > 4 || fe === 0 ? Ar.ceil(se) : Ar(se), se = ir.offset(se, (V.V - 1) * 7), V.y = se.getFullYear(), V.m = se.getMonth(), V.d = se.getDate() + (V.w + 6) % 7);
      } else ("W" in V || "U" in V) && ("w" in V || (V.w = "u" in V ? V.u % 7 : "W" in V ? 1 : 0), fe = "Z" in V ? Oo(On(V.y, 0, 1)).getUTCDay() : zo(On(V.y, 0, 1)).getDay(), V.m = 0, V.d = "W" in V ? (V.w + 6) % 7 + V.W * 7 - (fe + 5) % 7 : V.w + V.U * 7 - (fe + 6) % 7);
      return "Z" in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, Oo(V)) : zo(V);
    };
  }
  function S(K, oe, de, V) {
    for (var ie = 0, se = oe.length, fe = de.length, ce, pe; ie < se; ) {
      if (V >= fe) return -1;
      if (ce = oe.charCodeAt(ie++), ce === 37) {
        if (ce = oe.charAt(ie++), pe = v[ce in Fs ? oe.charAt(ie++) : ce], !pe || (V = pe(K, de, V)) < 0) return -1;
      } else if (ce != de.charCodeAt(V++))
        return -1;
    }
    return V;
  }
  function b(K, oe, de) {
    var V = d.exec(oe.slice(de));
    return V ? (K.p = u.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function y(K, oe, de) {
    var V = p.exec(oe.slice(de));
    return V ? (K.w = x.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function A(K, oe, de) {
    var V = f.exec(oe.slice(de));
    return V ? (K.w = h.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function j(K, oe, de) {
    var V = M.exec(oe.slice(de));
    return V ? (K.m = I.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function F(K, oe, de) {
    var V = g.exec(oe.slice(de));
    return V ? (K.m = m.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function L(K, oe, de) {
    return S(K, t, oe, de);
  }
  function N(K, oe, de) {
    return S(K, n, oe, de);
  }
  function _(K, oe, de) {
    return S(K, o, oe, de);
  }
  function E(K) {
    return i[K.getDay()];
  }
  function te(K) {
    return s[K.getDay()];
  }
  function U(K) {
    return c[K.getMonth()];
  }
  function B(K) {
    return l[K.getMonth()];
  }
  function Q(K) {
    return a[+(K.getHours() >= 12)];
  }
  function O(K) {
    return 1 + ~~(K.getMonth() / 3);
  }
  function z(K) {
    return i[K.getUTCDay()];
  }
  function X(K) {
    return s[K.getUTCDay()];
  }
  function R(K) {
    return c[K.getUTCMonth()];
  }
  function re(K) {
    return l[K.getUTCMonth()];
  }
  function q(K) {
    return a[+(K.getUTCHours() >= 12)];
  }
  function ee(K) {
    return 1 + ~~(K.getUTCMonth() / 3);
  }
  return {
    format: function(K) {
      var oe = k(K += "", T);
      return oe.toString = function() {
        return K;
      }, oe;
    },
    parse: function(K) {
      var oe = D(K += "", !1);
      return oe.toString = function() {
        return K;
      }, oe;
    },
    utcFormat: function(K) {
      var oe = k(K += "", C);
      return oe.toString = function() {
        return K;
      }, oe;
    },
    utcParse: function(K) {
      var oe = D(K += "", !0);
      return oe.toString = function() {
        return K;
      }, oe;
    }
  };
}
var Fs = { "-": "", _: " ", 0: "0" }, gt = /^\s*\d+/, yf = /^%/, vf = /[\\^$*+?|[\]().{}]/g;
function Ke(e, t, n) {
  var o = e < 0 ? "-" : "", a = (o ? -e : e) + "", s = a.length;
  return o + (s < n ? new Array(n - s + 1).join(t) + a : a);
}
function wf(e) {
  return e.replace(vf, "\\$&");
}
function Un(e) {
  return new RegExp("^(?:" + e.map(wf).join("|") + ")", "i");
}
function Wn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Sf(e, t, n) {
  var o = gt.exec(t.slice(n, n + 1));
  return o ? (e.w = +o[0], n + o[0].length) : -1;
}
function _f(e, t, n) {
  var o = gt.exec(t.slice(n, n + 1));
  return o ? (e.u = +o[0], n + o[0].length) : -1;
}
function kf(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.U = +o[0], n + o[0].length) : -1;
}
function Cf(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.V = +o[0], n + o[0].length) : -1;
}
function Nf(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.W = +o[0], n + o[0].length) : -1;
}
function Rs(e, t, n) {
  var o = gt.exec(t.slice(n, n + 4));
  return o ? (e.y = +o[0], n + o[0].length) : -1;
}
function Bs(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), n + o[0].length) : -1;
}
function jf(e, t, n) {
  var o = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return o ? (e.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), n + o[0].length) : -1;
}
function Mf(e, t, n) {
  var o = gt.exec(t.slice(n, n + 1));
  return o ? (e.q = o[0] * 3 - 3, n + o[0].length) : -1;
}
function If(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.m = o[0] - 1, n + o[0].length) : -1;
}
function Hs(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.d = +o[0], n + o[0].length) : -1;
}
function Df(e, t, n) {
  var o = gt.exec(t.slice(n, n + 3));
  return o ? (e.m = 0, e.d = +o[0], n + o[0].length) : -1;
}
function zs(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.H = +o[0], n + o[0].length) : -1;
}
function Tf(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.M = +o[0], n + o[0].length) : -1;
}
function Lf(e, t, n) {
  var o = gt.exec(t.slice(n, n + 2));
  return o ? (e.S = +o[0], n + o[0].length) : -1;
}
function $f(e, t, n) {
  var o = gt.exec(t.slice(n, n + 3));
  return o ? (e.L = +o[0], n + o[0].length) : -1;
}
function Af(e, t, n) {
  var o = gt.exec(t.slice(n, n + 6));
  return o ? (e.L = Math.floor(o[0] / 1e3), n + o[0].length) : -1;
}
function Ef(e, t, n) {
  var o = yf.exec(t.slice(n, n + 1));
  return o ? n + o[0].length : -1;
}
function Pf(e, t, n) {
  var o = gt.exec(t.slice(n));
  return o ? (e.Q = +o[0], n + o[0].length) : -1;
}
function Ff(e, t, n) {
  var o = gt.exec(t.slice(n));
  return o ? (e.s = +o[0], n + o[0].length) : -1;
}
function Os(e, t) {
  return Ke(e.getDate(), t, 2);
}
function Rf(e, t) {
  return Ke(e.getHours(), t, 2);
}
function Bf(e, t) {
  return Ke(e.getHours() % 12 || 12, t, 2);
}
function Hf(e, t) {
  return Ke(1 + ir.count(Kt(e), e), t, 3);
}
function sl(e, t) {
  return Ke(e.getMilliseconds(), t, 3);
}
function zf(e, t) {
  return sl(e, t) + "000";
}
function Of(e, t) {
  return Ke(e.getMonth() + 1, t, 2);
}
function Uf(e, t) {
  return Ke(e.getMinutes(), t, 2);
}
function Wf(e, t) {
  return Ke(e.getSeconds(), t, 2);
}
function Gf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Yf(e, t) {
  return Ke(wo.count(Kt(e) - 1, e), t, 2);
}
function il(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? En(e) : En.ceil(e);
}
function Vf(e, t) {
  return e = il(e), Ke(En.count(Kt(e), e) + (Kt(e).getDay() === 4), t, 2);
}
function Zf(e) {
  return e.getDay();
}
function qf(e, t) {
  return Ke(Ar.count(Kt(e) - 1, e), t, 2);
}
function Jf(e, t) {
  return Ke(e.getFullYear() % 100, t, 2);
}
function Xf(e, t) {
  return e = il(e), Ke(e.getFullYear() % 100, t, 2);
}
function Kf(e, t) {
  return Ke(e.getFullYear() % 1e4, t, 4);
}
function Qf(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? En(e) : En.ceil(e), Ke(e.getFullYear() % 1e4, t, 4);
}
function eh(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ke(t / 60 | 0, "0", 2) + Ke(t % 60, "0", 2);
}
function Us(e, t) {
  return Ke(e.getUTCDate(), t, 2);
}
function th(e, t) {
  return Ke(e.getUTCHours(), t, 2);
}
function nh(e, t) {
  return Ke(e.getUTCHours() % 12 || 12, t, 2);
}
function rh(e, t) {
  return Ke(1 + Ka.count(xn(e), e), t, 3);
}
function ll(e, t) {
  return Ke(e.getUTCMilliseconds(), t, 3);
}
function oh(e, t) {
  return ll(e, t) + "000";
}
function ah(e, t) {
  return Ke(e.getUTCMonth() + 1, t, 2);
}
function sh(e, t) {
  return Ke(e.getUTCMinutes(), t, 2);
}
function ih(e, t) {
  return Ke(e.getUTCSeconds(), t, 2);
}
function lh(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ch(e, t) {
  return Ke(al.count(xn(e) - 1, e), t, 2);
}
function cl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Pn(e) : Pn.ceil(e);
}
function dh(e, t) {
  return e = cl(e), Ke(Pn.count(xn(e), e) + (xn(e).getUTCDay() === 4), t, 2);
}
function uh(e) {
  return e.getUTCDay();
}
function fh(e, t) {
  return Ke(Er.count(xn(e) - 1, e), t, 2);
}
function hh(e, t) {
  return Ke(e.getUTCFullYear() % 100, t, 2);
}
function ph(e, t) {
  return e = cl(e), Ke(e.getUTCFullYear() % 100, t, 2);
}
function mh(e, t) {
  return Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function gh(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Pn(e) : Pn.ceil(e), Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function xh() {
  return "+0000";
}
function Ws() {
  return "%";
}
function Gs(e) {
  return +e;
}
function Ys(e) {
  return Math.floor(+e / 1e3);
}
var _n, dl;
bh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function bh(e) {
  return _n = bf(e), dl = _n.format, _n.parse, _n.utcFormat, _n.utcParse, _n;
}
function yh(e) {
  return new Date(e);
}
function vh(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ul(e, t, n, o, a, s, i, l, c, d) {
  var u = tl(), f = u.invert, h = u.domain, p = d(".%L"), x = d(":%S"), g = d("%I:%M"), m = d("%I %p"), M = d("%a %d"), I = d("%b %d"), T = d("%B"), C = d("%Y");
  function v(k) {
    return (c(k) < k ? p : l(k) < k ? x : i(k) < k ? g : s(k) < k ? m : o(k) < k ? a(k) < k ? M : I : n(k) < k ? T : C)(k);
  }
  return u.invert = function(k) {
    return new Date(f(k));
  }, u.domain = function(k) {
    return arguments.length ? h(Array.from(k, vh)) : h().map(yh);
  }, u.ticks = function(k) {
    var D = h();
    return e(D[0], D[D.length - 1], k ?? 10);
  }, u.tickFormat = function(k, D) {
    return D == null ? v : d(D);
  }, u.nice = function(k) {
    var D = h();
    return (!k || typeof k.range != "function") && (k = t(D[0], D[D.length - 1], k ?? 10)), k ? h(tf(D, k)) : u;
  }, u.copy = function() {
    return el(u, ul(e, t, n, o, a, s, i, l, c, d));
  }, u;
}
function Qa() {
  return vo.apply(ul(gf, xf, Kt, er, wo, ir, Xa, Ja, Nn, dl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function wh({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: o,
  isSelected: a = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const d = Ue(null), [u, f] = He(!1), [h, p] = He(!1), x = t(e.start), g = t(e.end), m = Math.max(g - x, 20), M = () => {
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
  }, I = e.progress ? m * e.progress / 100 : 0, T = () => {
    n?.(e);
  }, C = () => {
    o?.(e);
  }, v = (j) => {
    j.key === "Enter" ? (j.preventDefault(), T()) : j.key === " " && (j.preventDefault(), C());
  }, k = () => {
    f(!0);
  }, D = () => {
    f(!1);
  }, S = () => {
    p(!0), l?.();
  }, b = () => {
    p(!1);
  }, y = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || a) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    a && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), A = {
    "--task-left": `${x}px`,
    "--task-width": `${m}px`,
    "--task-color": M(),
    left: `${x}px`,
    width: `${m}px`,
    backgroundColor: M()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: y,
      style: A,
      onClick: T,
      onDoubleClick: C,
      onKeyDown: v,
      onMouseDown: k,
      onMouseUp: D,
      onFocus: S,
      onBlur: b,
      "aria-label": c || `${a ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
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
function Sh({ viewStart: e, viewEnd: t, dateCount: n }) {
  const o = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    o.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = He(-1), c = Ue(null), d = (p) => {
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
            children: o.map((p, x) => {
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
function _h({ resource: e, tasks: t, scale: n, onTaskClick: o, onTaskDoubleClick: a, rowIndex: s, dateCount: i }) {
  const [l, c] = He(!1), [d, u] = He(-1), f = Ue(null);
  Xe(() => {
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
        const I = Math.min(t.length - 1, d + 1);
        u(I), f.current?.querySelector(`[data-task-index="${I}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case " ":
        g.preventDefault(), d >= 0 && a?.(t[d]);
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
              wh,
              {
                task: g,
                scale: n,
                onTaskClick: o,
                onTaskDoubleClick: a,
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
function Hy({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: o,
  onTaskClick: a,
  onTaskDoubleClick: s
}) {
  const i = Ue(null), [l, c] = He(800), d = Ee(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const g = new Date(n);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [n]), u = Ee(() => {
    if (o instanceof Date)
      return isNaN(o.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : o;
    const g = new Date(o);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [o]), f = Ee(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  Xe(() => {
    if (!i.current || typeof window > "u") return;
    const g = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!g) return;
    const m = new g((M) => {
      const I = M[0];
      I && c(Math.max(I.contentRect.width - 220, 400));
    });
    return m.observe(i.current), () => m.disconnect();
  }, []);
  const h = Ee(
    () => Qa().domain([d, u]).range([0, l]),
    [d, u, l]
  ), p = Ee(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((m) => {
      const M = g.get(m.resourceId) || [];
      M.push(m), g.set(m.resourceId, M);
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
        /* @__PURE__ */ r.jsx(Sh, { viewStart: d, viewEnd: u, dateCount: f }),
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
              _h,
              {
                resource: g,
                tasks: p.get(g.id) || [],
                scale: h,
                onTaskClick: a,
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
  attributes: o = {}
}) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", children: n ? /* @__PURE__ */ r.jsx(
  "span",
  {
    className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
    "aria-current": "page",
    ...o,
    children: e
  }
) : /* @__PURE__ */ r.jsx(
  "a",
  {
    className: "nhsuk-breadcrumb__link",
    href: t,
    ...o,
    children: e
  }
) }), kh = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: o = "Breadcrumb",
  href: a,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Qe.Children.toArray(t).filter(
    (m) => Qe.isValidElement(m) && (m.type === Pr || m.type?.displayName === "BreadcrumbItem")
  ).map((m) => ({
    text: typeof m.props.children == "string" ? m.props.children : String(m.props.children),
    href: m.props.href,
    active: m.props.active,
    attributes: m.props.attributes
  })) : [], d = () => t ? c() : a && s ? [{ href: a, text: s }] : e, u = () => {
    const g = d();
    if (g && g.length > 0) {
      const m = g.slice().reverse().find((M) => M.href && !M.active);
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
  ), x = o;
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
          Qe.Children.map(t, (g, m) => Qe.isValidElement(g) && (g.type === Pr || g.type?.displayName === "BreadcrumbItem") ? Qe.cloneElement(g, { key: m }) : null)
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
}, fl = kh;
fl.Item = Pr;
Pr.displayName = "BreadcrumbItem";
const hl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: o = {}
}) => {
  const a = ye("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      className: a,
      href: t,
      "data-module": "nhsuk-skip-link",
      ...o,
      children: e
    }
  );
}, zy = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: o,
  classes: a,
  attributes: s = {}
}) => {
  const i = ye("nhsuk-pagination", a);
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
        n && o && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-pagination-item--next", children: /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: n, children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__title", children: "Next" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__page", children: o }),
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
}, Oy = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: o = {}
}) => {
  const a = ye("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
      className: a,
      role: "navigation",
      "aria-label": n,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => s(i, l)) })
      ]
    }
  );
}, pl = Qe.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
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
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const I = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Jt,
      {
        level: o,
        className: x,
        children: I()
      }
    );
  }, m = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, M = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
          M()
        ] })
      ]
    }
  );
});
pl.displayName = "Card";
const Uy = ({
  className: e,
  children: t,
  "data-testid": n,
  id: o
}) => {
  const a = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "ul",
    {
      className: a,
      "data-testid": n,
      id: o,
      children: t
    }
  );
}, Wy = ({
  className: e,
  children: t,
  "data-testid": n
}) => {
  const o = ["nhsuk-card-group__item", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "li",
    {
      className: o,
      "data-testid": n,
      children: t
    }
  );
}, Gy = ({
  type: e,
  heading: t,
  headingHtml: n,
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
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    a
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const I = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], T = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        I,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Jt,
      {
        level: o,
        className: g,
        children: T
      }
    );
  }, M = () => c || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
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
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: M() })
      ]
    }
  );
}, Ch = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: o,
  headingLevel: a = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const d = ye(
    "nhsuk-panel",
    t
  ), u = () => !n && !o && !l ? null : o ? /* @__PURE__ */ r.jsx(
    Jt,
    {
      level: a,
      className: "nhsuk-panel__heading",
      html: o,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Jt,
    {
      level: a,
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
}, Yy = ({
  text: e,
  html: t,
  children: n,
  className: o,
  ...a
}) => {
  const s = ye("nhsuk-inset-text", o), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...a, children: i() });
}, Vy = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...o
}) => {
  const a = ye(
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
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: a, ...o, children: e.map((l, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Gn = { current: null }, Nh = () => {
  if (Gn.current) return Gn.current;
  try {
    Gn.current = require("prismjs");
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
    Gn.current = null;
  }
  return Gn.current;
}, jh = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let n = e;
  return t.forEach((o) => {
    n = n.replace(o.regex, (a) => `<span class="nhsuk-code-${o.cls}">${a}</span>`);
  }), n;
}, Fr = (e, t, n) => {
  if (n || !t) return e;
  const o = Nh();
  if (o && o.languages) {
    const a = o.languages[t] ? t : o.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : o.languages.json && t === "json" ? "json" : void 0;
    if (a)
      try {
        return o.highlight(e, o.languages[a], a);
      } catch {
      }
  }
  return jh(e);
}, Mh = ({
  rows: e,
  head: t,
  caption: n,
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
  data: g,
  visuallyHiddenCaption: m = !1
}) => {
  const M = `nhsuk-table__caption ${o ? `nhsuk-table__caption--${o}` : ""}`.trim(), I = ye(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), T = ye(f), C = (b, y) => {
    const A = ye(
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
      const L = Array.isArray(b.code), N = L ? b.code.join(`
`) : b.code, _ = L || N.includes(`
`), E = {
        className: ye("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": _,
          "nhsuk-table__code--inline": !_
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, te = Fr(N, b.codeLanguage);
      F = _ ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
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
      F = b.text;
    return /* @__PURE__ */ r.jsx("th", { className: A, ...j, children: F }, y);
  }, v = (b, y, A) => {
    const j = a && A || b.rowHeader, F = ye(
      j ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${j ? "header" : "cell"}--${b.format}`]: b.format
      },
      b.classes
    ), L = {
      ...j && { scope: "row" },
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...s && {
        role: j ? "rowheader" : "cell",
        ...b.header && { "data-label": b.header }
      },
      ...b.attributes
    };
    let N;
    if (b.node != null)
      N = /* @__PURE__ */ r.jsx(r.Fragment, { children: b.node });
    else if (b.html)
      N = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const te = Array.isArray(b.code), U = te ? b.code.join(`
`) : b.code, B = te || U.includes(`
`), Q = {
        className: ye("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, O = Fr(
        U,
        b.codeLanguage,
        b.disableHighlight
      );
      N = B ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...Q,
          dangerouslySetInnerHTML: { __html: O }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...Q,
          dangerouslySetInnerHTML: { __html: O }
        }
      );
    } else
      N = b.text;
    const _ = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && b.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        b.header,
        " "
      ] }),
      N
    ] }), E = j ? "th" : "td";
    return /* @__PURE__ */ r.jsx(E, { className: F, ...L, children: _ }, y);
  };
  let k = t, D = e;
  !k && x && x.length && (k = x.map((b) => ({
    text: b.title,
    format: b.format,
    classes: b.headerClasses,
    attributes: b.headerAttributes
  }))), !D && x && g && g.length && (D = g.map((b, y) => x.map((A) => {
    const j = A.accessor ? A.accessor(b, y) : b[A.key];
    let F = { format: A.format, classes: A.cellClasses, attributes: A.cellAttributes };
    if (A.rowHeader && (F.rowHeader = !0), A.render) {
      const L = A.render(j, b, y, A);
      return L == null || typeof L == "boolean" ? { ...F, text: "" } : typeof L == "string" || typeof L == "number" ? { ...F, text: String(L) } : { ...F, ...L };
    }
    return { ...F, text: j != null ? String(j) : "" };
  })));
  const S = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: I,
      ...s && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ye(M, m && "nhsuk-u-visually-hidden"), children: n }),
        k && k.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: k.map(
              (b, y) => C(b, y)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: D && D.map((b, y) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: b.map(
              (A, j) => v(A, j, j === 0)
            )
          },
          y
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(Ch, { className: d, children: [
    i && /* @__PURE__ */ r.jsx(Jt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    S()
  ] }) : T ? /* @__PURE__ */ r.jsx("div", { className: T, children: S() }) : S();
}, Ih = ({
  children: e,
  size: t,
  className: n
}) => {
  const o = ye(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: o, children: e });
}, ml = ({
  responsive: e,
  className: t,
  children: n,
  ...o
}) => {
  const a = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...a, ...o, children: n });
}, gl = ({
  text: e,
  html: t,
  node: n,
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
  else if (o != null) {
    const I = Array.isArray(o), T = I ? o.join(`
`) : o, C = I || T.includes(`
`), v = {
      className: ye("nhsuk-table__code", s, {
        "nhsuk-table__code--block": C,
        "nhsuk-table__code--inline": !C
      }),
      ...a ? { "data-language": a } : {}
    }, k = Fr(
      T,
      a,
      i
    );
    m = C ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...v,
        dangerouslySetInnerHTML: { __html: k }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...v, dangerouslySetInnerHTML: { __html: k } });
  } else m = e;
  const M = p;
  return /* @__PURE__ */ r.jsx(M, { className: x, ...g, children: m });
}, Dh = ({
  text: e,
  html: t,
  node: n,
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
  const x = !!p, g = x ? "th" : "td", m = ye(
    x ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${x ? "header" : "cell"}--${l}`,
    c
  ), M = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...x && { scope: "row" },
    ...h && { role: x ? "rowheader" : "cell" },
    ...f
  };
  let I;
  if (n != null) I = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) I = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (o != null) {
    const T = Array.isArray(o), C = T ? o.join(`
`) : o, v = T || C.includes(`
`), k = {
      className: ye("nhsuk-table__code", s, {
        "nhsuk-table__code--block": v,
        "nhsuk-table__code--inline": !v
      }),
      ...a ? { "data-language": a } : {}
    }, D = Fr(C, a, i);
    I = v ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...k, dangerouslySetInnerHTML: { __html: D } }) }) : /* @__PURE__ */ r.jsx("code", { ...k, dangerouslySetInnerHTML: { __html: D } });
  } else I = e;
  return /* @__PURE__ */ r.jsx(g, { className: m, ...M, children: I });
}, Qt = Mh;
Qt.Caption = Ih;
Qt.BodyRow = ml;
Qt.HeaderCell = gl;
Qt.Cell = Dh;
let Vs = !1, Zs = !1;
Object.defineProperty(Qt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Vs && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Vs = !0), ml;
  }
});
Object.defineProperty(Qt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Zs && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Zs = !0), gl;
  }
});
const Zy = Bn(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
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
  const p = n !== void 0, [x, g] = He(() => t || e[0]?.id || ""), m = p ? n : x, M = Ue(null), I = Ue(/* @__PURE__ */ new Map()), T = ge((y) => {
    p || g(y), o?.(y);
  }, [p, o]), C = ge((y) => {
    a?.(y), l && T(y);
  }, [a, l, T]), v = ge((y, A) => {
    const j = e.filter((N) => !N.disabled).map((N) => N.id), F = j.indexOf(A);
    let L = null;
    switch (y.key) {
      case "ArrowLeft":
        L = F > 0 ? F - 1 : j.length - 1;
        break;
      case "ArrowRight":
        L = F < j.length - 1 ? F + 1 : 0;
        break;
      case "Home":
        L = 0;
        break;
      case "End":
        L = j.length - 1;
        break;
      case "Escape":
        y.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (L !== null) {
      y.preventDefault();
      const N = j[L], _ = I.current.get(N);
      _ && (_.focus(), C(N));
    }
  }, [e, C, i]), k = ge((y, A) => {
    A ? I.current.set(y, A) : I.current.delete(y);
  }, []), D = ge((y) => {
    const A = I.current.get(y);
    A && A.focus();
  }, []);
  Li(h, () => ({
    focusTab: D,
    getActiveTab: () => m,
    getTabListElement: () => M.current
  }), [D, m]);
  const S = ge((y) => {
    const A = y.relatedTarget;
    M.current?.contains(A) || s?.();
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
            ref: M,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: S,
                children: e.map((y) => {
                  const A = y.id === m, j = y.disabled, F = ye("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": A,
                    "nhsuk-tabs__list-item--disabled": j
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: F, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (L) => k(y.id, L),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": A,
                      "aria-controls": `${y.id}-panel`,
                      id: `${y.id}-tab`,
                      tabIndex: A ? 0 : -1,
                      disabled: j,
                      onClick: () => !j && T(y.id),
                      onKeyDown: (L) => !j && v(L, y.id),
                      onFocus: () => !j && C(y.id),
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
          const A = y.id === m;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${y.id}-tab`,
              id: `${y.id}-panel`,
              hidden: !A,
              children: y.content
            },
            y.id
          );
        })
      ]
    }
  );
}), Th = Bn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
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
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let h;
    return l ? h = l : o ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: a,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Th.displayName = "Details";
const Lh = Bn(
  ({
    title: e,
    type: t,
    items: n,
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
    ), f = (p) => t === "cross" && !o ? `do not ${p}` : p, h = () => /* @__PURE__ */ r.jsx(
      Jt,
      {
        level: a,
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
Lh.displayName = "DoDontList";
const $h = Bn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
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
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let h;
    return l ? h = l : o ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: a,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
$h.displayName = "Expander";
const Ah = Bn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...o }, a) => {
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
        Eh,
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
        ref: a,
        className: s,
        ...o,
        children: e.map(i)
      }
    );
  }
), Eh = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: o,
  statusId: a,
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
      id: o,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ r.jsx("div", { id: o, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const d = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(et, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: d, id: a, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Ah.displayName = "TaskList";
const qy = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: o,
  children: a,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => a || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), d = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: d,
      ...i,
      children: [
        Ii(
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
}, Jy = ({
  src: e,
  alt: t,
  caption: n,
  sizes: o,
  srcset: a,
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
            ...o && a ? { sizes: o, srcSet: a } : {}
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
}, Ph = ({
  dateRange: e,
  onPrev: t,
  onNext: n,
  onToday: o,
  density: a,
  onDensityChange: s,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx(bt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(bt, { variant: "secondary", size: "small", onClick: o, "aria-label": "Jump to today", children: "Today" }),
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
      Cr,
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
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      Cr,
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
] }), Fh = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(et, { color: Rh(n.status), text: n.label }) }, n.status)) });
function Rh(e) {
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
const Xy = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
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
  onA11yModeChange: g
}) => {
  const [m, M] = He("grid"), I = i || m, [T, C] = He(o || []), v = n ?? T, k = Ee(() => {
    const L = /* @__PURE__ */ new Set();
    return e.forEach((N) => L.add(new Date(N.start).getTime())), Array.from(L).sort((N, _) => N - _);
  }, [e]), D = Ee(() => {
    const L = {};
    return e.forEach((N) => {
      const _ = new Date(N.start).getTime();
      L[_] || (L[_] = {});
      const E = N.capacity - N.booked - (N.held || 0);
      L[_][N.sessionId] = { slot: N, remaining: E };
    }), L;
  }, [e]), S = ge((L) => {
    if (s === "single") {
      const N = [L.id];
      n || C(N), a?.(N, { lastAction: "select" });
    } else {
      const N = v.includes(L.id), _ = N ? v.filter((E) => E !== L.id) : [...v, L.id];
      n || C(_), a?.(_, { lastAction: N ? "deselect" : "select" });
    }
  }, [s, v, n, a]), b = Ee(() => h || (p ? Array.from(new Set(e.map((N) => N.status))).map((N) => ({
    status: N,
    label: N.charAt(0).toUpperCase() + N.slice(1)
  })) : void 0), [h, p, e]), y = b ? /* @__PURE__ */ r.jsx(
    Fh,
    {
      items: b,
      orientation: x === "left" || x === "right" ? "vertical" : "horizontal"
    }
  ) : null, A = (L) => {
    i || M(L), g?.(L);
  }, j = u || (f ? /* @__PURE__ */ r.jsx(
    Ph,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: I,
      onA11yModeChange: A
    }
  ) : null), F = /* @__PURE__ */ r.jsx("div", { style: c, className: ye(l), children: /* @__PURE__ */ r.jsx(Qo, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsx(Jn, { width: gn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    j,
    x === "top" && y,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((L) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => S(L), "aria-pressed": v.includes(L.id), children: [
      Yn(new Date(L.start)),
      " – ",
      Yn(new Date(L.end)),
      " (",
      L.status,
      ")"
    ] }) }, L.id)) }),
    x === "bottom" && y
  ] }) }) }) }) });
  return I === "list" ? F : /* @__PURE__ */ r.jsx("div", { style: c, className: ye(l), children: /* @__PURE__ */ r.jsx(Qo, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsx(Jn, { width: gn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    j,
    x === "top" && y,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": k.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((L) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${L.specialty}`, className: "nhs-slot-matrix__session-header", children: L.specialty }, L.id))
      ] }),
      k.map((L) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Yn(new Date(L)), children: Yn(new Date(L)) }),
        t.map((N) => {
          const _ = D[L]?.[N.id];
          if (!_)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, N.id);
          const { slot: E, remaining: te } = _, U = v.includes(E.id), B = d ? d(E) : `Slot ${Yn(new Date(E.start))} ${E.status}${te === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": E.status,
              className: ye("nhs-slot-matrix__cell", U && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": U || void 0,
              onClick: () => S(E),
              children: te > 0 ? `${te} left` : "Full"
            },
            E.id
          );
        })
      ] }, L))
    ] }),
    x === "bottom" && y
  ] }) }) }) }) });
};
function qs(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Yn(e) {
  return `${qs(e.getHours())}:${qs(e.getMinutes())}`;
}
const Bh = ({
  title: e,
  value: t,
  subtitle: n,
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
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Jt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return a ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: a,
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
}, Ky = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const o = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: o, ...n, children: /* @__PURE__ */ r.jsx(Qo, { children: /* @__PURE__ */ r.jsx(on, { children: e.map((a, s) => /* @__PURE__ */ r.jsx(
    Jn,
    {
      width: gn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(Bh, { ...a })
    },
    s
  )) }) }) });
};
var wr = /* @__PURE__ */ ((e) => (e.String = "string", e.Number = "number", e.Boolean = "boolean", e.Date = "date", e.Custom = "custom", e))(wr || {}), Fn = /* @__PURE__ */ ((e) => (e.First = "first", e.Last = "last", e))(Fn || {}), Vn = /* @__PURE__ */ ((e) => (e.TrueFirst = "trueFirst", e.FalseFirst = "falseFirst", e))(Vn || {});
function Js(e) {
  if (e == null) return null;
  const n = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isNaN(n) ? null : n;
}
const Hh = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function zh(e, t) {
  return Hh.compare(String(e), String(t));
}
function Xs(e, t) {
  if (t.sortAccessor) return t.sortAccessor(e);
  if (t.useRendererForSort) {
    if (t.tableRenderer) return t.tableRenderer(e);
    if (t.render) return t.render(e);
  }
  return e[t.key];
}
function Oh(e, t, n, o) {
  if (n?.sortComparator)
    return n.sortComparator(e, t);
  const a = n?.sortType;
  if (a === wr.Number) {
    const s = Number(e), i = Number(t), l = Number.isNaN(s), c = Number.isNaN(i);
    return l && c ? 0 : l ? 1 : c ? -1 : s - i;
  }
  if (a === wr.Boolean) {
    const s = !!e, i = !!t, l = n?.booleanOrder ?? o?.booleanOrder ?? Vn.FalseFirst;
    return s === i ? 0 : l === Vn.TrueFirst ? s ? -1 : 1 : s ? 1 : -1;
  }
  if (a === wr.Date) {
    const s = Js(e), i = Js(t);
    return s == null && i == null ? 0 : s == null ? 1 : i == null ? -1 : s - i;
  }
  if (typeof e == "number" && typeof t == "number") {
    const s = Number.isNaN(e), i = Number.isNaN(t);
    return s && i ? 0 : s ? 1 : i ? -1 : e - t;
  }
  if (typeof e == "boolean" && typeof t == "boolean") {
    const s = n?.booleanOrder ?? o?.booleanOrder ?? Vn.FalseFirst;
    return e === t ? 0 : s === Vn.TrueFirst ? e ? -1 : 1 : e ? 1 : -1;
  }
  return zh(e, t);
}
function sa(e, t, n = Fn.Last, o) {
  const a = new Map(e.map((i) => [i.key, i])), s = t ?? [];
  return (i, l) => {
    if (!s.length) return 0;
    for (const { key: c, direction: d } of s) {
      const u = a.get(c), f = u ? Xs(i, u) : i[c], h = u ? Xs(l, u) : l[c], p = f == null, x = h == null;
      if (p || x) {
        if (p && x) continue;
        return (u?.nullsPosition ?? o?.nullsPosition ?? n) === Fn.First ? p ? -1 : 1 : p ? 1 : -1;
      }
      let g = Oh(f, h, u, o);
      if (g !== 0) return d === "asc" ? g : -g;
    }
    if (o?.stable) {
      const c = i.__originalIndex__ ?? i.originalIndex ?? void 0, d = l.__originalIndex__ ?? l.originalIndex ?? void 0;
      if (typeof c == "number" && typeof d == "number")
        return c - d;
    }
    return 0;
  };
}
const Uh = Qe.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
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
    striped: g = !1,
    responsive: m = !1,
    tableType: M = "default"
  }, I) => {
    const T = Ue(null), C = Ue(null), v = Ue(null);
    Qe.useImperativeHandle(I, () => T.current, []);
    const [k, D] = He(0), [S, b] = He(0), [y, A] = He("headers"), [j, F] = He("browse"), L = t.length, N = e.length, _ = Ee(() => {
      if (!n || n.length === 0) return e;
      const z = sa(t, n, Fn.Last, a);
      return [...e].sort(z);
    }, [e, n, t, a]), E = ge((z, X) => {
      setTimeout(() => {
        const R = T.current?.querySelector(
          `tbody tr:nth-child(${z + 1}) td:nth-child(${X + 1})`
        );
        R && (R.focus(), typeof R.scrollIntoView == "function" && R.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = ge((z) => {
      setTimeout(() => {
        const X = T.current?.querySelector(`th:nth-child(${z + 1})`);
        X && (X.focus(), typeof X.scrollIntoView == "function" && X.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), U = ge((z) => {
      o?.(z);
    }, [o]), B = ge((z) => {
      i?.(z);
    }, [i]), Q = ge((z) => {
      const { key: X } = z;
      switch (X) {
        case "Enter":
          if (z.preventDefault(), y === "headers" && j === "browse")
            F("navigate"), te(S);
          else if (y === "headers" && j === "navigate") {
            const R = t[S];
            R && U(R.key);
          } else y === "cells" && j === "browse" ? (F("navigate"), E(k, S)) : y === "cells" && j === "navigate" && B(k);
          break;
        case "Escape":
          z.preventDefault(), (y === "headers" && j === "navigate" || y === "cells" && j === "navigate") && F("browse");
          break;
        case "ArrowLeft":
          if (z.preventDefault(), j === "navigate" || j === "browse" && y === "headers") {
            if (y === "headers") {
              const R = Math.max(0, S - 1);
              b(R), te(R);
            } else if (y === "cells") {
              const R = Math.max(0, S - 1);
              b(R), E(k, R);
            }
          }
          break;
        case "ArrowRight":
          if (z.preventDefault(), j === "navigate" || j === "browse" && y === "headers") {
            if (y === "headers") {
              const R = Math.min(L - 1, S + 1);
              b(R), te(R);
            } else if (y === "cells") {
              const R = Math.min(L - 1, S + 1);
              b(R), E(k, R);
            }
          }
          break;
        case "ArrowUp":
          if (z.preventDefault(), y === "cells") {
            if (j === "browse") {
              const R = Math.max(0, k - 1);
              D(R), E(R, 0), b(0);
            } else if (j === "navigate")
              if (k > 0) {
                const R = k - 1;
                D(R), E(R, S);
              } else
                A("headers"), F("browse"), te(S);
          }
          break;
        case "ArrowDown":
          if (z.preventDefault(), y === "headers" && j === "browse")
            A("cells"), D(0), b(0), E(0, 0);
          else if (y === "cells") {
            const R = N - 1;
            if (j === "browse") {
              const re = Math.min(R, k + 1);
              D(re), E(re, 0), b(0);
            } else if (j === "navigate" && k < R) {
              const re = k + 1;
              D(re), E(re, S);
            }
          }
          break;
        case "Home":
          z.preventDefault(), y === "headers" ? (b(0), te(0)) : y === "cells" && (z.ctrlKey ? (D(0), b(0), E(0, 0)) : (b(0), E(k, 0)));
          break;
        case "End":
          if (z.preventDefault(), y === "headers") {
            const R = L - 1;
            b(R), te(R);
          } else if (y === "cells")
            if (z.ctrlKey) {
              const R = N - 1, re = L - 1;
              D(R), b(re), E(R, re);
            } else {
              const R = L - 1;
              b(R), E(k, R);
            }
          break;
        case " ":
          if (z.preventDefault(), y === "headers" && j === "navigate") {
            const R = t[S];
            R && U(R.key);
          } else y === "cells" && j === "navigate" && B(k);
          break;
      }
    }, [
      y,
      j,
      S,
      k,
      L,
      N,
      t,
      E,
      te,
      U,
      B
    ]);
    Xe(() => {
      const z = T.current;
      if (z)
        return z.addEventListener("keydown", Q), () => z.removeEventListener("keydown", Q);
    }, [Q]);
    const O = ye(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": g,
        "nhsuk-table--compact": M === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: T,
        className: O,
        id: l,
        "data-testid": c,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": u,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: C, role: "row", children: t.map((z, X) => {
            const R = n?.find((ee) => ee.key === z.key), re = !!R, q = y === "headers" && S === X;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ye("sortable-header", {
                  "sortable-header--focused": q
                }),
                role: "columnheader",
                tabIndex: q ? 0 : -1,
                onClick: () => U(z.key),
                onKeyDown: (ee) => {
                  (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), U(z.key));
                },
                "aria-sort": re ? R?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: z.label }),
                  re && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ee) => ee.key === z.key) + 1 }),
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
              z.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: v, className: "nhsuk-table__body", role: "rowgroup", children: _.map((z, X) => {
            const R = s === X, re = y === "cells" && k === X;
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
                  const K = q.tableRenderer ? q.tableRenderer(z) : q.render ? q.render(z) : z[q.key], oe = y === "cells" && k === X && S === ee, de = () => typeof K == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: K ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: K ? "Yes" : "No" })
                  ] }) : String(K ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ye("data-cell", {
                        "data-cell--focused": oe
                      }),
                      tabIndex: oe ? 0 : -1,
                      onClick: () => B(X),
                      children: de()
                    },
                    q.key
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
Uh.displayName = "AriaDataGrid";
const xl = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: o = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = Ue(null), h = Ue(null), p = Ue(null), x = ge((b, y) => {
    c || (h.current = y, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", y));
  }, [c]), g = ge((b, y) => {
    c || h.current === y || (b.preventDefault(), b.dataTransfer.dropEffect = "move", p.current = y);
  }, [c]), m = ge((b, y) => {
    if (c) return;
    b.preventDefault();
    const A = h.current;
    if (!A || A === y) return;
    const j = e.findIndex((L) => L.key === A), F = e.findIndex((L) => L.key === y);
    if (j !== -1 && F !== -1) {
      const L = [...e], [N] = L.splice(j, 1);
      L.splice(F, 0, N), n(L);
    }
    h.current = null, p.current = null;
  }, [c, e, n]), M = ge(() => {
    h.current = null, p.current = null;
  }, []), I = ge((b) => {
    const y = t.find((A) => A.key === b);
    return y ? y.label : b;
  }, [t]), T = ge((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), C = ge((b) => {
    if (c) return;
    const y = e.map(
      (A) => A.key === b ? { ...A, direction: A.direction === "asc" ? "desc" : "asc" } : A
    );
    n(y);
  }, [e, n, c]), v = ge((b) => {
    if (c) return;
    const y = e.filter((A) => A.key !== b);
    n(y);
  }, [e, n, c]), k = ge(() => {
    c || n([]);
  }, [n, c]), D = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const b = e.map((y, A) => {
      const j = y.direction === "asc" ? "ascending" : "descending";
      return `${A + 1}. ${I(y.key)} (${j})`;
    });
    if (b.length === 1)
      return `Sorted by: ${b[0]}`;
    if (b.length === 2)
      return `Sorted by: ${b.join(" and ")}`;
    {
      const y = b.pop();
      return `Sorted by: ${b.join(", ")}, and ${y}`;
    }
  }, S = Ee(() => {
    const b = ["sort-description"];
    return l && b.push("sort-help"), u && b.push(u), b.join(" ");
  }, [l, u]);
  return e.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${o}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: a
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${o}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: D()
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
          "aria-describedby": S,
          children: e.map((b, y) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (A) => x(A, b.key),
              onDragOver: (A) => g(A, b.key),
              onDrop: (A) => m(A, b.key),
              onDragEnd: M,
              onClick: () => C(b.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ r.jsx(
                et,
                {
                  color: T(y),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(b.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${y + 1}`, children: y + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: I(b.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (A) => {
                          A.stopPropagation(), C(b.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${I(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
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
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        bt,
        {
          variant: "secondary",
          onClick: k,
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
function Wh(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const n = [...e.tabLoadingStates];
      return n[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: n };
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
const ia = Bn(function(t, n) {
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
    loadingComponent: g,
    error: m = null,
    errorComponent: M,
    "data-testid": I,
    actions: T,
    actionsMinGap: C = 16,
    forceActionsAbove: v = !1
  } = t, D = Ue(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, S = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), b = `${D}-description`, y = `${D}-navigation-help`, {
    dataComparator: A = ($, H) => JSON.stringify($) === JSON.stringify(H),
    filterFunction: j = ($) => $,
    booleanRenderer: F = ($) => $ ? "✓" : "✗"
  } = o || {}, L = s !== void 0, N = s ?? 0, [_, E] = He({
    focusArea: "tabs",
    focusedTabIndex: N,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), te = Ee(() => ({
    selectedIndex: N,
    tabLoadingStates: new Array(a.length).fill(!1),
    tabErrors: new Array(a.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(a.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [N]), [U, B] = $i(Wh, te);
  Xe(() => {
    const $ = U.tabLoadingStates.length, H = a.length;
    $ !== H && B({ type: "ADJUST_ARRAYS", payload: { newLength: H } });
  }, [a.length]), Xe(() => {
    L && B({ type: "SET_SELECTED_INDEX", payload: N });
  }, [N, L]), Xe(() => {
    E(($) => ({
      ...$,
      focusArea: "tabs",
      focusedTabIndex: U.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [U.selectedIndex]), Xe(() => {
    l && l(U.globalSelectedRowData);
  }, [U.globalSelectedRowData, l]);
  const Q = ge(
    ($, H) => A($, H),
    [A]
  ), O = ge(
    ($) => {
      $ >= 0 && $ < a.length && !a[$].disabled && (B({ type: "SET_SELECTED_INDEX", payload: $ }), E((H) => ({
        ...H,
        focusedTabIndex: $,
        focusArea: "tabs"
      })), i?.($));
    },
    [a, i]
  ), z = Ue(!1), X = ge(
    ($, H) => {
      if (!H?.force && !z.current && $ === 0) {
        z.current = !0;
        return;
      }
      z.current = !0, setTimeout(() => {
        const W = R.current[$], J = W?.parentElement;
        if (W && J) {
          const ne = W.offsetLeft, ae = W.offsetWidth, ue = J.clientWidth, he = ne - ue / 2 + ae / 2;
          try {
            J.scrollTo({
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
          tabListElementExists: !!J
        });
      }, 50);
    },
    []
  ), R = Ue([]), re = Ue([]), q = ge(
    ($, H) => {
      const W = U.sortConfig || [], J = W.find(
        (ue) => ue.key === H
      );
      let ne;
      J ? J.direction === "asc" ? ne = W.map(
        (ue) => ue.key === H ? { ...ue, direction: "desc" } : ue
      ) : ne = W.filter(
        (ue) => ue.key !== H
      ) : ne = [...W, { key: H, direction: "asc" }], B({
        type: "SET_SORT",
        payload: ne
      }), a[$].onSort?.(H);
    },
    [U.sortConfig, a]
  ), ee = ge(
    ($) => {
      setTimeout(() => {
        const H = document.querySelector(
          `[data-tab-panel="${U.selectedIndex}"] th:nth-child(${$ + 1})`
        );
        H && H.focus();
      }, 0);
    },
    [U.selectedIndex]
  ), K = ge(
    ($) => F($),
    [F]
  ), oe = ge(
    ($, H) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${U.selectedIndex}"] tbody tr:nth-child(${$ + 1}) td:nth-child(${H + 1})`
        );
        W && W.focus();
      }, 0);
    },
    [U.selectedIndex]
  );
  Xe(() => {
    _.isGridActive && (_.focusArea === "headers" ? setTimeout(() => {
      ee(_.focusedHeaderIndex);
    }, 0) : _.focusArea === "cells" && setTimeout(() => {
      oe(
        _.focusedRowIndex,
        _.focusedColumnIndex
      );
    }, 0));
  }, [
    _.focusArea,
    _.isGridActive,
    _.focusedHeaderIndex,
    _.focusedRowIndex,
    _.focusedColumnIndex,
    ee,
    oe
  ]), Xe(() => {
    X(U.selectedIndex);
  }, [U.selectedIndex, X]);
  const de = ge(
    ($, H) => {
      const { key: W } = $, J = a[U.selectedIndex], ne = J?.columns.length || 0;
      switch (W) {
        case "ArrowLeft":
          $.preventDefault();
          const ae = Math.max(0, H - 1);
          E((ve) => ({
            ...ve,
            focusedHeaderIndex: ae
          })), ee(ae);
          break;
        case "ArrowRight":
          $.preventDefault();
          const ue = Math.min(ne - 1, H + 1);
          E((ve) => ({
            ...ve,
            focusedHeaderIndex: ue
          })), ee(ue);
          break;
        case "ArrowUp":
          $.preventDefault(), E((ve) => ({
            ...ve,
            focusArea: "tabs",
            focusedTabIndex: U.selectedIndex
          })), X(U.selectedIndex), R.current[U.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          $.preventDefault(), E((ve) => ({
            ...ve,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: H,
            isGridActive: !0
          }));
          break;
        case "Home":
          $.preventDefault(), E((ve) => ({ ...ve, focusedHeaderIndex: 0 })), ee(0);
          break;
        case "End":
          $.preventDefault();
          const he = ne - 1;
          E((ve) => ({
            ...ve,
            focusedHeaderIndex: he
          })), ee(he);
          break;
        case "Enter":
        case " ":
          $.preventDefault();
          const me = J?.columns[H]?.key;
          me && q(U.selectedIndex, me);
          break;
      }
    },
    [
      a,
      U.selectedIndex,
      q,
      E,
      ee,
      oe,
      R
    ]
  ), V = ge(
    ($, H, W) => {
      const { key: J } = $, ne = a[U.selectedIndex], ae = ne?.data.length || 0, ue = ne?.columns.length || 0;
      switch (J) {
        case "ArrowUp":
          if ($.preventDefault(), H === 0)
            E((Se) => ({
              ...Se,
              focusArea: "headers",
              focusedHeaderIndex: W,
              isGridActive: !1
            })), ee(W);
          else {
            const Se = H - 1;
            E((qe) => ({
              ...qe,
              focusedRowIndex: Se
            })), oe(Se, W);
          }
          break;
        case "ArrowDown":
          $.preventDefault();
          const he = Math.min(ae - 1, H + 1);
          E((Se) => ({
            ...Se,
            focusedRowIndex: he
          })), oe(he, W);
          break;
        case "ArrowLeft":
          $.preventDefault();
          const me = Math.max(0, W - 1);
          E((Se) => ({
            ...Se,
            focusedColumnIndex: me
          })), oe(H, me);
          break;
        case "ArrowRight":
          $.preventDefault();
          const ve = Math.min(ue - 1, W + 1);
          E((Se) => ({
            ...Se,
            focusedColumnIndex: ve
          })), oe(H, ve);
          break;
        case "Home":
          $.preventDefault(), $.ctrlKey ? (E((Se) => ({
            ...Se,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), oe(0, 0)) : (E((Se) => ({ ...Se, focusedColumnIndex: 0 })), oe(H, 0));
          break;
        case "End":
          if ($.preventDefault(), $.ctrlKey) {
            const Se = ae - 1, qe = ue - 1;
            E((Be) => ({
              ...Be,
              focusedRowIndex: Se,
              focusedColumnIndex: qe
            })), oe(Se, qe);
          } else {
            const Se = ue - 1;
            E((qe) => ({
              ...qe,
              focusedColumnIndex: Se
            })), oe(H, Se);
          }
          break;
        case "Enter":
        case " ":
          if ($.preventDefault(), ne && ne.data[H]) {
            const Se = ne.data.some(
              (ot) => "ews_data" in ot
            ) ? j(ne.data, U.filters) : ne.data, qe = U.sortConfig;
            let Be = Se;
            if (qe && qe.length > 0) {
              const ot = sa(ne.columns, qe, Fn.Last, o?.sortingOptions);
              Be = [...Se].sort(ot);
            }
            if (Be[H]) {
              const ot = Be[H], le = U.globalSelectedRowData && Q(U.globalSelectedRowData, ot) ? null : ot;
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
      a,
      U.selectedIndex,
      U.filters,
      U.sortConfig,
      j,
      Q,
      B,
      E,
      ee,
      oe
    ]
  ), ie = ge(
    ($, H) => j($, H),
    [j]
  );
  if (Li(
    n,
    () => ({
      selectTab: ($) => {
        $ >= 0 && $ < a.length && (B({ type: "SET_SELECTED_INDEX", payload: $ }), i?.($));
      },
      refreshData: ($) => {
        console.log("Refreshing data for tab:", $ ?? "all");
      },
      exportData: ($) => {
        const H = $ ?? U.selectedIndex, W = a[H];
        return W ? W.data : [];
      },
      getSelectedRows: ($) => U.globalSelectedRowData ? [] : [],
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
    [U.selectedIndex, U.selectedRows, a, i]
  ), x)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": I,
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
        "data-testid": I,
        children: M || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: m })
        ] })
      }
    );
  const se = Ue(null), fe = Ue(null), ce = Ue(null), [pe, $e] = He(!0);
  Xe(() => {
    if (!T) {
      $e(!1);
      return;
    }
    if (v) {
      $e(!1);
      return;
    }
    function $() {
      if (!se.current || !fe.current || !ce.current) return;
      const J = se.current.clientWidth, ne = Array.from(
        fe.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ae = ne.reduce((ve, Se) => ve + Se.offsetWidth, 0), ue = ce.current.offsetWidth, he = Math.max(8 * (ne.length - 1), 0), me = ae + he + ue + C <= J;
      $e(me);
    }
    const H = requestAnimationFrame(() => $()), W = new ResizeObserver(() => $());
    return se.current && W.observe(se.current), fe.current && W.observe(fe.current), () => {
      cancelAnimationFrame(H), W.disconnect();
    };
  }, [T, C, v, a.length]);
  const Ie = ce, Ce = ge(() => Ie.current ? Array.from(
    Ie.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(($) => !$.hasAttribute("disabled")) : [], []), Y = ge(
    ($) => {
      const H = Ce();
      if (!H.length) return;
      const W = Math.max(0, Math.min($, H.length - 1));
      H[W].focus(), E((J) => ({ ...J, focusArea: "actions", focusedActionIndex: W }));
    },
    [Ce]
  ), w = ge(() => Y(0), [Y]), P = ge(
    ($, H) => {
      const { key: W } = $, J = a.length - 1;
      switch (W) {
        case "ArrowUp": {
          T && !pe && ($.preventDefault(), w());
          break;
        }
        case "ArrowLeft": {
          $.preventDefault();
          const ne = H > 0 ? H - 1 : J;
          O(ne), X(ne), R.current[ne]?.focus();
          break;
        }
        case "ArrowRight": {
          if ($.preventDefault(), H === J && T && pe) {
            w();
            return;
          }
          const ne = H < J ? H + 1 : 0;
          O(ne), X(ne), R.current[ne]?.focus();
          break;
        }
        case "ArrowDown": {
          $.preventDefault(), E((ne) => ({
            ...ne,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          $.preventDefault(), O(0), X(0), R.current[0]?.focus();
          break;
        }
        case "End": {
          $.preventDefault(), O(J), X(J), R.current[J]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          $.preventDefault(), O(H);
          break;
        }
        case "Tab": {
          !$.shiftKey && H === J && T && pe && w();
          break;
        }
      }
    },
    [a.length, O, X, T, pe, w]
  ), G = ge(($) => {
    const { key: H } = $, W = Ce();
    if (!W.length) return;
    const J = W.findIndex((ne) => ne === document.activeElement);
    switch (H) {
      case "ArrowLeft": {
        if (pe)
          if (J > 0)
            $.preventDefault(), Y(J - 1);
          else {
            $.preventDefault();
            const ne = a.length - 1;
            O(ne), X(ne), R.current[ne]?.focus(), E((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: ne }));
          }
        break;
      }
      case "ArrowRight": {
        pe && (J < W.length - 1 ? ($.preventDefault(), Y(J + 1)) : ($.preventDefault(), O(0), X(0), R.current[0]?.focus(), E((ne) => ({ ...ne, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (pe)
          $.preventDefault(), E((ne) => ({ ...ne, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          $.preventDefault();
          const ne = U.selectedIndex;
          R.current[ne]?.focus(), E((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: ne }));
        }
        break;
      }
    }
  }, [Ce, pe, Y, a.length, O, X, U.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": I,
      ref: se,
      children: [
        d && !S && /* @__PURE__ */ r.jsx("div", { id: b, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: y,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          xl,
          {
            sortConfig: U.sortConfig || [],
            columns: a.flatMap(
              ($) => $.columns.map((H) => ({ key: H.key, label: H.label }))
            ).filter(
              ($, H, W) => W.findIndex((J) => J.key === $.key) === H
              // Remove duplicates
            ),
            onSortChange: ($) => {
              B({ type: "SET_SORT", payload: $ });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        T && !pe && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: ce,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: G,
            children: T
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${pe ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? S ? d : b : y,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: fe,
              children: a.map(($, H) => {
                const W = H === U.selectedIndex, J = $.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${$.id}`,
                    "aria-controls": `panel-${$.id}`,
                    "aria-selected": W,
                    "aria-disabled": J,
                    tabIndex: W ? 0 : -1,
                    ref: (ne) => {
                      R.current[H] = ne;
                    },
                    onClick: () => O(H),
                    onKeyDown: (ne) => P(ne, H),
                    disabled: J,
                    className: [
                      "aria-tabs-datagrid__tab",
                      W ? "aria-tabs-datagrid__tab--selected" : "",
                      J ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: $.label }),
                      U.tabLoadingStates[H] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      U.tabErrors[H] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  $.id
                );
              })
            }
          ),
          T && pe && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: ce,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: G,
              children: T
            }
          )
        ] }),
        a.map(($, H) => {
          const W = H === U.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${$.id}`,
              "aria-labelledby": `tab-${$.id}`,
              tabIndex: 0,
              hidden: !W,
              ref: (J) => {
                re.current[H] = J;
              },
              className: `aria-tabs-datagrid__panel ${$.className || ""}`,
              "data-tab-panel": H,
              children: W && (() => {
                const J = $.data.some(
                  (ae) => "ews_data" in ae
                ) ? ie($.data, U.filters) : $.data, ne = Ee(() => {
                  const ae = U.sortConfig;
                  if (!ae || ae.length === 0) return J;
                  const ue = sa($.columns, ae, Fn.Last, o?.sortingOptions);
                  return [...J].sort(ue);
                }, [J, U.sortConfig, $.columns, o?.sortingOptions]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": $.ariaLabel,
                    "aria-describedby": $.ariaDescription ? `panel-${$.id}-description` : void 0,
                    children: [
                      $.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${$.id}-description`,
                          children: $.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: $.columns.map((ae, ue) => {
                        const he = U.sortConfig?.find(
                          (Se) => Se.key === ae.key
                        ), me = !!he, ve = _.focusArea === "headers" && _.focusedHeaderIndex === ue;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${ve ? "sortable-header--focused" : ""} ${me ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: ve ? 0 : -1,
                            onClick: () => q(H, ae.key),
                            onKeyDown: (Se) => de(Se, ue),
                            "aria-sort": me ? he?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: ae.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${me ? `sort-indicator--${he?.direction}` : ""}`,
                                  children: [
                                    U.sortConfig && U.sortConfig.length > 0 && U.sortConfig.findIndex(
                                      (Se) => Se.key === ae.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${U.sortConfig.findIndex((Se) => Se.key === ae.key) + 1}`,
                                        "data-priority": U.sortConfig.findIndex(
                                          (Se) => Se.key === ae.key
                                        ) + 1,
                                        title: `Sort priority: ${U.sortConfig.findIndex((Se) => Se.key === ae.key) + 1}`,
                                        children: U.sortConfig.findIndex(
                                          (Se) => Se.key === ae.key
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
                          ae.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: ne.map((ae, ue) => {
                        const he = U.globalSelectedRowData && Q(U.globalSelectedRowData, ae), me = _.focusArea === "cells" && _.focusedRowIndex === ue;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${he ? "data-row--selected" : ""} ${me ? "data-row--focused" : ""}`,
                            "aria-selected": he,
                            children: $.columns.map((ve, Se) => {
                              const qe = ae[ve.key];
                              let Be;
                              ve.tableRenderer ? Be = ve.tableRenderer(ae) : ve.render ? Be = ve.render(ae) : Be = qe;
                              const ot = _.focusArea === "cells" && _.focusedRowIndex === ue && _.focusedColumnIndex === Se, ft = () => {
                                if (ve.customRenderer) {
                                  const le = ve.customRenderer(
                                    qe,
                                    ae
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
                                return typeof qe == "boolean" && Be === qe ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  K(qe),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: qe ? "Yes" : "No" })
                                ] }) : Qe.isValidElement(Be) || typeof Be != "object" ? Be ?? "" : Be;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${ot ? "data-cell--focused" : ""}`,
                                  tabIndex: ot ? 0 : -1,
                                  onClick: () => {
                                    const Ne = U.globalSelectedRowData && Q(
                                      U.globalSelectedRowData,
                                      ae
                                    ) ? null : ae;
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
            $.id
          );
        })
      ]
    }
  );
}), br = {
  asc: "↑",
  desc: "↓"
}, Gh = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Uo(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Yh(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Vh(e, t) {
  const n = t.find((o) => o.id === e);
  return n ? n.priority > 0 : !1;
}
function Zh(e, t) {
  const n = t.find((a) => a.id === e), o = Yh(t);
  return n ? n.priority < o : !1;
}
const Qy = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: a,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = Ee(() => Gh(e), [e]), f = ge((I) => {
    if (l) return;
    const T = e.map(
      (C) => C.id === I ? { ...C, direction: C.direction === "asc" ? "desc" : "asc" } : C
    );
    t(T);
  }, [e, t, l]), h = ge((I) => {
    if (l) return;
    const T = e.findIndex((v) => v.id === I);
    if (T <= 0) return;
    const C = [...e];
    [C[T], C[T - 1]] = [C[T - 1], C[T]], t(Uo(C));
  }, [e, t, l]), p = ge((I) => {
    if (l) return;
    const T = e.findIndex((v) => v.id === I);
    if (T >= e.length - 1 || T === -1) return;
    const C = [...e];
    [C[T], C[T + 1]] = [C[T + 1], C[T]], t(Uo(C));
  }, [e, t, l]), x = ge((I) => {
    if (l) return;
    const T = e.filter((C) => C.id !== I);
    t(Uo(T));
  }, [e, t, l]), g = ge(() => {
    l || t([]);
  }, [t, l]), m = () => {
    if (e.length === 0)
      return o;
    if (a)
      return a;
    const I = u.map((T, C) => {
      const v = T.direction === "asc" ? "ascending" : "descending";
      return `${C + 1}. ${T.label} (${v})`;
    });
    if (I.length === 1)
      return `Sorted by: ${I[0]}`;
    if (I.length === 2)
      return `Sorted by: ${I.join(" and ")}`;
    {
      const T = I.pop();
      return `Sorted by: ${I.join(", ")}, and ${T}`;
    }
  }, M = Ee(() => {
    const I = ["sort-description"];
    return i && I.push("sort-help"), d && I.push(d), I.join(" ");
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
        "aria-describedby": M,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((I) => /* @__PURE__ */ r.jsx(
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
                        children: I.direction === "asc" ? br.asc : br.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(I.id),
                          disabled: l || !Vh(I.id, e),
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
                          disabled: l || !Zh(I.id, e),
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
      br.asc,
      "/",
      br.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, es = (e, t) => t.map((n) => ({
  id: n.id,
  label: n.label,
  data: n.filter ? n.filter(e) : e,
  columns: n.columns.map((o) => ({
    key: o.key,
    label: o.label,
    render: o.render,
    customRenderer: o.customRenderer
  })),
  sortConfig: n.sortConfig,
  ariaLabel: n.ariaLabel || `${n.label} Data Grid`,
  ariaDescription: n.ariaDescription || `Data grid showing ${n.label.toLowerCase()}`,
  className: n.className,
  disabled: n.disabled
})), la = [
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
], qh = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Jh = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [o, a] = t.ewsScoreRange;
    if (n.ews_score < o || n.ews_score > a) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Xh = (e) => {
  if (typeof e == "boolean") {
    const n = la.find((o) => o.value === e);
    return n ? n.icon : null;
  }
  const t = la.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Kh = (e) => `${e.name}-${e.bed_name}`, Qh = () => ({
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
}), e1 = (e) => {
  const t = Qh();
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
}, ep = {
  dataComparator: qh,
  filterFunction: Jh,
  booleanRenderer: Xh,
  getDataId: Kh
};
function Ks(e, t, n) {
  const {
    primaryField: o,
    secondaryFields: a = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((T) => T.key === o), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[o || "name"] || "Untitled", p = () => a.filter((C) => !i.includes(C) && e[C]).slice(0, 3).map((C) => {
    const v = t.find((b) => b.key === C), k = e[C], D = d[C] ? d[C](k, e) : v?.cardRenderer ? v.cardRenderer(e) : v?.render ? v.render(e) : k;
    return `${v?.label || C}: ${D}`;
  }).join(" • "), x = () => s.length === 0 ? null : s.filter((T) => e[T.fieldKey] !== void 0).map((T) => {
    const C = e[T.fieldKey], v = T.render ? T.render(C, e) : C;
    return `<span class="nhsuk-tag ${tp(T, C)}">${v}</span>`;
  }).join(""), g = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", m = x(), M = p(), I = m ? `${M}${m ? `<div class="adaptive-card__badges">${m}</div>` : ""}` : M;
  return {
    variant: g(),
    heading: String(h),
    descriptionHtml: I,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${h}`
  };
}
function tp(e, t) {
  const n = e.className || "adaptive-card__badge";
  if (e.fieldKey === "ews_score" || e.fieldKey.includes("score")) {
    const o = Number(t);
    return o >= 7 ? `${n} nhsuk-tag--red` : o >= 3 ? `${n} nhsuk-tag--yellow` : `${n} nhsuk-tag--green`;
  }
  if (e.fieldKey === "priority") {
    const o = String(t).toLowerCase();
    if (o === "high") return `${n} nhsuk-tag--red`;
    if (o === "medium") return `${n} nhsuk-tag--yellow`;
    if (o === "low") return `${n} nhsuk-tag--green`;
  }
  if (e.fieldKey === "status") {
    const o = String(t).toLowerCase();
    if (o === "urgent" || o === "critical") return `${n} nhsuk-tag--red`;
    if (o === "pending" || o === "warning") return `${n} nhsuk-tag--yellow`;
    if (o === "completed" || o === "success") return `${n} nhsuk-tag--green`;
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
const np = {
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
}, bl = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: o,
  priority: a = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${a} healthcare-card--${s}`,
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
              color: op(Sl(u)),
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
                p.stopPropagation(), o?.("view-notes", e);
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
                p.stopPropagation(), o?.("view-vitals", e);
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
                p.stopPropagation(), o?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, yl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        et,
        {
          color: ap(e.status || "active"),
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
] }), vl = ({
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
] }), wl = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: o = "medium"
}) => {
  const a = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${o}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${a}, EWS Score ${s}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: a }),
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${rp(s)}`, children: [
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
function Sl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function rp(e) {
  return Sl(e);
}
function op(e) {
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
function ap(e) {
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
const sp = [
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
], _l = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", ip = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, lp = (e) => _l(e) === "high" || e.status === "urgent" ? "primary" : "default", cp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, dp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: sp,
  hiddenFields: [],
  getPriority: _l,
  getStatus: ip,
  getVariant: lp,
  fieldRenderers: cp,
  classPrefix: "adaptive-card--healthcare"
}, up = {
  patient: (e, t, n) => {
    const o = n.getPriority?.(e) || "medium", a = n.getStatus?.(e) || "active", s = a === "urgent" ? "active" : a;
    return /* @__PURE__ */ r.jsx(
      bl,
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
  appointment: (e, t, n) => {
    const o = n.getStatus?.(e) || "pending", a = o === "urgent" ? "pending" : o;
    return /* @__PURE__ */ r.jsx(
      yl,
      {
        data: e,
        columns: t,
        status: a,
        onSelect: (s) => console.log("Appointment selected:", s),
        onAction: (s, i) => console.log("Appointment action:", s, i)
      }
    );
  },
  medication: (e, t, n) => {
    const o = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      vl,
      {
        data: e,
        columns: t,
        priority: o,
        onSelect: (a) => console.log("Medication selected:", a),
        onAction: (a, s) => console.log("Medication action:", a, s)
      }
    );
  },
  vitals: (e, t, n) => {
    const o = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      wl,
      {
        data: e,
        columns: t,
        priority: o,
        onSelect: (a) => console.log("Vitals selected:", a),
        onAction: (a, s) => console.log("Vitals action:", a, s)
      }
    );
  }
}, fp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Qs = {
  name: "healthcare",
  defaultCardConfig: dp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: up,
  fieldTypes: fp
};
function ei(e) {
  return {
    primaryField: e?.primaryField || "name",
    secondaryFields: e?.secondaryFields || [],
    badges: e?.badgeFields?.map((t) => ({
      fieldKey: t,
      className: "adaptive-card__badge"
    })) || [],
    hiddenFields: e?.hiddenFields || [],
    cardTemplate: e?.cardTemplate ? (t, n, o) => e.cardTemplate(t, n) : void 0,
    classPrefix: "adaptive-card--generic"
  };
}
function ti(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function hp(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const n = [...e.tabLoadingStates];
      return n[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: n };
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
function pp(e, t) {
  const [n, o] = He("cards");
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
  }, [e, t]), n;
}
function mp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function gp(e, t, n, o) {
  const a = o ? { ...o.defaultCardConfig, ...n } : { ...np, ...n };
  if (o && o.cardTemplates) {
    const s = mp(e);
    if (s && o.cardTemplates[s]) {
      const i = o.cardTemplates[s](e, t, a);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return a.cardTemplate && a.cardTemplate(e, t, a), Ks(e, t, a);
}
const t1 = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: o = {},
  enableAdvancedSorting: a = !1,
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
  disabled: M = !1,
  className: I,
  ...T
}) => {
  const C = pp(e, t), v = f !== void 0, k = f ?? 0, D = Ee(() => {
    if (d.some(
      (w) => w.data && w.data.length > 0 && ti(w.data)
    )) {
      const w = ei(n);
      return {
        ...Qs.defaultCardConfig,
        ...w
      };
    } else
      return ei(n);
  }, [n, d]), S = Ee(() => d.some(
    (w) => w.data && w.data.length > 0 && ti(w.data)
  ) ? Qs : void 0, [d]), b = Ee(() => ({
    selectedIndex: k,
    tabLoadingStates: new Array(d.length).fill(!1),
    tabErrors: new Array(d.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(d.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [k, d.length]), [y, A] = $i(hp, b), j = Ue([]), F = Ue([]), L = Ue([]), N = Ue(null), [_, E] = He({
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
    const w = Y.current, P = w.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (P.length === 0)
      return { columns: 1, rows: 0 };
    const G = w.offsetWidth, H = P[0].offsetWidth, W = Math.floor(G / H) || 1, J = Math.ceil(P.length / W);
    return { columns: W, rows: J };
  }, []), U = ge((Y, w) => ({
    row: Math.floor(Y / w),
    col: Y % w
  }), []), B = ge((Y, w, P) => Y * P + w, []), Q = ge((Y, w, P, G) => {
    const { row: $, col: H } = U(Y, G);
    let W = $, J = H;
    switch (w) {
      case "up":
        W = Math.max(0, $ - 1);
        break;
      case "down":
        W = Math.min(Math.floor((P - 1) / G), $ + 1);
        break;
      case "left":
        J = Math.max(0, H - 1);
        break;
      case "right":
        J = Math.min(G - 1, H + 1);
        break;
    }
    const ne = B(W, J, G);
    return Math.min(ne, P - 1);
  }, [U, B]);
  Xe(() => {
    _.isCardNavigationActive && _.focusedCardElementIndex >= 0 && _.cardElements.length > 0 && setTimeout(() => {
      const Y = _.cardElements[_.focusedCardElementIndex];
      Y && (Y.element.focus(), Y.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [_.isCardNavigationActive, _.focusedCardElementIndex, _.cardElements.length]), Xe(() => {
    const Y = () => {
      if (C === "cards" && N.current) {
        const { columns: G, rows: $ } = te(N);
        E((H) => ({
          ...H,
          gridColumns: G,
          gridRows: $
        }));
      }
    }, w = setTimeout(Y, 200), P = () => {
      setTimeout(Y, 100);
    };
    return window.addEventListener("resize", P), () => {
      clearTimeout(w), window.removeEventListener("resize", P);
    };
  }, [C, d, te]), Xe(() => {
    const Y = y.tabLoadingStates.length, w = d.length;
    Y !== w && A({ type: "ADJUST_ARRAYS", payload: { newLength: w } });
  }, [d.length, y.tabLoadingStates.length]), Xe(() => {
    v && f !== y.selectedIndex && A({ type: "SET_SELECTED_INDEX", payload: f });
  }, [v, f, y.selectedIndex]);
  const O = ge((Y) => {
    Y >= 0 && Y < d.length && !d[Y].disabled && (A({ type: "SET_SELECTED_INDEX", payload: Y }), h?.(Y));
  }, [d, h]), z = ge((Y) => {
    console.log("Card selected:", Y), A({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: Y
    });
  }, []), X = ge((Y) => {
    const w = F.current[Y];
    w && (w.focus(), w.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), R = ge((Y) => {
    const w = F.current[Y];
    if (!w) return [];
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
    ].join(", "), G = w.querySelectorAll(P);
    return Array.from(G).map(($, H) => ({
      id: $.id || `card-${Y}-element-${H}`,
      element: $,
      label: $.getAttribute("aria-label") || $.textContent?.trim() || $.getAttribute("title") || `Element ${H + 1}`,
      type: $.tagName.toLowerCase() === "button" ? "button" : $.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes($.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), re = Ue(null), q = ge((Y) => {
    const w = re.current;
    if (!w) return;
    const P = document.createElement("div");
    P.setAttribute("aria-live", "polite"), P.setAttribute("aria-atomic", "true"), P.className = "sr-only", P.textContent = Y, w.appendChild(P), setTimeout(() => {
      w.contains(P) && w.removeChild(P);
    }, 1e3);
  }, []), ee = ge((Y) => {
    const w = Y.filter((G) => G.sortable !== !1), P = [
      { value: "", label: "Sort by..." }
    ];
    return w.forEach((G) => {
      const $ = G.label || G.key;
      G.key === "name" ? P.push(
        { value: `${G.key}-asc`, label: `${$} (A-Z)` },
        { value: `${G.key}-desc`, label: `${$} (Z-A)` }
      ) : G.key === "ews_score" || G.key.includes("score") ? P.push(
        { value: `${G.key}-desc`, label: `${$} (High-Low)` },
        { value: `${G.key}-asc`, label: `${$} (Low-High)` }
      ) : G.key === "age" || G.key.includes("date") || G.key.includes("time") ? P.push(
        { value: `${G.key}-desc`, label: `${$} (Oldest-Youngest)` },
        { value: `${G.key}-asc`, label: `${$} (Youngest-Oldest)` }
      ) : P.push(
        { value: `${G.key}-asc`, label: `${$} (A-Z)` },
        { value: `${G.key}-desc`, label: `${$} (Z-A)` }
      );
    }), P;
  }, []), K = ge((Y, w) => w ? [...Y].sort((P, G) => {
    const $ = P[w.key], H = G[w.key];
    if ($ == null && H == null) return 0;
    if ($ == null) return 1;
    if (H == null) return -1;
    const W = Number($), J = Number(H);
    if (!isNaN(W) && !isNaN(J))
      return w.direction === "asc" ? W - J : J - W;
    const ne = String($).toLowerCase(), ae = String(H).toLowerCase(), ue = ne.localeCompare(ae);
    return w.direction === "asc" ? ue : -ue;
  }) : Y, []), oe = ge((Y) => {
    if (!Y) {
      E((ne) => ({ ...ne, cardSortConfig: null })), q("Card sorting cleared");
      return;
    }
    const [w, P] = Y.split("-"), G = { key: w, direction: P };
    E((ne) => ({ ...ne, cardSortConfig: G }));
    const W = d[y.selectedIndex]?.columns.find((ne) => ne.key === w)?.label || w;
    q(`Cards sorted by ${W} in ${P === "asc" ? "ascending" : "descending"} order`);
  }, [d, y.selectedIndex, q]), de = ge((Y) => {
    const G = d[y.selectedIndex]?.columns.find((H) => H.key === Y.key)?.label || Y.key, $ = Y.direction === "asc" ? "ascending" : "descending";
    return `${G} (${$})`;
  }, [d, y.selectedIndex]), V = ge((Y) => {
    const w = d[y.selectedIndex];
    if (a) {
      const P = y.sortConfig;
      return !P || P.length === 0 ? Y : [...Y].sort((G, $) => {
        for (const { key: H, direction: W } of P) {
          let J = G[H], ne = $[H];
          const ae = w?.columns.find((qe) => qe.key === H);
          if (ae?.cardRenderer ? (J = ae.cardRenderer(G), ne = ae.cardRenderer($)) : ae?.render && (J = ae.render(G), ne = ae.render($)), J == null && ne == null) continue;
          if (J == null) return W === "asc" ? -1 : 1;
          if (ne == null) return W === "asc" ? 1 : -1;
          const ue = Number(J), he = Number(ne);
          if (!isNaN(ue) && !isNaN(he)) {
            const qe = ue - he;
            if (qe !== 0) return W === "asc" ? qe : -qe;
            continue;
          }
          const me = String(J).toLowerCase(), ve = String(ne).toLowerCase(), Se = me.localeCompare(ve);
          if (Se !== 0) return W === "asc" ? Se : -Se;
        }
        return 0;
      });
    } else
      return K(Y, _.cardSortConfig);
  }, [a, y.sortConfig, _.cardSortConfig, K, d, y.selectedIndex]), ie = ge((Y, w) => {
    const P = R(Y), G = P[w];
    if (G) {
      G.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const $ = `Focused on ${G.label}, ${G.type} ${w + 1} of ${P.length} within card`;
      q($);
    }
  }, [R, q]), se = ge((Y) => {
    j.current[Y]?.focus();
  }, []), fe = ge(() => {
    const Y = L.current[0];
    if (!Y) return [];
    const w = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), P = Y.querySelectorAll(w);
    return Array.from(P);
  }, []), ce = ge((Y) => {
    if (Y === 0) {
      const w = L.current[0], P = w?.querySelector(".sort-controls-row");
      if (P) {
        P.setAttribute("tabindex", "-1"), P.focus();
        const $ = `Sort controls group with ${fe().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        q($);
      } else w && w.focus();
    } else {
      const w = fe(), P = Y - 1, G = w[P];
      if (G) {
        G.focus();
        const $ = G.tagName.toLowerCase() === "select", H = G.tagName.toLowerCase() === "button", W = $ ? "dropdown" : H ? "button" : "control", J = $ ? ". Use Space key to open dropdown" : "", ne = `${W} ${P + 1} of ${w.length}${J}`;
        q(ne);
      }
    }
  }, [fe, q]), pe = ge((Y, w) => {
    const { key: P } = Y, G = d[y.selectedIndex], $ = G?.data.length || 0;
    if (P === "ArrowLeft" && Y.shiftKey) {
      Y.preventDefault(), Y.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (P === "ArrowRight" && Y.shiftKey) {
      Y.preventDefault(), Y.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!_.isCardNavigationActive) {
      switch (P) {
        case "ArrowUp":
          if (Y.preventDefault(), w === 0)
            E((ne) => ({ ...ne, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), ce(0);
          else {
            const ne = Q(w, "up", $, _.gridColumns);
            ne !== w && (E((ae) => ({ ...ae, focusedCardIndex: ne })), X(ne), q(`Moved to card ${ne + 1} of ${$}`));
          }
          break;
        case "ArrowDown":
          Y.preventDefault();
          const H = Q(w, "down", $, _.gridColumns);
          H !== w && (E((ne) => ({ ...ne, focusedCardIndex: H })), X(H), q(`Moved to card ${H + 1} of ${$}`));
          break;
        case "ArrowLeft":
          Y.preventDefault();
          const W = Q(w, "left", $, _.gridColumns);
          W !== w ? (E((ne) => ({ ...ne, focusedCardIndex: W })), X(W), q(`Moved to card ${W + 1} of ${$}`)) : y.selectedIndex > 0 && (A({ type: "SET_SELECTED_INDEX", payload: y.selectedIndex - 1 }), E((ne) => ({ ...ne, focusArea: "tabs" })), setTimeout(() => se(y.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          Y.preventDefault();
          const J = Q(w, "right", $, _.gridColumns);
          J !== w ? (E((ne) => ({ ...ne, focusedCardIndex: J })), X(J), q(`Moved to card ${J + 1} of ${$}`)) : y.selectedIndex < d.length - 1 && (A({ type: "SET_SELECTED_INDEX", payload: y.selectedIndex + 1 }), E((ne) => ({ ...ne, focusArea: "tabs" })), setTimeout(() => se(y.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (G?.data[w]) {
            Y.preventDefault(), E((ae) => ({
              ...ae,
              selectedCardIndex: w
            }));
            const ne = R(w);
            ne.length > 0 ? (E((ae) => ({
              ...ae,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: ne,
              selectedCardIndex: w
              // Ensure selection is maintained
            })), q(`Card ${w + 1} selected and navigation activated. ${ne.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : q(`Card ${w + 1} selected.`);
          }
          break;
        case " ":
          if (G?.data[w]) {
            Y.preventDefault(), E((ae) => ({
              ...ae,
              selectedCardIndex: ae.selectedCardIndex === w ? -1 : w
            }));
            const ne = _.selectedCardIndex === w;
            q(`Card ${w + 1} ${ne ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (P) {
      case "ArrowUp":
      case "ArrowLeft":
        Y.preventDefault();
        const H = Math.max(0, _.focusedCardElementIndex - 1);
        E((ae) => ({ ...ae, focusedCardElementIndex: H })), ie(w, H);
        break;
      case "ArrowDown":
      case "ArrowRight":
        Y.preventDefault();
        const W = Math.min(_.cardElements.length - 1, _.focusedCardElementIndex + 1);
        E((ae) => ({ ...ae, focusedCardElementIndex: W })), ie(w, W);
        break;
      case "Enter":
        Y.preventDefault();
        const J = _.cardElements[_.focusedCardElementIndex];
        J && (J.element.click(), q(`Activated ${J.label}`));
        break;
      case " ":
        Y.preventDefault();
        const ne = _.cardElements[_.focusedCardElementIndex];
        if (ne) {
          const ae = new MouseEvent("dblclick", { bubbles: !0 });
          ne.element.dispatchEvent(ae), q(`Double-clicked ${ne.label}`);
        }
        break;
      case "Escape":
        Y.preventDefault(), E((ae) => ({
          ...ae,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => X(w), 0), q("Exited card navigation, returned to card level");
        break;
      case "Home":
        Y.preventDefault(), _.cardElements.length > 0 && (E((ae) => ({ ...ae, focusedCardElementIndex: 0 })), ie(w, 0));
        break;
      case "End":
        if (Y.preventDefault(), _.cardElements.length > 0) {
          const ae = _.cardElements.length - 1;
          E((ue) => ({ ...ue, focusedCardElementIndex: ae })), ie(w, ae);
        }
        break;
    }
  }, [_, y.selectedIndex, d, z, X, se, E, R, ie, q]), $e = ge((Y) => {
    const w = j.current[Y], P = w?.parentElement;
    if (!w || !P) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const G = w.getBoundingClientRect(), $ = P.getBoundingClientRect();
    G.left >= $.left && G.right <= $.right || (console.log("Tab not visible, scrolling into view (mobile)"), w.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Ie = ge((Y, w) => {
    if (C !== "cards")
      return;
    const { key: P } = Y;
    switch (P) {
      case "ArrowLeft":
        Y.preventDefault();
        const G = w > 0 ? w - 1 : d.length - 1;
        O(G), E((J) => ({ ...J, focusedTabIndex: G })), j.current[G]?.focus(), $e(G);
        break;
      case "ArrowRight":
        Y.preventDefault();
        const $ = w < d.length - 1 ? w + 1 : 0;
        O($), E((J) => ({ ...J, focusedTabIndex: $ })), j.current[$]?.focus(), $e($);
        break;
      case "ArrowDown":
        Y.preventDefault();
        const H = d[y.selectedIndex];
        H && H.columns && H.columns.length > 0 ? (E((J) => ({
          ...J,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), ce(0)) : (E((J) => ({
          ...J,
          focusArea: "cards",
          focusedCardIndex: 0
        })), X(0));
        break;
      case "Home":
        Y.preventDefault(), O(0), E((J) => ({ ...J, focusedTabIndex: 0 })), j.current[0]?.focus(), $e(0);
        break;
      case "End":
        Y.preventDefault();
        const W = d.length - 1;
        O(W), E((J) => ({ ...J, focusedTabIndex: W })), j.current[W]?.focus(), $e(W);
        break;
      case "Enter":
      case " ":
        Y.preventDefault(), O(w);
        break;
    }
  }, [d.length, O, C, X, E, $e]), Ce = ge((Y, w) => {
    if (C !== "cards")
      return;
    const { key: P } = Y, G = d[y.selectedIndex];
    if (w === 0 && !_.isSortControlsActive) {
      switch (P) {
        case "ArrowUp":
          Y.preventDefault(), E((H) => ({
            ...H,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), se(y.selectedIndex);
          break;
        case "ArrowDown":
          Y.preventDefault(), G?.data && G.data.length > 0 && (E((H) => ({
            ...H,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), X(0));
          break;
        case "Enter":
        case " ":
          Y.preventDefault();
          const $ = fe();
          if ($.length > 0) {
            E((W) => ({
              ...W,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), ce(1);
            const H = `Entered sort controls navigation mode. ${$.length} controls available. Use arrow keys to navigate between controls.`;
            q(H);
          }
          break;
        case "Escape":
          Y.preventDefault(), E((H) => ({
            ...H,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), se(y.selectedIndex);
          break;
      }
      return;
    }
    if (_.isSortControlsActive) {
      const H = fe().length;
      switch (P) {
        case "ArrowLeft":
          Y.preventDefault();
          const W = _.focusedSortControlIndex > 1 ? _.focusedSortControlIndex - 1 : H;
          E((ne) => ({ ...ne, focusedSortControlIndex: W })), ce(W);
          break;
        case "ArrowRight":
          Y.preventDefault();
          const J = _.focusedSortControlIndex < H ? _.focusedSortControlIndex + 1 : 1;
          E((ne) => ({ ...ne, focusedSortControlIndex: J })), ce(J);
          break;
        case "ArrowDown":
          if (Y.preventDefault(), _.isSortControlsActive) {
            const ne = _.focusedSortControlIndex < H ? _.focusedSortControlIndex + 1 : 1;
            E((ae) => ({ ...ae, focusedSortControlIndex: ne })), ce(ne);
          } else
            G?.data && G.data.length > 0 && (E((ne) => ({
              ...ne,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), X(0));
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
  }, [C, d, y.selectedIndex, _.isSortControlsActive, _.focusedSortControlIndex, ce, se, X, E, q]);
  if (C === "cards") {
    const Y = d[y.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${I || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": p,
            "aria-describedby": `${x || ""} ${m ? `${m}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: d.map((w, P) => {
              const G = P === y.selectedIndex, $ = w.disabled || M;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${w.id}`,
                  "aria-controls": `panel-${w.id}`,
                  "aria-selected": G,
                  "aria-disabled": $,
                  tabIndex: G ? 0 : -1,
                  ref: (H) => {
                    j.current[P] = H;
                  },
                  onClick: () => O(P),
                  onKeyDown: (H) => Ie(H, P),
                  disabled: $,
                  className: [
                    "aria-tabs-datagrid__tab",
                    G ? "aria-tabs-datagrid__tab--selected" : "",
                    $ ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: w.label }),
                    y.tabLoadingStates[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    y.tabErrors[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                w.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      Y && Y.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: a ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          xl,
          {
            sortConfig: y.sortConfig || [],
            columns: Y.columns.map((w) => ({ key: w.key, label: w.label })),
            onSortChange: (w) => {
              A({ type: "SET_SORT", payload: w });
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
            tabIndex: _.focusArea === "sort-controls" ? 0 : -1,
            ref: (w) => {
              L.current[0] = w;
            },
            onKeyDown: (w) => Ce(w, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${Y.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  Cr,
                  {
                    id: `card-sort-${Y.id}`,
                    name: `card-sort-${Y.id}`,
                    value: _.cardSortConfig ? `${_.cardSortConfig.key}-${_.cardSortConfig.direction}` : "",
                    onChange: (w) => oe(w.target.value),
                    className: "sort-select",
                    children: ee(Y.columns).map((w) => /* @__PURE__ */ r.jsx("option", { value: w.value, children: w.label }, w.value))
                  }
                )
              ] }),
              _.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  de(_.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  bt,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => oe(""),
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
          ref: N,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${Y?.label || "Data"} cards in ${_.gridRows} rows and ${_.gridColumns} columns`,
          "aria-rowcount": _.gridRows,
          "aria-colcount": _.gridColumns,
          id: `panel-${Y?.id}`,
          "aria-labelledby": `tab-${Y?.id}`,
          children: V(Y?.data || []).map((w, P) => {
            const G = _.selectedCardIndex === P, $ = _.focusedCardIndex === P && _.focusArea === "cards", H = _.focusedCardIndex === P && _.focusArea === "card" && _.isCardNavigationActive, W = P === 0 && _.focusArea !== "cards", J = $ || W, ne = U(P, _.gridColumns);
            if (n.cardTemplate) {
              const he = n.cardTemplate(w, Y.columns);
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
                        $ ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        H ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": ne.col + 1,
                      "aria-selected": G,
                      "aria-expanded": H,
                      "aria-description": H ? `Card navigation active. ${_.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: J ? 0 : -1,
                      onClick: () => {
                        E((me) => ({
                          ...me,
                          selectedCardIndex: me.selectedCardIndex === P ? -1 : P
                        })), z(w);
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
            const ae = gp(w, Y.columns, D, S), ue = [
              ae.className || "",
              G ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              $ ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              H ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
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
                      $ ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      H ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": ne.col + 1,
                    "aria-selected": G,
                    "aria-expanded": H,
                    onKeyDown: (he) => {
                      he.key === "Enter" && (he.preventDefault(), E((me) => ({
                        ...me,
                        selectedCardIndex: P
                      }))), pe(he, P);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      pl,
                      {
                        ...ae,
                        ref: (he) => {
                          F.current[P] = he;
                        },
                        className: ue,
                        "aria-label": `${ae["aria-label"] || ae.heading}. ${H ? `Card navigation active with ${_.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: J ? 0 : -1,
                        onClick: () => {
                          E((he) => ({
                            ...he,
                            selectedCardIndex: he.selectedCardIndex === P ? -1 : P
                          })), z(w);
                        },
                        onKeyDown: (he) => pe(he, P),
                        onFocus: () => {
                          _.isCardNavigationActive || E((he) => he.focusedCardIndex !== P || he.focusArea !== "cards" ? {
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
  return C === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${I || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ia,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: x,
        orientation: g,
        id: m,
        disabled: M,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: c,
        ...T
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${I || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ia,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: x,
        orientation: g,
        id: m,
        disabled: M,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: c,
        ...T
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, kl = (e) => {
  const t = la.find((n) => n.value === e);
  return t ? t.icon : null;
}, xp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [o, a] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < o || s > a) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((o) => n.tags.includes(o)));
  }) : e,
  booleanRenderer: (e) => kl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, bp = (e) => es(e, [
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
    filter: (n) => n.filter((o) => o.discountedPrice !== void 0),
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
    filter: (n) => n.filter((o) => o.rating >= 4),
    sortConfig: [{ key: "rating", direction: "desc" }],
    ariaLabel: "Top Rated Products Grid",
    ariaDescription: "Highest rated products with 4+ star ratings"
  }
]), yp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.dateRange) {
      const [o, a] = t.dateRange;
      if (n.date < o || n.date > a) return !1;
    }
    if (t.amountRange) {
      const [o, a] = t.amountRange;
      if (Math.abs(n.amount) < o || Math.abs(n.amount) > a) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(n.type) || t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.pending !== void 0 && n.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => kl(e),
  getDataId: (e) => `financial-${e.id}`
}, vp = (e) => es(e, [
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
    filter: (n) => n.filter((o) => o.type === "credit"),
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
    filter: (n) => n.filter((o) => o.type === "debit"),
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
    filter: (n) => n.filter((o) => o.pending),
    ariaLabel: "Pending Transactions Grid",
    ariaDescription: "Transactions awaiting processing"
  }
]), wp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: xp,
    createTabs: bp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: yp,
    createTabs: vp
  }
}, ni = (e, t) => {
  const n = wp[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, Cl = [
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
], Sp = [
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
], _p = [
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
], kp = [
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
], ri = [
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
], ai = [
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
], Cp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Np = () => [
  {
    id: "patients",
    label: "Patients",
    data: Cl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      bl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected patient:", n),
        onAction: (n, o) => console.log("Patient action:", n, o),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  },
  {
    id: "appointments",
    label: "Appointments",
    data: Sp,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      yl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected appointment:", n),
        onAction: (n, o) => console.log("Appointment action:", n, o),
        status: e.status
      }
    )
  },
  {
    id: "medications",
    label: "Medications",
    data: _p,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      vl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected medication:", n),
        onAction: (n, o) => console.log("Medication action:", n, o),
        priority: e.priority
      }
    )
  },
  {
    id: "vitals",
    label: "Vital Signs",
    data: kp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      wl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, o) => console.log("Vitals action:", n, o),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], jp = () => {
  const [e, t] = He("healthcare"), n = Ee(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: ep,
      tabPanels: Np(),
      data: Cl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...ni("ecommerce", ri),
      data: ri
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ni("financial", oi),
      data: oi
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Cp,
      tabPanels: es(ai, [
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
      data: ai
    }
  }), []), o = n[e];
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
      }, children: Object.keys(n).map((a) => /* @__PURE__ */ r.jsx(
        bt,
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
        }, children: o.title }),
        /* @__PURE__ */ r.jsx("p", { style: {
          color: "#64748b",
          marginBottom: "1rem"
        }, children: o.description }),
        /* @__PURE__ */ r.jsxs("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          fontSize: "0.9rem"
        }, children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Data Records:" }),
            " ",
            o.data.length
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Tab Panels:" }),
            " ",
            o.tabPanels.length
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
      ia,
      {
        dataConfig: o.dataConfig,
        tabPanels: o.tabPanels,
        ariaLabel: `${o.title} Data Grid`,
        ariaDescription: `Interactive data grid for ${o.description.toLowerCase()}`
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
}, n1 = jp, Nl = (e) => /* @__PURE__ */ r.jsx(Hi, { ...e }), r1 = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: o = gn.TwoThirds,
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
    /* @__PURE__ */ r.jsx(hl, { ...s }),
    /* @__PURE__ */ r.jsx(Yi, { ...m }),
    /* @__PURE__ */ r.jsx(Nl, { className: x, ...g, children: /* @__PURE__ */ r.jsx(zi, { size: a, children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsxs(Jn, { width: o, children: [
      t && /* @__PURE__ */ r.jsx(Jt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Vi, { ...l })
  ] });
}, o1 = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: o = gn.TwoThirds,
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
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(hl, { ...s }),
    /* @__PURE__ */ r.jsx(Yi, { ...x }),
    /* @__PURE__ */ r.jsxs(Nl, { className: h, ...p, children: [
      c && /* @__PURE__ */ r.jsx(qn, { ...c }),
      /* @__PURE__ */ r.jsx(zi, { size: a, children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsxs(Jn, { width: o, children: [
        t && /* @__PURE__ */ r.jsx(Jt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Vi, { ...l })
  ] });
};
function Mp(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: o = "nsvDrill" } = e, [a, s] = Z.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = Z.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(o) === "1");
  return Z.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    a ? c.set(n, String(a)) : c.delete(n), c.set(o, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [a, i, t, n, o]), { selectedId: a, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Ip = ({
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
), Dp = ({
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
), Rr = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: o,
  element: a = "a",
  onClick: s,
  ...i
}) => {
  const l = ye("nhsuk-back-link", o), c = ye("nhsuk-back-link__link"), d = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: a === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: s, ...i, children: d() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...i, children: d() }) });
};
Rr.displayName = "ForwardLink";
const Tp = ({
  show: e,
  label: t,
  contentHeaderLevel: n,
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
  const p = `h${n}`, x = t ? Z.createElement(
    p,
    {
      style: {
        marginLeft: o ? 32 : 0,
        marginRight: o ? 32 : 0
      }
    },
    t
  ) : null, g = o ? /* @__PURE__ */ r.jsx(
    qn,
    {
      element: "button",
      text: s,
      style: { marginRight: 16 },
      onClick: l
    }
  ) : void 0, m = h ? void 0 : /* @__PURE__ */ r.jsx(Rr, { element: "button", text: i, onClick: c });
  if (d)
    return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: d({
      item: u,
      detailActive: o,
      context: a,
      backLink: g,
      defaultHeading: x
    }) });
  const M = u && f ? typeof f == "function" ? f(u) : f : null;
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
                M && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: M })
              ]
            }
          )
        ]
      }
    ),
    m && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: m })
  ] }) });
};
function Lp({
  layout: e,
  items: t,
  getId: n,
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
  controlledFocusedIndex: g
}) {
  const [m, M] = Z.useState(
    () => d === "first" ? 0 : -1
  ), I = Z.useRef(0);
  Z.useEffect(() => {
    if (typeof g == "number" || m < 0 || !h?.current) return;
    const D = Array.from(
      h.current.querySelectorAll("[data-nav-item]")
    )[m];
    if (D) {
      document.activeElement !== D && D.focus(), I.current = m;
      const S = t[m];
      u?.(S ? n(S) : void 0, S, m);
    }
  }, [g, m, t, u, n, h]);
  const T = (k) => {
    if (p) return p(k);
    const D = c === "vertical" ? "ArrowDown" : "ArrowRight", S = c === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (k.key === D)
      k.preventDefault(), M((b) => Math.min(t.length - 1, b + 1));
    else if (k.key === S)
      k.preventDefault(), M((b) => Math.max(0, b - 1));
    else if (k.key === "Home")
      k.preventDefault(), M(0);
    else if (k.key === "End")
      k.preventDefault(), M(t.length - 1);
    else if (k.key === "Enter" || k.key === " ") {
      k.preventDefault();
      const b = t[m];
      b && !b.disabled && l(n(b), b, m);
    }
  };
  if (e === "cards")
    return /* @__PURE__ */ r.jsxs(
      "ul",
      {
        className: "nhs-navigation-split-view__cards",
        role: "listbox",
        "aria-activedescendant": o ? String(o) : void 0,
        children: [
          t.map((k, D) => {
            const S = n(k), b = S === o;
            return /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": b,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    id: String(S),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": b || void 0,
                    "data-disabled": k.disabled || void 0,
                    disabled: k.disabled,
                    onClick: () => !k.disabled && l(S, k, D),
                    children: [
                      k.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: k.icon }),
                      /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: k.label }),
                      k.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: k.description }),
                      i?.(k),
                      k.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: k.badge })
                    ]
                  }
                )
              },
              String(S)
            );
          }),
          t.length === 0 && !a && /* @__PURE__ */ r.jsx(
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
  const C = "nsv-nav-instructions", v = Z.useMemo(() => Z.memo(
    ({
      item: k,
      idx: D,
      selected: S,
      focused: b
    }) => {
      const y = n(k), A = k.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: b ? 0 : -1,
        onClick: () => {
          I.current = D, l(y, k, D);
        },
        onKeyDown: (j) => {
          (j.key === "Enter" || j.key === " ") && (j.preventDefault(), I.current = D, l(y, k, D));
        }
      };
      return /* @__PURE__ */ r.jsxs(
        "li",
        {
          id: String(y),
          "data-nav-item": !0,
          className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
          role: "option",
          "aria-selected": S,
          "aria-current": S ? "true" : void 0,
          "data-selected": S || void 0,
          "data-disabled": k.disabled || void 0,
          ...A,
          children: [
            k.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: k.icon }),
            /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: k.label }),
              k.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: k.description }),
              i?.(k)
            ] }),
            k.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: k.badge })
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
        onKeyDown: T,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": C,
        "aria-activedescendant": o ? String(o) : void 0,
        children: [
          t.map((k, D) => /* @__PURE__ */ r.jsx(
            v,
            {
              item: k,
              idx: D,
              selected: n(k) === o,
              focused: /* @__PURE__ */ (() => {
                const S = typeof g == "number" ? g : m;
                return D === S || S === -1 && D === 0 && d === "first";
              })(),
              "data-just-selected": n(k) === f ? "true" : void 0
            },
            String(n(k))
          )),
          t.length === 0 && !a && /* @__PURE__ */ r.jsx(
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
const kn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function si() {
  return typeof window > "u" ? kn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function ts() {
  const [e, t] = Z.useState(si());
  Z.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(si());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = Z.useCallback((s) => e >= kn[s], [e]), o = Z.useCallback((s) => e < kn[s], [e]), a = Z.useCallback((s, i) => e >= kn[s] && e < kn[i], [e]);
  return {
    width: e,
    up: n,
    down: o,
    between: a,
    /** Raw numeric values */
    values: kn
  };
}
function a1(e) {
  const { width: t, values: n } = ts();
  let o = e.base;
  const a = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of a) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (o = e[s]);
  }
  return o;
}
function $p(e, t, n) {
  const { up: o } = ts(), [a, s] = Z.useState(!1);
  Z.useEffect(() => s(!0), []);
  const i = a && o("medium"), l = a && o("xlarge");
  let c;
  return e ? c = e : i ? c = "two-column" : c = "list", !e && t && n && l && (c = "three-column"), { effectiveLayout: c, hydrated: a, isAtLeastMedium: i, isAtLeastXlarge: l };
}
function Ap(e) {
  const {
    enabled: t,
    isAtLeastMedium: n,
    initiallyCollapsed: o,
    persist: a,
    storageKey: s,
    urlParam: i,
    onChange: l
  } = e, c = Z.useMemo(() => {
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
  }, [a, o, s, i]), [d, u] = Z.useState(c);
  Z.useEffect(() => {
    l?.(d);
  }, [d, l]);
  const f = Z.useCallback(() => {
    t && n && u((h) => !h);
  }, [t, n]);
  return Z.useEffect(() => {
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
function Ep(e) {
  const {
    items: t,
    selectedId: n,
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
    className: g,
    getId: m = (xe) => xe.id,
    orientation: M = "vertical",
    autoEnableThirdColumn: I = !0,
    onDrillChange: T,
    navigationInstructions: C = "Use arrow keys to navigate, Enter to open.",
    initialFocus: v = "first",
    skipFocusOnSelect: k = !1,
    skipAnnouncements: D = !1,
    onFocusChange: S,
    syncUrl: b = !1,
    urlParamSelected: y = "nsv",
    urlParamDrill: A = "nsvDrill",
    urlSyncDebounceMs: j = 0,
    lazySecondary: F = !1,
    navFooter: L,
    collapsibleNav: N = !1,
    navInitiallyCollapsed: _ = !1,
    onNavCollapseChange: E,
    collapseToggleLabelShow: te = "Show navigation",
    collapseToggleLabelHide: U = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: Q,
    persistNavCollapsed: O,
    navCollapsedStorageKey: z = "nsvCollapsed",
    navCollapsedUrlParam: X = "nsvCollapsed",
    autoContentHeader: R,
    contentHeaderLevel: re = 2,
    renderContentHeader: q,
    contentSubheader: ee,
    secondarySubheader: K
  } = e, { effectiveLayout: oe, hydrated: de, isAtLeastMedium: V } = $p(
    c,
    I,
    !!l
  ), ie = Mp({
    enabled: b,
    paramSelected: y,
    paramDrill: A
  }), [se, fe] = Z.useState(
    () => ie.selectedId !== void 0 ? ie.selectedId : o
  ), ce = n !== void 0 ? n : se, pe = t.find((xe) => m(xe) === ce), [$e, Ie] = Z.useState(
    void 0
  );
  Z.useEffect(() => {
    if (ce === void 0) return;
    Ie(ce);
    const xe = setTimeout(() => Ie(void 0), 220);
    return () => clearTimeout(xe);
  }, [ce]);
  const Ce = Z.useRef(null), Y = Z.useRef(null), w = Z.useRef(null), P = Z.useRef(null), [G, $] = Z.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [H, W] = Z.useState(() => "nav"), [J, ne] = Z.useState(0), ae = () => [
    P.current,
    Y.current,
    w.current
  ].filter(Boolean), ue = (xe) => {
    const Le = ae(), ze = Math.max(0, Math.min(xe, Le.length - 1));
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
      }, 10), $((at) => ({ ...at, contentIndex: ze }));
      const vt = (at) => {
        at.key === "Escape" && (at.preventDefault(), at.stopPropagation(), me(Y.current), Je.removeEventListener("keydown", vt));
      };
      Le.forEach((at) => {
        const ct = at._escapeHandler;
        ct && at.removeEventListener("keydown", ct);
      }), Je._escapeHandler = vt, Je.addEventListener("keydown", vt);
    },
    [he]
  ), Se = Z.useCallback(
    (xe) => {
      const Le = he(w.current);
      if (!Le.length) {
        me(w.current);
        return;
      }
      const ze = Math.max(0, Math.min(xe, Le.length - 1)), Je = Le[ze];
      Je.focus(), setTimeout(() => {
        document.activeElement !== Je && (Je.focus(), setTimeout(() => {
          document.activeElement !== Je && Je.click();
        }, 10));
      }, 10), $((at) => ({ ...at, secondaryIndex: ze }));
      const vt = (at) => {
        at.key === "Escape" && (at.preventDefault(), at.stopPropagation(), me(w.current), Je.removeEventListener("keydown", vt));
      };
      Le.forEach((at) => {
        const ct = at._escapeHandler;
        ct && at.removeEventListener("keydown", ct);
      }), Je._escapeHandler = vt, Je.addEventListener("keydown", vt);
    },
    [he]
  ), qe = (xe) => {
    if (xe.defaultPrevented) return;
    const Le = xe.key, ze = xe.target, Je = !!we.current && we.current.contains(ze), vt = !!Y.current && Y.current.contains(ze), at = !!w.current && w.current.contains(ze), ct = !!w.current, fr = ze === P.current || ze === Y.current || ze === w.current, To = Be && (oe === "list" || oe === "cards"), hr = vt && !!ze.closest(".nhs-navigation-split-view__header");
    if (H === "containers" && fr) {
      if (Le === "ArrowRight") {
        xe.preventDefault();
        const Ve = ae(), st = Math.min(Ve.length - 1, J + 1);
        ue(st);
        return;
      }
      if (Le === "ArrowLeft") {
        xe.preventDefault();
        const Ve = Math.max(0, J - 1);
        ue(Ve);
        return;
      }
      if (Le === "Home") {
        xe.preventDefault(), ue(0);
        return;
      }
      if (Le === "End") {
        xe.preventDefault(), ue(ae().length - 1);
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
        } else ze === Y.current ? (W("content"), ve(G.contentIndex)) : ze === w.current && (W("secondary"), Se(G.secondaryIndex));
        return;
      }
      return;
    }
    if (Le === "Escape") {
      if (H === "content" || H === "secondary") {
        if (vt || at) {
          if (xe.preventDefault(), W("nav"), we.current) {
            const st = Array.from(
              we.current.querySelectorAll("[data-nav-item]")
            )[Ze >= 0 ? Ze : 0];
            setTimeout(() => st?.focus(), 10);
          }
        } else if ((ze === Y.current || ze === w.current) && (xe.preventDefault(), W("nav"), we.current)) {
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
      if (ze === Y.current && H === "content") {
        xe.preventDefault(), xe.stopPropagation(), he(Y.current).length > 0 && setTimeout(() => {
          ve(G.contentIndex);
        }, 50);
        return;
      }
      if (ze === w.current && H === "secondary") {
        xe.preventDefault(), xe.stopPropagation(), he(
          w.current
        ).length > 0 && setTimeout(() => {
          Se(G.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (To && hr && !fr && (Le === "ArrowRight" || Le === "ArrowLeft")) {
      const Ve = he(Y.current).filter(
        (st) => st.closest(".nhs-navigation-split-view__header")
      );
      if (Ve.length > 1) {
        const st = Ve.indexOf(ze);
        if (st >= 0) {
          const us = (st + (Le === "ArrowRight" ? 1 : -1) + Ve.length) % Ve.length;
          xe.preventDefault(), Ve[us].focus();
          return;
        }
      }
    }
    if (Le === "ArrowRight") {
      if (Je || H === "nav") {
        xe.preventDefault(), W("content"), setTimeout(() => me(Y.current), 10);
        return;
      }
      if (vt || H === "content") {
        ct && (xe.preventDefault(), W("secondary"), setTimeout(() => me(w.current), 10));
        return;
      }
    }
    if (Le === "ArrowLeft") {
      if (at || H === "secondary") {
        xe.preventDefault(), W("content"), setTimeout(() => me(Y.current), 10);
        return;
      }
      if (vt || H === "content") {
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
      const Ve = ct ? w.current : Y.current;
      Ve && !Ve.contains(ze) && (xe.preventDefault(), ct ? (W("secondary"), setTimeout(() => me(w.current), 10)) : (W("content"), setTimeout(() => me(Y.current), 10)));
    }
    if (Le === "ArrowDown" || Le === "ArrowUp") {
      if (ze === Y.current && Le === "ArrowDown") {
        xe.preventDefault(), he(Y.current).length > 0 && ve(0);
        return;
      }
      if (ze === w.current && Le === "ArrowDown") {
        xe.preventDefault(), he(
          w.current
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
      } else if (at) {
        const Ve = he(w.current);
        if (Ve.length) {
          xe.preventDefault();
          const st = Le === "ArrowDown" ? 1 : -1, Lt = (G.secondaryIndex + st + Ve.length) % Ve.length;
          Se(Lt);
        }
      }
    }
  }, Be = !!pe && (oe === "list" || oe === "cards"), ot = Z.useMemo(() => R === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : R === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : R === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: R.mobile !== void 0 ? R.mobile : !0,
    tablet: R.tablet || !1,
    desktop: R.desktop || !1
  }, [R]), ft = de && V && oe !== "three-column", le = de && oe === "three-column", Ne = !!l, be = oe === "three-column", [_e, Ge] = Z.useState(!1);
  Z.useEffect(() => {
    be && _e && Ge(!1);
  }, [be, _e]), Z.useEffect(() => {
    _e && !be && (W("secondary"), ne(2), setTimeout(() => {
      me(w.current);
    }, 50));
  }, [_e, be]), Z.useEffect(() => {
    !_e && !be && H === "secondary" && (W("content"), ne(1), setTimeout(() => {
      me(Y.current);
    }, 50));
  }, [_e, be, H]);
  const Ye = !!pe && (Be && ot.mobile || !Be && ft && ot.tablet || !Be && le && ot.desktop) || Ne && !be, We = Be ? "mobile" : ft ? "tablet" : "desktop";
  Z.useEffect(() => {
    if (!b) return;
    const xe = oe === "three-column";
    let Le = !1;
    const ze = () => {
      Le || (ie.selectedId !== ce && ie.setSelectedId(ce), ie.drilledIn !== xe && ie.setDrilledIn(xe));
    };
    if (j && j > 0) {
      const Je = setTimeout(ze, j);
      return () => {
        Le = !0, clearTimeout(Je);
      };
    } else
      ze();
  }, [b, ie, ce, oe, j]), Z.useEffect(() => {
    if (!b) return;
    const xe = () => {
      const Le = new URLSearchParams(window.location.search), ze = Le.get(y);
      Le.get(A), fe(ze === null ? void 0 : ze);
    };
    return window.addEventListener("popstate", xe), () => window.removeEventListener("popstate", xe);
  }, [
    b,
    y,
    A,
    c,
    l
  ]);
  const tt = Z.useRef(0), ke = Z.useRef(
    null
  ), Te = Z.useCallback(
    (xe, Le) => {
      xe !== ce && (n === void 0 && fe(xe), a?.(xe, Le));
    },
    [n, a, ce]
  );
  Z.useEffect(() => {
    if (!k && Be && Y.current) {
      const xe = setTimeout(() => me(Y.current), 30);
      return () => clearTimeout(xe);
    }
  }, [Be, ce, k]);
  const we = Z.useRef(null), [Ze, it] = Z.useState(
    () => v === "first" ? 0 : -1
  );
  Z.useEffect(() => {
    if (Ze < 0 || !we.current) return;
    const Le = Array.from(
      we.current.querySelectorAll("[data-nav-item]")
    )[Ze];
    if (Le) {
      document.activeElement !== Le && me(Le), tt.current = Ze;
      const ze = t[Ze];
      S?.(
        ze ? m(ze) : void 0,
        ze,
        Ze
      );
    }
  }, [Ze, t, S, m]);
  const jt = (xe) => {
    const Le = M === "vertical" ? "ArrowDown" : "ArrowRight", ze = M === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (xe.key === "ArrowRight" && M === "vertical") {
      xe.preventDefault(), _e ? (W("secondary"), setTimeout(() => {
        me(w.current);
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
      const Je = Date.now(), vt = 700, at = xe.key.toLowerCase();
      Je - ke.current.last > vt ? ke.current.buffer = at : ke.current.buffer += at, ke.current.last = Je;
      let ct = ke.current.buffer;
      const fr = ct.split("").every((Lt) => Lt === ct[0]), To = t.map(
        (Lt) => String(Lt.label || "").toLowerCase()
      );
      let hr = 0;
      Ze >= 0 && (hr = (Ze + 1) % t.length);
      let Ve;
      const st = (Lt, us) => {
        const fs = t.length;
        for (let Lo = 0; Lo < fs; Lo++) {
          const $o = (hr + Lo) % fs;
          if (!t[$o].disabled && To[$o].startsWith(Lt))
            return $o;
        }
      };
      fr && ct.length > 1 ? Ve = st(ct[0]) : (Ve = st(ct), Ve === void 0 && ct.length > 1 && (Ve = st(ct[ct.length - 1]), Ve !== void 0 && ke.current && (ke.current.buffer = ct[ct.length - 1]))), Ve !== void 0 && it(Ve);
    }
  }, { collapsed: De, toggle: wt } = Ap({
    enabled: N,
    isAtLeastMedium: V,
    initiallyCollapsed: _,
    persist: O,
    storageKey: z,
    urlParam: X,
    onChange: E
  }), Ct = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    Be ? "nhs-navigation-split-view--detail-active" : "",
    oe === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    N && V && De ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), Sn = Z.useRef(null);
  Z.useEffect(() => {
    if (!D && Sn.current) {
      const xe = pe ? `Selected ${pe.label}` : "Selection cleared";
      Sn.current.textContent = xe;
    }
  }, [pe, D]), Z.useEffect(() => {
    if (!Be && ce == null && we.current) {
      const Le = we.current.querySelectorAll("[data-nav-item]")[tt.current];
      me(Le);
    }
  }, [Be, ce]);
  const It = oe === "three-column", [Do, td] = Z.useState(!1);
  Z.useEffect(() => {
    It && !Do && td(!0);
  }, [It, Do]);
  const ds = Z.useRef(It);
  return Z.useEffect(() => {
    ds.current !== It && (T?.(It), ds.current = It);
  }, [It, T]), /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Ce,
      className: Ct,
      "aria-label": x?.rootLabel,
      "data-layout": oe,
      onKeyDown: qe,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Be || void 0,
            style: { transform: Be ? "translateX(-100%)" : void 0 },
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
                    N && V && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: wt,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": De ? te : U,
                        title: De ? te : U,
                        children: De ? B || /* @__PURE__ */ r.jsx(Dp, {}) : Q || /* @__PURE__ */ r.jsx(Ip, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ r.jsx(
                      Lp,
                      {
                        layout: oe === "cards" ? "cards" : "list",
                        items: t,
                        getId: m,
                        selectedId: ce,
                        isLoading: h,
                        emptyState: p,
                        renderItemContent: s,
                        onSelect: (xe, Le, ze) => {
                          tt.current = ze, Te(xe, Le);
                        },
                        orientation: M,
                        initialFocus: v,
                        onFocusChange: S,
                        justSelectedId: $e,
                        listRef: we,
                        onKeyDownList: jt,
                        navigationInstructions: C,
                        controlledFocusedIndex: Ze
                      }
                    ) }),
                    L && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: L
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
                      Tp,
                      {
                        show: Ye,
                        label: pe ? pe.label : void 0,
                        contentHeaderLevel: re,
                        detailActive: Be,
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
              oe === "three-column" && (!F || Do) || _e && !be ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: w,
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
                                    qn,
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
                        pe && K && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof K == "function" ? K(pe) : K
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
Ep.displayName = "NavigationSplitView";
function Pp({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderCard: o,
  className: a,
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
  return /* @__PURE__ */ r.jsx("div", { className: a, "aria-label": s, role: "region", children: /* @__PURE__ */ r.jsx(
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
function Fp({
  steps: e,
  currentIndex: t,
  onNavigate: n,
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
  return /* @__PURE__ */ r.jsx("div", { style: i, onClick: c, children: /* @__PURE__ */ r.jsx(fl, { labelText: a, classes: s, items: l }) });
}
function Rp(e) {
  const { up: t } = ts(), [n, o] = Z.useState(!1);
  Z.useEffect(() => o(!0), []);
  const a = n && t("medium") && !t("xlarge"), s = n && t("xlarge"), i = s ? "desktop" : a ? "tablet" : "mobile", l = Z.useMemo(() => {
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
  return { hydrated: n, breakpoint: i, isTablet: a, isDesktop: s, paneConfig: l };
}
function s1(e) {
  const {
    steps: t,
    currentStepId: n,
    defaultStepId: o,
    onStepChange: a,
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
    defaultSectionIdForStep: M,
    onSectionChange: I
  } = e, T = typeof window < "u" && !!window.__WSV_DEBUG_FOCUS || !1, C = (...le) => {
    T && console.log("[WorkflowSplitView]", ...le);
  }, v = () => {
    if (typeof document > "u") return {};
    const le = document.activeElement, Ne = le?.getAttribute?.("role");
    return {
      activeTag: le?.tagName,
      activeId: le?.id,
      activeRole: Ne,
      activeClasses: le?.className
    };
  }, [k, D] = He(
    o ?? (t[0] ? h(t[0]) : void 0)
  ), S = n ?? k, b = t.findIndex((le) => h(le) === S), y = b >= 0 ? t[b] : t[0], [A, j] = He({}), F = (le) => le ? String(h(le)) : "", L = ge((le) => {
    if (!le) return;
    try {
      const be = M?.(le);
      if (be !== void 0) return be;
    } catch {
    }
    const Ne = le.sections && le.sections[0];
    return Ne ? Ne.id : void 0;
  }, [M]), N = m ?? A[F(y)] ?? L(y), _ = y && y.sections ? y.sections : void 0, E = _?.find((le) => le.id === N), te = (le) => {
    if (y) {
      const Ne = F(y);
      m === void 0 && j((be) => ({ ...be, [Ne]: le })), I?.(le, _?.find((be) => be.id === le), y);
    }
  }, U = (le) => {
    C("navigateTo", String(le)), n === void 0 && D(le);
    const Ne = t.find((be) => h(be) === le);
    Ne && a && a(le, Ne);
  }, B = u ? u({ steps: t, current: y, onNavigate: U }) : /* @__PURE__ */ r.jsx(
    Fp,
    {
      steps: t,
      currentIndex: Math.max(0, b),
      onNavigate: (le) => {
        const Ne = t[le];
        Ne && U(h(Ne));
      }
    }
  ), { hydrated: Q, breakpoint: O, paneConfig: z } = Rp({
    step: y,
    index: b,
    layoutForStep: s
  }), X = n !== void 0 || o !== void 0 && t.length > 0 && t[0] && o !== h(t[0]), R = Ue(null), re = Ue(null), q = Ue(null), ee = Ue(null), K = Ue(null), oe = Ue(0), de = Ue(!1), V = Ue(!1), ie = Ue(null), [se, fe] = He("nav"), ce = Ue("nav");
  Xe(() => {
    ce.current = se, se !== "nav" && w(!1), se !== "content" && G(!1), se !== "secondary" && H(!1);
  }, [se]);
  const [pe, $e] = He(0), [Ie, Ce] = He(
    () => Math.max(0, b)
  ), [Y, w] = He(!1), [P, G] = He(!1), [$, H] = He(!1), W = ge((le) => {
    if (le) {
      try {
        le.focus({ preventScroll: !0 });
      } catch {
        le.focus();
      }
      C("focusEl", { to: le.tagName, id: le.id, class: le.className });
    }
  }, []), J = ge(() => {
    const le = () => q.current;
    let Ne = 0;
    const be = () => {
      const _e = le();
      _e && document.activeElement !== _e && W(_e), Ne += 1, Ne < 6 && document.activeElement !== le() && setTimeout(be, 0);
    };
    C("focusContentSoon:start", { attempts: Ne }), be(), typeof queueMicrotask == "function" && queueMicrotask(be), requestAnimationFrame(be);
  }, [W]), ne = ge((le) => le ? Array.from(le.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
    (be) => !be.hasAttribute("disabled") && be.tabIndex !== -1
  ) : [], []), ae = () => [
    re.current,
    q.current,
    ee.current
  ].filter(Boolean), ue = (le, Ne) => {
    if (!le) return;
    const be = typeof document < "u" ? document.activeElement : null;
    if (be && le.contains(be))
      try {
        be.blur(), C("blurActiveIfInside", { label: Ne, root: le.getAttribute("aria-label") || le.tagName });
      } catch {
      }
  }, he = () => {
    const le = typeof document < "u" ? document.activeElement : null;
    if (le && re.current && re.current.contains(le))
      try {
        le.blur(), C("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
  }, me = (le) => {
    const Ne = ae(), be = Math.max(0, Math.min(le, Ne.length - 1));
    C("focusContainerByIndex", { idx: le, clamped: be }), W(Ne[be]), $e(be);
  }, ve = ge(
    (le) => {
      let Ne = 0;
      const be = le ?? Ie, _e = () => {
        const Fe = K.current;
        if (!Fe) return null;
        const Ye = Array.from(Fe.querySelectorAll("[data-nav-item]"));
        return Ye[be] || Ye[0] || null;
      }, Ge = () => {
        if (ce.current !== "nav") {
          C("focusNavItemSoon: abort (mode changed)", { mode: ce.current });
          return;
        }
        const Fe = _e();
        Fe && document.activeElement !== Fe && W(Fe), Ne += 1, Ne < 6 && document.activeElement !== Fe && setTimeout(Ge, 0);
      };
      C("focusNavItemSoon:start", { index: be, ...v() }), Ge(), typeof queueMicrotask == "function" && queueMicrotask(Ge), requestAnimationFrame(Ge);
    },
    [W, Ie]
  );
  Xe(() => {
    if (!Q) return;
    O === "desktop" || p && O === "tablet" ? X ? (fe("nav"), $e(0), C("init: grid preselected → mode=nav", { containerIndex: 0 })) : (fe("containers"), $e(0), C("init: grid default → mode=containers", { containerIndex: 0 })) : (fe("nav"), C("init: non-grid → mode=nav"));
  }, [Q, O, X, p]), Xe(() => () => {
    ie.current != null && (clearTimeout(ie.current), ie.current = null, C("cleanup: cleared nav bootstrap timeout"));
  }, []), Xe(() => {
    const le = Math.max(0, b);
    Ce(le), C("sync navFocusedIndex with currentIndex", { currentIndex: b, navFocusedIndex: le });
  }, [b]), Xe(() => {
    C("paneFocusMode →", se, v());
  }, [se]);
  const Se = (le) => {
    if (!(Q && (O === "desktop" || p && O === "tablet"))) return;
    const be = le.key, _e = le.target, Ge = _e.tagName.toLowerCase(), Fe = Ge === "input" || Ge === "textarea" || Ge === "select", Ye = _e.getAttribute("role"), We = Ye === "textbox" || Ye === "searchbox" || Ye === "combobox", tt = _e.getAttribute("contenteditable"), ke = Fe || We || tt && tt !== "false";
    if (C("onRootKeyDown", { key: be, tag: Ge, role: Ye, isEditable: ke, paneFocusMode: se, containerIndex: pe, ...v() }), ke && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(be))
      return;
    const Te = !!K.current && K.current.contains(_e), we = !!q.current && q.current.contains(_e), Ze = !!ee.current && ee.current.contains(_e), it = _e === re.current || _e === q.current || _e === ee.current, jt = !!ee.current;
    if (it) {
      if (be === "ArrowLeft" && _e === q.current) {
        le.preventDefault(), C("container: ArrowLeft on content container → nav item"), fe("nav"), ue(q.current, "from-content"), oe.current = Ie, ve(Ie);
        return;
      }
      if (be === "ArrowRight" && _e === q.current && jt) {
        le.preventDefault(), C("container: ArrowRight on content container → secondary"), fe("secondary"), ue(q.current, "from-content"), G(!1), setTimeout(() => W(ee.current), 10);
        return;
      }
      if (be === "ArrowRight" && _e === re.current) {
        le.preventDefault(), C("container: ArrowRight on nav container → content"), fe("content"), ue(re.current, "from-nav"), w(!1), J();
        return;
      }
      if (be === "ArrowLeft" && _e === ee.current) {
        le.preventDefault(), C("container: ArrowLeft on secondary container → content"), fe("content"), ue(ee.current, "from-secondary"), H(!1), J();
        return;
      }
      if (be === "ArrowRight") {
        le.preventDefault(), C("container: ArrowRight → next container"), ue(_e, "container-roving"), _e === re.current && w(!1), _e === q.current && G(!1), _e === ee.current && H(!1), me(pe + 1);
        return;
      }
      if (be === "ArrowLeft") {
        le.preventDefault(), C("container: ArrowLeft → prev container"), ue(_e, "container-roving"), _e === re.current && w(!1), _e === q.current && G(!1), _e === ee.current && H(!1), me(pe - 1);
        return;
      }
      if (be === "Home") {
        le.preventDefault(), C("container: Home → first container"), ue(_e, "container-roving"), _e === re.current && w(!1), _e === q.current && G(!1), _e === ee.current && H(!1), me(0);
        return;
      }
      if (be === "End") {
        le.preventDefault(), C("container: End → last container"), ue(_e, "container-roving"), _e === re.current && w(!1), _e === q.current && G(!1), _e === ee.current && H(!1), me(ae().length - 1);
        return;
      }
      if (be === "Enter" || be === " ") {
        if (le.preventDefault(), _e === re.current)
          fe("nav"), C("container: Enter/Space on nav → focus nav item", { navFocusedIndex: Ie }), oe.current = Ie, V.current = !0, ve(Ie);
        else if (_e === q.current) {
          fe("content"), ue(q.current, "descend-content"), G(!1);
          const De = ne(q.current);
          C("container: Enter/Space on content → focus first focusable", { count: De.length }), (De[0] || q.current)?.focus();
        } else if (_e === ee.current) {
          fe("secondary"), ue(ee.current, "descend-secondary"), H(!1);
          const De = ne(ee.current);
          C("container: Enter/Space on secondary → focus first focusable", { count: De.length }), (De[0] || ee.current)?.focus();
        }
        return;
      }
    }
    if (be === "Escape") {
      if (we || Ze) {
        le.preventDefault(), fe("containers"), C("Escape: from", we ? "content" : "secondary", "→ containers (focus container)"), we && ue(q.current, "escape-ascend"), Ze && ue(ee.current, "escape-ascend"), we && setTimeout(() => W(q.current), 10), Ze && setTimeout(() => W(ee.current), 10);
        return;
      }
      if (Te) {
        le.preventDefault(), fe("containers"), C("Escape: from nav → containers (focus nav container)"), he(), W(re.current);
        return;
      }
      if (it) {
        le.preventDefault(), fe("containers"), C("Escape: on container (stay in containers)");
        return;
      }
    }
    if (be === "Enter" || be === " ") {
      if (_e === q.current && se === "content") {
        le.preventDefault(), ue(q.current, "descend-content");
        const De = ne(q.current);
        C("Enter/Space on content container in content mode"), (De[0] || q.current)?.focus();
        return;
      }
      if (_e === ee.current && se === "secondary") {
        le.preventDefault(), ue(ee.current, "descend-secondary");
        const De = ne(ee.current);
        C("Enter/Space on secondary container in secondary mode"), (De[0] || ee.current)?.focus();
        return;
      }
    }
    if (be === "ArrowRight") {
      if (Te || se === "nav") {
        le.preventDefault(), fe("content"), C("ArrowRight: from nav → content (focus content)"), ue(re.current, "from-nav"), w(!1), J();
        return;
      }
      if (we || se === "content") {
        jt && (le.preventDefault(), fe("secondary"), C("ArrowRight: from content → secondary (focus secondary)"), ue(q.current, "from-content"), G(!1), setTimeout(() => W(ee.current), 10));
        return;
      }
    }
    if (be === "ArrowLeft") {
      if (Ze || se === "secondary") {
        le.preventDefault(), C("ArrowLeft: from secondary → content (focus content)"), ue(ee.current, "from-secondary"), H(!1), J();
        return;
      }
      if (we || se === "content") {
        le.preventDefault(), fe("nav"), C("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex: Ie }), oe.current = Ie, ue(q.current, "from-content"), G(!1), ve(Ie);
        return;
      }
    }
    if ((be === "Enter" || be === " ") && (Te || se === "nav")) {
      le.preventDefault();
      const De = K.current, wt = De ? Array.from(De.querySelectorAll("[data-nav-item]")) : [];
      let Ct = oe.current ?? Ie;
      if (wt.length) {
        const Sn = document.activeElement, It = Sn ? wt.indexOf(Sn) : -1;
        It >= 0 && (Ct = It);
      }
      Ct = Math.max(0, Math.min(Ct, wt.length - 1)), Ce(Ct), oe.current = Ct, C("Root: Enter/Space activate from nav context", { idx: Ct }), U(h(t[Ct])), fe("content"), ce.current = "content", de.current = !0, he(), J();
      return;
    }
  }, qe = () => {
    const le = () => {
      de.current = !1, V.current = !1;
    }, Ne = (Fe) => {
      if (!K.current) return;
      const Ye = Array.from(K.current.querySelectorAll("[data-nav-item]"));
      if (Ye.length) {
        if (Fe.key === "ArrowDown") {
          Fe.preventDefault(), Fe.stopPropagation(), V.current = !1, fe("nav");
          const We = oe.current ?? Ie, tt = Math.min(Ye.length - 1, We + 1);
          Ce(tt), oe.current = tt, ve(tt), C("PrimaryNav: ArrowDown", { from: We, to: tt });
        } else if (Fe.key === "ArrowUp") {
          Fe.preventDefault(), Fe.stopPropagation(), V.current = !1, fe("nav");
          const We = oe.current ?? Ie, tt = Math.max(0, We - 1);
          Ce(tt), oe.current = tt, ve(tt), C("PrimaryNav: ArrowUp", { from: We, to: tt });
        } else if (Fe.key === "Home") {
          Fe.preventDefault(), Fe.stopPropagation(), V.current = !1;
          const We = 0;
          Ce(We), oe.current = We, ve(We), C("PrimaryNav: Home", { to: We });
        } else if (Fe.key === "End") {
          Fe.preventDefault(), Fe.stopPropagation(), V.current = !1;
          const We = Ye.length - 1;
          Ce(We), oe.current = We, ve(We), C("PrimaryNav: End", { to: We });
        }
      }
    }, be = (Fe) => {
    }, _e = (Fe) => {
      if (Fe.key !== "Enter" && Fe.key !== " " || !K.current) return;
      const Ye = Array.from(K.current.querySelectorAll("[data-nav-item]"));
      if (!Ye.length) return;
      Fe.preventDefault();
      let We = -1;
      const ke = Fe.target?.closest?.("[data-nav-item]");
      ke && (We = Ye.indexOf(ke)), We < 0 && (We = oe.current ?? Ie), We = Math.max(0, Math.min(We, Ye.length - 1)), Ce(We), oe.current = We, C("PrimaryNav: Enter/Space activate (capture)", { idx: We }), U(h(t[We])), fe("content"), ce.current = "content", de.current = !0, ie.current != null && (clearTimeout(ie.current), ie.current = null), he(), J();
    }, Ge = (Fe) => {
      if (Fe.defaultPrevented) return;
      de.current = !1;
      const Ye = Fe.target;
      if (!Ye) return;
      const We = Ye.closest("[data-nav-item]");
      if (!We || !K.current || !K.current.contains(We)) return;
      const ke = Array.from(K.current.querySelectorAll("[data-nav-item]")).indexOf(We);
      ke < 0 || (Ce(ke), oe.current = ke, C("PrimaryNav: click delegate activate", { idx: ke }), U(h(t[ke])), fe("content"), he(), ie.current != null && (clearTimeout(ie.current), ie.current = null), J());
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: K,
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
          const We = h(Fe), tt = Ye === b, ke = se === "nav" && Ye === Ie;
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
                  oe.current = Ye, de.current = !0, C("NavItem: onKeyDown activate", { i: Ye, id: String(h(t[Ye])) }), U(h(t[Ye])), fe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), he(), J();
                }
              },
              onKeyUp: (Te) => {
                if (Te.key === "Enter" || Te.key === " ") {
                  if (V.current) {
                    V.current = !1;
                    return;
                  }
                  oe.current = Ye, C("NavItem: onKeyUp activate (fallback)", { i: Ye, id: String(h(t[Ye])) }), U(h(t[Ye])), fe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), he(), J();
                }
              },
              onClick: (Te) => {
                if (de.current) {
                  de.current = !1, Te.preventDefault(), Te.stopPropagation(), C("NavItem: ignored synthetic click after keyboard activation", { i: Ye });
                  return;
                }
                Ce(Ye), oe.current = Ye, C("NavItem: onClick select", { i: Ye, id: String(We) }), U(We), fe("content"), ce.current = "content", ie.current != null && (clearTimeout(ie.current), ie.current = null), he(), J();
              },
              children: Fe.label
            }
          ) }, String(We));
        })
      }
    );
  }, Be = () => {
    const le = Math.max(0, b), Ne = le > 0, be = le < t.length - 1, _e = g ? g(y) : x ? x(y) : !0;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
      O === "tablet" ? B : null,
      _e && /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        Ne ? /* @__PURE__ */ r.jsx(
          qn,
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
          /* @__PURE__ */ r.jsx(qn, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        be ? /* @__PURE__ */ r.jsx(
          Rr,
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
          /* @__PURE__ */ r.jsx(Rr, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ r.jsx(
        Pp,
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
  }, ot = (le) => /* @__PURE__ */ r.jsx(
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
              Ne.target === re.current && w(!0);
            },
            onBlur: (Ne) => {
              Ne.target === re.current && w(!1);
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
              /* @__PURE__ */ r.jsx("div", { role: "main", children: l(y, E) })
            ]
          }
        ),
        (() => {
          const Ne = d ? d(y, _, E, (Ge) => te(Ge)) : _ && _.length > 0 ? /* @__PURE__ */ r.jsx("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: _.map((Ge) => {
            const Fe = N === Ge.id;
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
          }) }) : void 0, be = c?.(y, E);
          return le.showSecondaryNav && (Ne || be) ? /* @__PURE__ */ r.jsx(
            "aside",
            {
              ref: ee,
              className: "nhsfdp-pane secondary-nav" + ($ ? " is-active-pane" : ""),
              "aria-label": "Secondary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (Ge) => {
                Ge.target === ee.current && H(!0);
              },
              onBlur: (Ge) => {
                Ge.target === ee.current && H(!1);
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
  return Q ? O === "mobile" || !p && O === "tablet" || (z.panes ?? 1) === 1 ? /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: Be() }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: ot(z) }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ r.jsxs("main", { className: "nhsfdp-pane content", children: [
    u ? u({ steps: t, current: y, onNavigate: U }) : null,
    y ? l(y, y?.sections?.find((le) => le.id === (M?.(y) ?? y?.sections?.[0]?.id))) : null
  ] }) }) });
}
const Bp = typeof window < "u" && window.document ? Z.useLayoutEffect : Z.useEffect, ii = (e, t, n, o) => e == null || Number.isNaN(e) ? o : Math.min(n, Math.max(t, e)), Hp = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: o, isActive: a, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, p = (g) => {
    h && (g.preventDefault(), o?.(e));
  }, x = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": a || !1,
    onClick: p,
    onKeyDown: (g) => {
      (g.key === "Enter" || g.key === " ") && p(g), g.key === "Escape" && a && p(g);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ye("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", a && "nhsuk-product-roadmap__item--active"),
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
          h && /* @__PURE__ */ r.jsx("span", { className: ye("nhsuk-product-roadmap__item-expander", a && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, zp = nd(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: o = 2,
  className: a,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = He(() => /* @__PURE__ */ new Set()), [h, p] = He(() => /* @__PURE__ */ new Set()), x = Ue(/* @__PURE__ */ new Set()), g = ge((j) => u.has(j), [u]), m = ge((j) => {
    f((F) => {
      const L = new Set(F);
      return L.has(j.id) ? (L.delete(j.id), p((N) => {
        const _ = new Set(N);
        return _.add(j.id), _;
      }), setTimeout(() => p((N) => {
        const _ = new Set(N);
        return _.delete(j.id), _;
      }), 240), l?.(j.id, !1)) : (L.add(j.id), l?.(j.id, !0)), L;
    });
  }, [l]);
  Bp(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const j = [];
    if (u.forEach((_) => {
      x.current.has(_) || j.push(_);
    }), x.current = new Set(u), !j.length) return;
    const F = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, L = j.map((_) => `.nhsuk-product-roadmap__inline-children[data-parent="${_}"] .nhsuk-product-roadmap__inline-child`).join(","), N = Array.from(document.querySelectorAll(L));
    if (N.length) {
      if (F) {
        N.forEach((_) => {
          _.style.opacity = "1", _.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((_) => {
        (_.gsap || _.default || _).to(N, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        N.forEach((_) => {
          _.style.opacity = "1", _.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, i]);
  const M = ge(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), I = ye("nhsuk-product-roadmap", a), T = ii(n, 120, 1200, 400), C = ii(o, 1, 6, 2), v = Ee(() => e.map((j) => /* @__PURE__ */ new Date(j + " 01")), [e]), k = Ee(() => {
    if (v.length === 0) {
      const L = /* @__PURE__ */ new Date();
      return [L, L];
    }
    const j = new Date(v[0]), F = er.offset(new Date(v[v.length - 1]), 1);
    return [j, F];
  }, [v]), D = Ee(() => Qa().domain(k).range([0, v.length * T]), [k, v.length, T]), S = ge((j) => {
    if (j.startDate) {
      const U = new Date(j.startDate), B = new Date(j.endDate ?? j.startDate);
      B < U && B.setTime(U.getTime());
      const Q = D(U), O = er.offset(new Date(B), 1);
      let z = D(O);
      Number.isFinite(z) || (z = Q + T);
      const X = Math.max(T * 0.25, z - Q), R = Q / T, re = X / T;
      return { ...j, _pxLeft: Q, _pxWidth: X, _startFraction: R, _spanColumns: re };
    }
    const F = j.date ?? 1, L = j.dateOffset ?? 0, N = j.length ?? 1, _ = j.partialLength ?? 1, E = F - 1 + L, te = N - 1 + _;
    return { ...j, _pxLeft: E * T, _pxWidth: te * T, _startFraction: E, _spanColumns: te };
  }, [D, T]), b = Ee(() => t.map((j) => {
    const L = j.roadmapItems.map((_) => {
      const E = !_.childItems && _.children ? { ..._, childItems: _.children } : { ..._ };
      return S(E);
    }).sort((_, E) => _._pxLeft !== E._pxLeft ? _._pxLeft - E._pxLeft : E._pxWidth - _._pxWidth), N = [];
    return L.forEach((_) => {
      const E = _._pxLeft, te = _._pxLeft + _._pxWidth;
      let U = N.findIndex((B) => B <= E);
      U === -1 && (U = N.length, N.push(0)), N[U] = te, _.verticalPosition = U + 1;
    }), { ...j, roadmapItems: L, _laneCount: N.length };
  }), [t, S]), y = Ee(() => b.map((j) => j._laneCount || 1), [b]), A = Ee(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: I,
      style: { "--column-width": `${T}px`, gridTemplateColumns: A },
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
          const L = F + 2, N = y[F];
          let _, E = 0, te = [];
          i && c === "inline" && (te = j.roadmapItems.filter((O) => g(O.id) && O.childItems && O.childItems.length).map((O) => ({ id: O.id, lane: O.verticalPosition || 1, count: O.childItems.length })).sort((O, z) => O.lane - z.lane), E = te.reduce((O, z) => O + z.count, 0));
          const U = N + E;
          _ = `calc((${U} * var(--roadmap-item-block-height)) + (max(0, ${U} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let Q = 0;
          return te.forEach((O) => {
            Q += O.count, B[O.lane + 1] = Q;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": L, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: j.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: _ }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: j.roadmapItems.map((O, z) => {
              const X = (O.verticalPosition || 1) - 1, R = te.filter((K) => K.lane - 1 < X).reduce((K, oe) => K + oe.count, 0), re = X + R, q = g(O.id), ee = h.has(O.id);
              return /* @__PURE__ */ r.jsxs(Qe.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Hp, { item: O, maxLines: C, enableDrilldown: i, onExpand: m, isActive: q, topLaneIndex: re, laneOffset: R }),
                i && c === "inline" && (q || ee) && O.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": O.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${O.title} child tasks`, children: O.childItems.map((K, oe) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let V = O._pxLeft, ie = O._pxWidth;
                  if (K.startDate) {
                    const ce = new Date(K.startDate);
                    let pe = K.endDate ? new Date(K.endDate) : new Date(ce);
                    pe < ce && (pe = new Date(ce));
                    const $e = new Date(pe);
                    $e.setDate($e.getDate() + 1);
                    const Ie = D(ce);
                    let Ce = D($e);
                    (!Number.isFinite(Ce) || Ce <= Ie) && (Ce = Ie + 6), V = Ie, ie = Math.max(6, Ce - Ie);
                  }
                  const fe = re + 1 + oe;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ye("nhsuk-product-roadmap__inline-child", K.status && `nhsuk-product-roadmap__inline-child--status-${K.status}`, !q && ee && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${V}px`, width: `${ie}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${fe})`, height: de, opacity: q ? 0 : void 0, transform: q ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: K.title })
                      ]
                    },
                    K.id ?? oe
                  );
                }) })
              ] }, O.id ?? z);
            }) }) })
          ] }, `${j.heading}-${F}`);
        }),
        i && c === "overlay" && u.size === 1 && (() => {
          const j = Array.from(u)[0], F = t.flatMap((L) => L.roadmapItems).find((L) => L.id === j);
          return !F || !F.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${F.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: F.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: M, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((L, N) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: L.title }),
                L.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: L.content })
              ] }, L.id ?? N)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: M, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
zp.displayName = "ProductRoadmap";
function jl(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = jl(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Br() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = jl(e)) && (o && (o += " "), o += t);
  return o;
}
function mt(e) {
  return function() {
    return e;
  };
}
const ca = Math.PI, da = 2 * ca, cn = 1e-6, Op = da - cn;
function Ml(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Up(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Ml;
  const n = 10 ** t;
  return function(o) {
    this._ += o[0];
    for (let a = 1, s = o.length; a < s; ++a)
      this._ += Math.round(arguments[a] * n) / n + o[a];
  };
}
class Wp {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Ml : Up(t);
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
  quadraticCurveTo(t, n, o, a) {
    this._append`Q${+t},${+n},${this._x1 = +o},${this._y1 = +a}`;
  }
  bezierCurveTo(t, n, o, a, s, i) {
    this._append`C${+t},${+n},${+o},${+a},${this._x1 = +s},${this._y1 = +i}`;
  }
  arcTo(t, n, o, a, s) {
    if (t = +t, n = +n, o = +o, a = +a, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let i = this._x1, l = this._y1, c = o - t, d = a - n, u = i - t, f = l - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > cn) if (!(Math.abs(f * c - d * u) > cn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = o - i, x = a - l, g = c * c + d * d, m = p * p + x * x, M = Math.sqrt(g), I = Math.sqrt(h), T = s * Math.tan((ca - Math.acos((g + h - m) / (2 * M * I))) / 2), C = T / I, v = T / M;
      Math.abs(C - 1) > cn && this._append`L${t + C * u},${n + C * f}`, this._append`A${s},${s},0,0,${+(f * p > u * x)},${this._x1 = t + v * c},${this._y1 = n + v * d}`;
    }
  }
  arc(t, n, o, a, s, i) {
    if (t = +t, n = +n, o = +o, i = !!i, o < 0) throw new Error(`negative radius: ${o}`);
    let l = o * Math.cos(a), c = o * Math.sin(a), d = t + l, u = n + c, f = 1 ^ i, h = i ? a - s : s - a;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > cn || Math.abs(this._y1 - u) > cn) && this._append`L${d},${u}`, o && (h < 0 && (h = h % da + da), h > Op ? this._append`A${o},${o},0,1,${f},${t - l},${n - c}A${o},${o},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > cn && this._append`A${o},${o},0,${+(h >= ca)},${f},${this._x1 = t + o * Math.cos(s)},${this._y1 = n + o * Math.sin(s)}`);
  }
  rect(t, n, o, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${o = +o}v${+a}h${-o}Z`;
  }
  toString() {
    return this._;
  }
}
function Il(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const o = Math.floor(n);
      if (!(o >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = o;
    }
    return e;
  }, () => new Wp(t);
}
function Dl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Tl(e) {
  this._context = e;
}
Tl.prototype = {
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
function Ll(e) {
  return new Tl(e);
}
function $l(e) {
  return e[0];
}
function Al(e) {
  return e[1];
}
function El(e, t) {
  var n = mt(!0), o = null, a = Ll, s = null, i = Il(l);
  e = typeof e == "function" ? e : e === void 0 ? $l : mt(e), t = typeof t == "function" ? t : t === void 0 ? Al : mt(t);
  function l(c) {
    var d, u = (c = Dl(c)).length, f, h = !1, p;
    for (o == null && (s = a(p = i())), d = 0; d <= u; ++d)
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
    return arguments.length ? (a = c, o != null && (s = a(o)), l) : a;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? o = s = null : s = a(o = c), l) : o;
  }, l;
}
function ua(e, t, n) {
  var o = null, a = mt(!0), s = null, i = Ll, l = null, c = Il(d);
  e = typeof e == "function" ? e : e === void 0 ? $l : mt(+e), t = typeof t == "function" ? t : mt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Al : mt(+n);
  function d(f) {
    var h, p, x, g = (f = Dl(f)).length, m, M = !1, I, T = new Array(g), C = new Array(g);
    for (s == null && (l = i(I = c())), h = 0; h <= g; ++h) {
      if (!(h < g && a(m = f[h], h, f)) === M)
        if (M = !M)
          p = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), x = h - 1; x >= p; --x)
            l.point(T[x], C[x]);
          l.lineEnd(), l.areaEnd();
        }
      M && (T[h] = +e(m, h, f), C[h] = +t(m, h, f), l.point(o ? +o(m, h, f) : T[h], n ? +n(m, h, f) : C[h]));
    }
    if (I) return l = null, I + "" || null;
  }
  function u() {
    return El().defined(a).curve(i).context(s);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : mt(+f), o = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : mt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (o = f == null ? null : typeof f == "function" ? f : mt(+f), d) : o;
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
    return u().x(o).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : mt(!!f), d) : a;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), d) : s;
  }, d;
}
function li(e) {
  return e < 0 ? -1 : 1;
}
function ci(e, t, n) {
  var o = e._x1 - e._x0, a = t - e._x1, s = (e._y1 - e._y0) / (o || a < 0 && -0), i = (n - e._y1) / (a || o < 0 && -0), l = (s * a + i * o) / (o + a);
  return (li(s) + li(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function di(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Wo(e, t, n) {
  var o = e._x0, a = e._y0, s = e._x1, i = e._y1, l = (s - o) / 3;
  e._context.bezierCurveTo(o + l, a + l * t, s - l, i - l * n, s, i);
}
function Hr(e) {
  this._context = e;
}
Hr.prototype = {
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
        Wo(this, this._t0, di(this, this._t0));
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
          this._point = 3, Wo(this, di(this, n = ci(this, e, t)), n);
          break;
        default:
          Wo(this, this._t0, n = ci(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Hr.prototype).point = function(e, t) {
  Hr.prototype.point.call(this, t, e);
};
function zr(e) {
  return new Hr(e);
}
function Gp(e, t, n) {
  const o = Zi(e, t);
  return Qa().domain(o).range(n);
}
function ui(e, t, n) {
  const [o, a] = Zi(e, t);
  if (!(Number.isFinite(o) && Number.isFinite(a)))
    return Lr().domain([0, 0]).range(n);
  let i;
  if (o <= 0)
    i = Math.min(0, o);
  else {
    const c = a - o, d = (c > 0 ? c : o) * 0.1;
    i = Math.max(0, o - d), i === o && (i = Math.max(0, o * 0.9));
  }
  const l = a ?? 0;
  return Lr().domain([i, l]).nice().range(n);
}
function fa(e, t, n, o) {
  const a = El().x(t).y(n);
  return o?.smooth !== !1 && a.curve(zr), a(e) ?? "";
}
function Yp(e = {}) {
  const t = Z.useRef(null), n = Z.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [o, a] = Z.useState({ width: 0, height: 0 });
  Z.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        a({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, o.width - n.left - n.right), i = Math.max(0, o.height - n.top - n.bottom);
  return { width: o.width, height: o.height, innerWidth: s, innerHeight: i, margin: n, ref: t };
}
const Pl = Z.createContext(null);
function ln() {
  return Z.useContext(Pl);
}
const Vp = ({
  height: e = 240,
  margin: t,
  width: n,
  className: o = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: a,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Yp(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: o, style: c, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(Pl.Provider, { value: l, children: a }) });
}, ns = Z.createContext(null), wn = () => Z.useContext(ns), Zp = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: o,
  children: a,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = ln(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, x = Z.useMemo(() => e.flatMap((v) => v.data), [e]), g = Z.useCallback(
    (v) => {
      if (o) return o(v);
      const k = v.x;
      return k instanceof Date ? k : new Date(k);
    },
    [o]
  ), m = c ?? 6, M = d ?? 6, I = Z.useMemo(
    () => Gp(x, g, [
      m,
      Math.max(0, h - m)
    ]),
    [x, g, h, m]
  ), T = Z.useMemo(() => {
    const v = Math.max(0, u ?? 0), k = Math.max(0, p - (M + v));
    if (l) {
      const D = ui([], (S) => S.y, [
        k,
        M
      ]);
      return D.domain(l), D;
    }
    return ui(x, (D) => D.y, [k, M]);
  }, [x, p, l, M, u]), C = Z.useMemo(
    () => ({
      xScale: I,
      yScale: T,
      getXTicks: (v = s) => I.ticks(v),
      getYTicks: (v = i) => T.ticks(v)
    }),
    [I, T, s, i]
  );
  return /* @__PURE__ */ r.jsx(ns.Provider, { value: C, children: a });
}, Sr = 16, _r = 6, qp = 16, Jp = 4, Xp = 6, Kp = 3, Qp = void 0, fi = ({
  type: e,
  scale: t,
  tickCount: n,
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
  const g = wn(), m = ln(), M = t || (e === "x" ? g?.xScale : g?.yScale), I = n ?? (e === "x" ? 6 : 5), T = typeof a == "function", C = Z.useMemo(() => {
    if (T || !p) return;
    const D = (S) => new Intl.DateTimeFormat(void 0, S);
    switch (p) {
      case "dayShortMonth":
        return (S) => {
          const b = S instanceof Date ? S : new Date(S);
          return `${b.getDate()}
${D({ month: "short" }).format(b)}`;
        };
      case "dayShortMonthYear":
        return (S) => {
          const b = S instanceof Date ? S : new Date(S);
          return `${b.getDate()}
${D({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "shortMonth":
        return (S) => {
          const b = S instanceof Date ? S : new Date(S);
          return D({ month: "short" }).format(b);
        };
      case "shortMonthYear":
        return (S) => {
          const b = S instanceof Date ? S : new Date(S);
          return `${D({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "hourMinute":
        return (S) => {
          const b = S instanceof Date ? S : new Date(S);
          return D({ hour: "2-digit", minute: "2-digit" }).format(b);
        };
      default:
        return;
    }
  }, [T, p]);
  let v = T ? a : C || ((D) => String(D));
  const k = Z.useMemo(() => o && Array.isArray(o) ? o : M ? typeof M.ticks == "function" ? M.ticks(I) : M.domain ? M.domain() : [] : [], [M, I, o]);
  if (e === "x" && !T && !p && k.length && k.every((D) => D instanceof Date)) {
    const D = k[0], S = k[k.length - 1], b = S.getTime() - D.getTime(), y = 24 * 3600 * 1e3, A = 365 * y, j = D.getFullYear() === S.getFullYear(), F = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (b < 2 * y) {
      const L = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      v = (N) => L.format(N);
    } else if (b < 32 * y)
      v = (L) => {
        const N = L;
        return `${N.getDate()} ${F.format(N)}`;
      };
    else if (b < A && j)
      v = (L) => F.format(L);
    else if (b < 2 * A) {
      const L = /* @__PURE__ */ new Set();
      v = (N) => {
        const _ = N, E = _.getMonth();
        return L.has(E) || L.add(E), `${F.format(_)} ${_.getFullYear()}`;
      };
    } else
      v = (L) => String(L.getFullYear());
  }
  if (!M || !m) return null;
  if (e === "x") {
    const D = i ?? m.innerHeight, S = typeof M.bandwidth == "function", b = S ? M.bandwidth() : 0, y = (F) => {
      const L = M(F);
      return S ? L + b / 2 : L;
    };
    let A = c ?? 0;
    if (u && c == null) {
      const F = k.map(
        (N) => v(N).replace(/\n.*/g, "")
      ), L = F.length ? F.reduce((N, _) => N + _.length, 0) / F.length : 0;
      A = Math.max(12, Math.round(L * 6 + 4));
    }
    const j = Z.useMemo(() => {
      if (o && Array.isArray(o) || A <= 0) return k;
      const F = [];
      let L = -1 / 0;
      for (const N of k) {
        const _ = y(N);
        _ - L >= A && (F.push(N), L = _);
      }
      return F;
    }, [
      k,
      M,
      A,
      o,
      S,
      b
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${D})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          j.map((F, L) => {
            const N = v(F), _ = d && N.length > d ? N.slice(0, Math.max(1, d - 1)) + "…" : N, E = h ? _.split(/\n/) : [_.replace(/\n/g, " ")], te = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${y(F)},0)`,
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
                        _ !== N && /* @__PURE__ */ r.jsx("title", { children: N })
                      ]
                    }
                  )
                ]
              },
              F?.toString?.() || L
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
          const D = !!x?.enabled, S = Math.max(_r, x?.gapPx ?? Sr);
          if (!D)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: m.innerHeight, stroke: "currentColor" });
          const b = Math.max(0, m.innerHeight - S);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: b, stroke: "currentColor" });
        })(),
        k.map((D, S) => {
          const b = v(D), y = d && b.length > d ? b.slice(0, Math.max(1, d - 1)) + "…" : b, A = h ? y.split(/\n/) : [y.replace(/\n/g, " ")];
          if (!!x?.enabled) {
            const F = Math.max(_r, x?.gapPx ?? Sr), L = Math.max(0, m.innerHeight - F);
            if (M(D) > L - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${M(D)})`,
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
                      A.map((F, L) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: L === 0 ? 0 : "1.1em", children: F }, L)),
                      y !== b && /* @__PURE__ */ r.jsx("title", { children: b })
                    ]
                  }
                )
              ]
            },
            D?.toString?.() || S
          );
        }),
        !!x?.enabled && (() => {
          const D = Math.max(_r, x?.gapPx ?? Sr), S = m.innerHeight, y = Math.max(0, S - D), A = y, F = Math.max(4, S - A), L = Jp, N = Xp, _ = Math.max(1, Math.round(x?.zigZag?.amplitudePx ?? L)), E = Math.max(1, Math.round(x?.zigZag?.stepXPx ?? Kp)), te = x?.zigZag?.heightPx ?? Qp, U = Math.max(4, Math.round(te ?? 0));
          let B, Q;
          if (x?.zigZag?.heightPx && x.zigZag.heightPx > 0) {
            const ee = Math.max(4, Math.min(F - 2, U));
            B = Math.max(1, Math.floor(ee / (2 * _))), Q = Math.max(0, Math.min(ee, B * 2 * _));
          } else typeof x?.zigZag?.cycles == "number" && x?.zigZag?.cycles > 0 ? (B = Math.max(1, Math.round(x.zigZag.cycles)), Q = B * 2 * _, Q = Math.min(Q, F - 2), B = Math.max(1, Math.floor(Q / (2 * _)))) : (B = N, Q = Math.min(F - 2, B * 2 * _), B = Math.max(1, Math.floor(Q / (2 * _))));
          const O = A + (F - Q) / 2, z = O + Q;
          let X = "M0,0";
          const R = Q > 0 ? Math.max(0, Math.floor((Q - _) / (2 * _))) : 0, re = Math.max(0, (Q - R * 2 * _) / 2), q = _ > 0 ? E * (re / _) : 0;
          re > 0 && (X += ` l${q},${re}`);
          for (let ee = 0; ee < R; ee++)
            X += ` l-${E},${_} l${E},${_}`;
          return re > 0 && (X += ` l-${q},${re}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: y, y2: O, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${O})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: X, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: z, y2: S, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${S})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
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
}, em = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: o = "2 4",
  className: a
}) => {
  const s = wn(), i = ln();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", a].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: s.yScale(c),
        y2: s.yScale(c),
        stroke: n,
        strokeDasharray: o
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
        strokeDasharray: o
      },
      d
    ))
  ] });
}, tm = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, lr = {
  color: tm
}, nm = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, So = {
  color: nm
}, rm = [
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
let Go = null, Yo = null, Vo = null, Fl = "optimized";
function om() {
  const e = { color: { ...So.color, ...lr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), a);
    if (typeof i == "string") return i;
  }, n = [];
  try {
    for (let o = 1; o <= 12; o++) {
      const a = `color.data-viz.categorical.${o}`, s = t(a);
      if (!s) throw new Error(`Missing token ${a}`);
      n.push(s);
    }
    return n;
  } catch {
    return rm;
  }
}
function am() {
  return Go || (Go = om()), Go;
}
function sm(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Zo(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function im(e, t, n) {
  const o = Zo(e), a = Zo(t), s = Zo(n), i = o * 0.4124 + a * 0.3576 + s * 0.1805, l = o * 0.2126 + a * 0.7152 + s * 0.0722, c = o * 0.0193 + a * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function lm(e, t, n) {
  let i = e / 95.047, l = t / 100, c = n / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = d(i), l = d(l), c = d(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function Rl(e) {
  const t = sm(e);
  if (!t) return null;
  const n = im(t.r, t.g, t.b);
  return lm(n.x, n.y, n.z);
}
function hi(e, t) {
  const n = e.L - t.L, o = e.a - t.a, a = e.b - t.b;
  return Math.sqrt(n * n + o * o + a * a);
}
function cm() {
  const e = am();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Rl(i));
  let n = 0, o = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += hi(l, t[f]), d++);
    const u = c / Math.max(1, d);
    u > o && (o = u, n = i);
  }
  const a = new Set(e.map((i, l) => l)), s = [];
  for (s.push(n), a.delete(n); a.size; ) {
    let i = Array.from(a)[0], l = -1;
    for (const c of a) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const p = hi(d, h);
          p < u && (u = p);
        }
      }
      u > l && (l = u, i = c);
    }
    s.push(i), a.delete(i);
  }
  return s.map((i) => e[i]);
}
function dm() {
  return Yo || (Yo = cm()), Yo;
}
function um(e, t, n) {
  const o = (e + 16) / 116, a = t / 500 + o, s = o - n / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(a) * 95.047, c = i(o) * 100, d = i(s) * 108.883;
  return { X: l, Y: c, Z: d };
}
function fm(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let o = e * 3.2406 + t * -1.5372 + n * -0.4986, a = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return o = Math.min(1, Math.max(0, i(o))), a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(o * 255), g: Math.round(a * 255), b: Math.round(s * 255) };
}
function hm(e, t, n) {
  return `#${[e, t, n].map((o) => o.toString(16).padStart(2, "0")).join("")}`;
}
function pm(e, t) {
  const n = Rl(e);
  if (!n) return e;
  const o = Math.min(100, Math.max(0, n.L + t)), { X: a, Y: s, Z: i } = um(o, n.a, n.b), l = fm(a, s, i);
  return hm(l.r, l.g, l.b);
}
function mm() {
  const e = dm(), n = [12, -12, 24, -24].map((a) => e.map((s) => pm(s, a))), o = [...e];
  return n.forEach((a) => o.push(...a)), o;
}
function gm() {
  return (!Vo || xm()) && (Vo = mm(), Bl = Fl), Vo;
}
let Bl = null;
function xm() {
  return Bl !== Fl;
}
function Pt(e) {
  const t = gm();
  return t[e % t.length];
}
let Dn = null, tr = null, nr = null, rr = null;
function bm() {
  const e = lr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Dn = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      Dn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    tr = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (tr[s] = i);
    });
    const o = e.severity || {}, a = e["org-level"] || {};
    rr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (rr[s] = i);
    }), nr = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (nr[s] = i);
    });
  }
}
function _o() {
  (!Dn || !tr || !nr || !rr) && bm();
}
function bn(e) {
  return _o(), Dn ? Dn[e % Dn.length] : "#212b32";
}
function ym(e) {
  return _o(), tr ? tr[e] : void 0;
}
function Or(e, t) {
  return ym(e) || bn(t);
}
const ha = ["low", "moderate", "high", "critical"];
let qo = null;
function vm() {
  const e = { color: { ...So.color, ...lr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), a) : typeof i == "string" ? i : void 0;
  }, n = {};
  return ha.forEach((o) => {
    const a = t(`color.data-viz.severity.${o}`);
    a && (n[o] = a);
  }), n;
}
function Hl() {
  return qo || (qo = vm()), qo;
}
function wm(e) {
  return Hl()[e.toLowerCase()];
}
function Sm(e, t) {
  return wm(e) || Hl()[ha[t % ha.length]] || Pt(t);
}
function _m(e) {
  return _o(), nr ? nr[e] : void 0;
}
function km(e, t) {
  return _m(e) || bn(t);
}
const pa = ["trust", "ambulance", "icb", "region"];
let Jo = null;
function Cm() {
  const e = { color: { ...So.color, ...lr.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), a) : typeof i == "string" ? i : void 0;
  }, n = {};
  return pa.forEach((o) => {
    const a = t(`color.data-viz.org-level.${o}`);
    a && (n[o] = a);
  }), n;
}
function zl() {
  return Jo || (Jo = Cm()), Jo;
}
function Nm(e) {
  return zl()[e.toLowerCase()];
}
function jm(e, t) {
  return Nm(e) || zl()[pa[t % pa.length]] || Pt(t);
}
function Mm(e) {
  return _o(), rr ? rr[e] : void 0;
}
function Im(e, t) {
  return Mm(e) || bn(t);
}
let Xo = null;
const Dm = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Tm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Lm() {
  const e = { color: { ...So.color, ...lr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const i = a.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, o = [];
  return Dm.forEach((a) => {
    const s = t(`color.data-viz.region.${a}`);
    s ? n[a] = s : o.push(a);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : o.length && console.warn(`[DataViz] Missing region colour tokens: ${o.join(", ")}.`)), n;
}
function $m() {
  return Xo || (Xo = Lm()), Xo;
}
function Am(e) {
  return $m()[Tm(e)];
}
function Tn(e, t) {
  return Am(e) || Pt(t);
}
const Ol = Z.createContext(null), cr = () => Z.useContext(Ol), i1 = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: o
}) => {
  const [a, s] = Z.useState(() => new Set(e)), i = n !== void 0, l = Z.useMemo(() => i ? new Set(n) : a, [i, n, a]), c = Z.useCallback((u) => {
    i || s(new Set(u)), o?.(Array.from(u));
  }, [i, o]), d = Z.useMemo(() => ({
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
  return /* @__PURE__ */ r.jsx(Ol.Provider, { value: d, children: t });
}, Ul = Z.createContext(null), en = () => Z.useContext(Ul), Em = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const o = wn(), a = cr(), [s, i] = Z.useState(null), l = Z.useRef(/* @__PURE__ */ new Map()), [c, d] = Z.useState([]), u = Z.useCallback(
    (D, S) => {
      l.current.set(D, S);
    },
    []
  ), f = Z.useCallback((D) => {
    l.current.delete(D);
  }, []), h = Z.useCallback(
    (D, S) => {
      if (!o) return;
      const { xScale: b, yScale: y } = o;
      let A = null, j = 1 / 0;
      l.current.forEach((F, L) => {
        F.forEach((N, _) => {
          const E = b(N.x), te = y(N.y), U = E - D, B = te - S, Q = Math.sqrt(U * U + B * B);
          Q < j && (j = Q, A = {
            seriesId: L,
            index: _,
            x: N.x,
            y: N.y,
            clientX: E,
            clientY: te
          });
        });
      }), A && j <= t ? i(A) : i(null);
    },
    [o, t]
  ), p = Z.useCallback(() => i(null), []);
  Z.useEffect(() => {
    if (!s) {
      d([]);
      return;
    }
    if (!o) return;
    const { xScale: D, yScale: S } = o, b = [];
    l.current.forEach((y, A) => {
      y.forEach((j, F) => {
        (s.x instanceof Date && j.x instanceof Date ? j.x.getTime() === s.x.getTime() : j.x === s.x) && b.push({
          seriesId: A,
          index: F,
          x: j.x,
          y: j.y,
          clientX: D(j.x),
          clientY: S(j.y)
        });
      });
    }), b.sort((y, A) => y.seriesId.localeCompare(A.seriesId)), d(b);
  }, [s, o]);
  const x = Z.useCallback(
    (D) => {
      if (!s) return;
      const S = l.current.get(s.seriesId);
      if (!S) return;
      let b = s.index + D;
      if (b < 0 || b >= S.length) {
        if (!n) return;
        b = (b + S.length) % S.length;
      }
      const y = S[b];
      if (!o) return;
      const { xScale: A, yScale: j } = o;
      i({
        seriesId: s.seriesId,
        index: b,
        x: y.x,
        y: y.y,
        clientX: A(y.x),
        clientY: j(y.y)
      });
    },
    [s, o, n]
  ), g = Z.useCallback(
    (D) => {
      let S = Array.from(l.current.keys());
      if (a && (S = S.filter((E) => !a.isHidden(E))), S.length === 0) return;
      if (!s) {
        const E = S[0], te = l.current.get(E);
        if (!te || !o) return;
        const { xScale: U, yScale: B } = o, Q = te[0];
        i({
          seriesId: E,
          index: 0,
          x: Q.x,
          y: Q.y,
          clientX: U(Q.x),
          clientY: B(Q.y)
        });
        return;
      }
      const b = S.indexOf(s.seriesId);
      if (b === -1) return;
      let y = b + D;
      if (y < 0 || y >= S.length) {
        if (!n) return;
        y = (y + S.length) % S.length;
      }
      const A = S[y], j = l.current.get(A);
      if (!j || !o) return;
      const F = Math.min(s.index, j.length - 1), L = j[F], { xScale: N, yScale: _ } = o;
      i({
        seriesId: A,
        index: F,
        x: L.x,
        y: L.y,
        clientX: N(L.x),
        clientY: _(L.y)
      });
    },
    [s, o, n, a]
  ), m = Z.useCallback(() => {
    let D = Array.from(l.current.keys());
    if (a && (D = D.filter((F) => !a.isHidden(F))), D.length === 0) return;
    const S = s ? s.seriesId : D[0], b = l.current.get(S);
    if (!b || b.length === 0 || !o) return;
    const y = b[0], { xScale: A, yScale: j } = o;
    i({
      seriesId: S,
      index: 0,
      x: y.x,
      y: y.y,
      clientX: A(y.x),
      clientY: j(y.y)
    });
  }, [s, o, a]), M = Z.useCallback(() => {
    let D = Array.from(l.current.keys());
    if (a && (D = D.filter((L) => !a.isHidden(L))), D.length === 0) return;
    const S = s ? s.seriesId : D[0], b = l.current.get(S);
    if (!b || b.length === 0 || !o) return;
    const y = b.length - 1, A = b[y], { xScale: j, yScale: F } = o;
    i({
      seriesId: S,
      index: y,
      x: A.x,
      y: A.y,
      clientX: j(A.x),
      clientY: F(A.y)
    });
  }, [s, o, a]), I = Z.useCallback(
    () => x(1),
    [x]
  ), T = Z.useCallback(
    () => x(-1),
    [x]
  ), C = Z.useCallback(
    () => g(1),
    [g]
  ), v = Z.useCallback(
    () => g(-1),
    [g]
  ), k = Z.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: I,
      focusPrevPoint: T,
      focusNextSeries: C,
      focusPrevSeries: v,
      focusFirstPoint: m,
      focusLastPoint: M
    }),
    [
      s,
      c,
      h,
      p,
      u,
      f,
      I,
      T,
      C,
      v,
      m,
      M
    ]
  );
  return /* @__PURE__ */ r.jsx(Ul.Provider, { value: k, children: e });
}, Pm = ({
  series: e,
  seriesIndex: t,
  palette: n,
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
  const h = wn();
  if (!h) return null;
  const { xScale: p, yScale: x } = h, m = cr()?.isHidden(e.id) ?? !1, M = m && l === "fade";
  if (m && l === "remove")
    return null;
  const I = en();
  Z.useEffect(() => {
    if (!I) return;
    const S = e.data.map((b) => ({ x: i(b), y: b.y }));
    return I.registerSeries(e.id, S), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, i]);
  const T = Z.useMemo(
    () => fa(
      e.data,
      (S) => p(i(S)),
      (S) => x(S.y),
      { smooth: d }
    ),
    [e.data, p, x, i, d]
  ), C = Z.useMemo(() => {
    if (!e.data.length) return "";
    const [S] = x.domain(), b = ua().x((y) => p(i(y))).y0(() => x(S)).y1((y) => x(y.y));
    return d && b.curve(zr), b(e.data) || "";
  }, [e.data, p, x, i, d]), v = f && f[t], k = e.color || v || (n === "region" ? Tn(e.id, t) : Pt(t)), D = n === "region" ? Or(e.id, t) : bn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: M ? 0.25 : 1,
      "aria-hidden": M ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: C,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: T,
            fill: "none",
            stroke: k,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        o && e.data.map((S, b) => {
          const y = p(i(S)), A = x(S.y), j = a ? 0 : -1, F = !M && (a && b === s || I?.focused?.seriesId === e.id && I.focused.index === b), L = () => {
            I && !M && I.setFocused({
              seriesId: e.id,
              index: b,
              x: i(S),
              y: S.y,
              clientX: y,
              clientY: A
            });
          }, N = () => {
            I && I.focused?.seriesId === e.id && I.focused.index === b && I.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: y,
              cy: A,
              r: F ? 5 : 3.5,
              stroke: F ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : D,
              strokeWidth: F ? 2 : 1,
              fill: F ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : k,
              className: "fdp-line-point",
              tabIndex: M ? -1 : j,
              "aria-label": `${e.label || e.id} ${i(S).toDateString()} value ${S.y}`,
              "data-series": e.id,
              "data-index": b,
              onMouseEnter: L,
              onFocus: L,
              onMouseLeave: N,
              onBlur: N
            },
            b
          );
        })
      ]
    }
  );
}, Fm = ({ polite: e = !0, format: t }) => {
  const n = en(), [o, a] = Z.useState(""), s = Z.useRef("");
  return Z.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let c;
    if (l && l.length > 1) {
      const d = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Rm(i.seriesId, i.x, i.y, i.index);
    if (c !== s.current) {
      s.current = c, a("");
      const d = setTimeout(() => a(c), 10);
      return () => clearTimeout(d);
    }
  }, [n?.focused, t]), /* @__PURE__ */ r.jsx(
    "div",
    {
      "aria-live": e ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 },
      children: o
    }
  );
};
function Rm(e, t, n, o) {
  const a = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${o + 1}, ${a}, value ${n}`;
}
const l1 = () => {
  const e = en(), t = ln();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: o } = e, { innerWidth: a, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), a), l = Math.min(Math.max(n.clientY, 0), s), c = i + 8, d = l - 8, u = o.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), x = p ? parseInt(p[0], 10) - 1 : 0, g = Pt(x >= 0 ? x : 0) || "#005eb8", m = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: m, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: m, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const I = o.map((D) => `${D.seriesId}: ${D.y}`), T = [h, ...I], C = T.reduce((D, S) => Math.max(D, S.length), 0), v = Math.max(90, C * 6.2 + 16), k = 16 * T.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: d - k, rx: 4, ry: 4, width: v, height: k, fill: "#212b32", opacity: 0.92 }),
        T.map((D, S) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - k + 6 + 16 * (S + 0.7), fill: "#fff", fontSize: 12, children: D }, S))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, c1 = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: o = !1,
  adjustStrokeForWhiteBackground: a = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: c
}) => {
  const d = cr(), u = !!(d && !o && !l && s === void 0), f = o || u, h = e || [], p = s !== void 0, [x, g] = Z.useState(new Set(i)), m = p ? new Set(s) : x, [M, I] = Z.useState(""), T = (C) => {
    if (u && d) {
      const j = d.isHidden(C);
      d.toggle(C);
      const L = h.find((_) => _.id === C)?.label || C, N = c ? c(C, j, L) : `${L} ${j ? "shown" : "hidden"}`;
      I(N);
      return;
    }
    if (!f) return;
    const v = new Set(m), k = v.has(C);
    k ? v.delete(C) : v.add(C), p || g(v);
    const D = h.filter((j) => !v.has(j.id)).map((j) => j.id), S = Array.from(v);
    l?.(D, S);
    const y = h.find((j) => j.id === C)?.label || C, A = c ? c(C, k, y) : `${y} ${k ? "shown" : "hidden"}`;
    I(A);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((C, v) => {
      const k = C.palette || t, D = C.color || (k === "region" ? Tn(C.id, v) : k === "severity" ? Sm(C.id, v) : k === "org-level" ? jm(C.id, v) : Pt(v));
      let S = C.stroke || (k === "region" ? Or(C.id, v) : k === "severity" ? km(C.id, v) : k === "org-level" ? Im(C.id, v) : bn(v));
      if (a && S) {
        const A = S.trim().toLowerCase();
        (A === "#fff" || A === "#ffffff" || A === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(A)) && (S = "#212b32");
      }
      const b = u && d ? d.isHidden(C.id) : m.has(C.id), y = f ? {
        "aria-pressed": !b,
        "aria-label": `${C.label} (${b ? "show" : "hide"})`,
        onClick: () => T(C.id)
      } : { "aria-label": C.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${b ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: D,
              backgroundImage: C.patternDataUrl ? `url(${C.patternDataUrl})` : void 0,
              backgroundSize: C.patternDataUrl ? "auto" : void 0,
              borderColor: S
            },
            ...y
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: C.label })
      ] }, C.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: M })
  ] });
}, d1 = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: o,
  areaOnly: a = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = wn();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, g = cr()?.isHidden(e.id) ?? !1, m = g && s === "fade";
  if (g && s === "remove") return null;
  const M = en();
  Z.useEffect(() => {
    if (!M) return;
    const D = e.data.map((S) => ({ x: o(S), y: S.y }));
    return M.registerSeries(e.id, D), () => M.unregisterSeries(e.id);
  }, [M, e.id, e.data, o]);
  const I = u && u[t], T = e.color || I || (n === "region" ? Tn(e.id, t) : Pt(t)), C = Z.useMemo(() => c && c.length === e.data.length ? fa(
    e.data,
    (D) => h(o(D)),
    (D) => {
      const S = e.data.indexOf(D);
      return p(c[S].y1);
    },
    { smooth: l }
  ) : fa(
    e.data,
    (D) => h(o(D)),
    (D) => p(D.y),
    { smooth: l }
  ), [e.data, c, h, p, o, l]), v = Z.useMemo(() => {
    if (c && c.length === e.data.length) {
      const A = ua().x((j) => h(o(j))).y0((j, F) => p(c[F].y0)).y1((j, F) => p(c[F].y1));
      return l && A.curve(zr), A(e.data) || "";
    }
    const [D, S] = p.domain();
    let b = i;
    b < D ? b = D : b > S && (b = S);
    const y = ua().x((A) => h(o(A))).y0(() => p(b)).y1((A) => p(A.y));
    return l && y.curve(zr), y(e.data) || "";
  }, [e.data, c, h, p, o, i, l]), k = Z.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: m ? 0.25 : 1,
      "aria-hidden": m ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: k, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: T, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: T, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: v,
            fill: d ? `url(#${k})` : T,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !a && /* @__PURE__ */ r.jsx("path", { d: C, fill: "none", stroke: T, strokeWidth: 1 })
      ]
    }
  );
}, u1 = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
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
  gapRatio: g = 0.15,
  minBarWidth: m,
  gradientFill: M = !0,
  gradientStrokeMatch: I = !0,
  opacity: T = 1,
  fadedOpacity: C = 0.25,
  flatFillOpacity: v = 1,
  colors: k
}) => {
  const D = Math.max(0, g), S = wn(), b = ln();
  if (!S || !b) return null;
  const { xScale: y, yScale: A } = S, F = cr()?.isHidden(e.id) ?? !1, L = F && f === "fade";
  if (F && f === "remove") return null;
  const N = en();
  Z.useEffect(() => {
    if (!N) return;
    const K = e.data.map((oe) => ({ x: a(oe), y: oe.y }));
    return N.registerSeries(e.id, K), () => N.unregisterSeries(e.id);
  }, [N, e.id, e.data, a]);
  const _ = typeof y.bandwidth == "function", E = _ ? y.bandwidth() : void 0, te = Z.useMemo(() => {
    if (E != null) return E;
    const K = p && p.length ? p : [e], oe = [];
    K.forEach((se) => {
      se.data.forEach((fe) => {
        const ce = y(a(fe));
        Number.isFinite(ce) && oe.push(ce);
      });
    });
    const de = oe.sort((se, fe) => se - fe);
    if (de.length <= 1) return 40;
    const V = [];
    for (let se = 1; se < de.length; se++)
      V.push(de[se] - de[se - 1]);
    return V.sort((se, fe) => se - fe), (V[Math.floor(V.length / 2)] || 40) * i;
  }, [e.data, p, y, a, i, E]), { basePerBar: U } = Z.useMemo(() => {
    if (_) {
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
    const K = e.barWidth ?? c, oe = Math.max(
      1,
      (te - l * (n - 1)) / n
    );
    if (d) {
      const de = p && p.length ? p : [e], V = [];
      de.forEach(
        ($e) => $e.data.forEach((Ie) => {
          const Ce = y(a(Ie));
          Number.isFinite(Ce) && V.push(Ce);
        })
      ), V.sort(($e, Ie) => $e - Ie);
      const ie = [];
      for (let $e = 1; $e < V.length; $e++)
        ie.push(V[$e] - V[$e - 1]);
      ie.sort(($e, Ie) => $e - Ie);
      const fe = (ie[Math.floor(ie.length / 2)] || te) * Math.min(1, Math.max(0.05, u)), ce = Math.max(
        1,
        (fe - l * (n - 1)) / n
      );
      return { basePerBar: K ? Math.min(K, ce) : ce };
    }
    return K ? { basePerBar: Math.min(K, oe) } : { basePerBar: oe };
  }, [
    _,
    te,
    l,
    n,
    c,
    e.barWidth,
    d,
    u,
    p,
    y,
    a
  ]), B = Z.useMemo(() => {
    if (_) return [];
    const K = [];
    return (p && p.length ? p : [e]).forEach(
      (de) => de.data.forEach((V) => {
        const ie = y(a(V));
        Number.isFinite(ie) && K.push(ie);
      })
    ), K.sort((de, V) => de - V), Array.from(new Set(K));
  }, [_, p, e, y, a]), Q = Z.useMemo(() => {
    if (_)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: b.innerWidth }
      ];
    const K = [];
    for (let oe = 0; oe < B.length; oe++) {
      const de = B[oe], V = oe === 0 ? 0 : (B[oe - 1] + de) / 2, ie = oe === B.length - 1 ? b.innerWidth : (de + B[oe + 1]) / 2;
      K.push({
        center: de,
        left: Math.max(0, V),
        right: Math.min(b.innerWidth, ie)
      });
    }
    return K;
  }, [_, B, b.innerWidth]), O = Z.useMemo(() => {
    if (_ || !Q.length)
      return;
    const K = Math.min(1, Math.max(0.05, i)), oe = Q.map((fe) => Math.max(2, fe.right - fe.left)), de = oe.map(
      (fe) => Math.max(2, Math.min(fe - 1, fe * K))
    );
    let V = Math.min(...de);
    if (m)
      if (n <= 1) {
        const fe = Math.min(...oe.map((ce) => ce - 1));
        fe >= m && V < m && (V = Math.min(fe, m));
      } else {
        const fe = Math.min(...oe.map((pe) => pe - 1)), ce = m * n + (n - 1) * (m * D);
        ce <= fe && V < ce && (V = ce);
      }
    if (n <= 1)
      return m && V < m && oe.every((ce) => ce >= m) ? { groupWidth: m, barWidth: m } : { groupWidth: V, barWidth: V };
    let ie = V / (n + (n - 1) * D);
    return ie < 1 && (ie = 1), m && ie < m && m * n + (n - 1) * (m * D) <= V && (ie = m), { groupWidth: ie * n + (n - 1) * (ie * D), barWidth: ie };
  }, [
    _,
    Q,
    i,
    n,
    D,
    m
  ]), z = k && k[t] ? k[t] : void 0, X = e.color || z || (o === "region" ? Tn(e.id, t) : Pt(t)), R = o === "region" ? Or(e.id, t) : bn(t), re = I && (e.color || z) ? X : R, q = Number.isFinite(A(0)) ? A(0) : A.range()[0], ee = Z.useId();
  return x && x.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: L ? C : T,
      "aria-hidden": L ? !0 : void 0,
      children: [
        M && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: ee,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: X, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: X,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: X,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((K, oe) => {
          const de = a(K), V = y(_ ? K.x : de);
          let ie, se;
          if (_)
            ie = te, se = V;
          else {
            const P = Q.find(
              (G) => Math.abs(G.center - V) < 0.5
            );
            if (!P || !O)
              ie = U, se = V - U / 2;
            else {
              const { groupWidth: G } = O;
              ie = G;
              let $ = V - G / 2;
              $ < P.left && ($ = P.left), $ + G > P.right && ($ = Math.max(P.left, P.right - G)), se = $;
            }
          }
          const fe = x[oe], ce = A(fe.y0), pe = A(fe.y1), $e = Math.min(ce, pe), Ie = Math.abs(pe - ce) || 1;
          if (!_ && m && ie < m) {
            const P = Q.find(
              (G) => Math.abs(G.center - V) < 0.5
            );
            if (P) {
              const G = Math.max(2, P.right - P.left - 1), $ = Math.min(G, m);
              $ > ie && (ie = $, se = Math.max(
                P.left,
                Math.min(P.right - ie, V - ie / 2)
              ));
            }
          }
          const Ce = !L && N?.focused?.seriesId === e.id && N.focused.index === oe, Y = () => {
            !N || L || N.setFocused({
              seriesId: e.id,
              index: oe,
              x: de,
              y: fe.y1 - fe.y0,
              clientX: se + ie / 2,
              clientY: $e
            });
          }, w = () => {
            N?.focused?.seriesId === e.id && N.focused.index === oe && N.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: se,
              y: $e,
              width: ie,
              height: Ie,
              fill: M ? `url(#${ee})` : X,
              ...M ? {} : { fillOpacity: v },
              stroke: Ce ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : M && I ? X : void 0,
              strokeWidth: Ce ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: L || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${fe.y1 - fe.y0}`,
              onMouseEnter: Y,
              onFocus: Y,
              onMouseLeave: w,
              onBlur: w
            },
            oe
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: L ? C : T,
      "aria-hidden": L ? !0 : void 0,
      children: [
        M && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: ee,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: X, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: X,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: X,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((K, oe) => {
            const V = k && k[oe] || (o === "region" ? Tn(String(K.x), oe) : Pt(oe)), ie = `${ee}-${oe}`;
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
        e.data.map((K, oe) => {
          const de = a(K), V = y(_ ? K.x : de);
          let ie, se;
          if (_) {
            const W = te;
            if (n <= 1)
              se = W, ie = V;
            else {
              se = Math.max(
                1,
                W / (n + (n - 1) * D)
              );
              const J = se * D, ne = se * n + J * (n - 1);
              ie = V + (W - ne) / 2 + t * (se + J);
            }
          } else {
            const W = Q.find((J) => J.center === V);
            if (!W || !O)
              se = U, ie = V - U / 2, m && se < m && (se = m, ie = V - se / 2);
            else {
              const { barWidth: J } = O;
              se = J;
              const ne = n > 1 ? J * D : 0, ae = se * n + ne * (n - 1);
              let ue = V - ae / 2;
              ue < W.left && (ue = W.left), ue + ae > W.right && (ue = Math.max(W.left, W.right - ae)), ie = ue + t * (se + ne);
            }
            if (m && se < m) {
              const J = Q.find(
                (ne) => Math.abs(ne.center - V) < 0.5
              );
              if (J) {
                const ne = Math.max(2, J.right - J.left - 1), ae = Math.min(ne, m);
                if (ae > se)
                  if (n <= 1)
                    se = ae, ie = Math.max(
                      J.left,
                      Math.min(J.right - se, V - se / 2)
                    );
                  else {
                    const ue = ae * D, he = ae * n + ue * (n - 1);
                    if (he <= J.right - J.left - 1) {
                      se = ae;
                      const me = he;
                      let ve = V - me / 2;
                      ve < J.left && (ve = J.left), ve + me > J.right && (ve = Math.max(
                        J.left,
                        J.right - me
                      )), ie = ve + t * (se + ue);
                    }
                  }
              }
            }
          }
          const fe = ie + se / 2, ce = A(K.y), pe = Math.min(q, ce), $e = Math.abs(q - ce), Ie = !L && N?.focused?.seriesId === e.id && N.focused.index === oe, Ce = () => {
            !N || L || N.setFocused({
              seriesId: e.id,
              index: oe,
              x: de,
              y: K.y,
              clientX: fe,
              clientY: ce
            });
          }, Y = () => {
            N?.focused?.seriesId === e.id && N.focused.index === oe && N.clear();
          }, w = h === "category" && k ? k[oe] : void 0, P = h === "category" ? w || (o === "region" ? Tn(String(K.x), oe) : Pt(oe)) : X, G = h === "category" ? `${ee}-${oe}` : ee, $ = M && I ? P : h === "category" ? o === "region" ? Or(String(K.x), oe) : bn(oe) : re, H = Ie ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : $ || P;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ie,
              y: pe,
              width: se,
              height: $e || 1,
              fill: M ? `url(#${G})` : P,
              ...M ? {} : { fillOpacity: v },
              stroke: H,
              strokeWidth: Ie ? 2 : 1,
              className: "fdp-bar",
              tabIndex: L || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${K.y}`,
              onMouseEnter: Ce,
              onFocus: Ce,
              onMouseLeave: Y,
              onBlur: Y
            },
            oe
          );
        })
      ]
    }
  );
}, f1 = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: o = 0.1,
  paddingOuter: a = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = ln(), c = t ?? l?.innerWidth ?? 0, d = n ?? l?.innerHeight ?? 0, u = Z.useMemo(() => e.flatMap((m) => m.data), [e]), f = Z.useMemo(() => {
    const m = /* @__PURE__ */ new Set();
    return u.forEach((M) => m.add(M.x)), Array.from(m);
  }, [u]), h = Z.useMemo(
    () => Math.max(0, ...u.map((m) => m.y)),
    [u]
  ), p = Z.useMemo(
    () => Ji().domain(f).range([0, c]).paddingInner(o).paddingOuter(a),
    [f, c, o, a]
  ), x = Z.useMemo(
    () => Lr().domain([0, h]).nice().range([d, 0]),
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
  return /* @__PURE__ */ r.jsx(ns.Provider, { value: g, children: s });
}, h1 = ({
  title: e,
  description: t,
  source: n,
  table: o,
  className: a,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = Z.useId(), d = s || c, u = t ? `${d}-desc` : void 0, f = n ? `${d}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: d,
      className: Br("fdp-chart fdp-chart--noscript", a),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Br(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(Qt, { ...o }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(Qt, { ...o }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, p1 = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: o }) => {
  const a = Z.useRef(null);
  return Z.useEffect(() => {
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
    if (n > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: a, children: o });
}, Bm = ({
  label: e,
  value: t,
  unit: n,
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
  announceDelta: g = !0,
  visual: m
}) => {
  const M = Z.useId(), I = x || M, T = `${I}-label`, C = `${I}-value`, v = `${I}-delta`, k = typeof t == "number" && !Number.isNaN(t), D = d ? "—" : u ? "" : k ? f ? f(t) : t.toLocaleString() : t;
  let S, b = "", y = "";
  if (o && !d && !u) {
    S = o.direction || (o.value > 0 ? "up" : o.value < 0 ? "down" : "neutral");
    const A = Math.abs(o.value), j = S === "up" ? `+${A}` : S === "down" ? `-${A}` : "0", F = o.isPercent ? "%" : "";
    if (b = `${j}${F}`, o.ariaLabel)
      y = o.ariaLabel;
    else {
      const L = o.invert ? S === "down" : S === "up";
      y = `${S === "neutral" ? "no change" : S === "up" ? "up" : "down"} ${A}${F}${S === "neutral" ? "" : L ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Br(
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
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: T, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: C, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: D }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          o && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: v,
              "aria-label": y,
              className: Br(
                "fdp-metric-card__delta",
                S && `fdp-metric-card__delta--${S}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: b }),
                o.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: o.period })
              ]
            }
          ) }),
          c && c.length > 0 && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        m && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: m }),
        g && o && !o.ariaLabel && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: y })
      ] })
    }
  );
};
var dt = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(dt || {}), Wl = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Wl || {}), an = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(an || {}), Re = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Re || {});
const rs = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
rs.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const Hm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, zm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Gl = rs.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: Hm[t],
    category: zm[t],
    participatesInRanking: !0
  }, e),
  {}
);
rs.map(
  (e) => Gl[e]
);
var or = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(or || {}), sn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(sn || {}), Yl = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Yl || {});
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
function ko(e) {
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
function Co(e) {
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
function Vl(e) {
  switch (e) {
    case sn.Pass:
      return "Target met";
    case sn.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Om(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const o = Math.abs((n - e) / t);
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
function Zl(e) {
  return e ? Tt[e]?.token ?? Tt.neither.token : Tt.neither.token;
}
function Um(e) {
  return e ? Tt[e]?.hex ?? Tt.neither.hex : Tt.neither.hex;
}
var hn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(hn || {});
const Wm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Gm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var ut = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ut || {}), Pe = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Pe || {}), _t = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(_t || {}), Me = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Me || {});
const Ym = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, o = parseInt(t.slice(2, 4), 16) / 255, a = parseInt(t.slice(4, 6), 16) / 255, s = [n, o, a].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, No = {
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
Object.values(No).forEach((e) => {
  e.text || (e.text = Ym(e.hex));
});
const ql = (e) => No[e], os = (e) => No[e].judgement || "none", pi = {
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
function Vm(e, t) {
  let n;
  return e === "common_cause" ? n = pi.common : n = pi.special[t === "lower" ? "lower" : "higher"], n.map((o) => ({ ...o }));
}
let ma = null;
try {
  ma = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const yt = (e, t) => {
  if (!ma) return t;
  const n = e.split(".");
  let o = ma;
  for (const s of n) {
    if (o == null) break;
    o = o[s];
  }
  const a = o;
  return a == null ? t : typeof a == "string" || typeof a == "number" ? String(a) : a.$value != null ? String(a.$value) : a.value != null ? String(a.value) : t;
}, jo = () => ({
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
}), Mo = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, Io = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, Jl = () => yt(Mo.improvement, Io.improvement), Xl = () => yt(Mo.concern, Io.concern), Zm = () => yt(Mo.noJudgement, Io.noJudgement), dn = () => yt(Mo.common, Io.common);
function yr(e) {
  switch (e) {
    case Re.Improvement:
      return Jl();
    case Re.Concern:
      return Xl();
    case Re.Neither:
    case Re.Suppressed:
    default:
      return dn();
  }
}
function Kl(e) {
  switch (e) {
    case Me.SpecialCauseImproving:
      return Jl();
    case Me.SpecialCauseDeteriorating:
      return Xl();
    case Me.SpecialCauseNoJudgement:
      return Zm();
    case Me.CommonCause:
    default:
      return dn();
  }
}
var Nt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Nt || {}), Oe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Oe || {}), je = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(je || {}), rt = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(rt || {}), pn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(pn || {}), $t = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))($t || {}), $n = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))($n || {}), jn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(jn || {}), xt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(xt || {}), Ft = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Ft || {}), At = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(At || {}), Ur = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Ur || {}), Wr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Wr || {});
const nn = {
  [rt.SinglePoint]: 1,
  [rt.TwoSigma]: 2,
  [rt.Shift]: 3,
  [rt.Trend]: 4
}, mi = 3.267, qm = 2.66, gi = 0.2777;
function Ae(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Mn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function xi(e, t) {
  const n = new Array(e.length).fill(null);
  let o = null;
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    if (!(t[a] || !Ae(s))) {
      if (o !== null) {
        const i = e[o];
        Ae(i) && (n[a] = Math.abs(s - i));
      }
      o = a;
    }
  }
  return n;
}
function bi(e, t) {
  const n = e.filter(Ae);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let o = n.slice();
  if (t) {
    const s = Mn(o), i = mi * s;
    o = o.filter((l) => l <= i);
  }
  const a = Mn(o);
  return { mrMean: a, mrUcl: mi * a };
}
function yi(e, t) {
  if (!Ae(e) || !Ae(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = qm * t, o = 2 / 3 * n, a = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + o,
    lowerTwoSigma: e - o,
    upperOneSigma: e + a,
    lowerOneSigma: e - a
  };
}
function Jm(e, t, n, o) {
  if (e === Nt.T) {
    const f = t.map((S) => Ae(S) && S > 0 ? Math.pow(S, gi) : null), h = xi(f, n), p = bi(h, o), x = f.filter((S, b) => !n[b] && Ae(S)), g = x.length ? Mn(x) : NaN, m = yi(g, p.mrMean), M = (S) => Ae(S) && S > 0 ? Math.pow(S, 1 / gi) : null, I = Ae(m.upperProcessLimit) ? M(m.upperProcessLimit) : null, T = Ae(m.lowerProcessLimit) && m.lowerProcessLimit > 0 ? M(m.lowerProcessLimit) : null, C = Ae(m.upperTwoSigma) ? M(m.upperTwoSigma) : null, v = Ae(m.lowerTwoSigma) && m.lowerTwoSigma > 0 ? M(m.lowerTwoSigma) : null, k = Ae(m.upperOneSigma) ? M(m.upperOneSigma) : null, D = Ae(m.lowerOneSigma) && m.lowerOneSigma > 0 ? M(m.lowerOneSigma) : null;
    return {
      mean: Ae(g) && g > 0 ? M(g) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: I,
      lowerProcessLimit: T,
      upperTwoSigma: C,
      lowerTwoSigma: v,
      upperOneSigma: k,
      lowerOneSigma: D
    };
  }
  if (e === Nt.G) {
    const f = t.filter((A, j) => !n[j] && Ae(A)), h = f.length ? Mn(f) : NaN, p = Ae(h) ? 1 / (h + 1) : NaN, x = (A) => {
      if (!Ae(p) || p <= 0 || p >= 1) return NaN;
      const j = Math.ceil(Math.log(1 - A) / Math.log(1 - p)) - 1;
      return Math.max(0, j);
    }, g = 135e-5, m = 1 - 135e-5, M = 0.02275, I = 1 - 0.02275, T = 0.158655, C = 1 - 0.158655, v = x(m), k = x(g), D = x(I), S = x(M), b = x(C), y = x(T);
    return {
      mean: Ae(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Ae(v) ? v : null,
      lowerProcessLimit: Ae(k) ? k : null,
      upperTwoSigma: Ae(D) ? D : null,
      lowerTwoSigma: Ae(S) ? S : null,
      upperOneSigma: Ae(b) ? b : null,
      lowerOneSigma: Ae(y) ? y : null
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
  const a = xi(t, n), s = a.filter(Ae), i = s.length ? Mn(s) : NaN, l = Ae(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, x) => {
      if (n[x] || !Ae(p)) return h;
      if (!o)
        return h.push(p), h;
      const g = a[x];
      return (g === null || !Ae(l) || Ae(g) && g <= l) && h.push(p), h;
    }, []);
    c = f.length ? Mn(f) : NaN;
  }
  const d = bi(a, o), u = yi(c, d.mrMean);
  return {
    mean: c,
    mr: a,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function Xm(e, t) {
  const n = e.map((c, d) => d).filter((c) => !e[c].ghost && Ae(e[c].value)), o = (c) => e[c], a = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const c of n) {
    const d = o(c);
    if (!Ae(d.mean) || !Ae(d.value) ? (i = [], l = []) : d.value > d.mean ? (i.push(c), l = []) : d.value < d.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= a)
      for (const u of i) o(u).shiftUp = !0;
    if (l.length >= a)
      for (const u of l) o(u).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const u = n.slice(c, c + 3).map(o);
    if (!u.every((C) => Ae(C.value) && Ae(C.mean)))
      continue;
    const f = u[0].mean, h = u.every((C) => C.value > f), p = u.every((C) => C.value < f);
    if (!h && !p)
      continue;
    const x = u[0].upperTwoSigma ?? 1 / 0, g = u[0].lowerTwoSigma ?? -1 / 0, m = u[0].upperProcessLimit ?? 1 / 0, M = u[0].lowerProcessLimit ?? -1 / 0, I = u.filter((C) => t.twoSigmaIncludeAboveThree ? C.value > x : C.value > x && C.value <= m), T = u.filter((C) => t.twoSigmaIncludeAboveThree ? C.value < g : C.value < g && C.value >= M);
    h && I.length >= 2 && I.forEach((C) => C.twoSigmaUp = !0), p && T.length >= 2 && T.forEach((C) => C.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const u = n.slice(c, c + 5).map(o);
      if (!u.every((I) => Ae(I.value) && Ae(I.mean)))
        continue;
      const f = u[0].mean, h = u.every((I) => I.value > f), p = u.every((I) => I.value < f);
      if (!h && !p)
        continue;
      const x = u[0].upperOneSigma ?? 1 / 0, g = u[0].lowerOneSigma ?? -1 / 0, m = u.filter((I) => I.value > x), M = u.filter((I) => I.value < g);
      h && m.length >= 4 && m.forEach((I) => I.fourOfFiveUp = !0), p && M.length >= 4 && M.forEach((I) => I.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - s; c++) {
    const d = n.slice(c, c + s), u = d.map(o);
    if (!u.every((p) => Ae(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => o(p).trendUp = !0), h && d.forEach((p) => o(p).trendDown = !0);
  }
}
function Ql(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: rt.SinglePoint,
    rank: nn[rt.SinglePoint]
  }), e.singlePointDown && n.push({
    id: rt.SinglePoint,
    rank: nn[rt.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: rt.TwoSigma,
    rank: nn[rt.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: rt.TwoSigma,
    rank: nn[rt.TwoSigma]
  }), e.shiftUp && t.push({ id: rt.Shift, rank: nn[rt.Shift] }), e.shiftDown && n.push({ id: rt.Shift, rank: nn[rt.Shift] }), e.trendUp && t.push({ id: rt.Trend, rank: nn[rt.Trend] }), e.trendDown && n.push({ id: rt.Trend, rank: nn[rt.Trend] });
  const o = t.reduce((i, l) => Math.max(i, l.rank), 0), a = n.reduce((i, l) => Math.max(i, l.rank), 0), s = o > a ? pn.Upwards : a > o ? pn.Downwards : pn.Same;
  return { up: t, dn: n, upMax: o, dnMax: a, primeDirection: s };
}
function vi(e, t) {
  const n = t === Oe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Oe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, o = t === Oe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Oe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: o };
}
function wi(e, t, n, o = !1, a, s, i = !1) {
  const { up: l, dn: c, upMax: d, dnMax: u, primeDirection: f } = Ql(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Km({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: o, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: a, ruleHierarchy: s }), t === Oe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? je.ImprovementHigh : e.specialCauseConcernValue !== null ? je.ConcernLow : je.CommonCause : t === Oe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? je.ImprovementLow : e.specialCauseConcernValue !== null ? je.ConcernHigh : je.CommonCause : e.variationIcon = je.CommonCause;
  const x = e.specialCauseImprovementValue !== null ? $t.Up : e.specialCauseConcernValue !== null ? $t.Down : void 0, g = x === $t.Up ? d : x === $t.Down ? u : Math.max(d, u);
  e.primeRank = g || void 0;
  const m = x === $t.Up ? l.find((M) => M.rank === g) : x === $t.Down ? c.find((M) => M.rank === g) : void 0;
  return e.primeRuleId = m?.id, { originalImprovement: h, originalConcern: p };
}
function Km(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: o,
    preferImprovementWhenConflict: a,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? pn.Same,
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
  const d = a ? jn.PreferImprovement : l ?? jn.SqlPrimeThenRule;
  if (d === jn.PreferImprovement) {
    n === Oe.Up ? t.specialCauseConcernValue = null : n === Oe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === jn.RuleHierarchy) {
    const u = c ?? [rt.Trend, rt.Shift, rt.TwoSigma, rt.SinglePoint], { up: f, dn: h } = Ql(t);
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
        (n === Oe.Up || n === Oe.Down) && (o === $n.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === pn.Upwards ? n === Oe.Up ? t.specialCauseConcernValue = null : n === Oe.Down && (t.specialCauseImprovementValue = null) : i === pn.Downwards ? n === Oe.Up ? t.specialCauseImprovementValue = null : n === Oe.Down && (t.specialCauseConcernValue = null) : o === $n.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var ga = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(ga || {});
function Qm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function eg(e) {
  const t = Qm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function Si(e) {
  const t = [], n = (i, l, c) => ({
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
      const M = e[d];
      if (!M || M.value == null || M.ghost || !(l === "Up" ? M.trendUp : M.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, x = 1 / 0, g = -1 / 0, m = 0;
    for (let M = c; M <= u; M++) {
      const I = e[M];
      if (I.value == null) continue;
      const T = I.value - (I.mean ?? 0), C = eg(T);
      if (!C) {
        h !== void 0 && (a(f, h, M - 1, p, x, g, m, l), h = void 0, p = void 0, x = 1 / 0, g = -1 / 0, m = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: x, maxV: g, maxAbsDelta: m } = (() => {
          const v = n(M, C, I.value);
          return {
            segStart: v.segStart,
            segSide: v.segSide,
            minV: v.minV,
            maxV: v.maxV,
            maxAbsDelta: Math.abs(T)
          };
        })());
      else if (C !== p)
        a(f, h, M - 1, p, x, g, m, l), { segStart: h, segSide: p, minV: x, maxV: g, maxAbsDelta: m } = (() => {
          const v = n(M, C, I.value);
          return {
            segStart: v.segStart,
            segSide: v.segSide,
            minV: v.minV,
            maxV: v.maxV,
            maxAbsDelta: Math.abs(T)
          };
        })();
      else {
        const v = o(I.value, Math.abs(T), x, g, m);
        x = v.minV, g = v.maxV, m = v.maxAbsDelta;
      }
    }
    h !== void 0 && a(f, h, u, p, x, g, m, l), t.push({ trendDirection: l, start: c, end: u, segments: f }), s = u + 1;
  }
  return t;
}
function tg(e) {
  if (e === Oe.Up) return "Above";
  if (e === Oe.Down) return "Below";
}
function ng(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function _i(e, t) {
  const n = t.strategy ?? xt.CrossingAfterFavourable, o = tg(t.metricImprovement), a = ng(o), s = [];
  for (const i of e) {
    if (!o) {
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
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (n === xt.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === xt.CrossingAfterFavourable) {
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
    if (n === xt.CrossingAfterUnfavourable) {
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
    if (n === xt.ExtremeFavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === xt.ExtremeUnfavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      s.push(c);
      continue;
    }
    if (n === xt.FirstFavourable) {
      const l = i.segments.find((c) => c.side === o);
      l && s.push(l);
      continue;
    }
    if (n === xt.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && s.push(l);
      continue;
    }
    if (n === xt.LongestFavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === xt.LongestUnfavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      s.push(c);
      continue;
    }
    if (n === xt.LastFavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === xt.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var nt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(nt || {}), Rn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Rn || {});
function rg(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function dr(e, t) {
  const n = t.metricImprovement, o = t.trendVisualMode ?? "Ungated", a = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = rg(s);
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
        if (o === "Ungated" && n !== Oe.Neither) {
          if (i && !l)
            return n === Oe.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Oe.Down ? "Improvement" : "Concern";
        }
        return a ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function og(e, t, n) {
  const o = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let a = dr(e, {
    metricImprovement: t,
    trendVisualMode: Rn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (o !== "RecalcCrossing" || t === Oe.Neither) return a;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= a.length) return;
    const p = a[f];
    (p === nt.Common || p === nt.NoJudgement) && (a[f] = h);
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
    for (let k = f - 1; k >= 0; k--) {
      const D = e[k];
      if (D.partitionId !== h.partitionId) break;
      if (typeof D.mean == "number") {
        m = D.mean;
        break;
      }
    }
    let M = null;
    for (let k = f; k < e.length; k++) {
      const D = e[k];
      if (D.partitionId !== p.partitionId) break;
      if (typeof D.mean == "number") {
        M = D.mean;
        break;
      }
    }
    if (m == null && (m = d(h.partitionId ?? null)), M == null && (M = d(p.partitionId ?? null)), m == null || M == null)
      continue;
    const I = M - m, T = t === Oe.Up ? I > 0 : I < 0, C = T ? nt.Improvement : nt.Concern, v = l === "Same" ? C : T ? nt.Concern : nt.Improvement;
    for (let k = 1; k <= s; k++) {
      const D = f - k;
      if (D < x) break;
      c(D, v);
    }
    for (let k = 0; k < i; k++) {
      const D = f + k;
      if (D > g) break;
      c(D, C);
    }
  }
  return a;
}
function ec(e) {
  if (!e) return {};
  if (typeof e == "object" && ("minimumPoints" in e || "shiftPoints" in e || "trendPoints" in e))
    return e;
  const t = e, n = {};
  if (t.thresholds) {
    const o = t.thresholds;
    o.minimumPoints != null && (n.minimumPoints = o.minimumPoints), o.shiftPoints != null && (n.shiftPoints = o.shiftPoints), o.trendPoints != null && (n.trendPoints = o.trendPoints), o.excludeMovingRangeOutliers != null && (n.excludeMovingRangeOutliers = o.excludeMovingRangeOutliers);
  }
  if (t.eligibility && t.eligibility.chartLevel != null && (n.chartLevelEligibility = t.eligibility.chartLevel), t.parity && (t.parity.trendAcrossPartitions != null && (n.trendAcrossPartitions = t.parity.trendAcrossPartitions), t.parity.twoSigmaIncludeAboveThree != null && (n.twoSigmaIncludeAboveThree = t.parity.twoSigmaIncludeAboveThree), t.parity.enableFourOfFiveRule != null && (n.enableFourOfFiveRule = t.parity.enableFourOfFiveRule)), t.conflict && (t.conflict.preferImprovementWhenConflict != null && (n.preferImprovementWhenConflict = t.conflict.preferImprovementWhenConflict), t.conflict.preferTrendWhenConflict != null && (n.preferTrendWhenConflict = t.conflict.preferTrendWhenConflict), t.conflict.strategy != null && (n.conflictStrategy = t.conflict.strategy), t.conflict.ruleHierarchy != null && (n.ruleHierarchy = t.conflict.ruleHierarchy), t.conflict.metricRuleOnTie != null && (n.metricConflictRule = t.conflict.metricRuleOnTie)), t.trend?.segmentation) {
    const o = t.trend.segmentation;
    o.mode != null && (n.trendSegmentationMode = o.mode), o.favourableSegmentation != null && (n.trendFavourableSegmentation = o.favourableSegmentation), o.strategy != null && (n.trendSegmentationStrategy = o.strategy), o.dominatesHighlightedWindow != null && (n.trendDominatesHighlightedWindow = o.dominatesHighlightedWindow);
  }
  return n;
}
function ur(e) {
  const { chartType: t, metricImprovement: n, data: o } = e, a = ec(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: $n.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: jn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Ft.Off,
    trendSegmentationStrategy: xt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...a
  }, i = a?.trendSegmentationMode || (a?.trendFavourableSegmentation === !0 ? Ft.Always : a?.trendFavourableSegmentation === !1 ? Ft.Off : s.trendSegmentationMode), l = o.map((g, m) => ({
    rowId: m + 1,
    x: g.x,
    value: Ae(g.value) ? g.value : null,
    ghost: !!g.ghost,
    baseline: !!g.baseline,
    target: Ae(g.target) ? g.target : null
  })), c = [];
  let d = [];
  for (const g of l)
    g.baseline && d.length && (c.push(d), d = []), d.push(g);
  d.length && c.push(d);
  const u = [], f = (s.trendFavourableSegmentation || i !== Ft.Off) && !s.preferImprovementWhenConflict, h = l.filter((g) => !g.ghost && Ae(g.value)).length, p = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let x = 0;
  for (const g of c) {
    x++;
    const m = g.map((v) => v.value), M = g.map((v) => v.ghost), I = Jm(
      t,
      m,
      M,
      !!s.excludeMovingRangeOutliers
    ), T = g.map((v, k) => {
      const D = !v.ghost && Ae(v.value) ? m.slice(0, k + 1).filter((b, y) => !M[y] && Ae(b)).length : 0, S = p ? !0 : D >= s.minimumPoints;
      return {
        rowId: v.rowId,
        x: v.x,
        value: Ae(v.value) ? v.value : null,
        ghost: v.ghost,
        partitionId: x,
        pointRank: D,
        mean: (S || p) && Ae(I.mean) ? I.mean : null,
        upperProcessLimit: S || p ? I.upperProcessLimit : null,
        lowerProcessLimit: S || p ? I.lowerProcessLimit : null,
        upperTwoSigma: S || p ? I.upperTwoSigma : null,
        lowerTwoSigma: S || p ? I.lowerTwoSigma : null,
        upperOneSigma: S || p ? I.upperOneSigma : null,
        lowerOneSigma: S || p ? I.lowerOneSigma : null,
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
    for (const v of T)
      v.ghost || !Ae(v.value) || v.mean === null || (Ae(v.upperProcessLimit) && v.value > v.upperProcessLimit && (v.singlePointUp = !0), Ae(v.lowerProcessLimit) && v.value < v.lowerProcessLimit && (v.singlePointDown = !0));
    Xm(T, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((v) => {
      const k = v.some(
        (A) => (A.singlePointUp || A.twoSigmaUp || A.shiftUp || A.trendUp) && (A.singlePointDown || A.twoSigmaDown || A.shiftDown || A.trendDown)
      );
      if (i === Ft.Off || i === Ft.AutoWhenConflict && !k)
        return;
      const D = Si(v), S = _i(D, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), b = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
      for (const A of S)
        for (let j = A.start; j <= A.end; j++)
          A.trendDirection === ga.Up ? b.add(j) : y.add(j);
      v.forEach((A, j) => {
        A.trendUp = b.has(j) ? A.trendUp : !1, A.trendDown = y.has(j) ? A.trendDown : !1, s.trendDominatesHighlightedWindow && (b.has(j) ? (A.singlePointDown = !1, A.twoSigmaDown = !1, A.shiftDown = !1) : y.has(j) && (A.singlePointUp = !1, A.twoSigmaUp = !1, A.shiftUp = !1));
      });
    })(T);
    for (const v of T) {
      if (v.ghost || !Ae(v.value) || v.mean === null) {
        u.push(v);
        continue;
      }
      const { aligned: k, opposite: D } = vi(
        v,
        n
      );
      if (v.specialCauseImprovementValue = k ? v.value : null, v.specialCauseConcernValue = D ? v.value : null, n === Oe.Neither) {
        const S = v.singlePointUp || v.twoSigmaUp || v.shiftUp || v.trendUp, b = v.singlePointDown || v.twoSigmaDown || v.shiftDown || v.trendDown;
        v.variationIcon = S ? je.NeitherHigh : b ? je.NeitherLow : je.CommonCause;
      } else
        wi(v, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      u.push(v);
    }
  }
  if (s.trendAcrossPartitions) {
    const g = u.map((m, M) => ({ idx: M, r: m })).filter(({ r: m }) => !m.ghost && Ae(m.value));
    if (g.length >= s.trendPoints)
      for (let m = 0; m <= g.length - s.trendPoints; m++) {
        const M = g.slice(m, m + s.trendPoints).map((v) => v.idx), I = M.map((v) => u[v]);
        if (!I.every((v) => Ae(v.value))) continue;
        let T = !0, C = !0;
        for (let v = 1; v < I.length && (I[v].value > I[v - 1].value || (T = !1), I[v].value < I[v - 1].value || (C = !1), !(!T && !C)); v++)
          ;
        T && M.forEach((v) => u[v].trendUp = !0), C && M.forEach((v) => u[v].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const g = u.some(
        (m) => (m.singlePointUp || m.twoSigmaUp || m.shiftUp || m.trendUp) && (m.singlePointDown || m.twoSigmaDown || m.shiftDown || m.trendDown)
      );
      if (i === Ft.Always || i === Ft.AutoWhenConflict && g) {
        const m = Si(u), M = _i(m, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), I = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
        for (const C of M)
          for (let v = C.start; v <= C.end; v++)
            C.trendDirection === ga.Up ? I.add(v) : T.add(v);
        u.forEach((C, v) => {
          C.trendUp = I.has(v) ? C.trendUp : !1, C.trendDown = T.has(v) ? C.trendDown : !1, s.trendDominatesHighlightedWindow && (I.has(v) ? (C.singlePointDown = !1, C.twoSigmaDown = !1, C.shiftDown = !1) : T.has(v) && (C.singlePointUp = !1, C.twoSigmaUp = !1, C.shiftUp = !1));
        });
      }
    }
    for (const g of u) {
      if (g.ghost || !Ae(g.value) || g.mean === null || n === Oe.Neither) continue;
      const { aligned: m, opposite: M } = vi(g, n);
      g.specialCauseImprovementValue = m ? g.value : null, g.specialCauseConcernValue = M ? g.value : null, wi(g, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function as(e, t) {
  const n = ur(e), o = dr(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Rn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), a = t?.boundaryWindows;
  if (!a || a.mode !== "RecalcCrossing") return { rows: n.rows, visuals: o };
  const s = a.directionOverride ?? e.metricImprovement, i = og(n.rows, s, a), l = o.map((c, d) => {
    const u = i[d];
    if (c === nt.Common || c === nt.NoJudgement) {
      if (u === nt.Improvement) return nt.Improvement;
      if (u === nt.Concern) return nt.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: l };
}
var tc = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(tc || {});
function ag(e, t, n) {
  const o = n?.trendVisualMode ?? Rn.Ungated, a = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: c } = as(e, {
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
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = nt.Common), { rows: l, visuals: d };
}
const nc = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: $n.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function sg(e) {
  return { ...nc, ...e ?? {} };
}
var ht = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ht || {}), mn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(mn || {}), ar = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(ar || {});
const xa = (e) => {
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
  const a = {
    [_t.Improving]: Me.SpecialCauseImproving,
    [_t.Deteriorating]: Me.SpecialCauseDeteriorating,
    [_t.No_Judgement]: Me.SpecialCauseNoJudgement,
    [_t.None]: Me.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === _t.Improving ? s = n.polarity === ut.LowerIsBetter ? Pe.Lower : Pe.Higher : n.judgement === _t.Deteriorating ? s = n.polarity === ut.LowerIsBetter ? Pe.Higher : Pe.Lower : s = n.trend ?? Pe.Higher, { state: a, direction: s, polarity: n.polarity };
};
function rc(e, t) {
  const { state: n, direction: o, polarity: a } = xa(e), s = os(n), i = o === Pe.Higher ? "above" : "below", l = o === Pe.Higher ? "upwards" : "downwards", c = (() => {
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
    c,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const Ko = (e, t, n, o, a, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
  o && /* @__PURE__ */ r.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  a && /* @__PURE__ */ r.jsx("linearGradient", { id: n, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: s.map((i) => /* @__PURE__ */ r.jsx(
    "stop",
    {
      offset: i.offset,
      stopColor: e,
      stopOpacity: parseFloat(i.opacity)
    },
    i.offset
  )) })
] }), ss = ({
  data: e,
  precomputed: t,
  improvementDirection: n,
  size: o = 44,
  ariaLabel: a,
  showLetter: s = !0,
  dropShadow: i = !0,
  gradientWash: l = !1,
  variant: c = mn.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = ar.Polarity,
  letterOverride: f,
  ...h
}) => {
  const p = kr(), x = kr(), {
    start: g,
    mid: m,
    end: M,
    triStart: I,
    triMid: T,
    triEnd: C
  } = jo(), { state: v, direction: k, polarity: D, ariaInput: S } = Ee(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const X = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: n ?? Oe.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Me.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: R, direction: re, polarity: q } = xa(X);
      return { state: R, direction: re, polarity: q, ariaInput: X };
    }
    const { state: Q, direction: O, polarity: z } = xa(e);
    return { state: Q, direction: O, polarity: z, ariaInput: e };
  }, [e, t, n]), b = Ee(() => ql(v), [v]), y = Ee(() => os(v), [v]), A = y === _t.Improving || y === _t.Deteriorating;
  let j = "";
  s && A && (u === ar.Polarity ? D === ut.HigherIsBetter ? j = "H" : D === ut.LowerIsBetter ? j = "L" : j = "" : j = k === Pe.Higher ? "H" : "L"), f !== void 0 && (j = f);
  const F = v !== Me.CommonCause, L = v === Me.SpecialCauseNoJudgement, N = yt("common-cause", "#A6A6A6"), _ = F ? b.hex : N, E = Ee(
    () => Vm(v, k),
    [v, k]
  ), te = a || `${b.label}${j ? k === Pe.Higher ? " – Higher" : " – Lower" : ""}`, U = rc(S);
  if (c === mn.TriangleWithRun) {
    const X = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], R = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let re = null;
    v === Me.SpecialCauseImproving || v === Me.SpecialCauseDeteriorating ? re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (k === Pe.Higher ? X : R).map((ce) => ce.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 6,
        transform: k === Pe.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : v === Me.SpecialCauseNoJudgement && (re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: k === Pe.Higher ? X.map((ce) => ce.join(",")).join(" ") : R.map((ce) => ce.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 6,
        transform: k === Pe.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const q = Math.max(0, Math.min(5, Math.floor(d || 0))), ee = v === Me.CommonCause ? 160 : k === Pe.Higher ? 220 : 70, K = 10, oe = 26, de = 150 - 2 * oe, V = v === Me.CommonCause ? N : Kl(v), ie = Array.from({ length: 5 }).map((ce, pe) => {
      const Ie = (v === Me.SpecialCauseImproving || v === Me.SpecialCauseDeteriorating) && pe >= 5 - q ? V : N;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: de + pe * oe,
          cy: ee,
          r: K,
          fill: Ie,
          stroke: Ie,
          strokeWidth: 1
        },
        pe
      );
    }), se = Ko(
      b.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: I },
        { offset: "75%", opacity: T },
        { offset: "100%", opacity: C }
      ]
    ), fe = v === Me.CommonCause || k === Pe.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: o,
        height: o,
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
              stroke: b.hex,
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
            j && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: k === Pe.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: j
              }
            ),
            ie
          ] })
        ]
      }
    );
  }
  if (c === mn.Triangle) {
    const X = [
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
    v === Me.SpecialCauseImproving || v === Me.SpecialCauseDeteriorating ? q = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (k === Pe.Higher ? X : R).map((K) => K.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 8,
        transform: k === Pe.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : v === Me.SpecialCauseNoJudgement ? q = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: k === Pe.Higher ? X.map((K) => K.join(",")).join(" ") : R.map((K) => K.join(",")).join(" "),
        fill: b.hex,
        stroke: b.hex,
        strokeWidth: 8,
        transform: k === Pe.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : v === Me.CommonCause && (q = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: re[0][0],
        y1: re[0][1],
        x2: re[1][0],
        y2: re[1][1],
        stroke: b.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const ee = Ko(
      b.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: I },
        { offset: "65%", opacity: T },
        { offset: "100%", opacity: C }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: o,
        height: o,
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
              stroke: b.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          q,
          j && (v === Me.SpecialCauseImproving || v === Me.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: k === Pe.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: j
            }
          )
        ]
      }
    );
  }
  const B = Ko(
    b.hex,
    p,
    x,
    i,
    l,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: m },
      { offset: "100%", opacity: M }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: o,
      height: o,
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
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: k === Pe.Lower ? "340" : "155", children: j })
          }
        ),
        L ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: b.hex,
            ...k === Pe.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          E.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${E.map((Q) => `${Q.cx} ${Q.cy}`).join(" L ")}`
            }
          ),
          E.map((Q, O) => {
            const X = O >= E.length - 2 && F ? _ : N, R = X;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: R,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: X,
                cx: Q.cx,
                cy: Q.cy,
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
ss.displayName = "SPCVariationIcon";
const ig = {
  [dt.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [dt.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [dt.Md]: { height: 44, pointR: 4, stroke: 1 },
  [dt.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [dt.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [dt.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function lg(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function cg(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, o = [...e].reverse().findIndex((i) => i.value != null), a = o >= 0 ? e.length - 1 - o : null, s = a != null ? e[a].value : null;
  return { mean: n, latestValue: s, latestIndex: a };
}
const dg = (e) => Kl(e), oc = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: o = !0,
  showLimits: a = !0,
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
  thinningStrategy: M = "stride",
  colorPointsBySignal: I = !0,
  centerLine: T,
  controlLimits: C,
  sigmaBands: v,
  pointSignals: k,
  pointNeutralSpecialCause: D,
  visualCategories: S
}) => {
  const b = u, y = Ee(
    () => lg(e, t),
    [e, t]
  ), A = Ee(() => cg(y), [y]), j = (() => {
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
  })(), F = ig[j], L = Math.max(y.length * 6, 60), N = L, _ = j === dt.Full ? "100%" : L, E = F.height, te = Ee(() => {
    if (j === dt.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${N} / ${E}`,
        display: "block"
      };
  }, [j, N, E]), U = Math.max(6, F.pointR + 3), B = Math.max(4, F.pointR + 3), Q = Ee(() => (e?.length ?? 0) - (y?.length ?? 0), [e?.length, y?.length]), O = T ?? A.mean ?? null, z = Ee(() => {
    if (!a) return null;
    if (C) return C;
    const Y = y.filter(($) => typeof $.value == "number");
    if (!Y.length || O == null) return null;
    const w = Y.map(($) => $.value), P = Math.min(...w), G = Math.max(...w);
    return { lower: P, upper: G };
  }, [a, C?.lower, C?.upper, y, O]), R = Ee(() => ({
    state: d ?? Me.CommonCause,
    firedRules: [],
    mean: O ?? null,
    stdDev: null,
    side: A.latestValue != null && O != null ? A.latestValue > O ? "above" : "below" : void 0
  }), [d, O, A.latestValue]).state, re = dg(R), q = (Y) => {
    const w = y.filter((H) => H.value != null);
    if (!w.length) return E / 2;
    const P = w.map((H) => H.value);
    z && (z.lower != null && P.push(z.lower), z.upper != null && P.push(z.upper));
    const G = Math.min(...P), $ = Math.max(...P);
    return G === $ ? E / 2 : E - (Y - G) / ($ - G) * (E - B * 2) - B;
  }, ee = Ee(() => {
    if (!m || y.length <= m)
      return y.map((W, J) => J);
    if (M === "stride") {
      const W = Math.max(2, m), J = (y.length - 1) / (W - 1), ne = /* @__PURE__ */ new Set();
      for (let ae = 0; ae < W; ae++) ne.add(Math.round(ae * J));
      return ne.add(y.length - 1), Array.from(ne).sort((ae, ue) => ae - ue);
    }
    const Y = y.map((W, J) => ({ i: J, v: W.value }));
    function w(W, J, ne) {
      const ae = W.i, ue = W.v ?? 0, he = J.i, me = J.v ?? 0, ve = ne.i, Se = ne.v ?? 0, qe = Math.abs((Se - me) * ae - (ve - he) * ue + ve * me - Se * he), Be = Math.hypot(Se - me, ve - he);
      return Be === 0 ? 0 : qe / Be;
    }
    function P(W, J) {
      if (W.length <= 2) return W;
      let ne = -1, ae = -1;
      for (let ue = 1; ue < W.length - 1; ue++) {
        const he = w(W[ue], W[0], W[W.length - 1]);
        he > ne && (ne = he, ae = ue);
      }
      if (ne > J) {
        const ue = P(W.slice(0, ae + 1), J), he = P(W.slice(ae), J);
        return [...ue.slice(0, -1), ...he];
      }
      return [W[0], W[W.length - 1]];
    }
    let G = 0.1, $ = Y;
    for (let W = 0; W < 8 && ($ = P(Y, G), !($.length <= m)); W++)
      G *= 1.6;
    const H = new Set($.map((W) => W.i));
    return H.add(0), H.add(y.length - 1), Array.from(H).sort((W, J) => W - J);
  }, [y, m, M]), K = Ee(
    () => ee.map((Y) => y[Y]),
    [ee, y]
  ), oe = Ee(() => Math.max(1, N - U * 2), [N, U]), de = Ee(() => {
    const Y = Math.max(1, K.length - 1);
    return (w) => w / Y * oe + U;
  }, [K.length, oe, U]), V = Ee(() => {
    let Y = "";
    return K.forEach((w, P) => {
      if (w.value == null) return;
      const G = q(w.value), $ = de(P);
      Y += Y ? ` L ${$} ${G}` : `M ${$} ${G}`;
    }), Y;
  }, [K, de]), ie = A.latestIndex ?? -1, se = z, fe = jo(), ce = Ee(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [y.length, f]
  ), pe = y.length >= (n || 0), $e = p || "SPC sparkline", Ie = (() => {
    if (!R) return;
    const Y = b === Oe.Up ? ut.HigherIsBetter : b === Oe.Down ? ut.LowerIsBetter : ut.ContextDependent, w = {
      variationIcon: R === Me.SpecialCauseImproving ? Re.Improvement : R === Me.SpecialCauseDeteriorating ? Re.Concern : R === Me.SpecialCauseNoJudgement ? Re.Suppressed : Re.Neither,
      trend: b === Oe.Up ? Pe.Higher : Pe.Lower,
      polarity: Y
    };
    try {
      return rc(w);
    } catch {
      return;
    }
  })(), Ce = Ee(() => {
    if (!pe) return 10;
    const Y = [...y].reverse().filter((P) => P.value != null).slice(0, 6).map((P) => q(P.value));
    return Y.length && Y.reduce((P, G) => P + G, 0) / Y.length < E / 2 ? E : 10;
  }, [y, pe, E]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": $e,
      "aria-description": Ie,
      width: j === dt.Full ? void 0 : _,
      height: j === dt.Full ? void 0 : E,
      style: te,
      className: x,
      viewBox: `0 0 ${N} ${E}`,
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
              width: N,
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
              width: N,
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
              x2: N,
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
              x2: N,
              y1: q(se.upper),
              y2: q(se.upper),
              stroke: re,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          v && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            v.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: q(v.lowerTwo),
                y2: q(v.lowerTwo),
                stroke: re,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            v.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: q(v.lowerOne),
                y2: q(v.lowerOne),
                stroke: re,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            v.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: q(v.upperOne),
                y2: q(v.upperOne),
                stroke: re,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            v.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: q(v.upperTwo),
                y2: q(v.upperTwo),
                stroke: re,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        o && O != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: N,
            y1: q(O),
            y2: q(O),
            stroke: dn(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: V,
            fill: "none",
            stroke: dn(),
            strokeWidth: F.stroke,
            strokeLinecap: "round"
          }
        ),
        ee.map((Y, w) => {
          const P = y[Y];
          if (!P || P.value == null) return null;
          const G = q(P.value), $ = de(w), W = (Y === ie && l ? F.pointR + 1 : F.pointR) - 0.5;
          let J = dn();
          if (I) {
            const ne = S?.[Q + Y];
            if (ne != null)
              ne === nt.Improvement ? J = yr(Re.Improvement) : ne === nt.Concern ? J = yr(Re.Concern) : ne === nt.NoJudgement ? J = yt("no-judgement", "#490092") : J = dn();
            else {
              const ae = k?.[Q + Y];
              ae === Re.Improvement || ae === Re.Concern ? J = yr(ae) : J = D?.[Q + Y] ? yt("no-judgement", "#490092") : dn();
            }
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: $,
              cy: G,
              r: W,
              fill: J,
              stroke: "none",
              strokeWidth: 0,
              onClick: g ? () => g(Y, P) : void 0,
              style: g ? { cursor: "pointer" } : void 0,
              "data-index": Y,
              "data-signal-colour": I ? J : void 0
            },
            Y
          );
        }),
        c && pe && R && R !== Me.CommonCause && b && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: N - 4,
            y: Ce,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: re,
            "data-glyph-pos": Ce < E / 2 ? "top" : "bottom",
            children: b === Oe.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
oc.displayName = "SPCSpark";
function Gr(e) {
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
function ac(e) {
  return e === je.ImprovementHigh || e === je.ImprovementLow || e === je.ConcernHigh || e === je.ConcernLow || e === je.NeitherHigh || e === je.NeitherLow;
}
function ug({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: o
}) {
  const [a, s] = Z.useState(""), i = Z.useRef("");
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
    a && /* @__PURE__ */ r.jsx(
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
    e.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warnings", role: "region", "aria-label": "SPC diagnostics", children: [
      /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
      /* @__PURE__ */ r.jsx(
        Qt,
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
                node: /* @__PURE__ */ r.jsx(et, { color: "grey", text: o(l.code) }),
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
function fg({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const is = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: o = !0,
  colourOverride: a,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...c
}) => {
  const d = kr(), u = kr(), { start: f, mid: h, end: p } = jo(), x = a || Wm[e], g = (i || Gm[e]).slice(0, 2), m = n || `Assurance ${e}`;
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
          o && /* @__PURE__ */ r.jsxs("filter", { id: d, filterUnits: "objectBoundingBox", children: [
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
            ...o ? { filter: `url(#${d})` } : {},
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
          e === hn.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === hn.Uncertain ? /* @__PURE__ */ r.jsx(
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
is.displayName = "SPCAssuranceIcon";
const hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: hn,
  Direction: Pe,
  MetricPolarity: ut,
  SPCAssuranceIcon: is,
  SPCVariationIcon: ss,
  VariationJudgement: _t,
  VariationState: Me,
  getVariationColour: ql,
  getVariationTrend: os
}, Symbol.toStringTag, { value: "Module" }));
function pg(e) {
  const { show: t, rowsForUi: n, minPoints: o, metricImprovement: a, variant: s, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, c = typeof o == "number" && !isNaN(o) ? o : 13;
  if (l.filter(
    (v) => !v.data.ghost && v.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let v = l.length - 1; v >= 0; v--) {
    const k = l[v];
    if (k && k.data.value != null && !k.data.ghost) {
      u = v;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], h = f.classification?.variation, p = f.classification?.assurance, x = h === Re.Neither && !!f.classification?.neutralSpecialCauseValue, g = p === sn.Pass ? hn.Pass : p === sn.Fail ? hn.Fail : hn.Uncertain;
  let m;
  if (h === Re.Suppressed) {
    const v = !!f.rules.singlePoint.up, k = !!f.rules.singlePoint.down;
    a === an.Up ? v ? m = Pe.Higher : k && (m = Pe.Lower) : a === an.Down ? k ? m = Pe.Lower : v && (m = Pe.Higher) : m = Pe.Higher;
  } else if (h === Re.Neither && x) {
    const v = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, k = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    v && !k ? m = Pe.Higher : k && !v ? m = Pe.Lower : m = Pe.Higher;
  }
  const M = 80, I = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, T = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let C = je.CommonCause;
  return h === Re.Improvement ? C = je.ImprovementHigh : h === Re.Concern ? C = je.ConcernHigh : h === Re.Neither && (x ? m === Pe.Lower || T && !I ? C = je.NeitherLow : C = je.NeitherHigh : C = je.CommonCause), /* @__PURE__ */ r.jsxs(
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
            style: { width: M, height: M },
            children: /* @__PURE__ */ r.jsx(
              ss,
              {
                dropShadow: !1,
                data: {
                  variationIcon: C,
                  improvementDirection: a,
                  specialCauseNeutral: x,
                  highSideSignal: I,
                  lowSideSignal: T,
                  ...m ? { trend: m } : {}
                },
                letterMode: a === an.Neither ? ar.Direction : ar.Polarity,
                size: M,
                variant: s,
                runLength: s === mn.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(p),
            style: { width: M, height: M },
            children: /* @__PURE__ */ r.jsx(
              is,
              {
                status: g,
                size: M,
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
const sc = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: o,
  measureUnit: a,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = en(), d = ln(), [u, f] = Z.useState(null), [h, p] = Z.useState(!1), x = Z.useRef(null);
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
  const g = c && (c.focused || (h ? u : null) || u), [m, M] = Z.useState(!1);
  Z.useEffect(() => {
    const Ce = requestAnimationFrame(() => M(!0));
    return () => cancelAnimationFrame(Ce);
  }, [g?.index]);
  const I = d?.innerWidth ?? 0, T = d?.innerHeight ?? 0, C = g ? Math.min(Math.max(g.clientX, 0), I) : 0, v = g ? Math.min(Math.max(g.clientY, 0), T) : 0, k = d?.ref?.current || void 0;
  if (!g)
    return null;
  const D = e?.[g.index], b = ko(
    D ? {
      specialCauseSinglePointUp: !!D.rules.singlePoint.up,
      specialCauseSinglePointDown: !!D.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!D.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!D.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!D.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!D.rules.fourOfFive.down,
      specialCauseShiftUp: !!D.rules.shift.up,
      specialCauseShiftDown: !!D.rules.shift.down,
      specialCauseTrendUp: !!D.rules.trend.up,
      specialCauseTrendDown: !!D.rules.trend.down
    } : null
  ).map((Ce) => ({ id: Ce, label: Ln[Ce].tooltip })), y = g.x instanceof Date ? g.x : new Date(g.x), A = s ? s(y) : y.toDateString(), j = a ? `${a}` : "", F = o || j ? `${g.y}${j ? "" + j : " "}${o ? " " + o : ""}` : `${g.y}`, L = Co(D?.classification?.variation), N = Vl(D?.classification?.assurance), _ = Om(
    t.mean ?? null,
    t.sigma,
    g.y
  ), E = n ? n(g.index, { x: g.x, y: g.y }) : void 0, te = L || N || _, U = D?.rules.trend.up || D?.rules.trend.down, B = D?.classification?.variation === Re.Neither && U, Q = l && B ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, O = b.length > 0, z = D && "primeDirection" in D ? D.primeDirection : void 0, X = D && "primeRuleId" in D ? D.primeRuleId : void 0, R = i && D?.classification?.variation === Re.Neither && O, re = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", q = Zl(D?.classification?.variation), ee = 6.2, oe = [
    E || "",
    `${A} • ${F}`
  ].filter(Boolean).reduce(
    (Ce, Y) => Math.max(Ce, Y.length * ee + 32),
    0
  ), de = 200, V = 440, ie = Math.min(V, Math.max(de, oe));
  let se = C + 12, ce = (d.margin?.top ?? 0) + v + 16;
  se + ie > I && (se = C - -60 - ie), se < 0 && (se = Math.max(0, I - ie));
  const pe = g ? `spc-tooltip-${g.index}` : "spc-tooltip", $e = typeof g.index == "number" ? g.index : NaN, Ie = k ? rd(
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
        "data-placement": se + ie + 12 > I ? "left" : "right",
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
              $e
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: A })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: F })
          ] }),
          te && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: L?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: L,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : L?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: L,
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
            ) : L ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: L,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          N && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Ce = N.toLowerCase(), w = !(Ce.includes("not met") || Ce.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Ce);
              return /* @__PURE__ */ r.jsx(
                et,
                {
                  text: N,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${w ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${N}`
                }
              );
            })() })
          ] }),
          _ && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              et,
              {
                text: (() => {
                  const Ce = _.toLowerCase();
                  return Ce.startsWith("within 1") ? "≤1σ" : Ce.startsWith("1–2") ? "1–2σ" : Ce.startsWith("2–3") ? "2–3σ" : Ce.startsWith(">3") ? ">3σ" : _;
                })(),
                color: _.includes(">3") ? "orange" : _.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${_}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          Q && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: Q })
          ] }),
          O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: b.map(({ id: Ce, label: Y }) => {
                  const w = String(Ce), G = w === or.TrendIncreasing || w === or.TrendDecreasing ? "fdp-spc-tag--trend" : R ? "fdp-spc-tag--no-judgement" : L ? L.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : L.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    et,
                    {
                      text: Y,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${G}`,
                      "data-rule-id": w
                    },
                    w
                  );
                })
              }
            ),
            z && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Ce = R ? "fdp-spc-tag--no-judgement" : L ? L.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : L.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", Y = `${z}${X ? ` (${X})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  et,
                  {
                    text: Y,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${Ce}`,
                    "aria-label": `Prime direction ${z}${X ? ` via ${X}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    k
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
            cx: C,
            cy: v,
            r: 7,
            fill: "none",
            stroke: re,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: C,
            cy: v,
            r: 5,
            fill: "#000",
            stroke: re,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: C,
            cy: v,
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
}, mg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: o
}) => {
  const a = en(), s = a?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = Z.useMemo(
    () => l ? ko({
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
      new Set(c.map((g) => Ln[g]?.narration).filter(Boolean))
    ),
    [c]
  ), u = l ? Co(l.classification?.variation) : null, f = l ? Vl(l.classification?.assurance) : null, h = c.length > 0, p = l ? l.classification?.variation === Re.Neither && h : !1, x = Z.useRef(null);
  return Z.useEffect(() => {
    if (!o || !s || l == null) return;
    const g = `${s.seriesId}:${s.index}`;
    if (x.current !== g) {
      x.current = g;
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
  }, [s?.seriesId, s?.index, s?.x, s?.y, l, c, o]), /* @__PURE__ */ r.jsxs(
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
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !a, children: a && /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ r.jsx(
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
                /* @__PURE__ */ r.jsx(
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
                      const g = f.toLowerCase(), M = !(g.includes("not met") || g.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(g);
                      return /* @__PURE__ */ r.jsx(
                        et,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${M ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                  const m = String(g), I = m === or.TrendIncreasing || m === or.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", T = Ln[g]?.tooltip || m;
                  return /* @__PURE__ */ r.jsx(
                    et,
                    {
                      text: T,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${I}`,
                      "data-rule-id": m,
                      title: Ln[g]?.tooltip
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
function gg(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === ht.Common && n[s - 1] === n[s + 1] && n[s - 1] !== ht.Common && (n[s] = n[s - 1]);
    let a = 0;
    for (; a < n.length; ) {
      const s = n[a];
      let i = a + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - a === 1 && s !== ht.Common && (n[a] = ht.Common), a = i;
    }
  }
  const o = [];
  if (n.length) {
    let a = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[a]) {
        const i = n[a], l = s - 1, c = l - a + 1;
        (i === ht.Common || c >= 2) && o.push({ start: a, end: l, category: i }), a = s;
      }
  }
  return o;
}
var Zn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Zn || {}), ic = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(ic || {});
function xg(e) {
  const {
    ui: t,
    input: n,
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
    unit: g,
    targets: m,
    baselines: M,
    ghosts: I,
    settings: T,
    chartType: C,
    metricImprovement: v,
    gradientSequences: k,
    sequenceTransition: D,
    processLineWidth: S,
    showPartitionMarkers: b,
    showWarningsPanel: y,
    warningsFilter: A,
    enableNeutralNoJudgement: j,
    showTrendGatingExplanation: F,
    trendVisualMode: L,
    alwaysShowZeroY: N,
    alwaysShowHundredY: _,
    percentScale: E,
    showTrendStartMarkers: te,
    showFirstFavourableCrossMarkers: U,
    showTrendBridgeOverlay: B,
    showSignalsInspector: Q,
    onSignalFocus: O,
    showIcons: z,
    showEmbeddedIcon: X,
    embeddedIconVariant: R,
    embeddedIconRunLength: re,
    showFocusIndicator: q,
    visualsScenario: ee,
    visualsEngineSettings: K,
    source: oe,
    narrationContext: de,
    highlightOutOfControl: V,
    precomputed: ie
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (m !== void 0 || M !== void 0 || I !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !o && T !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !a && (u !== void 0 || x !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (d !== void 0 || p !== void 0 || de !== void 0 || g !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (ee !== void 0 || K !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && V !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && oe !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const se = n?.data ?? c ?? [], fe = n?.targets ?? m, ce = n?.baselines ?? M, pe = n?.ghosts ?? I, $e = o?.chartType ?? C ?? Wl.XmR, Ie = o?.metricImprovement ?? v ?? an.Neither, Ce = o?.settings ?? T, Y = o?.autoRecalc, w = t?.axes?.alwaysShowZeroY ?? N ?? !1, P = t?.axes?.alwaysShowHundredY ?? _ ?? !1, G = t?.axes?.percentScale ?? E ?? !1, $ = t?.visuals?.gradientSequences ?? k ?? !0, H = t?.visuals?.sequenceTransition ?? D ?? "slope", W = t?.visuals?.processLineWidth ?? S ?? 2, J = t?.visuals?.trend?.visualMode ?? L ?? "ungated", ne = t?.visuals?.trend?.showGatingExplanation ?? F ?? !0, ae = t?.visuals?.rules?.enableNeutralNoJudgement ?? j ?? !0, ue = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, he = t?.visuals?.showZones, me = t?.visuals?.showPoints, ve = t?.visuals?.rules?.highlightOutOfControl, Se = a?.height, qe = a?.className, Be = s?.label, ot = s?.unit, ft = s?.narrationContext, le = i?.scenario, Ne = i?.settings, be = l?.source, _e = t?.overlays?.partitionMarkers ?? b ?? !1, Ge = t?.overlays?.trendStartMarkers ?? te ?? !1, Fe = t?.overlays?.firstFavourableCrossMarkers ?? U ?? !1, Ye = t?.overlays?.trendBridge ?? B ?? !1, We = t?.inspector?.show ?? Q ?? !1, tt = t?.inspector?.onFocus ?? O, ke = t?.warnings?.show ?? y ?? !1, Te = t?.warnings?.filter ?? A, we = t?.icons?.show ?? z ?? !1, Ze = t?.icons?.embedded?.show ?? X ?? !0, it = t?.icons?.embedded?.variant ?? R ?? mn.Classic, jt = t?.icons?.embedded?.runLength ?? re, De = t?.overlays?.focusIndicator ?? q ?? !0;
  return {
    effData: se,
    effTargets: fe,
    effBaselines: ce,
    effGhosts: pe,
    effChartTypeCore: $e,
    effMetricImprovementCore: Ie,
    effEngineSettings: Ce,
    effEngineAutoRecalc: Y,
    effHeight: Se,
    effClassName: qe,
    effAriaLabel: Be,
    effUnit: ot,
    effNarrationContext: ft,
    effShowZones: he,
    effShowPoints: me,
    effHighlightOutOfControl: ve,
    effVisualsScenario: le,
    effVisualsEngineSettings: Ne,
    effPrecomputedVisuals: ie,
    effSource: be,
    effAlwaysShowZeroY: w,
    effAlwaysShowHundredY: P,
    effPercentScale: G,
    effGradientSequences: $,
    effSequenceTransition: H,
    effProcessLineWidth: W,
    effTrendVisualMode: J,
    effShowTrendGatingExplanation: ne,
    effEnableNeutralNoJudgement: ae,
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
let bg = 0;
const yg = ({ data: e, targets: t, visuals: n, a11y: o, axis: a, compute: s }) => {
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
    processLineWidth: M,
    showFocusIndicator: I = !1,
    enableRules: T,
    enableNeutralNoJudgement: C = !0,
    showTrendStartMarkers: v = !1,
    showFirstFavourableCrossMarkers: k = !1,
    showTrendBridgeOverlay: D = !1
  } = n, {
    announceFocus: S,
    ariaLabel: b,
    narrationContext: y,
    showSignalsInspector: A = !1,
    onSignalFocus: j,
    showTrendGatingExplanation: F = !0
  } = o, { zeroBreakSlotGapPx: L } = a, { metricImprovement: N, effectiveUnit: _ } = s, E = wn(), te = ln();
  if (!E) return null;
  const { xScale: U, yScale: B } = E, Q = Z.useRef(
    "spc-seq-" + ++bg
  ), O = en(), z = i[0]?.data || [], X = Z.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const w = /* @__PURE__ */ new Set();
    return z.forEach((P, G) => {
      typeof u.ucl == "number" && P.y > u.ucl && w.add(G), typeof u.lcl == "number" && P.y < u.lcl && w.add(G);
    }), w;
  }, [u.ucl, u.lcl, z]), R = Z.useMemo(() => {
    if (!l || !l.length) return null;
    const w = [];
    return l.forEach((P, G) => {
      const $ = P.classification.variation === Re.Concern || P.classification.variation === Re.Improvement || !!P.classification.neutralSpecialCauseValue, H = !!P.rules.singlePoint.up || !!P.rules.twoOfThree.up || !!P.rules.fourOfFive.up || !!P.rules.shift.up || !!P.rules.trend.up, W = !!P.rules.singlePoint.down || !!P.rules.twoOfThree.down || !!P.rules.fourOfFive.down || !!P.rules.shift.down || !!P.rules.trend.down;
      w[G] = {
        variation: P.classification.variation,
        assurance: P.classification.assurance,
        special: $,
        concern: P.classification.variation === Re.Concern,
        improvement: P.classification.variation === Re.Improvement,
        trendUp: !!P.rules.trend.up,
        trendDown: !!P.rules.trend.down,
        upAny: H,
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
    }), w;
  }, [l]), re = Z.useMemo(() => (c || []).map((w) => w === nt.Improvement ? ht.Improvement : w === nt.Concern ? ht.Concern : w === nt.NoJudgement ? ht.NoJudgement : ht.Common), [c]), q = Z.useMemo(() => !g || !re.length ? [] : gg(re, !0), [g, re, b]), ee = Z.useMemo(
    () => z.map((w) => U(w.x instanceof Date ? w.x : new Date(w.x))),
    [z, U]
  ), K = U.range()[1], oe = U.range()[0], de = Z.useMemo(() => {
    if (!l || !l.length)
      return null;
    let w = Number.POSITIVE_INFINITY, P = Number.POSITIVE_INFINITY;
    if (l.forEach((ae, ue) => {
      ae.rules.trend.up && (w = Math.min(w, ue)), ae.rules.trend.down && (P = Math.min(P, ue));
    }), !Number.isFinite(w) && !Number.isFinite(P))
      return null;
    const G = w <= P, $ = G ? $t.Up : $t.Down, H = G ? w : P, W = (ae) => N == null || N === an.Neither || ae == null || typeof ae.data.value != "number" || typeof ae.limits.mean != "number" ? !1 : $ === $t.Up ? N === an.Up ? ae.data.value > ae.limits.mean : ae.data.value < ae.limits.mean : N === an.Down ? ae.data.value < ae.limits.mean : ae.data.value > ae.limits.mean;
    let J = null;
    for (let ae = H; ae < l.length; ae++) {
      const ue = l[ae];
      if (!(G ? !!ue.rules.trend.up : !!ue.rules.trend.down)) break;
      if (W(ue)) {
        J = ae;
        break;
      }
    }
    let ne = !1;
    if (J != null) {
      let ae = 0;
      for (let ue = J; ue < l.length; ue++) {
        const he = l[ue];
        if (!(G ? !!he.rules.trend.up : !!he.rules.trend.down)) break;
        W(he) && ae++;
      }
      ne = ae >= 2;
    }
    return {
      direction: $,
      detectedAt: H,
      firstFavourableCrossAt: J,
      persistedAcrossMean: ne
    };
  }, [l, N]), V = Z.useMemo(() => {
    if (!l || !l.length) return null;
    const w = (P) => {
      const G = [];
      let $ = null, H = null;
      for (let W = 0; W < l.length; W++) {
        const J = l[W], ne = P(J), ae = typeof ne == "number" && !isNaN(ne) ? ne : null;
        if (ae == null) {
          $ !== null && H != null && (G.push({
            x1: ee[$],
            x2: ee[W - 1],
            y: B(H)
          }), $ = null, H = null);
          continue;
        }
        if ($ === null) {
          $ = W, H = ae;
          continue;
        }
        H != null && Math.abs(ae - H) <= 1e-9 || (H != null && G.push({
          x1: ee[$],
          x2: ee[W - 1],
          y: B(H)
        }), $ = W, H = ae);
      }
      return $ !== null && H != null && G.push({
        x1: ee[$],
        x2: ee[l.length - 1],
        y: B(H)
      }), G;
    };
    return {
      mean: w((P) => P.limits.mean ?? null),
      ucl: w((P) => P.limits.ucl ?? null),
      lcl: w((P) => P.limits.lcl ?? null),
      onePos: w((P) => P.limits.oneSigma.upper ?? null),
      oneNeg: w((P) => P.limits.oneSigma.lower ?? null),
      twoPos: w((P) => P.limits.twoSigma.upper ?? null),
      twoNeg: w((P) => P.limits.twoSigma.lower ?? null)
    };
  }, [l, ee, B]), ie = Z.useMemo(() => q.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${Q.current}-grad-common`,
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
    q.map((w, P) => {
      const G = `${Q.current}-grad-${P}`;
      let $, H = 0.28, W = 0.12, J = 0.045;
      switch (w.category) {
        case ht.Concern:
          $ = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", H = 0.28, W = 0.12, J = 0.045;
          break;
        case ht.Improvement:
          $ = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", H = 0.26, W = 0.11, J = 0.045;
          break;
        case ht.NoJudgement:
          $ = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", H = 0.26, W = 0.11, J = 0.045;
          break;
        default:
          $ = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: G, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: $, stopOpacity: H }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: $, stopOpacity: W }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: $, stopOpacity: J })
      ] }, G);
    })
  ] }) : null, [q]), se = Z.useMemo(() => {
    if (!q.length) return null;
    const [w] = B.domain(), P = B(w), G = q.map(($, H) => {
      const { start: W, end: J, category: ne } = $;
      if (W < 0 || J >= ee.length || W > J)
        return null;
      const ae = ee[W], ue = ee[J];
      let he = "";
      if (ne === ht.Common) {
        const me = H > 0 ? q[H - 1] : null, ve = H < q.length - 1 ? q[H + 1] : null, Se = me ? ee[me.end] : oe, qe = me ? B(z[me.end].y) : P, Be = ve ? ee[ve.start] : K, ot = ve ? B(z[ve.start].y) : P;
        he = `M ${Se} ${P}`, he += ` L ${Se} ${qe}`;
        for (let ft = W; ft <= J; ft++)
          he += ` L ${ee[ft]} ${B(z[ft].y)}`;
        he += ` L ${Be} ${ot}`, he += ` L ${Be} ${P} Z`;
      } else {
        const me = H > 0 ? q[H - 1] : null, ve = H < q.length - 1 ? q[H + 1] : null, Se = me && me.category !== ht.Common, qe = ve && ve.category !== ht.Common, Be = B(z[W].y), ot = B(z[J].y);
        let ft = ae, le = ue;
        if (Se) {
          const Ne = ee[me.end], be = B(z[me.end].y), _e = z[W].y - z[me.end].y;
          m === Zn.Slope && _e > 0 ? (he = `M ${Ne} ${be} L ${ae} ${Be}`, ft = Ne) : (he = `M ${ae} ${P} L ${ae} ${Be}`, ft = ae);
        } else
          he = `M ${ae} ${P} L ${ae} ${Be}`;
        for (let Ne = W + 1; Ne <= J; Ne++)
          he += ` L ${ee[Ne]} ${B(z[Ne].y)}`;
        if (he += ` L ${ue} ${ot}`, qe) {
          const Ne = ee[ve.start], be = B(z[ve.start].y), _e = z[ve.start].y - z[J].y;
          (m === Zn.Slope && _e <= 0 || m === Zn.Extend) && (he += ` L ${Ne} ${be}`, le = Ne);
        }
        if (he += ` L ${le} ${P}`, he += ` L ${ft} ${P} Z`, m === Zn.Neutral && Se) {
          const Ne = ee[me.end], be = B(z[me.end].y), _e = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${Ne} ${P} L ${Ne} ${be} L ${ae} ${Be} L ${ae} ${P} Z`,
              fill: `url(#${Q.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${H}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            _e,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: he,
                fill: `url(#${Q.current}-grad-${H})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${H}`
            )
          ] }, `seq-group-${H}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: he,
          fill: `url(#${Q.current}-grad-${H})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${H}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: G });
  }, [q, ee, K, B, z, m]), fe = Z.useMemo(() => {
    if (!y?.timeframe && z.length >= 2) {
      const w = z.map((J) => J.x instanceof Date ? J.x : new Date(J.x)), P = new Date(Math.min(...w.map((J) => J.getTime()))), G = new Date(Math.max(...w.map((J) => J.getTime()))), $ = Math.round((G.getTime() - P.getTime()) / 864e5) || 0;
      if ($ < 14)
        return `The chart shows a timeframe of ${$ + 1} days`;
      const H = Math.round($ / 7);
      return H < 20 ? `The chart shows a timeframe of ${H} weeks` : `The chart shows a timeframe of ${(G.getFullYear() - P.getFullYear()) * 12 + (G.getMonth() - P.getMonth()) + 1} months`;
    }
    if (y?.timeframe)
      return `The chart shows a timeframe of ${y.timeframe}`;
  }, [y?.timeframe, z]), ce = (w) => {
    const P = w % 10, G = w % 100;
    return P === 1 && G !== 11 ? `${w}st` : P === 2 && G !== 12 ? `${w}nd` : P === 3 && G !== 13 ? `${w}rd` : `${w}th`;
  }, pe = (w) => `${ce(w.getDate())} ${w.toLocaleString("en-GB", { month: "long" })}, ${w.getFullYear()}`, $e = (w) => ({
    specialCauseSinglePointUp: !!w?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!w?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!w?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!w?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!w?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!w?.rules.fourOfFive.down,
    specialCauseShiftUp: !!w?.rules.shift.up,
    specialCauseShiftDown: !!w?.rules.shift.down,
    specialCauseTrendUp: !!w?.rules.trend.up,
    specialCauseTrendDown: !!w?.rules.trend.down
  }), Ie = Z.useCallback(
    ({
      index: w,
      x: P,
      y: G
    }) => {
      const $ = l?.[w], H = P instanceof Date ? P : new Date(P), W = pe(H), J = y?.measureUnit ? ` ${y.measureUnit}` : "", ne = y?.measureName ? ` ${y.measureName}` : "";
      if (!$)
        return `General summary is: ${fe ? fe + ". " : ""}Point ${w + 1}, ${W}, ${G}${J}${ne}`;
      const ae = Co($.classification?.variation) || "Variation", ue = ko($e($)), he = ue.length ? ` Rules: ${[...new Set(ue.map((ve) => Ln[ve].narration))].join("; ")}.` : " No special cause rules.", me = [];
      return y?.measureName && me.push(`Measure: ${y.measureName}.`), y?.datasetContext && me.push(`${y.datasetContext}.`), y?.organisation && me.push(`Organisation: ${y.organisation}.`), y?.additionalNote && me.push(y.additionalNote), [
        "General summary is:",
        ...me,
        `Point ${w + 1} recorded on `,
        W + ",",
        `with a value of ${G} ${J}${ne}`,
        ae + ".",
        he
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, y, fe]
  ), Ce = Z.useCallback(
    (w, P) => l?.[w] ? Ie({
      index: w,
      seriesId: "process",
      x: P.x instanceof Date ? P.x : new Date(P.x),
      y: P.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, Ie]
  ), Y = Z.useMemo(() => {
    try {
      const w = typeof B?.domain == "function" ? B.domain() : void 0;
      if (!w || !Array.isArray(w) || w.length < 2) return !1;
      const P = Math.min(w[0], w[1]), G = Math.max(w[0], w[1]);
      return !(0 >= P && 0 <= G);
    } catch {
      return !1;
    }
  }, [B]);
  return /* @__PURE__ */ r.jsx(Em, { children: /* @__PURE__ */ r.jsxs(
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
              /* @__PURE__ */ r.jsx(fi, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                fi,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: Y,
                    gapPx: L,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(em, { axis: "y" }),
              ie,
              se,
              d.map((w, P) => {
                const G = z[w];
                if (!G) return null;
                const $ = U(G.x instanceof Date ? G.x : new Date(G.x));
                return /* @__PURE__ */ r.jsx(
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
              V?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                V.mean.map((w, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y
                  },
                  `mean-${P}`
                )),
                V.mean.map((w, P) => {
                  if (P === V.mean.length - 1) return null;
                  const G = V.mean[P + 1];
                  if (!G || w.y === G.y) return null;
                  const H = Math.max(4, G.x1 - w.x2 || 0) * 0.5, W = `M ${w.x2},${w.y} C ${w.x2 + H},${w.y} ${G.x1 - H},${G.y} ${G.x1},${G.y}`;
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
                    V.ucl.map((w, P) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: w.x1,
                        x2: w.x2,
                        y1: w.y,
                        y2: w.y,
                        strokeWidth: 2
                      },
                      `ucl-${P}`
                    )),
                    V.ucl.map((w, P) => {
                      if (P === V.ucl.length - 1) return null;
                      const G = V.ucl[P + 1];
                      if (!G || w.y === G.y) return null;
                      const H = Math.max(4, G.x1 - w.x2 || 0) * 0.5, W = `M ${w.x2},${w.y} C ${w.x2 + H},${w.y} ${G.x1 - H},${G.y} ${G.x1},${G.y}`;
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
                    V.lcl.map((w, P) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: w.x1,
                        x2: w.x2,
                        y1: w.y,
                        y2: w.y,
                        strokeWidth: 2
                      },
                      `lcl-${P}`
                    )),
                    V.lcl.map((w, P) => {
                      if (P === V.lcl.length - 1) return null;
                      const G = V.lcl[P + 1];
                      if (!G || w.y === G.y) return null;
                      const H = Math.max(4, G.x1 - w.x2 || 0) * 0.5, W = `M ${w.x2},${w.y} C ${w.x2 + H},${w.y} ${G.x1 - H},${G.y} ${G.x1},${G.y}`;
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
                      _ || y?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && V && V.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                V.onePos.map((w, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${P}`
                )),
                V.oneNeg.map((w, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${P}`
                )),
                V.twoPos.map((w, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${P}`
                )),
                V.twoNeg.map((w, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${P}`
                ))
              ] }),
              de && (v || k || D) && (() => {
                const w = de.detectedAt, P = de.firstFavourableCrossAt, G = z[w] ? U(
                  z[w].x instanceof Date ? z[w].x : new Date(z[w].x)
                ) : null, $ = z[w] ? B(z[w].y) : null, H = P != null && z[P] ? U(
                  z[P].x instanceof Date ? z[P].x : new Date(z[P].x)
                ) : null, W = P != null && z[P] ? B(z[P].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  D && G != null && $ != null && H != null && W != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: G,
                      y1: $,
                      x2: H,
                      y2: W,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  v && G != null && $ != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: $,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  k && H != null && W != null && /* @__PURE__ */ r.jsx("circle", { cx: H, cy: W, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Pm,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (w) => w.x instanceof Date ? w.x : new Date(w.x),
                  smooth: !1,
                  strokeWidth: M
                }
              ),
              h && z.map((w, P) => {
                const G = U(w.x instanceof Date ? w.x : new Date(w.x)), $ = B(w.y), H = X.has(P), W = R?.[P], J = re[P], ne = J === ht.Improvement, ae = J === ht.Concern, ue = J === ht.NoJudgement, he = [
                  "fdp-spc__point",
                  H && x ? "fdp-spc__point--ooc" : null,
                  T && ae ? "fdp-spc__point--sc-concern" : null,
                  T && ne ? "fdp-spc__point--sc-improvement" : null,
                  T && C && ue ? "fdp-spc__point--sc-no-judgement" : null,
                  W?.assurance === sn.Pass ? "fdp-spc__point--assurance-pass" : null,
                  W?.assurance === sn.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), me = O?.focused?.index === P;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: G,
                    cy: $,
                    r: 5,
                    className: he,
                    "data-variation": W?.variation,
                    "data-assurance": W?.assurance,
                    "aria-label": b,
                    ...me ? { "aria-describedby": `spc-tooltip-${P}` } : {}
                  },
                  P
                );
              }),
              I && A && O?.focused && (() => {
                const w = O.focused, P = typeof w.index == "number" ? w.index : -1;
                if (P < 0 || !z[P]) return null;
                const G = U(
                  z[P].x instanceof Date ? z[P].x : new Date(z[P].x)
                ), $ = B(z[P].y), H = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: $,
                      r: 7,
                      fill: "none",
                      stroke: H,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: $,
                      r: 5,
                      fill: "#000",
                      stroke: H,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: $,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              te && /* @__PURE__ */ r.jsx(
                vg,
                {
                  width: U.range()[1],
                  height: B.range()[0]
                }
              ),
              !A && /* @__PURE__ */ r.jsx(
                sc,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: Ce,
                  measureName: y?.measureName,
                  measureUnit: y?.measureUnit,
                  dateFormatter: (w) => pe(w),
                  enableNeutralNoJudgement: C,
                  showTrendGatingExplanation: F
                }
              )
            ] })
          }
        ),
        A && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          mg,
          {
            engineRows: l,
            measureName: y?.measureName,
            measureUnit: _ || y?.measureUnit,
            onSignalFocus: j
          }
        ) }),
        S && /* @__PURE__ */ r.jsx(
          Fm,
          {
            format: (w) => Ie({ ...w, x: w.x instanceof Date ? w.x : new Date(w.x) })
          }
        )
      ]
    }
  ) });
}, vg = ({
  width: e,
  height: t
}) => {
  const n = en();
  return n ? /* @__PURE__ */ r.jsx(
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
        n.focusNearest(i, l);
      },
      onMouseLeave: () => n.clear(),
      onKeyDown: (o) => {
        switch (o.key) {
          case "ArrowRight":
            n.focusNextPoint(), o.preventDefault();
            break;
          case "ArrowLeft":
            n.focusPrevPoint(), o.preventDefault();
            break;
          case "ArrowDown":
            n.focusNextSeries(), o.preventDefault();
            break;
          case "ArrowUp":
            n.focusPrevSeries(), o.preventDefault();
            break;
          case "Home":
            n.focusFirstPoint(), o.preventDefault();
            break;
          case "End":
            n.focusLastPoint(), o.preventDefault();
            break;
        }
      },
      style: { cursor: "crosshair" }
    }
  ) : null;
};
function ki(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function wg(e, t, n) {
  const o = new Array(e), a = new Date(t);
  for (let s = 0; s < e; s++)
    switch (o[s] = new Date(a), n) {
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
function Sg(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const o = [];
  for (let c = 1; c < n.length; c++)
    o.push(n[c].getTime() - n[c - 1].getTime());
  const a = o.sort((c, d) => c - d), s = a[Math.floor(a.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function Ci(e, t) {
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
function _g(e, t, n, o = "0-100") {
  if (t) return t;
  if (n) return n;
  const a = e.filter((l) => l != null);
  if (!a.length) return;
  const s = Math.min(...a), i = Math.max(...a);
  if (o === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function kg(e, t, n = 1) {
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
function lc(e) {
  const {
    values: t,
    dates: n,
    intervalHint: o,
    startDate: a,
    providedUnit: s,
    defaultUnit: i,
    autoValue: l = !0,
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
  let p = (n || []).map(ki);
  if (!p.some(Boolean)) {
    const b = ki(a);
    b && o ? p = wg(f.length, b, o) : p = new Array(f.length).fill(void 0);
  }
  const g = Sg(p, o), m = _g(
    f,
    s,
    i,
    e.percentHeuristic
  ), M = l && h >= 0 && f[h] != null ? f[h] : void 0, I = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function T() {
    if (h < 0) return -1;
    if (I.strategy === "previous" || I.strategy === "n-points") {
      let F = h - (I.strategy === "previous" ? 1 : Math.max(1, I.n || 1));
      if (!I.skipNulls) return F;
      for (let L = F; L >= 0; L--) if (f[L] != null) return L;
      return -1;
    }
    const b = p[h];
    if (!b) return -1;
    const y = new Date(b);
    y.setFullYear(y.getFullYear() - 1);
    let A = -1, j = 1 / 0;
    for (let F = 0; F < p.length; F++) {
      const L = p[F];
      if (!L || f[F] == null) continue;
      const N = Math.abs(L.getTime() - y.getTime());
      N < j && (j = N, A = F);
    }
    return A;
  }
  const C = T(), v = C >= 0 ? f[C] : null;
  let k;
  if (c && M != null && v != null) {
    const b = M - v, y = I.absolute !== !1, A = y ? b : v === 0 ? 0 : b / Math.abs(v) * 100;
    k = {
      value: Number.isFinite(A) ? Number(A.toFixed(2)) : 0,
      isPercent: y ? m === "%" : !0,
      period: `vs ${kg(g, o, I.strategy === "n-points" ? Math.max(1, I.n || 1) : 1)}`
    };
  }
  const D = h >= 0 ? p[h] : void 0, S = d && Ci(D, g) ? `Latest: ${Ci(D, g)}` : void 0;
  return { value: M, unit: m, delta: k, metadata: S, latestDate: D, frequency: g };
}
function Cg(e) {
  const { rows: t } = ur(e), n = as(e);
  return { rows: t, visuals: n.visuals };
}
const ls = 13;
function cs(e) {
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
function cc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === nt.NoJudgement);
}
function Ni(e, t) {
  const n = e === Nt.G ? Nt.G : e === Nt.T ? Nt.T : Nt.XmR, o = t === Oe.Up ? Oe.Up : t === Oe.Down ? Oe.Down : Oe.Neither;
  return { chartType: n, metricImprovement: o };
}
function ji(e, t, n) {
  const o = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : ls, a = { minimumPoints: o };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= o && (a.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (a.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(a, n), Object.keys(a).length ? a : void 0;
}
function Ng(e, t, n) {
  const o = Z.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: a, totalReservedPx: s } = Z.useMemo(() => {
    if (!o) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = Sr, u = c + qp, f = n?.maxFraction, h = Math.max(
      _r,
      Math.floor(l * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [o, t, n?.maxFraction]);
  return { show: o, slotPx: a, totalReservedPx: s };
}
function jg(e, t, n, o) {
  if (n.percentScale) {
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
  return n.alwaysShowZeroY && (i = Math.min(0, i)), n.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function ba(e, t) {
  if (!e?.length || t.chartType !== Nt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), o = [];
  for (let p = 0; p < e.length; p++) {
    const x = e[p], g = x.value;
    x?.ghost || typeof g == "number" && Number.isFinite(g) && o.push({ idx: p, value: g });
  }
  if (o.length < n * 2) return null;
  let a = 0, s = 0;
  for (let p = 1; p < o.length; p++)
    a += Math.abs(o[p].value - o[p - 1].value), s++;
  if (s === 0) return null;
  const l = a / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Oe.Up, u = t.metricImprovement === Oe.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, x) {
    let g = 0, m = 0;
    for (let M = p; M < x; M++)
      g += o[M].value, m++;
    return m ? g / m : NaN;
  }
  for (let p = n; p <= o.length - n; p++) {
    const x = h(p - n, p), g = h(p, p + n);
    if (!Number.isFinite(x) || !Number.isFinite(g)) continue;
    const m = g - x, M = m / l;
    let I = !1, T = !1;
    if (d ? (I = M >= c, T = !0) : u ? (I = -M >= c, T = !1) : (I = Math.abs(M) >= c, T = m > 0), !I) continue;
    const C = (D) => T ? D > x : D < x;
    let v = !0;
    for (let D = p; D < p + n; D++)
      if (!C(o[D].value)) {
        v = !1;
        break;
      }
    if (!v) continue;
    const k = o[p].idx;
    if (!(t.minGap && f >= 0 && k - f < t.minGap))
      return k;
  }
  return null;
}
function Mg(e, t) {
  const n = ba(e, t);
  return n == null ? e.slice() : e.map((o, a) => a === n ? { ...o, baseline: !0 } : o);
}
function Ig(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return Mg(e, t);
  let o = e.slice(), a = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; a < n; ) {
    const i = ba(o, { ...t, minGap: s });
    if (i == null) break;
    if (o[i]?.baseline) {
      const l = ba(o, { ...t, minGap: s + 1 });
      if (l == null || l === i) break;
      o = o.map((c, d) => d === l ? { ...c, baseline: !0 } : c), a++;
      continue;
    }
    o = o.map((l, c) => c === i ? { ...l, baseline: !0 } : l), a++;
  }
  return o;
}
const Dg = (e) => {
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
    effProcessLineWidth: g,
    effTrendVisualMode: m,
    effShowTrendGatingExplanation: M,
    effEnableNeutralNoJudgement: I,
    effEnableRules: T,
    effShowPartitionMarkers: C,
    effShowTrendStartMarkers: v,
    effShowFirstFavourableCrossMarkers: k,
    effShowTrendBridgeOverlay: D,
    effShowSignalsInspector: S,
    effOnSignalFocus: b,
    effShowWarningsPanel: y,
    effWarningsFilter: A,
    effShowEmbeddedIcon: j,
    effEmbeddedIconVariant: F,
    effEmbeddedIconRunLength: L,
    effShowFocusIndicator: N,
    effHeight: _,
    effClassName: E,
    effAriaLabel: te,
    effUnit: U,
    effNarrationContext: B,
    effShowZones: Q,
    effShowPoints: O,
    effHighlightOutOfControl: z,
    effVisualsScenario: X,
    effVisualsEngineSettings: R,
    effSource: re,
    effPrecomputedVisuals: q,
    effEngineAutoRecalc: ee
  } = xg(e), K = te ?? e.ariaLabel, oe = _ ?? e.height ?? 260, de = E ?? e.className, V = U ?? e.unit, ie = B ?? e.narrationContext, se = Q ?? e.showZones, fe = O ?? e.showPoints, ce = z ?? e.highlightOutOfControl, pe = X ?? e.visualsScenario ?? tc.None, $e = R ?? e.visualsEngineSettings, Ie = re ?? e.source, Ce = e.a11y?.announceFocus ?? e.announceFocus ?? !1, Y = Z.useMemo(() => o.map((ke, Te) => ({
    x: ke.x,
    value: ke.y,
    target: a?.[Te] ?? void 0,
    baseline: s?.[Te] ?? void 0,
    ghost: i?.[Te] ?? void 0
  })), [o, a, s, i]), w = Z.useMemo(() => {
    try {
      const ke = ee;
      return ke?.enabled ? Ig(Y, {
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
      const ke = ji(
        d,
        w,
        $e
      ), { chartType: Te, metricImprovement: we } = Ni(
        l,
        c
      ), Ze = {
        chartType: Te,
        metricImprovement: we,
        data: w,
        settings: ke
      }, { visuals: it } = ag(Ze, pe, {
        trendVisualMode: m === ic.Ungated ? Rn.Ungated : Rn.Gated,
        enableNeutralNoJudgement: I
      });
      return it || [];
    } catch {
      return [];
    }
  }, [
    q?.visuals?.length,
    w,
    l,
    c,
    m,
    I,
    d,
    pe,
    $e
  ]), $ = Z.useMemo(() => {
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
            target: w[Ze]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const ke = ji(
        d,
        w,
        $e
      ), { chartType: Te, metricImprovement: we } = Ni(
        l,
        c
      ), Ze = {
        chartType: Te,
        metricImprovement: we,
        data: w,
        settings: ke
      }, { rows: it } = Cg(Ze), jt = (De) => {
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
          target: w[wt]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    q?.rows?.length,
    w,
    l,
    c,
    d,
    $e
  ]) || null, H = ($ || []).slice().reverse().find((ke) => ke.limits.mean != null), W = H?.limits.mean ?? null, J = Z.useMemo(() => {
    const ke = [];
    try {
      const Te = $, we = d?.minimumPoints ?? 13, Ze = d?.minimumPoints ?? 12;
      if (Te && Te.length) {
        const it = Te.filter(
          (De) => !De.data.ghost && De.data.value != null
        ).length;
        it < we && ke.push({
          code: Wr.InsufficientPointsGlobal,
          severity: At.Warning,
          category: Ur.Data,
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
            code: Wr.InsufficientPointsPartition,
            severity: At.Warning,
            category: Ur.Partition,
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
  }, [$, d?.minimumPoints]), ne = Z.useMemo(() => J.length ? A ? J.filter((ke) => !(A.severities && ke.severity && !A.severities.includes(ke.severity) || A.categories && ke.category && !A.categories.includes(ke.category) || A.codes && !A.codes.includes(ke.code))) : J : [], [J, A]), ae = H?.limits.ucl ?? null, ue = H?.limits.lcl ?? null, he = H?.limits.oneSigma.upper ?? null, me = H?.limits.oneSigma.lower ?? null, ve = H?.limits.twoSigma.upper ?? null, Se = H?.limits.twoSigma.lower ?? null, qe = W != null && he != null ? Math.abs(he - W) : 0, Be = Z.useMemo(
    () => [{ id: "process", data: o, color: "#A6A6A6" }],
    [o]
  ), ot = Z.useMemo(
    () => jg(
      o,
      { mean: W, ucl: ae, lcl: ue, onePos: he, oneNeg: me, twoPos: ve, twoNeg: Se },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      a ?? null
    ),
    [
      o,
      W,
      ae,
      ue,
      he,
      me,
      ve,
      Se,
      a,
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
    if ($ && $.length) {
      const Te = ke($.map((we) => we.target));
      if (Te != null) return Te;
    }
    return a && a.length ? ke(a) : null;
  }, [$, a]), { show: le, slotPx: Ne, totalReservedPx: be } = Ng(
    ot,
    oe,
    { maxFraction: 0.35 }
  ), _e = le ? be : 0, Ge = Z.useMemo(() => {
    const ke = o.map((Te) => Te.x);
    return lc({
      values: o.map((Te) => Te.y),
      dates: ke,
      providedUnit: V || ie?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [o, V, ie?.measureUnit]), Fe = V ?? ie?.measureUnit ?? Ge.unit, Ye = Z.useMemo(() => Fe ? { ...ie || {}, measureUnit: Fe } : ie, [ie, Fe]), We = Z.useMemo(() => {
    if (!$) return [];
    const ke = [];
    for (let Te = 1; Te < $.length; Te++)
      $[Te].partition.id !== $[Te - 1].partition.id && ke.push(Te);
    return ke;
  }, [$]), tt = Z.useMemo(
    () => pg({
      show: !!j,
      rowsForUi: $,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: F,
      runLength: L
    }),
    [
      j,
      $,
      d?.minimumPoints,
      c,
      F,
      L
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: de ? `fdp-spc-chart-wrapper ${de}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          fg,
          {
            show: !!j,
            variationNode: tt,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          Vp,
          {
            height: oe,
            ariaLabel: K,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ r.jsx(Zp, { series: Be, yDomain: ot, yBottomGapPx: _e, children: (() => {
              const ke = {
                data: {
                  series: Be,
                  engineRows: $,
                  visualCategories: P,
                  partitionMarkers: C ? We : []
                },
                targets: {
                  limits: { mean: W, ucl: ae, lcl: ue, sigma: qe, onePos: he, oneNeg: me, twoPos: ve, twoNeg: Se },
                  uniformTarget: ft
                },
                visuals: {
                  showPoints: fe,
                  showZones: se,
                  highlightOutOfControl: ce,
                  gradientSequences: p,
                  sequenceTransition: x,
                  processLineWidth: g,
                  showFocusIndicator: N,
                  enableRules: T,
                  enableNeutralNoJudgement: I,
                  showTrendStartMarkers: v,
                  showFirstFavourableCrossMarkers: k,
                  showTrendBridgeOverlay: D
                },
                a11y: {
                  announceFocus: Ce,
                  ariaLabel: K,
                  narrationContext: Ye,
                  showSignalsInspector: S,
                  onSignalFocus: b,
                  showTrendGatingExplanation: M
                },
                axis: { zeroBreakSlotGapPx: Ne },
                compute: { effectiveUnit: Fe, metricImprovement: c }
              };
              return /* @__PURE__ */ r.jsx(yg, { ...ke });
            })() })
          }
        ),
        Ie && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Ie == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          Ie
        ] }) : Ie }),
        /* @__PURE__ */ r.jsx(
          ug,
          {
            show: !!y,
            warnings: ne,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function Tg(e, t) {
  const {
    chartType: n = Nt.XmR,
    metricImprovement: o,
    minimumPoints: a = ls,
    enableNeutralNoJudgement: s = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map((T) => ({ x: T.x, value: T.value ?? T.y ?? null }));
  let c = null;
  try {
    const T = l.filter(
      (v) => typeof v.value == "number"
    ).length, C = { minimumPoints: a };
    T >= a && (C.chartLevelEligibility = !0), c = ur({ chartType: n, metricImprovement: o, data: l, settings: C });
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
    f = dr(d, {
      metricImprovement: o,
      enableNeutralNoJudgement: s
    });
  } catch {
    f = [];
  }
  const h = Gr(
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
  let M, I;
  return i && (M = cs(f), I = cc(f)), {
    rows: d,
    visuals: f,
    latestState: h,
    lastVariationIcon: p,
    centerLine: x,
    controlLimits: g,
    sigmaBands: m,
    pointSignals: M,
    pointNeutralSpecialCause: I
  };
}
const m1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: sn,
  BaselineSuggestionReason: Yl,
  ChartType: Nt,
  DEFAULT_MIN_POINTS: ls,
  Icons: hg,
  ImprovementDirection: Oe,
  PARITY_V26: nc,
  RULE_METADATA: Gl,
  SPCChart: Dg,
  SPCTooltipOverlay: sc,
  SpcEmbeddedIconVariant: mn,
  SpcVisualCategory: nt,
  SpcWarningCategory: Ur,
  SpcWarningCode: Wr,
  SpcWarningSeverity: At,
  VARIATION_COLOR_TOKENS: Tt,
  VariationIcon: je,
  buildSpcV26a: ur,
  buildSpcV26aWithVisuals: as,
  computeSpcPrecomputed: Tg,
  computeSpcVisualCategories: dr,
  extractRuleIds: ko,
  getVariationColorHex: Um,
  getVariationColorToken: Zl,
  isSpecialCauseIcon: ac,
  mapIconToVariation: Gr,
  normaliseSpcSettingsV2: ec,
  ruleGlossary: Ln,
  variationLabel: Co,
  visualsToNeutralFlags: cc,
  visualsToPointSignals: cs,
  withParityV26: sg
}, Symbol.toStringTag, { value: "Module" }));
function Lg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function $g(e) {
  const {
    values: t,
    x: n,
    chartType: o = Nt.XmR,
    metricImprovement: a = Oe.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = Z.useMemo(() => {
    const v = [];
    for (let k = 0; k < t.length; k++)
      v.push({ x: n?.[k], value: t[k] });
    return v;
  }, [t, n]), u = Z.useMemo(() => {
    try {
      const v = d.map((b, y) => ({ x: b.x ?? y, value: b.value })), k = 13, D = v.filter((b) => typeof b.value == "number").length, S = { minimumPoints: k };
      return D >= k && (S.chartLevelEligibility = !0), ur({ chartType: o, metricImprovement: a, data: v, settings: S });
    } catch {
      return null;
    }
  }, [d, o, a]), f = Z.useMemo(() => {
    const v = u?.rows;
    if (!v || v.length === 0) return null;
    for (let k = v.length - 1; k >= 0; k--) {
      const D = v[k];
      if (D && D.value != null && !D.ghost) return D;
    }
    return v[v.length - 1] ?? null;
  }, [u]), h = Z.useMemo(() => {
    const v = u?.rows;
    if (!v || v.length === 0) return null;
    let k = v[v.length - 1];
    for (let D = v.length - 1; D >= 0; D--) {
      const S = v[D];
      if (S && S.value != null && !S.ghost) {
        k = S;
        break;
      }
    }
    return Gr(k?.variationIcon);
  }, [u]), p = Z.useMemo(() => f?.mean ?? null, [f]), x = Z.useMemo(() => {
    if (!f) return null;
    const v = f?.lowerProcessLimit ?? null, k = f?.upperProcessLimit ?? null;
    return v == null && k == null ? null : { lower: v, upper: k };
  }, [f]), g = Z.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), m = Z.useMemo(() => {
    const v = u?.rows;
    if (!(!v || v.length === 0))
      try {
        return dr(v, {
          metricImprovement: a,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, a]), M = Z.useMemo(() => cs(m), [m?.length]), I = Z.useMemo(() => {
    if (!(!m || m.length === 0))
      return m.map((v) => v === nt.NoJudgement);
  }, [m?.length]), T = Z.useMemo(() => {
    let v = null;
    if (f && f.value != null && !f.ghost) {
      const F = f.variationIcon;
      h === Me.SpecialCauseNoJudgement ? v = ac(F) ? Me.SpecialCauseNoJudgement : Me.CommonCause : v = Gr(F) ?? Me.CommonCause;
    }
    const k = v ?? Me.CommonCause, D = No[k].hex, [S, b, y] = Lg(D), A = jo();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${S}, ${b}, ${y}, ${A.start}) 0%, rgba(${S}, ${b}, ${y}, ${A.mid}) 50%, rgba(${S}, ${b}, ${y}, ${A.end}) 100%)`,
      "--fdp-metric-card-accent": D
    };
  }, [f, h]);
  return { sparkProps: Z.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: a,
    centerLine: p,
    controlLimits: x,
    sigmaBands: g,
    pointSignals: M,
    pointNeutralSpecialCause: I,
    visualCategories: m,
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
    g?.upperTwo,
    g?.lowerOne,
    g?.lowerTwo,
    M?.length,
    I?.length,
    m?.length
  ]), metricCardStyle: T, latestState: h };
}
const g1 = ({
  sparkData: e,
  direction: t = Oe.Neither,
  showMean: n = !1,
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
  const g = $g({
    values: e.map((k) => k.value ?? null),
    metricImprovement: t,
    showLimits: o,
    showLimitBand: a,
    showInnerBands: s,
    showMean: n
  }), m = /* @__PURE__ */ r.jsx(oc, { ...g.sparkProps, maxPoints: i }), M = Z.useMemo(() => lc({
    values: e.map((k) => typeof k.value == "number" ? k.value : null),
    dates: e.map((k) => k.date),
    intervalHint: f,
    startDate: h,
    providedUnit: x.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, x.unit, u, l, c, d, p]), I = l && M.value != null ? M.value : x.value, T = c && M.delta ? M.delta : x.delta, C = M.unit || x.unit, v = d && M.metadata ? M.metadata : x.metadata;
  return /* @__PURE__ */ r.jsx(
    Bm,
    {
      ...x,
      value: I,
      unit: C,
      delta: T,
      metadata: v,
      visual: m,
      style: g.metricCardStyle
    }
  );
};
function Ag(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function Eg(e = "auto") {
  const [t, n] = Qe.useState(
    !1
  );
  return Qe.useEffect(() => {
    if (e !== "auto" || typeof window > "u" || !window.matchMedia) return;
    const o = window.matchMedia("(prefers-reduced-motion: reduce)"), a = () => n(o.matches);
    return a(), o.addEventListener?.("change", a), () => o.removeEventListener?.("change", a);
  }, [e]), e === "off" ? !1 : t;
}
function Mi(e, t) {
  return t[Math.floor(e() * t.length)];
}
function rn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Pg(e, t) {
  const n = e.seed ?? 1, o = Ag(n), a = Math.max(6, Math.min(48, Math.round(e.density ?? 18))), s = ["circle", "hexagon", "rect"], i = [], l = e.gradients && e.gradients.length > 0 ? e.gradients : [
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
  for (; i.length < a && x < a * 50; ) {
    x++;
    const g = Mi(o, s), m = rn(o() * 1, 0.15, 0.95), M = 24 + o() * 72, I = o() * 100, T = o() * 100;
    if (!p(I, T)) continue;
    const C = Mi(o, l);
    if (g === "rect") {
      const v = 0.6 + o() * 0.8;
      i.push({
        kind: g,
        width: M * v,
        height: M,
        x: I,
        y: T,
        depth: m,
        fillToken: C,
        shadow: "soft"
      });
    } else
      i.push({
        kind: g,
        size: M,
        x: I,
        y: T,
        depth: m,
        fillToken: C,
        shadow: "soft"
      });
  }
  return i;
}
const x1 = (e) => {
  const {
    seed: t = 1,
    mode: n = "scroll",
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
    style: g
  } = e, m = Qe.useRef(null), [M, I] = Qe.useState({
    w: 1e3,
    h: 520
  }), T = Eg(h), C = e.direction ?? "se", v = Qe.useMemo(() => {
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
  Qe.useLayoutEffect(() => {
    if (!m.current) return;
    const F = new ResizeObserver((L) => {
      for (const N of L) {
        const _ = N.contentRect;
        I({ w: _.width, h: _.height });
      }
    });
    return F.observe(m.current), () => F.disconnect();
  }, []);
  const k = Qe.useMemo(() => e.shapes && e.shapes.length ? e.shapes : Pg(e, M.w), [t, M.w, M.h]), [D, S] = Qe.useState(0), [b, y] = Qe.useState(null);
  Qe.useEffect(() => {
    if (n !== "scroll" || T) return;
    let F;
    return (async () => {
      if (typeof window > "u") return;
      const L = m.current;
      if (L)
        try {
          const N = await import("./index-C_MjGuuK.js"), _ = await import("./ScrollTrigger-7ivQEezo.js"), E = N.default ?? N.gsap ?? N, te = _.ScrollTrigger ?? _.default ?? _;
          E.registerPlugin(te);
          const U = te.create({
            trigger: L,
            start: l,
            end: c,
            markers: d,
            pin: u,
            pinSpacing: f,
            scrub: i,
            invalidateOnRefresh: !0,
            onUpdate: (B) => S(B.progress)
          });
          y((B) => B === null ? U.progress ?? 0.5 : B), d && window && (window.__parallaxRefresh = () => {
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
          const _ = () => {
            const E = L.getBoundingClientRect(), te = window.innerHeight || document.documentElement.clientHeight, U = E.height + te, B = te - E.top, Q = rn(B / U, 0, 1);
            y((O) => O === null ? Q : O), S(Q);
          };
          _(), window.addEventListener("scroll", _, { passive: !0 }), window.addEventListener("resize", _), F = () => {
            window.removeEventListener("scroll", _), window.removeEventListener("resize", _);
          };
        }
    })(), () => {
      F && F();
    };
  }, [n, T, l, c, d, u, f, i]), Qe.useEffect(() => {
    if (n !== "timed" || T) return;
    let F = 0, L = performance.now();
    const N = 8e3, _ = (E) => {
      const U = (E - L) % N / N;
      S(U), F = requestAnimationFrame(_);
    };
    return F = requestAnimationFrame(_), () => cancelAnimationFrame(F);
  }, [n, T]);
  const A = (F) => 0.15 + (F ?? 0.5) * 0.6, j = {
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
        height: typeof a == "number" ? `${a}px` : a,
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
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-connectors", children: k.map((F, L) => {
                const N = F.x, _ = F.y, E = (F.width ?? F.size ?? 40) / M.w * 100 * 1, te = (F.height ?? F.size ?? 40) / M.h * 100 * 1, U = F.kind === "circle" ? [
                  [N, _ - te / 2],
                  [N + E / 2, _],
                  [N, _ + te / 2],
                  [N - E / 2, _]
                ] : F.kind === "rect" || F.kind === "svg" ? [
                  [N - E / 2, _ - te / 2],
                  [N + E / 2, _ - te / 2],
                  [N + E / 2, _ + te / 2],
                  [N - E / 2, _ + te / 2]
                ] : (
                  // hexagon approx points
                  [
                    [N - E / 2, _],
                    [N - E / 4, _ - te / 2],
                    [N + E / 4, _ - te / 2],
                    [N + E / 2, _],
                    [N + E / 4, _ + te / 2],
                    [N - E / 4, _ + te / 2]
                  ]
                ), B = A(F.depth), z = (u ? D : D - (b ?? 0.5)) * s * B, X = o === "x" ? z : o === "xy" ? z * v.x : 0, R = o === "y" ? z : o === "xy" ? z * v.y : 0;
                return U.map((re, q) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: rn(re[0] + X, 0, 100),
                    y1: rn(re[1] + R, 0, 100),
                    x2: rn(50 + X * 0.2, 0, 100),
                    y2: rn(50 + R * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${L}-${q}`
                ));
              }) }),
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-shapes", children: k.map((F, L) => {
                const N = A(F.depth), te = (u ? D : D - (b ?? 0.5)) * s * N, U = o === "x" ? te : o === "xy" ? te * v.x : 0, B = o === "y" ? te : o === "xy" ? te * v.y : 0, Q = rn(F.x + U, 0, 100), O = rn(F.y + B, 0, 100), z = F.rotate ?? 0, X = [
                  "nhs-parallax-shape",
                  F.fillToken,
                  F.shadow && `nhs-parallax-shadow--${F.shadow}`
                ].filter(Boolean).join(" ");
                if (F.kind === "circle") {
                  const ee = (F.size ?? 40) / M.w * 100 * 0.5;
                  return /* @__PURE__ */ r.jsx("circle", { cx: Q, cy: O, r: ee, className: X }, L);
                }
                if (F.kind === "rect") {
                  const ee = (F.width ?? 48) / M.w * 100, K = (F.height ?? 36) / M.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: Q - ee / 2,
                      y: O - K / 2,
                      width: ee,
                      height: K,
                      transform: `rotate(${z} ${Q} ${O})`,
                      className: X
                    },
                    L
                  );
                }
                if (F.kind === "svg" && F.src) {
                  const ee = (F.width ?? 48) / M.w * 100, K = (F.height ?? 48) / M.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: F.src,
                      x: Q - ee / 2,
                      y: O - K / 2,
                      width: ee,
                      height: K,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${z} ${Q} ${O})`,
                      className: X
                    },
                    L
                  );
                }
                const R = (F.size ?? 40) / M.w * 100, re = R * 0.866, q = [
                  [Q - R / 2, O],
                  [Q - R / 4, O - re / 2],
                  [Q + R / 4, O - re / 2],
                  [Q + R / 2, O],
                  [Q + R / 4, O + re / 2],
                  [Q - R / 4, O + re / 2]
                ].map((ee) => ee.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: q, className: X }, L);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-parallax-callout",
            style: j,
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
function Fg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function lt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Rg(e, t, n, o, a, s, i, l, c, d, u, f) {
  const h = Fg(e), p = [], x = [], g = ["rect", "hex", "circle"], m = { x: 50, y: 50 }, M = o, I = 1200, T = 400, C = 1.2, v = {
    left: m.x - M.w / 2,
    right: m.x + M.w / 2,
    top: m.y - M.h / 2,
    bottom: m.y + M.h / 2
  }, k = !c && !!u && u.r > 0, D = !c && !!f && (f.rx > 0 || f.ry > 0), S = (_, E) => {
    if (!k) return !1;
    const te = _ - m.x, U = E - m.y;
    return te * te + U * U <= u.r * u.r;
  }, b = (_, E) => {
    if (!D) return !1;
    const te = Math.max(1e-6, f.rx || 0), U = Math.max(1e-6, f.ry || 0), B = (_ - m.x) / te, Q = (E - m.y) / U;
    return B * B + Q * Q <= 1;
  }, y = (_, E) => !(_.right < E.left || _.left > E.right || _.bottom < E.top || _.top > E.bottom), A = (_) => _.left >= 0 && _.top >= 0 && _.right <= 100 && _.bottom <= 100, j = (_, E, te, U, B, Q) => {
    let O = 0, z = 0;
    if (_ === "rect") {
      const X = U ?? 48, R = B ?? 36;
      O = X / I * 100, z = R / T * 100;
    } else if (_ === "circle") {
      const X = Q ?? 40;
      O = X / I * 100, z = X / T * 100;
    } else {
      const X = Q ?? 40;
      O = X / I * 100, z = X * s / T * 100;
    }
    return {
      left: E - O / 2 - C,
      right: E + O / 2 + C,
      top: te - z / 2 - C,
      bottom: te + z / 2 + C
    };
  };
  let F = 0;
  const L = lt(Math.round(t), 4, 48);
  let N = null;
  if (d) {
    const _ = Math.ceil(Math.sqrt(L)), E = Math.ceil(L / _);
    N = [];
    for (let te = 0; te < E; te++)
      for (let U = 0; U < _ && !(N.length >= L); U++) {
        const B = (U + 0.5) / _ * 100, Q = (te + 0.5) / E * 100;
        N.push({ x: B, y: Q });
      }
  }
  for (; p.length < L && F < L * 120; ) {
    F++;
    const _ = g[Math.floor(h() * g.length)];
    let E, te;
    if (d && N && N.length) {
      const O = p.length % N.length;
      E = N[O].x, te = N[O].y;
    } else {
      const O = lt(a ?? 0, 0, 1), z = () => h() * 100, X = () => {
        const re = Math.max(h(), 1e-6), q = Math.max(h(), 1e-6), ee = Math.sqrt(-2 * Math.log(re)), K = 2 * Math.PI * q;
        return 50 + ee * Math.cos(K) * 12.5;
      }, R = (re, q, ee) => re * (1 - ee) + q * ee;
      E = lt(R(z(), X(), O), 0, 100), te = lt(R(z(), X(), O), 0, 100);
    }
    const U = j(_, E, te, 32, 24, 28);
    if (!A(U)) continue;
    const B = lt(h(), 0.15, 0.95), Q = 0;
    if (_ === "rect") {
      const O = 40 + h() * 80, z = 28 + h() * 64, X = j(_, E, te, O, z);
      if (!c && (y(X, v) || S(E, te) || b(E, te)))
        continue;
      if (!i) {
        let re = !1;
        for (let q = 0; q < x.length; q++)
          if (y(X, x[q])) {
            re = !0;
            break;
          }
        if (re) continue;
      }
      let R;
      if (i) {
        const re = /* @__PURE__ */ new Set();
        for (let ee = 0; ee < x.length; ee++)
          if (y(X, x[ee])) {
            const K = p[ee].fill;
            K && re.add(K);
          }
        const q = n.filter((ee) => !re.has(ee));
        if (q.length === 0) {
          if (l === "skip") continue;
          R = n[Math.floor(h() * n.length)];
        } else
          R = q[Math.floor(h() * q.length)];
      } else
        R = n[Math.floor(h() * n.length)];
      x.push(X), p.push({ kind: _, x: E, y: te, width: O, height: z, rotate: Q, depth: B, fill: R, shadow: "soft" });
    } else if (_ === "circle") {
      const O = 24 + h() * 80, z = j(_, E, te, void 0, void 0, O);
      if (!c && (y(z, v) || S(E, te) || b(E, te)))
        continue;
      if (!i) {
        let R = !1;
        for (let re = 0; re < x.length; re++)
          if (y(z, x[re])) {
            R = !0;
            break;
          }
        if (R) continue;
      }
      let X;
      if (i) {
        const R = /* @__PURE__ */ new Set();
        for (let q = 0; q < x.length; q++)
          if (y(z, x[q])) {
            const ee = p[q].fill;
            ee && R.add(ee);
          }
        const re = n.filter((q) => !R.has(q));
        if (re.length === 0) {
          if (l === "skip") continue;
          X = n[Math.floor(h() * n.length)];
        } else
          X = re[Math.floor(h() * re.length)];
      } else
        X = n[Math.floor(h() * n.length)];
      x.push(z), p.push({ kind: _, x: E, y: te, size: O, rotate: Q, depth: B, fill: X, shadow: "soft" });
    } else {
      const O = 28 + h() * 72, z = j(_, E, te, void 0, void 0, O);
      if (!c && (y(z, v) || S(E, te) || b(E, te)))
        continue;
      if (!i) {
        let R = !1;
        for (let re = 0; re < x.length; re++)
          if (y(z, x[re])) {
            R = !0;
            break;
          }
        if (R) continue;
      }
      let X;
      if (i) {
        const R = /* @__PURE__ */ new Set();
        for (let q = 0; q < x.length; q++)
          if (y(z, x[q])) {
            const ee = p[q].fill;
            ee && R.add(ee);
          }
        const re = n.filter((q) => !R.has(q));
        if (re.length === 0) {
          if (l === "skip") continue;
          X = n[Math.floor(h() * n.length)];
        } else
          X = re[Math.floor(h() * re.length)];
      } else
        X = n[Math.floor(h() * n.length)];
      x.push(z), p.push({ kind: _, x: E, y: te, size: O, rotate: Q, depth: B, fill: X, shadow: "soft" });
    }
  }
  return p;
}
const b1 = ({
  seed: e = 1,
  width: t = "100%",
  height: n = 400,
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
  featureWidth: g = "min(640px, 80%)",
  featureLayer: m = "over",
  excludeBoxPct: M = { w: 50, h: 36 },
  excludeCirclePct: I,
  excludeEllipsePct: T,
  uniformDistribution: C = !1,
  className: v,
  style: k
}) => {
  const D = Qe.useRef(null), [S, b] = Qe.useState({ w: 1200, h: 400 });
  Qe.useLayoutEffect(() => {
    if (!D.current) return;
    const N = new ResizeObserver((_) => {
      for (const E of _) {
        const te = E.contentRect;
        b({ w: te.width, h: te.height });
      }
    });
    return N.observe(D.current), () => N.disconnect();
  }, []);
  const y = Qe.useMemo(() => i?.length ? i : Rg(
    e,
    o,
    s,
    M,
    a,
    f,
    h,
    p,
    m === "over" || C,
    C,
    I,
    T
  ), [
    e,
    o,
    s.join(","),
    M.w,
    M.h,
    a,
    f,
    h,
    p,
    m,
    C,
    I?.r,
    T?.rx,
    T?.ry,
    i
  ]), A = 100, j = 100, F = Math.sqrt(3) / 2, L = (N, _, E) => {
    const te = (E ?? 40) / 2, U = N / 100 * S.w, B = _ / 100 * S.h, Q = f / F;
    return [Math.PI, 2 * Math.PI / 3, Math.PI / 3, 0, -Math.PI / 3, -(2 * Math.PI) / 3].map((z) => {
      const X = U + te * Math.cos(z), R = B + te * Math.sin(z) * Q;
      return [lt(X / S.w * 100, 0, 100), lt(R / S.h * 100, 0, 100)];
    });
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: D,
      className: [
        "nhs-pattern-banner",
        m === "under" ? "nhs-pattern-banner--feature-under" : "nhs-pattern-banner--feature-over",
        v
      ].filter(Boolean).join(" "),
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        height: typeof n == "number" ? `${n}px` : n,
        ...k
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhs-pattern-banner__svg",
            viewBox: `0 0 ${A} ${j}`,
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
                const N = (O) => O / S.w * 100, _ = (O) => O / S.h * 100, E = y.map((O) => {
                  const z = lt(O.x, 0, 100), X = lt(O.y, 0, 100);
                  if (O.kind === "circle") return [[z, X]];
                  if (O.kind === "rect") {
                    const R = N(O.width ?? 48), re = _(O.height ?? 36);
                    return [
                      [z - R / 2, X - re / 2],
                      [z + R / 2, X - re / 2],
                      [z + R / 2, X + re / 2],
                      [z - R / 2, X + re / 2]
                    ];
                  }
                  if (O.kind === "svg") {
                    const R = N(O.width ?? 48), re = _(O.height ?? 48);
                    return [
                      [z - R / 2, X - re / 2],
                      [z + R / 2, X - re / 2],
                      [z + R / 2, X + re / 2],
                      [z - R / 2, X + re / 2]
                    ];
                  }
                  return L(z, X, O.size ?? 40);
                }), te = Math.max(1, Math.floor(l ?? 1)), U = /* @__PURE__ */ new Set(), B = [];
                for (let O = 0; O < y.length; O++) {
                  const z = [];
                  for (let R = 0; R < y.length; R++) {
                    if (O === R) continue;
                    const re = y[O].x - y[R].x, q = y[O].y - y[R].y;
                    z.push({ j: R, d2: re * re + q * q });
                  }
                  z.sort((R, re) => R.d2 - re.d2);
                  const X = Math.min(te, z.length);
                  for (let R = 0; R < X; R++) {
                    const re = z[R].j, q = Math.min(O, re), ee = Math.max(O, re), K = `${q}-${ee}`;
                    U.has(K) || (U.add(K), B.push([q, ee]));
                  }
                }
                const Q = [];
                for (const [O, z] of B) {
                  const X = E[O], R = E[z];
                  let re = null;
                  for (const q of X)
                    for (const ee of R) {
                      const K = q[0] - ee[0], oe = q[1] - ee[1], de = K * K + oe * oe;
                      (!re || de < re.d2) && (re = { p: q, q: ee, d2: de });
                    }
                  re && Q.push(
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
                      `nn-line-${O}-${z}`
                    )
                  );
                }
                return Q;
              })() }),
              /* @__PURE__ */ r.jsx("g", { children: y.map((N, _) => {
                const E = ["nhs-pattern-banner-shape", N.fill].filter(Boolean).join(" ");
                if (N.kind === "circle") {
                  const O = (N.size ?? 40) / S.w * 100 * 0.5, z = S.w / S.h, X = O * z;
                  return /* @__PURE__ */ r.jsx(
                    "ellipse",
                    {
                      cx: lt(N.x, 0, 100),
                      cy: lt(N.y, 0, 100),
                      rx: O,
                      ry: X,
                      className: E
                    },
                    _
                  );
                }
                if (N.kind === "rect") {
                  const O = (N.width ?? 48) / S.w * 100, z = (N.height ?? 36) / S.h * 100, X = lt(N.x - O / 2, 0, 100), R = lt(N.y - z / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: X,
                      y: R,
                      width: O,
                      height: z,
                      className: E
                    },
                    _
                  );
                }
                if (N.kind === "svg" && N.src) {
                  const O = (N.width ?? 48) / S.w * 100, z = (N.height ?? 48) / S.h * 100, X = lt(N.x - O / 2, 0, 100), R = lt(N.y - z / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: N.src,
                      x: X,
                      y: R,
                      width: O,
                      height: z,
                      preserveAspectRatio: "xMidYMid meet",
                      className: E
                    },
                    _
                  );
                }
                const te = lt(N.x, 0, 100), U = lt(N.y, 0, 100), Q = L(te, U, N.size ?? 40).map((O) => O.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: Q, className: E }, _);
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
}, Bg = "150ms", Hg = "300ms", zg = "500ms", Og = "cubic-bezier(0.4, 0, 1, 1)", Ug = "cubic-bezier(0, 0, 0.2, 1)", Wg = "cubic-bezier(0.4, 0, 0.2, 1)", Gg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Yg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Vg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Zg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", qg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Jg = "1px", Xg = "2px", Kg = "4px", Qg = "4px", e0 = "4px", t0 = "2px", n0 = "1px", r0 = "0px", o0 = "4px", a0 = "8px", s0 = "12px", dc = "#d8dde0", uc = "#4c6272", fc = "#d8dde0", hc = "#aeb7bd", pc = "#d5281b", mc = "#005eb8", gc = "#ffffff", xc = "#212b32", bc = "#007f3b", yc = "#330072", vc = "#7c2855", wc = "#d5281b", Sc = "#ffeb3b", _c = "#fff9c4", kc = "#ffb81c", Cc = "#ed8b00", Nc = "#00a499", jc = "#ae2573", Mc = "#4c6272", Ic = "#768692", Dc = "#aeb7bd", Tc = "#d8dde0", Lc = "#f0f4f5", i0 = "#212b32", l0 = "#4c6272", c0 = "#ffffff", d0 = "#212b32", u0 = "#005eb8", f0 = "#7c2855", h0 = "#003087", p0 = "#330072", m0 = "#ffeb3b", g0 = "#212b32", x0 = "#d8dde0", b0 = "#ffffff33", y0 = "#d5281b", v0 = "#4c6272", w0 = "#ffffff", S0 = "#007f3b", _0 = "#ffffff", k0 = "#006530", C0 = "#004021", N0 = "#004021", j0 = "#00000000", M0 = "#ffffff", I0 = "#005eb8", D0 = "#005eb8", T0 = "#d9e5f2", L0 = "#c7daf0", $0 = "#005eb8", A0 = "#ffffff", E0 = "#212b32", P0 = "#d9dde0", F0 = "#b3bcc2", R0 = "#b3bcc2", B0 = "#d5281b", H0 = "#aa2016", z0 = "#6a140e", O0 = "#6a140e", U0 = "#005eb8", W0 = "#004b93", G0 = "#002f5c", Y0 = "#002f5c", V0 = "8px", Z0 = "16px", q0 = "12px", J0 = "16px", X0 = "4px", K0 = "40px", Q0 = "4px", ex = "40px", tx = "12px", nx = "16px", rx = "32px", ox = "16px", ax = "20px", sx = "28px", ix = "9px", lx = "2px", cx = "16px", dx = "24px", ux = "8px", fx = "24px", hx = "16px", px = "4px", mx = "4px", gx = "4px", xx = "8px", bx = "4px", yx = "16px", vx = "#007f3b", wx = "#006530", Sx = "#004021", _x = "#d8dde0", kx = "#ffffff", Cx = "#768692", Nx = "#00000000", jx = "#ffeb3b", Mx = "#00000000", Ix = "#ffffff", Dx = "#d9e5f2", Tx = "#c7daf0", Lx = "#005eb8", $x = "#005eb8", $c = "8px", Ac = "16px", Ec = "12px", Pc = "16px", Ax = "2px", Ex = "4px", Px = "4px", Fx = "600", Rx = "#ffffff", Bx = "#d8dde0", Hx = "#aeb7bd", zx = "#f0f4f5", Ox = "#212b32", Ux = "#212b32", Wx = "#005eb8", Fc = "16px", Rc = "32px", Bc = "16px", Gx = "1px", Yx = "4px", Vx = "none", Zx = "0 2px 4px rgba(0, 0, 0, 0.1)", qx = "#ffffff", Jx = "#ffffff", Xx = "#d8dde0", Kx = "#ffffff", Qx = "#4c6272", eb = "#ffeb3b", tb = "#d5281b", nb = "#aeb7bd", rb = "#212b32", ob = "#4c6272", ab = "#768692", sb = "#212b32", ib = "#ffffff", lb = "600", cb = "#d5281b", db = "600", ub = "#4c6272", Hc = "4px", zc = "40px", Oc = "40px", Uc = "12px", fb = "2px", hb = "4px", pb = "0px", mb = "16px", gb = "18px", xb = "24px", bb = "32px", yb = "34px", vb = "32px", wb = "40px", Sb = "48px", _b = "5.4ex", kb = "7.2ex", Cb = "9ex", Nb = "10.8ex", jb = "20ex", Mb = "38ex", Ib = "56ex", Db = "44px", Tb = "40px", Lb = "1020px", $b = "100%", Ab = "50%", Eb = "33.333%", Pb = "25%", Fb = "20%", Rb = "320px", Bb = "641px", Hb = "1025px", zb = "1280px", Ob = "960px", Ub = "32px", Wb = "16px", Gb = "#d5281b", Yb = "#d5281b", Vb = "#ffffff", Zb = "#007f3b", qb = "#007f3b", Jb = "#ffffff", Xb = "#ffeb3b", Kb = "#ffeb3b", Qb = "#212b32", ey = "#005eb8", ty = "#005eb8", ny = "#ffffff", ry = "#d8dde0", oy = "#aeb7bd", ay = "#768692", sy = "0 4px 0 #004021", iy = "0 4px 0 #005eb8", ly = "0 4px 0 #6a140e", cy = "0 4px 0 #ffeb3b", dy = "none", uy = "0 2px 4px rgba(0, 0, 0, 0.1)", fy = "4px", hy = "0px", py = "solid", my = "0 0 0 3px #ffeb3b", gy = "0 0 0 3px #ffeb3b", xy = "none", by = "0 1px 3px rgba(0, 0, 0, 0.12)", yy = "0 2px 6px rgba(0, 0, 0, 0.16)", vy = "0 4px 12px rgba(0, 0, 0, 0.20)", Wc = "0", Gc = "4px", Yc = "8px", Vc = "16px", Zc = "24px", qc = "32px", Jc = "40px", Xc = "48px", Kc = "56px", Qc = "64px", ya = "0", va = "0", wa = "4px", Sa = "4px", _a = "8px", ka = "8px", Ca = "8px", Na = "16px", ja = "16px", Ma = "24px", Ia = "24px", Da = "32px", Ta = "32px", La = "40px", $a = "40px", Aa = "48px", Ea = "48px", Pa = "56px", Fa = "56px", Ra = "64px", Yr = "Frutiger W01", Vr = "Arial, Helvetica, sans-serif", Zr = "sans-serif", qr = "400", Jr = "600", Xr = "400", Kr = "12px", Qr = "14px", eo = "12pt", to = "14px", no = "16px", ro = "12pt", oo = "16px", ao = "19px", so = "13pt", io = "19px", lo = "22px", co = "15pt", uo = "22px", fo = "26px", ho = "17pt", po = "27px", mo = "36px", go = "20pt", xo = "33px", bo = "48px", yo = "24pt", Ba = "16px", Ha = "24px", Rt = {
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
}, Yt = {
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
}, wy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Bg,
  AnimationDurationNormal: Hg,
  AnimationDurationSlow: zg,
  AnimationEasingBounce: Gg,
  AnimationEasingEaseIn: Og,
  AnimationEasingEaseInOut: Wg,
  AnimationEasingEaseOut: Ug,
  BorderColorCard: fc,
  BorderColorCardHover: hc,
  BorderColorDefault: dc,
  BorderColorError: pc,
  BorderColorForm: uc,
  BorderRadiusLarge: s0,
  BorderRadiusMedium: a0,
  BorderRadiusNone: r0,
  BorderRadiusSmall: o0,
  BorderWidthCardBottom: Qg,
  BorderWidthDefault: Jg,
  BorderWidthFormElement: Xg,
  BorderWidthFormElementError: Kg,
  BorderWidthPanel: e0,
  BorderWidthTableCell: n0,
  BorderWidthTableHeader: t0,
  BreakpointDesktop: Hb,
  BreakpointLargeDesktop: zb,
  BreakpointMobile: Rb,
  BreakpointTablet: Bb,
  ButtonBorderRadius: Ex,
  ButtonBorderWidth: Ax,
  ButtonPrimaryBackgroundActive: Sx,
  ButtonPrimaryBackgroundDefault: vx,
  ButtonPrimaryBackgroundDisabled: _x,
  ButtonPrimaryBackgroundHover: wx,
  ButtonPrimaryBorderDefault: Nx,
  ButtonPrimaryBorderFocus: jx,
  ButtonPrimaryTextDefault: kx,
  ButtonPrimaryTextDisabled: Cx,
  ButtonSecondaryBackgroundActive: Tx,
  ButtonSecondaryBackgroundDefault: Mx,
  ButtonSecondaryBackgroundHover: Dx,
  ButtonSecondaryBackgroundSolid: Ix,
  ButtonSecondaryBorderDefault: $x,
  ButtonSecondaryTextDefault: Lx,
  ButtonShadowSize: Px,
  ButtonSpacingPaddingHorizontalDesktop: Pc,
  ButtonSpacingPaddingHorizontalMobile: Ac,
  ButtonSpacingPaddingVerticalDesktop: Ec,
  ButtonSpacingPaddingVerticalMobile: $c,
  ButtonTypographyWeight: Fx,
  CardBackgroundDefault: Rx,
  CardBorderBottom: zx,
  CardBorderDefault: Bx,
  CardBorderHover: Hx,
  CardBorderWidthBottom: Yx,
  CardBorderWidthDefault: Gx,
  CardShadowDefault: Vx,
  CardShadowHover: Zx,
  CardSpacingHeadingMargin: Bc,
  CardSpacingPaddingDesktop: Rc,
  CardSpacingPaddingMobile: Fc,
  CardTextDescription: Ux,
  CardTextHeading: Ox,
  CardTextLink: Wx,
  ColorBorderDefault: x0,
  ColorBorderSecondary: b0,
  ColorButtonLoginActive: G0,
  ColorButtonLoginBackground: U0,
  ColorButtonLoginHover: W0,
  ColorButtonLoginShadow: Y0,
  ColorButtonPrimaryActive: C0,
  ColorButtonPrimaryBackground: S0,
  ColorButtonPrimaryHover: k0,
  ColorButtonPrimaryShadow: N0,
  ColorButtonPrimaryText: _0,
  ColorButtonReverseActive: F0,
  ColorButtonReverseBackground: A0,
  ColorButtonReverseHover: P0,
  ColorButtonReverseShadow: R0,
  ColorButtonReverseText: E0,
  ColorButtonSecondaryActive: L0,
  ColorButtonSecondaryBackground: j0,
  ColorButtonSecondaryBackgroundSolid: M0,
  ColorButtonSecondaryBorder: I0,
  ColorButtonSecondaryHover: T0,
  ColorButtonSecondaryShadow: $0,
  ColorButtonSecondaryText: D0,
  ColorButtonWarningActive: z0,
  ColorButtonWarningBackground: B0,
  ColorButtonWarningHover: H0,
  ColorButtonWarningShadow: O0,
  ColorError: y0,
  ColorFocusBackground: m0,
  ColorFocusText: g0,
  ColorFormBackground: w0,
  ColorFormBorder: v0,
  ColorGrey1: Mc,
  ColorGrey2: Ic,
  ColorGrey3: Dc,
  ColorGrey4: Tc,
  ColorGrey5: Lc,
  ColorLinkActive: h0,
  ColorLinkDefault: u0,
  ColorLinkHover: f0,
  ColorLinkVisited: p0,
  ColorPrimaryBlack: xc,
  ColorPrimaryBlue: mc,
  ColorPrimaryDarkPink: vc,
  ColorPrimaryGreen: bc,
  ColorPrimaryPurple: yc,
  ColorPrimaryRed: wc,
  ColorPrimaryWhite: gc,
  ColorPrimaryYellow: Sc,
  ColorSecondaryAquaGreen: Nc,
  ColorSecondaryOrange: Cc,
  ColorSecondaryPaleYellow: _c,
  ColorSecondaryPink: jc,
  ColorSecondaryWarmYellow: kc,
  ColorTextPrimary: i0,
  ColorTextPrint: d0,
  ColorTextReverse: c0,
  ColorTextSecondary: l0,
  ComponentBlur: mx,
  ComponentBreadcrumbChevronMarginLeft: ix,
  ComponentBreadcrumbChevronMarginRight: lx,
  ComponentBreadcrumbPaddingTopDesktop: dx,
  ComponentBreadcrumbPaddingTopMobile: cx,
  ComponentButtonPaddingDesktopHorizontal: J0,
  ComponentButtonPaddingDesktopVertical: q0,
  ComponentButtonPaddingMobileHorizontal: Z0,
  ComponentButtonPaddingMobileVertical: V0,
  ComponentButtonShadowSize: X0,
  ComponentCardHeadingMargin: ox,
  ComponentCardPaddingDesktop: rx,
  ComponentCardPaddingMobile: nx,
  ComponentDetails: xx,
  ComponentExpander: bx,
  ComponentFormCheckboxLabelPadding: tx,
  ComponentFormCheckboxSize: ex,
  ComponentFormInputMinHeight: K0,
  ComponentFormInputPadding: Q0,
  ComponentLink: gx,
  ComponentPagination: yx,
  ComponentPanelPaddingDesktop: sx,
  ComponentPanelPaddingMobile: ax,
  ComponentSpread: px,
  ComponentSummaryListCellPaddingHorizontal: fx,
  ComponentSummaryListCellPaddingVertical: ux,
  ComponentSummaryListRowMargin: hx,
  ElevationHigh: vy,
  ElevationLow: by,
  ElevationMedium: yy,
  ElevationNone: xy,
  FocusOutlineOffset: hy,
  FocusOutlineStyle: py,
  FocusOutlineWidth: fy,
  FocusShadowButton: gy,
  FocusShadowInput: my,
  FontFamilyBase: Yr,
  FontFamilyFallback: Vr,
  FontFamilyPrint: Zr,
  FontLineHeightBase: Ha,
  FontSize14Mobile: Kr,
  FontSize14Print: eo,
  FontSize14Tablet: Qr,
  FontSize16Mobile: to,
  FontSize16Print: ro,
  FontSize16Tablet: no,
  FontSize19Mobile: oo,
  FontSize19Print: so,
  FontSize19Tablet: ao,
  FontSize22Mobile: io,
  FontSize22Print: co,
  FontSize22Tablet: lo,
  FontSize26Mobile: uo,
  FontSize26Print: ho,
  FontSize26Tablet: fo,
  FontSize36Mobile: po,
  FontSize36Print: go,
  FontSize36Tablet: mo,
  FontSize48Mobile: xo,
  FontSize48Print: yo,
  FontSize48Tablet: bo,
  FontSizeBase: Ba,
  FontWeightBold: Jr,
  FontWeightLight: Xr,
  FontWeightNormal: qr,
  FormBorderRadius: pb,
  FormBorderWidthDefault: fb,
  FormBorderWidthError: hb,
  FormErrorTextDefault: cb,
  FormErrorTypographyWeight: db,
  FormHintTextDefault: ub,
  FormInputBackgroundDefault: qx,
  FormInputBackgroundDisabled: Xx,
  FormInputBackgroundError: Kx,
  FormInputBackgroundFocus: Jx,
  FormInputBorderDefault: Qx,
  FormInputBorderDisabled: nb,
  FormInputBorderError: tb,
  FormInputBorderFocus: eb,
  FormInputTextDefault: rb,
  FormInputTextDisabled: ab,
  FormInputTextPlaceholder: ob,
  FormLabelTextDefault: sb,
  FormLabelTextRequired: ib,
  FormLabelTypographyWeight: lb,
  FormSpacingCheckboxLabelPadding: Uc,
  FormSpacingCheckboxSize: Oc,
  FormSpacingInputMinHeight: zc,
  FormSpacingInputPadding: Hc,
  GridGutter: Ub,
  GridGutterHalf: Wb,
  GridPageWidth: Ob,
  HeadingsNhsukHeadingL: Bt,
  HeadingsNhsukHeadingM: Ht,
  HeadingsNhsukHeadingS: zt,
  HeadingsNhsukHeadingXl: Rt,
  HeadingsNhsukHeadingXs: Ot,
  LayoutColumnActions: Fb,
  LayoutColumnFull: $b,
  LayoutColumnHalf: Ab,
  LayoutColumnQuarter: Pb,
  LayoutColumnThird: Eb,
  LayoutContainerMaxWidth: Lb,
  ParagraphsBody: Ut,
  ParagraphsBodyLarge: Wt,
  ParagraphsBodySmall: Gt,
  ParagraphsLedeText: Yt,
  ParagraphsLedeTextSmall: Vt,
  ShadowButtonDefault: sy,
  ShadowButtonFocus: cy,
  ShadowButtonSecondary: iy,
  ShadowButtonWarning: ly,
  ShadowCardDefault: dy,
  ShadowCardHover: uy,
  SizeButtonMinHeightDesktop: Tb,
  SizeButtonMinHeightMobile: Db,
  SizeFormControlLarge: Sb,
  SizeFormControlMedium: wb,
  SizeFormControlSmall: vb,
  SizeFormInputWidth2xl: Mb,
  SizeFormInputWidth3xl: Ib,
  SizeFormInputWidthLg: Nb,
  SizeFormInputWidthMd: Cb,
  SizeFormInputWidthSm: kb,
  SizeFormInputWidthXl: jb,
  SizeFormInputWidthXs: _b,
  SizeIconExtraLarge: bb,
  SizeIconLarge: xb,
  SizeIconMedium: gb,
  SizeIconNhsDefault: yb,
  SizeIconSmall: mb,
  Spacing0: Wc,
  Spacing1: Gc,
  Spacing2: Yc,
  Spacing3: Vc,
  Spacing4: Zc,
  Spacing5: qc,
  Spacing6: Jc,
  Spacing7: Xc,
  Spacing8: Kc,
  Spacing9: Qc,
  SpacingResponsive0Mobile: ya,
  SpacingResponsive0Tablet: va,
  SpacingResponsive1Mobile: wa,
  SpacingResponsive1Tablet: Sa,
  SpacingResponsive2Mobile: _a,
  SpacingResponsive2Tablet: ka,
  SpacingResponsive3Mobile: Ca,
  SpacingResponsive3Tablet: Na,
  SpacingResponsive4Mobile: ja,
  SpacingResponsive4Tablet: Ma,
  SpacingResponsive5Mobile: Ia,
  SpacingResponsive5Tablet: Da,
  SpacingResponsive6Mobile: Ta,
  SpacingResponsive6Tablet: La,
  SpacingResponsive7Mobile: $a,
  SpacingResponsive7Tablet: Aa,
  SpacingResponsive8Mobile: Ea,
  SpacingResponsive8Tablet: Pa,
  SpacingResponsive9Mobile: Fa,
  SpacingResponsive9Tablet: Ra,
  StateDisabledBackground: ry,
  StateDisabledBorder: oy,
  StateDisabledText: ay,
  StateErrorBackground: Gb,
  StateErrorBorder: Yb,
  StateErrorText: Vb,
  StateInfoBackground: ey,
  StateInfoBorder: ty,
  StateInfoText: ny,
  StateSuccessBackground: Zb,
  StateSuccessBorder: qb,
  StateSuccessText: Jb,
  StateWarningBackground: Xb,
  StateWarningBorder: Kb,
  StateWarningText: Qb,
  TransitionButtonDefault: Yg,
  TransitionButtonShadow: Vg,
  TransitionCardHover: qg,
  TransitionInputFocus: Zg
}, Symbol.toStringTag, { value: "Module" })), y1 = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), v1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), w1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), S1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), _1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), k1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), C1 = ({
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
), N1 = ({
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
), j1 = ({
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
), M1 = ({
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
), I1 = ({
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
), D1 = () => Ee(() => wy, []), T1 = () => Ee(() => ({
  // Border colors
  BorderColorDefault: dc,
  BorderColorForm: uc,
  BorderColorCard: fc,
  BorderColorCardHover: hc,
  BorderColorError: pc,
  // Primary colors
  ColorPrimaryBlue: mc,
  ColorPrimaryWhite: gc,
  ColorPrimaryBlack: xc,
  ColorPrimaryGreen: bc,
  ColorPrimaryPurple: yc,
  ColorPrimaryDarkPink: vc,
  ColorPrimaryRed: wc,
  ColorPrimaryYellow: Sc,
  // Secondary colors
  ColorSecondaryPaleYellow: _c,
  ColorSecondaryWarmYellow: kc,
  ColorSecondaryOrange: Cc,
  ColorSecondaryAquaGreen: Nc,
  ColorSecondaryPink: jc,
  // Grey scale
  ColorGrey1: Mc,
  ColorGrey2: Ic,
  ColorGrey3: Dc,
  ColorGrey4: Tc,
  ColorGrey5: Lc
}), []), L1 = () => Ee(() => ({
  Spacing0: Wc,
  Spacing1: Gc,
  Spacing2: Yc,
  Spacing3: Vc,
  Spacing4: Zc,
  Spacing5: qc,
  Spacing6: Jc,
  Spacing7: Xc,
  Spacing8: Kc,
  Spacing9: Qc
}), []), $1 = () => Ee(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Kr,
    Size16: to,
    Size19: oo,
    Size22: io,
    Size26: uo,
    Size36: po,
    Size48: xo
  },
  Tablet: {
    Size14: Qr,
    Size16: no,
    Size19: ao,
    Size22: lo,
    Size26: fo,
    Size36: mo,
    Size48: bo
  },
  Print: {
    Size14: eo,
    Size16: ro,
    Size19: so,
    Size22: co,
    Size26: ho,
    Size36: go,
    Size48: yo
  },
  Family: {
    Base: Yr,
    Fallback: Vr,
    Print: Zr
  },
  Weight: {
    Normal: qr,
    Bold: Jr,
    Light: Xr
  },
  Base: {
    Size: Ba,
    LineHeight: Ha
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Yr,
  FontFamilyFallback: Vr,
  FontFamilyPrint: Zr,
  FontWeightNormal: qr,
  FontWeightBold: Jr,
  FontWeightLight: Xr,
  FontSize14Mobile: Kr,
  FontSize14Tablet: Qr,
  FontSize14Print: eo,
  FontSize16Mobile: to,
  FontSize16Tablet: no,
  FontSize16Print: ro,
  FontSize19Mobile: oo,
  FontSize19Tablet: ao,
  FontSize19Print: so,
  FontSize22Mobile: io,
  FontSize22Tablet: lo,
  FontSize22Print: co,
  FontSize26Mobile: uo,
  FontSize26Tablet: fo,
  FontSize26Print: ho,
  FontSize36Mobile: po,
  FontSize36Tablet: mo,
  FontSize36Print: go,
  FontSize48Mobile: xo,
  FontSize48Tablet: bo,
  FontSize48Print: yo,
  FontSizeBase: Ba,
  FontLineHeightBase: Ha
}), []), A1 = () => Ee(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ya,
    Size1: wa,
    Size2: _a,
    Size3: Ca,
    Size4: ja,
    Size5: Ia,
    Size6: Ta,
    Size7: $a,
    Size8: Ea,
    Size9: Fa
  },
  Tablet: {
    Size0: va,
    Size1: Sa,
    Size2: ka,
    Size3: Na,
    Size4: Ma,
    Size5: Da,
    Size6: La,
    Size7: Aa,
    Size8: Pa,
    Size9: Ra
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: ya,
  SpacingResponsive0Tablet: va,
  SpacingResponsive1Mobile: wa,
  SpacingResponsive1Tablet: Sa,
  SpacingResponsive2Mobile: _a,
  SpacingResponsive2Tablet: ka,
  SpacingResponsive3Mobile: Ca,
  SpacingResponsive3Tablet: Na,
  SpacingResponsive4Mobile: ja,
  SpacingResponsive4Tablet: Ma,
  SpacingResponsive5Mobile: Ia,
  SpacingResponsive5Tablet: Da,
  SpacingResponsive6Mobile: Ta,
  SpacingResponsive6Tablet: La,
  SpacingResponsive7Mobile: $a,
  SpacingResponsive7Tablet: Aa,
  SpacingResponsive8Mobile: Ea,
  SpacingResponsive8Tablet: Pa,
  SpacingResponsive9Mobile: Fa,
  SpacingResponsive9Tablet: Ra
}), []), E1 = () => Ee(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: $c,
  ButtonSpacingPaddingHorizontalMobile: Ac,
  ButtonSpacingPaddingVerticalDesktop: Ec,
  ButtonSpacingPaddingHorizontalDesktop: Pc,
  // Card spacing	
  CardSpacingPaddingMobile: Fc,
  CardSpacingPaddingDesktop: Rc,
  CardSpacingHeadingMargin: Bc,
  // Form spacing
  FormSpacingInputPadding: Hc,
  FormSpacingInputMinHeight: zc,
  FormSpacingCheckboxSize: Oc,
  FormSpacingCheckboxLabelPadding: Uc
}), []), P1 = () => Ee(() => ({
  xl: Rt,
  l: Bt,
  m: Ht,
  s: zt,
  xs: Ot
}), []), F1 = () => Ee(() => ({
  body: Ut,
  bodyLarge: Wt,
  bodySmall: Gt,
  ledeText: Yt,
  ledeTextSmall: Vt
}), []), R1 = () => Ee(() => ({
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
    ledeText: Yt,
    ledeTextSmall: Vt
  },
  fonts: {
    family: {
      base: Yr,
      fallback: Vr,
      print: Zr
    },
    weight: {
      normal: qr,
      bold: Jr,
      light: Xr
    },
    sizes: {
      mobile: {
        size14: Kr,
        size16: to,
        size19: oo,
        size22: io,
        size26: uo,
        size36: po,
        size48: xo
      },
      tablet: {
        size14: Qr,
        size16: no,
        size19: ao,
        size22: lo,
        size26: fo,
        size36: mo,
        size48: bo
      },
      print: {
        size14: eo,
        size16: ro,
        size19: so,
        size22: co,
        size26: ho,
        size36: go,
        size48: yo
      }
    }
  }
}), []);
function B1(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [o, a] = Z.useState(t), s = Z.useCallback(() => a("three-column"), []), i = Z.useCallback(() => a((c) => c === "three-column" ? n : c), [n]), l = Z.useCallback(() => a((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: o,
    setLayout: a,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: o === "three-column"
  };
}
const ed = {
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
function H1(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...ed, ...e }, o = [];
  return n?.includes(400) && o.push(`
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
}`), n?.includes(600) && o.push(`
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
function z1(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...ed, ...e };
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
  ].forEach((a) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = a.href, s.as = a.as, s.type = a.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const O1 = '"Frutiger W01", Arial, Helvetica, sans-serif', U1 = "Arial, Helvetica, sans-serif";
async function W1() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  qp as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  Sr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  _r as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Jp as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  Xp as AXIS_ZIGZAG_DEFAULT_CYCLES,
  Qp as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  Kp as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Ai as Account,
  Cy as ActionLink,
  t1 as AdaptiveDataGrid,
  Bg as AnimationDurationFast,
  Hg as AnimationDurationNormal,
  zg as AnimationDurationSlow,
  Gg as AnimationEasingBounce,
  Og as AnimationEasingEaseIn,
  Wg as AnimationEasingEaseInOut,
  Ug as AnimationEasingEaseOut,
  yl as AppointmentCard,
  d1 as AreaSeriesPrimitive,
  Uh as AriaDataGrid,
  ia as AriaTabsDataGrid,
  t1 as AriaTabsDataGridAdaptive,
  fi as Axis,
  qn as BackLink,
  f1 as BandScalesProvider,
  u1 as BarSeriesPrimitive,
  fc as BorderColorCard,
  hc as BorderColorCardHover,
  dc as BorderColorDefault,
  pc as BorderColorError,
  uc as BorderColorForm,
  s0 as BorderRadiusLarge,
  a0 as BorderRadiusMedium,
  r0 as BorderRadiusNone,
  o0 as BorderRadiusSmall,
  Qg as BorderWidthCardBottom,
  Jg as BorderWidthDefault,
  Xg as BorderWidthFormElement,
  Kg as BorderWidthFormElementError,
  e0 as BorderWidthPanel,
  n0 as BorderWidthTableCell,
  t0 as BorderWidthTableHeader,
  Ry as BrandThemeProvider,
  fl as Breadcrumb,
  jd as Breakpoint,
  Hb as BreakpointDesktop,
  zb as BreakpointLargeDesktop,
  Rb as BreakpointMobile,
  Bb as BreakpointTablet,
  bt as Button,
  Ex as ButtonBorderRadius,
  Ax as ButtonBorderWidth,
  Sx as ButtonPrimaryBackgroundActive,
  vx as ButtonPrimaryBackgroundDefault,
  _x as ButtonPrimaryBackgroundDisabled,
  wx as ButtonPrimaryBackgroundHover,
  Nx as ButtonPrimaryBorderDefault,
  jx as ButtonPrimaryBorderFocus,
  kx as ButtonPrimaryTextDefault,
  Cx as ButtonPrimaryTextDisabled,
  Tx as ButtonSecondaryBackgroundActive,
  Mx as ButtonSecondaryBackgroundDefault,
  Dx as ButtonSecondaryBackgroundHover,
  Ix as ButtonSecondaryBackgroundSolid,
  $x as ButtonSecondaryBorderDefault,
  Lx as ButtonSecondaryTextDefault,
  Px as ButtonShadowSize,
  Pi as ButtonSize,
  Pc as ButtonSpacingPaddingHorizontalDesktop,
  Ac as ButtonSpacingPaddingHorizontalMobile,
  Ec as ButtonSpacingPaddingVerticalDesktop,
  $c as ButtonSpacingPaddingVerticalMobile,
  Fx as ButtonTypographyWeight,
  Ei as ButtonVariant,
  pl as Card,
  Rx as CardBackgroundDefault,
  zx as CardBorderBottom,
  Bx as CardBorderDefault,
  Hx as CardBorderHover,
  Yx as CardBorderWidthBottom,
  Gx as CardBorderWidthDefault,
  Uy as CardGroup,
  Wy as CardGroupItem,
  Vx as CardShadowDefault,
  Zx as CardShadowHover,
  Bc as CardSpacingHeadingMargin,
  Rc as CardSpacingPaddingDesktop,
  Fc as CardSpacingPaddingMobile,
  Ux as CardTextDescription,
  Ox as CardTextHeading,
  Wx as CardTextLink,
  Gy as CareCard,
  Ny as CharacterCount,
  p1 as ChartEnhancer,
  h1 as ChartNoScript,
  Vp as ChartRoot,
  pd as Checkbox,
  bd as Checkboxes,
  x0 as ColorBorderDefault,
  b0 as ColorBorderSecondary,
  G0 as ColorButtonLoginActive,
  U0 as ColorButtonLoginBackground,
  W0 as ColorButtonLoginHover,
  Y0 as ColorButtonLoginShadow,
  C0 as ColorButtonPrimaryActive,
  S0 as ColorButtonPrimaryBackground,
  k0 as ColorButtonPrimaryHover,
  N0 as ColorButtonPrimaryShadow,
  _0 as ColorButtonPrimaryText,
  F0 as ColorButtonReverseActive,
  A0 as ColorButtonReverseBackground,
  P0 as ColorButtonReverseHover,
  R0 as ColorButtonReverseShadow,
  E0 as ColorButtonReverseText,
  L0 as ColorButtonSecondaryActive,
  j0 as ColorButtonSecondaryBackground,
  M0 as ColorButtonSecondaryBackgroundSolid,
  I0 as ColorButtonSecondaryBorder,
  T0 as ColorButtonSecondaryHover,
  $0 as ColorButtonSecondaryShadow,
  D0 as ColorButtonSecondaryText,
  z0 as ColorButtonWarningActive,
  B0 as ColorButtonWarningBackground,
  H0 as ColorButtonWarningHover,
  O0 as ColorButtonWarningShadow,
  y0 as ColorError,
  m0 as ColorFocusBackground,
  g0 as ColorFocusText,
  w0 as ColorFormBackground,
  v0 as ColorFormBorder,
  Mc as ColorGrey1,
  Ic as ColorGrey2,
  Dc as ColorGrey3,
  Tc as ColorGrey4,
  Lc as ColorGrey5,
  h0 as ColorLinkActive,
  u0 as ColorLinkDefault,
  f0 as ColorLinkHover,
  p0 as ColorLinkVisited,
  xc as ColorPrimaryBlack,
  mc as ColorPrimaryBlue,
  vc as ColorPrimaryDarkPink,
  bc as ColorPrimaryGreen,
  yc as ColorPrimaryPurple,
  wc as ColorPrimaryRed,
  gc as ColorPrimaryWhite,
  Sc as ColorPrimaryYellow,
  Nc as ColorSecondaryAquaGreen,
  Cc as ColorSecondaryOrange,
  _c as ColorSecondaryPaleYellow,
  jc as ColorSecondaryPink,
  kc as ColorSecondaryWarmYellow,
  i0 as ColorTextPrimary,
  d0 as ColorTextPrint,
  c0 as ColorTextReverse,
  l0 as ColorTextSecondary,
  Jn as Column,
  Id as ColumnAlign,
  mx as ComponentBlur,
  ix as ComponentBreadcrumbChevronMarginLeft,
  lx as ComponentBreadcrumbChevronMarginRight,
  dx as ComponentBreadcrumbPaddingTopDesktop,
  cx as ComponentBreadcrumbPaddingTopMobile,
  J0 as ComponentButtonPaddingDesktopHorizontal,
  q0 as ComponentButtonPaddingDesktopVertical,
  Z0 as ComponentButtonPaddingMobileHorizontal,
  V0 as ComponentButtonPaddingMobileVertical,
  X0 as ComponentButtonShadowSize,
  ox as ComponentCardHeadingMargin,
  rx as ComponentCardPaddingDesktop,
  nx as ComponentCardPaddingMobile,
  xx as ComponentDetails,
  bx as ComponentExpander,
  tx as ComponentFormCheckboxLabelPadding,
  ex as ComponentFormCheckboxSize,
  K0 as ComponentFormInputMinHeight,
  Q0 as ComponentFormInputPadding,
  gx as ComponentLink,
  yx as ComponentPagination,
  sx as ComponentPanelPaddingDesktop,
  ax as ComponentPanelPaddingMobile,
  px as ComponentSpread,
  fx as ComponentSummaryListCellPaddingHorizontal,
  ux as ComponentSummaryListCellPaddingVertical,
  hx as ComponentSummaryListRowMargin,
  Hi as Container,
  Oy as ContentsList,
  ed as DEFAULT_FONT_CONFIG,
  Ky as DashboardSummaryGrid,
  Ey as DateInput,
  Th as Details,
  Lh as DoDontList,
  vy as ElevationHigh,
  by as ElevationLow,
  yy as ElevationMedium,
  xy as ElevationNone,
  xs as ErrorMessage,
  Ay as ErrorSummary,
  $h as Expander,
  St as FRUTIGER_FONT_FILES,
  Ua as Fieldset,
  Md as Float,
  hy as FocusOutlineOffset,
  py as FocusOutlineStyle,
  fy as FocusOutlineWidth,
  gy as FocusShadowButton,
  my as FocusShadowInput,
  Yr as FontFamilyBase,
  Vr as FontFamilyFallback,
  Zr as FontFamilyPrint,
  Ha as FontLineHeightBase,
  Kr as FontSize14Mobile,
  eo as FontSize14Print,
  Qr as FontSize14Tablet,
  to as FontSize16Mobile,
  ro as FontSize16Print,
  no as FontSize16Tablet,
  oo as FontSize19Mobile,
  so as FontSize19Print,
  ao as FontSize19Tablet,
  io as FontSize22Mobile,
  co as FontSize22Print,
  lo as FontSize22Tablet,
  uo as FontSize26Mobile,
  ho as FontSize26Print,
  fo as FontSize26Tablet,
  po as FontSize36Mobile,
  go as FontSize36Print,
  mo as FontSize36Tablet,
  xo as FontSize48Mobile,
  yo as FontSize48Print,
  bo as FontSize48Tablet,
  Ba as FontSizeBase,
  Jr as FontWeightBold,
  Xr as FontWeightLight,
  qr as FontWeightNormal,
  Vi as Footer,
  pb as FormBorderRadius,
  fb as FormBorderWidthDefault,
  hb as FormBorderWidthError,
  cb as FormErrorTextDefault,
  db as FormErrorTypographyWeight,
  ub as FormHintTextDefault,
  qx as FormInputBackgroundDefault,
  Xx as FormInputBackgroundDisabled,
  Kx as FormInputBackgroundError,
  Jx as FormInputBackgroundFocus,
  Qx as FormInputBorderDefault,
  nb as FormInputBorderDisabled,
  tb as FormInputBorderError,
  eb as FormInputBorderFocus,
  rb as FormInputTextDefault,
  ab as FormInputTextDisabled,
  ob as FormInputTextPlaceholder,
  sb as FormLabelTextDefault,
  ib as FormLabelTextRequired,
  lb as FormLabelTypographyWeight,
  Uc as FormSpacingCheckboxLabelPadding,
  Oc as FormSpacingCheckboxSize,
  zc as FormSpacingInputMinHeight,
  Hc as FormSpacingInputPadding,
  Hy as GanttChart,
  Qo as Grid,
  Ub as GridGutter,
  Wb as GridGutterHalf,
  em as GridLines,
  Ob as GridPageWidth,
  gn as GridWidth,
  Yi as Header,
  By as HeaderSSR,
  Jd as HeaderSearch,
  Yi as HeaderStatic,
  Jt as Heading,
  Bt as HeadingsNhsukHeadingL,
  Ht as HeadingsNhsukHeadingM,
  zt as HeadingsNhsukHeadingS,
  Rt as HeadingsNhsukHeadingXl,
  Ot as HeadingsNhsukHeadingXs,
  Kd as Hero,
  Ri as Hint,
  Jy as Images,
  za as Input,
  Yy as InsetText,
  Oa as Label,
  Fb as LayoutColumnActions,
  $b as LayoutColumnFull,
  Ab as LayoutColumnHalf,
  Pb as LayoutColumnQuarter,
  Eb as LayoutColumnThird,
  Lb as LayoutContainerMaxWidth,
  c1 as Legend,
  Zp as LineScalesProvider,
  Pm as LineSeriesPrimitive,
  Ld as List,
  zi as MainWrapper,
  vl as MedicationCard,
  Bm as MetricCard,
  C1 as NHSBodyText,
  N1 as NHSBodyTextLarge,
  j1 as NHSBodyTextSmall,
  v1 as NHSHeading1,
  w1 as NHSHeading2,
  S1 as NHSHeading3,
  _1 as NHSHeading4,
  k1 as NHSHeading5,
  M1 as NHSLedeText,
  I1 as NHSLedeTextSmall,
  Fy as NHSThemeProvider,
  U1 as NHS_FALLBACK_FONT_STACK,
  O1 as NHS_FONT_STACK,
  Ep as NavigationSplitView,
  r1 as PageTemplate,
  zy as Pagination,
  Ch as Panel,
  Ut as ParagraphsBody,
  Wt as ParagraphsBodyLarge,
  Gt as ParagraphsBodySmall,
  Yt as ParagraphsLedeText,
  Vt as ParagraphsLedeTextSmall,
  x1 as ParallaxScene,
  bl as PatientCard,
  b1 as PatternBanner,
  zp as ProductRoadmap,
  jy as Radios,
  My as RadiosServer,
  t1 as ResponsiveDataGrid,
  n1 as ResponsiveDataGridDemo,
  on as Row,
  m1 as SPC,
  Dg as SPCChart,
  g1 as SPCMetricCard,
  Cr as Select,
  _d as SelectOption,
  sy as ShadowButtonDefault,
  cy as ShadowButtonFocus,
  iy as ShadowButtonSecondary,
  ly as ShadowButtonWarning,
  dy as ShadowCardDefault,
  uy as ShadowCardHover,
  Tb as SizeButtonMinHeightDesktop,
  Db as SizeButtonMinHeightMobile,
  Sb as SizeFormControlLarge,
  wb as SizeFormControlMedium,
  vb as SizeFormControlSmall,
  Mb as SizeFormInputWidth2xl,
  Ib as SizeFormInputWidth3xl,
  Nb as SizeFormInputWidthLg,
  Cb as SizeFormInputWidthMd,
  kb as SizeFormInputWidthSm,
  jb as SizeFormInputWidthXl,
  _b as SizeFormInputWidthXs,
  bb as SizeIconExtraLarge,
  xb as SizeIconLarge,
  gb as SizeIconMedium,
  yb as SizeIconNhsDefault,
  mb as SizeIconSmall,
  hl as SkipLink,
  Xy as SlotMatrix,
  Qy as SortStatusControl,
  Wc as Spacing0,
  Gc as Spacing1,
  Yc as Spacing2,
  Vc as Spacing3,
  Zc as Spacing4,
  qc as Spacing5,
  Jc as Spacing6,
  Xc as Spacing7,
  Kc as Spacing8,
  Qc as Spacing9,
  ya as SpacingResponsive0Mobile,
  va as SpacingResponsive0Tablet,
  wa as SpacingResponsive1Mobile,
  Sa as SpacingResponsive1Tablet,
  _a as SpacingResponsive2Mobile,
  ka as SpacingResponsive2Tablet,
  Ca as SpacingResponsive3Mobile,
  Na as SpacingResponsive3Tablet,
  ja as SpacingResponsive4Mobile,
  Ma as SpacingResponsive4Tablet,
  Ia as SpacingResponsive5Mobile,
  Da as SpacingResponsive5Tablet,
  Ta as SpacingResponsive6Mobile,
  La as SpacingResponsive6Tablet,
  $a as SpacingResponsive7Mobile,
  Aa as SpacingResponsive7Tablet,
  Ea as SpacingResponsive8Mobile,
  Pa as SpacingResponsive8Tablet,
  Fa as SpacingResponsive9Mobile,
  Ra as SpacingResponsive9Tablet,
  Iy as SpacingUtilities,
  ry as StateDisabledBackground,
  oy as StateDisabledBorder,
  ay as StateDisabledText,
  Gb as StateErrorBackground,
  Yb as StateErrorBorder,
  Vb as StateErrorText,
  ey as StateInfoBackground,
  ty as StateInfoBorder,
  ny as StateInfoText,
  Zb as StateSuccessBackground,
  qb as StateSuccessBorder,
  Jb as StateSuccessText,
  Xb as StateWarningBackground,
  Kb as StateWarningBorder,
  Qb as StateWarningText,
  Bh as SummaryCard,
  Vy as SummaryList,
  Qt as Table,
  Zy as Tabs,
  et as Tag,
  Ah as TaskList,
  vd as Textarea,
  l1 as TooltipOverlay,
  Em as TooltipProvider,
  o1 as TransactionalPageTemplate,
  Yg as TransitionButtonDefault,
  Vg as TransitionButtonShadow,
  qg as TransitionCardHover,
  Zg as TransitionInputFocus,
  i1 as VisibilityProvider,
  wl as VitalsCard,
  $y as WIDTH_FRACTIONS,
  qy as WarningCallout,
  Nl as WidthContainer,
  Ty as WidthUtilities,
  s1 as WorkflowSplitView,
  W1 as checkFrutigerLoaded,
  es as createGenericTabsConfig,
  e1 as createTCHTabsConfig,
  H1 as generateFrutigerFontFace,
  y1 as getResponsiveStyles,
  Dy as getSpacingClass,
  Ly as getWidthClass,
  z1 as preloadFrutigerFonts,
  ep as tchDataConfig,
  qd as useBrand,
  T1 as useColors,
  E1 as useComponentSpacing,
  P1 as useNHSHeadings,
  F1 as useNHSParagraphs,
  Py as useNHSTheme,
  R1 as useNHSTypographySystem,
  B1 as useNavigationSplitDrill,
  Mp as useNavigationSplitUrlSync,
  ts as useNhsFdpBreakpoints,
  A1 as useResponsiveSpacing,
  a1 as useResponsiveValue,
  L1 as useSpacing,
  $g as useSpc,
  D1 as useTokens,
  $1 as useTypography
};
//# sourceMappingURL=index.esm.js.map
