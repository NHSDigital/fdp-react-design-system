import * as q from "react";
import Ct, { useState as Oe, useEffect as Ye, useCallback as ve, useRef as Ue, createElement as Ci, useMemo as Me, useContext as tu, createContext as nu, forwardRef as qn, useImperativeHandle as Ni, useReducer as ji, memo as ru, useId as Dr } from "react";
import { createPortal as au } from "react-dom";
function su(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yr = { exports: {} }, Kn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function ou() {
  if (po) return Kn;
  po = 1;
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
  return Kn.Fragment = t, Kn.jsx = n, Kn.jsxs = n, Kn;
}
var Zn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function iu() {
  return ho || (ho = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === $ ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case x:
          return "Fragment";
        case m:
          return "Profiler";
        case p:
          return "StrictMode";
        case b:
          return "Suspense";
        case T:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case v:
            return "Portal";
          case M:
            return (R.displayName || "Context") + ".Provider";
          case k:
            return (R._context.displayName || "Context") + ".Consumer";
          case D:
            var B = R.render;
            return R = R.displayName, R || (R = B.displayName || B.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case j:
            return B = R.displayName || null, B !== null ? B : e(R.type) || "Memo";
          case N:
            B = R._payload, R = R._init;
            try {
              return e(R(B));
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
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var H = B.error, re = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return H.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          re
        ), t(R);
      }
    }
    function a(R) {
      if (R === x) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === N)
        return "<...>";
      try {
        var B = e(R);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = S.A;
      return R === null ? null : R.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(R) {
      if (_.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, B) {
      function H() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: H,
        configurable: !0
      });
    }
    function c() {
      var R = e(this.type);
      return C[R] || (C[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function u(R, B, H, re, z, de, ge, le) {
      return H = de.ref, R = {
        $$typeof: g,
        type: R,
        key: B,
        props: de,
        _owner: z
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(R, "ref", {
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
        value: ge
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function d(R, B, H, re, z, de, ge, le) {
      var ie = B.children;
      if (ie !== void 0)
        if (re)
          if (F(ie)) {
            for (re = 0; re < ie.length; re++)
              f(ie[re]);
            Object.freeze && Object.freeze(ie);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ie);
      if (_.call(B, "key")) {
        ie = e(R);
        var Z = Object.keys(B).filter(function(ce) {
          return ce !== "key";
        });
        re = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", Y[ie + re] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          re,
          ie,
          Z,
          ie
        ), Y[ie + re] = !0);
      }
      if (ie = null, H !== void 0 && (n(H), ie = "" + H), i(B) && (n(B.key), ie = "" + B.key), "key" in B) {
        H = {};
        for (var te in B)
          te !== "key" && (H[te] = B[te]);
      } else H = B;
      return ie && l(
        H,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), u(
        R,
        ie,
        de,
        z,
        o(),
        H,
        ge,
        le
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === g && R._store && (R._store.validated = 1);
    }
    var h = Ct, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), M = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), S = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, F = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var I, C = {}, P = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), ee = w(a(s)), Y = {};
    Zn.Fragment = x, Zn.jsx = function(R, B, H, re, z) {
      var de = 1e4 > S.recentlyCreatedOwnerStacks++;
      return d(
        R,
        B,
        H,
        !1,
        re,
        z,
        de ? Error("react-stack-top-frame") : P,
        de ? w(a(R)) : ee
      );
    }, Zn.jsxs = function(R, B, H, re, z) {
      var de = 1e4 > S.recentlyCreatedOwnerStacks++;
      return d(
        R,
        B,
        H,
        !0,
        re,
        z,
        de ? Error("react-stack-top-frame") : P,
        de ? w(a(R)) : ee
      );
    };
  })()), Zn;
}
var mo;
function lu() {
  return mo || (mo = 1, process.env.NODE_ENV === "production" ? yr.exports = ou() : yr.exports = iu()), yr.exports;
}
var r = lu(), Fa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var go;
function cu() {
  return go || (go = 1, (function(e) {
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
  })(Fa)), Fa.exports;
}
var uu = cu();
const _e = /* @__PURE__ */ su(uu), pv = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = _e(
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
}, Ti = ({
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
      className: _e(
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
            className: _e(
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
var Di = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Di || {}), Ii = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Ii || {});
function du(e) {
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
const { forwardRef: fu, useCallback: dn, useState: La } = q;
function pu(e, t) {
  const {
    children: n,
    variant: a = Di.Primary,
    size: o = Ii.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = La(!1), [f, h] = La(!1), [g, v] = La(!1), x = du({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), p = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", m = {
    ...u && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, k = dn(
    () => !p && d(!0),
    [p]
  ), M = dn(() => d(!1), []), D = dn(
    () => !p && h(!0),
    [p]
  ), b = dn(() => {
    h(!1), d(!1);
  }, []), T = dn(() => v(!0), []), j = dn(() => v(!1), []), N = dn(
    (ie) => {
      ie.key === " " && ("href" in c || ie.currentTarget.getAttribute("role") === "button") && (ie.preventDefault(), ie.currentTarget.click());
    },
    [c]
  ), y = dn(
    (ie) => {
      if (l) {
        const Z = ie.currentTarget;
        if (Z.getAttribute("data-processing") === "true") {
          ie.preventDefault();
          return;
        }
        Z.setAttribute("data-processing", "true"), setTimeout(() => {
          Z.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in c && c.href) {
    const {
      id: ie,
      style: Z,
      title: te,
      ["aria-label"]: ce,
      ["aria-describedby"]: V,
      ["aria-labelledby"]: ue,
      tabIndex: se,
      ...he
    } = c, E = c;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: E.href,
        target: E.target,
        rel: E.rel,
        className: x.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...m,
        ...l && { "data-prevent-double-click": "true" },
        ...he,
        onKeyDown: (U) => {
          E.onKeyDown?.(U), N(U);
        },
        onClick: (U) => {
          E.onClick?.(U), y(U);
        },
        onMouseDown: (U) => {
          E.onMouseDown?.(U), k();
        },
        onMouseUp: (U) => {
          E.onMouseUp?.(U), M();
        },
        onMouseEnter: (U) => {
          E.onMouseEnter?.(U), D();
        },
        onMouseLeave: (U) => {
          E.onMouseLeave?.(U), b();
        },
        onFocus: (U) => {
          E.onFocus?.(U), T();
        },
        onBlur: (U) => {
          E.onBlur?.(U), j();
        },
        "aria-disabled": E["aria-disabled"],
        ...E["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ie,
        style: Z,
        title: te,
        "aria-label": ce,
        "aria-describedby": V,
        "aria-labelledby": ue,
        tabIndex: se,
        children: n
      }
    );
  }
  const {
    id: $,
    style: S,
    title: _,
    ["aria-label"]: F,
    ["aria-describedby"]: w,
    ["aria-labelledby"]: I,
    tabIndex: C,
    name: P,
    value: ee,
    form: Y,
    formAction: R,
    formEncType: B,
    formMethod: H,
    formNoValidate: re,
    formTarget: z,
    autoFocus: de,
    ...ge
  } = c, le = c;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: le.type || "button",
      disabled: le.disabled,
      className: x.classes,
      "data-module": "nhs-button",
      ...m,
      ...l && { "data-prevent-double-click": "true" },
      ...le.disabled && { "aria-disabled": "true" },
      ...ge,
      onKeyDown: (ie) => {
        le.onKeyDown?.(ie), N(ie);
      },
      onClick: (ie) => {
        le.onClick?.(ie), y(ie);
      },
      onMouseDown: (ie) => {
        le.onMouseDown?.(ie), k();
      },
      onMouseUp: (ie) => {
        le.onMouseUp?.(ie), M();
      },
      onMouseEnter: (ie) => {
        le.onMouseEnter?.(ie), D();
      },
      onMouseLeave: (ie) => {
        le.onMouseLeave?.(ie), b();
      },
      onFocus: (ie) => {
        le.onFocus?.(ie), T();
      },
      onBlur: (ie) => {
        le.onBlur?.(ie), j();
      },
      id: $,
      style: S,
      title: _,
      "aria-label": F,
      "aria-describedby": w,
      "aria-labelledby": I,
      tabIndex: C,
      name: P,
      value: ee,
      form: Y,
      formAction: R,
      formEncType: B,
      formMethod: H,
      formNoValidate: re,
      formTarget: z,
      autoFocus: de,
      children: n
    }
  );
}
const mt = fu(pu);
mt.displayName = "Button";
const es = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = _e(
    "nhsuk-back-link",
    a
  ), c = _e(
    "nhsuk-back-link__link"
  ), u = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
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
      children: u()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: c,
      href: n,
      ...i,
      children: u()
    }
  ) });
};
function hu(e) {
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
const Ge = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...u
}) => {
  const d = hu({ color: a, noBorder: o, closable: s, disabled: l, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: d.classes, ...u, children: [
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
}, mu = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: u,
  onChange: d,
  onBlur: f,
  onFocus: h,
  attributes: g,
  ...v
}) => {
  const [x, p] = Oe(a), m = n !== void 0, k = m ? n : x;
  Ye(() => {
    m || p(a);
  }, [a, m]);
  const M = (N) => {
    const y = N.target.checked;
    m || p(y), d?.(y, N);
  }, D = i ? `${e}-hint` : void 0, b = l ? `${e}-error` : void 0, T = [D, b].filter(Boolean).join(" ") || void 0, j = _e(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: j, ...v, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
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
        ...g
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ r.jsx("div", { id: D, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: b, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
mu.displayName = "Checkbox";
function $i(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Os = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: u = !1,
  describedBy: d,
  className: f,
  width: h = "full",
  inputMode: g,
  autoComplete: v,
  maxLength: x,
  minLength: p,
  pattern: m,
  step: k,
  min: M,
  max: D,
  showValueLabels: b = !1,
  showCurrentValue: T = !1,
  valueLabels: j,
  onChange: N,
  onBlur: y,
  onFocus: $,
  onKeyDown: S,
  ..._
}) => {
  const [F, w] = Oe(a || o || (n === "range" ? M || "0" : ""));
  Ye(() => {
    a !== void 0 && w(a);
  }, [a]);
  const I = (z) => {
    const de = z.target;
    w(de.value), ("type" in z && z.nativeEvent || z.type === "keydown") && N?.(z);
  }, { classes: C, isRange: P } = $i({ type: n, hasError: u, width: h, className: f }), ee = a !== void 0, Y = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": d,
    inputMode: g,
    autoComplete: v,
    maxLength: x,
    minLength: p,
    pattern: m,
    step: k,
    min: M,
    max: D,
    onChange: I,
    onBlur: y,
    onFocus: $,
    onKeyDown: (z) => {
      if (P && /[0-9]/.test(z.key)) {
        const de = (F?.toString() || "") + z.key;
        z.target.value = de, I(z);
      }
      S?.(z);
    },
    ..._
  }, R = !ee && o !== void 0 ? { defaultValue: o } : {}, B = ee ? { value: a } : {}, H = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: C,
      ...B,
      ...R,
      "data-current-value": F,
      ...Y
    }
  ), re = P ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    b && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: j?.min || M || "0" }),
      H(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: j?.max || D || "100" })
    ] }),
    !b && H(),
    T && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      j?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: F })
    ] }) })
  ] }) : null;
  return P ? re : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: C,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": d,
      inputMode: g,
      autoComplete: v,
      maxLength: x,
      minLength: p,
      pattern: m,
      step: k,
      min: M,
      max: D,
      onChange: N,
      onBlur: y,
      onFocus: $,
      onKeyDown: S,
      ..._
    }
  );
};
function gu(e) {
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
const Us = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = gu({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function xu(e) {
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
const Ws = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = xu({
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
function bu(e) {
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
const vu = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: u = !1,
  onChange: d,
  fieldsetAttributes: f,
  attributes: h,
  ...g
}) => {
  const [v, x] = Oe(
    e.filter((N) => N.checked).map((N) => N.value)
  ), p = n || t, m = i ? `${p}-hint` : void 0, k = l ? `${p}-error` : void 0, M = [m, k].filter(Boolean).join(" ") || void 0, D = (N, y) => {
    let $;
    y ? $ = [...v, N] : $ = v.filter((S) => S !== N), x($), d?.($);
  }, b = () => e.map((N, y) => {
    const $ = `${p}-${y + 1}`, S = `${$}-conditional`, _ = v.includes(N.value), F = N.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: $,
          name: t,
          type: "checkbox",
          value: N.value,
          checked: _,
          disabled: F,
          onChange: (w) => D(N.value, w.target.checked),
          "aria-describedby": N.hint ? `${$}-hint` : M,
          ...N.conditional && {
            "aria-controls": S,
            "aria-expanded": _ ? "true" : "false"
          },
          ...N.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: $, children: N.text }),
      N.hint && /* @__PURE__ */ r.jsx("div", { id: `${$}-hint`, className: "nhsuk-checkboxes__hint", children: N.hint }),
      N.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: _e("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !_
          }),
          id: S,
          children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            N.conditional.label && /* @__PURE__ */ r.jsx(Us, { htmlFor: N.conditional.id, children: N.conditional.label }),
            /* @__PURE__ */ r.jsx(Os, { ...N.conditional })
          ] }) : N.conditional
        }
      )
    ] }, N.value);
  }), { classes: T, formGroupClasses: j } = bu({ small: u, className: c, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: j, ...h, ...g, children: /* @__PURE__ */ r.jsxs(
    Ws,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: M,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: m, className: "nhsuk-hint", children: i }),
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
vu.displayName = "Checkboxes";
function yu(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const wu = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: u,
  className: d,
  rows: f = 5,
  cols: h,
  maxLength: g,
  minLength: v,
  wrap: x = "soft",
  resize: p = "vertical",
  autoComplete: m,
  spellCheck: k,
  onChange: M,
  onBlur: D,
  onFocus: b,
  onKeyDown: T,
  ...j
}) => {
  const { classes: N, describedBy: y } = yu({ hasError: c, resize: p, className: d, describedBy: u });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: N,
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
      maxLength: g,
      minLength: v,
      wrap: x,
      autoComplete: m,
      spellCheck: k,
      onChange: M,
      onBlur: D,
      onFocus: b,
      onKeyDown: T,
      ...j
    }
  );
};
function _u(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Mi = ({ id: e, className: t, children: n, ...a }) => {
  const o = _u({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, hv = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: c,
  countMessage: u,
  onCountChange: d,
  onChange: f,
  ...h
}) => {
  const g = s ?? i ?? "", [v, x] = Oe(g), [p, m] = Oe(0), [k, M] = Oe(!1), [D, b] = Oe(!1), T = ve((_) => n ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [n]);
  Ye(() => {
    const _ = T(v), F = t || n || 0, w = F - _, I = Math.floor(F * (a / 100));
    m(w), M(_ > F), b(_ >= I || _ > F), d && d(_, w);
  }, [v, t, n, a, T, d]);
  const j = (_) => {
    const F = _.target.value;
    x(F), f && f(_);
  }, N = () => {
    const _ = t || n || 0, F = n ? "word" : "character", w = n ? "words" : "characters";
    if (!D)
      return `You can enter up to ${_} ${_ === 1 ? F : w}`;
    if (k) {
      const I = Math.abs(p);
      return `You have ${I} ${I === 1 ? F : w} too many`;
    } else
      return `You have ${p} ${p === 1 ? F : w} remaining`;
  }, y = _e(
    "nhsuk-character-count",
    c
  ), $ = _e(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !D,
      "nhsuk-error-message": k
    },
    u?.classes
  ), S = _e(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": k
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
          wu,
          {
            id: e,
            name: o,
            value: s !== void 0 ? v : void 0,
            defaultValue: s === void 0 ? i ?? v : void 0,
            rows: l,
            className: S,
            onChange: j,
            "aria-describedby": `${e}-info`,
            "aria-invalid": k || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Mi,
          {
            id: `${e}-info`,
            className: $,
            role: "status",
            "aria-live": "polite",
            children: N()
          }
        )
      ]
    }
  );
};
function Su(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const ku = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = _e(
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
}, Cu = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: c,
  className: u,
  multiple: d = !1,
  size: f,
  autoComplete: h,
  options: g,
  children: v,
  onChange: x,
  onBlur: p,
  onFocus: m,
  ...k
}) => {
  const { classes: M } = Su({ hasError: l, className: u }), D = () => g ? g.map((T, j) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: T.value,
      disabled: T.disabled,
      "data-initial-selected": T.selected || void 0,
      children: T.text
    },
    `${T.value}-${j}`
  )) : null, b = o === void 0 && a === void 0 && g ? g.find((T) => T.selected)?.value : void 0;
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
      "aria-describedby": c,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: x,
      onBlur: p,
      onFocus: m,
      ...k,
      children: v || D()
    }
  );
}, Ir = Cu;
Ir.Option = ku;
function Nu(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Pi(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: c,
  InputComponent: u
}) {
  const {
    onChange: d,
    onBlur: f,
    onFocus: h,
    ...g
  } = e, {
    name: v,
    hasError: x = !1,
    describedBy: p,
    className: m,
    size: k = "normal",
    inline: M = !1,
    options: D,
    ...b
  } = g, { classes: T, describedBy: j } = Nu({ hasError: x, size: k, inline: M, className: m, describedBy: p });
  return /* @__PURE__ */ r.jsx(Ws, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: T,
      ...b,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: D.map((N, y) => {
        const $ = `${v}-${y}`, S = N.conditional ? `${$}-conditional` : void 0, _ = n === N.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: $,
              name: v,
              type: "radio",
              value: N.value,
              disabled: N.disabled,
              ...t === "client" ? {
                checked: _,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (F) => {
                  F && c && (c.current[y] = F);
                }
              } : {
                defaultChecked: _,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": j
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: $, children: N.text }),
          N.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: N.hint }),
          N.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: _e("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !_
              }),
              id: S,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                N.conditional.label && /* @__PURE__ */ r.jsx(
                  Us,
                  {
                    htmlFor: N.conditional.id,
                    children: N.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  u,
                  {
                    ...N.conditional
                  }
                )
              ] }) : N.conditional
            }
          )
        ] }, N.value);
      })
    }
  ) });
}
const mv = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Oe(e || t || ""), c = Ue([]), u = Ue(i), d = (g) => {
    const v = g.target.value;
    v !== u.current && (u.current = v, l(v), n?.(g));
  }, f = (g) => {
    o?.(g);
  }, h = ve((g) => {
    const { key: v } = g;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(v)) return;
    g.preventDefault();
    const x = c.current.filter((M) => M && !M.disabled), p = x.indexOf(g.currentTarget);
    if (p === -1) return;
    let m = p;
    ["ArrowDown", "ArrowRight"].includes(v) ? m = (p + 1) % x.length : ["ArrowUp", "ArrowLeft"].includes(v) && (m = (p - 1 + x.length) % x.length);
    const k = x[m];
    k && (k.focus(), k.checked || k.click());
  }, []);
  return Pi(
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
      itemsRef: c,
      InputComponent: Os
    }
  );
};
function ju(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: o,
    defaultValue: s,
    placeholder: i,
    disabled: l = !1,
    readOnly: c = !1,
    required: u = !1,
    hasError: d = !1,
    describedBy: f,
    className: h,
    width: g = "full",
    inputMode: v,
    autoComplete: x,
    maxLength: p,
    minLength: m,
    pattern: k,
    step: M,
    min: D,
    max: b,
    showValueLabels: T = !1,
    showCurrentValue: j = !1,
    valueLabels: N,
    // Strip interactive handlers in server variant
    onChange: y,
    onBlur: $,
    onFocus: S,
    onKeyDown: _,
    ...F
  } = e, { classes: w, isRange: I } = $i({
    type: a,
    hasError: d,
    width: g,
    className: h
  }), C = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: c,
    required: u,
    "aria-describedby": f,
    inputMode: v,
    autoComplete: x,
    maxLength: p,
    minLength: m,
    pattern: k,
    step: M,
    min: D,
    max: b,
    ...F
  };
  if (I) {
    const P = o ?? s ?? (typeof D < "u" ? String(D) : "0"), ee = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: w,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": P,
        ...C
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      T ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: N?.min || D || "0" }),
        ee,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: N?.max || b || "100" })
      ] }) : ee,
      j && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        N?.current || "Current value:",
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
      ...C
    }
  );
}
const gv = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Pi(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: ju
    }
  );
};
var _n = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(_n || {}), Tu = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Tu || {}), Du = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Du || {}), Iu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Iu || {});
const Fi = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = _e(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, Sn = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const o = _e("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: o, style: n, ...a, children: e });
}, sr = ({
  children: e,
  width: t = _n.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: c,
  align: u,
  ...d
}) => {
  const f = _e(
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
      ...u ? { [`nhsuk-grid-align-${u}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...d, children: e });
}, ts = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const s = Ct.Children.toArray(e)[0], i = Ct.isValidElement(s) && (s.type === Sn || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(Fi, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Sn, { children: e }) });
}, $u = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), u = _e(
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
  return /* @__PURE__ */ r.jsx(c, { className: u, role: s, ...l, children: e });
}, Mu = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = _e("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Pu = $u;
Pu.Item = Mu;
const xv = ({
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
}, bv = {
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
}, vv = ({
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
}, yv = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, wv = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Li = ({
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
function Fu(e) {
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
function Lu(e) {
  const t = e.level ?? Fu(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const an = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const c = Lu({ level: e, size: s, className: t, marginBottom: i }), u = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return Ci(c.tag, { className: c.classes, style: c.style, ...l }, u);
};
function Au(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const xo = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = Au({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, _v = ({
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
  Ye(() => {
    c.current && c.current.focus();
  }, []);
  const u = _e(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (g) => {
    const v = g.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
    return g.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: g.href,
        ...g.attributes,
        children: v
      }
    ) : v;
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: c,
      className: u,
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((g, v) => /* @__PURE__ */ r.jsx("li", { children: h(g) }, v)) })
        ] })
      ]
    }
  );
}, Sv = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...u
}) => {
  const [d, f] = Oe(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, g] = Oe({}), v = (I) => I % 4 === 0 && I % 100 !== 0 || I % 400 === 0, x = (I, C) => {
    const P = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return I === 2 && v(C) ? 29 : P[I - 1];
  }, p = (I, C, P) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Day must be a number";
    const ee = parseInt(I, 10);
    if (ee < 1 || ee > 31) return "Day must be between 1 and 31";
    if (C && P) {
      const Y = parseInt(C, 10), R = parseInt(P, 10);
      if (!isNaN(Y) && !isNaN(R) && Y >= 1 && Y <= 12) {
        const B = x(Y, R);
        if (ee > B)
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
          ][Y - 1]} ${R} only has ${B} days`;
      }
    }
  }, m = (I) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Month must be a number";
    const C = parseInt(I, 10);
    if (C < 1 || C > 12) return "Month must be between 1 and 12";
  }, k = (I) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Year must be a number";
    const C = parseInt(I, 10), P = (/* @__PURE__ */ new Date()).getFullYear();
    if (C < 1900 || C > P + 10)
      return `Year must be between 1900 and ${P + 10}`;
  }, M = (I, C, P) => {
    if (!I || !C || !P) return;
    const ee = parseInt(I, 10), Y = parseInt(C, 10), R = parseInt(P, 10);
    if (isNaN(ee) || isNaN(Y) || isNaN(R) || Y < 1 || Y > 12 || R < 1900) return;
    const B = x(Y, R);
    ee < 1 || ee > B;
  }, D = ve((I, C) => {
    const P = {
      ...d,
      [I]: C
    };
    f(P), c && c(P);
  }, [d, c]), b = ve((I) => {
    const C = d[I];
    let P;
    if (I === "day")
      P = p(C, d.month, d.year);
    else if (I === "month") {
      if (P = m(C), !P && d.day) {
        const ee = p(d.day, C, d.year);
        g((Y) => ({
          ...Y,
          day: ee
        }));
      }
    } else if (I === "year" && (P = k(C), !P && d.day && d.month)) {
      const ee = p(d.day, d.month, C);
      g((Y) => ({
        ...Y,
        day: ee
      }));
    }
    if (g((ee) => ({
      ...ee,
      [I]: P
    })), d.day && d.month && d.year) {
      const ee = M(
        I === "day" ? C : d.day,
        I === "month" ? C : d.month,
        I === "year" ? C : d.year
      );
      ee && g((Y) => ({
        ...Y,
        day: ee
      }));
    }
  }, [d, p, m, k, M]), T = Me(() => [
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
  ], []), j = n || T;
  let N = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", $ = l ? `${e}-error` : "";
  y && (N = N ? `${N} ${y}` : y), $ && (N = N ? `${N} ${$}` : $);
  const S = Object.values(h).some((I) => I), _ = _e(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || S
    }
  ), F = _e(
    "nhsuk-date-input",
    t
  ), w = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      Mi,
      {
        id: y,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      xo,
      {
        id: $,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([I, C]) => C ? /* @__PURE__ */ r.jsxs(
        xo,
        {
          id: `${e}-${I}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            C
          ]
        },
        `${I}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: F, id: e, "data-testid": "date-input", ...u, children: j.map((I) => {
      const C = I.id || `${e}-${I.name}`, P = a ? `${a}[${I.name}]` : I.name, ee = I.label || I.name.charAt(0).toUpperCase() + I.name.slice(1), Y = h[I.name], R = d[I.name] || "";
      let B = N;
      if (Y) {
        const H = `${e}-${I.name}-error`;
        B = B ? `${B} ${H}` : H;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          Us,
          {
            htmlFor: C,
            className: "nhsuk-date-input__label",
            children: ee
          }
        ),
        /* @__PURE__ */ r.jsx(
          Os,
          {
            id: C,
            name: P,
            value: R,
            className: _e("nhsuk-date-input__input", I.classes, {
              "nhsuk-input--error": Y
            }),
            inputMode: I.inputmode,
            autoComplete: I.autocomplete,
            pattern: I.pattern,
            "aria-describedby": B || void 0,
            hasError: !!Y,
            onChange: (H) => D(I.name, H.target.value),
            onBlur: () => b(I.name)
          }
        )
      ] }, I.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: _, children: s ? /* @__PURE__ */ r.jsx(
    Ws,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: N || void 0,
      children: w()
    }
  ) : w() });
}, Ai = {
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
}, Ei = nu(Ai), Eu = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Ai, ...t };
  return /* @__PURE__ */ r.jsx(Ei.Provider, { value: n, children: e });
}, kv = () => {
  const e = tu(Ei);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Ru() {
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
function Bu() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Ru(), document.head.appendChild(e);
}
const Cv = ({ children: e, theme: t }) => (Ye(() => {
  Bu();
}, []), /* @__PURE__ */ r.jsx(Eu, { theme: t, children: e }));
function Hu(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: c,
  navListRef: u,
  searchNode: d
}) {
  const {
    className: f,
    logo: h = {},
    service: g = {},
    serviceName: v,
    organisation: x,
    search: p,
    account: m,
    navigation: k,
    containerClasses: M,
    variant: D = "default",
    attributes: b = {},
    maxVisibleItems: T,
    // deprecated (ignored)
    responsiveNavigation: j = !0,
    ...N
  } = e, y = {
    ...g,
    text: g?.text ?? v
  };
  "maxVisibleItems" in N && delete N.maxVisibleItems;
  const $ = y.href && !h.href || y.href && y.href === h.href, S = $ ? y.href : h.href, _ = _e(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": D === "organisation" || x,
      "nhsuk-header--white": D === "white"
    },
    f
  ), F = _e(
    "nhsuk-header__container",
    M
  ), w = _e(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": k?.white,
      "nhsuk-header__navigation--justified": k?.justified
    },
    k?.className
  ), I = () => /* @__PURE__ */ r.jsxs(
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
  ), C = () => h.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : I(), P = () => x ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      x.name,
      x.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        x.split
      ] })
    ] }),
    x.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: x.descriptor })
  ] }) : null, ee = (B, H) => B ? H ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: H, children: B }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: B }) : null, Y = (B) => B.active || B.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: B.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: B.html } }) : B.text }) : B.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: B.html } }) : B.text, R = () => /* @__PURE__ */ r.jsx(
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
      className: _,
      role: "banner",
      "data-module": "nhsuk-header",
      ...b,
      ...N,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: F, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            S ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: S, children: [
              C(),
              P(),
              $ && ee(y.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              C(),
              P(),
              $ && ee(y.text)
            ] }),
            y.text && !$ && ee(y.text, y.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ r.jsx(
            Ti,
            {
              ...m,
              variant: D === "white" ? "white" : "default"
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
                className: _e(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  M
                ),
                ref: c,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: u,
                    children: [
                      (k?.items || []).map((B, H) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: _e(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": B.active || B.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && H >= (s ?? 0)
                            },
                            B.className
                          ),
                          ...B.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: B.href,
                              ...B.active || B.current ? { "aria-current": B.current ? "page" : "true" } : {},
                              children: Y(B)
                            }
                          )
                        },
                        H
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
                            R()
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
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: k.items.slice(s ?? 0).map((B, H) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: _e("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": B.active || B.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: B.href,
                    ...B.active || B.current ? { "aria-current": B.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: Y(B)
                  }
                )
              },
              `overflow-${(s ?? 0) + H}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const Ou = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: u = !1,
  callbacks: d = {},
  isLoading: f = !1,
  showResults: h = !1,
  results: g = [],
  formAttributes: v = {},
  inputAttributes: x = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: m = !1,
  debounceMs: k = 300,
  minQueryLength: M = 1
}) => {
  const [D, b] = Oe(""), [T, j] = Oe(!1), N = Ue(void 0), y = Ue(null), $ = Ue(null), S = e === "controlled" && o !== void 0, _ = S ? o : D, F = ve(
    (re) => {
      N.current && clearTimeout(N.current), N.current = setTimeout(() => {
        d.onChange && re.length >= M && d.onChange(re);
      }, k);
    },
    [d.onChange, k, M]
  ), w = ve(
    (re) => {
      const z = re.target.value;
      S || b(z), e !== "form" && F(z);
    },
    [S, e, F]
  ), I = ve(
    (re) => {
      const z = _.trim(), de = {
        query: z,
        timestamp: Date.now(),
        formData: new FormData(re.currentTarget)
      };
      e === "controlled" || e === "hybrid" && m ? (re.preventDefault(), d.onSearch && z.length >= M && d.onSearch(de)) : e === "hybrid" && d.onSearch && z.length >= M && d.onSearch(de);
    },
    [
      e,
      _,
      d.onSearch,
      m,
      M
    ]
  ), C = ve(() => {
    j(!0), d.onFocus?.();
  }, [d.onFocus]), P = ve(() => {
    j(!1), d.onBlur?.();
  }, [d.onBlur]), ee = ve(() => {
    S || b(""), d.onClear?.(), $.current?.focus();
  }, [S, d.onClear]);
  Ye(() => () => {
    N.current && clearTimeout(N.current);
  }, []);
  const Y = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: _e("nhsuk-icon nhsuk-icon__search", {
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
  ), B = () => !_ || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ee,
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
  ), H = () => !h || !g.length || !T ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((re) => /* @__PURE__ */ r.jsx(
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
      className: _e("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": T,
        "nhsuk-header__search--has-results": h && g.length > 0
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
            onSubmit: I,
            ...v,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: $,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: _,
                    onChange: w,
                    onFocus: C,
                    onBlur: P,
                    disabled: u || f,
                    ...h && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...x
                  }
                ),
                B()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: u || f || e !== "form" && _.length < M,
                  ...p,
                  children: [
                    f ? R() : Y(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        H()
      ]
    }
  );
}, Ri = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  ...d
}) => {
  const [f, h] = Oe(!1), [g, v] = Oe(!1), [x, p] = Oe(i?.items?.length || 0), [m, k] = Oe(!1), [M, D] = Oe(!1), b = Ue(null), T = Ue(null), j = Ue(!1);
  Ye(() => {
    typeof window > "u" || D(!0);
  }, []), Ye(() => {
    if (typeof document > "u") return;
    const S = (_) => {
      _.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [f]);
  const N = Ue(null), y = ve(() => {
    if (!M || !i?.items || i.items.length === 0 || j.current) return;
    const S = b.current, _ = T.current;
    if (!S || !_) return;
    j.current = !0, S.classList.add("nhsuk-header__navigation-container--measuring");
    const F = S.clientWidth, w = Array.from(_.children);
    if (!w.length) {
      S.classList.remove("nhsuk-header__navigation-container--measuring"), j.current = !1;
      return;
    }
    if (N.current == null) {
      const z = document.createElement("button");
      z.type = "button", z.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", z.style.position = "absolute", z.style.visibility = "hidden", z.style.pointerEvents = "none", z.innerHTML = "<span>More</span>", S.appendChild(z), N.current = z.getBoundingClientRect().width || 104, S.removeChild(z);
    }
    const I = N.current + 16;
    let C = 0, P = 0;
    const ee = window.getComputedStyle(S), Y = parseFloat(ee.paddingLeft) || 0, R = parseFloat(ee.paddingRight) || 0;
    let B = Y + R;
    for (const z of w) {
      const de = z.getBoundingClientRect().width;
      if (C + de + I + B > F) break;
      C += de, P += 1;
    }
    const H = P < i.items.length, re = H ? P : i.items.length;
    v((z) => z === H ? z : H), p((z) => z === re ? z : re), S.classList.remove("nhsuk-header__navigation-container--measuring"), j.current = !1;
  }, [M, i?.items]);
  Ye(() => {
    if (!M) return;
    const S = b.current;
    if (!S) return;
    let _ = null;
    const F = () => {
      _ == null && (_ = window.requestAnimationFrame(() => {
        _ = null, y();
      }));
    };
    y();
    const w = new ResizeObserver(() => F());
    return w.observe(S), T.current && w.observe(T.current), () => {
      _ != null && window.cancelAnimationFrame(_), w.disconnect();
    };
  }, [M, y]), Ye(() => {
    M && y();
  }, [i?.items?.length, M, y]);
  const $ = (S) => {
    S && (S.preventDefault(), S.stopPropagation());
    const _ = !f;
    h(_), k(_);
  };
  return Hu(
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
      attributes: u,
      ...d
    },
    {
      variant: "client",
      isClient: M,
      menuOpen: f,
      showMoreButton: g,
      visibleItems: x,
      dropdownVisible: m,
      toggleMenu: $,
      navContainerRef: b,
      navListRef: T,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(Ou, { ...o }) : null
    }
  );
};
function Uu(e, { variant: t, isClient: n }) {
  const {
    className: a,
    logo: o = {},
    service: s = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: c,
    navigation: u,
    containerClasses: d,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: g,
    // deprecated (ignored)
    responsiveNavigation: v = !0,
    ...x
  } = e;
  "maxVisibleItems" in x && delete x.maxVisibleItems;
  const p = {
    ...s,
    text: s?.text ?? i
  }, m = p.href && !o.href || p.href && p.href === o.href, k = m ? p.href : o.href, M = _e(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), D = _e("nhsuk-header__container", d), b = _e(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": u?.white,
      "nhsuk-header__navigation--justified": u?.justified
    },
    u?.className
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
  ), j = () => o.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: o.src,
      width: "280",
      alt: o.ariaLabel || "NHS"
    }
  ) : T(), N = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, y = (w, I) => w ? I ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: I, children: w }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: w }) : null, $ = (w) => w.active || w.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: w.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }) : w.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text, S = u?.items && !v, _ = S ? [] : u?.items, F = S ? u.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: M, role: "banner", "data-module": "nhsuk-header", ...h, ...x, children: [
    /* @__PURE__ */ r.jsxs("div", { className: D, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        k ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
          j(),
          N(),
          m && y(p.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          j(),
          N(),
          m && y(p.text)
        ] }),
        p.text && !m && y(p.text, p.href)
      ] }),
      /* @__PURE__ */ r.jsx(Ti, { ...c, variant: f === "white" ? "white" : "default" })
    ] }),
    u && u.items && u.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: b, "aria-label": u.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: _e(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          d
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (_ || []).map((w, I) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: _e("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": w.active || w.current
            }, w.className),
            ...w.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: w.href,
                ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
                children: $(w)
              }
            )
          },
          I
        )) })
      }
    ) }),
    S && F.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: F.map((w, I) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: _e("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": w.active || w.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: w.href,
            ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
            children: $(w)
          }
        )
      },
      `overflow-server-${I}`
    )) }) })
  ] });
}
const Nv = (e) => Uu(e, {
  variant: "server",
  isClient: !1
}), Wu = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...u
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
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), g = c || e || a || o, v = () => {
    if (!e) return null;
    const x = { className: h };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...x, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...x, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...x, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...x, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...x, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...x, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...x, children: e });
    }
  };
  return /* @__PURE__ */ r.jsxs(
    "section",
    {
      className: d,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...u,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: g && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          v(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && g && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          v(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Wu.displayName = "Hero";
const Bi = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: u,
  containerStyle: d
}) => {
  const f = (g, v = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: _e("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": v
      }),
      children: /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: g.URL,
          target: g.newWindow ? "_blank" : void 0,
          rel: g.newWindow ? "noopener noreferrer" : void 0,
          children: g.label
        }
      )
    },
    `${g.URL}-${g.label}`
  ), h = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: _e("nhsuk-width-container", i),
        style: d,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: _e("nhsuk-footer", e), style: u, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((g) => f(g)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((g) => f(g)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((g) => f(g)) }),
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((g) => f(g)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((g) => f(g, !0)),
              (n || []).map((g) => f(g, !0)),
              (a || []).map((g) => f(g, !0)),
              (o || []).map((g) => f(g, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Cr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function zu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function zs(e) {
  let t, n, a;
  e.length !== 2 ? (t = Cr, n = (l, c) => Cr(e(l), c), a = (l, c) => e(l) - c) : (t = e === Cr || e === zu ? e : Vu, n = e, a = e);
  function o(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const f = u + d >>> 1;
        n(l[f], c) < 0 ? u = f + 1 : d = f;
      } while (u < d);
    }
    return u;
  }
  function s(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const f = u + d >>> 1;
        n(l[f], c) <= 0 ? u = f + 1 : d = f;
      } while (u < d);
    }
    return u;
  }
  function i(l, c, u = 0, d = l.length) {
    const f = o(l, c, u, d - 1);
    return f > u && a(l[f - 1], c) > -a(l[f], c) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function Vu() {
  return 0;
}
function Gu(e) {
  return e === null ? NaN : +e;
}
const Yu = zs(Cr), qu = Yu.right;
zs(Gu).center;
function Hi(e, t) {
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
class bo extends Map {
  constructor(t, n = Zu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(vo(this, t));
  }
  has(t) {
    return super.has(vo(this, t));
  }
  set(t, n) {
    return super.set(Xu(this, t), n);
  }
  delete(t) {
    return super.delete(Ku(this, t));
  }
}
function vo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Xu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Ku({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Zu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Ju = Math.sqrt(50), Qu = Math.sqrt(10), ed = Math.sqrt(2);
function $r(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Ju ? 10 : s >= Qu ? 5 : s >= ed ? 2 : 1;
  let l, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= n && n < 2 ? $r(e, t, n * 2) : [l, c, u];
}
function td(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? $r(t, e, n) : $r(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, c = new Array(l);
  if (a)
    if (i < 0) for (let u = 0; u < l; ++u) c[u] = (s - u) / -i;
    else for (let u = 0; u < l; ++u) c[u] = (s - u) * i;
  else if (i < 0) for (let u = 0; u < l; ++u) c[u] = (o + u) / -i;
  else for (let u = 0; u < l; ++u) c[u] = (o + u) * i;
  return c;
}
function ns(e, t, n) {
  return t = +t, e = +e, n = +n, $r(e, t, n)[2];
}
function rs(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? ns(t, e, n) : ns(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function nd(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function _a(e, t) {
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
const yo = Symbol("implicit");
function Oi() {
  var e = new bo(), t = [], n = [], a = yo;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== yo) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new bo();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Oi(t, n).unknown(a);
  }, _a.apply(o, arguments), o;
}
function Ui() {
  var e = Oi().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, c = 0, u = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, g = o < a, v = g ? o : a, x = g ? a : o;
    s = (x - v) / Math.max(1, h - c + u * 2), l && (s = Math.floor(s)), v += (x - v - s * (h - c)) * d, i = s * (1 - c), l && (v = Math.round(v), i = Math.round(i));
    var p = nd(h).map(function(m) {
      return v + s * m;
    });
    return n(g ? p.reverse() : p);
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
    return arguments.length ? (c = Math.min(1, u = +h), f()) : c;
  }, e.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (u = +h, f()) : u;
  }, e.align = function(h) {
    return arguments.length ? (d = Math.max(0, Math.min(1, h)), f()) : d;
  }, e.copy = function() {
    return Ui(t(), [a, o]).round(l).paddingInner(c).paddingOuter(u).align(d);
  }, _a.apply(f(), arguments);
}
function Vs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Wi(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function pr() {
}
var or = 0.7, Mr = 1 / or, Bn = "\\s*([+-]?\\d+)\\s*", ir = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", rd = /^#([0-9a-f]{3,8})$/, ad = new RegExp(`^rgb\\(${Bn},${Bn},${Bn}\\)$`), sd = new RegExp(`^rgb\\(${Bt},${Bt},${Bt}\\)$`), od = new RegExp(`^rgba\\(${Bn},${Bn},${Bn},${ir}\\)$`), id = new RegExp(`^rgba\\(${Bt},${Bt},${Bt},${ir}\\)$`), ld = new RegExp(`^hsl\\(${ir},${Bt},${Bt}\\)$`), cd = new RegExp(`^hsla\\(${ir},${Bt},${Bt},${ir}\\)$`), wo = {
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
Vs(pr, lr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _o,
  // Deprecated! Use color.formatHex.
  formatHex: _o,
  formatHex8: ud,
  formatHsl: dd,
  formatRgb: So,
  toString: So
});
function _o() {
  return this.rgb().formatHex();
}
function ud() {
  return this.rgb().formatHex8();
}
function dd() {
  return zi(this).formatHsl();
}
function So() {
  return this.rgb().formatRgb();
}
function lr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = rd.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ko(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? wr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? wr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ad.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = sd.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = od.exec(e)) ? wr(t[1], t[2], t[3], t[4]) : (t = id.exec(e)) ? wr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ld.exec(e)) ? jo(t[1], t[2] / 100, t[3] / 100, 1) : (t = cd.exec(e)) ? jo(t[1], t[2] / 100, t[3] / 100, t[4]) : wo.hasOwnProperty(e) ? ko(wo[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function ko(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function wr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new Nt(e, t, n, a);
}
function fd(e) {
  return e instanceof pr || (e = lr(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function as(e, t, n, a) {
  return arguments.length === 1 ? fd(e) : new Nt(e, t, n, a ?? 1);
}
function Nt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Vs(Nt, as, Wi(pr, {
  brighter(e) {
    return e = e == null ? Mr : Math.pow(Mr, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? or : Math.pow(or, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(bn(this.r), bn(this.g), bn(this.b), Pr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Co,
  // Deprecated! Use color.formatHex.
  formatHex: Co,
  formatHex8: pd,
  formatRgb: No,
  toString: No
}));
function Co() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}`;
}
function pd() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}${xn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function No() {
  const e = Pr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${bn(this.r)}, ${bn(this.g)}, ${bn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Pr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function bn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function xn(e) {
  return e = bn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function jo(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mt(e, t, n, a);
}
function zi(e) {
  if (e instanceof Mt) return new Mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof pr || (e = lr(e)), !e) return new Mt();
  if (e instanceof Mt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Mt(i, l, c, e.opacity);
}
function hd(e, t, n, a) {
  return arguments.length === 1 ? zi(e) : new Mt(e, t, n, a ?? 1);
}
function Mt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Vs(Mt, hd, Wi(pr, {
  brighter(e) {
    return e = e == null ? Mr : Math.pow(Mr, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? or : Math.pow(or, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new Nt(
      Aa(e >= 240 ? e - 240 : e + 120, o, a),
      Aa(e, o, a),
      Aa(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Mt(To(this.h), _r(this.s), _r(this.l), Pr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Pr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${To(this.h)}, ${_r(this.s) * 100}%, ${_r(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function To(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function _r(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Aa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Gs = (e) => () => e;
function md(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function gd(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function xd(e) {
  return (e = +e) == 1 ? Vi : function(t, n) {
    return n - t ? gd(t, n, e) : Gs(isNaN(t) ? n : t);
  };
}
function Vi(e, t) {
  var n = t - e;
  return n ? md(e, n) : Gs(isNaN(e) ? t : e);
}
const Do = (function e(t) {
  var n = xd(t);
  function a(o, s) {
    var i = n((o = as(o)).r, (s = as(s)).r), l = n(o.g, s.g), c = n(o.b, s.b), u = Vi(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function bd(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function vd(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function yd(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = Ys(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function wd(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Fr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function _d(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ys(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var ss = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ea = new RegExp(ss.source, "g");
function Sd(e) {
  return function() {
    return e;
  };
}
function kd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Cd(e, t) {
  var n = ss.lastIndex = Ea.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = ss.exec(e)) && (o = Ea.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Fr(a, o) })), n = Ea.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? kd(c[0].x) : Sd(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d) l[(f = c[d]).i] = f.x(u);
    return l.join("");
  });
}
function Ys(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Gs(t) : (n === "number" ? Fr : n === "string" ? (a = lr(t)) ? (t = a, Do) : Cd : t instanceof lr ? Do : t instanceof Date ? wd : vd(t) ? bd : Array.isArray(t) ? yd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _d : Fr)(e, t);
}
function Nd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function jd(e) {
  return function() {
    return e;
  };
}
function Td(e) {
  return +e;
}
var Io = [0, 1];
function Ln(e) {
  return e;
}
function os(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : jd(isNaN(t) ? NaN : 0.5);
}
function Dd(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Id(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = os(o, a), s = n(i, s)) : (a = os(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function $d(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = os(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var c = qu(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function Gi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Md() {
  var e = Io, t = Io, n = Ys, a, o, s, i = Ln, l, c, u;
  function d() {
    var h = Math.min(e.length, t.length);
    return i !== Ln && (i = Dd(e[0], e[h - 1])), l = h > 2 ? $d : Id, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((u || (u = l(t, e.map(a), Fr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Td), d()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Nd, d();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Ln, d()) : i !== Ln;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, g) {
    return a = h, o = g, d();
  };
}
function Yi() {
  return Md()(Ln, Ln);
}
function Pd(e) {
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
function zn(e) {
  return e = Lr(Math.abs(e)), e ? e[1] : NaN;
}
function Fd(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], c = 0; o > 0 && l > 0 && (c + l + 1 > a && (l = Math.max(1, a - c)), s.push(n.substring(o -= l, o + l)), !((c += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Ld(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Ad = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ar(e) {
  if (!(t = Ad.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new qs({
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
Ar.prototype = qs.prototype;
function qs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
qs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ed(e) {
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
var qi;
function Rd(e, t) {
  var n = Lr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (qi = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Lr(e, Math.max(0, t + s - 1))[0];
}
function $o(e, t) {
  var n = Lr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Mo = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Pd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => $o(e * 100, t),
  r: $o,
  s: Rd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Po(e) {
  return e;
}
var Fo = Array.prototype.map, Lo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Bd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Po : Fd(Fo.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Po : Ld(Fo.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = Ar(f);
    var h = f.fill, g = f.align, v = f.sign, x = f.symbol, p = f.zero, m = f.width, k = f.comma, M = f.precision, D = f.trim, b = f.type;
    b === "n" ? (k = !0, b = "g") : Mo[b] || (M === void 0 && (M = 12), D = !0, b = "g"), (p || h === "0" && g === "=") && (p = !0, h = "0", g = "=");
    var T = x === "$" ? n : x === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", j = x === "$" ? a : /[%p]/.test(b) ? i : "", N = Mo[b], y = /[defgprs%]/.test(b);
    M = M === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function $(S) {
      var _ = T, F = j, w, I, C;
      if (b === "c")
        F = N(S) + F, S = "";
      else {
        S = +S;
        var P = S < 0 || 1 / S < 0;
        if (S = isNaN(S) ? c : N(Math.abs(S), M), D && (S = Ed(S)), P && +S == 0 && v !== "+" && (P = !1), _ = (P ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + _, F = (b === "s" ? Lo[8 + qi / 3] : "") + F + (P && v === "(" ? ")" : ""), y) {
          for (w = -1, I = S.length; ++w < I; )
            if (C = S.charCodeAt(w), 48 > C || C > 57) {
              F = (C === 46 ? o + S.slice(w + 1) : S.slice(w)) + F, S = S.slice(0, w);
              break;
            }
        }
      }
      k && !p && (S = t(S, 1 / 0));
      var ee = _.length + S.length + F.length, Y = ee < m ? new Array(m - ee + 1).join(h) : "";
      switch (k && p && (S = t(Y + S, Y.length ? m - F.length : 1 / 0), Y = ""), g) {
        case "<":
          S = _ + S + F + Y;
          break;
        case "=":
          S = _ + Y + S + F;
          break;
        case "^":
          S = Y.slice(0, ee = Y.length >> 1) + _ + S + F + Y.slice(ee);
          break;
        default:
          S = Y + _ + S + F;
          break;
      }
      return s(S);
    }
    return $.toString = function() {
      return f + "";
    }, $;
  }
  function d(f, h) {
    var g = u((f = Ar(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(zn(h) / 3))) * 3, x = Math.pow(10, -v), p = Lo[8 + v / 3];
    return function(m) {
      return g(x * m) + p;
    };
  }
  return {
    format: u,
    formatPrefix: d
  };
}
var Sr, Xi, Ki;
Hd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Hd(e) {
  return Sr = Bd(e), Xi = Sr.format, Ki = Sr.formatPrefix, Sr;
}
function Od(e) {
  return Math.max(0, -zn(Math.abs(e)));
}
function Ud(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zn(t) / 3))) * 3 - zn(Math.abs(e)));
}
function Wd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, zn(t) - zn(e)) + 1;
}
function zd(e, t, n, a) {
  var o = rs(e, t, n), s;
  switch (a = Ar(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = Ud(o, i)) && (a.precision = s), Ki(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = Wd(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = Od(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return Xi(a);
}
function Vd(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return td(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return zd(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], c, u, d = 10;
    for (l < i && (u = i, i = l, l = u, u = o, o = s, s = u); d-- > 0; ) {
      if (u = ns(i, l, n), u === c)
        return a[o] = i, a[s] = l, t(a);
      if (u > 0)
        i = Math.floor(i / u) * u, l = Math.ceil(l / u) * u;
      else if (u < 0)
        i = Math.ceil(i * u) / u, l = Math.floor(l * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function Er() {
  var e = Yi();
  return e.copy = function() {
    return Gi(e, Er());
  }, _a.apply(e, arguments), Vd(e);
}
function Gd(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Ra = /* @__PURE__ */ new Date(), Ba = /* @__PURE__ */ new Date();
function ct(e, t, n, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const c = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (u < s && s < i);
    return c;
  }, o.filter = (s) => ct((i) => {
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
const Rr = ct(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Rr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ct((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Rr);
Rr.range;
const nn = 1e3, $t = nn * 60, rn = $t * 60, sn = rn * 24, Xs = sn * 7, Ao = sn * 30, Ha = sn * 365, An = ct((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * nn);
}, (e, t) => (t - e) / nn, (e) => e.getUTCSeconds());
An.range;
const Ks = ct((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nn);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getMinutes());
Ks.range;
const Yd = ct((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCMinutes());
Yd.range;
const Zs = ct((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nn - e.getMinutes() * $t);
}, (e, t) => {
  e.setTime(+e + t * rn);
}, (e, t) => (t - e) / rn, (e) => e.getHours());
Zs.range;
const qd = ct((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * rn);
}, (e, t) => (t - e) / rn, (e) => e.getUTCHours());
qd.range;
const hr = ct(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * $t) / sn,
  (e) => e.getDate() - 1
);
hr.range;
const Js = ct((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sn, (e) => e.getUTCDate() - 1);
Js.range;
const Xd = ct((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sn, (e) => Math.floor(e / sn));
Xd.range;
function Nn(e) {
  return ct((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * $t) / Xs);
}
const Sa = Nn(0), Br = Nn(1), Kd = Nn(2), Zd = Nn(3), Vn = Nn(4), Jd = Nn(5), Qd = Nn(6);
Sa.range;
Br.range;
Kd.range;
Zd.range;
Vn.range;
Jd.range;
Qd.range;
function jn(e) {
  return ct((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Xs);
}
const Zi = jn(0), Hr = jn(1), ef = jn(2), tf = jn(3), Gn = jn(4), nf = jn(5), rf = jn(6);
Zi.range;
Hr.range;
ef.range;
tf.range;
Gn.range;
nf.range;
rf.range;
const cr = ct((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
cr.range;
const af = ct((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
af.range;
const on = ct((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
on.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ct((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
on.range;
const kn = ct((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
kn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ct((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
kn.range;
function sf(e, t, n, a, o, s) {
  const i = [
    [An, 1, nn],
    [An, 5, 5 * nn],
    [An, 15, 15 * nn],
    [An, 30, 30 * nn],
    [s, 1, $t],
    [s, 5, 5 * $t],
    [s, 15, 15 * $t],
    [s, 30, 30 * $t],
    [o, 1, rn],
    [o, 3, 3 * rn],
    [o, 6, 6 * rn],
    [o, 12, 12 * rn],
    [a, 1, sn],
    [a, 2, 2 * sn],
    [n, 1, Xs],
    [t, 1, Ao],
    [t, 3, 3 * Ao],
    [e, 1, Ha]
  ];
  function l(u, d, f) {
    const h = d < u;
    h && ([u, d] = [d, u]);
    const g = f && typeof f.range == "function" ? f : c(u, d, f), v = g ? g.range(u, +d + 1) : [];
    return h ? v.reverse() : v;
  }
  function c(u, d, f) {
    const h = Math.abs(d - u) / f, g = zs(([, , p]) => p).right(i, h);
    if (g === i.length) return e.every(rs(u / Ha, d / Ha, f));
    if (g === 0) return Rr.every(Math.max(rs(u, d, f), 1));
    const [v, x] = i[h / i[g - 1][2] < i[g][2] / h ? g - 1 : g];
    return v.every(x);
  }
  return [l, c];
}
const [of, lf] = sf(on, cr, Sa, hr, Zs, Ks);
function Oa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ua(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Jn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function cf(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = Qn(o), d = er(o), f = Qn(s), h = er(s), g = Qn(i), v = er(i), x = Qn(l), p = er(l), m = Qn(c), k = er(c), M = {
    a: P,
    A: ee,
    b: Y,
    B: R,
    c: null,
    d: Uo,
    e: Uo,
    f: Mf,
    g: Uf,
    G: zf,
    H: Df,
    I: If,
    j: $f,
    L: Ji,
    m: Pf,
    M: Ff,
    p: B,
    q: H,
    Q: Vo,
    s: Go,
    S: Lf,
    u: Af,
    U: Ef,
    V: Rf,
    w: Bf,
    W: Hf,
    x: null,
    X: null,
    y: Of,
    Y: Wf,
    Z: Vf,
    "%": zo
  }, D = {
    a: re,
    A: z,
    b: de,
    B: ge,
    c: null,
    d: Wo,
    e: Wo,
    f: Xf,
    g: sp,
    G: ip,
    H: Gf,
    I: Yf,
    j: qf,
    L: el,
    m: Kf,
    M: Zf,
    p: le,
    q: ie,
    Q: Vo,
    s: Go,
    S: Jf,
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
    "%": zo
  }, b = {
    a: $,
    A: S,
    b: _,
    B: F,
    c: w,
    d: Ho,
    e: Ho,
    f: Cf,
    g: Bo,
    G: Ro,
    H: Oo,
    I: Oo,
    j: wf,
    L: kf,
    m: yf,
    M: _f,
    p: y,
    q: vf,
    Q: jf,
    s: Tf,
    S: Sf,
    u: hf,
    U: mf,
    V: gf,
    w: pf,
    W: xf,
    x: I,
    X: C,
    y: Bo,
    Y: Ro,
    Z: bf,
    "%": Nf
  };
  M.x = T(n, M), M.X = T(a, M), M.c = T(t, M), D.x = T(n, D), D.X = T(a, D), D.c = T(t, D);
  function T(Z, te) {
    return function(ce) {
      var V = [], ue = -1, se = 0, he = Z.length, E, U, oe;
      for (ce instanceof Date || (ce = /* @__PURE__ */ new Date(+ce)); ++ue < he; )
        Z.charCodeAt(ue) === 37 && (V.push(Z.slice(se, ue)), (U = Eo[E = Z.charAt(++ue)]) != null ? E = Z.charAt(++ue) : U = E === "e" ? " " : "0", (oe = te[E]) && (E = oe(ce, U)), V.push(E), se = ue + 1);
      return V.push(Z.slice(se, ue)), V.join("");
    };
  }
  function j(Z, te) {
    return function(ce) {
      var V = Jn(1900, void 0, 1), ue = N(V, Z, ce += "", 0), se, he;
      if (ue != ce.length) return null;
      if ("Q" in V) return new Date(V.Q);
      if ("s" in V) return new Date(V.s * 1e3 + ("L" in V ? V.L : 0));
      if (te && !("Z" in V) && (V.Z = 0), "p" in V && (V.H = V.H % 12 + V.p * 12), V.m === void 0 && (V.m = "q" in V ? V.q : 0), "V" in V) {
        if (V.V < 1 || V.V > 53) return null;
        "w" in V || (V.w = 1), "Z" in V ? (se = Ua(Jn(V.y, 0, 1)), he = se.getUTCDay(), se = he > 4 || he === 0 ? Hr.ceil(se) : Hr(se), se = Js.offset(se, (V.V - 1) * 7), V.y = se.getUTCFullYear(), V.m = se.getUTCMonth(), V.d = se.getUTCDate() + (V.w + 6) % 7) : (se = Oa(Jn(V.y, 0, 1)), he = se.getDay(), se = he > 4 || he === 0 ? Br.ceil(se) : Br(se), se = hr.offset(se, (V.V - 1) * 7), V.y = se.getFullYear(), V.m = se.getMonth(), V.d = se.getDate() + (V.w + 6) % 7);
      } else ("W" in V || "U" in V) && ("w" in V || (V.w = "u" in V ? V.u % 7 : "W" in V ? 1 : 0), he = "Z" in V ? Ua(Jn(V.y, 0, 1)).getUTCDay() : Oa(Jn(V.y, 0, 1)).getDay(), V.m = 0, V.d = "W" in V ? (V.w + 6) % 7 + V.W * 7 - (he + 5) % 7 : V.w + V.U * 7 - (he + 6) % 7);
      return "Z" in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, Ua(V)) : Oa(V);
    };
  }
  function N(Z, te, ce, V) {
    for (var ue = 0, se = te.length, he = ce.length, E, U; ue < se; ) {
      if (V >= he) return -1;
      if (E = te.charCodeAt(ue++), E === 37) {
        if (E = te.charAt(ue++), U = b[E in Eo ? te.charAt(ue++) : E], !U || (V = U(Z, ce, V)) < 0) return -1;
      } else if (E != ce.charCodeAt(V++))
        return -1;
    }
    return V;
  }
  function y(Z, te, ce) {
    var V = u.exec(te.slice(ce));
    return V ? (Z.p = d.get(V[0].toLowerCase()), ce + V[0].length) : -1;
  }
  function $(Z, te, ce) {
    var V = g.exec(te.slice(ce));
    return V ? (Z.w = v.get(V[0].toLowerCase()), ce + V[0].length) : -1;
  }
  function S(Z, te, ce) {
    var V = f.exec(te.slice(ce));
    return V ? (Z.w = h.get(V[0].toLowerCase()), ce + V[0].length) : -1;
  }
  function _(Z, te, ce) {
    var V = m.exec(te.slice(ce));
    return V ? (Z.m = k.get(V[0].toLowerCase()), ce + V[0].length) : -1;
  }
  function F(Z, te, ce) {
    var V = x.exec(te.slice(ce));
    return V ? (Z.m = p.get(V[0].toLowerCase()), ce + V[0].length) : -1;
  }
  function w(Z, te, ce) {
    return N(Z, t, te, ce);
  }
  function I(Z, te, ce) {
    return N(Z, n, te, ce);
  }
  function C(Z, te, ce) {
    return N(Z, a, te, ce);
  }
  function P(Z) {
    return i[Z.getDay()];
  }
  function ee(Z) {
    return s[Z.getDay()];
  }
  function Y(Z) {
    return c[Z.getMonth()];
  }
  function R(Z) {
    return l[Z.getMonth()];
  }
  function B(Z) {
    return o[+(Z.getHours() >= 12)];
  }
  function H(Z) {
    return 1 + ~~(Z.getMonth() / 3);
  }
  function re(Z) {
    return i[Z.getUTCDay()];
  }
  function z(Z) {
    return s[Z.getUTCDay()];
  }
  function de(Z) {
    return c[Z.getUTCMonth()];
  }
  function ge(Z) {
    return l[Z.getUTCMonth()];
  }
  function le(Z) {
    return o[+(Z.getUTCHours() >= 12)];
  }
  function ie(Z) {
    return 1 + ~~(Z.getUTCMonth() / 3);
  }
  return {
    format: function(Z) {
      var te = T(Z += "", M);
      return te.toString = function() {
        return Z;
      }, te;
    },
    parse: function(Z) {
      var te = j(Z += "", !1);
      return te.toString = function() {
        return Z;
      }, te;
    },
    utcFormat: function(Z) {
      var te = T(Z += "", D);
      return te.toString = function() {
        return Z;
      }, te;
    },
    utcParse: function(Z) {
      var te = j(Z += "", !0);
      return te.toString = function() {
        return Z;
      }, te;
    }
  };
}
var Eo = { "-": "", _: " ", 0: "0" }, ft = /^\s*\d+/, uf = /^%/, df = /[\\^$*+?|[\]().{}]/g;
function We(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function ff(e) {
  return e.replace(df, "\\$&");
}
function Qn(e) {
  return new RegExp("^(?:" + e.map(ff).join("|") + ")", "i");
}
function er(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function pf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function hf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function mf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function gf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function xf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Ro(e, t, n) {
  var a = ft.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Bo(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function bf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function vf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function yf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Ho(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function wf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Oo(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function _f(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Sf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function kf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Cf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Nf(e, t, n) {
  var a = uf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function jf(e, t, n) {
  var a = ft.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Tf(e, t, n) {
  var a = ft.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Uo(e, t) {
  return We(e.getDate(), t, 2);
}
function Df(e, t) {
  return We(e.getHours(), t, 2);
}
function If(e, t) {
  return We(e.getHours() % 12 || 12, t, 2);
}
function $f(e, t) {
  return We(1 + hr.count(on(e), e), t, 3);
}
function Ji(e, t) {
  return We(e.getMilliseconds(), t, 3);
}
function Mf(e, t) {
  return Ji(e, t) + "000";
}
function Pf(e, t) {
  return We(e.getMonth() + 1, t, 2);
}
function Ff(e, t) {
  return We(e.getMinutes(), t, 2);
}
function Lf(e, t) {
  return We(e.getSeconds(), t, 2);
}
function Af(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Ef(e, t) {
  return We(Sa.count(on(e) - 1, e), t, 2);
}
function Qi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Vn(e) : Vn.ceil(e);
}
function Rf(e, t) {
  return e = Qi(e), We(Vn.count(on(e), e) + (on(e).getDay() === 4), t, 2);
}
function Bf(e) {
  return e.getDay();
}
function Hf(e, t) {
  return We(Br.count(on(e) - 1, e), t, 2);
}
function Of(e, t) {
  return We(e.getFullYear() % 100, t, 2);
}
function Uf(e, t) {
  return e = Qi(e), We(e.getFullYear() % 100, t, 2);
}
function Wf(e, t) {
  return We(e.getFullYear() % 1e4, t, 4);
}
function zf(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Vn(e) : Vn.ceil(e), We(e.getFullYear() % 1e4, t, 4);
}
function Vf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + We(t / 60 | 0, "0", 2) + We(t % 60, "0", 2);
}
function Wo(e, t) {
  return We(e.getUTCDate(), t, 2);
}
function Gf(e, t) {
  return We(e.getUTCHours(), t, 2);
}
function Yf(e, t) {
  return We(e.getUTCHours() % 12 || 12, t, 2);
}
function qf(e, t) {
  return We(1 + Js.count(kn(e), e), t, 3);
}
function el(e, t) {
  return We(e.getUTCMilliseconds(), t, 3);
}
function Xf(e, t) {
  return el(e, t) + "000";
}
function Kf(e, t) {
  return We(e.getUTCMonth() + 1, t, 2);
}
function Zf(e, t) {
  return We(e.getUTCMinutes(), t, 2);
}
function Jf(e, t) {
  return We(e.getUTCSeconds(), t, 2);
}
function Qf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ep(e, t) {
  return We(Zi.count(kn(e) - 1, e), t, 2);
}
function tl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Gn(e) : Gn.ceil(e);
}
function tp(e, t) {
  return e = tl(e), We(Gn.count(kn(e), e) + (kn(e).getUTCDay() === 4), t, 2);
}
function np(e) {
  return e.getUTCDay();
}
function rp(e, t) {
  return We(Hr.count(kn(e) - 1, e), t, 2);
}
function ap(e, t) {
  return We(e.getUTCFullYear() % 100, t, 2);
}
function sp(e, t) {
  return e = tl(e), We(e.getUTCFullYear() % 100, t, 2);
}
function op(e, t) {
  return We(e.getUTCFullYear() % 1e4, t, 4);
}
function ip(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Gn(e) : Gn.ceil(e), We(e.getUTCFullYear() % 1e4, t, 4);
}
function lp() {
  return "+0000";
}
function zo() {
  return "%";
}
function Vo(e) {
  return +e;
}
function Go(e) {
  return Math.floor(+e / 1e3);
}
var $n, nl;
cp({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function cp(e) {
  return $n = cf(e), nl = $n.format, $n.parse, $n.utcFormat, $n.utcParse, $n;
}
function up(e) {
  return new Date(e);
}
function dp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function rl(e, t, n, a, o, s, i, l, c, u) {
  var d = Yi(), f = d.invert, h = d.domain, g = u(".%L"), v = u(":%S"), x = u("%I:%M"), p = u("%I %p"), m = u("%a %d"), k = u("%b %d"), M = u("%B"), D = u("%Y");
  function b(T) {
    return (c(T) < T ? g : l(T) < T ? v : i(T) < T ? x : s(T) < T ? p : a(T) < T ? o(T) < T ? m : k : n(T) < T ? M : D)(T);
  }
  return d.invert = function(T) {
    return new Date(f(T));
  }, d.domain = function(T) {
    return arguments.length ? h(Array.from(T, dp)) : h().map(up);
  }, d.ticks = function(T) {
    var j = h();
    return e(j[0], j[j.length - 1], T ?? 10);
  }, d.tickFormat = function(T, j) {
    return j == null ? b : u(j);
  }, d.nice = function(T) {
    var j = h();
    return (!T || typeof T.range != "function") && (T = t(j[0], j[j.length - 1], T ?? 10)), T ? h(Gd(j, T)) : d;
  }, d.copy = function() {
    return Gi(d, rl(e, t, n, a, o, s, i, l, c, u));
  }, d;
}
function Qs() {
  return _a.apply(rl(of, lf, on, cr, Sa, hr, Zs, Ks, An, nl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function fp({
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
  const u = Ue(null), [d, f] = Oe(!1), [h, g] = Oe(!1), v = t(e.start), x = t(e.end), p = Math.max(x - v, 20), m = () => {
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
  }, D = () => {
    a?.(e);
  }, b = (_) => {
    _.key === "Enter" ? (_.preventDefault(), M()) : _.key === " " && (_.preventDefault(), D());
  }, T = () => {
    f(!0);
  }, j = () => {
    f(!1);
  }, N = () => {
    g(!0), l?.();
  }, y = () => {
    g(!1);
  }, $ = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), S = {
    "--task-left": `${v}px`,
    "--task-width": `${p}px`,
    "--task-color": m(),
    left: `${v}px`,
    width: `${p}px`,
    backgroundColor: m()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": s,
      className: $,
      style: S,
      onClick: M,
      onDoubleClick: D,
      onKeyDown: b,
      onMouseDown: T,
      onMouseUp: j,
      onFocus: N,
      onBlur: y,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
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
function pp({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let g = e.getTime(); g <= t.getTime(); g += 864e5)
    a.push(new Date(g));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Oe(-1), c = Ue(null), u = (g) => {
    if (g.key === "ArrowLeft") {
      g.preventDefault();
      const v = Math.max(0, i === -1 ? 0 : i - 1);
      l(v), h(v);
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const v = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(v), h(v);
    } else if (g.key === "ArrowDown")
      g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (g.key === "Home")
      g.preventDefault(), l(0), h(0);
    else if (g.key === "End") {
      g.preventDefault();
      const v = a.length - 1;
      l(v), h(v);
    }
  }, d = (g) => {
    if (g.key === "ArrowDown")
      g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (g.key === "ArrowRight") {
      g.preventDefault();
      const v = c.current;
      v && v.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (g) => {
    const v = c.current?.querySelector(`[data-date-index="${g}"]`);
    v && v.focus();
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
            ref: c,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: u,
            onFocus: f,
            children: a.map((g, v) => {
              const x = g.getTime() === s.getTime(), p = i === v;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": v,
                  className: `date-column ${x ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${g.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${x ? " (Today)" : ""}`,
                  onFocus: () => l(v),
                  onKeyDown: u,
                  children: g.toLocaleDateString("en-GB", {
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
function hp({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = Oe(!1), [u, d] = Oe(-1), f = Ue(null);
  Ye(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
  const h = (x) => {
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
          t.length > 0 && (x.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (x.key) {
      case "ArrowLeft":
        x.preventDefault();
        const p = Math.max(0, u - 1);
        d(p), f.current?.querySelector(`[data-task-index="${p}"]`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault();
        const k = Math.min(t.length - 1, u + 1);
        d(k), f.current?.querySelector(`[data-task-index="${k}"]`)?.focus();
        break;
      case "Enter":
        x.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        x.preventDefault(), u >= 0 && o?.(t[u]);
        break;
      case "Escape":
        x.preventDefault(), c(!1), d(-1), f.current?.focus();
        break;
    }
  }, g = (x) => {
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
    l && d(x);
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
            onKeyDown: g,
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
            children: t.map((x, p) => /* @__PURE__ */ r.jsx(
              fp,
              {
                task: x,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && u === p,
                taskIndex: p,
                tabIndex: l && u === p ? 0 : -1,
                onFocus: () => v(p)
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
function jv({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ue(null), [l, c] = Oe(800), u = Me(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const x = new Date(n);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [n]), d = Me(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const x = new Date(a);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [a]), f = Me(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  Ye(() => {
    if (!i.current || typeof window > "u") return;
    const x = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!x) return;
    const p = new x((m) => {
      const k = m[0];
      k && c(Math.max(k.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const h = Me(
    () => Qs().domain([u, d]).range([0, l]),
    [u, d, l]
  ), g = Me(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const m = x.get(p.resourceId) || [];
      m.push(p), x.set(p.resourceId, m);
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
      onKeyDown: v,
      children: [
        /* @__PURE__ */ r.jsx(pp, { viewStart: u, viewEnd: d, dateCount: f }),
        /* @__PURE__ */ r.jsx(
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
            children: e.map((x, p) => /* @__PURE__ */ r.jsx(
              hp,
              {
                resource: x,
                tasks: g.get(x.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: p,
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
const Or = ({
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
) }), mp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Ct.Children.toArray(t).filter(
    (p) => Ct.isValidElement(p) && (p.type === Or || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], u = () => t ? c() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const x = u();
    if (x && x.length > 0) {
      const p = x.slice().reverse().find((m) => m.href && !m.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = u(), h = d(), g = _e(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), v = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: g,
      "aria-label": v,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Ct.Children.map(t, (x, p) => Ct.isValidElement(x) && (x.type === Or || x.type?.displayName === "BreadcrumbItem") ? Ct.cloneElement(x, { key: p }) : null)
        ) : (
          // Render from items array
          f?.filter((x) => x.active || !!x.href).map((x, p) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: x.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...x.attributes || {},
              children: x.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: x.href,
              role: "link",
              ...x.attributes || {},
              children: x.text
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
}, gp = mp;
gp.Item = Or;
Or.displayName = "BreadcrumbItem";
const al = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = Oe(!1);
  Ye(() => {
    s(!0);
  }, []), Ye(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const u = c.target, d = u.getAttribute("href");
      if (d && d.startsWith("#")) {
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(d) : null;
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const h = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          u.__nhsSkipLinkTimeout = h;
        }
      }
    };
    try {
      const c = document.querySelectorAll(".nhsuk-skip-link");
      return c.forEach((u) => {
        u.addEventListener("click", l);
      }), () => {
        try {
          c.forEach((u) => {
            u.removeEventListener("click", l);
            const d = u.__nhsSkipLinkTimeout;
            d && window.clearTimeout && window.clearTimeout(d);
          });
        } catch (u) {
          console.warn("SkipLink cleanup error:", u);
        }
      };
    } catch (c) {
      return console.warn("SkipLink initialization error:", c), () => {
      };
    }
  }, [o]);
  const i = _e("nhsuk-skip-link", n);
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
}, Tv = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = _e("nhsuk-pagination", o);
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
}, Dv = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = _e("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, sl = Ct.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: c,
  imgAlt: u,
  ...d
}, f) => {
  const h = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), g = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), x = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const k = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      an,
      {
        level: a,
        className: v,
        children: k()
      }
    );
  }, p = () => d.children ? d.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, m = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
        c && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: u || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: g, children: [
          x(),
          p(),
          m()
        ] })
      ]
    }
  );
});
sl.displayName = "Card";
const Iv = ({
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
}, $v = ({
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
}, Mv = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": u,
  id: d,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": g
}) => {
  const v = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), x = [
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
      an,
      {
        level: a,
        className: x,
        children: M
      }
    );
  }, m = () => c || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: v,
      "data-testid": u,
      id: d,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": g,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: m() })
      ]
    }
  );
}, xp = ({
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
  const u = _e(
    "nhsuk-panel",
    t
  ), d = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    an,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    an,
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
  return /* @__PURE__ */ r.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    f()
  ] });
}, Pv = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = _e("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, Fv = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = _e(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, u) => /* @__PURE__ */ r.jsx(
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
    u
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: o, ...a, children: e.map((l, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, tr = { current: null }, bp = () => {
  if (tr.current) return tr.current;
  try {
    tr.current = require("prismjs");
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
    tr.current = null;
  }
  return tr.current;
}, vp = (e) => {
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
}, Ur = (e, t, n) => {
  if (n || !t) return e;
  const a = bp();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return vp(e);
}, yp = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: u,
  tableClasses: d,
  classes: f,
  attributes: h,
  "data-testid": g,
  columns: v,
  data: x,
  visuallyHiddenCaption: p = !1
}) => {
  const m = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), k = _e(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), M = _e(f), D = (y, $) => {
    const S = _e(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${y.format}`]: y.format
      },
      y.classes
    ), _ = {
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
      const w = Array.isArray(y.code), I = w ? y.code.join(`
`) : y.code, C = w || I.includes(`
`), P = {
        className: _e("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": C,
          "nhsuk-table__code--inline": !C
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, ee = Ur(I, y.codeLanguage);
      F = C ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...P,
          dangerouslySetInnerHTML: { __html: ee }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...P,
          dangerouslySetInnerHTML: { __html: ee }
        }
      );
    } else
      F = y.text;
    return /* @__PURE__ */ r.jsx("th", { className: S, ..._, children: F }, $);
  }, b = (y, $, S) => {
    const _ = o && S || y.rowHeader, F = _e(
      _ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${_ ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), w = {
      ..._ && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && {
        role: _ ? "rowheader" : "cell",
        ...y.header && { "data-label": y.header }
      },
      ...y.attributes
    };
    let I;
    if (y.node != null)
      I = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      I = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const ee = Array.isArray(y.code), Y = ee ? y.code.join(`
`) : y.code, R = ee || Y.includes(`
`), B = {
        className: _e("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, H = Ur(
        Y,
        y.codeLanguage,
        y.disableHighlight
      );
      I = R ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...B,
          dangerouslySetInnerHTML: { __html: H }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...B,
          dangerouslySetInnerHTML: { __html: H }
        }
      );
    } else
      I = y.text;
    const C = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && y.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      I
    ] }), P = _ ? "th" : "td";
    return /* @__PURE__ */ r.jsx(P, { className: F, ...w, children: C }, $);
  };
  let T = t, j = e;
  !T && v && v.length && (T = v.map((y) => ({
    text: y.title,
    format: y.format,
    classes: y.headerClasses,
    attributes: y.headerAttributes
  }))), !j && v && x && x.length && (j = x.map((y, $) => v.map((S) => {
    const _ = S.accessor ? S.accessor(y, $) : y[S.key];
    let F = { format: S.format, classes: S.cellClasses, attributes: S.cellAttributes };
    if (S.rowHeader && (F.rowHeader = !0), S.render) {
      const w = S.render(_, y, $, S);
      return w == null || typeof w == "boolean" ? { ...F, text: "" } : typeof w == "string" || typeof w == "number" ? { ...F, text: String(w) } : { ...F, ...w };
    }
    return { ...F, text: _ != null ? String(_) : "" };
  })));
  const N = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: k,
      ...s && { role: "table" },
      ...h,
      ...g && { "data-testid": g },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: _e(m, p && "nhsuk-u-visually-hidden"), children: n }),
        T && T.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: T.map(
              (y, $) => D(y, $)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: j && j.map((y, $) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: y.map(
              (S, _) => b(S, _, _ === 0)
            )
          },
          $
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(xp, { className: u, children: [
    i && /* @__PURE__ */ r.jsx(an, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    N()
  ] }) : M ? /* @__PURE__ */ r.jsx("div", { className: M, children: N() }) : N();
}, wp = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = _e(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, ol = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, il = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: u,
  rowspan: d,
  attributes: f,
  responsive: h,
  as: g = "th"
}) => {
  const v = _e(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    c
  ), x = {
    scope: "col",
    ...u && { colSpan: u },
    ...d && { rowSpan: d },
    ...h && { role: "columnheader" },
    ...f
  };
  let p;
  if (n != null) p = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) p = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const k = Array.isArray(a), M = k ? a.join(`
`) : a, D = k || M.includes(`
`), b = {
      className: _e("nhsuk-table__code", s, {
        "nhsuk-table__code--block": D,
        "nhsuk-table__code--inline": !D
      }),
      ...o ? { "data-language": o } : {}
    }, T = Ur(
      M,
      o,
      i
    );
    p = D ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...b,
        dangerouslySetInnerHTML: { __html: T }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: T } });
  } else p = e;
  const m = g;
  return /* @__PURE__ */ r.jsx(m, { className: v, ...x, children: p });
}, _p = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: u,
  rowspan: d,
  attributes: f,
  responsive: h,
  rowHeader: g
}) => {
  const v = !!g, x = v ? "th" : "td", p = _e(
    v ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${v ? "header" : "cell"}--${l}`,
    c
  ), m = {
    ...u && { colSpan: u },
    ...d && { rowSpan: d },
    ...v && { scope: "row" },
    ...h && { role: v ? "rowheader" : "cell" },
    ...f
  };
  let k;
  if (n != null) k = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) k = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const M = Array.isArray(a), D = M ? a.join(`
`) : a, b = M || D.includes(`
`), T = {
      className: _e("nhsuk-table__code", s, {
        "nhsuk-table__code--block": b,
        "nhsuk-table__code--inline": !b
      }),
      ...o ? { "data-language": o } : {}
    }, j = Ur(D, o, i);
    k = b ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: j } }) }) : /* @__PURE__ */ r.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: j } });
  } else k = e;
  return /* @__PURE__ */ r.jsx(x, { className: p, ...m, children: k });
}, ln = yp;
ln.Caption = wp;
ln.BodyRow = ol;
ln.HeaderCell = il;
ln.Cell = _p;
let Yo = !1, qo = !1;
Object.defineProperty(ln, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Yo && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Yo = !0), ol;
  }
});
Object.defineProperty(ln, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !qo && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), qo = !0), il;
  }
});
const Lv = qn(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: u,
  "data-testid": d,
  ...f
}, h) => {
  const g = n !== void 0, [v, x] = Oe(() => t || e[0]?.id || ""), p = g ? n : v, m = Ue(null), k = Ue(/* @__PURE__ */ new Map()), M = ve(($) => {
    g || x($), a?.($);
  }, [g, a]), D = ve(($) => {
    o?.($), l && M($);
  }, [o, l, M]), b = ve(($, S) => {
    const _ = e.filter((I) => !I.disabled).map((I) => I.id), F = _.indexOf(S);
    let w = null;
    switch ($.key) {
      case "ArrowLeft":
        w = F > 0 ? F - 1 : _.length - 1;
        break;
      case "ArrowRight":
        w = F < _.length - 1 ? F + 1 : 0;
        break;
      case "Home":
        w = 0;
        break;
      case "End":
        w = _.length - 1;
        break;
      case "Escape":
        $.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (w !== null) {
      $.preventDefault();
      const I = _[w], C = k.current.get(I);
      C && (C.focus(), D(I));
    }
  }, [e, D, i]), T = ve(($, S) => {
    S ? k.current.set($, S) : k.current.delete($);
  }, []), j = ve(($) => {
    const S = k.current.get($);
    S && S.focus();
  }, []);
  Ni(h, () => ({
    focusTab: j,
    getActiveTab: () => p,
    getTabListElement: () => m.current
  }), [j, p]);
  const N = ve(($) => {
    const S = $.relatedTarget;
    m.current?.contains(S) || s?.();
  }, [s]), y = _e("nhsuk-tabs", c);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      id: u,
      "data-testid": d,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: m,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: N,
                children: e.map(($) => {
                  const S = $.id === p, _ = $.disabled, F = _e("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": S,
                    "nhsuk-tabs__list-item--disabled": _
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: F, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (w) => T($.id, w),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": S,
                      "aria-controls": `${$.id}-panel`,
                      id: `${$.id}-tab`,
                      tabIndex: S ? 0 : -1,
                      disabled: _,
                      onClick: () => !_ && M($.id),
                      onKeyDown: (w) => !_ && b(w, $.id),
                      onFocus: () => !_ && D($.id),
                      ...$.attributes,
                      children: $.label
                    }
                  ) }, $.id);
                })
              }
            )
          }
        ),
        e.map(($) => {
          const S = $.id === p;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${$.id}-tab`,
              id: `${$.id}-panel`,
              hidden: !S,
              children: $.content
            },
            $.id
          );
        })
      ]
    }
  );
}), Sp = qn(
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
  }, u) => {
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
        ref: u,
        id: i,
        className: d,
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
Sp.displayName = "Details";
const kp = qn(
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
    const u = [
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
    ), f = (g) => t === "cross" && !a ? `do not ${g}` : g, h = () => /* @__PURE__ */ r.jsx(
      an,
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
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: u.join(" "), role: "list", children: n.map((g, v) => /* @__PURE__ */ r.jsxs("li", { children: [
            d(),
            f(g.item)
          ] }, v)) }) })
        ]
      }
    );
  }
);
kp.displayName = "DoDontList";
const Cp = qn(
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
  }, u) => {
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
        ref: u,
        id: i,
        className: d,
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
Cp.displayName = "Expander";
const Np = qn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, f = `${t}-${u}-status`, h = !!l.href, g = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), v = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        jp,
        {
          item: l,
          itemClasses: g,
          hasLink: h,
          hintId: d,
          statusId: f,
          ariaDescribedBy: v
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
), jp = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const u = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: d,
        href: e.href,
        "aria-describedby": s,
        children: u
      }
    ) : /* @__PURE__ */ r.jsx("div", { className: e.title.classes || "", children: u });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ r.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const u = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ r.jsx(Ge, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ r.jsx("div", { className: u, id: o, children: d });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Np.displayName = "TaskList";
const Av = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => o || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), u = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: u,
      ...i,
      children: [
        Ci(
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
        c()
      ]
    }
  );
}, Ev = ({
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
}, Tp = ({
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
      Ir,
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
      Ir,
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
] }), Dp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Ge, { color: Ip(n.status), text: n.label }) }, n.status)) });
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
const Rv = ({
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
  getSlotAriaLabel: u,
  toolbar: d,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: g = !0,
  legendPlacement: v = "bottom",
  onA11yModeChange: x
}) => {
  const [p, m] = Oe("grid"), k = i || p, [M, D] = Oe(a || []), b = n ?? M, T = Me(() => {
    const w = /* @__PURE__ */ new Set();
    return e.forEach((I) => w.add(new Date(I.start).getTime())), Array.from(w).sort((I, C) => I - C);
  }, [e]), j = Me(() => {
    const w = {};
    return e.forEach((I) => {
      const C = new Date(I.start).getTime();
      w[C] || (w[C] = {});
      const P = I.capacity - I.booked - (I.held || 0);
      w[C][I.sessionId] = { slot: I, remaining: P };
    }), w;
  }, [e]), N = ve((w) => {
    if (s === "single") {
      const I = [w.id];
      n || D(I), o?.(I, { lastAction: "select" });
    } else {
      const I = b.includes(w.id), C = I ? b.filter((P) => P !== w.id) : [...b, w.id];
      n || D(C), o?.(C, { lastAction: I ? "deselect" : "select" });
    }
  }, [s, b, n, o]), y = Me(() => h || (g ? Array.from(new Set(e.map((I) => I.status))).map((I) => ({
    status: I,
    label: I.charAt(0).toUpperCase() + I.slice(1)
  })) : void 0), [h, g, e]), $ = y ? /* @__PURE__ */ r.jsx(
    Dp,
    {
      items: y,
      orientation: v === "left" || v === "right" ? "vertical" : "horizontal"
    }
  ) : null, S = (w) => {
    i || m(w), x?.(w);
  }, _ = d || (f ? /* @__PURE__ */ r.jsx(
    Tp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: k,
      onA11yModeChange: S
    }
  ) : null), F = /* @__PURE__ */ r.jsx("div", { style: c, className: _e(l), children: /* @__PURE__ */ r.jsx(ts, { className: _e("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Sn, { children: /* @__PURE__ */ r.jsx(sr, { width: _n.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    _,
    v === "top" && $,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((w) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => N(w), "aria-pressed": b.includes(w.id), children: [
      nr(new Date(w.start)),
      " – ",
      nr(new Date(w.end)),
      " (",
      w.status,
      ")"
    ] }) }, w.id)) }),
    v === "bottom" && $
  ] }) }) }) }) });
  return k === "list" ? F : /* @__PURE__ */ r.jsx("div", { style: c, className: _e(l), children: /* @__PURE__ */ r.jsx(ts, { className: _e("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Sn, { children: /* @__PURE__ */ r.jsx(sr, { width: _n.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    _,
    v === "top" && $,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": T.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((w) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${w.specialty}`, className: "nhs-slot-matrix__session-header", children: w.specialty }, w.id))
      ] }),
      T.map((w) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": nr(new Date(w)), children: nr(new Date(w)) }),
        t.map((I) => {
          const C = j[w]?.[I.id];
          if (!C)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, I.id);
          const { slot: P, remaining: ee } = C, Y = b.includes(P.id), R = u ? u(P) : `Slot ${nr(new Date(P.start))} ${P.status}${ee === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": P.status,
              className: _e("nhs-slot-matrix__cell", Y && "nhs-slot-matrix__cell--selected"),
              "aria-label": R,
              "aria-selected": Y || void 0,
              onClick: () => N(P),
              children: ee > 0 ? `${ee} left` : "Full"
            },
            P.id
          );
        })
      ] }, w))
    ] }),
    v === "bottom" && $
  ] }) }) }) }) });
};
function Xo(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function nr(e) {
  return `${Xo(e.getHours())}:${Xo(e.getMinutes())}`;
}
const $p = ({
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
  ].filter(Boolean).join(" "), u = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(an, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
      children: u
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: u
    }
  );
}, Bv = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(ts, { children: /* @__PURE__ */ r.jsx(Sn, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    sr,
    {
      width: _n.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx($p, { ...o })
    },
    s
  )) }) }) });
}, Mp = Ct.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: c,
    ariaLabelledby: u,
    ariaDescribedby: d,
    className: f,
    tableClassName: h,
    bordered: g = !1,
    striped: v = !1,
    responsive: x = !1,
    tableType: p = "default"
  }, m) => {
    const k = Ue(null), M = Ue(null), D = Ue(null);
    Ct.useImperativeHandle(m, () => k.current, []);
    const [b, T] = Oe(0), [j, N] = Oe(0), [y, $] = Oe("headers"), [S, _] = Oe("browse"), F = t.length, w = e.length, I = Me(() => !n || n.length === 0 ? e : [...e].sort((H, re) => {
      for (const { key: z, direction: de } of n) {
        const ge = H[z], le = re[z];
        if (ge == null && le == null) continue;
        if (ge == null) return 1;
        if (le == null) return -1;
        let ie = 0;
        if (typeof ge == "number" && typeof le == "number" ? ie = ge - le : ie = String(ge).localeCompare(String(le)), ie !== 0)
          return de === "asc" ? ie : -ie;
      }
      return 0;
    }), [e, n]), C = ve((H, re) => {
      setTimeout(() => {
        const z = k.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${re + 1})`
        );
        z && (z.focus(), typeof z.scrollIntoView == "function" && z.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), P = ve((H) => {
      setTimeout(() => {
        const re = k.current?.querySelector(`th:nth-child(${H + 1})`);
        re && (re.focus(), typeof re.scrollIntoView == "function" && re.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ee = ve((H) => {
      a?.(H);
    }, [a]), Y = ve((H) => {
      s?.(H);
    }, [s]), R = ve((H) => {
      const { key: re } = H;
      switch (re) {
        case "Enter":
          if (H.preventDefault(), y === "headers" && S === "browse")
            _("navigate"), P(j);
          else if (y === "headers" && S === "navigate") {
            const z = t[j];
            z && ee(z.key);
          } else y === "cells" && S === "browse" ? (_("navigate"), C(b, j)) : y === "cells" && S === "navigate" && Y(b);
          break;
        case "Escape":
          H.preventDefault(), (y === "headers" && S === "navigate" || y === "cells" && S === "navigate") && _("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), S === "navigate" || S === "browse" && y === "headers") {
            if (y === "headers") {
              const z = Math.max(0, j - 1);
              N(z), P(z);
            } else if (y === "cells") {
              const z = Math.max(0, j - 1);
              N(z), C(b, z);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), S === "navigate" || S === "browse" && y === "headers") {
            if (y === "headers") {
              const z = Math.min(F - 1, j + 1);
              N(z), P(z);
            } else if (y === "cells") {
              const z = Math.min(F - 1, j + 1);
              N(z), C(b, z);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), y === "cells") {
            if (S === "browse") {
              const z = Math.max(0, b - 1);
              T(z), C(z, 0), N(0);
            } else if (S === "navigate")
              if (b > 0) {
                const z = b - 1;
                T(z), C(z, j);
              } else
                $("headers"), _("browse"), P(j);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), y === "headers" && S === "browse")
            $("cells"), T(0), N(0), C(0, 0);
          else if (y === "cells") {
            const z = w - 1;
            if (S === "browse") {
              const de = Math.min(z, b + 1);
              T(de), C(de, 0), N(0);
            } else if (S === "navigate" && b < z) {
              const de = b + 1;
              T(de), C(de, j);
            }
          }
          break;
        case "Home":
          H.preventDefault(), y === "headers" ? (N(0), P(0)) : y === "cells" && (H.ctrlKey ? (T(0), N(0), C(0, 0)) : (N(0), C(b, 0)));
          break;
        case "End":
          if (H.preventDefault(), y === "headers") {
            const z = F - 1;
            N(z), P(z);
          } else if (y === "cells")
            if (H.ctrlKey) {
              const z = w - 1, de = F - 1;
              T(z), N(de), C(z, de);
            } else {
              const z = F - 1;
              N(z), C(b, z);
            }
          break;
        case " ":
          if (H.preventDefault(), y === "headers" && S === "navigate") {
            const z = t[j];
            z && ee(z.key);
          } else y === "cells" && S === "navigate" && Y(b);
          break;
      }
    }, [
      y,
      S,
      j,
      b,
      F,
      w,
      t,
      C,
      P,
      ee,
      Y
    ]);
    Ye(() => {
      const H = k.current;
      if (H)
        return H.addEventListener("keydown", R), () => H.removeEventListener("keydown", R);
    }, [R]);
    const B = _e(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": g,
        "nhsuk-table--striped": v,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: k,
        className: B,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: M, role: "row", children: t.map((H, re) => {
            const z = n?.find((le) => le.key === H.key), de = !!z, ge = y === "headers" && j === re;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: _e("sortable-header", {
                  "sortable-header--focused": ge
                }),
                role: "columnheader",
                tabIndex: ge ? 0 : -1,
                onClick: () => ee(H.key),
                onKeyDown: (le) => {
                  (le.key === "Enter" || le.key === " ") && (le.preventDefault(), ee(H.key));
                },
                "aria-sort": de ? z?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: H.label }),
                  de && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((le) => le.key === H.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: z?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              H.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: D, className: "nhsuk-table__body", role: "rowgroup", children: I.map((H, re) => {
            const z = o === re, de = y === "cells" && b === re;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: _e("data-row", {
                  "data-row--selected": z,
                  "data-row--focused": de
                }),
                "aria-selected": z,
                children: t.map((ge, le) => {
                  const ie = ge.tableRenderer ? ge.tableRenderer(H) : ge.render ? ge.render(H) : H[ge.key], Z = y === "cells" && b === re && j === le, te = () => typeof ie == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: ie ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: ie ? "Yes" : "No" })
                  ] }) : String(ie ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: _e("data-cell", {
                        "data-cell--focused": Z
                      }),
                      tabIndex: Z ? 0 : -1,
                      onClick: () => Y(re),
                      children: te()
                    },
                    ge.key
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
Mp.displayName = "AriaDataGrid";
const ll = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const f = Ue(null), h = Ue(null), g = Ue(null), v = ve((y, $) => {
    c || (h.current = $, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", $));
  }, [c]), x = ve((y, $) => {
    c || h.current === $ || (y.preventDefault(), y.dataTransfer.dropEffect = "move", g.current = $);
  }, [c]), p = ve((y, $) => {
    if (c) return;
    y.preventDefault();
    const S = h.current;
    if (!S || S === $) return;
    const _ = e.findIndex((w) => w.key === S), F = e.findIndex((w) => w.key === $);
    if (_ !== -1 && F !== -1) {
      const w = [...e], [I] = w.splice(_, 1);
      w.splice(F, 0, I), n(w);
    }
    h.current = null, g.current = null;
  }, [c, e, n]), m = ve(() => {
    h.current = null, g.current = null;
  }, []), k = ve((y) => {
    const $ = t.find((S) => S.key === y);
    return $ ? $.label : y;
  }, [t]), M = ve((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), D = ve((y) => {
    if (c) return;
    const $ = e.map(
      (S) => S.key === y ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    n($);
  }, [e, n, c]), b = ve((y) => {
    if (c) return;
    const $ = e.filter((S) => S.key !== y);
    n($);
  }, [e, n, c]), T = ve(() => {
    c || n([]);
  }, [n, c]), j = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const y = e.map(($, S) => {
      const _ = $.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${k($.key)} (${_})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const $ = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${$}`;
    }
  }, N = Me(() => {
    const y = ["sort-description"];
    return l && y.push("sort-help"), d && y.push(d), y.join(" ");
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
        children: j()
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": u,
          "aria-describedby": N,
          children: e.map((y, $) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (S) => v(S, y.key),
              onDragOver: (S) => x(S, y.key),
              onDrop: (S) => p(S, y.key),
              onDragEnd: m,
              onClick: () => D(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ r.jsx(
                Ge,
                {
                  color: M($),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => b(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${$ + 1}`, children: $ + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: k(y.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (S) => {
                          S.stopPropagation(), D(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${k(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
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
        mt,
        {
          variant: "secondary",
          onClick: T,
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
function Pp(e, t) {
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
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, s); u++)
        i[u] = e.tabLoadingStates[u], l[u] = e.tabErrors[u], c[u] = e.selectedRows[u];
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
const is = qn(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: c,
    ariaDescription: u,
    className: d = "",
    disabled: f = !1,
    orientation: h = "horizontal",
    id: g,
    isLoading: v = !1,
    loadingComponent: x,
    error: p = null,
    errorComponent: m,
    "data-testid": k,
    actions: M,
    actionsMinGap: D = 16,
    forceActionsAbove: b = !1
  } = t, j = Ue(
    g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, N = typeof u == "string" && u.trim() !== "" && !/\s/.test(u), y = `${j}-description`, $ = `${j}-navigation-help`, {
    dataComparator: S = (L, G) => JSON.stringify(L) === JSON.stringify(G),
    filterFunction: _ = (L) => L,
    booleanRenderer: F = (L) => L ? "✓" : "✗"
  } = a || {}, w = s !== void 0, I = s ?? 0, [C, P] = Oe({
    focusArea: "tabs",
    focusedTabIndex: I,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ee = Me(() => ({
    selectedIndex: I,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [I]), [Y, R] = ji(Pp, ee);
  Ye(() => {
    const L = Y.tabLoadingStates.length, G = o.length;
    L !== G && R({ type: "ADJUST_ARRAYS", payload: { newLength: G } });
  }, [o.length]), Ye(() => {
    w && R({ type: "SET_SELECTED_INDEX", payload: I });
  }, [I, w]), Ye(() => {
    P((L) => ({
      ...L,
      focusArea: "tabs",
      focusedTabIndex: Y.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [Y.selectedIndex]), Ye(() => {
    l && l(Y.globalSelectedRowData);
  }, [Y.globalSelectedRowData, l]);
  const B = ve(
    (L, G) => S(L, G),
    [S]
  ), H = ve(
    (L) => {
      L >= 0 && L < o.length && !o[L].disabled && (R({ type: "SET_SELECTED_INDEX", payload: L }), P((G) => ({
        ...G,
        focusedTabIndex: L,
        focusArea: "tabs"
      })), i?.(L));
    },
    [o, i]
  ), re = Ue(!1), z = ve(
    (L, G) => {
      if (!G?.force && !re.current && L === 0) {
        re.current = !0;
        return;
      }
      re.current = !0, setTimeout(() => {
        const K = de.current[L], Q = K?.parentElement;
        if (K && Q) {
          const X = K.offsetLeft, ae = K.offsetWidth, me = Q.clientWidth, be = X - me / 2 + ae / 2;
          try {
            Q.scrollTo({
              left: Math.max(0, be),
              behavior: "smooth"
            });
          } catch {
            K.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!K,
          tabListElementExists: !!Q
        });
      }, 50);
    },
    []
  ), de = Ue([]), ge = Ue([]), le = ve(
    (L, G) => {
      const K = Y.sortConfig || [], Q = K.find(
        (me) => me.key === G
      );
      let X;
      Q ? Q.direction === "asc" ? X = K.map(
        (me) => me.key === G ? { ...me, direction: "desc" } : me
      ) : X = K.filter(
        (me) => me.key !== G
      ) : X = [...K, { key: G, direction: "asc" }], R({
        type: "SET_SORT",
        payload: X
      }), o[L].onSort?.(G);
    },
    [Y.sortConfig, o]
  ), ie = ve(
    (L) => {
      setTimeout(() => {
        const G = document.querySelector(
          `[data-tab-panel="${Y.selectedIndex}"] th:nth-child(${L + 1})`
        );
        G && G.focus();
      }, 0);
    },
    [Y.selectedIndex]
  ), Z = ve(
    (L) => F(L),
    [F]
  ), te = ve(
    (L, G) => {
      setTimeout(() => {
        const K = document.querySelector(
          `[data-tab-panel="${Y.selectedIndex}"] tbody tr:nth-child(${L + 1}) td:nth-child(${G + 1})`
        );
        K && K.focus();
      }, 0);
    },
    [Y.selectedIndex]
  );
  Ye(() => {
    C.isGridActive && (C.focusArea === "headers" ? setTimeout(() => {
      ie(C.focusedHeaderIndex);
    }, 0) : C.focusArea === "cells" && setTimeout(() => {
      te(
        C.focusedRowIndex,
        C.focusedColumnIndex
      );
    }, 0));
  }, [
    C.focusArea,
    C.isGridActive,
    C.focusedHeaderIndex,
    C.focusedRowIndex,
    C.focusedColumnIndex,
    ie,
    te
  ]), Ye(() => {
    z(Y.selectedIndex);
  }, [Y.selectedIndex, z]);
  const ce = ve(
    (L, G) => {
      const { key: K } = L, Q = o[Y.selectedIndex], X = Q?.columns.length || 0;
      switch (K) {
        case "ArrowLeft":
          L.preventDefault();
          const ae = Math.max(0, G - 1);
          P((Ce) => ({
            ...Ce,
            focusedHeaderIndex: ae
          })), ie(ae);
          break;
        case "ArrowRight":
          L.preventDefault();
          const me = Math.min(X - 1, G + 1);
          P((Ce) => ({
            ...Ce,
            focusedHeaderIndex: me
          })), ie(me);
          break;
        case "ArrowUp":
          L.preventDefault(), P((Ce) => ({
            ...Ce,
            focusArea: "tabs",
            focusedTabIndex: Y.selectedIndex
          })), z(Y.selectedIndex), de.current[Y.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          L.preventDefault(), P((Ce) => ({
            ...Ce,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: G,
            isGridActive: !0
          }));
          break;
        case "Home":
          L.preventDefault(), P((Ce) => ({ ...Ce, focusedHeaderIndex: 0 })), ie(0);
          break;
        case "End":
          L.preventDefault();
          const be = X - 1;
          P((Ce) => ({
            ...Ce,
            focusedHeaderIndex: be
          })), ie(be);
          break;
        case "Enter":
        case " ":
          L.preventDefault();
          const we = Q?.columns[G]?.key;
          we && le(Y.selectedIndex, we);
          break;
      }
    },
    [
      o,
      Y.selectedIndex,
      le,
      P,
      ie,
      te,
      de
    ]
  ), V = ve(
    (L, G, K) => {
      const { key: Q } = L, X = o[Y.selectedIndex], ae = X?.data.length || 0, me = X?.columns.length || 0;
      switch (Q) {
        case "ArrowUp":
          if (L.preventDefault(), G === 0)
            P((pe) => ({
              ...pe,
              focusArea: "headers",
              focusedHeaderIndex: K,
              isGridActive: !1
            })), ie(K);
          else {
            const pe = G - 1;
            P((De) => ({
              ...De,
              focusedRowIndex: pe
            })), te(pe, K);
          }
          break;
        case "ArrowDown":
          L.preventDefault();
          const be = Math.min(ae - 1, G + 1);
          P((pe) => ({
            ...pe,
            focusedRowIndex: be
          })), te(be, K);
          break;
        case "ArrowLeft":
          L.preventDefault();
          const we = Math.max(0, K - 1);
          P((pe) => ({
            ...pe,
            focusedColumnIndex: we
          })), te(G, we);
          break;
        case "ArrowRight":
          L.preventDefault();
          const Ce = Math.min(me - 1, K + 1);
          P((pe) => ({
            ...pe,
            focusedColumnIndex: Ce
          })), te(G, Ce);
          break;
        case "Home":
          L.preventDefault(), L.ctrlKey ? (P((pe) => ({
            ...pe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), te(0, 0)) : (P((pe) => ({ ...pe, focusedColumnIndex: 0 })), te(G, 0));
          break;
        case "End":
          if (L.preventDefault(), L.ctrlKey) {
            const pe = ae - 1, De = me - 1;
            P((Ee) => ({
              ...Ee,
              focusedRowIndex: pe,
              focusedColumnIndex: De
            })), te(pe, De);
          } else {
            const pe = me - 1;
            P((De) => ({
              ...De,
              focusedColumnIndex: pe
            })), te(G, pe);
          }
          break;
        case "Enter":
        case " ":
          if (L.preventDefault(), X && X.data[G]) {
            const pe = X.data.some(
              (Ze) => "ews_data" in Ze
            ) ? _(X.data, Y.filters) : X.data, De = Y.sortConfig;
            let Ee = pe;
            if (De && De.length > 0 && (Ee = [...pe].sort((Ze, ze) => {
              for (const { key: it, direction: Dt } of De) {
                let jt = Ze[it], yt = ze[it];
                const qe = X.columns.find(
                  (Ut) => Ut.key === it
                );
                if (qe?.tableRenderer ? (jt = qe.tableRenderer(Ze), yt = qe.tableRenderer(ze)) : qe?.render && (jt = qe.render(Ze), yt = qe.render(ze)), jt == null && yt == null) continue;
                if (jt == null) return Dt === "asc" ? -1 : 1;
                if (yt == null) return Dt === "asc" ? 1 : -1;
                let tt = 0;
                if (typeof jt == "number" && typeof yt == "number" ? tt = jt - yt : tt = String(jt).localeCompare(
                  String(yt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), tt !== 0)
                  return Dt === "asc" ? tt : -tt;
              }
              return 0;
            })), Ee[G]) {
              const Ze = Ee[G], it = Y.globalSelectedRowData && B(Y.globalSelectedRowData, Ze) ? null : Ze;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: it
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
      _,
      B,
      R,
      P,
      ie,
      te
    ]
  ), ue = ve(
    (L, G) => _(L, G),
    [_]
  );
  if (Ni(
    n,
    () => ({
      selectTab: (L) => {
        L >= 0 && L < o.length && (R({ type: "SET_SELECTED_INDEX", payload: L }), i?.(L));
      },
      refreshData: (L) => {
        console.log("Refreshing data for tab:", L ?? "all");
      },
      exportData: (L) => {
        const G = L ?? Y.selectedIndex, K = o[G];
        return K ? K.data : [];
      },
      getSelectedRows: (L) => Y.globalSelectedRowData ? [] : [],
      clearSelection: (L) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (L) => {
        R({ type: "SET_FILTERS", payload: L });
      }
    }),
    [Y.selectedIndex, Y.selectedRows, o, i]
  ), v)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": k,
        children: x || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
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
        children: m || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: p })
        ] })
      }
    );
  const se = Ue(null), he = Ue(null), E = Ue(null), [U, oe] = Oe(!0);
  Ye(() => {
    if (!M) {
      oe(!1);
      return;
    }
    if (b) {
      oe(!1);
      return;
    }
    function L() {
      if (!se.current || !he.current || !E.current) return;
      const Q = se.current.clientWidth, X = Array.from(
        he.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ae = X.reduce((Ce, pe) => Ce + pe.offsetWidth, 0), me = E.current.offsetWidth, be = Math.max(8 * (X.length - 1), 0), we = ae + be + me + D <= Q;
      oe(we);
    }
    const G = requestAnimationFrame(() => L()), K = new ResizeObserver(() => L());
    return se.current && K.observe(se.current), he.current && K.observe(he.current), () => {
      cancelAnimationFrame(G), K.disconnect();
    };
  }, [M, D, b, o.length]);
  const fe = E, ne = ve(() => fe.current ? Array.from(
    fe.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((L) => !L.hasAttribute("disabled")) : [], []), A = ve(
    (L) => {
      const G = ne();
      if (!G.length) return;
      const K = Math.max(0, Math.min(L, G.length - 1));
      G[K].focus(), P((Q) => ({ ...Q, focusArea: "actions", focusedActionIndex: K }));
    },
    [ne]
  ), O = ve(() => A(0), [A]), J = ve(
    (L, G) => {
      const { key: K } = L, Q = o.length - 1;
      switch (K) {
        case "ArrowUp": {
          M && !U && (L.preventDefault(), O());
          break;
        }
        case "ArrowLeft": {
          L.preventDefault();
          const X = G > 0 ? G - 1 : Q;
          H(X), z(X), de.current[X]?.focus();
          break;
        }
        case "ArrowRight": {
          if (L.preventDefault(), G === Q && M && U) {
            O();
            return;
          }
          const X = G < Q ? G + 1 : 0;
          H(X), z(X), de.current[X]?.focus();
          break;
        }
        case "ArrowDown": {
          L.preventDefault(), P((X) => ({
            ...X,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          L.preventDefault(), H(0), z(0), de.current[0]?.focus();
          break;
        }
        case "End": {
          L.preventDefault(), H(Q), z(Q), de.current[Q]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          L.preventDefault(), H(G);
          break;
        }
        case "Tab": {
          !L.shiftKey && G === Q && M && U && O();
          break;
        }
      }
    },
    [o.length, H, z, M, U, O]
  ), W = ve((L) => {
    const { key: G } = L, K = ne();
    if (!K.length) return;
    const Q = K.findIndex((X) => X === document.activeElement);
    switch (G) {
      case "ArrowLeft": {
        if (U)
          if (Q > 0)
            L.preventDefault(), A(Q - 1);
          else {
            L.preventDefault();
            const X = o.length - 1;
            H(X), z(X), de.current[X]?.focus(), P((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: X }));
          }
        break;
      }
      case "ArrowRight": {
        U && (Q < K.length - 1 ? (L.preventDefault(), A(Q + 1)) : (L.preventDefault(), H(0), z(0), de.current[0]?.focus(), P((X) => ({ ...X, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (U)
          L.preventDefault(), P((X) => ({ ...X, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          L.preventDefault();
          const X = Y.selectedIndex;
          de.current[X]?.focus(), P((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: X }));
        }
        break;
      }
    }
  }, [ne, U, A, o.length, H, z, Y.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${d}`,
      id: g,
      "data-testid": k,
      ref: se,
      children: [
        u && !N && /* @__PURE__ */ r.jsx("div", { id: y, className: "nhsuk-u-visually-hidden", children: u }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: $,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          ll,
          {
            sortConfig: Y.sortConfig || [],
            columns: o.flatMap(
              (L) => L.columns.map((G) => ({ key: G.key, label: G.label }))
            ).filter(
              (L, G, K) => K.findIndex((Q) => Q.key === L.key) === G
              // Remove duplicates
            ),
            onSortChange: (L) => {
              R({ type: "SET_SORT", payload: L });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        M && !U && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: E,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: W,
            children: M
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${U ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": u ? N ? u : y : $,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: he,
              children: o.map((L, G) => {
                const K = G === Y.selectedIndex, Q = L.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${L.id}`,
                    "aria-controls": `panel-${L.id}`,
                    "aria-selected": K,
                    "aria-disabled": Q,
                    tabIndex: K ? 0 : -1,
                    ref: (X) => {
                      de.current[G] = X;
                    },
                    onClick: () => H(G),
                    onKeyDown: (X) => J(X, G),
                    disabled: Q,
                    className: [
                      "aria-tabs-datagrid__tab",
                      K ? "aria-tabs-datagrid__tab--selected" : "",
                      Q ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: L.label }),
                      Y.tabLoadingStates[G] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      Y.tabErrors[G] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  L.id
                );
              })
            }
          ),
          M && U && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: E,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: W,
              children: M
            }
          )
        ] }),
        o.map((L, G) => {
          const K = G === Y.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${L.id}`,
              "aria-labelledby": `tab-${L.id}`,
              tabIndex: 0,
              hidden: !K,
              ref: (Q) => {
                ge.current[G] = Q;
              },
              className: `aria-tabs-datagrid__panel ${L.className || ""}`,
              "data-tab-panel": G,
              children: K && (() => {
                const Q = L.data.some(
                  (ae) => "ews_data" in ae
                ) ? ue(L.data, Y.filters) : L.data, X = Me(() => {
                  const ae = Y.sortConfig;
                  return !ae || ae.length === 0 ? Q : [...Q].sort((me, be) => {
                    for (const { key: we, direction: Ce } of ae) {
                      let pe = me[we], De = be[we];
                      const Ee = L.columns.find(
                        (ze) => ze.key === we
                      );
                      if (Ee?.tableRenderer ? (pe = Ee.tableRenderer(me), De = Ee.tableRenderer(be)) : Ee?.render && (pe = Ee.render(me), De = Ee.render(be)), pe == null && De == null) continue;
                      if (pe == null) return 1;
                      if (De == null) return -1;
                      let Ze = 0;
                      if (typeof pe == "number" && typeof De == "number" ? Ze = pe - De : typeof pe == "boolean" && typeof De == "boolean" ? Ze = pe === De ? 0 : pe ? 1 : -1 : Ze = String(pe).localeCompare(
                        String(De),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Ze !== 0)
                        return Ce === "asc" ? Ze : -Ze;
                    }
                    return 0;
                  });
                }, [Q, Y.sortConfig, L.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": L.ariaLabel,
                    "aria-describedby": L.ariaDescription ? `panel-${L.id}-description` : void 0,
                    children: [
                      L.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${L.id}-description`,
                          children: L.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: L.columns.map((ae, me) => {
                        const be = Y.sortConfig?.find(
                          (pe) => pe.key === ae.key
                        ), we = !!be, Ce = C.focusArea === "headers" && C.focusedHeaderIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ce ? "sortable-header--focused" : ""} ${we ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ce ? 0 : -1,
                            onClick: () => le(G, ae.key),
                            onKeyDown: (pe) => ce(pe, me),
                            "aria-sort": we ? be?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: ae.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${we ? `sort-indicator--${be?.direction}` : ""}`,
                                  children: [
                                    Y.sortConfig && Y.sortConfig.length > 0 && Y.sortConfig.findIndex(
                                      (pe) => pe.key === ae.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${Y.sortConfig.findIndex((pe) => pe.key === ae.key) + 1}`,
                                        "data-priority": Y.sortConfig.findIndex(
                                          (pe) => pe.key === ae.key
                                        ) + 1,
                                        title: `Sort priority: ${Y.sortConfig.findIndex((pe) => pe.key === ae.key) + 1}`,
                                        children: Y.sortConfig.findIndex(
                                          (pe) => pe.key === ae.key
                                        ) + 1
                                      }
                                    ),
                                    we && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${be?.direction}`,
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
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: X.map((ae, me) => {
                        const be = Y.globalSelectedRowData && B(Y.globalSelectedRowData, ae), we = C.focusArea === "cells" && C.focusedRowIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${be ? "data-row--selected" : ""} ${we ? "data-row--focused" : ""}`,
                            "aria-selected": be,
                            children: L.columns.map((Ce, pe) => {
                              const De = ae[Ce.key];
                              let Ee;
                              Ce.tableRenderer ? Ee = Ce.tableRenderer(ae) : Ce.render ? Ee = Ce.render(ae) : Ee = De;
                              const Ze = C.focusArea === "cells" && C.focusedRowIndex === me && C.focusedColumnIndex === pe, ze = () => {
                                if (Ce.customRenderer) {
                                  const it = Ce.customRenderer(
                                    De,
                                    ae
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: it
                                    }
                                  );
                                }
                                return typeof De == "boolean" && Ee === De ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  Z(De),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: De ? "Yes" : "No" })
                                ] }) : Ct.isValidElement(Ee) || typeof Ee != "object" ? Ee ?? "" : Ee;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ze ? "data-cell--focused" : ""}`,
                                  tabIndex: Ze ? 0 : -1,
                                  onClick: () => {
                                    const Dt = Y.globalSelectedRowData && B(
                                      Y.globalSelectedRowData,
                                      ae
                                    ) ? null : ae;
                                    R({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Dt
                                    });
                                  },
                                  onKeyDown: (it) => V(it, me, pe),
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
            L.id
          );
        })
      ]
    }
  );
}), kr = {
  asc: "↑",
  desc: "↓"
}, Fp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Wa(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Lp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Ap(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Ep(e, t) {
  const n = t.find((o) => o.id === e), a = Lp(t);
  return n ? n.priority < a : !1;
}
const Hv = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const d = Me(() => Fp(e), [e]), f = ve((k) => {
    if (l) return;
    const M = e.map(
      (D) => D.id === k ? { ...D, direction: D.direction === "asc" ? "desc" : "asc" } : D
    );
    t(M);
  }, [e, t, l]), h = ve((k) => {
    if (l) return;
    const M = e.findIndex((b) => b.id === k);
    if (M <= 0) return;
    const D = [...e];
    [D[M], D[M - 1]] = [D[M - 1], D[M]], t(Wa(D));
  }, [e, t, l]), g = ve((k) => {
    if (l) return;
    const M = e.findIndex((b) => b.id === k);
    if (M >= e.length - 1 || M === -1) return;
    const D = [...e];
    [D[M], D[M + 1]] = [D[M + 1], D[M]], t(Wa(D));
  }, [e, t, l]), v = ve((k) => {
    if (l) return;
    const M = e.filter((D) => D.id !== k);
    t(Wa(M));
  }, [e, t, l]), x = ve(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const k = d.map((M, D) => {
      const b = M.direction === "asc" ? "ascending" : "descending";
      return `${D + 1}. ${M.label} (${b})`;
    });
    if (k.length === 1)
      return `Sorted by: ${k[0]}`;
    if (k.length === 2)
      return `Sorted by: ${k.join(" and ")}`;
    {
      const M = k.pop();
      return `Sorted by: ${k.join(", ")}, and ${M}`;
    }
  }, m = Me(() => {
    const k = ["sort-description"];
    return i && k.push("sort-help"), u && k.push(u), k.join(" ");
  }, [i, u]);
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
        "aria-label": c,
        "aria-describedby": m,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((k) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                Ge,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(k.id),
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
                        children: k.direction === "asc" ? kr.asc : kr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(k.id),
                          disabled: l || !Ap(k.id, e),
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
                          onClick: () => g(k.id),
                          disabled: l || !Ep(k.id, e),
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
      mt,
      {
        variant: "secondary",
        onClick: x,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsxs("small", { children: [
      "Click ",
      kr.asc,
      "/",
      kr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, eo = (e, t) => t.map((n) => ({
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
})), ls = [
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
], Rp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Bp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Hp = (e) => {
  if (typeof e == "boolean") {
    const n = ls.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ls.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Op = (e) => `${e.name}-${e.bed_name}`, Up = () => ({
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
}), Ov = (e) => {
  const t = Up();
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
}, Wp = {
  dataComparator: Rp,
  filterFunction: Bp,
  booleanRenderer: Hp,
  getDataId: Op
};
function Ko(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: u = {},
    classPrefix: d = "adaptive-card"
  } = n, f = t.find((M) => M.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", g = () => o.filter((D) => !i.includes(D) && e[D]).slice(0, 3).map((D) => {
    const b = t.find((y) => y.key === D), T = e[D], j = u[D] ? u[D](T, e) : b?.cardRenderer ? b.cardRenderer(e) : b?.render ? b.render(e) : T;
    return `${b?.label || D}: ${j}`;
  }).join(" • "), v = () => s.length === 0 ? null : s.filter((M) => e[M.fieldKey] !== void 0).map((M) => {
    const D = e[M.fieldKey], b = M.render ? M.render(D, e) : D;
    return `<span class="nhsuk-tag ${zp(M, D)}">${b}</span>`;
  }).join(""), x = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", p = v(), m = g(), k = p ? `${m}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : m;
  return {
    variant: x(),
    heading: String(h),
    descriptionHtml: k,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${h}`
  };
}
function zp(e, t) {
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
const Vp = {
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
}, cl = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, u = e.bed_name, d = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${c}, Bed ${u}`,
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
            Ge,
            {
              color: Yp(pl(d)),
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
            /* @__PURE__ */ r.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ r.jsx("dd", { children: u })
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
              onClick: (g) => {
                g.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            mt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            mt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, ul = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Ge,
        {
          color: qp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        Ge,
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
] }), dl = ({
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
        Ge,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        Ge,
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
] }), fl = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, u = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Gp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            Ge,
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
          u !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-value", children: u })
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
function pl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Gp(e) {
  return pl(e);
}
function Yp(e) {
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
function qp(e) {
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
], hl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Kp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Zp = (e) => hl(e) === "high" || e.status === "urgent" ? "primary" : "default", Jp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Qp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Xp,
  hiddenFields: [],
  getPriority: hl,
  getStatus: Kp,
  getVariant: Zp,
  fieldRenderers: Jp,
  classPrefix: "adaptive-card--healthcare"
}, eh = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      cl,
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
      ul,
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
      dl,
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
      fl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, th = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Zo = {
  name: "healthcare",
  defaultCardConfig: Qp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: eh,
  fieldTypes: th
};
function Jo(e) {
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
function Qo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function nh(e, t) {
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
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, s); u++)
        i[u] = e.tabLoadingStates[u], l[u] = e.tabErrors[u], c[u] = e.selectedRows[u];
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
function rh(e, t) {
  const [n, a] = Oe("cards");
  return Ye(() => {
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
function ah(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function sh(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...Vp, ...n };
  if (a && a.cardTemplates) {
    const s = ah(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Ko(e, t, o);
}
const Uv = ({
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
  tabPanels: u,
  dataConfig: d,
  selectedIndex: f,
  onTabChange: h,
  ariaLabel: g = "Data grid",
  ariaDescription: v,
  orientation: x = "horizontal",
  id: p,
  disabled: m = !1,
  className: k,
  ...M
}) => {
  const D = rh(e, t), b = f !== void 0, T = f ?? 0, j = Me(() => {
    if (u.some(
      (O) => O.data && O.data.length > 0 && Qo(O.data)
    )) {
      const O = Jo(n);
      return {
        ...Zo.defaultCardConfig,
        ...O
      };
    } else
      return Jo(n);
  }, [n, u]), N = Me(() => u.some(
    (O) => O.data && O.data.length > 0 && Qo(O.data)
  ) ? Zo : void 0, [u]), y = Me(() => ({
    selectedIndex: T,
    tabLoadingStates: new Array(u.length).fill(!1),
    tabErrors: new Array(u.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(u.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [T, u.length]), [$, S] = ji(nh, y), _ = Ue([]), F = Ue([]), w = Ue([]), I = Ue(null), [C, P] = Oe({
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
  }), ee = ve((A) => {
    if (!A.current)
      return { columns: 1, rows: 0 };
    const O = A.current, J = O.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (J.length === 0)
      return { columns: 1, rows: 0 };
    const W = O.offsetWidth, G = J[0].offsetWidth, K = Math.floor(W / G) || 1, Q = Math.ceil(J.length / K);
    return { columns: K, rows: Q };
  }, []), Y = ve((A, O) => ({
    row: Math.floor(A / O),
    col: A % O
  }), []), R = ve((A, O, J) => A * J + O, []), B = ve((A, O, J, W) => {
    const { row: L, col: G } = Y(A, W);
    let K = L, Q = G;
    switch (O) {
      case "up":
        K = Math.max(0, L - 1);
        break;
      case "down":
        K = Math.min(Math.floor((J - 1) / W), L + 1);
        break;
      case "left":
        Q = Math.max(0, G - 1);
        break;
      case "right":
        Q = Math.min(W - 1, G + 1);
        break;
    }
    const X = R(K, Q, W);
    return Math.min(X, J - 1);
  }, [Y, R]);
  Ye(() => {
    C.isCardNavigationActive && C.focusedCardElementIndex >= 0 && C.cardElements.length > 0 && setTimeout(() => {
      const A = C.cardElements[C.focusedCardElementIndex];
      A && (A.element.focus(), A.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [C.isCardNavigationActive, C.focusedCardElementIndex, C.cardElements.length]), Ye(() => {
    const A = () => {
      if (D === "cards" && I.current) {
        const { columns: W, rows: L } = ee(I);
        P((G) => ({
          ...G,
          gridColumns: W,
          gridRows: L
        }));
      }
    }, O = setTimeout(A, 200), J = () => {
      setTimeout(A, 100);
    };
    return window.addEventListener("resize", J), () => {
      clearTimeout(O), window.removeEventListener("resize", J);
    };
  }, [D, u, ee]), Ye(() => {
    const A = $.tabLoadingStates.length, O = u.length;
    A !== O && S({ type: "ADJUST_ARRAYS", payload: { newLength: O } });
  }, [u.length, $.tabLoadingStates.length]), Ye(() => {
    b && f !== $.selectedIndex && S({ type: "SET_SELECTED_INDEX", payload: f });
  }, [b, f, $.selectedIndex]);
  const H = ve((A) => {
    A >= 0 && A < u.length && !u[A].disabled && (S({ type: "SET_SELECTED_INDEX", payload: A }), h?.(A));
  }, [u, h]), re = ve((A) => {
    console.log("Card selected:", A), S({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: A
    });
  }, []), z = ve((A) => {
    const O = F.current[A];
    O && (O.focus(), O.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), de = ve((A) => {
    const O = F.current[A];
    if (!O) return [];
    const J = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), W = O.querySelectorAll(J);
    return Array.from(W).map((L, G) => ({
      id: L.id || `card-${A}-element-${G}`,
      element: L,
      label: L.getAttribute("aria-label") || L.textContent?.trim() || L.getAttribute("title") || `Element ${G + 1}`,
      type: L.tagName.toLowerCase() === "button" ? "button" : L.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(L.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ge = Ue(null), le = ve((A) => {
    const O = ge.current;
    if (!O) return;
    const J = document.createElement("div");
    J.setAttribute("aria-live", "polite"), J.setAttribute("aria-atomic", "true"), J.className = "sr-only", J.textContent = A, O.appendChild(J), setTimeout(() => {
      O.contains(J) && O.removeChild(J);
    }, 1e3);
  }, []), ie = ve((A) => {
    const O = A.filter((W) => W.sortable !== !1), J = [
      { value: "", label: "Sort by..." }
    ];
    return O.forEach((W) => {
      const L = W.label || W.key;
      W.key === "name" ? J.push(
        { value: `${W.key}-asc`, label: `${L} (A-Z)` },
        { value: `${W.key}-desc`, label: `${L} (Z-A)` }
      ) : W.key === "ews_score" || W.key.includes("score") ? J.push(
        { value: `${W.key}-desc`, label: `${L} (High-Low)` },
        { value: `${W.key}-asc`, label: `${L} (Low-High)` }
      ) : W.key === "age" || W.key.includes("date") || W.key.includes("time") ? J.push(
        { value: `${W.key}-desc`, label: `${L} (Oldest-Youngest)` },
        { value: `${W.key}-asc`, label: `${L} (Youngest-Oldest)` }
      ) : J.push(
        { value: `${W.key}-asc`, label: `${L} (A-Z)` },
        { value: `${W.key}-desc`, label: `${L} (Z-A)` }
      );
    }), J;
  }, []), Z = ve((A, O) => O ? [...A].sort((J, W) => {
    const L = J[O.key], G = W[O.key];
    if (L == null && G == null) return 0;
    if (L == null) return 1;
    if (G == null) return -1;
    const K = Number(L), Q = Number(G);
    if (!isNaN(K) && !isNaN(Q))
      return O.direction === "asc" ? K - Q : Q - K;
    const X = String(L).toLowerCase(), ae = String(G).toLowerCase(), me = X.localeCompare(ae);
    return O.direction === "asc" ? me : -me;
  }) : A, []), te = ve((A) => {
    if (!A) {
      P((X) => ({ ...X, cardSortConfig: null })), le("Card sorting cleared");
      return;
    }
    const [O, J] = A.split("-"), W = { key: O, direction: J };
    P((X) => ({ ...X, cardSortConfig: W }));
    const K = u[$.selectedIndex]?.columns.find((X) => X.key === O)?.label || O;
    le(`Cards sorted by ${K} in ${J === "asc" ? "ascending" : "descending"} order`);
  }, [u, $.selectedIndex, le]), ce = ve((A) => {
    const W = u[$.selectedIndex]?.columns.find((G) => G.key === A.key)?.label || A.key, L = A.direction === "asc" ? "ascending" : "descending";
    return `${W} (${L})`;
  }, [u, $.selectedIndex]), V = ve((A) => {
    const O = u[$.selectedIndex];
    if (o) {
      const J = $.sortConfig;
      return !J || J.length === 0 ? A : [...A].sort((W, L) => {
        for (const { key: G, direction: K } of J) {
          let Q = W[G], X = L[G];
          const ae = O?.columns.find((De) => De.key === G);
          if (ae?.cardRenderer ? (Q = ae.cardRenderer(W), X = ae.cardRenderer(L)) : ae?.render && (Q = ae.render(W), X = ae.render(L)), Q == null && X == null) continue;
          if (Q == null) return K === "asc" ? -1 : 1;
          if (X == null) return K === "asc" ? 1 : -1;
          const me = Number(Q), be = Number(X);
          if (!isNaN(me) && !isNaN(be)) {
            const De = me - be;
            if (De !== 0) return K === "asc" ? De : -De;
            continue;
          }
          const we = String(Q).toLowerCase(), Ce = String(X).toLowerCase(), pe = we.localeCompare(Ce);
          if (pe !== 0) return K === "asc" ? pe : -pe;
        }
        return 0;
      });
    } else
      return Z(A, C.cardSortConfig);
  }, [o, $.sortConfig, C.cardSortConfig, Z, u, $.selectedIndex]), ue = ve((A, O) => {
    const J = de(A), W = J[O];
    if (W) {
      W.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const L = `Focused on ${W.label}, ${W.type} ${O + 1} of ${J.length} within card`;
      le(L);
    }
  }, [de, le]), se = ve((A) => {
    _.current[A]?.focus();
  }, []), he = ve(() => {
    const A = w.current[0];
    if (!A) return [];
    const O = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), J = A.querySelectorAll(O);
    return Array.from(J);
  }, []), E = ve((A) => {
    if (A === 0) {
      const O = w.current[0], J = O?.querySelector(".sort-controls-row");
      if (J) {
        J.setAttribute("tabindex", "-1"), J.focus();
        const L = `Sort controls group with ${he().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        le(L);
      } else O && O.focus();
    } else {
      const O = he(), J = A - 1, W = O[J];
      if (W) {
        W.focus();
        const L = W.tagName.toLowerCase() === "select", G = W.tagName.toLowerCase() === "button", K = L ? "dropdown" : G ? "button" : "control", Q = L ? ". Use Space key to open dropdown" : "", X = `${K} ${J + 1} of ${O.length}${Q}`;
        le(X);
      }
    }
  }, [he, le]), U = ve((A, O) => {
    const { key: J } = A, W = u[$.selectedIndex], L = W?.data.length || 0;
    if (J === "ArrowLeft" && A.shiftKey) {
      A.preventDefault(), A.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (J === "ArrowRight" && A.shiftKey) {
      A.preventDefault(), A.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!C.isCardNavigationActive) {
      switch (J) {
        case "ArrowUp":
          if (A.preventDefault(), O === 0)
            P((X) => ({ ...X, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), E(0);
          else {
            const X = B(O, "up", L, C.gridColumns);
            X !== O && (P((ae) => ({ ...ae, focusedCardIndex: X })), z(X), le(`Moved to card ${X + 1} of ${L}`));
          }
          break;
        case "ArrowDown":
          A.preventDefault();
          const G = B(O, "down", L, C.gridColumns);
          G !== O && (P((X) => ({ ...X, focusedCardIndex: G })), z(G), le(`Moved to card ${G + 1} of ${L}`));
          break;
        case "ArrowLeft":
          A.preventDefault();
          const K = B(O, "left", L, C.gridColumns);
          K !== O ? (P((X) => ({ ...X, focusedCardIndex: K })), z(K), le(`Moved to card ${K + 1} of ${L}`)) : $.selectedIndex > 0 && (S({ type: "SET_SELECTED_INDEX", payload: $.selectedIndex - 1 }), P((X) => ({ ...X, focusArea: "tabs" })), setTimeout(() => se($.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          A.preventDefault();
          const Q = B(O, "right", L, C.gridColumns);
          Q !== O ? (P((X) => ({ ...X, focusedCardIndex: Q })), z(Q), le(`Moved to card ${Q + 1} of ${L}`)) : $.selectedIndex < u.length - 1 && (S({ type: "SET_SELECTED_INDEX", payload: $.selectedIndex + 1 }), P((X) => ({ ...X, focusArea: "tabs" })), setTimeout(() => se($.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (W?.data[O]) {
            A.preventDefault(), P((ae) => ({
              ...ae,
              selectedCardIndex: O
            }));
            const X = de(O);
            X.length > 0 ? (P((ae) => ({
              ...ae,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: X,
              selectedCardIndex: O
              // Ensure selection is maintained
            })), le(`Card ${O + 1} selected and navigation activated. ${X.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : le(`Card ${O + 1} selected.`);
          }
          break;
        case " ":
          if (W?.data[O]) {
            A.preventDefault(), P((ae) => ({
              ...ae,
              selectedCardIndex: ae.selectedCardIndex === O ? -1 : O
            }));
            const X = C.selectedCardIndex === O;
            le(`Card ${O + 1} ${X ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (J) {
      case "ArrowUp":
      case "ArrowLeft":
        A.preventDefault();
        const G = Math.max(0, C.focusedCardElementIndex - 1);
        P((ae) => ({ ...ae, focusedCardElementIndex: G })), ue(O, G);
        break;
      case "ArrowDown":
      case "ArrowRight":
        A.preventDefault();
        const K = Math.min(C.cardElements.length - 1, C.focusedCardElementIndex + 1);
        P((ae) => ({ ...ae, focusedCardElementIndex: K })), ue(O, K);
        break;
      case "Enter":
        A.preventDefault();
        const Q = C.cardElements[C.focusedCardElementIndex];
        Q && (Q.element.click(), le(`Activated ${Q.label}`));
        break;
      case " ":
        A.preventDefault();
        const X = C.cardElements[C.focusedCardElementIndex];
        if (X) {
          const ae = new MouseEvent("dblclick", { bubbles: !0 });
          X.element.dispatchEvent(ae), le(`Double-clicked ${X.label}`);
        }
        break;
      case "Escape":
        A.preventDefault(), P((ae) => ({
          ...ae,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => z(O), 0), le("Exited card navigation, returned to card level");
        break;
      case "Home":
        A.preventDefault(), C.cardElements.length > 0 && (P((ae) => ({ ...ae, focusedCardElementIndex: 0 })), ue(O, 0));
        break;
      case "End":
        if (A.preventDefault(), C.cardElements.length > 0) {
          const ae = C.cardElements.length - 1;
          P((me) => ({ ...me, focusedCardElementIndex: ae })), ue(O, ae);
        }
        break;
    }
  }, [C, $.selectedIndex, u, re, z, se, P, de, ue, le]), oe = ve((A) => {
    const O = _.current[A], J = O?.parentElement;
    if (!O || !J) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const W = O.getBoundingClientRect(), L = J.getBoundingClientRect();
    W.left >= L.left && W.right <= L.right || (console.log("Tab not visible, scrolling into view (mobile)"), O.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), fe = ve((A, O) => {
    if (D !== "cards")
      return;
    const { key: J } = A;
    switch (J) {
      case "ArrowLeft":
        A.preventDefault();
        const W = O > 0 ? O - 1 : u.length - 1;
        H(W), P((Q) => ({ ...Q, focusedTabIndex: W })), _.current[W]?.focus(), oe(W);
        break;
      case "ArrowRight":
        A.preventDefault();
        const L = O < u.length - 1 ? O + 1 : 0;
        H(L), P((Q) => ({ ...Q, focusedTabIndex: L })), _.current[L]?.focus(), oe(L);
        break;
      case "ArrowDown":
        A.preventDefault();
        const G = u[$.selectedIndex];
        G && G.columns && G.columns.length > 0 ? (P((Q) => ({
          ...Q,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), E(0)) : (P((Q) => ({
          ...Q,
          focusArea: "cards",
          focusedCardIndex: 0
        })), z(0));
        break;
      case "Home":
        A.preventDefault(), H(0), P((Q) => ({ ...Q, focusedTabIndex: 0 })), _.current[0]?.focus(), oe(0);
        break;
      case "End":
        A.preventDefault();
        const K = u.length - 1;
        H(K), P((Q) => ({ ...Q, focusedTabIndex: K })), _.current[K]?.focus(), oe(K);
        break;
      case "Enter":
      case " ":
        A.preventDefault(), H(O);
        break;
    }
  }, [u.length, H, D, z, P, oe]), ne = ve((A, O) => {
    if (D !== "cards")
      return;
    const { key: J } = A, W = u[$.selectedIndex];
    if (O === 0 && !C.isSortControlsActive) {
      switch (J) {
        case "ArrowUp":
          A.preventDefault(), P((G) => ({
            ...G,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), se($.selectedIndex);
          break;
        case "ArrowDown":
          A.preventDefault(), W?.data && W.data.length > 0 && (P((G) => ({
            ...G,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), z(0));
          break;
        case "Enter":
        case " ":
          A.preventDefault();
          const L = he();
          if (L.length > 0) {
            P((K) => ({
              ...K,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), E(1);
            const G = `Entered sort controls navigation mode. ${L.length} controls available. Use arrow keys to navigate between controls.`;
            le(G);
          }
          break;
        case "Escape":
          A.preventDefault(), P((G) => ({
            ...G,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), se($.selectedIndex);
          break;
      }
      return;
    }
    if (C.isSortControlsActive) {
      const G = he().length;
      switch (J) {
        case "ArrowLeft":
          A.preventDefault();
          const K = C.focusedSortControlIndex > 1 ? C.focusedSortControlIndex - 1 : G;
          P((X) => ({ ...X, focusedSortControlIndex: K })), E(K);
          break;
        case "ArrowRight":
          A.preventDefault();
          const Q = C.focusedSortControlIndex < G ? C.focusedSortControlIndex + 1 : 1;
          P((X) => ({ ...X, focusedSortControlIndex: Q })), E(Q);
          break;
        case "ArrowDown":
          if (A.preventDefault(), C.isSortControlsActive) {
            const X = C.focusedSortControlIndex < G ? C.focusedSortControlIndex + 1 : 1;
            P((ae) => ({ ...ae, focusedSortControlIndex: X })), E(X);
          } else
            W?.data && W.data.length > 0 && (P((X) => ({
              ...X,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), z(0));
          break;
        case "ArrowUp":
          A.preventDefault(), P((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), E(0);
          break;
        case "Escape":
          A.preventDefault(), P((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), E(0);
          break;
      }
    }
  }, [D, u, $.selectedIndex, C.isSortControlsActive, C.focusedSortControlIndex, E, se, z, P, le]);
  if (D === "cards") {
    const A = u[$.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${k || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": g,
            "aria-describedby": `${v || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": x,
            className: "aria-tabs-datagrid__tabs",
            children: u.map((O, J) => {
              const W = J === $.selectedIndex, L = O.disabled || m;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${O.id}`,
                  "aria-controls": `panel-${O.id}`,
                  "aria-selected": W,
                  "aria-disabled": L,
                  tabIndex: W ? 0 : -1,
                  ref: (G) => {
                    _.current[J] = G;
                  },
                  onClick: () => H(J),
                  onKeyDown: (G) => fe(G, J),
                  disabled: L,
                  className: [
                    "aria-tabs-datagrid__tab",
                    W ? "aria-tabs-datagrid__tab--selected" : "",
                    L ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: O.label }),
                    $.tabLoadingStates[J] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    $.tabErrors[J] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                O.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      A && A.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          ll,
          {
            sortConfig: $.sortConfig || [],
            columns: A.columns.map((O) => ({ key: O.key, label: O.label })),
            onSortChange: (O) => {
              S({ type: "SET_SORT", payload: O });
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
            tabIndex: C.focusArea === "sort-controls" ? 0 : -1,
            ref: (O) => {
              w.current[0] = O;
            },
            onKeyDown: (O) => ne(O, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${A.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  Ir,
                  {
                    id: `card-sort-${A.id}`,
                    name: `card-sort-${A.id}`,
                    value: C.cardSortConfig ? `${C.cardSortConfig.key}-${C.cardSortConfig.direction}` : "",
                    onChange: (O) => te(O.target.value),
                    className: "sort-select",
                    children: ie(A.columns).map((O) => /* @__PURE__ */ r.jsx("option", { value: O.value, children: O.label }, O.value))
                  }
                )
              ] }),
              C.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ce(C.cardSortConfig)
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
          ref: I,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${A?.label || "Data"} cards in ${C.gridRows} rows and ${C.gridColumns} columns`,
          "aria-rowcount": C.gridRows,
          "aria-colcount": C.gridColumns,
          id: `panel-${A?.id}`,
          "aria-labelledby": `tab-${A?.id}`,
          children: V(A?.data || []).map((O, J) => {
            const W = C.selectedCardIndex === J, L = C.focusedCardIndex === J && C.focusArea === "cards", G = C.focusedCardIndex === J && C.focusArea === "card" && C.isCardNavigationActive, K = J === 0 && C.focusArea !== "cards", Q = L || K, X = Y(J, C.gridColumns);
            if (n.cardTemplate) {
              const be = n.cardTemplate(O, A.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": X.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (we) => {
                        F.current[J] = we;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        W ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        G ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": X.col + 1,
                      "aria-selected": W,
                      "aria-expanded": G,
                      "aria-description": G ? `Card navigation active. ${C.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: Q ? 0 : -1,
                      onClick: () => {
                        P((we) => ({
                          ...we,
                          selectedCardIndex: we.selectedCardIndex === J ? -1 : J
                        })), re(O);
                      },
                      onKeyDown: (we) => U(we, J),
                      onFocus: () => {
                        P((we) => we.isCardNavigationActive ? we : we.focusedCardIndex !== J || we.focusArea !== "cards" ? {
                          ...we,
                          focusedCardIndex: J,
                          focusArea: "cards"
                        } : we);
                      },
                      children: be
                    }
                  )
                },
                `card-${J}`
              );
            }
            const ae = sh(O, A.columns, j, N), me = [
              ae.className || "",
              W ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              L ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              G ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
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
                      W ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      G ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": X.col + 1,
                    "aria-selected": W,
                    "aria-expanded": G,
                    onKeyDown: (be) => {
                      be.key === "Enter" && (be.preventDefault(), P((we) => ({
                        ...we,
                        selectedCardIndex: J
                      }))), U(be, J);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      sl,
                      {
                        ...ae,
                        ref: (be) => {
                          F.current[J] = be;
                        },
                        className: me,
                        "aria-label": `${ae["aria-label"] || ae.heading}. ${G ? `Card navigation active with ${C.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: Q ? 0 : -1,
                        onClick: () => {
                          P((be) => ({
                            ...be,
                            selectedCardIndex: be.selectedCardIndex === J ? -1 : J
                          })), re(O);
                        },
                        onKeyDown: (be) => U(be, J),
                        onFocus: () => {
                          C.isCardNavigationActive || P((be) => be.focusedCardIndex !== J || be.focusArea !== "cards" ? {
                            ...be,
                            focusedCardIndex: J,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : be);
                        }
                      }
                    )
                  }
                )
              },
              `card-${J}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: ge,
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
  return D === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${k || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      is,
      {
        tabPanels: u,
        dataConfig: d,
        ariaLabel: g,
        ariaDescription: v,
        orientation: x,
        id: p,
        disabled: m,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: c,
        ...M
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${k || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      is,
      {
        tabPanels: u,
        dataConfig: d,
        ariaLabel: g,
        ariaDescription: v,
        orientation: x,
        id: p,
        disabled: m,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: c,
        ...M
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, ml = (e) => {
  const t = ls.find((n) => n.value === e);
  return t ? t.icon : null;
}, oh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => ml(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, ih = (e) => eo(e, [
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
]), lh = {
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
  booleanRenderer: (e) => ml(e),
  getDataId: (e) => `financial-${e.id}`
}, ch = (e) => eo(e, [
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
]), uh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: oh,
    createTabs: ih
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: lh,
    createTabs: ch
  }
}, ei = (e, t) => {
  const n = uh[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, gl = [
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
], fh = [
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
], ph = [
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
], ti = [
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
], ni = [
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
], ri = [
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
], hh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, mh = () => [
  {
    id: "patients",
    label: "Patients",
    data: gl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      cl,
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
      ul,
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
    data: fh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      dl,
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
    data: ph,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      fl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], gh = () => {
  const [e, t] = Oe("healthcare"), n = Me(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Wp,
      tabPanels: mh(),
      data: gl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...ei("ecommerce", ti),
      data: ti
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ei("financial", ni),
      data: ni
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: hh,
      tabPanels: eo(ri, [
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
      data: ri
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
      is,
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
}, Wv = gh, xl = (e) => /* @__PURE__ */ r.jsx(Fi, { ...e }), zv = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = _n.TwoThirds,
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: u,
  search: d,
  account: f,
  organisation: h,
  logo: g,
  className: v,
  ...x
}) => {
  const p = {
    service: c,
    navigation: u,
    search: d,
    account: f,
    organisation: h,
    logo: g,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(al, { ...s }),
    /* @__PURE__ */ r.jsx(Ri, { ...p }),
    /* @__PURE__ */ r.jsx(xl, { className: v, ...x, children: /* @__PURE__ */ r.jsx(Li, { size: o, children: /* @__PURE__ */ r.jsx(Sn, { children: /* @__PURE__ */ r.jsxs(sr, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(an, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Bi, { ...l })
  ] });
}, Vv = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = _n.TwoThirds,
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: u,
  serviceHref: d,
  logo: f,
  className: h,
  ...g
}) => {
  const v = {
    service: {
      text: u,
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
    /* @__PURE__ */ r.jsx(al, { ...s }),
    /* @__PURE__ */ r.jsx(Ri, { ...v }),
    /* @__PURE__ */ r.jsxs(xl, { className: h, ...g, children: [
      c && /* @__PURE__ */ r.jsx(es, { ...c }),
      /* @__PURE__ */ r.jsx(Li, { size: o, children: /* @__PURE__ */ r.jsx(Sn, { children: /* @__PURE__ */ r.jsxs(sr, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(an, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Bi, { ...l })
  ] });
}, bl = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = _e("nhsuk-back-link", a), c = _e("nhsuk-back-link__link"), u = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: s, ...i, children: u() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...i, children: u() }) });
};
bl.displayName = "ForwardLink";
const Pn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ai() {
  return typeof window > "u" ? Pn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function vl() {
  const [e, t] = q.useState(ai());
  q.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ai());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = q.useCallback((s) => e >= Pn[s], [e]), a = q.useCallback((s) => e < Pn[s], [e]), o = q.useCallback((s, i) => e >= Pn[s] && e < Pn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Pn
  };
}
function Gv(e) {
  const { width: t, values: n } = vl();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function xh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = q.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = q.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return q.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(n, String(o)) : c.delete(n), c.set(a, i ? "1" : "0");
    const u = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", u);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const bh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), vh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function yh(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: u = !0,
    backLabel: d = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: g,
    a11y: v,
    className: x,
    getId: p = (xe) => xe.id,
    orientation: m = "vertical",
    autoEnableThirdColumn: k = !0,
    onDrillChange: M,
    navigationInstructions: D = "Use arrow keys to navigate, Enter to open.",
    initialFocus: b = "first",
    skipFocusOnSelect: T = !1,
    skipAnnouncements: j = !1,
    onFocusChange: N,
    syncUrl: y = !1,
    urlParamSelected: $ = "nsv",
    urlParamDrill: S = "nsvDrill",
    urlSyncDebounceMs: _ = 0,
    lazySecondary: F = !1,
    navFooter: w,
    collapsibleNav: I = !1,
    navInitiallyCollapsed: C = !1,
    onNavCollapseChange: P,
    collapseToggleLabelShow: ee = "Show navigation",
    collapseToggleLabelHide: Y = "Hide navigation",
    collapseToggleIconShow: R,
    collapseToggleIconHide: B,
    persistNavCollapsed: H,
    navCollapsedStorageKey: re = "nsvCollapsed",
    navCollapsedUrlParam: z = "nsvCollapsed",
    autoContentHeader: de,
    contentHeaderLevel: ge = 2,
    renderContentHeader: le,
    contentSubheader: ie,
    secondarySubheader: Z
  } = e, { up: te } = vl(), [ce, V] = q.useState(!1);
  q.useEffect(() => {
    V(!0);
  }, []);
  const ue = ce && te("medium"), se = ce && te("xlarge");
  let he;
  c ? he = c : ue ? he = "two-column" : he = "list", !c && k && l && se && (he = "three-column");
  const E = xh({
    enabled: y,
    paramSelected: $,
    paramDrill: S
  }), [U, oe] = q.useState(
    () => E.selectedId !== void 0 ? E.selectedId : a
  ), fe = n !== void 0 ? n : U, ne = t.find((xe) => p(xe) === fe), [A, O] = q.useState(
    void 0
  );
  q.useEffect(() => {
    if (fe === void 0) return;
    O(fe);
    const xe = setTimeout(() => O(void 0), 220);
    return () => clearTimeout(xe);
  }, [fe]);
  const J = q.useRef(null), W = q.useRef(null), L = q.useRef(null), G = q.useRef(null), [K, Q] = q.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [X, ae] = q.useState(() => "nav"), [me, be] = q.useState(0), we = () => [
    G.current,
    W.current,
    L.current
  ].filter(Boolean), Ce = (xe) => {
    const Ne = we(), ye = Math.max(0, Math.min(xe, Ne.length - 1));
    Ne[ye]?.focus(), be(ye);
  }, pe = q.useCallback(
    (xe) => xe ? Array.from(xe.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ye) => !ye.hasAttribute("disabled") && ye.tabIndex !== -1
    ) : [],
    []
  ), De = q.useCallback(
    (xe) => {
      const Ne = pe(W.current);
      if (!Ne.length) {
        W.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(xe, Ne.length - 1)), Le = Ne[ye];
      Le.focus(), setTimeout(() => {
        document.activeElement !== Le && (Le.focus(), setTimeout(() => {
          document.activeElement !== Le && Le.click();
        }, 10));
      }, 10), Q((Xe) => ({ ...Xe, contentIndex: ye }));
      const nt = (Xe) => {
        Xe.key === "Escape" && (Xe.preventDefault(), Xe.stopPropagation(), W.current?.focus(), Le.removeEventListener("keydown", nt));
      };
      Ne.forEach((Xe) => {
        const Je = Xe._escapeHandler;
        Je && Xe.removeEventListener("keydown", Je);
      }), Le._escapeHandler = nt, Le.addEventListener("keydown", nt);
    },
    [pe]
  ), Ee = q.useCallback(
    (xe) => {
      const Ne = pe(L.current);
      if (!Ne.length) {
        L.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(xe, Ne.length - 1)), Le = Ne[ye];
      Le.focus(), setTimeout(() => {
        document.activeElement !== Le && (Le.focus(), setTimeout(() => {
          document.activeElement !== Le && Le.click();
        }, 10));
      }, 10), Q((Xe) => ({ ...Xe, secondaryIndex: ye }));
      const nt = (Xe) => {
        Xe.key === "Escape" && (Xe.preventDefault(), Xe.stopPropagation(), L.current?.focus(), Le.removeEventListener("keydown", nt));
      };
      Ne.forEach((Xe) => {
        const Je = Xe._escapeHandler;
        Je && Xe.removeEventListener("keydown", Je);
      }), Le._escapeHandler = nt, Le.addEventListener("keydown", nt);
    },
    [pe]
  ), Ze = (xe) => {
    if (xe.defaultPrevented) return;
    const Ne = xe.key, ye = xe.target, Le = !!pt.current && pt.current.contains(ye), nt = !!W.current && W.current.contains(ye), Xe = !!L.current && L.current.contains(ye), Je = !!L.current, In = ye === G.current || ye === W.current || ye === L.current, hn = ze && (he === "list" || he === "cards"), vr = nt && !!ye.closest(".nhs-navigation-split-view__header");
    if (X === "containers" && In) {
      if (Ne === "ArrowRight") {
        xe.preventDefault();
        const Re = we(), Qe = Math.min(Re.length - 1, me + 1);
        Ce(Qe);
        return;
      }
      if (Ne === "ArrowLeft") {
        xe.preventDefault();
        const Re = Math.max(0, me - 1);
        Ce(Re);
        return;
      }
      if (Ne === "Home") {
        xe.preventDefault(), Ce(0);
        return;
      }
      if (Ne === "End") {
        xe.preventDefault(), Ce(we().length - 1);
        return;
      }
      if (Ne === "Enter" || Ne === " ") {
        if (xe.preventDefault(), ye === G.current) {
          if (ae("nav"), pt.current) {
            const Re = Array.from(
              pt.current.querySelectorAll("[data-nav-item]")
            );
            (Re[st >= 0 ? st : 0] || Re[0])?.focus();
          }
        } else ye === W.current ? (ae("content"), De(K.contentIndex)) : ye === L.current && (ae("secondary"), Ee(K.secondaryIndex));
        return;
      }
      return;
    }
    if (Ne === "Escape") {
      if (X === "content" || X === "secondary") {
        if (nt || Xe) {
          if (xe.preventDefault(), ae("nav"), pt.current) {
            const Qe = Array.from(
              pt.current.querySelectorAll("[data-nav-item]")
            )[st >= 0 ? st : 0];
            setTimeout(() => Qe?.focus(), 10);
          }
        } else if ((ye === W.current || ye === L.current) && (xe.preventDefault(), ae("nav"), pt.current)) {
          const Qe = Array.from(
            pt.current.querySelectorAll("[data-nav-item]")
          )[st >= 0 ? st : 0];
          setTimeout(() => Qe?.focus(), 10);
        }
      }
      return;
    }
    if (Ne === "Enter" || Ne === " ") {
      if (ye.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ye === W.current && X === "content") {
        xe.preventDefault(), xe.stopPropagation(), pe(W.current).length > 0 && setTimeout(() => {
          De(K.contentIndex);
        }, 50);
        return;
      }
      if (ye === L.current && X === "secondary") {
        xe.preventDefault(), xe.stopPropagation(), pe(
          L.current
        ).length > 0 && setTimeout(() => {
          Ee(K.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (hn && vr && !In && (Ne === "ArrowRight" || Ne === "ArrowLeft")) {
      const Re = pe(W.current).filter(
        (Qe) => Qe.closest(".nhs-navigation-split-view__header")
      );
      if (Re.length > 1) {
        const Qe = Re.indexOf(ye);
        if (Qe >= 0) {
          const uo = (Qe + (Ne === "ArrowRight" ? 1 : -1) + Re.length) % Re.length;
          xe.preventDefault(), Re[uo].focus();
          return;
        }
      }
    }
    if (Ne === "ArrowRight") {
      if (Le || X === "nav") {
        xe.preventDefault(), ae("content"), setTimeout(() => W.current?.focus(), 10);
        return;
      }
      if (nt || X === "content") {
        Je && (xe.preventDefault(), ae("secondary"), setTimeout(() => L.current?.focus(), 10));
        return;
      }
    }
    if (Ne === "ArrowLeft") {
      if (Xe || X === "secondary") {
        xe.preventDefault(), ae("content"), setTimeout(() => W.current?.focus(), 10);
        return;
      }
      if (nt || X === "content") {
        if (xe.preventDefault(), ae("nav"), pt.current) {
          const Qe = Array.from(
            pt.current.querySelectorAll("[data-nav-item]")
          )[st >= 0 ? st : 0];
          setTimeout(() => Qe?.focus(), 10);
        }
        return;
      }
    }
    if (Ne === "Home" && !Le && (xe.preventDefault(), ae("nav"), pt.current)) {
      const Re = Array.from(
        pt.current.querySelectorAll("[data-nav-item]")
      ), Qe = Re[st >= 0 ? st : 0] || Re[0];
      setTimeout(() => Qe?.focus(), 10);
    }
    if (Ne === "End") {
      const Re = Je ? L.current : W.current;
      Re && !Re.contains(ye) && (xe.preventDefault(), Je ? (ae("secondary"), setTimeout(() => L.current?.focus(), 10)) : (ae("content"), setTimeout(() => W.current?.focus(), 10)));
    }
    if (Ne === "ArrowDown" || Ne === "ArrowUp") {
      if (ye === W.current && Ne === "ArrowDown") {
        xe.preventDefault(), pe(W.current).length > 0 && De(0);
        return;
      }
      if (ye === L.current && Ne === "ArrowDown") {
        xe.preventDefault(), pe(
          L.current
        ).length > 0 && Ee(0);
        return;
      }
      if (nt) {
        const Re = pe(W.current);
        if (Re.length) {
          xe.preventDefault();
          const Qe = Ne === "ArrowDown" ? 1 : -1, At = (K.contentIndex + Qe + Re.length) % Re.length;
          De(At);
        }
      } else if (Xe) {
        const Re = pe(L.current);
        if (Re.length) {
          xe.preventDefault();
          const Qe = Ne === "ArrowDown" ? 1 : -1, At = (K.secondaryIndex + Qe + Re.length) % Re.length;
          Ee(At);
        }
      }
    }
  }, ze = !!ne && (he === "list" || he === "cards"), it = q.useMemo(() => de === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : de === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : de === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: de.mobile !== void 0 ? de.mobile : !0,
    tablet: de.tablet || !1,
    desktop: de.desktop || !1
  }, [de]), Dt = ce && te("medium") && !te("xlarge"), jt = ce && te("xlarge"), yt = !!l, qe = he === "three-column", [tt, Ut] = q.useState(!1);
  q.useEffect(() => {
    qe && tt && Ut(!1);
  }, [qe, tt]), q.useEffect(() => {
    tt && !qe && (ae("secondary"), be(2), setTimeout(() => {
      L.current?.focus();
    }, 50));
  }, [tt, qe]), q.useEffect(() => {
    !tt && !qe && X === "secondary" && (ae("content"), be(1), setTimeout(() => {
      W.current?.focus();
    }, 50));
  }, [tt, qe, X]);
  const $e = !!ne && (ze && it.mobile || !ze && Dt && it.tablet || !ze && jt && it.desktop) || yt && !qe, Pe = `h${ge}`, et = ne ? q.createElement(
    Pe,
    {
      style: {
        marginLeft: ze ? 32 : 0,
        marginRight: ze ? 32 : 0
      }
    },
    ne.label
  ) : null, wt = ze ? "mobile" : Dt ? "tablet" : "desktop", xt = yt && !qe && !tt, Tt = ze && it.mobile ? /* @__PURE__ */ r.jsx(
    es,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => Dn(void 0, void 0)
    }
  ) : void 0, at = xt ? /* @__PURE__ */ r.jsx(
    bl,
    {
      element: "button",
      text: f,
      onClick: () => {
        Ut(!0);
      }
    }
  ) : void 0, Fe = !qe && tt ? /* @__PURE__ */ r.jsx(
    es,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => Ut(!1)
    }
  ) : void 0, Ft = q.useMemo(() => {
    if (!$e || !ne) return null;
    if (le)
      return le({
        item: ne,
        detailActive: ze,
        context: wt,
        backLink: Tt,
        defaultHeading: et
      });
    const xe = ne && ie ? typeof ie == "function" ? ie(ne) : ie : null;
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
            Fe || Tt,
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
                  et,
                  xe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: xe })
                ]
              }
            )
          ]
        }
      ),
      at && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: at })
    ] });
  }, [
    $e,
    ne,
    le,
    ze,
    wt,
    Tt,
    Fe,
    et,
    at,
    ie
  ]);
  q.useEffect(() => {
    if (!y) return;
    const xe = he === "three-column";
    let Ne = !1;
    const ye = () => {
      Ne || (E.selectedId !== fe && E.setSelectedId(fe), E.drilledIn !== xe && E.setDrilledIn(xe));
    };
    if (_ && _ > 0) {
      const Le = setTimeout(ye, _);
      return () => {
        Ne = !0, clearTimeout(Le);
      };
    } else
      ye();
  }, [y, E, fe, he, _]), q.useEffect(() => {
    if (!y) return;
    const xe = () => {
      const Ne = new URLSearchParams(window.location.search), ye = Ne.get($);
      Ne.get(S), oe(ye === null ? void 0 : ye);
    };
    return window.addEventListener("popstate", xe), () => window.removeEventListener("popstate", xe);
  }, [
    y,
    $,
    S,
    c,
    l
  ]);
  const br = q.useRef(0), Wt = q.useRef(
    null
  ), Dn = q.useCallback(
    (xe, Ne) => {
      xe !== fe && (n === void 0 && oe(xe), o?.(xe, Ne));
    },
    [n, o, fe]
  );
  q.useEffect(() => {
    if (!T && ze && W.current) {
      const xe = setTimeout(() => W.current?.focus(), 30);
      return () => clearTimeout(xe);
    }
  }, [ze, fe, T]);
  const pt = q.useRef(null), [st, Xn] = q.useState(
    () => b === "first" ? 0 : -1
  );
  q.useEffect(() => {
    if (st < 0 || !pt.current) return;
    const Ne = Array.from(
      pt.current.querySelectorAll("[data-nav-item]")
    )[st];
    if (Ne) {
      document.activeElement !== Ne && Ne.focus(), br.current = st;
      const ye = t[st];
      N?.(
        ye ? p(ye) : void 0,
        ye,
        st
      );
    }
  }, [st, t, N, p]);
  const qc = (xe) => {
    const Ne = m === "vertical" ? "ArrowDown" : "ArrowRight", ye = m === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (xe.key === "ArrowRight" && m === "vertical") {
      xe.preventDefault(), tt ? (ae("secondary"), setTimeout(() => {
        L.current?.focus();
      }, 10)) : (ae("content"), setTimeout(() => {
        W.current?.focus();
      }, 10));
      return;
    }
    if (xe.key === Ne)
      xe.preventDefault(), Xn((Le) => Math.min(t.length - 1, Le + 1));
    else if (xe.key === ye)
      xe.preventDefault(), Xn((Le) => Math.max(0, Le - 1));
    else if (xe.key === "Home")
      xe.preventDefault(), Xn(0);
    else if (xe.key === "End")
      xe.preventDefault(), Xn(t.length - 1);
    else if (xe.key === "Enter" || xe.key === " ") {
      xe.preventDefault();
      const Le = t[st];
      Le && !Le.disabled && Dn(p(Le), Le);
    } else if (xe.key.length === 1 && /[a-z0-9]/i.test(xe.key)) {
      Wt.current || (Wt.current = { buffer: "", last: 0 });
      const Le = Date.now(), nt = 700, Xe = xe.key.toLowerCase();
      Le - Wt.current.last > nt ? Wt.current.buffer = Xe : Wt.current.buffer += Xe, Wt.current.last = Le;
      let Je = Wt.current.buffer;
      const In = Je.split("").every((At) => At === Je[0]), hn = t.map(
        (At) => String(At.label || "").toLowerCase()
      );
      let vr = 0;
      st >= 0 && (vr = (st + 1) % t.length);
      let Re;
      const Qe = (At, uo) => {
        const fo = t.length;
        for (let Ma = 0; Ma < fo; Ma++) {
          const Pa = (vr + Ma) % fo;
          if (!t[Pa].disabled && hn[Pa].startsWith(At))
            return Pa;
        }
      };
      In && Je.length > 1 ? Re = Qe(Je[0]) : (Re = Qe(Je), Re === void 0 && Je.length > 1 && (Re = Qe(Je[Je.length - 1]), Re !== void 0 && Wt.current && (Wt.current.buffer = Je[Je.length - 1]))), Re !== void 0 && Xn(Re);
    }
  }, Xc = q.useMemo(() => {
    if (H && (H === "url" || H === "both") && typeof window < "u") {
      const Ne = new URLSearchParams(window.location.search).get(z);
      if (Ne === "1") return !0;
      if (Ne === "0") return !1;
    }
    if (H && (H === "localStorage" || H === "both") && typeof window < "u")
      try {
        const xe = window.localStorage.getItem(re);
        if (xe === "1") return !0;
        if (xe === "0") return !1;
      } catch {
      }
    return C;
  }, [
    H,
    C,
    re,
    z
  ]), [Lt, Kc] = q.useState(Xc);
  q.useEffect(() => {
    P?.(Lt);
  }, [Lt, P]);
  const Zc = q.useCallback(() => {
    ue && I && Kc((xe) => !xe);
  }, [ue, I]);
  q.useEffect(() => {
    if (H && !(typeof window > "u")) {
      if (H === "localStorage" || H === "both")
        try {
          window.localStorage.setItem(
            re,
            Lt ? "1" : "0"
          );
        } catch {
        }
      if (H === "url" || H === "both") {
        const xe = new URLSearchParams(window.location.search);
        xe.set(z, Lt ? "1" : "0");
        const Ne = `${window.location.pathname}?${xe.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Ne);
      }
    }
  }, [
    Lt,
    H,
    re,
    z
  ]);
  const Jc = [
    "nhs-navigation-split-view",
    u ? "nhs-navigation-split-view--animated" : "",
    ze ? "nhs-navigation-split-view--detail-active" : "",
    he === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    I && ue && Lt ? "nhs-navigation-split-view--nav-collapsed" : "",
    x
  ].filter(Boolean).join(" "), Ia = q.useRef(null);
  q.useEffect(() => {
    if (!j && Ia.current) {
      const xe = ne ? `Selected ${ne.label}` : "Selection cleared";
      Ia.current.textContent = xe;
    }
  }, [ne, j]), q.useEffect(() => {
    !ze && fe == null && pt.current && pt.current.querySelectorAll("[data-nav-item]")[br.current]?.focus();
  }, [ze, fe]);
  const un = he === "three-column", [$a, Qc] = q.useState(!1);
  q.useEffect(() => {
    un && !$a && Qc(!0);
  }, [un, $a]);
  const co = q.useRef(un);
  q.useEffect(() => {
    co.current !== un && (M?.(un), co.current = un);
  }, [un, M]);
  const eu = () => {
    if (he === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": fe ? String(fe) : void 0,
          children: [
            t.map((ye) => {
              const Le = p(ye), nt = Le === fe;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": nt,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Le),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": nt || void 0,
                      "data-disabled": ye.disabled || void 0,
                      disabled: ye.disabled,
                      onClick: () => !ye.disabled && Dn(Le, ye),
                      children: [
                        ye.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                        ye.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                        s?.(ye),
                        ye.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
                      ]
                    }
                  )
                },
                Le
              );
            }),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: g || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const xe = "nsv-nav-instructions", Ne = q.useMemo(() => q.memo(
      ({
        item: ye,
        idx: Le,
        selected: nt,
        focused: Xe
      }) => {
        const Je = p(ye), In = ye.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Xe ? 0 : -1,
          onClick: () => {
            br.current = Le, Dn(Je, ye);
          },
          onKeyDown: (hn) => {
            (hn.key === "Enter" || hn.key === " ") && (hn.preventDefault(), br.current = Le, Dn(Je, ye));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Je),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": nt,
            "aria-current": nt ? "true" : void 0,
            "data-selected": nt || void 0,
            "data-disabled": ye.disabled || void 0,
            ...In,
            children: [
              ye.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                ye.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                s?.(ye)
              ] }),
              ye.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
            ]
          }
        );
      }
    ), [p, Dn, s]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: pt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: qc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": xe,
          "aria-activedescendant": fe ? String(fe) : void 0,
          children: [
            t.map((ye, Le) => /* @__PURE__ */ r.jsx(
              Ne,
              {
                item: ye,
                idx: Le,
                selected: p(ye) === fe,
                focused: Le === st || st === -1 && Le === 0 && b === "first",
                "data-just-selected": p(ye) === A ? "true" : void 0
              },
              p(ye)
            )),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: g || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          id: xe,
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
      ref: J,
      className: Jc,
      "aria-label": v?.rootLabel,
      "data-layout": he,
      onKeyDown: Ze,
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
                  ref: G,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": v?.navigationLabel || "Items",
                  "data-collapsed": Lt || void 0,
                  tabIndex: 0,
                  children: [
                    I && ue && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Zc,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Lt ? ee : Y,
                        title: Lt ? ee : Y,
                        children: Lt ? R || /* @__PURE__ */ r.jsx(vh, {}) : B || /* @__PURE__ */ r.jsx(bh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: eu() }),
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
                  ref: W,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": v?.contentLabel || "Content",
                  "data-has-selection": !!ne || void 0,
                  tabIndex: 0,
                  style: {
                    display: tt && !qe ? "none" : void 0
                  },
                  children: [
                    $e && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: Ft }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(ne)
                      }
                    )
                  ]
                }
              ),
              he === "three-column" && (!F || $a) || tt && !qe ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: L,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": v?.secondaryContentLabel || "Secondary",
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
                        tt && !qe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: ne && typeof ne == "object" && "label" in ne ? ne.label : String(ne) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        ne && Z && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof Z == "function" ? Z(ne) : Z
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(ne) })
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
            ref: Ia,
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
            children: un ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
yh.displayName = "NavigationSplitView";
const wh = typeof window < "u" && window.document ? q.useLayoutEffect : q.useEffect, si = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), _h = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, u = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, g = (x) => {
    h && (x.preventDefault(), a?.(e));
  }, v = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: g,
    onKeyDown: (x) => {
      (x.key === "Enter" || x.key === " ") && g(x), x.key === "Escape" && o && g(x);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: _e("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: c, top: u, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": d,
      "aria-colspan": f,
      ...v,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: _e("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Sh = ru(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...u
}) => {
  const [d, f] = Oe(() => /* @__PURE__ */ new Set()), [h, g] = Oe(() => /* @__PURE__ */ new Set()), v = Ue(/* @__PURE__ */ new Set()), x = ve((_) => d.has(_), [d]), p = ve((_) => {
    f((F) => {
      const w = new Set(F);
      return w.has(_.id) ? (w.delete(_.id), g((I) => {
        const C = new Set(I);
        return C.add(_.id), C;
      }), setTimeout(() => g((I) => {
        const C = new Set(I);
        return C.delete(_.id), C;
      }), 240), l?.(_.id, !1)) : (w.add(_.id), l?.(_.id, !0)), w;
    });
  }, [l]);
  wh(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const _ = [];
    if (d.forEach((C) => {
      v.current.has(C) || _.push(C);
    }), v.current = new Set(d), !_.length) return;
    const F = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, w = _.map((C) => `.nhsuk-product-roadmap__inline-children[data-parent="${C}"] .nhsuk-product-roadmap__inline-child`).join(","), I = Array.from(document.querySelectorAll(w));
    if (I.length) {
      if (F) {
        I.forEach((C) => {
          C.style.opacity = "1", C.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((C) => {
        (C.gsap || C.default || C).to(I, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        I.forEach((C) => {
          C.style.opacity = "1", C.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, c, i]);
  const m = ve(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), k = _e("nhsuk-product-roadmap", o), M = si(n, 120, 1200, 400), D = si(a, 1, 6, 2), b = Me(() => e.map((_) => /* @__PURE__ */ new Date(_ + " 01")), [e]), T = Me(() => {
    if (b.length === 0) {
      const w = /* @__PURE__ */ new Date();
      return [w, w];
    }
    const _ = new Date(b[0]), F = cr.offset(new Date(b[b.length - 1]), 1);
    return [_, F];
  }, [b]), j = Me(() => Qs().domain(T).range([0, b.length * M]), [T, b.length, M]), N = ve((_) => {
    if (_.startDate) {
      const Y = new Date(_.startDate), R = new Date(_.endDate ?? _.startDate);
      R < Y && R.setTime(Y.getTime());
      const B = j(Y), H = cr.offset(new Date(R), 1);
      let re = j(H);
      Number.isFinite(re) || (re = B + M);
      const z = Math.max(M * 0.25, re - B), de = B / M, ge = z / M;
      return { ..._, _pxLeft: B, _pxWidth: z, _startFraction: de, _spanColumns: ge };
    }
    const F = _.date ?? 1, w = _.dateOffset ?? 0, I = _.length ?? 1, C = _.partialLength ?? 1, P = F - 1 + w, ee = I - 1 + C;
    return { ..._, _pxLeft: P * M, _pxWidth: ee * M, _startFraction: P, _spanColumns: ee };
  }, [j, M]), y = Me(() => t.map((_) => {
    const w = _.roadmapItems.map((C) => {
      const P = !C.childItems && C.children ? { ...C, childItems: C.children } : { ...C };
      return N(P);
    }).sort((C, P) => C._pxLeft !== P._pxLeft ? C._pxLeft - P._pxLeft : P._pxWidth - C._pxWidth), I = [];
    return w.forEach((C) => {
      const P = C._pxLeft, ee = C._pxLeft + C._pxWidth;
      let Y = I.findIndex((R) => R <= P);
      Y === -1 && (Y = I.length, I.push(0)), I[Y] = ee, C.verticalPosition = Y + 1;
    }), { ..._, roadmapItems: w, _laneCount: I.length };
  }), [t, N]), $ = Me(() => y.map((_) => _._laneCount || 1), [y]), S = Me(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: k,
      style: { "--column-width": `${M}px`, gridTemplateColumns: S },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": y.length + 1,
      ...u,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((_, F) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": F + 2, children: _ }, `${_}-${F}`))
        ] }),
        y.map((_, F) => {
          const w = F + 2, I = $[F];
          let C, P = 0, ee = [];
          i && c === "inline" && (ee = _.roadmapItems.filter((H) => x(H.id) && H.childItems && H.childItems.length).map((H) => ({ id: H.id, lane: H.verticalPosition || 1, count: H.childItems.length })).sort((H, re) => H.lane - re.lane), P = ee.reduce((H, re) => H + re.count, 0));
          const Y = I + P;
          C = `calc((${Y} * var(--roadmap-item-block-height)) + (max(0, ${Y} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let B = 0;
          return ee.forEach((H) => {
            B += H.count, R[H.lane + 1] = B;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": w, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: _.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: C }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: _.roadmapItems.map((H, re) => {
              const z = (H.verticalPosition || 1) - 1, de = ee.filter((Z) => Z.lane - 1 < z).reduce((Z, te) => Z + te.count, 0), ge = z + de, le = x(H.id), ie = h.has(H.id);
              return /* @__PURE__ */ r.jsxs(Ct.Fragment, { children: [
                /* @__PURE__ */ r.jsx(_h, { item: H, maxLines: D, enableDrilldown: i, onExpand: p, isActive: le, topLaneIndex: ge, laneOffset: de }),
                i && c === "inline" && (le || ie) && H.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": H.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${H.title} child tasks`, children: H.childItems.map((Z, te) => {
                  const ce = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let V = H._pxLeft, ue = H._pxWidth;
                  if (Z.startDate) {
                    const E = new Date(Z.startDate);
                    let U = Z.endDate ? new Date(Z.endDate) : new Date(E);
                    U < E && (U = new Date(E));
                    const oe = new Date(U);
                    oe.setDate(oe.getDate() + 1);
                    const fe = j(E);
                    let ne = j(oe);
                    (!Number.isFinite(ne) || ne <= fe) && (ne = fe + 6), V = fe, ue = Math.max(6, ne - fe);
                  }
                  const he = ge + 1 + te;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: _e("nhsuk-product-roadmap__inline-child", Z.status && `nhsuk-product-roadmap__inline-child--status-${Z.status}`, !le && ie && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${V}px`, width: `${ue}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${he})`, height: ce, opacity: le ? 0 : void 0, transform: le ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Z.title })
                      ]
                    },
                    Z.id ?? te
                  );
                }) })
              ] }, H.id ?? re);
            }) }) })
          ] }, `${_.heading}-${F}`);
        }),
        i && c === "overlay" && d.size === 1 && (() => {
          const _ = Array.from(d)[0], F = t.flatMap((w) => w.roadmapItems).find((w) => w.id === _);
          return !F || !F.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${F.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: F.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: m, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((w, I) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: w.title }),
                w.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: w.content })
              ] }, w.id ?? I)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: m, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Sh.displayName = "ProductRoadmap";
function yl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = yl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Wr() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = yl(e)) && (a && (a += " "), a += t);
  return a;
}
function ut(e) {
  return function() {
    return e;
  };
}
const cs = Math.PI, us = 2 * cs, gn = 1e-6, kh = us - gn;
function wl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Ch(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return wl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class Nh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? wl : Ch(t);
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
    let i = this._x1, l = this._y1, c = a - t, u = o - n, d = i - t, f = l - n, h = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > gn) if (!(Math.abs(f * c - u * d) > gn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = a - i, v = o - l, x = c * c + u * u, p = g * g + v * v, m = Math.sqrt(x), k = Math.sqrt(h), M = s * Math.tan((cs - Math.acos((x + h - p) / (2 * m * k))) / 2), D = M / k, b = M / m;
      Math.abs(D - 1) > gn && this._append`L${t + D * d},${n + D * f}`, this._append`A${s},${s},0,0,${+(f * g > d * v)},${this._x1 = t + b * c},${this._y1 = n + b * u}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), c = a * Math.sin(o), u = t + l, d = n + c, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${u},${d}` : (Math.abs(this._x1 - u) > gn || Math.abs(this._y1 - d) > gn) && this._append`L${u},${d}`, a && (h < 0 && (h = h % us + us), h > kh ? this._append`A${a},${a},0,1,${f},${t - l},${n - c}A${a},${a},0,1,${f},${this._x1 = u},${this._y1 = d}` : h > gn && this._append`A${a},${a},0,${+(h >= cs)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function _l(e) {
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
  }, () => new Nh(t);
}
function Sl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function kl(e) {
  this._context = e;
}
kl.prototype = {
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
function Cl(e) {
  return new kl(e);
}
function Nl(e) {
  return e[0];
}
function jl(e) {
  return e[1];
}
function Tl(e, t) {
  var n = ut(!0), a = null, o = Cl, s = null, i = _l(l);
  e = typeof e == "function" ? e : e === void 0 ? Nl : ut(e), t = typeof t == "function" ? t : t === void 0 ? jl : ut(t);
  function l(c) {
    var u, d = (c = Sl(c)).length, f, h = !1, g;
    for (a == null && (s = o(g = i())), u = 0; u <= d; ++u)
      !(u < d && n(f = c[u], u, c)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, u, c), +t(f, u, c));
    if (g) return s = null, g + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : ut(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : ut(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : ut(!!c), l) : n;
  }, l.curve = function(c) {
    return arguments.length ? (o = c, a != null && (s = o(a)), l) : o;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? a = s = null : s = o(a = c), l) : a;
  }, l;
}
function ds(e, t, n) {
  var a = null, o = ut(!0), s = null, i = Cl, l = null, c = _l(u);
  e = typeof e == "function" ? e : e === void 0 ? Nl : ut(+e), t = typeof t == "function" ? t : ut(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? jl : ut(+n);
  function u(f) {
    var h, g, v, x = (f = Sl(f)).length, p, m = !1, k, M = new Array(x), D = new Array(x);
    for (s == null && (l = i(k = c())), h = 0; h <= x; ++h) {
      if (!(h < x && o(p = f[h], h, f)) === m)
        if (m = !m)
          g = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), v = h - 1; v >= g; --v)
            l.point(M[v], D[v]);
          l.lineEnd(), l.areaEnd();
        }
      m && (M[h] = +e(p, h, f), D[h] = +t(p, h, f), l.point(a ? +a(p, h, f) : M[h], n ? +n(p, h, f) : D[h]));
    }
    if (k) return l = null, k + "" || null;
  }
  function d() {
    return Tl().defined(o).curve(i).context(s);
  }
  return u.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ut(+f), a = null, u) : e;
  }, u.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ut(+f), u) : e;
  }, u.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : ut(+f), u) : a;
  }, u.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ut(+f), n = null, u) : t;
  }, u.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ut(+f), u) : t;
  }, u.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : ut(+f), u) : n;
  }, u.lineX0 = u.lineY0 = function() {
    return d().x(e).y(t);
  }, u.lineY1 = function() {
    return d().x(e).y(n);
  }, u.lineX1 = function() {
    return d().x(a).y(t);
  }, u.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : ut(!!f), u) : o;
  }, u.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), u) : i;
  }, u.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), u) : s;
  }, u;
}
function oi(e) {
  return e < 0 ? -1 : 1;
}
function ii(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (oi(s) + oi(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function li(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function za(e, t, n) {
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
        za(this, this._t0, li(this, this._t0));
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
          this._point = 3, za(this, li(this, n = ii(this, e, t)), n);
          break;
        default:
          za(this, this._t0, n = ii(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(zr.prototype).point = function(e, t) {
  zr.prototype.point.call(this, t, e);
};
function Vr(e) {
  return new zr(e);
}
function jh(e, t, n) {
  const a = Hi(e, t);
  return Qs().domain(a).range(n);
}
function ci(e, t, n) {
  const [a, o] = Hi(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Er().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const c = o - a, u = (c > 0 ? c : a) * 0.1;
    i = Math.max(0, a - u), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Er().domain([i, l]).nice().range(n);
}
function fs(e, t, n, a) {
  const o = Tl().x(t).y(n);
  return a?.smooth !== !1 && o.curve(Vr), o(e) ?? "";
}
function Th(e = {}) {
  const t = q.useRef(null), n = q.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = q.useState({ width: 0, height: 0 });
  q.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const u of c) {
        const { width: d, height: f } = u.contentRect;
        o({ width: d, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: n, ref: t };
}
const Dl = q.createContext(null);
function pn() {
  return q.useContext(Dl);
}
const Dh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Th(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: c, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(Dl.Provider, { value: l, children: o }) });
}, to = q.createContext(null), Tn = () => q.useContext(to), Ih = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: u,
  yBottomGapPx: d
}) => {
  const f = pn(), h = t ?? f?.innerWidth ?? 0, g = n ?? f?.innerHeight ?? 0, v = q.useMemo(() => e.flatMap((b) => b.data), [e]), x = q.useCallback(
    (b) => {
      if (a) return a(b);
      const T = b.x;
      return T instanceof Date ? T : new Date(T);
    },
    [a]
  ), p = c ?? 6, m = u ?? 6, k = q.useMemo(
    () => jh(v, x, [
      p,
      Math.max(0, h - p)
    ]),
    [v, x, h, p]
  ), M = q.useMemo(() => {
    const b = Math.max(0, d ?? 0), T = Math.max(0, g - (m + b));
    if (l) {
      const j = ci([], (N) => N.y, [
        T,
        m
      ]);
      return j.domain(l), j;
    }
    return ci(v, (j) => j.y, [T, m]);
  }, [v, g, l, m, d]), D = q.useMemo(
    () => ({
      xScale: k,
      yScale: M,
      getXTicks: (b = s) => k.ticks(b),
      getYTicks: (b = i) => M.ticks(b)
    }),
    [k, M, s, i]
  );
  return /* @__PURE__ */ r.jsx(to.Provider, { value: D, children: o });
}, Nr = 16, jr = 6, $h = 16, Mh = 4, Ph = 6, Fh = 3, Lh = void 0, ui = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: c,
  maxTickLabelLength: u,
  autoMinLabelSpacing: d = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: g,
  yZeroBreak: v
}) => {
  const x = Tn(), p = pn(), m = t || (e === "x" ? x?.xScale : x?.yScale), k = n ?? (e === "x" ? 6 : 5), M = typeof o == "function", D = q.useMemo(() => {
    if (M || !g) return;
    const j = (N) => new Intl.DateTimeFormat(void 0, N);
    switch (g) {
      case "dayShortMonth":
        return (N) => {
          const y = N instanceof Date ? N : new Date(N);
          return `${y.getDate()}
${j({ month: "short" }).format(y)}`;
        };
      case "dayShortMonthYear":
        return (N) => {
          const y = N instanceof Date ? N : new Date(N);
          return `${y.getDate()}
${j({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "shortMonth":
        return (N) => {
          const y = N instanceof Date ? N : new Date(N);
          return j({ month: "short" }).format(y);
        };
      case "shortMonthYear":
        return (N) => {
          const y = N instanceof Date ? N : new Date(N);
          return `${j({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "hourMinute":
        return (N) => {
          const y = N instanceof Date ? N : new Date(N);
          return j({ hour: "2-digit", minute: "2-digit" }).format(y);
        };
      default:
        return;
    }
  }, [M, g]);
  let b = M ? o : D || ((j) => String(j));
  const T = q.useMemo(() => a && Array.isArray(a) ? a : m ? typeof m.ticks == "function" ? m.ticks(k) : m.domain ? m.domain() : [] : [], [m, k, a]);
  if (e === "x" && !M && !g && T.length && T.every((j) => j instanceof Date)) {
    const j = T[0], N = T[T.length - 1], y = N.getTime() - j.getTime(), $ = 24 * 3600 * 1e3, S = 365 * $, _ = j.getFullYear() === N.getFullYear(), F = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (y < 2 * $) {
      const w = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      b = (I) => w.format(I);
    } else if (y < 32 * $)
      b = (w) => {
        const I = w;
        return `${I.getDate()} ${F.format(I)}`;
      };
    else if (y < S && _)
      b = (w) => F.format(w);
    else if (y < 2 * S) {
      const w = /* @__PURE__ */ new Set();
      b = (I) => {
        const C = I, P = C.getMonth();
        return w.has(P) || w.add(P), `${F.format(C)} ${C.getFullYear()}`;
      };
    } else
      b = (w) => String(w.getFullYear());
  }
  if (!m || !p) return null;
  if (e === "x") {
    const j = i ?? p.innerHeight, N = typeof m.bandwidth == "function", y = N ? m.bandwidth() : 0, $ = (F) => {
      const w = m(F);
      return N ? w + y / 2 : w;
    };
    let S = c ?? 0;
    if (d && c == null) {
      const F = T.map(
        (I) => b(I).replace(/\n.*/g, "")
      ), w = F.length ? F.reduce((I, C) => I + C.length, 0) / F.length : 0;
      S = Math.max(12, Math.round(w * 6 + 4));
    }
    const _ = q.useMemo(() => {
      if (a && Array.isArray(a) || S <= 0) return T;
      const F = [];
      let w = -1 / 0;
      for (const I of T) {
        const C = $(I);
        C - w >= S && (F.push(I), w = C);
      }
      return F;
    }, [
      T,
      m,
      S,
      a,
      N,
      y
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${j})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: p.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          _.map((F, w) => {
            const I = b(F), C = u && I.length > u ? I.slice(0, Math.max(1, u - 1)) + "…" : I, P = h ? C.split(/\n/) : [C.replace(/\n/g, " ")], ee = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${$(F)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: ee,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        P.map((Y, R) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: R === 0 ? 0 : "1.1em", children: Y }, R)),
                        C !== I && /* @__PURE__ */ r.jsx("title", { children: I })
                      ]
                    }
                  )
                ]
              },
              F?.toString?.() || w
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
          const j = !!v?.enabled, N = Math.max(jr, v?.gapPx ?? Nr);
          if (!j)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: p.innerHeight, stroke: "currentColor" });
          const y = Math.max(0, p.innerHeight - N);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: y, stroke: "currentColor" });
        })(),
        T.map((j, N) => {
          const y = b(j), $ = u && y.length > u ? y.slice(0, Math.max(1, u - 1)) + "…" : y, S = h ? $.split(/\n/) : [$.replace(/\n/g, " ")];
          if (!!v?.enabled) {
            const F = Math.max(jr, v?.gapPx ?? Nr), w = Math.max(0, p.innerHeight - F);
            if (m(j) > w - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${m(j)})`,
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
                      S.map((F, w) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: w === 0 ? 0 : "1.1em", children: F }, w)),
                      $ !== y && /* @__PURE__ */ r.jsx("title", { children: y })
                    ]
                  }
                )
              ]
            },
            j?.toString?.() || N
          );
        }),
        !!v?.enabled && (() => {
          const j = Math.max(jr, v?.gapPx ?? Nr), N = p.innerHeight, $ = Math.max(0, N - j), S = $, F = Math.max(4, N - S), w = Mh, I = Ph, C = Math.max(1, Math.round(v?.zigZag?.amplitudePx ?? w)), P = Math.max(1, Math.round(v?.zigZag?.stepXPx ?? Fh)), ee = v?.zigZag?.heightPx ?? Lh, Y = Math.max(4, Math.round(ee ?? 0));
          let R, B;
          if (v?.zigZag?.heightPx && v.zigZag.heightPx > 0) {
            const ie = Math.max(4, Math.min(F - 2, Y));
            R = Math.max(1, Math.floor(ie / (2 * C))), B = Math.max(0, Math.min(ie, R * 2 * C));
          } else typeof v?.zigZag?.cycles == "number" && v?.zigZag?.cycles > 0 ? (R = Math.max(1, Math.round(v.zigZag.cycles)), B = R * 2 * C, B = Math.min(B, F - 2), R = Math.max(1, Math.floor(B / (2 * C)))) : (R = I, B = Math.min(F - 2, R * 2 * C), R = Math.max(1, Math.floor(B / (2 * C))));
          const H = S + (F - B) / 2, re = H + B;
          let z = "M0,0";
          const de = B > 0 ? Math.max(0, Math.floor((B - C) / (2 * C))) : 0, ge = Math.max(0, (B - de * 2 * C) / 2), le = C > 0 ? P * (ge / C) : 0;
          ge > 0 && (z += ` l${le},${ge}`);
          for (let ie = 0; ie < de; ie++)
            z += ` l-${P},${C} l${P},${C}`;
          return ge > 0 && (z += ` l-${le},${ge}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: $, y2: H, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${H})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: z, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: re, y2: N, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${N})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        s && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -p.innerHeight / 2,
            y: -p.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: s
          }
        )
      ]
    }
  );
}, Ah = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Tn(), i = pn();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, u) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: s.yScale(c),
        y2: s.yScale(c),
        stroke: n,
        strokeDasharray: a
      },
      u
    )),
    e === "x" && l.map((c, u) => /* @__PURE__ */ r.jsx(
      "line",
      {
        y1: 0,
        y2: i.innerHeight,
        x1: s.xScale(c),
        x2: s.xScale(c),
        stroke: n,
        strokeDasharray: a
      },
      u
    ))
  ] });
}, Eh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, mr = {
  color: Eh
}, Rh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ka = {
  color: Rh
}, Bh = [
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
let Va = null, Ga = null, Ya = null, Il = "optimized";
function Hh() {
  const e = { color: { ...ka.color, ...mr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
    return Bh;
  }
}
function Oh() {
  return Va || (Va = Hh()), Va;
}
function Uh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function qa(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Wh(e, t, n) {
  const a = qa(e), o = qa(t), s = qa(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, c = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function zh(e, t, n) {
  let i = e / 95.047, l = t / 100, c = n / 108.883;
  const u = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = u(i), l = u(l), c = u(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function $l(e) {
  const t = Uh(e);
  if (!t) return null;
  const n = Wh(t.r, t.g, t.b);
  return zh(n.x, n.y, n.z);
}
function di(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function Vh() {
  const e = Oh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => $l(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, u = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += di(l, t[f]), u++);
    const d = c / Math.max(1, u);
    d > a && (a = d, n = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(n), o.delete(n); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const c of o) {
      const u = t[c];
      if (!u) continue;
      let d = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const g = di(u, h);
          g < d && (d = g);
        }
      }
      d > l && (l = d, i = c);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function Gh() {
  return Ga || (Ga = Vh()), Ga;
}
function Yh(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, c = i(a) * 100, u = i(s) * 108.883;
  return { X: l, Y: c, Z: u };
}
function qh(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function Xh(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Kh(e, t) {
  const n = $l(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = Yh(a, n.a, n.b), l = qh(o, s, i);
  return Xh(l.r, l.g, l.b);
}
function Zh() {
  const e = Gh(), n = [12, -12, 24, -24].map((o) => e.map((s) => Kh(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function Jh() {
  return (!Ya || Qh()) && (Ya = Zh(), Ml = Il), Ya;
}
let Ml = null;
function Qh() {
  return Ml !== Il;
}
function Ht(e) {
  const t = Jh();
  return t[e % t.length];
}
let Hn = null, ur = null, dr = null, fr = null;
function em() {
  const e = mr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Hn = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      Hn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    ur = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (ur[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    fr = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (fr[s] = i);
    }), dr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (dr[s] = i);
    });
  }
}
function Ca() {
  (!Hn || !ur || !dr || !fr) && em();
}
function Cn(e) {
  return Ca(), Hn ? Hn[e % Hn.length] : "#212b32";
}
function tm(e) {
  return Ca(), ur ? ur[e] : void 0;
}
function Gr(e, t) {
  return tm(e) || Cn(t);
}
const ps = ["low", "moderate", "high", "critical"];
let Xa = null;
function nm() {
  const e = { color: { ...ka.color, ...mr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return ps.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function Pl() {
  return Xa || (Xa = nm()), Xa;
}
function rm(e) {
  return Pl()[e.toLowerCase()];
}
function am(e, t) {
  return rm(e) || Pl()[ps[t % ps.length]] || Ht(t);
}
function sm(e) {
  return Ca(), dr ? dr[e] : void 0;
}
function om(e, t) {
  return sm(e) || Cn(t);
}
const hs = ["trust", "ambulance", "icb", "region"];
let Ka = null;
function im() {
  const e = { color: { ...ka.color, ...mr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return hs.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function Fl() {
  return Ka || (Ka = im()), Ka;
}
function lm(e) {
  return Fl()[e.toLowerCase()];
}
function cm(e, t) {
  return lm(e) || Fl()[hs[t % hs.length]] || Ht(t);
}
function um(e) {
  return Ca(), fr ? fr[e] : void 0;
}
function dm(e, t) {
  return um(e) || Cn(t);
}
let Za = null;
const fm = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function pm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function hm() {
  const e = { color: { ...ka.color, ...mr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((c, u) => c ? c[u] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return fm.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function mm() {
  return Za || (Za = hm()), Za;
}
function gm(e) {
  return mm()[pm(e)];
}
function On(e, t) {
  return gm(e) || Ht(t);
}
const Ll = q.createContext(null), gr = () => q.useContext(Ll), Yv = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = q.useState(() => new Set(e)), i = n !== void 0, l = q.useMemo(() => i ? new Set(n) : o, [i, n, o]), c = q.useCallback((d) => {
    i || s(new Set(d)), a?.(Array.from(d));
  }, [i, a]), u = q.useMemo(() => ({
    hiddenIds: l,
    isHidden: (d) => l.has(d),
    toggle: (d) => {
      const f = new Set(l);
      f.has(d) ? f.delete(d) : f.add(d), c(f);
    },
    showOnly: (d) => {
      c(/* @__PURE__ */ new Set());
    },
    showAll: () => c(/* @__PURE__ */ new Set()),
    setHidden: (d) => c(new Set(Array.isArray(d) ? d : Array.from(d)))
  }), [l, c]);
  return /* @__PURE__ */ r.jsx(Ll.Provider, { value: u, children: t });
}, Al = q.createContext(null), cn = () => q.useContext(Al), xm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Tn(), o = gr(), [s, i] = q.useState(null), l = q.useRef(/* @__PURE__ */ new Map()), [c, u] = q.useState([]), d = q.useCallback(
    (j, N) => {
      l.current.set(j, N);
    },
    []
  ), f = q.useCallback((j) => {
    l.current.delete(j);
  }, []), h = q.useCallback(
    (j, N) => {
      if (!a) return;
      const { xScale: y, yScale: $ } = a;
      let S = null, _ = 1 / 0;
      l.current.forEach((F, w) => {
        F.forEach((I, C) => {
          const P = y(I.x), ee = $(I.y), Y = P - j, R = ee - N, B = Math.sqrt(Y * Y + R * R);
          B < _ && (_ = B, S = {
            seriesId: w,
            index: C,
            x: I.x,
            y: I.y,
            clientX: P,
            clientY: ee
          });
        });
      }), S && _ <= t ? i(S) : i(null);
    },
    [a, t]
  ), g = q.useCallback(() => i(null), []);
  q.useEffect(() => {
    if (!s) {
      u([]);
      return;
    }
    if (!a) return;
    const { xScale: j, yScale: N } = a, y = [];
    l.current.forEach(($, S) => {
      $.forEach((_, F) => {
        (s.x instanceof Date && _.x instanceof Date ? _.x.getTime() === s.x.getTime() : _.x === s.x) && y.push({
          seriesId: S,
          index: F,
          x: _.x,
          y: _.y,
          clientX: j(_.x),
          clientY: N(_.y)
        });
      });
    }), y.sort(($, S) => $.seriesId.localeCompare(S.seriesId)), u(y);
  }, [s, a]);
  const v = q.useCallback(
    (j) => {
      if (!s) return;
      const N = l.current.get(s.seriesId);
      if (!N) return;
      let y = s.index + j;
      if (y < 0 || y >= N.length) {
        if (!n) return;
        y = (y + N.length) % N.length;
      }
      const $ = N[y];
      if (!a) return;
      const { xScale: S, yScale: _ } = a;
      i({
        seriesId: s.seriesId,
        index: y,
        x: $.x,
        y: $.y,
        clientX: S($.x),
        clientY: _($.y)
      });
    },
    [s, a, n]
  ), x = q.useCallback(
    (j) => {
      let N = Array.from(l.current.keys());
      if (o && (N = N.filter((P) => !o.isHidden(P))), N.length === 0) return;
      if (!s) {
        const P = N[0], ee = l.current.get(P);
        if (!ee || !a) return;
        const { xScale: Y, yScale: R } = a, B = ee[0];
        i({
          seriesId: P,
          index: 0,
          x: B.x,
          y: B.y,
          clientX: Y(B.x),
          clientY: R(B.y)
        });
        return;
      }
      const y = N.indexOf(s.seriesId);
      if (y === -1) return;
      let $ = y + j;
      if ($ < 0 || $ >= N.length) {
        if (!n) return;
        $ = ($ + N.length) % N.length;
      }
      const S = N[$], _ = l.current.get(S);
      if (!_ || !a) return;
      const F = Math.min(s.index, _.length - 1), w = _[F], { xScale: I, yScale: C } = a;
      i({
        seriesId: S,
        index: F,
        x: w.x,
        y: w.y,
        clientX: I(w.x),
        clientY: C(w.y)
      });
    },
    [s, a, n, o]
  ), p = q.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (o && (j = j.filter((F) => !o.isHidden(F))), j.length === 0) return;
    const N = s ? s.seriesId : j[0], y = l.current.get(N);
    if (!y || y.length === 0 || !a) return;
    const $ = y[0], { xScale: S, yScale: _ } = a;
    i({
      seriesId: N,
      index: 0,
      x: $.x,
      y: $.y,
      clientX: S($.x),
      clientY: _($.y)
    });
  }, [s, a, o]), m = q.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (o && (j = j.filter((w) => !o.isHidden(w))), j.length === 0) return;
    const N = s ? s.seriesId : j[0], y = l.current.get(N);
    if (!y || y.length === 0 || !a) return;
    const $ = y.length - 1, S = y[$], { xScale: _, yScale: F } = a;
    i({
      seriesId: N,
      index: $,
      x: S.x,
      y: S.y,
      clientX: _(S.x),
      clientY: F(S.y)
    });
  }, [s, a, o]), k = q.useCallback(
    () => v(1),
    [v]
  ), M = q.useCallback(
    () => v(-1),
    [v]
  ), D = q.useCallback(
    () => x(1),
    [x]
  ), b = q.useCallback(
    () => x(-1),
    [x]
  ), T = q.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: g,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: k,
      focusPrevPoint: M,
      focusNextSeries: D,
      focusPrevSeries: b,
      focusFirstPoint: p,
      focusLastPoint: m
    }),
    [
      s,
      c,
      h,
      g,
      d,
      f,
      k,
      M,
      D,
      b,
      p,
      m
    ]
  );
  return /* @__PURE__ */ r.jsx(Al.Provider, { value: T, children: e });
}, bm = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: c = 1,
  smooth: u = !0,
  gradientFillId: d,
  colors: f
}) => {
  const h = Tn();
  if (!h) return null;
  const { xScale: g, yScale: v } = h, p = gr()?.isHidden(e.id) ?? !1, m = p && l === "fade";
  if (p && l === "remove")
    return null;
  const k = cn();
  q.useEffect(() => {
    if (!k) return;
    const N = e.data.map((y) => ({ x: i(y), y: y.y }));
    return k.registerSeries(e.id, N), () => k.unregisterSeries(e.id);
  }, [k, e.id, e.data, i]);
  const M = q.useMemo(
    () => fs(
      e.data,
      (N) => g(i(N)),
      (N) => v(N.y),
      { smooth: u }
    ),
    [e.data, g, v, i, u]
  ), D = q.useMemo(() => {
    if (!e.data.length) return "";
    const [N] = v.domain(), y = ds().x(($) => g(i($))).y0(() => v(N)).y1(($) => v($.y));
    return u && y.curve(Vr), y(e.data) || "";
  }, [e.data, g, v, i, u]), b = f && f[t], T = e.color || b || (n === "region" ? On(e.id, t) : Ht(t)), j = n === "region" ? Gr(e.id, t) : Cn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: m ? 0.25 : 1,
      "aria-hidden": m ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: D,
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
            strokeWidth: c,
            role: "presentation"
          }
        ),
        a && e.data.map((N, y) => {
          const $ = g(i(N)), S = v(N.y), _ = o ? 0 : -1, F = !m && (o && y === s || k?.focused?.seriesId === e.id && k.focused.index === y), w = () => {
            k && !m && k.setFocused({
              seriesId: e.id,
              index: y,
              x: i(N),
              y: N.y,
              clientX: $,
              clientY: S
            });
          }, I = () => {
            k && k.focused?.seriesId === e.id && k.focused.index === y && k.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: $,
              cy: S,
              r: F ? 5 : 3.5,
              stroke: F ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : j,
              strokeWidth: F ? 2 : 1,
              fill: F ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : T,
              className: "fdp-line-point",
              tabIndex: m ? -1 : _,
              "aria-label": `${e.label || e.id} ${i(N).toDateString()} value ${N.y}`,
              "data-series": e.id,
              "data-index": y,
              onMouseEnter: w,
              onFocus: w,
              onMouseLeave: I,
              onBlur: I
            },
            y
          );
        })
      ]
    }
  );
}, vm = ({ polite: e = !0, format: t }) => {
  const n = cn(), [a, o] = q.useState(""), s = q.useRef("");
  return q.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let c;
    if (l && l.length > 1) {
      const u = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${u}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : ym(i.seriesId, i.x, i.y, i.index);
    if (c !== s.current) {
      s.current = c, o("");
      const u = setTimeout(() => o(c), 10);
      return () => clearTimeout(u);
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
function ym(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const qv = () => {
  const e = cn(), t = pn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), c = i + 8, u = l - 8, d = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = d ? f : `${f} • ${n.y}`, g = /\d+$/.exec(n.seriesId || ""), v = g ? parseInt(g[0], 10) - 1 : 0, x = Ht(v >= 0 ? v : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: x, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const k = a.map((j) => `${j.seriesId}: ${j.y}`), M = [h, ...k], D = M.reduce((j, N) => Math.max(j, N.length), 0), b = Math.max(90, D * 6.2 + 16), T = 16 * M.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: u - T, rx: 4, ry: 4, width: b, height: T, fill: "#212b32", opacity: 0.92 }),
        M.map((j, N) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: u - T + 6 + 16 * (N + 0.7), fill: "#fff", fontSize: 12, children: j }, N))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: u - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: u - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, Xv = ({
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
  const u = gr(), d = !!(u && !a && !l && s === void 0), f = a || d, h = e || [], g = s !== void 0, [v, x] = q.useState(new Set(i)), p = g ? new Set(s) : v, [m, k] = q.useState(""), M = (D) => {
    if (d && u) {
      const _ = u.isHidden(D);
      u.toggle(D);
      const w = h.find((C) => C.id === D)?.label || D, I = c ? c(D, _, w) : `${w} ${_ ? "shown" : "hidden"}`;
      k(I);
      return;
    }
    if (!f) return;
    const b = new Set(p), T = b.has(D);
    T ? b.delete(D) : b.add(D), g || x(b);
    const j = h.filter((_) => !b.has(_.id)).map((_) => _.id), N = Array.from(b);
    l?.(j, N);
    const $ = h.find((_) => _.id === D)?.label || D, S = c ? c(D, T, $) : `${$} ${T ? "shown" : "hidden"}`;
    k(S);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((D, b) => {
      const T = D.palette || t, j = D.color || (T === "region" ? On(D.id, b) : T === "severity" ? am(D.id, b) : T === "org-level" ? cm(D.id, b) : Ht(b));
      let N = D.stroke || (T === "region" ? Gr(D.id, b) : T === "severity" ? om(D.id, b) : T === "org-level" ? dm(D.id, b) : Cn(b));
      if (o && N) {
        const S = N.trim().toLowerCase();
        (S === "#fff" || S === "#ffffff" || S === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(S)) && (N = "#212b32");
      }
      const y = d && u ? u.isHidden(D.id) : p.has(D.id), $ = f ? {
        "aria-pressed": !y,
        "aria-label": `${D.label} (${y ? "show" : "hide"})`,
        onClick: () => M(D.id)
      } : { "aria-label": D.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${y ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: j,
              backgroundImage: D.patternDataUrl ? `url(${D.patternDataUrl})` : void 0,
              backgroundSize: D.patternDataUrl ? "auto" : void 0,
              borderColor: N
            },
            ...$
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: D.label })
      ] }, D.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: m })
  ] });
}, Kv = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: u = !0,
  colors: d
}) => {
  const f = Tn();
  if (!f) return null;
  const { xScale: h, yScale: g } = f, x = gr()?.isHidden(e.id) ?? !1, p = x && s === "fade";
  if (x && s === "remove") return null;
  const m = cn();
  q.useEffect(() => {
    if (!m) return;
    const j = e.data.map((N) => ({ x: a(N), y: N.y }));
    return m.registerSeries(e.id, j), () => m.unregisterSeries(e.id);
  }, [m, e.id, e.data, a]);
  const k = d && d[t], M = e.color || k || (n === "region" ? On(e.id, t) : Ht(t)), D = q.useMemo(() => c && c.length === e.data.length ? fs(
    e.data,
    (j) => h(a(j)),
    (j) => {
      const N = e.data.indexOf(j);
      return g(c[N].y1);
    },
    { smooth: l }
  ) : fs(
    e.data,
    (j) => h(a(j)),
    (j) => g(j.y),
    { smooth: l }
  ), [e.data, c, h, g, a, l]), b = q.useMemo(() => {
    if (c && c.length === e.data.length) {
      const S = ds().x((_) => h(a(_))).y0((_, F) => g(c[F].y0)).y1((_, F) => g(c[F].y1));
      return l && S.curve(Vr), S(e.data) || "";
    }
    const [j, N] = g.domain();
    let y = i;
    y < j ? y = j : y > N && (y = N);
    const $ = ds().x((S) => h(a(S))).y0(() => g(y)).y1((S) => g(S.y));
    return l && $.curve(Vr), $(e.data) || "";
  }, [e.data, c, h, g, a, i, l]), T = q.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: T, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: M, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: M, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: b,
            fill: u ? `url(#${T})` : M,
            ...u ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: D, fill: "none", stroke: M, strokeWidth: 1 })
      ]
    }
  );
}, Zv = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: c,
  adaptive: u = !1,
  adaptiveGroupOccupancy: d = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: g,
  stacked: v,
  gapRatio: x = 0.15,
  minBarWidth: p,
  gradientFill: m = !0,
  gradientStrokeMatch: k = !0,
  opacity: M = 1,
  fadedOpacity: D = 0.25,
  flatFillOpacity: b = 1,
  colors: T
}) => {
  const j = Math.max(0, x), N = Tn(), y = pn();
  if (!N || !y) return null;
  const { xScale: $, yScale: S } = N, F = gr()?.isHidden(e.id) ?? !1, w = F && f === "fade";
  if (F && f === "remove") return null;
  const I = cn();
  q.useEffect(() => {
    if (!I) return;
    const Z = e.data.map((te) => ({ x: o(te), y: te.y }));
    return I.registerSeries(e.id, Z), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, o]);
  const C = typeof $.bandwidth == "function", P = C ? $.bandwidth() : void 0, ee = q.useMemo(() => {
    if (P != null) return P;
    const Z = g && g.length ? g : [e], te = [];
    Z.forEach((se) => {
      se.data.forEach((he) => {
        const E = $(o(he));
        Number.isFinite(E) && te.push(E);
      });
    });
    const ce = te.sort((se, he) => se - he);
    if (ce.length <= 1) return 40;
    const V = [];
    for (let se = 1; se < ce.length; se++)
      V.push(ce[se] - ce[se - 1]);
    return V.sort((se, he) => se - he), (V[Math.floor(V.length / 2)] || 40) * i;
  }, [e.data, g, $, o, i, P]), { basePerBar: Y } = q.useMemo(() => {
    if (C) {
      const ce = ee, V = Math.max(
        1,
        (ce - l * (n - 1)) / n
      ), ue = e.barWidth ?? c;
      let se = ue ? Math.min(ue, ce) : V;
      if (u) {
        const he = ce * Math.min(1, Math.max(0.05, d)), E = Math.max(
          1,
          (he - l * (n - 1)) / n
        );
        se = ue ? Math.min(se, E) : E;
      }
      return { basePerBar: se };
    }
    const Z = e.barWidth ?? c, te = Math.max(
      1,
      (ee - l * (n - 1)) / n
    );
    if (u) {
      const ce = g && g.length ? g : [e], V = [];
      ce.forEach(
        (oe) => oe.data.forEach((fe) => {
          const ne = $(o(fe));
          Number.isFinite(ne) && V.push(ne);
        })
      ), V.sort((oe, fe) => oe - fe);
      const ue = [];
      for (let oe = 1; oe < V.length; oe++)
        ue.push(V[oe] - V[oe - 1]);
      ue.sort((oe, fe) => oe - fe);
      const he = (ue[Math.floor(ue.length / 2)] || ee) * Math.min(1, Math.max(0.05, d)), E = Math.max(
        1,
        (he - l * (n - 1)) / n
      );
      return { basePerBar: Z ? Math.min(Z, E) : E };
    }
    return Z ? { basePerBar: Math.min(Z, te) } : { basePerBar: te };
  }, [
    C,
    ee,
    l,
    n,
    c,
    e.barWidth,
    u,
    d,
    g,
    $,
    o
  ]), R = q.useMemo(() => {
    if (C) return [];
    const Z = [];
    return (g && g.length ? g : [e]).forEach(
      (ce) => ce.data.forEach((V) => {
        const ue = $(o(V));
        Number.isFinite(ue) && Z.push(ue);
      })
    ), Z.sort((ce, V) => ce - V), Array.from(new Set(Z));
  }, [C, g, e, $, o]), B = q.useMemo(() => {
    if (C)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: y.innerWidth }
      ];
    const Z = [];
    for (let te = 0; te < R.length; te++) {
      const ce = R[te], V = te === 0 ? 0 : (R[te - 1] + ce) / 2, ue = te === R.length - 1 ? y.innerWidth : (ce + R[te + 1]) / 2;
      Z.push({
        center: ce,
        left: Math.max(0, V),
        right: Math.min(y.innerWidth, ue)
      });
    }
    return Z;
  }, [C, R, y.innerWidth]), H = q.useMemo(() => {
    if (C || !B.length)
      return;
    const Z = Math.min(1, Math.max(0.05, i)), te = B.map((he) => Math.max(2, he.right - he.left)), ce = te.map(
      (he) => Math.max(2, Math.min(he - 1, he * Z))
    );
    let V = Math.min(...ce);
    if (p)
      if (n <= 1) {
        const he = Math.min(...te.map((E) => E - 1));
        he >= p && V < p && (V = Math.min(he, p));
      } else {
        const he = Math.min(...te.map((U) => U - 1)), E = p * n + (n - 1) * (p * j);
        E <= he && V < E && (V = E);
      }
    if (n <= 1)
      return p && V < p && te.every((E) => E >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: V, barWidth: V };
    let ue = V / (n + (n - 1) * j);
    return ue < 1 && (ue = 1), p && ue < p && p * n + (n - 1) * (p * j) <= V && (ue = p), { groupWidth: ue * n + (n - 1) * (ue * j), barWidth: ue };
  }, [
    C,
    B,
    i,
    n,
    j,
    p
  ]), re = T && T[t] ? T[t] : void 0, z = e.color || re || (a === "region" ? On(e.id, t) : Ht(t)), de = a === "region" ? Gr(e.id, t) : Cn(t), ge = k && (e.color || re) ? z : de, le = Number.isFinite(S(0)) ? S(0) : S.range()[0], ie = q.useId();
  return v && v.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: w ? D : M,
      "aria-hidden": w ? !0 : void 0,
      children: [
        m && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: ie,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: z, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: z,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: z,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((Z, te) => {
          const ce = o(Z), V = $(C ? Z.x : ce);
          let ue, se;
          if (C)
            ue = ee, se = V;
          else {
            const J = B.find(
              (W) => Math.abs(W.center - V) < 0.5
            );
            if (!J || !H)
              ue = Y, se = V - Y / 2;
            else {
              const { groupWidth: W } = H;
              ue = W;
              let L = V - W / 2;
              L < J.left && (L = J.left), L + W > J.right && (L = Math.max(J.left, J.right - W)), se = L;
            }
          }
          const he = v[te], E = S(he.y0), U = S(he.y1), oe = Math.min(E, U), fe = Math.abs(U - E) || 1;
          if (!C && p && ue < p) {
            const J = B.find(
              (W) => Math.abs(W.center - V) < 0.5
            );
            if (J) {
              const W = Math.max(2, J.right - J.left - 1), L = Math.min(W, p);
              L > ue && (ue = L, se = Math.max(
                J.left,
                Math.min(J.right - ue, V - ue / 2)
              ));
            }
          }
          const ne = !w && I?.focused?.seriesId === e.id && I.focused.index === te, A = () => {
            !I || w || I.setFocused({
              seriesId: e.id,
              index: te,
              x: ce,
              y: he.y1 - he.y0,
              clientX: se + ue / 2,
              clientY: oe
            });
          }, O = () => {
            I?.focused?.seriesId === e.id && I.focused.index === te && I.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: se,
              y: oe,
              width: ue,
              height: fe,
              fill: m ? `url(#${ie})` : z,
              ...m ? {} : { fillOpacity: b },
              stroke: ne ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : m && k ? z : void 0,
              strokeWidth: ne ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: w || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ce instanceof Date ? ce.toDateString() : ce} value ${he.y1 - he.y0}`,
              onMouseEnter: A,
              onFocus: A,
              onMouseLeave: O,
              onBlur: O
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
      opacity: w ? D : M,
      "aria-hidden": w ? !0 : void 0,
      children: [
        m && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: ie,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: z, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: z,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: z,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((Z, te) => {
            const V = T && T[te] || (a === "region" ? On(String(Z.x), te) : Ht(te)), ue = `${ie}-${te}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: ue,
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
              ue
            );
          })
        ] }),
        e.data.map((Z, te) => {
          const ce = o(Z), V = $(C ? Z.x : ce);
          let ue, se;
          if (C) {
            const K = ee;
            if (n <= 1)
              se = K, ue = V;
            else {
              se = Math.max(
                1,
                K / (n + (n - 1) * j)
              );
              const Q = se * j, X = se * n + Q * (n - 1);
              ue = V + (K - X) / 2 + t * (se + Q);
            }
          } else {
            const K = B.find((Q) => Q.center === V);
            if (!K || !H)
              se = Y, ue = V - Y / 2, p && se < p && (se = p, ue = V - se / 2);
            else {
              const { barWidth: Q } = H;
              se = Q;
              const X = n > 1 ? Q * j : 0, ae = se * n + X * (n - 1);
              let me = V - ae / 2;
              me < K.left && (me = K.left), me + ae > K.right && (me = Math.max(K.left, K.right - ae)), ue = me + t * (se + X);
            }
            if (p && se < p) {
              const Q = B.find(
                (X) => Math.abs(X.center - V) < 0.5
              );
              if (Q) {
                const X = Math.max(2, Q.right - Q.left - 1), ae = Math.min(X, p);
                if (ae > se)
                  if (n <= 1)
                    se = ae, ue = Math.max(
                      Q.left,
                      Math.min(Q.right - se, V - se / 2)
                    );
                  else {
                    const me = ae * j, be = ae * n + me * (n - 1);
                    if (be <= Q.right - Q.left - 1) {
                      se = ae;
                      const we = be;
                      let Ce = V - we / 2;
                      Ce < Q.left && (Ce = Q.left), Ce + we > Q.right && (Ce = Math.max(
                        Q.left,
                        Q.right - we
                      )), ue = Ce + t * (se + me);
                    }
                  }
              }
            }
          }
          const he = ue + se / 2, E = S(Z.y), U = Math.min(le, E), oe = Math.abs(le - E), fe = !w && I?.focused?.seriesId === e.id && I.focused.index === te, ne = () => {
            !I || w || I.setFocused({
              seriesId: e.id,
              index: te,
              x: ce,
              y: Z.y,
              clientX: he,
              clientY: E
            });
          }, A = () => {
            I?.focused?.seriesId === e.id && I.focused.index === te && I.clear();
          }, O = h === "category" && T ? T[te] : void 0, J = h === "category" ? O || (a === "region" ? On(String(Z.x), te) : Ht(te)) : z, W = h === "category" ? `${ie}-${te}` : ie, L = m && k ? J : h === "category" ? a === "region" ? Gr(String(Z.x), te) : Cn(te) : ge, G = fe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L || J;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ue,
              y: U,
              width: se,
              height: oe || 1,
              fill: m ? `url(#${W})` : J,
              ...m ? {} : { fillOpacity: b },
              stroke: G,
              strokeWidth: fe ? 2 : 1,
              className: "fdp-bar",
              tabIndex: w || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ce instanceof Date ? ce.toDateString() : ce} value ${Z.y}`,
              onMouseEnter: ne,
              onFocus: ne,
              onMouseLeave: A,
              onBlur: A
            },
            te
          );
        })
      ]
    }
  );
}, Jv = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = pn(), c = t ?? l?.innerWidth ?? 0, u = n ?? l?.innerHeight ?? 0, d = q.useMemo(() => e.flatMap((p) => p.data), [e]), f = q.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((m) => p.add(m.x)), Array.from(p);
  }, [d]), h = q.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), g = q.useMemo(
    () => Ui().domain(f).range([0, c]).paddingInner(a).paddingOuter(o),
    [f, c, a, o]
  ), v = q.useMemo(
    () => Er().domain([0, h]).nice().range([u, 0]),
    [h, u]
  ), x = q.useMemo(
    () => ({
      xScale: g,
      yScale: v,
      getXTicks: () => f,
      getYTicks: (p = i) => v.ticks(p)
    }),
    [g, v, f, i]
  );
  return /* @__PURE__ */ r.jsx(to.Provider, { value: x, children: s });
}, Qv = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = q.useId(), u = s || c, d = t ? `${u}-desc` : void 0, f = n ? `${u}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: u,
      className: Wr("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${u}-title`,
      "aria-describedby": Wr(d, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${u}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: d, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(ln, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(ln, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, ey = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = q.useRef(null);
  return q.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
      if (l.length === 0) return;
      const c = [];
      l.forEach((u) => {
        u.classList.contains("fdp-chart--enhanced") || (u.classList.add("fdp-chart--enhanced"), c.push(u));
      }), c.length && t && t(c);
    };
    if (n > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: o, children: a });
}, wm = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: c,
  loading: u = !1,
  error: d,
  valueFormatter: f,
  className: h,
  style: g,
  id: v,
  announceDelta: x = !0,
  visual: p
}) => {
  const m = q.useId(), k = v || m, M = `${k}-label`, D = `${k}-value`, b = `${k}-delta`, T = typeof t == "number" && !Number.isNaN(t), j = u ? "—" : d ? "" : T ? f ? f(t) : t.toLocaleString() : t;
  let N, y = "", $ = "";
  if (a && !u && !d) {
    N = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const S = Math.abs(a.value), _ = N === "up" ? `+${S}` : N === "down" ? `-${S}` : "0", F = a.isPercent ? "%" : "";
    if (y = `${_}${F}`, a.ariaLabel)
      $ = a.ariaLabel;
    else {
      const w = a.invert ? N === "down" : N === "up";
      $ = `${N === "neutral" ? "no change" : N === "up" ? "up" : "down"} ${S}${F}${N === "neutral" ? "" : w ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Wr(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        u && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        h
      ),
      style: g,
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
            /* @__PURE__ */ r.jsx("div", { id: D, className: "fdp-metric-card__value", children: u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: j }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !u && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !u && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: b,
              "aria-label": $,
              className: Wr(
                "fdp-metric-card__delta",
                N && `fdp-metric-card__delta--${N}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: y }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          c && c.length > 0 && !u && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        p && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: p }),
        x && a && !a.ariaLabel && !u && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: $ })
      ] })
    }
  );
};
let ms = null;
try {
  ms = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Ve = (e, t) => {
  if (!ms) return t;
  const n = e.split(".");
  let a = ms;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Na = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Ve("gradient.stop.start-opacity", "0.12"),
  mid: Ve("gradient.stop.mid-opacity", "0.03"),
  end: Ve("gradient.stop.end-opacity", "0"),
  triStart: Ve(
    "gradient.stop.triangle-start-opacity",
    Ve("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Ve(
    "gradient.stop.triangle-mid-opacity",
    Ve("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Ve(
    "gradient.stop.triangle-end-opacity",
    Ve("gradient.stop.end-opacity", "0")
  )
});
var vt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(vt || {}), Be = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Be || {}), je = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(je || {}), zt = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(zt || {});
const no = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
no.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const _m = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Sm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, El = no.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: _m[t],
    category: Sm[t],
    participatesInRanking: !0
  }, e),
  {}
);
no.map(
  (e) => El[e]
);
var bt = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(bt || {}), gt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(gt || {}), rt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(rt || {}), It = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(It || {}), Tr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(Tr || {}), Rl = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(Rl || {}), Fn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(Fn || {}), Bl = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(Bl || {}), rr = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(rr || {});
const Un = {
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
function ja(e) {
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
function Ta(e) {
  switch (e) {
    case je.Improvement:
      return "Improvement signal";
    case je.Concern:
      return "Concern signal";
    case je.Neither:
      return "Common cause variation";
    case je.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Hl(e) {
  switch (e) {
    case rt.Pass:
      return "Target met";
    case rt.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function km(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Pt = {
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
  return e ? Pt[e]?.token ?? Pt.neither.token : Pt.neither.token;
}
function Cm(e) {
  return e ? Pt[e]?.hex ?? Pt.neither.hex : Pt.neither.hex;
}
var vn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(vn || {});
const Nm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, jm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var ot = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ot || {}), Ie = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Ie || {}), kt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(kt || {}), ke = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(ke || {});
const Tm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, Da = {
  special_cause_deteriorating: {
    hex: Pt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Pt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Pt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Pt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(Da).forEach((e) => {
  e.text || (e.text = Tm(e.hex));
});
const Ul = (e) => Da[e], ro = (e) => Da[e].judgement || "none", fi = {
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
function Dm(e, t) {
  let n;
  return e === "common_cause" ? n = fi.common : n = fi.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var St = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(St || {}), He = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(He || {}), Ae = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Ae || {}), Ke = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(Ke || {}), yn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(yn || {}), Et = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Et || {}), Wn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Wn || {}), En = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(En || {}), ht = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(ht || {}), Vt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Vt || {});
const fn = {
  [Ke.SinglePoint]: 1,
  [Ke.TwoSigma]: 2,
  [Ke.Shift]: 3,
  [Ke.Trend]: 4
}, pi = 3.267, Im = 2.66, hi = 0.2777;
function Te(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Rn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function mi(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!(t[o] || !Te(s))) {
      if (a !== null) {
        const i = e[a];
        Te(i) && (n[o] = Math.abs(s - i));
      }
      a = o;
    }
  }
  return n;
}
function gi(e, t) {
  const n = e.filter(Te);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = Rn(a), i = pi * s;
    a = a.filter((l) => l <= i);
  }
  const o = Rn(a);
  return { mrMean: o, mrUcl: pi * o };
}
function xi(e, t) {
  if (!Te(e) || !Te(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Im * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function $m(e, t, n, a) {
  if (e === St.T) {
    const f = t.map((N) => Te(N) && N > 0 ? Math.pow(N, hi) : null), h = mi(f, n), g = gi(h, a), v = f.filter((N, y) => !n[y] && Te(N)), x = v.length ? Rn(v) : NaN, p = xi(x, g.mrMean), m = (N) => Te(N) && N > 0 ? Math.pow(N, 1 / hi) : null, k = Te(p.upperProcessLimit) ? m(p.upperProcessLimit) : null, M = Te(p.lowerProcessLimit) && p.lowerProcessLimit > 0 ? m(p.lowerProcessLimit) : null, D = Te(p.upperTwoSigma) ? m(p.upperTwoSigma) : null, b = Te(p.lowerTwoSigma) && p.lowerTwoSigma > 0 ? m(p.lowerTwoSigma) : null, T = Te(p.upperOneSigma) ? m(p.upperOneSigma) : null, j = Te(p.lowerOneSigma) && p.lowerOneSigma > 0 ? m(p.lowerOneSigma) : null;
    return {
      mean: Te(x) && x > 0 ? m(x) : null,
      mr: h,
      mrMean: g.mrMean,
      mrUcl: g.mrUcl,
      upperProcessLimit: k,
      lowerProcessLimit: M,
      upperTwoSigma: D,
      lowerTwoSigma: b,
      upperOneSigma: T,
      lowerOneSigma: j
    };
  }
  if (e === St.G) {
    const f = t.filter((S, _) => !n[_] && Te(S)), h = f.length ? Rn(f) : NaN, g = Te(h) ? 1 / (h + 1) : NaN, v = (S) => {
      if (!Te(g) || g <= 0 || g >= 1) return NaN;
      const _ = Math.ceil(Math.log(1 - S) / Math.log(1 - g)) - 1;
      return Math.max(0, _);
    }, x = 135e-5, p = 1 - 135e-5, m = 0.02275, k = 1 - 0.02275, M = 0.158655, D = 1 - 0.158655, b = v(p), T = v(x), j = v(k), N = v(m), y = v(D), $ = v(M);
    return {
      mean: Te(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Te(b) ? b : null,
      lowerProcessLimit: Te(T) ? T : null,
      upperTwoSigma: Te(j) ? j : null,
      lowerTwoSigma: Te(N) ? N : null,
      upperOneSigma: Te(y) ? y : null,
      lowerOneSigma: Te($) ? $ : null
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
  const o = mi(t, n), s = o.filter(Te), i = s.length ? Rn(s) : NaN, l = Te(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, g, v) => {
      if (n[v] || !Te(g)) return h;
      if (!a)
        return h.push(g), h;
      const x = o[v];
      return (x === null || !Te(l) || Te(x) && x <= l) && h.push(g), h;
    }, []);
    c = f.length ? Rn(f) : NaN;
  }
  const u = gi(o, a), d = xi(c, u.mrMean);
  return {
    mean: c,
    mr: o,
    mrMean: u.mrMean,
    mrUcl: u.mrUcl,
    ...d
  };
}
function Mm(e, t) {
  const n = e.map((c, u) => u).filter((c) => !e[c].ghost && Te(e[c].value)), a = (c) => e[c], o = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const c of n) {
    const u = a(c);
    if (!Te(u.mean) || !Te(u.value) ? (i = [], l = []) : u.value > u.mean ? (i.push(c), l = []) : u.value < u.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= o)
      for (const d of i) a(d).shiftUp = !0;
    if (l.length >= o)
      for (const d of l) a(d).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const d = n.slice(c, c + 3).map(a);
    if (!d.every((D) => Te(D.value) && Te(D.mean)))
      continue;
    const f = d[0].mean, h = d.every((D) => D.value > f), g = d.every((D) => D.value < f);
    if (!h && !g)
      continue;
    const v = d[0].upperTwoSigma ?? 1 / 0, x = d[0].lowerTwoSigma ?? -1 / 0, p = d[0].upperProcessLimit ?? 1 / 0, m = d[0].lowerProcessLimit ?? -1 / 0, k = d.filter((D) => t.twoSigmaIncludeAboveThree ? D.value > v : D.value > v && D.value <= p), M = d.filter((D) => t.twoSigmaIncludeAboveThree ? D.value < x : D.value < x && D.value >= m);
    h && k.length >= 2 && k.forEach((D) => D.twoSigmaUp = !0), g && M.length >= 2 && M.forEach((D) => D.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const d = n.slice(c, c + 5).map(a);
      if (!d.every((k) => Te(k.value) && Te(k.mean)))
        continue;
      const f = d[0].mean, h = d.every((k) => k.value > f), g = d.every((k) => k.value < f);
      if (!h && !g)
        continue;
      const v = d[0].upperOneSigma ?? 1 / 0, x = d[0].lowerOneSigma ?? -1 / 0, p = d.filter((k) => k.value > v), m = d.filter((k) => k.value < x);
      h && p.length >= 4 && p.forEach((k) => k.fourOfFiveUp = !0), g && m.length >= 4 && m.forEach((k) => k.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - s; c++) {
    const u = n.slice(c, c + s), d = u.map(a);
    if (!d.every((g) => Te(g.value)))
      continue;
    let f = !0, h = !0;
    for (let g = 1; g < d.length && (d[g].value > d[g - 1].value || (f = !1), d[g].value < d[g - 1].value || (h = !1), !(!f && !h)); g++)
      ;
    f && u.forEach((g) => a(g).trendUp = !0), h && u.forEach((g) => a(g).trendDown = !0);
  }
}
function Wl(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: Ke.SinglePoint,
    rank: fn[Ke.SinglePoint]
  }), e.singlePointDown && n.push({
    id: Ke.SinglePoint,
    rank: fn[Ke.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: Ke.TwoSigma,
    rank: fn[Ke.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: Ke.TwoSigma,
    rank: fn[Ke.TwoSigma]
  }), e.shiftUp && t.push({ id: Ke.Shift, rank: fn[Ke.Shift] }), e.shiftDown && n.push({ id: Ke.Shift, rank: fn[Ke.Shift] }), e.trendUp && t.push({ id: Ke.Trend, rank: fn[Ke.Trend] }), e.trendDown && n.push({ id: Ke.Trend, rank: fn[Ke.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), o = n.reduce((i, l) => Math.max(i, l.rank), 0), s = a > o ? yn.Upwards : o > a ? yn.Downwards : yn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function bi(e, t) {
  const n = t === He.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === He.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === He.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === He.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function vi(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: c, upMax: u, dnMax: d, primeDirection: f } = Wl(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, g = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Pm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === He.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ae.ImprovementHigh : e.specialCauseConcernValue !== null ? Ae.ConcernLow : Ae.CommonCause : t === He.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ae.ImprovementLow : e.specialCauseConcernValue !== null ? Ae.ConcernHigh : Ae.CommonCause : e.variationIcon = Ae.CommonCause;
  const v = e.specialCauseImprovementValue !== null ? Et.Up : e.specialCauseConcernValue !== null ? Et.Down : void 0, x = v === Et.Up ? u : v === Et.Down ? d : Math.max(u, d);
  e.primeRank = x || void 0;
  const p = v === Et.Up ? l.find((m) => m.rank === x) : v === Et.Down ? c.find((m) => m.rank === x) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: g };
}
function Pm(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? yn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const d = !!t.trendUp, f = !!t.trendDown;
    if (n === He.Up) {
      if (d && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!d && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === He.Down) {
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
  const u = o ? En.PreferImprovement : l ?? En.SqlPrimeThenRule;
  if (u === En.PreferImprovement) {
    n === He.Up ? t.specialCauseConcernValue = null : n === He.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (u === En.RuleHierarchy) {
    const d = c ?? [Ke.Trend, Ke.Shift, Ke.TwoSigma, Ke.SinglePoint], { up: f, dn: h } = Wl(t);
    for (const g of d) {
      const v = f.some((p) => p.id === g), x = h.some((p) => p.id === g);
      if (v && !x) {
        n === He.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (x && !v) {
        n === He.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (v && x) {
        (n === He.Up || n === He.Down) && (a === Wn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === yn.Upwards ? n === He.Up ? t.specialCauseConcernValue = null : n === He.Down && (t.specialCauseImprovementValue = null) : i === yn.Downwards ? n === He.Up ? t.specialCauseImprovementValue = null : n === He.Down && (t.specialCauseConcernValue = null) : a === Wn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var gs = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(gs || {});
function Fm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Lm(e) {
  const t = Fm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function yi(e) {
  const t = [], n = (i, l, c) => ({
    segStart: i,
    segSide: l,
    minV: c,
    maxV: c,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), a = (i, l, c, u, d) => ({
    minV: Math.min(c, i),
    maxV: Math.max(u, i),
    maxAbsDelta: Math.max(d, l)
  }), o = (i, l, c, u, d, f, h, g) => {
    i.push({
      trendDirection: g,
      start: l,
      end: c,
      side: u,
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
    let c = s, u = s;
    for (; u < e.length; u++) {
      const m = e[u];
      if (!m || m.value == null || m.ghost || !(l === "Up" ? m.trendUp : m.trendDown)) break;
    }
    const d = u - 1, f = [];
    let h, g, v = 1 / 0, x = -1 / 0, p = 0;
    for (let m = c; m <= d; m++) {
      const k = e[m];
      if (k.value == null) continue;
      const M = k.value - (k.mean ?? 0), D = Lm(M);
      if (!D) {
        h !== void 0 && (o(f, h, m - 1, g, v, x, p, l), h = void 0, g = void 0, v = 1 / 0, x = -1 / 0, p = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: g, minV: v, maxV: x, maxAbsDelta: p } = (() => {
          const b = n(m, D, k.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(M)
          };
        })());
      else if (D !== g)
        o(f, h, m - 1, g, v, x, p, l), { segStart: h, segSide: g, minV: v, maxV: x, maxAbsDelta: p } = (() => {
          const b = n(m, D, k.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(M)
          };
        })();
      else {
        const b = a(k.value, Math.abs(M), v, x, p);
        v = b.minV, x = b.maxV, p = b.maxAbsDelta;
      }
    }
    h !== void 0 && o(f, h, d, g, v, x, p, l), t.push({ trendDirection: l, start: c, end: d, segments: f }), s = d + 1;
  }
  return t;
}
function Am(e) {
  if (e === He.Up) return "Above";
  if (e === He.Down) return "Below";
}
function Em(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function wi(e, t) {
  const n = t.strategy ?? ht.CrossingAfterFavourable, a = Am(t.metricImprovement), o = Em(a), s = [];
  for (const i of e) {
    if (!a) {
      if (n === ht.ExtremeFavourable || n === ht.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const u of l)
          u.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = u);
        s.push(c);
      }
      continue;
    }
    if (n === ht.FavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === ht.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (n === ht.CrossingAfterFavourable) {
      const l = i.segments;
      let c;
      for (let u = 0; u < l.length; u++) {
        const d = l[u];
        if (d.side === a && u > 0 && l[u - 1].side !== a) {
          c = d;
          break;
        }
      }
      if (!c) {
        const u = l.filter((d) => d.side === a);
        u.length > 0 && (c = u.reduce(
          (d, f) => f.end - f.start > d.end - d.start ? f : d,
          u[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === ht.CrossingAfterUnfavourable) {
      const l = i.segments;
      let c;
      for (let u = 0; u < l.length; u++) {
        const d = l[u];
        if (d.side === o && u > 0 && l[u - 1].side !== o) {
          c = d;
          break;
        }
      }
      if (!c) {
        const u = l.filter((d) => d.side === o);
        u.length > 0 && (c = u.reduce(
          (d, f) => f.end - f.start > d.end - d.start ? f : d,
          u[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === ht.ExtremeFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (u, d) => d.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean ? d : u
      );
      s.push(c);
      continue;
    }
    if (n === ht.ExtremeUnfavourable) {
      const l = i.segments.filter((u) => u.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((u, d) => d.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean ? d : u);
      s.push(c);
      continue;
    }
    if (n === ht.FirstFavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && s.push(l);
      continue;
    }
    if (n === ht.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === o);
      l && s.push(l);
      continue;
    }
    if (n === ht.LongestFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (u, d) => d.end - d.start > u.end - u.start ? d : u
      );
      s.push(c);
      continue;
    }
    if (n === ht.LongestUnfavourable) {
      const l = i.segments.filter((u) => u.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((u, d) => d.end - d.start > u.end - u.start ? d : u);
      s.push(c);
      continue;
    }
    if (n === ht.LastFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === ht.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var dt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(dt || {}), Yn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Yn || {});
function Rm(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function ao(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = Rm(s);
    if (i && l) return "Improvement";
    switch (s.variationIcon) {
      case Ae.ImprovementHigh:
      case Ae.ImprovementLow:
        return "Improvement";
      case Ae.ConcernHigh:
      case Ae.ConcernLow:
        return "Concern";
      case Ae.NeitherHigh:
      case Ae.NeitherLow: {
        if (a === "Ungated" && n !== He.Neither) {
          if (i && !l)
            return n === He.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === He.Down ? "Improvement" : "Concern";
        }
        return o ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function Bm(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = ao(e, {
    metricImprovement: t,
    trendVisualMode: Yn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === He.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const g = o[f];
    (g === dt.Common || g === dt.NoJudgement) && (o[f] = h);
  }, u = (f) => {
    if (f == null) return null;
    const h = e.reduce((v, x) => (x.partitionId === f && typeof x.value == "number" && !x.ghost && v.push(x.value), v), []);
    return h.length ? h.reduce((v, x) => v + x, 0) / h.length : null;
  }, d = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, g) => {
    if (g === 0) return f;
    const v = e[g - 1];
    return v && h && h.partitionId !== v.partitionId && f.push(g), f;
  }, []);
  for (const f of d) {
    const h = e[f - 1], g = e[f];
    if (!h || !g)
      continue;
    let v = f - 1;
    for (; v - 1 >= 0 && e[v - 1] && e[v - 1].partitionId === h.partitionId; )
      v--;
    let x = f;
    for (; x + 1 < e.length && e[x + 1] && e[x + 1].partitionId === g.partitionId; )
      x++;
    let p = null;
    for (let T = f - 1; T >= 0; T--) {
      const j = e[T];
      if (j.partitionId !== h.partitionId) break;
      if (typeof j.mean == "number") {
        p = j.mean;
        break;
      }
    }
    let m = null;
    for (let T = f; T < e.length; T++) {
      const j = e[T];
      if (j.partitionId !== g.partitionId) break;
      if (typeof j.mean == "number") {
        m = j.mean;
        break;
      }
    }
    if (p == null && (p = u(h.partitionId ?? null)), m == null && (m = u(g.partitionId ?? null)), p == null || m == null)
      continue;
    const k = m - p, M = t === He.Up ? k > 0 : k < 0, D = M ? dt.Improvement : dt.Concern, b = l === "Same" ? D : M ? dt.Concern : dt.Improvement;
    for (let T = 1; T <= s; T++) {
      const j = f - T;
      if (j < v) break;
      c(j, b);
    }
    for (let T = 0; T < i; T++) {
      const j = f + T;
      if (j > x) break;
      c(j, D);
    }
  }
  return o;
}
function zl(e) {
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
function so(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, o = zl(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Wn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: En.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Vt.Off,
    trendSegmentationStrategy: ht.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? Vt.Always : o?.trendFavourableSegmentation === !1 ? Vt.Off : s.trendSegmentationMode), l = a.map((x, p) => ({
    rowId: p + 1,
    x: x.x,
    value: Te(x.value) ? x.value : null,
    ghost: !!x.ghost,
    baseline: !!x.baseline,
    target: Te(x.target) ? x.target : null
  })), c = [];
  let u = [];
  for (const x of l)
    x.baseline && u.length && (c.push(u), u = []), u.push(x);
  u.length && c.push(u);
  const d = [], f = (s.trendFavourableSegmentation || i !== Vt.Off) && !s.preferImprovementWhenConflict, h = l.filter((x) => !x.ghost && Te(x.value)).length, g = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let v = 0;
  for (const x of c) {
    v++;
    const p = x.map((b) => b.value), m = x.map((b) => b.ghost), k = $m(
      t,
      p,
      m,
      !!s.excludeMovingRangeOutliers
    ), M = x.map((b, T) => {
      const j = !b.ghost && Te(b.value) ? p.slice(0, T + 1).filter((y, $) => !m[$] && Te(y)).length : 0, N = g ? !0 : j >= s.minimumPoints;
      return {
        rowId: b.rowId,
        x: b.x,
        value: Te(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: v,
        pointRank: j,
        mean: (N || g) && Te(k.mean) ? k.mean : null,
        upperProcessLimit: N || g ? k.upperProcessLimit : null,
        lowerProcessLimit: N || g ? k.lowerProcessLimit : null,
        upperTwoSigma: N || g ? k.upperTwoSigma : null,
        lowerTwoSigma: N || g ? k.lowerTwoSigma : null,
        upperOneSigma: N || g ? k.upperOneSigma : null,
        lowerOneSigma: N || g ? k.lowerOneSigma : null,
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
        variationIcon: Ae.CommonCause
      };
    });
    for (const b of M)
      b.ghost || !Te(b.value) || b.mean === null || (Te(b.upperProcessLimit) && b.value > b.upperProcessLimit && (b.singlePointUp = !0), Te(b.lowerProcessLimit) && b.value < b.lowerProcessLimit && (b.singlePointDown = !0));
    Mm(M, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((b) => {
      const T = b.some(
        (S) => (S.singlePointUp || S.twoSigmaUp || S.shiftUp || S.trendUp) && (S.singlePointDown || S.twoSigmaDown || S.shiftDown || S.trendDown)
      );
      if (i === Vt.Off || i === Vt.AutoWhenConflict && !T)
        return;
      const j = yi(b), N = wi(j, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
      for (const S of N)
        for (let _ = S.start; _ <= S.end; _++)
          S.trendDirection === gs.Up ? y.add(_) : $.add(_);
      b.forEach((S, _) => {
        S.trendUp = y.has(_) ? S.trendUp : !1, S.trendDown = $.has(_) ? S.trendDown : !1, s.trendDominatesHighlightedWindow && (y.has(_) ? (S.singlePointDown = !1, S.twoSigmaDown = !1, S.shiftDown = !1) : $.has(_) && (S.singlePointUp = !1, S.twoSigmaUp = !1, S.shiftUp = !1));
      });
    })(M);
    for (const b of M) {
      if (b.ghost || !Te(b.value) || b.mean === null) {
        d.push(b);
        continue;
      }
      const { aligned: T, opposite: j } = bi(
        b,
        n
      );
      if (b.specialCauseImprovementValue = T ? b.value : null, b.specialCauseConcernValue = j ? b.value : null, n === He.Neither) {
        const N = b.singlePointUp || b.twoSigmaUp || b.shiftUp || b.trendUp, y = b.singlePointDown || b.twoSigmaDown || b.shiftDown || b.trendDown;
        b.variationIcon = N ? Ae.NeitherHigh : y ? Ae.NeitherLow : Ae.CommonCause;
      } else
        vi(b, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      d.push(b);
    }
  }
  if (s.trendAcrossPartitions) {
    const x = d.map((p, m) => ({ idx: m, r: p })).filter(({ r: p }) => !p.ghost && Te(p.value));
    if (x.length >= s.trendPoints)
      for (let p = 0; p <= x.length - s.trendPoints; p++) {
        const m = x.slice(p, p + s.trendPoints).map((b) => b.idx), k = m.map((b) => d[b]);
        if (!k.every((b) => Te(b.value))) continue;
        let M = !0, D = !0;
        for (let b = 1; b < k.length && (k[b].value > k[b - 1].value || (M = !1), k[b].value < k[b - 1].value || (D = !1), !(!M && !D)); b++)
          ;
        M && m.forEach((b) => d[b].trendUp = !0), D && m.forEach((b) => d[b].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const x = d.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (i === Vt.Always || i === Vt.AutoWhenConflict && x) {
        const p = yi(d), m = wi(p, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), k = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        for (const D of m)
          for (let b = D.start; b <= D.end; b++)
            D.trendDirection === gs.Up ? k.add(b) : M.add(b);
        d.forEach((D, b) => {
          D.trendUp = k.has(b) ? D.trendUp : !1, D.trendDown = M.has(b) ? D.trendDown : !1, s.trendDominatesHighlightedWindow && (k.has(b) ? (D.singlePointDown = !1, D.twoSigmaDown = !1, D.shiftDown = !1) : M.has(b) && (D.singlePointUp = !1, D.twoSigmaUp = !1, D.shiftUp = !1));
        });
      }
    }
    for (const x of d) {
      if (x.ghost || !Te(x.value) || x.mean === null || n === He.Neither) continue;
      const { aligned: p, opposite: m } = bi(x, n);
      x.specialCauseImprovementValue = p ? x.value : null, x.specialCauseConcernValue = m ? x.value : null, vi(x, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: d };
}
function oo(e, t) {
  const n = so(e), a = ao(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Yn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = Bm(n.rows, s, o), l = a.map((c, u) => {
    const d = i[u];
    if (c === dt.Common || c === dt.NoJudgement) {
      if (d === dt.Improvement) return dt.Improvement;
      if (d === dt.Concern) return dt.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: l };
}
var Vl = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(Vl || {});
function Hm(e, t, n) {
  const a = n?.trendVisualMode ?? Yn.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: c } = oo(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: o,
    boundaryWindows: i
  });
  let u = c.slice(), d = s.length ? s[0] : -1;
  if (d < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        d = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && d > 0 && (u[d - 1] = dt.Common), { rows: l, visuals: u };
}
const Gl = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: Wn.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Om(e) {
  return { ...Gl, ...e ?? {} };
}
var lt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(lt || {}), wn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(wn || {}), xs = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(xs || {});
const Yl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === He.Up ? ot.HigherIsBetter : i.improvementDirection === He.Down ? ot.LowerIsBetter : ot.ContextDependent : i.polarity && (l = i.polarity);
    let c;
    const u = i.variationIcon;
    if (u === je.Improvement || u === je.Concern || u === je.Neither || u === je.Suppressed)
      u === je.Improvement ? c = ke.SpecialCauseImproving : u === je.Concern ? c = ke.SpecialCauseDeteriorating : u === je.Neither ? c = ke.CommonCause : c = ke.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case Ae.ImprovementHigh:
        case Ae.ImprovementLow:
          c = ke.SpecialCauseImproving;
          break;
        case Ae.ConcernHigh:
        case Ae.ConcernLow:
          c = ke.SpecialCauseDeteriorating;
          break;
        case Ae.NeitherHigh:
        case Ae.NeitherLow:
          c = i.specialCauseNeutral ? ke.SpecialCauseNoJudgement : ke.CommonCause;
          break;
        case Ae.CommonCause:
          c = ke.CommonCause;
          break;
        default:
          c = ke.SpecialCauseNoJudgement;
          break;
      }
    let d = i.trend;
    return d || (c === ke.SpecialCauseImproving ? d = l === ot.LowerIsBetter ? Ie.Lower : Ie.Higher : c === ke.SpecialCauseDeteriorating ? d = l === ot.LowerIsBetter ? Ie.Higher : Ie.Lower : c === ke.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? d = Ie.Higher : i.lowSideSignal && !i.highSideSignal ? d = Ie.Lower : d = Ie.Higher : d = Ie.Higher), { state: c, direction: d, polarity: l ?? ot.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === ke.SpecialCauseImproving || i.state === ke.SpecialCauseDeteriorating) && i.polarity && (i.state === ke.SpecialCauseImproving ? l = i.polarity === ot.LowerIsBetter ? Ie.Lower : Ie.Higher : l = i.polarity === ot.LowerIsBetter ? Ie.Higher : Ie.Lower), l || (i.state === ke.SpecialCauseImproving ? l = Ie.Higher : i.state === ke.SpecialCauseDeteriorating ? l = Ie.Lower : l = Ie.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? ot.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [kt.Improving]: ke.SpecialCauseImproving,
    [kt.Deteriorating]: ke.SpecialCauseDeteriorating,
    [kt.No_Judgement]: ke.SpecialCauseNoJudgement,
    [kt.None]: ke.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === kt.Improving ? s = n.polarity === ot.LowerIsBetter ? Ie.Lower : Ie.Higher : n.judgement === kt.Deteriorating ? s = n.polarity === ot.LowerIsBetter ? Ie.Higher : Ie.Lower : s = n.trend ?? Ie.Higher, { state: o, direction: s, polarity: n.polarity };
};
function ql(e, t) {
  const { state: n, direction: a, polarity: o } = Yl(e), s = ro(n), i = a === Ie.Higher ? "above" : "below", l = a === Ie.Higher ? "upwards" : "downwards", c = (() => {
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
        case kt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case kt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case kt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case kt.None:
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
const Ja = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), io = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: o = !0,
  gradientWash: s = !1,
  variant: i = wn.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: c = xs.Polarity,
  letterOverride: u,
  ...d
}) => {
  const f = Dr(), h = Dr(), {
    start: g,
    mid: v,
    end: x,
    triStart: p,
    triMid: m,
    triEnd: k
  } = Na(), { state: M, direction: D, polarity: b } = Me(
    () => Yl(e),
    [e]
  ), T = Me(() => Ul(M), [M]), j = Me(() => ro(M), [M]), N = j === kt.Improving || j === kt.Deteriorating;
  let y = "";
  a && N && (c === xs.Polarity ? b === ot.HigherIsBetter ? y = "H" : b === ot.LowerIsBetter ? y = "L" : y = "" : y = D === Ie.Higher ? "H" : "L"), u !== void 0 && (y = u);
  const $ = M !== ke.CommonCause, S = M === ke.SpecialCauseNoJudgement, _ = Ve("common-cause", "#A6A6A6"), F = $ ? T.hex : _, w = Me(
    () => Dm(M, D),
    [M, D]
  ), I = n || `${T.label}${y ? D === Ie.Higher ? " – Higher" : " – Lower" : ""}`, C = ql(
    e
  );
  if (i === wn.TriangleWithRun) {
    const B = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], H = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let re = null;
    M === ke.SpecialCauseImproving || M === ke.SpecialCauseDeteriorating ? re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (D === Ie.Higher ? B : H).map((ue) => ue.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 6,
        transform: D === Ie.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : M === ke.SpecialCauseNoJudgement && (re = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: D === Ie.Higher ? B.map((ue) => ue.join(",")).join(" ") : H.map((ue) => ue.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 6,
        transform: D === Ie.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const z = Math.max(0, Math.min(5, Math.floor(l || 0))), de = M === ke.CommonCause ? 160 : D === Ie.Higher ? 220 : 70, ge = 10, le = 26, ie = 150 - 2 * le, Z = M === ke.SpecialCauseImproving ? Ve("improvement", "#00B0F0") : M === ke.SpecialCauseDeteriorating ? Ve("concern", "#E46C0A") : _, te = Array.from({ length: 5 }).map((ue, se) => {
      const E = (M === ke.SpecialCauseImproving || M === ke.SpecialCauseDeteriorating) && se >= 5 - z ? Z : _;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: ie + se * le,
          cy: de,
          r: ge,
          fill: E,
          stroke: E,
          strokeWidth: 1
        },
        se
      );
    }), ce = Ja(
      T.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: m },
        { offset: "100%", opacity: k }
      ]
    ), V = M === ke.CommonCause || D === Ie.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": I,
        "aria-description": C,
        ...d,
        children: [
          ce,
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
          /* @__PURE__ */ r.jsxs("g", { transform: V, children: [
            re,
            y && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: D === Ie.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: y
              }
            ),
            te
          ] })
        ]
      }
    );
  }
  if (i === wn.Triangle) {
    const B = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], H = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], re = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let z = null;
    M === ke.SpecialCauseImproving || M === ke.SpecialCauseDeteriorating ? z = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (D === Ie.Higher ? B : H).map((ge) => ge.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 8,
        transform: D === Ie.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : M === ke.SpecialCauseNoJudgement ? z = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: D === Ie.Higher ? B.map((ge) => ge.join(",")).join(" ") : H.map((ge) => ge.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 8,
        transform: D === Ie.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : M === ke.CommonCause && (z = /* @__PURE__ */ r.jsx(
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
    const de = Ja(
      T.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: m },
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
        "aria-label": I,
        "aria-description": C,
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
          z,
          y && (M === ke.SpecialCauseImproving || M === ke.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: D === Ie.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: y
            }
          )
        ]
      }
    );
  }
  const P = Ja(
    T.hex,
    f,
    h,
    o,
    s,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: v },
      { offset: "100%", opacity: x }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": I,
      "aria-description": C,
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
        y && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: T.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: D === Ie.Lower ? "340" : "155", children: y })
          }
        ),
        S ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: T.hex,
            ...D === Ie.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          w.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: _,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${w.map((ee) => `${ee.cx} ${ee.cy}`).join(" L ")}`
            }
          ),
          w.map((ee, Y) => {
            const B = Y >= w.length - 2 && $ ? F : _, H = B;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: H,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: B,
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
io.displayName = "SPCVariationIcon";
const Um = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function Wm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function zm(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
function Vm(e) {
  switch (e) {
    case ke.SpecialCauseImproving:
      return Ve("improvement", "#00B0F0");
    case ke.SpecialCauseDeteriorating:
      return Ve("concern", "#E46C0A");
    case ke.SpecialCauseNoJudgement:
      return Ve("no-judgement", "#490092");
    case ke.CommonCause:
      return Ve("common-cause", "#A6A6A6");
    default:
      return Ve("common-cause", "#A6A6A6");
  }
}
const Xl = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: o = !0,
  showLimitBand: s = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: c = !0,
  variationState: u,
  autoClassify: d = !1,
  metricImprovement: f,
  gradientWash: h = !1,
  size: g = "sm",
  ariaLabel: v,
  className: x,
  onPointClick: p,
  onClassification: m,
  maxPoints: k,
  thinningStrategy: M = "stride",
  colorPointsBySignal: D = !0,
  centerLine: b,
  controlLimits: T,
  sigmaBands: j,
  pointSignals: N,
  pointNeutralSpecialCause: y
}) => {
  const $ = f, S = Me(
    () => Wm(e, t),
    [e, t]
  ), _ = Me(() => zm(S), [S]), F = Um[g], w = Math.max(S.length * 6, 60), I = F.height, C = 4, P = 2, ee = Me(() => (e?.length ?? 0) - (S?.length ?? 0), [e?.length, S?.length]), R = S.filter((A) => A.value != null).map((A) => A.value), B = b ?? _.mean, H = Me(() => {
    if (B == null) return null;
    const A = [];
    if (j?.upperOne != null && A.push(Math.abs(j.upperOne - B)), j?.lowerOne != null && A.push(Math.abs(B - j.lowerOne)), A.length) return A.reduce((J, W) => J + W, 0) / A.length;
    const O = [];
    return T?.upper != null && O.push(Math.abs(T.upper - B) / 3), T?.lower != null && O.push(Math.abs(B - T.lower) / 3), O.length ? O.reduce((J, W) => J + W, 0) / O.length : null;
  }, [j?.upperOne, j?.lowerOne, T?.upper, T?.lower, B]), re = Me(() => {
    if (H != null || !R.length || B == null || R.length < 2) return null;
    const A = [];
    for (let J = 1; J < R.length; J++) {
      const W = R[J - 1], L = R[J];
      W != null && L != null && A.push(Math.abs(L - W));
    }
    return A.length ? A.reduce((J, W) => J + W, 0) / A.length / 1.128 : null;
  }, [H, R.join(","), B]), z = H ?? re, de = Me(() => {
    if (!o) return null;
    if (T) return T;
    if (B == null || z == null) return null;
    const A = 3 * z;
    return { lower: B - A, upper: B + A };
  }, [o, B, z, T?.lower, T?.upper]), ge = Me(() => {
    if (u)
      return {
        state: u,
        firedRules: [],
        mean: _.mean,
        stdDev: z
      };
    if (!d || !z || z === 0 || B == null || _.latestValue == null)
      return {
        state: ke.CommonCause,
        firedRules: [],
        mean: _.mean,
        stdDev: z
      };
    const A = [], O = _.latestValue, J = T?.upper ?? (z != null && B != null ? B + 3 * z : null), W = T?.lower ?? (z != null && B != null ? B - 3 * z : null);
    J != null && W != null && (O > J || O < W) && A.push("point-beyond-3sigma");
    const L = R.slice(-8);
    if (L.length === 8) {
      const X = L.every((me) => me > B), ae = L.every((me) => me < B);
      (X || ae) && A.push("eight-point-run");
    }
    const G = R.slice(-5);
    if (G.length === 5) {
      const X = G.every((we, Ce, pe) => Ce === 0 || we >= pe[Ce - 1]), ae = G.every((we, Ce, pe) => Ce === 0 || we <= pe[Ce - 1]), me = j?.upperOne ?? (z != null && B != null ? B + z : null), be = j?.lowerOne ?? (z != null && B != null ? B - z : null);
      X && me != null && G[G.length - 1] > me && A.push("five-point-trend"), ae && be != null && G[G.length - 1] < be && A.push("five-point-trend");
    }
    const K = R.slice(-3);
    if (K.length === 3 && (z != null || j)) {
      const X = j?.upperTwo ?? (B != null && z != null ? B + 2 * z : null), ae = j?.lowerTwo ?? (B != null && z != null ? B - 2 * z : null);
      if (X != null && ae != null) {
        const me = K.filter((we) => we > X).length, be = K.filter((we) => we < ae).length;
        me >= 2 && A.push("two-of-three-near-limit"), be >= 2 && A.push("two-of-three-near-limit");
      }
    }
    let Q = ke.CommonCause;
    if (A.includes("point-beyond-3sigma") ? Q = O > B ? ke.SpecialCauseImproving : ke.SpecialCauseDeteriorating : (A.includes("eight-point-run") || A.includes("five-point-trend") || A.includes("two-of-three-near-limit")) && (Q = R[R.length - 1] > B ? ke.SpecialCauseImproving : ke.SpecialCauseDeteriorating), d && !u && A.length === 1 && A[0] === "point-beyond-3sigma") {
      const X = R.slice(-9, -1);
      if (X.length >= 5) {
        const ae = X.filter((be) => be > B).length, me = X.filter((be) => be < B).length;
        ae > 0 && me > 0 && (Q = ke.SpecialCauseNoJudgement);
      }
    }
    return {
      state: Q,
      firedRules: A,
      mean: B,
      stdDev: z,
      side: _.latestValue != null && B != null ? _.latestValue > B ? "above" : "below" : void 0
    };
  }, [
    u,
    d,
    z,
    B,
    _.latestValue,
    R.join(",")
  ]);
  Ct.useEffect(() => {
    d && !u && m && m(ge);
  }, [ge, d, u, m]);
  const le = ge.state, ie = Vm(le), Z = (A) => {
    const O = S.filter((G) => G.value != null);
    if (!O.length) return I / 2;
    const J = O.map((G) => G.value);
    de && (de.lower != null && J.push(de.lower), de.upper != null && J.push(de.upper));
    const W = Math.min(...J), L = Math.max(...J);
    return W === L ? I / 2 : I - (A - W) / (L - W) * (I - P * 2) - P;
  }, te = Me(() => {
    if (!k || S.length <= k)
      return S.map((K, Q) => Q);
    if (M === "stride") {
      const K = Math.max(2, k), Q = (S.length - 1) / (K - 1), X = /* @__PURE__ */ new Set();
      for (let ae = 0; ae < K; ae++) X.add(Math.round(ae * Q));
      return X.add(S.length - 1), Array.from(X).sort((ae, me) => ae - me);
    }
    const A = S.map((K, Q) => ({ i: Q, v: K.value }));
    function O(K, Q, X) {
      const ae = K.i, me = K.v ?? 0, be = Q.i, we = Q.v ?? 0, Ce = X.i, pe = X.v ?? 0, De = Math.abs((pe - we) * ae - (Ce - be) * me + Ce * we - pe * be), Ee = Math.hypot(pe - we, Ce - be);
      return Ee === 0 ? 0 : De / Ee;
    }
    function J(K, Q) {
      if (K.length <= 2) return K;
      let X = -1, ae = -1;
      for (let me = 1; me < K.length - 1; me++) {
        const be = O(K[me], K[0], K[K.length - 1]);
        be > X && (X = be, ae = me);
      }
      if (X > Q) {
        const me = J(K.slice(0, ae + 1), Q), be = J(K.slice(ae), Q);
        return [...me.slice(0, -1), ...be];
      }
      return [K[0], K[K.length - 1]];
    }
    let W = 0.1, L = A;
    for (let K = 0; K < 8 && (L = J(A, W), !(L.length <= k)); K++)
      W *= 1.6;
    const G = new Set(L.map((K) => K.i));
    return G.add(0), G.add(S.length - 1), Array.from(G).sort((K, Q) => K - Q);
  }, [S, k, M]), ce = Me(
    () => te.map((A) => S[A]),
    [te, S]
  ), V = Me(() => {
    let A = "";
    return ce.forEach((O, J) => {
      if (O.value == null) return;
      const W = Z(O.value), L = J / (ce.length - 1 || 1) * (w - C * 2) + C;
      A += A ? ` L ${L} ${W}` : `M ${L} ${W}`;
    }), A;
  }, [ce, w]), ue = _.latestIndex ?? -1, se = de, he = Na(), E = Me(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [S.length, h]
  ), U = S.length >= (n || 0), oe = v || "SPC sparkline", fe = (() => {
    if (!le) return;
    const A = $ === Be.Up ? ot.HigherIsBetter : $ === Be.Down ? ot.LowerIsBetter : ot.ContextDependent, O = {
      variationIcon: le === ke.SpecialCauseImproving ? "improvement" : le === ke.SpecialCauseDeteriorating ? "concern" : le === ke.SpecialCauseNoJudgement ? "none" : "neither",
      trend: $ === Be.Up ? Ie.Higher : Ie.Lower,
      polarity: A
    };
    try {
      return ql(O);
    } catch {
      return;
    }
  })(), ne = Me(() => {
    if (!U) return 10;
    const A = [...S].reverse().filter((J) => J.value != null).slice(0, 6).map((J) => Z(J.value));
    return A.length && A.reduce((J, W) => J + W, 0) / A.length < I / 2 ? I : 10;
  }, [S, U, I]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": oe,
      "aria-description": fe,
      width: w,
      height: I,
      className: x,
      viewBox: `0 0 ${w} ${I}`,
      children: [
        h && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: E, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: ie,
                stopOpacity: Number(he.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: ie,
                stopOpacity: Number(he.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: ie,
                stopOpacity: Number(he.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: w,
              height: I,
              fill: `url(#${E})`
            }
          )
        ] }),
        se && se.lower != null && se.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                Z(se.upper),
                Z(se.lower)
              ),
              width: w,
              height: Math.abs(
                Z(se.upper) - Z(se.lower)
              ),
              fill: ie,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: w,
              y1: Z(se.lower),
              y2: Z(se.lower),
              stroke: ie,
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
              y1: Z(se.upper),
              y2: Z(se.upper),
              stroke: ie,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          j && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            j.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(j.lowerTwo),
                y2: Z(j.lowerTwo),
                stroke: ie,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            j.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(j.lowerOne),
                y2: Z(j.lowerOne),
                stroke: ie,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            j.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(j.upperOne),
                y2: Z(j.upperOne),
                stroke: ie,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            j.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(j.upperTwo),
                y2: Z(j.upperTwo),
                stroke: ie,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && _.mean != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: w,
            y1: Z(_.mean),
            y2: Z(_.mean),
            stroke: Ve("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: V,
            fill: "none",
            stroke: Ve("common-cause", "#A6A6A6"),
            strokeWidth: F.stroke,
            strokeLinecap: "round"
          }
        ),
        te.map((A, O) => {
          const J = S[A];
          if (!J || J.value == null) return null;
          const W = Z(J.value), L = O / (ce.length - 1 || 1) * (w - C * 2) + C, K = (A === ue && l ? F.pointR + 1 : F.pointR) - 0.5;
          let Q = Ve("common-cause", "#A6A6A6");
          if (D) {
            const X = N?.[ee + A];
            if (X === "improvement")
              Q = Ve("improvement", "#00B0F0");
            else if (X === "concern")
              Q = Ve("concern", "#E46C0A");
            else if (y?.[ee + A])
              Q = Ve("no-judgement", "#490092");
            else if (B != null) {
              const me = J.value, be = T?.upper ?? (z != null ? B + 3 * z : null), we = T?.lower ?? (z != null ? B - 3 * z : null);
              be != null && me > be ? Q = Ve("improvement", "#00B0F0") : we != null && me < we ? Q = Ve("concern", "#E46C0A") : Q = Ve("common-cause", "#A6A6A6");
            } else
              Q = Ve("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: L,
              cy: W,
              r: K,
              fill: Q,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(A, J) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": A,
              "data-signal-colour": D ? Q : void 0
            },
            A
          );
        }),
        c && U && le && le !== ke.CommonCause && $ && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: w - 4,
            y: ne,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: ie,
            "data-glyph-pos": ne < I / 2 ? "top" : "bottom",
            children: $ === Be.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Xl.displayName = "SPCSpark";
const Se = (e) => typeof e == "number" && Number.isFinite(e), Gm = (e) => e.reduce((t, n) => t + n, 0), Ot = (e) => e.length ? Gm(e) / e.length : NaN;
function Kl(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && Se(s)) {
      if (a !== null) {
        const i = e[a];
        n[o] = Se(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return n;
}
function Zl(e, t) {
  const n = e.filter((s) => Se(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Ot(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = Ot(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function Ym(e, t) {
  if (!Se(e) || !Se(t))
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
const qm = 0.2777, Xm = 3.6, Km = (e) => Se(e) && e >= 0 ? Math.pow(e, qm) : null, mn = (e) => Se(e) && e >= 0 ? Math.pow(e, Xm) : null;
function Zm(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const Mn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Jm(e) {
  if (!Se(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), n = (d) => Zm(d, t) - 1, a = n(0.5), o = Math.max(0, n(Mn.three.low)), s = n(Mn.three.high), i = Math.max(0, n(Mn.one.low)), l = n(Mn.one.high), c = Math.max(0, n(Mn.two.low)), u = n(Mn.two.high);
  return { cl: a, lcl: o, ucl: s, oneLow: i, oneHigh: l, twoLow: c, twoHigh: u };
}
function Qm(e, t, n) {
  const a = e.map((N) => Se(N) ? Km(N) : null), o = Kl(a, t), { mrMean: s } = Zl(o, !!n), i = a.filter((N, y) => !t[y] && Se(N)), l = i.length ? Ot(i) : NaN;
  if (!Se(l) || !Se(s))
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
  const c = 2.66, u = 2 / 3 * c, d = 1 / 3 * c, f = l + c * s, h = l - c * s, g = l + u * s, v = l - u * s, x = l + d * s, p = l - d * s, m = mn(l), k = mn(f), M = h <= 0 ? null : mn(h), D = mn(x), b = p <= 0 ? null : mn(p), T = mn(g), j = v <= 0 ? null : mn(v);
  return {
    center: m ?? null,
    upperProcessLimit: k ?? null,
    lowerProcessLimit: M ?? null,
    upperTwoSigma: T ?? null,
    lowerTwoSigma: j ?? null,
    upperOneSigma: D ?? null,
    lowerOneSigma: b ?? null,
    mr: o,
    mrMean: s,
    mrUcl: Se(s) ? 3.267 * s : null
  };
}
function eg(e) {
  const {
    metricImprovement: t,
    capabilityMode: n,
    value: a,
    mean: o,
    upperProcessLimit: s,
    lowerProcessLimit: i,
    target: l
  } = e, c = (u) => typeof u == "number" && Number.isFinite(u);
  return !c(a) || o === null || !c(l) ? rt.None : n && c(s) && c(i) ? t === Be.Up ? c(i) && i > l ? rt.Pass : c(s) && s < l ? rt.Fail : rt.None : t === Be.Down ? c(s) && s < l ? rt.Pass : c(i) && i > l ? rt.Fail : rt.None : rt.None : t === Be.Down ? a <= l ? rt.Pass : rt.Fail : t === Be.Up ? a >= l ? rt.Pass : rt.Fail : rt.None;
}
function tg(e, t) {
  const {
    W: n,
    minGap: a,
    minDeltaSigma: o,
    scoreThreshold: s,
    isShiftUpAt: i,
    isShiftDownAt: l,
    isTrendUpAt: c,
    isTrendDownAt: u,
    isSingleUpAt: d,
    isSingleDownAt: f
  } = t, h = [];
  let g = 0;
  for (let v = 0; v < e.length; v++) {
    const x = e[v];
    v > 0 && e[v - 1].partitionId !== x.partitionId && (g = v);
    const p = v > 0 && i(v - 1), m = v > 0 && l(v - 1), k = v > 0 && c(v - 1), M = v > 0 && u(v - 1), D = v > 0 && d(v - 1), b = v > 0 && f(v - 1), T = i(v), j = l(v), N = c(v), y = u(v), $ = d(v), S = f(v), _ = [];
    T && !p && _.push({ reason: It.Shift, index: v }), j && !m && _.push({ reason: It.Shift, index: v }), N && !k && _.push({ reason: It.Trend, index: v }), y && !M && _.push({ reason: It.Trend, index: v }), $ && !D && _.push({ reason: It.Point, index: v }), S && !b && _.push({ reason: It.Point, index: v });
    for (const F of _) {
      if (F.index - g < a) continue;
      const w = Math.max(0, F.index - n), I = F.index - 1;
      if (I - w + 1 < n) continue;
      const C = F.index, P = F.index + n - 1;
      if (P >= e.length) continue;
      const ee = e.slice(w, I + 1).map((V) => V.value).filter(
        (V) => typeof V == "number" && Number.isFinite(V)
      ), Y = e.slice(C, P + 1).map((V) => V.value).filter(
        (V) => typeof V == "number" && Number.isFinite(V)
      );
      if (ee.length < n || Y.length < n) continue;
      const R = e[F.index];
      let B = null;
      if (typeof R.upperProcessLimit == "number" && typeof R.mean == "number") {
        const V = R.upperProcessLimit - R.mean;
        V > 0 && (B = V / 3);
      }
      if (!B || B <= 0) continue;
      const H = Ot(ee), re = Ot(Y), z = re - H;
      if (Math.abs(z) < o * B) continue;
      const ge = e.slice(C, P + 1).filter(
        (V) => V.variationIcon === je.Concern
      ).length;
      if (ge > 1) continue;
      const le = (V) => {
        const ue = Ot(V);
        return V.length ? V.reduce((se, he) => se + (he - ue) * (he - ue), 0) / V.length : 0;
      }, ie = le(ee), Z = le(Y);
      let te = F.reason === It.Shift ? 90 : F.reason === It.Trend ? 70 : 60;
      if (Z < ie && (te += 10), te -= ge * 15, te < s) continue;
      const ce = h.find((V) => V.index === F.index);
      if (ce) {
        const V = (ue) => ue === It.Shift ? 3 : ue === It.Trend ? 2 : 1;
        (V(F.reason) > V(ce.reason) || te > ce.score) && (ce.reason = F.reason, ce.score = te, ce.deltaMean = z, ce.oldMean = H, ce.newMean = re, ce.window = [C, P]);
      } else
        h.push({
          index: F.index,
          reason: F.reason,
          score: te,
          deltaMean: z,
          oldMean: H,
          newMean: re,
          window: [C, P]
        });
    }
  }
  return h.sort((v, x) => v.index - x.index), h;
}
function Qa() {
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
var Rt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Rt || {}), Yr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Yr || {}), qr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(qr || {});
function ng(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function rg(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => Se(d.value));
  if (o.length < a * 2) return;
  const s = n === Be.Up || n === Be.Neither, i = n === Be.Down;
  function l(d, f) {
    const h = o.slice(d, f).map((g) => g.value);
    return h.length ? Ot(h) : NaN;
  }
  let c = null;
  if (o.length > 1) {
    const d = [];
    for (let h = 1; h < o.length; h++) d.push(Math.abs(o[h].value - o[h - 1].value));
    const f = Ot(d);
    Se(f) && f > 0 && (c = f * (2.66 / 3));
  }
  if (!c || c <= 0) return;
  const u = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= o.length - a; d++) {
    const f = d - a, h = l(f, d), g = l(d, d + a);
    if (!Se(h) || !Se(g)) continue;
    const x = (g - h) / c;
    if (!(s ? x >= u : i ? -x >= u : Math.abs(x) >= u)) continue;
    const m = o.slice(d, d + a).map((D) => D.value);
    if (!(s ? m.every((D) => D > h) : i ? m.every((D) => D < h) : m.every((D) => s ? D > h : D < h))) continue;
    const M = o[d].idx;
    e[M].baseline || (e[M].baseline = !0);
    return;
  }
}
function Jl(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, o = n.precedence ?? {}, s = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, c = n.capability ?? {}, u = n.grace ?? {}, d = n.baselineSuggest ?? {}, f = n.autoRecalc ?? {}, h = u.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, g = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Qa()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const v = globalThis;
  !Qa() && t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && u.emergingEnabled === void 0 && !v.__spc_warn_emergingDirectionGrace && (v.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Qa() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !v.__spc_warn_collapseClusterRules && (v.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const x = (k) => {
    const M = {};
    for (const D of Object.keys(k)) {
      const b = k[D];
      b !== void 0 && (M[D] = b);
    }
    return M;
  }, p = x({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: g ?? t.collapseWeakerClusterRules,
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
    assuranceCapabilityMode: c.assuranceCapabilityMode ?? t.assuranceCapabilityMode,
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
  }), m = { ...p, ...x(t) };
  if (h !== void 0 && (m.emergingGraceEnabled = h, m.grace = { ...m.grace, emergingEnabled: h }), p.collapseWeakerClusterRules !== void 0) {
    const k = p.collapseWeakerClusterRules;
    m.collapseWeakerClusterRules = k, m.rules = { ...m.rules, collapseWeakerClusterRules: k };
  }
  return x(m);
}
function Ql(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: o = {}
  } = e, s = Jl(o), i = {
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
    precedenceStrategy: Tr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...s
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((p, m) => ({
    rowId: m + 1,
    x: p.x,
    value: Se(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: Se(p.target) ? p.target : null
  }));
  if (s?.autoRecalculateAfterShift)
    try {
      rg(l, s, n);
    } catch {
    }
  const c = ng(l), u = [], d = [], h = l.filter(
    (p) => !p.ghost && Se(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let g = 0;
  const v = {};
  for (const p of c) {
    g++;
    const m = p.map((_) => _.value), k = p.map((_) => _.ghost);
    let M = new Array(m.length).fill(null), D = NaN, b = NaN, T = NaN, j = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      M = Kl(m, k);
      const _ = m.filter(
        (w, I) => !k[I] && Se(w)
      );
      D = _.length ? Ot(_) : NaN;
      const F = Zl(
        M,
        !!i.excludeMovingRangeOutliers
      );
      b = F.mrMean, T = F.mrUcl, j = Ym(D, b);
    } else if (t === "T") {
      const _ = Qm(
        m,
        k,
        !!i.excludeMovingRangeOutliers
      );
      M = _.mr, b = _.mrMean ?? NaN, T = _.mrUcl ?? NaN, D = _.center ?? NaN, j = {
        upperProcessLimit: _.upperProcessLimit,
        lowerProcessLimit: _.lowerProcessLimit,
        upperTwoSigma: _.upperTwoSigma,
        lowerTwoSigma: _.lowerTwoSigma,
        upperOneSigma: _.upperOneSigma,
        lowerOneSigma: _.lowerOneSigma
      };
    } else if (t === "G") {
      const _ = m.filter(
        (I, C) => !k[C] && Se(I)
      ), F = _.length ? Ot(_) : NaN, w = Jm(F);
      D = w.cl ?? NaN, j = {
        upperProcessLimit: w.ucl,
        lowerProcessLimit: w.lcl,
        upperTwoSigma: w.twoHigh,
        lowerTwoSigma: w.twoLow,
        upperOneSigma: w.oneHigh,
        lowerOneSigma: w.oneLow
      }, M = new Array(m.length).fill(null), b = NaN, T = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const N = p.map((_, F) => {
      const w = !_.ghost && Se(_.value) ? m.slice(0, F + 1).filter((ee, Y) => !k[Y] && Se(ee)).length : 0, I = h, C = I ? j : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: _.rowId,
        x: _.x,
        value: Se(_.value) ? _.value : null,
        ghost: _.ghost,
        partitionId: g,
        pointRank: w,
        mean: I && Se(D) ? D : null,
        mr: Se(M[F]) ? M[F] : null,
        mrMean: I && Se(b) ? b : null,
        mrUcl: I && Se(T) ? T : null,
        upperProcessLimit: Se(C.upperProcessLimit) ? C.upperProcessLimit : null,
        lowerProcessLimit: Se(C.lowerProcessLimit) ? C.lowerProcessLimit : null,
        upperTwoSigma: Se(C.upperTwoSigma) ? C.upperTwoSigma : null,
        lowerTwoSigma: Se(C.lowerTwoSigma) ? C.lowerTwoSigma : null,
        upperOneSigma: Se(C.upperOneSigma) ? C.upperOneSigma : null,
        lowerOneSigma: Se(C.lowerOneSigma) ? C.lowerOneSigma : null,
        target: Se(_.target) ? _.target : null,
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
        variationIcon: je.Suppressed,
        assuranceIcon: rt.None,
        upperBaseline: I && Se(D) ? D : null,
        lowerBaseline: I && Se(D) ? D : null,
        movingRangeHighPointValue: I && Se(T) ? T : null,
        ghostValue: _.ghost && Se(_.value) ? _.value : null,
        ghostFlag: !!_.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    v[g] = N.filter(
      (_) => !_.ghost && Se(_.value)
    ).length;
    const y = i.specialCauseShiftPoints ?? 6, $ = i.specialCauseTrendPoints ?? 6, S = [];
    for (let _ = 0; _ < N.length; _++) {
      const F = N[_], w = F.value;
      if (!F.ghost && Se(w) && S.push(_), !(Se(F.mean) && Se(F.upperProcessLimit) && Se(F.lowerProcessLimit)) || F.ghost || !Se(w)) {
        u.push(F);
        continue;
      }
      F.specialCauseSinglePointUp = Se(F.upperProcessLimit) ? w > F.upperProcessLimit : !1, F.specialCauseSinglePointDown = Se(F.lowerProcessLimit) ? w < F.lowerProcessLimit : !1, u.push(F);
    }
    if (S.length) {
      const _ = (I) => N[I];
      let F = [], w = [];
      for (const I of S) {
        const C = _(I);
        if (!Se(C.mean) || !Se(C.value)) {
          F = [], w = [];
          continue;
        }
        if (C.value > C.mean ? (F.push(I), w = []) : C.value < C.mean ? (w.push(I), F = []) : (F = [], w = []), F.length >= y)
          for (const P of F) {
            const ee = _(P);
            ee.specialCauseShiftUp = !0;
          }
        if (w.length >= y)
          for (const P of w) {
            const ee = _(P);
            ee.specialCauseShiftDown = !0;
          }
      }
      for (let I = 0; I <= S.length - 3; I++) {
        const P = S.slice(I, I + 3).map(_);
        if (!P.every((le) => Se(le.mean) && Se(le.value))) continue;
        const ee = P[0].mean, Y = P.every((le) => le.value > ee), R = P.every((le) => le.value < ee);
        if (!Y && !R) continue;
        const B = P[0].upperTwoSigma ?? 1 / 0, H = P[0].lowerTwoSigma ?? -1 / 0, re = P[0].upperProcessLimit ?? 1 / 0, z = P[0].lowerProcessLimit ?? -1 / 0, de = P.filter((le) => le.value > B && le.value <= re), ge = P.filter((le) => le.value < H && le.value >= z);
        if (Y && de.length >= 2)
          for (const le of de)
            le.specialCauseTwoOfThreeUp = !0;
        if (R && ge.length >= 2)
          for (const le of ge)
            le.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let I = 0; I <= S.length - 5; I++) {
          const P = S.slice(I, I + 5).map(_);
          if (!P.every((re) => Se(re.mean) && Se(re.value))) continue;
          const ee = P[0].mean;
          if (!P.every((re) => re.value > ee) && !P.every((re) => re.value < ee)) continue;
          const Y = P[0].upperOneSigma ?? 1 / 0, R = P[0].lowerOneSigma ?? -1 / 0, B = P.filter((re) => re.value > Y), H = P.filter((re) => re.value < R);
          if (P.every((re) => re.value > ee) && B.length >= 4)
            for (const re of B)
              re.specialCauseFourOfFiveUp = !0;
          if (P.every((re) => re.value < ee) && H.length >= 4)
            for (const re of H)
              re.specialCauseFourOfFiveDown = !0;
        }
      for (let I = 0; I <= S.length - $; I++) {
        const C = S.slice(I, I + $), P = C.map(_);
        if (!P.every((R) => Se(R.value))) continue;
        let ee = !0, Y = !0;
        for (let R = 1; R < P.length && (P[R].value > P[R - 1].value || (ee = !1), P[R].value < P[R - 1].value || (Y = !1), !(!ee && !Y)); R++)
          ;
        if (ee) for (const R of C) {
          const B = _(R);
          B.specialCauseTrendUp = !0;
        }
        if (Y) for (const R of C) {
          const B = _(R);
          B.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let I = [];
        for (const C of S) {
          const P = _(C);
          if (!Se(P.value) || !Se(P.mean) || !Se(P.upperOneSigma) || !Se(P.lowerOneSigma)) {
            I = [];
            continue;
          }
          if (!(P.value < P.upperOneSigma && P.value > P.lowerOneSigma)) {
            I = [];
            continue;
          }
          if (I.push(C), I.length >= 15) {
            const Y = I.map(_), R = Y.some((H) => H.value > H.mean), B = Y.some((H) => H.value < H.mean);
            if (R && B)
              for (const H of I) _(H).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const _ = i.maximumPointsPartition;
      let F = 0;
      for (const w of u.filter((I) => I.partitionId === g))
        !w.ghost && Se(w.value) && F++, F > _ && (w.mean = w.upperProcessLimit = w.lowerProcessLimit = null, w.upperTwoSigma = w.lowerTwoSigma = w.upperOneSigma = w.lowerOneSigma = null);
    }
  }
  for (const p of u) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const m = [];
    p.specialCauseShiftUp && m.push(gt.ShiftHigh), p.specialCauseShiftDown && m.push(gt.ShiftLow), p.specialCauseTrendUp && m.push(gt.TrendIncreasing), p.specialCauseTrendDown && m.push(gt.TrendDecreasing), p.specialCauseSinglePointUp && m.push(gt.SinglePointAbove), p.specialCauseSinglePointDown && m.push(gt.SinglePointBelow), p.specialCauseTwoOfThreeUp && m.push(gt.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && m.push(gt.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && m.push(gt.FourOfFiveAbove), p.specialCauseFourOfFiveDown && m.push(gt.FourOfFiveBelow), p.specialCauseFifteenInnerThird && m.push(gt.FifteenInnerThird), m.length && (p.ruleTags = m);
  }
  for (let p = 0; p < u.length; p++) {
    const m = u[p];
    if (Object.prototype.hasOwnProperty.call(m, rr.ImprovementValueBeforePruning) || Object.defineProperty(m, rr.ImprovementValueBeforePruning, {
      get() {
        return m.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(m, rr.ConcernValueBeforePruning) || Object.defineProperty(m, rr.ConcernValueBeforePruning, {
      get() {
        return m.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), m.ghost || !Se(m.value) || m.mean === null) {
      m.variationIcon = je.Suppressed;
      continue;
    }
    const k = m.value > m.mean, M = m.value < m.mean;
    i.rules?.collapseWeakerClusterRules && (m.specialCauseTwoOfThreeUp && m.specialCauseFourOfFiveUp && (m.specialCauseTwoOfThreeUp = !1), m.specialCauseTwoOfThreeDown && m.specialCauseFourOfFiveDown && (m.specialCauseTwoOfThreeDown = !1));
    const D = m.specialCauseTrendUp && k, b = m.specialCauseTrendDown && M, T = m.specialCauseSinglePointUp || m.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && m.specialCauseFourOfFiveUp || m.specialCauseShiftUp || D, j = m.specialCauseSinglePointDown || m.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && m.specialCauseFourOfFiveDown || m.specialCauseShiftDown || b;
    let N = !1;
    if (i.precedenceStrategy === Tr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const $ = i.specialCauseTrendPoints || 6;
      if ($ > 1 && !(m.specialCauseTrendUp || m.specialCauseTrendDown)) {
        const S = $ - 1, _ = [];
        for (let F = p; F >= 0 && _.length < S; F--) {
          const w = u[F];
          !w.ghost && Se(w.value) && w.mean !== null && _.unshift(w);
        }
        if (_.length === S) {
          let F = !0;
          for (let w = 1; w < _.length && F; w++)
            n === Be.Up ? _[w].value > _[w - 1].value || (F = !1) : n === Be.Down && _[w].value < _[w - 1].value || (F = !1);
          N = F;
        }
      }
    }
    if (i.precedenceStrategy === Tr.DirectionalFirst) {
      const S = n === Be.Up ? T : n === Be.Down ? j : !1, _ = n === Be.Up ? j : n === Be.Down ? T : !1;
      S && !_ ? m.variationIcon = je.Improvement : _ && !S ? m.variationIcon = N ? je.Neither : je.Concern : S && _ ? m.variationIcon = N || m.specialCauseTrendUp || m.specialCauseTrendDown ? je.Improvement : je.Neither : m.variationIcon = je.Neither;
    } else
      n === Be.Up ? m.variationIcon = T ? je.Improvement : j ? je.Concern : je.Neither : n === Be.Down ? m.variationIcon = j ? je.Improvement : T ? je.Concern : je.Neither : m.variationIcon = je.Neither;
    const y = T || j;
    if (m.specialCauseImprovementValue = y && m.variationIcon === je.Improvement ? m.value : null, m.specialCauseConcernValue = y && m.variationIcon === je.Concern ? m.value : null, m.specialCauseNeitherValue = y && m.variationIcon === je.Neither ? m.value : null, i.conflictPrecedenceMode === Rl.SqlRankingV26a && m.specialCauseImprovementValue !== null && m.specialCauseConcernValue !== null) {
      const $ = [];
      m.specialCauseSinglePointUp && $.push({ id: zt.SinglePoint, rank: 1, side: bt.Up }), m.specialCauseSinglePointDown && $.push({ id: zt.SinglePoint, rank: 1, side: bt.Down }), m.specialCauseTwoOfThreeUp && $.push({ id: zt.TwoSigma, rank: 2, side: bt.Up }), m.specialCauseTwoOfThreeDown && $.push({ id: zt.TwoSigma, rank: 2, side: bt.Down }), m.specialCauseShiftUp && $.push({ id: zt.Shift, rank: 3, side: bt.Up }), m.specialCauseShiftDown && $.push({ id: zt.Shift, rank: 3, side: bt.Down }), m.specialCauseTrendUp && $.push({ id: zt.Trend, rank: 4, side: bt.Up }), m.specialCauseTrendDown && $.push({ id: zt.Trend, rank: 4, side: bt.Down });
      const S = $.filter((Y) => Y.side === bt.Up).reduce((Y, R) => Math.max(Y, R.rank), 0), _ = $.filter((Y) => Y.side === bt.Down).reduce((Y, R) => Math.max(Y, R.rank), 0);
      let F;
      S > _ ? F = Fn.Upwards : _ > S ? F = Fn.Downwards : F = Fn.Same;
      const w = m.specialCauseImprovementValue, I = m.specialCauseConcernValue;
      F === Fn.Upwards ? n === Be.Up ? m.specialCauseConcernValue = null : n === Be.Down && (m.specialCauseImprovementValue = null) : F === Fn.Downwards ? n === Be.Up ? m.specialCauseImprovementValue = null : n === Be.Down && (m.specialCauseConcernValue = null) : m.variationIcon === je.Improvement ? m.specialCauseConcernValue = null : m.variationIcon === je.Concern ? m.specialCauseImprovementValue = null : m.specialCauseConcernValue = null, m.specialCauseImprovementValue !== null && m.specialCauseConcernValue === null ? m.variationIcon = je.Improvement : m.specialCauseConcernValue !== null && m.specialCauseImprovementValue === null ? m.variationIcon = je.Concern : m.specialCauseImprovementValue === null && m.specialCauseConcernValue === null && (m.variationIcon = je.Neither);
      const C = m.specialCauseImprovementValue !== null ? bt.Up : m.specialCauseConcernValue !== null ? bt.Down : void 0, P = C === bt.Up ? S : C === bt.Down ? _ : Math.max(S, _), ee = $.find((Y) => Y.rank === P && (!C || Y.side === C));
      m.conflictPrimeDirection = F, m.conflictResolved = !0, m.conflictResolvedRank = P || void 0, ee && (m.conflictResolvedByRuleId = ee.id), m.pruningMode = Bl.Conflict, m.originalSpecialCauseImprovementValue = w, m.originalSpecialCauseConcernValue = I;
    }
    {
      const $ = l[m.rowId - 1], S = eg({
        metricImprovement: n,
        capabilityMode: i.assuranceCapabilityMode,
        value: m.value,
        mean: m.mean,
        upperProcessLimit: m.upperProcessLimit,
        lowerProcessLimit: m.lowerProcessLimit,
        target: Se($?.target) ? $.target : null
      });
      m.assuranceIcon = S;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !h) {
    const p = l.filter(
      (m) => !m.ghost && Se(m.value)
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
    for (const p of u)
      p.variationIcon === je.Improvement && (p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || p.specialCauseTrendUp) && (p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || p.specialCauseTrendDown) && d.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const p = i.maximumPoints;
    let m = 0;
    for (const k of u)
      !k.ghost && Se(k.value) && m++, m > p && (k.mean = k.upperProcessLimit = k.lowerProcessLimit = null, k.upperTwoSigma = k.lowerTwoSigma = k.upperOneSigma = k.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === vt.XmR || t === vt.G)) {
    const p = l.filter(
      (m) => !m.ghost && (m.value === null || m.value === void 0 || !Se(m.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === vt.T || t === vt.G) && l.some((m) => Se(m.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === vt.T || t === vt.G)) {
    const p = l.filter((m) => m.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(v).forEach(([p, m]) => {
    m < i.minimumPointsPartition && d.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${p} has only ${m} non-ghost point(s); below recommended ${i.minimumPointsPartition}.`,
      context: {
        partitionId: Number(p),
        count: m,
        minimum: i.minimumPointsPartition
      }
    });
  }), i.baselineSpecialCauseWarning) {
    const p = [];
    u.forEach((m) => {
      l[m.rowId - 1].baseline && (m.specialCauseSinglePointUp || m.specialCauseSinglePointDown || m.specialCauseTwoOfThreeUp || m.specialCauseTwoOfThreeDown || m.specialCauseFourOfFiveUp || m.specialCauseFourOfFiveDown || m.specialCauseShiftUp || m.specialCauseShiftDown || m.specialCauseTrendUp || m.specialCauseTrendDown) && p.push(m.rowId);
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
  let x;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, m = i.baselineSuggestMinGap, k = i.baselineSuggestMinDeltaSigma, M = i.baselineSuggestScoreThreshold;
    x = tg(
      u.map((b) => ({
        value: b.value,
        partitionId: b.partitionId,
        variationIcon: b.variationIcon,
        mean: b.mean,
        upperProcessLimit: b.upperProcessLimit
      })),
      {
        W: p,
        minGap: m,
        minDeltaSigma: k,
        scoreThreshold: M,
        isShiftUpAt: (b) => !!u[b].specialCauseShiftUp,
        isShiftDownAt: (b) => !!u[b].specialCauseShiftDown,
        isTrendUpAt: (b) => !!u[b].specialCauseTrendUp,
        isTrendDownAt: (b) => !!u[b].specialCauseTrendDown,
        isSingleUpAt: (b) => !!u[b].specialCauseSinglePointUp,
        isSingleDownAt: (b) => !!u[b].specialCauseSinglePointDown
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
  return { rows: u, warnings: d, ...x ? { suggestedBaselines: x } : {} };
}
function _i(e, t) {
  return e === "improvement" ? ke.SpecialCauseImproving : e === "concern" ? ke.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? ke.SpecialCauseNoJudgement : e === "neither" ? ke.CommonCause : null;
}
function ag(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function sg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function og(e) {
  const {
    values: t,
    x: n,
    chartType: a = vt.XmR,
    metricImprovement: o = Be.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1,
    autoClassify: u = !0
  } = e, d = q.useMemo(() => {
    const b = [];
    for (let T = 0; T < t.length; T++)
      b.push({ x: n?.[T], value: t[T] });
    return b;
  }, [t, n]), f = q.useMemo(() => {
    try {
      const b = d.map((T, j) => ({ x: T.x ?? j, value: T.value }));
      return Ql({ chartType: a, metricImprovement: o, data: b, settings: {} });
    } catch {
      return null;
    }
  }, [d, a, o]), h = q.useMemo(() => {
    const b = f?.rows;
    if (!b || b.length === 0) return null;
    for (let T = b.length - 1; T >= 0; T--) {
      const j = b[T];
      if (j && j.value != null && !j.ghost) return j;
    }
    return b[b.length - 1] ?? null;
  }, [f]), g = q.useMemo(() => {
    const b = f?.rowsRepresentative ?? f?.rows;
    if (!b || !Array.isArray(b) || b.length === 0) return null;
    const T = b[b.length - 1];
    return _i(
      T?.variationIcon,
      (T?.specialCauseNeitherValue ?? null) != null
    );
  }, [f]), v = q.useMemo(() => h?.mean ?? null, [h]), x = q.useMemo(() => {
    if (!h) return null;
    const b = h?.lowerProcessLimit ?? null, T = h?.upperProcessLimit ?? null;
    return b == null && T == null ? null : { lower: b, upper: T };
  }, [h]), p = q.useMemo(() => h ? {
    upperOne: h?.upperOneSigma ?? null,
    upperTwo: h?.upperTwoSigma ?? null,
    lowerOne: h?.lowerOneSigma ?? null,
    lowerTwo: h?.lowerTwoSigma ?? null
  } : null, [h]), m = q.useMemo(() => {
    const b = f?.rows;
    if (!(!b || b.length === 0))
      return b.map((T) => {
        const j = !!T?.specialCauseSinglePointUp || !!T?.specialCauseTwoOfThreeUp || !!T?.specialCauseFourOfFiveUp || !!T?.specialCauseShiftUp || !!T?.specialCauseTrendUp, N = !!T?.specialCauseSinglePointDown || !!T?.specialCauseTwoOfThreeDown || !!T?.specialCauseFourOfFiveDown || !!T?.specialCauseShiftDown || !!T?.specialCauseTrendDown;
        switch (o) {
          case Be.Up:
            return j ? "improvement" : N ? "concern" : "neither";
          case Be.Down:
            return N ? "improvement" : j ? "concern" : "neither";
          case Be.Neither:
          default:
            return "neither";
        }
      });
  }, [f, o]), k = q.useMemo(() => {
    const b = f?.rows;
    if (!(!b || b.length === 0))
      return b.map((T) => !!T?.specialCauseNeitherValue);
  }, [f]), M = q.useMemo(() => {
    let b = null;
    if (h && h.value != null && !h.ghost) {
      const F = h.variationIcon, w = (h?.specialCauseNeitherValue ?? null) != null;
      g === ke.SpecialCauseNoJudgement ? b = ag(F, w) ? ke.SpecialCauseNoJudgement : ke.CommonCause : b = _i(F, w) ?? ke.CommonCause;
    }
    const T = b ?? ke.CommonCause, j = Da[T].hex, [N, y, $] = sg(j), S = Na();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${N}, ${y}, ${$}, ${S.start}) 0%, rgba(${N}, ${y}, ${$}, ${S.mid}) 50%, rgba(${N}, ${y}, ${$}, ${S.end}) 100%)`,
      "--fdp-metric-card-accent": j
    };
  }, [h, g]);
  return { sparkProps: q.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: v,
    controlLimits: x,
    sigmaBands: p,
    pointSignals: m,
    pointNeutralSpecialCause: k,
    variationState: g ?? void 0,
    autoClassify: !!(u && !g),
    onClassification: () => {
    }
  }), [
    d,
    c,
    s,
    i,
    l,
    o,
    u,
    g,
    v,
    x?.lower,
    x?.upper,
    p?.upperOne,
    p?.upperTwo,
    p?.lowerOne,
    p?.lowerTwo,
    m?.length,
    k?.length
  ]), metricCardStyle: M, latestState: g };
}
function Si(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function ig(e, t, n) {
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
function lg(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++) a.push(n[c].getTime() - n[c - 1].getTime());
  const o = a.sort((c, u) => c - u), s = o[Math.floor(o.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function ki(e, t) {
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
function cg(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function ug(e, t, n = 1) {
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
function ec(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: o,
    providedUnit: s,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: c = !0,
    autoMetadata: u = !0,
    deltaConfig: d
  } = e, f = t.map((y) => typeof y == "number" ? y : y == null ? null : Number(y));
  let h = -1;
  for (let y = f.length - 1; y >= 0; y--)
    if (f[y] != null) {
      h = y;
      break;
    }
  let g = (n || []).map(Si);
  if (!g.some(Boolean)) {
    const y = Si(o);
    y && a ? g = ig(f.length, y, a) : g = new Array(f.length).fill(void 0);
  }
  const x = lg(g, a), p = cg(f, s, i, e.percentHeuristic), m = l && h >= 0 && f[h] != null ? f[h] : void 0, k = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function M() {
    if (h < 0) return -1;
    if (k.strategy === "previous" || k.strategy === "n-points") {
      let F = h - (k.strategy === "previous" ? 1 : Math.max(1, k.n || 1));
      if (!k.skipNulls) return F;
      for (let w = F; w >= 0; w--) if (f[w] != null) return w;
      return -1;
    }
    const y = g[h];
    if (!y) return -1;
    const $ = new Date(y);
    $.setFullYear($.getFullYear() - 1);
    let S = -1, _ = 1 / 0;
    for (let F = 0; F < g.length; F++) {
      const w = g[F];
      if (!w || f[F] == null) continue;
      const I = Math.abs(w.getTime() - $.getTime());
      I < _ && (_ = I, S = F);
    }
    return S;
  }
  const D = M(), b = D >= 0 ? f[D] : null;
  let T;
  if (c && m != null && b != null) {
    const y = m - b, $ = k.absolute !== !1, S = $ ? y : b === 0 ? 0 : y / Math.abs(b) * 100;
    T = {
      value: Number.isFinite(S) ? Number(S.toFixed(2)) : 0,
      isPercent: $ ? p === "%" : !0,
      period: `vs ${ug(x, a, k.strategy === "n-points" ? Math.max(1, k.n || 1) : 1)}`
    };
  }
  const j = h >= 0 ? g[h] : void 0, N = u && ki(j, x) ? `Latest: ${ki(j, x)}` : void 0;
  return { value: m, unit: p, delta: T, metadata: N, latestDate: j, frequency: x };
}
const ty = ({
  sparkData: e,
  direction: t = Be.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: o = !1,
  showInnerBands: s = !1,
  autoClassify: i = !0,
  maxPoints: l,
  autoValue: c = !0,
  autoDelta: u = !0,
  autoMetadata: d = !0,
  defaultUnit: f,
  intervalHint: h,
  startDate: g,
  deltaConfig: v,
  ...x
}) => {
  const p = og({
    values: e.map((j) => j.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n,
    autoClassify: i
  }), m = /* @__PURE__ */ r.jsx(Xl, { ...p.sparkProps, maxPoints: l }), k = q.useMemo(() => ec({
    values: e.map((j) => typeof j.value == "number" ? j.value : null),
    dates: e.map((j) => j.date),
    intervalHint: h,
    startDate: g,
    providedUnit: x.unit,
    defaultUnit: f,
    autoValue: c,
    autoDelta: u,
    autoMetadata: d,
    deltaConfig: v
  }), [e, h, g, x.unit, f, c, u, d, v]), M = c && k.value != null ? k.value : x.value, D = u && k.delta ? k.delta : x.delta, b = k.unit || x.unit, T = d && k.metadata ? k.metadata : x.metadata;
  return /* @__PURE__ */ r.jsx(
    wm,
    {
      ...x,
      value: M,
      unit: b,
      delta: D,
      metadata: T,
      visual: m,
      style: p.metricCardStyle
    }
  );
};
function dg({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [o, s] = q.useState(""), i = q.useRef("");
  return q.useEffect(() => {
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
      error: e.filter((f) => f.severity === Rt.Error).length,
      warning: e.filter((f) => f.severity === Rt.Warning).length,
      info: e.filter((f) => f.severity === Rt.Info).length
    }, u = [];
    c.error && u.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && u.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && u.push(`${c.info} info`);
    const d = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${u.join(", ")}).`;
    d !== i.current && (i.current = d, s(d));
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
        ln,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let c = "grey";
            return l.severity === Rt.Error ? c = "red" : l.severity === Rt.Warning ? c = "orange" : l.severity === Rt.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(Ge, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (u) => u.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ r.jsx(Ge, { color: "purple", text: n(l.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(Ge, { color: "grey", text: a(l.code) }),
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
const lo = ({
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
  const u = Dr(), d = Dr(), { start: f, mid: h, end: g } = Na(), v = o || Nm[e], x = (i || jm[e]).slice(0, 2), p = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": p,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          a && /* @__PURE__ */ r.jsxs("filter", { id: u, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ r.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ r.jsxs("linearGradient", { id: d, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: v, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: v, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(g) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${d})` : "#ffffff",
            ...a ? { filter: `url(#${u})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
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
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: x })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === vn.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === vn.Uncertain ? /* @__PURE__ */ r.jsx(
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
              stroke: v,
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
lo.displayName = "SPCAssuranceIcon";
const pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: vn,
  Direction: Ie,
  MetricPolarity: ot,
  SPCAssuranceIcon: lo,
  SPCVariationIcon: io,
  VariationJudgement: kt,
  VariationState: ke,
  getVariationColour: Ul,
  getVariationTrend: ro
}, Symbol.toStringTag, { value: "Module" }));
function hg(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: o, variant: s, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (l.filter((b) => !b.data.ghost && b.data.value != null).length < c) return null;
  let d = -1;
  for (let b = l.length - 1; b >= 0; b--) {
    const T = l[b];
    if (T && T.data.value != null && !T.data.ghost) {
      d = b;
      break;
    }
  }
  if (d === -1) return null;
  const f = l[d], h = f.classification?.variation, g = f.classification?.assurance, v = h === je.Neither && !!f.classification?.neutralSpecialCauseValue, x = g === rt.Pass ? vn.Pass : g === rt.Fail ? vn.Fail : vn.Uncertain;
  let p;
  if (h === je.Suppressed) {
    const b = !!f.rules.singlePoint.up, T = !!f.rules.singlePoint.down;
    o === Be.Up ? b ? p = Ie.Higher : T && (p = Ie.Lower) : o === Be.Down ? T ? p = Ie.Lower : b && (p = Ie.Higher) : p = Ie.Higher;
  } else if (h === je.Neither && v) {
    const b = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, T = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    b && !T ? p = Ie.Higher : T && !b ? p = Ie.Lower : p = Ie.Higher;
  }
  const m = 80, k = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, M = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let D = Ae.CommonCause;
  return h === je.Improvement ? D = Ae.ImprovementHigh : h === je.Concern ? D = Ae.ConcernHigh : h === je.Neither && (v ? p === Ie.Lower || M && !k ? D = Ae.NeitherLow : D = Ae.NeitherHigh : D = Ae.CommonCause), /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 12, marginRight: 16 }, children: [
    /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__embedded-icon", "data-variation": String(h), "data-trend": p ? String(p) : "none", style: { width: m, height: m }, children: /* @__PURE__ */ r.jsx(
      io,
      {
        dropShadow: !1,
        data: {
          variationIcon: D,
          improvementDirection: o,
          specialCauseNeutral: v,
          highSideSignal: k,
          lowSideSignal: M,
          ...p ? { trend: p } : {}
        },
        letterMode: o === Be.Neither ? "Direction" : "Polarity",
        size: m,
        variant: s,
        runLength: s === wn.TriangleWithRun ? i : void 0
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__embedded-assurance-icon", "data-assurance": String(g), style: { width: m, height: m }, children: /* @__PURE__ */ r.jsx(lo, { status: x, size: m, dropShadow: !1 }) })
  ] }, `embedded-icon-${d}`);
}
const tc = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = cn(), u = pn(), [d, f] = q.useState(null), [h, g] = q.useState(!1), v = q.useRef(null);
  q.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), v.current && (cancelAnimationFrame(v.current), v.current = null)), !c.focused && !h) {
        const ne = requestAnimationFrame(() => {
          f(null), v.current = null;
        });
        v.current = ne;
      }
      return () => {
        v.current && (cancelAnimationFrame(v.current), v.current = null);
      };
    }
  }, [c, c?.focused, h]);
  const x = c && (c.focused || (h ? d : null) || d), [p, m] = q.useState(!1);
  q.useEffect(() => {
    const ne = requestAnimationFrame(() => m(!0));
    return () => cancelAnimationFrame(ne);
  }, [x?.index]);
  const k = u?.innerWidth ?? 0, M = u?.innerHeight ?? 0, D = x ? Math.min(Math.max(x.clientX, 0), k) : 0, b = x ? Math.min(Math.max(x.clientY, 0), M) : 0, T = u?.ref?.current || void 0;
  if (!x)
    return null;
  const j = e?.[x.index], y = ja(
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
  ).map((ne) => ({ id: ne, label: Un[ne].tooltip })), $ = x.x instanceof Date ? x.x : new Date(x.x), S = s ? s($) : $.toDateString(), _ = o ? `${o}` : "", F = a || _ ? `${x.y}${_ ? "" + _ : " "}${a ? " " + a : ""}` : `${x.y}`, w = Ta(j?.classification?.variation), I = Hl(j?.classification?.assurance), C = km(
    t.mean ?? null,
    t.sigma,
    x.y
  ), P = n ? n(x.index, { x: x.x, y: x.y }) : void 0, ee = w || I || C, Y = j?.rules.trend.up || j?.rules.trend.down, R = j?.classification?.variation === je.Neither && Y, B = l && R ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, H = y.length > 0, re = j && "primeDirection" in j ? j.primeDirection : void 0, z = j && "primeRuleId" in j ? j.primeRuleId : void 0, de = i && j?.classification?.variation === je.Neither && H, ge = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", le = Ol(j?.classification?.variation), ie = 6.2, te = [
    P || "",
    `${S} • ${F}`
  ].filter(Boolean).reduce(
    (ne, A) => Math.max(ne, A.length * ie + 32),
    0
  ), ce = 200, V = 440, ue = Math.min(V, Math.max(ce, te));
  let se = D + 12, E = (u.margin?.top ?? 0) + b + 16;
  se + ue > k && (se = D - -60 - ue), se < 0 && (se = Math.max(0, k - ue));
  const U = x ? `spc-tooltip-${x.index}` : "spc-tooltip", oe = typeof x.index == "number" ? x.index : NaN, fe = T ? au(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: U,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: se,
          top: E,
          width: ue,
          maxWidth: V,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": se + ue + 12 > k ? "left" : "right",
        onPointerEnter: () => {
          g(!0), v.current && (cancelAnimationFrame(v.current), v.current = null);
        },
        onPointerLeave: () => {
          if (g(!1), !c?.focused) {
            const ne = requestAnimationFrame(() => {
              f(null), v.current = null;
            });
            v.current = ne;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              oe
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: S })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: F })
          ] }),
          ee && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: w?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : w?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : de ? /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : w ? /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          I && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const ne = I.toLowerCase(), O = !(ne.includes("not met") || ne.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ne);
              return /* @__PURE__ */ r.jsx(
                Ge,
                {
                  text: I,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${O ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${I}`
                }
              );
            })() })
          ] }),
          C && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: (() => {
                  const ne = C.toLowerCase();
                  return ne.startsWith("within 1") ? "≤1σ" : ne.startsWith("1–2") ? "1–2σ" : ne.startsWith("2–3") ? "2–3σ" : ne.startsWith(">3") ? ">3σ" : C;
                })(),
                color: C.includes(">3") ? "orange" : C.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${C}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          B && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: B })
          ] }),
          H && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: y.map(({ id: ne, label: A }) => {
                  const O = String(ne), W = O === gt.TrendIncreasing || O === gt.TrendDecreasing ? "fdp-spc-tag--trend" : de ? "fdp-spc-tag--no-judgement" : w ? w.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : w.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Ge,
                    {
                      text: A,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${W}`,
                      "data-rule-id": O
                    },
                    O
                  );
                })
              }
            ),
            re && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const ne = de ? "fdp-spc-tag--no-judgement" : w ? w.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : w.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", A = `${re}${z ? ` (${z})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Ge,
                  {
                    text: A,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${ne}`,
                    "aria-label": `Prime direction ${re}${z ? ` via ${z}` : ""}`
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
            cx: D,
            cy: b,
            r: 7,
            fill: "none",
            stroke: ge,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: D,
            cy: b,
            r: 5,
            fill: "#000",
            stroke: ge,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: D,
            cy: b,
            r: 2.5,
            fill: le,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        fe
      ]
    }
  );
}, mg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = cn(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = q.useMemo(
    () => l ? ja({
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
  ), u = q.useMemo(
    () => Array.from(
      new Set(c.map((x) => Un[x]?.narration).filter(Boolean))
    ),
    [c]
  ), d = l ? Ta(l.classification?.variation) : null, f = l ? Hl(l.classification?.assurance) : null, h = c.length > 0, g = l ? l.classification?.variation === je.Neither && h : !1, v = q.useRef(null);
  return q.useEffect(() => {
    if (!a || !s || l == null) return;
    const x = `${s.seriesId}:${s.index}`;
    if (v.current !== x) {
      v.current = x;
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
          (d || g || f) && /* @__PURE__ */ r.jsx(
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
                      Ge,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      Ge,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : g ? /* @__PURE__ */ r.jsx(
                      Ge,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ r.jsx(
                      Ge,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const x = f.toLowerCase(), m = !(x.includes("not met") || x.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(x);
                      return /* @__PURE__ */ r.jsx(
                        Ge,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${m ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                children: c.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : c.map((x) => {
                  const p = String(x), k = p === gt.TrendIncreasing || p === gt.TrendDecreasing ? "fdp-spc-tag--trend" : g ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", M = Un[x]?.tooltip || p;
                  return /* @__PURE__ */ r.jsx(
                    Ge,
                    {
                      text: M,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${k}`,
                      "data-rule-id": p,
                      title: Un[x]?.tooltip
                    },
                    p
                  );
                })
              }
            )
          ] }),
          u.length > 0 && /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Summary:" }),
                " ",
                u.join("; ")
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
      n[s] === lt.Common && n[s - 1] === n[s + 1] && n[s - 1] !== lt.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let i = o + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - o === 1 && s !== lt.Common && (n[o] = lt.Common), o = i;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const i = n[o], l = s - 1, c = l - o + 1;
        (i === lt.Common || c >= 2) && a.push({ start: o, end: l, category: i }), o = s;
      }
  }
  return a;
}
var ar = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(ar || {}), nc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(nc || {});
function xg(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: o,
    a11y: s,
    visualsEngine: i,
    meta: l,
    data: c,
    ariaLabel: u,
    height: d,
    showZones: f,
    showPoints: h,
    announceFocus: g,
    className: v,
    unit: x,
    targets: p,
    baselines: m,
    ghosts: k,
    settings: M,
    chartType: D,
    metricImprovement: b,
    gradientSequences: T,
    sequenceTransition: j,
    processLineWidth: N,
    showPartitionMarkers: y,
    showWarningsPanel: $,
    warningsFilter: S,
    enableNeutralNoJudgement: _,
    showTrendGatingExplanation: F,
    trendVisualMode: w,
    alwaysShowZeroY: I,
    alwaysShowHundredY: C,
    percentScale: P,
    showTrendStartMarkers: ee,
    showFirstFavourableCrossMarkers: Y,
    showTrendBridgeOverlay: R,
    showSignalsInspector: B,
    onSignalFocus: H,
    showIcons: re,
    showEmbeddedIcon: z,
    embeddedIconVariant: de,
    embeddedIconRunLength: ge,
    showFocusIndicator: le,
    visualsScenario: ie,
    visualsEngineSettings: Z,
    source: te,
    narrationContext: ce,
    highlightOutOfControl: V
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (p !== void 0 || m !== void 0 || k !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && M !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (d !== void 0 || v !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (u !== void 0 || g !== void 0 || ce !== void 0 || x !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (ie !== void 0 || Z !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && V !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && te !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const ue = n?.data ?? c ?? [], se = n?.targets ?? p, he = n?.baselines ?? m, E = n?.ghosts ?? k, U = a?.chartType ?? D ?? vt.XmR, oe = a?.metricImprovement ?? b ?? Be.Neither, fe = a?.settings ?? M, ne = a?.autoRecalc, A = t?.axes?.alwaysShowZeroY ?? I ?? !0, O = t?.axes?.alwaysShowHundredY ?? C ?? !1, J = t?.axes?.percentScale ?? P ?? !1, W = t?.visuals?.gradientSequences ?? T ?? !1, L = t?.visuals?.sequenceTransition ?? j ?? "slope", G = t?.visuals?.processLineWidth ?? N ?? 2, K = t?.visuals?.trend?.visualMode ?? w ?? "ungated", Q = t?.visuals?.trend?.showGatingExplanation ?? F ?? !0, X = t?.visuals?.rules?.enableNeutralNoJudgement ?? _ ?? !0, ae = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, me = t?.visuals?.showZones, be = t?.visuals?.showPoints, we = t?.visuals?.rules?.highlightOutOfControl, Ce = o?.height, pe = o?.className, De = s?.label, Ee = s?.unit, Ze = s?.narrationContext, ze = i?.scenario, it = i?.settings, Dt = l?.source, jt = t?.overlays?.partitionMarkers ?? y ?? !1, yt = t?.overlays?.trendStartMarkers ?? ee ?? !1, qe = t?.overlays?.firstFavourableCrossMarkers ?? Y ?? !1, tt = t?.overlays?.trendBridge ?? R ?? !1, Ut = t?.inspector?.show ?? B ?? !1, xr = t?.inspector?.onFocus ?? H, $e = t?.warnings?.show ?? $ ?? !1, Pe = t?.warnings?.filter ?? S, et = t?.icons?.show ?? re ?? !1, wt = t?.icons?.embedded?.show ?? z ?? !0, xt = t?.icons?.embedded?.variant ?? de ?? wn.Classic, Tt = t?.icons?.embedded?.runLength ?? ge, at = t?.overlays?.focusIndicator ?? le ?? !0;
  return {
    effData: ue,
    effTargets: se,
    effBaselines: he,
    effGhosts: E,
    effChartTypeCore: U,
    effMetricImprovementCore: oe,
    effEngineSettings: fe,
    effEngineAutoRecalc: ne,
    effHeight: Ce,
    effClassName: pe,
    effAriaLabel: De,
    effUnit: Ee,
    effNarrationContext: Ze,
    effShowZones: me,
    effShowPoints: be,
    effHighlightOutOfControl: we,
    effVisualsScenario: ze,
    effVisualsEngineSettings: it,
    effSource: Dt,
    effAlwaysShowZeroY: A,
    effAlwaysShowHundredY: O,
    effPercentScale: J,
    effGradientSequences: W,
    effSequenceTransition: L,
    effProcessLineWidth: G,
    effTrendVisualMode: K,
    effShowTrendGatingExplanation: Q,
    effEnableNeutralNoJudgement: X,
    effEnableRules: ae,
    effShowPartitionMarkers: jt,
    effShowTrendStartMarkers: yt,
    effShowFirstFavourableCrossMarkers: qe,
    effShowTrendBridgeOverlay: tt,
    effShowSignalsInspector: Ut,
    effOnSignalFocus: xr,
    effShowWarningsPanel: $e,
    effWarningsFilter: Pe,
    effShowIcons: et,
    effShowEmbeddedIcon: wt,
    effEmbeddedIconVariant: xt,
    effEmbeddedIconRunLength: Tt,
    effShowFocusIndicator: at
  };
}
let bg = 0;
const vg = ({
  series: e,
  showPoints: t,
  announceFocus: n,
  limits: a,
  showZones: o,
  highlightOutOfControl: s,
  engineRows: i,
  enableRules: l,
  narrationContext: c,
  gradientSequences: u,
  sequenceTransition: d,
  processLineWidth: f,
  effectiveUnit: h,
  partitionMarkers: g,
  ariaLabel: v,
  metricImprovement: x,
  enableNeutralNoJudgement: p = !0,
  showTrendGatingExplanation: m = !0,
  showTrendStartMarkers: k = !1,
  showFirstFavourableCrossMarkers: M = !1,
  showTrendBridgeOverlay: D = !1,
  showSignalsInspector: b = !1,
  onSignalFocus: T,
  visualCategories: j,
  uniformTarget: N,
  showFocusIndicator: y = !1,
  zeroBreakSlotGapPx: $
}) => {
  const S = Tn(), _ = pn();
  if (!S) return null;
  const { xScale: F, yScale: w } = S, I = q.useRef(
    "spc-seq-" + ++bg
  ), C = cn(), P = e[0]?.data || [], ee = q.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const E = /* @__PURE__ */ new Set();
    return P.forEach((U, oe) => {
      typeof a.ucl == "number" && U.y > a.ucl && E.add(oe), typeof a.lcl == "number" && U.y < a.lcl && E.add(oe);
    }), E;
  }, [a.ucl, a.lcl, P]), Y = q.useMemo(() => {
    if (!i || !i.length) return null;
    const E = [];
    return i.forEach((U, oe) => {
      const fe = U.classification.variation === je.Concern || U.classification.variation === je.Improvement || !!U.classification.neutralSpecialCauseValue, ne = !!U.rules.singlePoint.up || !!U.rules.twoOfThree.up || !!U.rules.fourOfFive.up || !!U.rules.shift.up || !!U.rules.trend.up, A = !!U.rules.singlePoint.down || !!U.rules.twoOfThree.down || !!U.rules.fourOfFive.down || !!U.rules.shift.down || !!U.rules.trend.down;
      E[oe] = {
        variation: U.classification.variation,
        assurance: U.classification.assurance,
        special: fe,
        concern: U.classification.variation === je.Concern,
        improvement: U.classification.variation === je.Improvement,
        trendUp: !!U.rules.trend.up,
        trendDown: !!U.rules.trend.down,
        upAny: ne,
        downAny: A,
        neutralSpecial: !!U.classification.neutralSpecialCauseValue,
        shiftUp: !!U.rules.shift.up,
        shiftDown: !!U.rules.shift.down,
        twoOfThreeUp: !!U.rules.twoOfThree.up,
        twoOfThreeDown: !!U.rules.twoOfThree.down,
        fourOfFiveUp: !!U.rules.fourOfFive.up,
        fourOfFiveDown: !!U.rules.fourOfFive.down,
        partitionId: U.partition.id ?? null
      };
    }), E;
  }, [i]), R = q.useMemo(() => (j || []).map((E) => E === dt.Improvement ? lt.Improvement : E === dt.Concern ? lt.Concern : E === dt.NoJudgement ? lt.NoJudgement : lt.Common), [j]), B = q.useMemo(() => !u || !R.length ? [] : gg(R, !0), [u, R, v]), H = q.useMemo(
    () => P.map((E) => F(E.x instanceof Date ? E.x : new Date(E.x))),
    [P, F]
  ), re = F.range()[1], z = F.range()[0], de = q.useMemo(() => {
    if (!i || !i.length)
      return null;
    let E = Number.POSITIVE_INFINITY, U = Number.POSITIVE_INFINITY;
    if (i.forEach((W, L) => {
      W.rules.trend.up && (E = Math.min(E, L)), W.rules.trend.down && (U = Math.min(U, L));
    }), !Number.isFinite(E) && !Number.isFinite(U))
      return null;
    const oe = E <= U, fe = oe ? Et.Up : Et.Down, ne = oe ? E : U, A = (W) => x == null || x === Be.Neither || W == null || typeof W.data.value != "number" || typeof W.limits.mean != "number" ? !1 : fe === Et.Up ? x === Be.Up ? W.data.value > W.limits.mean : W.data.value < W.limits.mean : x === Be.Down ? W.data.value < W.limits.mean : W.data.value > W.limits.mean;
    let O = null;
    for (let W = ne; W < i.length; W++) {
      const L = i[W];
      if (!(oe ? !!L.rules.trend.up : !!L.rules.trend.down)) break;
      if (A(L)) {
        O = W;
        break;
      }
    }
    let J = !1;
    if (O != null) {
      let W = 0;
      for (let L = O; L < i.length; L++) {
        const G = i[L];
        if (!(oe ? !!G.rules.trend.up : !!G.rules.trend.down)) break;
        A(G) && W++;
      }
      J = W >= 2;
    }
    return {
      direction: fe,
      detectedAt: ne,
      firstFavourableCrossAt: O,
      persistedAcrossMean: J
    };
  }, [i, x]), ge = q.useMemo(() => {
    if (!i || !i.length) return null;
    const E = (U) => {
      const oe = [];
      let fe = null, ne = null;
      for (let A = 0; A < i.length; A++) {
        const O = i[A], J = U(O), W = typeof J == "number" && !isNaN(J) ? J : null;
        if (W == null) {
          fe !== null && ne != null && (oe.push({
            x1: H[fe],
            x2: H[A - 1],
            y: w(ne)
          }), fe = null, ne = null);
          continue;
        }
        if (fe === null) {
          fe = A, ne = W;
          continue;
        }
        ne != null && Math.abs(W - ne) <= 1e-9 || (ne != null && oe.push({
          x1: H[fe],
          x2: H[A - 1],
          y: w(ne)
        }), fe = A, ne = W);
      }
      return fe !== null && ne != null && oe.push({
        x1: H[fe],
        x2: H[i.length - 1],
        y: w(ne)
      }), oe;
    };
    return {
      mean: E((U) => U.limits.mean ?? null),
      ucl: E((U) => U.limits.ucl ?? null),
      lcl: E((U) => U.limits.lcl ?? null),
      onePos: E((U) => U.limits.oneSigma.upper ?? null),
      oneNeg: E((U) => U.limits.oneSigma.lower ?? null),
      twoPos: E((U) => U.limits.twoSigma.upper ?? null),
      twoNeg: E((U) => U.limits.twoSigma.lower ?? null)
    };
  }, [i, H, w]), le = q.useMemo(() => B.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${I.current}-grad-common`,
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
    B.map((E, U) => {
      const oe = `${I.current}-grad-${U}`;
      let fe, ne = 0.28, A = 0.12, O = 0.045;
      switch (E.category) {
        case lt.Concern:
          fe = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", ne = 0.28, A = 0.12, O = 0.045;
          break;
        case lt.Improvement:
          fe = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", ne = 0.26, A = 0.11, O = 0.045;
          break;
        case lt.NoJudgement:
          fe = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", ne = 0.26, A = 0.11, O = 0.045;
          break;
        default:
          fe = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: oe, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: fe, stopOpacity: ne }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: fe, stopOpacity: A }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: fe, stopOpacity: O })
      ] }, oe);
    })
  ] }) : null, [B]), ie = q.useMemo(() => {
    if (!B.length) return null;
    const [E] = w.domain(), U = w(E), oe = B.map((fe, ne) => {
      const { start: A, end: O, category: J } = fe;
      if (A < 0 || O >= H.length || A > O)
        return null;
      const W = H[A], L = H[O];
      let G = "";
      if (J === lt.Common) {
        const K = ne > 0 ? B[ne - 1] : null, Q = ne < B.length - 1 ? B[ne + 1] : null, X = K ? H[K.end] : z, ae = K ? w(P[K.end].y) : U, me = Q ? H[Q.start] : re, be = Q ? w(P[Q.start].y) : U;
        G = `M ${X} ${U}`, G += ` L ${X} ${ae}`;
        for (let we = A; we <= O; we++)
          G += ` L ${H[we]} ${w(P[we].y)}`;
        G += ` L ${me} ${be}`, G += ` L ${me} ${U} Z`;
      } else {
        const K = ne > 0 ? B[ne - 1] : null, Q = ne < B.length - 1 ? B[ne + 1] : null, X = K && K.category !== lt.Common, ae = Q && Q.category !== lt.Common, me = w(P[A].y), be = w(P[O].y);
        let we = W, Ce = L;
        if (X) {
          const pe = H[K.end], De = w(P[K.end].y), Ee = P[A].y - P[K.end].y;
          d === ar.Slope && Ee > 0 ? (G = `M ${pe} ${De} L ${W} ${me}`, we = pe) : (G = `M ${W} ${U} L ${W} ${me}`, we = W);
        } else
          G = `M ${W} ${U} L ${W} ${me}`;
        for (let pe = A + 1; pe <= O; pe++)
          G += ` L ${H[pe]} ${w(P[pe].y)}`;
        if (G += ` L ${L} ${be}`, ae) {
          const pe = H[Q.start], De = w(P[Q.start].y), Ee = P[Q.start].y - P[O].y;
          (d === ar.Slope && Ee <= 0 || d === ar.Extend) && (G += ` L ${pe} ${De}`, Ce = pe);
        }
        if (G += ` L ${Ce} ${U}`, G += ` L ${we} ${U} Z`, d === ar.Neutral && X) {
          const pe = H[K.end], De = w(P[K.end].y), Ee = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${pe} ${U} L ${pe} ${De} L ${W} ${me} L ${W} ${U} Z`,
              fill: `url(#${I.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${ne}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            Ee,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: G,
                fill: `url(#${I.current}-grad-${ne})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${ne}`
            )
          ] }, `seq-group-${ne}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: G,
          fill: `url(#${I.current}-grad-${ne})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${ne}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: oe });
  }, [B, H, re, w, P, d]), Z = q.useMemo(() => {
    if (!c?.timeframe && P.length >= 2) {
      const E = P.map((O) => O.x instanceof Date ? O.x : new Date(O.x)), U = new Date(Math.min(...E.map((O) => O.getTime()))), oe = new Date(Math.max(...E.map((O) => O.getTime()))), fe = Math.round((oe.getTime() - U.getTime()) / 864e5) || 0;
      if (fe < 14)
        return `The chart shows a timeframe of ${fe + 1} days`;
      const ne = Math.round(fe / 7);
      return ne < 20 ? `The chart shows a timeframe of ${ne} weeks` : `The chart shows a timeframe of ${(oe.getFullYear() - U.getFullYear()) * 12 + (oe.getMonth() - U.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, P]), te = (E) => {
    const U = E % 10, oe = E % 100;
    return U === 1 && oe !== 11 ? `${E}st` : U === 2 && oe !== 12 ? `${E}nd` : U === 3 && oe !== 13 ? `${E}rd` : `${E}th`;
  }, ce = (E) => `${te(E.getDate())} ${E.toLocaleString("en-GB", { month: "long" })}, ${E.getFullYear()}`, V = (E) => ({
    specialCauseSinglePointUp: !!E?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!E?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!E?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!E?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!E?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!E?.rules.fourOfFive.down,
    specialCauseShiftUp: !!E?.rules.shift.up,
    specialCauseShiftDown: !!E?.rules.shift.down,
    specialCauseTrendUp: !!E?.rules.trend.up,
    specialCauseTrendDown: !!E?.rules.trend.down
  }), ue = q.useCallback(
    ({
      index: E,
      x: U,
      y: oe
    }) => {
      const fe = i?.[E], ne = U instanceof Date ? U : new Date(U), A = ce(ne), O = c?.measureUnit ? ` ${c.measureUnit}` : "", J = c?.measureName ? ` ${c.measureName}` : "";
      if (!fe)
        return `General summary is: ${Z ? Z + ". " : ""}Point ${E + 1}, ${A}, ${oe}${O}${J}`;
      const W = Ta(fe.classification?.variation) || "Variation", L = ja(V(fe)), G = L.length ? ` Rules: ${[...new Set(L.map((Q) => Un[Q].narration))].join("; ")}.` : " No special cause rules.", K = [];
      return c?.measureName && K.push(`Measure: ${c.measureName}.`), c?.datasetContext && K.push(`${c.datasetContext}.`), c?.organisation && K.push(`Organisation: ${c.organisation}.`), c?.additionalNote && K.push(c.additionalNote), [
        "General summary is:",
        ...K,
        `Point ${E + 1} recorded on `,
        A + ",",
        `with a value of ${oe} ${O}${J}`,
        W + ".",
        G
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, Z]
  ), se = q.useCallback(
    (E, U) => i?.[E] ? ue({
      index: E,
      seriesId: "process",
      x: U.x instanceof Date ? U.x : new Date(U.x),
      y: U.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, ue]
  ), he = q.useMemo(() => {
    try {
      const E = typeof w?.domain == "function" ? w.domain() : void 0;
      if (!E || !Array.isArray(E) || E.length < 2) return !1;
      const U = Math.min(E[0], E[1]), oe = Math.max(E[0], E[1]);
      return !(0 >= U && 0 <= oe);
    } catch {
      return !1;
    }
  }, [w]);
  return /* @__PURE__ */ r.jsx(xm, { children: /* @__PURE__ */ r.jsxs(
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
            height: (_?.innerHeight ?? S.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(ui, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                ui,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: he,
                    gapPx: $,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(Ah, { axis: "y" }),
              le,
              ie,
              g.map((E, U) => {
                const oe = P[E];
                if (!oe) return null;
                const fe = F(oe.x instanceof Date ? oe.x : new Date(oe.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: fe,
                    x2: fe,
                    y1: 0,
                    y2: w.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${U}`
                );
              }),
              ge?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                ge.mean.map((E, U) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: E.x1,
                    x2: E.x2,
                    y1: E.y,
                    y2: E.y
                  },
                  `mean-${U}`
                )),
                ge.mean.map((E, U) => {
                  if (U === ge.mean.length - 1) return null;
                  const oe = ge.mean[U + 1];
                  if (!oe || E.y === oe.y) return null;
                  const ne = Math.max(4, oe.x1 - E.x2 || 0) * 0.5, A = `M ${E.x2},${E.y} C ${E.x2 + ne},${E.y} ${oe.x1 - ne},${oe.y} ${oe.x1},${oe.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: A,
                      fill: "none"
                    },
                    `mean-join-${U}`
                  );
                })
              ] }) : null,
              N != null && /* @__PURE__ */ r.jsx(r.Fragment, {}),
              ge?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    ge.ucl.map((E, U) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: E.x1,
                        x2: E.x2,
                        y1: E.y,
                        y2: E.y,
                        strokeWidth: 2
                      },
                      `ucl-${U}`
                    )),
                    ge.ucl.map((E, U) => {
                      if (U === ge.ucl.length - 1) return null;
                      const oe = ge.ucl[U + 1];
                      if (!oe || E.y === oe.y) return null;
                      const ne = Math.max(4, oe.x1 - E.x2 || 0) * 0.5, A = `M ${E.x2},${E.y} C ${E.x2 + ne},${E.y} ${oe.x1 - ne},${oe.y} ${oe.x1},${oe.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: A,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${U}`
                      );
                    })
                  ]
                }
              ) : null,
              ge?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    ge.lcl.map((E, U) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: E.x1,
                        x2: E.x2,
                        y1: E.y,
                        y2: E.y,
                        strokeWidth: 2
                      },
                      `lcl-${U}`
                    )),
                    ge.lcl.map((E, U) => {
                      if (U === ge.lcl.length - 1) return null;
                      const oe = ge.lcl[U + 1];
                      if (!oe || E.y === oe.y) return null;
                      const ne = Math.max(4, oe.x1 - E.x2 || 0) * 0.5, A = `M ${E.x2},${E.y} C ${E.x2 + ne},${E.y} ${oe.x1 - ne},${oe.y} ${oe.x1},${oe.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: A,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${U}`
                      );
                    })
                  ]
                }
              ) : null,
              N != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: F.range()[1],
                    y1: w(N),
                    y2: w(N),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: F.range()[0] - 7,
                    y: w(N) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      N,
                      " ",
                      h || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && ge && ge.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                ge.onePos.map((E, U) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: E.x1,
                    x2: E.x2,
                    y1: E.y,
                    y2: E.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${U}`
                )),
                ge.oneNeg.map((E, U) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: E.x1,
                    x2: E.x2,
                    y1: E.y,
                    y2: E.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${U}`
                )),
                ge.twoPos.map((E, U) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: E.x1,
                    x2: E.x2,
                    y1: E.y,
                    y2: E.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${U}`
                )),
                ge.twoNeg.map((E, U) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: E.x1,
                    x2: E.x2,
                    y1: E.y,
                    y2: E.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${U}`
                ))
              ] }),
              de && (k || M || D) && (() => {
                const E = de.detectedAt, U = de.firstFavourableCrossAt, oe = P[E] ? F(
                  P[E].x instanceof Date ? P[E].x : new Date(P[E].x)
                ) : null, fe = P[E] ? w(P[E].y) : null, ne = U != null && P[U] ? F(
                  P[U].x instanceof Date ? P[U].x : new Date(P[U].x)
                ) : null, A = U != null && P[U] ? w(P[U].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  D && oe != null && fe != null && ne != null && A != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: oe,
                      y1: fe,
                      x2: ne,
                      y2: A,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  k && oe != null && fe != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: oe,
                      cy: fe,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  M && ne != null && A != null && /* @__PURE__ */ r.jsx("circle", { cx: ne, cy: A, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                bm,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (E) => E.x instanceof Date ? E.x : new Date(E.x),
                  smooth: !1,
                  strokeWidth: f
                }
              ),
              t && P.map((E, U) => {
                const oe = F(E.x instanceof Date ? E.x : new Date(E.x)), fe = w(E.y), ne = ee.has(U), A = Y?.[U], O = R[U], J = O === lt.Improvement, W = O === lt.Concern, L = O === lt.NoJudgement, G = [
                  "fdp-spc__point",
                  ne && s ? "fdp-spc__point--ooc" : null,
                  l && W ? "fdp-spc__point--sc-concern" : null,
                  l && J ? "fdp-spc__point--sc-improvement" : null,
                  l && p && L ? "fdp-spc__point--sc-no-judgement" : null,
                  A?.assurance === rt.Pass ? "fdp-spc__point--assurance-pass" : null,
                  A?.assurance === rt.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), K = C?.focused?.index === U;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: oe,
                    cy: fe,
                    r: 5,
                    className: G,
                    "data-variation": A?.variation,
                    "data-assurance": A?.assurance,
                    "aria-label": v,
                    ...K ? { "aria-describedby": `spc-tooltip-${U}` } : {}
                  },
                  U
                );
              }),
              y && b && C?.focused && (() => {
                const E = C.focused, U = typeof E.index == "number" ? E.index : -1;
                if (U < 0 || !P[U]) return null;
                const oe = F(
                  P[U].x instanceof Date ? P[U].x : new Date(P[U].x)
                ), fe = w(P[U].y), ne = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: oe,
                      cy: fe,
                      r: 7,
                      fill: "none",
                      stroke: ne,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: oe,
                      cy: fe,
                      r: 5,
                      fill: "#000",
                      stroke: ne,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: oe,
                      cy: fe,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              _ && /* @__PURE__ */ r.jsx(
                yg,
                {
                  width: F.range()[1],
                  height: w.range()[0]
                }
              ),
              !b && /* @__PURE__ */ r.jsx(
                tc,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: se,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (E) => ce(E),
                  enableNeutralNoJudgement: p,
                  showTrendGatingExplanation: m
                }
              )
            ] })
          }
        ),
        b && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          mg,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: h || c?.measureUnit,
            onSignalFocus: T
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          vm,
          {
            format: (E) => ue({ ...E, x: E.x instanceof Date ? E.x : new Date(E.x) })
          }
        )
      ]
    }
  ) });
}, yg = ({
  width: e,
  height: t
}) => {
  const n = cn();
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
function wg(e) {
  const { rows: t } = so(e), n = oo(e);
  return { rows: t, visuals: n.visuals };
}
function _g(e, t, n) {
  const a = q.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: o, totalReservedPx: s } = q.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = Nr, d = c + $h, f = n?.maxFraction, h = Math.max(
      jr,
      Math.floor(l * f)
    ), g = Math.min(d, h);
    return { slotPx: Math.min(c, g), totalReservedPx: g };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: o, totalReservedPx: s };
}
function Sg(e, t, n, a) {
  if (n.percentScale) {
    const c = e.map((f) => f.y), u = Math.max(100, ...c), d = Math.min(0, ...c);
    return [d < 0 ? d : 0, u > 100 ? u : 100];
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
function bs(e, t) {
  if (!e?.length || t.chartType !== St.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let g = 0; g < e.length; g++) {
    const v = e[g], x = v.value;
    v?.ghost || typeof x == "number" && Number.isFinite(x) && a.push({ idx: g, value: x });
  }
  if (a.length < n * 2) return null;
  let o = 0, s = 0;
  for (let g = 1; g < a.length; g++)
    o += Math.abs(a[g].value - a[g - 1].value), s++;
  if (s === 0) return null;
  const l = o / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), u = t.metricImprovement === He.Up, d = t.metricImprovement === He.Down, f = (() => {
    for (let g = e.length - 1; g >= 0; g--) if (e[g]?.baseline) return g;
    return -1;
  })();
  function h(g, v) {
    let x = 0, p = 0;
    for (let m = g; m < v; m++)
      x += a[m].value, p++;
    return p ? x / p : NaN;
  }
  for (let g = n; g <= a.length - n; g++) {
    const v = h(g - n, g), x = h(g, g + n);
    if (!Number.isFinite(v) || !Number.isFinite(x)) continue;
    const p = x - v, m = p / l;
    let k = !1, M = !1;
    if (u ? (k = m >= c, M = !0) : d ? (k = -m >= c, M = !1) : (k = Math.abs(m) >= c, M = p > 0), !k) continue;
    const D = (j) => M ? j > v : j < v;
    let b = !0;
    for (let j = g; j < g + n; j++)
      if (!D(a[j].value)) {
        b = !1;
        break;
      }
    if (!b) continue;
    const T = a[g].idx;
    if (!(t.minGap && f >= 0 && T - f < t.minGap))
      return T;
  }
  return null;
}
function kg(e, t) {
  const n = bs(e, t);
  return n == null ? e.slice() : e.map((a, o) => o === n ? { ...a, baseline: !0 } : a);
}
function Cg(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return kg(e, t);
  let a = e.slice(), o = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; o < n; ) {
    const i = bs(a, { ...t, minGap: s });
    if (i == null) break;
    if (a[i]?.baseline) {
      const l = bs(a, { ...t, minGap: s + 1 });
      if (l == null || l === i) break;
      a = a.map((c, u) => u === l ? { ...c, baseline: !0 } : c), o++;
      continue;
    }
    a = a.map((l, c) => c === i ? { ...l, baseline: !0 } : l), o++;
  }
  return a;
}
const Ng = (e) => {
  const t = q.useCallback(
    ($e) => String($e).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((et) => et.length ? et[0].toUpperCase() + et.slice(1) : et).join(" "),
    []
  ), n = q.useCallback(
    ($e) => String($e).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Pe) => Pe.length ? Pe[0].toUpperCase() + Pe.slice(1) : Pe).join(" "),
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
    effEngineSettings: u,
    effAlwaysShowZeroY: d,
    effAlwaysShowHundredY: f,
    effPercentScale: h,
    effGradientSequences: g,
    effSequenceTransition: v,
    effProcessLineWidth: x,
    effTrendVisualMode: p,
    effShowTrendGatingExplanation: m,
    effEnableNeutralNoJudgement: k,
    effEnableRules: M,
    effShowPartitionMarkers: D,
    effShowTrendStartMarkers: b,
    effShowFirstFavourableCrossMarkers: T,
    effShowTrendBridgeOverlay: j,
    effShowSignalsInspector: N,
    effOnSignalFocus: y,
    effShowWarningsPanel: $,
    effWarningsFilter: S,
    effShowEmbeddedIcon: _,
    effEmbeddedIconVariant: F,
    effEmbeddedIconRunLength: w,
    effShowFocusIndicator: I,
    effHeight: C,
    effClassName: P,
    effAriaLabel: ee,
    effUnit: Y,
    effNarrationContext: R,
    effShowZones: B,
    effShowPoints: H,
    effHighlightOutOfControl: re,
    effVisualsScenario: z,
    effVisualsEngineSettings: de,
    effSource: ge,
    effEngineAutoRecalc: le
  } = xg(e), ie = ee ?? e.ariaLabel, Z = C ?? e.height ?? 260, te = P ?? e.className, ce = Y ?? e.unit, V = R ?? e.narrationContext, ue = B ?? e.showZones, se = H ?? e.showPoints, he = re ?? e.highlightOutOfControl, E = z ?? e.visualsScenario ?? Vl.None, U = de ?? e.visualsEngineSettings, oe = ge ?? e.source, fe = e.a11y?.announceFocus ?? e.announceFocus ?? !1, ne = q.useMemo(() => a.map(($e, Pe) => ({
    x: $e.x,
    value: $e.y,
    target: o?.[Pe] ?? void 0,
    baseline: s?.[Pe] ?? void 0,
    ghost: i?.[Pe] ?? void 0
  })), [a, o, s, i]), A = q.useMemo(() => {
    try {
      const $e = le;
      return $e?.enabled ? Cg(ne, {
        chartType: l,
        metricImprovement: c,
        shiftLength: $e.shiftLength,
        deltaSigma: $e.deltaSigma,
        minGap: $e.minGap,
        maxInsertions: $e.maxInsertions
      }) : ne;
    } catch {
      return ne;
    }
  }, [ne, le, l, c]), O = q.useMemo(() => {
    try {
      const $e = u?.minimumPointsPartition ?? u?.minimumPoints, Pe = {};
      typeof $e == "number" && !isNaN($e) && (Pe.minimumPoints = $e, A.filter(
        (Fe) => !Fe.ghost && typeof Fe.value == "number"
      ).length >= $e && (Pe.chartLevelEligibility = !0)), u?.enableFourOfFiveRule != null && (Pe.enableFourOfFiveRule = !!u.enableFourOfFiveRule), U && Object.assign(Pe, U);
      const et = (at) => {
        switch (at) {
          case vt.XmR:
            return St.XmR;
          case vt.T:
            return St.T;
          case vt.G:
            return St.G;
          default:
            return St.XmR;
        }
      }, wt = (at) => {
        switch (at) {
          case Be.Up:
            return He.Up;
          case Be.Down:
            return He.Down;
          default:
            return He.Neither;
        }
      }, xt = {
        chartType: et(l),
        metricImprovement: wt(c),
        data: A,
        settings: Object.keys(Pe).length ? Pe : void 0
      }, { visuals: Tt } = Hm(xt, E, {
        trendVisualMode: p === nc.Ungated ? Yn.Ungated : Yn.Gated,
        enableNeutralNoJudgement: k
      });
      return Tt || [];
    } catch {
      return [];
    }
  }, [
    A,
    l,
    c,
    p,
    k,
    u,
    E,
    U
  ]), W = q.useMemo(() => {
    try {
      const $e = u?.minimumPointsPartition ?? u?.minimumPoints, Pe = {};
      typeof $e == "number" && !isNaN($e) && (Pe.minimumPoints = $e, A.filter(
        (Ft) => !Ft.ghost && typeof Ft.value == "number"
      ).length >= $e && (Pe.chartLevelEligibility = !0)), u?.enableFourOfFiveRule != null && (Pe.enableFourOfFiveRule = !!u.enableFourOfFiveRule), U && Object.assign(Pe, U);
      const et = (Fe) => {
        switch (Fe) {
          case vt.XmR:
            return St.XmR;
          case vt.T:
            return St.T;
          case vt.G:
            return St.G;
          default:
            return St.XmR;
        }
      }, wt = (Fe) => {
        switch (Fe) {
          case Be.Up:
            return He.Up;
          case Be.Down:
            return He.Down;
          default:
            return He.Neither;
        }
      }, xt = {
        chartType: et(l),
        metricImprovement: wt(c),
        data: A,
        settings: Object.keys(Pe).length ? Pe : void 0
      }, { rows: Tt } = wg(xt), at = (Fe) => {
        switch (Fe) {
          case Ae.ImprovementHigh:
          case Ae.ImprovementLow:
            return je.Improvement;
          case Ae.ConcernHigh:
          case Ae.ConcernLow:
            return je.Concern;
          case Ae.NeitherHigh:
          case Ae.NeitherLow:
            return je.Neither;
          case Ae.CommonCause:
          default:
            return je.Neither;
        }
      };
      return Tt.map(
        (Fe, Ft) => ({
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
            variation: at(Fe.variationIcon),
            neutralSpecialCauseValue: Fe.variationIcon === Ae.NeitherHigh || Fe.variationIcon === Ae.NeitherLow ? Fe.specialCauseImprovementValue ?? Fe.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: A[Ft]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [A, l, c, u, U]) || null, L = (W || []).slice().reverse().find(($e) => $e.limits.mean != null), G = L?.limits.mean ?? null, K = q.useMemo(() => {
    const $e = [];
    try {
      const Pe = W, et = u?.minimumPoints ?? 13, wt = u?.minimumPointsPartition ?? 12;
      if (Pe && Pe.length) {
        const xt = Pe.filter(
          (at) => !at.data.ghost && at.data.value != null
        ).length;
        xt < et && $e.push({
          code: qr.InsufficientPointsGlobal,
          severity: Rt.Warning,
          category: Yr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: xt, minimumPoints: et }
        });
        const Tt = /* @__PURE__ */ new Map();
        for (const at of Pe) {
          const Fe = at.partition.id ?? 0, Ft = Tt.get(Fe) || { size: 0, nonGhost: 0 };
          Ft.size += 1, !at.data.ghost && at.data.value != null && (Ft.nonGhost += 1), Tt.set(Fe, Ft);
        }
        for (const [at, Fe] of Tt)
          Fe.nonGhost > 0 && Fe.nonGhost < wt && $e.push({
            code: qr.InsufficientPointsPartition,
            severity: Rt.Warning,
            category: Yr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: at,
              nonGhostCount: Fe.nonGhost,
              minimumPointsPartition: wt
            }
          });
      }
    } catch {
    }
    return $e;
  }, [W, u?.minimumPoints, u?.minimumPointsPartition]), Q = q.useMemo(() => K.length ? S ? K.filter(($e) => !(S.severities && $e.severity && !S.severities.includes($e.severity) || S.categories && $e.category && !S.categories.includes($e.category) || S.codes && !S.codes.includes($e.code))) : K : [], [K, S]), X = L?.limits.ucl ?? null, ae = L?.limits.lcl ?? null, me = L?.limits.oneSigma.upper ?? null, be = L?.limits.oneSigma.lower ?? null, we = L?.limits.twoSigma.upper ?? null, Ce = L?.limits.twoSigma.lower ?? null, pe = G != null && me != null ? Math.abs(me - G) : 0, De = q.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), Ee = q.useMemo(
    () => Sg(
      a,
      { mean: G, ucl: X, lcl: ae, onePos: me, oneNeg: be, twoPos: we, twoNeg: Ce },
      {
        alwaysShowZeroY: !!d,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      o ?? null
    ),
    [
      a,
      G,
      X,
      ae,
      me,
      be,
      we,
      Ce,
      o,
      d,
      f,
      h
    ]
  ), Ze = q.useMemo(() => {
    const $e = (Pe) => {
      const et = Pe.filter(
        (xt) => typeof xt == "number" && !isNaN(xt)
      );
      if (!et.length) return null;
      const wt = et[0];
      return et.every((xt) => xt === wt) ? wt : null;
    };
    if (W && W.length) {
      const Pe = $e(W.map((et) => et.target));
      if (Pe != null) return Pe;
    }
    return o && o.length ? $e(o) : null;
  }, [W, o]), { show: ze, slotPx: it, totalReservedPx: Dt } = _g(
    Ee,
    Z,
    { maxFraction: 0.35 }
  ), jt = ze ? Dt : 0, yt = q.useMemo(() => {
    const $e = a.map((Pe) => Pe.x);
    return ec({
      values: a.map((Pe) => Pe.y),
      dates: $e,
      providedUnit: ce || V?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, ce, V?.measureUnit]), qe = ce ?? V?.measureUnit ?? yt.unit, tt = q.useMemo(() => qe ? { ...V || {}, measureUnit: qe } : V, [V, qe]), Ut = q.useMemo(() => {
    if (!W) return [];
    const $e = [];
    for (let Pe = 1; Pe < W.length; Pe++)
      W[Pe].partition.id !== W[Pe - 1].partition.id && $e.push(Pe);
    return $e;
  }, [W]), xr = q.useMemo(
    () => hg({
      show: !!_,
      rowsForUi: W,
      minPoints: u?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: F,
      runLength: w
    }),
    [
      _,
      W,
      u?.minimumPoints,
      c,
      F,
      w
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: te ? `fdp-spc-chart-wrapper ${te}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          fg,
          {
            show: !!_,
            variationNode: xr,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          Dh,
          {
            height: Z,
            ariaLabel: ie,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(Ih, { series: De, yDomain: Ee, yBottomGapPx: jt, children: (() => {
              const $e = {
                series: De,
                showPoints: se,
                announceFocus: fe,
                limits: { mean: G, ucl: X, lcl: ae, sigma: pe, onePos: me, oneNeg: be, twoPos: we, twoNeg: Ce },
                showZones: ue,
                highlightOutOfControl: he,
                engineRows: W,
                uniformTarget: Ze,
                visualCategories: O,
                enableRules: M,
                narrationContext: tt,
                gradientSequences: g,
                sequenceTransition: v,
                processLineWidth: x,
                zeroBreakSlotGapPx: it,
                effectiveUnit: qe,
                partitionMarkers: D ? Ut : [],
                ariaLabel: ie,
                enableNeutralNoJudgement: k,
                showTrendGatingExplanation: m,
                metricImprovement: c,
                showTrendStartMarkers: b,
                showFirstFavourableCrossMarkers: T,
                showTrendBridgeOverlay: j,
                showSignalsInspector: N,
                onSignalFocus: y,
                showFocusIndicator: I
              };
              return /* @__PURE__ */ r.jsx(vg, { ...$e });
            })() })
          }
        ),
        oe && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof oe == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          oe
        ] }) : oe }),
        /* @__PURE__ */ r.jsx(
          dg,
          {
            show: !!$,
            warnings: Q,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
}, ny = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: rt,
  BaselineSuggestionReason: It,
  ChartType: St,
  Icons: pg,
  ImprovementDirection: He,
  PARITY_V26: Gl,
  RULE_METADATA: El,
  SPCChart: Ng,
  SPCTooltipOverlay: tc,
  SpcEmbeddedIconVariant: wn,
  SpcVisualCategory: dt,
  SpcWarningCategory: Yr,
  SpcWarningCode: qr,
  SpcWarningSeverity: Rt,
  VARIATION_COLOR_TOKENS: Pt,
  VariationIcon: Ae,
  buildSpc: Ql,
  buildSpcV26a: so,
  buildSpcV26aWithVisuals: oo,
  computeSpcVisualCategories: ao,
  extractRuleIds: ja,
  getVariationColorHex: Cm,
  getVariationColorToken: Ol,
  normaliseSpcSettings: Jl,
  normaliseSpcSettingsV2: zl,
  ruleGlossary: Un,
  variationLabel: Ta,
  withParityV26: Om
}, Symbol.toStringTag, { value: "Module" })), jg = "150ms", Tg = "300ms", Dg = "500ms", Ig = "cubic-bezier(0.4, 0, 1, 1)", $g = "cubic-bezier(0, 0, 0.2, 1)", Mg = "cubic-bezier(0.4, 0, 0.2, 1)", Pg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Fg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Lg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ag = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Eg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Rg = "1px", Bg = "2px", Hg = "4px", Og = "4px", Ug = "4px", Wg = "2px", zg = "1px", Vg = "0px", Gg = "4px", Yg = "8px", qg = "12px", rc = "#d8dde0", ac = "#4c6272", sc = "#d8dde0", oc = "#aeb7bd", ic = "#d5281b", lc = "#005eb8", cc = "#ffffff", uc = "#212b32", dc = "#007f3b", fc = "#330072", pc = "#7c2855", hc = "#d5281b", mc = "#ffeb3b", gc = "#fff9c4", xc = "#ffb81c", bc = "#ed8b00", vc = "#00a499", yc = "#ae2573", wc = "#4c6272", _c = "#768692", Sc = "#aeb7bd", kc = "#d8dde0", Cc = "#f0f4f5", Xg = "#212b32", Kg = "#4c6272", Zg = "#ffffff", Jg = "#212b32", Qg = "#005eb8", e0 = "#7c2855", t0 = "#003087", n0 = "#330072", r0 = "#ffeb3b", a0 = "#212b32", s0 = "#d8dde0", o0 = "#ffffff33", i0 = "#d5281b", l0 = "#4c6272", c0 = "#ffffff", u0 = "#007f3b", d0 = "#ffffff", f0 = "#006530", p0 = "#004021", h0 = "#004021", m0 = "#00000000", g0 = "#ffffff", x0 = "#005eb8", b0 = "#005eb8", v0 = "#d9e5f2", y0 = "#c7daf0", w0 = "#005eb8", _0 = "#ffffff", S0 = "#212b32", k0 = "#d9dde0", C0 = "#b3bcc2", N0 = "#b3bcc2", j0 = "#d5281b", T0 = "#aa2016", D0 = "#6a140e", I0 = "#6a140e", $0 = "#005eb8", M0 = "#004b93", P0 = "#002f5c", F0 = "#002f5c", L0 = "8px", A0 = "16px", E0 = "12px", R0 = "16px", B0 = "4px", H0 = "40px", O0 = "4px", U0 = "40px", W0 = "12px", z0 = "16px", V0 = "32px", G0 = "16px", Y0 = "20px", q0 = "28px", X0 = "9px", K0 = "2px", Z0 = "16px", J0 = "24px", Q0 = "8px", ex = "24px", tx = "16px", nx = "4px", rx = "4px", ax = "4px", sx = "8px", ox = "4px", ix = "16px", lx = "#007f3b", cx = "#006530", ux = "#004021", dx = "#d8dde0", fx = "#ffffff", px = "#768692", hx = "#00000000", mx = "#ffeb3b", gx = "#00000000", xx = "#ffffff", bx = "#d9e5f2", vx = "#c7daf0", yx = "#005eb8", wx = "#005eb8", Nc = "8px", jc = "16px", Tc = "12px", Dc = "16px", _x = "2px", Sx = "4px", kx = "4px", Cx = "600", Nx = "#ffffff", jx = "#d8dde0", Tx = "#aeb7bd", Dx = "#f0f4f5", Ix = "#212b32", $x = "#212b32", Mx = "#005eb8", Ic = "16px", $c = "32px", Mc = "16px", Px = "1px", Fx = "4px", Lx = "none", Ax = "0 2px 4px rgba(0, 0, 0, 0.1)", Ex = "#ffffff", Rx = "#ffffff", Bx = "#d8dde0", Hx = "#ffffff", Ox = "#4c6272", Ux = "#ffeb3b", Wx = "#d5281b", zx = "#aeb7bd", Vx = "#212b32", Gx = "#4c6272", Yx = "#768692", qx = "#212b32", Xx = "#ffffff", Kx = "600", Zx = "#d5281b", Jx = "600", Qx = "#4c6272", Pc = "4px", Fc = "40px", Lc = "40px", Ac = "12px", eb = "2px", tb = "4px", nb = "0px", rb = "16px", ab = "18px", sb = "24px", ob = "32px", ib = "34px", lb = "32px", cb = "40px", ub = "48px", db = "5.4ex", fb = "7.2ex", pb = "9ex", hb = "10.8ex", mb = "20ex", gb = "38ex", xb = "56ex", bb = "44px", vb = "40px", yb = "1020px", wb = "100%", _b = "50%", Sb = "33.333%", kb = "25%", Cb = "20%", Nb = "320px", jb = "641px", Tb = "1025px", Db = "1280px", Ib = "960px", $b = "32px", Mb = "16px", Pb = "#d5281b", Fb = "#d5281b", Lb = "#ffffff", Ab = "#007f3b", Eb = "#007f3b", Rb = "#ffffff", Bb = "#ffeb3b", Hb = "#ffeb3b", Ob = "#212b32", Ub = "#005eb8", Wb = "#005eb8", zb = "#ffffff", Vb = "#d8dde0", Gb = "#aeb7bd", Yb = "#768692", qb = "0 4px 0 #004021", Xb = "0 4px 0 #005eb8", Kb = "0 4px 0 #6a140e", Zb = "0 4px 0 #ffeb3b", Jb = "none", Qb = "0 2px 4px rgba(0, 0, 0, 0.1)", ev = "4px", tv = "0px", nv = "solid", rv = "0 0 0 3px #ffeb3b", av = "0 0 0 3px #ffeb3b", sv = "none", ov = "0 1px 3px rgba(0, 0, 0, 0.12)", iv = "0 2px 6px rgba(0, 0, 0, 0.16)", lv = "0 4px 12px rgba(0, 0, 0, 0.20)", Ec = "0", Rc = "4px", Bc = "8px", Hc = "16px", Oc = "24px", Uc = "32px", Wc = "40px", zc = "48px", Vc = "56px", Gc = "64px", vs = "0", ys = "0", ws = "4px", _s = "4px", Ss = "8px", ks = "8px", Cs = "8px", Ns = "16px", js = "16px", Ts = "24px", Ds = "24px", Is = "32px", $s = "32px", Ms = "40px", Ps = "40px", Fs = "48px", Ls = "48px", As = "56px", Es = "56px", Rs = "64px", Xr = "Frutiger W01", Kr = "Arial, Helvetica, sans-serif", Zr = "sans-serif", Jr = "400", Qr = "600", ea = "400", ta = "12px", na = "14px", ra = "12pt", aa = "14px", sa = "16px", oa = "12pt", ia = "16px", la = "19px", ca = "13pt", ua = "19px", da = "22px", fa = "15pt", pa = "22px", ha = "26px", ma = "17pt", ga = "27px", xa = "36px", ba = "20pt", va = "33px", ya = "48px", wa = "24pt", Bs = "16px", Hs = "24px", Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, qt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Xt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Qt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, en = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, tn = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, cv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: jg,
  AnimationDurationNormal: Tg,
  AnimationDurationSlow: Dg,
  AnimationEasingBounce: Pg,
  AnimationEasingEaseIn: Ig,
  AnimationEasingEaseInOut: Mg,
  AnimationEasingEaseOut: $g,
  BorderColorCard: sc,
  BorderColorCardHover: oc,
  BorderColorDefault: rc,
  BorderColorError: ic,
  BorderColorForm: ac,
  BorderRadiusLarge: qg,
  BorderRadiusMedium: Yg,
  BorderRadiusNone: Vg,
  BorderRadiusSmall: Gg,
  BorderWidthCardBottom: Og,
  BorderWidthDefault: Rg,
  BorderWidthFormElement: Bg,
  BorderWidthFormElementError: Hg,
  BorderWidthPanel: Ug,
  BorderWidthTableCell: zg,
  BorderWidthTableHeader: Wg,
  BreakpointDesktop: Tb,
  BreakpointLargeDesktop: Db,
  BreakpointMobile: Nb,
  BreakpointTablet: jb,
  ButtonBorderRadius: Sx,
  ButtonBorderWidth: _x,
  ButtonPrimaryBackgroundActive: ux,
  ButtonPrimaryBackgroundDefault: lx,
  ButtonPrimaryBackgroundDisabled: dx,
  ButtonPrimaryBackgroundHover: cx,
  ButtonPrimaryBorderDefault: hx,
  ButtonPrimaryBorderFocus: mx,
  ButtonPrimaryTextDefault: fx,
  ButtonPrimaryTextDisabled: px,
  ButtonSecondaryBackgroundActive: vx,
  ButtonSecondaryBackgroundDefault: gx,
  ButtonSecondaryBackgroundHover: bx,
  ButtonSecondaryBackgroundSolid: xx,
  ButtonSecondaryBorderDefault: wx,
  ButtonSecondaryTextDefault: yx,
  ButtonShadowSize: kx,
  ButtonSpacingPaddingHorizontalDesktop: Dc,
  ButtonSpacingPaddingHorizontalMobile: jc,
  ButtonSpacingPaddingVerticalDesktop: Tc,
  ButtonSpacingPaddingVerticalMobile: Nc,
  ButtonTypographyWeight: Cx,
  CardBackgroundDefault: Nx,
  CardBorderBottom: Dx,
  CardBorderDefault: jx,
  CardBorderHover: Tx,
  CardBorderWidthBottom: Fx,
  CardBorderWidthDefault: Px,
  CardShadowDefault: Lx,
  CardShadowHover: Ax,
  CardSpacingHeadingMargin: Mc,
  CardSpacingPaddingDesktop: $c,
  CardSpacingPaddingMobile: Ic,
  CardTextDescription: $x,
  CardTextHeading: Ix,
  CardTextLink: Mx,
  ColorBorderDefault: s0,
  ColorBorderSecondary: o0,
  ColorButtonLoginActive: P0,
  ColorButtonLoginBackground: $0,
  ColorButtonLoginHover: M0,
  ColorButtonLoginShadow: F0,
  ColorButtonPrimaryActive: p0,
  ColorButtonPrimaryBackground: u0,
  ColorButtonPrimaryHover: f0,
  ColorButtonPrimaryShadow: h0,
  ColorButtonPrimaryText: d0,
  ColorButtonReverseActive: C0,
  ColorButtonReverseBackground: _0,
  ColorButtonReverseHover: k0,
  ColorButtonReverseShadow: N0,
  ColorButtonReverseText: S0,
  ColorButtonSecondaryActive: y0,
  ColorButtonSecondaryBackground: m0,
  ColorButtonSecondaryBackgroundSolid: g0,
  ColorButtonSecondaryBorder: x0,
  ColorButtonSecondaryHover: v0,
  ColorButtonSecondaryShadow: w0,
  ColorButtonSecondaryText: b0,
  ColorButtonWarningActive: D0,
  ColorButtonWarningBackground: j0,
  ColorButtonWarningHover: T0,
  ColorButtonWarningShadow: I0,
  ColorError: i0,
  ColorFocusBackground: r0,
  ColorFocusText: a0,
  ColorFormBackground: c0,
  ColorFormBorder: l0,
  ColorGrey1: wc,
  ColorGrey2: _c,
  ColorGrey3: Sc,
  ColorGrey4: kc,
  ColorGrey5: Cc,
  ColorLinkActive: t0,
  ColorLinkDefault: Qg,
  ColorLinkHover: e0,
  ColorLinkVisited: n0,
  ColorPrimaryBlack: uc,
  ColorPrimaryBlue: lc,
  ColorPrimaryDarkPink: pc,
  ColorPrimaryGreen: dc,
  ColorPrimaryPurple: fc,
  ColorPrimaryRed: hc,
  ColorPrimaryWhite: cc,
  ColorPrimaryYellow: mc,
  ColorSecondaryAquaGreen: vc,
  ColorSecondaryOrange: bc,
  ColorSecondaryPaleYellow: gc,
  ColorSecondaryPink: yc,
  ColorSecondaryWarmYellow: xc,
  ColorTextPrimary: Xg,
  ColorTextPrint: Jg,
  ColorTextReverse: Zg,
  ColorTextSecondary: Kg,
  ComponentBlur: rx,
  ComponentBreadcrumbChevronMarginLeft: X0,
  ComponentBreadcrumbChevronMarginRight: K0,
  ComponentBreadcrumbPaddingTopDesktop: J0,
  ComponentBreadcrumbPaddingTopMobile: Z0,
  ComponentButtonPaddingDesktopHorizontal: R0,
  ComponentButtonPaddingDesktopVertical: E0,
  ComponentButtonPaddingMobileHorizontal: A0,
  ComponentButtonPaddingMobileVertical: L0,
  ComponentButtonShadowSize: B0,
  ComponentCardHeadingMargin: G0,
  ComponentCardPaddingDesktop: V0,
  ComponentCardPaddingMobile: z0,
  ComponentDetails: sx,
  ComponentExpander: ox,
  ComponentFormCheckboxLabelPadding: W0,
  ComponentFormCheckboxSize: U0,
  ComponentFormInputMinHeight: H0,
  ComponentFormInputPadding: O0,
  ComponentLink: ax,
  ComponentPagination: ix,
  ComponentPanelPaddingDesktop: q0,
  ComponentPanelPaddingMobile: Y0,
  ComponentSpread: nx,
  ComponentSummaryListCellPaddingHorizontal: ex,
  ComponentSummaryListCellPaddingVertical: Q0,
  ComponentSummaryListRowMargin: tx,
  ElevationHigh: lv,
  ElevationLow: ov,
  ElevationMedium: iv,
  ElevationNone: sv,
  FocusOutlineOffset: tv,
  FocusOutlineStyle: nv,
  FocusOutlineWidth: ev,
  FocusShadowButton: av,
  FocusShadowInput: rv,
  FontFamilyBase: Xr,
  FontFamilyFallback: Kr,
  FontFamilyPrint: Zr,
  FontLineHeightBase: Hs,
  FontSize14Mobile: ta,
  FontSize14Print: ra,
  FontSize14Tablet: na,
  FontSize16Mobile: aa,
  FontSize16Print: oa,
  FontSize16Tablet: sa,
  FontSize19Mobile: ia,
  FontSize19Print: ca,
  FontSize19Tablet: la,
  FontSize22Mobile: ua,
  FontSize22Print: fa,
  FontSize22Tablet: da,
  FontSize26Mobile: pa,
  FontSize26Print: ma,
  FontSize26Tablet: ha,
  FontSize36Mobile: ga,
  FontSize36Print: ba,
  FontSize36Tablet: xa,
  FontSize48Mobile: va,
  FontSize48Print: wa,
  FontSize48Tablet: ya,
  FontSizeBase: Bs,
  FontWeightBold: Qr,
  FontWeightLight: ea,
  FontWeightNormal: Jr,
  FormBorderRadius: nb,
  FormBorderWidthDefault: eb,
  FormBorderWidthError: tb,
  FormErrorTextDefault: Zx,
  FormErrorTypographyWeight: Jx,
  FormHintTextDefault: Qx,
  FormInputBackgroundDefault: Ex,
  FormInputBackgroundDisabled: Bx,
  FormInputBackgroundError: Hx,
  FormInputBackgroundFocus: Rx,
  FormInputBorderDefault: Ox,
  FormInputBorderDisabled: zx,
  FormInputBorderError: Wx,
  FormInputBorderFocus: Ux,
  FormInputTextDefault: Vx,
  FormInputTextDisabled: Yx,
  FormInputTextPlaceholder: Gx,
  FormLabelTextDefault: qx,
  FormLabelTextRequired: Xx,
  FormLabelTypographyWeight: Kx,
  FormSpacingCheckboxLabelPadding: Ac,
  FormSpacingCheckboxSize: Lc,
  FormSpacingInputMinHeight: Fc,
  FormSpacingInputPadding: Pc,
  GridGutter: $b,
  GridGutterHalf: Mb,
  GridPageWidth: Ib,
  HeadingsNhsukHeadingL: Yt,
  HeadingsNhsukHeadingM: qt,
  HeadingsNhsukHeadingS: Xt,
  HeadingsNhsukHeadingXl: Gt,
  HeadingsNhsukHeadingXs: Kt,
  LayoutColumnActions: Cb,
  LayoutColumnFull: wb,
  LayoutColumnHalf: _b,
  LayoutColumnQuarter: kb,
  LayoutColumnThird: Sb,
  LayoutContainerMaxWidth: yb,
  ParagraphsBody: Zt,
  ParagraphsBodyLarge: Jt,
  ParagraphsBodySmall: Qt,
  ParagraphsLedeText: en,
  ParagraphsLedeTextSmall: tn,
  ShadowButtonDefault: qb,
  ShadowButtonFocus: Zb,
  ShadowButtonSecondary: Xb,
  ShadowButtonWarning: Kb,
  ShadowCardDefault: Jb,
  ShadowCardHover: Qb,
  SizeButtonMinHeightDesktop: vb,
  SizeButtonMinHeightMobile: bb,
  SizeFormControlLarge: ub,
  SizeFormControlMedium: cb,
  SizeFormControlSmall: lb,
  SizeFormInputWidth2xl: gb,
  SizeFormInputWidth3xl: xb,
  SizeFormInputWidthLg: hb,
  SizeFormInputWidthMd: pb,
  SizeFormInputWidthSm: fb,
  SizeFormInputWidthXl: mb,
  SizeFormInputWidthXs: db,
  SizeIconExtraLarge: ob,
  SizeIconLarge: sb,
  SizeIconMedium: ab,
  SizeIconNhsDefault: ib,
  SizeIconSmall: rb,
  Spacing0: Ec,
  Spacing1: Rc,
  Spacing2: Bc,
  Spacing3: Hc,
  Spacing4: Oc,
  Spacing5: Uc,
  Spacing6: Wc,
  Spacing7: zc,
  Spacing8: Vc,
  Spacing9: Gc,
  SpacingResponsive0Mobile: vs,
  SpacingResponsive0Tablet: ys,
  SpacingResponsive1Mobile: ws,
  SpacingResponsive1Tablet: _s,
  SpacingResponsive2Mobile: Ss,
  SpacingResponsive2Tablet: ks,
  SpacingResponsive3Mobile: Cs,
  SpacingResponsive3Tablet: Ns,
  SpacingResponsive4Mobile: js,
  SpacingResponsive4Tablet: Ts,
  SpacingResponsive5Mobile: Ds,
  SpacingResponsive5Tablet: Is,
  SpacingResponsive6Mobile: $s,
  SpacingResponsive6Tablet: Ms,
  SpacingResponsive7Mobile: Ps,
  SpacingResponsive7Tablet: Fs,
  SpacingResponsive8Mobile: Ls,
  SpacingResponsive8Tablet: As,
  SpacingResponsive9Mobile: Es,
  SpacingResponsive9Tablet: Rs,
  StateDisabledBackground: Vb,
  StateDisabledBorder: Gb,
  StateDisabledText: Yb,
  StateErrorBackground: Pb,
  StateErrorBorder: Fb,
  StateErrorText: Lb,
  StateInfoBackground: Ub,
  StateInfoBorder: Wb,
  StateInfoText: zb,
  StateSuccessBackground: Ab,
  StateSuccessBorder: Eb,
  StateSuccessText: Rb,
  StateWarningBackground: Bb,
  StateWarningBorder: Hb,
  StateWarningText: Ob,
  TransitionButtonDefault: Fg,
  TransitionButtonShadow: Lg,
  TransitionCardHover: Eg,
  TransitionInputFocus: Ag
}, Symbol.toStringTag, { value: "Module" })), ry = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), ay = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
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
), sy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
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
), oy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: qt.fontFamily,
      fontWeight: qt.fontWeight,
      fontSize: qt.fontSize.mobile,
      lineHeight: qt.lineHeight,
      marginTop: qt.marginTop,
      marginBottom: qt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), iy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Xt.fontFamily,
      fontWeight: Xt.fontWeight,
      fontSize: Xt.fontSize.mobile,
      lineHeight: Xt.lineHeight,
      marginTop: Xt.marginTop,
      marginBottom: Xt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), ly = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Kt.fontFamily,
      fontWeight: Kt.fontWeight,
      fontSize: Kt.fontSize.mobile,
      lineHeight: Kt.lineHeight,
      marginTop: Kt.marginTop,
      marginBottom: Kt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), cy = ({
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
), uy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
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
      ...n
    },
    children: e
  }
), dy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Qt.fontFamily,
      fontWeight: Qt.fontWeight,
      fontSize: Qt.fontSize.mobile,
      lineHeight: Qt.lineHeight,
      marginTop: Qt.marginTop,
      marginBottom: Qt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), fy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: en.fontFamily,
      fontWeight: en.fontWeight,
      fontSize: en.fontSize.mobile,
      lineHeight: en.lineHeight,
      marginTop: en.marginTop,
      marginBottom: en.marginBottom.mobile,
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
      fontFamily: tn.fontFamily,
      fontWeight: tn.fontWeight,
      fontSize: tn.fontSize.mobile,
      lineHeight: tn.lineHeight,
      marginTop: tn.marginTop,
      marginBottom: tn.marginBottom.mobile,
      ...n
    },
    children: e
  }
), hy = () => Me(() => cv, []), my = () => Me(() => ({
  // Border colors
  BorderColorDefault: rc,
  BorderColorForm: ac,
  BorderColorCard: sc,
  BorderColorCardHover: oc,
  BorderColorError: ic,
  // Primary colors
  ColorPrimaryBlue: lc,
  ColorPrimaryWhite: cc,
  ColorPrimaryBlack: uc,
  ColorPrimaryGreen: dc,
  ColorPrimaryPurple: fc,
  ColorPrimaryDarkPink: pc,
  ColorPrimaryRed: hc,
  ColorPrimaryYellow: mc,
  // Secondary colors
  ColorSecondaryPaleYellow: gc,
  ColorSecondaryWarmYellow: xc,
  ColorSecondaryOrange: bc,
  ColorSecondaryAquaGreen: vc,
  ColorSecondaryPink: yc,
  // Grey scale
  ColorGrey1: wc,
  ColorGrey2: _c,
  ColorGrey3: Sc,
  ColorGrey4: kc,
  ColorGrey5: Cc
}), []), gy = () => Me(() => ({
  Spacing0: Ec,
  Spacing1: Rc,
  Spacing2: Bc,
  Spacing3: Hc,
  Spacing4: Oc,
  Spacing5: Uc,
  Spacing6: Wc,
  Spacing7: zc,
  Spacing8: Vc,
  Spacing9: Gc
}), []), xy = () => Me(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: ta,
    Size16: aa,
    Size19: ia,
    Size22: ua,
    Size26: pa,
    Size36: ga,
    Size48: va
  },
  Tablet: {
    Size14: na,
    Size16: sa,
    Size19: la,
    Size22: da,
    Size26: ha,
    Size36: xa,
    Size48: ya
  },
  Print: {
    Size14: ra,
    Size16: oa,
    Size19: ca,
    Size22: fa,
    Size26: ma,
    Size36: ba,
    Size48: wa
  },
  Family: {
    Base: Xr,
    Fallback: Kr,
    Print: Zr
  },
  Weight: {
    Normal: Jr,
    Bold: Qr,
    Light: ea
  },
  Base: {
    Size: Bs,
    LineHeight: Hs
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Xr,
  FontFamilyFallback: Kr,
  FontFamilyPrint: Zr,
  FontWeightNormal: Jr,
  FontWeightBold: Qr,
  FontWeightLight: ea,
  FontSize14Mobile: ta,
  FontSize14Tablet: na,
  FontSize14Print: ra,
  FontSize16Mobile: aa,
  FontSize16Tablet: sa,
  FontSize16Print: oa,
  FontSize19Mobile: ia,
  FontSize19Tablet: la,
  FontSize19Print: ca,
  FontSize22Mobile: ua,
  FontSize22Tablet: da,
  FontSize22Print: fa,
  FontSize26Mobile: pa,
  FontSize26Tablet: ha,
  FontSize26Print: ma,
  FontSize36Mobile: ga,
  FontSize36Tablet: xa,
  FontSize36Print: ba,
  FontSize48Mobile: va,
  FontSize48Tablet: ya,
  FontSize48Print: wa,
  FontSizeBase: Bs,
  FontLineHeightBase: Hs
}), []), by = () => Me(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: vs,
    Size1: ws,
    Size2: Ss,
    Size3: Cs,
    Size4: js,
    Size5: Ds,
    Size6: $s,
    Size7: Ps,
    Size8: Ls,
    Size9: Es
  },
  Tablet: {
    Size0: ys,
    Size1: _s,
    Size2: ks,
    Size3: Ns,
    Size4: Ts,
    Size5: Is,
    Size6: Ms,
    Size7: Fs,
    Size8: As,
    Size9: Rs
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: vs,
  SpacingResponsive0Tablet: ys,
  SpacingResponsive1Mobile: ws,
  SpacingResponsive1Tablet: _s,
  SpacingResponsive2Mobile: Ss,
  SpacingResponsive2Tablet: ks,
  SpacingResponsive3Mobile: Cs,
  SpacingResponsive3Tablet: Ns,
  SpacingResponsive4Mobile: js,
  SpacingResponsive4Tablet: Ts,
  SpacingResponsive5Mobile: Ds,
  SpacingResponsive5Tablet: Is,
  SpacingResponsive6Mobile: $s,
  SpacingResponsive6Tablet: Ms,
  SpacingResponsive7Mobile: Ps,
  SpacingResponsive7Tablet: Fs,
  SpacingResponsive8Mobile: Ls,
  SpacingResponsive8Tablet: As,
  SpacingResponsive9Mobile: Es,
  SpacingResponsive9Tablet: Rs
}), []), vy = () => Me(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Nc,
  ButtonSpacingPaddingHorizontalMobile: jc,
  ButtonSpacingPaddingVerticalDesktop: Tc,
  ButtonSpacingPaddingHorizontalDesktop: Dc,
  // Card spacing	
  CardSpacingPaddingMobile: Ic,
  CardSpacingPaddingDesktop: $c,
  CardSpacingHeadingMargin: Mc,
  // Form spacing
  FormSpacingInputPadding: Pc,
  FormSpacingInputMinHeight: Fc,
  FormSpacingCheckboxSize: Lc,
  FormSpacingCheckboxLabelPadding: Ac
}), []), yy = () => Me(() => ({
  xl: Gt,
  l: Yt,
  m: qt,
  s: Xt,
  xs: Kt
}), []), wy = () => Me(() => ({
  body: Zt,
  bodyLarge: Jt,
  bodySmall: Qt,
  ledeText: en,
  ledeTextSmall: tn
}), []), _y = () => Me(() => ({
  headings: {
    xl: Gt,
    l: Yt,
    m: qt,
    s: Xt,
    xs: Kt
  },
  paragraphs: {
    body: Zt,
    bodyLarge: Jt,
    bodySmall: Qt,
    ledeText: en,
    ledeTextSmall: tn
  },
  fonts: {
    family: {
      base: Xr,
      fallback: Kr,
      print: Zr
    },
    weight: {
      normal: Jr,
      bold: Qr,
      light: ea
    },
    sizes: {
      mobile: {
        size14: ta,
        size16: aa,
        size19: ia,
        size22: ua,
        size26: pa,
        size36: ga,
        size48: va
      },
      tablet: {
        size14: na,
        size16: sa,
        size19: la,
        size22: da,
        size26: ha,
        size36: xa,
        size48: ya
      },
      print: {
        size14: ra,
        size16: oa,
        size19: ca,
        size22: fa,
        size26: ma,
        size36: ba,
        size48: wa
      }
    }
  }
}), []);
function Sy(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = q.useState(t), s = q.useCallback(() => o("three-column"), []), i = q.useCallback(() => o((c) => c === "three-column" ? n : c), [n]), l = q.useCallback(() => o((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Yc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, _t = {
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
function ky(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Yc, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${_t.normal.eot}?#iefix") format("eot"),
       url("${t}${_t.normal.woff2}") format("woff2"),
       url("${t}${_t.normal.woff}") format("woff"),
       url("${t}${_t.normal.ttf}") format("truetype");
  src: url("${t}${_t.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${_t.bold.eot}?#iefix") format("eot"),
       url("${t}${_t.bold.woff2}") format("woff2"),
       url("${t}${_t.bold.woff}") format("woff"),
       url("${t}${_t.bold.ttf}") format("truetype");
  src: url("${t}${_t.bold.eot}");
}`), a.join(`
`);
}
function Cy(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Yc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${_t.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${_t.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${_t.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${_t.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Ny = '"Frutiger W01", Arial, Helvetica, sans-serif', jy = "Arial, Helvetica, sans-serif";
async function Ty() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  $h as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  Nr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  jr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Mh as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  Ph as AXIS_ZIGZAG_DEFAULT_CYCLES,
  Lh as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  Fh as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Ti as Account,
  pv as ActionLink,
  Uv as AdaptiveDataGrid,
  jg as AnimationDurationFast,
  Tg as AnimationDurationNormal,
  Dg as AnimationDurationSlow,
  Pg as AnimationEasingBounce,
  Ig as AnimationEasingEaseIn,
  Mg as AnimationEasingEaseInOut,
  $g as AnimationEasingEaseOut,
  ul as AppointmentCard,
  Kv as AreaSeriesPrimitive,
  Mp as AriaDataGrid,
  is as AriaTabsDataGrid,
  Uv as AriaTabsDataGridAdaptive,
  ui as Axis,
  es as BackLink,
  Jv as BandScalesProvider,
  Zv as BarSeriesPrimitive,
  sc as BorderColorCard,
  oc as BorderColorCardHover,
  rc as BorderColorDefault,
  ic as BorderColorError,
  ac as BorderColorForm,
  qg as BorderRadiusLarge,
  Yg as BorderRadiusMedium,
  Vg as BorderRadiusNone,
  Gg as BorderRadiusSmall,
  Og as BorderWidthCardBottom,
  Rg as BorderWidthDefault,
  Bg as BorderWidthFormElement,
  Hg as BorderWidthFormElementError,
  Ug as BorderWidthPanel,
  zg as BorderWidthTableCell,
  Wg as BorderWidthTableHeader,
  gp as Breadcrumb,
  Tu as Breakpoint,
  Tb as BreakpointDesktop,
  Db as BreakpointLargeDesktop,
  Nb as BreakpointMobile,
  jb as BreakpointTablet,
  mt as Button,
  Sx as ButtonBorderRadius,
  _x as ButtonBorderWidth,
  ux as ButtonPrimaryBackgroundActive,
  lx as ButtonPrimaryBackgroundDefault,
  dx as ButtonPrimaryBackgroundDisabled,
  cx as ButtonPrimaryBackgroundHover,
  hx as ButtonPrimaryBorderDefault,
  mx as ButtonPrimaryBorderFocus,
  fx as ButtonPrimaryTextDefault,
  px as ButtonPrimaryTextDisabled,
  vx as ButtonSecondaryBackgroundActive,
  gx as ButtonSecondaryBackgroundDefault,
  bx as ButtonSecondaryBackgroundHover,
  xx as ButtonSecondaryBackgroundSolid,
  wx as ButtonSecondaryBorderDefault,
  yx as ButtonSecondaryTextDefault,
  kx as ButtonShadowSize,
  Ii as ButtonSize,
  Dc as ButtonSpacingPaddingHorizontalDesktop,
  jc as ButtonSpacingPaddingHorizontalMobile,
  Tc as ButtonSpacingPaddingVerticalDesktop,
  Nc as ButtonSpacingPaddingVerticalMobile,
  Cx as ButtonTypographyWeight,
  Di as ButtonVariant,
  sl as Card,
  Nx as CardBackgroundDefault,
  Dx as CardBorderBottom,
  jx as CardBorderDefault,
  Tx as CardBorderHover,
  Fx as CardBorderWidthBottom,
  Px as CardBorderWidthDefault,
  Iv as CardGroup,
  $v as CardGroupItem,
  Lx as CardShadowDefault,
  Ax as CardShadowHover,
  Mc as CardSpacingHeadingMargin,
  $c as CardSpacingPaddingDesktop,
  Ic as CardSpacingPaddingMobile,
  $x as CardTextDescription,
  Ix as CardTextHeading,
  Mx as CardTextLink,
  Mv as CareCard,
  hv as CharacterCount,
  ey as ChartEnhancer,
  Qv as ChartNoScript,
  Dh as ChartRoot,
  mu as Checkbox,
  vu as Checkboxes,
  s0 as ColorBorderDefault,
  o0 as ColorBorderSecondary,
  P0 as ColorButtonLoginActive,
  $0 as ColorButtonLoginBackground,
  M0 as ColorButtonLoginHover,
  F0 as ColorButtonLoginShadow,
  p0 as ColorButtonPrimaryActive,
  u0 as ColorButtonPrimaryBackground,
  f0 as ColorButtonPrimaryHover,
  h0 as ColorButtonPrimaryShadow,
  d0 as ColorButtonPrimaryText,
  C0 as ColorButtonReverseActive,
  _0 as ColorButtonReverseBackground,
  k0 as ColorButtonReverseHover,
  N0 as ColorButtonReverseShadow,
  S0 as ColorButtonReverseText,
  y0 as ColorButtonSecondaryActive,
  m0 as ColorButtonSecondaryBackground,
  g0 as ColorButtonSecondaryBackgroundSolid,
  x0 as ColorButtonSecondaryBorder,
  v0 as ColorButtonSecondaryHover,
  w0 as ColorButtonSecondaryShadow,
  b0 as ColorButtonSecondaryText,
  D0 as ColorButtonWarningActive,
  j0 as ColorButtonWarningBackground,
  T0 as ColorButtonWarningHover,
  I0 as ColorButtonWarningShadow,
  i0 as ColorError,
  r0 as ColorFocusBackground,
  a0 as ColorFocusText,
  c0 as ColorFormBackground,
  l0 as ColorFormBorder,
  wc as ColorGrey1,
  _c as ColorGrey2,
  Sc as ColorGrey3,
  kc as ColorGrey4,
  Cc as ColorGrey5,
  t0 as ColorLinkActive,
  Qg as ColorLinkDefault,
  e0 as ColorLinkHover,
  n0 as ColorLinkVisited,
  uc as ColorPrimaryBlack,
  lc as ColorPrimaryBlue,
  pc as ColorPrimaryDarkPink,
  dc as ColorPrimaryGreen,
  fc as ColorPrimaryPurple,
  hc as ColorPrimaryRed,
  cc as ColorPrimaryWhite,
  mc as ColorPrimaryYellow,
  vc as ColorSecondaryAquaGreen,
  bc as ColorSecondaryOrange,
  gc as ColorSecondaryPaleYellow,
  yc as ColorSecondaryPink,
  xc as ColorSecondaryWarmYellow,
  Xg as ColorTextPrimary,
  Jg as ColorTextPrint,
  Zg as ColorTextReverse,
  Kg as ColorTextSecondary,
  sr as Column,
  Iu as ColumnAlign,
  rx as ComponentBlur,
  X0 as ComponentBreadcrumbChevronMarginLeft,
  K0 as ComponentBreadcrumbChevronMarginRight,
  J0 as ComponentBreadcrumbPaddingTopDesktop,
  Z0 as ComponentBreadcrumbPaddingTopMobile,
  R0 as ComponentButtonPaddingDesktopHorizontal,
  E0 as ComponentButtonPaddingDesktopVertical,
  A0 as ComponentButtonPaddingMobileHorizontal,
  L0 as ComponentButtonPaddingMobileVertical,
  B0 as ComponentButtonShadowSize,
  G0 as ComponentCardHeadingMargin,
  V0 as ComponentCardPaddingDesktop,
  z0 as ComponentCardPaddingMobile,
  sx as ComponentDetails,
  ox as ComponentExpander,
  W0 as ComponentFormCheckboxLabelPadding,
  U0 as ComponentFormCheckboxSize,
  H0 as ComponentFormInputMinHeight,
  O0 as ComponentFormInputPadding,
  ax as ComponentLink,
  ix as ComponentPagination,
  q0 as ComponentPanelPaddingDesktop,
  Y0 as ComponentPanelPaddingMobile,
  nx as ComponentSpread,
  ex as ComponentSummaryListCellPaddingHorizontal,
  Q0 as ComponentSummaryListCellPaddingVertical,
  tx as ComponentSummaryListRowMargin,
  Fi as Container,
  Dv as ContentsList,
  Yc as DEFAULT_FONT_CONFIG,
  Bv as DashboardSummaryGrid,
  Sv as DateInput,
  Sp as Details,
  kp as DoDontList,
  lv as ElevationHigh,
  ov as ElevationLow,
  iv as ElevationMedium,
  sv as ElevationNone,
  xo as ErrorMessage,
  _v as ErrorSummary,
  Cp as Expander,
  _t as FRUTIGER_FONT_FILES,
  Ws as Fieldset,
  Du as Float,
  tv as FocusOutlineOffset,
  nv as FocusOutlineStyle,
  ev as FocusOutlineWidth,
  av as FocusShadowButton,
  rv as FocusShadowInput,
  Xr as FontFamilyBase,
  Kr as FontFamilyFallback,
  Zr as FontFamilyPrint,
  Hs as FontLineHeightBase,
  ta as FontSize14Mobile,
  ra as FontSize14Print,
  na as FontSize14Tablet,
  aa as FontSize16Mobile,
  oa as FontSize16Print,
  sa as FontSize16Tablet,
  ia as FontSize19Mobile,
  ca as FontSize19Print,
  la as FontSize19Tablet,
  ua as FontSize22Mobile,
  fa as FontSize22Print,
  da as FontSize22Tablet,
  pa as FontSize26Mobile,
  ma as FontSize26Print,
  ha as FontSize26Tablet,
  ga as FontSize36Mobile,
  ba as FontSize36Print,
  xa as FontSize36Tablet,
  va as FontSize48Mobile,
  wa as FontSize48Print,
  ya as FontSize48Tablet,
  Bs as FontSizeBase,
  Qr as FontWeightBold,
  ea as FontWeightLight,
  Jr as FontWeightNormal,
  Bi as Footer,
  nb as FormBorderRadius,
  eb as FormBorderWidthDefault,
  tb as FormBorderWidthError,
  Zx as FormErrorTextDefault,
  Jx as FormErrorTypographyWeight,
  Qx as FormHintTextDefault,
  Ex as FormInputBackgroundDefault,
  Bx as FormInputBackgroundDisabled,
  Hx as FormInputBackgroundError,
  Rx as FormInputBackgroundFocus,
  Ox as FormInputBorderDefault,
  zx as FormInputBorderDisabled,
  Wx as FormInputBorderError,
  Ux as FormInputBorderFocus,
  Vx as FormInputTextDefault,
  Yx as FormInputTextDisabled,
  Gx as FormInputTextPlaceholder,
  qx as FormLabelTextDefault,
  Xx as FormLabelTextRequired,
  Kx as FormLabelTypographyWeight,
  Ac as FormSpacingCheckboxLabelPadding,
  Lc as FormSpacingCheckboxSize,
  Fc as FormSpacingInputMinHeight,
  Pc as FormSpacingInputPadding,
  jv as GanttChart,
  ts as Grid,
  $b as GridGutter,
  Mb as GridGutterHalf,
  Ah as GridLines,
  Ib as GridPageWidth,
  _n as GridWidth,
  Ri as Header,
  Nv as HeaderSSR,
  Ou as HeaderSearch,
  Ri as HeaderStatic,
  an as Heading,
  Yt as HeadingsNhsukHeadingL,
  qt as HeadingsNhsukHeadingM,
  Xt as HeadingsNhsukHeadingS,
  Gt as HeadingsNhsukHeadingXl,
  Kt as HeadingsNhsukHeadingXs,
  Wu as Hero,
  Mi as Hint,
  Ev as Images,
  Os as Input,
  Pv as InsetText,
  Us as Label,
  Cb as LayoutColumnActions,
  wb as LayoutColumnFull,
  _b as LayoutColumnHalf,
  kb as LayoutColumnQuarter,
  Sb as LayoutColumnThird,
  yb as LayoutContainerMaxWidth,
  Xv as Legend,
  Ih as LineScalesProvider,
  bm as LineSeriesPrimitive,
  Pu as List,
  Li as MainWrapper,
  dl as MedicationCard,
  wm as MetricCard,
  cy as NHSBodyText,
  uy as NHSBodyTextLarge,
  dy as NHSBodyTextSmall,
  ay as NHSHeading1,
  sy as NHSHeading2,
  oy as NHSHeading3,
  iy as NHSHeading4,
  ly as NHSHeading5,
  fy as NHSLedeText,
  py as NHSLedeTextSmall,
  Cv as NHSThemeProvider,
  jy as NHS_FALLBACK_FONT_STACK,
  Ny as NHS_FONT_STACK,
  yh as NavigationSplitView,
  zv as PageTemplate,
  Tv as Pagination,
  xp as Panel,
  Zt as ParagraphsBody,
  Jt as ParagraphsBodyLarge,
  Qt as ParagraphsBodySmall,
  en as ParagraphsLedeText,
  tn as ParagraphsLedeTextSmall,
  cl as PatientCard,
  Sh as ProductRoadmap,
  mv as Radios,
  gv as RadiosServer,
  Uv as ResponsiveDataGrid,
  Wv as ResponsiveDataGridDemo,
  Sn as Row,
  ny as SPC,
  Ng as SPCChart,
  ty as SPCMetricCard,
  Ir as Select,
  ku as SelectOption,
  qb as ShadowButtonDefault,
  Zb as ShadowButtonFocus,
  Xb as ShadowButtonSecondary,
  Kb as ShadowButtonWarning,
  Jb as ShadowCardDefault,
  Qb as ShadowCardHover,
  vb as SizeButtonMinHeightDesktop,
  bb as SizeButtonMinHeightMobile,
  ub as SizeFormControlLarge,
  cb as SizeFormControlMedium,
  lb as SizeFormControlSmall,
  gb as SizeFormInputWidth2xl,
  xb as SizeFormInputWidth3xl,
  hb as SizeFormInputWidthLg,
  pb as SizeFormInputWidthMd,
  fb as SizeFormInputWidthSm,
  mb as SizeFormInputWidthXl,
  db as SizeFormInputWidthXs,
  ob as SizeIconExtraLarge,
  sb as SizeIconLarge,
  ab as SizeIconMedium,
  ib as SizeIconNhsDefault,
  rb as SizeIconSmall,
  al as SkipLink,
  Rv as SlotMatrix,
  Hv as SortStatusControl,
  Ec as Spacing0,
  Rc as Spacing1,
  Bc as Spacing2,
  Hc as Spacing3,
  Oc as Spacing4,
  Uc as Spacing5,
  Wc as Spacing6,
  zc as Spacing7,
  Vc as Spacing8,
  Gc as Spacing9,
  vs as SpacingResponsive0Mobile,
  ys as SpacingResponsive0Tablet,
  ws as SpacingResponsive1Mobile,
  _s as SpacingResponsive1Tablet,
  Ss as SpacingResponsive2Mobile,
  ks as SpacingResponsive2Tablet,
  Cs as SpacingResponsive3Mobile,
  Ns as SpacingResponsive3Tablet,
  js as SpacingResponsive4Mobile,
  Ts as SpacingResponsive4Tablet,
  Ds as SpacingResponsive5Mobile,
  Is as SpacingResponsive5Tablet,
  $s as SpacingResponsive6Mobile,
  Ms as SpacingResponsive6Tablet,
  Ps as SpacingResponsive7Mobile,
  Fs as SpacingResponsive7Tablet,
  Ls as SpacingResponsive8Mobile,
  As as SpacingResponsive8Tablet,
  Es as SpacingResponsive9Mobile,
  Rs as SpacingResponsive9Tablet,
  xv as SpacingUtilities,
  Vb as StateDisabledBackground,
  Gb as StateDisabledBorder,
  Yb as StateDisabledText,
  Pb as StateErrorBackground,
  Fb as StateErrorBorder,
  Lb as StateErrorText,
  Ub as StateInfoBackground,
  Wb as StateInfoBorder,
  zb as StateInfoText,
  Ab as StateSuccessBackground,
  Eb as StateSuccessBorder,
  Rb as StateSuccessText,
  Bb as StateWarningBackground,
  Hb as StateWarningBorder,
  Ob as StateWarningText,
  $p as SummaryCard,
  Fv as SummaryList,
  ln as Table,
  Lv as Tabs,
  Ge as Tag,
  Np as TaskList,
  wu as Textarea,
  qv as TooltipOverlay,
  xm as TooltipProvider,
  Vv as TransactionalPageTemplate,
  Fg as TransitionButtonDefault,
  Lg as TransitionButtonShadow,
  Eg as TransitionCardHover,
  Ag as TransitionInputFocus,
  Yv as VisibilityProvider,
  fl as VitalsCard,
  wv as WIDTH_FRACTIONS,
  Av as WarningCallout,
  xl as WidthContainer,
  vv as WidthUtilities,
  Ty as checkFrutigerLoaded,
  eo as createGenericTabsConfig,
  Ov as createTCHTabsConfig,
  ky as generateFrutigerFontFace,
  ry as getResponsiveStyles,
  bv as getSpacingClass,
  yv as getWidthClass,
  Cy as preloadFrutigerFonts,
  Wp as tchDataConfig,
  my as useColors,
  vy as useComponentSpacing,
  yy as useNHSHeadings,
  wy as useNHSParagraphs,
  kv as useNHSTheme,
  _y as useNHSTypographySystem,
  Sy as useNavigationSplitDrill,
  xh as useNavigationSplitUrlSync,
  vl as useNhsFdpBreakpoints,
  by as useResponsiveSpacing,
  Gv as useResponsiveValue,
  gy as useSpacing,
  og as useSpc,
  hy as useTokens,
  xy as useTypography
};
//# sourceMappingURL=index.esm.js.map
