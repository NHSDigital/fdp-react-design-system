import * as q from "react";
import xt, { useState as He, useEffect as Ve, useCallback as ve, useRef as Oe, createElement as Ni, useMemo as $e, useContext as ji, createContext as Ti, forwardRef as qn, useImperativeHandle as Di, useReducer as Ii, memo as au, useId as Ir } from "react";
import { createPortal as su } from "react-dom";
function ou(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wr = { exports: {} }, Kn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function iu() {
  if (ho) return Kn;
  ho = 1;
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
var mo;
function lu() {
  return mo || (mo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === $ ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case x:
          return "Fragment";
        case g:
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
    function s() {
      var R = S.A;
      return R === null ? null : R.getOwner();
    }
    function o() {
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
        $$typeof: m,
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
        s(),
        H,
        ge,
        le
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === m && R._store && (R._store.validated = 1);
    }
    var h = xt, m = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), M = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), S = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, F = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var I, C = {}, P = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), ee = w(a(o)), Y = {};
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
var go;
function cu() {
  return go || (go = 1, process.env.NODE_ENV === "production" ? wr.exports = iu() : wr.exports = lu()), wr.exports;
}
var r = cu(), La = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var xo;
function uu() {
  return xo || (xo = 1, (function(e) {
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
  })(La)), La.exports;
}
var du = uu();
const _e = /* @__PURE__ */ ou(du), hv = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...s
}) => {
  const o = _e(
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
}, $i = ({
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
    ) : null, l = o.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: o.href,
        children: c
      }
    ) : o.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
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
        (o, i) => o && /* @__PURE__ */ r.jsx(
          "li",
          {
            className: _e(
              "nhsuk-account__item nhsuk-header__account-item",
              o.className
            ),
            children: s(o)
          },
          i
        )
      ) })
    }
  );
};
var Mi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Mi || {}), Pi = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Pi || {});
function fu(e) {
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
const { forwardRef: pu, useCallback: dn, useState: Aa } = q;
function hu(e, t) {
  const {
    children: n,
    variant: a = Mi.Primary,
    size: s = Pi.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = Aa(!1), [f, h] = Aa(!1), [m, v] = Aa(!1), x = fu({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), p = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", g = {
    ...u && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...m && { "data-focused": "true" },
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
        ...g,
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
      ...g,
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
const mt = pu(hu);
mt.displayName = "Button";
const ts = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ r.jsx(
    "button",
    {
      className: c,
      onClick: o,
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
function mu(e) {
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
  className: c,
  ...u
}) => {
  const d = mu({ color: a, noBorder: s, closable: o, disabled: l, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: d.classes, ...u, children: [
    n || (t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ r.jsx(
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
}, gu = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: u,
  onChange: d,
  onBlur: f,
  onFocus: h,
  attributes: m,
  ...v
}) => {
  const [x, p] = He(a), g = n !== void 0, k = g ? n : x;
  Ve(() => {
    g || p(a);
  }, [a, g]);
  const M = (N) => {
    const y = N.target.checked;
    g || p(y), d?.(y, N);
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
        value: o,
        checked: k,
        disabled: s,
        onChange: M,
        onBlur: f,
        onFocus: h,
        "aria-describedby": T,
        ...m
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
gu.displayName = "Checkbox";
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
const Us = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: u = !1,
  describedBy: d,
  className: f,
  width: h = "full",
  inputMode: m,
  autoComplete: v,
  maxLength: x,
  minLength: p,
  pattern: g,
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
  const [F, w] = He(a || s || (n === "range" ? M || "0" : ""));
  Ve(() => {
    a !== void 0 && w(a);
  }, [a]);
  const I = (z) => {
    const de = z.target;
    w(de.value), ("type" in z && z.nativeEvent || z.type === "keydown") && N?.(z);
  }, { classes: C, isRange: P } = Fi({ type: n, hasError: u, width: h, className: f }), ee = a !== void 0, Y = {
    id: e,
    name: t,
    type: n,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": d,
    inputMode: m,
    autoComplete: v,
    maxLength: x,
    minLength: p,
    pattern: g,
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
  }, R = !ee && s !== void 0 ? { defaultValue: s } : {}, B = ee ? { value: a } : {}, H = () => /* @__PURE__ */ r.jsx(
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
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": d,
      inputMode: m,
      autoComplete: v,
      maxLength: x,
      minLength: p,
      pattern: g,
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
function xu(e) {
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
const Ws = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = xu({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function bu(e) {
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
const zs = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...s
}) => {
  const o = bu({
    className: n,
    describedBy: a,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
    const l = t?.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return o.legendIsPageHeading ? /* @__PURE__ */ r.jsx("h1", { className: "nhsuk-fieldset__heading", children: l }) : l;
  };
  return /* @__PURE__ */ r.jsxs(
    "fieldset",
    {
      className: o.fieldsetClasses,
      "aria-describedby": o.describedBy,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ r.jsx("legend", { className: o.legendClasses, children: i() }),
        e
      ]
    }
  );
};
function vu(e) {
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
const yu = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: u = !1,
  onChange: d,
  fieldsetAttributes: f,
  attributes: h,
  ...m
}) => {
  const [v, x] = He(
    e.filter((N) => N.checked).map((N) => N.value)
  ), p = n || t, g = i ? `${p}-hint` : void 0, k = l ? `${p}-error` : void 0, M = [g, k].filter(Boolean).join(" ") || void 0, D = (N, y) => {
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
            N.conditional.label && /* @__PURE__ */ r.jsx(Ws, { htmlFor: N.conditional.id, children: N.conditional.label }),
            /* @__PURE__ */ r.jsx(Us, { ...N.conditional })
          ] }) : N.conditional
        }
      )
    ] }, N.value);
  }), { classes: T, formGroupClasses: j } = vu({ small: u, className: c, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: j, ...h, ...m, children: /* @__PURE__ */ r.jsxs(
    zs,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
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
yu.displayName = "Checkboxes";
function wu(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const _u = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: u,
  className: d,
  rows: f = 5,
  cols: h,
  maxLength: m,
  minLength: v,
  wrap: x = "soft",
  resize: p = "vertical",
  autoComplete: g,
  spellCheck: k,
  onChange: M,
  onBlur: D,
  onFocus: b,
  onKeyDown: T,
  ...j
}) => {
  const { classes: N, describedBy: y } = wu({ hasError: c, resize: p, className: d, describedBy: u });
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
      "aria-describedby": y,
      rows: f,
      cols: h,
      maxLength: m,
      minLength: v,
      wrap: x,
      autoComplete: g,
      spellCheck: k,
      onChange: M,
      onBlur: D,
      onFocus: b,
      onKeyDown: T,
      ...j
    }
  );
};
function Su(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Li = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = Su({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: s.classes, id: s.id, ...a, children: n });
}, mv = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: s,
  value: o,
  defaultValue: i,
  rows: l,
  className: c,
  countMessage: u,
  onCountChange: d,
  onChange: f,
  ...h
}) => {
  const m = o ?? i ?? "", [v, x] = He(m), [p, g] = He(0), [k, M] = He(!1), [D, b] = He(!1), T = ve((_) => n ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [n]);
  Ve(() => {
    const _ = T(v), F = t || n || 0, w = F - _, I = Math.floor(F * (a / 100));
    g(w), M(_ > F), b(_ >= I || _ > F), d && d(_, w);
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
          _u,
          {
            id: e,
            name: s,
            value: o !== void 0 ? v : void 0,
            defaultValue: o === void 0 ? i ?? v : void 0,
            rows: l,
            className: S,
            onChange: j,
            "aria-describedby": `${e}-info`,
            "aria-invalid": k || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Li,
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
function ku(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Cu = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
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
      ...o,
      children: s
    }
  );
}, Nu = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: s,
  disabled: o = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: c,
  className: u,
  multiple: d = !1,
  size: f,
  autoComplete: h,
  options: m,
  children: v,
  onChange: x,
  onBlur: p,
  onFocus: g,
  ...k
}) => {
  const { classes: M } = ku({ hasError: l, className: u }), D = () => m ? m.map((T, j) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: T.value,
      disabled: T.disabled,
      "data-initial-selected": T.selected || void 0,
      children: T.text
    },
    `${T.value}-${j}`
  )) : null, b = s === void 0 && a === void 0 && m ? m.find((T) => T.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: M,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: s !== void 0 ? s : b,
      disabled: o,
      required: i,
      "aria-describedby": c,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: x,
      onBlur: p,
      onFocus: g,
      ...k,
      children: v || D()
    }
  );
}, $r = Nu;
$r.Option = Cu;
function ju(e) {
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
  handleChange: s,
  handleBlur: o,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: c,
  InputComponent: u
}) {
  const {
    onChange: d,
    onBlur: f,
    onFocus: h,
    ...m
  } = e, {
    name: v,
    hasError: x = !1,
    describedBy: p,
    className: g,
    size: k = "normal",
    inline: M = !1,
    options: D,
    ...b
  } = m, { classes: T, describedBy: j } = ju({ hasError: x, size: k, inline: M, className: g, describedBy: p });
  return /* @__PURE__ */ r.jsx(zs, { children: /* @__PURE__ */ r.jsx(
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
                onChange: s,
                onBlur: o,
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
                  Ws,
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
const gv = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = He(e || t || ""), c = Oe([]), u = Oe(i), d = (m) => {
    const v = m.target.value;
    v !== u.current && (u.current = v, l(v), n?.(m));
  }, f = (m) => {
    s?.(m);
  }, h = ve((m) => {
    const { key: v } = m;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(v)) return;
    m.preventDefault();
    const x = c.current.filter((M) => M && !M.disabled), p = x.indexOf(m.currentTarget);
    if (p === -1) return;
    let g = p;
    ["ArrowDown", "ArrowRight"].includes(v) ? g = (p + 1) % x.length : ["ArrowUp", "ArrowLeft"].includes(v) && (g = (p - 1 + x.length) % x.length);
    const k = x[g];
    k && (k.focus(), k.checked || k.click());
  }, []);
  return Ai(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o },
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
      InputComponent: Us
    }
  );
};
function Tu(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: s,
    defaultValue: o,
    placeholder: i,
    disabled: l = !1,
    readOnly: c = !1,
    required: u = !1,
    hasError: d = !1,
    describedBy: f,
    className: h,
    width: m = "full",
    inputMode: v,
    autoComplete: x,
    maxLength: p,
    minLength: g,
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
  } = e, { classes: w, isRange: I } = Fi({
    type: a,
    hasError: d,
    width: m,
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
    minLength: g,
    pattern: k,
    step: M,
    min: D,
    max: b,
    ...F
  };
  if (I) {
    const P = s ?? o ?? (typeof D < "u" ? String(D) : "0"), ee = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: w,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
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
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ...C
    }
  );
}
const xv = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Ai(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: Tu
    }
  );
};
var Sn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(Sn || {}), Du = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Du || {}), Iu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Iu || {}), $u = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))($u || {});
const Ei = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = _e(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...s || {} } : s;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...o, children: e });
}, pn = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: s,
  ...o
}) => {
  const i = _e(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    a ? `nhsuk-grid-row-align-${a}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: i, style: n, ...o, children: e });
}, sr = ({
  children: e,
  width: t = Sn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
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
      [`nhsuk-u-${s}-desktop`]: !!s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...u ? { [`nhsuk-grid-align-${u}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...d, children: e });
}, ns = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...s
}) => {
  const o = xt.Children.toArray(e), i = o[0], l = xt.isValidElement(i) && (i.type === pn || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof a == "number" ? `${a}px` : a;
  let u = e;
  if (l)
    u = o.map((d, f) => {
      if (!xt.isValidElement(d)) return d;
      const h = d, m = h.props || {}, v = typeof m.className == "string" ? m.className : "";
      if (!(h.type === pn || v.includes("nhsuk-grid-row"))) return d;
      const p = m.rowGap, g = p !== void 0 ? typeof p == "number" ? `${p}px` : p : c, k = f === 0 ? void 0 : g;
      if (!k) return d;
      const M = { ...m.style || {}, marginTop: k };
      return xt.cloneElement(h, { style: M });
    });
  else {
    const d = { marginTop: void 0 };
    u = /* @__PURE__ */ r.jsx(pn, { style: d, children: e });
  }
  return /* @__PURE__ */ r.jsx(Ei, { className: t, style: n, ...s, children: u });
}, Mu = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: s,
  role: o,
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
    s
  );
  return /* @__PURE__ */ r.jsx(c, { className: u, role: o, ...l, children: e });
}, Pu = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = _e("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Fu = Mu;
Fu.Item = Pu;
const bv = ({
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
}, vv = {
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
}, yv = ({
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
}, wv = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, _v = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ri = ({
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
function Lu(e) {
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
function Au(e) {
  const t = e.level ?? Lu(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const an = ({ level: e, className: t, text: n, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const c = Au({ level: e, size: o, className: t, marginBottom: i }), u = s || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return Ni(c.tag, { className: c.classes, style: c.style, ...l }, u);
};
function Eu(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const bo = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...s }) => {
  const o = Eu({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Sv = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const c = Oe(null);
  Ve(() => {
    c.current && c.current.focus();
  }, []);
  const u = _e(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (m) => {
    const v = m.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } }) : m.text;
    return m.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: m.href,
        ...m.attributes,
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((m, v) => /* @__PURE__ */ r.jsx("li", { children: h(m) }, v)) })
        ] })
      ]
    }
  );
}, kv = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...u
}) => {
  const [d, f] = He(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [h, m] = He({}), v = (I) => I % 4 === 0 && I % 100 !== 0 || I % 400 === 0, x = (I, C) => {
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
  }, g = (I) => {
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
      if (P = g(C), !P && d.day) {
        const ee = p(d.day, C, d.year);
        m((Y) => ({
          ...Y,
          day: ee
        }));
      }
    } else if (I === "year" && (P = k(C), !P && d.day && d.month)) {
      const ee = p(d.day, d.month, C);
      m((Y) => ({
        ...Y,
        day: ee
      }));
    }
    if (m((ee) => ({
      ...ee,
      [I]: P
    })), d.day && d.month && d.year) {
      const ee = M(
        I === "day" ? C : d.day,
        I === "month" ? C : d.month,
        I === "year" ? C : d.year
      );
      ee && m((Y) => ({
        ...Y,
        day: ee
      }));
    }
  }, [d, p, g, k, M]), T = $e(() => [
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
  let N = o?.describedBy || "";
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
      Li,
      {
        id: y,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      bo,
      {
        id: $,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([I, C]) => C ? /* @__PURE__ */ r.jsxs(
        bo,
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
          Ws,
          {
            htmlFor: C,
            className: "nhsuk-date-input__label",
            children: ee
          }
        ),
        /* @__PURE__ */ r.jsx(
          Us,
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
  return /* @__PURE__ */ r.jsx("div", { className: _, children: o ? /* @__PURE__ */ r.jsx(
    zs,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: N || void 0,
      children: w()
    }
  ) : w() });
}, Bi = {
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
}, Hi = Ti(Bi), Ru = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Bi, ...t };
  return /* @__PURE__ */ r.jsx(Hi.Provider, { value: n, children: e });
}, Cv = () => {
  const e = ji(Hi);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Bu() {
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
function Hu() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Bu(), document.head.appendChild(e);
}
const Nv = ({ children: e, theme: t }) => (Ve(() => {
  Hu();
}, []), /* @__PURE__ */ r.jsx(Ru, { theme: t, children: e }));
function Ou(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: s = !1,
  visibleItems: o,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: c,
  navListRef: u,
  searchNode: d
}) {
  const {
    className: f,
    logo: h = {},
    service: m = {},
    serviceName: v,
    organisation: x,
    search: p,
    account: g,
    navigation: k,
    containerClasses: M,
    variant: D = "default",
    attributes: b = {},
    maxVisibleItems: T,
    // deprecated (ignored)
    responsiveNavigation: j = !0,
    ...N
  } = e, y = {
    ...m,
    text: m?.text ?? v
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
            $i,
            {
              ...g,
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
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && H >= (o ?? 0)
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
                      s && o !== void 0 && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs(
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
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: k.items.slice(o ?? 0).map((B, H) => /* @__PURE__ */ r.jsx(
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
              `overflow-${(o ?? 0) + H}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const Uu = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: u = !1,
  callbacks: d = {},
  isLoading: f = !1,
  showResults: h = !1,
  results: m = [],
  formAttributes: v = {},
  inputAttributes: x = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: g = !1,
  debounceMs: k = 300,
  minQueryLength: M = 1
}) => {
  const [D, b] = He(""), [T, j] = He(!1), N = Oe(void 0), y = Oe(null), $ = Oe(null), S = e === "controlled" && s !== void 0, _ = S ? s : D, F = ve(
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
      e === "controlled" || e === "hybrid" && g ? (re.preventDefault(), d.onSearch && z.length >= M && d.onSearch(de)) : e === "hybrid" && d.onSearch && z.length >= M && d.onSearch(de);
    },
    [
      e,
      _,
      d.onSearch,
      g,
      M
    ]
  ), C = ve(() => {
    j(!0), d.onFocus?.();
  }, [d.onFocus]), P = ve(() => {
    j(!1), d.onBlur?.();
  }, [d.onBlur]), ee = ve(() => {
    S || b(""), d.onClear?.(), $.current?.focus();
  }, [S, d.onClear]);
  Ve(() => () => {
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
  ), H = () => !h || !m.length || !T ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: m.map((re) => /* @__PURE__ */ r.jsx(
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
        "nhsuk-header__search--has-results": h && m.length > 0
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
                    placeholder: o,
                    autoComplete: "off",
                    value: _,
                    onChange: w,
                    onFocus: C,
                    onBlur: P,
                    disabled: u || f,
                    ...h && m.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
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
}, Oi = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  ...d
}) => {
  const [f, h] = He(!1), [m, v] = He(!1), [x, p] = He(i?.items?.length || 0), [g, k] = He(!1), [M, D] = He(!1), b = Oe(null), T = Oe(null), j = Oe(!1);
  Ve(() => {
    typeof window > "u" || D(!0);
  }, []), Ve(() => {
    if (typeof document > "u") return;
    const S = (_) => {
      _.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [f]);
  const N = Oe(null), y = ve(() => {
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
  Ve(() => {
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
  }, [M, y]), Ve(() => {
    M && y();
  }, [i?.items?.length, M, y]);
  const $ = (S) => {
    S && (S.preventDefault(), S.stopPropagation());
    const _ = !f;
    h(_), k(_);
  };
  return Ou(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: s,
      account: o,
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
      showMoreButton: m,
      visibleItems: x,
      dropdownVisible: g,
      toggleMenu: $,
      navContainerRef: b,
      navListRef: T,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ r.jsx(Uu, { ...s }) : null
    }
  );
};
function Wu(e, { variant: t, isClient: n }) {
  const {
    className: a,
    logo: s = {},
    service: o = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: c,
    navigation: u,
    containerClasses: d,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: m,
    // deprecated (ignored)
    responsiveNavigation: v = !0,
    ...x
  } = e;
  "maxVisibleItems" in x && delete x.maxVisibleItems;
  const p = {
    ...o,
    text: o?.text ?? i
  }, g = p.href && !s.href || p.href && p.href === s.href, k = g ? p.href : s.href, M = _e(
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
      "aria-label": s.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: s.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), j = () => s.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: s.src,
      width: "280",
      alt: s.ariaLabel || "NHS"
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
          g && y(p.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          j(),
          N(),
          g && y(p.text)
        ] }),
        p.text && !g && y(p.text, p.href)
      ] }),
      /* @__PURE__ */ r.jsx($i, { ...c, variant: f === "white" ? "white" : "default" })
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
const jv = (e) => Wu(e, {
  variant: "server",
  isClient: !1
}), zu = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...u
}) => {
  const d = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    n,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), m = c || e || a || s, v = () => {
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
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...u,
      children: [
        o && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: m && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          v(),
          c || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && m && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          v(),
          c || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
zu.displayName = "Hero";
const Ui = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: u,
  containerStyle: d
}) => {
  const f = (m, v = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: _e("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": v
      }),
      children: /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: m.URL,
          target: m.newWindow ? "_blank" : void 0,
          rel: m.newWindow ? "noopener noreferrer" : void 0,
          children: m.label
        }
      )
    },
    `${m.URL}-${m.label}`
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
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((m) => f(m)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((m) => f(m)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((m) => f(m)) }),
              s && s.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((m) => f(m)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((m) => f(m, !0)),
              (n || []).map((m) => f(m, !0)),
              (a || []).map((m) => f(m, !0)),
              (s || []).map((m) => f(m, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function Nr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Vs(e) {
  let t, n, a;
  e.length !== 2 ? (t = Nr, n = (l, c) => Nr(e(l), c), a = (l, c) => e(l) - c) : (t = e === Nr || e === Vu ? e : Gu, n = e, a = e);
  function s(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const f = u + d >>> 1;
        n(l[f], c) < 0 ? u = f + 1 : d = f;
      } while (u < d);
    }
    return u;
  }
  function o(l, c, u = 0, d = l.length) {
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
    const f = s(l, c, u, d - 1);
    return f > u && a(l[f - 1], c) > -a(l[f], c) ? f - 1 : f;
  }
  return { left: s, center: i, right: o };
}
function Gu() {
  return 0;
}
function Yu(e) {
  return e === null ? NaN : +e;
}
const qu = Vs(Nr), Xu = qu.right;
Vs(Yu).center;
function Wi(e, t) {
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
class vo extends Map {
  constructor(t, n = Ju) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(yo(this, t));
  }
  has(t) {
    return super.has(yo(this, t));
  }
  set(t, n) {
    return super.set(Ku(this, t), n);
  }
  delete(t) {
    return super.delete(Zu(this, t));
  }
}
function yo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Ku({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Zu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Ju(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Qu = Math.sqrt(50), ed = Math.sqrt(10), td = Math.sqrt(2);
function Mr(e, t, n) {
  const a = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Qu ? 10 : o >= ed ? 5 : o >= td ? 2 : 1;
  let l, c, u;
  return s < 0 ? (u = Math.pow(10, -s) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, s) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= n && n < 2 ? Mr(e, t, n * 2) : [l, c, u];
}
function nd(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? Mr(t, e, n) : Mr(e, t, n);
  if (!(o >= s)) return [];
  const l = o - s + 1, c = new Array(l);
  if (a)
    if (i < 0) for (let u = 0; u < l; ++u) c[u] = (o - u) / -i;
    else for (let u = 0; u < l; ++u) c[u] = (o - u) * i;
  else if (i < 0) for (let u = 0; u < l; ++u) c[u] = (s + u) / -i;
  else for (let u = 0; u < l; ++u) c[u] = (s + u) * i;
  return c;
}
function rs(e, t, n) {
  return t = +t, e = +e, n = +n, Mr(e, t, n)[2];
}
function as(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, s = a ? rs(t, e, n) : rs(e, t, n);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function rd(e, t, n) {
  e = +e, t = +t, n = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +n;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * n;
  return o;
}
function Sa(e, t) {
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
const wo = Symbol("implicit");
function zi() {
  var e = new vo(), t = [], n = [], a = wo;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== wo) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return n[i % n.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new vo();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (n = Array.from(o), s) : n.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return zi(t, n).unknown(a);
  }, Sa.apply(s, arguments), s;
}
function Vi() {
  var e = zi().unknown(void 0), t = e.domain, n = e.range, a = 0, s = 1, o, i, l = !1, c = 0, u = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, m = s < a, v = m ? s : a, x = m ? a : s;
    o = (x - v) / Math.max(1, h - c + u * 2), l && (o = Math.floor(o)), v += (x - v - o * (h - c)) * d, i = o * (1 - c), l && (v = Math.round(v), i = Math.round(i));
    var p = rd(h).map(function(g) {
      return v + o * g;
    });
    return n(m ? p.reverse() : p);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([a, s] = h, a = +a, s = +s, f()) : [a, s];
  }, e.rangeRound = function(h) {
    return [a, s] = h, a = +a, s = +s, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return o;
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
    return Vi(t(), [a, s]).round(l).paddingInner(c).paddingOuter(u).align(d);
  }, Sa.apply(f(), arguments);
}
function Gs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Gi(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function hr() {
}
var or = 0.7, Pr = 1 / or, Bn = "\\s*([+-]?\\d+)\\s*", ir = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ad = /^#([0-9a-f]{3,8})$/, sd = new RegExp(`^rgb\\(${Bn},${Bn},${Bn}\\)$`), od = new RegExp(`^rgb\\(${Bt},${Bt},${Bt}\\)$`), id = new RegExp(`^rgba\\(${Bn},${Bn},${Bn},${ir}\\)$`), ld = new RegExp(`^rgba\\(${Bt},${Bt},${Bt},${ir}\\)$`), cd = new RegExp(`^hsl\\(${ir},${Bt},${Bt}\\)$`), ud = new RegExp(`^hsla\\(${ir},${Bt},${Bt},${ir}\\)$`), _o = {
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
Gs(hr, lr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: So,
  // Deprecated! Use color.formatHex.
  formatHex: So,
  formatHex8: dd,
  formatHsl: fd,
  formatRgb: ko,
  toString: ko
});
function So() {
  return this.rgb().formatHex();
}
function dd() {
  return this.rgb().formatHex8();
}
function fd() {
  return Yi(this).formatHsl();
}
function ko() {
  return this.rgb().formatRgb();
}
function lr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ad.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Co(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? _r(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? _r(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sd.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = od.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = id.exec(e)) ? _r(t[1], t[2], t[3], t[4]) : (t = ld.exec(e)) ? _r(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cd.exec(e)) ? To(t[1], t[2] / 100, t[3] / 100, 1) : (t = ud.exec(e)) ? To(t[1], t[2] / 100, t[3] / 100, t[4]) : _o.hasOwnProperty(e) ? Co(_o[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function Co(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function _r(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new Nt(e, t, n, a);
}
function pd(e) {
  return e instanceof hr || (e = lr(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function ss(e, t, n, a) {
  return arguments.length === 1 ? pd(e) : new Nt(e, t, n, a ?? 1);
}
function Nt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Gs(Nt, ss, Gi(hr, {
  brighter(e) {
    return e = e == null ? Pr : Math.pow(Pr, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? or : Math.pow(or, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(vn(this.r), vn(this.g), vn(this.b), Fr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: No,
  // Deprecated! Use color.formatHex.
  formatHex: No,
  formatHex8: hd,
  formatRgb: jo,
  toString: jo
}));
function No() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}`;
}
function hd() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}${bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function jo() {
  const e = Fr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${vn(this.r)}, ${vn(this.g)}, ${vn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Fr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function vn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function bn(e) {
  return e = vn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function To(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mt(e, t, n, a);
}
function Yi(e) {
  if (e instanceof Mt) return new Mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof hr || (e = lr(e)), !e) return new Mt();
  if (e instanceof Mt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, s = Math.min(t, n, a), o = Math.max(t, n, a), i = NaN, l = o - s, c = (o + s) / 2;
  return l ? (t === o ? i = (n - a) / l + (n < a) * 6 : n === o ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= c < 0.5 ? o + s : 2 - o - s, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Mt(i, l, c, e.opacity);
}
function md(e, t, n, a) {
  return arguments.length === 1 ? Yi(e) : new Mt(e, t, n, a ?? 1);
}
function Mt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Gs(Mt, md, Gi(hr, {
  brighter(e) {
    return e = e == null ? Pr : Math.pow(Pr, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? or : Math.pow(or, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - a;
    return new Nt(
      Ea(e >= 240 ? e - 240 : e + 120, s, a),
      Ea(e, s, a),
      Ea(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new Mt(Do(this.h), Sr(this.s), Sr(this.l), Fr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Fr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Do(this.h)}, ${Sr(this.s) * 100}%, ${Sr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Do(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Sr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ea(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ys = (e) => () => e;
function gd(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function xd(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function bd(e) {
  return (e = +e) == 1 ? qi : function(t, n) {
    return n - t ? xd(t, n, e) : Ys(isNaN(t) ? n : t);
  };
}
function qi(e, t) {
  var n = t - e;
  return n ? gd(e, n) : Ys(isNaN(e) ? t : e);
}
const Io = (function e(t) {
  var n = bd(t);
  function a(s, o) {
    var i = n((s = ss(s)).r, (o = ss(o)).r), l = n(s.g, o.g), c = n(s.b, o.b), u = qi(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = c(d), s.opacity = u(d), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function vd(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function yd(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function wd(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, s = new Array(a), o = new Array(n), i;
  for (i = 0; i < a; ++i) s[i] = qs(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function _d(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Lr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Sd(e, t) {
  var n = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = qs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in n) a[s] = n[s](o);
    return a;
  };
}
var os = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ra = new RegExp(os.source, "g");
function kd(e) {
  return function() {
    return e;
  };
}
function Cd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Nd(e, t) {
  var n = os.lastIndex = Ra.lastIndex = 0, a, s, o, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = os.exec(e)) && (s = Ra.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, c.push({ i, x: Lr(a, s) })), n = Ra.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? c[0] ? Cd(c[0].x) : kd(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d) l[(f = c[d]).i] = f.x(u);
    return l.join("");
  });
}
function qs(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Ys(t) : (n === "number" ? Lr : n === "string" ? (a = lr(t)) ? (t = a, Io) : Nd : t instanceof lr ? Io : t instanceof Date ? _d : yd(t) ? vd : Array.isArray(t) ? wd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Sd : Lr)(e, t);
}
function jd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Td(e) {
  return function() {
    return e;
  };
}
function Dd(e) {
  return +e;
}
var $o = [0, 1];
function Ln(e) {
  return e;
}
function is(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Td(isNaN(t) ? NaN : 0.5);
}
function Id(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function $d(e, t, n) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = is(s, a), o = n(i, o)) : (a = is(a, s), o = n(o, i)), function(l) {
    return o(a(l));
  };
}
function Md(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = is(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var c = Xu(e, l, 1, a) - 1;
    return o[c](s[c](l));
  };
}
function Xi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Pd() {
  var e = $o, t = $o, n = qs, a, s, o, i = Ln, l, c, u;
  function d() {
    var h = Math.min(e.length, t.length);
    return i !== Ln && (i = Id(e[0], e[h - 1])), l = h > 2 ? Md : $d, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(s((u || (u = l(t, e.map(a), Lr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Dd), d()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = jd, d();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Ln, d()) : i !== Ln;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, m) {
    return a = h, s = m, d();
  };
}
function Ki() {
  return Pd()(Ln, Ln);
}
function Fd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Ar(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function zn(e) {
  return e = Ar(Math.abs(e)), e ? e[1] : NaN;
}
function Ld(e, t) {
  return function(n, a) {
    for (var s = n.length, o = [], i = 0, l = e[0], c = 0; s > 0 && l > 0 && (c + l + 1 > a && (l = Math.max(1, a - c)), o.push(n.substring(s -= l, s + l)), !((c += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Ad(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Ed = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Er(e) {
  if (!(t = Ed.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Xs({
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
Er.prototype = Xs.prototype;
function Xs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Xs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Rd(e) {
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
var Zi;
function Bd(e, t) {
  var n = Ar(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1], o = s - (Zi = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + Ar(e, Math.max(0, t + o - 1))[0];
}
function Mo(e, t) {
  var n = Ar(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const Po = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Fd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Mo(e * 100, t),
  r: Mo,
  s: Bd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Fo(e) {
  return e;
}
var Lo = Array.prototype.map, Ao = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Hd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Fo : Ld(Lo.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Fo : Ad(Lo.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = Er(f);
    var h = f.fill, m = f.align, v = f.sign, x = f.symbol, p = f.zero, g = f.width, k = f.comma, M = f.precision, D = f.trim, b = f.type;
    b === "n" ? (k = !0, b = "g") : Po[b] || (M === void 0 && (M = 12), D = !0, b = "g"), (p || h === "0" && m === "=") && (p = !0, h = "0", m = "=");
    var T = x === "$" ? n : x === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", j = x === "$" ? a : /[%p]/.test(b) ? i : "", N = Po[b], y = /[defgprs%]/.test(b);
    M = M === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function $(S) {
      var _ = T, F = j, w, I, C;
      if (b === "c")
        F = N(S) + F, S = "";
      else {
        S = +S;
        var P = S < 0 || 1 / S < 0;
        if (S = isNaN(S) ? c : N(Math.abs(S), M), D && (S = Rd(S)), P && +S == 0 && v !== "+" && (P = !1), _ = (P ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + _, F = (b === "s" ? Ao[8 + Zi / 3] : "") + F + (P && v === "(" ? ")" : ""), y) {
          for (w = -1, I = S.length; ++w < I; )
            if (C = S.charCodeAt(w), 48 > C || C > 57) {
              F = (C === 46 ? s + S.slice(w + 1) : S.slice(w)) + F, S = S.slice(0, w);
              break;
            }
        }
      }
      k && !p && (S = t(S, 1 / 0));
      var ee = _.length + S.length + F.length, Y = ee < g ? new Array(g - ee + 1).join(h) : "";
      switch (k && p && (S = t(Y + S, Y.length ? g - F.length : 1 / 0), Y = ""), m) {
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
      return o(S);
    }
    return $.toString = function() {
      return f + "";
    }, $;
  }
  function d(f, h) {
    var m = u((f = Er(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(zn(h) / 3))) * 3, x = Math.pow(10, -v), p = Ao[8 + v / 3];
    return function(g) {
      return m(x * g) + p;
    };
  }
  return {
    format: u,
    formatPrefix: d
  };
}
var kr, Ji, Qi;
Od({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Od(e) {
  return kr = Hd(e), Ji = kr.format, Qi = kr.formatPrefix, kr;
}
function Ud(e) {
  return Math.max(0, -zn(Math.abs(e)));
}
function Wd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zn(t) / 3))) * 3 - zn(Math.abs(e)));
}
function zd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, zn(t) - zn(e)) + 1;
}
function Vd(e, t, n, a) {
  var s = as(e, t, n), o;
  switch (a = Er(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = Wd(s, i)) && (a.precision = o), Qi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = zd(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = Ud(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return Ji(a);
}
function Gd(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return nd(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var s = t();
    return Vd(s[0], s[s.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], c, u, d = 10;
    for (l < i && (u = i, i = l, l = u, u = s, s = o, o = u); d-- > 0; ) {
      if (u = rs(i, l, n), u === c)
        return a[s] = i, a[o] = l, t(a);
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
function Rr() {
  var e = Ki();
  return e.copy = function() {
    return Xi(e, Rr());
  }, Sa.apply(e, arguments), Gd(e);
}
function Yd(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, s = e[n], o = e[a], i;
  return o < s && (i = n, n = a, a = i, i = s, s = o, o = i), e[n] = t.floor(s), e[a] = t.ceil(o), e;
}
const Ba = /* @__PURE__ */ new Date(), Ha = /* @__PURE__ */ new Date();
function ct(e, t, n, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const c = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (u < o && o < i);
    return c;
  }, s.filter = (o) => ct((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), n && (s.count = (o, i) => (Ba.setTime(+o), Ha.setTime(+i), e(Ba), e(Ha), Math.floor(n(Ba, Ha))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const Br = ct(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Br.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ct((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Br);
Br.range;
const nn = 1e3, $t = nn * 60, rn = $t * 60, sn = rn * 24, Ks = sn * 7, Eo = sn * 30, Oa = sn * 365, An = ct((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * nn);
}, (e, t) => (t - e) / nn, (e) => e.getUTCSeconds());
An.range;
const Zs = ct((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nn);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getMinutes());
Zs.range;
const qd = ct((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCMinutes());
qd.range;
const Js = ct((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nn - e.getMinutes() * $t);
}, (e, t) => {
  e.setTime(+e + t * rn);
}, (e, t) => (t - e) / rn, (e) => e.getHours());
Js.range;
const Xd = ct((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * rn);
}, (e, t) => (t - e) / rn, (e) => e.getUTCHours());
Xd.range;
const mr = ct(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * $t) / sn,
  (e) => e.getDate() - 1
);
mr.range;
const Qs = ct((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sn, (e) => e.getUTCDate() - 1);
Qs.range;
const Kd = ct((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sn, (e) => Math.floor(e / sn));
Kd.range;
function Nn(e) {
  return ct((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * $t) / Ks);
}
const ka = Nn(0), Hr = Nn(1), Zd = Nn(2), Jd = Nn(3), Vn = Nn(4), Qd = Nn(5), ef = Nn(6);
ka.range;
Hr.range;
Zd.range;
Jd.range;
Vn.range;
Qd.range;
ef.range;
function jn(e) {
  return ct((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Ks);
}
const el = jn(0), Or = jn(1), tf = jn(2), nf = jn(3), Gn = jn(4), rf = jn(5), af = jn(6);
el.range;
Or.range;
tf.range;
nf.range;
Gn.range;
rf.range;
af.range;
const cr = ct((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
cr.range;
const sf = ct((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
sf.range;
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
function of(e, t, n, a, s, o) {
  const i = [
    [An, 1, nn],
    [An, 5, 5 * nn],
    [An, 15, 15 * nn],
    [An, 30, 30 * nn],
    [o, 1, $t],
    [o, 5, 5 * $t],
    [o, 15, 15 * $t],
    [o, 30, 30 * $t],
    [s, 1, rn],
    [s, 3, 3 * rn],
    [s, 6, 6 * rn],
    [s, 12, 12 * rn],
    [a, 1, sn],
    [a, 2, 2 * sn],
    [n, 1, Ks],
    [t, 1, Eo],
    [t, 3, 3 * Eo],
    [e, 1, Oa]
  ];
  function l(u, d, f) {
    const h = d < u;
    h && ([u, d] = [d, u]);
    const m = f && typeof f.range == "function" ? f : c(u, d, f), v = m ? m.range(u, +d + 1) : [];
    return h ? v.reverse() : v;
  }
  function c(u, d, f) {
    const h = Math.abs(d - u) / f, m = Vs(([, , p]) => p).right(i, h);
    if (m === i.length) return e.every(as(u / Oa, d / Oa, f));
    if (m === 0) return Br.every(Math.max(as(u, d, f), 1));
    const [v, x] = i[h / i[m - 1][2] < i[m][2] / h ? m - 1 : m];
    return v.every(x);
  }
  return [l, c];
}
const [lf, cf] = of(on, cr, ka, mr, Js, Zs);
function Ua(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Wa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Jn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function uf(e) {
  var t = e.dateTime, n = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = Qn(s), d = er(s), f = Qn(o), h = er(o), m = Qn(i), v = er(i), x = Qn(l), p = er(l), g = Qn(c), k = er(c), M = {
    a: P,
    A: ee,
    b: Y,
    B: R,
    c: null,
    d: Wo,
    e: Wo,
    f: Pf,
    g: Wf,
    G: Vf,
    H: If,
    I: $f,
    j: Mf,
    L: tl,
    m: Ff,
    M: Lf,
    p: B,
    q: H,
    Q: Go,
    s: Yo,
    S: Af,
    u: Ef,
    U: Rf,
    V: Bf,
    w: Hf,
    W: Of,
    x: null,
    X: null,
    y: Uf,
    Y: zf,
    Z: Gf,
    "%": Vo
  }, D = {
    a: re,
    A: z,
    b: de,
    B: ge,
    c: null,
    d: zo,
    e: zo,
    f: Kf,
    g: op,
    G: lp,
    H: Yf,
    I: qf,
    j: Xf,
    L: rl,
    m: Zf,
    M: Jf,
    p: le,
    q: ie,
    Q: Go,
    s: Yo,
    S: Qf,
    u: ep,
    U: tp,
    V: np,
    w: rp,
    W: ap,
    x: null,
    X: null,
    y: sp,
    Y: ip,
    Z: cp,
    "%": Vo
  }, b = {
    a: $,
    A: S,
    b: _,
    B: F,
    c: w,
    d: Oo,
    e: Oo,
    f: Nf,
    g: Ho,
    G: Bo,
    H: Uo,
    I: Uo,
    j: _f,
    L: Cf,
    m: wf,
    M: Sf,
    p: y,
    q: yf,
    Q: Tf,
    s: Df,
    S: kf,
    u: mf,
    U: gf,
    V: xf,
    w: hf,
    W: bf,
    x: I,
    X: C,
    y: Ho,
    Y: Bo,
    Z: vf,
    "%": jf
  };
  M.x = T(n, M), M.X = T(a, M), M.c = T(t, M), D.x = T(n, D), D.X = T(a, D), D.c = T(t, D);
  function T(Z, te) {
    return function(ce) {
      var V = [], ue = -1, se = 0, he = Z.length, E, U, oe;
      for (ce instanceof Date || (ce = /* @__PURE__ */ new Date(+ce)); ++ue < he; )
        Z.charCodeAt(ue) === 37 && (V.push(Z.slice(se, ue)), (U = Ro[E = Z.charAt(++ue)]) != null ? E = Z.charAt(++ue) : U = E === "e" ? " " : "0", (oe = te[E]) && (E = oe(ce, U)), V.push(E), se = ue + 1);
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
        "w" in V || (V.w = 1), "Z" in V ? (se = Wa(Jn(V.y, 0, 1)), he = se.getUTCDay(), se = he > 4 || he === 0 ? Or.ceil(se) : Or(se), se = Qs.offset(se, (V.V - 1) * 7), V.y = se.getUTCFullYear(), V.m = se.getUTCMonth(), V.d = se.getUTCDate() + (V.w + 6) % 7) : (se = Ua(Jn(V.y, 0, 1)), he = se.getDay(), se = he > 4 || he === 0 ? Hr.ceil(se) : Hr(se), se = mr.offset(se, (V.V - 1) * 7), V.y = se.getFullYear(), V.m = se.getMonth(), V.d = se.getDate() + (V.w + 6) % 7);
      } else ("W" in V || "U" in V) && ("w" in V || (V.w = "u" in V ? V.u % 7 : "W" in V ? 1 : 0), he = "Z" in V ? Wa(Jn(V.y, 0, 1)).getUTCDay() : Ua(Jn(V.y, 0, 1)).getDay(), V.m = 0, V.d = "W" in V ? (V.w + 6) % 7 + V.W * 7 - (he + 5) % 7 : V.w + V.U * 7 - (he + 6) % 7);
      return "Z" in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, Wa(V)) : Ua(V);
    };
  }
  function N(Z, te, ce, V) {
    for (var ue = 0, se = te.length, he = ce.length, E, U; ue < se; ) {
      if (V >= he) return -1;
      if (E = te.charCodeAt(ue++), E === 37) {
        if (E = te.charAt(ue++), U = b[E in Ro ? te.charAt(ue++) : E], !U || (V = U(Z, ce, V)) < 0) return -1;
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
    var V = m.exec(te.slice(ce));
    return V ? (Z.w = v.get(V[0].toLowerCase()), ce + V[0].length) : -1;
  }
  function S(Z, te, ce) {
    var V = f.exec(te.slice(ce));
    return V ? (Z.w = h.get(V[0].toLowerCase()), ce + V[0].length) : -1;
  }
  function _(Z, te, ce) {
    var V = g.exec(te.slice(ce));
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
    return o[Z.getDay()];
  }
  function Y(Z) {
    return c[Z.getMonth()];
  }
  function R(Z) {
    return l[Z.getMonth()];
  }
  function B(Z) {
    return s[+(Z.getHours() >= 12)];
  }
  function H(Z) {
    return 1 + ~~(Z.getMonth() / 3);
  }
  function re(Z) {
    return i[Z.getUTCDay()];
  }
  function z(Z) {
    return o[Z.getUTCDay()];
  }
  function de(Z) {
    return c[Z.getUTCMonth()];
  }
  function ge(Z) {
    return l[Z.getUTCMonth()];
  }
  function le(Z) {
    return s[+(Z.getUTCHours() >= 12)];
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
var Ro = { "-": "", _: " ", 0: "0" }, ft = /^\s*\d+/, df = /^%/, ff = /[\\^$*+?|[\]().{}]/g;
function Ue(e, t, n) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function pf(e) {
  return e.replace(ff, "\\$&");
}
function Qn(e) {
  return new RegExp("^(?:" + e.map(pf).join("|") + ")", "i");
}
function er(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function hf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function mf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function gf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function xf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function bf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Bo(e, t, n) {
  var a = ft.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Ho(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function vf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function yf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function wf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Oo(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function _f(e, t, n) {
  var a = ft.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Uo(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Sf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function kf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Cf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Nf(e, t, n) {
  var a = ft.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function jf(e, t, n) {
  var a = df.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Tf(e, t, n) {
  var a = ft.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Df(e, t, n) {
  var a = ft.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Wo(e, t) {
  return Ue(e.getDate(), t, 2);
}
function If(e, t) {
  return Ue(e.getHours(), t, 2);
}
function $f(e, t) {
  return Ue(e.getHours() % 12 || 12, t, 2);
}
function Mf(e, t) {
  return Ue(1 + mr.count(on(e), e), t, 3);
}
function tl(e, t) {
  return Ue(e.getMilliseconds(), t, 3);
}
function Pf(e, t) {
  return tl(e, t) + "000";
}
function Ff(e, t) {
  return Ue(e.getMonth() + 1, t, 2);
}
function Lf(e, t) {
  return Ue(e.getMinutes(), t, 2);
}
function Af(e, t) {
  return Ue(e.getSeconds(), t, 2);
}
function Ef(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Rf(e, t) {
  return Ue(ka.count(on(e) - 1, e), t, 2);
}
function nl(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Vn(e) : Vn.ceil(e);
}
function Bf(e, t) {
  return e = nl(e), Ue(Vn.count(on(e), e) + (on(e).getDay() === 4), t, 2);
}
function Hf(e) {
  return e.getDay();
}
function Of(e, t) {
  return Ue(Hr.count(on(e) - 1, e), t, 2);
}
function Uf(e, t) {
  return Ue(e.getFullYear() % 100, t, 2);
}
function Wf(e, t) {
  return e = nl(e), Ue(e.getFullYear() % 100, t, 2);
}
function zf(e, t) {
  return Ue(e.getFullYear() % 1e4, t, 4);
}
function Vf(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Vn(e) : Vn.ceil(e), Ue(e.getFullYear() % 1e4, t, 4);
}
function Gf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ue(t / 60 | 0, "0", 2) + Ue(t % 60, "0", 2);
}
function zo(e, t) {
  return Ue(e.getUTCDate(), t, 2);
}
function Yf(e, t) {
  return Ue(e.getUTCHours(), t, 2);
}
function qf(e, t) {
  return Ue(e.getUTCHours() % 12 || 12, t, 2);
}
function Xf(e, t) {
  return Ue(1 + Qs.count(kn(e), e), t, 3);
}
function rl(e, t) {
  return Ue(e.getUTCMilliseconds(), t, 3);
}
function Kf(e, t) {
  return rl(e, t) + "000";
}
function Zf(e, t) {
  return Ue(e.getUTCMonth() + 1, t, 2);
}
function Jf(e, t) {
  return Ue(e.getUTCMinutes(), t, 2);
}
function Qf(e, t) {
  return Ue(e.getUTCSeconds(), t, 2);
}
function ep(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function tp(e, t) {
  return Ue(el.count(kn(e) - 1, e), t, 2);
}
function al(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Gn(e) : Gn.ceil(e);
}
function np(e, t) {
  return e = al(e), Ue(Gn.count(kn(e), e) + (kn(e).getUTCDay() === 4), t, 2);
}
function rp(e) {
  return e.getUTCDay();
}
function ap(e, t) {
  return Ue(Or.count(kn(e) - 1, e), t, 2);
}
function sp(e, t) {
  return Ue(e.getUTCFullYear() % 100, t, 2);
}
function op(e, t) {
  return e = al(e), Ue(e.getUTCFullYear() % 100, t, 2);
}
function ip(e, t) {
  return Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function lp(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Gn(e) : Gn.ceil(e), Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function cp() {
  return "+0000";
}
function Vo() {
  return "%";
}
function Go(e) {
  return +e;
}
function Yo(e) {
  return Math.floor(+e / 1e3);
}
var $n, sl;
up({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function up(e) {
  return $n = uf(e), sl = $n.format, $n.parse, $n.utcFormat, $n.utcParse, $n;
}
function dp(e) {
  return new Date(e);
}
function fp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ol(e, t, n, a, s, o, i, l, c, u) {
  var d = Ki(), f = d.invert, h = d.domain, m = u(".%L"), v = u(":%S"), x = u("%I:%M"), p = u("%I %p"), g = u("%a %d"), k = u("%b %d"), M = u("%B"), D = u("%Y");
  function b(T) {
    return (c(T) < T ? m : l(T) < T ? v : i(T) < T ? x : o(T) < T ? p : a(T) < T ? s(T) < T ? g : k : n(T) < T ? M : D)(T);
  }
  return d.invert = function(T) {
    return new Date(f(T));
  }, d.domain = function(T) {
    return arguments.length ? h(Array.from(T, fp)) : h().map(dp);
  }, d.ticks = function(T) {
    var j = h();
    return e(j[0], j[j.length - 1], T ?? 10);
  }, d.tickFormat = function(T, j) {
    return j == null ? b : u(j);
  }, d.nice = function(T) {
    var j = h();
    return (!T || typeof T.range != "function") && (T = t(j[0], j[j.length - 1], T ?? 10)), T ? h(Yd(j, T)) : d;
  }, d.copy = function() {
    return Xi(d, ol(e, t, n, a, s, o, i, l, c, u));
  }, d;
}
function eo() {
  return Sa.apply(ol(lf, cf, on, cr, ka, mr, Js, Zs, An, sl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function pp({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const u = Oe(null), [d, f] = He(!1), [h, m] = He(!1), v = t(e.start), x = t(e.end), p = Math.max(x - v, 20), g = () => {
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
    m(!0), l?.();
  }, y = () => {
    m(!1);
  }, $ = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (h || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), S = {
    "--task-left": `${v}px`,
    "--task-width": `${p}px`,
    "--task-color": g(),
    left: `${v}px`,
    width: `${p}px`,
    backgroundColor: g()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": o,
      className: $,
      style: S,
      onClick: M,
      onDoubleClick: D,
      onKeyDown: b,
      onMouseDown: T,
      onMouseUp: j,
      onFocus: N,
      onBlur: y,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
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
function hp({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let m = e.getTime(); m <= t.getTime(); m += 864e5)
    a.push(new Date(m));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = He(-1), c = Oe(null), u = (m) => {
    if (m.key === "ArrowLeft") {
      m.preventDefault();
      const v = Math.max(0, i === -1 ? 0 : i - 1);
      l(v), h(v);
    } else if (m.key === "ArrowRight") {
      m.preventDefault();
      const v = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(v), h(v);
    } else if (m.key === "ArrowDown")
      m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (m.key === "Home")
      m.preventDefault(), l(0), h(0);
    else if (m.key === "End") {
      m.preventDefault();
      const v = a.length - 1;
      l(v), h(v);
    }
  }, d = (m) => {
    if (m.key === "ArrowDown")
      m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (m.key === "ArrowRight") {
      m.preventDefault();
      const v = c.current;
      v && v.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (m) => {
    const v = c.current?.querySelector(`[data-date-index="${m}"]`);
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
            children: a.map((m, v) => {
              const x = m.getTime() === o.getTime(), p = i === v;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": v,
                  className: `date-column ${x ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${m.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${x ? " (Today)" : ""}`,
                  onFocus: () => l(v),
                  onKeyDown: u,
                  children: m.toLocaleDateString("en-GB", {
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
function mp({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, c] = He(!1), [u, d] = He(-1), f = Oe(null);
  Ve(() => {
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
          x.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          x.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`) : null)?.focus();
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
        x.preventDefault(), u >= 0 && s?.(t[u]);
        break;
      case "Escape":
        x.preventDefault(), c(!1), d(-1), f.current?.focus();
        break;
    }
  }, m = (x) => {
    switch (x.key) {
      case "ArrowUp":
        x.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        x.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`) : null)?.focus();
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
            onKeyDown: m,
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
              pp,
              {
                task: x,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: s,
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
function Tv({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Oe(null), [l, c] = He(800), u = $e(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const x = new Date(n);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [n]), d = $e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const x = new Date(a);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [a]), f = $e(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  Ve(() => {
    if (!i.current || typeof window > "u") return;
    const x = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!x) return;
    const p = new x((g) => {
      const k = g[0];
      k && c(Math.max(k.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const h = $e(
    () => eo().domain([u, d]).range([0, l]),
    [u, d, l]
  ), m = $e(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const g = x.get(p.resourceId) || [];
      g.push(p), x.set(p.resourceId, g);
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
        /* @__PURE__ */ r.jsx(hp, { viewStart: u, viewEnd: d, dateCount: f }),
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
              mp,
              {
                resource: x,
                tasks: m.get(x.id) || [],
                scale: h,
                onTaskClick: s,
                onTaskDoubleClick: o,
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
const Ur = ({
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
) }), gp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? xt.Children.toArray(t).filter(
    (p) => xt.isValidElement(p) && (p.type === Ur || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], u = () => t ? c() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const x = u();
    if (x && x.length > 0) {
      const p = x.slice().reverse().find((g) => g.href && !g.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = u(), h = d(), m = _e(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), v = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: m,
      "aria-label": v,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          xt.Children.map(t, (x, p) => xt.isValidElement(x) && (x.type === Ur || x.type?.displayName === "BreadcrumbItem") ? xt.cloneElement(x, { key: p }) : null)
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
}, xp = gp;
xp.Item = Ur;
Ur.displayName = "BreadcrumbItem";
const il = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [s, o] = He(!1);
  Ve(() => {
    o(!0);
  }, []), Ve(() => {
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
  }, [s]);
  const i = _e("nhsuk-skip-link", n);
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
}, Dv = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = _e("nhsuk-pagination", s);
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
}, Iv = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = _e("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, ll = xt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
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
  ].filter(Boolean).join(" "), m = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
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
  }, p = () => d.children ? d.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: o }) : null, g = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
        /* @__PURE__ */ r.jsxs("div", { className: m, children: [
          x(),
          p(),
          g()
        ] })
      ]
    }
  );
});
ll.displayName = "Card";
const $v = ({
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
}, Mv = ({
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
}, Pv = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": u,
  id: d,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": m
}) => {
  const v = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), x = [
    "nhsuk-care-card__heading",
    s
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
  }, g = () => c || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: v,
      "data-testid": u,
      id: d,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": m,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: g() })
      ]
    }
  );
}, bp = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
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
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    an,
    {
      level: s,
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
  ) : o ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ r.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ r.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    f()
  ] });
}, Fv = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...s
}) => {
  const o = _e("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: o, ...s, children: i() });
}, Lv = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const s = _e(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, u) => /* @__PURE__ */ r.jsx(
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
            o(c),
            c.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    u
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: s, ...a, children: e.map((l, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, tr = { current: null }, vp = () => {
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
}, yp = (e) => {
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
}, Wr = (e, t, n) => {
  if (n || !t) return e;
  const a = vp();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return yp(e);
}, wp = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: u,
  tableClasses: d,
  classes: f,
  attributes: h,
  "data-testid": m,
  columns: v,
  data: x,
  visuallyHiddenCaption: p = !1
}) => {
  const g = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), k = _e(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
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
      ...o && { role: "columnheader" },
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
      }, ee = Wr(I, y.codeLanguage);
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
    const _ = s && S || y.rowHeader, F = _e(
      _ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${_ ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), w = {
      ..._ && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...o && {
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
      }, H = Wr(
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
      o && y.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
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
      ...o && { role: "table" },
      ...h,
      ...m && { "data-testid": m },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: _e(g, p && "nhsuk-u-visually-hidden"), children: n }),
        T && T.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...o && { role: "row" }, children: T.map(
              (y, $) => D(y, $)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: j && j.map((y, $) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: y.map(
              (S, _) => b(S, _, _ === 0)
            )
          },
          $
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(bp, { className: u, children: [
    i && /* @__PURE__ */ r.jsx(an, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    N()
  ] }) : M ? /* @__PURE__ */ r.jsx("div", { className: M, children: N() }) : N();
}, _p = ({
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
}, cl = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...s, ...a, children: n });
}, ul = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: u,
  rowspan: d,
  attributes: f,
  responsive: h,
  as: m = "th"
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
      className: _e("nhsuk-table__code", o, {
        "nhsuk-table__code--block": D,
        "nhsuk-table__code--inline": !D
      }),
      ...s ? { "data-language": s } : {}
    }, T = Wr(
      M,
      s,
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
  const g = m;
  return /* @__PURE__ */ r.jsx(g, { className: v, ...x, children: p });
}, Sp = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: u,
  rowspan: d,
  attributes: f,
  responsive: h,
  rowHeader: m
}) => {
  const v = !!m, x = v ? "th" : "td", p = _e(
    v ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${v ? "header" : "cell"}--${l}`,
    c
  ), g = {
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
      className: _e("nhsuk-table__code", o, {
        "nhsuk-table__code--block": b,
        "nhsuk-table__code--inline": !b
      }),
      ...s ? { "data-language": s } : {}
    }, j = Wr(D, s, i);
    k = b ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: j } }) }) : /* @__PURE__ */ r.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: j } });
  } else k = e;
  return /* @__PURE__ */ r.jsx(x, { className: p, ...g, children: k });
}, ln = wp;
ln.Caption = _p;
ln.BodyRow = cl;
ln.HeaderCell = ul;
ln.Cell = Sp;
let qo = !1, Xo = !1;
Object.defineProperty(ln, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !qo && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), qo = !0), cl;
  }
});
Object.defineProperty(ln, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Xo && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Xo = !0), ul;
  }
});
const Av = qn(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: u,
  "data-testid": d,
  ...f
}, h) => {
  const m = n !== void 0, [v, x] = He(() => t || e[0]?.id || ""), p = m ? n : v, g = Oe(null), k = Oe(/* @__PURE__ */ new Map()), M = ve(($) => {
    m || x($), a?.($);
  }, [m, a]), D = ve(($) => {
    s?.($), l && M($);
  }, [s, l, M]), b = ve(($, S) => {
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
  Di(h, () => ({
    focusTab: j,
    getActiveTab: () => p,
    getTabListElement: () => g.current
  }), [j, p]);
  const N = ve(($) => {
    const S = $.relatedTarget;
    g.current?.contains(S) || o?.();
  }, [o]), y = _e("nhsuk-tabs", c);
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
            ref: g,
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
}), kp = qn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...c
  }, u) => {
    const d = [
      "nhsuk-details",
      o
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
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
kp.displayName = "Details";
const Cp = qn(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    o && c.push(o);
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
    ), f = (m) => t === "cross" && !a ? `do not ${m}` : m, h = () => /* @__PURE__ */ r.jsx(
      an,
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
        className: c.join(" "),
        ...i,
        children: [
          h(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: u.join(" "), role: "list", children: n.map((m, v) => /* @__PURE__ */ r.jsxs("li", { children: [
            d(),
            f(m.item)
          ] }, v)) }) })
        ]
      }
    );
  }
);
Cp.displayName = "DoDontList";
const Np = qn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...c
  }, u) => {
    const d = [
      "nhsuk-expander",
      o
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
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Np.displayName = "Expander";
const jp = qn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, f = `${t}-${u}-status`, h = !!l.href, m = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), v = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Tp,
        {
          item: l,
          itemClasses: m,
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
        ref: s,
        className: o,
        ...a,
        children: e.map(i)
      }
    );
  }
), Tp = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
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
        "aria-describedby": o,
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
    return e.status.tag ? d = /* @__PURE__ */ r.jsx(Ye, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ r.jsx("div", { className: u, id: s, children: d });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
jp.displayName = "TaskList";
const Ev = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), c = () => s || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), u = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: u,
      ...i,
      children: [
        Ni(
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
}, Rv = ({
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
}, Dp = ({
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
      $r,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: s,
        onChange: (c) => o?.(c.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      $r,
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
] }), Ip = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Ye, { color: $p(n.status), text: n.label }) }, n.status)) });
function $p(e) {
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
const Bv = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: s,
  selectionMode: o = "single",
  a11yMode: i,
  className: l,
  style: c,
  getSlotAriaLabel: u,
  toolbar: d,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: m = !0,
  legendPlacement: v = "bottom",
  onA11yModeChange: x
}) => {
  const [p, g] = He("grid"), k = i || p, [M, D] = He(a || []), b = n ?? M, T = $e(() => {
    const w = /* @__PURE__ */ new Set();
    return e.forEach((I) => w.add(new Date(I.start).getTime())), Array.from(w).sort((I, C) => I - C);
  }, [e]), j = $e(() => {
    const w = {};
    return e.forEach((I) => {
      const C = new Date(I.start).getTime();
      w[C] || (w[C] = {});
      const P = I.capacity - I.booked - (I.held || 0);
      w[C][I.sessionId] = { slot: I, remaining: P };
    }), w;
  }, [e]), N = ve((w) => {
    if (o === "single") {
      const I = [w.id];
      n || D(I), s?.(I, { lastAction: "select" });
    } else {
      const I = b.includes(w.id), C = I ? b.filter((P) => P !== w.id) : [...b, w.id];
      n || D(C), s?.(C, { lastAction: I ? "deselect" : "select" });
    }
  }, [o, b, n, s]), y = $e(() => h || (m ? Array.from(new Set(e.map((I) => I.status))).map((I) => ({
    status: I,
    label: I.charAt(0).toUpperCase() + I.slice(1)
  })) : void 0), [h, m, e]), $ = y ? /* @__PURE__ */ r.jsx(
    Ip,
    {
      items: y,
      orientation: v === "left" || v === "right" ? "vertical" : "horizontal"
    }
  ) : null, S = (w) => {
    i || g(w), x?.(w);
  }, _ = d || (f ? /* @__PURE__ */ r.jsx(
    Dp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: k,
      onA11yModeChange: S
    }
  ) : null), F = /* @__PURE__ */ r.jsx("div", { style: c, className: _e(l), children: /* @__PURE__ */ r.jsx(ns, { className: _e("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsx(sr, { width: Sn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
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
  return k === "list" ? F : /* @__PURE__ */ r.jsx("div", { style: c, className: _e(l), children: /* @__PURE__ */ r.jsx(ns, { className: _e("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsx(sr, { width: Sn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
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
function Ko(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function nr(e) {
  return `${Ko(e.getHours())}:${Ko(e.getMinutes())}`;
}
const Mp = ({
  title: e,
  value: t,
  subtitle: n,
  variant: a = "default",
  href: s,
  className: o = "",
  ariaLabel: i,
  ...l
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    o
  ].filter(Boolean).join(" "), u = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(an, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return s ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: s,
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
}, Hv = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(ns, { children: /* @__PURE__ */ r.jsx(pn, { children: e.map((s, o) => /* @__PURE__ */ r.jsx(
    sr,
    {
      width: Sn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ r.jsx(Mp, { ...s })
    },
    o
  )) }) }) });
}, Pp = xt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: c,
    ariaLabelledby: u,
    ariaDescribedby: d,
    className: f,
    tableClassName: h,
    bordered: m = !1,
    striped: v = !1,
    responsive: x = !1,
    tableType: p = "default"
  }, g) => {
    const k = Oe(null), M = Oe(null), D = Oe(null);
    xt.useImperativeHandle(g, () => k.current, []);
    const [b, T] = He(0), [j, N] = He(0), [y, $] = He("headers"), [S, _] = He("browse"), F = t.length, w = e.length, I = $e(() => !n || n.length === 0 ? e : [...e].sort((H, re) => {
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
      o?.(H);
    }, [o]), R = ve((H) => {
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
    Ve(() => {
      const H = k.current;
      if (H)
        return H.addEventListener("keydown", R), () => H.removeEventListener("keydown", R);
    }, [R]);
    const B = _e(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": m,
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
            const z = s === re, de = y === "cells" && b === re;
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
Pp.displayName = "AriaDataGrid";
const dl = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const f = Oe(null), h = Oe(null), m = Oe(null), v = ve((y, $) => {
    c || (h.current = $, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", $));
  }, [c]), x = ve((y, $) => {
    c || h.current === $ || (y.preventDefault(), y.dataTransfer.dropEffect = "move", m.current = $);
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
    h.current = null, m.current = null;
  }, [c, e, n]), g = ve(() => {
    h.current = null, m.current = null;
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
      return s;
    if (o)
      return o;
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
  }, N = $e(() => {
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
              onDragEnd: g,
              onClick: () => D(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ r.jsx(
                Ye,
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
function Fp(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, o); u++)
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
const ls = qn(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: s,
    selectedIndex: o,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: c,
    ariaDescription: u,
    className: d = "",
    disabled: f = !1,
    orientation: h = "horizontal",
    id: m,
    isLoading: v = !1,
    loadingComponent: x,
    error: p = null,
    errorComponent: g,
    "data-testid": k,
    actions: M,
    actionsMinGap: D = 16,
    forceActionsAbove: b = !1
  } = t, j = Oe(
    m || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, N = typeof u == "string" && u.trim() !== "" && !/\s/.test(u), y = `${j}-description`, $ = `${j}-navigation-help`, {
    dataComparator: S = (L, G) => JSON.stringify(L) === JSON.stringify(G),
    filterFunction: _ = (L) => L,
    booleanRenderer: F = (L) => L ? "✓" : "✗"
  } = a || {}, w = o !== void 0, I = o ?? 0, [C, P] = He({
    focusArea: "tabs",
    focusedTabIndex: I,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ee = $e(() => ({
    selectedIndex: I,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [I]), [Y, R] = Ii(Fp, ee);
  Ve(() => {
    const L = Y.tabLoadingStates.length, G = s.length;
    L !== G && R({ type: "ADJUST_ARRAYS", payload: { newLength: G } });
  }, [s.length]), Ve(() => {
    w && R({ type: "SET_SELECTED_INDEX", payload: I });
  }, [I, w]), Ve(() => {
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
  }, [Y.selectedIndex]), Ve(() => {
    l && l(Y.globalSelectedRowData);
  }, [Y.globalSelectedRowData, l]);
  const B = ve(
    (L, G) => S(L, G),
    [S]
  ), H = ve(
    (L) => {
      L >= 0 && L < s.length && !s[L].disabled && (R({ type: "SET_SELECTED_INDEX", payload: L }), P((G) => ({
        ...G,
        focusedTabIndex: L,
        focusArea: "tabs"
      })), i?.(L));
    },
    [s, i]
  ), re = Oe(!1), z = ve(
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
  ), de = Oe([]), ge = Oe([]), le = ve(
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
      }), s[L].onSort?.(G);
    },
    [Y.sortConfig, s]
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
  Ve(() => {
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
  ]), Ve(() => {
    z(Y.selectedIndex);
  }, [Y.selectedIndex, z]);
  const ce = ve(
    (L, G) => {
      const { key: K } = L, Q = s[Y.selectedIndex], X = Q?.columns.length || 0;
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
      s,
      Y.selectedIndex,
      le,
      P,
      ie,
      te,
      de
    ]
  ), V = ve(
    (L, G, K) => {
      const { key: Q } = L, X = s[Y.selectedIndex], ae = X?.data.length || 0, me = X?.columns.length || 0;
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
            P((Re) => ({
              ...Re,
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
            let Re = pe;
            if (De && De.length > 0 && (Re = [...pe].sort((Ze, ze) => {
              for (const { key: it, direction: Dt } of De) {
                let jt = Ze[it], wt = ze[it];
                const qe = X.columns.find(
                  (Ut) => Ut.key === it
                );
                if (qe?.tableRenderer ? (jt = qe.tableRenderer(Ze), wt = qe.tableRenderer(ze)) : qe?.render && (jt = qe.render(Ze), wt = qe.render(ze)), jt == null && wt == null) continue;
                if (jt == null) return Dt === "asc" ? -1 : 1;
                if (wt == null) return Dt === "asc" ? 1 : -1;
                let tt = 0;
                if (typeof jt == "number" && typeof wt == "number" ? tt = jt - wt : tt = String(jt).localeCompare(
                  String(wt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), tt !== 0)
                  return Dt === "asc" ? tt : -tt;
              }
              return 0;
            })), Re[G]) {
              const Ze = Re[G], it = Y.globalSelectedRowData && B(Y.globalSelectedRowData, Ze) ? null : Ze;
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
      s,
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
  if (Di(
    n,
    () => ({
      selectTab: (L) => {
        L >= 0 && L < s.length && (R({ type: "SET_SELECTED_INDEX", payload: L }), i?.(L));
      },
      refreshData: (L) => {
        console.log("Refreshing data for tab:", L ?? "all");
      },
      exportData: (L) => {
        const G = L ?? Y.selectedIndex, K = s[G];
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
    [Y.selectedIndex, Y.selectedRows, s, i]
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
        children: g || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: p })
        ] })
      }
    );
  const se = Oe(null), he = Oe(null), E = Oe(null), [U, oe] = He(!0);
  Ve(() => {
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
  }, [M, D, b, s.length]);
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
      const { key: K } = L, Q = s.length - 1;
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
    [s.length, H, z, M, U, O]
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
            const X = s.length - 1;
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
  }, [ne, U, A, s.length, H, z, Y.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${d}`,
      id: m,
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
          dl,
          {
            sortConfig: Y.sortConfig || [],
            columns: s.flatMap(
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
              children: s.map((L, G) => {
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
        s.map((L, G) => {
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
                ) ? ue(L.data, Y.filters) : L.data, X = $e(() => {
                  const ae = Y.sortConfig;
                  return !ae || ae.length === 0 ? Q : [...Q].sort((me, be) => {
                    for (const { key: we, direction: Ce } of ae) {
                      let pe = me[we], De = be[we];
                      const Re = L.columns.find(
                        (ze) => ze.key === we
                      );
                      if (Re?.tableRenderer ? (pe = Re.tableRenderer(me), De = Re.tableRenderer(be)) : Re?.render && (pe = Re.render(me), De = Re.render(be)), pe == null && De == null) continue;
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
                              let Re;
                              Ce.tableRenderer ? Re = Ce.tableRenderer(ae) : Ce.render ? Re = Ce.render(ae) : Re = De;
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
                                return typeof De == "boolean" && Re === De ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  Z(De),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: De ? "Yes" : "No" })
                                ] }) : xt.isValidElement(Re) || typeof Re != "object" ? Re ?? "" : Re;
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
}), Cr = {
  asc: "↑",
  desc: "↓"
}, Lp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function za(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Ap(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Ep(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Rp(e, t) {
  const n = t.find((s) => s.id === e), a = Ap(t);
  return n ? n.priority < a : !1;
}
const Ov = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const d = $e(() => Lp(e), [e]), f = ve((k) => {
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
    [D[M], D[M - 1]] = [D[M - 1], D[M]], t(za(D));
  }, [e, t, l]), m = ve((k) => {
    if (l) return;
    const M = e.findIndex((b) => b.id === k);
    if (M >= e.length - 1 || M === -1) return;
    const D = [...e];
    [D[M], D[M + 1]] = [D[M + 1], D[M]], t(za(D));
  }, [e, t, l]), v = ve((k) => {
    if (l) return;
    const M = e.filter((D) => D.id !== k);
    t(za(M));
  }, [e, t, l]), x = ve(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
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
  }, g = $e(() => {
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
        "aria-describedby": g,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((k) => /* @__PURE__ */ r.jsx(
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
                        children: k.direction === "asc" ? Cr.asc : Cr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(k.id),
                          disabled: l || !Ep(k.id, e),
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
                          onClick: () => m(k.id),
                          disabled: l || !Rp(k.id, e),
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
    o && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
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
      Cr.asc,
      "/",
      Cr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, to = (e, t) => t.map((n) => ({
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
})), cs = [
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
], Bp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Hp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Op = (e) => {
  if (typeof e == "boolean") {
    const n = cs.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = cs.find((n) => n.value === e);
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
}), Uv = (e) => {
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
}, zp = {
  dataComparator: Bp,
  filterFunction: Hp,
  booleanRenderer: Op,
  getDataId: Up
};
function Zo(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: u = {},
    classPrefix: d = "adaptive-card"
  } = n, f = t.find((M) => M.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", m = () => s.filter((D) => !i.includes(D) && e[D]).slice(0, 3).map((D) => {
    const b = t.find((y) => y.key === D), T = e[D], j = u[D] ? u[D](T, e) : b?.cardRenderer ? b.cardRenderer(e) : b?.render ? b.render(e) : T;
    return `${b?.label || D}: ${j}`;
  }).join(" • "), v = () => o.length === 0 ? null : o.filter((M) => e[M.fieldKey] !== void 0).map((M) => {
    const D = e[M.fieldKey], b = M.render ? M.render(D, e) : D;
    return `<span class="nhsuk-tag ${Vp(M, D)}">${b}</span>`;
  }).join(""), x = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", p = v(), g = m(), k = p ? `${g}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : g;
  return {
    variant: x(),
    heading: String(h),
    descriptionHtml: k,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${h}`
  };
}
function Vp(e, t) {
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
const Gp = {
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
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, u = e.bed_name, d = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
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
            Ye,
            {
              color: qp(gl(d)),
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
              onClick: (m) => {
                m.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            mt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            mt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), a?.("view-full", e);
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
        Ye,
        {
          color: Xp(e.status || "active"),
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
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, u = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            o !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Yp(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            Ye,
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
function gl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Yp(e) {
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
function Xp(e) {
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
const Kp = [
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
], xl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Zp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Jp = (e) => xl(e) === "high" || e.status === "urgent" ? "primary" : "default", Qp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, eh = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Kp,
  hiddenFields: [],
  getPriority: xl,
  getStatus: Zp,
  getVariant: Jp,
  fieldRenderers: Qp,
  classPrefix: "adaptive-card--healthcare"
}, th = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", s = n.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ r.jsx(
      fl,
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
      pl,
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
      hl,
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
      ml,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, nh = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Jo = {
  name: "healthcare",
  defaultCardConfig: eh,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: th,
  fieldTypes: nh
};
function Qo(e) {
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
function ei(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function rh(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, o); u++)
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
function ah(e, t) {
  const [n, a] = He("cards");
  return Ve(() => {
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
function sh(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function oh(e, t, n, a) {
  const s = a ? { ...a.defaultCardConfig, ...n } : { ...Gp, ...n };
  if (a && a.cardTemplates) {
    const o = sh(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), Zo(e, t, s);
}
const Wv = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: s = !1,
  topActions: o,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: c,
  // Standard AriaTabsDataGrid props
  tabPanels: u,
  dataConfig: d,
  selectedIndex: f,
  onTabChange: h,
  ariaLabel: m = "Data grid",
  ariaDescription: v,
  orientation: x = "horizontal",
  id: p,
  disabled: g = !1,
  className: k,
  ...M
}) => {
  const D = ah(e, t), b = f !== void 0, T = f ?? 0, j = $e(() => {
    if (u.some(
      (O) => O.data && O.data.length > 0 && ei(O.data)
    )) {
      const O = Qo(n);
      return {
        ...Jo.defaultCardConfig,
        ...O
      };
    } else
      return Qo(n);
  }, [n, u]), N = $e(() => u.some(
    (O) => O.data && O.data.length > 0 && ei(O.data)
  ) ? Jo : void 0, [u]), y = $e(() => ({
    selectedIndex: T,
    tabLoadingStates: new Array(u.length).fill(!1),
    tabErrors: new Array(u.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(u.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [T, u.length]), [$, S] = Ii(rh, y), _ = Oe([]), F = Oe([]), w = Oe([]), I = Oe(null), [C, P] = He({
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
  Ve(() => {
    C.isCardNavigationActive && C.focusedCardElementIndex >= 0 && C.cardElements.length > 0 && setTimeout(() => {
      const A = C.cardElements[C.focusedCardElementIndex];
      A && (A.element.focus(), A.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [C.isCardNavigationActive, C.focusedCardElementIndex, C.cardElements.length]), Ve(() => {
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
  }, [D, u, ee]), Ve(() => {
    const A = $.tabLoadingStates.length, O = u.length;
    A !== O && S({ type: "ADJUST_ARRAYS", payload: { newLength: O } });
  }, [u.length, $.tabLoadingStates.length]), Ve(() => {
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
  }, []), ge = Oe(null), le = ve((A) => {
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
    if (s) {
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
  }, [s, $.sortConfig, C.cardSortConfig, Z, u, $.selectedIndex]), ue = ve((A, O) => {
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
            "aria-label": m,
            "aria-describedby": `${v || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": x,
            className: "aria-tabs-datagrid__tabs",
            children: u.map((O, J) => {
              const W = J === $.selectedIndex, L = O.disabled || g;
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
        o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      A && A.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          dl,
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
                  $r,
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
            const ae = oh(O, A.columns, j, N), me = [
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
                      ll,
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
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      ls,
      {
        tabPanels: u,
        dataConfig: d,
        ariaLabel: m,
        ariaDescription: v,
        orientation: x,
        id: p,
        disabled: g,
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
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      ls,
      {
        tabPanels: u,
        dataConfig: d,
        ariaLabel: m,
        ariaDescription: v,
        orientation: x,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: c,
        ...M
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, bl = (e) => {
  const t = cs.find((n) => n.value === e);
  return t ? t.icon : null;
}, ih = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = n.discountedPrice || n.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => bl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, lh = (e) => to(e, [
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
]), ch = {
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
  booleanRenderer: (e) => bl(e),
  getDataId: (e) => `financial-${e.id}`
}, uh = (e) => to(e, [
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
]), dh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: ih,
    createTabs: lh
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: ch,
    createTabs: uh
  }
}, ti = (e, t) => {
  const n = dh[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, vl = [
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
], fh = [
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
], ph = [
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
], hh = [
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
], ni = [
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
], ri = [
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
], mh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, gh = () => [
  {
    id: "patients",
    label: "Patients",
    data: vl,
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
    data: fh,
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
    data: ph,
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
    data: hh,
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
], xh = () => {
  const [e, t] = He("healthcare"), n = $e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: zp,
      tabPanels: gh(),
      data: vl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...ti("ecommerce", ni),
      data: ni
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ti("financial", ri),
      data: ri
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: mh,
      tabPanels: to(ai, [
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
      data: ai
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
        mt,
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
      ls,
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
}, zv = xh, yl = (e) => /* @__PURE__ */ r.jsx(Ei, { ...e }), Vv = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = Sn.TwoThirds,
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: u,
  search: d,
  account: f,
  organisation: h,
  logo: m,
  className: v,
  ...x
}) => {
  const p = {
    service: c,
    navigation: u,
    search: d,
    account: f,
    organisation: h,
    logo: m,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(il, { ...o }),
    /* @__PURE__ */ r.jsx(Oi, { ...p }),
    /* @__PURE__ */ r.jsx(yl, { className: v, ...x, children: /* @__PURE__ */ r.jsx(Ri, { size: s, children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsxs(sr, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(an, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Ui, { ...l })
  ] });
}, Gv = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = Sn.TwoThirds,
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: u,
  serviceHref: d,
  logo: f,
  className: h,
  ...m
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
    /* @__PURE__ */ r.jsx(il, { ...o }),
    /* @__PURE__ */ r.jsx(Oi, { ...v }),
    /* @__PURE__ */ r.jsxs(yl, { className: h, ...m, children: [
      c && /* @__PURE__ */ r.jsx(ts, { ...c }),
      /* @__PURE__ */ r.jsx(Ri, { size: s, children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsxs(sr, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(an, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Ui, { ...l })
  ] });
}, wl = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: o, ...i, children: u() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...i, children: u() }) });
};
wl.displayName = "ForwardLink";
const Pn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function si() {
  return typeof window > "u" ? Pn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function _l() {
  const [e, t] = q.useState(si());
  q.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(si());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const n = q.useCallback((o) => e >= Pn[o], [e]), a = q.useCallback((o) => e < Pn[o], [e]), s = q.useCallback((o, i) => e >= Pn[o] && e < Pn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: s,
    /** Raw numeric values */
    values: Pn
  };
}
function Yv(e) {
  const { width: t, values: n } = _l();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = n[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function bh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = q.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = q.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return q.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    s ? c.set(n, String(s)) : c.delete(n), c.set(a, i ? "1" : "0");
    const u = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", u);
  }, [s, i, t, n, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const vh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), yh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function wh(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: s,
    renderItemContent: o,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: u = !0,
    backLabel: d = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: m,
    a11y: v,
    className: x,
    getId: p = (xe) => xe.id,
    orientation: g = "vertical",
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
  } = e, { up: te } = _l(), [ce, V] = q.useState(!1);
  q.useEffect(() => {
    V(!0);
  }, []);
  const ue = ce && te("medium"), se = ce && te("xlarge");
  let he;
  c ? he = c : ue ? he = "two-column" : he = "list", !c && k && l && se && (he = "three-column");
  const E = bh({
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
      const ye = Math.max(0, Math.min(xe, Ne.length - 1)), Ae = Ne[ye];
      Ae.focus(), setTimeout(() => {
        document.activeElement !== Ae && (Ae.focus(), setTimeout(() => {
          document.activeElement !== Ae && Ae.click();
        }, 10));
      }, 10), Q((Xe) => ({ ...Xe, contentIndex: ye }));
      const nt = (Xe) => {
        Xe.key === "Escape" && (Xe.preventDefault(), Xe.stopPropagation(), W.current?.focus(), Ae.removeEventListener("keydown", nt));
      };
      Ne.forEach((Xe) => {
        const Je = Xe._escapeHandler;
        Je && Xe.removeEventListener("keydown", Je);
      }), Ae._escapeHandler = nt, Ae.addEventListener("keydown", nt);
    },
    [pe]
  ), Re = q.useCallback(
    (xe) => {
      const Ne = pe(L.current);
      if (!Ne.length) {
        L.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(xe, Ne.length - 1)), Ae = Ne[ye];
      Ae.focus(), setTimeout(() => {
        document.activeElement !== Ae && (Ae.focus(), setTimeout(() => {
          document.activeElement !== Ae && Ae.click();
        }, 10));
      }, 10), Q((Xe) => ({ ...Xe, secondaryIndex: ye }));
      const nt = (Xe) => {
        Xe.key === "Escape" && (Xe.preventDefault(), Xe.stopPropagation(), L.current?.focus(), Ae.removeEventListener("keydown", nt));
      };
      Ne.forEach((Xe) => {
        const Je = Xe._escapeHandler;
        Je && Xe.removeEventListener("keydown", Je);
      }), Ae._escapeHandler = nt, Ae.addEventListener("keydown", nt);
    },
    [pe]
  ), Ze = (xe) => {
    if (xe.defaultPrevented) return;
    const Ne = xe.key, ye = xe.target, Ae = !!pt.current && pt.current.contains(ye), nt = !!W.current && W.current.contains(ye), Xe = !!L.current && L.current.contains(ye), Je = !!L.current, In = ye === G.current || ye === W.current || ye === L.current, mn = ze && (he === "list" || he === "cards"), yr = nt && !!ye.closest(".nhs-navigation-split-view__header");
    if (X === "containers" && In) {
      if (Ne === "ArrowRight") {
        xe.preventDefault();
        const Be = we(), Qe = Math.min(Be.length - 1, me + 1);
        Ce(Qe);
        return;
      }
      if (Ne === "ArrowLeft") {
        xe.preventDefault();
        const Be = Math.max(0, me - 1);
        Ce(Be);
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
            const Be = Array.from(
              pt.current.querySelectorAll("[data-nav-item]")
            );
            (Be[st >= 0 ? st : 0] || Be[0])?.focus();
          }
        } else ye === W.current ? (ae("content"), De(K.contentIndex)) : ye === L.current && (ae("secondary"), Re(K.secondaryIndex));
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
          Re(K.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (mn && yr && !In && (Ne === "ArrowRight" || Ne === "ArrowLeft")) {
      const Be = pe(W.current).filter(
        (Qe) => Qe.closest(".nhs-navigation-split-view__header")
      );
      if (Be.length > 1) {
        const Qe = Be.indexOf(ye);
        if (Qe >= 0) {
          const fo = (Qe + (Ne === "ArrowRight" ? 1 : -1) + Be.length) % Be.length;
          xe.preventDefault(), Be[fo].focus();
          return;
        }
      }
    }
    if (Ne === "ArrowRight") {
      if (Ae || X === "nav") {
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
    if (Ne === "Home" && !Ae && (xe.preventDefault(), ae("nav"), pt.current)) {
      const Be = Array.from(
        pt.current.querySelectorAll("[data-nav-item]")
      ), Qe = Be[st >= 0 ? st : 0] || Be[0];
      setTimeout(() => Qe?.focus(), 10);
    }
    if (Ne === "End") {
      const Be = Je ? L.current : W.current;
      Be && !Be.contains(ye) && (xe.preventDefault(), Je ? (ae("secondary"), setTimeout(() => L.current?.focus(), 10)) : (ae("content"), setTimeout(() => W.current?.focus(), 10)));
    }
    if (Ne === "ArrowDown" || Ne === "ArrowUp") {
      if (ye === W.current && Ne === "ArrowDown") {
        xe.preventDefault(), pe(W.current).length > 0 && De(0);
        return;
      }
      if (ye === L.current && Ne === "ArrowDown") {
        xe.preventDefault(), pe(
          L.current
        ).length > 0 && Re(0);
        return;
      }
      if (nt) {
        const Be = pe(W.current);
        if (Be.length) {
          xe.preventDefault();
          const Qe = Ne === "ArrowDown" ? 1 : -1, At = (K.contentIndex + Qe + Be.length) % Be.length;
          De(At);
        }
      } else if (Xe) {
        const Be = pe(L.current);
        if (Be.length) {
          xe.preventDefault();
          const Qe = Ne === "ArrowDown" ? 1 : -1, At = (K.secondaryIndex + Qe + Be.length) % Be.length;
          Re(At);
        }
      }
    }
  }, ze = !!ne && (he === "list" || he === "cards"), it = q.useMemo(() => de === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : de === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : de === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: de.mobile !== void 0 ? de.mobile : !0,
    tablet: de.tablet || !1,
    desktop: de.desktop || !1
  }, [de]), Dt = ce && te("medium") && !te("xlarge"), jt = ce && te("xlarge"), wt = !!l, qe = he === "three-column", [tt, Ut] = q.useState(!1);
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
  const Me = !!ne && (ze && it.mobile || !ze && Dt && it.tablet || !ze && jt && it.desktop) || wt && !qe, Fe = `h${ge}`, et = ne ? q.createElement(
    Fe,
    {
      style: {
        marginLeft: ze ? 32 : 0,
        marginRight: ze ? 32 : 0
      }
    },
    ne.label
  ) : null, _t = ze ? "mobile" : Dt ? "tablet" : "desktop", bt = wt && !qe && !tt, Tt = ze && it.mobile ? /* @__PURE__ */ r.jsx(
    ts,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => Dn(void 0, void 0)
    }
  ) : void 0, at = bt ? /* @__PURE__ */ r.jsx(
    wl,
    {
      element: "button",
      text: f,
      onClick: () => {
        Ut(!0);
      }
    }
  ) : void 0, Le = !qe && tt ? /* @__PURE__ */ r.jsx(
    ts,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => Ut(!1)
    }
  ) : void 0, Ft = q.useMemo(() => {
    if (!Me || !ne) return null;
    if (le)
      return le({
        item: ne,
        detailActive: ze,
        context: _t,
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
            Le || Tt,
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
    Me,
    ne,
    le,
    ze,
    _t,
    Tt,
    Le,
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
      const Ae = setTimeout(ye, _);
      return () => {
        Ne = !0, clearTimeout(Ae);
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
  const vr = q.useRef(0), Wt = q.useRef(
    null
  ), Dn = q.useCallback(
    (xe, Ne) => {
      xe !== fe && (n === void 0 && oe(xe), s?.(xe, Ne));
    },
    [n, s, fe]
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
      document.activeElement !== Ne && Ne.focus(), vr.current = st;
      const ye = t[st];
      N?.(
        ye ? p(ye) : void 0,
        ye,
        st
      );
    }
  }, [st, t, N, p]);
  const Zc = (xe) => {
    const Ne = g === "vertical" ? "ArrowDown" : "ArrowRight", ye = g === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (xe.key === "ArrowRight" && g === "vertical") {
      xe.preventDefault(), tt ? (ae("secondary"), setTimeout(() => {
        L.current?.focus();
      }, 10)) : (ae("content"), setTimeout(() => {
        W.current?.focus();
      }, 10));
      return;
    }
    if (xe.key === Ne)
      xe.preventDefault(), Xn((Ae) => Math.min(t.length - 1, Ae + 1));
    else if (xe.key === ye)
      xe.preventDefault(), Xn((Ae) => Math.max(0, Ae - 1));
    else if (xe.key === "Home")
      xe.preventDefault(), Xn(0);
    else if (xe.key === "End")
      xe.preventDefault(), Xn(t.length - 1);
    else if (xe.key === "Enter" || xe.key === " ") {
      xe.preventDefault();
      const Ae = t[st];
      Ae && !Ae.disabled && Dn(p(Ae), Ae);
    } else if (xe.key.length === 1 && /[a-z0-9]/i.test(xe.key)) {
      Wt.current || (Wt.current = { buffer: "", last: 0 });
      const Ae = Date.now(), nt = 700, Xe = xe.key.toLowerCase();
      Ae - Wt.current.last > nt ? Wt.current.buffer = Xe : Wt.current.buffer += Xe, Wt.current.last = Ae;
      let Je = Wt.current.buffer;
      const In = Je.split("").every((At) => At === Je[0]), mn = t.map(
        (At) => String(At.label || "").toLowerCase()
      );
      let yr = 0;
      st >= 0 && (yr = (st + 1) % t.length);
      let Be;
      const Qe = (At, fo) => {
        const po = t.length;
        for (let Pa = 0; Pa < po; Pa++) {
          const Fa = (yr + Pa) % po;
          if (!t[Fa].disabled && mn[Fa].startsWith(At))
            return Fa;
        }
      };
      In && Je.length > 1 ? Be = Qe(Je[0]) : (Be = Qe(Je), Be === void 0 && Je.length > 1 && (Be = Qe(Je[Je.length - 1]), Be !== void 0 && Wt.current && (Wt.current.buffer = Je[Je.length - 1]))), Be !== void 0 && Xn(Be);
    }
  }, Jc = q.useMemo(() => {
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
  ]), [Lt, Qc] = q.useState(Jc);
  q.useEffect(() => {
    P?.(Lt);
  }, [Lt, P]);
  const eu = q.useCallback(() => {
    ue && I && Qc((xe) => !xe);
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
  const tu = [
    "nhs-navigation-split-view",
    u ? "nhs-navigation-split-view--animated" : "",
    ze ? "nhs-navigation-split-view--detail-active" : "",
    he === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    I && ue && Lt ? "nhs-navigation-split-view--nav-collapsed" : "",
    x
  ].filter(Boolean).join(" "), $a = q.useRef(null);
  q.useEffect(() => {
    if (!j && $a.current) {
      const xe = ne ? `Selected ${ne.label}` : "Selection cleared";
      $a.current.textContent = xe;
    }
  }, [ne, j]), q.useEffect(() => {
    !ze && fe == null && pt.current && pt.current.querySelectorAll("[data-nav-item]")[vr.current]?.focus();
  }, [ze, fe]);
  const un = he === "three-column", [Ma, nu] = q.useState(!1);
  q.useEffect(() => {
    un && !Ma && nu(!0);
  }, [un, Ma]);
  const uo = q.useRef(un);
  q.useEffect(() => {
    uo.current !== un && (M?.(un), uo.current = un);
  }, [un, M]);
  const ru = () => {
    if (he === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": fe ? String(fe) : void 0,
          children: [
            t.map((ye) => {
              const Ae = p(ye), nt = Ae === fe;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": nt,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Ae),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": nt || void 0,
                      "data-disabled": ye.disabled || void 0,
                      disabled: ye.disabled,
                      onClick: () => !ye.disabled && Dn(Ae, ye),
                      children: [
                        ye.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                        ye.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                        o?.(ye),
                        ye.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
                      ]
                    }
                  )
                },
                Ae
              );
            }),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: m || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const xe = "nsv-nav-instructions", Ne = q.useMemo(() => q.memo(
      ({
        item: ye,
        idx: Ae,
        selected: nt,
        focused: Xe
      }) => {
        const Je = p(ye), In = ye.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Xe ? 0 : -1,
          onClick: () => {
            vr.current = Ae, Dn(Je, ye);
          },
          onKeyDown: (mn) => {
            (mn.key === "Enter" || mn.key === " ") && (mn.preventDefault(), vr.current = Ae, Dn(Je, ye));
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
                o?.(ye)
              ] }),
              ye.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
            ]
          }
        );
      }
    ), [p, Dn, o]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: pt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Zc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": xe,
          "aria-activedescendant": fe ? String(fe) : void 0,
          children: [
            t.map((ye, Ae) => /* @__PURE__ */ r.jsx(
              Ne,
              {
                item: ye,
                idx: Ae,
                selected: p(ye) === fe,
                focused: Ae === st || st === -1 && Ae === 0 && b === "first",
                "data-just-selected": p(ye) === A ? "true" : void 0
              },
              p(ye)
            )),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: m || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
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
      className: tu,
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
                        onClick: eu,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Lt ? ee : Y,
                        title: Lt ? ee : Y,
                        children: Lt ? R || /* @__PURE__ */ r.jsx(yh, {}) : B || /* @__PURE__ */ r.jsx(vh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: ru() }),
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
                    Me && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: Ft }),
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
              he === "three-column" && (!F || Ma) || tt && !qe ? /* @__PURE__ */ r.jsx(
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
                                  Le,
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
            ref: $a,
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
wh.displayName = "NavigationSplitView";
const _h = typeof window < "u" && window.document ? q.useLayoutEffect : q.useEffect, oi = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Sh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, u = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, m = (x) => {
    h && (x.preventDefault(), a?.(e));
  }, v = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: m,
    onKeyDown: (x) => {
      (x.key === "Enter" || x.key === " ") && m(x), x.key === "Escape" && s && m(x);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: _e("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
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
          h && /* @__PURE__ */ r.jsx("span", { className: _e("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, kh = au(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: s,
  ariaLabel: o = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...u
}) => {
  const [d, f] = He(() => /* @__PURE__ */ new Set()), [h, m] = He(() => /* @__PURE__ */ new Set()), v = Oe(/* @__PURE__ */ new Set()), x = ve((_) => d.has(_), [d]), p = ve((_) => {
    f((F) => {
      const w = new Set(F);
      return w.has(_.id) ? (w.delete(_.id), m((I) => {
        const C = new Set(I);
        return C.add(_.id), C;
      }), setTimeout(() => m((I) => {
        const C = new Set(I);
        return C.delete(_.id), C;
      }), 240), l?.(_.id, !1)) : (w.add(_.id), l?.(_.id, !0)), w;
    });
  }, [l]);
  _h(() => {
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
  const g = ve(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), k = _e("nhsuk-product-roadmap", s), M = oi(n, 120, 1200, 400), D = oi(a, 1, 6, 2), b = $e(() => e.map((_) => /* @__PURE__ */ new Date(_ + " 01")), [e]), T = $e(() => {
    if (b.length === 0) {
      const w = /* @__PURE__ */ new Date();
      return [w, w];
    }
    const _ = new Date(b[0]), F = cr.offset(new Date(b[b.length - 1]), 1);
    return [_, F];
  }, [b]), j = $e(() => eo().domain(T).range([0, b.length * M]), [T, b.length, M]), N = ve((_) => {
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
  }, [j, M]), y = $e(() => t.map((_) => {
    const w = _.roadmapItems.map((C) => {
      const P = !C.childItems && C.children ? { ...C, childItems: C.children } : { ...C };
      return N(P);
    }).sort((C, P) => C._pxLeft !== P._pxLeft ? C._pxLeft - P._pxLeft : P._pxWidth - C._pxWidth), I = [];
    return w.forEach((C) => {
      const P = C._pxLeft, ee = C._pxLeft + C._pxWidth;
      let Y = I.findIndex((R) => R <= P);
      Y === -1 && (Y = I.length, I.push(0)), I[Y] = ee, C.verticalPosition = Y + 1;
    }), { ..._, roadmapItems: w, _laneCount: I.length };
  }), [t, N]), $ = $e(() => y.map((_) => _._laneCount || 1), [y]), S = $e(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: k,
      style: { "--column-width": `${M}px`, gridTemplateColumns: S },
      role: "grid",
      "aria-label": o,
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
              return /* @__PURE__ */ r.jsxs(xt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Sh, { item: H, maxLines: D, enableDrilldown: i, onExpand: p, isActive: le, topLaneIndex: ge, laneOffset: de }),
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
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: g, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((w, I) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: w.title }),
                w.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: w.content })
              ] }, w.id ?? I)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: g, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
kh.displayName = "ProductRoadmap";
function Sl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = Sl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function zr() {
  for (var e, t, n = 0, a = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = Sl(e)) && (a && (a += " "), a += t);
  return a;
}
function ut(e) {
  return function() {
    return e;
  };
}
const us = Math.PI, ds = 2 * us, xn = 1e-6, Ch = ds - xn;
function kl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Nh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return kl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * n) / n + a[s];
  };
}
class jh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? kl : Nh(t);
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
    let i = this._x1, l = this._y1, c = a - t, u = s - n, d = i - t, f = l - n, h = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > xn) if (!(Math.abs(f * c - u * d) > xn) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let m = a - i, v = s - l, x = c * c + u * u, p = m * m + v * v, g = Math.sqrt(x), k = Math.sqrt(h), M = o * Math.tan((us - Math.acos((x + h - p) / (2 * g * k))) / 2), D = M / k, b = M / g;
      Math.abs(D - 1) > xn && this._append`L${t + D * d},${n + D * f}`, this._append`A${o},${o},0,0,${+(f * m > d * v)},${this._x1 = t + b * c},${this._y1 = n + b * u}`;
    }
  }
  arc(t, n, a, s, o, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), c = a * Math.sin(s), u = t + l, d = n + c, f = 1 ^ i, h = i ? s - o : o - s;
    this._x1 === null ? this._append`M${u},${d}` : (Math.abs(this._x1 - u) > xn || Math.abs(this._y1 - d) > xn) && this._append`L${u},${d}`, a && (h < 0 && (h = h % ds + ds), h > Ch ? this._append`A${a},${a},0,1,${f},${t - l},${n - c}A${a},${a},0,1,${f},${this._x1 = u},${this._y1 = d}` : h > xn && this._append`A${a},${a},0,${+(h >= us)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
  }
  rect(t, n, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+s}h${-a}Z`;
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
  }, () => new jh(t);
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
function Tl(e) {
  return new jl(e);
}
function Dl(e) {
  return e[0];
}
function Il(e) {
  return e[1];
}
function $l(e, t) {
  var n = ut(!0), a = null, s = Tl, o = null, i = Cl(l);
  e = typeof e == "function" ? e : e === void 0 ? Dl : ut(e), t = typeof t == "function" ? t : t === void 0 ? Il : ut(t);
  function l(c) {
    var u, d = (c = Nl(c)).length, f, h = !1, m;
    for (a == null && (o = s(m = i())), u = 0; u <= d; ++u)
      !(u < d && n(f = c[u], u, c)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+e(f, u, c), +t(f, u, c));
    if (m) return o = null, m + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : ut(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : ut(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : ut(!!c), l) : n;
  }, l.curve = function(c) {
    return arguments.length ? (s = c, a != null && (o = s(a)), l) : s;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? a = o = null : o = s(a = c), l) : a;
  }, l;
}
function fs(e, t, n) {
  var a = null, s = ut(!0), o = null, i = Tl, l = null, c = Cl(u);
  e = typeof e == "function" ? e : e === void 0 ? Dl : ut(+e), t = typeof t == "function" ? t : ut(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Il : ut(+n);
  function u(f) {
    var h, m, v, x = (f = Nl(f)).length, p, g = !1, k, M = new Array(x), D = new Array(x);
    for (o == null && (l = i(k = c())), h = 0; h <= x; ++h) {
      if (!(h < x && s(p = f[h], h, f)) === g)
        if (g = !g)
          m = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), v = h - 1; v >= m; --v)
            l.point(M[v], D[v]);
          l.lineEnd(), l.areaEnd();
        }
      g && (M[h] = +e(p, h, f), D[h] = +t(p, h, f), l.point(a ? +a(p, h, f) : M[h], n ? +n(p, h, f) : D[h]));
    }
    if (k) return l = null, k + "" || null;
  }
  function d() {
    return $l().defined(s).curve(i).context(o);
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
    return arguments.length ? (s = typeof f == "function" ? f : ut(!!f), u) : s;
  }, u.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), u) : i;
  }, u.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), u) : o;
  }, u;
}
function ii(e) {
  return e < 0 ? -1 : 1;
}
function li(e, t, n) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (n - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (ii(o) + ii(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function ci(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Va(e, t, n) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * n, o, i);
}
function Vr(e) {
  this._context = e;
}
Vr.prototype = {
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
        Va(this, this._t0, ci(this, this._t0));
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
          this._point = 3, Va(this, ci(this, n = li(this, e, t)), n);
          break;
        default:
          Va(this, this._t0, n = li(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Vr.prototype).point = function(e, t) {
  Vr.prototype.point.call(this, t, e);
};
function Gr(e) {
  return new Vr(e);
}
function Th(e, t, n) {
  const a = Wi(e, t);
  return eo().domain(a).range(n);
}
function ui(e, t, n) {
  const [a, s] = Wi(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return Rr().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const c = s - a, u = (c > 0 ? c : a) * 0.1;
    i = Math.max(0, a - u), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return Rr().domain([i, l]).nice().range(n);
}
function ps(e, t, n, a) {
  const s = $l().x(t).y(n);
  return a?.smooth !== !1 && s.curve(Gr), s(e) ?? "";
}
function Dh(e = {}) {
  const t = q.useRef(null), n = q.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = q.useState({ width: 0, height: 0 });
  q.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const u of c) {
        const { width: d, height: f } = u.contentRect;
        s({ width: d, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: n, ref: t };
}
const Ml = q.createContext(null);
function hn() {
  return q.useContext(Ml);
}
const Ih = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = Dh(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: c, role: o, "aria-label": i, children: /* @__PURE__ */ r.jsx(Ml.Provider, { value: l, children: s }) });
}, no = q.createContext(null), Tn = () => q.useContext(no), $h = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: u,
  yBottomGapPx: d
}) => {
  const f = hn(), h = t ?? f?.innerWidth ?? 0, m = n ?? f?.innerHeight ?? 0, v = q.useMemo(() => e.flatMap((b) => b.data), [e]), x = q.useCallback(
    (b) => {
      if (a) return a(b);
      const T = b.x;
      return T instanceof Date ? T : new Date(T);
    },
    [a]
  ), p = c ?? 6, g = u ?? 6, k = q.useMemo(
    () => Th(v, x, [
      p,
      Math.max(0, h - p)
    ]),
    [v, x, h, p]
  ), M = q.useMemo(() => {
    const b = Math.max(0, d ?? 0), T = Math.max(0, m - (g + b));
    if (l) {
      const j = ui([], (N) => N.y, [
        T,
        g
      ]);
      return j.domain(l), j;
    }
    return ui(v, (j) => j.y, [T, g]);
  }, [v, m, l, g, d]), D = q.useMemo(
    () => ({
      xScale: k,
      yScale: M,
      getXTicks: (b = o) => k.ticks(b),
      getYTicks: (b = i) => M.ticks(b)
    }),
    [k, M, o, i]
  );
  return /* @__PURE__ */ r.jsx(no.Provider, { value: D, children: s });
}, jr = 16, Tr = 6, Mh = 16, Ph = 4, Fh = 6, Lh = 3, Ah = void 0, di = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: s,
  label: o,
  offset: i,
  className: l,
  minLabelSpacing: c,
  maxTickLabelLength: u,
  autoMinLabelSpacing: d = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: m,
  yZeroBreak: v
}) => {
  const x = Tn(), p = hn(), g = t || (e === "x" ? x?.xScale : x?.yScale), k = n ?? (e === "x" ? 6 : 5), M = typeof s == "function", D = q.useMemo(() => {
    if (M || !m) return;
    const j = (N) => new Intl.DateTimeFormat(void 0, N);
    switch (m) {
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
  }, [M, m]);
  let b = M ? s : D || ((j) => String(j));
  const T = q.useMemo(() => a && Array.isArray(a) ? a : g ? typeof g.ticks == "function" ? g.ticks(k) : g.domain ? g.domain() : [] : [], [g, k, a]);
  if (e === "x" && !M && !m && T.length && T.every((j) => j instanceof Date)) {
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
  if (!g || !p) return null;
  if (e === "x") {
    const j = i ?? p.innerHeight, N = typeof g.bandwidth == "function", y = N ? g.bandwidth() : 0, $ = (F) => {
      const w = g(F);
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
      g,
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
          const j = !!v?.enabled, N = Math.max(Tr, v?.gapPx ?? jr);
          if (!j)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: p.innerHeight, stroke: "currentColor" });
          const y = Math.max(0, p.innerHeight - N);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: y, stroke: "currentColor" });
        })(),
        T.map((j, N) => {
          const y = b(j), $ = u && y.length > u ? y.slice(0, Math.max(1, u - 1)) + "…" : y, S = h ? $.split(/\n/) : [$.replace(/\n/g, " ")];
          if (!!v?.enabled) {
            const F = Math.max(Tr, v?.gapPx ?? jr), w = Math.max(0, p.innerHeight - F);
            if (g(j) > w - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${g(j)})`,
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
          const j = Math.max(Tr, v?.gapPx ?? jr), N = p.innerHeight, $ = Math.max(0, N - j), S = $, F = Math.max(4, N - S), w = Ph, I = Fh, C = Math.max(1, Math.round(v?.zigZag?.amplitudePx ?? w)), P = Math.max(1, Math.round(v?.zigZag?.stepXPx ?? Lh)), ee = v?.zigZag?.heightPx ?? Ah, Y = Math.max(4, Math.round(ee ?? 0));
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
        o && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -p.innerHeight / 2,
            y: -p.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: o
          }
        )
      ]
    }
  );
}, Eh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = Tn(), i = hn();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, u) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: o.yScale(c),
        y2: o.yScale(c),
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
        x1: o.xScale(c),
        x2: o.xScale(c),
        stroke: n,
        strokeDasharray: a
      },
      u
    ))
  ] });
}, Rh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, gr = {
  color: Rh
}, Bh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Ca = {
  color: Bh
}, Hh = [
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
let Ga = null, Ya = null, qa = null, Pl = "optimized";
function Oh() {
  const e = { color: { ...Ca.color, ...gr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
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
    return Hh;
  }
}
function Uh() {
  return Ga || (Ga = Oh()), Ga;
}
function Wh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Xa(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function zh(e, t, n) {
  const a = Xa(e), s = Xa(t), o = Xa(n), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, c = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function Vh(e, t, n) {
  let i = e / 95.047, l = t / 100, c = n / 108.883;
  const u = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = u(i), l = u(l), c = u(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function Fl(e) {
  const t = Wh(e);
  if (!t) return null;
  const n = zh(t.r, t.g, t.b);
  return Vh(n.x, n.y, n.z);
}
function fi(e, t) {
  const n = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(n * n + a * a + s * s);
}
function Gh() {
  const e = Uh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Fl(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, u = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += fi(l, t[f]), u++);
    const d = c / Math.max(1, u);
    d > a && (a = d, n = i);
  }
  const s = new Set(e.map((i, l) => l)), o = [];
  for (o.push(n), s.delete(n); s.size; ) {
    let i = Array.from(s)[0], l = -1;
    for (const c of s) {
      const u = t[c];
      if (!u) continue;
      let d = 1 / 0;
      for (const f of o) {
        const h = t[f];
        if (h) {
          const m = fi(u, h);
          m < d && (d = m);
        }
      }
      d > l && (l = d, i = c);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function Yh() {
  return Ya || (Ya = Gh()), Ya;
}
function qh(e, t, n) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - n / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, c = i(a) * 100, u = i(o) * 108.883;
  return { X: l, Y: c, Z: u };
}
function Xh(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, s = e * -0.9689 + t * 1.8758 + n * 0.0415, o = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function Kh(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Zh(e, t) {
  const n = Fl(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: s, Y: o, Z: i } = qh(a, n.a, n.b), l = Xh(s, o, i);
  return Kh(l.r, l.g, l.b);
}
function Jh() {
  const e = Yh(), n = [12, -12, 24, -24].map((s) => e.map((o) => Zh(o, s))), a = [...e];
  return n.forEach((s) => a.push(...s)), a;
}
function Qh() {
  return (!qa || em()) && (qa = Jh(), Ll = Pl), qa;
}
let Ll = null;
function em() {
  return Ll !== Pl;
}
function Ht(e) {
  const t = Qh();
  return t[e % t.length];
}
let Hn = null, ur = null, dr = null, fr = null;
function tm() {
  const e = gr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Hn = [];
    for (let o = 1; o <= 12; o++) {
      const i = t[String(o)]?.$value || t[String(o)]?.value;
      Hn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    ur = {}, Object.keys(n).forEach((o) => {
      const i = n[o]?.$value || n[o]?.value;
      typeof i == "string" && (ur[o] = i);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    fr = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (fr[o] = i);
    }), dr = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (dr[o] = i);
    });
  }
}
function Na() {
  (!Hn || !ur || !dr || !fr) && tm();
}
function Cn(e) {
  return Na(), Hn ? Hn[e % Hn.length] : "#212b32";
}
function nm(e) {
  return Na(), ur ? ur[e] : void 0;
}
function Yr(e, t) {
  return nm(e) || Cn(t);
}
const hs = ["low", "moderate", "high", "critical"];
let Ka = null;
function rm() {
  const e = { color: { ...Ca.color, ...gr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return hs.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (n[a] = s);
  }), n;
}
function Al() {
  return Ka || (Ka = rm()), Ka;
}
function am(e) {
  return Al()[e.toLowerCase()];
}
function sm(e, t) {
  return am(e) || Al()[hs[t % hs.length]] || Ht(t);
}
function om(e) {
  return Na(), dr ? dr[e] : void 0;
}
function im(e, t) {
  return om(e) || Cn(t);
}
const ms = ["trust", "ambulance", "icb", "region"];
let Za = null;
function lm() {
  const e = { color: { ...Ca.color, ...gr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return ms.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (n[a] = s);
  }), n;
}
function El() {
  return Za || (Za = lm()), Za;
}
function cm(e) {
  return El()[e.toLowerCase()];
}
function um(e, t) {
  return cm(e) || El()[ms[t % ms.length]] || Ht(t);
}
function dm(e) {
  return Na(), fr ? fr[e] : void 0;
}
function fm(e, t) {
  return dm(e) || Cn(t);
}
let Ja = null;
const pm = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function hm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function mm() {
  const e = { color: { ...Ca.color, ...gr.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((c, u) => c ? c[u] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return pm.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? n[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function gm() {
  return Ja || (Ja = mm()), Ja;
}
function xm(e) {
  return gm()[hm(e)];
}
function On(e, t) {
  return xm(e) || Ht(t);
}
const Rl = q.createContext(null), xr = () => q.useContext(Rl), qv = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [s, o] = q.useState(() => new Set(e)), i = n !== void 0, l = q.useMemo(() => i ? new Set(n) : s, [i, n, s]), c = q.useCallback((d) => {
    i || o(new Set(d)), a?.(Array.from(d));
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
  return /* @__PURE__ */ r.jsx(Rl.Provider, { value: u, children: t });
}, Bl = q.createContext(null), cn = () => q.useContext(Bl), bm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Tn(), s = xr(), [o, i] = q.useState(null), l = q.useRef(/* @__PURE__ */ new Map()), [c, u] = q.useState([]), d = q.useCallback(
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
  ), m = q.useCallback(() => i(null), []);
  q.useEffect(() => {
    if (!o) {
      u([]);
      return;
    }
    if (!a) return;
    const { xScale: j, yScale: N } = a, y = [];
    l.current.forEach(($, S) => {
      $.forEach((_, F) => {
        (o.x instanceof Date && _.x instanceof Date ? _.x.getTime() === o.x.getTime() : _.x === o.x) && y.push({
          seriesId: S,
          index: F,
          x: _.x,
          y: _.y,
          clientX: j(_.x),
          clientY: N(_.y)
        });
      });
    }), y.sort(($, S) => $.seriesId.localeCompare(S.seriesId)), u(y);
  }, [o, a]);
  const v = q.useCallback(
    (j) => {
      if (!o) return;
      const N = l.current.get(o.seriesId);
      if (!N) return;
      let y = o.index + j;
      if (y < 0 || y >= N.length) {
        if (!n) return;
        y = (y + N.length) % N.length;
      }
      const $ = N[y];
      if (!a) return;
      const { xScale: S, yScale: _ } = a;
      i({
        seriesId: o.seriesId,
        index: y,
        x: $.x,
        y: $.y,
        clientX: S($.x),
        clientY: _($.y)
      });
    },
    [o, a, n]
  ), x = q.useCallback(
    (j) => {
      let N = Array.from(l.current.keys());
      if (s && (N = N.filter((P) => !s.isHidden(P))), N.length === 0) return;
      if (!o) {
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
      const y = N.indexOf(o.seriesId);
      if (y === -1) return;
      let $ = y + j;
      if ($ < 0 || $ >= N.length) {
        if (!n) return;
        $ = ($ + N.length) % N.length;
      }
      const S = N[$], _ = l.current.get(S);
      if (!_ || !a) return;
      const F = Math.min(o.index, _.length - 1), w = _[F], { xScale: I, yScale: C } = a;
      i({
        seriesId: S,
        index: F,
        x: w.x,
        y: w.y,
        clientX: I(w.x),
        clientY: C(w.y)
      });
    },
    [o, a, n, s]
  ), p = q.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (s && (j = j.filter((F) => !s.isHidden(F))), j.length === 0) return;
    const N = o ? o.seriesId : j[0], y = l.current.get(N);
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
  }, [o, a, s]), g = q.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (s && (j = j.filter((w) => !s.isHidden(w))), j.length === 0) return;
    const N = o ? o.seriesId : j[0], y = l.current.get(N);
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
  }, [o, a, s]), k = q.useCallback(
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
      focused: o,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: m,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: k,
      focusPrevPoint: M,
      focusNextSeries: D,
      focusPrevSeries: b,
      focusFirstPoint: p,
      focusLastPoint: g
    }),
    [
      o,
      c,
      h,
      m,
      d,
      f,
      k,
      M,
      D,
      b,
      p,
      g
    ]
  );
  return /* @__PURE__ */ r.jsx(Bl.Provider, { value: T, children: e });
}, vm = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: s,
  focusIndex: o,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: c = 1,
  smooth: u = !0,
  gradientFillId: d,
  colors: f
}) => {
  const h = Tn();
  if (!h) return null;
  const { xScale: m, yScale: v } = h, p = xr()?.isHidden(e.id) ?? !1, g = p && l === "fade";
  if (p && l === "remove")
    return null;
  const k = cn();
  q.useEffect(() => {
    if (!k) return;
    const N = e.data.map((y) => ({ x: i(y), y: y.y }));
    return k.registerSeries(e.id, N), () => k.unregisterSeries(e.id);
  }, [k, e.id, e.data, i]);
  const M = q.useMemo(
    () => ps(
      e.data,
      (N) => m(i(N)),
      (N) => v(N.y),
      { smooth: u }
    ),
    [e.data, m, v, i, u]
  ), D = q.useMemo(() => {
    if (!e.data.length) return "";
    const [N] = v.domain(), y = fs().x(($) => m(i($))).y0(() => v(N)).y1(($) => v($.y));
    return u && y.curve(Gr), y(e.data) || "";
  }, [e.data, m, v, i, u]), b = f && f[t], T = e.color || b || (n === "region" ? On(e.id, t) : Ht(t)), j = n === "region" ? Yr(e.id, t) : Cn(t);
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
          const $ = m(i(N)), S = v(N.y), _ = s ? 0 : -1, F = !g && (s && y === o || k?.focused?.seriesId === e.id && k.focused.index === y), w = () => {
            k && !g && k.setFocused({
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
              tabIndex: g ? -1 : _,
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
}, ym = ({ polite: e = !0, format: t }) => {
  const n = cn(), [a, s] = q.useState(""), o = q.useRef("");
  return q.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let c;
    if (l && l.length > 1) {
      const u = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${u}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : wm(i.seriesId, i.x, i.y, i.index);
    if (c !== o.current) {
      o.current = c, s("");
      const u = setTimeout(() => s(c), 10);
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
function wm(e, t, n, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${n}`;
}
const Xv = () => {
  const e = cn(), t = hn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(n.clientX, 0), s), l = Math.min(Math.max(n.clientY, 0), o), c = i + 8, u = l - 8, d = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = d ? f : `${f} • ${n.y}`, m = /\d+$/.exec(n.seriesId || ""), v = m ? parseInt(m[0], 10) - 1 : 0, x = Ht(v >= 0 ? v : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
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
}, Kv = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: o,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: c
}) => {
  const u = xr(), d = !!(u && !a && !l && o === void 0), f = a || d, h = e || [], m = o !== void 0, [v, x] = q.useState(new Set(i)), p = m ? new Set(o) : v, [g, k] = q.useState(""), M = (D) => {
    if (d && u) {
      const _ = u.isHidden(D);
      u.toggle(D);
      const w = h.find((C) => C.id === D)?.label || D, I = c ? c(D, _, w) : `${w} ${_ ? "shown" : "hidden"}`;
      k(I);
      return;
    }
    if (!f) return;
    const b = new Set(p), T = b.has(D);
    T ? b.delete(D) : b.add(D), m || x(b);
    const j = h.filter((_) => !b.has(_.id)).map((_) => _.id), N = Array.from(b);
    l?.(j, N);
    const $ = h.find((_) => _.id === D)?.label || D, S = c ? c(D, T, $) : `${$} ${T ? "shown" : "hidden"}`;
    k(S);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((D, b) => {
      const T = D.palette || t, j = D.color || (T === "region" ? On(D.id, b) : T === "severity" ? sm(D.id, b) : T === "org-level" ? um(D.id, b) : Ht(b));
      let N = D.stroke || (T === "region" ? Yr(D.id, b) : T === "severity" ? im(D.id, b) : T === "org-level" ? fm(D.id, b) : Cn(b));
      if (s && N) {
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
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: g })
  ] });
}, Zv = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: s = !1,
  visibilityMode: o = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: u = !0,
  colors: d
}) => {
  const f = Tn();
  if (!f) return null;
  const { xScale: h, yScale: m } = f, x = xr()?.isHidden(e.id) ?? !1, p = x && o === "fade";
  if (x && o === "remove") return null;
  const g = cn();
  q.useEffect(() => {
    if (!g) return;
    const j = e.data.map((N) => ({ x: a(N), y: N.y }));
    return g.registerSeries(e.id, j), () => g.unregisterSeries(e.id);
  }, [g, e.id, e.data, a]);
  const k = d && d[t], M = e.color || k || (n === "region" ? On(e.id, t) : Ht(t)), D = q.useMemo(() => c && c.length === e.data.length ? ps(
    e.data,
    (j) => h(a(j)),
    (j) => {
      const N = e.data.indexOf(j);
      return m(c[N].y1);
    },
    { smooth: l }
  ) : ps(
    e.data,
    (j) => h(a(j)),
    (j) => m(j.y),
    { smooth: l }
  ), [e.data, c, h, m, a, l]), b = q.useMemo(() => {
    if (c && c.length === e.data.length) {
      const S = fs().x((_) => h(a(_))).y0((_, F) => m(c[F].y0)).y1((_, F) => m(c[F].y1));
      return l && S.curve(Gr), S(e.data) || "";
    }
    const [j, N] = m.domain();
    let y = i;
    y < j ? y = j : y > N && (y = N);
    const $ = fs().x((S) => h(a(S))).y0(() => m(y)).y1((S) => m(S.y));
    return l && $.curve(Gr), $(e.data) || "";
  }, [e.data, c, h, m, a, i, l]), T = q.useId();
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
        !s && /* @__PURE__ */ r.jsx("path", { d: D, fill: "none", stroke: M, strokeWidth: 1 })
      ]
    }
  );
}, Jv = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: s,
  focusable: o = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: c,
  adaptive: u = !1,
  adaptiveGroupOccupancy: d = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: m,
  stacked: v,
  gapRatio: x = 0.15,
  minBarWidth: p,
  gradientFill: g = !0,
  gradientStrokeMatch: k = !0,
  opacity: M = 1,
  fadedOpacity: D = 0.25,
  flatFillOpacity: b = 1,
  colors: T
}) => {
  const j = Math.max(0, x), N = Tn(), y = hn();
  if (!N || !y) return null;
  const { xScale: $, yScale: S } = N, F = xr()?.isHidden(e.id) ?? !1, w = F && f === "fade";
  if (F && f === "remove") return null;
  const I = cn();
  q.useEffect(() => {
    if (!I) return;
    const Z = e.data.map((te) => ({ x: s(te), y: te.y }));
    return I.registerSeries(e.id, Z), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, s]);
  const C = typeof $.bandwidth == "function", P = C ? $.bandwidth() : void 0, ee = q.useMemo(() => {
    if (P != null) return P;
    const Z = m && m.length ? m : [e], te = [];
    Z.forEach((se) => {
      se.data.forEach((he) => {
        const E = $(s(he));
        Number.isFinite(E) && te.push(E);
      });
    });
    const ce = te.sort((se, he) => se - he);
    if (ce.length <= 1) return 40;
    const V = [];
    for (let se = 1; se < ce.length; se++)
      V.push(ce[se] - ce[se - 1]);
    return V.sort((se, he) => se - he), (V[Math.floor(V.length / 2)] || 40) * i;
  }, [e.data, m, $, s, i, P]), { basePerBar: Y } = q.useMemo(() => {
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
      const ce = m && m.length ? m : [e], V = [];
      ce.forEach(
        (oe) => oe.data.forEach((fe) => {
          const ne = $(s(fe));
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
    m,
    $,
    s
  ]), R = q.useMemo(() => {
    if (C) return [];
    const Z = [];
    return (m && m.length ? m : [e]).forEach(
      (ce) => ce.data.forEach((V) => {
        const ue = $(s(V));
        Number.isFinite(ue) && Z.push(ue);
      })
    ), Z.sort((ce, V) => ce - V), Array.from(new Set(Z));
  }, [C, m, e, $, s]), B = q.useMemo(() => {
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
  ]), re = T && T[t] ? T[t] : void 0, z = e.color || re || (a === "region" ? On(e.id, t) : Ht(t)), de = a === "region" ? Yr(e.id, t) : Cn(t), ge = k && (e.color || re) ? z : de, le = Number.isFinite(S(0)) ? S(0) : S.range()[0], ie = q.useId();
  return v && v.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: w ? D : M,
      "aria-hidden": w ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
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
          const ce = s(Z), V = $(C ? Z.x : ce);
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
              fill: g ? `url(#${ie})` : z,
              ...g ? {} : { fillOpacity: b },
              stroke: ne ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : g && k ? z : void 0,
              strokeWidth: ne ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: w || !o ? -1 : 0,
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
        g && /* @__PURE__ */ r.jsxs("defs", { children: [
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
          const ce = s(Z), V = $(C ? Z.x : ce);
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
          }, O = h === "category" && T ? T[te] : void 0, J = h === "category" ? O || (a === "region" ? On(String(Z.x), te) : Ht(te)) : z, W = h === "category" ? `${ie}-${te}` : ie, L = g && k ? J : h === "category" ? a === "region" ? Yr(String(Z.x), te) : Cn(te) : ge, G = fe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L || J;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ue,
              y: U,
              width: se,
              height: oe || 1,
              fill: g ? `url(#${W})` : J,
              ...g ? {} : { fillOpacity: b },
              stroke: G,
              strokeWidth: fe ? 2 : 1,
              className: "fdp-bar",
              tabIndex: w || !o ? -1 : 0,
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
}, Qv = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = hn(), c = t ?? l?.innerWidth ?? 0, u = n ?? l?.innerHeight ?? 0, d = q.useMemo(() => e.flatMap((p) => p.data), [e]), f = q.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((g) => p.add(g.x)), Array.from(p);
  }, [d]), h = q.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), m = q.useMemo(
    () => Vi().domain(f).range([0, c]).paddingInner(a).paddingOuter(s),
    [f, c, a, s]
  ), v = q.useMemo(
    () => Rr().domain([0, h]).nice().range([u, 0]),
    [h, u]
  ), x = q.useMemo(
    () => ({
      xScale: m,
      yScale: v,
      getXTicks: () => f,
      getYTicks: (p = i) => v.ticks(p)
    }),
    [m, v, f, i]
  );
  return /* @__PURE__ */ r.jsx(no.Provider, { value: x, children: o });
}, ey = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = q.useId(), u = o || c, d = t ? `${u}-desc` : void 0, f = n ? `${u}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: u,
      className: zr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${u}-title`,
      "aria-describedby": zr(d, f),
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
}, ty = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const s = q.useRef(null);
  return q.useEffect(() => {
    const o = s.current;
    if (!o) return;
    const i = () => {
      const l = Array.from(o.querySelectorAll(e));
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
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: s, children: a });
}, _m = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: s = "neutral",
  variant: o = "default",
  subtitle: i,
  metadata: l,
  trendData: c,
  loading: u = !1,
  error: d,
  valueFormatter: f,
  className: h,
  style: m,
  id: v,
  announceDelta: x = !0,
  visual: p
}) => {
  const g = q.useId(), k = v || g, M = `${k}-label`, D = `${k}-value`, b = `${k}-delta`, T = typeof t == "number" && !Number.isNaN(t), j = u ? "—" : d ? "" : T ? f ? f(t) : t.toLocaleString() : t;
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
      className: zr(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        u && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        h
      ),
      style: m,
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
              className: zr(
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
let gs = null;
try {
  gs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Ge = (e, t) => {
  if (!gs) return t;
  const n = e.split(".");
  let a = gs;
  for (const o of n) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, ja = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Ge("gradient.stop.start-opacity", "0.12"),
  mid: Ge("gradient.stop.mid-opacity", "0.03"),
  end: Ge("gradient.stop.end-opacity", "0"),
  triStart: Ge(
    "gradient.stop.triangle-start-opacity",
    Ge("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Ge(
    "gradient.stop.triangle-mid-opacity",
    Ge("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Ge(
    "gradient.stop.triangle-end-opacity",
    Ge("gradient.stop.end-opacity", "0")
  )
});
var kt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(kt || {}), We = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(We || {}), je = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(je || {}), zt = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(zt || {});
const ro = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
ro.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const Sm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, km = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Hl = ro.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: Sm[t],
    category: km[t],
    participatesInRanking: !0
  }, e),
  {}
);
ro.map(
  (e) => Hl[e]
);
var vt = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(vt || {}), gt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(gt || {}), rt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(rt || {}), It = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(It || {}), Dr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(Dr || {}), Ol = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(Ol || {}), Fn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(Fn || {}), Ul = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(Ul || {}), rr = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(rr || {});
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
function Ta(e) {
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
function Da(e) {
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
function Wl(e) {
  switch (e) {
    case rt.Pass:
      return "Target met";
    case rt.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Cm(e, t, n) {
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
function zl(e) {
  return e ? Pt[e]?.token ?? Pt.neither.token : Pt.neither.token;
}
function Nm(e) {
  return e ? Pt[e]?.hex ?? Pt.neither.hex : Pt.neither.hex;
}
var yn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(yn || {});
const jm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Tm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var ot = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ot || {}), Ie = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Ie || {}), Ct = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Ct || {}), ke = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(ke || {});
const Dm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [n, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, Ia = {
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
Object.values(Ia).forEach((e) => {
  e.text || (e.text = Dm(e.hex));
});
const Vl = (e) => Ia[e], ao = (e) => Ia[e].judgement || "none", pi = {
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
function Im(e, t) {
  let n;
  return e === "common_cause" ? n = pi.common : n = pi.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var yt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(yt || {}), Pe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Pe || {}), Ee = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Ee || {}), Ke = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(Ke || {}), wn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(wn || {}), Et = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Et || {}), Wn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Wn || {}), En = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(En || {}), ht = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(ht || {}), Vt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Vt || {});
const fn = {
  [Ke.SinglePoint]: 1,
  [Ke.TwoSigma]: 2,
  [Ke.Shift]: 3,
  [Ke.Trend]: 4
}, hi = 3.267, $m = 2.66, mi = 0.2777;
function Te(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Rn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function gi(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!(t[s] || !Te(o))) {
      if (a !== null) {
        const i = e[a];
        Te(i) && (n[s] = Math.abs(o - i));
      }
      a = s;
    }
  }
  return n;
}
function xi(e, t) {
  const n = e.filter(Te);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const o = Rn(a), i = hi * o;
    a = a.filter((l) => l <= i);
  }
  const s = Rn(a);
  return { mrMean: s, mrUcl: hi * s };
}
function bi(e, t) {
  if (!Te(e) || !Te(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = $m * t, a = 2 / 3 * n, s = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + s,
    lowerOneSigma: e - s
  };
}
function Mm(e, t, n, a) {
  if (e === yt.T) {
    const f = t.map((N) => Te(N) && N > 0 ? Math.pow(N, mi) : null), h = gi(f, n), m = xi(h, a), v = f.filter((N, y) => !n[y] && Te(N)), x = v.length ? Rn(v) : NaN, p = bi(x, m.mrMean), g = (N) => Te(N) && N > 0 ? Math.pow(N, 1 / mi) : null, k = Te(p.upperProcessLimit) ? g(p.upperProcessLimit) : null, M = Te(p.lowerProcessLimit) && p.lowerProcessLimit > 0 ? g(p.lowerProcessLimit) : null, D = Te(p.upperTwoSigma) ? g(p.upperTwoSigma) : null, b = Te(p.lowerTwoSigma) && p.lowerTwoSigma > 0 ? g(p.lowerTwoSigma) : null, T = Te(p.upperOneSigma) ? g(p.upperOneSigma) : null, j = Te(p.lowerOneSigma) && p.lowerOneSigma > 0 ? g(p.lowerOneSigma) : null;
    return {
      mean: Te(x) && x > 0 ? g(x) : null,
      mr: h,
      mrMean: m.mrMean,
      mrUcl: m.mrUcl,
      upperProcessLimit: k,
      lowerProcessLimit: M,
      upperTwoSigma: D,
      lowerTwoSigma: b,
      upperOneSigma: T,
      lowerOneSigma: j
    };
  }
  if (e === yt.G) {
    const f = t.filter((S, _) => !n[_] && Te(S)), h = f.length ? Rn(f) : NaN, m = Te(h) ? 1 / (h + 1) : NaN, v = (S) => {
      if (!Te(m) || m <= 0 || m >= 1) return NaN;
      const _ = Math.ceil(Math.log(1 - S) / Math.log(1 - m)) - 1;
      return Math.max(0, _);
    }, x = 135e-5, p = 1 - 135e-5, g = 0.02275, k = 1 - 0.02275, M = 0.158655, D = 1 - 0.158655, b = v(p), T = v(x), j = v(k), N = v(g), y = v(D), $ = v(M);
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
  if (e !== yt.XmR)
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
  const s = gi(t, n), o = s.filter(Te), i = o.length ? Rn(o) : NaN, l = Te(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, m, v) => {
      if (n[v] || !Te(m)) return h;
      if (!a)
        return h.push(m), h;
      const x = s[v];
      return (x === null || !Te(l) || Te(x) && x <= l) && h.push(m), h;
    }, []);
    c = f.length ? Rn(f) : NaN;
  }
  const u = xi(s, a), d = bi(c, u.mrMean);
  return {
    mean: c,
    mr: s,
    mrMean: u.mrMean,
    mrUcl: u.mrUcl,
    ...d
  };
}
function Pm(e, t) {
  const n = e.map((c, u) => u).filter((c) => !e[c].ghost && Te(e[c].value)), a = (c) => e[c], s = t.shiftPoints, o = t.trendPoints;
  let i = [], l = [];
  for (const c of n) {
    const u = a(c);
    if (!Te(u.mean) || !Te(u.value) ? (i = [], l = []) : u.value > u.mean ? (i.push(c), l = []) : u.value < u.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= s)
      for (const d of i) a(d).shiftUp = !0;
    if (l.length >= s)
      for (const d of l) a(d).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const d = n.slice(c, c + 3).map(a);
    if (!d.every((D) => Te(D.value) && Te(D.mean)))
      continue;
    const f = d[0].mean, h = d.every((D) => D.value > f), m = d.every((D) => D.value < f);
    if (!h && !m)
      continue;
    const v = d[0].upperTwoSigma ?? 1 / 0, x = d[0].lowerTwoSigma ?? -1 / 0, p = d[0].upperProcessLimit ?? 1 / 0, g = d[0].lowerProcessLimit ?? -1 / 0, k = d.filter((D) => t.twoSigmaIncludeAboveThree ? D.value > v : D.value > v && D.value <= p), M = d.filter((D) => t.twoSigmaIncludeAboveThree ? D.value < x : D.value < x && D.value >= g);
    h && k.length >= 2 && k.forEach((D) => D.twoSigmaUp = !0), m && M.length >= 2 && M.forEach((D) => D.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const d = n.slice(c, c + 5).map(a);
      if (!d.every((k) => Te(k.value) && Te(k.mean)))
        continue;
      const f = d[0].mean, h = d.every((k) => k.value > f), m = d.every((k) => k.value < f);
      if (!h && !m)
        continue;
      const v = d[0].upperOneSigma ?? 1 / 0, x = d[0].lowerOneSigma ?? -1 / 0, p = d.filter((k) => k.value > v), g = d.filter((k) => k.value < x);
      h && p.length >= 4 && p.forEach((k) => k.fourOfFiveUp = !0), m && g.length >= 4 && g.forEach((k) => k.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - o; c++) {
    const u = n.slice(c, c + o), d = u.map(a);
    if (!d.every((m) => Te(m.value)))
      continue;
    let f = !0, h = !0;
    for (let m = 1; m < d.length && (d[m].value > d[m - 1].value || (f = !1), d[m].value < d[m - 1].value || (h = !1), !(!f && !h)); m++)
      ;
    f && u.forEach((m) => a(m).trendUp = !0), h && u.forEach((m) => a(m).trendDown = !0);
  }
}
function Gl(e) {
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
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), s = n.reduce((i, l) => Math.max(i, l.rank), 0), o = a > s ? wn.Upwards : s > a ? wn.Downwards : wn.Same;
  return { up: t, dn: n, upMax: a, dnMax: s, primeDirection: o };
}
function vi(e, t) {
  const n = t === Pe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Pe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Pe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Pe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function yi(e, t, n, a = !1, s, o, i = !1) {
  const { up: l, dn: c, upMax: u, dnMax: d, primeDirection: f } = Gl(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, m = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Fm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: s, ruleHierarchy: o }), t === Pe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementHigh : e.specialCauseConcernValue !== null ? Ee.ConcernLow : Ee.CommonCause : t === Pe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementLow : e.specialCauseConcernValue !== null ? Ee.ConcernHigh : Ee.CommonCause : e.variationIcon = Ee.CommonCause;
  const v = e.specialCauseImprovementValue !== null ? Et.Up : e.specialCauseConcernValue !== null ? Et.Down : void 0, x = v === Et.Up ? u : v === Et.Down ? d : Math.max(u, d);
  e.primeRank = x || void 0;
  const p = v === Et.Up ? l.find((g) => g.rank === x) : v === Et.Down ? c.find((g) => g.rank === x) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: m };
}
function Fm(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: s,
    preferTrendWhenConflict: o,
    primeDirection: i = t.primeDirection ?? wn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (o && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const d = !!t.trendUp, f = !!t.trendDown;
    if (n === Pe.Up) {
      if (d && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!d && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Pe.Down) {
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
  const u = s ? En.PreferImprovement : l ?? En.SqlPrimeThenRule;
  if (u === En.PreferImprovement) {
    n === Pe.Up ? t.specialCauseConcernValue = null : n === Pe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (u === En.RuleHierarchy) {
    const d = c ?? [Ke.Trend, Ke.Shift, Ke.TwoSigma, Ke.SinglePoint], { up: f, dn: h } = Gl(t);
    for (const m of d) {
      const v = f.some((p) => p.id === m), x = h.some((p) => p.id === m);
      if (v && !x) {
        n === Pe.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (x && !v) {
        n === Pe.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (v && x) {
        (n === Pe.Up || n === Pe.Down) && (a === Wn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === wn.Upwards ? n === Pe.Up ? t.specialCauseConcernValue = null : n === Pe.Down && (t.specialCauseImprovementValue = null) : i === wn.Downwards ? n === Pe.Up ? t.specialCauseImprovementValue = null : n === Pe.Down && (t.specialCauseConcernValue = null) : a === Wn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var xs = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(xs || {});
function Lm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Am(e) {
  const t = Lm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function wi(e) {
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
  }), s = (i, l, c, u, d, f, h, m) => {
    i.push({
      trendDirection: m,
      start: l,
      end: c,
      side: u,
      minValue: d,
      maxValue: f,
      maxAbsDeltaFromMean: h
    });
  };
  let o = 0;
  for (; o < e.length; ) {
    const i = e[o];
    if (!i || i.value == null || i.ghost || !i.trendUp && !i.trendDown) {
      o++;
      continue;
    }
    const l = i.trendUp ? "Up" : i.trendDown ? "Down" : void 0;
    let c = o, u = o;
    for (; u < e.length; u++) {
      const g = e[u];
      if (!g || g.value == null || g.ghost || !(l === "Up" ? g.trendUp : g.trendDown)) break;
    }
    const d = u - 1, f = [];
    let h, m, v = 1 / 0, x = -1 / 0, p = 0;
    for (let g = c; g <= d; g++) {
      const k = e[g];
      if (k.value == null) continue;
      const M = k.value - (k.mean ?? 0), D = Am(M);
      if (!D) {
        h !== void 0 && (s(f, h, g - 1, m, v, x, p, l), h = void 0, m = void 0, v = 1 / 0, x = -1 / 0, p = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: m, minV: v, maxV: x, maxAbsDelta: p } = (() => {
          const b = n(g, D, k.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(M)
          };
        })());
      else if (D !== m)
        s(f, h, g - 1, m, v, x, p, l), { segStart: h, segSide: m, minV: v, maxV: x, maxAbsDelta: p } = (() => {
          const b = n(g, D, k.value);
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
    h !== void 0 && s(f, h, d, m, v, x, p, l), t.push({ trendDirection: l, start: c, end: d, segments: f }), o = d + 1;
  }
  return t;
}
function Em(e) {
  if (e === Pe.Up) return "Above";
  if (e === Pe.Down) return "Below";
}
function Rm(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function _i(e, t) {
  const n = t.strategy ?? ht.CrossingAfterFavourable, a = Em(t.metricImprovement), s = Rm(a), o = [];
  for (const i of e) {
    if (!a) {
      if (n === ht.ExtremeFavourable || n === ht.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const u of l)
          u.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = u);
        o.push(c);
      }
      continue;
    }
    if (n === ht.FavourableSide) {
      o.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === ht.UnfavourableSide) {
      o.push(...i.segments.filter((l) => l.side === s));
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
      c && o.push(c);
      continue;
    }
    if (n === ht.CrossingAfterUnfavourable) {
      const l = i.segments;
      let c;
      for (let u = 0; u < l.length; u++) {
        const d = l[u];
        if (d.side === s && u > 0 && l[u - 1].side !== s) {
          c = d;
          break;
        }
      }
      if (!c) {
        const u = l.filter((d) => d.side === s);
        u.length > 0 && (c = u.reduce(
          (d, f) => f.end - f.start > d.end - d.start ? f : d,
          u[0]
        ));
      }
      c && o.push(c);
      continue;
    }
    if (n === ht.ExtremeFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (u, d) => d.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean ? d : u
      );
      o.push(c);
      continue;
    }
    if (n === ht.ExtremeUnfavourable) {
      const l = i.segments.filter((u) => u.side === s);
      if (l.length === 0) continue;
      const c = l.reduce((u, d) => d.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean ? d : u);
      o.push(c);
      continue;
    }
    if (n === ht.FirstFavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && o.push(l);
      continue;
    }
    if (n === ht.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === s);
      l && o.push(l);
      continue;
    }
    if (n === ht.LongestFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (u, d) => d.end - d.start > u.end - u.start ? d : u
      );
      o.push(c);
      continue;
    }
    if (n === ht.LongestUnfavourable) {
      const l = i.segments.filter((u) => u.side === s);
      if (l.length === 0) continue;
      const c = l.reduce((u, d) => d.end - d.start > u.end - u.start ? d : u);
      o.push(c);
      continue;
    }
    if (n === ht.LastFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
    if (n === ht.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
  }
  return o;
}
var dt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(dt || {}), Yn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Yn || {});
function Bm(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function so(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", s = t.enableNeutralNoJudgement ?? !0;
  return e.map((o) => {
    if (!o || o.value == null || o.ghost) return "Common";
    const { upAny: i, downAny: l } = Bm(o);
    if (i && l) return "Improvement";
    switch (o.variationIcon) {
      case Ee.ImprovementHigh:
      case Ee.ImprovementLow:
        return "Improvement";
      case Ee.ConcernHigh:
      case Ee.ConcernLow:
        return "Concern";
      case Ee.NeitherHigh:
      case Ee.NeitherLow: {
        if (a === "Ungated" && n !== Pe.Neither) {
          if (i && !l)
            return n === Pe.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Pe.Down ? "Improvement" : "Concern";
        }
        return s ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function Hm(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let s = so(e, {
    metricImprovement: t,
    trendVisualMode: Yn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Pe.Neither) return s;
  const o = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= s.length) return;
    const m = s[f];
    (m === dt.Common || m === dt.NoJudgement) && (s[f] = h);
  }, u = (f) => {
    if (f == null) return null;
    const h = e.reduce((v, x) => (x.partitionId === f && typeof x.value == "number" && !x.ghost && v.push(x.value), v), []);
    return h.length ? h.reduce((v, x) => v + x, 0) / h.length : null;
  }, d = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, m) => {
    if (m === 0) return f;
    const v = e[m - 1];
    return v && h && h.partitionId !== v.partitionId && f.push(m), f;
  }, []);
  for (const f of d) {
    const h = e[f - 1], m = e[f];
    if (!h || !m)
      continue;
    let v = f - 1;
    for (; v - 1 >= 0 && e[v - 1] && e[v - 1].partitionId === h.partitionId; )
      v--;
    let x = f;
    for (; x + 1 < e.length && e[x + 1] && e[x + 1].partitionId === m.partitionId; )
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
    let g = null;
    for (let T = f; T < e.length; T++) {
      const j = e[T];
      if (j.partitionId !== m.partitionId) break;
      if (typeof j.mean == "number") {
        g = j.mean;
        break;
      }
    }
    if (p == null && (p = u(h.partitionId ?? null)), g == null && (g = u(m.partitionId ?? null)), p == null || g == null)
      continue;
    const k = g - p, M = t === Pe.Up ? k > 0 : k < 0, D = M ? dt.Improvement : dt.Concern, b = l === "Same" ? D : M ? dt.Concern : dt.Improvement;
    for (let T = 1; T <= o; T++) {
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
  return s;
}
function Yl(e) {
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
function oo(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, s = Yl(e.settings), o = {
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
    ...s
  }, i = s?.trendSegmentationMode || (s?.trendFavourableSegmentation === !0 ? Vt.Always : s?.trendFavourableSegmentation === !1 ? Vt.Off : o.trendSegmentationMode), l = a.map((x, p) => ({
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
  const d = [], f = (o.trendFavourableSegmentation || i !== Vt.Off) && !o.preferImprovementWhenConflict, h = l.filter((x) => !x.ghost && Te(x.value)).length, m = !!o.chartLevelEligibility && h >= o.minimumPoints;
  let v = 0;
  for (const x of c) {
    v++;
    const p = x.map((b) => b.value), g = x.map((b) => b.ghost), k = Mm(
      t,
      p,
      g,
      !!o.excludeMovingRangeOutliers
    ), M = x.map((b, T) => {
      const j = !b.ghost && Te(b.value) ? p.slice(0, T + 1).filter((y, $) => !g[$] && Te(y)).length : 0, N = m ? !0 : j >= o.minimumPoints;
      return {
        rowId: b.rowId,
        x: b.x,
        value: Te(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: v,
        pointRank: j,
        mean: (N || m) && Te(k.mean) ? k.mean : null,
        upperProcessLimit: N || m ? k.upperProcessLimit : null,
        lowerProcessLimit: N || m ? k.lowerProcessLimit : null,
        upperTwoSigma: N || m ? k.upperTwoSigma : null,
        lowerTwoSigma: N || m ? k.lowerTwoSigma : null,
        upperOneSigma: N || m ? k.upperOneSigma : null,
        lowerOneSigma: N || m ? k.lowerOneSigma : null,
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
    for (const b of M)
      b.ghost || !Te(b.value) || b.mean === null || (Te(b.upperProcessLimit) && b.value > b.upperProcessLimit && (b.singlePointUp = !0), Te(b.lowerProcessLimit) && b.value < b.lowerProcessLimit && (b.singlePointDown = !0));
    Pm(M, {
      shiftPoints: o.shiftPoints,
      trendPoints: o.trendPoints,
      twoSigmaIncludeAboveThree: !!o.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!o.enableFourOfFiveRule
    }), f && ((b) => {
      const T = b.some(
        (S) => (S.singlePointUp || S.twoSigmaUp || S.shiftUp || S.trendUp) && (S.singlePointDown || S.twoSigmaDown || S.shiftDown || S.trendDown)
      );
      if (i === Vt.Off || i === Vt.AutoWhenConflict && !T)
        return;
      const j = wi(b), N = _i(j, {
        metricImprovement: n,
        strategy: o.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
      for (const S of N)
        for (let _ = S.start; _ <= S.end; _++)
          S.trendDirection === xs.Up ? y.add(_) : $.add(_);
      b.forEach((S, _) => {
        S.trendUp = y.has(_) ? S.trendUp : !1, S.trendDown = $.has(_) ? S.trendDown : !1, o.trendDominatesHighlightedWindow && (y.has(_) ? (S.singlePointDown = !1, S.twoSigmaDown = !1, S.shiftDown = !1) : $.has(_) && (S.singlePointUp = !1, S.twoSigmaUp = !1, S.shiftUp = !1));
      });
    })(M);
    for (const b of M) {
      if (b.ghost || !Te(b.value) || b.mean === null) {
        d.push(b);
        continue;
      }
      const { aligned: T, opposite: j } = vi(
        b,
        n
      );
      if (b.specialCauseImprovementValue = T ? b.value : null, b.specialCauseConcernValue = j ? b.value : null, n === Pe.Neither) {
        const N = b.singlePointUp || b.twoSigmaUp || b.shiftUp || b.trendUp, y = b.singlePointDown || b.twoSigmaDown || b.shiftDown || b.trendDown;
        b.variationIcon = N ? Ee.NeitherHigh : y ? Ee.NeitherLow : Ee.CommonCause;
      } else
        yi(b, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
      d.push(b);
    }
  }
  if (o.trendAcrossPartitions) {
    const x = d.map((p, g) => ({ idx: g, r: p })).filter(({ r: p }) => !p.ghost && Te(p.value));
    if (x.length >= o.trendPoints)
      for (let p = 0; p <= x.length - o.trendPoints; p++) {
        const g = x.slice(p, p + o.trendPoints).map((b) => b.idx), k = g.map((b) => d[b]);
        if (!k.every((b) => Te(b.value))) continue;
        let M = !0, D = !0;
        for (let b = 1; b < k.length && (k[b].value > k[b - 1].value || (M = !1), k[b].value < k[b - 1].value || (D = !1), !(!M && !D)); b++)
          ;
        M && g.forEach((b) => d[b].trendUp = !0), D && g.forEach((b) => d[b].trendDown = !0);
      }
  }
  if (o.trendAcrossPartitions) {
    if (f) {
      const x = d.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (i === Vt.Always || i === Vt.AutoWhenConflict && x) {
        const p = wi(d), g = _i(p, { metricImprovement: n, strategy: o.trendSegmentationStrategy }), k = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        for (const D of g)
          for (let b = D.start; b <= D.end; b++)
            D.trendDirection === xs.Up ? k.add(b) : M.add(b);
        d.forEach((D, b) => {
          D.trendUp = k.has(b) ? D.trendUp : !1, D.trendDown = M.has(b) ? D.trendDown : !1, o.trendDominatesHighlightedWindow && (k.has(b) ? (D.singlePointDown = !1, D.twoSigmaDown = !1, D.shiftDown = !1) : M.has(b) && (D.singlePointUp = !1, D.twoSigmaUp = !1, D.shiftUp = !1));
        });
      }
    }
    for (const x of d) {
      if (x.ghost || !Te(x.value) || x.mean === null || n === Pe.Neither) continue;
      const { aligned: p, opposite: g } = vi(x, n);
      x.specialCauseImprovementValue = p ? x.value : null, x.specialCauseConcernValue = g ? x.value : null, yi(x, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
    }
  }
  return { rows: d };
}
function io(e, t) {
  const n = oo(e), a = so(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Yn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), s = t?.boundaryWindows;
  if (!s || s.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const o = s.directionOverride ?? e.metricImprovement, i = Hm(n.rows, o, s), l = a.map((c, u) => {
    const d = i[u];
    if (c === dt.Common || c === dt.NoJudgement) {
      if (d === dt.Improvement) return dt.Improvement;
      if (d === dt.Concern) return dt.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: l };
}
var ql = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(ql || {});
function Om(e, t, n) {
  const a = n?.trendVisualMode ?? Yn.Ungated, s = n?.enableNeutralNoJudgement ?? !0, o = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
  let i;
  switch (t) {
    case "recalc-crossing-shift": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        boundaryIndices: o
      };
      break;
    }
    case "recalc-crossing-trend": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 5,
        prePolarity: "Same",
        boundaryIndices: o
      };
      break;
    }
    case "recalc-crossing-two-sigma": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 1,
        prePolarity: "Same",
        boundaryIndices: o
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
        boundaryIndices: o
      };
      break;
    case "recalculations-recalculated":
    case "none":
    default:
      i = void 0;
  }
  const { rows: l, visuals: c } = io(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: s,
    boundaryWindows: i
  });
  let u = c.slice(), d = o.length ? o[0] : -1;
  if (d < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        d = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && d > 0 && (u[d - 1] = dt.Common), { rows: l, visuals: u };
}
const Xl = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: Wn.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Um(e) {
  return { ...Xl, ...e ?? {} };
}
var lt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(lt || {}), _n = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(_n || {}), pr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(pr || {});
const Kl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Pe.Up ? ot.HigherIsBetter : i.improvementDirection === Pe.Down ? ot.LowerIsBetter : ot.ContextDependent : i.polarity && (l = i.polarity);
    let c;
    const u = i.variationIcon;
    if (u === je.Improvement || u === je.Concern || u === je.Neither || u === je.Suppressed)
      u === je.Improvement ? c = ke.SpecialCauseImproving : u === je.Concern ? c = ke.SpecialCauseDeteriorating : u === je.Neither ? c = ke.CommonCause : c = ke.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case Ee.ImprovementHigh:
        case Ee.ImprovementLow:
          c = ke.SpecialCauseImproving;
          break;
        case Ee.ConcernHigh:
        case Ee.ConcernLow:
          c = ke.SpecialCauseDeteriorating;
          break;
        case Ee.NeitherHigh:
        case Ee.NeitherLow:
          c = i.specialCauseNeutral ? ke.SpecialCauseNoJudgement : ke.CommonCause;
          break;
        case Ee.CommonCause:
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
  const s = {
    [Ct.Improving]: ke.SpecialCauseImproving,
    [Ct.Deteriorating]: ke.SpecialCauseDeteriorating,
    [Ct.No_Judgement]: ke.SpecialCauseNoJudgement,
    [Ct.None]: ke.CommonCause
  }[n.judgement];
  let o;
  return n.judgement === Ct.Improving ? o = n.polarity === ot.LowerIsBetter ? Ie.Lower : Ie.Higher : n.judgement === Ct.Deteriorating ? o = n.polarity === ot.LowerIsBetter ? Ie.Higher : Ie.Lower : o = n.trend ?? Ie.Higher, { state: s, direction: o, polarity: n.polarity };
};
function Zl(e, t) {
  const { state: n, direction: a, polarity: s } = Kl(e), o = ao(n), i = a === Ie.Higher ? "above" : "below", l = a === Ie.Higher ? "upwards" : "downwards", c = (() => {
    switch (s) {
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
      switch (o) {
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
const Qa = (e, t, n, a, s, o) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), lo = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: s = !0,
  gradientWash: o = !1,
  variant: i = _n.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: c = pr.Polarity,
  letterOverride: u,
  ...d
}) => {
  const f = Ir(), h = Ir(), {
    start: m,
    mid: v,
    end: x,
    triStart: p,
    triMid: g,
    triEnd: k
  } = ja(), { state: M, direction: D, polarity: b } = $e(
    () => Kl(e),
    [e]
  ), T = $e(() => Vl(M), [M]), j = $e(() => ao(M), [M]), N = j === Ct.Improving || j === Ct.Deteriorating;
  let y = "";
  a && N && (c === pr.Polarity ? b === ot.HigherIsBetter ? y = "H" : b === ot.LowerIsBetter ? y = "L" : y = "" : y = D === Ie.Higher ? "H" : "L"), u !== void 0 && (y = u);
  const $ = M !== ke.CommonCause, S = M === ke.SpecialCauseNoJudgement, _ = Ge("common-cause", "#A6A6A6"), F = $ ? T.hex : _, w = $e(
    () => Im(M, D),
    [M, D]
  ), I = n || `${T.label}${y ? D === Ie.Higher ? " – Higher" : " – Lower" : ""}`, C = Zl(
    e
  );
  if (i === _n.TriangleWithRun) {
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
    const z = Math.max(0, Math.min(5, Math.floor(l || 0))), de = M === ke.CommonCause ? 160 : D === Ie.Higher ? 220 : 70, ge = 10, le = 26, ie = 150 - 2 * le, Z = M === ke.SpecialCauseImproving ? Ge("improvement", "#00B0F0") : M === ke.SpecialCauseDeteriorating ? Ge("concern", "#E46C0A") : _, te = Array.from({ length: 5 }).map((ue, se) => {
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
    }), ce = Qa(
      T.hex,
      f,
      h,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: g },
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
              fill: o ? `url(#${h})` : "#ffffff",
              ...s ? { filter: `url(#${f})` } : {},
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
  if (i === _n.Triangle) {
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
    const de = Qa(
      T.hex,
      f,
      h,
      s,
      o,
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
        "aria-label": I,
        "aria-description": C,
        ...d,
        children: [
          de,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${h})` : "#ffffff",
              ...s ? { filter: `url(#${f})` } : {},
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
  const P = Qa(
    T.hex,
    f,
    h,
    s,
    o,
    [
      { offset: "0%", opacity: m },
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
            fill: o ? `url(#${h})` : "#ffffff",
            ...s ? { filter: `url(#${f})` } : {},
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
lo.displayName = "SPCVariationIcon";
const Wm = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function zm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function Vm(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), s = a >= 0 ? e.length - 1 - a : null, o = s != null ? e[s].value : null;
  return { mean: n, latestValue: o, latestIndex: s };
}
function Gm(e) {
  switch (e) {
    case ke.SpecialCauseImproving:
      return Ge("improvement", "#00B0F0");
    case ke.SpecialCauseDeteriorating:
      return Ge("concern", "#E46C0A");
    case ke.SpecialCauseNoJudgement:
      return Ge("no-judgement", "#490092");
    case ke.CommonCause:
      return Ge("common-cause", "#A6A6A6");
    default:
      return Ge("common-cause", "#A6A6A6");
  }
}
const Jl = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: s = !0,
  showLimitBand: o = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: c = !0,
  variationState: u,
  autoClassify: d = !1,
  metricImprovement: f,
  gradientWash: h = !1,
  size: m = "sm",
  ariaLabel: v,
  className: x,
  onPointClick: p,
  onClassification: g,
  maxPoints: k,
  thinningStrategy: M = "stride",
  colorPointsBySignal: D = !0,
  centerLine: b,
  controlLimits: T,
  sigmaBands: j,
  pointSignals: N,
  pointNeutralSpecialCause: y
}) => {
  const $ = f, S = $e(
    () => zm(e, t),
    [e, t]
  ), _ = $e(() => Vm(S), [S]), F = Wm[m], w = Math.max(S.length * 6, 60), I = F.height, C = 4, P = 2, ee = $e(() => (e?.length ?? 0) - (S?.length ?? 0), [e?.length, S?.length]), R = S.filter((A) => A.value != null).map((A) => A.value), B = b ?? _.mean, H = $e(() => {
    if (B == null) return null;
    const A = [];
    if (j?.upperOne != null && A.push(Math.abs(j.upperOne - B)), j?.lowerOne != null && A.push(Math.abs(B - j.lowerOne)), A.length) return A.reduce((J, W) => J + W, 0) / A.length;
    const O = [];
    return T?.upper != null && O.push(Math.abs(T.upper - B) / 3), T?.lower != null && O.push(Math.abs(B - T.lower) / 3), O.length ? O.reduce((J, W) => J + W, 0) / O.length : null;
  }, [j?.upperOne, j?.lowerOne, T?.upper, T?.lower, B]), re = $e(() => {
    if (H != null || !R.length || B == null || R.length < 2) return null;
    const A = [];
    for (let J = 1; J < R.length; J++) {
      const W = R[J - 1], L = R[J];
      W != null && L != null && A.push(Math.abs(L - W));
    }
    return A.length ? A.reduce((J, W) => J + W, 0) / A.length / 1.128 : null;
  }, [H, R.join(","), B]), z = H ?? re, de = $e(() => {
    if (!s) return null;
    if (T) return T;
    if (B == null || z == null) return null;
    const A = 3 * z;
    return { lower: B - A, upper: B + A };
  }, [s, B, z, T?.lower, T?.upper]), ge = $e(() => {
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
  xt.useEffect(() => {
    d && !u && g && g(ge);
  }, [ge, d, u, g]);
  const le = ge.state, ie = Gm(le), Z = (A) => {
    const O = S.filter((G) => G.value != null);
    if (!O.length) return I / 2;
    const J = O.map((G) => G.value);
    de && (de.lower != null && J.push(de.lower), de.upper != null && J.push(de.upper));
    const W = Math.min(...J), L = Math.max(...J);
    return W === L ? I / 2 : I - (A - W) / (L - W) * (I - P * 2) - P;
  }, te = $e(() => {
    if (!k || S.length <= k)
      return S.map((K, Q) => Q);
    if (M === "stride") {
      const K = Math.max(2, k), Q = (S.length - 1) / (K - 1), X = /* @__PURE__ */ new Set();
      for (let ae = 0; ae < K; ae++) X.add(Math.round(ae * Q));
      return X.add(S.length - 1), Array.from(X).sort((ae, me) => ae - me);
    }
    const A = S.map((K, Q) => ({ i: Q, v: K.value }));
    function O(K, Q, X) {
      const ae = K.i, me = K.v ?? 0, be = Q.i, we = Q.v ?? 0, Ce = X.i, pe = X.v ?? 0, De = Math.abs((pe - we) * ae - (Ce - be) * me + Ce * we - pe * be), Re = Math.hypot(pe - we, Ce - be);
      return Re === 0 ? 0 : De / Re;
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
  }, [S, k, M]), ce = $e(
    () => te.map((A) => S[A]),
    [te, S]
  ), V = $e(() => {
    let A = "";
    return ce.forEach((O, J) => {
      if (O.value == null) return;
      const W = Z(O.value), L = J / (ce.length - 1 || 1) * (w - C * 2) + C;
      A += A ? ` L ${L} ${W}` : `M ${L} ${W}`;
    }), A;
  }, [ce, w]), ue = _.latestIndex ?? -1, se = de, he = ja(), E = $e(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [S.length, h]
  ), U = S.length >= (n || 0), oe = v || "SPC sparkline", fe = (() => {
    if (!le) return;
    const A = $ === Pe.Up ? ot.HigherIsBetter : $ === Pe.Down ? ot.LowerIsBetter : ot.ContextDependent, O = {
      variationIcon: le === ke.SpecialCauseImproving ? "improvement" : le === ke.SpecialCauseDeteriorating ? "concern" : le === ke.SpecialCauseNoJudgement ? "none" : "neither",
      trend: $ === Pe.Up ? Ie.Higher : Ie.Lower,
      polarity: A
    };
    try {
      return Zl(O);
    } catch {
      return;
    }
  })(), ne = $e(() => {
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
          o && /* @__PURE__ */ r.jsx(
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
            stroke: Ge("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: V,
            fill: "none",
            stroke: Ge("common-cause", "#A6A6A6"),
            strokeWidth: F.stroke,
            strokeLinecap: "round"
          }
        ),
        te.map((A, O) => {
          const J = S[A];
          if (!J || J.value == null) return null;
          const W = Z(J.value), L = O / (ce.length - 1 || 1) * (w - C * 2) + C, K = (A === ue && l ? F.pointR + 1 : F.pointR) - 0.5;
          let Q = Ge("common-cause", "#A6A6A6");
          if (D) {
            const X = N?.[ee + A];
            if (X === "improvement")
              Q = Ge("improvement", "#00B0F0");
            else if (X === "concern")
              Q = Ge("concern", "#E46C0A");
            else if (y?.[ee + A])
              Q = Ge("no-judgement", "#490092");
            else if (B != null) {
              const me = J.value, be = T?.upper ?? (z != null ? B + 3 * z : null), we = T?.lower ?? (z != null ? B - 3 * z : null);
              be != null && me > be ? Q = Ge("improvement", "#00B0F0") : we != null && me < we ? Q = Ge("concern", "#E46C0A") : Q = Ge("common-cause", "#A6A6A6");
            } else
              Q = Ge("common-cause", "#A6A6A6");
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
            children: $ === Pe.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Jl.displayName = "SPCSpark";
const Se = (e) => typeof e == "number" && Number.isFinite(e), Ym = (e) => e.reduce((t, n) => t + n, 0), Ot = (e) => e.length ? Ym(e) / e.length : NaN;
function Ql(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!t[s] && Se(o)) {
      if (a !== null) {
        const i = e[a];
        n[s] = Se(i) ? Math.abs(o - i) : null;
      }
      a = s;
    }
  }
  return n;
}
function ec(e, t) {
  const n = e.filter((o) => Se(o));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Ot(n), s = 3.267 * a;
  if (t) {
    const o = n.filter((i) => i <= s);
    o.length && o.length !== n.length && (a = Ot(o), s = 3.267 * a);
  }
  return { mrMean: a, mrUcl: s };
}
function qm(e, t) {
  if (!Se(e) || !Se(t))
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
const Xm = 0.2777, Km = 3.6, Zm = (e) => Se(e) && e >= 0 ? Math.pow(e, Xm) : null, gn = (e) => Se(e) && e >= 0 ? Math.pow(e, Km) : null;
function Jm(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const Mn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Qm(e) {
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
  const t = 1 / (e + 1), n = (d) => Jm(d, t) - 1, a = n(0.5), s = Math.max(0, n(Mn.three.low)), o = n(Mn.three.high), i = Math.max(0, n(Mn.one.low)), l = n(Mn.one.high), c = Math.max(0, n(Mn.two.low)), u = n(Mn.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: c, twoHigh: u };
}
function eg(e, t, n) {
  const a = e.map((N) => Se(N) ? Zm(N) : null), s = Ql(a, t), { mrMean: o } = ec(s, !!n), i = a.filter((N, y) => !t[y] && Se(N)), l = i.length ? Ot(i) : NaN;
  if (!Se(l) || !Se(o))
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
  const c = 2.66, u = 2 / 3 * c, d = 1 / 3 * c, f = l + c * o, h = l - c * o, m = l + u * o, v = l - u * o, x = l + d * o, p = l - d * o, g = gn(l), k = gn(f), M = h <= 0 ? null : gn(h), D = gn(x), b = p <= 0 ? null : gn(p), T = gn(m), j = v <= 0 ? null : gn(v);
  return {
    center: g ?? null,
    upperProcessLimit: k ?? null,
    lowerProcessLimit: M ?? null,
    upperTwoSigma: T ?? null,
    lowerTwoSigma: j ?? null,
    upperOneSigma: D ?? null,
    lowerOneSigma: b ?? null,
    mr: s,
    mrMean: o,
    mrUcl: Se(o) ? 3.267 * o : null
  };
}
function tg(e) {
  const {
    metricImprovement: t,
    capabilityMode: n,
    value: a,
    mean: s,
    upperProcessLimit: o,
    lowerProcessLimit: i,
    target: l
  } = e, c = (u) => typeof u == "number" && Number.isFinite(u);
  return !c(a) || s === null || !c(l) ? rt.None : n && c(o) && c(i) ? t === We.Up ? c(i) && i > l ? rt.Pass : c(o) && o < l ? rt.Fail : rt.None : t === We.Down ? c(o) && o < l ? rt.Pass : c(i) && i > l ? rt.Fail : rt.None : rt.None : t === We.Down ? a <= l ? rt.Pass : rt.Fail : t === We.Up ? a >= l ? rt.Pass : rt.Fail : rt.None;
}
function ng(e, t) {
  const {
    W: n,
    minGap: a,
    minDeltaSigma: s,
    scoreThreshold: o,
    isShiftUpAt: i,
    isShiftDownAt: l,
    isTrendUpAt: c,
    isTrendDownAt: u,
    isSingleUpAt: d,
    isSingleDownAt: f
  } = t, h = [];
  let m = 0;
  for (let v = 0; v < e.length; v++) {
    const x = e[v];
    v > 0 && e[v - 1].partitionId !== x.partitionId && (m = v);
    const p = v > 0 && i(v - 1), g = v > 0 && l(v - 1), k = v > 0 && c(v - 1), M = v > 0 && u(v - 1), D = v > 0 && d(v - 1), b = v > 0 && f(v - 1), T = i(v), j = l(v), N = c(v), y = u(v), $ = d(v), S = f(v), _ = [];
    T && !p && _.push({ reason: It.Shift, index: v }), j && !g && _.push({ reason: It.Shift, index: v }), N && !k && _.push({ reason: It.Trend, index: v }), y && !M && _.push({ reason: It.Trend, index: v }), $ && !D && _.push({ reason: It.Point, index: v }), S && !b && _.push({ reason: It.Point, index: v });
    for (const F of _) {
      if (F.index - m < a) continue;
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
      if (Math.abs(z) < s * B) continue;
      const ge = e.slice(C, P + 1).filter(
        (V) => V.variationIcon === je.Concern
      ).length;
      if (ge > 1) continue;
      const le = (V) => {
        const ue = Ot(V);
        return V.length ? V.reduce((se, he) => se + (he - ue) * (he - ue), 0) / V.length : 0;
      }, ie = le(ee), Z = le(Y);
      let te = F.reason === It.Shift ? 90 : F.reason === It.Trend ? 70 : 60;
      if (Z < ie && (te += 10), te -= ge * 15, te < o) continue;
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
function es() {
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
var Rt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Rt || {}), qr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(qr || {}), Xr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Xr || {});
function rg(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function ag(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => Se(d.value));
  if (s.length < a * 2) return;
  const o = n === We.Up || n === We.Neither, i = n === We.Down;
  function l(d, f) {
    const h = s.slice(d, f).map((m) => m.value);
    return h.length ? Ot(h) : NaN;
  }
  let c = null;
  if (s.length > 1) {
    const d = [];
    for (let h = 1; h < s.length; h++) d.push(Math.abs(s[h].value - s[h - 1].value));
    const f = Ot(d);
    Se(f) && f > 0 && (c = f * (2.66 / 3));
  }
  if (!c || c <= 0) return;
  const u = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= s.length - a; d++) {
    const f = d - a, h = l(f, d), m = l(d, d + a);
    if (!Se(h) || !Se(m)) continue;
    const x = (m - h) / c;
    if (!(o ? x >= u : i ? -x >= u : Math.abs(x) >= u)) continue;
    const g = s.slice(d, d + a).map((D) => D.value);
    if (!(o ? g.every((D) => D > h) : i ? g.every((D) => D < h) : g.every((D) => o ? D > h : D < h))) continue;
    const M = s[d].idx;
    e[M].baseline || (e[M].baseline = !0);
    return;
  }
}
function tc(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, s = n.precedence ?? {}, o = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, c = n.capability ?? {}, u = n.grace ?? {}, d = n.baselineSuggest ?? {}, f = n.autoRecalc ?? {}, h = u.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, m = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (es()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const v = globalThis;
  !es() && t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && u.emergingEnabled === void 0 && !v.__spc_warn_emergingDirectionGrace && (v.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !es() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !v.__spc_warn_collapseClusterRules && (v.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
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
    collapseWeakerClusterRules: m ?? t.collapseWeakerClusterRules,
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
  }), g = { ...p, ...x(t) };
  if (h !== void 0 && (g.emergingGraceEnabled = h, g.grace = { ...g.grace, emergingEnabled: h }), p.collapseWeakerClusterRules !== void 0) {
    const k = p.collapseWeakerClusterRules;
    g.collapseWeakerClusterRules = k, g.rules = { ...g.rules, collapseWeakerClusterRules: k };
  }
  return x(g);
}
function nc(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: s = {}
  } = e, o = tc(s), i = {
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
    precedenceStrategy: Dr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((p, g) => ({
    rowId: g + 1,
    x: p.x,
    value: Se(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: Se(p.target) ? p.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      ag(l, o, n);
    } catch {
    }
  const c = rg(l), u = [], d = [], h = l.filter(
    (p) => !p.ghost && Se(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let m = 0;
  const v = {};
  for (const p of c) {
    m++;
    const g = p.map((_) => _.value), k = p.map((_) => _.ghost);
    let M = new Array(g.length).fill(null), D = NaN, b = NaN, T = NaN, j = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      M = Ql(g, k);
      const _ = g.filter(
        (w, I) => !k[I] && Se(w)
      );
      D = _.length ? Ot(_) : NaN;
      const F = ec(
        M,
        !!i.excludeMovingRangeOutliers
      );
      b = F.mrMean, T = F.mrUcl, j = qm(D, b);
    } else if (t === "T") {
      const _ = eg(
        g,
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
      const _ = g.filter(
        (I, C) => !k[C] && Se(I)
      ), F = _.length ? Ot(_) : NaN, w = Qm(F);
      D = w.cl ?? NaN, j = {
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
    const N = p.map((_, F) => {
      const w = !_.ghost && Se(_.value) ? g.slice(0, F + 1).filter((ee, Y) => !k[Y] && Se(ee)).length : 0, I = h, C = I ? j : {
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
        partitionId: m,
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
    v[m] = N.filter(
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
      for (const w of u.filter((I) => I.partitionId === m))
        !w.ghost && Se(w.value) && F++, F > _ && (w.mean = w.upperProcessLimit = w.lowerProcessLimit = null, w.upperTwoSigma = w.lowerTwoSigma = w.upperOneSigma = w.lowerOneSigma = null);
    }
  }
  for (const p of u) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const g = [];
    p.specialCauseShiftUp && g.push(gt.ShiftHigh), p.specialCauseShiftDown && g.push(gt.ShiftLow), p.specialCauseTrendUp && g.push(gt.TrendIncreasing), p.specialCauseTrendDown && g.push(gt.TrendDecreasing), p.specialCauseSinglePointUp && g.push(gt.SinglePointAbove), p.specialCauseSinglePointDown && g.push(gt.SinglePointBelow), p.specialCauseTwoOfThreeUp && g.push(gt.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && g.push(gt.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && g.push(gt.FourOfFiveAbove), p.specialCauseFourOfFiveDown && g.push(gt.FourOfFiveBelow), p.specialCauseFifteenInnerThird && g.push(gt.FifteenInnerThird), g.length && (p.ruleTags = g);
  }
  for (let p = 0; p < u.length; p++) {
    const g = u[p];
    if (Object.prototype.hasOwnProperty.call(g, rr.ImprovementValueBeforePruning) || Object.defineProperty(g, rr.ImprovementValueBeforePruning, {
      get() {
        return g.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(g, rr.ConcernValueBeforePruning) || Object.defineProperty(g, rr.ConcernValueBeforePruning, {
      get() {
        return g.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), g.ghost || !Se(g.value) || g.mean === null) {
      g.variationIcon = je.Suppressed;
      continue;
    }
    const k = g.value > g.mean, M = g.value < g.mean;
    i.rules?.collapseWeakerClusterRules && (g.specialCauseTwoOfThreeUp && g.specialCauseFourOfFiveUp && (g.specialCauseTwoOfThreeUp = !1), g.specialCauseTwoOfThreeDown && g.specialCauseFourOfFiveDown && (g.specialCauseTwoOfThreeDown = !1));
    const D = g.specialCauseTrendUp && k, b = g.specialCauseTrendDown && M, T = g.specialCauseSinglePointUp || g.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && g.specialCauseFourOfFiveUp || g.specialCauseShiftUp || D, j = g.specialCauseSinglePointDown || g.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && g.specialCauseFourOfFiveDown || g.specialCauseShiftDown || b;
    let N = !1;
    if (i.precedenceStrategy === Dr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const $ = i.specialCauseTrendPoints || 6;
      if ($ > 1 && !(g.specialCauseTrendUp || g.specialCauseTrendDown)) {
        const S = $ - 1, _ = [];
        for (let F = p; F >= 0 && _.length < S; F--) {
          const w = u[F];
          !w.ghost && Se(w.value) && w.mean !== null && _.unshift(w);
        }
        if (_.length === S) {
          let F = !0;
          for (let w = 1; w < _.length && F; w++)
            n === We.Up ? _[w].value > _[w - 1].value || (F = !1) : n === We.Down && _[w].value < _[w - 1].value || (F = !1);
          N = F;
        }
      }
    }
    if (i.precedenceStrategy === Dr.DirectionalFirst) {
      const S = n === We.Up ? T : n === We.Down ? j : !1, _ = n === We.Up ? j : n === We.Down ? T : !1;
      S && !_ ? g.variationIcon = je.Improvement : _ && !S ? g.variationIcon = N ? je.Neither : je.Concern : S && _ ? g.variationIcon = N || g.specialCauseTrendUp || g.specialCauseTrendDown ? je.Improvement : je.Neither : g.variationIcon = je.Neither;
    } else
      n === We.Up ? g.variationIcon = T ? je.Improvement : j ? je.Concern : je.Neither : n === We.Down ? g.variationIcon = j ? je.Improvement : T ? je.Concern : je.Neither : g.variationIcon = je.Neither;
    const y = T || j;
    if (g.specialCauseImprovementValue = y && g.variationIcon === je.Improvement ? g.value : null, g.specialCauseConcernValue = y && g.variationIcon === je.Concern ? g.value : null, g.specialCauseNeitherValue = y && g.variationIcon === je.Neither ? g.value : null, i.conflictPrecedenceMode === Ol.SqlRankingV26a && g.specialCauseImprovementValue !== null && g.specialCauseConcernValue !== null) {
      const $ = [];
      g.specialCauseSinglePointUp && $.push({ id: zt.SinglePoint, rank: 1, side: vt.Up }), g.specialCauseSinglePointDown && $.push({ id: zt.SinglePoint, rank: 1, side: vt.Down }), g.specialCauseTwoOfThreeUp && $.push({ id: zt.TwoSigma, rank: 2, side: vt.Up }), g.specialCauseTwoOfThreeDown && $.push({ id: zt.TwoSigma, rank: 2, side: vt.Down }), g.specialCauseShiftUp && $.push({ id: zt.Shift, rank: 3, side: vt.Up }), g.specialCauseShiftDown && $.push({ id: zt.Shift, rank: 3, side: vt.Down }), g.specialCauseTrendUp && $.push({ id: zt.Trend, rank: 4, side: vt.Up }), g.specialCauseTrendDown && $.push({ id: zt.Trend, rank: 4, side: vt.Down });
      const S = $.filter((Y) => Y.side === vt.Up).reduce((Y, R) => Math.max(Y, R.rank), 0), _ = $.filter((Y) => Y.side === vt.Down).reduce((Y, R) => Math.max(Y, R.rank), 0);
      let F;
      S > _ ? F = Fn.Upwards : _ > S ? F = Fn.Downwards : F = Fn.Same;
      const w = g.specialCauseImprovementValue, I = g.specialCauseConcernValue;
      F === Fn.Upwards ? n === We.Up ? g.specialCauseConcernValue = null : n === We.Down && (g.specialCauseImprovementValue = null) : F === Fn.Downwards ? n === We.Up ? g.specialCauseImprovementValue = null : n === We.Down && (g.specialCauseConcernValue = null) : g.variationIcon === je.Improvement ? g.specialCauseConcernValue = null : g.variationIcon === je.Concern ? g.specialCauseImprovementValue = null : g.specialCauseConcernValue = null, g.specialCauseImprovementValue !== null && g.specialCauseConcernValue === null ? g.variationIcon = je.Improvement : g.specialCauseConcernValue !== null && g.specialCauseImprovementValue === null ? g.variationIcon = je.Concern : g.specialCauseImprovementValue === null && g.specialCauseConcernValue === null && (g.variationIcon = je.Neither);
      const C = g.specialCauseImprovementValue !== null ? vt.Up : g.specialCauseConcernValue !== null ? vt.Down : void 0, P = C === vt.Up ? S : C === vt.Down ? _ : Math.max(S, _), ee = $.find((Y) => Y.rank === P && (!C || Y.side === C));
      g.conflictPrimeDirection = F, g.conflictResolved = !0, g.conflictResolvedRank = P || void 0, ee && (g.conflictResolvedByRuleId = ee.id), g.pruningMode = Ul.Conflict, g.originalSpecialCauseImprovementValue = w, g.originalSpecialCauseConcernValue = I;
    }
    {
      const $ = l[g.rowId - 1], S = tg({
        metricImprovement: n,
        capabilityMode: i.assuranceCapabilityMode,
        value: g.value,
        mean: g.mean,
        upperProcessLimit: g.upperProcessLimit,
        lowerProcessLimit: g.lowerProcessLimit,
        target: Se($?.target) ? $.target : null
      });
      g.assuranceIcon = S;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !h) {
    const p = l.filter(
      (g) => !g.ghost && Se(g.value)
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
    let g = 0;
    for (const k of u)
      !k.ghost && Se(k.value) && g++, g > p && (k.mean = k.upperProcessLimit = k.lowerProcessLimit = null, k.upperTwoSigma = k.lowerTwoSigma = k.upperOneSigma = k.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === kt.XmR || t === kt.G)) {
    const p = l.filter(
      (g) => !g.ghost && (g.value === null || g.value === void 0 || !Se(g.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === kt.T || t === kt.G) && l.some((g) => Se(g.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === kt.T || t === kt.G)) {
    const p = l.filter((g) => g.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(v).forEach(([p, g]) => {
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
    u.forEach((g) => {
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
  let x;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, g = i.baselineSuggestMinGap, k = i.baselineSuggestMinDeltaSigma, M = i.baselineSuggestScoreThreshold;
    x = ng(
      u.map((b) => ({
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
function Si(e, t) {
  return e === "improvement" ? ke.SpecialCauseImproving : e === "concern" ? ke.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? ke.SpecialCauseNoJudgement : e === "neither" ? ke.CommonCause : null;
}
function sg(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function og(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function ig(e) {
  const {
    values: t,
    x: n,
    chartType: a = yt.XmR,
    metricImprovement: s = Pe.Neither,
    showLimits: o = !0,
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
      return nc({ chartType: a, metricImprovement: s, data: b, settings: {} });
    } catch {
      return null;
    }
  }, [d, a, s]), h = q.useMemo(() => {
    const b = f?.rows;
    if (!b || b.length === 0) return null;
    for (let T = b.length - 1; T >= 0; T--) {
      const j = b[T];
      if (j && j.value != null && !j.ghost) return j;
    }
    return b[b.length - 1] ?? null;
  }, [f]), m = q.useMemo(() => {
    const b = f?.rowsRepresentative ?? f?.rows;
    if (!b || !Array.isArray(b) || b.length === 0) return null;
    const T = b[b.length - 1];
    return Si(
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
  } : null, [h]), g = q.useMemo(() => {
    const b = f?.rows;
    if (!(!b || b.length === 0))
      return b.map((T) => {
        const j = !!T?.specialCauseSinglePointUp || !!T?.specialCauseTwoOfThreeUp || !!T?.specialCauseFourOfFiveUp || !!T?.specialCauseShiftUp || !!T?.specialCauseTrendUp, N = !!T?.specialCauseSinglePointDown || !!T?.specialCauseTwoOfThreeDown || !!T?.specialCauseFourOfFiveDown || !!T?.specialCauseShiftDown || !!T?.specialCauseTrendDown;
        switch (s) {
          case Pe.Up:
            return j ? "improvement" : N ? "concern" : "neither";
          case Pe.Down:
            return N ? "improvement" : j ? "concern" : "neither";
          case Pe.Neither:
          default:
            return "neither";
        }
      });
  }, [f, s]), k = q.useMemo(() => {
    const b = f?.rows;
    if (!(!b || b.length === 0))
      return b.map((T) => !!T?.specialCauseNeitherValue);
  }, [f]), M = q.useMemo(() => {
    let b = null;
    if (h && h.value != null && !h.ghost) {
      const F = h.variationIcon, w = (h?.specialCauseNeitherValue ?? null) != null;
      m === ke.SpecialCauseNoJudgement ? b = sg(F, w) ? ke.SpecialCauseNoJudgement : ke.CommonCause : b = Si(F, w) ?? ke.CommonCause;
    }
    const T = b ?? ke.CommonCause, j = Ia[T].hex, [N, y, $] = og(j), S = ja();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${N}, ${y}, ${$}, ${S.start}) 0%, rgba(${N}, ${y}, ${$}, ${S.mid}) 50%, rgba(${N}, ${y}, ${$}, ${S.end}) 100%)`,
      "--fdp-metric-card-accent": j
    };
  }, [h, m]);
  return { sparkProps: q.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: o,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: s,
    centerLine: v,
    controlLimits: x,
    sigmaBands: p,
    pointSignals: g,
    pointNeutralSpecialCause: k,
    variationState: m ?? void 0,
    autoClassify: !!(u && !m),
    onClassification: () => {
    }
  }), [
    d,
    c,
    o,
    i,
    l,
    s,
    u,
    m,
    v,
    x?.lower,
    x?.upper,
    p?.upperOne,
    p?.upperTwo,
    p?.lowerOne,
    p?.lowerTwo,
    g?.length,
    k?.length
  ]), metricCardStyle: M, latestState: m };
}
function ki(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function lg(e, t, n) {
  const a = new Array(e), s = new Date(t);
  for (let o = 0; o < e; o++)
    switch (a[o] = new Date(s), n) {
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
  return a;
}
function cg(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++) a.push(n[c].getTime() - n[c - 1].getTime());
  const s = a.sort((c, u) => c - u), o = s[Math.floor(s.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return o <= 2 * i ? "hourly" : o <= 2 * l ? "daily" : o <= 10 * l ? "weekly" : o <= 45 * l ? "monthly" : o <= 120 * l ? "quarterly" : "annually";
}
function Ci(e, t) {
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
function ug(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const s = e.filter((l) => l != null);
  if (!s.length) return;
  const o = Math.min(...s), i = Math.max(...s);
  if (a === "0-1") {
    if (o >= 0 && i <= 1 && i > 0) return "%";
  } else if (o >= 0 && i <= 100 && i > 0) return "%";
}
function dg(e, t, n = 1) {
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
function rc(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: s,
    providedUnit: o,
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
  let m = (n || []).map(ki);
  if (!m.some(Boolean)) {
    const y = ki(s);
    y && a ? m = lg(f.length, y, a) : m = new Array(f.length).fill(void 0);
  }
  const x = cg(m, a), p = ug(f, o, i, e.percentHeuristic), g = l && h >= 0 && f[h] != null ? f[h] : void 0, k = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function M() {
    if (h < 0) return -1;
    if (k.strategy === "previous" || k.strategy === "n-points") {
      let F = h - (k.strategy === "previous" ? 1 : Math.max(1, k.n || 1));
      if (!k.skipNulls) return F;
      for (let w = F; w >= 0; w--) if (f[w] != null) return w;
      return -1;
    }
    const y = m[h];
    if (!y) return -1;
    const $ = new Date(y);
    $.setFullYear($.getFullYear() - 1);
    let S = -1, _ = 1 / 0;
    for (let F = 0; F < m.length; F++) {
      const w = m[F];
      if (!w || f[F] == null) continue;
      const I = Math.abs(w.getTime() - $.getTime());
      I < _ && (_ = I, S = F);
    }
    return S;
  }
  const D = M(), b = D >= 0 ? f[D] : null;
  let T;
  if (c && g != null && b != null) {
    const y = g - b, $ = k.absolute !== !1, S = $ ? y : b === 0 ? 0 : y / Math.abs(b) * 100;
    T = {
      value: Number.isFinite(S) ? Number(S.toFixed(2)) : 0,
      isPercent: $ ? p === "%" : !0,
      period: `vs ${dg(x, a, k.strategy === "n-points" ? Math.max(1, k.n || 1) : 1)}`
    };
  }
  const j = h >= 0 ? m[h] : void 0, N = u && Ci(j, x) ? `Latest: ${Ci(j, x)}` : void 0;
  return { value: g, unit: p, delta: T, metadata: N, latestDate: j, frequency: x };
}
const ny = ({
  sparkData: e,
  direction: t = Pe.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: s = !1,
  showInnerBands: o = !1,
  autoClassify: i = !0,
  maxPoints: l,
  autoValue: c = !0,
  autoDelta: u = !0,
  autoMetadata: d = !0,
  defaultUnit: f,
  intervalHint: h,
  startDate: m,
  deltaConfig: v,
  ...x
}) => {
  const p = ig({
    values: e.map((j) => j.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: s,
    showInnerBands: o,
    showMean: n,
    autoClassify: i
  }), g = /* @__PURE__ */ r.jsx(Jl, { ...p.sparkProps, maxPoints: l }), k = q.useMemo(() => rc({
    values: e.map((j) => typeof j.value == "number" ? j.value : null),
    dates: e.map((j) => j.date),
    intervalHint: h,
    startDate: m,
    providedUnit: x.unit,
    defaultUnit: f,
    autoValue: c,
    autoDelta: u,
    autoMetadata: d,
    deltaConfig: v
  }), [e, h, m, x.unit, f, c, u, d, v]), M = c && k.value != null ? k.value : x.value, D = u && k.delta ? k.delta : x.delta, b = k.unit || x.unit, T = d && k.metadata ? k.metadata : x.metadata;
  return /* @__PURE__ */ r.jsx(
    _m,
    {
      ...x,
      value: M,
      unit: b,
      delta: D,
      metadata: T,
      visual: g,
      style: p.metricCardStyle
    }
  );
};
function fg({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [s, o] = q.useState(""), i = q.useRef("");
  return q.useEffect(() => {
    if (!t) {
      i.current !== "" && (i.current = "", o(""));
      return;
    }
    const l = e.length;
    if (!l) {
      const f = "Diagnostics: no warnings.";
      f !== i.current && (i.current = f, o(f));
      return;
    }
    const c = {
      error: e.filter((f) => f.severity === Rt.Error).length,
      warning: e.filter((f) => f.severity === Rt.Warning).length,
      info: e.filter((f) => f.severity === Rt.Info).length
    }, u = [];
    c.error && u.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && u.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && u.push(`${c.info} info`);
    const d = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${u.join(", ")}).`;
    d !== i.current && (i.current = d, o(d));
  }, [t, e]), t ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    s && /* @__PURE__ */ r.jsx(
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
                node: /* @__PURE__ */ r.jsx(Ye, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (u) => u.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ r.jsx(Ye, { color: "purple", text: n(l.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(Ye, { color: "grey", text: a(l.code) }),
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
function pg({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const co = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: s,
  gradientWash: o = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...c
}) => {
  const u = Ir(), d = Ir(), { start: f, mid: h, end: m } = ja(), v = s || jm[e], x = (i || Tm[e]).slice(0, 2), p = n || `Assurance ${e}`;
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
          o && /* @__PURE__ */ r.jsxs("linearGradient", { id: d, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: v, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: v, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(m) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${d})` : "#ffffff",
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
          e === yn.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === yn.Uncertain ? /* @__PURE__ */ r.jsx(
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
co.displayName = "SPCAssuranceIcon";
const hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: yn,
  Direction: Ie,
  MetricPolarity: ot,
  SPCAssuranceIcon: co,
  SPCVariationIcon: lo,
  VariationJudgement: Ct,
  VariationState: ke,
  getVariationColour: Vl,
  getVariationTrend: ao
}, Symbol.toStringTag, { value: "Module" }));
function mg(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: s, variant: o, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (l.filter(
    (b) => !b.data.ghost && b.data.value != null
  ).length < c) return null;
  let d = -1;
  for (let b = l.length - 1; b >= 0; b--) {
    const T = l[b];
    if (T && T.data.value != null && !T.data.ghost) {
      d = b;
      break;
    }
  }
  if (d === -1) return null;
  const f = l[d], h = f.classification?.variation, m = f.classification?.assurance, v = h === je.Neither && !!f.classification?.neutralSpecialCauseValue, x = m === rt.Pass ? yn.Pass : m === rt.Fail ? yn.Fail : yn.Uncertain;
  let p;
  if (h === je.Suppressed) {
    const b = !!f.rules.singlePoint.up, T = !!f.rules.singlePoint.down;
    s === We.Up ? b ? p = Ie.Higher : T && (p = Ie.Lower) : s === We.Down ? T ? p = Ie.Lower : b && (p = Ie.Higher) : p = Ie.Higher;
  } else if (h === je.Neither && v) {
    const b = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, T = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    b && !T ? p = Ie.Higher : T && !b ? p = Ie.Lower : p = Ie.Higher;
  }
  const g = 80, k = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, M = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let D = Ee.CommonCause;
  return h === je.Improvement ? D = Ee.ImprovementHigh : h === je.Concern ? D = Ee.ConcernHigh : h === je.Neither && (v ? p === Ie.Lower || M && !k ? D = Ee.NeitherLow : D = Ee.NeitherHigh : D = Ee.CommonCause), /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(h),
            "data-trend": p ? String(p) : "none",
            style: { width: g, height: g },
            children: /* @__PURE__ */ r.jsx(
              lo,
              {
                dropShadow: !1,
                data: {
                  variationIcon: D,
                  improvementDirection: s,
                  specialCauseNeutral: v,
                  highSideSignal: k,
                  lowSideSignal: M,
                  ...p ? { trend: p } : {}
                },
                letterMode: s === We.Neither ? pr.Direction : pr.Polarity,
                size: g,
                variant: o,
                runLength: o === _n.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(m),
            style: { width: g, height: g },
            children: /* @__PURE__ */ r.jsx(
              co,
              {
                status: x,
                size: g,
                dropShadow: !1
              }
            )
          }
        )
      ]
    },
    `embedded-icon-${d}`
  );
}
const ac = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = cn(), u = hn(), [d, f] = q.useState(null), [h, m] = q.useState(!1), v = q.useRef(null);
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
  const x = c && (c.focused || (h ? d : null) || d), [p, g] = q.useState(!1);
  q.useEffect(() => {
    const ne = requestAnimationFrame(() => g(!0));
    return () => cancelAnimationFrame(ne);
  }, [x?.index]);
  const k = u?.innerWidth ?? 0, M = u?.innerHeight ?? 0, D = x ? Math.min(Math.max(x.clientX, 0), k) : 0, b = x ? Math.min(Math.max(x.clientY, 0), M) : 0, T = u?.ref?.current || void 0;
  if (!x)
    return null;
  const j = e?.[x.index], y = Ta(
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
  ).map((ne) => ({ id: ne, label: Un[ne].tooltip })), $ = x.x instanceof Date ? x.x : new Date(x.x), S = o ? o($) : $.toDateString(), _ = s ? `${s}` : "", F = a || _ ? `${x.y}${_ ? "" + _ : " "}${a ? " " + a : ""}` : `${x.y}`, w = Da(j?.classification?.variation), I = Wl(j?.classification?.assurance), C = Cm(
    t.mean ?? null,
    t.sigma,
    x.y
  ), P = n ? n(x.index, { x: x.x, y: x.y }) : void 0, ee = w || I || C, Y = j?.rules.trend.up || j?.rules.trend.down, R = j?.classification?.variation === je.Neither && Y, B = l && R ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, H = y.length > 0, re = j && "primeDirection" in j ? j.primeDirection : void 0, z = j && "primeRuleId" in j ? j.primeRuleId : void 0, de = i && j?.classification?.variation === je.Neither && H, ge = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", le = zl(j?.classification?.variation), ie = 6.2, te = [
    P || "",
    `${S} • ${F}`
  ].filter(Boolean).reduce(
    (ne, A) => Math.max(ne, A.length * ie + 32),
    0
  ), ce = 200, V = 440, ue = Math.min(V, Math.max(ce, te));
  let se = D + 12, E = (u.margin?.top ?? 0) + b + 16;
  se + ue > k && (se = D - -60 - ue), se < 0 && (se = Math.max(0, k - ue));
  const U = x ? `spc-tooltip-${x.index}` : "spc-tooltip", oe = typeof x.index == "number" ? x.index : NaN, fe = T ? su(
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
          m(!0), v.current && (cancelAnimationFrame(v.current), v.current = null);
        },
        onPointerLeave: () => {
          if (m(!1), !c?.focused) {
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
              Ye,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : w?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Ye,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : de ? /* @__PURE__ */ r.jsx(
              Ye,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : w ? /* @__PURE__ */ r.jsx(
              Ye,
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
                Ye,
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
              Ye,
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
                    Ye,
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
                  Ye,
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
}, gg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const s = cn(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = q.useMemo(
    () => l ? Ta({
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
  ), d = l ? Da(l.classification?.variation) : null, f = l ? Wl(l.classification?.assurance) : null, h = c.length > 0, m = l ? l.classification?.variation === je.Neither && h : !1, v = q.useRef(null);
  return q.useEffect(() => {
    if (!a || !o || l == null) return;
    const x = `${o.seriesId}:${o.index}`;
    if (v.current !== x) {
      v.current = x;
      try {
        a({
          index: o.index,
          x: o.x,
          y: o.y,
          row: l,
          rules: c
        });
      } catch {
      }
    }
  }, [o?.seriesId, o?.index, o?.x, o?.y, l, c, a]), /* @__PURE__ */ r.jsxs(
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
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !s, children: s && /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ r.jsx(
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
                /* @__PURE__ */ r.jsx(
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
        !l || !o ? /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ r.jsxs("span", { children: [
                  /* @__PURE__ */ r.jsx("strong", { children: "Point:" }),
                  " ",
                  o.index + 1
                ] }),
                /* @__PURE__ */ r.jsxs("span", { children: [
                  /* @__PURE__ */ r.jsx("strong", { children: "Value:" }),
                  " ",
                  o.y,
                  n ? ` ${n}` : "",
                  t ? ` ${t}` : ""
                ] })
              ]
            }
          ),
          (d || m || f) && /* @__PURE__ */ r.jsx(
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
                      Ye,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      Ye,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : m ? /* @__PURE__ */ r.jsx(
                      Ye,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ r.jsx(
                      Ye,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const x = f.toLowerCase(), g = !(x.includes("not met") || x.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(x);
                      return /* @__PURE__ */ r.jsx(
                        Ye,
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
                children: c.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : c.map((x) => {
                  const p = String(x), k = p === gt.TrendIncreasing || p === gt.TrendDecreasing ? "fdp-spc-tag--trend" : m ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", M = Un[x]?.tooltip || p;
                  return /* @__PURE__ */ r.jsx(
                    Ye,
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
function xg(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let o = 1; o < n.length - 1; o++)
      n[o] === lt.Common && n[o - 1] === n[o + 1] && n[o - 1] !== lt.Common && (n[o] = n[o - 1]);
    let s = 0;
    for (; s < n.length; ) {
      const o = n[s];
      let i = s + 1;
      for (; i < n.length && n[i] === o; ) i++;
      i - s === 1 && o !== lt.Common && (n[s] = lt.Common), s = i;
    }
  }
  const a = [];
  if (n.length) {
    let s = 0;
    for (let o = 1; o <= n.length; o++)
      if (o === n.length || n[o] !== n[s]) {
        const i = n[s], l = o - 1, c = l - s + 1;
        (i === lt.Common || c >= 2) && a.push({ start: s, end: l, category: i }), s = o;
      }
  }
  return a;
}
var ar = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(ar || {}), sc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(sc || {});
function bg(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: s,
    a11y: o,
    visualsEngine: i,
    meta: l,
    data: c,
    ariaLabel: u,
    height: d,
    showZones: f,
    showPoints: h,
    announceFocus: m,
    className: v,
    unit: x,
    targets: p,
    baselines: g,
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
  process.env.NODE_ENV !== "production" && (!n && (p !== void 0 || g !== void 0 || k !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && M !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !s && (d !== void 0 || v !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !o && (u !== void 0 || m !== void 0 || ce !== void 0 || x !== void 0) && console.warn(
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
  const ue = n?.data ?? c ?? [], se = n?.targets ?? p, he = n?.baselines ?? g, E = n?.ghosts ?? k, U = a?.chartType ?? D ?? kt.XmR, oe = a?.metricImprovement ?? b ?? We.Neither, fe = a?.settings ?? M, ne = a?.autoRecalc, A = t?.axes?.alwaysShowZeroY ?? I ?? !0, O = t?.axes?.alwaysShowHundredY ?? C ?? !1, J = t?.axes?.percentScale ?? P ?? !1, W = t?.visuals?.gradientSequences ?? T ?? !1, L = t?.visuals?.sequenceTransition ?? j ?? "slope", G = t?.visuals?.processLineWidth ?? N ?? 2, K = t?.visuals?.trend?.visualMode ?? w ?? "ungated", Q = t?.visuals?.trend?.showGatingExplanation ?? F ?? !0, X = t?.visuals?.rules?.enableNeutralNoJudgement ?? _ ?? !0, ae = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, me = t?.visuals?.showZones, be = t?.visuals?.showPoints, we = t?.visuals?.rules?.highlightOutOfControl, Ce = s?.height, pe = s?.className, De = o?.label, Re = o?.unit, Ze = o?.narrationContext, ze = i?.scenario, it = i?.settings, Dt = l?.source, jt = t?.overlays?.partitionMarkers ?? y ?? !1, wt = t?.overlays?.trendStartMarkers ?? ee ?? !1, qe = t?.overlays?.firstFavourableCrossMarkers ?? Y ?? !1, tt = t?.overlays?.trendBridge ?? R ?? !1, Ut = t?.inspector?.show ?? B ?? !1, br = t?.inspector?.onFocus ?? H, Me = t?.warnings?.show ?? $ ?? !1, Fe = t?.warnings?.filter ?? S, et = t?.icons?.show ?? re ?? !1, _t = t?.icons?.embedded?.show ?? z ?? !0, bt = t?.icons?.embedded?.variant ?? de ?? _n.Classic, Tt = t?.icons?.embedded?.runLength ?? ge, at = t?.overlays?.focusIndicator ?? le ?? !0;
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
    effUnit: Re,
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
    effShowTrendStartMarkers: wt,
    effShowFirstFavourableCrossMarkers: qe,
    effShowTrendBridgeOverlay: tt,
    effShowSignalsInspector: Ut,
    effOnSignalFocus: br,
    effShowWarningsPanel: Me,
    effWarningsFilter: Fe,
    effShowIcons: et,
    effShowEmbeddedIcon: _t,
    effEmbeddedIconVariant: bt,
    effEmbeddedIconRunLength: Tt,
    effShowFocusIndicator: at
  };
}
let vg = 0;
const yg = ({
  series: e,
  showPoints: t,
  announceFocus: n,
  limits: a,
  showZones: s,
  highlightOutOfControl: o,
  engineRows: i,
  enableRules: l,
  narrationContext: c,
  gradientSequences: u,
  sequenceTransition: d,
  processLineWidth: f,
  effectiveUnit: h,
  partitionMarkers: m,
  ariaLabel: v,
  metricImprovement: x,
  enableNeutralNoJudgement: p = !0,
  showTrendGatingExplanation: g = !0,
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
  const S = Tn(), _ = hn();
  if (!S) return null;
  const { xScale: F, yScale: w } = S, I = q.useRef(
    "spc-seq-" + ++vg
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
  }, [i]), R = q.useMemo(() => (j || []).map((E) => E === dt.Improvement ? lt.Improvement : E === dt.Concern ? lt.Concern : E === dt.NoJudgement ? lt.NoJudgement : lt.Common), [j]), B = q.useMemo(() => !u || !R.length ? [] : xg(R, !0), [u, R, v]), H = q.useMemo(
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
    const oe = E <= U, fe = oe ? Et.Up : Et.Down, ne = oe ? E : U, A = (W) => x == null || x === We.Neither || W == null || typeof W.data.value != "number" || typeof W.limits.mean != "number" ? !1 : fe === Et.Up ? x === We.Up ? W.data.value > W.limits.mean : W.data.value < W.limits.mean : x === We.Down ? W.data.value < W.limits.mean : W.data.value > W.limits.mean;
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
          const pe = H[K.end], De = w(P[K.end].y), Re = P[A].y - P[K.end].y;
          d === ar.Slope && Re > 0 ? (G = `M ${pe} ${De} L ${W} ${me}`, we = pe) : (G = `M ${W} ${U} L ${W} ${me}`, we = W);
        } else
          G = `M ${W} ${U} L ${W} ${me}`;
        for (let pe = A + 1; pe <= O; pe++)
          G += ` L ${H[pe]} ${w(P[pe].y)}`;
        if (G += ` L ${L} ${be}`, ae) {
          const pe = H[Q.start], De = w(P[Q.start].y), Re = P[Q.start].y - P[O].y;
          (d === ar.Slope && Re <= 0 || d === ar.Extend) && (G += ` L ${pe} ${De}`, Ce = pe);
        }
        if (G += ` L ${Ce} ${U}`, G += ` L ${we} ${U} Z`, d === ar.Neutral && X) {
          const pe = H[K.end], De = w(P[K.end].y), Re = /* @__PURE__ */ r.jsx(
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
            Re,
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
      const W = Da(fe.classification?.variation) || "Variation", L = Ta(V(fe)), G = L.length ? ` Rules: ${[...new Set(L.map((Q) => Un[Q].narration))].join("; ")}.` : " No special cause rules.", K = [];
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
  return /* @__PURE__ */ r.jsx(bm, { children: /* @__PURE__ */ r.jsxs(
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
              /* @__PURE__ */ r.jsx(di, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                di,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: he,
                    gapPx: $,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(Eh, { axis: "y" }),
              le,
              ie,
              m.map((E, U) => {
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
              s && ge && ge.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
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
                vm,
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
                  ne && o ? "fdp-spc__point--ooc" : null,
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
                wg,
                {
                  width: F.range()[1],
                  height: w.range()[0]
                }
              ),
              !b && /* @__PURE__ */ r.jsx(
                ac,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: se,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (E) => ce(E),
                  enableNeutralNoJudgement: p,
                  showTrendGatingExplanation: g
                }
              )
            ] })
          }
        ),
        b && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          gg,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: h || c?.measureUnit,
            onSignalFocus: T
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          ym,
          {
            format: (E) => ue({ ...E, x: E.x instanceof Date ? E.x : new Date(E.x) })
          }
        )
      ]
    }
  ) });
}, wg = ({
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
};
function _g(e) {
  const { rows: t } = oo(e), n = io(e);
  return { rows: t, visuals: n.visuals };
}
function Sg(e, t, n) {
  const a = q.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: s, totalReservedPx: o } = q.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = jr, d = c + Mh, f = n?.maxFraction, h = Math.max(
      Tr,
      Math.floor(l * f)
    ), m = Math.min(d, h);
    return { slotPx: Math.min(c, m), totalReservedPx: m };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: s, totalReservedPx: o };
}
function kg(e, t, n, a) {
  if (n.percentScale) {
    const c = e.map((f) => f.y), u = Math.max(100, ...c), d = Math.min(0, ...c);
    return [d < 0 ? d : 0, u > 100 ? u : 100];
  }
  const s = e.map((c) => c.y), o = (c) => {
    c != null && s.push(c);
  };
  if (o(t.mean), o(t.ucl), o(t.lcl), o(t.onePos), o(t.oneNeg), o(t.twoPos), o(t.twoNeg), a && a.length)
    for (const c of a)
      typeof c == "number" && !isNaN(c) && s.push(c);
  if (!s.length) return;
  let i = Math.min(...s), l = Math.max(...s);
  return n.alwaysShowZeroY && (i = Math.min(0, i)), n.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function bs(e, t) {
  if (!e?.length || t.chartType !== yt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let m = 0; m < e.length; m++) {
    const v = e[m], x = v.value;
    v?.ghost || typeof x == "number" && Number.isFinite(x) && a.push({ idx: m, value: x });
  }
  if (a.length < n * 2) return null;
  let s = 0, o = 0;
  for (let m = 1; m < a.length; m++)
    s += Math.abs(a[m].value - a[m - 1].value), o++;
  if (o === 0) return null;
  const l = s / o * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), u = t.metricImprovement === Pe.Up, d = t.metricImprovement === Pe.Down, f = (() => {
    for (let m = e.length - 1; m >= 0; m--) if (e[m]?.baseline) return m;
    return -1;
  })();
  function h(m, v) {
    let x = 0, p = 0;
    for (let g = m; g < v; g++)
      x += a[g].value, p++;
    return p ? x / p : NaN;
  }
  for (let m = n; m <= a.length - n; m++) {
    const v = h(m - n, m), x = h(m, m + n);
    if (!Number.isFinite(v) || !Number.isFinite(x)) continue;
    const p = x - v, g = p / l;
    let k = !1, M = !1;
    if (u ? (k = g >= c, M = !0) : d ? (k = -g >= c, M = !1) : (k = Math.abs(g) >= c, M = p > 0), !k) continue;
    const D = (j) => M ? j > v : j < v;
    let b = !0;
    for (let j = m; j < m + n; j++)
      if (!D(a[j].value)) {
        b = !1;
        break;
      }
    if (!b) continue;
    const T = a[m].idx;
    if (!(t.minGap && f >= 0 && T - f < t.minGap))
      return T;
  }
  return null;
}
function Cg(e, t) {
  const n = bs(e, t);
  return n == null ? e.slice() : e.map((a, s) => s === n ? { ...a, baseline: !0 } : a);
}
function Ng(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return Cg(e, t);
  let a = e.slice(), s = 0;
  const o = Math.max(1, t.minGap ?? 0);
  for (; s < n; ) {
    const i = bs(a, { ...t, minGap: o });
    if (i == null) break;
    if (a[i]?.baseline) {
      const l = bs(a, { ...t, minGap: o + 1 });
      if (l == null || l === i) break;
      a = a.map((c, u) => u === l ? { ...c, baseline: !0 } : c), s++;
      continue;
    }
    a = a.map((l, c) => c === i ? { ...l, baseline: !0 } : l), s++;
  }
  return a;
}
const jg = (e) => {
  const t = q.useCallback(
    (Me) => String(Me).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((et) => et.length ? et[0].toUpperCase() + et.slice(1) : et).join(" "),
    []
  ), n = q.useCallback(
    (Me) => String(Me).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Fe) => Fe.length ? Fe[0].toUpperCase() + Fe.slice(1) : Fe).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && e.disableTrendSideGating !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: a,
    effTargets: s,
    effBaselines: o,
    effGhosts: i,
    effChartTypeCore: l,
    effMetricImprovementCore: c,
    effEngineSettings: u,
    effAlwaysShowZeroY: d,
    effAlwaysShowHundredY: f,
    effPercentScale: h,
    effGradientSequences: m,
    effSequenceTransition: v,
    effProcessLineWidth: x,
    effTrendVisualMode: p,
    effShowTrendGatingExplanation: g,
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
  } = bg(e), ie = ee ?? e.ariaLabel, Z = C ?? e.height ?? 260, te = P ?? e.className, ce = Y ?? e.unit, V = R ?? e.narrationContext, ue = B ?? e.showZones, se = H ?? e.showPoints, he = re ?? e.highlightOutOfControl, E = z ?? e.visualsScenario ?? ql.None, U = de ?? e.visualsEngineSettings, oe = ge ?? e.source, fe = e.a11y?.announceFocus ?? e.announceFocus ?? !1, ne = q.useMemo(() => a.map((Me, Fe) => ({
    x: Me.x,
    value: Me.y,
    target: s?.[Fe] ?? void 0,
    baseline: o?.[Fe] ?? void 0,
    ghost: i?.[Fe] ?? void 0
  })), [a, s, o, i]), A = q.useMemo(() => {
    try {
      const Me = le;
      return Me?.enabled ? Ng(ne, {
        chartType: l,
        metricImprovement: c,
        shiftLength: Me.shiftLength,
        deltaSigma: Me.deltaSigma,
        minGap: Me.minGap,
        maxInsertions: Me.maxInsertions
      }) : ne;
    } catch {
      return ne;
    }
  }, [ne, le, l, c]), O = q.useMemo(() => {
    try {
      const Me = u?.minimumPointsPartition ?? u?.minimumPoints, Fe = {};
      typeof Me == "number" && !isNaN(Me) && (Fe.minimumPoints = Me, A.filter(
        (Le) => !Le.ghost && typeof Le.value == "number"
      ).length >= Me && (Fe.chartLevelEligibility = !0)), u?.enableFourOfFiveRule != null && (Fe.enableFourOfFiveRule = !!u.enableFourOfFiveRule), U && Object.assign(Fe, U);
      const et = (at) => {
        switch (at) {
          case kt.XmR:
            return yt.XmR;
          case kt.T:
            return yt.T;
          case kt.G:
            return yt.G;
          default:
            return yt.XmR;
        }
      }, _t = (at) => {
        switch (at) {
          case We.Up:
            return Pe.Up;
          case We.Down:
            return Pe.Down;
          default:
            return Pe.Neither;
        }
      }, bt = {
        chartType: et(l),
        metricImprovement: _t(c),
        data: A,
        settings: Object.keys(Fe).length ? Fe : void 0
      }, { visuals: Tt } = Om(bt, E, {
        trendVisualMode: p === sc.Ungated ? Yn.Ungated : Yn.Gated,
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
      const Me = u?.minimumPointsPartition ?? u?.minimumPoints, Fe = {};
      typeof Me == "number" && !isNaN(Me) && (Fe.minimumPoints = Me, A.filter(
        (Ft) => !Ft.ghost && typeof Ft.value == "number"
      ).length >= Me && (Fe.chartLevelEligibility = !0)), u?.enableFourOfFiveRule != null && (Fe.enableFourOfFiveRule = !!u.enableFourOfFiveRule), U && Object.assign(Fe, U);
      const et = (Le) => {
        switch (Le) {
          case kt.XmR:
            return yt.XmR;
          case kt.T:
            return yt.T;
          case kt.G:
            return yt.G;
          default:
            return yt.XmR;
        }
      }, _t = (Le) => {
        switch (Le) {
          case We.Up:
            return Pe.Up;
          case We.Down:
            return Pe.Down;
          default:
            return Pe.Neither;
        }
      }, bt = {
        chartType: et(l),
        metricImprovement: _t(c),
        data: A,
        settings: Object.keys(Fe).length ? Fe : void 0
      }, { rows: Tt } = _g(bt), at = (Le) => {
        switch (Le) {
          case Ee.ImprovementHigh:
          case Ee.ImprovementLow:
            return je.Improvement;
          case Ee.ConcernHigh:
          case Ee.ConcernLow:
            return je.Concern;
          case Ee.NeitherHigh:
          case Ee.NeitherLow:
            return je.Neither;
          case Ee.CommonCause:
          default:
            return je.Neither;
        }
      };
      return Tt.map(
        (Le, Ft) => ({
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
            variation: at(Le.variationIcon),
            neutralSpecialCauseValue: Le.variationIcon === Ee.NeitherHigh || Le.variationIcon === Ee.NeitherLow ? Le.specialCauseImprovementValue ?? Le.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: A[Ft]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [A, l, c, u, U]) || null, L = (W || []).slice().reverse().find((Me) => Me.limits.mean != null), G = L?.limits.mean ?? null, K = q.useMemo(() => {
    const Me = [];
    try {
      const Fe = W, et = u?.minimumPoints ?? 13, _t = u?.minimumPointsPartition ?? 12;
      if (Fe && Fe.length) {
        const bt = Fe.filter(
          (at) => !at.data.ghost && at.data.value != null
        ).length;
        bt < et && Me.push({
          code: Xr.InsufficientPointsGlobal,
          severity: Rt.Warning,
          category: qr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: bt, minimumPoints: et }
        });
        const Tt = /* @__PURE__ */ new Map();
        for (const at of Fe) {
          const Le = at.partition.id ?? 0, Ft = Tt.get(Le) || { size: 0, nonGhost: 0 };
          Ft.size += 1, !at.data.ghost && at.data.value != null && (Ft.nonGhost += 1), Tt.set(Le, Ft);
        }
        for (const [at, Le] of Tt)
          Le.nonGhost > 0 && Le.nonGhost < _t && Me.push({
            code: Xr.InsufficientPointsPartition,
            severity: Rt.Warning,
            category: qr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: at,
              nonGhostCount: Le.nonGhost,
              minimumPointsPartition: _t
            }
          });
      }
    } catch {
    }
    return Me;
  }, [W, u?.minimumPoints, u?.minimumPointsPartition]), Q = q.useMemo(() => K.length ? S ? K.filter((Me) => !(S.severities && Me.severity && !S.severities.includes(Me.severity) || S.categories && Me.category && !S.categories.includes(Me.category) || S.codes && !S.codes.includes(Me.code))) : K : [], [K, S]), X = L?.limits.ucl ?? null, ae = L?.limits.lcl ?? null, me = L?.limits.oneSigma.upper ?? null, be = L?.limits.oneSigma.lower ?? null, we = L?.limits.twoSigma.upper ?? null, Ce = L?.limits.twoSigma.lower ?? null, pe = G != null && me != null ? Math.abs(me - G) : 0, De = q.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), Re = q.useMemo(
    () => kg(
      a,
      { mean: G, ucl: X, lcl: ae, onePos: me, oneNeg: be, twoPos: we, twoNeg: Ce },
      {
        alwaysShowZeroY: !!d,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      s ?? null
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
      s,
      d,
      f,
      h
    ]
  ), Ze = q.useMemo(() => {
    const Me = (Fe) => {
      const et = Fe.filter(
        (bt) => typeof bt == "number" && !isNaN(bt)
      );
      if (!et.length) return null;
      const _t = et[0];
      return et.every((bt) => bt === _t) ? _t : null;
    };
    if (W && W.length) {
      const Fe = Me(W.map((et) => et.target));
      if (Fe != null) return Fe;
    }
    return s && s.length ? Me(s) : null;
  }, [W, s]), { show: ze, slotPx: it, totalReservedPx: Dt } = Sg(
    Re,
    Z,
    { maxFraction: 0.35 }
  ), jt = ze ? Dt : 0, wt = q.useMemo(() => {
    const Me = a.map((Fe) => Fe.x);
    return rc({
      values: a.map((Fe) => Fe.y),
      dates: Me,
      providedUnit: ce || V?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, ce, V?.measureUnit]), qe = ce ?? V?.measureUnit ?? wt.unit, tt = q.useMemo(() => qe ? { ...V || {}, measureUnit: qe } : V, [V, qe]), Ut = q.useMemo(() => {
    if (!W) return [];
    const Me = [];
    for (let Fe = 1; Fe < W.length; Fe++)
      W[Fe].partition.id !== W[Fe - 1].partition.id && Me.push(Fe);
    return Me;
  }, [W]), br = q.useMemo(
    () => mg({
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
          pg,
          {
            show: !!_,
            variationNode: br,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ih,
          {
            height: Z,
            ariaLabel: ie,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx($h, { series: De, yDomain: Re, yBottomGapPx: jt, children: (() => {
              const Me = {
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
                gradientSequences: m,
                sequenceTransition: v,
                processLineWidth: x,
                zeroBreakSlotGapPx: it,
                effectiveUnit: qe,
                partitionMarkers: D ? Ut : [],
                ariaLabel: ie,
                enableNeutralNoJudgement: k,
                showTrendGatingExplanation: g,
                metricImprovement: c,
                showTrendStartMarkers: b,
                showFirstFavourableCrossMarkers: T,
                showTrendBridgeOverlay: j,
                showSignalsInspector: N,
                onSignalFocus: y,
                showFocusIndicator: I
              };
              return /* @__PURE__ */ r.jsx(yg, { ...Me });
            })() })
          }
        ),
        oe && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof oe == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          oe
        ] }) : oe }),
        /* @__PURE__ */ r.jsx(
          fg,
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
}, ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: rt,
  BaselineSuggestionReason: It,
  ChartType: yt,
  Icons: hg,
  ImprovementDirection: Pe,
  PARITY_V26: Xl,
  RULE_METADATA: Hl,
  SPCChart: jg,
  SPCTooltipOverlay: ac,
  SpcEmbeddedIconVariant: _n,
  SpcVisualCategory: dt,
  SpcWarningCategory: qr,
  SpcWarningCode: Xr,
  SpcWarningSeverity: Rt,
  VARIATION_COLOR_TOKENS: Pt,
  VariationIcon: Ee,
  buildSpc: nc,
  buildSpcV26a: oo,
  buildSpcV26aWithVisuals: io,
  computeSpcVisualCategories: so,
  extractRuleIds: Ta,
  getVariationColorHex: Nm,
  getVariationColorToken: zl,
  normaliseSpcSettings: tc,
  normaliseSpcSettingsV2: Yl,
  ruleGlossary: Un,
  variationLabel: Da,
  withParityV26: Um
}, Symbol.toStringTag, { value: "Module" })), Tg = "150ms", Dg = "300ms", Ig = "500ms", $g = "cubic-bezier(0.4, 0, 1, 1)", Mg = "cubic-bezier(0, 0, 0.2, 1)", Pg = "cubic-bezier(0.4, 0, 0.2, 1)", Fg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Lg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Ag = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Eg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Rg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Bg = "1px", Hg = "2px", Og = "4px", Ug = "4px", Wg = "4px", zg = "2px", Vg = "1px", Gg = "0px", Yg = "4px", qg = "8px", Xg = "12px", oc = "#d8dde0", ic = "#4c6272", lc = "#d8dde0", cc = "#aeb7bd", uc = "#d5281b", dc = "#005eb8", fc = "#ffffff", pc = "#212b32", hc = "#007f3b", mc = "#330072", gc = "#7c2855", xc = "#d5281b", bc = "#ffeb3b", vc = "#fff9c4", yc = "#ffb81c", wc = "#ed8b00", _c = "#00a499", Sc = "#ae2573", kc = "#4c6272", Cc = "#768692", Nc = "#aeb7bd", jc = "#d8dde0", Tc = "#f0f4f5", Kg = "#212b32", Zg = "#4c6272", Jg = "#ffffff", Qg = "#212b32", e0 = "#005eb8", t0 = "#7c2855", n0 = "#003087", r0 = "#330072", a0 = "#ffeb3b", s0 = "#212b32", o0 = "#d8dde0", i0 = "#ffffff33", l0 = "#d5281b", c0 = "#4c6272", u0 = "#ffffff", d0 = "#007f3b", f0 = "#ffffff", p0 = "#006530", h0 = "#004021", m0 = "#004021", g0 = "#00000000", x0 = "#ffffff", b0 = "#005eb8", v0 = "#005eb8", y0 = "#d9e5f2", w0 = "#c7daf0", _0 = "#005eb8", S0 = "#ffffff", k0 = "#212b32", C0 = "#d9dde0", N0 = "#b3bcc2", j0 = "#b3bcc2", T0 = "#d5281b", D0 = "#aa2016", I0 = "#6a140e", $0 = "#6a140e", M0 = "#005eb8", P0 = "#004b93", F0 = "#002f5c", L0 = "#002f5c", A0 = "8px", E0 = "16px", R0 = "12px", B0 = "16px", H0 = "4px", O0 = "40px", U0 = "4px", W0 = "40px", z0 = "12px", V0 = "16px", G0 = "32px", Y0 = "16px", q0 = "20px", X0 = "28px", K0 = "9px", Z0 = "2px", J0 = "16px", Q0 = "24px", ex = "8px", tx = "24px", nx = "16px", rx = "4px", ax = "4px", sx = "4px", ox = "8px", ix = "4px", lx = "16px", cx = "#007f3b", ux = "#006530", dx = "#004021", fx = "#d8dde0", px = "#ffffff", hx = "#768692", mx = "#00000000", gx = "#ffeb3b", xx = "#00000000", bx = "#ffffff", vx = "#d9e5f2", yx = "#c7daf0", wx = "#005eb8", _x = "#005eb8", Dc = "8px", Ic = "16px", $c = "12px", Mc = "16px", Sx = "2px", kx = "4px", Cx = "4px", Nx = "600", jx = "#ffffff", Tx = "#d8dde0", Dx = "#aeb7bd", Ix = "#f0f4f5", $x = "#212b32", Mx = "#212b32", Px = "#005eb8", Pc = "16px", Fc = "32px", Lc = "16px", Fx = "1px", Lx = "4px", Ax = "none", Ex = "0 2px 4px rgba(0, 0, 0, 0.1)", Rx = "#ffffff", Bx = "#ffffff", Hx = "#d8dde0", Ox = "#ffffff", Ux = "#4c6272", Wx = "#ffeb3b", zx = "#d5281b", Vx = "#aeb7bd", Gx = "#212b32", Yx = "#4c6272", qx = "#768692", Xx = "#212b32", Kx = "#ffffff", Zx = "600", Jx = "#d5281b", Qx = "600", eb = "#4c6272", Ac = "4px", Ec = "40px", Rc = "40px", Bc = "12px", tb = "2px", nb = "4px", rb = "0px", ab = "16px", sb = "18px", ob = "24px", ib = "32px", lb = "34px", cb = "32px", ub = "40px", db = "48px", fb = "5.4ex", pb = "7.2ex", hb = "9ex", mb = "10.8ex", gb = "20ex", xb = "38ex", bb = "56ex", vb = "44px", yb = "40px", wb = "1020px", _b = "100%", Sb = "50%", kb = "33.333%", Cb = "25%", Nb = "20%", jb = "320px", Tb = "641px", Db = "1025px", Ib = "1280px", $b = "960px", Mb = "32px", Pb = "16px", Fb = "#d5281b", Lb = "#d5281b", Ab = "#ffffff", Eb = "#007f3b", Rb = "#007f3b", Bb = "#ffffff", Hb = "#ffeb3b", Ob = "#ffeb3b", Ub = "#212b32", Wb = "#005eb8", zb = "#005eb8", Vb = "#ffffff", Gb = "#d8dde0", Yb = "#aeb7bd", qb = "#768692", Xb = "0 4px 0 #004021", Kb = "0 4px 0 #005eb8", Zb = "0 4px 0 #6a140e", Jb = "0 4px 0 #ffeb3b", Qb = "none", ev = "0 2px 4px rgba(0, 0, 0, 0.1)", tv = "4px", nv = "0px", rv = "solid", av = "0 0 0 3px #ffeb3b", sv = "0 0 0 3px #ffeb3b", ov = "none", iv = "0 1px 3px rgba(0, 0, 0, 0.12)", lv = "0 2px 6px rgba(0, 0, 0, 0.16)", cv = "0 4px 12px rgba(0, 0, 0, 0.20)", Hc = "0", Oc = "4px", Uc = "8px", Wc = "16px", zc = "24px", Vc = "32px", Gc = "40px", Yc = "48px", qc = "56px", Xc = "64px", vs = "0", ys = "0", ws = "4px", _s = "4px", Ss = "8px", ks = "8px", Cs = "8px", Ns = "16px", js = "16px", Ts = "24px", Ds = "24px", Is = "32px", $s = "32px", Ms = "40px", Ps = "40px", Fs = "48px", Ls = "48px", As = "56px", Es = "56px", Rs = "64px", Kr = "Frutiger W01", Zr = "Arial, Helvetica, sans-serif", Jr = "sans-serif", Qr = "400", ea = "600", ta = "400", na = "12px", ra = "14px", aa = "12pt", sa = "14px", oa = "16px", ia = "12pt", la = "16px", ca = "19px", ua = "13pt", da = "19px", fa = "22px", pa = "15pt", ha = "22px", ma = "26px", ga = "17pt", xa = "27px", ba = "36px", va = "20pt", ya = "33px", wa = "48px", _a = "24pt", Bs = "16px", Hs = "24px", Gt = {
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
}, uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Tg,
  AnimationDurationNormal: Dg,
  AnimationDurationSlow: Ig,
  AnimationEasingBounce: Fg,
  AnimationEasingEaseIn: $g,
  AnimationEasingEaseInOut: Pg,
  AnimationEasingEaseOut: Mg,
  BorderColorCard: lc,
  BorderColorCardHover: cc,
  BorderColorDefault: oc,
  BorderColorError: uc,
  BorderColorForm: ic,
  BorderRadiusLarge: Xg,
  BorderRadiusMedium: qg,
  BorderRadiusNone: Gg,
  BorderRadiusSmall: Yg,
  BorderWidthCardBottom: Ug,
  BorderWidthDefault: Bg,
  BorderWidthFormElement: Hg,
  BorderWidthFormElementError: Og,
  BorderWidthPanel: Wg,
  BorderWidthTableCell: Vg,
  BorderWidthTableHeader: zg,
  BreakpointDesktop: Db,
  BreakpointLargeDesktop: Ib,
  BreakpointMobile: jb,
  BreakpointTablet: Tb,
  ButtonBorderRadius: kx,
  ButtonBorderWidth: Sx,
  ButtonPrimaryBackgroundActive: dx,
  ButtonPrimaryBackgroundDefault: cx,
  ButtonPrimaryBackgroundDisabled: fx,
  ButtonPrimaryBackgroundHover: ux,
  ButtonPrimaryBorderDefault: mx,
  ButtonPrimaryBorderFocus: gx,
  ButtonPrimaryTextDefault: px,
  ButtonPrimaryTextDisabled: hx,
  ButtonSecondaryBackgroundActive: yx,
  ButtonSecondaryBackgroundDefault: xx,
  ButtonSecondaryBackgroundHover: vx,
  ButtonSecondaryBackgroundSolid: bx,
  ButtonSecondaryBorderDefault: _x,
  ButtonSecondaryTextDefault: wx,
  ButtonShadowSize: Cx,
  ButtonSpacingPaddingHorizontalDesktop: Mc,
  ButtonSpacingPaddingHorizontalMobile: Ic,
  ButtonSpacingPaddingVerticalDesktop: $c,
  ButtonSpacingPaddingVerticalMobile: Dc,
  ButtonTypographyWeight: Nx,
  CardBackgroundDefault: jx,
  CardBorderBottom: Ix,
  CardBorderDefault: Tx,
  CardBorderHover: Dx,
  CardBorderWidthBottom: Lx,
  CardBorderWidthDefault: Fx,
  CardShadowDefault: Ax,
  CardShadowHover: Ex,
  CardSpacingHeadingMargin: Lc,
  CardSpacingPaddingDesktop: Fc,
  CardSpacingPaddingMobile: Pc,
  CardTextDescription: Mx,
  CardTextHeading: $x,
  CardTextLink: Px,
  ColorBorderDefault: o0,
  ColorBorderSecondary: i0,
  ColorButtonLoginActive: F0,
  ColorButtonLoginBackground: M0,
  ColorButtonLoginHover: P0,
  ColorButtonLoginShadow: L0,
  ColorButtonPrimaryActive: h0,
  ColorButtonPrimaryBackground: d0,
  ColorButtonPrimaryHover: p0,
  ColorButtonPrimaryShadow: m0,
  ColorButtonPrimaryText: f0,
  ColorButtonReverseActive: N0,
  ColorButtonReverseBackground: S0,
  ColorButtonReverseHover: C0,
  ColorButtonReverseShadow: j0,
  ColorButtonReverseText: k0,
  ColorButtonSecondaryActive: w0,
  ColorButtonSecondaryBackground: g0,
  ColorButtonSecondaryBackgroundSolid: x0,
  ColorButtonSecondaryBorder: b0,
  ColorButtonSecondaryHover: y0,
  ColorButtonSecondaryShadow: _0,
  ColorButtonSecondaryText: v0,
  ColorButtonWarningActive: I0,
  ColorButtonWarningBackground: T0,
  ColorButtonWarningHover: D0,
  ColorButtonWarningShadow: $0,
  ColorError: l0,
  ColorFocusBackground: a0,
  ColorFocusText: s0,
  ColorFormBackground: u0,
  ColorFormBorder: c0,
  ColorGrey1: kc,
  ColorGrey2: Cc,
  ColorGrey3: Nc,
  ColorGrey4: jc,
  ColorGrey5: Tc,
  ColorLinkActive: n0,
  ColorLinkDefault: e0,
  ColorLinkHover: t0,
  ColorLinkVisited: r0,
  ColorPrimaryBlack: pc,
  ColorPrimaryBlue: dc,
  ColorPrimaryDarkPink: gc,
  ColorPrimaryGreen: hc,
  ColorPrimaryPurple: mc,
  ColorPrimaryRed: xc,
  ColorPrimaryWhite: fc,
  ColorPrimaryYellow: bc,
  ColorSecondaryAquaGreen: _c,
  ColorSecondaryOrange: wc,
  ColorSecondaryPaleYellow: vc,
  ColorSecondaryPink: Sc,
  ColorSecondaryWarmYellow: yc,
  ColorTextPrimary: Kg,
  ColorTextPrint: Qg,
  ColorTextReverse: Jg,
  ColorTextSecondary: Zg,
  ComponentBlur: ax,
  ComponentBreadcrumbChevronMarginLeft: K0,
  ComponentBreadcrumbChevronMarginRight: Z0,
  ComponentBreadcrumbPaddingTopDesktop: Q0,
  ComponentBreadcrumbPaddingTopMobile: J0,
  ComponentButtonPaddingDesktopHorizontal: B0,
  ComponentButtonPaddingDesktopVertical: R0,
  ComponentButtonPaddingMobileHorizontal: E0,
  ComponentButtonPaddingMobileVertical: A0,
  ComponentButtonShadowSize: H0,
  ComponentCardHeadingMargin: Y0,
  ComponentCardPaddingDesktop: G0,
  ComponentCardPaddingMobile: V0,
  ComponentDetails: ox,
  ComponentExpander: ix,
  ComponentFormCheckboxLabelPadding: z0,
  ComponentFormCheckboxSize: W0,
  ComponentFormInputMinHeight: O0,
  ComponentFormInputPadding: U0,
  ComponentLink: sx,
  ComponentPagination: lx,
  ComponentPanelPaddingDesktop: X0,
  ComponentPanelPaddingMobile: q0,
  ComponentSpread: rx,
  ComponentSummaryListCellPaddingHorizontal: tx,
  ComponentSummaryListCellPaddingVertical: ex,
  ComponentSummaryListRowMargin: nx,
  ElevationHigh: cv,
  ElevationLow: iv,
  ElevationMedium: lv,
  ElevationNone: ov,
  FocusOutlineOffset: nv,
  FocusOutlineStyle: rv,
  FocusOutlineWidth: tv,
  FocusShadowButton: sv,
  FocusShadowInput: av,
  FontFamilyBase: Kr,
  FontFamilyFallback: Zr,
  FontFamilyPrint: Jr,
  FontLineHeightBase: Hs,
  FontSize14Mobile: na,
  FontSize14Print: aa,
  FontSize14Tablet: ra,
  FontSize16Mobile: sa,
  FontSize16Print: ia,
  FontSize16Tablet: oa,
  FontSize19Mobile: la,
  FontSize19Print: ua,
  FontSize19Tablet: ca,
  FontSize22Mobile: da,
  FontSize22Print: pa,
  FontSize22Tablet: fa,
  FontSize26Mobile: ha,
  FontSize26Print: ga,
  FontSize26Tablet: ma,
  FontSize36Mobile: xa,
  FontSize36Print: va,
  FontSize36Tablet: ba,
  FontSize48Mobile: ya,
  FontSize48Print: _a,
  FontSize48Tablet: wa,
  FontSizeBase: Bs,
  FontWeightBold: ea,
  FontWeightLight: ta,
  FontWeightNormal: Qr,
  FormBorderRadius: rb,
  FormBorderWidthDefault: tb,
  FormBorderWidthError: nb,
  FormErrorTextDefault: Jx,
  FormErrorTypographyWeight: Qx,
  FormHintTextDefault: eb,
  FormInputBackgroundDefault: Rx,
  FormInputBackgroundDisabled: Hx,
  FormInputBackgroundError: Ox,
  FormInputBackgroundFocus: Bx,
  FormInputBorderDefault: Ux,
  FormInputBorderDisabled: Vx,
  FormInputBorderError: zx,
  FormInputBorderFocus: Wx,
  FormInputTextDefault: Gx,
  FormInputTextDisabled: qx,
  FormInputTextPlaceholder: Yx,
  FormLabelTextDefault: Xx,
  FormLabelTextRequired: Kx,
  FormLabelTypographyWeight: Zx,
  FormSpacingCheckboxLabelPadding: Bc,
  FormSpacingCheckboxSize: Rc,
  FormSpacingInputMinHeight: Ec,
  FormSpacingInputPadding: Ac,
  GridGutter: Mb,
  GridGutterHalf: Pb,
  GridPageWidth: $b,
  HeadingsNhsukHeadingL: Yt,
  HeadingsNhsukHeadingM: qt,
  HeadingsNhsukHeadingS: Xt,
  HeadingsNhsukHeadingXl: Gt,
  HeadingsNhsukHeadingXs: Kt,
  LayoutColumnActions: Nb,
  LayoutColumnFull: _b,
  LayoutColumnHalf: Sb,
  LayoutColumnQuarter: Cb,
  LayoutColumnThird: kb,
  LayoutContainerMaxWidth: wb,
  ParagraphsBody: Zt,
  ParagraphsBodyLarge: Jt,
  ParagraphsBodySmall: Qt,
  ParagraphsLedeText: en,
  ParagraphsLedeTextSmall: tn,
  ShadowButtonDefault: Xb,
  ShadowButtonFocus: Jb,
  ShadowButtonSecondary: Kb,
  ShadowButtonWarning: Zb,
  ShadowCardDefault: Qb,
  ShadowCardHover: ev,
  SizeButtonMinHeightDesktop: yb,
  SizeButtonMinHeightMobile: vb,
  SizeFormControlLarge: db,
  SizeFormControlMedium: ub,
  SizeFormControlSmall: cb,
  SizeFormInputWidth2xl: xb,
  SizeFormInputWidth3xl: bb,
  SizeFormInputWidthLg: mb,
  SizeFormInputWidthMd: hb,
  SizeFormInputWidthSm: pb,
  SizeFormInputWidthXl: gb,
  SizeFormInputWidthXs: fb,
  SizeIconExtraLarge: ib,
  SizeIconLarge: ob,
  SizeIconMedium: sb,
  SizeIconNhsDefault: lb,
  SizeIconSmall: ab,
  Spacing0: Hc,
  Spacing1: Oc,
  Spacing2: Uc,
  Spacing3: Wc,
  Spacing4: zc,
  Spacing5: Vc,
  Spacing6: Gc,
  Spacing7: Yc,
  Spacing8: qc,
  Spacing9: Xc,
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
  StateDisabledBackground: Gb,
  StateDisabledBorder: Yb,
  StateDisabledText: qb,
  StateErrorBackground: Fb,
  StateErrorBorder: Lb,
  StateErrorText: Ab,
  StateInfoBackground: Wb,
  StateInfoBorder: zb,
  StateInfoText: Vb,
  StateSuccessBackground: Eb,
  StateSuccessBorder: Rb,
  StateSuccessText: Bb,
  StateWarningBackground: Hb,
  StateWarningBorder: Ob,
  StateWarningText: Ub,
  TransitionButtonDefault: Lg,
  TransitionButtonShadow: Ag,
  TransitionCardHover: Rg,
  TransitionInputFocus: Eg
}, Symbol.toStringTag, { value: "Module" })), ay = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), sy = ({
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
), oy = ({
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
), iy = ({
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
), ly = ({
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
), cy = ({
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
), uy = ({
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
), dy = ({
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
), fy = ({
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
), py = ({
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
), hy = ({
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
), my = () => $e(() => uv, []), gy = () => $e(() => ({
  // Border colors
  BorderColorDefault: oc,
  BorderColorForm: ic,
  BorderColorCard: lc,
  BorderColorCardHover: cc,
  BorderColorError: uc,
  // Primary colors
  ColorPrimaryBlue: dc,
  ColorPrimaryWhite: fc,
  ColorPrimaryBlack: pc,
  ColorPrimaryGreen: hc,
  ColorPrimaryPurple: mc,
  ColorPrimaryDarkPink: gc,
  ColorPrimaryRed: xc,
  ColorPrimaryYellow: bc,
  // Secondary colors
  ColorSecondaryPaleYellow: vc,
  ColorSecondaryWarmYellow: yc,
  ColorSecondaryOrange: wc,
  ColorSecondaryAquaGreen: _c,
  ColorSecondaryPink: Sc,
  // Grey scale
  ColorGrey1: kc,
  ColorGrey2: Cc,
  ColorGrey3: Nc,
  ColorGrey4: jc,
  ColorGrey5: Tc
}), []), xy = () => $e(() => ({
  Spacing0: Hc,
  Spacing1: Oc,
  Spacing2: Uc,
  Spacing3: Wc,
  Spacing4: zc,
  Spacing5: Vc,
  Spacing6: Gc,
  Spacing7: Yc,
  Spacing8: qc,
  Spacing9: Xc
}), []), by = () => $e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: na,
    Size16: sa,
    Size19: la,
    Size22: da,
    Size26: ha,
    Size36: xa,
    Size48: ya
  },
  Tablet: {
    Size14: ra,
    Size16: oa,
    Size19: ca,
    Size22: fa,
    Size26: ma,
    Size36: ba,
    Size48: wa
  },
  Print: {
    Size14: aa,
    Size16: ia,
    Size19: ua,
    Size22: pa,
    Size26: ga,
    Size36: va,
    Size48: _a
  },
  Family: {
    Base: Kr,
    Fallback: Zr,
    Print: Jr
  },
  Weight: {
    Normal: Qr,
    Bold: ea,
    Light: ta
  },
  Base: {
    Size: Bs,
    LineHeight: Hs
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Kr,
  FontFamilyFallback: Zr,
  FontFamilyPrint: Jr,
  FontWeightNormal: Qr,
  FontWeightBold: ea,
  FontWeightLight: ta,
  FontSize14Mobile: na,
  FontSize14Tablet: ra,
  FontSize14Print: aa,
  FontSize16Mobile: sa,
  FontSize16Tablet: oa,
  FontSize16Print: ia,
  FontSize19Mobile: la,
  FontSize19Tablet: ca,
  FontSize19Print: ua,
  FontSize22Mobile: da,
  FontSize22Tablet: fa,
  FontSize22Print: pa,
  FontSize26Mobile: ha,
  FontSize26Tablet: ma,
  FontSize26Print: ga,
  FontSize36Mobile: xa,
  FontSize36Tablet: ba,
  FontSize36Print: va,
  FontSize48Mobile: ya,
  FontSize48Tablet: wa,
  FontSize48Print: _a,
  FontSizeBase: Bs,
  FontLineHeightBase: Hs
}), []), vy = () => $e(() => ({
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
}), []), yy = () => $e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Dc,
  ButtonSpacingPaddingHorizontalMobile: Ic,
  ButtonSpacingPaddingVerticalDesktop: $c,
  ButtonSpacingPaddingHorizontalDesktop: Mc,
  // Card spacing	
  CardSpacingPaddingMobile: Pc,
  CardSpacingPaddingDesktop: Fc,
  CardSpacingHeadingMargin: Lc,
  // Form spacing
  FormSpacingInputPadding: Ac,
  FormSpacingInputMinHeight: Ec,
  FormSpacingCheckboxSize: Rc,
  FormSpacingCheckboxLabelPadding: Bc
}), []), wy = () => $e(() => ({
  xl: Gt,
  l: Yt,
  m: qt,
  s: Xt,
  xs: Kt
}), []), _y = () => $e(() => ({
  body: Zt,
  bodyLarge: Jt,
  bodySmall: Qt,
  ledeText: en,
  ledeTextSmall: tn
}), []), Sy = () => $e(() => ({
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
      base: Kr,
      fallback: Zr,
      print: Jr
    },
    weight: {
      normal: Qr,
      bold: ea,
      light: ta
    },
    sizes: {
      mobile: {
        size14: na,
        size16: sa,
        size19: la,
        size22: da,
        size26: ha,
        size36: xa,
        size48: ya
      },
      tablet: {
        size14: ra,
        size16: oa,
        size19: ca,
        size22: fa,
        size26: ma,
        size36: ba,
        size48: wa
      },
      print: {
        size14: aa,
        size16: ia,
        size19: ua,
        size22: pa,
        size26: ga,
        size36: va,
        size48: _a
      }
    }
  }
}), []);
function ky(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, s] = q.useState(t), o = q.useCallback(() => s("three-column"), []), i = q.useCallback(() => s((c) => c === "three-column" ? n : c), [n]), l = q.useCallback(() => s((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Os = Ti(void 0);
function Cy({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, s] = He(e);
  Ve(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const o = $e(() => ({ brand: a, setBrand: s }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(Os.Provider, { value: o, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(Os.Provider, { value: o, children: n });
}
function Ny() {
  const e = ji(Os);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Kc = {
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
function jy(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Kc, ...e }, a = [];
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
function Ty(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Kc, ...e };
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
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const Dy = '"Frutiger W01", Arial, Helvetica, sans-serif', Iy = "Arial, Helvetica, sans-serif";
async function $y() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Mh as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  jr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  Tr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Ph as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  Fh as AXIS_ZIGZAG_DEFAULT_CYCLES,
  Ah as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  Lh as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  $i as Account,
  hv as ActionLink,
  Wv as AdaptiveDataGrid,
  Tg as AnimationDurationFast,
  Dg as AnimationDurationNormal,
  Ig as AnimationDurationSlow,
  Fg as AnimationEasingBounce,
  $g as AnimationEasingEaseIn,
  Pg as AnimationEasingEaseInOut,
  Mg as AnimationEasingEaseOut,
  pl as AppointmentCard,
  Zv as AreaSeriesPrimitive,
  Pp as AriaDataGrid,
  ls as AriaTabsDataGrid,
  Wv as AriaTabsDataGridAdaptive,
  di as Axis,
  ts as BackLink,
  Qv as BandScalesProvider,
  Jv as BarSeriesPrimitive,
  lc as BorderColorCard,
  cc as BorderColorCardHover,
  oc as BorderColorDefault,
  uc as BorderColorError,
  ic as BorderColorForm,
  Xg as BorderRadiusLarge,
  qg as BorderRadiusMedium,
  Gg as BorderRadiusNone,
  Yg as BorderRadiusSmall,
  Ug as BorderWidthCardBottom,
  Bg as BorderWidthDefault,
  Hg as BorderWidthFormElement,
  Og as BorderWidthFormElementError,
  Wg as BorderWidthPanel,
  Vg as BorderWidthTableCell,
  zg as BorderWidthTableHeader,
  Cy as BrandThemeProvider,
  xp as Breadcrumb,
  Du as Breakpoint,
  Db as BreakpointDesktop,
  Ib as BreakpointLargeDesktop,
  jb as BreakpointMobile,
  Tb as BreakpointTablet,
  mt as Button,
  kx as ButtonBorderRadius,
  Sx as ButtonBorderWidth,
  dx as ButtonPrimaryBackgroundActive,
  cx as ButtonPrimaryBackgroundDefault,
  fx as ButtonPrimaryBackgroundDisabled,
  ux as ButtonPrimaryBackgroundHover,
  mx as ButtonPrimaryBorderDefault,
  gx as ButtonPrimaryBorderFocus,
  px as ButtonPrimaryTextDefault,
  hx as ButtonPrimaryTextDisabled,
  yx as ButtonSecondaryBackgroundActive,
  xx as ButtonSecondaryBackgroundDefault,
  vx as ButtonSecondaryBackgroundHover,
  bx as ButtonSecondaryBackgroundSolid,
  _x as ButtonSecondaryBorderDefault,
  wx as ButtonSecondaryTextDefault,
  Cx as ButtonShadowSize,
  Pi as ButtonSize,
  Mc as ButtonSpacingPaddingHorizontalDesktop,
  Ic as ButtonSpacingPaddingHorizontalMobile,
  $c as ButtonSpacingPaddingVerticalDesktop,
  Dc as ButtonSpacingPaddingVerticalMobile,
  Nx as ButtonTypographyWeight,
  Mi as ButtonVariant,
  ll as Card,
  jx as CardBackgroundDefault,
  Ix as CardBorderBottom,
  Tx as CardBorderDefault,
  Dx as CardBorderHover,
  Lx as CardBorderWidthBottom,
  Fx as CardBorderWidthDefault,
  $v as CardGroup,
  Mv as CardGroupItem,
  Ax as CardShadowDefault,
  Ex as CardShadowHover,
  Lc as CardSpacingHeadingMargin,
  Fc as CardSpacingPaddingDesktop,
  Pc as CardSpacingPaddingMobile,
  Mx as CardTextDescription,
  $x as CardTextHeading,
  Px as CardTextLink,
  Pv as CareCard,
  mv as CharacterCount,
  ty as ChartEnhancer,
  ey as ChartNoScript,
  Ih as ChartRoot,
  gu as Checkbox,
  yu as Checkboxes,
  o0 as ColorBorderDefault,
  i0 as ColorBorderSecondary,
  F0 as ColorButtonLoginActive,
  M0 as ColorButtonLoginBackground,
  P0 as ColorButtonLoginHover,
  L0 as ColorButtonLoginShadow,
  h0 as ColorButtonPrimaryActive,
  d0 as ColorButtonPrimaryBackground,
  p0 as ColorButtonPrimaryHover,
  m0 as ColorButtonPrimaryShadow,
  f0 as ColorButtonPrimaryText,
  N0 as ColorButtonReverseActive,
  S0 as ColorButtonReverseBackground,
  C0 as ColorButtonReverseHover,
  j0 as ColorButtonReverseShadow,
  k0 as ColorButtonReverseText,
  w0 as ColorButtonSecondaryActive,
  g0 as ColorButtonSecondaryBackground,
  x0 as ColorButtonSecondaryBackgroundSolid,
  b0 as ColorButtonSecondaryBorder,
  y0 as ColorButtonSecondaryHover,
  _0 as ColorButtonSecondaryShadow,
  v0 as ColorButtonSecondaryText,
  I0 as ColorButtonWarningActive,
  T0 as ColorButtonWarningBackground,
  D0 as ColorButtonWarningHover,
  $0 as ColorButtonWarningShadow,
  l0 as ColorError,
  a0 as ColorFocusBackground,
  s0 as ColorFocusText,
  u0 as ColorFormBackground,
  c0 as ColorFormBorder,
  kc as ColorGrey1,
  Cc as ColorGrey2,
  Nc as ColorGrey3,
  jc as ColorGrey4,
  Tc as ColorGrey5,
  n0 as ColorLinkActive,
  e0 as ColorLinkDefault,
  t0 as ColorLinkHover,
  r0 as ColorLinkVisited,
  pc as ColorPrimaryBlack,
  dc as ColorPrimaryBlue,
  gc as ColorPrimaryDarkPink,
  hc as ColorPrimaryGreen,
  mc as ColorPrimaryPurple,
  xc as ColorPrimaryRed,
  fc as ColorPrimaryWhite,
  bc as ColorPrimaryYellow,
  _c as ColorSecondaryAquaGreen,
  wc as ColorSecondaryOrange,
  vc as ColorSecondaryPaleYellow,
  Sc as ColorSecondaryPink,
  yc as ColorSecondaryWarmYellow,
  Kg as ColorTextPrimary,
  Qg as ColorTextPrint,
  Jg as ColorTextReverse,
  Zg as ColorTextSecondary,
  sr as Column,
  $u as ColumnAlign,
  ax as ComponentBlur,
  K0 as ComponentBreadcrumbChevronMarginLeft,
  Z0 as ComponentBreadcrumbChevronMarginRight,
  Q0 as ComponentBreadcrumbPaddingTopDesktop,
  J0 as ComponentBreadcrumbPaddingTopMobile,
  B0 as ComponentButtonPaddingDesktopHorizontal,
  R0 as ComponentButtonPaddingDesktopVertical,
  E0 as ComponentButtonPaddingMobileHorizontal,
  A0 as ComponentButtonPaddingMobileVertical,
  H0 as ComponentButtonShadowSize,
  Y0 as ComponentCardHeadingMargin,
  G0 as ComponentCardPaddingDesktop,
  V0 as ComponentCardPaddingMobile,
  ox as ComponentDetails,
  ix as ComponentExpander,
  z0 as ComponentFormCheckboxLabelPadding,
  W0 as ComponentFormCheckboxSize,
  O0 as ComponentFormInputMinHeight,
  U0 as ComponentFormInputPadding,
  sx as ComponentLink,
  lx as ComponentPagination,
  X0 as ComponentPanelPaddingDesktop,
  q0 as ComponentPanelPaddingMobile,
  rx as ComponentSpread,
  tx as ComponentSummaryListCellPaddingHorizontal,
  ex as ComponentSummaryListCellPaddingVertical,
  nx as ComponentSummaryListRowMargin,
  Ei as Container,
  Iv as ContentsList,
  Kc as DEFAULT_FONT_CONFIG,
  Hv as DashboardSummaryGrid,
  kv as DateInput,
  kp as Details,
  Cp as DoDontList,
  cv as ElevationHigh,
  iv as ElevationLow,
  lv as ElevationMedium,
  ov as ElevationNone,
  bo as ErrorMessage,
  Sv as ErrorSummary,
  Np as Expander,
  St as FRUTIGER_FONT_FILES,
  zs as Fieldset,
  Iu as Float,
  nv as FocusOutlineOffset,
  rv as FocusOutlineStyle,
  tv as FocusOutlineWidth,
  sv as FocusShadowButton,
  av as FocusShadowInput,
  Kr as FontFamilyBase,
  Zr as FontFamilyFallback,
  Jr as FontFamilyPrint,
  Hs as FontLineHeightBase,
  na as FontSize14Mobile,
  aa as FontSize14Print,
  ra as FontSize14Tablet,
  sa as FontSize16Mobile,
  ia as FontSize16Print,
  oa as FontSize16Tablet,
  la as FontSize19Mobile,
  ua as FontSize19Print,
  ca as FontSize19Tablet,
  da as FontSize22Mobile,
  pa as FontSize22Print,
  fa as FontSize22Tablet,
  ha as FontSize26Mobile,
  ga as FontSize26Print,
  ma as FontSize26Tablet,
  xa as FontSize36Mobile,
  va as FontSize36Print,
  ba as FontSize36Tablet,
  ya as FontSize48Mobile,
  _a as FontSize48Print,
  wa as FontSize48Tablet,
  Bs as FontSizeBase,
  ea as FontWeightBold,
  ta as FontWeightLight,
  Qr as FontWeightNormal,
  Ui as Footer,
  rb as FormBorderRadius,
  tb as FormBorderWidthDefault,
  nb as FormBorderWidthError,
  Jx as FormErrorTextDefault,
  Qx as FormErrorTypographyWeight,
  eb as FormHintTextDefault,
  Rx as FormInputBackgroundDefault,
  Hx as FormInputBackgroundDisabled,
  Ox as FormInputBackgroundError,
  Bx as FormInputBackgroundFocus,
  Ux as FormInputBorderDefault,
  Vx as FormInputBorderDisabled,
  zx as FormInputBorderError,
  Wx as FormInputBorderFocus,
  Gx as FormInputTextDefault,
  qx as FormInputTextDisabled,
  Yx as FormInputTextPlaceholder,
  Xx as FormLabelTextDefault,
  Kx as FormLabelTextRequired,
  Zx as FormLabelTypographyWeight,
  Bc as FormSpacingCheckboxLabelPadding,
  Rc as FormSpacingCheckboxSize,
  Ec as FormSpacingInputMinHeight,
  Ac as FormSpacingInputPadding,
  Tv as GanttChart,
  ns as Grid,
  Mb as GridGutter,
  Pb as GridGutterHalf,
  Eh as GridLines,
  $b as GridPageWidth,
  Sn as GridWidth,
  Oi as Header,
  jv as HeaderSSR,
  Uu as HeaderSearch,
  Oi as HeaderStatic,
  an as Heading,
  Yt as HeadingsNhsukHeadingL,
  qt as HeadingsNhsukHeadingM,
  Xt as HeadingsNhsukHeadingS,
  Gt as HeadingsNhsukHeadingXl,
  Kt as HeadingsNhsukHeadingXs,
  zu as Hero,
  Li as Hint,
  Rv as Images,
  Us as Input,
  Fv as InsetText,
  Ws as Label,
  Nb as LayoutColumnActions,
  _b as LayoutColumnFull,
  Sb as LayoutColumnHalf,
  Cb as LayoutColumnQuarter,
  kb as LayoutColumnThird,
  wb as LayoutContainerMaxWidth,
  Kv as Legend,
  $h as LineScalesProvider,
  vm as LineSeriesPrimitive,
  Fu as List,
  Ri as MainWrapper,
  hl as MedicationCard,
  _m as MetricCard,
  uy as NHSBodyText,
  dy as NHSBodyTextLarge,
  fy as NHSBodyTextSmall,
  sy as NHSHeading1,
  oy as NHSHeading2,
  iy as NHSHeading3,
  ly as NHSHeading4,
  cy as NHSHeading5,
  py as NHSLedeText,
  hy as NHSLedeTextSmall,
  Nv as NHSThemeProvider,
  Iy as NHS_FALLBACK_FONT_STACK,
  Dy as NHS_FONT_STACK,
  wh as NavigationSplitView,
  Vv as PageTemplate,
  Dv as Pagination,
  bp as Panel,
  Zt as ParagraphsBody,
  Jt as ParagraphsBodyLarge,
  Qt as ParagraphsBodySmall,
  en as ParagraphsLedeText,
  tn as ParagraphsLedeTextSmall,
  fl as PatientCard,
  kh as ProductRoadmap,
  gv as Radios,
  xv as RadiosServer,
  Wv as ResponsiveDataGrid,
  zv as ResponsiveDataGridDemo,
  pn as Row,
  ry as SPC,
  jg as SPCChart,
  ny as SPCMetricCard,
  $r as Select,
  Cu as SelectOption,
  Xb as ShadowButtonDefault,
  Jb as ShadowButtonFocus,
  Kb as ShadowButtonSecondary,
  Zb as ShadowButtonWarning,
  Qb as ShadowCardDefault,
  ev as ShadowCardHover,
  yb as SizeButtonMinHeightDesktop,
  vb as SizeButtonMinHeightMobile,
  db as SizeFormControlLarge,
  ub as SizeFormControlMedium,
  cb as SizeFormControlSmall,
  xb as SizeFormInputWidth2xl,
  bb as SizeFormInputWidth3xl,
  mb as SizeFormInputWidthLg,
  hb as SizeFormInputWidthMd,
  pb as SizeFormInputWidthSm,
  gb as SizeFormInputWidthXl,
  fb as SizeFormInputWidthXs,
  ib as SizeIconExtraLarge,
  ob as SizeIconLarge,
  sb as SizeIconMedium,
  lb as SizeIconNhsDefault,
  ab as SizeIconSmall,
  il as SkipLink,
  Bv as SlotMatrix,
  Ov as SortStatusControl,
  Hc as Spacing0,
  Oc as Spacing1,
  Uc as Spacing2,
  Wc as Spacing3,
  zc as Spacing4,
  Vc as Spacing5,
  Gc as Spacing6,
  Yc as Spacing7,
  qc as Spacing8,
  Xc as Spacing9,
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
  bv as SpacingUtilities,
  Gb as StateDisabledBackground,
  Yb as StateDisabledBorder,
  qb as StateDisabledText,
  Fb as StateErrorBackground,
  Lb as StateErrorBorder,
  Ab as StateErrorText,
  Wb as StateInfoBackground,
  zb as StateInfoBorder,
  Vb as StateInfoText,
  Eb as StateSuccessBackground,
  Rb as StateSuccessBorder,
  Bb as StateSuccessText,
  Hb as StateWarningBackground,
  Ob as StateWarningBorder,
  Ub as StateWarningText,
  Mp as SummaryCard,
  Lv as SummaryList,
  ln as Table,
  Av as Tabs,
  Ye as Tag,
  jp as TaskList,
  _u as Textarea,
  Xv as TooltipOverlay,
  bm as TooltipProvider,
  Gv as TransactionalPageTemplate,
  Lg as TransitionButtonDefault,
  Ag as TransitionButtonShadow,
  Rg as TransitionCardHover,
  Eg as TransitionInputFocus,
  qv as VisibilityProvider,
  ml as VitalsCard,
  _v as WIDTH_FRACTIONS,
  Ev as WarningCallout,
  yl as WidthContainer,
  yv as WidthUtilities,
  $y as checkFrutigerLoaded,
  to as createGenericTabsConfig,
  Uv as createTCHTabsConfig,
  jy as generateFrutigerFontFace,
  ay as getResponsiveStyles,
  vv as getSpacingClass,
  wv as getWidthClass,
  Ty as preloadFrutigerFonts,
  zp as tchDataConfig,
  Ny as useBrand,
  gy as useColors,
  yy as useComponentSpacing,
  wy as useNHSHeadings,
  _y as useNHSParagraphs,
  Cv as useNHSTheme,
  Sy as useNHSTypographySystem,
  ky as useNavigationSplitDrill,
  bh as useNavigationSplitUrlSync,
  _l as useNhsFdpBreakpoints,
  vy as useResponsiveSpacing,
  Yv as useResponsiveValue,
  xy as useSpacing,
  ig as useSpc,
  my as useTokens,
  by as useTypography
};
//# sourceMappingURL=index.esm.js.map
