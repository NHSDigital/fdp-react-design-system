import * as q from "react";
import st, { useState as Ie, useEffect as Be, useCallback as me, useRef as Fe, createElement as $o, useMemo as Me, useContext as Zl, createContext as Jl, forwardRef as gn, useImperativeHandle as Mo, useReducer as Io, memo as Ql, useLayoutEffect as ec, useId as Vn } from "react";
import { createPortal as tc } from "react-dom";
function nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hn = { exports: {} }, yn = {};
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
  if ($s) return yn;
  $s = 1;
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
  return yn.Fragment = t, yn.jsx = r, yn.jsxs = r, yn;
}
var vn = {};
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
    function e(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === C ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case w:
          return "Fragment";
        case p:
          return "Profiler";
        case f:
          return "StrictMode";
        case R:
          return "Suspense";
        case $:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case T:
            return "Portal";
          case I:
            return (A.displayName || "Context") + ".Provider";
          case P:
            return (A._context.displayName || "Context") + ".Consumer";
          case D:
            var U = A.render;
            return A = A.displayName, A || (A = U.displayName || U.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case L:
            return U = A.displayName || null, U !== null ? U : e(A.type) || "Memo";
          case N:
            U = A._payload, A = A._init;
            try {
              return e(A(U));
            } catch {
            }
        }
      return null;
    }
    function t(A) {
      return "" + A;
    }
    function r(A) {
      try {
        t(A);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var H = U.error, te = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return H.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          te
        ), t(A);
      }
    }
    function a(A) {
      if (A === w) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === N)
        return "<...>";
      try {
        var U = e(A);
        return U ? "<" + U + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var A = y.A;
      return A === null ? null : A.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(A) {
      if (m.call(A, "key")) {
        var U = Object.getOwnPropertyDescriptor(A, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function l(A, U) {
      function H() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: H,
        configurable: !0
      });
    }
    function d() {
      var A = e(this.type);
      return v[A] || (v[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function c(A, U, H, te, V, ce, ve, le) {
      return H = ce.ref, A = {
        $$typeof: x,
        type: A,
        key: U,
        props: ce,
        _owner: V
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ve
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function u(A, U, H, te, V, ce, ve, le) {
      var ue = U.children;
      if (ue !== void 0)
        if (te)
          if (E(ue)) {
            for (te = 0; te < ue.length; te++)
              h(ue[te]);
            Object.freeze && Object.freeze(ue);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(ue);
      if (m.call(U, "key")) {
        ue = e(A);
        var J = Object.keys(U).filter(function(j) {
          return j !== "key";
        });
        te = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", B[ue + te] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          te,
          ue,
          J,
          ue
        ), B[ue + te] = !0);
      }
      if (ue = null, H !== void 0 && (r(H), ue = "" + H), i(U) && (r(U.key), ue = "" + U.key), "key" in U) {
        H = {};
        for (var ne in U)
          ne !== "key" && (H[ne] = U[ne]);
      } else H = U;
      return ue && l(
        H,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), c(
        A,
        ue,
        ce,
        V,
        s(),
        H,
        ve,
        le
      );
    }
    function h(A) {
      typeof A == "object" && A !== null && A.$$typeof === x && A._store && (A._store.validated = 1);
    }
    var g = st, x = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), I = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), y = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, m = Object.prototype.hasOwnProperty, E = Array.isArray, _ = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var k, v = {}, M = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), re = _(a(o)), B = {};
    vn.Fragment = w, vn.jsx = function(A, U, H, te, V) {
      var ce = 1e4 > y.recentlyCreatedOwnerStacks++;
      return u(
        A,
        U,
        H,
        !1,
        te,
        V,
        ce ? Error("react-stack-top-frame") : M,
        ce ? _(a(A)) : re
      );
    }, vn.jsxs = function(A, U, H, te, V) {
      var ce = 1e4 > y.recentlyCreatedOwnerStacks++;
      return u(
        A,
        U,
        H,
        !0,
        te,
        V,
        ce ? Error("react-stack-top-frame") : M,
        ce ? _(a(A)) : re
      );
    };
  })()), vn;
}
var Is;
function sc() {
  return Is || (Is = 1, process.env.NODE_ENV === "production" ? Hn.exports = rc() : Hn.exports = ac()), Hn.exports;
}
var n = sc(), na = { exports: {} };
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
  })(na)), na.exports;
}
var ic = oc();
const xe = /* @__PURE__ */ nc(ic), yx = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = xe(
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
}, lc = ({
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
    ) : null, l = o.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, d = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: o.href, children: d }) : o.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
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
      className: xe(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map((o, i) => o && /* @__PURE__ */ n.jsx(
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
const { forwardRef: dc, useCallback: Rt, useState: ra } = q;
function uc(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = ra(!1), [h, g] = ra(!1), [x, T] = ra(!1), w = cc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), f = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", p = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...x && { "data-focused": "true" },
    ...f && { "data-disabled": "true" }
  }, P = Rt(
    () => !f && u(!0),
    [f]
  ), I = Rt(() => u(!1), []), D = Rt(
    () => !f && g(!0),
    [f]
  ), R = Rt(() => {
    g(!1), u(!1);
  }, []), $ = Rt(() => T(!0), []), L = Rt(() => T(!1), []), N = Rt(
    (ue) => {
      ue.key === " " && ("href" in d || ue.currentTarget.getAttribute("role") === "button") && (ue.preventDefault(), ue.currentTarget.click());
    },
    [d]
  ), b = Rt(
    (ue) => {
      if (l) {
        const J = ue.currentTarget;
        if (J.getAttribute("data-processing") === "true") {
          ue.preventDefault();
          return;
        }
        J.setAttribute("data-processing", "true"), setTimeout(() => {
          J.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: ue,
      style: J,
      title: ne,
      ["aria-label"]: j,
      ["aria-describedby"]: S,
      ["aria-labelledby"]: z,
      tabIndex: X,
      ...O
    } = d, Y = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: Y.href,
        target: Y.target,
        rel: Y.rel,
        className: w.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...p,
        ...l && { "data-prevent-double-click": "true" },
        ...O,
        onKeyDown: (de) => {
          Y.onKeyDown?.(de), N(de);
        },
        onClick: (de) => {
          Y.onClick?.(de), b(de);
        },
        onMouseDown: (de) => {
          Y.onMouseDown?.(de), P();
        },
        onMouseUp: (de) => {
          Y.onMouseUp?.(de), I();
        },
        onMouseEnter: (de) => {
          Y.onMouseEnter?.(de), D();
        },
        onMouseLeave: (de) => {
          Y.onMouseLeave?.(de), R();
        },
        onFocus: (de) => {
          Y.onFocus?.(de), $();
        },
        onBlur: (de) => {
          Y.onBlur?.(de), L();
        },
        "aria-disabled": Y["aria-disabled"],
        ...Y["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ue,
        style: J,
        title: ne,
        "aria-label": j,
        "aria-describedby": S,
        "aria-labelledby": z,
        tabIndex: X,
        children: r
      }
    );
  }
  const {
    id: C,
    style: y,
    title: m,
    ["aria-label"]: E,
    ["aria-describedby"]: _,
    ["aria-labelledby"]: k,
    tabIndex: v,
    name: M,
    value: re,
    form: B,
    formAction: A,
    formEncType: U,
    formMethod: H,
    formNoValidate: te,
    formTarget: V,
    autoFocus: ce,
    ...ve
  } = d, le = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: le.type || "button",
      disabled: le.disabled,
      className: w.classes,
      "data-module": "nhs-button",
      ...p,
      ...l && { "data-prevent-double-click": "true" },
      ...le.disabled && { "aria-disabled": "true" },
      ...ve,
      onKeyDown: (ue) => {
        le.onKeyDown?.(ue), N(ue);
      },
      onClick: (ue) => {
        le.onClick?.(ue), b(ue);
      },
      onMouseDown: (ue) => {
        le.onMouseDown?.(ue), P();
      },
      onMouseUp: (ue) => {
        le.onMouseUp?.(ue), I();
      },
      onMouseEnter: (ue) => {
        le.onMouseEnter?.(ue), D();
      },
      onMouseLeave: (ue) => {
        le.onMouseLeave?.(ue), R();
      },
      onFocus: (ue) => {
        le.onFocus?.(ue), $();
      },
      onBlur: (ue) => {
        le.onBlur?.(ue), L();
      },
      id: C,
      style: y,
      title: m,
      "aria-label": E,
      "aria-describedby": _,
      "aria-labelledby": k,
      tabIndex: v,
      name: M,
      value: re,
      form: B,
      formAction: A,
      formEncType: U,
      formMethod: H,
      formNoValidate: te,
      formTarget: V,
      autoFocus: ce,
      children: r
    }
  );
}
const tt = dc(uc);
tt.displayName = "Button";
const _a = ({
  text: e = "Back",
  html: t,
  href: r = "#",
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
      className: d,
      onClick: o,
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
function fc(e) {
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
const qe = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: d,
  ...c
}) => {
  const u = fc({ color: a, noBorder: s, closable: o, disabled: l, className: d }), h = (g) => {
    g.preventDefault(), g.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u.classes, ...c, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ n.jsx(
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
  checked: r,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: i,
  errorMessage: l,
  className: d,
  children: c,
  onChange: u,
  onBlur: h,
  onFocus: g,
  attributes: x,
  ...T
}) => {
  const [w, f] = Ie(a), p = r !== void 0, P = p ? r : w;
  Be(() => {
    p || f(a);
  }, [a, p]);
  const I = (N) => {
    const b = N.target.checked;
    p || f(b), u?.(b, N);
  }, D = i ? `${e}-hint` : void 0, R = l ? `${e}-error` : void 0, $ = [D, R].filter(Boolean).join(" ") || void 0, L = xe(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: L, ...T, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: P,
        disabled: s,
        onChange: I,
        onBlur: h,
        onFocus: g,
        "aria-describedby": $,
        ...x
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: D, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: R, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
hc.displayName = "Checkbox";
function pc(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const os = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: d = !1,
  hasError: c = !1,
  describedBy: u,
  className: h,
  width: g = "full",
  inputMode: x,
  autoComplete: T,
  maxLength: w,
  minLength: f,
  pattern: p,
  step: P,
  min: I,
  max: D,
  showValueLabels: R = !1,
  showCurrentValue: $ = !1,
  valueLabels: L,
  onChange: N,
  onBlur: b,
  onFocus: C,
  onKeyDown: y,
  ...m
}) => {
  const [E, _] = Ie(a || s || (r === "range" ? I || "0" : ""));
  Be(() => {
    a !== void 0 && _(a);
  }, [a]);
  const k = (V) => {
    const ce = V.target;
    _(ce.value), ("type" in V && V.nativeEvent || V.type === "keydown") && N?.(V);
  }, { classes: v, isRange: M } = pc({ type: r, hasError: c, width: g, className: h }), re = a !== void 0, B = {
    id: e,
    name: t,
    type: r,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: x,
    autoComplete: T,
    maxLength: w,
    minLength: f,
    pattern: p,
    step: P,
    min: I,
    max: D,
    onChange: k,
    onBlur: b,
    onFocus: C,
    onKeyDown: (V) => {
      if (M && /[0-9]/.test(V.key)) {
        const ce = (E?.toString() || "") + V.key;
        V.target.value = ce, k(V);
      }
      y?.(V);
    },
    ...m
  }, A = !re && s !== void 0 ? { defaultValue: s } : {}, U = re ? { value: a } : {}, H = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: v,
      ...U,
      ...A,
      "data-current-value": E,
      ...B
    }
  ), te = M ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    R && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || I || "0" }),
      H(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || D || "100" })
    ] }),
    !R && H(),
    $ && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: E })
    ] }) })
  ] }) : null;
  return M ? te : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: v,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": u,
      inputMode: x,
      autoComplete: T,
      maxLength: w,
      minLength: f,
      pattern: p,
      step: P,
      min: I,
      max: D,
      onChange: N,
      onBlur: b,
      onFocus: C,
      onKeyDown: y,
      ...m
    }
  );
};
function mc(e) {
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
const is = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = mc({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
}, ls = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...s
}) => {
  const o = xe(
    "nhsuk-fieldset",
    r
  ), i = xe(
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
      className: o,
      "aria-describedby": a,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, gc = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: d = "",
  small: c = !1,
  onChange: u,
  fieldsetAttributes: h,
  attributes: g,
  ...x
}) => {
  const [T, w] = Ie(
    e.filter((N) => N.checked).map((N) => N.value)
  ), f = r || t, p = i ? `${f}-hint` : void 0, P = l ? `${f}-error` : void 0, I = [p, P].filter(Boolean).join(" ") || void 0, D = (N, b) => {
    let C;
    b ? C = [...T, N] : C = T.filter((y) => y !== N), w(C), u?.(C);
  }, R = () => e.map((N, b) => {
    const C = `${f}-${b + 1}`, y = `${C}-conditional`, m = T.includes(N.value), E = N.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: C,
          name: t,
          type: "checkbox",
          value: N.value,
          checked: m,
          disabled: E,
          onChange: (_) => D(N.value, _.target.checked),
          "aria-describedby": N.hint ? `${C}-hint` : I,
          ...N.conditional && {
            "aria-controls": y,
            "aria-expanded": m ? "true" : "false"
          },
          ...N.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: C, children: N.text }),
      N.hint && /* @__PURE__ */ n.jsx("div", { id: `${C}-hint`, className: "nhsuk-checkboxes__hint", children: N.hint }),
      N.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: xe("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !m
          }),
          id: y,
          children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            N.conditional.label && /* @__PURE__ */ n.jsx(is, { htmlFor: N.conditional.id, children: N.conditional.label }),
            /* @__PURE__ */ n.jsx(os, { ...N.conditional })
          ] }) : N.conditional
        }
      )
    ] }, N.value);
  }), $ = xe(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), L = xe("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: L, ...g, ...x, children: /* @__PURE__ */ n.jsxs(
    ls,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: I,
      ...h,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: p, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: P, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: $, children: R() })
      ]
    }
  ) });
};
gc.displayName = "Checkboxes";
const xc = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: d = !1,
  describedBy: c,
  className: u,
  rows: h = 5,
  cols: g,
  maxLength: x,
  minLength: T,
  wrap: w = "soft",
  resize: f = "vertical",
  autoComplete: p,
  spellCheck: P,
  onChange: I,
  onBlur: D,
  onFocus: R,
  onKeyDown: $,
  ...L
}) => {
  const N = xe(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${f}`]: f !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: N,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: h,
      cols: g,
      maxLength: x,
      minLength: T,
      wrap: w,
      autoComplete: p,
      spellCheck: P,
      onChange: I,
      onBlur: D,
      onFocus: R,
      onKeyDown: $,
      ...L
    }
  );
};
function bc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Lo = ({ id: e, className: t, children: r, ...a }) => {
  const s = bc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: s.classes, id: s.id, ...a, children: r });
}, vx = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: s,
  value: o,
  defaultValue: i,
  rows: l,
  className: d,
  countMessage: c,
  onCountChange: u,
  onChange: h,
  ...g
}) => {
  const x = o ?? i ?? "", [T, w] = Ie(x), [f, p] = Ie(0), [P, I] = Ie(!1), [D, R] = Ie(!1), $ = me((m) => r ? m.trim() === "" ? 0 : m.trim().split(/\s+/).length : m.length, [r]);
  Be(() => {
    const m = $(T), E = t || r || 0, _ = E - m, k = Math.floor(E * (a / 100));
    p(_), I(m > E), R(m >= k || m > E), u && u(m, _);
  }, [T, t, r, a, $, u]);
  const L = (m) => {
    const E = m.target.value;
    w(E), h && h(m);
  }, N = () => {
    const m = t || r || 0, E = r ? "word" : "character", _ = r ? "words" : "characters";
    if (!D)
      return `You can enter up to ${m} ${m === 1 ? E : _}`;
    if (P) {
      const k = Math.abs(f);
      return `You have ${k} ${k === 1 ? E : _} too many`;
    } else
      return `You have ${f} ${f === 1 ? E : _} remaining`;
  }, b = xe(
    "nhsuk-character-count",
    d
  ), C = xe(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !D,
      "nhsuk-error-message": P
    },
    c?.classes
  ), y = xe(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": P
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
          xc,
          {
            id: e,
            name: s,
            value: o !== void 0 ? T : void 0,
            defaultValue: o === void 0 ? i ?? T : void 0,
            rows: l,
            className: y,
            onChange: L,
            "aria-describedby": `${e}-info`,
            "aria-invalid": P || void 0,
            ...g
          }
        ),
        /* @__PURE__ */ n.jsx(
          Lo,
          {
            id: `${e}-info`,
            className: C,
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
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
}) => {
  const i = xe(
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
}, vc = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: a,
  defaultValue: s,
  disabled: o = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: d,
  className: c,
  multiple: u = !1,
  size: h,
  autoComplete: g,
  options: x,
  children: T,
  onChange: w,
  onBlur: f,
  onFocus: p,
  ...P
}) => {
  const I = xe(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), D = () => x ? x.map(($, L) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: $.value,
      disabled: $.disabled,
      "data-initial-selected": $.selected || void 0,
      children: $.text
    },
    `${$.value}-${L}`
  )) : null, R = s === void 0 && a === void 0 && x ? x.find(($) => $.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: I,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: s !== void 0 ? s : R,
      disabled: o,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: h,
      autoComplete: g,
      onChange: w,
      onBlur: f,
      onFocus: p,
      ...P,
      children: T || D()
    }
  );
}, Yn = vc;
Yn.Option = yc;
function Fo(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: u, onFocus: h, ...g } = e, {
    name: x,
    hasError: T = !1,
    describedBy: w,
    className: f,
    size: p = "normal",
    inline: P = !1,
    options: I,
    ...D
  } = g, R = xe(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": T,
      "nhsuk-radios--small": p === "small",
      "nhsuk-radios--inline": P
    },
    f
  );
  return /* @__PURE__ */ n.jsx(ls, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: R,
      ...D,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: I.map(($, L) => {
        const N = `${x}-${L}`, b = $.conditional ? `${N}-conditional` : void 0, C = r === $.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: N,
              name: x,
              type: "radio",
              value: $.value,
              disabled: $.disabled,
              ...t === "client" ? { checked: C, onChange: s, onBlur: o, onFocus: i, onKeyDown: l, ref: (y) => {
                y && d && (d.current[L] = y);
              } } : { defaultChecked: C, "data-nhs-radios-input": !0 },
              "aria-describedby": w
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: N, children: $.text }),
          $.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: $.hint }),
          $.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: xe("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !C
              }),
              id: b,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof $.conditional == "object" && $.conditional !== null && "label" in $.conditional && "id" in $.conditional && "name" in $.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                $.conditional.label && /* @__PURE__ */ n.jsx(is, { htmlFor: $.conditional.id, children: $.conditional.label }),
                /* @__PURE__ */ n.jsx(os, { ...$.conditional })
              ] }) : $.conditional
            }
          )
        ] }, $.value);
      })
    }
  ) });
}
const _x = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Ie(e || t || ""), d = Fe([]), c = Fe(i), u = (x) => {
    const T = x.target.value;
    T !== c.current && (c.current = T, l(T), r?.(x));
  }, h = (x) => {
    s?.(x);
  }, g = me((x) => {
    const { key: T } = x;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(T)) return;
    x.preventDefault();
    const w = d.current.filter((I) => I && !I.disabled), f = w.indexOf(x.currentTarget);
    if (f === -1) return;
    let p = f;
    ["ArrowDown", "ArrowRight"].includes(T) ? p = (f + 1) % w.length : ["ArrowUp", "ArrowLeft"].includes(T) && (p = (f - 1 + w.length) % w.length);
    const P = w[p];
    P && (P.focus(), P.checked || P.click());
  }, []);
  return Fo(
    { value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: a,
      handleFocus: h,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: g,
      itemsRef: d
    }
  );
}, wx = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return Fo(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, Po = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = xe(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = a ? { maxWidth: a, ...s || {} } : s;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...o, children: e });
}, qt = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = xe("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, style: r, ...a, children: e });
}, jn = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
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
      [`nhsuk-u-${r}-mobile`]: r,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${s}-desktop`]: s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: u, style: d, ...c, children: e });
}, wa = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = st.Children.toArray(e)[0], i = st.isValidElement(o) && (o.type === qt || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Po, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(qt, { children: e }) });
}, _c = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
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
      [`nhsuk-list--${r}`]: r !== "medium"
    },
    s
  );
  return /* @__PURE__ */ n.jsx(d, { className: c, role: o, ...l, children: e });
}, wc = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = xe("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Sc = _c;
Sc.Item = wc;
const Sx = ({
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
}, kx = {
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
}, Cx = ({
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
}, jx = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Nx = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Eo = ({
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
  const t = e.level ?? kc(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const It = ({ level: e, className: t, text: r, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const d = Cc({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return $o(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function jc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Fs = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...s }) => {
  const o = jc({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Tx = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
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
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, g = (x) => {
    const T = x.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
    return x.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: x.href,
        ...x.attributes,
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: h() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((x, T) => /* @__PURE__ */ n.jsx("li", { children: g(x) }, T)) })
        ] })
      ]
    }
  );
}, Dx = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: d,
  ...c
}) => {
  const [u, h] = Ie(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [g, x] = Ie({}), T = (k) => k % 4 === 0 && k % 100 !== 0 || k % 400 === 0, w = (k, v) => {
    const M = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return k === 2 && T(v) ? 29 : M[k - 1];
  }, f = (k, v, M) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Day must be a number";
    const re = parseInt(k, 10);
    if (re < 1 || re > 31) return "Day must be between 1 and 31";
    if (v && M) {
      const B = parseInt(v, 10), A = parseInt(M, 10);
      if (!isNaN(B) && !isNaN(A) && B >= 1 && B <= 12) {
        const U = w(B, A);
        if (re > U)
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
          ][B - 1]} ${A} only has ${U} days`;
      }
    }
  }, p = (k) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Month must be a number";
    const v = parseInt(k, 10);
    if (v < 1 || v > 12) return "Month must be between 1 and 12";
  }, P = (k) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Year must be a number";
    const v = parseInt(k, 10), M = (/* @__PURE__ */ new Date()).getFullYear();
    if (v < 1900 || v > M + 10)
      return `Year must be between 1900 and ${M + 10}`;
  }, I = (k, v, M) => {
    if (!k || !v || !M) return;
    const re = parseInt(k, 10), B = parseInt(v, 10), A = parseInt(M, 10);
    if (isNaN(re) || isNaN(B) || isNaN(A) || B < 1 || B > 12 || A < 1900) return;
    const U = w(B, A);
    re < 1 || re > U;
  }, D = me((k, v) => {
    const M = {
      ...u,
      [k]: v
    };
    h(M), d && d(M);
  }, [u, d]), R = me((k) => {
    const v = u[k];
    let M;
    if (k === "day")
      M = f(v, u.month, u.year);
    else if (k === "month") {
      if (M = p(v), !M && u.day) {
        const re = f(u.day, v, u.year);
        x((B) => ({
          ...B,
          day: re
        }));
      }
    } else if (k === "year" && (M = P(v), !M && u.day && u.month)) {
      const re = f(u.day, u.month, v);
      x((B) => ({
        ...B,
        day: re
      }));
    }
    if (x((re) => ({
      ...re,
      [k]: M
    })), u.day && u.month && u.year) {
      const re = I(
        k === "day" ? v : u.day,
        k === "month" ? v : u.month,
        k === "year" ? v : u.year
      );
      re && x((B) => ({
        ...B,
        day: re
      }));
    }
  }, [u, f, p, P, I]), $ = Me(() => [
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
  ], []), L = r || $;
  let N = o?.describedBy || "";
  const b = i ? `${e}-hint` : "", C = l ? `${e}-error` : "";
  b && (N = N ? `${N} ${b}` : b), C && (N = N ? `${N} ${C}` : C);
  const y = Object.values(g).some((k) => k), m = xe(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || y
    }
  ), E = xe(
    "nhsuk-date-input",
    t
  ), _ = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Lo,
      {
        id: b,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Fs,
      {
        id: C,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([k, v]) => v ? /* @__PURE__ */ n.jsxs(
        Fs,
        {
          id: `${e}-${k}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            v
          ]
        },
        `${k}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: E, id: e, "data-testid": "date-input", ...c, children: L.map((k) => {
      const v = k.id || `${e}-${k.name}`, M = a ? `${a}[${k.name}]` : k.name, re = k.label || k.name.charAt(0).toUpperCase() + k.name.slice(1), B = g[k.name], A = u[k.name] || "";
      let U = N;
      if (B) {
        const H = `${e}-${k.name}-error`;
        U = U ? `${U} ${H}` : H;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          is,
          {
            htmlFor: v,
            className: "nhsuk-date-input__label",
            children: re
          }
        ),
        /* @__PURE__ */ n.jsx(
          os,
          {
            id: v,
            name: M,
            value: A,
            className: xe("nhsuk-date-input__input", k.classes, {
              "nhsuk-input--error": B
            }),
            inputMode: k.inputmode,
            autoComplete: k.autocomplete,
            pattern: k.pattern,
            "aria-describedby": U || void 0,
            hasError: !!B,
            onChange: (H) => D(k.name, H.target.value),
            onBlur: () => R(k.name)
          }
        )
      ] }, k.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: m, children: o ? /* @__PURE__ */ n.jsx(
    ls,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: N || void 0,
      children: _()
    }
  ) : _() });
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
  const r = { ...Ao, ...t };
  return /* @__PURE__ */ n.jsx(Ro.Provider, { value: r, children: e });
}, $x = () => {
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
const Mx = ({ children: e, theme: t }) => (Be(() => {
  Dc();
}, []), /* @__PURE__ */ n.jsx(Nc, { theme: t, children: e })), $c = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: d,
  disabled: c = !1,
  callbacks: u = {},
  isLoading: h = !1,
  showResults: g = !1,
  results: x = [],
  formAttributes: T = {},
  inputAttributes: w = {},
  buttonAttributes: f = {},
  preventDefaultSubmit: p = !1,
  debounceMs: P = 300,
  minQueryLength: I = 1
}) => {
  const [D, R] = Ie(""), [$, L] = Ie(!1), N = Fe(void 0), b = Fe(null), C = Fe(null), y = e === "controlled" && s !== void 0, m = y ? s : D, E = me((te) => {
    N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      u.onChange && te.length >= I && u.onChange(te);
    }, P);
  }, [u.onChange, P, I]), _ = me((te) => {
    const V = te.target.value;
    y || R(V), e !== "form" && E(V);
  }, [y, e, E]), k = me((te) => {
    const V = m.trim(), ce = {
      query: V,
      timestamp: Date.now(),
      formData: new FormData(te.currentTarget)
    };
    e === "controlled" || e === "hybrid" && p ? (te.preventDefault(), u.onSearch && V.length >= I && u.onSearch(ce)) : e === "hybrid" && u.onSearch && V.length >= I && u.onSearch(ce);
  }, [e, m, u.onSearch, p, I]), v = me(() => {
    L(!0), u.onFocus?.();
  }, [u.onFocus]), M = me(() => {
    L(!1), u.onBlur?.();
  }, [u.onBlur]), re = me(() => {
    y || R(""), u.onClear?.(), C.current?.focus();
  }, [y, u.onClear]);
  Be(() => () => {
    N.current && clearTimeout(N.current);
  }, []);
  const B = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: xe("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": h
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), A = () => /* @__PURE__ */ n.jsx(
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
  ), U = () => !m || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: re,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), H = () => !g || !x.length || !$ ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: x.map((te) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: te.href ? /* @__PURE__ */ n.jsxs("a", { href: te.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: te.title }),
    te.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: te.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: te.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: te.title }),
        te.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: te.description })
      ]
    }
  ) }, te.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: xe("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": $,
    "nhsuk-header__search--has-results": g && x.length > 0
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
        onSubmit: k,
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
                ref: C,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: m,
                onChange: _,
                onFocus: v,
                onBlur: M,
                disabled: c || h,
                ...g && x.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...w
              }
            ),
            U()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && m.length < I,
              ...f,
              children: [
                h ? A() : B(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    H()
  ] });
};
function Bo(e, {
  variant: t,
  isClient: r,
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
    service: g = {},
    organisation: x,
    search: T,
    account: w,
    navigation: f,
    containerClasses: p,
    variant: P = "default",
    attributes: I = {},
    maxVisibleItems: D,
    // deprecated (ignored)
    responsiveNavigation: R = !0,
    ...$
  } = e;
  "maxVisibleItems" in $ && delete $.maxVisibleItems;
  const L = g.href && !h.href || g.href && g.href === h.href, N = L ? g.href : h.href, b = xe(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": P === "organisation" || x,
      "nhsuk-header--white": P === "white"
    },
    u
  ), C = xe(
    "nhsuk-header__container",
    p
  ), y = xe(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": f?.white,
      "nhsuk-header__navigation--justified": f?.justified
    },
    f?.className
  ), m = () => /* @__PURE__ */ n.jsxs(
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
  ), E = () => h.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : m(), _ = () => x ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      x.name,
      x.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        x.split
      ] })
    ] }),
    x.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: x.descriptor })
  ] }) : null, k = (U, H) => U ? H ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: H, children: U }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: U }) : null, v = (U) => U.active || U.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: U.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: U.html } }) : U.text }) : U.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: U.html } }) : U.text, M = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), re = t === "server" && f?.items && !R, B = re ? [] : f?.items, A = re ? f.items : [];
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: b,
      role: "banner",
      "data-module": "nhsuk-header",
      ...I,
      ...$,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: C, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            N ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: N, children: [
              E(),
              _(),
              L && k(g.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              E(),
              _(),
              L && k(g.text)
            ] }),
            g.text && !L && k(g.text, g.href)
          ] }),
          T && /* @__PURE__ */ n.jsx($c, { ...T }),
          /* @__PURE__ */ n.jsx(
            lc,
            {
              ...w,
              variant: P === "white" ? "white" : "default"
            }
          )
        ] }),
        f && f.items && f.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: y,
            "aria-label": f.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: xe(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  p
                ),
                ref: t === "client" ? d : void 0,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: t === "client" ? c : void 0,
                    children: [
                      (t === "server" ? B || [] : f?.items || []).map((U, H) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: xe(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": U.active || U.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && s && o !== void 0 && H >= (o ?? 0)
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
                              children: v(U)
                            }
                          )
                        },
                        H
                      )),
                      t === "client" && s && o !== void 0 && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs(
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
                            M()
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
        t === "client" && r && f && f.items && f.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: f.items.slice(o ?? 0).map((U, H) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: xe("nhsuk-header__dropdown-item", {
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
                    children: v(U)
                  }
                )
              },
              `overflow-${(o ?? 0) + H}`
            )) })
          }
        ),
        t === "server" && re && A.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: A.map((U, H) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: xe("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": U.active || U.current
            }),
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: U.href,
                ...U.active || U.current ? { "aria-current": U.current ? "page" : "true" } : {},
                children: v(U)
              }
            )
          },
          `overflow-server-${H}`
        )) }) })
      ]
    }
  );
}
const Ho = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: c = {},
  ...u
}) => {
  const [h, g] = Ie(!1), [x, T] = Ie(!1), [w, f] = Ie(i?.items?.length || 0), [p, P] = Ie(!1), [I, D] = Ie(!1), R = Fe(null), $ = Fe(null), L = Fe(!1);
  Be(() => {
    typeof window > "u" || D(!0);
  }, []), Be(() => {
    if (typeof document > "u") return;
    const y = (m) => {
      m.key === "Escape" && h && g(!1);
    };
    if (h)
      return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
  }, [h]);
  const N = Fe(null), b = me(() => {
    if (!I || !i?.items || i.items.length === 0 || L.current) return;
    const y = R.current, m = $.current;
    if (!y || !m) return;
    L.current = !0, y.classList.add("nhsuk-header__navigation-container--measuring");
    const E = y.clientWidth, _ = Array.from(m.children);
    if (!_.length) {
      y.classList.remove("nhsuk-header__navigation-container--measuring"), L.current = !1;
      return;
    }
    if (N.current == null) {
      const V = document.createElement("button");
      V.type = "button", V.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", V.style.position = "absolute", V.style.visibility = "hidden", V.style.pointerEvents = "none", V.innerHTML = "<span>More</span>", y.appendChild(V), N.current = V.getBoundingClientRect().width || 104, y.removeChild(V);
    }
    const k = N.current + 16;
    let v = 0, M = 0;
    const re = window.getComputedStyle(y), B = parseFloat(re.paddingLeft) || 0, A = parseFloat(re.paddingRight) || 0;
    let U = B + A;
    for (const V of _) {
      const ce = V.getBoundingClientRect().width;
      if (v + ce + k + U > E) break;
      v += ce, M += 1;
    }
    const H = M < i.items.length, te = H ? M : i.items.length;
    T((V) => V === H ? V : H), f((V) => V === te ? V : te), y.classList.remove("nhsuk-header__navigation-container--measuring"), L.current = !1;
  }, [I, i?.items]);
  Be(() => {
    if (!I) return;
    const y = R.current;
    if (!y) return;
    let m = null;
    const E = () => {
      m == null && (m = window.requestAnimationFrame(() => {
        m = null, b();
      }));
    };
    b();
    const _ = new ResizeObserver(() => E());
    return _.observe(y), $.current && _.observe($.current), () => {
      m != null && window.cancelAnimationFrame(m), _.disconnect();
    };
  }, [I, b]), Be(() => {
    I && b();
  }, [i?.items?.length, I, b]);
  const C = (y) => {
    y && (y.preventDefault(), y.stopPropagation());
    const m = !h;
    g(m), P(m);
  };
  return Bo(
    {
      className: e,
      logo: t,
      service: r,
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
      isClient: I,
      menuOpen: h,
      showMoreButton: x,
      visibleItems: w,
      dropdownVisible: p,
      toggleMenu: C,
      navContainerRef: R,
      navListRef: $
    }
  );
}, Ix = (e) => Bo(e, {
  variant: "server",
  isClient: !1
}), Mc = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
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
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    r,
    !d && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), x = d || e || a || s, T = () => {
    if (!e) return null;
    const w = { className: g };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...w, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...w, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...w, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...w, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...w, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...w, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...w, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: u,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: x && /* @__PURE__ */ n.jsx("div", { className: h, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          T(),
          d || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && x && /* @__PURE__ */ n.jsx("div", { className: h, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          T(),
          d || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Mc.displayName = "Hero";
const zo = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: d,
  footerStyle: c,
  containerStyle: u
}) => {
  const h = (x, T = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: xe("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": T
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: x.URL,
          target: x.newWindow ? "_blank" : void 0,
          rel: x.newWindow ? "noopener noreferrer" : void 0,
          children: x.label
        }
      )
    },
    `${x.URL}-${x.label}`
  ), g = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: xe("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: xe("nhsuk-footer", e), style: c, children: g ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((x) => h(x)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((x) => h(x)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((x) => h(x)) }),
              s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((x) => h(x)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((x) => h(x, !0)),
              (r || []).map((x) => h(x, !0)),
              (a || []).map((x) => h(x, !0)),
              (s || []).map((x) => h(x, !0))
            ] })
          ) }),
          !g && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function Gn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ic(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function cs(e) {
  let t, r, a;
  e.length !== 2 ? (t = Gn, r = (l, d) => Gn(e(l), d), a = (l, d) => e(l) - d) : (t = e === Gn || e === Ic ? e : Lc, r = e, a = e);
  function s(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const h = c + u >>> 1;
        r(l[h], d) < 0 ? c = h + 1 : u = h;
      } while (c < u);
    }
    return c;
  }
  function o(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const h = c + u >>> 1;
        r(l[h], d) <= 0 ? c = h + 1 : u = h;
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
const Pc = cs(Gn), Ec = Pc.right;
cs(Fc).center;
function Wo(e, t) {
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
class Ps extends Map {
  constructor(t, r = Bc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(Es(this, t));
  }
  has(t) {
    return super.has(Es(this, t));
  }
  set(t, r) {
    return super.set(Ac(this, t), r);
  }
  delete(t) {
    return super.delete(Rc(this, t));
  }
}
function Es({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function Ac({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function Rc({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function Bc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Hc = Math.sqrt(50), zc = Math.sqrt(10), Wc = Math.sqrt(2);
function qn(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Hc ? 10 : o >= zc ? 5 : o >= Wc ? 2 : 1;
  let l, d, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? qn(e, t, r * 2) : [l, d, c];
}
function Oc(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? qn(t, e, r) : qn(e, t, r);
  if (!(o >= s)) return [];
  const l = o - s + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (o - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (s + c) * i;
  return d;
}
function Sa(e, t, r) {
  return t = +t, e = +e, r = +r, qn(e, t, r)[2];
}
function ka(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? Sa(t, e, r) : Sa(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Uc(e, t, r) {
  e = +e, t = +t, r = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +r;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * r;
  return o;
}
function Rr(e, t) {
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
  var e = new Ps(), t = [], r = [], a = As;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== As) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return r[i % r.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ps();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (r = Array.from(o), s) : r.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return Oo(t, r).unknown(a);
  }, Rr.apply(s, arguments), s;
}
function Uo() {
  var e = Oo().unknown(void 0), t = e.domain, r = e.range, a = 0, s = 1, o, i, l = !1, d = 0, c = 0, u = 0.5;
  delete e.unknown;
  function h() {
    var g = t().length, x = s < a, T = x ? s : a, w = x ? a : s;
    o = (w - T) / Math.max(1, g - d + c * 2), l && (o = Math.floor(o)), T += (w - T - o * (g - d)) * u, i = o * (1 - d), l && (T = Math.round(T), i = Math.round(i));
    var f = Uc(g).map(function(p) {
      return T + o * p;
    });
    return r(x ? f.reverse() : f);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), h()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([a, s] = g, a = +a, s = +s, h()) : [a, s];
  }, e.rangeRound = function(g) {
    return [a, s] = g, a = +a, s = +s, l = !0, h();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return o;
  }, e.round = function(g) {
    return arguments.length ? (l = !!g, h()) : l;
  }, e.padding = function(g) {
    return arguments.length ? (d = Math.min(1, c = +g), h()) : d;
  }, e.paddingInner = function(g) {
    return arguments.length ? (d = Math.min(1, g), h()) : d;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (c = +g, h()) : c;
  }, e.align = function(g) {
    return arguments.length ? (u = Math.max(0, Math.min(1, g)), h()) : u;
  }, e.copy = function() {
    return Uo(t(), [a, s]).round(l).paddingInner(d).paddingOuter(c).align(u);
  }, Rr.apply(h(), arguments);
}
function ds(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Go(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Fn() {
}
var Nn = 0.7, Xn = 1 / Nn, dn = "\\s*([+-]?\\d+)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gc = /^#([0-9a-f]{3,8})$/, Vc = new RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`), Yc = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), qc = new RegExp(`^rgba\\(${dn},${dn},${dn},${Tn}\\)$`), Xc = new RegExp(`^rgba\\(${mt},${mt},${mt},${Tn}\\)$`), Kc = new RegExp(`^hsl\\(${Tn},${mt},${mt}\\)$`), Zc = new RegExp(`^hsla\\(${Tn},${mt},${mt},${Tn}\\)$`), Rs = {
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
ds(Fn, Dn, {
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
function Dn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Gc.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? zs(t) : r === 3 ? new at(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? zn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? zn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vc.exec(e)) ? new at(t[1], t[2], t[3], 1) : (t = Yc.exec(e)) ? new at(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = qc.exec(e)) ? zn(t[1], t[2], t[3], t[4]) : (t = Xc.exec(e)) ? zn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Kc.exec(e)) ? Us(t[1], t[2] / 100, t[3] / 100, 1) : (t = Zc.exec(e)) ? Us(t[1], t[2] / 100, t[3] / 100, t[4]) : Rs.hasOwnProperty(e) ? zs(Rs[e]) : e === "transparent" ? new at(NaN, NaN, NaN, 0) : null;
}
function zs(e) {
  return new at(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function zn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new at(e, t, r, a);
}
function ed(e) {
  return e instanceof Fn || (e = Dn(e)), e ? (e = e.rgb(), new at(e.r, e.g, e.b, e.opacity)) : new at();
}
function Ca(e, t, r, a) {
  return arguments.length === 1 ? ed(e) : new at(e, t, r, a ?? 1);
}
function at(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
ds(at, Ca, Go(Fn, {
  brighter(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Nn : Math.pow(Nn, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new at(Yt(this.r), Yt(this.g), Yt(this.b), Kn(this.opacity));
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
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}`;
}
function td() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}${Vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Os() {
  const e = Kn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Yt(this.r)}, ${Yt(this.g)}, ${Yt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Kn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Vt(e) {
  return e = Yt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Us(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new lt(e, t, r, a);
}
function Vo(e) {
  if (e instanceof lt) return new lt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Fn || (e = Dn(e)), !e) return new lt();
  if (e instanceof lt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, d = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? o + s : 2 - o - s, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new lt(i, l, d, e.opacity);
}
function nd(e, t, r, a) {
  return arguments.length === 1 ? Vo(e) : new lt(e, t, r, a ?? 1);
}
function lt(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
ds(lt, nd, Go(Fn, {
  brighter(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new lt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Nn : Math.pow(Nn, e), new lt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new at(
      aa(e >= 240 ? e - 240 : e + 120, s, a),
      aa(e, s, a),
      aa(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new lt(Gs(this.h), Wn(this.s), Wn(this.l), Kn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Kn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Gs(this.h)}, ${Wn(this.s) * 100}%, ${Wn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Gs(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Wn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function aa(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const us = (e) => () => e;
function rd(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function ad(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function sd(e) {
  return (e = +e) == 1 ? Yo : function(t, r) {
    return r - t ? ad(t, r, e) : us(isNaN(t) ? r : t);
  };
}
function Yo(e, t) {
  var r = t - e;
  return r ? rd(e, r) : us(isNaN(e) ? t : e);
}
const Vs = (function e(t) {
  var r = sd(t);
  function a(s, o) {
    var i = r((s = Ca(s)).r, (o = Ca(o)).r), l = r(s.g, o.g), d = r(s.b, o.b), c = Yo(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = d(u), s.opacity = c(u), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function od(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function id(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ld(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = fs(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function cd(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function Zn(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function dd(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = fs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var ja = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, sa = new RegExp(ja.source, "g");
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
  var r = ja.lastIndex = sa.lastIndex = 0, a, s, o, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = ja.exec(e)) && (s = sa.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, d.push({ i, x: Zn(a, s) })), r = sa.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? d[0] ? fd(d[0].x) : ud(t) : (t = d.length, function(c) {
    for (var u = 0, h; u < t; ++u) l[(h = d[u]).i] = h.x(c);
    return l.join("");
  });
}
function fs(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? us(t) : (r === "number" ? Zn : r === "string" ? (a = Dn(t)) ? (t = a, Vs) : hd : t instanceof Dn ? Vs : t instanceof Date ? cd : id(t) ? od : Array.isArray(t) ? ld : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? dd : Zn)(e, t);
}
function pd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
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
function ln(e) {
  return e;
}
function Na(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : md(isNaN(t) ? NaN : 0.5);
}
function xd(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function bd(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = Na(s, a), o = r(i, o)) : (a = Na(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function yd(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = Na(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = Ec(e, l, 1, a) - 1;
    return o[d](s[d](l));
  };
}
function qo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function vd() {
  var e = Ys, t = Ys, r = fs, a, s, o, i = ln, l, d, c;
  function u() {
    var g = Math.min(e.length, t.length);
    return i !== ln && (i = xd(e[0], e[g - 1])), l = g > 2 ? yd : bd, d = c = null, h;
  }
  function h(g) {
    return g == null || isNaN(g = +g) ? o : (d || (d = l(e.map(a), t, r)))(a(i(g)));
  }
  return h.invert = function(g) {
    return i(s((c || (c = l(t, e.map(a), Zn)))(g)));
  }, h.domain = function(g) {
    return arguments.length ? (e = Array.from(g, gd), u()) : e.slice();
  }, h.range = function(g) {
    return arguments.length ? (t = Array.from(g), u()) : t.slice();
  }, h.rangeRound = function(g) {
    return t = Array.from(g), r = pd, u();
  }, h.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : ln, u()) : i !== ln;
  }, h.interpolate = function(g) {
    return arguments.length ? (r = g, u()) : r;
  }, h.unknown = function(g) {
    return arguments.length ? (o = g, h) : o;
  }, function(g, x) {
    return a = g, s = x, u();
  };
}
function Xo() {
  return vd()(ln, ln);
}
function _d(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Jn(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, a = e.slice(0, r);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(r + 1)
  ];
}
function hn(e) {
  return e = Jn(Math.abs(e)), e ? e[1] : NaN;
}
function wd(e, t) {
  return function(r, a) {
    for (var s = r.length, o = [], i = 0, l = e[0], d = 0; s > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), o.push(r.substring(s -= l, s + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Sd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var kd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Qn(e) {
  if (!(t = kd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new hs({
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
Qn.prototype = hs.prototype;
function hs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
hs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Cd(e) {
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
var Ko;
function jd(e, t) {
  var r = Jn(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1], o = s - (Ko = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + Jn(e, Math.max(0, t + o - 1))[0];
}
function qs(e, t) {
  var r = Jn(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1];
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
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ks : wd(Zs.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Ks : Sd(Zs.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Qn(h);
    var g = h.fill, x = h.align, T = h.sign, w = h.symbol, f = h.zero, p = h.width, P = h.comma, I = h.precision, D = h.trim, R = h.type;
    R === "n" ? (P = !0, R = "g") : Xs[R] || (I === void 0 && (I = 12), D = !0, R = "g"), (f || g === "0" && x === "=") && (f = !0, g = "0", x = "=");
    var $ = w === "$" ? r : w === "#" && /[boxX]/.test(R) ? "0" + R.toLowerCase() : "", L = w === "$" ? a : /[%p]/.test(R) ? i : "", N = Xs[R], b = /[defgprs%]/.test(R);
    I = I === void 0 ? 6 : /[gprs]/.test(R) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function C(y) {
      var m = $, E = L, _, k, v;
      if (R === "c")
        E = N(y) + E, y = "";
      else {
        y = +y;
        var M = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? d : N(Math.abs(y), I), D && (y = Cd(y)), M && +y == 0 && T !== "+" && (M = !1), m = (M ? T === "(" ? T : l : T === "-" || T === "(" ? "" : T) + m, E = (R === "s" ? Js[8 + Ko / 3] : "") + E + (M && T === "(" ? ")" : ""), b) {
          for (_ = -1, k = y.length; ++_ < k; )
            if (v = y.charCodeAt(_), 48 > v || v > 57) {
              E = (v === 46 ? s + y.slice(_ + 1) : y.slice(_)) + E, y = y.slice(0, _);
              break;
            }
        }
      }
      P && !f && (y = t(y, 1 / 0));
      var re = m.length + y.length + E.length, B = re < p ? new Array(p - re + 1).join(g) : "";
      switch (P && f && (y = t(B + y, B.length ? p - E.length : 1 / 0), B = ""), x) {
        case "<":
          y = m + y + E + B;
          break;
        case "=":
          y = m + B + y + E;
          break;
        case "^":
          y = B.slice(0, re = B.length >> 1) + m + y + E + B.slice(re);
          break;
        default:
          y = B + m + y + E;
          break;
      }
      return o(y);
    }
    return C.toString = function() {
      return h + "";
    }, C;
  }
  function u(h, g) {
    var x = c((h = Qn(h), h.type = "f", h)), T = Math.max(-8, Math.min(8, Math.floor(hn(g) / 3))) * 3, w = Math.pow(10, -T), f = Js[8 + T / 3];
    return function(p) {
      return x(w * p) + f;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var On, Zo, Jo;
Td({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Td(e) {
  return On = Nd(e), Zo = On.format, Jo = On.formatPrefix, On;
}
function Dd(e) {
  return Math.max(0, -hn(Math.abs(e)));
}
function $d(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(hn(t) / 3))) * 3 - hn(Math.abs(e)));
}
function Md(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, hn(t) - hn(e)) + 1;
}
function Id(e, t, r, a) {
  var s = ka(e, t, r), o;
  switch (a = Qn(a ?? ",f"), a.type) {
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
  return e.ticks = function(r) {
    var a = t();
    return Oc(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var s = t();
    return Id(s[0], s[s.length - 1], r ?? 10, a);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], d, c, u = 10;
    for (l < i && (c = i, i = l, l = c, c = s, s = o, o = c); u-- > 0; ) {
      if (c = Sa(i, l, r), c === d)
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
function er() {
  var e = Xo();
  return e.copy = function() {
    return qo(e, er());
  }, Rr.apply(e, arguments), Ld(e);
}
function Fd(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const oa = /* @__PURE__ */ new Date(), ia = /* @__PURE__ */ new Date();
function Ke(e, t, r, a) {
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
  }, s.filter = (o) => Ke((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (oa.setTime(+o), ia.setTime(+i), e(oa), e(ia), Math.floor(r(oa, ia))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const tr = Ke(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
tr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ke((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : tr);
tr.range;
const $t = 1e3, it = $t * 60, Mt = it * 60, Lt = Mt * 24, ps = Lt * 7, Qs = Lt * 30, la = Lt * 365, cn = Ke((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCSeconds());
cn.range;
const ms = Ke((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t);
}, (e, t) => {
  e.setTime(+e + t * it);
}, (e, t) => (t - e) / it, (e) => e.getMinutes());
ms.range;
const Pd = Ke((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * it);
}, (e, t) => (t - e) / it, (e) => e.getUTCMinutes());
Pd.range;
const gs = Ke((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t - e.getMinutes() * it);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getHours());
gs.range;
const Ed = Ke((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getUTCHours());
Ed.range;
const Pn = Ke(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * it) / Lt,
  (e) => e.getDate() - 1
);
Pn.range;
const xs = Ke((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lt, (e) => e.getUTCDate() - 1);
xs.range;
const Ad = Ke((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lt, (e) => Math.floor(e / Lt));
Ad.range;
function Zt(e) {
  return Ke((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * it) / ps);
}
const Br = Zt(0), nr = Zt(1), Rd = Zt(2), Bd = Zt(3), pn = Zt(4), Hd = Zt(5), zd = Zt(6);
Br.range;
nr.range;
Rd.range;
Bd.range;
pn.range;
Hd.range;
zd.range;
function Jt(e) {
  return Ke((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ps);
}
const Qo = Jt(0), rr = Jt(1), Wd = Jt(2), Od = Jt(3), mn = Jt(4), Ud = Jt(5), Gd = Jt(6);
Qo.range;
rr.range;
Wd.range;
Od.range;
mn.range;
Ud.range;
Gd.range;
const $n = Ke((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
$n.range;
const Vd = Ke((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Vd.range;
const Ft = Ke((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ft.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ke((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ft.range;
const Xt = Ke((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Xt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ke((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Xt.range;
function Yd(e, t, r, a, s, o) {
  const i = [
    [cn, 1, $t],
    [cn, 5, 5 * $t],
    [cn, 15, 15 * $t],
    [cn, 30, 30 * $t],
    [o, 1, it],
    [o, 5, 5 * it],
    [o, 15, 15 * it],
    [o, 30, 30 * it],
    [s, 1, Mt],
    [s, 3, 3 * Mt],
    [s, 6, 6 * Mt],
    [s, 12, 12 * Mt],
    [a, 1, Lt],
    [a, 2, 2 * Lt],
    [r, 1, ps],
    [t, 1, Qs],
    [t, 3, 3 * Qs],
    [e, 1, la]
  ];
  function l(c, u, h) {
    const g = u < c;
    g && ([c, u] = [u, c]);
    const x = h && typeof h.range == "function" ? h : d(c, u, h), T = x ? x.range(c, +u + 1) : [];
    return g ? T.reverse() : T;
  }
  function d(c, u, h) {
    const g = Math.abs(u - c) / h, x = cs(([, , f]) => f).right(i, g);
    if (x === i.length) return e.every(ka(c / la, u / la, h));
    if (x === 0) return tr.every(Math.max(ka(c, u, h), 1));
    const [T, w] = i[g / i[x - 1][2] < i[x][2] / g ? x - 1 : x];
    return T.every(w);
  }
  return [l, d];
}
const [qd, Xd] = Yd(Ft, $n, Br, Pn, gs, ms);
function ca(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function da(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function _n(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Kd(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = wn(s), u = Sn(s), h = wn(o), g = Sn(o), x = wn(i), T = Sn(i), w = wn(l), f = Sn(l), p = wn(d), P = Sn(d), I = {
    a: M,
    A: re,
    b: B,
    B: A,
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
    p: U,
    q: H,
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
    a: te,
    A: V,
    b: ce,
    B: ve,
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
    p: le,
    q: ue,
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
  }, R = {
    a: C,
    A: y,
    b: m,
    B: E,
    c: _,
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
    p: b,
    q: ou,
    Q: pu,
    s: mu,
    S: du,
    u: tu,
    U: nu,
    V: ru,
    w: eu,
    W: au,
    x: k,
    X: v,
    y: no,
    Y: to,
    Z: su,
    "%": hu
  };
  I.x = $(r, I), I.X = $(a, I), I.c = $(t, I), D.x = $(r, D), D.X = $(a, D), D.c = $(t, D);
  function $(J, ne) {
    return function(j) {
      var S = [], z = -1, X = 0, O = J.length, Y, de, we;
      for (j instanceof Date || (j = /* @__PURE__ */ new Date(+j)); ++z < O; )
        J.charCodeAt(z) === 37 && (S.push(J.slice(X, z)), (de = eo[Y = J.charAt(++z)]) != null ? Y = J.charAt(++z) : de = Y === "e" ? " " : "0", (we = ne[Y]) && (Y = we(j, de)), S.push(Y), X = z + 1);
      return S.push(J.slice(X, z)), S.join("");
    };
  }
  function L(J, ne) {
    return function(j) {
      var S = _n(1900, void 0, 1), z = N(S, J, j += "", 0), X, O;
      if (z != j.length) return null;
      if ("Q" in S) return new Date(S.Q);
      if ("s" in S) return new Date(S.s * 1e3 + ("L" in S ? S.L : 0));
      if (ne && !("Z" in S) && (S.Z = 0), "p" in S && (S.H = S.H % 12 + S.p * 12), S.m === void 0 && (S.m = "q" in S ? S.q : 0), "V" in S) {
        if (S.V < 1 || S.V > 53) return null;
        "w" in S || (S.w = 1), "Z" in S ? (X = da(_n(S.y, 0, 1)), O = X.getUTCDay(), X = O > 4 || O === 0 ? rr.ceil(X) : rr(X), X = xs.offset(X, (S.V - 1) * 7), S.y = X.getUTCFullYear(), S.m = X.getUTCMonth(), S.d = X.getUTCDate() + (S.w + 6) % 7) : (X = ca(_n(S.y, 0, 1)), O = X.getDay(), X = O > 4 || O === 0 ? nr.ceil(X) : nr(X), X = Pn.offset(X, (S.V - 1) * 7), S.y = X.getFullYear(), S.m = X.getMonth(), S.d = X.getDate() + (S.w + 6) % 7);
      } else ("W" in S || "U" in S) && ("w" in S || (S.w = "u" in S ? S.u % 7 : "W" in S ? 1 : 0), O = "Z" in S ? da(_n(S.y, 0, 1)).getUTCDay() : ca(_n(S.y, 0, 1)).getDay(), S.m = 0, S.d = "W" in S ? (S.w + 6) % 7 + S.W * 7 - (O + 5) % 7 : S.w + S.U * 7 - (O + 6) % 7);
      return "Z" in S ? (S.H += S.Z / 100 | 0, S.M += S.Z % 100, da(S)) : ca(S);
    };
  }
  function N(J, ne, j, S) {
    for (var z = 0, X = ne.length, O = j.length, Y, de; z < X; ) {
      if (S >= O) return -1;
      if (Y = ne.charCodeAt(z++), Y === 37) {
        if (Y = ne.charAt(z++), de = R[Y in eo ? ne.charAt(z++) : Y], !de || (S = de(J, j, S)) < 0) return -1;
      } else if (Y != j.charCodeAt(S++))
        return -1;
    }
    return S;
  }
  function b(J, ne, j) {
    var S = c.exec(ne.slice(j));
    return S ? (J.p = u.get(S[0].toLowerCase()), j + S[0].length) : -1;
  }
  function C(J, ne, j) {
    var S = x.exec(ne.slice(j));
    return S ? (J.w = T.get(S[0].toLowerCase()), j + S[0].length) : -1;
  }
  function y(J, ne, j) {
    var S = h.exec(ne.slice(j));
    return S ? (J.w = g.get(S[0].toLowerCase()), j + S[0].length) : -1;
  }
  function m(J, ne, j) {
    var S = p.exec(ne.slice(j));
    return S ? (J.m = P.get(S[0].toLowerCase()), j + S[0].length) : -1;
  }
  function E(J, ne, j) {
    var S = w.exec(ne.slice(j));
    return S ? (J.m = f.get(S[0].toLowerCase()), j + S[0].length) : -1;
  }
  function _(J, ne, j) {
    return N(J, t, ne, j);
  }
  function k(J, ne, j) {
    return N(J, r, ne, j);
  }
  function v(J, ne, j) {
    return N(J, a, ne, j);
  }
  function M(J) {
    return i[J.getDay()];
  }
  function re(J) {
    return o[J.getDay()];
  }
  function B(J) {
    return d[J.getMonth()];
  }
  function A(J) {
    return l[J.getMonth()];
  }
  function U(J) {
    return s[+(J.getHours() >= 12)];
  }
  function H(J) {
    return 1 + ~~(J.getMonth() / 3);
  }
  function te(J) {
    return i[J.getUTCDay()];
  }
  function V(J) {
    return o[J.getUTCDay()];
  }
  function ce(J) {
    return d[J.getUTCMonth()];
  }
  function ve(J) {
    return l[J.getUTCMonth()];
  }
  function le(J) {
    return s[+(J.getUTCHours() >= 12)];
  }
  function ue(J) {
    return 1 + ~~(J.getUTCMonth() / 3);
  }
  return {
    format: function(J) {
      var ne = $(J += "", I);
      return ne.toString = function() {
        return J;
      }, ne;
    },
    parse: function(J) {
      var ne = L(J += "", !1);
      return ne.toString = function() {
        return J;
      }, ne;
    },
    utcFormat: function(J) {
      var ne = $(J += "", D);
      return ne.toString = function() {
        return J;
      }, ne;
    },
    utcParse: function(J) {
      var ne = L(J += "", !0);
      return ne.toString = function() {
        return J;
      }, ne;
    }
  };
}
var eo = { "-": "", _: " ", 0: "0" }, Qe = /^\s*\d+/, Zd = /^%/, Jd = /[\\^$*+?|[\]().{}]/g;
function Ee(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function Qd(e) {
  return e.replace(Jd, "\\$&");
}
function wn(e) {
  return new RegExp("^(?:" + e.map(Qd).join("|") + ")", "i");
}
function Sn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function eu(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function tu(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function nu(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function ru(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function au(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function to(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function no(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function su(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function ou(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function iu(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function ro(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function lu(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function ao(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function cu(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function du(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function uu(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function fu(e, t, r) {
  var a = Qe.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function hu(e, t, r) {
  var a = Zd.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function pu(e, t, r) {
  var a = Qe.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function mu(e, t, r) {
  var a = Qe.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function so(e, t) {
  return Ee(e.getDate(), t, 2);
}
function gu(e, t) {
  return Ee(e.getHours(), t, 2);
}
function xu(e, t) {
  return Ee(e.getHours() % 12 || 12, t, 2);
}
function bu(e, t) {
  return Ee(1 + Pn.count(Ft(e), e), t, 3);
}
function ei(e, t) {
  return Ee(e.getMilliseconds(), t, 3);
}
function yu(e, t) {
  return ei(e, t) + "000";
}
function vu(e, t) {
  return Ee(e.getMonth() + 1, t, 2);
}
function _u(e, t) {
  return Ee(e.getMinutes(), t, 2);
}
function wu(e, t) {
  return Ee(e.getSeconds(), t, 2);
}
function Su(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ku(e, t) {
  return Ee(Br.count(Ft(e) - 1, e), t, 2);
}
function ti(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? pn(e) : pn.ceil(e);
}
function Cu(e, t) {
  return e = ti(e), Ee(pn.count(Ft(e), e) + (Ft(e).getDay() === 4), t, 2);
}
function ju(e) {
  return e.getDay();
}
function Nu(e, t) {
  return Ee(nr.count(Ft(e) - 1, e), t, 2);
}
function Tu(e, t) {
  return Ee(e.getFullYear() % 100, t, 2);
}
function Du(e, t) {
  return e = ti(e), Ee(e.getFullYear() % 100, t, 2);
}
function $u(e, t) {
  return Ee(e.getFullYear() % 1e4, t, 4);
}
function Mu(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? pn(e) : pn.ceil(e), Ee(e.getFullYear() % 1e4, t, 4);
}
function Iu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ee(t / 60 | 0, "0", 2) + Ee(t % 60, "0", 2);
}
function oo(e, t) {
  return Ee(e.getUTCDate(), t, 2);
}
function Lu(e, t) {
  return Ee(e.getUTCHours(), t, 2);
}
function Fu(e, t) {
  return Ee(e.getUTCHours() % 12 || 12, t, 2);
}
function Pu(e, t) {
  return Ee(1 + xs.count(Xt(e), e), t, 3);
}
function ni(e, t) {
  return Ee(e.getUTCMilliseconds(), t, 3);
}
function Eu(e, t) {
  return ni(e, t) + "000";
}
function Au(e, t) {
  return Ee(e.getUTCMonth() + 1, t, 2);
}
function Ru(e, t) {
  return Ee(e.getUTCMinutes(), t, 2);
}
function Bu(e, t) {
  return Ee(e.getUTCSeconds(), t, 2);
}
function Hu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function zu(e, t) {
  return Ee(Qo.count(Xt(e) - 1, e), t, 2);
}
function ri(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? mn(e) : mn.ceil(e);
}
function Wu(e, t) {
  return e = ri(e), Ee(mn.count(Xt(e), e) + (Xt(e).getUTCDay() === 4), t, 2);
}
function Ou(e) {
  return e.getUTCDay();
}
function Uu(e, t) {
  return Ee(rr.count(Xt(e) - 1, e), t, 2);
}
function Gu(e, t) {
  return Ee(e.getUTCFullYear() % 100, t, 2);
}
function Vu(e, t) {
  return e = ri(e), Ee(e.getUTCFullYear() % 100, t, 2);
}
function Yu(e, t) {
  return Ee(e.getUTCFullYear() % 1e4, t, 4);
}
function qu(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? mn(e) : mn.ceil(e), Ee(e.getUTCFullYear() % 1e4, t, 4);
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
var nn, ai;
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
  return nn = Kd(e), ai = nn.format, nn.parse, nn.utcFormat, nn.utcParse, nn;
}
function Zu(e) {
  return new Date(e);
}
function Ju(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function si(e, t, r, a, s, o, i, l, d, c) {
  var u = Xo(), h = u.invert, g = u.domain, x = c(".%L"), T = c(":%S"), w = c("%I:%M"), f = c("%I %p"), p = c("%a %d"), P = c("%b %d"), I = c("%B"), D = c("%Y");
  function R($) {
    return (d($) < $ ? x : l($) < $ ? T : i($) < $ ? w : o($) < $ ? f : a($) < $ ? s($) < $ ? p : P : r($) < $ ? I : D)($);
  }
  return u.invert = function($) {
    return new Date(h($));
  }, u.domain = function($) {
    return arguments.length ? g(Array.from($, Ju)) : g().map(Zu);
  }, u.ticks = function($) {
    var L = g();
    return e(L[0], L[L.length - 1], $ ?? 10);
  }, u.tickFormat = function($, L) {
    return L == null ? R : c(L);
  }, u.nice = function($) {
    var L = g();
    return (!$ || typeof $.range != "function") && ($ = t(L[0], L[L.length - 1], $ ?? 10)), $ ? g(Fd(L, $)) : u;
  }, u.copy = function() {
    return qo(u, si(e, t, r, a, s, o, i, l, d, c));
  }, u;
}
function bs() {
  return Rr.apply(si(qd, Xd, Ft, $n, Br, Pn, gs, ms, cn, ai).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Qu({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": d
}) {
  const c = Fe(null), [u, h] = Ie(!1), [g, x] = Ie(!1), T = t(e.start), w = t(e.end), f = Math.max(w - T, 20), p = () => {
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
  }, P = e.progress ? f * e.progress / 100 : 0, I = () => {
    r?.(e);
  }, D = () => {
    a?.(e);
  }, R = (m) => {
    m.key === "Enter" ? (m.preventDefault(), I()) : m.key === " " && (m.preventDefault(), D());
  }, $ = () => {
    h(!0);
  }, L = () => {
    h(!1);
  }, N = () => {
    x(!0), l?.();
  }, b = () => {
    x(!1);
  }, C = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (g || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), y = {
    "--task-left": `${T}px`,
    "--task-width": `${f}px`,
    "--task-color": p(),
    left: `${T}px`,
    width: `${f}px`,
    backgroundColor: p()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": o,
      className: C,
      style: y,
      onClick: I,
      onDoubleClick: D,
      onKeyDown: R,
      onMouseDown: $,
      onMouseUp: L,
      onFocus: N,
      onBlur: b,
      "aria-label": d || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${P}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function ef({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let x = e.getTime(); x <= t.getTime(); x += 864e5)
    a.push(new Date(x));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Ie(-1), d = Fe(null), c = (x) => {
    if (x.key === "ArrowLeft") {
      x.preventDefault();
      const T = Math.max(0, i === -1 ? 0 : i - 1);
      l(T), g(T);
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const T = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(T), g(T);
    } else if (x.key === "ArrowDown") {
      x.preventDefault();
      const T = document.querySelector(".gantt-row .timeline-container");
      T && T.focus();
    } else if (x.key === "Home")
      x.preventDefault(), l(0), g(0);
    else if (x.key === "End") {
      x.preventDefault();
      const T = a.length - 1;
      l(T), g(T);
    }
  }, u = (x) => {
    if (x.key === "ArrowDown") {
      x.preventDefault();
      const T = document.querySelector(".gantt-row .resource-label");
      T && T.focus();
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const T = d.current;
      T && T.focus();
    }
  }, h = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (x) => {
    const T = d.current?.querySelector(`[data-date-index="${x}"]`);
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
            onFocus: h,
            children: a.map((x, T) => {
              const w = x.getTime() === o.getTime(), f = i === T;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": T,
                  className: `date-column ${w ? "today" : ""} ${f ? "focused" : ""}`,
                  tabIndex: f ? 0 : -1,
                  role: "button",
                  "aria-label": `${x.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${w ? " (Today)" : ""}`,
                  onFocus: () => l(T),
                  onKeyDown: c,
                  children: x.toLocaleDateString("en-GB", {
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
function tf({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, d] = Ie(!1), [c, u] = Ie(-1), h = Fe(null);
  Be(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      h.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const g = (w) => {
    if (w.key === "ArrowLeft" && w.shiftKey) {
      w.preventDefault(), w.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (w.key === "ArrowRight" && w.shiftKey) {
      w.preventDefault(), w.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (w.key) {
        case "ArrowUp":
          w.preventDefault(), o === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          w.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          w.preventDefault(), h.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (w.preventDefault(), d(!0), u(0));
          break;
      }
      return;
    }
    switch (w.key) {
      case "ArrowLeft":
        w.preventDefault();
        const f = Math.max(0, c - 1);
        u(f), h.current?.querySelector(`[data-task-index="${f}"]`)?.focus();
        break;
      case "ArrowRight":
        w.preventDefault();
        const P = Math.min(t.length - 1, c + 1);
        u(P), h.current?.querySelector(`[data-task-index="${P}"]`)?.focus();
        break;
      case "Enter":
        w.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        w.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        w.preventDefault(), d(!1), u(-1), h.current?.focus();
        break;
    }
  }, x = (w) => {
    switch (w.key) {
      case "ArrowUp":
        w.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        w.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        w.preventDefault(), h.current?.focus();
        break;
    }
  }, T = (w) => {
    l && u(w);
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
            onKeyDown: x,
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
              l || u(-1);
            },
            children: t.map((w, f) => /* @__PURE__ */ n.jsx(
              Qu,
              {
                task: w,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === f,
                taskIndex: f,
                tabIndex: l && c === f ? 0 : -1,
                onFocus: () => T(f)
              },
              w.id
            ))
          }
        )
      ]
    }
  );
}
function Lx({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Fe(null), [l, d] = Ie(800), c = Me(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const w = new Date(r);
    return isNaN(w.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : w;
  }, [r]), u = Me(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const w = new Date(a);
    return isNaN(w.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : w;
  }, [a]), h = Me(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  Be(() => {
    if (!i.current) return;
    const w = new ResizeObserver((f) => {
      const p = f[0];
      p && d(Math.max(p.contentRect.width - 220, 400));
    });
    return w.observe(i.current), () => w.disconnect();
  }, []);
  const g = Me(
    () => bs().domain([c, u]).range([0, l]),
    [c, u, l]
  ), x = Me(() => {
    const w = /* @__PURE__ */ new Map();
    return t.forEach((f) => {
      const p = w.get(f.resourceId) || [];
      p.push(f), w.set(f.resourceId, p);
    }), w;
  }, [t]), T = (w) => {
    if (w.target === w.currentTarget)
      switch (w.key) {
        case "ArrowDown":
          w.preventDefault();
          const f = i.current?.querySelector(".gantt-row .resource-label");
          f && f.focus();
          break;
        case "Home":
          w.preventDefault();
          const p = i.current?.querySelector(".header-resource");
          p && p.focus();
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
        /* @__PURE__ */ n.jsx(ef, { viewStart: c, viewEnd: u, dateCount: h }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (w) => {
              w.key === "ArrowLeft" && w.altKey ? (w.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : w.key === "ArrowRight" && w.altKey ? (w.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : w.key === "ArrowUp" && w.altKey ? (w.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : w.key === "ArrowDown" && w.altKey && (w.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((w, f) => /* @__PURE__ */ n.jsx(
              tf,
              {
                resource: w,
                tasks: x.get(w.id) || [],
                scale: g,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: f,
                dateCount: h
              },
              w.id
            ))
          }
        )
      ]
    }
  );
}
const ar = ({
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
) }), nf = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? st.Children.toArray(t).filter(
    (f) => st.isValidElement(f) && (f.type === ar || f.type?.displayName === "BreadcrumbItem")
  ).map((f) => ({
    text: typeof f.props.children == "string" ? f.props.children : String(f.props.children),
    href: f.props.href,
    active: f.props.active,
    attributes: f.props.attributes
  })) : [], c = () => t ? d() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const w = c();
    if (w && w.length > 0) {
      const f = w.slice().reverse().find((p) => p.href && !p.active);
      if (f)
        return { href: f.href, text: f.text };
    }
    return { text: "Home" };
  }, h = c(), g = u(), x = xe(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), T = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: x,
      "aria-label": T,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          st.Children.map(t, (w, f) => st.isValidElement(w) && (w.type === ar || w.type?.displayName === "BreadcrumbItem") ? st.cloneElement(w, { key: f }) : null)
        ) : (
          // Render from items array
          h?.filter((w) => w.active || !!w.href).map((w, f) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: w.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...w.attributes || {},
              children: w.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: w.href,
              role: "link",
              ...w.attributes || {},
              children: w.text
            }
          ) }, f))
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
}, rf = nf;
rf.Item = ar;
ar.displayName = "BreadcrumbItem";
const oi = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = Ie(!1);
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
  const i = xe("nhsuk-skip-link", r);
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
}, Fx = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = xe("nhsuk-pagination", s);
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
}, Px = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = xe("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, ii = st.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  href: l,
  imgURL: d,
  imgAlt: c,
  ...u
}, h) => {
  const g = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), x = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), T = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), w = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const P = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      It,
      {
        level: a,
        className: T,
        children: P()
      }
    );
  }, f = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, p = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsxs("div", { className: x, children: [
          w(),
          f(),
          p()
        ] })
      ]
    }
  );
});
ii.displayName = "Card";
const Ex = ({
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
}, Ax = ({
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
}, Rx = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: d,
  "data-testid": c,
  id: u,
  "aria-label": h,
  "aria-labelledby": g,
  "aria-describedby": x
}) => {
  const T = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), w = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), f = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const P = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], I = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        P,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      It,
      {
        level: a,
        className: w,
        children: I
      }
    );
  }, p = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: T,
      "data-testid": c,
      id: u,
      "aria-label": h,
      "aria-labelledby": g,
      "aria-describedby": x,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          f(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: p() })
      ]
    }
  );
}, af = ({
  id: e,
  className: t,
  headingText: r,
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
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    It,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    It,
    {
      level: s,
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
  ) : o ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...d, children: [
    u(),
    h()
  ] });
}, Bx = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = xe("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, Hx = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = xe(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((d, c) => /* @__PURE__ */ n.jsx(
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
            o(d),
            d.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: d.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: s, ...a, children: e.map((l, d) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, d)) }) });
}, kn = { current: null }, sf = () => {
  if (kn.current) return kn.current;
  try {
    kn.current = require("prismjs");
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
    kn.current = null;
  }
  return kn.current;
}, of = (e) => {
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
}, sr = (e, t, r) => {
  if (r || !t) return e;
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
  caption: r,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: d = !1,
  panelClasses: c,
  tableClasses: u,
  classes: h,
  attributes: g,
  "data-testid": x,
  columns: T,
  data: w,
  visuallyHiddenCaption: f = !1
}) => {
  const p = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), P = xe(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), I = xe(h), D = (b, C) => {
    const y = xe(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${b.format}`]: b.format
      },
      b.classes
    ), m = {
      scope: "col",
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...o && { role: "columnheader" },
      ...b.attributes
    };
    let E;
    if (b.node != null)
      E = /* @__PURE__ */ n.jsx(n.Fragment, { children: b.node });
    else if (b.html)
      E = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const _ = Array.isArray(b.code), k = _ ? b.code.join(`
`) : b.code, v = _ || k.includes(`
`), M = {
        className: xe("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": v,
          "nhsuk-table__code--inline": !v
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, re = sr(k, b.codeLanguage);
      E = v ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...M,
          dangerouslySetInnerHTML: { __html: re }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...M,
          dangerouslySetInnerHTML: { __html: re }
        }
      );
    } else
      E = b.text;
    return /* @__PURE__ */ n.jsx("th", { className: y, ...m, children: E }, C);
  }, R = (b, C, y) => {
    const m = s && y || b.rowHeader, E = xe(
      m ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${m ? "header" : "cell"}--${b.format}`]: b.format
      },
      b.classes
    ), _ = {
      ...m && { scope: "row" },
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...o && {
        role: m ? "rowheader" : "cell",
        ...b.header && { "data-label": b.header }
      },
      ...b.attributes
    };
    let k;
    if (b.node != null)
      k = /* @__PURE__ */ n.jsx(n.Fragment, { children: b.node });
    else if (b.html)
      k = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const re = Array.isArray(b.code), B = re ? b.code.join(`
`) : b.code, A = re || B.includes(`
`), U = {
        className: xe("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": A,
          "nhsuk-table__code--inline": !A
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, H = sr(
        B,
        b.codeLanguage,
        b.disableHighlight
      );
      k = A ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...U,
          dangerouslySetInnerHTML: { __html: H }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...U,
          dangerouslySetInnerHTML: { __html: H }
        }
      );
    } else
      k = b.text;
    const v = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && b.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        b.header,
        " "
      ] }),
      k
    ] }), M = m ? "th" : "td";
    return /* @__PURE__ */ n.jsx(M, { className: E, ..._, children: v }, C);
  };
  let $ = t, L = e;
  !$ && T && T.length && ($ = T.map((b) => ({
    text: b.title,
    format: b.format,
    classes: b.headerClasses,
    attributes: b.headerAttributes
  }))), !L && T && w && w.length && (L = w.map((b, C) => T.map((y) => {
    const m = y.accessor ? y.accessor(b, C) : b[y.key];
    let E = { format: y.format, classes: y.cellClasses, attributes: y.cellAttributes };
    if (y.rowHeader && (E.rowHeader = !0), y.render) {
      const _ = y.render(m, b, C, y);
      return _ == null || typeof _ == "boolean" ? { ...E, text: "" } : typeof _ == "string" || typeof _ == "number" ? { ...E, text: String(_) } : { ...E, ..._ };
    }
    return { ...E, text: m != null ? String(m) : "" };
  })));
  const N = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: P,
      ...o && { role: "table" },
      ...g,
      ...x && { "data-testid": x },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: xe(p, f && "nhsuk-u-visually-hidden"), children: r }),
        $ && $.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: $.map(
              (b, C) => D(b, C)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: L && L.map((b, C) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: b.map(
              (y, m) => R(y, m, m === 0)
            )
          },
          C
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(af, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(It, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    N()
  ] }) : I ? /* @__PURE__ */ n.jsx("div", { className: I, children: N() }) : N();
}, cf = ({
  children: e,
  size: t,
  className: r
}) => {
  const a = xe(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    r
  );
  return /* @__PURE__ */ n.jsx("caption", { className: a, children: e });
}, li = ({
  responsive: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...s, ...a, children: r });
}, ci = ({
  text: e,
  html: t,
  node: r,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: d,
  colspan: c,
  rowspan: u,
  attributes: h,
  responsive: g,
  as: x = "th"
}) => {
  const T = xe(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    d
  ), w = {
    scope: "col",
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...g && { role: "columnheader" },
    ...h
  };
  let f;
  if (r != null) f = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) f = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const P = Array.isArray(a), I = P ? a.join(`
`) : a, D = P || I.includes(`
`), R = {
      className: xe("nhsuk-table__code", o, {
        "nhsuk-table__code--block": D,
        "nhsuk-table__code--inline": !D
      }),
      ...s ? { "data-language": s } : {}
    }, $ = sr(
      I,
      s,
      i
    );
    f = D ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...R,
        dangerouslySetInnerHTML: { __html: $ }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...R, dangerouslySetInnerHTML: { __html: $ } });
  } else f = e;
  const p = x;
  return /* @__PURE__ */ n.jsx(p, { className: T, ...w, children: f });
}, df = ({
  text: e,
  html: t,
  node: r,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: d,
  colspan: c,
  rowspan: u,
  attributes: h,
  responsive: g,
  rowHeader: x
}) => {
  const T = !!x, w = T ? "th" : "td", f = xe(
    T ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${T ? "header" : "cell"}--${l}`,
    d
  ), p = {
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...T && { scope: "row" },
    ...g && { role: T ? "rowheader" : "cell" },
    ...h
  };
  let P;
  if (r != null) P = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) P = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const I = Array.isArray(a), D = I ? a.join(`
`) : a, R = I || D.includes(`
`), $ = {
      className: xe("nhsuk-table__code", o, {
        "nhsuk-table__code--block": R,
        "nhsuk-table__code--inline": !R
      }),
      ...s ? { "data-language": s } : {}
    }, L = sr(D, s, i);
    P = R ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...$, dangerouslySetInnerHTML: { __html: L } }) }) : /* @__PURE__ */ n.jsx("code", { ...$, dangerouslySetInnerHTML: { __html: L } });
  } else P = e;
  return /* @__PURE__ */ n.jsx(w, { className: f, ...p, children: P });
}, dt = lf;
dt.Caption = cf;
dt.BodyRow = li;
dt.HeaderCell = ci;
dt.Cell = df;
dt.Row = li;
dt.TH = ci;
process.env.NODE_ENV !== "production" && (dt.Row && console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), dt.TH && console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."));
const zx = gn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: d,
  id: c,
  "data-testid": u,
  ...h
}, g) => {
  const x = r !== void 0, [T, w] = Ie(() => t || e[0]?.id || ""), f = x ? r : T, p = Fe(null), P = Fe(/* @__PURE__ */ new Map()), I = me((C) => {
    x || w(C), a?.(C);
  }, [x, a]), D = me((C) => {
    s?.(C), l && I(C);
  }, [s, l, I]), R = me((C, y) => {
    const m = e.filter((k) => !k.disabled).map((k) => k.id), E = m.indexOf(y);
    let _ = null;
    switch (C.key) {
      case "ArrowLeft":
        _ = E > 0 ? E - 1 : m.length - 1;
        break;
      case "ArrowRight":
        _ = E < m.length - 1 ? E + 1 : 0;
        break;
      case "Home":
        _ = 0;
        break;
      case "End":
        _ = m.length - 1;
        break;
      case "Escape":
        C.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (_ !== null) {
      C.preventDefault();
      const k = m[_], v = P.current.get(k);
      v && (v.focus(), D(k));
    }
  }, [e, D, i]), $ = me((C, y) => {
    y ? P.current.set(C, y) : P.current.delete(C);
  }, []), L = me((C) => {
    const y = P.current.get(C);
    y && y.focus();
  }, []);
  Mo(g, () => ({
    focusTab: L,
    getActiveTab: () => f,
    getTabListElement: () => p.current
  }), [L, f]);
  const N = me((C) => {
    const y = C.relatedTarget;
    p.current?.contains(y) || o?.();
  }, [o]), b = xe("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: b,
      id: c,
      "data-testid": u,
      ...h,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: p,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: N,
                children: e.map((C) => {
                  const y = C.id === f, m = C.disabled, E = xe("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": y,
                    "nhsuk-tabs__list-item--disabled": m
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: E, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (_) => $(C.id, _),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": y,
                      "aria-controls": `${C.id}-panel`,
                      id: `${C.id}-tab`,
                      tabIndex: y ? 0 : -1,
                      disabled: m,
                      onClick: () => !m && I(C.id),
                      onKeyDown: (_) => !m && R(_, C.id),
                      onFocus: () => !m && D(C.id),
                      ...C.attributes,
                      children: C.label
                    }
                  ) }, C.id);
                })
              }
            )
          }
        ),
        e.map((C) => {
          const y = C.id === f;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${C.id}-tab`,
              id: `${C.id}-panel`,
              hidden: !y,
              children: C.content
            },
            C.id
          );
        })
      ]
    }
  );
}), uf = gn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
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
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: h }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
uf.displayName = "Details";
const ff = gn(
  ({
    title: e,
    type: t,
    items: r,
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
    ), h = (x) => t === "cross" && !a ? `do not ${x}` : x, g = () => /* @__PURE__ */ n.jsx(
      It,
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
        className: d.join(" "),
        ...i,
        children: [
          g(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((x, T) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            h(x.item)
          ] }, T)) }) })
        ]
      }
    );
  }
);
ff.displayName = "DoDontList";
const hf = gn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
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
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: h }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
hf.displayName = "Expander";
const pf = gn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, h = `${t}-${c}-status`, g = !!l.href, x = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), T = [
        l.hint && u,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        mf,
        {
          item: l,
          itemClasses: x,
          hasLink: g,
          hintId: u,
          statusId: h,
          ariaDescribedBy: T
        },
        d
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
), mf = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
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
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, d = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(qe, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: s, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
pf.displayName = "TaskList";
const Wx = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), d = () => s || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), c = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        $o(
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
}, Ox = ({
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
}, gf = ({
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
    /* @__PURE__ */ n.jsx(tt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(tt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(tt, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      Yn,
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
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      Yn,
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
] }), xf = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(qe, { color: bf(r.status), text: r.label }) }, r.status)) });
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
const Ux = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
  defaultValue: a,
  onChange: s,
  selectionMode: o = "single",
  a11yMode: i,
  className: l,
  style: d,
  getSlotAriaLabel: c,
  toolbar: u,
  enableDefaultToolbar: h = !0,
  legendItems: g,
  enableDefaultLegend: x = !0,
  legendPlacement: T = "bottom",
  onA11yModeChange: w
}) => {
  const [f, p] = Ie("grid"), P = i || f, [I, D] = Ie(a || []), R = r ?? I, $ = Me(() => {
    const _ = /* @__PURE__ */ new Set();
    return e.forEach((k) => _.add(new Date(k.start).getTime())), Array.from(_).sort((k, v) => k - v);
  }, [e]), L = Me(() => {
    const _ = {};
    return e.forEach((k) => {
      const v = new Date(k.start).getTime();
      _[v] || (_[v] = {});
      const M = k.capacity - k.booked - (k.held || 0);
      _[v][k.sessionId] = { slot: k, remaining: M };
    }), _;
  }, [e]), N = me((_) => {
    if (o === "single") {
      const k = [_.id];
      r || D(k), s?.(k, { lastAction: "select" });
    } else {
      const k = R.includes(_.id), v = k ? R.filter((M) => M !== _.id) : [...R, _.id];
      r || D(v), s?.(v, { lastAction: k ? "deselect" : "select" });
    }
  }, [o, R, r, s]), b = Me(() => g || (x ? Array.from(new Set(e.map((k) => k.status))).map((k) => ({
    status: k,
    label: k.charAt(0).toUpperCase() + k.slice(1)
  })) : void 0), [g, x, e]), C = b ? /* @__PURE__ */ n.jsx(
    xf,
    {
      items: b,
      orientation: T === "left" || T === "right" ? "vertical" : "horizontal"
    }
  ) : null, y = (_) => {
    i || p(_), w?.(_);
  }, m = u || (h ? /* @__PURE__ */ n.jsx(
    gf,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: P,
      onA11yModeChange: y
    }
  ) : null), E = /* @__PURE__ */ n.jsx("div", { style: d, className: xe(l), children: /* @__PURE__ */ n.jsx(wa, { className: xe("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(qt, { children: /* @__PURE__ */ n.jsx(jn, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    m,
    T === "top" && C,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((_) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => N(_), "aria-pressed": R.includes(_.id), children: [
      Cn(new Date(_.start)),
      " – ",
      Cn(new Date(_.end)),
      " (",
      _.status,
      ")"
    ] }) }, _.id)) }),
    T === "bottom" && C
  ] }) }) }) }) });
  return P === "list" ? E : /* @__PURE__ */ n.jsx("div", { style: d, className: xe(l), children: /* @__PURE__ */ n.jsx(wa, { className: xe("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(qt, { children: /* @__PURE__ */ n.jsx(jn, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    m,
    T === "top" && C,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": $.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((_) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${_.specialty}`, className: "nhs-slot-matrix__session-header", children: _.specialty }, _.id))
      ] }),
      $.map((_) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Cn(new Date(_)), children: Cn(new Date(_)) }),
        t.map((k) => {
          const v = L[_]?.[k.id];
          if (!v)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, k.id);
          const { slot: M, remaining: re } = v, B = R.includes(M.id), A = c ? c(M) : `Slot ${Cn(new Date(M.start))} ${M.status}${re === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": M.status,
              className: xe("nhs-slot-matrix__cell", B && "nhs-slot-matrix__cell--selected"),
              "aria-label": A,
              "aria-selected": B || void 0,
              onClick: () => N(M),
              children: re > 0 ? `${re} left` : "Full"
            },
            M.id
          );
        })
      ] }, _))
    ] }),
    T === "bottom" && C
  ] }) }) }) }) });
};
function uo(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Cn(e) {
  return `${uo(e.getHours())}:${uo(e.getMinutes())}`;
}
const yf = ({
  title: e,
  value: t,
  subtitle: r,
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
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(It, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return s ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: s,
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
}, Gx = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(wa, { children: /* @__PURE__ */ n.jsx(qt, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    jn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ n.jsx(yf, { ...s })
    },
    o
  )) }) }) });
}, vf = st.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: d,
    ariaLabelledby: c,
    ariaDescribedby: u,
    className: h,
    tableClassName: g,
    bordered: x = !1,
    striped: T = !1,
    responsive: w = !1,
    tableType: f = "default"
  }, p) => {
    const P = Fe(null), I = Fe(null), D = Fe(null);
    st.useImperativeHandle(p, () => P.current, []);
    const [R, $] = Ie(0), [L, N] = Ie(0), [b, C] = Ie("headers"), [y, m] = Ie("browse"), E = t.length, _ = e.length, k = Me(() => !r || r.length === 0 ? e : [...e].sort((H, te) => {
      for (const { key: V, direction: ce } of r) {
        const ve = H[V], le = te[V];
        if (ve == null && le == null) continue;
        if (ve == null) return 1;
        if (le == null) return -1;
        let ue = 0;
        if (typeof ve == "number" && typeof le == "number" ? ue = ve - le : ue = String(ve).localeCompare(String(le)), ue !== 0)
          return ce === "asc" ? ue : -ue;
      }
      return 0;
    }), [e, r]), v = me((H, te) => {
      setTimeout(() => {
        const V = P.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${te + 1})`
        );
        V && (V.focus(), typeof V.scrollIntoView == "function" && V.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), M = me((H) => {
      setTimeout(() => {
        const te = P.current?.querySelector(`th:nth-child(${H + 1})`);
        te && (te.focus(), typeof te.scrollIntoView == "function" && te.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), re = me((H) => {
      a?.(H);
    }, [a]), B = me((H) => {
      o?.(H);
    }, [o]), A = me((H) => {
      const { key: te } = H;
      switch (te) {
        case "Enter":
          if (H.preventDefault(), b === "headers" && y === "browse")
            m("navigate"), M(L);
          else if (b === "headers" && y === "navigate") {
            const V = t[L];
            V && re(V.key);
          } else b === "cells" && y === "browse" ? (m("navigate"), v(R, L)) : b === "cells" && y === "navigate" && B(R);
          break;
        case "Escape":
          H.preventDefault(), (b === "headers" && y === "navigate" || b === "cells" && y === "navigate") && m("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), y === "navigate" || y === "browse" && b === "headers") {
            if (b === "headers") {
              const V = Math.max(0, L - 1);
              N(V), M(V);
            } else if (b === "cells") {
              const V = Math.max(0, L - 1);
              N(V), v(R, V);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), y === "navigate" || y === "browse" && b === "headers") {
            if (b === "headers") {
              const V = Math.min(E - 1, L + 1);
              N(V), M(V);
            } else if (b === "cells") {
              const V = Math.min(E - 1, L + 1);
              N(V), v(R, V);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), b === "cells") {
            if (y === "browse") {
              const V = Math.max(0, R - 1);
              $(V), v(V, 0), N(0);
            } else if (y === "navigate")
              if (R > 0) {
                const V = R - 1;
                $(V), v(V, L);
              } else
                C("headers"), m("browse"), M(L);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), b === "headers" && y === "browse")
            C("cells"), $(0), N(0), v(0, 0);
          else if (b === "cells") {
            const V = _ - 1;
            if (y === "browse") {
              const ce = Math.min(V, R + 1);
              $(ce), v(ce, 0), N(0);
            } else if (y === "navigate" && R < V) {
              const ce = R + 1;
              $(ce), v(ce, L);
            }
          }
          break;
        case "Home":
          H.preventDefault(), b === "headers" ? (N(0), M(0)) : b === "cells" && (H.ctrlKey ? ($(0), N(0), v(0, 0)) : (N(0), v(R, 0)));
          break;
        case "End":
          if (H.preventDefault(), b === "headers") {
            const V = E - 1;
            N(V), M(V);
          } else if (b === "cells")
            if (H.ctrlKey) {
              const V = _ - 1, ce = E - 1;
              $(V), N(ce), v(V, ce);
            } else {
              const V = E - 1;
              N(V), v(R, V);
            }
          break;
        case " ":
          if (H.preventDefault(), b === "headers" && y === "navigate") {
            const V = t[L];
            V && re(V.key);
          } else b === "cells" && y === "navigate" && B(R);
          break;
      }
    }, [
      b,
      y,
      L,
      R,
      E,
      _,
      t,
      v,
      M,
      re,
      B
    ]);
    Be(() => {
      const H = P.current;
      if (H)
        return H.addEventListener("keydown", A), () => H.removeEventListener("keydown", A);
    }, [A]);
    const U = xe(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": w,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": T,
        "nhsuk-table--compact": f === "compact"
      },
      h
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: P,
        className: U,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: I, role: "row", children: t.map((H, te) => {
            const V = r?.find((le) => le.key === H.key), ce = !!V, ve = b === "headers" && L === te;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: xe("sortable-header", {
                  "sortable-header--focused": ve
                }),
                role: "columnheader",
                tabIndex: ve ? 0 : -1,
                onClick: () => re(H.key),
                onKeyDown: (le) => {
                  (le.key === "Enter" || le.key === " ") && (le.preventDefault(), re(H.key));
                },
                "aria-sort": ce ? V?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: H.label }),
                  ce && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((le) => le.key === H.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: V?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              H.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: D, className: "nhsuk-table__body", role: "rowgroup", children: k.map((H, te) => {
            const V = s === te, ce = b === "cells" && R === te;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: xe("data-row", {
                  "data-row--selected": V,
                  "data-row--focused": ce
                }),
                "aria-selected": V,
                children: t.map((ve, le) => {
                  const ue = ve.tableRenderer ? ve.tableRenderer(H) : ve.render ? ve.render(H) : H[ve.key], J = b === "cells" && R === te && L === le, ne = () => typeof ue == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: ue ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: ue ? "Yes" : "No" })
                  ] }) : String(ue ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: xe("data-cell", {
                        "data-cell--focused": J
                      }),
                      tabIndex: J ? 0 : -1,
                      onClick: () => B(te),
                      children: ne()
                    },
                    ve.key
                  );
                })
              },
              te
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
  onSortChange: r,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: d = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const h = Fe(null), g = Fe(null), x = Fe(null), T = me((b, C) => {
    d || (g.current = C, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", C));
  }, [d]), w = me((b, C) => {
    d || g.current === C || (b.preventDefault(), b.dataTransfer.dropEffect = "move", x.current = C);
  }, [d]), f = me((b, C) => {
    if (d) return;
    b.preventDefault();
    const y = g.current;
    if (!y || y === C) return;
    const m = e.findIndex((_) => _.key === y), E = e.findIndex((_) => _.key === C);
    if (m !== -1 && E !== -1) {
      const _ = [...e], [k] = _.splice(m, 1);
      _.splice(E, 0, k), r(_);
    }
    g.current = null, x.current = null;
  }, [d, e, r]), p = me(() => {
    g.current = null, x.current = null;
  }, []), P = me((b) => {
    const C = t.find((y) => y.key === b);
    return C ? C.label : b;
  }, [t]), I = me((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), D = me((b) => {
    if (d) return;
    const C = e.map(
      (y) => y.key === b ? { ...y, direction: y.direction === "asc" ? "desc" : "asc" } : y
    );
    r(C);
  }, [e, r, d]), R = me((b) => {
    if (d) return;
    const C = e.filter((y) => y.key !== b);
    r(C);
  }, [e, r, d]), $ = me(() => {
    d || r([]);
  }, [r, d]), L = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const b = e.map((C, y) => {
      const m = C.direction === "asc" ? "ascending" : "descending";
      return `${y + 1}. ${P(C.key)} (${m})`;
    });
    if (b.length === 1)
      return `Sorted by: ${b[0]}`;
    if (b.length === 2)
      return `Sorted by: ${b.join(" and ")}`;
    {
      const C = b.pop();
      return `Sorted by: ${b.join(", ")}, and ${C}`;
    }
  }, N = Me(() => {
    const b = ["sort-description"];
    return l && b.push("sort-help"), u && b.push(u), b.join(" ");
  }, [l, u]);
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
        children: L()
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
          "aria-describedby": N,
          children: e.map((b, C) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (y) => T(y, b.key),
              onDragOver: (y) => w(y, b.key),
              onDrop: (y) => f(y, b.key),
              onDragEnd: p,
              onClick: () => D(b.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ n.jsx(
                qe,
                {
                  color: I(C),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => R(b.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${C + 1}`, children: C + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: P(b.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (y) => {
                          y.stopPropagation(), D(b.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${P(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
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
        tt,
        {
          variant: "secondary",
          onClick: $,
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
function _f(e, t) {
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
const Ta = gn(function(t, r) {
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
    orientation: g = "horizontal",
    id: x,
    isLoading: T = !1,
    loadingComponent: w,
    error: f = null,
    errorComponent: p,
    "data-testid": P,
    actions: I,
    actionsMinGap: D = 16,
    forceActionsAbove: R = !1
  } = t, L = Fe(
    x || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, N = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), b = `${L}-description`, C = `${L}-navigation-help`, {
    dataComparator: y = (F, Q) => JSON.stringify(F) === JSON.stringify(Q),
    filterFunction: m = (F) => F,
    booleanRenderer: E = (F) => F ? "✓" : "✗"
  } = a || {}, _ = o !== void 0, k = o ?? 0, [v, M] = Ie({
    focusArea: "tabs",
    focusedTabIndex: k,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), re = Me(() => ({
    selectedIndex: k,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [k]), [B, A] = Io(_f, re);
  Be(() => {
    const F = B.tabLoadingStates.length, Q = s.length;
    F !== Q && A({ type: "ADJUST_ARRAYS", payload: { newLength: Q } });
  }, [s.length]), Be(() => {
    _ && A({ type: "SET_SELECTED_INDEX", payload: k });
  }, [k, _]), Be(() => {
    M((F) => ({
      ...F,
      focusArea: "tabs",
      focusedTabIndex: B.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [B.selectedIndex]), Be(() => {
    l && l(B.globalSelectedRowData);
  }, [B.globalSelectedRowData, l]);
  const U = me(
    (F, Q) => y(F, Q),
    [y]
  ), H = me(
    (F) => {
      F >= 0 && F < s.length && !s[F].disabled && (A({ type: "SET_SELECTED_INDEX", payload: F }), M((Q) => ({
        ...Q,
        focusedTabIndex: F,
        focusArea: "tabs"
      })), i?.(F));
    },
    [s, i]
  ), te = Fe(!1), V = me(
    (F, Q) => {
      if (!Q?.force && !te.current && F === 0) {
        te.current = !0;
        return;
      }
      te.current = !0, setTimeout(() => {
        const ee = ce.current[F], K = ee?.parentElement;
        if (ee && K) {
          const Z = ee.offsetLeft, se = ee.offsetWidth, ie = K.clientWidth, _e = Z - ie / 2 + se / 2;
          try {
            K.scrollTo({
              left: Math.max(0, _e),
              behavior: "smooth"
            });
          } catch {
            ee.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!ee,
          tabListElementExists: !!K
        });
      }, 50);
    },
    []
  ), ce = Fe([]), ve = Fe([]), le = me(
    (F, Q) => {
      const ee = B.sortConfig || [], K = ee.find(
        (ie) => ie.key === Q
      );
      let Z;
      K ? K.direction === "asc" ? Z = ee.map(
        (ie) => ie.key === Q ? { ...ie, direction: "desc" } : ie
      ) : Z = ee.filter(
        (ie) => ie.key !== Q
      ) : Z = [...ee, { key: Q, direction: "asc" }], A({
        type: "SET_SORT",
        payload: Z
      }), s[F].onSort?.(Q);
    },
    [B.sortConfig, s]
  ), ue = me(
    (F) => {
      setTimeout(() => {
        const Q = document.querySelector(
          `[data-tab-panel="${B.selectedIndex}"] th:nth-child(${F + 1})`
        );
        Q && Q.focus();
      }, 0);
    },
    [B.selectedIndex]
  ), J = me(
    (F) => E(F),
    [E]
  ), ne = me(
    (F, Q) => {
      setTimeout(() => {
        const ee = document.querySelector(
          `[data-tab-panel="${B.selectedIndex}"] tbody tr:nth-child(${F + 1}) td:nth-child(${Q + 1})`
        );
        ee && ee.focus();
      }, 0);
    },
    [B.selectedIndex]
  );
  Be(() => {
    v.isGridActive && (v.focusArea === "headers" ? setTimeout(() => {
      ue(v.focusedHeaderIndex);
    }, 0) : v.focusArea === "cells" && setTimeout(() => {
      ne(
        v.focusedRowIndex,
        v.focusedColumnIndex
      );
    }, 0));
  }, [
    v.focusArea,
    v.isGridActive,
    v.focusedHeaderIndex,
    v.focusedRowIndex,
    v.focusedColumnIndex,
    ue,
    ne
  ]), Be(() => {
    V(B.selectedIndex);
  }, [B.selectedIndex, V]);
  const j = me(
    (F, Q) => {
      const { key: ee } = F, K = s[B.selectedIndex], Z = K?.columns.length || 0;
      switch (ee) {
        case "ArrowLeft":
          F.preventDefault();
          const se = Math.max(0, Q - 1);
          M((Ne) => ({
            ...Ne,
            focusedHeaderIndex: se
          })), ue(se);
          break;
        case "ArrowRight":
          F.preventDefault();
          const ie = Math.min(Z - 1, Q + 1);
          M((Ne) => ({
            ...Ne,
            focusedHeaderIndex: ie
          })), ue(ie);
          break;
        case "ArrowUp":
          F.preventDefault(), M((Ne) => ({
            ...Ne,
            focusArea: "tabs",
            focusedTabIndex: B.selectedIndex
          })), V(B.selectedIndex), ce.current[B.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          F.preventDefault(), M((Ne) => ({
            ...Ne,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: Q,
            isGridActive: !0
          }));
          break;
        case "Home":
          F.preventDefault(), M((Ne) => ({ ...Ne, focusedHeaderIndex: 0 })), ue(0);
          break;
        case "End":
          F.preventDefault();
          const _e = Z - 1;
          M((Ne) => ({
            ...Ne,
            focusedHeaderIndex: _e
          })), ue(_e);
          break;
        case "Enter":
        case " ":
          F.preventDefault();
          const Ce = K?.columns[Q]?.key;
          Ce && le(B.selectedIndex, Ce);
          break;
      }
    },
    [
      s,
      B.selectedIndex,
      le,
      M,
      ue,
      ne,
      ce
    ]
  ), S = me(
    (F, Q, ee) => {
      const { key: K } = F, Z = s[B.selectedIndex], se = Z?.data.length || 0, ie = Z?.columns.length || 0;
      switch (K) {
        case "ArrowUp":
          if (F.preventDefault(), Q === 0)
            M((ye) => ({
              ...ye,
              focusArea: "headers",
              focusedHeaderIndex: ee,
              isGridActive: !1
            })), ue(ee);
          else {
            const ye = Q - 1;
            M((ke) => ({
              ...ke,
              focusedRowIndex: ye
            })), ne(ye, ee);
          }
          break;
        case "ArrowDown":
          F.preventDefault();
          const _e = Math.min(se - 1, Q + 1);
          M((ye) => ({
            ...ye,
            focusedRowIndex: _e
          })), ne(_e, ee);
          break;
        case "ArrowLeft":
          F.preventDefault();
          const Ce = Math.max(0, ee - 1);
          M((ye) => ({
            ...ye,
            focusedColumnIndex: Ce
          })), ne(Q, Ce);
          break;
        case "ArrowRight":
          F.preventDefault();
          const Ne = Math.min(ie - 1, ee + 1);
          M((ye) => ({
            ...ye,
            focusedColumnIndex: Ne
          })), ne(Q, Ne);
          break;
        case "Home":
          F.preventDefault(), F.ctrlKey ? (M((ye) => ({
            ...ye,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ne(0, 0)) : (M((ye) => ({ ...ye, focusedColumnIndex: 0 })), ne(Q, 0));
          break;
        case "End":
          if (F.preventDefault(), F.ctrlKey) {
            const ye = se - 1, ke = ie - 1;
            M((Pe) => ({
              ...Pe,
              focusedRowIndex: ye,
              focusedColumnIndex: ke
            })), ne(ye, ke);
          } else {
            const ye = ie - 1;
            M((ke) => ({
              ...ke,
              focusedColumnIndex: ye
            })), ne(Q, ye);
          }
          break;
        case "Enter":
        case " ":
          if (F.preventDefault(), Z && Z.data[Q]) {
            const ye = Z.data.some(
              (Re) => "ews_data" in Re
            ) ? m(Z.data, B.filters) : Z.data, ke = B.sortConfig;
            let Pe = ye;
            if (ke && ke.length > 0 && (Pe = [...ye].sort((Re, De) => {
              for (const { key: We, direction: Et } of ke) {
                let bt = Re[We], ut = De[We];
                const Xe = Z.columns.find(
                  (xn) => xn.key === We
                );
                if (Xe?.tableRenderer ? (bt = Xe.tableRenderer(Re), ut = Xe.tableRenderer(De)) : Xe?.render && (bt = Xe.render(Re), ut = Xe.render(De)), bt == null && ut == null) continue;
                if (bt == null) return Et === "asc" ? -1 : 1;
                if (ut == null) return Et === "asc" ? 1 : -1;
                let Ze = 0;
                if (typeof bt == "number" && typeof ut == "number" ? Ze = bt - ut : Ze = String(bt).localeCompare(
                  String(ut),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Ze !== 0)
                  return Et === "asc" ? Ze : -Ze;
              }
              return 0;
            })), Pe[Q]) {
              const Re = Pe[Q], We = B.globalSelectedRowData && U(B.globalSelectedRowData, Re) ? null : Re;
              A({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: We
              });
            }
          }
          break;
      }
    },
    [
      s,
      B.selectedIndex,
      B.filters,
      B.sortConfig,
      m,
      U,
      A,
      M,
      ue,
      ne
    ]
  ), z = me(
    (F, Q) => m(F, Q),
    [m]
  );
  if (Mo(
    r,
    () => ({
      selectTab: (F) => {
        F >= 0 && F < s.length && (A({ type: "SET_SELECTED_INDEX", payload: F }), i?.(F));
      },
      refreshData: (F) => {
        console.log("Refreshing data for tab:", F ?? "all");
      },
      exportData: (F) => {
        const Q = F ?? B.selectedIndex, ee = s[Q];
        return ee ? ee.data : [];
      },
      getSelectedRows: (F) => B.globalSelectedRowData ? [] : [],
      clearSelection: (F) => {
        A({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (F) => {
        A({ type: "SET_FILTERS", payload: F });
      }
    }),
    [B.selectedIndex, B.selectedRows, s, i]
  ), T)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": P,
        children: w || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
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
  if (f)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": P,
        children: p || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: f })
        ] })
      }
    );
  const X = Fe(null), O = Fe(null), Y = Fe(null), [de, we] = Ie(!0);
  Be(() => {
    if (!I) {
      we(!1);
      return;
    }
    if (R) {
      we(!1);
      return;
    }
    function F() {
      if (!X.current || !O.current || !Y.current) return;
      const K = X.current.clientWidth, Z = Array.from(
        O.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), se = Z.reduce((Ne, ye) => Ne + ye.offsetWidth, 0), ie = Y.current.offsetWidth, _e = Math.max(8 * (Z.length - 1), 0), Ce = se + _e + ie + D <= K;
      we(Ce);
    }
    const Q = requestAnimationFrame(() => F()), ee = new ResizeObserver(() => F());
    return X.current && ee.observe(X.current), O.current && ee.observe(O.current), () => {
      cancelAnimationFrame(Q), ee.disconnect();
    };
  }, [I, D, R, s.length]);
  const pe = Y, fe = me(() => pe.current ? Array.from(
    pe.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((F) => !F.hasAttribute("disabled")) : [], []), G = me(
    (F) => {
      const Q = fe();
      if (!Q.length) return;
      const ee = Math.max(0, Math.min(F, Q.length - 1));
      Q[ee].focus(), M((K) => ({ ...K, focusArea: "actions", focusedActionIndex: ee }));
    },
    [fe]
  ), W = me(() => G(0), [G]), ae = me(
    (F, Q) => {
      const { key: ee } = F, K = s.length - 1;
      switch (ee) {
        case "ArrowUp": {
          I && !de && (F.preventDefault(), W());
          break;
        }
        case "ArrowLeft": {
          F.preventDefault();
          const Z = Q > 0 ? Q - 1 : K;
          H(Z), V(Z), ce.current[Z]?.focus();
          break;
        }
        case "ArrowRight": {
          if (F.preventDefault(), Q === K && I && de) {
            W();
            return;
          }
          const Z = Q < K ? Q + 1 : 0;
          H(Z), V(Z), ce.current[Z]?.focus();
          break;
        }
        case "ArrowDown": {
          F.preventDefault(), M((Z) => ({
            ...Z,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          F.preventDefault(), H(0), V(0), ce.current[0]?.focus();
          break;
        }
        case "End": {
          F.preventDefault(), H(K), V(K), ce.current[K]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          F.preventDefault(), H(Q);
          break;
        }
        case "Tab": {
          !F.shiftKey && Q === K && I && de && W();
          break;
        }
      }
    },
    [s.length, H, V, I, de, W]
  ), oe = me((F) => {
    const { key: Q } = F, ee = fe();
    if (!ee.length) return;
    const K = ee.findIndex((Z) => Z === document.activeElement);
    switch (Q) {
      case "ArrowLeft": {
        if (de)
          if (K > 0)
            F.preventDefault(), G(K - 1);
          else {
            F.preventDefault();
            const Z = s.length - 1;
            H(Z), V(Z), ce.current[Z]?.focus(), M((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: Z }));
          }
        break;
      }
      case "ArrowRight": {
        de && (K < ee.length - 1 ? (F.preventDefault(), G(K + 1)) : (F.preventDefault(), H(0), V(0), ce.current[0]?.focus(), M((Z) => ({ ...Z, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (de)
          F.preventDefault(), M((Z) => ({ ...Z, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          F.preventDefault();
          const Z = B.selectedIndex;
          ce.current[Z]?.focus(), M((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: Z }));
        }
        break;
      }
    }
  }, [fe, de, G, s.length, H, V, B.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${u}`,
      id: x,
      "data-testid": P,
      ref: X,
      children: [
        c && !N && /* @__PURE__ */ n.jsx("div", { id: b, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: C,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          di,
          {
            sortConfig: B.sortConfig || [],
            columns: s.flatMap(
              (F) => F.columns.map((Q) => ({ key: Q.key, label: Q.label }))
            ).filter(
              (F, Q, ee) => ee.findIndex((K) => K.key === F.key) === Q
              // Remove duplicates
            ),
            onSortChange: (F) => {
              A({ type: "SET_SORT", payload: F });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        I && !de && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: Y,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: oe,
            children: I
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${de ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? N ? c : b : C,
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              ref: O,
              children: s.map((F, Q) => {
                const ee = Q === B.selectedIndex, K = F.disabled || h;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${F.id}`,
                    "aria-controls": `panel-${F.id}`,
                    "aria-selected": ee,
                    "aria-disabled": K,
                    tabIndex: ee ? 0 : -1,
                    ref: (Z) => {
                      ce.current[Q] = Z;
                    },
                    onClick: () => H(Q),
                    onKeyDown: (Z) => ae(Z, Q),
                    disabled: K,
                    className: [
                      "aria-tabs-datagrid__tab",
                      ee ? "aria-tabs-datagrid__tab--selected" : "",
                      K ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: F.label }),
                      B.tabLoadingStates[Q] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      B.tabErrors[Q] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  F.id
                );
              })
            }
          ),
          I && de && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: Y,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: oe,
              children: I
            }
          )
        ] }),
        s.map((F, Q) => {
          const ee = Q === B.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${F.id}`,
              "aria-labelledby": `tab-${F.id}`,
              tabIndex: 0,
              hidden: !ee,
              ref: (K) => {
                ve.current[Q] = K;
              },
              className: `aria-tabs-datagrid__panel ${F.className || ""}`,
              "data-tab-panel": Q,
              children: ee && (() => {
                const K = F.data.some(
                  (se) => "ews_data" in se
                ) ? z(F.data, B.filters) : F.data, Z = Me(() => {
                  const se = B.sortConfig;
                  return !se || se.length === 0 ? K : [...K].sort((ie, _e) => {
                    for (const { key: Ce, direction: Ne } of se) {
                      let ye = ie[Ce], ke = _e[Ce];
                      const Pe = F.columns.find(
                        (De) => De.key === Ce
                      );
                      if (Pe?.tableRenderer ? (ye = Pe.tableRenderer(ie), ke = Pe.tableRenderer(_e)) : Pe?.render && (ye = Pe.render(ie), ke = Pe.render(_e)), ye == null && ke == null) continue;
                      if (ye == null) return 1;
                      if (ke == null) return -1;
                      let Re = 0;
                      if (typeof ye == "number" && typeof ke == "number" ? Re = ye - ke : typeof ye == "boolean" && typeof ke == "boolean" ? Re = ye === ke ? 0 : ye ? 1 : -1 : Re = String(ye).localeCompare(
                        String(ke),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Re !== 0)
                        return Ne === "asc" ? Re : -Re;
                    }
                    return 0;
                  });
                }, [K, B.sortConfig, F.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": F.ariaLabel,
                    "aria-describedby": F.ariaDescription ? `panel-${F.id}-description` : void 0,
                    children: [
                      F.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${F.id}-description`,
                          children: F.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: F.columns.map((se, ie) => {
                        const _e = B.sortConfig?.find(
                          (ye) => ye.key === se.key
                        ), Ce = !!_e, Ne = v.focusArea === "headers" && v.focusedHeaderIndex === ie;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ne ? "sortable-header--focused" : ""} ${Ce ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ne ? 0 : -1,
                            onClick: () => le(Q, se.key),
                            onKeyDown: (ye) => j(ye, ie),
                            "aria-sort": Ce ? _e?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: se.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${Ce ? `sort-indicator--${_e?.direction}` : ""}`,
                                  children: [
                                    B.sortConfig && B.sortConfig.length > 0 && B.sortConfig.findIndex(
                                      (ye) => ye.key === se.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${B.sortConfig.findIndex((ye) => ye.key === se.key) + 1}`,
                                        "data-priority": B.sortConfig.findIndex(
                                          (ye) => ye.key === se.key
                                        ) + 1,
                                        title: `Sort priority: ${B.sortConfig.findIndex((ye) => ye.key === se.key) + 1}`,
                                        children: B.sortConfig.findIndex(
                                          (ye) => ye.key === se.key
                                        ) + 1
                                      }
                                    ),
                                    Ce && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${_e?.direction}`,
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
                          se.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: Z.map((se, ie) => {
                        const _e = B.globalSelectedRowData && U(B.globalSelectedRowData, se), Ce = v.focusArea === "cells" && v.focusedRowIndex === ie;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${_e ? "data-row--selected" : ""} ${Ce ? "data-row--focused" : ""}`,
                            "aria-selected": _e,
                            children: F.columns.map((Ne, ye) => {
                              const ke = se[Ne.key];
                              let Pe;
                              Ne.tableRenderer ? Pe = Ne.tableRenderer(se) : Ne.render ? Pe = Ne.render(se) : Pe = ke;
                              const Re = v.focusArea === "cells" && v.focusedRowIndex === ie && v.focusedColumnIndex === ye, De = () => {
                                if (Ne.customRenderer) {
                                  const We = Ne.customRenderer(
                                    ke,
                                    se
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: We
                                    }
                                  );
                                }
                                return typeof ke == "boolean" && Pe === ke ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  J(ke),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ke ? "Yes" : "No" })
                                ] }) : st.isValidElement(Pe) || typeof Pe != "object" ? Pe ?? "" : Pe;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Re ? "data-cell--focused" : ""}`,
                                  tabIndex: Re ? 0 : -1,
                                  onClick: () => {
                                    const Et = B.globalSelectedRowData && U(
                                      B.globalSelectedRowData,
                                      se
                                    ) ? null : se;
                                    A({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Et
                                    });
                                  },
                                  onKeyDown: (We) => S(We, ie, ye),
                                  children: De()
                                },
                                Ne.key
                              );
                            })
                          },
                          ie
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            F.id
          );
        })
      ]
    }
  );
}), Un = {
  asc: "↑",
  desc: "↓"
}, wf = (e) => [...e].sort((t, r) => t.priority - r.priority);
function ua(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Sf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function kf(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Cf(e, t) {
  const r = t.find((s) => s.id === e), a = Sf(t);
  return r ? r.priority < a : !1;
}
const Vx = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const u = Me(() => wf(e), [e]), h = me((P) => {
    if (l) return;
    const I = e.map(
      (D) => D.id === P ? { ...D, direction: D.direction === "asc" ? "desc" : "asc" } : D
    );
    t(I);
  }, [e, t, l]), g = me((P) => {
    if (l) return;
    const I = e.findIndex((R) => R.id === P);
    if (I <= 0) return;
    const D = [...e];
    [D[I], D[I - 1]] = [D[I - 1], D[I]], t(ua(D));
  }, [e, t, l]), x = me((P) => {
    if (l) return;
    const I = e.findIndex((R) => R.id === P);
    if (I >= e.length - 1 || I === -1) return;
    const D = [...e];
    [D[I], D[I + 1]] = [D[I + 1], D[I]], t(ua(D));
  }, [e, t, l]), T = me((P) => {
    if (l) return;
    const I = e.filter((D) => D.id !== P);
    t(ua(I));
  }, [e, t, l]), w = me(() => {
    l || t([]);
  }, [t, l]), f = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const P = u.map((I, D) => {
      const R = I.direction === "asc" ? "ascending" : "descending";
      return `${D + 1}. ${I.label} (${R})`;
    });
    if (P.length === 1)
      return `Sorted by: ${P[0]}`;
    if (P.length === 2)
      return `Sorted by: ${P.join(" and ")}`;
    {
      const I = P.pop();
      return `Sorted by: ${P.join(", ")}, and ${I}`;
    }
  }, p = Me(() => {
    const P = ["sort-description"];
    return i && P.push("sort-help"), c && P.push(c), P.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: f()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: f()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": p,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((P) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                qe,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => T(P.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: P.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: P.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => h(P.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${P.label}. Currently ${P.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: P.direction === "asc" ? Un.asc : Un.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(P.id),
                          disabled: l || !kf(P.id, e),
                          "aria-label": `Move ${P.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => x(P.id),
                          disabled: l || !Cf(P.id, e),
                          "aria-label": `Move ${P.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            P.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      tt,
      {
        variant: "secondary",
        onClick: w,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      Un.asc,
      "/",
      Un.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ys = (e, t) => t.map((r) => ({
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
})), Da = [
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
], jf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Nf = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Tf = (e) => {
  if (typeof e == "boolean") {
    const r = Da.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Da.find((r) => r.value === e);
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
}), Yx = (e) => {
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
}, Mf = {
  dataComparator: jf,
  filterFunction: Nf,
  booleanRenderer: Tf,
  getDataId: Df
};
function fo(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = r, h = t.find((I) => I.key === a), g = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", x = () => s.filter((D) => !i.includes(D) && e[D]).slice(0, 3).map((D) => {
    const R = t.find((b) => b.key === D), $ = e[D], L = c[D] ? c[D]($, e) : R?.cardRenderer ? R.cardRenderer(e) : R?.render ? R.render(e) : $;
    return `${R?.label || D}: ${L}`;
  }).join(" • "), T = () => o.length === 0 ? null : o.filter((I) => e[I.fieldKey] !== void 0).map((I) => {
    const D = e[I.fieldKey], R = I.render ? I.render(D, e) : D;
    return `<span class="nhsuk-tag ${If(I, D)}">${R}</span>`;
  }).join(""), w = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", f = T(), p = x(), P = f ? `${p}${f ? `<div class="adaptive-card__badges">${f}</div>` : ""}` : p;
  return {
    variant: w(),
    heading: String(g),
    descriptionHtml: P,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${g}`
  };
}
function If(e, t) {
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
  onSelect: r,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, h = e.speciality, g = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
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
            qe,
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
            tt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (x) => {
                x.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            tt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (x) => {
                x.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            tt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (x) => {
                x.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, fi = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        qe,
        {
          color: Ef(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        qe,
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
      tt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      tt,
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
        qe,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        qe,
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
      tt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      tt,
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
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, h = e.ews_data?.avpu;
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
            o !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Ff(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: h && /* @__PURE__ */ n.jsxs(
            qe,
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
            tt,
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
            tt,
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
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
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
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", s = r.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ n.jsx(
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
  appointment: (e, t, r) => {
    const a = r.getStatus?.(e) || "pending", s = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ n.jsx(
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
  medication: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
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
  vitals: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
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
    cardTemplate: e?.cardTemplate ? (t, r, a) => e.cardTemplate(t, r) : void 0,
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
  const [r, a] = Ie("cards");
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
  }, [e, t]), r;
}
function Vf(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Yf(e, t, r, a) {
  const s = a ? { ...a.defaultCardConfig, ...r } : { ...Lf, ...r };
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
const qx = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
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
  onTabChange: g,
  ariaLabel: x = "Data grid",
  ariaDescription: T,
  orientation: w = "horizontal",
  id: f,
  disabled: p = !1,
  className: P,
  ...I
}) => {
  const D = Gf(e, t), R = h !== void 0, $ = h ?? 0, L = Me(() => {
    if (c.some(
      (W) => W.data && W.data.length > 0 && mo(W.data)
    )) {
      const W = po(r);
      return {
        ...ho.defaultCardConfig,
        ...W
      };
    } else
      return po(r);
  }, [r, c]), N = Me(() => c.some(
    (W) => W.data && W.data.length > 0 && mo(W.data)
  ) ? ho : void 0, [c]), b = Me(() => ({
    selectedIndex: $,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [$, c.length]), [C, y] = Io(Uf, b), m = Fe([]), E = Fe([]), _ = Fe([]), k = Fe(null), [v, M] = Ie({
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
  }), re = me((G) => {
    if (!G.current)
      return { columns: 1, rows: 0 };
    const W = G.current, ae = W.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (ae.length === 0)
      return { columns: 1, rows: 0 };
    const oe = W.offsetWidth, Q = ae[0].offsetWidth, ee = Math.floor(oe / Q) || 1, K = Math.ceil(ae.length / ee);
    return { columns: ee, rows: K };
  }, []), B = me((G, W) => ({
    row: Math.floor(G / W),
    col: G % W
  }), []), A = me((G, W, ae) => G * ae + W, []), U = me((G, W, ae, oe) => {
    const { row: F, col: Q } = B(G, oe);
    let ee = F, K = Q;
    switch (W) {
      case "up":
        ee = Math.max(0, F - 1);
        break;
      case "down":
        ee = Math.min(Math.floor((ae - 1) / oe), F + 1);
        break;
      case "left":
        K = Math.max(0, Q - 1);
        break;
      case "right":
        K = Math.min(oe - 1, Q + 1);
        break;
    }
    const Z = A(ee, K, oe);
    return Math.min(Z, ae - 1);
  }, [B, A]);
  Be(() => {
    v.isCardNavigationActive && v.focusedCardElementIndex >= 0 && v.cardElements.length > 0 && setTimeout(() => {
      const G = v.cardElements[v.focusedCardElementIndex];
      G && (G.element.focus(), G.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [v.isCardNavigationActive, v.focusedCardElementIndex, v.cardElements.length]), Be(() => {
    const G = () => {
      if (D === "cards" && k.current) {
        const { columns: oe, rows: F } = re(k);
        M((Q) => ({
          ...Q,
          gridColumns: oe,
          gridRows: F
        }));
      }
    }, W = setTimeout(G, 200), ae = () => {
      setTimeout(G, 100);
    };
    return window.addEventListener("resize", ae), () => {
      clearTimeout(W), window.removeEventListener("resize", ae);
    };
  }, [D, c, re]), Be(() => {
    const G = C.tabLoadingStates.length, W = c.length;
    G !== W && y({ type: "ADJUST_ARRAYS", payload: { newLength: W } });
  }, [c.length, C.tabLoadingStates.length]), Be(() => {
    R && h !== C.selectedIndex && y({ type: "SET_SELECTED_INDEX", payload: h });
  }, [R, h, C.selectedIndex]);
  const H = me((G) => {
    G >= 0 && G < c.length && !c[G].disabled && (y({ type: "SET_SELECTED_INDEX", payload: G }), g?.(G));
  }, [c, g]), te = me((G) => {
    console.log("Card selected:", G), y({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: G
    });
  }, []), V = me((G) => {
    const W = E.current[G];
    W && (W.focus(), W.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ce = me((G) => {
    const W = E.current[G];
    if (!W) return [];
    const ae = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), oe = W.querySelectorAll(ae);
    return Array.from(oe).map((F, Q) => ({
      id: F.id || `card-${G}-element-${Q}`,
      element: F,
      label: F.getAttribute("aria-label") || F.textContent?.trim() || F.getAttribute("title") || `Element ${Q + 1}`,
      type: F.tagName.toLowerCase() === "button" ? "button" : F.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(F.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ve = Fe(null), le = me((G) => {
    const W = ve.current;
    if (!W) return;
    const ae = document.createElement("div");
    ae.setAttribute("aria-live", "polite"), ae.setAttribute("aria-atomic", "true"), ae.className = "sr-only", ae.textContent = G, W.appendChild(ae), setTimeout(() => {
      W.contains(ae) && W.removeChild(ae);
    }, 1e3);
  }, []), ue = me((G) => {
    const W = G.filter((oe) => oe.sortable !== !1), ae = [
      { value: "", label: "Sort by..." }
    ];
    return W.forEach((oe) => {
      const F = oe.label || oe.key;
      oe.key === "name" ? ae.push(
        { value: `${oe.key}-asc`, label: `${F} (A-Z)` },
        { value: `${oe.key}-desc`, label: `${F} (Z-A)` }
      ) : oe.key === "ews_score" || oe.key.includes("score") ? ae.push(
        { value: `${oe.key}-desc`, label: `${F} (High-Low)` },
        { value: `${oe.key}-asc`, label: `${F} (Low-High)` }
      ) : oe.key === "age" || oe.key.includes("date") || oe.key.includes("time") ? ae.push(
        { value: `${oe.key}-desc`, label: `${F} (Oldest-Youngest)` },
        { value: `${oe.key}-asc`, label: `${F} (Youngest-Oldest)` }
      ) : ae.push(
        { value: `${oe.key}-asc`, label: `${F} (A-Z)` },
        { value: `${oe.key}-desc`, label: `${F} (Z-A)` }
      );
    }), ae;
  }, []), J = me((G, W) => W ? [...G].sort((ae, oe) => {
    const F = ae[W.key], Q = oe[W.key];
    if (F == null && Q == null) return 0;
    if (F == null) return 1;
    if (Q == null) return -1;
    const ee = Number(F), K = Number(Q);
    if (!isNaN(ee) && !isNaN(K))
      return W.direction === "asc" ? ee - K : K - ee;
    const Z = String(F).toLowerCase(), se = String(Q).toLowerCase(), ie = Z.localeCompare(se);
    return W.direction === "asc" ? ie : -ie;
  }) : G, []), ne = me((G) => {
    if (!G) {
      M((Z) => ({ ...Z, cardSortConfig: null })), le("Card sorting cleared");
      return;
    }
    const [W, ae] = G.split("-"), oe = { key: W, direction: ae };
    M((Z) => ({ ...Z, cardSortConfig: oe }));
    const ee = c[C.selectedIndex]?.columns.find((Z) => Z.key === W)?.label || W;
    le(`Cards sorted by ${ee} in ${ae === "asc" ? "ascending" : "descending"} order`);
  }, [c, C.selectedIndex, le]), j = me((G) => {
    const oe = c[C.selectedIndex]?.columns.find((Q) => Q.key === G.key)?.label || G.key, F = G.direction === "asc" ? "ascending" : "descending";
    return `${oe} (${F})`;
  }, [c, C.selectedIndex]), S = me((G) => {
    const W = c[C.selectedIndex];
    if (s) {
      const ae = C.sortConfig;
      return !ae || ae.length === 0 ? G : [...G].sort((oe, F) => {
        for (const { key: Q, direction: ee } of ae) {
          let K = oe[Q], Z = F[Q];
          const se = W?.columns.find((ke) => ke.key === Q);
          if (se?.cardRenderer ? (K = se.cardRenderer(oe), Z = se.cardRenderer(F)) : se?.render && (K = se.render(oe), Z = se.render(F)), K == null && Z == null) continue;
          if (K == null) return ee === "asc" ? -1 : 1;
          if (Z == null) return ee === "asc" ? 1 : -1;
          const ie = Number(K), _e = Number(Z);
          if (!isNaN(ie) && !isNaN(_e)) {
            const ke = ie - _e;
            if (ke !== 0) return ee === "asc" ? ke : -ke;
            continue;
          }
          const Ce = String(K).toLowerCase(), Ne = String(Z).toLowerCase(), ye = Ce.localeCompare(Ne);
          if (ye !== 0) return ee === "asc" ? ye : -ye;
        }
        return 0;
      });
    } else
      return J(G, v.cardSortConfig);
  }, [s, C.sortConfig, v.cardSortConfig, J, c, C.selectedIndex]), z = me((G, W) => {
    const ae = ce(G), oe = ae[W];
    if (oe) {
      oe.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const F = `Focused on ${oe.label}, ${oe.type} ${W + 1} of ${ae.length} within card`;
      le(F);
    }
  }, [ce, le]), X = me((G) => {
    m.current[G]?.focus();
  }, []), O = me(() => {
    const G = _.current[0];
    if (!G) return [];
    const W = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), ae = G.querySelectorAll(W);
    return Array.from(ae);
  }, []), Y = me((G) => {
    if (G === 0) {
      const W = _.current[0], ae = W?.querySelector(".sort-controls-row");
      if (ae) {
        ae.setAttribute("tabindex", "-1"), ae.focus();
        const F = `Sort controls group with ${O().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        le(F);
      } else W && W.focus();
    } else {
      const W = O(), ae = G - 1, oe = W[ae];
      if (oe) {
        oe.focus();
        const F = oe.tagName.toLowerCase() === "select", Q = oe.tagName.toLowerCase() === "button", ee = F ? "dropdown" : Q ? "button" : "control", K = F ? ". Use Space key to open dropdown" : "", Z = `${ee} ${ae + 1} of ${W.length}${K}`;
        le(Z);
      }
    }
  }, [O, le]), de = me((G, W) => {
    const { key: ae } = G, oe = c[C.selectedIndex], F = oe?.data.length || 0;
    if (ae === "ArrowLeft" && G.shiftKey) {
      G.preventDefault(), G.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (ae === "ArrowRight" && G.shiftKey) {
      G.preventDefault(), G.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!v.isCardNavigationActive) {
      switch (ae) {
        case "ArrowUp":
          if (G.preventDefault(), W === 0)
            M((Z) => ({ ...Z, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), Y(0);
          else {
            const Z = U(W, "up", F, v.gridColumns);
            Z !== W && (M((se) => ({ ...se, focusedCardIndex: Z })), V(Z), le(`Moved to card ${Z + 1} of ${F}`));
          }
          break;
        case "ArrowDown":
          G.preventDefault();
          const Q = U(W, "down", F, v.gridColumns);
          Q !== W && (M((Z) => ({ ...Z, focusedCardIndex: Q })), V(Q), le(`Moved to card ${Q + 1} of ${F}`));
          break;
        case "ArrowLeft":
          G.preventDefault();
          const ee = U(W, "left", F, v.gridColumns);
          ee !== W ? (M((Z) => ({ ...Z, focusedCardIndex: ee })), V(ee), le(`Moved to card ${ee + 1} of ${F}`)) : C.selectedIndex > 0 && (y({ type: "SET_SELECTED_INDEX", payload: C.selectedIndex - 1 }), M((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => X(C.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          G.preventDefault();
          const K = U(W, "right", F, v.gridColumns);
          K !== W ? (M((Z) => ({ ...Z, focusedCardIndex: K })), V(K), le(`Moved to card ${K + 1} of ${F}`)) : C.selectedIndex < c.length - 1 && (y({ type: "SET_SELECTED_INDEX", payload: C.selectedIndex + 1 }), M((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => X(C.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (oe?.data[W]) {
            G.preventDefault(), M((se) => ({
              ...se,
              selectedCardIndex: W
            }));
            const Z = ce(W);
            Z.length > 0 ? (M((se) => ({
              ...se,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Z,
              selectedCardIndex: W
              // Ensure selection is maintained
            })), le(`Card ${W + 1} selected and navigation activated. ${Z.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : le(`Card ${W + 1} selected.`);
          }
          break;
        case " ":
          if (oe?.data[W]) {
            G.preventDefault(), M((se) => ({
              ...se,
              selectedCardIndex: se.selectedCardIndex === W ? -1 : W
            }));
            const Z = v.selectedCardIndex === W;
            le(`Card ${W + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (ae) {
      case "ArrowUp":
      case "ArrowLeft":
        G.preventDefault();
        const Q = Math.max(0, v.focusedCardElementIndex - 1);
        M((se) => ({ ...se, focusedCardElementIndex: Q })), z(W, Q);
        break;
      case "ArrowDown":
      case "ArrowRight":
        G.preventDefault();
        const ee = Math.min(v.cardElements.length - 1, v.focusedCardElementIndex + 1);
        M((se) => ({ ...se, focusedCardElementIndex: ee })), z(W, ee);
        break;
      case "Enter":
        G.preventDefault();
        const K = v.cardElements[v.focusedCardElementIndex];
        K && (K.element.click(), le(`Activated ${K.label}`));
        break;
      case " ":
        G.preventDefault();
        const Z = v.cardElements[v.focusedCardElementIndex];
        if (Z) {
          const se = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(se), le(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        G.preventDefault(), M((se) => ({
          ...se,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => V(W), 0), le("Exited card navigation, returned to card level");
        break;
      case "Home":
        G.preventDefault(), v.cardElements.length > 0 && (M((se) => ({ ...se, focusedCardElementIndex: 0 })), z(W, 0));
        break;
      case "End":
        if (G.preventDefault(), v.cardElements.length > 0) {
          const se = v.cardElements.length - 1;
          M((ie) => ({ ...ie, focusedCardElementIndex: se })), z(W, se);
        }
        break;
    }
  }, [v, C.selectedIndex, c, te, V, X, M, ce, z, le]), we = me((G) => {
    const W = m.current[G], ae = W?.parentElement;
    if (!W || !ae) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const oe = W.getBoundingClientRect(), F = ae.getBoundingClientRect();
    oe.left >= F.left && oe.right <= F.right || (console.log("Tab not visible, scrolling into view (mobile)"), W.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), pe = me((G, W) => {
    if (D !== "cards")
      return;
    const { key: ae } = G;
    switch (ae) {
      case "ArrowLeft":
        G.preventDefault();
        const oe = W > 0 ? W - 1 : c.length - 1;
        H(oe), M((K) => ({ ...K, focusedTabIndex: oe })), m.current[oe]?.focus(), we(oe);
        break;
      case "ArrowRight":
        G.preventDefault();
        const F = W < c.length - 1 ? W + 1 : 0;
        H(F), M((K) => ({ ...K, focusedTabIndex: F })), m.current[F]?.focus(), we(F);
        break;
      case "ArrowDown":
        G.preventDefault();
        const Q = c[C.selectedIndex];
        Q && Q.columns && Q.columns.length > 0 ? (M((K) => ({
          ...K,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), Y(0)) : (M((K) => ({
          ...K,
          focusArea: "cards",
          focusedCardIndex: 0
        })), V(0));
        break;
      case "Home":
        G.preventDefault(), H(0), M((K) => ({ ...K, focusedTabIndex: 0 })), m.current[0]?.focus(), we(0);
        break;
      case "End":
        G.preventDefault();
        const ee = c.length - 1;
        H(ee), M((K) => ({ ...K, focusedTabIndex: ee })), m.current[ee]?.focus(), we(ee);
        break;
      case "Enter":
      case " ":
        G.preventDefault(), H(W);
        break;
    }
  }, [c.length, H, D, V, M, we]), fe = me((G, W) => {
    if (D !== "cards")
      return;
    const { key: ae } = G, oe = c[C.selectedIndex];
    if (W === 0 && !v.isSortControlsActive) {
      switch (ae) {
        case "ArrowUp":
          G.preventDefault(), M((Q) => ({
            ...Q,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), X(C.selectedIndex);
          break;
        case "ArrowDown":
          G.preventDefault(), oe?.data && oe.data.length > 0 && (M((Q) => ({
            ...Q,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), V(0));
          break;
        case "Enter":
        case " ":
          G.preventDefault();
          const F = O();
          if (F.length > 0) {
            M((ee) => ({
              ...ee,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), Y(1);
            const Q = `Entered sort controls navigation mode. ${F.length} controls available. Use arrow keys to navigate between controls.`;
            le(Q);
          }
          break;
        case "Escape":
          G.preventDefault(), M((Q) => ({
            ...Q,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), X(C.selectedIndex);
          break;
      }
      return;
    }
    if (v.isSortControlsActive) {
      const Q = O().length;
      switch (ae) {
        case "ArrowLeft":
          G.preventDefault();
          const ee = v.focusedSortControlIndex > 1 ? v.focusedSortControlIndex - 1 : Q;
          M((Z) => ({ ...Z, focusedSortControlIndex: ee })), Y(ee);
          break;
        case "ArrowRight":
          G.preventDefault();
          const K = v.focusedSortControlIndex < Q ? v.focusedSortControlIndex + 1 : 1;
          M((Z) => ({ ...Z, focusedSortControlIndex: K })), Y(K);
          break;
        case "ArrowDown":
          if (G.preventDefault(), v.isSortControlsActive) {
            const Z = v.focusedSortControlIndex < Q ? v.focusedSortControlIndex + 1 : 1;
            M((se) => ({ ...se, focusedSortControlIndex: Z })), Y(Z);
          } else
            oe?.data && oe.data.length > 0 && (M((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), V(0));
          break;
        case "ArrowUp":
          G.preventDefault(), M((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), Y(0);
          break;
        case "Escape":
          G.preventDefault(), M((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), Y(0);
          break;
      }
    }
  }, [D, c, C.selectedIndex, v.isSortControlsActive, v.focusedSortControlIndex, Y, X, V, M, le]);
  if (D === "cards") {
    const G = c[C.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${P || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": x,
            "aria-describedby": `${T || ""} ${f ? `${f}-navigation-help` : ""}`.trim(),
            "aria-orientation": w,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((W, ae) => {
              const oe = ae === C.selectedIndex, F = W.disabled || p;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${W.id}`,
                  "aria-controls": `panel-${W.id}`,
                  "aria-selected": oe,
                  "aria-disabled": F,
                  tabIndex: oe ? 0 : -1,
                  ref: (Q) => {
                    m.current[ae] = Q;
                  },
                  onClick: () => H(ae),
                  onKeyDown: (Q) => pe(Q, ae),
                  disabled: F,
                  className: [
                    "aria-tabs-datagrid__tab",
                    oe ? "aria-tabs-datagrid__tab--selected" : "",
                    F ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: W.label }),
                    C.tabLoadingStates[ae] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    C.tabErrors[ae] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                W.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      G && G.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          di,
          {
            sortConfig: C.sortConfig || [],
            columns: G.columns.map((W) => ({ key: W.key, label: W.label })),
            onSortChange: (W) => {
              y({ type: "SET_SORT", payload: W });
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
            tabIndex: v.focusArea === "sort-controls" ? 0 : -1,
            ref: (W) => {
              _.current[0] = W;
            },
            onKeyDown: (W) => fe(W, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${G.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  Yn,
                  {
                    id: `card-sort-${G.id}`,
                    name: `card-sort-${G.id}`,
                    value: v.cardSortConfig ? `${v.cardSortConfig.key}-${v.cardSortConfig.direction}` : "",
                    onChange: (W) => ne(W.target.value),
                    className: "sort-select",
                    children: ue(G.columns).map((W) => /* @__PURE__ */ n.jsx("option", { value: W.value, children: W.label }, W.value))
                  }
                )
              ] }),
              v.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  j(v.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  tt,
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
          ref: k,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${G?.label || "Data"} cards in ${v.gridRows} rows and ${v.gridColumns} columns`,
          "aria-rowcount": v.gridRows,
          "aria-colcount": v.gridColumns,
          id: `panel-${G?.id}`,
          "aria-labelledby": `tab-${G?.id}`,
          children: S(G?.data || []).map((W, ae) => {
            const oe = v.selectedCardIndex === ae, F = v.focusedCardIndex === ae && v.focusArea === "cards", Q = v.focusedCardIndex === ae && v.focusArea === "card" && v.isCardNavigationActive, ee = ae === 0 && v.focusArea !== "cards", K = F || ee, Z = B(ae, v.gridColumns);
            if (r.cardTemplate) {
              const _e = r.cardTemplate(W, G.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": Z.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (Ce) => {
                        E.current[ae] = Ce;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        oe ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        Q ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": Z.col + 1,
                      "aria-selected": oe,
                      "aria-expanded": Q,
                      "aria-description": Q ? `Card navigation active. ${v.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: K ? 0 : -1,
                      onClick: () => {
                        M((Ce) => ({
                          ...Ce,
                          selectedCardIndex: Ce.selectedCardIndex === ae ? -1 : ae
                        })), te(W);
                      },
                      onKeyDown: (Ce) => de(Ce, ae),
                      onFocus: () => {
                        M((Ce) => Ce.isCardNavigationActive ? Ce : Ce.focusedCardIndex !== ae || Ce.focusArea !== "cards" ? {
                          ...Ce,
                          focusedCardIndex: ae,
                          focusArea: "cards"
                        } : Ce);
                      },
                      children: _e
                    }
                  )
                },
                `card-${ae}`
              );
            }
            const se = Yf(W, G.columns, L, N), ie = [
              se.className || "",
              oe ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              F ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              Q ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": Z.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      oe ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      Q ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": Z.col + 1,
                    "aria-selected": oe,
                    "aria-expanded": Q,
                    onKeyDown: (_e) => {
                      _e.key === "Enter" && (_e.preventDefault(), M((Ce) => ({
                        ...Ce,
                        selectedCardIndex: ae
                      }))), de(_e, ae);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      ii,
                      {
                        ...se,
                        ref: (_e) => {
                          E.current[ae] = _e;
                        },
                        className: ie,
                        "aria-label": `${se["aria-label"] || se.heading}. ${Q ? `Card navigation active with ${v.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: K ? 0 : -1,
                        onClick: () => {
                          M((_e) => ({
                            ..._e,
                            selectedCardIndex: _e.selectedCardIndex === ae ? -1 : ae
                          })), te(W);
                        },
                        onKeyDown: (_e) => de(_e, ae),
                        onFocus: () => {
                          v.isCardNavigationActive || M((_e) => _e.focusedCardIndex !== ae || _e.focusArea !== "cards" ? {
                            ..._e,
                            focusedCardIndex: ae,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : _e);
                        }
                      }
                    )
                  }
                )
              },
              `card-${ae}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: ve,
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
  return D === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${P || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      Ta,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: x,
        ariaDescription: T,
        orientation: w,
        id: f,
        disabled: p,
        selectedIndex: h,
        onTabChange: g,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${P || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      Ta,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: x,
        ariaDescription: T,
        orientation: w,
        id: f,
        disabled: p,
        selectedIndex: h,
        onTabChange: g,
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, xi = (e) => {
  const t = Da.find((r) => r.value === e);
  return t ? t.icon : null;
}, qf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => xi(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Xf = (e) => ys(e, [
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
]), Kf = {
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
  booleanRenderer: (e) => xi(e),
  getDataId: (e) => `financial-${e.id}`
}, Zf = (e) => ys(e, [
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
  const r = Jf[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
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
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
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
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ui,
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
    data: Qf,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      fi,
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
    data: eh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      hi,
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
    data: th,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      pi,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], ah = () => {
  const [e, t] = Ie("healthcare"), r = Me(() => ({
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
      tabPanels: ys(yo, [
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
        tt,
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
      Ta,
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
}, Xx = ah, yi = (e) => /* @__PURE__ */ n.jsx(Po, { ...e }), Kx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: d,
  navigation: c,
  search: u,
  account: h,
  organisation: g,
  logo: x,
  className: T,
  ...w
}) => {
  const f = {
    service: d,
    navigation: c,
    search: u,
    account: h,
    organisation: g,
    logo: x,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(oi, { ...o }),
    /* @__PURE__ */ n.jsx(Ho, { ...f }),
    /* @__PURE__ */ n.jsx(yi, { className: T, ...w, children: /* @__PURE__ */ n.jsx(Eo, { size: s, children: /* @__PURE__ */ n.jsx(qt, { children: /* @__PURE__ */ n.jsxs(jn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(It, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(zo, { ...l })
  ] });
}, Zx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
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
  className: g,
  ...x
}) => {
  const T = {
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
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(oi, { ...o }),
    /* @__PURE__ */ n.jsx(Ho, { ...T }),
    /* @__PURE__ */ n.jsxs(yi, { className: g, ...x, children: [
      d && /* @__PURE__ */ n.jsx(_a, { ...d }),
      /* @__PURE__ */ n.jsx(Eo, { size: s, children: /* @__PURE__ */ n.jsx(qt, { children: /* @__PURE__ */ n.jsxs(jn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(It, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(zo, { ...l })
  ] });
}, vi = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = xe("nhsuk-back-link", a), d = xe("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ n.jsx("button", { className: d, type: "button", onClick: o, ...i, children: c() }) : /* @__PURE__ */ n.jsx("a", { className: d, href: r, ...i, children: c() }) });
};
vi.displayName = "ForwardLink";
const an = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function vo() {
  return typeof window > "u" ? an.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function _i() {
  const [e, t] = q.useState(vo());
  q.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(vo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const r = q.useCallback((o) => e >= an[o], [e]), a = q.useCallback((o) => e < an[o], [e]), s = q.useCallback((o, i) => e >= an[o] && e < an[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: s,
    /** Raw numeric values */
    values: an
  };
}
function Jx(e) {
  const { width: t, values: r } = _i();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = r[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function sh(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = q.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = q.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return q.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    s ? d.set(r, String(s)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, r, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const oh = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), ih = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function lh(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: a,
    onSelectionChange: s,
    renderItemContent: o,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: d,
    animated: c = !0,
    backLabel: u = "Back",
    nextLabel: h = "Next",
    isLoading: g = !1,
    emptyState: x,
    a11y: T,
    className: w,
    getId: f = (he) => he.id,
    orientation: p = "vertical",
    autoEnableThirdColumn: P = !0,
    onDrillChange: I,
    navigationInstructions: D = "Use arrow keys to navigate, Enter to open.",
    initialFocus: R = "first",
    skipFocusOnSelect: $ = !1,
    skipAnnouncements: L = !1,
    onFocusChange: N,
    syncUrl: b = !1,
    urlParamSelected: C = "nsv",
    urlParamDrill: y = "nsvDrill",
    urlSyncDebounceMs: m = 0,
    lazySecondary: E = !1,
    navFooter: _,
    collapsibleNav: k = !1,
    navInitiallyCollapsed: v = !1,
    onNavCollapseChange: M,
    collapseToggleLabelShow: re = "Show navigation",
    collapseToggleLabelHide: B = "Hide navigation",
    collapseToggleIconShow: A,
    collapseToggleIconHide: U,
    persistNavCollapsed: H,
    navCollapsedStorageKey: te = "nsvCollapsed",
    navCollapsedUrlParam: V = "nsvCollapsed",
    autoContentHeader: ce,
    contentHeaderLevel: ve = 2,
    renderContentHeader: le,
    contentSubheader: ue,
    secondarySubheader: J
  } = e, { up: ne } = _i(), [j, S] = q.useState(!1);
  q.useEffect(() => {
    S(!0);
  }, []);
  const z = j && ne("medium"), X = j && ne("xlarge");
  let O;
  d ? O = d : z ? O = "two-column" : O = "list", !d && P && l && X && (O = "three-column");
  const Y = sh({
    enabled: b,
    paramSelected: C,
    paramDrill: y
  }), [de, we] = q.useState(
    () => Y.selectedId !== void 0 ? Y.selectedId : a
  ), pe = r !== void 0 ? r : de, fe = t.find((he) => f(he) === pe), [G, W] = q.useState(
    void 0
  );
  q.useEffect(() => {
    if (pe === void 0) return;
    W(pe);
    const he = setTimeout(() => W(void 0), 220);
    return () => clearTimeout(he);
  }, [pe]);
  const ae = q.useRef(null), oe = q.useRef(null), F = q.useRef(null), Q = q.useRef(null), [ee, K] = q.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [Z, se] = q.useState(() => "nav"), [ie, _e] = q.useState(0), Ce = () => [
    Q.current,
    oe.current,
    F.current
  ].filter(Boolean), Ne = (he) => {
    const Se = Ce(), ge = Math.max(0, Math.min(he, Se.length - 1));
    Se[ge]?.focus(), _e(ge);
  }, ye = q.useCallback(
    (he) => he ? Array.from(he.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ge) => !ge.hasAttribute("disabled") && ge.tabIndex !== -1
    ) : [],
    []
  ), ke = q.useCallback(
    (he) => {
      const Se = ye(oe.current);
      if (!Se.length) {
        oe.current?.focus();
        return;
      }
      const ge = Math.max(0, Math.min(he, Se.length - 1)), Te = Se[ge];
      Te.focus(), setTimeout(() => {
        document.activeElement !== Te && (Te.focus(), setTimeout(() => {
          document.activeElement !== Te && Te.click();
        }, 10));
      }, 10), K((ze) => ({ ...ze, contentIndex: ge }));
      const Ge = (ze) => {
        ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), oe.current?.focus(), Te.removeEventListener("keydown", Ge));
      };
      Se.forEach((ze) => {
        const Oe = ze._escapeHandler;
        Oe && ze.removeEventListener("keydown", Oe);
      }), Te._escapeHandler = Ge, Te.addEventListener("keydown", Ge);
    },
    [ye]
  ), Pe = q.useCallback(
    (he) => {
      const Se = ye(F.current);
      if (!Se.length) {
        F.current?.focus();
        return;
      }
      const ge = Math.max(0, Math.min(he, Se.length - 1)), Te = Se[ge];
      Te.focus(), setTimeout(() => {
        document.activeElement !== Te && (Te.focus(), setTimeout(() => {
          document.activeElement !== Te && Te.click();
        }, 10));
      }, 10), K((ze) => ({ ...ze, secondaryIndex: ge }));
      const Ge = (ze) => {
        ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), F.current?.focus(), Te.removeEventListener("keydown", Ge));
      };
      Se.forEach((ze) => {
        const Oe = ze._escapeHandler;
        Oe && ze.removeEventListener("keydown", Oe);
      }), Te._escapeHandler = Ge, Te.addEventListener("keydown", Ge);
    },
    [ye]
  ), Re = (he) => {
    if (he.defaultPrevented) return;
    const Se = he.key, ge = he.target, Te = !!et.current && et.current.contains(ge), Ge = !!oe.current && oe.current.contains(ge), ze = !!F.current && F.current.contains(ge), Oe = !!F.current, tn = ge === Q.current || ge === oe.current || ge === F.current, Ot = De && (O === "list" || O === "cards"), Bn = Ge && !!ge.closest(".nhs-navigation-split-view__header");
    if (Z === "containers" && tn) {
      if (Se === "ArrowRight") {
        he.preventDefault();
        const $e = Ce(), Ue = Math.min($e.length - 1, ie + 1);
        Ne(Ue);
        return;
      }
      if (Se === "ArrowLeft") {
        he.preventDefault();
        const $e = Math.max(0, ie - 1);
        Ne($e);
        return;
      }
      if (Se === "Home") {
        he.preventDefault(), Ne(0);
        return;
      }
      if (Se === "End") {
        he.preventDefault(), Ne(Ce().length - 1);
        return;
      }
      if (Se === "Enter" || Se === " ") {
        if (he.preventDefault(), ge === Q.current) {
          if (se("nav"), et.current) {
            const $e = Array.from(
              et.current.querySelectorAll("[data-nav-item]")
            );
            ($e[Ve >= 0 ? Ve : 0] || $e[0])?.focus();
          }
        } else ge === oe.current ? (se("content"), ke(ee.contentIndex)) : ge === F.current && (se("secondary"), Pe(ee.secondaryIndex));
        return;
      }
      return;
    }
    if (Se === "Escape") {
      if (Z === "content" || Z === "secondary") {
        if (Ge || ze) {
          if (he.preventDefault(), se("nav"), et.current) {
            const Ue = Array.from(
              et.current.querySelectorAll("[data-nav-item]")
            )[Ve >= 0 ? Ve : 0];
            setTimeout(() => Ue?.focus(), 10);
          }
        } else if ((ge === oe.current || ge === F.current) && (he.preventDefault(), se("nav"), et.current)) {
          const Ue = Array.from(
            et.current.querySelectorAll("[data-nav-item]")
          )[Ve >= 0 ? Ve : 0];
          setTimeout(() => Ue?.focus(), 10);
        }
      }
      return;
    }
    if (Se === "Enter" || Se === " ") {
      if (ge.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ge === oe.current && Z === "content") {
        he.preventDefault(), he.stopPropagation(), ye(oe.current).length > 0 && setTimeout(() => {
          ke(ee.contentIndex);
        }, 50);
        return;
      }
      if (ge === F.current && Z === "secondary") {
        he.preventDefault(), he.stopPropagation(), ye(
          F.current
        ).length > 0 && setTimeout(() => {
          Pe(ee.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Ot && Bn && !tn && (Se === "ArrowRight" || Se === "ArrowLeft")) {
      const $e = ye(oe.current).filter(
        (Ue) => Ue.closest(".nhs-navigation-split-view__header")
      );
      if ($e.length > 1) {
        const Ue = $e.indexOf(ge);
        if (Ue >= 0) {
          const Ts = (Ue + (Se === "ArrowRight" ? 1 : -1) + $e.length) % $e.length;
          he.preventDefault(), $e[Ts].focus();
          return;
        }
      }
    }
    if (Se === "ArrowRight") {
      if (Te || Z === "nav") {
        he.preventDefault(), se("content"), setTimeout(() => oe.current?.focus(), 10);
        return;
      }
      if (Ge || Z === "content") {
        Oe && (he.preventDefault(), se("secondary"), setTimeout(() => F.current?.focus(), 10));
        return;
      }
    }
    if (Se === "ArrowLeft") {
      if (ze || Z === "secondary") {
        he.preventDefault(), se("content"), setTimeout(() => oe.current?.focus(), 10);
        return;
      }
      if (Ge || Z === "content") {
        if (he.preventDefault(), se("nav"), et.current) {
          const Ue = Array.from(
            et.current.querySelectorAll("[data-nav-item]")
          )[Ve >= 0 ? Ve : 0];
          setTimeout(() => Ue?.focus(), 10);
        }
        return;
      }
    }
    if (Se === "Home" && !Te && (he.preventDefault(), se("nav"), et.current)) {
      const $e = Array.from(
        et.current.querySelectorAll("[data-nav-item]")
      ), Ue = $e[Ve >= 0 ? Ve : 0] || $e[0];
      setTimeout(() => Ue?.focus(), 10);
    }
    if (Se === "End") {
      const $e = Oe ? F.current : oe.current;
      $e && !$e.contains(ge) && (he.preventDefault(), Oe ? (se("secondary"), setTimeout(() => F.current?.focus(), 10)) : (se("content"), setTimeout(() => oe.current?.focus(), 10)));
    }
    if (Se === "ArrowDown" || Se === "ArrowUp") {
      if (ge === oe.current && Se === "ArrowDown") {
        he.preventDefault(), ye(oe.current).length > 0 && ke(0);
        return;
      }
      if (ge === F.current && Se === "ArrowDown") {
        he.preventDefault(), ye(
          F.current
        ).length > 0 && Pe(0);
        return;
      }
      if (Ge) {
        const $e = ye(oe.current);
        if ($e.length) {
          he.preventDefault();
          const Ue = Se === "ArrowDown" ? 1 : -1, ht = (ee.contentIndex + Ue + $e.length) % $e.length;
          ke(ht);
        }
      } else if (ze) {
        const $e = ye(F.current);
        if ($e.length) {
          he.preventDefault();
          const Ue = Se === "ArrowDown" ? 1 : -1, ht = (ee.secondaryIndex + Ue + $e.length) % $e.length;
          Pe(ht);
        }
      }
    }
  }, De = !!fe && (O === "list" || O === "cards"), We = q.useMemo(() => ce === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : ce === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : ce === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: ce.mobile !== void 0 ? ce.mobile : !0,
    tablet: ce.tablet || !1,
    desktop: ce.desktop || !1
  }, [ce]), Et = j && ne("medium") && !ne("xlarge"), bt = j && ne("xlarge"), ut = !!l, Xe = O === "three-column", [Ze, xn] = q.useState(!1);
  q.useEffect(() => {
    Xe && Ze && xn(!1);
  }, [Xe, Ze]), q.useEffect(() => {
    Ze && !Xe && (se("secondary"), _e(2), setTimeout(() => {
      F.current?.focus();
    }, 50));
  }, [Ze, Xe]), q.useEffect(() => {
    !Ze && !Xe && Z === "secondary" && (se("content"), _e(1), setTimeout(() => {
      oe.current?.focus();
    }, 50));
  }, [Ze, Xe, Z]);
  const Yr = !!fe && (De && We.mobile || !De && Et && We.tablet || !De && bt && We.desktop) || ut && !Xe, zl = `h${ve}`, qr = fe ? q.createElement(
    zl,
    {
      style: {
        marginLeft: De ? 32 : 0,
        marginRight: De ? 32 : 0
      }
    },
    fe.label
  ) : null, js = De ? "mobile" : Et ? "tablet" : "desktop", Wl = ut && !Xe && !Ze, Xr = De && We.mobile ? /* @__PURE__ */ n.jsx(
    _a,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => en(void 0, void 0)
    }
  ) : void 0, Kr = Wl ? /* @__PURE__ */ n.jsx(
    vi,
    {
      element: "button",
      text: h,
      onClick: () => {
        xn(!0);
      }
    }
  ) : void 0, Zr = !Xe && Ze ? /* @__PURE__ */ n.jsx(
    _a,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => xn(!1)
    }
  ) : void 0, Ol = q.useMemo(() => {
    if (!Yr || !fe) return null;
    if (le)
      return le({
        item: fe,
        detailActive: De,
        context: js,
        backLink: Xr,
        defaultHeading: qr
      });
    const he = fe && ue ? typeof ue == "function" ? ue(fe) : ue : null;
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
            Zr || Xr,
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
                  qr,
                  he && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: he })
                ]
              }
            )
          ]
        }
      ),
      Kr && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: Kr })
    ] });
  }, [
    Yr,
    fe,
    le,
    De,
    js,
    Xr,
    Zr,
    qr,
    Kr,
    ue
  ]);
  q.useEffect(() => {
    if (!b) return;
    const he = O === "three-column";
    let Se = !1;
    const ge = () => {
      Se || (Y.selectedId !== pe && Y.setSelectedId(pe), Y.drilledIn !== he && Y.setDrilledIn(he));
    };
    if (m && m > 0) {
      const Te = setTimeout(ge, m);
      return () => {
        Se = !0, clearTimeout(Te);
      };
    } else
      ge();
  }, [b, Y, pe, O, m]), q.useEffect(() => {
    if (!b) return;
    const he = () => {
      const Se = new URLSearchParams(window.location.search), ge = Se.get(C);
      Se.get(y), we(ge === null ? void 0 : ge);
    };
    return window.addEventListener("popstate", he), () => window.removeEventListener("popstate", he);
  }, [
    b,
    C,
    y,
    d,
    l
  ]);
  const Rn = q.useRef(0), yt = q.useRef(
    null
  ), en = q.useCallback(
    (he, Se) => {
      he !== pe && (r === void 0 && we(he), s?.(he, Se));
    },
    [r, s, pe]
  );
  q.useEffect(() => {
    if (!$ && De && oe.current) {
      const he = setTimeout(() => oe.current?.focus(), 30);
      return () => clearTimeout(he);
    }
  }, [De, pe, $]);
  const et = q.useRef(null), [Ve, bn] = q.useState(
    () => R === "first" ? 0 : -1
  );
  q.useEffect(() => {
    if (Ve < 0 || !et.current) return;
    const Se = Array.from(
      et.current.querySelectorAll("[data-nav-item]")
    )[Ve];
    if (Se) {
      document.activeElement !== Se && Se.focus(), Rn.current = Ve;
      const ge = t[Ve];
      N?.(
        ge ? f(ge) : void 0,
        ge,
        Ve
      );
    }
  }, [Ve, t, N, f]);
  const Ul = (he) => {
    const Se = p === "vertical" ? "ArrowDown" : "ArrowRight", ge = p === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (he.key === "ArrowRight" && p === "vertical") {
      he.preventDefault(), Ze ? (se("secondary"), setTimeout(() => {
        F.current?.focus();
      }, 10)) : (se("content"), setTimeout(() => {
        oe.current?.focus();
      }, 10));
      return;
    }
    if (he.key === Se)
      he.preventDefault(), bn((Te) => Math.min(t.length - 1, Te + 1));
    else if (he.key === ge)
      he.preventDefault(), bn((Te) => Math.max(0, Te - 1));
    else if (he.key === "Home")
      he.preventDefault(), bn(0);
    else if (he.key === "End")
      he.preventDefault(), bn(t.length - 1);
    else if (he.key === "Enter" || he.key === " ") {
      he.preventDefault();
      const Te = t[Ve];
      Te && !Te.disabled && en(f(Te), Te);
    } else if (he.key.length === 1 && /[a-z0-9]/i.test(he.key)) {
      yt.current || (yt.current = { buffer: "", last: 0 });
      const Te = Date.now(), Ge = 700, ze = he.key.toLowerCase();
      Te - yt.current.last > Ge ? yt.current.buffer = ze : yt.current.buffer += ze, yt.current.last = Te;
      let Oe = yt.current.buffer;
      const tn = Oe.split("").every((ht) => ht === Oe[0]), Ot = t.map(
        (ht) => String(ht.label || "").toLowerCase()
      );
      let Bn = 0;
      Ve >= 0 && (Bn = (Ve + 1) % t.length);
      let $e;
      const Ue = (ht, Ts) => {
        const Ds = t.length;
        for (let ea = 0; ea < Ds; ea++) {
          const ta = (Bn + ea) % Ds;
          if (!t[ta].disabled && Ot[ta].startsWith(ht))
            return ta;
        }
      };
      tn && Oe.length > 1 ? $e = Ue(Oe[0]) : ($e = Ue(Oe), $e === void 0 && Oe.length > 1 && ($e = Ue(Oe[Oe.length - 1]), $e !== void 0 && yt.current && (yt.current.buffer = Oe[Oe.length - 1]))), $e !== void 0 && bn($e);
    }
  }, Gl = q.useMemo(() => {
    if (H && (H === "url" || H === "both") && typeof window < "u") {
      const Se = new URLSearchParams(window.location.search).get(V);
      if (Se === "1") return !0;
      if (Se === "0") return !1;
    }
    if (H && (H === "localStorage" || H === "both") && typeof window < "u")
      try {
        const he = window.localStorage.getItem(te);
        if (he === "1") return !0;
        if (he === "0") return !1;
      } catch {
      }
    return v;
  }, [
    H,
    v,
    te,
    V
  ]), [ft, Vl] = q.useState(Gl);
  q.useEffect(() => {
    M?.(ft);
  }, [ft, M]);
  const Yl = q.useCallback(() => {
    z && k && Vl((he) => !he);
  }, [z, k]);
  q.useEffect(() => {
    if (H && !(typeof window > "u")) {
      if (H === "localStorage" || H === "both")
        try {
          window.localStorage.setItem(
            te,
            ft ? "1" : "0"
          );
        } catch {
        }
      if (H === "url" || H === "both") {
        const he = new URLSearchParams(window.location.search);
        he.set(V, ft ? "1" : "0");
        const Se = `${window.location.pathname}?${he.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Se);
      }
    }
  }, [
    ft,
    H,
    te,
    V
  ]);
  const ql = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    De ? "nhs-navigation-split-view--detail-active" : "",
    O === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    k && z && ft ? "nhs-navigation-split-view--nav-collapsed" : "",
    w
  ].filter(Boolean).join(" "), Jr = q.useRef(null);
  q.useEffect(() => {
    if (!L && Jr.current) {
      const he = fe ? `Selected ${fe.label}` : "Selection cleared";
      Jr.current.textContent = he;
    }
  }, [fe, L]), q.useEffect(() => {
    !De && pe == null && et.current && et.current.querySelectorAll("[data-nav-item]")[Rn.current]?.focus();
  }, [De, pe]);
  const At = O === "three-column", [Qr, Xl] = q.useState(!1);
  q.useEffect(() => {
    At && !Qr && Xl(!0);
  }, [At, Qr]);
  const Ns = q.useRef(At);
  q.useEffect(() => {
    Ns.current !== At && (I?.(At), Ns.current = At);
  }, [At, I]);
  const Kl = () => {
    if (O === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": pe ? String(pe) : void 0,
          children: [
            t.map((ge) => {
              const Te = f(ge), Ge = Te === pe;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Ge,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(Te),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Ge || void 0,
                      "data-disabled": ge.disabled || void 0,
                      disabled: ge.disabled,
                      onClick: () => !ge.disabled && en(Te, ge),
                      children: [
                        ge.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ge.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ge.label }),
                        ge.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ge.description }),
                        o?.(ge),
                        ge.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ge.badge })
                      ]
                    }
                  )
                },
                Te
              );
            }),
            t.length === 0 && !g && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: x || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const he = "nsv-nav-instructions", Se = q.useMemo(() => q.memo(
      ({
        item: ge,
        idx: Te,
        selected: Ge,
        focused: ze
      }) => {
        const Oe = f(ge), tn = ge.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: ze ? 0 : -1,
          onClick: () => {
            Rn.current = Te, en(Oe, ge);
          },
          onKeyDown: (Ot) => {
            (Ot.key === "Enter" || Ot.key === " ") && (Ot.preventDefault(), Rn.current = Te, en(Oe, ge));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Oe),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Ge,
            "aria-current": Ge ? "true" : void 0,
            "data-selected": Ge || void 0,
            "data-disabled": ge.disabled || void 0,
            ...tn,
            children: [
              ge.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ge.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ge.label }),
                ge.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ge.description }),
                o?.(ge)
              ] }),
              ge.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ge.badge })
            ]
          }
        );
      }
    ), [f, en, o]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: et,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ul,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": he,
          "aria-activedescendant": pe ? String(pe) : void 0,
          children: [
            t.map((ge, Te) => /* @__PURE__ */ n.jsx(
              Se,
              {
                item: ge,
                idx: Te,
                selected: f(ge) === pe,
                focused: Te === Ve || Ve === -1 && Te === 0 && R === "first",
                "data-just-selected": f(ge) === G ? "true" : void 0
              },
              f(ge)
            )),
            t.length === 0 && !g && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: x || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          id: he,
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
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: ae,
      className: ql,
      "aria-label": T?.rootLabel,
      "data-layout": O,
      onKeyDown: Re,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": De || void 0,
            style: { transform: De ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: Q,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": T?.navigationLabel || "Items",
                  "data-collapsed": ft || void 0,
                  tabIndex: 0,
                  children: [
                    k && z && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Yl,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": ft ? re : B,
                        title: ft ? re : B,
                        children: ft ? A || /* @__PURE__ */ n.jsx(ih, {}) : U || /* @__PURE__ */ n.jsx(oh, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Kl() }),
                    _ && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: _
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: oe,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": T?.contentLabel || "Content",
                  "data-has-selection": !!fe || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ze && !Xe ? "none" : void 0
                  },
                  children: [
                    Yr && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: Ol }),
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
              O === "three-column" && (!E || Qr) || Ze && !Xe ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: F,
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
                        Ze && !Xe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                                  Zr,
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
                        fe && J && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof J == "function" ? J(fe) : J
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
            ref: Jr,
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
            children: At ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
lh.displayName = "NavigationSplitView";
const _o = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), ch = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, u = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), g = r && e.childItems && e.childItems.length > 0, x = (w) => {
    g && (w.preventDefault(), a?.(e));
  }, T = g ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: x,
    onKeyDown: (w) => {
      (w.key === "Enter" || w.key === " ") && x(w), w.key === "Escape" && s && x(w);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: xe("nhsuk-product-roadmap__item", g && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": h,
      ...T,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          g && /* @__PURE__ */ n.jsx("span", { className: xe("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, dh = Ql(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: a = 2,
  className: s,
  ariaLabel: o = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: d = "overlay",
  ...c
}) => {
  const [u, h] = Ie(() => /* @__PURE__ */ new Set()), [g, x] = Ie(() => /* @__PURE__ */ new Set()), T = Fe(/* @__PURE__ */ new Set()), w = me((m) => u.has(m), [u]), f = me((m) => {
    h((E) => {
      const _ = new Set(E);
      return _.has(m.id) ? (_.delete(m.id), x((k) => {
        const v = new Set(k);
        return v.add(m.id), v;
      }), setTimeout(() => x((k) => {
        const v = new Set(k);
        return v.delete(m.id), v;
      }), 240), l?.(m.id, !1)) : (_.add(m.id), l?.(m.id, !0)), _;
    });
  }, [l]);
  ec(() => {
    if (d !== "inline" || !i) return;
    const m = [];
    if (u.forEach((v) => {
      T.current.has(v) || m.push(v);
    }), T.current = new Set(u), !m.length) return;
    const E = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, _ = m.map((v) => `.nhsuk-product-roadmap__inline-children[data-parent="${v}"] .nhsuk-product-roadmap__inline-child`).join(","), k = Array.from(document.querySelectorAll(_));
    if (k.length) {
      if (E) {
        k.forEach((v) => {
          v.style.opacity = "1", v.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((v) => {
        (v.gsap || v.default || v).to(k, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        k.forEach((v) => {
          v.style.opacity = "1", v.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, d, i]);
  const p = me(() => {
    u.size && h(/* @__PURE__ */ new Set());
  }, [u]), P = xe("nhsuk-product-roadmap", s), I = _o(r, 120, 1200, 400), D = _o(a, 1, 6, 2), R = Me(() => e.map((m) => /* @__PURE__ */ new Date(m + " 01")), [e]), $ = Me(() => {
    if (R.length === 0) {
      const _ = /* @__PURE__ */ new Date();
      return [_, _];
    }
    const m = new Date(R[0]), E = $n.offset(new Date(R[R.length - 1]), 1);
    return [m, E];
  }, [R]), L = Me(() => bs().domain($).range([0, R.length * I]), [$, R.length, I]), N = me((m) => {
    if (m.startDate) {
      const B = new Date(m.startDate), A = new Date(m.endDate ?? m.startDate);
      A < B && A.setTime(B.getTime());
      const U = L(B), H = $n.offset(new Date(A), 1);
      let te = L(H);
      Number.isFinite(te) || (te = U + I);
      const V = Math.max(I * 0.25, te - U), ce = U / I, ve = V / I;
      return { ...m, _pxLeft: U, _pxWidth: V, _startFraction: ce, _spanColumns: ve };
    }
    const E = m.date ?? 1, _ = m.dateOffset ?? 0, k = m.length ?? 1, v = m.partialLength ?? 1, M = E - 1 + _, re = k - 1 + v;
    return { ...m, _pxLeft: M * I, _pxWidth: re * I, _startFraction: M, _spanColumns: re };
  }, [L, I]), b = Me(() => t.map((m) => {
    const _ = m.roadmapItems.map((v) => {
      const M = !v.childItems && v.children ? { ...v, childItems: v.children } : { ...v };
      return N(M);
    }).sort((v, M) => v._pxLeft !== M._pxLeft ? v._pxLeft - M._pxLeft : M._pxWidth - v._pxWidth), k = [];
    return _.forEach((v) => {
      const M = v._pxLeft, re = v._pxLeft + v._pxWidth;
      let B = k.findIndex((A) => A <= M);
      B === -1 && (B = k.length, k.push(0)), k[B] = re, v.verticalPosition = B + 1;
    }), { ...m, roadmapItems: _, _laneCount: k.length };
  }), [t, N]), C = Me(() => b.map((m) => m._laneCount || 1), [b]), y = Me(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: P,
      style: { "--column-width": `${I}px`, gridTemplateColumns: y },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": b.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((m, E) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": E + 2, children: m }, `${m}-${E}`))
        ] }),
        b.map((m, E) => {
          const _ = E + 2, k = C[E];
          let v, M = 0, re = [];
          i && d === "inline" && (re = m.roadmapItems.filter((H) => w(H.id) && H.childItems && H.childItems.length).map((H) => ({ id: H.id, lane: H.verticalPosition || 1, count: H.childItems.length })).sort((H, te) => H.lane - te.lane), M = re.reduce((H, te) => H + te.count, 0));
          const B = k + M;
          v = `calc((${B} * var(--roadmap-item-block-height)) + (max(0, ${B} - 1) * var(--roadmap-row-gap)))`;
          const A = {};
          let U = 0;
          return re.forEach((H) => {
            U += H.count, A[H.lane + 1] = U;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": _, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: m.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: v }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: m.roadmapItems.map((H, te) => {
              const V = (H.verticalPosition || 1) - 1, ce = re.filter((J) => J.lane - 1 < V).reduce((J, ne) => J + ne.count, 0), ve = V + ce, le = w(H.id), ue = g.has(H.id);
              return /* @__PURE__ */ n.jsxs(st.Fragment, { children: [
                /* @__PURE__ */ n.jsx(ch, { item: H, maxLines: D, enableDrilldown: i, onExpand: f, isActive: le, topLaneIndex: ve, laneOffset: ce }),
                i && d === "inline" && (le || ue) && H.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": H.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${H.title} child tasks`, children: H.childItems.map((J, ne) => {
                  const j = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let S = H._pxLeft, z = H._pxWidth;
                  if (J.startDate) {
                    const Y = new Date(J.startDate);
                    let de = J.endDate ? new Date(J.endDate) : new Date(Y);
                    de < Y && (de = new Date(Y));
                    const we = new Date(de);
                    we.setDate(we.getDate() + 1);
                    const pe = L(Y);
                    let fe = L(we);
                    (!Number.isFinite(fe) || fe <= pe) && (fe = pe + 6), S = pe, z = Math.max(6, fe - pe);
                  }
                  const O = ve + 1 + ne;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: xe("nhsuk-product-roadmap__inline-child", J.status && `nhsuk-product-roadmap__inline-child--status-${J.status}`, !le && ue && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${S}px`, width: `${z}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${O})`, height: j, opacity: le ? 0 : void 0, transform: le ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: J.title })
                      ]
                    },
                    J.id ?? ne
                  );
                }) })
              ] }, H.id ?? te);
            }) }) })
          ] }, `${m.heading}-${E}`);
        }),
        i && d === "overlay" && u.size === 1 && (() => {
          const m = Array.from(u)[0], E = t.flatMap((_) => _.roadmapItems).find((_) => _.id === m);
          return !E || !E.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${E.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: E.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: p, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: E.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: E.childItems.map((_, k) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: _.title }),
                _.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: _.content })
              ] }, _.id ?? k)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: p, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
dh.displayName = "ProductRoadmap";
function wi(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = wi(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function or() {
  for (var e, t, r = 0, a = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = wi(e)) && (a && (a += " "), a += t);
  return a;
}
function Je(e) {
  return function() {
    return e;
  };
}
const $a = Math.PI, Ma = 2 * $a, Gt = 1e-6, uh = Ma - Gt;
function Si(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function fh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Si;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + a[s];
  };
}
class hh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Si : fh(t);
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
    let i = this._x1, l = this._y1, d = a - t, c = s - r, u = i - t, h = l - r, g = u * u + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (g > Gt) if (!(Math.abs(h * d - c * u) > Gt) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let x = a - i, T = s - l, w = d * d + c * c, f = x * x + T * T, p = Math.sqrt(w), P = Math.sqrt(g), I = o * Math.tan(($a - Math.acos((w + g - f) / (2 * p * P))) / 2), D = I / P, R = I / p;
      Math.abs(D - 1) > Gt && this._append`L${t + D * u},${r + D * h}`, this._append`A${o},${o},0,0,${+(h * x > u * T)},${this._x1 = t + R * d},${this._y1 = r + R * c}`;
    }
  }
  arc(t, r, a, s, o, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), d = a * Math.sin(s), c = t + l, u = r + d, h = 1 ^ i, g = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > Gt || Math.abs(this._y1 - u) > Gt) && this._append`L${c},${u}`, a && (g < 0 && (g = g % Ma + Ma), g > uh ? this._append`A${a},${a},0,1,${h},${t - l},${r - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = u}` : g > Gt && this._append`A${a},${a},0,${+(g >= $a)},${h},${this._x1 = t + a * Math.cos(o)},${this._y1 = r + a * Math.sin(o)}`);
  }
  rect(t, r, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function ki(e) {
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
  var r = Je(!0), a = null, s = Ni, o = null, i = ki(l);
  e = typeof e == "function" ? e : e === void 0 ? Ti : Je(e), t = typeof t == "function" ? t : t === void 0 ? Di : Je(t);
  function l(d) {
    var c, u = (d = Ci(d)).length, h, g = !1, x;
    for (a == null && (o = s(x = i())), c = 0; c <= u; ++c)
      !(c < u && r(h = d[c], c, d)) === g && ((g = !g) ? o.lineStart() : o.lineEnd()), g && o.point(+e(h, c, d), +t(h, c, d));
    if (x) return o = null, x + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Je(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Je(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Je(!!d), l) : r;
  }, l.curve = function(d) {
    return arguments.length ? (s = d, a != null && (o = s(a)), l) : s;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = o = null : o = s(a = d), l) : a;
  }, l;
}
function Ia(e, t, r) {
  var a = null, s = Je(!0), o = null, i = Ni, l = null, d = ki(c);
  e = typeof e == "function" ? e : e === void 0 ? Ti : Je(+e), t = typeof t == "function" ? t : Je(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Di : Je(+r);
  function c(h) {
    var g, x, T, w = (h = Ci(h)).length, f, p = !1, P, I = new Array(w), D = new Array(w);
    for (o == null && (l = i(P = d())), g = 0; g <= w; ++g) {
      if (!(g < w && s(f = h[g], g, h)) === p)
        if (p = !p)
          x = g, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), T = g - 1; T >= x; --T)
            l.point(I[T], D[T]);
          l.lineEnd(), l.areaEnd();
        }
      p && (I[g] = +e(f, g, h), D[g] = +t(f, g, h), l.point(a ? +a(f, g, h) : I[g], r ? +r(f, g, h) : D[g]));
    }
    if (P) return l = null, P + "" || null;
  }
  function u() {
    return $i().defined(s).curve(i).context(o);
  }
  return c.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Je(+h), a = null, c) : e;
  }, c.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Je(+h), c) : e;
  }, c.x1 = function(h) {
    return arguments.length ? (a = h == null ? null : typeof h == "function" ? h : Je(+h), c) : a;
  }, c.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Je(+h), r = null, c) : t;
  }, c.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Je(+h), c) : t;
  }, c.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : Je(+h), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(r);
  }, c.lineX1 = function() {
    return u().x(a).y(t);
  }, c.defined = function(h) {
    return arguments.length ? (s = typeof h == "function" ? h : Je(!!h), c) : s;
  }, c.curve = function(h) {
    return arguments.length ? (i = h, o != null && (l = i(o)), c) : i;
  }, c.context = function(h) {
    return arguments.length ? (h == null ? o = l = null : l = i(o = h), c) : o;
  }, c;
}
function wo(e) {
  return e < 0 ? -1 : 1;
}
function So(e, t, r) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (r - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (wo(o) + wo(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function ko(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function fa(e, t, r) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * r, o, i);
}
function ir(e) {
  this._context = e;
}
ir.prototype = {
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
        fa(this, this._t0, ko(this, this._t0));
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
          this._point = 3, fa(this, ko(this, r = So(this, e, t)), r);
          break;
        default:
          fa(this, this._t0, r = So(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(ir.prototype).point = function(e, t) {
  ir.prototype.point.call(this, t, e);
};
function lr(e) {
  return new ir(e);
}
function ph(e, t, r) {
  const a = Wo(e, t);
  return bs().domain(a).range(r);
}
function Co(e, t, r) {
  const [a, s] = Wo(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return er().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = s - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return er().domain([i, l]).nice().range(r);
}
function La(e, t, r, a) {
  const s = $i().x(t).y(r);
  return a?.smooth !== !1 && s.curve(lr), s(e) ?? "";
}
function mh(e = {}) {
  const t = q.useRef(null), r = q.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = q.useState({ width: 0, height: 0 });
  q.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: u, height: h } = c.contentRect;
        s({ width: u, height: h });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - r.left - r.right), i = Math.max(0, a.height - r.top - r.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: r, ref: t };
}
const Mi = q.createContext(null);
function Wt() {
  return q.useContext(Mi);
}
const gh = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = mh(t), d = { height: e, position: "relative" };
  return r !== void 0 && (d.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: d, role: o, "aria-label": i, children: /* @__PURE__ */ n.jsx(Mi.Provider, { value: l, children: s }) });
}, vs = q.createContext(null), Qt = () => q.useContext(vs), xh = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: d,
  yPadding: c
}) => {
  const u = Wt(), h = t ?? u?.innerWidth ?? 0, g = r ?? u?.innerHeight ?? 0, x = q.useMemo(() => e.flatMap((D) => D.data), [e]), T = q.useCallback((D) => {
    if (a) return a(D);
    const R = D.x;
    return R instanceof Date ? R : new Date(R);
  }, [a]), w = d ?? 6, f = c ?? 6, p = q.useMemo(() => ph(x, T, [w, Math.max(0, h - w)]), [x, T, h, w]), P = q.useMemo(() => {
    if (l) {
      const D = Co([], (R) => R.y, [Math.max(0, g - f), f]);
      return D.domain(l), D;
    }
    return Co(x, (D) => D.y, [Math.max(0, g - f), f]);
  }, [x, g, l]), I = q.useMemo(() => ({
    xScale: p,
    yScale: P,
    getXTicks: (D = o) => p.ticks(D),
    getYTicks: (D = i) => P.ticks(D)
  }), [p, P, o, i]);
  return /* @__PURE__ */ n.jsx(vs.Provider, { value: I, children: s });
}, jo = ({
  type: e,
  scale: t,
  tickCount: r,
  tickValues: a,
  formatTick: s,
  label: o,
  offset: i,
  className: l,
  minLabelSpacing: d,
  maxTickLabelLength: c,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: h = 0,
  allowLabelWrap: g = !0,
  tickFormatPreset: x
}) => {
  const T = Qt(), w = Wt(), f = t || (e === "x" ? T?.xScale : T?.yScale), p = r ?? (e === "x" ? 6 : 5), P = typeof s == "function", I = q.useMemo(() => {
    if (P || !x) return;
    const $ = (L) => new Intl.DateTimeFormat(void 0, L);
    switch (x) {
      case "dayShortMonth":
        return (L) => {
          const N = L instanceof Date ? L : new Date(L);
          return `${N.getDate()}
${$({ month: "short" }).format(N)}`;
        };
      case "dayShortMonthYear":
        return (L) => {
          const N = L instanceof Date ? L : new Date(L);
          return `${N.getDate()}
${$({ month: "short" }).format(N)} ${N.getFullYear()}`;
        };
      case "shortMonth":
        return (L) => {
          const N = L instanceof Date ? L : new Date(L);
          return $({ month: "short" }).format(N);
        };
      case "shortMonthYear":
        return (L) => {
          const N = L instanceof Date ? L : new Date(L);
          return `${$({ month: "short" }).format(N)} ${N.getFullYear()}`;
        };
      case "hourMinute":
        return (L) => {
          const N = L instanceof Date ? L : new Date(L);
          return $({ hour: "2-digit", minute: "2-digit" }).format(N);
        };
      default:
        return;
    }
  }, [P, x]);
  let D = P ? s : I || (($) => String($));
  const R = q.useMemo(() => a && Array.isArray(a) ? a : f ? typeof f.ticks == "function" ? f.ticks(p) : f.domain ? f.domain() : [] : [], [f, p, a]);
  if (e === "x" && !P && !x && R.length && R.every(($) => $ instanceof Date)) {
    const $ = R[0], L = R[R.length - 1], N = L.getTime() - $.getTime(), b = 24 * 3600 * 1e3, C = 365 * b, y = $.getFullYear() === L.getFullYear(), m = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (N < 2 * b) {
      const E = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      D = (_) => E.format(_);
    } else if (N < 32 * b)
      D = (E) => {
        const _ = E;
        return `${_.getDate()} ${m.format(_)}`;
      };
    else if (N < C && y)
      D = (E) => m.format(E);
    else if (N < 2 * C) {
      const E = /* @__PURE__ */ new Set();
      D = (_) => {
        const k = _, v = k.getMonth();
        return E.has(v) || E.add(v), `${m.format(k)} ${k.getFullYear()}`;
      };
    } else
      D = (E) => String(E.getFullYear());
  }
  if (!f || !w) return null;
  if (e === "x") {
    const $ = i ?? w.innerHeight, L = typeof f.bandwidth == "function", N = L ? f.bandwidth() : 0, b = (m) => {
      const E = f(m);
      return L ? E + N / 2 : E;
    };
    let C = d ?? 0;
    if (u && d == null) {
      const m = R.map((_) => D(_).replace(/\n.*/g, "")), E = m.length ? m.reduce((_, k) => _ + k.length, 0) / m.length : 0;
      C = Math.max(12, Math.round(E * 6 + 4));
    }
    const y = q.useMemo(() => {
      if (a && Array.isArray(a) || C <= 0) return R;
      const m = [];
      let E = -1 / 0;
      for (const _ of R) {
        const k = b(_);
        k - E >= C && (m.push(_), E = k);
      }
      return m;
    }, [R, f, C, a, L, N]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${$})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: w.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      y.map((m, E) => {
        const _ = D(m), k = c && _.length > c ? _.slice(0, Math.max(1, c - 1)) + "…" : _, v = g ? k.split(/\n/) : [k.replace(/\n/g, " ")], M = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${b(m)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: M, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            v.map((re, B) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: B === 0 ? 0 : "1.1em", children: re }, B)),
            k !== _ && /* @__PURE__ */ n.jsx("title", { children: _ })
          ] })
        ] }, m?.toString?.() || E);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    R.map(($, L) => {
      const N = D($), b = c && N.length > c ? N.slice(0, Math.max(1, c - 1)) + "…" : N, C = g ? b.split(/\n/) : [b.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${f($)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          C.map((y, m) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: m === 0 ? 0 : "1.1em", children: y }, m)),
          b !== N && /* @__PURE__ */ n.jsx("title", { children: N })
        ] })
      ] }, $?.toString?.() || L);
    }),
    o && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -w.innerHeight / 2, y: -w.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, bh = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = Qt(), i = Wt();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { x1: 0, x2: i.innerWidth, y1: o.yScale(d), y2: o.yScale(d), stroke: r, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { y1: 0, y2: i.innerHeight, x1: o.xScale(d), x2: o.xScale(d), stroke: r, strokeDasharray: a }, c))
  ] });
}, yh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, En = {
  color: yh
}, vh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Hr = {
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
let ha = null, pa = null, ma = null, Ii = "optimized";
function wh() {
  const e = { color: { ...Hr.color, ...En.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
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
    return _h;
  }
}
function Sh() {
  return ha || (ha = wh()), ha;
}
function kh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ga(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Ch(e, t, r) {
  const a = ga(e), s = ga(t), o = ga(r), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, d = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function jh(e, t, r) {
  let i = e / 95.047, l = t / 100, d = r / 108.883;
  const c = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function Li(e) {
  const t = kh(e);
  if (!t) return null;
  const r = Ch(t.r, t.g, t.b);
  return jh(r.x, r.y, r.z);
}
function No(e, t) {
  const r = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(r * r + a * a + s * s);
}
function Nh() {
  const e = Sh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Li(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let h = 0; h < e.length; h++) i !== h && t[h] && (d += No(l, t[h]), c++);
    const u = d / Math.max(1, c);
    u > a && (a = u, r = i);
  }
  const s = new Set(e.map((i, l) => l)), o = [];
  for (o.push(r), s.delete(r); s.size; ) {
    let i = Array.from(s)[0], l = -1;
    for (const d of s) {
      const c = t[d];
      if (!c) continue;
      let u = 1 / 0;
      for (const h of o) {
        const g = t[h];
        if (g) {
          const x = No(c, g);
          x < u && (u = x);
        }
      }
      u > l && (l = u, i = d);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function Th() {
  return pa || (pa = Nh()), pa;
}
function Dh(e, t, r) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - r / 200, i = (u) => {
    const h = u * u * u;
    return h > 8856e-6 ? h : (u - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, d = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: d, Z: c };
}
function $h(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, s = e * -0.9689 + t * 1.8758 + r * 0.0415, o = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function Mh(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Ih(e, t) {
  const r = Li(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: s, Y: o, Z: i } = Dh(a, r.a, r.b), l = $h(s, o, i);
  return Mh(l.r, l.g, l.b);
}
function Lh() {
  const e = Th(), r = [12, -12, 24, -24].map((s) => e.map((o) => Ih(o, s))), a = [...e];
  return r.forEach((s) => a.push(...s)), a;
}
function Fh() {
  return (!ma || Ph()) && (ma = Lh(), Fi = Ii), ma;
}
let Fi = null;
function Ph() {
  return Fi !== Ii;
}
function gt(e) {
  const t = Fh();
  return t[e % t.length];
}
let un = null, Mn = null, In = null, Ln = null;
function Eh() {
  const e = En?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    un = [];
    for (let o = 1; o <= 12; o++) {
      const i = t[String(o)]?.$value || t[String(o)]?.value;
      un.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    Mn = {}, Object.keys(r).forEach((o) => {
      const i = r[o]?.$value || r[o]?.value;
      typeof i == "string" && (Mn[o] = i);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    Ln = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (Ln[o] = i);
    }), In = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (In[o] = i);
    });
  }
}
function zr() {
  (!un || !Mn || !In || !Ln) && Eh();
}
function Kt(e) {
  return zr(), un ? un[e % un.length] : "#212b32";
}
function Ah(e) {
  return zr(), Mn ? Mn[e] : void 0;
}
function cr(e, t) {
  return Ah(e) || Kt(t);
}
const Fa = ["low", "moderate", "high", "critical"];
let xa = null;
function Rh() {
  const e = { color: { ...Hr.color, ...En.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Fa.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (r[a] = s);
  }), r;
}
function Pi() {
  return xa || (xa = Rh()), xa;
}
function Bh(e) {
  return Pi()[e.toLowerCase()];
}
function Hh(e, t) {
  return Bh(e) || Pi()[Fa[t % Fa.length]] || gt(t);
}
function zh(e) {
  return zr(), In ? In[e] : void 0;
}
function Wh(e, t) {
  return zh(e) || Kt(t);
}
const Pa = ["trust", "ambulance", "icb", "region"];
let ba = null;
function Oh() {
  const e = { color: { ...Hr.color, ...En.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Pa.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (r[a] = s);
  }), r;
}
function Ei() {
  return ba || (ba = Oh()), ba;
}
function Uh(e) {
  return Ei()[e.toLowerCase()];
}
function Gh(e, t) {
  return Uh(e) || Ei()[Pa[t % Pa.length]] || gt(t);
}
function Vh(e) {
  return zr(), Ln ? Ln[e] : void 0;
}
function Yh(e, t) {
  return Vh(e) || Kt(t);
}
let ya = null;
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
  const e = { color: { ...Hr.color, ...En.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return qh.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? r[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function Zh() {
  return ya || (ya = Kh()), ya;
}
function Jh(e) {
  return Zh()[Xh(e)];
}
function fn(e, t) {
  return Jh(e) || gt(t);
}
const Ai = q.createContext(null), An = () => q.useContext(Ai), Qx = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: a
}) => {
  const [s, o] = q.useState(() => new Set(e)), i = r !== void 0, l = q.useMemo(() => i ? new Set(r) : s, [i, r, s]), d = q.useCallback((u) => {
    i || o(new Set(u)), a?.(Array.from(u));
  }, [i, a]), c = q.useMemo(() => ({
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
  return /* @__PURE__ */ n.jsx(Ai.Provider, { value: c, children: t });
}, Ri = q.createContext(null), Pt = () => q.useContext(Ri), Qh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = Qt(), s = An(), [o, i] = q.useState(null), l = q.useRef(/* @__PURE__ */ new Map()), [d, c] = q.useState([]), u = q.useCallback(
    (L, N) => {
      l.current.set(L, N);
    },
    []
  ), h = q.useCallback((L) => {
    l.current.delete(L);
  }, []), g = q.useCallback(
    (L, N) => {
      if (!a) return;
      const { xScale: b, yScale: C } = a;
      let y = null, m = 1 / 0;
      l.current.forEach((E, _) => {
        E.forEach((k, v) => {
          const M = b(k.x), re = C(k.y), B = M - L, A = re - N, U = Math.sqrt(B * B + A * A);
          U < m && (m = U, y = {
            seriesId: _,
            index: v,
            x: k.x,
            y: k.y,
            clientX: M,
            clientY: re
          });
        });
      }), y && m <= t ? i(y) : i(null);
    },
    [a, t]
  ), x = q.useCallback(() => i(null), []);
  q.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: L, yScale: N } = a, b = [];
    l.current.forEach((C, y) => {
      C.forEach((m, E) => {
        (o.x instanceof Date && m.x instanceof Date ? m.x.getTime() === o.x.getTime() : m.x === o.x) && b.push({
          seriesId: y,
          index: E,
          x: m.x,
          y: m.y,
          clientX: L(m.x),
          clientY: N(m.y)
        });
      });
    }), b.sort((C, y) => C.seriesId.localeCompare(y.seriesId)), c(b);
  }, [o, a]);
  const T = q.useCallback(
    (L) => {
      if (!o) return;
      const N = l.current.get(o.seriesId);
      if (!N) return;
      let b = o.index + L;
      if (b < 0 || b >= N.length) {
        if (!r) return;
        b = (b + N.length) % N.length;
      }
      const C = N[b];
      if (!a) return;
      const { xScale: y, yScale: m } = a;
      i({
        seriesId: o.seriesId,
        index: b,
        x: C.x,
        y: C.y,
        clientX: y(C.x),
        clientY: m(C.y)
      });
    },
    [o, a, r]
  ), w = q.useCallback(
    (L) => {
      let N = Array.from(l.current.keys());
      if (s && (N = N.filter((M) => !s.isHidden(M))), N.length === 0) return;
      if (!o) {
        const M = N[0], re = l.current.get(M);
        if (!re || !a) return;
        const { xScale: B, yScale: A } = a, U = re[0];
        i({
          seriesId: M,
          index: 0,
          x: U.x,
          y: U.y,
          clientX: B(U.x),
          clientY: A(U.y)
        });
        return;
      }
      const b = N.indexOf(o.seriesId);
      if (b === -1) return;
      let C = b + L;
      if (C < 0 || C >= N.length) {
        if (!r) return;
        C = (C + N.length) % N.length;
      }
      const y = N[C], m = l.current.get(y);
      if (!m || !a) return;
      const E = Math.min(o.index, m.length - 1), _ = m[E], { xScale: k, yScale: v } = a;
      i({
        seriesId: y,
        index: E,
        x: _.x,
        y: _.y,
        clientX: k(_.x),
        clientY: v(_.y)
      });
    },
    [o, a, r, s]
  ), f = q.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (s && (L = L.filter((E) => !s.isHidden(E))), L.length === 0) return;
    const N = o ? o.seriesId : L[0], b = l.current.get(N);
    if (!b || b.length === 0 || !a) return;
    const C = b[0], { xScale: y, yScale: m } = a;
    i({
      seriesId: N,
      index: 0,
      x: C.x,
      y: C.y,
      clientX: y(C.x),
      clientY: m(C.y)
    });
  }, [o, a, s]), p = q.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (s && (L = L.filter((_) => !s.isHidden(_))), L.length === 0) return;
    const N = o ? o.seriesId : L[0], b = l.current.get(N);
    if (!b || b.length === 0 || !a) return;
    const C = b.length - 1, y = b[C], { xScale: m, yScale: E } = a;
    i({
      seriesId: N,
      index: C,
      x: y.x,
      y: y.y,
      clientX: m(y.x),
      clientY: E(y.y)
    });
  }, [o, a, s]), P = q.useCallback(
    () => T(1),
    [T]
  ), I = q.useCallback(
    () => T(-1),
    [T]
  ), D = q.useCallback(
    () => w(1),
    [w]
  ), R = q.useCallback(
    () => w(-1),
    [w]
  ), $ = q.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: d,
      focusNearest: g,
      clear: x,
      registerSeries: u,
      unregisterSeries: h,
      focusNextPoint: P,
      focusPrevPoint: I,
      focusNextSeries: D,
      focusPrevSeries: R,
      focusFirstPoint: f,
      focusLastPoint: p
    }),
    [
      o,
      d,
      g,
      x,
      u,
      h,
      P,
      I,
      D,
      R,
      f,
      p
    ]
  );
  return /* @__PURE__ */ n.jsx(Ri.Provider, { value: $, children: e });
}, ep = ({
  series: e,
  seriesIndex: t,
  palette: r,
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
  const g = Qt();
  if (!g) return null;
  const { xScale: x, yScale: T } = g, f = An()?.isHidden(e.id) ?? !1, p = f && l === "fade";
  if (f && l === "remove")
    return null;
  const P = Pt();
  q.useEffect(() => {
    if (!P) return;
    const N = e.data.map((b) => ({ x: i(b), y: b.y }));
    return P.registerSeries(e.id, N), () => P.unregisterSeries(e.id);
  }, [P, e.id, e.data, i]);
  const I = q.useMemo(
    () => La(
      e.data,
      (N) => x(i(N)),
      (N) => T(N.y),
      { smooth: c }
    ),
    [e.data, x, T, i, c]
  ), D = q.useMemo(() => {
    if (!e.data.length) return "";
    const [N] = T.domain(), b = Ia().x((C) => x(i(C))).y0(() => T(N)).y1((C) => T(C.y));
    return c && b.curve(lr), b(e.data) || "";
  }, [e.data, x, T, i, c]), R = h && h[t], $ = e.color || R || (r === "region" ? fn(e.id, t) : gt(t)), L = r === "region" ? cr(e.id, t) : Kt(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: D,
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
            stroke: $,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((N, b) => {
          const C = x(i(N)), y = T(N.y), m = s ? 0 : -1, E = !p && (s && b === o || P?.focused?.seriesId === e.id && P.focused.index === b), _ = () => {
            P && !p && P.setFocused({
              seriesId: e.id,
              index: b,
              x: i(N),
              y: N.y,
              clientX: C,
              clientY: y
            });
          }, k = () => {
            P && P.focused?.seriesId === e.id && P.focused.index === b && P.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: C,
              cy: y,
              r: E ? 5 : 3.5,
              stroke: E ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L,
              strokeWidth: E ? 2 : 1,
              fill: E ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : $,
              className: "fdp-line-point",
              tabIndex: p ? -1 : m,
              "aria-label": `${e.label || e.id} ${i(N).toDateString()} value ${N.y}`,
              "data-series": e.id,
              "data-index": b,
              onMouseEnter: _,
              onFocus: _,
              onMouseLeave: k,
              onBlur: k
            },
            b
          );
        })
      ]
    }
  );
}, tp = ({ polite: e = !0, format: t }) => {
  const r = Pt(), [a, s] = q.useState(""), o = q.useRef("");
  return q.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
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
function np(e, t, r, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${r}`;
}
const eb = () => {
  const e = Pt(), t = Wt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(r.clientX, 0), s), l = Math.min(Math.max(r.clientY, 0), o), d = i + 8, c = l - 8, u = a.length > 1, h = r.x instanceof Date ? r.x.toDateString() : String(r.x), g = u ? h : `${h} • ${r.y}`, x = /\d+$/.exec(r.seriesId || ""), T = x ? parseInt(x[0], 10) - 1 : 0, w = gt(T >= 0 ? T : 0) || "#005eb8", f = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: f, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: f, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: w, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const P = a.map((L) => `${L.seriesId}: ${L.y}`), I = [g, ...P], D = I.reduce((L, N) => Math.max(L, N.length), 0), R = Math.max(90, D * 6.2 + 16), $ = 16 * I.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: d, y: c - $, rx: 4, ry: 4, width: R, height: $, fill: "#212b32", opacity: 0.92 }),
        I.map((L, N) => /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - $ + 6 + 16 * (N + 0.7), fill: "#fff", fontSize: 12, children: L }, N))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, g.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: g })
    ] })
  ] });
}, tb = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: o,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: d
}) => {
  const c = An(), u = !!(c && !a && !l && o === void 0), h = a || u, g = e || [], x = o !== void 0, [T, w] = q.useState(new Set(i)), f = x ? new Set(o) : T, [p, P] = q.useState(""), I = (D) => {
    if (u && c) {
      const m = c.isHidden(D);
      c.toggle(D);
      const _ = g.find((v) => v.id === D)?.label || D, k = d ? d(D, m, _) : `${_} ${m ? "shown" : "hidden"}`;
      P(k);
      return;
    }
    if (!h) return;
    const R = new Set(f), $ = R.has(D);
    $ ? R.delete(D) : R.add(D), x || w(R);
    const L = g.filter((m) => !R.has(m.id)).map((m) => m.id), N = Array.from(R);
    l?.(L, N);
    const C = g.find((m) => m.id === D)?.label || D, y = d ? d(D, $, C) : `${C} ${$ ? "shown" : "hidden"}`;
    P(y);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: g.map((D, R) => {
      const $ = D.palette || t, L = D.color || ($ === "region" ? fn(D.id, R) : $ === "severity" ? Hh(D.id, R) : $ === "org-level" ? Gh(D.id, R) : gt(R));
      let N = D.stroke || ($ === "region" ? cr(D.id, R) : $ === "severity" ? Wh(D.id, R) : $ === "org-level" ? Yh(D.id, R) : Kt(R));
      if (s && N) {
        const y = N.trim().toLowerCase();
        (y === "#fff" || y === "#ffffff" || y === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(y)) && (N = "#212b32");
      }
      const b = u && c ? c.isHidden(D.id) : f.has(D.id), C = h ? {
        "aria-pressed": !b,
        "aria-label": `${D.label} (${b ? "show" : "hide"})`,
        onClick: () => I(D.id)
      } : { "aria-label": D.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${b ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: L,
              backgroundImage: D.patternDataUrl ? `url(${D.patternDataUrl})` : void 0,
              backgroundSize: D.patternDataUrl ? "auto" : void 0,
              borderColor: N
            },
            ...C
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: D.label })
      ] }, D.id);
    }) }),
    h && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: p })
  ] });
}, nb = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: a,
  areaOnly: s = !1,
  visibilityMode: o = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: d,
  gradientFill: c = !0,
  colors: u
}) => {
  const h = Qt();
  if (!h) return null;
  const { xScale: g, yScale: x } = h, w = An()?.isHidden(e.id) ?? !1, f = w && o === "fade";
  if (w && o === "remove") return null;
  const p = Pt();
  q.useEffect(() => {
    if (!p) return;
    const L = e.data.map((N) => ({ x: a(N), y: N.y }));
    return p.registerSeries(e.id, L), () => p.unregisterSeries(e.id);
  }, [p, e.id, e.data, a]);
  const P = u && u[t], I = e.color || P || (r === "region" ? fn(e.id, t) : gt(t)), D = q.useMemo(() => d && d.length === e.data.length ? La(
    e.data,
    (L) => g(a(L)),
    (L) => {
      const N = e.data.indexOf(L);
      return x(d[N].y1);
    },
    { smooth: l }
  ) : La(
    e.data,
    (L) => g(a(L)),
    (L) => x(L.y),
    { smooth: l }
  ), [e.data, d, g, x, a, l]), R = q.useMemo(() => {
    if (d && d.length === e.data.length) {
      const y = Ia().x((m) => g(a(m))).y0((m, E) => x(d[E].y0)).y1((m, E) => x(d[E].y1));
      return l && y.curve(lr), y(e.data) || "";
    }
    const [L, N] = x.domain();
    let b = i;
    b < L ? b = L : b > N && (b = N);
    const C = Ia().x((y) => g(a(y))).y0(() => x(b)).y1((y) => x(y.y));
    return l && C.curve(lr), C(e.data) || "";
  }, [e.data, d, g, x, a, i, l]), $ = q.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: f ? 0.25 : 1,
      "aria-hidden": f ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: $, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: I, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: I, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: R,
            fill: c ? `url(#${$})` : I,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ n.jsx("path", { d: D, fill: "none", stroke: I, strokeWidth: 1 })
      ]
    }
  );
}, rb = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
  palette: a,
  parseX: s,
  focusable: o = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: d,
  adaptive: c = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: h = "remove",
  colorMode: g = "series",
  allSeries: x,
  stacked: T,
  gapRatio: w = 0.15,
  minBarWidth: f,
  gradientFill: p = !0,
  gradientStrokeMatch: P = !0,
  opacity: I = 1,
  fadedOpacity: D = 0.25,
  flatFillOpacity: R = 1,
  colors: $
}) => {
  const L = Math.max(0, w), N = Qt(), b = Wt();
  if (!N || !b) return null;
  const { xScale: C, yScale: y } = N, E = An()?.isHidden(e.id) ?? !1, _ = E && h === "fade";
  if (E && h === "remove") return null;
  const k = Pt();
  q.useEffect(() => {
    if (!k) return;
    const J = e.data.map((ne) => ({ x: s(ne), y: ne.y }));
    return k.registerSeries(e.id, J), () => k.unregisterSeries(e.id);
  }, [k, e.id, e.data, s]);
  const v = typeof C.bandwidth == "function", M = v ? C.bandwidth() : void 0, re = q.useMemo(() => {
    if (M != null) return M;
    const J = x && x.length ? x : [e], ne = [];
    J.forEach((X) => {
      X.data.forEach((O) => {
        const Y = C(s(O));
        Number.isFinite(Y) && ne.push(Y);
      });
    });
    const j = ne.sort((X, O) => X - O);
    if (j.length <= 1) return 40;
    const S = [];
    for (let X = 1; X < j.length; X++)
      S.push(j[X] - j[X - 1]);
    return S.sort((X, O) => X - O), (S[Math.floor(S.length / 2)] || 40) * i;
  }, [e.data, x, C, s, i, M]), { basePerBar: B } = q.useMemo(() => {
    if (v) {
      const j = re, S = Math.max(
        1,
        (j - l * (r - 1)) / r
      ), z = e.barWidth ?? d;
      let X = z ? Math.min(z, j) : S;
      if (c) {
        const O = j * Math.min(1, Math.max(0.05, u)), Y = Math.max(
          1,
          (O - l * (r - 1)) / r
        );
        X = z ? Math.min(X, Y) : Y;
      }
      return { basePerBar: X };
    }
    const J = e.barWidth ?? d, ne = Math.max(
      1,
      (re - l * (r - 1)) / r
    );
    if (c) {
      const j = x && x.length ? x : [e], S = [];
      j.forEach(
        (we) => we.data.forEach((pe) => {
          const fe = C(s(pe));
          Number.isFinite(fe) && S.push(fe);
        })
      ), S.sort((we, pe) => we - pe);
      const z = [];
      for (let we = 1; we < S.length; we++)
        z.push(S[we] - S[we - 1]);
      z.sort((we, pe) => we - pe);
      const O = (z[Math.floor(z.length / 2)] || re) * Math.min(1, Math.max(0.05, u)), Y = Math.max(
        1,
        (O - l * (r - 1)) / r
      );
      return { basePerBar: J ? Math.min(J, Y) : Y };
    }
    return J ? { basePerBar: Math.min(J, ne) } : { basePerBar: ne };
  }, [
    v,
    re,
    l,
    r,
    d,
    e.barWidth,
    c,
    u,
    x,
    C,
    s
  ]), A = q.useMemo(() => {
    if (v) return [];
    const J = [];
    return (x && x.length ? x : [e]).forEach(
      (j) => j.data.forEach((S) => {
        const z = C(s(S));
        Number.isFinite(z) && J.push(z);
      })
    ), J.sort((j, S) => j - S), Array.from(new Set(J));
  }, [v, x, e, C, s]), U = q.useMemo(() => {
    if (v)
      return [];
    if (!A.length) return [];
    if (A.length === 1)
      return [
        { center: A[0], left: 0, right: b.innerWidth }
      ];
    const J = [];
    for (let ne = 0; ne < A.length; ne++) {
      const j = A[ne], S = ne === 0 ? 0 : (A[ne - 1] + j) / 2, z = ne === A.length - 1 ? b.innerWidth : (j + A[ne + 1]) / 2;
      J.push({
        center: j,
        left: Math.max(0, S),
        right: Math.min(b.innerWidth, z)
      });
    }
    return J;
  }, [v, A, b.innerWidth]), H = q.useMemo(() => {
    if (v || !U.length)
      return;
    const J = Math.min(1, Math.max(0.05, i)), ne = U.map((O) => Math.max(2, O.right - O.left)), j = ne.map(
      (O) => Math.max(2, Math.min(O - 1, O * J))
    );
    let S = Math.min(...j);
    if (f)
      if (r <= 1) {
        const O = Math.min(...ne.map((Y) => Y - 1));
        O >= f && S < f && (S = Math.min(O, f));
      } else {
        const O = Math.min(...ne.map((de) => de - 1)), Y = f * r + (r - 1) * (f * L);
        Y <= O && S < Y && (S = Y);
      }
    if (r <= 1)
      return f && S < f && ne.every((Y) => Y >= f) ? { groupWidth: f, barWidth: f } : { groupWidth: S, barWidth: S };
    let z = S / (r + (r - 1) * L);
    return z < 1 && (z = 1), f && z < f && f * r + (r - 1) * (f * L) <= S && (z = f), { groupWidth: z * r + (r - 1) * (z * L), barWidth: z };
  }, [
    v,
    U,
    i,
    r,
    L,
    f
  ]), te = $ && $[t] ? $[t] : void 0, V = e.color || te || (a === "region" ? fn(e.id, t) : gt(t)), ce = a === "region" ? cr(e.id, t) : Kt(t), ve = P && (e.color || te) ? V : ce, le = Number.isFinite(y(0)) ? y(0) : y.range()[0], ue = q.useId();
  return T && T.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: _ ? D : I,
      "aria-hidden": _ ? !0 : void 0,
      children: [
        p && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: ue,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: V, stopOpacity: 0.3 }),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: V,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: V,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((J, ne) => {
          const j = s(J), S = C(v ? J.x : j);
          let z, X;
          if (v)
            z = re, X = S;
          else {
            const ae = U.find(
              (oe) => Math.abs(oe.center - S) < 0.5
            );
            if (!ae || !H)
              z = B, X = S - B / 2;
            else {
              const { groupWidth: oe } = H;
              z = oe;
              let F = S - oe / 2;
              F < ae.left && (F = ae.left), F + oe > ae.right && (F = Math.max(ae.left, ae.right - oe)), X = F;
            }
          }
          const O = T[ne], Y = y(O.y0), de = y(O.y1), we = Math.min(Y, de), pe = Math.abs(de - Y) || 1;
          if (!v && f && z < f) {
            const ae = U.find(
              (oe) => Math.abs(oe.center - S) < 0.5
            );
            if (ae) {
              const oe = Math.max(2, ae.right - ae.left - 1), F = Math.min(oe, f);
              F > z && (z = F, X = Math.max(
                ae.left,
                Math.min(ae.right - z, S - z / 2)
              ));
            }
          }
          const fe = !_ && k?.focused?.seriesId === e.id && k.focused.index === ne, G = () => {
            !k || _ || k.setFocused({
              seriesId: e.id,
              index: ne,
              x: j,
              y: O.y1 - O.y0,
              clientX: X + z / 2,
              clientY: we
            });
          }, W = () => {
            k?.focused?.seriesId === e.id && k.focused.index === ne && k.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: X,
              y: we,
              width: z,
              height: pe,
              fill: p ? `url(#${ue})` : V,
              ...p ? {} : { fillOpacity: R },
              stroke: fe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : p && P ? V : void 0,
              strokeWidth: fe ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: _ || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${j instanceof Date ? j.toDateString() : j} value ${O.y1 - O.y0}`,
              onMouseEnter: G,
              onFocus: G,
              onMouseLeave: W,
              onBlur: W
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
      opacity: _ ? D : I,
      "aria-hidden": _ ? !0 : void 0,
      children: [
        p && /* @__PURE__ */ n.jsxs("defs", { children: [
          g === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: ue,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: V, stopOpacity: 0.3 }),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: V,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: V,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          g === "category" && e.data.map((J, ne) => {
            const S = $ && $[ne] || (a === "region" ? fn(String(J.x), ne) : gt(ne)), z = `${ue}-${ne}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: z,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: S, stopOpacity: 0.3 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "60%", stopColor: S, stopOpacity: 0.14 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: S, stopOpacity: 0.06 })
                ]
              },
              z
            );
          })
        ] }),
        e.data.map((J, ne) => {
          const j = s(J), S = C(v ? J.x : j);
          let z, X;
          if (v) {
            const ee = re;
            if (r <= 1)
              X = ee, z = S;
            else {
              X = Math.max(
                1,
                ee / (r + (r - 1) * L)
              );
              const K = X * L, Z = X * r + K * (r - 1);
              z = S + (ee - Z) / 2 + t * (X + K);
            }
          } else {
            const ee = U.find((K) => K.center === S);
            if (!ee || !H)
              X = B, z = S - B / 2, f && X < f && (X = f, z = S - X / 2);
            else {
              const { barWidth: K } = H;
              X = K;
              const Z = r > 1 ? K * L : 0, se = X * r + Z * (r - 1);
              let ie = S - se / 2;
              ie < ee.left && (ie = ee.left), ie + se > ee.right && (ie = Math.max(ee.left, ee.right - se)), z = ie + t * (X + Z);
            }
            if (f && X < f) {
              const K = U.find(
                (Z) => Math.abs(Z.center - S) < 0.5
              );
              if (K) {
                const Z = Math.max(2, K.right - K.left - 1), se = Math.min(Z, f);
                if (se > X)
                  if (r <= 1)
                    X = se, z = Math.max(
                      K.left,
                      Math.min(K.right - X, S - X / 2)
                    );
                  else {
                    const ie = se * L, _e = se * r + ie * (r - 1);
                    if (_e <= K.right - K.left - 1) {
                      X = se;
                      const Ce = _e;
                      let Ne = S - Ce / 2;
                      Ne < K.left && (Ne = K.left), Ne + Ce > K.right && (Ne = Math.max(
                        K.left,
                        K.right - Ce
                      )), z = Ne + t * (X + ie);
                    }
                  }
              }
            }
          }
          const O = z + X / 2, Y = y(J.y), de = Math.min(le, Y), we = Math.abs(le - Y), pe = !_ && k?.focused?.seriesId === e.id && k.focused.index === ne, fe = () => {
            !k || _ || k.setFocused({
              seriesId: e.id,
              index: ne,
              x: j,
              y: J.y,
              clientX: O,
              clientY: Y
            });
          }, G = () => {
            k?.focused?.seriesId === e.id && k.focused.index === ne && k.clear();
          }, W = g === "category" && $ ? $[ne] : void 0, ae = g === "category" ? W || (a === "region" ? fn(String(J.x), ne) : gt(ne)) : V, oe = g === "category" ? `${ue}-${ne}` : ue, F = p && P ? ae : g === "category" ? a === "region" ? cr(String(J.x), ne) : Kt(ne) : ve, Q = pe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : F || ae;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: z,
              y: de,
              width: X,
              height: we || 1,
              fill: p ? `url(#${oe})` : ae,
              ...p ? {} : { fillOpacity: R },
              stroke: Q,
              strokeWidth: pe ? 2 : 1,
              className: "fdp-bar",
              tabIndex: _ || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${j instanceof Date ? j.toDateString() : j} value ${J.y}`,
              onMouseEnter: fe,
              onFocus: fe,
              onMouseLeave: G,
              onBlur: G
            },
            ne
          );
        })
      ]
    }
  );
}, ab = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = Wt(), d = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, u = q.useMemo(() => e.flatMap((f) => f.data), [e]), h = q.useMemo(() => {
    const f = /* @__PURE__ */ new Set();
    return u.forEach((p) => f.add(p.x)), Array.from(f);
  }, [u]), g = q.useMemo(
    () => Math.max(0, ...u.map((f) => f.y)),
    [u]
  ), x = q.useMemo(
    () => Uo().domain(h).range([0, d]).paddingInner(a).paddingOuter(s),
    [h, d, a, s]
  ), T = q.useMemo(
    () => er().domain([0, g]).nice().range([c, 0]),
    [g, c]
  ), w = q.useMemo(
    () => ({
      xScale: x,
      yScale: T,
      getXTicks: () => h,
      getYTicks: (f = i) => T.ticks(f)
    }),
    [x, T, h, i]
  );
  return /* @__PURE__ */ n.jsx(vs.Provider, { value: w, children: o });
}, sb = ({
  title: e,
  description: t,
  source: r,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = q.useId(), c = o || d, u = t ? `${c}-desc` : void 0, h = r ? `${c}-src` : void 0, g = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: c,
      className: or("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": or(u, h),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !g && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(dt, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(dt, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: h, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, ob = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
  const s = q.useRef(null);
  return q.useEffect(() => {
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
    if (r > 0) {
      const l = window.setTimeout(i, r);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: s, children: a });
}, ib = ({
  label: e,
  value: t,
  unit: r,
  delta: a,
  status: s = "neutral",
  variant: o = "default",
  subtitle: i,
  metadata: l,
  trendData: d,
  loading: c = !1,
  error: u,
  valueFormatter: h,
  className: g,
  id: x,
  announceDelta: T = !0
}) => {
  const w = q.useId(), f = x || w, p = `${f}-label`, P = `${f}-value`, I = `${f}-delta`, D = typeof t == "number" && !Number.isNaN(t), R = c ? "—" : u ? "" : D ? h ? h(t) : t.toLocaleString() : t;
  let $, L = "", N = "";
  if (a && !c && !u) {
    $ = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const b = Math.abs(a.value), C = $ === "up" ? `+${b}` : $ === "down" ? `-${b}` : "0", y = a.isPercent ? "%" : "";
    if (L = `${C}${y}`, a.ariaLabel)
      N = a.ariaLabel;
    else {
      const m = a.invert ? $ === "down" : $ === "up";
      N = `${$ === "neutral" ? "no change" : $ === "up" ? "up" : "down"} ${b}${y}${$ === "neutral" ? "" : m ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: or(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        c && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        g
      ),
      role: "group",
      "aria-labelledby": p,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: p, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: P, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: R }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: I,
              "aria-label": N,
              className: or(
                "fdp-metric-card__delta",
                $ && `fdp-metric-card__delta--${$}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: L }),
                a.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        T && a && !a.ariaLabel && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: N })
      ] })
    }
  );
}, be = (e) => typeof e == "number" && Number.isFinite(e), rp = (e) => e.reduce((t, r) => t + r, 0), pt = (e) => e.length ? rp(e) / e.length : NaN;
function Bi(e, t) {
  const r = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!t[s] && be(o)) {
      if (a !== null) {
        const i = e[a];
        r[s] = be(i) ? Math.abs(o - i) : null;
      }
      a = s;
    }
  }
  return r;
}
function Hi(e, t) {
  const r = e.filter((o) => be(o));
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let a = pt(r), s = 3.267 * a;
  if (t) {
    const o = r.filter((i) => i <= s);
    o.length && o.length !== r.length && (a = pt(o), s = 3.267 * a);
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
const sp = 0.2777, op = 3.6, ip = (e) => be(e) && e >= 0 ? Math.pow(e, sp) : null, Ut = (e) => be(e) && e >= 0 ? Math.pow(e, op) : null;
function lp(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const rn = {
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
  const t = 1 / (e + 1), r = (u) => lp(u, t) - 1, a = r(0.5), s = Math.max(0, r(rn.three.low)), o = r(rn.three.high), i = Math.max(0, r(rn.one.low)), l = r(rn.one.high), d = Math.max(0, r(rn.two.low)), c = r(rn.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: d, twoHigh: c };
}
function dp(e, t, r) {
  const a = e.map((N) => be(N) ? ip(N) : null), s = Bi(a, t), { mrMean: o } = Hi(s, !!r), i = a.filter((N, b) => !t[b] && be(N)), l = i.length ? pt(i) : NaN;
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
  const d = 2.66, c = 2 / 3 * d, u = 1 / 3 * d, h = l + d * o, g = l - d * o, x = l + c * o, T = l - c * o, w = l + u * o, f = l - u * o, p = Ut(l), P = Ut(h), I = g <= 0 ? null : Ut(g), D = Ut(w), R = f <= 0 ? null : Ut(f), $ = Ut(x), L = T <= 0 ? null : Ut(T);
  return {
    center: p ?? null,
    upperProcessLimit: P ?? null,
    lowerProcessLimit: I ?? null,
    upperTwoSigma: $ ?? null,
    lowerTwoSigma: L ?? null,
    upperOneSigma: D ?? null,
    lowerOneSigma: R ?? null,
    mr: s,
    mrMean: o,
    mrUcl: be(o) ? 3.267 * o : null
  };
}
var _s = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(_s || {}), Ae = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ae || {}), He = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(He || {});
const ws = [
  // rank 1..n (order matters)
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], To = ws.reduce((e, t, r) => (e[t] = r + 1, e), {}), up = {
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
}, dr = ws.reduce((e, t, r) => (e[t] = {
  id: t,
  rank: r + 1,
  label: up[t],
  category: fp[t],
  participatesInRanking: !0
}, e), {});
ws.map((e) => dr[e]);
var sn = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(sn || {}), Ea = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(Ea || {}), xt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(xt || {}), on = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(on || {}), zi = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(zi || {}), Bt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Bt || {}), Wi = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Wi || {}), Oi = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Oi || {});
function hp(e) {
  const t = [], r = [];
  e.specialCauseSinglePointUp && t.push(
    "single_point"
    /* SinglePoint */
  ), e.specialCauseSinglePointDown && r.push(
    "single_point"
    /* SinglePoint */
  ), e.specialCauseTwoOfThreeUp && t.push(
    "two_sigma"
    /* TwoSigma */
  ), e.specialCauseTwoOfThreeDown && r.push(
    "two_sigma"
    /* TwoSigma */
  ), e.specialCauseShiftUp && t.push(
    "shift"
    /* Shift */
  ), e.specialCauseShiftDown && r.push(
    "shift"
    /* Shift */
  ), e.specialCauseTrendUp && t.push(
    "trend"
    /* Trend */
  ), e.specialCauseTrendDown && r.push(
    "trend"
    /* Trend */
  );
  const a = t.reduce((o, i) => Math.max(o, dr[i].rank), 0), s = r.reduce((o, i) => Math.max(o, dr[i].rank), 0);
  return { upRules: t, downRules: r, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: r.length > 0 };
}
var Ui = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Ui || {});
function pp(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function mp(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((u, h) => ({ idx: h, value: u.value })).filter((u) => be(u.value));
  if (s.length < a * 2) return;
  const o = r === "Up" || r === "Neither", i = r === "Down";
  function l(u, h) {
    const g = s.slice(u, h).map((x) => x.value);
    return g.length ? pt(g) : NaN;
  }
  let d = null;
  if (s.length > 1) {
    const u = [];
    for (let g = 1; g < s.length; g++) u.push(Math.abs(s[g].value - s[g - 1].value));
    const h = pt(u);
    be(h) && h > 0 && (d = h * (2.66 / 3));
  }
  if (!d || d <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let u = a; u <= s.length - a; u++) {
    const h = u - a, g = l(h, u), x = l(u, u + a);
    if (!be(g) || !be(x)) continue;
    const w = (x - g) / d;
    if (!(o ? w >= c : i ? -w >= c : Math.abs(w) >= c)) continue;
    const p = s.slice(u, u + a).map((D) => D.value);
    if (!(o ? p.every((D) => D > g) : i ? p.every((D) => D < g) : p.every((D) => o ? D > g : D < g))) continue;
    const I = s[u].idx;
    e[I].baseline || (e[I].baseline = !0);
    return;
  }
}
function Gi(e) {
  if (!e) return {};
  const t = e, r = e, a = r.rules ?? {}, s = r.precedence ?? {}, o = r.thresholds ?? {}, i = r.warnings ?? {}, l = r.rareEvent ?? {}, d = r.capability ?? {}, c = r.grace ?? {}, u = r.baselineSuggest ?? {}, h = r.autoRecalc ?? {}, g = c.emergingEnabled ?? r.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, x = a.collapseWeakerClusterRules ?? r.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules, T = globalThis;
  t.emergingDirectionGrace !== void 0 && r.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !T.__spc_warn_emergingDirectionGrace && (T.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && r.collapseWeakerClusterRules === void 0 && !T.__spc_warn_collapseClusterRules && (T.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const w = (P) => {
    const I = {};
    for (const D of Object.keys(P)) {
      const R = P[D];
      R !== void 0 && (I[D] = R);
    }
    return I;
  }, f = w({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: x ?? t.collapseWeakerClusterRules,
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
    emergingGraceEnabled: g,
    emergingDirectionGrace: g,
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
  }), p = { ...f, ...w(t) };
  if (g !== void 0 && (p.emergingGraceEnabled = g, p.grace = { ...p.grace, emergingEnabled: g }), f.collapseWeakerClusterRules !== void 0) {
    const P = f.collapseWeakerClusterRules;
    p.collapseWeakerClusterRules = P, p.rules = { ...p.rules, collapseWeakerClusterRules: P };
  }
  return w(p);
}
function Ss(e) {
  const {
    chartType: t,
    metricImprovement: r,
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
    rules: {},
    grace: {},
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
      mp(l, o, r);
    } catch {
    }
  const d = pp(l), c = [], u = [], g = l.filter(
    (f) => !f.ghost && be(f.value)
  ).length >= (i.minimumPoints ?? 13);
  let x = 0;
  const T = {};
  for (const f of d) {
    x++;
    const p = f.map((m) => m.value), P = f.map((m) => m.ghost);
    let I = new Array(p.length).fill(null), D = NaN, R = NaN, $ = NaN, L = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      I = Bi(p, P);
      const m = p.filter(
        (_, k) => !P[k] && be(_)
      );
      D = m.length ? pt(m) : NaN;
      const E = Hi(
        I,
        !!i.excludeMovingRangeOutliers
      );
      R = E.mrMean, $ = E.mrUcl, L = ap(D, R);
    } else if (t === "T") {
      const m = dp(
        p,
        P,
        !!i.excludeMovingRangeOutliers
      );
      I = m.mr, R = m.mrMean ?? NaN, $ = m.mrUcl ?? NaN, D = m.center ?? NaN, L = {
        upperProcessLimit: m.upperProcessLimit,
        lowerProcessLimit: m.lowerProcessLimit,
        upperTwoSigma: m.upperTwoSigma,
        lowerTwoSigma: m.lowerTwoSigma,
        upperOneSigma: m.upperOneSigma,
        lowerOneSigma: m.lowerOneSigma
      };
    } else if (t === "G") {
      const m = p.filter(
        (k, v) => !P[v] && be(k)
      ), E = m.length ? pt(m) : NaN, _ = cp(E);
      D = _.cl ?? NaN, L = {
        upperProcessLimit: _.ucl,
        lowerProcessLimit: _.lcl,
        upperTwoSigma: _.twoHigh,
        lowerTwoSigma: _.twoLow,
        upperOneSigma: _.oneHigh,
        lowerOneSigma: _.oneLow
      }, I = new Array(p.length).fill(null), R = NaN, $ = NaN;
    } else
      u.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const N = f.map((m, E) => {
      const _ = !m.ghost && be(m.value) ? p.slice(0, E + 1).filter((re, B) => !P[B] && be(re)).length : 0, k = g, v = k ? L : {
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
        value: be(m.value) ? m.value : null,
        ghost: m.ghost,
        partitionId: x,
        pointRank: _,
        mean: k && be(D) ? D : null,
        mr: be(I[E]) ? I[E] : null,
        mrMean: k && be(R) ? R : null,
        mrUcl: k && be($) ? $ : null,
        upperProcessLimit: be(v.upperProcessLimit) ? v.upperProcessLimit : null,
        lowerProcessLimit: be(v.lowerProcessLimit) ? v.lowerProcessLimit : null,
        upperTwoSigma: be(v.upperTwoSigma) ? v.upperTwoSigma : null,
        lowerTwoSigma: be(v.lowerTwoSigma) ? v.lowerTwoSigma : null,
        upperOneSigma: be(v.upperOneSigma) ? v.upperOneSigma : null,
        lowerOneSigma: be(v.lowerOneSigma) ? v.lowerOneSigma : null,
        target: be(m.target) ? m.target : null,
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
        upperBaseline: k && be(D) ? D : null,
        lowerBaseline: k && be(D) ? D : null,
        movingRangeHighPointValue: k && be($) ? $ : null,
        ghostValue: m.ghost && be(m.value) ? m.value : null,
        ghostFlag: !!m.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    T[x] = N.filter(
      (m) => !m.ghost && be(m.value)
    ).length;
    const b = i.specialCauseShiftPoints ?? 6, C = i.specialCauseTrendPoints ?? 6, y = [];
    for (let m = 0; m < N.length; m++) {
      const E = N[m], _ = E.value;
      if (!E.ghost && be(_) && y.push(m), !(be(E.mean) && be(E.upperProcessLimit) && be(E.lowerProcessLimit)) || E.ghost || !be(_)) {
        c.push(E);
        continue;
      }
      E.specialCauseSinglePointUp = be(E.upperProcessLimit) ? _ > E.upperProcessLimit : !1, E.specialCauseSinglePointDown = be(E.lowerProcessLimit) ? _ < E.lowerProcessLimit : !1, c.push(E);
    }
    if (y.length) {
      const m = (k) => N[k];
      let E = [], _ = [];
      for (const k of y) {
        const v = m(k);
        if (!be(v.mean) || !be(v.value)) {
          E = [], _ = [];
          continue;
        }
        if (v.value > v.mean ? (E.push(k), _ = []) : v.value < v.mean ? (_.push(k), E = []) : (E = [], _ = []), E.length >= b)
          for (const M of E) {
            const re = m(M);
            re.specialCauseShiftUp = !0;
          }
        if (_.length >= b)
          for (const M of _) {
            const re = m(M);
            re.specialCauseShiftDown = !0;
          }
      }
      for (let k = 0; k <= y.length - 3; k++) {
        const M = y.slice(k, k + 3).map(m);
        if (!M.every((le) => be(le.mean) && be(le.value))) continue;
        const re = M[0].mean, B = M.every((le) => le.value > re), A = M.every((le) => le.value < re);
        if (!B && !A) continue;
        const U = M[0].upperTwoSigma ?? 1 / 0, H = M[0].lowerTwoSigma ?? -1 / 0, te = M[0].upperProcessLimit ?? 1 / 0, V = M[0].lowerProcessLimit ?? -1 / 0, ce = M.filter((le) => le.value > U && le.value <= te), ve = M.filter((le) => le.value < H && le.value >= V);
        if (B && ce.length >= 2)
          for (const le of ce)
            le.specialCauseTwoOfThreeUp = !0;
        if (A && ve.length >= 2)
          for (const le of ve)
            le.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let k = 0; k <= y.length - 5; k++) {
          const M = y.slice(k, k + 5).map(m);
          if (!M.every((te) => be(te.mean) && be(te.value))) continue;
          const re = M[0].mean;
          if (!M.every((te) => te.value > re) && !M.every((te) => te.value < re)) continue;
          const B = M[0].upperOneSigma ?? 1 / 0, A = M[0].lowerOneSigma ?? -1 / 0, U = M.filter((te) => te.value > B), H = M.filter((te) => te.value < A);
          if (M.every((te) => te.value > re) && U.length >= 4)
            for (const te of U)
              te.specialCauseFourOfFiveUp = !0;
          if (M.every((te) => te.value < re) && H.length >= 4)
            for (const te of H)
              te.specialCauseFourOfFiveDown = !0;
        }
      for (let k = 0; k <= y.length - C; k++) {
        const v = y.slice(k, k + C), M = v.map(m);
        if (!M.every((A) => be(A.value))) continue;
        let re = !0, B = !0;
        for (let A = 1; A < M.length && (M[A].value > M[A - 1].value || (re = !1), M[A].value < M[A - 1].value || (B = !1), !(!re && !B)); A++)
          ;
        if (re) for (const A of v) {
          const U = m(A);
          U.specialCauseTrendUp = !0;
        }
        if (B) for (const A of v) {
          const U = m(A);
          U.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let k = [];
        for (const v of y) {
          const M = m(v);
          if (!be(M.value) || !be(M.mean) || !be(M.upperOneSigma) || !be(M.lowerOneSigma)) {
            k = [];
            continue;
          }
          if (!(M.value < M.upperOneSigma && M.value > M.lowerOneSigma)) {
            k = [];
            continue;
          }
          if (k.push(v), k.length >= 15) {
            const B = k.map(m), A = B.some((H) => H.value > H.mean), U = B.some((H) => H.value < H.mean);
            if (A && U)
              for (const H of k) m(H).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const m = i.maximumPointsPartition;
      let E = 0;
      for (const _ of c.filter((k) => k.partitionId === x))
        !_.ghost && be(_.value) && E++, E > m && (_.mean = _.upperProcessLimit = _.lowerProcessLimit = null, _.upperTwoSigma = _.lowerTwoSigma = _.upperOneSigma = _.lowerOneSigma = null);
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
    const P = p.value > p.mean, I = p.value < p.mean;
    i.rules?.collapseWeakerClusterRules && (p.specialCauseTwoOfThreeUp && p.specialCauseFourOfFiveUp && (p.specialCauseTwoOfThreeUp = !1), p.specialCauseTwoOfThreeDown && p.specialCauseFourOfFiveDown && (p.specialCauseTwoOfThreeDown = !1));
    const D = p.specialCauseTrendUp && P, R = p.specialCauseTrendDown && I, $ = p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || D, L = p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || R;
    let N = !1;
    if (i.precedenceStrategy === "directional_first" && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const C = i.specialCauseTrendPoints || 6;
      if (C > 1 && !(p.specialCauseTrendUp || p.specialCauseTrendDown)) {
        const y = C - 1, m = [];
        for (let E = f; E >= 0 && m.length < y; E--) {
          const _ = c[E];
          !_.ghost && be(_.value) && _.mean !== null && m.unshift(_);
        }
        if (m.length === y) {
          let E = !0;
          for (let _ = 1; _ < m.length && E; _++)
            r === "Up" ? m[_].value > m[_ - 1].value || (E = !1) : r === "Down" && m[_].value < m[_ - 1].value || (E = !1);
          N = E;
        }
      }
    }
    if (i.precedenceStrategy === "directional_first") {
      const y = r === "Up" ? $ : r === "Down" ? L : !1, m = r === "Up" ? L : r === "Down" ? $ : !1;
      y && !m ? p.variationIcon = "improvement" : m && !y ? p.variationIcon = N ? "neither" : "concern" : y && m ? p.variationIcon = N || p.specialCauseTrendUp || p.specialCauseTrendDown ? "improvement" : "neither" : p.variationIcon = "neither";
    } else
      r === "Up" ? p.variationIcon = $ ? "improvement" : L ? "concern" : "neither" : r === "Down" ? p.variationIcon = L ? "improvement" : $ ? "concern" : "neither" : p.variationIcon = "neither";
    const b = $ || L;
    if (p.specialCauseImprovementValue = b && p.variationIcon === "improvement" ? p.value : null, p.specialCauseConcernValue = b && p.variationIcon === "concern" ? p.value : null, p.specialCauseNeitherValue = b && p.variationIcon === "neither" ? p.value : null, i.conflictPrecedenceMode === "sql_ranking_v2_6a" && p.specialCauseImprovementValue !== null && p.specialCauseConcernValue !== null) {
      const C = [];
      p.specialCauseSinglePointUp && C.push({
        id: "single_point",
        rank: 1,
        side: "up"
        /* Up */
      }), p.specialCauseSinglePointDown && C.push({
        id: "single_point",
        rank: 1,
        side: "down"
        /* Down */
      }), p.specialCauseTwoOfThreeUp && C.push({
        id: "two_sigma",
        rank: 2,
        side: "up"
        /* Up */
      }), p.specialCauseTwoOfThreeDown && C.push({
        id: "two_sigma",
        rank: 2,
        side: "down"
        /* Down */
      }), p.specialCauseShiftUp && C.push({
        id: "shift",
        rank: 3,
        side: "up"
        /* Up */
      }), p.specialCauseShiftDown && C.push({
        id: "shift",
        rank: 3,
        side: "down"
        /* Down */
      }), p.specialCauseTrendUp && C.push({
        id: "trend",
        rank: 4,
        side: "up"
        /* Up */
      }), p.specialCauseTrendDown && C.push({
        id: "trend",
        rank: 4,
        side: "down"
        /* Down */
      });
      const y = C.filter(
        (B) => B.side === "up"
        /* Up */
      ).reduce((B, A) => Math.max(B, A.rank), 0), m = C.filter(
        (B) => B.side === "down"
        /* Down */
      ).reduce((B, A) => Math.max(B, A.rank), 0);
      let E;
      y > m ? E = "Upwards" : m > y ? E = "Downwards" : E = "Same";
      const _ = p.specialCauseImprovementValue, k = p.specialCauseConcernValue;
      E === "Upwards" ? r === "Up" ? p.specialCauseConcernValue = null : r === "Down" && (p.specialCauseImprovementValue = null) : E === "Downwards" ? r === "Up" ? p.specialCauseImprovementValue = null : r === "Down" && (p.specialCauseConcernValue = null) : p.variationIcon === "improvement" ? p.specialCauseConcernValue = null : p.variationIcon === "concern" ? p.specialCauseImprovementValue = null : p.specialCauseConcernValue = null, p.specialCauseImprovementValue !== null && p.specialCauseConcernValue === null ? p.variationIcon = "improvement" : p.specialCauseConcernValue !== null && p.specialCauseImprovementValue === null ? p.variationIcon = "concern" : p.specialCauseImprovementValue === null && p.specialCauseConcernValue === null && (p.variationIcon = "neither");
      const v = p.specialCauseImprovementValue !== null ? "up" : p.specialCauseConcernValue !== null ? "down" : void 0, M = v === "up" ? y : v === "down" ? m : Math.max(y, m), re = C.find((B) => B.rank === M && (!v || B.side === v));
      p.conflictPrimeDirection = E, p.conflictResolved = !0, p.conflictResolvedRank = M || void 0, re && (p.conflictResolvedByRuleId = re.id), p.pruningMode = "conflict", p.originalSpecialCauseImprovementValue = _, p.originalSpecialCauseConcernValue = k;
    }
    if (be(p.value) && p.mean !== null) {
      p.assuranceIcon = "none";
      const C = l[p.rowId - 1];
      if (be(C.target)) {
        const y = C.target;
        i.assuranceCapabilityMode && be(p.upperProcessLimit) && be(p.lowerProcessLimit) ? r === "Up" ? p.lowerProcessLimit !== null && p.lowerProcessLimit > y ? p.assuranceIcon = "pass" : p.upperProcessLimit !== null && p.upperProcessLimit < y ? p.assuranceIcon = "fail" : p.assuranceIcon = "none" : r === "Down" ? p.upperProcessLimit !== null && p.upperProcessLimit < y ? p.assuranceIcon = "pass" : p.lowerProcessLimit !== null && p.lowerProcessLimit > y ? p.assuranceIcon = "fail" : p.assuranceIcon = "none" : p.assuranceIcon = "none" : r === "Down" ? p.assuranceIcon = p.value <= y ? "pass" : "fail" : r === "Up" ? p.assuranceIcon = p.value >= y ? "pass" : "fail" : p.assuranceIcon = "none";
      }
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !g) {
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
    for (const P of c)
      !P.ghost && be(P.value) && p++, p > f && (P.mean = P.upperProcessLimit = P.lowerProcessLimit = null, P.upperTwoSigma = P.lowerTwoSigma = P.upperOneSigma = P.lowerOneSigma = null);
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
  if (i.partitionSizeWarnings && Object.entries(T).forEach(([f, p]) => {
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
  let w;
  if (i.baselineSuggest) {
    const f = c, p = i.baselineSuggestStabilityPoints, P = i.baselineSuggestMinGap, I = i.baselineSuggestMinDeltaSigma, D = i.baselineSuggestScoreThreshold, R = [];
    let $ = 0;
    for (let L = 0; L < f.length; L++) {
      let N = function(m) {
        return !!b[m] && !C?.[m];
      };
      const b = f[L];
      L > 0 && f[L - 1].partitionId !== b.partitionId && ($ = L);
      const C = f[L - 1], y = [];
      (N("specialCauseShiftUp") || N("specialCauseShiftDown")) && y.push({ reason: "shift", index: L }), (N("specialCauseTrendUp") || N("specialCauseTrendDown")) && y.push({ reason: "trend", index: L }), (N("specialCauseSinglePointUp") || N("specialCauseSinglePointDown")) && y.push({ reason: "point", index: L });
      for (const m of y) {
        if (m.index - $ < P) continue;
        const E = Math.max(0, m.index - p), _ = m.index - 1;
        if (_ - E + 1 < p) continue;
        const k = m.index, v = m.index + p - 1;
        if (v >= f.length) continue;
        const M = f.slice(E, _ + 1).map((j) => j.value).filter(be), re = f.slice(k, v + 1).map((j) => j.value).filter(be);
        if (M.length < p || re.length < p) continue;
        const B = f[m.index];
        let A = null;
        if (be(B.upperProcessLimit) && be(B.mean)) {
          const j = B.upperProcessLimit - B.mean;
          j > 0 && (A = j / 3);
        }
        if (!A || A <= 0) continue;
        const U = pt(M), H = pt(re), te = H - U;
        if (Math.abs(te) < I * A) continue;
        const ce = f.slice(k, v + 1).filter(
          (j) => j.variationIcon === "concern"
          /* Concern */
        ).length;
        if (ce > 1) continue;
        const ve = (j) => {
          const S = pt(j);
          return j.length ? j.reduce((z, X) => z + (X - S) * (X - S), 0) / j.length : 0;
        }, le = ve(M), ue = ve(re);
        let J = m.reason === "shift" ? 90 : m.reason === "trend" ? 70 : 60;
        if (ue < le && (J += 10), J -= ce * 15, J < D) continue;
        const ne = R.find((j) => j.index === m.index);
        if (ne) {
          const j = (S) => S === "shift" ? 3 : S === "trend" ? 2 : 1;
          (j(m.reason) > j(ne.reason) || J > ne.score) && (ne.reason = m.reason, ne.score = J, ne.deltaMean = te, ne.oldMean = U, ne.newMean = H, ne.window = [k, v]);
        } else
          R.push({
            index: m.index,
            reason: m.reason,
            score: J,
            deltaMean: te,
            oldMean: U,
            newMean: H,
            window: [k, v]
          });
      }
      L > 0 && f[L - 1].partitionId !== f[L].partitionId && ($ = L);
    }
    R.sort((L, N) => L.index - N.index), w = R;
  }
  return { rows: c, warnings: u, ...w ? { suggestedBaselines: w } : {} };
}
const Ht = {
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
function Wr(e) {
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
function Or(e) {
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
    case xt.Pass:
      return "Target met";
    case xt.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function xp(e, t, r) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((r - e) / t);
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
  pointDescriber: r,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const d = Pt(), c = Wt(), [u, h] = q.useState(null), [g, x] = q.useState(!1), T = q.useRef(null);
  q.useEffect(() => {
    if (d) {
      if (d.focused && (h(d.focused), T.current && (cancelAnimationFrame(T.current), T.current = null)), !d.focused && !g) {
        const fe = requestAnimationFrame(() => {
          h(null), T.current = null;
        });
        T.current = fe;
      }
      return () => {
        T.current && (cancelAnimationFrame(T.current), T.current = null);
      };
    }
  }, [d, d?.focused, g]);
  const w = d && (d.focused || (g ? u : null) || u), [f, p] = q.useState(!1);
  q.useEffect(() => {
    const fe = requestAnimationFrame(() => p(!0));
    return () => cancelAnimationFrame(fe);
  }, [w?.index]);
  const P = c?.innerWidth ?? 0, I = c?.innerHeight ?? 0, D = w ? Math.min(Math.max(w.clientX, 0), P) : 0, R = w ? Math.min(Math.max(w.clientY, 0), I) : 0, L = c.ref?.current;
  if (!w)
    return null;
  const N = e?.[w.index], C = Wr(N).map((fe) => ({ id: fe, label: Ht[fe].tooltip })), y = w.x instanceof Date ? w.x : new Date(w.x), m = o ? o(y) : y.toDateString(), E = s ? `${s}` : "", _ = a || E ? `${w.y}${E ? "" + E : " "}${a ? " " + a : ""}` : `${w.y}`, k = Or(N?.variationIcon), v = gp(N?.assuranceIcon), M = xp(
    t.mean ?? null,
    t.sigma,
    w.y
  ), re = r ? r(w.index, { x: w.x, y: w.y }) : void 0, B = k || v || M, A = N?.specialCauseTrendUp || N?.specialCauseTrendDown, U = N?.variationIcon === He.Neither && A, H = l && U ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, te = C.length > 0, V = N?.primeDirection, ce = N?.primeRuleId, ve = i && N?.variationIcon === He.Neither && te, le = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ue = Vi(N?.variationIcon), J = 6.2, j = [
    re || "",
    `${m} • ${_}`
  ].filter(Boolean).reduce(
    (fe, G) => Math.max(fe, G.length * J + 32),
    0
  ), S = 200, z = 440, X = Math.min(z, Math.max(S, j));
  let O = D + 12, de = (c.margin?.top ?? 0) + R + 16;
  O + X > P && (O = D - -60 - X), O < 0 && (O = Math.max(0, P - X));
  const we = w ? `spc-tooltip-${w.index}` : "spc-tooltip", pe = L ? tc(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: we,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (f ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: O,
          top: de,
          width: X,
          maxWidth: z,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": f ? "false" : "true",
        "data-floating": !0,
        "data-placement": O + X + 12 > P ? "left" : "right",
        onPointerEnter: () => {
          x(!0), T.current && (cancelAnimationFrame(T.current), T.current = null);
        },
        onPointerLeave: () => {
          if (x(!1), !d?.focused) {
            const fe = requestAnimationFrame(() => {
              h(null), T.current = null;
            });
            T.current = fe;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: m })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: _ })
          ] }),
          B && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: k?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              qe,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : k?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              qe,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : ve ? /* @__PURE__ */ n.jsx(
              qe,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : k ? /* @__PURE__ */ n.jsx(
              qe,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          v && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const fe = v.toLowerCase(), W = !(fe.includes("not met") || fe.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(fe);
              return /* @__PURE__ */ n.jsx(
                qe,
                {
                  text: v,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${W ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${v}`
                }
              );
            })() })
          ] }),
          M && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              qe,
              {
                text: (() => {
                  const fe = M.toLowerCase();
                  return fe.startsWith("within 1") ? "≤1σ" : fe.startsWith("1–2") ? "1–2σ" : fe.startsWith("2–3") ? "2–3σ" : fe.startsWith(">3") ? ">3σ" : M;
                })(),
                color: M.includes(">3") ? "orange" : M.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${M}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          H && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: H })
          ] }),
          te && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: C.map(({ id: fe, label: G }) => {
                  const W = String(fe), oe = W === Ea.TrendIncreasing || W === Ea.TrendDecreasing ? "fdp-spc-tag--trend" : ve ? "fdp-spc-tag--no-judgement" : k ? k.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : k.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    qe,
                    {
                      text: G,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${oe}`,
                      "data-rule-id": W
                    },
                    W
                  );
                })
              }
            ),
            V && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ n.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const fe = ve ? "fdp-spc-tag--no-judgement" : k ? k.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : k.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", G = `${V}${ce ? ` (${ce})` : ""}`;
                return /* @__PURE__ */ n.jsx(
                  qe,
                  {
                    text: G,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${fe}`,
                    "aria-label": `Prime direction ${V}${ce ? ` via ${ce}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    L
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
            cx: D,
            cy: R,
            r: 7,
            fill: "none",
            stroke: le,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: D,
            cy: R,
            r: 5,
            fill: "#000",
            stroke: le,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: D,
            cy: R,
            r: 2.5,
            fill: ue,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        pe
      ]
    }
  );
};
let Aa = null;
try {
  Aa = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const ot = (e, t) => {
  if (!Aa) return t;
  const r = e.split(".");
  let a = Aa;
  for (const o of r) {
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
var zt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(zt || {});
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
var Ye = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ye || {}), je = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(je || {}), nt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(nt || {}), Le = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Le || {});
const _p = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [r, a, s].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
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
const Cs = (e) => ks[e], Ur = (e) => ks[e].judgement || "none", Do = {
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
  let r;
  return e === "common_cause" ? r = Do.common : r = Do.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
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
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Ae.Up ? Ye.HigherIsBetter : i.improvementDirection === Ae.Down ? Ye.LowerIsBetter : Ye.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    switch (i.variationIcon) {
      case He.Improvement:
        d = Le.SpecialCauseImproving;
        break;
      case He.Concern:
        d = Le.SpecialCauseDeteriorating;
        break;
      case He.Neither:
        d = i.specialCauseNeutral ? Le.SpecialCauseNoJudgement : Le.CommonCause;
        break;
      case He.None:
      default:
        d = Le.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (d === Le.SpecialCauseImproving ? c = l === Ye.LowerIsBetter ? je.Lower : je.Higher : d === Le.SpecialCauseDeteriorating ? c = l === Ye.LowerIsBetter ? je.Higher : je.Lower : d === Le.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = je.Higher : i.lowSideSignal && !i.highSideSignal ? c = je.Lower : c = je.Higher : c = je.Higher), { state: d, direction: c, polarity: l ?? Ye.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Le.SpecialCauseImproving || i.state === Le.SpecialCauseDeteriorating) && i.polarity && (i.state === Le.SpecialCauseImproving ? l = i.polarity === Ye.LowerIsBetter ? je.Lower : je.Higher : l = i.polarity === Ye.LowerIsBetter ? je.Higher : je.Lower), l || (i.state === Le.SpecialCauseImproving ? l = je.Higher : i.state === Le.SpecialCauseDeteriorating ? l = je.Lower : l = je.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ye.ContextDependent
    };
  }
  const r = e;
  t();
  const s = {
    [nt.Improving]: Le.SpecialCauseImproving,
    [nt.Deteriorating]: Le.SpecialCauseDeteriorating,
    [nt.No_Judgement]: Le.SpecialCauseNoJudgement,
    [nt.None]: Le.CommonCause
  }[r.judgement];
  let o;
  return r.judgement === nt.Improving ? o = r.polarity === Ye.LowerIsBetter ? je.Lower : je.Higher : r.judgement === nt.Deteriorating ? o = r.polarity === Ye.LowerIsBetter ? je.Higher : je.Lower : o = r.trend ?? je.Higher, { state: s, direction: o, polarity: r.polarity };
};
function Sp(e, t) {
  const { state: r, direction: a, polarity: s } = Xi(e), o = Ur(r), i = a === je.Higher ? "above" : "below", l = a === je.Higher ? "upwards" : "downwards", d = (() => {
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
const va = (e, t, r, a, s, o) => /* @__PURE__ */ n.jsxs("defs", { children: [
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
] }), Gr = ({
  data: e,
  size: t = 44,
  ariaLabel: r,
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
  const h = Vn(), g = Vn(), {
    start: x,
    mid: T,
    end: w,
    triStart: f,
    triMid: p,
    triEnd: P
  } = qi(), { state: I, direction: D, polarity: R } = Me(
    () => Xi(e),
    [e]
  ), $ = Me(() => Cs(I), [I]), L = Me(() => Ur(I), [I]), N = L === nt.Improving || L === nt.Deteriorating;
  let b = "";
  a && N && (d === "polarity" ? R === Ye.HigherIsBetter ? b = "H" : R === Ye.LowerIsBetter ? b = "L" : b = "" : b = D === je.Higher ? "H" : "L"), c !== void 0 && (b = c);
  const C = I !== Le.CommonCause, y = I === Le.SpecialCauseNoJudgement, m = ot("common-cause", "#A6A6A6"), E = C ? $.hex : m, _ = Me(
    () => wp(I, D),
    [I, D]
  ), k = r || `${$.label}${b ? D === je.Higher ? " – Higher" : " – Lower" : ""}`, v = Sp(
    e
  );
  if (i === "triangleWithRun") {
    const U = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], H = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let te = null;
    I === Le.SpecialCauseImproving || I === Le.SpecialCauseDeteriorating ? te = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (D === je.Higher ? U : H).map((z) => z.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 6,
        transform: D === je.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : I === Le.SpecialCauseNoJudgement && (te = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: D === je.Higher ? U.map((z) => z.join(",")).join(" ") : H.map((z) => z.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 6,
        transform: D === je.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const V = Math.max(0, Math.min(5, Math.floor(l || 0))), ce = I === Le.CommonCause ? 160 : D === je.Higher ? 220 : 70, ve = 10, le = 26, ue = 150 - 2 * le, J = I === Le.SpecialCauseImproving ? ot("improvement", "#00B0F0") : I === Le.SpecialCauseDeteriorating ? ot("concern", "#E46C0A") : m, ne = Array.from({ length: 5 }).map((z, X) => {
      const Y = (I === Le.SpecialCauseImproving || I === Le.SpecialCauseDeteriorating) && X >= 5 - V ? J : m;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: ue + X * le,
          cy: ce,
          r: ve,
          fill: Y,
          stroke: Y,
          strokeWidth: 1
        },
        X
      );
    }), j = va(
      $.hex,
      h,
      g,
      s,
      o,
      [
        { offset: "0%", opacity: f },
        { offset: "75%", opacity: p },
        { offset: "100%", opacity: P }
      ]
    ), S = I === Le.CommonCause || D === je.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": k,
        "aria-description": v,
        ...u,
        children: [
          j,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${g})` : "#ffffff",
              ...s ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: $.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsxs("g", { transform: S, children: [
            te,
            b && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: D === je.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: b
              }
            ),
            ne
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
    ], H = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], te = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let V = null;
    I === Le.SpecialCauseImproving || I === Le.SpecialCauseDeteriorating ? V = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (D === je.Higher ? U : H).map((ve) => ve.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 8,
        transform: D === je.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : I === Le.SpecialCauseNoJudgement ? V = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: D === je.Higher ? U.map((ve) => ve.join(",")).join(" ") : H.map((ve) => ve.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 8,
        transform: D === je.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : I === Le.CommonCause && (V = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: te[0][0],
        y1: te[0][1],
        x2: te[1][0],
        y2: te[1][1],
        stroke: $.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const ce = va(
      $.hex,
      h,
      g,
      s,
      o,
      [
        { offset: "0%", opacity: f },
        { offset: "65%", opacity: p },
        { offset: "100%", opacity: P }
      ]
    );
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": k,
        "aria-description": v,
        ...u,
        children: [
          ce,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${g})` : "#ffffff",
              ...s ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: $.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          V,
          b && (I === Le.SpecialCauseImproving || I === Le.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: D === je.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: b
            }
          )
        ]
      }
    );
  }
  const M = va(
    $.hex,
    h,
    g,
    s,
    o,
    [
      { offset: "0%", opacity: x },
      { offset: "65%", opacity: T },
      { offset: "100%", opacity: w }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": k,
      "aria-description": v,
      ...u,
      children: [
        M,
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${g})` : "#ffffff",
            ...s ? { filter: `url(#${h})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: $.hex,
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
            fill: $.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: D === je.Lower ? "340" : "155", children: b })
          }
        ),
        y ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: $.hex,
            ...D === je.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          _.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: m,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${_.map((re) => `${re.cx} ${re.cy}`).join(" L ")}`
            }
          ),
          _.map((re, B) => {
            const U = B >= _.length - 2 && C ? E : m, H = U;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: H,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: U,
                cx: re.cx,
                cy: re.cy,
                r: 16
              },
              B
            );
          })
        ] })
      ]
    }
  );
};
Gr.displayName = "SPCVariationIcon";
const Vr = ({
  status: e,
  size: t = 44,
  ariaLabel: r,
  dropShadow: a = !0,
  colourOverride: s,
  gradientWash: o = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...d
}) => {
  const c = Vn(), u = Vn(), { start: h, mid: g, end: x } = qi(), T = s || yp[e], w = (i || vp[e]).slice(0, 2), f = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": f,
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
          o && /* @__PURE__ */ n.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: T, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: T, stopOpacity: parseFloat(g) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(x) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
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
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: w })
          }
        ),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          e === zt.Fail ? /* @__PURE__ */ n.jsx(
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
          ) : e === zt.Uncertain ? /* @__PURE__ */ n.jsx(
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
Vr.displayName = "SPCAssuranceIcon";
function kp(e, t) {
  const r = hp(e), a = r.upMax, s = r.downMax, o = r.upRules.map((w) => ({ id: w, rank: To[w] })), i = r.downRules.map((w) => ({ id: w, rank: To[w] }));
  let l;
  a > s ? l = on.Upwards : s > a ? l = on.Downwards : l = on.Same;
  const d = a > 0, c = s > 0, u = t === Ae.Up && d || t === Ae.Down && c ? e.value : null, h = t === Ae.Up && c || t === Ae.Down && d ? e.value : null;
  e.sqlOriginalImprovementValue = u, e.sqlOriginalConcernValue = h, u !== null && h !== null && (e.sqlPruned = !0, l === on.Upwards ? t === Ae.Up || t === Ae.Down && (e.sqlOriginalImprovementValue = null) : l === on.Downwards ? t === Ae.Up ? e.sqlOriginalImprovementValue = null : Ae.Down : u !== null ? e.sqlOriginalConcernValue = null : h !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = He.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = He.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = He.Neither : e.variationIcon = He.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = zi.Sql;
  const T = ((e.variationIcon === He.Concern ? t === Ae.Up ? sn.Down : sn.Up : t === Ae.Up ? sn.Up : sn.Down) === sn.Up ? o : i).reduce(
    (w, f) => !w || f.rank > w.rank ? f : w,
    void 0
  );
  T && (e.primeRuleId = T.id);
}
function Cp(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: s = {}
  } = e, o = Ss({
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: {
      ...s
    }
  }), i = o.rows.map((l) => ({ ...l }));
  for (const l of i)
    kp(l, r);
  return { rows: i, warnings: o.warnings };
}
const jp = ({ engineRows: e, measureName: t, measureUnit: r }) => {
  const a = Pt(), s = a?.focused ?? null, o = s?.index ?? null, i = typeof o == "number" && e ? e[o] : null, l = q.useMemo(() => i ? Wr(i) : [], [i]), d = q.useMemo(
    () => Array.from(new Set(l.map((c) => Ht[c]?.narration).filter(Boolean))),
    [l]
  );
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector", role: "region", "aria-label": "Signals inspector", "data-testid": "spc-signals-inspector", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__header", style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
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
    ] }),
    !i || !s ? /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__body", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__summary", style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
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
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "Variation:" }),
          " ",
          Or(i.variationIcon) || "Unknown"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "Assurance:" }),
          " ",
          i.assuranceIcon === xt.Pass ? "Pass" : i.assuranceIcon === xt.Fail ? "Fail" : "None"
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__rules", style: { marginTop: 8 }, children: [
        /* @__PURE__ */ n.jsx("strong", { children: "Rules:" }),
        l.length === 0 ? /* @__PURE__ */ n.jsx("span", { children: " None" }) : /* @__PURE__ */ n.jsx("ul", { style: { margin: "4px 0 0 16px" }, children: l.map((c) => /* @__PURE__ */ n.jsxs("li", { "data-rule": c, title: Ht[c]?.tooltip, children: [
          Ht[c]?.tooltip || c,
          Ht[c]?.narration ? /* @__PURE__ */ n.jsxs("span", { style: { color: "#555" }, children: [
            " — ",
            Ht[c].narration
          ] }) : null
        ] }, c)) })
      ] }),
      d.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__narration", style: { marginTop: 8 }, children: [
        /* @__PURE__ */ n.jsx("strong", { children: "Summary:" }),
        " ",
        d.join("; ")
      ] })
    ] })
  ] });
};
let Np = 0;
const Tp = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: r = 260,
  showZones: a = !0,
  showPoints: s = !0,
  announceFocus: o = !1,
  className: i,
  unit: l,
  highlightOutOfControl: d = !0,
  chartType: c = _s.XmR,
  metricImprovement: u = Ae.Neither,
  enableRules: h = !0,
  showIcons: g = !1,
  showEmbeddedIcon: x = !0,
  embeddedIconVariant: T = "classic",
  embeddedIconRunLength: w,
  targets: f,
  baselines: p,
  ghosts: P,
  settings: I,
  narrationContext: D,
  gradientSequences: R = !1,
  sequenceTransition: $ = "slope",
  processLineWidth: L = 2,
  showWarningsPanel: N = !1,
  warningsFilter: b,
  enableNeutralNoJudgement: C = !0,
  showTrendGatingExplanation: y = !0,
  trendVisualMode: m = "ungated",
  disableTrendSideGating: E,
  source: _,
  alwaysShowZeroY: k = !1,
  alwaysShowHundredY: v = !1,
  percentScale: M = !1,
  useSqlCompatEngine: re = !1,
  showTrendStartMarkers: B = !1,
  showFirstFavourableCrossMarkers: A = !1,
  showTrendBridgeOverlay: U = !1,
  showSignalsInspector: H = !1
}) => {
  const te = q.useCallback(
    (ee) => String(ee).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Z) => Z.length ? Z[0].toUpperCase() + Z.slice(1) : Z).join(" "),
    []
  ), V = q.useCallback(
    (ee) => String(ee).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((K) => K.length ? K[0].toUpperCase() + K.slice(1) : K).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && E !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const ce = q.useMemo(() => {
    const ee = e.map((K, Z) => ({
      x: K.x,
      value: K.y,
      target: f?.[Z] ?? void 0,
      baseline: p?.[Z] ?? void 0,
      ghost: P?.[Z] ?? void 0
    }));
    try {
      const K = I ? { ...I } : void 0;
      return re ? Cp({
        chartType: c,
        metricImprovement: u,
        data: ee,
        settings: K
      }) : Ss({ chartType: c, metricImprovement: u, data: ee, settings: K });
    } catch {
      return null;
    }
  }, [
    e,
    f,
    p,
    P,
    c,
    u,
    I,
    re
  ]), ve = ce?.rows.slice().reverse().find((ee) => ee.mean != null), le = ve?.mean ?? null, ue = ce?.warnings || [], J = q.useMemo(() => ue.length ? b ? ue.filter((ee) => !(b.severities && ee.severity && !b.severities.includes(ee.severity) || b.categories && ee.category && !b.categories.includes(ee.category) || b.codes && !b.codes.includes(ee.code))) : ue : [], [ue, b]), [ne, j] = q.useState(""), S = q.useRef("");
  q.useEffect(() => {
    if (!N) {
      S.current !== "" && (S.current = "", j(""));
      return;
    }
    const ee = J.length;
    if (!ee) {
      const ie = "Diagnostics: no warnings.";
      ie !== S.current && (S.current = ie, j(ie));
      return;
    }
    const K = {
      error: J.filter(
        (ie) => ie.severity === Bt.Error
      ).length,
      warning: J.filter(
        (ie) => ie.severity === Bt.Warning
      ).length,
      info: J.filter(
        (ie) => ie.severity === Bt.Info
      ).length
    }, Z = [];
    K.error && Z.push(
      `${K.error} error${K.error === 1 ? "" : "s"}`
    ), K.warning && Z.push(
      `${K.warning} warning${K.warning === 1 ? "" : "s"}`
    ), K.info && Z.push(`${K.info} info`);
    const se = `Diagnostics updated: ${ee} warning${ee === 1 ? "" : "s"} (${Z.join(", ")}).`;
    se !== S.current && (S.current = se, j(se));
  }, [N, J]);
  const z = ve?.upperProcessLimit ?? null, X = ve?.lowerProcessLimit ?? null, O = ve?.upperOneSigma ?? null, Y = ve?.lowerOneSigma ?? null, de = ve?.upperTwoSigma ?? null, we = ve?.lowerTwoSigma ?? null, pe = le != null && O != null ? Math.abs(O - le) : 0, fe = q.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), G = q.useMemo(() => {
    if (M) {
      const ie = e.map((Ne) => Ne.y), _e = Math.max(100, ...ie), Ce = Math.min(0, ...ie);
      return [Ce < 0 ? Ce : 0, _e > 100 ? _e : 100];
    }
    const K = [...e.map((ie) => ie.y)];
    if ([le, z, X, O, Y, de, we].forEach((ie) => {
      ie != null && K.push(ie);
    }), f && f.forEach((ie) => {
      typeof ie == "number" && !isNaN(ie) && K.push(ie);
    }), !K.length) return;
    let Z = Math.min(...K), se = Math.max(...K);
    return k && (Z = Math.min(0, Z)), v && (se = Math.max(100, se)), [Z, se];
  }, [e, le, z, X, O, Y, de, we, f, k, v, M]), W = q.useMemo(() => {
    if (!(l || D?.measureUnit) && e.length)
      return e.every((ee) => ee.y >= 0 && ee.y <= 1) ? "%" : void 0;
  }, [l, D?.measureUnit, e]), ae = l ?? D?.measureUnit ?? W, oe = q.useMemo(() => ae ? { ...D || {}, measureUnit: ae } : D, [D, ae]), F = q.useMemo(() => {
    if (!ce?.rows) return [];
    const ee = [];
    for (let K = 1; K < ce.rows.length; K++)
      ce.rows[K].partitionId !== ce.rows[K - 1].partitionId && ee.push(K);
    return ee;
  }, [ce?.rows]), Q = q.useMemo(() => {
    if (!x || !ce?.rows?.length) return null;
    const ee = ce.rows, K = I?.minimumPoints ?? 13;
    if (ee.filter(
      (De) => !De.ghost && De.value != null
    ).length < K) return null;
    let se = -1;
    for (let De = ee.length - 1; De >= 0; De--) {
      const We = ee[De];
      if (We && We.value != null && !We.ghost) {
        se = De;
        break;
      }
    }
    if (se === -1) return null;
    const ie = ee[se], _e = ie.variationIcon, Ce = ie.assuranceIcon, Ne = _e === He.Neither && !!ie.specialCauseNeitherValue, ye = Ce === xt.Pass ? zt.Pass : Ce === xt.Fail ? zt.Fail : zt.Uncertain;
    let ke;
    if (_e === He.None) {
      const De = ie.specialCauseSinglePointUp, We = ie.specialCauseSinglePointDown;
      u === Ae.Up ? De ? ke = je.Higher : We && (ke = je.Lower) : u === Ae.Down ? We ? ke = je.Lower : De && (ke = je.Higher) : ke = je.Higher;
    } else if (_e === He.Neither && Ne) {
      const De = ie.specialCauseSinglePointUp || ie.specialCauseTwoOfThreeUp || ie.specialCauseFourOfFiveUp || ie.specialCauseShiftUp || ie.specialCauseTrendUp, We = ie.specialCauseSinglePointDown || ie.specialCauseTwoOfThreeDown || ie.specialCauseFourOfFiveDown || ie.specialCauseShiftDown || ie.specialCauseTrendDown;
      De && !We ? ke = je.Higher : We && !De ? ke = je.Lower : ke = je.Higher;
    }
    let Pe;
    u === Ae.Up ? Pe = Ye.HigherIsBetter : u === Ae.Down ? Pe = Ye.LowerIsBetter : Pe = Ye.ContextDependent;
    const Re = 80;
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(_e),
              "data-trend-raw": ke ? String(ke) : "none",
              "data-trend": ke ? String(ke) : "none",
              "data-polarity": String(Pe ?? "unknown"),
              style: { width: Re, height: Re },
              children: /* @__PURE__ */ n.jsx(
                Gr,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: _e,
                    improvementDirection: u,
                    polarity: Pe,
                    specialCauseNeutral: Ne,
                    highSideSignal: ie.specialCauseSinglePointUp || ie.specialCauseTwoOfThreeUp || ie.specialCauseFourOfFiveUp || ie.specialCauseShiftUp || ie.specialCauseTrendUp,
                    lowSideSignal: ie.specialCauseSinglePointDown || ie.specialCauseTwoOfThreeDown || ie.specialCauseFourOfFiveDown || ie.specialCauseShiftDown || ie.specialCauseTrendDown,
                    ...ke ? { trend: ke } : {}
                  },
                  letterMode: u === Ae.Neither ? "direction" : "polarity",
                  size: Re,
                  variant: T,
                  runLength: T === "triangleWithRun" ? w : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(Ce),
              style: { width: Re, height: Re },
              children: /* @__PURE__ */ n.jsx(
                Vr,
                {
                  status: ye,
                  size: Re,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${se}`
    );
  }, [
    x,
    ce?.rows,
    u,
    I?.minimumPoints,
    f,
    T,
    w
  ]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        x && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: Q
          }
        ),
        /* @__PURE__ */ n.jsx(
          gh,
          {
            height: r,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ n.jsx(xh, { series: fe, yDomain: G, children: /* @__PURE__ */ n.jsx(
              Dp,
              {
                series: fe,
                showPoints: s,
                announceFocus: o,
                limits: { mean: le, ucl: z, lcl: X, sigma: pe, onePos: O, oneNeg: Y, twoPos: de, twoNeg: we },
                showZones: a,
                highlightOutOfControl: d,
                engineRows: ce?.rows || null,
                enableRules: h,
                showIcons: g,
                narrationContext: oe,
                gradientSequences: R,
                sequenceTransition: $,
                processLineWidth: L,
                effectiveUnit: ae,
                partitionMarkers: F,
                ariaLabel: t,
                enableNeutralNoJudgement: C,
                showTrendGatingExplanation: y,
                trendVisualMode: m,
                metricImprovement: u,
                showTrendStartMarkers: B,
                showFirstFavourableCrossMarkers: A,
                showTrendBridgeOverlay: U,
                showSignalsInspector: H
              }
            ) })
          }
        ),
        _ && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof _ == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          _
        ] }) : _ }),
        N && ne && /* @__PURE__ */ n.jsx(
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
            children: ne
          }
        ),
        N && J.length > 0 && /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ n.jsx(
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
                  rows: J.map((ee) => {
                    let K = "grey";
                    return ee.severity === Bt.Error ? K = "red" : ee.severity === Bt.Warning ? K = "orange" : ee.severity === Bt.Info && (K = "blue"), [
                      {
                        node: /* @__PURE__ */ n.jsx(
                          qe,
                          {
                            color: K,
                            text: (ee.severity ? String(ee.severity) : "Info").replace(
                              /^[a-z]/,
                              (Z) => Z.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: ee.category ? /* @__PURE__ */ n.jsx(
                          qe,
                          {
                            color: "purple",
                            text: V(ee.category)
                          }
                        ) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ n.jsx(qe, { color: "grey", text: te(ee.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ n.jsx("span", { children: ee.message }),
                          ee.context && Object.keys(ee.context).length > 0 && /* @__PURE__ */ n.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(ee.context, null, 2) })
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
}, Dp = ({
  series: e,
  showPoints: t,
  announceFocus: r,
  limits: a,
  showZones: s,
  highlightOutOfControl: o,
  engineRows: i,
  enableRules: l,
  showIcons: d,
  narrationContext: c,
  gradientSequences: u,
  sequenceTransition: h,
  processLineWidth: g,
  effectiveUnit: x,
  partitionMarkers: T,
  ariaLabel: w,
  metricImprovement: f,
  enableNeutralNoJudgement: p = !0,
  showTrendGatingExplanation: P = !0,
  trendVisualMode: I = "ungated",
  showTrendStartMarkers: D = !1,
  showFirstFavourableCrossMarkers: R = !1,
  showTrendBridgeOverlay: $ = !1,
  showSignalsInspector: L = !1
}) => {
  const N = Qt(), b = Wt();
  if (!N) return null;
  const { xScale: C, yScale: y } = N, m = q.useRef(
    "spc-seq-" + ++Np
  ), E = Pt(), _ = e[0]?.data || [], k = q.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const j = /* @__PURE__ */ new Set();
    return _.forEach((S, z) => {
      (a.ucl != null && S.y > a.ucl || a.lcl != null && S.y < a.lcl) && j.add(z);
    }), j;
  }, [_, a.ucl, a.lcl]), v = q.useMemo(() => {
    if (!i) return null;
    const j = {};
    return i.forEach((S, z) => {
      if (S.value == null || S.ghost) return;
      const X = S.specialCauseSinglePointUp || S.specialCauseSinglePointDown || S.specialCauseTwoOfThreeUp || S.specialCauseTwoOfThreeDown || S.specialCauseFourOfFiveUp || S.specialCauseFourOfFiveDown || S.specialCauseShiftUp || S.specialCauseShiftDown || S.specialCauseTrendUp || S.specialCauseTrendDown;
      j[z] = {
        variation: S.variationIcon,
        assurance: S.assuranceIcon,
        special: X,
        concern: S.variationIcon === He.Concern,
        improvement: S.variationIcon === He.Improvement,
        trendUp: !!S.specialCauseTrendUp,
        trendDown: !!S.specialCauseTrendDown
      };
    }), j;
  }, [i]), M = q.useMemo(() => {
    if (!i || !i.length) return null;
    const j = [];
    for (const z of i)
      typeof z.target == "number" && !isNaN(z.target) && j.push(z.target);
    if (!j.length) return null;
    const S = j[0];
    return j.every((z) => z === S) ? S : null;
  }, [i]), re = q.useMemo(() => {
    if (!v || !_.length)
      return [];
    const j = _.map((z, X) => {
      const O = v?.[X];
      if (O?.concern) return "concern";
      if (O?.improvement) return "improvement";
      if (O?.special && O.variation === He.Neither) {
        if (I === "ungated" && f && f !== Ae.Neither) {
          if (O.trendUp)
            return f === Ae.Up ? "improvement" : "concern";
          if (O.trendDown)
            return f === Ae.Down ? "improvement" : "concern";
        }
        if (p) return "noJudgement";
      }
      return "common";
    });
    return w?.includes("Rule Clash") && console.log(
      `[${w}] Raw categories:`,
      j.map((z, X) => `${X}:${z}(${_[X].y})`).join(", ")
    ), j;
  }, [v, _, w, p]), B = q.useMemo(() => {
    if (!u || !re.length)
      return [];
    const j = [...re];
    let S = 0;
    for (; S < j.length; ) {
      const O = j[S];
      let Y = S + 1;
      for (; Y < j.length && j[Y] === O; ) Y++;
      Y - S === 1 && O !== "common" && (j[S] = "common"), S = Y;
    }
    const z = [];
    if (j.length) {
      let O = 0;
      for (let Y = 1; Y <= j.length; Y++)
        if (Y === j.length || j[Y] !== j[O]) {
          const de = j[O], we = Y - 1, pe = we - O + 1;
          (de === "common" || pe >= 2) && z.push({ start: O, end: we, category: de }), O = Y;
        }
    }
    return w?.includes("Rule Clash") && console.log(
      `[${w}] Final sequences:`,
      z.map((O) => `${O.start}-${O.end}:${O.category}`).join(", ")
    ), z;
  }, [u, re, w]), A = q.useMemo(
    () => _.map((j) => C(j.x instanceof Date ? j.x : new Date(j.x))),
    [_, C]
  ), U = C.range()[1], H = q.useMemo(() => {
    if (!i || !i.length) return null;
    let j = Number.POSITIVE_INFINITY, S = Number.POSITIVE_INFINITY;
    if (i.forEach((pe, fe) => {
      pe.specialCauseTrendUp && (j = Math.min(j, fe)), pe.specialCauseTrendDown && (S = Math.min(S, fe));
    }), !Number.isFinite(j) && !Number.isFinite(S)) return null;
    const z = j <= S, X = z ? "up" : "down", O = z ? j : S, Y = (pe) => f == null || f === Ae.Neither || pe == null || typeof pe.value != "number" || typeof pe.mean != "number" ? !1 : X === "up" ? f === Ae.Up ? pe.value > pe.mean : pe.value < pe.mean : f === Ae.Down ? pe.value < pe.mean : pe.value > pe.mean;
    let de = null;
    for (let pe = O; pe < i.length; pe++) {
      const fe = i[pe];
      if (!(z ? !!fe.specialCauseTrendUp : !!fe.specialCauseTrendDown)) break;
      if (Y(fe)) {
        de = pe;
        break;
      }
    }
    let we = !1;
    if (de != null) {
      let pe = 0;
      for (let fe = de; fe < i.length; fe++) {
        const G = i[fe];
        if (!(z ? !!G.specialCauseTrendUp : !!G.specialCauseTrendDown)) break;
        Y(G) && pe++;
      }
      we = pe >= 2;
    }
    return { direction: X, detectedAt: O, firstFavourableCrossAt: de, persistedAcrossMean: we };
  }, [i, f]), te = q.useMemo(() => {
    if (!i || !i.length) return null;
    const j = (S) => {
      const z = [];
      let X = null, O = null;
      for (let Y = 0; Y < i.length; Y++) {
        const de = i[Y], we = typeof de[S] == "number" ? de[S] : null;
        if (we == null || isNaN(we)) {
          X !== null && O != null && (z.push({
            x1: A[X],
            x2: A[Y - 1],
            y: y(O)
          }), X = null, O = null);
          continue;
        }
        if (X === null) {
          X = Y, O = we;
          continue;
        }
        O != null && Math.abs(we - O) <= 1e-9 || (O != null && z.push({
          x1: A[X],
          x2: A[Y - 1],
          y: y(O)
        }), X = Y, O = we);
      }
      return X !== null && O != null && z.push({
        x1: A[X],
        x2: A[i.length - 1],
        y: y(O)
      }), z;
    };
    return {
      mean: j("mean"),
      ucl: j("upperProcessLimit"),
      lcl: j("lowerProcessLimit"),
      onePos: j("upperOneSigma"),
      oneNeg: j("lowerOneSigma"),
      twoPos: j("upperTwoSigma"),
      twoNeg: j("lowerTwoSigma")
    };
  }, [i, A, y]), V = q.useMemo(() => B.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs("linearGradient", { id: `${m.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    B.map((j, S) => {
      const z = `${m.current}-grad-${S}`;
      let X, O = 0.28, Y = 0.12, de = 0.045;
      switch (j.category) {
        case "concern":
          X = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", O = 0.28, Y = 0.12, de = 0.045;
          break;
        case "improvement":
          X = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", O = 0.26, Y = 0.11, de = 0.045;
          break;
        case "noJudgement":
          X = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", O = 0.26, Y = 0.11, de = 0.045;
          break;
        default:
          X = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: z, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: X, stopOpacity: O }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: X, stopOpacity: Y }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: X, stopOpacity: de })
      ] }, z);
    })
  ] }) : null, [B]), ce = q.useMemo(() => {
    if (!B.length) return null;
    const [j] = y.domain(), S = y(j), z = B.map((X, O) => {
      const { start: Y, end: de, category: we } = X;
      if (Y < 0 || de >= A.length || Y > de)
        return null;
      const pe = A[Y], fe = A[de];
      let G = "";
      if (we === "common") {
        const W = O > 0 ? B[O - 1] : null, ae = O < B.length - 1 ? B[O + 1] : null, oe = W ? A[W.end] : 0, F = W ? y(_[W.end].y) : S, Q = ae ? A[ae.start] : U, ee = ae ? y(_[ae.start].y) : S;
        G = `M ${oe} ${S}`, G += ` L ${oe} ${F}`;
        for (let K = Y; K <= de; K++)
          G += ` L ${A[K]} ${y(_[K].y)}`;
        G += ` L ${Q} ${ee}`, G += ` L ${Q} ${S} Z`;
      } else {
        const W = O > 0 ? B[O - 1] : null, ae = O < B.length - 1 ? B[O + 1] : null, oe = W && W.category !== "common", F = ae && ae.category !== "common", Q = y(_[Y].y), ee = y(_[de].y);
        let K = pe, Z = fe;
        if (oe) {
          const se = A[W.end], ie = y(_[W.end].y), _e = _[Y].y - _[W.end].y;
          h === "slope" && _e > 0 ? (G = `M ${se} ${ie} L ${pe} ${Q}`, K = se) : (G = `M ${pe} ${S} L ${pe} ${Q}`, K = pe);
        } else
          G = `M ${pe} ${S} L ${pe} ${Q}`;
        for (let se = Y + 1; se <= de; se++)
          G += ` L ${A[se]} ${y(_[se].y)}`;
        if (G += ` L ${fe} ${ee}`, F) {
          const se = A[ae.start], ie = y(_[ae.start].y), _e = _[ae.start].y - _[de].y;
          (h === "slope" && _e <= 0 || h === "extend") && (G += ` L ${se} ${ie}`, Z = se);
        }
        if (G += ` L ${Z} ${S}`, G += ` L ${K} ${S} Z`, h === "neutral" && oe) {
          const se = A[W.end], ie = y(_[W.end].y), _e = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${se} ${S} L ${se} ${ie} L ${pe} ${Q} L ${pe} ${S} Z`,
              fill: `url(#${m.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${O}`
          );
          return /* @__PURE__ */ n.jsxs("g", { children: [
            _e,
            /* @__PURE__ */ n.jsx(
              "path",
              {
                d: G,
                fill: `url(#${m.current}-grad-${O})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${O}`
            )
          ] }, `seq-group-${O}`);
        }
      }
      return /* @__PURE__ */ n.jsx(
        "path",
        {
          d: G,
          fill: `url(#${m.current}-grad-${O})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${O}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: z });
  }, [B, A, U, y, _, h]), ve = q.useMemo(() => {
    if (!c?.timeframe && _.length >= 2) {
      const j = _.map((de) => de.x instanceof Date ? de.x : new Date(de.x)), S = new Date(Math.min(...j.map((de) => de.getTime()))), z = new Date(Math.max(...j.map((de) => de.getTime()))), X = Math.round((z.getTime() - S.getTime()) / 864e5) || 0;
      if (X < 14)
        return `The chart shows a timeframe of ${X + 1} days`;
      const O = Math.round(X / 7);
      return O < 20 ? `The chart shows a timeframe of ${O} weeks` : `The chart shows a timeframe of ${(z.getFullYear() - S.getFullYear()) * 12 + (z.getMonth() - S.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, _]), le = (j) => {
    const S = j % 10, z = j % 100;
    return S === 1 && z !== 11 ? `${j}st` : S === 2 && z !== 12 ? `${j}nd` : S === 3 && z !== 13 ? `${j}rd` : `${j}th`;
  }, ue = (j) => `${le(j.getDate())} ${j.toLocaleString("en-GB", { month: "long" })}, ${j.getFullYear()}`, J = q.useCallback(
    ({
      index: j,
      x: S,
      y: z
    }) => {
      const X = i?.[j], O = S instanceof Date ? S : new Date(S), Y = ue(O), de = c?.measureUnit ? ` ${c.measureUnit}` : "", we = c?.measureName ? ` ${c.measureName}` : "";
      if (!X)
        return `General summary is: ${ve ? ve + ". " : ""}Point ${j + 1}, ${Y}, ${z}${de}${we}`;
      const pe = Or(X.variationIcon) || "Variation", fe = Wr(X), G = fe.length ? ` Rules: ${[...new Set(fe.map((ae) => Ht[ae].narration))].join("; ")}.` : " No special cause rules.", W = [];
      return c?.measureName && W.push(`Measure: ${c.measureName}.`), c?.datasetContext && W.push(`${c.datasetContext}.`), c?.organisation && W.push(`Organisation: ${c.organisation}.`), c?.additionalNote && W.push(c.additionalNote), [
        "General summary is:",
        ...W,
        `Point ${j + 1} recorded on `,
        Y + ",",
        `with a value of ${z} ${de}${we}`,
        pe + ".",
        G
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, ve]
  ), ne = q.useCallback(
    (j, S) => i?.[j] ? J({
      index: j,
      seriesId: "process",
      x: S.x instanceof Date ? S.x : new Date(S.x),
      y: S.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, J]
  );
  return /* @__PURE__ */ n.jsx(Qh, { children: /* @__PURE__ */ n.jsxs(
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
            width: N.xScale.range()[1] + 56 + 16,
            height: N.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(jo, { type: "x" }),
              /* @__PURE__ */ n.jsx(jo, { type: "y" }),
              /* @__PURE__ */ n.jsx(bh, { axis: "y" }),
              V,
              ce,
              T.map((j, S) => {
                const z = _[j];
                if (!z) return null;
                const X = C(z.x instanceof Date ? z.x : new Date(z.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: X,
                    x2: X,
                    y1: 0,
                    y2: y.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${S}`
                );
              }),
              te?.mean.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                te.mean.map((j, S) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__cl", x1: j.x1, x2: j.x2, y1: j.y, y2: j.y }, `mean-${S}`)),
                te.mean.map((j, S) => {
                  if (S === te.mean.length - 1) return null;
                  const z = te.mean[S + 1];
                  if (!z || j.y === z.y) return null;
                  const O = Math.max(4, z.x1 - j.x2 || 0) * 0.5, Y = `M ${j.x2},${j.y} C ${j.x2 + O},${j.y} ${z.x1 - O},${z.y} ${z.x1},${z.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: Y, fill: "none" }, `mean-join-${S}`);
                })
              ] }) : null,
              M != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ n.jsx(n.Fragment, {}),
              te?.ucl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                te.ucl.map((j, S) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: j.x1, x2: j.x2, y1: j.y, y2: j.y, strokeWidth: 2 }, `ucl-${S}`)),
                te.ucl.map((j, S) => {
                  if (S === te.ucl.length - 1) return null;
                  const z = te.ucl[S + 1];
                  if (!z || j.y === z.y) return null;
                  const O = Math.max(4, z.x1 - j.x2 || 0) * 0.5, Y = `M ${j.x2},${j.y} C ${j.x2 + O},${j.y} ${z.x1 - O},${z.y} ${z.x1},${z.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: Y, fill: "none", strokeWidth: 2 }, `ucl-join-${S}`);
                })
              ] }) : null,
              te?.lcl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                te.lcl.map((j, S) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: j.x1, x2: j.x2, y1: j.y, y2: j.y, strokeWidth: 2 }, `lcl-${S}`)),
                te.lcl.map((j, S) => {
                  if (S === te.lcl.length - 1) return null;
                  const z = te.lcl[S + 1];
                  if (!z || j.y === z.y) return null;
                  const O = Math.max(4, z.x1 - j.x2 || 0) * 0.5, Y = `M ${j.x2},${j.y} C ${j.x2 + O},${j.y} ${z.x1 - O},${z.y} ${z.x1},${z.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: Y, fill: "none", strokeWidth: 2 }, `lcl-join-${S}`);
                })
              ] }) : null,
              M != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: C.range()[1],
                    y1: y(M),
                    y2: y(M),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: C.range()[0] - 7,
                    y: y(M) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      M,
                      " ",
                      x || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && te && te.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                te.onePos.map((j, S) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: j.x1,
                    x2: j.x2,
                    y1: j.y,
                    y2: j.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${S}`
                )),
                te.oneNeg.map((j, S) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: j.x1,
                    x2: j.x2,
                    y1: j.y,
                    y2: j.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${S}`
                )),
                te.twoPos.map((j, S) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: j.x1,
                    x2: j.x2,
                    y1: j.y,
                    y2: j.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${S}`
                )),
                te.twoNeg.map((j, S) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: j.x1,
                    x2: j.x2,
                    y1: j.y,
                    y2: j.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${S}`
                ))
              ] }),
              H && (D || R || $) && (() => {
                const j = H.detectedAt, S = H.firstFavourableCrossAt, z = _[j] ? C(_[j].x instanceof Date ? _[j].x : new Date(_[j].x)) : null, X = _[j] ? y(_[j].y) : null, O = S != null && _[S] ? C(_[S].x instanceof Date ? _[S].x : new Date(_[S].x)) : null, Y = S != null && _[S] ? y(_[S].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  $ && z != null && X != null && O != null && Y != null && /* @__PURE__ */ n.jsx("line", { x1: z, y1: X, x2: O, y2: Y, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  D && z != null && X != null && /* @__PURE__ */ n.jsx("circle", { cx: z, cy: X, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend start (run reached N)" }) }),
                  R && O != null && Y != null && /* @__PURE__ */ n.jsx("circle", { cx: O, cy: Y, r: 5, fill: "#555", children: /* @__PURE__ */ n.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ n.jsx(
                ep,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (j) => j.x instanceof Date ? j.x : new Date(j.x),
                  smooth: !1,
                  strokeWidth: g
                }
              ),
              t && _.map((j, S) => {
                const z = C(j.x instanceof Date ? j.x : new Date(j.x)), X = y(j.y), O = k.has(S), Y = v?.[S], de = I === "ungated" && !!Y?.special && Y?.variation === He.Neither && f != null && f !== Ae.Neither, we = de && (Y?.trendUp && f === Ae.Up || Y?.trendDown && f === Ae.Down), pe = de && (Y?.trendUp && f === Ae.Down || Y?.trendDown && f === Ae.Up), fe = !!(Y?.improvement || we), G = !!(Y?.concern || pe), W = [
                  "fdp-spc__point",
                  O && o ? "fdp-spc__point--ooc" : null,
                  l && Y?.special && G ? "fdp-spc__point--sc-concern" : null,
                  l && Y?.special && fe ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && p && Y?.special && Y.variation === He.Neither && !fe && !G ? "fdp-spc__point--sc-no-judgement" : null,
                  Y?.assurance === xt.Pass ? "fdp-spc__point--assurance-pass" : null,
                  Y?.assurance === xt.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ae = `Point ${S + 1} value ${j.y}` + (Y?.special ? " special cause" : "") + (Y?.variation === He.Improvement ? " improving" : Y?.variation === He.Concern ? " concern" : ""), oe = E?.focused?.index === S;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: z,
                    cy: X,
                    r: 5,
                    className: W,
                    "data-variation": Y?.variation,
                    "data-assurance": Y?.assurance,
                    "aria-label": ae,
                    ...oe ? { "aria-describedby": `spc-tooltip-${S}` } : {}
                  },
                  S
                );
              }),
              d && l && v && _.map((j, S) => {
                const z = v[S];
                if (!z || !(z.concern || z.improvement)) return null;
                const X = C(j.x instanceof Date ? j.x : new Date(j.x)), O = y(j.y);
                let Y = O - 10;
                const de = 12, we = y.range()[0] - 4;
                Y < de && (Y = Math.min(O + 16, we));
                const pe = C.range()[1], fe = Math.min(Math.max(X, 0), pe - 0);
                return /* @__PURE__ */ n.jsx(
                  "text",
                  {
                    x: fe,
                    y: Y,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${z.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: z.concern ? "!" : "★"
                  },
                  `icon-${S}`
                );
              }),
              b && /* @__PURE__ */ n.jsx(
                $p,
                {
                  width: C.range()[1],
                  height: y.range()[0]
                }
              ),
              /* @__PURE__ */ n.jsx(
                Yi,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: ne,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (j) => ue(j),
                  enableNeutralNoJudgement: p,
                  showTrendGatingExplanation: P
                }
              )
            ] })
          }
        ),
        L && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          jp,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: x || c?.measureUnit
          }
        ) }),
        r && /* @__PURE__ */ n.jsx(
          tp,
          {
            format: (j) => J({ ...j, x: j.x instanceof Date ? j.x : new Date(j.x) })
          }
        )
      ]
    }
  ) });
}, $p = ({
  width: e,
  height: t
}) => {
  const r = Pt();
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
}, Mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: zt,
  Direction: je,
  MetricPolarity: Ye,
  SPCAssuranceIcon: Vr,
  SPCVariationIcon: Gr,
  VariationJudgement: nt,
  VariationState: Le,
  getVariationColour: Cs,
  getVariationTrend: Ur
}, Symbol.toStringTag, { value: "Module" })), lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: xt,
  AssuranceResult: zt,
  BaselineSuggestionReason: Ui,
  ChartType: _s,
  Direction: je,
  Icons: Mp,
  ImprovementDirection: Ae,
  MetricPolarity: Ye,
  RULE_METADATA: dr,
  SPCAssuranceIcon: Vr,
  SPCChart: Tp,
  SPCTooltipOverlay: Yi,
  SPCVariationIcon: Gr,
  SpcWarningCategory: Wi,
  SpcWarningCode: Oi,
  SpcWarningSeverity: Bt,
  VARIATION_COLOR_TOKENS: ct,
  VariationIcon: He,
  VariationJudgement: nt,
  VariationState: Le,
  buildSpc: Ss,
  extractRuleIds: Wr,
  getVariationColorHex: bp,
  getVariationColorToken: Vi,
  getVariationColour: Cs,
  getVariationTrend: Ur,
  normaliseSpcSettings: Gi,
  ruleGlossary: Ht,
  variationLabel: Or
}, Symbol.toStringTag, { value: "Module" })), Ip = "150ms", Lp = "300ms", Fp = "500ms", Pp = "cubic-bezier(0.4, 0, 1, 1)", Ep = "cubic-bezier(0, 0, 0.2, 1)", Ap = "cubic-bezier(0.4, 0, 0.2, 1)", Rp = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Bp = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Hp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", zp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Wp = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Op = "1px", Up = "2px", Gp = "4px", Vp = "4px", Yp = "4px", qp = "2px", Xp = "1px", Kp = "0px", Zp = "4px", Jp = "8px", Qp = "12px", Ki = "#d8dde0", Zi = "#4c6272", Ji = "#d8dde0", Qi = "#aeb7bd", el = "#d5281b", tl = "#005eb8", nl = "#ffffff", rl = "#212b32", al = "#007f3b", sl = "#330072", ol = "#7c2855", il = "#d5281b", ll = "#ffeb3b", cl = "#fff9c4", dl = "#ffb81c", ul = "#ed8b00", fl = "#00a499", hl = "#ae2573", pl = "#4c6272", ml = "#768692", gl = "#aeb7bd", xl = "#d8dde0", bl = "#f0f4f5", em = "#212b32", tm = "#4c6272", nm = "#ffffff", rm = "#212b32", am = "#005eb8", sm = "#7c2855", om = "#003087", im = "#330072", lm = "#ffeb3b", cm = "#212b32", dm = "#d8dde0", um = "#ffffff33", fm = "#d5281b", hm = "#4c6272", pm = "#ffffff", mm = "#007f3b", gm = "#ffffff", xm = "#006530", bm = "#004021", ym = "#004021", vm = "#00000000", _m = "#ffffff", wm = "#005eb8", Sm = "#005eb8", km = "#d9e5f2", Cm = "#c7daf0", jm = "#005eb8", Nm = "#ffffff", Tm = "#212b32", Dm = "#d9dde0", $m = "#b3bcc2", Mm = "#b3bcc2", Im = "#d5281b", Lm = "#aa2016", Fm = "#6a140e", Pm = "#6a140e", Em = "#005eb8", Am = "#004b93", Rm = "#002f5c", Bm = "#002f5c", Hm = "8px", zm = "16px", Wm = "12px", Om = "16px", Um = "4px", Gm = "40px", Vm = "4px", Ym = "40px", qm = "12px", Xm = "16px", Km = "32px", Zm = "16px", Jm = "20px", Qm = "28px", eg = "9px", tg = "2px", ng = "16px", rg = "24px", ag = "8px", sg = "24px", og = "16px", ig = "4px", lg = "4px", cg = "4px", dg = "8px", ug = "4px", fg = "16px", hg = "#007f3b", pg = "#006530", mg = "#004021", gg = "#d8dde0", xg = "#ffffff", bg = "#768692", yg = "#00000000", vg = "#ffeb3b", _g = "#00000000", wg = "#ffffff", Sg = "#d9e5f2", kg = "#c7daf0", Cg = "#005eb8", jg = "#005eb8", yl = "8px", vl = "16px", _l = "12px", wl = "16px", Ng = "2px", Tg = "4px", Dg = "4px", $g = "600", Mg = "#ffffff", Ig = "#d8dde0", Lg = "#aeb7bd", Fg = "#f0f4f5", Pg = "#212b32", Eg = "#212b32", Ag = "#005eb8", Sl = "16px", kl = "32px", Cl = "16px", Rg = "1px", Bg = "4px", Hg = "none", zg = "0 2px 4px rgba(0, 0, 0, 0.1)", Wg = "#ffffff", Og = "#ffffff", Ug = "#d8dde0", Gg = "#ffffff", Vg = "#4c6272", Yg = "#ffeb3b", qg = "#d5281b", Xg = "#aeb7bd", Kg = "#212b32", Zg = "#4c6272", Jg = "#768692", Qg = "#212b32", e0 = "#ffffff", t0 = "600", n0 = "#d5281b", r0 = "600", a0 = "#4c6272", jl = "4px", Nl = "40px", Tl = "40px", Dl = "12px", s0 = "2px", o0 = "4px", i0 = "0px", l0 = "16px", c0 = "18px", d0 = "24px", u0 = "32px", f0 = "34px", h0 = "32px", p0 = "40px", m0 = "48px", g0 = "5.4ex", x0 = "7.2ex", b0 = "9ex", y0 = "10.8ex", v0 = "20ex", _0 = "38ex", w0 = "56ex", S0 = "44px", k0 = "40px", C0 = "1020px", j0 = "100%", N0 = "50%", T0 = "33.333%", D0 = "25%", $0 = "20%", M0 = "320px", I0 = "641px", L0 = "1025px", F0 = "1280px", P0 = "960px", E0 = "32px", A0 = "16px", R0 = "#d5281b", B0 = "#d5281b", H0 = "#ffffff", z0 = "#007f3b", W0 = "#007f3b", O0 = "#ffffff", U0 = "#ffeb3b", G0 = "#ffeb3b", V0 = "#212b32", Y0 = "#005eb8", q0 = "#005eb8", X0 = "#ffffff", K0 = "#d8dde0", Z0 = "#aeb7bd", J0 = "#768692", Q0 = "0 4px 0 #004021", ex = "0 4px 0 #005eb8", tx = "0 4px 0 #6a140e", nx = "0 4px 0 #ffeb3b", rx = "none", ax = "0 2px 4px rgba(0, 0, 0, 0.1)", sx = "4px", ox = "0px", ix = "solid", lx = "0 0 0 3px #ffeb3b", cx = "0 0 0 3px #ffeb3b", dx = "none", ux = "0 1px 3px rgba(0, 0, 0, 0.12)", fx = "0 2px 6px rgba(0, 0, 0, 0.16)", hx = "0 4px 12px rgba(0, 0, 0, 0.20)", $l = "0", Ml = "4px", Il = "8px", Ll = "16px", Fl = "24px", Pl = "32px", El = "40px", Al = "48px", Rl = "56px", Bl = "64px", Ra = "0", Ba = "0", Ha = "4px", za = "4px", Wa = "8px", Oa = "8px", Ua = "8px", Ga = "16px", Va = "16px", Ya = "24px", qa = "24px", Xa = "32px", Ka = "32px", Za = "40px", Ja = "40px", Qa = "48px", es = "48px", ts = "56px", ns = "56px", rs = "64px", ur = "Frutiger W01", fr = "Arial, Helvetica, sans-serif", hr = "sans-serif", pr = "400", mr = "600", gr = "400", xr = "12px", br = "14px", yr = "12pt", vr = "14px", _r = "16px", wr = "12pt", Sr = "16px", kr = "19px", Cr = "13pt", jr = "19px", Nr = "22px", Tr = "15pt", Dr = "22px", $r = "26px", Mr = "17pt", Ir = "27px", Lr = "36px", Fr = "20pt", Pr = "33px", Er = "48px", Ar = "24pt", as = "16px", ss = "24px", vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, _t = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, St = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Nt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Tt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Dt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, px = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Ip,
  AnimationDurationNormal: Lp,
  AnimationDurationSlow: Fp,
  AnimationEasingBounce: Rp,
  AnimationEasingEaseIn: Pp,
  AnimationEasingEaseInOut: Ap,
  AnimationEasingEaseOut: Ep,
  BorderColorCard: Ji,
  BorderColorCardHover: Qi,
  BorderColorDefault: Ki,
  BorderColorError: el,
  BorderColorForm: Zi,
  BorderRadiusLarge: Qp,
  BorderRadiusMedium: Jp,
  BorderRadiusNone: Kp,
  BorderRadiusSmall: Zp,
  BorderWidthCardBottom: Vp,
  BorderWidthDefault: Op,
  BorderWidthFormElement: Up,
  BorderWidthFormElementError: Gp,
  BorderWidthPanel: Yp,
  BorderWidthTableCell: Xp,
  BorderWidthTableHeader: qp,
  BreakpointDesktop: L0,
  BreakpointLargeDesktop: F0,
  BreakpointMobile: M0,
  BreakpointTablet: I0,
  ButtonBorderRadius: Tg,
  ButtonBorderWidth: Ng,
  ButtonPrimaryBackgroundActive: mg,
  ButtonPrimaryBackgroundDefault: hg,
  ButtonPrimaryBackgroundDisabled: gg,
  ButtonPrimaryBackgroundHover: pg,
  ButtonPrimaryBorderDefault: yg,
  ButtonPrimaryBorderFocus: vg,
  ButtonPrimaryTextDefault: xg,
  ButtonPrimaryTextDisabled: bg,
  ButtonSecondaryBackgroundActive: kg,
  ButtonSecondaryBackgroundDefault: _g,
  ButtonSecondaryBackgroundHover: Sg,
  ButtonSecondaryBackgroundSolid: wg,
  ButtonSecondaryBorderDefault: jg,
  ButtonSecondaryTextDefault: Cg,
  ButtonShadowSize: Dg,
  ButtonSpacingPaddingHorizontalDesktop: wl,
  ButtonSpacingPaddingHorizontalMobile: vl,
  ButtonSpacingPaddingVerticalDesktop: _l,
  ButtonSpacingPaddingVerticalMobile: yl,
  ButtonTypographyWeight: $g,
  CardBackgroundDefault: Mg,
  CardBorderBottom: Fg,
  CardBorderDefault: Ig,
  CardBorderHover: Lg,
  CardBorderWidthBottom: Bg,
  CardBorderWidthDefault: Rg,
  CardShadowDefault: Hg,
  CardShadowHover: zg,
  CardSpacingHeadingMargin: Cl,
  CardSpacingPaddingDesktop: kl,
  CardSpacingPaddingMobile: Sl,
  CardTextDescription: Eg,
  CardTextHeading: Pg,
  CardTextLink: Ag,
  ColorBorderDefault: dm,
  ColorBorderSecondary: um,
  ColorButtonLoginActive: Rm,
  ColorButtonLoginBackground: Em,
  ColorButtonLoginHover: Am,
  ColorButtonLoginShadow: Bm,
  ColorButtonPrimaryActive: bm,
  ColorButtonPrimaryBackground: mm,
  ColorButtonPrimaryHover: xm,
  ColorButtonPrimaryShadow: ym,
  ColorButtonPrimaryText: gm,
  ColorButtonReverseActive: $m,
  ColorButtonReverseBackground: Nm,
  ColorButtonReverseHover: Dm,
  ColorButtonReverseShadow: Mm,
  ColorButtonReverseText: Tm,
  ColorButtonSecondaryActive: Cm,
  ColorButtonSecondaryBackground: vm,
  ColorButtonSecondaryBackgroundSolid: _m,
  ColorButtonSecondaryBorder: wm,
  ColorButtonSecondaryHover: km,
  ColorButtonSecondaryShadow: jm,
  ColorButtonSecondaryText: Sm,
  ColorButtonWarningActive: Fm,
  ColorButtonWarningBackground: Im,
  ColorButtonWarningHover: Lm,
  ColorButtonWarningShadow: Pm,
  ColorError: fm,
  ColorFocusBackground: lm,
  ColorFocusText: cm,
  ColorFormBackground: pm,
  ColorFormBorder: hm,
  ColorGrey1: pl,
  ColorGrey2: ml,
  ColorGrey3: gl,
  ColorGrey4: xl,
  ColorGrey5: bl,
  ColorLinkActive: om,
  ColorLinkDefault: am,
  ColorLinkHover: sm,
  ColorLinkVisited: im,
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
  ColorTextPrimary: em,
  ColorTextPrint: rm,
  ColorTextReverse: nm,
  ColorTextSecondary: tm,
  ComponentBlur: lg,
  ComponentBreadcrumbChevronMarginLeft: eg,
  ComponentBreadcrumbChevronMarginRight: tg,
  ComponentBreadcrumbPaddingTopDesktop: rg,
  ComponentBreadcrumbPaddingTopMobile: ng,
  ComponentButtonPaddingDesktopHorizontal: Om,
  ComponentButtonPaddingDesktopVertical: Wm,
  ComponentButtonPaddingMobileHorizontal: zm,
  ComponentButtonPaddingMobileVertical: Hm,
  ComponentButtonShadowSize: Um,
  ComponentCardHeadingMargin: Zm,
  ComponentCardPaddingDesktop: Km,
  ComponentCardPaddingMobile: Xm,
  ComponentDetails: dg,
  ComponentExpander: ug,
  ComponentFormCheckboxLabelPadding: qm,
  ComponentFormCheckboxSize: Ym,
  ComponentFormInputMinHeight: Gm,
  ComponentFormInputPadding: Vm,
  ComponentLink: cg,
  ComponentPagination: fg,
  ComponentPanelPaddingDesktop: Qm,
  ComponentPanelPaddingMobile: Jm,
  ComponentSpread: ig,
  ComponentSummaryListCellPaddingHorizontal: sg,
  ComponentSummaryListCellPaddingVertical: ag,
  ComponentSummaryListRowMargin: og,
  ElevationHigh: hx,
  ElevationLow: ux,
  ElevationMedium: fx,
  ElevationNone: dx,
  FocusOutlineOffset: ox,
  FocusOutlineStyle: ix,
  FocusOutlineWidth: sx,
  FocusShadowButton: cx,
  FocusShadowInput: lx,
  FontFamilyBase: ur,
  FontFamilyFallback: fr,
  FontFamilyPrint: hr,
  FontLineHeightBase: ss,
  FontSize14Mobile: xr,
  FontSize14Print: yr,
  FontSize14Tablet: br,
  FontSize16Mobile: vr,
  FontSize16Print: wr,
  FontSize16Tablet: _r,
  FontSize19Mobile: Sr,
  FontSize19Print: Cr,
  FontSize19Tablet: kr,
  FontSize22Mobile: jr,
  FontSize22Print: Tr,
  FontSize22Tablet: Nr,
  FontSize26Mobile: Dr,
  FontSize26Print: Mr,
  FontSize26Tablet: $r,
  FontSize36Mobile: Ir,
  FontSize36Print: Fr,
  FontSize36Tablet: Lr,
  FontSize48Mobile: Pr,
  FontSize48Print: Ar,
  FontSize48Tablet: Er,
  FontSizeBase: as,
  FontWeightBold: mr,
  FontWeightLight: gr,
  FontWeightNormal: pr,
  FormBorderRadius: i0,
  FormBorderWidthDefault: s0,
  FormBorderWidthError: o0,
  FormErrorTextDefault: n0,
  FormErrorTypographyWeight: r0,
  FormHintTextDefault: a0,
  FormInputBackgroundDefault: Wg,
  FormInputBackgroundDisabled: Ug,
  FormInputBackgroundError: Gg,
  FormInputBackgroundFocus: Og,
  FormInputBorderDefault: Vg,
  FormInputBorderDisabled: Xg,
  FormInputBorderError: qg,
  FormInputBorderFocus: Yg,
  FormInputTextDefault: Kg,
  FormInputTextDisabled: Jg,
  FormInputTextPlaceholder: Zg,
  FormLabelTextDefault: Qg,
  FormLabelTextRequired: e0,
  FormLabelTypographyWeight: t0,
  FormSpacingCheckboxLabelPadding: Dl,
  FormSpacingCheckboxSize: Tl,
  FormSpacingInputMinHeight: Nl,
  FormSpacingInputPadding: jl,
  GridGutter: E0,
  GridGutterHalf: A0,
  GridPageWidth: P0,
  HeadingsNhsukHeadingL: _t,
  HeadingsNhsukHeadingM: wt,
  HeadingsNhsukHeadingS: St,
  HeadingsNhsukHeadingXl: vt,
  HeadingsNhsukHeadingXs: kt,
  LayoutColumnActions: $0,
  LayoutColumnFull: j0,
  LayoutColumnHalf: N0,
  LayoutColumnQuarter: D0,
  LayoutColumnThird: T0,
  LayoutContainerMaxWidth: C0,
  ParagraphsBody: Ct,
  ParagraphsBodyLarge: jt,
  ParagraphsBodySmall: Nt,
  ParagraphsLedeText: Tt,
  ParagraphsLedeTextSmall: Dt,
  ShadowButtonDefault: Q0,
  ShadowButtonFocus: nx,
  ShadowButtonSecondary: ex,
  ShadowButtonWarning: tx,
  ShadowCardDefault: rx,
  ShadowCardHover: ax,
  SizeButtonMinHeightDesktop: k0,
  SizeButtonMinHeightMobile: S0,
  SizeFormControlLarge: m0,
  SizeFormControlMedium: p0,
  SizeFormControlSmall: h0,
  SizeFormInputWidth2xl: _0,
  SizeFormInputWidth3xl: w0,
  SizeFormInputWidthLg: y0,
  SizeFormInputWidthMd: b0,
  SizeFormInputWidthSm: x0,
  SizeFormInputWidthXl: v0,
  SizeFormInputWidthXs: g0,
  SizeIconExtraLarge: u0,
  SizeIconLarge: d0,
  SizeIconMedium: c0,
  SizeIconNhsDefault: f0,
  SizeIconSmall: l0,
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
  SpacingResponsive0Mobile: Ra,
  SpacingResponsive0Tablet: Ba,
  SpacingResponsive1Mobile: Ha,
  SpacingResponsive1Tablet: za,
  SpacingResponsive2Mobile: Wa,
  SpacingResponsive2Tablet: Oa,
  SpacingResponsive3Mobile: Ua,
  SpacingResponsive3Tablet: Ga,
  SpacingResponsive4Mobile: Va,
  SpacingResponsive4Tablet: Ya,
  SpacingResponsive5Mobile: qa,
  SpacingResponsive5Tablet: Xa,
  SpacingResponsive6Mobile: Ka,
  SpacingResponsive6Tablet: Za,
  SpacingResponsive7Mobile: Ja,
  SpacingResponsive7Tablet: Qa,
  SpacingResponsive8Mobile: es,
  SpacingResponsive8Tablet: ts,
  SpacingResponsive9Mobile: ns,
  SpacingResponsive9Tablet: rs,
  StateDisabledBackground: K0,
  StateDisabledBorder: Z0,
  StateDisabledText: J0,
  StateErrorBackground: R0,
  StateErrorBorder: B0,
  StateErrorText: H0,
  StateInfoBackground: Y0,
  StateInfoBorder: q0,
  StateInfoText: X0,
  StateSuccessBackground: z0,
  StateSuccessBorder: W0,
  StateSuccessText: O0,
  StateWarningBackground: U0,
  StateWarningBorder: G0,
  StateWarningText: V0,
  TransitionButtonDefault: Bp,
  TransitionButtonShadow: Hp,
  TransitionCardHover: Wp,
  TransitionInputFocus: zp
}, Symbol.toStringTag, { value: "Module" })), cb = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), db = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), ub = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), fb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), hb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), pb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), mb = ({
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
), gb = ({
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
), xb = ({
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
), bb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), yb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), vb = () => Me(() => px, []), _b = () => Me(() => ({
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
}), []), wb = () => Me(() => ({
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
}), []), Sb = () => Me(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: xr,
    Size16: vr,
    Size19: Sr,
    Size22: jr,
    Size26: Dr,
    Size36: Ir,
    Size48: Pr
  },
  Tablet: {
    Size14: br,
    Size16: _r,
    Size19: kr,
    Size22: Nr,
    Size26: $r,
    Size36: Lr,
    Size48: Er
  },
  Print: {
    Size14: yr,
    Size16: wr,
    Size19: Cr,
    Size22: Tr,
    Size26: Mr,
    Size36: Fr,
    Size48: Ar
  },
  Family: {
    Base: ur,
    Fallback: fr,
    Print: hr
  },
  Weight: {
    Normal: pr,
    Bold: mr,
    Light: gr
  },
  Base: {
    Size: as,
    LineHeight: ss
  },
  // Backward compatibility - individual exports
  FontFamilyBase: ur,
  FontFamilyFallback: fr,
  FontFamilyPrint: hr,
  FontWeightNormal: pr,
  FontWeightBold: mr,
  FontWeightLight: gr,
  FontSize14Mobile: xr,
  FontSize14Tablet: br,
  FontSize14Print: yr,
  FontSize16Mobile: vr,
  FontSize16Tablet: _r,
  FontSize16Print: wr,
  FontSize19Mobile: Sr,
  FontSize19Tablet: kr,
  FontSize19Print: Cr,
  FontSize22Mobile: jr,
  FontSize22Tablet: Nr,
  FontSize22Print: Tr,
  FontSize26Mobile: Dr,
  FontSize26Tablet: $r,
  FontSize26Print: Mr,
  FontSize36Mobile: Ir,
  FontSize36Tablet: Lr,
  FontSize36Print: Fr,
  FontSize48Mobile: Pr,
  FontSize48Tablet: Er,
  FontSize48Print: Ar,
  FontSizeBase: as,
  FontLineHeightBase: ss
}), []), kb = () => Me(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Ra,
    Size1: Ha,
    Size2: Wa,
    Size3: Ua,
    Size4: Va,
    Size5: qa,
    Size6: Ka,
    Size7: Ja,
    Size8: es,
    Size9: ns
  },
  Tablet: {
    Size0: Ba,
    Size1: za,
    Size2: Oa,
    Size3: Ga,
    Size4: Ya,
    Size5: Xa,
    Size6: Za,
    Size7: Qa,
    Size8: ts,
    Size9: rs
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Ra,
  SpacingResponsive0Tablet: Ba,
  SpacingResponsive1Mobile: Ha,
  SpacingResponsive1Tablet: za,
  SpacingResponsive2Mobile: Wa,
  SpacingResponsive2Tablet: Oa,
  SpacingResponsive3Mobile: Ua,
  SpacingResponsive3Tablet: Ga,
  SpacingResponsive4Mobile: Va,
  SpacingResponsive4Tablet: Ya,
  SpacingResponsive5Mobile: qa,
  SpacingResponsive5Tablet: Xa,
  SpacingResponsive6Mobile: Ka,
  SpacingResponsive6Tablet: Za,
  SpacingResponsive7Mobile: Ja,
  SpacingResponsive7Tablet: Qa,
  SpacingResponsive8Mobile: es,
  SpacingResponsive8Tablet: ts,
  SpacingResponsive9Mobile: ns,
  SpacingResponsive9Tablet: rs
}), []), Cb = () => Me(() => ({
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
}), []), jb = () => Me(() => ({
  xl: vt,
  l: _t,
  m: wt,
  s: St,
  xs: kt
}), []), Nb = () => Me(() => ({
  body: Ct,
  bodyLarge: jt,
  bodySmall: Nt,
  ledeText: Tt,
  ledeTextSmall: Dt
}), []), Tb = () => Me(() => ({
  headings: {
    xl: vt,
    l: _t,
    m: wt,
    s: St,
    xs: kt
  },
  paragraphs: {
    body: Ct,
    bodyLarge: jt,
    bodySmall: Nt,
    ledeText: Tt,
    ledeTextSmall: Dt
  },
  fonts: {
    family: {
      base: ur,
      fallback: fr,
      print: hr
    },
    weight: {
      normal: pr,
      bold: mr,
      light: gr
    },
    sizes: {
      mobile: {
        size14: xr,
        size16: vr,
        size19: Sr,
        size22: jr,
        size26: Dr,
        size36: Ir,
        size48: Pr
      },
      tablet: {
        size14: br,
        size16: _r,
        size19: kr,
        size22: Nr,
        size26: $r,
        size36: Lr,
        size48: Er
      },
      print: {
        size14: yr,
        size16: wr,
        size19: Cr,
        size22: Tr,
        size26: Mr,
        size36: Fr,
        size48: Ar
      }
    }
  }
}), []);
function Db(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, s] = q.useState(t), o = q.useCallback(() => s("three-column"), []), i = q.useCallback(() => s((d) => d === "three-column" ? r : d), [r]), l = q.useCallback(() => s((d) => d === "three-column" ? r : "three-column"), [r]);
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
function $b(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Hl, ...e }, a = [];
  return r?.includes(400) && a.push(`
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
}`), r?.includes(600) && a.push(`
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
function Mb(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Hl, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${rt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${rt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${rt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${rt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const Ib = '"Frutiger W01", Arial, Helvetica, sans-serif', Lb = "Arial, Helvetica, sans-serif";
async function Fb() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  lc as Account,
  yx as ActionLink,
  qx as AdaptiveDataGrid,
  Ip as AnimationDurationFast,
  Lp as AnimationDurationNormal,
  Fp as AnimationDurationSlow,
  Rp as AnimationEasingBounce,
  Pp as AnimationEasingEaseIn,
  Ap as AnimationEasingEaseInOut,
  Ep as AnimationEasingEaseOut,
  fi as AppointmentCard,
  nb as AreaSeriesPrimitive,
  vf as AriaDataGrid,
  Ta as AriaTabsDataGrid,
  qx as AriaTabsDataGridAdaptive,
  jo as Axis,
  _a as BackLink,
  ab as BandScalesProvider,
  rb as BarSeriesPrimitive,
  Ji as BorderColorCard,
  Qi as BorderColorCardHover,
  Ki as BorderColorDefault,
  el as BorderColorError,
  Zi as BorderColorForm,
  Qp as BorderRadiusLarge,
  Jp as BorderRadiusMedium,
  Kp as BorderRadiusNone,
  Zp as BorderRadiusSmall,
  Vp as BorderWidthCardBottom,
  Op as BorderWidthDefault,
  Up as BorderWidthFormElement,
  Gp as BorderWidthFormElementError,
  Yp as BorderWidthPanel,
  Xp as BorderWidthTableCell,
  qp as BorderWidthTableHeader,
  rf as Breadcrumb,
  L0 as BreakpointDesktop,
  F0 as BreakpointLargeDesktop,
  M0 as BreakpointMobile,
  I0 as BreakpointTablet,
  tt as Button,
  Tg as ButtonBorderRadius,
  Ng as ButtonBorderWidth,
  mg as ButtonPrimaryBackgroundActive,
  hg as ButtonPrimaryBackgroundDefault,
  gg as ButtonPrimaryBackgroundDisabled,
  pg as ButtonPrimaryBackgroundHover,
  yg as ButtonPrimaryBorderDefault,
  vg as ButtonPrimaryBorderFocus,
  xg as ButtonPrimaryTextDefault,
  bg as ButtonPrimaryTextDisabled,
  kg as ButtonSecondaryBackgroundActive,
  _g as ButtonSecondaryBackgroundDefault,
  Sg as ButtonSecondaryBackgroundHover,
  wg as ButtonSecondaryBackgroundSolid,
  jg as ButtonSecondaryBorderDefault,
  Cg as ButtonSecondaryTextDefault,
  Dg as ButtonShadowSize,
  wl as ButtonSpacingPaddingHorizontalDesktop,
  vl as ButtonSpacingPaddingHorizontalMobile,
  _l as ButtonSpacingPaddingVerticalDesktop,
  yl as ButtonSpacingPaddingVerticalMobile,
  $g as ButtonTypographyWeight,
  ii as Card,
  Mg as CardBackgroundDefault,
  Fg as CardBorderBottom,
  Ig as CardBorderDefault,
  Lg as CardBorderHover,
  Bg as CardBorderWidthBottom,
  Rg as CardBorderWidthDefault,
  Ex as CardGroup,
  Ax as CardGroupItem,
  Hg as CardShadowDefault,
  zg as CardShadowHover,
  Cl as CardSpacingHeadingMargin,
  kl as CardSpacingPaddingDesktop,
  Sl as CardSpacingPaddingMobile,
  Eg as CardTextDescription,
  Pg as CardTextHeading,
  Ag as CardTextLink,
  Rx as CareCard,
  vx as CharacterCount,
  ob as ChartEnhancer,
  sb as ChartNoScript,
  gh as ChartRoot,
  hc as Checkbox,
  gc as Checkboxes,
  dm as ColorBorderDefault,
  um as ColorBorderSecondary,
  Rm as ColorButtonLoginActive,
  Em as ColorButtonLoginBackground,
  Am as ColorButtonLoginHover,
  Bm as ColorButtonLoginShadow,
  bm as ColorButtonPrimaryActive,
  mm as ColorButtonPrimaryBackground,
  xm as ColorButtonPrimaryHover,
  ym as ColorButtonPrimaryShadow,
  gm as ColorButtonPrimaryText,
  $m as ColorButtonReverseActive,
  Nm as ColorButtonReverseBackground,
  Dm as ColorButtonReverseHover,
  Mm as ColorButtonReverseShadow,
  Tm as ColorButtonReverseText,
  Cm as ColorButtonSecondaryActive,
  vm as ColorButtonSecondaryBackground,
  _m as ColorButtonSecondaryBackgroundSolid,
  wm as ColorButtonSecondaryBorder,
  km as ColorButtonSecondaryHover,
  jm as ColorButtonSecondaryShadow,
  Sm as ColorButtonSecondaryText,
  Fm as ColorButtonWarningActive,
  Im as ColorButtonWarningBackground,
  Lm as ColorButtonWarningHover,
  Pm as ColorButtonWarningShadow,
  fm as ColorError,
  lm as ColorFocusBackground,
  cm as ColorFocusText,
  pm as ColorFormBackground,
  hm as ColorFormBorder,
  pl as ColorGrey1,
  ml as ColorGrey2,
  gl as ColorGrey3,
  xl as ColorGrey4,
  bl as ColorGrey5,
  om as ColorLinkActive,
  am as ColorLinkDefault,
  sm as ColorLinkHover,
  im as ColorLinkVisited,
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
  em as ColorTextPrimary,
  rm as ColorTextPrint,
  nm as ColorTextReverse,
  tm as ColorTextSecondary,
  jn as Column,
  lg as ComponentBlur,
  eg as ComponentBreadcrumbChevronMarginLeft,
  tg as ComponentBreadcrumbChevronMarginRight,
  rg as ComponentBreadcrumbPaddingTopDesktop,
  ng as ComponentBreadcrumbPaddingTopMobile,
  Om as ComponentButtonPaddingDesktopHorizontal,
  Wm as ComponentButtonPaddingDesktopVertical,
  zm as ComponentButtonPaddingMobileHorizontal,
  Hm as ComponentButtonPaddingMobileVertical,
  Um as ComponentButtonShadowSize,
  Zm as ComponentCardHeadingMargin,
  Km as ComponentCardPaddingDesktop,
  Xm as ComponentCardPaddingMobile,
  dg as ComponentDetails,
  ug as ComponentExpander,
  qm as ComponentFormCheckboxLabelPadding,
  Ym as ComponentFormCheckboxSize,
  Gm as ComponentFormInputMinHeight,
  Vm as ComponentFormInputPadding,
  cg as ComponentLink,
  fg as ComponentPagination,
  Qm as ComponentPanelPaddingDesktop,
  Jm as ComponentPanelPaddingMobile,
  ig as ComponentSpread,
  sg as ComponentSummaryListCellPaddingHorizontal,
  ag as ComponentSummaryListCellPaddingVertical,
  og as ComponentSummaryListRowMargin,
  Po as Container,
  Px as ContentsList,
  Hl as DEFAULT_FONT_CONFIG,
  Gx as DashboardSummaryGrid,
  Dx as DateInput,
  uf as Details,
  ff as DoDontList,
  hx as ElevationHigh,
  ux as ElevationLow,
  fx as ElevationMedium,
  dx as ElevationNone,
  Fs as ErrorMessage,
  Tx as ErrorSummary,
  hf as Expander,
  rt as FRUTIGER_FONT_FILES,
  ls as Fieldset,
  ox as FocusOutlineOffset,
  ix as FocusOutlineStyle,
  sx as FocusOutlineWidth,
  cx as FocusShadowButton,
  lx as FocusShadowInput,
  ur as FontFamilyBase,
  fr as FontFamilyFallback,
  hr as FontFamilyPrint,
  ss as FontLineHeightBase,
  xr as FontSize14Mobile,
  yr as FontSize14Print,
  br as FontSize14Tablet,
  vr as FontSize16Mobile,
  wr as FontSize16Print,
  _r as FontSize16Tablet,
  Sr as FontSize19Mobile,
  Cr as FontSize19Print,
  kr as FontSize19Tablet,
  jr as FontSize22Mobile,
  Tr as FontSize22Print,
  Nr as FontSize22Tablet,
  Dr as FontSize26Mobile,
  Mr as FontSize26Print,
  $r as FontSize26Tablet,
  Ir as FontSize36Mobile,
  Fr as FontSize36Print,
  Lr as FontSize36Tablet,
  Pr as FontSize48Mobile,
  Ar as FontSize48Print,
  Er as FontSize48Tablet,
  as as FontSizeBase,
  mr as FontWeightBold,
  gr as FontWeightLight,
  pr as FontWeightNormal,
  zo as Footer,
  i0 as FormBorderRadius,
  s0 as FormBorderWidthDefault,
  o0 as FormBorderWidthError,
  n0 as FormErrorTextDefault,
  r0 as FormErrorTypographyWeight,
  a0 as FormHintTextDefault,
  Wg as FormInputBackgroundDefault,
  Ug as FormInputBackgroundDisabled,
  Gg as FormInputBackgroundError,
  Og as FormInputBackgroundFocus,
  Vg as FormInputBorderDefault,
  Xg as FormInputBorderDisabled,
  qg as FormInputBorderError,
  Yg as FormInputBorderFocus,
  Kg as FormInputTextDefault,
  Jg as FormInputTextDisabled,
  Zg as FormInputTextPlaceholder,
  Qg as FormLabelTextDefault,
  e0 as FormLabelTextRequired,
  t0 as FormLabelTypographyWeight,
  Dl as FormSpacingCheckboxLabelPadding,
  Tl as FormSpacingCheckboxSize,
  Nl as FormSpacingInputMinHeight,
  jl as FormSpacingInputPadding,
  Lx as GanttChart,
  wa as Grid,
  E0 as GridGutter,
  A0 as GridGutterHalf,
  bh as GridLines,
  P0 as GridPageWidth,
  Ho as Header,
  Ix as HeaderSSR,
  $c as HeaderSearch,
  Ho as HeaderStatic,
  It as Heading,
  _t as HeadingsNhsukHeadingL,
  wt as HeadingsNhsukHeadingM,
  St as HeadingsNhsukHeadingS,
  vt as HeadingsNhsukHeadingXl,
  kt as HeadingsNhsukHeadingXs,
  Mc as Hero,
  Lo as Hint,
  Ox as Images,
  os as Input,
  Bx as InsetText,
  is as Label,
  $0 as LayoutColumnActions,
  j0 as LayoutColumnFull,
  N0 as LayoutColumnHalf,
  D0 as LayoutColumnQuarter,
  T0 as LayoutColumnThird,
  C0 as LayoutContainerMaxWidth,
  tb as Legend,
  xh as LineScalesProvider,
  ep as LineSeriesPrimitive,
  Sc as List,
  Eo as MainWrapper,
  hi as MedicationCard,
  ib as MetricCard,
  mb as NHSBodyText,
  gb as NHSBodyTextLarge,
  xb as NHSBodyTextSmall,
  db as NHSHeading1,
  ub as NHSHeading2,
  fb as NHSHeading3,
  hb as NHSHeading4,
  pb as NHSHeading5,
  bb as NHSLedeText,
  yb as NHSLedeTextSmall,
  Mx as NHSThemeProvider,
  Lb as NHS_FALLBACK_FONT_STACK,
  Ib as NHS_FONT_STACK,
  lh as NavigationSplitView,
  Kx as PageTemplate,
  Fx as Pagination,
  af as Panel,
  Ct as ParagraphsBody,
  jt as ParagraphsBodyLarge,
  Nt as ParagraphsBodySmall,
  Tt as ParagraphsLedeText,
  Dt as ParagraphsLedeTextSmall,
  ui as PatientCard,
  dh as ProductRoadmap,
  _x as Radios,
  wx as RadiosServer,
  qx as ResponsiveDataGrid,
  Xx as ResponsiveDataGridDemo,
  qt as Row,
  lb as SPC,
  Tp as SPCChart,
  Yn as Select,
  yc as SelectOption,
  Q0 as ShadowButtonDefault,
  nx as ShadowButtonFocus,
  ex as ShadowButtonSecondary,
  tx as ShadowButtonWarning,
  rx as ShadowCardDefault,
  ax as ShadowCardHover,
  k0 as SizeButtonMinHeightDesktop,
  S0 as SizeButtonMinHeightMobile,
  m0 as SizeFormControlLarge,
  p0 as SizeFormControlMedium,
  h0 as SizeFormControlSmall,
  _0 as SizeFormInputWidth2xl,
  w0 as SizeFormInputWidth3xl,
  y0 as SizeFormInputWidthLg,
  b0 as SizeFormInputWidthMd,
  x0 as SizeFormInputWidthSm,
  v0 as SizeFormInputWidthXl,
  g0 as SizeFormInputWidthXs,
  u0 as SizeIconExtraLarge,
  d0 as SizeIconLarge,
  c0 as SizeIconMedium,
  f0 as SizeIconNhsDefault,
  l0 as SizeIconSmall,
  oi as SkipLink,
  Ux as SlotMatrix,
  Vx as SortStatusControl,
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
  Ra as SpacingResponsive0Mobile,
  Ba as SpacingResponsive0Tablet,
  Ha as SpacingResponsive1Mobile,
  za as SpacingResponsive1Tablet,
  Wa as SpacingResponsive2Mobile,
  Oa as SpacingResponsive2Tablet,
  Ua as SpacingResponsive3Mobile,
  Ga as SpacingResponsive3Tablet,
  Va as SpacingResponsive4Mobile,
  Ya as SpacingResponsive4Tablet,
  qa as SpacingResponsive5Mobile,
  Xa as SpacingResponsive5Tablet,
  Ka as SpacingResponsive6Mobile,
  Za as SpacingResponsive6Tablet,
  Ja as SpacingResponsive7Mobile,
  Qa as SpacingResponsive7Tablet,
  es as SpacingResponsive8Mobile,
  ts as SpacingResponsive8Tablet,
  ns as SpacingResponsive9Mobile,
  rs as SpacingResponsive9Tablet,
  Sx as SpacingUtilities,
  K0 as StateDisabledBackground,
  Z0 as StateDisabledBorder,
  J0 as StateDisabledText,
  R0 as StateErrorBackground,
  B0 as StateErrorBorder,
  H0 as StateErrorText,
  Y0 as StateInfoBackground,
  q0 as StateInfoBorder,
  X0 as StateInfoText,
  z0 as StateSuccessBackground,
  W0 as StateSuccessBorder,
  O0 as StateSuccessText,
  U0 as StateWarningBackground,
  G0 as StateWarningBorder,
  V0 as StateWarningText,
  yf as SummaryCard,
  Hx as SummaryList,
  dt as Table,
  zx as Tabs,
  qe as Tag,
  pf as TaskList,
  xc as Textarea,
  eb as TooltipOverlay,
  Qh as TooltipProvider,
  Zx as TransactionalPageTemplate,
  Bp as TransitionButtonDefault,
  Hp as TransitionButtonShadow,
  Wp as TransitionCardHover,
  zp as TransitionInputFocus,
  Qx as VisibilityProvider,
  pi as VitalsCard,
  Nx as WIDTH_FRACTIONS,
  Wx as WarningCallout,
  yi as WidthContainer,
  Cx as WidthUtilities,
  Fb as checkFrutigerLoaded,
  ys as createGenericTabsConfig,
  Yx as createTCHTabsConfig,
  $b as generateFrutigerFontFace,
  cb as getResponsiveStyles,
  kx as getSpacingClass,
  jx as getWidthClass,
  Mb as preloadFrutigerFonts,
  Mf as tchDataConfig,
  _b as useColors,
  Cb as useComponentSpacing,
  jb as useNHSHeadings,
  Nb as useNHSParagraphs,
  $x as useNHSTheme,
  Tb as useNHSTypographySystem,
  Db as useNavigationSplitDrill,
  sh as useNavigationSplitUrlSync,
  _i as useNhsFdpBreakpoints,
  kb as useResponsiveSpacing,
  Jx as useResponsiveValue,
  wb as useSpacing,
  vb as useTokens,
  Sb as useTypography
};
//# sourceMappingURL=index.esm.js.map
