import * as X from "react";
import st, { useState as Me, useEffect as Ae, useCallback as fe, useRef as Fe, createElement as To, useMemo as $e, useContext as Zl, createContext as Jl, forwardRef as mn, useImperativeHandle as Do, useReducer as $o, memo as Ql, useLayoutEffect as ec, useId as Gn } from "react";
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
var Ds;
function rc() {
  if (Ds) return bn;
  Ds = 1;
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
var $s;
function ac() {
  return $s || ($s = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === N ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case w:
          return "Fragment";
        case p:
          return "Profiler";
        case h:
          return "StrictMode";
        case A:
          return "Suspense";
        case $:
          return "SuspenseList";
        case v:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case D:
            return "Portal";
          case L:
            return (B.displayName || "Context") + ".Provider";
          case E:
            return (B._context.displayName || "Context") + ".Consumer";
          case T:
            var W = B.render;
            return B = B.displayName, B || (B = W.displayName || W.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case F:
            return W = B.displayName || null, W !== null ? W : e(B.type) || "Memo";
          case _:
            W = B._payload, B = B._init;
            try {
              return e(B(W));
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
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var R = W.error, te = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return R.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          te
        ), t(B);
      }
    }
    function a(B) {
      if (B === w) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === _)
        return "<...>";
      try {
        var W = e(B);
        return W ? "<" + W + ">" : "<...>";
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
      if (m.call(B, "key")) {
        var W = Object.getOwnPropertyDescriptor(B, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, W) {
      function R() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: R,
        configurable: !0
      });
    }
    function d() {
      var B = e(this.type);
      return x[B] || (x[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function c(B, W, R, te, b, H, ee, J) {
      return R = H.ref, B = {
        $$typeof: y,
        type: B,
        key: W,
        props: H,
        _owner: b
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
        value: ee
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function u(B, W, R, te, b, H, ee, J) {
      var Y = W.children;
      if (Y !== void 0)
        if (te)
          if (M(Y)) {
            for (te = 0; te < Y.length; te++)
              f(Y[te]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Y);
      if (m.call(W, "key")) {
        Y = e(B);
        var P = Object.keys(W).filter(function(ae) {
          return ae !== "key";
        });
        te = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", O[Y + te] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          te,
          Y,
          P,
          Y
        ), O[Y + te] = !0);
      }
      if (Y = null, R !== void 0 && (n(R), Y = "" + R), i(W) && (n(W.key), Y = "" + W.key), "key" in W) {
        R = {};
        for (var G in W)
          G !== "key" && (R[G] = W[G]);
      } else R = W;
      return Y && l(
        R,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), c(
        B,
        Y,
        H,
        b,
        s(),
        R,
        ee,
        J
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === y && B._store && (B._store.validated = 1);
    }
    var g = st, y = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), L = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), k = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, m = Object.prototype.hasOwnProperty, M = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var S, x = {}, I = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), ne = C(a(o)), O = {};
    yn.Fragment = w, yn.jsx = function(B, W, R, te, b) {
      var H = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        B,
        W,
        R,
        !1,
        te,
        b,
        H ? Error("react-stack-top-frame") : I,
        H ? C(a(B)) : ne
      );
    }, yn.jsxs = function(B, W, R, te, b) {
      var H = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        B,
        W,
        R,
        !0,
        te,
        b,
        H ? Error("react-stack-top-frame") : I,
        H ? C(a(B)) : ne
      );
    };
  })()), yn;
}
var Ms;
function sc() {
  return Ms || (Ms = 1, process.env.NODE_ENV === "production" ? Bn.exports = rc() : Bn.exports = ac()), Bn.exports;
}
var r = sc(), Qr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Is;
function oc() {
  return Is || (Is = 1, (function(e) {
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
const ge = /* @__PURE__ */ nc(ic), bx = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...s
}) => {
  const o = ge(
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
      className: ge(
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
          className: ge("nhsuk-account__item nhsuk-header__account-item", o.className),
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
const { forwardRef: dc, useCallback: At, useState: ea } = X;
function uc(e, t) {
  const {
    children: n,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = ea(!1), [f, g] = ea(!1), [y, D] = ea(!1), w = cc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), h = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", p = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...y && { "data-focused": "true" },
    ...h && { "data-disabled": "true" }
  }, E = At(
    () => !h && u(!0),
    [h]
  ), L = At(() => u(!1), []), T = At(
    () => !h && g(!0),
    [h]
  ), A = At(() => {
    g(!1), u(!1);
  }, []), $ = At(() => D(!0), []), F = At(() => D(!1), []), _ = At(
    (Y) => {
      Y.key === " " && ("href" in d || Y.currentTarget.getAttribute("role") === "button") && (Y.preventDefault(), Y.currentTarget.click());
    },
    [d]
  ), v = At(
    (Y) => {
      if (l) {
        const P = Y.currentTarget;
        if (P.getAttribute("data-processing") === "true") {
          Y.preventDefault();
          return;
        }
        P.setAttribute("data-processing", "true"), setTimeout(() => {
          P.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: Y,
      style: P,
      title: G,
      ["aria-label"]: ae,
      ["aria-describedby"]: z,
      ["aria-labelledby"]: ce,
      tabIndex: se,
      ...le
    } = d, de = d;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: de.href,
        target: de.target,
        rel: de.rel,
        className: w.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...p,
        ...l && { "data-prevent-double-click": "true" },
        ...le,
        onKeyDown: (be) => {
          de.onKeyDown?.(be), _(be);
        },
        onClick: (be) => {
          de.onClick?.(be), v(be);
        },
        onMouseDown: (be) => {
          de.onMouseDown?.(be), E();
        },
        onMouseUp: (be) => {
          de.onMouseUp?.(be), L();
        },
        onMouseEnter: (be) => {
          de.onMouseEnter?.(be), T();
        },
        onMouseLeave: (be) => {
          de.onMouseLeave?.(be), A();
        },
        onFocus: (be) => {
          de.onFocus?.(be), $();
        },
        onBlur: (be) => {
          de.onBlur?.(be), F();
        },
        "aria-disabled": de["aria-disabled"],
        ...de["aria-disabled"] === "true" && { tabIndex: -1 },
        id: Y,
        style: P,
        title: G,
        "aria-label": ae,
        "aria-describedby": z,
        "aria-labelledby": ce,
        tabIndex: se,
        children: n
      }
    );
  }
  const {
    id: N,
    style: k,
    title: m,
    ["aria-label"]: M,
    ["aria-describedby"]: C,
    ["aria-labelledby"]: S,
    tabIndex: x,
    name: I,
    value: ne,
    form: O,
    formAction: B,
    formEncType: W,
    formMethod: R,
    formNoValidate: te,
    formTarget: b,
    autoFocus: H,
    ...ee
  } = d, J = d;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: J.type || "button",
      disabled: J.disabled,
      className: w.classes,
      "data-module": "nhs-button",
      ...p,
      ...l && { "data-prevent-double-click": "true" },
      ...J.disabled && { "aria-disabled": "true" },
      ...ee,
      onKeyDown: (Y) => {
        J.onKeyDown?.(Y), _(Y);
      },
      onClick: (Y) => {
        J.onClick?.(Y), v(Y);
      },
      onMouseDown: (Y) => {
        J.onMouseDown?.(Y), E();
      },
      onMouseUp: (Y) => {
        J.onMouseUp?.(Y), L();
      },
      onMouseEnter: (Y) => {
        J.onMouseEnter?.(Y), T();
      },
      onMouseLeave: (Y) => {
        J.onMouseLeave?.(Y), A();
      },
      onFocus: (Y) => {
        J.onFocus?.(Y), $();
      },
      onBlur: (Y) => {
        J.onBlur?.(Y), F();
      },
      id: N,
      style: k,
      title: m,
      "aria-label": M,
      "aria-describedby": C,
      "aria-labelledby": S,
      tabIndex: x,
      name: I,
      value: ne,
      form: O,
      formAction: B,
      formEncType: W,
      formMethod: R,
      formNoValidate: te,
      formTarget: b,
      autoFocus: H,
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
  const l = ge(
    "nhsuk-back-link",
    a
  ), d = ge(
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
const Ge = ({
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
  const u = fc({ color: a, noBorder: s, closable: o, disabled: l, className: d }), f = (g) => {
    g.preventDefault(), g.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: u.classes, ...c, children: [
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
  onBlur: f,
  onFocus: g,
  attributes: y,
  ...D
}) => {
  const [w, h] = Me(a), p = n !== void 0, E = p ? n : w;
  Ae(() => {
    p || h(a);
  }, [a, p]);
  const L = (_) => {
    const v = _.target.checked;
    p || h(v), u?.(v, _);
  }, T = i ? `${e}-hint` : void 0, A = l ? `${e}-error` : void 0, $ = [T, A].filter(Boolean).join(" ") || void 0, F = ge(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ r.jsx("div", { className: F, ...D, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: E,
        disabled: s,
        onChange: L,
        onBlur: f,
        onFocus: g,
        "aria-describedby": $,
        ...y
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: T, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: A, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
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
  className: f,
  width: g = "full",
  inputMode: y,
  autoComplete: D,
  maxLength: w,
  minLength: h,
  pattern: p,
  step: E,
  min: L,
  max: T,
  showValueLabels: A = !1,
  showCurrentValue: $ = !1,
  valueLabels: F,
  onChange: _,
  onBlur: v,
  onFocus: N,
  onKeyDown: k,
  ...m
}) => {
  const [M, C] = Me(a || s || (n === "range" ? L || "0" : ""));
  Ae(() => {
    a !== void 0 && C(a);
  }, [a]);
  const S = (b) => {
    const H = b.target;
    C(H.value), ("type" in b && b.nativeEvent || b.type === "keydown") && _?.(b);
  }, { classes: x, isRange: I } = pc({ type: n, hasError: c, width: g, className: f }), ne = a !== void 0, O = {
    id: e,
    name: t,
    type: n,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: y,
    autoComplete: D,
    maxLength: w,
    minLength: h,
    pattern: p,
    step: E,
    min: L,
    max: T,
    onChange: S,
    onBlur: v,
    onFocus: N,
    onKeyDown: (b) => {
      if (I && /[0-9]/.test(b.key)) {
        const H = (M?.toString() || "") + b.key;
        b.target.value = H, S(b);
      }
      k?.(b);
    },
    ...m
  }, B = !ne && s !== void 0 ? { defaultValue: s } : {}, W = ne ? { value: a } : {}, R = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: x,
      ...W,
      ...B,
      "data-current-value": M,
      ...O
    }
  ), te = I ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    A && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: F?.min || L || "0" }),
      R(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: F?.max || T || "100" })
    ] }),
    !A && R(),
    $ && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      F?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: M })
    ] }) })
  ] }) : null;
  return I ? te : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: x,
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
      inputMode: y,
      autoComplete: D,
      maxLength: w,
      minLength: h,
      pattern: p,
      step: E,
      min: L,
      max: T,
      onChange: _,
      onBlur: v,
      onFocus: N,
      onKeyDown: k,
      ...m
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
  const o = ge(
    "nhsuk-fieldset",
    n
  ), i = ge(
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
  fieldsetAttributes: f,
  attributes: g,
  ...y
}) => {
  const [D, w] = Me(
    e.filter((_) => _.checked).map((_) => _.value)
  ), h = n || t, p = i ? `${h}-hint` : void 0, E = l ? `${h}-error` : void 0, L = [p, E].filter(Boolean).join(" ") || void 0, T = (_, v) => {
    let N;
    v ? N = [...D, _] : N = D.filter((k) => k !== _), w(N), u?.(N);
  }, A = () => e.map((_, v) => {
    const N = `${h}-${v + 1}`, k = `${N}-conditional`, m = D.includes(_.value), M = _.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: N,
          name: t,
          type: "checkbox",
          value: _.value,
          checked: m,
          disabled: M,
          onChange: (C) => T(_.value, C.target.checked),
          "aria-describedby": _.hint ? `${N}-hint` : L,
          ..._.conditional && {
            "aria-controls": k,
            "aria-expanded": m ? "true" : "false"
          },
          ..._.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: N, children: _.text }),
      _.hint && /* @__PURE__ */ r.jsx("div", { id: `${N}-hint`, className: "nhsuk-checkboxes__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ge("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !m
          }),
          id: k,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ r.jsx(as, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ r.jsx(rs, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }), $ = ge(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), F = ge("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ r.jsx("div", { className: F, ...g, ...y, children: /* @__PURE__ */ r.jsxs(
    ss,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: L,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: p, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: E, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: $, children: A() })
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
  rows: f = 5,
  cols: g,
  maxLength: y,
  minLength: D,
  wrap: w = "soft",
  resize: h = "vertical",
  autoComplete: p,
  spellCheck: E,
  onChange: L,
  onBlur: T,
  onFocus: A,
  onKeyDown: $,
  ...F
}) => {
  const _ = ge(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${h}`]: h !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: _,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: f,
      cols: g,
      maxLength: y,
      minLength: D,
      wrap: w,
      autoComplete: p,
      spellCheck: E,
      onChange: L,
      onBlur: T,
      onFocus: A,
      onKeyDown: $,
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
const Mo = ({ id: e, className: t, children: n, ...a }) => {
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
  onChange: f,
  ...g
}) => {
  const y = o ?? i ?? "", [D, w] = Me(y), [h, p] = Me(0), [E, L] = Me(!1), [T, A] = Me(!1), $ = fe((m) => n ? m.trim() === "" ? 0 : m.trim().split(/\s+/).length : m.length, [n]);
  Ae(() => {
    const m = $(D), M = t || n || 0, C = M - m, S = Math.floor(M * (a / 100));
    p(C), L(m > M), A(m >= S || m > M), u && u(m, C);
  }, [D, t, n, a, $, u]);
  const F = (m) => {
    const M = m.target.value;
    w(M), f && f(m);
  }, _ = () => {
    const m = t || n || 0, M = n ? "word" : "character", C = n ? "words" : "characters";
    if (!T)
      return `You can enter up to ${m} ${m === 1 ? M : C}`;
    if (E) {
      const S = Math.abs(h);
      return `You have ${S} ${S === 1 ? M : C} too many`;
    } else
      return `You have ${h} ${h === 1 ? M : C} remaining`;
  }, v = ge(
    "nhsuk-character-count",
    d
  ), N = ge(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !T,
      "nhsuk-error-message": E
    },
    c?.classes
  ), k = ge(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": E
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: v,
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
            value: o !== void 0 ? D : void 0,
            defaultValue: o === void 0 ? i ?? D : void 0,
            rows: l,
            className: k,
            onChange: F,
            "aria-describedby": `${e}-info`,
            "aria-invalid": E || void 0,
            ...g
          }
        ),
        /* @__PURE__ */ r.jsx(
          Mo,
          {
            id: `${e}-info`,
            className: N,
            role: "status",
            "aria-live": "polite",
            children: _()
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
  const i = ge(
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
  size: f,
  autoComplete: g,
  options: y,
  children: D,
  onChange: w,
  onBlur: h,
  onFocus: p,
  ...E
}) => {
  const L = ge(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), T = () => y ? y.map(($, F) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: $.value,
      disabled: $.disabled,
      "data-initial-selected": $.selected || void 0,
      children: $.text
    },
    `${$.value}-${F}`
  )) : null, A = s === void 0 && a === void 0 && y ? y.find(($) => $.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: L,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: s !== void 0 ? s : A,
      disabled: o,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: f,
      autoComplete: g,
      onChange: w,
      onBlur: h,
      onFocus: p,
      ...E,
      children: D || T()
    }
  );
}, Vn = vc;
Vn.Option = yc;
function Io(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: u, onFocus: f, ...g } = e, {
    name: y,
    hasError: D = !1,
    describedBy: w,
    className: h,
    size: p = "normal",
    inline: E = !1,
    options: L,
    ...T
  } = g, A = ge(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": D,
      "nhsuk-radios--small": p === "small",
      "nhsuk-radios--inline": E
    },
    h
  );
  return /* @__PURE__ */ r.jsx(ss, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: A,
      ...T,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: L.map(($, F) => {
        const _ = `${y}-${F}`, v = $.conditional ? `${_}-conditional` : void 0, N = n === $.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: _,
              name: y,
              type: "radio",
              value: $.value,
              disabled: $.disabled,
              ...t === "client" ? { checked: N, onChange: s, onBlur: o, onFocus: i, onKeyDown: l, ref: (k) => {
                k && d && (d.current[F] = k);
              } } : { defaultChecked: N, "data-nhs-radios-input": !0 },
              "aria-describedby": w
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: _, children: $.text }),
          $.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: $.hint }),
          $.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ge("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !N
              }),
              id: v,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof $.conditional == "object" && $.conditional !== null && "label" in $.conditional && "id" in $.conditional && "name" in $.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                $.conditional.label && /* @__PURE__ */ r.jsx(as, { htmlFor: $.conditional.id, children: $.conditional.label }),
                /* @__PURE__ */ r.jsx(rs, { ...$.conditional })
              ] }) : $.conditional
            }
          )
        ] }, $.value);
      })
    }
  ) });
}
const vx = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Me(e || t || ""), d = Fe([]), c = Fe(i), u = (y) => {
    const D = y.target.value;
    D !== c.current && (c.current = D, l(D), n?.(y));
  }, f = (y) => {
    s?.(y);
  }, g = fe((y) => {
    const { key: D } = y;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(D)) return;
    y.preventDefault();
    const w = d.current.filter((L) => L && !L.disabled), h = w.indexOf(y.currentTarget);
    if (h === -1) return;
    let p = h;
    ["ArrowDown", "ArrowRight"].includes(D) ? p = (h + 1) % w.length : ["ArrowUp", "ArrowLeft"].includes(D) && (p = (h - 1 + w.length) % w.length);
    const E = w[p];
    E && (E.focus(), E.checked || E.click());
  }, []);
  return Io(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: g,
      itemsRef: d
    }
  );
}, _x = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Io(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, Lo = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = ge(
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
  const s = ge("nhsuk-grid-row", t);
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
  const u = ge(
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
  return /* @__PURE__ */ r.jsx(Lo, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Yt, { children: e }) });
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
  const d = i || (t === "number" ? "ol" : "ul"), c = ge(
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
  const a = ge("nhsuk-list__item", t);
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
], Fo = ({
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
  return To(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function jc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Ls = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...s }) => {
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
  Ae(() => {
    d.current && d.current.focus();
  }, []);
  const c = ge(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, g = (y) => {
    const D = y.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text;
    return y.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: y.href,
        ...y.attributes,
        children: D
      }
    ) : D;
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
          !i && (n || a) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((y, D) => /* @__PURE__ */ r.jsx("li", { children: g(y) }, D)) })
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
  const [u, f] = Me(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [g, y] = Me({}), D = (S) => S % 4 === 0 && S % 100 !== 0 || S % 400 === 0, w = (S, x) => {
    const I = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return S === 2 && D(x) ? 29 : I[S - 1];
  }, h = (S, x, I) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Day must be a number";
    const ne = parseInt(S, 10);
    if (ne < 1 || ne > 31) return "Day must be between 1 and 31";
    if (x && I) {
      const O = parseInt(x, 10), B = parseInt(I, 10);
      if (!isNaN(O) && !isNaN(B) && O >= 1 && O <= 12) {
        const W = w(O, B);
        if (ne > W)
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
          ][O - 1]} ${B} only has ${W} days`;
      }
    }
  }, p = (S) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Month must be a number";
    const x = parseInt(S, 10);
    if (x < 1 || x > 12) return "Month must be between 1 and 12";
  }, E = (S) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Year must be a number";
    const x = parseInt(S, 10), I = (/* @__PURE__ */ new Date()).getFullYear();
    if (x < 1900 || x > I + 10)
      return `Year must be between 1900 and ${I + 10}`;
  }, L = (S, x, I) => {
    if (!S || !x || !I) return;
    const ne = parseInt(S, 10), O = parseInt(x, 10), B = parseInt(I, 10);
    if (isNaN(ne) || isNaN(O) || isNaN(B) || O < 1 || O > 12 || B < 1900) return;
    const W = w(O, B);
    ne < 1 || ne > W;
  }, T = fe((S, x) => {
    const I = {
      ...u,
      [S]: x
    };
    f(I), d && d(I);
  }, [u, d]), A = fe((S) => {
    const x = u[S];
    let I;
    if (S === "day")
      I = h(x, u.month, u.year);
    else if (S === "month") {
      if (I = p(x), !I && u.day) {
        const ne = h(u.day, x, u.year);
        y((O) => ({
          ...O,
          day: ne
        }));
      }
    } else if (S === "year" && (I = E(x), !I && u.day && u.month)) {
      const ne = h(u.day, u.month, x);
      y((O) => ({
        ...O,
        day: ne
      }));
    }
    if (y((ne) => ({
      ...ne,
      [S]: I
    })), u.day && u.month && u.year) {
      const ne = L(
        S === "day" ? x : u.day,
        S === "month" ? x : u.month,
        S === "year" ? x : u.year
      );
      ne && y((O) => ({
        ...O,
        day: ne
      }));
    }
  }, [u, h, p, E, L]), $ = $e(() => [
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
  ], []), F = n || $;
  let _ = o?.describedBy || "";
  const v = i ? `${e}-hint` : "", N = l ? `${e}-error` : "";
  v && (_ = _ ? `${_} ${v}` : v), N && (_ = _ ? `${_} ${N}` : N);
  const k = Object.values(g).some((S) => S), m = ge(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || k
    }
  ), M = ge(
    "nhsuk-date-input",
    t
  ), C = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      Mo,
      {
        id: v,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      Ls,
      {
        id: N,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([S, x]) => x ? /* @__PURE__ */ r.jsxs(
        Ls,
        {
          id: `${e}-${S}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            x
          ]
        },
        `${S}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: M, id: e, "data-testid": "date-input", ...c, children: F.map((S) => {
      const x = S.id || `${e}-${S.name}`, I = a ? `${a}[${S.name}]` : S.name, ne = S.label || S.name.charAt(0).toUpperCase() + S.name.slice(1), O = g[S.name], B = u[S.name] || "";
      let W = _;
      if (O) {
        const R = `${e}-${S.name}-error`;
        W = W ? `${W} ${R}` : R;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          as,
          {
            htmlFor: x,
            className: "nhsuk-date-input__label",
            children: ne
          }
        ),
        /* @__PURE__ */ r.jsx(
          rs,
          {
            id: x,
            name: I,
            value: B,
            className: ge("nhsuk-date-input__input", S.classes, {
              "nhsuk-input--error": O
            }),
            inputMode: S.inputmode,
            autoComplete: S.autocomplete,
            pattern: S.pattern,
            "aria-describedby": W || void 0,
            hasError: !!O,
            onChange: (R) => T(S.name, R.target.value),
            onBlur: () => A(S.name)
          }
        )
      ] }, S.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: m, children: o ? /* @__PURE__ */ r.jsx(
    ss,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: _ || void 0,
      children: C()
    }
  ) : C() });
}, Eo = {
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
}, Ao = Jl(Eo), Nc = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Eo, ...t };
  return /* @__PURE__ */ r.jsx(Ao.Provider, { value: n, children: e });
}, Dx = () => {
  const e = Zl(Ao);
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
const $x = ({ children: e, theme: t }) => (Ae(() => {
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
  isLoading: f = !1,
  showResults: g = !1,
  results: y = [],
  formAttributes: D = {},
  inputAttributes: w = {},
  buttonAttributes: h = {},
  preventDefaultSubmit: p = !1,
  debounceMs: E = 300,
  minQueryLength: L = 1
}) => {
  const [T, A] = Me(""), [$, F] = Me(!1), _ = Fe(void 0), v = Fe(null), N = Fe(null), k = e === "controlled" && s !== void 0, m = k ? s : T, M = fe((te) => {
    _.current && clearTimeout(_.current), _.current = setTimeout(() => {
      u.onChange && te.length >= L && u.onChange(te);
    }, E);
  }, [u.onChange, E, L]), C = fe((te) => {
    const b = te.target.value;
    k || A(b), e !== "form" && M(b);
  }, [k, e, M]), S = fe((te) => {
    const b = m.trim(), H = {
      query: b,
      timestamp: Date.now(),
      formData: new FormData(te.currentTarget)
    };
    e === "controlled" || e === "hybrid" && p ? (te.preventDefault(), u.onSearch && b.length >= L && u.onSearch(H)) : e === "hybrid" && u.onSearch && b.length >= L && u.onSearch(H);
  }, [e, m, u.onSearch, p, L]), x = fe(() => {
    F(!0), u.onFocus?.();
  }, [u.onFocus]), I = fe(() => {
    F(!1), u.onBlur?.();
  }, [u.onBlur]), ne = fe(() => {
    k || A(""), u.onClear?.(), N.current?.focus();
  }, [k, u.onClear]);
  Ae(() => () => {
    _.current && clearTimeout(_.current);
  }, []);
  const O = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: ge("nhsuk-icon nhsuk-icon__search", {
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
  ), W = () => !m || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ne,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), R = () => !g || !y.length || !$ ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: y.map((te) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: te.href ? /* @__PURE__ */ r.jsxs("a", { href: te.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: te.title }),
    te.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: te.description })
  ] }) : /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: te.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: te.title }),
        te.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: te.description })
      ]
    }
  ) }, te.id)) });
  return /* @__PURE__ */ r.jsxs("div", { className: ge("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": $,
    "nhsuk-header__search--has-results": g && y.length > 0
  }), children: [
    /* @__PURE__ */ r.jsxs(
      "form",
      {
        ref: v,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? n : void 0,
        role: "search",
        onSubmit: S,
        ...D,
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
                ref: N,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: m,
                onChange: C,
                onFocus: x,
                onBlur: I,
                disabled: c || f,
                ...g && y.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...w
              }
            ),
            W()
          ] }),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && m.length < L,
              ...h,
              children: [
                f ? B() : O(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    R()
  ] });
};
function Po(e, {
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
    logo: f = {},
    service: g = {},
    organisation: y,
    search: D,
    account: w,
    navigation: h,
    containerClasses: p,
    variant: E = "default",
    attributes: L = {},
    maxVisibleItems: T,
    // deprecated (ignored)
    responsiveNavigation: A = !0,
    ...$
  } = e;
  "maxVisibleItems" in $ && delete $.maxVisibleItems;
  const F = g.href && !f.href || g.href && g.href === f.href, _ = F ? g.href : f.href, v = ge(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": E === "organisation" || y,
      "nhsuk-header--white": E === "white"
    },
    u
  ), N = ge(
    "nhsuk-header__container",
    p
  ), k = ge(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": h?.white,
      "nhsuk-header__navigation--justified": h?.justified
    },
    h?.className
  ), m = () => /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": f.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: f.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), M = () => f.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: f.src,
      width: "280",
      alt: f.ariaLabel || "NHS"
    }
  ) : m(), C = () => y ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      y.name,
      y.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        y.split
      ] })
    ] }),
    y.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: y.descriptor })
  ] }) : null, S = (W, R) => W ? R ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: R, children: W }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: W }) : null, x = (W) => W.active || W.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: W.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: W.html } }) : W.text }) : W.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: W.html } }) : W.text, I = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), ne = t === "server" && h?.items && !A, O = ne ? [] : h?.items, B = ne ? h.items : [];
  return /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: v,
      role: "banner",
      "data-module": "nhsuk-header",
      ...L,
      ...$,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: N, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              M(),
              C(),
              F && S(g.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              M(),
              C(),
              F && S(g.text)
            ] }),
            g.text && !F && S(g.text, g.href)
          ] }),
          D && /* @__PURE__ */ r.jsx($c, { ...D }),
          /* @__PURE__ */ r.jsx(
            lc,
            {
              ...w,
              variant: E === "white" ? "white" : "default"
            }
          )
        ] }),
        h && h.items && h.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: k,
            "aria-label": h.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ge(
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
                      (t === "server" ? O || [] : h?.items || []).map((W, R) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ge(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": W.active || W.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && s && o !== void 0 && R >= (o ?? 0)
                            },
                            W.className
                          ),
                          ...W.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: W.href,
                              ...W.active || W.current ? { "aria-current": W.current ? "page" : "true" } : {},
                              children: x(W)
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
        t === "client" && n && h && h.items && h.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: h.items.slice(o ?? 0).map((W, R) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ge("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": W.active || W.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: W.href,
                    ...W.active || W.current ? { "aria-current": W.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: x(W)
                  }
                )
              },
              `overflow-${(o ?? 0) + R}`
            )) })
          }
        ),
        t === "server" && ne && B.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: B.map((W, R) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ge("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": W.active || W.current
            }),
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: W.href,
                ...W.active || W.current ? { "aria-current": W.current ? "page" : "true" } : {},
                children: x(W)
              }
            )
          },
          `overflow-server-${R}`
        )) }) })
      ]
    }
  );
}
const Ro = ({
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
  const [f, g] = Me(!1), [y, D] = Me(!1), [w, h] = Me(i?.items?.length || 0), [p, E] = Me(!1), [L, T] = Me(!1), A = Fe(null), $ = Fe(null), F = Fe(!1);
  Ae(() => {
    typeof window > "u" || T(!0);
  }, []), Ae(() => {
    if (typeof document > "u") return;
    const k = (m) => {
      m.key === "Escape" && f && g(!1);
    };
    if (f)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [f]);
  const _ = Fe(null), v = fe(() => {
    if (!L || !i?.items || i.items.length === 0 || F.current) return;
    const k = A.current, m = $.current;
    if (!k || !m) return;
    F.current = !0, k.classList.add("nhsuk-header__navigation-container--measuring");
    const M = k.clientWidth, C = Array.from(m.children);
    if (!C.length) {
      k.classList.remove("nhsuk-header__navigation-container--measuring"), F.current = !1;
      return;
    }
    if (_.current == null) {
      const b = document.createElement("button");
      b.type = "button", b.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", b.style.position = "absolute", b.style.visibility = "hidden", b.style.pointerEvents = "none", b.innerHTML = "<span>More</span>", k.appendChild(b), _.current = b.getBoundingClientRect().width || 104, k.removeChild(b);
    }
    const S = _.current + 16;
    let x = 0, I = 0;
    const ne = window.getComputedStyle(k), O = parseFloat(ne.paddingLeft) || 0, B = parseFloat(ne.paddingRight) || 0;
    let W = O + B;
    for (const b of C) {
      const H = b.getBoundingClientRect().width;
      if (x + H + S + W > M) break;
      x += H, I += 1;
    }
    const R = I < i.items.length, te = R ? I : i.items.length;
    D((b) => b === R ? b : R), h((b) => b === te ? b : te), k.classList.remove("nhsuk-header__navigation-container--measuring"), F.current = !1;
  }, [L, i?.items]);
  Ae(() => {
    if (!L) return;
    const k = A.current;
    if (!k) return;
    let m = null;
    const M = () => {
      m == null && (m = window.requestAnimationFrame(() => {
        m = null, v();
      }));
    };
    v();
    const C = new ResizeObserver(() => M());
    return C.observe(k), $.current && C.observe($.current), () => {
      m != null && window.cancelAnimationFrame(m), C.disconnect();
    };
  }, [L, v]), Ae(() => {
    L && v();
  }, [i?.items?.length, L, v]);
  const N = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const m = !f;
    g(m), E(m);
  };
  return Po(
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
      menuOpen: f,
      showMoreButton: y,
      visibleItems: w,
      dropdownVisible: p,
      toggleMenu: N,
      navContainerRef: A,
      navListRef: $
    }
  );
}, Mx = (e) => Po(e, {
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
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    n,
    !d && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), y = d || e || a || s, D = () => {
    if (!e) return null;
    const w = { className: g };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...w, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...w, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...w, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...w, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...w, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...w, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...w, children: e });
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
        o && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: y && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          D(),
          d || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && y && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          D(),
          d || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Mc.displayName = "Hero";
