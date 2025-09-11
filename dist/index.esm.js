import * as K from "react";
import st, { useState as Me, useEffect as Be, useCallback as me, useRef as Fe, createElement as $o, useMemo as $e, useContext as Zl, createContext as Jl, forwardRef as mn, useImperativeHandle as Mo, useReducer as Io, memo as Ql, useLayoutEffect as ec, useId as Gn } from "react";
import { createPortal as tc } from "react-dom";
function nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bn = { exports: {} }, bn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s;
function rc() {
  if ($s) return bn;
  $s = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, s, o) {
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
  return bn.Fragment = t, bn.jsx = n, bn.jsxs = n, bn;
}
var yn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms;
function ac() {
  return Ms || (Ms = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === w ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case v:
          return "Fragment";
        case p:
          return "Profiler";
        case f:
          return "StrictMode";
        case H:
          return "Suspense";
        case M:
          return "SuspenseList";
        case x:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case C:
            return "Portal";
          case L:
            return (B.displayName || "Context") + ".Provider";
          case A:
            return (B._context.displayName || "Context") + ".Consumer";
          case D:
            var G = B.render;
            return B = B.displayName, B || (B = G.displayName || G.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case F:
            return G = B.displayName || null, G !== null ? G : e(B.type) || "Memo";
          case N:
            G = B._payload, B = B._init;
            try {
              return e(B(G));
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
        var G = !1;
      } catch {
        G = !0;
      }
      if (G) {
        G = console;
        var R = G.error, re = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return R.call(
          G,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          re
        ), t(B);
      }
    }
    function a(B) {
      if (B === v) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === N)
        return "<...>";
      try {
        var G = e(B);
        return G ? "<" + G + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var B = k.A;
      return B === null ? null : B.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (g.call(B, "key")) {
        var G = Object.getOwnPropertyDescriptor(B, "key").get;
        if (G && G.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, G) {
      function R() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          G
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: R,
        configurable: !0
      });
    }
    function d() {
      var B = e(this.type);
      return y[B] || (y[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function c(B, G, R, re, U, ce, _e, ie) {
      return R = ce.ref, B = {
        $$typeof: b,
        type: B,
        key: G,
        props: ce,
        _owner: U
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(B, "ref", {
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
        value: _e
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function u(B, G, R, re, U, ce, _e, ie) {
      var le = G.children;
      if (le !== void 0)
        if (re)
          if (j(le)) {
            for (re = 0; re < le.length; re++)
              h(le[re]);
            Object.freeze && Object.freeze(le);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(le);
      if (g.call(G, "key")) {
        le = e(B);
        var ee = Object.keys(G).filter(function(E) {
          return E !== "key";
        });
        re = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", z[le + re] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          re,
          le,
          ee,
          le
        ), z[le + re] = !0);
      }
      if (le = null, R !== void 0 && (n(R), le = "" + R), i(G) && (n(G.key), le = "" + G.key), "key" in G) {
        R = {};
        for (var _ in G)
          _ !== "key" && (R[_] = G[_]);
      } else R = G;
      return le && l(
        R,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), c(
        B,
        le,
        ce,
        U,
        s(),
        R,
        _e,
        ie
      );
    }
    function h(B) {
      typeof B == "object" && B !== null && B.$$typeof === b && B._store && (B._store.validated = 1);
    }
    var m = st, b = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), L = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), k = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, j = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var S, y = {}, I = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), te = T(a(o)), z = {};
    yn.Fragment = v, yn.jsx = function(B, G, R, re, U) {
      var ce = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        B,
        G,
        R,
        !1,
        re,
        U,
        ce ? Error("react-stack-top-frame") : I,
        ce ? T(a(B)) : te
      );
    }, yn.jsxs = function(B, G, R, re, U) {
      var ce = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        B,
        G,
        R,
        !0,
        re,
        U,
        ce ? Error("react-stack-top-frame") : I,
        ce ? T(a(B)) : te
      );
    };
  })()), yn;
}
var Is;
function sc() {
  return Is || (Is = 1, process.env.NODE_ENV === "production" ? Bn.exports = rc() : Bn.exports = ac()), Bn.exports;
}
var r = sc(), Qr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ls;
function oc() {
  return Ls || (Ls = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
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
          return n.apply(null, o);
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
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(Qr)), Qr.exports;
}
var ic = oc();
const xe = /* @__PURE__ */ nc(ic), bx = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...s
}) => {
  const o = xe(
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
}, lc = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: n,
  variant: a = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const s = (o) => {
    const i = o.icon ? /* @__PURE__ */ r.jsx(
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
    ) : null, l = o.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: o.href, children: d }) : o.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ r.jsx(
          "button",
          {
            className: "nhsuk-account__button",
            type: "submit",
            role: "button",
            children: d
          }
        )
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: d });
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: xe(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        n
      ),
      "aria-label": e,
      children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-account__list", children: t.map((o, i) => o && /* @__PURE__ */ r.jsx(
        "li",
        {
          className: xe("nhsuk-account__item nhsuk-header__account-item", o.className),
          children: s(o)
        },
        i
      )) })
    }
  );
};
function cc(e) {
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
const { forwardRef: dc, useCallback: Et, useState: ea } = K;
function uc(e, t) {
  const {
    children: n,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = ea(!1), [h, m] = ea(!1), [b, C] = ea(!1), v = cc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), f = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", p = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...b && { "data-focused": "true" },
    ...f && { "data-disabled": "true" }
  }, A = Et(
    () => !f && u(!0),
    [f]
  ), L = Et(() => u(!1), []), D = Et(
    () => !f && m(!0),
    [f]
  ), H = Et(() => {
    m(!1), u(!1);
  }, []), M = Et(() => C(!0), []), F = Et(() => C(!1), []), N = Et(
    (le) => {
      le.key === " " && ("href" in d || le.currentTarget.getAttribute("role") === "button") && (le.preventDefault(), le.currentTarget.click());
    },
    [d]
  ), x = Et(
    (le) => {
      if (l) {
        const ee = le.currentTarget;
        if (ee.getAttribute("data-processing") === "true") {
          le.preventDefault();
          return;
        }
        ee.setAttribute("data-processing", "true"), setTimeout(() => {
          ee.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: le,
      style: ee,
      title: _,
      ["aria-label"]: E,
      ["aria-describedby"]: $,
      ["aria-labelledby"]: Q,
      tabIndex: O,
      ...Y
    } = d, ae = d;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: ae.href,
        target: ae.target,
        rel: ae.rel,
        className: v.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...p,
        ...l && { "data-prevent-double-click": "true" },
        ...Y,
        onKeyDown: (he) => {
          ae.onKeyDown?.(he), N(he);
        },
        onClick: (he) => {
          ae.onClick?.(he), x(he);
        },
        onMouseDown: (he) => {
          ae.onMouseDown?.(he), A();
        },
        onMouseUp: (he) => {
          ae.onMouseUp?.(he), L();
        },
        onMouseEnter: (he) => {
          ae.onMouseEnter?.(he), D();
        },
        onMouseLeave: (he) => {
          ae.onMouseLeave?.(he), H();
        },
        onFocus: (he) => {
          ae.onFocus?.(he), M();
        },
        onBlur: (he) => {
          ae.onBlur?.(he), F();
        },
        "aria-disabled": ae["aria-disabled"],
        ...ae["aria-disabled"] === "true" && { tabIndex: -1 },
        id: le,
        style: ee,
        title: _,
        "aria-label": E,
        "aria-describedby": $,
        "aria-labelledby": Q,
        tabIndex: O,
        children: n
      }
    );
  }
  const {
    id: w,
    style: k,
    title: g,
    ["aria-label"]: j,
    ["aria-describedby"]: T,
    ["aria-labelledby"]: S,
    tabIndex: y,
    name: I,
    value: te,
    form: z,
    formAction: B,
    formEncType: G,
    formMethod: R,
    formNoValidate: re,
    formTarget: U,
    autoFocus: ce,
    ..._e
  } = d, ie = d;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ie.type || "button",
      disabled: ie.disabled,
      className: v.classes,
      "data-module": "nhs-button",
      ...p,
      ...l && { "data-prevent-double-click": "true" },
      ...ie.disabled && { "aria-disabled": "true" },
      ..._e,
      onKeyDown: (le) => {
        ie.onKeyDown?.(le), N(le);
      },
      onClick: (le) => {
        ie.onClick?.(le), x(le);
      },
      onMouseDown: (le) => {
        ie.onMouseDown?.(le), A();
      },
      onMouseUp: (le) => {
        ie.onMouseUp?.(le), L();
      },
      onMouseEnter: (le) => {
        ie.onMouseEnter?.(le), D();
      },
      onMouseLeave: (le) => {
        ie.onMouseLeave?.(le), H();
      },
      onFocus: (le) => {
        ie.onFocus?.(le), M();
      },
      onBlur: (le) => {
        ie.onBlur?.(le), F();
      },
      id: w,
      style: k,
      title: g,
      "aria-label": j,
      "aria-describedby": T,
      "aria-labelledby": S,
      tabIndex: y,
      name: I,
      value: te,
      form: z,
      formAction: B,
      formEncType: G,
      formMethod: R,
      formNoValidate: re,
      formTarget: U,
      autoFocus: ce,
      children: n
    }
  );
}
const et = dc(uc);
et.displayName = "Button";
const ba = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = xe(
    "nhsuk-back-link",
    a
  ), d = xe(
    "nhsuk-back-link__link"
  ), c = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ r.jsx(
    "button",
    {
      className: d,
      onClick: o,
      type: "button",
      ...i,
      children: c()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: d,
      href: n,
      ...i,
      children: c()
    }
  ) });
};
function fc(e) {
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
const Ye = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: d,
  ...c
}) => {
  const u = fc({ color: a, noBorder: s, closable: o, disabled: l, className: d }), h = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: u.classes, ...c, children: [
    n || (t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ r.jsx(
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
}, hc = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: i,
  errorMessage: l,
  className: d,
  children: c,
  onChange: u,
  onBlur: h,
  onFocus: m,
  attributes: b,
  ...C
}) => {
  const [v, f] = Me(a), p = n !== void 0, A = p ? n : v;
  Be(() => {
    p || f(a);
  }, [a, p]);
  const L = (N) => {
    const x = N.target.checked;
    p || f(x), u?.(x, N);
  }, D = i ? `${e}-hint` : void 0, H = l ? `${e}-error` : void 0, M = [D, H].filter(Boolean).join(" ") || void 0, F = xe(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ r.jsx("div", { className: F, ...C, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: A,
        disabled: s,
        onChange: L,
        onBlur: h,
        onFocus: m,
        "aria-describedby": M,
        ...b
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: D, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: H, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
hc.displayName = "Checkbox";
function pc(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const rs = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: d = !1,
  hasError: c = !1,
  describedBy: u,
  className: h,
  width: m = "full",
  inputMode: b,
  autoComplete: C,
  maxLength: v,
  minLength: f,
  pattern: p,
  step: A,
  min: L,
  max: D,
  showValueLabels: H = !1,
  showCurrentValue: M = !1,
  valueLabels: F,
  onChange: N,
  onBlur: x,
  onFocus: w,
  onKeyDown: k,
  ...g
}) => {
  const [j, T] = Me(a || s || (n === "range" ? L || "0" : ""));
  Be(() => {
    a !== void 0 && T(a);
  }, [a]);
  const S = (U) => {
    const ce = U.target;
    T(ce.value), ("type" in U && U.nativeEvent || U.type === "keydown") && N?.(U);
  }, { classes: y, isRange: I } = pc({ type: n, hasError: c, width: m, className: h }), te = a !== void 0, z = {
    id: e,
    name: t,
    type: n,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: b,
    autoComplete: C,
    maxLength: v,
    minLength: f,
    pattern: p,
    step: A,
    min: L,
    max: D,
    onChange: S,
    onBlur: x,
    onFocus: w,
    onKeyDown: (U) => {
      if (I && /[0-9]/.test(U.key)) {
        const ce = (j?.toString() || "") + U.key;
        U.target.value = ce, S(U);
      }
      k?.(U);
    },
    ...g
  }, B = !te && s !== void 0 ? { defaultValue: s } : {}, G = te ? { value: a } : {}, R = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: y,
      ...G,
      ...B,
      "data-current-value": j,
      ...z
    }
  ), re = I ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    H && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: F?.min || L || "0" }),
      R(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: F?.max || D || "100" })
    ] }),
    !H && R(),
    M && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      F?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: j })
    ] }) })
  ] }) : null;
  return I ? re : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: y,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": u,
      inputMode: b,
      autoComplete: C,
      maxLength: v,
      minLength: f,
      pattern: p,
      step: A,
      min: L,
      max: D,
      onChange: N,
      onBlur: x,
      onFocus: w,
      onKeyDown: k,
      ...g
    }
  );
};
function mc(e) {
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
const as = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = mc({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
}, ss = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...s
}) => {
  const o = xe(
    "nhsuk-fieldset",
    n
  ), i = xe(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${t?.size}`]: t?.size
    },
    t?.className
  ), l = () => {
    const d = t?.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return t?.isPageHeading ? /* @__PURE__ */ r.jsx("h1", { className: "nhsuk-fieldset__heading", children: d }) : d;
  };
  return /* @__PURE__ */ r.jsxs(
    "fieldset",
    {
      className: o,
      "aria-describedby": a,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ r.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, gc = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: d = "",
  small: c = !1,
  onChange: u,
  fieldsetAttributes: h,
  attributes: m,
  ...b
}) => {
  const [C, v] = Me(
    e.filter((N) => N.checked).map((N) => N.value)
  ), f = n || t, p = i ? `${f}-hint` : void 0, A = l ? `${f}-error` : void 0, L = [p, A].filter(Boolean).join(" ") || void 0, D = (N, x) => {
    let w;
    x ? w = [...C, N] : w = C.filter((k) => k !== N), v(w), u?.(w);
  }, H = () => e.map((N, x) => {
    const w = `${f}-${x + 1}`, k = `${w}-conditional`, g = C.includes(N.value), j = N.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: w,
          name: t,
          type: "checkbox",
          value: N.value,
          checked: g,
          disabled: j,
          onChange: (T) => D(N.value, T.target.checked),
          "aria-describedby": N.hint ? `${w}-hint` : L,
          ...N.conditional && {
            "aria-controls": k,
            "aria-expanded": g ? "true" : "false"
          },
          ...N.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: w, children: N.text }),
      N.hint && /* @__PURE__ */ r.jsx("div", { id: `${w}-hint`, className: "nhsuk-checkboxes__hint", children: N.hint }),
      N.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: xe("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !g
          }),
          id: k,
          children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            N.conditional.label && /* @__PURE__ */ r.jsx(as, { htmlFor: N.conditional.id, children: N.conditional.label }),
            /* @__PURE__ */ r.jsx(rs, { ...N.conditional })
          ] }) : N.conditional
        }
      )
    ] }, N.value);
  }), M = xe(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), F = xe("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ r.jsx("div", { className: F, ...m, ...b, children: /* @__PURE__ */ r.jsxs(
    ss,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: L,
      ...h,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: p, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: A, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: M, children: H() })
      ]
    }
  ) });
};
gc.displayName = "Checkboxes";
const xc = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: d = !1,
  describedBy: c,
  className: u,
  rows: h = 5,
  cols: m,
  maxLength: b,
  minLength: C,
  wrap: v = "soft",
  resize: f = "vertical",
  autoComplete: p,
  spellCheck: A,
  onChange: L,
  onBlur: D,
  onFocus: H,
  onKeyDown: M,
  ...F
}) => {
  const N = xe(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${f}`]: f !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: N,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: h,
      cols: m,
      maxLength: b,
      minLength: C,
      wrap: v,
      autoComplete: p,
      spellCheck: A,
      onChange: L,
      onBlur: D,
      onFocus: H,
      onKeyDown: M,
      ...F
    }
  );
};
function bc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Lo = ({ id: e, className: t, children: n, ...a }) => {
  const s = bc({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: s.classes, id: s.id, ...a, children: n });
}, yx = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: s,
  value: o,
  defaultValue: i,
  rows: l,
  className: d,
  countMessage: c,
  onCountChange: u,
  onChange: h,
  ...m
}) => {
  const b = o ?? i ?? "", [C, v] = Me(b), [f, p] = Me(0), [A, L] = Me(!1), [D, H] = Me(!1), M = me((g) => n ? g.trim() === "" ? 0 : g.trim().split(/\s+/).length : g.length, [n]);
  Be(() => {
    const g = M(C), j = t || n || 0, T = j - g, S = Math.floor(j * (a / 100));
    p(T), L(g > j), H(g >= S || g > j), u && u(g, T);
  }, [C, t, n, a, M, u]);
  const F = (g) => {
    const j = g.target.value;
    v(j), h && h(g);
  }, N = () => {
    const g = t || n || 0, j = n ? "word" : "character", T = n ? "words" : "characters";
    if (!D)
      return `You can enter up to ${g} ${g === 1 ? j : T}`;
    if (A) {
      const S = Math.abs(f);
      return `You have ${S} ${S === 1 ? j : T} too many`;
    } else
      return `You have ${f} ${f === 1 ? j : T} remaining`;
  }, x = xe(
    "nhsuk-character-count",
    d
  ), w = xe(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !D,
      "nhsuk-error-message": A
    },
    c?.classes
  ), k = xe(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": A
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: x,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          xc,
          {
            id: e,
            name: s,
            value: o !== void 0 ? C : void 0,
            defaultValue: o === void 0 ? i ?? C : void 0,
            rows: l,
            className: k,
            onChange: F,
            "aria-describedby": `${e}-info`,
            "aria-invalid": A || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ r.jsx(
          Lo,
          {
            id: `${e}-info`,
            className: w,
            role: "status",
            "aria-live": "polite",
            children: N()
          }
        )
      ]
    }
  );
}, yc = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
}) => {
  const i = xe(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ r.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...o,
      children: s
    }
  );
}, vc = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: s,
  disabled: o = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: d,
  className: c,
  multiple: u = !1,
  size: h,
  autoComplete: m,
  options: b,
  children: C,
  onChange: v,
  onBlur: f,
  onFocus: p,
  ...A
}) => {
  const L = xe(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), D = () => b ? b.map((M, F) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: M.value,
      disabled: M.disabled,
      "data-initial-selected": M.selected || void 0,
      children: M.text
    },
    `${M.value}-${F}`
  )) : null, H = s === void 0 && a === void 0 && b ? b.find((M) => M.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: L,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: s !== void 0 ? s : H,
      disabled: o,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: h,
      autoComplete: m,
      onChange: v,
      onBlur: f,
      onFocus: p,
      ...A,
      children: C || D()
    }
  );
}, Vn = vc;
Vn.Option = yc;
function Fo(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: u, onFocus: h, ...m } = e, {
    name: b,
    hasError: C = !1,
    describedBy: v,
    className: f,
    size: p = "normal",
    inline: A = !1,
    options: L,
    ...D
  } = m, H = xe(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": C,
      "nhsuk-radios--small": p === "small",
      "nhsuk-radios--inline": A
    },
    f
  );
  return /* @__PURE__ */ r.jsx(ss, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: H,
      ...D,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: L.map((M, F) => {
        const N = `${b}-${F}`, x = M.conditional ? `${N}-conditional` : void 0, w = n === M.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: N,
              name: b,
              type: "radio",
              value: M.value,
              disabled: M.disabled,
              ...t === "client" ? { checked: w, onChange: s, onBlur: o, onFocus: i, onKeyDown: l, ref: (k) => {
                k && d && (d.current[F] = k);
              } } : { defaultChecked: w, "data-nhs-radios-input": !0 },
              "aria-describedby": v
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: N, children: M.text }),
          M.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: M.hint }),
          M.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: xe("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !w
              }),
              id: x,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof M.conditional == "object" && M.conditional !== null && "label" in M.conditional && "id" in M.conditional && "name" in M.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                M.conditional.label && /* @__PURE__ */ r.jsx(as, { htmlFor: M.conditional.id, children: M.conditional.label }),
                /* @__PURE__ */ r.jsx(rs, { ...M.conditional })
              ] }) : M.conditional
            }
          )
        ] }, M.value);
      })
    }
  ) });
}
const vx = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Me(e || t || ""), d = Fe([]), c = Fe(i), u = (b) => {
    const C = b.target.value;
    C !== c.current && (c.current = C, l(C), n?.(b));
  }, h = (b) => {
    s?.(b);
  }, m = me((b) => {
    const { key: C } = b;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(C)) return;
    b.preventDefault();
    const v = d.current.filter((L) => L && !L.disabled), f = v.indexOf(b.currentTarget);
    if (f === -1) return;
    let p = f;
    ["ArrowDown", "ArrowRight"].includes(C) ? p = (f + 1) % v.length : ["ArrowUp", "ArrowLeft"].includes(C) && (p = (f - 1 + v.length) % v.length);
    const A = v[p];
    A && (A.focus(), A.checked || A.click());
  }, []);
  return Fo(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: a,
      handleFocus: h,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: m,
      itemsRef: d
    }
  );
}, _x = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Fo(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, Po = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = xe(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...s || {} } : s;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...o, children: e });
}, Yt = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const s = xe("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: s, style: n, ...a, children: e });
}, Cn = ({
  children: e,
  width: t = "full",
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  style: d,
  ...c
}) => {
  const u = xe(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: n,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${s}-desktop`]: s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: u, style: d, ...c, children: e });
}, ya = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const o = st.Children.toArray(e)[0], i = st.isValidElement(o) && (o.type === Yt || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(Po, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Yt, { children: e }) });
}, _c = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = xe(
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
  return /* @__PURE__ */ r.jsx(d, { className: c, role: o, ...l, children: e });
}, wc = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = xe("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Sc = _c;
Sc.Item = wc;
const wx = ({
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
}, Sx = {
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
}, kx = ({
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
}, Cx = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, jx = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Eo = ({
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
function kc(e) {
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
function Cc(e) {
  const t = e.level ?? kc(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Mt = ({ level: e, className: t, text: n, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const d = Cc({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return $o(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function jc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Fs = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...s }) => {
  const o = jc({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Nx = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const d = Fe(null);
  Be(() => {
    d.current && d.current.focus();
  }, []);
  const c = xe(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, m = (b) => {
    const C = b.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
    return b.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: b.href,
        ...b.attributes,
        children: C
      }
    ) : C;
  };
  return /* @__PURE__ */ r.jsxs(
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
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (n || a) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: h() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((b, C) => /* @__PURE__ */ r.jsx("li", { children: m(b) }, C)) })
        ] })
      ]
    }
  );
}, Tx = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: d,
  ...c
}) => {
  const [u, h] = Me(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [m, b] = Me({}), C = (S) => S % 4 === 0 && S % 100 !== 0 || S % 400 === 0, v = (S, y) => {
    const I = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return S === 2 && C(y) ? 29 : I[S - 1];
  }, f = (S, y, I) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Day must be a number";
    const te = parseInt(S, 10);
    if (te < 1 || te > 31) return "Day must be between 1 and 31";
    if (y && I) {
      const z = parseInt(y, 10), B = parseInt(I, 10);
      if (!isNaN(z) && !isNaN(B) && z >= 1 && z <= 12) {
        const G = v(z, B);
        if (te > G)
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
          ][z - 1]} ${B} only has ${G} days`;
      }
    }
  }, p = (S) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Month must be a number";
    const y = parseInt(S, 10);
    if (y < 1 || y > 12) return "Month must be between 1 and 12";
  }, A = (S) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Year must be a number";
    const y = parseInt(S, 10), I = (/* @__PURE__ */ new Date()).getFullYear();
    if (y < 1900 || y > I + 10)
      return `Year must be between 1900 and ${I + 10}`;
  }, L = (S, y, I) => {
    if (!S || !y || !I) return;
    const te = parseInt(S, 10), z = parseInt(y, 10), B = parseInt(I, 10);
    if (isNaN(te) || isNaN(z) || isNaN(B) || z < 1 || z > 12 || B < 1900) return;
    const G = v(z, B);
    te < 1 || te > G;
  }, D = me((S, y) => {
    const I = {
      ...u,
      [S]: y
    };
    h(I), d && d(I);
  }, [u, d]), H = me((S) => {
    const y = u[S];
    let I;
    if (S === "day")
      I = f(y, u.month, u.year);
    else if (S === "month") {
      if (I = p(y), !I && u.day) {
        const te = f(u.day, y, u.year);
        b((z) => ({
          ...z,
          day: te
        }));
      }
    } else if (S === "year" && (I = A(y), !I && u.day && u.month)) {
      const te = f(u.day, u.month, y);
      b((z) => ({
        ...z,
        day: te
      }));
    }
    if (b((te) => ({
      ...te,
      [S]: I
    })), u.day && u.month && u.year) {
      const te = L(
        S === "day" ? y : u.day,
        S === "month" ? y : u.month,
        S === "year" ? y : u.year
      );
      te && b((z) => ({
        ...z,
        day: te
      }));
    }
  }, [u, f, p, A, L]), M = $e(() => [
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
  ], []), F = n || M;
  let N = o?.describedBy || "";
  const x = i ? `${e}-hint` : "", w = l ? `${e}-error` : "";
  x && (N = N ? `${N} ${x}` : x), w && (N = N ? `${N} ${w}` : w);
  const k = Object.values(m).some((S) => S), g = xe(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || k
    }
  ), j = xe(
    "nhsuk-date-input",
    t
  ), T = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      Lo,
      {
        id: x,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      Fs,
      {
        id: w,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([S, y]) => y ? /* @__PURE__ */ r.jsxs(
        Fs,
        {
          id: `${e}-${S}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            y
          ]
        },
        `${S}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: j, id: e, "data-testid": "date-input", ...c, children: F.map((S) => {
      const y = S.id || `${e}-${S.name}`, I = a ? `${a}[${S.name}]` : S.name, te = S.label || S.name.charAt(0).toUpperCase() + S.name.slice(1), z = m[S.name], B = u[S.name] || "";
      let G = N;
      if (z) {
        const R = `${e}-${S.name}-error`;
        G = G ? `${G} ${R}` : R;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          as,
          {
            htmlFor: y,
            className: "nhsuk-date-input__label",
            children: te
          }
        ),
        /* @__PURE__ */ r.jsx(
          rs,
          {
            id: y,
            name: I,
            value: B,
            className: xe("nhsuk-date-input__input", S.classes, {
              "nhsuk-input--error": z
            }),
            inputMode: S.inputmode,
            autoComplete: S.autocomplete,
            pattern: S.pattern,
            "aria-describedby": G || void 0,
            hasError: !!z,
            onChange: (R) => D(S.name, R.target.value),
            onBlur: () => H(S.name)
          }
        )
      ] }, S.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: g, children: o ? /* @__PURE__ */ r.jsx(
    ss,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: N || void 0,
      children: T()
    }
  ) : T() });
}, Ao = {
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
}, Ro = Jl(Ao), Nc = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Ao, ...t };
  return /* @__PURE__ */ r.jsx(Ro.Provider, { value: n, children: e });
}, Dx = () => {
  const e = Zl(Ro);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Tc() {
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
function Dc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Tc(), document.head.appendChild(e);
}
const $x = ({ children: e, theme: t }) => (Be(() => {
  Dc();
}, []), /* @__PURE__ */ r.jsx(Nc, { theme: t, children: e })), $c = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: d,
  disabled: c = !1,
  callbacks: u = {},
  isLoading: h = !1,
  showResults: m = !1,
  results: b = [],
  formAttributes: C = {},
  inputAttributes: v = {},
  buttonAttributes: f = {},
  preventDefaultSubmit: p = !1,
  debounceMs: A = 300,
  minQueryLength: L = 1
}) => {
  const [D, H] = Me(""), [M, F] = Me(!1), N = Fe(void 0), x = Fe(null), w = Fe(null), k = e === "controlled" && s !== void 0, g = k ? s : D, j = me((re) => {
    N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      u.onChange && re.length >= L && u.onChange(re);
    }, A);
  }, [u.onChange, A, L]), T = me((re) => {
    const U = re.target.value;
    k || H(U), e !== "form" && j(U);
  }, [k, e, j]), S = me((re) => {
    const U = g.trim(), ce = {
      query: U,
      timestamp: Date.now(),
      formData: new FormData(re.currentTarget)
    };
    e === "controlled" || e === "hybrid" && p ? (re.preventDefault(), u.onSearch && U.length >= L && u.onSearch(ce)) : e === "hybrid" && u.onSearch && U.length >= L && u.onSearch(ce);
  }, [e, g, u.onSearch, p, L]), y = me(() => {
    F(!0), u.onFocus?.();
  }, [u.onFocus]), I = me(() => {
    F(!1), u.onBlur?.();
  }, [u.onBlur]), te = me(() => {
    k || H(""), u.onClear?.(), w.current?.focus();
  }, [k, u.onClear]);
  Be(() => () => {
    N.current && clearTimeout(N.current);
  }, []);
  const z = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: xe("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": h
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
  ), G = () => !g || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: te,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), R = () => !m || !b.length || !M ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: b.map((re) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: re.href ? /* @__PURE__ */ r.jsxs("a", { href: re.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: re.title }),
    re.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: re.description })
  ] }) : /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: re.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: re.title }),
        re.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: re.description })
      ]
    }
  ) }, re.id)) });
  return /* @__PURE__ */ r.jsxs("div", { className: xe("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": M,
    "nhsuk-header__search--has-results": m && b.length > 0
  }), children: [
    /* @__PURE__ */ r.jsxs(
      "form",
      {
        ref: x,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? n : void 0,
        role: "search",
        onSubmit: S,
        ...C,
        children: [
          /* @__PURE__ */ r.jsx(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: i
            }
          ),
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
                value: g,
                onChange: T,
                onFocus: y,
                onBlur: I,
                disabled: c || h,
                ...m && b.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...v
              }
            ),
            G()
          ] }),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && g.length < L,
              ...f,
              children: [
                h ? B() : z(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    R()
  ] });
};
function Bo(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: s = !1,
  visibleItems: o,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: d,
  navListRef: c
}) {
  const {
    className: u,
    logo: h = {},
    service: m = {},
    organisation: b,
    search: C,
    account: v,
    navigation: f,
    containerClasses: p,
    variant: A = "default",
    attributes: L = {},
    maxVisibleItems: D,
    // deprecated (ignored)
    responsiveNavigation: H = !0,
    ...M
  } = e;
  "maxVisibleItems" in M && delete M.maxVisibleItems;
  const F = m.href && !h.href || m.href && m.href === h.href, N = F ? m.href : h.href, x = xe(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": A === "organisation" || b,
      "nhsuk-header--white": A === "white"
    },
    u
  ), w = xe(
    "nhsuk-header__container",
    p
  ), k = xe(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": f?.white,
      "nhsuk-header__navigation--justified": f?.justified
    },
    f?.className
  ), g = () => /* @__PURE__ */ r.jsxs(
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
        /* @__PURE__ */ r.jsx("title", { children: h.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), j = () => h.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : g(), T = () => b ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      b.name,
      b.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        b.split
      ] })
    ] }),
    b.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: b.descriptor })
  ] }) : null, S = (G, R) => G ? R ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: R, children: G }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: G }) : null, y = (G) => G.active || G.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: G.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: G.html } }) : G.text }) : G.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: G.html } }) : G.text, I = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), te = t === "server" && f?.items && !H, z = te ? [] : f?.items, B = te ? f.items : [];
  return /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: x,
      role: "banner",
      "data-module": "nhsuk-header",
      ...L,
      ...M,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: w, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            N ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: N, children: [
              j(),
              T(),
              F && S(m.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              j(),
              T(),
              F && S(m.text)
            ] }),
            m.text && !F && S(m.text, m.href)
          ] }),
          C && /* @__PURE__ */ r.jsx($c, { ...C }),
          /* @__PURE__ */ r.jsx(
            lc,
            {
              ...v,
              variant: A === "white" ? "white" : "default"
            }
          )
        ] }),
        f && f.items && f.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: k,
            "aria-label": f.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: xe(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  p
                ),
                ref: t === "client" ? d : void 0,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: t === "client" ? c : void 0,
                    children: [
                      (t === "server" ? z || [] : f?.items || []).map((G, R) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: xe(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": G.active || G.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && s && o !== void 0 && R >= (o ?? 0)
                            },
                            G.className
                          ),
                          ...G.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: G.href,
                              ...G.active || G.current ? { "aria-current": G.current ? "page" : "true" } : {},
                              children: y(G)
                            }
                          )
                        },
                        R
                      )),
                      t === "client" && s && o !== void 0 && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs(
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
                            I()
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
        t === "client" && n && f && f.items && f.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: f.items.slice(o ?? 0).map((G, R) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: xe("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": G.active || G.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: G.href,
                    ...G.active || G.current ? { "aria-current": G.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: y(G)
                  }
                )
              },
              `overflow-${(o ?? 0) + R}`
            )) })
          }
        ),
        t === "server" && te && B.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: B.map((G, R) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: xe("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": G.active || G.current
            }),
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: G.href,
                ...G.active || G.current ? { "aria-current": G.current ? "page" : "true" } : {},
                children: y(G)
              }
            )
          },
          `overflow-server-${R}`
        )) }) })
      ]
    }
  );
}
const Ho = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: c = {},
  ...u
}) => {
  const [h, m] = Me(!1), [b, C] = Me(!1), [v, f] = Me(i?.items?.length || 0), [p, A] = Me(!1), [L, D] = Me(!1), H = Fe(null), M = Fe(null), F = Fe(!1);
  Be(() => {
    typeof window > "u" || D(!0);
  }, []), Be(() => {
    if (typeof document > "u") return;
    const k = (g) => {
      g.key === "Escape" && h && m(!1);
    };
    if (h)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [h]);
  const N = Fe(null), x = me(() => {
    if (!L || !i?.items || i.items.length === 0 || F.current) return;
    const k = H.current, g = M.current;
    if (!k || !g) return;
    F.current = !0, k.classList.add("nhsuk-header__navigation-container--measuring");
    const j = k.clientWidth, T = Array.from(g.children);
    if (!T.length) {
      k.classList.remove("nhsuk-header__navigation-container--measuring"), F.current = !1;
      return;
    }
    if (N.current == null) {
      const U = document.createElement("button");
      U.type = "button", U.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", U.style.position = "absolute", U.style.visibility = "hidden", U.style.pointerEvents = "none", U.innerHTML = "<span>More</span>", k.appendChild(U), N.current = U.getBoundingClientRect().width || 104, k.removeChild(U);
    }
    const S = N.current + 16;
    let y = 0, I = 0;
    const te = window.getComputedStyle(k), z = parseFloat(te.paddingLeft) || 0, B = parseFloat(te.paddingRight) || 0;
    let G = z + B;
    for (const U of T) {
      const ce = U.getBoundingClientRect().width;
      if (y + ce + S + G > j) break;
      y += ce, I += 1;
    }
    const R = I < i.items.length, re = R ? I : i.items.length;
    C((U) => U === R ? U : R), f((U) => U === re ? U : re), k.classList.remove("nhsuk-header__navigation-container--measuring"), F.current = !1;
  }, [L, i?.items]);
  Be(() => {
    if (!L) return;
    const k = H.current;
    if (!k) return;
    let g = null;
    const j = () => {
      g == null && (g = window.requestAnimationFrame(() => {
        g = null, x();
      }));
    };
    x();
    const T = new ResizeObserver(() => j());
    return T.observe(k), M.current && T.observe(M.current), () => {
      g != null && window.cancelAnimationFrame(g), T.disconnect();
    };
  }, [L, x]), Be(() => {
    L && x();
  }, [i?.items?.length, L, x]);
  const w = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const g = !h;
    m(g), A(g);
  };
  return Bo(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: s,
      account: o,
      navigation: i,
      containerClasses: l,
      variant: d,
      attributes: c,
      ...u
    },
    {
      variant: "client",
      isClient: L,
      menuOpen: h,
      showMoreButton: b,
      visibleItems: v,
      dropdownVisible: p,
      toggleMenu: w,
      navContainerRef: H,
      navListRef: M
    }
  );
}, Mx = (e) => Bo(e, {
  variant: "server",
  isClient: !1
}), Mc = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: d,
  ...c
}) => {
  const u = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), h = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    n,
    !d && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), b = d || e || a || s, C = () => {
    if (!e) return null;
    const v = { className: m };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...v, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...v, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...v, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...v, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...v, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...v, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...v, children: e });
    }
  };
  return /* @__PURE__ */ r.jsxs(
    "section",
    {
      className: u,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        o && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: b && /* @__PURE__ */ r.jsx("div", { className: h, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          C(),
          d || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && b && /* @__PURE__ */ r.jsx("div", { className: h, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          C(),
          d || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Mc.displayName = "Hero";
const zo = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: d,
  footerStyle: c,
  containerStyle: u
}) => {
  const h = (b, C = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: xe("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": C
      }),
      children: /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: b.URL,
          target: b.newWindow ? "_blank" : void 0,
          rel: b.newWindow ? "noopener noreferrer" : void 0,
          children: b.label
        }
      )
    },
    `${b.URL}-${b.label}`
  ), m = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: xe("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: xe("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((b) => h(b)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((b) => h(b)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((b) => h(b)) }),
              s && s.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((b) => h(b)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((b) => h(b, !0)),
              (n || []).map((b) => h(b, !0)),
              (a || []).map((b) => h(b, !0)),
              (s || []).map((b) => h(b, !0))
            ] })
          ) }),
          !m && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    m && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function Un(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ic(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function os(e) {
  let t, n, a;
  e.length !== 2 ? (t = Un, n = (l, d) => Un(e(l), d), a = (l, d) => e(l) - d) : (t = e === Un || e === Ic ? e : Lc, n = e, a = e);
  function s(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const h = c + u >>> 1;
        n(l[h], d) < 0 ? c = h + 1 : u = h;
      } while (c < u);
    }
    return c;
  }
  function o(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const h = c + u >>> 1;
        n(l[h], d) <= 0 ? c = h + 1 : u = h;
      } while (c < u);
    }
    return c;
  }
  function i(l, d, c = 0, u = l.length) {
    const h = s(l, d, c, u - 1);
    return h > c && a(l[h - 1], d) > -a(l[h], d) ? h - 1 : h;
  }
  return { left: s, center: i, right: o };
}
function Lc() {
  return 0;
}
function Fc(e) {
  return e === null ? NaN : +e;
}
const Pc = os(Un), Ec = Pc.right;
os(Fc).center;
function Wo(e, t) {
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
class Ps extends Map {
  constructor(t, n = Bc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(Es(this, t));
  }
  has(t) {
    return super.has(Es(this, t));
  }
  set(t, n) {
    return super.set(Ac(this, t), n);
  }
  delete(t) {
    return super.delete(Rc(this, t));
  }
}
function Es({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Ac({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Rc({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Bc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Hc = Math.sqrt(50), zc = Math.sqrt(10), Wc = Math.sqrt(2);
function Yn(e, t, n) {
  const a = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Hc ? 10 : o >= zc ? 5 : o >= Wc ? 2 : 1;
  let l, d, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= n && n < 2 ? Yn(e, t, n * 2) : [l, d, c];
}
function Oc(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? Yn(t, e, n) : Yn(e, t, n);
  if (!(o >= s)) return [];
  const l = o - s + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (o - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (s + c) * i;
  return d;
}
function va(e, t, n) {
  return t = +t, e = +e, n = +n, Yn(e, t, n)[2];
}
function _a(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, s = a ? va(t, e, n) : va(e, t, n);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Uc(e, t, n) {
  e = +e, t = +t, n = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +n;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * n;
  return o;
}
function Ar(e, t) {
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
const As = Symbol("implicit");
function Oo() {
  var e = new Ps(), t = [], n = [], a = As;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== As) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return n[i % n.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ps();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (n = Array.from(o), s) : n.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return Oo(t, n).unknown(a);
  }, Ar.apply(s, arguments), s;
}
function Uo() {
  var e = Oo().unknown(void 0), t = e.domain, n = e.range, a = 0, s = 1, o, i, l = !1, d = 0, c = 0, u = 0.5;
  delete e.unknown;
  function h() {
    var m = t().length, b = s < a, C = b ? s : a, v = b ? a : s;
    o = (v - C) / Math.max(1, m - d + c * 2), l && (o = Math.floor(o)), C += (v - C - o * (m - d)) * u, i = o * (1 - d), l && (C = Math.round(C), i = Math.round(i));
    var f = Uc(m).map(function(p) {
      return C + o * p;
    });
    return n(b ? f.reverse() : f);
  }
  return e.domain = function(m) {
    return arguments.length ? (t(m), h()) : t();
  }, e.range = function(m) {
    return arguments.length ? ([a, s] = m, a = +a, s = +s, h()) : [a, s];
  }, e.rangeRound = function(m) {
    return [a, s] = m, a = +a, s = +s, l = !0, h();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return o;
  }, e.round = function(m) {
    return arguments.length ? (l = !!m, h()) : l;
  }, e.padding = function(m) {
    return arguments.length ? (d = Math.min(1, c = +m), h()) : d;
  }, e.paddingInner = function(m) {
    return arguments.length ? (d = Math.min(1, m), h()) : d;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (c = +m, h()) : c;
  }, e.align = function(m) {
    return arguments.length ? (u = Math.max(0, Math.min(1, m)), h()) : u;
  }, e.copy = function() {
    return Uo(t(), [a, s]).round(l).paddingInner(d).paddingOuter(c).align(u);
  }, Ar.apply(h(), arguments);
}
function is(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Go(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Ln() {
}
var jn = 0.7, qn = 1 / jn, cn = "\\s*([+-]?\\d+)\\s*", Nn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gc = /^#([0-9a-f]{3,8})$/, Vc = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), Yc = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), qc = new RegExp(`^rgba\\(${cn},${cn},${cn},${Nn}\\)$`), Xc = new RegExp(`^rgba\\(${mt},${mt},${mt},${Nn}\\)$`), Kc = new RegExp(`^hsl\\(${Nn},${mt},${mt}\\)$`), Zc = new RegExp(`^hsla\\(${Nn},${mt},${mt},${Nn}\\)$`), Rs = {
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
is(Ln, Tn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bs,
  // Deprecated! Use color.formatHex.
  formatHex: Bs,
  formatHex8: Jc,
  formatHsl: Qc,
  formatRgb: Hs,
  toString: Hs
});
function Bs() {
  return this.rgb().formatHex();
}
function Jc() {
  return this.rgb().formatHex8();
}
function Qc() {
  return Vo(this).formatHsl();
}
function Hs() {
  return this.rgb().formatRgb();
}
function Tn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Gc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? zs(t) : n === 3 ? new at(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Hn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Hn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vc.exec(e)) ? new at(t[1], t[2], t[3], 1) : (t = Yc.exec(e)) ? new at(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = qc.exec(e)) ? Hn(t[1], t[2], t[3], t[4]) : (t = Xc.exec(e)) ? Hn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Kc.exec(e)) ? Us(t[1], t[2] / 100, t[3] / 100, 1) : (t = Zc.exec(e)) ? Us(t[1], t[2] / 100, t[3] / 100, t[4]) : Rs.hasOwnProperty(e) ? zs(Rs[e]) : e === "transparent" ? new at(NaN, NaN, NaN, 0) : null;
}
function zs(e) {
  return new at(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Hn(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new at(e, t, n, a);
}
function ed(e) {
  return e instanceof Ln || (e = Tn(e)), e ? (e = e.rgb(), new at(e.r, e.g, e.b, e.opacity)) : new at();
}
function wa(e, t, n, a) {
  return arguments.length === 1 ? ed(e) : new at(e, t, n, a ?? 1);
}
function at(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
is(at, wa, Go(Ln, {
  brighter(e) {
    return e = e == null ? qn : Math.pow(qn, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? jn : Math.pow(jn, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new at(Vt(this.r), Vt(this.g), Vt(this.b), Xn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ws,
  // Deprecated! Use color.formatHex.
  formatHex: Ws,
  formatHex8: td,
  formatRgb: Os,
  toString: Os
}));
function Ws() {
  return `#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}`;
}
function td() {
  return `#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}${Gt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Os() {
  const e = Xn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Vt(this.r)}, ${Vt(this.g)}, ${Vt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Xn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Vt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Gt(e) {
  return e = Vt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Us(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new lt(e, t, n, a);
}
function Vo(e) {
  if (e instanceof lt) return new lt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ln || (e = Tn(e)), !e) return new lt();
  if (e instanceof lt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, s = Math.min(t, n, a), o = Math.max(t, n, a), i = NaN, l = o - s, d = (o + s) / 2;
  return l ? (t === o ? i = (n - a) / l + (n < a) * 6 : n === o ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= d < 0.5 ? o + s : 2 - o - s, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new lt(i, l, d, e.opacity);
}
function nd(e, t, n, a) {
  return arguments.length === 1 ? Vo(e) : new lt(e, t, n, a ?? 1);
}
function lt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
is(lt, nd, Go(Ln, {
  brighter(e) {
    return e = e == null ? qn : Math.pow(qn, e), new lt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? jn : Math.pow(jn, e), new lt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - a;
    return new at(
      ta(e >= 240 ? e - 240 : e + 120, s, a),
      ta(e, s, a),
      ta(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new lt(Gs(this.h), zn(this.s), zn(this.l), Xn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Xn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Gs(this.h)}, ${zn(this.s) * 100}%, ${zn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Gs(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function zn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ta(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ls = (e) => () => e;
function rd(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ad(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function sd(e) {
  return (e = +e) == 1 ? Yo : function(t, n) {
    return n - t ? ad(t, n, e) : ls(isNaN(t) ? n : t);
  };
}
function Yo(e, t) {
  var n = t - e;
  return n ? rd(e, n) : ls(isNaN(e) ? t : e);
}
const Vs = (function e(t) {
  var n = sd(t);
  function a(s, o) {
    var i = n((s = wa(s)).r, (o = wa(o)).r), l = n(s.g, o.g), d = n(s.b, o.b), c = Yo(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = d(u), s.opacity = c(u), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function od(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function id(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ld(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, s = new Array(a), o = new Array(n), i;
  for (i = 0; i < a; ++i) s[i] = cs(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function cd(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Kn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function dd(e, t) {
  var n = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = cs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in n) a[s] = n[s](o);
    return a;
  };
}
var Sa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, na = new RegExp(Sa.source, "g");
function ud(e) {
  return function() {
    return e;
  };
}
function fd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function hd(e, t) {
  var n = Sa.lastIndex = na.lastIndex = 0, a, s, o, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = Sa.exec(e)) && (s = na.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, d.push({ i, x: Kn(a, s) })), n = na.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? d[0] ? fd(d[0].x) : ud(t) : (t = d.length, function(c) {
    for (var u = 0, h; u < t; ++u) l[(h = d[u]).i] = h.x(c);
    return l.join("");
  });
}
function cs(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? ls(t) : (n === "number" ? Kn : n === "string" ? (a = Tn(t)) ? (t = a, Vs) : hd : t instanceof Tn ? Vs : t instanceof Date ? cd : id(t) ? od : Array.isArray(t) ? ld : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? dd : Kn)(e, t);
}
function pd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function md(e) {
  return function() {
    return e;
  };
}
function gd(e) {
  return +e;
}
var Ys = [0, 1];
function on(e) {
  return e;
}
function ka(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : md(isNaN(t) ? NaN : 0.5);
}
function xd(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function bd(e, t, n) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = ka(s, a), o = n(i, o)) : (a = ka(a, s), o = n(o, i)), function(l) {
    return o(a(l));
  };
}
function yd(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = ka(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var d = Ec(e, l, 1, a) - 1;
    return o[d](s[d](l));
  };
}
function qo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function vd() {
  var e = Ys, t = Ys, n = cs, a, s, o, i = on, l, d, c;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== on && (i = xd(e[0], e[m - 1])), l = m > 2 ? yd : bd, d = c = null, h;
  }
  function h(m) {
    return m == null || isNaN(m = +m) ? o : (d || (d = l(e.map(a), t, n)))(a(i(m)));
  }
  return h.invert = function(m) {
    return i(s((c || (c = l(t, e.map(a), Kn)))(m)));
  }, h.domain = function(m) {
    return arguments.length ? (e = Array.from(m, gd), u()) : e.slice();
  }, h.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, h.rangeRound = function(m) {
    return t = Array.from(m), n = pd, u();
  }, h.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : on, u()) : i !== on;
  }, h.interpolate = function(m) {
    return arguments.length ? (n = m, u()) : n;
  }, h.unknown = function(m) {
    return arguments.length ? (o = m, h) : o;
  }, function(m, b) {
    return a = m, s = b, u();
  };
}
function Xo() {
  return vd()(on, on);
}
function _d(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Zn(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function fn(e) {
  return e = Zn(Math.abs(e)), e ? e[1] : NaN;
}
function wd(e, t) {
  return function(n, a) {
    for (var s = n.length, o = [], i = 0, l = e[0], d = 0; s > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), o.push(n.substring(s -= l, s + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Sd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var kd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Jn(e) {
  if (!(t = kd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ds({
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
Jn.prototype = ds.prototype;
function ds(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ds.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Cd(e) {
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
var Ko;
function jd(e, t) {
  var n = Zn(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1], o = s - (Ko = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + Zn(e, Math.max(0, t + o - 1))[0];
}
function qs(e, t) {
  var n = Zn(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const Xs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: _d,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => qs(e * 100, t),
  r: qs,
  s: jd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ks(e) {
  return e;
}
var Zs = Array.prototype.map, Js = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Nd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ks : wd(Zs.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Ks : Sd(Zs.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Jn(h);
    var m = h.fill, b = h.align, C = h.sign, v = h.symbol, f = h.zero, p = h.width, A = h.comma, L = h.precision, D = h.trim, H = h.type;
    H === "n" ? (A = !0, H = "g") : Xs[H] || (L === void 0 && (L = 12), D = !0, H = "g"), (f || m === "0" && b === "=") && (f = !0, m = "0", b = "=");
    var M = v === "$" ? n : v === "#" && /[boxX]/.test(H) ? "0" + H.toLowerCase() : "", F = v === "$" ? a : /[%p]/.test(H) ? i : "", N = Xs[H], x = /[defgprs%]/.test(H);
    L = L === void 0 ? 6 : /[gprs]/.test(H) ? Math.max(1, Math.min(21, L)) : Math.max(0, Math.min(20, L));
    function w(k) {
      var g = M, j = F, T, S, y;
      if (H === "c")
        j = N(k) + j, k = "";
      else {
        k = +k;
        var I = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? d : N(Math.abs(k), L), D && (k = Cd(k)), I && +k == 0 && C !== "+" && (I = !1), g = (I ? C === "(" ? C : l : C === "-" || C === "(" ? "" : C) + g, j = (H === "s" ? Js[8 + Ko / 3] : "") + j + (I && C === "(" ? ")" : ""), x) {
          for (T = -1, S = k.length; ++T < S; )
            if (y = k.charCodeAt(T), 48 > y || y > 57) {
              j = (y === 46 ? s + k.slice(T + 1) : k.slice(T)) + j, k = k.slice(0, T);
              break;
            }
        }
      }
      A && !f && (k = t(k, 1 / 0));
      var te = g.length + k.length + j.length, z = te < p ? new Array(p - te + 1).join(m) : "";
      switch (A && f && (k = t(z + k, z.length ? p - j.length : 1 / 0), z = ""), b) {
        case "<":
          k = g + k + j + z;
          break;
        case "=":
          k = g + z + k + j;
          break;
        case "^":
          k = z.slice(0, te = z.length >> 1) + g + k + j + z.slice(te);
          break;
        default:
          k = z + g + k + j;
          break;
      }
      return o(k);
    }
    return w.toString = function() {
      return h + "";
    }, w;
  }
  function u(h, m) {
    var b = c((h = Jn(h), h.type = "f", h)), C = Math.max(-8, Math.min(8, Math.floor(fn(m) / 3))) * 3, v = Math.pow(10, -C), f = Js[8 + C / 3];
    return function(p) {
      return b(v * p) + f;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Wn, Zo, Jo;
Td({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Td(e) {
  return Wn = Nd(e), Zo = Wn.format, Jo = Wn.formatPrefix, Wn;
}
function Dd(e) {
  return Math.max(0, -fn(Math.abs(e)));
}
function $d(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(fn(t) / 3))) * 3 - fn(Math.abs(e)));
}
function Md(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, fn(t) - fn(e)) + 1;
}
function Id(e, t, n, a) {
  var s = _a(e, t, n), o;
  switch (a = Jn(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = $d(s, i)) && (a.precision = o), Jo(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = Md(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = Dd(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return Zo(a);
}
function Ld(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Oc(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var s = t();
    return Id(s[0], s[s.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], d, c, u = 10;
    for (l < i && (c = i, i = l, l = c, c = s, s = o, o = c); u-- > 0; ) {
      if (c = va(i, l, n), c === d)
        return a[s] = i, a[o] = l, t(a);
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
function Qn() {
  var e = Xo();
  return e.copy = function() {
    return qo(e, Qn());
  }, Ar.apply(e, arguments), Ld(e);
}
function Fd(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, s = e[n], o = e[a], i;
  return o < s && (i = n, n = a, a = i, i = s, s = o, o = i), e[n] = t.floor(s), e[a] = t.ceil(o), e;
}
const ra = /* @__PURE__ */ new Date(), aa = /* @__PURE__ */ new Date();
function Xe(e, t, n, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const d = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return d;
    let c;
    do
      d.push(c = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (c < o && o < i);
    return d;
  }, s.filter = (o) => Xe((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), n && (s.count = (o, i) => (ra.setTime(+o), aa.setTime(+i), e(ra), e(aa), Math.floor(n(ra, aa))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const er = Xe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
er.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Xe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : er);
er.range;
const Dt = 1e3, it = Dt * 60, $t = it * 60, It = $t * 24, us = It * 7, Qs = It * 30, sa = It * 365, ln = Xe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Dt);
}, (e, t) => (t - e) / Dt, (e) => e.getUTCSeconds());
ln.range;
const fs = Xe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Dt);
}, (e, t) => {
  e.setTime(+e + t * it);
}, (e, t) => (t - e) / it, (e) => e.getMinutes());
fs.range;
const Pd = Xe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * it);
}, (e, t) => (t - e) / it, (e) => e.getUTCMinutes());
Pd.range;
const hs = Xe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Dt - e.getMinutes() * it);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getHours());
hs.range;
const Ed = Xe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCHours());
Ed.range;
const Fn = Xe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * it) / It,
  (e) => e.getDate() - 1
);
Fn.range;
const ps = Xe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / It, (e) => e.getUTCDate() - 1);
ps.range;
const Ad = Xe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / It, (e) => Math.floor(e / It));
Ad.range;
function Kt(e) {
  return Xe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * it) / us);
}
const Rr = Kt(0), tr = Kt(1), Rd = Kt(2), Bd = Kt(3), hn = Kt(4), Hd = Kt(5), zd = Kt(6);
Rr.range;
tr.range;
Rd.range;
Bd.range;
hn.range;
Hd.range;
zd.range;
function Zt(e) {
  return Xe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / us);
}
const Qo = Zt(0), nr = Zt(1), Wd = Zt(2), Od = Zt(3), pn = Zt(4), Ud = Zt(5), Gd = Zt(6);
Qo.range;
nr.range;
Wd.range;
Od.range;
pn.range;
Ud.range;
Gd.range;
const Dn = Xe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Dn.range;
const Vd = Xe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Vd.range;
const Lt = Xe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Lt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Xe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Lt.range;
const qt = Xe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Xe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
qt.range;
function Yd(e, t, n, a, s, o) {
  const i = [
    [ln, 1, Dt],
    [ln, 5, 5 * Dt],
    [ln, 15, 15 * Dt],
    [ln, 30, 30 * Dt],
    [o, 1, it],
    [o, 5, 5 * it],
    [o, 15, 15 * it],
    [o, 30, 30 * it],
    [s, 1, $t],
    [s, 3, 3 * $t],
    [s, 6, 6 * $t],
    [s, 12, 12 * $t],
    [a, 1, It],
    [a, 2, 2 * It],
    [n, 1, us],
    [t, 1, Qs],
    [t, 3, 3 * Qs],
    [e, 1, sa]
  ];
  function l(c, u, h) {
    const m = u < c;
    m && ([c, u] = [u, c]);
    const b = h && typeof h.range == "function" ? h : d(c, u, h), C = b ? b.range(c, +u + 1) : [];
    return m ? C.reverse() : C;
  }
  function d(c, u, h) {
    const m = Math.abs(u - c) / h, b = os(([, , f]) => f).right(i, m);
    if (b === i.length) return e.every(_a(c / sa, u / sa, h));
    if (b === 0) return er.every(Math.max(_a(c, u, h), 1));
    const [C, v] = i[m / i[b - 1][2] < i[b][2] / m ? b - 1 : b];
    return C.every(v);
  }
  return [l, d];
}
const [qd, Xd] = Yd(Lt, Dn, Rr, Fn, hs, fs);
function oa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ia(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function vn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Kd(e) {
  var t = e.dateTime, n = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = _n(s), u = wn(s), h = _n(o), m = wn(o), b = _n(i), C = wn(i), v = _n(l), f = wn(l), p = _n(d), A = wn(d), L = {
    a: I,
    A: te,
    b: z,
    B,
    c: null,
    d: so,
    e: so,
    f: yu,
    g: Du,
    G: Mu,
    H: gu,
    I: xu,
    j: bu,
    L: ei,
    m: vu,
    M: _u,
    p: G,
    q: R,
    Q: lo,
    s: co,
    S: wu,
    u: Su,
    U: ku,
    V: Cu,
    w: ju,
    W: Nu,
    x: null,
    X: null,
    y: Tu,
    Y: $u,
    Z: Iu,
    "%": io
  }, D = {
    a: re,
    A: U,
    b: ce,
    B: _e,
    c: null,
    d: oo,
    e: oo,
    f: Eu,
    g: Vu,
    G: qu,
    H: Lu,
    I: Fu,
    j: Pu,
    L: ni,
    m: Au,
    M: Ru,
    p: ie,
    q: le,
    Q: lo,
    s: co,
    S: Bu,
    u: Hu,
    U: zu,
    V: Wu,
    w: Ou,
    W: Uu,
    x: null,
    X: null,
    y: Gu,
    Y: Yu,
    Z: Xu,
    "%": io
  }, H = {
    a: w,
    A: k,
    b: g,
    B: j,
    c: T,
    d: ro,
    e: ro,
    f: fu,
    g: no,
    G: to,
    H: ao,
    I: ao,
    j: lu,
    L: uu,
    m: iu,
    M: cu,
    p: x,
    q: ou,
    Q: pu,
    s: mu,
    S: du,
    u: tu,
    U: nu,
    V: ru,
    w: eu,
    W: au,
    x: S,
    X: y,
    y: no,
    Y: to,
    Z: su,
    "%": hu
  };
  L.x = M(n, L), L.X = M(a, L), L.c = M(t, L), D.x = M(n, D), D.X = M(a, D), D.c = M(t, D);
  function M(ee, _) {
    return function(E) {
      var $ = [], Q = -1, O = 0, Y = ee.length, ae, he, pe;
      for (E instanceof Date || (E = /* @__PURE__ */ new Date(+E)); ++Q < Y; )
        ee.charCodeAt(Q) === 37 && ($.push(ee.slice(O, Q)), (he = eo[ae = ee.charAt(++Q)]) != null ? ae = ee.charAt(++Q) : he = ae === "e" ? " " : "0", (pe = _[ae]) && (ae = pe(E, he)), $.push(ae), O = Q + 1);
      return $.push(ee.slice(O, Q)), $.join("");
    };
  }
  function F(ee, _) {
    return function(E) {
      var $ = vn(1900, void 0, 1), Q = N($, ee, E += "", 0), O, Y;
      if (Q != E.length) return null;
      if ("Q" in $) return new Date($.Q);
      if ("s" in $) return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (_ && !("Z" in $) && ($.Z = 0), "p" in $ && ($.H = $.H % 12 + $.p * 12), $.m === void 0 && ($.m = "q" in $ ? $.q : 0), "V" in $) {
        if ($.V < 1 || $.V > 53) return null;
        "w" in $ || ($.w = 1), "Z" in $ ? (O = ia(vn($.y, 0, 1)), Y = O.getUTCDay(), O = Y > 4 || Y === 0 ? nr.ceil(O) : nr(O), O = ps.offset(O, ($.V - 1) * 7), $.y = O.getUTCFullYear(), $.m = O.getUTCMonth(), $.d = O.getUTCDate() + ($.w + 6) % 7) : (O = oa(vn($.y, 0, 1)), Y = O.getDay(), O = Y > 4 || Y === 0 ? tr.ceil(O) : tr(O), O = Fn.offset(O, ($.V - 1) * 7), $.y = O.getFullYear(), $.m = O.getMonth(), $.d = O.getDate() + ($.w + 6) % 7);
      } else ("W" in $ || "U" in $) && ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0), Y = "Z" in $ ? ia(vn($.y, 0, 1)).getUTCDay() : oa(vn($.y, 0, 1)).getDay(), $.m = 0, $.d = "W" in $ ? ($.w + 6) % 7 + $.W * 7 - (Y + 5) % 7 : $.w + $.U * 7 - (Y + 6) % 7);
      return "Z" in $ ? ($.H += $.Z / 100 | 0, $.M += $.Z % 100, ia($)) : oa($);
    };
  }
  function N(ee, _, E, $) {
    for (var Q = 0, O = _.length, Y = E.length, ae, he; Q < O; ) {
      if ($ >= Y) return -1;
      if (ae = _.charCodeAt(Q++), ae === 37) {
        if (ae = _.charAt(Q++), he = H[ae in eo ? _.charAt(Q++) : ae], !he || ($ = he(ee, E, $)) < 0) return -1;
      } else if (ae != E.charCodeAt($++))
        return -1;
    }
    return $;
  }
  function x(ee, _, E) {
    var $ = c.exec(_.slice(E));
    return $ ? (ee.p = u.get($[0].toLowerCase()), E + $[0].length) : -1;
  }
  function w(ee, _, E) {
    var $ = b.exec(_.slice(E));
    return $ ? (ee.w = C.get($[0].toLowerCase()), E + $[0].length) : -1;
  }
  function k(ee, _, E) {
    var $ = h.exec(_.slice(E));
    return $ ? (ee.w = m.get($[0].toLowerCase()), E + $[0].length) : -1;
  }
  function g(ee, _, E) {
    var $ = p.exec(_.slice(E));
    return $ ? (ee.m = A.get($[0].toLowerCase()), E + $[0].length) : -1;
  }
  function j(ee, _, E) {
    var $ = v.exec(_.slice(E));
    return $ ? (ee.m = f.get($[0].toLowerCase()), E + $[0].length) : -1;
  }
  function T(ee, _, E) {
    return N(ee, t, _, E);
  }
  function S(ee, _, E) {
    return N(ee, n, _, E);
  }
  function y(ee, _, E) {
    return N(ee, a, _, E);
  }
  function I(ee) {
    return i[ee.getDay()];
  }
  function te(ee) {
    return o[ee.getDay()];
  }
  function z(ee) {
    return d[ee.getMonth()];
  }
  function B(ee) {
    return l[ee.getMonth()];
  }
  function G(ee) {
    return s[+(ee.getHours() >= 12)];
  }
  function R(ee) {
    return 1 + ~~(ee.getMonth() / 3);
  }
  function re(ee) {
    return i[ee.getUTCDay()];
  }
  function U(ee) {
    return o[ee.getUTCDay()];
  }
  function ce(ee) {
    return d[ee.getUTCMonth()];
  }
  function _e(ee) {
    return l[ee.getUTCMonth()];
  }
  function ie(ee) {
    return s[+(ee.getUTCHours() >= 12)];
  }
  function le(ee) {
    return 1 + ~~(ee.getUTCMonth() / 3);
  }
  return {
    format: function(ee) {
      var _ = M(ee += "", L);
      return _.toString = function() {
        return ee;
      }, _;
    },
    parse: function(ee) {
      var _ = F(ee += "", !1);
      return _.toString = function() {
        return ee;
      }, _;
    },
    utcFormat: function(ee) {
      var _ = M(ee += "", D);
      return _.toString = function() {
        return ee;
      }, _;
    },
    utcParse: function(ee) {
      var _ = F(ee += "", !0);
      return _.toString = function() {
        return ee;
      }, _;
    }
  };
}
var eo = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, Zd = /^%/, Jd = /[\\^$*+?|[\]().{}]/g;
function Ae(e, t, n) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function Qd(e) {
  return e.replace(Jd, "\\$&");
}
function _n(e) {
  return new RegExp("^(?:" + e.map(Qd).join("|") + ")", "i");
}
function wn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function eu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function tu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function nu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function ru(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function au(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function to(e, t, n) {
  var a = Je.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function no(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function su(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function ou(e, t, n) {
  var a = Je.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function iu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function ro(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function lu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function ao(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function cu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function du(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function uu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function fu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function hu(e, t, n) {
  var a = Zd.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function pu(e, t, n) {
  var a = Je.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function mu(e, t, n) {
  var a = Je.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function so(e, t) {
  return Ae(e.getDate(), t, 2);
}
function gu(e, t) {
  return Ae(e.getHours(), t, 2);
}
function xu(e, t) {
  return Ae(e.getHours() % 12 || 12, t, 2);
}
function bu(e, t) {
  return Ae(1 + Fn.count(Lt(e), e), t, 3);
}
function ei(e, t) {
  return Ae(e.getMilliseconds(), t, 3);
}
function yu(e, t) {
  return ei(e, t) + "000";
}
function vu(e, t) {
  return Ae(e.getMonth() + 1, t, 2);
}
function _u(e, t) {
  return Ae(e.getMinutes(), t, 2);
}
function wu(e, t) {
  return Ae(e.getSeconds(), t, 2);
}
function Su(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ku(e, t) {
  return Ae(Rr.count(Lt(e) - 1, e), t, 2);
}
function ti(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? hn(e) : hn.ceil(e);
}
function Cu(e, t) {
  return e = ti(e), Ae(hn.count(Lt(e), e) + (Lt(e).getDay() === 4), t, 2);
}
function ju(e) {
  return e.getDay();
}
function Nu(e, t) {
  return Ae(tr.count(Lt(e) - 1, e), t, 2);
}
function Tu(e, t) {
  return Ae(e.getFullYear() % 100, t, 2);
}
function Du(e, t) {
  return e = ti(e), Ae(e.getFullYear() % 100, t, 2);
}
function $u(e, t) {
  return Ae(e.getFullYear() % 1e4, t, 4);
}
function Mu(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? hn(e) : hn.ceil(e), Ae(e.getFullYear() % 1e4, t, 4);
}
function Iu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ae(t / 60 | 0, "0", 2) + Ae(t % 60, "0", 2);
}
function oo(e, t) {
  return Ae(e.getUTCDate(), t, 2);
}
function Lu(e, t) {
  return Ae(e.getUTCHours(), t, 2);
}
function Fu(e, t) {
  return Ae(e.getUTCHours() % 12 || 12, t, 2);
}
function Pu(e, t) {
  return Ae(1 + ps.count(qt(e), e), t, 3);
}
function ni(e, t) {
  return Ae(e.getUTCMilliseconds(), t, 3);
}
function Eu(e, t) {
  return ni(e, t) + "000";
}
function Au(e, t) {
  return Ae(e.getUTCMonth() + 1, t, 2);
}
function Ru(e, t) {
  return Ae(e.getUTCMinutes(), t, 2);
}
function Bu(e, t) {
  return Ae(e.getUTCSeconds(), t, 2);
}
function Hu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function zu(e, t) {
  return Ae(Qo.count(qt(e) - 1, e), t, 2);
}
function ri(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? pn(e) : pn.ceil(e);
}
function Wu(e, t) {
  return e = ri(e), Ae(pn.count(qt(e), e) + (qt(e).getUTCDay() === 4), t, 2);
}
function Ou(e) {
  return e.getUTCDay();
}
function Uu(e, t) {
  return Ae(nr.count(qt(e) - 1, e), t, 2);
}
function Gu(e, t) {
  return Ae(e.getUTCFullYear() % 100, t, 2);
}
function Vu(e, t) {
  return e = ri(e), Ae(e.getUTCFullYear() % 100, t, 2);
}
function Yu(e, t) {
  return Ae(e.getUTCFullYear() % 1e4, t, 4);
}
function qu(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? pn(e) : pn.ceil(e), Ae(e.getUTCFullYear() % 1e4, t, 4);
}
function Xu() {
  return "+0000";
}
function io() {
  return "%";
}
function lo(e) {
  return +e;
}
function co(e) {
  return Math.floor(+e / 1e3);
}
var tn, ai;
Ku({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ku(e) {
  return tn = Kd(e), ai = tn.format, tn.parse, tn.utcFormat, tn.utcParse, tn;
}
function Zu(e) {
  return new Date(e);
}
function Ju(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function si(e, t, n, a, s, o, i, l, d, c) {
  var u = Xo(), h = u.invert, m = u.domain, b = c(".%L"), C = c(":%S"), v = c("%I:%M"), f = c("%I %p"), p = c("%a %d"), A = c("%b %d"), L = c("%B"), D = c("%Y");
  function H(M) {
    return (d(M) < M ? b : l(M) < M ? C : i(M) < M ? v : o(M) < M ? f : a(M) < M ? s(M) < M ? p : A : n(M) < M ? L : D)(M);
  }
  return u.invert = function(M) {
    return new Date(h(M));
  }, u.domain = function(M) {
    return arguments.length ? m(Array.from(M, Ju)) : m().map(Zu);
  }, u.ticks = function(M) {
    var F = m();
    return e(F[0], F[F.length - 1], M ?? 10);
  }, u.tickFormat = function(M, F) {
    return F == null ? H : c(F);
  }, u.nice = function(M) {
    var F = m();
    return (!M || typeof M.range != "function") && (M = t(F[0], F[F.length - 1], M ?? 10)), M ? m(Fd(F, M)) : u;
  }, u.copy = function() {
    return qo(u, si(e, t, n, a, s, o, i, l, d, c));
  }, u;
}
function ms() {
  return Ar.apply(si(qd, Xd, Lt, Dn, Rr, Fn, hs, fs, ln, ai).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Qu({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": d
}) {
  const c = Fe(null), [u, h] = Me(!1), [m, b] = Me(!1), C = t(e.start), v = t(e.end), f = Math.max(v - C, 20), p = () => {
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
  }, A = e.progress ? f * e.progress / 100 : 0, L = () => {
    n?.(e);
  }, D = () => {
    a?.(e);
  }, H = (g) => {
    g.key === "Enter" ? (g.preventDefault(), L()) : g.key === " " && (g.preventDefault(), D());
  }, M = () => {
    h(!0);
  }, F = () => {
    h(!1);
  }, N = () => {
    b(!0), l?.();
  }, x = () => {
    b(!1);
  }, w = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (m || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${C}px`,
    "--task-width": `${f}px`,
    "--task-color": p(),
    left: `${C}px`,
    width: `${f}px`,
    backgroundColor: p()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": o,
      className: w,
      style: k,
      onClick: L,
      onDoubleClick: D,
      onKeyDown: H,
      onMouseDown: M,
      onMouseUp: F,
      onFocus: N,
      onBlur: x,
      "aria-label": d || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${A}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function ef({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let b = e.getTime(); b <= t.getTime(); b += 864e5)
    a.push(new Date(b));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Me(-1), d = Fe(null), c = (b) => {
    if (b.key === "ArrowLeft") {
      b.preventDefault();
      const C = Math.max(0, i === -1 ? 0 : i - 1);
      l(C), m(C);
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const C = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(C), m(C);
    } else if (b.key === "ArrowDown") {
      b.preventDefault();
      const C = document.querySelector(".gantt-row .timeline-container");
      C && C.focus();
    } else if (b.key === "Home")
      b.preventDefault(), l(0), m(0);
    else if (b.key === "End") {
      b.preventDefault();
      const C = a.length - 1;
      l(C), m(C);
    }
  }, u = (b) => {
    if (b.key === "ArrowDown") {
      b.preventDefault();
      const C = document.querySelector(".gantt-row .resource-label");
      C && C.focus();
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const C = d.current;
      C && C.focus();
    }
  }, h = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (b) => {
    const C = d.current?.querySelector(`[data-date-index="${b}"]`);
    C && C.focus();
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
            ref: d,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: h,
            children: a.map((b, C) => {
              const v = b.getTime() === o.getTime(), f = i === C;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": C,
                  className: `date-column ${v ? "today" : ""} ${f ? "focused" : ""}`,
                  tabIndex: f ? 0 : -1,
                  role: "button",
                  "aria-label": `${b.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${v ? " (Today)" : ""}`,
                  onFocus: () => l(C),
                  onKeyDown: c,
                  children: b.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                C
              );
            })
          }
        )
      ]
    }
  );
}
function tf({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, d] = Me(!1), [c, u] = Me(-1), h = Fe(null);
  Be(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      h.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const m = (v) => {
    if (v.key === "ArrowLeft" && v.shiftKey) {
      v.preventDefault(), v.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (v.key === "ArrowRight" && v.shiftKey) {
      v.preventDefault(), v.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (v.key) {
        case "ArrowUp":
          v.preventDefault(), o === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          v.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          v.preventDefault(), h.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (v.preventDefault(), d(!0), u(0));
          break;
      }
      return;
    }
    switch (v.key) {
      case "ArrowLeft":
        v.preventDefault();
        const f = Math.max(0, c - 1);
        u(f), h.current?.querySelector(`[data-task-index="${f}"]`)?.focus();
        break;
      case "ArrowRight":
        v.preventDefault();
        const A = Math.min(t.length - 1, c + 1);
        u(A), h.current?.querySelector(`[data-task-index="${A}"]`)?.focus();
        break;
      case "Enter":
        v.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        v.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        v.preventDefault(), d(!1), u(-1), h.current?.focus();
        break;
    }
  }, b = (v) => {
    switch (v.key) {
      case "ArrowUp":
        v.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        v.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        v.preventDefault(), h.current?.focus();
        break;
    }
  }, C = (v) => {
    l && u(v);
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
            onKeyDown: b,
            children: e.label
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: h,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: m,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((v, f) => /* @__PURE__ */ r.jsx(
              Qu,
              {
                task: v,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === f,
                taskIndex: f,
                tabIndex: l && c === f ? 0 : -1,
                onFocus: () => C(f)
              },
              v.id
            ))
          }
        )
      ]
    }
  );
}
function Ix({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Fe(null), [l, d] = Me(800), c = $e(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const v = new Date(n);
    return isNaN(v.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : v;
  }, [n]), u = $e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const v = new Date(a);
    return isNaN(v.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : v;
  }, [a]), h = $e(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  Be(() => {
    if (!i.current) return;
    const v = new ResizeObserver((f) => {
      const p = f[0];
      p && d(Math.max(p.contentRect.width - 220, 400));
    });
    return v.observe(i.current), () => v.disconnect();
  }, []);
  const m = $e(
    () => ms().domain([c, u]).range([0, l]),
    [c, u, l]
  ), b = $e(() => {
    const v = /* @__PURE__ */ new Map();
    return t.forEach((f) => {
      const p = v.get(f.resourceId) || [];
      p.push(f), v.set(f.resourceId, p);
    }), v;
  }, [t]), C = (v) => {
    if (v.target === v.currentTarget)
      switch (v.key) {
        case "ArrowDown":
          v.preventDefault();
          const f = i.current?.querySelector(".gantt-row .resource-label");
          f && f.focus();
          break;
        case "Home":
          v.preventDefault();
          const p = i.current?.querySelector(".header-resource");
          p && p.focus();
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
      "aria-colcount": h + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: C,
      children: [
        /* @__PURE__ */ r.jsx(ef, { viewStart: c, viewEnd: u, dateCount: h }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (v) => {
              v.key === "ArrowLeft" && v.altKey ? (v.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : v.key === "ArrowRight" && v.altKey ? (v.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : v.key === "ArrowUp" && v.altKey ? (v.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : v.key === "ArrowDown" && v.altKey && (v.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((v, f) => /* @__PURE__ */ r.jsx(
              tf,
              {
                resource: v,
                tasks: b.get(v.id) || [],
                scale: m,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: f,
                dateCount: h
              },
              v.id
            ))
          }
        )
      ]
    }
  );
}
const rr = ({
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
) }), nf = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? st.Children.toArray(t).filter(
    (f) => st.isValidElement(f) && (f.type === rr || f.type?.displayName === "BreadcrumbItem")
  ).map((f) => ({
    text: typeof f.props.children == "string" ? f.props.children : String(f.props.children),
    href: f.props.href,
    active: f.props.active,
    attributes: f.props.attributes
  })) : [], c = () => t ? d() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const v = c();
    if (v && v.length > 0) {
      const f = v.slice().reverse().find((p) => p.href && !p.active);
      if (f)
        return { href: f.href, text: f.text };
    }
    return { text: "Home" };
  }, h = c(), m = u(), b = xe(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), C = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: b,
      "aria-label": C,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          st.Children.map(t, (v, f) => st.isValidElement(v) && (v.type === rr || v.type?.displayName === "BreadcrumbItem") ? st.cloneElement(v, { key: f }) : null)
        ) : (
          // Render from items array
          h?.filter((v) => v.active || !!v.href).map((v, f) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: v.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...v.attributes || {},
              children: v.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: v.href,
              role: "link",
              ...v.attributes || {},
              children: v.text
            }
          ) }, f))
        ) }),
        m.href && /* @__PURE__ */ r.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ r.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: m.href,
            role: "link",
            "aria-label": `Back to ${m.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              m.text
            ]
          }
        ) })
      ]
    }
  );
}, rf = nf;
rf.Item = rr;
rr.displayName = "BreadcrumbItem";
const oi = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [s, o] = Me(!1);
  Be(() => {
    o(!0);
  }, []), Be(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, u = c.getAttribute("href");
      if (u && u.startsWith("#")) {
        const h = document.querySelector(u);
        if (h) {
          h.hasAttribute("tabindex") || h.setAttribute("tabindex", "-1"), h.focus(), h.classList.add("nhsuk-skip-link-focused-element");
          const m = window.setTimeout(() => {
            h.classList.remove("nhsuk-skip-link-focused-element"), h.getAttribute("tabindex") === "-1" && h.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = m;
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
  }, [s]);
  const i = xe("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
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
}, Lx = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = xe("nhsuk-pagination", s);
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: i,
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
}, Fx = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = xe("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
      className: s,
      role: "navigation",
      "aria-label": n,
      ...a,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => o(i, l)) })
      ]
    }
  );
}, ii = st.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  href: l,
  imgURL: d,
  imgAlt: c,
  ...u
}, h) => {
  const m = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), b = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), C = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), v = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const A = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Mt,
      {
        level: a,
        className: C,
        children: A()
      }
    );
  }, f = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: o }) : null, p = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
      className: m,
      ref: h,
      children: [
        d && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: b, children: [
          v(),
          f(),
          p()
        ] })
      ]
    }
  );
});
ii.displayName = "Card";
const Px = ({
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
}, Ex = ({
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
}, Ax = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: d,
  "data-testid": c,
  id: u,
  "aria-label": h,
  "aria-labelledby": m,
  "aria-describedby": b
}) => {
  const C = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), v = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), f = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const A = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        A,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Mt,
      {
        level: a,
        className: v,
        children: L
      }
    );
  }, p = () => d || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C,
      "data-testid": c,
      id: u,
      "aria-label": h,
      "aria-labelledby": m,
      "aria-describedby": b,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          f(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: p() })
      ]
    }
  );
}, af = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: i,
  children: l,
  ...d
}) => {
  const c = xe(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Mt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Mt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      text: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, h = () => l ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : o ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ r.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ r.jsxs("div", { className: c, id: e, ...d, children: [
    u(),
    h()
  ] });
}, Rx = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...s
}) => {
  const o = xe("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: o, ...s, children: i() });
}, Bx = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const s = xe(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((d, c) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: d.href,
          className: "nhsuk-link",
          ...d.attributes,
          children: [
            o(d),
            d.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: d.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: s, ...a, children: e.map((l, d) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, d)) }) });
}, Sn = { current: null }, sf = () => {
  if (Sn.current) return Sn.current;
  try {
    Sn.current = require("prismjs");
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
    Sn.current = null;
  }
  return Sn.current;
}, of = (e) => {
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
}, ar = (e, t, n) => {
  if (n || !t) return e;
  const a = sf();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return of(e);
}, lf = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: d = !1,
  panelClasses: c,
  tableClasses: u,
  classes: h,
  attributes: m,
  "data-testid": b,
  columns: C,
  data: v,
  visuallyHiddenCaption: f = !1
}) => {
  const p = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), A = xe(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), L = xe(h), D = (x, w) => {
    const k = xe(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${x.format}`]: x.format
      },
      x.classes
    ), g = {
      scope: "col",
      ...x.colspan && { colSpan: x.colspan },
      ...x.rowspan && { rowSpan: x.rowspan },
      ...o && { role: "columnheader" },
      ...x.attributes
    };
    let j;
    if (x.node != null)
      j = /* @__PURE__ */ r.jsx(r.Fragment, { children: x.node });
    else if (x.html)
      j = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } });
    else if (x.code != null) {
      const T = Array.isArray(x.code), S = T ? x.code.join(`
`) : x.code, y = T || S.includes(`
`), I = {
        className: xe("nhsuk-table__code", x.codeClassName, {
          "nhsuk-table__code--block": y,
          "nhsuk-table__code--inline": !y
        }),
        ...x.codeLanguage ? { "data-language": x.codeLanguage } : {}
      }, te = ar(S, x.codeLanguage);
      j = y ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...I,
          dangerouslySetInnerHTML: { __html: te }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...I,
          dangerouslySetInnerHTML: { __html: te }
        }
      );
    } else
      j = x.text;
    return /* @__PURE__ */ r.jsx("th", { className: k, ...g, children: j }, w);
  }, H = (x, w, k) => {
    const g = s && k || x.rowHeader, j = xe(
      g ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${g ? "header" : "cell"}--${x.format}`]: x.format
      },
      x.classes
    ), T = {
      ...g && { scope: "row" },
      ...x.colspan && { colSpan: x.colspan },
      ...x.rowspan && { rowSpan: x.rowspan },
      ...o && {
        role: g ? "rowheader" : "cell",
        ...x.header && { "data-label": x.header }
      },
      ...x.attributes
    };
    let S;
    if (x.node != null)
      S = /* @__PURE__ */ r.jsx(r.Fragment, { children: x.node });
    else if (x.html)
      S = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } });
    else if (x.code != null) {
      const te = Array.isArray(x.code), z = te ? x.code.join(`
`) : x.code, B = te || z.includes(`
`), G = {
        className: xe("nhsuk-table__code", x.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...x.codeLanguage ? { "data-language": x.codeLanguage } : {}
      }, R = ar(
        z,
        x.codeLanguage,
        x.disableHighlight
      );
      S = B ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...G,
          dangerouslySetInnerHTML: { __html: R }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...G,
          dangerouslySetInnerHTML: { __html: R }
        }
      );
    } else
      S = x.text;
    const y = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && x.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        x.header,
        " "
      ] }),
      S
    ] }), I = g ? "th" : "td";
    return /* @__PURE__ */ r.jsx(I, { className: j, ...T, children: y }, w);
  };
  let M = t, F = e;
  !M && C && C.length && (M = C.map((x) => ({
    text: x.title,
    format: x.format,
    classes: x.headerClasses,
    attributes: x.headerAttributes
  }))), !F && C && v && v.length && (F = v.map((x, w) => C.map((k) => {
    const g = k.accessor ? k.accessor(x, w) : x[k.key];
    let j = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (j.rowHeader = !0), k.render) {
      const T = k.render(g, x, w, k);
      return T == null || typeof T == "boolean" ? { ...j, text: "" } : typeof T == "string" || typeof T == "number" ? { ...j, text: String(T) } : { ...j, ...T };
    }
    return { ...j, text: g != null ? String(g) : "" };
  })));
  const N = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: A,
      ...o && { role: "table" },
      ...m,
      ...b && { "data-testid": b },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: xe(p, f && "nhsuk-u-visually-hidden"), children: n }),
        M && M.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...o && { role: "row" }, children: M.map(
              (x, w) => D(x, w)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: F && F.map((x, w) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: x.map(
              (k, g) => H(k, g, g === 0)
            )
          },
          w
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ r.jsxs(af, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(Mt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    N()
  ] }) : L ? /* @__PURE__ */ r.jsx("div", { className: L, children: N() }) : N();
}, cf = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = xe(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, li = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...s, ...a, children: n });
}, ci = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: d,
  colspan: c,
  rowspan: u,
  attributes: h,
  responsive: m,
  as: b = "th"
}) => {
  const C = xe(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    d
  ), v = {
    scope: "col",
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...m && { role: "columnheader" },
    ...h
  };
  let f;
  if (n != null) f = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) f = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const A = Array.isArray(a), L = A ? a.join(`
`) : a, D = A || L.includes(`
`), H = {
      className: xe("nhsuk-table__code", o, {
        "nhsuk-table__code--block": D,
        "nhsuk-table__code--inline": !D
      }),
      ...s ? { "data-language": s } : {}
    }, M = ar(
      L,
      s,
      i
    );
    f = D ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...H,
        dangerouslySetInnerHTML: { __html: M }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...H, dangerouslySetInnerHTML: { __html: M } });
  } else f = e;
  const p = b;
  return /* @__PURE__ */ r.jsx(p, { className: C, ...v, children: f });
}, df = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: d,
  colspan: c,
  rowspan: u,
  attributes: h,
  responsive: m,
  rowHeader: b
}) => {
  const C = !!b, v = C ? "th" : "td", f = xe(
    C ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${C ? "header" : "cell"}--${l}`,
    d
  ), p = {
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...C && { scope: "row" },
    ...m && { role: C ? "rowheader" : "cell" },
    ...h
  };
  let A;
  if (n != null) A = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) A = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const L = Array.isArray(a), D = L ? a.join(`
`) : a, H = L || D.includes(`
`), M = {
      className: xe("nhsuk-table__code", o, {
        "nhsuk-table__code--block": H,
        "nhsuk-table__code--inline": !H
      }),
      ...s ? { "data-language": s } : {}
    }, F = ar(D, s, i);
    A = H ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: F } }) }) : /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: F } });
  } else A = e;
  return /* @__PURE__ */ r.jsx(v, { className: f, ...p, children: A });
}, dt = lf;
dt.Caption = cf;
dt.BodyRow = li;
dt.HeaderCell = ci;
dt.Cell = df;
dt.Row = li;
dt.TH = ci;
process.env.NODE_ENV !== "production" && (dt.Row && console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), dt.TH && console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."));
const Hx = mn(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: d,
  id: c,
  "data-testid": u,
  ...h
}, m) => {
  const b = n !== void 0, [C, v] = Me(() => t || e[0]?.id || ""), f = b ? n : C, p = Fe(null), A = Fe(/* @__PURE__ */ new Map()), L = me((w) => {
    b || v(w), a?.(w);
  }, [b, a]), D = me((w) => {
    s?.(w), l && L(w);
  }, [s, l, L]), H = me((w, k) => {
    const g = e.filter((S) => !S.disabled).map((S) => S.id), j = g.indexOf(k);
    let T = null;
    switch (w.key) {
      case "ArrowLeft":
        T = j > 0 ? j - 1 : g.length - 1;
        break;
      case "ArrowRight":
        T = j < g.length - 1 ? j + 1 : 0;
        break;
      case "Home":
        T = 0;
        break;
      case "End":
        T = g.length - 1;
        break;
      case "Escape":
        w.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (T !== null) {
      w.preventDefault();
      const S = g[T], y = A.current.get(S);
      y && (y.focus(), D(S));
    }
  }, [e, D, i]), M = me((w, k) => {
    k ? A.current.set(w, k) : A.current.delete(w);
  }, []), F = me((w) => {
    const k = A.current.get(w);
    k && k.focus();
  }, []);
  Mo(m, () => ({
    focusTab: F,
    getActiveTab: () => f,
    getTabListElement: () => p.current
  }), [F, f]);
  const N = me((w) => {
    const k = w.relatedTarget;
    p.current?.contains(k) || o?.();
  }, [o]), x = xe("nhsuk-tabs", d);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: x,
      id: c,
      "data-testid": u,
      ...h,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: p,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: N,
                children: e.map((w) => {
                  const k = w.id === f, g = w.disabled, j = xe("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": g
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: j, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (T) => M(w.id, T),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${w.id}-panel`,
                      id: `${w.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: g,
                      onClick: () => !g && L(w.id),
                      onKeyDown: (T) => !g && H(T, w.id),
                      onFocus: () => !g && D(w.id),
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
          const k = w.id === f;
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
}), uf = mn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const u = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (m = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: h }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
uf.displayName = "Details";
const ff = mn(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const d = ["nhsuk-do-dont-list"];
    o && d.push(o);
    const c = [
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
    ), h = (b) => t === "cross" && !a ? `do not ${b}` : b, m = () => /* @__PURE__ */ r.jsx(
      Mt,
      {
        level: s,
        className: "nhsuk-do-dont-list__label",
        text: e
      }
    );
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: l,
        className: d.join(" "),
        ...i,
        children: [
          m(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((b, C) => /* @__PURE__ */ r.jsxs("li", { children: [
            u(),
            h(b.item)
          ] }, C)) }) })
        ]
      }
    );
  }
);
ff.displayName = "DoDontList";
const hf = mn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const u = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (m = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: h }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
hf.displayName = "Expander";
const pf = mn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, h = `${t}-${c}-status`, m = !!l.href, b = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), C = [
        l.hint && u,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        mf,
        {
          item: l,
          itemClasses: b,
          hasLink: m,
          hintId: u,
          statusId: h,
          ariaDescribedBy: C
        },
        d
      );
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: s,
        className: o,
        ...a,
        children: e.map(i)
      }
    );
  }
), mf = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": o,
        children: c
      }
    ) : /* @__PURE__ */ r.jsx("div", { className: e.title.classes || "", children: c });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ r.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, d = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(Ye, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: s, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
pf.displayName = "TaskList";
const zx = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), d = () => s || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), c = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        $o(
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
        d()
      ]
    }
  );
}, Wx = ({
  src: e,
  alt: t,
  caption: n,
  sizes: a,
  srcset: s,
  className: o,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    o
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
}, gf = ({
  dateRange: e,
  onPrev: t,
  onNext: n,
  onToday: a,
  density: s,
  onDensityChange: o,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx(et, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(et, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(et, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      Vn,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: s,
        onChange: (d) => o?.(d.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      Vn,
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
] }), xf = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Ye, { color: bf(n.status), text: n.label }) }, n.status)) });
function bf(e) {
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
const Ox = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: s,
  selectionMode: o = "single",
  a11yMode: i,
  className: l,
  style: d,
  getSlotAriaLabel: c,
  toolbar: u,
  enableDefaultToolbar: h = !0,
  legendItems: m,
  enableDefaultLegend: b = !0,
  legendPlacement: C = "bottom",
  onA11yModeChange: v
}) => {
  const [f, p] = Me("grid"), A = i || f, [L, D] = Me(a || []), H = n ?? L, M = $e(() => {
    const T = /* @__PURE__ */ new Set();
    return e.forEach((S) => T.add(new Date(S.start).getTime())), Array.from(T).sort((S, y) => S - y);
  }, [e]), F = $e(() => {
    const T = {};
    return e.forEach((S) => {
      const y = new Date(S.start).getTime();
      T[y] || (T[y] = {});
      const I = S.capacity - S.booked - (S.held || 0);
      T[y][S.sessionId] = { slot: S, remaining: I };
    }), T;
  }, [e]), N = me((T) => {
    if (o === "single") {
      const S = [T.id];
      n || D(S), s?.(S, { lastAction: "select" });
    } else {
      const S = H.includes(T.id), y = S ? H.filter((I) => I !== T.id) : [...H, T.id];
      n || D(y), s?.(y, { lastAction: S ? "deselect" : "select" });
    }
  }, [o, H, n, s]), x = $e(() => m || (b ? Array.from(new Set(e.map((S) => S.status))).map((S) => ({
    status: S,
    label: S.charAt(0).toUpperCase() + S.slice(1)
  })) : void 0), [m, b, e]), w = x ? /* @__PURE__ */ r.jsx(
    xf,
    {
      items: x,
      orientation: C === "left" || C === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (T) => {
    i || p(T), v?.(T);
  }, g = u || (h ? /* @__PURE__ */ r.jsx(
    gf,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: A,
      onA11yModeChange: k
    }
  ) : null), j = /* @__PURE__ */ r.jsx("div", { style: d, className: xe(l), children: /* @__PURE__ */ r.jsx(ya, { className: xe("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Yt, { children: /* @__PURE__ */ r.jsx(Cn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    g,
    C === "top" && w,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((T) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => N(T), "aria-pressed": H.includes(T.id), children: [
      kn(new Date(T.start)),
      " – ",
      kn(new Date(T.end)),
      " (",
      T.status,
      ")"
    ] }) }, T.id)) }),
    C === "bottom" && w
  ] }) }) }) }) });
  return A === "list" ? j : /* @__PURE__ */ r.jsx("div", { style: d, className: xe(l), children: /* @__PURE__ */ r.jsx(ya, { className: xe("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Yt, { children: /* @__PURE__ */ r.jsx(Cn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    g,
    C === "top" && w,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": M.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((T) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${T.specialty}`, className: "nhs-slot-matrix__session-header", children: T.specialty }, T.id))
      ] }),
      M.map((T) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": kn(new Date(T)), children: kn(new Date(T)) }),
        t.map((S) => {
          const y = F[T]?.[S.id];
          if (!y)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, S.id);
          const { slot: I, remaining: te } = y, z = H.includes(I.id), B = c ? c(I) : `Slot ${kn(new Date(I.start))} ${I.status}${te === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": I.status,
              className: xe("nhs-slot-matrix__cell", z && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": z || void 0,
              onClick: () => N(I),
              children: te > 0 ? `${te} left` : "Full"
            },
            I.id
          );
        })
      ] }, T))
    ] }),
    C === "bottom" && w
  ] }) }) }) }) });
};
function uo(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function kn(e) {
  return `${uo(e.getHours())}:${uo(e.getMinutes())}`;
}
const yf = ({
  title: e,
  value: t,
  subtitle: n,
  variant: a = "default",
  href: s,
  className: o = "",
  ariaLabel: i,
  ...l
}) => {
  const d = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    o
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Mt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return s ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: s,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: c
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: d,
      "aria-label": i,
      ...l,
      children: c
    }
  );
}, Ux = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(ya, { children: /* @__PURE__ */ r.jsx(Yt, { children: e.map((s, o) => /* @__PURE__ */ r.jsx(
    Cn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ r.jsx(yf, { ...s })
    },
    o
  )) }) }) });
}, vf = st.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: d,
    ariaLabelledby: c,
    ariaDescribedby: u,
    className: h,
    tableClassName: m,
    bordered: b = !1,
    striped: C = !1,
    responsive: v = !1,
    tableType: f = "default"
  }, p) => {
    const A = Fe(null), L = Fe(null), D = Fe(null);
    st.useImperativeHandle(p, () => A.current, []);
    const [H, M] = Me(0), [F, N] = Me(0), [x, w] = Me("headers"), [k, g] = Me("browse"), j = t.length, T = e.length, S = $e(() => !n || n.length === 0 ? e : [...e].sort((R, re) => {
      for (const { key: U, direction: ce } of n) {
        const _e = R[U], ie = re[U];
        if (_e == null && ie == null) continue;
        if (_e == null) return 1;
        if (ie == null) return -1;
        let le = 0;
        if (typeof _e == "number" && typeof ie == "number" ? le = _e - ie : le = String(_e).localeCompare(String(ie)), le !== 0)
          return ce === "asc" ? le : -le;
      }
      return 0;
    }), [e, n]), y = me((R, re) => {
      setTimeout(() => {
        const U = A.current?.querySelector(
          `tbody tr:nth-child(${R + 1}) td:nth-child(${re + 1})`
        );
        U && (U.focus(), typeof U.scrollIntoView == "function" && U.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), I = me((R) => {
      setTimeout(() => {
        const re = A.current?.querySelector(`th:nth-child(${R + 1})`);
        re && (re.focus(), typeof re.scrollIntoView == "function" && re.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = me((R) => {
      a?.(R);
    }, [a]), z = me((R) => {
      o?.(R);
    }, [o]), B = me((R) => {
      const { key: re } = R;
      switch (re) {
        case "Enter":
          if (R.preventDefault(), x === "headers" && k === "browse")
            g("navigate"), I(F);
          else if (x === "headers" && k === "navigate") {
            const U = t[F];
            U && te(U.key);
          } else x === "cells" && k === "browse" ? (g("navigate"), y(H, F)) : x === "cells" && k === "navigate" && z(H);
          break;
        case "Escape":
          R.preventDefault(), (x === "headers" && k === "navigate" || x === "cells" && k === "navigate") && g("browse");
          break;
        case "ArrowLeft":
          if (R.preventDefault(), k === "navigate" || k === "browse" && x === "headers") {
            if (x === "headers") {
              const U = Math.max(0, F - 1);
              N(U), I(U);
            } else if (x === "cells") {
              const U = Math.max(0, F - 1);
              N(U), y(H, U);
            }
          }
          break;
        case "ArrowRight":
          if (R.preventDefault(), k === "navigate" || k === "browse" && x === "headers") {
            if (x === "headers") {
              const U = Math.min(j - 1, F + 1);
              N(U), I(U);
            } else if (x === "cells") {
              const U = Math.min(j - 1, F + 1);
              N(U), y(H, U);
            }
          }
          break;
        case "ArrowUp":
          if (R.preventDefault(), x === "cells") {
            if (k === "browse") {
              const U = Math.max(0, H - 1);
              M(U), y(U, 0), N(0);
            } else if (k === "navigate")
              if (H > 0) {
                const U = H - 1;
                M(U), y(U, F);
              } else
                w("headers"), g("browse"), I(F);
          }
          break;
        case "ArrowDown":
          if (R.preventDefault(), x === "headers" && k === "browse")
            w("cells"), M(0), N(0), y(0, 0);
          else if (x === "cells") {
            const U = T - 1;
            if (k === "browse") {
              const ce = Math.min(U, H + 1);
              M(ce), y(ce, 0), N(0);
            } else if (k === "navigate" && H < U) {
              const ce = H + 1;
              M(ce), y(ce, F);
            }
          }
          break;
        case "Home":
          R.preventDefault(), x === "headers" ? (N(0), I(0)) : x === "cells" && (R.ctrlKey ? (M(0), N(0), y(0, 0)) : (N(0), y(H, 0)));
          break;
        case "End":
          if (R.preventDefault(), x === "headers") {
            const U = j - 1;
            N(U), I(U);
          } else if (x === "cells")
            if (R.ctrlKey) {
              const U = T - 1, ce = j - 1;
              M(U), N(ce), y(U, ce);
            } else {
              const U = j - 1;
              N(U), y(H, U);
            }
          break;
        case " ":
          if (R.preventDefault(), x === "headers" && k === "navigate") {
            const U = t[F];
            U && te(U.key);
          } else x === "cells" && k === "navigate" && z(H);
          break;
      }
    }, [
      x,
      k,
      F,
      H,
      j,
      T,
      t,
      y,
      I,
      te,
      z
    ]);
    Be(() => {
      const R = A.current;
      if (R)
        return R.addEventListener("keydown", B), () => R.removeEventListener("keydown", B);
    }, [B]);
    const G = xe(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": v,
        "nhsuk-table--bordered": b,
        "nhsuk-table--striped": C,
        "nhsuk-table--compact": f === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: A,
        className: G,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: L, role: "row", children: t.map((R, re) => {
            const U = n?.find((ie) => ie.key === R.key), ce = !!U, _e = x === "headers" && F === re;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: xe("sortable-header", {
                  "sortable-header--focused": _e
                }),
                role: "columnheader",
                tabIndex: _e ? 0 : -1,
                onClick: () => te(R.key),
                onKeyDown: (ie) => {
                  (ie.key === "Enter" || ie.key === " ") && (ie.preventDefault(), te(R.key));
                },
                "aria-sort": ce ? U?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: R.label }),
                  ce && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ie) => ie.key === R.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: U?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              R.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: D, className: "nhsuk-table__body", role: "rowgroup", children: S.map((R, re) => {
            const U = s === re, ce = x === "cells" && H === re;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: xe("data-row", {
                  "data-row--selected": U,
                  "data-row--focused": ce
                }),
                "aria-selected": U,
                children: t.map((_e, ie) => {
                  const le = _e.tableRenderer ? _e.tableRenderer(R) : _e.render ? _e.render(R) : R[_e.key], ee = x === "cells" && H === re && F === ie, _ = () => typeof le == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: le ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: le ? "Yes" : "No" })
                  ] }) : String(le ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: xe("data-cell", {
                        "data-cell--focused": ee
                      }),
                      tabIndex: ee ? 0 : -1,
                      onClick: () => z(re),
                      children: _()
                    },
                    _e.key
                  );
                })
              },
              re
            );
          }) })
        ]
      }
    );
  }
);
vf.displayName = "AriaDataGrid";
const di = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: d = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const h = Fe(null), m = Fe(null), b = Fe(null), C = me((x, w) => {
    d || (m.current = w, x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("text/plain", w));
  }, [d]), v = me((x, w) => {
    d || m.current === w || (x.preventDefault(), x.dataTransfer.dropEffect = "move", b.current = w);
  }, [d]), f = me((x, w) => {
    if (d) return;
    x.preventDefault();
    const k = m.current;
    if (!k || k === w) return;
    const g = e.findIndex((T) => T.key === k), j = e.findIndex((T) => T.key === w);
    if (g !== -1 && j !== -1) {
      const T = [...e], [S] = T.splice(g, 1);
      T.splice(j, 0, S), n(T);
    }
    m.current = null, b.current = null;
  }, [d, e, n]), p = me(() => {
    m.current = null, b.current = null;
  }, []), A = me((x) => {
    const w = t.find((k) => k.key === x);
    return w ? w.label : x;
  }, [t]), L = me((x) => ["red", "orange", "blue", "aqua-green", "grey"][x] || "grey", []), D = me((x) => {
    if (d) return;
    const w = e.map(
      (k) => k.key === x ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    n(w);
  }, [e, n, d]), H = me((x) => {
    if (d) return;
    const w = e.filter((k) => k.key !== x);
    n(w);
  }, [e, n, d]), M = me(() => {
    d || n([]);
  }, [n, d]), F = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const x = e.map((w, k) => {
      const g = w.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${A(w.key)} (${g})`;
    });
    if (x.length === 1)
      return `Sorted by: ${x[0]}`;
    if (x.length === 2)
      return `Sorted by: ${x.join(" and ")}`;
    {
      const w = x.pop();
      return `Sorted by: ${x.join(", ")}, and ${w}`;
    }
  }, N = $e(() => {
    const x = ["sort-description"];
    return l && x.push("sort-help"), u && x.push(u), x.join(" ");
  }, [l, u]);
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
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: F()
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: h,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": N,
          children: e.map((x, w) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (k) => C(k, x.key),
              onDragOver: (k) => v(k, x.key),
              onDrop: (k) => f(k, x.key),
              onDragEnd: p,
              onClick: () => D(x.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${x.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": x.key,
              children: /* @__PURE__ */ r.jsx(
                Ye,
                {
                  color: L(w),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => H(x.key),
                  disabled: d,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${w + 1}`, children: w + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: A(x.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), D(x.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${A(x.key)}. Currently ${x.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${x.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${x.direction}`,
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
            x.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        et,
        {
          variant: "secondary",
          onClick: M,
          disabled: d,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function _f(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), d = new Array(o).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, o); c++)
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
const Ca = mn(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: s,
    selectedIndex: o,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: d,
    ariaDescription: c,
    className: u = "",
    disabled: h = !1,
    orientation: m = "horizontal",
    id: b,
    isLoading: C = !1,
    loadingComponent: v,
    error: f = null,
    errorComponent: p,
    "data-testid": A,
    actions: L,
    actionsMinGap: D = 16,
    forceActionsAbove: H = !1
  } = t, F = Fe(
    b || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, N = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), x = `${F}-description`, w = `${F}-navigation-help`, {
    dataComparator: k = (P, W) => JSON.stringify(P) === JSON.stringify(W),
    filterFunction: g = (P) => P,
    booleanRenderer: j = (P) => P ? "✓" : "✗"
  } = a || {}, T = o !== void 0, S = o ?? 0, [y, I] = Me({
    focusArea: "tabs",
    focusedTabIndex: S,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), te = $e(() => ({
    selectedIndex: S,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [S]), [z, B] = Io(_f, te);
  Be(() => {
    const P = z.tabLoadingStates.length, W = s.length;
    P !== W && B({ type: "ADJUST_ARRAYS", payload: { newLength: W } });
  }, [s.length]), Be(() => {
    T && B({ type: "SET_SELECTED_INDEX", payload: S });
  }, [S, T]), Be(() => {
    I((P) => ({
      ...P,
      focusArea: "tabs",
      focusedTabIndex: z.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [z.selectedIndex]), Be(() => {
    l && l(z.globalSelectedRowData);
  }, [z.globalSelectedRowData, l]);
  const G = me(
    (P, W) => k(P, W),
    [k]
  ), R = me(
    (P) => {
      P >= 0 && P < s.length && !s[P].disabled && (B({ type: "SET_SELECTED_INDEX", payload: P }), I((W) => ({
        ...W,
        focusedTabIndex: P,
        focusArea: "tabs"
      })), i?.(P));
    },
    [s, i]
  ), re = Fe(!1), U = me(
    (P, W) => {
      if (!W?.force && !re.current && P === 0) {
        re.current = !0;
        return;
      }
      re.current = !0, setTimeout(() => {
        const J = ce.current[P], ne = J?.parentElement;
        if (J && ne) {
          const X = J.offsetLeft, Z = J.offsetWidth, ye = ne.clientWidth, Se = X - ye / 2 + Z / 2;
          try {
            ne.scrollTo({
              left: Math.max(0, Se),
              behavior: "smooth"
            });
          } catch {
            J.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!J,
          tabListElementExists: !!ne
        });
      }, 50);
    },
    []
  ), ce = Fe([]), _e = Fe([]), ie = me(
    (P, W) => {
      const J = z.sortConfig || [], ne = J.find(
        (ye) => ye.key === W
      );
      let X;
      ne ? ne.direction === "asc" ? X = J.map(
        (ye) => ye.key === W ? { ...ye, direction: "desc" } : ye
      ) : X = J.filter(
        (ye) => ye.key !== W
      ) : X = [...J, { key: W, direction: "asc" }], B({
        type: "SET_SORT",
        payload: X
      }), s[P].onSort?.(W);
    },
    [z.sortConfig, s]
  ), le = me(
    (P) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${z.selectedIndex}"] th:nth-child(${P + 1})`
        );
        W && W.focus();
      }, 0);
    },
    [z.selectedIndex]
  ), ee = me(
    (P) => j(P),
    [j]
  ), _ = me(
    (P, W) => {
      setTimeout(() => {
        const J = document.querySelector(
          `[data-tab-panel="${z.selectedIndex}"] tbody tr:nth-child(${P + 1}) td:nth-child(${W + 1})`
        );
        J && J.focus();
      }, 0);
    },
    [z.selectedIndex]
  );
  Be(() => {
    y.isGridActive && (y.focusArea === "headers" ? setTimeout(() => {
      le(y.focusedHeaderIndex);
    }, 0) : y.focusArea === "cells" && setTimeout(() => {
      _(
        y.focusedRowIndex,
        y.focusedColumnIndex
      );
    }, 0));
  }, [
    y.focusArea,
    y.isGridActive,
    y.focusedHeaderIndex,
    y.focusedRowIndex,
    y.focusedColumnIndex,
    le,
    _
  ]), Be(() => {
    U(z.selectedIndex);
  }, [z.selectedIndex, U]);
  const E = me(
    (P, W) => {
      const { key: J } = P, ne = s[z.selectedIndex], X = ne?.columns.length || 0;
      switch (J) {
        case "ArrowLeft":
          P.preventDefault();
          const Z = Math.max(0, W - 1);
          I((Ne) => ({
            ...Ne,
            focusedHeaderIndex: Z
          })), le(Z);
          break;
        case "ArrowRight":
          P.preventDefault();
          const ye = Math.min(X - 1, W + 1);
          I((Ne) => ({
            ...Ne,
            focusedHeaderIndex: ye
          })), le(ye);
          break;
        case "ArrowUp":
          P.preventDefault(), I((Ne) => ({
            ...Ne,
            focusArea: "tabs",
            focusedTabIndex: z.selectedIndex
          })), U(z.selectedIndex), ce.current[z.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          P.preventDefault(), I((Ne) => ({
            ...Ne,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: W,
            isGridActive: !0
          }));
          break;
        case "Home":
          P.preventDefault(), I((Ne) => ({ ...Ne, focusedHeaderIndex: 0 })), le(0);
          break;
        case "End":
          P.preventDefault();
          const Se = X - 1;
          I((Ne) => ({
            ...Ne,
            focusedHeaderIndex: Se
          })), le(Se);
          break;
        case "Enter":
        case " ":
          P.preventDefault();
          const ke = ne?.columns[W]?.key;
          ke && ie(z.selectedIndex, ke);
          break;
      }
    },
    [
      s,
      z.selectedIndex,
      ie,
      I,
      le,
      _,
      ce
    ]
  ), $ = me(
    (P, W, J) => {
      const { key: ne } = P, X = s[z.selectedIndex], Z = X?.data.length || 0, ye = X?.columns.length || 0;
      switch (ne) {
        case "ArrowUp":
          if (P.preventDefault(), W === 0)
            I((fe) => ({
              ...fe,
              focusArea: "headers",
              focusedHeaderIndex: J,
              isGridActive: !1
            })), le(J);
          else {
            const fe = W - 1;
            I((Te) => ({
              ...Te,
              focusedRowIndex: fe
            })), _(fe, J);
          }
          break;
        case "ArrowDown":
          P.preventDefault();
          const Se = Math.min(Z - 1, W + 1);
          I((fe) => ({
            ...fe,
            focusedRowIndex: Se
          })), _(Se, J);
          break;
        case "ArrowLeft":
          P.preventDefault();
          const ke = Math.max(0, J - 1);
          I((fe) => ({
            ...fe,
            focusedColumnIndex: ke
          })), _(W, ke);
          break;
        case "ArrowRight":
          P.preventDefault();
          const Ne = Math.min(ye - 1, J + 1);
          I((fe) => ({
            ...fe,
            focusedColumnIndex: Ne
          })), _(W, Ne);
          break;
        case "Home":
          P.preventDefault(), P.ctrlKey ? (I((fe) => ({
            ...fe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), _(0, 0)) : (I((fe) => ({ ...fe, focusedColumnIndex: 0 })), _(W, 0));
          break;
        case "End":
          if (P.preventDefault(), P.ctrlKey) {
            const fe = Z - 1, Te = ye - 1;
            I((Ee) => ({
              ...Ee,
              focusedRowIndex: fe,
              focusedColumnIndex: Te
            })), _(fe, Te);
          } else {
            const fe = ye - 1;
            I((Te) => ({
              ...Te,
              focusedColumnIndex: fe
            })), _(W, fe);
          }
          break;
        case "Enter":
        case " ":
          if (P.preventDefault(), X && X.data[W]) {
            const fe = X.data.some(
              (Pe) => "ews_data" in Pe
            ) ? g(X.data, z.filters) : X.data, Te = z.sortConfig;
            let Ee = fe;
            if (Te && Te.length > 0 && (Ee = [...fe].sort((Pe, Le) => {
              for (const { key: tt, direction: Ft } of Te) {
                let xt = Pe[tt], ut = Le[tt];
                const qe = X.columns.find(
                  (gn) => gn.key === tt
                );
                if (qe?.tableRenderer ? (xt = qe.tableRenderer(Pe), ut = qe.tableRenderer(Le)) : qe?.render && (xt = qe.render(Pe), ut = qe.render(Le)), xt == null && ut == null) continue;
                if (xt == null) return Ft === "asc" ? -1 : 1;
                if (ut == null) return Ft === "asc" ? 1 : -1;
                let Ke = 0;
                if (typeof xt == "number" && typeof ut == "number" ? Ke = xt - ut : Ke = String(xt).localeCompare(
                  String(ut),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Ke !== 0)
                  return Ft === "asc" ? Ke : -Ke;
              }
              return 0;
            })), Ee[W]) {
              const Pe = Ee[W], tt = z.globalSelectedRowData && G(z.globalSelectedRowData, Pe) ? null : Pe;
              B({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: tt
              });
            }
          }
          break;
      }
    },
    [
      s,
      z.selectedIndex,
      z.filters,
      z.sortConfig,
      g,
      G,
      B,
      I,
      le,
      _
    ]
  ), Q = me(
    (P, W) => g(P, W),
    [g]
  );
  if (Mo(
    n,
    () => ({
      selectTab: (P) => {
        P >= 0 && P < s.length && (B({ type: "SET_SELECTED_INDEX", payload: P }), i?.(P));
      },
      refreshData: (P) => {
        console.log("Refreshing data for tab:", P ?? "all");
      },
      exportData: (P) => {
        const W = P ?? z.selectedIndex, J = s[W];
        return J ? J.data : [];
      },
      getSelectedRows: (P) => z.globalSelectedRowData ? [] : [],
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
    [z.selectedIndex, z.selectedRows, s, i]
  ), C)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": A,
        children: v || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
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
  if (f)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": A,
        children: p || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: f })
        ] })
      }
    );
  const O = Fe(null), Y = Fe(null), ae = Fe(null), [he, pe] = Me(!0);
  Be(() => {
    if (!L) {
      pe(!1);
      return;
    }
    if (H) {
      pe(!1);
      return;
    }
    function P() {
      if (!O.current || !Y.current || !ae.current) return;
      const ne = O.current.clientWidth, X = Array.from(
        Y.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), Z = X.reduce((Ne, fe) => Ne + fe.offsetWidth, 0), ye = ae.current.offsetWidth, Se = Math.max(8 * (X.length - 1), 0), ke = Z + Se + ye + D <= ne;
      pe(ke);
    }
    const W = requestAnimationFrame(() => P()), J = new ResizeObserver(() => P());
    return O.current && J.observe(O.current), Y.current && J.observe(Y.current), () => {
      cancelAnimationFrame(W), J.disconnect();
    };
  }, [L, D, H, s.length]);
  const ve = ae, de = me(() => ve.current ? Array.from(
    ve.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((P) => !P.hasAttribute("disabled")) : [], []), q = me(
    (P) => {
      const W = de();
      if (!W.length) return;
      const J = Math.max(0, Math.min(P, W.length - 1));
      W[J].focus(), I((ne) => ({ ...ne, focusArea: "actions", focusedActionIndex: J }));
    },
    [de]
  ), V = me(() => q(0), [q]), oe = me(
    (P, W) => {
      const { key: J } = P, ne = s.length - 1;
      switch (J) {
        case "ArrowUp": {
          L && !he && (P.preventDefault(), V());
          break;
        }
        case "ArrowLeft": {
          P.preventDefault();
          const X = W > 0 ? W - 1 : ne;
          R(X), U(X), ce.current[X]?.focus();
          break;
        }
        case "ArrowRight": {
          if (P.preventDefault(), W === ne && L && he) {
            V();
            return;
          }
          const X = W < ne ? W + 1 : 0;
          R(X), U(X), ce.current[X]?.focus();
          break;
        }
        case "ArrowDown": {
          P.preventDefault(), I((X) => ({
            ...X,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          P.preventDefault(), R(0), U(0), ce.current[0]?.focus();
          break;
        }
        case "End": {
          P.preventDefault(), R(ne), U(ne), ce.current[ne]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          P.preventDefault(), R(W);
          break;
        }
        case "Tab": {
          !P.shiftKey && W === ne && L && he && V();
          break;
        }
      }
    },
    [s.length, R, U, L, he, V]
  ), se = me((P) => {
    const { key: W } = P, J = de();
    if (!J.length) return;
    const ne = J.findIndex((X) => X === document.activeElement);
    switch (W) {
      case "ArrowLeft": {
        if (he)
          if (ne > 0)
            P.preventDefault(), q(ne - 1);
          else {
            P.preventDefault();
            const X = s.length - 1;
            R(X), U(X), ce.current[X]?.focus(), I((Z) => ({ ...Z, focusArea: "tabs", focusedTabIndex: X }));
          }
        break;
      }
      case "ArrowRight": {
        he && (ne < J.length - 1 ? (P.preventDefault(), q(ne + 1)) : (P.preventDefault(), R(0), U(0), ce.current[0]?.focus(), I((X) => ({ ...X, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (he)
          P.preventDefault(), I((X) => ({ ...X, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          P.preventDefault();
          const X = z.selectedIndex;
          ce.current[X]?.focus(), I((Z) => ({ ...Z, focusArea: "tabs", focusedTabIndex: X }));
        }
        break;
      }
    }
  }, [de, he, q, s.length, R, U, z.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${u}`,
      id: b,
      "data-testid": A,
      ref: O,
      children: [
        c && !N && /* @__PURE__ */ r.jsx("div", { id: x, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: w,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          di,
          {
            sortConfig: z.sortConfig || [],
            columns: s.flatMap(
              (P) => P.columns.map((W) => ({ key: W.key, label: W.label }))
            ).filter(
              (P, W, J) => J.findIndex((ne) => ne.key === P.key) === W
              // Remove duplicates
            ),
            onSortChange: (P) => {
              B({ type: "SET_SORT", payload: P });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        L && !he && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: ae,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: se,
            children: L
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${he ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? N ? c : x : w,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: Y,
              children: s.map((P, W) => {
                const J = W === z.selectedIndex, ne = P.disabled || h;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${P.id}`,
                    "aria-controls": `panel-${P.id}`,
                    "aria-selected": J,
                    "aria-disabled": ne,
                    tabIndex: J ? 0 : -1,
                    ref: (X) => {
                      ce.current[W] = X;
                    },
                    onClick: () => R(W),
                    onKeyDown: (X) => oe(X, W),
                    disabled: ne,
                    className: [
                      "aria-tabs-datagrid__tab",
                      J ? "aria-tabs-datagrid__tab--selected" : "",
                      ne ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: P.label }),
                      z.tabLoadingStates[W] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      z.tabErrors[W] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  P.id
                );
              })
            }
          ),
          L && he && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: ae,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: se,
              children: L
            }
          )
        ] }),
        s.map((P, W) => {
          const J = W === z.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${P.id}`,
              "aria-labelledby": `tab-${P.id}`,
              tabIndex: 0,
              hidden: !J,
              ref: (ne) => {
                _e.current[W] = ne;
              },
              className: `aria-tabs-datagrid__panel ${P.className || ""}`,
              "data-tab-panel": W,
              children: J && (() => {
                const ne = P.data.some(
                  (Z) => "ews_data" in Z
                ) ? Q(P.data, z.filters) : P.data, X = $e(() => {
                  const Z = z.sortConfig;
                  return !Z || Z.length === 0 ? ne : [...ne].sort((ye, Se) => {
                    for (const { key: ke, direction: Ne } of Z) {
                      let fe = ye[ke], Te = Se[ke];
                      const Ee = P.columns.find(
                        (Le) => Le.key === ke
                      );
                      if (Ee?.tableRenderer ? (fe = Ee.tableRenderer(ye), Te = Ee.tableRenderer(Se)) : Ee?.render && (fe = Ee.render(ye), Te = Ee.render(Se)), fe == null && Te == null) continue;
                      if (fe == null) return 1;
                      if (Te == null) return -1;
                      let Pe = 0;
                      if (typeof fe == "number" && typeof Te == "number" ? Pe = fe - Te : typeof fe == "boolean" && typeof Te == "boolean" ? Pe = fe === Te ? 0 : fe ? 1 : -1 : Pe = String(fe).localeCompare(
                        String(Te),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Pe !== 0)
                        return Ne === "asc" ? Pe : -Pe;
                    }
                    return 0;
                  });
                }, [ne, z.sortConfig, P.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": P.ariaLabel,
                    "aria-describedby": P.ariaDescription ? `panel-${P.id}-description` : void 0,
                    children: [
                      P.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${P.id}-description`,
                          children: P.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: P.columns.map((Z, ye) => {
                        const Se = z.sortConfig?.find(
                          (fe) => fe.key === Z.key
                        ), ke = !!Se, Ne = y.focusArea === "headers" && y.focusedHeaderIndex === ye;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ne ? "sortable-header--focused" : ""} ${ke ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ne ? 0 : -1,
                            onClick: () => ie(W, Z.key),
                            onKeyDown: (fe) => E(fe, ye),
                            "aria-sort": ke ? Se?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: Z.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ke ? `sort-indicator--${Se?.direction}` : ""}`,
                                  children: [
                                    z.sortConfig && z.sortConfig.length > 0 && z.sortConfig.findIndex(
                                      (fe) => fe.key === Z.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${z.sortConfig.findIndex((fe) => fe.key === Z.key) + 1}`,
                                        "data-priority": z.sortConfig.findIndex(
                                          (fe) => fe.key === Z.key
                                        ) + 1,
                                        title: `Sort priority: ${z.sortConfig.findIndex((fe) => fe.key === Z.key) + 1}`,
                                        children: z.sortConfig.findIndex(
                                          (fe) => fe.key === Z.key
                                        ) + 1
                                      }
                                    ),
                                    ke && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${Se?.direction}`,
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
                          Z.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: X.map((Z, ye) => {
                        const Se = z.globalSelectedRowData && G(z.globalSelectedRowData, Z), ke = y.focusArea === "cells" && y.focusedRowIndex === ye;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${Se ? "data-row--selected" : ""} ${ke ? "data-row--focused" : ""}`,
                            "aria-selected": Se,
                            children: P.columns.map((Ne, fe) => {
                              const Te = Z[Ne.key];
                              let Ee;
                              Ne.tableRenderer ? Ee = Ne.tableRenderer(Z) : Ne.render ? Ee = Ne.render(Z) : Ee = Te;
                              const Pe = y.focusArea === "cells" && y.focusedRowIndex === ye && y.focusedColumnIndex === fe, Le = () => {
                                if (Ne.customRenderer) {
                                  const tt = Ne.customRenderer(
                                    Te,
                                    Z
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
                                return typeof Te == "boolean" && Ee === Te ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  ee(Te),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Te ? "Yes" : "No" })
                                ] }) : st.isValidElement(Ee) || typeof Ee != "object" ? Ee ?? "" : Ee;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Pe ? "data-cell--focused" : ""}`,
                                  tabIndex: Pe ? 0 : -1,
                                  onClick: () => {
                                    const Ft = z.globalSelectedRowData && G(
                                      z.globalSelectedRowData,
                                      Z
                                    ) ? null : Z;
                                    B({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Ft
                                    });
                                  },
                                  onKeyDown: (tt) => $(tt, ye, fe),
                                  children: Le()
                                },
                                Ne.key
                              );
                            })
                          },
                          ye
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
}), On = {
  asc: "↑",
  desc: "↓"
}, wf = (e) => [...e].sort((t, n) => t.priority - n.priority);
function la(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Sf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function kf(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Cf(e, t) {
  const n = t.find((s) => s.id === e), a = Sf(t);
  return n ? n.priority < a : !1;
}
const Gx = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const u = $e(() => wf(e), [e]), h = me((A) => {
    if (l) return;
    const L = e.map(
      (D) => D.id === A ? { ...D, direction: D.direction === "asc" ? "desc" : "asc" } : D
    );
    t(L);
  }, [e, t, l]), m = me((A) => {
    if (l) return;
    const L = e.findIndex((H) => H.id === A);
    if (L <= 0) return;
    const D = [...e];
    [D[L], D[L - 1]] = [D[L - 1], D[L]], t(la(D));
  }, [e, t, l]), b = me((A) => {
    if (l) return;
    const L = e.findIndex((H) => H.id === A);
    if (L >= e.length - 1 || L === -1) return;
    const D = [...e];
    [D[L], D[L + 1]] = [D[L + 1], D[L]], t(la(D));
  }, [e, t, l]), C = me((A) => {
    if (l) return;
    const L = e.filter((D) => D.id !== A);
    t(la(L));
  }, [e, t, l]), v = me(() => {
    l || t([]);
  }, [t, l]), f = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const A = u.map((L, D) => {
      const H = L.direction === "asc" ? "ascending" : "descending";
      return `${D + 1}. ${L.label} (${H})`;
    });
    if (A.length === 1)
      return `Sorted by: ${A[0]}`;
    if (A.length === 2)
      return `Sorted by: ${A.join(" and ")}`;
    {
      const L = A.pop();
      return `Sorted by: ${A.join(", ")}, and ${L}`;
    }
  }, p = $e(() => {
    const A = ["sort-description"];
    return i && A.push("sort-help"), c && A.push(c), A.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: f()
    }
  ) }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: f()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": p,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((A) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                Ye,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => C(A.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: A.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: A.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => h(A.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${A.label}. Currently ${A.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: A.direction === "asc" ? On.asc : On.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(A.id),
                          disabled: l || !kf(A.id, e),
                          "aria-label": `Move ${A.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => b(A.id),
                          disabled: l || !Cf(A.id, e),
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
    o && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "secondary",
        onClick: v,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsxs("small", { children: [
      "Click ",
      On.asc,
      "/",
      On.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, gs = (e, t) => t.map((n) => ({
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
})), ja = [
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
], jf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Nf = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Tf = (e) => {
  if (typeof e == "boolean") {
    const n = ja.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ja.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Df = (e) => `${e.name}-${e.bed_name}`, $f = () => ({
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
}), Vx = (e) => {
  const t = $f();
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
}, Mf = {
  dataComparator: jf,
  filterFunction: Nf,
  booleanRenderer: Tf,
  getDataId: Df
};
function fo(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = n, h = t.find((L) => L.key === a), m = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", b = () => s.filter((D) => !i.includes(D) && e[D]).slice(0, 3).map((D) => {
    const H = t.find((x) => x.key === D), M = e[D], F = c[D] ? c[D](M, e) : H?.cardRenderer ? H.cardRenderer(e) : H?.render ? H.render(e) : M;
    return `${H?.label || D}: ${F}`;
  }).join(" • "), C = () => o.length === 0 ? null : o.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const D = e[L.fieldKey], H = L.render ? L.render(D, e) : D;
    return `<span class="nhsuk-tag ${If(L, D)}">${H}</span>`;
  }).join(""), v = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", f = C(), p = b(), A = f ? `${p}${f ? `<div class="adaptive-card__badges">${f}</div>` : ""}` : p;
  return {
    variant: v(),
    heading: String(m),
    descriptionHtml: A,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${m}`
  };
}
function If(e, t) {
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
const Lf = {
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
}, ui = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, h = e.speciality, m = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${d}, Bed ${c}`,
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
            Ye,
            {
              color: Pf(mi(u)),
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
            /* @__PURE__ */ r.jsx("dd", { children: d })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ r.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ r.jsx("dd", { children: h })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ r.jsx("dd", { children: m })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (b) => {
                b.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (b) => {
                b.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (b) => {
                b.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, fi = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Ye,
        {
          color: Ef(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
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
      et,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), hi = ({
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
        Ye,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
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
      et,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), pi = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, h = e.ews_data?.avpu;
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
            o !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Ff(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: h && /* @__PURE__ */ r.jsxs(
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
          d !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
              "°C"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-value", children: c })
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
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), n?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), n?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function mi(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Ff(e) {
  return mi(e);
}
function Pf(e) {
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
function Ef(e) {
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
const Af = [
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
], gi = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Rf = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Bf = (e) => gi(e) === "high" || e.status === "urgent" ? "primary" : "default", Hf = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, zf = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Af,
  hiddenFields: [],
  getPriority: gi,
  getStatus: Rf,
  getVariant: Bf,
  fieldRenderers: Hf,
  classPrefix: "adaptive-card--healthcare"
}, Wf = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", s = n.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ r.jsx(
      ui,
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
  appointment: (e, t, n) => {
    const a = n.getStatus?.(e) || "pending", s = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ r.jsx(
      fi,
      {
        data: e,
        columns: t,
        status: s,
        onSelect: (o) => console.log("Appointment selected:", o),
        onAction: (o, i) => console.log("Appointment action:", o, i)
      }
    );
  },
  medication: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      hi,
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
      pi,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, Of = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ho = {
  name: "healthcare",
  defaultCardConfig: zf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Wf,
  fieldTypes: Of
};
function po(e) {
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
function mo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Uf(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), d = new Array(o).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, o); c++)
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
function Gf(e, t) {
  const [n, a] = Me("cards");
  return Be(() => {
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
function Vf(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Yf(e, t, n, a) {
  const s = a ? { ...a.defaultCardConfig, ...n } : { ...Lf, ...n };
  if (a && a.cardTemplates) {
    const o = Vf(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), fo(e, t, s);
}
const Yx = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: s = !1,
  topActions: o,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: d,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: u,
  selectedIndex: h,
  onTabChange: m,
  ariaLabel: b = "Data grid",
  ariaDescription: C,
  orientation: v = "horizontal",
  id: f,
  disabled: p = !1,
  className: A,
  ...L
}) => {
  const D = Gf(e, t), H = h !== void 0, M = h ?? 0, F = $e(() => {
    if (c.some(
      (V) => V.data && V.data.length > 0 && mo(V.data)
    )) {
      const V = po(n);
      return {
        ...ho.defaultCardConfig,
        ...V
      };
    } else
      return po(n);
  }, [n, c]), N = $e(() => c.some(
    (V) => V.data && V.data.length > 0 && mo(V.data)
  ) ? ho : void 0, [c]), x = $e(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, c.length]), [w, k] = Io(Uf, x), g = Fe([]), j = Fe([]), T = Fe([]), S = Fe(null), [y, I] = Me({
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
  }), te = me((q) => {
    if (!q.current)
      return { columns: 1, rows: 0 };
    const V = q.current, oe = V.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (oe.length === 0)
      return { columns: 1, rows: 0 };
    const se = V.offsetWidth, W = oe[0].offsetWidth, J = Math.floor(se / W) || 1, ne = Math.ceil(oe.length / J);
    return { columns: J, rows: ne };
  }, []), z = me((q, V) => ({
    row: Math.floor(q / V),
    col: q % V
  }), []), B = me((q, V, oe) => q * oe + V, []), G = me((q, V, oe, se) => {
    const { row: P, col: W } = z(q, se);
    let J = P, ne = W;
    switch (V) {
      case "up":
        J = Math.max(0, P - 1);
        break;
      case "down":
        J = Math.min(Math.floor((oe - 1) / se), P + 1);
        break;
      case "left":
        ne = Math.max(0, W - 1);
        break;
      case "right":
        ne = Math.min(se - 1, W + 1);
        break;
    }
    const X = B(J, ne, se);
    return Math.min(X, oe - 1);
  }, [z, B]);
  Be(() => {
    y.isCardNavigationActive && y.focusedCardElementIndex >= 0 && y.cardElements.length > 0 && setTimeout(() => {
      const q = y.cardElements[y.focusedCardElementIndex];
      q && (q.element.focus(), q.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [y.isCardNavigationActive, y.focusedCardElementIndex, y.cardElements.length]), Be(() => {
    const q = () => {
      if (D === "cards" && S.current) {
        const { columns: se, rows: P } = te(S);
        I((W) => ({
          ...W,
          gridColumns: se,
          gridRows: P
        }));
      }
    }, V = setTimeout(q, 200), oe = () => {
      setTimeout(q, 100);
    };
    return window.addEventListener("resize", oe), () => {
      clearTimeout(V), window.removeEventListener("resize", oe);
    };
  }, [D, c, te]), Be(() => {
    const q = w.tabLoadingStates.length, V = c.length;
    q !== V && k({ type: "ADJUST_ARRAYS", payload: { newLength: V } });
  }, [c.length, w.tabLoadingStates.length]), Be(() => {
    H && h !== w.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: h });
  }, [H, h, w.selectedIndex]);
  const R = me((q) => {
    q >= 0 && q < c.length && !c[q].disabled && (k({ type: "SET_SELECTED_INDEX", payload: q }), m?.(q));
  }, [c, m]), re = me((q) => {
    console.log("Card selected:", q), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: q
    });
  }, []), U = me((q) => {
    const V = j.current[q];
    V && (V.focus(), V.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ce = me((q) => {
    const V = j.current[q];
    if (!V) return [];
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
    ].join(", "), se = V.querySelectorAll(oe);
    return Array.from(se).map((P, W) => ({
      id: P.id || `card-${q}-element-${W}`,
      element: P,
      label: P.getAttribute("aria-label") || P.textContent?.trim() || P.getAttribute("title") || `Element ${W + 1}`,
      type: P.tagName.toLowerCase() === "button" ? "button" : P.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(P.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), _e = Fe(null), ie = me((q) => {
    const V = _e.current;
    if (!V) return;
    const oe = document.createElement("div");
    oe.setAttribute("aria-live", "polite"), oe.setAttribute("aria-atomic", "true"), oe.className = "sr-only", oe.textContent = q, V.appendChild(oe), setTimeout(() => {
      V.contains(oe) && V.removeChild(oe);
    }, 1e3);
  }, []), le = me((q) => {
    const V = q.filter((se) => se.sortable !== !1), oe = [
      { value: "", label: "Sort by..." }
    ];
    return V.forEach((se) => {
      const P = se.label || se.key;
      se.key === "name" ? oe.push(
        { value: `${se.key}-asc`, label: `${P} (A-Z)` },
        { value: `${se.key}-desc`, label: `${P} (Z-A)` }
      ) : se.key === "ews_score" || se.key.includes("score") ? oe.push(
        { value: `${se.key}-desc`, label: `${P} (High-Low)` },
        { value: `${se.key}-asc`, label: `${P} (Low-High)` }
      ) : se.key === "age" || se.key.includes("date") || se.key.includes("time") ? oe.push(
        { value: `${se.key}-desc`, label: `${P} (Oldest-Youngest)` },
        { value: `${se.key}-asc`, label: `${P} (Youngest-Oldest)` }
      ) : oe.push(
        { value: `${se.key}-asc`, label: `${P} (A-Z)` },
        { value: `${se.key}-desc`, label: `${P} (Z-A)` }
      );
    }), oe;
  }, []), ee = me((q, V) => V ? [...q].sort((oe, se) => {
    const P = oe[V.key], W = se[V.key];
    if (P == null && W == null) return 0;
    if (P == null) return 1;
    if (W == null) return -1;
    const J = Number(P), ne = Number(W);
    if (!isNaN(J) && !isNaN(ne))
      return V.direction === "asc" ? J - ne : ne - J;
    const X = String(P).toLowerCase(), Z = String(W).toLowerCase(), ye = X.localeCompare(Z);
    return V.direction === "asc" ? ye : -ye;
  }) : q, []), _ = me((q) => {
    if (!q) {
      I((X) => ({ ...X, cardSortConfig: null })), ie("Card sorting cleared");
      return;
    }
    const [V, oe] = q.split("-"), se = { key: V, direction: oe };
    I((X) => ({ ...X, cardSortConfig: se }));
    const J = c[w.selectedIndex]?.columns.find((X) => X.key === V)?.label || V;
    ie(`Cards sorted by ${J} in ${oe === "asc" ? "ascending" : "descending"} order`);
  }, [c, w.selectedIndex, ie]), E = me((q) => {
    const se = c[w.selectedIndex]?.columns.find((W) => W.key === q.key)?.label || q.key, P = q.direction === "asc" ? "ascending" : "descending";
    return `${se} (${P})`;
  }, [c, w.selectedIndex]), $ = me((q) => {
    const V = c[w.selectedIndex];
    if (s) {
      const oe = w.sortConfig;
      return !oe || oe.length === 0 ? q : [...q].sort((se, P) => {
        for (const { key: W, direction: J } of oe) {
          let ne = se[W], X = P[W];
          const Z = V?.columns.find((Te) => Te.key === W);
          if (Z?.cardRenderer ? (ne = Z.cardRenderer(se), X = Z.cardRenderer(P)) : Z?.render && (ne = Z.render(se), X = Z.render(P)), ne == null && X == null) continue;
          if (ne == null) return J === "asc" ? -1 : 1;
          if (X == null) return J === "asc" ? 1 : -1;
          const ye = Number(ne), Se = Number(X);
          if (!isNaN(ye) && !isNaN(Se)) {
            const Te = ye - Se;
            if (Te !== 0) return J === "asc" ? Te : -Te;
            continue;
          }
          const ke = String(ne).toLowerCase(), Ne = String(X).toLowerCase(), fe = ke.localeCompare(Ne);
          if (fe !== 0) return J === "asc" ? fe : -fe;
        }
        return 0;
      });
    } else
      return ee(q, y.cardSortConfig);
  }, [s, w.sortConfig, y.cardSortConfig, ee, c, w.selectedIndex]), Q = me((q, V) => {
    const oe = ce(q), se = oe[V];
    if (se) {
      se.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const P = `Focused on ${se.label}, ${se.type} ${V + 1} of ${oe.length} within card`;
      ie(P);
    }
  }, [ce, ie]), O = me((q) => {
    g.current[q]?.focus();
  }, []), Y = me(() => {
    const q = T.current[0];
    if (!q) return [];
    const V = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), oe = q.querySelectorAll(V);
    return Array.from(oe);
  }, []), ae = me((q) => {
    if (q === 0) {
      const V = T.current[0], oe = V?.querySelector(".sort-controls-row");
      if (oe) {
        oe.setAttribute("tabindex", "-1"), oe.focus();
        const P = `Sort controls group with ${Y().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ie(P);
      } else V && V.focus();
    } else {
      const V = Y(), oe = q - 1, se = V[oe];
      if (se) {
        se.focus();
        const P = se.tagName.toLowerCase() === "select", W = se.tagName.toLowerCase() === "button", J = P ? "dropdown" : W ? "button" : "control", ne = P ? ". Use Space key to open dropdown" : "", X = `${J} ${oe + 1} of ${V.length}${ne}`;
        ie(X);
      }
    }
  }, [Y, ie]), he = me((q, V) => {
    const { key: oe } = q, se = c[w.selectedIndex], P = se?.data.length || 0;
    if (oe === "ArrowLeft" && q.shiftKey) {
      q.preventDefault(), q.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (oe === "ArrowRight" && q.shiftKey) {
      q.preventDefault(), q.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!y.isCardNavigationActive) {
      switch (oe) {
        case "ArrowUp":
          if (q.preventDefault(), V === 0)
            I((X) => ({ ...X, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), ae(0);
          else {
            const X = G(V, "up", P, y.gridColumns);
            X !== V && (I((Z) => ({ ...Z, focusedCardIndex: X })), U(X), ie(`Moved to card ${X + 1} of ${P}`));
          }
          break;
        case "ArrowDown":
          q.preventDefault();
          const W = G(V, "down", P, y.gridColumns);
          W !== V && (I((X) => ({ ...X, focusedCardIndex: W })), U(W), ie(`Moved to card ${W + 1} of ${P}`));
          break;
        case "ArrowLeft":
          q.preventDefault();
          const J = G(V, "left", P, y.gridColumns);
          J !== V ? (I((X) => ({ ...X, focusedCardIndex: J })), U(J), ie(`Moved to card ${J + 1} of ${P}`)) : w.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: w.selectedIndex - 1 }), I((X) => ({ ...X, focusArea: "tabs" })), setTimeout(() => O(w.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          q.preventDefault();
          const ne = G(V, "right", P, y.gridColumns);
          ne !== V ? (I((X) => ({ ...X, focusedCardIndex: ne })), U(ne), ie(`Moved to card ${ne + 1} of ${P}`)) : w.selectedIndex < c.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: w.selectedIndex + 1 }), I((X) => ({ ...X, focusArea: "tabs" })), setTimeout(() => O(w.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (se?.data[V]) {
            q.preventDefault(), I((Z) => ({
              ...Z,
              selectedCardIndex: V
            }));
            const X = ce(V);
            X.length > 0 ? (I((Z) => ({
              ...Z,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: X,
              selectedCardIndex: V
              // Ensure selection is maintained
            })), ie(`Card ${V + 1} selected and navigation activated. ${X.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ie(`Card ${V + 1} selected.`);
          }
          break;
        case " ":
          if (se?.data[V]) {
            q.preventDefault(), I((Z) => ({
              ...Z,
              selectedCardIndex: Z.selectedCardIndex === V ? -1 : V
            }));
            const X = y.selectedCardIndex === V;
            ie(`Card ${V + 1} ${X ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (oe) {
      case "ArrowUp":
      case "ArrowLeft":
        q.preventDefault();
        const W = Math.max(0, y.focusedCardElementIndex - 1);
        I((Z) => ({ ...Z, focusedCardElementIndex: W })), Q(V, W);
        break;
      case "ArrowDown":
      case "ArrowRight":
        q.preventDefault();
        const J = Math.min(y.cardElements.length - 1, y.focusedCardElementIndex + 1);
        I((Z) => ({ ...Z, focusedCardElementIndex: J })), Q(V, J);
        break;
      case "Enter":
        q.preventDefault();
        const ne = y.cardElements[y.focusedCardElementIndex];
        ne && (ne.element.click(), ie(`Activated ${ne.label}`));
        break;
      case " ":
        q.preventDefault();
        const X = y.cardElements[y.focusedCardElementIndex];
        if (X) {
          const Z = new MouseEvent("dblclick", { bubbles: !0 });
          X.element.dispatchEvent(Z), ie(`Double-clicked ${X.label}`);
        }
        break;
      case "Escape":
        q.preventDefault(), I((Z) => ({
          ...Z,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => U(V), 0), ie("Exited card navigation, returned to card level");
        break;
      case "Home":
        q.preventDefault(), y.cardElements.length > 0 && (I((Z) => ({ ...Z, focusedCardElementIndex: 0 })), Q(V, 0));
        break;
      case "End":
        if (q.preventDefault(), y.cardElements.length > 0) {
          const Z = y.cardElements.length - 1;
          I((ye) => ({ ...ye, focusedCardElementIndex: Z })), Q(V, Z);
        }
        break;
    }
  }, [y, w.selectedIndex, c, re, U, O, I, ce, Q, ie]), pe = me((q) => {
    const V = g.current[q], oe = V?.parentElement;
    if (!V || !oe) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const se = V.getBoundingClientRect(), P = oe.getBoundingClientRect();
    se.left >= P.left && se.right <= P.right || (console.log("Tab not visible, scrolling into view (mobile)"), V.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), ve = me((q, V) => {
    if (D !== "cards")
      return;
    const { key: oe } = q;
    switch (oe) {
      case "ArrowLeft":
        q.preventDefault();
        const se = V > 0 ? V - 1 : c.length - 1;
        R(se), I((ne) => ({ ...ne, focusedTabIndex: se })), g.current[se]?.focus(), pe(se);
        break;
      case "ArrowRight":
        q.preventDefault();
        const P = V < c.length - 1 ? V + 1 : 0;
        R(P), I((ne) => ({ ...ne, focusedTabIndex: P })), g.current[P]?.focus(), pe(P);
        break;
      case "ArrowDown":
        q.preventDefault();
        const W = c[w.selectedIndex];
        W && W.columns && W.columns.length > 0 ? (I((ne) => ({
          ...ne,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), ae(0)) : (I((ne) => ({
          ...ne,
          focusArea: "cards",
          focusedCardIndex: 0
        })), U(0));
        break;
      case "Home":
        q.preventDefault(), R(0), I((ne) => ({ ...ne, focusedTabIndex: 0 })), g.current[0]?.focus(), pe(0);
        break;
      case "End":
        q.preventDefault();
        const J = c.length - 1;
        R(J), I((ne) => ({ ...ne, focusedTabIndex: J })), g.current[J]?.focus(), pe(J);
        break;
      case "Enter":
      case " ":
        q.preventDefault(), R(V);
        break;
    }
  }, [c.length, R, D, U, I, pe]), de = me((q, V) => {
    if (D !== "cards")
      return;
    const { key: oe } = q, se = c[w.selectedIndex];
    if (V === 0 && !y.isSortControlsActive) {
      switch (oe) {
        case "ArrowUp":
          q.preventDefault(), I((W) => ({
            ...W,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), O(w.selectedIndex);
          break;
        case "ArrowDown":
          q.preventDefault(), se?.data && se.data.length > 0 && (I((W) => ({
            ...W,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), U(0));
          break;
        case "Enter":
        case " ":
          q.preventDefault();
          const P = Y();
          if (P.length > 0) {
            I((J) => ({
              ...J,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), ae(1);
            const W = `Entered sort controls navigation mode. ${P.length} controls available. Use arrow keys to navigate between controls.`;
            ie(W);
          }
          break;
        case "Escape":
          q.preventDefault(), I((W) => ({
            ...W,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), O(w.selectedIndex);
          break;
      }
      return;
    }
    if (y.isSortControlsActive) {
      const W = Y().length;
      switch (oe) {
        case "ArrowLeft":
          q.preventDefault();
          const J = y.focusedSortControlIndex > 1 ? y.focusedSortControlIndex - 1 : W;
          I((X) => ({ ...X, focusedSortControlIndex: J })), ae(J);
          break;
        case "ArrowRight":
          q.preventDefault();
          const ne = y.focusedSortControlIndex < W ? y.focusedSortControlIndex + 1 : 1;
          I((X) => ({ ...X, focusedSortControlIndex: ne })), ae(ne);
          break;
        case "ArrowDown":
          if (q.preventDefault(), y.isSortControlsActive) {
            const X = y.focusedSortControlIndex < W ? y.focusedSortControlIndex + 1 : 1;
            I((Z) => ({ ...Z, focusedSortControlIndex: X })), ae(X);
          } else
            se?.data && se.data.length > 0 && (I((X) => ({
              ...X,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), U(0));
          break;
        case "ArrowUp":
          q.preventDefault(), I((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), ae(0);
          break;
        case "Escape":
          q.preventDefault(), I((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), ae(0);
          break;
      }
    }
  }, [D, c, w.selectedIndex, y.isSortControlsActive, y.focusedSortControlIndex, ae, O, U, I, ie]);
  if (D === "cards") {
    const q = c[w.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${A || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": b,
            "aria-describedby": `${C || ""} ${f ? `${f}-navigation-help` : ""}`.trim(),
            "aria-orientation": v,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((V, oe) => {
              const se = oe === w.selectedIndex, P = V.disabled || p;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${V.id}`,
                  "aria-controls": `panel-${V.id}`,
                  "aria-selected": se,
                  "aria-disabled": P,
                  tabIndex: se ? 0 : -1,
                  ref: (W) => {
                    g.current[oe] = W;
                  },
                  onClick: () => R(oe),
                  onKeyDown: (W) => ve(W, oe),
                  disabled: P,
                  className: [
                    "aria-tabs-datagrid__tab",
                    se ? "aria-tabs-datagrid__tab--selected" : "",
                    P ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: V.label }),
                    w.tabLoadingStates[oe] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    w.tabErrors[oe] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                V.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      q && q.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          di,
          {
            sortConfig: w.sortConfig || [],
            columns: q.columns.map((V) => ({ key: V.key, label: V.label })),
            onSortChange: (V) => {
              k({ type: "SET_SORT", payload: V });
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
            tabIndex: y.focusArea === "sort-controls" ? 0 : -1,
            ref: (V) => {
              T.current[0] = V;
            },
            onKeyDown: (V) => de(V, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${q.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  Vn,
                  {
                    id: `card-sort-${q.id}`,
                    name: `card-sort-${q.id}`,
                    value: y.cardSortConfig ? `${y.cardSortConfig.key}-${y.cardSortConfig.direction}` : "",
                    onChange: (V) => _(V.target.value),
                    className: "sort-select",
                    children: le(q.columns).map((V) => /* @__PURE__ */ r.jsx("option", { value: V.value, children: V.label }, V.value))
                  }
                )
              ] }),
              y.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  E(y.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  et,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => _(""),
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
          ref: S,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${q?.label || "Data"} cards in ${y.gridRows} rows and ${y.gridColumns} columns`,
          "aria-rowcount": y.gridRows,
          "aria-colcount": y.gridColumns,
          id: `panel-${q?.id}`,
          "aria-labelledby": `tab-${q?.id}`,
          children: $(q?.data || []).map((V, oe) => {
            const se = y.selectedCardIndex === oe, P = y.focusedCardIndex === oe && y.focusArea === "cards", W = y.focusedCardIndex === oe && y.focusArea === "card" && y.isCardNavigationActive, J = oe === 0 && y.focusArea !== "cards", ne = P || J, X = z(oe, y.gridColumns);
            if (n.cardTemplate) {
              const Se = n.cardTemplate(V, q.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": X.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (ke) => {
                        j.current[oe] = ke;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        se ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        P ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        W ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": X.col + 1,
                      "aria-selected": se,
                      "aria-expanded": W,
                      "aria-description": W ? `Card navigation active. ${y.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: ne ? 0 : -1,
                      onClick: () => {
                        I((ke) => ({
                          ...ke,
                          selectedCardIndex: ke.selectedCardIndex === oe ? -1 : oe
                        })), re(V);
                      },
                      onKeyDown: (ke) => he(ke, oe),
                      onFocus: () => {
                        I((ke) => ke.isCardNavigationActive ? ke : ke.focusedCardIndex !== oe || ke.focusArea !== "cards" ? {
                          ...ke,
                          focusedCardIndex: oe,
                          focusArea: "cards"
                        } : ke);
                      },
                      children: Se
                    }
                  )
                },
                `card-${oe}`
              );
            }
            const Z = Yf(V, q.columns, F, N), ye = [
              Z.className || "",
              se ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              P ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              W ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": X.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      se ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      P ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      W ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": X.col + 1,
                    "aria-selected": se,
                    "aria-expanded": W,
                    onKeyDown: (Se) => {
                      Se.key === "Enter" && (Se.preventDefault(), I((ke) => ({
                        ...ke,
                        selectedCardIndex: oe
                      }))), he(Se, oe);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      ii,
                      {
                        ...Z,
                        ref: (Se) => {
                          j.current[oe] = Se;
                        },
                        className: ye,
                        "aria-label": `${Z["aria-label"] || Z.heading}. ${W ? `Card navigation active with ${y.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: ne ? 0 : -1,
                        onClick: () => {
                          I((Se) => ({
                            ...Se,
                            selectedCardIndex: Se.selectedCardIndex === oe ? -1 : oe
                          })), re(V);
                        },
                        onKeyDown: (Se) => he(Se, oe),
                        onFocus: () => {
                          y.isCardNavigationActive || I((Se) => Se.focusedCardIndex !== oe || Se.focusArea !== "cards" ? {
                            ...Se,
                            focusedCardIndex: oe,
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
              `card-${oe}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: _e,
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
  return D === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${A || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      Ca,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: b,
        ariaDescription: C,
        orientation: v,
        id: f,
        disabled: p,
        selectedIndex: h,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...L
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${A || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      Ca,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: b,
        ariaDescription: C,
        orientation: v,
        id: f,
        disabled: p,
        selectedIndex: h,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...L
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, xi = (e) => {
  const t = ja.find((n) => n.value === e);
  return t ? t.icon : null;
}, qf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = n.discountedPrice || n.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => xi(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Xf = (e) => gs(e, [
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
]), Kf = {
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
  booleanRenderer: (e) => xi(e),
  getDataId: (e) => `financial-${e.id}`
}, Zf = (e) => gs(e, [
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
]), Jf = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: qf,
    createTabs: Xf
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Kf,
    createTabs: Zf
  }
}, go = (e, t) => {
  const n = Jf[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, bi = [
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
], Qf = [
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
], eh = [
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
], th = [
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
], xo = [
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
], bo = [
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
], yo = [
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
], nh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, rh = () => [
  {
    id: "patients",
    label: "Patients",
    data: bi,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ui,
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
    data: Qf,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      fi,
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
    data: eh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      hi,
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
    data: th,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      pi,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], ah = () => {
  const [e, t] = Me("healthcare"), n = $e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Mf,
      tabPanels: rh(),
      data: bi
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...go("ecommerce", xo),
      data: xo
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...go("financial", bo),
      data: bo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: nh,
      tabPanels: gs(yo, [
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
      data: yo
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
        et,
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
      Ca,
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
}, qx = ah, yi = (e) => /* @__PURE__ */ r.jsx(Po, { ...e }), Xx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: d,
  navigation: c,
  search: u,
  account: h,
  organisation: m,
  logo: b,
  className: C,
  ...v
}) => {
  const f = {
    service: d,
    navigation: c,
    search: u,
    account: h,
    organisation: m,
    logo: b,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(oi, { ...o }),
    /* @__PURE__ */ r.jsx(Ho, { ...f }),
    /* @__PURE__ */ r.jsx(yi, { className: C, ...v, children: /* @__PURE__ */ r.jsx(Eo, { size: s, children: /* @__PURE__ */ r.jsx(Yt, { children: /* @__PURE__ */ r.jsxs(Cn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Mt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(zo, { ...l })
  ] });
}, Kx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: d,
  serviceName: c,
  serviceHref: u,
  logo: h,
  className: m,
  ...b
}) => {
  const C = {
    service: {
      text: c,
      href: u
    },
    logo: h,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(oi, { ...o }),
    /* @__PURE__ */ r.jsx(Ho, { ...C }),
    /* @__PURE__ */ r.jsxs(yi, { className: m, ...b, children: [
      d && /* @__PURE__ */ r.jsx(ba, { ...d }),
      /* @__PURE__ */ r.jsx(Eo, { size: s, children: /* @__PURE__ */ r.jsx(Yt, { children: /* @__PURE__ */ r.jsxs(Cn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Mt, { size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(zo, { ...l })
  ] });
}, vi = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = xe("nhsuk-back-link", a), d = xe("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ r.jsx("button", { className: d, type: "button", onClick: o, ...i, children: c() }) : /* @__PURE__ */ r.jsx("a", { className: d, href: n, ...i, children: c() }) });
};
vi.displayName = "ForwardLink";
const rn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function vo() {
  return typeof window > "u" ? rn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function _i() {
  const [e, t] = K.useState(vo());
  K.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(vo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const n = K.useCallback((o) => e >= rn[o], [e]), a = K.useCallback((o) => e < rn[o], [e]), s = K.useCallback((o, i) => e >= rn[o] && e < rn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: s,
    /** Raw numeric values */
    values: rn
  };
}
function Zx(e) {
  const { width: t, values: n } = _i();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = n[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function sh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = K.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = K.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return K.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    s ? d.set(n, String(s)) : d.delete(n), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, n, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const oh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), ih = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function lh(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: s,
    renderItemContent: o,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: d,
    animated: c = !0,
    backLabel: u = "Back",
    nextLabel: h = "Next",
    isLoading: m = !1,
    emptyState: b,
    a11y: C,
    className: v,
    getId: f = (ue) => ue.id,
    orientation: p = "vertical",
    autoEnableThirdColumn: A = !0,
    onDrillChange: L,
    navigationInstructions: D = "Use arrow keys to navigate, Enter to open.",
    initialFocus: H = "first",
    skipFocusOnSelect: M = !1,
    skipAnnouncements: F = !1,
    onFocusChange: N,
    syncUrl: x = !1,
    urlParamSelected: w = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: g = 0,
    lazySecondary: j = !1,
    navFooter: T,
    collapsibleNav: S = !1,
    navInitiallyCollapsed: y = !1,
    onNavCollapseChange: I,
    collapseToggleLabelShow: te = "Show navigation",
    collapseToggleLabelHide: z = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: G,
    persistNavCollapsed: R,
    navCollapsedStorageKey: re = "nsvCollapsed",
    navCollapsedUrlParam: U = "nsvCollapsed",
    autoContentHeader: ce,
    contentHeaderLevel: _e = 2,
    renderContentHeader: ie,
    contentSubheader: le,
    secondarySubheader: ee
  } = e, { up: _ } = _i(), [E, $] = K.useState(!1);
  K.useEffect(() => {
    $(!0);
  }, []);
  const Q = E && _("medium"), O = E && _("xlarge");
  let Y;
  d ? Y = d : Q ? Y = "two-column" : Y = "list", !d && A && l && O && (Y = "three-column");
  const ae = sh({
    enabled: x,
    paramSelected: w,
    paramDrill: k
  }), [he, pe] = K.useState(
    () => ae.selectedId !== void 0 ? ae.selectedId : a
  ), ve = n !== void 0 ? n : he, de = t.find((ue) => f(ue) === ve), [q, V] = K.useState(
    void 0
  );
  K.useEffect(() => {
    if (ve === void 0) return;
    V(ve);
    const ue = setTimeout(() => V(void 0), 220);
    return () => clearTimeout(ue);
  }, [ve]);
  const oe = K.useRef(null), se = K.useRef(null), P = K.useRef(null), W = K.useRef(null), [J, ne] = K.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [X, Z] = K.useState(() => "nav"), [ye, Se] = K.useState(0), ke = () => [
    W.current,
    se.current,
    P.current
  ].filter(Boolean), Ne = (ue) => {
    const we = ke(), ge = Math.max(0, Math.min(ue, we.length - 1));
    we[ge]?.focus(), Se(ge);
  }, fe = K.useCallback(
    (ue) => ue ? Array.from(ue.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ge) => !ge.hasAttribute("disabled") && ge.tabIndex !== -1
    ) : [],
    []
  ), Te = K.useCallback(
    (ue) => {
      const we = fe(se.current);
      if (!we.length) {
        se.current?.focus();
        return;
      }
      const ge = Math.max(0, Math.min(ue, we.length - 1)), je = we[ge];
      je.focus(), setTimeout(() => {
        document.activeElement !== je && (je.focus(), setTimeout(() => {
          document.activeElement !== je && je.click();
        }, 10));
      }, 10), ne((ze) => ({ ...ze, contentIndex: ge }));
      const Ue = (ze) => {
        ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), se.current?.focus(), je.removeEventListener("keydown", Ue));
      };
      we.forEach((ze) => {
        const We = ze._escapeHandler;
        We && ze.removeEventListener("keydown", We);
      }), je._escapeHandler = Ue, je.addEventListener("keydown", Ue);
    },
    [fe]
  ), Ee = K.useCallback(
    (ue) => {
      const we = fe(P.current);
      if (!we.length) {
        P.current?.focus();
        return;
      }
      const ge = Math.max(0, Math.min(ue, we.length - 1)), je = we[ge];
      je.focus(), setTimeout(() => {
        document.activeElement !== je && (je.focus(), setTimeout(() => {
          document.activeElement !== je && je.click();
        }, 10));
      }, 10), ne((ze) => ({ ...ze, secondaryIndex: ge }));
      const Ue = (ze) => {
        ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), P.current?.focus(), je.removeEventListener("keydown", Ue));
      };
      we.forEach((ze) => {
        const We = ze._escapeHandler;
        We && ze.removeEventListener("keydown", We);
      }), je._escapeHandler = Ue, je.addEventListener("keydown", Ue);
    },
    [fe]
  ), Pe = (ue) => {
    if (ue.defaultPrevented) return;
    const we = ue.key, ge = ue.target, je = !!Qe.current && Qe.current.contains(ge), Ue = !!se.current && se.current.contains(ge), ze = !!P.current && P.current.contains(ge), We = !!P.current, en = ge === W.current || ge === se.current || ge === P.current, Wt = Le && (Y === "list" || Y === "cards"), Rn = Ue && !!ge.closest(".nhs-navigation-split-view__header");
    if (X === "containers" && en) {
      if (we === "ArrowRight") {
        ue.preventDefault();
        const De = ke(), Oe = Math.min(De.length - 1, ye + 1);
        Ne(Oe);
        return;
      }
      if (we === "ArrowLeft") {
        ue.preventDefault();
        const De = Math.max(0, ye - 1);
        Ne(De);
        return;
      }
      if (we === "Home") {
        ue.preventDefault(), Ne(0);
        return;
      }
      if (we === "End") {
        ue.preventDefault(), Ne(ke().length - 1);
        return;
      }
      if (we === "Enter" || we === " ") {
        if (ue.preventDefault(), ge === W.current) {
          if (Z("nav"), Qe.current) {
            const De = Array.from(
              Qe.current.querySelectorAll("[data-nav-item]")
            );
            (De[Ge >= 0 ? Ge : 0] || De[0])?.focus();
          }
        } else ge === se.current ? (Z("content"), Te(J.contentIndex)) : ge === P.current && (Z("secondary"), Ee(J.secondaryIndex));
        return;
      }
      return;
    }
    if (we === "Escape") {
      if (X === "content" || X === "secondary") {
        if (Ue || ze) {
          if (ue.preventDefault(), Z("nav"), Qe.current) {
            const Oe = Array.from(
              Qe.current.querySelectorAll("[data-nav-item]")
            )[Ge >= 0 ? Ge : 0];
            setTimeout(() => Oe?.focus(), 10);
          }
        } else if ((ge === se.current || ge === P.current) && (ue.preventDefault(), Z("nav"), Qe.current)) {
          const Oe = Array.from(
            Qe.current.querySelectorAll("[data-nav-item]")
          )[Ge >= 0 ? Ge : 0];
          setTimeout(() => Oe?.focus(), 10);
        }
      }
      return;
    }
    if (we === "Enter" || we === " ") {
      if (ge.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ge === se.current && X === "content") {
        ue.preventDefault(), ue.stopPropagation(), fe(se.current).length > 0 && setTimeout(() => {
          Te(J.contentIndex);
        }, 50);
        return;
      }
      if (ge === P.current && X === "secondary") {
        ue.preventDefault(), ue.stopPropagation(), fe(
          P.current
        ).length > 0 && setTimeout(() => {
          Ee(J.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Wt && Rn && !en && (we === "ArrowRight" || we === "ArrowLeft")) {
      const De = fe(se.current).filter(
        (Oe) => Oe.closest(".nhs-navigation-split-view__header")
      );
      if (De.length > 1) {
        const Oe = De.indexOf(ge);
        if (Oe >= 0) {
          const Ts = (Oe + (we === "ArrowRight" ? 1 : -1) + De.length) % De.length;
          ue.preventDefault(), De[Ts].focus();
          return;
        }
      }
    }
    if (we === "ArrowRight") {
      if (je || X === "nav") {
        ue.preventDefault(), Z("content"), setTimeout(() => se.current?.focus(), 10);
        return;
      }
      if (Ue || X === "content") {
        We && (ue.preventDefault(), Z("secondary"), setTimeout(() => P.current?.focus(), 10));
        return;
      }
    }
    if (we === "ArrowLeft") {
      if (ze || X === "secondary") {
        ue.preventDefault(), Z("content"), setTimeout(() => se.current?.focus(), 10);
        return;
      }
      if (Ue || X === "content") {
        if (ue.preventDefault(), Z("nav"), Qe.current) {
          const Oe = Array.from(
            Qe.current.querySelectorAll("[data-nav-item]")
          )[Ge >= 0 ? Ge : 0];
          setTimeout(() => Oe?.focus(), 10);
        }
        return;
      }
    }
    if (we === "Home" && !je && (ue.preventDefault(), Z("nav"), Qe.current)) {
      const De = Array.from(
        Qe.current.querySelectorAll("[data-nav-item]")
      ), Oe = De[Ge >= 0 ? Ge : 0] || De[0];
      setTimeout(() => Oe?.focus(), 10);
    }
    if (we === "End") {
      const De = We ? P.current : se.current;
      De && !De.contains(ge) && (ue.preventDefault(), We ? (Z("secondary"), setTimeout(() => P.current?.focus(), 10)) : (Z("content"), setTimeout(() => se.current?.focus(), 10)));
    }
    if (we === "ArrowDown" || we === "ArrowUp") {
      if (ge === se.current && we === "ArrowDown") {
        ue.preventDefault(), fe(se.current).length > 0 && Te(0);
        return;
      }
      if (ge === P.current && we === "ArrowDown") {
        ue.preventDefault(), fe(
          P.current
        ).length > 0 && Ee(0);
        return;
      }
      if (Ue) {
        const De = fe(se.current);
        if (De.length) {
          ue.preventDefault();
          const Oe = we === "ArrowDown" ? 1 : -1, ht = (J.contentIndex + Oe + De.length) % De.length;
          Te(ht);
        }
      } else if (ze) {
        const De = fe(P.current);
        if (De.length) {
          ue.preventDefault();
          const Oe = we === "ArrowDown" ? 1 : -1, ht = (J.secondaryIndex + Oe + De.length) % De.length;
          Ee(ht);
        }
      }
    }
  }, Le = !!de && (Y === "list" || Y === "cards"), tt = K.useMemo(() => ce === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : ce === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : ce === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: ce.mobile !== void 0 ? ce.mobile : !0,
    tablet: ce.tablet || !1,
    desktop: ce.desktop || !1
  }, [ce]), Ft = E && _("medium") && !_("xlarge"), xt = E && _("xlarge"), ut = !!l, qe = Y === "three-column", [Ke, gn] = K.useState(!1);
  K.useEffect(() => {
    qe && Ke && gn(!1);
  }, [qe, Ke]), K.useEffect(() => {
    Ke && !qe && (Z("secondary"), Se(2), setTimeout(() => {
      P.current?.focus();
    }, 50));
  }, [Ke, qe]), K.useEffect(() => {
    !Ke && !qe && X === "secondary" && (Z("content"), Se(1), setTimeout(() => {
      se.current?.focus();
    }, 50));
  }, [Ke, qe, X]);
  const Ur = !!de && (Le && tt.mobile || !Le && Ft && tt.tablet || !Le && xt && tt.desktop) || ut && !qe, zl = `h${_e}`, Gr = de ? K.createElement(
    zl,
    {
      style: {
        marginLeft: Le ? 32 : 0,
        marginRight: Le ? 32 : 0
      }
    },
    de.label
  ) : null, js = Le ? "mobile" : Ft ? "tablet" : "desktop", Wl = ut && !qe && !Ke, Vr = Le && tt.mobile ? /* @__PURE__ */ r.jsx(
    ba,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => Qt(void 0, void 0)
    }
  ) : void 0, Yr = Wl ? /* @__PURE__ */ r.jsx(
    vi,
    {
      element: "button",
      text: h,
      onClick: () => {
        gn(!0);
      }
    }
  ) : void 0, qr = !qe && Ke ? /* @__PURE__ */ r.jsx(
    ba,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => gn(!1)
    }
  ) : void 0, Ol = K.useMemo(() => {
    if (!Ur || !de) return null;
    if (ie)
      return ie({
        item: de,
        detailActive: Le,
        context: js,
        backLink: Vr,
        defaultHeading: Gr
      });
    const ue = de && le ? typeof le == "function" ? le(de) : le : null;
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
            qr || Vr,
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
                  Gr,
                  ue && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ue })
                ]
              }
            )
          ]
        }
      ),
      Yr && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: Yr })
    ] });
  }, [
    Ur,
    de,
    ie,
    Le,
    js,
    Vr,
    qr,
    Gr,
    Yr,
    le
  ]);
  K.useEffect(() => {
    if (!x) return;
    const ue = Y === "three-column";
    let we = !1;
    const ge = () => {
      we || (ae.selectedId !== ve && ae.setSelectedId(ve), ae.drilledIn !== ue && ae.setDrilledIn(ue));
    };
    if (g && g > 0) {
      const je = setTimeout(ge, g);
      return () => {
        we = !0, clearTimeout(je);
      };
    } else
      ge();
  }, [x, ae, ve, Y, g]), K.useEffect(() => {
    if (!x) return;
    const ue = () => {
      const we = new URLSearchParams(window.location.search), ge = we.get(w);
      we.get(k), pe(ge === null ? void 0 : ge);
    };
    return window.addEventListener("popstate", ue), () => window.removeEventListener("popstate", ue);
  }, [
    x,
    w,
    k,
    d,
    l
  ]);
  const An = K.useRef(0), bt = K.useRef(
    null
  ), Qt = K.useCallback(
    (ue, we) => {
      ue !== ve && (n === void 0 && pe(ue), s?.(ue, we));
    },
    [n, s, ve]
  );
  K.useEffect(() => {
    if (!M && Le && se.current) {
      const ue = setTimeout(() => se.current?.focus(), 30);
      return () => clearTimeout(ue);
    }
  }, [Le, ve, M]);
  const Qe = K.useRef(null), [Ge, xn] = K.useState(
    () => H === "first" ? 0 : -1
  );
  K.useEffect(() => {
    if (Ge < 0 || !Qe.current) return;
    const we = Array.from(
      Qe.current.querySelectorAll("[data-nav-item]")
    )[Ge];
    if (we) {
      document.activeElement !== we && we.focus(), An.current = Ge;
      const ge = t[Ge];
      N?.(
        ge ? f(ge) : void 0,
        ge,
        Ge
      );
    }
  }, [Ge, t, N, f]);
  const Ul = (ue) => {
    const we = p === "vertical" ? "ArrowDown" : "ArrowRight", ge = p === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ue.key === "ArrowRight" && p === "vertical") {
      ue.preventDefault(), Ke ? (Z("secondary"), setTimeout(() => {
        P.current?.focus();
      }, 10)) : (Z("content"), setTimeout(() => {
        se.current?.focus();
      }, 10));
      return;
    }
    if (ue.key === we)
      ue.preventDefault(), xn((je) => Math.min(t.length - 1, je + 1));
    else if (ue.key === ge)
      ue.preventDefault(), xn((je) => Math.max(0, je - 1));
    else if (ue.key === "Home")
      ue.preventDefault(), xn(0);
    else if (ue.key === "End")
      ue.preventDefault(), xn(t.length - 1);
    else if (ue.key === "Enter" || ue.key === " ") {
      ue.preventDefault();
      const je = t[Ge];
      je && !je.disabled && Qt(f(je), je);
    } else if (ue.key.length === 1 && /[a-z0-9]/i.test(ue.key)) {
      bt.current || (bt.current = { buffer: "", last: 0 });
      const je = Date.now(), Ue = 700, ze = ue.key.toLowerCase();
      je - bt.current.last > Ue ? bt.current.buffer = ze : bt.current.buffer += ze, bt.current.last = je;
      let We = bt.current.buffer;
      const en = We.split("").every((ht) => ht === We[0]), Wt = t.map(
        (ht) => String(ht.label || "").toLowerCase()
      );
      let Rn = 0;
      Ge >= 0 && (Rn = (Ge + 1) % t.length);
      let De;
      const Oe = (ht, Ts) => {
        const Ds = t.length;
        for (let Zr = 0; Zr < Ds; Zr++) {
          const Jr = (Rn + Zr) % Ds;
          if (!t[Jr].disabled && Wt[Jr].startsWith(ht))
            return Jr;
        }
      };
      en && We.length > 1 ? De = Oe(We[0]) : (De = Oe(We), De === void 0 && We.length > 1 && (De = Oe(We[We.length - 1]), De !== void 0 && bt.current && (bt.current.buffer = We[We.length - 1]))), De !== void 0 && xn(De);
    }
  }, Gl = K.useMemo(() => {
    if (R && (R === "url" || R === "both") && typeof window < "u") {
      const we = new URLSearchParams(window.location.search).get(U);
      if (we === "1") return !0;
      if (we === "0") return !1;
    }
    if (R && (R === "localStorage" || R === "both") && typeof window < "u")
      try {
        const ue = window.localStorage.getItem(re);
        if (ue === "1") return !0;
        if (ue === "0") return !1;
      } catch {
      }
    return y;
  }, [
    R,
    y,
    re,
    U
  ]), [ft, Vl] = K.useState(Gl);
  K.useEffect(() => {
    I?.(ft);
  }, [ft, I]);
  const Yl = K.useCallback(() => {
    Q && S && Vl((ue) => !ue);
  }, [Q, S]);
  K.useEffect(() => {
    if (R && !(typeof window > "u")) {
      if (R === "localStorage" || R === "both")
        try {
          window.localStorage.setItem(
            re,
            ft ? "1" : "0"
          );
        } catch {
        }
      if (R === "url" || R === "both") {
        const ue = new URLSearchParams(window.location.search);
        ue.set(U, ft ? "1" : "0");
        const we = `${window.location.pathname}?${ue.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", we);
      }
    }
  }, [
    ft,
    R,
    re,
    U
  ]);
  const ql = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Le ? "nhs-navigation-split-view--detail-active" : "",
    Y === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    S && Q && ft ? "nhs-navigation-split-view--nav-collapsed" : "",
    v
  ].filter(Boolean).join(" "), Xr = K.useRef(null);
  K.useEffect(() => {
    if (!F && Xr.current) {
      const ue = de ? `Selected ${de.label}` : "Selection cleared";
      Xr.current.textContent = ue;
    }
  }, [de, F]), K.useEffect(() => {
    !Le && ve == null && Qe.current && Qe.current.querySelectorAll("[data-nav-item]")[An.current]?.focus();
  }, [Le, ve]);
  const Pt = Y === "three-column", [Kr, Xl] = K.useState(!1);
  K.useEffect(() => {
    Pt && !Kr && Xl(!0);
  }, [Pt, Kr]);
  const Ns = K.useRef(Pt);
  K.useEffect(() => {
    Ns.current !== Pt && (L?.(Pt), Ns.current = Pt);
  }, [Pt, L]);
  const Kl = () => {
    if (Y === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": ve ? String(ve) : void 0,
          children: [
            t.map((ge) => {
              const je = f(ge), Ue = je === ve;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Ue,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(je),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Ue || void 0,
                      "data-disabled": ge.disabled || void 0,
                      disabled: ge.disabled,
                      onClick: () => !ge.disabled && Qt(je, ge),
                      children: [
                        ge.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ge.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ge.label }),
                        ge.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ge.description }),
                        o?.(ge),
                        ge.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ge.badge })
                      ]
                    }
                  )
                },
                je
              );
            }),
            t.length === 0 && !m && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: b || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const ue = "nsv-nav-instructions", we = K.useMemo(() => K.memo(
      ({
        item: ge,
        idx: je,
        selected: Ue,
        focused: ze
      }) => {
        const We = f(ge), en = ge.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: ze ? 0 : -1,
          onClick: () => {
            An.current = je, Qt(We, ge);
          },
          onKeyDown: (Wt) => {
            (Wt.key === "Enter" || Wt.key === " ") && (Wt.preventDefault(), An.current = je, Qt(We, ge));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(We),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Ue,
            "aria-current": Ue ? "true" : void 0,
            "data-selected": Ue || void 0,
            "data-disabled": ge.disabled || void 0,
            ...en,
            children: [
              ge.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ge.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ge.label }),
                ge.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ge.description }),
                o?.(ge)
              ] }),
              ge.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ge.badge })
            ]
          }
        );
      }
    ), [f, Qt, o]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: Qe,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ul,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ue,
          "aria-activedescendant": ve ? String(ve) : void 0,
          children: [
            t.map((ge, je) => /* @__PURE__ */ r.jsx(
              we,
              {
                item: ge,
                idx: je,
                selected: f(ge) === ve,
                focused: je === Ge || Ge === -1 && je === 0 && H === "first",
                "data-just-selected": f(ge) === q ? "true" : void 0
              },
              f(ge)
            )),
            t.length === 0 && !m && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: b || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          id: ue,
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
      ref: oe,
      className: ql,
      "aria-label": C?.rootLabel,
      "data-layout": Y,
      onKeyDown: Pe,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Le || void 0,
            style: { transform: Le ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: W,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": C?.navigationLabel || "Items",
                  "data-collapsed": ft || void 0,
                  tabIndex: 0,
                  children: [
                    S && Q && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Yl,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": ft ? te : z,
                        title: ft ? te : z,
                        children: ft ? B || /* @__PURE__ */ r.jsx(ih, {}) : G || /* @__PURE__ */ r.jsx(oh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Kl() }),
                    T && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: T
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: se,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": C?.contentLabel || "Content",
                  "data-has-selection": !!de || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ke && !qe ? "none" : void 0
                  },
                  children: [
                    Ur && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: Ol }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(de)
                      }
                    )
                  ]
                }
              ),
              Y === "three-column" && (!j || Kr) || Ke && !qe ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: P,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": C?.secondaryContentLabel || "Secondary",
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
                        Ke && !qe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  qr,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: de && typeof de == "object" && "label" in de ? de.label : String(de) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        de && ee && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof ee == "function" ? ee(de) : ee
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(de) })
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
            ref: Xr,
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
            children: Pt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
lh.displayName = "NavigationSplitView";
const _o = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), ch = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, u = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), m = n && e.childItems && e.childItems.length > 0, b = (v) => {
    m && (v.preventDefault(), a?.(e));
  }, C = m ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: b,
    onKeyDown: (v) => {
      (v.key === "Enter" || v.key === " ") && b(v), v.key === "Escape" && s && b(v);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: xe("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": h,
      ...C,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          m && /* @__PURE__ */ r.jsx("span", { className: xe("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, dh = Ql(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: s,
  ariaLabel: o = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: d = "overlay",
  ...c
}) => {
  const [u, h] = Me(() => /* @__PURE__ */ new Set()), [m, b] = Me(() => /* @__PURE__ */ new Set()), C = Fe(/* @__PURE__ */ new Set()), v = me((g) => u.has(g), [u]), f = me((g) => {
    h((j) => {
      const T = new Set(j);
      return T.has(g.id) ? (T.delete(g.id), b((S) => {
        const y = new Set(S);
        return y.add(g.id), y;
      }), setTimeout(() => b((S) => {
        const y = new Set(S);
        return y.delete(g.id), y;
      }), 240), l?.(g.id, !1)) : (T.add(g.id), l?.(g.id, !0)), T;
    });
  }, [l]);
  ec(() => {
    if (d !== "inline" || !i) return;
    const g = [];
    if (u.forEach((y) => {
      C.current.has(y) || g.push(y);
    }), C.current = new Set(u), !g.length) return;
    const j = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, T = g.map((y) => `.nhsuk-product-roadmap__inline-children[data-parent="${y}"] .nhsuk-product-roadmap__inline-child`).join(","), S = Array.from(document.querySelectorAll(T));
    if (S.length) {
      if (j) {
        S.forEach((y) => {
          y.style.opacity = "1", y.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((y) => {
        (y.gsap || y.default || y).to(S, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        S.forEach((y) => {
          y.style.opacity = "1", y.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, d, i]);
  const p = me(() => {
    u.size && h(/* @__PURE__ */ new Set());
  }, [u]), A = xe("nhsuk-product-roadmap", s), L = _o(n, 120, 1200, 400), D = _o(a, 1, 6, 2), H = $e(() => e.map((g) => /* @__PURE__ */ new Date(g + " 01")), [e]), M = $e(() => {
    if (H.length === 0) {
      const T = /* @__PURE__ */ new Date();
      return [T, T];
    }
    const g = new Date(H[0]), j = Dn.offset(new Date(H[H.length - 1]), 1);
    return [g, j];
  }, [H]), F = $e(() => ms().domain(M).range([0, H.length * L]), [M, H.length, L]), N = me((g) => {
    if (g.startDate) {
      const z = new Date(g.startDate), B = new Date(g.endDate ?? g.startDate);
      B < z && B.setTime(z.getTime());
      const G = F(z), R = Dn.offset(new Date(B), 1);
      let re = F(R);
      Number.isFinite(re) || (re = G + L);
      const U = Math.max(L * 0.25, re - G), ce = G / L, _e = U / L;
      return { ...g, _pxLeft: G, _pxWidth: U, _startFraction: ce, _spanColumns: _e };
    }
    const j = g.date ?? 1, T = g.dateOffset ?? 0, S = g.length ?? 1, y = g.partialLength ?? 1, I = j - 1 + T, te = S - 1 + y;
    return { ...g, _pxLeft: I * L, _pxWidth: te * L, _startFraction: I, _spanColumns: te };
  }, [F, L]), x = $e(() => t.map((g) => {
    const T = g.roadmapItems.map((y) => {
      const I = !y.childItems && y.children ? { ...y, childItems: y.children } : { ...y };
      return N(I);
    }).sort((y, I) => y._pxLeft !== I._pxLeft ? y._pxLeft - I._pxLeft : I._pxWidth - y._pxWidth), S = [];
    return T.forEach((y) => {
      const I = y._pxLeft, te = y._pxLeft + y._pxWidth;
      let z = S.findIndex((B) => B <= I);
      z === -1 && (z = S.length, S.push(0)), S[z] = te, y.verticalPosition = z + 1;
    }), { ...g, roadmapItems: T, _laneCount: S.length };
  }), [t, N]), w = $e(() => x.map((g) => g._laneCount || 1), [x]), k = $e(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: A,
      style: { "--column-width": `${L}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": x.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((g, j) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": j + 2, children: g }, `${g}-${j}`))
        ] }),
        x.map((g, j) => {
          const T = j + 2, S = w[j];
          let y, I = 0, te = [];
          i && d === "inline" && (te = g.roadmapItems.filter((R) => v(R.id) && R.childItems && R.childItems.length).map((R) => ({ id: R.id, lane: R.verticalPosition || 1, count: R.childItems.length })).sort((R, re) => R.lane - re.lane), I = te.reduce((R, re) => R + re.count, 0));
          const z = S + I;
          y = `calc((${z} * var(--roadmap-item-block-height)) + (max(0, ${z} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let G = 0;
          return te.forEach((R) => {
            G += R.count, B[R.lane + 1] = G;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": T, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: g.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: y }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: g.roadmapItems.map((R, re) => {
              const U = (R.verticalPosition || 1) - 1, ce = te.filter((ee) => ee.lane - 1 < U).reduce((ee, _) => ee + _.count, 0), _e = U + ce, ie = v(R.id), le = m.has(R.id);
              return /* @__PURE__ */ r.jsxs(st.Fragment, { children: [
                /* @__PURE__ */ r.jsx(ch, { item: R, maxLines: D, enableDrilldown: i, onExpand: f, isActive: ie, topLaneIndex: _e, laneOffset: ce }),
                i && d === "inline" && (ie || le) && R.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": R.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${R.title} child tasks`, children: R.childItems.map((ee, _) => {
                  const E = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let $ = R._pxLeft, Q = R._pxWidth;
                  if (ee.startDate) {
                    const ae = new Date(ee.startDate);
                    let he = ee.endDate ? new Date(ee.endDate) : new Date(ae);
                    he < ae && (he = new Date(ae));
                    const pe = new Date(he);
                    pe.setDate(pe.getDate() + 1);
                    const ve = F(ae);
                    let de = F(pe);
                    (!Number.isFinite(de) || de <= ve) && (de = ve + 6), $ = ve, Q = Math.max(6, de - ve);
                  }
                  const Y = _e + 1 + _;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: xe("nhsuk-product-roadmap__inline-child", ee.status && `nhsuk-product-roadmap__inline-child--status-${ee.status}`, !ie && le && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${$}px`, width: `${Q}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${Y})`, height: E, opacity: ie ? 0 : void 0, transform: ie ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: ee.title })
                      ]
                    },
                    ee.id ?? _
                  );
                }) })
              ] }, R.id ?? re);
            }) }) })
          ] }, `${g.heading}-${j}`);
        }),
        i && d === "overlay" && u.size === 1 && (() => {
          const g = Array.from(u)[0], j = t.flatMap((T) => T.roadmapItems).find((T) => T.id === g);
          return !j || !j.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${j.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: j.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: p, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: j.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: j.childItems.map((T, S) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: T.title }),
                T.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: T.content })
              ] }, T.id ?? S)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: p, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
dh.displayName = "ProductRoadmap";
function wi(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = wi(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function sr() {
  for (var e, t, n = 0, a = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = wi(e)) && (a && (a += " "), a += t);
  return a;
}
function Ze(e) {
  return function() {
    return e;
  };
}
const Na = Math.PI, Ta = 2 * Na, Ut = 1e-6, uh = Ta - Ut;
function Si(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function fh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Si;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * n) / n + a[s];
  };
}
class hh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Si : fh(t);
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
  bezierCurveTo(t, n, a, s, o, i) {
    this._append`C${+t},${+n},${+a},${+s},${this._x1 = +o},${this._y1 = +i}`;
  }
  arcTo(t, n, a, s, o) {
    if (t = +t, n = +n, a = +a, s = +s, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let i = this._x1, l = this._y1, d = a - t, c = s - n, u = i - t, h = l - n, m = u * u + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > Ut) if (!(Math.abs(h * d - c * u) > Ut) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let b = a - i, C = s - l, v = d * d + c * c, f = b * b + C * C, p = Math.sqrt(v), A = Math.sqrt(m), L = o * Math.tan((Na - Math.acos((v + m - f) / (2 * p * A))) / 2), D = L / A, H = L / p;
      Math.abs(D - 1) > Ut && this._append`L${t + D * u},${n + D * h}`, this._append`A${o},${o},0,0,${+(h * b > u * C)},${this._x1 = t + H * d},${this._y1 = n + H * c}`;
    }
  }
  arc(t, n, a, s, o, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), d = a * Math.sin(s), c = t + l, u = n + d, h = 1 ^ i, m = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > Ut || Math.abs(this._y1 - u) > Ut) && this._append`L${c},${u}`, a && (m < 0 && (m = m % Ta + Ta), m > uh ? this._append`A${a},${a},0,1,${h},${t - l},${n - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = u}` : m > Ut && this._append`A${a},${a},0,${+(m >= Na)},${h},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
  }
  rect(t, n, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function ki(e) {
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
  }, () => new hh(t);
}
function Ci(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ji(e) {
  this._context = e;
}
ji.prototype = {
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
function Ni(e) {
  return new ji(e);
}
function Ti(e) {
  return e[0];
}
function Di(e) {
  return e[1];
}
function $i(e, t) {
  var n = Ze(!0), a = null, s = Ni, o = null, i = ki(l);
  e = typeof e == "function" ? e : e === void 0 ? Ti : Ze(e), t = typeof t == "function" ? t : t === void 0 ? Di : Ze(t);
  function l(d) {
    var c, u = (d = Ci(d)).length, h, m = !1, b;
    for (a == null && (o = s(b = i())), c = 0; c <= u; ++c)
      !(c < u && n(h = d[c], c, d)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()), m && o.point(+e(h, c, d), +t(h, c, d));
    if (b) return o = null, b + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ze(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ze(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : Ze(!!d), l) : n;
  }, l.curve = function(d) {
    return arguments.length ? (s = d, a != null && (o = s(a)), l) : s;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = o = null : o = s(a = d), l) : a;
  }, l;
}
function Da(e, t, n) {
  var a = null, s = Ze(!0), o = null, i = Ni, l = null, d = ki(c);
  e = typeof e == "function" ? e : e === void 0 ? Ti : Ze(+e), t = typeof t == "function" ? t : Ze(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Di : Ze(+n);
  function c(h) {
    var m, b, C, v = (h = Ci(h)).length, f, p = !1, A, L = new Array(v), D = new Array(v);
    for (o == null && (l = i(A = d())), m = 0; m <= v; ++m) {
      if (!(m < v && s(f = h[m], m, h)) === p)
        if (p = !p)
          b = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), C = m - 1; C >= b; --C)
            l.point(L[C], D[C]);
          l.lineEnd(), l.areaEnd();
        }
      p && (L[m] = +e(f, m, h), D[m] = +t(f, m, h), l.point(a ? +a(f, m, h) : L[m], n ? +n(f, m, h) : D[m]));
    }
    if (A) return l = null, A + "" || null;
  }
  function u() {
    return $i().defined(s).curve(i).context(o);
  }
  return c.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Ze(+h), a = null, c) : e;
  }, c.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Ze(+h), c) : e;
  }, c.x1 = function(h) {
    return arguments.length ? (a = h == null ? null : typeof h == "function" ? h : Ze(+h), c) : a;
  }, c.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Ze(+h), n = null, c) : t;
  }, c.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Ze(+h), c) : t;
  }, c.y1 = function(h) {
    return arguments.length ? (n = h == null ? null : typeof h == "function" ? h : Ze(+h), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(n);
  }, c.lineX1 = function() {
    return u().x(a).y(t);
  }, c.defined = function(h) {
    return arguments.length ? (s = typeof h == "function" ? h : Ze(!!h), c) : s;
  }, c.curve = function(h) {
    return arguments.length ? (i = h, o != null && (l = i(o)), c) : i;
  }, c.context = function(h) {
    return arguments.length ? (h == null ? o = l = null : l = i(o = h), c) : o;
  }, c;
}
function wo(e) {
  return e < 0 ? -1 : 1;
}
function So(e, t, n) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (n - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (wo(o) + wo(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function ko(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function ca(e, t, n) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * n, o, i);
}
function or(e) {
  this._context = e;
}
or.prototype = {
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
        ca(this, this._t0, ko(this, this._t0));
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
          this._point = 3, ca(this, ko(this, n = So(this, e, t)), n);
          break;
        default:
          ca(this, this._t0, n = So(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(or.prototype).point = function(e, t) {
  or.prototype.point.call(this, t, e);
};
function ir(e) {
  return new or(e);
}
function ph(e, t, n) {
  const a = Wo(e, t);
  return ms().domain(a).range(n);
}
function Co(e, t, n) {
  const [a, s] = Wo(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return Qn().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = s - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return Qn().domain([i, l]).nice().range(n);
}
function $a(e, t, n, a) {
  const s = $i().x(t).y(n);
  return a?.smooth !== !1 && s.curve(ir), s(e) ?? "";
}
function mh(e = {}) {
  const t = K.useRef(null), n = K.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = K.useState({ width: 0, height: 0 });
  K.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: u, height: h } = c.contentRect;
        s({ width: u, height: h });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: n, ref: t };
}
const Mi = K.createContext(null);
function Ht() {
  return K.useContext(Mi);
}
const gh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = mh(t), d = { height: e, position: "relative" };
  return n !== void 0 && (d.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: d, role: o, "aria-label": i, children: /* @__PURE__ */ r.jsx(Mi.Provider, { value: l, children: s }) });
}, xs = K.createContext(null), Jt = () => K.useContext(xs), xh = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: d,
  yPadding: c
}) => {
  const u = Ht(), h = t ?? u?.innerWidth ?? 0, m = n ?? u?.innerHeight ?? 0, b = K.useMemo(() => e.flatMap((D) => D.data), [e]), C = K.useCallback((D) => {
    if (a) return a(D);
    const H = D.x;
    return H instanceof Date ? H : new Date(H);
  }, [a]), v = d ?? 6, f = c ?? 6, p = K.useMemo(() => ph(b, C, [v, Math.max(0, h - v)]), [b, C, h, v]), A = K.useMemo(() => {
    if (l) {
      const D = Co([], (H) => H.y, [Math.max(0, m - f), f]);
      return D.domain(l), D;
    }
    return Co(b, (D) => D.y, [Math.max(0, m - f), f]);
  }, [b, m, l]), L = K.useMemo(() => ({
    xScale: p,
    yScale: A,
    getXTicks: (D = o) => p.ticks(D),
    getYTicks: (D = i) => A.ticks(D)
  }), [p, A, o, i]);
  return /* @__PURE__ */ r.jsx(xs.Provider, { value: L, children: s });
}, jo = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: s,
  label: o,
  offset: i,
  className: l,
  minLabelSpacing: d,
  maxTickLabelLength: c,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: h = 0,
  allowLabelWrap: m = !0,
  tickFormatPreset: b
}) => {
  const C = Jt(), v = Ht(), f = t || (e === "x" ? C?.xScale : C?.yScale), p = n ?? (e === "x" ? 6 : 5), A = typeof s == "function", L = K.useMemo(() => {
    if (A || !b) return;
    const M = (F) => new Intl.DateTimeFormat(void 0, F);
    switch (b) {
      case "dayShortMonth":
        return (F) => {
          const N = F instanceof Date ? F : new Date(F);
          return `${N.getDate()}
${M({ month: "short" }).format(N)}`;
        };
      case "dayShortMonthYear":
        return (F) => {
          const N = F instanceof Date ? F : new Date(F);
          return `${N.getDate()}
${M({ month: "short" }).format(N)} ${N.getFullYear()}`;
        };
      case "shortMonth":
        return (F) => {
          const N = F instanceof Date ? F : new Date(F);
          return M({ month: "short" }).format(N);
        };
      case "shortMonthYear":
        return (F) => {
          const N = F instanceof Date ? F : new Date(F);
          return `${M({ month: "short" }).format(N)} ${N.getFullYear()}`;
        };
      case "hourMinute":
        return (F) => {
          const N = F instanceof Date ? F : new Date(F);
          return M({ hour: "2-digit", minute: "2-digit" }).format(N);
        };
      default:
        return;
    }
  }, [A, b]);
  let D = A ? s : L || ((M) => String(M));
  const H = K.useMemo(() => a && Array.isArray(a) ? a : f ? typeof f.ticks == "function" ? f.ticks(p) : f.domain ? f.domain() : [] : [], [f, p, a]);
  if (e === "x" && !A && !b && H.length && H.every((M) => M instanceof Date)) {
    const M = H[0], F = H[H.length - 1], N = F.getTime() - M.getTime(), x = 24 * 3600 * 1e3, w = 365 * x, k = M.getFullYear() === F.getFullYear(), g = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (N < 2 * x) {
      const j = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      D = (T) => j.format(T);
    } else if (N < 32 * x)
      D = (j) => {
        const T = j;
        return `${T.getDate()} ${g.format(T)}`;
      };
    else if (N < w && k)
      D = (j) => g.format(j);
    else if (N < 2 * w) {
      const j = /* @__PURE__ */ new Set();
      D = (T) => {
        const S = T, y = S.getMonth();
        return j.has(y) || j.add(y), `${g.format(S)} ${S.getFullYear()}`;
      };
    } else
      D = (j) => String(j.getFullYear());
  }
  if (!f || !v) return null;
  if (e === "x") {
    const M = i ?? v.innerHeight, F = typeof f.bandwidth == "function", N = F ? f.bandwidth() : 0, x = (g) => {
      const j = f(g);
      return F ? j + N / 2 : j;
    };
    let w = d ?? 0;
    if (u && d == null) {
      const g = H.map((T) => D(T).replace(/\n.*/g, "")), j = g.length ? g.reduce((T, S) => T + S.length, 0) / g.length : 0;
      w = Math.max(12, Math.round(j * 6 + 4));
    }
    const k = K.useMemo(() => {
      if (a && Array.isArray(a) || w <= 0) return H;
      const g = [];
      let j = -1 / 0;
      for (const T of H) {
        const S = x(T);
        S - j >= w && (g.push(T), j = S);
      }
      return g;
    }, [H, f, w, a, F, N]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${M})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: v.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      k.map((g, j) => {
        const T = D(g), S = c && T.length > c ? T.slice(0, Math.max(1, c - 1)) + "…" : T, y = m ? S.split(/\n/) : [S.replace(/\n/g, " ")], I = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${x(g)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: I, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            y.map((te, z) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: z === 0 ? 0 : "1.1em", children: te }, z)),
            S !== T && /* @__PURE__ */ r.jsx("title", { children: T })
          ] })
        ] }, g?.toString?.() || j);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    H.map((M, F) => {
      const N = D(M), x = c && N.length > c ? N.slice(0, Math.max(1, c - 1)) + "…" : N, w = m ? x.split(/\n/) : [x.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${f(M)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          w.map((k, g) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: g === 0 ? 0 : "1.1em", children: k }, g)),
          x !== N && /* @__PURE__ */ r.jsx("title", { children: N })
        ] })
      ] }, M?.toString?.() || F);
    }),
    o && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -v.innerHeight / 2, y: -v.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, bh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = Jt(), i = Ht();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ r.jsx("line", { x1: 0, x2: i.innerWidth, y1: o.yScale(d), y2: o.yScale(d), stroke: n, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ r.jsx("line", { y1: 0, y2: i.innerHeight, x1: o.xScale(d), x2: o.xScale(d), stroke: n, strokeDasharray: a }, c))
  ] });
}, yh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Pn = {
  color: yh
}, vh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Br = {
  color: vh
}, _h = [
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
let da = null, ua = null, fa = null, Ii = "optimized";
function wh() {
  const e = { color: { ...Br.color, ...Pn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), s);
    if (typeof i == "string") return i;
  }, n = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const s = `color.data-viz.categorical.${a}`, o = t(s);
      if (!o) throw new Error(`Missing token ${s}`);
      n.push(o);
    }
    return n;
  } catch {
    return _h;
  }
}
function Sh() {
  return da || (da = wh()), da;
}
function kh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ha(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Ch(e, t, n) {
  const a = ha(e), s = ha(t), o = ha(n), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, d = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function jh(e, t, n) {
  let i = e / 95.047, l = t / 100, d = n / 108.883;
  const c = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function Li(e) {
  const t = kh(e);
  if (!t) return null;
  const n = Ch(t.r, t.g, t.b);
  return jh(n.x, n.y, n.z);
}
function No(e, t) {
  const n = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(n * n + a * a + s * s);
}
function Nh() {
  const e = Sh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Li(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let h = 0; h < e.length; h++) i !== h && t[h] && (d += No(l, t[h]), c++);
    const u = d / Math.max(1, c);
    u > a && (a = u, n = i);
  }
  const s = new Set(e.map((i, l) => l)), o = [];
  for (o.push(n), s.delete(n); s.size; ) {
    let i = Array.from(s)[0], l = -1;
    for (const d of s) {
      const c = t[d];
      if (!c) continue;
      let u = 1 / 0;
      for (const h of o) {
        const m = t[h];
        if (m) {
          const b = No(c, m);
          b < u && (u = b);
        }
      }
      u > l && (l = u, i = d);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function Th() {
  return ua || (ua = Nh()), ua;
}
function Dh(e, t, n) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - n / 200, i = (u) => {
    const h = u * u * u;
    return h > 8856e-6 ? h : (u - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, d = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: d, Z: c };
}
function $h(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, s = e * -0.9689 + t * 1.8758 + n * 0.0415, o = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function Mh(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Ih(e, t) {
  const n = Li(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: s, Y: o, Z: i } = Dh(a, n.a, n.b), l = $h(s, o, i);
  return Mh(l.r, l.g, l.b);
}
function Lh() {
  const e = Th(), n = [12, -12, 24, -24].map((s) => e.map((o) => Ih(o, s))), a = [...e];
  return n.forEach((s) => a.push(...s)), a;
}
function Fh() {
  return (!fa || Ph()) && (fa = Lh(), Fi = Ii), fa;
}
let Fi = null;
function Ph() {
  return Fi !== Ii;
}
function gt(e) {
  const t = Fh();
  return t[e % t.length];
}
let dn = null, $n = null, Mn = null, In = null;
function Eh() {
  const e = Pn?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    dn = [];
    for (let o = 1; o <= 12; o++) {
      const i = t[String(o)]?.$value || t[String(o)]?.value;
      dn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    $n = {}, Object.keys(n).forEach((o) => {
      const i = n[o]?.$value || n[o]?.value;
      typeof i == "string" && ($n[o] = i);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    In = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (In[o] = i);
    }), Mn = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (Mn[o] = i);
    });
  }
}
function Hr() {
  (!dn || !$n || !Mn || !In) && Eh();
}
function Xt(e) {
  return Hr(), dn ? dn[e % dn.length] : "#212b32";
}
function Ah(e) {
  return Hr(), $n ? $n[e] : void 0;
}
function lr(e, t) {
  return Ah(e) || Xt(t);
}
const Ma = ["low", "moderate", "high", "critical"];
let pa = null;
function Rh() {
  const e = { color: { ...Br.color, ...Pn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return Ma.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (n[a] = s);
  }), n;
}
function Pi() {
  return pa || (pa = Rh()), pa;
}
function Bh(e) {
  return Pi()[e.toLowerCase()];
}
function Hh(e, t) {
  return Bh(e) || Pi()[Ma[t % Ma.length]] || gt(t);
}
function zh(e) {
  return Hr(), Mn ? Mn[e] : void 0;
}
function Wh(e, t) {
  return zh(e) || Xt(t);
}
const Ia = ["trust", "ambulance", "icb", "region"];
let ma = null;
function Oh() {
  const e = { color: { ...Br.color, ...Pn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return Ia.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (n[a] = s);
  }), n;
}
function Ei() {
  return ma || (ma = Oh()), ma;
}
function Uh(e) {
  return Ei()[e.toLowerCase()];
}
function Gh(e, t) {
  return Uh(e) || Ei()[Ia[t % Ia.length]] || gt(t);
}
function Vh(e) {
  return Hr(), In ? In[e] : void 0;
}
function Yh(e, t) {
  return Vh(e) || Xt(t);
}
let ga = null;
const qh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Xh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Kh() {
  const e = { color: { ...Br.color, ...Pn.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return qh.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? n[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function Zh() {
  return ga || (ga = Kh()), ga;
}
function Jh(e) {
  return Zh()[Xh(e)];
}
function un(e, t) {
  return Jh(e) || gt(t);
}
const Ai = K.createContext(null), En = () => K.useContext(Ai), Jx = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [s, o] = K.useState(() => new Set(e)), i = n !== void 0, l = K.useMemo(() => i ? new Set(n) : s, [i, n, s]), d = K.useCallback((u) => {
    i || o(new Set(u)), a?.(Array.from(u));
  }, [i, a]), c = K.useMemo(() => ({
    hiddenIds: l,
    isHidden: (u) => l.has(u),
    toggle: (u) => {
      const h = new Set(l);
      h.has(u) ? h.delete(u) : h.add(u), d(h);
    },
    showOnly: (u) => {
      d(/* @__PURE__ */ new Set());
    },
    showAll: () => d(/* @__PURE__ */ new Set()),
    setHidden: (u) => d(new Set(Array.isArray(u) ? u : Array.from(u)))
  }), [l, d]);
  return /* @__PURE__ */ r.jsx(Ai.Provider, { value: c, children: t });
}, Ri = K.createContext(null), zt = () => K.useContext(Ri), Qh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Jt(), s = En(), [o, i] = K.useState(null), l = K.useRef(/* @__PURE__ */ new Map()), [d, c] = K.useState([]), u = K.useCallback(
    (F, N) => {
      l.current.set(F, N);
    },
    []
  ), h = K.useCallback((F) => {
    l.current.delete(F);
  }, []), m = K.useCallback(
    (F, N) => {
      if (!a) return;
      const { xScale: x, yScale: w } = a;
      let k = null, g = 1 / 0;
      l.current.forEach((j, T) => {
        j.forEach((S, y) => {
          const I = x(S.x), te = w(S.y), z = I - F, B = te - N, G = Math.sqrt(z * z + B * B);
          G < g && (g = G, k = {
            seriesId: T,
            index: y,
            x: S.x,
            y: S.y,
            clientX: I,
            clientY: te
          });
        });
      }), k && g <= t ? i(k) : i(null);
    },
    [a, t]
  ), b = K.useCallback(() => i(null), []);
  K.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: F, yScale: N } = a, x = [];
    l.current.forEach((w, k) => {
      w.forEach((g, j) => {
        (o.x instanceof Date && g.x instanceof Date ? g.x.getTime() === o.x.getTime() : g.x === o.x) && x.push({
          seriesId: k,
          index: j,
          x: g.x,
          y: g.y,
          clientX: F(g.x),
          clientY: N(g.y)
        });
      });
    }), x.sort((w, k) => w.seriesId.localeCompare(k.seriesId)), c(x);
  }, [o, a]);
  const C = K.useCallback(
    (F) => {
      if (!o) return;
      const N = l.current.get(o.seriesId);
      if (!N) return;
      let x = o.index + F;
      if (x < 0 || x >= N.length) {
        if (!n) return;
        x = (x + N.length) % N.length;
      }
      const w = N[x];
      if (!a) return;
      const { xScale: k, yScale: g } = a;
      i({
        seriesId: o.seriesId,
        index: x,
        x: w.x,
        y: w.y,
        clientX: k(w.x),
        clientY: g(w.y)
      });
    },
    [o, a, n]
  ), v = K.useCallback(
    (F) => {
      let N = Array.from(l.current.keys());
      if (s && (N = N.filter((I) => !s.isHidden(I))), N.length === 0) return;
      if (!o) {
        const I = N[0], te = l.current.get(I);
        if (!te || !a) return;
        const { xScale: z, yScale: B } = a, G = te[0];
        i({
          seriesId: I,
          index: 0,
          x: G.x,
          y: G.y,
          clientX: z(G.x),
          clientY: B(G.y)
        });
        return;
      }
      const x = N.indexOf(o.seriesId);
      if (x === -1) return;
      let w = x + F;
      if (w < 0 || w >= N.length) {
        if (!n) return;
        w = (w + N.length) % N.length;
      }
      const k = N[w], g = l.current.get(k);
      if (!g || !a) return;
      const j = Math.min(o.index, g.length - 1), T = g[j], { xScale: S, yScale: y } = a;
      i({
        seriesId: k,
        index: j,
        x: T.x,
        y: T.y,
        clientX: S(T.x),
        clientY: y(T.y)
      });
    },
    [o, a, n, s]
  ), f = K.useCallback(() => {
    let F = Array.from(l.current.keys());
    if (s && (F = F.filter((j) => !s.isHidden(j))), F.length === 0) return;
    const N = o ? o.seriesId : F[0], x = l.current.get(N);
    if (!x || x.length === 0 || !a) return;
    const w = x[0], { xScale: k, yScale: g } = a;
    i({
      seriesId: N,
      index: 0,
      x: w.x,
      y: w.y,
      clientX: k(w.x),
      clientY: g(w.y)
    });
  }, [o, a, s]), p = K.useCallback(() => {
    let F = Array.from(l.current.keys());
    if (s && (F = F.filter((T) => !s.isHidden(T))), F.length === 0) return;
    const N = o ? o.seriesId : F[0], x = l.current.get(N);
    if (!x || x.length === 0 || !a) return;
    const w = x.length - 1, k = x[w], { xScale: g, yScale: j } = a;
    i({
      seriesId: N,
      index: w,
      x: k.x,
      y: k.y,
      clientX: g(k.x),
      clientY: j(k.y)
    });
  }, [o, a, s]), A = K.useCallback(
    () => C(1),
    [C]
  ), L = K.useCallback(
    () => C(-1),
    [C]
  ), D = K.useCallback(
    () => v(1),
    [v]
  ), H = K.useCallback(
    () => v(-1),
    [v]
  ), M = K.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: d,
      focusNearest: m,
      clear: b,
      registerSeries: u,
      unregisterSeries: h,
      focusNextPoint: A,
      focusPrevPoint: L,
      focusNextSeries: D,
      focusPrevSeries: H,
      focusFirstPoint: f,
      focusLastPoint: p
    }),
    [
      o,
      d,
      m,
      b,
      u,
      h,
      A,
      L,
      D,
      H,
      f,
      p
    ]
  );
  return /* @__PURE__ */ r.jsx(Ri.Provider, { value: M, children: e });
}, ep = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: s,
  focusIndex: o,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: d = 1,
  smooth: c = !0,
  gradientFillId: u,
  colors: h
}) => {
  const m = Jt();
  if (!m) return null;
  const { xScale: b, yScale: C } = m, f = En()?.isHidden(e.id) ?? !1, p = f && l === "fade";
  if (f && l === "remove")
    return null;
  const A = zt();
  K.useEffect(() => {
    if (!A) return;
    const N = e.data.map((x) => ({ x: i(x), y: x.y }));
    return A.registerSeries(e.id, N), () => A.unregisterSeries(e.id);
  }, [A, e.id, e.data, i]);
  const L = K.useMemo(
    () => $a(
      e.data,
      (N) => b(i(N)),
      (N) => C(N.y),
      { smooth: c }
    ),
    [e.data, b, C, i, c]
  ), D = K.useMemo(() => {
    if (!e.data.length) return "";
    const [N] = C.domain(), x = Da().x((w) => b(i(w))).y0(() => C(N)).y1((w) => C(w.y));
    return c && x.curve(ir), x(e.data) || "";
  }, [e.data, b, C, i, c]), H = h && h[t], M = e.color || H || (n === "region" ? un(e.id, t) : gt(t)), F = n === "region" ? lr(e.id, t) : Xt(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
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
            stroke: M,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((N, x) => {
          const w = b(i(N)), k = C(N.y), g = s ? 0 : -1, j = !p && (s && x === o || A?.focused?.seriesId === e.id && A.focused.index === x), T = () => {
            A && !p && A.setFocused({
              seriesId: e.id,
              index: x,
              x: i(N),
              y: N.y,
              clientX: w,
              clientY: k
            });
          }, S = () => {
            A && A.focused?.seriesId === e.id && A.focused.index === x && A.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: w,
              cy: k,
              r: j ? 5 : 3.5,
              stroke: j ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : F,
              strokeWidth: j ? 2 : 1,
              fill: j ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : M,
              className: "fdp-line-point",
              tabIndex: p ? -1 : g,
              "aria-label": `${e.label || e.id} ${i(N).toDateString()} value ${N.y}`,
              "data-series": e.id,
              "data-index": x,
              onMouseEnter: T,
              onFocus: T,
              onMouseLeave: S,
              onBlur: S
            },
            x
          );
        })
      ]
    }
  );
}, tp = ({ polite: e = !0, format: t }) => {
  const n = zt(), [a, s] = K.useState(""), o = K.useRef("");
  return K.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let d;
    if (l && l.length > 1) {
      const c = l.map((h) => `${h.seriesId} ${h.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : np(i.seriesId, i.x, i.y, i.index);
    if (d !== o.current) {
      o.current = d, s("");
      const c = setTimeout(() => s(d), 10);
      return () => clearTimeout(c);
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
function np(e, t, n, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${n}`;
}
const Qx = () => {
  const e = zt(), t = Ht();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(n.clientX, 0), s), l = Math.min(Math.max(n.clientY, 0), o), d = i + 8, c = l - 8, u = a.length > 1, h = n.x instanceof Date ? n.x.toDateString() : String(n.x), m = u ? h : `${h} • ${n.y}`, b = /\d+$/.exec(n.seriesId || ""), C = b ? parseInt(b[0], 10) - 1 : 0, v = gt(C >= 0 ? C : 0) || "#005eb8", f = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: f, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: f, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: v, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const A = a.map((F) => `${F.seriesId}: ${F.y}`), L = [m, ...A], D = L.reduce((F, N) => Math.max(F, N.length), 0), H = Math.max(90, D * 6.2 + 16), M = 16 * L.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: d, y: c - M, rx: 4, ry: 4, width: H, height: M, fill: "#212b32", opacity: 0.92 }),
        L.map((F, N) => /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - M + 6 + 16 * (N + 0.7), fill: "#fff", fontSize: 12, children: F }, N))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, eb = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: o,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: d
}) => {
  const c = En(), u = !!(c && !a && !l && o === void 0), h = a || u, m = e || [], b = o !== void 0, [C, v] = K.useState(new Set(i)), f = b ? new Set(o) : C, [p, A] = K.useState(""), L = (D) => {
    if (u && c) {
      const g = c.isHidden(D);
      c.toggle(D);
      const T = m.find((y) => y.id === D)?.label || D, S = d ? d(D, g, T) : `${T} ${g ? "shown" : "hidden"}`;
      A(S);
      return;
    }
    if (!h) return;
    const H = new Set(f), M = H.has(D);
    M ? H.delete(D) : H.add(D), b || v(H);
    const F = m.filter((g) => !H.has(g.id)).map((g) => g.id), N = Array.from(H);
    l?.(F, N);
    const w = m.find((g) => g.id === D)?.label || D, k = d ? d(D, M, w) : `${w} ${M ? "shown" : "hidden"}`;
    A(k);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: m.map((D, H) => {
      const M = D.palette || t, F = D.color || (M === "region" ? un(D.id, H) : M === "severity" ? Hh(D.id, H) : M === "org-level" ? Gh(D.id, H) : gt(H));
      let N = D.stroke || (M === "region" ? lr(D.id, H) : M === "severity" ? Wh(D.id, H) : M === "org-level" ? Yh(D.id, H) : Xt(H));
      if (s && N) {
        const k = N.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (N = "#212b32");
      }
      const x = u && c ? c.isHidden(D.id) : f.has(D.id), w = h ? {
        "aria-pressed": !x,
        "aria-label": `${D.label} (${x ? "show" : "hide"})`,
        onClick: () => L(D.id)
      } : { "aria-label": D.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${x ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: F,
              backgroundImage: D.patternDataUrl ? `url(${D.patternDataUrl})` : void 0,
              backgroundSize: D.patternDataUrl ? "auto" : void 0,
              borderColor: N
            },
            ...w
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: D.label })
      ] }, D.id);
    }) }),
    h && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: p })
  ] });
}, tb = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: s = !1,
  visibilityMode: o = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: d,
  gradientFill: c = !0,
  colors: u
}) => {
  const h = Jt();
  if (!h) return null;
  const { xScale: m, yScale: b } = h, v = En()?.isHidden(e.id) ?? !1, f = v && o === "fade";
  if (v && o === "remove") return null;
  const p = zt();
  K.useEffect(() => {
    if (!p) return;
    const F = e.data.map((N) => ({ x: a(N), y: N.y }));
    return p.registerSeries(e.id, F), () => p.unregisterSeries(e.id);
  }, [p, e.id, e.data, a]);
  const A = u && u[t], L = e.color || A || (n === "region" ? un(e.id, t) : gt(t)), D = K.useMemo(() => d && d.length === e.data.length ? $a(
    e.data,
    (F) => m(a(F)),
    (F) => {
      const N = e.data.indexOf(F);
      return b(d[N].y1);
    },
    { smooth: l }
  ) : $a(
    e.data,
    (F) => m(a(F)),
    (F) => b(F.y),
    { smooth: l }
  ), [e.data, d, m, b, a, l]), H = K.useMemo(() => {
    if (d && d.length === e.data.length) {
      const k = Da().x((g) => m(a(g))).y0((g, j) => b(d[j].y0)).y1((g, j) => b(d[j].y1));
      return l && k.curve(ir), k(e.data) || "";
    }
    const [F, N] = b.domain();
    let x = i;
    x < F ? x = F : x > N && (x = N);
    const w = Da().x((k) => m(a(k))).y0(() => b(x)).y1((k) => b(k.y));
    return l && w.curve(ir), w(e.data) || "";
  }, [e.data, d, m, b, a, i, l]), M = K.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: f ? 0.25 : 1,
      "aria-hidden": f ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: M, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: L, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: L, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: H,
            fill: c ? `url(#${M})` : L,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ r.jsx("path", { d: D, fill: "none", stroke: L, strokeWidth: 1 })
      ]
    }
  );
}, nb = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: s,
  focusable: o = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: d,
  adaptive: c = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: h = "remove",
  colorMode: m = "series",
  allSeries: b,
  stacked: C,
  gapRatio: v = 0.15,
  minBarWidth: f,
  gradientFill: p = !0,
  gradientStrokeMatch: A = !0,
  opacity: L = 1,
  fadedOpacity: D = 0.25,
  flatFillOpacity: H = 1,
  colors: M
}) => {
  const F = Math.max(0, v), N = Jt(), x = Ht();
  if (!N || !x) return null;
  const { xScale: w, yScale: k } = N, j = En()?.isHidden(e.id) ?? !1, T = j && h === "fade";
  if (j && h === "remove") return null;
  const S = zt();
  K.useEffect(() => {
    if (!S) return;
    const ee = e.data.map((_) => ({ x: s(_), y: _.y }));
    return S.registerSeries(e.id, ee), () => S.unregisterSeries(e.id);
  }, [S, e.id, e.data, s]);
  const y = typeof w.bandwidth == "function", I = y ? w.bandwidth() : void 0, te = K.useMemo(() => {
    if (I != null) return I;
    const ee = b && b.length ? b : [e], _ = [];
    ee.forEach((O) => {
      O.data.forEach((Y) => {
        const ae = w(s(Y));
        Number.isFinite(ae) && _.push(ae);
      });
    });
    const E = _.sort((O, Y) => O - Y);
    if (E.length <= 1) return 40;
    const $ = [];
    for (let O = 1; O < E.length; O++)
      $.push(E[O] - E[O - 1]);
    return $.sort((O, Y) => O - Y), ($[Math.floor($.length / 2)] || 40) * i;
  }, [e.data, b, w, s, i, I]), { basePerBar: z } = K.useMemo(() => {
    if (y) {
      const E = te, $ = Math.max(
        1,
        (E - l * (n - 1)) / n
      ), Q = e.barWidth ?? d;
      let O = Q ? Math.min(Q, E) : $;
      if (c) {
        const Y = E * Math.min(1, Math.max(0.05, u)), ae = Math.max(
          1,
          (Y - l * (n - 1)) / n
        );
        O = Q ? Math.min(O, ae) : ae;
      }
      return { basePerBar: O };
    }
    const ee = e.barWidth ?? d, _ = Math.max(
      1,
      (te - l * (n - 1)) / n
    );
    if (c) {
      const E = b && b.length ? b : [e], $ = [];
      E.forEach(
        (pe) => pe.data.forEach((ve) => {
          const de = w(s(ve));
          Number.isFinite(de) && $.push(de);
        })
      ), $.sort((pe, ve) => pe - ve);
      const Q = [];
      for (let pe = 1; pe < $.length; pe++)
        Q.push($[pe] - $[pe - 1]);
      Q.sort((pe, ve) => pe - ve);
      const Y = (Q[Math.floor(Q.length / 2)] || te) * Math.min(1, Math.max(0.05, u)), ae = Math.max(
        1,
        (Y - l * (n - 1)) / n
      );
      return { basePerBar: ee ? Math.min(ee, ae) : ae };
    }
    return ee ? { basePerBar: Math.min(ee, _) } : { basePerBar: _ };
  }, [
    y,
    te,
    l,
    n,
    d,
    e.barWidth,
    c,
    u,
    b,
    w,
    s
  ]), B = K.useMemo(() => {
    if (y) return [];
    const ee = [];
    return (b && b.length ? b : [e]).forEach(
      (E) => E.data.forEach(($) => {
        const Q = w(s($));
        Number.isFinite(Q) && ee.push(Q);
      })
    ), ee.sort((E, $) => E - $), Array.from(new Set(ee));
  }, [y, b, e, w, s]), G = K.useMemo(() => {
    if (y)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: x.innerWidth }
      ];
    const ee = [];
    for (let _ = 0; _ < B.length; _++) {
      const E = B[_], $ = _ === 0 ? 0 : (B[_ - 1] + E) / 2, Q = _ === B.length - 1 ? x.innerWidth : (E + B[_ + 1]) / 2;
      ee.push({
        center: E,
        left: Math.max(0, $),
        right: Math.min(x.innerWidth, Q)
      });
    }
    return ee;
  }, [y, B, x.innerWidth]), R = K.useMemo(() => {
    if (y || !G.length)
      return;
    const ee = Math.min(1, Math.max(0.05, i)), _ = G.map((Y) => Math.max(2, Y.right - Y.left)), E = _.map(
      (Y) => Math.max(2, Math.min(Y - 1, Y * ee))
    );
    let $ = Math.min(...E);
    if (f)
      if (n <= 1) {
        const Y = Math.min(..._.map((ae) => ae - 1));
        Y >= f && $ < f && ($ = Math.min(Y, f));
      } else {
        const Y = Math.min(..._.map((he) => he - 1)), ae = f * n + (n - 1) * (f * F);
        ae <= Y && $ < ae && ($ = ae);
      }
    if (n <= 1)
      return f && $ < f && _.every((ae) => ae >= f) ? { groupWidth: f, barWidth: f } : { groupWidth: $, barWidth: $ };
    let Q = $ / (n + (n - 1) * F);
    return Q < 1 && (Q = 1), f && Q < f && f * n + (n - 1) * (f * F) <= $ && (Q = f), { groupWidth: Q * n + (n - 1) * (Q * F), barWidth: Q };
  }, [
    y,
    G,
    i,
    n,
    F,
    f
  ]), re = M && M[t] ? M[t] : void 0, U = e.color || re || (a === "region" ? un(e.id, t) : gt(t)), ce = a === "region" ? lr(e.id, t) : Xt(t), _e = A && (e.color || re) ? U : ce, ie = Number.isFinite(k(0)) ? k(0) : k.range()[0], le = K.useId();
  return C && C.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: T ? D : L,
      "aria-hidden": T ? !0 : void 0,
      children: [
        p && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: le,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: U, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: U,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
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
        e.data.map((ee, _) => {
          const E = s(ee), $ = w(y ? ee.x : E);
          let Q, O;
          if (y)
            Q = te, O = $;
          else {
            const oe = G.find(
              (se) => Math.abs(se.center - $) < 0.5
            );
            if (!oe || !R)
              Q = z, O = $ - z / 2;
            else {
              const { groupWidth: se } = R;
              Q = se;
              let P = $ - se / 2;
              P < oe.left && (P = oe.left), P + se > oe.right && (P = Math.max(oe.left, oe.right - se)), O = P;
            }
          }
          const Y = C[_], ae = k(Y.y0), he = k(Y.y1), pe = Math.min(ae, he), ve = Math.abs(he - ae) || 1;
          if (!y && f && Q < f) {
            const oe = G.find(
              (se) => Math.abs(se.center - $) < 0.5
            );
            if (oe) {
              const se = Math.max(2, oe.right - oe.left - 1), P = Math.min(se, f);
              P > Q && (Q = P, O = Math.max(
                oe.left,
                Math.min(oe.right - Q, $ - Q / 2)
              ));
            }
          }
          const de = !T && S?.focused?.seriesId === e.id && S.focused.index === _, q = () => {
            !S || T || S.setFocused({
              seriesId: e.id,
              index: _,
              x: E,
              y: Y.y1 - Y.y0,
              clientX: O + Q / 2,
              clientY: pe
            });
          }, V = () => {
            S?.focused?.seriesId === e.id && S.focused.index === _ && S.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: O,
              y: pe,
              width: Q,
              height: ve,
              fill: p ? `url(#${le})` : U,
              ...p ? {} : { fillOpacity: H },
              stroke: de ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : p && A ? U : void 0,
              strokeWidth: de ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: T || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${E instanceof Date ? E.toDateString() : E} value ${Y.y1 - Y.y0}`,
              onMouseEnter: q,
              onFocus: q,
              onMouseLeave: V,
              onBlur: V
            },
            _
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: T ? D : L,
      "aria-hidden": T ? !0 : void 0,
      children: [
        p && /* @__PURE__ */ r.jsxs("defs", { children: [
          m === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: le,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: U, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: U,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
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
          m === "category" && e.data.map((ee, _) => {
            const $ = M && M[_] || (a === "region" ? un(String(ee.x), _) : gt(_)), Q = `${le}-${_}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: Q,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: $, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: $, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: $, stopOpacity: 0.06 })
                ]
              },
              Q
            );
          })
        ] }),
        e.data.map((ee, _) => {
          const E = s(ee), $ = w(y ? ee.x : E);
          let Q, O;
          if (y) {
            const J = te;
            if (n <= 1)
              O = J, Q = $;
            else {
              O = Math.max(
                1,
                J / (n + (n - 1) * F)
              );
              const ne = O * F, X = O * n + ne * (n - 1);
              Q = $ + (J - X) / 2 + t * (O + ne);
            }
          } else {
            const J = G.find((ne) => ne.center === $);
            if (!J || !R)
              O = z, Q = $ - z / 2, f && O < f && (O = f, Q = $ - O / 2);
            else {
              const { barWidth: ne } = R;
              O = ne;
              const X = n > 1 ? ne * F : 0, Z = O * n + X * (n - 1);
              let ye = $ - Z / 2;
              ye < J.left && (ye = J.left), ye + Z > J.right && (ye = Math.max(J.left, J.right - Z)), Q = ye + t * (O + X);
            }
            if (f && O < f) {
              const ne = G.find(
                (X) => Math.abs(X.center - $) < 0.5
              );
              if (ne) {
                const X = Math.max(2, ne.right - ne.left - 1), Z = Math.min(X, f);
                if (Z > O)
                  if (n <= 1)
                    O = Z, Q = Math.max(
                      ne.left,
                      Math.min(ne.right - O, $ - O / 2)
                    );
                  else {
                    const ye = Z * F, Se = Z * n + ye * (n - 1);
                    if (Se <= ne.right - ne.left - 1) {
                      O = Z;
                      const ke = Se;
                      let Ne = $ - ke / 2;
                      Ne < ne.left && (Ne = ne.left), Ne + ke > ne.right && (Ne = Math.max(
                        ne.left,
                        ne.right - ke
                      )), Q = Ne + t * (O + ye);
                    }
                  }
              }
            }
          }
          const Y = Q + O / 2, ae = k(ee.y), he = Math.min(ie, ae), pe = Math.abs(ie - ae), ve = !T && S?.focused?.seriesId === e.id && S.focused.index === _, de = () => {
            !S || T || S.setFocused({
              seriesId: e.id,
              index: _,
              x: E,
              y: ee.y,
              clientX: Y,
              clientY: ae
            });
          }, q = () => {
            S?.focused?.seriesId === e.id && S.focused.index === _ && S.clear();
          }, V = m === "category" && M ? M[_] : void 0, oe = m === "category" ? V || (a === "region" ? un(String(ee.x), _) : gt(_)) : U, se = m === "category" ? `${le}-${_}` : le, P = p && A ? oe : m === "category" ? a === "region" ? lr(String(ee.x), _) : Xt(_) : _e, W = ve ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : P || oe;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: Q,
              y: he,
              width: O,
              height: pe || 1,
              fill: p ? `url(#${se})` : oe,
              ...p ? {} : { fillOpacity: H },
              stroke: W,
              strokeWidth: ve ? 2 : 1,
              className: "fdp-bar",
              tabIndex: T || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${E instanceof Date ? E.toDateString() : E} value ${ee.y}`,
              onMouseEnter: de,
              onFocus: de,
              onMouseLeave: q,
              onBlur: q
            },
            _
          );
        })
      ]
    }
  );
}, rb = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = Ht(), d = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, u = K.useMemo(() => e.flatMap((f) => f.data), [e]), h = K.useMemo(() => {
    const f = /* @__PURE__ */ new Set();
    return u.forEach((p) => f.add(p.x)), Array.from(f);
  }, [u]), m = K.useMemo(
    () => Math.max(0, ...u.map((f) => f.y)),
    [u]
  ), b = K.useMemo(
    () => Uo().domain(h).range([0, d]).paddingInner(a).paddingOuter(s),
    [h, d, a, s]
  ), C = K.useMemo(
    () => Qn().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), v = K.useMemo(
    () => ({
      xScale: b,
      yScale: C,
      getXTicks: () => h,
      getYTicks: (f = i) => C.ticks(f)
    }),
    [b, C, h, i]
  );
  return /* @__PURE__ */ r.jsx(xs.Provider, { value: v, children: o });
}, ab = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = K.useId(), c = o || d, u = t ? `${c}-desc` : void 0, h = n ? `${c}-src` : void 0, m = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: c,
      className: sr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": sr(u, h),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !m && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(dt, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(dt, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: h, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, sb = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const s = K.useRef(null);
  return K.useEffect(() => {
    const o = s.current;
    if (!o) return;
    const i = () => {
      const l = Array.from(o.querySelectorAll(e));
      if (l.length === 0) return;
      const d = [];
      l.forEach((c) => {
        c.classList.contains("fdp-chart--enhanced") || (c.classList.add("fdp-chart--enhanced"), d.push(c));
      }), d.length && t && t(d);
    };
    if (n > 0) {
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: s, children: a });
}, ob = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: s = "neutral",
  variant: o = "default",
  subtitle: i,
  metadata: l,
  trendData: d,
  loading: c = !1,
  error: u,
  valueFormatter: h,
  className: m,
  id: b,
  announceDelta: C = !0
}) => {
  const v = K.useId(), f = b || v, p = `${f}-label`, A = `${f}-value`, L = `${f}-delta`, D = typeof t == "number" && !Number.isNaN(t), H = c ? "—" : u ? "" : D ? h ? h(t) : t.toLocaleString() : t;
  let M, F = "", N = "";
  if (a && !c && !u) {
    M = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const x = Math.abs(a.value), w = M === "up" ? `+${x}` : M === "down" ? `-${x}` : "0", k = a.isPercent ? "%" : "";
    if (F = `${w}${k}`, a.ariaLabel)
      N = a.ariaLabel;
    else {
      const g = a.invert ? M === "down" : M === "up";
      N = `${M === "neutral" ? "no change" : M === "up" ? "up" : "down"} ${x}${k}${M === "neutral" ? "" : g ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: sr(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        c && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        m
      ),
      role: "group",
      "aria-labelledby": p,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: p, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: A, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: H }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: L,
              "aria-label": N,
              className: sr(
                "fdp-metric-card__delta",
                M && `fdp-metric-card__delta--${M}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: F }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        C && a && !a.ariaLabel && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: N })
      ] })
    }
  );
}, be = (e) => typeof e == "number" && Number.isFinite(e), rp = (e) => e.reduce((t, n) => t + n, 0), pt = (e) => e.length ? rp(e) / e.length : NaN;
function Bi(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!t[s] && be(o)) {
      if (a !== null) {
        const i = e[a];
        n[s] = be(i) ? Math.abs(o - i) : null;
      }
      a = s;
    }
  }
  return n;
}
function Hi(e, t) {
  const n = e.filter((o) => be(o));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = pt(n), s = 3.267 * a;
  if (t) {
    const o = n.filter((i) => i <= s);
    o.length && o.length !== n.length && (a = pt(o), s = 3.267 * a);
  }
  return { mrMean: a, mrUcl: s };
}
function ap(e, t) {
  if (!be(e) || !be(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = 2.66, a = 2 / 3 * n, s = 1 / 3 * n;
  return {
    upperProcessLimit: e + n * t,
    lowerProcessLimit: e - n * t,
    upperTwoSigma: e + a * t,
    lowerTwoSigma: e - a * t,
    upperOneSigma: e + s * t,
    lowerOneSigma: e - s * t
  };
}
const sp = 0.2777, op = 3.6, ip = (e) => be(e) && e >= 0 ? Math.pow(e, sp) : null, Ot = (e) => be(e) && e >= 0 ? Math.pow(e, op) : null;
function lp(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const nn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function cp(e) {
  if (!be(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), n = (u) => lp(u, t) - 1, a = n(0.5), s = Math.max(0, n(nn.three.low)), o = n(nn.three.high), i = Math.max(0, n(nn.one.low)), l = n(nn.one.high), d = Math.max(0, n(nn.two.low)), c = n(nn.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: d, twoHigh: c };
}
function dp(e, t, n) {
  const a = e.map((N) => be(N) ? ip(N) : null), s = Bi(a, t), { mrMean: o } = Hi(s, !!n), i = a.filter((N, x) => !t[x] && be(N)), l = i.length ? pt(i) : NaN;
  if (!be(l) || !be(o))
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
  const d = 2.66, c = 2 / 3 * d, u = 1 / 3 * d, h = l + d * o, m = l - d * o, b = l + c * o, C = l - c * o, v = l + u * o, f = l - u * o, p = Ot(l), A = Ot(h), L = m <= 0 ? null : Ot(m), D = Ot(v), H = f <= 0 ? null : Ot(f), M = Ot(b), F = C <= 0 ? null : Ot(C);
  return {
    center: p ?? null,
    upperProcessLimit: A ?? null,
    lowerProcessLimit: L ?? null,
    upperTwoSigma: M ?? null,
    lowerTwoSigma: F ?? null,
    upperOneSigma: D ?? null,
    lowerOneSigma: H ?? null,
    mr: s,
    mrMean: o,
    mrUcl: be(o) ? 3.267 * o : null
  };
}
var bs = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(bs || {}), Re = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Re || {}), He = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(He || {});
const ys = [
  // rank 1..n (order matters)
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], To = ys.reduce((e, t, n) => (e[t] = n + 1, e), {}), up = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, fp = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, cr = ys.reduce((e, t, n) => (e[t] = {
  id: t,
  rank: n + 1,
  label: up[t],
  category: fp[t],
  participatesInRanking: !0
}, e), {});
ys.map((e) => cr[e]);
var an = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(an || {}), La = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(La || {}), Bt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Bt || {}), sn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(sn || {}), zi = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(zi || {}), At = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(At || {}), Wi = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Wi || {}), Oi = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Oi || {});
function hp(e) {
  const t = [], n = [];
  e.specialCauseSinglePointUp && t.push(
    "single_point"
    /* SinglePoint */
  ), e.specialCauseSinglePointDown && n.push(
    "single_point"
    /* SinglePoint */
  ), e.specialCauseTwoOfThreeUp && t.push(
    "two_sigma"
    /* TwoSigma */
  ), e.specialCauseTwoOfThreeDown && n.push(
    "two_sigma"
    /* TwoSigma */
  ), e.specialCauseShiftUp && t.push(
    "shift"
    /* Shift */
  ), e.specialCauseShiftDown && n.push(
    "shift"
    /* Shift */
  ), e.specialCauseTrendUp && t.push(
    "trend"
    /* Trend */
  ), e.specialCauseTrendDown && n.push(
    "trend"
    /* Trend */
  );
  const a = t.reduce((o, i) => Math.max(o, cr[i].rank), 0), s = n.reduce((o, i) => Math.max(o, cr[i].rank), 0);
  return { upRules: t, downRules: n, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: n.length > 0 };
}
var Ui = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Ui || {});
function pp(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function mp(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((u, h) => ({ idx: h, value: u.value })).filter((u) => be(u.value));
  if (s.length < a * 2) return;
  const o = n === "Up" || n === "Neither", i = n === "Down";
  function l(u, h) {
    const m = s.slice(u, h).map((b) => b.value);
    return m.length ? pt(m) : NaN;
  }
  let d = null;
  if (s.length > 1) {
    const u = [];
    for (let m = 1; m < s.length; m++) u.push(Math.abs(s[m].value - s[m - 1].value));
    const h = pt(u);
    be(h) && h > 0 && (d = h * (2.66 / 3));
  }
  if (!d || d <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let u = a; u <= s.length - a; u++) {
    const h = u - a, m = l(h, u), b = l(u, u + a);
    if (!be(m) || !be(b)) continue;
    const v = (b - m) / d;
    if (!(o ? v >= c : i ? -v >= c : Math.abs(v) >= c)) continue;
    const p = s.slice(u, u + a).map((D) => D.value);
    if (!(o ? p.every((D) => D > m) : i ? p.every((D) => D < m) : p.every((D) => o ? D > m : D < m))) continue;
    const L = s[u].idx;
    e[L].baseline || (e[L].baseline = !0);
    return;
  }
}
function Gi(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, s = n.precedence ?? {}, o = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, d = n.capability ?? {}, c = n.grace ?? {}, u = n.baselineSuggest ?? {}, h = n.autoRecalc ?? {}, m = c.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingDirectionGrace, b = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseClusterRules, C = globalThis;
  t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !C.__spc_warn_emergingDirectionGrace && (C.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !C.__spc_warn_collapseClusterRules && (C.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const v = (A) => {
    const L = {};
    for (const D of Object.keys(A)) {
      const H = A[D];
      H !== void 0 && (L[D] = H);
    }
    return L;
  }, f = v({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: b ?? t.collapseWeakerClusterRules,
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
    assuranceCapabilityMode: d.assuranceCapabilityMode ?? t.assuranceCapabilityMode,
    // Grace
    emergingGraceEnabled: m,
    emergingDirectionGrace: m,
    // Baseline suggestions
    baselineSuggest: u.enabled ?? t.baselineSuggest,
    baselineSuggestMinDeltaSigma: u.minDeltaSigma ?? t.baselineSuggestMinDeltaSigma,
    baselineSuggestStabilityPoints: u.stabilityPoints ?? t.baselineSuggestStabilityPoints,
    baselineSuggestMinGap: u.minGap ?? t.baselineSuggestMinGap,
    baselineSuggestScoreThreshold: u.scoreThreshold ?? t.baselineSuggestScoreThreshold,
    // Auto recalculation
    autoRecalculateAfterShift: h.enabled ?? t.autoRecalculateAfterShift,
    autoRecalculateShiftLength: h.shiftLength ?? t.autoRecalculateShiftLength,
    autoRecalculateDeltaSigma: h.deltaSigma ?? t.autoRecalculateDeltaSigma
  }), p = { ...f, ...v(t) };
  return m !== void 0 && (p.emergingGraceEnabled = m, p.emergingDirectionGrace = m), f.collapseWeakerClusterRules !== void 0 && (p.collapseWeakerClusterRules = f.collapseWeakerClusterRules, p.collapseClusterRules = f.collapseWeakerClusterRules), v(p);
}
function vs(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: s = {}
  } = e, o = Gi(s), i = {
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
    precedenceStrategy: "directional_first",
    emergingDirectionGrace: !1,
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((f, p) => ({
    rowId: p + 1,
    x: f.x,
    value: be(f.value) ? f.value : null,
    ghost: !!f.ghost,
    baseline: !!f.baseline,
    target: be(f.target) ? f.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      mp(l, o, n);
    } catch {
    }
  const d = pp(l), c = [], u = [], m = l.filter(
    (f) => !f.ghost && be(f.value)
  ).length >= (i.minimumPoints ?? 13);
  let b = 0;
  const C = {};
  for (const f of d) {
    b++;
    const p = f.map((g) => g.value), A = f.map((g) => g.ghost);
    let L = new Array(p.length).fill(null), D = NaN, H = NaN, M = NaN, F = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      L = Bi(p, A);
      const g = p.filter(
        (T, S) => !A[S] && be(T)
      );
      D = g.length ? pt(g) : NaN;
      const j = Hi(
        L,
        !!i.excludeMovingRangeOutliers
      );
      H = j.mrMean, M = j.mrUcl, F = ap(D, H);
    } else if (t === "T") {
      const g = dp(
        p,
        A,
        !!i.excludeMovingRangeOutliers
      );
      L = g.mr, H = g.mrMean ?? NaN, M = g.mrUcl ?? NaN, D = g.center ?? NaN, F = {
        upperProcessLimit: g.upperProcessLimit,
        lowerProcessLimit: g.lowerProcessLimit,
        upperTwoSigma: g.upperTwoSigma,
        lowerTwoSigma: g.lowerTwoSigma,
        upperOneSigma: g.upperOneSigma,
        lowerOneSigma: g.lowerOneSigma
      };
    } else if (t === "G") {
      const g = p.filter(
        (S, y) => !A[y] && be(S)
      ), j = g.length ? pt(g) : NaN, T = cp(j);
      D = T.cl ?? NaN, F = {
        upperProcessLimit: T.ucl,
        lowerProcessLimit: T.lcl,
        upperTwoSigma: T.twoHigh,
        lowerTwoSigma: T.twoLow,
        upperOneSigma: T.oneHigh,
        lowerOneSigma: T.oneLow
      }, L = new Array(p.length).fill(null), H = NaN, M = NaN;
    } else
      u.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const N = f.map((g, j) => {
      const T = !g.ghost && be(g.value) ? p.slice(0, j + 1).filter((te, z) => !A[z] && be(te)).length : 0, S = m, y = S ? F : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: g.rowId,
        x: g.x,
        value: be(g.value) ? g.value : null,
        ghost: g.ghost,
        partitionId: b,
        pointRank: T,
        mean: S && be(D) ? D : null,
        mr: be(L[j]) ? L[j] : null,
        mrMean: S && be(H) ? H : null,
        mrUcl: S && be(M) ? M : null,
        upperProcessLimit: be(y.upperProcessLimit) ? y.upperProcessLimit : null,
        lowerProcessLimit: be(y.lowerProcessLimit) ? y.lowerProcessLimit : null,
        upperTwoSigma: be(y.upperTwoSigma) ? y.upperTwoSigma : null,
        lowerTwoSigma: be(y.lowerTwoSigma) ? y.lowerTwoSigma : null,
        upperOneSigma: be(y.upperOneSigma) ? y.upperOneSigma : null,
        lowerOneSigma: be(y.lowerOneSigma) ? y.lowerOneSigma : null,
        target: be(g.target) ? g.target : null,
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
        variationIcon: "none",
        assuranceIcon: "none",
        upperBaseline: S && be(D) ? D : null,
        lowerBaseline: S && be(D) ? D : null,
        movingRangeHighPointValue: S && be(M) ? M : null,
        ghostValue: g.ghost && be(g.value) ? g.value : null,
        ghostFlag: !!g.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    C[b] = N.filter(
      (g) => !g.ghost && be(g.value)
    ).length;
    const x = i.specialCauseShiftPoints ?? 6, w = i.specialCauseTrendPoints ?? 6, k = [];
    for (let g = 0; g < N.length; g++) {
      const j = N[g], T = j.value;
      if (!j.ghost && be(T) && k.push(g), !(be(j.mean) && be(j.upperProcessLimit) && be(j.lowerProcessLimit)) || j.ghost || !be(T)) {
        c.push(j);
        continue;
      }
      j.specialCauseSinglePointUp = be(j.upperProcessLimit) ? T > j.upperProcessLimit : !1, j.specialCauseSinglePointDown = be(j.lowerProcessLimit) ? T < j.lowerProcessLimit : !1, c.push(j);
    }
    if (k.length) {
      const g = (S) => N[S];
      let j = [], T = [];
      for (const S of k) {
        const y = g(S);
        if (!be(y.mean) || !be(y.value)) {
          j = [], T = [];
          continue;
        }
        if (y.value > y.mean ? (j.push(S), T = []) : y.value < y.mean ? (T.push(S), j = []) : (j = [], T = []), j.length >= x)
          for (const I of j) {
            const te = g(I);
            te.specialCauseShiftUp = !0;
          }
        if (T.length >= x)
          for (const I of T) {
            const te = g(I);
            te.specialCauseShiftDown = !0;
          }
      }
      for (let S = 0; S <= k.length - 3; S++) {
        const I = k.slice(S, S + 3).map(g);
        if (!I.every((ie) => be(ie.mean) && be(ie.value))) continue;
        const te = I[0].mean, z = I.every((ie) => ie.value > te), B = I.every((ie) => ie.value < te);
        if (!z && !B) continue;
        const G = I[0].upperTwoSigma ?? 1 / 0, R = I[0].lowerTwoSigma ?? -1 / 0, re = I[0].upperProcessLimit ?? 1 / 0, U = I[0].lowerProcessLimit ?? -1 / 0, ce = I.filter((ie) => ie.value > G && ie.value <= re), _e = I.filter((ie) => ie.value < R && ie.value >= U);
        if (z && ce.length >= 2)
          for (const ie of ce)
            ie.specialCauseTwoOfThreeUp = !0;
        if (B && _e.length >= 2)
          for (const ie of _e)
            ie.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let S = 0; S <= k.length - 5; S++) {
          const I = k.slice(S, S + 5).map(g);
          if (!I.every((re) => be(re.mean) && be(re.value))) continue;
          const te = I[0].mean;
          if (!I.every((re) => re.value > te) && !I.every((re) => re.value < te)) continue;
          const z = I[0].upperOneSigma ?? 1 / 0, B = I[0].lowerOneSigma ?? -1 / 0, G = I.filter((re) => re.value > z), R = I.filter((re) => re.value < B);
          if (I.every((re) => re.value > te) && G.length >= 4)
            for (const re of G)
              re.specialCauseFourOfFiveUp = !0;
          if (I.every((re) => re.value < te) && R.length >= 4)
            for (const re of R)
              re.specialCauseFourOfFiveDown = !0;
        }
      for (let S = 0; S <= k.length - w; S++) {
        const y = k.slice(S, S + w), I = y.map(g);
        if (!I.every((B) => be(B.value))) continue;
        let te = !0, z = !0;
        for (let B = 1; B < I.length && (I[B].value > I[B - 1].value || (te = !1), I[B].value < I[B - 1].value || (z = !1), !(!te && !z)); B++)
          ;
        if (te) for (const B of y) {
          const G = g(B);
          G.specialCauseTrendUp = !0;
        }
        if (z) for (const B of y) {
          const G = g(B);
          G.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let S = [];
        for (const y of k) {
          const I = g(y);
          if (!be(I.value) || !be(I.mean) || !be(I.upperOneSigma) || !be(I.lowerOneSigma)) {
            S = [];
            continue;
          }
          if (!(I.value < I.upperOneSigma && I.value > I.lowerOneSigma)) {
            S = [];
            continue;
          }
          if (S.push(y), S.length >= 15) {
            const z = S.map(g), B = z.some((R) => R.value > R.mean), G = z.some((R) => R.value < R.mean);
            if (B && G)
              for (const R of S) g(R).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const g = i.maximumPointsPartition;
      let j = 0;
      for (const T of c.filter((S) => S.partitionId === b))
        !T.ghost && be(T.value) && j++, j > g && (T.mean = T.upperProcessLimit = T.lowerProcessLimit = null, T.upperTwoSigma = T.lowerTwoSigma = T.upperOneSigma = T.lowerOneSigma = null);
    }
  }
  for (const f of c) {
    if (f.ruleTags && f.ruleTags.length) continue;
    const p = [];
    f.specialCauseShiftUp && p.push(
      "shift_high"
      /* ShiftHigh */
    ), f.specialCauseShiftDown && p.push(
      "shift_low"
      /* ShiftLow */
    ), f.specialCauseTrendUp && p.push(
      "trend_inc"
      /* TrendIncreasing */
    ), f.specialCauseTrendDown && p.push(
      "trend_dec"
      /* TrendDecreasing */
    ), f.specialCauseSinglePointUp && p.push(
      "single_above"
      /* SinglePointAbove */
    ), f.specialCauseSinglePointDown && p.push(
      "single_below"
      /* SinglePointBelow */
    ), f.specialCauseTwoOfThreeUp && p.push(
      "two_of_three_above"
      /* TwoOfThreeAbove */
    ), f.specialCauseTwoOfThreeDown && p.push(
      "two_of_three_below"
      /* TwoOfThreeBelow */
    ), f.specialCauseFourOfFiveUp && p.push(
      "four_of_five_above"
      /* FourOfFiveAbove */
    ), f.specialCauseFourOfFiveDown && p.push(
      "four_of_five_below"
      /* FourOfFiveBelow */
    ), f.specialCauseFifteenInnerThird && p.push(
      "fifteen_inner_third"
      /* FifteenInnerThird */
    ), p.length && (f.ruleTags = p);
  }
  for (let f = 0; f < c.length; f++) {
    const p = c[f];
    if (Object.prototype.hasOwnProperty.call(
      p,
      "improvementValueBeforePruning"
      /* ImprovementValueBeforePruning */
    ) || Object.defineProperty(p, "improvementValueBeforePruning", {
      get() {
        return p.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(
      p,
      "concernValueBeforePruning"
      /* ConcernValueBeforePruning */
    ) || Object.defineProperty(p, "concernValueBeforePruning", {
      get() {
        return p.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), p.ghost || !be(p.value) || p.mean === null) {
      p.variationIcon = "none";
      continue;
    }
    const A = p.value > p.mean, L = p.value < p.mean;
    i.collapseClusterRules && (p.specialCauseTwoOfThreeUp && p.specialCauseFourOfFiveUp && (p.specialCauseTwoOfThreeUp = !1), p.specialCauseTwoOfThreeDown && p.specialCauseFourOfFiveDown && (p.specialCauseTwoOfThreeDown = !1));
    const D = p.specialCauseTrendUp && A, H = p.specialCauseTrendDown && L, M = p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || D, F = p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || H;
    let N = !1;
    if (i.precedenceStrategy === "directional_first" && i.emergingDirectionGrace) {
      const w = i.specialCauseTrendPoints || 6;
      if (w > 1 && !(p.specialCauseTrendUp || p.specialCauseTrendDown)) {
        const k = w - 1, g = [];
        for (let j = f; j >= 0 && g.length < k; j--) {
          const T = c[j];
          !T.ghost && be(T.value) && T.mean !== null && g.unshift(T);
        }
        if (g.length === k) {
          let j = !0;
          for (let T = 1; T < g.length && j; T++)
            n === "Up" ? g[T].value > g[T - 1].value || (j = !1) : n === "Down" && g[T].value < g[T - 1].value || (j = !1);
          N = j;
        }
      }
    }
    if (i.precedenceStrategy === "directional_first") {
      const k = n === "Up" ? M : n === "Down" ? F : !1, g = n === "Up" ? F : n === "Down" ? M : !1;
      k && !g ? p.variationIcon = "improvement" : g && !k ? p.variationIcon = N ? "neither" : "concern" : k && g ? p.variationIcon = N || p.specialCauseTrendUp || p.specialCauseTrendDown ? "improvement" : "neither" : p.variationIcon = "neither";
    } else
      n === "Up" ? p.variationIcon = M ? "improvement" : F ? "concern" : "neither" : n === "Down" ? p.variationIcon = F ? "improvement" : M ? "concern" : "neither" : p.variationIcon = "neither";
    const x = M || F;
    if (p.specialCauseImprovementValue = x && p.variationIcon === "improvement" ? p.value : null, p.specialCauseConcernValue = x && p.variationIcon === "concern" ? p.value : null, p.specialCauseNeitherValue = x && p.variationIcon === "neither" ? p.value : null, i.conflictPrecedenceMode === "sql_ranking_v2_6a" && p.specialCauseImprovementValue !== null && p.specialCauseConcernValue !== null) {
      const w = [];
      p.specialCauseSinglePointUp && w.push({
        id: "single_point",
        rank: 1,
        side: "up"
        /* Up */
      }), p.specialCauseSinglePointDown && w.push({
        id: "single_point",
        rank: 1,
        side: "down"
        /* Down */
      }), p.specialCauseTwoOfThreeUp && w.push({
        id: "two_sigma",
        rank: 2,
        side: "up"
        /* Up */
      }), p.specialCauseTwoOfThreeDown && w.push({
        id: "two_sigma",
        rank: 2,
        side: "down"
        /* Down */
      }), p.specialCauseShiftUp && w.push({
        id: "shift",
        rank: 3,
        side: "up"
        /* Up */
      }), p.specialCauseShiftDown && w.push({
        id: "shift",
        rank: 3,
        side: "down"
        /* Down */
      }), p.specialCauseTrendUp && w.push({
        id: "trend",
        rank: 4,
        side: "up"
        /* Up */
      }), p.specialCauseTrendDown && w.push({
        id: "trend",
        rank: 4,
        side: "down"
        /* Down */
      });
      const k = w.filter(
        (z) => z.side === "up"
        /* Up */
      ).reduce((z, B) => Math.max(z, B.rank), 0), g = w.filter(
        (z) => z.side === "down"
        /* Down */
      ).reduce((z, B) => Math.max(z, B.rank), 0);
      let j;
      k > g ? j = "Upwards" : g > k ? j = "Downwards" : j = "Same";
      const T = p.specialCauseImprovementValue, S = p.specialCauseConcernValue;
      j === "Upwards" ? n === "Up" ? p.specialCauseConcernValue = null : n === "Down" && (p.specialCauseImprovementValue = null) : j === "Downwards" ? n === "Up" ? p.specialCauseImprovementValue = null : n === "Down" && (p.specialCauseConcernValue = null) : p.variationIcon === "improvement" ? p.specialCauseConcernValue = null : p.variationIcon === "concern" ? p.specialCauseImprovementValue = null : p.specialCauseConcernValue = null, p.specialCauseImprovementValue !== null && p.specialCauseConcernValue === null ? p.variationIcon = "improvement" : p.specialCauseConcernValue !== null && p.specialCauseImprovementValue === null ? p.variationIcon = "concern" : p.specialCauseImprovementValue === null && p.specialCauseConcernValue === null && (p.variationIcon = "neither");
      const y = p.specialCauseImprovementValue !== null ? "up" : p.specialCauseConcernValue !== null ? "down" : void 0, I = y === "up" ? k : y === "down" ? g : Math.max(k, g), te = w.find((z) => z.rank === I && (!y || z.side === y));
      p.conflictPrimeDirection = j, p.conflictResolved = !0, p.conflictResolvedRank = I || void 0, te && (p.conflictResolvedByRuleId = te.id), p.pruningMode = "conflict", p.originalSpecialCauseImprovementValue = T, p.originalSpecialCauseConcernValue = S;
    }
    if (be(p.value) && p.mean !== null) {
      p.assuranceIcon = "none";
      const w = l[p.rowId - 1];
      if (be(w.target)) {
        const k = w.target;
        i.assuranceCapabilityMode && be(p.upperProcessLimit) && be(p.lowerProcessLimit) ? n === "Up" ? p.lowerProcessLimit !== null && p.lowerProcessLimit > k ? p.assuranceIcon = "pass" : p.upperProcessLimit !== null && p.upperProcessLimit < k ? p.assuranceIcon = "fail" : p.assuranceIcon = "none" : n === "Down" ? p.upperProcessLimit !== null && p.upperProcessLimit < k ? p.assuranceIcon = "pass" : p.lowerProcessLimit !== null && p.lowerProcessLimit > k ? p.assuranceIcon = "fail" : p.assuranceIcon = "none" : p.assuranceIcon = "none" : n === "Down" ? p.assuranceIcon = p.value <= k ? "pass" : "fail" : n === "Up" ? p.assuranceIcon = p.value >= k ? "pass" : "fail" : p.assuranceIcon = "none";
      }
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !m) {
    const f = l.filter(
      (p) => !p.ghost && be(p.value)
    ).length;
    u.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${f} non-ghost points available; minimum required is ${i.minimumPoints}. Limits and icons suppressed.`,
      context: { available: f, minimumRequired: i.minimumPoints }
    });
  }
  if (i.variationIconConflictWarning)
    for (const f of c)
      f.variationIcon === "improvement" && (f.specialCauseSinglePointUp || f.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && f.specialCauseFourOfFiveUp || f.specialCauseShiftUp || f.specialCauseTrendUp) && (f.specialCauseSinglePointDown || f.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && f.specialCauseFourOfFiveDown || f.specialCauseShiftDown || f.specialCauseTrendDown) && u.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${f.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: f.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const f = i.maximumPoints;
    let p = 0;
    for (const A of c)
      !A.ghost && be(A.value) && p++, p > f && (A.mean = A.upperProcessLimit = A.lowerProcessLimit = null, A.upperTwoSigma = A.lowerTwoSigma = A.upperOneSigma = A.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === "XmR" || t === "G")) {
    const f = l.filter(
      (p) => !p.ghost && (p.value === null || p.value === void 0 || !be(p.value))
    ).length;
    f && u.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${f} null/missing value(s) excluded from calculations.`,
      context: { nullCount: f }
    });
  }
  if (i.targetSuppressedWarning && (t === "T" || t === "G") && l.some((p) => be(p.target)) && u.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === "T" || t === "G")) {
    const f = l.filter((p) => p.ghost).length;
    f && u.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${f} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: f }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(C).forEach(([f, p]) => {
    p < i.minimumPointsPartition && u.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${f} has only ${p} non-ghost point(s); below recommended ${i.minimumPointsPartition}.`,
      context: {
        partitionId: Number(f),
        count: p,
        minimum: i.minimumPointsPartition
      }
    });
  }), i.baselineSpecialCauseWarning) {
    const f = [];
    c.forEach((p) => {
      l[p.rowId - 1].baseline && (p.specialCauseSinglePointUp || p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeUp || p.specialCauseTwoOfThreeDown || p.specialCauseFourOfFiveUp || p.specialCauseFourOfFiveDown || p.specialCauseShiftUp || p.specialCauseShiftDown || p.specialCauseTrendUp || p.specialCauseTrendDown) && f.push(p.rowId);
    }), f.length && u.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${f.join(", ")}.`,
      context: { rows: f }
    });
  }
  i.maximumPointsWarnings && (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition) && u.push({
    code: "partition_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after ${i.maximumPointsPartition} non-ghost points per partition.`,
    context: { cap: i.maximumPointsPartition }
  }), i.maximumPoints && Number.isFinite(i.maximumPoints) && u.push({
    code: "global_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after global cap of ${i.maximumPoints} non-ghost points.`,
    context: { cap: i.maximumPoints }
  }));
  let v;
  if (i.baselineSuggest) {
    const f = c, p = i.baselineSuggestStabilityPoints, A = i.baselineSuggestMinGap, L = i.baselineSuggestMinDeltaSigma, D = i.baselineSuggestScoreThreshold, H = [];
    let M = 0;
    for (let F = 0; F < f.length; F++) {
      let N = function(g) {
        return !!x[g] && !w?.[g];
      };
      const x = f[F];
      F > 0 && f[F - 1].partitionId !== x.partitionId && (M = F);
      const w = f[F - 1], k = [];
      (N("specialCauseShiftUp") || N("specialCauseShiftDown")) && k.push({ reason: "shift", index: F }), (N("specialCauseTrendUp") || N("specialCauseTrendDown")) && k.push({ reason: "trend", index: F }), (N("specialCauseSinglePointUp") || N("specialCauseSinglePointDown")) && k.push({ reason: "point", index: F });
      for (const g of k) {
        if (g.index - M < A) continue;
        const j = Math.max(0, g.index - p), T = g.index - 1;
        if (T - j + 1 < p) continue;
        const S = g.index, y = g.index + p - 1;
        if (y >= f.length) continue;
        const I = f.slice(j, T + 1).map((E) => E.value).filter(be), te = f.slice(S, y + 1).map((E) => E.value).filter(be);
        if (I.length < p || te.length < p) continue;
        const z = f[g.index];
        let B = null;
        if (be(z.upperProcessLimit) && be(z.mean)) {
          const E = z.upperProcessLimit - z.mean;
          E > 0 && (B = E / 3);
        }
        if (!B || B <= 0) continue;
        const G = pt(I), R = pt(te), re = R - G;
        if (Math.abs(re) < L * B) continue;
        const ce = f.slice(S, y + 1).filter(
          (E) => E.variationIcon === "concern"
          /* Concern */
        ).length;
        if (ce > 1) continue;
        const _e = (E) => {
          const $ = pt(E);
          return E.length ? E.reduce((Q, O) => Q + (O - $) * (O - $), 0) / E.length : 0;
        }, ie = _e(I), le = _e(te);
        let ee = g.reason === "shift" ? 90 : g.reason === "trend" ? 70 : 60;
        if (le < ie && (ee += 10), ee -= ce * 15, ee < D) continue;
        const _ = H.find((E) => E.index === g.index);
        if (_) {
          const E = ($) => $ === "shift" ? 3 : $ === "trend" ? 2 : 1;
          (E(g.reason) > E(_.reason) || ee > _.score) && (_.reason = g.reason, _.score = ee, _.deltaMean = re, _.oldMean = G, _.newMean = R, _.window = [S, y]);
        } else
          H.push({
            index: g.index,
            reason: g.reason,
            score: ee,
            deltaMean: re,
            oldMean: G,
            newMean: R,
            window: [S, y]
          });
      }
      F > 0 && f[F - 1].partitionId !== f[F].partitionId && (M = F);
    }
    H.sort((F, N) => F.index - N.index), v = H;
  }
  return { rows: c, warnings: u, ...v ? { suggestedBaselines: v } : {} };
}
const _s = {
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
function ws(e) {
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
function Ss(e) {
  switch (e) {
    case He.Improvement:
      return "Improvement signal";
    case He.Concern:
      return "Concern signal";
    case He.Neither:
      return "Common cause variation";
    case He.None:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function gp(e) {
  switch (e) {
    case Bt.Pass:
      return "Target met";
    case Bt.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function xp(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const ct = {
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
function Vi(e) {
  return e ? ct[e]?.token ?? ct.neither.token : ct.neither.token;
}
function bp(e) {
  return e ? ct[e]?.hex ?? ct.neither.hex : ct.neither.hex;
}
const Yi = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const d = zt(), c = Ht(), [u, h] = K.useState(null), [m, b] = K.useState(!1), C = K.useRef(null);
  K.useEffect(() => {
    if (d) {
      if (d.focused && (h(d.focused), C.current && (cancelAnimationFrame(C.current), C.current = null)), !d.focused && !m) {
        const de = requestAnimationFrame(() => {
          h(null), C.current = null;
        });
        C.current = de;
      }
      return () => {
        C.current && (cancelAnimationFrame(C.current), C.current = null);
      };
    }
  }, [d, d?.focused, m]);
  const v = d && (d.focused || (m ? u : null) || u), [f, p] = K.useState(!1);
  K.useEffect(() => {
    const de = requestAnimationFrame(() => p(!0));
    return () => cancelAnimationFrame(de);
  }, [v?.index]);
  const A = c?.innerWidth ?? 0, L = c?.innerHeight ?? 0, D = v ? Math.min(Math.max(v.clientX, 0), A) : 0, H = v ? Math.min(Math.max(v.clientY, 0), L) : 0, F = c.ref?.current;
  if (!v)
    return null;
  const N = e?.[v.index], w = ws(N).map((de) => ({ id: de, label: _s[de].tooltip })), k = v.x instanceof Date ? v.x : new Date(v.x), g = o ? o(k) : k.toDateString(), j = s ? `${s}` : "", T = a || j ? `${v.y}${j ? "" + j : " "}${a ? " " + a : ""}` : `${v.y}`, S = Ss(N?.variationIcon), y = gp(N?.assuranceIcon), I = xp(
    t.mean ?? null,
    t.sigma,
    v.y
  ), te = n ? n(v.index, { x: v.x, y: v.y }) : void 0, z = S || y || I, B = N?.specialCauseTrendUp || N?.specialCauseTrendDown, G = N?.variationIcon === He.Neither && B, R = l && G ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, re = w.length > 0, U = N?.primeDirection, ce = N?.primeRuleId, _e = i && N?.variationIcon === He.Neither && re, ie = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", le = Vi(N?.variationIcon), ee = 6.2, E = [
    te || "",
    `${g} • ${T}`
  ].filter(Boolean).reduce(
    (de, q) => Math.max(de, q.length * ee + 32),
    0
  ), $ = 200, Q = 440, O = Math.min(Q, Math.max($, E));
  let Y = D + 12, he = (c.margin?.top ?? 0) + H + 16;
  Y + O > A && (Y = D - -60 - O), Y < 0 && (Y = Math.max(0, A - O));
  const pe = v ? `spc-tooltip-${v.index}` : "spc-tooltip", ve = F ? tc(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: pe,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (f ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: Y,
          top: he,
          width: O,
          maxWidth: Q,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": f ? "false" : "true",
        "data-floating": !0,
        "data-placement": Y + O + 12 > A ? "left" : "right",
        onPointerEnter: () => {
          b(!0), C.current && (cancelAnimationFrame(C.current), C.current = null);
        },
        onPointerLeave: () => {
          if (b(!1), !d?.focused) {
            const de = requestAnimationFrame(() => {
              h(null), C.current = null;
            });
            C.current = de;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: g })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: T })
          ] }),
          z && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: S?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Ye,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : S?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Ye,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : _e ? /* @__PURE__ */ r.jsx(
              Ye,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : S ? /* @__PURE__ */ r.jsx(
              Ye,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          y && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const de = y.toLowerCase(), V = !(de.includes("not met") || de.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(de);
              return /* @__PURE__ */ r.jsx(
                Ye,
                {
                  text: y,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${V ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${y}`
                }
              );
            })() })
          ] }),
          I && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Ye,
              {
                text: (() => {
                  const de = I.toLowerCase();
                  return de.startsWith("within 1") ? "≤1σ" : de.startsWith("1–2") ? "1–2σ" : de.startsWith("2–3") ? "2–3σ" : de.startsWith(">3") ? ">3σ" : I;
                })(),
                color: I.includes(">3") ? "orange" : I.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${I}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          R && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: R })
          ] }),
          re && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: w.map(({ id: de, label: q }) => {
                  const V = String(de), se = V === La.TrendIncreasing || V === La.TrendDecreasing ? "fdp-spc-tag--trend" : _e ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Ye,
                    {
                      text: q,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${se}`,
                      "data-rule-id": V
                    },
                    V
                  );
                })
              }
            ),
            U && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const de = _e ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", q = `${U}${ce ? ` (${ce})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Ye,
                  {
                    text: q,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${de}`,
                    "aria-label": `Prime direction ${U}${ce ? ` via ${ce}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    F
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
            cy: H,
            r: 7,
            fill: "none",
            stroke: ie,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: D,
            cy: H,
            r: 5,
            fill: "#000",
            stroke: ie,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: D,
            cy: H,
            r: 2.5,
            fill: le,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        ve
      ]
    }
  );
};
let Fa = null;
try {
  Fa = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const ot = (e, t) => {
  if (!Fa) return t;
  const n = e.split(".");
  let a = Fa;
  for (const o of n) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, qi = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: ot("gradient.stop.start-opacity", "0.12"),
  mid: ot("gradient.stop.mid-opacity", "0.03"),
  end: ot("gradient.stop.end-opacity", "0"),
  triStart: ot(
    "gradient.stop.triangle-start-opacity",
    ot("gradient.stop.start-opacity", "0.12")
  ),
  triMid: ot(
    "gradient.stop.triangle-mid-opacity",
    ot("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: ot(
    "gradient.stop.triangle-end-opacity",
    ot("gradient.stop.end-opacity", "0")
  )
});
var Rt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Rt || {});
const yp = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, vp = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Ve = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ve || {}), Ce = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Ce || {}), nt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(nt || {}), Ie = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ie || {});
const _p = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [n, a, s].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, ks = {
  special_cause_deteriorating: {
    hex: ct.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: ct.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: ct.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: ct.none.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(ks).forEach((e) => {
  e.text || (e.text = _p(e.hex));
});
const Cs = (e) => ks[e], zr = (e) => ks[e].judgement || "none", Do = {
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
function wp(e, t) {
  let n;
  return e === "common_cause" ? n = Do.common : n = Do.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
const Xi = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Re.Up ? Ve.HigherIsBetter : i.improvementDirection === Re.Down ? Ve.LowerIsBetter : Ve.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    switch (i.variationIcon) {
      case He.Improvement:
        d = Ie.SpecialCauseImproving;
        break;
      case He.Concern:
        d = Ie.SpecialCauseDeteriorating;
        break;
      case He.Neither:
        d = i.specialCauseNeutral ? Ie.SpecialCauseNoJudgement : Ie.CommonCause;
        break;
      case He.None:
      default:
        d = Ie.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (d === Ie.SpecialCauseImproving ? c = l === Ve.LowerIsBetter ? Ce.Lower : Ce.Higher : d === Ie.SpecialCauseDeteriorating ? c = l === Ve.LowerIsBetter ? Ce.Higher : Ce.Lower : d === Ie.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = Ce.Higher : i.lowSideSignal && !i.highSideSignal ? c = Ce.Lower : c = Ce.Higher : c = Ce.Higher), { state: d, direction: c, polarity: l ?? Ve.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ie.SpecialCauseImproving || i.state === Ie.SpecialCauseDeteriorating) && i.polarity && (i.state === Ie.SpecialCauseImproving ? l = i.polarity === Ve.LowerIsBetter ? Ce.Lower : Ce.Higher : l = i.polarity === Ve.LowerIsBetter ? Ce.Higher : Ce.Lower), l || (i.state === Ie.SpecialCauseImproving ? l = Ce.Higher : i.state === Ie.SpecialCauseDeteriorating ? l = Ce.Lower : l = Ce.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ve.ContextDependent
    };
  }
  const n = e;
  t();
  const s = {
    [nt.Improving]: Ie.SpecialCauseImproving,
    [nt.Deteriorating]: Ie.SpecialCauseDeteriorating,
    [nt.No_Judgement]: Ie.SpecialCauseNoJudgement,
    [nt.None]: Ie.CommonCause
  }[n.judgement];
  let o;
  return n.judgement === nt.Improving ? o = n.polarity === Ve.LowerIsBetter ? Ce.Lower : Ce.Higher : n.judgement === nt.Deteriorating ? o = n.polarity === Ve.LowerIsBetter ? Ce.Higher : Ce.Lower : o = n.trend ?? Ce.Higher, { state: s, direction: o, polarity: n.polarity };
};
function Sp(e, t) {
  const { state: n, direction: a, polarity: s } = Xi(e), o = zr(n), i = a === Ce.Higher ? "above" : "below", l = a === Ce.Higher ? "upwards" : "downwards", d = (() => {
    switch (s) {
      case Ve.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Ve.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (o) {
        case nt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case nt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case nt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case nt.None:
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
const xa = (e, t, n, a, s, o) => /* @__PURE__ */ r.jsxs("defs", { children: [
  a && /* @__PURE__ */ r.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  s && /* @__PURE__ */ r.jsx("linearGradient", { id: n, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: o.map((i) => /* @__PURE__ */ r.jsx(
    "stop",
    {
      offset: i.offset,
      stopColor: e,
      stopOpacity: parseFloat(i.opacity)
    },
    i.offset
  )) })
] }), Wr = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: s = !0,
  gradientWash: o = !1,
  variant: i = "classic",
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: d = "polarity",
  letterOverride: c,
  ...u
}) => {
  const h = Gn(), m = Gn(), {
    start: b,
    mid: C,
    end: v,
    triStart: f,
    triMid: p,
    triEnd: A
  } = qi(), { state: L, direction: D, polarity: H } = $e(
    () => Xi(e),
    [e]
  ), M = $e(() => Cs(L), [L]), F = $e(() => zr(L), [L]), N = F === nt.Improving || F === nt.Deteriorating;
  let x = "";
  a && N && (d === "polarity" ? H === Ve.HigherIsBetter ? x = "H" : H === Ve.LowerIsBetter ? x = "L" : x = "" : x = D === Ce.Higher ? "H" : "L"), c !== void 0 && (x = c);
  const w = L !== Ie.CommonCause, k = L === Ie.SpecialCauseNoJudgement, g = ot("common-cause", "#A6A6A6"), j = w ? M.hex : g, T = $e(
    () => wp(L, D),
    [L, D]
  ), S = n || `${M.label}${x ? D === Ce.Higher ? " – Higher" : " – Lower" : ""}`, y = Sp(
    e
  );
  if (i === "triangleWithRun") {
    const G = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], R = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let re = null;
    L === Ie.SpecialCauseImproving || L === Ie.SpecialCauseDeteriorating ? re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (D === Ce.Higher ? G : R).map((Q) => Q.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: D === Ce.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : L === Ie.SpecialCauseNoJudgement && (re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: D === Ce.Higher ? G.map((Q) => Q.join(",")).join(" ") : R.map((Q) => Q.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: D === Ce.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const U = Math.max(0, Math.min(5, Math.floor(l || 0))), ce = L === Ie.CommonCause ? 160 : D === Ce.Higher ? 220 : 70, _e = 10, ie = 26, le = 150 - 2 * ie, ee = L === Ie.SpecialCauseImproving ? ot("improvement", "#00B0F0") : L === Ie.SpecialCauseDeteriorating ? ot("concern", "#E46C0A") : g, _ = Array.from({ length: 5 }).map((Q, O) => {
      const ae = (L === Ie.SpecialCauseImproving || L === Ie.SpecialCauseDeteriorating) && O >= 5 - U ? ee : g;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: le + O * ie,
          cy: ce,
          r: _e,
          fill: ae,
          stroke: ae,
          strokeWidth: 1
        },
        O
      );
    }), E = xa(
      M.hex,
      h,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: f },
        { offset: "75%", opacity: p },
        { offset: "100%", opacity: A }
      ]
    ), $ = L === Ie.CommonCause || D === Ce.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": S,
        "aria-description": y,
        ...u,
        children: [
          E,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${m})` : "#ffffff",
              ...s ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: M.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: $, children: [
            re,
            x && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: D === Ce.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: x
              }
            ),
            _
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const G = [
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
    let U = null;
    L === Ie.SpecialCauseImproving || L === Ie.SpecialCauseDeteriorating ? U = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (D === Ce.Higher ? G : R).map((_e) => _e.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: D === Ce.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : L === Ie.SpecialCauseNoJudgement ? U = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: D === Ce.Higher ? G.map((_e) => _e.join(",")).join(" ") : R.map((_e) => _e.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: D === Ce.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : L === Ie.CommonCause && (U = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: re[0][0],
        y1: re[0][1],
        x2: re[1][0],
        y2: re[1][1],
        stroke: M.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const ce = xa(
      M.hex,
      h,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: f },
        { offset: "65%", opacity: p },
        { offset: "100%", opacity: A }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": S,
        "aria-description": y,
        ...u,
        children: [
          ce,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${m})` : "#ffffff",
              ...s ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: M.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          U,
          x && (L === Ie.SpecialCauseImproving || L === Ie.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: D === Ce.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: x
            }
          )
        ]
      }
    );
  }
  const I = xa(
    M.hex,
    h,
    m,
    s,
    o,
    [
      { offset: "0%", opacity: b },
      { offset: "65%", opacity: C },
      { offset: "100%", opacity: v }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": S,
      "aria-description": y,
      ...u,
      children: [
        I,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${m})` : "#ffffff",
            ...s ? { filter: `url(#${h})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: M.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        x && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: M.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: D === Ce.Lower ? "340" : "155", children: x })
          }
        ),
        k ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: M.hex,
            ...D === Ce.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          T.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: g,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${T.map((te) => `${te.cx} ${te.cy}`).join(" L ")}`
            }
          ),
          T.map((te, z) => {
            const G = z >= T.length - 2 && w ? j : g, R = G;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: R,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: G,
                cx: te.cx,
                cy: te.cy,
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
Wr.displayName = "SPCVariationIcon";
const Or = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: s,
  gradientWash: o = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...d
}) => {
  const c = Gn(), u = Gn(), { start: h, mid: m, end: b } = qi(), C = s || yp[e], v = (i || vp[e]).slice(0, 2), f = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": f,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          a && /* @__PURE__ */ r.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ r.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          o && /* @__PURE__ */ r.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: C, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: C, stopOpacity: parseFloat(m) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(b) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${u})` : "#ffffff",
            ...a ? { filter: `url(#${c})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: C,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: v })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === Rt.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: C,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === Rt.Uncertain ? /* @__PURE__ */ r.jsx(
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
              stroke: C,
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
              stroke: C,
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
Or.displayName = "SPCAssuranceIcon";
function kp(e, t) {
  const n = hp(e), a = n.upMax, s = n.downMax, o = n.upRules.map((v) => ({ id: v, rank: To[v] })), i = n.downRules.map((v) => ({ id: v, rank: To[v] }));
  let l;
  a > s ? l = sn.Upwards : s > a ? l = sn.Downwards : l = sn.Same;
  const d = a > 0, c = s > 0, u = t === Re.Up && d || t === Re.Down && c ? e.value : null, h = t === Re.Up && c || t === Re.Down && d ? e.value : null;
  e.sqlOriginalImprovementValue = u, e.sqlOriginalConcernValue = h, u !== null && h !== null && (e.sqlPruned = !0, l === sn.Upwards ? t === Re.Up || t === Re.Down && (e.sqlOriginalImprovementValue = null) : l === sn.Downwards ? t === Re.Up ? e.sqlOriginalImprovementValue = null : Re.Down : u !== null ? e.sqlOriginalConcernValue = null : h !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = He.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = He.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = He.Neither : e.variationIcon = He.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = zi.Sql;
  const C = ((e.variationIcon === He.Concern ? t === Re.Up ? an.Down : an.Up : t === Re.Up ? an.Up : an.Down) === an.Up ? o : i).reduce(
    (v, f) => !v || f.rank > v.rank ? f : v,
    void 0
  );
  C && (e.primeRuleId = C.id);
}
function Cp(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: s = {}
  } = e, o = vs({
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: {
      ...s
    }
  }), i = o.rows.map((l) => ({ ...l }));
  for (const l of i)
    kp(l, n);
  return { rows: i, warnings: o.warnings };
}
let jp = 0;
const Np = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: n = 260,
  showZones: a = !0,
  showPoints: s = !0,
  announceFocus: o = !1,
  className: i,
  unit: l,
  highlightOutOfControl: d = !0,
  chartType: c = bs.XmR,
  metricImprovement: u = Re.Neither,
  enableRules: h = !0,
  showIcons: m = !1,
  showEmbeddedIcon: b = !0,
  embeddedIconVariant: C = "classic",
  embeddedIconRunLength: v,
  targets: f,
  baselines: p,
  ghosts: A,
  settings: L,
  narrationContext: D,
  gradientSequences: H = !1,
  sequenceTransition: M = "slope",
  processLineWidth: F = 2,
  showWarningsPanel: N = !1,
  warningsFilter: x,
  enableNeutralNoJudgement: w = !0,
  showTrendGatingExplanation: k = !0,
  trendVisualMode: g = "ungated",
  disableTrendSideGating: j,
  source: T,
  alwaysShowZeroY: S = !1,
  alwaysShowHundredY: y = !1,
  percentScale: I = !1,
  useSqlCompatEngine: te = !1,
  showTrendStartMarkers: z = !1,
  showFirstFavourableCrossMarkers: B = !1,
  showTrendBridgeOverlay: G = !1
}) => {
  const R = K.useCallback(
    (W) => String(W).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((ne) => ne.length ? ne[0].toUpperCase() + ne.slice(1) : ne).join(" "),
    []
  ), re = K.useCallback(
    (W) => String(W).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((J) => J.length ? J[0].toUpperCase() + J.slice(1) : J).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && j !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const U = K.useMemo(() => {
    const W = e.map((J, ne) => ({
      x: J.x,
      value: J.y,
      target: f?.[ne] ?? void 0,
      baseline: p?.[ne] ?? void 0,
      ghost: A?.[ne] ?? void 0
    }));
    try {
      const J = L ? { ...L } : void 0;
      return te ? Cp({
        chartType: c,
        metricImprovement: u,
        data: W,
        settings: J
      }) : vs({ chartType: c, metricImprovement: u, data: W, settings: J });
    } catch {
      return null;
    }
  }, [
    e,
    f,
    p,
    A,
    c,
    u,
    L,
    te
  ]), ce = U?.rows.slice().reverse().find((W) => W.mean != null), _e = ce?.mean ?? null, ie = U?.warnings || [], le = K.useMemo(() => ie.length ? x ? ie.filter((W) => !(x.severities && W.severity && !x.severities.includes(W.severity) || x.categories && W.category && !x.categories.includes(W.category) || x.codes && !x.codes.includes(W.code))) : ie : [], [ie, x]), [ee, _] = K.useState(""), E = K.useRef("");
  K.useEffect(() => {
    if (!N) {
      E.current !== "" && (E.current = "", _(""));
      return;
    }
    const W = le.length;
    if (!W) {
      const Z = "Diagnostics: no warnings.";
      Z !== E.current && (E.current = Z, _(Z));
      return;
    }
    const J = {
      error: le.filter(
        (Z) => Z.severity === At.Error
      ).length,
      warning: le.filter(
        (Z) => Z.severity === At.Warning
      ).length,
      info: le.filter(
        (Z) => Z.severity === At.Info
      ).length
    }, ne = [];
    J.error && ne.push(
      `${J.error} error${J.error === 1 ? "" : "s"}`
    ), J.warning && ne.push(
      `${J.warning} warning${J.warning === 1 ? "" : "s"}`
    ), J.info && ne.push(`${J.info} info`);
    const X = `Diagnostics updated: ${W} warning${W === 1 ? "" : "s"} (${ne.join(", ")}).`;
    X !== E.current && (E.current = X, _(X));
  }, [N, le]);
  const $ = ce?.upperProcessLimit ?? null, Q = ce?.lowerProcessLimit ?? null, O = ce?.upperOneSigma ?? null, Y = ce?.lowerOneSigma ?? null, ae = ce?.upperTwoSigma ?? null, he = ce?.lowerTwoSigma ?? null, pe = _e != null && O != null ? Math.abs(O - _e) : 0, ve = K.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), de = K.useMemo(() => {
    if (I) {
      const Z = e.map((ke) => ke.y), ye = Math.max(100, ...Z), Se = Math.min(0, ...Z);
      return [Se < 0 ? Se : 0, ye > 100 ? ye : 100];
    }
    const J = [...e.map((Z) => Z.y)];
    if ([_e, $, Q, O, Y, ae, he].forEach((Z) => {
      Z != null && J.push(Z);
    }), f && f.forEach((Z) => {
      typeof Z == "number" && !isNaN(Z) && J.push(Z);
    }), !J.length) return;
    let ne = Math.min(...J), X = Math.max(...J);
    return S && (ne = Math.min(0, ne)), y && (X = Math.max(100, X)), [ne, X];
  }, [e, _e, $, Q, O, Y, ae, he, f, S, y, I]), q = K.useMemo(() => {
    if (!(l || D?.measureUnit) && e.length)
      return e.every((W) => W.y >= 0 && W.y <= 1) ? "%" : void 0;
  }, [l, D?.measureUnit, e]), V = l ?? D?.measureUnit ?? q, oe = K.useMemo(() => V ? { ...D || {}, measureUnit: V } : D, [D, V]), se = K.useMemo(() => {
    if (!U?.rows) return [];
    const W = [];
    for (let J = 1; J < U.rows.length; J++)
      U.rows[J].partitionId !== U.rows[J - 1].partitionId && W.push(J);
    return W;
  }, [U?.rows]), P = K.useMemo(() => {
    if (!b || !U?.rows?.length) return null;
    const W = U.rows, J = L?.minimumPoints ?? 13;
    if (W.filter(
      (Pe) => !Pe.ghost && Pe.value != null
    ).length < J) return null;
    let X = -1;
    for (let Pe = W.length - 1; Pe >= 0; Pe--) {
      const Le = W[Pe];
      if (Le && Le.value != null && !Le.ghost) {
        X = Pe;
        break;
      }
    }
    if (X === -1) return null;
    const Z = W[X], ye = Z.variationIcon, Se = Z.assuranceIcon, ke = ye === He.Neither && !!Z.specialCauseNeitherValue, Ne = Se === Bt.Pass ? Rt.Pass : Se === Bt.Fail ? Rt.Fail : Rt.Uncertain;
    let fe;
    if (ye === He.None) {
      const Pe = Z.specialCauseSinglePointUp, Le = Z.specialCauseSinglePointDown;
      u === Re.Up ? Pe ? fe = Ce.Higher : Le && (fe = Ce.Lower) : u === Re.Down ? Le ? fe = Ce.Lower : Pe && (fe = Ce.Higher) : fe = Ce.Higher;
    } else if (ye === He.Neither && ke) {
      const Pe = Z.specialCauseSinglePointUp || Z.specialCauseTwoOfThreeUp || Z.specialCauseFourOfFiveUp || Z.specialCauseShiftUp || Z.specialCauseTrendUp, Le = Z.specialCauseSinglePointDown || Z.specialCauseTwoOfThreeDown || Z.specialCauseFourOfFiveDown || Z.specialCauseShiftDown || Z.specialCauseTrendDown;
      Pe && !Le ? fe = Ce.Higher : Le && !Pe ? fe = Ce.Lower : fe = Ce.Higher;
    }
    let Te;
    u === Re.Up ? Te = Ve.HigherIsBetter : u === Re.Down ? Te = Ve.LowerIsBetter : Te = Ve.ContextDependent;
    const Ee = 80;
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(ye),
              "data-trend-raw": fe ? String(fe) : "none",
              "data-trend": fe ? String(fe) : "none",
              "data-polarity": String(Te ?? "unknown"),
              style: { width: Ee, height: Ee },
              children: /* @__PURE__ */ r.jsx(
                Wr,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: ye,
                    improvementDirection: u,
                    polarity: Te,
                    specialCauseNeutral: ke,
                    highSideSignal: Z.specialCauseSinglePointUp || Z.specialCauseTwoOfThreeUp || Z.specialCauseFourOfFiveUp || Z.specialCauseShiftUp || Z.specialCauseTrendUp,
                    lowSideSignal: Z.specialCauseSinglePointDown || Z.specialCauseTwoOfThreeDown || Z.specialCauseFourOfFiveDown || Z.specialCauseShiftDown || Z.specialCauseTrendDown,
                    ...fe ? { trend: fe } : {}
                  },
                  letterMode: u === Re.Neither ? "direction" : "polarity",
                  size: Ee,
                  variant: C,
                  runLength: C === "triangleWithRun" ? v : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(Se),
              style: { width: Ee, height: Ee },
              children: /* @__PURE__ */ r.jsx(
                Or,
                {
                  status: Ne,
                  size: Ee,
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
    b,
    U?.rows,
    u,
    L?.minimumPoints,
    f,
    C,
    v
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        b && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: P
          }
        ),
        /* @__PURE__ */ r.jsx(
          gh,
          {
            height: n,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(xh, { series: ve, yDomain: de, children: /* @__PURE__ */ r.jsx(
              Tp,
              {
                series: ve,
                showPoints: s,
                announceFocus: o,
                limits: { mean: _e, ucl: $, lcl: Q, sigma: pe, onePos: O, oneNeg: Y, twoPos: ae, twoNeg: he },
                showZones: a,
                highlightOutOfControl: d,
                engineRows: U?.rows || null,
                enableRules: h,
                showIcons: m,
                narrationContext: oe,
                gradientSequences: H,
                sequenceTransition: M,
                processLineWidth: F,
                effectiveUnit: V,
                partitionMarkers: se,
                ariaLabel: t,
                enableNeutralNoJudgement: w,
                showTrendGatingExplanation: k,
                trendVisualMode: g,
                metricImprovement: u,
                showTrendStartMarkers: z,
                showFirstFavourableCrossMarkers: B,
                showTrendBridgeOverlay: G
              }
            ) })
          }
        ),
        T && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof T == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          T
        ] }) : T }),
        N && ee && /* @__PURE__ */ r.jsx(
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
            children: ee
          }
        ),
        N && le.length > 0 && /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ r.jsx(
                dt,
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
                  rows: le.map((W) => {
                    let J = "grey";
                    return W.severity === At.Error ? J = "red" : W.severity === At.Warning ? J = "orange" : W.severity === At.Info && (J = "blue"), [
                      {
                        node: /* @__PURE__ */ r.jsx(
                          Ye,
                          {
                            color: J,
                            text: (W.severity ? String(W.severity) : "Info").replace(
                              /^[a-z]/,
                              (ne) => ne.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: W.category ? /* @__PURE__ */ r.jsx(
                          Ye,
                          {
                            color: "purple",
                            text: re(W.category)
                          }
                        ) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ r.jsx(Ye, { color: "grey", text: R(W.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ r.jsx("span", { children: W.message }),
                          W.context && Object.keys(W.context).length > 0 && /* @__PURE__ */ r.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(W.context, null, 2) })
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
}, Tp = ({
  series: e,
  showPoints: t,
  announceFocus: n,
  limits: a,
  showZones: s,
  highlightOutOfControl: o,
  engineRows: i,
  enableRules: l,
  showIcons: d,
  narrationContext: c,
  gradientSequences: u,
  sequenceTransition: h,
  processLineWidth: m,
  effectiveUnit: b,
  partitionMarkers: C,
  ariaLabel: v,
  metricImprovement: f,
  enableNeutralNoJudgement: p = !0,
  showTrendGatingExplanation: A = !0,
  trendVisualMode: L = "ungated",
  showTrendStartMarkers: D = !1,
  showFirstFavourableCrossMarkers: H = !1,
  showTrendBridgeOverlay: M = !1
}) => {
  const F = Jt(), N = Ht();
  if (!F) return null;
  const { xScale: x, yScale: w } = F, k = K.useRef(
    "spc-seq-" + ++jp
  ), g = zt(), j = e[0]?.data || [], T = K.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const _ = /* @__PURE__ */ new Set();
    return j.forEach((E, $) => {
      (a.ucl != null && E.y > a.ucl || a.lcl != null && E.y < a.lcl) && _.add($);
    }), _;
  }, [j, a.ucl, a.lcl]), S = K.useMemo(() => {
    if (!i) return null;
    const _ = {};
    return i.forEach((E, $) => {
      if (E.value == null || E.ghost) return;
      const Q = E.specialCauseSinglePointUp || E.specialCauseSinglePointDown || E.specialCauseTwoOfThreeUp || E.specialCauseTwoOfThreeDown || E.specialCauseFourOfFiveUp || E.specialCauseFourOfFiveDown || E.specialCauseShiftUp || E.specialCauseShiftDown || E.specialCauseTrendUp || E.specialCauseTrendDown;
      _[$] = {
        variation: E.variationIcon,
        assurance: E.assuranceIcon,
        special: Q,
        concern: E.variationIcon === He.Concern,
        improvement: E.variationIcon === He.Improvement,
        trendUp: !!E.specialCauseTrendUp,
        trendDown: !!E.specialCauseTrendDown
      };
    }), _;
  }, [i]), y = K.useMemo(() => {
    if (!i || !i.length) return null;
    const _ = [];
    for (const $ of i)
      typeof $.target == "number" && !isNaN($.target) && _.push($.target);
    if (!_.length) return null;
    const E = _[0];
    return _.every(($) => $ === E) ? E : null;
  }, [i]), I = K.useMemo(() => {
    if (!S || !j.length)
      return [];
    const _ = j.map(($, Q) => {
      const O = S?.[Q];
      if (O?.concern) return "concern";
      if (O?.improvement) return "improvement";
      if (O?.special && O.variation === He.Neither) {
        if (L === "ungated" && f && f !== Re.Neither) {
          if (O.trendUp)
            return f === Re.Up ? "improvement" : "concern";
          if (O.trendDown)
            return f === Re.Down ? "improvement" : "concern";
        }
        if (p) return "noJudgement";
      }
      return "common";
    });
    return v?.includes("Rule Clash") && console.log(
      `[${v}] Raw categories:`,
      _.map(($, Q) => `${Q}:${$}(${j[Q].y})`).join(", ")
    ), _;
  }, [S, j, v, p]), te = K.useMemo(() => {
    if (!u || !I.length)
      return [];
    const _ = [...I];
    let E = 0;
    for (; E < _.length; ) {
      const O = _[E];
      let Y = E + 1;
      for (; Y < _.length && _[Y] === O; ) Y++;
      Y - E === 1 && O !== "common" && (_[E] = "common"), E = Y;
    }
    const $ = [];
    if (_.length) {
      let O = 0;
      for (let Y = 1; Y <= _.length; Y++)
        if (Y === _.length || _[Y] !== _[O]) {
          const ae = _[O], he = Y - 1, pe = he - O + 1;
          (ae === "common" || pe >= 2) && $.push({ start: O, end: he, category: ae }), O = Y;
        }
    }
    return v?.includes("Rule Clash") && console.log(
      `[${v}] Final sequences:`,
      $.map((O) => `${O.start}-${O.end}:${O.category}`).join(", ")
    ), $;
  }, [u, I, v]), z = K.useMemo(
    () => j.map((_) => x(_.x instanceof Date ? _.x : new Date(_.x))),
    [j, x]
  ), B = x.range()[1], G = K.useMemo(() => {
    if (!i || !i.length) return null;
    let _ = Number.POSITIVE_INFINITY, E = Number.POSITIVE_INFINITY;
    if (i.forEach((pe, ve) => {
      pe.specialCauseTrendUp && (_ = Math.min(_, ve)), pe.specialCauseTrendDown && (E = Math.min(E, ve));
    }), !Number.isFinite(_) && !Number.isFinite(E)) return null;
    const $ = _ <= E, Q = $ ? "up" : "down", O = $ ? _ : E, Y = (pe) => f == null || f === Re.Neither || pe == null || typeof pe.value != "number" || typeof pe.mean != "number" ? !1 : Q === "up" ? f === Re.Up ? pe.value > pe.mean : pe.value < pe.mean : f === Re.Down ? pe.value < pe.mean : pe.value > pe.mean;
    let ae = null;
    for (let pe = O; pe < i.length; pe++) {
      const ve = i[pe];
      if (!($ ? !!ve.specialCauseTrendUp : !!ve.specialCauseTrendDown)) break;
      if (Y(ve)) {
        ae = pe;
        break;
      }
    }
    let he = !1;
    if (ae != null) {
      let pe = 0;
      for (let ve = ae; ve < i.length; ve++) {
        const de = i[ve];
        if (!($ ? !!de.specialCauseTrendUp : !!de.specialCauseTrendDown)) break;
        Y(de) && pe++;
      }
      he = pe >= 2;
    }
    return { direction: Q, detectedAt: O, firstFavourableCrossAt: ae, persistedAcrossMean: he };
  }, [i, f]), R = K.useMemo(() => {
    if (!i || !i.length) return null;
    const _ = (E) => {
      const $ = [];
      let Q = null, O = null;
      for (let Y = 0; Y < i.length; Y++) {
        const ae = i[Y], he = typeof ae[E] == "number" ? ae[E] : null;
        if (he == null || isNaN(he)) {
          Q !== null && O != null && ($.push({
            x1: z[Q],
            x2: z[Y - 1],
            y: w(O)
          }), Q = null, O = null);
          continue;
        }
        if (Q === null) {
          Q = Y, O = he;
          continue;
        }
        O != null && Math.abs(he - O) <= 1e-9 || (O != null && $.push({
          x1: z[Q],
          x2: z[Y - 1],
          y: w(O)
        }), Q = Y, O = he);
      }
      return Q !== null && O != null && $.push({
        x1: z[Q],
        x2: z[i.length - 1],
        y: w(O)
      }), $;
    };
    return {
      mean: _("mean"),
      ucl: _("upperProcessLimit"),
      lcl: _("lowerProcessLimit"),
      onePos: _("upperOneSigma"),
      oneNeg: _("lowerOneSigma"),
      twoPos: _("upperTwoSigma"),
      twoNeg: _("lowerTwoSigma")
    };
  }, [i, z, w]), re = K.useMemo(() => te.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs("linearGradient", { id: `${k.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    te.map((_, E) => {
      const $ = `${k.current}-grad-${E}`;
      let Q, O = 0.28, Y = 0.12, ae = 0.045;
      switch (_.category) {
        case "concern":
          Q = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", O = 0.28, Y = 0.12, ae = 0.045;
          break;
        case "improvement":
          Q = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", O = 0.26, Y = 0.11, ae = 0.045;
          break;
        case "noJudgement":
          Q = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", O = 0.26, Y = 0.11, ae = 0.045;
          break;
        default:
          Q = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: $, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: Q, stopOpacity: O }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: Q, stopOpacity: Y }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: Q, stopOpacity: ae })
      ] }, $);
    })
  ] }) : null, [te]), U = K.useMemo(() => {
    if (!te.length) return null;
    const [_] = w.domain(), E = w(_), $ = te.map((Q, O) => {
      const { start: Y, end: ae, category: he } = Q;
      if (Y < 0 || ae >= z.length || Y > ae)
        return null;
      const pe = z[Y], ve = z[ae];
      let de = "";
      if (he === "common") {
        const q = O > 0 ? te[O - 1] : null, V = O < te.length - 1 ? te[O + 1] : null, oe = q ? z[q.end] : 0, se = q ? w(j[q.end].y) : E, P = V ? z[V.start] : B, W = V ? w(j[V.start].y) : E;
        de = `M ${oe} ${E}`, de += ` L ${oe} ${se}`;
        for (let J = Y; J <= ae; J++)
          de += ` L ${z[J]} ${w(j[J].y)}`;
        de += ` L ${P} ${W}`, de += ` L ${P} ${E} Z`;
      } else {
        const q = O > 0 ? te[O - 1] : null, V = O < te.length - 1 ? te[O + 1] : null, oe = q && q.category !== "common", se = V && V.category !== "common", P = w(j[Y].y), W = w(j[ae].y);
        let J = pe, ne = ve;
        if (oe) {
          const X = z[q.end], Z = w(j[q.end].y), ye = j[Y].y - j[q.end].y;
          h === "slope" && ye > 0 ? (de = `M ${X} ${Z} L ${pe} ${P}`, J = X) : (de = `M ${pe} ${E} L ${pe} ${P}`, J = pe);
        } else
          de = `M ${pe} ${E} L ${pe} ${P}`;
        for (let X = Y + 1; X <= ae; X++)
          de += ` L ${z[X]} ${w(j[X].y)}`;
        if (de += ` L ${ve} ${W}`, se) {
          const X = z[V.start], Z = w(j[V.start].y), ye = j[V.start].y - j[ae].y;
          (h === "slope" && ye <= 0 || h === "extend") && (de += ` L ${X} ${Z}`, ne = X);
        }
        if (de += ` L ${ne} ${E}`, de += ` L ${J} ${E} Z`, h === "neutral" && oe) {
          const X = z[q.end], Z = w(j[q.end].y), ye = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${X} ${E} L ${X} ${Z} L ${pe} ${P} L ${pe} ${E} Z`,
              fill: `url(#${k.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${O}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            ye,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: de,
                fill: `url(#${k.current}-grad-${O})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${O}`
            )
          ] }, `seq-group-${O}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: de,
          fill: `url(#${k.current}-grad-${O})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${O}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: $ });
  }, [te, z, B, w, j, h]), ce = K.useMemo(() => {
    if (!c?.timeframe && j.length >= 2) {
      const _ = j.map((ae) => ae.x instanceof Date ? ae.x : new Date(ae.x)), E = new Date(Math.min(..._.map((ae) => ae.getTime()))), $ = new Date(Math.max(..._.map((ae) => ae.getTime()))), Q = Math.round(($.getTime() - E.getTime()) / 864e5) || 0;
      if (Q < 14)
        return `The chart shows a timeframe of ${Q + 1} days`;
      const O = Math.round(Q / 7);
      return O < 20 ? `The chart shows a timeframe of ${O} weeks` : `The chart shows a timeframe of ${($.getFullYear() - E.getFullYear()) * 12 + ($.getMonth() - E.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, j]), _e = (_) => {
    const E = _ % 10, $ = _ % 100;
    return E === 1 && $ !== 11 ? `${_}st` : E === 2 && $ !== 12 ? `${_}nd` : E === 3 && $ !== 13 ? `${_}rd` : `${_}th`;
  }, ie = (_) => `${_e(_.getDate())} ${_.toLocaleString("en-GB", { month: "long" })}, ${_.getFullYear()}`, le = K.useCallback(
    ({
      index: _,
      x: E,
      y: $
    }) => {
      const Q = i?.[_], O = E instanceof Date ? E : new Date(E), Y = ie(O), ae = c?.measureUnit ? ` ${c.measureUnit}` : "", he = c?.measureName ? ` ${c.measureName}` : "";
      if (!Q)
        return `General summary is: ${ce ? ce + ". " : ""}Point ${_ + 1}, ${Y}, ${$}${ae}${he}`;
      const pe = Ss(Q.variationIcon) || "Variation", ve = ws(Q), de = ve.length ? ` Rules: ${[...new Set(ve.map((V) => _s[V].narration))].join("; ")}.` : " No special cause rules.", q = [];
      return c?.measureName && q.push(`Measure: ${c.measureName}.`), c?.datasetContext && q.push(`${c.datasetContext}.`), c?.organisation && q.push(`Organisation: ${c.organisation}.`), c?.additionalNote && q.push(c.additionalNote), [
        "General summary is:",
        ...q,
        `Point ${_ + 1} recorded on `,
        Y + ",",
        `with a value of ${$} ${ae}${he}`,
        pe + ".",
        de
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, ce]
  ), ee = K.useCallback(
    (_, E) => i?.[_] ? le({
      index: _,
      seriesId: "process",
      x: E.x instanceof Date ? E.x : new Date(E.x),
      y: E.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, le]
  );
  return /* @__PURE__ */ r.jsx(Qh, { children: /* @__PURE__ */ r.jsxs(
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
            width: F.xScale.range()[1] + 56 + 16,
            height: F.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(jo, { type: "x" }),
              /* @__PURE__ */ r.jsx(jo, { type: "y" }),
              /* @__PURE__ */ r.jsx(bh, { axis: "y" }),
              re,
              U,
              C.map((_, E) => {
                const $ = j[_];
                if (!$) return null;
                const Q = x($.x instanceof Date ? $.x : new Date($.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: Q,
                    x2: Q,
                    y1: 0,
                    y2: w.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${E}`
                );
              }),
              R?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                R.mean.map((_, E) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__cl", x1: _.x1, x2: _.x2, y1: _.y, y2: _.y }, `mean-${E}`)),
                R.mean.map((_, E) => {
                  if (E === R.mean.length - 1) return null;
                  const $ = R.mean[E + 1];
                  if (!$ || _.y === $.y) return null;
                  const O = Math.max(4, $.x1 - _.x2 || 0) * 0.5, Y = `M ${_.x2},${_.y} C ${_.x2 + O},${_.y} ${$.x1 - O},${$.y} ${$.x1},${$.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: Y, fill: "none" }, `mean-join-${E}`);
                })
              ] }) : null,
              y != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              R?.ucl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                R.ucl.map((_, E) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: _.x1, x2: _.x2, y1: _.y, y2: _.y, strokeWidth: 2 }, `ucl-${E}`)),
                R.ucl.map((_, E) => {
                  if (E === R.ucl.length - 1) return null;
                  const $ = R.ucl[E + 1];
                  if (!$ || _.y === $.y) return null;
                  const O = Math.max(4, $.x1 - _.x2 || 0) * 0.5, Y = `M ${_.x2},${_.y} C ${_.x2 + O},${_.y} ${$.x1 - O},${$.y} ${$.x1},${$.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: Y, fill: "none", strokeWidth: 2 }, `ucl-join-${E}`);
                })
              ] }) : null,
              R?.lcl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                R.lcl.map((_, E) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: _.x1, x2: _.x2, y1: _.y, y2: _.y, strokeWidth: 2 }, `lcl-${E}`)),
                R.lcl.map((_, E) => {
                  if (E === R.lcl.length - 1) return null;
                  const $ = R.lcl[E + 1];
                  if (!$ || _.y === $.y) return null;
                  const O = Math.max(4, $.x1 - _.x2 || 0) * 0.5, Y = `M ${_.x2},${_.y} C ${_.x2 + O},${_.y} ${$.x1 - O},${$.y} ${$.x1},${$.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: Y, fill: "none", strokeWidth: 2 }, `lcl-join-${E}`);
                })
              ] }) : null,
              y != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: x.range()[1],
                    y1: w(y),
                    y2: w(y),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: x.range()[0] - 7,
                    y: w(y) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      y,
                      " ",
                      b || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && R && R.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                R.onePos.map((_, E) => /* @__PURE__ */ r.jsx(
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
                  `onePos-${E}`
                )),
                R.oneNeg.map((_, E) => /* @__PURE__ */ r.jsx(
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
                  `oneNeg-${E}`
                )),
                R.twoPos.map((_, E) => /* @__PURE__ */ r.jsx(
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
                  `twoPos-${E}`
                )),
                R.twoNeg.map((_, E) => /* @__PURE__ */ r.jsx(
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
                  `twoNeg-${E}`
                ))
              ] }),
              G && (D || H || M) && (() => {
                const _ = G.detectedAt, E = G.firstFavourableCrossAt, $ = j[_] ? x(j[_].x instanceof Date ? j[_].x : new Date(j[_].x)) : null, Q = j[_] ? w(j[_].y) : null, O = E != null && j[E] ? x(j[E].x instanceof Date ? j[E].x : new Date(j[E].x)) : null, Y = E != null && j[E] ? w(j[E].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  M && $ != null && Q != null && O != null && Y != null && /* @__PURE__ */ r.jsx("line", { x1: $, y1: Q, x2: O, y2: Y, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  D && $ != null && Q != null && /* @__PURE__ */ r.jsx("circle", { cx: $, cy: Q, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" }) }),
                  H && O != null && Y != null && /* @__PURE__ */ r.jsx("circle", { cx: O, cy: Y, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                ep,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (_) => _.x instanceof Date ? _.x : new Date(_.x),
                  smooth: !1,
                  strokeWidth: m
                }
              ),
              t && j.map((_, E) => {
                const $ = x(_.x instanceof Date ? _.x : new Date(_.x)), Q = w(_.y), O = T.has(E), Y = S?.[E], ae = L === "ungated" && !!Y?.special && Y?.variation === He.Neither && f != null && f !== Re.Neither, he = ae && (Y?.trendUp && f === Re.Up || Y?.trendDown && f === Re.Down), pe = ae && (Y?.trendUp && f === Re.Down || Y?.trendDown && f === Re.Up), ve = !!(Y?.improvement || he), de = !!(Y?.concern || pe), q = [
                  "fdp-spc__point",
                  O && o ? "fdp-spc__point--ooc" : null,
                  l && Y?.special && de ? "fdp-spc__point--sc-concern" : null,
                  l && Y?.special && ve ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && p && Y?.special && Y.variation === He.Neither && !ve && !de ? "fdp-spc__point--sc-no-judgement" : null,
                  Y?.assurance === Bt.Pass ? "fdp-spc__point--assurance-pass" : null,
                  Y?.assurance === Bt.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), V = `Point ${E + 1} value ${_.y}` + (Y?.special ? " special cause" : "") + (Y?.variation === He.Improvement ? " improving" : Y?.variation === He.Concern ? " concern" : ""), oe = g?.focused?.index === E;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: $,
                    cy: Q,
                    r: 5,
                    className: q,
                    "data-variation": Y?.variation,
                    "data-assurance": Y?.assurance,
                    "aria-label": V,
                    ...oe ? { "aria-describedby": `spc-tooltip-${E}` } : {}
                  },
                  E
                );
              }),
              d && l && S && j.map((_, E) => {
                const $ = S[E];
                if (!$ || !($.concern || $.improvement)) return null;
                const Q = x(_.x instanceof Date ? _.x : new Date(_.x)), O = w(_.y);
                let Y = O - 10;
                const ae = 12, he = w.range()[0] - 4;
                Y < ae && (Y = Math.min(O + 16, he));
                const pe = x.range()[1], ve = Math.min(Math.max(Q, 0), pe - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: ve,
                    y: Y,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${$.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: $.concern ? "!" : "★"
                  },
                  `icon-${E}`
                );
              }),
              N && /* @__PURE__ */ r.jsx(
                Dp,
                {
                  width: x.range()[1],
                  height: w.range()[0]
                }
              ),
              /* @__PURE__ */ r.jsx(
                Yi,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: ee,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (_) => ie(_),
                  enableNeutralNoJudgement: p,
                  showTrendGatingExplanation: A
                }
              )
            ] })
          }
        ),
        n && /* @__PURE__ */ r.jsx(
          tp,
          {
            format: (_) => le({ ..._, x: _.x instanceof Date ? _.x : new Date(_.x) })
          }
        )
      ]
    }
  ) });
}, Dp = ({
  width: e,
  height: t
}) => {
  const n = zt();
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
        const o = a.currentTarget.getBoundingClientRect(), i = a.clientX - o.left, l = a.clientY - o.top;
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
}, $p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Rt,
  Direction: Ce,
  MetricPolarity: Ve,
  SPCAssuranceIcon: Or,
  SPCVariationIcon: Wr,
  VariationJudgement: nt,
  VariationState: Ie,
  getVariationColour: Cs,
  getVariationTrend: zr
}, Symbol.toStringTag, { value: "Module" })), ib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Bt,
  AssuranceResult: Rt,
  BaselineSuggestionReason: Ui,
  ChartType: bs,
  Direction: Ce,
  Icons: $p,
  ImprovementDirection: Re,
  MetricPolarity: Ve,
  RULE_METADATA: cr,
  SPCAssuranceIcon: Or,
  SPCChart: Np,
  SPCTooltipOverlay: Yi,
  SPCVariationIcon: Wr,
  SpcWarningCategory: Wi,
  SpcWarningCode: Oi,
  SpcWarningSeverity: At,
  VARIATION_COLOR_TOKENS: ct,
  VariationIcon: He,
  VariationJudgement: nt,
  VariationState: Ie,
  buildSpc: vs,
  extractRuleIds: ws,
  getVariationColorHex: bp,
  getVariationColorToken: Vi,
  getVariationColour: Cs,
  getVariationTrend: zr,
  normaliseSpcSettings: Gi,
  ruleGlossary: _s,
  variationLabel: Ss
}, Symbol.toStringTag, { value: "Module" })), Mp = "150ms", Ip = "300ms", Lp = "500ms", Fp = "cubic-bezier(0.4, 0, 1, 1)", Pp = "cubic-bezier(0, 0, 0.2, 1)", Ep = "cubic-bezier(0.4, 0, 0.2, 1)", Ap = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Rp = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Bp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Hp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", zp = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Wp = "1px", Op = "2px", Up = "4px", Gp = "4px", Vp = "4px", Yp = "2px", qp = "1px", Xp = "0px", Kp = "4px", Zp = "8px", Jp = "12px", Ki = "#d8dde0", Zi = "#4c6272", Ji = "#d8dde0", Qi = "#aeb7bd", el = "#d5281b", tl = "#005eb8", nl = "#ffffff", rl = "#212b32", al = "#007f3b", sl = "#330072", ol = "#7c2855", il = "#d5281b", ll = "#ffeb3b", cl = "#fff9c4", dl = "#ffb81c", ul = "#ed8b00", fl = "#00a499", hl = "#ae2573", pl = "#4c6272", ml = "#768692", gl = "#aeb7bd", xl = "#d8dde0", bl = "#f0f4f5", Qp = "#212b32", em = "#4c6272", tm = "#ffffff", nm = "#212b32", rm = "#005eb8", am = "#7c2855", sm = "#003087", om = "#330072", im = "#ffeb3b", lm = "#212b32", cm = "#d8dde0", dm = "#ffffff33", um = "#d5281b", fm = "#4c6272", hm = "#ffffff", pm = "#007f3b", mm = "#ffffff", gm = "#006530", xm = "#004021", bm = "#004021", ym = "#00000000", vm = "#ffffff", _m = "#005eb8", wm = "#005eb8", Sm = "#d9e5f2", km = "#c7daf0", Cm = "#005eb8", jm = "#ffffff", Nm = "#212b32", Tm = "#d9dde0", Dm = "#b3bcc2", $m = "#b3bcc2", Mm = "#d5281b", Im = "#aa2016", Lm = "#6a140e", Fm = "#6a140e", Pm = "#005eb8", Em = "#004b93", Am = "#002f5c", Rm = "#002f5c", Bm = "8px", Hm = "16px", zm = "12px", Wm = "16px", Om = "4px", Um = "40px", Gm = "4px", Vm = "40px", Ym = "12px", qm = "16px", Xm = "32px", Km = "16px", Zm = "20px", Jm = "28px", Qm = "9px", eg = "2px", tg = "16px", ng = "24px", rg = "8px", ag = "24px", sg = "16px", og = "4px", ig = "4px", lg = "4px", cg = "8px", dg = "4px", ug = "16px", fg = "#007f3b", hg = "#006530", pg = "#004021", mg = "#d8dde0", gg = "#ffffff", xg = "#768692", bg = "#00000000", yg = "#ffeb3b", vg = "#00000000", _g = "#ffffff", wg = "#d9e5f2", Sg = "#c7daf0", kg = "#005eb8", Cg = "#005eb8", yl = "8px", vl = "16px", _l = "12px", wl = "16px", jg = "2px", Ng = "4px", Tg = "4px", Dg = "600", $g = "#ffffff", Mg = "#d8dde0", Ig = "#aeb7bd", Lg = "#f0f4f5", Fg = "#212b32", Pg = "#212b32", Eg = "#005eb8", Sl = "16px", kl = "32px", Cl = "16px", Ag = "1px", Rg = "4px", Bg = "none", Hg = "0 2px 4px rgba(0, 0, 0, 0.1)", zg = "#ffffff", Wg = "#ffffff", Og = "#d8dde0", Ug = "#ffffff", Gg = "#4c6272", Vg = "#ffeb3b", Yg = "#d5281b", qg = "#aeb7bd", Xg = "#212b32", Kg = "#4c6272", Zg = "#768692", Jg = "#212b32", Qg = "#ffffff", e0 = "600", t0 = "#d5281b", n0 = "600", r0 = "#4c6272", jl = "4px", Nl = "40px", Tl = "40px", Dl = "12px", a0 = "2px", s0 = "4px", o0 = "0px", i0 = "16px", l0 = "18px", c0 = "24px", d0 = "32px", u0 = "34px", f0 = "32px", h0 = "40px", p0 = "48px", m0 = "5.4ex", g0 = "7.2ex", x0 = "9ex", b0 = "10.8ex", y0 = "20ex", v0 = "38ex", _0 = "56ex", w0 = "44px", S0 = "40px", k0 = "1020px", C0 = "100%", j0 = "50%", N0 = "33.333%", T0 = "25%", D0 = "20%", $0 = "320px", M0 = "641px", I0 = "1025px", L0 = "1280px", F0 = "960px", P0 = "32px", E0 = "16px", A0 = "#d5281b", R0 = "#d5281b", B0 = "#ffffff", H0 = "#007f3b", z0 = "#007f3b", W0 = "#ffffff", O0 = "#ffeb3b", U0 = "#ffeb3b", G0 = "#212b32", V0 = "#005eb8", Y0 = "#005eb8", q0 = "#ffffff", X0 = "#d8dde0", K0 = "#aeb7bd", Z0 = "#768692", J0 = "0 4px 0 #004021", Q0 = "0 4px 0 #005eb8", ex = "0 4px 0 #6a140e", tx = "0 4px 0 #ffeb3b", nx = "none", rx = "0 2px 4px rgba(0, 0, 0, 0.1)", ax = "4px", sx = "0px", ox = "solid", ix = "0 0 0 3px #ffeb3b", lx = "0 0 0 3px #ffeb3b", cx = "none", dx = "0 1px 3px rgba(0, 0, 0, 0.12)", ux = "0 2px 6px rgba(0, 0, 0, 0.16)", fx = "0 4px 12px rgba(0, 0, 0, 0.20)", $l = "0", Ml = "4px", Il = "8px", Ll = "16px", Fl = "24px", Pl = "32px", El = "40px", Al = "48px", Rl = "56px", Bl = "64px", Pa = "0", Ea = "0", Aa = "4px", Ra = "4px", Ba = "8px", Ha = "8px", za = "8px", Wa = "16px", Oa = "16px", Ua = "24px", Ga = "24px", Va = "32px", Ya = "32px", qa = "40px", Xa = "40px", Ka = "48px", Za = "48px", Ja = "56px", Qa = "56px", es = "64px", dr = "Frutiger W01", ur = "Arial, Helvetica, sans-serif", fr = "sans-serif", hr = "400", pr = "600", mr = "400", gr = "12px", xr = "14px", br = "12pt", yr = "14px", vr = "16px", _r = "12pt", wr = "16px", Sr = "19px", kr = "13pt", Cr = "19px", jr = "22px", Nr = "15pt", Tr = "22px", Dr = "26px", $r = "17pt", Mr = "27px", Ir = "36px", Lr = "20pt", Fr = "33px", Pr = "48px", Er = "24pt", ts = "16px", ns = "24px", yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, _t = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, St = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Nt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Tt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, hx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Mp,
  AnimationDurationNormal: Ip,
  AnimationDurationSlow: Lp,
  AnimationEasingBounce: Ap,
  AnimationEasingEaseIn: Fp,
  AnimationEasingEaseInOut: Ep,
  AnimationEasingEaseOut: Pp,
  BorderColorCard: Ji,
  BorderColorCardHover: Qi,
  BorderColorDefault: Ki,
  BorderColorError: el,
  BorderColorForm: Zi,
  BorderRadiusLarge: Jp,
  BorderRadiusMedium: Zp,
  BorderRadiusNone: Xp,
  BorderRadiusSmall: Kp,
  BorderWidthCardBottom: Gp,
  BorderWidthDefault: Wp,
  BorderWidthFormElement: Op,
  BorderWidthFormElementError: Up,
  BorderWidthPanel: Vp,
  BorderWidthTableCell: qp,
  BorderWidthTableHeader: Yp,
  BreakpointDesktop: I0,
  BreakpointLargeDesktop: L0,
  BreakpointMobile: $0,
  BreakpointTablet: M0,
  ButtonBorderRadius: Ng,
  ButtonBorderWidth: jg,
  ButtonPrimaryBackgroundActive: pg,
  ButtonPrimaryBackgroundDefault: fg,
  ButtonPrimaryBackgroundDisabled: mg,
  ButtonPrimaryBackgroundHover: hg,
  ButtonPrimaryBorderDefault: bg,
  ButtonPrimaryBorderFocus: yg,
  ButtonPrimaryTextDefault: gg,
  ButtonPrimaryTextDisabled: xg,
  ButtonSecondaryBackgroundActive: Sg,
  ButtonSecondaryBackgroundDefault: vg,
  ButtonSecondaryBackgroundHover: wg,
  ButtonSecondaryBackgroundSolid: _g,
  ButtonSecondaryBorderDefault: Cg,
  ButtonSecondaryTextDefault: kg,
  ButtonShadowSize: Tg,
  ButtonSpacingPaddingHorizontalDesktop: wl,
  ButtonSpacingPaddingHorizontalMobile: vl,
  ButtonSpacingPaddingVerticalDesktop: _l,
  ButtonSpacingPaddingVerticalMobile: yl,
  ButtonTypographyWeight: Dg,
  CardBackgroundDefault: $g,
  CardBorderBottom: Lg,
  CardBorderDefault: Mg,
  CardBorderHover: Ig,
  CardBorderWidthBottom: Rg,
  CardBorderWidthDefault: Ag,
  CardShadowDefault: Bg,
  CardShadowHover: Hg,
  CardSpacingHeadingMargin: Cl,
  CardSpacingPaddingDesktop: kl,
  CardSpacingPaddingMobile: Sl,
  CardTextDescription: Pg,
  CardTextHeading: Fg,
  CardTextLink: Eg,
  ColorBorderDefault: cm,
  ColorBorderSecondary: dm,
  ColorButtonLoginActive: Am,
  ColorButtonLoginBackground: Pm,
  ColorButtonLoginHover: Em,
  ColorButtonLoginShadow: Rm,
  ColorButtonPrimaryActive: xm,
  ColorButtonPrimaryBackground: pm,
  ColorButtonPrimaryHover: gm,
  ColorButtonPrimaryShadow: bm,
  ColorButtonPrimaryText: mm,
  ColorButtonReverseActive: Dm,
  ColorButtonReverseBackground: jm,
  ColorButtonReverseHover: Tm,
  ColorButtonReverseShadow: $m,
  ColorButtonReverseText: Nm,
  ColorButtonSecondaryActive: km,
  ColorButtonSecondaryBackground: ym,
  ColorButtonSecondaryBackgroundSolid: vm,
  ColorButtonSecondaryBorder: _m,
  ColorButtonSecondaryHover: Sm,
  ColorButtonSecondaryShadow: Cm,
  ColorButtonSecondaryText: wm,
  ColorButtonWarningActive: Lm,
  ColorButtonWarningBackground: Mm,
  ColorButtonWarningHover: Im,
  ColorButtonWarningShadow: Fm,
  ColorError: um,
  ColorFocusBackground: im,
  ColorFocusText: lm,
  ColorFormBackground: hm,
  ColorFormBorder: fm,
  ColorGrey1: pl,
  ColorGrey2: ml,
  ColorGrey3: gl,
  ColorGrey4: xl,
  ColorGrey5: bl,
  ColorLinkActive: sm,
  ColorLinkDefault: rm,
  ColorLinkHover: am,
  ColorLinkVisited: om,
  ColorPrimaryBlack: rl,
  ColorPrimaryBlue: tl,
  ColorPrimaryDarkPink: ol,
  ColorPrimaryGreen: al,
  ColorPrimaryPurple: sl,
  ColorPrimaryRed: il,
  ColorPrimaryWhite: nl,
  ColorPrimaryYellow: ll,
  ColorSecondaryAquaGreen: fl,
  ColorSecondaryOrange: ul,
  ColorSecondaryPaleYellow: cl,
  ColorSecondaryPink: hl,
  ColorSecondaryWarmYellow: dl,
  ColorTextPrimary: Qp,
  ColorTextPrint: nm,
  ColorTextReverse: tm,
  ColorTextSecondary: em,
  ComponentBlur: ig,
  ComponentBreadcrumbChevronMarginLeft: Qm,
  ComponentBreadcrumbChevronMarginRight: eg,
  ComponentBreadcrumbPaddingTopDesktop: ng,
  ComponentBreadcrumbPaddingTopMobile: tg,
  ComponentButtonPaddingDesktopHorizontal: Wm,
  ComponentButtonPaddingDesktopVertical: zm,
  ComponentButtonPaddingMobileHorizontal: Hm,
  ComponentButtonPaddingMobileVertical: Bm,
  ComponentButtonShadowSize: Om,
  ComponentCardHeadingMargin: Km,
  ComponentCardPaddingDesktop: Xm,
  ComponentCardPaddingMobile: qm,
  ComponentDetails: cg,
  ComponentExpander: dg,
  ComponentFormCheckboxLabelPadding: Ym,
  ComponentFormCheckboxSize: Vm,
  ComponentFormInputMinHeight: Um,
  ComponentFormInputPadding: Gm,
  ComponentLink: lg,
  ComponentPagination: ug,
  ComponentPanelPaddingDesktop: Jm,
  ComponentPanelPaddingMobile: Zm,
  ComponentSpread: og,
  ComponentSummaryListCellPaddingHorizontal: ag,
  ComponentSummaryListCellPaddingVertical: rg,
  ComponentSummaryListRowMargin: sg,
  ElevationHigh: fx,
  ElevationLow: dx,
  ElevationMedium: ux,
  ElevationNone: cx,
  FocusOutlineOffset: sx,
  FocusOutlineStyle: ox,
  FocusOutlineWidth: ax,
  FocusShadowButton: lx,
  FocusShadowInput: ix,
  FontFamilyBase: dr,
  FontFamilyFallback: ur,
  FontFamilyPrint: fr,
  FontLineHeightBase: ns,
  FontSize14Mobile: gr,
  FontSize14Print: br,
  FontSize14Tablet: xr,
  FontSize16Mobile: yr,
  FontSize16Print: _r,
  FontSize16Tablet: vr,
  FontSize19Mobile: wr,
  FontSize19Print: kr,
  FontSize19Tablet: Sr,
  FontSize22Mobile: Cr,
  FontSize22Print: Nr,
  FontSize22Tablet: jr,
  FontSize26Mobile: Tr,
  FontSize26Print: $r,
  FontSize26Tablet: Dr,
  FontSize36Mobile: Mr,
  FontSize36Print: Lr,
  FontSize36Tablet: Ir,
  FontSize48Mobile: Fr,
  FontSize48Print: Er,
  FontSize48Tablet: Pr,
  FontSizeBase: ts,
  FontWeightBold: pr,
  FontWeightLight: mr,
  FontWeightNormal: hr,
  FormBorderRadius: o0,
  FormBorderWidthDefault: a0,
  FormBorderWidthError: s0,
  FormErrorTextDefault: t0,
  FormErrorTypographyWeight: n0,
  FormHintTextDefault: r0,
  FormInputBackgroundDefault: zg,
  FormInputBackgroundDisabled: Og,
  FormInputBackgroundError: Ug,
  FormInputBackgroundFocus: Wg,
  FormInputBorderDefault: Gg,
  FormInputBorderDisabled: qg,
  FormInputBorderError: Yg,
  FormInputBorderFocus: Vg,
  FormInputTextDefault: Xg,
  FormInputTextDisabled: Zg,
  FormInputTextPlaceholder: Kg,
  FormLabelTextDefault: Jg,
  FormLabelTextRequired: Qg,
  FormLabelTypographyWeight: e0,
  FormSpacingCheckboxLabelPadding: Dl,
  FormSpacingCheckboxSize: Tl,
  FormSpacingInputMinHeight: Nl,
  FormSpacingInputPadding: jl,
  GridGutter: P0,
  GridGutterHalf: E0,
  GridPageWidth: F0,
  HeadingsNhsukHeadingL: vt,
  HeadingsNhsukHeadingM: _t,
  HeadingsNhsukHeadingS: wt,
  HeadingsNhsukHeadingXl: yt,
  HeadingsNhsukHeadingXs: St,
  LayoutColumnActions: D0,
  LayoutColumnFull: C0,
  LayoutColumnHalf: j0,
  LayoutColumnQuarter: T0,
  LayoutColumnThird: N0,
  LayoutContainerMaxWidth: k0,
  ParagraphsBody: kt,
  ParagraphsBodyLarge: Ct,
  ParagraphsBodySmall: jt,
  ParagraphsLedeText: Nt,
  ParagraphsLedeTextSmall: Tt,
  ShadowButtonDefault: J0,
  ShadowButtonFocus: tx,
  ShadowButtonSecondary: Q0,
  ShadowButtonWarning: ex,
  ShadowCardDefault: nx,
  ShadowCardHover: rx,
  SizeButtonMinHeightDesktop: S0,
  SizeButtonMinHeightMobile: w0,
  SizeFormControlLarge: p0,
  SizeFormControlMedium: h0,
  SizeFormControlSmall: f0,
  SizeFormInputWidth2xl: v0,
  SizeFormInputWidth3xl: _0,
  SizeFormInputWidthLg: b0,
  SizeFormInputWidthMd: x0,
  SizeFormInputWidthSm: g0,
  SizeFormInputWidthXl: y0,
  SizeFormInputWidthXs: m0,
  SizeIconExtraLarge: d0,
  SizeIconLarge: c0,
  SizeIconMedium: l0,
  SizeIconNhsDefault: u0,
  SizeIconSmall: i0,
  Spacing0: $l,
  Spacing1: Ml,
  Spacing2: Il,
  Spacing3: Ll,
  Spacing4: Fl,
  Spacing5: Pl,
  Spacing6: El,
  Spacing7: Al,
  Spacing8: Rl,
  Spacing9: Bl,
  SpacingResponsive0Mobile: Pa,
  SpacingResponsive0Tablet: Ea,
  SpacingResponsive1Mobile: Aa,
  SpacingResponsive1Tablet: Ra,
  SpacingResponsive2Mobile: Ba,
  SpacingResponsive2Tablet: Ha,
  SpacingResponsive3Mobile: za,
  SpacingResponsive3Tablet: Wa,
  SpacingResponsive4Mobile: Oa,
  SpacingResponsive4Tablet: Ua,
  SpacingResponsive5Mobile: Ga,
  SpacingResponsive5Tablet: Va,
  SpacingResponsive6Mobile: Ya,
  SpacingResponsive6Tablet: qa,
  SpacingResponsive7Mobile: Xa,
  SpacingResponsive7Tablet: Ka,
  SpacingResponsive8Mobile: Za,
  SpacingResponsive8Tablet: Ja,
  SpacingResponsive9Mobile: Qa,
  SpacingResponsive9Tablet: es,
  StateDisabledBackground: X0,
  StateDisabledBorder: K0,
  StateDisabledText: Z0,
  StateErrorBackground: A0,
  StateErrorBorder: R0,
  StateErrorText: B0,
  StateInfoBackground: V0,
  StateInfoBorder: Y0,
  StateInfoText: q0,
  StateSuccessBackground: H0,
  StateSuccessBorder: z0,
  StateSuccessText: W0,
  StateWarningBackground: O0,
  StateWarningBorder: U0,
  StateWarningText: G0,
  TransitionButtonDefault: Rp,
  TransitionButtonShadow: Bp,
  TransitionCardHover: zp,
  TransitionInputFocus: Hp
}, Symbol.toStringTag, { value: "Module" })), lb = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), cb = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: yt.fontFamily,
      fontWeight: yt.fontWeight,
      fontSize: yt.fontSize.mobile,
      lineHeight: yt.lineHeight,
      marginTop: yt.marginTop,
      marginBottom: yt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), db = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: vt.fontFamily,
      fontWeight: vt.fontWeight,
      fontSize: vt.fontSize.mobile,
      lineHeight: vt.lineHeight,
      marginTop: vt.marginTop,
      marginBottom: vt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), ub = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: _t.fontFamily,
      fontWeight: _t.fontWeight,
      fontSize: _t.fontSize.mobile,
      lineHeight: _t.lineHeight,
      marginTop: _t.marginTop,
      marginBottom: _t.marginBottom.mobile,
      ...n
    },
    children: e
  }
), fb = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: wt.fontFamily,
      fontWeight: wt.fontWeight,
      fontSize: wt.fontSize.mobile,
      lineHeight: wt.lineHeight,
      marginTop: wt.marginTop,
      marginBottom: wt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), hb = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: St.fontFamily,
      fontWeight: St.fontWeight,
      fontSize: St.fontSize.mobile,
      lineHeight: St.lineHeight,
      marginTop: St.marginTop,
      marginBottom: St.marginBottom.mobile,
      ...n
    },
    children: e
  }
), pb = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), mb = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), gb = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), xb = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), bb = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Tt.fontFamily,
      fontWeight: Tt.fontWeight,
      fontSize: Tt.fontSize.mobile,
      lineHeight: Tt.lineHeight,
      marginTop: Tt.marginTop,
      marginBottom: Tt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), yb = () => $e(() => hx, []), vb = () => $e(() => ({
  // Border colors
  BorderColorDefault: Ki,
  BorderColorForm: Zi,
  BorderColorCard: Ji,
  BorderColorCardHover: Qi,
  BorderColorError: el,
  // Primary colors
  ColorPrimaryBlue: tl,
  ColorPrimaryWhite: nl,
  ColorPrimaryBlack: rl,
  ColorPrimaryGreen: al,
  ColorPrimaryPurple: sl,
  ColorPrimaryDarkPink: ol,
  ColorPrimaryRed: il,
  ColorPrimaryYellow: ll,
  // Secondary colors
  ColorSecondaryPaleYellow: cl,
  ColorSecondaryWarmYellow: dl,
  ColorSecondaryOrange: ul,
  ColorSecondaryAquaGreen: fl,
  ColorSecondaryPink: hl,
  // Grey scale
  ColorGrey1: pl,
  ColorGrey2: ml,
  ColorGrey3: gl,
  ColorGrey4: xl,
  ColorGrey5: bl
}), []), _b = () => $e(() => ({
  Spacing0: $l,
  Spacing1: Ml,
  Spacing2: Il,
  Spacing3: Ll,
  Spacing4: Fl,
  Spacing5: Pl,
  Spacing6: El,
  Spacing7: Al,
  Spacing8: Rl,
  Spacing9: Bl
}), []), wb = () => $e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: gr,
    Size16: yr,
    Size19: wr,
    Size22: Cr,
    Size26: Tr,
    Size36: Mr,
    Size48: Fr
  },
  Tablet: {
    Size14: xr,
    Size16: vr,
    Size19: Sr,
    Size22: jr,
    Size26: Dr,
    Size36: Ir,
    Size48: Pr
  },
  Print: {
    Size14: br,
    Size16: _r,
    Size19: kr,
    Size22: Nr,
    Size26: $r,
    Size36: Lr,
    Size48: Er
  },
  Family: {
    Base: dr,
    Fallback: ur,
    Print: fr
  },
  Weight: {
    Normal: hr,
    Bold: pr,
    Light: mr
  },
  Base: {
    Size: ts,
    LineHeight: ns
  },
  // Backward compatibility - individual exports
  FontFamilyBase: dr,
  FontFamilyFallback: ur,
  FontFamilyPrint: fr,
  FontWeightNormal: hr,
  FontWeightBold: pr,
  FontWeightLight: mr,
  FontSize14Mobile: gr,
  FontSize14Tablet: xr,
  FontSize14Print: br,
  FontSize16Mobile: yr,
  FontSize16Tablet: vr,
  FontSize16Print: _r,
  FontSize19Mobile: wr,
  FontSize19Tablet: Sr,
  FontSize19Print: kr,
  FontSize22Mobile: Cr,
  FontSize22Tablet: jr,
  FontSize22Print: Nr,
  FontSize26Mobile: Tr,
  FontSize26Tablet: Dr,
  FontSize26Print: $r,
  FontSize36Mobile: Mr,
  FontSize36Tablet: Ir,
  FontSize36Print: Lr,
  FontSize48Mobile: Fr,
  FontSize48Tablet: Pr,
  FontSize48Print: Er,
  FontSizeBase: ts,
  FontLineHeightBase: ns
}), []), Sb = () => $e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Pa,
    Size1: Aa,
    Size2: Ba,
    Size3: za,
    Size4: Oa,
    Size5: Ga,
    Size6: Ya,
    Size7: Xa,
    Size8: Za,
    Size9: Qa
  },
  Tablet: {
    Size0: Ea,
    Size1: Ra,
    Size2: Ha,
    Size3: Wa,
    Size4: Ua,
    Size5: Va,
    Size6: qa,
    Size7: Ka,
    Size8: Ja,
    Size9: es
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Pa,
  SpacingResponsive0Tablet: Ea,
  SpacingResponsive1Mobile: Aa,
  SpacingResponsive1Tablet: Ra,
  SpacingResponsive2Mobile: Ba,
  SpacingResponsive2Tablet: Ha,
  SpacingResponsive3Mobile: za,
  SpacingResponsive3Tablet: Wa,
  SpacingResponsive4Mobile: Oa,
  SpacingResponsive4Tablet: Ua,
  SpacingResponsive5Mobile: Ga,
  SpacingResponsive5Tablet: Va,
  SpacingResponsive6Mobile: Ya,
  SpacingResponsive6Tablet: qa,
  SpacingResponsive7Mobile: Xa,
  SpacingResponsive7Tablet: Ka,
  SpacingResponsive8Mobile: Za,
  SpacingResponsive8Tablet: Ja,
  SpacingResponsive9Mobile: Qa,
  SpacingResponsive9Tablet: es
}), []), kb = () => $e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: yl,
  ButtonSpacingPaddingHorizontalMobile: vl,
  ButtonSpacingPaddingVerticalDesktop: _l,
  ButtonSpacingPaddingHorizontalDesktop: wl,
  // Card spacing	
  CardSpacingPaddingMobile: Sl,
  CardSpacingPaddingDesktop: kl,
  CardSpacingHeadingMargin: Cl,
  // Form spacing
  FormSpacingInputPadding: jl,
  FormSpacingInputMinHeight: Nl,
  FormSpacingCheckboxSize: Tl,
  FormSpacingCheckboxLabelPadding: Dl
}), []), Cb = () => $e(() => ({
  xl: yt,
  l: vt,
  m: _t,
  s: wt,
  xs: St
}), []), jb = () => $e(() => ({
  body: kt,
  bodyLarge: Ct,
  bodySmall: jt,
  ledeText: Nt,
  ledeTextSmall: Tt
}), []), Nb = () => $e(() => ({
  headings: {
    xl: yt,
    l: vt,
    m: _t,
    s: wt,
    xs: St
  },
  paragraphs: {
    body: kt,
    bodyLarge: Ct,
    bodySmall: jt,
    ledeText: Nt,
    ledeTextSmall: Tt
  },
  fonts: {
    family: {
      base: dr,
      fallback: ur,
      print: fr
    },
    weight: {
      normal: hr,
      bold: pr,
      light: mr
    },
    sizes: {
      mobile: {
        size14: gr,
        size16: yr,
        size19: wr,
        size22: Cr,
        size26: Tr,
        size36: Mr,
        size48: Fr
      },
      tablet: {
        size14: xr,
        size16: vr,
        size19: Sr,
        size22: jr,
        size26: Dr,
        size36: Ir,
        size48: Pr
      },
      print: {
        size14: br,
        size16: _r,
        size19: kr,
        size22: Nr,
        size26: $r,
        size36: Lr,
        size48: Er
      }
    }
  }
}), []);
function Tb(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, s] = K.useState(t), o = K.useCallback(() => s("three-column"), []), i = K.useCallback(() => s((d) => d === "three-column" ? n : d), [n]), l = K.useCallback(() => s((d) => d === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Hl = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, rt = {
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
function Db(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Hl, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${rt.normal.eot}?#iefix") format("eot"),
       url("${t}${rt.normal.woff2}") format("woff2"),
       url("${t}${rt.normal.woff}") format("woff"),
       url("${t}${rt.normal.ttf}") format("truetype");
  src: url("${t}${rt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${rt.bold.eot}?#iefix") format("eot"),
       url("${t}${rt.bold.woff2}") format("woff2"),
       url("${t}${rt.bold.woff}") format("woff"),
       url("${t}${rt.bold.ttf}") format("truetype");
  src: url("${t}${rt.bold.eot}");
}`), a.join(`
`);
}
function $b(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Hl, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${rt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${rt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${rt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${rt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const Mb = '"Frutiger W01", Arial, Helvetica, sans-serif', Ib = "Arial, Helvetica, sans-serif";
async function Lb() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  lc as Account,
  bx as ActionLink,
  Yx as AdaptiveDataGrid,
  Mp as AnimationDurationFast,
  Ip as AnimationDurationNormal,
  Lp as AnimationDurationSlow,
  Ap as AnimationEasingBounce,
  Fp as AnimationEasingEaseIn,
  Ep as AnimationEasingEaseInOut,
  Pp as AnimationEasingEaseOut,
  fi as AppointmentCard,
  tb as AreaSeriesPrimitive,
  vf as AriaDataGrid,
  Ca as AriaTabsDataGrid,
  Yx as AriaTabsDataGridAdaptive,
  jo as Axis,
  ba as BackLink,
  rb as BandScalesProvider,
  nb as BarSeriesPrimitive,
  Ji as BorderColorCard,
  Qi as BorderColorCardHover,
  Ki as BorderColorDefault,
  el as BorderColorError,
  Zi as BorderColorForm,
  Jp as BorderRadiusLarge,
  Zp as BorderRadiusMedium,
  Xp as BorderRadiusNone,
  Kp as BorderRadiusSmall,
  Gp as BorderWidthCardBottom,
  Wp as BorderWidthDefault,
  Op as BorderWidthFormElement,
  Up as BorderWidthFormElementError,
  Vp as BorderWidthPanel,
  qp as BorderWidthTableCell,
  Yp as BorderWidthTableHeader,
  rf as Breadcrumb,
  I0 as BreakpointDesktop,
  L0 as BreakpointLargeDesktop,
  $0 as BreakpointMobile,
  M0 as BreakpointTablet,
  et as Button,
  Ng as ButtonBorderRadius,
  jg as ButtonBorderWidth,
  pg as ButtonPrimaryBackgroundActive,
  fg as ButtonPrimaryBackgroundDefault,
  mg as ButtonPrimaryBackgroundDisabled,
  hg as ButtonPrimaryBackgroundHover,
  bg as ButtonPrimaryBorderDefault,
  yg as ButtonPrimaryBorderFocus,
  gg as ButtonPrimaryTextDefault,
  xg as ButtonPrimaryTextDisabled,
  Sg as ButtonSecondaryBackgroundActive,
  vg as ButtonSecondaryBackgroundDefault,
  wg as ButtonSecondaryBackgroundHover,
  _g as ButtonSecondaryBackgroundSolid,
  Cg as ButtonSecondaryBorderDefault,
  kg as ButtonSecondaryTextDefault,
  Tg as ButtonShadowSize,
  wl as ButtonSpacingPaddingHorizontalDesktop,
  vl as ButtonSpacingPaddingHorizontalMobile,
  _l as ButtonSpacingPaddingVerticalDesktop,
  yl as ButtonSpacingPaddingVerticalMobile,
  Dg as ButtonTypographyWeight,
  ii as Card,
  $g as CardBackgroundDefault,
  Lg as CardBorderBottom,
  Mg as CardBorderDefault,
  Ig as CardBorderHover,
  Rg as CardBorderWidthBottom,
  Ag as CardBorderWidthDefault,
  Px as CardGroup,
  Ex as CardGroupItem,
  Bg as CardShadowDefault,
  Hg as CardShadowHover,
  Cl as CardSpacingHeadingMargin,
  kl as CardSpacingPaddingDesktop,
  Sl as CardSpacingPaddingMobile,
  Pg as CardTextDescription,
  Fg as CardTextHeading,
  Eg as CardTextLink,
  Ax as CareCard,
  yx as CharacterCount,
  sb as ChartEnhancer,
  ab as ChartNoScript,
  gh as ChartRoot,
  hc as Checkbox,
  gc as Checkboxes,
  cm as ColorBorderDefault,
  dm as ColorBorderSecondary,
  Am as ColorButtonLoginActive,
  Pm as ColorButtonLoginBackground,
  Em as ColorButtonLoginHover,
  Rm as ColorButtonLoginShadow,
  xm as ColorButtonPrimaryActive,
  pm as ColorButtonPrimaryBackground,
  gm as ColorButtonPrimaryHover,
  bm as ColorButtonPrimaryShadow,
  mm as ColorButtonPrimaryText,
  Dm as ColorButtonReverseActive,
  jm as ColorButtonReverseBackground,
  Tm as ColorButtonReverseHover,
  $m as ColorButtonReverseShadow,
  Nm as ColorButtonReverseText,
  km as ColorButtonSecondaryActive,
  ym as ColorButtonSecondaryBackground,
  vm as ColorButtonSecondaryBackgroundSolid,
  _m as ColorButtonSecondaryBorder,
  Sm as ColorButtonSecondaryHover,
  Cm as ColorButtonSecondaryShadow,
  wm as ColorButtonSecondaryText,
  Lm as ColorButtonWarningActive,
  Mm as ColorButtonWarningBackground,
  Im as ColorButtonWarningHover,
  Fm as ColorButtonWarningShadow,
  um as ColorError,
  im as ColorFocusBackground,
  lm as ColorFocusText,
  hm as ColorFormBackground,
  fm as ColorFormBorder,
  pl as ColorGrey1,
  ml as ColorGrey2,
  gl as ColorGrey3,
  xl as ColorGrey4,
  bl as ColorGrey5,
  sm as ColorLinkActive,
  rm as ColorLinkDefault,
  am as ColorLinkHover,
  om as ColorLinkVisited,
  rl as ColorPrimaryBlack,
  tl as ColorPrimaryBlue,
  ol as ColorPrimaryDarkPink,
  al as ColorPrimaryGreen,
  sl as ColorPrimaryPurple,
  il as ColorPrimaryRed,
  nl as ColorPrimaryWhite,
  ll as ColorPrimaryYellow,
  fl as ColorSecondaryAquaGreen,
  ul as ColorSecondaryOrange,
  cl as ColorSecondaryPaleYellow,
  hl as ColorSecondaryPink,
  dl as ColorSecondaryWarmYellow,
  Qp as ColorTextPrimary,
  nm as ColorTextPrint,
  tm as ColorTextReverse,
  em as ColorTextSecondary,
  Cn as Column,
  ig as ComponentBlur,
  Qm as ComponentBreadcrumbChevronMarginLeft,
  eg as ComponentBreadcrumbChevronMarginRight,
  ng as ComponentBreadcrumbPaddingTopDesktop,
  tg as ComponentBreadcrumbPaddingTopMobile,
  Wm as ComponentButtonPaddingDesktopHorizontal,
  zm as ComponentButtonPaddingDesktopVertical,
  Hm as ComponentButtonPaddingMobileHorizontal,
  Bm as ComponentButtonPaddingMobileVertical,
  Om as ComponentButtonShadowSize,
  Km as ComponentCardHeadingMargin,
  Xm as ComponentCardPaddingDesktop,
  qm as ComponentCardPaddingMobile,
  cg as ComponentDetails,
  dg as ComponentExpander,
  Ym as ComponentFormCheckboxLabelPadding,
  Vm as ComponentFormCheckboxSize,
  Um as ComponentFormInputMinHeight,
  Gm as ComponentFormInputPadding,
  lg as ComponentLink,
  ug as ComponentPagination,
  Jm as ComponentPanelPaddingDesktop,
  Zm as ComponentPanelPaddingMobile,
  og as ComponentSpread,
  ag as ComponentSummaryListCellPaddingHorizontal,
  rg as ComponentSummaryListCellPaddingVertical,
  sg as ComponentSummaryListRowMargin,
  Po as Container,
  Fx as ContentsList,
  Hl as DEFAULT_FONT_CONFIG,
  Ux as DashboardSummaryGrid,
  Tx as DateInput,
  uf as Details,
  ff as DoDontList,
  fx as ElevationHigh,
  dx as ElevationLow,
  ux as ElevationMedium,
  cx as ElevationNone,
  Fs as ErrorMessage,
  Nx as ErrorSummary,
  hf as Expander,
  rt as FRUTIGER_FONT_FILES,
  ss as Fieldset,
  sx as FocusOutlineOffset,
  ox as FocusOutlineStyle,
  ax as FocusOutlineWidth,
  lx as FocusShadowButton,
  ix as FocusShadowInput,
  dr as FontFamilyBase,
  ur as FontFamilyFallback,
  fr as FontFamilyPrint,
  ns as FontLineHeightBase,
  gr as FontSize14Mobile,
  br as FontSize14Print,
  xr as FontSize14Tablet,
  yr as FontSize16Mobile,
  _r as FontSize16Print,
  vr as FontSize16Tablet,
  wr as FontSize19Mobile,
  kr as FontSize19Print,
  Sr as FontSize19Tablet,
  Cr as FontSize22Mobile,
  Nr as FontSize22Print,
  jr as FontSize22Tablet,
  Tr as FontSize26Mobile,
  $r as FontSize26Print,
  Dr as FontSize26Tablet,
  Mr as FontSize36Mobile,
  Lr as FontSize36Print,
  Ir as FontSize36Tablet,
  Fr as FontSize48Mobile,
  Er as FontSize48Print,
  Pr as FontSize48Tablet,
  ts as FontSizeBase,
  pr as FontWeightBold,
  mr as FontWeightLight,
  hr as FontWeightNormal,
  zo as Footer,
  o0 as FormBorderRadius,
  a0 as FormBorderWidthDefault,
  s0 as FormBorderWidthError,
  t0 as FormErrorTextDefault,
  n0 as FormErrorTypographyWeight,
  r0 as FormHintTextDefault,
  zg as FormInputBackgroundDefault,
  Og as FormInputBackgroundDisabled,
  Ug as FormInputBackgroundError,
  Wg as FormInputBackgroundFocus,
  Gg as FormInputBorderDefault,
  qg as FormInputBorderDisabled,
  Yg as FormInputBorderError,
  Vg as FormInputBorderFocus,
  Xg as FormInputTextDefault,
  Zg as FormInputTextDisabled,
  Kg as FormInputTextPlaceholder,
  Jg as FormLabelTextDefault,
  Qg as FormLabelTextRequired,
  e0 as FormLabelTypographyWeight,
  Dl as FormSpacingCheckboxLabelPadding,
  Tl as FormSpacingCheckboxSize,
  Nl as FormSpacingInputMinHeight,
  jl as FormSpacingInputPadding,
  Ix as GanttChart,
  ya as Grid,
  P0 as GridGutter,
  E0 as GridGutterHalf,
  bh as GridLines,
  F0 as GridPageWidth,
  Ho as Header,
  Mx as HeaderSSR,
  $c as HeaderSearch,
  Ho as HeaderStatic,
  Mt as Heading,
  vt as HeadingsNhsukHeadingL,
  _t as HeadingsNhsukHeadingM,
  wt as HeadingsNhsukHeadingS,
  yt as HeadingsNhsukHeadingXl,
  St as HeadingsNhsukHeadingXs,
  Mc as Hero,
  Lo as Hint,
  Wx as Images,
  rs as Input,
  Rx as InsetText,
  as as Label,
  D0 as LayoutColumnActions,
  C0 as LayoutColumnFull,
  j0 as LayoutColumnHalf,
  T0 as LayoutColumnQuarter,
  N0 as LayoutColumnThird,
  k0 as LayoutContainerMaxWidth,
  eb as Legend,
  xh as LineScalesProvider,
  ep as LineSeriesPrimitive,
  Sc as List,
  Eo as MainWrapper,
  hi as MedicationCard,
  ob as MetricCard,
  pb as NHSBodyText,
  mb as NHSBodyTextLarge,
  gb as NHSBodyTextSmall,
  cb as NHSHeading1,
  db as NHSHeading2,
  ub as NHSHeading3,
  fb as NHSHeading4,
  hb as NHSHeading5,
  xb as NHSLedeText,
  bb as NHSLedeTextSmall,
  $x as NHSThemeProvider,
  Ib as NHS_FALLBACK_FONT_STACK,
  Mb as NHS_FONT_STACK,
  lh as NavigationSplitView,
  Xx as PageTemplate,
  Lx as Pagination,
  af as Panel,
  kt as ParagraphsBody,
  Ct as ParagraphsBodyLarge,
  jt as ParagraphsBodySmall,
  Nt as ParagraphsLedeText,
  Tt as ParagraphsLedeTextSmall,
  ui as PatientCard,
  dh as ProductRoadmap,
  vx as Radios,
  _x as RadiosServer,
  Yx as ResponsiveDataGrid,
  qx as ResponsiveDataGridDemo,
  Yt as Row,
  ib as SPC,
  Np as SPCChart,
  Vn as Select,
  yc as SelectOption,
  J0 as ShadowButtonDefault,
  tx as ShadowButtonFocus,
  Q0 as ShadowButtonSecondary,
  ex as ShadowButtonWarning,
  nx as ShadowCardDefault,
  rx as ShadowCardHover,
  S0 as SizeButtonMinHeightDesktop,
  w0 as SizeButtonMinHeightMobile,
  p0 as SizeFormControlLarge,
  h0 as SizeFormControlMedium,
  f0 as SizeFormControlSmall,
  v0 as SizeFormInputWidth2xl,
  _0 as SizeFormInputWidth3xl,
  b0 as SizeFormInputWidthLg,
  x0 as SizeFormInputWidthMd,
  g0 as SizeFormInputWidthSm,
  y0 as SizeFormInputWidthXl,
  m0 as SizeFormInputWidthXs,
  d0 as SizeIconExtraLarge,
  c0 as SizeIconLarge,
  l0 as SizeIconMedium,
  u0 as SizeIconNhsDefault,
  i0 as SizeIconSmall,
  oi as SkipLink,
  Ox as SlotMatrix,
  Gx as SortStatusControl,
  $l as Spacing0,
  Ml as Spacing1,
  Il as Spacing2,
  Ll as Spacing3,
  Fl as Spacing4,
  Pl as Spacing5,
  El as Spacing6,
  Al as Spacing7,
  Rl as Spacing8,
  Bl as Spacing9,
  Pa as SpacingResponsive0Mobile,
  Ea as SpacingResponsive0Tablet,
  Aa as SpacingResponsive1Mobile,
  Ra as SpacingResponsive1Tablet,
  Ba as SpacingResponsive2Mobile,
  Ha as SpacingResponsive2Tablet,
  za as SpacingResponsive3Mobile,
  Wa as SpacingResponsive3Tablet,
  Oa as SpacingResponsive4Mobile,
  Ua as SpacingResponsive4Tablet,
  Ga as SpacingResponsive5Mobile,
  Va as SpacingResponsive5Tablet,
  Ya as SpacingResponsive6Mobile,
  qa as SpacingResponsive6Tablet,
  Xa as SpacingResponsive7Mobile,
  Ka as SpacingResponsive7Tablet,
  Za as SpacingResponsive8Mobile,
  Ja as SpacingResponsive8Tablet,
  Qa as SpacingResponsive9Mobile,
  es as SpacingResponsive9Tablet,
  wx as SpacingUtilities,
  X0 as StateDisabledBackground,
  K0 as StateDisabledBorder,
  Z0 as StateDisabledText,
  A0 as StateErrorBackground,
  R0 as StateErrorBorder,
  B0 as StateErrorText,
  V0 as StateInfoBackground,
  Y0 as StateInfoBorder,
  q0 as StateInfoText,
  H0 as StateSuccessBackground,
  z0 as StateSuccessBorder,
  W0 as StateSuccessText,
  O0 as StateWarningBackground,
  U0 as StateWarningBorder,
  G0 as StateWarningText,
  yf as SummaryCard,
  Bx as SummaryList,
  dt as Table,
  Hx as Tabs,
  Ye as Tag,
  pf as TaskList,
  xc as Textarea,
  Qx as TooltipOverlay,
  Qh as TooltipProvider,
  Kx as TransactionalPageTemplate,
  Rp as TransitionButtonDefault,
  Bp as TransitionButtonShadow,
  zp as TransitionCardHover,
  Hp as TransitionInputFocus,
  Jx as VisibilityProvider,
  pi as VitalsCard,
  jx as WIDTH_FRACTIONS,
  zx as WarningCallout,
  yi as WidthContainer,
  kx as WidthUtilities,
  Lb as checkFrutigerLoaded,
  gs as createGenericTabsConfig,
  Vx as createTCHTabsConfig,
  Db as generateFrutigerFontFace,
  lb as getResponsiveStyles,
  Sx as getSpacingClass,
  Cx as getWidthClass,
  $b as preloadFrutigerFonts,
  Mf as tchDataConfig,
  vb as useColors,
  kb as useComponentSpacing,
  Cb as useNHSHeadings,
  jb as useNHSParagraphs,
  Dx as useNHSTheme,
  Nb as useNHSTypographySystem,
  Tb as useNavigationSplitDrill,
  sh as useNavigationSplitUrlSync,
  _i as useNhsFdpBreakpoints,
  Sb as useResponsiveSpacing,
  Zx as useResponsiveValue,
  _b as useSpacing,
  yb as useTokens,
  wb as useTypography
};
//# sourceMappingURL=index.esm.js.map
