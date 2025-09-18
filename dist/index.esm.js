import * as G from "react";
import jt, { useState as He, useEffect as Qe, useCallback as be, useRef as Ue, createElement as qi, useMemo as Pe, useContext as bu, createContext as vu, forwardRef as mr, useImperativeHandle as Xi, useReducer as Ki, memo as yu, useId as ea } from "react";
import { createPortal as wu } from "react-dom";
function _u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = { exports: {} }, Sr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ao;
function Su() {
  if (Ao) return Sr;
  Ao = 1;
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
  return Sr.Fragment = t, Sr.jsx = n, Sr.jsxs = n, Sr;
}
var kr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function ku() {
  return Eo || (Eo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(H) {
      if (H == null) return null;
      if (typeof H == "function")
        return H.$$typeof === I ? null : H.displayName || H.name || null;
      if (typeof H == "string") return H;
      switch (H) {
        case m:
          return "Fragment";
        case g:
          return "Profiler";
        case p:
          return "StrictMode";
        case b:
          return "Suspense";
        case T:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof H == "object")
        switch (typeof H.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), H.$$typeof) {
          case y:
            return "Portal";
          case M:
            return (H.displayName || "Context") + ".Provider";
          case k:
            return (H._context.displayName || "Context") + ".Consumer";
          case C:
            var O = H.render;
            return H = H.displayName, H || (H = O.displayName || O.name || "", H = H !== "" ? "ForwardRef(" + H + ")" : "ForwardRef"), H;
          case N:
            return O = H.displayName || null, O !== null ? O : e(H.type) || "Memo";
          case j:
            O = H._payload, H = H._init;
            try {
              return e(H(O));
            } catch {
            }
        }
      return null;
    }
    function t(H) {
      return "" + H;
    }
    function n(H) {
      try {
        t(H);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var U = O.error, re = typeof Symbol == "function" && Symbol.toStringTag && H[Symbol.toStringTag] || H.constructor.name || "Object";
        return U.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          re
        ), t(H);
      }
    }
    function a(H) {
      if (H === m) return "<>";
      if (typeof H == "object" && H !== null && H.$$typeof === j)
        return "<...>";
      try {
        var O = e(H);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var H = S.A;
      return H === null ? null : H.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(H) {
      if (v.call(H, "key")) {
        var O = Object.getOwnPropertyDescriptor(H, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return H.key !== void 0;
    }
    function l(H, O) {
      function U() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(H, "key", {
        get: U,
        configurable: !0
      });
    }
    function u() {
      var H = e(this.type);
      return D[H] || (D[H] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), H = this.props.ref, H !== void 0 ? H : null;
    }
    function c(H, O, U, re, W, oe, ke, le) {
      return U = oe.ref, H = {
        $$typeof: x,
        type: H,
        key: O,
        props: oe,
        _owner: W
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(H, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(H, "ref", { enumerable: !1, value: null }), H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(H, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(H, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ke
      }), Object.defineProperty(H, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    }
    function d(H, O, U, re, W, oe, ke, le) {
      var ce = O.children;
      if (ce !== void 0)
        if (re)
          if (L(ce)) {
            for (re = 0; re < ce.length; re++)
              f(ce[re]);
            Object.freeze && Object.freeze(ce);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ce);
      if (v.call(O, "key")) {
        ce = e(H);
        var Z = Object.keys(O).filter(function(de) {
          return de !== "key";
        });
        re = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", V[ce + re] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          re,
          ce,
          Z,
          ce
        ), V[ce + re] = !0);
      }
      if (ce = null, U !== void 0 && (n(U), ce = "" + U), i(O) && (n(O.key), ce = "" + O.key), "key" in O) {
        U = {};
        for (var ne in O)
          ne !== "key" && (U[ne] = O[ne]);
      } else U = O;
      return ce && l(
        U,
        typeof H == "function" ? H.displayName || H.name || "Unknown" : H
      ), c(
        H,
        ce,
        oe,
        W,
        o(),
        U,
        ke,
        le
      );
    }
    function f(H) {
      typeof H == "object" && H !== null && H.$$typeof === x && H._store && (H._store.validated = 1);
    }
    var h = jt, x = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), M = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), S = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.prototype.hasOwnProperty, L = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(H) {
        return H();
      }
    };
    var $, D = {}, P = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), te = w(a(s)), V = {};
    kr.Fragment = m, kr.jsx = function(H, O, U, re, W) {
      var oe = 1e4 > S.recentlyCreatedOwnerStacks++;
      return d(
        H,
        O,
        U,
        !1,
        re,
        W,
        oe ? Error("react-stack-top-frame") : P,
        oe ? w(a(H)) : te
      );
    }, kr.jsxs = function(H, O, U, re, W) {
      var oe = 1e4 > S.recentlyCreatedOwnerStacks++;
      return d(
        H,
        O,
        U,
        !0,
        re,
        W,
        oe ? Error("react-stack-top-frame") : P,
        oe ? w(a(H)) : te
      );
    };
  })()), kr;
}
var Ro;
function Cu() {
  return Ro || (Ro = 1, process.env.NODE_ENV === "production" ? Yr.exports = Su() : Yr.exports = ku()), Yr.exports;
}
var r = Cu(), as = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Bo;
function Nu() {
  return Bo || (Bo = 1, (function(e) {
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
  })(as)), as.exports;
}
var ju = Nu();
const we = /* @__PURE__ */ _u(ju), xv = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = we(
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
}, Ji = ({
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
    ) : null, l = s.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, u = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: s.href,
        children: u
      }
    ) : s.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ r.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: u })
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: u });
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: we(
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
            className: we(
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
var Zi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Zi || {}), Qi = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Qi || {});
function Tu(e) {
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
const { forwardRef: Du, useCallback: kn, useState: ss } = G;
function Iu(e, t) {
  const {
    children: n,
    variant: a = Zi.Primary,
    size: o = Qi.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...u
  } = e, [c, d] = ss(!1), [f, h] = ss(!1), [x, y] = ss(!1), m = Tu({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in u ? u.href : void 0
  }), p = "disabled" in u ? u.disabled : u["aria-disabled"] === "true", g = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...x && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, k = kn(
    () => !p && d(!0),
    [p]
  ), M = kn(() => d(!1), []), C = kn(
    () => !p && h(!0),
    [p]
  ), b = kn(() => {
    h(!1), d(!1);
  }, []), T = kn(() => y(!0), []), N = kn(() => y(!1), []), j = kn(
    (ce) => {
      ce.key === " " && ("href" in u || ce.currentTarget.getAttribute("role") === "button") && (ce.preventDefault(), ce.currentTarget.click());
    },
    [u]
  ), _ = kn(
    (ce) => {
      if (l) {
        const Z = ce.currentTarget;
        if (Z.getAttribute("data-processing") === "true") {
          ce.preventDefault();
          return;
        }
        Z.setAttribute("data-processing", "true"), setTimeout(() => {
          Z.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in u && u.href) {
    const {
      id: ce,
      style: Z,
      title: ne,
      ["aria-label"]: de,
      ["aria-describedby"]: z,
      ["aria-labelledby"]: fe,
      tabIndex: F,
      ...R
    } = u, Y = u;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: Y.href,
        target: Y.target,
        rel: Y.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...g,
        ...l && { "data-prevent-double-click": "true" },
        ...R,
        onKeyDown: (se) => {
          Y.onKeyDown?.(se), j(se);
        },
        onClick: (se) => {
          Y.onClick?.(se), _(se);
        },
        onMouseDown: (se) => {
          Y.onMouseDown?.(se), k();
        },
        onMouseUp: (se) => {
          Y.onMouseUp?.(se), M();
        },
        onMouseEnter: (se) => {
          Y.onMouseEnter?.(se), C();
        },
        onMouseLeave: (se) => {
          Y.onMouseLeave?.(se), b();
        },
        onFocus: (se) => {
          Y.onFocus?.(se), T();
        },
        onBlur: (se) => {
          Y.onBlur?.(se), N();
        },
        "aria-disabled": Y["aria-disabled"],
        ...Y["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ce,
        style: Z,
        title: ne,
        "aria-label": de,
        "aria-describedby": z,
        "aria-labelledby": fe,
        tabIndex: F,
        children: n
      }
    );
  }
  const {
    id: I,
    style: S,
    title: v,
    ["aria-label"]: L,
    ["aria-describedby"]: w,
    ["aria-labelledby"]: $,
    tabIndex: D,
    name: P,
    value: te,
    form: V,
    formAction: H,
    formEncType: O,
    formMethod: U,
    formNoValidate: re,
    formTarget: W,
    autoFocus: oe,
    ...ke
  } = u, le = u;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: le.type || "button",
      disabled: le.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...g,
      ...l && { "data-prevent-double-click": "true" },
      ...le.disabled && { "aria-disabled": "true" },
      ...ke,
      onKeyDown: (ce) => {
        le.onKeyDown?.(ce), j(ce);
      },
      onClick: (ce) => {
        le.onClick?.(ce), _(ce);
      },
      onMouseDown: (ce) => {
        le.onMouseDown?.(ce), k();
      },
      onMouseUp: (ce) => {
        le.onMouseUp?.(ce), M();
      },
      onMouseEnter: (ce) => {
        le.onMouseEnter?.(ce), C();
      },
      onMouseLeave: (ce) => {
        le.onMouseLeave?.(ce), b();
      },
      onFocus: (ce) => {
        le.onFocus?.(ce), T();
      },
      onBlur: (ce) => {
        le.onBlur?.(ce), N();
      },
      id: I,
      style: S,
      title: v,
      "aria-label": L,
      "aria-describedby": w,
      "aria-labelledby": $,
      tabIndex: D,
      name: P,
      value: te,
      form: V,
      formAction: H,
      formEncType: O,
      formMethod: U,
      formNoValidate: re,
      formTarget: W,
      autoFocus: oe,
      children: n
    }
  );
}
const bt = Du(Iu);
bt.displayName = "Button";
const ks = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = we(
    "nhsuk-back-link",
    a
  ), u = we(
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx(
    "button",
    {
      className: u,
      onClick: s,
      type: "button",
      ...i,
      children: c()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: u,
      href: n,
      ...i,
      children: c()
    }
  ) });
};
function $u(e) {
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
const Ze = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: u,
  ...c
}) => {
  const d = $u({ color: a, noBorder: o, closable: s, disabled: l, className: u }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: d.classes, ...c, children: [
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
}, Mu = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: u,
  children: c,
  onChange: d,
  onBlur: f,
  onFocus: h,
  attributes: x,
  ...y
}) => {
  const [m, p] = He(a), g = n !== void 0, k = g ? n : m;
  Qe(() => {
    g || p(a);
  }, [a, g]);
  const M = (j) => {
    const _ = j.target.checked;
    g || p(_), d?.(_, j);
  }, C = i ? `${e}-hint` : void 0, b = l ? `${e}-error` : void 0, T = [C, b].filter(Boolean).join(" ") || void 0, N = we(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    u
  );
  return /* @__PURE__ */ r.jsx("div", { className: N, ...y, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: k,
        disabled: o,
        onChange: M,
        onBlur: f,
        onFocus: h,
        "aria-describedby": T,
        ...x
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: C, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: b, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Mu.displayName = "Checkbox";
function el(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const uo = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: u = !1,
  hasError: c = !1,
  describedBy: d,
  className: f,
  width: h = "full",
  inputMode: x,
  autoComplete: y,
  maxLength: m,
  minLength: p,
  pattern: g,
  step: k,
  min: M,
  max: C,
  showValueLabels: b = !1,
  showCurrentValue: T = !1,
  valueLabels: N,
  onChange: j,
  onBlur: _,
  onFocus: I,
  onKeyDown: S,
  ...v
}) => {
  const [L, w] = He(a || o || (n === "range" ? M || "0" : ""));
  Qe(() => {
    a !== void 0 && w(a);
  }, [a]);
  const $ = (W) => {
    const oe = W.target;
    w(oe.value), ("type" in W && W.nativeEvent || W.type === "keydown") && j?.(W);
  }, { classes: D, isRange: P } = el({ type: n, hasError: c, width: h, className: f }), te = a !== void 0, V = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: u,
    "aria-describedby": d,
    inputMode: x,
    autoComplete: y,
    maxLength: m,
    minLength: p,
    pattern: g,
    step: k,
    min: M,
    max: C,
    onChange: $,
    onBlur: _,
    onFocus: I,
    onKeyDown: (W) => {
      if (P && /[0-9]/.test(W.key)) {
        const oe = (L?.toString() || "") + W.key;
        W.target.value = oe, $(W);
      }
      S?.(W);
    },
    ...v
  }, H = !te && o !== void 0 ? { defaultValue: o } : {}, O = te ? { value: a } : {}, U = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: D,
      ...O,
      ...H,
      "data-current-value": L,
      ...V
    }
  ), re = P ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    b && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: N?.min || M || "0" }),
      U(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: N?.max || C || "100" })
    ] }),
    !b && U(),
    T && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      N?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: L })
    ] }) })
  ] }) : null;
  return P ? re : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: D,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: u,
      "aria-describedby": d,
      inputMode: x,
      autoComplete: y,
      maxLength: m,
      minLength: p,
      pattern: g,
      step: k,
      min: M,
      max: C,
      onChange: j,
      onBlur: _,
      onFocus: I,
      onKeyDown: S,
      ...v
    }
  );
};
function Pu(e) {
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
const fo = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = Pu({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function Lu(e) {
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
const po = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = Lu({
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
function Fu(e) {
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
const Au = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: u = "",
  small: c = !1,
  onChange: d,
  fieldsetAttributes: f,
  attributes: h,
  ...x
}) => {
  const [y, m] = He(
    e.filter((j) => j.checked).map((j) => j.value)
  ), p = n || t, g = i ? `${p}-hint` : void 0, k = l ? `${p}-error` : void 0, M = [g, k].filter(Boolean).join(" ") || void 0, C = (j, _) => {
    let I;
    _ ? I = [...y, j] : I = y.filter((S) => S !== j), m(I), d?.(I);
  }, b = () => e.map((j, _) => {
    const I = `${p}-${_ + 1}`, S = `${I}-conditional`, v = y.includes(j.value), L = j.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: I,
          name: t,
          type: "checkbox",
          value: j.value,
          checked: v,
          disabled: L,
          onChange: (w) => C(j.value, w.target.checked),
          "aria-describedby": j.hint ? `${I}-hint` : M,
          ...j.conditional && {
            "aria-controls": S,
            "aria-expanded": v ? "true" : "false"
          },
          ...j.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: I, children: j.text }),
      j.hint && /* @__PURE__ */ r.jsx("div", { id: `${I}-hint`, className: "nhsuk-checkboxes__hint", children: j.hint }),
      j.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: we("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !v
          }),
          id: S,
          children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            j.conditional.label && /* @__PURE__ */ r.jsx(fo, { htmlFor: j.conditional.id, children: j.conditional.label }),
            /* @__PURE__ */ r.jsx(uo, { ...j.conditional })
          ] }) : j.conditional
        }
      )
    ] }, j.value);
  }), { classes: T, formGroupClasses: N } = Fu({ small: c, className: u, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: N, ...h, ...x, children: /* @__PURE__ */ r.jsxs(
    po,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: M,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: g, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: k, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: T, children: b() })
      ]
    }
  ) });
};
Au.displayName = "Checkboxes";
function Eu(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const Ru = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: u = !1,
  describedBy: c,
  className: d,
  rows: f = 5,
  cols: h,
  maxLength: x,
  minLength: y,
  wrap: m = "soft",
  resize: p = "vertical",
  autoComplete: g,
  spellCheck: k,
  onChange: M,
  onBlur: C,
  onFocus: b,
  onKeyDown: T,
  ...N
}) => {
  const { classes: j, describedBy: _ } = Eu({ hasError: u, resize: p, className: d, describedBy: c });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: j,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": _,
      rows: f,
      cols: h,
      maxLength: x,
      minLength: y,
      wrap: m,
      autoComplete: g,
      spellCheck: k,
      onChange: M,
      onBlur: C,
      onFocus: b,
      onKeyDown: T,
      ...N
    }
  );
};
function Bu(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const tl = ({ id: e, className: t, children: n, ...a }) => {
  const o = Bu({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, bv = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: u,
  countMessage: c,
  onCountChange: d,
  onChange: f,
  ...h
}) => {
  const x = s ?? i ?? "", [y, m] = He(x), [p, g] = He(0), [k, M] = He(!1), [C, b] = He(!1), T = be((v) => n ? v.trim() === "" ? 0 : v.trim().split(/\s+/).length : v.length, [n]);
  Qe(() => {
    const v = T(y), L = t || n || 0, w = L - v, $ = Math.floor(L * (a / 100));
    g(w), M(v > L), b(v >= $ || v > L), d && d(v, w);
  }, [y, t, n, a, T, d]);
  const N = (v) => {
    const L = v.target.value;
    m(L), f && f(v);
  }, j = () => {
    const v = t || n || 0, L = n ? "word" : "character", w = n ? "words" : "characters";
    if (!C)
      return `You can enter up to ${v} ${v === 1 ? L : w}`;
    if (k) {
      const $ = Math.abs(p);
      return `You have ${$} ${$ === 1 ? L : w} too many`;
    } else
      return `You have ${p} ${p === 1 ? L : w} remaining`;
  }, _ = we(
    "nhsuk-character-count",
    u
  ), I = we(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !C,
      "nhsuk-error-message": k
    },
    c?.classes
  ), S = we(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": k
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: _,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          Ru,
          {
            id: e,
            name: o,
            value: s !== void 0 ? y : void 0,
            defaultValue: s === void 0 ? i ?? y : void 0,
            rows: l,
            className: S,
            onChange: N,
            "aria-describedby": `${e}-info`,
            "aria-invalid": k || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          tl,
          {
            id: `${e}-info`,
            className: I,
            role: "status",
            "aria-live": "polite",
            children: j()
          }
        )
      ]
    }
  );
};
function Hu(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Ou = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = we(
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
}, Uu = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: u,
  className: c,
  multiple: d = !1,
  size: f,
  autoComplete: h,
  options: x,
  children: y,
  onChange: m,
  onBlur: p,
  onFocus: g,
  ...k
}) => {
  const { classes: M } = Hu({ hasError: l, className: c }), C = () => x ? x.map((T, N) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: T.value,
      disabled: T.disabled,
      "data-initial-selected": T.selected || void 0,
      children: T.text
    },
    `${T.value}-${N}`
  )) : null, b = o === void 0 && a === void 0 && x ? x.find((T) => T.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: M,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : b,
      disabled: s,
      required: i,
      "aria-describedby": u,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: m,
      onBlur: p,
      onFocus: g,
      ...k,
      children: y || C()
    }
  );
}, ta = Uu;
ta.Option = Ou;
function Wu(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function nl(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: u,
  InputComponent: c
}) {
  const {
    onChange: d,
    onBlur: f,
    onFocus: h,
    ...x
  } = e, {
    name: y,
    hasError: m = !1,
    describedBy: p,
    className: g,
    size: k = "normal",
    inline: M = !1,
    options: C,
    ...b
  } = x, { classes: T, describedBy: N } = Wu({ hasError: m, size: k, inline: M, className: g, describedBy: p });
  return /* @__PURE__ */ r.jsx(po, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: T,
      ...b,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: C.map((j, _) => {
        const I = `${y}-${_}`, S = j.conditional ? `${I}-conditional` : void 0, v = n === j.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: I,
              name: y,
              type: "radio",
              value: j.value,
              disabled: j.disabled,
              ...t === "client" ? {
                checked: v,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (L) => {
                  L && u && (u.current[_] = L);
                }
              } : {
                defaultChecked: v,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": N
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: I, children: j.text }),
          j.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: j.hint }),
          j.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: we("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !v
              }),
              id: S,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                j.conditional.label && /* @__PURE__ */ r.jsx(
                  fo,
                  {
                    htmlFor: j.conditional.id,
                    children: j.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  c,
                  {
                    ...j.conditional
                  }
                )
              ] }) : j.conditional
            }
          )
        ] }, j.value);
      })
    }
  ) });
}
const vv = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = He(e || t || ""), u = Ue([]), c = Ue(i), d = (x) => {
    const y = x.target.value;
    y !== c.current && (c.current = y, l(y), n?.(x));
  }, f = (x) => {
    o?.(x);
  }, h = be((x) => {
    const { key: y } = x;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(y)) return;
    x.preventDefault();
    const m = u.current.filter((M) => M && !M.disabled), p = m.indexOf(x.currentTarget);
    if (p === -1) return;
    let g = p;
    ["ArrowDown", "ArrowRight"].includes(y) ? g = (p + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(y) && (g = (p - 1 + m.length) % m.length);
    const k = m[g];
    k && (k.focus(), k.checked || k.click());
  }, []);
  return nl(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: d,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: h,
      itemsRef: u,
      InputComponent: uo
    }
  );
};
function zu(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: o,
    defaultValue: s,
    placeholder: i,
    disabled: l = !1,
    readOnly: u = !1,
    required: c = !1,
    hasError: d = !1,
    describedBy: f,
    className: h,
    width: x = "full",
    inputMode: y,
    autoComplete: m,
    maxLength: p,
    minLength: g,
    pattern: k,
    step: M,
    min: C,
    max: b,
    showValueLabels: T = !1,
    showCurrentValue: N = !1,
    valueLabels: j,
    // Strip interactive handlers in server variant
    onChange: _,
    onBlur: I,
    onFocus: S,
    onKeyDown: v,
    ...L
  } = e, { classes: w, isRange: $ } = el({
    type: a,
    hasError: d,
    width: x,
    className: h
  }), D = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: u,
    required: c,
    "aria-describedby": f,
    inputMode: y,
    autoComplete: m,
    maxLength: p,
    minLength: g,
    pattern: k,
    step: M,
    min: C,
    max: b,
    ...L
  };
  if ($) {
    const P = o ?? s ?? (typeof C < "u" ? String(C) : "0"), te = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: w,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": P,
        ...D
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      T ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: j?.min || C || "0" }),
        te,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: j?.max || b || "100" })
      ] }) : te,
      N && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        j?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: P })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: w,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...D
    }
  );
}
const yv = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return nl(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: zu
    }
  );
};
var Bn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(Bn || {}), Vu = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Vu || {}), Gu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Gu || {}), Yu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Yu || {});
const rl = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = we(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, Hn = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const o = we("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: o, style: n, ...a, children: e });
}, $r = ({
  children: e,
  width: t = Bn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: u,
  align: c,
  ...d
}) => {
  const f = we(
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
      ...c ? { [`nhsuk-grid-align-${c}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: u, ...d, children: e });
}, Cs = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const s = jt.Children.toArray(e)[0], i = jt.isValidElement(s) && (s.type === Hn || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(rl, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Hn, { children: e }) });
}, qu = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const u = i || (t === "number" ? "ol" : "ul"), c = we(
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
  return /* @__PURE__ */ r.jsx(u, { className: c, role: s, ...l, children: e });
}, Xu = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = we("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Ku = qu;
Ku.Item = Xu;
const wv = ({
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
}, _v = {
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
}, Sv = ({
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
}, kv = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Cv = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], al = ({
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
function Ju(e) {
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
function Zu(e) {
  const t = e.level ?? Ju(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const mn = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const u = Zu({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return qi(u.tag, { className: u.classes, style: u.style, ...l }, c);
};
function Qu(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Ho = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = Qu({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Nv = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const u = Ue(null);
  Qe(() => {
    u.current && u.current.focus();
  }, []);
  const c = we(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (x) => {
    const y = x.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
    return x.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: x.href,
        ...x.attributes,
        children: y
      }
    ) : y;
  };
  return /* @__PURE__ */ r.jsxs(
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
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (n || a) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((x, y) => /* @__PURE__ */ r.jsx("li", { children: h(x) }, y)) })
        ] })
      ]
    }
  );
}, jv = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: u,
  ...c
}) => {
  const [d, f] = He(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, x] = He({}), y = ($) => $ % 4 === 0 && $ % 100 !== 0 || $ % 400 === 0, m = ($, D) => {
    const P = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return $ === 2 && y(D) ? 29 : P[$ - 1];
  }, p = ($, D, P) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Day must be a number";
    const te = parseInt($, 10);
    if (te < 1 || te > 31) return "Day must be between 1 and 31";
    if (D && P) {
      const V = parseInt(D, 10), H = parseInt(P, 10);
      if (!isNaN(V) && !isNaN(H) && V >= 1 && V <= 12) {
        const O = m(V, H);
        if (te > O)
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
          ][V - 1]} ${H} only has ${O} days`;
      }
    }
  }, g = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Month must be a number";
    const D = parseInt($, 10);
    if (D < 1 || D > 12) return "Month must be between 1 and 12";
  }, k = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Year must be a number";
    const D = parseInt($, 10), P = (/* @__PURE__ */ new Date()).getFullYear();
    if (D < 1900 || D > P + 10)
      return `Year must be between 1900 and ${P + 10}`;
  }, M = ($, D, P) => {
    if (!$ || !D || !P) return;
    const te = parseInt($, 10), V = parseInt(D, 10), H = parseInt(P, 10);
    if (isNaN(te) || isNaN(V) || isNaN(H) || V < 1 || V > 12 || H < 1900) return;
    const O = m(V, H);
    te < 1 || te > O;
  }, C = be(($, D) => {
    const P = {
      ...d,
      [$]: D
    };
    f(P), u && u(P);
  }, [d, u]), b = be(($) => {
    const D = d[$];
    let P;
    if ($ === "day")
      P = p(D, d.month, d.year);
    else if ($ === "month") {
      if (P = g(D), !P && d.day) {
        const te = p(d.day, D, d.year);
        x((V) => ({
          ...V,
          day: te
        }));
      }
    } else if ($ === "year" && (P = k(D), !P && d.day && d.month)) {
      const te = p(d.day, d.month, D);
      x((V) => ({
        ...V,
        day: te
      }));
    }
    if (x((te) => ({
      ...te,
      [$]: P
    })), d.day && d.month && d.year) {
      const te = M(
        $ === "day" ? D : d.day,
        $ === "month" ? D : d.month,
        $ === "year" ? D : d.year
      );
      te && x((V) => ({
        ...V,
        day: te
      }));
    }
  }, [d, p, g, k, M]), T = Pe(() => [
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
  ], []), N = n || T;
  let j = s?.describedBy || "";
  const _ = i ? `${e}-hint` : "", I = l ? `${e}-error` : "";
  _ && (j = j ? `${j} ${_}` : _), I && (j = j ? `${j} ${I}` : I);
  const S = Object.values(h).some(($) => $), v = we(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || S
    }
  ), L = we(
    "nhsuk-date-input",
    t
  ), w = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      tl,
      {
        id: _,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      Ho,
      {
        id: I,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([$, D]) => D ? /* @__PURE__ */ r.jsxs(
        Ho,
        {
          id: `${e}-${$}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            D
          ]
        },
        `${$}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: L, id: e, "data-testid": "date-input", ...c, children: N.map(($) => {
      const D = $.id || `${e}-${$.name}`, P = a ? `${a}[${$.name}]` : $.name, te = $.label || $.name.charAt(0).toUpperCase() + $.name.slice(1), V = h[$.name], H = d[$.name] || "";
      let O = j;
      if (V) {
        const U = `${e}-${$.name}-error`;
        O = O ? `${O} ${U}` : U;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          fo,
          {
            htmlFor: D,
            className: "nhsuk-date-input__label",
            children: te
          }
        ),
        /* @__PURE__ */ r.jsx(
          uo,
          {
            id: D,
            name: P,
            value: H,
            className: we("nhsuk-date-input__input", $.classes, {
              "nhsuk-input--error": V
            }),
            inputMode: $.inputmode,
            autoComplete: $.autocomplete,
            pattern: $.pattern,
            "aria-describedby": O || void 0,
            hasError: !!V,
            onChange: (U) => C($.name, U.target.value),
            onBlur: () => b($.name)
          }
        )
      ] }, $.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: v, children: s ? /* @__PURE__ */ r.jsx(
    po,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: j || void 0,
      children: w()
    }
  ) : w() });
}, sl = {
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
}, ol = vu(sl), ed = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...sl, ...t };
  return /* @__PURE__ */ r.jsx(ol.Provider, { value: n, children: e });
}, Tv = () => {
  const e = bu(ol);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function td() {
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
function nd() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = td(), document.head.appendChild(e);
}
const Dv = ({ children: e, theme: t }) => (Qe(() => {
  nd();
}, []), /* @__PURE__ */ r.jsx(ed, { theme: t, children: e }));
function rd(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: u,
  navListRef: c,
  searchNode: d
}) {
  const {
    className: f,
    logo: h = {},
    service: x = {},
    serviceName: y,
    organisation: m,
    search: p,
    account: g,
    navigation: k,
    containerClasses: M,
    variant: C = "default",
    attributes: b = {},
    maxVisibleItems: T,
    // deprecated (ignored)
    responsiveNavigation: N = !0,
    ...j
  } = e, _ = {
    ...x,
    text: x?.text ?? y
  };
  "maxVisibleItems" in j && delete j.maxVisibleItems;
  const I = _.href && !h.href || _.href && _.href === h.href, S = I ? _.href : h.href, v = we(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": C === "organisation" || m,
      "nhsuk-header--white": C === "white"
    },
    f
  ), L = we(
    "nhsuk-header__container",
    M
  ), w = we(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": k?.white,
      "nhsuk-header__navigation--justified": k?.justified
    },
    k?.className
  ), $ = () => /* @__PURE__ */ r.jsxs(
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
  ), D = () => h.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : $(), P = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, te = (O, U) => O ? U ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: U, children: O }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: O }) : null, V = (O) => O.active || O.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: O.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: O.html } }) : O.text }) : O.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: O.html } }) : O.text, H = () => /* @__PURE__ */ r.jsx(
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
  return k?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: v,
      role: "banner",
      "data-module": "nhsuk-header",
      ...b,
      ...j,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: L, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            S ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: S, children: [
              D(),
              P(),
              I && te(_.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              D(),
              P(),
              I && te(_.text)
            ] }),
            _.text && !I && te(_.text, _.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ r.jsx(
            Ji,
            {
              ...g,
              variant: C === "white" ? "white" : "default"
            }
          )
        ] }),
        k && k.items && k.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: w,
            "aria-label": k.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: we(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  M
                ),
                ref: u,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (k?.items || []).map((O, U) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: we(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": O.active || O.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && U >= (s ?? 0)
                            },
                            O.className
                          ),
                          ...O.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: O.href,
                              ...O.active || O.current ? { "aria-current": O.current ? "page" : "true" } : {},
                              children: V(O)
                            }
                          )
                        },
                        U
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
                            H()
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
        n && k && k.items && k.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: k.items.slice(s ?? 0).map((O, U) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: we("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": O.active || O.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: O.href,
                    ...O.active || O.current ? { "aria-current": O.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: V(O)
                  }
                )
              },
              `overflow-${(s ?? 0) + U}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const ad = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: u,
  disabled: c = !1,
  callbacks: d = {},
  isLoading: f = !1,
  showResults: h = !1,
  results: x = [],
  formAttributes: y = {},
  inputAttributes: m = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: g = !1,
  debounceMs: k = 300,
  minQueryLength: M = 1
}) => {
  const [C, b] = He(""), [T, N] = He(!1), j = Ue(void 0), _ = Ue(null), I = Ue(null), S = e === "controlled" && o !== void 0, v = S ? o : C, L = be(
    (re) => {
      j.current && clearTimeout(j.current), j.current = setTimeout(() => {
        d.onChange && re.length >= M && d.onChange(re);
      }, k);
    },
    [d.onChange, k, M]
  ), w = be(
    (re) => {
      const W = re.target.value;
      S || b(W), e !== "form" && L(W);
    },
    [S, e, L]
  ), $ = be(
    (re) => {
      const W = v.trim(), oe = {
        query: W,
        timestamp: Date.now(),
        formData: new FormData(re.currentTarget)
      };
      e === "controlled" || e === "hybrid" && g ? (re.preventDefault(), d.onSearch && W.length >= M && d.onSearch(oe)) : e === "hybrid" && d.onSearch && W.length >= M && d.onSearch(oe);
    },
    [
      e,
      v,
      d.onSearch,
      g,
      M
    ]
  ), D = be(() => {
    N(!0), d.onFocus?.();
  }, [d.onFocus]), P = be(() => {
    N(!1), d.onBlur?.();
  }, [d.onBlur]), te = be(() => {
    S || b(""), d.onClear?.(), I.current?.focus();
  }, [S, d.onClear]);
  Qe(() => () => {
    j.current && clearTimeout(j.current);
  }, []);
  const V = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: we("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), H = () => /* @__PURE__ */ r.jsx(
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
  ), O = () => !v || e === "form" ? null : /* @__PURE__ */ r.jsx(
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
  ), U = () => !h || !x.length || !T ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: x.map((re) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: re.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: re.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: re.title }),
            re.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: re.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => d.onSearch?.({
            query: re.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: re.title }),
            re.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: re.description })
          ]
        }
      )
    },
    re.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: we("nhsuk-header__search", u, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": T,
        "nhsuk-header__search--has-results": h && x.length > 0
      }),
      children: [
        /* @__PURE__ */ r.jsxs(
          "form",
          {
            ref: _,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? n : void 0,
            role: "search",
            onSubmit: $,
            ...y,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: I,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: v,
                    onChange: w,
                    onFocus: D,
                    onBlur: P,
                    disabled: c || f,
                    ...h && x.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...m
                  }
                ),
                O()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: c || f || e !== "form" && v.length < M,
                  ...p,
                  children: [
                    f ? H() : V(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        U()
      ]
    }
  );
}, il = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: c = {},
  ...d
}) => {
  const [f, h] = He(!1), [x, y] = He(!1), [m, p] = He(i?.items?.length || 0), [g, k] = He(!1), [M, C] = He(!1), b = Ue(null), T = Ue(null), N = Ue(!1);
  Qe(() => {
    typeof window > "u" || C(!0);
  }, []), Qe(() => {
    if (typeof document > "u") return;
    const S = (v) => {
      v.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [f]);
  const j = Ue(null), _ = be(() => {
    if (!M || !i?.items || i.items.length === 0 || N.current) return;
    const S = b.current, v = T.current;
    if (!S || !v) return;
    N.current = !0, S.classList.add("nhsuk-header__navigation-container--measuring");
    const L = S.clientWidth, w = Array.from(v.children);
    if (!w.length) {
      S.classList.remove("nhsuk-header__navigation-container--measuring"), N.current = !1;
      return;
    }
    if (j.current == null) {
      const W = document.createElement("button");
      W.type = "button", W.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", W.style.position = "absolute", W.style.visibility = "hidden", W.style.pointerEvents = "none", W.innerHTML = "<span>More</span>", S.appendChild(W), j.current = W.getBoundingClientRect().width || 104, S.removeChild(W);
    }
    const $ = j.current + 16;
    let D = 0, P = 0;
    const te = window.getComputedStyle(S), V = parseFloat(te.paddingLeft) || 0, H = parseFloat(te.paddingRight) || 0;
    let O = V + H;
    for (const W of w) {
      const oe = W.getBoundingClientRect().width;
      if (D + oe + $ + O > L) break;
      D += oe, P += 1;
    }
    const U = P < i.items.length, re = U ? P : i.items.length;
    y((W) => W === U ? W : U), p((W) => W === re ? W : re), S.classList.remove("nhsuk-header__navigation-container--measuring"), N.current = !1;
  }, [M, i?.items]);
  Qe(() => {
    if (!M) return;
    const S = b.current;
    if (!S) return;
    let v = null;
    const L = () => {
      v == null && (v = window.requestAnimationFrame(() => {
        v = null, _();
      }));
    };
    _();
    const w = new ResizeObserver(() => L());
    return w.observe(S), T.current && w.observe(T.current), () => {
      v != null && window.cancelAnimationFrame(v), w.disconnect();
    };
  }, [M, _]), Qe(() => {
    M && _();
  }, [i?.items?.length, M, _]);
  const I = (S) => {
    S && (S.preventDefault(), S.stopPropagation());
    const v = !f;
    h(v), k(v);
  };
  return rd(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: o,
      account: s,
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
      showMoreButton: x,
      visibleItems: m,
      dropdownVisible: g,
      toggleMenu: I,
      navContainerRef: b,
      navListRef: T,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(ad, { ...o }) : null
    }
  );
};
function sd(e, { variant: t, isClient: n }) {
  const {
    className: a,
    logo: o = {},
    service: s = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: u,
    navigation: c,
    containerClasses: d,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: x,
    // deprecated (ignored)
    responsiveNavigation: y = !0,
    ...m
  } = e;
  "maxVisibleItems" in m && delete m.maxVisibleItems;
  const p = {
    ...s,
    text: s?.text ?? i
  }, g = p.href && !o.href || p.href && p.href === o.href, k = g ? p.href : o.href, M = we(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), C = we("nhsuk-header__container", d), b = we(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
  ), T = () => /* @__PURE__ */ r.jsxs(
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
  ), N = () => o.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: o.src,
      width: "280",
      alt: o.ariaLabel || "NHS"
    }
  ) : T(), j = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, _ = (w, $) => w ? $ ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: $, children: w }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: w }) : null, I = (w) => w.active || w.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: w.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }) : w.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text, S = c?.items && !y, v = S ? [] : c?.items, L = S ? c.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: M, role: "banner", "data-module": "nhsuk-header", ...h, ...m, children: [
    /* @__PURE__ */ r.jsxs("div", { className: C, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        k ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
          N(),
          j(),
          g && _(p.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          N(),
          j(),
          g && _(p.text)
        ] }),
        p.text && !g && _(p.text, p.href)
      ] }),
      /* @__PURE__ */ r.jsx(Ji, { ...u, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: b, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: we(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          d
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (v || []).map((w, $) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: we("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": w.active || w.current
            }, w.className),
            ...w.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: w.href,
                ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
                children: I(w)
              }
            )
          },
          $
        )) })
      }
    ) }),
    S && L.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: L.map((w, $) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: we("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": w.active || w.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: w.href,
            ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
            children: I(w)
          }
        )
      },
      `overflow-server-${$}`
    )) }) })
  ] });
}
const Iv = (e) => sd(e, {
  variant: "server",
  isClient: !1
}), od = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: u,
  ...c
}) => {
  const d = [
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
    !u && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), x = u || e || a || o, y = () => {
    if (!e) return null;
    const m = { className: h };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...m, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...m, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...m, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...m, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...m, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...m, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...m, children: e });
    }
  };
  return /* @__PURE__ */ r.jsxs(
    "section",
    {
      className: d,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: x && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          y(),
          u || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && x && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          y(),
          u || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
od.displayName = "Hero";
const ll = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: u,
  footerStyle: c,
  containerStyle: d
}) => {
  const f = (x, y = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: we("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": y
      }),
      children: /* @__PURE__ */ r.jsx(
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
  ), h = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...u }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: we("nhsuk-width-container", i),
        style: d,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: we("nhsuk-footer", e), style: c, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((x) => f(x)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((x) => f(x)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((x) => f(x)) }),
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((x) => f(x)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((x) => f(x, !0)),
              (n || []).map((x) => f(x, !0)),
              (a || []).map((x) => f(x, !0)),
              (o || []).map((x) => f(x, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Zr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function id(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ho(e) {
  let t, n, a;
  e.length !== 2 ? (t = Zr, n = (l, u) => Zr(e(l), u), a = (l, u) => e(l) - u) : (t = e === Zr || e === id ? e : ld, n = e, a = e);
  function o(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(l[f], u) < 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function s(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(l[f], u) <= 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function i(l, u, c = 0, d = l.length) {
    const f = o(l, u, c, d - 1);
    return f > c && a(l[f - 1], u) > -a(l[f], u) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function ld() {
  return 0;
}
function cd(e) {
  return e === null ? NaN : +e;
}
const ud = ho(Zr), dd = ud.right;
ho(cd).center;
function cl(e, t) {
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
class Oo extends Map {
  constructor(t, n = hd) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Uo(this, t));
  }
  has(t) {
    return super.has(Uo(this, t));
  }
  set(t, n) {
    return super.set(fd(this, t), n);
  }
  delete(t) {
    return super.delete(pd(this, t));
  }
}
function Uo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function fd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function pd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function hd(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const md = Math.sqrt(50), gd = Math.sqrt(10), xd = Math.sqrt(2);
function na(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= md ? 10 : s >= gd ? 5 : s >= xd ? 2 : 1;
  let l, u, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= n && n < 2 ? na(e, t, n * 2) : [l, u, c];
}
function bd(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? na(t, e, n) : na(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, u = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) u[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) u[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) u[c] = (o + c) / -i;
  else for (let c = 0; c < l; ++c) u[c] = (o + c) * i;
  return u;
}
function Ns(e, t, n) {
  return t = +t, e = +e, n = +n, na(e, t, n)[2];
}
function js(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? Ns(t, e, n) : Ns(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function vd(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function Ya(e, t) {
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
const Wo = Symbol("implicit");
function ul() {
  var e = new Oo(), t = [], n = [], a = Wo;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== Wo) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new Oo();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return ul(t, n).unknown(a);
  }, Ya.apply(o, arguments), o;
}
function dl() {
  var e = ul().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, x = o < a, y = x ? o : a, m = x ? a : o;
    s = (m - y) / Math.max(1, h - u + c * 2), l && (s = Math.floor(s)), y += (m - y - s * (h - u)) * d, i = s * (1 - u), l && (y = Math.round(y), i = Math.round(i));
    var p = vd(h).map(function(g) {
      return y + s * g;
    });
    return n(x ? p.reverse() : p);
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
    return arguments.length ? (u = Math.min(1, c = +h), f()) : u;
  }, e.paddingInner = function(h) {
    return arguments.length ? (u = Math.min(1, h), f()) : u;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (c = +h, f()) : c;
  }, e.align = function(h) {
    return arguments.length ? (d = Math.max(0, Math.min(1, h)), f()) : d;
  }, e.copy = function() {
    return dl(t(), [a, o]).round(l).paddingInner(u).paddingOuter(c).align(d);
  }, Ya.apply(f(), arguments);
}
function mo(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function fl(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Hr() {
}
var Mr = 0.7, ra = 1 / Mr, or = "\\s*([+-]?\\d+)\\s*", Pr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", yd = /^#([0-9a-f]{3,8})$/, wd = new RegExp(`^rgb\\(${or},${or},${or}\\)$`), _d = new RegExp(`^rgb\\(${Vt},${Vt},${Vt}\\)$`), Sd = new RegExp(`^rgba\\(${or},${or},${or},${Pr}\\)$`), kd = new RegExp(`^rgba\\(${Vt},${Vt},${Vt},${Pr}\\)$`), Cd = new RegExp(`^hsl\\(${Pr},${Vt},${Vt}\\)$`), Nd = new RegExp(`^hsla\\(${Pr},${Vt},${Vt},${Pr}\\)$`), zo = {
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
mo(Hr, Lr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Vo,
  // Deprecated! Use color.formatHex.
  formatHex: Vo,
  formatHex8: jd,
  formatHsl: Td,
  formatRgb: Go,
  toString: Go
});
function Vo() {
  return this.rgb().formatHex();
}
function jd() {
  return this.rgb().formatHex8();
}
function Td() {
  return pl(this).formatHsl();
}
function Go() {
  return this.rgb().formatRgb();
}
function Lr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = yd.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Yo(t) : n === 3 ? new Tt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? qr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? qr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = wd.exec(e)) ? new Tt(t[1], t[2], t[3], 1) : (t = _d.exec(e)) ? new Tt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Sd.exec(e)) ? qr(t[1], t[2], t[3], t[4]) : (t = kd.exec(e)) ? qr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Cd.exec(e)) ? Ko(t[1], t[2] / 100, t[3] / 100, 1) : (t = Nd.exec(e)) ? Ko(t[1], t[2] / 100, t[3] / 100, t[4]) : zo.hasOwnProperty(e) ? Yo(zo[e]) : e === "transparent" ? new Tt(NaN, NaN, NaN, 0) : null;
}
function Yo(e) {
  return new Tt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function qr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new Tt(e, t, n, a);
}
function Dd(e) {
  return e instanceof Hr || (e = Lr(e)), e ? (e = e.rgb(), new Tt(e.r, e.g, e.b, e.opacity)) : new Tt();
}
function Ts(e, t, n, a) {
  return arguments.length === 1 ? Dd(e) : new Tt(e, t, n, a ?? 1);
}
function Tt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
mo(Tt, Ts, fl(Hr, {
  brighter(e) {
    return e = e == null ? ra : Math.pow(ra, e), new Tt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Mr : Math.pow(Mr, e), new Tt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Tt(An(this.r), An(this.g), An(this.b), aa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qo,
  // Deprecated! Use color.formatHex.
  formatHex: qo,
  formatHex8: Id,
  formatRgb: Xo,
  toString: Xo
}));
function qo() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}`;
}
function Id() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}${Fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Xo() {
  const e = aa(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${An(this.r)}, ${An(this.g)}, ${An(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function aa(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function An(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Fn(e) {
  return e = An(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ko(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ht(e, t, n, a);
}
function pl(e) {
  if (e instanceof Ht) return new Ht(e.h, e.s, e.l, e.opacity);
  if (e instanceof Hr || (e = Lr(e)), !e) return new Ht();
  if (e instanceof Ht) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, u = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? s + o : 2 - s - o, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new Ht(i, l, u, e.opacity);
}
function $d(e, t, n, a) {
  return arguments.length === 1 ? pl(e) : new Ht(e, t, n, a ?? 1);
}
function Ht(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
mo(Ht, $d, fl(Hr, {
  brighter(e) {
    return e = e == null ? ra : Math.pow(ra, e), new Ht(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Mr : Math.pow(Mr, e), new Ht(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new Tt(
      os(e >= 240 ? e - 240 : e + 120, o, a),
      os(e, o, a),
      os(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Ht(Jo(this.h), Xr(this.s), Xr(this.l), aa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = aa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Jo(this.h)}, ${Xr(this.s) * 100}%, ${Xr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Jo(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Xr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function os(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const go = (e) => () => e;
function Md(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Pd(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Ld(e) {
  return (e = +e) == 1 ? hl : function(t, n) {
    return n - t ? Pd(t, n, e) : go(isNaN(t) ? n : t);
  };
}
function hl(e, t) {
  var n = t - e;
  return n ? Md(e, n) : go(isNaN(e) ? t : e);
}
const Zo = (function e(t) {
  var n = Ld(t);
  function a(o, s) {
    var i = n((o = Ts(o)).r, (s = Ts(s)).r), l = n(o.g, s.g), u = n(o.b, s.b), c = hl(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = u(d), o.opacity = c(d), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Fd(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Ad(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ed(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = xo(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Rd(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function sa(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Bd(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = xo(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var Ds = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, is = new RegExp(Ds.source, "g");
function Hd(e) {
  return function() {
    return e;
  };
}
function Od(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ud(e, t) {
  var n = Ds.lastIndex = is.lastIndex = 0, a, o, s, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (a = Ds.exec(e)) && (o = is.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, u.push({ i, x: sa(a, o) })), n = is.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? u[0] ? Od(u[0].x) : Hd(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) l[(f = u[d]).i] = f.x(c);
    return l.join("");
  });
}
function xo(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? go(t) : (n === "number" ? sa : n === "string" ? (a = Lr(t)) ? (t = a, Zo) : Ud : t instanceof Lr ? Zo : t instanceof Date ? Rd : Ad(t) ? Fd : Array.isArray(t) ? Ed : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Bd : sa)(e, t);
}
function Wd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function zd(e) {
  return function() {
    return e;
  };
}
function Vd(e) {
  return +e;
}
var Qo = [0, 1];
function tr(e) {
  return e;
}
function Is(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : zd(isNaN(t) ? NaN : 0.5);
}
function Gd(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Yd(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = Is(o, a), s = n(i, s)) : (a = Is(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function qd(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = Is(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = dd(e, l, 1, a) - 1;
    return s[u](o[u](l));
  };
}
function ml(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Xd() {
  var e = Qo, t = Qo, n = xo, a, o, s, i = tr, l, u, c;
  function d() {
    var h = Math.min(e.length, t.length);
    return i !== tr && (i = Gd(e[0], e[h - 1])), l = h > 2 ? qd : Yd, u = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (u || (u = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((c || (c = l(t, e.map(a), sa)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Vd), d()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Wd, d();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : tr, d()) : i !== tr;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, x) {
    return a = h, o = x, d();
  };
}
function gl() {
  return Xd()(tr, tr);
}
function Kd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function oa(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function dr(e) {
  return e = oa(Math.abs(e)), e ? e[1] : NaN;
}
function Jd(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], u = 0; o > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), s.push(n.substring(o -= l, o + l)), !((u += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Zd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Qd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ia(e) {
  if (!(t = Qd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new bo({
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
ia.prototype = bo.prototype;
function bo(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
bo.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ef(e) {
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
var xl;
function tf(e, t) {
  var n = oa(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (xl = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + oa(e, Math.max(0, t + s - 1))[0];
}
function ei(e, t) {
  var n = oa(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const ti = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Kd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ei(e * 100, t),
  r: ei,
  s: tf,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ni(e) {
  return e;
}
var ri = Array.prototype.map, ai = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function nf(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ni : Jd(ri.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? ni : Zd(ri.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = ia(f);
    var h = f.fill, x = f.align, y = f.sign, m = f.symbol, p = f.zero, g = f.width, k = f.comma, M = f.precision, C = f.trim, b = f.type;
    b === "n" ? (k = !0, b = "g") : ti[b] || (M === void 0 && (M = 12), C = !0, b = "g"), (p || h === "0" && x === "=") && (p = !0, h = "0", x = "=");
    var T = m === "$" ? n : m === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", N = m === "$" ? a : /[%p]/.test(b) ? i : "", j = ti[b], _ = /[defgprs%]/.test(b);
    M = M === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function I(S) {
      var v = T, L = N, w, $, D;
      if (b === "c")
        L = j(S) + L, S = "";
      else {
        S = +S;
        var P = S < 0 || 1 / S < 0;
        if (S = isNaN(S) ? u : j(Math.abs(S), M), C && (S = ef(S)), P && +S == 0 && y !== "+" && (P = !1), v = (P ? y === "(" ? y : l : y === "-" || y === "(" ? "" : y) + v, L = (b === "s" ? ai[8 + xl / 3] : "") + L + (P && y === "(" ? ")" : ""), _) {
          for (w = -1, $ = S.length; ++w < $; )
            if (D = S.charCodeAt(w), 48 > D || D > 57) {
              L = (D === 46 ? o + S.slice(w + 1) : S.slice(w)) + L, S = S.slice(0, w);
              break;
            }
        }
      }
      k && !p && (S = t(S, 1 / 0));
      var te = v.length + S.length + L.length, V = te < g ? new Array(g - te + 1).join(h) : "";
      switch (k && p && (S = t(V + S, V.length ? g - L.length : 1 / 0), V = ""), x) {
        case "<":
          S = v + S + L + V;
          break;
        case "=":
          S = v + V + S + L;
          break;
        case "^":
          S = V.slice(0, te = V.length >> 1) + v + S + L + V.slice(te);
          break;
        default:
          S = V + v + S + L;
          break;
      }
      return s(S);
    }
    return I.toString = function() {
      return f + "";
    }, I;
  }
  function d(f, h) {
    var x = c((f = ia(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(dr(h) / 3))) * 3, m = Math.pow(10, -y), p = ai[8 + y / 3];
    return function(g) {
      return x(m * g) + p;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var Kr, bl, vl;
rf({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function rf(e) {
  return Kr = nf(e), bl = Kr.format, vl = Kr.formatPrefix, Kr;
}
function af(e) {
  return Math.max(0, -dr(Math.abs(e)));
}
function sf(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(dr(t) / 3))) * 3 - dr(Math.abs(e)));
}
function of(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, dr(t) - dr(e)) + 1;
}
function lf(e, t, n, a) {
  var o = js(e, t, n), s;
  switch (a = ia(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = sf(o, i)) && (a.precision = s), vl(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = of(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = af(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return bl(a);
}
function cf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return bd(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return lf(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], u, c, d = 10;
    for (l < i && (c = i, i = l, l = c, c = o, o = s, s = c); d-- > 0; ) {
      if (c = Ns(i, l, n), c === u)
        return a[o] = i, a[s] = l, t(a);
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
function la() {
  var e = gl();
  return e.copy = function() {
    return ml(e, la());
  }, Ya.apply(e, arguments), cf(e);
}
function uf(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const ls = /* @__PURE__ */ new Date(), cs = /* @__PURE__ */ new Date();
function pt(e, t, n, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const u = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (c < s && s < i);
    return u;
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
  }), n && (o.count = (s, i) => (ls.setTime(+s), cs.setTime(+i), e(ls), e(cs), Math.floor(n(ls, cs))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const ca = pt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ca.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? pt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ca);
ca.range;
const pn = 1e3, At = pn * 60, hn = At * 60, gn = hn * 24, vo = gn * 7, si = gn * 30, us = gn * 365, nr = pt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * pn);
}, (e, t) => (t - e) / pn, (e) => e.getUTCSeconds());
nr.range;
const yo = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pn);
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getMinutes());
yo.range;
const df = pt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getUTCMinutes());
df.range;
const wo = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pn - e.getMinutes() * At);
}, (e, t) => {
  e.setTime(+e + t * hn);
}, (e, t) => (t - e) / hn, (e) => e.getHours());
wo.range;
const ff = pt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * hn);
}, (e, t) => (t - e) / hn, (e) => e.getUTCHours());
ff.range;
const Or = pt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * At) / gn,
  (e) => e.getDate() - 1
);
Or.range;
const _o = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / gn, (e) => e.getUTCDate() - 1);
_o.range;
const pf = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / gn, (e) => Math.floor(e / gn));
pf.range;
function Wn(e) {
  return pt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * At) / vo);
}
const qa = Wn(0), ua = Wn(1), hf = Wn(2), mf = Wn(3), fr = Wn(4), gf = Wn(5), xf = Wn(6);
qa.range;
ua.range;
hf.range;
mf.range;
fr.range;
gf.range;
xf.range;
function zn(e) {
  return pt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / vo);
}
const yl = zn(0), da = zn(1), bf = zn(2), vf = zn(3), pr = zn(4), yf = zn(5), wf = zn(6);
yl.range;
da.range;
bf.range;
vf.range;
pr.range;
yf.range;
wf.range;
const Fr = pt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Fr.range;
const _f = pt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
_f.range;
const xn = pt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
xn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
xn.range;
const On = pt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
On.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
On.range;
function Sf(e, t, n, a, o, s) {
  const i = [
    [nr, 1, pn],
    [nr, 5, 5 * pn],
    [nr, 15, 15 * pn],
    [nr, 30, 30 * pn],
    [s, 1, At],
    [s, 5, 5 * At],
    [s, 15, 15 * At],
    [s, 30, 30 * At],
    [o, 1, hn],
    [o, 3, 3 * hn],
    [o, 6, 6 * hn],
    [o, 12, 12 * hn],
    [a, 1, gn],
    [a, 2, 2 * gn],
    [n, 1, vo],
    [t, 1, si],
    [t, 3, 3 * si],
    [e, 1, us]
  ];
  function l(c, d, f) {
    const h = d < c;
    h && ([c, d] = [d, c]);
    const x = f && typeof f.range == "function" ? f : u(c, d, f), y = x ? x.range(c, +d + 1) : [];
    return h ? y.reverse() : y;
  }
  function u(c, d, f) {
    const h = Math.abs(d - c) / f, x = ho(([, , p]) => p).right(i, h);
    if (x === i.length) return e.every(js(c / us, d / us, f));
    if (x === 0) return ca.every(Math.max(js(c, d, f), 1));
    const [y, m] = i[h / i[x - 1][2] < i[x][2] / h ? x - 1 : x];
    return y.every(m);
  }
  return [l, u];
}
const [kf, Cf] = Sf(xn, Fr, qa, Or, wo, yo);
function ds(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function fs(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Cr(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Nf(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, c = Nr(o), d = jr(o), f = Nr(s), h = jr(s), x = Nr(i), y = jr(i), m = Nr(l), p = jr(l), g = Nr(u), k = jr(u), M = {
    a: P,
    A: te,
    b: V,
    B: H,
    c: null,
    d: di,
    e: di,
    f: Xf,
    g: sp,
    G: ip,
    H: Gf,
    I: Yf,
    j: qf,
    L: wl,
    m: Kf,
    M: Jf,
    p: O,
    q: U,
    Q: hi,
    s: mi,
    S: Zf,
    u: Qf,
    U: ep,
    V: tp,
    w: np,
    W: rp,
    x: null,
    X: null,
    y: ap,
    Y: op,
    Z: lp,
    "%": pi
  }, C = {
    a: re,
    A: W,
    b: oe,
    B: ke,
    c: null,
    d: fi,
    e: fi,
    f: fp,
    g: _p,
    G: kp,
    H: cp,
    I: up,
    j: dp,
    L: Sl,
    m: pp,
    M: hp,
    p: le,
    q: ce,
    Q: hi,
    s: mi,
    S: mp,
    u: gp,
    U: xp,
    V: bp,
    w: vp,
    W: yp,
    x: null,
    X: null,
    y: wp,
    Y: Sp,
    Z: Cp,
    "%": pi
  }, b = {
    a: I,
    A: S,
    b: v,
    B: L,
    c: w,
    d: ci,
    e: ci,
    f: Uf,
    g: li,
    G: ii,
    H: ui,
    I: ui,
    j: Rf,
    L: Of,
    m: Ef,
    M: Bf,
    p: _,
    q: Af,
    Q: zf,
    s: Vf,
    S: Hf,
    u: $f,
    U: Mf,
    V: Pf,
    w: If,
    W: Lf,
    x: $,
    X: D,
    y: li,
    Y: ii,
    Z: Ff,
    "%": Wf
  };
  M.x = T(n, M), M.X = T(a, M), M.c = T(t, M), C.x = T(n, C), C.X = T(a, C), C.c = T(t, C);
  function T(Z, ne) {
    return function(de) {
      var z = [], fe = -1, F = 0, R = Z.length, Y, se, ue;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++fe < R; )
        Z.charCodeAt(fe) === 37 && (z.push(Z.slice(F, fe)), (se = oi[Y = Z.charAt(++fe)]) != null ? Y = Z.charAt(++fe) : se = Y === "e" ? " " : "0", (ue = ne[Y]) && (Y = ue(de, se)), z.push(Y), F = fe + 1);
      return z.push(Z.slice(F, fe)), z.join("");
    };
  }
  function N(Z, ne) {
    return function(de) {
      var z = Cr(1900, void 0, 1), fe = j(z, Z, de += "", 0), F, R;
      if (fe != de.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (ne && !("Z" in z) && (z.Z = 0), "p" in z && (z.H = z.H % 12 + z.p * 12), z.m === void 0 && (z.m = "q" in z ? z.q : 0), "V" in z) {
        if (z.V < 1 || z.V > 53) return null;
        "w" in z || (z.w = 1), "Z" in z ? (F = fs(Cr(z.y, 0, 1)), R = F.getUTCDay(), F = R > 4 || R === 0 ? da.ceil(F) : da(F), F = _o.offset(F, (z.V - 1) * 7), z.y = F.getUTCFullYear(), z.m = F.getUTCMonth(), z.d = F.getUTCDate() + (z.w + 6) % 7) : (F = ds(Cr(z.y, 0, 1)), R = F.getDay(), F = R > 4 || R === 0 ? ua.ceil(F) : ua(F), F = Or.offset(F, (z.V - 1) * 7), z.y = F.getFullYear(), z.m = F.getMonth(), z.d = F.getDate() + (z.w + 6) % 7);
      } else ("W" in z || "U" in z) && ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0), R = "Z" in z ? fs(Cr(z.y, 0, 1)).getUTCDay() : ds(Cr(z.y, 0, 1)).getDay(), z.m = 0, z.d = "W" in z ? (z.w + 6) % 7 + z.W * 7 - (R + 5) % 7 : z.w + z.U * 7 - (R + 6) % 7);
      return "Z" in z ? (z.H += z.Z / 100 | 0, z.M += z.Z % 100, fs(z)) : ds(z);
    };
  }
  function j(Z, ne, de, z) {
    for (var fe = 0, F = ne.length, R = de.length, Y, se; fe < F; ) {
      if (z >= R) return -1;
      if (Y = ne.charCodeAt(fe++), Y === 37) {
        if (Y = ne.charAt(fe++), se = b[Y in oi ? ne.charAt(fe++) : Y], !se || (z = se(Z, de, z)) < 0) return -1;
      } else if (Y != de.charCodeAt(z++))
        return -1;
    }
    return z;
  }
  function _(Z, ne, de) {
    var z = c.exec(ne.slice(de));
    return z ? (Z.p = d.get(z[0].toLowerCase()), de + z[0].length) : -1;
  }
  function I(Z, ne, de) {
    var z = x.exec(ne.slice(de));
    return z ? (Z.w = y.get(z[0].toLowerCase()), de + z[0].length) : -1;
  }
  function S(Z, ne, de) {
    var z = f.exec(ne.slice(de));
    return z ? (Z.w = h.get(z[0].toLowerCase()), de + z[0].length) : -1;
  }
  function v(Z, ne, de) {
    var z = g.exec(ne.slice(de));
    return z ? (Z.m = k.get(z[0].toLowerCase()), de + z[0].length) : -1;
  }
  function L(Z, ne, de) {
    var z = m.exec(ne.slice(de));
    return z ? (Z.m = p.get(z[0].toLowerCase()), de + z[0].length) : -1;
  }
  function w(Z, ne, de) {
    return j(Z, t, ne, de);
  }
  function $(Z, ne, de) {
    return j(Z, n, ne, de);
  }
  function D(Z, ne, de) {
    return j(Z, a, ne, de);
  }
  function P(Z) {
    return i[Z.getDay()];
  }
  function te(Z) {
    return s[Z.getDay()];
  }
  function V(Z) {
    return u[Z.getMonth()];
  }
  function H(Z) {
    return l[Z.getMonth()];
  }
  function O(Z) {
    return o[+(Z.getHours() >= 12)];
  }
  function U(Z) {
    return 1 + ~~(Z.getMonth() / 3);
  }
  function re(Z) {
    return i[Z.getUTCDay()];
  }
  function W(Z) {
    return s[Z.getUTCDay()];
  }
  function oe(Z) {
    return u[Z.getUTCMonth()];
  }
  function ke(Z) {
    return l[Z.getUTCMonth()];
  }
  function le(Z) {
    return o[+(Z.getUTCHours() >= 12)];
  }
  function ce(Z) {
    return 1 + ~~(Z.getUTCMonth() / 3);
  }
  return {
    format: function(Z) {
      var ne = T(Z += "", M);
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
      var ne = T(Z += "", C);
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
var oi = { "-": "", _: " ", 0: "0" }, gt = /^\s*\d+/, jf = /^%/, Tf = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function Df(e) {
  return e.replace(Tf, "\\$&");
}
function Nr(e) {
  return new RegExp("^(?:" + e.map(Df).join("|") + ")", "i");
}
function jr(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function If(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function $f(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Mf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Pf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Lf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function ii(e, t, n) {
  var a = gt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function li(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Ff(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Af(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Ef(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function ci(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Rf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function ui(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Bf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Hf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Of(e, t, n) {
  var a = gt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Uf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Wf(e, t, n) {
  var a = jf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function zf(e, t, n) {
  var a = gt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Vf(e, t, n) {
  var a = gt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function di(e, t) {
  return Ve(e.getDate(), t, 2);
}
function Gf(e, t) {
  return Ve(e.getHours(), t, 2);
}
function Yf(e, t) {
  return Ve(e.getHours() % 12 || 12, t, 2);
}
function qf(e, t) {
  return Ve(1 + Or.count(xn(e), e), t, 3);
}
function wl(e, t) {
  return Ve(e.getMilliseconds(), t, 3);
}
function Xf(e, t) {
  return wl(e, t) + "000";
}
function Kf(e, t) {
  return Ve(e.getMonth() + 1, t, 2);
}
function Jf(e, t) {
  return Ve(e.getMinutes(), t, 2);
}
function Zf(e, t) {
  return Ve(e.getSeconds(), t, 2);
}
function Qf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ep(e, t) {
  return Ve(qa.count(xn(e) - 1, e), t, 2);
}
function _l(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? fr(e) : fr.ceil(e);
}
function tp(e, t) {
  return e = _l(e), Ve(fr.count(xn(e), e) + (xn(e).getDay() === 4), t, 2);
}
function np(e) {
  return e.getDay();
}
function rp(e, t) {
  return Ve(ua.count(xn(e) - 1, e), t, 2);
}
function ap(e, t) {
  return Ve(e.getFullYear() % 100, t, 2);
}
function sp(e, t) {
  return e = _l(e), Ve(e.getFullYear() % 100, t, 2);
}
function op(e, t) {
  return Ve(e.getFullYear() % 1e4, t, 4);
}
function ip(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? fr(e) : fr.ceil(e), Ve(e.getFullYear() % 1e4, t, 4);
}
function lp(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2);
}
function fi(e, t) {
  return Ve(e.getUTCDate(), t, 2);
}
function cp(e, t) {
  return Ve(e.getUTCHours(), t, 2);
}
function up(e, t) {
  return Ve(e.getUTCHours() % 12 || 12, t, 2);
}
function dp(e, t) {
  return Ve(1 + _o.count(On(e), e), t, 3);
}
function Sl(e, t) {
  return Ve(e.getUTCMilliseconds(), t, 3);
}
function fp(e, t) {
  return Sl(e, t) + "000";
}
function pp(e, t) {
  return Ve(e.getUTCMonth() + 1, t, 2);
}
function hp(e, t) {
  return Ve(e.getUTCMinutes(), t, 2);
}
function mp(e, t) {
  return Ve(e.getUTCSeconds(), t, 2);
}
function gp(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function xp(e, t) {
  return Ve(yl.count(On(e) - 1, e), t, 2);
}
function kl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? pr(e) : pr.ceil(e);
}
function bp(e, t) {
  return e = kl(e), Ve(pr.count(On(e), e) + (On(e).getUTCDay() === 4), t, 2);
}
function vp(e) {
  return e.getUTCDay();
}
function yp(e, t) {
  return Ve(da.count(On(e) - 1, e), t, 2);
}
function wp(e, t) {
  return Ve(e.getUTCFullYear() % 100, t, 2);
}
function _p(e, t) {
  return e = kl(e), Ve(e.getUTCFullYear() % 100, t, 2);
}
function Sp(e, t) {
  return Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function kp(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? pr(e) : pr.ceil(e), Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function Cp() {
  return "+0000";
}
function pi() {
  return "%";
}
function hi(e) {
  return +e;
}
function mi(e) {
  return Math.floor(+e / 1e3);
}
var Jn, Cl;
Np({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Np(e) {
  return Jn = Nf(e), Cl = Jn.format, Jn.parse, Jn.utcFormat, Jn.utcParse, Jn;
}
function jp(e) {
  return new Date(e);
}
function Tp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Nl(e, t, n, a, o, s, i, l, u, c) {
  var d = gl(), f = d.invert, h = d.domain, x = c(".%L"), y = c(":%S"), m = c("%I:%M"), p = c("%I %p"), g = c("%a %d"), k = c("%b %d"), M = c("%B"), C = c("%Y");
  function b(T) {
    return (u(T) < T ? x : l(T) < T ? y : i(T) < T ? m : s(T) < T ? p : a(T) < T ? o(T) < T ? g : k : n(T) < T ? M : C)(T);
  }
  return d.invert = function(T) {
    return new Date(f(T));
  }, d.domain = function(T) {
    return arguments.length ? h(Array.from(T, Tp)) : h().map(jp);
  }, d.ticks = function(T) {
    var N = h();
    return e(N[0], N[N.length - 1], T ?? 10);
  }, d.tickFormat = function(T, N) {
    return N == null ? b : c(N);
  }, d.nice = function(T) {
    var N = h();
    return (!T || typeof T.range != "function") && (T = t(N[0], N[N.length - 1], T ?? 10)), T ? h(uf(N, T)) : d;
  }, d.copy = function() {
    return ml(d, Nl(e, t, n, a, o, s, i, l, u, c));
  }, d;
}
function So() {
  return Ya.apply(Nl(kf, Cf, xn, Fr, qa, Or, wo, yo, nr, Cl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Dp({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": u
}) {
  const c = Ue(null), [d, f] = He(!1), [h, x] = He(!1), y = t(e.start), m = t(e.end), p = Math.max(m - y, 20), g = () => {
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
  }, k = e.progress ? p * e.progress / 100 : 0, M = () => {
    n?.(e);
  }, C = () => {
    a?.(e);
  }, b = (v) => {
    v.key === "Enter" ? (v.preventDefault(), M()) : v.key === " " && (v.preventDefault(), C());
  }, T = () => {
    f(!0);
  }, N = () => {
    f(!1);
  }, j = () => {
    x(!0), l?.();
  }, _ = () => {
    x(!1);
  }, I = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), S = {
    "--task-left": `${y}px`,
    "--task-width": `${p}px`,
    "--task-color": g(),
    left: `${y}px`,
    width: `${p}px`,
    backgroundColor: g()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: I,
      style: S,
      onClick: M,
      onDoubleClick: C,
      onKeyDown: b,
      onMouseDown: T,
      onMouseUp: N,
      onFocus: j,
      onBlur: _,
      "aria-label": u || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${k}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Ip({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let x = e.getTime(); x <= t.getTime(); x += 864e5)
    a.push(new Date(x));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = He(-1), u = Ue(null), c = (x) => {
    if (x.key === "ArrowLeft") {
      x.preventDefault();
      const y = Math.max(0, i === -1 ? 0 : i - 1);
      l(y), h(y);
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const y = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(y), h(y);
    } else if (x.key === "ArrowDown")
      x.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (x.key === "Home")
      x.preventDefault(), l(0), h(0);
    else if (x.key === "End") {
      x.preventDefault();
      const y = a.length - 1;
      l(y), h(y);
    }
  }, d = (x) => {
    if (x.key === "ArrowDown")
      x.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (x.key === "ArrowRight") {
      x.preventDefault();
      const y = u.current;
      y && y.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (x) => {
    const y = u.current?.querySelector(`[data-date-index="${x}"]`);
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
            onKeyDown: d,
            children: "Resources"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: u,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: f,
            children: a.map((x, y) => {
              const m = x.getTime() === s.getTime(), p = i === y;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": y,
                  className: `date-column ${m ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${x.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(y),
                  onKeyDown: c,
                  children: x.toLocaleDateString("en-GB", {
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
function $p({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, u] = He(!1), [c, d] = He(-1), f = Ue(null);
  Qe(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
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
          t.length > 0 && (m.preventDefault(), u(!0), d(0));
          break;
      }
      return;
    }
    switch (m.key) {
      case "ArrowLeft":
        m.preventDefault();
        const p = Math.max(0, c - 1);
        d(p), f.current?.querySelector(`[data-task-index="${p}"]`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault();
        const k = Math.min(t.length - 1, c + 1);
        d(k), f.current?.querySelector(`[data-task-index="${k}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        m.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        m.preventDefault(), u(!1), d(-1), f.current?.focus();
        break;
    }
  }, x = (m) => {
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
  }, y = (m) => {
    l && d(m);
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
            onKeyDown: x,
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
              l || d(-1);
            },
            children: t.map((m, p) => /* @__PURE__ */ r.jsx(
              Dp,
              {
                task: m,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => y(p)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function $v({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ue(null), [l, u] = He(800), c = Pe(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), d = Pe(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const m = new Date(a);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [a]), f = Pe(() => Math.ceil((d.getTime() - c.getTime()) / 864e5) + 1, [c, d]);
  Qe(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const p = new m((g) => {
      const k = g[0];
      k && u(Math.max(k.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const h = Pe(
    () => So().domain([c, d]).range([0, l]),
    [c, d, l]
  ), x = Pe(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const g = m.get(p.resourceId) || [];
      g.push(p), m.set(p.resourceId, g);
    }), m;
  }, [t]), y = (m) => {
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
        /* @__PURE__ */ r.jsx(Ip, { viewStart: c, viewEnd: d, dateCount: f }),
        /* @__PURE__ */ r.jsx(
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
            children: e.map((m, p) => /* @__PURE__ */ r.jsx(
              $p,
              {
                resource: m,
                tasks: x.get(m.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: p,
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
const fa = ({
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
) }), Mp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? jt.Children.toArray(t).filter(
    (p) => jt.isValidElement(p) && (p.type === fa || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? u() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const m = c();
    if (m && m.length > 0) {
      const p = m.slice().reverse().find((g) => g.href && !g.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), h = d(), x = we(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), y = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: x,
      "aria-label": y,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          jt.Children.map(t, (m, p) => jt.isValidElement(m) && (m.type === fa || m.type?.displayName === "BreadcrumbItem") ? jt.cloneElement(m, { key: p }) : null)
        ) : (
          // Render from items array
          f?.filter((m) => m.active || !!m.href).map((m, p) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: m.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...m.attributes || {},
              children: m.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: m.href,
              role: "link",
              ...m.attributes || {},
              children: m.text
            }
          ) }, p))
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
}, Pp = Mp;
Pp.Item = fa;
fa.displayName = "BreadcrumbItem";
const jl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = He(!1);
  Qe(() => {
    s(!0);
  }, []), Qe(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (u) => {
      const c = u.target, d = c.getAttribute("href");
      if (d && d.startsWith("#")) {
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(d) : null;
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const h = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = h;
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
  }, [o]);
  const i = we("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      className: i,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": o ? "true" : "false",
      ...a,
      children: e
    }
  );
}, Mv = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = we("nhsuk-pagination", o);
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
}, Pv = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = we("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, Tl = jt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: u,
  imgAlt: c,
  ...d
}, f) => {
  const h = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), x = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), y = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const k = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      mn,
      {
        level: a,
        className: y,
        children: k()
      }
    );
  }, p = () => d.children ? d.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, g = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
      ...d,
      className: h,
      ref: f,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: u,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: x, children: [
          m(),
          p(),
          g()
        ] })
      ]
    }
  );
});
Tl.displayName = "Card";
const Lv = ({
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
}, Fv = ({
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
}, Av = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: u,
  "data-testid": c,
  id: d,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": x
}) => {
  const y = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), p = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const k = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], M = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        k,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      mn,
      {
        level: a,
        className: m,
        children: M
      }
    );
  }, g = () => u || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      "data-testid": c,
      id: d,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": x,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: g() })
      ]
    }
  );
}, Lp = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...u
}) => {
  const c = we(
    "nhsuk-panel",
    t
  ), d = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    mn,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    mn,
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
  return /* @__PURE__ */ r.jsxs("div", { className: c, id: e, ...u, children: [
    d(),
    f()
  ] });
}, Ev = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = we("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, Rv = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = we(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((u, c) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: u.href,
          className: "nhsuk-link",
          ...u.attributes,
          children: [
            s(u),
            u.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: u.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: o, ...a, children: e.map((l, u) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, u)) }) });
}, Tr = { current: null }, Fp = () => {
  if (Tr.current) return Tr.current;
  try {
    Tr.current = require("prismjs");
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
    Tr.current = null;
  }
  return Tr.current;
}, Ap = (e) => {
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
}, pa = (e, t, n) => {
  if (n || !t) return e;
  const a = Fp();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return Ap(e);
}, Ep = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: u = !1,
  panelClasses: c,
  tableClasses: d,
  classes: f,
  attributes: h,
  "data-testid": x,
  columns: y,
  data: m,
  visuallyHiddenCaption: p = !1
}) => {
  const g = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), k = we(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), M = we(f), C = (_, I) => {
    const S = we(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${_.format}`]: _.format
      },
      _.classes
    ), v = {
      scope: "col",
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && { role: "columnheader" },
      ..._.attributes
    };
    let L;
    if (_.node != null)
      L = /* @__PURE__ */ r.jsx(r.Fragment, { children: _.node });
    else if (_.html)
      L = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } });
    else if (_.code != null) {
      const w = Array.isArray(_.code), $ = w ? _.code.join(`
`) : _.code, D = w || $.includes(`
`), P = {
        className: we("nhsuk-table__code", _.codeClassName, {
          "nhsuk-table__code--block": D,
          "nhsuk-table__code--inline": !D
        }),
        ..._.codeLanguage ? { "data-language": _.codeLanguage } : {}
      }, te = pa($, _.codeLanguage);
      L = D ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...P,
          dangerouslySetInnerHTML: { __html: te }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...P,
          dangerouslySetInnerHTML: { __html: te }
        }
      );
    } else
      L = _.text;
    return /* @__PURE__ */ r.jsx("th", { className: S, ...v, children: L }, I);
  }, b = (_, I, S) => {
    const v = o && S || _.rowHeader, L = we(
      v ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${v ? "header" : "cell"}--${_.format}`]: _.format
      },
      _.classes
    ), w = {
      ...v && { scope: "row" },
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && {
        role: v ? "rowheader" : "cell",
        ..._.header && { "data-label": _.header }
      },
      ..._.attributes
    };
    let $;
    if (_.node != null)
      $ = /* @__PURE__ */ r.jsx(r.Fragment, { children: _.node });
    else if (_.html)
      $ = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } });
    else if (_.code != null) {
      const te = Array.isArray(_.code), V = te ? _.code.join(`
`) : _.code, H = te || V.includes(`
`), O = {
        className: we("nhsuk-table__code", _.codeClassName, {
          "nhsuk-table__code--block": H,
          "nhsuk-table__code--inline": !H
        }),
        ..._.codeLanguage ? { "data-language": _.codeLanguage } : {}
      }, U = pa(
        V,
        _.codeLanguage,
        _.disableHighlight
      );
      $ = H ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...O,
          dangerouslySetInnerHTML: { __html: U }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...O,
          dangerouslySetInnerHTML: { __html: U }
        }
      );
    } else
      $ = _.text;
    const D = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && _.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        _.header,
        " "
      ] }),
      $
    ] }), P = v ? "th" : "td";
    return /* @__PURE__ */ r.jsx(P, { className: L, ...w, children: D }, I);
  };
  let T = t, N = e;
  !T && y && y.length && (T = y.map((_) => ({
    text: _.title,
    format: _.format,
    classes: _.headerClasses,
    attributes: _.headerAttributes
  }))), !N && y && m && m.length && (N = m.map((_, I) => y.map((S) => {
    const v = S.accessor ? S.accessor(_, I) : _[S.key];
    let L = { format: S.format, classes: S.cellClasses, attributes: S.cellAttributes };
    if (S.rowHeader && (L.rowHeader = !0), S.render) {
      const w = S.render(v, _, I, S);
      return w == null || typeof w == "boolean" ? { ...L, text: "" } : typeof w == "string" || typeof w == "number" ? { ...L, text: String(w) } : { ...L, ...w };
    }
    return { ...L, text: v != null ? String(v) : "" };
  })));
  const j = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: k,
      ...s && { role: "table" },
      ...h,
      ...x && { "data-testid": x },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: we(g, p && "nhsuk-u-visually-hidden"), children: n }),
        T && T.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: T.map(
              (_, I) => C(_, I)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: N && N.map((_, I) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: _.map(
              (S, v) => b(S, v, v === 0)
            )
          },
          I
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ r.jsxs(Lp, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(mn, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    j()
  ] }) : M ? /* @__PURE__ */ r.jsx("div", { className: M, children: j() }) : j();
}, Rp = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = we(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, Dl = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, Il = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: h,
  as: x = "th"
}) => {
  const y = we(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    u
  ), m = {
    scope: "col",
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...h && { role: "columnheader" },
    ...f
  };
  let p;
  if (n != null) p = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) p = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const k = Array.isArray(a), M = k ? a.join(`
`) : a, C = k || M.includes(`
`), b = {
      className: we("nhsuk-table__code", s, {
        "nhsuk-table__code--block": C,
        "nhsuk-table__code--inline": !C
      }),
      ...o ? { "data-language": o } : {}
    }, T = pa(
      M,
      o,
      i
    );
    p = C ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...b,
        dangerouslySetInnerHTML: { __html: T }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: T } });
  } else p = e;
  const g = x;
  return /* @__PURE__ */ r.jsx(g, { className: y, ...m, children: p });
}, Bp = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: h,
  rowHeader: x
}) => {
  const y = !!x, m = y ? "th" : "td", p = we(
    y ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${y ? "header" : "cell"}--${l}`,
    u
  ), g = {
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...y && { scope: "row" },
    ...h && { role: y ? "rowheader" : "cell" },
    ...f
  };
  let k;
  if (n != null) k = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) k = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const M = Array.isArray(a), C = M ? a.join(`
`) : a, b = M || C.includes(`
`), T = {
      className: we("nhsuk-table__code", s, {
        "nhsuk-table__code--block": b,
        "nhsuk-table__code--inline": !b
      }),
      ...o ? { "data-language": o } : {}
    }, N = pa(C, o, i);
    k = b ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: N } }) }) : /* @__PURE__ */ r.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: N } });
  } else k = e;
  return /* @__PURE__ */ r.jsx(m, { className: p, ...g, children: k });
}, bn = Ep;
bn.Caption = Rp;
bn.BodyRow = Dl;
bn.HeaderCell = Il;
bn.Cell = Bp;
let gi = !1, xi = !1;
Object.defineProperty(bn, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !gi && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), gi = !0), Dl;
  }
});
Object.defineProperty(bn, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !xi && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), xi = !0), Il;
  }
});
const Bv = mr(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: u,
  id: c,
  "data-testid": d,
  ...f
}, h) => {
  const x = n !== void 0, [y, m] = He(() => t || e[0]?.id || ""), p = x ? n : y, g = Ue(null), k = Ue(/* @__PURE__ */ new Map()), M = be((I) => {
    x || m(I), a?.(I);
  }, [x, a]), C = be((I) => {
    o?.(I), l && M(I);
  }, [o, l, M]), b = be((I, S) => {
    const v = e.filter(($) => !$.disabled).map(($) => $.id), L = v.indexOf(S);
    let w = null;
    switch (I.key) {
      case "ArrowLeft":
        w = L > 0 ? L - 1 : v.length - 1;
        break;
      case "ArrowRight":
        w = L < v.length - 1 ? L + 1 : 0;
        break;
      case "Home":
        w = 0;
        break;
      case "End":
        w = v.length - 1;
        break;
      case "Escape":
        I.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (w !== null) {
      I.preventDefault();
      const $ = v[w], D = k.current.get($);
      D && (D.focus(), C($));
    }
  }, [e, C, i]), T = be((I, S) => {
    S ? k.current.set(I, S) : k.current.delete(I);
  }, []), N = be((I) => {
    const S = k.current.get(I);
    S && S.focus();
  }, []);
  Xi(h, () => ({
    focusTab: N,
    getActiveTab: () => p,
    getTabListElement: () => g.current
  }), [N, p]);
  const j = be((I) => {
    const S = I.relatedTarget;
    g.current?.contains(S) || s?.();
  }, [s]), _ = we("nhsuk-tabs", u);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: _,
      id: c,
      "data-testid": d,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: g,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: j,
                children: e.map((I) => {
                  const S = I.id === p, v = I.disabled, L = we("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": S,
                    "nhsuk-tabs__list-item--disabled": v
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: L, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (w) => T(I.id, w),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": S,
                      "aria-controls": `${I.id}-panel`,
                      id: `${I.id}-tab`,
                      tabIndex: S ? 0 : -1,
                      disabled: v,
                      onClick: () => !v && M(I.id),
                      onKeyDown: (w) => !v && b(w, I.id),
                      onFocus: () => !v && C(I.id),
                      ...I.attributes,
                      children: I.label
                    }
                  ) }, I.id);
                })
              }
            )
          }
        ),
        e.map((I) => {
          const S = I.id === p;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${I.id}-tab`,
              id: `${I.id}-panel`,
              hidden: !S,
              children: I.content
            },
            I.id
          );
        })
      ]
    }
  );
}), Hp = mr(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...u
  }, c) => {
    const d = [
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
        ref: c,
        id: i,
        className: d,
        open: o,
        ...u,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Hp.displayName = "Details";
const Op = mr(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const u = ["nhsuk-do-dont-list"];
    s && u.push(s);
    const c = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], d = () => t === "cross" ? /* @__PURE__ */ r.jsxs(
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
    ), f = (x) => t === "cross" && !a ? `do not ${x}` : x, h = () => /* @__PURE__ */ r.jsx(
      mn,
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
        className: u.join(" "),
        ...i,
        children: [
          h(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((x, y) => /* @__PURE__ */ r.jsxs("li", { children: [
            d(),
            f(x.item)
          ] }, y)) }) })
        ]
      }
    );
  }
);
Op.displayName = "DoDontList";
const Up = mr(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...u
  }, c) => {
    const d = [
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
        ref: c,
        id: i,
        className: d,
        open: o,
        ...u,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Up.displayName = "Expander";
const Wp = mr(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const c = u + 1, d = `${t}-${c}-hint`, f = `${t}-${c}-status`, h = !!l.href, x = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), y = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        zp,
        {
          item: l,
          itemClasses: x,
          hasLink: h,
          hintId: d,
          statusId: f,
          ariaDescribedBy: y
        },
        u
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
), zp = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: d,
        href: e.href,
        "aria-describedby": s,
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
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, u = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ r.jsx(Ze, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: o, children: d });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
Wp.displayName = "TaskList";
const Hv = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), u = () => o || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), c = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        qi(
          d,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            e,
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        u()
      ]
    }
  );
}, Ov = ({
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
}, Vp = ({
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
      ta,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: o,
        onChange: (u) => s?.(u.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      ta,
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
] }), Gp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Ze, { color: Yp(n.status), text: n.label }) }, n.status)) });
function Yp(e) {
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
const Uv = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: o,
  selectionMode: s = "single",
  a11yMode: i,
  className: l,
  style: u,
  getSlotAriaLabel: c,
  toolbar: d,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: x = !0,
  legendPlacement: y = "bottom",
  onA11yModeChange: m
}) => {
  const [p, g] = He("grid"), k = i || p, [M, C] = He(a || []), b = n ?? M, T = Pe(() => {
    const w = /* @__PURE__ */ new Set();
    return e.forEach(($) => w.add(new Date($.start).getTime())), Array.from(w).sort(($, D) => $ - D);
  }, [e]), N = Pe(() => {
    const w = {};
    return e.forEach(($) => {
      const D = new Date($.start).getTime();
      w[D] || (w[D] = {});
      const P = $.capacity - $.booked - ($.held || 0);
      w[D][$.sessionId] = { slot: $, remaining: P };
    }), w;
  }, [e]), j = be((w) => {
    if (s === "single") {
      const $ = [w.id];
      n || C($), o?.($, { lastAction: "select" });
    } else {
      const $ = b.includes(w.id), D = $ ? b.filter((P) => P !== w.id) : [...b, w.id];
      n || C(D), o?.(D, { lastAction: $ ? "deselect" : "select" });
    }
  }, [s, b, n, o]), _ = Pe(() => h || (x ? Array.from(new Set(e.map(($) => $.status))).map(($) => ({
    status: $,
    label: $.charAt(0).toUpperCase() + $.slice(1)
  })) : void 0), [h, x, e]), I = _ ? /* @__PURE__ */ r.jsx(
    Gp,
    {
      items: _,
      orientation: y === "left" || y === "right" ? "vertical" : "horizontal"
    }
  ) : null, S = (w) => {
    i || g(w), m?.(w);
  }, v = d || (f ? /* @__PURE__ */ r.jsx(
    Vp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: k,
      onA11yModeChange: S
    }
  ) : null), L = /* @__PURE__ */ r.jsx("div", { style: u, className: we(l), children: /* @__PURE__ */ r.jsx(Cs, { className: we("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Hn, { children: /* @__PURE__ */ r.jsx($r, { width: Bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    v,
    y === "top" && I,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((w) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => j(w), "aria-pressed": b.includes(w.id), children: [
      Dr(new Date(w.start)),
      " – ",
      Dr(new Date(w.end)),
      " (",
      w.status,
      ")"
    ] }) }, w.id)) }),
    y === "bottom" && I
  ] }) }) }) }) });
  return k === "list" ? L : /* @__PURE__ */ r.jsx("div", { style: u, className: we(l), children: /* @__PURE__ */ r.jsx(Cs, { className: we("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Hn, { children: /* @__PURE__ */ r.jsx($r, { width: Bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    v,
    y === "top" && I,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": T.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((w) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${w.specialty}`, className: "nhs-slot-matrix__session-header", children: w.specialty }, w.id))
      ] }),
      T.map((w) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Dr(new Date(w)), children: Dr(new Date(w)) }),
        t.map(($) => {
          const D = N[w]?.[$.id];
          if (!D)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, $.id);
          const { slot: P, remaining: te } = D, V = b.includes(P.id), H = c ? c(P) : `Slot ${Dr(new Date(P.start))} ${P.status}${te === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": P.status,
              className: we("nhs-slot-matrix__cell", V && "nhs-slot-matrix__cell--selected"),
              "aria-label": H,
              "aria-selected": V || void 0,
              onClick: () => j(P),
              children: te > 0 ? `${te} left` : "Full"
            },
            P.id
          );
        })
      ] }, w))
    ] }),
    y === "bottom" && I
  ] }) }) }) }) });
};
function bi(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Dr(e) {
  return `${bi(e.getHours())}:${bi(e.getMinutes())}`;
}
const qp = ({
  title: e,
  value: t,
  subtitle: n,
  variant: a = "default",
  href: o,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const u = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    s
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(mn, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return o ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${u} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: c
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u,
      "aria-label": i,
      ...l,
      children: c
    }
  );
}, Wv = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Cs, { children: /* @__PURE__ */ r.jsx(Hn, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    $r,
    {
      width: Bn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(qp, { ...o })
    },
    s
  )) }) }) });
}, Xp = jt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: u,
    ariaLabelledby: c,
    ariaDescribedby: d,
    className: f,
    tableClassName: h,
    bordered: x = !1,
    striped: y = !1,
    responsive: m = !1,
    tableType: p = "default"
  }, g) => {
    const k = Ue(null), M = Ue(null), C = Ue(null);
    jt.useImperativeHandle(g, () => k.current, []);
    const [b, T] = He(0), [N, j] = He(0), [_, I] = He("headers"), [S, v] = He("browse"), L = t.length, w = e.length, $ = Pe(() => !n || n.length === 0 ? e : [...e].sort((U, re) => {
      for (const { key: W, direction: oe } of n) {
        const ke = U[W], le = re[W];
        if (ke == null && le == null) continue;
        if (ke == null) return 1;
        if (le == null) return -1;
        let ce = 0;
        if (typeof ke == "number" && typeof le == "number" ? ce = ke - le : ce = String(ke).localeCompare(String(le)), ce !== 0)
          return oe === "asc" ? ce : -ce;
      }
      return 0;
    }), [e, n]), D = be((U, re) => {
      setTimeout(() => {
        const W = k.current?.querySelector(
          `tbody tr:nth-child(${U + 1}) td:nth-child(${re + 1})`
        );
        W && (W.focus(), typeof W.scrollIntoView == "function" && W.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), P = be((U) => {
      setTimeout(() => {
        const re = k.current?.querySelector(`th:nth-child(${U + 1})`);
        re && (re.focus(), typeof re.scrollIntoView == "function" && re.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = be((U) => {
      a?.(U);
    }, [a]), V = be((U) => {
      s?.(U);
    }, [s]), H = be((U) => {
      const { key: re } = U;
      switch (re) {
        case "Enter":
          if (U.preventDefault(), _ === "headers" && S === "browse")
            v("navigate"), P(N);
          else if (_ === "headers" && S === "navigate") {
            const W = t[N];
            W && te(W.key);
          } else _ === "cells" && S === "browse" ? (v("navigate"), D(b, N)) : _ === "cells" && S === "navigate" && V(b);
          break;
        case "Escape":
          U.preventDefault(), (_ === "headers" && S === "navigate" || _ === "cells" && S === "navigate") && v("browse");
          break;
        case "ArrowLeft":
          if (U.preventDefault(), S === "navigate" || S === "browse" && _ === "headers") {
            if (_ === "headers") {
              const W = Math.max(0, N - 1);
              j(W), P(W);
            } else if (_ === "cells") {
              const W = Math.max(0, N - 1);
              j(W), D(b, W);
            }
          }
          break;
        case "ArrowRight":
          if (U.preventDefault(), S === "navigate" || S === "browse" && _ === "headers") {
            if (_ === "headers") {
              const W = Math.min(L - 1, N + 1);
              j(W), P(W);
            } else if (_ === "cells") {
              const W = Math.min(L - 1, N + 1);
              j(W), D(b, W);
            }
          }
          break;
        case "ArrowUp":
          if (U.preventDefault(), _ === "cells") {
            if (S === "browse") {
              const W = Math.max(0, b - 1);
              T(W), D(W, 0), j(0);
            } else if (S === "navigate")
              if (b > 0) {
                const W = b - 1;
                T(W), D(W, N);
              } else
                I("headers"), v("browse"), P(N);
          }
          break;
        case "ArrowDown":
          if (U.preventDefault(), _ === "headers" && S === "browse")
            I("cells"), T(0), j(0), D(0, 0);
          else if (_ === "cells") {
            const W = w - 1;
            if (S === "browse") {
              const oe = Math.min(W, b + 1);
              T(oe), D(oe, 0), j(0);
            } else if (S === "navigate" && b < W) {
              const oe = b + 1;
              T(oe), D(oe, N);
            }
          }
          break;
        case "Home":
          U.preventDefault(), _ === "headers" ? (j(0), P(0)) : _ === "cells" && (U.ctrlKey ? (T(0), j(0), D(0, 0)) : (j(0), D(b, 0)));
          break;
        case "End":
          if (U.preventDefault(), _ === "headers") {
            const W = L - 1;
            j(W), P(W);
          } else if (_ === "cells")
            if (U.ctrlKey) {
              const W = w - 1, oe = L - 1;
              T(W), j(oe), D(W, oe);
            } else {
              const W = L - 1;
              j(W), D(b, W);
            }
          break;
        case " ":
          if (U.preventDefault(), _ === "headers" && S === "navigate") {
            const W = t[N];
            W && te(W.key);
          } else _ === "cells" && S === "navigate" && V(b);
          break;
      }
    }, [
      _,
      S,
      N,
      b,
      L,
      w,
      t,
      D,
      P,
      te,
      V
    ]);
    Qe(() => {
      const U = k.current;
      if (U)
        return U.addEventListener("keydown", H), () => U.removeEventListener("keydown", H);
    }, [H]);
    const O = we(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": y,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: k,
        className: O,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": c,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: M, role: "row", children: t.map((U, re) => {
            const W = n?.find((le) => le.key === U.key), oe = !!W, ke = _ === "headers" && N === re;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: we("sortable-header", {
                  "sortable-header--focused": ke
                }),
                role: "columnheader",
                tabIndex: ke ? 0 : -1,
                onClick: () => te(U.key),
                onKeyDown: (le) => {
                  (le.key === "Enter" || le.key === " ") && (le.preventDefault(), te(U.key));
                },
                "aria-sort": oe ? W?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: U.label }),
                  oe && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((le) => le.key === U.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: W?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              U.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: C, className: "nhsuk-table__body", role: "rowgroup", children: $.map((U, re) => {
            const W = o === re, oe = _ === "cells" && b === re;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: we("data-row", {
                  "data-row--selected": W,
                  "data-row--focused": oe
                }),
                "aria-selected": W,
                children: t.map((ke, le) => {
                  const ce = ke.tableRenderer ? ke.tableRenderer(U) : ke.render ? ke.render(U) : U[ke.key], Z = _ === "cells" && b === re && N === le, ne = () => typeof ce == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: ce ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: ce ? "Yes" : "No" })
                  ] }) : String(ce ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: we("data-cell", {
                        "data-cell--focused": Z
                      }),
                      tabIndex: Z ? 0 : -1,
                      onClick: () => V(re),
                      children: ne()
                    },
                    ke.key
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
Xp.displayName = "AriaDataGrid";
const $l = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: u = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const f = Ue(null), h = Ue(null), x = Ue(null), y = be((_, I) => {
    u || (h.current = I, _.dataTransfer.effectAllowed = "move", _.dataTransfer.setData("text/plain", I));
  }, [u]), m = be((_, I) => {
    u || h.current === I || (_.preventDefault(), _.dataTransfer.dropEffect = "move", x.current = I);
  }, [u]), p = be((_, I) => {
    if (u) return;
    _.preventDefault();
    const S = h.current;
    if (!S || S === I) return;
    const v = e.findIndex((w) => w.key === S), L = e.findIndex((w) => w.key === I);
    if (v !== -1 && L !== -1) {
      const w = [...e], [$] = w.splice(v, 1);
      w.splice(L, 0, $), n(w);
    }
    h.current = null, x.current = null;
  }, [u, e, n]), g = be(() => {
    h.current = null, x.current = null;
  }, []), k = be((_) => {
    const I = t.find((S) => S.key === _);
    return I ? I.label : _;
  }, [t]), M = be((_) => ["red", "orange", "blue", "aqua-green", "grey"][_] || "grey", []), C = be((_) => {
    if (u) return;
    const I = e.map(
      (S) => S.key === _ ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    n(I);
  }, [e, n, u]), b = be((_) => {
    if (u) return;
    const I = e.filter((S) => S.key !== _);
    n(I);
  }, [e, n, u]), T = be(() => {
    u || n([]);
  }, [n, u]), N = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const _ = e.map((I, S) => {
      const v = I.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${k(I.key)} (${v})`;
    });
    if (_.length === 1)
      return `Sorted by: ${_[0]}`;
    if (_.length === 2)
      return `Sorted by: ${_.join(" and ")}`;
    {
      const I = _.pop();
      return `Sorted by: ${_.join(", ")}, and ${I}`;
    }
  }, j = Pe(() => {
    const _ = ["sort-description"];
    return l && _.push("sort-help"), d && _.push(d), _.join(" ");
  }, [l, d]);
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
        children: N()
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": j,
          children: e.map((_, I) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (S) => y(S, _.key),
              onDragOver: (S) => m(S, _.key),
              onDrop: (S) => p(S, _.key),
              onDragEnd: g,
              onClick: () => C(_.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${_.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": _.key,
              children: /* @__PURE__ */ r.jsx(
                Ze,
                {
                  color: M(I),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => b(_.key),
                  disabled: u,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${I + 1}`, children: I + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: k(_.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (S) => {
                          S.stopPropagation(), C(_.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${k(_.key)}. Currently ${_.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${_.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${_.direction}`,
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
            _.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        bt,
        {
          variant: "secondary",
          onClick: T,
          disabled: u,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function Kp(e, t) {
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), u = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
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
const $s = mr(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: u,
    ariaDescription: c,
    className: d = "",
    disabled: f = !1,
    orientation: h = "horizontal",
    id: x,
    isLoading: y = !1,
    loadingComponent: m,
    error: p = null,
    errorComponent: g,
    "data-testid": k,
    actions: M,
    actionsMinGap: C = 16,
    forceActionsAbove: b = !1
  } = t, N = Ue(
    x || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, j = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), _ = `${N}-description`, I = `${N}-navigation-help`, {
    dataComparator: S = (A, q) => JSON.stringify(A) === JSON.stringify(q),
    filterFunction: v = (A) => A,
    booleanRenderer: L = (A) => A ? "✓" : "✗"
  } = a || {}, w = s !== void 0, $ = s ?? 0, [D, P] = He({
    focusArea: "tabs",
    focusedTabIndex: $,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), te = Pe(() => ({
    selectedIndex: $,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [$]), [V, H] = Ki(Kp, te);
  Qe(() => {
    const A = V.tabLoadingStates.length, q = o.length;
    A !== q && H({ type: "ADJUST_ARRAYS", payload: { newLength: q } });
  }, [o.length]), Qe(() => {
    w && H({ type: "SET_SELECTED_INDEX", payload: $ });
  }, [$, w]), Qe(() => {
    P((A) => ({
      ...A,
      focusArea: "tabs",
      focusedTabIndex: V.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [V.selectedIndex]), Qe(() => {
    l && l(V.globalSelectedRowData);
  }, [V.globalSelectedRowData, l]);
  const O = be(
    (A, q) => S(A, q),
    [S]
  ), U = be(
    (A) => {
      A >= 0 && A < o.length && !o[A].disabled && (H({ type: "SET_SELECTED_INDEX", payload: A }), P((q) => ({
        ...q,
        focusedTabIndex: A,
        focusArea: "tabs"
      })), i?.(A));
    },
    [o, i]
  ), re = Ue(!1), W = be(
    (A, q) => {
      if (!q?.force && !re.current && A === 0) {
        re.current = !0;
        return;
      }
      re.current = !0, setTimeout(() => {
        const Q = oe.current[A], ee = Q?.parentElement;
        if (Q && ee) {
          const J = Q.offsetLeft, ae = Q.offsetWidth, me = ee.clientWidth, ve = J - me / 2 + ae / 2;
          try {
            ee.scrollTo({
              left: Math.max(0, ve),
              behavior: "smooth"
            });
          } catch {
            Q.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!Q,
          tabListElementExists: !!ee
        });
      }, 50);
    },
    []
  ), oe = Ue([]), ke = Ue([]), le = be(
    (A, q) => {
      const Q = V.sortConfig || [], ee = Q.find(
        (me) => me.key === q
      );
      let J;
      ee ? ee.direction === "asc" ? J = Q.map(
        (me) => me.key === q ? { ...me, direction: "desc" } : me
      ) : J = Q.filter(
        (me) => me.key !== q
      ) : J = [...Q, { key: q, direction: "asc" }], H({
        type: "SET_SORT",
        payload: J
      }), o[A].onSort?.(q);
    },
    [V.sortConfig, o]
  ), ce = be(
    (A) => {
      setTimeout(() => {
        const q = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] th:nth-child(${A + 1})`
        );
        q && q.focus();
      }, 0);
    },
    [V.selectedIndex]
  ), Z = be(
    (A) => L(A),
    [L]
  ), ne = be(
    (A, q) => {
      setTimeout(() => {
        const Q = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] tbody tr:nth-child(${A + 1}) td:nth-child(${q + 1})`
        );
        Q && Q.focus();
      }, 0);
    },
    [V.selectedIndex]
  );
  Qe(() => {
    D.isGridActive && (D.focusArea === "headers" ? setTimeout(() => {
      ce(D.focusedHeaderIndex);
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
    ce,
    ne
  ]), Qe(() => {
    W(V.selectedIndex);
  }, [V.selectedIndex, W]);
  const de = be(
    (A, q) => {
      const { key: Q } = A, ee = o[V.selectedIndex], J = ee?.columns.length || 0;
      switch (Q) {
        case "ArrowLeft":
          A.preventDefault();
          const ae = Math.max(0, q - 1);
          P((Ce) => ({
            ...Ce,
            focusedHeaderIndex: ae
          })), ce(ae);
          break;
        case "ArrowRight":
          A.preventDefault();
          const me = Math.min(J - 1, q + 1);
          P((Ce) => ({
            ...Ce,
            focusedHeaderIndex: me
          })), ce(me);
          break;
        case "ArrowUp":
          A.preventDefault(), P((Ce) => ({
            ...Ce,
            focusArea: "tabs",
            focusedTabIndex: V.selectedIndex
          })), W(V.selectedIndex), oe.current[V.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          A.preventDefault(), P((Ce) => ({
            ...Ce,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: q,
            isGridActive: !0
          }));
          break;
        case "Home":
          A.preventDefault(), P((Ce) => ({ ...Ce, focusedHeaderIndex: 0 })), ce(0);
          break;
        case "End":
          A.preventDefault();
          const ve = J - 1;
          P((Ce) => ({
            ...Ce,
            focusedHeaderIndex: ve
          })), ce(ve);
          break;
        case "Enter":
        case " ":
          A.preventDefault();
          const ye = ee?.columns[q]?.key;
          ye && le(V.selectedIndex, ye);
          break;
      }
    },
    [
      o,
      V.selectedIndex,
      le,
      P,
      ce,
      ne,
      oe
    ]
  ), z = be(
    (A, q, Q) => {
      const { key: ee } = A, J = o[V.selectedIndex], ae = J?.data.length || 0, me = J?.columns.length || 0;
      switch (ee) {
        case "ArrowUp":
          if (A.preventDefault(), q === 0)
            P((ge) => ({
              ...ge,
              focusArea: "headers",
              focusedHeaderIndex: Q,
              isGridActive: !1
            })), ce(Q);
          else {
            const ge = q - 1;
            P((Ae) => ({
              ...Ae,
              focusedRowIndex: ge
            })), ne(ge, Q);
          }
          break;
        case "ArrowDown":
          A.preventDefault();
          const ve = Math.min(ae - 1, q + 1);
          P((ge) => ({
            ...ge,
            focusedRowIndex: ve
          })), ne(ve, Q);
          break;
        case "ArrowLeft":
          A.preventDefault();
          const ye = Math.max(0, Q - 1);
          P((ge) => ({
            ...ge,
            focusedColumnIndex: ye
          })), ne(q, ye);
          break;
        case "ArrowRight":
          A.preventDefault();
          const Ce = Math.min(me - 1, Q + 1);
          P((ge) => ({
            ...ge,
            focusedColumnIndex: Ce
          })), ne(q, Ce);
          break;
        case "Home":
          A.preventDefault(), A.ctrlKey ? (P((ge) => ({
            ...ge,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ne(0, 0)) : (P((ge) => ({ ...ge, focusedColumnIndex: 0 })), ne(q, 0));
          break;
        case "End":
          if (A.preventDefault(), A.ctrlKey) {
            const ge = ae - 1, Ae = me - 1;
            P((We) => ({
              ...We,
              focusedRowIndex: ge,
              focusedColumnIndex: Ae
            })), ne(ge, Ae);
          } else {
            const ge = me - 1;
            P((Ae) => ({
              ...Ae,
              focusedColumnIndex: ge
            })), ne(q, ge);
          }
          break;
        case "Enter":
        case " ":
          if (A.preventDefault(), J && J.data[q]) {
            const ge = J.data.some(
              (at) => "ews_data" in at
            ) ? v(J.data, V.filters) : J.data, Ae = V.sortConfig;
            let We = ge;
            if (Ae && Ae.length > 0 && (We = [...ge].sort((at, ze) => {
              for (const { key: et, direction: Mt } of Ae) {
                let _t = at[et], vt = ze[et];
                const st = J.columns.find(
                  (qt) => qt.key === et
                );
                if (st?.tableRenderer ? (_t = st.tableRenderer(at), vt = st.tableRenderer(ze)) : st?.render && (_t = st.render(at), vt = st.render(ze)), _t == null && vt == null) continue;
                if (_t == null) return Mt === "asc" ? -1 : 1;
                if (vt == null) return Mt === "asc" ? 1 : -1;
                let it = 0;
                if (typeof _t == "number" && typeof vt == "number" ? it = _t - vt : it = String(_t).localeCompare(
                  String(vt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), it !== 0)
                  return Mt === "asc" ? it : -it;
              }
              return 0;
            })), We[q]) {
              const at = We[q], et = V.globalSelectedRowData && O(V.globalSelectedRowData, at) ? null : at;
              H({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: et
              });
            }
          }
          break;
      }
    },
    [
      o,
      V.selectedIndex,
      V.filters,
      V.sortConfig,
      v,
      O,
      H,
      P,
      ce,
      ne
    ]
  ), fe = be(
    (A, q) => v(A, q),
    [v]
  );
  if (Xi(
    n,
    () => ({
      selectTab: (A) => {
        A >= 0 && A < o.length && (H({ type: "SET_SELECTED_INDEX", payload: A }), i?.(A));
      },
      refreshData: (A) => {
        console.log("Refreshing data for tab:", A ?? "all");
      },
      exportData: (A) => {
        const q = A ?? V.selectedIndex, Q = o[q];
        return Q ? Q.data : [];
      },
      getSelectedRows: (A) => V.globalSelectedRowData ? [] : [],
      clearSelection: (A) => {
        H({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (A) => {
        H({ type: "SET_FILTERS", payload: A });
      }
    }),
    [V.selectedIndex, V.selectedRows, o, i]
  ), y)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": k,
        children: m || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
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
  if (p)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`,
        "data-testid": k,
        children: g || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: p })
        ] })
      }
    );
  const F = Ue(null), R = Ue(null), Y = Ue(null), [se, ue] = He(!0);
  Qe(() => {
    if (!M) {
      ue(!1);
      return;
    }
    if (b) {
      ue(!1);
      return;
    }
    function A() {
      if (!F.current || !R.current || !Y.current) return;
      const ee = F.current.clientWidth, J = Array.from(
        R.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ae = J.reduce((Ce, ge) => Ce + ge.offsetWidth, 0), me = Y.current.offsetWidth, ve = Math.max(8 * (J.length - 1), 0), ye = ae + ve + me + C <= ee;
      ue(ye);
    }
    const q = requestAnimationFrame(() => A()), Q = new ResizeObserver(() => A());
    return F.current && Q.observe(F.current), R.current && Q.observe(R.current), () => {
      cancelAnimationFrame(q), Q.disconnect();
    };
  }, [M, C, b, o.length]);
  const pe = Y, ie = be(() => pe.current ? Array.from(
    pe.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((A) => !A.hasAttribute("disabled")) : [], []), B = be(
    (A) => {
      const q = ie();
      if (!q.length) return;
      const Q = Math.max(0, Math.min(A, q.length - 1));
      q[Q].focus(), P((ee) => ({ ...ee, focusArea: "actions", focusedActionIndex: Q }));
    },
    [ie]
  ), E = be(() => B(0), [B]), X = be(
    (A, q) => {
      const { key: Q } = A, ee = o.length - 1;
      switch (Q) {
        case "ArrowUp": {
          M && !se && (A.preventDefault(), E());
          break;
        }
        case "ArrowLeft": {
          A.preventDefault();
          const J = q > 0 ? q - 1 : ee;
          U(J), W(J), oe.current[J]?.focus();
          break;
        }
        case "ArrowRight": {
          if (A.preventDefault(), q === ee && M && se) {
            E();
            return;
          }
          const J = q < ee ? q + 1 : 0;
          U(J), W(J), oe.current[J]?.focus();
          break;
        }
        case "ArrowDown": {
          A.preventDefault(), P((J) => ({
            ...J,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          A.preventDefault(), U(0), W(0), oe.current[0]?.focus();
          break;
        }
        case "End": {
          A.preventDefault(), U(ee), W(ee), oe.current[ee]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          A.preventDefault(), U(q);
          break;
        }
        case "Tab": {
          !A.shiftKey && q === ee && M && se && E();
          break;
        }
      }
    },
    [o.length, U, W, M, se, E]
  ), K = be((A) => {
    const { key: q } = A, Q = ie();
    if (!Q.length) return;
    const ee = Q.findIndex((J) => J === document.activeElement);
    switch (q) {
      case "ArrowLeft": {
        if (se)
          if (ee > 0)
            A.preventDefault(), B(ee - 1);
          else {
            A.preventDefault();
            const J = o.length - 1;
            U(J), W(J), oe.current[J]?.focus(), P((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: J }));
          }
        break;
      }
      case "ArrowRight": {
        se && (ee < Q.length - 1 ? (A.preventDefault(), B(ee + 1)) : (A.preventDefault(), U(0), W(0), oe.current[0]?.focus(), P((J) => ({ ...J, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (se)
          A.preventDefault(), P((J) => ({ ...J, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          A.preventDefault();
          const J = V.selectedIndex;
          oe.current[J]?.focus(), P((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: J }));
        }
        break;
      }
    }
  }, [ie, se, B, o.length, U, W, V.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${d}`,
      id: x,
      "data-testid": k,
      ref: F,
      children: [
        c && !j && /* @__PURE__ */ r.jsx("div", { id: _, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: I,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          $l,
          {
            sortConfig: V.sortConfig || [],
            columns: o.flatMap(
              (A) => A.columns.map((q) => ({ key: q.key, label: q.label }))
            ).filter(
              (A, q, Q) => Q.findIndex((ee) => ee.key === A.key) === q
              // Remove duplicates
            ),
            onSortChange: (A) => {
              H({ type: "SET_SORT", payload: A });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        M && !se && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: Y,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: K,
            children: M
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${se ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": c ? j ? c : _ : I,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: R,
              children: o.map((A, q) => {
                const Q = q === V.selectedIndex, ee = A.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${A.id}`,
                    "aria-controls": `panel-${A.id}`,
                    "aria-selected": Q,
                    "aria-disabled": ee,
                    tabIndex: Q ? 0 : -1,
                    ref: (J) => {
                      oe.current[q] = J;
                    },
                    onClick: () => U(q),
                    onKeyDown: (J) => X(J, q),
                    disabled: ee,
                    className: [
                      "aria-tabs-datagrid__tab",
                      Q ? "aria-tabs-datagrid__tab--selected" : "",
                      ee ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: A.label }),
                      V.tabLoadingStates[q] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      V.tabErrors[q] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  A.id
                );
              })
            }
          ),
          M && se && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: Y,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: K,
              children: M
            }
          )
        ] }),
        o.map((A, q) => {
          const Q = q === V.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${A.id}`,
              "aria-labelledby": `tab-${A.id}`,
              tabIndex: 0,
              hidden: !Q,
              ref: (ee) => {
                ke.current[q] = ee;
              },
              className: `aria-tabs-datagrid__panel ${A.className || ""}`,
              "data-tab-panel": q,
              children: Q && (() => {
                const ee = A.data.some(
                  (ae) => "ews_data" in ae
                ) ? fe(A.data, V.filters) : A.data, J = Pe(() => {
                  const ae = V.sortConfig;
                  return !ae || ae.length === 0 ? ee : [...ee].sort((me, ve) => {
                    for (const { key: ye, direction: Ce } of ae) {
                      let ge = me[ye], Ae = ve[ye];
                      const We = A.columns.find(
                        (ze) => ze.key === ye
                      );
                      if (We?.tableRenderer ? (ge = We.tableRenderer(me), Ae = We.tableRenderer(ve)) : We?.render && (ge = We.render(me), Ae = We.render(ve)), ge == null && Ae == null) continue;
                      if (ge == null) return 1;
                      if (Ae == null) return -1;
                      let at = 0;
                      if (typeof ge == "number" && typeof Ae == "number" ? at = ge - Ae : typeof ge == "boolean" && typeof Ae == "boolean" ? at = ge === Ae ? 0 : ge ? 1 : -1 : at = String(ge).localeCompare(
                        String(Ae),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), at !== 0)
                        return Ce === "asc" ? at : -at;
                    }
                    return 0;
                  });
                }, [ee, V.sortConfig, A.columns]);
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
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: A.columns.map((ae, me) => {
                        const ve = V.sortConfig?.find(
                          (ge) => ge.key === ae.key
                        ), ye = !!ve, Ce = D.focusArea === "headers" && D.focusedHeaderIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ce ? "sortable-header--focused" : ""} ${ye ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ce ? 0 : -1,
                            onClick: () => le(q, ae.key),
                            onKeyDown: (ge) => de(ge, me),
                            "aria-sort": ye ? ve?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: ae.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ye ? `sort-indicator--${ve?.direction}` : ""}`,
                                  children: [
                                    V.sortConfig && V.sortConfig.length > 0 && V.sortConfig.findIndex(
                                      (ge) => ge.key === ae.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${V.sortConfig.findIndex((ge) => ge.key === ae.key) + 1}`,
                                        "data-priority": V.sortConfig.findIndex(
                                          (ge) => ge.key === ae.key
                                        ) + 1,
                                        title: `Sort priority: ${V.sortConfig.findIndex((ge) => ge.key === ae.key) + 1}`,
                                        children: V.sortConfig.findIndex(
                                          (ge) => ge.key === ae.key
                                        ) + 1
                                      }
                                    ),
                                    ye && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ve?.direction}`,
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
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: J.map((ae, me) => {
                        const ve = V.globalSelectedRowData && O(V.globalSelectedRowData, ae), ye = D.focusArea === "cells" && D.focusedRowIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ve ? "data-row--selected" : ""} ${ye ? "data-row--focused" : ""}`,
                            "aria-selected": ve,
                            children: A.columns.map((Ce, ge) => {
                              const Ae = ae[Ce.key];
                              let We;
                              Ce.tableRenderer ? We = Ce.tableRenderer(ae) : Ce.render ? We = Ce.render(ae) : We = Ae;
                              const at = D.focusArea === "cells" && D.focusedRowIndex === me && D.focusedColumnIndex === ge, ze = () => {
                                if (Ce.customRenderer) {
                                  const et = Ce.customRenderer(
                                    Ae,
                                    ae
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: et
                                    }
                                  );
                                }
                                return typeof Ae == "boolean" && We === Ae ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  Z(Ae),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ae ? "Yes" : "No" })
                                ] }) : jt.isValidElement(We) || typeof We != "object" ? We ?? "" : We;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${at ? "data-cell--focused" : ""}`,
                                  tabIndex: at ? 0 : -1,
                                  onClick: () => {
                                    const Mt = V.globalSelectedRowData && O(
                                      V.globalSelectedRowData,
                                      ae
                                    ) ? null : ae;
                                    H({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Mt
                                    });
                                  },
                                  onKeyDown: (et) => z(et, me, ge),
                                  children: ze()
                                },
                                Ce.key
                              );
                            })
                          },
                          me
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
}), Jr = {
  asc: "↑",
  desc: "↓"
}, Jp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function ps(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Zp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Qp(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function eh(e, t) {
  const n = t.find((o) => o.id === e), a = Zp(t);
  return n ? n.priority < a : !1;
}
const zv = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const d = Pe(() => Jp(e), [e]), f = be((k) => {
    if (l) return;
    const M = e.map(
      (C) => C.id === k ? { ...C, direction: C.direction === "asc" ? "desc" : "asc" } : C
    );
    t(M);
  }, [e, t, l]), h = be((k) => {
    if (l) return;
    const M = e.findIndex((b) => b.id === k);
    if (M <= 0) return;
    const C = [...e];
    [C[M], C[M - 1]] = [C[M - 1], C[M]], t(ps(C));
  }, [e, t, l]), x = be((k) => {
    if (l) return;
    const M = e.findIndex((b) => b.id === k);
    if (M >= e.length - 1 || M === -1) return;
    const C = [...e];
    [C[M], C[M + 1]] = [C[M + 1], C[M]], t(ps(C));
  }, [e, t, l]), y = be((k) => {
    if (l) return;
    const M = e.filter((C) => C.id !== k);
    t(ps(M));
  }, [e, t, l]), m = be(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const k = d.map((M, C) => {
      const b = M.direction === "asc" ? "ascending" : "descending";
      return `${C + 1}. ${M.label} (${b})`;
    });
    if (k.length === 1)
      return `Sorted by: ${k[0]}`;
    if (k.length === 2)
      return `Sorted by: ${k.join(" and ")}`;
    {
      const M = k.pop();
      return `Sorted by: ${k.join(", ")}, and ${M}`;
    }
  }, g = Pe(() => {
    const k = ["sort-description"];
    return i && k.push("sort-help"), c && k.push(c), k.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: p()
    }
  ) }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: p()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": u,
        "aria-describedby": g,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((k) => /* @__PURE__ */ r.jsx(
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
                  onClose: () => y(k.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: k.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: k.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(k.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${k.label}. Currently ${k.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: k.direction === "asc" ? Jr.asc : Jr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(k.id),
                          disabled: l || !Qp(k.id, e),
                          "aria-label": `Move ${k.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => x(k.id),
                          disabled: l || !eh(k.id, e),
                          "aria-label": `Move ${k.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            k.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      bt,
      {
        variant: "secondary",
        onClick: m,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsxs("small", { children: [
      "Click ",
      Jr.asc,
      "/",
      Jr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ko = (e, t) => t.map((n) => ({
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
})), Ms = [
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
], th = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), nh = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, rh = (e) => {
  if (typeof e == "boolean") {
    const n = Ms.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = Ms.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, ah = (e) => `${e.name}-${e.bed_name}`, sh = () => ({
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
}), Vv = (e) => {
  const t = sh();
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
}, oh = {
  dataComparator: th,
  filterFunction: nh,
  booleanRenderer: rh,
  getDataId: ah
};
function vi(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: u,
    fieldRenderers: c = {},
    classPrefix: d = "adaptive-card"
  } = n, f = t.find((M) => M.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", x = () => o.filter((C) => !i.includes(C) && e[C]).slice(0, 3).map((C) => {
    const b = t.find((_) => _.key === C), T = e[C], N = c[C] ? c[C](T, e) : b?.cardRenderer ? b.cardRenderer(e) : b?.render ? b.render(e) : T;
    return `${b?.label || C}: ${N}`;
  }).join(" • "), y = () => s.length === 0 ? null : s.filter((M) => e[M.fieldKey] !== void 0).map((M) => {
    const C = e[M.fieldKey], b = M.render ? M.render(C, e) : C;
    return `<span class="nhsuk-tag ${ih(M, C)}">${b}</span>`;
  }).join(""), m = () => u ? u(e) : l?.(e) === "high" ? "primary" : "default", p = y(), g = x(), k = p ? `${g}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : g;
  return {
    variant: m(),
    heading: String(h),
    descriptionHtml: k,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${h}`
  };
}
function ih(e, t) {
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
const lh = {
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
}, Ml = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, u = e.ward_name, c = e.bed_name, d = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${u}, Bed ${c}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ r.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: d !== void 0 && /* @__PURE__ */ r.jsxs(
            Ze,
            {
              color: uh(Al(d)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                d
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ r.jsx("dd", { children: u })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ r.jsx("dd", { children: c })
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
              onClick: (x) => {
                x.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            bt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (x) => {
                x.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            bt,
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
}, Pl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Ze,
        {
          color: dh(e.status || "active"),
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
] }), Ll = ({
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
] }), Fl = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, u = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${ch(s)}`, children: [
              "EWS: ",
              s
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
          u !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              u,
              "°C"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-value", children: c })
          ] }),
          d !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
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
function Al(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function ch(e) {
  return Al(e);
}
function uh(e) {
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
function dh(e) {
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
const fh = [
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
], El = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", ph = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, hh = (e) => El(e) === "high" || e.status === "urgent" ? "primary" : "default", mh = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, gh = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: fh,
  hiddenFields: [],
  getPriority: El,
  getStatus: ph,
  getVariant: hh,
  fieldRenderers: mh,
  classPrefix: "adaptive-card--healthcare"
}, xh = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      Ml,
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
      Pl,
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
      Ll,
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
      Fl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, bh = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, yi = {
  name: "healthcare",
  defaultCardConfig: gh,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: xh,
  fieldTypes: bh
};
function wi(e) {
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
function _i(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function vh(e, t) {
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), u = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
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
function yh(e, t) {
  const [n, a] = He("cards");
  return Qe(() => {
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
function wh(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function _h(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...lh, ...n };
  if (a && a.cardTemplates) {
    const s = wh(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), vi(e, t, o);
}
const Gv = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  topActions: s,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: u,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: d,
  selectedIndex: f,
  onTabChange: h,
  ariaLabel: x = "Data grid",
  ariaDescription: y,
  orientation: m = "horizontal",
  id: p,
  disabled: g = !1,
  className: k,
  ...M
}) => {
  const C = yh(e, t), b = f !== void 0, T = f ?? 0, N = Pe(() => {
    if (c.some(
      (E) => E.data && E.data.length > 0 && _i(E.data)
    )) {
      const E = wi(n);
      return {
        ...yi.defaultCardConfig,
        ...E
      };
    } else
      return wi(n);
  }, [n, c]), j = Pe(() => c.some(
    (E) => E.data && E.data.length > 0 && _i(E.data)
  ) ? yi : void 0, [c]), _ = Pe(() => ({
    selectedIndex: T,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [T, c.length]), [I, S] = Ki(vh, _), v = Ue([]), L = Ue([]), w = Ue([]), $ = Ue(null), [D, P] = He({
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
  }), te = be((B) => {
    if (!B.current)
      return { columns: 1, rows: 0 };
    const E = B.current, X = E.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (X.length === 0)
      return { columns: 1, rows: 0 };
    const K = E.offsetWidth, q = X[0].offsetWidth, Q = Math.floor(K / q) || 1, ee = Math.ceil(X.length / Q);
    return { columns: Q, rows: ee };
  }, []), V = be((B, E) => ({
    row: Math.floor(B / E),
    col: B % E
  }), []), H = be((B, E, X) => B * X + E, []), O = be((B, E, X, K) => {
    const { row: A, col: q } = V(B, K);
    let Q = A, ee = q;
    switch (E) {
      case "up":
        Q = Math.max(0, A - 1);
        break;
      case "down":
        Q = Math.min(Math.floor((X - 1) / K), A + 1);
        break;
      case "left":
        ee = Math.max(0, q - 1);
        break;
      case "right":
        ee = Math.min(K - 1, q + 1);
        break;
    }
    const J = H(Q, ee, K);
    return Math.min(J, X - 1);
  }, [V, H]);
  Qe(() => {
    D.isCardNavigationActive && D.focusedCardElementIndex >= 0 && D.cardElements.length > 0 && setTimeout(() => {
      const B = D.cardElements[D.focusedCardElementIndex];
      B && (B.element.focus(), B.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [D.isCardNavigationActive, D.focusedCardElementIndex, D.cardElements.length]), Qe(() => {
    const B = () => {
      if (C === "cards" && $.current) {
        const { columns: K, rows: A } = te($);
        P((q) => ({
          ...q,
          gridColumns: K,
          gridRows: A
        }));
      }
    }, E = setTimeout(B, 200), X = () => {
      setTimeout(B, 100);
    };
    return window.addEventListener("resize", X), () => {
      clearTimeout(E), window.removeEventListener("resize", X);
    };
  }, [C, c, te]), Qe(() => {
    const B = I.tabLoadingStates.length, E = c.length;
    B !== E && S({ type: "ADJUST_ARRAYS", payload: { newLength: E } });
  }, [c.length, I.tabLoadingStates.length]), Qe(() => {
    b && f !== I.selectedIndex && S({ type: "SET_SELECTED_INDEX", payload: f });
  }, [b, f, I.selectedIndex]);
  const U = be((B) => {
    B >= 0 && B < c.length && !c[B].disabled && (S({ type: "SET_SELECTED_INDEX", payload: B }), h?.(B));
  }, [c, h]), re = be((B) => {
    console.log("Card selected:", B), S({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: B
    });
  }, []), W = be((B) => {
    const E = L.current[B];
    E && (E.focus(), E.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), oe = be((B) => {
    const E = L.current[B];
    if (!E) return [];
    const X = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), K = E.querySelectorAll(X);
    return Array.from(K).map((A, q) => ({
      id: A.id || `card-${B}-element-${q}`,
      element: A,
      label: A.getAttribute("aria-label") || A.textContent?.trim() || A.getAttribute("title") || `Element ${q + 1}`,
      type: A.tagName.toLowerCase() === "button" ? "button" : A.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(A.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ke = Ue(null), le = be((B) => {
    const E = ke.current;
    if (!E) return;
    const X = document.createElement("div");
    X.setAttribute("aria-live", "polite"), X.setAttribute("aria-atomic", "true"), X.className = "sr-only", X.textContent = B, E.appendChild(X), setTimeout(() => {
      E.contains(X) && E.removeChild(X);
    }, 1e3);
  }, []), ce = be((B) => {
    const E = B.filter((K) => K.sortable !== !1), X = [
      { value: "", label: "Sort by..." }
    ];
    return E.forEach((K) => {
      const A = K.label || K.key;
      K.key === "name" ? X.push(
        { value: `${K.key}-asc`, label: `${A} (A-Z)` },
        { value: `${K.key}-desc`, label: `${A} (Z-A)` }
      ) : K.key === "ews_score" || K.key.includes("score") ? X.push(
        { value: `${K.key}-desc`, label: `${A} (High-Low)` },
        { value: `${K.key}-asc`, label: `${A} (Low-High)` }
      ) : K.key === "age" || K.key.includes("date") || K.key.includes("time") ? X.push(
        { value: `${K.key}-desc`, label: `${A} (Oldest-Youngest)` },
        { value: `${K.key}-asc`, label: `${A} (Youngest-Oldest)` }
      ) : X.push(
        { value: `${K.key}-asc`, label: `${A} (A-Z)` },
        { value: `${K.key}-desc`, label: `${A} (Z-A)` }
      );
    }), X;
  }, []), Z = be((B, E) => E ? [...B].sort((X, K) => {
    const A = X[E.key], q = K[E.key];
    if (A == null && q == null) return 0;
    if (A == null) return 1;
    if (q == null) return -1;
    const Q = Number(A), ee = Number(q);
    if (!isNaN(Q) && !isNaN(ee))
      return E.direction === "asc" ? Q - ee : ee - Q;
    const J = String(A).toLowerCase(), ae = String(q).toLowerCase(), me = J.localeCompare(ae);
    return E.direction === "asc" ? me : -me;
  }) : B, []), ne = be((B) => {
    if (!B) {
      P((J) => ({ ...J, cardSortConfig: null })), le("Card sorting cleared");
      return;
    }
    const [E, X] = B.split("-"), K = { key: E, direction: X };
    P((J) => ({ ...J, cardSortConfig: K }));
    const Q = c[I.selectedIndex]?.columns.find((J) => J.key === E)?.label || E;
    le(`Cards sorted by ${Q} in ${X === "asc" ? "ascending" : "descending"} order`);
  }, [c, I.selectedIndex, le]), de = be((B) => {
    const K = c[I.selectedIndex]?.columns.find((q) => q.key === B.key)?.label || B.key, A = B.direction === "asc" ? "ascending" : "descending";
    return `${K} (${A})`;
  }, [c, I.selectedIndex]), z = be((B) => {
    const E = c[I.selectedIndex];
    if (o) {
      const X = I.sortConfig;
      return !X || X.length === 0 ? B : [...B].sort((K, A) => {
        for (const { key: q, direction: Q } of X) {
          let ee = K[q], J = A[q];
          const ae = E?.columns.find((Ae) => Ae.key === q);
          if (ae?.cardRenderer ? (ee = ae.cardRenderer(K), J = ae.cardRenderer(A)) : ae?.render && (ee = ae.render(K), J = ae.render(A)), ee == null && J == null) continue;
          if (ee == null) return Q === "asc" ? -1 : 1;
          if (J == null) return Q === "asc" ? 1 : -1;
          const me = Number(ee), ve = Number(J);
          if (!isNaN(me) && !isNaN(ve)) {
            const Ae = me - ve;
            if (Ae !== 0) return Q === "asc" ? Ae : -Ae;
            continue;
          }
          const ye = String(ee).toLowerCase(), Ce = String(J).toLowerCase(), ge = ye.localeCompare(Ce);
          if (ge !== 0) return Q === "asc" ? ge : -ge;
        }
        return 0;
      });
    } else
      return Z(B, D.cardSortConfig);
  }, [o, I.sortConfig, D.cardSortConfig, Z, c, I.selectedIndex]), fe = be((B, E) => {
    const X = oe(B), K = X[E];
    if (K) {
      K.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const A = `Focused on ${K.label}, ${K.type} ${E + 1} of ${X.length} within card`;
      le(A);
    }
  }, [oe, le]), F = be((B) => {
    v.current[B]?.focus();
  }, []), R = be(() => {
    const B = w.current[0];
    if (!B) return [];
    const E = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), X = B.querySelectorAll(E);
    return Array.from(X);
  }, []), Y = be((B) => {
    if (B === 0) {
      const E = w.current[0], X = E?.querySelector(".sort-controls-row");
      if (X) {
        X.setAttribute("tabindex", "-1"), X.focus();
        const A = `Sort controls group with ${R().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        le(A);
      } else E && E.focus();
    } else {
      const E = R(), X = B - 1, K = E[X];
      if (K) {
        K.focus();
        const A = K.tagName.toLowerCase() === "select", q = K.tagName.toLowerCase() === "button", Q = A ? "dropdown" : q ? "button" : "control", ee = A ? ". Use Space key to open dropdown" : "", J = `${Q} ${X + 1} of ${E.length}${ee}`;
        le(J);
      }
    }
  }, [R, le]), se = be((B, E) => {
    const { key: X } = B, K = c[I.selectedIndex], A = K?.data.length || 0;
    if (X === "ArrowLeft" && B.shiftKey) {
      B.preventDefault(), B.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (X === "ArrowRight" && B.shiftKey) {
      B.preventDefault(), B.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!D.isCardNavigationActive) {
      switch (X) {
        case "ArrowUp":
          if (B.preventDefault(), E === 0)
            P((J) => ({ ...J, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), Y(0);
          else {
            const J = O(E, "up", A, D.gridColumns);
            J !== E && (P((ae) => ({ ...ae, focusedCardIndex: J })), W(J), le(`Moved to card ${J + 1} of ${A}`));
          }
          break;
        case "ArrowDown":
          B.preventDefault();
          const q = O(E, "down", A, D.gridColumns);
          q !== E && (P((J) => ({ ...J, focusedCardIndex: q })), W(q), le(`Moved to card ${q + 1} of ${A}`));
          break;
        case "ArrowLeft":
          B.preventDefault();
          const Q = O(E, "left", A, D.gridColumns);
          Q !== E ? (P((J) => ({ ...J, focusedCardIndex: Q })), W(Q), le(`Moved to card ${Q + 1} of ${A}`)) : I.selectedIndex > 0 && (S({ type: "SET_SELECTED_INDEX", payload: I.selectedIndex - 1 }), P((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => F(I.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          B.preventDefault();
          const ee = O(E, "right", A, D.gridColumns);
          ee !== E ? (P((J) => ({ ...J, focusedCardIndex: ee })), W(ee), le(`Moved to card ${ee + 1} of ${A}`)) : I.selectedIndex < c.length - 1 && (S({ type: "SET_SELECTED_INDEX", payload: I.selectedIndex + 1 }), P((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => F(I.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (K?.data[E]) {
            B.preventDefault(), P((ae) => ({
              ...ae,
              selectedCardIndex: E
            }));
            const J = oe(E);
            J.length > 0 ? (P((ae) => ({
              ...ae,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: J,
              selectedCardIndex: E
              // Ensure selection is maintained
            })), le(`Card ${E + 1} selected and navigation activated. ${J.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : le(`Card ${E + 1} selected.`);
          }
          break;
        case " ":
          if (K?.data[E]) {
            B.preventDefault(), P((ae) => ({
              ...ae,
              selectedCardIndex: ae.selectedCardIndex === E ? -1 : E
            }));
            const J = D.selectedCardIndex === E;
            le(`Card ${E + 1} ${J ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (X) {
      case "ArrowUp":
      case "ArrowLeft":
        B.preventDefault();
        const q = Math.max(0, D.focusedCardElementIndex - 1);
        P((ae) => ({ ...ae, focusedCardElementIndex: q })), fe(E, q);
        break;
      case "ArrowDown":
      case "ArrowRight":
        B.preventDefault();
        const Q = Math.min(D.cardElements.length - 1, D.focusedCardElementIndex + 1);
        P((ae) => ({ ...ae, focusedCardElementIndex: Q })), fe(E, Q);
        break;
      case "Enter":
        B.preventDefault();
        const ee = D.cardElements[D.focusedCardElementIndex];
        ee && (ee.element.click(), le(`Activated ${ee.label}`));
        break;
      case " ":
        B.preventDefault();
        const J = D.cardElements[D.focusedCardElementIndex];
        if (J) {
          const ae = new MouseEvent("dblclick", { bubbles: !0 });
          J.element.dispatchEvent(ae), le(`Double-clicked ${J.label}`);
        }
        break;
      case "Escape":
        B.preventDefault(), P((ae) => ({
          ...ae,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => W(E), 0), le("Exited card navigation, returned to card level");
        break;
      case "Home":
        B.preventDefault(), D.cardElements.length > 0 && (P((ae) => ({ ...ae, focusedCardElementIndex: 0 })), fe(E, 0));
        break;
      case "End":
        if (B.preventDefault(), D.cardElements.length > 0) {
          const ae = D.cardElements.length - 1;
          P((me) => ({ ...me, focusedCardElementIndex: ae })), fe(E, ae);
        }
        break;
    }
  }, [D, I.selectedIndex, c, re, W, F, P, oe, fe, le]), ue = be((B) => {
    const E = v.current[B], X = E?.parentElement;
    if (!E || !X) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const K = E.getBoundingClientRect(), A = X.getBoundingClientRect();
    K.left >= A.left && K.right <= A.right || (console.log("Tab not visible, scrolling into view (mobile)"), E.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), pe = be((B, E) => {
    if (C !== "cards")
      return;
    const { key: X } = B;
    switch (X) {
      case "ArrowLeft":
        B.preventDefault();
        const K = E > 0 ? E - 1 : c.length - 1;
        U(K), P((ee) => ({ ...ee, focusedTabIndex: K })), v.current[K]?.focus(), ue(K);
        break;
      case "ArrowRight":
        B.preventDefault();
        const A = E < c.length - 1 ? E + 1 : 0;
        U(A), P((ee) => ({ ...ee, focusedTabIndex: A })), v.current[A]?.focus(), ue(A);
        break;
      case "ArrowDown":
        B.preventDefault();
        const q = c[I.selectedIndex];
        q && q.columns && q.columns.length > 0 ? (P((ee) => ({
          ...ee,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), Y(0)) : (P((ee) => ({
          ...ee,
          focusArea: "cards",
          focusedCardIndex: 0
        })), W(0));
        break;
      case "Home":
        B.preventDefault(), U(0), P((ee) => ({ ...ee, focusedTabIndex: 0 })), v.current[0]?.focus(), ue(0);
        break;
      case "End":
        B.preventDefault();
        const Q = c.length - 1;
        U(Q), P((ee) => ({ ...ee, focusedTabIndex: Q })), v.current[Q]?.focus(), ue(Q);
        break;
      case "Enter":
      case " ":
        B.preventDefault(), U(E);
        break;
    }
  }, [c.length, U, C, W, P, ue]), ie = be((B, E) => {
    if (C !== "cards")
      return;
    const { key: X } = B, K = c[I.selectedIndex];
    if (E === 0 && !D.isSortControlsActive) {
      switch (X) {
        case "ArrowUp":
          B.preventDefault(), P((q) => ({
            ...q,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), F(I.selectedIndex);
          break;
        case "ArrowDown":
          B.preventDefault(), K?.data && K.data.length > 0 && (P((q) => ({
            ...q,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), W(0));
          break;
        case "Enter":
        case " ":
          B.preventDefault();
          const A = R();
          if (A.length > 0) {
            P((Q) => ({
              ...Q,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), Y(1);
            const q = `Entered sort controls navigation mode. ${A.length} controls available. Use arrow keys to navigate between controls.`;
            le(q);
          }
          break;
        case "Escape":
          B.preventDefault(), P((q) => ({
            ...q,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), F(I.selectedIndex);
          break;
      }
      return;
    }
    if (D.isSortControlsActive) {
      const q = R().length;
      switch (X) {
        case "ArrowLeft":
          B.preventDefault();
          const Q = D.focusedSortControlIndex > 1 ? D.focusedSortControlIndex - 1 : q;
          P((J) => ({ ...J, focusedSortControlIndex: Q })), Y(Q);
          break;
        case "ArrowRight":
          B.preventDefault();
          const ee = D.focusedSortControlIndex < q ? D.focusedSortControlIndex + 1 : 1;
          P((J) => ({ ...J, focusedSortControlIndex: ee })), Y(ee);
          break;
        case "ArrowDown":
          if (B.preventDefault(), D.isSortControlsActive) {
            const J = D.focusedSortControlIndex < q ? D.focusedSortControlIndex + 1 : 1;
            P((ae) => ({ ...ae, focusedSortControlIndex: J })), Y(J);
          } else
            K?.data && K.data.length > 0 && (P((J) => ({
              ...J,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), W(0));
          break;
        case "ArrowUp":
          B.preventDefault(), P((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), Y(0);
          break;
        case "Escape":
          B.preventDefault(), P((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), Y(0);
          break;
      }
    }
  }, [C, c, I.selectedIndex, D.isSortControlsActive, D.focusedSortControlIndex, Y, F, W, P, le]);
  if (C === "cards") {
    const B = c[I.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${k || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": x,
            "aria-describedby": `${y || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": m,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((E, X) => {
              const K = X === I.selectedIndex, A = E.disabled || g;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${E.id}`,
                  "aria-controls": `panel-${E.id}`,
                  "aria-selected": K,
                  "aria-disabled": A,
                  tabIndex: K ? 0 : -1,
                  ref: (q) => {
                    v.current[X] = q;
                  },
                  onClick: () => U(X),
                  onKeyDown: (q) => pe(q, X),
                  disabled: A,
                  className: [
                    "aria-tabs-datagrid__tab",
                    K ? "aria-tabs-datagrid__tab--selected" : "",
                    A ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: E.label }),
                    I.tabLoadingStates[X] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    I.tabErrors[X] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                E.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      B && B.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          $l,
          {
            sortConfig: I.sortConfig || [],
            columns: B.columns.map((E) => ({ key: E.key, label: E.label })),
            onSortChange: (E) => {
              S({ type: "SET_SORT", payload: E });
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
            tabIndex: D.focusArea === "sort-controls" ? 0 : -1,
            ref: (E) => {
              w.current[0] = E;
            },
            onKeyDown: (E) => ie(E, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${B.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  ta,
                  {
                    id: `card-sort-${B.id}`,
                    name: `card-sort-${B.id}`,
                    value: D.cardSortConfig ? `${D.cardSortConfig.key}-${D.cardSortConfig.direction}` : "",
                    onChange: (E) => ne(E.target.value),
                    className: "sort-select",
                    children: ce(B.columns).map((E) => /* @__PURE__ */ r.jsx("option", { value: E.value, children: E.label }, E.value))
                  }
                )
              ] }),
              D.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  de(D.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  bt,
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
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: $,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${B?.label || "Data"} cards in ${D.gridRows} rows and ${D.gridColumns} columns`,
          "aria-rowcount": D.gridRows,
          "aria-colcount": D.gridColumns,
          id: `panel-${B?.id}`,
          "aria-labelledby": `tab-${B?.id}`,
          children: z(B?.data || []).map((E, X) => {
            const K = D.selectedCardIndex === X, A = D.focusedCardIndex === X && D.focusArea === "cards", q = D.focusedCardIndex === X && D.focusArea === "card" && D.isCardNavigationActive, Q = X === 0 && D.focusArea !== "cards", ee = A || Q, J = V(X, D.gridColumns);
            if (n.cardTemplate) {
              const ve = n.cardTemplate(E, B.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": J.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (ye) => {
                        L.current[X] = ye;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        K ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        q ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": J.col + 1,
                      "aria-selected": K,
                      "aria-expanded": q,
                      "aria-description": q ? `Card navigation active. ${D.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: ee ? 0 : -1,
                      onClick: () => {
                        P((ye) => ({
                          ...ye,
                          selectedCardIndex: ye.selectedCardIndex === X ? -1 : X
                        })), re(E);
                      },
                      onKeyDown: (ye) => se(ye, X),
                      onFocus: () => {
                        P((ye) => ye.isCardNavigationActive ? ye : ye.focusedCardIndex !== X || ye.focusArea !== "cards" ? {
                          ...ye,
                          focusedCardIndex: X,
                          focusArea: "cards"
                        } : ye);
                      },
                      children: ve
                    }
                  )
                },
                `card-${X}`
              );
            }
            const ae = _h(E, B.columns, N, j), me = [
              ae.className || "",
              K ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              A ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              q ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": J.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      K ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      q ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": J.col + 1,
                    "aria-selected": K,
                    "aria-expanded": q,
                    onKeyDown: (ve) => {
                      ve.key === "Enter" && (ve.preventDefault(), P((ye) => ({
                        ...ye,
                        selectedCardIndex: X
                      }))), se(ve, X);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      Tl,
                      {
                        ...ae,
                        ref: (ve) => {
                          L.current[X] = ve;
                        },
                        className: me,
                        "aria-label": `${ae["aria-label"] || ae.heading}. ${q ? `Card navigation active with ${D.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: ee ? 0 : -1,
                        onClick: () => {
                          P((ve) => ({
                            ...ve,
                            selectedCardIndex: ve.selectedCardIndex === X ? -1 : X
                          })), re(E);
                        },
                        onKeyDown: (ve) => se(ve, X),
                        onFocus: () => {
                          D.isCardNavigationActive || P((ve) => ve.focusedCardIndex !== X || ve.focusArea !== "cards" ? {
                            ...ve,
                            focusedCardIndex: X,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ve);
                        }
                      }
                    )
                  }
                )
              },
              `card-${X}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: ke,
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
  return C === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${k || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      $s,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: x,
        ariaDescription: y,
        orientation: m,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: u,
        ...M
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${k || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      $s,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: x,
        ariaDescription: y,
        orientation: m,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: u,
        ...M
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, Rl = (e) => {
  const t = Ms.find((n) => n.value === e);
  return t ? t.icon : null;
}, Sh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Rl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, kh = (e) => ko(e, [
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
]), Ch = {
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
  booleanRenderer: (e) => Rl(e),
  getDataId: (e) => `financial-${e.id}`
}, Nh = (e) => ko(e, [
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
]), jh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Sh,
    createTabs: kh
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Ch,
    createTabs: Nh
  }
}, Si = (e, t) => {
  const n = jh[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, Bl = [
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
], Th = [
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
], Dh = [
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
], Ih = [
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
], ki = [
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
], Ci = [
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
], Ni = [
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
], $h = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Mh = () => [
  {
    id: "patients",
    label: "Patients",
    data: Bl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Ml,
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
    data: Th,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Pl,
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
    data: Dh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Ll,
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
    data: Ih,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Fl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Ph = () => {
  const [e, t] = He("healthcare"), n = Pe(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: oh,
      tabPanels: Mh(),
      data: Bl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Si("ecommerce", ki),
      data: ki
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Si("financial", Ci),
      data: Ci
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: $h,
      tabPanels: ko(Ni, [
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
      data: Ni
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
      $s,
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
}, Yv = Ph, Hl = (e) => /* @__PURE__ */ r.jsx(rl, { ...e }), qv = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = Bn.TwoThirds,
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: u,
  navigation: c,
  search: d,
  account: f,
  organisation: h,
  logo: x,
  className: y,
  ...m
}) => {
  const p = {
    service: u,
    navigation: c,
    search: d,
    account: f,
    organisation: h,
    logo: x,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(jl, { ...s }),
    /* @__PURE__ */ r.jsx(il, { ...p }),
    /* @__PURE__ */ r.jsx(Hl, { className: y, ...m, children: /* @__PURE__ */ r.jsx(al, { size: o, children: /* @__PURE__ */ r.jsx(Hn, { children: /* @__PURE__ */ r.jsxs($r, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(mn, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(ll, { ...l })
  ] });
}, Xv = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = Bn.TwoThirds,
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: u,
  serviceName: c,
  serviceHref: d,
  logo: f,
  className: h,
  ...x
}) => {
  const y = {
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
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(jl, { ...s }),
    /* @__PURE__ */ r.jsx(il, { ...y }),
    /* @__PURE__ */ r.jsxs(Hl, { className: h, ...x, children: [
      u && /* @__PURE__ */ r.jsx(ks, { ...u }),
      /* @__PURE__ */ r.jsx(al, { size: o, children: /* @__PURE__ */ r.jsx(Hn, { children: /* @__PURE__ */ r.jsxs($r, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(mn, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(ll, { ...l })
  ] });
}, Ol = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = we("nhsuk-back-link", a), u = we("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx("button", { className: u, type: "button", onClick: s, ...i, children: c() }) : /* @__PURE__ */ r.jsx("a", { className: u, href: n, ...i, children: c() }) });
};
Ol.displayName = "ForwardLink";
const Qn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ji() {
  return typeof window > "u" ? Qn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ul() {
  const [e, t] = G.useState(ji());
  G.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ji());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = G.useCallback((s) => e >= Qn[s], [e]), a = G.useCallback((s) => e < Qn[s], [e]), o = G.useCallback((s, i) => e >= Qn[s] && e < Qn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Qn
  };
}
function Kv(e) {
  const { width: t, values: n } = Ul();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Lh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = G.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = G.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return G.useEffect(() => {
    if (!t || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search);
    o ? u.set(n, String(o)) : u.delete(n), u.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${u.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Fh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), Ah = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function Eh(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: u,
    animated: c = !0,
    backLabel: d = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: x,
    a11y: y,
    className: m,
    getId: p = (he) => he.id,
    orientation: g = "vertical",
    autoEnableThirdColumn: k = !0,
    onDrillChange: M,
    navigationInstructions: C = "Use arrow keys to navigate, Enter to open.",
    initialFocus: b = "first",
    skipFocusOnSelect: T = !1,
    skipAnnouncements: N = !1,
    onFocusChange: j,
    syncUrl: _ = !1,
    urlParamSelected: I = "nsv",
    urlParamDrill: S = "nsvDrill",
    urlSyncDebounceMs: v = 0,
    lazySecondary: L = !1,
    navFooter: w,
    collapsibleNav: $ = !1,
    navInitiallyCollapsed: D = !1,
    onNavCollapseChange: P,
    collapseToggleLabelShow: te = "Show navigation",
    collapseToggleLabelHide: V = "Hide navigation",
    collapseToggleIconShow: H,
    collapseToggleIconHide: O,
    persistNavCollapsed: U,
    navCollapsedStorageKey: re = "nsvCollapsed",
    navCollapsedUrlParam: W = "nsvCollapsed",
    autoContentHeader: oe,
    contentHeaderLevel: ke = 2,
    renderContentHeader: le,
    contentSubheader: ce,
    secondarySubheader: Z
  } = e, { up: ne } = Ul(), [de, z] = G.useState(!1);
  G.useEffect(() => {
    z(!0);
  }, []);
  const fe = de && ne("medium"), F = de && ne("xlarge");
  let R;
  u ? R = u : fe ? R = "two-column" : R = "list", !u && k && l && F && (R = "three-column");
  const Y = Lh({
    enabled: _,
    paramSelected: I,
    paramDrill: S
  }), [se, ue] = G.useState(
    () => Y.selectedId !== void 0 ? Y.selectedId : a
  ), pe = n !== void 0 ? n : se, ie = t.find((he) => p(he) === pe), [B, E] = G.useState(
    void 0
  );
  G.useEffect(() => {
    if (pe === void 0) return;
    E(pe);
    const he = setTimeout(() => E(void 0), 220);
    return () => clearTimeout(he);
  }, [pe]);
  const X = G.useRef(null), K = G.useRef(null), A = G.useRef(null), q = G.useRef(null), [Q, ee] = G.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [J, ae] = G.useState(() => "nav"), [me, ve] = G.useState(0), ye = () => [
    q.current,
    K.current,
    A.current
  ].filter(Boolean), Ce = (he) => {
    const je = ye(), xe = Math.max(0, Math.min(he, je.length - 1));
    je[xe]?.focus(), ve(xe);
  }, ge = G.useCallback(
    (he) => he ? Array.from(he.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
    ) : [],
    []
  ), Ae = G.useCallback(
    (he) => {
      const je = ge(K.current);
      if (!je.length) {
        K.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(he, je.length - 1)), Ie = je[xe];
      Ie.focus(), setTimeout(() => {
        document.activeElement !== Ie && (Ie.focus(), setTimeout(() => {
          document.activeElement !== Ie && Ie.click();
        }, 10));
      }, 10), ee((Ge) => ({ ...Ge, contentIndex: xe }));
      const tt = (Ge) => {
        Ge.key === "Escape" && (Ge.preventDefault(), Ge.stopPropagation(), K.current?.focus(), Ie.removeEventListener("keydown", tt));
      };
      je.forEach((Ge) => {
        const Ye = Ge._escapeHandler;
        Ye && Ge.removeEventListener("keydown", Ye);
      }), Ie._escapeHandler = tt, Ie.addEventListener("keydown", tt);
    },
    [ge]
  ), We = G.useCallback(
    (he) => {
      const je = ge(A.current);
      if (!je.length) {
        A.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(he, je.length - 1)), Ie = je[xe];
      Ie.focus(), setTimeout(() => {
        document.activeElement !== Ie && (Ie.focus(), setTimeout(() => {
          document.activeElement !== Ie && Ie.click();
        }, 10));
      }, 10), ee((Ge) => ({ ...Ge, secondaryIndex: xe }));
      const tt = (Ge) => {
        Ge.key === "Escape" && (Ge.preventDefault(), Ge.stopPropagation(), A.current?.focus(), Ie.removeEventListener("keydown", tt));
      };
      je.forEach((Ge) => {
        const Ye = Ge._escapeHandler;
        Ye && Ge.removeEventListener("keydown", Ye);
      }), Ie._escapeHandler = tt, Ie.addEventListener("keydown", tt);
    },
    [ge]
  ), at = (he) => {
    if (he.defaultPrevented) return;
    const je = he.key, xe = he.target, Ie = !!ut.current && ut.current.contains(xe), tt = !!K.current && K.current.contains(xe), Ge = !!A.current && A.current.contains(xe), Ye = !!A.current, Ut = xe === q.current || xe === K.current || xe === A.current, Rt = ze && (R === "list" || R === "cards"), _n = tt && !!xe.closest(".nhs-navigation-split-view__header");
    if (J === "containers" && Ut) {
      if (je === "ArrowRight") {
        he.preventDefault();
        const Re = ye(), Ke = Math.min(Re.length - 1, me + 1);
        Ce(Ke);
        return;
      }
      if (je === "ArrowLeft") {
        he.preventDefault();
        const Re = Math.max(0, me - 1);
        Ce(Re);
        return;
      }
      if (je === "Home") {
        he.preventDefault(), Ce(0);
        return;
      }
      if (je === "End") {
        he.preventDefault(), Ce(ye().length - 1);
        return;
      }
      if (je === "Enter" || je === " ") {
        if (he.preventDefault(), xe === q.current) {
          if (ae("nav"), ut.current) {
            const Re = Array.from(
              ut.current.querySelectorAll("[data-nav-item]")
            );
            (Re[Xe >= 0 ? Xe : 0] || Re[0])?.focus();
          }
        } else xe === K.current ? (ae("content"), Ae(Q.contentIndex)) : xe === A.current && (ae("secondary"), We(Q.secondaryIndex));
        return;
      }
      return;
    }
    if (je === "Escape") {
      if (J === "content" || J === "secondary") {
        if (tt || Ge) {
          if (he.preventDefault(), ae("nav"), ut.current) {
            const Ke = Array.from(
              ut.current.querySelectorAll("[data-nav-item]")
            )[Xe >= 0 ? Xe : 0];
            setTimeout(() => Ke?.focus(), 10);
          }
        } else if ((xe === K.current || xe === A.current) && (he.preventDefault(), ae("nav"), ut.current)) {
          const Ke = Array.from(
            ut.current.querySelectorAll("[data-nav-item]")
          )[Xe >= 0 ? Xe : 0];
          setTimeout(() => Ke?.focus(), 10);
        }
      }
      return;
    }
    if (je === "Enter" || je === " ") {
      if (xe.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (xe === K.current && J === "content") {
        he.preventDefault(), he.stopPropagation(), ge(K.current).length > 0 && setTimeout(() => {
          Ae(Q.contentIndex);
        }, 50);
        return;
      }
      if (xe === A.current && J === "secondary") {
        he.preventDefault(), he.stopPropagation(), ge(
          A.current
        ).length > 0 && setTimeout(() => {
          We(Q.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Rt && _n && !Ut && (je === "ArrowRight" || je === "ArrowLeft")) {
      const Re = ge(K.current).filter(
        (Ke) => Ke.closest(".nhs-navigation-split-view__header")
      );
      if (Re.length > 1) {
        const Ke = Re.indexOf(xe);
        if (Ke >= 0) {
          const Vr = (Ke + (je === "ArrowRight" ? 1 : -1) + Re.length) % Re.length;
          he.preventDefault(), Re[Vr].focus();
          return;
        }
      }
    }
    if (je === "ArrowRight") {
      if (Ie || J === "nav") {
        he.preventDefault(), ae("content"), setTimeout(() => K.current?.focus(), 10);
        return;
      }
      if (tt || J === "content") {
        Ye && (he.preventDefault(), ae("secondary"), setTimeout(() => A.current?.focus(), 10));
        return;
      }
    }
    if (je === "ArrowLeft") {
      if (Ge || J === "secondary") {
        he.preventDefault(), ae("content"), setTimeout(() => K.current?.focus(), 10);
        return;
      }
      if (tt || J === "content") {
        if (he.preventDefault(), ae("nav"), ut.current) {
          const Ke = Array.from(
            ut.current.querySelectorAll("[data-nav-item]")
          )[Xe >= 0 ? Xe : 0];
          setTimeout(() => Ke?.focus(), 10);
        }
        return;
      }
    }
    if (je === "Home" && !Ie && (he.preventDefault(), ae("nav"), ut.current)) {
      const Re = Array.from(
        ut.current.querySelectorAll("[data-nav-item]")
      ), Ke = Re[Xe >= 0 ? Xe : 0] || Re[0];
      setTimeout(() => Ke?.focus(), 10);
    }
    if (je === "End") {
      const Re = Ye ? A.current : K.current;
      Re && !Re.contains(xe) && (he.preventDefault(), Ye ? (ae("secondary"), setTimeout(() => A.current?.focus(), 10)) : (ae("content"), setTimeout(() => K.current?.focus(), 10)));
    }
    if (je === "ArrowDown" || je === "ArrowUp") {
      if (xe === K.current && je === "ArrowDown") {
        he.preventDefault(), ge(K.current).length > 0 && Ae(0);
        return;
      }
      if (xe === A.current && je === "ArrowDown") {
        he.preventDefault(), ge(
          A.current
        ).length > 0 && We(0);
        return;
      }
      if (tt) {
        const Re = ge(K.current);
        if (Re.length) {
          he.preventDefault();
          const Ke = je === "ArrowDown" ? 1 : -1, Pt = (Q.contentIndex + Ke + Re.length) % Re.length;
          Ae(Pt);
        }
      } else if (Ge) {
        const Re = ge(A.current);
        if (Re.length) {
          he.preventDefault();
          const Ke = je === "ArrowDown" ? 1 : -1, Pt = (Q.secondaryIndex + Ke + Re.length) % Re.length;
          We(Pt);
        }
      }
    }
  }, ze = !!ie && (R === "list" || R === "cards"), et = G.useMemo(() => oe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : oe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : oe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: oe.mobile !== void 0 ? oe.mobile : !0,
    tablet: oe.tablet || !1,
    desktop: oe.desktop || !1
  }, [oe]), Mt = de && ne("medium") && !ne("xlarge"), _t = de && ne("xlarge"), vt = !!l, st = R === "three-column", [it, qt] = G.useState(!1);
  G.useEffect(() => {
    st && it && qt(!1);
  }, [st, it]), G.useEffect(() => {
    it && !st && (ae("secondary"), ve(2), setTimeout(() => {
      A.current?.focus();
    }, 50));
  }, [it, st]), G.useEffect(() => {
    !it && !st && J === "secondary" && (ae("content"), ve(1), setTimeout(() => {
      K.current?.focus();
    }, 50));
  }, [it, st, J]);
  const Tn = !!ie && (ze && et.mobile || !ze && Mt && et.tablet || !ze && _t && et.desktop) || vt && !st, gr = `h${ke}`, Dn = ie ? G.createElement(
    gr,
    {
      style: {
        marginLeft: ze ? 32 : 0,
        marginRight: ze ? 32 : 0
      }
    },
    ie.label
  ) : null, Gn = ze ? "mobile" : Mt ? "tablet" : "desktop", xr = vt && !st && !it, In = ze && et.mobile ? /* @__PURE__ */ r.jsx(
    ks,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => Xt(void 0, void 0)
    }
  ) : void 0, br = xr ? /* @__PURE__ */ r.jsx(
    Ol,
    {
      element: "button",
      text: f,
      onClick: () => {
        qt(!0);
      }
    }
  ) : void 0, vr = !st && it ? /* @__PURE__ */ r.jsx(
    ks,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => qt(!1)
    }
  ) : void 0, ts = G.useMemo(() => {
    if (!Tn || !ie) return null;
    if (le)
      return le({
        item: ie,
        detailActive: ze,
        context: Gn,
        backLink: In,
        defaultHeading: Dn
      });
    const he = ie && ce ? typeof ce == "function" ? ce(ie) : ce : null;
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
            vr || In,
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
                  Dn,
                  he && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: he })
                ]
              }
            )
          ]
        }
      ),
      br && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: br })
    ] });
  }, [
    Tn,
    ie,
    le,
    ze,
    Gn,
    In,
    vr,
    Dn,
    br,
    ce
  ]);
  G.useEffect(() => {
    if (!_) return;
    const he = R === "three-column";
    let je = !1;
    const xe = () => {
      je || (Y.selectedId !== pe && Y.setSelectedId(pe), Y.drilledIn !== he && Y.setDrilledIn(he));
    };
    if (v && v > 0) {
      const Ie = setTimeout(xe, v);
      return () => {
        je = !0, clearTimeout(Ie);
      };
    } else
      xe();
  }, [_, Y, pe, R, v]), G.useEffect(() => {
    if (!_) return;
    const he = () => {
      const je = new URLSearchParams(window.location.search), xe = je.get(I);
      je.get(S), ue(xe === null ? void 0 : xe);
    };
    return window.addEventListener("popstate", he), () => window.removeEventListener("popstate", he);
  }, [
    _,
    I,
    S,
    u,
    l
  ]);
  const $n = G.useRef(0), Et = G.useRef(
    null
  ), Xt = G.useCallback(
    (he, je) => {
      he !== pe && (n === void 0 && ue(he), o?.(he, je));
    },
    [n, o, pe]
  );
  G.useEffect(() => {
    if (!T && ze && K.current) {
      const he = setTimeout(() => K.current?.focus(), 30);
      return () => clearTimeout(he);
    }
  }, [ze, pe, T]);
  const ut = G.useRef(null), [Xe, Mn] = G.useState(
    () => b === "first" ? 0 : -1
  );
  G.useEffect(() => {
    if (Xe < 0 || !ut.current) return;
    const je = Array.from(
      ut.current.querySelectorAll("[data-nav-item]")
    )[Xe];
    if (je) {
      document.activeElement !== je && je.focus(), $n.current = Xe;
      const xe = t[Xe];
      j?.(
        xe ? p(xe) : void 0,
        xe,
        Xe
      );
    }
  }, [Xe, t, j, p]);
  const ns = (he) => {
    const je = g === "vertical" ? "ArrowDown" : "ArrowRight", xe = g === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (he.key === "ArrowRight" && g === "vertical") {
      he.preventDefault(), it ? (ae("secondary"), setTimeout(() => {
        A.current?.focus();
      }, 10)) : (ae("content"), setTimeout(() => {
        K.current?.focus();
      }, 10));
      return;
    }
    if (he.key === je)
      he.preventDefault(), Mn((Ie) => Math.min(t.length - 1, Ie + 1));
    else if (he.key === xe)
      he.preventDefault(), Mn((Ie) => Math.max(0, Ie - 1));
    else if (he.key === "Home")
      he.preventDefault(), Mn(0);
    else if (he.key === "End")
      he.preventDefault(), Mn(t.length - 1);
    else if (he.key === "Enter" || he.key === " ") {
      he.preventDefault();
      const Ie = t[Xe];
      Ie && !Ie.disabled && Xt(p(Ie), Ie);
    } else if (he.key.length === 1 && /[a-z0-9]/i.test(he.key)) {
      Et.current || (Et.current = { buffer: "", last: 0 });
      const Ie = Date.now(), tt = 700, Ge = he.key.toLowerCase();
      Ie - Et.current.last > tt ? Et.current.buffer = Ge : Et.current.buffer += Ge, Et.current.last = Ie;
      let Ye = Et.current.buffer;
      const Ut = Ye.split("").every((Pt) => Pt === Ye[0]), Rt = t.map(
        (Pt) => String(Pt.label || "").toLowerCase()
      );
      let _n = 0;
      Xe >= 0 && (_n = (Xe + 1) % t.length);
      let Re;
      const Ke = (Pt, Vr) => {
        const Gr = t.length;
        for (let Sn = 0; Sn < Gr; Sn++) {
          const wr = (_n + Sn) % Gr;
          if (!t[wr].disabled && Rt[wr].startsWith(Pt))
            return wr;
        }
      };
      Ut && Ye.length > 1 ? Re = Ke(Ye[0]) : (Re = Ke(Ye), Re === void 0 && Ye.length > 1 && (Re = Ke(Ye[Ye.length - 1]), Re !== void 0 && Et.current && (Et.current.buffer = Ye[Ye.length - 1]))), Re !== void 0 && Mn(Re);
    }
  }, rs = G.useMemo(() => {
    if (U && (U === "url" || U === "both") && typeof window < "u") {
      const je = new URLSearchParams(window.location.search).get(W);
      if (je === "1") return !0;
      if (je === "0") return !1;
    }
    if (U && (U === "localStorage" || U === "both") && typeof window < "u")
      try {
        const he = window.localStorage.getItem(re);
        if (he === "1") return !0;
        if (he === "0") return !1;
      } catch {
      }
    return D;
  }, [
    U,
    D,
    re,
    W
  ]), [Dt, yn] = G.useState(rs);
  G.useEffect(() => {
    P?.(Dt);
  }, [Dt, P]);
  const Yn = G.useCallback(() => {
    fe && $ && yn((he) => !he);
  }, [fe, $]);
  G.useEffect(() => {
    if (U && !(typeof window > "u")) {
      if (U === "localStorage" || U === "both")
        try {
          window.localStorage.setItem(
            re,
            Dt ? "1" : "0"
          );
        } catch {
        }
      if (U === "url" || U === "both") {
        const he = new URLSearchParams(window.location.search);
        he.set(W, Dt ? "1" : "0");
        const je = `${window.location.pathname}?${he.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", je);
      }
    }
  }, [
    Dt,
    U,
    re,
    W
  ]);
  const Kt = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    ze ? "nhs-navigation-split-view--detail-active" : "",
    R === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    $ && fe && Dt ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), yr = G.useRef(null);
  G.useEffect(() => {
    if (!N && yr.current) {
      const he = ie ? `Selected ${ie.label}` : "Selection cleared";
      yr.current.textContent = he;
    }
  }, [ie, N]), G.useEffect(() => {
    !ze && pe == null && ut.current && ut.current.querySelectorAll("[data-nav-item]")[$n.current]?.focus();
  }, [ze, pe]);
  const Jt = R === "three-column", [dt, Zt] = G.useState(!1);
  G.useEffect(() => {
    Jt && !dt && Zt(!0);
  }, [Jt, dt]);
  const wn = G.useRef(Jt);
  G.useEffect(() => {
    wn.current !== Jt && (M?.(Jt), wn.current = Jt);
  }, [Jt, M]);
  const qn = () => {
    if (R === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": pe ? String(pe) : void 0,
          children: [
            t.map((xe) => {
              const Ie = p(xe), tt = Ie === pe;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": tt,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Ie),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": tt || void 0,
                      "data-disabled": xe.disabled || void 0,
                      disabled: xe.disabled,
                      onClick: () => !xe.disabled && Xt(Ie, xe),
                      children: [
                        xe.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: xe.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: xe.label }),
                        xe.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: xe.description }),
                        s?.(xe),
                        xe.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: xe.badge })
                      ]
                    }
                  )
                },
                Ie
              );
            }),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: x || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const he = "nsv-nav-instructions", je = G.useMemo(() => G.memo(
      ({
        item: xe,
        idx: Ie,
        selected: tt,
        focused: Ge
      }) => {
        const Ye = p(xe), Ut = xe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ge ? 0 : -1,
          onClick: () => {
            $n.current = Ie, Xt(Ye, xe);
          },
          onKeyDown: (Rt) => {
            (Rt.key === "Enter" || Rt.key === " ") && (Rt.preventDefault(), $n.current = Ie, Xt(Ye, xe));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Ye),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": tt,
            "aria-current": tt ? "true" : void 0,
            "data-selected": tt || void 0,
            "data-disabled": xe.disabled || void 0,
            ...Ut,
            children: [
              xe.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: xe.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: xe.label }),
                xe.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: xe.description }),
                s?.(xe)
              ] }),
              xe.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: xe.badge })
            ]
          }
        );
      }
    ), [p, Xt, s]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: ut,
          className: "nhs-navigation-split-view__list",
          onKeyDown: ns,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": he,
          "aria-activedescendant": pe ? String(pe) : void 0,
          children: [
            t.map((xe, Ie) => /* @__PURE__ */ r.jsx(
              je,
              {
                item: xe,
                idx: Ie,
                selected: p(xe) === pe,
                focused: Ie === Xe || Xe === -1 && Ie === 0 && b === "first",
                "data-just-selected": p(xe) === B ? "true" : void 0
              },
              p(xe)
            )),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: x || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
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
          children: C
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: X,
      className: Kt,
      "aria-label": y?.rootLabel,
      "data-layout": R,
      onKeyDown: at,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": ze || void 0,
            style: { transform: ze ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: q,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": y?.navigationLabel || "Items",
                  "data-collapsed": Dt || void 0,
                  tabIndex: 0,
                  children: [
                    $ && fe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Yn,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Dt ? te : V,
                        title: Dt ? te : V,
                        children: Dt ? H || /* @__PURE__ */ r.jsx(Ah, {}) : O || /* @__PURE__ */ r.jsx(Fh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: qn() }),
                    w && /* @__PURE__ */ r.jsx(
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
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: K,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": y?.contentLabel || "Content",
                  "data-has-selection": !!ie || void 0,
                  tabIndex: 0,
                  style: {
                    display: it && !st ? "none" : void 0
                  },
                  children: [
                    Tn && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: ts }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(ie)
                      }
                    )
                  ]
                }
              ),
              R === "three-column" && (!L || dt) || it && !st ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: A,
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
                        it && !st && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  vr,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: ie && typeof ie == "object" && "label" in ie ? ie.label : String(ie) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        ie && Z && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof Z == "function" ? Z(ie) : Z
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(ie) })
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
            ref: yr,
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
            children: Jt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Eh.displayName = "NavigationSplitView";
const Rh = typeof window < "u" && window.document ? G.useLayoutEffect : G.useEffect, Ti = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Bh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, u = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, x = (m) => {
    h && (m.preventDefault(), a?.(e));
  }, y = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: x,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && x(m), m.key === "Escape" && o && x(m);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: we("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: u, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": d,
      "aria-colspan": f,
      ...y,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: we("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Hh = yu(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: u = "overlay",
  ...c
}) => {
  const [d, f] = He(() => /* @__PURE__ */ new Set()), [h, x] = He(() => /* @__PURE__ */ new Set()), y = Ue(/* @__PURE__ */ new Set()), m = be((v) => d.has(v), [d]), p = be((v) => {
    f((L) => {
      const w = new Set(L);
      return w.has(v.id) ? (w.delete(v.id), x(($) => {
        const D = new Set($);
        return D.add(v.id), D;
      }), setTimeout(() => x(($) => {
        const D = new Set($);
        return D.delete(v.id), D;
      }), 240), l?.(v.id, !1)) : (w.add(v.id), l?.(v.id, !0)), w;
    });
  }, [l]);
  Rh(() => {
    if (u !== "inline" || !i || typeof document > "u") return;
    const v = [];
    if (d.forEach((D) => {
      y.current.has(D) || v.push(D);
    }), y.current = new Set(d), !v.length) return;
    const L = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, w = v.map((D) => `.nhsuk-product-roadmap__inline-children[data-parent="${D}"] .nhsuk-product-roadmap__inline-child`).join(","), $ = Array.from(document.querySelectorAll(w));
    if ($.length) {
      if (L) {
        $.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((D) => {
        (D.gsap || D.default || D).to($, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        $.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, u, i]);
  const g = be(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), k = we("nhsuk-product-roadmap", o), M = Ti(n, 120, 1200, 400), C = Ti(a, 1, 6, 2), b = Pe(() => e.map((v) => /* @__PURE__ */ new Date(v + " 01")), [e]), T = Pe(() => {
    if (b.length === 0) {
      const w = /* @__PURE__ */ new Date();
      return [w, w];
    }
    const v = new Date(b[0]), L = Fr.offset(new Date(b[b.length - 1]), 1);
    return [v, L];
  }, [b]), N = Pe(() => So().domain(T).range([0, b.length * M]), [T, b.length, M]), j = be((v) => {
    if (v.startDate) {
      const V = new Date(v.startDate), H = new Date(v.endDate ?? v.startDate);
      H < V && H.setTime(V.getTime());
      const O = N(V), U = Fr.offset(new Date(H), 1);
      let re = N(U);
      Number.isFinite(re) || (re = O + M);
      const W = Math.max(M * 0.25, re - O), oe = O / M, ke = W / M;
      return { ...v, _pxLeft: O, _pxWidth: W, _startFraction: oe, _spanColumns: ke };
    }
    const L = v.date ?? 1, w = v.dateOffset ?? 0, $ = v.length ?? 1, D = v.partialLength ?? 1, P = L - 1 + w, te = $ - 1 + D;
    return { ...v, _pxLeft: P * M, _pxWidth: te * M, _startFraction: P, _spanColumns: te };
  }, [N, M]), _ = Pe(() => t.map((v) => {
    const w = v.roadmapItems.map((D) => {
      const P = !D.childItems && D.children ? { ...D, childItems: D.children } : { ...D };
      return j(P);
    }).sort((D, P) => D._pxLeft !== P._pxLeft ? D._pxLeft - P._pxLeft : P._pxWidth - D._pxWidth), $ = [];
    return w.forEach((D) => {
      const P = D._pxLeft, te = D._pxLeft + D._pxWidth;
      let V = $.findIndex((H) => H <= P);
      V === -1 && (V = $.length, $.push(0)), $[V] = te, D.verticalPosition = V + 1;
    }), { ...v, roadmapItems: w, _laneCount: $.length };
  }), [t, j]), I = Pe(() => _.map((v) => v._laneCount || 1), [_]), S = Pe(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: k,
      style: { "--column-width": `${M}px`, gridTemplateColumns: S },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": _.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((v, L) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": L + 2, children: v }, `${v}-${L}`))
        ] }),
        _.map((v, L) => {
          const w = L + 2, $ = I[L];
          let D, P = 0, te = [];
          i && u === "inline" && (te = v.roadmapItems.filter((U) => m(U.id) && U.childItems && U.childItems.length).map((U) => ({ id: U.id, lane: U.verticalPosition || 1, count: U.childItems.length })).sort((U, re) => U.lane - re.lane), P = te.reduce((U, re) => U + re.count, 0));
          const V = $ + P;
          D = `calc((${V} * var(--roadmap-item-block-height)) + (max(0, ${V} - 1) * var(--roadmap-row-gap)))`;
          const H = {};
          let O = 0;
          return te.forEach((U) => {
            O += U.count, H[U.lane + 1] = O;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": w, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: v.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: D }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: v.roadmapItems.map((U, re) => {
              const W = (U.verticalPosition || 1) - 1, oe = te.filter((Z) => Z.lane - 1 < W).reduce((Z, ne) => Z + ne.count, 0), ke = W + oe, le = m(U.id), ce = h.has(U.id);
              return /* @__PURE__ */ r.jsxs(jt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Bh, { item: U, maxLines: C, enableDrilldown: i, onExpand: p, isActive: le, topLaneIndex: ke, laneOffset: oe }),
                i && u === "inline" && (le || ce) && U.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": U.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${U.title} child tasks`, children: U.childItems.map((Z, ne) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let z = U._pxLeft, fe = U._pxWidth;
                  if (Z.startDate) {
                    const Y = new Date(Z.startDate);
                    let se = Z.endDate ? new Date(Z.endDate) : new Date(Y);
                    se < Y && (se = new Date(Y));
                    const ue = new Date(se);
                    ue.setDate(ue.getDate() + 1);
                    const pe = N(Y);
                    let ie = N(ue);
                    (!Number.isFinite(ie) || ie <= pe) && (ie = pe + 6), z = pe, fe = Math.max(6, ie - pe);
                  }
                  const R = ke + 1 + ne;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: we("nhsuk-product-roadmap__inline-child", Z.status && `nhsuk-product-roadmap__inline-child--status-${Z.status}`, !le && ce && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${z}px`, width: `${fe}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${R})`, height: de, opacity: le ? 0 : void 0, transform: le ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Z.title })
                      ]
                    },
                    Z.id ?? ne
                  );
                }) })
              ] }, U.id ?? re);
            }) }) })
          ] }, `${v.heading}-${L}`);
        }),
        i && u === "overlay" && d.size === 1 && (() => {
          const v = Array.from(d)[0], L = t.flatMap((w) => w.roadmapItems).find((w) => w.id === v);
          return !L || !L.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${L.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: L.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: g, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: L.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: L.childItems.map((w, $) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: w.title }),
                w.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: w.content })
              ] }, w.id ?? $)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: g, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Hh.displayName = "ProductRoadmap";
function Wl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Wl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function ha() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Wl(e)) && (a && (a += " "), a += t);
  return a;
}
function ht(e) {
  return function() {
    return e;
  };
}
const Ps = Math.PI, Ls = 2 * Ps, Ln = 1e-6, Oh = Ls - Ln;
function zl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Uh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return zl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class Wh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? zl : Uh(t);
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
    let i = this._x1, l = this._y1, u = a - t, c = o - n, d = i - t, f = l - n, h = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > Ln) if (!(Math.abs(f * u - c * d) > Ln) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let x = a - i, y = o - l, m = u * u + c * c, p = x * x + y * y, g = Math.sqrt(m), k = Math.sqrt(h), M = s * Math.tan((Ps - Math.acos((m + h - p) / (2 * g * k))) / 2), C = M / k, b = M / g;
      Math.abs(C - 1) > Ln && this._append`L${t + C * d},${n + C * f}`, this._append`A${s},${s},0,0,${+(f * x > d * y)},${this._x1 = t + b * u},${this._y1 = n + b * c}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), u = a * Math.sin(o), c = t + l, d = n + u, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Ln || Math.abs(this._y1 - d) > Ln) && this._append`L${c},${d}`, a && (h < 0 && (h = h % Ls + Ls), h > Oh ? this._append`A${a},${a},0,1,${f},${t - l},${n - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : h > Ln && this._append`A${a},${a},0,${+(h >= Ps)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Vl(e) {
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
  }, () => new Wh(t);
}
function Gl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Yl(e) {
  this._context = e;
}
Yl.prototype = {
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
function ql(e) {
  return new Yl(e);
}
function Xl(e) {
  return e[0];
}
function Kl(e) {
  return e[1];
}
function Jl(e, t) {
  var n = ht(!0), a = null, o = ql, s = null, i = Vl(l);
  e = typeof e == "function" ? e : e === void 0 ? Xl : ht(e), t = typeof t == "function" ? t : t === void 0 ? Kl : ht(t);
  function l(u) {
    var c, d = (u = Gl(u)).length, f, h = !1, x;
    for (a == null && (s = o(x = i())), c = 0; c <= d; ++c)
      !(c < d && n(f = u[c], c, u)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, c, u), +t(f, c, u));
    if (x) return s = null, x + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : ht(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : ht(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : ht(!!u), l) : n;
  }, l.curve = function(u) {
    return arguments.length ? (o = u, a != null && (s = o(a)), l) : o;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? a = s = null : s = o(a = u), l) : a;
  }, l;
}
function Fs(e, t, n) {
  var a = null, o = ht(!0), s = null, i = ql, l = null, u = Vl(c);
  e = typeof e == "function" ? e : e === void 0 ? Xl : ht(+e), t = typeof t == "function" ? t : ht(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Kl : ht(+n);
  function c(f) {
    var h, x, y, m = (f = Gl(f)).length, p, g = !1, k, M = new Array(m), C = new Array(m);
    for (s == null && (l = i(k = u())), h = 0; h <= m; ++h) {
      if (!(h < m && o(p = f[h], h, f)) === g)
        if (g = !g)
          x = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), y = h - 1; y >= x; --y)
            l.point(M[y], C[y]);
          l.lineEnd(), l.areaEnd();
        }
      g && (M[h] = +e(p, h, f), C[h] = +t(p, h, f), l.point(a ? +a(p, h, f) : M[h], n ? +n(p, h, f) : C[h]));
    }
    if (k) return l = null, k + "" || null;
  }
  function d() {
    return Jl().defined(o).curve(i).context(s);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ht(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ht(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : ht(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ht(+f), n = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ht(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : ht(+f), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(t);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : ht(!!f), c) : o;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), c) : s;
  }, c;
}
function Di(e) {
  return e < 0 ? -1 : 1;
}
function Ii(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (Di(s) + Di(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function $i(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function hs(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * n, s, i);
}
function ma(e) {
  this._context = e;
}
ma.prototype = {
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
        hs(this, this._t0, $i(this, this._t0));
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
          this._point = 3, hs(this, $i(this, n = Ii(this, e, t)), n);
          break;
        default:
          hs(this, this._t0, n = Ii(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(ma.prototype).point = function(e, t) {
  ma.prototype.point.call(this, t, e);
};
function ga(e) {
  return new ma(e);
}
function zh(e, t, n) {
  const a = cl(e, t);
  return So().domain(a).range(n);
}
function Mi(e, t, n) {
  const [a, o] = cl(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return la().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const u = o - a, c = (u > 0 ? u : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return la().domain([i, l]).nice().range(n);
}
function As(e, t, n, a) {
  const o = Jl().x(t).y(n);
  return a?.smooth !== !1 && o.curve(ga), o(e) ?? "";
}
function Vh(e = {}) {
  const t = G.useRef(null), n = G.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = G.useState({ width: 0, height: 0 });
  G.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((u) => {
      for (const c of u) {
        const { width: d, height: f } = c.contentRect;
        o({ width: d, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: n, ref: t };
}
const Zl = G.createContext(null);
function jn() {
  return G.useContext(Zl);
}
const Gh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Vh(t), u = { height: e, position: "relative" };
  return n !== void 0 && (u.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: u, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(Zl.Provider, { value: l, children: o }) });
}, Co = G.createContext(null), Vn = () => G.useContext(Co), Yh = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: u,
  yPadding: c
}) => {
  const d = jn(), f = t ?? d?.innerWidth ?? 0, h = n ?? d?.innerHeight ?? 0, x = G.useMemo(() => e.flatMap((C) => C.data), [e]), y = G.useCallback((C) => {
    if (a) return a(C);
    const b = C.x;
    return b instanceof Date ? b : new Date(b);
  }, [a]), m = u ?? 6, p = c ?? 6, g = G.useMemo(() => zh(x, y, [m, Math.max(0, f - m)]), [x, y, f, m]), k = G.useMemo(() => {
    if (l) {
      const C = Mi([], (b) => b.y, [Math.max(0, h - p), p]);
      return C.domain(l), C;
    }
    return Mi(x, (C) => C.y, [Math.max(0, h - p), p]);
  }, [x, h, l]), M = G.useMemo(() => ({
    xScale: g,
    yScale: k,
    getXTicks: (C = s) => g.ticks(C),
    getYTicks: (C = i) => k.ticks(C)
  }), [g, k, s, i]);
  return /* @__PURE__ */ r.jsx(Co.Provider, { value: M, children: o });
}, Pi = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: u,
  maxTickLabelLength: c,
  autoMinLabelSpacing: d = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: x
}) => {
  const y = Vn(), m = jn(), p = t || (e === "x" ? y?.xScale : y?.yScale), g = n ?? (e === "x" ? 6 : 5), k = typeof o == "function", M = G.useMemo(() => {
    if (k || !x) return;
    const T = (N) => new Intl.DateTimeFormat(void 0, N);
    switch (x) {
      case "dayShortMonth":
        return (N) => {
          const j = N instanceof Date ? N : new Date(N);
          return `${j.getDate()}
${T({ month: "short" }).format(j)}`;
        };
      case "dayShortMonthYear":
        return (N) => {
          const j = N instanceof Date ? N : new Date(N);
          return `${j.getDate()}
${T({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "shortMonth":
        return (N) => {
          const j = N instanceof Date ? N : new Date(N);
          return T({ month: "short" }).format(j);
        };
      case "shortMonthYear":
        return (N) => {
          const j = N instanceof Date ? N : new Date(N);
          return `${T({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "hourMinute":
        return (N) => {
          const j = N instanceof Date ? N : new Date(N);
          return T({ hour: "2-digit", minute: "2-digit" }).format(j);
        };
      default:
        return;
    }
  }, [k, x]);
  let C = k ? o : M || ((T) => String(T));
  const b = G.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(g) : p.domain ? p.domain() : [] : [], [p, g, a]);
  if (e === "x" && !k && !x && b.length && b.every((T) => T instanceof Date)) {
    const T = b[0], N = b[b.length - 1], j = N.getTime() - T.getTime(), _ = 24 * 3600 * 1e3, I = 365 * _, S = T.getFullYear() === N.getFullYear(), v = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (j < 2 * _) {
      const L = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      C = (w) => L.format(w);
    } else if (j < 32 * _)
      C = (L) => {
        const w = L;
        return `${w.getDate()} ${v.format(w)}`;
      };
    else if (j < I && S)
      C = (L) => v.format(L);
    else if (j < 2 * I) {
      const L = /* @__PURE__ */ new Set();
      C = (w) => {
        const $ = w, D = $.getMonth();
        return L.has(D) || L.add(D), `${v.format($)} ${$.getFullYear()}`;
      };
    } else
      C = (L) => String(L.getFullYear());
  }
  if (!p || !m) return null;
  if (e === "x") {
    const T = i ?? m.innerHeight, N = typeof p.bandwidth == "function", j = N ? p.bandwidth() : 0, _ = (v) => {
      const L = p(v);
      return N ? L + j / 2 : L;
    };
    let I = u ?? 0;
    if (d && u == null) {
      const v = b.map((w) => C(w).replace(/\n.*/g, "")), L = v.length ? v.reduce((w, $) => w + $.length, 0) / v.length : 0;
      I = Math.max(12, Math.round(L * 6 + 4));
    }
    const S = G.useMemo(() => {
      if (a && Array.isArray(a) || I <= 0) return b;
      const v = [];
      let L = -1 / 0;
      for (const w of b) {
        const $ = _(w);
        $ - L >= I && (v.push(w), L = $);
      }
      return v;
    }, [b, p, I, a, N, j]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${T})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      S.map((v, L) => {
        const w = C(v), $ = c && w.length > c ? w.slice(0, Math.max(1, c - 1)) + "…" : w, D = h ? $.split(/\n/) : [$.replace(/\n/g, " ")], P = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${_(v)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: P, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            D.map((te, V) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: V === 0 ? 0 : "1.1em", children: te }, V)),
            $ !== w && /* @__PURE__ */ r.jsx("title", { children: w })
          ] })
        ] }, v?.toString?.() || L);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    b.map((T, N) => {
      const j = C(T), _ = c && j.length > c ? j.slice(0, Math.max(1, c - 1)) + "…" : j, I = h ? _.split(/\n/) : [_.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${p(T)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          I.map((S, v) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: v === 0 ? 0 : "1.1em", children: S }, v)),
          _ !== j && /* @__PURE__ */ r.jsx("title", { children: j })
        ] })
      ] }, T?.toString?.() || N);
    }),
    s && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -m.innerHeight / 2, y: -m.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, qh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Vn(), i = jn();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((u, c) => /* @__PURE__ */ r.jsx("line", { x1: 0, x2: i.innerWidth, y1: s.yScale(u), y2: s.yScale(u), stroke: n, strokeDasharray: a }, c)),
    e === "x" && l.map((u, c) => /* @__PURE__ */ r.jsx("line", { y1: 0, y2: i.innerHeight, x1: s.xScale(u), x2: s.xScale(u), stroke: n, strokeDasharray: a }, c))
  ] });
}, Xh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Ur = {
  color: Xh
}, Kh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Xa = {
  color: Kh
}, Jh = [
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
let ms = null, gs = null, xs = null, Ql = "optimized";
function Zh() {
  const e = { color: { ...Xa.color, ...Ur.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
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
    return Jh;
  }
}
function Qh() {
  return ms || (ms = Zh()), ms;
}
function em(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function bs(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function tm(e, t, n) {
  const a = bs(e), o = bs(t), s = bs(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, u = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: u * 100 };
}
function nm(e, t, n) {
  let i = e / 95.047, l = t / 100, u = n / 108.883;
  const c = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = c(i), l = c(l), u = c(u), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - u) };
}
function ec(e) {
  const t = em(e);
  if (!t) return null;
  const n = tm(t.r, t.g, t.b);
  return nm(n.x, n.y, n.z);
}
function Li(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function rm() {
  const e = Qh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => ec(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let u = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (u += Li(l, t[f]), c++);
    const d = u / Math.max(1, c);
    d > a && (a = d, n = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(n), o.delete(n); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const u of o) {
      const c = t[u];
      if (!c) continue;
      let d = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const x = Li(c, h);
          x < d && (d = x);
        }
      }
      d > l && (l = d, i = u);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function am() {
  return gs || (gs = rm()), gs;
}
function sm(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, u = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: u, Z: c };
}
function om(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function im(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function lm(e, t) {
  const n = ec(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = sm(a, n.a, n.b), l = om(o, s, i);
  return im(l.r, l.g, l.b);
}
function cm() {
  const e = am(), n = [12, -12, 24, -24].map((o) => e.map((s) => lm(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function um() {
  return (!xs || dm()) && (xs = cm(), tc = Ql), xs;
}
let tc = null;
function dm() {
  return tc !== Ql;
}
function Gt(e) {
  const t = um();
  return t[e % t.length];
}
let ir = null, Ar = null, Er = null, Rr = null;
function fm() {
  const e = Ur?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    ir = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      ir.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    Ar = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (Ar[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    Rr = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (Rr[s] = i);
    }), Er = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (Er[s] = i);
    });
  }
}
function Ka() {
  (!ir || !Ar || !Er || !Rr) && fm();
}
function Un(e) {
  return Ka(), ir ? ir[e % ir.length] : "#212b32";
}
function pm(e) {
  return Ka(), Ar ? Ar[e] : void 0;
}
function xa(e, t) {
  return pm(e) || Un(t);
}
const Es = ["low", "moderate", "high", "critical"];
let vs = null;
function hm() {
  const e = { color: { ...Xa.color, ...Ur.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return Es.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function nc() {
  return vs || (vs = hm()), vs;
}
function mm(e) {
  return nc()[e.toLowerCase()];
}
function gm(e, t) {
  return mm(e) || nc()[Es[t % Es.length]] || Gt(t);
}
function xm(e) {
  return Ka(), Er ? Er[e] : void 0;
}
function bm(e, t) {
  return xm(e) || Un(t);
}
const Rs = ["trust", "ambulance", "icb", "region"];
let ys = null;
function vm() {
  const e = { color: { ...Xa.color, ...Ur.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return Rs.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function rc() {
  return ys || (ys = vm()), ys;
}
function ym(e) {
  return rc()[e.toLowerCase()];
}
function wm(e, t) {
  return ym(e) || rc()[Rs[t % Rs.length]] || Gt(t);
}
function _m(e) {
  return Ka(), Rr ? Rr[e] : void 0;
}
function Sm(e, t) {
  return _m(e) || Un(t);
}
let ws = null;
const km = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Cm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Nm() {
  const e = { color: { ...Xa.color, ...Ur.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((u, c) => u ? u[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return km.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function jm() {
  return ws || (ws = Nm()), ws;
}
function Tm(e) {
  return jm()[Cm(e)];
}
function lr(e, t) {
  return Tm(e) || Gt(t);
}
const ac = G.createContext(null), Wr = () => G.useContext(ac), Jv = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = G.useState(() => new Set(e)), i = n !== void 0, l = G.useMemo(() => i ? new Set(n) : o, [i, n, o]), u = G.useCallback((d) => {
    i || s(new Set(d)), a?.(Array.from(d));
  }, [i, a]), c = G.useMemo(() => ({
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
  return /* @__PURE__ */ r.jsx(ac.Provider, { value: c, children: t });
}, sc = G.createContext(null), vn = () => G.useContext(sc), Dm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Vn(), o = Wr(), [s, i] = G.useState(null), l = G.useRef(/* @__PURE__ */ new Map()), [u, c] = G.useState([]), d = G.useCallback(
    (N, j) => {
      l.current.set(N, j);
    },
    []
  ), f = G.useCallback((N) => {
    l.current.delete(N);
  }, []), h = G.useCallback(
    (N, j) => {
      if (!a) return;
      const { xScale: _, yScale: I } = a;
      let S = null, v = 1 / 0;
      l.current.forEach((L, w) => {
        L.forEach(($, D) => {
          const P = _($.x), te = I($.y), V = P - N, H = te - j, O = Math.sqrt(V * V + H * H);
          O < v && (v = O, S = {
            seriesId: w,
            index: D,
            x: $.x,
            y: $.y,
            clientX: P,
            clientY: te
          });
        });
      }), S && v <= t ? i(S) : i(null);
    },
    [a, t]
  ), x = G.useCallback(() => i(null), []);
  G.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: N, yScale: j } = a, _ = [];
    l.current.forEach((I, S) => {
      I.forEach((v, L) => {
        (s.x instanceof Date && v.x instanceof Date ? v.x.getTime() === s.x.getTime() : v.x === s.x) && _.push({
          seriesId: S,
          index: L,
          x: v.x,
          y: v.y,
          clientX: N(v.x),
          clientY: j(v.y)
        });
      });
    }), _.sort((I, S) => I.seriesId.localeCompare(S.seriesId)), c(_);
  }, [s, a]);
  const y = G.useCallback(
    (N) => {
      if (!s) return;
      const j = l.current.get(s.seriesId);
      if (!j) return;
      let _ = s.index + N;
      if (_ < 0 || _ >= j.length) {
        if (!n) return;
        _ = (_ + j.length) % j.length;
      }
      const I = j[_];
      if (!a) return;
      const { xScale: S, yScale: v } = a;
      i({
        seriesId: s.seriesId,
        index: _,
        x: I.x,
        y: I.y,
        clientX: S(I.x),
        clientY: v(I.y)
      });
    },
    [s, a, n]
  ), m = G.useCallback(
    (N) => {
      let j = Array.from(l.current.keys());
      if (o && (j = j.filter((P) => !o.isHidden(P))), j.length === 0) return;
      if (!s) {
        const P = j[0], te = l.current.get(P);
        if (!te || !a) return;
        const { xScale: V, yScale: H } = a, O = te[0];
        i({
          seriesId: P,
          index: 0,
          x: O.x,
          y: O.y,
          clientX: V(O.x),
          clientY: H(O.y)
        });
        return;
      }
      const _ = j.indexOf(s.seriesId);
      if (_ === -1) return;
      let I = _ + N;
      if (I < 0 || I >= j.length) {
        if (!n) return;
        I = (I + j.length) % j.length;
      }
      const S = j[I], v = l.current.get(S);
      if (!v || !a) return;
      const L = Math.min(s.index, v.length - 1), w = v[L], { xScale: $, yScale: D } = a;
      i({
        seriesId: S,
        index: L,
        x: w.x,
        y: w.y,
        clientX: $(w.x),
        clientY: D(w.y)
      });
    },
    [s, a, n, o]
  ), p = G.useCallback(() => {
    let N = Array.from(l.current.keys());
    if (o && (N = N.filter((L) => !o.isHidden(L))), N.length === 0) return;
    const j = s ? s.seriesId : N[0], _ = l.current.get(j);
    if (!_ || _.length === 0 || !a) return;
    const I = _[0], { xScale: S, yScale: v } = a;
    i({
      seriesId: j,
      index: 0,
      x: I.x,
      y: I.y,
      clientX: S(I.x),
      clientY: v(I.y)
    });
  }, [s, a, o]), g = G.useCallback(() => {
    let N = Array.from(l.current.keys());
    if (o && (N = N.filter((w) => !o.isHidden(w))), N.length === 0) return;
    const j = s ? s.seriesId : N[0], _ = l.current.get(j);
    if (!_ || _.length === 0 || !a) return;
    const I = _.length - 1, S = _[I], { xScale: v, yScale: L } = a;
    i({
      seriesId: j,
      index: I,
      x: S.x,
      y: S.y,
      clientX: v(S.x),
      clientY: L(S.y)
    });
  }, [s, a, o]), k = G.useCallback(
    () => y(1),
    [y]
  ), M = G.useCallback(
    () => y(-1),
    [y]
  ), C = G.useCallback(
    () => m(1),
    [m]
  ), b = G.useCallback(
    () => m(-1),
    [m]
  ), T = G.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: u,
      focusNearest: h,
      clear: x,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: k,
      focusPrevPoint: M,
      focusNextSeries: C,
      focusPrevSeries: b,
      focusFirstPoint: p,
      focusLastPoint: g
    }),
    [
      s,
      u,
      h,
      x,
      d,
      f,
      k,
      M,
      C,
      b,
      p,
      g
    ]
  );
  return /* @__PURE__ */ r.jsx(sc.Provider, { value: T, children: e });
}, Im = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: u = 1,
  smooth: c = !0,
  gradientFillId: d,
  colors: f
}) => {
  const h = Vn();
  if (!h) return null;
  const { xScale: x, yScale: y } = h, p = Wr()?.isHidden(e.id) ?? !1, g = p && l === "fade";
  if (p && l === "remove")
    return null;
  const k = vn();
  G.useEffect(() => {
    if (!k) return;
    const j = e.data.map((_) => ({ x: i(_), y: _.y }));
    return k.registerSeries(e.id, j), () => k.unregisterSeries(e.id);
  }, [k, e.id, e.data, i]);
  const M = G.useMemo(
    () => As(
      e.data,
      (j) => x(i(j)),
      (j) => y(j.y),
      { smooth: c }
    ),
    [e.data, x, y, i, c]
  ), C = G.useMemo(() => {
    if (!e.data.length) return "";
    const [j] = y.domain(), _ = Fs().x((I) => x(i(I))).y0(() => y(j)).y1((I) => y(I.y));
    return c && _.curve(ga), _(e.data) || "";
  }, [e.data, x, y, i, c]), b = f && f[t], T = e.color || b || (n === "region" ? lr(e.id, t) : Gt(t)), N = n === "region" ? xa(e.id, t) : Un(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: C,
            fill: `url(#${d})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: M,
            fill: "none",
            stroke: T,
            strokeWidth: u,
            role: "presentation"
          }
        ),
        a && e.data.map((j, _) => {
          const I = x(i(j)), S = y(j.y), v = o ? 0 : -1, L = !g && (o && _ === s || k?.focused?.seriesId === e.id && k.focused.index === _), w = () => {
            k && !g && k.setFocused({
              seriesId: e.id,
              index: _,
              x: i(j),
              y: j.y,
              clientX: I,
              clientY: S
            });
          }, $ = () => {
            k && k.focused?.seriesId === e.id && k.focused.index === _ && k.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: I,
              cy: S,
              r: L ? 5 : 3.5,
              stroke: L ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : N,
              strokeWidth: L ? 2 : 1,
              fill: L ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : T,
              className: "fdp-line-point",
              tabIndex: g ? -1 : v,
              "aria-label": `${e.label || e.id} ${i(j).toDateString()} value ${j.y}`,
              "data-series": e.id,
              "data-index": _,
              onMouseEnter: w,
              onFocus: w,
              onMouseLeave: $,
              onBlur: $
            },
            _
          );
        })
      ]
    }
  );
}, $m = ({ polite: e = !0, format: t }) => {
  const n = vn(), [a, o] = G.useState(""), s = G.useRef("");
  return G.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let u;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      u = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      u = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Mm(i.seriesId, i.x, i.y, i.index);
    if (u !== s.current) {
      s.current = u, o("");
      const c = setTimeout(() => o(u), 10);
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
function Mm(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const Zv = () => {
  const e = vn(), t = jn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), u = i + 8, c = l - 8, d = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = d ? f : `${f} • ${n.y}`, x = /\d+$/.exec(n.seriesId || ""), y = x ? parseInt(x[0], 10) - 1 : 0, m = Gt(y >= 0 ? y : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const k = a.map((N) => `${N.seriesId}: ${N.y}`), M = [h, ...k], C = M.reduce((N, j) => Math.max(N, j.length), 0), b = Math.max(90, C * 6.2 + 16), T = 16 * M.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: u, y: c - T, rx: 4, ry: 4, width: b, height: T, fill: "#212b32", opacity: 0.92 }),
        M.map((N, j) => /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - T + 6 + 16 * (j + 0.7), fill: "#fff", fontSize: 12, children: N }, j))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: u, y: c - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, Qv = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: u
}) => {
  const c = Wr(), d = !!(c && !a && !l && s === void 0), f = a || d, h = e || [], x = s !== void 0, [y, m] = G.useState(new Set(i)), p = x ? new Set(s) : y, [g, k] = G.useState(""), M = (C) => {
    if (d && c) {
      const v = c.isHidden(C);
      c.toggle(C);
      const w = h.find((D) => D.id === C)?.label || C, $ = u ? u(C, v, w) : `${w} ${v ? "shown" : "hidden"}`;
      k($);
      return;
    }
    if (!f) return;
    const b = new Set(p), T = b.has(C);
    T ? b.delete(C) : b.add(C), x || m(b);
    const N = h.filter((v) => !b.has(v.id)).map((v) => v.id), j = Array.from(b);
    l?.(N, j);
    const I = h.find((v) => v.id === C)?.label || C, S = u ? u(C, T, I) : `${I} ${T ? "shown" : "hidden"}`;
    k(S);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((C, b) => {
      const T = C.palette || t, N = C.color || (T === "region" ? lr(C.id, b) : T === "severity" ? gm(C.id, b) : T === "org-level" ? wm(C.id, b) : Gt(b));
      let j = C.stroke || (T === "region" ? xa(C.id, b) : T === "severity" ? bm(C.id, b) : T === "org-level" ? Sm(C.id, b) : Un(b));
      if (o && j) {
        const S = j.trim().toLowerCase();
        (S === "#fff" || S === "#ffffff" || S === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(S)) && (j = "#212b32");
      }
      const _ = d && c ? c.isHidden(C.id) : p.has(C.id), I = f ? {
        "aria-pressed": !_,
        "aria-label": `${C.label} (${_ ? "show" : "hide"})`,
        onClick: () => M(C.id)
      } : { "aria-label": C.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${_ ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: N,
              backgroundImage: C.patternDataUrl ? `url(${C.patternDataUrl})` : void 0,
              backgroundSize: C.patternDataUrl ? "auto" : void 0,
              borderColor: j
            },
            ...I
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: C.label })
      ] }, C.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: g })
  ] });
}, ey = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: u,
  gradientFill: c = !0,
  colors: d
}) => {
  const f = Vn();
  if (!f) return null;
  const { xScale: h, yScale: x } = f, m = Wr()?.isHidden(e.id) ?? !1, p = m && s === "fade";
  if (m && s === "remove") return null;
  const g = vn();
  G.useEffect(() => {
    if (!g) return;
    const N = e.data.map((j) => ({ x: a(j), y: j.y }));
    return g.registerSeries(e.id, N), () => g.unregisterSeries(e.id);
  }, [g, e.id, e.data, a]);
  const k = d && d[t], M = e.color || k || (n === "region" ? lr(e.id, t) : Gt(t)), C = G.useMemo(() => u && u.length === e.data.length ? As(
    e.data,
    (N) => h(a(N)),
    (N) => {
      const j = e.data.indexOf(N);
      return x(u[j].y1);
    },
    { smooth: l }
  ) : As(
    e.data,
    (N) => h(a(N)),
    (N) => x(N.y),
    { smooth: l }
  ), [e.data, u, h, x, a, l]), b = G.useMemo(() => {
    if (u && u.length === e.data.length) {
      const S = Fs().x((v) => h(a(v))).y0((v, L) => x(u[L].y0)).y1((v, L) => x(u[L].y1));
      return l && S.curve(ga), S(e.data) || "";
    }
    const [N, j] = x.domain();
    let _ = i;
    _ < N ? _ = N : _ > j && (_ = j);
    const I = Fs().x((S) => h(a(S))).y0(() => x(_)).y1((S) => x(S.y));
    return l && I.curve(ga), I(e.data) || "";
  }, [e.data, u, h, x, a, i, l]), T = G.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: T, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: M, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: M, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: b,
            fill: c ? `url(#${T})` : M,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: C, fill: "none", stroke: M, strokeWidth: 1 })
      ]
    }
  );
}, ty = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: u,
  adaptive: c = !1,
  adaptiveGroupOccupancy: d = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: x,
  stacked: y,
  gapRatio: m = 0.15,
  minBarWidth: p,
  gradientFill: g = !0,
  gradientStrokeMatch: k = !0,
  opacity: M = 1,
  fadedOpacity: C = 0.25,
  flatFillOpacity: b = 1,
  colors: T
}) => {
  const N = Math.max(0, m), j = Vn(), _ = jn();
  if (!j || !_) return null;
  const { xScale: I, yScale: S } = j, L = Wr()?.isHidden(e.id) ?? !1, w = L && f === "fade";
  if (L && f === "remove") return null;
  const $ = vn();
  G.useEffect(() => {
    if (!$) return;
    const Z = e.data.map((ne) => ({ x: o(ne), y: ne.y }));
    return $.registerSeries(e.id, Z), () => $.unregisterSeries(e.id);
  }, [$, e.id, e.data, o]);
  const D = typeof I.bandwidth == "function", P = D ? I.bandwidth() : void 0, te = G.useMemo(() => {
    if (P != null) return P;
    const Z = x && x.length ? x : [e], ne = [];
    Z.forEach((F) => {
      F.data.forEach((R) => {
        const Y = I(o(R));
        Number.isFinite(Y) && ne.push(Y);
      });
    });
    const de = ne.sort((F, R) => F - R);
    if (de.length <= 1) return 40;
    const z = [];
    for (let F = 1; F < de.length; F++)
      z.push(de[F] - de[F - 1]);
    return z.sort((F, R) => F - R), (z[Math.floor(z.length / 2)] || 40) * i;
  }, [e.data, x, I, o, i, P]), { basePerBar: V } = G.useMemo(() => {
    if (D) {
      const de = te, z = Math.max(
        1,
        (de - l * (n - 1)) / n
      ), fe = e.barWidth ?? u;
      let F = fe ? Math.min(fe, de) : z;
      if (c) {
        const R = de * Math.min(1, Math.max(0.05, d)), Y = Math.max(
          1,
          (R - l * (n - 1)) / n
        );
        F = fe ? Math.min(F, Y) : Y;
      }
      return { basePerBar: F };
    }
    const Z = e.barWidth ?? u, ne = Math.max(
      1,
      (te - l * (n - 1)) / n
    );
    if (c) {
      const de = x && x.length ? x : [e], z = [];
      de.forEach(
        (ue) => ue.data.forEach((pe) => {
          const ie = I(o(pe));
          Number.isFinite(ie) && z.push(ie);
        })
      ), z.sort((ue, pe) => ue - pe);
      const fe = [];
      for (let ue = 1; ue < z.length; ue++)
        fe.push(z[ue] - z[ue - 1]);
      fe.sort((ue, pe) => ue - pe);
      const R = (fe[Math.floor(fe.length / 2)] || te) * Math.min(1, Math.max(0.05, d)), Y = Math.max(
        1,
        (R - l * (n - 1)) / n
      );
      return { basePerBar: Z ? Math.min(Z, Y) : Y };
    }
    return Z ? { basePerBar: Math.min(Z, ne) } : { basePerBar: ne };
  }, [
    D,
    te,
    l,
    n,
    u,
    e.barWidth,
    c,
    d,
    x,
    I,
    o
  ]), H = G.useMemo(() => {
    if (D) return [];
    const Z = [];
    return (x && x.length ? x : [e]).forEach(
      (de) => de.data.forEach((z) => {
        const fe = I(o(z));
        Number.isFinite(fe) && Z.push(fe);
      })
    ), Z.sort((de, z) => de - z), Array.from(new Set(Z));
  }, [D, x, e, I, o]), O = G.useMemo(() => {
    if (D)
      return [];
    if (!H.length) return [];
    if (H.length === 1)
      return [
        { center: H[0], left: 0, right: _.innerWidth }
      ];
    const Z = [];
    for (let ne = 0; ne < H.length; ne++) {
      const de = H[ne], z = ne === 0 ? 0 : (H[ne - 1] + de) / 2, fe = ne === H.length - 1 ? _.innerWidth : (de + H[ne + 1]) / 2;
      Z.push({
        center: de,
        left: Math.max(0, z),
        right: Math.min(_.innerWidth, fe)
      });
    }
    return Z;
  }, [D, H, _.innerWidth]), U = G.useMemo(() => {
    if (D || !O.length)
      return;
    const Z = Math.min(1, Math.max(0.05, i)), ne = O.map((R) => Math.max(2, R.right - R.left)), de = ne.map(
      (R) => Math.max(2, Math.min(R - 1, R * Z))
    );
    let z = Math.min(...de);
    if (p)
      if (n <= 1) {
        const R = Math.min(...ne.map((Y) => Y - 1));
        R >= p && z < p && (z = Math.min(R, p));
      } else {
        const R = Math.min(...ne.map((se) => se - 1)), Y = p * n + (n - 1) * (p * N);
        Y <= R && z < Y && (z = Y);
      }
    if (n <= 1)
      return p && z < p && ne.every((Y) => Y >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: z, barWidth: z };
    let fe = z / (n + (n - 1) * N);
    return fe < 1 && (fe = 1), p && fe < p && p * n + (n - 1) * (p * N) <= z && (fe = p), { groupWidth: fe * n + (n - 1) * (fe * N), barWidth: fe };
  }, [
    D,
    O,
    i,
    n,
    N,
    p
  ]), re = T && T[t] ? T[t] : void 0, W = e.color || re || (a === "region" ? lr(e.id, t) : Gt(t)), oe = a === "region" ? xa(e.id, t) : Un(t), ke = k && (e.color || re) ? W : oe, le = Number.isFinite(S(0)) ? S(0) : S.range()[0], ce = G.useId();
  return y && y.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: w ? C : M,
      "aria-hidden": w ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: ce,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: W, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: W,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: W,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((Z, ne) => {
          const de = o(Z), z = I(D ? Z.x : de);
          let fe, F;
          if (D)
            fe = te, F = z;
          else {
            const X = O.find(
              (K) => Math.abs(K.center - z) < 0.5
            );
            if (!X || !U)
              fe = V, F = z - V / 2;
            else {
              const { groupWidth: K } = U;
              fe = K;
              let A = z - K / 2;
              A < X.left && (A = X.left), A + K > X.right && (A = Math.max(X.left, X.right - K)), F = A;
            }
          }
          const R = y[ne], Y = S(R.y0), se = S(R.y1), ue = Math.min(Y, se), pe = Math.abs(se - Y) || 1;
          if (!D && p && fe < p) {
            const X = O.find(
              (K) => Math.abs(K.center - z) < 0.5
            );
            if (X) {
              const K = Math.max(2, X.right - X.left - 1), A = Math.min(K, p);
              A > fe && (fe = A, F = Math.max(
                X.left,
                Math.min(X.right - fe, z - fe / 2)
              ));
            }
          }
          const ie = !w && $?.focused?.seriesId === e.id && $.focused.index === ne, B = () => {
            !$ || w || $.setFocused({
              seriesId: e.id,
              index: ne,
              x: de,
              y: R.y1 - R.y0,
              clientX: F + fe / 2,
              clientY: ue
            });
          }, E = () => {
            $?.focused?.seriesId === e.id && $.focused.index === ne && $.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: F,
              y: ue,
              width: fe,
              height: pe,
              fill: g ? `url(#${ce})` : W,
              ...g ? {} : { fillOpacity: b },
              stroke: ie ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : g && k ? W : void 0,
              strokeWidth: ie ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: w || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${R.y1 - R.y0}`,
              onMouseEnter: B,
              onFocus: B,
              onMouseLeave: E,
              onBlur: E
            },
            ne
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: w ? C : M,
      "aria-hidden": w ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: ce,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: W, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: W,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: W,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((Z, ne) => {
            const z = T && T[ne] || (a === "region" ? lr(String(Z.x), ne) : Gt(ne)), fe = `${ce}-${ne}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: fe,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: z, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: z, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: z, stopOpacity: 0.06 })
                ]
              },
              fe
            );
          })
        ] }),
        e.data.map((Z, ne) => {
          const de = o(Z), z = I(D ? Z.x : de);
          let fe, F;
          if (D) {
            const Q = te;
            if (n <= 1)
              F = Q, fe = z;
            else {
              F = Math.max(
                1,
                Q / (n + (n - 1) * N)
              );
              const ee = F * N, J = F * n + ee * (n - 1);
              fe = z + (Q - J) / 2 + t * (F + ee);
            }
          } else {
            const Q = O.find((ee) => ee.center === z);
            if (!Q || !U)
              F = V, fe = z - V / 2, p && F < p && (F = p, fe = z - F / 2);
            else {
              const { barWidth: ee } = U;
              F = ee;
              const J = n > 1 ? ee * N : 0, ae = F * n + J * (n - 1);
              let me = z - ae / 2;
              me < Q.left && (me = Q.left), me + ae > Q.right && (me = Math.max(Q.left, Q.right - ae)), fe = me + t * (F + J);
            }
            if (p && F < p) {
              const ee = O.find(
                (J) => Math.abs(J.center - z) < 0.5
              );
              if (ee) {
                const J = Math.max(2, ee.right - ee.left - 1), ae = Math.min(J, p);
                if (ae > F)
                  if (n <= 1)
                    F = ae, fe = Math.max(
                      ee.left,
                      Math.min(ee.right - F, z - F / 2)
                    );
                  else {
                    const me = ae * N, ve = ae * n + me * (n - 1);
                    if (ve <= ee.right - ee.left - 1) {
                      F = ae;
                      const ye = ve;
                      let Ce = z - ye / 2;
                      Ce < ee.left && (Ce = ee.left), Ce + ye > ee.right && (Ce = Math.max(
                        ee.left,
                        ee.right - ye
                      )), fe = Ce + t * (F + me);
                    }
                  }
              }
            }
          }
          const R = fe + F / 2, Y = S(Z.y), se = Math.min(le, Y), ue = Math.abs(le - Y), pe = !w && $?.focused?.seriesId === e.id && $.focused.index === ne, ie = () => {
            !$ || w || $.setFocused({
              seriesId: e.id,
              index: ne,
              x: de,
              y: Z.y,
              clientX: R,
              clientY: Y
            });
          }, B = () => {
            $?.focused?.seriesId === e.id && $.focused.index === ne && $.clear();
          }, E = h === "category" && T ? T[ne] : void 0, X = h === "category" ? E || (a === "region" ? lr(String(Z.x), ne) : Gt(ne)) : W, K = h === "category" ? `${ce}-${ne}` : ce, A = g && k ? X : h === "category" ? a === "region" ? xa(String(Z.x), ne) : Un(ne) : ke, q = pe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : A || X;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: fe,
              y: se,
              width: F,
              height: ue || 1,
              fill: g ? `url(#${K})` : X,
              ...g ? {} : { fillOpacity: b },
              stroke: q,
              strokeWidth: pe ? 2 : 1,
              className: "fdp-bar",
              tabIndex: w || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${Z.y}`,
              onMouseEnter: ie,
              onFocus: ie,
              onMouseLeave: B,
              onBlur: B
            },
            ne
          );
        })
      ]
    }
  );
}, ny = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = jn(), u = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, d = G.useMemo(() => e.flatMap((p) => p.data), [e]), f = G.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((g) => p.add(g.x)), Array.from(p);
  }, [d]), h = G.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), x = G.useMemo(
    () => dl().domain(f).range([0, u]).paddingInner(a).paddingOuter(o),
    [f, u, a, o]
  ), y = G.useMemo(
    () => la().domain([0, h]).nice().range([c, 0]),
    [h, c]
  ), m = G.useMemo(
    () => ({
      xScale: x,
      yScale: y,
      getXTicks: () => f,
      getYTicks: (p = i) => y.ticks(p)
    }),
    [x, y, f, i]
  );
  return /* @__PURE__ */ r.jsx(Co.Provider, { value: m, children: s });
}, ry = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const u = G.useId(), c = s || u, d = t ? `${c}-desc` : void 0, f = n ? `${c}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: c,
      className: ha("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": ha(d, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: d, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(bn, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(bn, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, ay = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = G.useRef(null);
  return G.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
      if (l.length === 0) return;
      const u = [];
      l.forEach((c) => {
        c.classList.contains("fdp-chart--enhanced") || (c.classList.add("fdp-chart--enhanced"), u.push(c));
      }), u.length && t && t(u);
    };
    if (n > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: o, children: a });
}, Pm = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: u,
  loading: c = !1,
  error: d,
  valueFormatter: f,
  className: h,
  style: x,
  id: y,
  announceDelta: m = !0,
  visual: p
}) => {
  const g = G.useId(), k = y || g, M = `${k}-label`, C = `${k}-value`, b = `${k}-delta`, T = typeof t == "number" && !Number.isNaN(t), N = c ? "—" : d ? "" : T ? f ? f(t) : t.toLocaleString() : t;
  let j, _ = "", I = "";
  if (a && !c && !d) {
    j = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const S = Math.abs(a.value), v = j === "up" ? `+${S}` : j === "down" ? `-${S}` : "0", L = a.isPercent ? "%" : "";
    if (_ = `${v}${L}`, a.ariaLabel)
      I = a.ariaLabel;
    else {
      const w = a.invert ? j === "down" : j === "up";
      I = `${j === "neutral" ? "no change" : j === "up" ? "up" : "down"} ${S}${L}${j === "neutral" ? "" : w ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: ha(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        c && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        h
      ),
      style: x,
      role: "group",
      "aria-labelledby": M,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: M, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: C, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: N }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: b,
              "aria-label": I,
              className: ha(
                "fdp-metric-card__delta",
                j && `fdp-metric-card__delta--${j}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: _ }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          u && u.length > 0 && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        p && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: p }),
        m && a && !a.ariaLabel && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: I })
      ] })
    }
  );
};
let Bs = null;
try {
  Bs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Je = (e, t) => {
  if (!Bs) return t;
  const n = e.split(".");
  let a = Bs;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Ja = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Je("gradient.stop.start-opacity", "0.12"),
  mid: Je("gradient.stop.mid-opacity", "0.03"),
  end: Je("gradient.stop.end-opacity", "0"),
  triStart: Je(
    "gradient.stop.triangle-start-opacity",
    Je("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Je(
    "gradient.stop.triangle-mid-opacity",
    Je("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Je(
    "gradient.stop.triangle-end-opacity",
    Je("gradient.stop.end-opacity", "0")
  )
});
var wt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(wt || {}), Ee = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ee || {}), Fe = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Fe || {}), en = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(en || {});
const No = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
No.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const Lm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Fm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, oc = No.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: Lm[t],
    category: Fm[t],
    participatesInRanking: !0
  }, e),
  {}
);
No.map(
  (e) => oc[e]
);
var kt = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(kt || {}), yt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(yt || {}), ct = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(ct || {}), Ft = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Ft || {}), Qr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(Qr || {}), ic = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(ic || {}), er = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(er || {}), lc = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(lc || {}), Ir = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(Ir || {});
const cr = {
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
function Za(e) {
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
function Qa(e) {
  switch (e) {
    case Fe.Improvement:
      return "Improvement signal";
    case Fe.Concern:
      return "Concern signal";
    case Fe.Neither:
      return "Common cause variation";
    case Fe.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function cc(e) {
  switch (e) {
    case ct.Pass:
      return "Target met";
    case ct.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Am(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Ot = {
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
function uc(e) {
  return e ? Ot[e]?.token ?? Ot.neither.token : Ot.neither.token;
}
function Em(e) {
  return e ? Ot[e]?.hex ?? Ot.neither.hex : Ot.neither.hex;
}
var En = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(En || {});
const Rm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Bm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var ot = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ot || {}), Me = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Me || {}), Nt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Nt || {}), Ne = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ne || {});
const Hm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, es = {
  special_cause_deteriorating: {
    hex: Ot.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Ot.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Ot.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Ot.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(es).forEach((e) => {
  e.text || (e.text = Hm(e.hex));
});
const dc = (e) => es[e], jo = (e) => es[e].judgement || "none", Fi = {
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
function Om(e, t) {
  let n;
  return e === "common_cause" ? n = Fi.common : n = Fi.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var $t = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))($t || {}), Oe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Oe || {}), Be = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Be || {}), rt = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(rt || {}), Rn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(Rn || {}), zt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(zt || {}), ur = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(ur || {}), rr = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(rr || {}), xt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(xt || {}), tn = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(tn || {});
const Cn = {
  [rt.SinglePoint]: 1,
  [rt.TwoSigma]: 2,
  [rt.Shift]: 3,
  [rt.Trend]: 4
}, Ai = 3.267, Um = 2.66, Ei = 0.2777;
function $e(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function ar(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function Ri(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!(t[o] || !$e(s))) {
      if (a !== null) {
        const i = e[a];
        $e(i) && (n[o] = Math.abs(s - i));
      }
      a = o;
    }
  }
  return n;
}
function Bi(e, t) {
  const n = e.filter($e);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = ar(a), i = Ai * s;
    a = a.filter((l) => l <= i);
  }
  const o = ar(a);
  return { mrMean: o, mrUcl: Ai * o };
}
function Hi(e, t) {
  if (!$e(e) || !$e(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Um * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function Wm(e, t, n, a) {
  if (e === $t.T) {
    const f = t.map((j) => $e(j) && j > 0 ? Math.pow(j, Ei) : null), h = Ri(f, n), x = Bi(h, a), y = f.filter((j, _) => !n[_] && $e(j)), m = y.length ? ar(y) : NaN, p = Hi(m, x.mrMean), g = (j) => $e(j) && j > 0 ? Math.pow(j, 1 / Ei) : null, k = $e(p.upperProcessLimit) ? g(p.upperProcessLimit) : null, M = $e(p.lowerProcessLimit) && p.lowerProcessLimit > 0 ? g(p.lowerProcessLimit) : null, C = $e(p.upperTwoSigma) ? g(p.upperTwoSigma) : null, b = $e(p.lowerTwoSigma) && p.lowerTwoSigma > 0 ? g(p.lowerTwoSigma) : null, T = $e(p.upperOneSigma) ? g(p.upperOneSigma) : null, N = $e(p.lowerOneSigma) && p.lowerOneSigma > 0 ? g(p.lowerOneSigma) : null;
    return {
      mean: $e(m) && m > 0 ? g(m) : null,
      mr: h,
      mrMean: x.mrMean,
      mrUcl: x.mrUcl,
      upperProcessLimit: k,
      lowerProcessLimit: M,
      upperTwoSigma: C,
      lowerTwoSigma: b,
      upperOneSigma: T,
      lowerOneSigma: N
    };
  }
  if (e === $t.G) {
    const f = t.filter((S, v) => !n[v] && $e(S)), h = f.length ? ar(f) : NaN, x = $e(h) ? 1 / (h + 1) : NaN, y = (S) => {
      if (!$e(x) || x <= 0 || x >= 1) return NaN;
      const v = Math.ceil(Math.log(1 - S) / Math.log(1 - x)) - 1;
      return Math.max(0, v);
    }, m = 135e-5, p = 1 - 135e-5, g = 0.02275, k = 1 - 0.02275, M = 0.158655, C = 1 - 0.158655, b = y(p), T = y(m), N = y(k), j = y(g), _ = y(C), I = y(M);
    return {
      mean: $e(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: $e(b) ? b : null,
      lowerProcessLimit: $e(T) ? T : null,
      upperTwoSigma: $e(N) ? N : null,
      lowerTwoSigma: $e(j) ? j : null,
      upperOneSigma: $e(_) ? _ : null,
      lowerOneSigma: $e(I) ? I : null
    };
  }
  if (e !== $t.XmR)
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
  const o = Ri(t, n), s = o.filter($e), i = s.length ? ar(s) : NaN, l = $e(i) ? 3.267 * i : NaN;
  let u = NaN;
  {
    const f = t.reduce((h, x, y) => {
      if (n[y] || !$e(x)) return h;
      if (!a)
        return h.push(x), h;
      const m = o[y];
      return (m === null || !$e(l) || $e(m) && m <= l) && h.push(x), h;
    }, []);
    u = f.length ? ar(f) : NaN;
  }
  const c = Bi(o, a), d = Hi(u, c.mrMean);
  return {
    mean: u,
    mr: o,
    mrMean: c.mrMean,
    mrUcl: c.mrUcl,
    ...d
  };
}
function zm(e, t) {
  const n = e.map((u, c) => c).filter((u) => !e[u].ghost && $e(e[u].value)), a = (u) => e[u], o = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const u of n) {
    const c = a(u);
    if (!$e(c.mean) || !$e(c.value) ? (i = [], l = []) : c.value > c.mean ? (i.push(u), l = []) : c.value < c.mean ? (l.push(u), i = []) : (i = [], l = []), i.length >= o)
      for (const d of i) a(d).shiftUp = !0;
    if (l.length >= o)
      for (const d of l) a(d).shiftDown = !0;
  }
  for (let u = 0; u <= n.length - 3; u++) {
    const d = n.slice(u, u + 3).map(a);
    if (!d.every((C) => $e(C.value) && $e(C.mean)))
      continue;
    const f = d[0].mean, h = d.every((C) => C.value > f), x = d.every((C) => C.value < f);
    if (!h && !x)
      continue;
    const y = d[0].upperTwoSigma ?? 1 / 0, m = d[0].lowerTwoSigma ?? -1 / 0, p = d[0].upperProcessLimit ?? 1 / 0, g = d[0].lowerProcessLimit ?? -1 / 0, k = d.filter((C) => t.twoSigmaIncludeAboveThree ? C.value > y : C.value > y && C.value <= p), M = d.filter((C) => t.twoSigmaIncludeAboveThree ? C.value < m : C.value < m && C.value >= g);
    h && k.length >= 2 && k.forEach((C) => C.twoSigmaUp = !0), x && M.length >= 2 && M.forEach((C) => C.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let u = 0; u <= n.length - 5; u++) {
      const d = n.slice(u, u + 5).map(a);
      if (!d.every((k) => $e(k.value) && $e(k.mean)))
        continue;
      const f = d[0].mean, h = d.every((k) => k.value > f), x = d.every((k) => k.value < f);
      if (!h && !x)
        continue;
      const y = d[0].upperOneSigma ?? 1 / 0, m = d[0].lowerOneSigma ?? -1 / 0, p = d.filter((k) => k.value > y), g = d.filter((k) => k.value < m);
      h && p.length >= 4 && p.forEach((k) => k.fourOfFiveUp = !0), x && g.length >= 4 && g.forEach((k) => k.fourOfFiveDown = !0);
    }
  for (let u = 0; u <= n.length - s; u++) {
    const c = n.slice(u, u + s), d = c.map(a);
    if (!d.every((x) => $e(x.value)))
      continue;
    let f = !0, h = !0;
    for (let x = 1; x < d.length && (d[x].value > d[x - 1].value || (f = !1), d[x].value < d[x - 1].value || (h = !1), !(!f && !h)); x++)
      ;
    f && c.forEach((x) => a(x).trendUp = !0), h && c.forEach((x) => a(x).trendDown = !0);
  }
}
function fc(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: rt.SinglePoint,
    rank: Cn[rt.SinglePoint]
  }), e.singlePointDown && n.push({
    id: rt.SinglePoint,
    rank: Cn[rt.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: rt.TwoSigma,
    rank: Cn[rt.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: rt.TwoSigma,
    rank: Cn[rt.TwoSigma]
  }), e.shiftUp && t.push({ id: rt.Shift, rank: Cn[rt.Shift] }), e.shiftDown && n.push({ id: rt.Shift, rank: Cn[rt.Shift] }), e.trendUp && t.push({ id: rt.Trend, rank: Cn[rt.Trend] }), e.trendDown && n.push({ id: rt.Trend, rank: Cn[rt.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), o = n.reduce((i, l) => Math.max(i, l.rank), 0), s = a > o ? Rn.Upwards : o > a ? Rn.Downwards : Rn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function Oi(e, t) {
  const n = t === Oe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Oe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Oe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Oe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function Ui(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: u, upMax: c, dnMax: d, primeDirection: f } = fc(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, x = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Vm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === Oe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Be.ImprovementHigh : e.specialCauseConcernValue !== null ? Be.ConcernLow : Be.CommonCause : t === Oe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Be.ImprovementLow : e.specialCauseConcernValue !== null ? Be.ConcernHigh : Be.CommonCause : e.variationIcon = Be.CommonCause;
  const y = e.specialCauseImprovementValue !== null ? zt.Up : e.specialCauseConcernValue !== null ? zt.Down : void 0, m = y === zt.Up ? c : y === zt.Down ? d : Math.max(c, d);
  e.primeRank = m || void 0;
  const p = y === zt.Up ? l.find((g) => g.rank === m) : y === zt.Down ? u.find((g) => g.rank === m) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: x };
}
function Vm(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? Rn.Same,
    conflictStrategy: l,
    ruleHierarchy: u
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const d = !!t.trendUp, f = !!t.trendDown;
    if (n === Oe.Up) {
      if (d && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!d && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Oe.Down) {
      if (f && !d) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!f && d) {
        t.specialCauseImprovementValue = null;
        return;
      }
    }
  }
  const c = o ? rr.PreferImprovement : l ?? rr.SqlPrimeThenRule;
  if (c === rr.PreferImprovement) {
    n === Oe.Up ? t.specialCauseConcernValue = null : n === Oe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (c === rr.RuleHierarchy) {
    const d = u ?? [rt.Trend, rt.Shift, rt.TwoSigma, rt.SinglePoint], { up: f, dn: h } = fc(t);
    for (const x of d) {
      const y = f.some((p) => p.id === x), m = h.some((p) => p.id === x);
      if (y && !m) {
        n === Oe.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !y) {
        n === Oe.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (y && m) {
        (n === Oe.Up || n === Oe.Down) && (a === ur.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === Rn.Upwards ? n === Oe.Up ? t.specialCauseConcernValue = null : n === Oe.Down && (t.specialCauseImprovementValue = null) : i === Rn.Downwards ? n === Oe.Up ? t.specialCauseImprovementValue = null : n === Oe.Down && (t.specialCauseConcernValue = null) : a === ur.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var Hs = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Hs || {});
function Gm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Ym(e) {
  const t = Gm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function Wi(e) {
  const t = [], n = (i, l, u) => ({
    segStart: i,
    segSide: l,
    minV: u,
    maxV: u,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), a = (i, l, u, c, d) => ({
    minV: Math.min(u, i),
    maxV: Math.max(c, i),
    maxAbsDelta: Math.max(d, l)
  }), o = (i, l, u, c, d, f, h, x) => {
    i.push({
      trendDirection: x,
      start: l,
      end: u,
      side: c,
      minValue: d,
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
    let u = s, c = s;
    for (; c < e.length; c++) {
      const g = e[c];
      if (!g || g.value == null || g.ghost || !(l === "Up" ? g.trendUp : g.trendDown)) break;
    }
    const d = c - 1, f = [];
    let h, x, y = 1 / 0, m = -1 / 0, p = 0;
    for (let g = u; g <= d; g++) {
      const k = e[g];
      if (k.value == null) continue;
      const M = k.value - (k.mean ?? 0), C = Ym(M);
      if (!C) {
        h !== void 0 && (o(f, h, g - 1, x, y, m, p, l), h = void 0, x = void 0, y = 1 / 0, m = -1 / 0, p = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: x, minV: y, maxV: m, maxAbsDelta: p } = (() => {
          const b = n(g, C, k.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(M)
          };
        })());
      else if (C !== x)
        o(f, h, g - 1, x, y, m, p, l), { segStart: h, segSide: x, minV: y, maxV: m, maxAbsDelta: p } = (() => {
          const b = n(g, C, k.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(M)
          };
        })();
      else {
        const b = a(k.value, Math.abs(M), y, m, p);
        y = b.minV, m = b.maxV, p = b.maxAbsDelta;
      }
    }
    h !== void 0 && o(f, h, d, x, y, m, p, l), t.push({ trendDirection: l, start: u, end: d, segments: f }), s = d + 1;
  }
  return t;
}
function qm(e) {
  if (e === Oe.Up) return "Above";
  if (e === Oe.Down) return "Below";
}
function Xm(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function zi(e, t) {
  const n = t.strategy ?? xt.CrossingAfterFavourable, a = qm(t.metricImprovement), o = Xm(a), s = [];
  for (const i of e) {
    if (!a) {
      if (n === xt.ExtremeFavourable || n === xt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let u = l[0];
        for (const c of l)
          c.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean && (u = c);
        s.push(u);
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
      let u;
      for (let c = 0; c < l.length; c++) {
        const d = l[c];
        if (d.side === a && c > 0 && l[c - 1].side !== a) {
          u = d;
          break;
        }
      }
      if (!u) {
        const c = l.filter((d) => d.side === a);
        c.length > 0 && (u = c.reduce(
          (d, f) => f.end - f.start > d.end - d.start ? f : d,
          c[0]
        ));
      }
      u && s.push(u);
      continue;
    }
    if (n === xt.CrossingAfterUnfavourable) {
      const l = i.segments;
      let u;
      for (let c = 0; c < l.length; c++) {
        const d = l[c];
        if (d.side === o && c > 0 && l[c - 1].side !== o) {
          u = d;
          break;
        }
      }
      if (!u) {
        const c = l.filter((d) => d.side === o);
        c.length > 0 && (u = c.reduce(
          (d, f) => f.end - f.start > d.end - d.start ? f : d,
          c[0]
        ));
      }
      u && s.push(u);
      continue;
    }
    if (n === xt.ExtremeFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c
      );
      s.push(u);
      continue;
    }
    if (n === xt.ExtremeUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c);
      s.push(u);
      continue;
    }
    if (n === xt.FirstFavourable) {
      const l = i.segments.find((u) => u.side === a);
      l && s.push(l);
      continue;
    }
    if (n === xt.FirstUnfavourable) {
      const l = i.segments.find((u) => u.side === o);
      l && s.push(l);
      continue;
    }
    if (n === xt.LongestFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.end - d.start > c.end - c.start ? d : c
      );
      s.push(u);
      continue;
    }
    if (n === xt.LongestUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.end - d.start > c.end - c.start ? d : c);
      s.push(u);
      continue;
    }
    if (n === xt.LastFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === xt.LastUnfavourable) {
      const l = i.segments.filter((u) => u.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var mt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(mt || {}), hr = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(hr || {});
function Km(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function To(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = Km(s);
    if (i && l) return "Improvement";
    switch (s.variationIcon) {
      case Be.ImprovementHigh:
      case Be.ImprovementLow:
        return "Improvement";
      case Be.ConcernHigh:
      case Be.ConcernLow:
        return "Concern";
      case Be.NeitherHigh:
      case Be.NeitherLow: {
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
function Jm(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = To(e, {
    metricImprovement: t,
    trendVisualMode: hr.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Oe.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", u = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const x = o[f];
    (x === mt.Common || x === mt.NoJudgement) && (o[f] = h);
  }, c = (f) => {
    if (f == null) return null;
    const h = e.reduce((y, m) => (m.partitionId === f && typeof m.value == "number" && !m.ghost && y.push(m.value), y), []);
    return h.length ? h.reduce((y, m) => y + m, 0) / h.length : null;
  }, d = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, x) => {
    if (x === 0) return f;
    const y = e[x - 1];
    return y && h && h.partitionId !== y.partitionId && f.push(x), f;
  }, []);
  for (const f of d) {
    const h = e[f - 1], x = e[f];
    if (!h || !x)
      continue;
    let y = f - 1;
    for (; y - 1 >= 0 && e[y - 1] && e[y - 1].partitionId === h.partitionId; )
      y--;
    let m = f;
    for (; m + 1 < e.length && e[m + 1] && e[m + 1].partitionId === x.partitionId; )
      m++;
    let p = null;
    for (let T = f - 1; T >= 0; T--) {
      const N = e[T];
      if (N.partitionId !== h.partitionId) break;
      if (typeof N.mean == "number") {
        p = N.mean;
        break;
      }
    }
    let g = null;
    for (let T = f; T < e.length; T++) {
      const N = e[T];
      if (N.partitionId !== x.partitionId) break;
      if (typeof N.mean == "number") {
        g = N.mean;
        break;
      }
    }
    if (p == null && (p = c(h.partitionId ?? null)), g == null && (g = c(x.partitionId ?? null)), p == null || g == null)
      continue;
    const k = g - p, M = t === Oe.Up ? k > 0 : k < 0, C = M ? mt.Improvement : mt.Concern, b = l === "Same" ? C : M ? mt.Concern : mt.Improvement;
    for (let T = 1; T <= s; T++) {
      const N = f - T;
      if (N < y) break;
      u(N, b);
    }
    for (let T = 0; T < i; T++) {
      const N = f + T;
      if (N > m) break;
      u(N, C);
    }
  }
  return o;
}
function pc(e) {
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
function Do(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, o = pc(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: ur.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: rr.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: tn.Off,
    trendSegmentationStrategy: xt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? tn.Always : o?.trendFavourableSegmentation === !1 ? tn.Off : s.trendSegmentationMode), l = a.map((m, p) => ({
    rowId: p + 1,
    x: m.x,
    value: $e(m.value) ? m.value : null,
    ghost: !!m.ghost,
    baseline: !!m.baseline,
    target: $e(m.target) ? m.target : null
  })), u = [];
  let c = [];
  for (const m of l)
    m.baseline && c.length && (u.push(c), c = []), c.push(m);
  c.length && u.push(c);
  const d = [], f = (s.trendFavourableSegmentation || i !== tn.Off) && !s.preferImprovementWhenConflict, h = l.filter((m) => !m.ghost && $e(m.value)).length, x = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let y = 0;
  for (const m of u) {
    y++;
    const p = m.map((b) => b.value), g = m.map((b) => b.ghost), k = Wm(
      t,
      p,
      g,
      !!s.excludeMovingRangeOutliers
    ), M = m.map((b, T) => {
      const N = !b.ghost && $e(b.value) ? p.slice(0, T + 1).filter((_, I) => !g[I] && $e(_)).length : 0, j = x ? !0 : N >= s.minimumPoints;
      return {
        rowId: b.rowId,
        x: b.x,
        value: $e(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: y,
        pointRank: N,
        mean: (j || x) && $e(k.mean) ? k.mean : null,
        upperProcessLimit: j || x ? k.upperProcessLimit : null,
        lowerProcessLimit: j || x ? k.lowerProcessLimit : null,
        upperTwoSigma: j || x ? k.upperTwoSigma : null,
        lowerTwoSigma: j || x ? k.lowerTwoSigma : null,
        upperOneSigma: j || x ? k.upperOneSigma : null,
        lowerOneSigma: j || x ? k.lowerOneSigma : null,
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
        variationIcon: Be.CommonCause
      };
    });
    for (const b of M)
      b.ghost || !$e(b.value) || b.mean === null || ($e(b.upperProcessLimit) && b.value > b.upperProcessLimit && (b.singlePointUp = !0), $e(b.lowerProcessLimit) && b.value < b.lowerProcessLimit && (b.singlePointDown = !0));
    zm(M, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((b) => {
      const T = b.some(
        (S) => (S.singlePointUp || S.twoSigmaUp || S.shiftUp || S.trendUp) && (S.singlePointDown || S.twoSigmaDown || S.shiftDown || S.trendDown)
      );
      if (i === tn.Off || i === tn.AutoWhenConflict && !T)
        return;
      const N = Wi(b), j = zi(N, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), _ = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
      for (const S of j)
        for (let v = S.start; v <= S.end; v++)
          S.trendDirection === Hs.Up ? _.add(v) : I.add(v);
      b.forEach((S, v) => {
        S.trendUp = _.has(v) ? S.trendUp : !1, S.trendDown = I.has(v) ? S.trendDown : !1, s.trendDominatesHighlightedWindow && (_.has(v) ? (S.singlePointDown = !1, S.twoSigmaDown = !1, S.shiftDown = !1) : I.has(v) && (S.singlePointUp = !1, S.twoSigmaUp = !1, S.shiftUp = !1));
      });
    })(M);
    for (const b of M) {
      if (b.ghost || !$e(b.value) || b.mean === null) {
        d.push(b);
        continue;
      }
      const { aligned: T, opposite: N } = Oi(
        b,
        n
      );
      if (b.specialCauseImprovementValue = T ? b.value : null, b.specialCauseConcernValue = N ? b.value : null, n === Oe.Neither) {
        const j = b.singlePointUp || b.twoSigmaUp || b.shiftUp || b.trendUp, _ = b.singlePointDown || b.twoSigmaDown || b.shiftDown || b.trendDown;
        b.variationIcon = j ? Be.NeitherHigh : _ ? Be.NeitherLow : Be.CommonCause;
      } else
        Ui(b, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      d.push(b);
    }
  }
  if (s.trendAcrossPartitions) {
    const m = d.map((p, g) => ({ idx: g, r: p })).filter(({ r: p }) => !p.ghost && $e(p.value));
    if (m.length >= s.trendPoints)
      for (let p = 0; p <= m.length - s.trendPoints; p++) {
        const g = m.slice(p, p + s.trendPoints).map((b) => b.idx), k = g.map((b) => d[b]);
        if (!k.every((b) => $e(b.value))) continue;
        let M = !0, C = !0;
        for (let b = 1; b < k.length && (k[b].value > k[b - 1].value || (M = !1), k[b].value < k[b - 1].value || (C = !1), !(!M && !C)); b++)
          ;
        M && g.forEach((b) => d[b].trendUp = !0), C && g.forEach((b) => d[b].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const m = d.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (i === tn.Always || i === tn.AutoWhenConflict && m) {
        const p = Wi(d), g = zi(p, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), k = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        for (const C of g)
          for (let b = C.start; b <= C.end; b++)
            C.trendDirection === Hs.Up ? k.add(b) : M.add(b);
        d.forEach((C, b) => {
          C.trendUp = k.has(b) ? C.trendUp : !1, C.trendDown = M.has(b) ? C.trendDown : !1, s.trendDominatesHighlightedWindow && (k.has(b) ? (C.singlePointDown = !1, C.twoSigmaDown = !1, C.shiftDown = !1) : M.has(b) && (C.singlePointUp = !1, C.twoSigmaUp = !1, C.shiftUp = !1));
        });
      }
    }
    for (const m of d) {
      if (m.ghost || !$e(m.value) || m.mean === null || n === Oe.Neither) continue;
      const { aligned: p, opposite: g } = Oi(m, n);
      m.specialCauseImprovementValue = p ? m.value : null, m.specialCauseConcernValue = g ? m.value : null, Ui(m, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: d };
}
function Io(e, t) {
  const n = Do(e), a = To(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? hr.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = Jm(n.rows, s, o), l = a.map((u, c) => {
    const d = i[c];
    if (u === mt.Common || u === mt.NoJudgement) {
      if (d === mt.Improvement) return mt.Improvement;
      if (d === mt.Concern) return mt.Concern;
    }
    return u;
  });
  return { rows: n.rows, visuals: l };
}
var hc = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(hc || {});
function Zm(e, t, n) {
  const a = n?.trendVisualMode ?? hr.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: u } = Io(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: o,
    boundaryWindows: i
  });
  let c = u.slice(), d = s.length ? s[0] : -1;
  if (d < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        d = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && d > 0 && (c[d - 1] = mt.Common), { rows: l, visuals: c };
}
const mc = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: ur.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Qm(e) {
  return { ...mc, ...e ?? {} };
}
var ft = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ft || {}), Nn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(Nn || {}), Br = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(Br || {});
const gc = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Oe.Up ? ot.HigherIsBetter : i.improvementDirection === Oe.Down ? ot.LowerIsBetter : ot.ContextDependent : i.polarity && (l = i.polarity);
    let u;
    switch (i.variationIcon) {
      case Be.ImprovementHigh:
      case Be.ImprovementLow:
        u = Ne.SpecialCauseImproving;
        break;
      case Be.ConcernHigh:
      case Be.ConcernLow:
        u = Ne.SpecialCauseDeteriorating;
        break;
      case Be.NeitherHigh:
      case Be.NeitherLow:
        u = i.specialCauseNeutral ? Ne.SpecialCauseNoJudgement : Ne.CommonCause;
        break;
      case Be.CommonCause:
        u = Ne.CommonCause;
        break;
      default:
        u = Ne.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (u === Ne.SpecialCauseImproving ? c = l === ot.LowerIsBetter ? Me.Lower : Me.Higher : u === Ne.SpecialCauseDeteriorating ? c = l === ot.LowerIsBetter ? Me.Higher : Me.Lower : u === Ne.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = Me.Higher : i.lowSideSignal && !i.highSideSignal ? c = Me.Lower : c = Me.Higher : c = Me.Higher), { state: u, direction: c, polarity: l ?? ot.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ne.SpecialCauseImproving || i.state === Ne.SpecialCauseDeteriorating) && i.polarity && (i.state === Ne.SpecialCauseImproving ? l = i.polarity === ot.LowerIsBetter ? Me.Lower : Me.Higher : l = i.polarity === ot.LowerIsBetter ? Me.Higher : Me.Lower), l || (i.state === Ne.SpecialCauseImproving ? l = Me.Higher : i.state === Ne.SpecialCauseDeteriorating ? l = Me.Lower : l = Me.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? ot.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [Nt.Improving]: Ne.SpecialCauseImproving,
    [Nt.Deteriorating]: Ne.SpecialCauseDeteriorating,
    [Nt.No_Judgement]: Ne.SpecialCauseNoJudgement,
    [Nt.None]: Ne.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === Nt.Improving ? s = n.polarity === ot.LowerIsBetter ? Me.Lower : Me.Higher : n.judgement === Nt.Deteriorating ? s = n.polarity === ot.LowerIsBetter ? Me.Higher : Me.Lower : s = n.trend ?? Me.Higher, { state: o, direction: s, polarity: n.polarity };
};
function xc(e, t) {
  const { state: n, direction: a, polarity: o } = gc(e), s = jo(n), i = a === Me.Higher ? "above" : "below", l = a === Me.Higher ? "upwards" : "downwards", u = (() => {
    switch (o) {
      case ot.HigherIsBetter:
        return "For this measure, higher values are better.";
      case ot.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case Nt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Nt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Nt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case Nt.None:
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
const _s = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), $o = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: o = !0,
  gradientWash: s = !1,
  variant: i = Nn.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = Br.Polarity,
  letterOverride: c,
  ...d
}) => {
  const f = ea(), h = ea(), {
    start: x,
    mid: y,
    end: m,
    triStart: p,
    triMid: g,
    triEnd: k
  } = Ja(), { state: M, direction: C, polarity: b } = Pe(
    () => gc(e),
    [e]
  ), T = Pe(() => dc(M), [M]), N = Pe(() => jo(M), [M]), j = N === Nt.Improving || N === Nt.Deteriorating;
  let _ = "";
  a && j && (u === Br.Polarity ? b === ot.HigherIsBetter ? _ = "H" : b === ot.LowerIsBetter ? _ = "L" : _ = "" : _ = C === Me.Higher ? "H" : "L"), c !== void 0 && (_ = c);
  const I = M !== Ne.CommonCause, S = M === Ne.SpecialCauseNoJudgement, v = Je("common-cause", "#A6A6A6"), L = I ? T.hex : v, w = Pe(
    () => Om(M, C),
    [M, C]
  ), $ = n || `${T.label}${_ ? C === Me.Higher ? " – Higher" : " – Lower" : ""}`, D = xc(
    e
  );
  if (i === Nn.TriangleWithRun) {
    const O = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], U = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let re = null;
    M === Ne.SpecialCauseImproving || M === Ne.SpecialCauseDeteriorating ? re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (C === Me.Higher ? O : U).map((fe) => fe.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 6,
        transform: C === Me.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : M === Ne.SpecialCauseNoJudgement && (re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: C === Me.Higher ? O.map((fe) => fe.join(",")).join(" ") : U.map((fe) => fe.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 6,
        transform: C === Me.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const W = Math.max(0, Math.min(5, Math.floor(l || 0))), oe = M === Ne.CommonCause ? 160 : C === Me.Higher ? 220 : 70, ke = 10, le = 26, ce = 150 - 2 * le, Z = M === Ne.SpecialCauseImproving ? Je("improvement", "#00B0F0") : M === Ne.SpecialCauseDeteriorating ? Je("concern", "#E46C0A") : v, ne = Array.from({ length: 5 }).map((fe, F) => {
      const Y = (M === Ne.SpecialCauseImproving || M === Ne.SpecialCauseDeteriorating) && F >= 5 - W ? Z : v;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: ce + F * le,
          cy: oe,
          r: ke,
          fill: Y,
          stroke: Y,
          strokeWidth: 1
        },
        F
      );
    }), de = _s(
      T.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: g },
        { offset: "100%", opacity: k }
      ]
    ), z = M === Ne.CommonCause || C === Me.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": D,
        ...d,
        children: [
          de,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${h})` : "#ffffff",
              ...o ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: T.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: z, children: [
            re,
            _ && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: C === Me.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: _
              }
            ),
            ne
          ] })
        ]
      }
    );
  }
  if (i === Nn.Triangle) {
    const O = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], U = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], re = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let W = null;
    M === Ne.SpecialCauseImproving || M === Ne.SpecialCauseDeteriorating ? W = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (C === Me.Higher ? O : U).map((ke) => ke.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 8,
        transform: C === Me.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : M === Ne.SpecialCauseNoJudgement ? W = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: C === Me.Higher ? O.map((ke) => ke.join(",")).join(" ") : U.map((ke) => ke.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 8,
        transform: C === Me.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : M === Ne.CommonCause && (W = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: re[0][0],
        y1: re[0][1],
        x2: re[1][0],
        y2: re[1][1],
        stroke: T.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const oe = _s(
      T.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: g },
        { offset: "100%", opacity: k }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": D,
        ...d,
        children: [
          oe,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${h})` : "#ffffff",
              ...o ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: T.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          W,
          _ && (M === Ne.SpecialCauseImproving || M === Ne.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: C === Me.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: _
            }
          )
        ]
      }
    );
  }
  const P = _s(
    T.hex,
    f,
    h,
    o,
    s,
    [
      { offset: "0%", opacity: x },
      { offset: "65%", opacity: y },
      { offset: "100%", opacity: m }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": $,
      "aria-description": D,
      ...d,
      children: [
        P,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${h})` : "#ffffff",
            ...o ? { filter: `url(#${f})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: T.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        _ && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: T.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: C === Me.Lower ? "340" : "155", children: _ })
          }
        ),
        S ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: T.hex,
            ...C === Me.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          w.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: v,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${w.map((te) => `${te.cx} ${te.cy}`).join(" L ")}`
            }
          ),
          w.map((te, V) => {
            const O = V >= w.length - 2 && I ? L : v, U = O;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: U,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: O,
                cx: te.cx,
                cy: te.cy,
                r: 16
              },
              V
            );
          })
        ] })
      ]
    }
  );
};
$o.displayName = "SPCVariationIcon";
const eg = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function tg(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function ng(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
function rg(e) {
  switch (e) {
    case Ne.SpecialCauseImproving:
      return Je("improvement", "#00B0F0");
    case Ne.SpecialCauseDeteriorating:
      return Je("concern", "#E46C0A");
    case Ne.SpecialCauseNoJudgement:
      return Je("no-judgement", "#490092");
    case Ne.CommonCause:
      return Je("common-cause", "#A6A6A6");
    default:
      return Je("common-cause", "#A6A6A6");
  }
}
const bc = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: o = !0,
  showLimitBand: s = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: u = !0,
  variationState: c,
  autoClassify: d = !1,
  metricImprovement: f,
  gradientWash: h = !1,
  size: x = "sm",
  ariaLabel: y,
  className: m,
  onPointClick: p,
  onClassification: g,
  maxPoints: k,
  thinningStrategy: M = "stride",
  colorPointsBySignal: C = !0,
  centerLine: b,
  controlLimits: T,
  sigmaBands: N,
  pointSignals: j,
  pointNeutralSpecialCause: _
}) => {
  const I = f, S = Pe(
    () => tg(e, t),
    [e, t]
  ), v = Pe(() => ng(S), [S]), L = eg[x], w = Math.max(S.length * 6, 60), $ = L.height, D = 4, P = 2, te = Pe(() => (e?.length ?? 0) - (S?.length ?? 0), [e?.length, S?.length]), H = S.filter((B) => B.value != null).map((B) => B.value), O = b ?? v.mean, U = Pe(() => {
    if (O == null) return null;
    const B = [];
    if (N?.upperOne != null && B.push(Math.abs(N.upperOne - O)), N?.lowerOne != null && B.push(Math.abs(O - N.lowerOne)), B.length) return B.reduce((X, K) => X + K, 0) / B.length;
    const E = [];
    return T?.upper != null && E.push(Math.abs(T.upper - O) / 3), T?.lower != null && E.push(Math.abs(O - T.lower) / 3), E.length ? E.reduce((X, K) => X + K, 0) / E.length : null;
  }, [N?.upperOne, N?.lowerOne, T?.upper, T?.lower, O]), re = Pe(() => {
    if (U != null || !H.length || O == null || H.length < 2) return null;
    const B = [];
    for (let X = 1; X < H.length; X++) {
      const K = H[X - 1], A = H[X];
      K != null && A != null && B.push(Math.abs(A - K));
    }
    return B.length ? B.reduce((X, K) => X + K, 0) / B.length / 1.128 : null;
  }, [U, H.join(","), O]), W = U ?? re, oe = Pe(() => {
    if (!o) return null;
    if (T) return T;
    if (O == null || W == null) return null;
    const B = 3 * W;
    return { lower: O - B, upper: O + B };
  }, [o, O, W, T?.lower, T?.upper]), ke = Pe(() => {
    if (c)
      return {
        state: c,
        firedRules: [],
        mean: v.mean,
        stdDev: W
      };
    if (!d || !W || W === 0 || O == null || v.latestValue == null)
      return {
        state: Ne.CommonCause,
        firedRules: [],
        mean: v.mean,
        stdDev: W
      };
    const B = [], E = v.latestValue, X = T?.upper ?? (W != null && O != null ? O + 3 * W : null), K = T?.lower ?? (W != null && O != null ? O - 3 * W : null);
    X != null && K != null && (E > X || E < K) && B.push("point-beyond-3sigma");
    const A = H.slice(-8);
    if (A.length === 8) {
      const J = A.every((me) => me > O), ae = A.every((me) => me < O);
      (J || ae) && B.push("eight-point-run");
    }
    const q = H.slice(-5);
    if (q.length === 5) {
      const J = q.every((ye, Ce, ge) => Ce === 0 || ye >= ge[Ce - 1]), ae = q.every((ye, Ce, ge) => Ce === 0 || ye <= ge[Ce - 1]), me = N?.upperOne ?? (W != null && O != null ? O + W : null), ve = N?.lowerOne ?? (W != null && O != null ? O - W : null);
      J && me != null && q[q.length - 1] > me && B.push("five-point-trend"), ae && ve != null && q[q.length - 1] < ve && B.push("five-point-trend");
    }
    const Q = H.slice(-3);
    if (Q.length === 3 && (W != null || N)) {
      const J = N?.upperTwo ?? (O != null && W != null ? O + 2 * W : null), ae = N?.lowerTwo ?? (O != null && W != null ? O - 2 * W : null);
      if (J != null && ae != null) {
        const me = Q.filter((ye) => ye > J).length, ve = Q.filter((ye) => ye < ae).length;
        me >= 2 && B.push("two-of-three-near-limit"), ve >= 2 && B.push("two-of-three-near-limit");
      }
    }
    let ee = Ne.CommonCause;
    if (B.includes("point-beyond-3sigma") ? ee = E > O ? Ne.SpecialCauseImproving : Ne.SpecialCauseDeteriorating : (B.includes("eight-point-run") || B.includes("five-point-trend") || B.includes("two-of-three-near-limit")) && (ee = H[H.length - 1] > O ? Ne.SpecialCauseImproving : Ne.SpecialCauseDeteriorating), d && !c && B.length === 1 && B[0] === "point-beyond-3sigma") {
      const J = H.slice(-9, -1);
      if (J.length >= 5) {
        const ae = J.filter((ve) => ve > O).length, me = J.filter((ve) => ve < O).length;
        ae > 0 && me > 0 && (ee = Ne.SpecialCauseNoJudgement);
      }
    }
    return {
      state: ee,
      firedRules: B,
      mean: O,
      stdDev: W,
      side: v.latestValue != null && O != null ? v.latestValue > O ? "above" : "below" : void 0
    };
  }, [
    c,
    d,
    W,
    O,
    v.latestValue,
    H.join(",")
  ]);
  jt.useEffect(() => {
    d && !c && g && g(ke);
  }, [ke, d, c, g]);
  const le = ke.state, ce = rg(le), Z = (B) => {
    const E = S.filter((q) => q.value != null);
    if (!E.length) return $ / 2;
    const X = E.map((q) => q.value);
    oe && (oe.lower != null && X.push(oe.lower), oe.upper != null && X.push(oe.upper));
    const K = Math.min(...X), A = Math.max(...X);
    return K === A ? $ / 2 : $ - (B - K) / (A - K) * ($ - P * 2) - P;
  }, ne = Pe(() => {
    if (!k || S.length <= k)
      return S.map((Q, ee) => ee);
    if (M === "stride") {
      const Q = Math.max(2, k), ee = (S.length - 1) / (Q - 1), J = /* @__PURE__ */ new Set();
      for (let ae = 0; ae < Q; ae++) J.add(Math.round(ae * ee));
      return J.add(S.length - 1), Array.from(J).sort((ae, me) => ae - me);
    }
    const B = S.map((Q, ee) => ({ i: ee, v: Q.value }));
    function E(Q, ee, J) {
      const ae = Q.i, me = Q.v ?? 0, ve = ee.i, ye = ee.v ?? 0, Ce = J.i, ge = J.v ?? 0, Ae = Math.abs((ge - ye) * ae - (Ce - ve) * me + Ce * ye - ge * ve), We = Math.hypot(ge - ye, Ce - ve);
      return We === 0 ? 0 : Ae / We;
    }
    function X(Q, ee) {
      if (Q.length <= 2) return Q;
      let J = -1, ae = -1;
      for (let me = 1; me < Q.length - 1; me++) {
        const ve = E(Q[me], Q[0], Q[Q.length - 1]);
        ve > J && (J = ve, ae = me);
      }
      if (J > ee) {
        const me = X(Q.slice(0, ae + 1), ee), ve = X(Q.slice(ae), ee);
        return [...me.slice(0, -1), ...ve];
      }
      return [Q[0], Q[Q.length - 1]];
    }
    let K = 0.1, A = B;
    for (let Q = 0; Q < 8 && (A = X(B, K), !(A.length <= k)); Q++)
      K *= 1.6;
    const q = new Set(A.map((Q) => Q.i));
    return q.add(0), q.add(S.length - 1), Array.from(q).sort((Q, ee) => Q - ee);
  }, [S, k, M]), de = Pe(
    () => ne.map((B) => S[B]),
    [ne, S]
  ), z = Pe(() => {
    let B = "";
    return de.forEach((E, X) => {
      if (E.value == null) return;
      const K = Z(E.value), A = X / (de.length - 1 || 1) * (w - D * 2) + D;
      B += B ? ` L ${A} ${K}` : `M ${A} ${K}`;
    }), B;
  }, [de, w]), fe = v.latestIndex ?? -1, F = oe, R = Ja(), Y = Pe(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [S.length, h]
  ), se = S.length >= (n || 0), ue = y || "SPC sparkline", pe = (() => {
    if (!le) return;
    const B = I === Ee.Up ? ot.HigherIsBetter : I === Ee.Down ? ot.LowerIsBetter : ot.ContextDependent, E = {
      variationIcon: le === Ne.SpecialCauseImproving ? "improvement" : le === Ne.SpecialCauseDeteriorating ? "concern" : le === Ne.SpecialCauseNoJudgement ? "none" : "neither",
      trend: I === Ee.Up ? Me.Higher : Me.Lower,
      polarity: B
    };
    try {
      return xc(E);
    } catch {
      return;
    }
  })(), ie = Pe(() => {
    if (!se) return 10;
    const B = [...S].reverse().filter((X) => X.value != null).slice(0, 6).map((X) => Z(X.value));
    return B.length && B.reduce((X, K) => X + K, 0) / B.length < $ / 2 ? $ : 10;
  }, [S, se, $]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": ue,
      "aria-description": pe,
      width: w,
      height: $,
      className: m,
      viewBox: `0 0 ${w} ${$}`,
      children: [
        h && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: Y, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: ce,
                stopOpacity: Number(R.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: ce,
                stopOpacity: Number(R.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: ce,
                stopOpacity: Number(R.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: w,
              height: $,
              fill: `url(#${Y})`
            }
          )
        ] }),
        F && F.lower != null && F.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                Z(F.upper),
                Z(F.lower)
              ),
              width: w,
              height: Math.abs(
                Z(F.upper) - Z(F.lower)
              ),
              fill: ce,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: w,
              y1: Z(F.lower),
              y2: Z(F.lower),
              stroke: ce,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: w,
              y1: Z(F.upper),
              y2: Z(F.upper),
              stroke: ce,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          N && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            N.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(N.lowerTwo),
                y2: Z(N.lowerTwo),
                stroke: ce,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            N.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(N.lowerOne),
                y2: Z(N.lowerOne),
                stroke: ce,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            N.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(N.upperOne),
                y2: Z(N.upperOne),
                stroke: ce,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            N.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(N.upperTwo),
                y2: Z(N.upperTwo),
                stroke: ce,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && v.mean != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: w,
            y1: Z(v.mean),
            y2: Z(v.mean),
            stroke: Je("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: z,
            fill: "none",
            stroke: Je("common-cause", "#A6A6A6"),
            strokeWidth: L.stroke,
            strokeLinecap: "round"
          }
        ),
        ne.map((B, E) => {
          const X = S[B];
          if (!X || X.value == null) return null;
          const K = Z(X.value), A = E / (de.length - 1 || 1) * (w - D * 2) + D, Q = (B === fe && l ? L.pointR + 1 : L.pointR) - 0.5;
          let ee = Je("common-cause", "#A6A6A6");
          if (C) {
            const J = j?.[te + B];
            if (J === "improvement")
              ee = Je("improvement", "#00B0F0");
            else if (J === "concern")
              ee = Je("concern", "#E46C0A");
            else if (_?.[te + B])
              ee = Je("no-judgement", "#490092");
            else if (O != null) {
              const me = X.value, ve = T?.upper ?? (W != null ? O + 3 * W : null), ye = T?.lower ?? (W != null ? O - 3 * W : null);
              ve != null && me > ve ? ee = Je("improvement", "#00B0F0") : ye != null && me < ye ? ee = Je("concern", "#E46C0A") : ee = Je("common-cause", "#A6A6A6");
            } else
              ee = Je("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: A,
              cy: K,
              r: Q,
              fill: ee,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(B, X) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": B,
              "data-signal-colour": C ? ee : void 0
            },
            B
          );
        }),
        u && se && le && le !== Ne.CommonCause && I && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: w - 4,
            y: ie,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: ce,
            "data-glyph-pos": ie < $ / 2 ? "top" : "bottom",
            children: I === Ee.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
bc.displayName = "SPCSpark";
const _e = (e) => typeof e == "number" && Number.isFinite(e), ag = (e) => e.reduce((t, n) => t + n, 0), Yt = (e) => e.length ? ag(e) / e.length : NaN;
function vc(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && _e(s)) {
      if (a !== null) {
        const i = e[a];
        n[o] = _e(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return n;
}
function yc(e, t) {
  const n = e.filter((s) => _e(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Yt(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = Yt(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function sg(e, t) {
  if (!_e(e) || !_e(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = 2.66, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n * t,
    lowerProcessLimit: e - n * t,
    upperTwoSigma: e + a * t,
    lowerTwoSigma: e - a * t,
    upperOneSigma: e + o * t,
    lowerOneSigma: e - o * t
  };
}
const og = 0.2777, ig = 3.6, lg = (e) => _e(e) && e >= 0 ? Math.pow(e, og) : null, Pn = (e) => _e(e) && e >= 0 ? Math.pow(e, ig) : null;
function cg(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const Zn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function ug(e) {
  if (!_e(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), n = (d) => cg(d, t) - 1, a = n(0.5), o = Math.max(0, n(Zn.three.low)), s = n(Zn.three.high), i = Math.max(0, n(Zn.one.low)), l = n(Zn.one.high), u = Math.max(0, n(Zn.two.low)), c = n(Zn.two.high);
  return { cl: a, lcl: o, ucl: s, oneLow: i, oneHigh: l, twoLow: u, twoHigh: c };
}
function dg(e, t, n) {
  const a = e.map((j) => _e(j) ? lg(j) : null), o = vc(a, t), { mrMean: s } = yc(o, !!n), i = a.filter((j, _) => !t[_] && _e(j)), l = i.length ? Yt(i) : NaN;
  if (!_e(l) || !_e(s))
    return {
      center: null,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null,
      mr: o,
      mrMean: null,
      mrUcl: null
    };
  const u = 2.66, c = 2 / 3 * u, d = 1 / 3 * u, f = l + u * s, h = l - u * s, x = l + c * s, y = l - c * s, m = l + d * s, p = l - d * s, g = Pn(l), k = Pn(f), M = h <= 0 ? null : Pn(h), C = Pn(m), b = p <= 0 ? null : Pn(p), T = Pn(x), N = y <= 0 ? null : Pn(y);
  return {
    center: g ?? null,
    upperProcessLimit: k ?? null,
    lowerProcessLimit: M ?? null,
    upperTwoSigma: T ?? null,
    lowerTwoSigma: N ?? null,
    upperOneSigma: C ?? null,
    lowerOneSigma: b ?? null,
    mr: o,
    mrMean: s,
    mrUcl: _e(s) ? 3.267 * s : null
  };
}
function fg(e) {
  const {
    metricImprovement: t,
    capabilityMode: n,
    value: a,
    mean: o,
    upperProcessLimit: s,
    lowerProcessLimit: i,
    target: l
  } = e, u = (c) => typeof c == "number" && Number.isFinite(c);
  return !u(a) || o === null || !u(l) ? ct.None : n && u(s) && u(i) ? t === Ee.Up ? u(i) && i > l ? ct.Pass : u(s) && s < l ? ct.Fail : ct.None : t === Ee.Down ? u(s) && s < l ? ct.Pass : u(i) && i > l ? ct.Fail : ct.None : ct.None : t === Ee.Down ? a <= l ? ct.Pass : ct.Fail : t === Ee.Up ? a >= l ? ct.Pass : ct.Fail : ct.None;
}
function pg(e, t) {
  const {
    W: n,
    minGap: a,
    minDeltaSigma: o,
    scoreThreshold: s,
    isShiftUpAt: i,
    isShiftDownAt: l,
    isTrendUpAt: u,
    isTrendDownAt: c,
    isSingleUpAt: d,
    isSingleDownAt: f
  } = t, h = [];
  let x = 0;
  for (let y = 0; y < e.length; y++) {
    const m = e[y];
    y > 0 && e[y - 1].partitionId !== m.partitionId && (x = y);
    const p = y > 0 && i(y - 1), g = y > 0 && l(y - 1), k = y > 0 && u(y - 1), M = y > 0 && c(y - 1), C = y > 0 && d(y - 1), b = y > 0 && f(y - 1), T = i(y), N = l(y), j = u(y), _ = c(y), I = d(y), S = f(y), v = [];
    T && !p && v.push({ reason: Ft.Shift, index: y }), N && !g && v.push({ reason: Ft.Shift, index: y }), j && !k && v.push({ reason: Ft.Trend, index: y }), _ && !M && v.push({ reason: Ft.Trend, index: y }), I && !C && v.push({ reason: Ft.Point, index: y }), S && !b && v.push({ reason: Ft.Point, index: y });
    for (const L of v) {
      if (L.index - x < a) continue;
      const w = Math.max(0, L.index - n), $ = L.index - 1;
      if ($ - w + 1 < n) continue;
      const D = L.index, P = L.index + n - 1;
      if (P >= e.length) continue;
      const te = e.slice(w, $ + 1).map((z) => z.value).filter(
        (z) => typeof z == "number" && Number.isFinite(z)
      ), V = e.slice(D, P + 1).map((z) => z.value).filter(
        (z) => typeof z == "number" && Number.isFinite(z)
      );
      if (te.length < n || V.length < n) continue;
      const H = e[L.index];
      let O = null;
      if (typeof H.upperProcessLimit == "number" && typeof H.mean == "number") {
        const z = H.upperProcessLimit - H.mean;
        z > 0 && (O = z / 3);
      }
      if (!O || O <= 0) continue;
      const U = Yt(te), re = Yt(V), W = re - U;
      if (Math.abs(W) < o * O) continue;
      const ke = e.slice(D, P + 1).filter(
        (z) => z.variationIcon === Fe.Concern
      ).length;
      if (ke > 1) continue;
      const le = (z) => {
        const fe = Yt(z);
        return z.length ? z.reduce((F, R) => F + (R - fe) * (R - fe), 0) / z.length : 0;
      }, ce = le(te), Z = le(V);
      let ne = L.reason === Ft.Shift ? 90 : L.reason === Ft.Trend ? 70 : 60;
      if (Z < ce && (ne += 10), ne -= ke * 15, ne < s) continue;
      const de = h.find((z) => z.index === L.index);
      if (de) {
        const z = (fe) => fe === Ft.Shift ? 3 : fe === Ft.Trend ? 2 : 1;
        (z(L.reason) > z(de.reason) || ne > de.score) && (de.reason = L.reason, de.score = ne, de.deltaMean = W, de.oldMean = U, de.newMean = re, de.window = [D, P]);
      } else
        h.push({
          index: L.index,
          reason: L.reason,
          score: ne,
          deltaMean: W,
          oldMean: U,
          newMean: re,
          window: [D, P]
        });
    }
  }
  return h.sort((y, m) => y.index - m.index), h;
}
function Ss() {
  const e = globalThis;
  if (typeof e.__SPC_PHASE4_STRICT < "u") return !!e.__SPC_PHASE4_STRICT;
  if (typeof process < "u") {
    const t = process?.env?.SPC_PHASE4_STRICT;
    if (typeof t < "u") {
      const n = String(t).toLowerCase();
      if (n === "1" || n === "true") return !0;
      if (n === "0" || n === "false") return !1;
    }
  }
  return !0;
}
var Wt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Wt || {}), ba = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(ba || {}), va = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(va || {});
function hg(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function mg(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => _e(d.value));
  if (o.length < a * 2) return;
  const s = n === Ee.Up || n === Ee.Neither, i = n === Ee.Down;
  function l(d, f) {
    const h = o.slice(d, f).map((x) => x.value);
    return h.length ? Yt(h) : NaN;
  }
  let u = null;
  if (o.length > 1) {
    const d = [];
    for (let h = 1; h < o.length; h++) d.push(Math.abs(o[h].value - o[h - 1].value));
    const f = Yt(d);
    _e(f) && f > 0 && (u = f * (2.66 / 3));
  }
  if (!u || u <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= o.length - a; d++) {
    const f = d - a, h = l(f, d), x = l(d, d + a);
    if (!_e(h) || !_e(x)) continue;
    const m = (x - h) / u;
    if (!(s ? m >= c : i ? -m >= c : Math.abs(m) >= c)) continue;
    const g = o.slice(d, d + a).map((C) => C.value);
    if (!(s ? g.every((C) => C > h) : i ? g.every((C) => C < h) : g.every((C) => s ? C > h : C < h))) continue;
    const M = o[d].idx;
    e[M].baseline || (e[M].baseline = !0);
    return;
  }
}
function wc(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, o = n.precedence ?? {}, s = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, u = n.capability ?? {}, c = n.grace ?? {}, d = n.baselineSuggest ?? {}, f = n.autoRecalc ?? {}, h = c.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, x = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Ss()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const y = globalThis;
  !Ss() && t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !y.__spc_warn_emergingDirectionGrace && (y.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Ss() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !y.__spc_warn_collapseClusterRules && (y.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const m = (k) => {
    const M = {};
    for (const C of Object.keys(k)) {
      const b = k[C];
      b !== void 0 && (M[C] = b);
    }
    return M;
  }, p = m({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: x ?? t.collapseWeakerClusterRules,
    // Precedence
    precedenceStrategy: o.strategy ?? t.precedenceStrategy,
    conflictPrecedenceMode: o.conflictMode ?? t.conflictPrecedenceMode,
    // Thresholds
    minimumPoints: s.minimumPoints ?? t.minimumPoints,
    minimumPointsPartition: s.minimumPointsPartition ?? t.minimumPointsPartition,
    maximumPointsPartition: s.maximumPointsPartition ?? t.maximumPointsPartition,
    maximumPoints: s.maximumPoints ?? t.maximumPoints,
    transitionBufferPoints: s.transitionBufferPoints ?? t.transitionBufferPoints,
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
    emergingGraceEnabled: h,
    emergingDirectionGrace: h,
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
  }), g = { ...p, ...m(t) };
  if (h !== void 0 && (g.emergingGraceEnabled = h, g.grace = { ...g.grace, emergingEnabled: h }), p.collapseWeakerClusterRules !== void 0) {
    const k = p.collapseWeakerClusterRules;
    g.collapseWeakerClusterRules = k, g.rules = { ...g.rules, collapseWeakerClusterRules: k };
  }
  return m(g);
}
function _c(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: o = {}
  } = e, s = wc(o), i = {
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
    precedenceStrategy: Qr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...s
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((p, g) => ({
    rowId: g + 1,
    x: p.x,
    value: _e(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: _e(p.target) ? p.target : null
  }));
  if (s?.autoRecalculateAfterShift)
    try {
      mg(l, s, n);
    } catch {
    }
  const u = hg(l), c = [], d = [], h = l.filter(
    (p) => !p.ghost && _e(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let x = 0;
  const y = {};
  for (const p of u) {
    x++;
    const g = p.map((v) => v.value), k = p.map((v) => v.ghost);
    let M = new Array(g.length).fill(null), C = NaN, b = NaN, T = NaN, N = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      M = vc(g, k);
      const v = g.filter(
        (w, $) => !k[$] && _e(w)
      );
      C = v.length ? Yt(v) : NaN;
      const L = yc(
        M,
        !!i.excludeMovingRangeOutliers
      );
      b = L.mrMean, T = L.mrUcl, N = sg(C, b);
    } else if (t === "T") {
      const v = dg(
        g,
        k,
        !!i.excludeMovingRangeOutliers
      );
      M = v.mr, b = v.mrMean ?? NaN, T = v.mrUcl ?? NaN, C = v.center ?? NaN, N = {
        upperProcessLimit: v.upperProcessLimit,
        lowerProcessLimit: v.lowerProcessLimit,
        upperTwoSigma: v.upperTwoSigma,
        lowerTwoSigma: v.lowerTwoSigma,
        upperOneSigma: v.upperOneSigma,
        lowerOneSigma: v.lowerOneSigma
      };
    } else if (t === "G") {
      const v = g.filter(
        ($, D) => !k[D] && _e($)
      ), L = v.length ? Yt(v) : NaN, w = ug(L);
      C = w.cl ?? NaN, N = {
        upperProcessLimit: w.ucl,
        lowerProcessLimit: w.lcl,
        upperTwoSigma: w.twoHigh,
        lowerTwoSigma: w.twoLow,
        upperOneSigma: w.oneHigh,
        lowerOneSigma: w.oneLow
      }, M = new Array(g.length).fill(null), b = NaN, T = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const j = p.map((v, L) => {
      const w = !v.ghost && _e(v.value) ? g.slice(0, L + 1).filter((te, V) => !k[V] && _e(te)).length : 0, $ = h, D = $ ? N : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: v.rowId,
        x: v.x,
        value: _e(v.value) ? v.value : null,
        ghost: v.ghost,
        partitionId: x,
        pointRank: w,
        mean: $ && _e(C) ? C : null,
        mr: _e(M[L]) ? M[L] : null,
        mrMean: $ && _e(b) ? b : null,
        mrUcl: $ && _e(T) ? T : null,
        upperProcessLimit: _e(D.upperProcessLimit) ? D.upperProcessLimit : null,
        lowerProcessLimit: _e(D.lowerProcessLimit) ? D.lowerProcessLimit : null,
        upperTwoSigma: _e(D.upperTwoSigma) ? D.upperTwoSigma : null,
        lowerTwoSigma: _e(D.lowerTwoSigma) ? D.lowerTwoSigma : null,
        upperOneSigma: _e(D.upperOneSigma) ? D.upperOneSigma : null,
        lowerOneSigma: _e(D.lowerOneSigma) ? D.lowerOneSigma : null,
        target: _e(v.target) ? v.target : null,
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
        variationIcon: Fe.Suppressed,
        assuranceIcon: ct.None,
        upperBaseline: $ && _e(C) ? C : null,
        lowerBaseline: $ && _e(C) ? C : null,
        movingRangeHighPointValue: $ && _e(T) ? T : null,
        ghostValue: v.ghost && _e(v.value) ? v.value : null,
        ghostFlag: !!v.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    y[x] = j.filter(
      (v) => !v.ghost && _e(v.value)
    ).length;
    const _ = i.specialCauseShiftPoints ?? 6, I = i.specialCauseTrendPoints ?? 6, S = [];
    for (let v = 0; v < j.length; v++) {
      const L = j[v], w = L.value;
      if (!L.ghost && _e(w) && S.push(v), !(_e(L.mean) && _e(L.upperProcessLimit) && _e(L.lowerProcessLimit)) || L.ghost || !_e(w)) {
        c.push(L);
        continue;
      }
      L.specialCauseSinglePointUp = _e(L.upperProcessLimit) ? w > L.upperProcessLimit : !1, L.specialCauseSinglePointDown = _e(L.lowerProcessLimit) ? w < L.lowerProcessLimit : !1, c.push(L);
    }
    if (S.length) {
      const v = ($) => j[$];
      let L = [], w = [];
      for (const $ of S) {
        const D = v($);
        if (!_e(D.mean) || !_e(D.value)) {
          L = [], w = [];
          continue;
        }
        if (D.value > D.mean ? (L.push($), w = []) : D.value < D.mean ? (w.push($), L = []) : (L = [], w = []), L.length >= _)
          for (const P of L) {
            const te = v(P);
            te.specialCauseShiftUp = !0;
          }
        if (w.length >= _)
          for (const P of w) {
            const te = v(P);
            te.specialCauseShiftDown = !0;
          }
      }
      for (let $ = 0; $ <= S.length - 3; $++) {
        const P = S.slice($, $ + 3).map(v);
        if (!P.every((le) => _e(le.mean) && _e(le.value))) continue;
        const te = P[0].mean, V = P.every((le) => le.value > te), H = P.every((le) => le.value < te);
        if (!V && !H) continue;
        const O = P[0].upperTwoSigma ?? 1 / 0, U = P[0].lowerTwoSigma ?? -1 / 0, re = P[0].upperProcessLimit ?? 1 / 0, W = P[0].lowerProcessLimit ?? -1 / 0, oe = P.filter((le) => le.value > O && le.value <= re), ke = P.filter((le) => le.value < U && le.value >= W);
        if (V && oe.length >= 2)
          for (const le of oe)
            le.specialCauseTwoOfThreeUp = !0;
        if (H && ke.length >= 2)
          for (const le of ke)
            le.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let $ = 0; $ <= S.length - 5; $++) {
          const P = S.slice($, $ + 5).map(v);
          if (!P.every((re) => _e(re.mean) && _e(re.value))) continue;
          const te = P[0].mean;
          if (!P.every((re) => re.value > te) && !P.every((re) => re.value < te)) continue;
          const V = P[0].upperOneSigma ?? 1 / 0, H = P[0].lowerOneSigma ?? -1 / 0, O = P.filter((re) => re.value > V), U = P.filter((re) => re.value < H);
          if (P.every((re) => re.value > te) && O.length >= 4)
            for (const re of O)
              re.specialCauseFourOfFiveUp = !0;
          if (P.every((re) => re.value < te) && U.length >= 4)
            for (const re of U)
              re.specialCauseFourOfFiveDown = !0;
        }
      for (let $ = 0; $ <= S.length - I; $++) {
        const D = S.slice($, $ + I), P = D.map(v);
        if (!P.every((H) => _e(H.value))) continue;
        let te = !0, V = !0;
        for (let H = 1; H < P.length && (P[H].value > P[H - 1].value || (te = !1), P[H].value < P[H - 1].value || (V = !1), !(!te && !V)); H++)
          ;
        if (te) for (const H of D) {
          const O = v(H);
          O.specialCauseTrendUp = !0;
        }
        if (V) for (const H of D) {
          const O = v(H);
          O.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let $ = [];
        for (const D of S) {
          const P = v(D);
          if (!_e(P.value) || !_e(P.mean) || !_e(P.upperOneSigma) || !_e(P.lowerOneSigma)) {
            $ = [];
            continue;
          }
          if (!(P.value < P.upperOneSigma && P.value > P.lowerOneSigma)) {
            $ = [];
            continue;
          }
          if ($.push(D), $.length >= 15) {
            const V = $.map(v), H = V.some((U) => U.value > U.mean), O = V.some((U) => U.value < U.mean);
            if (H && O)
              for (const U of $) v(U).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const v = i.maximumPointsPartition;
      let L = 0;
      for (const w of c.filter(($) => $.partitionId === x))
        !w.ghost && _e(w.value) && L++, L > v && (w.mean = w.upperProcessLimit = w.lowerProcessLimit = null, w.upperTwoSigma = w.lowerTwoSigma = w.upperOneSigma = w.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const g = [];
    p.specialCauseShiftUp && g.push(yt.ShiftHigh), p.specialCauseShiftDown && g.push(yt.ShiftLow), p.specialCauseTrendUp && g.push(yt.TrendIncreasing), p.specialCauseTrendDown && g.push(yt.TrendDecreasing), p.specialCauseSinglePointUp && g.push(yt.SinglePointAbove), p.specialCauseSinglePointDown && g.push(yt.SinglePointBelow), p.specialCauseTwoOfThreeUp && g.push(yt.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && g.push(yt.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && g.push(yt.FourOfFiveAbove), p.specialCauseFourOfFiveDown && g.push(yt.FourOfFiveBelow), p.specialCauseFifteenInnerThird && g.push(yt.FifteenInnerThird), g.length && (p.ruleTags = g);
  }
  for (let p = 0; p < c.length; p++) {
    const g = c[p];
    if (Object.prototype.hasOwnProperty.call(g, Ir.ImprovementValueBeforePruning) || Object.defineProperty(g, Ir.ImprovementValueBeforePruning, {
      get() {
        return g.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(g, Ir.ConcernValueBeforePruning) || Object.defineProperty(g, Ir.ConcernValueBeforePruning, {
      get() {
        return g.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), g.ghost || !_e(g.value) || g.mean === null) {
      g.variationIcon = Fe.Suppressed;
      continue;
    }
    const k = g.value > g.mean, M = g.value < g.mean;
    i.rules?.collapseWeakerClusterRules && (g.specialCauseTwoOfThreeUp && g.specialCauseFourOfFiveUp && (g.specialCauseTwoOfThreeUp = !1), g.specialCauseTwoOfThreeDown && g.specialCauseFourOfFiveDown && (g.specialCauseTwoOfThreeDown = !1));
    const C = g.specialCauseTrendUp && k, b = g.specialCauseTrendDown && M, T = g.specialCauseSinglePointUp || g.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && g.specialCauseFourOfFiveUp || g.specialCauseShiftUp || C, N = g.specialCauseSinglePointDown || g.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && g.specialCauseFourOfFiveDown || g.specialCauseShiftDown || b;
    let j = !1;
    if (i.precedenceStrategy === Qr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const I = i.specialCauseTrendPoints || 6;
      if (I > 1 && !(g.specialCauseTrendUp || g.specialCauseTrendDown)) {
        const S = I - 1, v = [];
        for (let L = p; L >= 0 && v.length < S; L--) {
          const w = c[L];
          !w.ghost && _e(w.value) && w.mean !== null && v.unshift(w);
        }
        if (v.length === S) {
          let L = !0;
          for (let w = 1; w < v.length && L; w++)
            n === Ee.Up ? v[w].value > v[w - 1].value || (L = !1) : n === Ee.Down && v[w].value < v[w - 1].value || (L = !1);
          j = L;
        }
      }
    }
    if (i.precedenceStrategy === Qr.DirectionalFirst) {
      const S = n === Ee.Up ? T : n === Ee.Down ? N : !1, v = n === Ee.Up ? N : n === Ee.Down ? T : !1;
      S && !v ? g.variationIcon = Fe.Improvement : v && !S ? g.variationIcon = j ? Fe.Neither : Fe.Concern : S && v ? g.variationIcon = j || g.specialCauseTrendUp || g.specialCauseTrendDown ? Fe.Improvement : Fe.Neither : g.variationIcon = Fe.Neither;
    } else
      n === Ee.Up ? g.variationIcon = T ? Fe.Improvement : N ? Fe.Concern : Fe.Neither : n === Ee.Down ? g.variationIcon = N ? Fe.Improvement : T ? Fe.Concern : Fe.Neither : g.variationIcon = Fe.Neither;
    const _ = T || N;
    if (g.specialCauseImprovementValue = _ && g.variationIcon === Fe.Improvement ? g.value : null, g.specialCauseConcernValue = _ && g.variationIcon === Fe.Concern ? g.value : null, g.specialCauseNeitherValue = _ && g.variationIcon === Fe.Neither ? g.value : null, i.conflictPrecedenceMode === ic.SqlRankingV26a && g.specialCauseImprovementValue !== null && g.specialCauseConcernValue !== null) {
      const I = [];
      g.specialCauseSinglePointUp && I.push({ id: en.SinglePoint, rank: 1, side: kt.Up }), g.specialCauseSinglePointDown && I.push({ id: en.SinglePoint, rank: 1, side: kt.Down }), g.specialCauseTwoOfThreeUp && I.push({ id: en.TwoSigma, rank: 2, side: kt.Up }), g.specialCauseTwoOfThreeDown && I.push({ id: en.TwoSigma, rank: 2, side: kt.Down }), g.specialCauseShiftUp && I.push({ id: en.Shift, rank: 3, side: kt.Up }), g.specialCauseShiftDown && I.push({ id: en.Shift, rank: 3, side: kt.Down }), g.specialCauseTrendUp && I.push({ id: en.Trend, rank: 4, side: kt.Up }), g.specialCauseTrendDown && I.push({ id: en.Trend, rank: 4, side: kt.Down });
      const S = I.filter((V) => V.side === kt.Up).reduce((V, H) => Math.max(V, H.rank), 0), v = I.filter((V) => V.side === kt.Down).reduce((V, H) => Math.max(V, H.rank), 0);
      let L;
      S > v ? L = er.Upwards : v > S ? L = er.Downwards : L = er.Same;
      const w = g.specialCauseImprovementValue, $ = g.specialCauseConcernValue;
      L === er.Upwards ? n === Ee.Up ? g.specialCauseConcernValue = null : n === Ee.Down && (g.specialCauseImprovementValue = null) : L === er.Downwards ? n === Ee.Up ? g.specialCauseImprovementValue = null : n === Ee.Down && (g.specialCauseConcernValue = null) : g.variationIcon === Fe.Improvement ? g.specialCauseConcernValue = null : g.variationIcon === Fe.Concern ? g.specialCauseImprovementValue = null : g.specialCauseConcernValue = null, g.specialCauseImprovementValue !== null && g.specialCauseConcernValue === null ? g.variationIcon = Fe.Improvement : g.specialCauseConcernValue !== null && g.specialCauseImprovementValue === null ? g.variationIcon = Fe.Concern : g.specialCauseImprovementValue === null && g.specialCauseConcernValue === null && (g.variationIcon = Fe.Neither);
      const D = g.specialCauseImprovementValue !== null ? kt.Up : g.specialCauseConcernValue !== null ? kt.Down : void 0, P = D === kt.Up ? S : D === kt.Down ? v : Math.max(S, v), te = I.find((V) => V.rank === P && (!D || V.side === D));
      g.conflictPrimeDirection = L, g.conflictResolved = !0, g.conflictResolvedRank = P || void 0, te && (g.conflictResolvedByRuleId = te.id), g.pruningMode = lc.Conflict, g.originalSpecialCauseImprovementValue = w, g.originalSpecialCauseConcernValue = $;
    }
    {
      const I = l[g.rowId - 1], S = fg({
        metricImprovement: n,
        capabilityMode: i.assuranceCapabilityMode,
        value: g.value,
        mean: g.mean,
        upperProcessLimit: g.upperProcessLimit,
        lowerProcessLimit: g.lowerProcessLimit,
        target: _e(I?.target) ? I.target : null
      });
      g.assuranceIcon = S;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !h) {
    const p = l.filter(
      (g) => !g.ghost && _e(g.value)
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
      p.variationIcon === Fe.Improvement && (p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || p.specialCauseTrendUp) && (p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || p.specialCauseTrendDown) && d.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const p = i.maximumPoints;
    let g = 0;
    for (const k of c)
      !k.ghost && _e(k.value) && g++, g > p && (k.mean = k.upperProcessLimit = k.lowerProcessLimit = null, k.upperTwoSigma = k.lowerTwoSigma = k.upperOneSigma = k.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === wt.XmR || t === wt.G)) {
    const p = l.filter(
      (g) => !g.ghost && (g.value === null || g.value === void 0 || !_e(g.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === wt.T || t === wt.G) && l.some((g) => _e(g.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === wt.T || t === wt.G)) {
    const p = l.filter((g) => g.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(y).forEach(([p, g]) => {
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
  let m;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, g = i.baselineSuggestMinGap, k = i.baselineSuggestMinDeltaSigma, M = i.baselineSuggestScoreThreshold;
    m = pg(
      c.map((b) => ({
        value: b.value,
        partitionId: b.partitionId,
        variationIcon: b.variationIcon,
        mean: b.mean,
        upperProcessLimit: b.upperProcessLimit
      })),
      {
        W: p,
        minGap: g,
        minDeltaSigma: k,
        scoreThreshold: M,
        isShiftUpAt: (b) => !!c[b].specialCauseShiftUp,
        isShiftDownAt: (b) => !!c[b].specialCauseShiftDown,
        isTrendUpAt: (b) => !!c[b].specialCauseTrendUp,
        isTrendDownAt: (b) => !!c[b].specialCauseTrendDown,
        isSingleUpAt: (b) => !!c[b].specialCauseSinglePointUp,
        isSingleDownAt: (b) => !!c[b].specialCauseSinglePointDown
      }
    ).map((b) => ({
      index: b.index,
      reason: b.reason,
      score: b.score,
      deltaMean: b.deltaMean,
      oldMean: b.oldMean,
      newMean: b.newMean,
      window: b.window
    }));
  }
  return { rows: c, warnings: d, ...m ? { suggestedBaselines: m } : {} };
}
function Vi(e, t) {
  return e === "improvement" ? Ne.SpecialCauseImproving : e === "concern" ? Ne.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? Ne.SpecialCauseNoJudgement : e === "neither" ? Ne.CommonCause : null;
}
function gg(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function xg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function bg(e) {
  const {
    values: t,
    x: n,
    chartType: a = wt.XmR,
    metricImprovement: o = Ee.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: u = !1,
    autoClassify: c = !0
  } = e, d = G.useMemo(() => {
    const b = [];
    for (let T = 0; T < t.length; T++)
      b.push({ x: n?.[T], value: t[T] });
    return b;
  }, [t, n]), f = G.useMemo(() => {
    try {
      const b = d.map((T, N) => ({ x: T.x ?? N, value: T.value }));
      return _c({ chartType: a, metricImprovement: o, data: b, settings: {} });
    } catch {
      return null;
    }
  }, [d, a, o]), h = G.useMemo(() => {
    const b = f?.rows;
    if (!b || b.length === 0) return null;
    for (let T = b.length - 1; T >= 0; T--) {
      const N = b[T];
      if (N && N.value != null && !N.ghost) return N;
    }
    return b[b.length - 1] ?? null;
  }, [f]), x = G.useMemo(() => {
    const b = f?.rowsRepresentative ?? f?.rows;
    if (!b || !Array.isArray(b) || b.length === 0) return null;
    const T = b[b.length - 1];
    return Vi(
      T?.variationIcon,
      (T?.specialCauseNeitherValue ?? null) != null
    );
  }, [f]), y = G.useMemo(() => h?.mean ?? null, [h]), m = G.useMemo(() => {
    if (!h) return null;
    const b = h?.lowerProcessLimit ?? null, T = h?.upperProcessLimit ?? null;
    return b == null && T == null ? null : { lower: b, upper: T };
  }, [h]), p = G.useMemo(() => h ? {
    upperOne: h?.upperOneSigma ?? null,
    upperTwo: h?.upperTwoSigma ?? null,
    lowerOne: h?.lowerOneSigma ?? null,
    lowerTwo: h?.lowerTwoSigma ?? null
  } : null, [h]), g = G.useMemo(() => {
    const b = f?.rows;
    if (!(!b || b.length === 0))
      return b.map((T) => {
        const N = !!T?.specialCauseSinglePointUp || !!T?.specialCauseTwoOfThreeUp || !!T?.specialCauseFourOfFiveUp || !!T?.specialCauseShiftUp || !!T?.specialCauseTrendUp, j = !!T?.specialCauseSinglePointDown || !!T?.specialCauseTwoOfThreeDown || !!T?.specialCauseFourOfFiveDown || !!T?.specialCauseShiftDown || !!T?.specialCauseTrendDown;
        switch (o) {
          case Ee.Up:
            return N ? "improvement" : j ? "concern" : "neither";
          case Ee.Down:
            return j ? "improvement" : N ? "concern" : "neither";
          case Ee.Neither:
          default:
            return "neither";
        }
      });
  }, [f, o]), k = G.useMemo(() => {
    const b = f?.rows;
    if (!(!b || b.length === 0))
      return b.map((T) => !!T?.specialCauseNeitherValue);
  }, [f]), M = G.useMemo(() => {
    let b = null;
    if (h && h.value != null && !h.ghost) {
      const L = h.variationIcon, w = (h?.specialCauseNeitherValue ?? null) != null;
      x === Ne.SpecialCauseNoJudgement ? b = gg(L, w) ? Ne.SpecialCauseNoJudgement : Ne.CommonCause : b = Vi(L, w) ?? Ne.CommonCause;
    }
    const T = b ?? Ne.CommonCause, N = es[T].hex, [j, _, I] = xg(N), S = Ja();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${j}, ${_}, ${I}, ${S.start}) 0%, rgba(${j}, ${_}, ${I}, ${S.mid}) 50%, rgba(${j}, ${_}, ${I}, ${S.end}) 100%)`,
      "--fdp-metric-card-accent": N
    };
  }, [h, x]);
  return { sparkProps: G.useMemo(() => ({
    data: d,
    showMean: u,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: y,
    controlLimits: m,
    sigmaBands: p,
    pointSignals: g,
    pointNeutralSpecialCause: k,
    variationState: x ?? void 0,
    autoClassify: !!(c && !x),
    onClassification: () => {
    }
  }), [
    d,
    u,
    s,
    i,
    l,
    o,
    c,
    x,
    y,
    m?.lower,
    m?.upper,
    p?.upperOne,
    p?.upperTwo,
    p?.lowerOne,
    p?.lowerTwo,
    g?.length,
    k?.length
  ]), metricCardStyle: M, latestState: x };
}
function Gi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function vg(e, t, n) {
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
function yg(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let u = 1; u < n.length; u++) a.push(n[u].getTime() - n[u - 1].getTime());
  const o = a.sort((u, c) => u - c), s = o[Math.floor(o.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function Yi(e, t) {
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
function wg(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function _g(e, t, n = 1) {
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
function Sc(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: o,
    providedUnit: s,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: u = !0,
    autoMetadata: c = !0,
    deltaConfig: d
  } = e, f = t.map((_) => typeof _ == "number" ? _ : _ == null ? null : Number(_));
  let h = -1;
  for (let _ = f.length - 1; _ >= 0; _--)
    if (f[_] != null) {
      h = _;
      break;
    }
  let x = (n || []).map(Gi);
  if (!x.some(Boolean)) {
    const _ = Gi(o);
    _ && a ? x = vg(f.length, _, a) : x = new Array(f.length).fill(void 0);
  }
  const m = yg(x, a), p = wg(f, s, i, e.percentHeuristic), g = l && h >= 0 && f[h] != null ? f[h] : void 0, k = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function M() {
    if (h < 0) return -1;
    if (k.strategy === "previous" || k.strategy === "n-points") {
      let L = h - (k.strategy === "previous" ? 1 : Math.max(1, k.n || 1));
      if (!k.skipNulls) return L;
      for (let w = L; w >= 0; w--) if (f[w] != null) return w;
      return -1;
    }
    const _ = x[h];
    if (!_) return -1;
    const I = new Date(_);
    I.setFullYear(I.getFullYear() - 1);
    let S = -1, v = 1 / 0;
    for (let L = 0; L < x.length; L++) {
      const w = x[L];
      if (!w || f[L] == null) continue;
      const $ = Math.abs(w.getTime() - I.getTime());
      $ < v && (v = $, S = L);
    }
    return S;
  }
  const C = M(), b = C >= 0 ? f[C] : null;
  let T;
  if (u && g != null && b != null) {
    const _ = g - b, I = k.absolute !== !1, S = I ? _ : b === 0 ? 0 : _ / Math.abs(b) * 100;
    T = {
      value: Number.isFinite(S) ? Number(S.toFixed(2)) : 0,
      isPercent: I ? p === "%" : !0,
      period: `vs ${_g(m, a, k.strategy === "n-points" ? Math.max(1, k.n || 1) : 1)}`
    };
  }
  const N = h >= 0 ? x[h] : void 0, j = c && Yi(N, m) ? `Latest: ${Yi(N, m)}` : void 0;
  return { value: g, unit: p, delta: T, metadata: j, latestDate: N, frequency: m };
}
const sy = ({
  sparkData: e,
  direction: t = Ee.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: o = !1,
  showInnerBands: s = !1,
  autoClassify: i = !0,
  maxPoints: l,
  autoValue: u = !0,
  autoDelta: c = !0,
  autoMetadata: d = !0,
  defaultUnit: f,
  intervalHint: h,
  startDate: x,
  deltaConfig: y,
  ...m
}) => {
  const p = bg({
    values: e.map((N) => N.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n,
    autoClassify: i
  }), g = /* @__PURE__ */ r.jsx(bc, { ...p.sparkProps, maxPoints: l }), k = G.useMemo(() => Sc({
    values: e.map((N) => typeof N.value == "number" ? N.value : null),
    dates: e.map((N) => N.date),
    intervalHint: h,
    startDate: x,
    providedUnit: m.unit,
    defaultUnit: f,
    autoValue: u,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: y
  }), [e, h, x, m.unit, f, u, c, d, y]), M = u && k.value != null ? k.value : m.value, C = c && k.delta ? k.delta : m.delta, b = k.unit || m.unit, T = d && k.metadata ? k.metadata : m.metadata;
  return /* @__PURE__ */ r.jsx(
    Pm,
    {
      ...m,
      value: M,
      unit: b,
      delta: C,
      metadata: T,
      visual: g,
      style: p.metricCardStyle
    }
  );
}, kc = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const u = vn(), c = jn(), [d, f] = G.useState(null), [h, x] = G.useState(!1), y = G.useRef(null);
  G.useEffect(() => {
    if (u) {
      if (u.focused && (f(u.focused), y.current && (cancelAnimationFrame(y.current), y.current = null)), !u.focused && !h) {
        const ie = requestAnimationFrame(() => {
          f(null), y.current = null;
        });
        y.current = ie;
      }
      return () => {
        y.current && (cancelAnimationFrame(y.current), y.current = null);
      };
    }
  }, [u, u?.focused, h]);
  const m = u && (u.focused || (h ? d : null) || d), [p, g] = G.useState(!1);
  G.useEffect(() => {
    const ie = requestAnimationFrame(() => g(!0));
    return () => cancelAnimationFrame(ie);
  }, [m?.index]);
  const k = c?.innerWidth ?? 0, M = c?.innerHeight ?? 0, C = m ? Math.min(Math.max(m.clientX, 0), k) : 0, b = m ? Math.min(Math.max(m.clientY, 0), M) : 0, T = c?.ref?.current || void 0;
  if (!m)
    return null;
  const N = e?.[m.index], _ = Za(
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
  ).map((ie) => ({ id: ie, label: cr[ie].tooltip })), I = m.x instanceof Date ? m.x : new Date(m.x), S = s ? s(I) : I.toDateString(), v = o ? `${o}` : "", L = a || v ? `${m.y}${v ? "" + v : " "}${a ? " " + a : ""}` : `${m.y}`, w = Qa(N?.classification?.variation), $ = cc(N?.classification?.assurance), D = Am(
    t.mean ?? null,
    t.sigma,
    m.y
  ), P = n ? n(m.index, { x: m.x, y: m.y }) : void 0, te = w || $ || D, V = N?.rules.trend.up || N?.rules.trend.down, H = N?.classification?.variation === Fe.Neither && V, O = l && H ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, U = _.length > 0, re = N && "primeDirection" in N ? N.primeDirection : void 0, W = N && "primeRuleId" in N ? N.primeRuleId : void 0, oe = i && N?.classification?.variation === Fe.Neither && U, ke = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", le = uc(N?.classification?.variation), ce = 6.2, ne = [
    P || "",
    `${S} • ${L}`
  ].filter(Boolean).reduce(
    (ie, B) => Math.max(ie, B.length * ce + 32),
    0
  ), de = 200, z = 440, fe = Math.min(z, Math.max(de, ne));
  let F = C + 12, Y = (c.margin?.top ?? 0) + b + 16;
  F + fe > k && (F = C - -60 - fe), F < 0 && (F = Math.max(0, k - fe));
  const se = m ? `spc-tooltip-${m.index}` : "spc-tooltip", ue = typeof m.index == "number" ? m.index : NaN, pe = T ? wu(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: se,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: F,
          top: Y,
          width: fe,
          maxWidth: z,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": F + fe + 12 > k ? "left" : "right",
        onPointerEnter: () => {
          x(!0), y.current && (cancelAnimationFrame(y.current), y.current = null);
        },
        onPointerLeave: () => {
          if (x(!1), !u?.focused) {
            const ie = requestAnimationFrame(() => {
              f(null), y.current = null;
            });
            y.current = ie;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              ue
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: S })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: L })
          ] }),
          te && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: w?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : w?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : oe ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : w ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          $ && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const ie = $.toLowerCase(), E = !(ie.includes("not met") || ie.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ie);
              return /* @__PURE__ */ r.jsx(
                Ze,
                {
                  text: $,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${E ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${$}`
                }
              );
            })() })
          ] }),
          D && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: (() => {
                  const ie = D.toLowerCase();
                  return ie.startsWith("within 1") ? "≤1σ" : ie.startsWith("1–2") ? "1–2σ" : ie.startsWith("2–3") ? "2–3σ" : ie.startsWith(">3") ? ">3σ" : D;
                })(),
                color: D.includes(">3") ? "orange" : D.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${D}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: O })
          ] }),
          U && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: _.map(({ id: ie, label: B }) => {
                  const E = String(ie), K = E === yt.TrendIncreasing || E === yt.TrendDecreasing ? "fdp-spc-tag--trend" : oe ? "fdp-spc-tag--no-judgement" : w ? w.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : w.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Ze,
                    {
                      text: B,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${K}`,
                      "data-rule-id": E
                    },
                    E
                  );
                })
              }
            ),
            re && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const ie = oe ? "fdp-spc-tag--no-judgement" : w ? w.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : w.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", B = `${re}${W ? ` (${W})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Ze,
                  {
                    text: B,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${ie}`,
                    "aria-label": `Prime direction ${re}${W ? ` via ${W}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    T
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
            cy: b,
            r: 7,
            fill: "none",
            stroke: ke,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: C,
            cy: b,
            r: 5,
            fill: "#000",
            stroke: ke,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: C,
            cy: b,
            r: 2.5,
            fill: le,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        pe
      ]
    }
  );
}, Mo = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...u
}) => {
  const c = ea(), d = ea(), { start: f, mid: h, end: x } = Ja(), y = o || Rm[e], m = (i || Bm[e]).slice(0, 2), p = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": p,
      ...u,
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          a && /* @__PURE__ */ r.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ r.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ r.jsxs("linearGradient", { id: d, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: y, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: y, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(x) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${d})` : "#ffffff",
            ...a ? { filter: `url(#${c})` } : {},
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
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: m })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === En.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === En.Uncertain ? /* @__PURE__ */ r.jsx(
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
Mo.displayName = "SPCAssuranceIcon";
function Sg(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === ft.Common && n[s - 1] === n[s + 1] && n[s - 1] !== ft.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let i = o + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - o === 1 && s !== ft.Common && (n[o] = ft.Common), o = i;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const i = n[o], l = s - 1, u = l - o + 1;
        (i === ft.Common || u >= 2) && a.push({ start: o, end: l, category: i }), o = s;
      }
  }
  return a;
}
const kg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = vn(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, u = G.useMemo(
    () => l ? Za({
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
  ), c = G.useMemo(
    () => Array.from(
      new Set(u.map((m) => cr[m]?.narration).filter(Boolean))
    ),
    [u]
  ), d = l ? Qa(l.classification?.variation) : null, f = l ? cc(l.classification?.assurance) : null, h = u.length > 0, x = l ? l.classification?.variation === Fe.Neither && h : !1, y = G.useRef(null);
  return G.useEffect(() => {
    if (!a || !s || l == null) return;
    const m = `${s.seriesId}:${s.index}`;
    if (y.current !== m) {
      y.current = m;
      try {
        a({
          index: s.index,
          x: s.x,
          y: s.y,
          row: l,
          rules: u
        });
      } catch {
      }
    }
  }, [s?.seriesId, s?.index, s?.x, s?.y, l, u, a]), /* @__PURE__ */ r.jsxs(
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
          (d || x || f) && /* @__PURE__ */ r.jsx(
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
                    d?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : x ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), g = !(m.includes("not met") || m.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(m);
                      return /* @__PURE__ */ r.jsx(
                        Ze,
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
                children: u.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : u.map((m) => {
                  const p = String(m), k = p === yt.TrendIncreasing || p === yt.TrendDecreasing ? "fdp-spc-tag--trend" : x ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", M = cr[m]?.tooltip || p;
                  return /* @__PURE__ */ r.jsx(
                    Ze,
                    {
                      text: M,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${k}`,
                      "data-rule-id": p,
                      title: cr[m]?.tooltip
                    },
                    p
                  );
                })
              }
            )
          ] }),
          c.length > 0 && /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Summary:" }),
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
function Cg(e) {
  const { rows: t } = Do(e), n = Io(e);
  return { rows: t, visuals: n.visuals };
}
var sr = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(sr || {}), Os = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(Os || {});
function Ng(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: o,
    a11y: s,
    visualsEngine: i,
    meta: l,
    data: u,
    ariaLabel: c,
    height: d,
    showZones: f,
    showPoints: h,
    announceFocus: x,
    className: y,
    unit: m,
    targets: p,
    baselines: g,
    ghosts: k,
    settings: M,
    chartType: C,
    metricImprovement: b,
    gradientSequences: T,
    sequenceTransition: N,
    processLineWidth: j,
    showPartitionMarkers: _,
    showWarningsPanel: I,
    warningsFilter: S,
    enableNeutralNoJudgement: v,
    showTrendGatingExplanation: L,
    trendVisualMode: w,
    alwaysShowZeroY: $,
    alwaysShowHundredY: D,
    percentScale: P,
    showTrendStartMarkers: te,
    showFirstFavourableCrossMarkers: V,
    showTrendBridgeOverlay: H,
    showSignalsInspector: O,
    onSignalFocus: U,
    showIcons: re,
    showEmbeddedIcon: W,
    embeddedIconVariant: oe,
    embeddedIconRunLength: ke,
    showFocusIndicator: le,
    visualsScenario: ce,
    visualsEngineSettings: Z,
    source: ne,
    narrationContext: de,
    highlightOutOfControl: z
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (p !== void 0 || g !== void 0 || k !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && M !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (d !== void 0 || y !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (c !== void 0 || x !== void 0 || de !== void 0 || m !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (ce !== void 0 || Z !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && z !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && ne !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const fe = n?.data ?? u ?? [], F = n?.targets ?? p, R = n?.baselines ?? g, Y = n?.ghosts ?? k, se = a?.chartType ?? C ?? wt.XmR, ue = a?.metricImprovement ?? b ?? Ee.Neither, pe = a?.settings ?? M, ie = t?.axes?.alwaysShowZeroY ?? $ ?? !0, B = t?.axes?.alwaysShowHundredY ?? D ?? !1, E = t?.axes?.percentScale ?? P ?? !1, X = t?.visuals?.gradientSequences ?? T ?? !1, K = t?.visuals?.sequenceTransition ?? N ?? "slope", A = t?.visuals?.processLineWidth ?? j ?? 2, q = t?.visuals?.trend?.visualMode ?? w ?? "ungated", Q = t?.visuals?.trend?.showGatingExplanation ?? L ?? !0, ee = t?.visuals?.rules?.enableNeutralNoJudgement ?? v ?? !0, J = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, ae = t?.visuals?.showZones, me = t?.visuals?.showPoints, ve = t?.visuals?.rules?.highlightOutOfControl, ye = o?.height, Ce = o?.className, ge = s?.label, Ae = s?.unit, We = s?.narrationContext, at = i?.scenario, ze = i?.settings, et = l?.source, Mt = t?.overlays?.partitionMarkers ?? _ ?? !1, _t = t?.overlays?.trendStartMarkers ?? te ?? !1, vt = t?.overlays?.firstFavourableCrossMarkers ?? V ?? !1, st = t?.overlays?.trendBridge ?? H ?? !1, it = t?.inspector?.show ?? O ?? !1, qt = t?.inspector?.onFocus ?? U, zr = t?.warnings?.show ?? I ?? !1, Tn = t?.warnings?.filter ?? S, gr = t?.icons?.show ?? re ?? !1, Dn = t?.icons?.embedded?.show ?? W ?? !0, Gn = t?.icons?.embedded?.variant ?? oe ?? Nn.Classic, xr = t?.icons?.embedded?.runLength ?? ke, In = t?.overlays?.focusIndicator ?? le ?? !0;
  return {
    effData: fe,
    effTargets: F,
    effBaselines: R,
    effGhosts: Y,
    effChartTypeCore: se,
    effMetricImprovementCore: ue,
    effEngineSettings: pe,
    effHeight: ye,
    effClassName: Ce,
    effAriaLabel: ge,
    effUnit: Ae,
    effNarrationContext: We,
    effShowZones: ae,
    effShowPoints: me,
    effHighlightOutOfControl: ve,
    effVisualsScenario: at,
    effVisualsEngineSettings: ze,
    effSource: et,
    effAlwaysShowZeroY: ie,
    effAlwaysShowHundredY: B,
    effPercentScale: E,
    effGradientSequences: X,
    effSequenceTransition: K,
    effProcessLineWidth: A,
    effTrendVisualMode: q,
    effShowTrendGatingExplanation: Q,
    effEnableNeutralNoJudgement: ee,
    effEnableRules: J,
    effShowPartitionMarkers: Mt,
    effShowTrendStartMarkers: _t,
    effShowFirstFavourableCrossMarkers: vt,
    effShowTrendBridgeOverlay: st,
    effShowSignalsInspector: it,
    effOnSignalFocus: qt,
    effShowWarningsPanel: zr,
    effWarningsFilter: Tn,
    effShowIcons: gr,
    effShowEmbeddedIcon: Dn,
    effEmbeddedIconVariant: Gn,
    effEmbeddedIconRunLength: xr,
    effShowFocusIndicator: In
  };
}
let jg = 0;
const Tg = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: n = 260,
  showZones: a = !0,
  showPoints: o = !0,
  announceFocus: s = !1,
  className: i,
  unit: l,
  highlightOutOfControl: u = !0,
  chartType: c = wt.XmR,
  metricImprovement: d = Ee.Neither,
  enableRules: f = !0,
  showIcons: h = !1,
  showEmbeddedIcon: x = !0,
  embeddedIconVariant: y = Nn.Classic,
  embeddedIconRunLength: m,
  targets: p,
  baselines: g,
  ghosts: k,
  settings: M,
  narrationContext: C,
  gradientSequences: b = !1,
  sequenceTransition: T = sr.Slope,
  processLineWidth: N = 2,
  showWarningsPanel: j = !1,
  warningsFilter: _,
  enableNeutralNoJudgement: I = !0,
  showTrendGatingExplanation: S = !0,
  trendVisualMode: v = Os.Ungated,
  disableTrendSideGating: L,
  source: w,
  alwaysShowZeroY: $ = !0,
  alwaysShowHundredY: D = !1,
  percentScale: P = !1,
  showPartitionMarkers: te = !1,
  showTrendStartMarkers: V = !1,
  showFirstFavourableCrossMarkers: H = !1,
  showTrendBridgeOverlay: O = !1,
  showSignalsInspector: U = !1,
  onSignalFocus: re,
  visualsScenario: W = hc.None,
  showFocusIndicator: oe = !0,
  visualsEngineSettings: ke,
  ui: le,
  input: ce,
  engine: Z,
  // New grouped aliases
  container: ne,
  a11y: de,
  visualsEngine: z,
  meta: fe
}) => {
  const F = G.useCallback(
    (Te) => String(Te).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((qe) => qe.length ? qe[0].toUpperCase() + qe.slice(1) : qe).join(" "),
    []
  ), R = G.useCallback(
    (Te) => String(Te).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Se) => Se.length ? Se[0].toUpperCase() + Se.slice(1) : Se).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && L !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: Y,
    effTargets: se,
    effBaselines: ue,
    effGhosts: pe,
    effChartTypeCore: ie,
    effMetricImprovementCore: B,
    effEngineSettings: E,
    effAlwaysShowZeroY: X,
    effAlwaysShowHundredY: K,
    effPercentScale: A,
    effGradientSequences: q,
    effSequenceTransition: Q,
    effProcessLineWidth: ee,
    effTrendVisualMode: J,
    effShowTrendGatingExplanation: ae,
    effEnableNeutralNoJudgement: me,
    effEnableRules: ve,
    effShowPartitionMarkers: ye,
    effShowTrendStartMarkers: Ce,
    effShowFirstFavourableCrossMarkers: ge,
    effShowTrendBridgeOverlay: Ae,
    effShowSignalsInspector: We,
    effOnSignalFocus: at,
    effShowWarningsPanel: ze,
    effWarningsFilter: et,
    effShowIcons: Mt,
    effShowEmbeddedIcon: _t,
    effEmbeddedIconVariant: vt,
    effEmbeddedIconRunLength: st,
    effShowFocusIndicator: it,
    effHeight: qt,
    effClassName: zr,
    effAriaLabel: Tn,
    effUnit: gr,
    effNarrationContext: Dn,
    effShowZones: Gn,
    effShowPoints: xr,
    effHighlightOutOfControl: In,
    effVisualsScenario: br,
    effVisualsEngineSettings: vr,
    effSource: ts
  } = Ng({
    data: e,
    targets: p,
    baselines: g,
    ghosts: k,
    settings: M,
    chartType: c,
    metricImprovement: d,
    enableRules: f,
    gradientSequences: b,
    sequenceTransition: T,
    processLineWidth: N,
    showPartitionMarkers: te,
    showWarningsPanel: j,
    warningsFilter: _,
    enableNeutralNoJudgement: I,
    showTrendGatingExplanation: S,
    trendVisualMode: v,
    alwaysShowZeroY: $,
    alwaysShowHundredY: D,
    percentScale: P,
    showTrendStartMarkers: V,
    showFirstFavourableCrossMarkers: H,
    showTrendBridgeOverlay: O,
    showSignalsInspector: U,
    onSignalFocus: re,
    showIcons: h,
    showEmbeddedIcon: x,
    embeddedIconVariant: y,
    embeddedIconRunLength: m,
    showFocusIndicator: oe,
    ui: le,
    input: ce,
    engine: Z,
    // pass grouped aliases through so normalize can prefer them
    container: ne,
    a11y: de,
    visualsEngine: z,
    meta: fe
  }), $n = Tn ?? t, Et = qt ?? n, Xt = zr ?? i, ut = gr ?? l, Xe = Dn ?? C, Mn = Gn ?? a, ns = xr ?? o, rs = In ?? u, Dt = br ?? W, yn = vr ?? ke, Yn = ts ?? w, Kt = G.useMemo(() => Y.map((Te, Se) => ({
    x: Te.x,
    value: Te.y,
    target: se?.[Se] ?? void 0,
    baseline: ue?.[Se] ?? void 0,
    ghost: pe?.[Se] ?? void 0
  })), [Y, se, ue, pe]), yr = G.useMemo(() => {
    try {
      const Te = E?.minimumPointsPartition ?? E?.minimumPoints, Se = {};
      typeof Te == "number" && !isNaN(Te) && (Se.minimumPoints = Te, Kt.filter(
        (Le) => !Le.ghost && typeof Le.value == "number"
      ).length >= Te && (Se.chartLevelEligibility = !0)), E?.enableFourOfFiveRule != null && (Se.enableFourOfFiveRule = !!E.enableFourOfFiveRule), yn && Object.assign(Se, yn);
      const qe = (nt) => {
        switch (nt) {
          case wt.XmR:
            return $t.XmR;
          case wt.T:
            return $t.T;
          case wt.G:
            return $t.G;
          default:
            return $t.XmR;
        }
      }, lt = (nt) => {
        switch (nt) {
          case Ee.Up:
            return Oe.Up;
          case Ee.Down:
            return Oe.Down;
          default:
            return Oe.Neither;
        }
      }, De = {
        chartType: qe(ie),
        metricImprovement: lt(B),
        data: Kt,
        settings: Object.keys(Se).length ? Se : void 0
      }, { visuals: Bt } = Zm(De, Dt, {
        trendVisualMode: J === Os.Ungated ? hr.Ungated : hr.Gated,
        enableNeutralNoJudgement: me
      });
      return Bt || [];
    } catch {
      return [];
    }
  }, [
    Kt,
    ie,
    B,
    J,
    me,
    E,
    Dt,
    yn
  ]), dt = G.useMemo(() => {
    try {
      const Te = E?.minimumPointsPartition ?? E?.minimumPoints, Se = {};
      typeof Te == "number" && !isNaN(Te) && (Se.minimumPoints = Te, Kt.filter(
        (Lt) => !Lt.ghost && typeof Lt.value == "number"
      ).length >= Te && (Se.chartLevelEligibility = !0)), E?.enableFourOfFiveRule != null && (Se.enableFourOfFiveRule = !!E.enableFourOfFiveRule), yn && Object.assign(Se, yn);
      const qe = (Le) => {
        switch (Le) {
          case wt.XmR:
            return $t.XmR;
          case wt.T:
            return $t.T;
          case wt.G:
            return $t.G;
          default:
            return $t.XmR;
        }
      }, lt = (Le) => {
        switch (Le) {
          case Ee.Up:
            return Oe.Up;
          case Ee.Down:
            return Oe.Down;
          default:
            return Oe.Neither;
        }
      }, De = {
        chartType: qe(ie),
        metricImprovement: lt(B),
        data: Kt,
        settings: Object.keys(Se).length ? Se : void 0
      }, { rows: Bt } = Cg(De), nt = (Le) => {
        switch (Le) {
          case Be.ImprovementHigh:
          case Be.ImprovementLow:
            return Fe.Improvement;
          case Be.ConcernHigh:
          case Be.ConcernLow:
            return Fe.Concern;
          case Be.NeitherHigh:
          case Be.NeitherLow:
            return Fe.Neither;
          case Be.CommonCause:
          default:
            return Fe.Neither;
        }
      };
      return Bt.map(
        (Le, Lt) => ({
          data: {
            value: Le.value,
            ghost: !!Le.ghost
          },
          partition: { id: Le.partitionId },
          limits: {
            mean: Le.mean,
            ucl: Le.upperProcessLimit,
            lcl: Le.lowerProcessLimit,
            oneSigma: { upper: Le.upperOneSigma, lower: Le.lowerOneSigma },
            twoSigma: { upper: Le.upperTwoSigma, lower: Le.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!Le.singlePointUp, down: !!Le.singlePointDown },
            twoOfThree: { up: !!Le.twoSigmaUp, down: !!Le.twoSigmaDown },
            fourOfFive: { up: !!Le.fourOfFiveUp, down: !!Le.fourOfFiveDown },
            shift: { up: !!Le.shiftUp, down: !!Le.shiftDown },
            trend: { up: !!Le.trendUp, down: !!Le.trendDown }
          },
          classification: {
            variation: nt(Le.variationIcon),
            neutralSpecialCauseValue: Le.variationIcon === Be.NeitherHigh || Le.variationIcon === Be.NeitherLow ? Le.specialCauseImprovementValue ?? Le.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: Kt[Lt]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [Kt, ie, B, E, yn]) || null, Zt = (dt || []).slice().reverse().find((Te) => Te.limits.mean != null), wn = Zt?.limits.mean ?? null, qn = G.useMemo(() => {
    const Te = [];
    try {
      const Se = dt, qe = E?.minimumPoints ?? 13, lt = E?.minimumPointsPartition ?? 12;
      if (Se && Se.length) {
        const De = Se.filter(
          (nt) => !nt.data.ghost && nt.data.value != null
        ).length;
        De < qe && Te.push({
          code: va.InsufficientPointsGlobal,
          severity: Wt.Warning,
          category: ba.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: De, minimumPoints: qe }
        });
        const Bt = /* @__PURE__ */ new Map();
        for (const nt of Se) {
          const Le = nt.partition.id ?? 0, Lt = Bt.get(Le) || { size: 0, nonGhost: 0 };
          Lt.size += 1, !nt.data.ghost && nt.data.value != null && (Lt.nonGhost += 1), Bt.set(Le, Lt);
        }
        for (const [nt, Le] of Bt)
          Le.nonGhost > 0 && Le.nonGhost < lt && Te.push({
            code: va.InsufficientPointsPartition,
            severity: Wt.Warning,
            category: ba.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: nt,
              nonGhostCount: Le.nonGhost,
              minimumPointsPartition: lt
            }
          });
      }
    } catch {
    }
    return Te;
  }, [dt, E?.minimumPoints, E?.minimumPointsPartition]), he = G.useMemo(() => qn.length ? et ? qn.filter((Te) => !(et.severities && Te.severity && !et.severities.includes(Te.severity) || et.categories && Te.category && !et.categories.includes(Te.category) || et.codes && !et.codes.includes(Te.code))) : qn : [], [qn, et]), [je, xe] = G.useState(""), Ie = G.useRef("");
  G.useEffect(() => {
    if (!ze) {
      Ie.current !== "" && (Ie.current = "", xe(""));
      return;
    }
    const Te = he.length;
    if (!Te) {
      const De = "Diagnostics: no warnings.";
      De !== Ie.current && (Ie.current = De, xe(De));
      return;
    }
    const Se = {
      error: he.filter(
        (De) => De.severity === Wt.Error
      ).length,
      warning: he.filter(
        (De) => De.severity === Wt.Warning
      ).length,
      info: he.filter(
        (De) => De.severity === Wt.Info
      ).length
    }, qe = [];
    Se.error && qe.push(
      `${Se.error} error${Se.error === 1 ? "" : "s"}`
    ), Se.warning && qe.push(
      `${Se.warning} warning${Se.warning === 1 ? "" : "s"}`
    ), Se.info && qe.push(`${Se.info} info`);
    const lt = `Diagnostics updated: ${Te} warning${Te === 1 ? "" : "s"} (${qe.join(", ")}).`;
    lt !== Ie.current && (Ie.current = lt, xe(lt));
  }, [ze, he]);
  const tt = Zt?.limits.ucl ?? null, Ge = Zt?.limits.lcl ?? null, Ye = Zt?.limits.oneSigma.upper ?? null, Ut = Zt?.limits.oneSigma.lower ?? null, Rt = Zt?.limits.twoSigma.upper ?? null, _n = Zt?.limits.twoSigma.lower ?? null, Re = wn != null && Ye != null ? Math.abs(Ye - wn) : 0, Ke = G.useMemo(
    () => [{ id: "process", data: Y, color: "#A6A6A6" }],
    [Y]
  ), Pt = G.useMemo(() => {
    if (A) {
      const De = Y.map((Le) => Le.y), Bt = Math.max(100, ...De), nt = Math.min(0, ...De);
      return [nt < 0 ? nt : 0, Bt > 100 ? Bt : 100];
    }
    const Se = [...Y.map((De) => De.y)];
    if ([wn, tt, Ge, Ye, Ut, Rt, _n].forEach((De) => {
      De != null && Se.push(De);
    }), se && se.forEach((De) => {
      typeof De == "number" && !isNaN(De) && Se.push(De);
    }), !Se.length) return;
    let qe = Math.min(...Se), lt = Math.max(...Se);
    return X && (qe = Math.min(0, qe)), K && (lt = Math.max(100, lt)), [qe, lt];
  }, [
    Y,
    wn,
    tt,
    Ge,
    Ye,
    Ut,
    Rt,
    _n,
    se,
    X,
    K,
    A
  ]), Vr = G.useMemo(() => {
    const Te = (Se) => {
      const qe = Se.filter(
        (De) => typeof De == "number" && !isNaN(De)
      );
      if (!qe.length) return null;
      const lt = qe[0];
      return qe.every((De) => De === lt) ? lt : null;
    };
    if (dt && dt.length) {
      const Se = Te(dt.map((qe) => qe.target));
      if (Se != null) return Se;
    }
    return se && se.length ? Te(se) : null;
  }, [dt, se]), Gr = G.useMemo(() => {
    const Te = Y.map((Se) => Se.x);
    return Sc({
      values: Y.map((Se) => Se.y),
      dates: Te,
      providedUnit: ut || Xe?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [Y, ut, Xe?.measureUnit]), Sn = ut ?? Xe?.measureUnit ?? Gr.unit, wr = G.useMemo(() => Sn ? { ...Xe || {}, measureUnit: Sn } : Xe, [Xe, Sn]), Po = G.useMemo(() => {
    if (!dt) return [];
    const Te = [];
    for (let Se = 1; Se < dt.length; Se++)
      dt[Se].partition.id !== dt[Se - 1].partition.id && Te.push(Se);
    return Te;
  }, [dt]), gu = G.useMemo(() => {
    if (!_t || !dt?.length) return null;
    const Te = dt, Se = E?.minimumPoints ?? 13;
    if (Te.filter(
      (It) => !It.data.ghost && It.data.value != null
    ).length < Se) return null;
    let lt = -1;
    for (let It = Te.length - 1; It >= 0; It--) {
      const Qt = Te[It];
      if (Qt && Qt.data.value != null && !Qt.data.ghost) {
        lt = It;
        break;
      }
    }
    if (lt === -1) return null;
    const De = Te[lt], nt = De.classification?.variation, Le = De.classification?.assurance, Lt = nt === Fe.Neither && !!De.classification?.neutralSpecialCauseValue, xu = Le === ct.Pass ? En.Pass : Le === ct.Fail ? En.Fail : En.Uncertain;
    let St;
    if (nt === Fe.Suppressed) {
      const It = !!De.rules.singlePoint.up, Qt = !!De.rules.singlePoint.down;
      B === Ee.Up ? It ? St = Me.Higher : Qt && (St = Me.Lower) : B === Ee.Down ? Qt ? St = Me.Lower : It && (St = Me.Higher) : St = Me.Higher;
    } else if (nt === Fe.Neither && Lt) {
      const It = De.rules.singlePoint.up || De.rules.twoOfThree.up || De.rules.fourOfFive.up || De.rules.shift.up || De.rules.trend.up, Qt = De.rules.singlePoint.down || De.rules.twoOfThree.down || De.rules.fourOfFive.down || De.rules.shift.down || De.rules.trend.down;
      It && !Qt ? St = Me.Higher : Qt && !It ? St = Me.Lower : St = Me.Higher;
    }
    let _r;
    B === Ee.Up ? _r = ot.HigherIsBetter : B === Ee.Down ? _r = ot.LowerIsBetter : _r = ot.ContextDependent;
    const Xn = 80, Lo = De.rules.singlePoint.up || De.rules.twoOfThree.up || De.rules.fourOfFive.up || De.rules.shift.up || De.rules.trend.up, Fo = De.rules.singlePoint.down || De.rules.twoOfThree.down || De.rules.fourOfFive.down || De.rules.shift.down || De.rules.trend.down;
    let Kn = Be.CommonCause;
    return nt === Fe.Improvement ? Kn = Be.ImprovementHigh : nt === Fe.Concern ? Kn = Be.ConcernHigh : nt === Fe.Neither && (Lt ? St === Me.Lower || Fo && !Lo ? Kn = Be.NeitherLow : Kn = Be.NeitherHigh : Kn = Be.CommonCause), /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(nt),
              "data-trend-raw": St ? String(St) : "none",
              "data-trend": St ? String(St) : "none",
              "data-polarity": String(_r ?? "unknown"),
              style: { width: Xn, height: Xn },
              children: /* @__PURE__ */ r.jsx(
                $o,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: Kn,
                    improvementDirection: B,
                    polarity: _r,
                    specialCauseNeutral: Lt,
                    highSideSignal: Lo,
                    lowSideSignal: Fo,
                    ...St ? { trend: St } : {}
                  },
                  letterMode: B === Ee.Neither ? Br.Direction : Br.Polarity,
                  size: Xn,
                  variant: vt,
                  runLength: vt === Nn.TriangleWithRun ? st : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(Le),
              style: { width: Xn, height: Xn },
              children: /* @__PURE__ */ r.jsx(
                Mo,
                {
                  status: xu,
                  size: Xn,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${lt}`
    );
  }, [
    _t,
    dt,
    B,
    E?.minimumPoints,
    vt,
    st
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: Xt ? `fdp-spc-chart-wrapper ${Xt}` : "fdp-spc-chart-wrapper",
      children: [
        _t && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: gu
          }
        ),
        /* @__PURE__ */ r.jsx(
          Gh,
          {
            height: Et,
            ariaLabel: $n,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(Yh, { series: Ke, yDomain: Pt, children: /* @__PURE__ */ r.jsx(
              Dg,
              {
                series: Ke,
                showPoints: ns,
                announceFocus: s,
                limits: { mean: wn, ucl: tt, lcl: Ge, sigma: Re, onePos: Ye, oneNeg: Ut, twoPos: Rt, twoNeg: _n },
                showZones: Mn,
                highlightOutOfControl: rs,
                engineRows: dt,
                uniformTarget: Vr,
                visualCategories: yr,
                enableRules: ve,
                showIcons: Mt,
                narrationContext: wr,
                gradientSequences: q,
                sequenceTransition: Q,
                processLineWidth: ee,
                effectiveUnit: Sn,
                partitionMarkers: ye ? Po : [],
                ariaLabel: $n,
                enableNeutralNoJudgement: me,
                showTrendGatingExplanation: ae,
                metricImprovement: B,
                showTrendStartMarkers: Ce,
                showFirstFavourableCrossMarkers: ge,
                showTrendBridgeOverlay: Ae,
                showSignalsInspector: We,
                onSignalFocus: at,
                showFocusIndicator: it
              }
            ) })
          }
        ),
        Yn && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Yn == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          Yn
        ] }) : Yn }),
        ze && je && /* @__PURE__ */ r.jsx(
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
            children: je
          }
        ),
        ze && he.length > 0 && /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ r.jsx(
                bn,
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
                  rows: he.map((Te) => {
                    let Se = "grey";
                    return Te.severity === Wt.Error ? Se = "red" : Te.severity === Wt.Warning ? Se = "orange" : Te.severity === Wt.Info && (Se = "blue"), [
                      {
                        node: /* @__PURE__ */ r.jsx(
                          Ze,
                          {
                            color: Se,
                            text: (Te.severity ? String(Te.severity) : "Info").replace(
                              /^[a-z]/,
                              (qe) => qe.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: Te.category ? /* @__PURE__ */ r.jsx(
                          Ze,
                          {
                            color: "purple",
                            text: R(Te.category)
                          }
                        ) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ r.jsx(Ze, { color: "grey", text: F(Te.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ r.jsx("span", { children: Te.message }),
                          Te.context && Object.keys(Te.context).length > 0 && /* @__PURE__ */ r.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(Te.context, null, 2) })
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
}, Dg = ({
  series: e,
  showPoints: t,
  announceFocus: n,
  limits: a,
  showZones: o,
  highlightOutOfControl: s,
  engineRows: i,
  enableRules: l,
  showIcons: u,
  narrationContext: c,
  gradientSequences: d,
  sequenceTransition: f,
  processLineWidth: h,
  effectiveUnit: x,
  partitionMarkers: y,
  ariaLabel: m,
  metricImprovement: p,
  enableNeutralNoJudgement: g = !0,
  showTrendGatingExplanation: k = !0,
  showTrendStartMarkers: M = !1,
  showFirstFavourableCrossMarkers: C = !1,
  showTrendBridgeOverlay: b = !1,
  showSignalsInspector: T = !1,
  onSignalFocus: N,
  visualCategories: j,
  uniformTarget: _,
  showFocusIndicator: I = !1
}) => {
  const S = Vn(), v = jn();
  if (!S) return null;
  const { xScale: L, yScale: w } = S, $ = G.useRef(
    "spc-seq-" + ++jg
  ), D = vn(), P = e[0]?.data || [], te = G.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const F = /* @__PURE__ */ new Set();
    return P.forEach((R, Y) => {
      typeof a.ucl == "number" && R.y > a.ucl && F.add(Y), typeof a.lcl == "number" && R.y < a.lcl && F.add(Y);
    }), F;
  }, [a.ucl, a.lcl, P]), V = G.useMemo(() => {
    if (!i || !i.length) return null;
    const F = [];
    return i.forEach((R, Y) => {
      const se = R.classification.variation === Fe.Concern || R.classification.variation === Fe.Improvement || !!R.classification.neutralSpecialCauseValue, ue = !!R.rules.singlePoint.up || !!R.rules.twoOfThree.up || !!R.rules.fourOfFive.up || !!R.rules.shift.up || !!R.rules.trend.up, pe = !!R.rules.singlePoint.down || !!R.rules.twoOfThree.down || !!R.rules.fourOfFive.down || !!R.rules.shift.down || !!R.rules.trend.down;
      F[Y] = {
        variation: R.classification.variation,
        assurance: R.classification.assurance,
        special: se,
        concern: R.classification.variation === Fe.Concern,
        improvement: R.classification.variation === Fe.Improvement,
        trendUp: !!R.rules.trend.up,
        trendDown: !!R.rules.trend.down,
        upAny: ue,
        downAny: pe,
        neutralSpecial: !!R.classification.neutralSpecialCauseValue,
        shiftUp: !!R.rules.shift.up,
        shiftDown: !!R.rules.shift.down,
        twoOfThreeUp: !!R.rules.twoOfThree.up,
        twoOfThreeDown: !!R.rules.twoOfThree.down,
        fourOfFiveUp: !!R.rules.fourOfFive.up,
        fourOfFiveDown: !!R.rules.fourOfFive.down,
        partitionId: R.partition.id ?? null
      };
    }), F;
  }, [i]), H = G.useMemo(() => (j || []).map((F) => F === mt.Improvement ? ft.Improvement : F === mt.Concern ? ft.Concern : F === mt.NoJudgement ? ft.NoJudgement : ft.Common), [j]), O = G.useMemo(() => !d || !H.length ? [] : Sg(H, !0), [d, H, m]), U = G.useMemo(
    () => P.map((F) => L(F.x instanceof Date ? F.x : new Date(F.x))),
    [P, L]
  ), re = L.range()[1], W = G.useMemo(() => {
    if (!i || !i.length)
      return null;
    let F = Number.POSITIVE_INFINITY, R = Number.POSITIVE_INFINITY;
    if (i.forEach((E, X) => {
      E.rules.trend.up && (F = Math.min(F, X)), E.rules.trend.down && (R = Math.min(R, X));
    }), !Number.isFinite(F) && !Number.isFinite(R))
      return null;
    const Y = F <= R, se = Y ? zt.Up : zt.Down, ue = Y ? F : R, pe = (E) => p == null || p === Ee.Neither || E == null || typeof E.data.value != "number" || typeof E.limits.mean != "number" ? !1 : se === zt.Up ? p === Ee.Up ? E.data.value > E.limits.mean : E.data.value < E.limits.mean : p === Ee.Down ? E.data.value < E.limits.mean : E.data.value > E.limits.mean;
    let ie = null;
    for (let E = ue; E < i.length; E++) {
      const X = i[E];
      if (!(Y ? !!X.rules.trend.up : !!X.rules.trend.down)) break;
      if (pe(X)) {
        ie = E;
        break;
      }
    }
    let B = !1;
    if (ie != null) {
      let E = 0;
      for (let X = ie; X < i.length; X++) {
        const K = i[X];
        if (!(Y ? !!K.rules.trend.up : !!K.rules.trend.down)) break;
        pe(K) && E++;
      }
      B = E >= 2;
    }
    return {
      direction: se,
      detectedAt: ue,
      firstFavourableCrossAt: ie,
      persistedAcrossMean: B
    };
  }, [i, p]), oe = G.useMemo(() => {
    if (!i || !i.length) return null;
    const F = (R) => {
      const Y = [];
      let se = null, ue = null;
      for (let pe = 0; pe < i.length; pe++) {
        const ie = i[pe], B = R(ie), E = typeof B == "number" && !isNaN(B) ? B : null;
        if (E == null) {
          se !== null && ue != null && (Y.push({
            x1: U[se],
            x2: U[pe - 1],
            y: w(ue)
          }), se = null, ue = null);
          continue;
        }
        if (se === null) {
          se = pe, ue = E;
          continue;
        }
        ue != null && Math.abs(E - ue) <= 1e-9 || (ue != null && Y.push({
          x1: U[se],
          x2: U[pe - 1],
          y: w(ue)
        }), se = pe, ue = E);
      }
      return se !== null && ue != null && Y.push({
        x1: U[se],
        x2: U[i.length - 1],
        y: w(ue)
      }), Y;
    };
    return {
      mean: F((R) => R.limits.mean ?? null),
      ucl: F((R) => R.limits.ucl ?? null),
      lcl: F((R) => R.limits.lcl ?? null),
      onePos: F((R) => R.limits.oneSigma.upper ?? null),
      oneNeg: F((R) => R.limits.oneSigma.lower ?? null),
      twoPos: F((R) => R.limits.twoSigma.upper ?? null),
      twoNeg: F((R) => R.limits.twoSigma.lower ?? null)
    };
  }, [i, U, w]), ke = G.useMemo(() => O.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${$.current}-grad-common`,
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
    O.map((F, R) => {
      const Y = `${$.current}-grad-${R}`;
      let se, ue = 0.28, pe = 0.12, ie = 0.045;
      switch (F.category) {
        case ft.Concern:
          se = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", ue = 0.28, pe = 0.12, ie = 0.045;
          break;
        case ft.Improvement:
          se = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", ue = 0.26, pe = 0.11, ie = 0.045;
          break;
        case ft.NoJudgement:
          se = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", ue = 0.26, pe = 0.11, ie = 0.045;
          break;
        default:
          se = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: Y, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: se, stopOpacity: ue }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: se, stopOpacity: pe }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: se, stopOpacity: ie })
      ] }, Y);
    })
  ] }) : null, [O]), le = G.useMemo(() => {
    if (!O.length) return null;
    const [F] = w.domain(), R = w(F), Y = O.map((se, ue) => {
      const { start: pe, end: ie, category: B } = se;
      if (pe < 0 || ie >= U.length || pe > ie)
        return null;
      const E = U[pe], X = U[ie];
      let K = "";
      if (B === ft.Common) {
        const A = ue > 0 ? O[ue - 1] : null, q = ue < O.length - 1 ? O[ue + 1] : null, Q = A ? U[A.end] : 0, ee = A ? w(P[A.end].y) : R, J = q ? U[q.start] : re, ae = q ? w(P[q.start].y) : R;
        K = `M ${Q} ${R}`, K += ` L ${Q} ${ee}`;
        for (let me = pe; me <= ie; me++)
          K += ` L ${U[me]} ${w(P[me].y)}`;
        K += ` L ${J} ${ae}`, K += ` L ${J} ${R} Z`;
      } else {
        const A = ue > 0 ? O[ue - 1] : null, q = ue < O.length - 1 ? O[ue + 1] : null, Q = A && A.category !== ft.Common, ee = q && q.category !== ft.Common, J = w(P[pe].y), ae = w(P[ie].y);
        let me = E, ve = X;
        if (Q) {
          const ye = U[A.end], Ce = w(P[A.end].y), ge = P[pe].y - P[A.end].y;
          f === sr.Slope && ge > 0 ? (K = `M ${ye} ${Ce} L ${E} ${J}`, me = ye) : (K = `M ${E} ${R} L ${E} ${J}`, me = E);
        } else
          K = `M ${E} ${R} L ${E} ${J}`;
        for (let ye = pe + 1; ye <= ie; ye++)
          K += ` L ${U[ye]} ${w(P[ye].y)}`;
        if (K += ` L ${X} ${ae}`, ee) {
          const ye = U[q.start], Ce = w(P[q.start].y), ge = P[q.start].y - P[ie].y;
          (f === sr.Slope && ge <= 0 || f === sr.Extend) && (K += ` L ${ye} ${Ce}`, ve = ye);
        }
        if (K += ` L ${ve} ${R}`, K += ` L ${me} ${R} Z`, f === sr.Neutral && Q) {
          const ye = U[A.end], Ce = w(P[A.end].y), ge = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${ye} ${R} L ${ye} ${Ce} L ${E} ${J} L ${E} ${R} Z`,
              fill: `url(#${$.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${ue}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            ge,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: K,
                fill: `url(#${$.current}-grad-${ue})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${ue}`
            )
          ] }, `seq-group-${ue}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: K,
          fill: `url(#${$.current}-grad-${ue})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${ue}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: Y });
  }, [O, U, re, w, P, f]), ce = G.useMemo(() => {
    if (!c?.timeframe && P.length >= 2) {
      const F = P.map((ie) => ie.x instanceof Date ? ie.x : new Date(ie.x)), R = new Date(Math.min(...F.map((ie) => ie.getTime()))), Y = new Date(Math.max(...F.map((ie) => ie.getTime()))), se = Math.round((Y.getTime() - R.getTime()) / 864e5) || 0;
      if (se < 14)
        return `The chart shows a timeframe of ${se + 1} days`;
      const ue = Math.round(se / 7);
      return ue < 20 ? `The chart shows a timeframe of ${ue} weeks` : `The chart shows a timeframe of ${(Y.getFullYear() - R.getFullYear()) * 12 + (Y.getMonth() - R.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, P]), Z = (F) => {
    const R = F % 10, Y = F % 100;
    return R === 1 && Y !== 11 ? `${F}st` : R === 2 && Y !== 12 ? `${F}nd` : R === 3 && Y !== 13 ? `${F}rd` : `${F}th`;
  }, ne = (F) => `${Z(F.getDate())} ${F.toLocaleString("en-GB", { month: "long" })}, ${F.getFullYear()}`, de = (F) => ({
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
  }), z = G.useCallback(
    ({
      index: F,
      x: R,
      y: Y
    }) => {
      const se = i?.[F], ue = R instanceof Date ? R : new Date(R), pe = ne(ue), ie = c?.measureUnit ? ` ${c.measureUnit}` : "", B = c?.measureName ? ` ${c.measureName}` : "";
      if (!se)
        return `General summary is: ${ce ? ce + ". " : ""}Point ${F + 1}, ${pe}, ${Y}${ie}${B}`;
      const E = Qa(se.classification?.variation) || "Variation", X = Za(de(se)), K = X.length ? ` Rules: ${[...new Set(X.map((q) => cr[q].narration))].join("; ")}.` : " No special cause rules.", A = [];
      return c?.measureName && A.push(`Measure: ${c.measureName}.`), c?.datasetContext && A.push(`${c.datasetContext}.`), c?.organisation && A.push(`Organisation: ${c.organisation}.`), c?.additionalNote && A.push(c.additionalNote), [
        "General summary is:",
        ...A,
        `Point ${F + 1} recorded on `,
        pe + ",",
        `with a value of ${Y} ${ie}${B}`,
        E + ".",
        K
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, ce]
  ), fe = G.useCallback(
    (F, R) => i?.[F] ? z({
      index: F,
      seriesId: "process",
      x: R.x instanceof Date ? R.x : new Date(R.x),
      y: R.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, z]
  );
  return /* @__PURE__ */ r.jsx(Dm, { children: /* @__PURE__ */ r.jsxs(
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
            width: S.xScale.range()[1] + 56 + 16,
            height: S.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(Pi, { type: "x" }),
              /* @__PURE__ */ r.jsx(Pi, { type: "y" }),
              /* @__PURE__ */ r.jsx(qh, { axis: "y" }),
              ke,
              le,
              y.map((F, R) => {
                const Y = P[F];
                if (!Y) return null;
                const se = L(Y.x instanceof Date ? Y.x : new Date(Y.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: se,
                    x2: se,
                    y1: 0,
                    y2: w.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${R}`
                );
              }),
              oe?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                oe.mean.map((F, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: F.x1,
                    x2: F.x2,
                    y1: F.y,
                    y2: F.y
                  },
                  `mean-${R}`
                )),
                oe.mean.map((F, R) => {
                  if (R === oe.mean.length - 1) return null;
                  const Y = oe.mean[R + 1];
                  if (!Y || F.y === Y.y) return null;
                  const ue = Math.max(4, Y.x1 - F.x2 || 0) * 0.5, pe = `M ${F.x2},${F.y} C ${F.x2 + ue},${F.y} ${Y.x1 - ue},${Y.y} ${Y.x1},${Y.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: pe,
                      fill: "none"
                    },
                    `mean-join-${R}`
                  );
                })
              ] }) : null,
              _ != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              oe?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    oe.ucl.map((F, R) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: F.x1,
                        x2: F.x2,
                        y1: F.y,
                        y2: F.y,
                        strokeWidth: 2
                      },
                      `ucl-${R}`
                    )),
                    oe.ucl.map((F, R) => {
                      if (R === oe.ucl.length - 1) return null;
                      const Y = oe.ucl[R + 1];
                      if (!Y || F.y === Y.y) return null;
                      const ue = Math.max(4, Y.x1 - F.x2 || 0) * 0.5, pe = `M ${F.x2},${F.y} C ${F.x2 + ue},${F.y} ${Y.x1 - ue},${Y.y} ${Y.x1},${Y.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: pe,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${R}`
                      );
                    })
                  ]
                }
              ) : null,
              oe?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    oe.lcl.map((F, R) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: F.x1,
                        x2: F.x2,
                        y1: F.y,
                        y2: F.y,
                        strokeWidth: 2
                      },
                      `lcl-${R}`
                    )),
                    oe.lcl.map((F, R) => {
                      if (R === oe.lcl.length - 1) return null;
                      const Y = oe.lcl[R + 1];
                      if (!Y || F.y === Y.y) return null;
                      const ue = Math.max(4, Y.x1 - F.x2 || 0) * 0.5, pe = `M ${F.x2},${F.y} C ${F.x2 + ue},${F.y} ${Y.x1 - ue},${Y.y} ${Y.x1},${Y.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: pe,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${R}`
                      );
                    })
                  ]
                }
              ) : null,
              _ != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: L.range()[1],
                    y1: w(_),
                    y2: w(_),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: L.range()[0] - 7,
                    y: w(_) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      _,
                      " ",
                      x || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && oe && oe.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                oe.onePos.map((F, R) => /* @__PURE__ */ r.jsx(
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
                  `onePos-${R}`
                )),
                oe.oneNeg.map((F, R) => /* @__PURE__ */ r.jsx(
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
                  `oneNeg-${R}`
                )),
                oe.twoPos.map((F, R) => /* @__PURE__ */ r.jsx(
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
                  `twoPos-${R}`
                )),
                oe.twoNeg.map((F, R) => /* @__PURE__ */ r.jsx(
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
                  `twoNeg-${R}`
                ))
              ] }),
              W && (M || C || b) && (() => {
                const F = W.detectedAt, R = W.firstFavourableCrossAt, Y = P[F] ? L(
                  P[F].x instanceof Date ? P[F].x : new Date(P[F].x)
                ) : null, se = P[F] ? w(P[F].y) : null, ue = R != null && P[R] ? L(
                  P[R].x instanceof Date ? P[R].x : new Date(P[R].x)
                ) : null, pe = R != null && P[R] ? w(P[R].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  b && Y != null && se != null && ue != null && pe != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: Y,
                      y1: se,
                      x2: ue,
                      y2: pe,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  M && Y != null && se != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: Y,
                      cy: se,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  C && ue != null && pe != null && /* @__PURE__ */ r.jsx("circle", { cx: ue, cy: pe, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Im,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (F) => F.x instanceof Date ? F.x : new Date(F.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && P.map((F, R) => {
                const Y = L(F.x instanceof Date ? F.x : new Date(F.x)), se = w(F.y), ue = te.has(R), pe = V?.[R], ie = H[R], B = ie === ft.Improvement, E = ie === ft.Concern, X = ie === ft.NoJudgement, K = [
                  "fdp-spc__point",
                  ue && s ? "fdp-spc__point--ooc" : null,
                  l && E ? "fdp-spc__point--sc-concern" : null,
                  l && B ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral special-cause (no-judgement) from category, when enabled
                  l && g && X ? "fdp-spc__point--sc-no-judgement" : null,
                  pe?.assurance === ct.Pass ? "fdp-spc__point--assurance-pass" : null,
                  pe?.assurance === ct.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), A = D?.focused?.index === R;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: Y,
                    cy: se,
                    r: 5,
                    className: K,
                    "data-variation": pe?.variation,
                    "data-assurance": pe?.assurance,
                    "aria-label": m,
                    ...A ? { "aria-describedby": `spc-tooltip-${R}` } : {}
                  },
                  R
                );
              }),
              I && T && D?.focused && (() => {
                const F = D.focused, R = typeof F.index == "number" ? F.index : -1;
                if (R < 0 || !P[R]) return null;
                const Y = L(
                  P[R].x instanceof Date ? P[R].x : new Date(P[R].x)
                ), se = w(P[R].y), ue = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: Y,
                      cy: se,
                      r: 7,
                      fill: "none",
                      stroke: ue,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: Y,
                      cy: se,
                      r: 5,
                      fill: "#000",
                      stroke: ue,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: Y,
                      cy: se,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              u && l && V && P.map((F, R) => {
                const Y = V[R];
                if (!Y || !(Y.concern || Y.improvement)) return null;
                const se = L(F.x instanceof Date ? F.x : new Date(F.x)), ue = w(F.y);
                let pe = ue - 10;
                const ie = 12, B = w.range()[0] - 4;
                pe < ie && (pe = Math.min(ue + 16, B));
                const E = L.range()[1], X = Math.min(Math.max(se, 0), E - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: X,
                    y: pe,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${Y.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: Y.concern ? "!" : "★"
                  },
                  `icon-${R}`
                );
              }),
              v && /* @__PURE__ */ r.jsx(
                Ig,
                {
                  width: L.range()[1],
                  height: w.range()[0]
                }
              ),
              !T && /* @__PURE__ */ r.jsx(
                kc,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: fe,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (F) => ne(F),
                  enableNeutralNoJudgement: g,
                  showTrendGatingExplanation: k
                }
              )
            ] })
          }
        ),
        T && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          kg,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: x || c?.measureUnit,
            onSignalFocus: N
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          $m,
          {
            format: (F) => z({ ...F, x: F.x instanceof Date ? F.x : new Date(F.x) })
          }
        )
      ]
    }
  ) });
}, Ig = ({
  width: e,
  height: t
}) => {
  const n = vn();
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
}, $g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: En,
  Direction: Me,
  MetricPolarity: ot,
  SPCAssuranceIcon: Mo,
  SPCVariationIcon: $o,
  VariationJudgement: Nt,
  VariationState: Ne,
  getVariationColour: dc,
  getVariationTrend: jo
}, Symbol.toStringTag, { value: "Module" })), oy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: ct,
  BaselineSuggestionReason: Ft,
  ChartType: $t,
  Icons: $g,
  ImprovementDirection: Oe,
  PARITY_V26: mc,
  RULE_METADATA: oc,
  SPCChart: Tg,
  SPCTooltipOverlay: kc,
  SpcEmbeddedIconVariant: Nn,
  SpcVisualCategory: mt,
  SpcWarningCategory: ba,
  SpcWarningCode: va,
  SpcWarningSeverity: Wt,
  VARIATION_COLOR_TOKENS: Ot,
  VariationIcon: Be,
  buildSpc: _c,
  buildSpcV26a: Do,
  buildSpcV26aWithVisuals: Io,
  computeSpcVisualCategories: To,
  extractRuleIds: Za,
  getVariationColorHex: Em,
  getVariationColorToken: uc,
  normaliseSpcSettings: wc,
  normaliseSpcSettingsV2: pc,
  ruleGlossary: cr,
  variationLabel: Qa,
  withParityV26: Qm
}, Symbol.toStringTag, { value: "Module" })), Mg = "150ms", Pg = "300ms", Lg = "500ms", Fg = "cubic-bezier(0.4, 0, 1, 1)", Ag = "cubic-bezier(0, 0, 0.2, 1)", Eg = "cubic-bezier(0.4, 0, 0.2, 1)", Rg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Bg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Hg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Og = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ug = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Wg = "1px", zg = "2px", Vg = "4px", Gg = "4px", Yg = "4px", qg = "2px", Xg = "1px", Kg = "0px", Jg = "4px", Zg = "8px", Qg = "12px", Cc = "#d8dde0", Nc = "#4c6272", jc = "#d8dde0", Tc = "#aeb7bd", Dc = "#d5281b", Ic = "#005eb8", $c = "#ffffff", Mc = "#212b32", Pc = "#007f3b", Lc = "#330072", Fc = "#7c2855", Ac = "#d5281b", Ec = "#ffeb3b", Rc = "#fff9c4", Bc = "#ffb81c", Hc = "#ed8b00", Oc = "#00a499", Uc = "#ae2573", Wc = "#4c6272", zc = "#768692", Vc = "#aeb7bd", Gc = "#d8dde0", Yc = "#f0f4f5", e0 = "#212b32", t0 = "#4c6272", n0 = "#ffffff", r0 = "#212b32", a0 = "#005eb8", s0 = "#7c2855", o0 = "#003087", i0 = "#330072", l0 = "#ffeb3b", c0 = "#212b32", u0 = "#d8dde0", d0 = "#ffffff33", f0 = "#d5281b", p0 = "#4c6272", h0 = "#ffffff", m0 = "#007f3b", g0 = "#ffffff", x0 = "#006530", b0 = "#004021", v0 = "#004021", y0 = "#00000000", w0 = "#ffffff", _0 = "#005eb8", S0 = "#005eb8", k0 = "#d9e5f2", C0 = "#c7daf0", N0 = "#005eb8", j0 = "#ffffff", T0 = "#212b32", D0 = "#d9dde0", I0 = "#b3bcc2", $0 = "#b3bcc2", M0 = "#d5281b", P0 = "#aa2016", L0 = "#6a140e", F0 = "#6a140e", A0 = "#005eb8", E0 = "#004b93", R0 = "#002f5c", B0 = "#002f5c", H0 = "8px", O0 = "16px", U0 = "12px", W0 = "16px", z0 = "4px", V0 = "40px", G0 = "4px", Y0 = "40px", q0 = "12px", X0 = "16px", K0 = "32px", J0 = "16px", Z0 = "20px", Q0 = "28px", ex = "9px", tx = "2px", nx = "16px", rx = "24px", ax = "8px", sx = "24px", ox = "16px", ix = "4px", lx = "4px", cx = "4px", ux = "8px", dx = "4px", fx = "16px", px = "#007f3b", hx = "#006530", mx = "#004021", gx = "#d8dde0", xx = "#ffffff", bx = "#768692", vx = "#00000000", yx = "#ffeb3b", wx = "#00000000", _x = "#ffffff", Sx = "#d9e5f2", kx = "#c7daf0", Cx = "#005eb8", Nx = "#005eb8", qc = "8px", Xc = "16px", Kc = "12px", Jc = "16px", jx = "2px", Tx = "4px", Dx = "4px", Ix = "600", $x = "#ffffff", Mx = "#d8dde0", Px = "#aeb7bd", Lx = "#f0f4f5", Fx = "#212b32", Ax = "#212b32", Ex = "#005eb8", Zc = "16px", Qc = "32px", eu = "16px", Rx = "1px", Bx = "4px", Hx = "none", Ox = "0 2px 4px rgba(0, 0, 0, 0.1)", Ux = "#ffffff", Wx = "#ffffff", zx = "#d8dde0", Vx = "#ffffff", Gx = "#4c6272", Yx = "#ffeb3b", qx = "#d5281b", Xx = "#aeb7bd", Kx = "#212b32", Jx = "#4c6272", Zx = "#768692", Qx = "#212b32", eb = "#ffffff", tb = "600", nb = "#d5281b", rb = "600", ab = "#4c6272", tu = "4px", nu = "40px", ru = "40px", au = "12px", sb = "2px", ob = "4px", ib = "0px", lb = "16px", cb = "18px", ub = "24px", db = "32px", fb = "34px", pb = "32px", hb = "40px", mb = "48px", gb = "5.4ex", xb = "7.2ex", bb = "9ex", vb = "10.8ex", yb = "20ex", wb = "38ex", _b = "56ex", Sb = "44px", kb = "40px", Cb = "1020px", Nb = "100%", jb = "50%", Tb = "33.333%", Db = "25%", Ib = "20%", $b = "320px", Mb = "641px", Pb = "1025px", Lb = "1280px", Fb = "960px", Ab = "32px", Eb = "16px", Rb = "#d5281b", Bb = "#d5281b", Hb = "#ffffff", Ob = "#007f3b", Ub = "#007f3b", Wb = "#ffffff", zb = "#ffeb3b", Vb = "#ffeb3b", Gb = "#212b32", Yb = "#005eb8", qb = "#005eb8", Xb = "#ffffff", Kb = "#d8dde0", Jb = "#aeb7bd", Zb = "#768692", Qb = "0 4px 0 #004021", ev = "0 4px 0 #005eb8", tv = "0 4px 0 #6a140e", nv = "0 4px 0 #ffeb3b", rv = "none", av = "0 2px 4px rgba(0, 0, 0, 0.1)", sv = "4px", ov = "0px", iv = "solid", lv = "0 0 0 3px #ffeb3b", cv = "0 0 0 3px #ffeb3b", uv = "none", dv = "0 1px 3px rgba(0, 0, 0, 0.12)", fv = "0 2px 6px rgba(0, 0, 0, 0.16)", pv = "0 4px 12px rgba(0, 0, 0, 0.20)", su = "0", ou = "4px", iu = "8px", lu = "16px", cu = "24px", uu = "32px", du = "40px", fu = "48px", pu = "56px", hu = "64px", Us = "0", Ws = "0", zs = "4px", Vs = "4px", Gs = "8px", Ys = "8px", qs = "8px", Xs = "16px", Ks = "16px", Js = "24px", Zs = "24px", Qs = "32px", eo = "32px", to = "40px", no = "40px", ro = "48px", ao = "48px", so = "56px", oo = "56px", io = "64px", ya = "Frutiger W01", wa = "Arial, Helvetica, sans-serif", _a = "sans-serif", Sa = "400", ka = "600", Ca = "400", Na = "12px", ja = "14px", Ta = "12pt", Da = "14px", Ia = "16px", $a = "12pt", Ma = "16px", Pa = "19px", La = "13pt", Fa = "19px", Aa = "22px", Ea = "15pt", Ra = "22px", Ba = "26px", Ha = "17pt", Oa = "27px", Ua = "36px", Wa = "20pt", za = "33px", Va = "48px", Ga = "24pt", lo = "16px", co = "24px", nn = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, rn = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, an = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, sn = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, on = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ln = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, cn = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, un = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, dn = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, fn = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Mg,
  AnimationDurationNormal: Pg,
  AnimationDurationSlow: Lg,
  AnimationEasingBounce: Rg,
  AnimationEasingEaseIn: Fg,
  AnimationEasingEaseInOut: Eg,
  AnimationEasingEaseOut: Ag,
  BorderColorCard: jc,
  BorderColorCardHover: Tc,
  BorderColorDefault: Cc,
  BorderColorError: Dc,
  BorderColorForm: Nc,
  BorderRadiusLarge: Qg,
  BorderRadiusMedium: Zg,
  BorderRadiusNone: Kg,
  BorderRadiusSmall: Jg,
  BorderWidthCardBottom: Gg,
  BorderWidthDefault: Wg,
  BorderWidthFormElement: zg,
  BorderWidthFormElementError: Vg,
  BorderWidthPanel: Yg,
  BorderWidthTableCell: Xg,
  BorderWidthTableHeader: qg,
  BreakpointDesktop: Pb,
  BreakpointLargeDesktop: Lb,
  BreakpointMobile: $b,
  BreakpointTablet: Mb,
  ButtonBorderRadius: Tx,
  ButtonBorderWidth: jx,
  ButtonPrimaryBackgroundActive: mx,
  ButtonPrimaryBackgroundDefault: px,
  ButtonPrimaryBackgroundDisabled: gx,
  ButtonPrimaryBackgroundHover: hx,
  ButtonPrimaryBorderDefault: vx,
  ButtonPrimaryBorderFocus: yx,
  ButtonPrimaryTextDefault: xx,
  ButtonPrimaryTextDisabled: bx,
  ButtonSecondaryBackgroundActive: kx,
  ButtonSecondaryBackgroundDefault: wx,
  ButtonSecondaryBackgroundHover: Sx,
  ButtonSecondaryBackgroundSolid: _x,
  ButtonSecondaryBorderDefault: Nx,
  ButtonSecondaryTextDefault: Cx,
  ButtonShadowSize: Dx,
  ButtonSpacingPaddingHorizontalDesktop: Jc,
  ButtonSpacingPaddingHorizontalMobile: Xc,
  ButtonSpacingPaddingVerticalDesktop: Kc,
  ButtonSpacingPaddingVerticalMobile: qc,
  ButtonTypographyWeight: Ix,
  CardBackgroundDefault: $x,
  CardBorderBottom: Lx,
  CardBorderDefault: Mx,
  CardBorderHover: Px,
  CardBorderWidthBottom: Bx,
  CardBorderWidthDefault: Rx,
  CardShadowDefault: Hx,
  CardShadowHover: Ox,
  CardSpacingHeadingMargin: eu,
  CardSpacingPaddingDesktop: Qc,
  CardSpacingPaddingMobile: Zc,
  CardTextDescription: Ax,
  CardTextHeading: Fx,
  CardTextLink: Ex,
  ColorBorderDefault: u0,
  ColorBorderSecondary: d0,
  ColorButtonLoginActive: R0,
  ColorButtonLoginBackground: A0,
  ColorButtonLoginHover: E0,
  ColorButtonLoginShadow: B0,
  ColorButtonPrimaryActive: b0,
  ColorButtonPrimaryBackground: m0,
  ColorButtonPrimaryHover: x0,
  ColorButtonPrimaryShadow: v0,
  ColorButtonPrimaryText: g0,
  ColorButtonReverseActive: I0,
  ColorButtonReverseBackground: j0,
  ColorButtonReverseHover: D0,
  ColorButtonReverseShadow: $0,
  ColorButtonReverseText: T0,
  ColorButtonSecondaryActive: C0,
  ColorButtonSecondaryBackground: y0,
  ColorButtonSecondaryBackgroundSolid: w0,
  ColorButtonSecondaryBorder: _0,
  ColorButtonSecondaryHover: k0,
  ColorButtonSecondaryShadow: N0,
  ColorButtonSecondaryText: S0,
  ColorButtonWarningActive: L0,
  ColorButtonWarningBackground: M0,
  ColorButtonWarningHover: P0,
  ColorButtonWarningShadow: F0,
  ColorError: f0,
  ColorFocusBackground: l0,
  ColorFocusText: c0,
  ColorFormBackground: h0,
  ColorFormBorder: p0,
  ColorGrey1: Wc,
  ColorGrey2: zc,
  ColorGrey3: Vc,
  ColorGrey4: Gc,
  ColorGrey5: Yc,
  ColorLinkActive: o0,
  ColorLinkDefault: a0,
  ColorLinkHover: s0,
  ColorLinkVisited: i0,
  ColorPrimaryBlack: Mc,
  ColorPrimaryBlue: Ic,
  ColorPrimaryDarkPink: Fc,
  ColorPrimaryGreen: Pc,
  ColorPrimaryPurple: Lc,
  ColorPrimaryRed: Ac,
  ColorPrimaryWhite: $c,
  ColorPrimaryYellow: Ec,
  ColorSecondaryAquaGreen: Oc,
  ColorSecondaryOrange: Hc,
  ColorSecondaryPaleYellow: Rc,
  ColorSecondaryPink: Uc,
  ColorSecondaryWarmYellow: Bc,
  ColorTextPrimary: e0,
  ColorTextPrint: r0,
  ColorTextReverse: n0,
  ColorTextSecondary: t0,
  ComponentBlur: lx,
  ComponentBreadcrumbChevronMarginLeft: ex,
  ComponentBreadcrumbChevronMarginRight: tx,
  ComponentBreadcrumbPaddingTopDesktop: rx,
  ComponentBreadcrumbPaddingTopMobile: nx,
  ComponentButtonPaddingDesktopHorizontal: W0,
  ComponentButtonPaddingDesktopVertical: U0,
  ComponentButtonPaddingMobileHorizontal: O0,
  ComponentButtonPaddingMobileVertical: H0,
  ComponentButtonShadowSize: z0,
  ComponentCardHeadingMargin: J0,
  ComponentCardPaddingDesktop: K0,
  ComponentCardPaddingMobile: X0,
  ComponentDetails: ux,
  ComponentExpander: dx,
  ComponentFormCheckboxLabelPadding: q0,
  ComponentFormCheckboxSize: Y0,
  ComponentFormInputMinHeight: V0,
  ComponentFormInputPadding: G0,
  ComponentLink: cx,
  ComponentPagination: fx,
  ComponentPanelPaddingDesktop: Q0,
  ComponentPanelPaddingMobile: Z0,
  ComponentSpread: ix,
  ComponentSummaryListCellPaddingHorizontal: sx,
  ComponentSummaryListCellPaddingVertical: ax,
  ComponentSummaryListRowMargin: ox,
  ElevationHigh: pv,
  ElevationLow: dv,
  ElevationMedium: fv,
  ElevationNone: uv,
  FocusOutlineOffset: ov,
  FocusOutlineStyle: iv,
  FocusOutlineWidth: sv,
  FocusShadowButton: cv,
  FocusShadowInput: lv,
  FontFamilyBase: ya,
  FontFamilyFallback: wa,
  FontFamilyPrint: _a,
  FontLineHeightBase: co,
  FontSize14Mobile: Na,
  FontSize14Print: Ta,
  FontSize14Tablet: ja,
  FontSize16Mobile: Da,
  FontSize16Print: $a,
  FontSize16Tablet: Ia,
  FontSize19Mobile: Ma,
  FontSize19Print: La,
  FontSize19Tablet: Pa,
  FontSize22Mobile: Fa,
  FontSize22Print: Ea,
  FontSize22Tablet: Aa,
  FontSize26Mobile: Ra,
  FontSize26Print: Ha,
  FontSize26Tablet: Ba,
  FontSize36Mobile: Oa,
  FontSize36Print: Wa,
  FontSize36Tablet: Ua,
  FontSize48Mobile: za,
  FontSize48Print: Ga,
  FontSize48Tablet: Va,
  FontSizeBase: lo,
  FontWeightBold: ka,
  FontWeightLight: Ca,
  FontWeightNormal: Sa,
  FormBorderRadius: ib,
  FormBorderWidthDefault: sb,
  FormBorderWidthError: ob,
  FormErrorTextDefault: nb,
  FormErrorTypographyWeight: rb,
  FormHintTextDefault: ab,
  FormInputBackgroundDefault: Ux,
  FormInputBackgroundDisabled: zx,
  FormInputBackgroundError: Vx,
  FormInputBackgroundFocus: Wx,
  FormInputBorderDefault: Gx,
  FormInputBorderDisabled: Xx,
  FormInputBorderError: qx,
  FormInputBorderFocus: Yx,
  FormInputTextDefault: Kx,
  FormInputTextDisabled: Zx,
  FormInputTextPlaceholder: Jx,
  FormLabelTextDefault: Qx,
  FormLabelTextRequired: eb,
  FormLabelTypographyWeight: tb,
  FormSpacingCheckboxLabelPadding: au,
  FormSpacingCheckboxSize: ru,
  FormSpacingInputMinHeight: nu,
  FormSpacingInputPadding: tu,
  GridGutter: Ab,
  GridGutterHalf: Eb,
  GridPageWidth: Fb,
  HeadingsNhsukHeadingL: rn,
  HeadingsNhsukHeadingM: an,
  HeadingsNhsukHeadingS: sn,
  HeadingsNhsukHeadingXl: nn,
  HeadingsNhsukHeadingXs: on,
  LayoutColumnActions: Ib,
  LayoutColumnFull: Nb,
  LayoutColumnHalf: jb,
  LayoutColumnQuarter: Db,
  LayoutColumnThird: Tb,
  LayoutContainerMaxWidth: Cb,
  ParagraphsBody: ln,
  ParagraphsBodyLarge: cn,
  ParagraphsBodySmall: un,
  ParagraphsLedeText: dn,
  ParagraphsLedeTextSmall: fn,
  ShadowButtonDefault: Qb,
  ShadowButtonFocus: nv,
  ShadowButtonSecondary: ev,
  ShadowButtonWarning: tv,
  ShadowCardDefault: rv,
  ShadowCardHover: av,
  SizeButtonMinHeightDesktop: kb,
  SizeButtonMinHeightMobile: Sb,
  SizeFormControlLarge: mb,
  SizeFormControlMedium: hb,
  SizeFormControlSmall: pb,
  SizeFormInputWidth2xl: wb,
  SizeFormInputWidth3xl: _b,
  SizeFormInputWidthLg: vb,
  SizeFormInputWidthMd: bb,
  SizeFormInputWidthSm: xb,
  SizeFormInputWidthXl: yb,
  SizeFormInputWidthXs: gb,
  SizeIconExtraLarge: db,
  SizeIconLarge: ub,
  SizeIconMedium: cb,
  SizeIconNhsDefault: fb,
  SizeIconSmall: lb,
  Spacing0: su,
  Spacing1: ou,
  Spacing2: iu,
  Spacing3: lu,
  Spacing4: cu,
  Spacing5: uu,
  Spacing6: du,
  Spacing7: fu,
  Spacing8: pu,
  Spacing9: hu,
  SpacingResponsive0Mobile: Us,
  SpacingResponsive0Tablet: Ws,
  SpacingResponsive1Mobile: zs,
  SpacingResponsive1Tablet: Vs,
  SpacingResponsive2Mobile: Gs,
  SpacingResponsive2Tablet: Ys,
  SpacingResponsive3Mobile: qs,
  SpacingResponsive3Tablet: Xs,
  SpacingResponsive4Mobile: Ks,
  SpacingResponsive4Tablet: Js,
  SpacingResponsive5Mobile: Zs,
  SpacingResponsive5Tablet: Qs,
  SpacingResponsive6Mobile: eo,
  SpacingResponsive6Tablet: to,
  SpacingResponsive7Mobile: no,
  SpacingResponsive7Tablet: ro,
  SpacingResponsive8Mobile: ao,
  SpacingResponsive8Tablet: so,
  SpacingResponsive9Mobile: oo,
  SpacingResponsive9Tablet: io,
  StateDisabledBackground: Kb,
  StateDisabledBorder: Jb,
  StateDisabledText: Zb,
  StateErrorBackground: Rb,
  StateErrorBorder: Bb,
  StateErrorText: Hb,
  StateInfoBackground: Yb,
  StateInfoBorder: qb,
  StateInfoText: Xb,
  StateSuccessBackground: Ob,
  StateSuccessBorder: Ub,
  StateSuccessText: Wb,
  StateWarningBackground: zb,
  StateWarningBorder: Vb,
  StateWarningText: Gb,
  TransitionButtonDefault: Bg,
  TransitionButtonShadow: Hg,
  TransitionCardHover: Ug,
  TransitionInputFocus: Og
}, Symbol.toStringTag, { value: "Module" })), iy = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), ly = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: nn.fontFamily,
      fontWeight: nn.fontWeight,
      fontSize: nn.fontSize.mobile,
      lineHeight: nn.lineHeight,
      marginTop: nn.marginTop,
      marginBottom: nn.marginBottom.mobile,
      ...n
    },
    children: e
  }
), cy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: rn.fontFamily,
      fontWeight: rn.fontWeight,
      fontSize: rn.fontSize.mobile,
      lineHeight: rn.lineHeight,
      marginTop: rn.marginTop,
      marginBottom: rn.marginBottom.mobile,
      ...n
    },
    children: e
  }
), uy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: an.fontFamily,
      fontWeight: an.fontWeight,
      fontSize: an.fontSize.mobile,
      lineHeight: an.lineHeight,
      marginTop: an.marginTop,
      marginBottom: an.marginBottom.mobile,
      ...n
    },
    children: e
  }
), dy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: sn.fontFamily,
      fontWeight: sn.fontWeight,
      fontSize: sn.fontSize.mobile,
      lineHeight: sn.lineHeight,
      marginTop: sn.marginTop,
      marginBottom: sn.marginBottom.mobile,
      ...n
    },
    children: e
  }
), fy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: on.fontFamily,
      fontWeight: on.fontWeight,
      fontSize: on.fontSize.mobile,
      lineHeight: on.lineHeight,
      marginTop: on.marginTop,
      marginBottom: on.marginBottom.mobile,
      ...n
    },
    children: e
  }
), py = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ln.fontFamily,
      fontWeight: ln.fontWeight,
      fontSize: ln.fontSize.mobile,
      lineHeight: ln.lineHeight,
      marginTop: ln.marginTop,
      marginBottom: ln.marginBottom.mobile,
      ...n
    },
    children: e
  }
), hy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: cn.fontFamily,
      fontWeight: cn.fontWeight,
      fontSize: cn.fontSize.mobile,
      lineHeight: cn.lineHeight,
      marginTop: cn.marginTop,
      marginBottom: cn.marginBottom.mobile,
      ...n
    },
    children: e
  }
), my = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: un.fontFamily,
      fontWeight: un.fontWeight,
      fontSize: un.fontSize.mobile,
      lineHeight: un.lineHeight,
      marginTop: un.marginTop,
      marginBottom: un.marginBottom.mobile,
      ...n
    },
    children: e
  }
), gy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: dn.fontFamily,
      fontWeight: dn.fontWeight,
      fontSize: dn.fontSize.mobile,
      lineHeight: dn.lineHeight,
      marginTop: dn.marginTop,
      marginBottom: dn.marginBottom.mobile,
      ...n
    },
    children: e
  }
), xy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: fn.fontFamily,
      fontWeight: fn.fontWeight,
      fontSize: fn.fontSize.mobile,
      lineHeight: fn.lineHeight,
      marginTop: fn.marginTop,
      marginBottom: fn.marginBottom.mobile,
      ...n
    },
    children: e
  }
), by = () => Pe(() => hv, []), vy = () => Pe(() => ({
  // Border colors
  BorderColorDefault: Cc,
  BorderColorForm: Nc,
  BorderColorCard: jc,
  BorderColorCardHover: Tc,
  BorderColorError: Dc,
  // Primary colors
  ColorPrimaryBlue: Ic,
  ColorPrimaryWhite: $c,
  ColorPrimaryBlack: Mc,
  ColorPrimaryGreen: Pc,
  ColorPrimaryPurple: Lc,
  ColorPrimaryDarkPink: Fc,
  ColorPrimaryRed: Ac,
  ColorPrimaryYellow: Ec,
  // Secondary colors
  ColorSecondaryPaleYellow: Rc,
  ColorSecondaryWarmYellow: Bc,
  ColorSecondaryOrange: Hc,
  ColorSecondaryAquaGreen: Oc,
  ColorSecondaryPink: Uc,
  // Grey scale
  ColorGrey1: Wc,
  ColorGrey2: zc,
  ColorGrey3: Vc,
  ColorGrey4: Gc,
  ColorGrey5: Yc
}), []), yy = () => Pe(() => ({
  Spacing0: su,
  Spacing1: ou,
  Spacing2: iu,
  Spacing3: lu,
  Spacing4: cu,
  Spacing5: uu,
  Spacing6: du,
  Spacing7: fu,
  Spacing8: pu,
  Spacing9: hu
}), []), wy = () => Pe(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Na,
    Size16: Da,
    Size19: Ma,
    Size22: Fa,
    Size26: Ra,
    Size36: Oa,
    Size48: za
  },
  Tablet: {
    Size14: ja,
    Size16: Ia,
    Size19: Pa,
    Size22: Aa,
    Size26: Ba,
    Size36: Ua,
    Size48: Va
  },
  Print: {
    Size14: Ta,
    Size16: $a,
    Size19: La,
    Size22: Ea,
    Size26: Ha,
    Size36: Wa,
    Size48: Ga
  },
  Family: {
    Base: ya,
    Fallback: wa,
    Print: _a
  },
  Weight: {
    Normal: Sa,
    Bold: ka,
    Light: Ca
  },
  Base: {
    Size: lo,
    LineHeight: co
  },
  // Backward compatibility - individual exports
  FontFamilyBase: ya,
  FontFamilyFallback: wa,
  FontFamilyPrint: _a,
  FontWeightNormal: Sa,
  FontWeightBold: ka,
  FontWeightLight: Ca,
  FontSize14Mobile: Na,
  FontSize14Tablet: ja,
  FontSize14Print: Ta,
  FontSize16Mobile: Da,
  FontSize16Tablet: Ia,
  FontSize16Print: $a,
  FontSize19Mobile: Ma,
  FontSize19Tablet: Pa,
  FontSize19Print: La,
  FontSize22Mobile: Fa,
  FontSize22Tablet: Aa,
  FontSize22Print: Ea,
  FontSize26Mobile: Ra,
  FontSize26Tablet: Ba,
  FontSize26Print: Ha,
  FontSize36Mobile: Oa,
  FontSize36Tablet: Ua,
  FontSize36Print: Wa,
  FontSize48Mobile: za,
  FontSize48Tablet: Va,
  FontSize48Print: Ga,
  FontSizeBase: lo,
  FontLineHeightBase: co
}), []), _y = () => Pe(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Us,
    Size1: zs,
    Size2: Gs,
    Size3: qs,
    Size4: Ks,
    Size5: Zs,
    Size6: eo,
    Size7: no,
    Size8: ao,
    Size9: oo
  },
  Tablet: {
    Size0: Ws,
    Size1: Vs,
    Size2: Ys,
    Size3: Xs,
    Size4: Js,
    Size5: Qs,
    Size6: to,
    Size7: ro,
    Size8: so,
    Size9: io
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Us,
  SpacingResponsive0Tablet: Ws,
  SpacingResponsive1Mobile: zs,
  SpacingResponsive1Tablet: Vs,
  SpacingResponsive2Mobile: Gs,
  SpacingResponsive2Tablet: Ys,
  SpacingResponsive3Mobile: qs,
  SpacingResponsive3Tablet: Xs,
  SpacingResponsive4Mobile: Ks,
  SpacingResponsive4Tablet: Js,
  SpacingResponsive5Mobile: Zs,
  SpacingResponsive5Tablet: Qs,
  SpacingResponsive6Mobile: eo,
  SpacingResponsive6Tablet: to,
  SpacingResponsive7Mobile: no,
  SpacingResponsive7Tablet: ro,
  SpacingResponsive8Mobile: ao,
  SpacingResponsive8Tablet: so,
  SpacingResponsive9Mobile: oo,
  SpacingResponsive9Tablet: io
}), []), Sy = () => Pe(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: qc,
  ButtonSpacingPaddingHorizontalMobile: Xc,
  ButtonSpacingPaddingVerticalDesktop: Kc,
  ButtonSpacingPaddingHorizontalDesktop: Jc,
  // Card spacing	
  CardSpacingPaddingMobile: Zc,
  CardSpacingPaddingDesktop: Qc,
  CardSpacingHeadingMargin: eu,
  // Form spacing
  FormSpacingInputPadding: tu,
  FormSpacingInputMinHeight: nu,
  FormSpacingCheckboxSize: ru,
  FormSpacingCheckboxLabelPadding: au
}), []), ky = () => Pe(() => ({
  xl: nn,
  l: rn,
  m: an,
  s: sn,
  xs: on
}), []), Cy = () => Pe(() => ({
  body: ln,
  bodyLarge: cn,
  bodySmall: un,
  ledeText: dn,
  ledeTextSmall: fn
}), []), Ny = () => Pe(() => ({
  headings: {
    xl: nn,
    l: rn,
    m: an,
    s: sn,
    xs: on
  },
  paragraphs: {
    body: ln,
    bodyLarge: cn,
    bodySmall: un,
    ledeText: dn,
    ledeTextSmall: fn
  },
  fonts: {
    family: {
      base: ya,
      fallback: wa,
      print: _a
    },
    weight: {
      normal: Sa,
      bold: ka,
      light: Ca
    },
    sizes: {
      mobile: {
        size14: Na,
        size16: Da,
        size19: Ma,
        size22: Fa,
        size26: Ra,
        size36: Oa,
        size48: za
      },
      tablet: {
        size14: ja,
        size16: Ia,
        size19: Pa,
        size22: Aa,
        size26: Ba,
        size36: Ua,
        size48: Va
      },
      print: {
        size14: Ta,
        size16: $a,
        size19: La,
        size22: Ea,
        size26: Ha,
        size36: Wa,
        size48: Ga
      }
    }
  }
}), []);
function jy(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = G.useState(t), s = G.useCallback(() => o("three-column"), []), i = G.useCallback(() => o((u) => u === "three-column" ? n : u), [n]), l = G.useCallback(() => o((u) => u === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const mu = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, Ct = {
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
function Ty(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...mu, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${Ct.normal.eot}?#iefix") format("eot"),
       url("${t}${Ct.normal.woff2}") format("woff2"),
       url("${t}${Ct.normal.woff}") format("woff"),
       url("${t}${Ct.normal.ttf}") format("truetype");
  src: url("${t}${Ct.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${Ct.bold.eot}?#iefix") format("eot"),
       url("${t}${Ct.bold.woff2}") format("woff2"),
       url("${t}${Ct.bold.woff}") format("woff"),
       url("${t}${Ct.bold.ttf}") format("truetype");
  src: url("${t}${Ct.bold.eot}");
}`), a.join(`
`);
}
function Dy(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...mu, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${Ct.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ct.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${Ct.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ct.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Iy = '"Frutiger W01", Arial, Helvetica, sans-serif', $y = "Arial, Helvetica, sans-serif";
async function My() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Ji as Account,
  xv as ActionLink,
  Gv as AdaptiveDataGrid,
  Mg as AnimationDurationFast,
  Pg as AnimationDurationNormal,
  Lg as AnimationDurationSlow,
  Rg as AnimationEasingBounce,
  Fg as AnimationEasingEaseIn,
  Eg as AnimationEasingEaseInOut,
  Ag as AnimationEasingEaseOut,
  Pl as AppointmentCard,
  ey as AreaSeriesPrimitive,
  Xp as AriaDataGrid,
  $s as AriaTabsDataGrid,
  Gv as AriaTabsDataGridAdaptive,
  Pi as Axis,
  ks as BackLink,
  ny as BandScalesProvider,
  ty as BarSeriesPrimitive,
  jc as BorderColorCard,
  Tc as BorderColorCardHover,
  Cc as BorderColorDefault,
  Dc as BorderColorError,
  Nc as BorderColorForm,
  Qg as BorderRadiusLarge,
  Zg as BorderRadiusMedium,
  Kg as BorderRadiusNone,
  Jg as BorderRadiusSmall,
  Gg as BorderWidthCardBottom,
  Wg as BorderWidthDefault,
  zg as BorderWidthFormElement,
  Vg as BorderWidthFormElementError,
  Yg as BorderWidthPanel,
  Xg as BorderWidthTableCell,
  qg as BorderWidthTableHeader,
  Pp as Breadcrumb,
  Vu as Breakpoint,
  Pb as BreakpointDesktop,
  Lb as BreakpointLargeDesktop,
  $b as BreakpointMobile,
  Mb as BreakpointTablet,
  bt as Button,
  Tx as ButtonBorderRadius,
  jx as ButtonBorderWidth,
  mx as ButtonPrimaryBackgroundActive,
  px as ButtonPrimaryBackgroundDefault,
  gx as ButtonPrimaryBackgroundDisabled,
  hx as ButtonPrimaryBackgroundHover,
  vx as ButtonPrimaryBorderDefault,
  yx as ButtonPrimaryBorderFocus,
  xx as ButtonPrimaryTextDefault,
  bx as ButtonPrimaryTextDisabled,
  kx as ButtonSecondaryBackgroundActive,
  wx as ButtonSecondaryBackgroundDefault,
  Sx as ButtonSecondaryBackgroundHover,
  _x as ButtonSecondaryBackgroundSolid,
  Nx as ButtonSecondaryBorderDefault,
  Cx as ButtonSecondaryTextDefault,
  Dx as ButtonShadowSize,
  Qi as ButtonSize,
  Jc as ButtonSpacingPaddingHorizontalDesktop,
  Xc as ButtonSpacingPaddingHorizontalMobile,
  Kc as ButtonSpacingPaddingVerticalDesktop,
  qc as ButtonSpacingPaddingVerticalMobile,
  Ix as ButtonTypographyWeight,
  Zi as ButtonVariant,
  Tl as Card,
  $x as CardBackgroundDefault,
  Lx as CardBorderBottom,
  Mx as CardBorderDefault,
  Px as CardBorderHover,
  Bx as CardBorderWidthBottom,
  Rx as CardBorderWidthDefault,
  Lv as CardGroup,
  Fv as CardGroupItem,
  Hx as CardShadowDefault,
  Ox as CardShadowHover,
  eu as CardSpacingHeadingMargin,
  Qc as CardSpacingPaddingDesktop,
  Zc as CardSpacingPaddingMobile,
  Ax as CardTextDescription,
  Fx as CardTextHeading,
  Ex as CardTextLink,
  Av as CareCard,
  bv as CharacterCount,
  ay as ChartEnhancer,
  ry as ChartNoScript,
  Gh as ChartRoot,
  Mu as Checkbox,
  Au as Checkboxes,
  u0 as ColorBorderDefault,
  d0 as ColorBorderSecondary,
  R0 as ColorButtonLoginActive,
  A0 as ColorButtonLoginBackground,
  E0 as ColorButtonLoginHover,
  B0 as ColorButtonLoginShadow,
  b0 as ColorButtonPrimaryActive,
  m0 as ColorButtonPrimaryBackground,
  x0 as ColorButtonPrimaryHover,
  v0 as ColorButtonPrimaryShadow,
  g0 as ColorButtonPrimaryText,
  I0 as ColorButtonReverseActive,
  j0 as ColorButtonReverseBackground,
  D0 as ColorButtonReverseHover,
  $0 as ColorButtonReverseShadow,
  T0 as ColorButtonReverseText,
  C0 as ColorButtonSecondaryActive,
  y0 as ColorButtonSecondaryBackground,
  w0 as ColorButtonSecondaryBackgroundSolid,
  _0 as ColorButtonSecondaryBorder,
  k0 as ColorButtonSecondaryHover,
  N0 as ColorButtonSecondaryShadow,
  S0 as ColorButtonSecondaryText,
  L0 as ColorButtonWarningActive,
  M0 as ColorButtonWarningBackground,
  P0 as ColorButtonWarningHover,
  F0 as ColorButtonWarningShadow,
  f0 as ColorError,
  l0 as ColorFocusBackground,
  c0 as ColorFocusText,
  h0 as ColorFormBackground,
  p0 as ColorFormBorder,
  Wc as ColorGrey1,
  zc as ColorGrey2,
  Vc as ColorGrey3,
  Gc as ColorGrey4,
  Yc as ColorGrey5,
  o0 as ColorLinkActive,
  a0 as ColorLinkDefault,
  s0 as ColorLinkHover,
  i0 as ColorLinkVisited,
  Mc as ColorPrimaryBlack,
  Ic as ColorPrimaryBlue,
  Fc as ColorPrimaryDarkPink,
  Pc as ColorPrimaryGreen,
  Lc as ColorPrimaryPurple,
  Ac as ColorPrimaryRed,
  $c as ColorPrimaryWhite,
  Ec as ColorPrimaryYellow,
  Oc as ColorSecondaryAquaGreen,
  Hc as ColorSecondaryOrange,
  Rc as ColorSecondaryPaleYellow,
  Uc as ColorSecondaryPink,
  Bc as ColorSecondaryWarmYellow,
  e0 as ColorTextPrimary,
  r0 as ColorTextPrint,
  n0 as ColorTextReverse,
  t0 as ColorTextSecondary,
  $r as Column,
  Yu as ColumnAlign,
  lx as ComponentBlur,
  ex as ComponentBreadcrumbChevronMarginLeft,
  tx as ComponentBreadcrumbChevronMarginRight,
  rx as ComponentBreadcrumbPaddingTopDesktop,
  nx as ComponentBreadcrumbPaddingTopMobile,
  W0 as ComponentButtonPaddingDesktopHorizontal,
  U0 as ComponentButtonPaddingDesktopVertical,
  O0 as ComponentButtonPaddingMobileHorizontal,
  H0 as ComponentButtonPaddingMobileVertical,
  z0 as ComponentButtonShadowSize,
  J0 as ComponentCardHeadingMargin,
  K0 as ComponentCardPaddingDesktop,
  X0 as ComponentCardPaddingMobile,
  ux as ComponentDetails,
  dx as ComponentExpander,
  q0 as ComponentFormCheckboxLabelPadding,
  Y0 as ComponentFormCheckboxSize,
  V0 as ComponentFormInputMinHeight,
  G0 as ComponentFormInputPadding,
  cx as ComponentLink,
  fx as ComponentPagination,
  Q0 as ComponentPanelPaddingDesktop,
  Z0 as ComponentPanelPaddingMobile,
  ix as ComponentSpread,
  sx as ComponentSummaryListCellPaddingHorizontal,
  ax as ComponentSummaryListCellPaddingVertical,
  ox as ComponentSummaryListRowMargin,
  rl as Container,
  Pv as ContentsList,
  mu as DEFAULT_FONT_CONFIG,
  Wv as DashboardSummaryGrid,
  jv as DateInput,
  Hp as Details,
  Op as DoDontList,
  pv as ElevationHigh,
  dv as ElevationLow,
  fv as ElevationMedium,
  uv as ElevationNone,
  Ho as ErrorMessage,
  Nv as ErrorSummary,
  Up as Expander,
  Ct as FRUTIGER_FONT_FILES,
  po as Fieldset,
  Gu as Float,
  ov as FocusOutlineOffset,
  iv as FocusOutlineStyle,
  sv as FocusOutlineWidth,
  cv as FocusShadowButton,
  lv as FocusShadowInput,
  ya as FontFamilyBase,
  wa as FontFamilyFallback,
  _a as FontFamilyPrint,
  co as FontLineHeightBase,
  Na as FontSize14Mobile,
  Ta as FontSize14Print,
  ja as FontSize14Tablet,
  Da as FontSize16Mobile,
  $a as FontSize16Print,
  Ia as FontSize16Tablet,
  Ma as FontSize19Mobile,
  La as FontSize19Print,
  Pa as FontSize19Tablet,
  Fa as FontSize22Mobile,
  Ea as FontSize22Print,
  Aa as FontSize22Tablet,
  Ra as FontSize26Mobile,
  Ha as FontSize26Print,
  Ba as FontSize26Tablet,
  Oa as FontSize36Mobile,
  Wa as FontSize36Print,
  Ua as FontSize36Tablet,
  za as FontSize48Mobile,
  Ga as FontSize48Print,
  Va as FontSize48Tablet,
  lo as FontSizeBase,
  ka as FontWeightBold,
  Ca as FontWeightLight,
  Sa as FontWeightNormal,
  ll as Footer,
  ib as FormBorderRadius,
  sb as FormBorderWidthDefault,
  ob as FormBorderWidthError,
  nb as FormErrorTextDefault,
  rb as FormErrorTypographyWeight,
  ab as FormHintTextDefault,
  Ux as FormInputBackgroundDefault,
  zx as FormInputBackgroundDisabled,
  Vx as FormInputBackgroundError,
  Wx as FormInputBackgroundFocus,
  Gx as FormInputBorderDefault,
  Xx as FormInputBorderDisabled,
  qx as FormInputBorderError,
  Yx as FormInputBorderFocus,
  Kx as FormInputTextDefault,
  Zx as FormInputTextDisabled,
  Jx as FormInputTextPlaceholder,
  Qx as FormLabelTextDefault,
  eb as FormLabelTextRequired,
  tb as FormLabelTypographyWeight,
  au as FormSpacingCheckboxLabelPadding,
  ru as FormSpacingCheckboxSize,
  nu as FormSpacingInputMinHeight,
  tu as FormSpacingInputPadding,
  $v as GanttChart,
  Cs as Grid,
  Ab as GridGutter,
  Eb as GridGutterHalf,
  qh as GridLines,
  Fb as GridPageWidth,
  Bn as GridWidth,
  il as Header,
  Iv as HeaderSSR,
  ad as HeaderSearch,
  il as HeaderStatic,
  mn as Heading,
  rn as HeadingsNhsukHeadingL,
  an as HeadingsNhsukHeadingM,
  sn as HeadingsNhsukHeadingS,
  nn as HeadingsNhsukHeadingXl,
  on as HeadingsNhsukHeadingXs,
  od as Hero,
  tl as Hint,
  Ov as Images,
  uo as Input,
  Ev as InsetText,
  fo as Label,
  Ib as LayoutColumnActions,
  Nb as LayoutColumnFull,
  jb as LayoutColumnHalf,
  Db as LayoutColumnQuarter,
  Tb as LayoutColumnThird,
  Cb as LayoutContainerMaxWidth,
  Qv as Legend,
  Yh as LineScalesProvider,
  Im as LineSeriesPrimitive,
  Ku as List,
  al as MainWrapper,
  Ll as MedicationCard,
  Pm as MetricCard,
  py as NHSBodyText,
  hy as NHSBodyTextLarge,
  my as NHSBodyTextSmall,
  ly as NHSHeading1,
  cy as NHSHeading2,
  uy as NHSHeading3,
  dy as NHSHeading4,
  fy as NHSHeading5,
  gy as NHSLedeText,
  xy as NHSLedeTextSmall,
  Dv as NHSThemeProvider,
  $y as NHS_FALLBACK_FONT_STACK,
  Iy as NHS_FONT_STACK,
  Eh as NavigationSplitView,
  qv as PageTemplate,
  Mv as Pagination,
  Lp as Panel,
  ln as ParagraphsBody,
  cn as ParagraphsBodyLarge,
  un as ParagraphsBodySmall,
  dn as ParagraphsLedeText,
  fn as ParagraphsLedeTextSmall,
  Ml as PatientCard,
  Hh as ProductRoadmap,
  vv as Radios,
  yv as RadiosServer,
  Gv as ResponsiveDataGrid,
  Yv as ResponsiveDataGridDemo,
  Hn as Row,
  oy as SPC,
  Tg as SPCChart,
  sy as SPCMetricCard,
  ta as Select,
  Ou as SelectOption,
  Qb as ShadowButtonDefault,
  nv as ShadowButtonFocus,
  ev as ShadowButtonSecondary,
  tv as ShadowButtonWarning,
  rv as ShadowCardDefault,
  av as ShadowCardHover,
  kb as SizeButtonMinHeightDesktop,
  Sb as SizeButtonMinHeightMobile,
  mb as SizeFormControlLarge,
  hb as SizeFormControlMedium,
  pb as SizeFormControlSmall,
  wb as SizeFormInputWidth2xl,
  _b as SizeFormInputWidth3xl,
  vb as SizeFormInputWidthLg,
  bb as SizeFormInputWidthMd,
  xb as SizeFormInputWidthSm,
  yb as SizeFormInputWidthXl,
  gb as SizeFormInputWidthXs,
  db as SizeIconExtraLarge,
  ub as SizeIconLarge,
  cb as SizeIconMedium,
  fb as SizeIconNhsDefault,
  lb as SizeIconSmall,
  jl as SkipLink,
  Uv as SlotMatrix,
  zv as SortStatusControl,
  su as Spacing0,
  ou as Spacing1,
  iu as Spacing2,
  lu as Spacing3,
  cu as Spacing4,
  uu as Spacing5,
  du as Spacing6,
  fu as Spacing7,
  pu as Spacing8,
  hu as Spacing9,
  Us as SpacingResponsive0Mobile,
  Ws as SpacingResponsive0Tablet,
  zs as SpacingResponsive1Mobile,
  Vs as SpacingResponsive1Tablet,
  Gs as SpacingResponsive2Mobile,
  Ys as SpacingResponsive2Tablet,
  qs as SpacingResponsive3Mobile,
  Xs as SpacingResponsive3Tablet,
  Ks as SpacingResponsive4Mobile,
  Js as SpacingResponsive4Tablet,
  Zs as SpacingResponsive5Mobile,
  Qs as SpacingResponsive5Tablet,
  eo as SpacingResponsive6Mobile,
  to as SpacingResponsive6Tablet,
  no as SpacingResponsive7Mobile,
  ro as SpacingResponsive7Tablet,
  ao as SpacingResponsive8Mobile,
  so as SpacingResponsive8Tablet,
  oo as SpacingResponsive9Mobile,
  io as SpacingResponsive9Tablet,
  wv as SpacingUtilities,
  Kb as StateDisabledBackground,
  Jb as StateDisabledBorder,
  Zb as StateDisabledText,
  Rb as StateErrorBackground,
  Bb as StateErrorBorder,
  Hb as StateErrorText,
  Yb as StateInfoBackground,
  qb as StateInfoBorder,
  Xb as StateInfoText,
  Ob as StateSuccessBackground,
  Ub as StateSuccessBorder,
  Wb as StateSuccessText,
  zb as StateWarningBackground,
  Vb as StateWarningBorder,
  Gb as StateWarningText,
  qp as SummaryCard,
  Rv as SummaryList,
  bn as Table,
  Bv as Tabs,
  Ze as Tag,
  Wp as TaskList,
  Ru as Textarea,
  Zv as TooltipOverlay,
  Dm as TooltipProvider,
  Xv as TransactionalPageTemplate,
  Bg as TransitionButtonDefault,
  Hg as TransitionButtonShadow,
  Ug as TransitionCardHover,
  Og as TransitionInputFocus,
  Jv as VisibilityProvider,
  Fl as VitalsCard,
  Cv as WIDTH_FRACTIONS,
  Hv as WarningCallout,
  Hl as WidthContainer,
  Sv as WidthUtilities,
  My as checkFrutigerLoaded,
  ko as createGenericTabsConfig,
  Vv as createTCHTabsConfig,
  Ty as generateFrutigerFontFace,
  iy as getResponsiveStyles,
  _v as getSpacingClass,
  kv as getWidthClass,
  Dy as preloadFrutigerFonts,
  oh as tchDataConfig,
  vy as useColors,
  Sy as useComponentSpacing,
  ky as useNHSHeadings,
  Cy as useNHSParagraphs,
  Tv as useNHSTheme,
  Ny as useNHSTypographySystem,
  jy as useNavigationSplitDrill,
  Lh as useNavigationSplitUrlSync,
  Ul as useNhsFdpBreakpoints,
  _y as useResponsiveSpacing,
  Kv as useResponsiveValue,
  yy as useSpacing,
  bg as useSpc,
  by as useTokens,
  wy as useTypography
};
//# sourceMappingURL=index.esm.js.map