const Bo = ({
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
  const f = (y, D = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ge("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": D
      }),
      children: /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: y.URL,
          target: y.newWindow ? "_blank" : void 0,
          rel: y.newWindow ? "noopener noreferrer" : void 0,
          children: y.label
        }
      )
    },
    `${y.URL}-${y.label}`
  ), g = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: ge("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ge("nhsuk-footer", e), style: c, children: g ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((y) => f(y)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((y) => f(y)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((y) => f(y)) }),
              s && s.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((y) => f(y)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((y) => f(y, !0)),
              (n || []).map((y) => f(y, !0)),
              (a || []).map((y) => f(y, !0)),
              (s || []).map((y) => f(y, !0))
            ] })
          ) }),
          !g && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    g && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
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
        const f = c + u >>> 1;
        n(l[f], d) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function o(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const f = c + u >>> 1;
        n(l[f], d) <= 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function i(l, d, c = 0, u = l.length) {
    const f = s(l, d, c, u - 1);
    return f > c && a(l[f - 1], d) > -a(l[f], d) ? f - 1 : f;
  }
  return { left: s, center: i, right: o };
}
function Lc() {
  return 0;
}
function Fc(e) {
  return e === null ? NaN : +e;
}
const Ec = os(Un), Ac = Ec.right;
os(Fc).center;
function Ho(e, t) {
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
class Fs extends Map {
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
    return super.set(Pc(this, t), n);
  }
  delete(t) {
    return super.delete(Rc(this, t));
  }
}
function Es({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Pc({ _intern: e, _key: t }, n) {
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
const Hc = Math.sqrt(50), zc = Math.sqrt(10), Oc = Math.sqrt(2);
function Yn(e, t, n) {
  const a = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Hc ? 10 : o >= zc ? 5 : o >= Oc ? 2 : 1;
  let l, d, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= n && n < 2 ? Yn(e, t, n * 2) : [l, d, c];
}
function Wc(e, t, n) {
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
function Pr(e, t) {
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
function zo() {
  var e = new Fs(), t = [], n = [], a = As;
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
    t = [], e = new Fs();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (n = Array.from(o), s) : n.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return zo(t, n).unknown(a);
  }, Pr.apply(s, arguments), s;
}
function Oo() {
  var e = zo().unknown(void 0), t = e.domain, n = e.range, a = 0, s = 1, o, i, l = !1, d = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var g = t().length, y = s < a, D = y ? s : a, w = y ? a : s;
    o = (w - D) / Math.max(1, g - d + c * 2), l && (o = Math.floor(o)), D += (w - D - o * (g - d)) * u, i = o * (1 - d), l && (D = Math.round(D), i = Math.round(i));
    var h = Uc(g).map(function(p) {
      return D + o * p;
    });
    return n(y ? h.reverse() : h);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), f()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([a, s] = g, a = +a, s = +s, f()) : [a, s];
  }, e.rangeRound = function(g) {
    return [a, s] = g, a = +a, s = +s, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return o;
  }, e.round = function(g) {
    return arguments.length ? (l = !!g, f()) : l;
  }, e.padding = function(g) {
    return arguments.length ? (d = Math.min(1, c = +g), f()) : d;
  }, e.paddingInner = function(g) {
    return arguments.length ? (d = Math.min(1, g), f()) : d;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (c = +g, f()) : c;
  }, e.align = function(g) {
    return arguments.length ? (u = Math.max(0, Math.min(1, g)), f()) : u;
  }, e.copy = function() {
    return Oo(t(), [a, s]).round(l).paddingInner(d).paddingOuter(c).align(u);
  }, Pr.apply(f(), arguments);
}
function is(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Wo(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Ln() {
}
var jn = 0.7, qn = 1 / jn, cn = "\\s*([+-]?\\d+)\\s*", Nn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gc = /^#([0-9a-f]{3,8})$/, Vc = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), Yc = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), qc = new RegExp(`^rgba\\(${cn},${cn},${cn},${Nn}\\)$`), Xc = new RegExp(`^rgba\\(${mt},${mt},${mt},${Nn}\\)$`), Kc = new RegExp(`^hsl\\(${Nn},${mt},${mt}\\)$`), Zc = new RegExp(`^hsla\\(${Nn},${mt},${mt},${Nn}\\)$`), Ps = {
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
  hex: Rs,
  // Deprecated! Use color.formatHex.
  formatHex: Rs,
  formatHex8: Jc,
  formatHsl: Qc,
  formatRgb: Bs,
  toString: Bs
});
function Rs() {
  return this.rgb().formatHex();
}
function Jc() {
  return this.rgb().formatHex8();
}
function Qc() {
  return Uo(this).formatHsl();
}
function Bs() {
  return this.rgb().formatRgb();
}
function Tn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Gc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Hs(t) : n === 3 ? new at(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Hn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Hn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vc.exec(e)) ? new at(t[1], t[2], t[3], 1) : (t = Yc.exec(e)) ? new at(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = qc.exec(e)) ? Hn(t[1], t[2], t[3], t[4]) : (t = Xc.exec(e)) ? Hn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Kc.exec(e)) ? Ws(t[1], t[2] / 100, t[3] / 100, 1) : (t = Zc.exec(e)) ? Ws(t[1], t[2] / 100, t[3] / 100, t[4]) : Ps.hasOwnProperty(e) ? Hs(Ps[e]) : e === "transparent" ? new at(NaN, NaN, NaN, 0) : null;
}
function Hs(e) {
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
is(at, wa, Wo(Ln, {
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
  hex: zs,
  // Deprecated! Use color.formatHex.
  formatHex: zs,
  formatHex8: td,
  formatRgb: Os,
  toString: Os
}));
function zs() {
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
function Ws(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new lt(e, t, n, a);
}
function Uo(e) {
  if (e instanceof lt) return new lt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ln || (e = Tn(e)), !e) return new lt();
  if (e instanceof lt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, s = Math.min(t, n, a), o = Math.max(t, n, a), i = NaN, l = o - s, d = (o + s) / 2;
  return l ? (t === o ? i = (n - a) / l + (n < a) * 6 : n === o ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= d < 0.5 ? o + s : 2 - o - s, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new lt(i, l, d, e.opacity);
}
function nd(e, t, n, a) {
  return arguments.length === 1 ? Uo(e) : new lt(e, t, n, a ?? 1);
}
function lt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
is(lt, nd, Wo(Ln, {
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
    return new lt(Us(this.h), zn(this.s), zn(this.l), Xn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Xn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Us(this.h)}, ${zn(this.s) * 100}%, ${zn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Us(e) {
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
  return (e = +e) == 1 ? Go : function(t, n) {
    return n - t ? ad(t, n, e) : ls(isNaN(t) ? n : t);
  };
}
function Go(e, t) {
  var n = t - e;
  return n ? rd(e, n) : ls(isNaN(e) ? t : e);
}
const Gs = (function e(t) {
  var n = sd(t);
  function a(s, o) {
    var i = n((s = wa(s)).r, (o = wa(o)).r), l = n(s.g, o.g), d = n(s.b, o.b), c = Go(s.opacity, o.opacity);
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
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function cs(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? ls(t) : (n === "number" ? Kn : n === "string" ? (a = Tn(t)) ? (t = a, Gs) : hd : t instanceof Tn ? Gs : t instanceof Date ? cd : id(t) ? od : Array.isArray(t) ? ld : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? dd : Kn)(e, t);
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
var Vs = [0, 1];
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
    var d = Ac(e, l, 1, a) - 1;
    return o[d](s[d](l));
  };
}
function Vo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function vd() {
  var e = Vs, t = Vs, n = cs, a, s, o, i = on, l, d, c;
  function u() {
    var g = Math.min(e.length, t.length);
    return i !== on && (i = xd(e[0], e[g - 1])), l = g > 2 ? yd : bd, d = c = null, f;
  }
  function f(g) {
    return g == null || isNaN(g = +g) ? o : (d || (d = l(e.map(a), t, n)))(a(i(g)));
  }
  return f.invert = function(g) {
    return i(s((c || (c = l(t, e.map(a), Kn)))(g)));
  }, f.domain = function(g) {
    return arguments.length ? (e = Array.from(g, gd), u()) : e.slice();
  }, f.range = function(g) {
    return arguments.length ? (t = Array.from(g), u()) : t.slice();
  }, f.rangeRound = function(g) {
    return t = Array.from(g), n = pd, u();
  }, f.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : on, u()) : i !== on;
  }, f.interpolate = function(g) {
    return arguments.length ? (n = g, u()) : n;
  }, f.unknown = function(g) {
    return arguments.length ? (o = g, f) : o;
  }, function(g, y) {
    return a = g, s = y, u();
  };
}
function Yo() {
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
var qo;
function jd(e, t) {
  var n = Zn(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1], o = s - (qo = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + Zn(e, Math.max(0, t + o - 1))[0];
}
function Ys(e, t) {
  var n = Zn(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const qs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: _d,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ys(e * 100, t),
  r: Ys,
  s: jd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Xs(e) {
  return e;
}
var Ks = Array.prototype.map, Zs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Nd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Xs : wd(Ks.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Xs : Sd(Ks.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Jn(f);
    var g = f.fill, y = f.align, D = f.sign, w = f.symbol, h = f.zero, p = f.width, E = f.comma, L = f.precision, T = f.trim, A = f.type;
    A === "n" ? (E = !0, A = "g") : qs[A] || (L === void 0 && (L = 12), T = !0, A = "g"), (h || g === "0" && y === "=") && (h = !0, g = "0", y = "=");
    var $ = w === "$" ? n : w === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", F = w === "$" ? a : /[%p]/.test(A) ? i : "", _ = qs[A], v = /[defgprs%]/.test(A);
    L = L === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, L)) : Math.max(0, Math.min(20, L));
    function N(k) {
      var m = $, M = F, C, S, x;
      if (A === "c")
        M = _(k) + M, k = "";
      else {
        k = +k;
        var I = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? d : _(Math.abs(k), L), T && (k = Cd(k)), I && +k == 0 && D !== "+" && (I = !1), m = (I ? D === "(" ? D : l : D === "-" || D === "(" ? "" : D) + m, M = (A === "s" ? Zs[8 + qo / 3] : "") + M + (I && D === "(" ? ")" : ""), v) {
          for (C = -1, S = k.length; ++C < S; )
            if (x = k.charCodeAt(C), 48 > x || x > 57) {
              M = (x === 46 ? s + k.slice(C + 1) : k.slice(C)) + M, k = k.slice(0, C);
              break;
            }
        }
      }
      E && !h && (k = t(k, 1 / 0));
      var ne = m.length + k.length + M.length, O = ne < p ? new Array(p - ne + 1).join(g) : "";
      switch (E && h && (k = t(O + k, O.length ? p - M.length : 1 / 0), O = ""), y) {
        case "<":
          k = m + k + M + O;
          break;
        case "=":
          k = m + O + k + M;
          break;
        case "^":
          k = O.slice(0, ne = O.length >> 1) + m + k + M + O.slice(ne);
          break;
        default:
          k = O + m + k + M;
          break;
      }
      return o(k);
    }
    return N.toString = function() {
      return f + "";
    }, N;
  }
  function u(f, g) {
    var y = c((f = Jn(f), f.type = "f", f)), D = Math.max(-8, Math.min(8, Math.floor(fn(g) / 3))) * 3, w = Math.pow(10, -D), h = Zs[8 + D / 3];
    return function(p) {
      return y(w * p) + h;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var On, Xo, Ko;
Td({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Td(e) {
  return On = Nd(e), Xo = On.format, Ko = On.formatPrefix, On;
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
      return a.precision == null && !isNaN(o = $d(s, i)) && (a.precision = o), Ko(a, i);
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
  return Xo(a);
}
function Ld(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Wc(a[0], a[a.length - 1], n ?? 10);
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
  var e = Yo();
  return e.copy = function() {
    return Vo(e, Qn());
  }, Pr.apply(e, arguments), Ld(e);
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
const Dt = 1e3, it = Dt * 60, $t = it * 60, It = $t * 24, us = It * 7, Js = It * 30, sa = It * 365, ln = Xe((e) => {
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
const Ed = Xe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * it);
}, (e, t) => (t - e) / it, (e) => e.getUTCMinutes());
Ed.range;
const hs = Xe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Dt - e.getMinutes() * it);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getHours());
hs.range;
const Ad = Xe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCHours());
Ad.range;
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
const Pd = Xe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / It, (e) => Math.floor(e / It));
Pd.range;
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
const Zo = Zt(0), nr = Zt(1), Od = Zt(2), Wd = Zt(3), pn = Zt(4), Ud = Zt(5), Gd = Zt(6);
Zo.range;
nr.range;
Od.range;
Wd.range;
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
    [t, 1, Js],
    [t, 3, 3 * Js],
    [e, 1, sa]
  ];
  function l(c, u, f) {
    const g = u < c;
    g && ([c, u] = [u, c]);
    const y = f && typeof f.range == "function" ? f : d(c, u, f), D = y ? y.range(c, +u + 1) : [];
    return g ? D.reverse() : D;
  }
  function d(c, u, f) {
    const g = Math.abs(u - c) / f, y = os(([, , h]) => h).right(i, g);
    if (y === i.length) return e.every(_a(c / sa, u / sa, f));
    if (y === 0) return er.every(Math.max(_a(c, u, f), 1));
    const [D, w] = i[g / i[y - 1][2] < i[y][2] / g ? y - 1 : y];
    return D.every(w);
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
  var t = e.dateTime, n = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = _n(s), u = wn(s), f = _n(o), g = wn(o), y = _n(i), D = wn(i), w = _n(l), h = wn(l), p = _n(d), E = wn(d), L = {
    a: I,
    A: ne,
    b: O,
    B,
    c: null,
    d: ao,
    e: ao,
    f: yu,
    g: Du,
    G: Mu,
    H: gu,
    I: xu,
    j: bu,
    L: Jo,
    m: vu,
    M: _u,
    p: W,
    q: R,
    Q: io,
    s: lo,
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
    "%": oo
  }, T = {
    a: te,
    A: b,
    b: H,
    B: ee,
    c: null,
    d: so,
    e: so,
    f: Au,
    g: Vu,
    G: qu,
    H: Lu,
    I: Fu,
    j: Eu,
    L: ei,
    m: Pu,
    M: Ru,
    p: J,
    q: Y,
    Q: io,
    s: lo,
    S: Bu,
    u: Hu,
    U: zu,
    V: Ou,
    w: Wu,
    W: Uu,
    x: null,
    X: null,
    y: Gu,
    Y: Yu,
    Z: Xu,
    "%": oo
  }, A = {
    a: N,
    A: k,
    b: m,
    B: M,
    c: C,
    d: no,
    e: no,
    f: fu,
    g: to,
    G: eo,
    H: ro,
    I: ro,
    j: lu,
    L: uu,
    m: iu,
    M: cu,
    p: v,
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
    X: x,
    y: to,
    Y: eo,
    Z: su,
    "%": hu
  };
  L.x = $(n, L), L.X = $(a, L), L.c = $(t, L), T.x = $(n, T), T.X = $(a, T), T.c = $(t, T);
  function $(P, G) {
    return function(ae) {
      var z = [], ce = -1, se = 0, le = P.length, de, be, Te;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++ce < le; )
        P.charCodeAt(ce) === 37 && (z.push(P.slice(se, ce)), (be = Qs[de = P.charAt(++ce)]) != null ? de = P.charAt(++ce) : be = de === "e" ? " " : "0", (Te = G[de]) && (de = Te(ae, be)), z.push(de), se = ce + 1);
      return z.push(P.slice(se, ce)), z.join("");
    };
  }
  function F(P, G) {
    return function(ae) {
      var z = vn(1900, void 0, 1), ce = _(z, P, ae += "", 0), se, le;
      if (ce != ae.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (G && !("Z" in z) && (z.Z = 0), "p" in z && (z.H = z.H % 12 + z.p * 12), z.m === void 0 && (z.m = "q" in z ? z.q : 0), "V" in z) {
        if (z.V < 1 || z.V > 53) return null;
        "w" in z || (z.w = 1), "Z" in z ? (se = ia(vn(z.y, 0, 1)), le = se.getUTCDay(), se = le > 4 || le === 0 ? nr.ceil(se) : nr(se), se = ps.offset(se, (z.V - 1) * 7), z.y = se.getUTCFullYear(), z.m = se.getUTCMonth(), z.d = se.getUTCDate() + (z.w + 6) % 7) : (se = oa(vn(z.y, 0, 1)), le = se.getDay(), se = le > 4 || le === 0 ? tr.ceil(se) : tr(se), se = Fn.offset(se, (z.V - 1) * 7), z.y = se.getFullYear(), z.m = se.getMonth(), z.d = se.getDate() + (z.w + 6) % 7);
      } else ("W" in z || "U" in z) && ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0), le = "Z" in z ? ia(vn(z.y, 0, 1)).getUTCDay() : oa(vn(z.y, 0, 1)).getDay(), z.m = 0, z.d = "W" in z ? (z.w + 6) % 7 + z.W * 7 - (le + 5) % 7 : z.w + z.U * 7 - (le + 6) % 7);
      return "Z" in z ? (z.H += z.Z / 100 | 0, z.M += z.Z % 100, ia(z)) : oa(z);
    };
  }
  function _(P, G, ae, z) {
    for (var ce = 0, se = G.length, le = ae.length, de, be; ce < se; ) {
      if (z >= le) return -1;
      if (de = G.charCodeAt(ce++), de === 37) {
        if (de = G.charAt(ce++), be = A[de in Qs ? G.charAt(ce++) : de], !be || (z = be(P, ae, z)) < 0) return -1;
      } else if (de != ae.charCodeAt(z++))
        return -1;
    }
    return z;
  }
  function v(P, G, ae) {
    var z = c.exec(G.slice(ae));
    return z ? (P.p = u.get(z[0].toLowerCase()), ae + z[0].length) : -1;
  }
  function N(P, G, ae) {
    var z = y.exec(G.slice(ae));
    return z ? (P.w = D.get(z[0].toLowerCase()), ae + z[0].length) : -1;
  }
  function k(P, G, ae) {
    var z = f.exec(G.slice(ae));
    return z ? (P.w = g.get(z[0].toLowerCase()), ae + z[0].length) : -1;
  }
  function m(P, G, ae) {
    var z = p.exec(G.slice(ae));
    return z ? (P.m = E.get(z[0].toLowerCase()), ae + z[0].length) : -1;
  }
  function M(P, G, ae) {
    var z = w.exec(G.slice(ae));
    return z ? (P.m = h.get(z[0].toLowerCase()), ae + z[0].length) : -1;
  }
  function C(P, G, ae) {
    return _(P, t, G, ae);
  }
  function S(P, G, ae) {
    return _(P, n, G, ae);
  }
  function x(P, G, ae) {
    return _(P, a, G, ae);
  }
  function I(P) {
    return i[P.getDay()];
  }
  function ne(P) {
    return o[P.getDay()];
  }
  function O(P) {
    return d[P.getMonth()];
  }
  function B(P) {
    return l[P.getMonth()];
  }
  function W(P) {
    return s[+(P.getHours() >= 12)];
  }
  function R(P) {
    return 1 + ~~(P.getMonth() / 3);
  }
  function te(P) {
    return i[P.getUTCDay()];
  }
  function b(P) {
    return o[P.getUTCDay()];
  }
  function H(P) {
    return d[P.getUTCMonth()];
  }
  function ee(P) {
    return l[P.getUTCMonth()];
  }
  function J(P) {
    return s[+(P.getUTCHours() >= 12)];
  }
  function Y(P) {
    return 1 + ~~(P.getUTCMonth() / 3);
  }
  return {
    format: function(P) {
      var G = $(P += "", L);
      return G.toString = function() {
        return P;
      }, G;
    },
    parse: function(P) {
      var G = F(P += "", !1);
      return G.toString = function() {
        return P;
      }, G;
    },
    utcFormat: function(P) {
      var G = $(P += "", T);
      return G.toString = function() {
        return P;
      }, G;
    },
    utcParse: function(P) {
      var G = F(P += "", !0);
      return G.toString = function() {
        return P;
      }, G;
    }
  };
}
var Qs = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, Zd = /^%/, Jd = /[\\^$*+?|[\]().{}]/g;
function Ee(e, t, n) {
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
function eo(e, t, n) {
  var a = Je.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function to(e, t, n) {
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
function no(e, t, n) {
  var a = Je.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function lu(e, t, n) {
  var a = Je.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function ro(e, t, n) {
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
function ao(e, t) {
  return Ee(e.getDate(), t, 2);
}
function gu(e, t) {
  return Ee(e.getHours(), t, 2);
}
function xu(e, t) {
  return Ee(e.getHours() % 12 || 12, t, 2);
}
function bu(e, t) {
  return Ee(1 + Fn.count(Lt(e), e), t, 3);
}
function Jo(e, t) {
  return Ee(e.getMilliseconds(), t, 3);
}
function yu(e, t) {
  return Jo(e, t) + "000";
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
  return Ee(Rr.count(Lt(e) - 1, e), t, 2);
}
function Qo(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? hn(e) : hn.ceil(e);
}
function Cu(e, t) {
  return e = Qo(e), Ee(hn.count(Lt(e), e) + (Lt(e).getDay() === 4), t, 2);
}
function ju(e) {
  return e.getDay();
}
function Nu(e, t) {
  return Ee(tr.count(Lt(e) - 1, e), t, 2);
}
function Tu(e, t) {
  return Ee(e.getFullYear() % 100, t, 2);
}
function Du(e, t) {
  return e = Qo(e), Ee(e.getFullYear() % 100, t, 2);
}
function $u(e, t) {
  return Ee(e.getFullYear() % 1e4, t, 4);
}
function Mu(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? hn(e) : hn.ceil(e), Ee(e.getFullYear() % 1e4, t, 4);
}
function Iu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ee(t / 60 | 0, "0", 2) + Ee(t % 60, "0", 2);
}
function so(e, t) {
  return Ee(e.getUTCDate(), t, 2);
}
function Lu(e, t) {
  return Ee(e.getUTCHours(), t, 2);
}
function Fu(e, t) {
  return Ee(e.getUTCHours() % 12 || 12, t, 2);
}
function Eu(e, t) {
  return Ee(1 + ps.count(qt(e), e), t, 3);
}
function ei(e, t) {
  return Ee(e.getUTCMilliseconds(), t, 3);
}
function Au(e, t) {
  return ei(e, t) + "000";
}
function Pu(e, t) {
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
  return Ee(Zo.count(qt(e) - 1, e), t, 2);
}
function ti(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? pn(e) : pn.ceil(e);
}
function Ou(e, t) {
  return e = ti(e), Ee(pn.count(qt(e), e) + (qt(e).getUTCDay() === 4), t, 2);
}
function Wu(e) {
  return e.getUTCDay();
}
function Uu(e, t) {
  return Ee(nr.count(qt(e) - 1, e), t, 2);
}
function Gu(e, t) {
  return Ee(e.getUTCFullYear() % 100, t, 2);
}
function Vu(e, t) {
  return e = ti(e), Ee(e.getUTCFullYear() % 100, t, 2);
}
function Yu(e, t) {
  return Ee(e.getUTCFullYear() % 1e4, t, 4);
}
function qu(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? pn(e) : pn.ceil(e), Ee(e.getUTCFullYear() % 1e4, t, 4);
}
function Xu() {
  return "+0000";
}
function oo() {
  return "%";
}
function io(e) {
  return +e;
}
function lo(e) {
  return Math.floor(+e / 1e3);
}
var tn, ni;
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
  return tn = Kd(e), ni = tn.format, tn.parse, tn.utcFormat, tn.utcParse, tn;
}
function Zu(e) {
  return new Date(e);
}
function Ju(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ri(e, t, n, a, s, o, i, l, d, c) {
  var u = Yo(), f = u.invert, g = u.domain, y = c(".%L"), D = c(":%S"), w = c("%I:%M"), h = c("%I %p"), p = c("%a %d"), E = c("%b %d"), L = c("%B"), T = c("%Y");
  function A($) {
    return (d($) < $ ? y : l($) < $ ? D : i($) < $ ? w : o($) < $ ? h : a($) < $ ? s($) < $ ? p : E : n($) < $ ? L : T)($);
  }
  return u.invert = function($) {
    return new Date(f($));
  }, u.domain = function($) {
    return arguments.length ? g(Array.from($, Ju)) : g().map(Zu);
  }, u.ticks = function($) {
    var F = g();
    return e(F[0], F[F.length - 1], $ ?? 10);
  }, u.tickFormat = function($, F) {
    return F == null ? A : c(F);
  }, u.nice = function($) {
    var F = g();
    return (!$ || typeof $.range != "function") && ($ = t(F[0], F[F.length - 1], $ ?? 10)), $ ? g(Fd(F, $)) : u;
  }, u.copy = function() {
    return Vo(u, ri(e, t, n, a, s, o, i, l, d, c));
  }, u;
}
function ms() {
  return Pr.apply(ri(qd, Xd, Lt, Dn, Rr, Fn, hs, fs, ln, ni).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
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
  const c = Fe(null), [u, f] = Me(!1), [g, y] = Me(!1), D = t(e.start), w = t(e.end), h = Math.max(w - D, 20), p = () => {
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
  }, E = e.progress ? h * e.progress / 100 : 0, L = () => {
    n?.(e);
  }, T = () => {
    a?.(e);
  }, A = (m) => {
    m.key === "Enter" ? (m.preventDefault(), L()) : m.key === " " && (m.preventDefault(), T());
  }, $ = () => {
    f(!0);
  }, F = () => {
    f(!1);
  }, _ = () => {
    y(!0), l?.();
  }, v = () => {
    y(!1);
  }, N = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (g || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${D}px`,
    "--task-width": `${h}px`,
    "--task-color": p(),
    left: `${D}px`,
    width: `${h}px`,
    backgroundColor: p()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": o,
      className: N,
      style: k,
      onClick: L,
      onDoubleClick: T,
      onKeyDown: A,
      onMouseDown: $,
      onMouseUp: F,
      onFocus: _,
      onBlur: v,
      "aria-label": d || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${E}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function ef({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let y = e.getTime(); y <= t.getTime(); y += 864e5)
    a.push(new Date(y));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Me(-1), d = Fe(null), c = (y) => {
    if (y.key === "ArrowLeft") {
      y.preventDefault();
      const D = Math.max(0, i === -1 ? 0 : i - 1);
      l(D), g(D);
    } else if (y.key === "ArrowRight") {
      y.preventDefault();
      const D = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(D), g(D);
    } else if (y.key === "ArrowDown") {
      y.preventDefault();
      const D = document.querySelector(".gantt-row .timeline-container");
      D && D.focus();
    } else if (y.key === "Home")
      y.preventDefault(), l(0), g(0);
    else if (y.key === "End") {
      y.preventDefault();
      const D = a.length - 1;
      l(D), g(D);
    }
  }, u = (y) => {
    if (y.key === "ArrowDown") {
      y.preventDefault();
      const D = document.querySelector(".gantt-row .resource-label");
      D && D.focus();
    } else if (y.key === "ArrowRight") {
      y.preventDefault();
      const D = d.current;
      D && D.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (y) => {
    const D = d.current?.querySelector(`[data-date-index="${y}"]`);
    D && D.focus();
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
            onFocus: f,
            children: a.map((y, D) => {
              const w = y.getTime() === o.getTime(), h = i === D;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": D,
                  className: `date-column ${w ? "today" : ""} ${h ? "focused" : ""}`,
                  tabIndex: h ? 0 : -1,
                  role: "button",
                  "aria-label": `${y.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${w ? " (Today)" : ""}`,
                  onFocus: () => l(D),
                  onKeyDown: c,
                  children: y.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                D
              );
            })
          }
        )
      ]
    }
  );
}
function tf({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, d] = Me(!1), [c, u] = Me(-1), f = Fe(null);
  Ae(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
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
          w.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
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
        const h = Math.max(0, c - 1);
        u(h), f.current?.querySelector(`[data-task-index="${h}"]`)?.focus();
        break;
      case "ArrowRight":
        w.preventDefault();
        const E = Math.min(t.length - 1, c + 1);
        u(E), f.current?.querySelector(`[data-task-index="${E}"]`)?.focus();
        break;
      case "Enter":
        w.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        w.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        w.preventDefault(), d(!1), u(-1), f.current?.focus();
        break;
    }
  }, y = (w) => {
    switch (w.key) {
      case "ArrowUp":
        w.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        w.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        w.preventDefault(), f.current?.focus();
        break;
    }
  }, D = (w) => {
    l && u(w);
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
            onKeyDown: y,
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
            onKeyDown: g,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((w, h) => /* @__PURE__ */ r.jsx(
              Qu,
              {
                task: w,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === h,
                taskIndex: h,
                tabIndex: l && c === h ? 0 : -1,
                onFocus: () => D(h)
              },
              w.id
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
    const w = new Date(n);
    return isNaN(w.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : w;
  }, [n]), u = $e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const w = new Date(a);
    return isNaN(w.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : w;
  }, [a]), f = $e(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  Ae(() => {
    if (!i.current) return;
    const w = new ResizeObserver((h) => {
      const p = h[0];
      p && d(Math.max(p.contentRect.width - 220, 400));
    });
    return w.observe(i.current), () => w.disconnect();
  }, []);
  const g = $e(
    () => ms().domain([c, u]).range([0, l]),
    [c, u, l]
  ), y = $e(() => {
    const w = /* @__PURE__ */ new Map();
    return t.forEach((h) => {
      const p = w.get(h.resourceId) || [];
      p.push(h), w.set(h.resourceId, p);
    }), w;
  }, [t]), D = (w) => {
    if (w.target === w.currentTarget)
      switch (w.key) {
        case "ArrowDown":
          w.preventDefault();
          const h = i.current?.querySelector(".gantt-row .resource-label");
          h && h.focus();
          break;
        case "Home":
          w.preventDefault();
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
      "aria-colcount": f + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: D,
      children: [
        /* @__PURE__ */ r.jsx(ef, { viewStart: c, viewEnd: u, dateCount: f }),
        /* @__PURE__ */ r.jsx(
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
            children: e.map((w, h) => /* @__PURE__ */ r.jsx(
              tf,
              {
                resource: w,
                tasks: y.get(w.id) || [],
                scale: g,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: h,
                dateCount: f
              },
              w.id
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
    (h) => st.isValidElement(h) && (h.type === rr || h.type?.displayName === "BreadcrumbItem")
  ).map((h) => ({
    text: typeof h.props.children == "string" ? h.props.children : String(h.props.children),
    href: h.props.href,
    active: h.props.active,
    attributes: h.props.attributes
  })) : [], c = () => t ? d() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const w = c();
    if (w && w.length > 0) {
      const h = w.slice().reverse().find((p) => p.href && !p.active);
      if (h)
        return { href: h.href, text: h.text };
    }
    return { text: "Home" };
  }, f = c(), g = u(), y = ge(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), D = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: y,
      "aria-label": D,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          st.Children.map(t, (w, h) => st.isValidElement(w) && (w.type === rr || w.type?.displayName === "BreadcrumbItem") ? st.cloneElement(w, { key: h }) : null)
        ) : (
          // Render from items array
          f?.filter((w) => w.active || !!w.href).map((w, h) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: w.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...w.attributes || {},
              children: w.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: w.href,
              role: "link",
              ...w.attributes || {},
              children: w.text
            }
          ) }, h))
        ) }),
        g.href && /* @__PURE__ */ r.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ r.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: g.href,
            role: "link",
            "aria-label": `Back to ${g.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              g.text
            ]
          }
        ) })
      ]
    }
  );
}, rf = nf;
rf.Item = rr;
rr.displayName = "BreadcrumbItem";
const ai = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [s, o] = Me(!1);
  Ae(() => {
    o(!0);
  }, []), Ae(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, u = c.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = document.querySelector(u);
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const g = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
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
  const i = ge("nhsuk-skip-link", n);
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
  const i = ge("nhsuk-pagination", s);
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
  const s = ge("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, si = st.forwardRef(({
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
}, f) => {
  const g = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), y = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), D = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), w = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const E = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Mt,
      {
        level: a,
        className: D,
        children: E()
      }
    );
  }, h = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: o }) : null, p = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
      className: g,
      ref: f,
      children: [
        d && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: y, children: [
          w(),
          h(),
          p()
        ] })
      ]
    }
  );
});
si.displayName = "Card";
const Ex = ({
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
}, Ax = ({
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
}, Px = ({
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
  "aria-label": f,
  "aria-labelledby": g,
  "aria-describedby": y
}) => {
  const D = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), w = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), h = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const E = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        E,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Mt,
      {
        level: a,
        className: w,
        children: L
      }
    );
  }, p = () => d || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: D,
      "data-testid": c,
      id: u,
      "aria-label": f,
      "aria-labelledby": g,
      "aria-describedby": y,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          h(),
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
  const c = ge(
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
  ) : null, f = () => l ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : o ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ r.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ r.jsxs("div", { className: c, id: e, ...d, children: [
    u(),
    f()
  ] });
}, Rx = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...s
}) => {
  const o = ge("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: o, ...s, children: i() });
}, Bx = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const s = ge(
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
  classes: f,
  attributes: g,
  "data-testid": y,
  columns: D,
  data: w,
  visuallyHiddenCaption: h = !1
}) => {
  const p = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), E = ge(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), L = ge(f), T = (v, N) => {
    const k = ge(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${v.format}`]: v.format
      },
      v.classes
    ), m = {
      scope: "col",
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...o && { role: "columnheader" },
      ...v.attributes
    };
    let M;
    if (v.node != null)
      M = /* @__PURE__ */ r.jsx(r.Fragment, { children: v.node });
    else if (v.html)
      M = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } });
    else if (v.code != null) {
      const C = Array.isArray(v.code), S = C ? v.code.join(`
`) : v.code, x = C || S.includes(`
`), I = {
        className: ge("nhsuk-table__code", v.codeClassName, {
          "nhsuk-table__code--block": x,
          "nhsuk-table__code--inline": !x
        }),
        ...v.codeLanguage ? { "data-language": v.codeLanguage } : {}
      }, ne = ar(S, v.codeLanguage);
      M = x ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...I,
          dangerouslySetInnerHTML: { __html: ne }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...I,
          dangerouslySetInnerHTML: { __html: ne }
        }
      );
    } else
      M = v.text;
    return /* @__PURE__ */ r.jsx("th", { className: k, ...m, children: M }, N);
  }, A = (v, N, k) => {
    const m = s && k || v.rowHeader, M = ge(
      m ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${m ? "header" : "cell"}--${v.format}`]: v.format
      },
      v.classes
    ), C = {
      ...m && { scope: "row" },
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...o && {
        role: m ? "rowheader" : "cell",
        ...v.header && { "data-label": v.header }
      },
      ...v.attributes
    };
    let S;
    if (v.node != null)
      S = /* @__PURE__ */ r.jsx(r.Fragment, { children: v.node });
    else if (v.html)
      S = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } });
    else if (v.code != null) {
      const ne = Array.isArray(v.code), O = ne ? v.code.join(`
`) : v.code, B = ne || O.includes(`
`), W = {
        className: ge("nhsuk-table__code", v.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...v.codeLanguage ? { "data-language": v.codeLanguage } : {}
      }, R = ar(
        O,
        v.codeLanguage,
        v.disableHighlight
      );
      S = B ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...W,
          dangerouslySetInnerHTML: { __html: R }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...W,
          dangerouslySetInnerHTML: { __html: R }
        }
      );
    } else
      S = v.text;
    const x = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && v.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        v.header,
        " "
      ] }),
      S
    ] }), I = m ? "th" : "td";
    return /* @__PURE__ */ r.jsx(I, { className: M, ...C, children: x }, N);
  };
  let $ = t, F = e;
  !$ && D && D.length && ($ = D.map((v) => ({
    text: v.title,
    format: v.format,
    classes: v.headerClasses,
    attributes: v.headerAttributes
  }))), !F && D && w && w.length && (F = w.map((v, N) => D.map((k) => {
    const m = k.accessor ? k.accessor(v, N) : v[k.key];
    let M = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (M.rowHeader = !0), k.render) {
      const C = k.render(m, v, N, k);
      return C == null || typeof C == "boolean" ? { ...M, text: "" } : typeof C == "string" || typeof C == "number" ? { ...M, text: String(C) } : { ...M, ...C };
    }
    return { ...M, text: m != null ? String(m) : "" };
  })));
  const _ = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: E,
      ...o && { role: "table" },
      ...g,
      ...y && { "data-testid": y },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ge(p, h && "nhsuk-u-visually-hidden"), children: n }),
        $ && $.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...o && { role: "row" }, children: $.map(
              (v, N) => T(v, N)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: F && F.map((v, N) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: v.map(
              (k, m) => A(k, m, m === 0)
            )
          },
          N
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ r.jsxs(af, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(Mt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    _()
  ] }) : L ? /* @__PURE__ */ r.jsx("div", { className: L, children: _() }) : _();
}, cf = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = ge(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, oi = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...s, ...a, children: n });
}, ii = ({
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
  attributes: f,
  responsive: g,
  as: y = "th"
}) => {
  const D = ge(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    d
  ), w = {
    scope: "col",
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...g && { role: "columnheader" },
    ...f
  };
  let h;
  if (n != null) h = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) h = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const E = Array.isArray(a), L = E ? a.join(`
`) : a, T = E || L.includes(`
`), A = {
      className: ge("nhsuk-table__code", o, {
        "nhsuk-table__code--block": T,
        "nhsuk-table__code--inline": !T
      }),
      ...s ? { "data-language": s } : {}
    }, $ = ar(
      L,
      s,
      i
    );
    h = T ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...A,
        dangerouslySetInnerHTML: { __html: $ }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...A, dangerouslySetInnerHTML: { __html: $ } });
  } else h = e;
  const p = y;
  return /* @__PURE__ */ r.jsx(p, { className: D, ...w, children: h });
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
  attributes: f,
  responsive: g,
  rowHeader: y
}) => {
  const D = !!y, w = D ? "th" : "td", h = ge(
    D ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${D ? "header" : "cell"}--${l}`,
    d
  ), p = {
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...D && { scope: "row" },
    ...g && { role: D ? "rowheader" : "cell" },
    ...f
  };
  let E;
  if (n != null) E = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) E = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const L = Array.isArray(a), T = L ? a.join(`
`) : a, A = L || T.includes(`
`), $ = {
      className: ge("nhsuk-table__code", o, {
        "nhsuk-table__code--block": A,
        "nhsuk-table__code--inline": !A
      }),
      ...s ? { "data-language": s } : {}
    }, F = ar(T, s, i);
    E = A ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...$, dangerouslySetInnerHTML: { __html: F } }) }) : /* @__PURE__ */ r.jsx("code", { ...$, dangerouslySetInnerHTML: { __html: F } });
  } else E = e;
  return /* @__PURE__ */ r.jsx(w, { className: h, ...p, children: E });
}, dt = lf;
dt.Caption = cf;
dt.BodyRow = oi;
dt.HeaderCell = ii;
dt.Cell = df;
dt.Row = oi;
dt.TH = ii;
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
  ...f
}, g) => {
  const y = n !== void 0, [D, w] = Me(() => t || e[0]?.id || ""), h = y ? n : D, p = Fe(null), E = Fe(/* @__PURE__ */ new Map()), L = fe((N) => {
    y || w(N), a?.(N);
  }, [y, a]), T = fe((N) => {
    s?.(N), l && L(N);
  }, [s, l, L]), A = fe((N, k) => {
    const m = e.filter((S) => !S.disabled).map((S) => S.id), M = m.indexOf(k);
    let C = null;
    switch (N.key) {
      case "ArrowLeft":
        C = M > 0 ? M - 1 : m.length - 1;
        break;
      case "ArrowRight":
        C = M < m.length - 1 ? M + 1 : 0;
        break;
      case "Home":
        C = 0;
        break;
      case "End":
        C = m.length - 1;
        break;
      case "Escape":
        N.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (C !== null) {
      N.preventDefault();
      const S = m[C], x = E.current.get(S);
      x && (x.focus(), T(S));
    }
  }, [e, T, i]), $ = fe((N, k) => {
    k ? E.current.set(N, k) : E.current.delete(N);
  }, []), F = fe((N) => {
    const k = E.current.get(N);
    k && k.focus();
  }, []);
  Do(g, () => ({
    focusTab: F,
    getActiveTab: () => h,
    getTabListElement: () => p.current
  }), [F, h]);
  const _ = fe((N) => {
    const k = N.relatedTarget;
    p.current?.contains(k) || o?.();
  }, [o]), v = ge("nhsuk-tabs", d);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: v,
      id: c,
      "data-testid": u,
      ...f,
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
                onBlur: _,
                children: e.map((N) => {
                  const k = N.id === h, m = N.disabled, M = ge("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": m
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: M, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (C) => $(N.id, C),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${N.id}-panel`,
                      id: `${N.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: m,
                      onClick: () => !m && L(N.id),
                      onKeyDown: (C) => !m && A(C, N.id),
                      onFocus: () => !m && T(N.id),
                      ...N.attributes,
                      children: N.label
                    }
                  ) }, N.id);
                })
              }
            )
          }
        ),
        e.map((N) => {
          const k = N.id === h;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${N.id}-tab`,
              id: `${N.id}-panel`,
              hidden: !k,
              children: N.content
            },
            N.id
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
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : a ? g = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (g = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: g })
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
    ), f = (y) => t === "cross" && !a ? `do not ${y}` : y, g = () => /* @__PURE__ */ r.jsx(
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
          g(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((y, D) => /* @__PURE__ */ r.jsxs("li", { children: [
            u(),
            f(y.item)
          ] }, D)) }) })
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
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : a ? g = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (g = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: g })
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
      const c = d + 1, u = `${t}-${c}-hint`, f = `${t}-${c}-status`, g = !!l.href, y = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), D = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        mf,
        {
          item: l,
          itemClasses: y,
          hasLink: g,
          hintId: u,
          statusId: f,
          ariaDescribedBy: D
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
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(Ge, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: s, children: u });
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
        To(
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
}, Ox = ({
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
] }), xf = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Ge, { color: bf(n.status), text: n.label }) }, n.status)) });
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
const Wx = ({
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
  enableDefaultToolbar: f = !0,
  legendItems: g,
  enableDefaultLegend: y = !0,
  legendPlacement: D = "bottom",
  onA11yModeChange: w
}) => {
  const [h, p] = Me("grid"), E = i || h, [L, T] = Me(a || []), A = n ?? L, $ = $e(() => {
    const C = /* @__PURE__ */ new Set();
    return e.forEach((S) => C.add(new Date(S.start).getTime())), Array.from(C).sort((S, x) => S - x);
  }, [e]), F = $e(() => {
    const C = {};
    return e.forEach((S) => {
      const x = new Date(S.start).getTime();
      C[x] || (C[x] = {});
      const I = S.capacity - S.booked - (S.held || 0);
      C[x][S.sessionId] = { slot: S, remaining: I };
    }), C;
  }, [e]), _ = fe((C) => {
    if (o === "single") {
      const S = [C.id];
      n || T(S), s?.(S, { lastAction: "select" });
    } else {
      const S = A.includes(C.id), x = S ? A.filter((I) => I !== C.id) : [...A, C.id];
      n || T(x), s?.(x, { lastAction: S ? "deselect" : "select" });
    }
  }, [o, A, n, s]), v = $e(() => g || (y ? Array.from(new Set(e.map((S) => S.status))).map((S) => ({
    status: S,
    label: S.charAt(0).toUpperCase() + S.slice(1)
  })) : void 0), [g, y, e]), N = v ? /* @__PURE__ */ r.jsx(
    xf,
    {
      items: v,
      orientation: D === "left" || D === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (C) => {
    i || p(C), w?.(C);
  }, m = u || (f ? /* @__PURE__ */ r.jsx(
    gf,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: E,
      onA11yModeChange: k
    }
  ) : null), M = /* @__PURE__ */ r.jsx("div", { style: d, className: ge(l), children: /* @__PURE__ */ r.jsx(ya, { className: ge("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Yt, { children: /* @__PURE__ */ r.jsx(Cn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    m,
    D === "top" && N,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((C) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => _(C), "aria-pressed": A.includes(C.id), children: [
      kn(new Date(C.start)),
      " – ",
      kn(new Date(C.end)),
      " (",
      C.status,
      ")"
    ] }) }, C.id)) }),
    D === "bottom" && N
  ] }) }) }) }) });
  return E === "list" ? M : /* @__PURE__ */ r.jsx("div", { style: d, className: ge(l), children: /* @__PURE__ */ r.jsx(ya, { className: ge("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Yt, { children: /* @__PURE__ */ r.jsx(Cn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    m,
    D === "top" && N,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": $.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((C) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${C.specialty}`, className: "nhs-slot-matrix__session-header", children: C.specialty }, C.id))
      ] }),
      $.map((C) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": kn(new Date(C)), children: kn(new Date(C)) }),
        t.map((S) => {
          const x = F[C]?.[S.id];
          if (!x)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, S.id);
          const { slot: I, remaining: ne } = x, O = A.includes(I.id), B = c ? c(I) : `Slot ${kn(new Date(I.start))} ${I.status}${ne === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": I.status,
              className: ge("nhs-slot-matrix__cell", O && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": O || void 0,
              onClick: () => _(I),
              children: ne > 0 ? `${ne} left` : "Full"
            },
            I.id
          );
        })
      ] }, C))
    ] }),
    D === "bottom" && N
  ] }) }) }) }) });
};
function co(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function kn(e) {
  return `${co(e.getHours())}:${co(e.getMinutes())}`;
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
    className: f,
    tableClassName: g,
    bordered: y = !1,
    striped: D = !1,
    responsive: w = !1,
    tableType: h = "default"
  }, p) => {
    const E = Fe(null), L = Fe(null), T = Fe(null);
    st.useImperativeHandle(p, () => E.current, []);
    const [A, $] = Me(0), [F, _] = Me(0), [v, N] = Me("headers"), [k, m] = Me("browse"), M = t.length, C = e.length, S = $e(() => !n || n.length === 0 ? e : [...e].sort((R, te) => {
      for (const { key: b, direction: H } of n) {
        const ee = R[b], J = te[b];
        if (ee == null && J == null) continue;
        if (ee == null) return 1;
        if (J == null) return -1;
        let Y = 0;
        if (typeof ee == "number" && typeof J == "number" ? Y = ee - J : Y = String(ee).localeCompare(String(J)), Y !== 0)
          return H === "asc" ? Y : -Y;
      }
      return 0;
    }), [e, n]), x = fe((R, te) => {
      setTimeout(() => {
        const b = E.current?.querySelector(
          `tbody tr:nth-child(${R + 1}) td:nth-child(${te + 1})`
        );
        b && (b.focus(), typeof b.scrollIntoView == "function" && b.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), I = fe((R) => {
      setTimeout(() => {
        const te = E.current?.querySelector(`th:nth-child(${R + 1})`);
        te && (te.focus(), typeof te.scrollIntoView == "function" && te.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ne = fe((R) => {
      a?.(R);
    }, [a]), O = fe((R) => {
      o?.(R);
    }, [o]), B = fe((R) => {
      const { key: te } = R;
      switch (te) {
        case "Enter":
          if (R.preventDefault(), v === "headers" && k === "browse")
            m("navigate"), I(F);
          else if (v === "headers" && k === "navigate") {
            const b = t[F];
            b && ne(b.key);
          } else v === "cells" && k === "browse" ? (m("navigate"), x(A, F)) : v === "cells" && k === "navigate" && O(A);
          break;
        case "Escape":
          R.preventDefault(), (v === "headers" && k === "navigate" || v === "cells" && k === "navigate") && m("browse");
          break;
        case "ArrowLeft":
          if (R.preventDefault(), k === "navigate" || k === "browse" && v === "headers") {
            if (v === "headers") {
              const b = Math.max(0, F - 1);
              _(b), I(b);
            } else if (v === "cells") {
              const b = Math.max(0, F - 1);
              _(b), x(A, b);
            }
          }
          break;
        case "ArrowRight":
          if (R.preventDefault(), k === "navigate" || k === "browse" && v === "headers") {
            if (v === "headers") {
              const b = Math.min(M - 1, F + 1);
              _(b), I(b);
            } else if (v === "cells") {
              const b = Math.min(M - 1, F + 1);
              _(b), x(A, b);
            }
          }
          break;
        case "ArrowUp":
          if (R.preventDefault(), v === "cells") {
            if (k === "browse") {
              const b = Math.max(0, A - 1);
              $(b), x(b, 0), _(0);
            } else if (k === "navigate")
              if (A > 0) {
                const b = A - 1;
                $(b), x(b, F);
              } else
                N("headers"), m("browse"), I(F);
          }
          break;
        case "ArrowDown":
          if (R.preventDefault(), v === "headers" && k === "browse")
            N("cells"), $(0), _(0), x(0, 0);
          else if (v === "cells") {
            const b = C - 1;
            if (k === "browse") {
              const H = Math.min(b, A + 1);
              $(H), x(H, 0), _(0);
            } else if (k === "navigate" && A < b) {
              const H = A + 1;
              $(H), x(H, F);
            }
          }
          break;
        case "Home":
          R.preventDefault(), v === "headers" ? (_(0), I(0)) : v === "cells" && (R.ctrlKey ? ($(0), _(0), x(0, 0)) : (_(0), x(A, 0)));
          break;
        case "End":
          if (R.preventDefault(), v === "headers") {
            const b = M - 1;
            _(b), I(b);
          } else if (v === "cells")
            if (R.ctrlKey) {
              const b = C - 1, H = M - 1;
              $(b), _(H), x(b, H);
            } else {
              const b = M - 1;
              _(b), x(A, b);
            }
          break;
        case " ":
          if (R.preventDefault(), v === "headers" && k === "navigate") {
            const b = t[F];
            b && ne(b.key);
          } else v === "cells" && k === "navigate" && O(A);
          break;
      }
    }, [
      v,
      k,
      F,
      A,
      M,
      C,
      t,
      x,
      I,
      ne,
      O
    ]);
    Ae(() => {
      const R = E.current;
      if (R)
        return R.addEventListener("keydown", B), () => R.removeEventListener("keydown", B);
    }, [B]);
    const W = ge(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": w,
        "nhsuk-table--bordered": y,
        "nhsuk-table--striped": D,
        "nhsuk-table--compact": h === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: E,
        className: W,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: L, role: "row", children: t.map((R, te) => {
            const b = n?.find((J) => J.key === R.key), H = !!b, ee = v === "headers" && F === te;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ge("sortable-header", {
                  "sortable-header--focused": ee
                }),
                role: "columnheader",
                tabIndex: ee ? 0 : -1,
                onClick: () => ne(R.key),
                onKeyDown: (J) => {
                  (J.key === "Enter" || J.key === " ") && (J.preventDefault(), ne(R.key));
                },
                "aria-sort": H ? b?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: R.label }),
                  H && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((J) => J.key === R.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: b?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              R.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: T, className: "nhsuk-table__body", role: "rowgroup", children: S.map((R, te) => {
            const b = s === te, H = v === "cells" && A === te;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ge("data-row", {
                  "data-row--selected": b,
                  "data-row--focused": H
                }),
                "aria-selected": b,
                children: t.map((ee, J) => {
                  const Y = ee.tableRenderer ? ee.tableRenderer(R) : ee.render ? ee.render(R) : R[ee.key], P = v === "cells" && A === te && F === J, G = () => typeof Y == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: Y ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: Y ? "Yes" : "No" })
                  ] }) : String(Y ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ge("data-cell", {
                        "data-cell--focused": P
                      }),
                      tabIndex: P ? 0 : -1,
                      onClick: () => O(te),
                      children: G()
                    },
                    ee.key
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
const li = ({
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
  const f = Fe(null), g = Fe(null), y = Fe(null), D = fe((v, N) => {
    d || (g.current = N, v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", N));
  }, [d]), w = fe((v, N) => {
    d || g.current === N || (v.preventDefault(), v.dataTransfer.dropEffect = "move", y.current = N);
  }, [d]), h = fe((v, N) => {
    if (d) return;
    v.preventDefault();
    const k = g.current;
    if (!k || k === N) return;
    const m = e.findIndex((C) => C.key === k), M = e.findIndex((C) => C.key === N);
    if (m !== -1 && M !== -1) {
      const C = [...e], [S] = C.splice(m, 1);
      C.splice(M, 0, S), n(C);
    }
    g.current = null, y.current = null;
  }, [d, e, n]), p = fe(() => {
    g.current = null, y.current = null;
  }, []), E = fe((v) => {
    const N = t.find((k) => k.key === v);
    return N ? N.label : v;
  }, [t]), L = fe((v) => ["red", "orange", "blue", "aqua-green", "grey"][v] || "grey", []), T = fe((v) => {
    if (d) return;
    const N = e.map(
      (k) => k.key === v ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    n(N);
  }, [e, n, d]), A = fe((v) => {
    if (d) return;
    const N = e.filter((k) => k.key !== v);
    n(N);
  }, [e, n, d]), $ = fe(() => {
    d || n([]);
  }, [n, d]), F = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const v = e.map((N, k) => {
      const m = N.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${E(N.key)} (${m})`;
    });
    if (v.length === 1)
      return `Sorted by: ${v[0]}`;
    if (v.length === 2)
      return `Sorted by: ${v.join(" and ")}`;
    {
      const N = v.pop();
      return `Sorted by: ${v.join(", ")}, and ${N}`;
    }
  }, _ = $e(() => {
    const v = ["sort-description"];
    return l && v.push("sort-help"), u && v.push(u), v.join(" ");
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
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": _,
          children: e.map((v, N) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (k) => D(k, v.key),
              onDragOver: (k) => w(k, v.key),
              onDrop: (k) => h(k, v.key),
              onDragEnd: p,
              onClick: () => T(v.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": v.key,
              children: /* @__PURE__ */ r.jsx(
                Ge,
                {
                  color: L(N),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => A(v.key),
                  disabled: d,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${N + 1}`, children: N + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: E(v.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), T(v.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${E(v.key)}. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${v.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${v.direction}`,
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
            v.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        et,
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
    disabled: f = !1,
    orientation: g = "horizontal",
    id: y,
    isLoading: D = !1,
    loadingComponent: w,
    error: h = null,
    errorComponent: p,
    "data-testid": E,
    actions: L,
    actionsMinGap: T = 16,
    forceActionsAbove: A = !1
  } = t, F = Fe(
    y || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, _ = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), v = `${F}-description`, N = `${F}-navigation-help`, {
    dataComparator: k = (j, V) => JSON.stringify(j) === JSON.stringify(V),
    filterFunction: m = (j) => j,
    booleanRenderer: M = (j) => j ? "✓" : "✗"
  } = a || {}, C = o !== void 0, S = o ?? 0, [x, I] = Me({
    focusArea: "tabs",
    focusedTabIndex: S,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ne = $e(() => ({
    selectedIndex: S,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [S]), [O, B] = $o(_f, ne);
  Ae(() => {
    const j = O.tabLoadingStates.length, V = s.length;
    j !== V && B({ type: "ADJUST_ARRAYS", payload: { newLength: V } });
  }, [s.length]), Ae(() => {
    C && B({ type: "SET_SELECTED_INDEX", payload: S });
  }, [S, C]), Ae(() => {
    I((j) => ({
      ...j,
      focusArea: "tabs",
      focusedTabIndex: O.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [O.selectedIndex]), Ae(() => {
    l && l(O.globalSelectedRowData);
  }, [O.globalSelectedRowData, l]);
  const W = fe(
    (j, V) => k(j, V),
    [k]
  ), R = fe(
    (j) => {
      j >= 0 && j < s.length && !s[j].disabled && (B({ type: "SET_SELECTED_INDEX", payload: j }), I((V) => ({
        ...V,
        focusedTabIndex: j,
        focusArea: "tabs"
      })), i?.(j));
    },
    [s, i]
  ), te = Fe(!1), b = fe(
    (j, V) => {
      if (!V?.force && !te.current && j === 0) {
        te.current = !0;
        return;
      }
      te.current = !0, setTimeout(() => {
        const oe = H.current[j], q = oe?.parentElement;
        if (oe && q) {
          const Q = oe.offsetLeft, ie = oe.offsetWidth, _e = q.clientWidth, ke = Q - _e / 2 + ie / 2;
          try {
            q.scrollTo({
              left: Math.max(0, ke),
              behavior: "smooth"
            });
          } catch {
            oe.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!oe,
          tabListElementExists: !!q
        });
      }, 50);
    },
    []
  ), H = Fe([]), ee = Fe([]), J = fe(
    (j, V) => {
      const oe = O.sortConfig || [], q = oe.find(
        (_e) => _e.key === V
      );
      let Q;
      q ? q.direction === "asc" ? Q = oe.map(
        (_e) => _e.key === V ? { ..._e, direction: "desc" } : _e
      ) : Q = oe.filter(
        (_e) => _e.key !== V
      ) : Q = [...oe, { key: V, direction: "asc" }], B({
        type: "SET_SORT",
        payload: Q
      }), s[j].onSort?.(V);
    },
    [O.sortConfig, s]
  ), Y = fe(
    (j) => {
      setTimeout(() => {
        const V = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] th:nth-child(${j + 1})`
        );
        V && V.focus();
      }, 0);
    },
    [O.selectedIndex]
  ), P = fe(
    (j) => M(j),
    [M]
  ), G = fe(
    (j, V) => {
      setTimeout(() => {
        const oe = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] tbody tr:nth-child(${j + 1}) td:nth-child(${V + 1})`
        );
        oe && oe.focus();
      }, 0);
    },
    [O.selectedIndex]
  );
  Ae(() => {
    x.isGridActive && (x.focusArea === "headers" ? setTimeout(() => {
      Y(x.focusedHeaderIndex);
    }, 0) : x.focusArea === "cells" && setTimeout(() => {
      G(
        x.focusedRowIndex,
        x.focusedColumnIndex
      );
    }, 0));
  }, [
    x.focusArea,
    x.isGridActive,
    x.focusedHeaderIndex,
    x.focusedRowIndex,
    x.focusedColumnIndex,
    Y,
    G
  ]), Ae(() => {
    b(O.selectedIndex);
  }, [O.selectedIndex, b]);
  const ae = fe(
    (j, V) => {
      const { key: oe } = j, q = s[O.selectedIndex], Q = q?.columns.length || 0;
      switch (oe) {
        case "ArrowLeft":
          j.preventDefault();
          const ie = Math.max(0, V - 1);
          I((Ce) => ({
            ...Ce,
            focusedHeaderIndex: ie
          })), Y(ie);
          break;
        case "ArrowRight":
          j.preventDefault();
          const _e = Math.min(Q - 1, V + 1);
          I((Ce) => ({
            ...Ce,
            focusedHeaderIndex: _e
          })), Y(_e);
          break;
        case "ArrowUp":
          j.preventDefault(), I((Ce) => ({
            ...Ce,
            focusArea: "tabs",
            focusedTabIndex: O.selectedIndex
          })), b(O.selectedIndex), H.current[O.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          j.preventDefault(), I((Ce) => ({
            ...Ce,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: V,
            isGridActive: !0
          }));
          break;
        case "Home":
          j.preventDefault(), I((Ce) => ({ ...Ce, focusedHeaderIndex: 0 })), Y(0);
          break;
        case "End":
          j.preventDefault();
          const ke = Q - 1;
          I((Ce) => ({
            ...Ce,
            focusedHeaderIndex: ke
          })), Y(ke);
          break;
        case "Enter":
        case " ":
          j.preventDefault();
          const ye = q?.columns[V]?.key;
          ye && J(O.selectedIndex, ye);
          break;
      }
    },
    [
      s,
      O.selectedIndex,
      J,
      I,
      Y,
      G,
      H
    ]
  ), z = fe(
    (j, V, oe) => {
      const { key: q } = j, Q = s[O.selectedIndex], ie = Q?.data.length || 0, _e = Q?.columns.length || 0;
      switch (q) {
        case "ArrowUp":
          if (j.preventDefault(), V === 0)
            I((pe) => ({
              ...pe,
              focusArea: "headers",
              focusedHeaderIndex: oe,
              isGridActive: !1
            })), Y(oe);
          else {
            const pe = V - 1;
            I((we) => ({
              ...we,
              focusedRowIndex: pe
            })), G(pe, oe);
          }
          break;
        case "ArrowDown":
          j.preventDefault();
          const ke = Math.min(ie - 1, V + 1);
          I((pe) => ({
            ...pe,
            focusedRowIndex: ke
          })), G(ke, oe);
          break;
        case "ArrowLeft":
          j.preventDefault();
          const ye = Math.max(0, oe - 1);
          I((pe) => ({
            ...pe,
            focusedColumnIndex: ye
          })), G(V, ye);
          break;
        case "ArrowRight":
          j.preventDefault();
          const Ce = Math.min(_e - 1, oe + 1);
          I((pe) => ({
            ...pe,
            focusedColumnIndex: Ce
          })), G(V, Ce);
          break;
        case "Home":
          j.preventDefault(), j.ctrlKey ? (I((pe) => ({
            ...pe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), G(0, 0)) : (I((pe) => ({ ...pe, focusedColumnIndex: 0 })), G(V, 0));
          break;
        case "End":
          if (j.preventDefault(), j.ctrlKey) {
            const pe = ie - 1, we = _e - 1;
            I((Le) => ({
              ...Le,
              focusedRowIndex: pe,
              focusedColumnIndex: we
            })), G(pe, we);
          } else {
            const pe = _e - 1;
            I((we) => ({
              ...we,
              focusedColumnIndex: pe
            })), G(V, pe);
          }
          break;
        case "Enter":
        case " ":
          if (j.preventDefault(), Q && Q.data[V]) {
            const pe = Q.data.some(
              (Ve) => "ews_data" in Ve
            ) ? m(Q.data, O.filters) : Q.data, we = O.sortConfig;
            let Le = pe;
            if (we && we.length > 0 && (Le = [...pe].sort((Ve, Pe) => {
              for (const { key: tt, direction: Ft } of we) {
                let xt = Ve[tt], ut = Pe[tt];
                const qe = Q.columns.find(
                  (gn) => gn.key === tt
                );
                if (qe?.tableRenderer ? (xt = qe.tableRenderer(Ve), ut = qe.tableRenderer(Pe)) : qe?.render && (xt = qe.render(Ve), ut = qe.render(Pe)), xt == null && ut == null) continue;
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
            })), Le[V]) {
              const Ve = Le[V], tt = O.globalSelectedRowData && W(O.globalSelectedRowData, Ve) ? null : Ve;
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
      O.selectedIndex,
      O.filters,
      O.sortConfig,
      m,
      W,
      B,
      I,
      Y,
      G
    ]
  ), ce = fe(
    (j, V) => m(j, V),
    [m]
  );
  if (Do(
    n,
    () => ({
      selectTab: (j) => {
        j >= 0 && j < s.length && (B({ type: "SET_SELECTED_INDEX", payload: j }), i?.(j));
      },
      refreshData: (j) => {
        console.log("Refreshing data for tab:", j ?? "all");
      },
      exportData: (j) => {
        const V = j ?? O.selectedIndex, oe = s[V];
        return oe ? oe.data : [];
      },
      getSelectedRows: (j) => O.globalSelectedRowData ? [] : [],
      clearSelection: (j) => {
        B({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (j) => {
        B({ type: "SET_FILTERS", payload: j });
      }
    }),
    [O.selectedIndex, O.selectedRows, s, i]
  ), D)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": E,
        children: w || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
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
  if (h)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": E,
        children: p || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: h })
        ] })
      }
    );
  const se = Fe(null), le = Fe(null), de = Fe(null), [be, Te] = Me(!0);
  Ae(() => {
    if (!L) {
      Te(!1);
      return;
    }
    if (A) {
      Te(!1);
      return;
    }
    function j() {
      if (!se.current || !le.current || !de.current) return;
      const q = se.current.clientWidth, Q = Array.from(
        le.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ie = Q.reduce((Ce, pe) => Ce + pe.offsetWidth, 0), _e = de.current.offsetWidth, ke = Math.max(8 * (Q.length - 1), 0), ye = ie + ke + _e + T <= q;
      Te(ye);
    }
    const V = requestAnimationFrame(() => j()), oe = new ResizeObserver(() => j());
    return se.current && oe.observe(se.current), le.current && oe.observe(le.current), () => {
      cancelAnimationFrame(V), oe.disconnect();
    };
  }, [L, T, A, s.length]);
  const Se = de, he = fe(() => Se.current ? Array.from(
    Se.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((j) => !j.hasAttribute("disabled")) : [], []), Z = fe(
    (j) => {
      const V = he();
      if (!V.length) return;
      const oe = Math.max(0, Math.min(j, V.length - 1));
      V[oe].focus(), I((q) => ({ ...q, focusArea: "actions", focusedActionIndex: oe }));
    },
    [he]
  ), K = fe(() => Z(0), [Z]), re = fe(
    (j, V) => {
      const { key: oe } = j, q = s.length - 1;
      switch (oe) {
        case "ArrowUp": {
          L && !be && (j.preventDefault(), K());
          break;
        }
        case "ArrowLeft": {
          j.preventDefault();
          const Q = V > 0 ? V - 1 : q;
          R(Q), b(Q), H.current[Q]?.focus();
          break;
        }
        case "ArrowRight": {
          if (j.preventDefault(), V === q && L && be) {
            K();
            return;
          }
          const Q = V < q ? V + 1 : 0;
          R(Q), b(Q), H.current[Q]?.focus();
          break;
        }
        case "ArrowDown": {
          j.preventDefault(), I((Q) => ({
            ...Q,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          j.preventDefault(), R(0), b(0), H.current[0]?.focus();
          break;
        }
        case "End": {
          j.preventDefault(), R(q), b(q), H.current[q]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          j.preventDefault(), R(V);
          break;
        }
        case "Tab": {
          !j.shiftKey && V === q && L && be && K();
          break;
        }
      }
    },
    [s.length, R, b, L, be, K]
  ), U = fe((j) => {
    const { key: V } = j, oe = he();
    if (!oe.length) return;
    const q = oe.findIndex((Q) => Q === document.activeElement);
    switch (V) {
      case "ArrowLeft": {
        if (be)
          if (q > 0)
            j.preventDefault(), Z(q - 1);
          else {
            j.preventDefault();
            const Q = s.length - 1;
            R(Q), b(Q), H.current[Q]?.focus(), I((ie) => ({ ...ie, focusArea: "tabs", focusedTabIndex: Q }));
          }
        break;
      }
      case "ArrowRight": {
        be && (q < oe.length - 1 ? (j.preventDefault(), Z(q + 1)) : (j.preventDefault(), R(0), b(0), H.current[0]?.focus(), I((Q) => ({ ...Q, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (be)
          j.preventDefault(), I((Q) => ({ ...Q, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          j.preventDefault();
          const Q = O.selectedIndex;
          H.current[Q]?.focus(), I((ie) => ({ ...ie, focusArea: "tabs", focusedTabIndex: Q }));
        }
        break;
      }
    }
  }, [he, be, Z, s.length, R, b, O.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${u}`,
      id: y,
      "data-testid": E,
      ref: se,
      children: [
        c && !_ && /* @__PURE__ */ r.jsx("div", { id: v, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: N,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          li,
          {
            sortConfig: O.sortConfig || [],
            columns: s.flatMap(
              (j) => j.columns.map((V) => ({ key: V.key, label: V.label }))
            ).filter(
              (j, V, oe) => oe.findIndex((q) => q.key === j.key) === V
              // Remove duplicates
            ),
            onSortChange: (j) => {
              B({ type: "SET_SORT", payload: j });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        L && !be && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: de,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: U,
            children: L
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${be ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? _ ? c : v : N,
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              ref: le,
              children: s.map((j, V) => {
                const oe = V === O.selectedIndex, q = j.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${j.id}`,
                    "aria-controls": `panel-${j.id}`,
                    "aria-selected": oe,
                    "aria-disabled": q,
                    tabIndex: oe ? 0 : -1,
                    ref: (Q) => {
                      H.current[V] = Q;
                    },
                    onClick: () => R(V),
                    onKeyDown: (Q) => re(Q, V),
                    disabled: q,
                    className: [
                      "aria-tabs-datagrid__tab",
                      oe ? "aria-tabs-datagrid__tab--selected" : "",
                      q ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: j.label }),
                      O.tabLoadingStates[V] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      O.tabErrors[V] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  j.id
                );
              })
            }
          ),
          L && be && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: de,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: U,
              children: L
            }
          )
        ] }),
        s.map((j, V) => {
          const oe = V === O.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${j.id}`,
              "aria-labelledby": `tab-${j.id}`,
              tabIndex: 0,
              hidden: !oe,
              ref: (q) => {
                ee.current[V] = q;
              },
              className: `aria-tabs-datagrid__panel ${j.className || ""}`,
              "data-tab-panel": V,
              children: oe && (() => {
                const q = j.data.some(
                  (ie) => "ews_data" in ie
                ) ? ce(j.data, O.filters) : j.data, Q = $e(() => {
                  const ie = O.sortConfig;
                  return !ie || ie.length === 0 ? q : [...q].sort((_e, ke) => {
                    for (const { key: ye, direction: Ce } of ie) {
                      let pe = _e[ye], we = ke[ye];
                      const Le = j.columns.find(
                        (Pe) => Pe.key === ye
                      );
                      if (Le?.tableRenderer ? (pe = Le.tableRenderer(_e), we = Le.tableRenderer(ke)) : Le?.render && (pe = Le.render(_e), we = Le.render(ke)), pe == null && we == null) continue;
                      if (pe == null) return 1;
                      if (we == null) return -1;
                      let Ve = 0;
                      if (typeof pe == "number" && typeof we == "number" ? Ve = pe - we : typeof pe == "boolean" && typeof we == "boolean" ? Ve = pe === we ? 0 : pe ? 1 : -1 : Ve = String(pe).localeCompare(
                        String(we),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Ve !== 0)
                        return Ce === "asc" ? Ve : -Ve;
                    }
                    return 0;
                  });
                }, [q, O.sortConfig, j.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": j.ariaLabel,
                    "aria-describedby": j.ariaDescription ? `panel-${j.id}-description` : void 0,
                    children: [
                      j.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${j.id}-description`,
                          children: j.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: j.columns.map((ie, _e) => {
                        const ke = O.sortConfig?.find(
                          (pe) => pe.key === ie.key
                        ), ye = !!ke, Ce = x.focusArea === "headers" && x.focusedHeaderIndex === _e;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ce ? "sortable-header--focused" : ""} ${ye ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ce ? 0 : -1,
                            onClick: () => J(V, ie.key),
                            onKeyDown: (pe) => ae(pe, _e),
                            "aria-sort": ye ? ke?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: ie.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ye ? `sort-indicator--${ke?.direction}` : ""}`,
                                  children: [
                                    O.sortConfig && O.sortConfig.length > 0 && O.sortConfig.findIndex(
                                      (pe) => pe.key === ie.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${O.sortConfig.findIndex((pe) => pe.key === ie.key) + 1}`,
                                        "data-priority": O.sortConfig.findIndex(
                                          (pe) => pe.key === ie.key
                                        ) + 1,
                                        title: `Sort priority: ${O.sortConfig.findIndex((pe) => pe.key === ie.key) + 1}`,
                                        children: O.sortConfig.findIndex(
                                          (pe) => pe.key === ie.key
                                        ) + 1
                                      }
                                    ),
                                    ye && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ke?.direction}`,
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
                          ie.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: Q.map((ie, _e) => {
                        const ke = O.globalSelectedRowData && W(O.globalSelectedRowData, ie), ye = x.focusArea === "cells" && x.focusedRowIndex === _e;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ke ? "data-row--selected" : ""} ${ye ? "data-row--focused" : ""}`,
                            "aria-selected": ke,
                            children: j.columns.map((Ce, pe) => {
                              const we = ie[Ce.key];
                              let Le;
                              Ce.tableRenderer ? Le = Ce.tableRenderer(ie) : Ce.render ? Le = Ce.render(ie) : Le = we;
                              const Ve = x.focusArea === "cells" && x.focusedRowIndex === _e && x.focusedColumnIndex === pe, Pe = () => {
                                if (Ce.customRenderer) {
                                  const tt = Ce.customRenderer(
                                    we,
                                    ie
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
                                return typeof we == "boolean" && Le === we ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  P(we),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: we ? "Yes" : "No" })
                                ] }) : st.isValidElement(Le) || typeof Le != "object" ? Le ?? "" : Le;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ve ? "data-cell--focused" : ""}`,
                                  tabIndex: Ve ? 0 : -1,
                                  onClick: () => {
                                    const Ft = O.globalSelectedRowData && W(
                                      O.globalSelectedRowData,
                                      ie
                                    ) ? null : ie;
                                    B({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Ft
                                    });
                                  },
                                  onKeyDown: (tt) => z(tt, _e, pe),
                                  children: Pe()
                                },
                                Ce.key
                              );
                            })
                          },
                          _e
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            j.id
          );
        })
      ]
    }
  );
}), Wn = {
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
  const u = $e(() => wf(e), [e]), f = fe((E) => {
    if (l) return;
    const L = e.map(
      (T) => T.id === E ? { ...T, direction: T.direction === "asc" ? "desc" : "asc" } : T
    );
    t(L);
  }, [e, t, l]), g = fe((E) => {
    if (l) return;
    const L = e.findIndex((A) => A.id === E);
    if (L <= 0) return;
    const T = [...e];
    [T[L], T[L - 1]] = [T[L - 1], T[L]], t(la(T));
  }, [e, t, l]), y = fe((E) => {
    if (l) return;
    const L = e.findIndex((A) => A.id === E);
    if (L >= e.length - 1 || L === -1) return;
    const T = [...e];
    [T[L], T[L + 1]] = [T[L + 1], T[L]], t(la(T));
  }, [e, t, l]), D = fe((E) => {
    if (l) return;
    const L = e.filter((T) => T.id !== E);
    t(la(L));
  }, [e, t, l]), w = fe(() => {
    l || t([]);
  }, [t, l]), h = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const E = u.map((L, T) => {
      const A = L.direction === "asc" ? "ascending" : "descending";
      return `${T + 1}. ${L.label} (${A})`;
    });
    if (E.length === 1)
      return `Sorted by: ${E[0]}`;
    if (E.length === 2)
      return `Sorted by: ${E.join(" and ")}`;
    {
      const L = E.pop();
      return `Sorted by: ${E.join(", ")}, and ${L}`;
    }
  }, p = $e(() => {
    const E = ["sort-description"];
    return i && E.push("sort-help"), c && E.push(c), E.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: h()
    }
  ) }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: h()
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
          u.map((E) => /* @__PURE__ */ r.jsx(
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
                  onClose: () => D(E.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: E.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: E.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(E.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${E.label}. Currently ${E.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: E.direction === "asc" ? Wn.asc : Wn.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(E.id),
                          disabled: l || !kf(E.id, e),
                          "aria-label": `Move ${E.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => y(E.id),
                          disabled: l || !Cf(E.id, e),
                          "aria-label": `Move ${E.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            E.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "secondary",
        onClick: w,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsxs("small", { children: [
      "Click ",
      Wn.asc,
      "/",
      Wn.desc,
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
function uo(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((L) => L.key === a), g = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", y = () => s.filter((T) => !i.includes(T) && e[T]).slice(0, 3).map((T) => {
    const A = t.find((v) => v.key === T), $ = e[T], F = c[T] ? c[T]($, e) : A?.cardRenderer ? A.cardRenderer(e) : A?.render ? A.render(e) : $;
    return `${A?.label || T}: ${F}`;
  }).join(" • "), D = () => o.length === 0 ? null : o.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const T = e[L.fieldKey], A = L.render ? L.render(T, e) : T;
    return `<span class="nhsuk-tag ${If(L, T)}">${A}</span>`;
  }).join(""), w = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", h = D(), p = y(), E = h ? `${p}${h ? `<div class="adaptive-card__badges">${h}</div>` : ""}` : p;
  return {
    variant: w(),
    heading: String(g),
    descriptionHtml: E,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${g}`
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
}, ci = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, f = e.speciality, g = e.consultant;
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
            Ge,
            {
              color: Ef(hi(u)),
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
            /* @__PURE__ */ r.jsx("dd", { children: f })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ r.jsx("dd", { children: g })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (y) => {
                y.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (y) => {
                y.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (y) => {
                y.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, di = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Ge,
        {
          color: Af(e.status || "active"),
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
] }), ui = ({
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
] }), fi = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
              onClick: (g) => {
                g.stopPropagation(), n?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (g) => {
                g.stopPropagation(), n?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function hi(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Ff(e) {
  return hi(e);
}
function Ef(e) {
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
function Af(e) {
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
const Pf = [
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
], pi = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Rf = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Bf = (e) => pi(e) === "high" || e.status === "urgent" ? "primary" : "default", Hf = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, zf = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Pf,
  hiddenFields: [],
  getPriority: pi,
  getStatus: Rf,
  getVariant: Bf,
  fieldRenderers: Hf,
  classPrefix: "adaptive-card--healthcare"
}, Of = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", s = n.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ r.jsx(
      ci,
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
      di,
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
      ui,
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
      fi,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, Wf = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, fo = {
  name: "healthcare",
  defaultCardConfig: zf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Of,
  fieldTypes: Wf
};
function ho(e) {
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
function po(e) {
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
  return Ae(() => {
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
  return s.cardTemplate && s.cardTemplate(e, t, s), uo(e, t, s);
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
  selectedIndex: f,
  onTabChange: g,
  ariaLabel: y = "Data grid",
  ariaDescription: D,
  orientation: w = "horizontal",
  id: h,
  disabled: p = !1,
  className: E,
  ...L
}) => {
  const T = Gf(e, t), A = f !== void 0, $ = f ?? 0, F = $e(() => {
    if (c.some(
      (K) => K.data && K.data.length > 0 && po(K.data)
    )) {
      const K = ho(n);
      return {
        ...fo.defaultCardConfig,
        ...K
      };
    } else
      return ho(n);
  }, [n, c]), _ = $e(() => c.some(
    (K) => K.data && K.data.length > 0 && po(K.data)
  ) ? fo : void 0, [c]), v = $e(() => ({
    selectedIndex: $,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [$, c.length]), [N, k] = $o(Uf, v), m = Fe([]), M = Fe([]), C = Fe([]), S = Fe(null), [x, I] = Me({
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
  }), ne = fe((Z) => {
    if (!Z.current)
      return { columns: 1, rows: 0 };
    const K = Z.current, re = K.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (re.length === 0)
      return { columns: 1, rows: 0 };
    const U = K.offsetWidth, V = re[0].offsetWidth, oe = Math.floor(U / V) || 1, q = Math.ceil(re.length / oe);
    return { columns: oe, rows: q };
  }, []), O = fe((Z, K) => ({
    row: Math.floor(Z / K),
    col: Z % K
  }), []), B = fe((Z, K, re) => Z * re + K, []), W = fe((Z, K, re, U) => {
    const { row: j, col: V } = O(Z, U);
    let oe = j, q = V;
    switch (K) {
      case "up":
        oe = Math.max(0, j - 1);
        break;
      case "down":
        oe = Math.min(Math.floor((re - 1) / U), j + 1);
        break;
      case "left":
        q = Math.max(0, V - 1);
        break;
      case "right":
        q = Math.min(U - 1, V + 1);
        break;
    }
    const Q = B(oe, q, U);
    return Math.min(Q, re - 1);
  }, [O, B]);
  Ae(() => {
    x.isCardNavigationActive && x.focusedCardElementIndex >= 0 && x.cardElements.length > 0 && setTimeout(() => {
      const Z = x.cardElements[x.focusedCardElementIndex];
      Z && (Z.element.focus(), Z.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [x.isCardNavigationActive, x.focusedCardElementIndex, x.cardElements.length]), Ae(() => {
    const Z = () => {
      if (T === "cards" && S.current) {
        const { columns: U, rows: j } = ne(S);
        I((V) => ({
          ...V,
          gridColumns: U,
          gridRows: j
        }));
      }
    }, K = setTimeout(Z, 200), re = () => {
      setTimeout(Z, 100);
    };
    return window.addEventListener("resize", re), () => {
      clearTimeout(K), window.removeEventListener("resize", re);
    };
  }, [T, c, ne]), Ae(() => {
    const Z = N.tabLoadingStates.length, K = c.length;
    Z !== K && k({ type: "ADJUST_ARRAYS", payload: { newLength: K } });
  }, [c.length, N.tabLoadingStates.length]), Ae(() => {
    A && f !== N.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: f });
  }, [A, f, N.selectedIndex]);
  const R = fe((Z) => {
    Z >= 0 && Z < c.length && !c[Z].disabled && (k({ type: "SET_SELECTED_INDEX", payload: Z }), g?.(Z));
  }, [c, g]), te = fe((Z) => {
    console.log("Card selected:", Z), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: Z
    });
  }, []), b = fe((Z) => {
    const K = M.current[Z];
    K && (K.focus(), K.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), H = fe((Z) => {
    const K = M.current[Z];
    if (!K) return [];
    const re = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), U = K.querySelectorAll(re);
    return Array.from(U).map((j, V) => ({
      id: j.id || `card-${Z}-element-${V}`,
      element: j,
      label: j.getAttribute("aria-label") || j.textContent?.trim() || j.getAttribute("title") || `Element ${V + 1}`,
      type: j.tagName.toLowerCase() === "button" ? "button" : j.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(j.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ee = Fe(null), J = fe((Z) => {
    const K = ee.current;
    if (!K) return;
    const re = document.createElement("div");
    re.setAttribute("aria-live", "polite"), re.setAttribute("aria-atomic", "true"), re.className = "sr-only", re.textContent = Z, K.appendChild(re), setTimeout(() => {
      K.contains(re) && K.removeChild(re);
    }, 1e3);
  }, []), Y = fe((Z) => {
    const K = Z.filter((U) => U.sortable !== !1), re = [
      { value: "", label: "Sort by..." }
    ];
    return K.forEach((U) => {
      const j = U.label || U.key;
      U.key === "name" ? re.push(
        { value: `${U.key}-asc`, label: `${j} (A-Z)` },
        { value: `${U.key}-desc`, label: `${j} (Z-A)` }
      ) : U.key === "ews_score" || U.key.includes("score") ? re.push(
        { value: `${U.key}-desc`, label: `${j} (High-Low)` },
        { value: `${U.key}-asc`, label: `${j} (Low-High)` }
      ) : U.key === "age" || U.key.includes("date") || U.key.includes("time") ? re.push(
        { value: `${U.key}-desc`, label: `${j} (Oldest-Youngest)` },
        { value: `${U.key}-asc`, label: `${j} (Youngest-Oldest)` }
      ) : re.push(
        { value: `${U.key}-asc`, label: `${j} (A-Z)` },
        { value: `${U.key}-desc`, label: `${j} (Z-A)` }
      );
    }), re;
  }, []), P = fe((Z, K) => K ? [...Z].sort((re, U) => {
    const j = re[K.key], V = U[K.key];
    if (j == null && V == null) return 0;
    if (j == null) return 1;
    if (V == null) return -1;
    const oe = Number(j), q = Number(V);
    if (!isNaN(oe) && !isNaN(q))
      return K.direction === "asc" ? oe - q : q - oe;
    const Q = String(j).toLowerCase(), ie = String(V).toLowerCase(), _e = Q.localeCompare(ie);
    return K.direction === "asc" ? _e : -_e;
  }) : Z, []), G = fe((Z) => {
    if (!Z) {
      I((Q) => ({ ...Q, cardSortConfig: null })), J("Card sorting cleared");
      return;
    }
    const [K, re] = Z.split("-"), U = { key: K, direction: re };
    I((Q) => ({ ...Q, cardSortConfig: U }));
    const oe = c[N.selectedIndex]?.columns.find((Q) => Q.key === K)?.label || K;
    J(`Cards sorted by ${oe} in ${re === "asc" ? "ascending" : "descending"} order`);
  }, [c, N.selectedIndex, J]), ae = fe((Z) => {
    const U = c[N.selectedIndex]?.columns.find((V) => V.key === Z.key)?.label || Z.key, j = Z.direction === "asc" ? "ascending" : "descending";
    return `${U} (${j})`;
  }, [c, N.selectedIndex]), z = fe((Z) => {
    const K = c[N.selectedIndex];
    if (s) {
      const re = N.sortConfig;
      return !re || re.length === 0 ? Z : [...Z].sort((U, j) => {
        for (const { key: V, direction: oe } of re) {
          let q = U[V], Q = j[V];
          const ie = K?.columns.find((we) => we.key === V);
          if (ie?.cardRenderer ? (q = ie.cardRenderer(U), Q = ie.cardRenderer(j)) : ie?.render && (q = ie.render(U), Q = ie.render(j)), q == null && Q == null) continue;
          if (q == null) return oe === "asc" ? -1 : 1;
          if (Q == null) return oe === "asc" ? 1 : -1;
          const _e = Number(q), ke = Number(Q);
          if (!isNaN(_e) && !isNaN(ke)) {
            const we = _e - ke;
            if (we !== 0) return oe === "asc" ? we : -we;
            continue;
          }
          const ye = String(q).toLowerCase(), Ce = String(Q).toLowerCase(), pe = ye.localeCompare(Ce);
          if (pe !== 0) return oe === "asc" ? pe : -pe;
        }
        return 0;
      });
    } else
      return P(Z, x.cardSortConfig);
  }, [s, N.sortConfig, x.cardSortConfig, P, c, N.selectedIndex]), ce = fe((Z, K) => {
    const re = H(Z), U = re[K];
    if (U) {
      U.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const j = `Focused on ${U.label}, ${U.type} ${K + 1} of ${re.length} within card`;
      J(j);
    }
  }, [H, J]), se = fe((Z) => {
    m.current[Z]?.focus();
  }, []), le = fe(() => {
    const Z = C.current[0];
    if (!Z) return [];
    const K = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), re = Z.querySelectorAll(K);
    return Array.from(re);
  }, []), de = fe((Z) => {
    if (Z === 0) {
      const K = C.current[0], re = K?.querySelector(".sort-controls-row");
      if (re) {
        re.setAttribute("tabindex", "-1"), re.focus();
        const j = `Sort controls group with ${le().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        J(j);
      } else K && K.focus();
    } else {
      const K = le(), re = Z - 1, U = K[re];
      if (U) {
        U.focus();
        const j = U.tagName.toLowerCase() === "select", V = U.tagName.toLowerCase() === "button", oe = j ? "dropdown" : V ? "button" : "control", q = j ? ". Use Space key to open dropdown" : "", Q = `${oe} ${re + 1} of ${K.length}${q}`;
        J(Q);
      }
    }
  }, [le, J]), be = fe((Z, K) => {
    const { key: re } = Z, U = c[N.selectedIndex], j = U?.data.length || 0;
    if (re === "ArrowLeft" && Z.shiftKey) {
      Z.preventDefault(), Z.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (re === "ArrowRight" && Z.shiftKey) {
      Z.preventDefault(), Z.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!x.isCardNavigationActive) {
      switch (re) {
        case "ArrowUp":
          if (Z.preventDefault(), K === 0)
            I((Q) => ({ ...Q, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), de(0);
          else {
            const Q = W(K, "up", j, x.gridColumns);
            Q !== K && (I((ie) => ({ ...ie, focusedCardIndex: Q })), b(Q), J(`Moved to card ${Q + 1} of ${j}`));
          }
          break;
        case "ArrowDown":
          Z.preventDefault();
          const V = W(K, "down", j, x.gridColumns);
          V !== K && (I((Q) => ({ ...Q, focusedCardIndex: V })), b(V), J(`Moved to card ${V + 1} of ${j}`));
          break;
        case "ArrowLeft":
          Z.preventDefault();
          const oe = W(K, "left", j, x.gridColumns);
          oe !== K ? (I((Q) => ({ ...Q, focusedCardIndex: oe })), b(oe), J(`Moved to card ${oe + 1} of ${j}`)) : N.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: N.selectedIndex - 1 }), I((Q) => ({ ...Q, focusArea: "tabs" })), setTimeout(() => se(N.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          Z.preventDefault();
          const q = W(K, "right", j, x.gridColumns);
          q !== K ? (I((Q) => ({ ...Q, focusedCardIndex: q })), b(q), J(`Moved to card ${q + 1} of ${j}`)) : N.selectedIndex < c.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: N.selectedIndex + 1 }), I((Q) => ({ ...Q, focusArea: "tabs" })), setTimeout(() => se(N.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (U?.data[K]) {
            Z.preventDefault(), I((ie) => ({
              ...ie,
              selectedCardIndex: K
            }));
            const Q = H(K);
            Q.length > 0 ? (I((ie) => ({
              ...ie,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Q,
              selectedCardIndex: K
              // Ensure selection is maintained
            })), J(`Card ${K + 1} selected and navigation activated. ${Q.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : J(`Card ${K + 1} selected.`);
          }
          break;
        case " ":
          if (U?.data[K]) {
            Z.preventDefault(), I((ie) => ({
              ...ie,
              selectedCardIndex: ie.selectedCardIndex === K ? -1 : K
            }));
            const Q = x.selectedCardIndex === K;
            J(`Card ${K + 1} ${Q ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (re) {
      case "ArrowUp":
      case "ArrowLeft":
        Z.preventDefault();
        const V = Math.max(0, x.focusedCardElementIndex - 1);
        I((ie) => ({ ...ie, focusedCardElementIndex: V })), ce(K, V);
        break;
      case "ArrowDown":
      case "ArrowRight":
        Z.preventDefault();
        const oe = Math.min(x.cardElements.length - 1, x.focusedCardElementIndex + 1);
        I((ie) => ({ ...ie, focusedCardElementIndex: oe })), ce(K, oe);
        break;
      case "Enter":
        Z.preventDefault();
        const q = x.cardElements[x.focusedCardElementIndex];
        q && (q.element.click(), J(`Activated ${q.label}`));
        break;
      case " ":
        Z.preventDefault();
        const Q = x.cardElements[x.focusedCardElementIndex];
        if (Q) {
          const ie = new MouseEvent("dblclick", { bubbles: !0 });
          Q.element.dispatchEvent(ie), J(`Double-clicked ${Q.label}`);
        }
        break;
      case "Escape":
        Z.preventDefault(), I((ie) => ({
          ...ie,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => b(K), 0), J("Exited card navigation, returned to card level");
        break;
      case "Home":
        Z.preventDefault(), x.cardElements.length > 0 && (I((ie) => ({ ...ie, focusedCardElementIndex: 0 })), ce(K, 0));
        break;
      case "End":
        if (Z.preventDefault(), x.cardElements.length > 0) {
          const ie = x.cardElements.length - 1;
          I((_e) => ({ ..._e, focusedCardElementIndex: ie })), ce(K, ie);
        }
        break;
    }
  }, [x, N.selectedIndex, c, te, b, se, I, H, ce, J]), Te = fe((Z) => {
    const K = m.current[Z], re = K?.parentElement;
    if (!K || !re) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const U = K.getBoundingClientRect(), j = re.getBoundingClientRect();
    U.left >= j.left && U.right <= j.right || (console.log("Tab not visible, scrolling into view (mobile)"), K.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Se = fe((Z, K) => {
    if (T !== "cards")
      return;
    const { key: re } = Z;
    switch (re) {
      case "ArrowLeft":
        Z.preventDefault();
        const U = K > 0 ? K - 1 : c.length - 1;
        R(U), I((q) => ({ ...q, focusedTabIndex: U })), m.current[U]?.focus(), Te(U);
        break;
      case "ArrowRight":
        Z.preventDefault();
        const j = K < c.length - 1 ? K + 1 : 0;
        R(j), I((q) => ({ ...q, focusedTabIndex: j })), m.current[j]?.focus(), Te(j);
        break;
      case "ArrowDown":
        Z.preventDefault();
        const V = c[N.selectedIndex];
        V && V.columns && V.columns.length > 0 ? (I((q) => ({
          ...q,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), de(0)) : (I((q) => ({
          ...q,
          focusArea: "cards",
          focusedCardIndex: 0
        })), b(0));
        break;
      case "Home":
        Z.preventDefault(), R(0), I((q) => ({ ...q, focusedTabIndex: 0 })), m.current[0]?.focus(), Te(0);
        break;
      case "End":
        Z.preventDefault();
        const oe = c.length - 1;
        R(oe), I((q) => ({ ...q, focusedTabIndex: oe })), m.current[oe]?.focus(), Te(oe);
        break;
      case "Enter":
      case " ":
        Z.preventDefault(), R(K);
        break;
    }
  }, [c.length, R, T, b, I, Te]), he = fe((Z, K) => {
    if (T !== "cards")
      return;
    const { key: re } = Z, U = c[N.selectedIndex];
    if (K === 0 && !x.isSortControlsActive) {
      switch (re) {
        case "ArrowUp":
          Z.preventDefault(), I((V) => ({
            ...V,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), se(N.selectedIndex);
          break;
        case "ArrowDown":
          Z.preventDefault(), U?.data && U.data.length > 0 && (I((V) => ({
            ...V,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), b(0));
          break;
        case "Enter":
        case " ":
          Z.preventDefault();
          const j = le();
          if (j.length > 0) {
            I((oe) => ({
              ...oe,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), de(1);
            const V = `Entered sort controls navigation mode. ${j.length} controls available. Use arrow keys to navigate between controls.`;
            J(V);
          }
          break;
        case "Escape":
          Z.preventDefault(), I((V) => ({
            ...V,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), se(N.selectedIndex);
          break;
      }
      return;
    }
    if (x.isSortControlsActive) {
      const V = le().length;
      switch (re) {
        case "ArrowLeft":
          Z.preventDefault();
          const oe = x.focusedSortControlIndex > 1 ? x.focusedSortControlIndex - 1 : V;
          I((Q) => ({ ...Q, focusedSortControlIndex: oe })), de(oe);
          break;
        case "ArrowRight":
          Z.preventDefault();
          const q = x.focusedSortControlIndex < V ? x.focusedSortControlIndex + 1 : 1;
          I((Q) => ({ ...Q, focusedSortControlIndex: q })), de(q);
          break;
        case "ArrowDown":
          if (Z.preventDefault(), x.isSortControlsActive) {
            const Q = x.focusedSortControlIndex < V ? x.focusedSortControlIndex + 1 : 1;
            I((ie) => ({ ...ie, focusedSortControlIndex: Q })), de(Q);
          } else
            U?.data && U.data.length > 0 && (I((Q) => ({
              ...Q,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), b(0));
          break;
        case "ArrowUp":
          Z.preventDefault(), I((Q) => ({
            ...Q,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), de(0);
          break;
        case "Escape":
          Z.preventDefault(), I((Q) => ({
            ...Q,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), de(0);
          break;
      }
    }
  }, [T, c, N.selectedIndex, x.isSortControlsActive, x.focusedSortControlIndex, de, se, b, I, J]);
  if (T === "cards") {
    const Z = c[N.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${E || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": y,
            "aria-describedby": `${D || ""} ${h ? `${h}-navigation-help` : ""}`.trim(),
            "aria-orientation": w,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((K, re) => {
              const U = re === N.selectedIndex, j = K.disabled || p;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${K.id}`,
                  "aria-controls": `panel-${K.id}`,
                  "aria-selected": U,
                  "aria-disabled": j,
                  tabIndex: U ? 0 : -1,
                  ref: (V) => {
                    m.current[re] = V;
                  },
                  onClick: () => R(re),
                  onKeyDown: (V) => Se(V, re),
                  disabled: j,
                  className: [
                    "aria-tabs-datagrid__tab",
                    U ? "aria-tabs-datagrid__tab--selected" : "",
                    j ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: K.label }),
                    N.tabLoadingStates[re] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    N.tabErrors[re] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                K.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      Z && Z.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          li,
          {
            sortConfig: N.sortConfig || [],
            columns: Z.columns.map((K) => ({ key: K.key, label: K.label })),
            onSortChange: (K) => {
              k({ type: "SET_SORT", payload: K });
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
            tabIndex: x.focusArea === "sort-controls" ? 0 : -1,
            ref: (K) => {
              C.current[0] = K;
            },
            onKeyDown: (K) => he(K, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${Z.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  Vn,
                  {
                    id: `card-sort-${Z.id}`,
                    name: `card-sort-${Z.id}`,
                    value: x.cardSortConfig ? `${x.cardSortConfig.key}-${x.cardSortConfig.direction}` : "",
                    onChange: (K) => G(K.target.value),
                    className: "sort-select",
                    children: Y(Z.columns).map((K) => /* @__PURE__ */ r.jsx("option", { value: K.value, children: K.label }, K.value))
                  }
                )
              ] }),
              x.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ae(x.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  et,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => G(""),
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
          "aria-label": `${Z?.label || "Data"} cards in ${x.gridRows} rows and ${x.gridColumns} columns`,
          "aria-rowcount": x.gridRows,
          "aria-colcount": x.gridColumns,
          id: `panel-${Z?.id}`,
          "aria-labelledby": `tab-${Z?.id}`,
          children: z(Z?.data || []).map((K, re) => {
            const U = x.selectedCardIndex === re, j = x.focusedCardIndex === re && x.focusArea === "cards", V = x.focusedCardIndex === re && x.focusArea === "card" && x.isCardNavigationActive, oe = re === 0 && x.focusArea !== "cards", q = j || oe, Q = O(re, x.gridColumns);
            if (n.cardTemplate) {
              const ke = n.cardTemplate(K, Z.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": Q.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (ye) => {
                        M.current[re] = ye;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        U ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        j ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        V ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": Q.col + 1,
                      "aria-selected": U,
                      "aria-expanded": V,
                      "aria-description": V ? `Card navigation active. ${x.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: q ? 0 : -1,
                      onClick: () => {
                        I((ye) => ({
                          ...ye,
                          selectedCardIndex: ye.selectedCardIndex === re ? -1 : re
                        })), te(K);
                      },
                      onKeyDown: (ye) => be(ye, re),
                      onFocus: () => {
                        I((ye) => ye.isCardNavigationActive ? ye : ye.focusedCardIndex !== re || ye.focusArea !== "cards" ? {
                          ...ye,
                          focusedCardIndex: re,
                          focusArea: "cards"
                        } : ye);
                      },
                      children: ke
                    }
                  )
                },
                `card-${re}`
              );
            }
            const ie = Yf(K, Z.columns, F, _), _e = [
              ie.className || "",
              U ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              j ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              V ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": Q.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      U ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      j ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      V ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": Q.col + 1,
                    "aria-selected": U,
                    "aria-expanded": V,
                    onKeyDown: (ke) => {
                      ke.key === "Enter" && (ke.preventDefault(), I((ye) => ({
                        ...ye,
                        selectedCardIndex: re
                      }))), be(ke, re);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      si,
                      {
                        ...ie,
                        ref: (ke) => {
                          M.current[re] = ke;
                        },
                        className: _e,
                        "aria-label": `${ie["aria-label"] || ie.heading}. ${V ? `Card navigation active with ${x.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: q ? 0 : -1,
                        onClick: () => {
                          I((ke) => ({
                            ...ke,
                            selectedCardIndex: ke.selectedCardIndex === re ? -1 : re
                          })), te(K);
                        },
                        onKeyDown: (ke) => be(ke, re),
                        onFocus: () => {
                          x.isCardNavigationActive || I((ke) => ke.focusedCardIndex !== re || ke.focusArea !== "cards" ? {
                            ...ke,
                            focusedCardIndex: re,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ke);
                        }
                      }
                    )
                  }
                )
              },
              `card-${re}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: ee,
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
  return T === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${E || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      Ca,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: y,
        ariaDescription: D,
        orientation: w,
        id: h,
        disabled: p,
        selectedIndex: f,
        onTabChange: g,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...L
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${E || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      Ca,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: y,
        ariaDescription: D,
        orientation: w,
        id: h,
        disabled: p,
        selectedIndex: f,
        onTabChange: g,
        actions: l,
        forceActionsAbove: d,
        ...L
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, mi = (e) => {
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
  booleanRenderer: (e) => mi(e),
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
  booleanRenderer: (e) => mi(e),
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
}, mo = (e, t) => {
  const n = Jf[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, gi = [
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
], go = [
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
], xo = [
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
], bo = [
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
    data: gi,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ci,
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
      di,
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
      ui,
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
      fi,
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
      data: gi
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...mo("ecommerce", go),
      data: go
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...mo("financial", xo),
      data: xo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: nh,
      tabPanels: gs(bo, [
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
      data: bo
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
}, qx = ah, xi = (e) => /* @__PURE__ */ r.jsx(Lo, { ...e }), Xx = ({
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
  account: f,
  organisation: g,
  logo: y,
  className: D,
  ...w
}) => {
  const h = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: g,
    logo: y,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(ai, { ...o }),
    /* @__PURE__ */ r.jsx(Ro, { ...h }),
    /* @__PURE__ */ r.jsx(xi, { className: D, ...w, children: /* @__PURE__ */ r.jsx(Fo, { size: s, children: /* @__PURE__ */ r.jsx(Yt, { children: /* @__PURE__ */ r.jsxs(Cn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Mt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Bo, { ...l })
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
  logo: f,
  className: g,
  ...y
}) => {
  const D = {
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
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(ai, { ...o }),
    /* @__PURE__ */ r.jsx(Ro, { ...D }),
    /* @__PURE__ */ r.jsxs(xi, { className: g, ...y, children: [
      d && /* @__PURE__ */ r.jsx(ba, { ...d }),
      /* @__PURE__ */ r.jsx(Fo, { size: s, children: /* @__PURE__ */ r.jsx(Yt, { children: /* @__PURE__ */ r.jsxs(Cn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Mt, { size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Bo, { ...l })
  ] });
}, bi = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ge("nhsuk-back-link", a), d = ge("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
bi.displayName = "ForwardLink";
const rn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function yo() {
  return typeof window > "u" ? rn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function yi() {
  const [e, t] = X.useState(yo());
  X.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(yo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const n = X.useCallback((o) => e >= rn[o], [e]), a = X.useCallback((o) => e < rn[o], [e]), s = X.useCallback((o, i) => e >= rn[o] && e < rn[i], [e]);
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
  const { width: t, values: n } = yi();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = n[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function sh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = X.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = X.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return X.useEffect(() => {
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
    nextLabel: f = "Next",
    isLoading: g = !1,
    emptyState: y,
    a11y: D,
    className: w,
    getId: h = (ue) => ue.id,
    orientation: p = "vertical",
    autoEnableThirdColumn: E = !0,
    onDrillChange: L,
    navigationInstructions: T = "Use arrow keys to navigate, Enter to open.",
    initialFocus: A = "first",
    skipFocusOnSelect: $ = !1,
    skipAnnouncements: F = !1,
    onFocusChange: _,
    syncUrl: v = !1,
    urlParamSelected: N = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: m = 0,
    lazySecondary: M = !1,
    navFooter: C,
    collapsibleNav: S = !1,
    navInitiallyCollapsed: x = !1,
    onNavCollapseChange: I,
    collapseToggleLabelShow: ne = "Show navigation",
    collapseToggleLabelHide: O = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: W,
    persistNavCollapsed: R,
    navCollapsedStorageKey: te = "nsvCollapsed",
    navCollapsedUrlParam: b = "nsvCollapsed",
    autoContentHeader: H,
    contentHeaderLevel: ee = 2,
    renderContentHeader: J,
    contentSubheader: Y,
    secondarySubheader: P
  } = e, { up: G } = yi(), [ae, z] = X.useState(!1);
  X.useEffect(() => {
    z(!0);
  }, []);
  const ce = ae && G("medium"), se = ae && G("xlarge");
  let le;
  d ? le = d : ce ? le = "two-column" : le = "list", !d && E && l && se && (le = "three-column");
  const de = sh({
    enabled: v,
    paramSelected: N,
    paramDrill: k
  }), [be, Te] = X.useState(
    () => de.selectedId !== void 0 ? de.selectedId : a
  ), Se = n !== void 0 ? n : be, he = t.find((ue) => h(ue) === Se), [Z, K] = X.useState(
    void 0
  );
  X.useEffect(() => {
    if (Se === void 0) return;
    K(Se);
    const ue = setTimeout(() => K(void 0), 220);
    return () => clearTimeout(ue);
  }, [Se]);
  const re = X.useRef(null), U = X.useRef(null), j = X.useRef(null), V = X.useRef(null), [oe, q] = X.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [Q, ie] = X.useState(() => "nav"), [_e, ke] = X.useState(0), ye = () => [
    V.current,
    U.current,
    j.current
  ].filter(Boolean), Ce = (ue) => {
    const ve = ye(), me = Math.max(0, Math.min(ue, ve.length - 1));
    ve[me]?.focus(), ke(me);
  }, pe = X.useCallback(
    (ue) => ue ? Array.from(ue.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (me) => !me.hasAttribute("disabled") && me.tabIndex !== -1
    ) : [],
    []
  ), we = X.useCallback(
    (ue) => {
      const ve = pe(U.current);
      if (!ve.length) {
        U.current?.focus();
        return;
      }
      const me = Math.max(0, Math.min(ue, ve.length - 1)), Ne = ve[me];
      Ne.focus(), setTimeout(() => {
        document.activeElement !== Ne && (Ne.focus(), setTimeout(() => {
          document.activeElement !== Ne && Ne.click();
        }, 10));
      }, 10), q((Re) => ({ ...Re, contentIndex: me }));
      const Oe = (Re) => {
        Re.key === "Escape" && (Re.preventDefault(), Re.stopPropagation(), U.current?.focus(), Ne.removeEventListener("keydown", Oe));
      };
      ve.forEach((Re) => {
        const He = Re._escapeHandler;
        He && Re.removeEventListener("keydown", He);
      }), Ne._escapeHandler = Oe, Ne.addEventListener("keydown", Oe);
    },
    [pe]
  ), Le = X.useCallback(
    (ue) => {
      const ve = pe(j.current);
      if (!ve.length) {
        j.current?.focus();
        return;
      }
      const me = Math.max(0, Math.min(ue, ve.length - 1)), Ne = ve[me];
      Ne.focus(), setTimeout(() => {
        document.activeElement !== Ne && (Ne.focus(), setTimeout(() => {
          document.activeElement !== Ne && Ne.click();
        }, 10));
      }, 10), q((Re) => ({ ...Re, secondaryIndex: me }));
      const Oe = (Re) => {
        Re.key === "Escape" && (Re.preventDefault(), Re.stopPropagation(), j.current?.focus(), Ne.removeEventListener("keydown", Oe));
      };
      ve.forEach((Re) => {
        const He = Re._escapeHandler;
        He && Re.removeEventListener("keydown", He);
      }), Ne._escapeHandler = Oe, Ne.addEventListener("keydown", Oe);
    },
    [pe]
  ), Ve = (ue) => {
    if (ue.defaultPrevented) return;
    const ve = ue.key, me = ue.target, Ne = !!Qe.current && Qe.current.contains(me), Oe = !!U.current && U.current.contains(me), Re = !!j.current && j.current.contains(me), He = !!j.current, en = me === V.current || me === U.current || me === j.current, Ot = Pe && (le === "list" || le === "cards"), Rn = Oe && !!me.closest(".nhs-navigation-split-view__header");
    if (Q === "containers" && en) {
      if (ve === "ArrowRight") {
        ue.preventDefault();
        const De = ye(), ze = Math.min(De.length - 1, _e + 1);
        Ce(ze);
        return;
      }
      if (ve === "ArrowLeft") {
        ue.preventDefault();
        const De = Math.max(0, _e - 1);
        Ce(De);
        return;
      }
      if (ve === "Home") {
        ue.preventDefault(), Ce(0);
        return;
      }
      if (ve === "End") {
        ue.preventDefault(), Ce(ye().length - 1);
        return;
      }
      if (ve === "Enter" || ve === " ") {
        if (ue.preventDefault(), me === V.current) {
          if (ie("nav"), Qe.current) {
            const De = Array.from(
              Qe.current.querySelectorAll("[data-nav-item]")
            );
            (De[We >= 0 ? We : 0] || De[0])?.focus();
          }
        } else me === U.current ? (ie("content"), we(oe.contentIndex)) : me === j.current && (ie("secondary"), Le(oe.secondaryIndex));
        return;
      }
      return;
    }
    if (ve === "Escape") {
      if (Q === "content" || Q === "secondary") {
        if (Oe || Re) {
          if (ue.preventDefault(), ie("nav"), Qe.current) {
            const ze = Array.from(
              Qe.current.querySelectorAll("[data-nav-item]")
            )[We >= 0 ? We : 0];
            setTimeout(() => ze?.focus(), 10);
          }
        } else if ((me === U.current || me === j.current) && (ue.preventDefault(), ie("nav"), Qe.current)) {
          const ze = Array.from(
            Qe.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => ze?.focus(), 10);
        }
      }
      return;
    }
    if (ve === "Enter" || ve === " ") {
      if (me.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (me === U.current && Q === "content") {
        ue.preventDefault(), ue.stopPropagation(), pe(U.current).length > 0 && setTimeout(() => {
          we(oe.contentIndex);
        }, 50);
        return;
      }
      if (me === j.current && Q === "secondary") {
        ue.preventDefault(), ue.stopPropagation(), pe(
          j.current
        ).length > 0 && setTimeout(() => {
          Le(oe.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Ot && Rn && !en && (ve === "ArrowRight" || ve === "ArrowLeft")) {
      const De = pe(U.current).filter(
        (ze) => ze.closest(".nhs-navigation-split-view__header")
      );
      if (De.length > 1) {
        const ze = De.indexOf(me);
        if (ze >= 0) {
          const Ns = (ze + (ve === "ArrowRight" ? 1 : -1) + De.length) % De.length;
          ue.preventDefault(), De[Ns].focus();
          return;
        }
      }
    }
    if (ve === "ArrowRight") {
      if (Ne || Q === "nav") {
        ue.preventDefault(), ie("content"), setTimeout(() => U.current?.focus(), 10);
        return;
      }
      if (Oe || Q === "content") {
        He && (ue.preventDefault(), ie("secondary"), setTimeout(() => j.current?.focus(), 10));
        return;
      }
    }
    if (ve === "ArrowLeft") {
      if (Re || Q === "secondary") {
        ue.preventDefault(), ie("content"), setTimeout(() => U.current?.focus(), 10);
        return;
      }
      if (Oe || Q === "content") {
        if (ue.preventDefault(), ie("nav"), Qe.current) {
          const ze = Array.from(
            Qe.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => ze?.focus(), 10);
        }
        return;
      }
    }
    if (ve === "Home" && !Ne && (ue.preventDefault(), ie("nav"), Qe.current)) {
      const De = Array.from(
        Qe.current.querySelectorAll("[data-nav-item]")
      ), ze = De[We >= 0 ? We : 0] || De[0];
      setTimeout(() => ze?.focus(), 10);
    }
    if (ve === "End") {
      const De = He ? j.current : U.current;
      De && !De.contains(me) && (ue.preventDefault(), He ? (ie("secondary"), setTimeout(() => j.current?.focus(), 10)) : (ie("content"), setTimeout(() => U.current?.focus(), 10)));
    }
    if (ve === "ArrowDown" || ve === "ArrowUp") {
      if (me === U.current && ve === "ArrowDown") {
        ue.preventDefault(), pe(U.current).length > 0 && we(0);
        return;
      }
      if (me === j.current && ve === "ArrowDown") {
        ue.preventDefault(), pe(
          j.current
        ).length > 0 && Le(0);
        return;
      }
      if (Oe) {
        const De = pe(U.current);
        if (De.length) {
          ue.preventDefault();
          const ze = ve === "ArrowDown" ? 1 : -1, ht = (oe.contentIndex + ze + De.length) % De.length;
          we(ht);
        }
      } else if (Re) {
        const De = pe(j.current);
        if (De.length) {
          ue.preventDefault();
          const ze = ve === "ArrowDown" ? 1 : -1, ht = (oe.secondaryIndex + ze + De.length) % De.length;
          Le(ht);
        }
      }
    }
  }, Pe = !!he && (le === "list" || le === "cards"), tt = X.useMemo(() => H === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : H === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : H === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: H.mobile !== void 0 ? H.mobile : !0,
    tablet: H.tablet || !1,
    desktop: H.desktop || !1
  }, [H]), Ft = ae && G("medium") && !G("xlarge"), xt = ae && G("xlarge"), ut = !!l, qe = le === "three-column", [Ke, gn] = X.useState(!1);
  X.useEffect(() => {
    qe && Ke && gn(!1);
  }, [qe, Ke]), X.useEffect(() => {
    Ke && !qe && (ie("secondary"), ke(2), setTimeout(() => {
      j.current?.focus();
    }, 50));
  }, [Ke, qe]), X.useEffect(() => {
    !Ke && !qe && Q === "secondary" && (ie("content"), ke(1), setTimeout(() => {
      U.current?.focus();
    }, 50));
  }, [Ke, qe, Q]);
  const Ur = !!he && (Pe && tt.mobile || !Pe && Ft && tt.tablet || !Pe && xt && tt.desktop) || ut && !qe, zl = `h${ee}`, Gr = he ? X.createElement(
    zl,
    {
      style: {
        marginLeft: Pe ? 32 : 0,
        marginRight: Pe ? 32 : 0
      }
    },
    he.label
  ) : null, Cs = Pe ? "mobile" : Ft ? "tablet" : "desktop", Ol = ut && !qe && !Ke, Vr = Pe && tt.mobile ? /* @__PURE__ */ r.jsx(
    ba,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => Qt(void 0, void 0)
    }
  ) : void 0, Yr = Ol ? /* @__PURE__ */ r.jsx(
    bi,
    {
      element: "button",
      text: f,
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
  ) : void 0, Wl = X.useMemo(() => {
    if (!Ur || !he) return null;
    if (J)
      return J({
        item: he,
        detailActive: Pe,
        context: Cs,
        backLink: Vr,
        defaultHeading: Gr
      });
    const ue = he && Y ? typeof Y == "function" ? Y(he) : Y : null;
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
    he,
    J,
    Pe,
    Cs,
    Vr,
    qr,
    Gr,
    Yr,
    Y
  ]);
  X.useEffect(() => {
    if (!v) return;
    const ue = le === "three-column";
    let ve = !1;
    const me = () => {
      ve || (de.selectedId !== Se && de.setSelectedId(Se), de.drilledIn !== ue && de.setDrilledIn(ue));
    };
    if (m && m > 0) {
      const Ne = setTimeout(me, m);
      return () => {
        ve = !0, clearTimeout(Ne);
      };
    } else
      me();
  }, [v, de, Se, le, m]), X.useEffect(() => {
    if (!v) return;
    const ue = () => {
      const ve = new URLSearchParams(window.location.search), me = ve.get(N);
      ve.get(k), Te(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", ue), () => window.removeEventListener("popstate", ue);
  }, [
    v,
    N,
    k,
    d,
    l
  ]);
  const Pn = X.useRef(0), bt = X.useRef(
    null
  ), Qt = X.useCallback(
    (ue, ve) => {
      ue !== Se && (n === void 0 && Te(ue), s?.(ue, ve));
    },
    [n, s, Se]
  );
  X.useEffect(() => {
    if (!$ && Pe && U.current) {
      const ue = setTimeout(() => U.current?.focus(), 30);
      return () => clearTimeout(ue);
    }
  }, [Pe, Se, $]);
  const Qe = X.useRef(null), [We, xn] = X.useState(
    () => A === "first" ? 0 : -1
  );
  X.useEffect(() => {
    if (We < 0 || !Qe.current) return;
    const ve = Array.from(
      Qe.current.querySelectorAll("[data-nav-item]")
    )[We];
    if (ve) {
      document.activeElement !== ve && ve.focus(), Pn.current = We;
      const me = t[We];
      _?.(
        me ? h(me) : void 0,
        me,
        We
      );
    }
  }, [We, t, _, h]);
  const Ul = (ue) => {
    const ve = p === "vertical" ? "ArrowDown" : "ArrowRight", me = p === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ue.key === "ArrowRight" && p === "vertical") {
      ue.preventDefault(), Ke ? (ie("secondary"), setTimeout(() => {
        j.current?.focus();
      }, 10)) : (ie("content"), setTimeout(() => {
        U.current?.focus();
      }, 10));
      return;
    }
    if (ue.key === ve)
      ue.preventDefault(), xn((Ne) => Math.min(t.length - 1, Ne + 1));
    else if (ue.key === me)
      ue.preventDefault(), xn((Ne) => Math.max(0, Ne - 1));
    else if (ue.key === "Home")
      ue.preventDefault(), xn(0);
    else if (ue.key === "End")
      ue.preventDefault(), xn(t.length - 1);
    else if (ue.key === "Enter" || ue.key === " ") {
      ue.preventDefault();
      const Ne = t[We];
      Ne && !Ne.disabled && Qt(h(Ne), Ne);
    } else if (ue.key.length === 1 && /[a-z0-9]/i.test(ue.key)) {
      bt.current || (bt.current = { buffer: "", last: 0 });
      const Ne = Date.now(), Oe = 700, Re = ue.key.toLowerCase();
      Ne - bt.current.last > Oe ? bt.current.buffer = Re : bt.current.buffer += Re, bt.current.last = Ne;
      let He = bt.current.buffer;
      const en = He.split("").every((ht) => ht === He[0]), Ot = t.map(
        (ht) => String(ht.label || "").toLowerCase()
      );
      let Rn = 0;
      We >= 0 && (Rn = (We + 1) % t.length);
      let De;
      const ze = (ht, Ns) => {
        const Ts = t.length;
        for (let Zr = 0; Zr < Ts; Zr++) {
          const Jr = (Rn + Zr) % Ts;
          if (!t[Jr].disabled && Ot[Jr].startsWith(ht))
            return Jr;
        }
      };
      en && He.length > 1 ? De = ze(He[0]) : (De = ze(He), De === void 0 && He.length > 1 && (De = ze(He[He.length - 1]), De !== void 0 && bt.current && (bt.current.buffer = He[He.length - 1]))), De !== void 0 && xn(De);
    }
  }, Gl = X.useMemo(() => {
    if (R && (R === "url" || R === "both") && typeof window < "u") {
      const ve = new URLSearchParams(window.location.search).get(b);
      if (ve === "1") return !0;
      if (ve === "0") return !1;
    }
    if (R && (R === "localStorage" || R === "both") && typeof window < "u")
      try {
        const ue = window.localStorage.getItem(te);
        if (ue === "1") return !0;
        if (ue === "0") return !1;
      } catch {
      }
    return x;
  }, [
    R,
    x,
    te,
    b
  ]), [ft, Vl] = X.useState(Gl);
  X.useEffect(() => {
    I?.(ft);
  }, [ft, I]);
  const Yl = X.useCallback(() => {
    ce && S && Vl((ue) => !ue);
  }, [ce, S]);
  X.useEffect(() => {
    if (R && !(typeof window > "u")) {
      if (R === "localStorage" || R === "both")
        try {
          window.localStorage.setItem(
            te,
            ft ? "1" : "0"
          );
        } catch {
        }
      if (R === "url" || R === "both") {
        const ue = new URLSearchParams(window.location.search);
        ue.set(b, ft ? "1" : "0");
        const ve = `${window.location.pathname}?${ue.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ve);
      }
    }
  }, [
    ft,
    R,
    te,
    b
  ]);
  const ql = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Pe ? "nhs-navigation-split-view--detail-active" : "",
    le === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    S && ce && ft ? "nhs-navigation-split-view--nav-collapsed" : "",
    w
  ].filter(Boolean).join(" "), Xr = X.useRef(null);
  X.useEffect(() => {
    if (!F && Xr.current) {
      const ue = he ? `Selected ${he.label}` : "Selection cleared";
      Xr.current.textContent = ue;
    }
  }, [he, F]), X.useEffect(() => {
    !Pe && Se == null && Qe.current && Qe.current.querySelectorAll("[data-nav-item]")[Pn.current]?.focus();
  }, [Pe, Se]);
  const Et = le === "three-column", [Kr, Xl] = X.useState(!1);
  X.useEffect(() => {
    Et && !Kr && Xl(!0);
  }, [Et, Kr]);
  const js = X.useRef(Et);
  X.useEffect(() => {
    js.current !== Et && (L?.(Et), js.current = Et);
  }, [Et, L]);
  const Kl = () => {
    if (le === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((me) => {
              const Ne = h(me), Oe = Ne === Se;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Oe,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Ne),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Oe || void 0,
                      "data-disabled": me.disabled || void 0,
                      disabled: me.disabled,
                      onClick: () => !me.disabled && Qt(Ne, me),
                      children: [
                        me.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: me.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: me.label }),
                        me.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: me.description }),
                        o?.(me),
                        me.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: me.badge })
                      ]
                    }
                  )
                },
                Ne
              );
            }),
            t.length === 0 && !g && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: y || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const ue = "nsv-nav-instructions", ve = X.useMemo(() => X.memo(
      ({
        item: me,
        idx: Ne,
        selected: Oe,
        focused: Re
      }) => {
        const He = h(me), en = me.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Re ? 0 : -1,
          onClick: () => {
            Pn.current = Ne, Qt(He, me);
          },
          onKeyDown: (Ot) => {
            (Ot.key === "Enter" || Ot.key === " ") && (Ot.preventDefault(), Pn.current = Ne, Qt(He, me));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(He),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Oe,
            "aria-current": Oe ? "true" : void 0,
            "data-selected": Oe || void 0,
            "data-disabled": me.disabled || void 0,
            ...en,
            children: [
              me.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: me.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: me.label }),
                me.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: me.description }),
                o?.(me)
              ] }),
              me.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: me.badge })
            ]
          }
        );
      }
    ), [h, Qt, o]);
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
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((me, Ne) => /* @__PURE__ */ r.jsx(
              ve,
              {
                item: me,
                idx: Ne,
                selected: h(me) === Se,
                focused: Ne === We || We === -1 && Ne === 0 && A === "first",
                "data-just-selected": h(me) === Z ? "true" : void 0
              },
              h(me)
            )),
            t.length === 0 && !g && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: y || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
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
          children: T
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: re,
      className: ql,
      "aria-label": D?.rootLabel,
      "data-layout": le,
      onKeyDown: Ve,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Pe || void 0,
            style: { transform: Pe ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: V,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": D?.navigationLabel || "Items",
                  "data-collapsed": ft || void 0,
                  tabIndex: 0,
                  children: [
                    S && ce && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Yl,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": ft ? ne : O,
                        title: ft ? ne : O,
                        children: ft ? B || /* @__PURE__ */ r.jsx(ih, {}) : W || /* @__PURE__ */ r.jsx(oh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Kl() }),
                    C && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: C
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: U,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": D?.contentLabel || "Content",
                  "data-has-selection": !!he || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ke && !qe ? "none" : void 0
                  },
                  children: [
                    Ur && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: Wl }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(he)
                      }
                    )
                  ]
                }
              ),
              le === "three-column" && (!M || Kr) || Ke && !qe ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: j,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": D?.secondaryContentLabel || "Secondary",
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
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: he && typeof he == "object" && "label" in he ? he.label : String(he) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        he && P && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof P == "function" ? P(he) : P
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(he) })
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
            children: Et ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
lh.displayName = "NavigationSplitView";
const vo = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), ch = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), g = n && e.childItems && e.childItems.length > 0, y = (w) => {
    g && (w.preventDefault(), a?.(e));
  }, D = g ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: y,
    onKeyDown: (w) => {
      (w.key === "Enter" || w.key === " ") && y(w), w.key === "Escape" && s && y(w);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ge("nhsuk-product-roadmap__item", g && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...D,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          g && /* @__PURE__ */ r.jsx("span", { className: ge("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
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
  const [u, f] = Me(() => /* @__PURE__ */ new Set()), [g, y] = Me(() => /* @__PURE__ */ new Set()), D = Fe(/* @__PURE__ */ new Set()), w = fe((m) => u.has(m), [u]), h = fe((m) => {
    f((M) => {
      const C = new Set(M);
      return C.has(m.id) ? (C.delete(m.id), y((S) => {
        const x = new Set(S);
        return x.add(m.id), x;
      }), setTimeout(() => y((S) => {
        const x = new Set(S);
        return x.delete(m.id), x;
      }), 240), l?.(m.id, !1)) : (C.add(m.id), l?.(m.id, !0)), C;
    });
  }, [l]);
  ec(() => {
    if (d !== "inline" || !i) return;
    const m = [];
    if (u.forEach((x) => {
      D.current.has(x) || m.push(x);
    }), D.current = new Set(u), !m.length) return;
    const M = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, C = m.map((x) => `.nhsuk-product-roadmap__inline-children[data-parent="${x}"] .nhsuk-product-roadmap__inline-child`).join(","), S = Array.from(document.querySelectorAll(C));
    if (S.length) {
      if (M) {
        S.forEach((x) => {
          x.style.opacity = "1", x.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((x) => {
        (x.gsap || x.default || x).to(S, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        S.forEach((x) => {
          x.style.opacity = "1", x.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, d, i]);
  const p = fe(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), E = ge("nhsuk-product-roadmap", s), L = vo(n, 120, 1200, 400), T = vo(a, 1, 6, 2), A = $e(() => e.map((m) => /* @__PURE__ */ new Date(m + " 01")), [e]), $ = $e(() => {
    if (A.length === 0) {
      const C = /* @__PURE__ */ new Date();
      return [C, C];
    }
    const m = new Date(A[0]), M = Dn.offset(new Date(A[A.length - 1]), 1);
    return [m, M];
  }, [A]), F = $e(() => ms().domain($).range([0, A.length * L]), [$, A.length, L]), _ = fe((m) => {
    if (m.startDate) {
      const O = new Date(m.startDate), B = new Date(m.endDate ?? m.startDate);
      B < O && B.setTime(O.getTime());
      const W = F(O), R = Dn.offset(new Date(B), 1);
      let te = F(R);
      Number.isFinite(te) || (te = W + L);
      const b = Math.max(L * 0.25, te - W), H = W / L, ee = b / L;
      return { ...m, _pxLeft: W, _pxWidth: b, _startFraction: H, _spanColumns: ee };
    }
    const M = m.date ?? 1, C = m.dateOffset ?? 0, S = m.length ?? 1, x = m.partialLength ?? 1, I = M - 1 + C, ne = S - 1 + x;
    return { ...m, _pxLeft: I * L, _pxWidth: ne * L, _startFraction: I, _spanColumns: ne };
  }, [F, L]), v = $e(() => t.map((m) => {
    const C = m.roadmapItems.map((x) => {
      const I = !x.childItems && x.children ? { ...x, childItems: x.children } : { ...x };
      return _(I);
    }).sort((x, I) => x._pxLeft !== I._pxLeft ? x._pxLeft - I._pxLeft : I._pxWidth - x._pxWidth), S = [];
    return C.forEach((x) => {
      const I = x._pxLeft, ne = x._pxLeft + x._pxWidth;
      let O = S.findIndex((B) => B <= I);
      O === -1 && (O = S.length, S.push(0)), S[O] = ne, x.verticalPosition = O + 1;
    }), { ...m, roadmapItems: C, _laneCount: S.length };
  }), [t, _]), N = $e(() => v.map((m) => m._laneCount || 1), [v]), k = $e(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: E,
      style: { "--column-width": `${L}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": v.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((m, M) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": M + 2, children: m }, `${m}-${M}`))
        ] }),
        v.map((m, M) => {
          const C = M + 2, S = N[M];
          let x, I = 0, ne = [];
          i && d === "inline" && (ne = m.roadmapItems.filter((R) => w(R.id) && R.childItems && R.childItems.length).map((R) => ({ id: R.id, lane: R.verticalPosition || 1, count: R.childItems.length })).sort((R, te) => R.lane - te.lane), I = ne.reduce((R, te) => R + te.count, 0));
          const O = S + I;
          x = `calc((${O} * var(--roadmap-item-block-height)) + (max(0, ${O} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let W = 0;
          return ne.forEach((R) => {
            W += R.count, B[R.lane + 1] = W;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": C, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: m.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: x }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: m.roadmapItems.map((R, te) => {
              const b = (R.verticalPosition || 1) - 1, H = ne.filter((P) => P.lane - 1 < b).reduce((P, G) => P + G.count, 0), ee = b + H, J = w(R.id), Y = g.has(R.id);
              return /* @__PURE__ */ r.jsxs(st.Fragment, { children: [
                /* @__PURE__ */ r.jsx(ch, { item: R, maxLines: T, enableDrilldown: i, onExpand: h, isActive: J, topLaneIndex: ee, laneOffset: H }),
                i && d === "inline" && (J || Y) && R.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": R.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${R.title} child tasks`, children: R.childItems.map((P, G) => {
                  const ae = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let z = R._pxLeft, ce = R._pxWidth;
                  if (P.startDate) {
                    const de = new Date(P.startDate);
                    let be = P.endDate ? new Date(P.endDate) : new Date(de);
                    be < de && (be = new Date(de));
                    const Te = new Date(be);
                    Te.setDate(Te.getDate() + 1);
                    const Se = F(de);
                    let he = F(Te);
                    (!Number.isFinite(he) || he <= Se) && (he = Se + 6), z = Se, ce = Math.max(6, he - Se);
                  }
                  const le = ee + 1 + G;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ge("nhsuk-product-roadmap__inline-child", P.status && `nhsuk-product-roadmap__inline-child--status-${P.status}`, !J && Y && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${z}px`, width: `${ce}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${le})`, height: ae, opacity: J ? 0 : void 0, transform: J ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: P.title })
                      ]
                    },
                    P.id ?? G
                  );
                }) })
              ] }, R.id ?? te);
            }) }) })
          ] }, `${m.heading}-${M}`);
        }),
        i && d === "overlay" && u.size === 1 && (() => {
          const m = Array.from(u)[0], M = t.flatMap((C) => C.roadmapItems).find((C) => C.id === m);
          return !M || !M.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${M.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: M.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: p, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: M.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: M.childItems.map((C, S) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: C.title }),
                C.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: C.content })
              ] }, C.id ?? S)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: p, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
dh.displayName = "ProductRoadmap";
function vi(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = vi(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function sr() {
  for (var e, t, n = 0, a = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = vi(e)) && (a && (a += " "), a += t);
  return a;
}
function Ze(e) {
  return function() {
    return e;
  };
}
const Na = Math.PI, Ta = 2 * Na, Ut = 1e-6, uh = Ta - Ut;
function _i(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function fh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return _i;
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
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? _i : fh(t);
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
    let i = this._x1, l = this._y1, d = a - t, c = s - n, u = i - t, f = l - n, g = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (g > Ut) if (!(Math.abs(f * d - c * u) > Ut) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let y = a - i, D = s - l, w = d * d + c * c, h = y * y + D * D, p = Math.sqrt(w), E = Math.sqrt(g), L = o * Math.tan((Na - Math.acos((w + g - h) / (2 * p * E))) / 2), T = L / E, A = L / p;
      Math.abs(T - 1) > Ut && this._append`L${t + T * u},${n + T * f}`, this._append`A${o},${o},0,0,${+(f * y > u * D)},${this._x1 = t + A * d},${this._y1 = n + A * c}`;
    }
  }
  arc(t, n, a, s, o, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), d = a * Math.sin(s), c = t + l, u = n + d, f = 1 ^ i, g = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > Ut || Math.abs(this._y1 - u) > Ut) && this._append`L${c},${u}`, a && (g < 0 && (g = g % Ta + Ta), g > uh ? this._append`A${a},${a},0,1,${f},${t - l},${n - d}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = u}` : g > Ut && this._append`A${a},${a},0,${+(g >= Na)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
  }
  rect(t, n, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function wi(e) {
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
function Si(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ki(e) {
  this._context = e;
}
ki.prototype = {
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
function Ci(e) {
  return new ki(e);
}
function ji(e) {
  return e[0];
}
function Ni(e) {
  return e[1];
}
function Ti(e, t) {
  var n = Ze(!0), a = null, s = Ci, o = null, i = wi(l);
  e = typeof e == "function" ? e : e === void 0 ? ji : Ze(e), t = typeof t == "function" ? t : t === void 0 ? Ni : Ze(t);
  function l(d) {
    var c, u = (d = Si(d)).length, f, g = !1, y;
    for (a == null && (o = s(y = i())), c = 0; c <= u; ++c)
      !(c < u && n(f = d[c], c, d)) === g && ((g = !g) ? o.lineStart() : o.lineEnd()), g && o.point(+e(f, c, d), +t(f, c, d));
    if (y) return o = null, y + "" || null;
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
  var a = null, s = Ze(!0), o = null, i = Ci, l = null, d = wi(c);
  e = typeof e == "function" ? e : e === void 0 ? ji : Ze(+e), t = typeof t == "function" ? t : Ze(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Ni : Ze(+n);
  function c(f) {
    var g, y, D, w = (f = Si(f)).length, h, p = !1, E, L = new Array(w), T = new Array(w);
    for (o == null && (l = i(E = d())), g = 0; g <= w; ++g) {
      if (!(g < w && s(h = f[g], g, f)) === p)
        if (p = !p)
          y = g, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), D = g - 1; D >= y; --D)
            l.point(L[D], T[D]);
          l.lineEnd(), l.areaEnd();
        }
      p && (L[g] = +e(h, g, f), T[g] = +t(h, g, f), l.point(a ? +a(h, g, f) : L[g], n ? +n(h, g, f) : T[g]));
    }
    if (E) return l = null, E + "" || null;
  }
  function u() {
    return Ti().defined(s).curve(i).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ze(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ze(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : Ze(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ze(+f), n = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ze(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Ze(+f), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(n);
  }, c.lineX1 = function() {
    return u().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Ze(!!f), c) : s;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), c) : o;
  }, c;
}
function _o(e) {
  return e < 0 ? -1 : 1;
}
function wo(e, t, n) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (n - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (_o(o) + _o(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function So(e, t) {
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
        ca(this, this._t0, So(this, this._t0));
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
          this._point = 3, ca(this, So(this, n = wo(this, e, t)), n);
          break;
        default:
          ca(this, this._t0, n = wo(this, e, t));
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
  const a = Ho(e, t);
  return ms().domain(a).range(n);
}
function ko(e, t, n) {
  const [a, s] = Ho(e, t);
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
  const s = Ti().x(t).y(n);
  return a?.smooth !== !1 && s.curve(ir), s(e) ?? "";
}
function mh(e = {}) {
  const t = X.useRef(null), n = X.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = X.useState({ width: 0, height: 0 });
  X.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: u, height: f } = c.contentRect;
        s({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: n, ref: t };
}
const Di = X.createContext(null);
function Ht() {
  return X.useContext(Di);
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
  return n !== void 0 && (d.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: d, role: o, "aria-label": i, children: /* @__PURE__ */ r.jsx(Di.Provider, { value: l, children: s }) });
}, xs = X.createContext(null), Jt = () => X.useContext(xs), xh = ({
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
  const u = Ht(), f = t ?? u?.innerWidth ?? 0, g = n ?? u?.innerHeight ?? 0, y = X.useMemo(() => e.flatMap((T) => T.data), [e]), D = X.useCallback((T) => {
    if (a) return a(T);
    const A = T.x;
    return A instanceof Date ? A : new Date(A);
  }, [a]), w = d ?? 6, h = c ?? 6, p = X.useMemo(() => ph(y, D, [w, Math.max(0, f - w)]), [y, D, f, w]), E = X.useMemo(() => {
    if (l) {
      const T = ko([], (A) => A.y, [Math.max(0, g - h), h]);
      return T.domain(l), T;
    }
    return ko(y, (T) => T.y, [Math.max(0, g - h), h]);
  }, [y, g, l]), L = X.useMemo(() => ({
    xScale: p,
    yScale: E,
    getXTicks: (T = o) => p.ticks(T),
    getYTicks: (T = i) => E.ticks(T)
  }), [p, E, o, i]);
  return /* @__PURE__ */ r.jsx(xs.Provider, { value: L, children: s });
}, Co = ({
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
  labelAngle: f = 0,
  allowLabelWrap: g = !0,
  tickFormatPreset: y
}) => {
  const D = Jt(), w = Ht(), h = t || (e === "x" ? D?.xScale : D?.yScale), p = n ?? (e === "x" ? 6 : 5), E = typeof s == "function", L = X.useMemo(() => {
    if (E || !y) return;
    const $ = (F) => new Intl.DateTimeFormat(void 0, F);
    switch (y) {
      case "dayShortMonth":
        return (F) => {
          const _ = F instanceof Date ? F : new Date(F);
          return `${_.getDate()}
${$({ month: "short" }).format(_)}`;
        };
      case "dayShortMonthYear":
        return (F) => {
          const _ = F instanceof Date ? F : new Date(F);
          return `${_.getDate()}
${$({ month: "short" }).format(_)} ${_.getFullYear()}`;
        };
      case "shortMonth":
        return (F) => {
          const _ = F instanceof Date ? F : new Date(F);
          return $({ month: "short" }).format(_);
        };
      case "shortMonthYear":
        return (F) => {
          const _ = F instanceof Date ? F : new Date(F);
          return `${$({ month: "short" }).format(_)} ${_.getFullYear()}`;
        };
      case "hourMinute":
        return (F) => {
          const _ = F instanceof Date ? F : new Date(F);
          return $({ hour: "2-digit", minute: "2-digit" }).format(_);
        };
      default:
        return;
    }
  }, [E, y]);
  let T = E ? s : L || (($) => String($));
  const A = X.useMemo(() => a && Array.isArray(a) ? a : h ? typeof h.ticks == "function" ? h.ticks(p) : h.domain ? h.domain() : [] : [], [h, p, a]);
  if (e === "x" && !E && !y && A.length && A.every(($) => $ instanceof Date)) {
    const $ = A[0], F = A[A.length - 1], _ = F.getTime() - $.getTime(), v = 24 * 3600 * 1e3, N = 365 * v, k = $.getFullYear() === F.getFullYear(), m = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (_ < 2 * v) {
      const M = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      T = (C) => M.format(C);
    } else if (_ < 32 * v)
      T = (M) => {
        const C = M;
        return `${C.getDate()} ${m.format(C)}`;
      };
    else if (_ < N && k)
      T = (M) => m.format(M);
    else if (_ < 2 * N) {
      const M = /* @__PURE__ */ new Set();
      T = (C) => {
        const S = C, x = S.getMonth();
        return M.has(x) || M.add(x), `${m.format(S)} ${S.getFullYear()}`;
      };
    } else
      T = (M) => String(M.getFullYear());
  }
  if (!h || !w) return null;
  if (e === "x") {
    const $ = i ?? w.innerHeight, F = typeof h.bandwidth == "function", _ = F ? h.bandwidth() : 0, v = (m) => {
      const M = h(m);
      return F ? M + _ / 2 : M;
    };
    let N = d ?? 0;
    if (u && d == null) {
      const m = A.map((C) => T(C).replace(/\n.*/g, "")), M = m.length ? m.reduce((C, S) => C + S.length, 0) / m.length : 0;
      N = Math.max(12, Math.round(M * 6 + 4));
    }
    const k = X.useMemo(() => {
      if (a && Array.isArray(a) || N <= 0) return A;
      const m = [];
      let M = -1 / 0;
      for (const C of A) {
        const S = v(C);
        S - M >= N && (m.push(C), M = S);
      }
      return m;
    }, [A, h, N, a, F, _]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${$})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: w.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      k.map((m, M) => {
        const C = T(m), S = c && C.length > c ? C.slice(0, Math.max(1, c - 1)) + "…" : C, x = g ? S.split(/\n/) : [S.replace(/\n/g, " ")], I = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${v(m)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: I, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            x.map((ne, O) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: O === 0 ? 0 : "1.1em", children: ne }, O)),
            S !== C && /* @__PURE__ */ r.jsx("title", { children: C })
          ] })
        ] }, m?.toString?.() || M);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    A.map(($, F) => {
      const _ = T($), v = c && _.length > c ? _.slice(0, Math.max(1, c - 1)) + "…" : _, N = g ? v.split(/\n/) : [v.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${h($)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          N.map((k, m) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: m === 0 ? 0 : "1.1em", children: k }, m)),
          v !== _ && /* @__PURE__ */ r.jsx("title", { children: _ })
        ] })
      ] }, $?.toString?.() || F);
    }),
    o && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -w.innerHeight / 2, y: -w.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
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
}, yh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, En = {
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
let da = null, ua = null, fa = null, $i = "optimized";
function wh() {
  const e = { color: { ...Br.color, ...En.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
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
function Mi(e) {
  const t = kh(e);
  if (!t) return null;
  const n = Ch(t.r, t.g, t.b);
  return jh(n.x, n.y, n.z);
}
function jo(e, t) {
  const n = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(n * n + a * a + s * s);
}
function Nh() {
  const e = Sh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Mi(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (d += jo(l, t[f]), c++);
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
      for (const f of o) {
        const g = t[f];
        if (g) {
          const y = jo(c, g);
          y < u && (u = y);
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
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
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
  const n = Mi(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: s, Y: o, Z: i } = Dh(a, n.a, n.b), l = $h(s, o, i);
  return Mh(l.r, l.g, l.b);
}
function Lh() {
  const e = Th(), n = [12, -12, 24, -24].map((s) => e.map((o) => Ih(o, s))), a = [...e];
  return n.forEach((s) => a.push(...s)), a;
}
function Fh() {
  return (!fa || Eh()) && (fa = Lh(), Ii = $i), fa;
}
let Ii = null;
function Eh() {
  return Ii !== $i;
}
function gt(e) {
  const t = Fh();
  return t[e % t.length];
}
let dn = null, $n = null, Mn = null, In = null;
function Ah() {
  const e = En?.color?.["data-viz"]?.stroke;
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
  (!dn || !$n || !Mn || !In) && Ah();
}
function Xt(e) {
  return Hr(), dn ? dn[e % dn.length] : "#212b32";
}
function Ph(e) {
  return Hr(), $n ? $n[e] : void 0;
}
function lr(e, t) {
  return Ph(e) || Xt(t);
}
const Ma = ["low", "moderate", "high", "critical"];
let pa = null;
function Rh() {
  const e = { color: { ...Br.color, ...En.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
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
function Li() {
  return pa || (pa = Rh()), pa;
}
function Bh(e) {
  return Li()[e.toLowerCase()];
}
function Hh(e, t) {
  return Bh(e) || Li()[Ma[t % Ma.length]] || gt(t);
}
function zh(e) {
  return Hr(), Mn ? Mn[e] : void 0;
}
function Oh(e, t) {
  return zh(e) || Xt(t);
}
const Ia = ["trust", "ambulance", "icb", "region"];
let ma = null;
function Wh() {
  const e = { color: { ...Br.color, ...En.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
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
function Fi() {
  return ma || (ma = Wh()), ma;
}
function Uh(e) {
  return Fi()[e.toLowerCase()];
}
function Gh(e, t) {
  return Uh(e) || Fi()[Ia[t % Ia.length]] || gt(t);
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
  const e = { color: { ...Br.color, ...En.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
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
const Ei = X.createContext(null), An = () => X.useContext(Ei), Jx = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [s, o] = X.useState(() => new Set(e)), i = n !== void 0, l = X.useMemo(() => i ? new Set(n) : s, [i, n, s]), d = X.useCallback((u) => {
    i || o(new Set(u)), a?.(Array.from(u));
  }, [i, a]), c = X.useMemo(() => ({
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
  return /* @__PURE__ */ r.jsx(Ei.Provider, { value: c, children: t });
}, Ai = X.createContext(null), zt = () => X.useContext(Ai), Qh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Jt(), s = An(), [o, i] = X.useState(null), l = X.useRef(/* @__PURE__ */ new Map()), [d, c] = X.useState([]), u = X.useCallback(
    (F, _) => {
      l.current.set(F, _);
    },
    []
  ), f = X.useCallback((F) => {
    l.current.delete(F);
  }, []), g = X.useCallback(
    (F, _) => {
      if (!a) return;
      const { xScale: v, yScale: N } = a;
      let k = null, m = 1 / 0;
      l.current.forEach((M, C) => {
        M.forEach((S, x) => {
          const I = v(S.x), ne = N(S.y), O = I - F, B = ne - _, W = Math.sqrt(O * O + B * B);
          W < m && (m = W, k = {
            seriesId: C,
            index: x,
            x: S.x,
            y: S.y,
            clientX: I,
            clientY: ne
          });
        });
      }), k && m <= t ? i(k) : i(null);
    },
    [a, t]
  ), y = X.useCallback(() => i(null), []);
  X.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: F, yScale: _ } = a, v = [];
    l.current.forEach((N, k) => {
      N.forEach((m, M) => {
        (o.x instanceof Date && m.x instanceof Date ? m.x.getTime() === o.x.getTime() : m.x === o.x) && v.push({
          seriesId: k,
          index: M,
          x: m.x,
          y: m.y,
          clientX: F(m.x),
          clientY: _(m.y)
        });
      });
    }), v.sort((N, k) => N.seriesId.localeCompare(k.seriesId)), c(v);
  }, [o, a]);
  const D = X.useCallback(
    (F) => {
      if (!o) return;
      const _ = l.current.get(o.seriesId);
      if (!_) return;
      let v = o.index + F;
      if (v < 0 || v >= _.length) {
        if (!n) return;
        v = (v + _.length) % _.length;
      }
      const N = _[v];
      if (!a) return;
      const { xScale: k, yScale: m } = a;
      i({
        seriesId: o.seriesId,
        index: v,
        x: N.x,
        y: N.y,
        clientX: k(N.x),
        clientY: m(N.y)
      });
    },
    [o, a, n]
  ), w = X.useCallback(
    (F) => {
      let _ = Array.from(l.current.keys());
      if (s && (_ = _.filter((I) => !s.isHidden(I))), _.length === 0) return;
      if (!o) {
        const I = _[0], ne = l.current.get(I);
        if (!ne || !a) return;
        const { xScale: O, yScale: B } = a, W = ne[0];
        i({
          seriesId: I,
          index: 0,
          x: W.x,
          y: W.y,
          clientX: O(W.x),
          clientY: B(W.y)
        });
        return;
      }
      const v = _.indexOf(o.seriesId);
      if (v === -1) return;
      let N = v + F;
      if (N < 0 || N >= _.length) {
        if (!n) return;
        N = (N + _.length) % _.length;
      }
      const k = _[N], m = l.current.get(k);
      if (!m || !a) return;
      const M = Math.min(o.index, m.length - 1), C = m[M], { xScale: S, yScale: x } = a;
      i({
        seriesId: k,
        index: M,
        x: C.x,
        y: C.y,
        clientX: S(C.x),
        clientY: x(C.y)
      });
    },
    [o, a, n, s]
  ), h = X.useCallback(() => {
    let F = Array.from(l.current.keys());
    if (s && (F = F.filter((M) => !s.isHidden(M))), F.length === 0) return;
    const _ = o ? o.seriesId : F[0], v = l.current.get(_);
    if (!v || v.length === 0 || !a) return;
    const N = v[0], { xScale: k, yScale: m } = a;
    i({
      seriesId: _,
      index: 0,
      x: N.x,
      y: N.y,
      clientX: k(N.x),
      clientY: m(N.y)
    });
  }, [o, a, s]), p = X.useCallback(() => {
    let F = Array.from(l.current.keys());
    if (s && (F = F.filter((C) => !s.isHidden(C))), F.length === 0) return;
    const _ = o ? o.seriesId : F[0], v = l.current.get(_);
    if (!v || v.length === 0 || !a) return;
    const N = v.length - 1, k = v[N], { xScale: m, yScale: M } = a;
    i({
      seriesId: _,
      index: N,
      x: k.x,
      y: k.y,
      clientX: m(k.x),
      clientY: M(k.y)
    });
  }, [o, a, s]), E = X.useCallback(
    () => D(1),
    [D]
  ), L = X.useCallback(
    () => D(-1),
    [D]
  ), T = X.useCallback(
    () => w(1),
    [w]
  ), A = X.useCallback(
    () => w(-1),
    [w]
  ), $ = X.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: d,
      focusNearest: g,
      clear: y,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: E,
      focusPrevPoint: L,
      focusNextSeries: T,
      focusPrevSeries: A,
      focusFirstPoint: h,
      focusLastPoint: p
    }),
    [
      o,
      d,
      g,
      y,
      u,
      f,
      E,
      L,
      T,
      A,
      h,
      p
    ]
  );
  return /* @__PURE__ */ r.jsx(Ai.Provider, { value: $, children: e });
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
  colors: f
}) => {
  const g = Jt();
  if (!g) return null;
  const { xScale: y, yScale: D } = g, h = An()?.isHidden(e.id) ?? !1, p = h && l === "fade";
  if (h && l === "remove")
    return null;
  const E = zt();
  X.useEffect(() => {
    if (!E) return;
    const _ = e.data.map((v) => ({ x: i(v), y: v.y }));
    return E.registerSeries(e.id, _), () => E.unregisterSeries(e.id);
  }, [E, e.id, e.data, i]);
  const L = X.useMemo(
    () => $a(
      e.data,
      (_) => y(i(_)),
      (_) => D(_.y),
      { smooth: c }
    ),
    [e.data, y, D, i, c]
  ), T = X.useMemo(() => {
    if (!e.data.length) return "";
    const [_] = D.domain(), v = Da().x((N) => y(i(N))).y0(() => D(_)).y1((N) => D(N.y));
    return c && v.curve(ir), v(e.data) || "";
  }, [e.data, y, D, i, c]), A = f && f[t], $ = e.color || A || (n === "region" ? un(e.id, t) : gt(t)), F = n === "region" ? lr(e.id, t) : Xt(t);
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
            d: T,
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
            stroke: $,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((_, v) => {
          const N = y(i(_)), k = D(_.y), m = s ? 0 : -1, M = !p && (s && v === o || E?.focused?.seriesId === e.id && E.focused.index === v), C = () => {
            E && !p && E.setFocused({
              seriesId: e.id,
              index: v,
              x: i(_),
              y: _.y,
              clientX: N,
              clientY: k
            });
          }, S = () => {
            E && E.focused?.seriesId === e.id && E.focused.index === v && E.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: N,
              cy: k,
              r: M ? 5 : 3.5,
              stroke: M ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : F,
              strokeWidth: M ? 2 : 1,
              fill: M ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : $,
              className: "fdp-line-point",
              tabIndex: p ? -1 : m,
              "aria-label": `${e.label || e.id} ${i(_).toDateString()} value ${_.y}`,
              "data-series": e.id,
              "data-index": v,
              onMouseEnter: C,
              onFocus: C,
              onMouseLeave: S,
              onBlur: S
            },
            v
          );
        })
      ]
    }
  );
}, tp = ({ polite: e = !0, format: t }) => {
  const n = zt(), [a, s] = X.useState(""), o = X.useRef("");
  return X.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let d;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
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
  const { focused: n, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(n.clientX, 0), s), l = Math.min(Math.max(n.clientY, 0), o), d = i + 8, c = l - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), g = u ? f : `${f} • ${n.y}`, y = /\d+$/.exec(n.seriesId || ""), D = y ? parseInt(y[0], 10) - 1 : 0, w = gt(D >= 0 ? D : 0) || "#005eb8", h = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: h, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: h, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: w, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const E = a.map((F) => `${F.seriesId}: ${F.y}`), L = [g, ...E], T = L.reduce((F, _) => Math.max(F, _.length), 0), A = Math.max(90, T * 6.2 + 16), $ = 16 * L.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: d, y: c - $, rx: 4, ry: 4, width: A, height: $, fill: "#212b32", opacity: 0.92 }),
        L.map((F, _) => /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - $ + 6 + 16 * (_ + 0.7), fill: "#fff", fontSize: 12, children: F }, _))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, g.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: g })
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
  const c = An(), u = !!(c && !a && !l && o === void 0), f = a || u, g = e || [], y = o !== void 0, [D, w] = X.useState(new Set(i)), h = y ? new Set(o) : D, [p, E] = X.useState(""), L = (T) => {
    if (u && c) {
      const m = c.isHidden(T);
      c.toggle(T);
      const C = g.find((x) => x.id === T)?.label || T, S = d ? d(T, m, C) : `${C} ${m ? "shown" : "hidden"}`;
      E(S);
      return;
    }
    if (!f) return;
    const A = new Set(h), $ = A.has(T);
    $ ? A.delete(T) : A.add(T), y || w(A);
    const F = g.filter((m) => !A.has(m.id)).map((m) => m.id), _ = Array.from(A);
    l?.(F, _);
    const N = g.find((m) => m.id === T)?.label || T, k = d ? d(T, $, N) : `${N} ${$ ? "shown" : "hidden"}`;
    E(k);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: g.map((T, A) => {
      const $ = T.palette || t, F = T.color || ($ === "region" ? un(T.id, A) : $ === "severity" ? Hh(T.id, A) : $ === "org-level" ? Gh(T.id, A) : gt(A));
      let _ = T.stroke || ($ === "region" ? lr(T.id, A) : $ === "severity" ? Oh(T.id, A) : $ === "org-level" ? Yh(T.id, A) : Xt(A));
      if (s && _) {
        const k = _.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (_ = "#212b32");
      }
      const v = u && c ? c.isHidden(T.id) : h.has(T.id), N = f ? {
        "aria-pressed": !v,
        "aria-label": `${T.label} (${v ? "show" : "hide"})`,
        onClick: () => L(T.id)
      } : { "aria-label": T.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${v ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: F,
              backgroundImage: T.patternDataUrl ? `url(${T.patternDataUrl})` : void 0,
              backgroundSize: T.patternDataUrl ? "auto" : void 0,
              borderColor: _
            },
            ...N
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: T.label })
      ] }, T.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: p })
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
  const f = Jt();
  if (!f) return null;
  const { xScale: g, yScale: y } = f, w = An()?.isHidden(e.id) ?? !1, h = w && o === "fade";
  if (w && o === "remove") return null;
  const p = zt();
  X.useEffect(() => {
    if (!p) return;
    const F = e.data.map((_) => ({ x: a(_), y: _.y }));
    return p.registerSeries(e.id, F), () => p.unregisterSeries(e.id);
  }, [p, e.id, e.data, a]);
  const E = u && u[t], L = e.color || E || (n === "region" ? un(e.id, t) : gt(t)), T = X.useMemo(() => d && d.length === e.data.length ? $a(
    e.data,
    (F) => g(a(F)),
    (F) => {
      const _ = e.data.indexOf(F);
      return y(d[_].y1);
    },
    { smooth: l }
  ) : $a(
    e.data,
    (F) => g(a(F)),
    (F) => y(F.y),
    { smooth: l }
  ), [e.data, d, g, y, a, l]), A = X.useMemo(() => {
    if (d && d.length === e.data.length) {
      const k = Da().x((m) => g(a(m))).y0((m, M) => y(d[M].y0)).y1((m, M) => y(d[M].y1));
      return l && k.curve(ir), k(e.data) || "";
    }
    const [F, _] = y.domain();
    let v = i;
    v < F ? v = F : v > _ && (v = _);
    const N = Da().x((k) => g(a(k))).y0(() => y(v)).y1((k) => y(k.y));
    return l && N.curve(ir), N(e.data) || "";
  }, [e.data, d, g, y, a, i, l]), $ = X.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: h ? 0.25 : 1,
      "aria-hidden": h ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: $, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: L, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: L, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: A,
            fill: c ? `url(#${$})` : L,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ r.jsx("path", { d: T, fill: "none", stroke: L, strokeWidth: 1 })
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
  visibilityMode: f = "remove",
  colorMode: g = "series",
  allSeries: y,
  stacked: D,
  gapRatio: w = 0.15,
  minBarWidth: h,
  gradientFill: p = !0,
  gradientStrokeMatch: E = !0,
  opacity: L = 1,
  fadedOpacity: T = 0.25,
  flatFillOpacity: A = 1,
  colors: $
}) => {
  const F = Math.max(0, w), _ = Jt(), v = Ht();
  if (!_ || !v) return null;
  const { xScale: N, yScale: k } = _, M = An()?.isHidden(e.id) ?? !1, C = M && f === "fade";
  if (M && f === "remove") return null;
  const S = zt();
  X.useEffect(() => {
    if (!S) return;
    const P = e.data.map((G) => ({ x: s(G), y: G.y }));
    return S.registerSeries(e.id, P), () => S.unregisterSeries(e.id);
  }, [S, e.id, e.data, s]);
  const x = typeof N.bandwidth == "function", I = x ? N.bandwidth() : void 0, ne = X.useMemo(() => {
    if (I != null) return I;
    const P = y && y.length ? y : [e], G = [];
    P.forEach((se) => {
      se.data.forEach((le) => {
        const de = N(s(le));
        Number.isFinite(de) && G.push(de);
      });
    });
    const ae = G.sort((se, le) => se - le);
    if (ae.length <= 1) return 40;
    const z = [];
    for (let se = 1; se < ae.length; se++)
      z.push(ae[se] - ae[se - 1]);
    return z.sort((se, le) => se - le), (z[Math.floor(z.length / 2)] || 40) * i;
  }, [e.data, y, N, s, i, I]), { basePerBar: O } = X.useMemo(() => {
    if (x) {
      const ae = ne, z = Math.max(
        1,
        (ae - l * (n - 1)) / n
      ), ce = e.barWidth ?? d;
      let se = ce ? Math.min(ce, ae) : z;
      if (c) {
        const le = ae * Math.min(1, Math.max(0.05, u)), de = Math.max(
          1,
          (le - l * (n - 1)) / n
        );
        se = ce ? Math.min(se, de) : de;
      }
      return { basePerBar: se };
    }
    const P = e.barWidth ?? d, G = Math.max(
      1,
      (ne - l * (n - 1)) / n
    );
    if (c) {
      const ae = y && y.length ? y : [e], z = [];
      ae.forEach(
        (Te) => Te.data.forEach((Se) => {
          const he = N(s(Se));
          Number.isFinite(he) && z.push(he);
        })
      ), z.sort((Te, Se) => Te - Se);
      const ce = [];
      for (let Te = 1; Te < z.length; Te++)
        ce.push(z[Te] - z[Te - 1]);
      ce.sort((Te, Se) => Te - Se);
      const le = (ce[Math.floor(ce.length / 2)] || ne) * Math.min(1, Math.max(0.05, u)), de = Math.max(
        1,
        (le - l * (n - 1)) / n
      );
      return { basePerBar: P ? Math.min(P, de) : de };
    }
    return P ? { basePerBar: Math.min(P, G) } : { basePerBar: G };
  }, [
    x,
    ne,
    l,
    n,
    d,
    e.barWidth,
    c,
    u,
    y,
    N,
    s
  ]), B = X.useMemo(() => {
    if (x) return [];
    const P = [];
    return (y && y.length ? y : [e]).forEach(
      (ae) => ae.data.forEach((z) => {
        const ce = N(s(z));
        Number.isFinite(ce) && P.push(ce);
      })
    ), P.sort((ae, z) => ae - z), Array.from(new Set(P));
  }, [x, y, e, N, s]), W = X.useMemo(() => {
    if (x)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: v.innerWidth }
      ];
    const P = [];
    for (let G = 0; G < B.length; G++) {
      const ae = B[G], z = G === 0 ? 0 : (B[G - 1] + ae) / 2, ce = G === B.length - 1 ? v.innerWidth : (ae + B[G + 1]) / 2;
      P.push({
        center: ae,
        left: Math.max(0, z),
        right: Math.min(v.innerWidth, ce)
      });
    }
    return P;
  }, [x, B, v.innerWidth]), R = X.useMemo(() => {
    if (x || !W.length)
      return;
    const P = Math.min(1, Math.max(0.05, i)), G = W.map((le) => Math.max(2, le.right - le.left)), ae = G.map(
      (le) => Math.max(2, Math.min(le - 1, le * P))
    );
    let z = Math.min(...ae);
    if (h)
      if (n <= 1) {
        const le = Math.min(...G.map((de) => de - 1));
        le >= h && z < h && (z = Math.min(le, h));
      } else {
        const le = Math.min(...G.map((be) => be - 1)), de = h * n + (n - 1) * (h * F);
        de <= le && z < de && (z = de);
      }
    if (n <= 1)
      return h && z < h && G.every((de) => de >= h) ? { groupWidth: h, barWidth: h } : { groupWidth: z, barWidth: z };
    let ce = z / (n + (n - 1) * F);
    return ce < 1 && (ce = 1), h && ce < h && h * n + (n - 1) * (h * F) <= z && (ce = h), { groupWidth: ce * n + (n - 1) * (ce * F), barWidth: ce };
  }, [
    x,
    W,
    i,
    n,
    F,
    h
  ]), te = $ && $[t] ? $[t] : void 0, b = e.color || te || (a === "region" ? un(e.id, t) : gt(t)), H = a === "region" ? lr(e.id, t) : Xt(t), ee = E && (e.color || te) ? b : H, J = Number.isFinite(k(0)) ? k(0) : k.range()[0], Y = X.useId();
  return D && D.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: C ? T : L,
      "aria-hidden": C ? !0 : void 0,
      children: [
        p && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: Y,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: b, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: b,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: b,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((P, G) => {
          const ae = s(P), z = N(x ? P.x : ae);
          let ce, se;
          if (x)
            ce = ne, se = z;
          else {
            const re = W.find(
              (U) => Math.abs(U.center - z) < 0.5
            );
            if (!re || !R)
              ce = O, se = z - O / 2;
            else {
              const { groupWidth: U } = R;
              ce = U;
              let j = z - U / 2;
              j < re.left && (j = re.left), j + U > re.right && (j = Math.max(re.left, re.right - U)), se = j;
            }
          }
          const le = D[G], de = k(le.y0), be = k(le.y1), Te = Math.min(de, be), Se = Math.abs(be - de) || 1;
          if (!x && h && ce < h) {
            const re = W.find(
              (U) => Math.abs(U.center - z) < 0.5
            );
            if (re) {
              const U = Math.max(2, re.right - re.left - 1), j = Math.min(U, h);
              j > ce && (ce = j, se = Math.max(
                re.left,
                Math.min(re.right - ce, z - ce / 2)
              ));
            }
          }
          const he = !C && S?.focused?.seriesId === e.id && S.focused.index === G, Z = () => {
            !S || C || S.setFocused({
              seriesId: e.id,
              index: G,
              x: ae,
              y: le.y1 - le.y0,
              clientX: se + ce / 2,
              clientY: Te
            });
          }, K = () => {
            S?.focused?.seriesId === e.id && S.focused.index === G && S.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: se,
              y: Te,
              width: ce,
              height: Se,
              fill: p ? `url(#${Y})` : b,
              ...p ? {} : { fillOpacity: A },
              stroke: he ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : p && E ? b : void 0,
              strokeWidth: he ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: C || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ae instanceof Date ? ae.toDateString() : ae} value ${le.y1 - le.y0}`,
              onMouseEnter: Z,
              onFocus: Z,
              onMouseLeave: K,
              onBlur: K
            },
            G
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: C ? T : L,
      "aria-hidden": C ? !0 : void 0,
      children: [
        p && /* @__PURE__ */ r.jsxs("defs", { children: [
          g === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: Y,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: b, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: b,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: b,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          g === "category" && e.data.map((P, G) => {
            const z = $ && $[G] || (a === "region" ? un(String(P.x), G) : gt(G)), ce = `${Y}-${G}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: ce,
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
              ce
            );
          })
        ] }),
        e.data.map((P, G) => {
          const ae = s(P), z = N(x ? P.x : ae);
          let ce, se;
          if (x) {
            const oe = ne;
            if (n <= 1)
              se = oe, ce = z;
            else {
              se = Math.max(
                1,
                oe / (n + (n - 1) * F)
              );
              const q = se * F, Q = se * n + q * (n - 1);
              ce = z + (oe - Q) / 2 + t * (se + q);
            }
          } else {
            const oe = W.find((q) => q.center === z);
            if (!oe || !R)
              se = O, ce = z - O / 2, h && se < h && (se = h, ce = z - se / 2);
            else {
              const { barWidth: q } = R;
              se = q;
              const Q = n > 1 ? q * F : 0, ie = se * n + Q * (n - 1);
              let _e = z - ie / 2;
              _e < oe.left && (_e = oe.left), _e + ie > oe.right && (_e = Math.max(oe.left, oe.right - ie)), ce = _e + t * (se + Q);
            }
            if (h && se < h) {
              const q = W.find(
                (Q) => Math.abs(Q.center - z) < 0.5
              );
              if (q) {
                const Q = Math.max(2, q.right - q.left - 1), ie = Math.min(Q, h);
                if (ie > se)
                  if (n <= 1)
                    se = ie, ce = Math.max(
                      q.left,
                      Math.min(q.right - se, z - se / 2)
                    );
                  else {
                    const _e = ie * F, ke = ie * n + _e * (n - 1);
                    if (ke <= q.right - q.left - 1) {
                      se = ie;
                      const ye = ke;
                      let Ce = z - ye / 2;
                      Ce < q.left && (Ce = q.left), Ce + ye > q.right && (Ce = Math.max(
                        q.left,
                        q.right - ye
                      )), ce = Ce + t * (se + _e);
                    }
                  }
              }
            }
          }
          const le = ce + se / 2, de = k(P.y), be = Math.min(J, de), Te = Math.abs(J - de), Se = !C && S?.focused?.seriesId === e.id && S.focused.index === G, he = () => {
            !S || C || S.setFocused({
              seriesId: e.id,
              index: G,
              x: ae,
              y: P.y,
              clientX: le,
              clientY: de
            });
          }, Z = () => {
            S?.focused?.seriesId === e.id && S.focused.index === G && S.clear();
          }, K = g === "category" && $ ? $[G] : void 0, re = g === "category" ? K || (a === "region" ? un(String(P.x), G) : gt(G)) : b, U = g === "category" ? `${Y}-${G}` : Y, j = p && E ? re : g === "category" ? a === "region" ? lr(String(P.x), G) : Xt(G) : ee, V = Se ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : j || re;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ce,
              y: be,
              width: se,
              height: Te || 1,
              fill: p ? `url(#${U})` : re,
              ...p ? {} : { fillOpacity: A },
              stroke: V,
              strokeWidth: Se ? 2 : 1,
              className: "fdp-bar",
              tabIndex: C || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ae instanceof Date ? ae.toDateString() : ae} value ${P.y}`,
              onMouseEnter: he,
              onFocus: he,
              onMouseLeave: Z,
              onBlur: Z
            },
            G
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
  const l = Ht(), d = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, u = X.useMemo(() => e.flatMap((h) => h.data), [e]), f = X.useMemo(() => {
    const h = /* @__PURE__ */ new Set();
    return u.forEach((p) => h.add(p.x)), Array.from(h);
  }, [u]), g = X.useMemo(
    () => Math.max(0, ...u.map((h) => h.y)),
    [u]
  ), y = X.useMemo(
    () => Oo().domain(f).range([0, d]).paddingInner(a).paddingOuter(s),
    [f, d, a, s]
  ), D = X.useMemo(
    () => Qn().domain([0, g]).nice().range([c, 0]),
    [g, c]
  ), w = X.useMemo(
    () => ({
      xScale: y,
      yScale: D,
      getXTicks: () => f,
      getYTicks: (h = i) => D.ticks(h)
    }),
    [y, D, f, i]
  );
  return /* @__PURE__ */ r.jsx(xs.Provider, { value: w, children: o });
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
  const d = X.useId(), c = o || d, u = t ? `${c}-desc` : void 0, f = n ? `${c}-src` : void 0, g = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: c,
      className: sr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": sr(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !g && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(dt, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(dt, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, sb = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const s = X.useRef(null);
  return X.useEffect(() => {
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
  valueFormatter: f,
  className: g,
  id: y,
  announceDelta: D = !0
}) => {
  const w = X.useId(), h = y || w, p = `${h}-label`, E = `${h}-value`, L = `${h}-delta`, T = typeof t == "number" && !Number.isNaN(t), A = c ? "—" : u ? "" : T ? f ? f(t) : t.toLocaleString() : t;
  let $, F = "", _ = "";
  if (a && !c && !u) {
    $ = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const v = Math.abs(a.value), N = $ === "up" ? `+${v}` : $ === "down" ? `-${v}` : "0", k = a.isPercent ? "%" : "";
    if (F = `${N}${k}`, a.ariaLabel)
      _ = a.ariaLabel;
    else {
      const m = a.invert ? $ === "down" : $ === "up";
      _ = `${$ === "neutral" ? "no change" : $ === "up" ? "up" : "down"} ${v}${k}${$ === "neutral" ? "" : m ? " (improvement)" : " (worse)"}`;
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
        g
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
            /* @__PURE__ */ r.jsx("div", { id: E, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: A }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: L,
              "aria-label": _,
              className: sr(
                "fdp-metric-card__delta",
                $ && `fdp-metric-card__delta--${$}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: F }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        D && a && !a.ariaLabel && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: _ })
      ] })
    }
  );
}, xe = (e) => typeof e == "number" && Number.isFinite(e), rp = (e) => e.reduce((t, n) => t + n, 0), pt = (e) => e.length ? rp(e) / e.length : NaN;
function Pi(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!t[s] && xe(o)) {
      if (a !== null) {
        const i = e[a];
        n[s] = xe(i) ? Math.abs(o - i) : null;
      }
      a = s;
    }
  }
  return n;
}
function Ri(e, t) {
  const n = e.filter((o) => xe(o));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = pt(n), s = 3.267 * a;
  if (t) {
    const o = n.filter((i) => i <= s);
    o.length && o.length !== n.length && (a = pt(o), s = 3.267 * a);
  }
  return { mrMean: a, mrUcl: s };
}
function ap(e, t) {
  if (!xe(e) || !xe(t))
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
const sp = 0.2777, op = 3.6, ip = (e) => xe(e) && e >= 0 ? Math.pow(e, sp) : null, Wt = (e) => xe(e) && e >= 0 ? Math.pow(e, op) : null;
function lp(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const nn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function cp(e) {
  if (!xe(e) || e < 0)
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
  const a = e.map((_) => xe(_) ? ip(_) : null), s = Pi(a, t), { mrMean: o } = Ri(s, !!n), i = a.filter((_, v) => !t[v] && xe(_)), l = i.length ? pt(i) : NaN;
  if (!xe(l) || !xe(o))
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
  const d = 2.66, c = 2 / 3 * d, u = 1 / 3 * d, f = l + d * o, g = l - d * o, y = l + c * o, D = l - c * o, w = l + u * o, h = l - u * o, p = Wt(l), E = Wt(f), L = g <= 0 ? null : Wt(g), T = Wt(w), A = h <= 0 ? null : Wt(h), $ = Wt(y), F = D <= 0 ? null : Wt(D);
  return {
    center: p ?? null,
    upperProcessLimit: E ?? null,
    lowerProcessLimit: L ?? null,
    upperTwoSigma: $ ?? null,
    lowerTwoSigma: F ?? null,
    upperOneSigma: T ?? null,
    lowerOneSigma: A ?? null,
    mr: s,
    mrMean: o,
    mrUcl: xe(o) ? 3.267 * o : null
  };
}
var bs = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(bs || {}), Ye = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ye || {}), Be = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(Be || {});
const Bi = [
  // rank 1..n (order matters)
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], cr = Bi.reduce((e, t, n) => (e[t] = n + 1, e), {}), up = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, fp = Bi.reduce((e, t, n) => (e[t] = { id: t, rank: n + 1, label: up[t] }, e), {});
var an = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(an || {}), La = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(La || {}), Bt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Bt || {}), Hi = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(Hi || {}), sn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(sn || {}), zi = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(zi || {}), Pt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Pt || {}), Oi = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Oi || {}), Wi = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Wi || {});
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
  const a = t.reduce((o, i) => Math.max(o, cr[i]), 0), s = n.reduce((o, i) => Math.max(o, cr[i]), 0);
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
  const s = e.map((u, f) => ({ idx: f, value: u.value })).filter((u) => xe(u.value));
  if (s.length < a * 2) return;
  const o = n === "Up" || n === "Neither", i = n === "Down";
  function l(u, f) {
    const g = s.slice(u, f).map((y) => y.value);
    return g.length ? pt(g) : NaN;
  }
  let d = null;
  if (s.length > 1) {
    const u = [];
    for (let g = 1; g < s.length; g++) u.push(Math.abs(s[g].value - s[g - 1].value));
    const f = pt(u);
    xe(f) && f > 0 && (d = f * (2.66 / 3));
  }
  if (!d || d <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let u = a; u <= s.length - a; u++) {
    const f = u - a, g = l(f, u), y = l(u, u + a);
    if (!xe(g) || !xe(y)) continue;
    const w = (y - g) / d;
    if (!(o ? w >= c : i ? -w >= c : Math.abs(w) >= c)) continue;
    const p = s.slice(u, u + a).map((T) => T.value);
    if (!(o ? p.every((T) => T > g) : i ? p.every((T) => T < g) : p.every((T) => o ? T > g : T < g))) continue;
    const L = s[u].idx;
    e[L].baseline || (e[L].baseline = !0);
    return;
  }
}
function Gi(e) {
  if (!e) return {};
  const t = e, n = e, a = t.emergingGraceEnabled ?? n.emergingDirectionGrace, s = t.trendFavourableSideOnly ?? n.trendSideGatingEnabled, o = t.collapseWeakerClusterRules ?? n.collapseClusterRules, i = globalThis;
  return n.emergingDirectionGrace !== void 0 && t.emergingGraceEnabled === void 0 && !i.__spc_warn_emergingDirectionGrace && (i.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use emergingGraceEnabled")), n.trendSideGatingEnabled !== void 0 && t.trendFavourableSideOnly === void 0 && !i.__spc_warn_trendSideGatingEnabled && (i.__spc_warn_trendSideGatingEnabled = !0, console.warn("[spc] trendSideGatingEnabled is deprecated; use trendFavourableSideOnly")), n.collapseClusterRules !== void 0 && t.collapseWeakerClusterRules === void 0 && !i.__spc_warn_collapseClusterRules && (i.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use collapseWeakerClusterRules")), {
    ...e,
    emergingGraceEnabled: a,
    trendFavourableSideOnly: s,
    collapseWeakerClusterRules: o,
    // Backfill legacy names for internal engine until complete migration
    emergingDirectionGrace: a,
    trendSideGatingEnabled: s,
    collapseClusterRules: o
  };
}
function ys(e) {
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
    trendSideGatingEnabled: !0,
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((h, p) => ({
    rowId: p + 1,
    x: h.x,
    value: xe(h.value) ? h.value : null,
    ghost: !!h.ghost,
    baseline: !!h.baseline,
    target: xe(h.target) ? h.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      mp(l, o, n);
    } catch {
    }
  const d = pp(l), c = [], u = [], g = l.filter(
    (h) => !h.ghost && xe(h.value)
  ).length >= (i.minimumPoints ?? 13);
  let y = 0;
  const D = {};
  for (const h of d) {
    y++;
    const p = h.map((m) => m.value), E = h.map((m) => m.ghost);
    let L = new Array(p.length).fill(null), T = NaN, A = NaN, $ = NaN, F = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      L = Pi(p, E);
      const m = p.filter(
        (C, S) => !E[S] && xe(C)
      );
      T = m.length ? pt(m) : NaN;
      const M = Ri(
        L,
        !!i.excludeMovingRangeOutliers
      );
      A = M.mrMean, $ = M.mrUcl, F = ap(T, A);
    } else if (t === "T") {
      const m = dp(
        p,
        E,
        !!i.excludeMovingRangeOutliers
      );
      L = m.mr, A = m.mrMean ?? NaN, $ = m.mrUcl ?? NaN, T = m.center ?? NaN, F = {
        upperProcessLimit: m.upperProcessLimit,
        lowerProcessLimit: m.lowerProcessLimit,
        upperTwoSigma: m.upperTwoSigma,
        lowerTwoSigma: m.lowerTwoSigma,
        upperOneSigma: m.upperOneSigma,
        lowerOneSigma: m.lowerOneSigma
      };
    } else if (t === "G") {
      const m = p.filter(
        (S, x) => !E[x] && xe(S)
      ), M = m.length ? pt(m) : NaN, C = cp(M);
      T = C.cl ?? NaN, F = {
        upperProcessLimit: C.ucl,
        lowerProcessLimit: C.lcl,
        upperTwoSigma: C.twoHigh,
        lowerTwoSigma: C.twoLow,
        upperOneSigma: C.oneHigh,
        lowerOneSigma: C.oneLow
      }, L = new Array(p.length).fill(null), A = NaN, $ = NaN;
    } else
      u.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const _ = h.map((m, M) => {
      const C = !m.ghost && xe(m.value) ? p.slice(0, M + 1).filter((ne, O) => !E[O] && xe(ne)).length : 0, S = g, x = S ? F : {
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
        value: xe(m.value) ? m.value : null,
        ghost: m.ghost,
        partitionId: y,
        pointRank: C,
        mean: S && xe(T) ? T : null,
        mr: xe(L[M]) ? L[M] : null,
        mrMean: S && xe(A) ? A : null,
        mrUcl: S && xe($) ? $ : null,
        upperProcessLimit: xe(x.upperProcessLimit) ? x.upperProcessLimit : null,
        lowerProcessLimit: xe(x.lowerProcessLimit) ? x.lowerProcessLimit : null,
        upperTwoSigma: xe(x.upperTwoSigma) ? x.upperTwoSigma : null,
        lowerTwoSigma: xe(x.lowerTwoSigma) ? x.lowerTwoSigma : null,
        upperOneSigma: xe(x.upperOneSigma) ? x.upperOneSigma : null,
        lowerOneSigma: xe(x.lowerOneSigma) ? x.lowerOneSigma : null,
        target: xe(m.target) ? m.target : null,
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
        upperBaseline: S && xe(T) ? T : null,
        lowerBaseline: S && xe(T) ? T : null,
        movingRangeHighPointValue: S && xe($) ? $ : null,
        ghostValue: m.ghost && xe(m.value) ? m.value : null,
        ghostFlag: !!m.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    D[y] = _.filter(
      (m) => !m.ghost && xe(m.value)
    ).length;
    const v = i.specialCauseShiftPoints ?? 6, N = i.specialCauseTrendPoints ?? 6, k = [];
    for (let m = 0; m < _.length; m++) {
      const M = _[m], C = M.value;
      if (!M.ghost && xe(C) && k.push(m), !(xe(M.mean) && xe(M.upperProcessLimit) && xe(M.lowerProcessLimit)) || M.ghost || !xe(C)) {
        c.push(M);
        continue;
      }
      M.specialCauseSinglePointUp = xe(M.upperProcessLimit) ? C > M.upperProcessLimit : !1, M.specialCauseSinglePointDown = xe(M.lowerProcessLimit) ? C < M.lowerProcessLimit : !1, c.push(M);
    }
    if (k.length) {
      const m = (S) => _[S];
      let M = [], C = [];
      for (const S of k) {
        const x = m(S);
        if (!xe(x.mean) || !xe(x.value)) {
          M = [], C = [];
          continue;
        }
        if (x.value > x.mean ? (M.push(S), C = []) : x.value < x.mean ? (C.push(S), M = []) : (M = [], C = []), M.length >= v)
          for (const I of M) {
            const ne = m(I);
            ne.specialCauseShiftUp = !0;
          }
        if (C.length >= v)
          for (const I of C) {
            const ne = m(I);
            ne.specialCauseShiftDown = !0;
          }
      }
      for (let S = 0; S <= k.length - 3; S++) {
        const I = k.slice(S, S + 3).map(m);
        if (!I.every((J) => xe(J.mean) && xe(J.value))) continue;
        const ne = I[0].mean, O = I.every((J) => J.value > ne), B = I.every((J) => J.value < ne);
        if (!O && !B) continue;
        const W = I[0].upperTwoSigma ?? 1 / 0, R = I[0].lowerTwoSigma ?? -1 / 0, te = I[0].upperProcessLimit ?? 1 / 0, b = I[0].lowerProcessLimit ?? -1 / 0, H = I.filter((J) => J.value > W && J.value <= te), ee = I.filter((J) => J.value < R && J.value >= b);
        if (O && H.length >= 2)
          for (const J of H)
            J.specialCauseTwoOfThreeUp = !0;
        if (B && ee.length >= 2)
          for (const J of ee)
            J.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let S = 0; S <= k.length - 5; S++) {
          const I = k.slice(S, S + 5).map(m);
          if (!I.every((te) => xe(te.mean) && xe(te.value))) continue;
          const ne = I[0].mean;
          if (!I.every((te) => te.value > ne) && !I.every((te) => te.value < ne)) continue;
          const O = I[0].upperOneSigma ?? 1 / 0, B = I[0].lowerOneSigma ?? -1 / 0, W = I.filter((te) => te.value > O), R = I.filter((te) => te.value < B);
          if (I.every((te) => te.value > ne) && W.length >= 4)
            for (const te of W)
              te.specialCauseFourOfFiveUp = !0;
          if (I.every((te) => te.value < ne) && R.length >= 4)
            for (const te of R)
              te.specialCauseFourOfFiveDown = !0;
        }
      for (let S = 0; S <= k.length - N; S++) {
        const x = k.slice(S, S + N), I = x.map(m);
        if (!I.every((B) => xe(B.value))) continue;
        let ne = !0, O = !0;
        for (let B = 1; B < I.length && (I[B].value > I[B - 1].value || (ne = !1), I[B].value < I[B - 1].value || (O = !1), !(!ne && !O)); B++)
          ;
        if (ne) for (const B of x) {
          const W = m(B);
          W.specialCauseTrendUp = !0;
        }
        if (O) for (const B of x) {
          const W = m(B);
          W.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let S = [];
        for (const x of k) {
          const I = m(x);
          if (!xe(I.value) || !xe(I.mean) || !xe(I.upperOneSigma) || !xe(I.lowerOneSigma)) {
            S = [];
            continue;
          }
          if (!(I.value < I.upperOneSigma && I.value > I.lowerOneSigma)) {
            S = [];
            continue;
          }
          if (S.push(x), S.length >= 15) {
            const O = S.map(m), B = O.some((R) => R.value > R.mean), W = O.some((R) => R.value < R.mean);
            if (B && W)
              for (const R of S) m(R).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const m = i.maximumPointsPartition;
      let M = 0;
      for (const C of c.filter((S) => S.partitionId === y))
        !C.ghost && xe(C.value) && M++, M > m && (C.mean = C.upperProcessLimit = C.lowerProcessLimit = null, C.upperTwoSigma = C.lowerTwoSigma = C.upperOneSigma = C.lowerOneSigma = null);
    }
  }
  for (const h of c) {
    if (h.ruleTags && h.ruleTags.length) continue;
    const p = [];
    h.specialCauseShiftUp && p.push(
      "shift_high"
      /* ShiftHigh */
    ), h.specialCauseShiftDown && p.push(
      "shift_low"
      /* ShiftLow */
    ), h.specialCauseTrendUp && p.push(
      "trend_inc"
      /* TrendIncreasing */
    ), h.specialCauseTrendDown && p.push(
      "trend_dec"
      /* TrendDecreasing */
    ), h.specialCauseSinglePointUp && p.push(
      "single_above"
      /* SinglePointAbove */
    ), h.specialCauseSinglePointDown && p.push(
      "single_below"
      /* SinglePointBelow */
    ), h.specialCauseTwoOfThreeUp && p.push(
      "two_of_three_above"
      /* TwoOfThreeAbove */
    ), h.specialCauseTwoOfThreeDown && p.push(
      "two_of_three_below"
      /* TwoOfThreeBelow */
    ), h.specialCauseFourOfFiveUp && p.push(
      "four_of_five_above"
      /* FourOfFiveAbove */
    ), h.specialCauseFourOfFiveDown && p.push(
      "four_of_five_below"
      /* FourOfFiveBelow */
    ), h.specialCauseFifteenInnerThird && p.push(
      "fifteen_inner_third"
      /* FifteenInnerThird */
    ), p.length && (h.ruleTags = p);
  }
  for (let h = 0; h < c.length; h++) {
    const p = c[h];
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
    }), p.ghost || !xe(p.value) || p.mean === null) {
      p.variationIcon = "none";
      continue;
    }
    const E = p.value > p.mean, L = p.value < p.mean;
    i.collapseClusterRules && (p.specialCauseTwoOfThreeUp && p.specialCauseFourOfFiveUp && (p.specialCauseTwoOfThreeUp = !1), p.specialCauseTwoOfThreeDown && p.specialCauseFourOfFiveDown && (p.specialCauseTwoOfThreeDown = !1));
    const T = p.specialCauseTrendUp && (i.trendFavourableSideOnly ? E : !0), A = p.specialCauseTrendDown && (i.trendFavourableSideOnly ? L : !0), $ = p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || T, F = p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || A;
    let _ = !1;
    if (i.precedenceStrategy === "directional_first" && i.emergingDirectionGrace) {
      const N = i.specialCauseTrendPoints || 6;
      if (N > 1 && !(p.specialCauseTrendUp || p.specialCauseTrendDown)) {
        const k = N - 1, m = [];
        for (let M = h; M >= 0 && m.length < k; M--) {
          const C = c[M];
          !C.ghost && xe(C.value) && C.mean !== null && m.unshift(C);
        }
        if (m.length === k) {
          let M = !0;
          for (let C = 1; C < m.length && M; C++)
            n === "Up" ? m[C].value > m[C - 1].value || (M = !1) : n === "Down" && m[C].value < m[C - 1].value || (M = !1);
          _ = M;
        }
      }
    }
    if (i.precedenceStrategy === "directional_first") {
      let N = !1;
      i.trendSideGatingEnabled && (n === "Up" && p.specialCauseTrendUp && !p.specialCauseTrendDown && !E || n === "Down" && p.specialCauseTrendDown && !p.specialCauseTrendUp && !L) && (N = !0);
      const m = (n === "Up" ? $ : n === "Down" ? F : !1) || N, M = n === "Up" ? F : n === "Down" ? $ : !1;
      m && !M ? p.variationIcon = "improvement" : M && !m ? p.variationIcon = _ ? "neither" : "concern" : m && M ? p.variationIcon = _ || p.specialCauseTrendUp || p.specialCauseTrendDown ? "improvement" : "neither" : p.variationIcon = "neither";
    } else
      n === "Up" ? p.variationIcon = $ ? "improvement" : F ? "concern" : "neither" : n === "Down" ? p.variationIcon = F ? "improvement" : $ ? "concern" : "neither" : p.variationIcon = "neither";
    const v = $ || F;
    if (p.specialCauseImprovementValue = v && p.variationIcon === "improvement" ? p.value : null, p.specialCauseConcernValue = v && p.variationIcon === "concern" ? p.value : null, p.specialCauseNeitherValue = v && p.variationIcon === "neither" ? p.value : null, i.conflictPrecedenceMode === "sql_ranking_v2_6a" && p.specialCauseImprovementValue !== null && p.specialCauseConcernValue !== null) {
      const N = [];
      p.specialCauseSinglePointUp && N.push({
        id: "single_point",
        rank: 1,
        side: "up"
        /* Up */
      }), p.specialCauseSinglePointDown && N.push({
        id: "single_point",
        rank: 1,
        side: "down"
        /* Down */
      }), p.specialCauseTwoOfThreeUp && N.push({
        id: "two_sigma",
        rank: 2,
        side: "up"
        /* Up */
      }), p.specialCauseTwoOfThreeDown && N.push({
        id: "two_sigma",
        rank: 2,
        side: "down"
        /* Down */
      }), p.specialCauseShiftUp && N.push({
        id: "shift",
        rank: 3,
        side: "up"
        /* Up */
      }), p.specialCauseShiftDown && N.push({
        id: "shift",
        rank: 3,
        side: "down"
        /* Down */
      }), p.specialCauseTrendUp && N.push({
        id: "trend",
        rank: 4,
        side: "up"
        /* Up */
      }), p.specialCauseTrendDown && N.push({
        id: "trend",
        rank: 4,
        side: "down"
        /* Down */
      });
      const k = N.filter(
        (O) => O.side === "up"
        /* Up */
      ).reduce((O, B) => Math.max(O, B.rank), 0), m = N.filter(
        (O) => O.side === "down"
        /* Down */
      ).reduce((O, B) => Math.max(O, B.rank), 0);
      let M;
      k > m ? M = "Upwards" : m > k ? M = "Downwards" : M = "Same";
      const C = p.specialCauseImprovementValue, S = p.specialCauseConcernValue;
      M === "Upwards" ? n === "Up" ? p.specialCauseConcernValue = null : n === "Down" && (p.specialCauseImprovementValue = null) : M === "Downwards" ? n === "Up" ? p.specialCauseImprovementValue = null : n === "Down" && (p.specialCauseConcernValue = null) : p.variationIcon === "improvement" ? p.specialCauseConcernValue = null : p.variationIcon === "concern" ? p.specialCauseImprovementValue = null : p.specialCauseConcernValue = null, p.specialCauseImprovementValue !== null && p.specialCauseConcernValue === null ? p.variationIcon = "improvement" : p.specialCauseConcernValue !== null && p.specialCauseImprovementValue === null ? p.variationIcon = "concern" : p.specialCauseImprovementValue === null && p.specialCauseConcernValue === null && (p.variationIcon = "neither");
      const x = p.specialCauseImprovementValue !== null ? "up" : p.specialCauseConcernValue !== null ? "down" : void 0, I = x === "up" ? k : x === "down" ? m : Math.max(k, m), ne = N.find((O) => O.rank === I && (!x || O.side === x));
      p.conflictPrimeDirection = M, p.conflictResolved = !0, p.conflictResolvedRank = I || void 0, ne && (p.conflictResolvedByRuleId = ne.id), p.pruningMode = "conflict", p.originalSpecialCauseImprovementValue = C, p.originalSpecialCauseConcernValue = S;
    }
    if (xe(p.value) && p.mean !== null) {
      p.assuranceIcon = "none";
      const N = l[p.rowId - 1];
      if (xe(N.target)) {
        const k = N.target;
        i.assuranceCapabilityMode && xe(p.upperProcessLimit) && xe(p.lowerProcessLimit) ? n === "Up" ? p.lowerProcessLimit !== null && p.lowerProcessLimit > k ? p.assuranceIcon = "pass" : p.upperProcessLimit !== null && p.upperProcessLimit < k ? p.assuranceIcon = "fail" : p.assuranceIcon = "none" : n === "Down" ? p.upperProcessLimit !== null && p.upperProcessLimit < k ? p.assuranceIcon = "pass" : p.lowerProcessLimit !== null && p.lowerProcessLimit > k ? p.assuranceIcon = "fail" : p.assuranceIcon = "none" : p.assuranceIcon = "none" : n === "Down" ? p.assuranceIcon = p.value <= k ? "pass" : "fail" : n === "Up" ? p.assuranceIcon = p.value >= k ? "pass" : "fail" : p.assuranceIcon = "none";
      }
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !g) {
    const h = l.filter(
      (p) => !p.ghost && xe(p.value)
    ).length;
    u.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${h} non-ghost points available; minimum required is ${i.minimumPoints}. Limits and icons suppressed.`,
      context: { available: h, minimumRequired: i.minimumPoints }
    });
  }
  if (i.variationIconConflictWarning)
    for (const h of c)
      h.variationIcon === "improvement" && (h.specialCauseSinglePointUp || h.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && h.specialCauseFourOfFiveUp || h.specialCauseShiftUp || h.specialCauseTrendUp) && (h.specialCauseSinglePointDown || h.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && h.specialCauseFourOfFiveDown || h.specialCauseShiftDown || h.specialCauseTrendDown) && u.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${h.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: h.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const h = i.maximumPoints;
    let p = 0;
    for (const E of c)
      !E.ghost && xe(E.value) && p++, p > h && (E.mean = E.upperProcessLimit = E.lowerProcessLimit = null, E.upperTwoSigma = E.lowerTwoSigma = E.upperOneSigma = E.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === "XmR" || t === "G")) {
    const h = l.filter(
      (p) => !p.ghost && (p.value === null || p.value === void 0 || !xe(p.value))
    ).length;
    h && u.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${h} null/missing value(s) excluded from calculations.`,
      context: { nullCount: h }
    });
  }
  if (i.targetSuppressedWarning && (t === "T" || t === "G") && l.some((p) => xe(p.target)) && u.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === "T" || t === "G")) {
    const h = l.filter((p) => p.ghost).length;
    h && u.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${h} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: h }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(D).forEach(([h, p]) => {
    p < i.minimumPointsPartition && u.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${h} has only ${p} non-ghost point(s); below recommended ${i.minimumPointsPartition}.`,
      context: {
        partitionId: Number(h),
        count: p,
        minimum: i.minimumPointsPartition
      }
    });
  }), i.baselineSpecialCauseWarning) {
    const h = [];
    c.forEach((p) => {
      l[p.rowId - 1].baseline && (p.specialCauseSinglePointUp || p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeUp || p.specialCauseTwoOfThreeDown || p.specialCauseFourOfFiveUp || p.specialCauseFourOfFiveDown || p.specialCauseShiftUp || p.specialCauseShiftDown || p.specialCauseTrendUp || p.specialCauseTrendDown) && h.push(p.rowId);
    }), h.length && u.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${h.join(", ")}.`,
      context: { rows: h }
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
    const h = c, p = i.baselineSuggestStabilityPoints, E = i.baselineSuggestMinGap, L = i.baselineSuggestMinDeltaSigma, T = i.baselineSuggestScoreThreshold, A = [];
    let $ = 0;
    for (let F = 0; F < h.length; F++) {
      let _ = function(m) {
        return !!v[m] && !N?.[m];
      };
      const v = h[F];
      F > 0 && h[F - 1].partitionId !== v.partitionId && ($ = F);
      const N = h[F - 1], k = [];
      (_("specialCauseShiftUp") || _("specialCauseShiftDown")) && k.push({ reason: "shift", index: F }), (_("specialCauseTrendUp") || _("specialCauseTrendDown")) && k.push({ reason: "trend", index: F }), (_("specialCauseSinglePointUp") || _("specialCauseSinglePointDown")) && k.push({ reason: "point", index: F });
      for (const m of k) {
        if (m.index - $ < E) continue;
        const M = Math.max(0, m.index - p), C = m.index - 1;
        if (C - M + 1 < p) continue;
        const S = m.index, x = m.index + p - 1;
        if (x >= h.length) continue;
        const I = h.slice(M, C + 1).map((ae) => ae.value).filter(xe), ne = h.slice(S, x + 1).map((ae) => ae.value).filter(xe);
        if (I.length < p || ne.length < p) continue;
        const O = h[m.index];
        let B = null;
        if (xe(O.upperProcessLimit) && xe(O.mean)) {
          const ae = O.upperProcessLimit - O.mean;
          ae > 0 && (B = ae / 3);
        }
        if (!B || B <= 0) continue;
        const W = pt(I), R = pt(ne), te = R - W;
        if (Math.abs(te) < L * B) continue;
        const H = h.slice(S, x + 1).filter(
          (ae) => ae.variationIcon === "concern"
          /* Concern */
        ).length;
        if (H > 1) continue;
        const ee = (ae) => {
          const z = pt(ae);
          return ae.length ? ae.reduce((ce, se) => ce + (se - z) * (se - z), 0) / ae.length : 0;
        }, J = ee(I), Y = ee(ne);
        let P = m.reason === "shift" ? 90 : m.reason === "trend" ? 70 : 60;
        if (Y < J && (P += 10), P -= H * 15, P < T) continue;
        const G = A.find((ae) => ae.index === m.index);
        if (G) {
          const ae = (z) => z === "shift" ? 3 : z === "trend" ? 2 : 1;
          (ae(m.reason) > ae(G.reason) || P > G.score) && (G.reason = m.reason, G.score = P, G.deltaMean = te, G.oldMean = W, G.newMean = R, G.window = [S, x]);
        } else
          A.push({
            index: m.index,
            reason: m.reason,
            score: P,
            deltaMean: te,
            oldMean: W,
            newMean: R,
            window: [S, x]
          });
      }
      F > 0 && h[F - 1].partitionId !== h[F].partitionId && ($ = F);
    }
    A.sort((F, _) => F.index - _.index), w = A;
  }
  return { rows: c, warnings: u, ...w ? { suggestedBaselines: w } : {} };
}
const vs = {
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
function _s(e) {
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
function ws(e) {
  switch (e) {
    case Be.Improvement:
      return "Improvement signal";
    case Be.Concern:
      return "Concern signal";
    case Be.Neither:
      return "Common cause variation";
    case Be.None:
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
  const d = zt(), c = Ht(), [u, f] = X.useState(null), [g, y] = X.useState(!1), D = X.useRef(null);
  X.useEffect(() => {
    if (d) {
      if (d.focused && (f(d.focused), D.current && (cancelAnimationFrame(D.current), D.current = null)), !d.focused && !g) {
        const he = requestAnimationFrame(() => {
          f(null), D.current = null;
        });
        D.current = he;
      }
      return () => {
        D.current && (cancelAnimationFrame(D.current), D.current = null);
      };
    }
  }, [d, d?.focused, g]);
  const w = d && (d.focused || (g ? u : null) || u), [h, p] = X.useState(!1);
  X.useEffect(() => {
    const he = requestAnimationFrame(() => p(!0));
    return () => cancelAnimationFrame(he);
  }, [w?.index]);
  const E = c?.innerWidth ?? 0, L = c?.innerHeight ?? 0, T = w ? Math.min(Math.max(w.clientX, 0), E) : 0, A = w ? Math.min(Math.max(w.clientY, 0), L) : 0, F = c.ref?.current;
  if (!w)
    return null;
  const _ = e?.[w.index], N = _s(_).map((he) => ({ id: he, label: vs[he].tooltip })), k = w.x instanceof Date ? w.x : new Date(w.x), m = o ? o(k) : k.toDateString(), M = s ? `${s}` : "", C = a || M ? `${w.y}${M ? "" + M : " "}${a ? " " + a : ""}` : `${w.y}`, S = ws(_?.variationIcon), x = gp(_?.assuranceIcon), I = xp(
    t.mean ?? null,
    t.sigma,
    w.y
  ), ne = n ? n(w.index, { x: w.x, y: w.y }) : void 0, O = S || x || I, B = _?.specialCauseTrendUp || _?.specialCauseTrendDown, W = _?.variationIcon === Be.Neither && B, R = l && W ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, te = N.length > 0, b = _?.primeDirection, H = _?.primeRuleId, ee = i && _?.variationIcon === Be.Neither && te, J = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", Y = Vi(_?.variationIcon), P = 6.2, ae = [
    ne || "",
    `${m} • ${C}`
  ].filter(Boolean).reduce(
    (he, Z) => Math.max(he, Z.length * P + 32),
    0
  ), z = 200, ce = 440, se = Math.min(ce, Math.max(z, ae));
  let le = T + 12, be = (c.margin?.top ?? 0) + A + 16;
  le + se > E && (le = T - -60 - se), le < 0 && (le = Math.max(0, E - se));
  const Te = w ? `spc-tooltip-${w.index}` : "spc-tooltip", Se = F ? tc(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: Te,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (h ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: le,
          top: be,
          width: se,
          maxWidth: ce,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": h ? "false" : "true",
        "data-floating": !0,
        "data-placement": le + se + 12 > E ? "left" : "right",
        onPointerEnter: () => {
          y(!0), D.current && (cancelAnimationFrame(D.current), D.current = null);
        },
        onPointerLeave: () => {
          if (y(!1), !d?.focused) {
            const he = requestAnimationFrame(() => {
              f(null), D.current = null;
            });
            D.current = he;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: m })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: C })
          ] }),
          O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: S?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : S?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : ee ? /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : S ? /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          x && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const he = x.toLowerCase(), K = !(he.includes("not met") || he.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(he);
              return /* @__PURE__ */ r.jsx(
                Ge,
                {
                  text: x,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${K ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${x}`
                }
              );
            })() })
          ] }),
          I && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Ge,
              {
                text: (() => {
                  const he = I.toLowerCase();
                  return he.startsWith("within 1") ? "≤1σ" : he.startsWith("1–2") ? "1–2σ" : he.startsWith("2–3") ? "2–3σ" : he.startsWith(">3") ? ">3σ" : I;
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
          te && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: N.map(({ id: he, label: Z }) => {
                  const K = String(he), U = K === La.TrendIncreasing || K === La.TrendDecreasing ? "fdp-spc-tag--trend" : ee ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Ge,
                    {
                      text: Z,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${U}`,
                      "data-rule-id": K
                    },
                    K
                  );
                })
              }
            ),
            b && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const he = ee ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", Z = `${b}${H ? ` (${H})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Ge,
                  {
                    text: Z,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${he}`,
                    "aria-label": `Prime direction ${b}${H ? ` via ${H}` : ""}`
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
            cx: T,
            cy: A,
            r: 7,
            fill: "none",
            stroke: J,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: T,
            cy: A,
            r: 5,
            fill: "#000",
            stroke: J,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: T,
            cy: A,
            r: 2.5,
            fill: Y,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Se
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
var Ue = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(je || {}), nt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(nt || {}), Ie = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ie || {});
const _p = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [n, a, s].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, Ss = {
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
Object.values(Ss).forEach((e) => {
  e.text || (e.text = _p(e.hex));
});
const ks = (e) => Ss[e], zr = (e) => Ss[e].judgement || "none", No = {
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
  return e === "common_cause" ? n = No.common : n = No.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
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
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Ye.Up ? Ue.HigherIsBetter : i.improvementDirection === Ye.Down ? Ue.LowerIsBetter : Ue.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    switch (i.variationIcon) {
      case Be.Improvement:
        d = Ie.SpecialCauseImproving;
        break;
      case Be.Concern:
        d = Ie.SpecialCauseDeteriorating;
        break;
      case Be.Neither:
        d = i.specialCauseNeutral ? Ie.SpecialCauseNoJudgement : Ie.CommonCause;
        break;
      case Be.None:
      default:
        d = Ie.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (d === Ie.SpecialCauseImproving ? c = l === Ue.LowerIsBetter ? je.Lower : je.Higher : d === Ie.SpecialCauseDeteriorating ? c = l === Ue.LowerIsBetter ? je.Higher : je.Lower : d === Ie.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = je.Higher : i.lowSideSignal && !i.highSideSignal ? c = je.Lower : c = je.Higher : c = je.Higher), { state: d, direction: c, polarity: l ?? Ue.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ie.SpecialCauseImproving || i.state === Ie.SpecialCauseDeteriorating) && i.polarity && (i.state === Ie.SpecialCauseImproving ? l = i.polarity === Ue.LowerIsBetter ? je.Lower : je.Higher : l = i.polarity === Ue.LowerIsBetter ? je.Higher : je.Lower), l || (i.state === Ie.SpecialCauseImproving ? l = je.Higher : i.state === Ie.SpecialCauseDeteriorating ? l = je.Lower : l = je.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ue.ContextDependent
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
  return n.judgement === nt.Improving ? o = n.polarity === Ue.LowerIsBetter ? je.Lower : je.Higher : n.judgement === nt.Deteriorating ? o = n.polarity === Ue.LowerIsBetter ? je.Higher : je.Lower : o = n.trend ?? je.Higher, { state: s, direction: o, polarity: n.polarity };
};
function Sp(e, t) {
  const { state: n, direction: a, polarity: s } = Xi(e), o = zr(n), i = a === je.Higher ? "above" : "below", l = a === je.Higher ? "upwards" : "downwards", d = (() => {
    switch (s) {
      case Ue.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Ue.LowerIsBetter:
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
] }), Or = ({
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
  const f = Gn(), g = Gn(), {
    start: y,
    mid: D,
    end: w,
    triStart: h,
    triMid: p,
    triEnd: E
  } = qi(), { state: L, direction: T, polarity: A } = $e(
    () => Xi(e),
    [e]
  ), $ = $e(() => ks(L), [L]), F = $e(() => zr(L), [L]), _ = F === nt.Improving || F === nt.Deteriorating;
  let v = "";
  a && _ && (d === "polarity" ? A === Ue.HigherIsBetter ? v = "H" : A === Ue.LowerIsBetter ? v = "L" : v = "" : v = T === je.Higher ? "H" : "L"), c !== void 0 && (v = c);
  const N = L !== Ie.CommonCause, k = L === Ie.SpecialCauseNoJudgement, m = ot("common-cause", "#A6A6A6"), M = N ? $.hex : m, C = $e(
    () => wp(L, T),
    [L, T]
  ), S = n || `${$.label}${v ? T === je.Higher ? " – Higher" : " – Lower" : ""}`, x = Sp(
    e
  );
  if (i === "triangleWithRun") {
    const W = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], R = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let te = null;
    L === Ie.SpecialCauseImproving || L === Ie.SpecialCauseDeteriorating ? te = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (T === je.Higher ? W : R).map((ce) => ce.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 6,
        transform: T === je.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : L === Ie.SpecialCauseNoJudgement && (te = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: T === je.Higher ? W.map((ce) => ce.join(",")).join(" ") : R.map((ce) => ce.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 6,
        transform: T === je.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const b = Math.max(0, Math.min(5, Math.floor(l || 0))), H = L === Ie.CommonCause ? 160 : T === je.Higher ? 220 : 70, ee = 10, J = 26, Y = 150 - 2 * J, P = L === Ie.SpecialCauseImproving ? ot("improvement", "#00B0F0") : L === Ie.SpecialCauseDeteriorating ? ot("concern", "#E46C0A") : m, G = Array.from({ length: 5 }).map((ce, se) => {
      const de = (L === Ie.SpecialCauseImproving || L === Ie.SpecialCauseDeteriorating) && se >= 5 - b ? P : m;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: Y + se * J,
          cy: H,
          r: ee,
          fill: de,
          stroke: de,
          strokeWidth: 1
        },
        se
      );
    }), ae = xa(
      $.hex,
      f,
      g,
      s,
      o,
      [
        { offset: "0%", opacity: h },
        { offset: "75%", opacity: p },
        { offset: "100%", opacity: E }
      ]
    ), z = L === Ie.CommonCause || T === je.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": S,
        "aria-description": x,
        ...u,
        children: [
          ae,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${g})` : "#ffffff",
              ...s ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
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
          /* @__PURE__ */ r.jsxs("g", { transform: z, children: [
            te,
            v && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: T === je.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: v
              }
            ),
            G
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const W = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], R = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], te = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let b = null;
    L === Ie.SpecialCauseImproving || L === Ie.SpecialCauseDeteriorating ? b = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (T === je.Higher ? W : R).map((ee) => ee.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 8,
        transform: T === je.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : L === Ie.SpecialCauseNoJudgement ? b = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: T === je.Higher ? W.map((ee) => ee.join(",")).join(" ") : R.map((ee) => ee.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 8,
        transform: T === je.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : L === Ie.CommonCause && (b = /* @__PURE__ */ r.jsx(
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
    const H = xa(
      $.hex,
      f,
      g,
      s,
      o,
      [
        { offset: "0%", opacity: h },
        { offset: "65%", opacity: p },
        { offset: "100%", opacity: E }
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
        "aria-description": x,
        ...u,
        children: [
          H,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${g})` : "#ffffff",
              ...s ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
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
          b,
          v && (L === Ie.SpecialCauseImproving || L === Ie.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: T === je.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: v
            }
          )
        ]
      }
    );
  }
  const I = xa(
    $.hex,
    f,
    g,
    s,
    o,
    [
      { offset: "0%", opacity: y },
      { offset: "65%", opacity: D },
      { offset: "100%", opacity: w }
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
      "aria-description": x,
      ...u,
      children: [
        I,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${g})` : "#ffffff",
            ...s ? { filter: `url(#${f})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
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
        v && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: $.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: T === je.Lower ? "340" : "155", children: v })
          }
        ),
        k ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: $.hex,
            ...T === je.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          C.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: m,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${C.map((ne) => `${ne.cx} ${ne.cy}`).join(" L ")}`
            }
          ),
          C.map((ne, O) => {
            const W = O >= C.length - 2 && N ? M : m, R = W;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: R,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: W,
                cx: ne.cx,
                cy: ne.cy,
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
Or.displayName = "SPCVariationIcon";
const Wr = ({
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
  const c = Gn(), u = Gn(), { start: f, mid: g, end: y } = qi(), D = s || yp[e], w = (i || vp[e]).slice(0, 2), h = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": h,
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
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: D, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: D, stopOpacity: parseFloat(g) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(y) })
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
            fill: D,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: w })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === Rt.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: D,
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
              stroke: D,
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
              stroke: D,
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
Wr.displayName = "SPCAssuranceIcon";
function kp(e, t) {
  const n = hp(e), a = n.upMax, s = n.downMax, o = n.upRules.map((w) => ({ id: w, rank: cr[w] })), i = n.downRules.map((w) => ({ id: w, rank: cr[w] }));
  let l;
  a > s ? l = sn.Upwards : s > a ? l = sn.Downwards : l = sn.Same;
  const d = a > 0, c = s > 0, u = t === Ye.Up && d || t === Ye.Down && c ? e.value : null, f = t === Ye.Up && c || t === Ye.Down && d ? e.value : null;
  e.sqlOriginalImprovementValue = u, e.sqlOriginalConcernValue = f, u !== null && f !== null && (e.sqlPruned = !0, l === sn.Upwards ? t === Ye.Up || t === Ye.Down && (e.sqlOriginalImprovementValue = null) : l === sn.Downwards ? t === Ye.Up ? e.sqlOriginalImprovementValue = null : Ye.Down : u !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Be.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = Be.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Be.Neither : e.variationIcon = Be.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = zi.Sql;
  const D = ((e.variationIcon === Be.Concern ? t === Ye.Up ? an.Down : an.Up : t === Ye.Up ? an.Up : an.Down) === an.Up ? o : i).reduce(
    (w, h) => !w || h.rank > w.rank ? h : w,
    void 0
  );
  D && (e.primeRuleId = D.id);
}
function Cp(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: s = {},
    disableTrendSideGating: o
  } = e, i = ys({
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: {
      ...s,
      trendSideGatingEnabled: o ? !1 : s.trendSideGatingEnabled ?? !0,
      conflictPrecedenceMode: Hi.None
    }
  }), l = i.rows.map((d) => ({ ...d }));
  for (const d of l)
    kp(d, n);
  return { rows: l, warnings: i.warnings };
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
  metricImprovement: u = Ye.Neither,
  enableRules: f = !0,
  showIcons: g = !1,
  showEmbeddedIcon: y = !0,
  embeddedIconVariant: D = "classic",
  embeddedIconRunLength: w,
  targets: h,
  baselines: p,
  ghosts: E,
  settings: L,
  narrationContext: T,
  gradientSequences: A = !1,
  sequenceTransition: $ = "slope",
  processLineWidth: F = 2,
  showWarningsPanel: _ = !1,
  warningsFilter: v,
  enableNeutralNoJudgement: N = !0,
  showTrendGatingExplanation: k = !0,
  enableTrendSideGating: m,
  disableTrendSideGating: M,
  source: C,
  alwaysShowZeroY: S = !1,
  alwaysShowHundredY: x = !1,
  percentScale: I = !1,
  useSqlCompatEngine: ne = !1
}) => {
  const O = X.useCallback(
    (U) => String(U).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((V) => V.length ? V[0].toUpperCase() + V.slice(1) : V).join(" "),
    []
  ), B = X.useCallback(
    (U) => String(U).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((j) => j.length ? j[0].toUpperCase() + j.slice(1) : j).join(" "),
    []
  ), W = m ?? (M !== void 0 ? !M : !1);
  process.env.NODE_ENV !== "production" && M !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' is deprecated. Use 'enableTrendSideGating' instead (inverted semantics)."
  );
  const R = X.useMemo(() => {
    const U = e.map((j, V) => ({
      x: j.x,
      value: j.y,
      target: h?.[V] ?? void 0,
      baseline: p?.[V] ?? void 0,
      ghost: E?.[V] ?? void 0
    }));
    try {
      const j = L ? { ...L, trendSideGatingEnabled: L.trendSideGatingEnabled ?? W } : { trendSideGatingEnabled: W };
      return ne ? Cp({
        chartType: c,
        metricImprovement: u,
        data: U,
        disableTrendSideGating: j.trendSideGatingEnabled === !1,
        settings: j
      }) : ys({ chartType: c, metricImprovement: u, data: U, settings: j });
    } catch {
      return null;
    }
  }, [
    e,
    h,
    p,
    E,
    c,
    u,
    L,
    m,
    M,
    ne
  ]), te = R?.rows.slice().reverse().find((U) => U.mean != null), b = te?.mean ?? null, H = R?.warnings || [], ee = X.useMemo(() => H.length ? v ? H.filter((U) => !(v.severities && U.severity && !v.severities.includes(U.severity) || v.categories && U.category && !v.categories.includes(U.category) || v.codes && !v.codes.includes(U.code))) : H : [], [H, v]), [J, Y] = X.useState(""), P = X.useRef("");
  X.useEffect(() => {
    if (!_) {
      P.current !== "" && (P.current = "", Y(""));
      return;
    }
    const U = ee.length;
    if (!U) {
      const q = "Diagnostics: no warnings.";
      q !== P.current && (P.current = q, Y(q));
      return;
    }
    const j = {
      error: ee.filter(
        (q) => q.severity === Pt.Error
      ).length,
      warning: ee.filter(
        (q) => q.severity === Pt.Warning
      ).length,
      info: ee.filter(
        (q) => q.severity === Pt.Info
      ).length
    }, V = [];
    j.error && V.push(
      `${j.error} error${j.error === 1 ? "" : "s"}`
    ), j.warning && V.push(
      `${j.warning} warning${j.warning === 1 ? "" : "s"}`
    ), j.info && V.push(`${j.info} info`);
    const oe = `Diagnostics updated: ${U} warning${U === 1 ? "" : "s"} (${V.join(", ")}).`;
    oe !== P.current && (P.current = oe, Y(oe));
  }, [_, ee]);
  const G = te?.upperProcessLimit ?? null, ae = te?.lowerProcessLimit ?? null, z = te?.upperOneSigma ?? null, ce = te?.lowerOneSigma ?? null, se = te?.upperTwoSigma ?? null, le = te?.lowerTwoSigma ?? null, de = b != null && z != null ? Math.abs(z - b) : 0, be = X.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), Te = X.useMemo(() => {
    if (I) {
      const q = e.map((_e) => _e.y), Q = Math.max(100, ...q), ie = Math.min(0, ...q);
      return [ie < 0 ? ie : 0, Q > 100 ? Q : 100];
    }
    const j = [...e.map((q) => q.y)];
    if ([b, G, ae, z, ce, se, le].forEach((q) => {
      q != null && j.push(q);
    }), h && h.forEach((q) => {
      typeof q == "number" && !isNaN(q) && j.push(q);
    }), !j.length) return;
    let V = Math.min(...j), oe = Math.max(...j);
    return S && (V = Math.min(0, V)), x && (oe = Math.max(100, oe)), [V, oe];
  }, [e, b, G, ae, z, ce, se, le, h, S, x, I]), Se = X.useMemo(() => {
    if (!(l || T?.measureUnit) && e.length)
      return e.every((U) => U.y >= 0 && U.y <= 1) ? "%" : void 0;
  }, [l, T?.measureUnit, e]), he = l ?? T?.measureUnit ?? Se, Z = X.useMemo(() => he ? { ...T || {}, measureUnit: he } : T, [T, he]), K = X.useMemo(() => {
    if (!R?.rows) return [];
    const U = [];
    for (let j = 1; j < R.rows.length; j++)
      R.rows[j].partitionId !== R.rows[j - 1].partitionId && U.push(j);
    return U;
  }, [R?.rows]), re = X.useMemo(() => {
    if (!y || !R?.rows?.length) return null;
    const U = R.rows, j = L?.minimumPoints ?? 13;
    if (U.filter(
      (we) => !we.ghost && we.value != null
    ).length < j) return null;
    let oe = -1;
    for (let we = U.length - 1; we >= 0; we--) {
      const Le = U[we];
      if (Le && Le.value != null && !Le.ghost) {
        oe = we;
        break;
      }
    }
    if (oe === -1) return null;
    const q = U[oe], Q = q.variationIcon, ie = q.assuranceIcon, _e = Q === Be.Neither && !!q.specialCauseNeitherValue, ke = ie === Bt.Pass ? Rt.Pass : ie === Bt.Fail ? Rt.Fail : Rt.Uncertain;
    let ye;
    if (Q === Be.None) {
      const we = q.specialCauseSinglePointUp, Le = q.specialCauseSinglePointDown;
      u === Ye.Up ? we ? ye = je.Higher : Le && (ye = je.Lower) : u === Ye.Down ? Le ? ye = je.Lower : we && (ye = je.Higher) : ye = je.Higher;
    } else if (Q === Be.Neither && _e) {
      const we = q.specialCauseSinglePointUp || q.specialCauseTwoOfThreeUp || q.specialCauseFourOfFiveUp || q.specialCauseShiftUp || q.specialCauseTrendUp, Le = q.specialCauseSinglePointDown || q.specialCauseTwoOfThreeDown || q.specialCauseFourOfFiveDown || q.specialCauseShiftDown || q.specialCauseTrendDown;
      we && !Le ? ye = je.Higher : Le && !we ? ye = je.Lower : ye = je.Higher;
    }
    let Ce;
    u === Ye.Up ? Ce = Ue.HigherIsBetter : u === Ye.Down ? Ce = Ue.LowerIsBetter : Ce = Ue.ContextDependent;
    const pe = 80;
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(Q),
              "data-trend-raw": ye ? String(ye) : "none",
              "data-trend": ye ? String(ye) : "none",
              "data-polarity": String(Ce ?? "unknown"),
              style: { width: pe, height: pe },
              children: /* @__PURE__ */ r.jsx(
                Or,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: Q,
                    improvementDirection: u,
                    polarity: Ce,
                    specialCauseNeutral: _e,
                    highSideSignal: q.specialCauseSinglePointUp || q.specialCauseTwoOfThreeUp || q.specialCauseFourOfFiveUp || q.specialCauseShiftUp || q.specialCauseTrendUp,
                    lowSideSignal: q.specialCauseSinglePointDown || q.specialCauseTwoOfThreeDown || q.specialCauseFourOfFiveDown || q.specialCauseShiftDown || q.specialCauseTrendDown,
                    ...ye ? { trend: ye } : {}
                  },
                  letterMode: u === Ye.Neither ? "direction" : "polarity",
                  size: pe,
                  variant: D,
                  runLength: D === "triangleWithRun" ? w : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(ie),
              style: { width: pe, height: pe },
              children: /* @__PURE__ */ r.jsx(
                Wr,
                {
                  status: ke,
                  size: pe,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${oe}`
    );
  }, [
    y,
    R?.rows,
    u,
    L?.minimumPoints,
    h,
    D,
    w
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        y && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: re
          }
        ),
        /* @__PURE__ */ r.jsx(
          gh,
          {
            height: n,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(xh, { series: be, yDomain: Te, children: /* @__PURE__ */ r.jsx(
              Tp,
              {
                series: be,
                showPoints: s,
                announceFocus: o,
                limits: { mean: b, ucl: G, lcl: ae, sigma: de, onePos: z, oneNeg: ce, twoPos: se, twoNeg: le },
                showZones: a,
                highlightOutOfControl: d,
                engineRows: R?.rows || null,
                enableRules: f,
                showIcons: g,
                narrationContext: Z,
                metricImprovement: u,
                gradientSequences: A,
                sequenceTransition: $,
                processLineWidth: F,
                effectiveUnit: he,
                partitionMarkers: K,
                ariaLabel: t,
                enableNeutralNoJudgement: N,
                showTrendGatingExplanation: k
              }
            ) })
          }
        ),
        C && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof C == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          C
        ] }) : C }),
        _ && J && /* @__PURE__ */ r.jsx(
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
            children: J
          }
        ),
        _ && ee.length > 0 && /* @__PURE__ */ r.jsxs(
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
                  rows: ee.map((U) => {
                    let j = "grey";
                    return U.severity === Pt.Error ? j = "red" : U.severity === Pt.Warning ? j = "orange" : U.severity === Pt.Info && (j = "blue"), [
                      {
                        node: /* @__PURE__ */ r.jsx(
                          Ge,
                          {
                            color: j,
                            text: (U.severity ? String(U.severity) : "Info").replace(
                              /^[a-z]/,
                              (V) => V.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: U.category ? /* @__PURE__ */ r.jsx(
                          Ge,
                          {
                            color: "purple",
                            text: B(U.category)
                          }
                        ) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ r.jsx(Ge, { color: "grey", text: O(U.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ r.jsx("span", { children: U.message }),
                          U.context && Object.keys(U.context).length > 0 && /* @__PURE__ */ r.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(U.context, null, 2) })
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
  sequenceTransition: f,
  processLineWidth: g,
  effectiveUnit: y,
  partitionMarkers: D,
  ariaLabel: w,
  enableNeutralNoJudgement: h = !0,
  showTrendGatingExplanation: p = !0
}) => {
  const E = Jt(), L = Ht();
  if (!E) return null;
  const { xScale: T, yScale: A } = E, $ = X.useRef(
    "spc-seq-" + ++jp
  ), F = zt(), _ = e[0]?.data || [], v = X.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const b = /* @__PURE__ */ new Set();
    return _.forEach((H, ee) => {
      (a.ucl != null && H.y > a.ucl || a.lcl != null && H.y < a.lcl) && b.add(ee);
    }), b;
  }, [_, a.ucl, a.lcl]), N = X.useMemo(() => {
    if (!i) return null;
    const b = {};
    return i.forEach((H, ee) => {
      if (H.value == null || H.ghost) return;
      const J = H.specialCauseSinglePointUp || H.specialCauseSinglePointDown || H.specialCauseTwoOfThreeUp || H.specialCauseTwoOfThreeDown || H.specialCauseFourOfFiveUp || H.specialCauseFourOfFiveDown || H.specialCauseShiftUp || H.specialCauseShiftDown || H.specialCauseTrendUp || H.specialCauseTrendDown;
      b[ee] = {
        variation: H.variationIcon,
        assurance: H.assuranceIcon,
        special: J,
        concern: H.variationIcon === Be.Concern,
        improvement: H.variationIcon === Be.Improvement
      };
    }), b;
  }, [i]), k = X.useMemo(() => {
    if (!i || !i.length) return null;
    const b = [];
    for (const ee of i)
      typeof ee.target == "number" && !isNaN(ee.target) && b.push(ee.target);
    if (!b.length) return null;
    const H = b[0];
    return b.every((ee) => ee === H) ? H : null;
  }, [i]), m = X.useMemo(() => {
    if (!N || !_.length)
      return [];
    const b = _.map((ee, J) => {
      const Y = N?.[J];
      return Y?.concern ? "concern" : Y?.improvement ? "improvement" : h && Y?.special && Y.variation === Be.Neither ? "noJudgement" : "common";
    });
    return w?.includes("Rule Clash") && console.log(
      `[${w}] Raw categories:`,
      b.map((ee, J) => `${J}:${ee}(${_[J].y})`).join(", ")
    ), b;
  }, [N, _, w, h]), M = X.useMemo(() => {
    if (!u || !m.length)
      return [];
    const b = [...m];
    let H = 0;
    for (; H < b.length; ) {
      const Y = b[H];
      let P = H + 1;
      for (; P < b.length && b[P] === Y; ) P++;
      P - H === 1 && Y !== "common" && (b[H] = "common"), H = P;
    }
    const ee = [];
    if (b.length) {
      let Y = 0;
      for (let P = 1; P <= b.length; P++)
        if (P === b.length || b[P] !== b[Y]) {
          const G = b[Y], ae = P - 1, z = ae - Y + 1;
          (G === "common" || z >= 2) && ee.push({ start: Y, end: ae, category: G }), Y = P;
        }
    }
    return w?.includes("Rule Clash") && console.log(
      `[${w}] Final sequences:`,
      ee.map((Y) => `${Y.start}-${Y.end}:${Y.category}`).join(", ")
    ), ee;
  }, [u, m, w]), C = X.useMemo(
    () => _.map((b) => T(b.x instanceof Date ? b.x : new Date(b.x))),
    [_, T]
  ), S = T.range()[1], x = X.useMemo(() => {
    if (!i || !i.length) return null;
    const b = (H) => {
      const ee = [];
      let J = null, Y = null;
      for (let P = 0; P < i.length; P++) {
        const G = i[P], ae = typeof G[H] == "number" ? G[H] : null;
        if (ae == null || isNaN(ae)) {
          J !== null && Y != null && (ee.push({
            x1: C[J],
            x2: C[P - 1],
            y: A(Y)
          }), J = null, Y = null);
          continue;
        }
        if (J === null) {
          J = P, Y = ae;
          continue;
        }
        Y != null && Math.abs(ae - Y) <= 1e-9 || (Y != null && ee.push({
          x1: C[J],
          x2: C[P - 1],
          y: A(Y)
        }), J = P, Y = ae);
      }
      return J !== null && Y != null && ee.push({
        x1: C[J],
        x2: C[i.length - 1],
        y: A(Y)
      }), ee;
    };
    return {
      mean: b("mean"),
      ucl: b("upperProcessLimit"),
      lcl: b("lowerProcessLimit"),
      onePos: b("upperOneSigma"),
      oneNeg: b("lowerOneSigma"),
      twoPos: b("upperTwoSigma"),
      twoNeg: b("lowerTwoSigma")
    };
  }, [i, C, A]), I = X.useMemo(() => M.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs("linearGradient", { id: `${$.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    M.map((b, H) => {
      const ee = `${$.current}-grad-${H}`;
      let J, Y = 0.28, P = 0.12, G = 0.045;
      switch (b.category) {
        case "concern":
          J = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", Y = 0.28, P = 0.12, G = 0.045;
          break;
        case "improvement":
          J = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", Y = 0.26, P = 0.11, G = 0.045;
          break;
        case "noJudgement":
          J = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", Y = 0.26, P = 0.11, G = 0.045;
          break;
        default:
          J = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: ee, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: J, stopOpacity: Y }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: J, stopOpacity: P }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: J, stopOpacity: G })
      ] }, ee);
    })
  ] }) : null, [M]), ne = X.useMemo(() => {
    if (!M.length) return null;
    const [b] = A.domain(), H = A(b), ee = M.map((J, Y) => {
      const { start: P, end: G, category: ae } = J;
      if (P < 0 || G >= C.length || P > G)
        return null;
      const z = C[P], ce = C[G];
      let se = "";
      if (ae === "common") {
        const le = Y > 0 ? M[Y - 1] : null, de = Y < M.length - 1 ? M[Y + 1] : null, be = le ? C[le.end] : 0, Te = le ? A(_[le.end].y) : H, Se = de ? C[de.start] : S, he = de ? A(_[de.start].y) : H;
        se = `M ${be} ${H}`, se += ` L ${be} ${Te}`;
        for (let Z = P; Z <= G; Z++)
          se += ` L ${C[Z]} ${A(_[Z].y)}`;
        se += ` L ${Se} ${he}`, se += ` L ${Se} ${H} Z`;
      } else {
        const le = Y > 0 ? M[Y - 1] : null, de = Y < M.length - 1 ? M[Y + 1] : null, be = le && le.category !== "common", Te = de && de.category !== "common", Se = A(_[P].y), he = A(_[G].y);
        let Z = z, K = ce;
        if (be) {
          const re = C[le.end], U = A(_[le.end].y), j = _[P].y - _[le.end].y;
          f === "slope" && j > 0 ? (se = `M ${re} ${U} L ${z} ${Se}`, Z = re) : (se = `M ${z} ${H} L ${z} ${Se}`, Z = z);
        } else
          se = `M ${z} ${H} L ${z} ${Se}`;
        for (let re = P + 1; re <= G; re++)
          se += ` L ${C[re]} ${A(_[re].y)}`;
        if (se += ` L ${ce} ${he}`, Te) {
          const re = C[de.start], U = A(_[de.start].y), j = _[de.start].y - _[G].y;
          (f === "slope" && j <= 0 || f === "extend") && (se += ` L ${re} ${U}`, K = re);
        }
        if (se += ` L ${K} ${H}`, se += ` L ${Z} ${H} Z`, f === "neutral" && be) {
          const re = C[le.end], U = A(_[le.end].y), j = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${re} ${H} L ${re} ${U} L ${z} ${Se} L ${z} ${H} Z`,
              fill: `url(#${$.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${Y}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            j,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: se,
                fill: `url(#${$.current}-grad-${Y})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${Y}`
            )
          ] }, `seq-group-${Y}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: se,
          fill: `url(#${$.current}-grad-${Y})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${Y}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: ee });
  }, [M, C, S, A, _, f]), O = X.useMemo(() => {
    if (!c?.timeframe && _.length >= 2) {
      const b = _.map((G) => G.x instanceof Date ? G.x : new Date(G.x)), H = new Date(Math.min(...b.map((G) => G.getTime()))), ee = new Date(Math.max(...b.map((G) => G.getTime()))), J = Math.round((ee.getTime() - H.getTime()) / 864e5) || 0;
      if (J < 14)
        return `The chart shows a timeframe of ${J + 1} days`;
      const Y = Math.round(J / 7);
      return Y < 20 ? `The chart shows a timeframe of ${Y} weeks` : `The chart shows a timeframe of ${(ee.getFullYear() - H.getFullYear()) * 12 + (ee.getMonth() - H.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, _]), B = (b) => {
    const H = b % 10, ee = b % 100;
    return H === 1 && ee !== 11 ? `${b}st` : H === 2 && ee !== 12 ? `${b}nd` : H === 3 && ee !== 13 ? `${b}rd` : `${b}th`;
  }, W = (b) => `${B(b.getDate())} ${b.toLocaleString("en-GB", { month: "long" })}, ${b.getFullYear()}`, R = X.useCallback(
    ({
      index: b,
      x: H,
      y: ee
    }) => {
      const J = i?.[b], Y = H instanceof Date ? H : new Date(H), P = W(Y), G = c?.measureUnit ? ` ${c.measureUnit}` : "", ae = c?.measureName ? ` ${c.measureName}` : "";
      if (!J)
        return `General summary is: ${O ? O + ". " : ""}Point ${b + 1}, ${P}, ${ee}${G}${ae}`;
      const z = ws(J.variationIcon) || "Variation", ce = _s(J), se = ce.length ? ` Rules: ${[...new Set(ce.map((de) => vs[de].narration))].join("; ")}.` : " No special cause rules.", le = [];
      return c?.measureName && le.push(`Measure: ${c.measureName}.`), c?.datasetContext && le.push(`${c.datasetContext}.`), c?.organisation && le.push(`Organisation: ${c.organisation}.`), c?.additionalNote && le.push(c.additionalNote), [
        "General summary is:",
        ...le,
        `Point ${b + 1} recorded on `,
        P + ",",
        `with a value of ${ee} ${G}${ae}`,
        z + ".",
        se
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, O]
  ), te = X.useCallback(
    (b, H) => i?.[b] ? R({
      index: b,
      seriesId: "process",
      x: H.x instanceof Date ? H.x : new Date(H.x),
      y: H.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, R]
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
            width: E.xScale.range()[1] + 56 + 16,
            height: E.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(Co, { type: "x" }),
              /* @__PURE__ */ r.jsx(Co, { type: "y" }),
              /* @__PURE__ */ r.jsx(bh, { axis: "y" }),
              I,
              ne,
              D.map((b, H) => {
                const ee = _[b];
                if (!ee) return null;
                const J = T(ee.x instanceof Date ? ee.x : new Date(ee.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: J,
                    x2: J,
                    y1: 0,
                    y2: A.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${H}`
                );
              }),
              x?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                x.mean.map((b, H) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__cl", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y }, `mean-${H}`)),
                x.mean.map((b, H) => {
                  if (H === x.mean.length - 1) return null;
                  const ee = x.mean[H + 1];
                  if (!ee || b.y === ee.y) return null;
                  const Y = Math.max(4, ee.x1 - b.x2 || 0) * 0.5, P = `M ${b.x2},${b.y} C ${b.x2 + Y},${b.y} ${ee.x1 - Y},${ee.y} ${ee.x1},${ee.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: P, fill: "none" }, `mean-join-${H}`);
                })
              ] }) : null,
              k != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              x?.ucl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                x.ucl.map((b, H) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, strokeWidth: 2 }, `ucl-${H}`)),
                x.ucl.map((b, H) => {
                  if (H === x.ucl.length - 1) return null;
                  const ee = x.ucl[H + 1];
                  if (!ee || b.y === ee.y) return null;
                  const Y = Math.max(4, ee.x1 - b.x2 || 0) * 0.5, P = `M ${b.x2},${b.y} C ${b.x2 + Y},${b.y} ${ee.x1 - Y},${ee.y} ${ee.x1},${ee.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: P, fill: "none", strokeWidth: 2 }, `ucl-join-${H}`);
                })
              ] }) : null,
              x?.lcl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                x.lcl.map((b, H) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, strokeWidth: 2 }, `lcl-${H}`)),
                x.lcl.map((b, H) => {
                  if (H === x.lcl.length - 1) return null;
                  const ee = x.lcl[H + 1];
                  if (!ee || b.y === ee.y) return null;
                  const Y = Math.max(4, ee.x1 - b.x2 || 0) * 0.5, P = `M ${b.x2},${b.y} C ${b.x2 + Y},${b.y} ${ee.x1 - Y},${ee.y} ${ee.x1},${ee.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: P, fill: "none", strokeWidth: 2 }, `lcl-join-${H}`);
                })
              ] }) : null,
              k != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: T.range()[1],
                    y1: A(k),
                    y2: A(k),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: T.range()[0] - 7,
                    y: A(k) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      k,
                      " ",
                      y || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && x && x.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                x.onePos.map((b, H) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: b.x1,
                    x2: b.x2,
                    y1: b.y,
                    y2: b.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${H}`
                )),
                x.oneNeg.map((b, H) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: b.x1,
                    x2: b.x2,
                    y1: b.y,
                    y2: b.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${H}`
                )),
                x.twoPos.map((b, H) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: b.x1,
                    x2: b.x2,
                    y1: b.y,
                    y2: b.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${H}`
                )),
                x.twoNeg.map((b, H) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: b.x1,
                    x2: b.x2,
                    y1: b.y,
                    y2: b.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${H}`
                ))
              ] }),
              /* @__PURE__ */ r.jsx(
                ep,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (b) => b.x instanceof Date ? b.x : new Date(b.x),
                  smooth: !1,
                  strokeWidth: g
                }
              ),
              t && _.map((b, H) => {
                const ee = T(b.x instanceof Date ? b.x : new Date(b.x)), J = A(b.y), Y = v.has(H), P = N?.[H], G = [
                  "fdp-spc__point",
                  Y && o ? "fdp-spc__point--ooc" : null,
                  l && P?.special && P.concern ? "fdp-spc__point--sc-concern" : null,
                  l && P?.special && P.improvement ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && h && P?.special && P.variation === Be.Neither ? "fdp-spc__point--sc-no-judgement" : null,
                  P?.assurance === Bt.Pass ? "fdp-spc__point--assurance-pass" : null,
                  P?.assurance === Bt.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ae = `Point ${H + 1} value ${b.y}` + (P?.special ? " special cause" : "") + (P?.variation === Be.Improvement ? " improving" : P?.variation === Be.Concern ? " concern" : ""), z = F?.focused?.index === H;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: ee,
                    cy: J,
                    r: 5,
                    className: G,
                    "data-variation": P?.variation,
                    "data-assurance": P?.assurance,
                    "aria-label": ae,
                    ...z ? { "aria-describedby": `spc-tooltip-${H}` } : {}
                  },
                  H
                );
              }),
              d && l && N && _.map((b, H) => {
                const ee = N[H];
                if (!ee || !(ee.concern || ee.improvement)) return null;
                const J = T(b.x instanceof Date ? b.x : new Date(b.x)), Y = A(b.y);
                let P = Y - 10;
                const G = 12, ae = A.range()[0] - 4;
                P < G && (P = Math.min(Y + 16, ae));
                const z = T.range()[1], ce = Math.min(Math.max(J, 0), z - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: ce,
                    y: P,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${ee.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: ee.concern ? "!" : "★"
                  },
                  `icon-${H}`
                );
              }),
              L && /* @__PURE__ */ r.jsx(
                Dp,
                {
                  width: T.range()[1],
                  height: A.range()[0]
                }
              ),
              /* @__PURE__ */ r.jsx(
                Yi,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: te,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (b) => W(b),
                  enableNeutralNoJudgement: h,
                  showTrendGatingExplanation: p
                }
              )
            ] })
          }
        ),
        n && /* @__PURE__ */ r.jsx(
          tp,
          {
            format: (b) => R({ ...b, x: b.x instanceof Date ? b.x : new Date(b.x) })
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
  Direction: je,
  MetricPolarity: Ue,
  SPCAssuranceIcon: Wr,
  SPCVariationIcon: Or,
  VariationJudgement: nt,
  VariationState: Ie,
  getVariationColour: ks,
  getVariationTrend: zr
}, Symbol.toStringTag, { value: "Module" })), ib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Bt,
  AssuranceResult: Rt,
  BaselineSuggestionReason: Ui,
  ChartType: bs,
  Direction: je,
  Icons: $p,
  ImprovementDirection: Ye,
  MetricPolarity: Ue,
  RULE_METADATA: fp,
  SPCAssuranceIcon: Wr,
  SPCChart: Np,
  SPCTooltipOverlay: Yi,
  SPCVariationIcon: Or,
  SpcWarningCategory: Oi,
  SpcWarningCode: Wi,
  SpcWarningSeverity: Pt,
  VARIATION_COLOR_TOKENS: ct,
  VariationIcon: Be,
  VariationJudgement: nt,
  VariationState: Ie,
  buildSpc: ys,
  extractRuleIds: _s,
  getVariationColorHex: bp,
  getVariationColorToken: Vi,
  getVariationColour: ks,
  getVariationTrend: zr,
  normaliseSpcSettings: Gi,
  ruleGlossary: vs,
  variationLabel: ws
}, Symbol.toStringTag, { value: "Module" })), Mp = "150ms", Ip = "300ms", Lp = "500ms", Fp = "cubic-bezier(0.4, 0, 1, 1)", Ep = "cubic-bezier(0, 0, 0.2, 1)", Ap = "cubic-bezier(0.4, 0, 0.2, 1)", Pp = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Rp = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Bp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Hp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", zp = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Op = "1px", Wp = "2px", Up = "4px", Gp = "4px", Vp = "4px", Yp = "2px", qp = "1px", Xp = "0px", Kp = "4px", Zp = "8px", Jp = "12px", Ki = "#d8dde0", Zi = "#4c6272", Ji = "#d8dde0", Qi = "#aeb7bd", el = "#d5281b", tl = "#005eb8", nl = "#ffffff", rl = "#212b32", al = "#007f3b", sl = "#330072", ol = "#7c2855", il = "#d5281b", ll = "#ffeb3b", cl = "#fff9c4", dl = "#ffb81c", ul = "#ed8b00", fl = "#00a499", hl = "#ae2573", pl = "#4c6272", ml = "#768692", gl = "#aeb7bd", xl = "#d8dde0", bl = "#f0f4f5", Qp = "#212b32", em = "#4c6272", tm = "#ffffff", nm = "#212b32", rm = "#005eb8", am = "#7c2855", sm = "#003087", om = "#330072", im = "#ffeb3b", lm = "#212b32", cm = "#d8dde0", dm = "#ffffff33", um = "#d5281b", fm = "#4c6272", hm = "#ffffff", pm = "#007f3b", mm = "#ffffff", gm = "#006530", xm = "#004021", bm = "#004021", ym = "#00000000", vm = "#ffffff", _m = "#005eb8", wm = "#005eb8", Sm = "#d9e5f2", km = "#c7daf0", Cm = "#005eb8", jm = "#ffffff", Nm = "#212b32", Tm = "#d9dde0", Dm = "#b3bcc2", $m = "#b3bcc2", Mm = "#d5281b", Im = "#aa2016", Lm = "#6a140e", Fm = "#6a140e", Em = "#005eb8", Am = "#004b93", Pm = "#002f5c", Rm = "#002f5c", Bm = "8px", Hm = "16px", zm = "12px", Om = "16px", Wm = "4px", Um = "40px", Gm = "4px", Vm = "40px", Ym = "12px", qm = "16px", Xm = "32px", Km = "16px", Zm = "20px", Jm = "28px", Qm = "9px", eg = "2px", tg = "16px", ng = "24px", rg = "8px", ag = "24px", sg = "16px", og = "4px", ig = "4px", lg = "4px", cg = "8px", dg = "4px", ug = "16px", fg = "#007f3b", hg = "#006530", pg = "#004021", mg = "#d8dde0", gg = "#ffffff", xg = "#768692", bg = "#00000000", yg = "#ffeb3b", vg = "#00000000", _g = "#ffffff", wg = "#d9e5f2", Sg = "#c7daf0", kg = "#005eb8", Cg = "#005eb8", yl = "8px", vl = "16px", _l = "12px", wl = "16px", jg = "2px", Ng = "4px", Tg = "4px", Dg = "600", $g = "#ffffff", Mg = "#d8dde0", Ig = "#aeb7bd", Lg = "#f0f4f5", Fg = "#212b32", Eg = "#212b32", Ag = "#005eb8", Sl = "16px", kl = "32px", Cl = "16px", Pg = "1px", Rg = "4px", Bg = "none", Hg = "0 2px 4px rgba(0, 0, 0, 0.1)", zg = "#ffffff", Og = "#ffffff", Wg = "#d8dde0", Ug = "#ffffff", Gg = "#4c6272", Vg = "#ffeb3b", Yg = "#d5281b", qg = "#aeb7bd", Xg = "#212b32", Kg = "#4c6272", Zg = "#768692", Jg = "#212b32", Qg = "#ffffff", e0 = "600", t0 = "#d5281b", n0 = "600", r0 = "#4c6272", jl = "4px", Nl = "40px", Tl = "40px", Dl = "12px", a0 = "2px", s0 = "4px", o0 = "0px", i0 = "16px", l0 = "18px", c0 = "24px", d0 = "32px", u0 = "34px", f0 = "32px", h0 = "40px", p0 = "48px", m0 = "5.4ex", g0 = "7.2ex", x0 = "9ex", b0 = "10.8ex", y0 = "20ex", v0 = "38ex", _0 = "56ex", w0 = "44px", S0 = "40px", k0 = "1020px", C0 = "100%", j0 = "50%", N0 = "33.333%", T0 = "25%", D0 = "20%", $0 = "320px", M0 = "641px", I0 = "1025px", L0 = "1280px", F0 = "960px", E0 = "32px", A0 = "16px", P0 = "#d5281b", R0 = "#d5281b", B0 = "#ffffff", H0 = "#007f3b", z0 = "#007f3b", O0 = "#ffffff", W0 = "#ffeb3b", U0 = "#ffeb3b", G0 = "#212b32", V0 = "#005eb8", Y0 = "#005eb8", q0 = "#ffffff", X0 = "#d8dde0", K0 = "#aeb7bd", Z0 = "#768692", J0 = "0 4px 0 #004021", Q0 = "0 4px 0 #005eb8", ex = "0 4px 0 #6a140e", tx = "0 4px 0 #ffeb3b", nx = "none", rx = "0 2px 4px rgba(0, 0, 0, 0.1)", ax = "4px", sx = "0px", ox = "solid", ix = "0 0 0 3px #ffeb3b", lx = "0 0 0 3px #ffeb3b", cx = "none", dx = "0 1px 3px rgba(0, 0, 0, 0.12)", ux = "0 2px 6px rgba(0, 0, 0, 0.16)", fx = "0 4px 12px rgba(0, 0, 0, 0.20)", $l = "0", Ml = "4px", Il = "8px", Ll = "16px", Fl = "24px", El = "32px", Al = "40px", Pl = "48px", Rl = "56px", Bl = "64px", Ea = "0", Aa = "0", Pa = "4px", Ra = "4px", Ba = "8px", Ha = "8px", za = "8px", Oa = "16px", Wa = "16px", Ua = "24px", Ga = "24px", Va = "32px", Ya = "32px", qa = "40px", Xa = "40px", Ka = "48px", Za = "48px", Ja = "56px", Qa = "56px", es = "64px", dr = "Frutiger W01", ur = "Arial, Helvetica, sans-serif", fr = "sans-serif", hr = "400", pr = "600", mr = "400", gr = "12px", xr = "14px", br = "12pt", yr = "14px", vr = "16px", _r = "12pt", wr = "16px", Sr = "19px", kr = "13pt", Cr = "19px", jr = "22px", Nr = "15pt", Tr = "22px", Dr = "26px", $r = "17pt", Mr = "27px", Ir = "36px", Lr = "20pt", Fr = "33px", Er = "48px", Ar = "24pt", ts = "16px", ns = "24px", yt = {
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
  AnimationEasingBounce: Pp,
  AnimationEasingEaseIn: Fp,
  AnimationEasingEaseInOut: Ap,
  AnimationEasingEaseOut: Ep,
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
  BorderWidthDefault: Op,
  BorderWidthFormElement: Wp,
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
  CardBorderWidthDefault: Pg,
  CardShadowDefault: Bg,
  CardShadowHover: Hg,
  CardSpacingHeadingMargin: Cl,
  CardSpacingPaddingDesktop: kl,
  CardSpacingPaddingMobile: Sl,
  CardTextDescription: Eg,
  CardTextHeading: Fg,
  CardTextLink: Ag,
  ColorBorderDefault: cm,
  ColorBorderSecondary: dm,
  ColorButtonLoginActive: Pm,
  ColorButtonLoginBackground: Em,
  ColorButtonLoginHover: Am,
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
  ComponentButtonPaddingDesktopHorizontal: Om,
  ComponentButtonPaddingDesktopVertical: zm,
  ComponentButtonPaddingMobileHorizontal: Hm,
  ComponentButtonPaddingMobileVertical: Bm,
  ComponentButtonShadowSize: Wm,
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
  FontSize48Print: Ar,
  FontSize48Tablet: Er,
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
  FormInputBackgroundDisabled: Wg,
  FormInputBackgroundError: Ug,
  FormInputBackgroundFocus: Og,
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
  GridGutter: E0,
  GridGutterHalf: A0,
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
  Spacing5: El,
  Spacing6: Al,
  Spacing7: Pl,
  Spacing8: Rl,
  Spacing9: Bl,
  SpacingResponsive0Mobile: Ea,
  SpacingResponsive0Tablet: Aa,
  SpacingResponsive1Mobile: Pa,
  SpacingResponsive1Tablet: Ra,
  SpacingResponsive2Mobile: Ba,
  SpacingResponsive2Tablet: Ha,
  SpacingResponsive3Mobile: za,
  SpacingResponsive3Tablet: Oa,
  SpacingResponsive4Mobile: Wa,
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
  StateErrorBackground: P0,
  StateErrorBorder: R0,
  StateErrorText: B0,
  StateInfoBackground: V0,
  StateInfoBorder: Y0,
  StateInfoText: q0,
  StateSuccessBackground: H0,
  StateSuccessBorder: z0,
  StateSuccessText: O0,
  StateWarningBackground: W0,
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
  Spacing5: El,
  Spacing6: Al,
  Spacing7: Pl,
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
    Size48: Er
  },
  Print: {
    Size14: br,
    Size16: _r,
    Size19: kr,
    Size22: Nr,
    Size26: $r,
    Size36: Lr,
    Size48: Ar
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
  FontSize48Tablet: Er,
  FontSize48Print: Ar,
  FontSizeBase: ts,
  FontLineHeightBase: ns
}), []), Sb = () => $e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Ea,
    Size1: Pa,
    Size2: Ba,
    Size3: za,
    Size4: Wa,
    Size5: Ga,
    Size6: Ya,
    Size7: Xa,
    Size8: Za,
    Size9: Qa
  },
  Tablet: {
    Size0: Aa,
    Size1: Ra,
    Size2: Ha,
    Size3: Oa,
    Size4: Ua,
    Size5: Va,
    Size6: qa,
    Size7: Ka,
    Size8: Ja,
    Size9: es
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Ea,
  SpacingResponsive0Tablet: Aa,
  SpacingResponsive1Mobile: Pa,
  SpacingResponsive1Tablet: Ra,
  SpacingResponsive2Mobile: Ba,
  SpacingResponsive2Tablet: Ha,
  SpacingResponsive3Mobile: za,
  SpacingResponsive3Tablet: Oa,
  SpacingResponsive4Mobile: Wa,
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
        size48: Er
      },
      print: {
        size14: br,
        size16: _r,
        size19: kr,
        size22: Nr,
        size26: $r,
        size36: Lr,
        size48: Ar
      }
    }
  }
}), []);
function Tb(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, s] = X.useState(t), o = X.useCallback(() => s("three-column"), []), i = X.useCallback(() => s((d) => d === "three-column" ? n : d), [n]), l = X.useCallback(() => s((d) => d === "three-column" ? n : "three-column"), [n]);
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
  Pp as AnimationEasingBounce,
  Fp as AnimationEasingEaseIn,
  Ap as AnimationEasingEaseInOut,
  Ep as AnimationEasingEaseOut,
  di as AppointmentCard,
  tb as AreaSeriesPrimitive,
  vf as AriaDataGrid,
  Ca as AriaTabsDataGrid,
  Yx as AriaTabsDataGridAdaptive,
  Co as Axis,
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
  Op as BorderWidthDefault,
  Wp as BorderWidthFormElement,
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
  si as Card,
  $g as CardBackgroundDefault,
  Lg as CardBorderBottom,
  Mg as CardBorderDefault,
  Ig as CardBorderHover,
  Rg as CardBorderWidthBottom,
  Pg as CardBorderWidthDefault,
  Ex as CardGroup,
  Ax as CardGroupItem,
  Bg as CardShadowDefault,
  Hg as CardShadowHover,
  Cl as CardSpacingHeadingMargin,
  kl as CardSpacingPaddingDesktop,
  Sl as CardSpacingPaddingMobile,
  Eg as CardTextDescription,
  Fg as CardTextHeading,
  Ag as CardTextLink,
  Px as CareCard,
  yx as CharacterCount,
  sb as ChartEnhancer,
  ab as ChartNoScript,
  gh as ChartRoot,
  hc as Checkbox,
  gc as Checkboxes,
  cm as ColorBorderDefault,
  dm as ColorBorderSecondary,
  Pm as ColorButtonLoginActive,
  Em as ColorButtonLoginBackground,
  Am as ColorButtonLoginHover,
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
  Om as ComponentButtonPaddingDesktopHorizontal,
  zm as ComponentButtonPaddingDesktopVertical,
  Hm as ComponentButtonPaddingMobileHorizontal,
  Bm as ComponentButtonPaddingMobileVertical,
  Wm as ComponentButtonShadowSize,
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
  Lo as Container,
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
  Ls as ErrorMessage,
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
  Ar as FontSize48Print,
  Er as FontSize48Tablet,
  ts as FontSizeBase,
  pr as FontWeightBold,
  mr as FontWeightLight,
  hr as FontWeightNormal,
  Bo as Footer,
  o0 as FormBorderRadius,
  a0 as FormBorderWidthDefault,
  s0 as FormBorderWidthError,
  t0 as FormErrorTextDefault,
  n0 as FormErrorTypographyWeight,
  r0 as FormHintTextDefault,
  zg as FormInputBackgroundDefault,
  Wg as FormInputBackgroundDisabled,
  Ug as FormInputBackgroundError,
  Og as FormInputBackgroundFocus,
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
  E0 as GridGutter,
  A0 as GridGutterHalf,
  bh as GridLines,
  F0 as GridPageWidth,
  Ro as Header,
  Mx as HeaderSSR,
  $c as HeaderSearch,
  Ro as HeaderStatic,
  Mt as Heading,
  vt as HeadingsNhsukHeadingL,
  _t as HeadingsNhsukHeadingM,
  wt as HeadingsNhsukHeadingS,
  yt as HeadingsNhsukHeadingXl,
  St as HeadingsNhsukHeadingXs,
  Mc as Hero,
  Mo as Hint,
  Ox as Images,
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
  Fo as MainWrapper,
  ui as MedicationCard,
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
  ci as PatientCard,
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
  ai as SkipLink,
  Wx as SlotMatrix,
  Gx as SortStatusControl,
  $l as Spacing0,
  Ml as Spacing1,
  Il as Spacing2,
  Ll as Spacing3,
  Fl as Spacing4,
  El as Spacing5,
  Al as Spacing6,
  Pl as Spacing7,
  Rl as Spacing8,
  Bl as Spacing9,
  Ea as SpacingResponsive0Mobile,
  Aa as SpacingResponsive0Tablet,
  Pa as SpacingResponsive1Mobile,
  Ra as SpacingResponsive1Tablet,
  Ba as SpacingResponsive2Mobile,
  Ha as SpacingResponsive2Tablet,
  za as SpacingResponsive3Mobile,
  Oa as SpacingResponsive3Tablet,
  Wa as SpacingResponsive4Mobile,
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
  P0 as StateErrorBackground,
  R0 as StateErrorBorder,
  B0 as StateErrorText,
  V0 as StateInfoBackground,
  Y0 as StateInfoBorder,
  q0 as StateInfoText,
  H0 as StateSuccessBackground,
  z0 as StateSuccessBorder,
  O0 as StateSuccessText,
  W0 as StateWarningBackground,
  U0 as StateWarningBorder,
  G0 as StateWarningText,
  yf as SummaryCard,
  Bx as SummaryList,
  dt as Table,
  Hx as Tabs,
  Ge as Tag,
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
  fi as VitalsCard,
  jx as WIDTH_FRACTIONS,
  zx as WarningCallout,
  xi as WidthContainer,
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
  yi as useNhsFdpBreakpoints,
  Sb as useResponsiveSpacing,
  Zx as useResponsiveValue,
  _b as useSpacing,
  yb as useTokens,
  wb as useTypography
};
//# sourceMappingURL=index.esm.js.map
